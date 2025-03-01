import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Lightbulb, Target, Building2, Briefcase, Factory, Building, Landmark, ShoppingBag, Scale, Building as Hospital, Cog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pwc-orange to-[#b33f02] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Your Trusted Partner in AI & Digital Transformation
              </h1>
              <p className="text-xl mb-8">
                We help businesses harness the power of Artificial Intelligence, Data, and Automation to drive growth, 
                innovation, and efficiency. Empower your organization with AI-driven insights and intelligent automation today!
              </p>
              <div>
                <Link to="/services">
                  <Button size="lg" className="bg-white text-pwc-orange hover:bg-gray-100">
                    Get Started
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800"
                alt="Business consulting team"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-pwc-gray mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">
              We specialize in transforming industries with AI-driven solutions, providing expert guidance 
              and cutting-edge technology to help businesses optimize operations and enhance customer experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
              >
                <industry.icon className="h-12 w-12 text-pwc-orange mb-4" />
                <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <Link to={industry.link} className="text-pwc-orange hover:text-[#b33f02] flex items-center">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-pwc-gray mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600">
              We combine strategic insights, technological expertise, and industry best practices 
              to help organizations navigate their AI and digital transformation journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="bg-orange-100 rounded-full p-4 inline-block mb-4">
                  <item.icon className="h-8 w-8 text-pwc-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <Target className="h-4 w-4 text-pwc-orange mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-pwc-gray text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Schedule a consultation with our AI experts and discover how we can help you achieve your digital transformation goals.
          </p>
          <Link to="/contact">
            <Button size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

const industries = [
  {
    title: "Energy & Oil & Gas",
    description: "AI-driven predictive maintenance & operational efficiency solutions for the energy sector.",
    icon: Building2,
    link: "/industries/energy"
  },
  {
    title: "Banking & Finance",
    description: "AI solutions for fraud detection, customer insights, and process automation.",
    icon: Briefcase,
    link: "/industries/banking-finance"
  },
  {
    title: "Manufacturing",
    description: "Smart factory solutions with predictive analytics and automation.",
    icon: Factory,
    link: "/industries/manufacturing"
  },
  {
    title: "Healthcare",
    description: "AI applications in diagnostics, drug discovery, and patient care optimization.",
    icon: Hospital,
    link: "/industries/healthcare"
  },
  {
    title: "Public Sector",
    description: "AI solutions for governance, public service automation, and smart city initiatives.",
    icon: Landmark,
    link: "/industries/public-sector"
  },
  {
    title: "Retail & E-commerce",
    description: "AI-powered customer personalization & inventory management systems.",
    icon: ShoppingBag,
    link: "/industries/retail"
  }
];

const expertise = [
  {
    title: "AI Strategy & Implementation",
    description: "Develop comprehensive AI roadmaps aligned with your business objectives.",
    icon: Brain,
    features: [
      "AI readiness assessment",
      "Strategy development",
      "Implementation planning",
      "Performance monitoring"
    ]
  },
  {
    title: "Digital Transformation",
    description: "End-to-end digital transformation solutions for the modern enterprise.",
    icon: Lightbulb,
    features: [
      "Process automation",
      "Legacy system modernization",
      "Cloud migration",
      "Digital workflow optimization"
    ]
  },
  {
    title: "Enterprise AI Solutions",
    description: "Deploy intelligent automation and AI-powered systems across your organization.",
    icon: Cog,
    features: [
      "AI-powered automation",
      "Intelligent copilots",
      "Content services platforms",
      "Custom AI development"
    ]
  }
];

const stats = [
  {
    value: "Several Projects",
    label: "Delivered"
  },
  {
    value: "100%",
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

export default Home;