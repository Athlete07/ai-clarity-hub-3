import { buildGuideSection, s } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_05_STAKEHOLDER_PROPOSALS: GuideConcept = {
  number: 5,
  title: "Proposing AI to Stakeholders",
  subtitle:
    "Discovery, business case, executive pitch, live demos, expectation management, risk handling, implementation proposals, and change management",
  sections: [
    buildGuideSection({
      id: "discovery-conversation",
      number: "5.1",
      title: "The discovery conversation",
      subtitle: "Identify the right AI use case by listening",
      takeaway:
        "Good discovery maps workflow pain to measurable outcomes. Don’t pitch AI; diagnose volume, friction, and risk — then propose the smallest AI intervention that changes outcomes.",
      why: "Stakeholders fund outcomes, not technology.",
      paragraphs: [[s("Focus questions: what is slow, what rework happens, what escalates, what causes risk, what data exists, and where humans get stuck.")]],
      workflowSteps: [
        "Collect 3 workflows with highest rework/escalations.",
        "Identify decision points where AI could help safely.",
        "Define baseline metrics before proposing solution.",
      ],
    }),
    buildGuideSection({
      id: "business-case-structure",
      number: "5.2",
      title: "The business case structure",
      subtitle: "Connect capability to outcome",
      takeaway:
        "A business case must include baseline → target KPIs, controls, costs, and rollout plan. Include governance artifacts to de-risk approval.",
      why: "Business cases fail when they are optimistic and control-free.",
      paragraphs: [[s("Include: scope, KPIs, baseline window, cost model, risks/mitigations, and phased rollout with gates.")]],
      workflowSteps: [
        "Define 3 headline metrics + spend attribution.",
        "Attach trust pack + eval plan + rollback plan.",
        "Commit to an operating cadence (monthly reviews).",
      ],
    }),
    buildGuideSection({
      id: "executive-pitch",
      number: "5.3",
      title: "The executive pitch",
      subtitle: "The 10-minute conversation that gets investment approved",
      takeaway:
        "Execs want: what changes, what it costs, and how risk is controlled. Lead with outcomes and governance; keep the tech secondary.",
      why: "Executives fund predictable systems, not uncertain experiments.",
      paragraphs: [[s("Pitch structure: pain → outcome → controls → phased plan → metrics → ask.")]],
      workflowSteps: [
        "Prepare a one-slide architecture diagram.",
        "Show baseline and target trend lines.",
        "State the guardrails and rollback explicitly.",
      ],
    }),
    buildGuideSection({
      id: "live-demo",
      number: "5.4",
      title: "The live demo",
      subtitle: "Demonstrate ServiceNow AI to non-platform audiences",
      takeaway:
        "Demos should show workflow outcomes: deflection, faster resolution, fewer escalations — plus safety gates and monitoring. Avoid feature tours.",
      why: "Feature tours don’t prove value or risk control.",
      paragraphs: [[s("Demo formula: 1 scenario, 1 baseline, 1 measurable improvement, 1 failure test, 1 governance artifact.")]],
      workflowSteps: [
        "Run a PDI POC with a scripted dataset.",
        "Demonstrate degraded mode and HITL approval.",
        "Show dashboards: latency, cost, and feedback.",
      ],
    }),
    buildGuideSection({
      id: "expectation-management",
      number: "5.5",
      title: "Managing expectations",
      subtitle: "Promises you should never make",
      takeaway:
        "Never promise perfect accuracy, full automation, or guaranteed deflection. Promise measurable improvement with controls, and define what happens when AI is uncertain.",
      why: "Overpromising causes trust collapse after the first failure.",
      paragraphs: [[s("Good framing: AI proposes, workflows enforce, humans approve high-risk actions, and we measure/iterate.")]],
      workflowSteps: [
        "Define acceptable error rate and error budget.",
        "Define what AI will not do (non-intended use).",
        "Communicate rollout as an iterative program, not a launch.",
      ],
    }),
    buildGuideSection({
      id: "risk-conversation",
      number: "5.6",
      title: "The risk conversation",
      subtitle: "Address objections before they become blockers",
      takeaway:
        "Proactively address: residency, PII, injection, bias, audit, and outages. Bring checklists and evidence, not reassurance.",
      why: "Risk objections appear late and derail programs if not handled early.",
      paragraphs: [[s("Bring Chapter 9 artifacts: data flow diagram, security checklist, SLOs, and incident response runbook.")]],
      workflowSteps: [
        "Run a security review pre-pilot.",
        "Define kill switch and rollback plan.",
        "Create an AI incident tabletop exercise.",
      ],
    }),
    buildGuideSection({
      id: "implementation-proposal",
      number: "5.7",
      title: "The implementation proposal",
      subtitle: "Turn a POC into a scoped implementation",
      takeaway:
        "A real proposal scopes capabilities, integrations, controls, and metrics. Include change management and operating cadence as deliverables.",
      why: "POCs die when there is no translation into a production plan.",
      paragraphs: [[s("Include: phases, dependencies, owners, risks, testing plans, and measurement plan.")]],
      workflowSteps: [
        "Define phases: pilot → scale → autonomy expansion.",
        "Define deliverables: dashboards, trust packs, eval packs.",
        "Define acceptance criteria and go-live gates.",
      ],
    }),
    buildGuideSection({
      id: "change-management",
      number: "5.8",
      title: "Change management for AI",
      subtitle: "People/process work that determines adoption",
      takeaway:
        "Adoption depends on trust and training: role-based enablement, clear UX labels, feedback loops, and continuous improvement cadence.",
      why: "Even great AI fails if users don’t trust it or understand how to use it.",
      paragraphs: [[s("Treat AI rollout like a product: onboarding, training, champions, feedback, and iterative improvements.")]],
      workflowSteps: [
        "Create training per role (agent, admin, leader).",
        "Implement feedback capture and monthly review.",
        "Publish a transparency guide: what AI does and doesn’t do.",
      ],
      artifact: {
        id: "stakeholder-proposal-pack",
        title: "Stakeholder proposal pack (starter)",
        description: "Use to move from discovery to approval.",
        content:
          `- 1-page business case (baseline → target)\n- Reference architecture diagram\n- Trust pack (data, controls, retention)\n- POC rubric scorecard + demo script\n- SLOs + monitoring dashboards\n- Phased rollout plan + change mgmt`,
      },
    }),
  ],
};

