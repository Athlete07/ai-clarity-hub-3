import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_07_POC_BLUEPRINT: GuideConcept = {
  number: 7,
  title: "Real-world Agent POC Blueprint",
  subtitle:
    "Choosing the first agent, PDI setup, triage + resolution + comms agents, orchestration, demo script, and proposal pack",
  sections: [
    buildGuideSection({
      id: "choose-first-agent",
      number: "7.1",
      title: "Choosing the right first agent",
      subtitle:
        "Criteria for a use case that produces a convincing demo",
      takeaway:
        "Your first agent should be high-volume, bounded, reversible, and measurable — with clear tool access and obvious human checkpoints.",
      why: "First impressions define the program. A risky or vague first agent becomes the story people repeat about why agents are unsafe.",
      paragraphs: [
        [
          s("Best first agents: triage (route/tag), comms drafting, duplicate linking, and runbook-guided diagnostics. Avoid payroll, access grants, and production changes."),
        ],
        [
          s("Success requires: a baseline metric, a review workflow, and a kill switch. Demos without governance don’t survive security review."),
        ],
        [
          s("Pick a use case where the human today spends time on coordination and searching — agents excel there."),
        ],
      ],
      workflowSteps: [
        "Score candidate use cases on: volume, risk, reversibility, measurability.",
        "Choose one with clear stop conditions and approval gates.",
        "Define baseline: minutes per record and error rate.",
      ],
      example: {
        title: "Triage agent as the perfect first win",
        body: "Triage is bounded and measurable. Even if wrong, humans can override. The value is immediate: less queue time and fewer misroutes.",
      },
    }),
    buildGuideSection({
      id: "pdi-setup",
      number: "7.2",
      title: "The PDI environment setup",
      subtitle:
        "Configuration steps before you start building",
      takeaway:
        "A credible PDI agent demo needs: sample incidents, KB runbooks, PI model (optional), Flow tools, roles, and logging tables — set up before the agent.",
      why: "Most POCs fail because the environment has no realistic data and no instrumented measurement.",
      paragraphs: [
        [
          s("Prepare: 20–50 synthetic incidents across categories; a small KB set of runbooks; basic Flow subflows as tools; and an agent-run log table."),
        ],
        [
          s("Define roles: pilot users, reviewers, admins. Do not test everything as admin."),
        ],
        [
          s("Enable observability: log every tool call and decision. POC without logs cannot be trusted."),
        ],
      ],
      workflowSteps: [
        "Create incidents and KB runbooks.",
        "Create Flow tools: route, create task, draft comms.",
        "Create review queue for approvals.",
      ],
      example: {
        title: "POC passed security because roles were realistic",
        body: "Testing with real pilot roles exposed ACL issues early. Security approved because the demo matched production constraints, not admin magic.",
      },
    }),
    buildGuideSection({
      id: "build-triage-agent",
      number: "7.3",
      title: "Building a triage agent",
      subtitle:
        "Reads new incidents, assesses them, and routes automatically",
      takeaway:
        "Triage agent: observe new incident → classify category/assignment (PI + heuristics) → tag and route with confidence bands → escalate ambiguous cases.",
      why: "This is the highest-ROI and safest first agent in ITSM.",
      paragraphs: [
        [
          s("Tools: read incident, search KB, get PI routing suggestion, update assignment group (scoped), create triage task for low confidence."),
        ],
        [
          s("Policies: never close incident; never change priority without approval; always log reasons and evidence."),
        ],
        [
          s("Metrics: time-to-assign, override rate, and misroute cost."),
        ],
      ],
      workflowSteps: [
        "Implement confidence bands: auto/suggest/triage.",
        "Add escalation on missing evidence.",
        "Run 20 incidents; calculate override rate.",
      ],
      example: {
        title: "Override rate as tuning lever",
        body: "High override in one category signaled taxonomy confusion. Fixing labels improved PI and reduced triage overrides without changing the agent logic.",
      },
    }),
    buildGuideSection({
      id: "build-resolution-agent",
      number: "7.4",
      title: "Building a resolution agent",
      subtitle:
        "Attempts to resolve known issue types with limited autonomy",
      takeaway:
        "Resolution agent should be runbook-driven: retrieve known procedure → execute safe diagnostic steps → propose remediation → require approval for risky writes.",
      why: "Resolution is where autonomy can create real value — and real risk. Runbook grounding is mandatory.",
      paragraphs: [
        [
          s("Start with one known issue type (e.g., VPN profile reset) and one diagnostic tool. Expand slowly."),
        ],
        [
          s("Tools must be reversible. If not reversible, require approval and rollback plan."),
        ],
        [
          s("Measure: time-to-resolution and false fixes (reopen rate)."),
        ],
      ],
      workflowSteps: [
        "Create KB runbook and tool set for one issue type.",
        "Implement draft remediation plan output.",
        "Require approval for remediation execution tool.",
      ],
      example: {
        title: "Known issue resolution with approvals",
        body: "Agent identified known VPN issue, drafted steps, asked for approval to run remediation tool. Human approved; fix succeeded. No risky autonomy, real value.",
      },
    }),
    buildGuideSection({
      id: "build-comms-agent",
      number: "7.5",
      title: "Building a communication agent",
      subtitle:
        "Drafts and sends stakeholder updates throughout an incident",
      takeaway:
        "Comms agent drafts status updates, timelines, and stakeholder messages — with approval gates for external sends and consistent templates for credibility.",
      why: "Comms is coordination-heavy and perfect for agent parallelism — and it’s safer when draft-only.",
      paragraphs: [
        [
          s("Inputs: incident timeline, impacted services, known status, next update time. Outputs: update draft with tone and audience parameter."),
        ],
        [
          s("Governance: external sends require approval; internal updates may become semi-autonomous later."),
        ],
        [
          s("Measure: cadence, quality feedback, and coordinator time saved."),
        ],
      ],
      workflowSteps: [
        "Create 2 templates: internal ops update and external customer update.",
        "Build draft-only tools to Slack/Email/StatusPage.",
        "Add approval gate and audit logs for every send.",
      ],
      example: {
        title: "Cadence improved without risk",
        body: "Comms agent maintained 30-minute update cadence with drafts; humans approved and posted. Stakeholders trusted updates because they were consistent and evidence-linked.",
      },
    }),
    buildGuideSection({
      id: "connect-three-agents",
      number: "7.6",
      title: "Connecting the three agents",
      subtitle:
        "Orchestration that chains triage, resolution, and communication",
      takeaway:
        "Coordinator orchestrates: triage routes → resolution attempts runbook actions → comms drafts updates — with shared state and approval checkpoints.",
      why: "This is the demo that makes agentic AI tangible: a workflow that moves across roles and systems safely.",
      paragraphs: [
        [
          s("State: single incident sys_id + agent-run records. Handoffs include evidence and current stage."),
        ],
        [
          s("Parallelism: resolution gathers evidence while comms drafts update. Coordinator merges results and posts on approval."),
        ],
        [
          s("Stop conditions: if confidence low or tool failures occur, escalate to human and halt automation."),
        ],
      ],
      workflowSteps: [
        "Implement coordinator with three stages and handoff schema.",
        "Ensure comms tool is draft-only.",
        "Run end-to-end scenario with approvals and logs.",
      ],
      example: {
        title: "End-to-end POC felt 'real'",
        body: "Stakeholders watched triage and comms happen in parallel while resolution gathered evidence. The system behaved safely and transparently — the demo turned into budget approval.",
      },
    }),
    buildGuideSection({
      id: "run-demo",
      number: "7.7",
      title: "Running and demonstrating the POC",
      subtitle:
        "Scenario, demo script, and metrics to highlight",
      takeaway:
        "A winning demo shows: governance, evidence, and measurable time saved — not just 'cool AI'. Show approvals, logs, and rollback readiness.",
      why: "Executives and security approve programs that look production-shaped.",
      paragraphs: [
        [
          s("Demo narrative: baseline pain → agent workflow → approvals → audit log → KPI improvement. Keep it under 12 minutes."),
        ],
        [
          s("Metrics: time-to-assign, time-to-first-update, coordinator minutes saved, override rate, false action rate."),
        ],
        [
          s("Show failure mode: induce tool failure and show safe escalation. This builds trust more than a perfect run."),
        ],
      ],
      workflowSteps: [
        "Prepare scripted incident scenarios.",
        "Prepare dashboards and log views.",
        "Rehearse safe-failure scenario.",
      ],
      artifact: {
        id: "agent-poc-demo-script",
        title: "Agent POC demo script (10–12 min)",
        description: "Use in steering committee demo.",
        content:
          `1) Baseline pain (1 min): triage delays + comms load\n2) Show triage agent (3 min): route + confidence band + override\n3) Show resolution agent (3 min): runbook retrieval + approval gate\n4) Show comms agent (2 min): draft update + approval + audit log\n5) Show safe failure (1 min): tool failure → escalation\n6) Close (1–2 min): metrics + next phase plan`,
      },
    }),
    buildGuideSection({
      id: "poc-to-proposal",
      number: "7.8",
      title: "Turning the POC into a proposal",
      subtitle:
        "Architecture doc, business case, and implementation plan",
      takeaway:
        "Translate POC into a proposal pack: target workflow, tool inventory, governance policy, rollout phases, and KPI model. The proposal is what gets funded.",
      why: "Most POCs die because they don’t become a plan. This section converts demo into roadmap.",
      paragraphs: [
        [
          s("Proposal sections: problem, scope, architecture, autonomy policy, security review, integration plan, monitoring plan, and KPI targets."),
        ],
        [
          s("Include autonomy progression and kill switch readiness. Security wants to see stop controls."),
        ],
        [
          s("Roadmap: Phase 1 read-only, Phase 2 approval-gated writes, Phase 3 limited autonomy. Tie each to measurable success criteria."),
        ],
      ],
      workflowSteps: [
        "Write 2-page architecture with diagrams and tool list.",
        "Write ROI model with conservative assumptions.",
        "Define 12-week implementation plan with milestones and gates.",
      ],
      example: {
        title: "POC became funded program",
        body: "Because the proposal included governance, monitoring, and phased autonomy, security and finance aligned. The POC turned into a 6-month implementation roadmap with clear gates.",
      },
    }),
  ],
};

