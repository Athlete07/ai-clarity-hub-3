import { x } from "../../explain";
import type { UseCasePlaybook } from "../../types";
import { CHAPTER_01_MENTAL_MODEL } from "./chapter-01";
import { CHAPTER_02_NOW_ASSIST } from "./chapter-02";
import { CHAPTER_03_AI_SEARCH } from "./chapter-03";
import { CHAPTER_04_PREDICTIVE_INTELLIGENCE } from "./chapter-04";
import { CHAPTER_05_AI_AGENTS } from "./chapter-05";
import { CHAPTER_06_VIRTUAL_AGENT } from "./chapter-06";
import { CHAPTER_07_PROCESS_AUTOMATION } from "./chapter-07";
import { CHAPTER_08_LLM_INTEGRATION } from "./chapter-08";
import { CHAPTER_09_ENTERPRISE_ARCHITECTURE } from "./chapter-09";
import { CHAPTER_10_FUTURE_CAREER } from "./chapter-10";

const SERIES_ID = "servicenow-ai";

/** Full playbook roadmap — chapters 2–12 ship in sequence after Ch 1. */
export const SERVICENOW_AI_ROADMAP = [
  { num: 1, slug: "ch01-mental-model", title: "The ServiceNow AI Mental Model" },
  { num: 2, slug: "ch02-now-assist", title: "Now Assist (GenAI Core)" },
  { num: 3, slug: "ch03-ai-search", title: "AI Search and Knowledge Intelligence" },
  { num: 4, slug: "ch04-predictive-intelligence", title: "Predictive Intelligence & ML on Platform" },
  { num: 5, slug: "ch05-ai-agents", title: "AI Agents and Agentic AI" },
  { num: 6, slug: "ch06-virtual-agent", title: "Virtual Agent & Conversational AI" },
  {
    num: 7,
    slug: "ch07-process-automation",
    title: "Process Automation and AI-augmented Workflows",
  },
  {
    num: 8,
    slug: "ch08-llm-integration",
    title: "LLM Integration, Custom AI, and the AI Layer",
  },
  {
    num: 9,
    slug: "ch09-architecture-security-deployment",
    title: "Architecture, Security, and Enterprise Deployment",
  },
  {
    num: 10,
    slug: "ch10-future-career-mastery",
    title: "Future of ServiceNow AI and Career Mastery",
  },
  { num: 11, slug: "ch11-industry-architecture", title: "ITSM, CSM & HR Use Cases + Architecture" },
  { num: 12, slug: "ch12-interview-career", title: "Interview Prep, Career & Enterprise Rollout" },
] as const;

