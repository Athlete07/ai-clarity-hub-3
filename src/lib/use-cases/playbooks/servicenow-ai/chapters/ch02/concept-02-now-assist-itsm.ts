import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_02_NOW_ASSIST_ITSM: GuideConcept = {
  number: 2,
  title: "Now Assist for ITSM",
  subtitle:
    "Incident summaries, resolution notes, change risk, and the PDI walkthrough for production ITSM skills",
  sections: [
    buildGuideSection({
      id: "incident-summarisation",
      number: "2.1",
      title: "Incident summarisation",
      subtitle:
        "How Now Assist reads incident history and produces a structured summary for incoming agents",
      takeaway:
        "Incident summary skills ingest description, work notes, related CIs, and recent updates — outputting a scannable brief so agents skip 10 minutes of scroll-back.",
      why: "Highest-ROI ITSM skill for mature ticket volume. Interviewers ask for your summary architecture.",
      paragraphs: [
        [
          s("Inputs typically include short description, priority, assignment, chronology of work notes, and linked CMDB items. Output should be "),
          x("structured", "Sections: situation, actions taken, open questions, recommended next steps."),
          s(" — not a prose wall."),
        ],
        [
          s("Trigger design: on assignment change or on open — avoids regenerating on every minor edit unless agent requests refresh."),
        ],
        [
          s("Quality gate: if incident has <3 notes, summary may add little value — consider minimum context threshold."),
        ],
      ],
      workflowSteps: [
        "Baseline: time for new assignee to understand ticket (sample 20 incidents).",
        "Enable summary skill on PDI with test incidents containing long threads.",
        "Compare summary accuracy to supervisor gold standard.",
      ],
      example: {
        title: "Major incident handoff — 14 min to 3 min",
        body: "P1 reassignment at 2am. Incoming manager read AI summary with timeline, current hypothesis, and pending actions — validated against last two notes. Faster situational awareness without reading 60 entries.",
      },
    }),
    buildGuideSection({
      id: "resolution-note-generation",
      number: "2.2",
      title: "Resolution note generation",
      subtitle:
        "The AI that drafts resolution notes from work notes and closure codes",
      takeaway:
        "Resolution note skills synthesise closure narrative from work history and resolution codes — agents edit and approve before resolve.",
      why: "Reopen rates often trace to vague resolution notes. This skill standardises closure quality.",
      paragraphs: [
        [
          s("Skill maps "),
          x("resolution code", "Fixed, workaround, duplicate — shapes tone and required fields."),
          s(" and work notes into customer-appropriate and audit-ready closure text."),
        ],
        [
          s("Guardrail: never include internal-only jargon in customer-visible fields — separate internal vs external note skills where product allows."),
        ],
        [
          s("Metric: edit distance on resolution notes before/after assist."),
        ],
      ],
      workflowSteps: [
        "Collect 10 exemplar resolution notes from senior agents — tone reference.",
        "Configure skill to match structure: cause, fix, verification.",
        "Require agent accept before state moves to Resolved.",
      ],
      example: {
        title: "Reopen rate drop after resolution standardisation",
        body: "Reopen rate 11% on password incidents. Resolution notes were one-liners. Assist drafted verification steps from work notes; agents added one line. Reopen rate fell to 6% in 60 days.",
      },
    }),
    buildGuideSection({
      id: "similar-incident-surfacing",
      number: "2.3",
      title: "Similar incident surfacing",
      subtitle:
        "How GenAI surfaces relevant historical incidents with natural language context",
      takeaway:
        "Combines semantic similarity (AI Search / PI) with GenAI explanation of why incidents relate — not just a list of numbers.",
      why: "Differentiates platform approach from 'search sys_id.' Agents get narrative context for faster pattern match.",
      paragraphs: [
        [
          s("Retrieval finds candidate incidents; GenAI explains shared symptoms, resolution pattern, and caveats — "),
          x("grounded in record fields", "Not invented similarities."),
          s("."),
        ],
        [
          s("Works best when historical data is labelled with good resolution codes and CI linkage."),
        ],
        [
          s("Interview: distinguish PI similarity scores vs GenAI narrative layer."),
        ],
      ],
      workflowSteps: [
        "Test on recurring incident types (VPN, Outlook, access requests).",
        "Verify cited incidents exist and resolutions were successful.",
        "Add dismiss feedback when similarity is wrong — tune retrieval.",
      ],
      example: {
        title: "Outlook sync — pattern in 90 seconds",
        body: "Agent opened new Outlook sync ticket. Assist surfaced three resolved incidents from same patch cycle with shared fix — certificate update. Agent applied known fix in 12 minutes vs 45 average for that category.",
      },
    }),
    buildGuideSection({
      id: "change-risk-assessment",
      number: "2.4",
      title: "Change risk assessment",
      subtitle:
        "How Now Assist evaluates a change request and assigns a risk narrative",
      takeaway:
        "Change assist reads description, affected CIs, schedule, backout plan, and history — producing risk narrative for CAB context, not replacing CAB judgment.",
      why: "Change managers face document overload. Assist accelerates review; humans retain approval authority.",
      paragraphs: [
        [
          s("Output: risk factors, missing information checklist, comparison to similar past changes — "),
          x("advisory only", "CAB decision remains human with audit trail."),
        ],
        [
          s("Integrate with change policy: flag missing backout, blackout conflicts, high-impact CI classes."),
        ],
        [
          s("Do not auto-approve changes from GenAI risk score — compliance nightmare."),
        ],
      ],
      workflowSteps: [
        "Pilot on standard changes first, not emergency.",
        "CAB reads assist narrative as prep — not sole vote input.",
        "Log when CAB overrides assist recommendation — improve prompts.",
      ],
      example: {
        title: "CAB prep time halved",
        body: "Change manager used assist summary before weekly CAB. Missing backout plan flagged on 3 of 12 changes pre-meeting — fixed before vote. Meeting shortened 40 minutes.",
      },
    }),
    buildGuideSection({
      id: "problem-management-assist",
      number: "2.5",
      title: "Problem management assist",
      subtitle:
        "The AI-driven root cause analysis capability and how to configure it",
      takeaway:
        "Problem assist correlates incident clusters, change history, and known errors — drafting RCA hypotheses for problem managers to validate.",
      why: "Problem management is understaffed everywhere. Assist makes problem records viable again.",
      paragraphs: [
        [
          s("Inputs: linked incidents, work notes, recent changes on affected CIs, known error database. Output: hypothesis tree, suggested problem statement, recommended investigations."),
        ],
        [
          s("Human validates causation — correlation from AI is not root cause until proven."),
        ],
        [
          s("Configure linkage discipline: incidents must relate to problems for assist to work."),
        ],
      ],
      workflowSteps: [
        "Select incident cluster with suspected common cause.",
        "Create problem record; link incidents; run assist.",
        "Problem manager validates hypothesis with evidence before publishing RCA.",
      ],
      example: {
        title: "Recurring Wi-Fi drops — problem record in one day",
        body: "47 incidents across two sites. Assist highlighted shared controller firmware and change window overlap. Problem manager confirmed in 4 hours; permanent fix in 2 weeks. Without assist, cluster might have stayed as isolated incidents.",
      },
    }),
    buildGuideSection({
      id: "interaction-summary",
      number: "2.6",
      title: "Interaction summary",
      subtitle:
        "How Now Assist summarises full conversation history before live agent handoff",
      takeaway:
        "When Virtual Agent or chat escalates, interaction summary gives the live agent transcript digest — intent, tried steps, customer sentiment — reducing repeat questions.",
      why: "Handoff friction destroys CSAT. This skill is the bridge between deflection and human support.",
      paragraphs: [
        [
          s("Summary includes: customer goal, bot actions taken, data collected, escalation reason, open slots — attached to incident or interaction record."),
        ],
        [
          s("Agent should see summary before first customer message — not buried in related lists."),
        ],
        [
          s("Pair with VA containment metrics — measure handoff quality, not just handoff rate."),
        ],
      ],
      workflowSteps: [
        "Configure VA escalation to create incident with transcript attachment.",
        "Enable interaction summary on handoff event.",
        "Agent survey: 'Did summary reduce repeat questions?'",
      ],
      example: {
        title: "Chat handoff CSAT +12 points",
        body: "Customers hated repeating VPN error codes after bot escalation. Interaction summary populated custom field on incident. Agents acknowledged issue in first reply. Repeat-question complaints dropped sharply.",
      },
    }),
    buildGuideSection({
      id: "itsm-config-walkthrough",
      number: "2.7",
      title: "Configuration walkthrough",
      subtitle:
        "Activating, configuring, and testing each ITSM skill on PDI",
      takeaway:
        "PDI path: verify entitlements → enable ITSM skills → configure knowledge scope → assign roles → test with synthetic incidents → measure before promoting.",
      why: "Hands-on PDI steps are what separate playbook readers from cert collectors.",
      paragraphs: [
        [
          s("Step 1: Confirm Now Assist plugins/entitlements on PDI (may require developer instance AI features)."),
        ],
        [
          s("Step 2: Now Assist Admin — enable incident summary, resolution note, similar incidents per release catalog."),
        ],
        [
          s("Step 3: Scope AI Search / knowledge sources to ITSM KB spaces."),
        ],
        [
          s("Step 4: itil / itil_admin roles — verify skill visibility in Agent Workspace."),
        ],
        [
          s("Step 5: Create test incidents with varied note length; document expected vs actual; file defects vs config gaps."),
        ],
      ],
      workflowSteps: [
        "Open PDI → Now Assist configuration module (per your release).",
        "Enable one skill — incident summary only for week 1.",
        "Run 10 test scenarios; capture screenshots for playbook wiki.",
        "Expand to resolution notes week 2 after feedback review.",
      ],
      artifact: {
        id: "pdi-itsm-test-cases",
        title: "PDI ITSM Now Assist test cases",
        description: "Minimum test pack before UAT sign-off.",
        content: `| # | Scenario | Pass criteria |
|---|----------|---------------|
| 1 | Long thread (20+ notes) | Summary captures timeline |
| 2 | New incident (1 note) | Graceful short summary or prompt to refresh later |
| 3 | Wrong category | Summary still factually accurate |
| 4 | Restricted field in notes | Field not leaked to summary |
| 5 | Resolve with code | Resolution draft matches code tone |
| 6 | Similar incidents exist | Cites real records with valid resolutions |
| 7 | VA handoff | Interaction summary on incident |
| 8 | Non-English KB (if applicable) | Correct language policy |`,
      },
    }),
    buildGuideSection({
      id: "itsm-transformation-case",
      number: "2.8",
      title: "Real use case: ITSM transformation at scale",
      subtitle:
        "The architecture, the metrics, and the change management",
      takeaway:
        "Enterprise ITSM Now Assist rollout: phased skills, champion network, knowledge prerequisite, metrics on handle time and quality — not big-bang enablement.",
      why: "Case study format for interviews and business cases.",
      paragraphs: [
        [
          s("Architecture: AI Search cleanup → incident summary + similar incidents → resolution notes → change assist → VA handoff summaries. PI routing ran parallel — not replaced."),
        ],
        [
          s("Metrics: handle time −17%, resolution note quality score +23%, agent NPS +11, GenAI cost per ticket tracked monthly."),
        ],
        [
          s("Change: 6 champion agents per region, weekly office hours, feedback loop to skill owners, executive dashboard on adoption not just licenses."),
        ],
      ],
      workflowSteps: [
        "Phase 0: knowledge hygiene (4 weeks).",
        "Phase 1: summary + similar (4 weeks).",
        "Phase 2: resolution + handoff (4 weeks).",
        "Phase 3: change assist for standard changes.",
      ],
      example: {
        title: "8,000-agent IT organisation — 12-month rollout",
        body: "Global bank phased Now Assist across three regions. Phase 0 retired 2,400 stale KB articles. Phase 1 champions in Mumbai, Dublin, Dallas. Year-one result: $4.2M annualised productivity estimate, 0 critical audit findings on AI outputs due to human-approve policy on external text.",
      },
    }),
  ],
};
