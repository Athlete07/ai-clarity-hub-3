import { x } from "../../explain";
import type { GuideChapter } from "../../guide-types";
import { CONCEPT_01_VA_ARCHITECTURE } from "./chapters/ch06/concept-01-virtual-agent-architecture";
import { CONCEPT_02_TOPIC_NLU } from "./chapters/ch06/concept-02-topic-design-nlu-training";
import { CONCEPT_03_VA_NOW_ASSIST } from "./chapters/ch06/concept-03-va-now-assist-integration";
import { CONCEPT_04_OMNICHANNEL } from "./chapters/ch06/concept-04-omnichannel-deployment";
import { CONCEPT_05_LIVE_HANDOFF } from "./chapters/ch06/concept-05-live-agent-handoff";
import { CONCEPT_06_METRICS } from "./chapters/ch06/concept-06-performance-containment-metrics";

export const CHAPTER_06_VIRTUAL_AGENT: GuideChapter = {
  slug: "ch06-virtual-agent",
  number: 6,
  title: "Virtual Agent and Conversational AI",
  subtitle:
    "Building intelligent, capable, and measurably effective conversational experiences across channels",
  readingMinutes: 150,
  intro: [
    "Virtual Agent is where ServiceNow AI touches end users. It is the frontline for self-service: intent classification, entity capture, workflow execution, knowledge retrieval, and seamless escalation to humans when needed.",
    "This chapter teaches the architecture of Virtual Agent, how to design topics and train NLU like an ML product, how to integrate Now Assist and AI Search safely, how to deploy across channels (portal, mobile, Teams, Slack), and how to measure containment with CFO-grade attribution.",
    "By the end you can build a PDI VA experience that creates real outcomes (catalog/incident), deploy it across channels with consistent analytics, and run a continuous improvement cadence that steadily increases containment without sacrificing quality.",
  ],
  keyInsight:
    "A world-class Virtual Agent is not a script — it is a measurable, multi-channel product: NLU + topic design + AI Search retrieval + (optional) GenAI synthesis + action flows + handoff UX + analytics flywheel.",
  concepts: [
    CONCEPT_01_VA_ARCHITECTURE,
    CONCEPT_02_TOPIC_NLU,
    CONCEPT_03_VA_NOW_ASSIST,
    CONCEPT_04_OMNICHANNEL,
    CONCEPT_05_LIVE_HANDOFF,
    CONCEPT_06_METRICS,
  ],
  diagrams: [
    {
      id: "va-runtime",
      title: "Virtual Agent runtime",
      caption:
        "From utterance to outcome: NLU selects intent, topic captures entities, actions execute, and analytics feed continuous improvement.",
      steps: [
        { label: "User utterance", desc: "Portal / Teams / Slack / mobile", tool: "Channel" },
        { label: "NLU", desc: "Intent + entities + confidence", tool: "Model" },
        { label: "Topic flow", desc: "State machine + validation", tool: "Dialog" },
        { label: "Retrieve", desc: "AI Search + KB", tool: "Knowledge" },
        { label: "Act", desc: "Flow / catalog / incident", tool: "Outcome" },
        { label: "Handoff", desc: "Context transfer to Workspace", tool: "Human" },
      ],
    },
    {
      id: "containment-loop",
      title: "Containment improvement loop",
      caption:
        "Containment rises through weekly iteration: utterances → training → topics → knowledge → analytics — not through one big launch.",
      steps: [
        { label: "Measure", desc: "Containment + escalations", tool: "Analytics" },
        { label: "Diagnose", desc: "NLU vs knowledge vs tools", tool: "Root cause" },
        { label: "Fix", desc: "Utterances, taxonomy, KB, flows", tool: "Backlog" },
        { label: "Test", desc: "Regression + A/B", tool: "Quality" },
        { label: "Deploy", desc: "Pilot then scale", tool: "Ops" },
      ],
    },
  ],
  mindmap: {
    center: "Build VA that works",
    caption:
      "VA success is a product system: design, retrieval, execution, and measurement — across channels.",
    branches: [
      {
        id: "nlu",
        label: "NLU quality",
        description: "Taxonomy + utterances",
        children: [
          { label: "Clarification", description: "Confidence-driven UX" },
          { label: "Test sets", description: "Regression discipline" },
        ],
      },
      {
        id: "outcomes",
        label: "Real outcomes",
        description: "Flows + records",
        children: [
          { label: "Catalog/incident", description: "On-record success" },
          { label: "Handoff", description: "Context preserved" },
        ],
      },
      {
        id: "metrics",
        label: "Metrics + flywheel",
        description: "Containment + value",
        children: [
          { label: "Escalation reasons", description: "Backlog engine" },
          { label: "CIO dashboard", description: "Funding & trust" },
        ],
      },
    ],
  },
  businessContext: [
    "Virtual Agent is the highest-leverage self-service surface in ServiceNow. It can deflect tickets, create correct records when deflection fails, and reduce live-agent workload through context-rich handoffs.",
    "But VA is also easy to do poorly: weak taxonomy, synthetic training data, poor fallback, and vanity containment metrics. This chapter gives you the production discipline: NLU training cycles, channel-aware design, and CFO-grade measurement with quality safeguards.",
  ],
  decisionCriteria: [
    {
      question: "Do you need higher containment without harming quality?",
      yesMeans:
        "Start with Concepts 2 and 6: taxonomy, utterance mining, and correct containment measurement drive sustainable gains.",
    },
    {
      question: "Are you integrating GenAI into VA?",
      yesMeans:
        "Concept 3 is mandatory: grounding, orchestration rules, and GenAI test methodology prevent hallucination in self-service.",
    },
    {
      question: "Do you run multiple channels (portal + Teams/Slack + mobile)?",
      yesMeans:
        "Concept 4: omnichannel deployment and consistent analytics keep the experience coherent and governable.",
    },
    {
      question: "Are handoffs hurting CSAT?",
      yesMeans:
        "Concept 5: handoff triggers, context transfer, and Workspace UX reduce repeat questions and improve first reply time.",
    },
  ],
  architecture: {
    title: "VA production architecture (reference)",
    caption:
      "Design once, deliver across channels, execute via Flow, and measure with conservative containment definitions.",
    steps: [
      { label: "NLU", desc: "Intent + entities + confidence", tool: "Model" },
      { label: "Topics", desc: "Stateful flows + validation", tool: "Design" },
      { label: "Knowledge", desc: "AI Search profiles + KB hygiene", tool: "Retrieve" },
      { label: "Actions", desc: "Catalog + Flow outcomes", tool: "Execute" },
      { label: "Handoff", desc: "Summary + transcript + routing", tool: "Human" },
      { label: "Metrics", desc: "Containment + quality + value", tool: "Ops" },
    ],
  },
  artifacts: [
    {
      id: "va-containment-definition",
      title: "Containment definition (copy/paste)",
      description: "Use one stable definition so reporting stays honest.",
      content:
        `Containment (conservative):\n- A VA session is contained if no ticket is created within 72 hours for the same intent category AND the user did not request human help.\n\nReport also:\n- False containment: ticket created after wrong guidance\n- Escalations by reason code\n- Containment by channel and intent`,
    },
    {
      id: "va-operating-rhythm",
      title: "VA operating rhythm",
      description: "Weekly cadence that grows containment sustainably.",
      content:
        `Weekly (30 min)\n- Top 20 escalations by reason\n- Top 50 unrecognized utterances\n- Ship 5 fixes (topic, KB, synonym, tool)\n\nMonthly (60 min)\n- Channel performance review\n- A/B test results\n- Quality review (repeat contacts)\n\nQuarterly\n- Taxonomy refresh\n- Privacy/retention review\n- GenAI persona/guardrails review`,
    },
  ],
  caseStudy: {
    title: "Omnichannel VA rollout — portal + Teams",
    scenario:
      "An enterprise launched VA on portal and Teams. Early metrics looked good (session success), but ticket volume did not drop and users complained about repetition at handoff.",
    before:
      "Synthetic utterances, weak taxonomy, keyword search fallback, and vanity containment measurement. Handoff summaries were missing and agents repeated questions.",
    after:
      "Utterance mining from real queries, test-set discipline for NLU, AI Search profile tuning, Now Assist used only for grounded answers, structured handoff summaries in Workspace, and conservative containment measurement (72h no-ticket).",
    metrics: [
      "Containment increased steadily on top intents after weekly iteration cadence",
      "Repeat-question rate after handoff decreased due to summaries and entity capture",
      "Channel analytics clarified which intents belong in Teams vs portal",
      "Stakeholder trust improved because reporting definitions were stable and conservative",
    ],
  },
  failurePoints: [
    {
      problem: "Measuring containment as 'chat ended'",
      fix: "Use a conservative record-based definition and report false containment explicitly.",
    },
    {
      problem: "Training NLU on synthetic utterances",
      fix: "Mine real user language weekly and maintain a test set to prevent regressions.",
    },
    {
      problem: "GenAI answering without sources",
      fix: "Require AI Search/KB grounding and escalate when no citation exists.",
    },
    {
      problem: "Handoff without context",
      fix: "Transfer entities + summary + transcript into Agent Workspace and make it prominent in the layout.",
    },
  ],
};

