import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_06_RESPONSIBLE_AI: GuideConcept = {
  number: 6,
  title: "AI Governance and Responsible AI",
  subtitle:
    "Principles, bias, explainability, EU AI Act mapping, data minimization, consent/transparency, ethics review, and documentation templates",
  sections: [
    buildGuideSection({
      id: "responsible-ai-framework",
      number: "6.1",
      title: "The responsible AI framework",
      subtitle: "Principles for every Now Platform AI deployment",
      takeaway:
        "Responsible AI is operational: purpose limitation, least privilege, transparency, auditability, and human accountability. Make it policy + architecture, not a slide deck.",
      why: "Without governance, AI becomes a compliance blocker or a reputational event.",
      paragraphs: [
        [
          s("Translate principles into controls: approval gates, role scoping, retention rules, evaluation, and incident response."),
        ],
      ],
      workflowSteps: [
        "Define AI capability tiers (draft vs decision vs action).",
        "Assign controls per tier (approval, logging, monitoring).",
        "Create an AI governance board and review cadence.",
      ],
    }),
    buildGuideSection({
      id: "bias-detection",
      number: "6.2",
      title: "Bias detection",
      subtitle: "Identify and mitigate bias in ML trained on instance data",
      takeaway:
        "Bias usually enters through historical process bias. Measure outcomes by group, audit labels, and constrain automation with fairness checks and human review.",
      why: "If AI amplifies existing bias (routing, prioritization), it becomes a legal and ethical liability.",
      paragraphs: [
        [
          s("For PI models: evaluate errors across groups (location, org unit) where lawful and appropriate. For GenAI: evaluate tone and consistency."),
        ],
      ],
      workflowSteps: [
        "Audit label quality and representation.",
        "Track model performance by relevant segments.",
        "Add guardrails and escalation when bias signals appear.",
      ],
    }),
    buildGuideSection({
      id: "explainability",
      number: "6.3",
      title: "Explainability",
      subtitle: "Interpretable reasoning for AI decisions affecting people",
      takeaway:
        "Explainability is evidence + policy trace, not raw model reasoning. Provide what an auditor and user need to understand the decision and contest it.",
      why: "Opaque decisions reduce trust and create audit failures.",
      paragraphs: [
        [
          s("Use an explanation schema: evidence fields used, rules applied, and confidence band. Store it with the record."),
        ],
        [
          s("For GenAI, use citations and source references. For PI, use confidence and top drivers where available."),
        ],
      ],
      workflowSteps: [
        "Require 'evidence_used' and 'confidence' in outputs.",
        "Persist explanations with retention and access controls.",
        "Provide a contest/override workflow for impacted users.",
      ],
    }),
    buildGuideSection({
      id: "eu-ai-act",
      number: "6.4",
      title: "The EU AI Act and ServiceNow",
      subtitle: "Which use cases are high-risk and compliance needs",
      takeaway:
        "Map AI capabilities to risk levels: assistance vs decisions vs actions. High-impact decisions (employment, access, compliance) require stronger controls, documentation, and monitoring.",
      why: "Risk classification determines governance burden. Getting it wrong delays go-live.",
      paragraphs: [
        [
          s("Practical approach: categorize use cases by impact and autonomy, then apply escalating controls: evaluation, documentation, transparency, and human oversight."),
        ],
      ],
      workflowSteps: [
        "Create an AI use-case register with risk tiers.",
        "Apply required controls per tier (HITL, logging, testing).",
        "Review regularly as scope expands.",
      ],
    }),
    buildGuideSection({
      id: "data-minimisation",
      number: "6.5",
      title: "Data minimisation",
      subtitle: "Use only necessary data and delete what isn’t needed",
      takeaway:
        "Minimize data sent to models: include only relevant fields, redact PII, and enforce retention. Derived artifacts (embeddings, summaries) are data too.",
      why: "Over-sharing increases breach risk and compliance scope.",
      paragraphs: [
        [
          s("Establish a context budget per capability and a redaction policy for sensitive fields before external calls."),
        ],
      ],
      workflowSteps: [
        "Define allowed fields per capability.",
        "Implement redaction before model calls.",
        "Set retention for prompts, outputs, embeddings.",
      ],
    }),
    buildGuideSection({
      id: "consent-transparency",
      number: "6.6",
      title: "Consent and transparency",
      subtitle: "Inform users when AI is involved",
      takeaway:
        "Users should know when AI drafted, recommended, or acted. Provide UI indicators, disclaimers for drafts, and clear escalation paths to humans.",
      why: "Transparency reduces over-reliance and builds trust.",
      paragraphs: [
        [
          s("Practical: label AI-generated drafts, show citations, and provide feedback controls. For decisions, show confidence band and evidence."),
        ],
      ],
      workflowSteps: [
        "Add UI labels for AI-generated content.",
        "Provide feedback and contest mechanisms.",
        "Train agents and end users on correct usage.",
      ],
    }),
    buildGuideSection({
      id: "ethics-review",
      number: "6.7",
      title: "The AI ethics review process",
      subtitle: "Governance gate before production",
      takeaway:
        "Operationalize ethics: a review gate that checks purpose, data, risk, controls, testing, and monitoring — and blocks go-live until minimum standards are met.",
      why: "Without a gate, risky AI ships by accident.",
      paragraphs: [
        [
          s("A good gate is lightweight but mandatory. It produces an approval artifact for audit and future changes."),
        ],
      ],
      workflowSteps: [
        "Define a standard review checklist and owners.",
        "Require evidence: eval results, logs, rollback plan.",
        "Re-run review when scope/autonomy changes.",
      ],
    }),
    buildGuideSection({
      id: "responsible-ai-template",
      number: "6.8",
      title: "Responsible AI documentation template",
      subtitle: "The record every production AI capability should maintain",
      takeaway:
        "Every AI capability needs a documented 'trust pack': purpose, data sources, controls, eval results, monitoring, and incident response plan.",
      why: "This is what gets you through architecture board, legal, and auditors.",
      paragraphs: [
        [
          s("Keep it short but complete. Store it alongside configuration and version it with changes."),
        ],
      ],
      workflowSteps: [
        "Create one trust pack per capability.",
        "Attach eval results and monitoring dashboards.",
        "Update on every major version change.",
      ],
      artifact: {
        id: "trust-pack-template",
        title: "Responsible AI trust pack (template)",
        description: "Copy/paste for governance reviews.",
        content:
          `1) Capability\n- Name, owner, users, channels\n- Intended use + non-intended use\n\n2) Data\n- Sources (tables/KB/external)\n- PII handling + redaction\n- Residency + retention\n\n3) Model\n- Provider/model versions\n- Routing/fallback rules\n- Confidence bands\n\n4) Controls\n- ACL scope, approvals, HITL gates\n- Rate limits/circuit breakers\n\n5) Evaluation\n- Test set description\n- Quality + safety metrics\n\n6) Monitoring\n- Dashboards, alerts, feedback loops\n\n7) Incident Response\n- Kill switch + rollback plan\n- Escalation contacts`,
      },
    }),
  ],
};

