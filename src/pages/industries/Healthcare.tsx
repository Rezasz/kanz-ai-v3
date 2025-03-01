import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Target, LineChart, Stethoscope, Microscope, AArrowDown as DNA, Activity } from 'lucide-react';

const Healthcare = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI in Healthcare</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Revolutionizing patient care and medical research with advanced AI solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Applications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Healthcare AI Solutions</h2>
            <p className="text-xl text-gray-600">
              Transformative AI applications in healthcare
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
            <p className="text-xl text-gray-600">Real-world impact in healthcare</p>
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
            <h2 className="text-3xl font-bold mb-4">Benefits of AI in Healthcare</h2>
            <p className="text-xl text-gray-600">Transforming healthcare delivery</p>
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
    title: "Diagnostic Assistance",
    description: "AI-powered diagnostic tools for accurate disease detection",
    icon: Microscope,
    benefits: [
      "Early disease detection",
      "Accurate diagnosis",
      "Reduced diagnostic time",
      "Support for rare conditions"
    ]
  },
  {
    title: "Patient Monitoring",
    description: "Real-time patient monitoring and predictive analytics",
    icon: Activity,
    benefits: [
      "24/7 patient monitoring",
      "Early warning systems",
      "Automated alerts",
      "Trend analysis"
    ]
  },
  {
    title: "Drug Discovery",
    description: "Accelerated drug development through AI",
    icon: DNA,
    benefits: [
      "Faster drug discovery",
      "Reduced development costs",
      "Better target identification",
      "Clinical trial optimization"
    ]
  }
];

const caseStudies = [
  {
    title: "AI-Powered Diagnostics",
    description: "Implementation of AI diagnostic system in major hospital network",
    result: "95% accuracy in early disease detection",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800"
  },
  {
    title: "Patient Care Optimization",
    description: "AI-driven patient monitoring and care management system",
    result: "50% reduction in critical events",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800"
  }
];

const benefits = [
  {
    title: "Improved Patient Care",
    description: "Enhanced patient outcomes through AI-driven insights and monitoring",
    icon: Heart
  },
  {
    title: "Efficient Operations",
    description: "Streamlined healthcare operations and resource management",
    icon: Stethoscope
  },
  {
    title: "Advanced Research",
    description: "Accelerated medical research and drug development",
    icon: Brain
  },
  {
    title: "Better Decisions",
    description: "Data-driven clinical decision support",
    icon: Target
  }
];

export default Healthcare;