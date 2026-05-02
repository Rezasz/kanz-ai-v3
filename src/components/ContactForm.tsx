import { useRef, useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { submitToOmniInbox } from '@/lib/omniinbox';

type State = 'idle' | 'sending' | 'ok' | 'error';

const inputClasses =
  'w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:border-pwc-orange focus:ring-2 focus:ring-pwc-orange/20 transition-colors';

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

    // honeypot + time-trap (bots fire instantly, humans don't)
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
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
        <p className="text-gray-600">
          Your message has been received. We'll get back to you shortly.
        </p>
        <button
          onClick={handleSendAnother}
          className="mt-6 px-4 py-2 bg-pwc-orange text-white rounded-md hover:bg-[#b33f02] transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          className={inputClasses}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+971 ..."
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Company name"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          maxLength={500}
          placeholder="What's this about?"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="How can Kanz.ai help you?"
          className={inputClasses}
        />
      </div>

      {/* honeypot — hidden from users, bots fill it */}
      <input
        name="website_field"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '-9999px',
          width: '1px',
          height: '1px',
          opacity: 0,
        }}
      />

      {state === 'error' && (
        <div
          role="alert"
          className="flex items-start gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md p-3"
        >
          <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
          <span>
            Sorry, something went wrong. Please try again or email contact@kanz.ai.
            {errMsg && (
              <span className="block opacity-60 text-xs mt-1">({errMsg})</span>
            )}
          </span>
        </div>
      )}

      <button
        type="submit"
        disabled={state === 'sending'}
        className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-pwc-orange text-white font-medium rounded-md hover:bg-[#b33f02] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === 'sending' ? (
          'Sending…'
        ) : (
          <>
            <Send className="h-4 w-4 mr-2" />
            Send message
          </>
        )}
      </button>
    </form>
  );
}
