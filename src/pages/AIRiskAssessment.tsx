import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldAlert,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const DOMAINS = [
  'Discrimination & Toxicity',
  'Privacy & Security',
  'Misinformation',
  'Malicious Actors & Misuse',
  'Human-Computer Interaction',
  'Socioeconomic & Environmental',
  'AI System Safety, Failures & Limitations',
] as const;

type Domain = (typeof DOMAINS)[number];

type RiskValue = 0 | 1 | 2 | 3 | 4;
type RiskOption = { value: RiskValue; text: string };
type CausalOption = { value: string; text: string };

type RiskQuestion = {
  id: string;
  type: 'risk';
  domain: Domain;
  question: string;
  options: RiskOption[];
};

type CausalQuestion = {
  id: string;
  type: 'causal';
  question: string;
  options: CausalOption[];
};

type Question = RiskQuestion | CausalQuestion;

type Answers = Record<string, number | string>;

const riskOptions: RiskOption[] = [
  { value: 0, text: 'Not applicable — we do not use AI in this area' },
  { value: 1, text: 'Low risk — controls are defined, documented, and reviewed' },
  { value: 2, text: 'Moderate risk — some controls exist but are incomplete or informal' },
  { value: 3, text: 'High risk — AI is used with limited governance or unclear ownership' },
  { value: 4, text: 'Critical risk — AI is used in sensitive areas with weak controls or no monitoring' },
];

const causalOptions: Record<'who' | 'when' | 'intent', CausalOption[]> = {
  who: [
    { value: 'humans', text: 'Mostly human users' },
    { value: 'system', text: 'Mostly AI system behavior' },
    { value: 'both', text: 'Both humans and AI systems' },
    { value: 'unsure', text: 'Not sure' },
  ],
  when: [
    { value: 'before', text: 'Before deployment' },
    { value: 'after', text: 'After deployment' },
    { value: 'both', text: 'Both before and after deployment' },
    { value: 'unsure', text: 'Not sure' },
  ],
  intent: [
    { value: 'intentional', text: 'Mostly intentional misuse' },
    { value: 'unintentional', text: 'Mostly unintentional failure' },
    { value: 'both', text: 'Both intentional and unintentional' },
    { value: 'unsure', text: 'Not sure' },
  ],
};

const r = (id: string, domain: Domain, question: string): RiskQuestion => ({
  id,
  type: 'risk',
  domain,
  question,
  options: riskOptions,
});

