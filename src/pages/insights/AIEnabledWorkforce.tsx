import React from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle, Brain, Target, Lightbulb, ArrowRight, Layers, FileText, Zap, BarChart, Briefcase, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AIEnabledWorkforce = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI-Enabled Workforce</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Redefining Roles & Upskilling for the Future of Work
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold mb-6">Key Workforce Transformation Statistics</h2>
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
              <Link to="/services/digital-transformation">
                <Button className="w-full sm:w-auto">
                  Explore Digital Transformation Services
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

      {/* AI Impact on Workforce */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">How AI is Transforming the Workforce</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key ways artificial intelligence is reshaping jobs and skills
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiImpacts.map((impact, index) => (
              <motion.div
                key={impact.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="bg-orange-100 rounded-full p-3 inline-block mb-4">
                  <impact.icon className="h-8 w-8 text-pwc-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{impact.title}</h3>
                <p className="text-gray-600 mb-4">{impact.description}</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-pwc-orange mb-2">Key Implications:</h4>
                  <ul className="space-y-2">
                    {impact.implications.map((implication, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-pwc-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{implication}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emerging Job Roles */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Emerging AI-Enabled Job Roles</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 mb-6">
              As AI transforms the workplace, new roles are emerging that combine domain expertise with AI capabilities:
            </p>
            <div className="space-y-6">
              {emergingRoles.map((role, index) => (
                <div key={role.title} className="border-l-4 border-pwc-orange pl-4">
                  <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
                  <p className="text-gray-600 mb-3">{role.description}</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-pwc-orange mb-2">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {role.responsibilities.map((responsibility, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-pwc-orange mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{responsibility}</span>
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

      {/* Critical Skills Framework */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">Critical Skills for the AI-Enabled Workforce</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
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
                  <h4 className="font-medium text-pwc-orange mb-2">Key Skills:</h4>
                  <ul className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-pwc-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upskilling Framework */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Strategic Workforce Upskilling Framework</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 mb-6">
              A comprehensive approach to preparing your workforce for the AI-enabled future:
            </p>
            <div className="space-y-8">
              {upskillFramework.map((step, index) => (
                <div key={step.title} className="relative">
                  {index !== upskillFramework.length - 1 && (
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

      {/* Human-AI Collaboration Models */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">Human-AI Collaboration Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collaborationModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="bg-pwc-gray p-4">
                  <div className="flex items-center justify-center">
                    <model.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-center">{model.title}</h3>
                  <p className="text-gray-600 mb-4">{model.description}</p>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-pwc-orange mb-2 text-center">Example:</h4>
                    <p className="text-sm text-gray-700">{model.example}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Readiness */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Organizational Readiness Checklist</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 mb-6">
              Key indicators of organizational readiness for AI workforce transformation:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {readinessChecklist.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-2 mr-3 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-pwc-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.area}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">Workforce Transformation Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                            <BarChart className="h-5 w-5 text-pwc-orange mr-2 mt-0.5 flex-shrink-0" />
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

      {/* Implementation Roadmap */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">AI Workforce Transformation Roadmap</h2>
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

      {/* Quick Tips */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Quick Tips for AI Workforce Transformation</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {quickTips.map((tip, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-2 mr-3 flex-shrink-0">
                    <Zap className="h-5 w-5 text-pwc-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{tip.title}</h3>
                    <p className="text-gray-600 text-sm">{tip.description}</p>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Workforce?</h2>
          <p className="text-xl mb-8">
            Contact our team of workforce transformation experts to develop a comprehensive strategy for preparing your organization for the AI-enabled future.
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
    icon: Users,
    value: "85%",
    text: "of jobs that will exist in 2030 haven't been invented yet, according to Dell Technologies/Institute for the Future"
  },
  {
    icon: Brain,
    value: "40%",
    text: "of workers will need to reskill for at least 6 months by 2025 due to AI adoption, according to World Economic Forum"
  },
  {
    icon: BarChart,
    value: "133M",
    text: "new jobs will be created by AI and automation by 2030, while 75M jobs may be displaced, according to McKinsey"
  },
  {
    icon: Target,
    value: "54%",
    text: "of all employees will require significant reskilling and upskilling by 2022, according to World Economic Forum"
  }
];

const aiImpacts = [
  {
    title: "Task Automation",
    description: "AI is automating routine, repetitive tasks across industries, freeing humans for higher-value work.",
    icon: Zap,
    implications: [
      "Reduction in routine administrative tasks",
      "Shift toward exception handling and complex decision-making",
      "Need for oversight and quality control of AI outputs",
      "Opportunity to focus on creative and strategic activities"
    ]
  },
  {
    title: "Decision Augmentation",
    description: "AI enhances human decision-making by providing data-driven insights and recommendations.",
    icon: Brain,
    implications: [
      "Increased need for data literacy and analytical thinking",
      "Shift from intuition-based to evidence-based decision-making",
      "New skills required for interpreting AI recommendations",
      "Importance of understanding AI limitations and biases"
    ]
  },
  {
    title: "Role Evolution",
    description: "Existing roles are evolving to incorporate AI capabilities and oversight responsibilities.",
    icon: Layers,
    implications: [
      "Traditional roles incorporating AI-related responsibilities",
      "Increased emphasis on human-AI collaboration skills",
      "Need for continuous learning and adaptation",
      "Emergence of hybrid roles combining domain and technical expertise"
    ]
  }
];

const emergingRoles = [
  {
    title: "AI Translator",
    description: "Professionals who bridge the gap between technical AI teams and business stakeholders, ensuring AI solutions address business needs effectively.",
    responsibilities: [
      "Translate business problems into AI use cases",
      "Communicate AI capabilities and limitations to non-technical stakeholders",
      "Ensure AI solutions align with business objectives",
      "Facilitate collaboration between technical and business teams"
    ]
  },
  {
    title: "AI Ethics Officer",
    description: "Specialists responsible for ensuring AI systems are developed and deployed ethically, with appropriate governance and oversight.",
    responsibilities: [
      "Develop and implement AI ethics frameworks and policies",
      "Conduct ethical risk assessments for AI initiatives",
      "Monitor AI systems for bias and fairness issues",
      "Ensure compliance with emerging AI regulations"
    ]
  },
  {
    title: "Human-AI Collaboration Manager",
    description: "Experts who design and optimize workflows that combine human and AI capabilities for maximum effectiveness.",
    responsibilities: [
      "Design effective human-AI collaboration models",
      "Identify optimal task allocation between humans and AI",
      "Develop metrics for measuring collaboration effectiveness",
      "Continuously improve human-AI interaction patterns"
    ]
  },
  {
    title: "AI-Augmented Professional",
    description: "Domain experts who leverage AI tools to enhance their productivity, creativity, and decision-making in their field.",
    responsibilities: [
      "Effectively use AI tools specific to their domain",
      "Provide domain expertise for AI system training and validation",
      "Critically evaluate AI outputs and recommendations",
      "Identify new opportunities for AI application in their field"
    ]
  },
  {
    title: "Workforce Transformation Specialist",
    description: "Change management professionals focused specifically on helping organizations and employees adapt to AI-driven changes.",
    responsibilities: [
      "Assess workforce readiness for AI adoption",
      "Develop upskilling and reskilling programs",
      "Design change management strategies for AI implementation",
      "Address employee concerns about AI impact on jobs"
    ]
  }
];

const skillCategories = [
  {
    title: "Technical Skills",
    description: "Capabilities related to understanding and working with AI technologies.",
    icon: Brain,
    skills: [
      "AI literacy and awareness",
      "Data interpretation and analysis",
      "Basic programming concepts",
      "Understanding of machine learning principles",
      "AI tool proficiency"
    ]
  },
  {
    title: "Human Skills",
    description: "Uniquely human capabilities that complement and enhance AI systems.",
    icon: Users,
    skills: [
      "Critical thinking and problem-solving",
      "Creativity and innovation",
      "Emotional intelligence",
      "Ethical judgment",
      "Complex communication"
    ]
  },
  {
    title: "Business Skills",
    description: "Capabilities for applying AI in business contexts and driving value.",
    icon: Briefcase,
    skills: [
      "Strategic thinking",
      "Business acumen",
      "Change management",
      "Project management",
      "Value and impact assessment"
    ]
  },
  {
    title: "Learning Skills",
    description: "Capabilities for continuous adaptation and knowledge acquisition.",
    icon: GraduationCap,
    skills: [
      "Adaptability and flexibility",
      "Self-directed learning",
      "Knowledge transfer",
      "Pattern recognition",
      "Mental models development"
    ]
  },
  {
    title: "Collaboration Skills",
    description: "Capabilities for effective human-AI teaming and cross-functional work.",
    icon: Target,
    skills: [
      "Human-AI collaboration",
      "Cross-functional communication",
      "Virtual collaboration",
      "Knowledge sharing",
      "Collaborative problem-solving"
    ]
  },
  {
    title: "Domain Skills",
    description: "Deep expertise in specific fields that provides context for AI applications.",
    icon: Layers,
    skills: [
      "Industry-specific knowledge",
      "Functional expertise",
      "Contextual understanding",
      "Specialized terminology",
      "Domain-specific processes"
    ]
  }
];

const upskillFramework = [
  {
    title: "Skills Gap Analysis",
    description: "Identify current capabilities and future skill requirements for AI-enabled roles.",
    activities: [
      "Conduct workforce capability assessment",
      "Map future AI-enabled roles and required skills",
      "Identify critical skill gaps and prioritize development needs",
      "Create individual and team development plans",
      "Establish metrics for measuring progress"
    ]
  },
  {
    title: "Learning Ecosystem Development",
    description: "Create a comprehensive learning infrastructure to support continuous skill development.",
    activities: [
      "Develop multi-modal learning pathways (formal, social, experiential)",
      "Curate and create AI-focused learning content",
      "Implement learning technology platforms",
      "Establish partnerships with educational institutions",
      "Create knowledge sharing mechanisms"
    ]
  },
  {
    title: "Personalized Learning Journeys",
    description: "Design tailored learning experiences based on roles, skill gaps, and career aspirations.",
    activities: [
      "Create role-based learning paths",
      "Implement skill assessment and verification mechanisms",
      "Develop micro-learning and just-in-time learning resources",
      "Establish mentoring and coaching programs",
      "Enable self-directed learning opportunities"
    ]
  },
  {
    title: "Experiential Learning",
    description: "Provide hands-on opportunities to apply new skills in real-world contexts.",
    activities: [
      "Create AI sandboxes and simulation environments",
      "Implement job rotation and shadowing programs",
      "Develop cross-functional project opportunities",
      "Establish innovation labs and hackathons",
      "Create communities of practice"
    ]
  },
  {
    title: "Continuous Evaluation & Refinement",
    description: "Regularly assess program effectiveness and adapt to changing skill requirements.",
    activities: [
      "Measure skill acquisition and application",
      "Gather feedback on learning experiences",
      "Track business impact of upskilling initiatives",
      "Monitor emerging skill requirements",
      "Continuously refine learning offerings"
    ]
  }
];

const collaborationModels = [
  {
    title: "AI Assistant",
    description: "AI systems that provide information, perform tasks, or offer recommendations based on human requests.",
    icon: Brain,
    example: "Customer service representatives using AI chatbots to handle routine inquiries while focusing on complex customer issues."
  },
  {
    title: "AI Augmentation",
    description: "AI systems that enhance human capabilities by providing real-time insights, suggestions, or automation of subtasks.",
    icon: Zap,
    example: "Radiologists using AI-powered diagnostic tools that highlight potential areas of concern in medical images for human verification."
  },
  {
    title: "AI Automation",
    description: "AI systems that autonomously handle routine tasks with human oversight and exception handling.",
    icon: Layers,
    example: "Financial analysts focusing on strategy while AI systems automatically generate standard reports and flag anomalies for review."
  },
  {
    title: "AI Partnership",
    description: "Advanced collaboration where humans and AI systems work as partners, each contributing unique strengths to achieve outcomes neither could alone.",
    icon: Users,
    example: "Drug discovery teams where AI systems generate and test molecular compounds while human scientists provide guidance and evaluate results."
  }
];

const readinessChecklist = [
  {
    area: "Leadership Commitment",
    description: "Executive sponsorship and visible support for AI-enabled workforce transformation"
  },
  {
    area: "Strategic Alignment",
    description: "Clear connection between AI workforce strategy and overall business objectives"
  },
  {
    area: "Change Management",
    description: "Comprehensive approach to managing the human aspects of AI-driven change"
  },
  {
    area: "Learning Infrastructure",
    description: "Systems, platforms, and resources to support continuous learning and development"
  },
  {
    area: "Skills Framework",
    description: "Clear definition of current and future skills requirements for AI-enabled roles"
  },
  {
    area: "Career Pathways",
    description: "Defined progression routes that incorporate AI skills and capabilities"
  },
  {
    area: "Performance Management",
    description: "Updated metrics and evaluation approaches for AI-augmented work"
  },
  {
    area: "Cultural Readiness",
    description: "Organizational culture that embraces continuous learning and human-AI collaboration"
  }
];

const caseStudies = [
  {
    title: "Global Financial Institution",
    description: "A major bank implemented a comprehensive AI workforce transformation program to prepare for increased automation and AI-augmented customer service.",
    initiatives: [
      "AI literacy program for all 50,000+ employees",
      "Role-specific upskilling for customer-facing staff",
      "AI specialist career track development",
      "Human-AI collaboration pilots in customer service",
      "Digital dexterity assessment and development"
    ],
    results: [
      "30% increase in employee AI literacy scores",
      "25% improvement in customer satisfaction",
      "40% reduction in routine service inquiries",
      "15% increase in employee engagement scores",
      "Successful redeployment of 500+ employees to higher-value roles"
    ]
  },
  {
    title: "Manufacturing Company",
    description: "A global manufacturer prepared its workforce for smart factory implementation with AI-powered production and maintenance systems.",
    initiatives: [
      "Technical upskilling for production floor workers",
      "AI oversight and exception handling training",
      "Cross-functional collaboration programs",
      "Digital twin simulation training environment",
      "AI apprenticeship program"
    ],
    results: [
      "35% improvement in predictive maintenance outcomes",
      "20% increase in production efficiency",
      "90% of workforce successfully transitioned to new roles",
      "50% reduction in safety incidents",
      "Significant improvement in employee digital confidence"
    ]
  },
  {
    title: "Healthcare Provider",
    description: "A healthcare network prepared clinical and administrative staff for AI-augmented diagnostics, care planning, and operations.",
    initiatives: [
      "Clinical AI interpretation training for medical staff",
      "AI ethics and oversight program",
      "Human-AI collaboration workflows in diagnostics",
      "Administrative process redesign with AI integration",
      "Patient-facing AI communication training"
    ],
    results: [
      "28% improvement in diagnostic accuracy",
      "40% reduction in administrative workload",
      "Significant improvement in work satisfaction metrics",
      "15% increase in patient satisfaction scores",
      "Successful implementation of 12 AI clinical support tools"
    ]
  }
];

const implementationSteps = [
  {
    title: "Assessment & Strategy",
    description: "Evaluate current workforce capabilities and develop a comprehensive transformation strategy.",
    milestones: [
      "Complete workforce capability assessment",
      "Identify priority roles for transformation",
      "Develop strategic workforce transformation roadmap",
      "Secure executive sponsorship and funding",
      "Establish governance structure and metrics"
    ]
  },
  {
    title: "Pilot Implementation",
    description: "Test transformation approaches with select groups before scaling organization-wide.",
    milestones: [
      "Select pilot groups and use cases",
      "Develop and deploy initial learning interventions",
      "Implement human-AI collaboration models",
      "Gather feedback and measure outcomes",
      "Refine approach based on pilot results"
    ]
  },
  {
    title: "Scaled Deployment",
    description: "Roll out transformation initiatives across the organization with tailored approaches for different groups.",
    milestones: [
      "Develop comprehensive communication plan",
      "Deploy role-based learning journeys",
      "Implement career transition support",
      "Establish communities of practice",
      "Deploy change management interventions"
    ]
  },
  {
    title: "Sustainability & Evolution",
    description: "Ensure long-term sustainability and continuous adaptation of the workforce transformation program.",
    milestones: [
      "Integrate AI skills into talent management processes",
      "Establish continuous learning mechanisms",
      "Develop internal capability for ongoing transformation",
      "Create feedback loops for program improvement",
      "Monitor emerging skill requirements and adjust accordingly"
    ]
  }
];

const quickTips = [
  {
    title: "Focus on Augmentation, Not Replacement",
    description: "Frame AI as a tool to enhance human capabilities rather than replace jobs."
  },
  {
    title: "Start with AI Literacy for All",
    description: "Build basic AI understanding across the organization before specialized training."
  },
  {
    title: "Identify AI Champions",
    description: "Cultivate internal advocates who can demonstrate the value of AI and new ways of working."
  },
  {
    title: "Create Safe Learning Environments",
    description: "Provide low-risk opportunities to experiment with AI tools and develop new skills."
  },
  {
    title: "Balance Technical and Human Skills",
    description: "Develop both AI-related technical capabilities and uniquely human skills like creativity and empathy."
  },
  {
    title: "Personalize Learning Journeys",
    description: "Tailor upskilling approaches to different roles, learning styles, and career aspirations."
  },
  {
    title: "Measure and Celebrate Progress",
    description: "Track skill development and recognize achievements to maintain momentum and engagement."
  },
  {
    title: "Prepare Leaders First",
    description: "Ensure leaders understand AI capabilities and implications before rolling out to broader teams."
  }
];

const relatedResources = [
  {
    title: "AI Readiness Framework",
    description: "Assess your organization's readiness for AI adoption across key dimensions including workforce capabilities.",
    link: "/insights/ai-readiness-framework"
  },
  {
    title: "The Role of AI in Digital Transformation",
    description: "Explore how AI acts as a catalyst in digital transformation and drives business model innovation across industries.",
    link: "/insights/ai-digital-transformation"
  },
  {
    title: "AI in Decision Intelligence",
    description: "Discover how AI enhances strategic decision-making with data-driven insights and analytics.",
    link: "/insights/ai-decision-intelligence"
  }
];

export default AIEnabledWorkforce;