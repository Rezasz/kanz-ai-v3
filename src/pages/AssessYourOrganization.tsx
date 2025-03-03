import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AssessYourOrganization = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Assess Your Organization</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive assessments to evaluate your organization's readiness and maturity in AI adoption
            </p>
          </motion.div>
        </div>
      </section>

      {/* Assessment Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {assessments.map((assessment, index) => (
              <motion.div
                key={assessment.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="bg-orange-100 rounded-full p-3 inline-block mb-4">
                    <assessment.icon className="h-8 w-8 text-pwc-orange" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{assessment.title}</h3>
                  <p className="text-gray-600 mb-6">{assessment.description}</p>
                  <ul className="space-y-3 mb-6">
                    {assessment.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <ArrowRight className="h-4 w-4 text-pwc-orange mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to={assessment.link}>
                    <Button className="w-full">
                      Start Assessment
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Take Our Assessments?</h2>
            <p className="text-xl text-gray-600">Gain valuable insights to guide your AI journey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Expert Guidance?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team of experts can help you interpret your assessment results and develop an action plan.
          </p>
          <Link to="/contact">
            <Button size="lg">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

const assessments = [
  {
    title: "AI Readiness Assessment",
    description: "Evaluate your organization's preparedness to adopt and implement AI technologies effectively.",
    icon: Brain,
    link: "/ai-readiness",
    features: [
      "Comprehensive readiness evaluation",
      "Gap analysis across key dimensions",
      "Actionable recommendations",
      "Benchmarking against industry standards"
    ]
  },
  {
    title: "Data Maturity Assessment",
    description: "Assess your organization's data management capabilities and readiness for AI-driven analytics.",
    icon: Database,
    link: "/data-maturity",
    features: [
      "Data governance evaluation",
      "Quality management assessment",
      "Infrastructure readiness check",
      "Privacy and compliance review"
    ]
  },
  {
    title: "AI Maturity Assessment",
    description: "Measure your organization's current AI maturity level and identify paths for advancement.",
    icon: Target,
    link: "/framework/maturity-assessment",
    features: [
      "Comprehensive maturity scoring",
      "Capability assessment",
      "Strategic alignment check",
      "Growth opportunity identification"
    ]
  }
];

const benefits = [
  {
    title: "Clear Direction",
    description: "Get a detailed understanding of your current state and clear recommendations for improvement."
  },
  {
    title: "Benchmarking",
    description: "Compare your capabilities against industry standards and best practices."
  },
  {
    title: "Risk Mitigation",
    description: "Identify potential challenges and risks before they impact your initiatives."
  },
  {
    title: "Resource Optimization",
    description: "Focus your investments and efforts where they'll have the most impact."
  },
  {
    title: "Stakeholder Alignment",
    description: "Build consensus around priorities and next steps with objective assessment data."
  },
  {
    title: "Actionable Insights",
    description: "Receive practical, actionable recommendations tailored to your organization."
  }
];

export default AssessYourOrganization;