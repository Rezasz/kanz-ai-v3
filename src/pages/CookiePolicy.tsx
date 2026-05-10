import React from 'react';
import { Container, Eyebrow, PageCTA, PageHero } from '@/components/design';

const SECTIONS = [
  {
    h: 'What this site uses',
    body: [
      'kanz.ai is a static single-page application. We do not currently set any first-party tracking cookies, run analytics, or share visitor data with advertising networks.',
      'The site uses your browser only in the following ways: (1) the React Router stores no cookies; (2) the contact form sends a single HTTPS POST to our OmniInbox endpoint, which does not return a cookie; (3) self-hosted assessment progress, if you leave the page mid-assessment, is held only in component memory and lost on reload.',
    ],
  },
  {
    h: 'Third-party requests we make on your behalf',
    body: [
      'When you load a page, your browser fetches a small number of resources from third parties to render the page:',
      '— Google Fonts (fonts.googleapis.com, fonts.gstatic.com) to load Space Grotesk, Inter, JetBrains Mono, and Instrument Serif. Google\'s servers may log the request IP per their privacy policy. No cookies are set on the kanz.ai origin as a result.',
      '— Vercel\'s CDN serves the static bundle. Vercel may log request metadata for operational and security purposes.',
      'No script from these third parties runs on the page; only static assets are fetched.',
    ],
  },
  {
    h: 'Contact form data',
    body: [
      'When you submit the contact form, the data you enter is sent over HTTPS to https://omniinbox.kanz.ai/public/contact-form, which is operated by Kanz.ai. The submission includes the fields you complete (name, email, phone, company, subject, message) plus a `form` metadata tag identifying the source page.',
      'We retain submissions in our OmniInbox database to respond to your enquiry. We do not share contact-form submissions with any third party for marketing purposes.',
    ],
  },
  {
    h: 'Browser storage',
    body: [
      'The site does not write to localStorage, sessionStorage, or IndexedDB during normal use. If a future feature requires it (for example, saving an assessment to resume later), this policy will be updated and the feature itself will tell you what it stores.',
    ],
  },
  {
    h: 'Your choices',
    body: [
      'Because the site does not currently set tracking cookies, there is nothing to opt out of here. You can still:',
      '— Block third-party requests to fonts.googleapis.com and fonts.gstatic.com in your browser or via an extension; the site will fall back to system fonts and remain fully readable.',
      '— Use your browser\'s "Do Not Track" or private-browsing modes; the site behaviour will not change.',
      '— Refuse to submit the contact form, in which case no personal data leaves your browser.',
    ],
  },
  {
    h: 'If this changes',
    body: [
      'If we add analytics, advertising pixels, A/B-testing cookies, or any other tracking mechanism in the future, this policy will be updated and we will surface a clear notice on the site. The update history is visible via the website\'s public Git repository.',
    ],
  },
  {
    h: 'Contact',
    body: [
      'Questions about this policy, the data we hold on you, or your rights under applicable data protection law (including the UAE PDPL and the GDPR if you are in the EEA) can be sent to contact@kanz.ai or via the contact form.',
    ],
  },
];

const CookiePolicy = () => {
  return (
    <div>
      <PageHero
        kicker="09 / Cookie Policy"
        title="What this site puts"
        italic="on your machine."
        lede="A plain-English account of cookies, browser storage, and third-party requests on kanz.ai. Short version: essentially none."
        meta={['Last updated: 11 May 2026', 'Effective: 11 May 2026']}
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
                    <a href={`#sec-${i + 1}`} style={{ color: 'inherit', textDecoration: 'none' }}>
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
        kicker="Need detail"
        title="Have a specific"
        italic="data question?"
        body="Reach out and we'll tell you exactly what we hold, why we hold it, and how to have it removed."
        primary={{ label: 'Contact us', to: '/contact' }}
        secondary={{ label: 'Read the disclaimer', to: '/disclaimer' }}
      />
    </div>
  );
};

export default CookiePolicy;
