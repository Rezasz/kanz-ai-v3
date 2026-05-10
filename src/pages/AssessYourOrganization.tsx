import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  DisplayHead,
  Eyebrow,
  GoldItalic,
  PageCTA,
  PageHero,
} from '@/components/design';

const ASSESSMENTS = [
  {
    num: '01',
    title: 'AI Readiness Assessment',
    italic: 'are you set up to win?',
    description: "Evaluate your organization's preparedness to adopt and implement AI technologies effectively.",
    features: [
      'Comprehensive readiness evaluation',
      'Gap analysis across key dimensions',
      'Actionable recommendations',
      'Benchmarking against industry standards',
    ],
    link: '/ai-readiness',
  },
  {
    num: '02',
    title: 'Data Maturity Assessment',
    italic: 'is your data AI-ready?',
    description: "Assess your organization's data management capabilities and readiness for AI-driven analytics.",
    features: [
      'Data governance evaluation',
      'Quality management assessment',
      'Infrastructure readiness check',
      'Privacy and compliance review',
    ],
    link: '/data-maturity',
  },
  {
    num: '03',
    title: 'AI Maturity Assessment',
    italic: 'where do you stand?',
    description: "Measure your organization's current AI maturity level and identify paths for advancement.",
    features: [
      'Comprehensive maturity scoring',
      'Capability assessment',
      'Strategic alignment check',
      'Growth opportunity identification',
    ],
    link: '/framework/maturity-assessment',
  },
  {
    num: '04',
    title: 'AI Risk Self-Assessment',
    italic: 'what could go wrong?',
    description:
      "Assess your organization's exposure to AI risk across governance, privacy, security, misinformation, misuse, oversight, and system safety.",
    features: [
      'Seven AI risk domains scored 0–140',
      'Domain-level radar profile',
      'Causal diagnosis (who, when, intent)',
      'Top-three priority areas + actions',
    ],
    link: '/ai-risk-assessment',
  },
];

const BENEFITS = [
  { title: 'Clear Direction', description: 'A detailed understanding of your current state and clear recommendations for improvement.' },
  { title: 'Benchmarking', description: 'Compare your capabilities against industry standards and best practices.' },
  { title: 'Risk Mitigation', description: 'Identify potential challenges and risks before they impact your initiatives.' },
  { title: 'Resource Optimization', description: "Focus your investments and efforts where they'll have the most impact." },
  { title: 'Stakeholder Alignment', description: 'Build consensus around priorities and next steps with objective assessment data.' },
  { title: 'Actionable Insights', description: 'Practical, actionable recommendations tailored to your organization.' },
];

function AssessmentCard({ num, title, italic, description, features, link }: (typeof ASSESSMENTS)[number]) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      to={link}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? 'var(--ink)' : 'var(--paper-2)',
        color: hover ? 'var(--paper)' : 'var(--ink)',
        padding: '48px 40px 40px',
        minHeight: 440,
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'background .25s ease, color .25s ease',
        textDecoration: 'none',
      }}
    >
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
          <span
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              letterSpacing: '0.18em',
              color: 'var(--accent)',
            }}
          >
            ASSESSMENT / {num}
          </span>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 11, opacity: 0.55 }}>~ 12 MIN</span>
        </div>
        <h3
          style={{
            fontFamily: 'var(--display)',
            fontWeight: 'var(--display-weight)' as unknown as number,
            fontSize: 'clamp(28px, 3.5vw, 44px)',
            lineHeight: 1.06,
            letterSpacing: '-0.02em',
            margin: 0,
          }}
        >
          {title}
          <br />
          <GoldItalic>{italic}</GoldItalic>
        </h3>
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.6,
            opacity: 0.78,
            color: hover ? 'var(--paper)' : 'var(--muted)',
            margin: '24px 0 0',
            maxWidth: 480,
          }}
        >
          {description}
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '28px 0 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {features.map((f) => (
            <li key={f} style={{ display: 'flex', alignItems: 'baseline', gap: 12, fontSize: 13.5 }}>
              <span style={{ width: 14, height: 1, background: 'var(--accent)', marginTop: 8, flexShrink: 0 }} />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{
          marginTop: 32,
          paddingTop: 20,
          borderTop: hover ? '1px solid color-mix(in oklab, var(--paper) 18%, transparent)' : '1px solid var(--line-strong)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: 'var(--mono)',
          fontSize: 11,
          letterSpacing: '0.16em',
          color: hover ? 'var(--accent)' : 'var(--ink)',
        }}
      >
        <span>START ASSESSMENT</span>
        <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
          <path
            d="M3 7H11M11 7L7 3M11 7L7 11"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  );
}

const AssessYourOrganization = () => {
  return (
    <div>
      <PageHero
        kicker="06 / Assessments"
        title="Find your starting"
        italic="point — in 12 minutes."
        lede="Comprehensive assessments to evaluate your organization's readiness and maturity in AI adoption."
        meta={['Free to start', '4 assessments', 'Domain-level results']}
      />

      <section style={{ padding: '100px 0' }}>
        <Container>
          <div
            className="kanz-asmt-grid"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}
          >
            {ASSESSMENTS.map((a) => (
              <AssessmentCard key={a.num} {...a} />
            ))}
          </div>
        </Container>
        <style>{`@media (max-width: 780px){.kanz-asmt-grid{grid-template-columns:1fr !important;}}`}</style>
      </section>

      <section
        style={{
          padding: '120px 0',
          background: 'var(--paper-2)',
          borderTop: '1px solid var(--line)',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <Container>
          <div
            className="kanz-ben-grid"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}
          >
            <div style={{ position: 'sticky', top: 120 }}>
              <Eyebrow style={{ marginBottom: 24 }}>Why take our assessments?</Eyebrow>
              <DisplayHead size="clamp(34px, 4.4vw, 60px)">
                Insights to <GoldItalic>guide</GoldItalic> your AI journey.
              </DisplayHead>
            </div>
            <div
              className="kanz-ben-inner"
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}
            >
              {BENEFITS.map((b, i) => (
                <div
                  key={b.title}
                  style={{
                    background: 'var(--paper)',
                    padding: '32px 28px',
                    borderRadius: 4,
                    minHeight: 180,
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 10,
                      letterSpacing: '0.18em',
                      color: 'var(--accent)',
                      marginBottom: 18,
                    }}
                  >
                    / {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--display)',
                      fontWeight: 'var(--display-weight)' as unknown as number,
                      fontSize: 22,
                      lineHeight: 1.18,
                      letterSpacing: '-0.01em',
                      margin: '0 0 12px',
                    }}
                  >
                    {b.title}
                  </h3>
                  <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--muted)', margin: 0 }}>{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
        <style>{`
          @media (max-width: 980px){.kanz-ben-grid{grid-template-columns:1fr !important;gap:48px !important;}}
          @media (max-width: 600px){.kanz-ben-inner{grid-template-columns:1fr !important;}}
        `}</style>
      </section>

      <PageCTA
        kicker="Need help?"
        title="Need expert"
        italic="guidance?"
        body="Our team can help you interpret your assessment results and develop an action plan tailored to your business reality."
        primary={{ label: 'Schedule a consultation', to: '/contact' }}
      />
    </div>
  );
};

export default AssessYourOrganization;
