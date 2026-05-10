import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowBtn,
  ArrowLink,
  Container,
  DisplayHead,
  Eyebrow,
  GoldItalic,
  HeroBackdrop,
  MarqueeStrip,
  MaturityRadar,
  StatBlock,
} from '@/components/design';

const SERVICES = [
  {
    n: '01',
    t: 'AI Strategy & Consulting',
    d: 'Develop a comprehensive AI roadmap aligned with your business objectives.',
    features: ['AI readiness assessment', 'Strategy development', 'Implementation planning', 'ROI analysis'],
    href: '/services/ai-strategy',
  },
  {
    n: '02',
    t: 'Digital Transformation',
    d: 'End-to-end digital transformation solutions for the modern enterprise.',
    features: ['Process automation', 'Legacy system modernization', 'Cloud migration', 'Digital workflow optimization'],
    href: '/services/digital-transformation',
  },
  {
    n: '03',
    t: 'AI Implementation',
    d: 'Deploy intelligent automation and AI-powered systems across your organization.',
    features: ['AI-powered automation', 'Intelligent copilots', 'Content services platforms', 'Custom AI development'],
    href: '/services/ai-implementation',
  },
  {
    n: '04',
    t: 'AI Governance',
    d: 'Establish robust AI governance frameworks and policies.',
    features: ['Policy development', 'Risk management', 'Compliance monitoring', 'Ethical AI guidelines'],
    href: '/services/ai-governance',
  },
  {
    n: '05',
    t: 'Data Analytics',
    d: 'Transform your data into actionable insights.',
    features: ['Data strategy', 'Advanced analytics', 'Predictive modeling', 'Visualization'],
    href: '/services/data-analytics',
  },
  {
    n: '06',
    t: 'AI Risk Management',
    d: 'Build governed, trusted, and scalable AI through risk assessment and oversight.',
    features: ['AI risk assessment', 'Use case risk classification', 'Responsible AI policies', 'Vendor & control evaluation'],
    href: '/services/ai-risk-management',
  },
];

const INDUSTRIES = [
  {
    n: 'I/01',
    t: 'Energy & Oil & Gas',
    d: 'AI-driven predictive maintenance & operational efficiency solutions for the energy sector.',
    href: '/industries/energy',
  },
  {
    n: 'I/02',
    t: 'Banking & Finance',
    d: 'AI solutions for fraud detection, customer insights, and process automation.',
    href: '/industries/banking-finance',
  },
  {
    n: 'I/03',
    t: 'Manufacturing',
    d: 'Smart factory solutions with predictive analytics and automation.',
    href: '/industries/manufacturing',
  },
  {
    n: 'I/04',
    t: 'Healthcare',
    d: 'AI applications in diagnostics, drug discovery, and patient care optimization.',
    href: '/industries/healthcare',
  },
  {
    n: 'I/05',
    t: 'Public Sector',
    d: 'AI solutions for governance, public service automation, and smart city initiatives.',
    href: '/industries/public-sector',
  },
  {
    n: 'I/06',
    t: 'Retail & E-commerce',
    d: 'AI-powered customer personalization & inventory management systems.',
    href: '/industries/retail',
  },
];

const FRAMEWORKS = [
  {
    code: 'F/01',
    title: 'Kanz Maturity Model',
    category: 'AI Maturity',
    excerpt:
      'A comprehensive framework for assessing and enhancing AI capabilities across technology, people, process, and data dimensions.',
    weights: [0.95, 0.7, 0.85, 0.8] as [number, number, number, number],
    href: '/framework/maturity-model',
  },
  {
    code: 'F/02',
    title: 'AI Readiness Framework',
    category: 'AI Readiness',
    excerpt:
      "Evaluate your organization's preparedness for AI adoption across data, infrastructure, skills, and change management areas.",
    weights: [0.65, 0.55, 0.5, 0.85] as [number, number, number, number],
    href: '/framework/ai-readiness',
  },
  {
    code: 'F/03',
    title: 'AI Strategy Framework',
    category: 'AI Strategy',
    excerpt:
      'Develop and execute an AI strategy that aligns with business goals and scales effectively across your organization.',
    weights: [0.85, 0.6, 0.95, 0.55] as [number, number, number, number],
    href: '/framework/ai-strategy',
  },
  {
    code: 'F/04',
    title: 'Consulting Process',
    category: 'Methodology',
    excerpt:
      'Our proven methodology for delivering successful AI and digital transformation solutions from discovery to implementation.',
    weights: [0.75, 0.85, 0.9, 0.6] as [number, number, number, number],
    href: '/framework/consulting-process',
  },
];

