import React from 'react';
import { Link } from 'react-router-dom';
import { Container, KanzMark } from '@/components/design';

const COLS: { h: string; items: [string, string][] }[] = [
  {
    h: 'Services',
    items: [
      ['AI Strategy & Consulting', '/services/ai-strategy'],
      ['Digital Transformation', '/services/digital-transformation'],
      ['AI Implementation', '/services/ai-implementation'],
      ['AI Governance', '/services/ai-governance'],
      ['Data Analytics', '/services/data-analytics'],
      ['AI Risk Management', '/services/ai-risk-management'],
    ],
  },
  {
    h: 'Framework',
    items: [
      ['Kanz Maturity Model', '/framework/maturity-model'],
      ['AI Readiness', '/framework/ai-readiness'],
      ['AI Strategy', '/framework/ai-strategy'],
      ['Consulting Process', '/framework/consulting-process'],
      ['Maturity Assessment', '/framework/maturity-assessment'],
    ],
  },
  {
    h: 'Industries',
    items: [
      ['Banking & Finance', '/industries/banking-finance'],
      ['Manufacturing', '/industries/manufacturing'],
      ['Healthcare', '/industries/healthcare'],
      ['Retail & E-commerce', '/industries/retail'],
      ['Public Sector', '/industries/public-sector'],
      ['Energy', '/industries/energy'],
    ],
  },
  {
    h: 'Company',
    items: [
      ['About', '/about'],
      ['Insights', '/insights'],
      ['Contact', '/contact'],
      ['Assess Your Organization', '/assess'],
    ],
  },
];

const Footer = () => {
  return (
    <footer
      style={{
        background: 'var(--paper-2)',
        color: 'var(--ink)',
        padding: '120px 0 40px',
        marginTop: 0,
        borderTop: '1px solid var(--line)',
      }}
    >
      <Container>
        <div className="kanz-footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24, color: 'var(--ink)' }}>
              <KanzMark size={32} />
              <span
                style={{
                  fontFamily: 'var(--display)',
                  fontWeight: 'var(--display-weight)' as unknown as number,
                  fontSize: 28,
                  letterSpacing: '-0.02em',
                }}
              >
                Kanz<span style={{ color: 'var(--accent)' }}>.</span>ai
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontStyle: 'italic',
                fontSize: 22,
                lineHeight: 1.3,
                color: 'var(--ink)',
                opacity: 0.85,
                margin: '0 0 32px',
                maxWidth: 360,
              }}
            >
              Your trusted partner in AI &amp; Digital Transformation.
            </p>
            <div
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                lineHeight: 1.8,
                color: 'var(--muted)',
                letterSpacing: '0.05em',
              }}
            >
              702 OPAL TOWER
              <br />
              BUSINESS BAY, DUBAI
              <br />
              UNITED ARAB EMIRATES
              <br />
              <a
                href="mailto:contact@kanz.ai"
                style={{ color: 'var(--accent)', textDecoration: 'none' }}
              >
                CONTACT@KANZ.AI
              </a>
            </div>
          </div>
          {COLS.map((c) => (
            <div key={c.h}>
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 11,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  marginBottom: 18,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    flexShrink: 0,
                  }}
                />
                {c.h}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {c.items.map(([label, path]) => (
                  <li key={label}>
                    <Link
                      to={path}
                      className="kanz-footer-link"
                      style={{
                        color: 'var(--ink)',
                        opacity: 0.85,
                        textDecoration: 'none',
                        fontSize: 13.5,
                        transition: 'color .2s ease, opacity .2s ease',
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 80,
            paddingTop: 32,
            borderTop: '1px solid var(--line-strong)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            justifyContent: 'space-between',
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '0.06em',
            color: 'var(--muted)',
          }}
        >
          <div>© {new Date().getFullYear()} KANZ.AI — ALL RIGHTS RESERVED</div>
          <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
            <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
              CONTACT
            </Link>
            <Link to="/assess" style={{ color: 'inherit', textDecoration: 'none' }}>
              ASSESSMENTS
            </Link>
            <a href="tel:+97142327866" style={{ color: 'inherit', textDecoration: 'none' }}>
              +971 4 232 7866
            </a>
          </div>
        </div>
      </Container>

      <style>{`
        .kanz-footer-link:hover {
          color: var(--accent) !important;
          opacity: 1 !important;
        }
        .kanz-footer-grid {
          display: grid;
          grid-template-columns: 1.4fr repeat(4, 1fr);
          gap: 48px;
        }
        @media (max-width: 1100px) {
          .kanz-footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }
        @media (max-width: 640px) {
          .kanz-footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
