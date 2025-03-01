import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import HubSpotForm from '../components/HubSpotForm';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setFormSubmitted(true);
    // You can add additional logic here, like analytics tracking
    console.log("Form submitted successfully");
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
                    Your message has been submitted successfully. We'll get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 px-4 py-2 bg-pwc-orange text-white rounded-md hover:bg-[#b33f02] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <HubSpotForm 
                  className="custom-hubspot-form" 
                  onFormSubmit={handleFormSubmit}
                />
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