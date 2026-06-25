import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_06_HITL: GuideConcept = {
  number: 6,
  title: "Human-in-the-Loop Design",
  subtitle:
    "Approval gates, escalation, confidence thresholds, review queues, audit trails, and autonomy progression",
  sections: [
    buildGuideSection({
      id: "why-not-full-autonomy",
      number: "6.1",
      title: "Why full autonomy is rarely right",
      subtitle: "Trust, risk, and compliance reasons for human checkpoints",
      takeaway:
        "Full autonomy is appropriate only for low-risk, reversible tasks with strong monitoring. Most enterprise actions require human checkpoints to satisfy safety, compliance, and user trust.",
      why: "This is the core agent design truth. Teams that ignore it ship the first agent incident.",
      paragraphs: [
        [
          s("Autonomy raises the cost of mistakes: wrong change, wrong comms, wrong access grant. Human checkpoints convert catastrophic errors into reviewable drafts."),
        ],
        [
          s("Compliance requires traceability: who approved what, based on what evidence. HITL creates that chain."),
        ],
        [
          s("Trust grows through progressive autonomy: users accept automation when it’s transparent, consistent, and reversible."),
        ],
      ],
      workflowSteps: [
        "Classify actions into low/medium/high risk.",
        "Require HITL for high risk; suggest-only for medium.",
        "Prove safety with metrics before increasing autonomy.",
      ],
      example: {
        title: "Draft-first comms built trust",
        body: "Comms agent drafted updates; humans approved sends. After 3 months with zero incidents and high adoption, autonomy expanded to internal-only posts while external remained approval-gated.",
      },
    }),
    buildGuideSection({
      id: "approval-gate-patterns",
      number: "6.2",
      title: "Approval gate patterns",
      subtitle: "Four ways to insert a human decision into an agent workflow",
      takeaway:
        "Common gate patterns: (1) approve tool call, (2) approve state transition, (3) approve output content, (4) approve plan before execution.",
      why: "Gates are architecture, not bureaucracy. The right gate location preserves speed and safety.",
      paragraphs: [
        [
          x("Tool-call approval", "Human approves a specific action (e.g., execute change)."),
          s(" "),
          x("State approval", "Human approves state transitions (resolve/close)."),
        ],
        [
          x("Content approval", "Human approves customer-facing text."),
          s(" "),
          x("Plan approval", "Human approves the sequence before execution."),
        ],
        [
          s("Design tip: approve plans for complex tasks, approve actions for risky tasks, approve content for external comms."),
        ],
      ],
      workflowSteps: [
        "Pick gate pattern per tool/action type.",
        "Encode gates in Flow tools and review queues.",
        "Test: ensure agent stops at gate and does not bypass.",
      ],
      example: {
        title: "Plan approval for remediation sequence",
        body: "Agent proposed steps to remediate latency. Human approved plan; agent executed steps using tools with narrower approvals. Faster than approving each micro-step while still safe.",
      },
    }),
    buildGuideSection({
      id: "exception-escalation",
      number: "6.3",
      title: "The exception escalation design",
      subtitle: "How agents recognise when they should stop and ask",
      takeaway:
        "Agents must escalate when evidence is insufficient, policy is unclear, tools fail, or user intent is risky. Escalation is a success path, not a failure.",
      why: "Agents that never escalate are unsafe. Agents that escalate too often are useless. Design the boundary explicitly.",
      paragraphs: [
        [
          s("Escalation triggers: missing KB, low confidence, conflicting signals, repeated tool errors, or forbidden requests."),
        ],
        [
          s("Escalation output should include structured evidence: what was tried, what was found, and what decision is needed."),
        ],
        [
          s("Provide escalation destinations by domain: IAM queue, change manager, HR specialist, incident commander."),
        ],
      ],
      workflowSteps: [
        "Define escalation triggers and routes per agent.",
        "Implement 'AskHuman' tool that creates a review task with evidence bundle.",
        "Measure escalation rate and refine thresholds.",
      ],
      example: {
        title: "Escalation prevented risky access grant",
        body: "User asked for elevated access. Agent lacked evidence of approval. It escalated to IAM approval queue with context instead of granting access. That is correct behavior.",
      },
    }),
    buildGuideSection({
      id: "confidence-thresholds",
      number: "6.4",
      title: "Confidence thresholds",
      subtitle: "Triggering human review automatically based on confidence",
      takeaway:
        "Use confidence bands: high-confidence actions can be automated (if low risk), medium requires review, low requires escalation or question. Confidence must be tied to risk.",
      why: "Thresholding prevents agents from acting on weak signals and reduces manual review load on safe actions.",
      paragraphs: [
        [
          s("Combine model confidence with action risk: a high confidence on a high-risk action still needs approval."),
        ],
        [
          s("Calibrate with evaluation data: measure precision at thresholds for routing, dedup, and recommendations."),
        ],
        [
          s("Log confidence and threshold decisions for audit and tuning."),
        ],
      ],
      workflowSteps: [
        "Define thresholds per action type (tagging vs closing incident).",
        "Validate thresholds on historical test set.",
        "Deploy thresholds with monitoring and review feedback.",
      ],
      example: {
        title: "Auto-route vs human-close",
        body: "Agent auto-routed incidents above threshold but always required human approval to close. This balanced speed and safety.",
      },
    }),
    buildGuideSection({
      id: "review-queue",
      number: "6.5",
      title: "The review queue",
      subtitle: "Designing the human interface for reviewing and approving actions",
      takeaway:
        "Review queues must be fast: clear proposed action, evidence, risk, and one-click approve/reject with reason tags — otherwise humans become bottlenecks and bypass happens.",
      why: "HITL succeeds only if the human experience is excellent. Poor review UX kills adoption.",
      paragraphs: [
        [
          s("Show: proposed tool call, affected records, evidence links, confidence, and rollback plan. Hide noise."),
        ],
        [
          s("Collect structured reasons for reject/override — these become training data for improving tools and instructions."),
        ],
        [
          s("SLA: review queue needs an SLA. If approvals take days, agents are useless for real operations."),
        ],
      ],
      workflowSteps: [
        "Define review queue UI fields and one-click actions.",
        "Set SLA for approvals by risk tier.",
        "Monitor approval throughput and backlog.",
      ],
      example: {
        title: "Approval SLA made agents viable",
        body: "A comms agent required approval. With a 15-minute SLA and one-click approve, comms improved. Without SLA, approvals lagged and users reverted to manual comms.",
      },
    }),
    buildGuideSection({
      id: "audit-trail",
      number: "6.6",
      title: "Audit trail design",
      subtitle: "What to log, how to log it, auditor-ready evidence",
      takeaway:
        "Audit trails for agents must record: who triggered the run, what tools were called, what approvals occurred, what data was accessed, and what changes were made — exportable for auditors.",
      why: "Agents will be audited. If you can’t prove control, you can’t scale autonomy.",
      paragraphs: [
        [
          s("Log structure: run id, timestamps, tool calls, parameters (redacted), outputs, approval decisions, and final outcome. Link to records."),
        ],
        [
          s("Retention and privacy: store minimal necessary content; redact secrets; align with GDPR/HR retention policies."),
        ],
        [
          s("Make it exportable: auditors want CSV/PDF snapshots. Design for evidence extraction early."),
        ],
      ],
      workflowSteps: [
        "Create audit evidence checklist for agent runs.",
        "Implement logging in tool layer and coordinator.",
        "Run a mock audit on 20 agent actions before production expansion.",
      ],
      example: {
        title: "Audit passed due to structured logs",
        body: "Auditor asked: who approved external status posts? Logs showed approval events and evidence links per post. Control passed cleanly.",
      },
    }),
    buildGuideSection({
      id: "communicating-actions",
      number: "6.7",
      title: "Communicating agent actions to users",
      subtitle: "Transparency that builds trust",
      takeaway:
        "Agents must be transparent: what they did, why, and what evidence was used. Users trust systems that explain and allow correction.",
      why: "Opacity creates fear. Transparency creates adoption and better feedback loops.",
      paragraphs: [
        [
          s("Provide action summaries on the record: ‘Agent routed to Network because CI=VPN-GW and similar incidents show pattern.’"),
        ],
        [
          s("Allow override and feedback. Users need the ability to correct and improve the system."),
        ],
        [
          s("Avoid anthropomorphism. Treat the agent as a system making recommendations under policy."),
        ],
      ],
      workflowSteps: [
        "Add an 'Agent Actions' related list to records.",
        "Include explanation and evidence links.",
        "Capture user feedback tags for tuning.",
      ],
      example: {
        title: "Transparent routing increased trust",
        body: "Agents initially ignored recommendations. Adding short explanations and evidence links increased adoption because humans understood the reasoning and could verify quickly.",
      },
    }),
    buildGuideSection({
      id: "autonomy-progression",
      number: "6.8",
      title: "The autonomy progression",
      subtitle: "Start conservative and expand as trust is established",
      takeaway:
        "Autonomy progression is a roadmap: read-only → draft-only → approval-gated writes → limited autonomous writes → broader autonomy. Each step requires metrics and safety proof.",
      why: "This is how you scale agentic AI without getting burned.",
      paragraphs: [
        [
          s("Each progression step requires: monitoring, low error rate, clear rollback, and a trained human review cohort."),
        ],
        [
          s("Use measurable gates: precision, override rate, incident rate, audit findings. No metrics, no autonomy expansion."),
        ],
        [
          s("Document progression in governance policy and communicate to stakeholders to set expectations."),
        ],
      ],
      workflowSteps: [
        "Define progression levels for your org and domains (IT/HR/CSM).",
        "Set exit criteria metrics for each level.",
        "Review quarterly and expand autonomy only if criteria met.",
      ],
      example: {
        title: "Autonomy expanded safely",
        body: "After 12 weeks, triage agent achieved high precision and low overrides. Autonomy expanded to auto-tag and auto-route, but not auto-close. Trust increased steadily with no major incidents.",
      },
    }),
  ],
};

