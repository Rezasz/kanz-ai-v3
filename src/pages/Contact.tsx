import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';

const OMNIINBOX_ENDPOINT = 'https://omniinbox.kanz.ai/public/contact-form';
const OMNIINBOX_TOKEN = 'omni-shared-vxaLteemYkqFMYaAgCwHXgHraNiweFKY';
const COMPANY_SLUG = 'kanz-ai';

const inputClasses =
  'w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:border-pwc-orange focus:ring-2 focus:ring-pwc-orange/20 transition-colors';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const renderedAtRef = useRef(Date.now());

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    const formEl = e.currentTarget;
    const data = Object.fromEntries(new FormData(formEl).entries()) as Record<string, string>;

    if (data.website_field || Date.now() - renderedAtRef.current < 2500) {
      setFormSubmitted(true);
      formEl.reset();
      return;
    }

    const body = {
      company_slug: COMPANY_SLUG,
      email: data.email,
      message: data.message,
      name: data.name || undefined,
      phone: data.phone || undefined,
      company: data.company || undefined,
      subject: data.subject || undefined,
      page_url: window.location.href,
      metadata: {
        referrer: document.referrer || null,
        user_agent: navigator.userAgent,
      },
    };

    setSubmitting(true);
    try {
      const res = await fetch(OMNIINBOX_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OMNIINBOX_TOKEN}`,
        },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      formEl.reset();
      setFormSubmitted(true);
    } catch {
      setErrorMessage(
        'Sorry, something went wrong. Please try again or email contact@kanz.ai.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleSendAnother = () => {
    setFormSubmitted(false);
    setErrorMessage(null);
    renderedAtRef.current = Date.now();
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pwc-orange to-[#b33f02] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Get in touch with our experts to discuss how we can help transform your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              {formSubmitted ? (
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
              ) : (
                <form onSubmit={handleSubmit} noValidate className="relative space-y-4">
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

                  {/* honeypot: hidden from users, bots fill it */}
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

                  {errorMessage && (
                    <div
                      role="alert"
                      className="flex items-start gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md p-3"
                    >
                      <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-pwc-orange text-white font-medium rounded-md hover:bg-[#b33f02] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      'Sending…'
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-pwc-orange mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-600">
                        702-Opal Tower<br />
                        Business Bay<br />
                        Dubai, UAE
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-pwc-orange mr-4" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-600">+971-42327866</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-pwc-orange mr-4" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">contact@kanz.ai</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Office Hours</h2>
                <div className="bg-orange-100 rounded-lg p-6">
                  <div className="space-y-2">
                    <p className="flex justify-between">
                      <span className="font-medium">Monday - Saturday</span>
                      <span className="text-gray-600">9:00 AM - 6:00 PM GST</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="font-medium">Sunday</span>
                      <span className="text-gray-600">Closed</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Location</h2>
                <div className="bg-orange-100 rounded-lg p-4 h-[300px] relative">
                  <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                    <div className="text-center p-4">
                      <MapPin className="h-12 w-12 text-pwc-orange mx-auto mb-4" />
                      <h3 className="font-semibold text-lg mb-2">Opal Tower</h3>
                      <p className="text-gray-600">
                        702-Opal Tower, Business Bay<br />
                        Dubai, UAE
                      </p>
                      <a
                        href="https://maps.google.com/?q=Opal+Tower+Business+Bay+Dubai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block px-4 py-2 bg-pwc-orange text-white rounded-md hover:bg-[#b33f02] transition-colors"
                      >
                        View on Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
