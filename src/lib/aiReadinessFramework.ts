/**
 * Kanz.ai AI Readiness Framework v3.0.0
 * Auto-generated from upstream YAML data (Kanz-ai-Org/Ai-Maturity-Framwork).
 * Do not edit by hand — re-run scripts/build_framework.py to regenerate.
 *
 * 9 pillars, 52 dimensions, 52 questions, 152 actions.
 */

export type CapabilityLevel = 1 | 2 | 3 | 4 | 5;
export type NistTier = 'partial' | 'risk_informed' | 'repeatable' | 'adaptive';
export type WeightingProfileId = 'default' | 'regulated_industry' | 'early_stage';

export const CAPABILITY_LEVELS: { value: CapabilityLevel; name: string; definition: string }[] = [
  { value: 1, name: 'Initial', definition: 'Ad-hoc, reactive, undocumented; depends on individual effort. No defined process.' },
  { value: 2, name: 'Developing', definition: 'Practice exists for pilots or high-risk cases. Inconsistent application. Documentation partial.' },
  { value: 3, name: 'Defined', definition: 'Documented, standardised, and applied across most relevant systems. Roles assigned.' },
  { value: 4, name: 'Managed', definition: 'Measured against KPIs, reviewed regularly, integrated cross-functionally. Evidence generated continuously.' },
  { value: 5, name: 'Optimizing', definition: 'Continuously improved, benchmarked externally, drives organisation-wide innovation. Competitive differentiator.' },
];

export const NIST_TIERS: { id: NistTier; name: string; meaning: string }[] = [
  { id: 'partial', name: 'Partial', meaning: 'AI risk management is reactive and informal. Practices are inconsistent and not aligned with organisational objectives.' },
  { id: 'risk_informed', name: 'Risk-Informed', meaning: 'The organisation is aware of AI risks. Some practices exist for higher-risk activities but coverage is incomplete and informal.' },
  { id: 'repeatable', name: 'Repeatable', meaning: 'Formally approved policies and procedures govern AI risk management. Practice is consistent and traceable.' },
  { id: 'adaptive', name: 'Adaptive', meaning: 'AI risk management is integrated into culture and improves continuously. Practices are proactive, measured, and inform broader strategy.' },
];

// Tier ordering for "worst tier" rollup (partial < risk_informed < repeatable < adaptive).
export const NIST_TIER_ORDER: Record<NistTier, number> = {
  partial: 0,
  risk_informed: 1,
  repeatable: 2,
  adaptive: 3,
};

export const WEIGHTING_PROFILES: {
  id: WeightingProfileId;
  name: string;
  description: string;
}[] = [
  { id: 'default', name: 'Default', description: 'Uniform weights across pillars. Use when no strong industry or stage preference.' },
  { id: 'regulated_industry', name: 'Regulated Industry', description: 'Heavier weights on Governance, Responsible AI, Security. Use for finance, healthcare, public sector, defence.' },
  { id: 'early_stage', name: 'Early Stage', description: 'Heavier weights on Strategy, Data, People. Use for organisations still building AI capability.' },
];

export type Pillar = {
  id: string;
  slug: string;
  name: string;
  order: number;
  purpose: string;
  scope_in: string[];
  scope_out: string[];
  weights: { default: number; regulated_industry: number; early_stage: number };
};

export type Dimension = {
  id: string;
  pillar_id: string;
  name: string;
  what_it_covers: string;
  why_it_matters: string;
  evidence_required_at: number | null;
  rubric: Record<string, string>;
  nist_tier_profile: Record<NistTier, string>;
  common_pitfalls: string[];
};

export type Question = {
  id: string;
  dimension_id: string;
  pillar_id: string;
  prompt: string;
  evidence_prompt: string;
  respondent_roles: string[];
};

export type Action = {
  id: string;
  dimension_id: string;
  pillar_id: string;
  from_level: number;
  to_level: number;
  title: string;
  description: string;
  effort: string;
  duration_weeks: number | null;
  owner_role: string;
  expected_outcome: string;
};

export const PILLARS: Pillar[] = [
  {
    "id": "P1",
    "slug": "strategy-value-and-portfolio",
    "name": "Strategy, Value & Portfolio",
    "order": 1,
    "purpose": "Ensure AI initiatives are anchored in a clear strategy, generate measurable business value, and are governed as a portfolio rather than a series of disconnected pilots. This pillar covers the AI vision, use-case discovery and prioritisation, business case development, portfolio governance (the \"use-case factory\"), benefits realisation, and continuous strategic reassessment.",
    "scope_in": [
      "AI vision and strategic alignment with corporate strategy",
      "Use-case ideation, screening, scoring, and ranking",
      "Business cases and investment planning for AI initiatives",
      "Portfolio governance and use-case factory operating model",
      "Benefits realisation and ROI tracking",
      "Continuous strategic capability reassessment and benchmarking"
    ],
    "scope_out": [
      "Detailed delivery method for individual use cases (see P9)",
      "Change-management mechanics for adoption (see P8)",
      "Risk classification under EU AI Act (see P2)"
    ],
    "weights": {
      "default": 1.0,
      "regulated_industry": 1.0,
      "early_stage": 1.5
    }
  },
  {
    "id": "P2",
    "slug": "governance-risk-and-compliance",
    "name": "Governance, Risk & Compliance",
    "order": 2,
    "purpose": "Establish the AI governance backbone: policies, accountable roles, AI risk management system, regulatory conformity (EU AI Act, ISO/IEC 42001), AI system inventory and lifecycle decisions, and third-party AI governance. This pillar makes AI risk treatable, auditable, and defensible to regulators and boards.",
    "scope_in": [
      "AI policies and AI management system (ISO/IEC 42001)",
      "RACI, decision rights, and the AI ethics body",
      "AI risk management system (NIST AI RMF Govern, EU AI Act Art. 9)",
      "EU AI Act risk classification, FRIA, conformity assessment, technical documentation",
      "AI system inventory, lifecycle decisions, decommissioning",
      "Third-party and vendor AI governance"
    ],
    "scope_out": [
      "Detailed technical risk controls (see P4 for security; P3 for ethics controls)",
      "Use-case-level requirements management (see P9)"
    ],
    "weights": {
      "default": 1.0,
      "regulated_industry": 1.5,
      "early_stage": 1.0
    }
  },
  {
    "id": "P3",
    "slug": "responsible-ai-and-trust",
    "name": "Responsible AI & Trust",
    "order": 3,
    "purpose": "Ensure AI systems are fair, transparent, privacy-preserving, ethically overseen, and aligned with human and societal well-being. This pillar covers fairness and non-discrimination, transparency and explainability, privacy and data protection, human oversight and recourse, stakeholder engagement, and sustainability of AI workloads. Security and adversarial defence are intentionally separated into Pillar 4.",
    "scope_in": [
      "Fairness, bias detection, and outcome monitoring",
      "Transparency, explainability, model cards, and data sheets",
      "Privacy, data protection, and Privacy-by-Design",
      "Human oversight and user recourse",
      "Stakeholder engagement and external communication",
      "Sustainability and environmental impact of AI workloads"
    ],
    "scope_out": [
      "Adversarial security, threat modelling, red-teaming (P4)",
      "Model lifecycle and MLOps (P6)",
      "Policy and AIMS governance (P2)"
    ],
    "weights": {
      "default": 1.0,
      "regulated_industry": 1.5,
      "early_stage": 1.0
    }
  },
  {
    "id": "P4",
    "slug": "ai-security-and-assurance",
    "name": "AI Security & Assurance",
    "order": 4,
    "purpose": "Treat AI security as a distinct discipline. Cover threat modelling and secure MLOps, adversarial robustness and red-teaming, GenAI-specific safety (prompt injection, hallucination, leakage, jailbreak), model supply-chain integrity, post-market monitoring and incident response, and runtime guardrails with rollback. Aligned with OWASP LLM Top 10 (2025), MITRE ATLAS, NIST AI 100-2 (Adversarial ML), and EU AI Act Articles 12, 15, 72, 73.",
    "scope_in": [
      "AI threat modelling and secure MLOps patterns",
      "Adversarial testing, robustness, red-teaming, model evaluation",
      "GenAI safety (prompt injection, system prompt leakage, hallucination, jailbreaks, output handling)",
      "Excessive agency, vector store and embedding security",
      "Model and data supply-chain integrity (SBOM/AI-BOM, signed artefacts)",
      "Post-market monitoring, serious-incident reporting",
      "Runtime guardrails, kill-switches, rollback"
    ],
    "scope_out": [
      "Policy and governance backbone (P2)",
      "Fairness, privacy, and ethics controls (P3)",
      "Platform engineering (P6) except for security-specific patterns"
    ],
    "weights": {
      "default": 1.0,
      "regulated_industry": 1.5,
      "early_stage": 0.8
    }
  },
  {
    "id": "P5",
    "slug": "data-and-knowledge",
    "name": "Data & Knowledge",
    "order": 5,
    "purpose": "Ensure data and knowledge assets are fit for AI: quality, lineage, governance, scalable infrastructure, and the GenAI-specific knowledge layer (vectors, embeddings, RAG corpora, synthetic data). Combines classical DAMA-DMBoK discipline with the unstructured-data readiness that modern GenAI deployments demand.",
    "scope_in": [
      "Data quality, accuracy, completeness, timeliness, lineage",
      "Data governance, stewardship, classification, retention",
      "Data storage and pipeline infrastructure",
      "Knowledge and unstructured-data readiness (RAG corpora, embeddings, vector stores)",
      "Synthetic data generation and validation",
      "Data accessibility and democratisation"
    ],
    "scope_out": [
      "Compute and platform infrastructure (see P6)",
      "Privacy and protection beyond AI relevance (see P3)",
      "Security of vectors and embeddings (see P4 DIM-04)"
    ],
    "weights": {
      "default": 1.0,
      "regulated_industry": 1.2,
      "early_stage": 1.5
    }
  },
  {
    "id": "P6",
    "slug": "technology-and-ai-platforms",
    "name": "Technology & AI Platforms",
    "order": 6,
    "purpose": "Build and operate the AI platform stack — compute, MLOps, LLMOps, agent platforms, model lifecycle, observability, integration, and resilience — so that AI systems can be developed, deployed, monitored, and evolved reliably at scale.",
    "scope_in": [
      "Compute and cloud infrastructure for AI",
      "MLOps maturity (CI/CD, model registry, training pipelines)",
      "LLMOps and agent platforms (prompt management, evaluation, orchestration)",
      "Model lifecycle and observability (drift, quality, cost)",
      "Integration, APIs, edge and federated patterns",
      "Resilience and disaster recovery for AI services"
    ],
    "scope_out": [
      "Security-specific platform controls (P4 owns) except where lifecycle overlaps",
      "Data quality and pipeline (P5)",
      "Governance (P2)"
    ],
    "weights": {
      "default": 1.0,
      "regulated_industry": 1.0,
      "early_stage": 1.2
    }
  },
  {
    "id": "P7",
    "slug": "people-literacy-and-operating-model",
    "name": "People, Literacy & Operating Model",
    "order": 7,
    "purpose": "Build the human and organisational capacity to deliver AI: a workforce-wide AI literacy programme (a legal obligation under EU AI Act Article 4), specialist talent strategy, an effective AI Center of Excellence and operating model, human-AI collaboration design, and partner and ecosystem engagement.",
    "scope_in": [
      "AI literacy (workforce-wide, EU AI Act Article 4 obligation)",
      "AI specialist talent (ML engineers, data scientists, MLOps, AI product, ethics)",
      "AI Center of Excellence and operating model (federated, hub-and-spoke, embedded)",
      "Human-AI collaboration design (workflow patterns, decision rights)",
      "Partner and ecosystem engagement (academic, vendor, open-source, public-private)"
    ],
    "scope_out": [
      "Adoption execution mechanics (P8)",
      "Workforce KPIs at the business-line level (P1)"
    ],
    "weights": {
      "default": 1.0,
      "regulated_industry": 1.0,
      "early_stage": 1.5
    }
  },
  {
    "id": "P8",
    "slug": "adoption-and-change-management",
    "name": "Adoption & Change Management",
    "order": 8,
    "purpose": "Drive AI adoption so that capability translates into outcomes. Cover executive sponsorship and narrative, workflow and process redesign, training rollout and enablement, communication and community, resistance management, and adoption metrics with feedback loops. Grounded in Prosci ADKAR and McKinsey/BCG empirical findings that adoption — not technology — separates AI leaders from laggards.",
    "scope_in": [
      "Executive sponsorship and AI narrative",
      "Workflow and process redesign for AI-enabled work",
      "Training rollout and enablement (delivery)",
      "Communication and community-building",
      "Resistance management and barrier removal",
      "Adoption metrics and feedback loops"
    ],
    "scope_out": [
      "AI literacy programme content (P7)",
      "Use-case delivery method (P9)",
      "Talent strategy (P7)"
    ],
    "weights": {
      "default": 1.0,
      "regulated_industry": 1.0,
      "early_stage": 1.5
    }
  },
  {
    "id": "P9",
    "slug": "ai-value-delivery",
    "name": "AI Value Delivery (BABOK-aligned)",
    "order": 9,
    "purpose": "Deliver AI value end-to-end through BABOK v3 disciplines applied to AI initiatives — discovery, elicitation, requirements, design, pilot, benefits realisation, handover. Distinct from Pillar 1 (which governs the portfolio) and Pillar 8 (which governs adoption); Pillar 9 governs how each use case progresses from idea to sustained value.",
    "scope_in": [
      "Discovery (BABOK Strategy Analysis — current state, future state, change strategy)",
      "Elicitation & stakeholder engagement (BABOK Elicitation & Collaboration)",
      "Requirements analysis and acceptance criteria (BABOK RLCM + RADD)",
      "Solution design and evaluation criteria (BABOK RADD)",
      "Pilot-to-production lifecycle (cross-references P4, P6 controls)",
      "Benefits realisation and continuous improvement (BABOK Solution Evaluation)"
    ],
    "scope_out": [
      "Portfolio prioritisation (P1)",
      "Adoption (P8)",
      "Platform delivery (P6)"
    ],
    "weights": {
      "default": 1.0,
      "regulated_industry": 1.2,
      "early_stage": 1.2
    }
  }
];

