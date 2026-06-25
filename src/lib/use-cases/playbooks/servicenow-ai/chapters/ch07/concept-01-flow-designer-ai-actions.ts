import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_01_FLOW_AI_ACTIONS: GuideConcept = {
  number: 1,
  title: "Flow Designer and AI Actions",
  subtitle:
    "AI steps in Flow Designer — Generate Text, Classify, Recommend — and the patterns that make AI-augmented workflows production-grade",
  sections: [
    buildGuideSection({
      id: "ai-action-steps",
      number: "1.1",
      title: "AI Action Steps in Flow Designer",
      subtitle:
        "Built-in steps that call GenAI capabilities from within a flow",
      takeaway:
        "AI actions are first-class Flow steps that invoke GenAI or ML capabilities and return structured outputs you can branch on — with logging, retries, and governance consistent with the platform.",
      why: "Flow is where AI becomes operational work. If AI lives only in a chat panel, it doesn’t change outcomes.",
      paragraphs: [
        [
          s("Think of AI actions as "),
          x("probabilistic steps", "They return confidence, variable output, and potential failure states."),
          s(
            " inside deterministic orchestration. Your job is to design how those steps are used safely: thresholds, fallbacks, and approvals.",
          ),
        ],
        [
          s("Flow creates the enterprise advantages: audit, error handling, change control, and integration. AI actions inherit those benefits when used correctly."),
        ],
        [
          s("Rule: never let an AI action be the final authority for a high-risk write. AI actions propose; Flow enforces policy."),
        ],
      ],
      workflowSteps: [
        "Pick a record-triggered flow (incident created).",
        "Insert one AI action step (summary/classify) and store output in fields.",
        "Branch on confidence and route low confidence to a human queue.",
      ],
      example: {
        title: "AI summary + deterministic escalation",
        body: "Flow generated a summary and proposed assignment, but CAB policy still required a deterministic escalation for P1. AI improved speed; rules preserved compliance.",
      },
    }),
    buildGuideSection({
      id: "generate-text",
      number: "1.2",
      title: "The Generate Text action",
      subtitle:
        "Calling Now Assist from a flow and using the response downstream",
      takeaway:
        "Generate Text is the GenAI bridge: assemble context → generate draft/synthesis → parse/validate → write to records or send for approval.",
      why: "Most GenAI failures in automation happen because teams treat output as final truth instead of a draft requiring validation.",
      paragraphs: [
        [
          s("Design for structure: request bullet templates or JSON-like outputs. Free prose is hard to validate and risky to auto-apply."),
        ],
        [
          s("Grounding: include record fields and KB snippets; require citations or reference ids when possible. If grounding is missing, force escalation."),
        ],
        [
          s("Downstream logic: use generated output to create tasks, propose updates, or draft comms — but gate external sends behind approval."),
        ],
      ],
      workflowSteps: [
        "Assemble context (fields + capped notes + KB snippet).",
        "Generate text in a constrained format (sections + max length).",
        "Validate: if missing required sections, route to human review queue.",
      ],
      example: {
        title: "Executive update draft in change flow",
        body: "Flow generated an exec update draft after a change approval. A manager approved before sending. The update was consistent and faster without risking unreviewed comms.",
      },
    }),
    buildGuideSection({
      id: "classify-action",
      number: "1.3",
      title: "The Classify action",
      subtitle:
        "Using Predictive Intelligence classification as a decision node",
      takeaway:
        "Classify steps use PI to predict labels (category, assignment group) with confidence — enabling confidence-gated routing inside Flow.",
      why: "Classification is one of the safest and highest-ROI AI steps because it’s measurable and cheap at scale.",
      paragraphs: [
        [
          s("Use confidence bands: high → auto-apply, medium → suggest, low → triage. This keeps accuracy high while preserving human control."),
        ],
        [
          s("Capture overrides: when humans change the suggested label, log it for retraining. This is how routing improves over time."),
        ],
        [
          s("Do not treat classification as static. Reorgs, new apps, and taxonomy changes cause drift — schedule retraining and monitor overrides."),
        ],
      ],
      workflowSteps: [
        "Add Classify step to incident-create flow.",
        "Route based on confidence bands.",
        "Log overrides and run monthly model health review.",
      ],
      example: {
        title: "Hybrid routing improved MTTR",
        body: "Flow used PI classification for most incidents and routed low-confidence cases to triage. Misroutes fell and MTTR improved without risky automation.",
      },
    }),
    buildGuideSection({
      id: "recommend-action",
      number: "1.4",
      title: "The Recommend action",
      subtitle:
        "Inserting ML recommendations at the right point in a process",
      takeaway:
        "Recommendations (similar records, KB articles, next-best action) should appear at decision points where humans or downstream flows benefit — not as noisy popups everywhere.",
      why: "Recommendation fatigue kills adoption. Place recommendations where they reduce rework and decision time.",
      paragraphs: [
        [
          s("Great placement: on assignment, on escalation, or before resolution. Poor placement: on every form load or every note save."),
        ],
        [
          s("Use 'recommend then confirm': show top 1–3 with rationale and allow one-click accept. Track accept rate and resolution success."),
        ],
        [
          s("Tie recommendations to knowledge lifecycle: if KB recommendation leads to wrong answers, fix KB quality and ranking first (Chapter 3)."),
        ],
      ],
      workflowSteps: [
        "Choose one recommendation type (KB).",
        "Expose it at one decision point (before agent response).",
        "Measure accept rate and effect on resolution time.",
      ],
      example: {
        title: "KB recs improved first-contact resolution",
        body: "Flow suggested the most effective KB article based on history. Agents used it quickly, improving FCR without changing ticket volume.",
      },
    }),
    buildGuideSection({
      id: "chaining-patterns",
      number: "1.5",
      title: "Chaining AI and non-AI steps",
      subtitle:
        "Mixing deterministic logic with probabilistic output",
      takeaway:
        "Best pattern: deterministic guardrails → AI suggestion → confidence gate → deterministic execution. AI should be sandwiched between rules and verification.",
      why: "This pattern prevents AI from becoming an uncontrolled decision maker.",
      paragraphs: [
        [
          s("Sequence: validate policy constraints (rules) → classify/summarise (AI) → route by thresholds (decision table) → execute action (Flow) → log and verify."),
        ],
        [
          s("Avoid chaining multiple AI steps without checkpoints. Errors compound and become hard to debug."),
        ],
        [
          s("Use stable intermediate fields (u_ai_*). Keep AI output separate from final business fields until approved."),
        ],
      ],
      workflowSteps: [
        "Add pre-checks (ACL, required fields).",
        "Run AI step and store output in staging fields.",
        "Gate execution with confidence and approvals; then commit to final fields.",
      ],
      example: {
        title: "Safe incident automation chain",
        body: "Flow validated category field, ran PI routing, staged assignment, asked triage approval for medium confidence, then committed assignment. No uncontrolled writes.",
      },
    }),
    buildGuideSection({
      id: "error-handling",
      number: "1.6",
      title: "Error handling for AI steps",
      subtitle:
        "Low confidence, timeouts, and failures",
      takeaway:
        "AI steps fail differently than deterministic steps. Handle: low confidence, missing sources, provider errors, and schema mismatches — with degraded mode and escalation paths.",
      why: "Production workflows must continue when AI is unavailable. If AI failure breaks ticket creation, the program will be shut off.",
      paragraphs: [
        [
          s("Failure classes: "),
          x("quality failures", "low confidence, missing KB"),
          s(", "),
          x("system failures", "timeouts, rate limits"),
          s(", and "),
          x("contract failures", "unexpected output structure"),
          s(". Each needs a different handler."),
        ],
        [
          s("Degraded mode: skip AI step and proceed with deterministic routing, or route to human triage. Never silently drop actions."),
        ],
        [
          s("Log failures with reason codes so you can measure reliability and decide when to expand autonomy."),
        ],
      ],
      workflowSteps: [
        "Add retry with cap for transient failures.",
        "Branch on low confidence to human triage queue.",
        "Record AI failure reason code on the record.",
      ],
      example: {
        title: "Degraded mode preserved operations",
        body: "GenAI step timed out during a service outage. Flow routed incidents using deterministic rules and queued summaries for later. Operations continued without breaking intake.",
      },
    }),
    buildGuideSection({
      id: "flow-builder-non-devs",
      number: "1.7",
      title: "Flow Builder for non-developers",
      subtitle:
        "How Now Assist helps business users build flows from natural language",
      takeaway:
        "GenAI can draft flow skeletons from natural language, accelerating citizen development — but governance is required: approvals, templates, and testing before activation.",
      why: "AI makes it easier to create automation. It also makes it easier to create unsafe automation unless guardrails exist.",
      paragraphs: [
        [
          s("Use GenAI for scaffolding: trigger, conditions, and common actions. Humans must review: ACLs, idempotency, error handling, and notifications."),
        ],
        [
          s("Provide sanctioned templates and subflows. Citizen developers should assemble from approved blocks, not invent integrations."),
        ],
        [
          s("Policy: flows generated by non-devs require platform team review before production."),
        ],
      ],
      workflowSteps: [
        "Define an approved flow template library.",
        "Allow GenAI flow generation only inside templates.",
        "Add approval step in change process for new flows.",
      ],
      example: {
        title: "Citizen flow governance prevented outage",
        body: "A generated flow would have spammed customers due to missing condition. Review policy caught it. AI increased speed, not risk.",
      },
    }),
    buildGuideSection({
      id: "pdi-walkthrough",
      number: "1.8",
      title: "Configuration walkthrough",
      subtitle:
        "Building an AI-augmented incident flow on PDI",
      takeaway:
        "PDI lab: incident created → PI classify assignment group → GenAI generate summary → decision table routes by confidence → create task or assign → log outcomes.",
      why: "This lab demonstrates the convergence: Flow + PI + GenAI + governance in one repeatable build.",
      paragraphs: [
        [s("Step 1: Create record-triggered flow on incident insert.")],
        [s("Step 2: Add Classify step (PI) for assignment group; store confidence.")],
        [s("Step 3: Add Generate Text step to draft summary; store in u_ai_summary.")],
        [s("Step 4: Decision table: if confidence high → auto-assign; medium → triage task; low → manual queue.")],
        [s("Step 5: Log AI actions and overrides for monitoring and retrain.")],
      ],
      workflowSteps: [
        "Create 20 test incidents across 5 categories.",
        "Run flow; measure assignment overrides and summary accept rate.",
        "Adjust thresholds and rerun until stable.",
      ],
      artifact: {
        id: "pdi-ai-flow-test-pack",
        title: "PDI AI-augmented incident flow test pack",
        description: "Minimum tests before calling it production-shaped.",
        content:
          `| # | Scenario | Expected |\n|---|----------|----------|\n| 1 | Clear VPN issue | High confidence route |\n| 2 | Ambiguous “help” | Triage task |\n| 3 | Missing description | Fail safe (manual queue) |\n| 4 | GenAI timeout | Degraded mode routing |\n| 5 | PI low confidence | Manual triage |\n\nTrack: override %, AI failures, average runtime.`,
      },
    }),
  ],
};

