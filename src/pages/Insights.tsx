import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLink,
  Container,
  DisplayHead,
  Eyebrow,
  GoldItalic,
  PageCTA,
  PageHero,
} from '@/components/design';

const WHITEPAPERS = [
  {
    title: 'AI Readiness Framework: A Step-by-Step Guide for Enterprises',
    excerpt:
      'A comprehensive framework for assessing and enhancing AI readiness across technology, people, process, and data dimensions.',
    category: 'AI Strategy',
    link: '/insights/ai-readiness-framework',
  },
  {
    title: 'Building a Scalable AI Strategy: From Vision to Execution',
    excerpt:
      'Learn how to develop and execute an AI strategy that aligns with business goals and scales effectively across your organization.',
    category: 'AI Strategy',
    link: '/insights/scalable-ai-strategy',
  },
  {
    title: 'AI Governance & Compliance: Balancing Innovation with Risk Management',
    excerpt:
      'Navigate the complex ethical and regulatory landscape for AI while maintaining innovation and managing risks effectively.',
    category: 'AI Governance',
    link: '/insights/ai-governance-compliance',
  },
  {
    title: 'Enterprise AI Maturity Model: Assessing & Advancing AI Capabilities',
    excerpt: "A structured model to assess your organization's AI maturity and build a roadmap for advancing capabilities.",
    category: 'AI Implementation',
    link: '/insights/ai-maturity-model',
  },
  {
    title: 'The Role of AI in Digital Transformation: A Strategic Perspective',
    excerpt:
      'Explore how AI acts as a catalyst in digital transformation and drives business model innovation across industries.',
    category: 'Digital Transformation',
    link: '/insights/ai-digital-transformation',
  },
  {
    title: 'AI in Decision Intelligence: Enhancing Strategic Decision-Making',
    excerpt: 'Discover how AI augments human decision-making with data-driven insights for better strategic outcomes.',
    category: 'AI Applications',
    link: '/insights/ai-decision-intelligence',
  },
  {
    title: 'Data Strategy for AI Success: Ensuring Quality, Governance, and Scalability',
    excerpt: 'Build a robust data foundation to ensure AI initiatives deliver maximum value and scale effectively.',
    category: 'Data Strategy',
    link: '/insights/data-strategy-ai-success',
  },
  {
    title: 'AI-Enabled Workforce: Redefining Roles & Upskilling for the Future',
    excerpt: 'Prepare your workforce for an AI-powered future through strategic upskilling and organizational change.',
    category: 'Workforce Transformation',
    link: '/insights/ai-enabled-workforce',
  },
  {
    title: 'Operationalizing AI: Bridging the Gap Between AI PoCs and Enterprise Adoption',
    excerpt: 'Learn how to move from AI proof-of-concepts to full-scale implementation and enterprise-wide adoption.',
    category: 'AI Implementation',
    link: '/insights/operationalizing-ai',
  },
  {
    title: 'The Economics of AI: Measuring ROI & Business Impact of AI Investments',
    excerpt: 'Frameworks and methodologies for calculating AI return on investment and justifying AI expenditures.',
    category: 'AI Strategy',
    link: '/insights/economics-of-ai',
  },
];

function PaperCard({ title, excerpt, category, link, num }: { num: number } & (typeof WHITEPAPERS)[number]) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      to={link}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: 'var(--paper-2)',
        padding: '40px 36px 36px',
        minHeight: 320,
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textDecoration: 'none',
        color: 'var(--ink)',
        transition: 'transform .2s ease',
        transform: hover ? 'translateY(-4px)' : 'none',
      }}
    >
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 28, alignItems: 'center' }}>
          <span
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 10,
              letterSpacing: '0.18em',
              color: 'var(--accent)',
              textTransform: 'uppercase',
            }}
          >
            {category}
          </span>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)' }}>
            / {String(num).padStart(2, '0')}
          </span>
        </div>
        <h3
          style={{
            fontFamily: 'var(--display)',
            fontWeight: 'var(--display-weight)' as unknown as number,
            fontSize: 22,
            lineHeight: 1.22,
            letterSpacing: '-0.01em',
            margin: '0 0 16px',
          }}
        >
          {title}
        </h3>
        <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--muted)', margin: 0 }}>{excerpt}</p>
      </div>
      <div
        style={{
          marginTop: 28,
          paddingTop: 20,
          borderTop: '1px solid var(--line)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: 'var(--mono)',
          fontSize: 11,
          letterSpacing: '0.1em',
          color: hover ? 'var(--accent)' : 'var(--ink)',
          transition: 'color .2s ease',
        }}
      >
        <span>READ</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
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

