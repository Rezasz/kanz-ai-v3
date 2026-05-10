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

const FRAMEWORKS = [
  {
    num: '01',
    title: 'Kanz Maturity Model',
    italic: 'capability scorecard',
    category: 'AI Maturity',
    excerpt:
      'A comprehensive framework for assessing and enhancing AI capabilities across technology, people, process, and data dimensions.',
    pillars: ['Technology readiness', 'People & skills', 'Process integration', 'Data capability'],
    link: '/framework/maturity-model',
  },
  {
    num: '02',
    title: 'AI Readiness Framework',
    italic: 'are you set up to win?',
    category: 'AI Readiness',
    excerpt:
      "Evaluate your organization's preparedness for AI adoption across data, infrastructure, skills, and change management areas.",
    pillars: ['Data foundation', 'Infrastructure', 'Skills & talent', 'Change management'],
    link: '/framework/ai-readiness',
  },
  {
    num: '03',
    title: 'AI Strategy Framework',
    italic: 'from vision to execution',
    category: 'AI Strategy',
    excerpt:
      'Develop and execute an AI strategy that aligns with business goals and scales effectively across your organization.',
    pillars: ['Business alignment', 'Use-case portfolio', 'Operating model', 'Roadmap & ROI'],
    link: '/framework/ai-strategy',
  },
  {
    num: '04',
    title: 'Consulting Process',
    italic: 'discovery to deployment',
    category: 'Methodology',
    excerpt:
      'Our proven methodology for delivering successful AI and digital transformation solutions from discovery to implementation.',
    pillars: ['Discovery', 'Design', 'Build', 'Run'],
    link: '/framework/consulting-process',
  },
];

function FrameworkCard({ num, title, italic, category, excerpt, pillars, link }: (typeof FRAMEWORKS)[number]) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      to={link}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? 'var(--ink)' : 'var(--paper-2)',
        color: hover ? 'var(--paper)' : 'var(--ink)',
        padding: '48px 40px',
        minHeight: 420,
        transition: 'background .25s ease, color .25s ease',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 4,
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
              textTransform: 'uppercase',
            }}
          >
            {category}
          </span>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 11, opacity: 0.5 }}>/ {num}</span>
        </div>
        <h3
          style={{
            fontFamily: 'var(--display)',
            fontStyle: 'var(--head-style)' as unknown as string,
            fontWeight: 'var(--display-weight)' as unknown as number,
            fontSize: 'clamp(28px, 3.6vw, 52px)',
            lineHeight: 1.04,
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
            fontSize: 15.5,
            lineHeight: 1.6,
            opacity: 0.85,
            color: hover ? 'var(--paper)' : 'var(--muted)',
            margin: '28px 0 0',
            maxWidth: 480,
          }}
        >
          {excerpt}
        </p>
      </div>
      <div style={{ display: 'flex', gap: '8px 12px', flexWrap: 'wrap', marginTop: 32 }}>
        {pillars.map((p) => (
          <span
            key={p}
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              letterSpacing: '0.06em',
              padding: '8px 14px',
              borderRadius: 999,
              border: hover
                ? '1px solid color-mix(in oklab, var(--paper) 26%, transparent)'
                : '1px solid var(--line-strong)',
            }}
          >
            {p}
          </span>
        ))}
      </div>
    </Link>
  );
}

const Framework = () => {
  return (
    <div>
      <PageHero
        kicker="03 / Framework"
        title="Our methodologies."
        italic="Tested in the field."
        lede="Frameworks built on extensive experience helping organizations across the GCC navigate their AI and digital transformation journeys."
        meta={['4 frameworks', 'Industry-tested', 'Tied to assessments']}
      />

      <section style={{ padding: '100px 0', borderBottom: '1px solid var(--line)' }}>
        <Container>
          <div
            className="kanz-fw-intro"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 100, alignItems: 'start' }}
          >
            <Eyebrow>Our consulting approach</Eyebrow>
            <div>
              <DisplayHead size="clamp(28px, 3.6vw, 56px)" style={{ marginBottom: 28 }}>
                Successful AI implementation requires a <GoldItalic>structured</GoldItalic>, comprehensive approach — not
                slideware.
              </DisplayHead>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--muted)', margin: 0, maxWidth: 680 }}>
                Each framework addresses specific aspects of AI adoption and implementation, from assessing readiness and
                maturity to developing strategies and ensuring effective execution. Together, they provide a complete roadmap
                for organizations at any stage of their AI journey.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
                <ArrowLink to="/ai-readiness" primary>
                  Take AI Readiness Assessment
                </ArrowLink>
                <ArrowLink to="/contact">Schedule a consultation</ArrowLink>
              </div>
            </div>
          </div>
        </Container>
        <style>{`@media (max-width: 900px){.kanz-fw-intro{grid-template-columns:1fr !important;gap:32px !important;}}`}</style>
      </section>

      <section style={{ padding: '120px 0' }}>
        <Container>
          <Eyebrow style={{ marginBottom: 24 }}>The frameworks</Eyebrow>
          <DisplayHead size="clamp(36px, 5vw, 80px)" style={{ marginBottom: 64, maxWidth: 1200 }}>
            Four lenses on the same <GoldItalic>question</GoldItalic>: how do you make AI compound?
          </DisplayHead>
          <div
            className="kanz-fw-grid"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}
          >
            {FRAMEWORKS.map((f) => (
              <FrameworkCard key={f.num} {...f} />
            ))}
          </div>
        </Container>
        <style>{`@media (max-width: 740px){.kanz-fw-grid{grid-template-columns:1fr !important;}}`}</style>
      </section>

      <PageCTA
        kicker="Apply the framework"
        title="Find your starting"
        italic="point."
        body="The maturity model is the fastest way to see where you stand. Take 12 minutes; get a domain-by-domain map of where to invest first."
        primary={{ label: 'Take the assessment', to: '/assess' }}
        secondary={{ label: 'Talk to a consultant', to: '/contact' }}
      />
    </div>
  );
};

export default Framework;
