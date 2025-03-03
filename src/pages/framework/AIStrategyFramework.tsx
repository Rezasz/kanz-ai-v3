import React from 'react';
import { motion } from 'framer-motion';
import { Target, CheckCircle, Brain, Compass, BarChart, Users, Layers, Workflow, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AIStrategyFramework = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Strategy Framework</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Develop a comprehensive AI strategy aligned with your business objectives
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold mb-4">Introduction to AI Strategy</h2>
            <p className="text-gray-700 mb-6">
              A clear and comprehensive AI strategy is essential for organizations seeking to harness the transformative potential of artificial intelligence. Our AI Strategy Framework provides a structured approach to developing a strategy that aligns AI initiatives with business objectives and ensures sustainable value creation.
            </p>
            <p className="text-gray-700 mb-6">
              By addressing key components of AI strategy, organizations can prioritize investments, build necessary capabilities, and create a roadmap for successful AI implementation. Our framework is based on extensive experience helping organizations across industries develop and execute effective AI strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link to="/services/ai-strategy">
                <Button className="w-full sm:w-auto">
                  Explore AI Strategy Services
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

      {/* Vision & Goals */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Vision & Goals</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Business Alignment</h3>
                <ul className="space-y-2">
                  {businessAlignment.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-pwc-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Long-term Vision</h3>
                <ul className="space-y-2">
                  {longTermVision.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-pwc-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Executive Sponsorship</h3>
                <ul className="space-y-2">
                  {executiveSponsorship.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-pwc-orange mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Components */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Components of AI Strategy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our framework addresses five critical components of a comprehensive AI strategy
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategyComponents.map((component, index) => (
              <motion.div
                key={component.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="bg-orange-100 rounded-full p-3 inline-block mb-4">
                  <component.icon className="h-8 w-8 text-pwc-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{component.title}</h3>
                <p className="text-gray-600 mb-4">{component.description}</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-pwc-orange mb-2">Key Elements:</h4>
                  <ul className="space-y-2">
                    {component.elements.map((element, i) => (
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

      {/* Strategy Development Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">AI Strategy Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured approach to developing a comprehensive AI strategy
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gray-200 transform -translate-x-1/2"></div>
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative mb-12 md:mb-24 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}
              >
                <div className={`md:flex items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}>
                  <div className="md:w-1/2 p-4">
                    <div className={`flex items-center ${
                      index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                    }`}>
                      <div className="hidden md:flex items-center justify-center">
                        <div className="bg-pwc-orange text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl z-10">
                          {index + 1}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-4">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <div className="md:hidden bg-pwc-orange text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">AI Strategy Implementation Roadmap</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A phased approach to executing your AI strategy
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {implementationPhases.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="bg-orange-100 rounded-full p-3 inline-block mb-4">
                  <span className="text-xl font-bold text-pwc-orange">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                <p className="text-gray-600 mb-4">{phase.description}</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-pwc-orange mb-2">Key Activities:</h4>
                  <ul className="space-y-2">
                    {phase.activities.map((activity, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-pwc-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Measuring AI Strategy Success</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key metrics for evaluating the effectiveness of your AI strategy
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successMetrics.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-3 mr-4 flex-shrink-0">
                    <category.icon className="h-6 w-6 text-pwc-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-pwc-orange mb-2">Example Metrics:</h4>
                      <ul className="space-y-2">
                        {category.metrics.map((metric, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-pwc-orange mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{metric}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Develop Your AI Strategy?</h2>
          <p className="text-xl mb-8">
            Contact our team of AI strategy experts to start your journey toward a comprehensive, effective AI strategy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-white text-pwc-gray hover:bg-gray-100 w-full sm:w-auto">
                Schedule a Consultation
              </Button>
            </Link>
            <Link to="/services/ai-strategy">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                Explore AI Strategy Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const strategyComponents = [
  {
    title: "Vision & Goals",
    description: "Clear articulation of how AI will transform your organization and specific objectives aligned with business strategy",
    icon: Compass,
    elements: [
      "AI vision statement",
      "Strategic alignment with business objectives",
      "Specific, measurable goals",
      "Value creation focus",
      "Executive sponsorship"
    ]
  },
  {
    title: "Use Case Identification",
    description: "Systematic approach to identifying and prioritizing high-value AI use cases",
    icon: Target,
    elements: [
      "Opportunity assessment methodology",
      "Value-feasibility evaluation",
      "Balanced portfolio approach",
      "Dependency mapping",
      "Implementation sequencing"
    ]
  },
  {
    title: "Technology Stack",
    description: "Selection of appropriate technologies, platforms, and tools to support AI initiatives",
    icon: Layers,
    elements: [
      "Data infrastructure requirements",
      "AI development platforms",
      "Integration architecture",
      "Deployment environments",
      "Security and compliance considerations"
    ]
  },
  {
    title: "ROI & Metrics",
    description: "Framework for measuring the business impact and return on investment of AI initiatives",
    icon: BarChart,
    elements: [
      "Value measurement methodology",
      "Key performance indicators",
      "Cost-benefit analysis",
      "Risk assessment",
      "Continuous evaluation mechanisms"
    ]
  },
  {
    title: "Implementation Roadmap",
    description: "Phased approach to executing the AI strategy with clear milestones and resource requirements",
    icon: Workflow,
    elements: [
      "Capability building plan",
      "Resource allocation",
      "Timeline and milestones",
      "Governance structure",
      "Change management approach"
    ]
  }
];

const processSteps = [
  {
    title: "Current State Assessment",
    description: "Evaluate your organization's current AI capabilities, initiatives, and readiness to identify strengths and gaps."
  },
  {
    title: "Business Alignment",
    description: "Ensure AI strategy aligns with business objectives by engaging stakeholders and understanding strategic priorities."
  },
  {
    title: "Opportunity Identification",
    description: "Identify potential AI use cases through workshops, interviews, and analysis of business processes and challenges."
  },
  {
    title: "Prioritization & Selection",
    description: "Evaluate and prioritize AI opportunities based on business impact, feasibility, and strategic alignment."
  },
  {
    title: "Capability Assessment",
    description: "Identify capability gaps and develop plans for building necessary data, technology, and talent capabilities."
  },
  {
    title: "Roadmap Development",
    description: "Create a comprehensive implementation roadmap with timelines, resource requirements, and key milestones."
  }
];

const implementationPhases = [
  {
    title: "Foundation Building",
    description: "Establish the fundamental capabilities needed for AI implementation",
    activities: [
      "Develop data strategy and governance",
      "Build initial AI infrastructure",
      "Establish AI governance framework",
      "Develop AI talent strategy",
      "Create change management plan"
    ]
  },
  {
    title: "Pilot Implementation",
    description: "Test and refine AI capabilities through targeted pilot projects",
    activities: [
      "Implement high-value, low-complexity use cases",
      "Develop proof of concepts",
      "Refine implementation approach",
      "Build internal expertise",
      "Demonstrate value and build momentum"
    ]
  },
  {
    title: "Scaling & Expansion",
    description: "Scale successful pilots and expand AI capabilities across the organization",
    activities: [
      "Standardize development and deployment processes",
      "Expand AI infrastructure",
      "Implement additional use cases",
      "Enhance governance and risk management",
      "Accelerate capability building"
    ]
  },
  {
    title: "Optimization & Innovation",
    description: "Continuously improve AI capabilities and explore new opportunities",
    activities: [
      "Optimize existing AI solutions",
      "Explore advanced AI applications",
      "Foster innovation culture",
      "Expand ecosystem partnerships",
      "Evolve AI strategy based on learnings"
    ]
  }
];

const successMetrics = [
  {
    title: "Business Impact Metrics",
    description: "Measures of AI's impact on key business outcomes and financial performance",
    icon: BarChart,
    metrics: [
      "Revenue growth attributable to AI initiatives",
      "Cost reduction through AI-enabled optimization",
      "Customer satisfaction and retention improvements",
      "Operational efficiency gains",
      "Return on AI investment (ROAI)"
    ]
  },
  {
    title: "Technical Metrics",
    description: "Measures of AI technical implementation success and operational performance",
    icon: Brain,
    metrics: [
      "Number of AI models in production",
      "Model performance and accuracy",
      "Time to deploy models from development to production",
      "Reuse of AI components across initiatives",
      "Technical debt in AI systems"
    ]
  },
  {
    title: "Organizational Metrics",
    description: "Measures of organizational adoption, capability development, and cultural change",
    icon: Users,
    metrics: [
      "AI literacy across the organization",
      "Adoption of AI tools and solutions",
      "Collaboration between business and technical teams",
      "Employee satisfaction with AI initiatives",
      "Cultural shift toward data-driven decision making"
    ]
  },
  {
    title: "Risk & Governance Metrics",
    description: "Measures of AI risk management, compliance, and responsible use",
    icon: Shield,
    metrics: [
      "Compliance with AI regulations and standards",
      "Bias and fairness metrics",
      "Security and privacy incidents",
      "Model explainability and transparency",
      "Ethical AI use and stakeholder trust"
    ]
  }
];

const businessAlignment = [
  "Define how AI will support business objectives",
  "Establish key performance indicators (KPIs) for AI projects",
  "Align AI initiatives with strategic goals",
  "Create value measurement frameworks",
  "Develop success metrics"
];

const longTermVision = [
  "Set a 3-5 year AI vision aligned with digital transformation goals",
  "Focus on scalability and future AI trends",
  "Plan for emerging technologies",
  "Consider industry evolution",
  "Build sustainable capabilities"
];

const executiveSponsorship = [
  "Ensure C-level support for AI initiatives",
  "Appoint AI champions or a Chief AI Officer (CAIO)",
  "Establish governance structure",
  "Secure resource commitments",
  "Drive organizational alignment"
];

export default AIStrategyFramework;