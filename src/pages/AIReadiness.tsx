import React, { useMemo, useState } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import {
  ACTIONS_BY_DIMENSION,
  CAPABILITY_LEVELS,
  FRAMEWORK_VERSION,
  NIST_TIERS,
  PILLARS,
  TRIPLETS,
  TRIPLETS_BY_PILLAR,
  TRIPLET_BY_DIMENSION_ID,
  WEIGHTING_PROFILES,
  dimensionGap,
  gapPriority,
  isHealthy,
  isRau,
  orgRollup,
  pillarWeight,
  type CapabilityLevel,
  type CapabilityOption,
  type DimensionTriplet,
  type NistTier,
  type Response as AssessResponse,
  type RiskTierOption,
  type WeightingProfileId,
} from '@/lib/aiReadinessFramework';
import { Container, DisplayHead, Eyebrow, GoldItalic, PageHero } from '@/components/design';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

/* ------------------------------------------------------------------ */
/*  Step machine                                                        */
/* ------------------------------------------------------------------ */

type IntroStep = 'concepts' | 'scales' | 'weighting' | 'sections' | 'setup';
type AssessStep = 'question' | 'pillar_summary' | 'dashboard';
type Step = IntroStep | AssessStep;

const INTRO_ORDER: IntroStep[] = ['concepts', 'scales', 'weighting', 'sections', 'setup'];

type State = {
  step: Step;
  profile: WeightingProfileId;
  orgName: string;
  pillarIndex: number; // 0..8 within PILLARS
  dimInPillar: number; // 0..N within current pillar's triplets
  responses: Record<string, AssessResponse>; // keyed by dimensionId
};

const INITIAL: State = {
  step: 'concepts',
  profile: 'default',
  orgName: '',
  pillarIndex: 0,
  dimInPillar: 0,
  responses: {},
};

const ACCENT = 'var(--accent)';
const RAU_RED = '#E0552B';
const HEALTHY_GREEN = '#8FBF7A';

/* ------------------------------------------------------------------ */
/*  Atoms                                                               */
/* ------------------------------------------------------------------ */

function PrimaryButton({
  children,
  onClick,
  disabled,
  style,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}) {
  const [hover, setHover] = useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: disabled ? 'var(--paper-2)' : ACCENT,
        color: disabled ? 'var(--muted)' : 'var(--paper)',
        border: 'none',
        padding: '14px 26px',
        fontFamily: 'var(--mono)',
        fontSize: 12,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'transform .15s ease, opacity .15s ease',
        transform: !disabled && hover ? 'translateY(-1px)' : 'none',
        opacity: disabled ? 0.55 : 1,
        ...style,
      }}
    >
      {children}
    </button>
  );
}

function GhostButton({
  children,
  onClick,
  disabled,
  style,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{
        background: 'transparent',
        color: disabled ? 'var(--muted)' : 'var(--ink)',
        border: '1px solid var(--line-strong)',
        padding: '14px 26px',
        fontFamily: 'var(--mono)',
        fontSize: 12,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.55 : 1,
        ...style,
      }}
    >
      {children}
    </button>
  );
}

function MonoEyebrow({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        fontFamily: 'var(--mono)',
        fontSize: 11,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: 'var(--muted)',
        marginBottom: 14,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function StepIntroFrame({
  index,
  total,
  kicker,
  title,
  italic,
  children,
  onBack,
  onNext,
  nextLabel = 'Continue',
}: {
  index: number;
  total: number;
  kicker: string;
  title: string;
  italic?: string;
  children: React.ReactNode;
  onBack?: () => void;
  onNext: () => void;
  nextLabel?: string;
}) {
  return (
    <section style={{ padding: '120px 0 80px', borderBottom: '1px solid var(--line)' }}>
      <Container>
        <Eyebrow style={{ marginBottom: 28 }}>{kicker}</Eyebrow>
        <DisplayHead size="clamp(34px, 5vw, 64px)" style={{ marginBottom: 32, maxWidth: 1100 }}>
          {title}
          {italic && (
            <>
              {' '}
              <GoldItalic>{italic}</GoldItalic>
            </>
          )}
        </DisplayHead>
        <div style={{ maxWidth: 1200, marginBottom: 56 }}>{children}</div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid var(--line)',
            paddingTop: 28,
          }}
        >
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.16em', color: 'var(--muted)' }}>
            Step {String(index).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            {onBack && <GhostButton onClick={onBack}>Back</GhostButton>}
            <PrimaryButton onClick={onNext}>{nextLabel} &rarr;</PrimaryButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Intro screens                                                       */
/* ------------------------------------------------------------------ */

function IntroConcepts({ index, total, onNext }: { index: number; total: number; onNext: () => void }) {
  return (
    <StepIntroFrame
      index={index}
      total={total}
      kicker="01 / Before you begin"
      title="A dual-axis"
      italic="readiness model."
      onNext={onNext}
    >
      <p style={{ fontSize: 19, lineHeight: 1.55, color: 'var(--ink)', maxWidth: 880, margin: '0 0 32px' }}>
        Every dimension in this assessment is measured on two independent axes — not just "how mature are we?"
        but "how well do we control the risk?" Treating them as one number is what produces AI programmes that
        scale capability faster than safety.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 4 }}>
        {[
          {
            tag: 'Axis 01',
            title: 'Capability',
            body: 'How well do we do this? Scored 1 (Initial) to 5 (Optimizing) against a dimension-specific rubric.',
          },
          {
            tag: 'Axis 02',
            title: 'Risk Maturity',
            body: 'How well do we control the risk of this? One of four NIST AI RMF tiers: Partial, Risk-Informed, Repeatable, Adaptive.',
          },
          {
            tag: 'Plus',
            title: 'Target',
            body: 'Where you want capability to land given the AI system’s risk class. Today’s gap = target − current.',
          },
        ].map((c) => (
          <div
            key={c.title}
            style={{ background: 'var(--paper-2)', padding: '32px 28px 28px', borderRadius: 4 }}
          >
            <MonoEyebrow style={{ color: ACCENT }}>{c.tag}</MonoEyebrow>
            <h3
              style={{
                fontFamily: 'var(--display)',
                fontSize: 26,
                lineHeight: 1.2,
                letterSpacing: '-0.01em',
                margin: '0 0 12px',
              }}
            >
              {c.title}
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--muted)', margin: 0 }}>{c.body}</p>
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: 40,
          padding: '24px 28px',
          background: 'var(--paper-2)',
          borderLeft: `3px solid ${RAU_RED}`,
        }}
      >
        <MonoEyebrow style={{ color: RAU_RED }}>RAU — racing ahead unsafely</MonoEyebrow>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'var(--ink)' }}>
          When capability runs ahead of risk maturity (capability &ge; 4 with a Partial or Risk-Informed tier),
          the dimension is flagged red on the dashboard. It’s the framework’s explicit danger signal — pause
          capability investment until risk maturity catches up.
        </p>
      </div>
    </StepIntroFrame>
  );
}