const Insights = () => {
  const featured = WHITEPAPERS[0];
  const grid = WHITEPAPERS.slice(1);
  const cats = Array.from(new Set(WHITEPAPERS.map((p) => p.category)));

  return (
    <div>
      <PageHero
        kicker="05 / Insights"
        title="Field notes from"
        italic="the work."
        lede="Stay ahead with our latest research, insights, and thought leadership in AI and digital transformation."
        meta={[`${WHITEPAPERS.length} whitepapers`, ...cats.slice(0, 3)]}
      />

      <section style={{ padding: '80px 0 0' }}>
        <Container>
          <div
            className="kanz-ins-featured"
            style={{
              background: 'var(--paper-2)',
              color: 'var(--ink)',
              borderRadius: 4,
              padding: '60px 56px',
              display: 'grid',
              gridTemplateColumns: '1.3fr 1fr',
              gap: 60,
              alignItems: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
                <span
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 10,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    padding: '6px 12px',
                    background: 'var(--accent)',
                    color: 'var(--paper)',
                  }}
                >
                  Featured
                </span>
                <span
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 11,
                    letterSpacing: '0.16em',
                    color: 'var(--muted)',
                  }}
                >
                  {featured.category}
                </span>
              </div>
              <h2
                style={{
                  fontFamily: 'var(--display)',
                  fontWeight: 'var(--display-weight)' as unknown as number,
                  fontSize: 'clamp(28px, 3.8vw, 50px)',
                  lineHeight: 1.08,
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}
              >
                {featured.title}
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.55, color: 'var(--muted)', margin: '24px 0 32px', maxWidth: 560 }}>
                {featured.excerpt}
              </p>
              <ArrowLink to={featured.link} dark>
                Read whitepaper
              </ArrowLink>
            </div>
            <svg
              viewBox="0 0 400 400"
              style={{ width: '100%', maxWidth: 320, justifySelf: 'end', opacity: 0.9 }}
              aria-hidden
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <circle
                  key={i}
                  cx="200"
                  cy="200"
                  r={40 + i * 30}
                  fill="none"
                  stroke="var(--ink)"
                  strokeWidth="0.6"
                  opacity={0.18 + i * 0.08}
                />
              ))}
              <circle cx="200" cy="200" r="16" fill="var(--accent)" />
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <line
                  key={deg}
                  x1="200"
                  y1="200"
                  x2={200 + Math.cos((deg * Math.PI) / 180) * 200}
                  y2={200 + Math.sin((deg * Math.PI) / 180) * 200}
                  stroke="var(--ink)"
                  strokeWidth="0.6"
                  opacity="0.15"
                />
              ))}
            </svg>
          </div>
        </Container>
        <style>{`@media (max-width: 900px){.kanz-ins-featured{grid-template-columns:1fr !important;padding:40px 32px !important;}}`}</style>
      </section>

      <section style={{ padding: '100px 0' }}>
        <Container>
          <div
            className="kanz-ins-more-head"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: 48,
              gap: 24,
              flexWrap: 'wrap',
            }}
          >
            <DisplayHead size="clamp(32px, 4.4vw, 60px)">More whitepapers</DisplayHead>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'flex-end' }}>
              {cats.map((c) => (
                <span
                  key={c}
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 11,
                    letterSpacing: '0.06em',
                    padding: '6px 12px',
                    borderRadius: 999,
                    border: '1px solid var(--line-strong)',
                    color: 'var(--muted)',
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div
            className="kanz-ins-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4 }}
          >
            {grid.map((p, i) => (
              <PaperCard key={p.title} {...p} num={i + 2} />
            ))}
          </div>
        </Container>
        <style>{`
          @media (max-width: 900px){.kanz-ins-grid{grid-template-columns:1fr 1fr !important;}}
          @media (max-width: 600px){.kanz-ins-grid{grid-template-columns:1fr !important;}}
        `}</style>
      </section>

      <PageCTA
        kicker="Stay current"
        title="Read every paper,"
        italic="when it ships."
        body="Get our latest whitepapers and field notes on AI and digital transformation across the GCC."
        primary={{ label: 'Get in touch', to: '/contact' }}
      />
    </div>
  );
};

export default Insights;
