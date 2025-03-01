import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, FileText, Scale, Lock, ArrowRight, CheckCircle, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AIGovernance = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Governance</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Establish robust AI governance frameworks and policies to ensure responsible and ethical AI use
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Responsible AI for Sustainable Success</h2>
              <p className="text-lg text-gray-600 mb-6">
                As AI becomes increasingly integrated into business operations, establishing proper governance is essential for managing risks, ensuring compliance, and building trust. Our AI Governance services help organizations develop and implement comprehensive frameworks for responsible AI use.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We take a holistic approach to AI governance, addressing ethical considerations, regulatory compliance, risk management, and operational oversight. Our team of experts works with you to develop policies, processes, and controls that ensure your AI initiatives are transparent, fair, and aligned with your organizational values.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link to="/contact">
                  <Button className="w-full sm:w-auto">
                    Schedule a Consultation
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Explore All Services
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative hidden lg:block"
            >
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800"
                alt="AI Governance"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our AI Governance Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for responsible AI use</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="bg-orange-100 rounded-full p-3 inline-block mb-4">
                  <service.icon className="h-8 w-8 text-pwc-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-pwc-orange mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Framework */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our AI Governance Framework</h2>
            <p className="text-xl text-gray-600">A comprehensive approach to responsible AI</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <div className="space-y-8">
                {frameworkComponents.map((component, index) => (
                  <div key={component.title} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-pwc-orange text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{component.title}</h3>
                      <p className="text-gray-600">{component.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative hidden md:block order-1 md:order-2"
            >
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800"
                alt="AI Governance Framework"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real-world impact of our AI governance services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="flex items-center text-pwc-orange">
                    <BarChart className="h-5 w-5 mr-2" />
                    <span className="font-semibold">{study.result}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Establish AI Governance?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact our team of AI governance experts to start building a framework for responsible AI use in your organization.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg">
                Contact Us
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg">
                Explore All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: "Policy Development",
    description: "Develop comprehensive AI policies and guidelines for your organization",
    icon: FileText,
    points: [
      "AI ethics policies",
      "Data governance guidelines",
      "Model development standards",
      "Responsible AI principles"
    ]
  },
  {
    title: "Risk Management",
    description: "Identify, assess, and mitigate risks associated with AI implementation",
    icon: Shield,
    points: [
      "AI risk assessment frameworks",
      "Bias detection and mitigation",
      "Model explainability solutions",
      "Continuous monitoring systems"
    ]
  },
  {
    title: "Compliance Monitoring",
    description: "Ensure AI initiatives comply with relevant regulations and standards",
    icon: Scale,
    points: [
      "Regulatory compliance assessment",
      "Compliance monitoring tools",
      "Documentation and reporting",
      "Audit preparation"
    ]
  },
  {
    title: "Ethical AI Guidelines",
    description: "Establish principles and practices for ethical AI development and use",
    icon: Target,
    points: [
      "Ethical AI frameworks",
      "Fairness and bias assessment",
      "Transparency guidelines",
      "Accountability mechanisms"
    ]
  },
  {
    title: "Data Privacy & Security",
    description: "Implement robust data protection measures for AI systems",
    icon: Lock,
    points: [
      "Data privacy impact assessments",
      "Security controls implementation",
      "Access management frameworks",
      "Data protection compliance"
    ]
  }
];

const frameworkComponents = [
  {
    title: "Governance Structure",
    description: "Establish clear roles, responsibilities, and decision-making processes for AI governance, including executive oversight, AI ethics committees, and operational teams."
  },
  {
    title: "Policies & Standards",
    description: "Develop comprehensive policies, standards, and guidelines that define how AI should be developed, deployed, and used within your organization."
  },
  {
    title: "Risk Management",
    description: "Implement processes for identifying, assessing, and mitigating risks associated with AI, including bias, privacy, security, and ethical concerns."
  },
  {
    title: "Compliance & Regulatory Alignment",
    description: "Ensure AI initiatives comply with relevant regulations, standards, and industry best practices through monitoring and reporting mechanisms."
  },
  {
    title: "Transparency & Explainability",
    description: "Establish requirements and methods for ensuring AI systems are transparent and their decisions can be explained to stakeholders."
  },
  {
    title: "Continuous Monitoring & Improvement",
    description: "Implement processes for ongoing monitoring, evaluation, and improvement of AI systems and governance practices."
  }
];

const caseStudies = [
  {
    title: "Financial Services AI Governance",
    description: "Implementation of a comprehensive AI governance framework for a global financial institution, ensuring regulatory compliance and ethical AI use",
    result: "100% compliance with regulations and 45% reduction in AI-related risks",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800"
  },
  {
    title: "Healthcare AI Ethics Program",
    description: "Development of an AI ethics program for a healthcare provider, focusing on patient data privacy, fairness, and transparency",
    result: "Enhanced patient trust and successful regulatory approval for AI systems",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800"
  }
];

export default AIGovernance;