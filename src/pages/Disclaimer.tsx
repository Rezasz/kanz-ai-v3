import React from 'react';
import { Container, Eyebrow, PageCTA, PageHero } from '@/components/design';

const SECTIONS = [
  {
    h: 'General information',
    body: [
      'The content published on kanz.ai is provided for general informational purposes only. It is intended to give visitors an overview of Kanz.ai\'s services, frameworks, insights, and assessments, and is not intended to constitute professional, legal, financial, or technical advice.',
      'Every effort is made to keep the information current and accurate. However, no representations or warranties of any kind, express or implied, are made about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on it.',
    ],
  },
  {
    h: 'No professional advice',
    body: [
      'Information on this site, including the AI Readiness Assessment, Data Maturity Assessment, AI Maturity Assessment, AI Risk Self-Assessment, and any published whitepaper, framework excerpt, or insight article, is educational in nature.',
      'It should not be relied upon as a substitute for engaging Kanz.ai or another qualified professional under a written engagement letter. Any reliance you place on assessment outputs, frameworks, or insights is strictly at your own risk.',
    ],
  },
  {
    h: 'Limitation of liability',
    body: [
      'In no event will Kanz.ai be liable for any loss or damage — including without limitation indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data, revenue, or profits — arising out of, or in connection with, the use of this website or its content.',
    ],
  },
  {
    h: 'Third-party links',
    body: [
      'This website may include links to other websites that are not under the control of Kanz.ai. We have no control over the nature, content, or availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.',
    ],
  },
  {
    h: 'Intellectual property',
    body: [
      'All content on this site — including text, frameworks, the Kanz Maturity Model, assessment questionnaires, scoring methodologies, the Kanz.ai brand mark, and all graphics — is the property of Kanz.ai unless otherwise noted, and is protected by applicable copyright and trademark law.',
      'You may not reproduce, distribute, modify, transmit, reuse, repost, or republish any material from this site for public or commercial purposes without prior written permission.',
    ],
  },
  {
    h: 'Governing law',
    body: [
      'This disclaimer and your use of this website are governed by the laws of the United Arab Emirates, without regard to its conflict-of-law provisions. Any dispute arising from the use of this website shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.',
    ],
  },
  {
    h: 'Changes to this disclaimer',
    body: [
      'Kanz.ai reserves the right to amend this disclaimer at any time. The latest version will always be available at this URL. We encourage you to review it periodically.',
    ],
  },
];

const Disclaimer = () => {
  return (
    <div>
      <PageHero
        kicker="08 / Disclaimer"
        title="Legal disclaimer"
        italic="and limitations of use."
        lede="Important information about how the content on this site should — and should not — be relied upon."
        meta={['Last updated: 11 May 2026', 'Governing law: UAE']}
      />

      <section style={{ padding: '100px 0' }}>
        <Container>
          <div
            className="kanz-legal-grid"
            style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 100, alignItems: 'start' }}
          >
            <div style={{ position: 'sticky', top: 120 }}>
              <Eyebrow style={{ marginBottom: 24 }}>Contents</Eyebrow>
              <ol
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  counterReset: 'sec',
                }}
              >
                {SECTIONS.map((s, i) => (
                  <li
                    key={s.h}
                    style={{
                      fontSize: 14,
                      color: 'var(--ink-2)',
                      display: 'flex',
                      gap: 12,
                      alignItems: 'baseline',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--mono)',
                        fontSize: 11,
                        letterSpacing: '0.12em',
                        color: 'var(--accent)',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <a
                      href={`#sec-${i + 1}`}
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      {s.h}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
              {SECTIONS.map((s, i) => (
                <section key={s.h} id={`sec-${i + 1}`}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: 14,
                      marginBottom: 16,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--mono)',
                        fontSize: 11,
                        letterSpacing: '0.18em',
                        color: 'var(--accent)',
                      }}
                    >
                      / {String(i + 1).padStart(2, '0')}
                    </span>
                    <h2
                      style={{
                        fontFamily: 'var(--display)',
                        fontWeight: 'var(--display-weight)' as unknown as number,
                        fontSize: 26,
                        letterSpacing: '-0.01em',
                        margin: 0,
                      }}
                    >
                      {s.h}
                    </h2>
                  </div>
                  {s.body.map((p, j) => (
                    <p
                      key={j}
                      style={{
                        fontSize: 15.5,
                        lineHeight: 1.65,
                        color: 'var(--ink-2)',
                        margin: j === 0 ? '0' : '14px 0 0',
                      }}
                    >
                      {p}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          </div>
        </Container>
        <style>{`@media (max-width: 900px){.kanz-legal-grid{grid-template-columns:1fr !important;gap:48px !important;}}`}</style>
      </section>

      <PageCTA
        kicker="Questions"
        title="Want to engage"
        italic="us properly?"
        body="If you need binding professional advice, a written engagement, or have a question about anything on this site, get in touch."
        primary={{ label: 'Contact us', to: '/contact' }}
        secondary={{ label: 'Read our cookie policy', to: '/cookie-policy' }}
      />
    </div>
  );
};

export default Disclaimer;
