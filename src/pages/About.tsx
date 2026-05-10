import React from 'react';
import {
  Container,
  DisplayHead,
  Eyebrow,
  GoldItalic,
  PageCTA,
  PageHero,
} from '@/components/design';

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

const STRENGTHS = [
  {
    title: 'Deep Technical Expertise',
    description:
      'Our team brings together decades of experience in AI, ML, and digital transformation technologies.',
  },
  {
    title: 'Results-Driven Approach',
    description:
      'We focus on delivering measurable business outcomes and sustainable long-term value.',
  },
  {
    title: 'Industry Best Practices',
    description: 'We adhere to the highest standards of quality and security in all our implementations.',
  },
  {
    title: 'Collaborative Partnership',
    description: 'We work closely with your team to ensure knowledge transfer and sustainable success.',
  },
];

const SUCCESS_STORIES = [
  {
    title: 'Global Energy Innovation',
    description:
      'Transformed maintenance operations for a leading energy company with AI-driven predictive analytics.',
    result: '30% reduction in operational downtime',
    sector: 'Energy',
  },
  {
    title: 'Financial Services Excellence',
    description:
      'Enhanced fraud detection capabilities for a major bank using advanced AI algorithms.',
    result: '60% improvement in fraud detection',
    sector: 'Banking',
  },
  {
    title: 'Supply Chain Optimization',
    description: 'Revolutionized logistics operations with AI-powered tracking and forecasting.',
    result: '40% increase in efficiency',
    sector: 'Logistics',
  },
  {
    title: 'Smart City Initiative',
    description: 'Implemented AI-powered analytics for urban mobility and energy management.',
    result: '25% reduction in energy consumption',
    sector: 'Public Sector',
  },
];

