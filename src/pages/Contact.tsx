import React from 'react';
import { ContactForm } from '@/components/ContactForm';
import { Container, Eyebrow, PageHero } from '@/components/design';

function ContactBlock({ label, lines, accent }: { label: string; lines: string[]; accent?: boolean }) {
  return (
    <div>
      <div
        style={{
          fontFamily: 'var(--mono)',
          fontSize: 10,
          letterSpacing: '0.18em',
          color: 'var(--muted)',
          textTransform: 'uppercase',
          marginBottom: 12,
        }}
      >
        {label}
      </div>
      <div style={{ fontSize: 16, lineHeight: 1.6, color: accent ? 'var(--accent)' : 'var(--ink)' }}>
        {lines.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>
    </div>
  );
}

const Contact = () => {
  return (
    <div>
      <PageHero
        kicker="07 / Contact"
        title="Tell us what"
        italic="you're working on."
        lede="Get in touch with our experts to discuss how we can help transform your business."
        meta={['Dubai · UAE', '+971-42327866', 'contact@kanz.ai']}
      />

      <section style={{ padding: '100px 0' }}>
        <Container>
          <div
            className="kanz-contact-grid"
            style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 80 }}
          >
            <div>
              <Eyebrow style={{ marginBottom: 24 }}>Send us a message</Eyebrow>
              <ContactForm />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              <ContactBlock label="Address" lines={['702-Opal Tower', 'Business Bay', 'Dubai, UAE']} />
              <ContactBlock label="Phone" lines={['+971-42327866']} />
              <ContactBlock label="Email" lines={['contact@kanz.ai']} accent />
              <ContactBlock label="Office hours" lines={['Mon–Sat · 9:00 – 18:00 GST', 'Sunday · Closed']} />

              <div
                style={{
                  background: 'var(--paper-2)',
                  borderRadius: 8,
                  border: '1px solid var(--line-strong)',
                  padding: 28,
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: 220,
                }}
              >
                <svg
                  viewBox="0 0 400 240"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.45 }}
                  aria-hidden
                >
                  <defs>
                    <pattern id="map-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--ink)" strokeWidth="0.3" opacity="0.18" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#map-grid)" />
                  <path d="M 0 120 L 400 80" stroke="var(--ink)" strokeWidth="1" opacity="0.3" />
                  <path d="M 200 0 L 220 240" stroke="var(--ink)" strokeWidth="1" opacity="0.3" />
                  <path d="M 100 240 L 300 0" stroke="var(--ink)" strokeWidth="1" opacity="0.2" />
                  <g transform="translate(220, 110)">
                    <circle r="20" fill="var(--accent)" opacity="0.18" />
                    <circle r="10" fill="var(--accent)" opacity="0.4" />
                    <circle r="4" fill="var(--accent)" />
                  </g>
                </svg>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 10,
                      letterSpacing: '0.18em',
                      color: 'var(--muted)',
                      marginBottom: 10,
                      textTransform: 'uppercase',
                    }}
                  >
                    LOCATION · 25.1881°N 55.2640°E
                  </div>
                  <div
                    style={{
                      fontFamily: "'Instrument Serif', Georgia, serif",
                      fontStyle: 'italic',
                      fontSize: 26,
                      lineHeight: 1.2,
                    }}
                  >
                    Opal Tower
                    <br />
                    Business Bay, Dubai
                  </div>
                  <a
                    href="https://maps.google.com/?q=Opal+Tower+Business+Bay+Dubai"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      marginTop: 18,
                      padding: '8px 14px',
                      fontFamily: 'var(--mono)',
                      fontSize: 11,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--accent)',
                      textDecoration: 'none',
                      border: '1px solid var(--accent)',
                      borderRadius: 999,
                    }}
                  >
                    Open in maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <style>{`@media (max-width: 980px){.kanz-contact-grid{grid-template-columns:1fr !important;gap:60px !important;}}`}</style>
      </section>
    </div>
  );
};

export default Contact;
