import { x } from "../../explain";
import type { GuideChapter } from "../../guide-types";
import { CONCEPT_01_EXECUTIVE_WORKFLOWS } from "./chapters/ch06/concept-01-executive-workflows";
import { CONCEPT_02_OPERATIONS_WORKFLOWS } from "./chapters/ch06/concept-02-operations-workflows";
import { CONCEPT_03_CONTENT_KNOWLEDGE_WORKFLOWS } from "./chapters/ch06/concept-03-content-knowledge-workflows";

export const CHAPTER_06_WORKFLOW_BLUEPRINTS: GuideChapter = {
  slug: "ch06-workflow-blueprints",
  number: 6,
  title: "End-to-End Workflow Blueprints",
  subtitle:
    "Complete, detailed, production-ready workflow blueprints — the reference library for serious Cowork users",
  readingMinutes: 150,
  intro: [
    "Chapters 1–5 taught mental models, Skills, schedules, connectors, and production discipline. Chapter 6 is the ",
    x(
      "blueprint library",
      "24 copy-adapt production workflow designs — pipeline DAGs, Skill names, triggers, HITL tiers, and artifacts.",
    ),
    " — executive, operations, and content/knowledge patterns you implement rather than invent.",
    "Each blueprint references prior chapters: TAR Skills (Ch 2), triggers (Ch 3), MCP (Ch 4), validation and approval gates (Ch 5). Clone, allowlist, regression-test, then schedule.",
  ],
  keyInsight:
    "Serious Cowork users do not brainstorm workflows from scratch — they clone blueprints, map paths, and promote through production gates.",
  concepts: [
    CONCEPT_01_EXECUTIVE_WORKFLOWS,
    CONCEPT_02_OPERATIONS_WORKFLOWS,
    CONCEPT_03_CONTENT_KNOWLEDGE_WORKFLOWS,
  ],
  diagrams: [
    {
      id: "blueprint-library",
      title: "Blueprint library map",
      caption: "Three lanes — pick blueprint by role, adapt paths and connectors.",
      steps: [
        { label: "Executive", desc: "8 leadership flows", tool: "Ch 6.1" },
        { label: "Operations", desc: "8 process flows", tool: "Ch 6.2" },
        { label: "Content", desc: "8 knowledge flows", tool: "Ch 6.3" },
      ],
    },
    {
      id: "blueprint-adaptation",
      title: "Blueprint adaptation loop",
      caption: "Clone spec → map paths → sandbox → production gate → schedule.",
      steps: [
        { label: "Clone", desc: "Blueprint spec", tool: "Copy" },
        { label: "Map", desc: "Paths + MCP", tool: "Adapt" },
        { label: "Test", desc: "5-run + regression", tool: "Ch 5" },
        { label: "Gate", desc: "HITL + validate", tool: "Prod" },
        { label: "Run", desc: "Schedule", tool: "Autopilot" },
      ],
    },
  ],
  mindmap: {
    center: "24 blueprints",
    caption: "Reference designs — not generic inspiration slides.",
    branches: [
      {
        id: "exec",
        label: "Executive",
        description: "Leadership hours back",
        children: [
          { label: "Morning brief", description: "8am delivery" },
          { label: "Board pack", description: "T3 gate" },
          { label: "Week in review", description: "Friday close" },
        ],
      },
      {
        id: "ops",
        label: "Operations",
        description: "Business process",
        children: [
          { label: "Doc pipeline", description: "Inbox → route" },
          { label: "KPI report", description: "Monday SLA" },
          { label: "Contract review", description: "Legal queue" },
        ],
      },
      {
        id: "content",
        label: "Content & KB",
        description: "Knowledge ops",
        children: [
          { label: "Content pipeline", description: "Stage gates" },
          { label: "Research synth", description: "Cited output" },
          { label: "Notes → KB", description: "Propose merge" },
        ],
      },
    ],
  },
  businessContext: [
    "You know how to build Skills — but staring at an empty workflow builder wastes the hour you were trying to save. Chapter 6 gives ",
    x(
      "production-ready designs",
      "Named pipelines with Skill sequences, triggers, validation, and HITL tiers — paste into your ops wiki and adapt.",
    ),
  ],
  decisionCriteria: [
    {
      question: "Are you automating leadership, ops, or content work?",
      yesMeans:
        "Start in Concept 1, 2, or 3 — clone closest blueprint before custom design.",
    },
    {
      question: "Does the blueprint touch external sends or money?",
      yesMeans:
        "Default T3 approval from blueprint; read Ch 5 §2.4 before enabling send nodes.",
    },
    {
      question: "Do you already have a similar workflow from Ch 3–4?",
      yesMeans:
        "Merge duplicate Skills — blueprints share DOC_PIPELINE, KPI_REPORT, intel scans.",
    },
    {
      question: "Is this your first production workflow?",
      yesMeans:
        "Start §2.1 document pipeline or §1.1 exec brief (read-only connectors) — highest learning ROI.",
    },
  ],
  architecture: {
    title: "Blueprint anatomy",
    caption: "Every blueprint: trigger → Skills → validate → review → emit.",
    steps: [
      { label: "Trigger", desc: "Cron / event / flag", tool: "When" },
      { label: "Skills", desc: "Named TAR nodes", tool: "How" },
      { label: "Validate", desc: "QA Skill", tool: "Ch 5" },
      { label: "Review", desc: "HITL tier", tool: "Human" },
      { label: "Emit", desc: "Path / connector", tool: "Done" },
    ],
  },
  artifacts: [
    {
      id: "blueprint-index-ch6",
      title: "Blueprint index (24 workflows)",
      description: "Quick reference — section ID to blueprint name.",
      content: `Exec: EXEC_BRIEF, BOARD_PACK, STAKEHOLDER_COMMS, STRAT_INTEL, PERF_REVIEW, DECISION_MEMO, MEETING_PREP, WIR
Ops: DOC_PIPELINE, CONTRACT_REVIEW, VENDOR_EVAL, COMPLIANCE_MONITOR, PROJECT_STATUS, EXPENSE_REVIEW, ONBOARD_PACK, KPI_REPORT
Content: CONTENT_PIPELINE, RESEARCH_SYNTH, KB_MAINTAIN, NEWSLETTER, SOCIAL_MULTI, COMP_INTEL, LEARNING_DIGEST, NOTES_TO_KB`,
    },
    {
      id: "blueprint-adaptation-checklist",
      title: "Blueprint adaptation checklist",
      description: "Steps to clone any Ch 6 blueprint to your environment.",
      content: `[ ] Copy pipeline spec
[ ] Map paths + connector allowlists
[ ] PATH_MAPPING sandbox → prod
[ ] 5-run test + regression
[ ] Production readiness gate
[ ] Schedule + monitor 3 cycles`,
    },
  ],
  caseStudy: {
    title: "CoE — blueprint library cut time-to-production 70%",
    scenario:
      "A 45-person company's Cowork CoE spent 3 weeks per new workflow inventing pipelines from scratch — inconsistent gates, duplicate Skills, frustrated domain owners.",
    before:
      "11 custom one-offs, 4 failed schedules, no shared naming, executives still asking 'can Cowork do X?'",
    after:
      "Chapter 6 blueprint library in ops wiki; adaptation checklist mandatory; exec brief + doc pipeline + KPI report as standard trio; new workflows clone and ship in 4–5 days.",
    metrics: [
      "Time-to-production → 21 days median to 6 days",
      "Duplicate Skills → consolidated from 11 overlapping to 6 canonical",
      "Production incidents → 2 in Q1 to 0 after blueprint QA patterns",
      "Adoption → 18 live workflows in 2 quarters vs 5 in prior year",
    ],
  },
  failurePoints: [
    {
      problem: "Copying blueprint Skill names without TAR specs — behaviour drift.",
      fix: "Clone full TAR + fixtures per Ch 2 §3.8 share bundle.",
    },
    {
      problem: "Skipping validation because 'blueprint looked production-ready.'",
      fix: "Ch 5 production gate on every adaptation — blueprints assume gates, do not replace them.",
    },
    {
      problem: "Enabling send/publish nodes on day one.",
      fix: "Blueprints default drafts/review — T3 only after pilot period.",
    },
    {
      problem: "24 blueprints attempted at once — CoE overwhelmed.",
      fix: "§3.2 priority matrix — deploy standard trio first, one new blueprint per sprint.",
    },
  ],
};
