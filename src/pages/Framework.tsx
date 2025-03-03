import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Target, Database, Users, Lightbulb, BarChart, Layers, Cpu, Briefcase, GraduationCap, Calculator, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Framework = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Frameworks</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive methodologies and frameworks for successful AI implementation and digital transformation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold mb-4">Our Consulting Approach</h2>
            <p className="text-gray-700 mb-6">
              At Kanz.ai, we believe that successful AI implementation requires a structured, comprehensive approach. Our frameworks are built on extensive experience helping organizations across industries navigate their AI and digital transformation journeys.
            </p>
            <p className="text-gray-700 mb-6">
              Each framework addresses specific aspects of AI adoption and implementation, from assessing readiness and maturity to developing strategies and ensuring effective execution. Together, they provide a complete roadmap for organizations at any stage of their AI journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link to="/ai-readiness">
                <Button className="w-full sm:w-auto">
                  Take AI Readiness Assessment
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="w-full sm:w-auto">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Frameworks Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {frameworks.map((framework, index) => (
              <motion.div
                key={framework.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col"
              >
                <div className="p-6 flex-grow">
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-100 rounded-full p-2 mr-3">
                      <framework.icon className="h-6 w-6 text-pwc-orange" />
                    </div>
                    <div className="text-sm text-pwc-orange font-medium">{framework.category}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{framework.title}</h3>
                  <p className="text-gray-600 mb-4">{framework.excerpt}</p>
                </div>
                <div className="p-6 pt-0 mt-auto">
                  <Link to={framework.link}>
                    <Button variant="outline" className="w-full">
                      Read More
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const frameworks = [
  {
    title: "Kanz Maturity Model",
    excerpt: "A comprehensive framework for assessing and enhancing AI capabilities across technology, people, process, and data dimensions.",
    category: "AI Maturity",
    icon: Brain,
    link: "/framework/maturity-model"
  },
  {
    title: "AI Readiness Framework",
    excerpt: "Evaluate your organization's preparedness for AI adoption across data, infrastructure, skills, and change management areas.",
    category: "AI Readiness",
    icon: Target,
    link: "/framework/ai-readiness"
  },
  {
    title: "AI Strategy Framework",
    excerpt: "Develop and execute an AI strategy that aligns with business goals and scales effectively across your organization.",
    category: "AI Strategy",
    icon: Layers,
    link: "/framework/ai-strategy"
  },
  {
    title: "Consulting Process",
    excerpt: "Our proven methodology for delivering successful AI and digital transformation solutions from discovery to implementation.",
    category: "Methodology",
    icon: Workflow,
    link: "/framework/consulting-process"
  }
];

export default Framework;