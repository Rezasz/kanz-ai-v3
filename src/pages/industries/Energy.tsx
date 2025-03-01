import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Lightbulb, Target, Zap, Factory, BarChart, Cpu, LineChart } from 'lucide-react';

const Energy = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Generative AI in Energy</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Revolutionizing the energy sector with advanced AI solutions for improved efficiency, 
              sustainability, and innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Applications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Applications of Generative AI</h2>
            <p className="text-xl text-gray-600">
              Transforming energy operations through innovative AI applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="bg-orange-100 rounded-full p-3 inline-block mb-4">
                  <app.icon className="h-8 w-8 text-pwc-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{app.title}</h3>
                <p className="text-gray-600 mb-4">{app.description}</p>
                <ul className="space-y-2">
                  {app.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <Target className="h-5 w-5 text-pwc-orange mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
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
            <p className="text-xl text-gray-600">Real-world implementations and results</p>
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
                    <LineChart className="h-5 w-5 mr-2" />
                    <span className="font-semibold">{study.result}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of Generative AI</h2>
            <p className="text-xl text-gray-600">Transforming the future of energy</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-3 mr-4">
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
    </div>
  );
};

const applications = [
  {
    title: "Predictive Maintenance",
    description: "Advanced AI models for equipment maintenance optimization",
    icon: Cpu,
    benefits: [
      "Predict equipment failures before they occur",
      "Optimize maintenance schedules",
      "Reduce downtime and costs",
      "Extend asset lifecycle"
    ]
  },
  {
    title: "Energy Optimization",
    description: "AI-driven energy distribution and consumption optimization",
    icon: Zap,
    benefits: [
      "Real-time load balancing",
      "Demand prediction",
      "Grid optimization",
      "Energy efficiency improvements"
    ]
  },
  {
    title: "Process Automation",
    description: "Automated workflows and decision-making processes",
    icon: Factory,
    benefits: [
      "Streamlined operations",
      "Reduced human error",
      "Increased efficiency",
      "Cost optimization"
    ]
  }
];

const caseStudies = [
  {
    title: "Smart Grid Optimization",
    description: "Implementation of AI-driven grid management system for a major utility provider",
    result: "30% reduction in distribution losses",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800"
  },
  {
    title: "Renewable Energy Integration",
    description: "AI-powered forecasting and integration of renewable energy sources",
    result: "45% improvement in energy storage efficiency",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800"
  }
];

const benefits = [
  {
    title: "Enhanced Efficiency",
    description: "Optimize energy production and distribution through AI-driven insights and automation",
    icon: BarChart
  },
  {
    title: "Cost Reduction",
    description: "Significant cost savings through predictive maintenance and optimized operations",
    icon: Target
  },
  {
    title: "Innovation",
    description: "Drive innovation in energy management and sustainability practices",
    icon: Lightbulb
  },
  {
    title: "Smart Decision Making",
    description: "Data-driven decisions for better resource allocation and planning",
    icon: Brain
  }
];

export default Energy;