export const DIMENSIONS: Dimension[] = [
  {
    "id": "P1-DIM-01",
    "pillar_id": "P1",
    "name": "AI Vision & Strategic Alignment",
    "what_it_covers": "The organisation's articulated AI ambition, its alignment with corporate strategy, and the executive narrative that connects AI investment to measurable business outcomes.",
    "why_it_matters": "McKinsey 2024 finds that AI leaders have a single, executive-owned AI narrative tied to two or three strategic priorities; laggards have many competing narratives. Without strategic alignment, AI spend fragments.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "No documented AI vision. AI ambition exists in slide decks but is not connected to strategy.",
      "2": "Draft AI vision document exists. Communicated occasionally; not part of strategic planning cycle.",
      "3": "Published AI vision, approved by the executive team, mapped to 2–3 corporate strategic priorities. Refreshed annually.",
      "4": "AI vision drives the planning cycle. Funding allocation, KPI scorecards, and incentives are aligned to it. Reviewed quarterly.",
      "5": "AI strategy is indistinguishable from corporate strategy. Continuously refreshed against market and capability benchmarks; communicated externally."
    },
    "nist_tier_profile": {
      "partial": "Strategic intent is implicit; no link between AI work and risk tolerance.",
      "risk_informed": "Strategic intent acknowledges AI risks; risk tolerance discussed informally.",
      "repeatable": "Strategic intent documents risk tolerance per use-case category.",
      "adaptive": "Strategy continuously updates risk tolerance based on portfolio learnings and external context."
    },
    "common_pitfalls": [
      "Vision so broad it justifies any project (\"become AI-first\") rather than guiding trade-offs.",
      "Vision owned by IT alone; missing CFO or business-line accountability.",
      "Vision never refreshed after publication; becomes shelfware in 6 months."
    ]
  },
  {
    "id": "P1-DIM-02",
    "pillar_id": "P1",
    "name": "Use-Case Discovery & Prioritization",
    "what_it_covers": "A repeatable process to surface candidate AI use cases from the business and rank them on impact, feasibility, risk, and strategic fit.",
    "why_it_matters": "Most organisations never run out of AI ideas; they run out of the discipline to pick the right ones. A scored prioritisation framework is what separates portfolios from pilot factories.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "Use cases surface ad-hoc from individual enthusiasm; no intake.",
      "2": "Periodic workshops collect ideas; informal ranking by 1–2 people.",
      "3": "Documented intake; scoring rubric covering impact, feasibility, risk, strategic fit. Cross-functional review committee.",
      "4": "Quarterly portfolio review. Scoring rubric calibrated against past outcomes. Risk-class screening integrated upstream.",
      "5": "Continuous, AI-assisted opportunity discovery from internal data. Scoring rubric tested for predictive validity against realised benefits."
    },
    "nist_tier_profile": {
      "partial": "Risk is not considered at intake.",
      "risk_informed": "High-risk use cases are flagged informally.",
      "repeatable": "Use-case intake includes a documented risk classification step (EU AI Act risk class, NIST AI RMF Map function).",
      "adaptive": "Risk classification is integrated into the prioritisation score; high-risk use cases trigger early FRIA and architecture review."
    },
    "common_pitfalls": [
      "Scoring rubric never validated against actual outcomes.",
      "Prioritisation gated by a single executive's preference, not the rubric.",
      "Risk class checked only after scoping is complete, leading to rework."
    ]
  },
  {
    "id": "P1-DIM-03",
    "pillar_id": "P1",
    "name": "Business Case & Investment Planning",
    "what_it_covers": "Structured business cases for AI initiatives including benefits, costs, risks, assumptions, and explicit success criteria.",
    "why_it_matters": "BCG 2024: 70% of AI value comes from people and process change. A credible business case must address operating-model change, not just technology cost. Without explicit success criteria, benefits cannot be tracked.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "Business cases are narrative slides without quantified benefits or costs.",
      "2": "Templated business cases used for some initiatives; quality varies.",
      "3": "Standard business-case template required for any AI initiative ≥ defined cost threshold. Includes quantified benefits, costs, risks, success criteria, and sponsor sign-off.",
      "4": "Business cases integrate with portfolio register. Assumptions logged for later validation. Sensitivity analysis required.",
      "5": "Business cases are continuous, updated quarterly against actuals. AI-assisted forecasting calibrates assumptions across the portfolio."
    },
    "nist_tier_profile": {
      "partial": "Risks listed informally if at all.",
      "risk_informed": "Risks listed; mitigation plans for high-risk items.",
      "repeatable": "Risks logged in a structured register with owners and treatment plans.",
      "adaptive": "Risks tracked across the portfolio; learnings inform business-case templates and assumptions."
    },
    "common_pitfalls": [
      "Benefits stated as \"improved customer experience\" without a measurable proxy.",
      "Cost-of-ownership ignores model retraining, monitoring, and operations.",
      "No explicit success criteria; impossible to confirm or deny benefits later."
    ]
  },
  {
    "id": "P1-DIM-04",
    "pillar_id": "P1",
    "name": "Portfolio Governance (Use-Case Factory)",
    "what_it_covers": "The operating model that runs the AI portfolio end-to-end: intake, screening, pilot, scale, retire. Includes cadence, gates, owners, and capacity management.",
    "why_it_matters": "Gartner and McKinsey both call the use-case factory a top-3 differentiator for AI leaders. Treating each use case as a one-off project produces duplicated effort, no learning compounding, and no capacity discipline.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "No portfolio view of AI work. Each initiative is independent.",
      "2": "Informal portfolio list maintained by one team. No gates or cadence.",
      "3": "Documented stage-gate factory (intake → screen → pilot → scale → retire) with named owners, defined gate criteria, monthly cadence.",
      "4": "Portfolio review at executive level. Capacity managed against demand. Cross-use-case patterns reused (data products, components). Retirement reviewed.",
      "5": "Self-service intake; portfolio dashboards in real time; AI-assisted matching of new ideas to reusable components and prior learnings."
    },
    "nist_tier_profile": {
      "partial": "No coordination across use cases on risk.",
      "risk_informed": "Risk gates exist on critical use cases.",
      "repeatable": "Every use case passes documented risk and ethics gates appropriate to its class.",
      "adaptive": "Portfolio governance tracks aggregate risk exposure; rebalances investment to address concentration risk."
    },
    "common_pitfalls": [
      "Factory designed but never enforced; teams bypass intake.",
      "Stage gates demand the same artefacts regardless of use-case size; over-engineering for small bets.",
      "No retirement decisions; portfolio bloats with maintenance debt."
    ]
  },
  {
    "id": "P1-DIM-05",
    "pillar_id": "P1",
    "name": "Benefits Realisation & ROI Tracking",
    "what_it_covers": "Disciplined tracking of whether deployed AI systems deliver the benefits claimed in their business cases; visible accountability for realised value, not deployment milestones.",
    "why_it_matters": "Only 11% of organisations capture meaningful EBIT impact from AI (McKinsey 2024); the differentiator is whether benefits are tracked against the business case after deployment, not before.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "Benefits never measured post-deployment. Pilots celebrated as success at launch.",
      "2": "Some deployed systems have benefits reports; quality varies; no cadence.",
      "3": "Mandatory benefits report for every production system within 6 months of launch and again at 12 months. Reviewed by sponsor.",
      "4": "Quarterly benefits dashboard at executive level. Underperformers trigger rescoping or retirement. Aggregate portfolio value tracked.",
      "5": "Real-time benefits telemetry per use case; AI-assisted attribution; benefits realisation predicts and influences future investment."
    },
    "nist_tier_profile": {
      "partial": "Realised benefits not connected to risk treatment.",
      "risk_informed": "Underperformance investigated for risk causes.",
      "repeatable": "Benefits review includes structured assessment of unintended consequences and residual risk.",
      "adaptive": "Benefits and risk telemetry are reconciled continuously; portfolio-wide trade-offs explicit."
    },
    "common_pitfalls": [
      "Benefits defined as activity (e.g., users interacting with the model) rather than business outcome.",
      "Attribution missing; cannot tell whether realised gains came from AI or other changes.",
      "No mechanism to retire underperforming systems; sunk-cost paralysis."
    ]
  },
  {
    "id": "P1-DIM-06",
    "pillar_id": "P1",
    "name": "Strategic Capability Reassessment",
    "what_it_covers": "Periodic re-evaluation of the organisation's AI strategic position against market shifts, regulatory changes, competitor moves, and realised portfolio learnings.",
    "why_it_matters": "AI strategy decays faster than most strategic plans. Foundation models, regulatory regimes (EU AI Act 2025–2027 phased applicability), and competitor positions shift quarterly. Annual reviews are insufficient for AI strategy.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "Strategy reviewed only when crises force it.",
      "2": "Annual strategy review covers AI as one topic among many.",
      "3": "Dedicated quarterly AI strategy review by executive team; benchmarks tracked; portfolio learnings inform strategy.",
      "4": "Monthly market-and-tech scan feeds quarterly strategy review. External benchmarking against peers commissioned annually.",
      "5": "Continuous strategic-signal monitoring. Strategy responds to material signals within weeks. External thought leadership informs and is informed by strategy."
    },
    "nist_tier_profile": {
      "partial": "Strategy unresponsive to risk-environment changes.",
      "risk_informed": "Strategy reviewed when major regulations are enacted.",
      "repeatable": "Strategy review includes scheduled regulatory and threat-landscape scan.",
      "adaptive": "Strategy anticipates regulatory and threat shifts; positions the organisation ahead of mandates."
    },
    "common_pitfalls": [
      "Reassessment only after a regulatory crisis (EU AI Act enforcement) or a major external event.",
      "Benchmarking compares to peers using outdated definitions of AI success.",
      "Reassessment produces deck refresh but no portfolio re-balancing."
    ]
  },
  {
    "id": "P2-DIM-01",
    "pillar_id": "P2",
    "name": "AI Policies & AI Management System",
    "what_it_covers": "The corpus of approved AI policies and supporting procedures, structured as an AI management system aligned with ISO/IEC 42001:2023; includes AI policy itself, alignment with other policies (security, privacy, HR), and periodic review.",
    "why_it_matters": "ISO/IEC 42001:2023 made AI management systems certifiable; EU AI Act Article 9 requires a documented AI risk management system for high-risk AI. Without an approved AI policy, every operational decision is ad hoc and unauditable.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "No documented AI policy. Practice governed by individual judgement.",
      "2": "Draft AI policy circulating. Not formally approved or communicated.",
      "3": "Approved AI policy in force. Aligned with security, privacy, HR policies. Annual review scheduled.",
      "4": "Full AI management system (AIMS) deployed per ISO 42001 clauses 4–10 with Annex A controls applied to high-risk areas. Internal audit cycle in place.",
      "5": "AIMS externally certified (ISO/IEC 42001) or equivalent. Continuous-improvement cycle drives policy updates from operational learnings."
    },
    "nist_tier_profile": {
      "partial": "Policies, if present, are aspirational; no link to operations.",
      "risk_informed": "Policies acknowledge AI risk categories; uneven application.",
      "repeatable": "Policies are approved, communicated, and applied consistently across documented scope.",
      "adaptive": "Policies improved on cadence; insights from incidents and audits feed back into policy revision."
    },
    "common_pitfalls": [
      "Policy copies vendor or competitor language without organisational customisation.",
      "No alignment between AI policy and adjacent security/privacy policies; gaps and contradictions.",
      "Policy approved but never linked to operational controls."
    ]
  },
  {
    "id": "P2-DIM-02",
    "pillar_id": "P2",
    "name": "RACI, Decision Rights & AI Ethics Body",
    "what_it_covers": "Defined accountable, responsible, consulted, and informed parties for AI decisions; existence and empowerment of an AI ethics body or officer with authority to halt launches and arbitrate trade-offs.",
    "why_it_matters": "NIST AI RMF GOVERN 2.1 and 2.3 require clear roles and executive accountability. Without explicit decision rights, AI launches accelerate past gates; without an empowered ethics body, trade-offs collapse to schedule pressure.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "No named owners for AI decisions. No ethics body.",
      "2": "Some roles named informally. Ethics body under discussion.",
      "3": "RACI documented per AI system class. AI ethics body chartered with documented mandate, membership, and meeting cadence.",
      "4": "Ethics body has documented authority to halt or condition launches; integrated with portfolio reviews; decision log auditable.",
      "5": "Ethics oversight is embedded in operating model; cross-organisational; decisions influence external standards and disclosures."
    },
    "nist_tier_profile": {
      "partial": "Risk decisions made by whoever is fastest to act.",
      "risk_informed": "Ethics issues escalated informally when noticed.",
      "repeatable": "Defined escalation paths to a chartered body for material risk decisions.",
      "adaptive": "Ethics body operates continuously; predictive risk monitoring informs proactive escalation."
    },
    "common_pitfalls": [
      "Ethics body lacks authority; recommendations routinely overridden by delivery teams.",
      "RACI assigned only at the senior level; nobody operationally accountable.",
      "No documented escalation criteria; everything reaches the body or nothing does."
    ]
  },
  {
    "id": "P2-DIM-03",
    "pillar_id": "P2",
    "name": "AI Risk Management System",
    "what_it_covers": "A structured AI risk management process covering identification, analysis, treatment, monitoring, and communication of AI risks throughout each AI system's lifecycle.",
    "why_it_matters": "EU AI Act Article 9 mandates a continuous risk management system for high-risk AI. NIST AI RMF treats this as the Govern + Map + Manage backbone. Without it, risks are observed only after harm.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "No structured AI risk process. Risks noted in slide decks, not tracked.",
      "2": "AI risks logged inconsistently in spreadsheets. No standard taxonomy.",
      "3": "Documented AI risk taxonomy. Risk register per system. Treatment plans approved by owners. Periodic review.",
      "4": "Continuous risk monitoring; risk metrics on dashboards; quantitative risk appetite and tolerance set; cross-system aggregation.",
      "5": "AI-augmented risk monitoring; predictive risk signals; risk register integrated with ERM and board reporting."
    },
    "nist_tier_profile": {
      "partial": "Risk identification reactive; no taxonomy.",
      "risk_informed": "Common risks tracked informally for known use cases.",
      "repeatable": "Documented risk register per AI system with assigned owners and treatment status.",
      "adaptive": "Risk management integrated organisation-wide; portfolio-level risk reporting; continuous improvement."
    },
    "common_pitfalls": [
      "Reusing IT risk register categories without AI-specific extensions (bias, drift, hallucination, prompt injection).",
      "Risk register exists but is not consulted at design or pre-launch gates.",
      "No connection between risk register and incident response."
    ]
  },
  {
    "id": "P2-DIM-04",
    "pillar_id": "P2",
    "name": "EU AI Act Conformity (Risk Classification, FRIA, Technical Documentation)",
    "what_it_covers": "Operational readiness for EU AI Act obligations: classifying each AI system under Article 6/7, completing FRIAs (Article 27) where required, producing technical documentation per Article 11/Annex IV, and applying conformity assessment per Article 43.",
    "why_it_matters": "EU AI Act applies in phases starting February 2025; high-risk obligations effective August 2026. Penalties under Article 99 reach EUR 35M or 7% global turnover for prohibited-practice violations. Conformity is a hard gate for any organisation serving the EU market.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "No mapping of AI portfolio to EU AI Act categories.",
      "2": "Awareness exercise complete; high-risk candidates identified at a high level.",
      "3": "Every in-scope AI system classified; FRIA template adopted; technical-documentation template per Annex IV in use for high-risk systems.",
      "4": "Pre-deployment conformity gate enforced for high-risk systems; FRIA completed and reviewed for every applicable deployer use case; technical documentation maintained and versioned.",
      "5": "Continuous conformity monitoring; system inventory reconciles automatically with classification; ready-state evidence packs producible on demand."
    },
    "nist_tier_profile": {
      "partial": "Compliance treated as paperwork at the end.",
      "risk_informed": "High-risk systems given some pre-deployment review.",
      "repeatable": "Conformity gate documented and applied consistently to all in-scope systems.",
      "adaptive": "Conformity is automated where possible; learning loop from regulatory enforcement actions in market."
    },
    "common_pitfalls": [
      "Treating risk classification as a one-time exercise; not refreshed when use cases evolve.",
      "FRIA template adopted but not actually integrated with deployment gates.",
      "Technical documentation accumulates inconsistently across teams."
    ]
  },
  {
    "id": "P2-DIM-05",
    "pillar_id": "P2",
    "name": "AI System Inventory & Lifecycle Decisions",
    "what_it_covers": "A complete, current inventory of AI systems in development and production, with ownership, risk class, purpose, status, and end-of-life decisions (per NIST AI RMF GOVERN 1.6 and 1.7).",
    "why_it_matters": "You cannot govern what you cannot see. ISO 42001 and NIST AI RMF GOVERN 1.6 both require an AI system inventory. Without it, FRIAs, risk reviews, and conformity assessments are impossible at scale.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "No inventory. Existence of AI systems known only through individuals.",
      "2": "Spreadsheet inventory maintained by one team; partial coverage.",
      "3": "Authoritative inventory covering all production AI systems and high-risk in-development; reviewed quarterly; owners verified.",
      "4": "Inventory automated through telemetry; integrated with procurement, change management, and risk register; decommissioning workflow live.",
      "5": "Inventory updates in real time from CI/CD; inventory drives compliance evidence generation; AI-assisted detection of unregistered AI use."
    },
    "nist_tier_profile": {
      "partial": "Inventory absent; shadow AI common.",
      "risk_informed": "Inventory captures known production systems.",
      "repeatable": "Inventory covers all in-scope systems with documented stewardship.",
      "adaptive": "Inventory reconciled continuously; integrated with discovery and compliance tooling."
    },
    "common_pitfalls": [
      "Spreadsheet inventory drifts out of date within months.",
      "Inventory does not include third-party AI services or embedded vendor AI.",
      "No decommissioning entries; retired systems clutter the register."
    ]
  },
  {
    "id": "P2-DIM-06",
    "pillar_id": "P2",
    "name": "Third-Party / Vendor AI Governance",
    "what_it_covers": "Governance of AI supplied by third parties — model providers, embedded AI features in SaaS, open-source models, fine-tuners, annotation vendors. Includes contract clauses, risk assessment, evidence collection, and right-to-audit (ISO 42001 A.10; NIST AI RMF GOVERN 6.1, 6.2).",
    "why_it_matters": "Most AI risk now enters via the supply chain — embedded LLM features, third-party fine-tunes, or upstream training data with unclear provenance. Without governance, organisations carry liability for risks they cannot see.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "Vendors selected without AI-specific assessment.",
      "2": "Some vendor questionnaires include AI questions; not systematic.",
      "3": "Standard AI vendor due-diligence questionnaire; AI-specific contract clauses (ethics, audit, incident reporting); supplier risk register.",
      "4": "Tiered supplier programme: critical AI suppliers audited annually; SBOM/AI-BOM expected; incident notification SLAs in contracts.",
      "5": "Continuous supplier risk monitoring; supplier ecosystem influences organisation's standards (right-to-audit exercised, results published)."
    },
    "nist_tier_profile": {
      "partial": "Supplier AI risk not assessed.",
      "risk_informed": "Critical suppliers asked for AI-related assurances.",
      "repeatable": "All material AI suppliers under documented AI clauses; periodic review.",
      "adaptive": "Supplier AI risk integrated into ERM; right-to-audit exercised; supplier ecosystem governance loop."
    },
    "common_pitfalls": [
      "Treating embedded AI features in SaaS as ordinary software.",
      "Open-source model use with no licence or provenance review.",
      "No contingency for supplier withdrawal or model deprecation."
    ]
  },
  {
    "id": "P3-DIM-01",
    "pillar_id": "P3",
    "name": "Fairness & Non-Discrimination",
    "what_it_covers": "Dataset representativeness and diversity, fairness testing during development, post-deployment fairness drift monitoring, exception governance, and recourse for adverse automated decisions.",
    "why_it_matters": "EU AI Act Article 10 requires bias-relevant data governance for high-risk systems; NIST AI RMF MEASURE 2.11 mandates fairness evaluation; discrimination lawsuits and reputational harm are leading AI risks (Stanford AI Index 2025).",
    "evidence_required_at": 3,
    "rubric": {
      "1": "No fairness consideration. Datasets used as-is; no bias testing.",
      "2": "Occasional manual review for visible bias on pilots. No fairness metrics defined.",
      "3": "Documented fairness test battery (e.g., disparate impact, equal opportunity, TPR parity) for high-risk systems; thresholds defined; results archived.",
      "4": "Fairness tests integrated into MLOps gates; post-deployment drift monitoring; exception workflow; user-recourse mechanism with SLAs.",
      "5": "Continuous fairness monitoring with auto-rollback; published fairness reports; external review; fairness goals inform model selection upstream."
    },
    "nist_tier_profile": {
      "partial": "Bias issues addressed only after external complaints.",
      "risk_informed": "Manual fairness checks on critical projects.",
      "repeatable": "Documented fairness test process and approved exception workflow.",
      "adaptive": "Continuous fairness drift monitoring; automated rollback when thresholds breached."
    },
    "common_pitfalls": [
      "Single fairness metric optimised in isolation (improving one harms another).",
      "Bias tested only at training; not monitored post-deployment.",
      "Protected attributes removed naively, leaving proxies that still discriminate."
    ]
  },
  {
    "id": "P3-DIM-02",
    "pillar_id": "P3",
    "name": "Transparency & Explainability",
    "what_it_covers": "Documentation of how systems were built and decisions are made (Model Cards, Data Sheets), stakeholder-appropriate explanations, decision traceability and audit logs, and change-management/release notes for models.",
    "why_it_matters": "EU AI Act Articles 13 and 50 require transparency to deployers and affected persons; ISO/IEC 42001 A.8 requires information for interested parties; explainability is a prerequisite for accountability in regulated decisions.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "No model documentation produced.",
      "2": "Inconsistent notes; some pilots have basic descriptions.",
      "3": "Standard Model Card and Data Sheet templates used for high-risk systems; versioned; stakeholder-appropriate explanations for end-users.",
      "4": "Templates used across most systems; change logs maintained; decision traceability in place for high-risk systems; comprehension tested with end-users.",
      "5": "All systems documented; reviewed independently; documentation shared proactively with regulators and stakeholders as appropriate."
    },
    "nist_tier_profile": {
      "partial": "Transparency considered only when asked.",
      "risk_informed": "Documentation produced for selected systems on demand.",
      "repeatable": "Documentation produced as a release gate for high-risk systems.",
      "adaptive": "Documentation continuously updated and externally validated."
    },
    "common_pitfalls": [
      "Model Cards copy a template without populating limitations or risks honestly.",
      "Explanations technically accurate but unintelligible to affected users.",
      "Audit logs incomplete; cannot reconstruct why a decision was produced."
    ]
  },
  {
    "id": "P3-DIM-03",
    "pillar_id": "P3",
    "name": "Privacy & Data Protection",
    "what_it_covers": "Lawful basis and data minimisation, DPIAs/PIAs, Privacy-by-Design techniques (anonymisation, pseudonymisation, differential privacy, federated learning), user rights tooling, and retention/deletion controls.",
    "why_it_matters": "GDPR penalties remain a top financial AI risk; NIST AI 600-1 lists data privacy as a primary GenAI risk; ISO 42001 A.7 governs data for AI systems. Privacy violations are also a frequent failure mode for GenAI (model training on personal data, vector store leakage).",
    "evidence_required_at": 3,
    "rubric": {
      "1": "No privacy assessment specific to AI; broad data collection.",
      "2": "Some DPIAs conducted late, after architecture decisions.",
      "3": "Documented lawful basis and data minimisation for high-risk systems; DPIAs required before launch; privacy techniques applied in sensitive projects.",
      "4": "Privacy-by-Design standardised across most pipelines; user rights tooling with SLAs; automated retention/deletion controls; vendor DPIAs.",
      "5": "Privacy controls organisation-wide with continuous validation; user-rights tooling spans vendor data; defensible deletion certificates available."
    },
    "nist_tier_profile": {
      "partial": "Privacy treated as a regulatory afterthought.",
      "risk_informed": "Privacy considered for known sensitive use cases.",
      "repeatable": "Documented privacy gate at design and pre-launch.",
      "adaptive": "Privacy posture monitored continuously; automated checks across pipelines."
    },
    "common_pitfalls": [
      "LLM fine-tuning data not screened for PII.",
      "Vector stores treat embeddings as non-personal data; reversal attacks ignored.",
      "User-rights tooling absent or manual with long SLAs."
    ]
  },
  {
    "id": "P3-DIM-04",
    "pillar_id": "P3",
    "name": "Human Oversight & Recourse",
    "what_it_covers": "Human-in-the-loop / human-on-the-loop design, override and appeals mechanisms, reviewer enablement and training, calibration against automation bias, and protected channels for dissent.",
    "why_it_matters": "EU AI Act Article 14 requires meaningful human oversight for high-risk AI; NIST AI 600-1 names Human-AI Configuration as a risk category. Without trained reviewers and real authority to override, oversight becomes performative.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "No human review for high-risk decisions.",
      "2": "Reviewers involved informally without criteria.",
      "3": "Documented HITL/HOTL design for high-risk decisions; reviewer training; override and appeals process with audit trail.",
      "4": "Systematic review with calibrated workloads, QA on reviewer decisions, and protected dissent channels; analytics on override rates feed model updates.",
      "5": "Org-wide oversight policy with continuous training; appeals analytics improve fairness; reviewer well-being and decision quality monitored."
    },
    "nist_tier_profile": {
      "partial": "Override exists in theory, never exercised.",
      "risk_informed": "Override available for critical decisions; usage tracked informally.",
      "repeatable": "Override and appeals documented; usage logged; training mandatory for reviewers.",
      "adaptive": "Override metrics analysed; outcomes feed model improvements; appeal data drives fairness reviews."
    },
    "common_pitfalls": [
      "Reviewers under time pressure rubber-stamp model output (automation bias).",
      "Appeals process exists but is hidden from affected users.",
      "Override authority granted but no protection for reviewers who use it."
    ]
  },
  {
    "id": "P3-DIM-05",
    "pillar_id": "P3",
    "name": "Stakeholder Engagement & Communication",
    "what_it_covers": "Engagement with internal stakeholders, affected groups, regulators, and civil society on AI deployments and policies; external communication including transparency reports.",
    "why_it_matters": "NIST AI RMF GOVERN 5.1, 5.2 require feedback mechanisms; ISO 42001 A.8 requires information to interested parties; EU AI Act Article 50 mandates user notice for deepfakes, chatbots, and emotion recognition. Engagement is what builds the social license to operate.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "No external engagement on AI.",
      "2": "Occasional briefings to customers or regulators.",
      "3": "Documented engagement plan for high-risk systems; stakeholder feedback collected and considered; user-facing notice on automated decisions.",
      "4": "Regular engagement with affected groups; published transparency reports; user notice standardised across systems.",
      "5": "Continuous, two-way engagement; published commitments measured; participation in standard-setting."
    },
    "nist_tier_profile": {
      "partial": "AI deployed without external communication.",
      "risk_informed": "Material deployments accompanied by stakeholder briefings.",
      "repeatable": "Engagement plan and disclosure templates applied consistently for in-scope systems.",
      "adaptive": "Continuous engagement loop with measurable trust outcomes."
    },
    "common_pitfalls": [
      "Engagement performed only after a crisis or media incident.",
      "Notices buried in terms of service; users do not realise they are interacting with AI.",
      "Feedback collected but not influencing decisions."
    ]
  },
  {
    "id": "P3-DIM-06",
    "pillar_id": "P3",
    "name": "Sustainability of AI Workloads",
    "what_it_covers": "Measurement and management of energy use, water use, and carbon footprint of AI training and inference; green compute decisions; sustainable procurement for AI services; decommissioning of unused models.",
    "why_it_matters": "NIST AI 600-1 names Environmental Impacts as a GenAI risk; NIST AI RMF MEASURE 2.12 requires environmental measurement; ESG reporting expectations increasingly cover AI workloads.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "Not measured.",
      "2": "Energy or carbon estimated occasionally; no targets.",
      "3": "Energy and carbon measured for material AI workloads; reported quarterly; baseline established.",
      "4": "Measured across most workloads; reduction targets set; sustainable procurement clauses in supplier contracts; unused models decommissioned.",
      "5": "Org-wide measurement with public reporting; targets met or exceeded; AI sustainability informs platform and model choices."
    },
    "nist_tier_profile": {
      "partial": "Sustainability not on radar.",
      "risk_informed": "High-cost workloads occasionally reviewed for efficiency.",
      "repeatable": "Sustainability measurement and reporting standard for in-scope workloads.",
      "adaptive": "Sustainability tracked continuously; targets reduce intensity year over year."
    },
    "common_pitfalls": [
      "Inference cost ignored because training cost dominates accounting (in practice, inference at scale dominates lifecycle cost).",
      "Models retained because deletion seems risky; long tail of dormant models consumes resources.",
      "Sustainability reported without provider-specific data."
    ]
  },
  {
    "id": "P4-DIM-01",
    "pillar_id": "P4",
    "name": "Threat Modelling & Secure MLOps",
    "what_it_covers": "AI-specific threat modelling integrated into design; secure MLOps patterns (least privilege, segmentation, secrets management, signed artefacts); ML/AI threats mapped against MITRE ATLAS and the OWASP LLM Top 10.",
    "why_it_matters": "EU AI Act Article 15 mandates cybersecurity for high-risk AI; OWASP LLM Top 10 (2025) and MITRE ATLAS expose attack surfaces that traditional appsec misses (training-data poisoning, vector store cross-tenant leakage, system-prompt leakage).",
    "evidence_required_at": 3,
    "rubric": {
      "1": "No AI-specific threat modelling. ML pipeline security ad hoc.",
      "2": "Some infrastructure controls; ML-specific risks not addressed.",
      "3": "Documented threat model for each high-risk system covering OWASP LLM Top 10 and ATLAS tactics; secure MLOps baseline applied.",
      "4": "Threat modelling integrated as a design gate; signed model artefacts and dataset hashes; access controls and segmentation enforced.",
      "5": "Org-wide AI threat modelling with shared knowledge base; SBOM/AI-BOM standard; supply-chain attestations enforced."
    },
    "nist_tier_profile": {
      "partial": "Threat modelling absent.",
      "risk_informed": "Threat modelling done informally for known concerns.",
      "repeatable": "Threat models produced as a gate for in-scope systems and reviewed periodically.",
      "adaptive": "Threat models updated continuously as the threat landscape evolves; shared org-wide."
    },
    "common_pitfalls": [
      "Reusing appsec STRIDE without adding ML-specific extensions.",
      "Threat modelling done late, after architecture decisions are fixed.",
      "Threat models not refreshed as model and use case change."
    ]
  },
  {
    "id": "P4-DIM-02",
    "pillar_id": "P4",
    "name": "Adversarial Robustness & Red-Teaming",
    "what_it_covers": "Structured adversarial testing of AI systems: evasion attacks, poisoning attacks, model extraction, membership inference, and targeted red-team exercises by trained adversaries (internal or external).",
    "why_it_matters": "NIST AI 100-2 (2024) catalogues real-world adversarial ML attacks; NIST AI RMF MEASURE 2.6, 2.7 require safety and security evaluation. Robustness testing is the only credible defence against adversarial misuse in production.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "No adversarial testing.",
      "2": "Basic robustness checks on selected models occasionally.",
      "3": "Documented adversarial test plan for high-risk systems; results archived; remediation tracked.",
      "4": "Quarterly red-team exercises with documented scope, methodology, and remediation SLAs; external red-team for systemic-risk systems.",
      "5": "Continuous, automated adversarial testing in CI/CD; external red-team for all critical systems; results shape model and platform design."
    },
    "nist_tier_profile": {
      "partial": "Adversarial threats not considered.",
      "risk_informed": "Manual probing on critical systems.",
      "repeatable": "Documented red-team programme; cadence appropriate to risk class.",
      "adaptive": "Continuous adversarial testing; attack simulations; lessons feed control improvements."
    },
    "common_pitfalls": [
      "Treating red-teaming as a one-off pre-launch event.",
      "Red-team findings not tracked through to remediation.",
      "In-house red-teams lack adversarial mindset; tests are perfunctory."
    ]
  },
  {
    "id": "P4-DIM-03",
    "pillar_id": "P4",
    "name": "GenAI Safety (Prompt Injection, Hallucination, Leakage, Jailbreak)",
    "what_it_covers": "GenAI-specific controls covering OWASP LLM01 (prompt injection), LLM07 (system prompt leakage), LLM09 (misinformation/hallucination), LLM02 (sensitive information disclosure), plus jailbreak resistance and harmful-content guardrails.",
    "why_it_matters": "OWASP LLM Top 10 (2025) makes prompt injection the #1 risk; NIST AI 600-1 names Confabulation, Information Integrity, and Information Security as primary GenAI risk categories. These risks are absent from traditional appsec controls.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "No GenAI safety evaluation.",
      "2": "Ad-hoc prompt lists; basic filtering.",
      "3": "Standard evaluation suite (toxicity, PII leakage, prompt injection, jailbreak resistance) for high-risk apps; input/output guardrails in place.",
      "4": "Continuous evaluation in CI/CD; runtime guardrails enforced (e.g., NeMo Guardrails, Llama Guard); hallucination monitoring on production traffic.",
      "5": "Org-wide GenAI safety programme; jailbreak testing automated; watermarking and provenance signals embedded where applicable; user-facing safety UX."
    },
    "nist_tier_profile": {
      "partial": "GenAI deployed without safety evaluation.",
      "risk_informed": "Manual safety checks on flagship deployments.",
      "repeatable": "Documented safety eval suite gates launches; runtime guardrails active.",
      "adaptive": "Continuous safety testing and runtime monitoring; controls evolve with attack research."
    },
    "common_pitfalls": [
      "Relying on the foundation-model provider's safety claims without independent evaluation.",
      "Guardrails set so aggressively that legitimate inputs are blocked.",
      "No hallucination monitoring; users only flag errors that are obvious."
    ]
  },
  {
    "id": "P4-DIM-04",
    "pillar_id": "P4",
    "name": "Model Supply-Chain Integrity (incl. Vector & Embedding Security)",
    "what_it_covers": "Provenance and integrity of models, datasets, embeddings, plug-ins, and tools used by AI systems (OWASP LLM03 Supply Chain, LLM04 Data Poisoning, LLM06 Excessive Agency, LLM08 Vector and Embedding Weaknesses, NIST AI 600-1 Value Chain).",
    "why_it_matters": "Most AI risk now enters via the supply chain — third-party models, fine-tunes, embeddings, training data. Without provenance, integrity cannot be asserted; without integrity, downstream attacks are undetectable.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "No supply-chain controls; provenance unknown.",
      "2": "Critical model and dataset sources tracked manually.",
      "3": "Documented AI-SBOM / MLBOM for high-risk systems; signed artefacts; vector-store access control; agent permission-scoping policy.",
      "4": "AI-SBOM standard across production; signed datasets and models verified at deploy time; vector-store tenancy isolation tested; agent excess-agency limits enforced.",
      "5": "Supply-chain attestation programme; supplier signing required; continuous integrity verification; agent governance with capability inventory."
    },
    "nist_tier_profile": {
      "partial": "Provenance ignored.",
      "risk_informed": "Provenance tracked for critical artefacts.",
      "repeatable": "AI-SBOM, signing, and access controls applied per documented policy.",
      "adaptive": "Provenance verified continuously; supplier attestations enforced."
    },
    "common_pitfalls": [
      "Treating open-source model weights as inherently trustworthy.",
      "Embeddings shared across tenants without isolation testing.",
      "Agent given broad tool access; excessive agency exposes the entire backend."
    ]
  },
  {
    "id": "P4-DIM-05",
    "pillar_id": "P4",
    "name": "Post-Market Monitoring & Incident Response",
    "what_it_covers": "Continuous monitoring of deployed AI systems for safety, security, and performance regressions; documented incident response specific to AI; serious-incident reporting per EU AI Act Article 73.",
    "why_it_matters": "EU AI Act Article 72 mandates post-market monitoring; Article 73 mandates serious-incident reporting to authorities within statutory windows. NIST AI RMF MANAGE 4 covers post-deployment monitoring and incident communication.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "No AI-specific monitoring or incident response.",
      "2": "Generic ITIL incident process applied to AI; insufficient detection.",
      "3": "AI monitoring (drift, quality, safety, security) with thresholds; AI incident playbooks; statutory reporting workflow.",
      "4": "Cross-team SOC visibility on AI; runbooks and SLAs per incident class; post-mortems published internally; serious-incident reporting tested.",
      "5": "Continuous monitoring with auto-rollback; AI-specific drills (chaos engineering for AI); cross-industry information sharing."
    },
    "nist_tier_profile": {
      "partial": "Production failures noticed by users first.",
      "risk_informed": "Monitoring on critical systems; incident response improvised.",
      "repeatable": "Documented monitoring and incident playbooks applied consistently.",
      "adaptive": "Drills, post-mortems, and external info-sharing improve controls continuously."
    },
    "common_pitfalls": [
      "Monitoring focuses on infrastructure metrics; model behaviour invisible.",
      "No defined criteria for what constitutes a serious incident.",
      "Statutory reporting timeframes missed because authorities and process unclear."
    ]
  },
  {
    "id": "P4-DIM-06",
    "pillar_id": "P4",
    "name": "Runtime Guardrails & Rollback",
    "what_it_covers": "In-flight defences applied during AI inference and orchestration (input/output filtering, rate-limiting and unbounded-consumption protection per OWASP LLM10, prompt isolation, kill-switches), plus automated rollback to a known-good model version.",
    "why_it_matters": "OWASP LLM05 (Improper Output Handling), LLM10 (Unbounded Consumption), and LLM06 (Excessive Agency) all require runtime controls that cannot be relied upon from the model alone; the EU AI Act Article 15 implies deployment-time robustness controls.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "No runtime guardrails or rollback plan.",
      "2": "Basic input filtering; manual rollback.",
      "3": "Documented guardrail suite (input, output, rate, cost) for high-risk systems; one-click manual rollback; canary deployment.",
      "4": "Automated rollback on guardrail breach; cost and unbounded-consumption protection; isolation between user prompts and system prompts; one-click kill-switch.",
      "5": "Org-wide guardrails with shared library; auto-canary; canary failures auto-rollback; safety UX surfaces guardrail activations to users where appropriate."
    },
    "nist_tier_profile": {
      "partial": "No runtime controls; no rollback.",
      "risk_informed": "Manual rollback; basic input filtering.",
      "repeatable": "Documented runtime guardrails per system; rollback exercised.",
      "adaptive": "Continuous, automated runtime defence; guardrail evolution driven by incident learning."
    },
    "common_pitfalls": [
      "Rollback documented but never exercised; first attempt fails under real incident.",
      "Guardrails added as an afterthought, not part of the prompt and orchestration design.",
      "Rate-limiting absent; one prompt cascade exhausts budget and triggers denial-of-wallet."
    ]
  },
  {
    "id": "P5-DIM-01",
    "pillar_id": "P5",
    "name": "Data Quality & Lineage",
    "what_it_covers": "Quality measurement (accuracy, completeness, consistency, timeliness, validity, uniqueness), end-to-end lineage, anomaly detection, and schema conformance for data feeding AI systems.",
    "why_it_matters": "EU AI Act Article 10 requires training and validation data to be relevant, representative, and free of errors. ISO 42001 A.7.4 requires explicit data-quality criteria. Poor data is the #1 root cause of AI failure in MIT Sloan's 2024 survey.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "No measured data quality. Lineage unknown.",
      "2": "Quality checked manually for select datasets. Lineage partial.",
      "3": "Quality metrics defined per AI-critical dataset; automated checks; lineage maintained in a catalog.",
      "4": "Quality SLAs per data product; quality drift detected and acted on; lineage end-to-end including transformations.",
      "5": "Quality assured by data-mesh ownership; automated remediation; predictive quality monitoring; lineage extends into models and outputs."
    },
    "nist_tier_profile": {
      "partial": "Quality undefined.",
      "risk_informed": "Quality reviewed for known critical datasets.",
      "repeatable": "Quality criteria documented per dataset class and enforced.",
      "adaptive": "Quality monitored continuously; data-quality SLOs in place."
    },
    "common_pitfalls": [
      "Generic quality rules applied without AI use case in mind.",
      "Lineage stops at the data warehouse, not extending into ML features and models.",
      "Quality metrics measured but not enforced as gates."
    ]
  },
  {
    "id": "P5-DIM-02",
    "pillar_id": "P5",
    "name": "Data Governance & Stewardship",
    "what_it_covers": "Governance roles (Chief Data Officer, Data Stewards), policies for classification, retention, deletion, sharing, and use; aligned with AI policy (P2) and Privacy-by-Design (P3).",
    "why_it_matters": "ISO 42001 A.7 controls data for AI systems; A.4 requires documented data resources. NIST AI RMF MEASURE 2.10 measures privacy risk of AI data. Without governance, data quality and compliance drift.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "No data governance specific to AI.",
      "2": "Some stewards named; policies in draft.",
      "3": "Approved data governance covering classification, retention, sharing; named stewards for AI-critical domains; access controlled.",
      "4": "Stewardship operational with regular reviews; data classification embedded in pipelines; AI-specific data policies (training, synthetic data, RAG).",
      "5": "Federated stewardship through data-mesh; continuous policy compliance verification; data ethics review embedded."
    },
    "nist_tier_profile": {
      "partial": "Roles undefined.",
      "risk_informed": "Critical domains have stewards on paper.",
      "repeatable": "Stewardship operates on a documented cadence.",
      "adaptive": "Governance is data-mesh-native and continuously verified."
    },
    "common_pitfalls": [
      "Data classification policy in place but never applied to AI training datasets.",
      "Stewards named but lack time or authority.",
      "No retention rules for embeddings and vector indices."
    ]
  },
  {
    "id": "P5-DIM-03",
    "pillar_id": "P5",
    "name": "Storage & Pipeline Infrastructure",
    "what_it_covers": "Scalable storage (warehouses, lakes, lakehouses), pipeline orchestration, batch and streaming ingestion, feature stores, transformation logic with tests.",
    "why_it_matters": "AI systems fail when data pipelines drift, break, or lag. Modern AI requires both batch (training) and streaming (inference features, real-time RAG refresh).",
    "evidence_required_at": 3,
    "rubric": {
      "1": "Brittle, hand-coded pipelines; no orchestration.",
      "2": "Some orchestration; broken jobs detected manually.",
      "3": "Standardised pipeline framework (e.g., Airflow/Dagster); automated tests on critical transformations; SLAs on key pipelines.",
      "4": "Feature store live; streaming where required; observability on freshness and quality; reproducible historical data fetch.",
      "5": "Data products self-served, mesh-style; cost and latency optimised continuously; data-as-product SLOs."
    },
    "nist_tier_profile": {
      "partial": "Pipelines are not reproducible.",
      "risk_informed": "Critical pipelines reproducible with effort.",
      "repeatable": "Pipelines reproducible by design; failures detected and alerted.",
      "adaptive": "Pipelines self-healing; reproducibility verified continuously."
    },
    "common_pitfalls": [
      "Feature engineering duplicated across teams; subtle definition drift.",
      "Pipelines lack tests; silent failures produce stale features.",
      "No reproducibility; training data cannot be rebuilt for audit."
    ]
  },
  {
    "id": "P5-DIM-04",
    "pillar_id": "P5",
    "name": "Knowledge & Unstructured Data Readiness (RAG, Vectors)",
    "what_it_covers": "Curation, indexing, and freshness of unstructured corpora powering Retrieval-Augmented Generation; embedding model selection and versioning; retrieval quality monitoring; vector store hygiene.",
    "why_it_matters": "GenAI deployments live or die on retrieval quality. OWASP LLM08 (Vector and Embedding Weaknesses) and LLM09 (Misinformation) both have retrieval-side causes. The unstructured-data layer was largely absent from pre-GenAI data programmes.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "Documents dumped into a vector store; no curation.",
      "2": "Some curation; embeddings refreshed manually.",
      "3": "Curated corpora with documented sources, classifications, and access controls; embedding model versioned; ingestion pipeline live.",
      "4": "Retrieval quality measured (recall, precision, helpfulness); freshness SLAs; embedding refresh automated; per-tenant access enforced.",
      "5": "Knowledge layer treated as product; multiple retrievers fused; AI-assisted curation; observability ties retrieval to answer quality."
    },
    "nist_tier_profile": {
      "partial": "Knowledge layer ungoverned.",
      "risk_informed": "Critical corpora curated by individual teams.",
      "repeatable": "Documented curation, ingestion, refresh, access policy.",
      "adaptive": "Knowledge layer continuously evaluated and improved."
    },
    "common_pitfalls": [
      "Documents indexed without source-of-truth designation; conflicting versions retrieved.",
      "Vector store shared across tenants without isolation; data leaks across customers.",
      "No retrieval-quality monitoring; team only sees what users complain about."
    ]
  },
  {
    "id": "P5-DIM-05",
    "pillar_id": "P5",
    "name": "Synthetic Data",
    "what_it_covers": "Generation, validation, and governance of synthetic data for training, testing, evaluation, and edge-case coverage; controls against synthetic-to-synthetic feedback loops.",
    "why_it_matters": "Synthetic data is increasingly used to plug coverage gaps, augment minority classes for fairness, and test rare edge cases. Without validation, synthetic data introduces bias and unmeasured distributional shift.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "No synthetic data used or considered.",
      "2": "Synthetic data used ad hoc; quality unverified.",
      "3": "Documented synthetic-data policy; quality and privacy validation; provenance tagged.",
      "4": "Synthetic data integrated into MLOps for edge-case coverage; fairness augmentation; validated against real-data benchmarks.",
      "5": "Continuous synthetic generation tied to monitoring gaps; provenance traceable end-to-end; synthetic data shared safely with partners."
    },
    "nist_tier_profile": {
      "partial": "Synthetic data risks unrecognised.",
      "risk_informed": "Synthetic data validated informally.",
      "repeatable": "Policy enforces validation and provenance tagging.",
      "adaptive": "Synthetic data programme matures continuously."
    },
    "common_pitfalls": [
      "Training on synthetic data without disclosure to downstream users.",
      "Synthetic data leaks the privacy of source data via memorisation.",
      "Over-reliance on synthetic data inflates distributional shift."
    ]
  },
  {
    "id": "P5-DIM-06",
    "pillar_id": "P5",
    "name": "Data Accessibility & Democratization",
    "what_it_covers": "Self-service data discovery for analysts and AI builders; consistent semantic layer; access control by role and purpose; data product documentation usable by non-engineers.",
    "why_it_matters": "Data democratisation is a McKinsey 2024 leader marker. The slowest step in AI delivery is often access negotiation. Yet democratisation without governance produces shadow analytics and risk.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "Data access is by personal request; weeks to acquire.",
      "2": "Catalog exists; partial coverage; access still slow.",
      "3": "Searchable catalog with usable documentation; role-based access; semantic layer for top domains; SLAs on access requests.",
      "4": "Self-service issuance of access for approved purposes; access auditable; semantic layer covers most analytics.",
      "5": "Truly data-mesh self-service; access governance is policy-as-code; usage telemetry feeds back to data product owners."
    },
    "nist_tier_profile": {
      "partial": "Access ad hoc; risks invisible.",
      "risk_informed": "Access checked for known sensitive data.",
      "repeatable": "Role-based, purpose-bound access enforced; auditable.",
      "adaptive": "Access is governed continuously; policy-as-code in place."
    },
    "common_pitfalls": [
      "Catalog launched but never populated by data owners.",
      "Access \"self-service\" but requires four approvals and a ticket.",
      "Democratisation extended to vendors without contract or audit."
    ]
  },
  {
    "id": "P6-DIM-01",
    "pillar_id": "P6",
    "name": "Compute & Cloud Infrastructure",
    "what_it_covers": "Provisioning, capacity, performance, and cost of compute for AI workloads (GPUs/TPUs for training, inference accelerators, autoscaling, multi-region deployment).",
    "why_it_matters": "AI workloads have different infrastructure profiles than traditional apps — bursty training, latency-sensitive inference, expensive accelerators. Without proper provisioning, projects stall on capacity or burn budget.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "Compute provisioned ad hoc; no AI-specific patterns.",
      "2": "GPU access available on request; bottlenecks common; cost not tracked.",
      "3": "Documented compute patterns for training and inference; capacity managed; cost attributed to projects.",
      "4": "Multi-cloud or multi-region resilience; autoscaling; FinOps for AI in place; reserved capacity managed strategically.",
      "5": "Continuous cost-performance optimisation; AI-aware scheduling; carbon-aware placement; sub-second elasticity for inference."
    },
    "nist_tier_profile": {
      "partial": "Compute reliability not assured.",
      "risk_informed": "Critical workloads have dedicated capacity.",
      "repeatable": "Capacity and performance managed against documented SLAs.",
      "adaptive": "Continuous optimisation; cost and reliability monitored portfolio-wide."
    },
    "common_pitfalls": [
      "GPU contention blocks every team; no quota policy.",
      "Inference run on training-class hardware; cost balloons.",
      "No fall-back capacity when foundation-model provider has an outage."
    ]
  },
  {
    "id": "P6-DIM-02",
    "pillar_id": "P6",
    "name": "MLOps Maturity",
    "what_it_covers": "CI/CD for ML, model registry, automated training pipelines, model versioning, evaluation gates, canary deployment, reproducibility.",
    "why_it_matters": "Google's MLOps maturity model (CT0–CT2) and the AWS Well-Architected ML Lens both demand structured MLOps for reliable AI at scale. Without it, model updates are slow, risky, and rarely audited.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "Manual training and deployment; notebook-based.",
      "2": "Some scripts and version control; manual gates.",
      "3": "MLOps Level 1 — CI/CD pipeline for ML, central registry, automated retraining triggers.",
      "4": "MLOps Level 2 — automated end-to-end including evaluation, deployment with canary, rollback, monitoring; reproducible training.",
      "5": "MLOps mature across the org; self-service model deployment; metadata for every artefact; cross-team standards."
    },
    "nist_tier_profile": {
      "partial": "No reproducibility.",
      "risk_informed": "Reproducibility for critical models.",
      "repeatable": "Reproducibility by design; documented pipelines.",
      "adaptive": "Continuous improvement of MLOps; metrics on platform reliability."
    },
    "common_pitfalls": [
      "Registry adopted but not enforced; teams deploy outside it.",
      "CI runs unit tests but not model evaluation tests.",
      "No automated retraining; models drift unnoticed."
    ]
  },
  {
    "id": "P6-DIM-03",
    "pillar_id": "P6",
    "name": "LLMOps & Agent Platforms",
    "what_it_covers": "Prompt management and versioning, evaluation harnesses, gateway abstraction over multiple foundation models, cost and latency optimisation, and agent platform (orchestration, tool calling, memory).",
    "why_it_matters": "LLMOps is a new discipline. GenAI deployments without LLMOps suffer prompt drift, untraceable changes, unpredictable cost, and inability to swap models. Agent platforms add orchestration complexity that classical MLOps does not handle.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "Prompts buried in code; no evaluation; direct provider calls.",
      "2": "Prompts in source control; some logging; ad-hoc evaluation.",
      "3": "Prompt versioning; evaluation harness; gateway abstraction; cost and latency telemetry; one supported agent pattern.",
      "4": "Multi-model gateway with policy routing; structured evaluation in CI; observability for prompt-by-prompt outcomes; agent platform with tool-call governance.",
      "5": "LLMOps integrated with MLOps; continuous evaluation; routing optimises cost/quality/risk; agent platform supports complex tool orchestration with safety."
    },
    "nist_tier_profile": {
      "partial": "GenAI use untracked; risk invisible.",
      "risk_informed": "Critical GenAI flows monitored.",
      "repeatable": "LLMOps practice standardised across teams.",
      "adaptive": "LLMOps practice evolves with provider and threat landscape."
    },
    "common_pitfalls": [
      "Provider lock-in because no gateway abstraction.",
      "Prompts changed in production with no version history.",
      "Agents granted broad tool access; cost spikes from runaway loops."
    ]
  },
  {
    "id": "P6-DIM-04",
    "pillar_id": "P6",
    "name": "Model Lifecycle & Observability",
    "what_it_covers": "Full lifecycle visibility from training through serving — data drift, concept drift, quality drift, latency, throughput, cost, errors, safety triggers — feeding alerts, dashboards, and retraining decisions.",
    "why_it_matters": "ISO 42001 A.6.2.6 requires AI system operation and monitoring; NIST AI RMF MANAGE 4.1 covers post-deployment monitoring; without it, silent degradation is invisible until users complain.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "No model observability.",
      "2": "Basic uptime and latency; no model-specific metrics.",
      "3": "Drift detection (data and concept), quality, latency dashboards for production models; alert thresholds defined.",
      "4": "Model observability standard across production; multi-signal correlation; cost dashboards; alerts wired to incident response.",
      "5": "Predictive observability; AI-assisted root cause analysis; observability informs platform and model choices."
    },
    "nist_tier_profile": {
      "partial": "Models age without monitoring.",
      "risk_informed": "Critical models monitored.",
      "repeatable": "Observability standard for all in-scope models.",
      "adaptive": "Observability evolves and feeds back into design."
    },
    "common_pitfalls": [
      "Drift detection without action plan; alerts ignored.",
      "No cost telemetry per model; budget surprises.",
      "Observability not extended to GenAI outputs."
    ]
  },
  {
    "id": "P6-DIM-05",
    "pillar_id": "P6",
    "name": "Integration, APIs & Edge",
    "what_it_covers": "Integration of AI capabilities into business systems via well-defined APIs; edge / on-device inference patterns; federated learning where applicable; backward-compatibility and versioning of AI endpoints.",
    "why_it_matters": "AI value is realised only when integrated into workflows. EU AI Act Article 13 implies clear API contracts to deployers; backward compatibility prevents fragility.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "AI features integrated ad hoc; brittle.",
      "2": "Some APIs exist; documentation thin.",
      "3": "Documented API contracts; versioning; backward-compatibility policy; edge patterns where appropriate.",
      "4": "Standardised AI gateway; semantic versioning enforced; integration testing; SDKs published.",
      "5": "AI capabilities productised; partners and internal teams integrate self-service; federated patterns where useful."
    },
    "nist_tier_profile": {
      "partial": "Integration unmanaged; risks of regression invisible.",
      "risk_informed": "Critical integrations under contract.",
      "repeatable": "Integrations follow documented standards.",
      "adaptive": "Integration approach evolves; backward-compat metrics tracked."
    },
    "common_pitfalls": [
      "Versioning ignored; downstream breaks on every release.",
      "Edge deployment without secure update channel.",
      "No SLA on AI endpoints; consumers don't know what to expect."
    ]
  },
  {
    "id": "P6-DIM-06",
    "pillar_id": "P6",
    "name": "Resilience & Disaster Recovery",
    "what_it_covers": "AI-specific disaster recovery: redundant model serving, foundation-model provider fallback, training reproducibility for rebuild, RTO/RPO appropriate to system criticality, chaos engineering for AI.",
    "why_it_matters": "A single foundation-model provider outage can collapse AI services organisation-wide. EU AI Act Article 15 implies resilience expectations. Without fallback design, dependency risk is concentrated.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "No AI-specific DR. Single points of failure across providers.",
      "2": "DR plans for some critical AI; rarely tested.",
      "3": "Documented RTO/RPO per AI service class; multi-AZ for serving; fallback model or provider for foundation-model dependencies; quarterly tests.",
      "4": "Multi-region or multi-cloud failover; chaos engineering exercises for AI; tested provider degradation scenarios.",
      "5": "Continuous resilience verification; AI service guarantees match enterprise SLAs; provider risk monitored as part of strategy."
    },
    "nist_tier_profile": {
      "partial": "Provider failure causes outages.",
      "risk_informed": "Critical AI has redundancy on paper.",
      "repeatable": "DR plans tested per documented cadence.",
      "adaptive": "Resilience continuously verified through drills."
    },
    "common_pitfalls": [
      "DR drills tested for infrastructure but not for model unavailability.",
      "Fallback to a different model untested; quality degrades silently.",
      "No reproducibility plan for training; cannot rebuild a retired model."
    ]
  },
  {
    "id": "P7-DIM-01",
    "pillar_id": "P7",
    "name": "AI Literacy Programme (EU AI Act Art. 4)",
    "what_it_covers": "A workforce-wide AI literacy programme covering AI concepts, capabilities, limitations, risks, and responsible-use behaviours, differentiated by role (executives, managers, knowledge workers, customer-facing staff).",
    "why_it_matters": "EU AI Act Article 4 (effective 2 February 2025) makes AI literacy a legal obligation for providers and deployers. It is distinct from specialist training. Without measurable literacy, an organisation cannot demonstrate compliance and cannot trust staff using AI.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "No literacy programme; AI knowledge is incidental.",
      "2": "Optional courses available; uneven uptake; no tracking.",
      "3": "Mandatory role-based AI literacy curriculum for in-scope staff; completion tracked; refresh cadence defined.",
      "4": "Curriculum continuously updated; integrated into onboarding; comprehension assessed; manager attestation.",
      "5": "Literacy levels measured against outcomes (incident reduction, productive AI use); content shared with partners or industry."
    },
    "nist_tier_profile": {
      "partial": "Literacy is incidental.",
      "risk_informed": "Critical groups receive focused training.",
      "repeatable": "Literacy programme covers in-scope staff per documented plan.",
      "adaptive": "Literacy programme evolves with the technology and regulatory landscape."
    },
    "common_pitfalls": [
      "Treating literacy as \"what is a neural network\" rather than safe use of AI in the actual workflow.",
      "Single course for all roles; sales reps and ML engineers do not need the same content.",
      "Completion tracked but comprehension not measured."
    ]
  },
  {
    "id": "P7-DIM-02",
    "pillar_id": "P7",
    "name": "AI Specialist Talent",
    "what_it_covers": "Strategy and execution for attracting, developing, and retaining specialist AI talent (data scientists, ML engineers, AI/data engineers, MLOps, AI product, AI ethics specialists, AI security).",
    "why_it_matters": "AI specialist talent remains scarce and expensive (WEF Future of Jobs). Specialist roles enable delivery; failure to attract or retain is the rate-limit on AI ambition for many organisations.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "No defined AI specialist roles; ad-hoc hiring.",
      "2": "Some roles defined; recruitment under way; turnover unmanaged.",
      "3": "Defined career paths for AI roles; recruitment plan against demand forecast; competency framework; retention metrics tracked.",
      "4": "Predictable pipeline (campus, partners); structured career and compensation; specialist communities; succession planning.",
      "5": "Employer of choice for AI talent; world-class research presence; contribution to academic and open-source ecosystems."
    },
    "nist_tier_profile": {
      "partial": "Talent gaps unmanaged.",
      "risk_informed": "Critical gaps acknowledged.",
      "repeatable": "Talent plan executed against forecast.",
      "adaptive": "Talent strategy continuously informs and is informed by AI strategy."
    },
    "common_pitfalls": [
      "Hiring without retaining; revolving door inflates costs.",
      "No internal mobility into AI roles; relying entirely on external hires.",
      "Compensation lags market; senior staff poached."
    ]
  },
  {
    "id": "P7-DIM-03",
    "pillar_id": "P7",
    "name": "AI Center of Excellence & Operating Model",
    "what_it_covers": "The operating model for AI delivery: centralised CoE, federated, hub-and-spoke, or embedded; clear interfaces between central standards and business-line execution; cadence of engagement.",
    "why_it_matters": "McKinsey 2024 finds AI leaders use a clear operating model (most commonly hub-and-spoke). Without one, every business line reinvents standards and platforms; with a poorly designed one, the centre becomes a bottleneck.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "No AI CoE. Every team builds in isolation.",
      "2": "CoE established; mandate unclear; engagement uneven.",
      "3": "Documented operating model (e.g., hub-and-spoke); CoE provides standards, platforms, and support; business-line champions identified.",
      "4": "Mature CoE with portfolio influence; metrics on engagement and value delivered; standards adopted across business lines.",
      "5": "Operating model evolves continuously; CoE drives differentiated capability; cross-organisation AI strategy execution coordinated."
    },
    "nist_tier_profile": {
      "partial": "Risk and quality vary wildly across teams.",
      "risk_informed": "CoE attempts to set standards informally.",
      "repeatable": "CoE-defined standards applied across business lines.",
      "adaptive": "Operating model continuously improves and adapts to demand."
    },
    "common_pitfalls": [
      "CoE becomes a delivery bottleneck; business lines route around it.",
      "CoE owns \"AI\" but not data, security, or governance; gaps emerge.",
      "No champions in business lines; CoE standards never land."
    ]
  },
  {
    "id": "P7-DIM-04",
    "pillar_id": "P7",
    "name": "Human-AI Collaboration Design",
    "what_it_covers": "Deliberate design of how humans and AI work together in operational workflows: hand-offs, decision rights, calibration against automation bias, training for confident challenge of AI outputs.",
    "why_it_matters": "NIST AI 600-1 names Human-AI Configuration as a primary GenAI risk. Poorly designed collaboration produces automation bias (over-trust) or counter-trust (ignoring AI entirely); both waste investment.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "No design of human-AI collaboration; users adapt or ignore.",
      "2": "Some workflows redesigned; inconsistent.",
      "3": "Documented human-AI collaboration patterns per workflow class (HITL, HOTL, advisory); decision rights clear; users trained.",
      "4": "Workflow redesign systematic; calibration against automation bias measured; reviewer training in place; feedback loop to model.",
      "5": "Collaboration patterns are a design asset; outcomes measured against alternatives; learnings shared across the organisation."
    },
    "nist_tier_profile": {
      "partial": "Users rubber-stamp or ignore AI.",
      "risk_informed": "Critical decisions have human review by intent.",
      "repeatable": "Collaboration patterns documented and trained.",
      "adaptive": "Collaboration evolves with measured outcomes."
    },
    "common_pitfalls": [
      "Designing for the AI's optimal use, ignoring how operators actually behave.",
      "Treating \"human-in-the-loop\" as a checkbox without time, training, or authority.",
      "No mechanism for users to feed back observed errors."
    ]
  },
  {
    "id": "P7-DIM-05",
    "pillar_id": "P7",
    "name": "Partner & Ecosystem Engagement",
    "what_it_covers": "Structured engagement with universities, research institutes, AI vendors, open-source communities, industry consortia, and public-private programmes.",
    "why_it_matters": "AI capability rarely grows in isolation. Ecosystem engagement accelerates capability, surfaces emerging risks early, and supports the talent pipeline. Singapore's IMDA framework and most public-sector programmes treat ecosystem engagement explicitly.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "No formal partnerships; opportunistic vendor relationships.",
      "2": "A few partnerships exist; outcomes unclear.",
      "3": "Documented partner strategy; portfolio of academic, vendor, and community engagements with goals and outcomes; OSS contribution policy.",
      "4": "Partnerships measured against strategic outcomes; participation in industry forums and standards bodies; OSS contributions material.",
      "5": "Recognised partner of choice; leadership in standards and community; reciprocal value flows."
    },
    "nist_tier_profile": {
      "partial": "Ecosystem risks unrecognised.",
      "risk_informed": "Critical partnerships scrutinised.",
      "repeatable": "Partnerships managed against documented policy.",
      "adaptive": "Ecosystem engagement informs and is informed by strategy and risk posture."
    },
    "common_pitfalls": [
      "University partnerships with no industrial outcome.",
      "OSS use without contribution; reputational risk in the long term.",
      "Vendor \"partnerships\" are pure procurement relationships dressed up."
    ]
  },
  {
    "id": "P8-DIM-01",
    "pillar_id": "P8",
    "name": "Executive Sponsorship & Narrative",
    "what_it_covers": "Visible, sustained executive sponsorship for AI adoption; a clear, consistent narrative connecting AI to people's day-to-day work and long-term role.",
    "why_it_matters": "Prosci ADKAR research: sponsorship and the \"why\" message are the single biggest determinants of adoption success. McKinsey 2024: AI leaders' CEOs visibly champion AI; laggards' don't.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "No visible executive sponsorship for AI adoption.",
      "2": "Sponsorship at programme level; communications uneven.",
      "3": "Named executive sponsor; consistent narrative communicated through documented channels; sponsor visibility expected at major milestones.",
      "4": "Sponsorship cascaded to business-line leaders; narrative refreshed quarterly with evidence; sponsor regularly engages adopters.",
      "5": "AI narrative is part of the corporate identity; sponsor activity continuous and measured; staff can articulate the narrative consistently."
    },
    "nist_tier_profile": {
      "partial": "Adoption left to chance.",
      "risk_informed": "Sponsorship targeted at critical adoptions.",
      "repeatable": "Sponsorship operates on a documented cadence.",
      "adaptive": "Sponsorship adapts to feedback continuously."
    },
    "common_pitfalls": [
      "Sponsor \"owns\" AI on a slide but rarely shows up after launch.",
      "Narrative emphasises technology over the work and the people doing it.",
      "Mixed messages — efficiency vs growth vs cost — create cynicism."
    ]
  },
  {
    "id": "P8-DIM-02",
    "pillar_id": "P8",
    "name": "Workflow & Process Redesign",
    "what_it_covers": "Deliberate redesign of business processes to use AI well — not bolted onto existing processes — including hand-offs, decision points, quality checks, and exception handling.",
    "why_it_matters": "BCG's 10/20/70 rule: only 10% of AI value comes from algorithms; 70% from people and process change. Bolted-on AI rarely delivers benefits even when the model is excellent.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "AI added to existing process; no redesign.",
      "2": "Some processes redesigned for AI on an ad-hoc basis.",
      "3": "Documented process-redesign method applied to AI-impacted workflows; user representatives involved; outcomes measured.",
      "4": "Redesign is standard practice before deployment; continuous improvement; cross-process patterns reused.",
      "5": "Process redesign treated as core capability; AI and operating-model design co-evolve."
    },
    "nist_tier_profile": {
      "partial": "Process risks of AI not considered.",
      "risk_informed": "Critical processes redesigned for risk control.",
      "repeatable": "Redesign method applied consistently with risk checks.",
      "adaptive": "Process redesign improves continuously with measured outcomes."
    },
    "common_pitfalls": [
      "Lift-and-shift — same process, plus an AI step at the end.",
      "Process designed for the AI's strengths; users left to handle weaknesses.",
      "No measurement of redesigned process versus baseline."
    ]
  },
  {
    "id": "P8-DIM-03",
    "pillar_id": "P8",
    "name": "Training Rollout & Enablement",
    "what_it_covers": "The actual rollout of training — timing, role-tailoring, hands-on practice, just-in-time aids, in-product nudges — distinct from curriculum design (which lives in P7).",
    "why_it_matters": "Knowledge in a course rarely transfers to behaviour without in-context enablement. McKinsey 2024 leaders combine classroom training with in-product guidance and peer support.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "Training is launch-event only; little hands-on practice.",
      "2": "Mix of training formats; uneven across teams.",
      "3": "Documented rollout plan per launch — pre-launch readiness, launch event, post-launch reinforcement; in-product aids; role-tailored.",
      "4": "Continuous enablement; just-in-time aids in the tools; coaching available; rollout effectiveness measured.",
      "5": "Enablement integrated into workflow design; users learn by doing; usage-driven personalisation of aids."
    },
    "nist_tier_profile": {
      "partial": "Users left to self-train.",
      "risk_informed": "Critical users coached intensively.",
      "repeatable": "Rollout plan executed consistently.",
      "adaptive": "Enablement adapts based on observed user behaviour."
    },
    "common_pitfalls": [
      "Long e-learning before launch, nothing after launch.",
      "Generic training across roles; relevance to actual work is thin.",
      "No metrics on whether trained users actually use the AI."
    ]
  },
  {
    "id": "P8-DIM-04",
    "pillar_id": "P8",
    "name": "Communication & Community",
    "what_it_covers": "Structured communication, peer champions, communities of practice, feedback channels, success stories, and recognition for adoption.",
    "why_it_matters": "Peer influence beats top-down communication in driving sustained adoption (Prosci). Without community, users cannot help each other and friction goes unreported.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "Communication is launch announcements only.",
      "2": "Some channels exist; engagement low.",
      "3": "Documented communications plan; peer champion network; active feedback channels; success stories shared.",
      "4": "Community of practice meeting regularly; recognition programme; channels two-way and responsive; metrics on community health.",
      "5": "Community drives adoption autonomously; external visibility; user-led innovation."
    },
    "nist_tier_profile": {
      "partial": "Communication absent.",
      "risk_informed": "Critical groups receive communication.",
      "repeatable": "Plan executed; community in place.",
      "adaptive": "Community continuously informs design and rollout."
    },
    "common_pitfalls": [
      "One-way communication; users have no easy way to flag friction.",
      "Champions named on a slide; never given time or recognition.",
      "Recognition is generic; not tied to observed adoption behaviour."
    ]
  },
  {
    "id": "P8-DIM-05",
    "pillar_id": "P8",
    "name": "Adoption Metrics & Feedback Loops",
    "what_it_covers": "Concrete metrics on AI adoption (active use, depth, frequency, productivity outcomes), fast feedback loops to fix friction, accountability for adoption at line-manager level.",
    "why_it_matters": "Adoption is invisible without measurement. McKinsey 2024: leaders measure adoption per cohort and per workflow; laggards measure \"training completion\" and stop.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "No adoption metrics.",
      "2": "Some product analytics; reviewed occasionally.",
      "3": "Documented adoption metrics per deployment; cohort analyses; line-manager accountability; weekly review during rollout.",
      "4": "Continuous adoption dashboards; friction-removal sprints; metrics linked to business outcomes; line-manager KPIs.",
      "5": "Adoption metrics drive product design; predictive churn detection; user behaviour analytics inform model and UX."
    },
    "nist_tier_profile": {
      "partial": "Adoption invisible.",
      "risk_informed": "Critical deployments tracked.",
      "repeatable": "Metrics tracked per deployment; friction acted on.",
      "adaptive": "Continuous loop from metrics to design improvement."
    },
    "common_pitfalls": [
      "Adoption measured as logins, not productive use.",
      "Dashboards exist; no one acts on them.",
      "Adoption celebrated at launch peak; long-tail decline ignored."
    ]
  },
  {
    "id": "P9-DIM-01",
    "pillar_id": "P9",
    "name": "Discovery (Strategy Analysis)",
    "what_it_covers": "The first BABOK-aligned stage of an AI use case: framing the problem, current-state and future-state assessment, root-cause analysis, opportunity sizing, change-strategy options, and a draft business case.",
    "why_it_matters": "Most failed AI initiatives can be traced to poor problem framing or missing root-cause analysis. BABOK Strategy Analysis exists to address exactly this — yet AI teams routinely skip it in favour of \"let's prototype quickly.\"",
    "evidence_required_at": 3,
    "rubric": {
      "1": "Discovery skipped; teams go directly to prototyping.",
      "2": "Discovery occasionally performed; method varies.",
      "3": "Documented discovery method based on BABOK Strategy Analysis; current/future state, root cause, change-strategy options produced for every initiative ≥ threshold.",
      "4": "Discovery routinely produces evidence-based stop/go decisions; rejection rate tracked; reuse of patterns across discoveries.",
      "5": "Discovery is a recognised, valued capability; alumni network of past discoveries influences future framing."
    },
    "nist_tier_profile": {
      "partial": "Risk and value framing absent.",
      "risk_informed": "Critical initiatives get structured framing.",
      "repeatable": "Discovery method applied per documented policy.",
      "adaptive": "Discovery method continuously improves with learnings."
    },
    "common_pitfalls": [
      "Discovery used to justify a predetermined solution.",
      "No measurable rejection rate; everything advances.",
      "Discovery outputs are slides, not artefacts that feed requirements."
    ]
  },
  {
    "id": "P9-DIM-02",
    "pillar_id": "P9",
    "name": "Elicitation & Stakeholder Engagement",
    "what_it_covers": "Structured elicitation of needs from stakeholders — interviews, workshops, observation, document review — including impacted communities, regulators, operators, and end users.",
    "why_it_matters": "NIST AI RMF MAP 1.6 requires that requirements be elicited and understood from a wide range of AI actors. EU AI Act FRIA (Art. 27) expects engagement with affected persons. Weak elicitation is a leading cause of acceptance failure.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "Requirements assumed; no structured elicitation.",
      "2": "Some interviews; documentation thin.",
      "3": "Documented elicitation plan per initiative; stakeholder register; outputs traceable to requirements; affected-group engagement for high-risk systems.",
      "4": "Elicitation tailored by stakeholder type; multi-method; results inform fairness and human-oversight design.",
      "5": "Elicitation continuous; post-launch feedback feeds future elicitations; impacted-community participation in design."
    },
    "nist_tier_profile": {
      "partial": "Stakeholder voice missing.",
      "risk_informed": "Critical stakeholders consulted.",
      "repeatable": "Elicitation plan and execution standard for in-scope initiatives.",
      "adaptive": "Elicitation evolves with learnings; impacted-community engagement institutionalised."
    },
    "common_pitfalls": [
      "Elicitation only of business sponsors; end users absent.",
      "Workshops generate quotes, not structured requirements.",
      "Affected groups consulted after design is fixed."
    ]
  },
  {
    "id": "P9-DIM-03",
    "pillar_id": "P9",
    "name": "Requirements & Acceptance Criteria",
    "what_it_covers": "Functional, data, non-functional (including AI-specific NFRs: fairness, explainability, latency, robustness, energy), ethics, and compliance requirements; acceptance and evaluation criteria; requirements traceability.",
    "why_it_matters": "AI NFRs are absent from most teams' default templates yet drive most AI risk. EU AI Act Articles 9–15 require documented requirements for high-risk systems. Without explicit acceptance criteria, pilots cannot be objectively evaluated.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "Requirements implicit; no traceability.",
      "2": "Functional requirements documented; AI-specific NFRs partial.",
      "3": "Standard requirements set including AI-specific NFRs (fairness, explainability, latency, robustness, energy); acceptance criteria explicit; traceability to design and tests.",
      "4": "Requirements managed across the lifecycle; change control; traceability to operations; reused requirements catalog.",
      "5": "Requirements are product-grade: testable, traceable, versioned, and reused; AI-specific NFRs benchmarked externally."
    },
    "nist_tier_profile": {
      "partial": "Risk-related requirements absent.",
      "risk_informed": "Risk-related requirements added for known concerns.",
      "repeatable": "Standard AI-NFR set required.",
      "adaptive": "Requirements catalog improves continuously."
    },
    "common_pitfalls": [
      "Use AI stated as a requirement; no functional or non-functional specifics.",
      "Acceptance criteria written in slides, not test-ready form.",
      "No update to requirements when scope shifts; traceability lost."
    ]
  },
  {
    "id": "P9-DIM-04",
    "pillar_id": "P9",
    "name": "Solution Design & Evaluation Criteria",
    "what_it_covers": "Solution architecture (model, data, integration), explicit evaluation plan (metrics, datasets, thresholds, holdouts), prototyping, and cross-pillar control mapping (security, fairness, oversight).",
    "why_it_matters": "Solution design that omits the evaluation plan upfront produces pilots that cannot be objectively judged. BABOK RADD demands evaluation criteria as part of design definition, not as an afterthought.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "Solution chosen ad hoc; evaluation improvised.",
      "2": "Architecture documented; evaluation criteria thin.",
      "3": "Documented design (architecture, data, integration); evaluation plan with metrics, datasets, thresholds, holdouts; controls mapped to P3/P4.",
      "4": "Design reviews include cross-pillar leads; prototypes inform design choices; evaluation outcomes archived.",
      "5": "Design and evaluation patterns reused; architecture choices benchmarked; design contributes back to platform standards."
    },
    "nist_tier_profile": {
      "partial": "Design risks not addressed.",
      "risk_informed": "Design includes risk-relevant controls for known issues.",
      "repeatable": "Standard design and evaluation method applied.",
      "adaptive": "Design and evaluation evolve with platform and threat landscape."
    },
    "common_pitfalls": [
      "Evaluation criteria defined after the model is trained.",
      "Evaluation dataset reuses training data; metrics inflated.",
      "No mapping of design to required controls; gaps surface in production."
    ]
  },
  {
    "id": "P9-DIM-05",
    "pillar_id": "P9",
    "name": "Pilot-to-Production Lifecycle",
    "what_it_covers": "The sequence from pilot through production — gating decisions, expected evidence at each gate, integration with security (P4), platform deployment (P6), and adoption (P8).",
    "why_it_matters": "Pilots that linger as pilots forever produce no business value. Pilots that promote without gates produce risk surprises. The lifecycle must be explicit and enforced.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "No defined lifecycle; pilots linger or graduate informally.",
      "2": "Lifecycle drafted; gates inconsistent.",
      "3": "Documented pilot-to-production lifecycle with named gates and required evidence per gate; integrates with P4, P6, P8 controls.",
      "4": "Gate decisions tracked; gate failures cause rescoping or retirement; lifecycle metrics monitored.",
      "5": "Lifecycle continuously improved with cohort data; templated for use-case classes."
    },
    "nist_tier_profile": {
      "partial": "Pilots and production indistinct; risk invisible.",
      "risk_informed": "Critical pilots have a documented gate.",
      "repeatable": "Lifecycle gates applied consistently with required evidence.",
      "adaptive": "Lifecycle adapts with learnings; reuse patterns across cohorts."
    },
    "common_pitfalls": [
      "Pilots become permanent without ever crossing a production gate.",
      "Gate decisions made by a single owner without cross-pillar review.",
      "No retirement gate; legacy AI accumulates."
    ]
  },
  {
    "id": "P9-DIM-06",
    "pillar_id": "P9",
    "name": "Benefits Realisation & Continuous Improvement",
    "what_it_covers": "Post-launch evaluation against business case, identification of limitations and unintended consequences, decision to continue, rescope, or retire (BABOK Solution Evaluation), and capture of lessons learned.",
    "why_it_matters": "Most organisations celebrate launch; only AI leaders measure the realisation curve and act when it dips. BABOK Solution Evaluation provides the discipline; AI's value depends on applying it.",
    "evidence_required_at": 3,
    "rubric": {
      "1": "No post-launch evaluation.",
      "2": "Ad-hoc reviews of selected systems.",
      "3": "Mandatory benefits review per use case at 90 days and 12 months post-launch; outcomes recorded; lessons learned captured.",
      "4": "Realisation curve tracked monthly; underperformers rescoped or retired; lessons systematically fed back to design and discovery.",
      "5": "Continuous, automated benefits telemetry; closed loop into use-case ideation and design; benefits attribution rigorous."
    },
    "nist_tier_profile": {
      "partial": "Post-launch monitoring absent.",
      "risk_informed": "Critical systems monitored post-launch.",
      "repeatable": "Post-launch reviews scheduled and recorded.",
      "adaptive": "Continuous benefits telemetry drives portfolio decisions."
    },
    "common_pitfalls": [
      "Benefits review skipped because \"we already know it works.\"",
      "Lessons learned captured but never referenced.",
      "No retirement decisions; underperformers consume platform capacity."
    ]
  }
];

