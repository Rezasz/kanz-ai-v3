import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import AIReadiness from './pages/AIReadiness';
import DataMaturityAssessment from './pages/DataMaturityAssessment';
import Energy from './pages/industries/Energy';
import BankingFinance from './pages/industries/BankingFinance';
import Manufacturing from './pages/industries/Manufacturing';
import Healthcare from './pages/industries/Healthcare';
import PublicSector from './pages/industries/PublicSector';
import Retail from './pages/industries/Retail';
import AIStrategy from './pages/services/AIStrategy';
import DigitalTransformation from './pages/services/DigitalTransformation';
import AIImplementation from './pages/services/AIImplementation';
import AIGovernance from './pages/services/AIGovernance';
import DataAnalytics from './pages/services/DataAnalytics';
import AIReadinessFramework from './pages/insights/AIReadinessFramework';
import ScalableAIStrategy from './pages/insights/ScalableAIStrategy';
import AIGovernanceCompliance from './pages/insights/AIGovernanceCompliance';
import EnterpriseAIMaturityModel from './pages/insights/EnterpriseAIMaturityModel';
import AIDigitalTransformation from './pages/insights/AIDigitalTransformation';
import AIDecisionIntelligence from './pages/insights/AIDecisionIntelligence';
import DataStrategyAISuccess from './pages/insights/DataStrategyAISuccess';
import AIEnabledWorkforce from './pages/insights/AIEnabledWorkforce';
import OperationalizingAI from './pages/insights/OperationalizingAI';
import EconomicsOfAI from './pages/insights/EconomicsOfAI';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ai-readiness" element={<AIReadiness />} />
            <Route path="/data-maturity" element={<DataMaturityAssessment />} />
            <Route path="/industries/energy" element={<Energy />} />
            <Route path="/industries/banking-finance" element={<BankingFinance />} />
            <Route path="/industries/manufacturing" element={<Manufacturing />} />
            <Route path="/industries/healthcare" element={<Healthcare />} />
            <Route path="/industries/public-sector" element={<PublicSector />} />
            <Route path="/industries/retail" element={<Retail />} />
            <Route path="/services/ai-strategy" element={<AIStrategy />} />
            <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
            <Route path="/services/ai-implementation" element={<AIImplementation />} />
            <Route path="/services/ai-governance" element={<AIGovernance />} />
            <Route path="/services/data-analytics" element={<DataAnalytics />} />
            <Route path="/insights/ai-readiness-framework" element={<AIReadinessFramework />} />
            <Route path="/insights/scalable-ai-strategy" element={<ScalableAIStrategy />} />
            <Route path="/insights/ai-governance-compliance" element={<AIGovernanceCompliance />} />
            <Route path="/insights/ai-maturity-model" element={<EnterpriseAIMaturityModel />} />
            <Route path="/insights/ai-digital-transformation" element={<AIDigitalTransformation />} />
            <Route path="/insights/ai-decision-intelligence" element={<AIDecisionIntelligence />} />
            <Route path="/insights/data-strategy-ai-success" element={<DataStrategyAISuccess />} />
            <Route path="/insights/ai-enabled-workforce" element={<AIEnabledWorkforce />} />
            <Route path="/insights/operationalizing-ai" element={<OperationalizingAI />} />
            <Route path="/insights/economics-of-ai" element={<EconomicsOfAI />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;