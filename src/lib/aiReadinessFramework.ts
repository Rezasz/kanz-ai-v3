/**
 * Kanz.ai AI Readiness Framework v3.0.0
 *
 * Consumes the upstream canonical questionnaire-app-spec.json
 * (Kanz-ai-Org/Ai-Maturity-Framwork). To refresh, replace
 * src/data/aiReadinessSpec.json with the latest upstream file.
 *
 * Actions are not in the JSON spec; they live in src/data/aiReadinessActions.json,
 * generated from each pillar's actions.yaml.
 */

import specJson from '@/data/aiReadinessSpec.json';
import actionsJson from '@/data/aiReadinessActions.json';

/* ------------------------------------------------------------------ */
/*  Raw JSON types                                                      */
/* ------------------------------------------------------------------ */

export type CapabilityLevel = 1 | 2 | 3 | 4 | 5;
export type NistTier = 'partial' | 'risk_informed' | 'repeatable' | 'adaptive';
export type WeightingProfileId = 'default' | 'regulated_industry' | 'early_stage';
export type QuestionKind = 'current_capability' | 'target_capability' | 'risk_tier' | 'evidence';

export type Pillar = {
  id: string;
  name: string;
  slug: string;
  purpose: string;
  dimension_count: number;
};

export type CapabilityOption = {
  id: CapabilityLevel;
  label: string;
  description: string;
};

export type RiskTierOption = {
  id: NistTier;
  label: string;
  description: string;
};

export type Question = {
  id: string;
  kind: QuestionKind;
  required: boolean | null;
  type: 'single_choice' | 'evidence_upload';
  prompt: string;
  options: CapabilityOption[] | RiskTierOption[] | null;
  stored_as: string;
  pillar_id: string;
  pillar_name: string;
  dimension_id: string;
  dimension_name: string;
  what_it_covers: string;
  why_it_matters: string;
  evidence_required_at: number | null;
  respondent_roles: string[];
  babok_knowledge_area?: string;
  babok_technique?: string;
  common_pitfalls: string[];
};

type Spec = {
  version: string;
  generated_by: string;
  weighting_profiles: Record<WeightingProfileId, Record<string, number>>;
  pillars: Pillar[];
  capability_scale: { id: CapabilityLevel; label: string }[];
  risk_tier_scale: { id: NistTier; label: string }[];
  rau_rule: { description: string; formula: string };
  healthy_rule: { description: string; formula: string };
  questions: Question[];
};

const SPEC = specJson as unknown as Spec;

/* ------------------------------------------------------------------ */
/*  Re-exports from the spec                                            */
/* ------------------------------------------------------------------ */

export const FRAMEWORK_VERSION = SPEC.version;
export const PILLARS: Pillar[] = SPEC.pillars;
export const WEIGHTING_PROFILE_WEIGHTS = SPEC.weighting_profiles;
export const RAU_RULE = SPEC.rau_rule;
export const HEALTHY_RULE = SPEC.healthy_rule;

const CAPABILITY_DEFINITIONS: Record<CapabilityLevel, string> = {
  1: 'Ad-hoc, reactive, undocumented; depends on individual effort. No defined process.',
  2: 'Practice exists for pilots or high-risk cases. Inconsistent application. Documentation partial.',
  3: 'Documented, standardised, and applied across most relevant systems. Roles assigned.',
  4: 'Measured against KPIs, reviewed regularly, integrated cross-functionally. Evidence generated continuously.',
  5: 'Continuously improved, benchmarked externally, drives organisation-wide innovation. Competitive differentiator.',
};

const NIST_TIER_DEFINITIONS: Record<NistTier, string> = {
  partial:
    'AI risk management is reactive and informal. Practices are inconsistent and not aligned with organisational objectives.',
  risk_informed:
    'The organisation is aware of AI risks. Some practices exist for higher-risk activities but coverage is incomplete and informal.',
  repeatable:
    'Formally approved policies and procedures govern AI risk management. Practice is consistent and traceable.',
  adaptive:
    'AI risk management is integrated into culture and improves continuously. Practices are proactive, measured, and inform broader strategy.',
};

export const CAPABILITY_LEVELS = SPEC.capability_scale.map((c) => ({
  ...c,
  definition: CAPABILITY_DEFINITIONS[c.id],
}));

export const NIST_TIERS = SPEC.risk_tier_scale.map((t) => ({
  ...t,
  meaning: NIST_TIER_DEFINITIONS[t.id],
}));

export const NIST_TIER_ORDER: Record<NistTier, number> = {
  partial: 0,
  risk_informed: 1,
  repeatable: 2,
  adaptive: 3,
};

export const WEIGHTING_PROFILES: { id: WeightingProfileId; name: string; description: string }[] = [
  {
    id: 'default',
    name: 'Default',
    description: 'Uniform weights across pillars. Use when no strong industry or stage preference.',
  },
  {
    id: 'regulated_industry',
    name: 'Regulated Industry',
    description:
      'Heavier weights on Governance, Responsible AI, Security. Use for finance, healthcare, public sector, defence.',
  },
  {
    id: 'early_stage',
    name: 'Early Stage',
    description: 'Heavier weights on Strategy, Data, People. Use for organisations still building AI capability.',
  },
];

