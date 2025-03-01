import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Users, FileText, BarChart, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AIStrategy = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Strategy & Consulting</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Develop a comprehensive AI roadmap aligned with your business objectives to drive innovation and growth
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
              <h2 className="text-3xl font-bold mb-6">Strategic AI Planning for Business Success</h2>
              <p className="text-lg text-gray-600 mb-6">
                In today's rapidly evolving technological landscape, organizations need a clear and actionable AI strategy to remain competitive. Our AI Strategy & Consulting services help you navigate the complex world of artificial intelligence, ensuring your investments deliver maximum value.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We work closely with your leadership team to understand your business objectives, assess your current capabilities, and develop a tailored AI roadmap that aligns with your strategic goals. Our approach is pragmatic, focusing on high-impact use cases that deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link to="/ai-readiness">
                  <Button className="w-full sm:w-auto">
                    AI Readiness Assessment
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Schedule a Consultation
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
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800"
                alt="AI Strategy Planning"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Components */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Components of Our AI Strategy</h2>
            <p className="text-xl text-gray-600">A comprehensive approach to AI transformation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyComponents.map((component, index) => (
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
                <ul className="space-y-2">
                  {component.points.map((point, i) => (
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

      {/* Our Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our AI Strategy Process</h2>
            <p className="text-xl text-gray-600">A proven methodology for AI success</p>
          </div>
          <div className="relative">
            {/* Process Steps */}
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

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real-world impact of our AI strategy services</p>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Develop Your AI Strategy?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact our team of AI strategy experts to start your journey toward AI-driven transformation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg">
                Contact Us
              </Button>
            </Link>
            <Link to="/ai-readiness">
              <Button variant="outline" size="lg">
                Take AI Readiness Assessment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const keyComponents = [
  {
    title: "AI Readiness Assessment",
    description: "Evaluate your organization's current capabilities and readiness for AI adoption",
    icon: Brain,
    points: [
      "Technical infrastructure evaluation",
      "Data maturity assessment",
      "Skills and talent gap analysis",
      "Organizational culture assessment"
    ]
  },
  {
    title: "Strategic Roadmap Development",
    description: "Create a comprehensive plan for AI implementation aligned with business goals",
    icon: FileText,
    points: [
      "Business objective alignment",
      "Use case prioritization",
      "Resource allocation planning",
      "Timeline and milestone definition"
    ]
  },
  {
    title: "Implementation Planning",
    description: "Detailed planning for successful AI solution deployment",
    icon: Target,
    points: [
      "Technology selection guidance",
      "Integration strategy",
      "Change management planning",
      "Risk mitigation strategies"
    ]
  },
  {
    title: "ROI Analysis",
    description: "Quantify the potential business impact of AI investments",
    icon: BarChart,
    points: [
      "Cost-benefit analysis",
      "Expected ROI calculation",
      "Performance metrics definition",
      "Value realization tracking"
    ]
  },
  {
    title: "Talent Strategy",
    description: "Develop a plan for building AI capabilities within your organization",
    icon: Users,
    points: [
      "Skills assessment",
      "Training program development",
      "Recruitment strategy",
      "Organizational structure optimization"
    ]
  }
];

const processSteps = [
  {
    title: "Discovery & Assessment",
    description: "We begin by understanding your business objectives, current capabilities, and challenges. Our comprehensive assessment identifies your AI readiness and potential opportunities."
  },
  {
    title: "Strategy Development",
    description: "Based on the assessment, we develop a tailored AI strategy that aligns with your business goals, prioritizing high-impact use cases and defining clear success metrics."
  },
  {
    title: "Roadmap Creation",
    description: "We create a detailed implementation roadmap with timelines, resource requirements, and key milestones to guide your AI transformation journey."
  },
  {
    title: "Implementation Planning",
    description: "Our team develops detailed plans for each prioritized initiative, including technology selection, integration approach, and change management strategies."
  },
  {
    title: "Execution Support",
    description: "We provide ongoing guidance and support during implementation, ensuring your AI initiatives stay on track and deliver expected outcomes."
  },
  {
    title: "Measurement & Optimization",
    description: "We help you measure the impact of your AI initiatives and continuously optimize your approach based on results and emerging opportunities."
  }
];

const caseStudies = [
  {
    title: "Global Financial Institution",
    description: "Developed an enterprise-wide AI strategy for a leading financial institution, focusing on customer experience and operational efficiency",
    result: "40% reduction in processing time and $25M annual savings",
    image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=800"
  },
  {
    title: "Manufacturing Conglomerate",
    description: "Created a comprehensive AI roadmap for a manufacturing company, prioritizing predictive maintenance and quality control",
    result: "35% decrease in downtime and 28% quality improvement",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800"
  }
];

export default AIStrategy;