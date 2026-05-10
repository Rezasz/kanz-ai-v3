import { useRef, useState } from 'react';
import { AlertCircle, CheckCircle, Send } from 'lucide-react';
import { submitToOmniInbox } from '@/lib/omniinbox';

type State = 'idle' | 'sending' | 'ok' | 'error';

const FIELD_BASE: React.CSSProperties = {
  width: '100%',
  background: 'var(--paper-2)',
  color: 'var(--ink)',
  border: '1px solid var(--line-strong)',
  borderRadius: 8,
  padding: '12px 14px',
  fontFamily: 'var(--sans)',
  fontSize: 15,
  outline: 'none',
  transition: 'border-color .15s ease, background .15s ease',
};

const LABEL_STYLE: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--mono)',
  fontSize: 10,
  letterSpacing: '0.18em',
  color: 'var(--muted)',
  textTransform: 'uppercase',
  marginBottom: 8,
};

export function ContactForm() {
  const [state, setState] = useState<State>('idle');
  const [errMsg, setErrMsg] = useState('');
  const renderedAt = useRef(Date.now());

  const handleSendAnother = () => {
    setState('idle');
    setErrMsg('');
    renderedAt.current = Date.now();
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    if (data.website_field || Date.now() - renderedAt.current < 2500) {
      setState('ok');
      form.reset();
      return;
    }

    setState('sending');
    setErrMsg('');
    const result = await submitToOmniInbox({
      email: data.email,
      message: data.message,
      name: data.name,
      phone: data.phone,
      company: data.company,
      subject: data.subject || 'Contact form submission',
      metadata: { form: 'contact' },
    });

    if (result.ok) {
      form.reset();
      setState('ok');
    } else {
      setState('error');
      setErrMsg(result.error);
    }
  };

  if (state === 'ok') {
    return (
      <div style={{ padding: '40px 16px', textAlign: 'left' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            padding: '10px 14px',
            border: '1px solid var(--accent)',
            borderRadius: 999,
            color: 'var(--accent)',
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
          }}
        >
          <CheckCircle size={14} />
          Message sent
        </div>
        <h3
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontStyle: 'italic',
            fontSize: 32,
            lineHeight: 1.3,
            margin: '24px 0 8px',
            maxWidth: 460,
          }}
        >
          Thanks. We'll be in touch within{' '}
          <span style={{ color: 'var(--accent)' }}>one business day</span>.
        </h3>
        <button
          onClick={handleSendAnother}
          style={{
            marginTop: 24,
            background: 'transparent',
            color: 'var(--ink)',
            border: '1px solid var(--line-strong)',
            borderRadius: 999,
            padding: '12px 22px',
            fontSize: 13,
            fontFamily: 'var(--sans)',
            cursor: 'pointer',
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 18 }}
    >
      <div>
        <label htmlFor="name" style={LABEL_STYLE}>
          Name
        </label>
        <input id="name" name="name" type="text" autoComplete="name" placeholder="Your name" style={FIELD_BASE} />
      </div>

      <div>
        <label htmlFor="email" style={LABEL_STYLE}>
          Email <span style={{ color: 'var(--accent)' }}>*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          style={FIELD_BASE}
        />
      </div>

      <div className="kanz-cf-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <div>
          <label htmlFor="phone" style={LABEL_STYLE}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+971 …"
            style={FIELD_BASE}
          />
        </div>
        <div>
          <label htmlFor="company" style={LABEL_STYLE}>
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Company name"
            style={FIELD_BASE}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" style={LABEL_STYLE}>
          Subject
        </label>
        <input id="subject" name="subject" type="text" maxLength={500} placeholder="What's this about?" style={FIELD_BASE} />
      </div>

      <div>
        <label htmlFor="message" style={LABEL_STYLE}>
          Message <span style={{ color: 'var(--accent)' }}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="How can Kanz.ai help you?"
          style={{ ...FIELD_BASE, resize: 'vertical', minHeight: 120 }}
        />
      </div>

      <input
        name="website_field"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '-9999px',
          width: 1,
          height: 1,
          opacity: 0,
        }}
      />

      {state === 'error' && (
        <div
          role="alert"
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 10,
            fontSize: 13,
            color: 'var(--accent)',
            background: 'var(--accent-soft)',
            border: '1px solid var(--accent)',
            borderRadius: 8,
            padding: 12,
          }}
        >
          <AlertCircle size={16} style={{ marginTop: 1, flexShrink: 0 }} />
          <span>
            Sorry, something went wrong. Please try again or email contact@kanz.ai.
            {errMsg && (
              <span style={{ display: 'block', opacity: 0.7, fontSize: 11, marginTop: 4 }}>({errMsg})</span>
            )}
          </span>
        </div>
      )}

      <button
        type="submit"
        disabled={state === 'sending'}
        style={{
          marginTop: 8,
          background: 'var(--ink)',
          color: 'var(--paper)',
          padding: '16px 26px',
          fontFamily: 'var(--sans)',
          fontSize: 14,
          fontWeight: 500,
          borderRadius: 999,
          border: 'none',
          cursor: state === 'sending' ? 'not-allowed' : 'pointer',
          opacity: state === 'sending' ? 0.7 : 1,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          alignSelf: 'flex-start',
        }}
      >
        {state === 'sending' ? (
          'Sending…'
        ) : (
          <>
            <Send size={14} />
            Send message
          </>
        )}
      </button>

      <style>{`@media (max-width: 540px){.kanz-cf-row{grid-template-columns:1fr !important;}}`}</style>
    </form>
  );
}