function IntroScales({
  index,
  total,
  onBack,
  onNext,
}: {
  index: number;
  total: number;
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <StepIntroFrame
      index={index}
      total={total}
      kicker="02 / Before you begin"
      title="The two"
      italic="answer scales."
      onBack={onBack}
      onNext={onNext}
    >
      <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--ink)', maxWidth: 880, margin: '0 0 36px' }}>
        Each of the 52 dimensions has its own rubric text, but the five capability levels and four NIST tiers
        below are the universal anchors.
      </p>

      <h3 style={{ fontFamily: 'var(--display)', fontSize: 22, margin: '0 0 16px' }}>
        Capability scale <span style={{ color: 'var(--muted)', fontSize: 14, marginLeft: 8 }}>(1 – 5)</span>
      </h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
          gap: 4,
          marginBottom: 48,
        }}
      >
        {CAPABILITY_LEVELS.map((lv) => (
          <div key={lv.id} style={{ background: 'var(--paper-2)', padding: '24px 22px 22px' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: ACCENT, marginBottom: 10 }}>
              {lv.id} / 5
            </div>
            <div
              style={{
                fontFamily: 'var(--display)',
                fontSize: 18,
                fontWeight: 600,
                margin: '0 0 8px',
                color: 'var(--ink)',
              }}
            >
              {lv.label}
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--muted)', margin: 0 }}>{lv.definition}</p>
          </div>
        ))}
      </div>

      <h3 style={{ fontFamily: 'var(--display)', fontSize: 22, margin: '0 0 16px' }}>
        NIST AI RMF risk-maturity tiers
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 4 }}>
        {NIST_TIERS.map((t) => (
          <div key={t.id} style={{ background: 'var(--paper-2)', padding: '24px 22px 22px' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: ACCENT, marginBottom: 10 }}>{t.id}</div>
            <div
              style={{
                fontFamily: 'var(--display)',
                fontSize: 18,
                fontWeight: 600,
                margin: '0 0 8px',
                color: 'var(--ink)',
              }}
            >
              {t.label}
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--muted)', margin: 0 }}>{t.meaning}</p>
          </div>
        ))}
      </div>
    </StepIntroFrame>
  );
}