const INSIGHTS = [
  { tag: 'AI Strategy', t: 'AI Readiness Framework: A Step-by-Step Guide for Enterprises', href: '/insights/ai-readiness-framework' },
  { tag: 'AI Strategy', t: 'Building a Scalable AI Strategy: From Vision to Execution', href: '/insights/scalable-ai-strategy' },
  {
    tag: 'AI Governance',
    t: 'AI Governance & Compliance: Balancing Innovation with Risk Management',
    href: '/insights/ai-governance-compliance',
  },
  {
    tag: 'AI Implementation',
    t: 'Enterprise AI Maturity Model: Assessing & Advancing AI Capabilities',
    href: '/insights/ai-maturity-model',
  },
];

const CAPABILITIES = [
  'Strategic AI roadmap development',
  'Enterprise-wide digital transformation',
  'Advanced analytics and ML solutions',
  'Process automation and optimization',
  'Data strategy and governance',
  'Change management and adoption',
  'Technology architecture design',
  'AI implementation and integration',
];

function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: 100,
        overflow: 'hidden',
        background: 'var(--paper)',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <HeroBackdrop />
      </div>

      <Container style={{ position: 'relative', paddingTop: 60, paddingBottom: 80 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 40, maxWidth: 1240 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 16 }}>
            <Eyebrow>Kanz.ai — AI &amp; Digital Transformation</Eyebrow>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', color: 'var(--muted)' }}>
              702 OPAL TOWER · BUSINESS BAY · DUBAI
            </div>
          </div>

          <h1
            style={{
              fontFamily: 'var(--display)',
              fontWeight: 'var(--display-weight)' as unknown as number,
              fontStyle: 'var(--head-style)' as unknown as string,
              fontSize: 'clamp(48px, 8.6vw, 152px)',
              lineHeight: 1.02,
              letterSpacing: '-0.035em',
              margin: '20px 0 0',
              color: 'var(--ink)',
            }}
          >
            Your trusted
            <br />
            partner in <GoldItalic>AI</GoldItalic> &amp;
            <br />
            digital transformation.
          </h1>

          <div className="kanz-hero-row">
            <p
              style={{
                fontSize: 19,
                lineHeight: 1.55,
                margin: 0,
                maxWidth: 640,
                color: 'var(--ink-2)',
                fontWeight: 400,
              }}
            >
              We help businesses harness the power of Artificial Intelligence, Data, and Automation to drive growth,
              innovation, and efficiency. Empower your organization with AI-driven insights and intelligent automation today.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
              <ArrowLink to="/services" dark>
                Get Started
              </ArrowLink>
              <ArrowLink to="/assess">Assess Your Organization</ArrowLink>
            </div>
          </div>

          <div
            style={{
              marginTop: 60,
              padding: '32px 0',
              borderTop: '1px solid var(--line-strong)',
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 40,
            }}
            className="kanz-hero-stats"
          >
            <StatBlock text="Several" sub="Projects Delivered" />
            <StatBlock num="100" suffix="%" sub="Client Satisfaction" />
            <StatBlock num="40" suffix="%" sub="Average Cost Reduction" />
            <StatBlock num="60" suffix="%" sub="Efficiency Increase" />
          </div>
        </div>
      </Container>

      <MarqueeStrip
        items={[
          'AI STRATEGY',
          'DIGITAL TRANSFORMATION',
          'AI IMPLEMENTATION',
          'AI GOVERNANCE',
          'DATA ANALYTICS',
          'AI RISK MANAGEMENT',
        ]}
      />

      <style>{`
        .kanz-hero-row {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 80px;
          align-items: end;
          margin-top: 30px;
        }
        @media (max-width: 980px) {
          .kanz-hero-row { grid-template-columns: 1fr; gap: 40px; }
          .kanz-hero-stats { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function MaturityVisual() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(() => setActive((s) => (s + 1) % FRAMEWORKS.length), 2800);
    return () => clearInterval(id);
  }, [auto]);

  return (
    <section style={{ padding: '140px 0 80px', position: 'relative' }}>
      <Container>
        <div className="kanz-fw-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <Eyebrow>Our Frameworks · Consulting Approach</Eyebrow>
            <DisplayHead size="clamp(40px, 5.4vw, 88px)" style={{ marginTop: 28 }}>
              A structured,
              <br />
              <GoldItalic>comprehensive</GoldItalic>
              <br />
              approach.
            </DisplayHead>
            <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--ink-2)', marginTop: 36, maxWidth: 540 }}>
              At Kanz.ai, we believe that successful AI implementation requires a structured, comprehensive approach. Our
              frameworks are built on extensive experience helping organizations across industries navigate their AI and
              digital transformation journeys.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--muted)', marginTop: 20, maxWidth: 540 }}>
              Each framework addresses specific aspects of AI adoption — from assessing readiness and maturity to developing
              strategies and ensuring effective execution.
            </p>

            <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 540 }}>
              {FRAMEWORKS.map((f, i) => (
                <button
                  key={f.code}
                  onClick={() => {
                    setActive(i);
                    setAuto(false);
                  }}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '54px 1fr auto',
                    gap: 16,
                    padding: '18px 20px',
                    background: i === active ? 'var(--paper-light)' : 'transparent',
                    color: i === active ? 'var(--ink-on-light)' : 'var(--ink)',
                    border: `1px solid ${i === active ? 'var(--paper-light)' : 'var(--line-strong)'}`,
                    borderRadius: 14,
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all .25s ease',
                    fontFamily: 'var(--sans)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 11,
                      opacity: 0.7,
                      alignSelf: 'center',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {f.code}
                  </span>
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--display)',
                        fontWeight: 'var(--display-weight)' as unknown as number,
                        fontSize: 20,
                        letterSpacing: '-0.01em',
                        lineHeight: 1.2,
                      }}
                    >
                      {f.title}
                    </div>
                    {i === active && (
                      <div style={{ fontSize: 13, lineHeight: 1.5, marginTop: 8, opacity: 0.85 }}>{f.excerpt}</div>
                    )}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 10,
                      opacity: 0.7,
                      alignSelf: 'center',
                      whiteSpace: 'nowrap',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {f.category}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div style={{ position: 'sticky', top: 100 }} className="kanz-fw-radar">
            <MaturityRadar
              weights={FRAMEWORKS[active].weights}
              code={FRAMEWORKS[active].code}
              total={FRAMEWORKS.length}
            />
            <div
              style={{
                marginTop: 14,
                padding: '14px 16px',
                background: 'var(--paper-2)',
                borderRadius: 12,
                border: '1px solid var(--line-strong)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 12,
                flexWrap: 'wrap',
              }}
            >
              <div>
                <div style={{ fontSize: 14, fontWeight: 500 }}>{FRAMEWORKS[active].title}</div>
                <div
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 11,
                    color: 'var(--muted)',
                    marginTop: 4,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  {FRAMEWORKS[active].category}
                </div>
              </div>
              <ArrowLink to={FRAMEWORKS[active].href} style={{ padding: '10px 16px', fontSize: 12 }}>
                Read More
              </ArrowLink>
            </div>
          </div>
        </div>
      </Container>
      <style>{`
        @media (max-width: 980px) {
          .kanz-fw-grid { grid-template-columns: 1fr !important; }
          .kanz-fw-radar { position: relative !important; top: 0 !important; }
        }
      `}</style>
    </section>
  );
}

function PracticeSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <section style={{ padding: '140px 0' }}>
      <Container>
        <div
          className="kanz-practice-head"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 80, gap: 40 }}
        >
          <div>
            <Eyebrow>Our Services</Eyebrow>
            <DisplayHead size="clamp(40px, 6vw, 96px)" style={{ marginTop: 28, maxWidth: 980 }}>
              Comprehensive AI &amp;<br />
              <GoldItalic>digital</GoldItalic> solutions.
            </DisplayHead>
          </div>
          <div style={{ maxWidth: 340, fontSize: 15, lineHeight: 1.55, color: 'var(--muted)' }}>
            Comprehensive AI and digital transformation solutions tailored to your business needs.
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--line-strong)' }}>
          {SERVICES.map((s, i) => (
            <Link
              key={s.n}
              to={s.href}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="kanz-practice-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '70px 1.4fr 1.6fr 1fr 28px',
                gap: 32,
                alignItems: 'center',
                padding: '36px 8px',
                borderBottom: '1px solid var(--line-strong)',
                background: hovered === i ? 'var(--paper-2)' : 'transparent',
                transition: 'background .25s ease',
                cursor: 'pointer',
                textDecoration: 'none',
                color: 'var(--ink)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 12,
                  color: 'var(--muted)',
                  letterSpacing: '0.1em',
                }}
              >
                {s.n}
              </div>
              <div
                style={{
                  fontFamily: 'var(--display)',
                  fontWeight: 'var(--display-weight)' as unknown as number,
                  fontStyle: 'var(--head-style)' as unknown as string,
                  fontSize: hovered === i ? 46 : 38,
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                  transition: 'font-size .3s ease, color .25s ease',
                  color: hovered === i ? 'var(--accent)' : 'var(--ink)',
                }}
              >
                {s.t}
              </div>
              <div style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--ink-2)', maxWidth: 460 }}>{s.d}</div>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                }}
              >
                {s.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 11,
                      color: 'var(--muted)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    <span style={{ color: 'var(--accent)', marginRight: 6 }}>·</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div
                style={{
                  color: 'var(--ink)',
                  opacity: hovered === i ? 1 : 0.3,
                  transition: 'opacity .25s',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M5 10H15M15 10L10 5M15 10L10 15"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </Container>
      <style>{`
        @media (max-width: 900px) {
          .kanz-practice-row { grid-template-columns: 50px 1fr !important; }
          .kanz-practice-row > :nth-child(3),
          .kanz-practice-row > :nth-child(4),
          .kanz-practice-row > :nth-child(5) { display: none !important; }
          .kanz-practice-head { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </section>
  );
}

function Thesis() {
  return (
    <section
      style={{
        padding: '120px 0',
        background: 'var(--paper-light)',
        color: 'var(--ink-on-light)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container>
        <Eyebrow style={{ color: 'var(--muted-on-light)' }}>Our Capabilities</Eyebrow>
        <p
          style={{
            fontFamily: 'var(--display)',
            fontWeight: 'var(--display-weight)' as unknown as number,
            fontStyle: 'italic',
            fontSize: 'clamp(28px, 4.2vw, 58px)',
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
            margin: '32px 0 0',
            maxWidth: 1200,
            color: 'var(--ink-on-light)',
          }}
        >
          We bring together deep industry expertise, cutting-edge technological capabilities, and a proven track record of
          delivering transformative solutions — bridging the gap between complex technology and real-world business
          challenges.
        </p>

        <div
          style={{
            marginTop: 80,
            paddingTop: 40,
            borderTop: '1px solid var(--line-strong-on-light)',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 20,
          }}
          className="kanz-caps-grid"
        >
          {CAPABILITIES.map((c, i) => (
            <div
              key={c}
              style={{
                fontSize: 14,
                lineHeight: 1.45,
                padding: '16px 0',
                display: 'flex',
                gap: 12,
                alignItems: 'flex-start',
                color: 'var(--ink-on-light)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 10,
                  color: 'var(--accent)',
                  letterSpacing: '0.08em',
                  flexShrink: 0,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>{c}</span>
            </div>
          ))}
        </div>
      </Container>
      <style>{`
        @media (max-width: 900px) { .kanz-caps-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 540px) { .kanz-caps-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section style={{ padding: '140px 0' }}>
      <Container>
        <div
          className="kanz-ind-head"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, marginBottom: 80 }}
        >
          <div>
            <Eyebrow>Industries We Serve</Eyebrow>
            <DisplayHead size="clamp(40px, 5.8vw, 92px)" style={{ marginTop: 28 }}>
              Delivering AI
              <br />
              <GoldItalic>excellence</GoldItalic>
              <br />
              across sectors.
            </DisplayHead>
          </div>
          <div style={{ alignSelf: 'end', fontSize: 17, lineHeight: 1.55, color: 'var(--ink-2)' }}>
            Tailored solutions for industry-specific challenges, with measurable results that drive business success.
          </div>
        </div>

        <div
          className="kanz-ind-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 1,
            background: 'var(--line-strong)',
            border: '1px solid var(--line-strong)',
          }}
        >
          {INDUSTRIES.map((ind) => (
            <Link
              key={ind.n}
              to={ind.href}
              className="kanz-ind-card"
              style={{
                background: 'var(--paper)',
                padding: 36,
                minHeight: 320,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'background .25s',
                textDecoration: 'none',
                color: 'var(--ink)',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 11,
                    color: 'var(--muted)',
                    letterSpacing: '0.14em',
                    marginBottom: 24,
                  }}
                >
                  {ind.n}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--display)',
                    fontWeight: 'var(--display-weight)' as unknown as number,
                    fontStyle: 'var(--head-style)' as unknown as string,
                    fontSize: 30,
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    margin: '0 0 16px',
                  }}
                >
                  {ind.t}
                </h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.55, color: 'var(--muted)', margin: 0 }}>{ind.d}</p>
              </div>
              <div
                style={{
                  marginTop: 28,
                  paddingTop: 20,
                  borderTop: '1px solid var(--line-strong)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontFamily: 'var(--mono)',
                  fontSize: 11,
                  letterSpacing: '0.16em',
                  color: 'var(--muted)',
                }}
              >
                <span>LEARN MORE</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 7H11M11 7L7 3M11 7L7 11"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </Container>
      <style>{`
        .kanz-ind-card:hover { background: var(--paper-2) !important; }
        @media (max-width: 900px) {
          .kanz-ind-head { grid-template-columns: 1fr !important; gap: 40px !important; }
          .kanz-ind-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 900px) and (max-width: 1100px) {
          .kanz-ind-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function UAEPride() {
  return (
    <section
      style={{
        padding: '140px 0',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--paper-light)',
        color: 'var(--ink-on-light)',
      }}
    >
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.4, pointerEvents: 'none' }}
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <pattern id="gccgrid" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="40" cy="40" r="1" fill="var(--ink-on-light)" opacity="0.35" />
          </pattern>
          <radialGradient id="gccfade" cx="80%" cy="50%" r="60%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.20" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1440" height="800" fill="url(#gccgrid)" />
        <rect width="1440" height="800" fill="url(#gccfade)" />
      </svg>

      <Container style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 32, maxWidth: 880 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ fontSize: 32 }} aria-hidden>
              🇦🇪
            </span>
            <span
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 12,
                color: 'var(--ink-on-light)',
                opacity: 0.75,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              Made in the UAE
            </span>
          </div>
          <DisplayHead size="clamp(44px, 7vw, 116px)" style={{ color: 'var(--ink-on-light)' }}>
            Proudly UAE-based,
            <br />
            <GoldItalic>globally</GoldItalic> minded.
          </DisplayHead>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.55,
              color: 'var(--ink-2-on-light)',
              maxWidth: 720,
              margin: 0,
            }}
          >
            Born in the heart of Dubai, Kanz.ai carries the UAE's spirit of ambition, innovation, and excellence to every
            engagement. We are honoured to represent the nation's vision of becoming a global AI leader — serving clients
            across the Emirates and beyond.
          </p>
        </div>
      </Container>
    </section>
  );
}

function InsightsSection() {
  return (
    <section style={{ padding: '140px 0' }}>
      <Container>
        <div
          className="kanz-ins-head"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}
        >
          <div>
            <Eyebrow>Insights &amp; Resources</Eyebrow>
            <DisplayHead size="clamp(36px, 5vw, 80px)" style={{ marginTop: 24 }}>
              Featured <GoldItalic>whitepapers</GoldItalic>.
            </DisplayHead>
          </div>
          <Link
            to="/insights"
            style={{
              color: 'var(--ink)',
              textDecoration: 'none',
              fontSize: 14,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            All ten whitepapers
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7H11M11 7L7 3M11 7L7 11" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </Link>
        </div>

        <div
          className="kanz-ins-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}
        >
          {INSIGHTS.map((p, i) => (
            <Link
              key={p.t}
              to={p.href}
              className="kanz-ins-card"
              style={{
                padding: 32,
                minHeight: 260,
                border: i === 0 ? '1px solid var(--paper-light)' : '1px solid var(--line-strong)',
                borderRadius: 20,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: i === 0 ? 'var(--paper-light)' : 'var(--paper)',
                color: i === 0 ? 'var(--ink-on-light)' : 'var(--ink)',
                transition: 'transform .3s ease',
                textDecoration: 'none',
              }}
            >
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', color: 'var(--accent)' }}>
                ● {p.tag.toUpperCase()}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--display)',
                  fontWeight: 'var(--display-weight)' as unknown as number,
                  fontStyle: 'var(--head-style)' as unknown as string,
                  fontSize: i === 0 ? 32 : 26,
                  lineHeight: 1.18,
                  letterSpacing: '-0.01em',
                  margin: '20px 0',
                }}
              >
                {p.t}
              </h3>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontFamily: 'var(--mono)',
                  fontSize: 11,
                  letterSpacing: '0.1em',
                  color: 'var(--muted)',
                }}
              >
                <span>READ WHITEPAPER</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M4 8H12M12 8L8 4M12 8L8 12"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </Container>
      <style>{`
        .kanz-ins-card:hover { transform: translateY(-4px); }
        @media (max-width: 740px) { .kanz-ins-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function AssessmentsCTA() {
  return (
    <section style={{ padding: '120px 0' }}>
      <Container>
        <div
          className="kanz-cta-block"
          style={{
            background: 'var(--accent)',
            color: 'var(--paper)',
            borderRadius: 32,
            padding: '80px 64px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <svg
            style={{ position: 'absolute', right: -100, top: -100, opacity: 0.18 }}
            width="500"
            height="500"
            viewBox="0 0 500 500"
            aria-hidden
          >
            {[60, 120, 180, 240].map((r) => (
              <circle key={r} cx="250" cy="250" r={r} fill="none" stroke="white" strokeWidth="1" />
            ))}
          </svg>
          <div
            className="kanz-cta-inner"
            style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 48, position: 'relative' }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 11,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--paper)',
                  opacity: 0.85,
                  marginBottom: 18,
                }}
              >
                Ready to Transform Your Business?
              </div>
              <h2
                style={{
                  fontFamily: 'var(--display)',
                  fontWeight: 'var(--display-weight)' as unknown as number,
                  fontStyle: 'var(--head-style)' as unknown as string,
                  fontSize: 'clamp(36px, 5vw, 76px)',
                  lineHeight: 1.04,
                  letterSpacing: '-0.025em',
                  margin: '0 0 24px',
                  color: 'var(--paper)',
                }}
              >
                Schedule a consultation
                <br />
                with our{' '}
                <em style={{ fontStyle: 'italic', fontFamily: "'Instrument Serif', Georgia, serif" }}>AI experts</em>.
              </h2>
              <p style={{ fontSize: 18, lineHeight: 1.5, opacity: 0.94, maxWidth: 580, margin: 0 }}>
                Discover how we can help you achieve your digital transformation goals.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignSelf: 'center' }}>
              {[
                ['AI Readiness Assessment', '/ai-readiness'],
                ['Data Maturity Assessment', '/data-maturity'],
                ['AI Risk Self-Assessment', '/ai-risk-assessment'],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  to={href}
                  className="kanz-cta-row"
                  style={{
                    background: 'var(--paper)',
                    color: 'var(--ink)',
                    padding: '20px 24px',
                    borderRadius: 14,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: 15,
                    transition: 'transform .15s ease',
                  }}
                >
                  {label}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 8H12M12 8L8 4M12 8L8 12"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <style>{`
        .kanz-cta-row:hover { transform: translateX(4px); }
        @media (max-width: 900px) {
          .kanz-cta-block { padding: 60px 36px !important; }
          .kanz-cta-inner { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const Home = () => {
  return (
    <div>
      <Hero />
      <MaturityVisual />
      <PracticeSection />
      <Thesis />
      <IndustriesSection />
      <UAEPride />
      <InsightsSection />
      <AssessmentsCTA />
    </div>
  );
};

export default Home;
