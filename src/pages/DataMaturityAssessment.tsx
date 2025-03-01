import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, CheckCircle, ClipboardCheck, LineChart, ChevronRight, ChevronLeft, BarChart, Database, Shield, Users, FileText } from 'lucide-react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const dimensions = {
  'Strategy & Management': ['q1', 'q2'],
  'Quality & Integrity': ['q3', 'q4'],
  'Architecture & Infrastructure': ['q5', 'q6'],
  'Lifecycle & Accessibility': ['q7', 'q8'],
  'Security & Compliance': ['q9', 'q10'],
  'Analytics & AI': ['q11', 'q12'],
  'Culture & Skills': ['q13', 'q14']
};

const scoreMapping = {
  'a': 0,
  'b': 25,
  'c': 50,
  'd': 75,
  'e': 100
};

const questions = [
  {
    id: 'q1',
    question: 'How well is your data strategy aligned with business goals?',
    options: [
      { value: 'a', text: 'No formal data strategy exists' },
      { value: 'b', text: 'Data initiatives are ad-hoc and disconnected from business goals' },
      { value: 'c', text: 'A basic data strategy is defined but lacks executive sponsorship' },
      { value: 'd', text: 'A well-defined data strategy is aligned with business objectives and reviewed periodically' },
      { value: 'e', text: 'Data strategy drives enterprise-wide decisions and is continuously optimized' }
    ]
  },
  {
    id: 'q2',
    question: 'How is data governance structured in your organization?',
    options: [
      { value: 'a', text: 'No governance framework exists' },
      { value: 'b', text: 'Some governance policies exist, but enforcement is inconsistent' },
      { value: 'c', text: 'A governance framework is in place, but adoption is inconsistent' },
      { value: 'd', text: 'A formalized governance structure with defined roles and processes is in place' },
      { value: 'e', text: 'Data governance is enterprise-wide, automated, and continuously improving' }
    ]
  },
  {
    id: 'q3',
    question: 'How is data quality managed across the organization?',
    options: [
      { value: 'a', text: 'Data quality is not actively managed' },
      { value: 'b', text: 'Basic data profiling is done manually in silos' },
      { value: 'c', text: 'A structured data quality program exists for key datasets' },
      { value: 'd', text: 'Data quality metrics are monitored, with issue resolution processes in place' },
      { value: 'e', text: 'Automated tools continuously monitor and improve data quality organization-wide' }
    ]
  },
  {
    id: 'q4',
    question: 'What level of data validation and standardization exists?',
    options: [
      { value: 'a', text: 'No data validation processes exist' },
      { value: 'b', text: 'Data validation is performed manually and inconsistently' },
      { value: 'c', text: 'Basic automated validation exists for critical datasets' },
      { value: 'd', text: 'Data validation and standardization processes are defined and monitored' },
      { value: 'e', text: 'Fully automated data validation with proactive anomaly detection is in place' }
    ]
  },
  {
    id: 'q5',
    question: 'How is your data architecture structured?',
    options: [
      { value: 'a', text: 'No defined data architecture; data is siloed' },
      { value: 'b', text: 'Some architecture guidelines exist but are inconsistently applied' },
      { value: 'c', text: 'A defined enterprise data architecture exists but is not fully integrated' },
      { value: 'd', text: 'Data architecture is standardized and enables cross-functional collaboration' },
      { value: 'e', text: 'A fully integrated, scalable, and automated data architecture supports all operations' }
    ]
  },
  {
    id: 'q6',
    question: 'How advanced is your data infrastructure?',
    options: [
      { value: 'a', text: 'No dedicated data infrastructure' },
      { value: 'b', text: 'On-premise storage with limited scalability' },
      { value: 'c', text: 'Hybrid infrastructure with some cloud adoption' },
      { value: 'd', text: 'Cloud-based, scalable infrastructure with automated resource allocation' },
      { value: 'e', text: 'AI-driven, real-time infrastructure with automated scaling' }
    ]
  },
  {
    id: 'q7',
    question: 'How accessible is data across the organization?',
    options: [
      { value: 'a', text: 'Data is siloed and difficult to access' },
      { value: 'b', text: 'Some departments can access their own data, but sharing is limited' },
      { value: 'c', text: 'Data accessibility policies exist, but implementation varies' },
      { value: 'd', text: 'A centralized platform ensures controlled and governed data access' },
      { value: 'e', text: 'Enterprise-wide access with automated permissions and security controls' }
    ]
  },
  {
    id: 'q8',
    question: 'How well are your data sources integrated?',
    options: [
      { value: 'a', text: 'No integration; data is fragmented' },
      { value: 'b', text: 'Limited integration requiring manual intervention' },
      { value: 'c', text: 'Core data sources are integrated, but gaps remain' },
      { value: 'd', text: 'Most systems are integrated with minimal manual intervention' },
      { value: 'e', text: 'Fully automated and real-time data integration is in place' }
    ]
  },
  {
    id: 'q9',
    question: 'How is data security managed?',
    options: [
      { value: 'a', text: 'No formal security policies exist' },
      { value: 'b', text: 'Basic security measures exist but lack enforcement' },
      { value: 'c', text: 'Security policies exist but are inconsistently applied' },
      { value: 'd', text: 'Strong security controls with periodic audits are in place' },
      { value: 'e', text: 'Proactive, AI-driven security with real-time threat monitoring' }
    ]
  },
  {
    id: 'q10',
    question: 'How compliant is your organization with data regulations (GDPR, CCPA, etc.)?',
    options: [
      { value: 'a', text: 'No awareness of compliance requirements' },
      { value: 'b', text: 'Some compliance efforts, but mostly reactive' },
      { value: 'c', text: 'Compliance policies exist, but adherence is inconsistent' },
      { value: 'd', text: 'Regular compliance audits ensure strong adherence to regulations' },
      { value: 'e', text: 'Compliance is automated, monitored, and continuously optimized' }
    ]
  },
  {
    id: 'q11',
    question: 'How mature are your data analytics capabilities?',
    options: [
      { value: 'a', text: 'No data analytics capabilities' },
      { value: 'b', text: 'Basic reporting tools (e.g., Excel, SQL queries)' },
      { value: 'c', text: 'BI tools are in use, but predictive analytics is limited' },
      { value: 'd', text: 'Machine learning models are being developed for some use cases' },
      { value: 'e', text: 'AI-driven analytics and decision-making are fully embedded' }
    ]
  },
  {
    id: 'q12',
    question: 'How well is AI integrated with data management?',
    options: [
      { value: 'a', text: 'No AI use in data management' },
      { value: 'b', text: 'Experimental AI models with limited impact' },
      { value: 'c', text: 'AI models support some data tasks' },
      { value: 'd', text: 'AI actively improves data processing and analytics' },
      { value: 'e', text: 'AI-driven decision automation across data management processes' }
    ]
  },
  {
    id: 'q13',
    question: 'What is the level of data literacy across your organization?',
    options: [
      { value: 'a', text: 'No formal data training programs exist' },
      { value: 'b', text: 'Only technical teams receive data training' },
      { value: 'c', text: 'Some business users receive training, but adoption is inconsistent' },
      { value: 'd', text: 'Organization-wide data literacy programs are in place' },
      { value: 'e', text: 'Data literacy is embedded into company culture and career development' }
    ]
  },
  {
    id: 'q14',
    question: 'Do you have dedicated data teams and leadership?',
    options: [
      { value: 'a', text: 'No dedicated data roles exist' },
      { value: 'b', text: 'Data tasks are handled ad-hoc by existing teams' },
      { value: 'c', text: 'Dedicated data teams exist but lack executive sponsorship' },
      { value: 'd', text: 'A Chief Data Officer (CDO) and governance structure are in place' },
      { value: 'e', text: 'A data-driven culture is championed by leadership with strong investments' }
    ]
  }
];