function IntroWeighting({
  index,
  total,
  profile,
  setProfile,
  onBack,
  onNext,
}: {
  index: number;
  total: number;
  profile: WeightingProfileId;
  setProfile: (p: WeightingProfileId) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <StepIntroFrame
      index={index}
      total={total}
      kicker="03 / Before you begin"
      title="Pick a"
      italic="weighting profile."
      onBack={onBack}
      onNext={onNext}
    >
      <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--ink)', maxWidth: 880, margin: '0 0 36px' }}>
        The org-wide composite score weights pillars differently depending on industry and stage. You can change
        the profile at the end and recompute.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 4 }}>
        {WEIGHTING_PROFILES.map((p) => {
          const active = profile === p.id;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => setProfile(p.id)}
              style={{
                textAlign: 'left',
                background: active ? 'var(--paper-light)' : 'var(--paper-2)',
                color: active ? 'var(--ink-on-light)' : 'var(--ink)',
                border: active ? `2px solid ${ACCENT}` : '2px solid transparent',
                padding: '28px 26px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'background .15s ease',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 11,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: ACCENT,
                  marginBottom: 12,
                }}
              >
                Profile / {p.id}
              </div>
              <div style={{ fontFamily: 'var(--display)', fontSize: 22, fontWeight: 600, marginBottom: 10 }}>
                {p.name}
              </div>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.55,
                  color: active ? 'var(--muted-on-light)' : 'var(--muted)',
                  margin: 0,
                }}
              >
                {p.description}
              </p>
            </button>
          );
        })}
      </div>

      <div style={{ marginTop: 40 }}>
        <MonoEyebrow>Per-pillar weights ({profile})</MonoEyebrow>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 4 }}>
          {PILLARS.map((p) => (
            <div key={p.id} style={{ background: 'var(--paper-2)', padding: '16px 18px' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: ACCENT, letterSpacing: '0.16em' }}>
                {p.id}
              </div>
              <div style={{ fontSize: 13, color: 'var(--muted)', margin: '4px 0 8px' }}>{p.name}</div>
              <div style={{ fontFamily: 'var(--display)', fontSize: 22, color: 'var(--ink)' }}>
                {pillarWeight(p.id, profile).toFixed(1)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </StepIntroFrame>
  );
}

function IntroSections({
  index,
  total,
  onBack,
  onNext,
}: {
  index: number;
  total: number;
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <StepIntroFrame
      index={index}
      total={total}
      kicker="04 / Before you begin"
      title="Nine pillars,"
      italic="fifty-two dimensions."
      onBack={onBack}
      onNext={onNext}
    >
      <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--ink)', maxWidth: 880, margin: '0 0 36px' }}>
        The assessment walks you through 9 pillars. For each dimension you’ll answer three questions: current
        capability, target capability, and risk-control tier. Allow ~60 minutes for a complete pass.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 4 }}>
        {PILLARS.map((p) => {
          const dimCount = TRIPLETS_BY_PILLAR[p.id]?.length ?? 0;
          return (
            <div key={p.id} style={{ background: 'var(--paper-2)', padding: '28px 26px' }}>
              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}
              >
                <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: ACCENT, letterSpacing: '0.16em' }}>
                  {p.id}
                </span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted)' }}>
                  {dimCount} dimensions
                </span>
              </div>
              <div
                style={{
                  fontFamily: 'var(--display)',
                  fontSize: 20,
                  fontWeight: 600,
                  lineHeight: 1.2,
                  margin: '0 0 10px',
                  color: 'var(--ink)',
                }}
              >
                {p.name}
              </div>
              <p style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--muted)', margin: 0 }}>{p.purpose}</p>
            </div>
          );
        })}
      </div>
    </StepIntroFrame>
  );
}

function IntroSetup({
  index,
  total,
  orgName,
  setOrgName,
  onBack,
  onStart,
}: {
  index: number;
  total: number;
  orgName: string;
  setOrgName: (v: string) => void;
  onBack: () => void;
  onStart: () => void;
}) {
  return (
    <StepIntroFrame
      index={index}
      total={total}
      kicker="05 / Before you begin"
      title="One last thing"
      italic="and we'll start."
      onBack={onBack}
      onNext={onStart}
      nextLabel="Start assessment"
    >
      <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--ink)', maxWidth: 760, margin: '0 0 28px' }}>
        Tag your assessment with an organization name so the exported JSON report carries the right label. This
        runs entirely in your browser — nothing is uploaded.
      </p>
      <label style={{ display: 'block', maxWidth: 560 }}>
        <span
          style={{
            display: 'block',
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginBottom: 10,
          }}
        >
          Organization name (optional)
        </span>
        <input
          type="text"
          value={orgName}
          onChange={(e) => setOrgName(e.target.value)}
          placeholder="e.g. Example Corp"
          style={{
            width: '100%',
            background: 'var(--paper-2)',
            color: 'var(--ink)',
            border: '1px solid var(--line-strong)',
            padding: '16px 18px',
            fontFamily: 'var(--sans)',
            fontSize: 16,
          }}
        />
      </label>
    </StepIntroFrame>
  );
}

/* ------------------------------------------------------------------ */
/*  Question screen — one per dimension, three sub-questions stacked   */
/* ------------------------------------------------------------------ */