/* ------------------------------------------------------------------ */
/*  Derived: dimensions + triplets (C / T / R / optional E per dim)    */
/* ------------------------------------------------------------------ */

export type DimensionTriplet = {
  dimensionId: string;
  dimensionName: string;
  pillarId: string;
  what_it_covers: string;
  why_it_matters: string;
  common_pitfalls: string[];
  evidence_required_at: number | null;
  babok_knowledge_area?: string;
  babok_technique?: string;
  respondent_roles: string[];
  current: Question;
  target: Question;
  risk: Question;
  evidence?: Question;
};

function groupByDimension(): DimensionTriplet[] {
  const byDim = new Map<string, DimensionTriplet>();
  for (const q of SPEC.questions) {
    let trip = byDim.get(q.dimension_id);
    if (!trip) {
      trip = {
        dimensionId: q.dimension_id,
        dimensionName: q.dimension_name,
        pillarId: q.pillar_id,
        what_it_covers: q.what_it_covers,
        why_it_matters: q.why_it_matters,
        common_pitfalls: q.common_pitfalls,
        evidence_required_at: q.evidence_required_at,
        babok_knowledge_area: q.babok_knowledge_area,
        babok_technique: q.babok_technique,
        respondent_roles: q.respondent_roles,
        current: q,
        target: q,
        risk: q,
      };
      byDim.set(q.dimension_id, trip);
    }
    if (q.kind === 'current_capability') trip.current = q;
    else if (q.kind === 'target_capability') trip.target = q;
    else if (q.kind === 'risk_tier') trip.risk = q;
    else if (q.kind === 'evidence') trip.evidence = q;
  }
  return Array.from(byDim.values()).sort((a, b) => a.dimensionId.localeCompare(b.dimensionId));
}

export const TRIPLETS: DimensionTriplet[] = groupByDimension();

export const TRIPLETS_BY_PILLAR: Record<string, DimensionTriplet[]> = TRIPLETS.reduce<
  Record<string, DimensionTriplet[]>
>((acc, t) => {
  (acc[t.pillarId] ||= []).push(t);
  return acc;
}, {});

export const TRIPLET_BY_DIMENSION_ID: Record<string, DimensionTriplet> = Object.fromEntries(
  TRIPLETS.map((t) => [t.dimensionId, t]),
);

/* ------------------------------------------------------------------ */
/*  Actions (YAML-derived, not in the JSON spec)                       */
/* ------------------------------------------------------------------ */

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

export const ACTIONS: Action[] = actionsJson as Action[];

export const ACTIONS_BY_DIMENSION: Record<string, Action[]> = ACTIONS.reduce<
  Record<string, Action[]>
>((acc, a) => {
  (acc[a.dimension_id] ||= []).push(a);
  return acc;
}, {});

/* ------------------------------------------------------------------ */
/*  Response model + scoring                                            */
/* ------------------------------------------------------------------ */

export type Response = {
  dimensionId: string;
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

export function pillarRollup(pillarId: string, responses: Response[]): PillarRollup {
  const inPillar = responses.filter((r) => {
    const t = TRIPLET_BY_DIMENSION_ID[r.dimensionId];
    return t && t.pillarId === pillarId;
  });
  const currents = inPillar.map((r) => r.current).filter((v): v is CapabilityLevel => v != null);
  const targets = inPillar.map((r) => r.target).filter((v): v is CapabilityLevel => v != null);
  const gaps = inPillar.map(dimensionGap).filter((g): g is number => g != null);
  return {
    pillarId,
    currentAvg: avg(currents),
    targetAvg: avg(targets),
    gapAvg: avg(gaps),
    rauDimensionIds: inPillar.filter(isRau).map((r) => r.dimensionId),
    healthyDimensionIds: inPillar.filter(isHealthy).map((r) => r.dimensionId),
  };
}

export function orgRollup(profile: WeightingProfileId, responses: Response[]): OrgRollup {
  const pillarRollups = PILLARS.map((p) => pillarRollup(p.id, responses));
  const weights = WEIGHTING_PROFILE_WEIGHTS[profile];

  let weightedSum = 0;
  let weightTotal = 0;
  for (const pr of pillarRollups) {
    if (pr.currentAvg != null) {
      const w = weights[pr.pillarId] ?? 1;
      weightedSum += pr.currentAvg * w;
      weightTotal += w;
    }
  }
  const composite = weightTotal > 0 ? weightedSum / weightTotal : null;

  const gaps = pillarRollups.map((p) => p.gapAvg).filter((v): v is number => v != null);
  const avgGap = gaps.length ? gaps.reduce((a, b) => a + b, 0) / gaps.length : null;

  const tiers = responses.map((r) => r.nistTier).filter((t): t is NistTier => t != null);
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

export function pillarWeight(pillarId: string, profile: WeightingProfileId): number {
  return WEIGHTING_PROFILE_WEIGHTS[profile]?.[pillarId] ?? 1;
}
