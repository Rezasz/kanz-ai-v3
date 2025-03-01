import React from 'react';
import { motion } from 'framer-motion';
import { Cog, Target, Code, Layers, Cpu, ArrowRight, CheckCircle, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AIImplementation = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Implementation</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Expert implementation of AI solutions across your organization to drive innovation and efficiency
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
              <h2 className="text-3xl font-bold mb-6">Turning AI Strategy into Reality</h2>
              <p className="text-lg text-gray-600 mb-6">
                Developing an AI strategy is just the beginning. The real value comes from successful implementation that delivers tangible business outcomes. Our AI Implementation services bridge the gap between strategy and execution, ensuring your AI initiatives deliver measurable results.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We bring together deep technical expertise, industry knowledge, and proven methodologies to implement AI solutions that address your specific business challenges. From custom AI development to system integration and deployment, our team guides you through every step of the implementation journey.
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
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800"
                alt="AI Implementation"
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
            <h2 className="text-3xl font-bold mb-4">Our AI Implementation Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for successful AI deployment</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {implementationServices.map((service, index) => (
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

      {/* Implementation Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Implementation Process</h2>
            <p className="text-xl text-gray-600">A proven methodology for successful AI deployment</p>
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
            <p className="text-xl text-gray-600">Real-world impact of our AI implementation services</p>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Implement AI in Your Organization?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact our team of AI implementation experts to start your journey toward AI-driven transformation.
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

const implementationServices = [
  {
    title: "Custom AI Development",
    description: "Tailored AI solutions designed to address your specific business challenges",
    icon: Code,
    points: [
      "Machine learning model development",
      "Natural language processing solutions",
      "Computer vision applications",
      "Predictive analytics systems"
    ]
  },
  {
    title: "System Integration",
    description: "Seamless integration of AI solutions with your existing systems and workflows",
    icon: Layers,
    points: [
      "API development and integration",
      "Legacy system connectivity",
      "Data pipeline implementation",
      "Enterprise application integration"
    ]
  },
  {
    title: "Training & Deployment",
    description: "Comprehensive training and deployment services for successful AI adoption",
    icon: Target,
    points: [
      "Model training and validation",
      "Deployment architecture design",
      "Performance optimization",
      "Scalability planning"
    ]
  },
  {
    title: "Monitoring & Optimization",
    description: "Ongoing monitoring and optimization of AI solutions to ensure maximum value",
    icon: Cog,
    points: [
      "Performance monitoring",
      "Model retraining and updating",
      "Continuous improvement",
      "ROI tracking and reporting"
    ]
  },
  {
    title: "AI Infrastructure Setup",
    description: "Design and implementation of the infrastructure needed to support AI initiatives",
    icon: Cpu,
    points: [
      "Infrastructure assessment and planning",
      "Cloud or on-premises setup",
      "Scalable computing resources",
      "Security implementation"
    ]
  }
];

const processSteps = [
  {
    title: "Requirements Analysis",
    description: "We begin by understanding your specific business requirements, objectives, and constraints to ensure our AI solution addresses your unique challenges."
  },
  {
    title: "Solution Design",
    description: "Our team designs a tailored AI solution, selecting the appropriate technologies, algorithms, and architecture to meet your requirements."
  },
  {
    title: "Data Preparation",
    description: "We help you prepare, clean, and structure your data to ensure it's ready for AI model training and implementation."
  },
  {
    title: "Development & Training",
    description: "Our experts develop and train AI models using your data, continuously refining them to achieve optimal performance."
  },
  {
    title: "Integration & Testing",
    description: "We integrate the AI solution with your existing systems and conduct thorough testing to ensure everything works seamlessly."
  },
  {
    title: "Deployment & Monitoring",
    description: "Once tested, we deploy the solution to your production environment and implement monitoring systems to track performance."
  }
];

const caseStudies = [
  {
    title: "Predictive Maintenance System",
    description: "Implementation of an AI-powered predictive maintenance system for a manufacturing company, reducing equipment downtime and maintenance costs",
    result: "65% reduction in unplanned downtime and 40% maintenance cost savings",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800"
  },
  {
    title: "Customer Service AI",
    description: "Development and deployment of an AI-powered customer service solution for a telecommunications provider, enhancing customer experience and reducing support costs",
    result: "50% faster resolution times and 35% reduction in support costs",
    image: "https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&w=800"
  }
];

export default AIImplementation;