export const QUESTIONS: Question[] = [
  {
    "id": "P1-Q01",
    "dimension_id": "P1-DIM-01",
    "pillar_id": "P1",
    "prompt": "To what extent does the organisation have a documented, executive-owned AI vision linked to 2–3 corporate strategic priorities, and refreshed on a regular cadence?",
    "evidence_prompt": "Provide the AI vision document, executive sign-off date, and the most recent strategy review minutes referencing it.",
    "respondent_roles": [
      "CEO",
      "Chief AI Officer",
      "Chief Strategy Officer"
    ]
  },
  {
    "id": "P1-Q02",
    "dimension_id": "P1-DIM-02",
    "pillar_id": "P1",
    "prompt": "Does the organisation operate a documented intake and prioritisation process for candidate AI use cases, with a scoring rubric covering impact, feasibility, risk, and strategic fit, reviewed by a cross-functional committee?",
    "evidence_prompt": "Provide the intake template, scoring rubric, last quarter's reviewed candidates, and decisions.",
    "respondent_roles": [
      "Head of AI Portfolio",
      "Chief AI Officer"
    ]
  },
  {
    "id": "P1-Q03",
    "dimension_id": "P1-DIM-03",
    "pillar_id": "P1",
    "prompt": "Are AI business cases required above a stated cost threshold, with a standard template covering quantified benefits, costs, risks, assumptions, and explicit success criteria?",
    "evidence_prompt": "Provide the business-case template and two recent approved business cases showing all required sections completed.",
    "respondent_roles": [
      "CFO",
      "Chief AI Officer",
      "Business Sponsors"
    ]
  },
  {
    "id": "P1-Q04",
    "dimension_id": "P1-DIM-04",
    "pillar_id": "P1",
    "prompt": "Is there an end-to-end AI portfolio operating model (use-case factory) with documented stages, gate criteria, owners, and cadence, applied to every initiative regardless of origin?",
    "evidence_prompt": "Provide the factory process diagram, gate criteria, last 3 monthly portfolio reviews, and the current backlog.",
    "respondent_roles": [
      "Head of AI Portfolio",
      "Programme Management Office"
    ]
  },
  {
    "id": "P1-Q05",
    "dimension_id": "P1-DIM-05",
    "pillar_id": "P1",
    "prompt": "Are mandatory benefits-realisation reviews conducted for every production AI system against its original business case, with sponsor sign-off and visible portfolio dashboards?",
    "evidence_prompt": "Provide the benefits-review template, the last 4 benefits reports completed, and the executive dashboard.",
    "respondent_roles": [
      "CFO",
      "Business Sponsors",
      "Head of AI Portfolio"
    ]
  },
  {
    "id": "P1-Q06",
    "dimension_id": "P1-DIM-06",
    "pillar_id": "P1",
    "prompt": "Is AI strategic positioning reviewed on at least a quarterly cadence against market, competitor, regulatory, and portfolio-learning signals, and does the review drive portfolio rebalancing?",
    "evidence_prompt": "Provide the most recent strategy-review minutes, benchmark report, and rebalancing decisions taken.",
    "respondent_roles": [
      "Chief Strategy Officer",
      "Chief AI Officer"
    ]
  },
  {
    "id": "P2-Q01",
    "dimension_id": "P2-DIM-01",
    "pillar_id": "P2",
    "prompt": "Does the organisation operate an approved AI policy, aligned with adjacent policies (security, privacy, HR), forming the basis of an AI management system on the path toward ISO/IEC 42001 conformity?",
    "evidence_prompt": "Provide the approved AI policy, the alignment map to adjacent policies, and any AIMS internal audit reports.",
    "respondent_roles": [
      "Chief AI Officer",
      "Chief Risk Officer",
      "Compliance Officer"
    ]
  },
  {
    "id": "P2-Q02",
    "dimension_id": "P2-DIM-02",
    "pillar_id": "P2",
    "prompt": "Are AI decision rights documented as a RACI per AI system class, with a chartered AI ethics body that has documented authority to halt or condition AI launches?",
    "evidence_prompt": "Provide the RACI documents, ethics body charter, last 4 ethics body meeting minutes, and any launch-halt or conditioning decisions.",
    "respondent_roles": [
      "Chief AI Officer",
      "AI Ethics Officer",
      "General Counsel"
    ]
  },
  {
    "id": "P2-Q03",
    "dimension_id": "P2-DIM-03",
    "pillar_id": "P2",
    "prompt": "Is there an AI risk management system covering identification, analysis, treatment, monitoring, and communication of AI-specific risks (bias, drift, hallucination, prompt injection) across each AI system's lifecycle?",
    "evidence_prompt": "Provide the AI risk taxonomy, two system risk registers, treatment decisions, and the most recent risk review.",
    "respondent_roles": [
      "Chief Risk Officer",
      "Chief AI Officer"
    ]
  },
  {
    "id": "P2-Q04",
    "dimension_id": "P2-DIM-04",
    "pillar_id": "P2",
    "prompt": "For each in-scope AI system, has the organisation classified the system under EU AI Act risk categories, completed FRIAs where required, and maintained technical documentation per Article 11/Annex IV?",
    "evidence_prompt": "Provide the EU AI Act classification register, FRIA template, completed FRIAs, and technical-documentation samples.",
    "respondent_roles": [
      "Compliance Officer",
      "General Counsel",
      "Chief AI Officer"
    ]
  },
  {
    "id": "P2-Q05",
    "dimension_id": "P2-DIM-05",
    "pillar_id": "P2",
    "prompt": "Does the organisation maintain a complete, current inventory of AI systems (in development and production) with ownership, risk class, purpose, status, and decommissioning records?",
    "evidence_prompt": "Provide the AI system inventory, last reconciliation date, sample decommissioning record, and the procedure for adding new systems.",
    "respondent_roles": [
      "Chief AI Officer",
      "Head of AI Portfolio"
    ]
  },
  {
    "id": "P2-Q06",
    "dimension_id": "P2-DIM-06",
    "pillar_id": "P2",
    "prompt": "Are third-party and vendor AI systems governed through AI-specific due diligence, contract clauses (ethics, audit, incident reporting), and tiered supplier risk monitoring?",
    "evidence_prompt": "Provide the AI vendor due-diligence questionnaire, standard AI contract clauses, supplier risk tier list, and last audit report.",
    "respondent_roles": [
      "Procurement",
      "Chief Risk Officer",
      "Compliance Officer"
    ]
  },
  {
    "id": "P3-Q01",
    "dimension_id": "P3-DIM-01",
    "pillar_id": "P3",
    "prompt": "Does the organisation apply a documented fairness test battery to high-risk AI systems before launch, monitor fairness drift after deployment, and offer recourse for adverse automated decisions?",
    "evidence_prompt": "Provide the fairness test specification, two pre-launch test reports, the post-deployment monitoring dashboard, and the recourse procedure.",
    "respondent_roles": [
      "AI Ethics Officer",
      "ML Engineering Lead",
      "Compliance Officer"
    ]
  },
  {
    "id": "P3-Q02",
    "dimension_id": "P3-DIM-02",
    "pillar_id": "P3",
    "prompt": "Are Model Cards and Data Sheets produced as a release gate for high-risk AI systems, with stakeholder-appropriate explanations and audit-grade decision traceability?",
    "evidence_prompt": "Provide the Model Card and Data Sheet templates, two examples, and a sample audit log showing reconstruction of a decision.",
    "respondent_roles": [
      "ML Engineering Lead",
      "AI Ethics Officer"
    ]
  },
  {
    "id": "P3-Q03",
    "dimension_id": "P3-DIM-03",
    "pillar_id": "P3",
    "prompt": "Does the organisation enforce Privacy-by-Design (DPIAs, minimisation, anonymisation or DP/FL where appropriate) for AI systems handling personal data, with user-rights tooling at acceptable SLA?",
    "evidence_prompt": "Provide DPIA template, recent DPIA examples, privacy controls inventory, and user-rights handling metrics.",
    "respondent_roles": [
      "Data Protection Officer",
      "Chief Privacy Officer",
      "ML Engineering Lead"
    ]
  },
  {
    "id": "P3-Q04",
    "dimension_id": "P3-DIM-04",
    "pillar_id": "P3",
    "prompt": "Are human-in-the-loop or human-on-the-loop controls in place for high-risk AI decisions, with trained reviewers, override and appeals mechanisms, and protections against automation bias?",
    "evidence_prompt": "Provide HITL design documents, reviewer training records, override and appeals logs, and override-rate analytics.",
    "respondent_roles": [
      "AI Ethics Officer",
      "Business Operations Lead"
    ]
  },
  {
    "id": "P3-Q05",
    "dimension_id": "P3-DIM-05",
    "pillar_id": "P3",
    "prompt": "Does the organisation engage stakeholders (affected groups, regulators, civil society) on its AI policies and deployments, with user-facing notice on automated decisions and periodic transparency reporting?",
    "evidence_prompt": "Provide the stakeholder engagement plan, last transparency report, and samples of user-facing AI notices.",
    "respondent_roles": [
      "Chief Communications Officer",
      "AI Ethics Officer"
    ]
  },
  {
    "id": "P3-Q06",
    "dimension_id": "P3-DIM-06",
    "pillar_id": "P3",
    "prompt": "Are environmental impacts of AI workloads (energy, water, carbon) measured, reported, and managed against targets, with sustainable procurement clauses and decommissioning of unused models?",
    "evidence_prompt": "Provide energy/carbon measurement methodology, current data, targets, and a sample procurement clause.",
    "respondent_roles": [
      "Chief Sustainability Officer",
      "AI Platform Lead"
    ]
  },
  {
    "id": "P4-Q01",
    "dimension_id": "P4-DIM-01",
    "pillar_id": "P4",
    "prompt": "Are AI-specific threat models produced for high-risk systems covering OWASP LLM Top 10 and MITRE ATLAS tactics, with secure MLOps controls (signed artefacts, segmentation, secrets) enforced?",
    "evidence_prompt": "Provide two threat models, secure MLOps standards, and evidence of artefact signing in production.",
    "respondent_roles": [
      "AI Security Lead",
      "ML Platform Lead"
    ]
  },
  {
    "id": "P4-Q02",
    "dimension_id": "P4-DIM-02",
    "pillar_id": "P4",
    "prompt": "Is adversarial testing — including planned red-team exercises — run on high-risk AI systems on a documented cadence, with findings tracked to remediation?",
    "evidence_prompt": "Provide the red-team programme charter, last 3 reports, and remediation status.",
    "respondent_roles": [
      "AI Security Lead",
      "CISO"
    ]
  },
  {
    "id": "P4-Q03",
    "dimension_id": "P4-DIM-03",
    "pillar_id": "P4",
    "prompt": "Are GenAI systems evaluated against prompt injection, system prompt leakage, jailbreak, hallucination, and sensitive-information disclosure, with runtime guardrails active?",
    "evidence_prompt": "Provide the evaluation suite, recent reports, guardrail configuration, and runtime block/allow metrics.",
    "respondent_roles": [
      "AI Security Lead",
      "ML Engineering Lead"
    ]
  },
  {
    "id": "P4-Q04",
    "dimension_id": "P4-DIM-04",
    "pillar_id": "P4",
    "prompt": "Does the organisation maintain AI-SBOM/MLBOM for production AI systems, sign and verify model and dataset artefacts, control vector-store access, and constrain agent excessive agency?",
    "evidence_prompt": "Provide AI-SBOM sample, signing evidence, vector-store access policy, and agent capability inventory.",
    "respondent_roles": [
      "AI Security Lead",
      "ML Platform Lead"
    ]
  },
  {
    "id": "P4-Q05",
    "dimension_id": "P4-DIM-05",
    "pillar_id": "P4",
    "prompt": "Are deployed AI systems continuously monitored for safety, security, and performance, with AI-specific incident response and statutory serious-incident reporting in place?",
    "evidence_prompt": "Provide monitoring dashboards, incident playbooks, sample post-mortems, and a recent serious-incident report (or trial).",
    "respondent_roles": [
      "SOC Lead",
      "AI Security Lead",
      "Compliance Officer"
    ]
  },
  {
    "id": "P4-Q06",
    "dimension_id": "P4-DIM-06",
    "pillar_id": "P4",
    "prompt": "Are runtime guardrails (input/output filtering, rate and cost limits, isolation, kill-switch) and automated rollback to a known-good model version in place for high-risk AI systems?",
    "evidence_prompt": "Provide guardrail config, rollback drill report, and last auto-rollback event.",
    "respondent_roles": [
      "ML Platform Lead",
      "AI Security Lead"
    ]
  },
  {
    "id": "P5-Q01",
    "dimension_id": "P5-DIM-01",
    "pillar_id": "P5",
    "prompt": "Are quality metrics (accuracy, completeness, consistency, timeliness) defined, automated, and enforced for AI-critical datasets, with end-to-end lineage available in a catalog?",
    "evidence_prompt": "Provide quality dashboards for two AI-critical datasets, lineage view, and recent quality-drift alerts.",
    "respondent_roles": [
      "Chief Data Officer",
      "Data Engineering Lead"
    ]
  },
  {
    "id": "P5-Q02",
    "dimension_id": "P5-DIM-02",
    "pillar_id": "P5",
    "prompt": "Does the organisation operate an approved data governance regime — classification, retention, sharing, stewardship — extended to cover AI-specific concerns (training data, synthetic data, RAG corpora, embeddings)?",
    "evidence_prompt": "Provide governance policy, steward register, AI-data extensions, and an audit log of recent stewardship decisions.",
    "respondent_roles": [
      "Chief Data Officer",
      "Data Stewards"
    ]
  },
  {
    "id": "P5-Q03",
    "dimension_id": "P5-DIM-03",
    "pillar_id": "P5",
    "prompt": "Are AI data pipelines standardised, tested, observable, and reproducible, with feature stores or equivalent infrastructure for consistent feature engineering?",
    "evidence_prompt": "Provide pipeline framework documentation, test coverage summary, feature store inventory, and freshness SLAs.",
    "respondent_roles": [
      "Data Engineering Lead",
      "ML Platform Lead"
    ]
  },
  {
    "id": "P5-Q04",
    "dimension_id": "P5-DIM-04",
    "pillar_id": "P5",
    "prompt": "Are RAG corpora and vector stores governed — curation, sources, embedding versioning, retrieval-quality monitoring, freshness, and access isolation per tenant?",
    "evidence_prompt": "Provide corpus catalog, embedding model versioning, retrieval metrics, and access-isolation tests.",
    "respondent_roles": [
      "ML Engineering Lead",
      "Knowledge Manager"
    ]
  },
  {
    "id": "P5-Q05",
    "dimension_id": "P5-DIM-05",
    "pillar_id": "P5",
    "prompt": "Is synthetic data use governed by a documented policy with quality validation, privacy validation, and provenance tagging?",
    "evidence_prompt": "Provide the synthetic data policy, validation reports, and a sample provenance record.",
    "respondent_roles": [
      "Chief Data Officer",
      "ML Engineering Lead"
    ]
  },
  {
    "id": "P5-Q06",
    "dimension_id": "P5-DIM-06",
    "pillar_id": "P5",
    "prompt": "Is AI-relevant data discoverable through a searchable catalog with accessible documentation, role-based and purpose-bound access, and SLAs that support timely AI delivery?",
    "evidence_prompt": "Provide the catalog, access request SLAs, last 4 weeks of access grants, and a semantic-layer overview.",
    "respondent_roles": [
      "Chief Data Officer",
      "Data Engineering Lead"
    ]
  },
  {
    "id": "P6-Q01",
    "dimension_id": "P6-DIM-01",
    "pillar_id": "P6",
    "prompt": "Is AI compute capacity (training and inference) provisioned through documented patterns with attributed cost and managed against SLAs?",
    "evidence_prompt": "Provide compute capacity policy, FinOps reports for AI, and SLA compliance data.",
    "respondent_roles": [
      "AI Platform Lead",
      "FinOps Lead"
    ]
  },
  {
    "id": "P6-Q02",
    "dimension_id": "P6-DIM-02",
    "pillar_id": "P6",
    "prompt": "Does the organisation operate at MLOps Level 1 or above — CI/CD for ML, central registry, automated retraining, evaluation gates, canary deployment — with reproducible training?",
    "evidence_prompt": "Provide MLOps architecture, registry coverage stats, sample CI/CD run, and reproducibility evidence for a recent model.",
    "respondent_roles": [
      "ML Platform Lead",
      "MLOps Engineer"
    ]
  },
  {
    "id": "P6-Q03",
    "dimension_id": "P6-DIM-03",
    "pillar_id": "P6",
    "prompt": "Are LLM and agent workloads operated under an LLMOps regime — prompt versioning, evaluation, gateway abstraction, cost/latency telemetry, tool-call governance for agents?",
    "evidence_prompt": "Provide LLMOps architecture, prompt registry sample, eval results, cost dashboards, and agent policy.",
    "respondent_roles": [
      "ML Platform Lead",
      "AI Engineer"
    ]
  },
  {
    "id": "P6-Q04",
    "dimension_id": "P6-DIM-04",
    "pillar_id": "P6",
    "prompt": "Are production AI models continuously monitored for drift (data and concept), quality, latency, cost, and safety triggers, with alerts wired to incident response?",
    "evidence_prompt": "Provide observability dashboards, alert configuration, and recent drift/quality incident records.",
    "respondent_roles": [
      "ML Platform Lead",
      "SOC Lead"
    ]
  },
  {
    "id": "P6-Q05",
    "dimension_id": "P6-DIM-05",
    "pillar_id": "P6",
    "prompt": "Are AI capabilities exposed through documented, versioned, and SLA-backed APIs, with backward-compatibility policy and edge/federated patterns where applicable?",
    "evidence_prompt": "Provide AI API catalog, version policy, SLAs, and SDK references.",
    "respondent_roles": [
      "AI Platform Lead",
      "API Lead"
    ]
  },
  {
    "id": "P6-Q06",
    "dimension_id": "P6-DIM-06",
    "pillar_id": "P6",
    "prompt": "Does the organisation operate AI-specific disaster recovery — RTO/RPO per AI service, foundation-model provider fallback, reproducible training, drills — appropriate to system criticality?",
    "evidence_prompt": "Provide DR plan, last drill report, fallback configuration, and training reproducibility evidence.",
    "respondent_roles": [
      "AI Platform Lead",
      "DR Coordinator"
    ]
  },
  {
    "id": "P7-Q01",
    "dimension_id": "P7-DIM-01",
    "pillar_id": "P7",
    "prompt": "Has the organisation deployed a role-based AI literacy programme covering all in-scope staff (EU AI Act Article 4) with tracked completion and periodic refresh?",
    "evidence_prompt": "Provide the literacy curriculum, completion data, and any assessment results.",
    "respondent_roles": [
      "Chief HR Officer",
      "Chief AI Officer",
      "Learning Lead"
    ]
  },
  {
    "id": "P7-Q02",
    "dimension_id": "P7-DIM-02",
    "pillar_id": "P7",
    "prompt": "Are specialist AI roles defined, recruited against forecast demand, developed through career paths, and retained at acceptable rates?",
    "evidence_prompt": "Provide AI role inventory, workforce plan, retention metrics, and career-path documents.",
    "respondent_roles": [
      "Chief HR Officer",
      "Chief AI Officer"
    ]
  },
  {
    "id": "P7-Q03",
    "dimension_id": "P7-DIM-03",
    "pillar_id": "P7",
    "prompt": "Does the organisation operate a documented AI operating model (e.g., hub-and-spoke) with a Center of Excellence that sets standards and business-line champions that execute?",
    "evidence_prompt": "Provide the operating model diagram, CoE charter, champion network, and engagement metrics.",
    "respondent_roles": [
      "Chief AI Officer",
      "Head of AI CoE"
    ]
  },
  {
    "id": "P7-Q04",
    "dimension_id": "P7-DIM-04",
    "pillar_id": "P7",
    "prompt": "Are human-AI collaboration patterns deliberately designed per workflow class, with documented decision rights and user training to counter automation bias?",
    "evidence_prompt": "Provide pattern catalog, training materials, and observed user behaviour metrics.",
    "respondent_roles": [
      "Head of AI CoE",
      "Business Operations"
    ]
  },
  {
    "id": "P7-Q05",
    "dimension_id": "P7-DIM-05",
    "pillar_id": "P7",
    "prompt": "Does the organisation operate a documented partner and ecosystem strategy covering academic, vendor, open-source, and consortium engagement, with measured outcomes?",
    "evidence_prompt": "Provide partner register, partnership outcomes, and OSS contribution policy.",
    "respondent_roles": [
      "Chief AI Officer",
      "Head of External Relations"
    ]
  },
  {
    "id": "P8-Q01",
    "dimension_id": "P8-DIM-01",
    "pillar_id": "P8",
    "prompt": "Does the organisation have a named, visible executive sponsor for AI adoption with a consistent narrative communicated through documented channels?",
    "evidence_prompt": "Provide sponsor identity, last 4 communications, and a record of sponsor engagement at milestones.",
    "respondent_roles": [
      "CEO Office",
      "Chief AI Officer",
      "Chief Communications Officer"
    ]
  },
  {
    "id": "P8-Q02",
    "dimension_id": "P8-DIM-02",
    "pillar_id": "P8",
    "prompt": "Are AI-impacted workflows deliberately redesigned — with user representatives — before deployment, with outcomes measured against baseline?",
    "evidence_prompt": "Provide a recent redesigned workflow, the redesign method, and before/after metrics.",
    "respondent_roles": [
      "Business Operations",
      "Head of AI CoE"
    ]
  },
  {
    "id": "P8-Q03",
    "dimension_id": "P8-DIM-03",
    "pillar_id": "P8",
    "prompt": "Is training delivery rolled out per a documented plan — pre-launch, launch, post-launch reinforcement, in-product aids, role-tailored — with effectiveness measured?",
    "evidence_prompt": "Provide rollout plan for a recent launch, in-product aids, and effectiveness data.",
    "respondent_roles": [
      "Learning Lead",
      "Head of AI CoE"
    ]
  },
  {
    "id": "P8-Q04",
    "dimension_id": "P8-DIM-04",
    "pillar_id": "P8",
    "prompt": "Does the organisation operate active communication, peer champion networks, and communities of practice for AI adoption, with two-way responsive feedback channels?",
    "evidence_prompt": "Provide communications plan, champion list, community-of-practice cadence, and feedback-response examples.",
    "respondent_roles": [
      "Chief Communications Officer",
      "Head of AI CoE"
    ]
  },
  {
    "id": "P8-Q05",
    "dimension_id": "P8-DIM-05",
    "pillar_id": "P8",
    "prompt": "Are concrete adoption metrics (active use, depth, productivity) tracked per deployment with fast feedback loops to friction-fix sprints and line-manager accountability?",
    "evidence_prompt": "Provide adoption dashboards, examples of friction-fix sprints, and manager KPI linkage.",
    "respondent_roles": [
      "Head of AI CoE",
      "Business Operations"
    ]
  },
  {
    "id": "P9-Q01",
    "dimension_id": "P9-DIM-01",
    "pillar_id": "P9",
    "prompt": "Does every AI initiative above a defined threshold pass through a documented BABOK-aligned discovery stage producing current/future state, root-cause analysis, and change-strategy options?",
    "evidence_prompt": "Provide the discovery method, two recent discovery outputs, and decisions taken (stop/go/rescope).",
    "respondent_roles": [
      "Head of AI CoE",
      "Business Analyst",
      "AI Product Lead"
    ]
  },
  {
    "id": "P9-Q02",
    "dimension_id": "P9-DIM-02",
    "pillar_id": "P9",
    "prompt": "Is structured elicitation performed for each in-scope initiative — covering operators, end users, and impacted groups — with outputs traceable to documented requirements?",
    "evidence_prompt": "Provide a recent elicitation plan, stakeholder register, and traceability from elicitation outputs to requirements.",
    "respondent_roles": [
      "Business Analyst",
      "AI Product Lead",
      "AI Ethics Officer"
    ]
  },
  {
    "id": "P9-Q03",
    "dimension_id": "P9-DIM-03",
    "pillar_id": "P9",
    "prompt": "Are AI requirements documented including AI-specific NFRs (fairness, explainability, latency, robustness, energy), ethics, compliance, and acceptance criteria, with traceability through design and test?",
    "evidence_prompt": "Provide the AI requirements template, a recent requirements baseline, and traceability matrix.",
    "respondent_roles": [
      "Business Analyst",
      "ML Engineering Lead"
    ]
  },
  {
    "id": "P9-Q04",
    "dimension_id": "P9-DIM-04",
    "pillar_id": "P9",
    "prompt": "Are solution designs documented with explicit evaluation plans (metrics, datasets, thresholds, holdouts) and cross-pillar control mapping before pilot?",
    "evidence_prompt": "Provide a recent design document, the evaluation plan, and the cross-pillar control map.",
    "respondent_roles": [
      "ML Engineering Lead",
      "Solution Architect",
      "AI Security Lead"
    ]
  },
  {
    "id": "P9-Q05",
    "dimension_id": "P9-DIM-05",
    "pillar_id": "P9",
    "prompt": "Does the organisation operate a documented pilot-to-production lifecycle with named gates, required evidence per gate, and integration with security, platform, and adoption controls?",
    "evidence_prompt": "Provide the lifecycle diagram, gate criteria, and last 3 gate decisions.",
    "respondent_roles": [
      "Head of AI Portfolio",
      "Head of AI CoE"
    ]
  },
  {
    "id": "P9-Q06",
    "dimension_id": "P9-DIM-06",
    "pillar_id": "P9",
    "prompt": "Are mandatory benefits-realisation reviews performed at defined intervals post-launch (e.g., 90 days, 12 months), with lessons learned fed back to discovery and design?",
    "evidence_prompt": "Provide review templates, last 4 benefits reviews, and an example of lessons-learned re-use.",
    "respondent_roles": [
      "Head of AI Portfolio",
      "Business Sponsor"
    ]
  }
];

