import { x } from "../../explain";
import type { GuideChapter } from "../../guide-types";
import { CONCEPT_01_RELIABILITY_QC } from "./chapters/ch05/concept-01-reliability-qc";
import { CONCEPT_02_GOVERNANCE_SAFETY } from "./chapters/ch05/concept-02-governance-safety";
import { CONCEPT_03_SCALING_OPERATIONS } from "./chapters/ch05/concept-03-scaling-operations";

export const CHAPTER_05_PRODUCTION_OPERATIONS: GuideChapter = {
  slug: "ch05-production-operations",
  number: 5,
  title: "Production-Grade Cowork Operations",
  subtitle:
    "Running Cowork as a serious operational system — reliability, governance, and the discipline that makes automation trustworthy",
  readingMinutes: 150,
  intro: [
    "Chapters 1–4 built skills, schedules, pipelines, and connectors. Chapter 5 is how you run Cowork as ",
    x(
      "production infrastructure",
      "Reliability gates, governance, audit trails, and scaling discipline — not a side experiment.",
    ),
    " — trustworthy enough for leadership and finance to depend on.",
    "You will implement validation, alerting, review queues, minimum access, change management, and the ",
    x("organisational patterns", "Inventory, priority matrix, CoE, ROI, onboarding — that turn personal automation into team operations."),
    " that compound over years.",
  ],
  keyInsight:
    "Production Cowork is 60–80% automated prep with explicit human gates — reliability and governance are features, not paperwork.",
  concepts: [
    CONCEPT_01_RELIABILITY_QC,
    CONCEPT_02_GOVERNANCE_SAFETY,
    CONCEPT_03_SCALING_OPERATIONS,
  ],
  diagrams: [
    {
      id: "production-gates",
      title: "Production workflow gates",
      caption: "Nothing reaches production without validation — uncertainty routes to review.",
      steps: [
        { label: "Skill run", desc: "TAR execute", tool: "Transform" },
        { label: "Validate", desc: "Deterministic QA", tool: "Gate" },
        { label: "Review", desc: "T2 queue", tool: "Human" },
        { label: "Approve", desc: "flag / T3", tool: "Governance" },
        { label: "Emit", desc: "Prod path", tool: "Deliver" },
      ],
    },
    {
      id: "governance-layers",
      title: "Governance layers",
      caption: "Access, data class, audit — stacked before unattended schedules.",
      steps: [
        { label: "Min access", desc: "Per Skill scope", tool: "Security" },
        { label: "HITL tier", desc: "T0–T3", tool: "Approval" },
        { label: "Change mgmt", desc: "Version + regression", tool: "Quality" },
        { label: "Audit", desc: "run_id trail", tool: "Accountability" },
      ],
    },
  ],
  mindmap: {
    center: "Production Cowork",
    caption: "Trust comes from gates and logs — not from hoping the model behaved.",
    branches: [
      {
        id: "reliability",
        label: "Reliability",
        description: "QC discipline",
        children: [
          { label: "Validation", description: "After every run" },
          { label: "Alerting", description: "Fail loud" },
          { label: "Regression", description: "On every bump" },
        ],
      },
      {
        id: "governance",
        label: "Governance",
        description: "Safe autonomy",
        children: [
          { label: "Min access", description: "Per Skill" },
          { label: "Approval gates", description: "T2/T3 default" },
          { label: "Audit log", description: "run_id" },
        ],
      },
      {
        id: "scale",
        label: "Scale",
        description: "Team ops layer",
        children: [
          { label: "Inventory", description: "Full opportunity map" },
          { label: "CoE", description: "Standards + review" },
          { label: "ROI", description: "Prove value" },
        ],
      },
    ],
  },
  businessContext: [
    "Your Cowork pilots work on your machine — then someone asks 'can we bet the Monday board pack on this?' Chapter 5 is the answer: ",
    x(
      "production-grade operations",
      "Validation, governance, and scaling patterns that make automation auditable and repeatable at team scale.",
    ),
    ".",
    "Without this chapter, automation stays a hero skill; with it, Cowork becomes operational infrastructure finance and security can endorse.",
  ],
  decisionCriteria: [
    {
      question: "Will stakeholders act on output without re-checking sources?",
      yesMeans:
        "Production readiness gate (§1.1) + validation Skill (§1.2) mandatory.",
    },
    {
      question: "Does workflow touch confidential data or external sends?",
      yesMeans:
        "T3 approval + data classification (§2.2–2.4) before schedule.",
    },
    {
      question: "Are multiple people creating Skills?",
      yesMeans:
        "Team RBAC + CoE review (§2.6, §3.5) before shared production.",
    },
    {
      question: "Does leadership ask for ROI on AI spend?",
      yesMeans:
        "Token ledger (§1.7) + ROI worksheet (§3.6) from month one.",
    },
  ],
  architecture: {
    title: "Production operations stack",
    caption: "Reliability and governance wrap every workflow from Chapters 1–4.",
    steps: [
      { label: "Skills", desc: "TAR contracts", tool: "Ch 2" },
      { label: "Schedule", desc: "Triggers", tool: "Ch 3" },
      { label: "Validate", desc: "QA gates", tool: "Ch 5" },
      { label: "Govern", desc: "Access + audit", tool: "Ch 5" },
      { label: "Scale", desc: "CoE + ROI", tool: "Ch 5" },
    ],
  },
  artifacts: [
    {
      id: "production-readiness-ch5",
      title: "Production readiness gate",
      description: "Checklist before unattended production schedule.",
      content: `Test matrix · validation · alerts · HITL · token budget · rollback`,
    },
    {
      id: "cowork-inventory-ch5",
      title: "COWORK_INVENTORY.md",
      description: "Master map of recurring tasks to Skills.",
      content: `Task · cadence · minutes · Skill · priority · status`,
    },
    {
      id: "roi-worksheet-ch5",
      title: "Cowork ROI worksheet",
      description: "Monthly value vs token + infra cost.",
      content: `hours_saved × loaded_rate − tokens − infra`,
    },
  ],
  caseStudy: {
    title: "Series B — Cowork as approved ops infrastructure",
    scenario:
      "A 60-person company ran successful Cowork pilots but security blocked company-wide rollout after an over-scoped connector incident.",
    before:
      "No validation gates, personal OAuth on production, Skills edited in place, no ROI data, hero-dependent triage.",
    after:
      "Chapter 5 playbook adoption: production readiness gate, team RBAC, CoE office hours, quarterly security review, ROI dashboard — security approved shared ops host.",
    metrics: [
      "Production incidents → 3 in Q1 to 0 in Q2 after validation gates",
      "Security review → passed with min-access matrix",
      "Documented ROI → $42k annualised value vs $8k token+ops cost",
      "Onboarding → new ops hire productive in 2 weeks via SKILL_INDEX",
    ],
  },
  failurePoints: [
    {
      problem: "Scheduling without validation — confident wrong numbers reach leadership.",
      fix: "§1.1 readiness gate + §1.2 deterministic validation before emit.",
    },
    {
      problem: "Editing production Skills in place — no regression, unknown behaviour.",
      fix: "§2.5 version bump + shadow runs + regression fixtures.",
    },
    {
      problem: "Everyone admin on connectors — security shutdown.",
      fix: "§2.1 min access + §2.6 RBAC + semi-annual §2.8 review.",
    },
    {
      problem: "Automation sprawl — 40 Skills, 12 duplicates, no owners.",
      fix: "§1.8 quarterly audit + §3.1 inventory + §3.5 CoE consolidation.",
    },
  ],
};
