import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Briefcase, ShoppingBag, Factory, Building as Hospital, Landmark as Government } from 'lucide-react';

const Industries = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Delivering AI excellence across diverse sectors with tailored solutions for industry-specific challenges
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <industry.icon className="h-8 w-8 mb-2" />
                    <h3 className="text-xl font-semibold">{industry.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <ul className="space-y-2">
                    {industry.solutions.map((solution, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-orange-100 rounded-full mr-2" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact Across Industries</h2>
            <p className="text-xl text-gray-600">Measurable results that drive business success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 text-center"
              >
                <div className="text-3xl font-bold text-pwc-orange mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const industries = [
  {
    title: "Banking & Finance",
    description: "Transform financial services with AI-driven solutions",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    solutions: [
      "Risk assessment automation",
      "Fraud detection systems",
      "Customer service AI",
      "Trading algorithms"
    ]
  },
  {
    title: "Manufacturing",
    description: "Optimize production with smart manufacturing solutions",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&w=800&q=80",
    solutions: [
      "Predictive maintenance",
      "Quality control AI",
      "Supply chain optimization",
      "Production planning"
    ]
  },
  {
    title: "Healthcare",
    description: "Enhance patient care with AI-powered healthcare solutions",
    icon: Hospital,
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    solutions: [
      "Diagnostic assistance",
      "Patient monitoring",
      "Treatment planning",
      "Resource management"
    ]
  },
  {
    title: "Retail & E-commerce",
    description: "Revolutionize retail with intelligent solutions",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
    solutions: [
      "Inventory optimization",
      "Personalized recommendations",
      "Dynamic pricing",
      "Customer analytics"
    ]
  },
  {
    title: "Public Sector",
    description: "Modernize government services with AI",
    icon: Government,
    image: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?auto=format&fit=crop&w=800&q=80",
    solutions: [
      "Citizen services automation",
      "Smart city solutions",
      "Policy analysis",
      "Resource allocation"
    ]
  },
  {
    title: "Insurance",
    description: "Transform insurance with AI-powered solutions",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
    solutions: [
      "Risk assessment",
      "Claims processing",
      "Fraud detection",
      "Customer service"
    ]
  }
];

const metrics = [
  {
    value: "500+",
    label: "Projects Delivered"
  },
  {
    value: "95%",
    label: "Client Satisfaction"
  },
  {
    value: "40%",
    label: "Average Cost Reduction"
  },
  {
    value: "60%",
    label: "Efficiency Increase"
  }
];

export default Industries;