import { x } from "../../explain";
import type { GuideChapter } from "../../guide-types";
import { CONCEPT_01_AI_SEARCH_ARCHITECTURE } from "./chapters/ch03/concept-01-ai-search-architecture";
import { CONCEPT_02_KNOWLEDGE_MANAGEMENT_GENAI } from "./chapters/ch03/concept-02-knowledge-management-genai";
import { CONCEPT_03_SEARCH_RESULT_CONFIGURATION } from "./chapters/ch03/concept-03-search-result-configuration";
import { CONCEPT_04_SELF_SERVICE_DEFLECTION } from "./chapters/ch03/concept-04-self-service-deflection-workflows";

export const CHAPTER_03_AI_SEARCH: GuideChapter = {
  slug: "ch03-ai-search",
  number: 3,
  title: "AI Search and Knowledge Intelligence",
  subtitle:
    "How ServiceNow finds, surfaces, and synthesises information — the intelligence layer beneath every self-service experience",
  readingMinutes: 135,
  intro: [
    "If Now Assist is the voice, AI Search is the engine. This chapter explains how ServiceNow retrieves the right information with profiles, semantic similarity, and ranking — then turns search analytics into a knowledge flywheel that improves over time.",
    "You will learn the architecture of AI Search, how knowledge creation and lifecycle becomes AI-assisted, how to configure result experiences for different personas, and how to design deflection workflows CFOs actually fund.",
    "By the end you can run a credible PDI search POC with a golden query set, ship a portal funnel that preserves trust, and explain why most GenAI failures are retrieval failures in disguise.",
  ],
  keyInsight:
    "Self-service succeeds when retrieval is right. AI Search + knowledge hygiene + action-first portal UX + honest measurement create deflection; GenAI without retrieval just generates confident noise faster.",
  concepts: [
    CONCEPT_01_AI_SEARCH_ARCHITECTURE,
    CONCEPT_02_KNOWLEDGE_MANAGEMENT_GENAI,
    CONCEPT_03_SEARCH_RESULT_CONFIGURATION,
    CONCEPT_04_SELF_SERVICE_DEFLECTION,
  ],
  diagrams: [
    {
      id: "search-stack",
      title: "AI Search stack",
      caption:
        "Search is a system: source scope → retrieval → ranking → UI blocks → analytics → knowledge flywheel.",
      steps: [
        { label: "Sources", desc: "KB, catalog, records, federation", tool: "Scope" },
        { label: "Retrieve", desc: "Lexical + semantic candidates", tool: "Embeddings" },
        { label: "Rank", desc: "Boosts, recency, persona", tool: "Profiles" },
        { label: "Render", desc: "Blocks + actions", tool: "Portal" },
        { label: "Measure", desc: "Zero results, clicks, tickets", tool: "Analytics" },
        { label: "Improve", desc: "Flywheel backlog", tool: "Ops" },
      ],
    },
    {
      id: "deflection-funnel",
      title: "Deflection funnel",
      caption:
        "Deflection happens before the ticket exists: retrieve answer, guide action, escalate gracefully when needed.",
      steps: [
        { label: "User asks", desc: "Portal / mobile / VA entry", tool: "Intent" },
        { label: "Search", desc: "AI Search retrieves sources", tool: "Retrieve" },
        { label: "Synthesize", desc: "Optional GenAI answer grounded in sources", tool: "Assist" },
        { label: "Act", desc: "Reset / request / status / escalation", tool: "Flow" },
        { label: "Fallback", desc: "Ticket + context handoff", tool: "Trust" },
      ],
    },
  ],
  mindmap: {
    center: "Make search work",
    caption:
      "Search wins by design, not by hope: scope, quality, ranking, UX, and analytics ownership.",
    branches: [
      {
        id: "scope",
        label: "Scope & safety",
        description: "Profiles + ACL boundaries",
        children: [
          { label: "Persona profiles", description: "Employee vs agent vs HR" },
          { label: "Federation rules", description: "Priority + allowlist" },
        ],
      },
      {
        id: "quality",
        label: "Knowledge quality",
        description: "Flywheel + lifecycle",
        children: [
          { label: "Gap detection", description: "Zero-result backlog" },
          { label: "Retire stale", description: "Prevent poisoned retrieval" },
        ],
      },
      {
        id: "deflect",
        label: "Deflect with UX",
        description: "Action-first portal",
        children: [
          { label: "Action blocks", description: "Reset/request/escalate" },
          { label: "Fallback", description: "Context-preserving handoff" },
        ],
      },
    ],
  },
  businessContext: [
    "Every self-service program eventually discovers the same truth: people don’t want to browse a knowledge base — they want to solve the problem. AI Search is what makes that possible at scale by matching human language to enterprise content, measuring failures, and turning those failures into continuous improvements.",
    "This chapter is also the missing layer for GenAI programs: when retrieval is wrong, users call it hallucination. When retrieval is right, Now Assist becomes reliable because it is grounded in the right sources.",
  ],
  decisionCriteria: [
    {
      question: "Are users creating tickets because search “can’t find anything”?",
      yesMeans:
        "Start with Concepts 1 and 3: index scope, profiles, ranking, and query expansion fix most failures before GenAI is involved.",
    },
    {
      question: "Is deflection a CFO-level KPI for you?",
      yesMeans:
        "Read Concept 4 in full. Use conservative attribution (72h no-ticket) and publish assumptions to earn trust and funding.",
    },
    {
      question: "Do you plan to use Now Assist in portal or Virtual Agent answers?",
      yesMeans:
        "Read Concepts 1–2 first. Grounding depends on AI Search and knowledge lifecycle. Fix retrieval before tuning prompts.",
    },
    {
      question: "Do you operate multiple portals (IT, HR, CSM) with different policies?",
      yesMeans:
        "Concept 3 (profiles, blocks, personalisation) is mandatory. One global profile creates leakage or irrelevance.",
    },
  ],
  architecture: {
    title: "Knowledge flywheel (operating model)",
    caption:
      "A sustainable operating rhythm that improves search quality and deflection without heroics.",
    steps: [
      { label: "Instrument", desc: "Queries, clicks, ticket funnel", tool: "Analytics" },
      { label: "Prioritise", desc: "Zero results + abandonment", tool: "Backlog" },
      { label: "Create", desc: "Draft articles with GenAI", tool: "Now Assist" },
      { label: "Validate", desc: "SME review + quality rubric", tool: "Governance" },
      { label: "Tune", desc: "Boosts, synonyms, profiles", tool: "Search admin" },
      { label: "Measure", desc: "Deflection + false deflection", tool: "CFO-ready" },
    ],
  },
  artifacts: [
    {
      id: "search-quality-scorecard",
      title: "Search quality scorecard (starter)",
      description: "Use weekly/monthly to track improvements across portals.",
      content:
        `| Metric | IT portal | HR portal | CSM portal |\n|-------|----------|----------|----------|\n| Zero-result rate | | | |\n| Top-1 click-through | | | |\n| Ticket create after search | | | |\n| Deflection (72h) | | | |\n| False deflection (reopen/complaints) | | | |\n| p95 search latency | | | |`,
    },
    {
      id: "deflection-attribution-definition",
      title: "Deflection attribution definition",
      description: "Paste into finance deck so numbers stay honest.",
      content:
        `Deflection definition (conservative):\n- A user search session is considered deflected if no ticket is created within 72 hours for the same intent category.\n\nReport both:\n- Deflection rate (by category)\n- False deflection: tickets created after reading an incorrect or outdated article\n\nAssumptions:\n- Some tickets are created via phone/email (not attributable to search).\n- Some topics require human handling by policy; exclude from deflection target.`,
    },
  ],
  caseStudy: {
    title: "Enterprise portal redesign — search-first deflection",
    scenario:
      "A 90k-employee organisation had a portal, but employees treated it as a form to create tickets. Search returned irrelevant results, knowledge was stale, and Now Assist responses were ungrounded. Ticket volume rose despite AI licensing.",
    before:
      "Legacy keyword search, no profiles, no analytics ownership, generic KB articles, and a portal UX that hid actions behind multiple clicks.",
    after:
      "AI Search configured with persona profiles, golden query set tests, boosted authoritative KB, query expansion for acronyms, and action-first result blocks. A weekly knowledge flywheel improved coverage. Now Assist was reintroduced only after retrieval quality stabilised.",
    metrics: [
      "Zero-result rate −45% in 8 weeks (IT portal)",
      "Top-1 click-through +31% for top intents",
      "Deflection 0% → 38% for top 5 intents (conservative attribution)",
      "Ticket volume down in deflected categories; CSAT up due to better fallback handoff",
    ],
  },
  failurePoints: [
    {
      problem: "Indexing everything without scoping — noise and leakage risk",
      fix: "Start with one portal profile and a small set of sources; expand only after ACL and ranking validation.",
    },
    {
      problem: "Treating search as set-and-forget — knowledge rot poisons retrieval",
      fix: "Run the knowledge flywheel: analytics → backlog → draft → review → publish → retire stale content.",
    },
    {
      problem: "Measuring deflection with vanity metrics (chat ended)",
      fix: "Tie deflection to record truth (no ticket within 72h) and report false deflection explicitly.",
    },
    {
      problem: "Federating to external sources without priority rules",
      fix: "Define per-portal source priority; resolve conflicts explicitly so users learn to trust results.",
    },
  ],
};