const About = () => {
  return (
    <div>
      <PageHero
        kicker="01 / About"
        title="Empowering through"
        italic="AI-driven transformation."
        lede="Empowering businesses through AI-driven digital transformation, enabling them to innovate, optimize, and thrive in a data-driven world."
        meta={['Founded in Dubai', 'Operating across the GCC', '4 frameworks · 6 services']}
      />

      <section style={{ padding: '120px 0', borderBottom: '1px solid var(--line)' }}>
        <Container>
          <div
            className="kanz-cap-grid"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 100, alignItems: 'start' }}
          >
            <div style={{ position: 'sticky', top: 120 }}>
              <Eyebrow style={{ marginBottom: 24 }}>Our capabilities</Eyebrow>
              <DisplayHead size="clamp(34px, 4.6vw, 64px)" style={{ marginBottom: 28 }}>
                Bridging the gap between <GoldItalic>complex tech</GoldItalic> and{' '}
                <GoldItalic>real business</GoldItalic>.
              </DisplayHead>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--muted)', maxWidth: 480 }}>
                As a premier AI and digital transformation consultancy, we bring deep industry expertise, cutting-edge
                technological capabilities, and a proven track record of delivering transformative solutions. Our team
                comprises seasoned professionals with extensive experience in AI strategy, implementation, and digital
                transformation across various industries.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--muted)', maxWidth: 480, marginTop: 20 }}>
                We pride ourselves on bridging complex technological solutions and real-world business challenges —
                combining strategic thinking with hands-on technical expertise to deliver solutions that drive measurable
                business outcomes.
              </p>
            </div>
            <div>
              <div style={{ borderTop: '1px solid var(--line-strong)' }}>
                {CAPABILITIES.map((c, i) => (
                  <div
                    key={c}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '60px 1fr',
                      gap: 24,
                      padding: '24px 0',
                      borderBottom: '1px solid var(--line)',
                      alignItems: 'baseline',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--mono)',
                        fontSize: 11,
                        letterSpacing: '0.16em',
                        color: 'var(--muted)',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div
                      style={{
                        fontFamily: 'var(--display)',
                        fontWeight: 'var(--display-weight)' as unknown as number,
                        fontSize: 22,
                        lineHeight: 1.25,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {c}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
        <style>{`@media (max-width: 900px){.kanz-cap-grid{grid-template-columns:1fr !important;gap:40px !important;}}`}</style>
      </section>

      <section
        style={{
          padding: '120px 0',
          background: 'var(--paper-2)',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <Container>
          <Eyebrow style={{ marginBottom: 24 }}>Why work with us</Eyebrow>
          <DisplayHead size="clamp(36px, 5.2vw, 80px)" style={{ marginBottom: 64, maxWidth: 1100 }}>
            Four reasons clients <GoldItalic>stay</GoldItalic>.
          </DisplayHead>
          <div
            className="kanz-strengths"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 0,
              borderTop: '1px solid var(--line-strong)',
            }}
          >
            {STRENGTHS.map((s, i) => (
              <div
                key={s.title}
                style={{
                  padding: '40px 24px 40px 0',
                  borderRight: i < 3 ? '1px solid var(--line)' : 'none',
                  paddingLeft: i === 0 ? 0 : 24,
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 11,
                    letterSpacing: '0.18em',
                    color: 'var(--accent)',
                    marginBottom: 32,
                  }}
                >
                  / {String(i + 1).padStart(2, '0')}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--display)',
                    fontWeight: 'var(--display-weight)' as unknown as number,
                    fontSize: 26,
                    lineHeight: 1.15,
                    letterSpacing: '-0.01em',
                    margin: '0 0 16px',
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.55, color: 'var(--muted)', margin: 0 }}>{s.description}</p>
              </div>
            ))}
          </div>
        </Container>
        <style>{`
          @media (max-width: 900px){.kanz-strengths{grid-template-columns:1fr 1fr !important;}}
          @media (max-width: 520px){.kanz-strengths{grid-template-columns:1fr !important;}}
        `}</style>
      </section>

      <section style={{ padding: '120px 0' }}>
        <Container>
          <Eyebrow style={{ marginBottom: 24 }}>Success stories</Eyebrow>
          <DisplayHead size="clamp(36px, 5.2vw, 80px)" style={{ marginBottom: 64, maxWidth: 1100 }}>
            Results, not <GoldItalic>narratives</GoldItalic>.
          </DisplayHead>
          <div
            className="kanz-stories"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}
          >
            {SUCCESS_STORIES.map((s, i) => (
              <div
                key={s.title}
                style={{
                  padding: '48px 40px',
                  background: 'var(--paper-2)',
                  borderRadius: 4,
                  minHeight: 300,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: 24,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--mono)',
                        fontSize: 11,
                        letterSpacing: '0.18em',
                        color: 'var(--muted)',
                        textTransform: 'uppercase',
                      }}
                    >
                      {s.sector}
                    </span>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)' }}>
                      CASE / {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--display)',
                      fontWeight: 'var(--display-weight)' as unknown as number,
                      fontSize: 34,
                      lineHeight: 1.1,
                      letterSpacing: '-0.02em',
                      margin: '0 0 18px',
                    }}
                  >
                    {s.title}
                  </h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--muted)', margin: 0 }}>{s.description}</p>
                </div>
                <div
                  style={{
                    marginTop: 32,
                    paddingTop: 24,
                    borderTop: '1px solid var(--line-strong)',
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontStyle: 'italic',
                    fontSize: 22,
                    color: 'var(--accent)',
                  }}
                >
                  {s.result}
                </div>
              </div>
            ))}
          </div>
        </Container>
        <style>{`@media (max-width: 740px){.kanz-stories{grid-template-columns:1fr !important;}}`}</style>
      </section>

      <PageCTA
        kicker="What's next"
        title="Let's build something"
        italic="that compounds."
        body="Tell us where you are; we'll tell you where the value is."
        primary={{ label: 'Schedule a consultation', to: '/contact' }}
        secondary={{ label: 'Take an assessment', to: '/assess' }}
      />
    </div>
  );
};

export default About;