const calculateDimensionScore = (answers, questionIds) => {
  const scores = questionIds.map(id => scoreMapping[answers[id] || 'a']);
  return scores.reduce((a, b) => a + b, 0) / scores.length;
};

const getMaturityLevel = (score) => {
  if (score >= 80) return 'Optimized';
  if (score >= 60) return 'Advanced';
  if (score >= 40) return 'Established';
  if (score >= 20) return 'Developing';
  return 'Nascent';
};

const getRecommendations = (dimension, score) => {
  const recommendations = {
    'Strategy & Management': {
      low: [
        'Develop a formal data strategy aligned with business objectives',
        'Establish basic data governance policies',
        'Create a roadmap for data management initiatives'
      ],
      medium: [
        'Strengthen executive sponsorship for data initiatives',
        'Implement enterprise-wide data governance',
        'Develop metrics to measure data strategy effectiveness'
      ],
      high: [
        'Optimize data strategy through continuous improvement',
        'Automate governance processes',
        'Expand data-driven decision making'
      ]
    },
    'Quality & Integrity': {
      low: [
        'Implement basic data quality checks',
        'Define data quality metrics',
        'Establish data validation processes'
      ],
      medium: [
        'Implement automated data quality monitoring',
        'Develop data quality improvement programs',
        'Standardize data validation procedures'
      ],
      high: [
        'Implement AI-driven data quality monitoring',
        'Automate data quality improvement processes',
        'Establish proactive data quality management'
      ]
    },
    'Architecture & Infrastructure': {
      low: [
        'Define basic data architecture principles',
        'Document current data infrastructure',
        'Identify integration requirements'
      ],
      medium: [
        'Implement enterprise data architecture',
        'Modernize data infrastructure',
        'Enhance system integration'
      ],
      high: [
        'Optimize architecture for scalability',
        'Implement AI-driven infrastructure management',
        'Automate resource optimization'
      ]
    },
    'Lifecycle & Accessibility': {
      low: [
        'Define data lifecycle management processes',
        'Implement basic data access controls',
        'Document data sharing procedures'
      ],
      medium: [
        'Enhance data lifecycle automation',
        'Implement centralized data access',
        'Improve data integration'
      ],
      high: [
        'Optimize data lifecycle management',
        'Implement advanced access controls',
        'Automate data integration processes'
      ]
    },
    'Security & Compliance': {
      low: [
        'Establish basic security policies',
        'Identify compliance requirements',
        'Implement basic security controls'
      ],
      medium: [
        'Enhance security monitoring',
        'Implement compliance frameworks',
        'Conduct regular security audits'
      ],
      high: [
        'Implement AI-driven security',
        'Automate compliance monitoring',
        'Establish proactive security measures'
      ]
    },
    'Analytics & AI': {
      low: [
        'Implement basic analytics capabilities',
        'Identify AI use cases',
        'Develop data analysis skills'
      ],
      medium: [
        'Enhance analytics tools and capabilities',
        'Implement AI pilots',
        'Expand predictive analytics'
      ],
      high: [
        'Implement advanced AI solutions',
        'Automate decision processes',
        'Optimize analytics capabilities'
      ]
    },
    'Culture & Skills': {
      low: [
        'Develop basic data literacy program',
        'Define data roles and responsibilities',
        'Create data awareness initiatives'
      ],
      medium: [
        'Expand data training programs',
        'Establish data leadership roles',
        'Enhance data culture'
      ],
      high: [
        'Optimize data literacy programs',
        'Develop advanced data capabilities',
        'Foster innovation in data usage'
      ]
    }
  };

  if (score < 40) return recommendations[dimension].low;
  if (score < 70) return recommendations[dimension].medium;
  return recommendations[dimension].high;
};

const DataMaturityAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showReport, setShowReport] = useState(false);

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowReport(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateOverallScore = () => {
    const dimensionScores = Object.entries(dimensions).map(([dimension, questionIds]) => ({
      dimension,
      score: calculateDimensionScore(answers, questionIds)
    }));
    return {
      overall: dimensionScores.reduce((acc, curr) => acc + curr.score, 0) / Object.keys(dimensions).length,
      dimensions: dimensionScores
    };
  };

  const renderRadarChart = (scores) => {
    const data = {
      labels: scores.dimensions.map(d => d.dimension),
      datasets: [
        {
          label: 'Maturity Score',
          data: scores.dimensions.map(d => Math.round(d.score)),
          backgroundColor: 'rgba(208, 74, 2, 0.2)',
          borderColor: 'rgba(208, 74, 2, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(208, 74, 2, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(208, 74, 2, 1)'
        }
      ]
    };

    const options = {
      scales: {
        r: {
          angleLines: {
            display: true
          },
          suggestedMin: 0,
          suggestedMax: 100,
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
    };

    return (
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-bold mb-4 text-center">Maturity Dimensions Overview</h3>
        <div className="w-full max-w-2xl mx-auto">
          <Radar data={data} options={options} />
        </div>
      </div>
    );
  };

  const renderReport = () => {
    const scores = calculateOverallScore();
    const maturityLevel = getMaturityLevel(scores.overall);

    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Data Maturity Assessment Report</h2>
          
          {/* Overall Score */}
          <div className="mb-12 text-center">
            <div className="inline-block bg-orange-100 rounded-full p-6 mb-4">
              <Database className="h-12 w-12 text-pwc-orange" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Overall Maturity Level</h3>
            <div className="text-4xl font-bold text-pwc-orange mb-2">
              {maturityLevel}
            </div>
            <div className="text-xl text-gray-600">
              Overall Score: {Math.round(scores.overall)}%
            </div>
          </div>

          {/* Radar Chart */}
          {renderRadarChart(scores)}

          {/* Dimension Scores */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {scores.dimensions.map(({ dimension, score }) => (
              <div key={dimension} className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">{dimension}</h4>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div className="text-right">
                      <span className="text-xl font-semibold inline-block text-pwc-orange">
                        {Math.round(score)}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                    <div
                      style={{ width: `${score}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pwc-orange transition-all duration-500"
                    ></div>
                  </div>
                  <div className="text-sm text-gray-600">
                    Maturity Level: {getMaturityLevel(score)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recommendations */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Key Recommendations</h3>
            <div className="space-y-4">
              {scores.dimensions.map(({ dimension, score }) => {
                const recommendations = getRecommendations(dimension, score);
                return (
                  <div key={dimension} className="border-b border-gray-200 pb-4 last:border-0">
                    <h4 className="font-semibold mb-2">{dimension}</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      {recommendations.map((rec, index) => (
                        <li key={index}>{rec}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex justify-center space-x-4">
            <button
              onClick={() => window.print()}
              className="bg-pwc-gray text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors"
            >
              Download Report
            </button>
            <button
              onClick={() => {
                setShowReport(false);
                setCurrentQuestion(0);
                setAnswers({});
              }}
              className="bg-pwc-orange text-white px-6 py-2 rounded-md hover:bg-[#b33f02] transition-colors"
            >
              Start New Assessment
            </button>
          </div>
        </div>
      </div>
    );
  };

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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Your Data Maturity Report</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Comprehensive analysis of your organization's data maturity and recommendations
              </p>
            </motion.div>
          </div>
        </section>
        <section className="py-20">
          {renderReport()}
        </section>
      </div>
    );
  }

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Data Maturity Assessment</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Evaluate your organization's data management capabilities and get actionable insights
            </p>
          </motion.div>
        </div>
      </section>

      {/* Assessment Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-2 bg-pwc-orange rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
              <div className="text-center mt-2 text-gray-600">
                Question {currentQuestion + 1} of {questions.length}
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
              <h2 className="text-2xl font-bold mb-6">{questions[currentQuestion].question}</h2>
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option) => (
                  <div
                    key={option.value}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                      answers[questions[currentQuestion].id] === option.value
                        ? 'border-pwc-orange bg-orange-50'
                        : 'border-gray-200 hover:border-pwc-orange'
                    }`}
                    onClick={() => handleAnswer(questions[currentQuestion].id, option.value)}
                  >
                    <div className="flex items-center">
                      <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                        answers[questions[currentQuestion].id] === option.value
                          ? 'border-pwc-orange bg-pwc-orange'
                          : 'border-gray-300'
                      }`}>
                        {answers[questions[currentQuestion].id] === option.value && (
                          <CheckCircle className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <span className="text-gray-700">{option.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Navigation Buttons */}
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
                className="flex items-center px-6 py-2 rounded-md bg-pwc-orange text-white hover:bg-[#b33f02]"
              >
                {currentQuestion === questions.length - 1 ? 'Generate Report' : 'Next'}
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataMaturityAssessment;