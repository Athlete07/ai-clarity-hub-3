import { x } from "../../explain";
import type { GuideChapter } from "../../guide-types";
import { CONCEPT_01_PI_OVERVIEW } from "./chapters/ch04/concept-01-predictive-intelligence-overview";
import { CONCEPT_02_SOLUTION_RECOMMENDATIONS } from "./chapters/ch04/concept-02-solution-recommendations";
import { CONCEPT_03_SIMILARITY_DEDUP } from "./chapters/ch04/concept-03-similarity-deduplication";
import { CONCEPT_04_MLOPS } from "./chapters/ch04/concept-04-training-testing-model-ops";
import { CONCEPT_05_AIOPS } from "./chapters/ch04/concept-05-aiops-event-correlation";
import { CONCEPT_06_FORECASTING } from "./chapters/ch04/concept-06-forecasting-capacity-planning";

export const CHAPTER_04_PREDICTIVE_INTELLIGENCE: GuideChapter = {
  slug: "ch04-predictive-intelligence",
  number: 4,
  title: "Predictive Intelligence and Machine Learning",
  subtitle:
    "The native ML engine — classification, clustering, recommendations, and the operational discipline to run it well",
  readingMinutes: 170,
  intro: [
    "GenAI is the new headline, but Predictive Intelligence is the workhorse. It powers the decisions that make ServiceNow operationally faster: category and assignment prediction, similarity and dedup, knowledge recommendations, and forecasting signals that prevent SLA misses.",
    "This chapter teaches you the platform’s ML mental model (solutions, definitions, models), how to build and deploy real classifiers on PDI, and how to run ML like an operations discipline: evaluation, drift detection, retraining, and monitoring.",
    "By the end you can whiteboard PI architecture in interviews, ship a routing model with confidence bands, and design an AIOps correlation pipeline that depends on CMDB truth — not hope.",
  ],
  keyInsight:
    "Predictive Intelligence wins by being measurable and cheap at scale: it predicts labels and similarity scores from your historical records. Production success comes from data and ops discipline (labels, evaluation, drift, monitoring) — not from 'training harder.'",
  concepts: [
    CONCEPT_01_PI_OVERVIEW,
    CONCEPT_02_SOLUTION_RECOMMENDATIONS,
    CONCEPT_03_SIMILARITY_DEDUP,
    CONCEPT_04_MLOPS,
    CONCEPT_05_AIOPS,
    CONCEPT_06_FORECASTING,
  ],
  diagrams: [
    {
      id: "pi-lifecycle",
      title: "Predictive Intelligence lifecycle",
      caption:
        "PI is an ML product lifecycle inside ServiceNow: data → train → evaluate → deploy → monitor → retrain.",
      steps: [
        { label: "Data", desc: "Labels + stable taxonomy", tool: "Quality" },
        { label: "Train", desc: "Definitions → models", tool: "Workbench" },
        { label: "Evaluate", desc: "Confusion + thresholds", tool: "Metrics" },
        { label: "Deploy", desc: "Suggest vs auto-apply", tool: "Policy" },
        { label: "Monitor", desc: "Overrides + drift", tool: "Ops" },
        { label: "Retrain", desc: "Cadence + change control", tool: "MLOps" },
      ],
    },
    {
      id: "routing-confidence-bands",
      title: "Confidence banding for safe automation",
      caption:
        "A simple pattern that preserves trust: automate only when precision is proven; suggest otherwise.",
      steps: [
        { label: "High", desc: "Auto-apply", tool: "≥ threshold A" },
        { label: "Medium", desc: "Suggest + human review", tool: "threshold B–A" },
        { label: "Low", desc: "Manual triage", tool: "< threshold B" },
        { label: "Feedback", desc: "Capture overrides for retrain", tool: "Loop" },
      ],
    },
  ],
  mindmap: {
    center: "Ship PI safely",
    caption:
      "PI programs succeed when data discipline and ops discipline meet — not when models are treated like magic.",
    branches: [
      {
        id: "data",
        label: "Data discipline",
        description: "Labels + taxonomy",
        children: [
          { label: "Label audits", description: "Fix process, not model" },
          { label: "Imbalance handling", description: "Merge / two-stage / rules" },
        ],
      },
      {
        id: "deploy",
        label: "Safe deployment",
        description: "Thresholds + Flow",
        children: [
          { label: "Confidence bands", description: "Auto / suggest / triage" },
          { label: "Audit fields", description: "Log score + decision" },
        ],
      },
      {
        id: "ops",
        label: "Model operations",
        description: "Monitor + retrain",
        children: [
          { label: "Override tracking", description: "Drift signal" },
          { label: "A/B tests", description: "Prevent regressions" },
        ],
      },
    ],
  },
  businessContext: [
    "Predictive Intelligence is where most enterprise ServiceNow ROI compounds: fewer misroutes, faster resolutions, less duplicate noise, and proactive capacity planning. Unlike GenAI, PI is measurable — which means it survives audit and finance scrutiny.",
    "But PI also fails in predictable ways: label drift, class imbalance, accidental leakage, and lack of monitoring. This chapter gives you the operational discipline to run PI like a production service — with confidence bands and continuous improvement loops.",
  ],
  decisionCriteria: [
    {
      question: "Do you need faster routing and cleaner categorisation at scale?",
      yesMeans:
        "Start with Concepts 1–2. Build the PDI routing classifier (2.8) and deploy with confidence bands.",
    },
    {
      question: "Are outages creating floods of duplicate incidents and alerts?",
      yesMeans:
        "Concept 3 + Concept 5. Similarity dedup + AIOps correlation are the noise-reduction stack.",
    },
    {
      question: "Have PI models degraded over time in your org?",
      yesMeans:
        "Concept 4. Drift detection, monitoring, and retraining cadence are mandatory to restore trust.",
    },
    {
      question: "Is capacity planning and SLA prediction a leadership KPI?",
      yesMeans:
        "Concept 6. Forecasts + predictive thresholds drive proactive staffing and fewer SLA breaches.",
    },
  ],
  architecture: {
    title: "PI reference architecture (routing + ops)",
    caption:
      "A production-shaped pattern you can implement on PDI and scale to enterprise.",
    steps: [
      { label: "Define", desc: "Prediction definition + features", tool: "PI" },
      { label: "Train", desc: "Holdout evaluation", tool: "Test set" },
      { label: "Deploy", desc: "Confidence band policy", tool: "Flow" },
      { label: "Operate", desc: "Overrides + monitoring", tool: "Ops" },
      { label: "Improve", desc: "Retrain + A/B", tool: "MLOps" },
    ],
  },
  artifacts: [
    {
      id: "pi-model-version-log",
      title: "PI model version log (starter)",
      description: "Track models like releases — audit-friendly and rollback-ready.",
      content:
        `| Model | Definition | Version | Train window | Test metric | Thresholds | Deployed | Owner |\n|------|------------|---------|-------------|------------|-----------|---------|-------|\n| routing_v1 | assignment_group | 1.0.0 | 2026-01→2026-05 | F1=0.78 | 0.82/0.65 | prod | platform-ml |\n| routing_v1 | assignment_group | 1.1.0 | 2026-03→2026-06 | F1=0.81 | 0.82/0.65 | A/B 20% | platform-ml |`,
    },
    {
      id: "override-capture-template",
      title: "Override capture template",
      description: "Turn human disagreement into retraining data.",
      content:
        `When a user overrides a PI recommendation, capture:\n- record id\n- predicted value + confidence\n- chosen value\n- reason tag (taxonomy mismatch / missing feature / process change)\n\nUse weekly to drive drift and retraining decisions.`,
    },
  ],
  caseStudy: {
    title: "Duplicate volume reduction + routing uplift (90-day program)",
    scenario:
      "An enterprise service desk had high misroute rates and frequent outage storms that created thousands of duplicate incidents and alerts. Agents lost trust in automation due to occasional misroutes and no explanation for suggestions.",
    before:
      "Manual triage, keyword duplicate checks, no confidence bands, no model monitoring, and CMDB relationship inconsistencies that prevented correlation.",
    after:
      "PI routing model deployed with three confidence bands and override capture. Similarity dedup suggested links; auto-link only at high precision. AIOps correlation piloted on one business service after CMDB cleanup. Monitoring dashboards tracked overrides and drift; retrains scheduled monthly.",
    metrics: [
      "Reassignments per incident down (misroutes reduced)",
      "Duplicate incidents reduced during outages (precision-first auto-link)",
      "Alerts per incident reduced via correlation and grouping",
      "Model trust increased due to transparent thresholds and logging",
    ],
  },
  failurePoints: [
    {
      problem: "Training on noisy or unstable labels",
      fix: "Run label audits and introduce stable routing labels before training.",
    },
    {
      problem: "Deploying auto-actions without confidence bands",
      fix: "Use high/medium/low bands and require human review in the mid band.",
    },
    {
      problem: "No monitoring — model fails silently",
      fix: "Track override rate, confidence distribution, and per-class performance with alerts.",
    },
    {
      problem: "AIOps correlation without CMDB truth",
      fix: "Pilot service-by-service after relationship validation; observe-only before suppression.",
    },
  ],
};

