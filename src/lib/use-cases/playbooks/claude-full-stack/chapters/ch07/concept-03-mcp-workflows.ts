import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_03_MCP_WORKFLOWS: GuideConcept = {
  number: 3,
  title: "Building MCP Workflows",
  subtitle:
    "Designing end-to-end workflows that use MCP connectors — the production-grade patterns for Claude connected to the real world",
  sections: [
    buildGuideSection({
      id: "connected-workflow-mindset",
      number: "3.1",
      title: "The connected workflow mindset",
      subtitle:
        "Thinking about Claude as an orchestrator across your tool ecosystem rather than a standalone tool",
      takeaway:
        "MCP workflows treat Claude as orchestrator: plan → call tools in order → verify → write to system of record — not 'answer in chat and copy-paste'.",
      why: "Copy-paste from chat defeats connectors — value is closed-loop execution with guardrails.",
      paragraphs: [
        [
          s("Shift: deliverable lives in Notion/Drive/Jira, not chat bubble. Chat is control plane; tools are data plane."),
        ],
        [
          s("Pair with Projects (Chapter 6) for workflow instructions and Chapter 4 prompts for step templates."),
        ],
      ],
      workflowSteps: [
        "Define system of record per output type.",
        "Ban 'copy from chat' in SOP when connector can write.",
        "Human approval at write boundaries.",
      ],
    }),
    buildGuideSection({
      id: "research-to-document",
      number: "3.2",
      title: "The research-to-document workflow",
      subtitle:
        "Claude searches the web, reads Drive files, writes a document, and saves it — end to end",
      takeaway:
        "Chain: web search (if needed) → Drive resource fetch → synthesis in artifact → save to Drive doc — with citation and human publish approval.",
      why: "Research workflows are the most common connected pattern for knowledge workers.",
      paragraphs: [
        [
          s("Prompt shell: SOURCE RULES → search if public facts needed → pull internal files via Drive → output markdown artifact → 'prepare Drive create' if write enabled."),
        ],
        [
          s("Human: verify cites, click save/share. Auto-publish without review forbidden for external docs."),
        ],
      ],
      workflowSteps: [
        "List internal vs external sources.",
        "Run dry-run in artifact only.",
        "Enable Drive write after cite QA passes 3 times.",
      ],
      artifact: {
        id: "research-to-doc-prompt",
        title: "Research-to-document prompt",
        content: `WORKFLOW: Research → Document
1. If public facts needed: web search with SOURCE RULES
2. Fetch [Drive paths] via connector
3. Synthesise in artifact — cite each claim
4. Human reviews artifact
5. If approved: create/update Drive doc [folder]

Do not publish externally without human confirm.`,
      },
    }),
    buildGuideSection({
      id: "meeting-to-action",
      number: "3.3",
      title: "The meeting-to-action workflow",
      subtitle:
        "Claude reads calendar, pulls Slack context, attends the briefing, creates Notion tasks, and sends the follow-up",
      takeaway:
        "Pre-meeting: Calendar event + Slack thread summary + Drive agenda. Post-meeting: Notion tasks + draft follow-up email — human sends.",
      why: "Meetings generate action items that die in notes — connectors push to systems teams actually use.",
      paragraphs: [
        [
          s("Pre: 'For event X, pull Slack #channel since yesterday, summarise agenda doc, list open questions.' Post: 'From these notes, create Notion tasks assigned [template], draft follow-up email.'"),
        ],
      ],
      workflowSteps: [
        "Connect Calendar + Slack read.",
        "Post-meeting template in Project.",
        "Notion write with task template — manager reviews assignments.",
      ],
      example: {
        title: "Product sync — auto task capture",
        body: "Team ran post-meeting prompt with Notion connector. Claude proposed 8 tasks with owners from thread context. Lead deleted 2, edited 3, accepted 5 — still faster than manual entry.",
      },
    }),
    buildGuideSection({
      id: "inbox-to-brief",
      number: "3.4",
      title: "The inbox-to-brief workflow",
      subtitle:
        "Claude reads Gmail, surfaces priorities, drafts responses, and updates CRM — the executive assistant pattern",
      takeaway:
        "Morning brief: unread priority threads, CRM account context, draft replies in drafts folder — executive approves sends and pipeline updates.",
      why: "High-leverage pattern for leaders; highest risk for misfire sends — drafts only by default.",
      paragraphs: [
        [
          s("Tiers: FYI summary (no draft), respond today (draft), escalate (flag only). CRM update: log call summary as note — not stage change without human."),
        ],
      ],
      workflowSteps: [
        "Define priority rules in Project (VIPs, keywords).",
        "Gmail connector → summarise only week one.",
        "Add draft replies week two — never auto-send.",
      ],
    }),
    buildGuideSection({
      id: "code-to-issue",
      number: "3.5",
      title: "The code-to-issue workflow",
      subtitle:
        "Claude reviews GitHub, identifies bugs, creates Jira issues, and drafts the fix — the developer workflow",
      takeaway:
        "GitHub read PR/diff → analysis artifact → Jira issue creation with repro steps → optional Claude Code branch for fix PR — human merges.",
      why: "Connects review, tracking, and implementation without losing audit trail.",
      paragraphs: [
        [
          s("Separate read (analysis) from write (issue, PR). Issue body must reference commit/PR link. Fix in branch with CI green before merge."),
        ],
      ],
      workflowSteps: [
        "Pilot on one repo.",
        "Template Jira issue fields in prompt.",
        "Require engineer approval before issue create tool fires.",
      ],
    }),
    buildGuideSection({
      id: "multi-step-orchestration",
      number: "3.6",
      title: "Multi-step MCP orchestration",
      subtitle:
        "Chaining multiple tool calls in sequence — how Claude reasons about dependencies between systems",
      takeaway:
        "Claude plans tool DAG implicitly — help it with explicit step order, dependencies, and stop conditions in the prompt.",
      why: "Ambiguous orchestration causes wrong-order writes (update CRM before email sent).",
      paragraphs: [
        [
          s("Prompt pattern: 'STEP 1 (read only): ... STEP 2: only if STEP 1 found X ... STOP if missing data.' For API builders, implement explicit state machine; in Claude.ai, rely on clear instructions."),
        ],
        [
          s("Long chains: break into sub-chats or prompt chain (Chapter 4) with checkpoint artifacts."),
        ],
      ],
      workflowSteps: [
        "Write numbered steps with inputs/outputs.",
        "Require Claude to state plan before tool calls.",
        "Human checkpoint between write steps.",
      ],
    }),
    buildGuideSection({
      id: "error-handling-mcp",
      number: "3.7",
      title: "Error handling in MCP workflows",
      subtitle:
        "What Claude does when a tool fails, returns unexpected output, or times out — and how to design for resilience",
      takeaway:
        "Design for failure: timeouts, partial data, permission denied, rate limits — instruct Claude to report error, not hallucinate success.",
      why: "Silent failure produces confident wrong actions in downstream systems.",
      paragraphs: [
        [
          s("Prompt rules: 'If tool errors, stop and report error text. Do not fabricate data. Suggest retry or human.' Log tool failures for connector owners."),
        ],
        [
          s("Idempotent writes where possible; confirm before duplicate create."),
        ],
      ],
      workflowSteps: [
        "Test permission-denied path deliberately.",
        "Add ERROR HANDLING section to workflow prompts.",
        "Weekly review connector error logs.",
      ],
      artifact: {
        id: "mcp-error-handling-block",
        title: "MCP error handling block",
        content: `ON TOOL ERROR:
- Stop workflow immediately
- Report: tool name, error message, step number
- Do NOT continue to write steps
- Suggest: retry | alternate source | human

ON PARTIAL DATA:
- Label response PARTIAL
- List what was missing`,
      },
    }),
    buildGuideSection({
      id: "testing-debugging-mcp",
      number: "3.8",
      title: "Testing and debugging MCP workflows",
      subtitle:
        "How to validate that connected workflows are working as intended — the quality assurance practice for tool-connected Claude",
      takeaway:
        "MCP QA: sandbox credentials, golden-path tests per workflow, regression after connector scope changes, compare tool output to source UI.",
      why: "Connectors change APIs; workflows rot without tests like code.",
      paragraphs: [
        [
          s("Test matrix: happy path, empty result, permission error, large payload, multi-connector order. Record expected tool calls for golden path."),
        ],
        [
          s("Debug: check OAuth expiry, scope, rate limit, host connector status, prompt step order."),
        ],
      ],
      workflowSteps: [
        "5 golden tests per workflow in Project.",
        "Run before and after any scope change.",
        "Assign workflow owner for failures.",
      ],
      example: {
        title: "Ops team — workflow test suite",
        body: "Three MCP workflows (research-doc, standup brief, incident ticket) each had 5 golden tests in sandbox. Connector upgrade broke Jira field mapping — caught in test run, not production.",
      },
    }),
  ],
};
