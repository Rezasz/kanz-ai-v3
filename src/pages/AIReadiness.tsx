import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, CheckCircle, ClipboardCheck, LineChart, ChevronRight, ChevronLeft, BarChart } from 'lucide-react';
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
  'Vision & Strategy': ['q1', 'q2', 'q3'],
  'Use Cases': ['q4'],
  'Data': ['q5', 'q6'],
  'IT Infrastructure': ['q7', 'q8'],
  'People': ['q9', 'q10'],
  'Governance': ['q11', 'q12', 'q13']
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
    question: 'How important is artificial intelligence (AI) to your government entity currently?',
    options: [
      { value: 'a', text: 'As a cutting-edge topic, we have not started our journey into AI yet' },
      { value: 'b', text: 'We are early adopters of AI, but do not agree on the need for an AI strategy' },
      { value: 'c', text: 'We have defined an overarching AI strategy, and some departments have begun aligning their goals with it' },
      { value: 'd', text: 'We have begun the implementation of our AI strategy, which has been widely integrated across most departments and has the support of the top leadership' },
      { value: 'e', text: 'AI is seamlessly integrated into the overall strategy of the entity' }
    ]
  },
  {
    id: 'q2',
    question: 'In your entity, how is AI budgeted?',
    options: [
      { value: 'a', text: 'AI budget is negligible. Funds are available for ad-hoc training and small-scope Proofs of Concept (POC)' },
      { value: 'b', text: 'We have multiple POCs that are funded, additional funds are granted exceptionally to the AI teams for research and experimentation' },
      { value: 'c', text: 'AI projects are funded across a variety of topics and ongoing investments are made in experimentation and POCs, including the development of software, platforms, infrastructure, and AI skills' },
      { value: 'd', text: 'We have a dedicated budget structure for AI, along with a detailed plan for the short and long term' },
      { value: 'e', text: 'We no longer have separate AI initiatives or budgets: the integration of functional areas and AI, along with their corresponding budgets and indicators, is seamless' }
    ]
  },
  {
    id: 'q3',
    question: 'What is the current level of AI adoption in your organization?',
    options: [
      { value: 'a', text: 'We are just learning about AI and are not sure how it would work in our government entity' },
      { value: 'b', text: 'We have just begun training and developing AI models through POCs' },
      { value: 'c', text: 'We are moving from AI POCs to Minimal Viable Products (MVPs)' },
      { value: 'd', text: 'We have deployed multiple MVPs in production and working on scaling and maintaining them' },
      { value: 'e', text: 'We have successfully integrated AI-based products into government operations or services' }
    ]
  },
  {
    id: 'q4',
    question: 'Are you using any industrialized methodology for AI use case development?',
    options: [
      { value: 'a', text: 'We have not identified any AI use cases yet' },
      { value: 'b', text: 'The few Proof of Concepts (POCs) are profiled and described ad-hoc, without any standardization' },
      { value: 'c', text: 'While not yet implemented, we have defined a systematic way of defining minimal attributes of an AI use case such as the problem statement, stakeholders involved and beneficiaries' },
      { value: 'd', text: 'Our use case definition approach is being expanded to include details such as the data sourcing plan, the target solution architecture, and the operation plan' },
      { value: 'e', text: 'We have developed a unique standard procedure to profile and detail all AI use cases consistently across the government entity' }
    ]
  },
  {
    id: 'q5',
    question: 'Do you have access to all the data you need to experiment with AI?',
    options: [
      { value: 'a', text: 'We have challenges in accessing the data needed for our AI initiatives' },
      { value: 'b', text: 'We have limited access to data to begin building our POCs and it takes us time to collect it' },
      { value: 'c', text: 'Essential data is available and accessible to build AI models' },
      { value: 'd', text: 'Our data is documented in a data catalog, making it easy to identify and access to build our AI algorithms' },
      { value: 'e', text: 'We make our data accessible across the entire entity in a proactive and efficient manner' }
    ]
  },
  {
    id: 'q6',
    question: 'Is the data you intend to use in your AI models of good quality?',
    options: [
      { value: 'a', text: 'We do not know how good the quality of our data is since no data quality measures or processes are defined' },
      { value: 'b', text: 'We perform ad-hoc data quality activities in our data' },
      { value: 'c', text: 'We have begun to standardize data quality across the entity and work on improving it' },
      { value: 'd', text: 'We have standard data quality practices guided by a data quality program, including frameworks, processes and guidelines, with regular monitoring and improvement' },
      { value: 'e', text: 'We are actively evolving our data quality efforts, supported by automated infrastructure and tools' }
    ]
  },
  {
    id: 'q7',
    question: 'What platforms and tools are available to you for designing and deploying your AI algorithms?',
    options: [
      { value: 'a', text: 'We do not have the tools to develop AI' },
      { value: 'b', text: 'We have limited access to artificial intelligence technologies, but plan to invest in this area in the future' },
      { value: 'c', text: 'We have a set of industrialized AI tools to implement AI models' },
      { value: 'd', text: 'We are deploying an AI platform to deploy the AI models and provide easy access to AI' },
      { value: 'e', text: 'We have a scalable and centralized AI platform integrated across the entire entity to deploy AI models and streamline data access from ingestion to consumption' }
    ]
  },
  {
    id: 'q8',
    question: 'What type of computing infrastructure do you have available for AI development and operations?',
    options: [
      { value: 'a', text: 'We do not know what computing infrastructure is available for AI' },
      { value: 'b', text: 'We rely on our desktops to explore with AI locally' },
      { value: 'c', text: 'We rely on a sandbox environment to test out some AI applications' },
      { value: 'd', text: 'We have dedicated servers for AI that optimize performance and resource allocation' },
      { value: 'e', text: 'Our infrastructure is optimized by AI to predict fluctuations in workload and scale resources automatically' }
    ]
  },
  {
    id: 'q9',
    question: 'Has your entity established AI roles and responsibilities?',
    options: [
      { value: 'a', text: 'We have not dedicated AI roles and responsibilities' },
      { value: 'b', text: 'We are starting to recruit AI specialists and defining the different roles and responsibilities' },
      { value: 'c', text: 'We have established an AI organization with defined roles and responsibilities, but it is currently understaffed' },
      { value: 'd', text: 'Our AI organization structure has been properly sized and formalized, and its responsibilities have been clearly defined' },
      { value: 'e', text: 'AI is an integral part of our organization, sponsored by top leadership and driven by AI champions' }
    ]
  },
  {
    id: 'q10',
    question: 'How is your entity developing AI knowledge and upskilling AI capabilities?',
    options: [
      { value: 'a', text: 'We have not included AI in our learning program' },
      { value: 'b', text: 'We provide ad-hoc training to some of our employees who have demonstrated an interest in AI' },
      { value: 'c', text: 'Some roles are required to complete specific training courses in order to improve their AI capabilities' },
      { value: 'd', text: 'Our AI organization has outlined a comprehensive learning path for all its roles' },
      { value: 'e', text: 'The development of AI literacy is a key component of our capacity building program, and all employees of the company have access to AI training courses' }
    ]
  },
  {
    id: 'q11',
    question: 'What degree of governance has been established to enable AI?',
    options: [
      { value: 'a', text: 'We have no structure yet to govern AI' },
      { value: 'b', text: 'We are discussing the concepts associated with establishing a governance structure' },
      { value: 'c', text: 'We are developing an AI Governance model across the entity in line with the different departments and control functions' },
      { value: 'd', text: 'We have defined the roles and responsibilities for every board and committee, and we are planning to conduct an extensive monitoring of the various AI initiatives' },
      { value: 'e', text: 'The AI governance structure has been successfully implemented across the organization, with working committees established and clear accountabilities across different stakeholders' }
    ]
  },
  {
    id: 'q12',
    question: 'Is your organization taking any activities to ensure that AI is ethical and responsible? (no bias, no violation of privacy, etc.)',
    options: [
      { value: 'a', text: 'We are beginning to educate ourselves about responsible AI and AI ethics' },
      { value: 'b', text: 'We are providing high-level guidance on ethical and AI usage' },
      { value: 'c', text: 'We have developed AI ethical principles and policies' },
      { value: 'd', text: 'We are committed to enabling and executing ethical AI practices through the use of dedicated tools and operational metrics' },
      { value: 'e', text: 'Our AI ethics practices are an integral part of our entity' }
    ]
  },
  {
    id: 'q13',
    question: 'Have you established dedicated AI partnerships to advance your AI agenda?',
    options: [
      { value: 'a', text: 'We have not identified any AI partnerships' },
      { value: 'b', text: 'We have initiated the process to identify AI partnerships, but we have not formalized any' },
      { value: 'c', text: 'We have formalized at least one AI partnership' },
      { value: 'd', text: 'We have a solid partnership network and we are expanding it across the government and industries' },
      { value: 'e', text: 'We have expanded our AI partnership network to the academia to become a leader in AI and advance related R&D' }
    ]
  }
];

