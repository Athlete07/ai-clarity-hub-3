import { x } from "../../explain";
import type { GuideChapter } from "../../guide-types";
import { CONCEPT_01_MCP_FOUNDATIONS } from "./chapters/ch07/concept-01-mcp-foundations";
import { CONCEPT_02_CONNECTORS } from "./chapters/ch07/concept-02-connectors";
import { CONCEPT_03_MCP_WORKFLOWS } from "./chapters/ch07/concept-03-mcp-workflows";
import { CONCEPT_04_CONNECTOR_CATALOG } from "./chapters/ch07/concept-04-connector-catalog";

export const CHAPTER_07_MCP: GuideChapter = {
  slug: "ch07-mcp",
  number: 7,
  title: "MCP — The Extensibility Layer",
  subtitle:
    "How Model Context Protocol connects Claude to the tools, systems, and data sources that live outside it — the architecture that turns Claude into a platform",
  readingMinutes: 95,
  intro: [
    "Chapters 1 and 6 positioned MCP in the ecosystem and Projects as your OS. Chapter 7 goes deep on ",
    x(
      "Model Context Protocol",
      "The open standard connecting Claude hosts to external tools, data, and actions via MCP servers.",
    ),
    " — foundations, pre-built connectors, and production workflows across your stack.",
    "Without MCP, Claude is brilliant but isolated. With MCP, it becomes an orchestrator over Gmail, Drive, GitHub, Notion, and the systems where work actually lives.",
  ],
  keyInsight:
    "MCP collapses the N×M integration problem to N+M — hosts speak to servers, servers speak to your tools. Design connected workflows with least privilege, human gates on writes, and tests like any production integration.",
  concepts: [
    CONCEPT_01_MCP_FOUNDATIONS,
    CONCEPT_02_CONNECTORS,
    CONCEPT_03_MCP_WORKFLOWS,
    CONCEPT_04_CONNECTOR_CATALOG,
  ],
  diagrams: [
    {
      id: "mcp-architecture",
      title: "MCP architecture",
      caption:
        "Host, client, server, external system — credentials stay at the server boundary.",
      steps: [
        { label: "Host", desc: "Claude app", tool: "Orchestrate" },
        { label: "Client", desc: "MCP protocol", tool: "Route" },
        { label: "Server", desc: "Connector", tool: "Adapt" },
        { label: "System", desc: "SaaS/API", tool: "Truth" },
      ],
    },
    {
      id: "connected-workflow",
      title: "Connected workflow loop",
      caption:
        "Plan → read tools → human checkpoint → write tools → system of record.",
      steps: [
        { label: "Plan", desc: "Steps + scopes", tool: "Prompt" },
        { label: "Read", desc: "Fetch context", tool: "Low risk" },
        { label: "Review", desc: "Human QA", tool: "Gate" },
        { label: "Write", desc: "Update systems", tool: "Controlled" },
      ],
    },
  ],
  mindmap: {
    center: "MCP extensibility",
    caption: "Foundations → connectors → workflows.",
    branches: [
      {
        id: "foundations",
        label: "MCP foundations",
        description: "Concept 1 — 1.1–1.8",
        children: [
          { label: "Host/client/server", description: "Roles" },
          { label: "Security", description: "Least privilege" },
        ],
      },
      {
        id: "connectors",
        label: "Connectors",
        description: "Concept 2 — 2.1–2.8",
        children: [
          { label: "Google + dev tools", description: "Common stacks" },
          { label: "Combinations", description: "Multi-tool" },
        ],
      },
      {
        id: "workflows",
        label: "Workflows",
        description: "Concept 3 — 3.1–3.8",
        children: [
          { label: "Research → doc", description: "Knowledge" },
          { label: "Test + errors", description: "Production" },
        ],
      },
    ],
  },
  businessContext: [
    "Your team copies between Claude and Slack, Drive, Jira, and Gmail — manual glue that doesn't scale and leaks context.",
    "MCP is how you ",
    x(
      "close the loop",
      "Claude reads and writes authorized systems directly — with audit, scope, and human approval on destructive steps.",
    ),
    " without building bespoke integrations for every tool pair.",
  ],
  decisionCriteria: [
    {
      question: "Do you repeatedly paste data from one SaaS tool into Claude?",
      yesMeans:
        "Yes — evaluate connector for that system (Concept 2) before next paste.",
    },
    {
      question: "Are you building AI features that need live customer data?",
      yesMeans:
        "Yes — compare MCP servers vs API function calling (1.5); security 1.7 mandatory.",
    },
    {
      question: "Has IT asked what systems Claude can access?",
      yesMeans:
        "Yes — governance checklist 1.7 + connector allowlist before team rollout.",
    },
    {
      question: "Do workflows span more than one tool (email + docs + tasks)?",
      yesMeans:
        "Yes — Concept 3 orchestration patterns and connector combinations 2.8.",
    },
  ],
  architecture: {
    title: "MCP rollout path",
    caption:
      "From first connector to production multi-step workflows.",
    steps: [
      { label: "Pilot", desc: "Read-only connector", tool: "Sandbox" },
      { label: "Project", desc: "Workflow SOP", tool: "Chapter 6" },
      { label: "Expand", desc: "Write + combos", tool: "Guarded" },
      { label: "Operate", desc: "Tests + audit", tool: "Ongoing" },
    ],
  },
  artifacts: [
    {
      id: "mcp-workflow-charter",
      title: "MCP workflow charter",
      description: "One page per connected workflow before production.",
      content: `WORKFLOW NAME:
SYSTEMS (read/write):
CONNECTORS + SCOPES:
HUMAN GATES:
SYSTEM OF RECORD:
GOLDEN TESTS (5):
OWNER:
ERROR HANDLING: [link block 3.7]
LAST TESTED:`,
    },
    {
      id: "connector-allowlist-template",
      title: "Team connector allowlist",
      content: `APPROVED CONNECTORS:
| System | Server | Read | Write | Owner |
|--------|--------|------|-------|-------|
| Drive  | Google | ✓    | ✓*    | IT    |

*Write requires workflow charter + manager approval
BLOCKED: [list]
REVIEW: quarterly`,
    },
  ],
  caseStudy: {
    title: "Product-led growth team — MCP workflow stack",
    scenario:
      "A PLG team lived across Gmail, Notion, Linear, GitHub, and Slack. PMs exported CSVs into Claude. Context was stale; actions never made it back to tools.",
    before:
      "No connectors. Manual copy-paste. No audit. Sales and product data diverged.",
    after:
      "MCP rollout: read connectors week 1, three chartered workflows (research-doc, standup brief, code-to-issue), write gates on Linear/GitHub. Project per initiative with INTEGRATIONS.md.",
    metrics: [
      "Manual export time → down 65%",
      "Action items captured in Notion/Linear → up from ~40% to ~92%",
      "Connector security incidents → 0 (read-first policy)",
      "Workflow regression caught in test → 1 before prod (Jira mapping)",
    ],
  },
  failurePoints: [
    {
      problem: "Full write scopes on day one — accidental mass updates.",
      fix: "Read-first setup 2.7; human gates on writes 3.1.",
    },
    {
      problem: "Treating tool output as verified truth.",
      fix: "Spot-check against source UI; citation rules Chapter 4.",
    },
    {
      problem: "No workflow tests after connector upgrade.",
      fix: "Golden tests 3.8; run on any scope change.",
    },
    {
      problem: "Building custom server when catalogue connector exists.",
      fix: "Catalogue first 1.6; build only for proprietary systems.",
    },
  ],
};
