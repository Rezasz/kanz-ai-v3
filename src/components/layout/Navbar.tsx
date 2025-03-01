import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Menu, X, ClipboardCheck, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Industries', path: '/industries' },
    { label: 'Insights', path: '/insights' },
    { label: 'Contact', path: '/contact' },
  ];

  const assessments = [
    { 
      label: 'AI Readiness Assessment',
      path: '/ai-readiness',
      icon: ClipboardCheck
    },
    {
      label: 'Data Maturity Assessment',
      path: '/data-maturity',
      icon: Database
    }
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Brain className="h-8 w-8 text-pwc-orange" />
              <span className="ml-2 text-xl font-bold text-pwc-gray">Kanz.ai</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-pwc-gray hover:text-pwc-orange px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex space-x-2">
              {assessments.map((assessment) => (
                <Link key={assessment.path} to={assessment.path}>
                  <Button variant="default" className="flex items-center">
                    <assessment.icon className="mr-2 h-4 w-4" />
                    {assessment.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-pwc-gray hover:text-pwc-orange focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-pwc-gray hover:text-pwc-orange block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {assessments.map((assessment) => (
              <Link
                key={assessment.path}
                to={assessment.path}
                onClick={() => setIsMenuOpen(false)}
              >
                <Button variant="default" className="w-full mt-4 flex items-center justify-center">
                  <assessment.icon className="mr-2 h-4 w-4" />
                  {assessment.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;