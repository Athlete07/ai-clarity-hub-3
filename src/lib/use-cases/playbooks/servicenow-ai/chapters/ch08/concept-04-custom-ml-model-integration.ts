import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_04_CUSTOM_ML_INTEGRATION: GuideConcept = {
  number: 4,
  title: "Custom ML Model Integration",
  subtitle:
    "When to BYOM, integration patterns, hosting, features, inference/latency, governance, and a real-world case",
  sections: [
    buildGuideSection({
      id: "when-bring-your-own-model",
      number: "4.1",
      title: "When to bring your own model",
      subtitle: "Where native ML is insufficient",
      takeaway:
        "Bring your own model when you need specialized signals, proprietary features, multimodal inputs, or strict performance requirements — otherwise prefer native PI for lower ops burden.",
      why: "Custom models introduce a new lifecycle (training, drift, incident response). You only want that cost when it buys real capability.",
      paragraphs: [
        [
          s("Good reasons: fraud/risk scoring, anomaly detection on proprietary telemetry, image/PDF understanding beyond built-in extraction, or tight latency SLOs."),
        ],
        [
          s("Bad reasons: re-implementing classification/routing that PI already handles with platform-native governance and workbench tooling."),
        ],
      ],
      workflowSteps: [
        "Write the capability gap in one sentence.",
        "Define quality + latency + cost targets (and who owns them).",
        "Commit to a retraining + monitoring cadence before going live.",
      ],
    }),
    buildGuideSection({
      id: "integration-patterns",
      number: "4.2",
      title: "The integration patterns",
      subtitle: "REST API calls, spoke-based integration, and streaming",
      takeaway:
        "Wrap external model calls as IntegrationHub actions/subflows with strict schemas, timeouts, and logging. Use streaming for long generation UX — not for simple scoring.",
      why: "If model calls are scattered across scripts, you lose reuse, auditability, and centralized controls.",
      paragraphs: [
        [
          s("Patterns: "),
          x("sync scoring", "score on create/update"),
          s(", "),
          x("async scoring", "queue + callback"),
          s(", "),
          x("batch scoring", "nightly backfill"),
          s(". Choose by latency and user experience constraints."),
        ],
      ],
      workflowSteps: [
        "Create a single IntegrationHub action per model capability.",
        "Standardize request/response JSON and validate server-side.",
        "Add degraded mode (rules/human review) for failures or low confidence.",
      ],
    }),
    buildGuideSection({
      id: "hosting-options",
      number: "4.3",
      title: "Model hosting options",
      subtitle: "Azure ML, SageMaker, Vertex AI, and on-premise endpoints",
      takeaway:
        "Hosting choice is an architecture decision: managed platforms reduce ops but constrain networking; on-prem gives control but shifts reliability burden to you.",
      why: "Most production outages come from network/auth/versioning, not the model.",
      paragraphs: [
        [
          s("Choose based on: data residency, IAM integration, observability, version pinning, and your team's SRE maturity."),
        ],
      ],
      workflowSteps: [
        "Document region/residency and network boundaries.",
        "Define SLOs (p95 latency, error rate, uptime).",
        "Define deployment pattern (canary + rollback).",
      ],
    }),
    buildGuideSection({
      id: "feature-engineering",
      number: "4.4",
      title: "Feature engineering for ServiceNow data",
      subtitle: "Turning platform records into model inputs",
      takeaway:
        "Maintain a feature contract: which fields feed the model, how they’re normalized, and what sensitive data is excluded. Version the features, not just the model.",
      why: "Feature drift silently breaks models and complicates audits.",
      paragraphs: [
        [
          s("Use a feature dictionary and purpose limitation: only include what the capability needs (data minimization)."),
        ],
        [
          s("For high-cardinality text, consider embeddings or summaries — but treat them as sensitive derived data with retention rules."),
        ],
      ],
      workflowSteps: [
        "Create a feature dictionary with owner and sensitivity flags.",
        "Version the feature payload schema.",
        "Add validation to block missing/invalid features.",
      ],
    }),
    buildGuideSection({
      id: "inference-pipeline",
      number: "4.5",
      title: "The inference pipeline",
      subtitle: "Real-time scoring during record processing",
      takeaway:
        "Production inference = assemble inputs → validate → call with timeout → validate output → persist score+metadata → act with confidence gates.",
      why: "Without validation and gates, model errors cascade into workflow failures.",
      paragraphs: [
        [
          s("Persist metadata: model version, feature version, request id, latency, confidence. This is your audit trail."),
        ],
        [
          s("Use confidence bands and policy tables: high confidence auto-apply, medium suggest, low route to review."),
        ],
      ],
      workflowSteps: [
        "Enforce strict JSON schemas for request/response.",
        "Add timeouts + retries + circuit breaker.",
        "Branch by confidence and log overrides for evaluation.",
      ],
    }),
    buildGuideSection({
      id: "latency-management",
      number: "4.6",
      title: "Latency management",
      subtitle: "Don’t slow down the user experience",
      takeaway:
        "Keep AI off the critical path unless it must be real-time. Use async patterns and caching; enforce latency budgets per workflow.",
      why: "A slow platform feature is a failed feature, even if it’s accurate.",
      paragraphs: [
        [
          s("Latency levers: small payloads, locality (region), async queues, and caching stable scores."),
        ],
        [
          s("If you must be synchronous, prefer fast models and hard timeouts with degraded mode."),
        ],
      ],
      workflowSteps: [
        "Define p95 latency budgets per workflow.",
        "Move non-critical AI calls to async processing.",
        "Implement degraded mode after timeout threshold.",
      ],
    }),
    buildGuideSection({
      id: "model-governance",
      number: "4.7",
      title: "Model governance for custom models",
      subtitle: "Documentation, versioning, and retraining schedules",
      takeaway:
        "Custom ML must be governed like production software: owner, model cards, drift monitoring, retraining cadence, and change control with regression tests.",
      why: "Without governance, the model becomes an unowned dependency and a compliance risk.",
      paragraphs: [
        [
          s("Maintain a model card: intended use, training data summary, bias checks, metrics, and limitations."),
        ],
        [
          s("Change control: new model versions require evaluation and rollback plan."),
        ],
      ],
      workflowSteps: [
        "Create a model card + feature dictionary.",
        "Set drift alerts and retraining triggers.",
        "Run side-by-side scoring before promotion.",
      ],
    }),
    buildGuideSection({
      id: "fraud-case-study",
      number: "4.8",
      title: "Real use case",
      subtitle: "Custom fraud detection in financial services",
      takeaway:
        "The winning architecture separates scoring from action: model produces a risk score + evidence; workflows apply policy, confidence gates, and human review before enforcement.",
      why: "In regulated environments, the system must be explainable and reversible.",
      paragraphs: [
        [
          s("Flow: ingest case → assemble features → score → route high-risk to investigation queue → auto-block only with approval gates and audit logs."),
        ],
        [
          s("The score was not the decision — policy tables and investigators were."),
        ],
      ],
      workflowSteps: [
        "Define risk bands and actions per band.",
        "Require evidence and explanation fields in outputs.",
        "Track false positives and retrain with governed cycles.",
      ],
    }),
  ],
};

