import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Lightbulb, Target, Cog, Shield, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Services = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive AI and digital transformation solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <service.icon className="h-12 w-12 text-pwc-orange mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <Target className="h-4 w-4 text-pwc-orange mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={service.link}>
                  <Button variant="default" className="w-full">
                    Read More
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl text-gray-600">Tailored AI solutions for your sector</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industrySolutions.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-pwc-gray text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">Schedule a consultation with our AI experts today</p>
          <Link to="/contact">
            <Button className="bg-white text-pwc-gray py-3 px-8 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

const mainServices = [
  {
    title: "AI Strategy & Consulting",
    description: "Develop a comprehensive AI roadmap aligned with your business objectives",
    icon: Brain,
    link: "/services/ai-strategy",
    features: [
      "AI readiness assessment",
      "Strategy development",
      "Implementation planning",
      "ROI analysis"
    ]
  },
  {
    title: "Digital Transformation",
    description: "End-to-end digital transformation solutions for the modern enterprise",
    icon: Lightbulb,
    link: "/services/digital-transformation",
    features: [
      "Process automation",
      "Legacy system modernization",
      "Cloud migration",
      "Digital workflow optimization"
    ]
  },
  {
    title: "AI Implementation",
    description: "Expert implementation of AI solutions across your organization",
    icon: Cog,
    link: "/services/ai-implementation",
    features: [
      "Custom AI development",
      "System integration",
      "Training & deployment",
      "Monitoring & optimization"
    ]
  },
  {
    title: "AI Governance",
    description: "Establish robust AI governance frameworks and policies",
    icon: Shield,
    link: "/services/ai-governance",
    features: [
      "Policy development",
      "Risk management",
      "Compliance monitoring",
      "Ethical AI guidelines"
    ]
  },
  {
    title: "Data Analytics",
    description: "Transform your data into actionable insights",
    icon: BarChart,
    link: "/services/data-analytics",
    features: [
      "Data strategy",
      "Advanced analytics",
      "Predictive modeling",
      "Visualization"
    ]
  }
];

const industrySolutions = [
  {
    title: "Banking & Finance",
    description: "AI solutions for risk assessment, fraud detection, and customer service automation"
  },
  {
    title: "Healthcare",
    description: "AI-powered diagnostic tools and patient care optimization"
  },
  {
    title: "Manufacturing",
    description: "Smart manufacturing solutions with predictive maintenance"
  },
  {
    title: "Retail",
    description: "Personalization and inventory optimization solutions"
  },
  {
    title: "Public Sector",
    description: "AI solutions for improved citizen services and operations"
  },
  {
    title: "Supply Chain",
    description: "Intelligent supply chain optimization and analytics"
  }
];

export default Services;