const questions: Question[] = [
  // Section 1: Discrimination & Toxicity
  r('q1', 'Discrimination & Toxicity',
    'Do your AI systems influence decisions about customers, employees, applicants, patients, students, tenants, citizens, or other individuals?'),
  r('q2', 'Discrimination & Toxicity',
    'Do you test AI outputs for unfair treatment across gender, nationality, age, language, income level, disability, ethnicity, or other sensitive attributes?'),
  r('q3', 'Discrimination & Toxicity',
    'Can your AI tools generate or expose users to harmful, offensive, abusive, illegal, unsafe, or inappropriate content?'),
  r('q4', 'Discrimination & Toxicity',
    'Do you monitor whether AI systems perform less accurately for specific user groups, languages, regions, or data segments?'),
  r('q5', 'Discrimination & Toxicity',
    'Does your organization have a defined process for reporting, investigating, and correcting biased or harmful AI outputs?'),

  // Section 2: Privacy & Security
  r('q6', 'Privacy & Security',
    'Do employees use public or third-party AI tools with internal documents, customer data, legal material, financial records, or confidential information?'),
  r('q7', 'Privacy & Security',
    'Do you have a clear policy defining what data may and may not be entered into AI systems?'),
  r('q8', 'Privacy & Security',
    'Are AI systems integrated with internal databases, CRMs, document systems, email, cloud storage, or operational platforms?'),
  r('q9', 'Privacy & Security',
    'Have you tested your AI systems against prompt injection, data leakage, unauthorized access, or manipulation attempts?'),
  r('q10', 'Privacy & Security',
    'Do you maintain logs, access controls, audit trails, and monitoring for AI interactions involving sensitive data?'),

  // Section 3: Misinformation
  r('q11', 'Misinformation',
    'Do AI tools generate reports, summaries, legal drafts, medical content, financial analysis, strategy documents, or customer-facing communication?'),
  r('q12', 'Misinformation',
    'Are users required to verify AI generated claims before relying on them?'),
  r('q13', 'Misinformation',
    'Are AI outputs linked to sources, evidence, documents, or approved knowledge bases?'),
  r('q14', 'Misinformation',
    'Do you have controls to prevent AI generated misinformation from reaching customers, executives, regulators, or public channels?'),
  r('q15', 'Misinformation',
    'Do you track incidents where AI produced inaccurate, fabricated, outdated, or misleading information?'),

  // Section 4: Malicious Actors & Misuse
  r('q16', 'Malicious Actors & Misuse',
    'Could AI tools be used in your organization to impersonate employees, executives, customers, suppliers, or partners?'),
  r('q17', 'Malicious Actors & Misuse',
    'Do you have safeguards against AI generated phishing, fraud, scams, social engineering, or synthetic identity risks?'),
  r('q18', 'Malicious Actors & Misuse',
    'Could your AI systems be manipulated by external users to produce harmful, unauthorized, or policy-violating outputs?'),
  r('q19', 'Malicious Actors & Misuse',
    'Do you review AI generated content before it is sent to customers, investors, regulators, or the public?'),
  r('q20', 'Malicious Actors & Misuse',
    'Do you have an incident response plan for AI misuse, deepfakes, fake content, fraud, or automated manipulation?'),

  // Section 5: Human-Computer Interaction
  r('q21', 'Human-Computer Interaction',
    'Do employees or customers treat AI outputs as authoritative advice rather than suggestions?'),
  r('q22', 'Human-Computer Interaction',
    'Are there clear boundaries defining which decisions AI may support and which decisions require human approval?'),
  r('q23', 'Human-Computer Interaction',
    'Do users receive training on AI limitations, hallucinations, bias, privacy, and appropriate use?'),
  r('q24', 'Human-Computer Interaction',
    'Are there high-impact workflows where AI recommendations are accepted without meaningful human review?'),
  r('q25', 'Human-Computer Interaction',
    'Could AI use reduce human expertise, professional judgment, accountability, or decision quality over time?'),

  // Section 6: Socioeconomic & Environmental
  r('q26', 'Socioeconomic & Environmental',
    'Could AI automation significantly change employee roles, job quality, workload, or required skills?'),
  r('q27', 'Socioeconomic & Environmental',
    'Do you have a workforce transition plan for teams affected by AI automation?'),
  r('q28', 'Socioeconomic & Environmental',
    'Are you dependent on a small number of AI vendors, platforms, or model providers for critical business functions?'),
  r('q29', 'Socioeconomic & Environmental',
    'Do you consider environmental cost, compute usage, infrastructure demand, or sustainability when adopting AI systems?'),
  r('q30', 'Socioeconomic & Environmental',
    'Does your AI strategy consider long-term organizational resilience, not only short-term productivity?'),

  // Section 7: AI System Safety, Failures & Limitations
  r('q31', 'AI System Safety, Failures & Limitations',
    'Are AI systems tested before deployment for reliability, robustness, edge cases, and failure behavior?'),
  r('q32', 'AI System Safety, Failures & Limitations',
    'Do you know which AI systems are being used across the organization and who owns each system?'),
  r('q33', 'AI System Safety, Failures & Limitations',
    'Can you explain how your AI systems make or support decisions in high-impact use cases?'),
  r('q34', 'AI System Safety, Failures & Limitations',
    'Do you monitor deployed AI systems for drift, declining performance, unsafe outputs, or unexpected behavior?'),
  r('q35', 'AI System Safety, Failures & Limitations',
    'Are there clear shutdown, rollback, escalation, and human-override procedures for AI systems?'),

  // Causal questions
  {
    id: 'c1',
    type: 'causal',
    question: 'Who is most likely to cause AI risk in your organization?',
    options: causalOptions.who,
  },
  {
    id: 'c2',
    type: 'causal',
    question: 'When are most AI risks likely to appear?',
    options: causalOptions.when,
  },
  {
    id: 'c3',
    type: 'causal',
    question: 'Are AI risks more likely to be intentional or unintentional?',
    options: causalOptions.intent,
  },
];

