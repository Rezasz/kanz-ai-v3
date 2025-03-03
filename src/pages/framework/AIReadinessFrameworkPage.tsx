import React from 'react';
import { motion } from 'framer-motion';
import { Brain, CheckCircle, Target, Database, Users, Server, FileText, Shield, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AIReadinessFrameworkPage = () => {
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
              Preparing Your Organization for AI Success
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
              The AI Readiness Framework by Kanz.ai helps organizations assess and enhance their readiness to adopt AI technologies effectively. It focuses on key areas such as data, infrastructure, skills, and change management to ensure a smooth transition to AI-driven operations.
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

      {/* What is AI Readiness Framework */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">What is an AI Readiness Framework?</h2>
            <p className="text-gray-700 mb-6">
              An AI Readiness Framework is a structured approach that helps organizations assess their preparedness to adopt and implement Artificial Intelligence (AI) technologies effectively. It evaluates an organization's capabilities across various dimensions such as data, infrastructure, skills, governance, and change management to identify strengths, gaps, and areas that need improvement.
            </p>
            <p className="text-gray-700 mb-6">
              By using an AI Readiness Framework, businesses can create a clear roadmap to integrate AI solutions, ensuring they maximize the return on investment (ROI) while minimizing risks. This framework acts as a diagnostic tool to guide organizations from the initial planning stage to successful AI deployment and scaling.
            </p>

            <h3 className="text-xl font-bold mb-4">Key Objectives</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {objectives.map((objective, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-2 mr-3 flex-shrink-0">
                    <Target className="h-5 w-5 text-pwc-orange" />
                  </div>
                  <span className="text-gray-700">{objective}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold mb-4">Why is an AI Readiness Framework Important?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {importance.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-2 mr-3 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-pwc-orange" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold mb-4">AI Readiness Levels</h3>
            <div className="grid grid-cols-1 gap-4 mb-8">
              {readinessLevels.map((level, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pwc-orange mb-2">{level.title}</h4>
                  <p className="text-gray-700">{level.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Components */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Components</h2>
            <p className="text-xl text-gray-600">Essential elements for successful AI adoption</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {readinessComponents.map((component, index) => (
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

      {/* Assessment Tool */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">AI Readiness Assessment Tool</h2>
            <p className="text-xl text-gray-600">Identify your strengths and gaps in AI readiness</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-4">Assessment Criteria</h3>
              <div className="space-y-4">
                {assessmentCriteria.map((criterion, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-pwc-orange mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{criterion}</span>
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
              <h3 className="text-xl font-semibold mb-4">How It Works</h3>
              <div className="space-y-4">
                {assessmentProcess.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-pwc-orange mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Roadmap to AI Readiness</h2>
            <p className="text-xl text-gray-600">A phased approach to building AI capabilities</p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gray-200 transform -translate-x-1/2"></div>
            {roadmapPhases.map((phase, index) => (
              <motion.div
                key={phase.title}
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
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of the AI Readiness Framework</h2>
            <p className="text-xl text-gray-600">Key advantages of using our framework</p>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Assess Your AI Readiness?</h2>
          <p className="text-xl mb-8">
            Take our comprehensive assessment to understand your organization's readiness for AI adoption and get actionable recommendations.
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

const readinessComponents = [
  {
    title: "Data Readiness",
    description: "Ensure your data is ready for AI applications",
    icon: Database,
    elements: [
      "Data quality standards",
      "Data governance policies",
      "Integration capabilities",
      "Privacy and compliance",
      "Data accessibility"
    ]
  },
  {
    title: "Infrastructure Readiness",
    description: "Evaluate and prepare your technical infrastructure",
    icon: Server,
    elements: [
      "Cloud capabilities",
      "Computing resources",
      "Storage solutions",
      "Network infrastructure",
      "Security framework"
    ]
  },
  {
    title: "Skills Readiness",
    description: "Assess and develop necessary AI capabilities",
    icon: Users,
    elements: [
      "Technical expertise",
      "Domain knowledge",
      "Training programs",
      "Talent acquisition",
      "Skills development"
    ]
  },
  {
    title: "Change Management",
    description: "Prepare your organization for AI-driven transformation",
    icon: Workflow,
    elements: [
      "Leadership commitment",
      "Cultural readiness",
      "Communication strategy",
      "Adoption planning",
      "Stakeholder engagement"
    ]
  }
];

const assessmentCriteria = [
  "Data maturity and governance",
  "Infrastructure and security capabilities",
  "Workforce skills and training programs",
  "Change management and cultural readiness",
  "AI governance and compliance frameworks"
];

const assessmentProcess = [
  "Online questionnaire with targeted questions",
  "AI-generated readiness score",
  "Detailed analysis across all dimensions",
  "Customized recommendations",
  "Action plan development"
];

const roadmapPhases = [
  {
    title: "Assessment",
    description: "Evaluate current AI readiness across all dimensions",
    activities: [
      "Conduct AI readiness assessment",
      "Identify strengths and gaps",
      "Benchmark against industry standards",
      "Document findings",
      "Prioritize areas for improvement"
    ]
  },
  {
    title: "Strategy Development",
    description: "Create a comprehensive plan for building AI readiness",
    activities: [
      "Define readiness goals",
      "Develop action plans",
      "Allocate resources",
      "Set timelines",
      "Establish metrics"
    ]
  },
  {
    title: "Implementation",
    description: "Execute readiness-building initiatives",
    activities: [
      "Build data capabilities",
      "Enhance infrastructure",
      "Develop skills",
      "Implement governance",
      "Drive cultural change"
    ]
  },
  {
    title: "Monitoring",
    description: "Track progress and optimize initiatives",
    activities: [
      "Monitor readiness metrics",
      "Gather feedback",
      "Adjust plans",
      "Report progress",
      "Celebrate successes"
    ]
  }
];

const benefits = [
  {
    title: "Strategic Alignment",
    description: "Ensure AI initiatives support business objectives and deliver measurable value",
    icon: Target
  },
  {
    title: "Risk Mitigation",
    description: "Address potential challenges and compliance issues before they become problems",
    icon: Shield
  },
  {
    title: "Accelerated Adoption",
    description: "Speed up AI implementation by building necessary capabilities upfront",
    icon: Brain
  },
  {
    title: "Sustainable Success",
    description: "Create a foundation for long-term AI success and continuous improvement",
    icon: FileText
  }
];

const objectives = [
  "Assessment: Evaluate the current state of AI capabilities",
  "Alignment: Ensure AI initiatives align with business goals",
  "Risk Mitigation: Address potential risks and compliance challenges",
  "Roadmap Development: Define a step-by-step path to AI adoption",
  "Continuous Improvement: Establish mechanisms for ongoing optimization of AI capabilities"
];

const importance = [
  "Strategic Alignment: Ensures AI projects support business goals",
  "Risk Management: Identifies compliance and ethical risks early",
  "Resource Optimization: Helps allocate resources effectively for AI projects",
  "Faster Adoption: Reduces time-to-value by identifying and closing readiness gaps"
];

const readinessLevels = [
  {
    title: "Initial",
    description: "No formal AI strategy; ad-hoc projects with limited coordination and planning."
  },
  {
    title: "Developing",
    description: "AI pilots in progress but lack of strategic alignment and comprehensive planning."
  },
  {
    title: "Advanced",
    description: "Defined AI strategy with cross-functional alignment and systematic implementation."
  },
  {
    title: "Mature",
    description: "Integrated AI solutions with a strong focus on ROI, compliance, and continuous improvement."
  }
];

export default AIReadinessFrameworkPage;