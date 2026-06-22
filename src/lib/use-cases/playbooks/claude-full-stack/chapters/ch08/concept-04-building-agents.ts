import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_04_BUILDING_AGENTS: GuideConcept = {
  number: 4,
  title: "Building AI Agents with Claude Code",
  subtitle:
    "Using Claude Code as the foundation for building autonomous AI agents — from simple tools to multi-agent systems",
  sections: [
    buildGuideSection({
      id: "what-is-agent",
      number: "4.1",
      title: "What an AI agent is",
      subtitle:
        "The definition, the loop, and why Claude Code is a natural environment for building them",
      takeaway:
        "An agent observes environment, reasons, acts via tools, repeats until goal or stop — Claude Code is both an agent (coding) and a dev environment for building agents.",
      why: "Chapter 1 agentic loops apply — building agents extends Claude Code skills to products.",
      paragraphs: [
        [
          s(""),
          x("Agent loop", "Observe → plan → tool call → observe result → repeat."),
          s(". Coding agent uses file/shell tools; research agent uses search/API tools."),
        ],
      ],
      workflowSteps: [
        "Sketch loop on whiteboard.",
        "List tools and stop conditions.",
        "Prototype in repo with tests.",
      ],
    }),
    buildGuideSection({
      id: "agent-scaffold",
      number: "4.2",
      title: "The agent scaffold",
      subtitle:
        "The code structure that wraps Claude API calls in an observe-reason-act loop — the foundation every agent shares",
      takeaway:
        "Scaffold: Messages API + tool definitions + executor + state + stop policy — thin loop, fat tools, logged steps.",
      why: "Every custom agent shares this skeleton; Claude Code can generate it from spec.",
      paragraphs: [
        [
          s("Modules: prompt/system, tool registry, run_loop(max_steps), handlers per tool, structured logging. Use Anthropic SDK patterns."),
        ],
      ],
      workflowSteps: [
        "Clone minimal agent template.",
        "Implement one tool end-to-end.",
        "Add max_steps and timeout.",
      ],
      artifact: {
        id: "agent-scaffold-outline",
        title: "Agent scaffold outline (conceptual)",
        content: `run_agent(goal):
  state = init()
  while not done and steps < MAX:
    response = claude(messages, tools)
    if tool_call:
      result = execute_tool(tool_call)
      messages.append(result)
    else:
      return response
  raise MaxStepsError`,
      },
    }),
    buildGuideSection({
      id: "tool-definition",
      number: "4.3",
      title: "Tool definition and integration",
      subtitle:
        "How to define tools that your agent can call — APIs, databases, file systems, and external services",
      takeaway:
        "Tools need JSON schema, idempotent reads, explicit write confirmations, error messages agents can parse — design for machine feedback.",
      why: "Bad tool errors cause agent hallucination of success.",
      paragraphs: [
        [
          s("Read tools: get_issue, search_docs. Write tools: create_draft — separate from publish. Return structured JSON always."),
        ],
      ],
      workflowSteps: [
        "Document each tool schema.",
        "Test tool failures explicitly.",
        "Mock tools in unit tests.",
      ],
    }),
    buildGuideSection({
      id: "research-agent",
      number: "4.4",
      title: "Building a simple research agent",
      subtitle:
        "An agent that searches, reads, synthesises, and outputs — the complete build, step by step",
      takeaway:
        "Research agent tools: web/search, fetch_url, write_note — output markdown report with citations; human reviews before use.",
      why: "Simplest agent pattern — validates loop before complex writes.",
      paragraphs: [
        [
          s("Build in Claude Code: TASK to scaffold agent/, implement search + fetch tools, synthesis prompt with SOURCE RULES (Chapter 4), CLI entrypoint."),
        ],
      ],
      workflowSteps: [
        "Define report JSON/markdown schema.",
        "Implement read-only tools first.",
        "Eval on 5 fixed research questions.",
      ],
      example: {
        title: "Competitive scan agent",
        body: "Agent fetched 8 sources, produced comparison table with URLs. PM validated 2 citations manually — faster than manual scan, not auto-published.",
      },
    }),
    buildGuideSection({
      id: "data-processing-agent",
      number: "4.5",
      title: "Building a data processing agent",
      subtitle:
        "An agent that ingests, transforms, analyses, and reports — the pipeline agent pattern",
      takeaway:
        "Pipeline agent: ingest (CSV/API) → validate schema → transform steps → aggregate → report artifact — log row counts and errors.",
      why: "Common ops/analytics automation with clear verification metrics.",
      paragraphs: [
        [
          s("Tools: read_file, run_sql (sandbox), write_report. Checkpoint intermediate parquet. No PII in logs."),
        ],
      ],
      workflowSteps: [
        "Sample data in tests.",
        "Validate row counts each stage.",
        "Human signs off report.",
      ],
    }),
    buildGuideSection({
      id: "workflow-agent",
      number: "4.6",
      title: "Building a multi-step workflow agent",
      subtitle:
        "An agent that executes a complex multi-tool workflow autonomously — the orchestration pattern",
      takeaway:
        "Workflow agent encodes DAG: step dependencies, checkpoints, human gates on writes — Chapter 7 MCP workflows as code.",
      why: "Cross-system automation is where agent products deliver ROI.",
      paragraphs: [
        [
          s("State machine explicit in code — not only prompt — for reliability. Resume from last checkpoint on failure."),
        ],
      ],
      workflowSteps: [
        "Draw workflow DAG.",
        "Implement step handlers.",
        "Dry-run with mocked writes.",
      ],
    }),
    buildGuideSection({
      id: "agent-memory-state",
      number: "4.7",
      title: "Memory and state in agents",
      subtitle:
        "How to give your agent persistent memory across runs — the storage patterns that make agents stateful",
      takeaway:
        "Persist: run_id, messages summary, tool results hash, user prefs — SQLite/Redis/file — inject summary on next run (Chapter 5).",
      why: "Stateless agents repeat work; unbounded state bloats cost.",
      paragraphs: [
        [
          s("Patterns: rolling summary + key facts table, episodic log for audit, vector store only if corpus huge."),
        ],
      ],
      workflowSteps: [
        "Define what must persist vs ephemeral.",
        "Implement summary after each run.",
        "Test resume mid-workflow.",
      ],
    }),
    buildGuideSection({
      id: "multi-agent-systems",
      number: "4.8",
      title: "Multi-agent systems",
      subtitle:
        "Building a network of specialised agents that coordinate — the architecture and the coordination protocol",
      takeaway:
        "Specialists (researcher, coder, reviewer) + orchestrator — message bus or supervisor model — clear handoff schema, human at merge.",
      why: "Monolithic mega-agent confuses roles; separation improves eval and safety.",
      paragraphs: [
        [
          s("Supervisor routes subtasks. Each agent narrow tools. Reviewer agent blocks merge until checklist pass. Start with two agents before N."),
        ],
      ],
      workflowSteps: [
        "Define roles and handoff JSON schema.",
        "Implement supervisor loop.",
        "Integration test on one end-to-end scenario.",
      ],
      example: {
        title: "Spec → code → review trio",
        body: "Planner agent wrote TASK.md from ticket; coder agent implemented on branch; reviewer agent posted PR comments. Human merged after adjudicating one false positive. Multi-agent reduced single-agent scope creep.",
      },
    }),
  ],
};