const domainAnalysis: Record<Domain, string> = {
  'Discrimination & Toxicity':
    'This score reflects the extent to which AI may create biased, harmful, unequal, or toxic outcomes. A high score means fairness testing, harmful-content controls, and reporting mechanisms should be strengthened.',
  'Privacy & Security':
    'This score reflects the risk of sensitive data exposure, insecure AI integrations, weak access control, prompt injection, and unauthorized use of confidential information.',
  Misinformation:
    'This score reflects whether AI-generated content may mislead decision makers, customers, employees, or external stakeholders. High scores require source grounding, fact checking, and human review.',
  'Malicious Actors & Misuse':
    'This score reflects exposure to AI-enabled fraud, impersonation, manipulation, disinformation, cyberattacks, and misuse by internal or external actors.',
  'Human-Computer Interaction':
    'This score reflects overreliance, unsafe delegation, lack of user training, and weak human oversight in AI-assisted decisions.',
  'Socioeconomic & Environmental':
    'This score reflects workforce disruption, vendor dependency, sustainability concerns, power concentration, and long-term organizational resilience.',
  'AI System Safety, Failures & Limitations':
    'This score reflects technical reliability, robustness, transparency, monitoring, failure management, and lifecycle control of AI systems.',
};

type RiskBand = 'Low' | 'Moderate' | 'High' | 'Critical';

const getOverallBand = (score: number): RiskBand => {
  if (score <= 30) return 'Low';
  if (score <= 65) return 'Moderate';
  if (score <= 100) return 'High';
  return 'Critical';
};

const overallBandConfig: Record<RiskBand, {
  title: string;
  summary: string;
  actions: string[];
  color: string;
}> = {
  Low: {
    title: 'Low AI Risk Exposure',
    summary:
      'Your organization appears to have limited AI exposure or relatively controlled AI usage. The next step is to formalize governance before AI adoption expands.',
    actions: [
      'Create an AI usage policy',
      'Maintain an AI system inventory',
      'Review future AI use cases before deployment',
    ],
    color: 'text-green-600',
  },
  Moderate: {
    title: 'Moderate AI Risk Exposure',
    summary:
      'Your organization has meaningful AI exposure, but the risk appears manageable if governance is implemented early.',
    actions: [
      'Classify AI use cases by risk level',
      'Define approval workflows',
      'Train employees on responsible AI use',
      'Review vendors and data practices',
    ],
    color: 'text-yellow-600',
  },
  High: {
    title: 'High AI Risk Exposure',
    summary:
      'Your organization is exposed to significant AI risks. AI may already be affecting sensitive workflows, customer interactions, data protection, or decision quality.',
    actions: [
      'Conduct a formal AI risk assessment',
      'Establish an AI governance committee',
      'Implement human oversight for high-impact use cases',
      'Review privacy, security, and compliance exposure',
      'Monitor AI performance after deployment',
    ],
    color: 'text-pwc-orange',
  },
  Critical: {
    title: 'Critical AI Risk Exposure',
    summary:
      'Your organization may be using AI in sensitive or high-impact areas without adequate governance. This creates serious exposure across operational, legal, security, reputational, and strategic dimensions.',
    actions: [
      'Pause or restrict high-risk AI deployments until reviewed',
      'Perform an urgent AI risk and governance audit',
      'Define ownership for all AI systems',
      'Establish mandatory review for sensitive AI use cases',
      'Implement monitoring, incident response, and escalation controls',
    ],
    color: 'text-red-600',
  },
};

type DomainStatus = 'Controlled' | 'Emerging Risk' | 'High Risk' | 'Critical Risk';

const getDomainStatus = (score: number): DomainStatus => {
  if (score <= 5) return 'Controlled';
  if (score <= 10) return 'Emerging Risk';
  if (score <= 15) return 'High Risk';
  return 'Critical Risk';
};

const domainStatusColor: Record<DomainStatus, string> = {
  Controlled: 'text-green-600 bg-green-50 border-green-200',
  'Emerging Risk': 'text-yellow-700 bg-yellow-50 border-yellow-200',
  'High Risk': 'text-pwc-orange bg-orange-50 border-orange-200',
  'Critical Risk': 'text-red-600 bg-red-50 border-red-200',
};

