import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, CheckCircle, Brain, Target, Database, Users, ArrowRight, Layers, Cpu, Workflow, Shield, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const EnterpriseAIMaturityModel = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Enterprise AI Maturity Model</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Assessing and Advancing AI Capabilities Across Your Organization
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold mb-6">AI Maturity: Key Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {keyStats.map((stat, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-2 mr-3 flex-shrink-0">
                    <stat.icon className="h-5 w-5 text-pwc-orange" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{stat.value}</p>
                    <p className="text-gray-700">{stat.text}</p>
                  </div>
                </div>
              ))}
            </div>
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

      {/* Maturity Dimensions */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">The Six Dimensions of AI Maturity</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key areas that collectively determine an organization's AI maturity
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {maturityDimensions.map((dimension, index) => (
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
                <p className="text-gray-600 mb-4">{dimension.description}</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-pwc-orange mb-2">Key Elements:</h4>
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

      {/* Maturity Levels */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">The Five Levels of AI Maturity</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-6">
              {maturityLevels.map((level, index) => (
                <div key={level.title} className="border-l-4 border-pwc-orange pl-4">
                  <h3 className="text-xl font-semibold mb-2">{level.title}</h3>
                  <p className="text-gray-600 mb-3">{level.description}</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-pwc-orange mb-2">Characteristics:</h4>
                    <ul className="space-y-2">
                      {level.characteristics.map((characteristic, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-pwc-orange mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{characteristic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Process */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">AI Maturity Assessment Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {assessmentSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="bg-orange-100 rounded-full p-3 inline-block mb-4">
                  <step.icon className="h-8 w-8 text-pwc-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-pwc-orange mb-2">Key Activities:</h4>
                  <ul className="space-y-2">
                    {step.activities.map((activity, i) => (
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

      {/* Advancement Strategies */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Strategies for Advancing AI Maturity</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-8">
              {advancementStrategies.map((strategy, index) => (
                <div key={strategy.title} className="relative">
                  {index !== advancementStrategies.length - 1 && (
                    <div className="absolute left-6 top-10 h-full w-0.5 bg-gray-200"></div>
                  )}
                  <div className="flex items-start">
                    <div className="bg-pwc-orange text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl z-10 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-semibold mb-2">{strategy.title}</h3>
                      <p className="text-gray-600 mb-3">{strategy.description}</p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-pwc-orange mb-2">Best Practices:</h4>
                        <ul className="space-y-2">
                          {strategy.practices.map((practice, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-pwc-orange mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{practice}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Case Studies */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">AI Maturity Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="bg-pwc-orange text-white p-4">
                  <h3 className="text-xl font-bold">{study.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-pwc-orange">Key Initiatives:</h4>
                    <ul className="space-y-2">
                      {study.initiatives.map((initiative, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-pwc-orange mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{initiative}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-pwc-orange mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-start">
                            <LineChart className="h-5 w-5 text-pwc-orange mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{result}</span>
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
      <section className="py-12 bg-pwc-gray text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Advance Your AI Maturity?</h2>
          <p className="text-xl mb-8">
            Contact our team of AI experts to assess your organization's AI maturity and develop a roadmap for advancement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-white text-pwc-gray hover:bg-gray-100 w-full sm:w-auto">
                Schedule a Consultation
              </Button>
            </Link>
            <Link to="/ai-readiness">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                Take AI Readiness Assessment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <Link to={resource.link} className="text-pwc-orange hover:text-[#b33f02] font-medium flex items-center">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
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

const keyStats = [
  {
    icon: Brain,
    value: "15%",
    text: "Of organizations have reached advanced levels of AI maturity with enterprise-wide deployment"
  },
  {
    icon: BarChart,
    value: "2.5x",
    text: "Higher business value achieved by organizations at higher AI maturity levels"
  },
  {
    icon: Target,
    value: "60%",
    text: "Of organizations cite lack of clear maturity metrics as a barrier to AI advancement"
  },
  {
    icon: Layers,
    value: "18-24 months",
    text: "Average time to advance one maturity level with focused effort and investment"
  }
];

const maturityDimensions = [
  {
    title: "Strategy & Leadership",
    description: "Vision, strategy, and leadership commitment for AI initiatives",
    icon: Target,
    elements: [
      "AI vision and strategy",
      "Executive sponsorship",
      "Strategic alignment",
      "Investment approach",
      "Performance measurement"
    ]
  },
  {
    title: "Data & Infrastructure",
    description: "Data assets, quality, and technical infrastructure for AI",
    icon: Database,
    elements: [
      "Data availability and quality",
      "Data governance",
      "Computing infrastructure",
      "AI platforms and tools",
      "MLOps capabilities"
    ]
  },
  {
    title: "Talent & Culture",
    description: "AI expertise, skills development, and organizational culture",
    icon: Users,
    elements: [
      "AI expertise and talent",
      "Skills development",
      "Organizational structure",
      "Cultural readiness",
      "Change management"
    ]
  },
  {
    title: "Process & Governance",
    description: "Processes for AI development, deployment, and management",
    icon: Workflow,
    elements: [
      "Development lifecycle",
      "Governance framework",
      "Risk management",
      "Ethical guidelines",
      "Quality assurance"
    ]
  },
  {
    title: "Use Case Portfolio",
    description: "AI applications and their strategic alignment and impact",
    icon: Layers,
    elements: [
      "Use case identification",
      "Portfolio management",
      "Value realization",
      "Scaling mechanisms",
      "Innovation pipeline"
    ]
  },
  {
    title: "Ecosystem & Partnerships",
    description: "External relationships and collaborations for AI capabilities",
    icon: Shield,
    elements: [
      "Partner relationships",
      "Academic collaboration",
      "Industry participation",
      "Open innovation",
      "Knowledge sharing"
    ]
  }
];

const maturityLevels = [
  {
    title: "Level 1: Initial",
    description: "AI initiatives are ad hoc, experimental, and isolated",
    characteristics: [
      "Limited awareness of AI potential",
      "No formal strategy or governance",
      "Isolated experiments or proof-of-concepts",
      "Fragmented data and infrastructure",
      "Few, if any, AI specialists"
    ]
  },
  {
    title: "Level 2: Developing",
    description: "Organization is building basic AI capabilities with some strategic direction",
    characteristics: [
      "Growing awareness and interest",
      "Basic AI strategy",
      "Initial investments in data and infrastructure",
      "Small AI teams",
      "Several successful pilots"
    ]
  },
  {
    title: "Level 3: Defined",
    description: "Clear strategies, processes, and governance for AI initiatives",
    characteristics: [
      "Comprehensive AI strategy",
      "Structured data governance",
      "Dedicated AI teams",
      "Defined processes",
      "Multiple production applications"
    ]
  },
  {
    title: "Level 4: Managed",
    description: "AI is well-integrated with robust processes for scaling and optimization",
    characteristics: [
      "Integrated AI strategy",
      "Advanced capabilities",
      "Broad AI expertise",
      "Mature processes",
      "Numerous scaled applications"
    ]
  },
  {
    title: "Level 5: Optimized",
    description: "AI is a core driver of strategy with continuous innovation",
    characteristics: [
      "AI-driven strategy",
      "State-of-the-art capabilities",
      "Organization-wide expertise",
      "Automated processes",
      "Transformative applications"
    ]
  }
];

const assessmentSteps = [
  {
    title: "Preparation",
    description: "Set up the assessment framework and engage stakeholders",
    icon: Target,
    activities: [
      "Define assessment scope and objectives",
      "Identify key stakeholders",
      "Gather relevant documentation",
      "Select assessment team",
      "Create assessment timeline"
    ]
  },
  {
    title: "Data Collection",
    description: "Gather information across all maturity dimensions",
    icon: Database,
    activities: [
      "Conduct stakeholder interviews",
      "Review documentation and artifacts",
      "Analyze technical infrastructure",
      "Assess current AI initiatives",
      "Evaluate governance frameworks"
    ]
  },
  {
    title: "Analysis",
    description: "Evaluate collected data and determine maturity levels",
    icon: BarChart,
    activities: [
      "Score each dimension",
      "Identify strengths and gaps",
      "Compare with benchmarks",
      "Validate findings",
      "Document insights"
    ]
  },
  {
    title: "Roadmap Development",
    description: "Create plan for advancing maturity levels",
    icon: Layers,
    activities: [
      "Set target maturity levels",
      "Identify key initiatives",
      "Prioritize actions",
      "Define resource requirements",
      "Create implementation timeline"
    ]
  },
  {
    title: "Implementation",
    description: "Execute the maturity advancement roadmap",
    icon: Workflow,
    activities: [
      "Launch priority initiatives",
      "Monitor progress",
      "Adjust plans as needed",
      "Track outcomes",
      "Communicate results"
    ]
  }
];

const advancementStrategies = [
  {
    title: "Strategy & Leadership",
    description: "Enhance strategic alignment and leadership commitment",
    practices: [
      "Develop comprehensive AI strategy",
      "Secure executive sponsorship",
      "Establish clear metrics",
      "Create balanced portfolio",
      "Integrate AI in planning"
    ]
  },
  {
    title: "Data & Infrastructure",
    description: "Build robust data foundation and technical capabilities",
    practices: [
      "Implement data governance",
      "Invest in scalable infrastructure",
      "Develop unified architecture",
      "Implement MLOps",
      "Automate pipelines"
    ]
  },
  {
    title: "Talent & Culture",
    description: "Develop AI capabilities and foster supportive culture",
    practices: [
      "Build balanced AI teams",
      "Create training programs",
      "Establish career paths",
      "Foster experimentation",
      "Enable collaboration"
    ]
  },
  {
    title: "Process & Governance",
    description: "Establish effective processes and controls",
    practices: [
      "Standardize development processes",
      "Implement governance framework",
      "Establish ethical guidelines",
      "Create risk management",
      "Enable continuous improvement"
    ]
  }
];

const caseStudies = [
  {
    title: "Global Financial Institution",
    description: "A global bank advanced from Level 2 to Level 4 maturity over three years through a comprehensive program.",
    initiatives: [
      "Enterprise-wide AI strategy with clear objectives",
      "Unified data platform integration",
      "AI Center of Excellence establishment",
      "Robust governance framework implementation",
      "Balanced AI use case portfolio"
    ],
    results: [
      "100+ AI applications deployed",
      "$300M annual value generated",
      "40% improvement in model development efficiency",
      "25% reduction in operational costs",
      "Significant competitive advantage gained"
    ]
  },
  {
    title: "Manufacturing Company",
    description: "A manufacturer progressed from Level 1 to Level 3 maturity in two years through focused capability building.",
    initiatives: [
      "AI strategy for predictive maintenance",
      "IoT platform implementation",
      "Cross-functional AI team development",
      "Standardized AI processes",
      "Strategic technology partnerships"
    ],
    results: [
      "25% reduction in maintenance costs",
      "15% improvement in quality",
      "20% reduction in inventory",
      "35% increase in equipment efficiency",
      "Successful digital transformation"
    ]
  },
  {
    title: "Healthcare Provider",
    description: "A healthcare organization advanced from Level 2 to Level 4 maturity in three years through strategic initiatives.",
    initiatives: [
      "AI integration in digital health strategy",
      "Secure data platform development",
      "Specialized AI teams formation",
      "Clinical AI governance implementation",
      "Balanced AI application portfolio"
    ],
    results: [
      "30% improvement in patient outcomes",
      "40% reduction in administrative costs",
      "25% increase in operational efficiency",
      "Successful regulatory compliance",
      "Industry leadership in AI adoption"
    ]
  }
];

const relatedResources = [
  {
    title: "AI Readiness Framework",
    description: "Assess your organization's readiness for AI adoption across key dimensions.",
    link: "/insights/ai-readiness-framework"
  },
  {
    title: "Building a Scalable AI Strategy",
    description: "Learn how to develop and execute an AI strategy that aligns with business goals and scales effectively.",
    link: "/insights/scalable-ai-strategy"
  },
  {
    title: "Operationalizing AI",
    description: "Learn how to bridge the gap between AI proof-of-concepts and enterprise-wide adoption.",
    link: "/insights/operationalizing-ai"
  }
];

export default EnterpriseAIMaturityModel;