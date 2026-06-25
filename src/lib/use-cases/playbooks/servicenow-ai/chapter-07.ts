import type { GuideChapter } from "../../guide-types";
import { CONCEPT_01_FLOW_AI_ACTIONS } from "./chapters/ch07/concept-01-flow-designer-ai-actions";
import { CONCEPT_02_INTEGRATIONHUB_AI_SPOKES } from "./chapters/ch07/concept-02-integrationhub-ai-spokes";
import { CONCEPT_03_DECISION_TABLES_ROUTING } from "./chapters/ch07/concept-03-decision-tables-ai-routing";
import { CONCEPT_04_DOCUMENT_INTELLIGENCE } from "./chapters/ch07/concept-04-document-intelligence";
import { CONCEPT_05_AI_CHANGE_MANAGEMENT } from "./chapters/ch07/concept-05-ai-augmented-change-management";
import { CONCEPT_06_BLUEPRINTS } from "./chapters/ch07/concept-06-end-to-end-blueprints";

export const CHAPTER_07_PROCESS_AUTOMATION: GuideChapter = {
  slug: "ch07-process-automation",
  number: 7,
  title: "Process Automation and AI-augmented Workflows",
  subtitle:
    "The convergence of Flow Designer, IntegrationHub, and AI — where work gets done without humans",
  readingMinutes: 165,
  intro: [
    "This chapter is where ServiceNow AI stops being 'intelligence' and becomes execution. Flow Designer orchestrates deterministic policy. Predictive Intelligence and GenAI add probabilistic judgment. IntegrationHub connects external systems. Document Intelligence turns attachments into data. Together, they create end-to-end workflows that run with minimal human touch — and clear human checkpoints where required.",
    "You will learn how to place AI steps inside flows safely, how to design AI spokes with cost and security controls, how to build hybrid routing with decision tables and confidence gating, how to build document pipelines with exception handling, and how to automate change management while reducing risk.",
    "By the end you will have reusable blueprint patterns you can adapt for ITSM, CSM, HR, and GRC — plus PDI walkthroughs that demonstrate real automation, not demos.",
  ],
  keyInsight:
    "AI-augmented automation succeeds when deterministic orchestration wraps probabilistic steps: rules enforce policy, AI suggests, confidence gates decide, humans approve high-risk actions, and logs make every decision auditable.",
  concepts: [
    CONCEPT_01_FLOW_AI_ACTIONS,
    CONCEPT_02_INTEGRATIONHUB_AI_SPOKES,
    CONCEPT_03_DECISION_TABLES_ROUTING,
    CONCEPT_04_DOCUMENT_INTELLIGENCE,
    CONCEPT_05_AI_CHANGE_MANAGEMENT,
    CONCEPT_06_BLUEPRINTS,
  ],
  diagrams: [
    {
      id: "ai-augmented-flow",
      title: "AI-augmented Flow pattern",
      caption:
        "A repeatable pattern: pre-checks → AI step → confidence gate → deterministic action → audit.",
      steps: [
        { label: "Trigger", desc: "Record created/updated", tool: "Flow" },
        { label: "Pre-checks", desc: "Policy + required fields", tool: "Rules" },
        { label: "AI step", desc: "Classify / generate / extract", tool: "AI" },
        { label: "Gate", desc: "Confidence + policy table", tool: "Decision" },
        { label: "Execute", desc: "Subflow/spoke actions", tool: "Automation" },
        { label: "Observe", desc: "Logs + metrics + overrides", tool: "Ops" },
      ],
    },
    {
      id: "document-pipeline",
      title: "Document processing pipeline",
      caption:
        "Document Intelligence becomes automation only with validation and exception handling.",
      steps: [
        { label: "Ingest", desc: "Upload/email/portal", tool: "Intake" },
        { label: "Classify", desc: "Document type", tool: "ML" },
        { label: "Extract", desc: "Fields + confidence", tool: "Doc Intel" },
        { label: "Validate", desc: "Thresholds + review", tool: "HITL" },
        { label: "Map", desc: "Staging → final tables", tool: "Records" },
        { label: "Route", desc: "Approvals + tasks", tool: "Flow" },
      ],
    },
  ],
  mindmap: {
    center: "Automate with AI safely",
    caption:
      "The workflow is the product: build it with gates, evidence, and ownership.",
    branches: [
      {
        id: "flow",
        label: "Flow + AI actions",
        description: "GenAI + PI inside orchestration",
        children: [
          { label: "Generate Text", description: "Draft + validate" },
          { label: "Classify", description: "Confidence bands" },
        ],
      },
      {
        id: "integrations",
        label: "IntegrationHub",
        description: "Spokes as safe external tools",
        children: [
          { label: "Auth + keys", description: "Centralized credentials" },
          { label: "Cost controls", description: "Caps + caching" },
        ],
      },
      {
        id: "govern",
        label: "Governance",
        description: "Policy + audit",
        children: [
          { label: "Decision tables", description: "Deterministic enforcement" },
          { label: "Exception queues", description: "Human review" },
        ],
      },
    ],
  },
  businessContext: [
    "Most organisations buy AI to reduce work, but they deploy it as assist panels and wonder why nothing changes. Real value comes when AI is embedded in workflows: it routes, drafts, extracts, and triages — and Flow enforces the policy.",
    "This chapter gives you the architecture patterns to ship automation that survives compliance and production: confidence gates, exception queues, integration governance, and blueprint anatomy you can reuse across domains.",
  ],
  decisionCriteria: [
    {
      question: "Do you need AI to change operational outcomes (not just drafts)?",
      yesMeans:
        "Start with Concept 1: design AI steps in Flow with confidence gating and degraded mode.",
    },
    {
      question: "Do you need external AI providers or cross-system automation?",
      yesMeans:
        "Concept 2: IntegrationHub spokes with auth, cost controls, and testing discipline.",
    },
    {
      question: "Is routing accuracy and auditability a concern?",
      yesMeans:
        "Concept 3: decision tables + PI confidence gating + feedback loops.",
    },
    {
      question: "Are attachments blocking automation (invoices, forms, contracts)?",
      yesMeans:
        "Concept 4: Document Intelligence pipeline with validation and exception handling.",
    },
  ],
  architecture: {
    title: "Hybrid automation reference stack",
    caption:
      "The production pattern used in every blueprint: deterministic policy wraps probabilistic AI.",
    steps: [
      { label: "Flow", desc: "Orchestrate the process", tool: "Backbone" },
      { label: "Decision tables", desc: "Policy & exceptions", tool: "Deterministic" },
      { label: "PI", desc: "Classification & similarity", tool: "ML" },
      { label: "Now Assist", desc: "Draft & synthesize", tool: "GenAI" },
      { label: "IntegrationHub", desc: "External actions", tool: "Connect" },
      { label: "Observability", desc: "Logs + costs + overrides", tool: "Ops" },
    ],
  },
  artifacts: [
    {
      id: "ai-step-error-handling",
      title: "AI step error-handling pattern (copy/paste)",
      description: "Use for every AI step in Flow.",
      content:
        `If AI step fails:\n- Record reason code (TIMEOUT / RATE_LIMIT / LOW_CONFIDENCE / SCHEMA)\n- Execute degraded-mode path (rules-based routing or human queue)\n- Notify owner only if above threshold volume\n- Never block ticket creation\n\nIf AI step returns low confidence:\n- Route to triage queue\n- Capture override outcome for retraining`,
    },
    {
      id: "blueprint-checklist",
      title: "Blueprint checklist",
      description: "Use to adapt any blueprint safely.",
      content:
        `- Trigger and record model defined\n- Data boundaries (ACL + scope)\n- AI steps chosen + confidence gates\n- Deterministic policy in decision tables\n- Exception handling + review queues\n- IntegrationHub actions versioned\n- Cost controls in place\n- Audit logs + dashboards`,
    },
  ],
  caseStudy: {
    title: "AI-augmented incident automation (PDI to proposal)",
    scenario:
      "A team had Now Assist enabled, but agent productivity gains were modest and deflection was flat. The missing piece was execution: AI wasn't embedded into Flow outcomes.",
    before:
      "GenAI drafts existed, but routing remained manual, error handling was ad hoc, and external integrations were script-based with unmanaged credentials.",
    after:
      "An AI-augmented incident flow: PI classification routed high-confidence incidents; Generate Text drafted summaries; decision tables enforced policy exceptions; low-confidence routed to triage; IntegrationHub actions standardized external notifications; dashboards tracked overrides and cost.",
    metrics: [
      "Lower triage workload through confidence-gated routing",
      "Higher agent speed through automatic summaries",
      "Reduced integration risk via centralized credentials",
      "A credible proposal with governance and measurable KPIs",
    ],
  },
  failurePoints: [
    {
      problem: "AI steps treated as deterministic",
      fix: "Use confidence gating, degraded mode, and validation — always.",
    },
    {
      problem: "External AI calls with unmanaged credentials",
      fix: "Use IntegrationHub connections and redacted logs; no keys in scripts.",
    },
    {
      problem: "Document extraction without exception queues",
      fix: "Confidence thresholds + human review for high-risk fields are mandatory.",
    },
    {
      problem: "No feedback loop",
      fix: "Log overrides and outcomes; retrain models; A/B test changes.",
    },
  ],
};

