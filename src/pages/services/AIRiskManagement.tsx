import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  ShieldCheck,
  AlertTriangle,
  Lock,
  Scale,
  Users,
  UserX,
  Globe,
  Cog,
  FileText,
  ClipboardCheck,
  GraduationCap,
  Layers,
  Search,
  CheckCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AIRiskManagement = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Risk Management</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Turning AI ambition into governed, trusted, and scalable impact
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
              <h2 className="text-3xl font-bold mb-6">Why AI Risk Matters Now</h2>
              <p className="text-lg text-gray-600 mb-6">
                AI is no longer a future technology. It is already shaping how organizations
                make decisions, serve customers, automate operations, and compete. The more
                important question is no longer “How can we use AI?”, but “How can we use AI
                responsibly, safely, and strategically without creating new risks we do not
                understand?”
              </p>
              <p className="text-lg text-gray-600 mb-6">
                AI risk is not one single problem. It is a system of interconnected risks
                across people, data, technology, governance, security, ethics, compliance, and
                organizational readiness — risks that emerge before deployment, during model
                design and vendor selection, and after deployment as users and customers begin
                relying on AI outputs.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Organizations that treat AI risk as a late-stage compliance issue will
                struggle. Organizations that treat AI risk as a strategic capability will lead.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link to="/contact">
                  <Button className="w-full sm:w-auto">Schedule a Consultation</Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Explore All Services
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
                alt="AI Risk Management"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kanz.ai AI Risk Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our AI Risk Services</h2>
            <p className="text-xl text-gray-600">
              Practical AI risk capabilities across strategy, governance, architecture, and adoption
            </p>
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
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seven Major Domains of AI Risk */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Seven Major Domains of AI Risk</h2>
            <p className="text-xl text-gray-600">
              A structured view that moves organizations from vague concern to practical action
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {riskDomains.map((domain, index) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-pwc-orange"
              >
                <div className="flex items-start mb-3">
                  <div className="bg-orange-100 rounded-full p-3 mr-4 flex-shrink-0">
                    <domain.icon className="h-6 w-6 text-pwc-orange" />
                  </div>
                  <h3 className="text-xl font-semibold mt-2">
                    {index + 1}. {domain.title}
                  </h3>
                </div>
                <p className="text-gray-600">{domain.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* From Risk Awareness to Risk Governance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">From Risk Awareness to Risk Governance</h2>
            <p className="text-xl text-gray-600">
              A mature AI risk program is not a one-time checklist. It is a living capability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <div className="space-y-8">
                {governanceProgram.map((item, index) => (
                  <div key={item.title} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-pwc-orange text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative hidden md:block order-1 md:order-2"
            >
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800"
                alt="AI Risk Governance"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who Needs AI Risk Governance */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Who Needs AI Risk Governance?</h2>
            <p className="text-xl text-gray-600">
              The more AI touches customers, employees, sensitive data, or regulated processes,
              the more important AI risk governance becomes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {audiences.map((audience, index) => (
              <motion.div
                key={audience}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-sm p-5 flex items-start"
              >
                <CheckCircle className="h-5 w-5 text-pwc-orange mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{audience}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Principle */}
      <section className="py-20 bg-pwc-gray text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Strategic Principle</h2>
          <p className="text-xl mb-6 leading-relaxed">
            AI should not be adopted blindly. It should not be feared blindly either. The right
            approach is <span className="text-pwc-orange font-semibold">disciplined adoption</span>:
            move fast where the risk is low, move carefully where the risk is high, and avoid
            deployment where the risk cannot yet be controlled.
          </p>
          <p className="text-xl text-gray-300">
            AI risk is not a barrier to innovation. It is the foundation of sustainable innovation.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Build AI That Can Be Trusted</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Whether you are exploring AI, scaling pilots, deploying systems, evaluating vendors,
            or preparing for regulatory scrutiny, Kanz.ai can help you understand your exposure
            and build the right safeguards.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg">Assess Your AI Risk Exposure</Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg">
                Explore All Services
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
    title: 'AI Risk Assessment',
    description:
      'Review current and planned AI initiatives, identify risk exposure, classify use cases, and produce a prioritized risk profile.',
    icon: Search,
  },
  {
    title: 'AI Governance Framework',
    description:
      'Design governance structures, approval workflows, policy layers, operating models, and accountability mechanisms.',
    icon: Shield,
  },
  {
    title: 'AI Readiness & Maturity Review',
    description:
      'Assess whether your organization has the data, infrastructure, talent, governance, security, and change management capabilities for responsible AI adoption.',
    icon: ClipboardCheck,
  },
  {
    title: 'Use Case Risk Classification',
    description:
      'Categorize AI use cases by business value, risk level, complexity, regulatory exposure, and implementation readiness.',
    icon: Layers,
  },
  {
    title: 'Responsible AI Policy Design',
    description:
      'Create practical AI policies for employees, executives, technical teams, vendors, and operational units.',
    icon: FileText,
  },
  {
    title: 'AI Vendor & Tool Evaluation',
    description:
      'Evaluate AI vendors, platforms, model providers, integrations, and procurement risks before they reach production.',
    icon: ShieldCheck,
  },
  {
    title: 'AI Safety & Control Architecture',
    description:
      'Design technical and operational safeguards for high-impact AI systems — monitoring, auditability, access control, and human review.',
    icon: Lock,
  },
  {
    title: 'Training & Executive Briefings',
    description:
      'Help leadership teams, boards, managers, and operational staff understand AI risk in practical business language.',
    icon: GraduationCap,
  },
];

const riskDomains = [
  {
    title: 'Discrimination & Toxicity',
    description:
      'AI learns from data that reflects real-world biases and inequalities. Without governance, automated decisions can produce unfair treatment, misrepresentation, or unequal outcomes — especially in healthcare, banking, recruitment, education, public services, and legal decision support.',
    icon: Scale,
  },
  {
    title: 'Privacy & Security',
    description:
      'AI systems can memorize sensitive data, expose confidential records, or be attacked through prompt injection, data poisoning, and insecure plugins. Privacy and security are foundations of trust — not optional safeguards.',
    icon: Lock,
  },
  {
    title: 'Misinformation & Loss of Trust',
    description:
      'Generative AI can produce fluent, confident content that is wrong. A single hallucinated claim can disrupt operations; repeated unreliable outputs can destroy trust in AI adoption altogether. Verification, grounding, and human review are essential.',
    icon: AlertTriangle,
  },
  {
    title: 'Malicious Actors & Misuse',
    description:
      'AI lowers the cost of sophistication for fraud, scams, impersonation, deepfakes, automated phishing, and synthetic identity attacks. Organizations must understand how AI can be used against them, their customers, and their infrastructure.',
    icon: UserX,
  },
  {
    title: 'Human-Computer Interaction & Overreliance',
    description:
      'The most underestimated AI risk is not visible failure — it is humans trusting AI too much. As interfaces become more natural, governance must define where AI assists, where humans must decide, and where escalation is required.',
    icon: Users,
  },
  {
    title: 'Socioeconomic & Environmental Risk',
    description:
      'AI reshapes labor markets, knowledge work, power structures, and resource consumption. Adoption decisions must consider long-term resilience, workforce transformation, vendor dependency, and strategic independence — not only efficiency.',
    icon: Globe,
  },
  {
    title: 'AI System Safety, Failures & Limitations',
    description:
      'AI systems fail in ways traditional software does not — inconsistent outputs, unfamiliar conditions, optimization for the wrong goal, weak interpretability. Higher-stakes domains require classification, validation, and human oversight before scale.',
    icon: Cog,
  },
];

const governanceProgram = [
  {
    title: 'AI Inventory',
    description:
      'A clear map of where AI is being used, by whom, for what purpose, with which data, and through which vendors.',
  },
  {
    title: 'Risk Classification',
    description:
      'A structured method for categorizing each AI use case by impact, sensitivity, autonomy, data exposure, and decision criticality.',
  },
  {
    title: 'Governance Model',
    description:
      'Defined roles, responsibilities, approval workflows, escalation paths, and accountability mechanisms.',
  },
  {
    title: 'Technical Controls',
    description:
      'Testing, monitoring, access control, security review, data protection, model evaluation, prompt governance, and output validation.',
  },
  {
    title: 'Human Oversight',
    description:
      'Clear boundaries for when AI may recommend, when it may automate, and when human approval is mandatory.',
  },
  {
    title: 'Policy & Compliance Alignment',
    description:
      'Alignment with internal policies, sector regulations, ethical commitments, procurement rules, and emerging AI governance standards.',
  },
  {
    title: 'Continuous Monitoring',
    description:
      'Ongoing review of AI performance, user behavior, incidents, model drift, misuse, and changing external risks.',
  },
];

const audiences = [
  'Healthcare providers and digital health programs',
  'Government entities and public sector organizations',
  'Financial institutions and insurance companies',
  'Legal, compliance, and professional services firms',
  'Real estate platforms and customer-data-driven businesses',
  'Education and training institutions',
  'Enterprises adopting AI assistants, automation, or decision support',
  'Startups building AI-native products',
  'Boards and executive teams responsible for digital transformation',
];

export default AIRiskManagement;
