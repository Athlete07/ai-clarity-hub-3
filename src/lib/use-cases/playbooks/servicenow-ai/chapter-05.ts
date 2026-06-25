import { x } from "../../explain";
import type { GuideChapter } from "../../guide-types";
import { CONCEPT_01_AGENTIC_MEANING } from "./chapters/ch05/concept-01-what-agentic-means";
import { CONCEPT_02_AGENT_STUDIO } from "./chapters/ch05/concept-02-agent-studio";
import { CONCEPT_03_AGENT_TOOLS } from "./chapters/ch05/concept-03-agent-tools";
import { CONCEPT_04_MULTI_AGENT } from "./chapters/ch05/concept-04-multi-agent-orchestration";
import { CONCEPT_05_MEMORY_STATE } from "./chapters/ch05/concept-05-memory-state";
import { CONCEPT_06_HITL } from "./chapters/ch05/concept-06-human-in-the-loop";
import { CONCEPT_07_POC_BLUEPRINT } from "./chapters/ch05/concept-07-agent-poc-blueprint";
import { CONCEPT_08_SAFETY_GUARDRAILS } from "./chapters/ch05/concept-08-safety-guardrails";

export const CHAPTER_05_AI_AGENTS: GuideChapter = {
  slug: "ch05-ai-agents",
  number: 5,
  title: "AI Agents and Agentic AI",
  subtitle:
    "The most transformative capability in ServiceNow — autonomous agents that observe, reason, and act across your enterprise",
  readingMinutes: 190,
  intro: [
    "Now Assist gives you language. AI Search gives you retrieval. Predictive Intelligence gives you measurable predictions. Agentic AI is what turns those capabilities into executed work: agents that observe record state, reason about goals, and call tools to act — safely.",
    "This chapter gives you the end-to-end architecture: what an agent is, how Agent Studio works, how tools should be designed and secured, how multi-agent orchestration scales, how memory and state must be record-backed, and how to build human-in-the-loop controls that auditors accept.",
    "By the end you can build a production-shaped multi-agent POC on PDI (triage + resolution + comms), demonstrate it credibly, and turn it into a proposal with guardrails, monitoring, and an autonomy progression plan.",
  ],
  keyInsight:
    "Agentic AI is not 'chat with actions' — it is a governed tool-calling system. Safety comes from narrow tools, explicit approvals, record-backed state, and observability. If you can’t explain the trust boundary and kill switch, you’re not ready for autonomy.",
  concepts: [
    CONCEPT_01_AGENTIC_MEANING,
    CONCEPT_02_AGENT_STUDIO,
    CONCEPT_03_AGENT_TOOLS,
    CONCEPT_04_MULTI_AGENT,
    CONCEPT_05_MEMORY_STATE,
    CONCEPT_06_HITL,
    CONCEPT_07_POC_BLUEPRINT,
    CONCEPT_08_SAFETY_GUARDRAILS,
  ],
  diagrams: [
    {
      id: "observe-reason-act",
      title: "Observe–reason–act loop",
      caption:
        "The foundational agent loop. Automation runs one path; agents choose paths using tools and feedback.",
      steps: [
        { label: "Observe", desc: "Record + KB + search + telemetry", tool: "Context" },
        { label: "Reason", desc: "Plan next step + select tool", tool: "Policy" },
        { label: "Act", desc: "Call Flow/spoke/script tool", tool: "Tools" },
        { label: "Verify", desc: "Check outcome + log", tool: "Audit" },
        { label: "Escalate", desc: "Ask human when uncertain", tool: "HITL" },
      ],
    },
    {
      id: "agentic-stack",
      title: "ServiceNow agentic stack",
      caption:
        "Agents become safe and scalable when the platform holds the truth: tools as policy, records as state, and dashboards as control.",
      steps: [
        { label: "Agent Studio", desc: "Definitions + versions", tool: "Control plane" },
        { label: "Tools", desc: "Flows/spokes/scripts/REST", tool: "Hands" },
        { label: "State", desc: "Agent-run records + incident fields", tool: "Memory" },
        { label: "Approvals", desc: "Review queue + gates", tool: "Trust" },
        { label: "Monitoring", desc: "Logs + breakers + kill switch", tool: "Safety" },
      ],
    },
  ],
  mindmap: {
    center: "Ship agents safely",
    caption:
      "The fastest path to enterprise adoption is conservative autonomy with strong tool boundaries and evidence-based approvals.",
    branches: [
      {
        id: "tools",
        label: "Tools first",
        description: "Narrow, schema’d actions",
        children: [
          { label: "Flow tools", description: "Policy + approvals inside Flow" },
          { label: "Allowlists", description: "No generic writes" },
        ],
      },
      {
        id: "trust",
        label: "Trust boundary",
        description: "HITL on high-risk actions",
        children: [
          { label: "Review queue", description: "Fast approvals + evidence" },
          { label: "Audit trails", description: "Exportable logs" },
        ],
      },
      {
        id: "ops",
        label: "Ops discipline",
        description: "Breakers + kill switch",
        children: [
          { label: "Circuit breakers", description: "Stop loops and storms" },
          { label: "Red-team tests", description: "Prompt injection + misuse" },
        ],
      },
    ],
  },
  businessContext: [
    "Agentic AI is the capability that changes the economics of service management: it compresses the coordination loops humans spend time on — searching, routing, drafting, and executing low-risk steps across tools.",
    "But agents also introduce a new class of risk: autonomous actions at enterprise scale. This chapter is designed to make agentic AI production-shaped: tool contracts, approvals, monitoring, rollback, and governance policy — not a demo that dies in security review.",
  ],
  decisionCriteria: [
    {
      question: "Do you need to build an agent POC on PDI that survives scrutiny?",
      yesMeans:
        "Start with Concept 7 and Concept 6. Build triage + comms with approvals and logs before any autonomous writes.",
    },
    {
      question: "Are you worried about safety, compliance, and trust?",
      yesMeans:
        "Read Concepts 6 and 8 first: approval gates, audit trails, circuit breakers, kill switch, and governance policy outline.",
    },
    {
      question: "Do you already have Flows and IntegrationHub in production?",
      yesMeans:
        "Concept 3 is your unlock: wrap existing flows and spokes as tools with schemas and RBAC — don’t rebuild logic in prompts.",
    },
    {
      question: "Are you planning multi-agent workflows for IT ops?",
      yesMeans:
        "Concept 4 + Concept 5. Multi-agent orchestration and record-backed state are what make complex agents reliable.",
    },
  ],
  architecture: {
    title: "Reference POC architecture (triage + resolve + comms)",
    caption:
      "A production-shaped blueprint: three specialists orchestrated by a coordinator, with approvals and logs.",
    steps: [
      { label: "Triage agent", desc: "Route + tag with confidence", tool: "Low risk" },
      { label: "Resolution agent", desc: "Runbook-guided propose + approve", tool: "HITL" },
      { label: "Comms agent", desc: "Draft updates + approve send", tool: "Draft-only" },
      { label: "Coordinator", desc: "Decompose + merge + stop", tool: "Policy" },
      { label: "Observability", desc: "Run logs + breakers + kill switch", tool: "Safety" },
    ],
  },
  artifacts: [
    {
      id: "agent-registry-starter",
      title: "Agent registry (starter)",
      description: "One row per agent — ownership and safety visible.",
      content:
        `| Agent | Purpose | Tools | Autonomy | Owner | Approval required |\n|------|---------|-------|----------|-------|-------------------|\n| triage_agent | route + tag | read, route, create_task | partial | ITSM lead | no for tag; yes for risky |\n| resolution_agent | propose remediation | kb_retrieve, diagnostics, draft_plan | draft-only | ops lead | yes for execute |\n| comms_agent | draft updates | draft_slack, draft_email | draft-only | incident mgr | yes external |`,
    },
    {
      id: "agent-safety-pack",
      title: "Agent safety pack (minimum for production)",
      description: "Checklist to attach to security review.",
      content:
        `## Minimum safety pack\n- Tool allowlist + RBAC proof\n- Approval gate design\n- Audit log schema + retention\n- Circuit breaker limits\n- Kill switch procedure\n- Rollback plan for every write tool\n- Red-team test results\n- Incident response runbook`,
    },
  ],
  caseStudy: {
    title: "IT operations multi-agent POC — from demo to proposal",
    scenario:
      "An enterprise wanted 'fully autonomous IT' from vendor hype. Security was skeptical. The platform team built a multi-agent POC that was conservative, measurable, and auditable — and it earned trust.",
    before:
      "Manual triage, inconsistent comms cadence, and high coordinator load during P1 incidents. Prior chatbot pilots failed because they didn’t act or log decisions.",
    after:
      "Triage agent routed and tagged incidents with confidence bands. Resolution agent proposed runbook steps and required approval for execution. Comms agent drafted updates with approval gates. Coordinator orchestrated in parallel. Tool allowlists, breakers, and kill switch were demonstrated in tabletop exercise.",
    metrics: [
      "Triage time reduced with low override rates",
      "Coordinator time reduced through parallel evidence gathering and draft comms",
      "Zero unsafe autonomous writes (approval gates enforced)",
      "Security approved expansion due to safety pack completeness",
    ],
  },
  failurePoints: [
    {
      problem: "Giving agents generic write tools",
      fix: "Replace with narrow, schema’d Flow tools and allowlists. No direct table writes in v1.",
    },
    {
      problem: "No audit logs and no kill switch",
      fix: "Instrument run logs, add circuit breakers, and define kill switch owner before pilot.",
    },
    {
      problem: "Trying to start with fully autonomous resolution",
      fix: "Start with triage + comms (safe) then add approval-gated execution later.",
    },
    {
      problem: "Relying on prompts instead of policy",
      fix: "Encode boundaries in tools and approvals; prompts are guidance, not security controls.",
    },
  ],
};