function ScalePicker<T extends number | string>({
  qid,
  prompt,
  value,
  options,
  onSelect,
}: {
  qid: string;
  prompt: string;
  value: T | null;
  options: { value: T; label: string; description: string }[];
  onSelect: (v: T) => void;
}) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 14, flexWrap: 'wrap' }}>
        <span
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 10,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: ACCENT,
            background: 'rgba(242,160,36,0.12)',
            padding: '4px 8px',
          }}
        >
          {qid}
        </span>
        <h3
          style={{
            fontFamily: 'var(--display)',
            fontSize: 18,
            margin: 0,
            color: 'var(--ink)',
            flex: '1 1 auto',
            minWidth: 0,
          }}
        >
          {prompt}
        </h3>
      </div>
      <div style={{ display: 'grid', gap: 2 }}>
        {options.map((opt) => {
          const active = value === opt.value;
          return (
            <button
              key={String(opt.value)}
              type="button"
              onClick={() => onSelect(opt.value)}
              style={{
                textAlign: 'left',
                background: active ? 'var(--paper-light)' : 'var(--paper-2)',
                color: active ? 'var(--ink-on-light)' : 'var(--ink)',
                border: active ? `2px solid ${ACCENT}` : '2px solid transparent',
                padding: '16px 20px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                display: 'flex',
                gap: 18,
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  border: `2px solid ${active ? ACCENT : 'var(--line-strong)'}`,
                  background: active ? ACCENT : 'transparent',
                  flexShrink: 0,
                  marginTop: 3,
                }}
              />
              <span style={{ flex: 1 }}>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--mono)',
                    fontSize: 11,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: active ? ACCENT : 'var(--muted)',
                    marginBottom: 6,
                  }}
                >
                  {opt.label}
                </span>
                <span
                  style={{
                    display: 'block',
                    fontSize: 14.5,
                    lineHeight: 1.55,
                    color: active ? 'var(--ink-on-light)' : 'var(--ink-2)',
                  }}
                >
                  {opt.description}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function QuestionScreen({
  pillarIndex,
  dimInPillar,
  responses,
  setResponse,
  onPrev,
  onNext,
}: {
  pillarIndex: number;
  dimInPillar: number;
  responses: Record<string, AssessResponse>;
  setResponse: (r: AssessResponse) => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const pillar = PILLARS[pillarIndex];
  const triplets = TRIPLETS_BY_PILLAR[pillar.id] ?? [];
  const t = triplets[dimInPillar];
  const r = responses[t.dimensionId] ?? {
    dimensionId: t.dimensionId,
    current: null,
    target: null,
    nistTier: null,
  };

  const globalIndex = TRIPLETS.findIndex((x) => x.dimensionId === t.dimensionId) + 1;

  const update = (patch: Partial<AssessResponse>) =>
    setResponse({ ...r, dimensionId: t.dimensionId, ...patch });

  const isFirstEver = pillarIndex === 0 && dimInPillar === 0;
  const complete = r.current != null && r.target != null && r.nistTier != null;

  const currentOptions = (t.current.options as CapabilityOption[]).map((o) => ({
    value: o.id,
    label: `${o.id} / 5 · ${o.label}`,
    description: o.description,
  }));
  const targetOptions = (t.target.options as CapabilityOption[]).map((o) => ({
    value: o.id,
    label: `${o.id} / 5 · ${o.label}`,
    description: o.description,
  }));
  const riskOptions = (t.risk.options as RiskTierOption[]).map((o) => ({
    value: o.id,
    label: o.label,
    description: o.description,
  }));

  const showEvidencePrompt =
    t.evidence &&
    t.evidence_required_at != null &&
    r.current != null &&
    r.current >= t.evidence_required_at;

  return (
    <section style={{ padding: '80px 0 60px' }}>
      <Container>
        {/* Top progress strip */}
        <div style={{ marginBottom: 40 }}>
          <div
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              letterSpacing: '0.18em',
              color: 'var(--muted)',
              textTransform: 'uppercase',
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: 12,
            }}
          >
            <span>
              {pillar.id} · {pillar.name}
            </span>
            <span>
              Dimension {globalIndex} / {TRIPLETS.length}
            </span>
          </div>
          <div style={{ height: 2, background: 'var(--paper-2)', position: 'relative' }}>
            <div
              style={{
                height: '100%',
                background: ACCENT,
                width: `${(globalIndex / TRIPLETS.length) * 100}%`,
                transition: 'width .3s ease',
              }}
            />
          </div>
          <div style={{ display: 'flex', gap: 4, marginTop: 16, flexWrap: 'wrap' }}>
            {PILLARS.map((p, i) => (
              <span
                key={p.id}
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 9,
                  letterSpacing: '0.18em',
                  padding: '4px 8px',
                  background: i === pillarIndex ? ACCENT : 'var(--paper-2)',
                  color: i === pillarIndex ? 'var(--paper)' : i < pillarIndex ? 'var(--ink)' : 'var(--muted)',
                  textTransform: 'uppercase',
                }}
              >
                {p.id}
              </span>
            ))}
          </div>
        </div>

        {/* Header — dimension */}
        <MonoEyebrow style={{ color: ACCENT }}>
          {t.dimensionId} · {t.dimensionName}
        </MonoEyebrow>
        <DisplayHead size="clamp(28px, 4vw, 48px)" style={{ margin: '0 0 24px', maxWidth: 1100 }}>
          {t.dimensionName}
        </DisplayHead>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 4,
            marginBottom: 40,
            background: 'var(--paper-2)',
            padding: 4,
          }}
        >
          <div style={{ padding: '22px 24px' }}>
            <MonoEyebrow>What it covers</MonoEyebrow>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0 }}>{t.what_it_covers}</p>
          </div>
          <div style={{ padding: '22px 24px' }}>
            <MonoEyebrow>Why it matters</MonoEyebrow>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0 }}>{t.why_it_matters}</p>
          </div>
        </div>

        {/* The three atomic spec questions, prompts verbatim from the spec */}
        <ScalePicker
          qid={t.current.id}
          prompt={t.current.prompt}
          value={r.current}
          options={currentOptions}
          onSelect={(v) => update({ current: v as CapabilityLevel })}
        />
        <ScalePicker
          qid={t.target.id}
          prompt={t.target.prompt}
          value={r.target}
          options={targetOptions}
          onSelect={(v) => update({ target: v as CapabilityLevel })}
        />
        <ScalePicker
          qid={t.risk.id}
          prompt={t.risk.prompt}
          value={r.nistTier}
          options={riskOptions}
          onSelect={(v) => update({ nistTier: v as NistTier })}
        />

        {showEvidencePrompt && (
          <div
            style={{
              background: 'var(--paper-2)',
              padding: '22px 24px',
              marginBottom: 32,
              borderLeft: `3px solid ${ACCENT}`,
            }}
          >
            <MonoEyebrow style={{ color: ACCENT }}>
              {t.evidence?.id ?? 'Evidence'} · suggested (capability &ge; {t.evidence_required_at})
            </MonoEyebrow>
            <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink)' }}>
              {t.evidence?.prompt}
            </p>
          </div>
        )}

        {t.common_pitfalls.length > 0 && (
          <div style={{ background: 'var(--paper-2)', padding: '20px 24px', marginBottom: 32 }}>
            <MonoEyebrow>Common pitfalls</MonoEyebrow>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {t.common_pitfalls.map((p, i) => (
                <li key={i} style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--muted)', marginBottom: 4 }}>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid var(--line)',
            paddingTop: 28,
            marginTop: 16,
          }}
        >
          <GhostButton onClick={onPrev} disabled={isFirstEver}>
            &larr; Back
          </GhostButton>
          <PrimaryButton onClick={onNext} disabled={!complete}>
            {dimInPillar === triplets.length - 1 ? 'Section summary' : 'Next dimension'} &rarr;
          </PrimaryButton>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Pillar summary                                                      */
/* ------------------------------------------------------------------ */

function PillarSummary({
  pillarIndex,
  responses,
  profile,
  onBack,
  onNext,
}: {
  pillarIndex: number;
  responses: Record<string, AssessResponse>;
  profile: WeightingProfileId;
  onBack: () => void;
  onNext: () => void;
}) {
  const pillar = PILLARS[pillarIndex];
  const triplets = TRIPLETS_BY_PILLAR[pillar.id] ?? [];
  const responseList = triplets
    .map((t) => responses[t.dimensionId])
    .filter(Boolean) as AssessResponse[];

  const currents = responseList.map((r) => r.current).filter((v): v is CapabilityLevel => v != null);
  const targets = responseList.map((r) => r.target).filter((v): v is CapabilityLevel => v != null);
  const avg = (xs: number[]) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : 0);

  const rauResponses = responseList.filter(isRau);
  const healthyResponses = responseList.filter(isHealthy);
  const isLastPillar = pillarIndex === PILLARS.length - 1;

  return (
    <section style={{ padding: '100px 0 80px' }}>
      <Container>
        <MonoEyebrow>
          {pillar.id} · weight {pillarWeight(pillar.id, profile).toFixed(1)} ({profile})
        </MonoEyebrow>
        <DisplayHead size="clamp(36px, 5vw, 60px)" style={{ marginBottom: 24, maxWidth: 1000 }}>
          {pillar.name} <GoldItalic>summary.</GoldItalic>
        </DisplayHead>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 4,
            marginBottom: 40,
          }}
        >
          <Stat label="Current avg" value={avg(currents).toFixed(2)} />
          <Stat label="Target avg" value={avg(targets).toFixed(2)} />
          <Stat label="Gap avg" value={(avg(targets) - avg(currents)).toFixed(2)} />
          <Stat
            label="RAU flags"
            value={rauResponses.length}
            accent={rauResponses.length > 0 ? RAU_RED : undefined}
          />
          <Stat
            label="Healthy dims"
            value={healthyResponses.length}
            accent={healthyResponses.length > 0 ? HEALTHY_GREEN : undefined}
          />
        </div>

        <h3 style={{ fontFamily: 'var(--display)', fontSize: 22, margin: '40px 0 16px' }}>By dimension</h3>
        <div style={{ display: 'grid', gap: 2 }}>
          {triplets.map((t) => {
            const r = responses[t.dimensionId];
            const rau = r ? isRau(r) : false;
            const healthy = r ? isHealthy(r) : false;
            const gap = r ? dimensionGap(r) : null;
            return (
              <div
                key={t.dimensionId}
                style={{
                  background: 'var(--paper-2)',
                  padding: '18px 22px',
                  display: 'grid',
                  gridTemplateColumns: '1fr auto auto auto auto',
                  gap: 20,
                  alignItems: 'center',
                  borderLeft: rau
                    ? `3px solid ${RAU_RED}`
                    : healthy
                    ? `3px solid ${HEALTHY_GREEN}`
                    : '3px solid transparent',
                }}
              >
                <span style={{ color: 'var(--ink)' }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: ACCENT, marginRight: 10 }}>
                    {t.dimensionId}
                  </span>
                  {t.dimensionName}
                </span>
                <Pill label={r?.current != null ? `${r.current}` : '—'} hint="Current" />
                <Pill label={r?.target != null ? `${r.target}` : '—'} hint="Target" />
                <Pill label={gap != null ? gapPriority(gap) : '—'} hint="Gap" />
                <Pill label={r?.nistTier ?? '—'} hint="Tier" />
              </div>
            );
          })}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid var(--line)',
            paddingTop: 28,
            marginTop: 48,
          }}
        >
          <GhostButton onClick={onBack}>&larr; Back to questions</GhostButton>
          <PrimaryButton onClick={onNext}>
            {isLastPillar ? 'See dashboard' : `Continue to ${PILLARS[pillarIndex + 1].name}`} &rarr;
          </PrimaryButton>
        </div>
      </Container>
    </section>
  );
}

