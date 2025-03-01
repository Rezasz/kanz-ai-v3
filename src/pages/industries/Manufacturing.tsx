import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Factory, Target, LineChart, Settings, PenTool, Cpu, BarChart } from 'lucide-react';

const Manufacturing = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI in Manufacturing</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Transform manufacturing operations with intelligent automation and predictive analytics
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Applications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Smart Manufacturing Solutions</h2>
            <p className="text-xl text-gray-600">
              Innovative AI applications revolutionizing manufacturing
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

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real-world impact in manufacturing</p>
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
            <h2 className="text-3xl font-bold mb-4">Benefits of AI in Manufacturing</h2>
            <p className="text-xl text-gray-600">Transforming production with intelligent solutions</p>
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
    description: "AI-powered equipment monitoring and maintenance optimization",
    icon: Settings,
    benefits: [
      "Early fault detection",
      "Maintenance scheduling",
      "Equipment lifespan optimization",
      "Downtime reduction"
    ]
  },
  {
    title: "Quality Control",
    description: "Automated quality inspection and defect detection",
    icon: PenTool,
    benefits: [
      "Real-time defect detection",
      "Quality consistency",
      "Reduced waste",
      "Automated inspection"
    ]
  },
  {
    title: "Process Optimization",
    description: "AI-driven production process optimization",
    icon: Cpu,
    benefits: [
      "Production efficiency",
      "Resource optimization",
      "Workflow automation",
      "Yield improvement"
    ]
  }
];

const caseStudies = [
  {
    title: "Smart Factory Implementation",
    description: "Complete digital transformation of manufacturing operations",
    result: "40% increase in production efficiency",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800"
  },
  {
    title: "Quality Control Automation",
    description: "AI-powered quality inspection system implementation",
    result: "95% defect detection accuracy",
    image: "https://images.unsplash.com/photo-1565939273904-32d3365255f7?auto=format&fit=crop&w=800"
  }
];

const benefits = [
  {
    title: "Increased Efficiency",
    description: "Optimize production processes and reduce operational costs",
    icon: Factory
  },
  {
    title: "Quality Improvement",
    description: "Enhanced product quality through AI-powered inspection",
    icon: Target
  },
  {
    title: "Smart Operations",
    description: "Data-driven decision making and process automation",
    icon: Brain
  },
  {
    title: "Performance Analytics",
    description: "Real-time monitoring and performance optimization",
    icon: BarChart
  }
];

export default Manufacturing;