export const ACTIONS: Action[] = [
  {
    "id": "P1-ACT-01",
    "dimension_id": "P1-DIM-01",
    "pillar_id": "P1",
    "from_level": 1,
    "to_level": 2,
    "title": "Draft an executive AI vision statement",
    "description": "Run a half-day workshop with the executive team to draft a one-page AI vision: ambition, two or three strategic priorities served, time horizon.",
    "effort": "S",
    "duration_weeks": 4,
    "owner_role": "Chief AI Officer (or CTO/Chief Strategy)",
    "expected_outcome": "One-page AI vision document, executive sign-off in draft."
  },
  {
    "id": "P1-ACT-02",
    "dimension_id": "P1-DIM-01",
    "pillar_id": "P1",
    "from_level": 2,
    "to_level": 3,
    "title": "Map AI vision to corporate strategic priorities and publish",
    "description": "Translate the vision into measurable strategic outcomes tied to corporate priorities. Publish formally, communicate organisation-wide, and embed in annual planning cycle.",
    "effort": "M",
    "duration_weeks": 8,
    "owner_role": "Chief AI Officer + Chief Strategy Officer",
    "expected_outcome": "Published vision in strategy doc; explicit linkage to KPIs."
  },
  {
    "id": "P1-ACT-03",
    "dimension_id": "P1-DIM-01",
    "pillar_id": "P1",
    "from_level": 3,
    "to_level": 4,
    "title": "Integrate AI vision with funding and incentives",
    "description": "Align capital allocation, OKRs, and executive incentives to the AI vision. Quarterly executive review against vision-aligned KPIs.",
    "effort": "L",
    "duration_weeks": 16,
    "owner_role": "CFO + Chief AI Officer",
    "expected_outcome": "Funding flows and incentives observably tied to vision metrics."
  },
  {
    "id": "P1-ACT-04",
    "dimension_id": "P1-DIM-02",
    "pillar_id": "P1",
    "from_level": 1,
    "to_level": 2,
    "title": "Run a use-case ideation workshop",
    "description": "Workshop with business-line leaders to surface and list candidate AI use cases. Capture short descriptions, problem owners, hypothesised value.",
    "effort": "S",
    "duration_weeks": 2,
    "owner_role": "Business Analyst / AI CoE",
    "expected_outcome": "Logged list of ≥ 20 candidate use cases per business line."
  },
  {
    "id": "P1-ACT-05",
    "dimension_id": "P1-DIM-02",
    "pillar_id": "P1",
    "from_level": 2,
    "to_level": 3,
    "title": "Stand up a scored intake process with risk screening",
    "description": "Document an intake form (problem, business case sketch, data needs, risk class). Define a 4-factor scoring rubric (impact, feasibility, risk, strategic fit). Establish a monthly cross-functional review committee.",
    "effort": "M",
    "duration_weeks": 6,
    "owner_role": "Head of AI Portfolio",
    "expected_outcome": "Operating intake process with first 10 candidates scored."
  },
  {
    "id": "P1-ACT-06",
    "dimension_id": "P1-DIM-02",
    "pillar_id": "P1",
    "from_level": 3,
    "to_level": 4,
    "title": "Calibrate the scoring rubric against realised outcomes",
    "description": "For the first cohort of completed use cases, compare ex-ante scores against realised outcomes. Adjust weights, descriptors, and thresholds based on observed predictive power.",
    "effort": "M",
    "duration_weeks": 8,
    "owner_role": "Head of AI Portfolio",
    "expected_outcome": "Rubric v2 with documented calibration evidence."
  },
  {
    "id": "P1-ACT-07",
    "dimension_id": "P1-DIM-03",
    "pillar_id": "P1",
    "from_level": 1,
    "to_level": 2,
    "title": "Adopt a standard business-case template",
    "description": "Create a template requiring problem statement, quantified benefits, cost-to-build, run cost, key risks, top assumptions, success criteria, and a named sponsor.",
    "effort": "S",
    "duration_weeks": 2,
    "owner_role": "AI CoE + Finance",
    "expected_outcome": "Template published; first business cases produced."
  },
  {
    "id": "P1-ACT-08",
    "dimension_id": "P1-DIM-03",
    "pillar_id": "P1",
    "from_level": 2,
    "to_level": 3,
    "title": "Require business cases above a cost threshold",
    "description": "Define cost threshold above which a fully completed business case is mandatory before pilot. Require Finance review on benefit assumptions and total cost of ownership.",
    "effort": "M",
    "duration_weeks": 6,
    "owner_role": "CFO + Head of AI Portfolio",
    "expected_outcome": "Mandatory business-case policy in force; 100% of new initiatives compliant."
  },
  {
    "id": "P1-ACT-09",
    "dimension_id": "P1-DIM-03",
    "pillar_id": "P1",
    "from_level": 3,
    "to_level": 4,
    "title": "Integrate business cases with portfolio register and sensitivity analysis",
    "description": "Link business cases to a live portfolio register. Require sensitivity analysis on top assumptions. Track assumption validity over time.",
    "effort": "M",
    "duration_weeks": 10,
    "owner_role": "Head of AI Portfolio",
    "expected_outcome": "Portfolio register with assumption status; assumption review cadence."
  },
  {
    "id": "P1-ACT-10",
    "dimension_id": "P1-DIM-04",
    "pillar_id": "P1",
    "from_level": 1,
    "to_level": 2,
    "title": "Centralise the AI portfolio list",
    "description": "Create a single list of all active and proposed AI initiatives with owner, stage, status, and next decision. Update monthly.",
    "effort": "S",
    "duration_weeks": 2,
    "owner_role": "AI CoE",
    "expected_outcome": "Up-to-date portfolio list visible to executive sponsors."
  },
  {
    "id": "P1-ACT-11",
    "dimension_id": "P1-DIM-04",
    "pillar_id": "P1",
    "from_level": 2,
    "to_level": 3,
    "title": "Implement a stage-gate factory with named gate criteria",
    "description": "Document stages (intake, screen, pilot, scale, retire) with explicit gate criteria per stage. Assign owners. Establish monthly portfolio review.",
    "effort": "L",
    "duration_weeks": 12,
    "owner_role": "Head of AI Portfolio + PMO",
    "expected_outcome": "Stage-gate process documented; first quarterly cycle complete."
  },
  {
    "id": "P1-ACT-12",
    "dimension_id": "P1-DIM-04",
    "pillar_id": "P1",
    "from_level": 3,
    "to_level": 4,
    "title": "Add executive portfolio review and reuse register",
    "description": "Establish quarterly executive review of portfolio against capacity and strategy. Maintain a reuse register of data products and components produced by use cases.",
    "effort": "M",
    "duration_weeks": 12,
    "owner_role": "Chief AI Officer",
    "expected_outcome": "Executive portfolio dashboard; reuse register with ≥ 5 components."
  },
  {
    "id": "P1-ACT-13",
    "dimension_id": "P1-DIM-05",
    "pillar_id": "P1",
    "from_level": 1,
    "to_level": 2,
    "title": "Conduct first benefits review on top 3 production systems",
    "description": "Identify the three highest-investment production AI systems and run a benefits review against their original business cases. Document findings.",
    "effort": "S",
    "duration_weeks": 6,
    "owner_role": "Business Sponsor + AI CoE",
    "expected_outcome": "Three benefits reports produced; lessons documented."
  },
  {
    "id": "P1-ACT-14",
    "dimension_id": "P1-DIM-05",
    "pillar_id": "P1",
    "from_level": 2,
    "to_level": 3,
    "title": "Mandate benefits reviews at 6 and 12 months post-launch",
    "description": "Require benefits-realisation report at 6 and 12 months after every production go-live. Reports reviewed by sponsor; outcomes (continue, rescope, retire) recorded in portfolio.",
    "effort": "M",
    "duration_weeks": 8,
    "owner_role": "Head of AI Portfolio",
    "expected_outcome": "Policy in force; benefits log live; first retirement decisions."
  },
  {
    "id": "P1-ACT-15",
    "dimension_id": "P1-DIM-05",
    "pillar_id": "P1",
    "from_level": 3,
    "to_level": 4,
    "title": "Stand up an executive benefits dashboard",
    "description": "Build a quarterly executive dashboard showing realised vs forecast value per use case and aggregate portfolio. Underperformers automatically flagged for rescope or retire decisions.",
    "effort": "M",
    "duration_weeks": 12,
    "owner_role": "CFO + Chief AI Officer",
    "expected_outcome": "Dashboard in use; quarterly portfolio rebalancing visible."
  },
  {
    "id": "P1-ACT-16",
    "dimension_id": "P1-DIM-06",
    "pillar_id": "P1",
    "from_level": 1,
    "to_level": 2,
    "title": "Run an annual AI strategy review",
    "description": "Hold a structured annual AI strategy review covering market trends, competitor moves, regulatory changes, and portfolio learnings.",
    "effort": "S",
    "duration_weeks": 4,
    "owner_role": "Chief Strategy Officer",
    "expected_outcome": "Documented strategy-review pack and decisions."
  },
  {
    "id": "P1-ACT-17",
    "dimension_id": "P1-DIM-06",
    "pillar_id": "P1",
    "from_level": 2,
    "to_level": 3,
    "title": "Move to quarterly AI strategy reviews",
    "description": "Establish a quarterly cadence for AI strategy review. Maintain a tracked benchmark set of peers and a regulatory-change scan input to each review.",
    "effort": "M",
    "duration_weeks": 4,
    "owner_role": "Chief Strategy Officer + Chief AI Officer",
    "expected_outcome": "Four quarterly reviews completed in a year; benchmark set live."
  },
  {
    "id": "P1-ACT-18",
    "dimension_id": "P1-DIM-06",
    "pillar_id": "P1",
    "from_level": 3,
    "to_level": 4,
    "title": "Add monthly market-and-tech signal scan",
    "description": "Stand up a monthly scan of AI market, technology, and regulatory signals summarised for the strategy team. Feed top signals into quarterly review.",
    "effort": "M",
    "duration_weeks": 6,
    "owner_role": "AI CoE",
    "expected_outcome": "Monthly signal report in circulation; portfolio rebalancing influenced."
  },
  {
    "id": "P2-ACT-01",
    "dimension_id": "P2-DIM-01",
    "pillar_id": "P2",
    "from_level": 1,
    "to_level": 2,
    "title": "Draft an AI policy aligned with corporate values",
    "description": "Use ISO/IEC 42001 Annex A.2.2 as the structural reference. Define scope, principles, applicable lifecycle, roles, and review cadence.",
    "effort": "M",
    "duration_weeks": 6,
    "owner_role": "Chief Risk Officer + Chief AI Officer",
    "expected_outcome": "Draft AI policy in circulation for executive review."
  },
  {
    "id": "P2-ACT-02",
    "dimension_id": "P2-DIM-01",
    "pillar_id": "P2",
    "from_level": 2,
    "to_level": 3,
    "title": "Approve and align AI policy with adjacent policies",
    "description": "Reconcile the AI policy with privacy, security, HR, and procurement policies. Resolve overlaps and gaps. Achieve executive approval. Plan annual review.",
    "effort": "M",
    "duration_weeks": 8,
    "owner_role": "General Counsel + Chief AI Officer",
    "expected_outcome": "Approved AI policy live; alignment map to adjacent policies."
  },
  {
    "id": "P2-ACT-03",
    "dimension_id": "P2-DIM-01",
    "pillar_id": "P2",
    "from_level": 3,
    "to_level": 4,
    "title": "Deploy ISO/IEC 42001 AIMS with internal audit cycle",
    "description": "Build out ISO 42001 clauses 4–10 (context, leadership, planning, support, operation, performance, improvement) and Annex A controls. Run an internal audit. Address findings.",
    "effort": "XL",
    "duration_weeks": 36,
    "owner_role": "Compliance Officer + Chief AI Officer",
    "expected_outcome": "AIMS implemented; first internal audit complete."
  },
  {
    "id": "P2-ACT-04",
    "dimension_id": "P2-DIM-02",
    "pillar_id": "P2",
    "from_level": 1,
    "to_level": 2,
    "title": "Identify candidate ethics body members and draft a charter",
    "description": "Identify cross-functional members (legal, risk, business, technology, HR). Draft a charter with mandate, membership, cadence, and decision authority.",
    "effort": "S",
    "duration_weeks": 4,
    "owner_role": "Chief AI Officer",
    "expected_outcome": "Draft charter and member list awaiting approval."
  },
  {
    "id": "P2-ACT-05",
    "dimension_id": "P2-DIM-02",
    "pillar_id": "P2",
    "from_level": 2,
    "to_level": 3,
    "title": "Charter the AI ethics body and publish a RACI",
    "description": "Approve the charter, formally launch the body with first meeting and decision log. Publish RACI per AI system class (low/medium/high risk).",
    "effort": "M",
    "duration_weeks": 6,
    "owner_role": "Chief AI Officer + General Counsel",
    "expected_outcome": "Body operating with documented decision log; RACI published."
  },
  {
    "id": "P2-ACT-06",
    "dimension_id": "P2-DIM-02",
    "pillar_id": "P2",
    "from_level": 3,
    "to_level": 4,
    "title": "Grant the ethics body launch-halt authority and integrate with portfolio",
    "description": "Update the charter to give the body documented authority to halt or condition launches. Integrate with the use-case factory (P1) so that high-risk use cases require ethics-body sign-off at named gates.",
    "effort": "M",
    "duration_weeks": 8,
    "owner_role": "Chief AI Officer + Head of AI Portfolio",
    "expected_outcome": "Halt authority documented; first conditioning decisions recorded."
  },
  {
    "id": "P2-ACT-07",
    "dimension_id": "P2-DIM-03",
    "pillar_id": "P2",
    "from_level": 1,
    "to_level": 2,
    "title": "Adopt an AI risk taxonomy and start logging risks",
    "description": "Adopt or adapt an AI risk taxonomy (use NIST AI RMF + AI 600-1 GenAI Profile as base). Start a single risk register and populate with known risks of current AI systems.",
    "effort": "S",
    "duration_weeks": 4,
    "owner_role": "Chief Risk Officer",
    "expected_outcome": "Risk taxonomy + initial register populated."
  },
  {
    "id": "P2-ACT-08",
    "dimension_id": "P2-DIM-03",
    "pillar_id": "P2",
    "from_level": 2,
    "to_level": 3,
    "title": "Implement a per-system AI risk register with treatment plans",
    "description": "Each in-scope AI system gets its own risk register entries with owners, treatment plans, and review cadence. Risk classification feeds the intake gate.",
    "effort": "M",
    "duration_weeks": 8,
    "owner_role": "Chief Risk Officer + AI System Owners",
    "expected_outcome": "Per-system risk registers live; first treatment plans approved."
  },
  {
    "id": "P2-ACT-09",
    "dimension_id": "P2-DIM-03",
    "pillar_id": "P2",
    "from_level": 3,
    "to_level": 4,
    "title": "Continuous risk monitoring with dashboards and risk appetite",
    "description": "Define quantitative AI risk appetite and tolerance. Stand up risk dashboards across the portfolio. Schedule cross-system aggregate review.",
    "effort": "L",
    "duration_weeks": 16,
    "owner_role": "Chief Risk Officer",
    "expected_outcome": "Portfolio risk dashboard live; appetite/tolerance set."
  },
  {
    "id": "P2-ACT-10",
    "dimension_id": "P2-DIM-04",
    "pillar_id": "P2",
    "from_level": 1,
    "to_level": 2,
    "title": "Run an EU AI Act portfolio scan",
    "description": "Inventory existing AI use cases and screen against EU AI Act categories (prohibited, high-risk Annex III, transparency, minimal). Produce a heat-map.",
    "effort": "M",
    "duration_weeks": 4,
    "owner_role": "Compliance Officer + General Counsel",
    "expected_outcome": "Heat-map of portfolio vs EU AI Act categories."
  },
  {
    "id": "P2-ACT-11",
    "dimension_id": "P2-DIM-04",
    "pillar_id": "P2",
    "from_level": 2,
    "to_level": 3,
    "title": "Adopt FRIA and technical-documentation templates",
    "description": "Adopt a FRIA template (Article 27) and a technical-documentation template aligned with Annex IV. Pilot both on one high-risk system.",
    "effort": "M",
    "duration_weeks": 8,
    "owner_role": "Compliance Officer",
    "expected_outcome": "FRIA and Annex IV templates approved; pilot complete."
  },
  {
    "id": "P2-ACT-12",
    "dimension_id": "P2-DIM-05",
    "pillar_id": "P2",
    "from_level": 1,
    "to_level": 2,
    "title": "Build a first-pass AI system inventory",
    "description": "Survey business units and IT to list all known AI systems (built and bought) and embedded AI features. Populate a register with owner, purpose, status.",
    "effort": "M",
    "duration_weeks": 6,
    "owner_role": "AI CoE + IT Asset Management",
    "expected_outcome": "Inventory v1 with ≥ 80% coverage of production AI."
  },
  {
    "id": "P2-ACT-13",
    "dimension_id": "P2-DIM-05",
    "pillar_id": "P2",
    "from_level": 2,
    "to_level": 3,
    "title": "Make the inventory authoritative, reviewed quarterly",
    "description": "Establish the inventory as the system of record. Tie additions to portfolio intake. Tie removals to decommissioning. Reconcile quarterly.",
    "effort": "M",
    "duration_weeks": 8,
    "owner_role": "Chief AI Officer + IT Asset Management",
    "expected_outcome": "Authoritative inventory; quarterly reconciliation in force."
  },
  {
    "id": "P2-ACT-14",
    "dimension_id": "P2-DIM-05",
    "pillar_id": "P2",
    "from_level": 3,
    "to_level": 4,
    "title": "Automate inventory through CI/CD and procurement integration",
    "description": "Integrate inventory with CI/CD pipelines (new models registered automatically) and procurement (AI features in new SaaS auto-recorded). Add decommissioning workflow.",
    "effort": "L",
    "duration_weeks": 16,
    "owner_role": "AI Platform Lead + Procurement",
    "expected_outcome": "Automated inventory with low manual maintenance burden."
  },
  {
    "id": "P2-ACT-15",
    "dimension_id": "P2-DIM-06",
    "pillar_id": "P2",
    "from_level": 1,
    "to_level": 2,
    "title": "Add AI questions to vendor due diligence",
    "description": "Add an AI section to vendor questionnaires covering training data, bias testing, security, incident notification, and right-to-audit.",
    "effort": "S",
    "duration_weeks": 3,
    "owner_role": "Procurement",
    "expected_outcome": "Updated vendor questionnaire in use."
  },
  {
    "id": "P2-ACT-16",
    "dimension_id": "P2-DIM-06",
    "pillar_id": "P2",
    "from_level": 2,
    "to_level": 3,
    "title": "Adopt AI-specific contract clauses and tier suppliers",
    "description": "Adopt standard AI clauses (ethics standards, audit rights, incident notification, sub-processors, model deprecation). Tier suppliers by AI criticality.",
    "effort": "M",
    "duration_weeks": 8,
    "owner_role": "Procurement + General Counsel",
    "expected_outcome": "Clauses standard in new contracts; supplier tiering live."
  },
  {
    "id": "P2-ACT-17",
    "dimension_id": "P2-DIM-06",
    "pillar_id": "P2",
    "from_level": 3,
    "to_level": 4,
    "title": "Annual audits and SBOM/AI-BOM expectations for critical suppliers",
    "description": "Establish annual audit programme for critical AI suppliers. Require SBOM and AI-BOM artefacts. Set incident notification SLAs.",
    "effort": "L",
    "duration_weeks": 20,
    "owner_role": "Procurement + Chief Risk Officer",
    "expected_outcome": "First audit cycle complete; supplier compliance scored."
  },
  {
    "id": "P3-ACT-01",
    "dimension_id": "P3-DIM-01",
    "pillar_id": "P3",
    "from_level": 1,
    "to_level": 2,
    "title": "Run a bias awareness assessment on top-3 production AI systems",
    "description": "Use open-source toolkits (Fairlearn, IBM AIF360) to assess bias on representative inputs. Document findings as a baseline.",
    "effort": "S",
    "duration_weeks": 6,
    "owner_role": "ML Engineering Lead",
    "expected_outcome": "Bias baseline for top-3 systems; gaps identified."
  },
  {
    "id": "P3-ACT-02",
    "dimension_id": "P3-DIM-01",
    "pillar_id": "P3",
    "from_level": 2,
    "to_level": 3,
    "title": "Adopt a documented fairness test battery and exception workflow",
    "description": "Define which fairness metrics apply to which use-case classes (e.g., disparate impact for credit, equal opportunity for hiring). Document thresholds and exception-approval process.",
    "effort": "M",
    "duration_weeks": 10,
    "owner_role": "AI Ethics Officer + ML Engineering Lead",
    "expected_outcome": "Approved fairness test spec; exception workflow live."
  },
  {
    "id": "P3-ACT-03",
    "dimension_id": "P3-DIM-01",
    "pillar_id": "P3",
    "from_level": 3,
    "to_level": 4,
    "title": "Integrate fairness gates into MLOps and add drift monitoring",
    "description": "Wire fairness tests into CI/CD as a release gate. Stand up post-deployment fairness drift monitoring with alert thresholds. Build user-recourse workflow.",
    "effort": "L",
    "duration_weeks": 16,
    "owner_role": "ML Platform Lead + AI Ethics Officer",
    "expected_outcome": "Fairness drift monitored; first drift incidents detected and resolved."
  },
  {
    "id": "P3-ACT-04",
    "dimension_id": "P3-DIM-02",
    "pillar_id": "P3",
    "from_level": 1,
    "to_level": 2,
    "title": "Adopt a Model Card and Data Sheet template",
    "description": "Choose a template (Hugging Face card spec or NIST-aligned). Pilot on one high-risk system.",
    "effort": "S",
    "duration_weeks": 4,
    "owner_role": "ML Engineering Lead",
    "expected_outcome": "Pilot Model Card and Data Sheet completed."
  },
  {
    "id": "P3-ACT-05",
    "dimension_id": "P3-DIM-02",
    "pillar_id": "P3",
    "from_level": 2,
    "to_level": 3,
    "title": "Make Model Cards a release gate for high-risk systems",
    "description": "Mandate Model Card and Data Sheet completion as a launch gate. Test stakeholder-appropriate explanations with non-technical reviewers.",
    "effort": "M",
    "duration_weeks": 8,
    "owner_role": "AI Ethics Officer + ML Engineering Lead",
    "expected_outcome": "Model Cards required for high-risk launches; comprehension tested."
  },
  {
    "id": "P3-ACT-06",
    "dimension_id": "P3-DIM-02",
    "pillar_id": "P3",
    "from_level": 3,
    "to_level": 4,
    "title": "Add change logs and decision traceability for high-risk systems",
    "description": "Maintain Model Card change history. Implement decision-level audit logs sufficient to reconstruct outputs for review.",
    "effort": "M",
    "duration_weeks": 12,
    "owner_role": "ML Platform Lead",
    "expected_outcome": "Decision audit logs in place; sample reconstructions verified."
  },
  {
    "id": "P3-ACT-07",
    "dimension_id": "P3-DIM-03",
    "pillar_id": "P3",
    "from_level": 1,
    "to_level": 2,
    "title": "Inventory personal data flowing into AI systems",
    "description": "Map all AI systems against personal-data flows. Identify lawful basis gaps and over-collection.",
    "effort": "M",
    "duration_weeks": 6,
    "owner_role": "Data Protection Officer",
    "expected_outcome": "Data-flow map for AI systems; lawful-basis gaps listed."
  },
  {
    "id": "P3-ACT-08",
    "dimension_id": "P3-DIM-03",
    "pillar_id": "P3",
    "from_level": 2,
    "to_level": 3,
    "title": "Require DPIA for in-scope AI systems before launch",
    "description": "Adopt a DPIA template enriched with AI-specific risks (training data provenance, vector-store leakage, model memorisation). Make completion a release gate.",
    "effort": "M",
    "duration_weeks": 8,
    "owner_role": "Data Protection Officer + ML Engineering Lead",
    "expected_outcome": "DPIA gate in force; sample DPIAs completed."
  },
  {
    "id": "P3-ACT-09",
    "dimension_id": "P3-DIM-03",
    "pillar_id": "P3",
    "from_level": 3,
    "to_level": 4,
    "title": "Standardise Privacy-by-Design controls and user-rights tooling",
    "description": "Adopt anonymisation/pseudonymisation patterns; deploy DP or FL where appropriate; build automated user-rights tooling (access, deletion) that covers AI training data and vector stores.",
    "effort": "L",
    "duration_weeks": 20,
    "owner_role": "Data Protection Officer + ML Platform Lead",
    "expected_outcome": "Privacy-by-Design patterns codified; user-rights tooling SLAs met."
  },
  {
    "id": "P3-ACT-10",
    "dimension_id": "P3-DIM-04",
    "pillar_id": "P3",
    "from_level": 1,
    "to_level": 2,
    "title": "Identify high-risk decisions requiring human oversight",
    "description": "Inventory AI systems making decisions about people. Identify which must include human-in-the-loop or human-on-the-loop.",
    "effort": "S",
    "duration_weeks": 4,
    "owner_role": "AI Ethics Officer",
    "expected_outcome": "List of high-risk decision systems with target oversight pattern."
  },
  {
    "id": "P3-ACT-11",
    "dimension_id": "P3-DIM-04",
    "pillar_id": "P3",
    "from_level": 2,
    "to_level": 3,
    "title": "Design HITL/HOTL with override and appeals",
    "description": "Document review criteria, reviewer training, override mechanism, and user-facing appeals route per system. Test appeals end-to-end.",
    "effort": "M",
    "duration_weeks": 10,
    "owner_role": "AI Ethics Officer + Business Operations",
    "expected_outcome": "HITL design documented; appeals flow live."
  },
  {
    "id": "P3-ACT-12",
    "dimension_id": "P3-DIM-04",
    "pillar_id": "P3",
    "from_level": 3,
    "to_level": 4,
    "title": "Add reviewer QA, override analytics, and dissent protections",
    "description": "Sample reviewer decisions for QA; analyse override rates for systemic issues; document protections against retaliation for reviewers who flag concerns.",
    "effort": "M",
    "duration_weeks": 12,
    "owner_role": "AI Ethics Officer + HR",
    "expected_outcome": "QA programme live; override analytics shape model updates."
  },
  {
    "id": "P3-ACT-13",
    "dimension_id": "P3-DIM-05",
    "pillar_id": "P3",
    "from_level": 1,
    "to_level": 2,
    "title": "Map AI stakeholders and produce a first engagement plan",
    "description": "Identify affected groups, regulators, partners, civil society for material AI deployments. Draft an engagement plan.",
    "effort": "S",
    "duration_weeks": 4,
    "owner_role": "Chief Communications Officer + AI Ethics Officer",
    "expected_outcome": "Stakeholder register and draft engagement plan."
  },
  {
    "id": "P3-ACT-14",
    "dimension_id": "P3-DIM-05",
    "pillar_id": "P3",
    "from_level": 2,
    "to_level": 3,
    "title": "Run targeted engagement and publish user-facing AI notice",
    "description": "Hold structured engagement (workshops, focus groups) with affected groups for high-risk systems. Publish clear user-facing notice on automated decisions.",
    "effort": "M",
    "duration_weeks": 8,
    "owner_role": "AI Ethics Officer",
    "expected_outcome": "Engagement outcomes documented; user-facing notice live."
  },
  {
    "id": "P3-ACT-15",
    "dimension_id": "P3-DIM-05",
    "pillar_id": "P3",
    "from_level": 3,
    "to_level": 4,
    "title": "Publish an annual AI transparency report",
    "description": "Compile portfolio overview, fairness summary, oversight metrics, incidents, and engagement outcomes. Publish externally.",
    "effort": "L",
    "duration_weeks": 12,
    "owner_role": "Chief Communications Officer + Chief AI Officer",
    "expected_outcome": "First transparency report published."
  },
  {
    "id": "P3-ACT-16",
    "dimension_id": "P3-DIM-06",
    "pillar_id": "P3",
    "from_level": 1,
    "to_level": 2,
    "title": "Baseline AI workload energy and carbon",
    "description": "Use platform telemetry plus tools (CodeCarbon, ML Energy) to measure energy and carbon for top AI workloads. Establish baseline.",
    "effort": "S",
    "duration_weeks": 4,
    "owner_role": "AI Platform Lead",
    "expected_outcome": "Baseline energy/carbon report."
  },
  {
    "id": "P3-ACT-17",
    "dimension_id": "P3-DIM-06",
    "pillar_id": "P3",
    "from_level": 2,
    "to_level": 3,
    "title": "Quarterly reporting and reduction levers",
    "description": "Report quarterly. Identify reduction levers (right-sizing, model distillation, scheduling, hardware selection). Pilot two.",
    "effort": "M",
    "duration_weeks": 10,
    "owner_role": "AI Platform Lead + Chief Sustainability Officer",
    "expected_outcome": "Quarterly report cadence; first reduction levers proven."
  },
  {
    "id": "P3-ACT-18",
    "dimension_id": "P3-DIM-06",
    "pillar_id": "P3",
    "from_level": 3,
    "to_level": 4,
    "title": "Targets, procurement clauses, and decommissioning",
    "description": "Set reduction targets. Add sustainability clauses to supplier contracts. Decommission dormant models on a quarterly cadence.",
    "effort": "M",
    "duration_weeks": 12,
    "owner_role": "Chief Sustainability Officer + Procurement",
    "expected_outcome": "Targets in force; clauses live; dormant models decommissioned."
  },
  {
    "id": "P4-ACT-01",
    "dimension_id": "P4-DIM-01",
    "pillar_id": "P4",
    "from_level": 1,
    "to_level": 2,
    "title": "Train a security champion in AI threat modelling",
    "description": "Send 1–2 AppSec engineers through MITRE ATLAS and OWASP LLM Top 10 training. Run threat-modelling pilots on two AI systems.",
    "effort": "S",
    "duration_weeks": 6,
    "owner_role": "CISO",
    "expected_outcome": "Pilot threat models for two systems."
  },
  {
    "id": "P4-ACT-02",
    "dimension_id": "P4-DIM-01",
    "pillar_id": "P4",
    "from_level": 2,
    "to_level": 3,
    "title": "Adopt an AI threat-modelling standard and apply to high-risk systems",
    "description": "Document the standard (template, scope, cadence). Apply to all high-risk systems before launch. Track findings to remediation.",
    "effort": "M",
    "duration_weeks": 10,
    "owner_role": "AI Security Lead",
    "expected_outcome": "Standard published; threat models complete for current high-risk systems."
  },
  {
    "id": "P4-ACT-03",
    "dimension_id": "P4-DIM-01",
    "pillar_id": "P4",
    "from_level": 3,
    "to_level": 4,
    "title": "Make threat modelling a design gate; enforce artefact signing",
    "description": "Wire threat modelling into the architecture review. Sign all model and dataset artefacts using Sigstore/ModelSigning. Verify at deploy.",
    "effort": "L",
    "duration_weeks": 16,
    "owner_role": "AI Security Lead + ML Platform Lead",
    "expected_outcome": "Threat modelling gate live; signed artefacts enforced."
  },
  {
    "id": "P4-ACT-04",
    "dimension_id": "P4-DIM-02",
    "pillar_id": "P4",
    "from_level": 1,
    "to_level": 2,
    "title": "Run a first-time red-team on a single high-risk model",
    "description": "Engage an internal team (or external partner) to red-team one high-risk model using PyRIT/Garak/Promptfoo. Document findings.",
    "effort": "M",
    "duration_weeks": 6,
    "owner_role": "AI Security Lead",
    "expected_outcome": "First red-team report; remediation backlog created."
  },
  {
    "id": "P4-ACT-05",
    "dimension_id": "P4-DIM-02",
    "pillar_id": "P4",
    "from_level": 2,
    "to_level": 3,
    "title": "Stand up a red-team programme with documented cadence",
    "description": "Establish charter, scope, methodology, SLA for remediation. Cover all high-risk systems on a documented cadence (e.g., pre-launch + annual).",
    "effort": "L",
    "duration_weeks": 16,
    "owner_role": "CISO + AI Security Lead",
    "expected_outcome": "Red-team programme live; cadence in calendar."
  },
  {
    "id": "P4-ACT-06",
    "dimension_id": "P4-DIM-02",
    "pillar_id": "P4",
    "from_level": 3,
    "to_level": 4,
    "title": "Bring in external red-teamers for systemic-risk systems",
    "description": "Contract external red-team for systems classified as systemic risk (GPAI with systemic risk under EU AI Act Art. 55, or organisational Tier-1 systems). Track and remediate findings.",
    "effort": "L",
    "duration_weeks": 20,
    "owner_role": "CISO + Procurement",
    "expected_outcome": "First external red-team report and remediation plan."
  },
  {
    "id": "P4-ACT-07",
    "dimension_id": "P4-DIM-03",
    "pillar_id": "P4",
    "from_level": 1,
    "to_level": 2,
    "title": "Inventory GenAI surface area and apply baseline filtering",
    "description": "List all GenAI features in production and pre-production. Apply input moderation (e.g., Llama Guard) and basic output filtering.",
    "effort": "S",
    "duration_weeks": 4,
    "owner_role": "ML Engineering Lead",
    "expected_outcome": "Inventory done; baseline filtering active."
  },
  {
    "id": "P4-ACT-08",
    "dimension_id": "P4-DIM-03",
    "pillar_id": "P4",
    "from_level": 2,
    "to_level": 3,
    "title": "Adopt a GenAI safety evaluation suite",
    "description": "Standard evals: prompt injection (direct and indirect), system prompt leakage, jailbreak, PII leakage, toxicity. Run as a release gate for high-risk apps.",
    "effort": "M",
    "duration_weeks": 10,
    "owner_role": "AI Security Lead + ML Engineering Lead",
    "expected_outcome": "Eval suite live as release gate; baseline results archived."
  },
  {
    "id": "P4-ACT-09",
    "dimension_id": "P4-DIM-03",
    "pillar_id": "P4",
    "from_level": 3,
    "to_level": 4,
    "title": "Continuous evaluation in CI/CD with runtime hallucination monitoring",
    "description": "Wire evaluation suite into CI/CD. Add output hallucination monitoring on production traffic with thresholds and alerting.",
    "effort": "L",
    "duration_weeks": 16,
    "owner_role": "ML Platform Lead + AI Security Lead",
    "expected_outcome": "Continuous evals running; hallucination dashboards live."
  },
  {
    "id": "P4-ACT-10",
    "dimension_id": "P4-DIM-04",
    "pillar_id": "P4",
    "from_level": 1,
    "to_level": 2,
    "title": "Identify and document model and dataset sources for top systems",
    "description": "For each material AI system, record the origin and licence of every model, dataset, embedding, and tool used.",
    "effort": "S",
    "duration_weeks": 4,
    "owner_role": "ML Engineering Lead",
    "expected_outcome": "Provenance log per top system."
  },
  {
    "id": "P4-ACT-11",
    "dimension_id": "P4-DIM-04",
    "pillar_id": "P4",
    "from_level": 2,
    "to_level": 3,
    "title": "Adopt AI-SBOM/MLBOM and signing",
    "description": "Generate AI-SBOM for high-risk systems. Sign models and datasets. Verify at deploy. Enforce vector-store tenancy and access controls.",
    "effort": "L",
    "duration_weeks": 16,
    "owner_role": "AI Security Lead + ML Platform Lead",
    "expected_outcome": "AI-SBOM produced for top systems; signing in pipeline."
  },
  {
    "id": "P4-ACT-12",
    "dimension_id": "P4-DIM-04",
    "pillar_id": "P4",
    "from_level": 3,
    "to_level": 4,
    "title": "Agent excessive-agency controls and supplier attestations",
    "description": "Inventory agent tools and capabilities; apply least-privilege; enforce confirmation for high-impact actions. Require supplier signing attestations.",
    "effort": "L",
    "duration_weeks": 16,
    "owner_role": "AI Security Lead + Procurement",
    "expected_outcome": "Agent capabilities inventoried and constrained; supplier signing required."
  },
  {
    "id": "P4-ACT-13",
    "dimension_id": "P4-DIM-05",
    "pillar_id": "P4",
    "from_level": 1,
    "to_level": 2,
    "title": "Wire AI systems into SOC monitoring",
    "description": "Pipe AI system logs (inference, guardrail blocks, errors) into the SOC. Establish basic alerts.",
    "effort": "M",
    "duration_weeks": 8,
    "owner_role": "SOC Lead",
    "expected_outcome": "AI logs in SOC; first alerts configured."
  },
  {
    "id": "P4-ACT-14",
    "dimension_id": "P4-DIM-05",
    "pillar_id": "P4",
    "from_level": 2,
    "to_level": 3,
    "title": "Build AI incident playbooks and statutory reporting workflow",
    "description": "Document incident classes (safety, security, performance), playbooks per class, and a serious-incident reporting workflow aligned with EU AI Act Article 73 timelines.",
    "effort": "M",
    "duration_weeks": 10,
    "owner_role": "CISO + Compliance Officer",
    "expected_outcome": "Playbooks approved; tabletop exercise complete."
  },
  {
    "id": "P4-ACT-15",
    "dimension_id": "P4-DIM-05",
    "pillar_id": "P4",
    "from_level": 3,
    "to_level": 4,
    "title": "Drills, post-mortems, and shared learning",
    "description": "Run quarterly AI incident drills. Publish internal post-mortems on real incidents. Share lessons across AI teams.",
    "effort": "M",
    "duration_weeks": 12,
    "owner_role": "SOC Lead + AI Security Lead",
    "expected_outcome": "Drill cadence active; post-mortem library growing."
  },
  {
    "id": "P4-ACT-16",
    "dimension_id": "P4-DIM-06",
    "pillar_id": "P4",
    "from_level": 1,
    "to_level": 2,
    "title": "Add input filtering and a manual rollback procedure",
    "description": "Deploy basic input filtering (toxicity, PII, jailbreak strings). Document a manual rollback procedure for each production model.",
    "effort": "S",
    "duration_weeks": 4,
    "owner_role": "ML Platform Lead",
    "expected_outcome": "Input filters live; rollback procedure documented."
  },
  {
    "id": "P4-ACT-17",
    "dimension_id": "P4-DIM-06",
    "pillar_id": "P4",
    "from_level": 2,
    "to_level": 3,
    "title": "Full guardrail suite and canary deployment",
    "description": "Adopt input/output guardrails (NeMo Guardrails or equivalent), rate and cost limits, prompt isolation. Deploy new model versions via canary with one-click rollback.",
    "effort": "M",
    "duration_weeks": 12,
    "owner_role": "ML Platform Lead + AI Security Lead",
    "expected_outcome": "Guardrails standardised; canary releases live."
  },
  {
    "id": "P4-ACT-18",
    "dimension_id": "P4-DIM-06",
    "pillar_id": "P4",
    "from_level": 3,
    "to_level": 4,
    "title": "Automated rollback on guardrail breach",
    "description": "Wire guardrail breach metrics to auto-rollback to the prior version when a threshold is exceeded. Add kill-switch with documented exec authority. Drill quarterly.",
    "effort": "L",
    "duration_weeks": 16,
    "owner_role": "ML Platform Lead",
    "expected_outcome": "Auto-rollback in production; kill-switch drilled."
  },
  {
    "id": "P5-ACT-01",
    "dimension_id": "P5-DIM-01",
    "pillar_id": "P5",
    "from_level": 1,
    "to_level": 2,
    "title": "Identify AI-critical datasets and run a quality baseline",
    "description": "List the datasets feeding production and high-priority AI systems. Run a one-time quality scan covering accuracy, completeness, timeliness.",
    "effort": "S",
    "duration_weeks": 4,
    "owner_role": "Data Engineering Lead",
    "expected_outcome": "Baseline quality scores for top datasets."
  },
  {
    "id": "P5-ACT-02",
    "dimension_id": "P5-DIM-01",
    "pillar_id": "P5",
    "from_level": 2,
    "to_level": 3,
    "title": "Automate quality checks and stand up lineage",
    "description": "Adopt a quality tool (Great Expectations, Soda) and a lineage tool (OpenMetadata or commercial). Wire quality checks into pipelines.",
    "effort": "M",
    "duration_weeks": 12,
    "owner_role": "Data Engineering Lead",
    "expected_outcome": "Automated checks; lineage visible for top datasets."
  },
  {
    "id": "P5-ACT-03",
    "dimension_id": "P5-DIM-01",
    "pillar_id": "P5",
    "from_level": 3,
    "to_level": 4,
    "title": "Quality SLAs and drift detection per data product",
    "description": "Define per-data-product quality SLAs. Add drift detection and alerts. Tie quality breach to incident response.",
    "effort": "L",
    "duration_weeks": 16,
    "owner_role": "Chief Data Officer",
    "expected_outcome": "SLAs in force; drift alerts active."
  },
  {
    "id": "P5-ACT-04",
    "dimension_id": "P5-DIM-02",
    "pillar_id": "P5",
    "from_level": 1,
    "to_level": 2,
    "title": "Name data stewards for AI-critical domains",
    "description": "Identify and name stewards for the top 5 data domains feeding AI. Define minimum responsibilities.",
    "effort": "S",
    "duration_weeks": 4,
    "owner_role": "Chief Data Officer",
    "expected_outcome": "Steward register live; responsibilities documented."
  },
  {
    "id": "P5-ACT-05",
    "dimension_id": "P5-DIM-02",
    "pillar_id": "P5",
    "from_level": 2,
    "to_level": 3,
    "title": "Approve data governance covering AI-specific concerns",
    "description": "Update data governance to cover training data, synthetic data, RAG corpora, embeddings: classification, retention, sharing, deletion.",
    "effort": "M",
    "duration_weeks": 10,
    "owner_role": "Chief Data Officer + Compliance Officer",
    "expected_outcome": "Approved AI-extended data governance."
  },
  {
    "id": "P5-ACT-06",
    "dimension_id": "P5-DIM-02",
    "pillar_id": "P5",
    "from_level": 3,
    "to_level": 4,
    "title": "Operationalise stewardship with cadence and AI-data reviews",
    "description": "Run stewardship reviews on a documented cadence. Embed classification in pipelines. Add AI-specific data-policy compliance to dashboards.",
    "effort": "M",
    "duration_weeks": 12,
    "owner_role": "Chief Data Officer",
    "expected_outcome": "Steward cadence active; classification embedded."
  },
  {
    "id": "P5-ACT-07",
    "dimension_id": "P5-DIM-03",
    "pillar_id": "P5",
    "from_level": 1,
    "to_level": 2,
    "title": "Adopt an orchestration framework and inventory pipelines",
    "description": "Pick one orchestration framework (Airflow, Dagster, or Prefect) and document existing pipelines. Plan migration.",
    "effort": "M",
    "duration_weeks": 8,
    "owner_role": "Data Engineering Lead",
    "expected_outcome": "Pipeline inventory; framework choice approved."
  },
  {
    "id": "P5-ACT-08",
    "dimension_id": "P5-DIM-03",
    "pillar_id": "P5",
    "from_level": 2,
    "to_level": 3,
    "title": "Standardise pipelines, add tests and SLAs",
    "description": "Migrate critical pipelines to the framework. Add transformation tests. Define and monitor SLAs.",
    "effort": "L",
    "duration_weeks": 24,
    "owner_role": "Data Engineering Lead",
    "expected_outcome": "Critical pipelines standardised; tests and SLAs live."
  },
  {
    "id": "P5-ACT-09",
    "dimension_id": "P5-DIM-03",
    "pillar_id": "P5",
    "from_level": 3,
    "to_level": 4,
    "title": "Stand up a feature store and streaming where needed",
    "description": "Pick a feature store. Standardise feature definitions. Add streaming pipelines for use cases requiring low-latency features.",
    "effort": "L",
    "duration_weeks": 20,
    "owner_role": "ML Platform Lead + Data Engineering Lead",
    "expected_outcome": "Feature store live; streaming use cases supported."
  },
  {
    "id": "P5-ACT-10",
    "dimension_id": "P5-DIM-04",
    "pillar_id": "P5",
    "from_level": 1,
    "to_level": 2,
    "title": "Inventory document sources for GenAI use cases",
    "description": "Catalog the document repositories needed for RAG. Mark sources of truth, ownership, and sensitivity.",
    "effort": "S",
    "duration_weeks": 4,
    "owner_role": "Knowledge Manager / ML Engineering Lead",
    "expected_outcome": "Source inventory with owners."
  },
  {
    "id": "P5-ACT-11",
    "dimension_id": "P5-DIM-04",
    "pillar_id": "P5",
    "from_level": 2,
    "to_level": 3,
    "title": "Curated corpus, versioned embeddings, access controls",
    "description": "Build curation pipeline: source-of-truth designation, chunking, embedding model selection and versioning, access controls per tenant.",
    "effort": "M",
    "duration_weeks": 12,
    "owner_role": "ML Engineering Lead",
    "expected_outcome": "Curated corpus in production with versioned embeddings."
  },
  {
    "id": "P5-ACT-12",
    "dimension_id": "P5-DIM-04",
    "pillar_id": "P5",
    "from_level": 3,
    "to_level": 4,
    "title": "Retrieval-quality monitoring and freshness SLAs",
    "description": "Measure retrieval precision/recall on a held-out evaluation set. Define freshness SLAs per corpus. Automate embedding refresh.",
    "effort": "M",
    "duration_weeks": 12,
    "owner_role": "ML Engineering Lead",
    "expected_outcome": "Retrieval metrics live; freshness SLAs met."
  },
  {
    "id": "P5-ACT-13",
    "dimension_id": "P5-DIM-05",
    "pillar_id": "P5",
    "from_level": 1,
    "to_level": 2,
    "title": "Trial synthetic data on one use case with explicit validation",
    "description": "Pick one use case where data is scarce or imbalanced. Generate synthetic data; validate against real data; document outcomes.",
    "effort": "S",
    "duration_weeks": 6,
    "owner_role": "ML Engineering Lead",
    "expected_outcome": "Trial report with validation evidence."
  },
  {
    "id": "P5-ACT-14",
    "dimension_id": "P5-DIM-05",
    "pillar_id": "P5",
    "from_level": 2,
    "to_level": 3,
    "title": "Approve a synthetic data policy",
    "description": "Define when synthetic data is allowed, what validation is required (utility, fairness, privacy), and how provenance is tagged.",
    "effort": "M",
    "duration_weeks": 8,
    "owner_role": "Chief Data Officer + Data Protection Officer",
    "expected_outcome": "Approved policy; provenance tagging standard."
  },
  {
    "id": "P5-ACT-15",
    "dimension_id": "P5-DIM-06",
    "pillar_id": "P5",
    "from_level": 1,
    "to_level": 2,
    "title": "Adopt a data catalog and seed it with AI-critical datasets",
    "description": "Pick a catalog and populate the top 50 AI-relevant datasets with descriptions, owners, sensitivity, and quality scores.",
    "effort": "M",
    "duration_weeks": 10,
    "owner_role": "Chief Data Officer",
    "expected_outcome": "Catalog live with top datasets searchable."
  },
  {
    "id": "P5-ACT-16",
    "dimension_id": "P5-DIM-06",
    "pillar_id": "P5",
    "from_level": 2,
    "to_level": 3,
    "title": "Define role-based access and access SLAs",
    "description": "Define purposes, roles, and access patterns. Implement role-based access. Publish SLAs for access requests.",
    "effort": "M",
    "duration_weeks": 10,
    "owner_role": "Chief Data Officer + Security",
    "expected_outcome": "Access patterns documented; SLAs met."
  },
  {
    "id": "P5-ACT-17",
    "dimension_id": "P5-DIM-06",
    "pillar_id": "P5",
    "from_level": 3,
    "to_level": 4,
    "title": "Self-service issuance with auditable governance",
    "description": "Implement self-service access issuance for approved purpose+role combinations. Audit every issuance. Add usage telemetry.",
    "effort": "L",
    "duration_weeks": 16,
    "owner_role": "Chief Data Officer",
    "expected_outcome": "Self-service live; auditable issuance."
  },
  {
    "id": "P6-ACT-01",
    "dimension_id": "P6-DIM-01",
    "pillar_id": "P6",
    "from_level": 1,
    "to_level": 2,
    "title": "Establish GPU access with usage logging",
    "description": "Provide a route for ML teams to access GPU/accelerator capacity. Log usage per project for visibility.",
    "effort": "M",
    "duration_weeks": 6,
    "owner_role": "AI Platform Lead",
    "expected_outcome": "Capacity access live; usage logs."
  },
  {
    "id": "P6-ACT-02",
    "dimension_id": "P6-DIM-01",
    "pillar_id": "P6",
    "from_level": 2,
    "to_level": 3,
    "title": "Compute patterns, quotas, and FinOps for AI",
    "description": "Document training and inference patterns. Implement quotas per team. Attribute cost to projects with chargeback.",
    "effort": "M",
    "duration_weeks": 10,
    "owner_role": "AI Platform Lead + FinOps Lead",
    "expected_outcome": "Documented patterns; quotas live; chargeback reports."
  },
  {
    "id": "P6-ACT-03",
    "dimension_id": "P6-DIM-01",
    "pillar_id": "P6",
    "from_level": 3,
    "to_level": 4,
    "title": "Multi-region resilience and reserved capacity strategy",
    "description": "Plan multi-region AI compute for resilience. Negotiate reserved capacity. Autoscale inference.",
    "effort": "L",
    "duration_weeks": 16,
    "owner_role": "AI Platform Lead",
    "expected_outcome": "Multi-region in place; reserved capacity managed."
  },
  {
    "id": "P6-ACT-04",
    "dimension_id": "P6-DIM-02",
    "pillar_id": "P6",
    "from_level": 1,
    "to_level": 2,
    "title": "Adopt model versioning and a central registry",
    "description": "Pick a registry (MLflow, SageMaker Model Registry, Vertex AI). Require every production model to be registered.",
    "effort": "M",
    "duration_weeks": 8,
    "owner_role": "ML Platform Lead",
    "expected_outcome": "Registry live; backlog of production models registered."
  },
  {
    "id": "P6-ACT-05",
    "dimension_id": "P6-DIM-02",
    "pillar_id": "P6",
    "from_level": 2,
    "to_level": 3,
    "title": "Stand up MLOps Level 1 — CI/CD pipeline",
    "description": "Build a CI/CD pipeline that trains, evaluates, and deploys models on commit. Include evaluation gates and a basic canary.",
    "effort": "L",
    "duration_weeks": 16,
    "owner_role": "ML Platform Lead",
    "expected_outcome": "Pipeline live; first models deployed via CI/CD."
  },
  {
    "id": "P6-ACT-06",
    "dimension_id": "P6-DIM-02",
    "pillar_id": "P6",
    "from_level": 3,
    "to_level": 4,
    "title": "MLOps Level 2 — automated retraining and reproducibility",
    "description": "Add retraining triggers (drift, schedule). Ensure training reproducibility (data snapshots, code, hyperparameters). Add rollback.",
    "effort": "L",
    "duration_weeks": 20,
    "owner_role": "ML Platform Lead",
    "expected_outcome": "Automated retraining; reproducibility test passed."
  },
  {
    "id": "P6-ACT-07",
    "dimension_id": "P6-DIM-03",
    "pillar_id": "P6",
    "from_level": 1,
    "to_level": 2,
    "title": "Move prompts into source control",
    "description": "Migrate prompts out of code into a managed location. Track changes. Establish review for prompt changes.",
    "effort": "S",
    "duration_weeks": 4,
    "owner_role": "AI Engineering Lead",
    "expected_outcome": "Prompts versioned in repo; review live."
  },
  {
    "id": "P6-ACT-08",
    "dimension_id": "P6-DIM-03",
    "pillar_id": "P6",
    "from_level": 2,
    "to_level": 3,
    "title": "Adopt an LLM gateway and evaluation harness",
    "description": "Pick an LLM gateway (internal or vendor) abstracting providers. Build an evaluation harness (golden sets, metrics).",
    "effort": "L",
    "duration_weeks": 16,
    "owner_role": "AI Engineering Lead + ML Platform Lead",
    "expected_outcome": "Gateway live; eval harness operational."
  },
  {
    "id": "P6-ACT-09",
    "dimension_id": "P6-DIM-03",
    "pillar_id": "P6",
    "from_level": 3,
    "to_level": 4,
    "title": "Policy routing, observability, agent governance",
    "description": "Add policy routing (cost/quality/risk-based model selection). Pipe observability per prompt/agent. Govern tool-calling permissions.",
    "effort": "L",
    "duration_weeks": 20,
    "owner_role": "AI Engineering Lead + AI Security Lead",
    "expected_outcome": "Routing live; observability per prompt; agent governance enforced."
  },
  {
    "id": "P6-ACT-10",
    "dimension_id": "P6-DIM-04",
    "pillar_id": "P6",
    "from_level": 1,
    "to_level": 2,
    "title": "Wire production models into a basic observability stack",
    "description": "Collect inference latency, throughput, error rates, and basic input statistics. Visualise.",
    "effort": "M",
    "duration_weeks": 6,
    "owner_role": "ML Platform Lead",
    "expected_outcome": "Observability dashboards live for production models."
  },
  {
    "id": "P6-ACT-11",
    "dimension_id": "P6-DIM-04",
    "pillar_id": "P6",
    "from_level": 2,
    "to_level": 3,
    "title": "Drift detection and quality monitoring",
    "description": "Add data drift, concept drift, and quality metrics for top models. Define alert thresholds tied to ownership.",
    "effort": "M",
    "duration_weeks": 12,
    "owner_role": "ML Platform Lead",
    "expected_outcome": "Drift and quality monitoring live; alerts on call."
  },
  {
    "id": "P6-ACT-12",
    "dimension_id": "P6-DIM-04",
    "pillar_id": "P6",
    "from_level": 3,
    "to_level": 4,
    "title": "Cost dashboards and multi-signal correlation",
    "description": "Add per-model cost telemetry. Correlate cost, quality, latency, and drift in a single view. Wire alerts to incident response.",
    "effort": "M",
    "duration_weeks": 12,
    "owner_role": "ML Platform Lead + FinOps Lead",
    "expected_outcome": "Unified observability and cost view; alerts routed."
  },
  {
    "id": "P6-ACT-13",
    "dimension_id": "P6-DIM-05",
    "pillar_id": "P6",
    "from_level": 1,
    "to_level": 2,
    "title": "Document AI service contracts",
    "description": "For every consumer-facing AI capability, write an API contract and publish.",
    "effort": "S",
    "duration_weeks": 4,
    "owner_role": "AI Engineering Lead",
    "expected_outcome": "API contracts published for top AI capabilities."
  },
  {
    "id": "P6-ACT-14",
    "dimension_id": "P6-DIM-05",
    "pillar_id": "P6",
    "from_level": 2,
    "to_level": 3,
    "title": "Adopt versioning and backward-compatibility policy",
    "description": "Define semantic versioning. Document deprecation cycle. Publish SDKs where appropriate.",
    "effort": "M",
    "duration_weeks": 8,
    "owner_role": "API Lead",
    "expected_outcome": "Versioning policy in force; SDKs available."
  },
  {
    "id": "P6-ACT-15",
    "dimension_id": "P6-DIM-06",
    "pillar_id": "P6",
    "from_level": 1,
    "to_level": 2,
    "title": "Document RTO/RPO targets per AI service class",
    "description": "Classify AI services by criticality. Define RTO/RPO. Identify single points of failure.",
    "effort": "S",
    "duration_weeks": 4,
    "owner_role": "AI Platform Lead + DR Coordinator",
    "expected_outcome": "Classification and target table approved."
  },
  {
    "id": "P6-ACT-16",
    "dimension_id": "P6-DIM-06",
    "pillar_id": "P6",
    "from_level": 2,
    "to_level": 3,
    "title": "Multi-AZ, foundation-model fallback, quarterly DR drills",
    "description": "Deploy serving across multi-AZ. Configure foundation-model fallback (alt provider or self-hosted). Run quarterly DR drills.",
    "effort": "L",
    "duration_weeks": 20,
    "owner_role": "AI Platform Lead + DR Coordinator",
    "expected_outcome": "Multi-AZ live; first DR drill complete."
  },
  {
    "id": "P6-ACT-17",
    "dimension_id": "P6-DIM-06",
    "pillar_id": "P6",
    "from_level": 3,
    "to_level": 4,
    "title": "Chaos engineering and provider-degradation scenarios",
    "description": "Run chaos exercises specific to AI failure modes: model unavailability, slow inference, embedding service degradation. Document recovery.",
    "effort": "L",
    "duration_weeks": 16,
    "owner_role": "SRE + AI Platform Lead",
    "expected_outcome": "Chaos exercises run; resilience gaps closed."
  },
  {
    "id": "P7-ACT-01",
    "dimension_id": "P7-DIM-01",
    "pillar_id": "P7",
    "from_level": 1,
    "to_level": 2,
    "title": "Curate AI literacy content and offer it as optional training",
    "description": "Pick or commission training content. Make it available via LMS. Encourage uptake.",
    "effort": "S",
    "duration_weeks": 6,
    "owner_role": "Learning Lead",
    "expected_outcome": "Content available in LMS; initial uptake measured."
  },
  {
    "id": "P7-ACT-02",
    "dimension_id": "P7-DIM-01",
    "pillar_id": "P7",
    "from_level": 2,
    "to_level": 3,
    "title": "Role-based literacy curriculum, mandatory for in-scope staff",
    "description": "Define in-scope staff (Article 4 — providers and deployers, by role). Build role-targeted modules. Make mandatory. Track completion.",
    "effort": "M",
    "duration_weeks": 12,
    "owner_role": "Chief HR Officer + Chief AI Officer",
    "expected_outcome": "Mandatory programme live; 100% in-scope completion target."
  },
  {
    "id": "P7-ACT-03",
    "dimension_id": "P7-DIM-01",
    "pillar_id": "P7",
    "from_level": 3,
    "to_level": 4,
    "title": "Comprehension assessment, onboarding integration, refresh cadence",
    "description": "Assess comprehension, not just completion. Integrate into onboarding. Refresh annually. Manager attestation for safe AI use.",
    "effort": "M",
    "duration_weeks": 12,
    "owner_role": "Learning Lead",
    "expected_outcome": "Assessment data; onboarding integration; refresh in calendar."
  },
  {
    "id": "P7-ACT-04",
    "dimension_id": "P7-DIM-02",
    "pillar_id": "P7",
    "from_level": 1,
    "to_level": 2,
    "title": "Define AI specialist roles and salary bands",
    "description": "Define ML engineer, data scientist, MLOps, AI product, AI ethics specialist, AI security roles. Benchmark salaries.",
    "effort": "M",
    "duration_weeks": 8,
    "owner_role": "Chief HR Officer + Chief AI Officer",
    "expected_outcome": "Role definitions and bands approved."
  },
  {
    "id": "P7-ACT-05",
    "dimension_id": "P7-DIM-02",
    "pillar_id": "P7",
    "from_level": 2,
    "to_level": 3,
    "title": "Forecast demand, build career paths, track retention",
    "description": "Forecast AI specialist demand. Build career paths and a competency framework. Track retention by role and team.",
    "effort": "M",
    "duration_weeks": 12,
    "owner_role": "Chief HR Officer",
    "expected_outcome": "Forecast and career paths published; retention dashboard live."
  },
  {
    "id": "P7-ACT-06",
    "dimension_id": "P7-DIM-02",
    "pillar_id": "P7",
    "from_level": 3,
    "to_level": 4,
    "title": "Build a predictable pipeline (campus, internal mobility, partners)",
    "description": "Set up campus recruitment, internal mobility programmes, and partnerships with universities and certification bodies. Run a specialist community of practice.",
    "effort": "L",
    "duration_weeks": 20,
    "owner_role": "Chief HR Officer + Chief AI Officer",
    "expected_outcome": "Pipeline meets ≥ 70% of forecast demand internally."
  },
  {
    "id": "P7-ACT-07",
    "dimension_id": "P7-DIM-03",
    "pillar_id": "P7",
    "from_level": 1,
    "to_level": 2,
    "title": "Stand up an AI Center of Excellence",
    "description": "Establish the CoE: charter, mandate, staffing, location in the organisation, initial portfolio of services.",
    "effort": "M",
    "duration_weeks": 10,
    "owner_role": "Chief AI Officer",
    "expected_outcome": "CoE chartered and staffed; first service catalogue."
  },
  {
    "id": "P7-ACT-08",
    "dimension_id": "P7-DIM-03",
    "pillar_id": "P7",
    "from_level": 2,
    "to_level": 3,
    "title": "Hub-and-spoke with business-line champions",
    "description": "Identify and train business-line AI champions. Define the engagement model. Establish working cadence between CoE and champions.",
    "effort": "M",
    "duration_weeks": 10,
    "owner_role": "Head of AI CoE",
    "expected_outcome": "Champions identified and active; engagement cadence in place."
  },
  {
    "id": "P7-ACT-09",
    "dimension_id": "P7-DIM-03",
    "pillar_id": "P7",
    "from_level": 3,
    "to_level": 4,
    "title": "Metrics on CoE value and portfolio influence",
    "description": "Measure CoE engagement: services consumed, standards adopted, time saved, projects influenced. Embed CoE in portfolio governance.",
    "effort": "M",
    "duration_weeks": 12,
    "owner_role": "Head of AI CoE + Head of AI Portfolio",
    "expected_outcome": "CoE value dashboard; CoE in portfolio governance."
  },
  {
    "id": "P7-ACT-10",
    "dimension_id": "P7-DIM-04",
    "pillar_id": "P7",
    "from_level": 1,
    "to_level": 2,
    "title": "Map AI-impacted workflows",
    "description": "For each AI deployment, map the affected workflow. Identify hand-offs and decision points.",
    "effort": "S",
    "duration_weeks": 4,
    "owner_role": "Business Operations + AI CoE",
    "expected_outcome": "Workflow maps for top deployments."
  },
  {
    "id": "P7-ACT-11",
    "dimension_id": "P7-DIM-04",
    "pillar_id": "P7",
    "from_level": 2,
    "to_level": 3,
    "title": "Document human-AI collaboration patterns per workflow class",
    "description": "Catalogue patterns: AI advisor with human decision; AI decision with human override; AI execution with human review; etc. Train operators.",
    "effort": "M",
    "duration_weeks": 10,
    "owner_role": "AI CoE + Business Operations",
    "expected_outcome": "Pattern catalog; training materials; first workflows redesigned."
  },
  {
    "id": "P7-ACT-12",
    "dimension_id": "P7-DIM-04",
    "pillar_id": "P7",
    "from_level": 3,
    "to_level": 4,
    "title": "Measure automation-bias outcomes; feed back to model",
    "description": "Monitor override rates, decision quality, and time to decision. Calibrate operators; feed insights to model improvement.",
    "effort": "M",
    "duration_weeks": 12,
    "owner_role": "AI CoE + Business Operations",
    "expected_outcome": "Automation-bias metrics live; first feedback into models."
  },
  {
    "id": "P7-ACT-13",
    "dimension_id": "P7-DIM-05",
    "pillar_id": "P7",
    "from_level": 1,
    "to_level": 2,
    "title": "Inventory current partnerships",
    "description": "List vendor, academic, OSS, and consortium engagements. Identify goals and outcomes for each.",
    "effort": "S",
    "duration_weeks": 4,
    "owner_role": "Head of External Relations",
    "expected_outcome": "Partnership register."
  },
  {
    "id": "P7-ACT-14",
    "dimension_id": "P7-DIM-05",
    "pillar_id": "P7",
    "from_level": 2,
    "to_level": 3,
    "title": "Publish partner strategy; establish OSS contribution policy",
    "description": "Document the strategy. Decide on OSS contribution stance. Engage in one or two standards bodies or consortia.",
    "effort": "M",
    "duration_weeks": 10,
    "owner_role": "Chief AI Officer + Head of External Relations",
    "expected_outcome": "Strategy and OSS policy published; consortium membership active."
  },
  {
    "id": "P8-ACT-01",
    "dimension_id": "P8-DIM-01",
    "pillar_id": "P8",
    "from_level": 1,
    "to_level": 2,
    "title": "Appoint an AI adoption sponsor and draft the narrative",
    "description": "Name an executive sponsor for AI adoption. Draft a one-page narrative: why AI, what changes for people, what stays the same.",
    "effort": "S",
    "duration_weeks": 4,
    "owner_role": "CEO Office",
    "expected_outcome": "Sponsor named; narrative drafted."
  },
  {
    "id": "P8-ACT-02",
    "dimension_id": "P8-DIM-01",
    "pillar_id": "P8",
    "from_level": 2,
    "to_level": 3,
    "title": "Publish and reinforce the narrative with cadence",
    "description": "Publish the narrative. Establish sponsor cadence (town halls, written updates, milestone events). Train sponsors on what to say.",
    "effort": "M",
    "duration_weeks": 8,
    "owner_role": "Chief Communications Officer + Sponsor",
    "expected_outcome": "Narrative live; sponsor cadence in calendar."
  },
  {
    "id": "P8-ACT-03",
    "dimension_id": "P8-DIM-01",
    "pillar_id": "P8",
    "from_level": 3,
    "to_level": 4,
    "title": "Cascade sponsorship to business-line leaders",
    "description": "Identify and equip business-line sponsors. Refresh narrative quarterly with evidence. Measure sponsor visibility.",
    "effort": "M",
    "duration_weeks": 12,
    "owner_role": "Chief AI Officer",
    "expected_outcome": "Business-line sponsors active; cascaded narrative consistent."
  },
  {
    "id": "P8-ACT-04",
    "dimension_id": "P8-DIM-02",
    "pillar_id": "P8",
    "from_level": 1,
    "to_level": 2,
    "title": "Redesign one critical workflow as a proof",
    "description": "Pick the highest-impact AI use case; redesign the workflow end-to-end with users; measure before/after.",
    "effort": "M",
    "duration_weeks": 10,
    "owner_role": "Business Operations + AI CoE",
    "expected_outcome": "Redesigned workflow with measured outcomes."
  },
  {
    "id": "P8-ACT-05",
    "dimension_id": "P8-DIM-02",
    "pillar_id": "P8",
    "from_level": 2,
    "to_level": 3,
    "title": "Adopt a workflow-redesign method and apply pre-deployment",
    "description": "Document a method (e.g., user-journey + decision points + hand-offs + exceptions). Make redesign a deployment prerequisite. Train CoE.",
    "effort": "M",
    "duration_weeks": 10,
    "owner_role": "AI CoE + Business Operations",
    "expected_outcome": "Method documented; prerequisite in deployment gate."
  },
  {
    "id": "P8-ACT-06",
    "dimension_id": "P8-DIM-02",
    "pillar_id": "P8",
    "from_level": 3,
    "to_level": 4,
    "title": "Reuse patterns; continuous improvement",
    "description": "Catalogue cross-process patterns. Measure redesigned vs baseline performance. Improve continuously.",
    "effort": "M",
    "duration_weeks": 12,
    "owner_role": "AI CoE",
    "expected_outcome": "Pattern catalog; continuous-improvement loop visible."
  },
  {
    "id": "P8-ACT-07",
    "dimension_id": "P8-DIM-03",
    "pillar_id": "P8",
    "from_level": 1,
    "to_level": 2,
    "title": "Train users at launch with a single session",
    "description": "For the next AI launch, hold a launch training event. Provide quick-reference materials.",
    "effort": "S",
    "duration_weeks": 2,
    "owner_role": "Learning Lead + AI CoE",
    "expected_outcome": "Launch training delivered; reference materials shipped."
  },
  {
    "id": "P8-ACT-08",
    "dimension_id": "P8-DIM-03",
    "pillar_id": "P8",
    "from_level": 2,
    "to_level": 3,
    "title": "Pre-launch, launch, post-launch rollout with in-product aids",
    "description": "Plan readiness, launch, and 30/60/90-day reinforcement. Add in-product nudges and tooltips. Tailor by role.",
    "effort": "M",
    "duration_weeks": 8,
    "owner_role": "Learning Lead + AI CoE",
    "expected_outcome": "Documented rollout plan in use for new launches."
  },
  {
    "id": "P8-ACT-09",
    "dimension_id": "P8-DIM-03",
    "pillar_id": "P8",
    "from_level": 3,
    "to_level": 4,
    "title": "Continuous enablement; coaching; effectiveness metrics",
    "description": "Make enablement continuous, not event-based. Offer coaching for advanced users. Measure effectiveness (knowledge → behaviour → outcome).",
    "effort": "M",
    "duration_weeks": 12,
    "owner_role": "Learning Lead",
    "expected_outcome": "Continuous enablement live; effectiveness metrics tracked."
  },
  {
    "id": "P8-ACT-10",
    "dimension_id": "P8-DIM-04",
    "pillar_id": "P8",
    "from_level": 1,
    "to_level": 2,
    "title": "Identify champions and stand up a communication channel",
    "description": "Pick 1–2 champions per business line. Create a single internal channel (Slack/Teams) for AI adoption.",
    "effort": "S",
    "duration_weeks": 3,
    "owner_role": "Chief Communications Officer + AI CoE",
    "expected_outcome": "Champions identified; channel active."
  },
  {
    "id": "P8-ACT-11",
    "dimension_id": "P8-DIM-04",
    "pillar_id": "P8",
    "from_level": 2,
    "to_level": 3,
    "title": "Active community of practice and feedback responsiveness",
    "description": "Run a monthly community of practice. Establish a feedback-response SLA. Share success stories regularly.",
    "effort": "M",
    "duration_weeks": 10,
    "owner_role": "AI CoE + Chief Communications Officer",
    "expected_outcome": "Community active; feedback responded to within SLA."
  },
  {
    "id": "P8-ACT-12",
    "dimension_id": "P8-DIM-04",
    "pillar_id": "P8",
    "from_level": 3,
    "to_level": 4,
    "title": "Recognition programme tied to behaviour; community-health metrics",
    "description": "Recognise champions and adopters based on observed behaviour. Measure community health (participation, repeat engagement).",
    "effort": "M",
    "duration_weeks": 10,
    "owner_role": "Chief HR Officer + AI CoE",
    "expected_outcome": "Recognition programme live; community health tracked."
  },
  {
    "id": "P8-ACT-13",
    "dimension_id": "P8-DIM-05",
    "pillar_id": "P8",
    "from_level": 1,
    "to_level": 2,
    "title": "Basic product telemetry on AI tools",
    "description": "Instrument AI tools to capture active use, depth, frequency. Publish a simple dashboard.",
    "effort": "M",
    "duration_weeks": 6,
    "owner_role": "AI Engineering Lead + Business Operations",
    "expected_outcome": "Adoption dashboard live; first cohort data."
  },
  {
    "id": "P8-ACT-14",
    "dimension_id": "P8-DIM-05",
    "pillar_id": "P8",
    "from_level": 2,
    "to_level": 3,
    "title": "Cohort analysis, friction-fix sprints, manager accountability",
    "description": "Analyse adoption by cohort. Run weekly friction-fix sprints during rollouts. Add adoption KPIs to line-manager scorecards.",
    "effort": "M",
    "duration_weeks": 10,
    "owner_role": "Head of AI CoE",
    "expected_outcome": "Cohort views; friction sprints active; KPIs added."
  },
  {
    "id": "P8-ACT-15",
    "dimension_id": "P8-DIM-05",
    "pillar_id": "P8",
    "from_level": 3,
    "to_level": 4,
    "title": "Continuous adoption loop tied to business outcomes",
    "description": "Link adoption metrics to business outcomes (productivity, quality, revenue). Use churn / behaviour analytics. Feed insights to design.",
    "effort": "L",
    "duration_weeks": 16,
    "owner_role": "Chief AI Officer",
    "expected_outcome": "Outcomes linked; design improvements traceable to telemetry."
  },
  {
    "id": "P9-ACT-01",
    "dimension_id": "P9-DIM-01",
    "pillar_id": "P9",
    "from_level": 1,
    "to_level": 2,
    "title": "Pilot a structured discovery on one initiative",
    "description": "Run a single BABOK-grounded discovery for a candidate AI initiative. Produce current-state, future-state, root-cause, and change-strategy options. Document outputs.",
    "effort": "M",
    "duration_weeks": 6,
    "owner_role": "Head of AI CoE + Business Analyst",
    "expected_outcome": "Discovery completed; decision documented."
  },
  {
    "id": "P9-ACT-02",
    "dimension_id": "P9-DIM-01",
    "pillar_id": "P9",
    "from_level": 2,
    "to_level": 3,
    "title": "Adopt a discovery method and make it a portfolio gate",
    "description": "Document the discovery method (steps, artefacts, decision criteria). Make discovery mandatory for any AI initiative above a stated threshold.",
    "effort": "M",
    "duration_weeks": 8,
    "owner_role": "Head of AI CoE",
    "expected_outcome": "Method approved; gate enforced in portfolio."
  },
  {
    "id": "P9-ACT-03",
    "dimension_id": "P9-DIM-01",
    "pillar_id": "P9",
    "from_level": 3,
    "to_level": 4,
    "title": "Track discovery outcomes; reuse patterns across initiatives",
    "description": "Track discovery rejection/rescope rates. Catalogue recurring patterns (problem types, root causes). Reuse across initiatives.",
    "effort": "M",
    "duration_weeks": 12,
    "owner_role": "Head of AI CoE",
    "expected_outcome": "Discovery metrics live; pattern catalog growing."
  },
  {
    "id": "P9-ACT-04",
    "dimension_id": "P9-DIM-02",
    "pillar_id": "P9",
    "from_level": 1,
    "to_level": 2,
    "title": "Conduct stakeholder interviews on the next AI initiative",
    "description": "Run structured interviews with operators, end users, and a sample of affected persons. Document outputs.",
    "effort": "S",
    "duration_weeks": 4,
    "owner_role": "Business Analyst",
    "expected_outcome": "Interview outputs informing requirements."
  },
  {
    "id": "P9-ACT-05",
    "dimension_id": "P9-DIM-02",
    "pillar_id": "P9",
    "from_level": 2,
    "to_level": 3,
    "title": "Standardise elicitation plans with stakeholder maps",
    "description": "Documented elicitation plan per initiative; stakeholder register; multi-method approach (interviews, workshops, observation, document review). Engage impacted groups for high-risk systems.",
    "effort": "M",
    "duration_weeks": 8,
    "owner_role": "Business Analyst + AI Ethics Officer",
    "expected_outcome": "Elicitation method live; first stakeholder maps in use."
  },
  {
    "id": "P9-ACT-06",
    "dimension_id": "P9-DIM-02",
    "pillar_id": "P9",
    "from_level": 3,
    "to_level": 4,
    "title": "Tailored elicitation per stakeholder type; design feedback",
    "description": "Multi-method elicitation per stakeholder type. Results inform fairness and oversight design. Continuous post-launch feedback to elicitation catalogue.",
    "effort": "M",
    "duration_weeks": 12,
    "owner_role": "AI CoE",
    "expected_outcome": "Tailored elicitation in use; feedback loop documented."
  },
  {
    "id": "P9-ACT-07",
    "dimension_id": "P9-DIM-03",
    "pillar_id": "P9",
    "from_level": 1,
    "to_level": 2,
    "title": "Adopt an AI requirements template with AI-specific NFRs",
    "description": "Template covers functional, data, non-functional (fairness, explainability, latency, robustness, energy), ethics, compliance. Pilot on one initiative.",
    "effort": "S",
    "duration_weeks": 6,
    "owner_role": "Business Analyst + ML Engineering Lead",
    "expected_outcome": "Template adopted; first AI requirements baseline."
  },
  {
    "id": "P9-ACT-08",
    "dimension_id": "P9-DIM-03",
    "pillar_id": "P9",
    "from_level": 2,
    "to_level": 3,
    "title": "Acceptance criteria and traceability matrix mandatory",
    "description": "Mandatory acceptance criteria with measurable thresholds. Maintain a traceability matrix from requirements to design to tests.",
    "effort": "M",
    "duration_weeks": 10,
    "owner_role": "Business Analyst + ML Engineering Lead",
    "expected_outcome": "Mandatory acceptance criteria; traceability matrix live."
  },
  {
    "id": "P9-ACT-09",
    "dimension_id": "P9-DIM-03",
    "pillar_id": "P9",
    "from_level": 3,
    "to_level": 4,
    "title": "Requirements catalog and reuse",
    "description": "Build a catalog of validated AI requirements (e.g., reusable fairness, robustness, explainability NFRs). Reuse across initiatives.",
    "effort": "M",
    "duration_weeks": 12,
    "owner_role": "AI CoE",
    "expected_outcome": "Catalog live; reuse rate measured."
  },
  {
    "id": "P9-ACT-10",
    "dimension_id": "P9-DIM-04",
    "pillar_id": "P9",
    "from_level": 1,
    "to_level": 2,
    "title": "Document solution design and an evaluation plan per use case",
    "description": "Architecture, data design, integration; an evaluation plan with metrics, datasets, thresholds, holdouts.",
    "effort": "M",
    "duration_weeks": 6,
    "owner_role": "Solution Architect + ML Engineering Lead",
    "expected_outcome": "Design and evaluation plan archived per initiative."
  },
  {
    "id": "P9-ACT-11",
    "dimension_id": "P9-DIM-04",
    "pillar_id": "P9",
    "from_level": 2,
    "to_level": 3,
    "title": "Cross-pillar design review with controls mapping",
    "description": "Add a cross-pillar design review where Security (P4), Responsible AI (P3), and Platform (P6) leads review the design. Map controls explicitly.",
    "effort": "M",
    "duration_weeks": 8,
    "owner_role": "AI CoE",
    "expected_outcome": "Cross-pillar review standard; control map produced."
  },
  {
    "id": "P9-ACT-12",
    "dimension_id": "P9-DIM-04",
    "pillar_id": "P9",
    "from_level": 3,
    "to_level": 4,
    "title": "Patterns library and prototyping integration",
    "description": "Build a patterns library for AI solution design. Integrate prototyping (Streamlit, Gradio) early in design.",
    "effort": "M",
    "duration_weeks": 12,
    "owner_role": "AI CoE + ML Engineering Lead",
    "expected_outcome": "Patterns library live; prototyping standard early."
  },
  {
    "id": "P9-ACT-13",
    "dimension_id": "P9-DIM-05",
    "pillar_id": "P9",
    "from_level": 1,
    "to_level": 2,
    "title": "Document a pilot-to-production sequence",
    "description": "Draft a stage sequence: discovery → requirements → pilot → evaluation → production decision → operations. Identify named gates.",
    "effort": "S",
    "duration_weeks": 4,
    "owner_role": "Head of AI CoE",
    "expected_outcome": "Draft lifecycle documented."
  },
  {
    "id": "P9-ACT-14",
    "dimension_id": "P9-DIM-05",
    "pillar_id": "P9",
    "from_level": 2,
    "to_level": 3,
    "title": "Approve gates with required evidence per gate",
    "description": "Approve gate criteria; specify required evidence per gate (technical, legal, ethical, security). Integrate with P4, P6, P8.",
    "effort": "M",
    "duration_weeks": 10,
    "owner_role": "Head of AI Portfolio + AI CoE",
    "expected_outcome": "Gates approved and integrated; first gate decisions logged."
  },
  {
    "id": "P9-ACT-15",
    "dimension_id": "P9-DIM-05",
    "pillar_id": "P9",
    "from_level": 3,
    "to_level": 4,
    "title": "Track gate decisions; rescope or retire failed gates",
    "description": "Track gate outcomes per cohort. Make rescope/retire decisions on failed gates explicit. Cohort review monthly.",
    "effort": "M",
    "duration_weeks": 12,
    "owner_role": "Head of AI Portfolio",
    "expected_outcome": "Gate outcomes tracked; rescope/retire decisions visible."
  },
  {
    "id": "P9-ACT-16",
    "dimension_id": "P9-DIM-06",
    "pillar_id": "P9",
    "from_level": 1,
    "to_level": 2,
    "title": "Conduct first benefits review on a recent launch",
    "description": "Pick a recent launch. Run a 90-day benefits review using a basic template. Document outcomes and lessons.",
    "effort": "S",
    "duration_weeks": 3,
    "owner_role": "Business Sponsor + Head of AI CoE",
    "expected_outcome": "First post-launch benefits review complete."
  },
  {
    "id": "P9-ACT-17",
    "dimension_id": "P9-DIM-06",
    "pillar_id": "P9",
    "from_level": 2,
    "to_level": 3,
    "title": "Mandatory post-launch reviews at 90 days and 12 months",
    "description": "Make reviews mandatory at 90 days and 12 months per use case. Capture lessons learned formally.",
    "effort": "M",
    "duration_weeks": 10,
    "owner_role": "Head of AI Portfolio",
    "expected_outcome": "Mandatory reviews in force; lessons learned library growing."
  },
  {
    "id": "P9-ACT-18",
    "dimension_id": "P9-DIM-06",
    "pillar_id": "P9",
    "from_level": 3,
    "to_level": 4,
    "title": "Continuous benefits telemetry; closed loop to design",
    "description": "Add automated benefits telemetry where possible. Establish a closed loop: lessons → discovery improvements; benefits → design choices.",
    "effort": "L",
    "duration_weeks": 16,
    "owner_role": "Head of AI CoE + Head of AI Portfolio",
    "expected_outcome": "Telemetry live; documented design changes triggered by benefits learnings."
  }
];

