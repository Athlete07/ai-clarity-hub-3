import type { GuideChapter } from "../../guide-types";
import { CONCEPT_01_AI_LAYER_ARCHITECTURE } from "./chapters/ch08/concept-01-ai-layer-architecture";
import { CONCEPT_02_EXTERNAL_LLMS } from "./chapters/ch08/concept-02-connecting-external-llms";
import { CONCEPT_03_PROMPT_ENGINEERING } from "./chapters/ch08/concept-03-prompt-engineering-servicenow";
import { CONCEPT_04_CUSTOM_ML_INTEGRATION } from "./chapters/ch08/concept-04-custom-ml-model-integration";
import { CONCEPT_05_RAG_SERVICENOW } from "./chapters/ch08/concept-05-rag-within-servicenow";
import { CONCEPT_06_RESPONSIBLE_AI } from "./chapters/ch08/concept-06-ai-governance-responsible-ai";

export const CHAPTER_08_LLM_INTEGRATION: GuideChapter = {
  slug: "ch08-llm-integration",
  number: 8,
  title: "LLM Integration, Custom AI, and the AI Layer",
  subtitle:
    "Going beyond what ServiceNow ships — extending the platform with external models and custom intelligence",
  readingMinutes: 170,
  intro: [
    "Chapters 1–7 teach you what ServiceNow ships and how to use it safely. This chapter is the bridge to architect-grade extension: connecting external LLMs, building custom ML integrations, designing retrieval (RAG) inside and outside ServiceNow, and putting governance around everything so it survives security and scale.",
    "The key mindset shift: stop thinking “which model are we using?” and start thinking “which capability contract are we implementing?” When you treat AI as a platform subsystem — with routing, fallbacks, observability, schemas, and tests — you can change providers without rewriting business logic.",
    "By the end, you’ll have a PDI-shaped integration blueprint, a RAG evaluation pack, and governance templates that turn experiments into production architecture.",
  ],
  keyInsight:
    "Production AI is a contract: capability schemas, routing/fallback rules, cost controls, and audit trails — not a one-off API call to a model.",
  concepts: [
    CONCEPT_01_AI_LAYER_ARCHITECTURE,
    CONCEPT_02_EXTERNAL_LLMS,
    CONCEPT_03_PROMPT_ENGINEERING,
    CONCEPT_04_CUSTOM_ML_INTEGRATION,
    CONCEPT_05_RAG_SERVICENOW,
    CONCEPT_06_RESPONSIBLE_AI,
  ],
  diagrams: [
    {
      id: "ai-layer-reference",
      title: "AI Layer reference path",
      caption:
        "A stable capability boundary: workflows call capabilities; the AI Layer handles provider routing, policy, caching, and observability.",
      steps: [
        { label: "Experience", desc: "Workspace/Portal/VA", tool: "UI" },
        { label: "Capability", desc: "Draft / extract / embed", tool: "Contract" },
        { label: "Routing", desc: "Provider/model by policy", tool: "AI Layer" },
        { label: "Retrieval", desc: "KB/CMDB/vector store", tool: "RAG" },
        { label: "Controls", desc: "ACL, redaction, HITL", tool: "Govern" },
        { label: "Observe", desc: "Cost + latency + quality", tool: "Ops" },
      ],
    },
    {
      id: "rag-pipeline",
      title: "RAG pipeline (enterprise pattern)",
      caption:
        "Retrieval quality determines answer quality — evaluate retrieval separately from generation.",
      steps: [
        { label: "Ingest", desc: "Docs/KB/CMDB", tool: "Corpus" },
        { label: "Chunk", desc: "Sections + overlap", tool: "Prep" },
        { label: "Embed", desc: "Vectors + metadata", tool: "Index" },
        { label: "Retrieve", desc: "Top-k + filters", tool: "Search" },
        { label: "Generate", desc: "Answer + citations", tool: "LLM" },
        { label: "Evaluate", desc: "Hit rate + groundedness", tool: "QA" },
      ],
    },
  ],
  mindmap: {
    center: "Extend ServiceNow AI safely",
    caption: "Make custom AI production-grade: contracts, retrieval, and governance.",
    branches: [
      {
        id: "providers",
        label: "Providers",
        description: "Connect + route + fallback",
        children: [
          { label: "Connection records", description: "Auth + allowlists" },
          { label: "Routing rules", description: "Task-based models" },
        ],
      },
      {
        id: "rag",
        label: "RAG",
        description: "Grounding + citations",
        children: [
          { label: "KB hygiene", description: "Quality flywheel" },
          { label: "CMDB context", description: "Live operational state" },
        ],
      },
      {
        id: "governance",
        label: "Governance",
        description: "Responsible AI controls",
        children: [
          { label: "Data minimization", description: "Redaction + retention" },
          { label: "Trust pack", description: "Audit-ready docs" },
        ],
      },
    ],
  },
  businessContext: [
    "Most enterprise teams eventually need AI beyond the shipped product: niche domains, regional residency, custom scoring, or external corpora. The risk is building “shadow AI” — provider calls buried in scripts, with unmanaged keys and no audit trail.",
    "This chapter gives the architect’s extension path: a capability boundary, provider routing and fallbacks, RAG pipelines with measurable retrieval quality, and responsible AI governance that makes custom intelligence safe to scale.",
  ],
  decisionCriteria: [
    {
      question: "Do you need external model providers or private endpoints?",
      yesMeans:
        "Start with Concepts 1–2: capability contracts, provider configuration, routing, and fallback.",
    },
    {
      question: "Is the biggest risk hallucination or incorrect answers?",
      yesMeans:
        "Concept 5: design RAG with evaluation; fix retrieval and KB hygiene before upgrading models.",
    },
    {
      question: "Will AI make decisions or trigger actions that affect people or compliance?",
      yesMeans:
        "Concept 6: implement governance, transparency, and trust packs before expanding autonomy.",
    },
  ],
  architecture: {
    title: "Custom AI extension stack",
    caption:
      "A production pattern: capability wrappers + retrieval + strict controls + evaluation and monitoring.",
    steps: [
      { label: "Wrappers", desc: "Subflows/actions per capability", tool: "Contract" },
      { label: "Retrieval", desc: "KB/CMDB/vector store", tool: "RAG" },
      { label: "Providers", desc: "Model routing + fallbacks", tool: "AI Layer" },
      { label: "Validation", desc: "Schemas + confidence gates", tool: "Safety" },
      { label: "Govern", desc: "ACL, redaction, retention", tool: "Trust" },
      { label: "Observe", desc: "Cost + latency + quality", tool: "Ops" },
    ],
  },
  artifacts: [
    {
      id: "capability-contract-starter",
      title: "Capability contract starter (copy/paste)",
      description: "Use for every custom AI capability wrapper.",
      content:
        `Capability: <name>\nInputs:\n- record_id\n- user_context (role, locale)\n- mode (draft|extract|answer)\n\nOutputs:\n- result (structured)\n- confidence (0..1)\n- citations (ids/urls)\n- provider/model metadata\n- request_id + latency\n\nFailures:\n- TIMEOUT → degraded mode\n- LOW_CONFIDENCE → human review\n- SCHEMA_INVALID → repair then escalate`,
    },
  ],
  caseStudy: {
    title: "From “LLM demo” to enterprise AI subsystem",
    scenario:
      "A team built multiple scripts calling different providers with personal API keys. Quality was inconsistent, security could not approve, and costs spiked unpredictably.",
    before:
      "Provider calls embedded in scripts, no schemas, no fallbacks, no eval suite, and no cost attribution.",
    after:
      "Capability wrappers in Flow/IntegrationHub, centralized provider config, RAG with eval pack, routing/fallback rules, and trust packs enabling legal and security approval.",
    metrics: [
      "Provider changes without rewrites (single abstraction layer)",
      "Lower spend via caching + routing + payload caps",
      "Reduced hallucinations with citations and retrieval evaluation",
      "Audit-ready governance artifacts for production rollout",
    ],
  },
  failurePoints: [
    {
      problem: "Custom AI built as scattered scripts and keys",
      fix: "Centralize provider connections and wrap capabilities behind subflows/actions.",
    },
    {
      problem: "RAG blamed on model quality",
      fix: "Evaluate retrieval separately; fix KB and chunking before changing providers.",
    },
    {
      problem: "No governance for derived data (summaries/embeddings)",
      fix: "Treat derived artifacts as data with retention, access controls, and deletion rules.",
    },
  ],
};

