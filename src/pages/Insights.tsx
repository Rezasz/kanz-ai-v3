import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLink,
  Container,
  DisplayHead,
  PageCTA,
  PageHero,
} from '@/components/design';

type Article = {
  num: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  href?: string;
};

const ARTICLES: Article[] = [
  {
    num: 1,
    slug: '01-what-is-an-ai-strategy-and-why-every-enterprise-needs-one',
    title: 'What Is an AI Strategy and Why Every Enterprise Needs One',
    excerpt:
      'The 2026 five-pillar framework, the latest McKinsey and Gartner data, and how to turn AI from pilot purgatory into EBIT impact.',
    category: 'AI Strategy',
  },
  {
    num: 2,
    slug: '02-how-to-build-an-ai-roadmap-for-enterprise-transformation',
    title: 'How to Build an AI Roadmap for Enterprise Transformation',
    excerpt:
      'A 2026 enterprise AI roadmap sequences value pools, capabilities, and governance over a 24-month horizon. The five-phase framework.',
    category: 'AI Strategy',
  },
  {
    num: 3,
    slug: '03-ai-strategy-consulting-in-dubai--what-leaders-should-know',
    title: 'AI Strategy Consulting in Dubai: What Leaders Should Know',
    excerpt:
      'What to know before hiring an AI strategy consultant in Dubai — the local regulatory landscape, what good engagements look like.',
    category: 'AI Strategy',
  },
  {
    num: 4,
    slug: '04-how-to-prioritize-ai-use-cases-for-maximum-roi',
    title: 'How to Prioritize AI Use Cases for Maximum ROI',
    excerpt:
      'Most AI portfolios are too long, too shallow, and too disconnected from EBIT. The 2026 prioritization framework and scoring rubric.',
    category: 'AI Strategy',
  },
  {
    num: 5,
    slug: '05-why-most-ai-pilots-fail-to-scale',
    title: 'Why Most AI Pilots Fail to Scale (And How to Fix It)',
    excerpt:
      'Two-thirds of enterprises cannot scale AI beyond pilots. The 2026 diagnosis, the five failure patterns, and the operating-model fix.',
    category: 'AI Strategy',
  },
  {
    num: 6,
    slug: '06-from-ai-experimentation-to-enterprise-ai-adoption',
    title: 'From AI Experimentation to Enterprise AI Adoption',
    excerpt:
      'The defining capability of 2026. The four-stage transition model and the platform and governance moves it requires.',
    category: 'AI Strategy',
  },
  {
    num: 7,
    slug: '07-how-ceos-should-think-about-ai-transformation',
    title: 'How CEOs Should Think About AI Transformation',
    excerpt:
      'AI transformation is a CEO agenda item, not a CIO project. Where to invest, what to govern personally, and the five decisions that matter.',
    category: 'AI Strategy',
  },
  {
    num: 8,
    slug: '08-building-an-ai-operating-model-for-large-organizations',
    title: 'Building an AI Operating Model for Large Organizations',
    excerpt:
      'Centre of Excellence, federated pods, platform layer, and governance — the structure that lets enterprises scale AI without rebuilding it.',
    category: 'AI Strategy',
  },
  {
    num: 9,
    slug: '09-ai-strategy-for-government-and-public-sector-organizations',
    title: 'AI Strategy for Government and Public Sector Organizations',
    excerpt:
      'Aligning citizen service, operational efficiency, sovereign infrastructure, and AI ethics for public-sector entities in the UAE and GCC.',
    category: 'Public Sector',
  },
  {
    num: 10,
    slug: '10-ai-transformation-in-the-gcc--opportunities-and-risks',
    title: 'AI Transformation in the GCC: Opportunities and Risks',
    excerpt:
      'AI is reshaping the GCC strategic economy. The 2026 map of opportunities, the structural risks, and the governance moves required now.',
    category: 'AI Strategy',
  },
  {
    num: 11,
    slug: '11-what-is-ai-readiness--a-practical-guide-for-enterprises',
    title: 'What Is AI Readiness? A Practical Guide for Enterprises',
    excerpt:
      'AI readiness has five dimensions: strategy, data, infrastructure, talent, and governance. The framework and the assessment approach.',
    category: 'AI Readiness',
  },
  {
    num: 12,
    slug: '12-ai-readiness-assessment--what-it-measures-and-why-it-matters',
    title: 'AI Readiness Assessment: What It Measures and Why It Matters',
    excerpt:
      'The single best investment before scaling AI. What a 2026 readiness assessment measures across strategy, data, infrastructure, talent, and governance.',
    category: 'AI Readiness',
  },
  {
    num: 13,
    slug: '13-the-four-dimensions-of-ai-maturity--technology--people--process--and-data',
    title: 'The Four Dimensions of AI Maturity',
    excerpt:
      'Technology, people, process, and data. The framework, the scoring rubric, and how to chart a 24-month maturity path.',
    category: 'AI Maturity',
  },
  {
    num: 14,
    slug: '14-how-to-measure-ai-maturity-in-your-organization',
    title: 'How to Measure AI Maturity in Your Organization',
    excerpt:
      'A practical 2026 method — what to score, who to interview, what evidence to collect, and how to translate the result into a plan.',
    category: 'AI Maturity',
  },
  {
    num: 15,
    slug: '15-ai-maturity-model-for-enterprise-leaders',
    title: 'AI Maturity Model for Enterprise Leaders',
    excerpt:
      'A practical 2026 maturity model with five levels and four dimensions. Where enterprises sit today and what the next level requires.',
    category: 'AI Maturity',
  },
  {
    num: 16,
    slug: '16-how-to-create-an-ai-readiness-scorecard',
    title: 'How to Create an AI Readiness Scorecard',
    excerpt:
      'A practical scorecard template — what to score, how to weight, who fills it in, and how to turn the result into a fundable plan.',
    category: 'AI Readiness',
  },
  {
    num: 17,
    slug: '17-data-readiness-for-ai--a-practical-enterprise-checklist',
    title: 'Data Readiness for AI: A Practical Enterprise Checklist',
    excerpt:
      'Data readiness is where most AI programmes stall. The 2026 enterprise checklist across quality, lineage, governance, residency, and pipelines.',
    category: 'AI Readiness',
  },
  {
    num: 18,
    slug: '18-infrastructure-readiness-for-ai-adoption',
    title: 'Infrastructure Readiness for AI Adoption',
    excerpt:
      'Compute, MLOps, agent orchestration, observability, sovereign options — the framework for enterprises across the UAE and GCC.',
    category: 'AI Readiness',
  },
  {
    num: 19,
    slug: '19-talent-readiness--building-the-skills-needed-for-ai-transformation',
    title: 'Talent Readiness: Building Skills for AI Transformation',
    excerpt:
      'The biggest soft constraint on enterprise AI in 2026. The role map, the reskilling playbook, and how to close the AI talent gap.',
    category: 'AI Readiness',
  },
  {
    num: 20,
    slug: '20-change-management-for-ai-adoption',
    title: 'Change Management for AI Adoption',
    excerpt:
      'AI adoption is a change-management problem. Where adoption breaks, the four change levers that work, and how to deliver behaviour change.',
    category: 'AI Readiness',
  },
  {
    num: 21,
    slug: '21-what-is-ai-governance--a-practical-guide-for-business-leaders',
    title: 'What Is AI Governance? A Practical Guide for Business Leaders',
    excerpt:
      'AI governance is a strategic asset. The framework, the regulatory map (EU AI Act, UAE PDPL), and governance that satisfies boards and regulators.',
    category: 'AI Governance',
  },
  {
    num: 22,
    slug: '22-ai-governance-framework-for-enterprises',
    title: 'AI Governance Framework for Enterprises',
    excerpt:
      'Principles, inventory, lifecycle controls, accountability, and assurance — the 2026 enterprise blueprint.',
    category: 'AI Governance',
  },
  {
    num: 23,
    slug: '23-responsible-ai--principles--policies--and-practical-controls',
    title: 'Responsible AI: Principles, Policies, and Practical Controls',
    excerpt:
      'Responsible AI is no longer a manifesto — it is a set of practical controls. The principles, policies, and operating controls that hold up.',
    category: 'Responsible AI',
  },
  {
    num: 24,
    slug: '24-ai-risk-management-for-regulated-industries',
    title: 'AI Risk Management for Regulated Industries',
    excerpt:
      'Banking, healthcare, government. Model-risk discipline, EU AI Act compliance, and sector regulator expectations combined.',
    category: 'AI Governance',
  },
  {
    num: 25,
    slug: '25-how-to-build-an-ai-policy-for-your-organization',
    title: 'How to Build an AI Policy for Your Organization',
    excerpt:
      'A 2026 AI policy template covering principles, acceptable use, employee guidance, vendor controls, and incident handling.',
    category: 'AI Governance',
  },
  {
    num: 26,
    slug: '26-ai-compliance-in-healthcare--banking--and-government',
    title: 'AI Compliance in Healthcare, Banking, and Government',
    excerpt:
      'AI compliance across the three most demanding sectors. The regulators, the controls, and the 2026 readiness path.',
    category: 'AI Compliance',
  },
  {
    num: 27,
    slug: '27-ethical-ai-guidelines-for-enterprise-deployment',
    title: 'Ethical AI Guidelines for Enterprise Deployment',
    excerpt:
      'The principles, the operating controls, and the governance that make ethical AI stick in real enterprise deployments.',
    category: 'Responsible AI',
  },
  {
    num: 28,
    slug: '28-ai-governance-in-the-middle-east--what-organizations-need-to-prepare-for',
    title: 'AI Governance in the Middle East: What to Prepare For',
    excerpt:
      'UAE AI Charter and PDPL, Saudi PDPL and SDAIA, sector regulators, EU AI Act extraterritorial reach. The 2026 landscape.',
    category: 'AI Governance',
  },
  {
    num: 29,
    slug: '29-model-monitoring-and-ai-accountability',
    title: 'Model Monitoring and AI Accountability',
    excerpt:
      'Model monitoring is the operating spine of AI accountability. What to monitor, how to monitor agents, and how to build the layer.',
    category: 'AI Governance',
  },
  {
    num: 30,
    slug: '30-how-boards-should-govern-ai-risk',
    title: 'How Boards Should Govern AI Risk',
    excerpt:
      'AI risk has arrived in the boardroom. What boards should ask, what they should receive, and how to assure regulators and shareholders.',
    category: 'AI Governance',
  },
  {
    num: 31,
    slug: '31-ai-in-healthcare--from-diagnostics-to-population-health',
    title: 'AI in Healthcare: From Diagnostics to Population Health',
    excerpt:
      'Diagnostics, clinical productivity, population health, and operational efficiency. The data, the use cases, and the delivery patterns.',
    category: 'Healthcare',
  },
  {
    num: 32,
    slug: '32-ai-in-banking--fraud-detection--risk--and-customer-automation',
    title: 'AI in Banking: Fraud, Risk, and Customer Automation',
    excerpt:
      'Fraud detection, risk modelling, customer automation, and generative AI. The data, the regulatory landscape, and the delivery model.',
    category: 'Banking',
  },
  {
    num: 33,
    slug: '33-ai-in-manufacturing--predictive-maintenance-and-smart-operations',
    title: 'AI in Manufacturing: Predictive Maintenance and Smart Operations',
    excerpt:
      '25% lower maintenance costs and 50% less downtime. The value pools, the ROI math, and how to industrialize AI across plant networks.',
    category: 'Manufacturing',
  },
  {
    num: 34,
    slug: '34-ai-in-retail--personalization--inventory--and-conversion-optimization',
    title: 'AI in Retail: Personalization, Inventory, Conversion',
    excerpt:
      'Conversion lift of 23%+, 31% sales increase from gen-AI personalization, 28% fewer stockouts. The framework and the data.',
    category: 'Retail',
  },
  {
    num: 35,
    slug: '35-ai-in-the-public-sector--citizen-services-and-operational-efficiency',
    title: 'AI in the Public Sector: Citizen Services and Operations',
    excerpt:
      'Citizen services, operational efficiency, sovereign infrastructure. The framework, the regulatory bar, and the delivery model.',
    category: 'Public Sector',
  },
  {
    num: 36,
    slug: '36-ai-in-supply-chain--demand-forecasting-and-supplier-risk',
    title: 'AI in Supply Chain: Demand Forecasting and Supplier Risk',
    excerpt:
      '35% lift in forecast accuracy, 28% reduction in stockouts. The five value pools, the data, and the delivery model.',
    category: 'Supply Chain',
  },
  {
    num: 37,
    slug: '37-ai-for-hospitals--building-an-ai-ready-digital-health-infrastructure',
    title: 'AI for Hospitals: Building AI-Ready Digital Health Infrastructure',
    excerpt:
      'EHR-integrated AI, ambient documentation, clinical decision support, governance — the blueprint to scale safely.',
    category: 'Healthcare',
  },
  {
    num: 38,
    slug: '38-ai-for-banks-in-the-gcc--strategy--governance--and-implementation',
    title: 'AI for Banks in the GCC: Strategy, Governance, Implementation',
    excerpt:
      'CBUAE, SAMA, Basel and EU AI Act alignment, plus the platform and operating model that makes scale possible.',
    category: 'Banking',
  },
  {
    num: 39,
    slug: '39-ai-for-government-transformation-in-the-middle-east',
    title: 'AI for Government Transformation in the Middle East',
    excerpt:
      'AI is the operating layer of Middle East government transformation. The framework, the national programmes, and the delivery model.',
    category: 'Public Sector',
  },
  {
    num: 40,
    slug: '40-how-regulated-industries-should-adopt-ai-safely',
    title: 'How Regulated Industries Should Adopt AI Safely',
    excerpt:
      'Banking, healthcare, government, energy — model-risk discipline, sector regulator alignment, and EU AI Act readiness combined.',
    category: 'AI Governance',
  },
  {
    num: 41,
    slug: 'ai-readiness-framework',
    href: '/insights/ai-readiness-framework',
    title: 'AI Readiness Framework: A Step-by-Step Guide for Enterprises',
    excerpt:
      'A comprehensive framework for assessing and enhancing AI readiness across technology, people, process, and data dimensions.',
    category: 'AI Readiness',
  },
  {
    num: 42,
    slug: 'scalable-ai-strategy',
    href: '/insights/scalable-ai-strategy',
    title: 'Building a Scalable AI Strategy: From Vision to Execution',
    excerpt:
      'Develop and execute an AI strategy that aligns with business goals and scales effectively across your organization.',
    category: 'AI Strategy',
  },
  {
    num: 43,
    slug: 'ai-governance-compliance',
    href: '/insights/ai-governance-compliance',
    title: 'AI Governance & Compliance: Innovation vs Risk',
    excerpt:
      'Navigate the complex ethical and regulatory landscape for AI while maintaining innovation and managing risks effectively.',
    category: 'AI Governance',
  },
  {
    num: 44,
    slug: 'ai-maturity-model',
    href: '/insights/ai-maturity-model',
    title: 'Enterprise AI Maturity Model: Assessing & Advancing Capabilities',
    excerpt:
      'A structured model to assess your organization’s AI maturity and build a roadmap for advancing capabilities.',
    category: 'AI Maturity',
  },
  {
    num: 45,
    slug: 'ai-digital-transformation',
    href: '/insights/ai-digital-transformation',
    title: 'The Role of AI in Digital Transformation',
    excerpt:
      'Explore how AI acts as a catalyst in digital transformation and drives business model innovation across industries.',
    category: 'AI Strategy',
  },
  {
    num: 46,
    slug: 'ai-decision-intelligence',
    href: '/insights/ai-decision-intelligence',
    title: 'AI in Decision Intelligence: Enhancing Strategic Decisions',
    excerpt:
      'How AI augments human decision-making with data-driven insights for better strategic outcomes.',
    category: 'AI Strategy',
  },
  {
    num: 47,
    slug: 'data-strategy-ai-success',
    href: '/insights/data-strategy-ai-success',
    title: 'Data Strategy for AI Success: Quality, Governance, Scale',
    excerpt:
      'Build a robust data foundation to ensure AI initiatives deliver maximum value and scale effectively.',
    category: 'AI Readiness',
  },
  {
    num: 48,
    slug: 'ai-enabled-workforce',
    href: '/insights/ai-enabled-workforce',
    title: 'AI-Enabled Workforce: Redefining Roles & Upskilling',
    excerpt:
      'Prepare your workforce for an AI-powered future through strategic upskilling and organizational change.',
    category: 'AI Readiness',
  },
  {
    num: 49,
    slug: 'operationalizing-ai',
    href: '/insights/operationalizing-ai',
    title: 'Operationalizing AI: From PoC to Enterprise Adoption',
    excerpt:
      'Move from AI proof-of-concepts to full-scale implementation and enterprise-wide adoption.',
    category: 'AI Strategy',
  },
  {
    num: 50,
    slug: 'economics-of-ai',
    href: '/insights/economics-of-ai',
    title: 'The Economics of AI: Measuring ROI & Business Impact',
    excerpt:
      'Frameworks and methodologies for calculating AI return on investment and justifying AI expenditures.',
    category: 'AI Strategy',
  },
];

