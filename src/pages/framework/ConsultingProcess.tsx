import React from 'react';
import { motion } from 'framer-motion';
import { Brain, CheckCircle, Target, Users, FileText, Lightbulb, Workflow, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ConsultingProcess = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Consulting Process</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Our proven methodology for delivering exceptional AI and digital transformation solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold mb-4">Our Consulting Approach</h2>
            <p className="text-gray-700 mb-6">
              At Kanz.ai, we follow a structured, collaborative consulting methodology designed to deliver maximum value to our clients. Our approach combines deep technical expertise with business acumen to ensure that our solutions address your specific challenges and opportunities.
            </p>
            <p className="text-gray-700 mb-6">
              We believe in building long-term partnerships with our clients, working closely with your team throughout the engagement to ensure knowledge transfer, sustainable results, and continuous improvement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link to="/contact">
                <Button className="w-full sm:w-auto">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="w-full sm:w-auto">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Phases */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Consulting Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive, end-to-end approach to delivering successful AI and digital transformation solutions
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gray-200 transform -translate-x-1/2"></div>
            {consultingPhases.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative mb-16 ${
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
                      <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                      <p className="text-gray-600 mb-4">{phase.description}</p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-pwc-orange mb-2">Key Activities:</h4>
                        <ul className="space-y-2">
                          {phase.activities.map((activity, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-pwc-orange mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-pwc-orange mb-2">Deliverables:</h4>
                        <ul className="space-y-2">
                          {phase.deliverables.map((deliverable, i) => (
                            <li key={i} className="flex items-start">
                              <FileText className="h-5 w-5 text-pwc-orange mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Differentiators */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Kanz.ai</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets our consulting approach apart
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((differentiator, index) => (
              <motion.div
                key={differentiator.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="bg-orange-100 rounded-full p-3 inline-block mb-4">
                  <differentiator.icon className="h-8 w-8 text-pwc-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{differentiator.title}</h3>
                <p className="text-gray-600">{differentiator.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What our clients say about working with us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-3 mr-4 flex-shrink-0">
                    <Users className="h-6 w-6 text-pwc-orange" />
                  </div>
                  <div>
                    <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.title}, {testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-pwc-gray text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Transformation Journey?</h2>
          <p className="text-xl mb-8">
            Contact our team of experts to discuss how our consulting approach can help you achieve your AI and digital transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-white text-pwc-gray hover:bg-gray-100 w-full sm:w-auto">
                Schedule a Consultation
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const consultingPhases = [
  {
    title: "Discovery",
    description: "Understanding your business, challenges, and objectives to establish a foundation for our engagement",
    activities: [
      "Initial stakeholder interviews",
      "Business objective alignment",
      "Current state assessment",
      "Challenge and opportunity identification",
      "Scope definition and refinement"
    ],
    deliverables: [
      "Discovery report",
      "Initial findings presentation",
      "Engagement scope document",
      "High-level opportunity assessment"
    ]
  },
  {
    title: "Assessment",
    description: "Detailed analysis of your current capabilities, readiness, and specific requirements",
    activities: [
      "AI maturity assessment",
      "AI readiness evaluation",
      "Data landscape analysis",
      "Technical infrastructure assessment",
      "Skills and organizational assessment"
    ],
    deliverables: [
      "Comprehensive assessment report",
      "Gap analysis",
      "Benchmark comparison",
      "Prioritized opportunity list"
    ]
  },
  {
    title: "Strategy Development",
    description: "Creating a tailored strategy and roadmap aligned with your business objectives",
    activities: [
      "AI strategy development",
      "Use case prioritization",
      "Capability building planning",
      "Technology selection",
      "Implementation roadmap creation"
    ],
    deliverables: [
      "AI strategy document",
      "Implementation roadmap",
      "Business case and ROI analysis",
      "Resource and capability plan"
    ]
  },
  {
    title: "Implementation",
    description: "Executing the strategy through pilot projects, solution development, and organizational change",
    activities: [
      "Solution design and development",
      "Pilot implementation",
      "Change management",
      "Training and knowledge transfer",
      "Integration with existing systems"
    ],
    deliverables: [
      "Working AI solutions",
      "Implementation documentation",
      "Training materials",
      "Integration specifications"
    ]
  },
  {
    title: "Support & Optimization",
    description: "Ensuring sustainable success through ongoing support, monitoring, and continuous improvement",
    activities: [
      "Performance monitoring",
      "Solution optimization",
      "Capability enhancement",
      "Knowledge transfer",
      "Continuous improvement planning"
    ],
    deliverables: [
      "Performance reports",
      "Optimization recommendations",
      "Support documentation",
      "Continuous improvement roadmap"
    ]
  }
];

const differentiators = [
  {
    title: "Business-First Approach",
    description: "We focus on business outcomes, not just technology implementation. Our solutions are designed to deliver measurable value aligned with your strategic objectives.",
    icon: Target
  },
  {
    title: "Deep Technical Expertise",
    description: "Our team brings together decades of experience in AI, ML, and digital transformation technologies, ensuring technically sound and innovative solutions.",
    icon: Brain
  },
  {
    title: "Collaborative Partnership",
    description: "We work as an extension of your team, ensuring knowledge transfer, capability building, and sustainable success beyond our engagement.",
    icon: Users
  },
  {
    title: "Pragmatic Innovation",
    description: "We balance innovation with practicality, focusing on solutions that can be implemented effectively and deliver real-world results.",
    icon: Lightbulb
  },
  {
    title: "End-to-End Capabilities",
    description: "From strategy to implementation and beyond, we provide comprehensive support throughout your AI and digital transformation journey.",
    icon: Workflow
  },
  {
    title: "Measurable Results",
    description: "We define clear success metrics and track progress throughout the engagement, ensuring accountability and demonstrable ROI.",
    icon: BarChart
  }
];

const testimonials = [
  {
    quote: "Kanz.ai's structured consulting approach helped us navigate the complexities of AI implementation with confidence. Their team's expertise and collaborative style ensured that we not only achieved our immediate objectives but also built the capabilities to sustain and expand our AI initiatives.",
    name: "Sarah Johnson",
    title: "CIO",
    company: "Global Financial Services"
  },
  {
    quote: "What sets Kanz.ai apart is their ability to translate complex technical concepts into business value. Their assessment of our AI readiness was eye-opening and provided a clear roadmap for improvement. The results have exceeded our expectations.",
    name: "Michael Chen",
    title: "Head of Digital Transformation",
    company: "Manufacturing Enterprise"
  },
  {
    quote: "Working with Kanz.ai has transformed how we approach AI. Their methodology is thorough yet flexible, and their focus on knowledge transfer has enabled our team to take ownership of our AI initiatives with confidence.",
    name: "Priya Patel",
    title: "VP of Innovation",
    company: "Healthcare Provider"
  },
  {
    quote: "The Kanz.ai team delivered exceptional value through their consulting process. Their ability to understand our business challenges and translate them into effective AI solutions has been instrumental in our digital transformation journey.",
    name: "David Rodriguez",
    title: "Chief Strategy Officer",
    company: "Retail Corporation"
  }
];

export default ConsultingProcess;