import { x } from "../../explain";
import type { GuideChapter } from "../../guide-types";
import { CONCEPT_01_WORKFLOW_DESIGN_PRINCIPLES } from "./chapters/ch09/concept-01-workflow-design-principles";
import { CONCEPT_02_CONTENT_COMMUNICATION } from "./chapters/ch09/concept-02-content-communication-workflows";
import { CONCEPT_03_ANALYSIS_DECISION } from "./chapters/ch09/concept-03-analysis-decision-workflows";
import { CONCEPT_04_TECHNICAL_DEVELOPMENT } from "./chapters/ch09/concept-04-technical-development-workflows";
import { CONCEPT_05_CROSS_SURFACE_WORKFLOWS } from "./chapters/ch09/concept-05-cross-surface-workflows";

export const CHAPTER_09_PRODUCTION_WORKFLOWS: GuideChapter = {
  slug: "ch09-production-workflows",
  number: 9,
  title: "Production-Grade Workflows",
  subtitle:
    "The end-to-end workflow patterns that make Claude a genuine productivity infrastructure — not just a tool you open, but a system you run",
  readingMinutes: 110,
  intro: [
    "Chapters 4–8 taught prompting, Projects, MCP, and Claude Code. Chapter 9 turns those pieces into ",
    x(
      "repeatable systems",
      "Named workflows with triggers, validation, human gates, and documentation — not one-off chat sessions.",
    ),
    " — the layer that makes Claude productivity infrastructure for teams.",
    "Whether you write content, analyze decisions, or ship code, the same five-stage anatomy applies. This chapter gives you the design principles and four workflow libraries to copy.",
  ],
  keyInsight:
    "A production workflow is a documented five-stage pipeline with validation, idempotency, and human-in-the-loop at the right gate — build a portfolio of these instead of reinventing prompts from memory.",
  concepts: [
    CONCEPT_01_WORKFLOW_DESIGN_PRINCIPLES,
    CONCEPT_02_CONTENT_COMMUNICATION,
    CONCEPT_03_ANALYSIS_DECISION,
    CONCEPT_04_TECHNICAL_DEVELOPMENT,
    CONCEPT_05_CROSS_SURFACE_WORKFLOWS,
  ],
  diagrams: [
    {
      id: "five-stage-workflow",
      title: "Five-stage workflow anatomy",
      caption:
        "Every production workflow: trigger → input prep → Claude → output handling → downstream action.",
      steps: [
        { label: "Trigger", desc: "Event / schedule", tool: "Start" },
        { label: "Input prep", desc: "Clean + chunk", tool: "ETL" },
        { label: "Claude", desc: "Project + tools", tool: "Model" },
        { label: "Validate", desc: "Schema + HITL", tool: "Guard" },
        { label: "Downstream", desc: "Send / store", tool: "Act" },
      ],
    },
    {
      id: "workflow-portfolio",
      title: "Workflow portfolio layers",
      caption:
        "Design principles → domain libraries (content, analysis, technical) → shared Projects and MCP.",
      steps: [
        { label: "Principles", desc: "1.1–1.8", tool: "Design" },
        { label: "Content", desc: "2.1–2.8", tool: "Comms" },
        { label: "Analysis", desc: "3.1–3.8", tool: "Decide" },
        { label: "Technical", desc: "4.1–4.8", tool: "Build" },
      ],
    },
  ],
  mindmap: {
    center: "Production Workflows",
    caption: "Principles → three workflow libraries → portfolio mindset.",
    branches: [
      {
        id: "principles",
        label: "Design principles",
        description: "Concept 1 — 1.1–1.8",
        children: [
          { label: "Five stages", description: "Anatomy" },
          { label: "HITL + idempotency", description: "Reliability" },
        ],
      },
      {
        id: "content",
        label: "Content & comms",
        description: "Concept 2 — 2.1–2.8",
        children: [
          { label: "Brief-to-draft", description: "Pipeline" },
          { label: "Email + meetings", description: "MCP" },
        ],
      },
      {
        id: "analysis",
        label: "Analysis & decisions",
        description: "Concept 3 — 3.1–3.8",
        children: [
          { label: "Strategy + comp intel", description: "Frame" },
          { label: "Risk + finance", description: "Quant" },
        ],
      },
      {
        id: "technical",
        label: "Technical",
        description: "Concept 4 — 4.1–4.8",
        children: [
          { label: "PR review + debug", description: "Daily eng" },
          { label: "Incident + IaC", description: "Ops" },
        ],
      },
    ],
  },
  businessContext: [
    "Teams adopt Claude individually — great demos, no compounding. Workflows without documentation don't survive handoffs or audits.",
    "Chapter 9 gives operators and leads a ",
    x(
      "workflow operating system",
      "Shared anatomy, failure-mode catalog, and domain playbooks that connect Projects, MCP, and Claude Code.",
    ),
    " so Claude becomes team infrastructure, not personal magic.",
  ],
  decisionCriteria: [
    {
      question: "Is the same task run weekly by multiple people?",
      yesMeans:
        "Yes — document as production workflow (Concept 1); pick domain playbook (2–4).",
    },
    {
      question: "Does output leave the organization (email, client doc, PR comment)?",
      yesMeans:
        "Yes — mandatory HITL gate and output validation (1.5, 1.6).",
    },
    {
      question: "Do workflows touch live data or production systems?",
      yesMeans:
        "Yes — idempotency (1.4), read-only MCP default, human apply for deploys (4.7, 4.8).",
    },
    {
      question: "Is the team rebuilding prompts from Slack memory?",
      yesMeans:
        "Yes — start workflow portfolio registry (1.8) with three pilot workflows.",
    },
  ],
  architecture: {
    title: "Workflow maturity ladder",
    caption:
      "Ad hoc → documented → validated → MCP-connected → portfolio-managed.",
    steps: [
      { label: "Ad hoc", desc: "Chat prompts", tool: "Individual" },
      { label: "Documented", desc: "Workflow doc", tool: "Team" },
      { label: "Validated", desc: "Schema + HITL", tool: "Pilot" },
      { label: "Connected", desc: "MCP downstream", tool: "Production" },
      { label: "Portfolio", desc: "Registry + owners", tool: "Scale" },
    ],
  },
  artifacts: [
    {
      id: "workflow-registry-row",
      title: "Workflow registry entry",
      description: "One row per production workflow in your team catalog.",
      content: `Name: Weekly competitive brief
Owner: PM | Maturity: Production
Trigger: Monday 8am | Model: Sonnet
MCP: Web search, Notion write
HITL: Human approves before Notion publish
Prompt version: v3.2 | Last tested: 2026-06-15
ROI: ~2h/week analyst time saved`,
    },
    {
      id: "hitl-classification",
      title: "HITL classification guide",
      content: `AUTONOMOUS OK: internal drafts, research extracts, branch code suggestions
REVIEW REQUIRED: client-facing copy, financial figures, legal flags
HUMAN EXECUTES: production deploy, send email, merge PR, incident remediation`,
    },
  ],
  caseStudy: {
    title: "B2B marketing team — from prompts to portfolio",
    scenario:
      "12-person marketing org used Claude ad hoc — strong writers, inconsistent quality, no audit trail, duplicate effort on repurposing and reports.",
    before:
      "Slack prompt pins, no workflow docs, accidental off-brand client draft sent once, 6h/week reinventing research synthesis.",
    after:
      "Workflow portfolio in Notion: brief-to-draft (2.1), repurposing (2.5), editorial calendar (2.8). Gmail MCP triage with send queue. Registry with owners; quarterly prompt version review.",
    metrics: [
      "Content production cycle → 40% faster on long-form",
      "Off-brand external sends → zero post-HITL policy",
      "Repurposing time per article → 4h to 45min",
      "New hire time-to-first-published → 3 weeks to 5 days",
    ],
  },
  failurePoints: [
    {
      problem: "One giant prompt for entire pipeline.",
      fix: "Split into stages with validation between (1.2, 2.1).",
    },
    {
      problem: "Auto-send external content without review.",
      fix: "HITL queue pattern (1.5); classify outputs.",
    },
    {
      problem: "MCP writes duplicate records on retry.",
      fix: "Idempotency keys and cursors (1.4).",
    },
    {
      problem: "Workflow knowledge lives in one person's head.",
      fix: "Workflow doc template + portfolio registry (1.7, 1.8).",
    },
  ],
};