/* ------------------------------------------------------------------ */
/*  Scoring + RAU helpers                                              */
/* ------------------------------------------------------------------ */

export type Response = {
  questionId: string;
  current: CapabilityLevel | null;
  target: CapabilityLevel | null;
  nistTier: NistTier | null;
};

export type PillarRollup = {
  pillarId: string;
  currentAvg: number | null;
  targetAvg: number | null;
  gapAvg: number | null;
  rauDimensionIds: string[];
  healthyDimensionIds: string[];
};

export type OrgRollup = {
  composite: number | null;
  avgGap: number | null;
  riskTier: NistTier | null;
  totalRau: number;
  totalHealthy: number;
  pillarRollups: PillarRollup[];
};

export function dimensionGap(r: Response): number | null {
  if (r.current == null || r.target == null) return null;
  return r.target - r.current;
}

export function gapPriority(gap: number | null): 'None' | 'Low' | 'Med' | 'High' {
  if (gap == null || gap <= 0) return 'None';
  if (gap < 2) return 'Low';
  if (gap < 3) return 'Med';
  return 'High';
}

export function isRau(r: Response): boolean {
  return (
    r.current != null &&
    r.current >= 4 &&
    r.nistTier != null &&
    (r.nistTier === 'partial' || r.nistTier === 'risk_informed')
  );
}

