import React from 'react';
import { motion } from 'framer-motion';
import { Target, CheckCircle, Brain, Compass, BarChart, Users, ArrowRight, Layers, Workflow, Shield, Zap, LineChart, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ScalableAIStrategy = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Building a Scalable AI Strategy</h1>
            <p className="text-xl max-w-3xl mx-auto">
              From Vision to Execution: A Comprehensive Guide to Strategic AI Implementation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold mb-6">AI Strategy: Key Statistics</h2>
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

      {/* Strategic Framework */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">The Strategic AI Framework</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Five interconnected components for a comprehensive AI strategy
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {frameworkComponents.map((component, index) => (
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
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">AI Strategy Development Process</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 mb-6">
              Developing a scalable AI strategy requires a structured approach involving multiple stakeholders and careful planning:
            </p>
            <div className="space-y-6">
              {developmentSteps.map((step, index) => (
                <div key={step.title} className="border-l-4 border-pwc-orange pl-4">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-3">{step.description}</p>
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Barriers */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">Common Barriers to AI Scaling</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {barriers.map((barrier, index) => (
              <motion.div
                key={barrier.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="bg-pwc-gray p-4">
                  <div className="flex items-center">
                    <barrier.icon className="h-6 w-6 text-white mr-3" />
                    <h3 className="text-lg font-bold text-white">{barrier.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{barrier.description}</p>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-pwc-orange mb-2">Strategies to Overcome:</h4>
                    <ul className="space-y-1">
                      {barrier.strategies.map((strategy, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-pwc-orange mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{strategy}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">AI Strategy Implementation Roadmap</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-8">
              {implementationSteps.map((step, index) => (
                <div key={step.title} className="relative">
                  {index !== implementationSteps.length - 1 && (
                    <div className="absolute left-6 top-10 h-full w-0.5 bg-gray-200"></div>
                  )}
                  <div className="flex items-start">
                    <div className="bg-pwc-orange text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl z-10 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-3">{step.description}</p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-pwc-orange mb-2">Key Milestones:</h4>
                        <ul className="space-y-2">
                          {step.milestones.map((milestone, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-pwc-orange mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{milestone}</span>
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

      {/* Success Metrics */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">Measuring AI Strategy Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metricCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="bg-orange-100 rounded-full p-3 inline-block mb-4">
                  <category.icon className="h-8 w-8 text-pwc-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-pwc-orange mb-2">Key Metrics:</h4>
                  <ul className="space-y-2">
                    {category.metrics.map((metric, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-pwc-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Success Stories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">AI Strategy Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="bg-pwc-orange text-white p-4">
                  <h3 className="text-xl font-bold">{story.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{story.description}</p>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-pwc-orange">Key Approaches:</h4>
                    <ul className="space-y-2">
                      {story.approaches.map((approach, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-pwc-orange mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{approach}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-pwc-orange mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {story.results.map((result, i) => (
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
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your AI Strategy?</h2>
          <p className="text-xl mb-8">
            Contact our team of AI strategy experts to develop a comprehensive, scalable AI strategy for your organization.
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
    value: "8%",
    text: "Only 8% of companies engage in practices that enable them to scale AI effectively"
  },
  {
    icon: BarChart,
    value: "$13 trillion",
    text: "Potential additional global economic activity from AI by 2030, about 16% of cumulative GDP"
  },
  {
    icon: Target,
    value: "3-5x",
    text: "Higher ROI for organizations with a comprehensive AI strategy versus ad-hoc implementations"
  },
  {
    icon: Layers,
    value: "70%",
    text: "Of AI initiatives fail to scale beyond pilot stage due to lack of strategic alignment"
  }
];

const frameworkComponents = [
  {
    title: "Strategic Vision & Objectives",
    description: "Clear articulation of how AI will transform the organization and specific objectives aligned with business goals",
    icon: Compass,
    elements: [
      "AI vision and ambition statement",
      "Alignment with business strategy",
      "Measurable goals and success metrics",
      "Executive sponsorship and commitment",
      "Value creation focus (cost, revenue, experience, innovation)"
    ]
  },
  {
    title: "Use Case Identification",
    description: "Systematic approach to identifying and prioritizing high-value AI use cases",
    icon: Target,
    elements: [
      "Opportunity assessment methodology",
      "Value-feasibility evaluation matrix",
      "Balanced portfolio approach",
      "Dependency mapping",
      "Implementation sequencing"
    ]
  },
  {
    title: "Capability Building",
    description: "Development of necessary capabilities across technology, talent, and processes",
    icon: Layers,
    elements: [
      "Technology architecture and infrastructure",
      "Data strategy and governance",
      "AI talent acquisition and development",
      "AI governance and ethics frameworks",
      "Process development for AI lifecycle"
    ]
  },
  {
    title: "Implementation & Scaling",
    description: "Structured approach to executing AI initiatives and scaling beyond initial pilots",
    icon: Workflow,
    elements: [
      "Implementation roadmap",
      "Agile development methodology",
      "Pilot-to-production process",
      "Change management approach",
      "Results measurement framework"
    ]
  },
  {
    title: "Organizational Alignment",
    description: "Alignment of structure, culture, and incentives to support AI adoption",
    icon: Users,
    elements: [
      "Leadership engagement model",
      "Organizational structure optimization",
      "Cross-functional collaboration mechanisms",
      "Cultural transformation initiatives",
      "Incentive alignment"
    ]
  }
];

const developmentSteps = [
  {
    title: "Assess Current State and Readiness",
    description: "Evaluate your organization's current AI capabilities, initiatives, and readiness for AI adoption",
    activities: [
      "Inventory existing AI initiatives and results",
      "Assess technical infrastructure and data readiness",
      "Evaluate AI talent and skills availability",
      "Analyze organizational culture and readiness",
      "Benchmark against industry peers and competitors"
    ]
  },
  {
    title: "Define Strategic Vision and Objectives",
    description: "Establish a clear vision for how AI will transform your organization and specific objectives aligned with business goals",
    activities: [
      "Develop AI vision statement",
      "Define specific, measurable objectives",
      "Align with broader business goals",
      "Establish timeframe for objectives (3-5 years)",
      "Secure executive alignment and sponsorship"
    ]
  },
  {
    title: "Identify and Prioritize Use Cases",
    description: "Systematically identify potential AI use cases and prioritize based on business impact, feasibility, and strategic alignment",
    activities: [
      "Conduct cross-functional workshops to identify opportunities",
      "Evaluate use cases against consistent criteria",
      "Prioritize based on value, feasibility, and alignment",
      "Develop balanced portfolio of initiatives",
      "Map dependencies between use cases"
    ]
  },
  {
    title: "Develop Capability Building Plan",
    description: "Create a comprehensive plan for building the necessary capabilities to support AI initiatives",
    activities: [
      "Define technology architecture requirements",
      "Develop data strategy and governance approach",
      "Create talent acquisition and development plan",
      "Establish AI governance and ethical frameworks",
      "Design processes for AI lifecycle management"
    ]
  },
  {
    title: "Create Implementation Roadmap",
    description: "Develop a detailed roadmap for implementing the AI strategy with clear milestones and resource requirements",
    activities: [
      "Sequence use cases and capability building initiatives",
      "Define resource requirements and allocation",
      "Establish key milestones and decision points",
      "Design governance structure for implementation",
      "Create metrics and monitoring mechanisms"
    ]
  },
  {
    title: "Develop Organizational Alignment Plan",
    description: "Create a plan for aligning the organization with the AI strategy to ensure successful adoption",
    activities: [
      "Design executive engagement approach",
      "Develop organizational structure recommendations",
      "Create change management and communication plan",
      "Design training and upskilling programs",
      "Align incentives and performance management"
    ]
  }
];

const barriers = [
  {
    title: "Data Challenges",
    description: "Insufficient data quality, accessibility, and governance limiting AI effectiveness and scalability",
    icon: Database,
    strategies: [
      "Develop comprehensive data strategy addressing collection, quality, and governance",
      "Implement data quality management processes and tools",
      "Create unified data architecture to break down silos",
      "Establish clear data governance policies and processes",
      "Start with available data while building comprehensive capabilities"
    ]
  },
  {
    title: "Talent Shortages",
    description: "Lack of AI expertise and skills across technical and business roles hindering implementation",
    icon: Users,
    strategies: [
      "Develop multi-pronged talent strategy (hiring, upskilling, partnerships)",
      "Create centers of excellence to leverage scarce talent",
      "Invest in tools that democratize AI development",
      "Build partnerships with universities and research institutions",
      "Foster culture of continuous learning and experimentation"
    ]
  },
  {
    title: "Integration Complexity",
    description: "Difficulties integrating AI solutions with existing systems, processes, and workflows",
    icon: Layers,
    strategies: [
      "Develop integration architecture for AI systems",
      "Implement API-based approaches for flexible integration",
      "Adopt microservices architectures for modular deployment",
      "Establish clear standards for AI integration",
      "Involve IT and business stakeholders early in development"
    ]
  },
  {
    title: "Cultural Resistance",
    description: "Organizational resistance to AI-driven change and new ways of working",
    icon: Shield,
    strategies: [
      "Invest in change management and communication",
      "Demonstrate value through early wins and success stories",
      "Involve employees in AI solution development",
      "Address concerns about job displacement through reskilling",
      "Create incentives aligned with AI adoption"
    ]
  }
];

const implementationSteps = [
  {
    title: "Foundation Building",
    description: "Establish the fundamental capabilities and governance needed for AI implementation",
    milestones: [
      "AI governance structure established",
      "Initial data infrastructure implemented",
      "Core AI team assembled",
      "AI ethics guidelines developed",
      "Executive alignment achieved"
    ]
  },
  {
    title: "Quick Win Implementation",
    description: "Implement high-value, low-complexity use cases to demonstrate value and build momentum",
    milestones: [
      "3-5 quick win use cases identified",
      "Pilot implementations completed",
      "Initial value demonstrated and measured",
      "Learnings documented and shared",
      "Stakeholder buy-in strengthened"
    ]
  },
  {
    title: "Capability Scaling",
    description: "Expand AI capabilities across the organization and develop reusable assets",
    milestones: [
      "AI platform capabilities enhanced",
      "Data infrastructure scaled",
      "AI talent pool expanded",
      "Reusable AI components developed",
      "Cross-functional collaboration mechanisms established"
    ]
  },
  {
    title: "Enterprise Adoption",
    description: "Drive widespread adoption of AI across the organization and integrate into core processes",
    milestones: [
      "AI integrated into core business processes",
      "Self-service AI capabilities implemented",
      "Organization-wide AI literacy achieved",
      "AI governance fully operationalized",
      "Continuous improvement mechanisms established"
    ]
  }
];

const metricCategories = [
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
    icon: Zap,
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
  }
];

const successStories = [
  {
    title: "Global Financial Institution",
    description: "A global bank developed a comprehensive AI strategy focused on customer experience, risk management, and operational efficiency.",
    approaches: [
      "Centralized AI center of excellence with federated implementation",
      "Common data platform for cross-organizational access",
      "Structured process for moving from pilot to production",
      "Executive-sponsored AI governance framework",
      "Balanced portfolio of quick wins and strategic initiatives"
    ],
    results: [
      "200+ AI use cases implemented in three years",
      "$500M annual value generated",
      "30% improvement in customer satisfaction",
      "40% reduction in risk-related losses",
      "25% increase in operational efficiency"
    ]
  },
  {
    title: "Manufacturing Company",
    description: "A global manufacturer developed an AI strategy focused on predictive maintenance, quality control, and supply chain optimization.",
    approaches: [
      "Clear vision of the 'AI-enabled factory' guiding initiatives",
      "Phased approach starting with high-value, low-complexity use cases",
      "Significant investment in IoT infrastructure and data collection",
      "Strategic technology partnerships to accelerate implementation",
      "Cross-functional teams combining OT and IT expertise"
    ],
    results: [
      "30% reduction in maintenance costs",
      "25% improvement in product quality",
      "15% reduction in inventory costs",
      "20% increase in equipment effectiveness",
      "35% faster time-to-market for new products"
    ]
  },
  {
    title: "Retail Organization",
    description: "A retail organization developed an AI strategy focused on personalization, inventory optimization, and customer service.",
    approaches: [
      "Customer-centric vision guiding all AI initiatives",
      "Unified customer data platform integrating online and offline data",
      "Test-and-learn approach with rapid iteration",
      "Significant investment in employee upskilling",
      "AI-powered decision support for merchandising and operations"
    ],
    results: [
      "20% increase in online conversion rates",
      "15% reduction in inventory costs",
      "30% improvement in customer satisfaction",
      "25% increase in employee productivity",
      "18% growth in average transaction value"
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
    title: "Enterprise AI Maturity Model",
    description: "A structured model to assess your organization's AI maturity and build a roadmap for advancing capabilities.",
    link: "/insights/ai-maturity-model"
  },
  {
    title: "The Economics of AI",
    description: "Frameworks and methodologies for calculating AI return on investment and justifying AI expenditures.",
    link: "/insights/economics-of-ai"
  }
];

export default ScalableAIStrategy;