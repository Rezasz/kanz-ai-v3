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

const MAIN_SERVICES = [
  {
    num: '01',
    title: 'AI Strategy & Consulting',
    italic: 'where value lives.',
    description: 'Develop a comprehensive AI roadmap aligned with your business objectives.',
    features: ['AI readiness assessment', 'Strategy development', 'Implementation planning', 'ROI analysis'],
    link: '/services/ai-strategy',
  },
  {
    num: '02',
    title: 'Digital Transformation',
    italic: 'end-to-end.',
    description: 'End-to-end digital transformation solutions for the modern enterprise.',
    features: ['Process automation', 'Legacy system modernization', 'Cloud migration', 'Digital workflow optimization'],
    link: '/services/digital-transformation',
  },
  {
    num: '03',
    title: 'AI Implementation',
    italic: 'into production.',
    description: 'Expert implementation of AI solutions across your organization.',
    features: ['Custom AI development', 'System integration', 'Training & deployment', 'Monitoring & optimization'],
    link: '/services/ai-implementation',
  },
  {
    num: '04',
    title: 'AI Governance',
    italic: 'trusted by design.',
    description: 'Establish robust AI governance frameworks and policies.',
    features: ['Policy development', 'Risk management', 'Compliance monitoring', 'Ethical AI guidelines'],
    link: '/services/ai-governance',
  },
  {
    num: '05',
    title: 'Data Analytics',
    italic: 'into decisions.',
    description: 'Transform your data into actionable insights.',
    features: ['Data strategy', 'Advanced analytics', 'Predictive modeling', 'Visualization'],
    link: '/services/data-analytics',
  },
  {
    num: '06',
    title: 'AI Risk Management',
    italic: 'governed and scalable.',
    description: 'Build governed, trusted, and scalable AI through risk assessment and oversight.',
    features: ['AI risk assessment', 'Use case risk classification', 'Responsible AI policies', 'Vendor & control evaluation'],
    link: '/services/ai-risk-management',
  },
];

const INDUSTRY_SOLUTIONS = [
  { title: 'Banking & Finance', description: 'AI solutions for risk assessment, fraud detection, and customer service automation.' },
  { title: 'Healthcare', description: 'AI-powered diagnostic tools and patient care optimization.' },
  { title: 'Manufacturing', description: 'Smart manufacturing solutions with predictive maintenance.' },
  { title: 'Retail', description: 'Personalization and inventory optimization solutions.' },
  { title: 'Public Sector', description: 'AI solutions for improved citizen services and operations.' },
  { title: 'Supply Chain', description: 'Intelligent supply chain optimization and analytics.' },
];

function ServiceRow({
  num,
  title,
  italic,
  description,
  features,
  link,
}: (typeof MAIN_SERVICES)[number]) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      to={link}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="kanz-srv-row"
      style={{
        borderBottom: '1px solid var(--line-strong)',
        padding: '48px 0',
        display: 'grid',
        gridTemplateColumns: '80px 1fr 1fr',
        gap: 40,
        alignItems: 'start',
        background: hover ? 'var(--paper-2)' : 'transparent',
        transition: 'background .2s ease, padding .2s ease',
        cursor: 'pointer',
        paddingLeft: hover ? 24 : 0,
        paddingRight: hover ? 24 : 0,
        textDecoration: 'none',
        color: 'var(--ink)',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--mono)',
          fontSize: 12,
          letterSpacing: '0.18em',
          color: 'var(--accent)',
          paddingTop: 12,
        }}
      >
        / {num}
      </div>
      <div>
        <h3
          style={{
            fontFamily: 'var(--display)',
            fontWeight: 'var(--display-weight)' as unknown as number,
            fontStyle: 'var(--head-style)' as unknown as string,
            fontSize: 'clamp(28px, 4vw, 50px)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            margin: 0,
          }}
        >
          {title}{' '}
          <GoldItalic>
            <span style={{ display: 'block' }}>{italic}</span>
          </GoldItalic>
        </h3>
        <p style={{ fontSize: 16, lineHeight: 1.55, color: 'var(--muted)', margin: '20px 0 0', maxWidth: 460 }}>
          {description}
        </p>
      </div>
      <div>
        <div
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 10,
            letterSpacing: '0.18em',
            color: 'var(--muted)',
            marginBottom: 20,
            textTransform: 'uppercase',
          }}
        >
          Capabilities
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {features.map((f) => (
            <li key={f} style={{ display: 'flex', alignItems: 'baseline', gap: 14, fontSize: 15, color: 'var(--ink)' }}>
              <span style={{ width: 20, height: 1, background: 'var(--accent)', flexShrink: 0, marginTop: 8 }} />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}

const Services = () => {
  return (
    <div>
      <PageHero
        kicker="02 / Services"
        title="Six practices."
        italic="One outcome."
        lede="Comprehensive AI and digital transformation solutions tailored to your business needs — from strategy through governed production."
        meta={['Strategy', 'Implementation', 'Governance', 'Risk']}
      />

      <section style={{ padding: '100px 0 60px' }}>
        <Container>
          <div style={{ borderTop: '1px solid var(--line-strong)' }}>
            {MAIN_SERVICES.map((s) => (
              <ServiceRow key={s.num} {...s} />
            ))}
          </div>
        </Container>
        <style>{`
          @media (max-width: 900px) {
            .kanz-srv-row { grid-template-columns: 50px 1fr !important; gap: 20px !important; }
            .kanz-srv-row > :last-child { grid-column: 1 / -1; }
          }
        `}</style>
      </section>

      <section
        style={{
          padding: '120px 0',
          background: 'var(--paper-2)',
          borderTop: '1px solid var(--line)',
        }}
      >
        <Container>
          <div
            className="kanz-srv-ind-head"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 80,
              marginBottom: 64,
              alignItems: 'end',
            }}
          >
            <div>
              <Eyebrow style={{ marginBottom: 24 }}>Industry-specific solutions</Eyebrow>
              <DisplayHead size="clamp(36px, 4.8vw, 72px)">
                Tailored AI for your <GoldItalic>sector</GoldItalic>.
              </DisplayHead>
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--muted)', margin: 0 }}>
              The same six practices, instrumented for the realities of each sector. We bring depth from prior engagements, then
              adapt — never the other way around.
            </p>
          </div>
          <div
            className="kanz-srv-ind-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 1,
              background: 'var(--line-strong)',
              border: '1px solid var(--line-strong)',
            }}
          >
            {INDUSTRY_SOLUTIONS.map((ind, i) => (
              <div
                key={ind.title}
                style={{ background: 'var(--paper-2)', padding: '40px 32px', minHeight: 200 }}
              >
                <div
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 10,
                    color: 'var(--muted)',
                    letterSpacing: '0.18em',
                    marginBottom: 20,
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
                    margin: '0 0 14px',
                  }}
                >
                  {ind.title}
                </h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--muted)', margin: 0 }}>{ind.description}</p>
              </div>
            ))}
          </div>
        </Container>
        <style>{`
          @media (max-width: 900px) {
            .kanz-srv-ind-head { grid-template-columns: 1fr !important; gap: 32px !important; }
            .kanz-srv-ind-grid { grid-template-columns: 1fr 1fr !important; }
          }
          @media (max-width: 600px) { .kanz-srv-ind-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      <PageCTA
        kicker="Engagement"
        title="Ready to transform"
        italic="your business?"
        body="Schedule a consultation with our AI experts and let's map the highest-leverage move you could make this quarter."
        primary={{ label: 'Get started', to: '/contact' }}
        secondary={{ label: 'See the framework', to: '/framework' }}
      />
    </div>
  );
};

export default Services;
