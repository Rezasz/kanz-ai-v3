import React from 'react';
import { motion } from 'framer-motion';
import { Brain, CheckCircle, Target, Database, Users, Server, FileText, ArrowRight, Layers, Shield, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AIReadinessFramework = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Readiness Framework</h1>
            <p className="text-xl max-w-3xl mx-auto">
              A Step-by-Step Guide for Enterprises to Assess and Enhance AI Readiness
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold mb-6">AI Readiness: Key Statistics</h2>
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

      {/* Readiness Dimensions */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">The Four Dimensions of AI Readiness</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Critical areas that determine an organization's ability to implement AI successfully
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {readinessDimensions.map((dimension, index) => (
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
                  <h4 className="font-medium text-pwc-orange mb-2">Key Components:</h4>
                  <ul className="space-y-2">
                    {dimension.components.map((component, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-pwc-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{component}</span>
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
          <h2 className="text-3xl font-bold mb-6 text-center">AI Readiness Maturity Levels</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 mb-6">
              Organizations progress through different levels of AI readiness as they develop their capabilities:
            </p>
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
          <h2 className="text-3xl font-bold mb-10 text-center">The AI Readiness Assessment Process</h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gray-200 transform -translate-x-1/2"></div>
            {assessmentSteps.map((step, index) => (
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

      {/* Common Readiness Gaps */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Common AI Readiness Gaps</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 mb-6">
              Organizations frequently encounter these gaps when preparing for AI implementation:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {readinessGaps.map((gap, index) => (
                <div key={gap.title} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start mb-3">
                    <div className="bg-orange-100 rounded-full p-2 mr-3 flex-shrink-0">
                      <gap.icon className="h-5 w-5 text-pwc-orange" />
                    </div>
                    <h3 className="font-semibold">{gap.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{gap.description}</p>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="text-sm font-medium text-pwc-orange mb-2">Remediation Strategies:</h4>
                    <ul className="space-y-1">
                      {gap.strategies.map((strategy, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-pwc-orange mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-xs">{strategy}</span>
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

      {/* Readiness Roadmap */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">AI Readiness Enhancement Roadmap</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-8">
              {roadmapSteps.map((step, index) => (
                <div key={step.title} className="relative">
                  {index !== roadmapSteps.length - 1 && (
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Factors */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Critical Success Factors</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {successFactors.map((factor, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-2 mr-3 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-pwc-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{factor.title}</h3>
                    <p className="text-gray-600 text-sm">{factor.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-pwc-gray text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Assess Your AI Readiness?</h2>
          <p className="text-xl mb-8">
            Take our comprehensive AI Readiness Assessment to identify gaps and opportunities in your organization's AI capabilities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/ai-readiness">
              <Button className="bg-white text-pwc-gray hover:bg-gray-100 w-full sm:w-auto">
                Take AI Readiness Assessment
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
    value: "85%",
    text: "Of AI projects fail to deliver on their promises due to insufficient organizational readiness"
  },
  {
    icon: Target,
    value: "3.5x",
    text: "Higher ROI for AI initiatives in organizations with high AI readiness scores"
  },
  {
    icon: Database,
    value: "67%",
    text: "Of organizations cite data quality and accessibility as their biggest AI readiness challenge"
  },
  {
    icon: Users,
    value: "78%",
    text: "Of successful AI implementations involve cross-functional teams and executive sponsorship"
  }
];

const readinessDimensions = [
  {
    title: "Technology Readiness",
    description: "Assessment of infrastructure, tools, and platforms to support AI development and deployment",
    icon: Server,
    components: [
      "Computing infrastructure",
      "AI development platforms",
      "Integration capabilities",
      "Security infrastructure",
      "DevOps and MLOps capabilities"
    ]
  },
  {
    title: "Data Readiness",
    description: "Evaluation of data assets, quality, and management practices to support AI development",
    icon: Database,
    components: [
      "Data availability and accessibility",
      "Data quality and completeness",
      "Data governance and management",
      "Data privacy and compliance",
      "Data integration capabilities"
    ]
  },
  {
    title: "People Readiness",
    description: "Assessment of talent, skills, and culture to support AI initiatives",
    icon: Users,
    components: [
      "AI literacy across the organization",
      "Technical expertise (data scientists, ML engineers)",
      "Domain expertise and business understanding",
      "Leadership commitment and understanding",
      "Cultural readiness for AI-driven change"
    ]
  },
  {
    title: "Process Readiness",
    description: "Evaluation of governance, workflows, and methodologies to manage AI initiatives effectively",
    icon: Workflow,
    components: [
      "AI governance frameworks",
      "Project management methodologies",
      "Ethical AI guidelines",
      "Risk management procedures",
      "Change management capabilities"
    ]
  }
];

const maturityLevels = [
  {
    title: "Level 1: Initial",
    description: "Organization has limited awareness of AI potential and requirements with ad hoc, experimental approaches",
    characteristics: [
      "Limited awareness of AI potential and requirements",
      "No formal AI strategy or governance",
      "Isolated experiments or proof-of-concepts",
      "Fragmented data and infrastructure",
      "Few, if any, AI specialists"
    ]
  },
  {
    title: "Level 2: Developing",
    description: "Organization is building basic AI capabilities with some strategic direction but limited coordination",
    characteristics: [
      "Growing awareness and interest in AI",
      "Basic AI strategy with limited scope",
      "Initial investments in data and infrastructure",
      "Small teams of AI specialists",
      "Several successful AI pilots"
    ]
  },
  {
    title: "Level 3: Defined",
    description: "Organization has established clear strategies, processes, and governance for AI initiatives",
    characteristics: [
      "Comprehensive AI strategy aligned with business goals",
      "Structured data governance and infrastructure",
      "Dedicated AI teams and growing expertise",
      "Defined processes and governance frameworks",
      "Multiple AI applications in production"
    ]
  },
  {
    title: "Level 4: Optimized",
    description: "AI is a core driver of the organization's strategy with continuous innovation and optimization",
    characteristics: [
      "AI as a core element of enterprise strategy",
      "State-of-the-art data and infrastructure capabilities",
      "AI expertise embedded throughout the organization",
      "Highly automated and optimized processes",
      "Transformative AI applications creating competitive advantage"
    ]
  }
];

const assessmentSteps = [
  {
    title: "Establish Assessment Scope and Objectives",
    description: "Define the scope of the assessment, including which parts of the organization will be evaluated and what specific AI use cases or initiatives are being considered."
  },
  {
    title: "Collect Data Across Dimensions",
    description: "Gather information about the current state of each readiness dimension through surveys, interviews, documentation review, and technical assessments."
  },
  {
    title: "Analyze Gaps and Strengths",
    description: "Analyze the collected data to identify gaps, strengths, and interdependencies across the four dimensions of AI readiness."
  },
  {
    title: "Develop Readiness Roadmap",
    description: "Based on the gap analysis, develop a prioritized roadmap for enhancing AI readiness with specific initiatives, timelines, and resource requirements."
  },
  {
    title: "Implement and Monitor Progress",
    description: "Implement the readiness roadmap and establish mechanisms for monitoring progress and adjusting as needed."
  }
];

const readinessGaps = [
  {
    title: "Insufficient Data Quality",
    description: "Poor data quality, accessibility, and governance limiting AI effectiveness",
    icon: Database,
    strategies: [
      "Implement data quality management processes and tools",
      "Create a data catalog and self-service access mechanisms",
      "Establish comprehensive data governance program",
      "Develop data integration and pipeline automation",
      "Invest in data cleaning and enrichment"
    ]
  },
  {
    title: "Talent Shortages",
    description: "Lack of AI expertise and skills across technical and business roles",
    icon: Users,
    strategies: [
      "Develop multi-pronged talent strategy (hiring, upskilling, partnerships)",
      "Create AI centers of excellence to leverage scarce talent",
      "Implement AI education programs for different roles",
      "Build partnerships with universities and research institutions",
      "Adopt tools that democratize AI development"
    ]
  },
  {
    title: "Inadequate Infrastructure",
    description: "Insufficient or inflexible technical infrastructure for AI development and deployment",
    icon: Server,
    strategies: [
      "Invest in cloud-based AI platforms for scalability",
      "Implement containerization and orchestration",
      "Develop API-based integration architecture",
      "Establish MLOps practices and tools",
      "Create sandbox environments for experimentation"
    ]
  },
  {
    title: "Governance Challenges",
    description: "Lack of clear governance frameworks, policies, and processes for AI initiatives",
    icon: Shield,
    strategies: [
      "Establish AI governance framework with clear roles and responsibilities",
      "Develop AI-specific risk assessment and mitigation processes",
      "Create ethical AI guidelines and review processes",
      "Implement model documentation and explainability requirements",
      "Establish monitoring and audit mechanisms"
    ]
  }
];

const roadmapSteps = [
  {
    title: "Foundation Building",
    description: "Establish the fundamental capabilities needed for AI readiness",
    activities: [
      "Develop initial AI strategy and vision",
      "Establish data governance and quality baseline",
      "Build basic AI infrastructure and tools",
      "Create AI awareness and literacy programs",
      "Implement initial governance framework"
    ]
  },
  {
    title: "Capability Development",
    description: "Build specific capabilities across all readiness dimensions",
    activities: [
      "Enhance data integration and accessibility",
      "Develop AI talent through hiring and training",
      "Implement AI development and deployment processes",
      "Create AI use case identification methodology",
      "Establish cross-functional collaboration mechanisms"
    ]
  },
  {
    title: "Pilot Implementation",
    description: "Test and refine capabilities through targeted AI pilots",
    activities: [
      "Select high-value, feasible pilot use cases",
      "Implement end-to-end AI development lifecycle",
      "Measure and communicate pilot outcomes",
      "Refine processes based on pilot learnings",
      "Build momentum through quick wins"
    ]
  },
  {
    title: "Scaling and Optimization",
    description: "Scale capabilities across the organization and continuously improve",
    activities: [
      "Standardize and automate AI processes",
      "Expand AI governance across the enterprise",
      "Develop advanced data and infrastructure capabilities",
      "Create centers of excellence for knowledge sharing",
      "Implement continuous improvement mechanisms"
    ]
  }
];

const successFactors = [
  {
    title: "Executive Sponsorship",
    description: "Strong leadership commitment and support for AI initiatives at the highest levels"
  },
  {
    title: "Clear Strategic Alignment",
    description: "Direct connection between AI initiatives and core business objectives"
  },
  {
    title: "Cross-Functional Collaboration",
    description: "Effective teamwork across business, IT, data science, and other functions"
  },
  {
    title: "Balanced Portfolio Approach",
    description: "Mix of quick wins and strategic, longer-term AI initiatives"
  },
  {
    title: "Robust Data Foundation",
    description: "High-quality, accessible data with strong governance practices"
  },
  {
    title: "Continuous Learning Culture",
    description: "Organization-wide commitment to experimentation and learning"
  },
  {
    title: "Ethical AI Framework",
    description: "Clear guidelines and processes for responsible AI development and use"
  },
  {
    title: "Scalable Infrastructure",
    description: "Technical architecture that can grow and adapt as AI initiatives expand"
  }
];

const relatedResources = [
  {
    title: "Building a Scalable AI Strategy",
    description: "Learn how to develop and execute an AI strategy that aligns with business goals and scales effectively.",
    link: "/insights/scalable-ai-strategy"
  },
  {
    title: "Enterprise AI Maturity Model",
    description: "A structured model to assess your organization's AI maturity and build a roadmap for advancing capabilities.",
    link: "/insights/ai-maturity-model"
  },
  {
    title: "Data Strategy for AI Success",
    description: "Build a robust data foundation to ensure AI initiatives deliver maximum value and scale effectively.",
    link: "/insights/data-strategy-ai-success"
  }
];

export default AIReadinessFramework;