function Stat({ label, value, accent }: { label: string; value: string | number; accent?: string }) {
  return (
    <div style={{ background: 'var(--paper-2)', padding: '22px 22px 20px' }}>
      <div
        style={{
          fontFamily: 'var(--mono)',
          fontSize: 10,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
          marginBottom: 8,
        }}
      >
        {label}
      </div>
      <div style={{ fontFamily: 'var(--display)', fontSize: 36, color: accent ?? ACCENT, lineHeight: 1 }}>
        {value}
      </div>
    </div>
  );
}

function Pill({ label, hint }: { label: string | number; hint: string }) {
  return (
    <div style={{ textAlign: 'center', fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)' }}>
      <div style={{ color: 'var(--ink)', fontSize: 14, marginBottom: 2 }}>{label}</div>
      <div style={{ letterSpacing: '0.14em', textTransform: 'uppercase' }}>{hint}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Dashboard                                                           */
/* ------------------------------------------------------------------ */

function Dashboard({
  responses,
  profile,
  setProfile,
  orgName,
  onRestart,
}: {
  responses: Record<string, AssessResponse>;
  profile: WeightingProfileId;
  setProfile: (p: WeightingProfileId) => void;
  orgName: string;
  onRestart: () => void;
}) {
  const responseList: AssessResponse[] = TRIPLETS.map(
    (t) => responses[t.dimensionId] ?? { dimensionId: t.dimensionId, current: null, target: null, nistTier: null },
  );
  const roll = useMemo(() => orgRollup(profile, responseList), [profile, responseList]);

  const radarData = useMemo(
    () => ({
      labels: PILLARS.map((p) => p.name.split(',')[0]),
      datasets: [
        {
          label: 'Current',
          data: roll.pillarRollups.map((pr) => pr.currentAvg ?? 0),
          backgroundColor: 'rgba(242, 160, 36, 0.24)',
          borderColor: 'rgba(242, 160, 36, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(242, 160, 36, 1)',
        },
        {
          label: 'Target',
          data: roll.pillarRollups.map((pr) => pr.targetAvg ?? 0),
          backgroundColor: 'rgba(245, 241, 234, 0.06)',
          borderColor: 'rgba(245, 241, 234, 0.55)',
          borderWidth: 1.5,
          borderDash: [4, 4],
          pointBackgroundColor: 'rgba(245, 241, 234, 0.85)',
        },
      ],
    }),
    [roll],
  );

  const radarOptions = useMemo(
    () => ({
      scales: {
        r: {
          angleLines: { color: 'rgba(245, 241, 234, 0.16)' },
          grid: { color: 'rgba(245, 241, 234, 0.1)' },
          suggestedMin: 0,
          suggestedMax: 5,
          ticks: {
            stepSize: 1,
            color: 'rgba(245, 241, 234, 0.55)',
            backdropColor: 'transparent',
          },
          pointLabels: {
            color: 'rgba(245, 241, 234, 0.9)',
            font: { family: 'JetBrains Mono', size: 11 },
          },
        },
      },
      plugins: {
        legend: {
          position: 'bottom' as const,
          labels: { color: 'rgba(245, 241, 234, 0.85)', font: { family: 'JetBrains Mono', size: 11 } },
        },
      },
    }),
    [],
  );

  const allRauDimIds = roll.pillarRollups.flatMap((pr) => pr.rauDimensionIds);
  const allHealthyDimIds = roll.pillarRollups.flatMap((pr) => pr.healthyDimensionIds);

  const priorityActions = useMemo(() => {
    const entries: {
      dim: DimensionTriplet;
      gap: number;
      current: CapabilityLevel;
      action?: (typeof ACTIONS_BY_DIMENSION)[string][number];
    }[] = [];
    for (const r of responseList) {
      if (r.current == null || r.target == null) continue;
      const gap = r.target - r.current;
      if (gap <= 0) continue;
      const trip = TRIPLET_BY_DIMENSION_ID[r.dimensionId];
      if (!trip) continue;
      const acts = ACTIONS_BY_DIMENSION[r.dimensionId] ?? [];
      const next = acts.find((a) => a.from_level === r.current) ?? acts[0];
      entries.push({ dim: trip, gap, current: r.current, action: next });
    }
    return entries.sort((a, b) => b.gap - a.gap).slice(0, 12);
  }, [responseList]);

  const downloadJson = () => {
    const payload = {
      assessment_id: crypto.randomUUID?.() ?? `kanz-${Date.now()}`,
      framework_version: FRAMEWORK_VERSION,
      generated_at: new Date().toISOString(),
      organization: { name: orgName || null, weighting_profile: profile },
      responses: responseList.map((r) => {
        const trip = TRIPLET_BY_DIMENSION_ID[r.dimensionId];
        return {
          dimension_id: r.dimensionId,
          pillar_id: trip?.pillarId,
          question_ids: {
            current: trip?.current.id,
            target: trip?.target.id,
            risk_tier: trip?.risk.id,
            evidence: trip?.evidence?.id ?? null,
          },
          current: r.current,
          target: r.target,
          gap: dimensionGap(r),
          nist_tier: r.nistTier,
        };
      }),
      computed: {
        pillar_averages: roll.pillarRollups.reduce<
          Record<string, { current_avg: number | null; target_avg: number | null; gap_avg: number | null }>
        >((acc, pr) => {
          acc[pr.pillarId] = { current_avg: pr.currentAvg, target_avg: pr.targetAvg, gap_avg: pr.gapAvg };
          return acc;
        }, {}),
        org_composite: roll.composite,
        org_avg_gap: roll.avgGap,
        org_risk_tier: roll.riskTier,
        rau_dimensions: allRauDimIds,
        healthy_dimensions: allHealthyDimIds,
      },
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ai-readiness-${(orgName || 'kanz').toLowerCase().replace(/\s+/g, '-')}-${new Date()
      .toISOString()
      .slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section style={{ padding: '100px 0 120px' }}>
      <Container>
        <MonoEyebrow>
          {orgName || 'Your organization'} · profile: {profile} · framework {FRAMEWORK_VERSION}
        </MonoEyebrow>
        <DisplayHead size="clamp(40px, 6vw, 76px)" style={{ marginBottom: 36, maxWidth: 1200 }}>
          AI Readiness <GoldItalic>dashboard.</GoldItalic>
        </DisplayHead>

        {roll.totalRau > 0 && (
          <div
            style={{
              background: 'var(--paper-2)',
              borderLeft: `4px solid ${RAU_RED}`,
              padding: '20px 24px',
              marginBottom: 32,
            }}
          >
            <MonoEyebrow style={{ color: RAU_RED }}>RAU · racing ahead unsafely</MonoEyebrow>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: 'var(--ink)' }}>
              Your capability has outrun your risk maturity in <strong>{roll.totalRau}</strong> dimension
              {roll.totalRau === 1 ? '' : 's'}. Pause capability investment in these areas until risk maturity
              catches up.
            </p>
          </div>
        )}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 4,
            marginBottom: 48,
          }}
        >
          <Stat label="Org composite" value={roll.composite != null ? roll.composite.toFixed(2) : '—'} />
          <Stat label="Avg gap" value={roll.avgGap != null ? roll.avgGap.toFixed(2) : '—'} />
          <Stat label="Org risk tier" value={roll.riskTier ?? '—'} />
          <Stat label="RAU dims" value={roll.totalRau} accent={roll.totalRau > 0 ? RAU_RED : undefined} />
          <Stat label="Healthy dims" value={roll.totalHealthy} accent={HEALTHY_GREEN} />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(380px, 1fr) minmax(280px, 1fr)',
            gap: 32,
            alignItems: 'start',
            marginBottom: 56,
          }}
        >
          <div style={{ background: 'var(--paper-2)', padding: 32 }}>
            <MonoEyebrow>Capability by pillar</MonoEyebrow>
            <Radar data={radarData} options={radarOptions} />
          </div>
          <div style={{ background: 'var(--paper-2)', padding: 32 }}>
            <MonoEyebrow>Profile</MonoEyebrow>
            <p style={{ fontSize: 14, color: 'var(--muted)', margin: '0 0 18px' }}>
              Switch the weighting profile to recompute the composite.
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {WEIGHTING_PROFILES.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setProfile(p.id)}
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 11,
                    letterSpacing: '0.06em',
                    padding: '8px 14px',
                    border: '1px solid var(--line-strong)',
                    background: profile === p.id ? ACCENT : 'transparent',
                    color: profile === p.id ? 'var(--paper)' : 'var(--ink)',
                    cursor: 'pointer',
                    borderRadius: 999,
                  }}
                >
                  {p.name}
                </button>
              ))}
            </div>
            <div style={{ marginTop: 28 }}>
              <MonoEyebrow>Per-pillar averages</MonoEyebrow>
              <div style={{ display: 'grid', gap: 6 }}>
                {roll.pillarRollups.map((pr) => {
                  const pillar = PILLARS.find((p) => p.id === pr.pillarId)!;
                  const cur = pr.currentAvg ?? 0;
                  const tgt = pr.targetAvg ?? 0;
                  return (
                    <div key={pr.pillarId} style={{ fontFamily: 'var(--mono)', fontSize: 11 }}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          color: 'var(--muted)',
                          marginBottom: 4,
                        }}
                      >
                        <span>
                          {pillar.id} · {pillar.name}
                        </span>
                        <span style={{ color: 'var(--ink)' }}>
                          {cur.toFixed(1)} → {tgt.toFixed(1)}
                        </span>
                      </div>
                      <div style={{ height: 4, background: 'var(--paper)', position: 'relative' }}>
                        <div
                          style={{
                            position: 'absolute',
                            inset: 0,
                            width: `${(tgt / 5) * 100}%`,
                            background: 'rgba(245,241,234,0.15)',
                          }}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            inset: 0,
                            width: `${(cur / 5) * 100}%`,
                            background: ACCENT,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {(allRauDimIds.length > 0 || allHealthyDimIds.length > 0) && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 32,
              marginBottom: 56,
            }}
          >
            {allRauDimIds.length > 0 && <DimList title="RAU dimensions" color={RAU_RED} ids={allRauDimIds} />}
            {allHealthyDimIds.length > 0 && (
              <DimList title="Healthy dimensions" color={HEALTHY_GREEN} ids={allHealthyDimIds} />
            )}
          </div>
        )}

        {priorityActions.length > 0 && (
          <div style={{ marginBottom: 56 }}>
            <h3 style={{ fontFamily: 'var(--display)', fontSize: 28, margin: '0 0 20px' }}>
              Top priority actions
            </h3>
            <div style={{ display: 'grid', gap: 4 }}>
              {priorityActions.map((entry, i) => (
                <div key={`${entry.dim.dimensionId}-${i}`} style={{ background: 'var(--paper-2)', padding: '22px 24px' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: 10,
                      flexWrap: 'wrap',
                      gap: 10,
                    }}
                  >
                    <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: ACCENT, letterSpacing: '0.14em' }}>
                      {entry.dim.dimensionId} · gap {entry.gap}
                    </span>
                    {entry.action && (
                      <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)' }}>
                        {entry.action.effort} · {entry.action.duration_weeks ?? '—'}w · {entry.action.owner_role}
                      </span>
                    )}
                  </div>
                  <div style={{ fontFamily: 'var(--display)', fontSize: 18, color: 'var(--ink)', marginBottom: 6 }}>
                    {entry.action?.title ?? `Close gap in ${entry.dim.dimensionName}`}
                  </div>
                  <p style={{ fontSize: 14, color: 'var(--muted)', margin: 0, lineHeight: 1.55 }}>
                    {entry.action?.description ?? entry.dim.what_it_covers}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div
          style={{
            display: 'flex',
            gap: 12,
            justifyContent: 'flex-end',
            borderTop: '1px solid var(--line)',
            paddingTop: 28,
          }}
        >
          <GhostButton onClick={onRestart}>Start over</GhostButton>
          <PrimaryButton onClick={downloadJson}>Download JSON report</PrimaryButton>
        </div>
      </Container>
    </section>
  );
}

