import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_03_DECISION_TABLES_ROUTING: GuideConcept = {
  number: 3,
  title: "Decision Tables and AI Routing",
  subtitle:
    "Hybrid routing: rules + ML confidence gating + feedback loops — with a PDI walkthrough",
  sections: [
    buildGuideSection({
      id: "decision-table-vs-ai",
      number: "3.1",
      title: "When to use a decision table vs an AI model",
      subtitle: "Determinism-vs-learning trade-off",
      takeaway:
        "Decision tables encode known policy deterministically. AI models learn patterns from history. Use tables when rules are explicit; use AI when patterns are complex and labeled; combine both for safe routing.",
      why: "This choice determines auditability and maintenance cost. Most routing should be hybrid, not pure AI.",
      paragraphs: [
        [
          s("Decision table is best when policy is explicit: VIP users → special queue; security incidents → SOC; region-based routing → fixed rules."),
        ],
        [
          s("AI is best when language patterns predict the correct team and you have labels: assignment group prediction from descriptions."),
        ],
        [
          s("Hybrid wins when you need both: AI proposes; table enforces policy and thresholds."),
        ],
      ],
      workflowSteps: [
        "List routing policies that are mandatory (rules).",
        "Identify parts that are pattern-based (AI).",
        "Design hybrid: rules first, then AI, then fallback.",
      ],
      example: {
        title: "VIP override rule + AI routing",
        body: "Decision table routes VIP incidents to dedicated queue regardless of AI. For non-VIP, AI routes when confident; otherwise triage. Policy and learning coexist safely.",
      },
    }),
    buildGuideSection({
      id: "decision-table-architecture",
      number: "3.2",
      title: "Decision table architecture",
      subtitle: "Structure, conditions, outcomes, admin experience",
      takeaway:
        "Decision tables are structured if/then matrices: inputs (conditions), outputs (decisions), and versioned rulesets that non-developers can maintain with governance.",
      why: "Decision tables are the fastest way to make routing behavior transparent and auditable.",
      paragraphs: [
        [
          s("Keep tables small and layered: one table for mandatory exceptions, one for standard routing, and one for fallback."),
        ],
        [
          s("Governance: version changes, require approvals, and track who changed what. Decision tables are code in disguise."),
        ],
        [
          s("Use clear outcome contracts: assignment group, priority floor, and required tasks."),
        ],
      ],
      workflowSteps: [
        "Define the inputs you’ll use (category, CI class, VIP flag, AI confidence).",
        "Define outcomes (queue, assignment, escalation).",
        "Implement versioning and approval policy for changes.",
      ],
      example: {
        title: "Audit-friendly routing behavior",
        body: "An auditor asked why a ticket went to a queue. Decision table row and version explained it instantly. AI was only used inside a confidence gate.",
      },
    }),
    buildGuideSection({
      id: "ai-assisted-decision-tables",
      number: "3.3",
      title: "AI-assisted decision tables",
      subtitle: "Using ML predictions as inputs to a decision table",
      takeaway:
        "Treat ML outputs (predicted label + confidence) as decision table inputs. This lets deterministic logic decide when to trust AI and what to do when AI is uncertain.",
      why: "This is the core safety pattern for ML in operations: AI proposes; rules decide.",
      paragraphs: [
        [
          s("Inputs include: predicted assignment group, confidence score, and top-3 alternatives. Table defines: auto-assign, suggest, or triage."),
        ],
        [
          s("Use different thresholds by category: routing for VPN may be easier than routing for complex app issues. Thresholds should be data-driven."),
        ],
        [
          s("Log decision outcome and later human override as feedback for retraining."),
        ],
      ],
      workflowSteps: [
        "Add PI Classify step to Flow and capture confidence.",
        "Pass confidence + predicted group to decision table.",
        "Branch based on table outcome (auto/suggest/triage).",
      ],
      example: {
        title: "Policy enforced regardless of AI",
        body: "Even if AI predicted Network with high confidence, decision table rerouted security incidents to SOC. AI stayed inside policy boundaries.",
      },
    }),
    buildGuideSection({
      id: "hybrid-routing",
      number: "3.4",
      title: "Hybrid routing",
      subtitle: "Combining rule-based and AI-based routing in one flow",
      takeaway:
        "Hybrid routing flow: apply deterministic exceptions first, then AI classification, then fallback rules — ensuring correctness and auditability.",
      why: "Pure AI routing breaks on edge cases; pure rules are expensive to maintain. Hybrid gives the best of both.",
      paragraphs: [
        [
          s("Sequence: exception rules → AI classify → confidence gate → fallback triage. Document the sequence as architecture policy."),
        ],
        [
          s("Do not hide AI inside complex flows without transparency. Always write predicted value and confidence to fields for audit and monitoring."),
        ],
        [
          s("Use “suggest” mode during pilots to build trust and capture overrides."),
        ],
      ],
      workflowSteps: [
        "Implement exceptions in decision table v1.",
        "Implement AI classify and store confidence.",
        "Add fallback routing and a triage queue.",
      ],
      example: {
        title: "Routing quality improved without brittleness",
        body: "Rules handled mandatory routing; AI handled patterns; low-confidence cases went to triage. Over time, retraining reduced triage load and improved automation safety.",
      },
    }),
    buildGuideSection({
      id: "confidence-gated-routing",
      number: "3.5",
      title: "Confidence-gated routing",
      subtitle: "Use AI when confidence is high; rules when low",
      takeaway:
        "Confidence gating is the operational contract: AI is allowed only above a threshold that meets precision targets. Below that threshold, deterministic routing or human triage takes over.",
      why: "This prevents low-quality predictions from damaging operations and user trust.",
      paragraphs: [
        [
          s("Set thresholds from evaluation data: pick precision targets (e.g., 95% for auto-assign). Different domains may have different targets."),
        ],
        [
          s("Use three bands: auto / suggest / manual. Two-band systems often oscillate between too risky and too conservative."),
        ],
        [
          s("Monitor confidence distribution; if it shifts, drift is happening."),
        ],
      ],
      workflowSteps: [
        "Choose thresholds A and B from test metrics.",
        "Implement three bands in Flow.",
        "Review monthly: override rate and misroutes per band.",
      ],
      example: {
        title: "Three-band gating scaled safely",
        body: "Auto-assign only for ≥0.82 confidence; suggest for 0.65–0.82; triage below 0.65. Misroutes stayed low while automation coverage grew over time.",
      },
    }),
    buildGuideSection({
      id: "feedback-loop",
      number: "3.6",
      title: "Routing accuracy feedback loop",
      subtitle: "Capturing outcomes to improve routing continuously",
      takeaway:
        "Feedback loop = logging predictions + human overrides + downstream outcomes → retraining datasets → new model versions → A/B tests.",
      why: "Routing improves only when you capture reality and retrain. Without feedback, models drift and automation fails silently.",
      paragraphs: [
        [
          s("Capture: predicted group, confidence, final group, override reason, and time-to-resolution. These are the features of MLOps in ServiceNow."),
        ],
        [
          s("Use overrides as labeled data: when humans correct AI, that’s high-value training signal."),
        ],
        [
          s("Run scheduled retrains and A/B tests. Do not deploy new models blindly."),
        ],
      ],
      workflowSteps: [
        "Add fields: u_ai_predicted_group, u_ai_confidence, u_ai_overridden.",
        "Create monthly retrain job from override log.",
        "Run A/B for 2 weeks before full deploy.",
      ],
      example: {
        title: "Overrides drove rapid improvement",
        body: "In month one, override rate was 14% for a new category. After retraining with overrides, it dropped to 7%. The loop made the model better without endless manual rules.",
      },
    }),
    buildGuideSection({
      id: "multi-tier-routing-case",
      number: "3.7",
      title: "Real use case: multi-tier incident routing",
      subtitle: "Before/after architecture",
      takeaway:
        "Multi-tier routing uses decision tables for exceptions and policy tiers, plus PI classification for pattern-based routing — reducing triage time while preserving compliance.",
      why: "This is the architecture story stakeholders understand: faster routing without uncontrolled AI.",
      paragraphs: [
        [
          s("Before: manual triage, scattered rules, inconsistent assignment. After: exception table → AI routing with confidence gate → triage queue for low confidence."),
        ],
        [
          s("Metrics: fewer reassignments, faster time-to-first-touch, lower MTTR, and transparent audit fields."),
        ],
        [
          s("Change management: publish routing policy and train agents on override reasons — the human system matters."),
        ],
      ],
      workflowSteps: [
        "Baseline misroutes and time-to-assign.",
        "Deploy hybrid routing to one team.",
        "Scale after precision targets met and audit satisfied.",
      ],
      example: {
        title: "Routing transformed in 12 weeks",
        body: "Enterprise reduced reassignments and improved SLA compliance by combining deterministic policy tables with PI routing. The biggest win was trust: humans understood why routing happened and could override safely.",
      },
    }),
    buildGuideSection({
      id: "pdi-hybrid-routing",
      number: "3.8",
      title: "Configuration walkthrough",
      subtitle: "Build a hybrid routing flow on PDI",
      takeaway:
        "PDI lab: create PI routing model → add classify step → decision table on confidence → route/triage → log overrides → retrain cadence.",
      why: "This is the hands-on proof you can ship hybrid AI + rules in ServiceNow.",
      paragraphs: [
        [s("Step 1: Train PI assignment group classifier (from Chapter 4).")],
        [s("Step 2: Create decision table with exceptions and confidence bands.")],
        [s("Step 3: Flow: apply exceptions, then classify, then branch by table result.")],
        [s("Step 4: Log predicted group/confidence and override events.")],
        [s("Step 5: Run 20 test incidents; tune thresholds and exceptions.")],
      ],
      workflowSteps: [
        "Implement three-band gating in Flow.",
        "Create triage task for low confidence.",
        "Measure override rate and misroutes on test pack.",
      ],
      artifact: {
        id: "pdi-hybrid-routing-checklist",
        title: "PDI hybrid routing checklist",
        description: "What must exist before demoing routing.",
        content:
          `- [ ] PI model trained + evaluated\n- [ ] Decision table exceptions defined\n- [ ] Confidence bands implemented\n- [ ] Fallback triage queue exists\n- [ ] Override logging fields added\n- [ ] Test pack executed + results recorded`,
      },
    }),
  ],
};

