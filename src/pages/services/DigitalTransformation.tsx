import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, Zap, Cloud, Workflow, ArrowRight, CheckCircle, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const DigitalTransformation = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Transformation</h1>
            <p className="text-xl max-w-3xl mx-auto">
              End-to-end digital transformation solutions to modernize your business and drive innovation
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
              <h2 className="text-3xl font-bold mb-6">Reimagine Your Business for the Digital Age</h2>
              <p className="text-lg text-gray-600 mb-6">
                Digital transformation is no longer optional—it's imperative for businesses that want to remain competitive in today's rapidly evolving landscape. Our comprehensive digital transformation services help organizations reimagine their business models, optimize operations, and create exceptional customer experiences through technology.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We take a holistic approach to digital transformation, addressing technology, processes, and people to ensure sustainable change. Our team of experts works closely with you to develop and implement a tailored transformation strategy that delivers measurable business outcomes.
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
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800"
                alt="Digital Transformation"
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
            <h2 className="text-3xl font-bold mb-4">Our Digital Transformation Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for your digital journey</p>
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

      {/* Transformation Framework */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Digital Transformation Framework</h2>
            <p className="text-xl text-gray-600">A proven methodology for successful digital transformation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-8">
                {frameworkSteps.map((step, index) => (
                  <div key={step.title} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-pwc-orange text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative hidden md:block"
            >
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800"
                alt="Digital Transformation Framework"
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
            <p className="text-xl text-gray-600">Real-world impact of our digital transformation services</p>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Digital Transformation?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact our team of digital transformation experts to begin your journey toward a more agile, efficient, and innovative organization.
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
    title: "Process Automation",
    description: "Streamline operations and reduce manual effort through intelligent automation",
    icon: Workflow,
    points: [
      "Workflow analysis and optimization",
      "Robotic Process Automation (RPA)",
      "Intelligent document processing",
      "Business process management"
    ]
  },
  {
    title: "Legacy System Modernization",
    description: "Transform outdated systems into modern, agile applications",
    icon: Zap,
    points: [
      "Legacy system assessment",
      "Modernization strategy development",
      "Application refactoring",
      "Microservices architecture implementation"
    ]
  },
  {
    title: "Cloud Migration",
    description: "Securely migrate your infrastructure and applications to the cloud",
    icon: Cloud,
    points: [
      "Cloud readiness assessment",
      "Migration strategy and planning",
      "Secure cloud implementation",
      "Ongoing cloud optimization"
    ]
  },
  {
    title: "Digital Workflow Optimization",
    description: "Enhance collaboration and productivity through digital workflows",
    icon: Target,
    points: [
      "Workflow analysis and mapping",
      "Digital collaboration tools implementation",
      "Process standardization",
      "Continuous improvement frameworks"
    ]
  },
  {
    title: "Customer Experience Transformation",
    description: "Create exceptional digital experiences for your customers",
    icon: Lightbulb,
    points: [
      "Customer journey mapping",
      "Digital touchpoint optimization",
      "Personalization strategies",
      "Omnichannel experience design"
    ]
  }
];

const frameworkSteps = [
  {
    title: "Assessment & Discovery",
    description: "We begin by understanding your current state, business objectives, and challenges through a comprehensive assessment of your technology, processes, and organizational capabilities."
  },
  {
    title: "Vision & Strategy Development",
    description: "Based on the assessment, we work with you to develop a clear vision and strategy for your digital transformation, aligned with your business goals and market opportunities."
  },
  {
    title: "Roadmap Creation",
    description: "We create a detailed transformation roadmap with prioritized initiatives, timelines, resource requirements, and key milestones to guide your journey."
  },
  {
    title: "Solution Design & Implementation",
    description: "Our team designs and implements tailored solutions for each initiative, ensuring they integrate seamlessly with your existing systems and processes."
  },
  {
    title: "Change Management & Adoption",
    description: "We help your organization navigate the human side of transformation through comprehensive change management, training, and adoption strategies."
  },
  {
    title: "Continuous Improvement",
    description: "We establish mechanisms for ongoing measurement, learning, and optimization to ensure your digital transformation delivers sustainable value."
  }
];

const caseStudies = [
  {
    title: "Retail Chain Digital Overhaul",
    description: "Comprehensive digital transformation for a national retail chain, including e-commerce platform, supply chain optimization, and customer experience enhancement",
    result: "45% increase in online sales and 30% improvement in operational efficiency",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800"
  },
  {
    title: "Financial Services Modernization",
    description: "Legacy system modernization and process automation for a financial services provider, enabling faster service delivery and improved customer experience",
    result: "60% reduction in processing time and 25% cost savings",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800"
  }
];

export default DigitalTransformation;