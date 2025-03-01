import React from 'react';
import { motion } from 'framer-motion';
import { Award, Brain, Users, Briefcase, Target, BarChart as ChartBar, Shield, Code } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pwc-orange to-[#b33f02] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Kanz.ai</h1>
              <p className="text-xl max-w-3xl">
                Empowering businesses through AI-driven digital transformation, enabling them to innovate, 
                optimize, and thrive in a data-driven world.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800"
                  alt="Business meeting"
                  className="rounded-lg shadow-xl w-full h-40 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800"
                  alt="Data visualization"
                  className="rounded-lg shadow-xl w-full h-40 object-cover mt-8"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Capabilities</h2>
            <p className="text-xl text-gray-600">Delivering excellence through expertise and innovation</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="prose lg:prose-lg"
            >
              <p className="text-lg text-gray-600 mb-6">
                As a premier AI and digital transformation consultancy, we bring together deep industry 
                expertise, cutting-edge technological capabilities, and a proven track record of delivering 
                transformative solutions. Our team comprises seasoned professionals with extensive experience 
                in AI strategy, implementation, and digital transformation across various industries.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We pride ourselves on our ability to bridge the gap between complex technological solutions 
                and real-world business challenges. Our consultants combine strategic thinking with hands-on 
                technical expertise to deliver solutions that drive measurable business outcomes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start">
                    <Target className="h-6 w-6 text-pwc-orange mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{capability}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <div className="space-y-6">
                {strengths.map((strength, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-orange-100 rounded-full p-2 mr-4 flex-shrink-0">
                      <strength.icon className="h-6 w-6 text-pwc-orange" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{strength.title}</h4>
                      <p className="text-gray-600">{strength.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real results from our partnerships</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.description}</p>
                  <div className="flex items-center text-pwc-orange hover:text-[#b33f02]">
                    <ChartBar className="h-5 w-5 mr-2" />
                    <span className="font-semibold">{story.result}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const capabilities = [
  "Strategic AI roadmap development",
  "Enterprise-wide digital transformation",
  "Advanced analytics and ML solutions",
  "Process automation and optimization",
  "Data strategy and governance",
  "Change management and adoption",
  "Technology architecture design",
  "AI implementation and integration"
];

const strengths = [
  {
    icon: Brain,
    title: "Deep Technical Expertise",
    description: "Our team brings together decades of experience in AI, ML, and digital transformation technologies."
  },
  {
    icon: Target,
    title: "Results-Driven Approach",
    description: "We focus on delivering measurable business outcomes and sustainable long-term value."
  },
  {
    icon: Shield,
    title: "Industry Best Practices",
    description: "We adhere to the highest standards of quality and security in all our implementations."
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    description: "We work closely with your team to ensure knowledge transfer and sustainable success."
  }
];

const successStories = [
  {
    title: "Global Energy Innovation",
    description: "Transformed maintenance operations for a leading energy company with AI-driven predictive analytics",
    result: "30% reduction in operational downtime",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=800"
  },
  {
    title: "Financial Services Excellence",
    description: "Enhanced fraud detection capabilities for a major bank using advanced AI algorithms",
    result: "60% improvement in fraud detection",
    image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&w=800"
  },
  {
    title: "Supply Chain Optimization",
    description: "Revolutionized logistics operations with AI-powered tracking and forecasting",
    result: "40% increase in efficiency",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800"
  },
  {
    title: "Smart City Initiative",
    description: "Implemented AI-powered analytics for urban mobility and energy management",
    result: "25% reduction in energy consumption",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800"
  }
];

export default About;