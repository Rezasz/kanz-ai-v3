import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Target, Database, Users, Lightbulb, BarChart, Layers, Cpu, Briefcase, GraduationCap, Calculator, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import HubSpotForm from '../components/HubSpotForm';

const Insights = () => {
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = () => {
    setNewsletterSubmitted(true);
    console.log("Newsletter form submitted successfully");
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Insights & Resources</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Stay ahead with our latest research, insights, and thought leadership in AI and digital transformation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Whitepapers Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Featured Whitepapers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitepapers.map((whitepaper, index) => (
              <motion.div
                key={whitepaper.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col"
              >
                <div className="p-6 flex-grow">
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-100 rounded-full p-2 mr-3">
                      <whitepaper.icon className="h-6 w-6 text-pwc-orange" />
                    </div>
                    <div className="text-sm text-pwc-orange font-medium">{whitepaper.category}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{whitepaper.title}</h3>
                  <p className="text-gray-600 mb-4">{whitepaper.excerpt}</p>
                </div>
                <div className="p-6 pt-0 mt-auto">
                  <Link to={whitepaper.link}>
                    <Button variant="outline" className="w-full">
                      Read Whitepaper
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const whitepapers = [
  {
    title: "AI Readiness Framework: A Step-by-Step Guide for Enterprises",
    excerpt: "A comprehensive framework for assessing and enhancing AI readiness across technology, people, process, and data dimensions.",
    category: "AI Strategy",
    icon: Brain,
    link: "/insights/ai-readiness-framework"
  },
  {
    title: "Building a Scalable AI Strategy: From Vision to Execution",
    excerpt: "Learn how to develop and execute an AI strategy that aligns with business goals and scales effectively across your organization.",
    category: "AI Strategy",
    icon: Target,
    link: "/insights/scalable-ai-strategy"
  },
  {
    title: "AI Governance & Compliance: Balancing Innovation with Risk Management",
    excerpt: "Navigate the complex ethical and regulatory landscape for AI while maintaining innovation and managing risks effectively.",
    category: "AI Governance",
    icon: Shield,
    link: "/insights/ai-governance-compliance"
  },
  {
    title: "Enterprise AI Maturity Model: Assessing & Advancing AI Capabilities",
    excerpt: "A structured model to assess your organization's AI maturity and build a roadmap for advancing capabilities.",
    category: "AI Implementation",
    icon: BarChart,
    link: "/insights/ai-maturity-model"
  },
  {
    title: "The Role of AI in Digital Transformation: A Strategic Perspective",
    excerpt: "Explore how AI acts as a catalyst in digital transformation and drives business model innovation across industries.",
    category: "Digital Transformation",
    icon: Lightbulb,
    link: "/insights/ai-digital-transformation"
  },
  {
    title: "AI in Decision Intelligence: Enhancing Strategic Decision-Making",
    excerpt: "Discover how AI augments human decision-making with data-driven insights for better strategic outcomes.",
    category: "AI Applications",
    icon: Briefcase,
    link: "/insights/ai-decision-intelligence"
  },
  {
    title: "Data Strategy for AI Success: Ensuring Quality, Governance, and Scalability",
    excerpt: "Build a robust data foundation to ensure AI initiatives deliver maximum value and scale effectively.",
    category: "Data Strategy",
    icon: Database,
    link: "/insights/data-strategy-ai-success"
  },
  {
    title: "AI-Enabled Workforce: Redefining Roles & Upskilling for the Future",
    excerpt: "Prepare your workforce for an AI-powered future through strategic upskilling and organizational change.",
    category: "Workforce Transformation",
    icon: GraduationCap,
    link: "/insights/ai-enabled-workforce"
  },
  {
    title: "Operationalizing AI: Bridging the Gap Between AI PoCs and Enterprise Adoption",
    excerpt: "Learn how to move from AI proof-of-concepts to full-scale implementation and enterprise-wide adoption.",
    category: "AI Implementation",
    icon: Layers,
    link: "/insights/operationalizing-ai"
  },
  {
    title: "The Economics of AI: Measuring ROI & Business Impact of AI Investments",
    excerpt: "Frameworks and methodologies for calculating AI return on investment and justifying AI expenditures.",
    category: "AI Strategy",
    icon: Calculator,
    link: "/insights/economics-of-ai"
  }
];

export default Insights;