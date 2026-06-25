import { x } from "../../explain";
import type { UseCasePlaybook } from "../../types";
import { CHAPTER_01_UNDERSTANDING_COWORK } from "./chapter-01";
import { CHAPTER_02_SKILLS_TAR_FRAMEWORK } from "./chapter-02";
import { CHAPTER_03_SCHEDULING_AUTOPILOT } from "./chapter-03";
import { CHAPTER_04_MCP_CONNECTED_AUTOMATION } from "./chapter-04";
import { CHAPTER_05_PRODUCTION_OPERATIONS } from "./chapter-05";
import { CHAPTER_06_WORKFLOW_BLUEPRINTS } from "./chapter-06";
import { CHAPTER_07_PRODUCT_SURFACE } from "./chapter-07";

const SERIES_ID = "cowork-coo";

export const COWORK_COO: UseCasePlaybook = {
  slug: "cowork-coo",
  title: "Cowork Beyond Chat: The Operator's Guide to Scheduled AI Automation",
  summary:
    "Stop re-running the same file chores every Sunday night. Seven chapters take you from mental model to scheduled Skills, Gmail-and-Slack connectors, production gates, and 24 workflow blueprints — autonomous ops when the chat window closes.",
  heroBullets: [
    "7 chapters · ~15 hr read · 24 workflow blueprints you can run this week",
    "Skills, native schedules, MCP, and audit gates — one arc from sandbox to production",
    "Built for chiefs of staff, founders, and operators — Claude.ai thinks with you; Cowork works while you're offline",
  ],
  kind: "tool-guide",
  categoryId: "automation",
  featured: true,
  catalogBadge: "New · Operator guide",
  tags: [
    "7 Chapters",
    "24 Blueprints",
    "Scheduled Ops",
    "Skills & TAR",
    "MCP",
    "Operators",
  ],
  roles: ["founder", "business-leader", "pm", "sme-owner"],
  timeToImplement: "7 chapters · ~15 hr read",
  tools: ["Cowork", "Claude.ai", "Claude Desktop", "MCP"],
  costEstimate: "Claude plan + scheduled token usage",
  readingMinutes: 900,
  updatedAt: "2026-06-29",
  searchKeywords: [
    "Cowork",
    "Anthropic Cowork",
    "Claude automation",
    "desktop automation",
    "file automation",
    "scheduled workflows",
    "Claude Skills",
    "workflow builder",
    "operations automation",
    "COO",
    "chief of staff",
    "Claude vs Cowork",
    "Cowork vs Claude Code",
    "Claude.ai",
    "run history",
    "permissions",
    "human in the loop",
    "SOP automation",
    "knowledge worker automation",
    "TAR framework",
    "Task Action Result",
    "Skill library",
    "Skill testing",
    "document processing Skill",
    "prompt to Skill",
    "Cowork scheduling",
    "time-based trigger",
    "event trigger",
    "Skill pipeline",
    "autopilot workflow",
    "morning briefing automation",
    "workflow monitoring",
    "MCP Cowork",
    "MCP connectors",
    "Gmail automation",
    "Slack automation",
    "Google Drive automation",
    "connected workflow",
    "connector audit",
    "Cowork governance",
    "production automation",
    "Skill regression testing",
    "Cowork ROI",
    "automation audit",
    "human in the loop approval",
    "workflow blueprints",
    "executive briefing automation",
    "board pack workflow",
    "document processing pipeline",
    "KPI reporting automation",
    "content production pipeline",
    "knowledge base automation",
    "Cowork plugins",
    "Dispatch Claude",
    "Claude in Chrome",
    "subagents Cowork",
    "Cowork Projects",
    "native vs pattern",
    "Compliance API Cowork",
  ],
  guide: {
    series: {
      id: SERIES_ID,
      title: "Cowork Beyond Chat: The Operator's Guide to Scheduled AI Automation",
      subtitle:
        "Your COO on a hard drive — mental model → Skills → autopilot schedules → connected workflows → production ops. Seven chapters. One operator stack.",
    },
    chapters: [
      CHAPTER_01_UNDERSTANDING_COWORK,
      CHAPTER_02_SKILLS_TAR_FRAMEWORK,
      CHAPTER_03_SCHEDULING_AUTOPILOT,
      CHAPTER_04_MCP_CONNECTED_AUTOMATION,
      CHAPTER_05_PRODUCTION_OPERATIONS,
      CHAPTER_06_WORKFLOW_BLUEPRINTS,
      CHAPTER_07_PRODUCT_SURFACE,
    ],
  },
  businessContext: [
    "Sunday nights shouldn't be folder archaeology and board-pack panic. You bought Claude for thinking — but exports, renames, Monday briefs, and invoice triage are still manual heroics. ",
    x(
      "Cowork",
      "Anthropic's desktop automation product — Claude with filesystem access, schedules, Skills, and workflow history.",
    ),
    " is how operators turn recurring file work into infrastructure instead of one-off chats.",
    " This playbook matches the depth of our Claude in Production guide: seven chapters, native product surface (Plugins, Dispatch, Chrome), and artifacts you can paste into your ops wiki today.",
  ],
  decisionCriteria: [
    {
      question: "Do you repeat the same file pipeline weekly — reports, exports, board packs?",
      yesMeans:
        "Start Chapter 1. Cowork is built for recurring ops; Claude.ai alone keeps you in a manual Sunday-night loop.",
    },
    {
      question: "Are you a chief of staff, founder-operator, or ops lead — not a full-time engineer?",
      yesMeans:
        "This playbook is for you. Ch 2–3 get you to scheduled Skills without writing code.",
    },
    {
      question: "Are you primarily shipping code in git?",
      yesMeans:
        "Use Claude Code for engineering; use Cowork for business ops around exports, documents, and briefings.",
    },
    {
      question: "Do you need unattended runs with audit logs?",
      yesMeans:
        "Ch 5 production gates + Ch 7 native surface — run history, AUDIT_BUNDLE, and Compliance API caveats.",
    },
  ],
  architecture: {
    title: "Complete playbook arc",
    caption: "Seven chapters — foundations through blueprints plus native product surface and power habits.",
    steps: [
      { label: "Ch 1", desc: "Understanding Cowork", tool: "Foundation" },
      { label: "Ch 2", desc: "Skills & TAR", tool: "Contracts" },
      { label: "Ch 3", desc: "Scheduling", tool: "Autopilot" },
      { label: "Ch 4", desc: "MCP connected", tool: "Ecosystem" },
      { label: "Ch 5", desc: "Production ops", tool: "Trust" },
      { label: "Ch 6", desc: "Blueprints", tool: "Reference" },
      { label: "Ch 7", desc: "Product surface", tool: "Native" },
    ],
  },
  phases: [],
  artifacts: [],
  caseStudy: {
    title: "From Sunday-night heroics to Monday briefs on autopilot",
    scenario:
      "A founder-operator spent every Sunday on board packs and invoice folders while engineers used Claude Code — same company, two Claude surfaces, zero shared ops discipline.",
    before:
      "Ad hoc Claude.ai chats for file tasks, no schedules, no shared Skills, finance surprised by token spikes, no one knew Plugins from patterns.",
    after:
      "Full playbook rollout: sandbox → TAR Skills → scheduled pipelines → MCP connectors → production gates — Monday brief waiting in inbox, Sunday reclaimed.",
    metrics: [
      "24 workflow blueprints across exec, finance, content, and knowledge ops",
      "Production readiness gate before every unattended schedule",
      "Native vs pattern map — know when to use Plugins, Dispatch, and Chrome",
      "Monthly AUDIT_BUNDLE until Compliance API covers Cowork runs",
    ],
  },
  failurePoints: [
    {
      problem: "Treating Cowork as 'Claude in a desktop app' — no SOP, no schedule discipline.",
      fix: "Chapter 1 COO mental model + SOP starter artifact before builder.",
    },
    {
      problem: "Over-broad filesystem permissions on day one.",
      fix: "§1.8 sandbox setup; §2.7 quarterly permission audits.",
    },
    {
      problem: "Alert fatigue or alert silence — both hide failures.",
      fix: "§2.6: fail loud; success quiet except digests.",
    },
    {
      problem: "Premium models on every automated step.",
      fix: "§2.8 model routing; Opus by exception with approval.",
    },
  ],
};