export function isHealthy(r: Response): boolean {
  return (
    r.current != null &&
    r.current >= 4 &&
    r.nistTier != null &&
    (r.nistTier === 'repeatable' || r.nistTier === 'adaptive')
  );
}

function avg(nums: number[]): number | null {
  if (!nums.length) return null;
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}

const QUESTION_BY_ID: Record<string, Question> = Object.fromEntries(QUESTIONS.map((q) => [q.id, q]));

export function pillarRollup(pillarId: string, responses: Response[]): PillarRollup {
  const inPillar = responses.filter((r) => {
    const q = QUESTION_BY_ID[r.questionId];
    return q && q.pillar_id === pillarId;
  });
  const currents = inPillar.map((r) => r.current).filter((v): v is CapabilityLevel => v != null);
  const targets = inPillar.map((r) => r.target).filter((v): v is CapabilityLevel => v != null);
  const gaps = inPillar
    .map(dimensionGap)
    .filter((g): g is number => g != null);
  const rauDims = inPillar
    .filter(isRau)
    .map((r) => QUESTION_BY_ID[r.questionId]?.dimension_id)
    .filter(Boolean) as string[];
  const healthyDims = inPillar
    .filter(isHealthy)
    .map((r) => QUESTION_BY_ID[r.questionId]?.dimension_id)
    .filter(Boolean) as string[];
  return {
    pillarId,
    currentAvg: avg(currents),
    targetAvg: avg(targets),
    gapAvg: avg(gaps),
    rauDimensionIds: rauDims,
    healthyDimensionIds: healthyDims,
  };
}