const buildCausalDiagnosis = (answers: Answers): string => {
  const who = String(answers.c1 ?? '');
  const when = String(answers.c2 ?? '');
  const intent = String(answers.c3 ?? '');

  const whoText: Record<string, string> = {
    humans: 'mostly from human use of AI tools',
    system: 'mostly from AI system behavior itself',
    both: 'from both human use and AI system behavior',
    unsure: 'from a combination of human and system factors that need further investigation',
  };
  const whenText: Record<string, string> = {
    before: 'before deployment — during model design, vendor selection, or data preparation',
    after: 'after deployment, when employees, customers, or automated systems interact with AI in real operational conditions',
    both: 'both before and after deployment, requiring full-lifecycle controls',
    unsure: 'across the AI lifecycle, requiring broad-spectrum governance',
  };
  const intentText: Record<string, string> = {
    intentional:
      'Controls should focus on access management, abuse detection, identity verification, and incident response.',
    unintentional:
      'Controls should focus on testing, monitoring, transparency, and human oversight.',
    both:
      'A layered control approach is required, addressing both intentional misuse and unintentional system failure.',
    unsure:
      'Broad governance is required, covering both intentional misuse and unintentional failure modes.',
  };

  if (!who || !when || !intent) {
    return 'Complete the three causal questions for a tailored diagnosis of where your AI risks originate.';
  }

  return `Your risk profile suggests AI risk is likely to emerge ${whoText[who] ?? whoText.unsure}. The highest exposure appears ${whenText[when] ?? whenText.unsure}. ${intentText[intent] ?? intentText.unsure} Kanz.ai recommends combining pre-deployment governance with post-deployment monitoring tailored to this profile.`;
};

const fixedPriorities: { title: string; description: string }[] = [
  {
    title: 'AI governance and ownership',
    description: 'Define who approves, monitors, and controls AI systems.',
  },
  {
    title: 'Data protection and secure AI usage',
    description: 'Prevent sensitive data from entering unmanaged AI tools.',
  },
  {
    title: 'Human oversight and validation',
    description: 'Ensure AI outputs are reviewed before they influence important decisions.',
  },
];

