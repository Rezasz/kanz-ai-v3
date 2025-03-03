import React from 'react';
import { motion } from 'framer-motion';
import { Brain, CheckCircle, Target, BarChart, Layers, Users, Shield, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const KanzMaturityModel = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kanz Maturity Model</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Elevating AI Capabilities in Organizations through Comprehensive Assessment and Development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-gray-700 mb-6">
              The Kanz Maturity Model is designed to assess and guide organizations through their AI adoption journey, from initial experimentation to achieving transformative AI capabilities. It focuses on five key dimensions: Strategy & Vision, Data & Analytics, Technology & Tools, Governance & Compliance, and People & Culture.
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

      {/* Maturity Levels */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Maturity Levels: Understanding the Journey</h2>
            <p className="text-xl text-gray-600">From initial experimentation to transformative AI capabilities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {maturityLevels.map((level, index) => (
              <motion.div
                key={level.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="bg-orange-100 rounded-full p-3 inline-block mb-4">
                  <span className="text-xl font-bold text-pwc-orange">Level {index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{level.title}</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="space-y-2">
                    {level.characteristics.map((characteristic, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-pwc-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{characteristic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Dimensions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Dimensions</h2>
            <p className="text-xl text-gray-600">The five critical dimensions that shape AI maturity</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dimensions.map((dimension, index) => (
              <motion.div
                key={dimension.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="bg-orange-100 rounded-full p-3 inline-block mb-4">
                  <dimension.icon className="h-8 w-8 text-pwc-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{dimension.title}</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="space-y-2">
                    {dimension.elements.map((element, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-pwc-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{element}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Assessment Tool */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Self-Assessment Tool</h2>
            <p className="text-xl text-gray-600">Evaluate your organization's AI maturity</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-4">How it Works</h3>
              <div className="space-y-4">
                {assessmentFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-pwc-orange mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-4">Key Assessment Areas</h3>
              <div className="space-y-4">
                {assessmentAreas.map((area, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-pwc-orange mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of the Kanz Maturity Model</h2>
            <p className="text-xl text-gray-600">Key advantages of using our maturity model</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-3 mr-4 flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-pwc-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-pwc-gray text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Assess Your AI Maturity?</h2>
          <p className="text-xl mb-8">
            Take our comprehensive assessment to understand your organization's current AI maturity level and get actionable recommendations for improvement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/ai-readiness">
              <Button className="bg-white text-pwc-gray hover:bg-gray-100 w-full sm:w-auto">
                Take Assessment
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                Contact Our Experts
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const maturityLevels = [
  {
    title: "Ad-hoc",
    characteristics: [
      "AI initiatives are unstructured and experimental",
      "Lack of a clear AI strategy or roadmap",
      "Minimal budget allocation for AI projects",
      "Limited data management capabilities",
      "Few, if any, AI specialists"
    ]
  },
  {
    title: "Emerging",
    characteristics: [
      "AI pilots and POCs are in progress",
      "Basic data management capabilities",
      "Growing interest in AI use cases",
      "Initial investments in infrastructure",
      "Some technical expertise available"
    ]
  },
  {
    title: "Managed",
    characteristics: [
      "Defined AI strategy aligned with goals",
      "Data governance policies in place",
      "Standardized tools and platforms",
      "Regular AI projects in production",
      "Dedicated AI teams established"
    ]
  },
  {
    title: "Optimized",
    characteristics: [
      "Integrated AI solutions across functions",
      "Advanced analytics capabilities",
      "Continuous monitoring and optimization",
      "Strong governance framework",
      "Broad AI expertise across teams"
    ]
  },
  {
    title: "Transformational",
    characteristics: [
      "AI is core to business strategy",
      "Predictive analytics drive decisions",
      "Pioneering AI innovation",
      "Strong focus on ROI",
      "Industry-leading capabilities"
    ]
  }
];

const dimensions = [
  {
    title: "Strategy & Vision",
    icon: Target,
    elements: [
      "Alignment of AI initiatives with business strategy",
      "Defined AI goals and success metrics",
      "Executive sponsorship and support",
      "Investment strategy and resource allocation",
      "Innovation roadmap and priorities"
    ]
  },
  {
    title: "Data & Analytics",
    icon: Database,
    elements: [
      "Data quality and governance",
      "Data availability and accessibility",
      "Big data and real-time analytics",
      "Machine learning capabilities",
      "Analytics infrastructure"
    ]
  },
  {
    title: "Technology & Tools",
    icon: Layers,
    elements: [
      "Cloud readiness for AI workloads",
      "AI development platforms",
      "Integration capabilities",
      "Infrastructure scalability",
      "Development tools and frameworks"
    ]
  },
  {
    title: "Governance & Compliance",
    icon: Shield,
    elements: [
      "AI ethics policies and guidelines",
      "Regulatory compliance framework",
      "Risk management procedures",
      "Security measures and controls",
      "Audit and monitoring processes"
    ]
  },
  {
    title: "People & Culture",
    icon: Users,
    elements: [
      "AI literacy and skills development",
      "Cross-functional expertise",
      "Innovation culture",
      "Change management capabilities",
      "Continuous learning programs"
    ]
  }
];

const assessmentFeatures = [
  "Comprehensive questionnaire with 20-30 targeted questions",
  "Scoring system to identify current maturity level",
  "Detailed analysis across all dimensions",
  "Benchmarking against industry standards",
  "Personalized recommendations for improvement"
];

const assessmentAreas = [
  "Strategy alignment and vision",
  "Data governance and analytics capabilities",
  "Technology readiness and integration",
  "Risk management and compliance",
  "Workforce skills and culture"
];

const benefits = [
  {
    title: "Strategic Alignment",
    description: "Ensure AI initiatives support business objectives and deliver measurable value",
    icon: Target
  },
  {
    title: "Risk Mitigation",
    description: "Identify and address potential risks and compliance challenges early",
    icon: Shield
  },
  {
    title: "Operational Efficiency",
    description: "Enhance decision-making and operations with data-driven insights",
    icon: BarChart
  },
  {
    title: "Continuous Improvement",
    description: "Enable ongoing optimization and scalability of AI initiatives",
    icon: Brain
  }
];

export default KanzMaturityModel;