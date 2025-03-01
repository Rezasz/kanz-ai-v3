import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Target, Database, LineChart, PieChart, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const DataAnalytics = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Data Analytics</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Transform your data into actionable insights to drive better business decisions
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
              <h2 className="text-3xl font-bold mb-6">Unlock the Power of Your Data</h2>
              <p className="text-lg text-gray-600 mb-6">
                In today's data-driven world, organizations that can effectively analyze and leverage their data gain a significant competitive advantage. Our Data Analytics services help you extract meaningful insights from your data to drive better decision-making, optimize operations, and identify new opportunities.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We combine advanced analytics techniques, industry expertise, and cutting-edge technologies to help you build a robust data analytics capability. From developing a comprehensive data strategy to implementing predictive models and creating intuitive visualizations, our team guides you through every step of your analytics journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link to="/contact">
                  <Button className="w-full sm:w-auto">
                    Schedule a Consultation
                  </Button>
                </Link>
                <Link to="/data-maturity">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Take Data Maturity Assessment
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800"
                alt="Data Analytics"
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
            <h2 className="text-3xl font-bold mb-4">Our Data Analytics Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions to maximize the value of your data</p>
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

      {/* Analytics Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Data Analytics Process</h2>
            <p className="text-xl text-gray-600">A proven methodology for turning data into insights</p>
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
            <p className="text-xl text-gray-600">Real-world impact of our data analytics services</p>
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Unlock the Value of Your Data?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact our team of data analytics experts to start your journey toward data-driven decision making.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg">
                Contact Us
              </Button>
            </Link>
            <Link to="/data-maturity">
              <Button variant="outline" size="lg">
                Take Data Maturity Assessment
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
    title: "Data Strategy",
    description: "Develop a comprehensive data strategy aligned with your business objectives",
    icon: Target,
    points: [
      "Data maturity assessment",
      "Strategy development",
      "Data governance frameworks",
      "Implementation roadmap"
    ]
  },
  {
    title: "Advanced Analytics",
    description: "Leverage advanced analytical techniques to extract deeper insights from your data",
    icon: BarChart,
    points: [
      "Statistical analysis",
      "Machine learning models",
      "Pattern recognition",
      "Anomaly detection"
    ]
  },
  {
    title: "Predictive Modeling",
    description: "Develop predictive models to forecast trends and anticipate future outcomes",
    icon: LineChart,
    points: [
      "Forecasting models",
      "Risk prediction",
      "Customer behavior modeling",
      "Demand planning"
    ]
  },
  {
    title: "Data Visualization",
    description: "Create intuitive visualizations that make complex data easy to understand",
    icon: PieChart,
    points: [
      "Interactive dashboards",
      "Custom visualization development",
      "Executive reporting",
      "Real-time monitoring"
    ]
  },
  {
    title: "Data Management",
    description: "Implement robust data management practices to ensure data quality and accessibility",
    icon: Database,
    points: [
      "Data quality assessment",
      "Data integration",
      "Master data management",
      "Data architecture design"
    ]
  }
];

const processSteps = [
  {
    title: "Discovery & Assessment",
    description: "We begin by understanding your business objectives, current data landscape, and analytics capabilities to identify opportunities and challenges."
  },
  {
    title: "Data Strategy Development",
    description: "Based on the assessment, we develop a tailored data strategy that aligns with your business goals and provides a roadmap for analytics initiatives."
  },
  {
    title: "Data Preparation",
    description: "We help you collect, clean, and structure your data to ensure it's ready for analysis and modeling."
  },
  {
    title: "Analysis & Modeling",
    description: "Our team applies advanced analytical techniques and develops models to extract insights and generate predictions from your data."
  },
  {
    title: "Visualization & Reporting",
    description: "We create intuitive visualizations and reports that make complex data easy to understand and actionable for decision-makers."
  },
  {
    title: "Implementation & Adoption",
    description: "We help you implement analytics solutions and foster a data-driven culture to ensure sustainable value from your analytics initiatives."
  }
];

const caseStudies = [
  {
    title: "Retail Customer Analytics",
    description: "Implementation of a comprehensive customer analytics solution for a retail chain, enabling personalized marketing and improved customer experience",
    result: "28% increase in customer retention and 35% higher marketing ROI",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800"
  },
  {
    title: "Supply Chain Optimization",
    description: "Development of predictive analytics models for a global manufacturer, optimizing inventory levels and improving supply chain efficiency",
    result: "40% reduction in excess inventory and 25% decrease in stockouts",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800"
  }
];

export default DataAnalytics;