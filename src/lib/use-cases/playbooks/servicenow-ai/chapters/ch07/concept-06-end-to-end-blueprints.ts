import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_06_BLUEPRINTS: GuideConcept = {
  number: 6,
  title: "End-to-end Workflow Blueprints",
  subtitle:
    "Reference architectures you can adapt: incident, requests, vuln mgmt, onboarding, problem mgmt, renewals, exec reporting",
  sections: [
    buildGuideSection({
      id: "blueprint-incident",
      number: "6.1",
      title: "Blueprint 1: AI-driven incident management",
      subtitle:
        "Creation → routing → assist → resolution with AI at every step",
      takeaway:
        "Best incident blueprint: VA intake + AI Search deflection → PI routing with confidence gating → Now Assist summaries/drafts → Flow policy enforcement → agentic escalation for coordination (optional).",
      why: "This blueprint is the backbone of most ServiceNow AI programs. It ties together Chapters 2–6 into one operational system.",
      paragraphs: [
        [
          s("Intake: Virtual Agent or portal search; deflect when possible; create incident when not. Routing: PI classification with decision table policy."),
        ],
        [
          s("Assist: Now Assist summarises threads and drafts comms; AI Search retrieves similar incidents/KB. Execute: Flow updates, notifications, approvals."),
        ],
        [
          s("Measure: containment (portal) and MTTR (agent) with audit logs and override capture."),
        ],
      ],
      workflowSteps: [
        "Define 5 intents for intake and 3 routing groups.",
        "Implement PI routing + confidence gating.",
        "Add summaries and KB recommendations; track metrics.",
      ],
      example: {
        title: "Layered incident system",
        body: "AI reduced triage and scroll-back time while Flow preserved policy. Over time, retraining and knowledge flywheel increased automation coverage safely.",
      },
    }),
    buildGuideSection({
      id: "blueprint-requests",
      number: "6.2",
      title: "Blueprint 2: intelligent service request fulfillment",
      subtitle:
        "NLU intake → AI routing → automated fulfillment",
      takeaway:
        "Request fulfillment blueprint: NLU captures intent + entities → decision table chooses catalog item → Flow provisions via IntegrationHub → exceptions route to humans → analytics improve taxonomy.",
      why: "Requests are high volume and often deterministic, making them ideal for AI-augmented automation.",
      paragraphs: [
        [
          s("Use scripted topics for deterministic steps; use GenAI only for explanation and guidance."),
        ],
        [
          s("Provisioning uses IntegrationHub spokes and approvals. AI selects the right workflow; deterministic steps execute it."),
        ],
        [
          s("Measure: completion rate, exception rate, and time-to-fulfillment."),
        ],
      ],
      workflowSteps: [
        "Map intents to catalog items using decision tables.",
        "Automate provisioning via spokes with rollback and approvals.",
        "Track exceptions and add KB or entity improvements.",
      ],
      example: {
        title: "Access request automation",
        body: "VA captured app + role entity; decision table launched correct catalog item; Flow provisioned in IAM tool; exceptions routed to IAM queue.",
      },
    }),
    buildGuideSection({
      id: "blueprint-vuln",
      number: "6.3",
      title: "Blueprint 3: automated vulnerability management",
      subtitle:
        "Alert ingestion → risk scoring → ticketing → tracking",
      takeaway:
        "Vuln blueprint: ingest scanner events → normalize → score risk (rules + ML) → create tasks → route to owning teams → dashboards for SLA and exposure.",
      why: "Vulnerability work is noisy and prioritization-heavy — perfect for automation with measurable outcomes.",
      paragraphs: [
        [
          s("Use IntegrationHub to ingest scanner data. Use decision tables for policy thresholds. Use ML to prioritize based on history and asset criticality."),
        ],
        [
          s("Agentic layer can propose remediation plans and coordinate comms, but approvals remain for production changes."),
        ],
        [
          s("Measure: time-to-triage, SLA compliance, and reduced false positives."),
        ],
      ],
      workflowSteps: [
        "Normalize vuln events into a standard record.",
        "Score risk and route to owning team with policy gates.",
        "Track remediation progress and exceptions.",
      ],
      example: {
        title: "Noise reduced, focus increased",
        body: "Automation created fewer, higher-quality tasks with clear priority rationale. Teams spent time fixing, not triaging.",
      },
    }),
    buildGuideSection({
      id: "blueprint-onboarding",
      number: "6.4",
      title: "Blueprint 4: AI-powered onboarding workflow",
      subtitle:
        "Multi-system provisioning with agent orchestration",
      takeaway:
        "Onboarding blueprint: HR case triggers → document extraction (forms) → decision table selects provisioning package → IntegrationHub provisions accounts → agent drafts comms and status → exceptions route to humans.",
      why: "Onboarding is cross-system, repetitive, and measurable — a prime candidate for AI-augmented workflow automation.",
      paragraphs: [
        [
          s("Document Intelligence extracts form data. Flow orchestrates provisioning across IAM, email, apps. Agents may coordinate reminders and comms with approvals."),
        ],
        [
          s("Use idempotency and rollback: provisioning steps must be safe to retry and reversible when hires cancel."),
        ],
        [
          s("Measure: time-to-provision, exception rate, and employee satisfaction."),
        ],
      ],
      workflowSteps: [
        "Define onboarding data schema and extraction fields.",
        "Create provisioning subflows per role package.",
        "Add exception handling and re-run logic.",
      ],
      example: {
        title: "Provisioning became predictable",
        body: "Most onboarding tasks executed automatically; exceptions were clearly queued. HR visibility improved through dashboards and consistent comms drafts.",
      },
    }),
    buildGuideSection({
      id: "blueprint-problem",
      number: "6.5",
      title: "Blueprint 5: proactive problem management",
      subtitle:
        "AIOps correlation feeding into problem investigation",
      takeaway:
        "Problem blueprint: event correlation clusters recurring issues → similarity links incidents → create problem records → Now Assist drafts RCA hypothesis → humans validate and publish known errors.",
      why: "Problem management becomes viable when clustering and correlation reduce the manual effort of finding patterns.",
      paragraphs: [
        [
          s("AIOps groups alert storms and recurring clusters. Similarity links incidents. Flow opens a problem record when thresholds hit."),
        ],
        [
          s("Now Assist drafts hypotheses and timelines; humans validate and publish known error records."),
        ],
        [
          s("Measure: reduction in repeat incidents and faster time-to-root-cause."),
        ],
      ],
      workflowSteps: [
        "Define thresholds for opening problem records (N incidents in window).",
        "Automate linking and evidence gathering.",
        "Publish known errors and monitor reuse.",
      ],
      example: {
        title: "Recurring incidents fell",
        body: "By converting clusters into problem records with draft RCA, teams reduced repeat incidents because fixes became systematic rather than ticket-by-ticket.",
      },
    }),
    buildGuideSection({
      id: "blueprint-renewals",
      number: "6.6",
      title: "Blueprint 6: contract renewal automation",
      subtitle:
        "Document Intelligence reads contracts and triggers renewal workflows",
      takeaway:
        "Renewal blueprint: ingest contract PDFs → extract renewal dates/terms → create renewal tasks → route to owners → GenAI drafts renewal comms → approvals for legal sends.",
      why: "Renewals are deadline-driven and document-heavy — automation prevents missed renewals and reduces manual tracking.",
      paragraphs: [
        [
          s("Document Intelligence extracts renewal fields; Flow creates tasks and reminders; IntegrationHub updates CRM; GenAI drafts internal summaries and emails."),
        ],
        [
          s("Governance: legal approval is mandatory for external contract comms. Draft-only is safe; send requires review."),
        ],
        [
          s("Measure: renewals completed on time and reduction in manual tracking effort."),
        ],
      ],
      workflowSteps: [
        "Define contract extraction fields and validation rules.",
        "Create renewal task workflow with SLA reminders.",
        "Add approval gates for external comms.",
      ],
      example: {
        title: "Missed renewals eliminated",
        body: "Automation extracted renewal dates and created tasks well ahead of deadlines. Stakeholders acted earlier, reducing late renewals and penalties.",
      },
    }),
    buildGuideSection({
      id: "blueprint-exec-reporting",
      number: "6.7",
      title: "Blueprint 7: executive status reporting",
      subtitle:
        "Data aggregation → narrative generation → distribution",
      takeaway:
        "Exec reporting blueprint: aggregate KPIs and record summaries → generate narrative with citations → distribute via email/Teams → store report on record for audit.",
      why: "Executives need narratives, not dashboards. AI can draft narratives quickly if grounded and versioned.",
      paragraphs: [
        [
          s("Retrieve KPIs from PA, incidents, changes, and risks. Generate narrative with strict template and citations."),
        ],
        [
          s("Approval: exec reports should be reviewed by owners before distribution. Draft-only generation is safe; auto-send requires policy."),
        ],
        [
          s("Measure: time saved and decision quality (stakeholder feedback)."),
        ],
      ],
      workflowSteps: [
        "Define report template and data sources.",
        "Generate draft weekly; require owner approval.",
        "Store report for audit and comparison over time.",
      ],
      example: {
        title: "Weekly report created in minutes",
        body: "Instead of manual slide updates, the system generated a grounded narrative and attached it to a record. Leaders got consistent updates with less effort.",
      },
    }),
    buildGuideSection({
      id: "blueprint-anatomy",
      number: "6.8",
      title: "Blueprint anatomy",
      subtitle:
        "How to read and adapt each blueprint for your environment",
      takeaway:
        "Every blueprint has the same anatomy: entry point, retrieval, decisioning, execution, human checkpoints, observability, and metrics. Adapt by swapping tools and policy gates, not by rewriting the whole pattern.",
      why: "Blueprints become reusable when you can adapt them systematically instead of copying blindly.",
      paragraphs: [
        [
          s("Anatomy: Trigger → Context assembly → AI step (optional) → Confidence gate → Deterministic execution → Approval → Logging → Metrics."),
        ],
        [
          s("Adaptation steps: identify your record model, your tools (spokes/flows), and your governance constraints."),
        ],
        [
          s("Start with one blueprint and one domain. Prove it, then expand horizontally."),
        ],
      ],
      workflowSteps: [
        "For your target blueprint, write its anatomy in 7 bullets.",
        "Map each bullet to ServiceNow components (Flow, PI, VA, spokes).",
        "Define the safety pack: approvals, logs, rollback, and kill switches.",
      ],
      artifact: {
        id: "blueprint-anatomy-template",
        title: "Blueprint anatomy template",
        description: "Copy/paste into architecture docs.",
        content:
          `## Blueprint anatomy\n1) Trigger:\n2) Context:\n3) AI/ML step:\n4) Confidence gating:\n5) Deterministic actions:\n6) Human approvals:\n7) Observability + metrics:\n\nNotes:\n- Data boundaries:\n- Rollback plan:\n- Degraded mode:`,
      },
    }),
  ],
};