export function orgRollup(profile: WeightingProfileId, responses: Response[]): OrgRollup {
  const pillarRollups = PILLARS.map((p) => pillarRollup(p.id, responses));
  const weights = PILLARS.reduce<Record<string, number>>((acc, p) => {
    acc[p.id] = p.weights[profile];
    return acc;
  }, {});

  let weightedSum = 0;
  let weightTotal = 0;
  for (const pr of pillarRollups) {
    if (pr.currentAvg != null) {
      weightedSum += pr.currentAvg * weights[pr.pillarId];
      weightTotal += weights[pr.pillarId];
    }
  }
  const composite = weightTotal > 0 ? weightedSum / weightTotal : null;
  const gaps = pillarRollups.map((p) => p.gapAvg).filter((v): v is number => v != null);
  const avgGap = gaps.length ? gaps.reduce((a, b) => a + b, 0) / gaps.length : null;

  const tiers = responses
    .map((r) => r.nistTier)
    .filter((t): t is NistTier => t != null);
  let riskTier: NistTier | null = null;
  if (tiers.length) {
    riskTier = tiers.reduce<NistTier>(
      (worst, t) => (NIST_TIER_ORDER[t] < NIST_TIER_ORDER[worst] ? t : worst),
      'adaptive',
    );
  }

  const totalRau = responses.filter(isRau).length;
  const totalHealthy = responses.filter(isHealthy).length;

  return { composite, avgGap, riskTier, totalRau, totalHealthy, pillarRollups };
}

/* ------------------------------------------------------------------ */
/*  Convenience indexes                                                */
/* ------------------------------------------------------------------ */

export const DIMENSION_BY_ID: Record<string, Dimension> = Object.fromEntries(
  DIMENSIONS.map((d) => [d.id, d]),
);
export const QUESTIONS_BY_PILLAR: Record<string, Question[]> = QUESTIONS.reduce<
  Record<string, Question[]>
>((acc, q) => {
  (acc[q.pillar_id] ||= []).push(q);
  return acc;
}, {});
export const ACTIONS_BY_DIMENSION: Record<string, Action[]> = ACTIONS.reduce<
  Record<string, Action[]>
>((acc, a) => {
  (acc[a.dimension_id] ||= []).push(a);
  return acc;
}, {});
