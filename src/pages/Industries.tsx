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

const INDUSTRIES = [
  {
    title: 'Banking & Finance',
    glyph: 'B&F',
    description: 'Transform financial services with AI-driven solutions.',
    solutions: ['Risk assessment automation', 'Fraud detection systems', 'Customer service AI', 'Trading algorithms'],
    link: '/industries/banking-finance',
  },
  {
    title: 'Manufacturing',
    glyph: 'MFG',
    description: 'Optimize production with smart manufacturing solutions.',
    solutions: ['Predictive maintenance', 'Quality control AI', 'Supply chain optimization', 'Production planning'],
    link: '/industries/manufacturing',
  },
  {
    title: 'Healthcare',
    glyph: 'HLT',
    description: 'Enhance patient care with AI-powered healthcare solutions.',
    solutions: ['Diagnostic assistance', 'Patient monitoring', 'Treatment planning', 'Resource management'],
    link: '/industries/healthcare',
  },
  {
    title: 'Retail & E-commerce',
    glyph: 'RTL',
    description: 'Revolutionize retail with intelligent solutions.',
    solutions: ['Inventory optimization', 'Personalized recommendations', 'Dynamic pricing', 'Customer analytics'],
    link: '/industries/retail',
  },
  {
    title: 'Public Sector',
    glyph: 'PUB',
    description: 'Modernize government services with AI.',
    solutions: ['Citizen services automation', 'Smart city solutions', 'Policy analysis', 'Resource allocation'],
    link: '/industries/public-sector',
  },
  {
    title: 'Energy & Oil & Gas',
    glyph: 'ENG',
    description: 'AI-driven predictive maintenance & operational efficiency for the energy sector.',
    solutions: ['Predictive maintenance', 'Operations efficiency', 'Risk forecasting', 'Asset optimization'],
    link: '/industries/energy',
  },
];

const METRICS = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '95%', label: 'Client Satisfaction' },
  { value: '40%', label: 'Average Cost Reduction' },
  { value: '60%', label: 'Efficiency Increase' },
];

function IndustryCard({ title, glyph, description, solutions, link, num }: { num: number } & (typeof INDUSTRIES)[number]) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      to={link}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: 'var(--paper-2)',
        padding: '48px 48px 56px',
        minHeight: 360,
        borderRadius: 4,
        position: 'relative',
        overflow: 'hidden',
        textDecoration: 'none',
        color: 'var(--ink)',
        display: 'block',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 140,
          height: 140,
          background: hover ? 'var(--accent)' : 'var(--ink)',
          color: 'var(--paper)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--mono)',
          fontSize: 20,
          letterSpacing: '0.05em',
          transition: 'background .25s ease',
        }}
      >
        {glyph}
      </div>
      <div
        style={{
          fontFamily: 'var(--mono)',
          fontSize: 11,
          letterSpacing: '0.18em',
          color: 'var(--accent)',
          marginBottom: 32,
        }}
      >
        I / {String(num).padStart(2, '0')}
      </div>
      <h3
        style={{
          fontFamily: 'var(--display)',
          fontWeight: 'var(--display-weight)' as unknown as number,
          fontSize: 34,
          lineHeight: 1.08,
          letterSpacing: '-0.02em',
          margin: '0 0 14px',
          maxWidth: 320,
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--muted)', margin: '0 0 28px', maxWidth: 420 }}>
        {description}
      </p>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '10px 24px',
          maxWidth: 480,
        }}
      >
        {solutions.map((s) => (
          <li key={s} style={{ display: 'flex', alignItems: 'baseline', gap: 10, fontSize: 13.5 }}>
            <span
              style={{
                width: 4,
                height: 4,
                borderRadius: 999,
                background: 'var(--accent)',
                flexShrink: 0,
                transform: 'translateY(-2px)',
              }}
            />
            <span>{s}</span>
          </li>
        ))}
      </ul>
    </Link>
  );
}

const Industries = () => {
  return (
    <div>
      <PageHero
        kicker="04 / Industries"
        title="Six sectors."
        italic="One playbook."
        lede="Delivering AI excellence across diverse sectors with tailored solutions for industry-specific challenges across the GCC."
        meta={['Banking', 'Manufacturing', 'Healthcare', 'Retail', 'Public Sector', 'Energy']}
      />

      <section style={{ padding: '100px 0' }}>
        <Container>
          <div
            className="kanz-ind-grid"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}
          >
            {INDUSTRIES.map((ind, i) => (
              <IndustryCard key={ind.title} {...ind} num={i + 1} />
            ))}
          </div>
        </Container>
        <style>{`@media (max-width: 740px){.kanz-ind-grid{grid-template-columns:1fr !important;}}`}</style>
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
            className="kanz-met-head"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, marginBottom: 80, alignItems: 'end' }}
          >
            <div>
              <Eyebrow style={{ marginBottom: 24 }}>Our impact</Eyebrow>
              <DisplayHead size="clamp(36px, 5.4vw, 80px)">
                Measurable results <GoldItalic>across industries</GoldItalic>.
              </DisplayHead>
            </div>
          </div>
          <div
            className="kanz-met-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 0,
              borderTop: '1px solid var(--line-strong)',
            }}
          >
            {METRICS.map((m, i) => (
              <div
                key={m.label}
                style={{
                  padding: '40px 24px 0 0',
                  borderRight: i < 3 ? '1px solid var(--line)' : 'none',
                  paddingLeft: i === 0 ? 0 : 24,
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--display)',
                    fontWeight: 'var(--display-weight)' as unknown as number,
                    fontSize: 'clamp(48px, 6vw, 84px)',
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                    margin: 0,
                    color: 'var(--accent)',
                  }}
                >
                  {m.value}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 12,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                    marginTop: 16,
                  }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
        <style>{`
          @media (max-width: 900px) {
            .kanz-met-head { grid-template-columns: 1fr !important; }
            .kanz-met-grid { grid-template-columns: 1fr 1fr !important; }
          }
        `}</style>
      </section>

      <PageCTA
        kicker="Sector-specific"
        title="Don't see your"
        italic="sector?"
        body="The frameworks travel. We've adapted them to telecom, aviation, and more. Tell us about your sector and the constraints you operate under."
        primary={{ label: 'Talk to us', to: '/contact' }}
        secondary={{ label: 'See services', to: '/services' }}
      />
    </div>
  );
};

export default Industries;
