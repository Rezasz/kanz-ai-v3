import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <Brain className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Kanz.ai</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Leading the way in AI-driven digital transformation and business consulting.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/industries" className="text-gray-400 hover:text-white">Industries</Link></li>
              <li><Link to="/insights" className="text-gray-400 hover:text-white">Insights</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/ai-strategy" className="text-gray-400 hover:text-white">AI Consulting</Link></li>
              <li><Link to="/services/digital-transformation" className="text-gray-400 hover:text-white">Digital Transformation</Link></li>
              <li><Link to="/services/ai-implementation" className="text-gray-400 hover:text-white">Enterprise AI Solutions</Link></li>
              <li><Link to="/ai-readiness" className="text-gray-400 hover:text-white">AI Readiness Assessment</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-gray-400">702-Opal Tower, Business Bay, Dubai, UAE</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-gray-400">+971-42327866</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-gray-400">contact@kanz.ai</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Kanz.ai. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;