function articleHref(a: Pick<Article, 'slug' | 'href'>) {
  return a.href ?? `/articles/${a.slug}.html`;
}

function isStaticHtml(href: string) {
  return /\.html?$/.test(href);
}

function ArticleCard(article: Article) {
  const { num, title, excerpt, category } = article;
  const [hover, setHover] = useState(false);
  const href = articleHref(article);
  const cardStyle: React.CSSProperties = {
    background: 'var(--paper-2)',
    padding: '40px 36px 36px',
    minHeight: 340,
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textDecoration: 'none',
    color: 'var(--ink)',
    transition: 'transform .2s ease',
    transform: hover ? 'translateY(-4px)' : 'none',
  };
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
  };
  const inner = (
    <>
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
          <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent)' }}>
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
    </>
  );
  if (isStaticHtml(href)) {
    return (
      <a href={href} style={cardStyle} {...handlers}>
        {inner}
      </a>
    );
  }
  return (
    <Link to={href} style={cardStyle} {...handlers}>
      {inner}
    </Link>
  );
}

const Insights = () => {
  const featured = ARTICLES[0];
  const grid = ARTICLES.slice(1);
  const [activeCat, setActiveCat] = useState<string | null>(null);

  const cats = useMemo(() => Array.from(new Set(ARTICLES.map((a) => a.category))), []);
  const filteredGrid = activeCat ? grid.filter((a) => a.category === activeCat) : grid;

  return (
    <div>
      <PageHero
        kicker="05 / Insights"
        title="Field notes from"
        italic="the work."
        lede="Forty articles on AI strategy, readiness, governance, and sector applications — written for boards and operators across Dubai, the UAE, and the GCC."
        meta={[`${ARTICLES.length} articles`, ...cats.slice(0, 3)]}
      />

      <section style={{ padding: '80px 0 0' }}>
        <Container>
          <div
            className="kanz-ins-featured"
            style={{
              background: 'var(--paper-light)',
              color: 'var(--ink-on-light)',
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
                    color: 'var(--muted-on-light)',
                  }}
                >
                  {featured.category}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 11,
                    letterSpacing: '0.16em',
                    color: 'var(--muted-on-light)',
                  }}
                >
                  / 01
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
                  color: 'var(--ink-on-light)',
                }}
              >
                {featured.title}
              </h2>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.55,
                  color: 'var(--muted-on-light)',
                  margin: '24px 0 32px',
                  maxWidth: 560,
                }}
              >
                {featured.excerpt}
              </p>
              <ArrowLink to={articleHref(featured)} dark>
                Read article
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
                  stroke="var(--ink-on-light)"
                  strokeWidth="0.6"
                  opacity={0.15 + i * 0.06}
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
                  stroke="var(--ink-on-light)"
                  strokeWidth="0.6"
                  opacity="0.12"
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
            <DisplayHead size="clamp(32px, 4.4vw, 60px)">
              {activeCat ? activeCat : 'More articles'}
            </DisplayHead>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'flex-end' }}>
              <button
                type="button"
                onClick={() => setActiveCat(null)}
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 11,
                  letterSpacing: '0.06em',
                  padding: '6px 12px',
                  borderRadius: 999,
                  border: '1px solid var(--line-strong)',
                  background: activeCat === null ? 'var(--accent)' : 'transparent',
                  color: activeCat === null ? 'var(--paper)' : 'var(--muted)',
                  cursor: 'pointer',
                }}
              >
                All
              </button>
              {cats.map((c) => {
                const active = c === activeCat;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setActiveCat(active ? null : c)}
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 11,
                      letterSpacing: '0.06em',
                      padding: '6px 12px',
                      borderRadius: 999,
                      border: '1px solid var(--line-strong)',
                      background: active ? 'var(--accent)' : 'transparent',
                      color: active ? 'var(--paper)' : 'var(--muted)',
                      cursor: 'pointer',
                    }}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          <div
            className="kanz-ins-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4 }}
          >
            {filteredGrid.map((a) => (
              <ArticleCard key={a.slug} {...a} />
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
        body="Get our latest articles and field notes on AI strategy, governance, and transformation across the GCC."
        primary={{ label: 'Get in touch', to: '/contact' }}
      />
    </div>
  );
};

export default Insights;