const AIRiskAssessment = () => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [showReport, setShowReport] = useState(false);

  const totalQuestions = questions.length;
  const current = questions[currentQuestion];
  const isAnswered = answers[current.id] !== undefined;

  const handleAnswer = (id: string, value: number | string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowReport(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) setCurrentQuestion((prev) => prev - 1);
  };

  const handleRestart = () => {
    setStarted(false);
    setShowReport(false);
    setCurrentQuestion(0);
    setAnswers({});
  };

  const computeScores = () => {
    const byDomain: Record<Domain, number> = {
      'Discrimination & Toxicity': 0,
      'Privacy & Security': 0,
      Misinformation: 0,
      'Malicious Actors & Misuse': 0,
      'Human-Computer Interaction': 0,
      'Socioeconomic & Environmental': 0,
      'AI System Safety, Failures & Limitations': 0,
    };
    let total = 0;
    for (const q of questions) {
      if (q.type !== 'risk') continue;
      const value = Number(answers[q.id] ?? 0);
      byDomain[q.domain] += value;
      total += value;
    }
    return { total, byDomain };
  };

  const renderRadar = (byDomain: Record<Domain, number>) => {
    const data = {
      labels: DOMAINS.map((d) => d),
      datasets: [
        {
          label: 'Domain Risk Score',
          data: DOMAINS.map((d) => byDomain[d]),
          backgroundColor: 'rgba(237, 156, 49, 0.24)',
          borderColor: 'rgba(237, 156, 49, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(237, 156, 49, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(237, 156, 49, 1)',
        },
      ],
    };
    const options = {
      scales: {
        r: {
          angleLines: { display: true, color: 'rgba(245, 241, 234, 0.16)' },
          grid: { color: 'rgba(245, 241, 234, 0.10)' },
          suggestedMin: 0,
          suggestedMax: 20,
          ticks: {
            stepSize: 5,
            color: 'rgba(245, 241, 234, 0.55)',
            backdropColor: 'transparent',
          },
          pointLabels: {
            color: 'rgba(245, 241, 234, 0.85)',
            font: { family: 'JetBrains Mono', size: 11 },
          },
        },
      },
      plugins: { legend: { display: false } },
    };
    return (
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-bold mb-4 text-center">Domain Risk Overview (max 20 per domain)</h3>
        <div className="w-full max-w-2xl mx-auto">
          <Radar data={data} options={options} />
        </div>
      </div>
    );
  };

  const renderReport = () => {
    const { total, byDomain } = computeScores();
    const band = getOverallBand(total);
    const bandCfg = overallBandConfig[band];

    const sortedDomains = [...DOMAINS].sort((a, b) => byDomain[b] - byDomain[a]);
    const topThree = sortedDomains.slice(0, 3);

    const causalText = buildCausalDiagnosis(answers);

    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-2 text-center">Your AI Risk Profile</h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Your assessment shows your organization's current AI risk exposure across seven major
            risk domains. This result is a strategic diagnostic — not a legal or technical audit —
            designed to help leadership identify where immediate attention is required.
          </p>

          {/* Overall Score */}
          <div className="mb-12 text-center">
            <div className="inline-block bg-orange-100 rounded-full p-6 mb-4">
              <ShieldAlert className="h-12 w-12 text-pwc-orange" />
            </div>
            <h3 className="text-2xl font-bold mb-2">AI Risk Exposure Score</h3>
            <div className="text-5xl font-bold text-pwc-orange mb-2">
              {total} <span className="text-2xl text-gray-500">/ 140</span>
            </div>
            <div className={`text-2xl font-semibold ${bandCfg.color}`}>{bandCfg.title}</div>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">{bandCfg.summary}</p>
          </div>

          {/* Recommended actions for band */}
          <div className="bg-gray-50 rounded-lg p-6 mb-12">
            <h3 className="text-xl font-bold mb-4">Recommended Action</h3>
            <ul className="space-y-2">
              {bandCfg.actions.map((action) => (
                <li key={action} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-pwc-orange mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{action}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Radar Chart */}
          {renderRadar(byDomain)}

          {/* Domain breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {DOMAINS.map((domain) => {
              const score = byDomain[domain];
              const status = getDomainStatus(score);
              return (
                <div key={domain} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold pr-2">{domain}</h4>
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded border ${domainStatusColor[status]}`}
                    >
                      {status}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-pwc-orange mb-2">
                    {score} <span className="text-base text-gray-500">/ 20</span>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                    <div
                      style={{ width: `${(score / 20) * 100}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pwc-orange transition-all duration-500"
                    />
                  </div>
                  <p className="text-sm text-gray-600">{domainAnalysis[domain]}</p>
                </div>
              );
            })}
          </div>

          {/* Causal Diagnosis */}
          <div className="bg-white border-l-4 border-pwc-orange shadow-md rounded-lg p-6 mb-12">
            <h3 className="text-xl font-bold mb-3">Causal Risk Diagnosis</h3>
            <p className="text-gray-700">{causalText}</p>
          </div>

          {/* Priority Matrix */}
          <div className="bg-gray-50 rounded-lg p-6 mb-12">
            <h3 className="text-xl font-bold mb-4">Your Top Three AI Risk Areas</h3>
            <ol className="list-decimal list-inside space-y-2 mb-8">
              {topThree.map((domain) => (
                <li key={domain} className="text-gray-700">
                  <span className="font-semibold">{domain}</span>
                  <span className="text-gray-500 ml-2">
                    ({byDomain[domain]}/20 — {getDomainStatus(byDomain[domain])})
                  </span>
                </li>
              ))}
            </ol>

            <h3 className="text-xl font-bold mb-4">Recommended Priority</h3>
            <p className="text-gray-600 mb-4">Based on your answers, your organization should prioritize:</p>
            <div className="space-y-3">
              {fixedPriorities.map((p, i) => (
                <div key={p.title} className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-pwc-orange text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">{p.title}</div>
                    <div className="text-gray-600 text-sm">{p.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advisory CTA */}
          <div className="bg-pwc-gray text-white rounded-lg p-8 mb-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Turn This Assessment Into an AI Risk Action Plan</h3>
            <p className="mb-6 max-w-2xl mx-auto text-gray-200">
              Your result shows where AI risk may already exist inside your organization. Kanz.ai
              can help you convert this diagnostic into a practical AI Risk and Governance
              Framework — covering risk profile review, high-priority exposures, use case mapping,
              control design, and a roadmap.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-pwc-orange text-white hover:bg-[#b33f02]">
                Book an AI Risk Consultation
              </Button>
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => window.print()}
              className="bg-pwc-gray text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors"
            >
              Download / Print Report
            </button>
            <button
              onClick={handleRestart}
              className="bg-pwc-orange text-white px-6 py-2 rounded-md hover:bg-[#b33f02] transition-colors"
            >
              Start New Assessment
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Intro screen
  if (!started && !showReport) {
    return (
      <div className="pt-16">
        <section className="bg-gradient-to-r from-pwc-orange to-[#b33f02] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Risk Self-Assessment</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Assess your organization's exposure to AI risk across governance, privacy, security,
                misinformation, misuse, human oversight, and system safety.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700">
                  Artificial intelligence can create significant business value, but it also
                  introduces new categories of operational, legal, ethical, security, and strategic
                  risk.
                </p>
                <p className="text-lg text-gray-700">
                  This assessment helps your organization understand where AI risk may already
                  exist, where governance is weak, and which areas require immediate attention
                  before scaling AI adoption.
                </p>
                <p className="text-lg text-gray-700 mb-2">
                  The questionnaire is based on a structured AI risk taxonomy covering:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 list-disc list-inside text-gray-700 mb-6">
                  {DOMAINS.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <p className="text-lg text-gray-700">
                  At the end you will receive an <strong>AI Risk Exposure Score</strong>, a
                  domain-level risk profile, a causal diagnosis, your top three priority areas, and
                  recommended next steps.
                </p>
              </div>

              <div className="mt-8 flex items-center justify-center text-gray-600">
                <Clock className="h-5 w-5 mr-2 text-pwc-orange" />
                <span>Estimated time: 7 to 10 minutes — 35 risk questions + 3 follow-ups</span>
              </div>

              <div className="mt-8 flex justify-center">
                <Button size="lg" onClick={() => setStarted(true)}>
                  Start AI Risk Assessment
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Report screen
  if (showReport) {
    return (
      <div className="pt-16">
        <section className="bg-gradient-to-r from-pwc-orange to-[#b33f02] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Your AI Risk Profile</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Domain-level breakdown, causal diagnosis, and priority recommendations
              </p>
            </motion.div>
          </div>
        </section>
        <section className="py-20">{renderReport()}</section>
      </div>
    );
  }

  // Question screen
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-r from-pwc-orange to-[#b33f02] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Risk Self-Assessment</h1>
            <p className="text-xl max-w-3xl mx-auto">
              {current.type === 'risk' ? `Section: ${current.domain}` : 'Risk causation profile'}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-pwc-orange rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
                />
              </div>
              <div className="text-center mt-2 text-gray-600">
                Question {currentQuestion + 1} of {totalQuestions}
              </div>
            </div>

            {/* Question */}
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6">{current.question}</h2>
              <div className="space-y-4">
                {current.options.map((option) => {
                  const selected = answers[current.id] === option.value;
                  return (
                    <div
                      key={String(option.value)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                        selected
                          ? 'border-pwc-orange bg-orange-50'
                          : 'border-gray-200 hover:border-pwc-orange'
                      }`}
                      onClick={() => handleAnswer(current.id, option.value)}
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center flex-shrink-0 ${
                            selected ? 'border-pwc-orange bg-pwc-orange' : 'border-gray-300'
                          }`}
                        >
                          {selected && <CheckCircle className="w-4 h-4 text-white" />}
                        </div>
                        <span className="text-gray-700">{option.text}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className={`flex items-center px-6 py-2 rounded-md ${
                  currentQuestion === 0
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-pwc-gray text-white hover:bg-gray-700'
                }`}
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={!isAnswered}
                className={`flex items-center px-6 py-2 rounded-md ${
                  !isAnswered
                    ? 'bg-orange-200 text-white cursor-not-allowed'
                    : 'bg-pwc-orange text-white hover:bg-[#b33f02]'
                }`}
              >
                {currentQuestion === totalQuestions - 1 ? 'Generate Report' : 'Next'}
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIRiskAssessment;
