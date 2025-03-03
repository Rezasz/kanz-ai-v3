import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Database, Users, Shield, Lightbulb, BarChart, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  RadialLinearScale,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar, Radar } from 'react-chartjs-2';
import { interpolateRdYlBu } from 'd3-scale-chromatic';
import { exportToPDF } from '@/utils/pdfExport';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  RadialLinearScale,
  Filler,
  Tooltip,
  Legend
);

// Define the question sections
const sections = [
  {
    title: "Strategy",
    description: "Vision, Alignment, Investment, and Leadership",
    icon: Target,
    questions: [
      "Does your organization have a documented AI strategy aligned with its overall business strategy?",
      "Is there a dedicated budget for AI initiatives?",
      "How effectively do senior leaders sponsor and communicate AI initiatives?",
      "Are there clear business objectives tied to AI projects?",
      "How frequently is the AI strategy reviewed and updated based on market trends?"
    ]
  },
  {
    title: "People",
    description: "Skills, Culture, Change Management",
    icon: Users,
    questions: [
      "Does your organization have a dedicated AI team or center of excellence?",
      "Are there structured learning and development programs for AI-related skills?",
      "How well is AI adoption embraced by employees across departments?",
      "Are change management practices in place for AI implementations?",
      "Is there an internal reward system for innovation in AI?"
    ]
  },
  {
    title: "Technology",
    description: "Infrastructure, Tools, Integration",
    icon: Layers,
    questions: [
      "Does your organization have scalable AI infrastructure (cloud or on-premises)?",
      "How effectively are AI tools integrated with existing IT systems?",
      "Are AI projects deployed with continuous integration and deployment (CI/CD) pipelines?",
      "Is AI model monitoring and retraining automated?",
      "How secure is your AI infrastructure against cyber threats?"
    ]
  },
  {
    title: "Data",
    description: "Quality, Management, Privacy",
    icon: Database,
    questions: [
      "Does your organization have a well-defined data governance framework?",
      "How effective are your data quality management practices?",
      "Are there automated processes for data cleansing and transformation for AI models?",
      "How compliant are your data practices with privacy regulations (e.g., GDPR)?",
      "Is real-time data integration available for AI applications?"
    ]
  },
  {
    title: "Governance",
    description: "Ethics, Compliance, Risk Management",
    icon: Shield,
    questions: [
      "Are AI ethics policies documented and communicated within the organization?",
      "Is there a risk management framework specific to AI deployments?",
      "How frequently are AI systems audited for compliance and fairness?",
      "Are there mechanisms for explainability and interpretability of AI models?",
      "How well are AI vendor risks managed and evaluated?"
    ]
  },
  {
    title: "Innovation",
    description: "R&D, AI Innovation Culture",
    icon: Lightbulb,
    questions: [
      "Does your organization have a dedicated budget for AI research and innovation?",
      "How frequently does your organization conduct AI innovation workshops?",
      "Is AI leveraged for new product development?",
      "Are there partnerships with AI startups or research institutions?",
      "How effectively does your organization manage AI intellectual property?"
    ]
  },
  {
    title: "Customer-Centric AI",
    description: "Customer Experience, Personalization",
    icon: Brain,
    questions: [
      "Is AI used to enhance customer experience through personalization?",
      "Are AI-driven chatbots deployed for customer support?",
      "How effectively is customer feedback integrated into AI models?",
      "Is sentiment analysis used for customer insights?",
      "Are AI-based recommendation systems deployed?"
    ]
  },
  {
    title: "Operational Efficiency",
    description: "Process Automation, Cost Reduction",
    icon: BarChart,
    questions: [
      "Is AI used for automating repetitive tasks and processes?",
      "How effectively is AI used for cost reduction and optimization?",
      "Are AI-driven predictive maintenance systems in place?",
      "Is AI integrated into supply chain management?",
      "How well is AI utilized for workforce productivity analytics?"
    ]
  }
];

