import { x } from "../../explain";
import type { GuideChapter } from "../../guide-types";
import { CONCEPT_01_MCP_COWORK_CONTEXT } from "./chapters/ch04/concept-01-mcp-cowork-context";
import { CONCEPT_02_CONNECTED_WORKFLOWS } from "./chapters/ch04/concept-02-connected-workflows";

export const CHAPTER_04_MCP_CONNECTED_AUTOMATION: GuideChapter = {
  slug: "ch04-mcp-connected-automation",
  number: 4,
  title: "MCP in Cowork — Connected Automation",
  subtitle:
    "How MCP connectors extend Cowork beyond your local file system into your entire tool ecosystem",
  readingMinutes: 100,
  intro: [
    "Chapters 1–3 automated your filesystem and schedules. Chapter 4 connects Cowork to the systems where work actually lives — email, calendar, chat, CRM, repos — via ",
    x(
      "MCP connectors",
      "Model Context Protocol integrations that let Skills read and write external services under allowlists and audit logs.",
    ),
    ".",
    "You will learn connector setup, reliability, security, and rate limits — then walk through eight ",
    x("connected workflows", "End-to-end designs from Gmail-to-brief to multi-source intelligence pipelines."),
    " you can adapt to your stack.",
  ],
  keyInsight:
    "MCP extends the COO model from disk to ecosystem — pull, transform, push with staging manifests and least-privilege connectors; read-only first, writes only with HITL.",
  concepts: [CONCEPT_01_MCP_COWORK_CONTEXT, CONCEPT_02_CONNECTED_WORKFLOWS],
  diagrams: [
    {
      id: "mcp-data-flow",
      title: "Connector data flow",
      caption: "Always stage between fetch and emit — never blind API passthrough.",
      steps: [
        { label: "FETCH", desc: "Connector read", tool: "API in" },
        { label: "Staging", desc: "raw/ + manifest", tool: "Audit" },
        { label: "TRANSFORM", desc: "Skills + Claude", tool: "TAR" },
        { label: "EMIT", desc: "Connector write", tool: "API out" },
        { label: "Notify", desc: "Slack / email", tool: "Human" },
      ],
    },
    {
      id: "connected-workflow-stack",
      title: "Connected workflow stack",
      caption: "Same pipeline discipline as Ch 3 — connectors replace folder watch at the edges.",
      steps: [
        { label: "Allowlist", desc: "Scopes + IDs", tool: "Security" },
        { label: "Skills", desc: "TAR contracts", tool: "Logic" },
        { label: "Schedule", desc: "Time / condition", tool: "Autopilot" },
        { label: "QA", desc: "Before emit", tool: "Gate" },
        { label: "Audit", desc: "run_id manifest", tool: "Gov" },
      ],
    },
  ],
  mindmap: {
    center: "MCP = connected COO",
    caption: "Filesystem automation was chapter 1–3; ecosystem automation starts here.",
    branches: [
      {
        id: "mcp-basics",
        label: "MCP in Cowork",
        description: "Integration layer",
        children: [
          { label: "Connectors", description: "Gmail, Drive, Slack…" },
          { label: "Credentials", description: "No secrets in Skills" },
          { label: "Audit", description: "run_id manifest" },
        ],
      },
      {
        id: "reliability",
        label: "Reliability",
        description: "APIs fail",
        children: [
          { label: "Retry / degrade", description: "Outage policy" },
          { label: "Rate limits", description: "Throttle discipline" },
          { label: "Staging", description: "Fetch before emit" },
        ],
      },
      {
        id: "workflows",
        label: "Connected workflows",
        description: "8 examples",
        children: [
          { label: "Gmail → brief", description: "Flagship pilot" },
          { label: "Calendar prep", description: "Pre-meeting" },
          { label: "Multi-source intel", description: "Capstone" },
        ],
      },
    ],
  },
  businessContext: [
    "Your Cowork Skills already process local exports — but someone still copies results into Gmail, Drive, and Slack by hand. ",
    x(
      "Connected automation",
      "MCP-backed workflows that read and write your SaaS tools with the same audit trail as file pipelines.",
    ),
    " closes the last mile without abandoning the TAR and pipeline discipline from Chapters 2–3.",
    "IT and security care about connector scope and audit — this chapter gives you the vocabulary and artifacts they expect before production rollout.",
  ],
  decisionCriteria: [
    {
      question: "Does the workflow need data that never lands on disk as exports?",
      yesMeans:
        "MCP read connector — start allowlisted, staging manifest (§1.5).",
    },
    {
      question: "Will the workflow write to external systems unattended?",
      yesMeans:
        "HITL tier + security review (§1.6); read-only v1 first (§2.8).",
    },
    {
      question: "Is the external API rate-limited or outage-prone?",
      yesMeans:
        "Reliability policy + degraded mode (§1.4); throttle spec (§1.7).",
    },
    {
      question: "Will compliance ask what Cowork accessed?",
      yesMeans:
        "Audit manifest + monthly governance review (§1.8) before schedule.",
    },
  ],
  architecture: {
    title: "Connected automation layer",
    caption: "Connectors at the edges; Skills and pipelines in the middle — unchanged from Ch 3.",
    steps: [
      { label: "Connectors", desc: "OAuth + allowlist", tool: "MCP" },
      { label: "Staging", desc: "Per run_id", tool: "Disk" },
      { label: "Skills", desc: "TAR transform", tool: "Claude" },
      { label: "Emit", desc: "Write + notify", tool: "MCP" },
      { label: "Audit", desc: "History + manifest", tool: "Gov" },
    ],
  },
  artifacts: [
    {
      id: "connector-setup-ch4",
      title: "Connector setup checklist",
      description: "OAuth, allowlist, test Skill, IT approval.",
      content: `Least scope → TEST_CONNECTOR_v1 ×5 → security sign-off → schedule`,
    },
    {
      id: "connected-workflow-design-ch4",
      title: "Connected workflow design template",
      description: "From use case to running multi-connector automation.",
      content: `Outcome · systems map · DAG · allowlists · reliability · test log`,
    },
  ],
  caseStudy: {
    title: "Chief of staff — Monday brief without tab archaeology",
    scenario:
      "A Series B startup's chief of staff spent 90 minutes every morning across Gmail, Drive, Slack, and news tabs before leadership standup.",
    before:
      "Local Cowork Skills summarised CSVs only; priority email and competitive signal still manual; no audit of what was read.",
    after:
      "Chapter 4 Gmail-to-brief + multi-source intel pipelines; connector allowlists in IT wiki; run_id manifests; read-only month one, Drive write month two.",
    metrics: [
      "Morning prep → 90 min to 20 min review",
      "Connector outages → degraded brief with manifest flag (no silent empty post)",
      "Security review → passed with least-privilege OAuth + audit manifest",
      "Slack digest → single #leadership-brief link, not five screenshots",
    ],
  },
  failurePoints: [
    {
      problem: "OAuth scope too broad — security shuts down pilot.",
      fix: "§1.3 least privilege; document allowlists before connect.",
    },
    {
      problem: "API outage → empty Slack post marked success.",
      fix: "§1.4 degraded mode; never emit empty as success.",
    },
    {
      problem: "Secrets pasted into Skill TAR specs.",
      fix: "§1.6 connector references only; quarterly credential audit.",
    },
    {
      problem: "Rate limit hammering at 6am — banned by vendor.",
      fix: "§1.7 pagination caps + incremental cursors + stagger schedules.",
    },
  ],
};
