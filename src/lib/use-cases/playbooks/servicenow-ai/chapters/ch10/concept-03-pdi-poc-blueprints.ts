import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_03_PDI_POC_BLUEPRINTS: GuideConcept = {
  number: 3,
  title: "POC Blueprints on PDI",
  subtitle:
    "Seven high-signal POCs you can demo, plus a rubric that makes the demo credible to architects and interviewers",
  sections: [
    buildGuideSection({
      id: "poc-now-assist-itsm",
      number: "3.1",
      title: "POC 1: Now Assist for ITSM",
      subtitle: "Incident summarization + resolution notes end to end",
      takeaway:
        "A credible GenAI POC is an end-to-end workflow: enable skill → ground context → store output → human approval → measure acceptance and edit distance.",
      why: "Demos fail when they show a single button click without governance or measurement.",
      paragraphs: [[s("Build: incident → summary panel + resolution draft → approval gate → store on record → feedback capture.")]],
      workflowSteps: [
        "Create 20 incidents and run the assist flow.",
        "Measure accept/edit rate and time-to-resolution change.",
        "Add degraded mode for timeouts and missing context.",
      ],
    }),
    buildGuideSection({
      id: "poc-pi-classifier",
      number: "3.2",
      title: "POC 2: Predictive Intelligence classifier",
      subtitle: "Category + assignment group prediction",
      takeaway:
        "PI POCs win when they show measurable routing accuracy with confidence bands and override logging for retraining.",
      why: "Classification is cheap, measurable, and high ROI at volume.",
      paragraphs: [[s("Build: training dataset → model → runtime classification in Flow → confidence gating → override capture.")]],
      workflowSteps: [
        "Train on a clean subset of incidents with stable labels.",
        "Apply confidence bands: auto/suggest/manual.",
        "Track override rate and retrain triggers.",
      ],
    }),
    buildGuideSection({
      id: "poc-triage-agent",
      number: "3.3",
      title: "POC 3: AI Agent for triage",
      subtitle: "Reads, assesses, and routes incidents autonomously",
      takeaway:
        "Triage agent POCs must demonstrate tool governance: read-only first, limited write actions behind approvals, and full traceability of tool calls.",
      why: "Agent demos get blocked when they ignore trust boundaries.",
      paragraphs: [[s("Build: agent reads incident → proposes category/assignment → calls a routing tool → requests approval → applies updates.")]],
      workflowSteps: [
        "Start with suggestion-only mode.",
        "Add approval gate before any record update.",
        "Log every tool call with request id and result metadata.",
      ],
    }),
    buildGuideSection({
      id: "poc-va-genai",
      number: "3.4",
      title: "POC 4: Virtual Agent with GenAI",
      subtitle: "Self-service with AI-powered free-text responses",
      takeaway:
        "VA + GenAI POCs succeed when they show retrieval grounding and smooth fallback to ticket creation with context transfer.",
      why: "A chat that answers incorrectly hurts trust more than no chat at all.",
      paragraphs: [[s("Build: VA topic → retrieve KB → generate cited answer → offer guided actions → escalate with summary when needed.")]],
      workflowSteps: [
        "Enable citations and require retrieval for answers.",
        "Measure containment rate with honest attribution.",
        "Test failure cases: empty retrieval, injection text, after-hours handoff.",
      ],
    }),
    buildGuideSection({
      id: "poc-document-intel",
      number: "3.5",
      title: "POC 5: Document Intelligence",
      subtitle: "Contract pipeline from PDF to structured record",
      takeaway:
        "Document POCs must include validation and exception handling: confidence thresholds, human review queues, and mapping to target tables.",
      why: "Extraction without validation creates silent data corruption.",
      paragraphs: [[s("Build: ingest PDF → classify → extract fields + confidence → validate → map to record → route tasks.")]],
      workflowSteps: [
        "Define thresholds per field (amount vs date).",
        "Create review queue for low confidence fields.",
        "Track accuracy and rework time savings.",
      ],
    }),
    buildGuideSection({
      id: "poc-custom-llm-integration",
      number: "3.6",
      title: "POC 6: Custom LLM integration",
      subtitle: "External model connected to Flow via IntegrationHub",
      takeaway:
        "Custom LLM POCs must show centralized credentials, endpoint allowlists, payload caps, and degraded mode — not a raw API call in a script.",
      why: "Security rejects ‘API key in script’ instantly.",
      paragraphs: [[s("Build: IntegrationHub action → capability wrapper → flow call → structured output + logging + fallback.")]],
      workflowSteps: [
        "Create connection record with least privilege key.",
        "Implement schema validation for outputs (JSON).",
        "Test timeout and circuit breaker behavior.",
      ],
    }),
    buildGuideSection({
      id: "poc-multi-agent",
      number: "3.7",
      title: "POC 7: Multi-agent orchestration",
      subtitle: "Coordinator + two specialists on a shared goal",
      takeaway:
        "Multi-agent POCs win when they show decomposition, parallel execution, conflict resolution, and a single audit trail across agents.",
      why: "Without orchestration discipline, multi-agent becomes chaos.",
      paragraphs: [
        [
          s("Pattern: coordinator decomposes → specialist agents run in parallel → coordinator merges and requests approvals → executes tool calls."),
        ],
      ],
      workflowSteps: [
        "Define shared context object and state fields.",
        "Implement handoff schema between agents.",
        "Add human review step for conflicting outputs.",
      ],
    }),
    buildGuideSection({
      id: "poc-rubric",
      number: "3.8",
      title: "POC assessment rubric",
      subtitle: "Score demos and present them credibly",
      takeaway:
        "A good POC is scored on: outcome impact, safety, observability, reproducibility, and honest metrics. A flashy demo without gates is a fail.",
      why: "Architects and interviewers look for production thinking, not novelty.",
      paragraphs: [
        [
          s("Rubric dimensions: value (KPI change), trust (controls), ops (logs/SLOs), and clarity (simple narrative)."),
        ],
      ],
      workflowSteps: [
        "Score each POC out of 5 across value/trust/ops/demo clarity.",
        "Include failure tests (timeouts, low confidence, injection).",
        "Prepare a 5-minute demo script + 1-page architecture diagram.",
      ],
      artifact: {
        id: "pdi-poc-rubric",
        title: "PDI POC rubric (scorecard)",
        description: "Use to validate POCs before interviews or stakeholder demos.",
        content:
          `Dimension | 1 | 3 | 5\n---|---|---|---\nValue | unclear | some KPI | measurable KPI\nSafety | none | some gates | strong HITL+policy\nOps | none | basic logs | SLOs+alerts+trace\nRepro | fragile | mostly repeat | scripted repeatable\nNarrative | confusing | okay | crisp story`,
      },
    }),
  ],
};

