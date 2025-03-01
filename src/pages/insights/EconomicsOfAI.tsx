import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, CheckCircle, Brain, Target, Calculator, DollarSign, ArrowRight, LineChart, PieChart, TrendingUp, Scale, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const EconomicsOfAI = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">The Economics of AI</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Measuring ROI & Business Impact of AI Investments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold mb-6">AI Investment Impact: Key Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {keyStats.map((stat, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-2 mr-3 flex-shrink-0">
                    <stat.icon className="h-5 w-5 text-pwc-orange" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{stat.value}</p>
                    <p className="text-gray-700">{stat.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link to="/services/ai-strategy">
                <Button className="w-full sm:w-auto">
                  Explore AI Strategy Services
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="w-full sm:w-auto">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Framework */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">AI ROI Framework</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to measuring the business impact of AI investments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roiFramework.map((component, index) => (
              <motion.div
                key={component.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="bg-orange-100 rounded-full p-3 inline-block mb-4">
                  <component.icon className="h-8 w-8 text-pwc-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{component.title}</h3>
                <p className="text-gray-600 mb-4">{component.description}</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-pwc-orange mb-2">Key Elements:</h4>
                  <ul className="space-y-2">
                    {component.elements.map((element, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-pwc-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{element}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Categories */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">AI Value Categories</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 mb-6">
              AI investments generate value across multiple dimensions. Understanding these value categories is essential for comprehensive ROI measurement:
            </p>
            <div className="space-y-6">
              {valueCategories.map((category, index) => (
                <div key={category.title} className="border-l-4 border-pwc-orange pl-4">
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-3">{category.description}</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-pwc-orange mb-2">Measurement Approaches:</h4>
                    <ul className="space-y-2">
                      {category.measurements.map((measurement, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-pwc-orange mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{measurement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">Common ROI Measurement Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="bg-pwc-gray p-4">
                  <div className="flex items-center">
                    <challenge.icon className="h-6 w-6 text-white mr-3" />
                    <h3 className="text-lg font-bold text-white">{challenge.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{challenge.description}</p>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-pwc-orange mb-2">Solution Approach:</h4>
                    <ul className="space-y-1">
                      {challenge.solutions.map((solution, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-pwc-orange mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Best Practices for AI ROI Measurement</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-8">
              {bestPractices.map((practice, index) => (
                <div key={practice.title} className="relative">
                  {index !== bestPractices.length - 1 && (
                    <div className="absolute left-6 top-10 h-full w-0.5 bg-gray-200"></div>
                  )}
                  <div className="flex items-start">
                    <div className="bg-pwc-orange text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl z-10 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-semibold mb-2">{practice.title}</h3>
                      <p className="text-gray-600 mb-3">{practice.description}</p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-pwc-orange mb-2">Implementation Tips:</h4>
                        <ul className="space-y-2">
                          {practice.tips.map((tip, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-pwc-orange mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Benchmarks */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">AI ROI Industry Benchmarks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industryBenchmarks.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
                <div className="bg-orange-100 rounded-full p-3 inline-block mb-4">
                  <LineChart className="h-8 w-8 text-pwc-orange" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Average ROI:</span>
                    <span className="font-bold text-pwc-orange">{industry.averageROI}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Payback Period:</span>
                    <span className="font-bold text-pwc-orange">{industry.paybackPeriod}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Top Value Driver:</span>
                    <span className="font-bold text-gray-700">{industry.topValueDriver}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-pwc-gray text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Maximize Your AI Investment Returns</h2>
          <p className="text-xl mb-8">
            Contact our team of AI economics experts to develop a comprehensive framework for measuring and optimizing the ROI of your AI investments.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-white text-pwc-gray hover:bg-gray-100 w-full sm:w-auto">
                Schedule a Consultation
              </Button>
            </Link>
            <Link to="/services/ai-strategy">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                Explore AI Strategy Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <Link to={resource.link} className="text-pwc-orange hover:text-[#b33f02] font-medium flex items-center">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
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

const keyStats = [
  {
    icon: DollarSign,
    value: "3-15x ROI",
    text: "Average return on investment for successful AI implementations across industries"
  },
  {
    icon: Calculator,
    value: "40%",
    text: "Of organizations struggle to accurately measure AI ROI due to inadequate frameworks"
  },
  {
    icon: TrendingUp,
    value: "20-30%",
    text: "Typical cost reduction achieved through AI-powered process automation"
  },
  {
    icon: BarChart,
    value: "15-35%",
    text: "Average revenue increase from AI-enhanced customer experience and personalization"
  }
];

const roiFramework = [
  {
    title: "Cost Measurement",
    description: "Comprehensive accounting of all direct and indirect AI investment costs",
    icon: Calculator,
    elements: [
      "Technology infrastructure costs",
      "Software licensing and development",
      "Data acquisition and preparation",
      "Talent and training expenses",
      "Ongoing maintenance and operations"
    ]
  },
  {
    title: "Benefit Quantification",
    description: "Systematic approach to quantifying tangible and intangible benefits",
    icon: BarChart,
    elements: [
      "Revenue growth metrics",
      "Cost reduction calculations",
      "Productivity improvements",
      "Risk mitigation value",
      "Strategic advantage assessment"
    ]
  },
  {
    title: "Timeline Analysis",
    description: "Evaluation of investment returns across different time horizons",
    icon: LineChart,
    elements: [
      "Short-term quick wins (3-6 months)",
      "Medium-term value creation (6-18 months)",
      "Long-term strategic benefits (18+ months)",
      "Time-to-value acceleration strategies",
      "Payback period calculation"
    ]
  },
  {
    title: "Risk Adjustment",
    description: "Incorporation of risk factors into ROI calculations",
    icon: Scale,
    elements: [
      "Implementation risk assessment",
      "Adoption risk factors",
      "Technology obsolescence risk",
      "Competitive response considerations",
      "Regulatory and compliance risks"
    ]
  },
  {
    title: "Value Attribution",
    description: "Methods for attributing business outcomes to AI investments",
    icon: Target,
    elements: [
      "Causal impact analysis",
      "A/B testing frameworks",
      "Contribution analysis",
      "Counterfactual modeling",
      "Multi-touch attribution"
    ]
  },
  {
    title: "Strategic Alignment",
    description: "Connecting AI ROI to broader strategic objectives",
    icon: Brain,
    elements: [
      "Strategic KPI alignment",
      "Competitive advantage measurement",
      "Innovation capability assessment",
      "Organizational transformation metrics",
      "Future readiness indicators"
    ]
  }
];

const valueCategories = [
  {
    title: "Cost Efficiency",
    description: "Value created through reduction in operational costs and improved resource utilization",
    measurements: [
      "Process automation savings (labor hours × cost per hour)",
      "Infrastructure optimization (reduced IT costs)",
      "Maintenance cost reduction (predictive vs. reactive)",
      "Resource utilization improvement (capacity × utilization rate)",
      "Error reduction (error rate × cost per error)"
    ]
  },
  {
    title: "Revenue Growth",
    description: "Value generated through increased sales, customer acquisition, and retention",
    measurements: [
      "Conversion rate improvement (visitors × conversion lift × average order value)",
      "Cross-sell/upsell effectiveness (recommendation acceptance rate × value)",
      "Customer lifetime value increase (retention improvement × customer value)",
      "New market penetration (new customers × average revenue)",
      "Price optimization impact (price elasticity × optimal pricing)"
    ]
  },
  {
    title: "Risk Mitigation",
    description: "Value of reduced financial, operational, and compliance risks",
    measurements: [
      "Fraud detection improvement (fraud reduction × average fraud cost)",
      "Compliance violation reduction (violation decrease × average penalty)",
      "Cybersecurity incident prevention (incidents prevented × average cost)",
      "Quality issue reduction (defect rate improvement × cost per defect)",
      "Decision error reduction (error rate decrease × average impact)"
    ]
  },
  {
    title: "Strategic Advantage",
    description: "Long-term value created through improved competitive positioning and capabilities",
    measurements: [
      "Time-to-market acceleration (cycle time reduction × value per time unit)",
      "Innovation capability enhancement (new product success rate)",
      "Market share growth (share increase × market size)",
      "Brand value improvement (brand equity metrics)",
      "Organizational agility (response time to market changes)"
    ]
  }
];

const challenges = [
  {
    title: "Attribution Complexity",
    description: "Difficulty in isolating the specific impact of AI from other concurrent initiatives and market factors",
    icon: Target,
    solutions: [
      "Implement controlled experiments (A/B testing) where possible",
      "Use causal impact analysis with control groups",
      "Develop multi-touch attribution models",
      "Apply counterfactual analysis techniques",
      "Establish clear baseline measurements before AI implementation"
    ]
  },
  {
    title: "Intangible Benefits Valuation",
    description: "Challenges in quantifying intangible benefits such as improved decision quality, customer experience, and strategic positioning",
    icon: Scale,
    solutions: [
      "Develop proxy metrics that correlate with intangible outcomes",
      "Use survey-based measurement for experience and satisfaction",
      "Apply willingness-to-pay methodologies for value estimation",
      "Implement balanced scorecard approaches",
      "Benchmark against industry standards and competitors"
    ]
  },
  {
    title: "Time Horizon Misalignment",
    description: "Mismatch between short-term measurement needs and longer-term value realization of AI investments",
    icon: LineChart,
    solutions: [
      "Develop staged value realization frameworks with interim metrics",
      "Implement leading indicator measurements that predict future value",
      "Use option value approaches for long-term strategic investments",
      "Create milestone-based evaluation frameworks",
      "Balance short-term and long-term metrics in executive reporting"
    ]
  },
  {
    title: "Data Limitations",
    description: "Insufficient or low-quality data for accurate measurement of AI impact and performance",
    icon: Database,
    solutions: [
      "Invest in measurement infrastructure before AI implementation",
      "Implement data quality improvement initiatives",
      "Use statistical techniques to account for data limitations",
      "Combine quantitative and qualitative measurement approaches",
      "Develop incremental data collection strategies"
    ]
  }
];

const bestPractices = [
  {
    title: "Start with Clear Business Objectives",
    description: "Define specific, measurable business objectives for AI initiatives before implementation",
    tips: [
      "Link AI initiatives directly to strategic business goals",
      "Define primary and secondary success metrics upfront",
      "Establish clear baseline measurements before implementation",
      "Involve business stakeholders in metric definition",
      "Document assumptions and constraints that may impact measurement"
    ]
  },
  {
    title: "Implement a Staged Measurement Approach",
    description: "Develop a measurement framework that evolves with the AI initiative's maturity",
    tips: [
      "Define technical success metrics for early stages (model accuracy, etc.)",
      "Establish operational metrics for implementation phase",
      "Develop business impact metrics for value realization",
      "Create leading indicators that predict future value",
      "Adjust measurement approach as the initiative matures"
    ]
  },
  {
    title: "Build a Comprehensive Value Framework",
    description: "Create a holistic framework that captures all value dimensions of AI investments",
    tips: [
      "Include both tangible and intangible benefits",
      "Consider direct and indirect costs",
      "Account for risk reduction and avoidance value",
      "Incorporate strategic and competitive positioning benefits",
      "Assess organizational capability development value"
    ]
  },
  {
    title: "Establish Governance and Accountability",
    description: "Create clear ownership and governance for AI value measurement",
    tips: [
      "Assign clear ownership for ROI measurement",
      "Establish regular review cadence for value tracking",
      "Implement stage-gate processes tied to value realization",
      "Create feedback loops between measurement and implementation",
      "Develop executive dashboards for AI portfolio performance"
    ]
  },
  {
    title: "Continuously Refine and Adapt",
    description: "Treat ROI measurement as an evolving capability that improves over time",
    tips: [
      "Regularly review and update measurement methodologies",
      "Incorporate learnings from each AI initiative",
      "Benchmark against industry standards and best practices",
      "Adjust for changing business conditions and priorities",
      "Invest in measurement capabilities and tools"
    ]
  }
];

const industryBenchmarks = [
  {
    title: "Financial Services",
    averageROI: "250-350%",
    paybackPeriod: "12-18 months",
    topValueDriver: "Risk reduction and fraud prevention"
  },
  {
    title: "Manufacturing",
    averageROI: "200-300%",
    paybackPeriod: "9-15 months",
    topValueDriver: "Predictive maintenance and quality improvement"
  },
  {
    title: "Retail",
    averageROI: "300-500%",
    paybackPeriod: "6-12 months",
    topValueDriver: "Personalization and inventory optimization"
  },
  {
    title: "Healthcare",
    averageROI: "150-250%",
    paybackPeriod: "18-24 months",
    topValueDriver: "Clinical decision support and operational efficiency"
  },
  {
    title: "Energy",
    averageROI: "200-400%",
    paybackPeriod: "12-18 months",
    topValueDriver: "Predictive maintenance and optimization"
  },
  {
    title: "Telecommunications",
    averageROI: "250-350%",
    paybackPeriod: "9-15 months",
    topValueDriver: "Network optimization and customer experience"
  }
];

const relatedResources = [
  {
    title: "Building a Scalable AI Strategy",
    description: "Learn how to develop and execute an AI strategy that aligns with business goals and scales effectively.",
    link: "/insights/scalable-ai-strategy"
  },
  {
    title: "Enterprise AI Maturity Model",
    description: "A structured model to assess your organization's AI maturity and build a roadmap for advancing capabilities.",
    link: "/insights/ai-maturity-model"
  },
  {
    title: "Operationalizing AI",
    description: "Learn how to bridge the gap between AI proof-of-concepts and enterprise-wide adoption.",
    link: "/insights/operationalizing-ai"
  }
];

export default EconomicsOfAI;