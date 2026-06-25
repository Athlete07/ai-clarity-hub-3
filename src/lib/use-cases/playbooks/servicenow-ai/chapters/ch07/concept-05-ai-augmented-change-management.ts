import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_05_AI_CHANGE_MANAGEMENT: GuideConcept = {
  number: 5,
  title: "AI-augmented Change Management",
  subtitle:
    "Risk prediction, impact assessment, CAB prep, conflict detection, post-change correlation, and dashboards",
  sections: [
    buildGuideSection({
      id: "change-problem",
      number: "5.1",
      title: "The change management problem",
      subtitle:
        "Why change is the highest-risk process and where AI reduces that risk",
      takeaway:
        "Change failures cause outages. AI reduces risk by improving assessment, prioritizing review effort, detecting conflicts, and correlating incidents back to changes — but it does not replace CAB accountability.",
      why: "Change is where automation creates huge value but also huge risk. Governance must be strongest here.",
      paragraphs: [
        [
          s("The failure pattern: incomplete impact assessment, weak backout plans, and collision with other changes. AI can flag these earlier and more consistently."),
        ],
        [
          s("AI creates leverage by triaging review: high-risk changes get deeper human scrutiny; low-risk standard changes become faster."),
        ],
        [
          s("The key principle: AI augments judgment; it does not become the approver of record."),
        ],
      ],
      workflowSteps: [
        "Baseline change failure rate and post-change incident volume.",
        "Identify review bottlenecks (CAB prep time, impact assessment).",
        "Deploy AI for triage and summaries before automating approvals.",
      ],
      example: {
        title: "CAB prep became faster and safer",
        body: "AI summarized change details and flagged missing backout plans, allowing CAB to focus on risk rather than reading long descriptions.",
      },
    }),
    buildGuideSection({
      id: "change-risk-prediction",
      number: "5.2",
      title: "Change risk prediction",
      subtitle:
        "ML scoring for likelihood of causing an incident",
      takeaway:
        "Risk prediction uses historical change outcomes to score risk tiers. It’s most effective when post-change incidents are reliably linked to changes and taxonomy is stable.",
      why: "Risk scoring is how you prioritize human attention. Without it, CAB time is spent evenly across low- and high-risk changes.",
      paragraphs: [
        [
          s("Inputs: change type, CI class, affected services, time window, past success rates, and collision patterns. Output: risk tier and confidence."),
        ],
        [
          s("Governance: risk score influences review depth, not final approval. High risk triggers more checks; it should not auto-reject by itself."),
        ],
        [
          s("Feedback loop: if risk score is wrong, link outcomes and retrain. Risk prediction is an MLOps program."),
        ],
      ],
      workflowSteps: [
        "Ensure linkage: post-change incidents mapped to change records.",
        "Train risk model and validate on holdout window.",
        "Deploy: high risk → extra review tasks; low risk → fast track.",
      ],
      example: {
        title: "High-risk changes required deeper checks",
        body: "High risk tier changes required stakeholder approvals and explicit backout review; standard changes stayed fast. Failure rate dropped without slowing all work.",
      },
    }),
    buildGuideSection({
      id: "impact-assessment",
      number: "5.3",
      title: "AI-assisted impact assessment",
      subtitle:
        "Using GenAI to identify affected CIs, services, and stakeholders",
      takeaway:
        "GenAI can summarize likely impacted services and stakeholders from change details and CMDB context — but must cite evidence and remain advisory.",
      why: "Impact assessment is labor-intensive and error-prone. GenAI speeds it up, but hallucination must be controlled with grounding.",
      paragraphs: [
        [
          s("Ground impact assessment in CMDB relationships and change templates. GenAI should reference CIs and services by id/name from records, not invent them."),
        ],
        [
          s("Output should include uncertainty: 'likely impacted based on dependency graph' and recommend who should review."),
        ],
        [
          s("Human remains responsible for final impact statement — especially for regulated services."),
        ],
      ],
      workflowSteps: [
        "Retrieve CMDB dependency context for affected CIs.",
        "Generate impact draft with citations to CIs/services.",
        "Route draft to change owner for review before CAB.",
      ],
      example: {
        title: "Stakeholders notified correctly",
        body: "AI suggested stakeholder list from service ownership tables. Change owner verified and notified proactively, reducing surprise outages and escalation drama.",
      },
    }),
    buildGuideSection({
      id: "cab-prep",
      number: "5.4",
      title: "CAB preparation automation",
      subtitle:
        "AI prepares change brief, risk summary, and options",
      takeaway:
        "CAB automation generates a structured brief: summary, risk factors, missing info checklist, collision warnings, and recommended decision options — making meetings shorter and decisions better.",
      why: "CAB bottlenecks are often reading and summarization. AI turns CAB into decision-making instead of document review.",
      paragraphs: [
        [
          s("Use Flow + Generate Text: compile change fields, risk score, dependency context, and collision checks; generate a one-page CAB brief."),
        ],
        [
          s("Add validation: missing backout plan or test evidence triggers pre-CAB tasks rather than surprises in meeting."),
        ],
        [
          s("Store CAB brief on the change record for audit and traceability."),
        ],
      ],
      workflowSteps: [
        "Build CAB brief template with required sections.",
        "Generate brief in Flow and attach to change record.",
        "Require change owner sign-off before CAB meeting.",
      ],
      example: {
        title: "CAB meeting time reduced",
        body: "CAB members received consistent briefs in advance. Meeting shifted from reading to decisions; throughput increased without raising risk.",
      },
    }),
    buildGuideSection({
      id: "conflict-detection",
      number: "5.5",
      title: "Automated conflict detection",
      subtitle:
        "Schedule conflicts, maintenance window violations, CI freezes",
      takeaway:
        "Conflict detection uses rules + similarity + topology: detect overlapping windows on shared CIs/services and enforce maintenance policies automatically.",
      why: "Collisions cause outages. Detecting conflicts early is one of the highest-impact change automations.",
      paragraphs: [
        [
          s("Deterministic rules catch obvious conflicts (same CI, same window). Similarity and topology help catch less obvious conflicts (dependent services)."),
        ],
        [
          s("Design: conflict detection should create actionable tasks: reschedule, coordinate, or request exception approval."),
        ],
        [
          s("Measure: reduction in post-change incidents attributed to collisions."),
        ],
      ],
      workflowSteps: [
        "Implement rule-based conflict checks first.",
        "Add topology-based collision detection for critical services.",
        "Route conflicts to change manager queue for resolution.",
      ],
      example: {
        title: "Freeze policy enforced automatically",
        body: "A service freeze window blocked changes automatically. Attempted conflicting changes were routed for exception approval rather than silently approved.",
      },
    }),
    buildGuideSection({
      id: "post-change-correlation",
      number: "5.6",
      title: "Post-change correlation",
      subtitle:
        "Linking post-change incidents back to causal changes",
      takeaway:
        "Correlation links incidents to recent changes using CI/service overlap, timing windows, and similarity signatures — enabling faster rollback decisions and better model training.",
      why: "Without correlation, teams argue about blame. With correlation, you have evidence for root cause and risk model improvement.",
      paragraphs: [
        [
          s("Signals: incident starts within X hours, affects same CIs/services, shares error signatures. Output should include confidence and evidence."),
        ],
        [
          s("Use correlation to drive action: notify change owner, suggest rollback, open problem record for recurring changes."),
        ],
        [
          s("Feed correlated outcomes back into risk prediction labels for continuous improvement."),
        ],
      ],
      workflowSteps: [
        "Define correlation window per service tier.",
        "Implement correlation logic and store link records.",
        "Review weekly to validate and refine precision.",
      ],
      example: {
        title: "Faster rollback decisions",
        body: "Correlation flagged a change as likely cause of incident. Teams rolled back quickly, reducing impact time and improving postmortem clarity.",
      },
    }),
    buildGuideSection({
      id: "change-dashboard",
      number: "5.7",
      title: "Change intelligence dashboard",
      subtitle:
        "AI-powered view of change risk across the portfolio",
      takeaway:
        "A change intelligence dashboard shows risk distribution, upcoming high-risk windows, collision hotspots, and post-change incident correlations — enabling proactive governance.",
      why: "Leadership manages change risk at portfolio level. Dashboards create visibility and accountability.",
      paragraphs: [
        [
          s("Key tiles: high-risk changes next 7 days, collision conflicts, services with repeated post-change incidents, and change failure trends."),
        ],
        [
          s("Tie dashboard to action: high-risk changes trigger extra checks and stakeholder reviews."),
        ],
        [
          s("Use the dashboard to evolve policy: if certain change types repeatedly fail, update templates and approvals."),
        ],
      ],
      workflowSteps: [
        "Define dashboard KPIs and owners.",
        "Build reports by service and change type.",
        "Review weekly with change managers and service owners.",
      ],
      example: {
        title: "Hotspot service governance",
        body: "Dashboard showed one service had repeated post-change incidents. Governance tightened templates and required extra testing; failure rate dropped.",
      },
    }),
    buildGuideSection({
      id: "pdi-change-risk-walkthrough",
      number: "5.8",
      title: "Configuration walkthrough",
      subtitle:
        "Enabling and configuring AI change risk on PDI",
      takeaway:
        "PDI lab: configure change risk scoring (or simulate with PI) → generate CAB brief → run conflict checks → correlate incidents to changes — end-to-end change intelligence.",
      why: "This is the demo that proves AI reduces risk rather than creating it.",
      paragraphs: [
        [s("Step 1: Create sample changes and sample incidents.")],
        [s("Step 2: Implement a risk score (PI model or rule proxy) and store on change record.")],
        [s("Step 3: Flow generates CAB brief using risk + context.")],
        [s("Step 4: Conflict checks create tasks for violations.")],
        [s("Step 5: Correlation links incidents within window back to changes.")],
      ],
      workflowSteps: [
        "Create 10 changes across 3 services and overlapping windows.",
        "Trigger conflict detection and CAB brief generation.",
        "Create incidents after changes; test correlation accuracy.",
      ],
      artifact: {
        id: "cab-brief-template",
        title: "CAB brief template (starter)",
        description: "Use as the structured output for CAB automation.",
        content:
          `## Change summary\n## Risk score + rationale\n## Impacted services/CIs (evidence)\n## Collision/conflict warnings\n## Missing info checklist\n## Backout plan readiness\n## Recommended CAB decision options`,
      },
    }),
  ],
};

