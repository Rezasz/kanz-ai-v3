import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Target, LineChart, PieChart, Lock, UserCheck, Banknote, CreditCard, Coins, TrendingUp, AlertTriangle, Zap, Layers, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const BankingFinance = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI in Banking & Finance</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Transform financial services with cutting-edge AI solutions for enhanced security, 
              personalization, and operational efficiency
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
              <h2 className="text-3xl font-bold mb-6">Revolutionizing Financial Services with AI</h2>
              <p className="text-lg text-gray-600 mb-6">
                The banking and financial services industry is undergoing a profound transformation driven by artificial intelligence. From fraud detection and risk assessment to personalized customer experiences and algorithmic trading, AI is reshaping every aspect of the financial ecosystem.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                At Kanz.ai, we partner with financial institutions to harness the power of AI, enabling them to enhance security, improve operational efficiency, deliver personalized services, and gain competitive advantages in an increasingly digital marketplace.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team of financial AI experts combines deep industry knowledge with cutting-edge technical expertise to deliver solutions that address the unique challenges and opportunities in the banking and finance sector.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link to="/contact">
                  <Button className="w-full sm:w-auto">
                    Schedule a Consultation
                  </Button>
                </Link>
                <Link to="/ai-readiness">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Take AI Readiness Assessment
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
                src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=800"
                alt="AI in Banking"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Applications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key AI Applications</h2>
            <p className="text-xl text-gray-600">
              Revolutionary AI solutions reshaping the financial sector
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

      {/* Industry Challenges & Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Industry Challenges & AI Solutions</h2>
            <p className="text-xl text-gray-600">Addressing key financial sector challenges with AI</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-orange-100 rounded-full p-3 mr-4">
                    <challenge.icon className="h-6 w-6 text-pwc-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                    <p className="text-gray-600 mb-4">{challenge.description}</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-pwc-orange">AI Solution:</h4>
                  <p className="text-gray-700">{challenge.solution}</p>
                </div>
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
            <p className="text-xl text-gray-600">Real-world impact in financial services</p>
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

      {/* Implementation Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Implementation Approach</h2>
            <p className="text-xl text-gray-600">A proven methodology for financial AI solutions</p>
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of AI in Finance</h2>
            <p className="text-xl text-gray-600">Transforming financial services with AI</p>
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

      {/* Future Trends */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Future Trends in Financial AI</h2>
            <p className="text-xl text-gray-600">Emerging technologies shaping the future of finance</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trends.map((trend, index) => (
              <motion.div
                key={trend.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="bg-orange-100 rounded-full p-3 inline-block mb-4">
                  <trend.icon className="h-6 w-6 text-pwc-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{trend.title}</h3>
                <p className="text-gray-600">{trend.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pwc-gray text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Financial Services?</h2>
          <p className="text-xl mb-8">
            Contact our team of financial AI experts to discuss how we can help you leverage AI to enhance security, improve efficiency, and deliver exceptional customer experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-white text-pwc-gray hover:bg-gray-100">
                Contact Us
              </Button>
            </Link>
            <Link to="/ai-readiness">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Take AI Readiness Assessment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const applications = [
  {
    title: "Fraud Detection",
    description: "Advanced AI systems for real-time fraud detection and prevention",
    icon: Shield,
    benefits: [
      "Real-time transaction monitoring",
      "Pattern recognition",
      "Anomaly detection",
      "Risk scoring"
    ]
  },
  {
    title: "Customer Analytics",
    description: "AI-powered customer behavior analysis and personalization",
    icon: UserCheck,
    benefits: [
      "Personalized recommendations",
      "Customer segmentation",
      "Churn prediction",
      "Lifetime value analysis"
    ]
  },
  {
    title: "Algorithmic Trading",
    description: "AI-driven trading strategies and market analysis",
    icon: LineChart,
    benefits: [
      "Market prediction",
      "Risk management",
      "Portfolio optimization",
      "Automated trading"
    ]
  },
  {
    title: "Credit Risk Assessment",
    description: "AI-powered credit scoring and risk evaluation",
    icon: AlertTriangle,
    benefits: [
      "Alternative data analysis",
      "Predictive default modeling",
      "Real-time risk assessment",
      "Enhanced decision accuracy"
    ]
  },
  {
    title: "Regulatory Compliance",
    description: "AI solutions for ensuring compliance with financial regulations",
    icon: Shield,
    benefits: [
      "Automated compliance monitoring",
      "Regulatory reporting",
      "AML/KYC automation",
      "Audit trail generation"
    ]
  },
  {
    title: "Process Automation",
    description: "Intelligent automation of financial processes and workflows",
    icon: Zap,
    benefits: [
      "Document processing",
      "Workflow optimization",
      "Exception handling",
      "Cost reduction"
    ]
  }
];

const challenges = [
  {
    title: "Increasing Fraud Sophistication",
    description: "Financial institutions face increasingly sophisticated fraud attempts that traditional rule-based systems struggle to detect.",
    solution: "Our AI-powered fraud detection systems use advanced machine learning to identify subtle patterns and anomalies in real-time, adapting to new fraud techniques as they emerge.",
    icon: AlertTriangle
  },
  {
    title: "Regulatory Compliance Burden",
    description: "Financial organizations must comply with complex, evolving regulations that require extensive monitoring and reporting.",
    solution: "AI-driven compliance solutions automate monitoring, identify potential issues before they become violations, and streamline reporting processes while maintaining audit trails.",
    icon: Shield
  },
  {
    title: "Customer Experience Expectations",
    description: "Today's customers expect personalized, seamless experiences across all channels and touchpoints.",
    solution: "Our AI customer analytics platforms create comprehensive customer profiles, predict needs, and enable hyper-personalized experiences that increase satisfaction and loyalty.",
    icon: UserCheck
  },
  {
    title: "Legacy System Integration",
    description: "Many financial institutions operate with legacy systems that are difficult to modernize and integrate with new technologies.",
    solution: "We specialize in creating AI solutions that bridge legacy and modern systems, enabling innovation without complete system overhauls.",
    icon: Layers
  }
];

const caseStudies = [
  {
    title: "Global Bank Fraud Prevention",
    description: "Implementation of AI-powered fraud detection system for a major bank, combining transaction monitoring, behavioral analytics, and anomaly detection to identify fraudulent activities in real-time.",
    result: "85% reduction in fraudulent transactions and $12M annual savings",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=800"
  },
  {
    title: "Investment Portfolio Optimization",
    description: "AI-driven portfolio management and risk assessment platform for a wealth management firm, using machine learning to analyze market trends, optimize asset allocation, and manage risk exposure.",
    result: "32% improvement in portfolio performance and 45% reduction in analysis time",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800"
  },
  {
    title: "Retail Banking Customer Experience",
    description: "Implementation of an AI-powered customer analytics and personalization system for a retail bank, enabling personalized product recommendations and proactive service interventions.",
    result: "28% increase in product adoption and 40% improvement in customer satisfaction",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800"
  },
  {
    title: "Regulatory Compliance Automation",
    description: "Development of an AI-based compliance monitoring and reporting system for a financial services provider, automating document review, transaction monitoring, and regulatory reporting.",
    result: "70% reduction in compliance costs and 99.8% accuracy in violation detection",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800"
  }
];

const processSteps = [
  {
    title: "Assessment & Discovery",
    description: "We begin by understanding your specific challenges, objectives, and current capabilities through a comprehensive assessment of your technology, processes, and data landscape."
  },
  {
    title: "Solution Design",
    description: "Based on the assessment, we design a tailored AI solution that addresses your specific needs, considering regulatory requirements, security concerns, and integration with existing systems."
  },
  {
    title: "Data Preparation",
    description: "We help you prepare and structure your data for AI implementation, ensuring data quality, compliance with privacy regulations, and appropriate security measures."
  },
  {
    title: "Development & Training",
    description: "Our team develops and trains AI models using your data, continuously refining them to achieve optimal performance for your specific use cases."
  },
  {
    title: "Integration & Testing",
    description: "We integrate the AI solution with your existing systems and conduct thorough testing to ensure everything works seamlessly and securely."
  },
  {
    title: "Deployment & Optimization",
    description: "After successful testing, we deploy the solution to your production environment and provide ongoing monitoring and optimization to ensure continued performance and value."
  }
];

const benefits = [
  {
    title: "Enhanced Security",
    description: "AI-powered systems detect and prevent fraud with greater accuracy than traditional methods, protecting both institutions and customers from financial losses and data breaches.",
    icon: Lock
  },
  {
    title: "Operational Efficiency",
    description: "Automation of routine tasks and processes reduces operational costs, minimizes errors, and allows staff to focus on higher-value activities that require human judgment.",
    icon: PieChart
  },
  {
    title: "Better Decision Making",
    description: "AI-driven analytics provide deeper insights and more accurate predictions, enabling better-informed decisions about lending, investments, risk management, and business strategy.",
    icon: Brain
  },
  {
    title: "Revenue Growth",
    description: "Personalized customer experiences, targeted marketing, and new AI-enabled products and services drive increased customer acquisition, retention, and lifetime value.",
    icon: Banknote
  },
  {
    title: "Regulatory Compliance",
    description: "AI solutions automate compliance monitoring and reporting, reducing the risk of violations and penalties while adapting quickly to changing regulatory requirements.",
    icon: Shield
  },
  {
    title: "Competitive Advantage",
    description: "Financial institutions that effectively leverage AI gain significant advantages in efficiency, customer experience, and innovation, positioning them ahead of competitors.",
    icon: TrendingUp
  }
];

const trends = [
  {
    title: "Explainable AI",
    description: "The development of AI systems that can explain their decisions in human-understandable terms, critical for regulatory compliance and building trust.",
    icon: Brain
  },
  {
    title: "Federated Learning",
    description: "AI models that can be trained across multiple financial institutions without sharing sensitive data, enabling better fraud detection while preserving privacy.",
    icon: Shield
  },
  {
    title: "Quantum Computing in Finance",
    description: "The application of quantum computing to solve complex financial problems like portfolio optimization and risk modeling at unprecedented speeds.",
    icon: Cpu
  },
  {
    title: "Embedded Finance",
    description: "AI-powered financial services integrated seamlessly into non-financial platforms and applications, creating new distribution channels and business models.",
    icon: Layers
  },
  {
    title: "Autonomous Finance",
    description: "AI systems that can make and execute financial decisions with minimal human intervention, from bill payments to investment management.",
    icon: Zap
  },
  {
    title: "Decentralized Finance (DeFi)",
    description: "AI applications in blockchain-based financial systems that operate without traditional intermediaries, creating new opportunities and challenges.",
    icon: Coins
  }
];

export default BankingFinance;