function DimList({ title, color, ids }: { title: string; color: string; ids: string[] }) {
  return (
    <div style={{ background: 'var(--paper-2)', padding: 24, borderLeft: `3px solid ${color}` }}>
      <MonoEyebrow style={{ color }}>{title}</MonoEyebrow>
      <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
        {ids.map((id) => {
          const t = TRIPLET_BY_DIMENSION_ID[id];
          if (!t) return null;
          return (
            <li key={id} style={{ marginBottom: 8, fontSize: 14, color: 'var(--ink)' }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', marginRight: 8 }}>
                {id}
              </span>
              {t.dimensionName}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Top-level page                                                      */
/* ------------------------------------------------------------------ */

const AIReadiness: React.FC = () => {
  const [state, setState] = useState<State>(INITIAL);
  const introIndex = INTRO_ORDER.indexOf(state.step as IntroStep);
  const introTotal = INTRO_ORDER.length;

  const goIntro = (step: IntroStep) => setState((s) => ({ ...s, step }));

  const startAssessment = () =>
    setState((s) => ({ ...s, step: 'question', pillarIndex: 0, dimInPillar: 0 }));

  const setResponse = (r: AssessResponse) =>
    setState((s) => ({ ...s, responses: { ...s.responses, [r.dimensionId]: r } }));

  const advanceQuestion = () => {
    setState((s) => {
      const pillar = PILLARS[s.pillarIndex];
      const triplets = TRIPLETS_BY_PILLAR[pillar.id] ?? [];
      if (s.dimInPillar < triplets.length - 1) return { ...s, dimInPillar: s.dimInPillar + 1 };
      return { ...s, step: 'pillar_summary' };
    });
  };

  const previousQuestion = () => {
    setState((s) => {
      if (s.dimInPillar > 0) return { ...s, dimInPillar: s.dimInPillar - 1 };
      if (s.pillarIndex > 0) {
        const prevPillar = PILLARS[s.pillarIndex - 1];
        const prevTriplets = TRIPLETS_BY_PILLAR[prevPillar.id] ?? [];
        return { ...s, pillarIndex: s.pillarIndex - 1, dimInPillar: prevTriplets.length - 1 };
      }
      return s;
    });
  };

  const continueAfterSummary = () => {
    setState((s) => {
      if (s.pillarIndex < PILLARS.length - 1) {
        return { ...s, step: 'question', pillarIndex: s.pillarIndex + 1, dimInPillar: 0 };
      }
      return { ...s, step: 'dashboard' };
    });
  };

  const restart = () => setState(INITIAL);

  const showHero = INTRO_ORDER.includes(state.step as IntroStep);

  return (
    <div>
      {showHero && (
        <PageHero
          kicker="06 / AI Readiness"
          title="Assess your"
          italic="AI readiness."
          lede="A 52-dimension framework across 9 pillars. Each dimension scored on capability and NIST risk-maturity tier — so growth without governance gets flagged, not rewarded."
          meta={[`Framework v${FRAMEWORK_VERSION}`, '9 pillars', '52 dimensions', '156 questions']}
        />
      )}

      {state.step === 'concepts' && (
        <IntroConcepts index={introIndex + 1} total={introTotal} onNext={() => goIntro('scales')} />
      )}
      {state.step === 'scales' && (
        <IntroScales
          index={introIndex + 1}
          total={introTotal}
          onBack={() => goIntro('concepts')}
          onNext={() => goIntro('weighting')}
        />
      )}
      {state.step === 'weighting' && (
        <IntroWeighting
          index={introIndex + 1}
          total={introTotal}
          profile={state.profile}
          setProfile={(p) => setState((s) => ({ ...s, profile: p }))}
          onBack={() => goIntro('scales')}
          onNext={() => goIntro('sections')}
        />
      )}
      {state.step === 'sections' && (
        <IntroSections
          index={introIndex + 1}
          total={introTotal}
          onBack={() => goIntro('weighting')}
          onNext={() => goIntro('setup')}
        />
      )}
      {state.step === 'setup' && (
        <IntroSetup
          index={introIndex + 1}
          total={introTotal}
          orgName={state.orgName}
          setOrgName={(v) => setState((s) => ({ ...s, orgName: v }))}
          onBack={() => goIntro('sections')}
          onStart={startAssessment}
        />
      )}

      {state.step === 'question' && (
        <QuestionScreen
          pillarIndex={state.pillarIndex}
          dimInPillar={state.dimInPillar}
          responses={state.responses}
          setResponse={setResponse}
          onPrev={previousQuestion}
          onNext={advanceQuestion}
        />
      )}
      {state.step === 'pillar_summary' && (
        <PillarSummary
          pillarIndex={state.pillarIndex}
          responses={state.responses}
          profile={state.profile}
          onBack={() => setState((s) => ({ ...s, step: 'question' }))}
          onNext={continueAfterSummary}
        />
      )}
      {state.step === 'dashboard' && (
        <Dashboard
          responses={state.responses}
          profile={state.profile}
          setProfile={(p) => setState((s) => ({ ...s, profile: p }))}
          orgName={state.orgName}
          onRestart={restart}
        />
      )}
    </div>
  );
};

export default AIReadiness;
