import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_01_AGENTIC_MEANING: GuideConcept = {
  number: 1,
  title: "What Agentic AI Means in ServiceNow",
  subtitle:
    "Agents are observe-reason-act systems with tool access — not chatbots, not scripts, and not Flow Designer with a new name",
  sections: [
    buildGuideSection({
      id: "agent-definition",
      number: "1.1",
      title: "The definition of an AI agent",
      subtitle: "The observe–reason–act loop and how it differs from automation",
      takeaway:
        "An AI agent is an LLM-driven system that observes state, reasons about a goal, and calls tools to act — repeating the loop until completion or escalation.",
      why: "If you can’t articulate the loop, you can’t design guardrails. Interviewers use this as a seniority filter.",
      paragraphs: [
        [
          x("Observe", "Read records, context, knowledge, telemetry."),
          s(" → "),
          x("Reason", "Plan next step, ask clarifying questions, choose tools."),
          s(" → "),
          x("Act", "Call tools: flows, scripts, integrations, updates."),
          s(" → "),
          x("Verify", "Check outcome, log, and continue or stop."),
        ],
        [
          s("Automation executes predetermined steps. Agents choose steps dynamically based on context — which is why they are powerful and risky."),
        ],
        [
          s("ServiceNow’s advantage is that the loop can be anchored on a record (incident/case/change) with audit trails and ACL boundaries."),
        ],
      ],
      workflowSteps: [
        "Pick one workflow (incident triage). Write Observe inputs, Act tools, and Stop conditions.",
        "Define the first human checkpoint (approval or review queue).",
        "Decide what must be deterministic rules vs agent judgment.",
      ],
      example: {
        title: "Why an agent beats a static flow",
        body: "A flow can route tickets, but it cannot decide which of 12 diagnostics to run based on the symptom text and CI history. An agent can choose the right diagnostic sequence — then still hand off for approval before risky actions.",
      },
    }),
    buildGuideSection({
      id: "step-change",
      number: "1.2",
      title: "Why agentic AI is a step change",
      subtitle:
        "The capability gap between a chatbot and an agent that can execute",
      takeaway:
        "Chatbots answer. Agents execute. The step change is tool calling + iterative planning + outcome verification inside real systems.",
      why: "Most orgs buy GenAI expecting autonomy. This section makes the autonomy real — and explains why governance must evolve.",
      paragraphs: [
        [
          s("A chatbot can draft a resolution note. An agent can: create a task, trigger a diagnostic flow, open a change, notify stakeholders, and update the incident — all governed."),
        ],
        [
          s("Agents convert language into workflow. That means they touch real systems: tickets, CMDB, approvals, integrations. The cost of error rises sharply."),
        ],
        [
          s("Therefore the deployment pattern changes: you start with read-only agents, then add limited writes, then expand autonomy only after monitoring proves safety."),
        ],
      ],
      workflowSteps: [
        "List actions in your process that are safe to automate vs require approval.",
        "Identify tool surface needed for each action (Flow, IntegrationHub, script).",
        "Define kill switch and fallback manual process before rollout.",
      ],
      example: {
        title: "From assist to act in IT operations",
        body: "Now Assist drafted comms (assist). The agent then executed: created remediation task, assigned to right team, updated status page draft — but required approval before posting externally. The “act” layer created the step change.",
      },
    }),
    buildGuideSection({
      id: "servicenow-agent-architecture",
      number: "1.3",
      title: "The ServiceNow agentic architecture",
      subtitle: "Agents, tools, memory, and orchestration — how it fits together",
      takeaway:
        "ServiceNow agentic architecture is orchestration over platform tools: agents call governed tools (flows/spokes/scripts), use platform data as context, and store state as records for audit and continuity.",
      why: "Architects must explain where state lives and how actions are constrained — otherwise agents become “magic that could do anything.”",
      paragraphs: [
        [
          s("Core pieces: "),
          x("agent", "Persona + instructions + policy."),
          s(", "),
          x("tools", "Callable actions with schemas and RBAC."),
          s(", "),
          x("memory/state", "Session context + record-backed persistence."),
          s(", "),
          x("orchestrator", "Coordinator logic, approvals, and monitoring."),
        ],
        [
          s("ServiceNow’s strength: tools are already enterprise-grade (Flow, IntegrationHub, approvals) and actions land on a record with audit logs."),
        ],
        [
          s("Design rule: store durable state in tables, not in “the agent’s brain.” If the session dies, you must be able to recover from records."),
        ],
      ],
      workflowSteps: [
        "Draw the agent stack for one use case: record → tools → approvals → logs.",
        "Decide where persistent memory lives (KB, custom table, task records).",
        "Define observability: what to log per tool call and decision.",
      ],
      example: {
        title: "Coordinator + tool layer",
        body: "Coordinator agent reads incident, calls ‘diagnostic flow’ tool, then calls ‘draft update’ tool, then routes to approval queue. The agent never writes directly to critical fields — it uses tools that enforce policy.",
      },
    }),
    buildGuideSection({
      id: "autonomy-spectrum",
      number: "1.4",
      title: "The spectrum of autonomy",
      subtitle:
        "Human-in-the-loop → supervised autonomy → fully autonomous — where each is appropriate",
      takeaway:
        "Autonomy is not a toggle. You choose it per action based on risk, reversibility, and cost of delay.",
      why: "Most agent failures come from giving autonomy where governance needed human checkpoints.",
      paragraphs: [
        [
          x("Human-in-the-loop", "Agent proposes; human approves every critical action."),
          s(" is default for HR, finance, and customer-facing comms."),
        ],
        [
          x("Supervised autonomy", "Agent executes low-risk actions; escalates on uncertainty."),
          s(" fits IT operations with strong runbooks and rollback paths."),
        ],
        [
          x("Fully autonomous", "Agent executes end-to-end without approval."),
          s(" is rare; limited to low-risk, reversible tasks with strong monitoring."),
        ],
      ],
      workflowSteps: [
        "Classify every tool action: reversible? external impact? regulated?",
        "Map each action to autonomy level and required evidence.",
        "Start conservative; increase autonomy only with measured safety proof.",
      ],
      example: {
        title: "Autonomy by action type",
        body: "Agent can auto-tag and route incidents (low risk), can propose change plan (medium), but must never approve production changes or send customer emails without approval (high).",
      },
    }),
    buildGuideSection({
      id: "what-agents-can-access",
      number: "1.5",
      title: "What agents can access in ServiceNow",
      subtitle:
        "Data, records, flows, and external systems available as tools",
      takeaway:
        "Agents access what you explicitly provide via tools: ServiceNow tables/records, Flow Designer subflows, IntegrationHub spokes, scripts, and approved external APIs.",
      why: "Capability comes from tool access. Security comes from tool scoping. Both are design choices.",
      paragraphs: [
        [
          s("Internal access: incidents, cases, CMDB, knowledge, catalog, change records — gated by ACL and tool definitions."),
        ],
        [
          s("External access: SaaS systems via IntegrationHub spokes or REST tools — gated by connection credentials and allowlists."),
        ],
        [
          s("Rule: don’t give direct table write access as a generic tool. Wrap writes behind purpose-built tools with schema validation and approvals."),
        ],
      ],
      workflowSteps: [
        "List required data and actions for your agent use case.",
        "Implement tools as wrappers with narrow scopes and schemas.",
        "Verify tool execution identity and role constraints.",
      ],
      example: {
        title: "Safe external integration",
        body: "Instead of letting an agent call any REST endpoint, the team created a “StatusPage_UpdateDraft” tool that only creates drafts, not publishes, and only for approved incidents.",
      },
    }),
    buildGuideSection({
      id: "trust-boundary",
      number: "1.6",
      title: "The trust boundary",
      subtitle:
        "What an agent should never do without human approval",
      takeaway:
        "Never allow autonomous actions that are irreversible, regulated, customer-facing, or privilege-changing without a human checkpoint.",
      why: "This is how you avoid the first real agent incident in your company.",
      paragraphs: [
        [
          s("Hard boundaries: "),
          x("money", "Refunds, payroll, invoices."),
          s(", "),
          x("identity", "Access grants, role changes, password resets beyond policy."),
          s(", "),
          x("customer comms", "Publishing to portals, emails, status pages."),
          s(", "),
          x("production changes", "Deploys, firewall rules, database writes."),
        ],
        [
          s("Soft boundaries: high-uncertainty actions, ambiguous intent, missing evidence. Agents must ask or stop."),
        ],
        [
          s("Design: approvals + review queue + audit logs + rollback. If you can’t roll back, you can’t automate."),
        ],
      ],
      workflowSteps: [
        "Write “never without approval” list in governance policy.",
        "Enforce via tool allowlists and approval gates.",
        "Red-team prompts that try to cross boundaries.",
      ],
      example: {
        title: "Prevented privilege escalation",
        body: "Agent tried to grant admin role as part of “fix access.” Tool schema rejected role changes and escalated to IAM queue. The boundary prevented a security incident.",
      },
    }),
    buildGuideSection({
      id: "agentic-vs-rpa",
      number: "1.7",
      title: "Agentic AI vs RPA vs traditional automation",
      subtitle:
        "Fundamental differences and the decision framework",
      takeaway:
        "RPA clicks UIs deterministically. Flows execute deterministic logic. Agents choose actions dynamically using language understanding and tool calls — and require stronger governance.",
      why: "Stakeholders confuse these and make wrong investments. Architects clarify the boundaries.",
      paragraphs: [
        [
          x("Traditional automation", "Deterministic, auditable, brittle to change."),
          s(" is best when policy is known."),
        ],
        [
          x("RPA", "UI automation for systems without APIs."),
          s(" is a last resort; brittle but sometimes necessary."),
        ],
        [
          x("Agentic", "Adaptive, context-driven, tool-calling."),
          s(" is best for ambiguous workflows and long-tail problem solving — with human checkpoints."),
        ],
      ],
      workflowSteps: [
        "If task has stable rules → Flow.",
        "If task is UI-only with no API → RPA (carefully).",
        "If task requires judgment across tools → Agentic with guardrails.",
      ],
      example: {
        title: "Choosing the right approach",
        body: "Password reset: Flow automation. Vendor portal data pull: RPA. Major incident coordination: agentic (summarise, plan, coordinate tools) with approvals.",
      },
    }),
    buildGuideSection({
      id: "agentic-business-case",
      number: "1.8",
      title: "The business case for agentic AI",
      subtitle:
        "Quantified value and honest cost picture",
      takeaway:
        "Agentic ROI comes from reducing human coordination time, compressing triage cycles, and executing low-risk actions faster — offset by governance, monitoring, and tool engineering costs.",
      why: "Agentic programs fail when sold as “free labor.” They succeed when sold as “faster workflows with controlled risk.”",
      paragraphs: [
        [
          s("Value buckets: triage time reduced, fewer misroutes, faster comms, fewer duplicate incidents, and improved SLA compliance."),
        ],
        [
          s("Cost buckets: LLM usage, tool engineering, integration governance, audit logs, human review time, and incident response readiness."),
        ],
        [
          s("Honest model: start with one process and measure time saved per record. Scale only when metrics prove net benefit and safety."),
        ],
      ],
      workflowSteps: [
        "Choose one workflow with high coordination cost.",
        "Measure baseline human minutes per record.",
        "Pilot agent with approvals; measure net time saved and error rate.",
      ],
      example: {
        title: "Major incident comms ROI",
        body: "Agent drafted comms and updated timelines. Humans approved sends. Comms cadence improved and coordinator time dropped 30%, more than covering AI spend — because coordination time is expensive.",
      },
    }),
  ],
};