const calculateDimensionScore = (answers, questionIds) => {
  const scores = questionIds.map(id => scoreMapping[answers[id] || 'a']);
  return scores.reduce((a, b) => a + b, 0) / scores.length;
};

const AIReadiness = () => {
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

  const getMaturityLevel = (score) => {
    if (score >= 80) return 'Advanced';
    if (score >= 60) return 'Established';
    if (score >= 40) return 'Developing';
    if (score >= 20) return 'Basic';
    return 'Initial';
  };

  const renderRadarChart = (scores) => {
    const data = {
      labels: scores.dimensions.map(d => d.dimension),
      datasets: [
        {
          label: 'Readiness Score',
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
        <h3 className="text-xl font-bold mb-4 text-center">AI Readiness Dimensions Overview</h3>
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
          <h2 className="text-3xl font-bold mb-6 text-center">AI Readiness Assessment Report</h2>
          
          {/* Overall Score */}
          <div className="mb-12 text-center">
            <div className="inline-block bg-orange-100 rounded-full p-6 mb-4">
              <Brain className="h-12 w-12 text-pwc-orange" />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Your AI Readiness Report</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Comprehensive analysis of your organization's AI maturity and recommendations
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Readiness Assessment</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Evaluate your organization's preparedness for AI implementation and get actionable insights
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

const getRecommendations = (dimension, score) => {
  const recommendations = {
    'Vision & Strategy': {
      low: [
        'Develop a comprehensive AI strategy aligned with business objectives',
        'Secure leadership buy-in and support for AI initiatives',
        'Create a roadmap for AI adoption and implementation'
      ],
      medium: [
        'Refine and expand existing AI strategy',
        'Increase cross-departmental alignment on AI initiatives',
        'Develop metrics to measure AI impact'
      ],
      high: [
        'Focus on innovation and emerging AI technologies',
        'Share best practices across the organization',
        'Explore new AI use cases and opportunities'
      ]
    },
    'Use Cases': {
      low: [
        'Identify and prioritize initial AI use cases',
        'Start with small, high-impact pilots',
        'Develop use case evaluation framework'
      ],
      medium: [
        'Scale successful pilot projects',
        'Standardize use case development process',
        'Implement ROI tracking for AI initiatives'
      ],
      high: [
        'Explore advanced AI applications',
        'Optimize existing use cases',
        'Develop innovation pipeline'
      ]
    },
    'Data': {
      low: [
        'Establish data governance framework',
        'Improve data quality and accessibility',
        'Implement data collection and storage standards'
      ],
      medium: [
        'Enhance data integration capabilities',
        'Implement advanced data quality measures',
        'Develop data sharing protocols'
      ],
      high: [
        'Implement real-time data processing',
        'Advance data analytics capabilities',
        'Optimize data architecture'
      ]
    },
    'IT Infrastructure': {
      low: [
        'Assess current IT infrastructure capabilities',
        'Identify infrastructure gaps for AI',
        'Develop infrastructure upgrade plan'
      ],
      medium: [
        'Implement scalable AI infrastructure',
        'Enhance computing capabilities',
        'Improve deployment processes'
      ],
      high: [
        'Optimize infrastructure performance',
        'Implement advanced monitoring',
        'Explore edge computing capabilities'
      ]
    },
    'People': {
      low: [
        'Develop AI training program',
        'Identify key AI roles and responsibilities',
        'Create AI awareness initiatives'
      ],
      medium: [
        'Expand AI expertise across teams',
        'Implement AI certification programs',
        'Develop AI career paths'
      ],
      high: [
        'Establish AI centers of excellence',
        'Develop advanced AI training',
        'Create knowledge sharing platforms'
      ]
    },
    'Governance': {
      low: [
        'Establish AI governance framework',
        'Develop AI policies and guidelines',
        'Create ethical AI principles'
      ],
      medium: [
        'Enhance monitoring and compliance',
        'Implement risk management framework',
        'Strengthen security measures'
      ],
      high: [
        'Optimize governance processes',
        'Advance ethical AI practices',
        'Develop industry partnerships'
      ]
    }
  };

  if (score < 40) return recommendations[dimension].low;
  if (score < 70) return recommendations[dimension].medium;
  return recommendations[dimension].high;
};

export default AIReadiness;