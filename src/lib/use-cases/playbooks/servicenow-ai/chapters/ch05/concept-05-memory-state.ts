import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_05_MEMORY_STATE: GuideConcept = {
  number: 5,
  title: "Agent Memory and State",
  subtitle:
    "Session memory, persistent memory via records, episodic logs, knowledge retrieval, state machines, contamination risks, and PDI walkthrough",
  sections: [
    buildGuideSection({
      id: "short-term-memory",
      number: "5.1",
      title: "Short-term memory",
      subtitle: "What an agent retains within a session and context constraints",
      takeaway:
        "Short-term memory is the agent’s current context window: what it can 'see' right now (messages, tool outputs, retrieved docs). It is finite and must be managed.",
      why: "Context overflow causes the agent to forget early constraints — the fastest path to unsafe actions and inconsistent output.",
      paragraphs: [
        [
          s("Session memory is bounded. Long incident threads and large tool outputs consume budget and trigger truncation."),
        ],
        [
          s("Design pattern: summarise early, store summary on record, and feed summary back instead of replaying full history each step."),
        ],
        [
          s("Operational rule: never keep 'policy constraints' only in chat history; encode them in instructions and tool boundaries."),
        ],
      ],
      workflowSteps: [
        "Cap tool outputs and retrieved chunks; store full details in records.",
        "Write 'session summary' field on incident or agent-run record.",
        "Force periodic state checkpoints in multi-step tasks.",
      ],
      example: {
        title: "Long incident thread caused constraint loss",
        body: "Agent initially respected 'no external comms without approval' but later forgot after many tool outputs. Fix: encode constraint in tool layer and require approval tool for any external send.",
      },
    }),
    buildGuideSection({
      id: "long-term-memory",
      number: "5.2",
      title: "Long-term memory",
      subtitle: "Persistent information across sessions in ServiceNow",
      takeaway:
        "Long-term memory should be record-backed: knowledge base, agent-run tables, and curated preference/config tables — not hidden model memory.",
      why: "Enterprises need auditability and data retention controls. Record-backed memory provides both.",
      paragraphs: [
        [
          s("Patterns: KB for policies and procedures; custom tables for agent preferences, learned mappings, and stable facts; incident/task records for operational state."),
        ],
        [
          s("Keep memory curated. Long-term memory that grows without hygiene becomes wrong and unsafe — like an outdated KB."),
        ],
        [
          s("Design for deletion and residency. Persistent memory must comply with HR/GDPR retention rules."),
        ],
      ],
      workflowSteps: [
        "Define three memory stores: KB, agent-run log, and agent-config table.",
        "Set retention policy per store.",
        "Implement a 'facts refresh' cadence for long-term memory entries.",
      ],
      example: {
        title: "Stable mapping table beat prompt stuffing",
        body: "Instead of pasting a 200-line routing map each run, the team stored routing mappings in a table. The agent queried the table when needed — cheaper, safer, and always current.",
      },
    }),
    buildGuideSection({
      id: "episodic-memory",
      number: "5.3",
      title: "Episodic memory",
      subtitle: "Storing and retrieving records of past agent runs",
      takeaway:
        "Episodic memory is the history of agent executions: what happened, which tools were called, outcomes, and human approvals — used for learning and audit.",
      why: "When an agent makes a mistake, episodic logs are how you debug and improve safely.",
      paragraphs: [
        [
          s("Store: run id, inputs, tool calls (redacted), decisions, approvals, and final outcome. Link to the underlying incident/case."),
        ],
        [
          s("Use episodic memory for improvements: identify repeated failures, add guardrails, refine tool schemas, and update instructions."),
        ],
        [
          s("Do not let the agent freely “learn” from episodes by modifying policy without human review. Learning must be governed."),
        ],
      ],
      workflowSteps: [
        "Create agent-run table schema with links to records.",
        "Build dashboards: success rate, loop rate, escalation reasons.",
        "Use episodes as training data for better test cases.",
      ],
      example: {
        title: "Episode logs solved a false closure",
        body: "An incident was mistakenly marked resolved by a tool. Episode logs showed the tool schema allowed state change. Schema was tightened and approval was added for state transitions.",
      },
    }),
    buildGuideSection({
      id: "knowledge-as-memory",
      number: "5.4",
      title: "Knowledge as memory",
      subtitle: "KB as a retrievable memory store for agents",
      takeaway:
        "Knowledge bases function as governed memory: curated, versioned, searchable, and policy-aligned. Agents should retrieve from KB rather than invent procedures.",
      why: "Most agent failures are 'made up procedure' failures. KB retrieval is the fix.",
      paragraphs: [
        [
          s("Use AI Search and KB scoping to provide the agent only the relevant, approved procedures."),
        ],
        [
          s("Prefer structured KB: prerequisites, steps, escalation. Agents can follow structured runbooks more reliably."),
        ],
        [
          s("Treat KB lifecycle as agent safety. Retire stale procedures; otherwise agents will execute outdated actions."),
        ],
      ],
      workflowSteps: [
        "Create an 'Agent Runbooks' KB category.",
        "Require each tool to reference a KB procedure id.",
        "Add 'KB citation required' rule in agent instructions for actions.",
      ],
      example: {
        title: "Agent refused without KB evidence",
        body: "When asked to run an unfamiliar remediation, agent searched KB, found none, and escalated. This prevented improvisation and built trust with operations teams.",
      },
    }),
    buildGuideSection({
      id: "state-management",
      number: "5.5",
      title: "State management in multi-step tasks",
      subtitle: "Tracking progress through a complex workflow",
      takeaway:
        "State should be explicit: define stages, store current stage on records, and ensure actions are idempotent. Agents must be resumable.",
      why: "Multi-step agents fail when they forget what they already did or repeat actions under retries.",
      paragraphs: [
        [
          s("Use a stage model: triage → diagnose → propose → approve → execute → verify → close. Store stage as a field."),
        ],
        [
          s("Idempotency: tools should be safe to retry (no duplicate tasks). Use idempotency keys and 'already done' checks."),
        ],
        [
          s("Resumability: if the agent stops, a human or another run should resume from stored state, not restart from scratch."),
        ],
      ],
      workflowSteps: [
        "Define state machine states for your POC agent.",
        "Add a state field to agent-run record.",
        "Ensure every tool checks state before acting.",
      ],
      example: {
        title: "No duplicate tasks under retries",
        body: "Agent retried 'CreateTask' after a timeout. Idempotency key prevented duplicates. State remained consistent and audit clean.",
      },
    }),
    buildGuideSection({
      id: "memory-contamination",
      number: "5.6",
      title: "Memory contamination",
      subtitle: "Stale state risks and reset design",
      takeaway:
        "Stale or incorrect memory causes repeated wrong actions. You need TTLs, refresh rules, and reset/rollback mechanisms for memory stores.",
      why: "Agents that 'remember' wrong facts become dangerous. Memory hygiene is safety hygiene.",
      paragraphs: [
        [
          s("Risks: outdated routing maps, stale incident context, wrong CI relationships. If memory isn’t refreshed, agents act on yesterday’s truth."),
        ],
        [
          s("Design controls: TTL on memory entries, version tags, and explicit refresh steps (re-query facts before action)."),
        ],
        [
          s("Provide reset tools: clear session state, invalidate cached facts, and force re-grounding on current records."),
        ],
      ],
      workflowSteps: [
        "Add TTL field to long-term memory entries.",
        "Force pre-action refresh for critical decisions.",
        "Implement 'ResetAgentState' admin action.",
      ],
      example: {
        title: "Stale CI mapping fixed with TTL",
        body: "Agent used old CI mapping and routed incorrectly. Adding TTL and refresh-before-route fixed it. Memory became a controlled dataset, not a scrapbook.",
      },
    }),
    buildGuideSection({
      id: "memory-patterns",
      number: "5.7",
      title: "Memory design patterns",
      subtitle: "Three architectures and when to use each",
      takeaway:
        "Common patterns: (1) KB-first retrieval memory, (2) record-backed episodic + summaries, (3) curated fact tables. Most systems use all three with clear boundaries.",
      why: "Picking one memory layer leads to either high cost (prompt stuffing) or high risk (unbounded memory).",
      paragraphs: [
        [
          x("KB-first", "Best for runbooks and policy."),
          s(" "),
          x("Episodic logs", "Best for audit and learning."),
          s(" "),
          x("Fact tables", "Best for stable mappings and preferences."),
        ],
        [
          s("Design rule: policy lives in KB, state lives on records, facts live in tables. Avoid mixing them."),
        ],
        [
          s("Keep memory minimal. If a human wouldn’t maintain it, an agent shouldn’t either."),
        ],
      ],
      workflowSteps: [
        "For your use case, classify each needed 'memory' as KB, state, or fact.",
        "Create corresponding store and retention policy.",
        "Add a memory audit checklist to quarterly governance.",
      ],
      example: {
        title: "Memory layering reduced token costs",
        body: "Moving large repeated context into a facts table cut prompt size dramatically while increasing correctness — because the agent queried only what it needed.",
      },
    }),
    buildGuideSection({
      id: "pdi-memory-walkthrough",
      number: "5.8",
      title: "Implementation walkthrough",
      subtitle: "Adding persistent memory to an agent on PDI",
      takeaway:
        "PDI memory lab: create agent-run log table → store session summary and tool outcomes → add a small facts table (routing map) → retrieve it during runs with TTL.",
      why: "This is where agent demos become 'real systems' — resumable, auditable, and cheaper to run.",
      paragraphs: [
        [s("Step 1: Create agent-run log table with run_id, stage, evidence, and outcome fields.")],
        [s("Step 2: Store a session summary to incident field or agent-run record after each stage.")],
        [s("Step 3: Create a small fact table: service→assignment mapping with TTL.")],
        [s("Step 4: Tool: 'GetRoutingFact' queries the table; agent uses it instead of guessing.")],
        [s("Step 5: Demonstrate resume: stop run mid-way; restart from stored stage.")],
      ],
      workflowSteps: [
        "Create 10 incidents; run triage agent with summary stored.",
        "Modify one mapping fact; show agent picks new mapping after refresh.",
        "Verify audit logs show what memory was used in decisions.",
      ],
      artifact: {
        id: "agent-run-table-schema",
        title: "Agent-run table schema (starter)",
        description: "Minimal fields for auditable memory/state.",
        content:
          `Fields:\n- run_id (string)\n- record_id (reference)\n- stage (choice)\n- summary (string)\n- tool_calls (json/text)\n- approvals (json/text)\n- outcome (choice)\n- started_at / ended_at\n\nRules:\n- Store evidence references (record ids, KB ids)\n- Redact secrets\n- TTL for cached facts`,
      },
    }),
  ],
};