const AIMaturityAssessment = () => {
  const [answers, setAnswers] = useState<{[key: string]: number}>({});
  const [currentSection, setCurrentSection] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionIndex: number, value: number) => {
    const key = `${currentSection}-${questionIndex}`;
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const calculateScore = () => {
    const totalQuestions = sections.length * 5; // 5 questions per section
    const totalScore = Object.values(answers).reduce((acc, val) => acc + val, 0);
    return {
      total: totalScore,
      percentage: (totalScore / (totalQuestions * 5)) * 100, // 5 is max score per question
      sectionScores: sections.map((section, sectionIndex) => {
        const sectionAnswers = Array(5).fill(0).map((_, i) => 
          answers[`${sectionIndex}-${i}`] || 0
        );
        return {
          title: section.title,
          score: sectionAnswers.reduce((acc, val) => acc + val, 0) / (5 * 5) * 100
        };
      })
    };
  };

  const getMaturityLevel = (score: number) => {
    if (score >= 80) return 'Optimized';
    if (score >= 60) return 'Advanced';
    if (score >= 40) return 'Developing';
    return 'Initial';
  };

  const generateBarChartData = (scores: { title: string; score: number }[]) => {
    return {
      labels: scores.map(s => s.title),
      datasets: [{
        label: 'Maturity Score',
        data: scores.map(s => s.score),
        backgroundColor: scores.map(s => 
          interpolateRdYlBu(1 - (s.score / 100))
        ),
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1
      }]
    };
  };

  const generateRadarChartData = (scores: { title: string; score: number }[]) => {
    return {
      labels: scores.map(s => s.title),
      datasets: [{
        label: 'Maturity Score',
        data: scores.map(s => s.score),
        backgroundColor: 'rgba(208, 74, 2, 0.2)',
        borderColor: 'rgba(208, 74, 2, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(208, 74, 2, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(208, 74, 2, 1)'
      }]
    };
  };

  const generateHeatMapData = (scores: { title: string; score: number }[]) => {
    return scores.map(s => ({
      dimension: s.title,
      score: s.score,
      color: interpolateRdYlBu(1 - (s.score / 100))
    }));
  };

  const renderResults = () => {
    const scores = calculateScore();
    const barChartData = generateBarChartData(scores.sectionScores);
    const radarChartData = generateRadarChartData(scores.sectionScores);
    const heatMapData = generateHeatMapData(scores.sectionScores);

    return (
      <div className="space-y-8" id="assessment-results">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Overall Maturity Score</h3>
          <div className="text-4xl font-bold text-pwc-orange">
            {Math.round(scores.percentage)}%
          </div>
          <div className="text-xl text-gray-600 mt-2">
            Maturity Level: {getMaturityLevel(scores.percentage)}
          </div>
        </div>

        {/* Radar Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h4 className="text-xl font-semibold mb-4">Dimension Overview</h4>
          <div className="w-full max-w-2xl mx-auto">
            <Radar 
              data={radarChartData}
              options={{
                scales: {
                  r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                      stepSize: 20
                    }
                  }
                },
                plugins: {
                  legend: {
                    display: false
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h4 className="text-xl font-semibold mb-4">Detailed Score Analysis</h4>
          <div className="w-full max-w-2xl mx-auto">
            <Bar 
              data={barChartData}
              options={{
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 100
                  }
                },
                plugins: {
                  legend: {
                    display: false
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Heat Map */}
        <div className="bg-white rounded-lg shadow p-6">
          <h4 className="text-xl font-semibold mb-4">Maturity Heat Map</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {heatMapData.map((item, index) => (
              <div 
                key={index}
                className="p-4 rounded-lg text-white"
                style={{ backgroundColor: item.color }}
              >
                <div className="font-semibold">{item.dimension}</div>
                <div className="text-2xl font-bold">{Math.round(item.score)}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white rounded-lg shadow p-6">
          <h4 className="text-xl font-semibold mb-4">Key Recommendations</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scores.sectionScores.map((section, index) => (
              <div key={index} className="border-l-4 border-pwc-orange pl-4">
                <h5 className="font-semibold mb-2">{section.title}</h5>
                <p className="text-gray-600">
                  {getRecommendation(section.title, section.score)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-8">
          <Button
            onClick={() => {
              setAnswers({});
              setCurrentSection(0);
              setShowResults(false);
            }}
          >
            Start New Assessment
          </Button>
          <Button 
            variant="outline"
            onClick={() => exportToPDF('assessment-results', 'ai-maturity-assessment.pdf')}
          >
            Export to PDF
          </Button>
          <Link to="/contact">
            <Button variant="outline">
              Get Expert Analysis
            </Button>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {!showResults ? (
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">{sections[currentSection].title}</h2>
            <p className="text-gray-600">{sections[currentSection].description}</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="h-2 bg-gray-200 rounded-full">
              <div 
                className="h-2 bg-pwc-orange rounded-full transition-all duration-300"
                style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
              ></div>
            </div>
            <div className="text-center mt-2 text-gray-600">
              Section {currentSection + 1} of {sections.length}
            </div>
          </div>

          <div className="space-y-8">
            {sections[currentSection].questions.map((question, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <p className="text-lg mb-4">{question}</p>
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      onClick={() => handleAnswer(index, value)}
                      className={`p-2 rounded ${
                        answers[`${currentSection}-${index}`] === value
                          ? 'bg-pwc-orange text-white'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={() => setCurrentSection(prev => prev - 1)}
              disabled={currentSection === 0}
            >
              Previous
            </Button>
            <Button
              onClick={() => {
                if (currentSection === sections.length - 1) {
                  setShowResults(true);
                } else {
                  setCurrentSection(prev => prev + 1);
                }
              }}
            >
              {currentSection === sections.length - 1 ? 'View Results' : 'Next'}
            </Button>
          </div>
        </div>
      ) : (
        renderResults()
      )}
    </div>
  );
};

const getRecommendation = (dimension: string, score: number): string => {
  if (score < 40) {
    return `Focus on establishing foundational ${dimension.toLowerCase()} capabilities and developing a basic framework for improvement.`;
  } else if (score < 60) {
    return `Build upon existing ${dimension.toLowerCase()} initiatives and work on standardizing processes and expanding capabilities.`;
  } else if (score < 80) {
    return `Optimize and enhance current ${dimension.toLowerCase()} practices while exploring advanced capabilities and innovation opportunities.`;
  } else {
    return `Maintain leadership in ${dimension.toLowerCase()} while focusing on innovation and staying ahead of emerging trends.`;
  }
};

export default AIMaturityAssessment;