export const SERVICENOW_AI: UseCasePlaybook = {
  slug: "servicenow-ai",
  title: "ServiceNow AI Decoded: Now Assist, Agents, and Architecture That Holds Up",
  summary:
    "Stop demoing Now Assist without a platform mental model. Ten chapters take you from ecosystem map to Now Assist, AI Agents, PDI labs, and the enterprise architecture story that survives security review and hiring loops.",
  heroBullets: [
    "10 chapters live · read in order or jump to the bottleneck blocking your rollout",
    "Mental model → Now Assist → search → PI → agents → VA → automation → custom AI → deployment → career",
    "~18 hours of depth — PDI blueprints, interview prep, and artifacts you can paste into proposals today",
  ],
  kind: "tool-guide",
  categoryId: "customer-ops",
  tags: [
    "ServiceNow",
    "Now Assist",
    "AI Agents",
    "Predictive Intelligence",
    "AI Search",
    "Virtual Agent",
    "ITSM",
    "PDI",
    "12 Chapters",
  ],
  roles: ["pm", "business-leader", "founder"],
  timeToImplement: "12 chapters · ~18 hr read",
  tools: [
    "ServiceNow Now Platform",
    "Now Assist",
    "Predictive Intelligence",
    "AI Search",
    "Virtual Agent",
    "AI Agents",
    "Flow Designer",
    "IntegrationHub",
    "PDI",
  ],
  costEstimate: "PDI (free) → Enterprise AI SKUs",
  readingMinutes: 1080,
  updatedAt: "2026-06-25",
  featured: true,
  catalogBadge: "New · Ch 1–10 live",
  searchKeywords: [
    "ServiceNow AI",
    "Now Assist",
    "Now Platform",
    "Predictive Intelligence",
    "AI Search",
    "Virtual Agent",
    "AI Agents",
    "agentic AI",
    "Document Intelligence",
    "Flow Designer",
    "IntegrationHub",
    "ITSM AI",
    "CSM AI",
    "HR Service Delivery",
    "PDI",
    "Personal Developer Instance",
    "ServiceNow interview",
    "ServiceNow architect",
    "ServiceNow admin",
    "GenAI",
    "generative AI",
    "machine learning",
    "Now Intelligence",
    "AI governance",
    "EU AI Act",
    "GDPR ServiceNow",
    "deflection",
    "containment",
    "agent productivity",
    "CMDB",
    "knowledge management",
    "AI fabric",
    "trust model",
    "ACL",
    "hallucination",
    "human in the loop",
    "Now Assist skills",
    "GlideRecord",
    "Flow Designer",
    "ATF",
    "skill framework",
    "grounding",
    "prompt pipeline",
    "incident summary",
    "resolution notes",
    "CSM case assist",
    "HRSD",
    "developer assist",
    "skill versioning",
    "Now Assist governance",
    "Now Assist licensing",
  ],
  guide: {
    series: {
      id: SERIES_ID,
      title: "ServiceNow AI Decoded: Now Assist, Agents, and Architecture That Holds Up",
      subtitle:
        "Mental model → ecosystem map → Now Assist → PI → search → agents → PDI POCs → governance → production architecture.",
    },
    chapters: [
      CHAPTER_01_MENTAL_MODEL,
      CHAPTER_02_NOW_ASSIST,
      CHAPTER_03_AI_SEARCH,
      CHAPTER_04_PREDICTIVE_INTELLIGENCE,
      CHAPTER_05_AI_AGENTS,
      CHAPTER_06_VIRTUAL_AGENT,
      CHAPTER_07_PROCESS_AUTOMATION,
      CHAPTER_08_LLM_INTEGRATION,
      CHAPTER_09_ENTERPRISE_ARCHITECTURE,
      CHAPTER_10_FUTURE_CAREER,
    ],
  },
  businessContext: [
    "ServiceNow AI is new in the market — most teams from freshers to senior architects are building literacy while the product ships. Without a shared mental model, organisations enable features, run flashy demos, and stall in security review. This playbook is the ",
    x(
      "benchmark path",
      "End-to-end concepts, real use cases, architecture patterns, PDI labs, and interview frameworks — one arc, not scattered release notes.",
    ),
    ". Start with Chapter 1 if ServiceNow AI is new. Chapter 2 is the Now Assist deep dive. Chapter 3 is AI Search and knowledge intelligence — the retrieval layer beneath self-service and GenAI grounding. Chapter 4 is Predictive Intelligence — the measurable ML engine for routing, similarity, AIOps, and forecasting. Chapter 5 is AI Agents — the agentic layer that observes, reasons, and acts via governed tools. Chapter 6 is Virtual Agent — the conversational self-service layer across portal, mobile, Teams, and Slack. Chapter 7 is Process Automation — Flow Designer + IntegrationHub + AI steps, confidence gates, and reusable end-to-end blueprints. Chapter 8 is LLM integration and custom AI — provider routing, RAG patterns, and responsible AI templates. Chapter 9 is enterprise architecture and deployment — reference architecture, security, scaling, upgrades, and ROI. Chapter 10 is roadmap + career mastery — PDI POC blueprints, interview preparation, stakeholder proposals, and learning paths. Chapters 11–12 extend with additional rollout and career tracks.",
  ],
  decisionCriteria: [
    {
      question: "Are you interviewing for ServiceNow AI, architect, or lead roles?",
      yesMeans:
        "Start Ch 1 — sections 1.3, 2.8, 3.5, and 4.6 are the highest-yield interview material in the industry.",
    },
    {
      question: "Do you need to run a credible POC on PDI?",
      yesMeans:
        "Ch 1 gives trust checklist, capability picker, and production-shaped POC charter — use before enabling admin modules.",
    },
    {
      question: "Is your org comparing ServiceNow AI to ChatGPT or point solutions?",
      yesMeans:
        "Ch 1.6 and 2.8 provide the platform integration narrative for steering committees and architecture boards.",
    },
    {
      question: "Are you planning agentic AI or Now Assist at enterprise scale?",
      yesMeans:
        "Read the full arc — Ch 1 maturity model (3.8) and governance preview (4.6–4.7) prevent the failures that kill agent rollouts.",
    },
  ],
  architecture: {
    title: "Playbook arc (12 chapters)",
    caption:
      "Chapters 1–7 are live. Chapters 8–12 release in sequence — each builds on the mental model, Now Assist, AI Search, Predictive Intelligence, AI Agents, Virtual Agent, and process automation foundations.",
    steps: SERVICENOW_AI_ROADMAP.map((ch) => ({
      label: `Ch ${ch.num}`,
      desc: ch.title,
      tool: ch.num <= 10 ? "Live" : "Coming",
    })),
  },
  phases: [],
  artifacts: [],
  caseStudy: {
    title: "What changes when the ServiceNow AI stack clicks",
    scenario:
      "An enterprise had Now Assist entitlements, legacy Virtual Agent topics, and aging PI models — but no ecosystem map. Security blocked agents; agents ignored assist; deflection metrics disappointed leadership.",
    before:
      "Feature-first rollout, stale knowledge, demo ACLs, no trust pack for legal, GenAI promised as magic deflection.",
    after:
      "Shared mental model from Ch 1, capability picker on every initiative, layered architecture (rules → PI → GenAI → agents), production-shaped PDI POCs, and governance before autonomous writes.",
    metrics: [
      "Pass ServiceNow AI architecture and interview loops with ecosystem fluency",
      "Ship PDI POCs that survive security review",
      "Propose roadmaps using maturity model — not feature checklists",
      "Lead Now Assist and agent programs with measurable KPIs",
    ],
  },
  failurePoints: [
    {
      problem: "Enabling Now Assist without AI Search and knowledge hygiene",
      fix: "Ch 1 + future Ch 4 — retrieval is the foundation; GenAI is only as good as what it can find.",
    },
    {
      problem: "Agentic AI POCs with write access and no approval model",
      fix: "Ch 1 trust checklist and maturity model — read-only agents first; governed writes second.",
    },
    {
      problem: "Deflection business cases built on keynote percentages",
      fix: "Ch 1 sections 4.4–4.5 — category baselines, false-deflection tracking, agent productivity metrics.",
    },
    {
      problem: "Treating ServiceNow AI as a chatbot bolt-on",
      fix: "Ch 1 entire chapter — platform fabric, layered architecture, Flow orchestration.",
    },
  ],
  nextPlaybook: {
    slug: "claude-full-stack",
    title: "Claude in Production: MCP, Code, and the Practitioner's Roadmap",
    description:
      "Complementary AI literacy for teams using Claude alongside ServiceNow — mental models, MCP, and production workflows.",
  },
};
