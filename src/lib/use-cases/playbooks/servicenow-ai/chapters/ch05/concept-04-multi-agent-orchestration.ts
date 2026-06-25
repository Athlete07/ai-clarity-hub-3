import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_04_MULTI_AGENT: GuideConcept = {
  number: 4,
  title: "Multi-agent Orchestration",
  subtitle:
    "Coordinator and specialist agents, task decomposition, handoffs, parallelism, conflict handling, and observability",
  sections: [
    buildGuideSection({
      id: "multi-agent-architecture",
      number: "4.1",
      title: "The multi-agent architecture",
      subtitle:
        "Coordinator agents, specialist agents, and how they communicate",
      takeaway:
        "Multi-agent systems split work: a coordinator interprets the goal and delegates to specialists (triage, resolution, comms) with explicit contracts and shared state.",
      why: "One giant agent becomes brittle and unsafe. Multi-agent designs scale by separation of concerns and policy boundaries.",
      paragraphs: [
        [
          s("Coordinator: owns goal and safety policy. Specialists: own narrow domains and tools. Communication happens through structured messages and record-backed state."),
        ],
        [
          s("Architectural benefit: each specialist can have tighter tools and stricter permissions. The comms agent shouldn’t have change execution tools."),
        ],
        [
          s("Design rule: agents communicate via contracts (schemas), not prose. Prose causes drift and misunderstandings between agents."),
        ],
      ],
      workflowSteps: [
        "Define 3 specialist agents for one workflow.",
        "Define message schema between them (inputs/outputs).",
        "Decide shared state location (tables/records).",
      ],
      example: {
        title: "Major incident: triage + resolve + comms",
        body: "Coordinator delegates: triage agent finds likely root domain, resolution agent suggests remediation and calls diagnostics, comms agent drafts updates. Humans approve external messages. Each agent has least-privilege tools.",
      },
    }),
    buildGuideSection({
      id: "task-decomposition",
      number: "4.2",
      title: "Task decomposition",
      subtitle:
        "How a coordinator breaks complex goals into delegated sub-tasks",
      takeaway:
        "Decomposition turns vague goals (“resolve outage”) into bounded tasks with success criteria and tool constraints — enabling safe parallel work.",
      why: "Without decomposition, agents wander, loop, or take unsafe shortcuts.",
      paragraphs: [
        [
          s("Good task specs include: objective, required evidence, allowed tools, stop conditions, and escalation criteria."),
        ],
        [
          s("Coordinator should prefer deterministic steps first: gather facts, check known errors, validate CI topology — before proposing risky actions."),
        ],
        [
          s("Decomposition also enables measurement: you can evaluate each sub-agent’s success rate and improve it independently."),
        ],
      ],
      workflowSteps: [
        "Write a decomposition template for your domain (IT ops).",
        "Define success metrics for each subtask (e.g., correct assignment).",
        "Add fallback when tasks fail (human queue).",
      ],
      example: {
        title: "Outage decomposition",
        body: "Coordinator created tasks: (1) identify impacted service, (2) find similar incidents, (3) run diagnostics, (4) draft comms, (5) prepare change plan. Specialists executed within tool boundaries.",
      },
    }),
    buildGuideSection({
      id: "agent-handoff",
      number: "4.3",
      title: "Agent handoff",
      subtitle:
        "How context, state, and results pass between agents",
      takeaway:
        "Handoffs should pass structured state: record ids, evidence links, intermediate conclusions, and next-step suggestions — stored on records for audit and resilience.",
      why: "If handoffs are prose-only, you lose traceability and can’t resume after failures.",
      paragraphs: [
        [
          s("Store state in tables: what was tried, outputs, timestamps, and current phase. This enables restart and audit."),
        ],
        [
          s("Pass only necessary context. Over-sharing increases token costs and leakage risk."),
        ],
        [
          s("Use a standard “handoff payload” schema across agents."),
        ],
      ],
      workflowSteps: [
        "Define a handoff schema: task_id, evidence, conclusion, next_actions.",
        "Store handoffs on a dedicated agent-run table.",
        "Test: interrupt run mid-way; resume from stored state.",
      ],
      example: {
        title: "Resume after session loss",
        body: "An agent run crashed mid-outage. Because state was stored, the coordinator resumed at “diagnostics complete, comms draft pending approval” — avoiding rework.",
      },
    }),
    buildGuideSection({
      id: "parallel-execution",
      number: "4.4",
      title: "Parallel agent execution",
      subtitle:
        "Running specialists simultaneously and merging results",
      takeaway:
        "Parallelism speeds incident response: one agent searches known errors, another checks recent changes, another drafts comms — then coordinator merges and resolves conflicts.",
      why: "This is where agentic AI becomes transformative: it compresses cycle time by doing independent work concurrently.",
      paragraphs: [
        [
          s("Only parallelise independent tasks. Avoid parallel writes to the same record without coordination — that creates race conditions."),
        ],
        [
          s("Coordinator merges results with a strict policy: prefer grounded evidence, resolve conflicts, and ask humans when uncertain."),
        ],
        [
          s("Rate limit parallel tool calls to avoid runaway costs and external API throttling."),
        ],
      ],
      workflowSteps: [
        "Identify 3 independent tasks in your workflow suitable for parallelism.",
        "Ensure each agent is read-only or writes to separate fields.",
        "Define merge rules for conclusions and recommendations.",
      ],
      example: {
        title: "Parallel outage triage",
        body: "One agent scanned monitoring events, another scanned change calendar, another searched KB/known errors. Coordinator produced a consolidated hypothesis within minutes, faster than human coordination.",
      },
    }),
    buildGuideSection({
      id: "conflict-resolution",
      number: "4.5",
      title: "Conflict resolution",
      subtitle:
        "What happens when two agents produce contradictory outputs",
      takeaway:
        "Conflicts are inevitable. Resolve by evidence hierarchy (record facts > tool outputs > model guesses), ask clarifying questions, and escalate to humans for high-risk disagreements.",
      why: "Unresolved conflicts cause wrong actions or paralysis. Good orchestration designs for conflict explicitly.",
      paragraphs: [
        [
          s("Evidence hierarchy: platform record fields and tool outputs outrank narrative. Require citations for claims."),
        ],
        [
          s("If conflict is about action choice and both are plausible, prefer the safer reversible action or request human approval."),
        ],
        [
          s("Log conflicts and resolutions — they are training data for improving instructions and tools."),
        ],
      ],
      workflowSteps: [
        "Define conflict resolution policy in coordinator instructions.",
        "Create tests where specialists disagree intentionally.",
        "Verify coordinator escalates instead of guessing.",
      ],
      example: {
        title: "Two root cause hypotheses",
        body: "Monitoring agent suspected network; change agent suspected database patch. Coordinator compared evidence and escalated to human with both hypotheses and supporting logs — avoiding a wrong automated change.",
      },
    }),
    buildGuideSection({
      id: "orchestration-patterns",
      number: "4.6",
      title: "Orchestration patterns",
      subtitle:
        "Four common patterns and when each is appropriate",
      takeaway:
        "Common patterns: coordinator→specialists, pipeline chain, parallel map-reduce, and human-in-the-loop supervisor. Choose based on risk and task structure.",
      why: "Patterns prevent reinventing unsafe designs and help you communicate architecture clearly.",
      paragraphs: [
        [
          x("Coordinator→specialists", "Best for complex goals with diverse tools."),
          s(" "),
          x("Pipeline chain", "Best for sequential stages (triage → resolve → comms)."),
        ],
        [
          x("Parallel map-reduce", "Best for gathering evidence across sources."),
          s(" "),
          x("Supervisor/HITL", "Best when humans must approve decisions at checkpoints."),
        ],
        [
          s("Rule: the higher the risk, the more you should bias toward supervisor pattern with approvals and review queues."),
        ],
      ],
      workflowSteps: [
        "Pick one pattern for your POC and justify why.",
        "Define stage boundaries and approvals.",
        "Document pattern in architecture deck and runbooks.",
      ],
      example: {
        title: "Supervisor pattern for HR agents",
        body: "HR agents used supervisor pattern: agents drafted responses, humans approved all external sends. Low risk tolerance demanded HITL-heavy orchestration.",
      },
    }),
    buildGuideSection({
      id: "monitoring-agent-chains",
      number: "4.7",
      title: "Monitoring a multi-agent workflow",
      subtitle:
        "Observe, trace, and debug agent chains",
      takeaway:
        "Multi-agent monitoring requires traceability: run id, tool call logs, decisions, approvals, and outcomes — otherwise you cannot debug or audit.",
      why: "When multi-agent systems fail, they fail invisibly unless you instrument them.",
      paragraphs: [
        [
          s("Log structure: coordinator run id links all specialist runs; each tool call has inputs/outputs (redacted as needed), timestamp, and result code."),
        ],
        [
          s("Build dashboards: success rate, average steps, escalation rate, and common failure reasons."),
        ],
        [
          s("Treat this as SRE: define SLOs for agent workflows (e.g., 99% no-unsafe-write)."),
        ],
      ],
      workflowSteps: [
        "Create an agent run table schema (run_id, stage, tools, status).",
        "Log every tool call and approval decision.",
        "Set alerts for loops, high error rate, and high action volume.",
      ],
      example: {
        title: "Tracing found a broken tool contract",
        body: "Observability showed a spike in failures at one tool step. Tool schema had changed. Versioning policy was updated and the issue resolved quickly.",
      },
    }),
    buildGuideSection({
      id: "multi-agent-it-ops-case",
      number: "4.8",
      title: "Real use case: end-to-end IT operations automation",
      subtitle:
        "Multi-agent design, build, and outcome",
      takeaway:
        "A credible IT ops agent program uses multi-agent separation: triage, resolution, comms — with approvals, evidence, and monitoring. It compresses cycle time and reduces coordination load.",
      why: "This is the flagship demo stakeholders understand: faster incident response with transparent safety controls.",
      paragraphs: [
        [
          s("Design: coordinator plus three specialists. Triage reads + routes. Resolution runs diagnostics and proposes remediation. Comms drafts updates and status changes — approval required for external posts."),
        ],
        [
          s("Build: tools are flows and spokes with schemas; state stored on agent-run records; monitoring dashboards track loops, errors, and approvals."),
        ],
        [
          s("Outcome: faster comms cadence, reduced triage time, fewer duplicate incidents during outages — without granting agents unsafe autonomy."),
        ],
      ],
      workflowSteps: [
        "Start with one service domain and one outage scenario.",
        "Deploy read-only + draft-only actions first.",
        "Add limited writes only after success metrics and audit checks pass.",
      ],
      example: {
        title: "Incident coordination time −30%",
        body: "Multi-agent workflow reduced human coordination time by handling evidence gathering and draft comms in parallel. Humans focused on decisions and approvals — trust increased, and ROI was measurable.",
      },
    }),
  ],
};

