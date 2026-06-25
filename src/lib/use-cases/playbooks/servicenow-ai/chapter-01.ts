import { x } from "../../explain";
import type { GuideChapter } from "../../guide-types";
import { CONCEPT_01_WHAT_SERVICENOW_AI_IS } from "./chapters/ch01/concept-01-what-servicenow-ai-is";
import { CONCEPT_02_ECOSYSTEM_MAP } from "./chapters/ch01/concept-02-ecosystem-map";
import { CONCEPT_03_AI_VS_AUTOMATION } from "./chapters/ch01/concept-03-ai-vs-automation";
import { CONCEPT_04_GENAI_SHIFT } from "./chapters/ch01/concept-04-genai-shift";

export const CHAPTER_01_MENTAL_MODEL: GuideChapter = {
  slug: "ch01-mental-model",
  number: 1,
  title: "The ServiceNow AI Mental Model",
  subtitle:
    "The foundational understanding that separates people who configure AI from people who architect it",
  readingMinutes: 95,
  intro: [
    "Most ServiceNow teams treat AI like a plugin: enable Now Assist, demo Virtual Agent, wait for deflection numbers that never arrive. Architects treat ServiceNow as an ",
    x(
      "AI platform",
      "Data, workflows, search, ML, GenAI, and agents unified on the Now Platform — not a chatbot bolted onto ITSM.",
    ),
    " — they know which capability owns which problem, how trust and ACLs flow, and why layered design beats feature sprawl.",
    " This chapter is the operating system for everything that follows: Now Assist deep dives, Predictive Intelligence, AI Agents, PDI labs, governance, and production architecture.",
  ],
  keyInsight:
    "ServiceNow AI is a fabric — rules enforce policy, Predictive Intelligence routes, AI Search retrieves, Now Assist articulates, Flow orchestrates, and agents act within guardrails. Master that stack and every interview, POC, and roadmap conversation becomes intentional.",
  concepts: [
    CONCEPT_01_WHAT_SERVICENOW_AI_IS,
    CONCEPT_02_ECOSYSTEM_MAP,
    CONCEPT_03_AI_VS_AUTOMATION,
    CONCEPT_04_GENAI_SHIFT,
  ],
  diagrams: [
    {
      id: "ai-fabric",
      title: "ServiceNow AI fabric",
      caption:
        "Three planes — data, process, intelligence — on one system of record. AI that skips the data plane hallucinates; AI that skips the process plane cannot audit.",
      steps: [
        { label: "Data plane", desc: "Tables, CMDB, KB, attachments", tool: "ACL-scoped" },
        { label: "Process plane", desc: "Flow, rules, approvals, SLA", tool: "Deterministic" },
        { label: "Intelligence plane", desc: "PI, Search, GenAI, Agents", tool: "Probabilistic" },
        { label: "Outcome", desc: "Resolved work on record", tool: "Measured" },
      ],
    },
    {
      id: "ecosystem-map",
      title: "Now Platform AI ecosystem",
      caption:
        "Pick capability by problem pattern — not by press release. Most production stacks use three or four layers, not one.",
      steps: [
        { label: "AI Search", desc: "Find meaning", tool: "Retrieve" },
        { label: "Predictive Intelligence", desc: "Classify & route", tool: "ML" },
        { label: "Now Assist", desc: "Draft & summarise", tool: "GenAI" },
        { label: "Virtual Agent", desc: "Converse & deflect", tool: "Channel" },
        { label: "AI Agents", desc: "Plan & execute", tool: "Agentic" },
        { label: "Flow Designer", desc: "Orchestrate all", tool: "Automation" },
      ],
    },
  ],
  mindmap: {
    center: "Pick your AI layer",
    caption:
      "Start from the business problem and data readiness — not from the newest ServiceNow AI launch name.",
    branches: [
      {
        id: "route",
        label: "Route & classify",
        description: "Predictive Intelligence + Flow",
        children: [
          { label: "Assignment group", description: "PI with confidence thresholds" },
          { label: "Category / priority", description: "Labelled history required" },
        ],
      },
      {
        id: "language",
        label: "Language & judgment",
        description: "Now Assist + grounded GenAI",
        children: [
          { label: "Agent work notes", description: "Scoped KB + record context" },
          { label: "Employee how-to", description: "VA + AI Search" },
        ],
      },
      {
        id: "act",
        label: "Multi-step action",
        description: "AI Agents + Flow tools",
        children: [
          { label: "Read-only POC", description: "Search, summarise, propose" },
          { label: "Governed writes", description: "Approval on high-risk tools" },
        ],
      },
    ],
  },
  businessContext: [
    "ServiceNow AI is new in the market — from freshers to senior architects, most practitioners are learning in public. The gap is not access to features; it is ",
    x(
      "mental model",
      "Knowing what ServiceNow AI is, how capabilities combine, and how to ship governed value on PDI and production.",
    ),
    ". This chapter is the benchmark foundation: interview-ready frameworks, POC-shaped thinking, and architecture literacy before you configure a single skill.",
  ],
  decisionCriteria: [
    {
      question:
        "Are you preparing for ServiceNow AI interviews or architecture reviews?",
      yesMeans:
        "Yes — complete all four concepts; sections 1.3, 2.8, 3.5, and 4.6 are the highest-yield interview material.",
    },
    {
      question: "Will you run a PDI POC in the next 30 days?",
      yesMeans:
        "Yes — read 1.2, 1.5, 2.8, and 3.6 first; define one workflow, trust checklist, and capability picker before enabling admin modules.",
    },
    {
      question:
        "Does your organisation compare ServiceNow AI to ChatGPT or standalone bots?",
      yesMeans:
        "Yes — section 1.6 gives you the platform integration narrative for steering committees.",
    },
    {
      question: "Are you responsible for deflection or agent productivity KPIs?",
      yesMeans:
        "Yes — sections 4.4 and 4.5 set realistic metrics; avoid demo containment numbers that fail in production.",
    },
  ],
  architecture: {
    title: "Layered incident resolution (reference pattern)",
    caption:
      "The before/after architecture story that appears in case studies, POC charters, and senior interviews.",
    steps: [
      { label: "Intake", desc: "Portal / VA / email", tool: "Channel" },
      { label: "Retrieve", desc: "AI Search + record", tool: "Context" },
      { label: "Classify", desc: "PI routing scores", tool: "ML" },
      { label: "Articulate", desc: "Now Assist drafts", tool: "GenAI" },
      { label: "Enforce", desc: "Flow + rules + approval", tool: "Policy" },
      { label: "Measure", desc: "MTTR, containment, CSAT", tool: "Telemetry" },
    ],
  },
  artifacts: [
    {
      id: "capability-picker",
      title: "ServiceNow AI capability picker",
      description: "Workshop artifact — map problems to capabilities before build.",
      content: `| Problem | Primary | Secondary |
|---------|---------|-----------|
| Wrong assignment group | Predictive Intelligence | Flow rules |
| Can't find KB article | AI Search | Knowledge cleanup |
| Slow work notes | Now Assist | Templates |
| L1 repetitive questions | Virtual Agent | AI Search |
| PDF invoice intake | Document Intelligence | Flow |
| Multi-step resolution | AI Agents | Flow approvals |

Next step: pick ONE row for your PDI POC.`,
    },
    {
      id: "poc-charter",
      title: "Production-shaped POC charter",
      description: "One-page scope template — attach to PDI request.",
      content: `## ServiceNow AI POC — [NAME]

**Workflow:** (one process only)
**Primary capability:** (from picker)
**Baseline metric:** (30-day historical)
**Target:** (realistic range)
**Trust gates:** (ACL review, approval on writes)
**Duration:** 6 weeks
**Exit:** promote / iterate / stop — criteria defined upfront`,
    },
  ],
  caseStudy: {
    title: "Global IT organisation — 90 days from feature chaos to platform AI",
    scenario:
      "A 12,000-person enterprise enabled Now Assist, Virtual Agent, and a standalone chat pilot simultaneously. Knowledge was stale, PI models aged, and security blocked agent tools. Deflection stalled at 9%; agents ignored assist panels.",
    before:
      "No shared mental model. Teams argued 'GenAI vs PI' in meetings. POC demos used admin accounts with unrealistic ACLs. Legal had no DPIA for employee-facing AI.",
    after:
      "Chapter 1 workshop for architects and leads. Published AI fabric diagram, capability picker, and trust checklist. Sequenced rollout: knowledge + AI Search (weeks 1–4), PI routing refresh (5–8), Now Assist on work notes (9–12). VA GenAI phase two with DPIA complete.",
    metrics: [
      "L1 containment 9% → 34% (category-scoped measurement)",
      "Agent handle time −19% on assisted teams",
      "Security review cycle 8 weeks → 2 weeks (standard trust pack)",
      "Architecture rework requests −60% (capability picker upfront)",
    ],
  },
  failurePoints: [
    {
      problem: "Treating Now Assist as 'the AI project' without search, data, or routing",
      fix: "Use section 2.8 capability picker — layer PI and AI Search before GenAI scale.",
    },
    {
      problem: "POC demos that bypass ACLs and approval — fail in production review",
      fix: "Section 1.5 trust checklist on PDI with production-shaped roles from day one.",
    },
    {
      problem: "Promising 70% deflection from executive keynote numbers",
      fix: "Sections 4.4–4.5 — category-specific baselines and false-deflection tracking.",
    },
    {
      problem: "Jumping to AI Agents before rules and PI instrumentation exist",
      fix: "Section 3.8 maturity model — earn stage 4 with logging, labels, and approvals.",
    },
  ],
};
