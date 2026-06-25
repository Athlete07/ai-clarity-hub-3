import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_07_ARCHITECT_PATTERNS: GuideConcept = {
  number: 7,
  title: "Architect-level Design Patterns",
  subtitle:
    "Event-driven and async AI, circuit breakers, retries/timeouts, fan-out, HITL, shadow mode, and a pattern selection guide",
  sections: [
    buildGuideSection({
      id: "event-driven-ai",
      number: "7.1",
      title: "The event-driven AI pattern",
      subtitle: "Trigger AI from platform events (not synchronous requests)",
      takeaway:
        "Use events to trigger AI enrichment after record creation/update. This keeps UX fast, makes failures recoverable, and reduces coupling.",
      why: "Synchronous AI on critical paths is the #1 scalability and reliability killer.",
      paragraphs: [[s("Event-driven AI is ideal for summaries, categorization suggestions, enrichment, and post-processing outputs.")]],
      workflowSteps: [
        "Emit event on record create/update.",
        "Queue an AI job that enriches the record.",
        "Notify/refresh UI when enrichment completes.",
      ],
    }),
    buildGuideSection({
      id: "async-processing",
      number: "7.2",
      title: "The async processing pattern",
      subtitle: "Decouple AI calls with queues and callbacks",
      takeaway:
        "Async processing adds backpressure and stability: queue work, cap concurrency, retry safely, and avoid thundering herds.",
      why: "Provider throttling + retries can create cascading failures without queueing controls.",
      paragraphs: [[s("Async is the default for non-real-time AI. Reserve sync for true decision gates.")]],
      workflowSteps: [
        "Define async queue per capability (draft/extract).",
        "Implement deduplication and idempotency keys.",
        "Cap retries and implement circuit breaker on backlog spikes.",
      ],
    }),
    buildGuideSection({
      id: "circuit-breaker",
      number: "7.3",
      title: "The circuit breaker pattern",
      subtitle: "Graceful degradation when provider is unavailable",
      takeaway:
        "Circuit breakers prevent runaway cost and cascading failures: after repeated errors, stop calling the provider and switch to degraded mode until recovery.",
      why: "Without breakers, outages become expensive and noisy incidents.",
      paragraphs: [
        [
          s("Pair with explicit degraded mode: show AI Search results, use rules-only routing, or route to human queue."),
        ],
      ],
      workflowSteps: [
        "Define error thresholds and cooldown windows.",
        "Implement kill switch per provider/capability.",
        "Alert when breaker opens and track recovery.",
      ],
    }),
    buildGuideSection({
      id: "retry-timeout",
      number: "7.4",
      title: "The retry and timeout pattern",
      subtitle: "Prevent AI failures from cascading",
      takeaway:
        "Use tight timeouts and bounded retries. Classify errors: retry transient, do not retry schema/validation failures. Always fail safe.",
      why: "Unbounded retries cause storms and multiply cost.",
      paragraphs: [[s("Separate failure classes: TIMEOUT/RATE_LIMIT vs SCHEMA_INVALID/LOW_CONFIDENCE.")]],
      workflowSteps: [
        "Set timeouts per channel (portal vs background).",
        "Retry with backoff for transient failures only.",
        "Fallback after retry cap to degraded mode or human queue.",
      ],
    }),
    buildGuideSection({
      id: "fan-out",
      number: "7.5",
      title: "The fan-out pattern",
      subtitle: "Send one task to multiple models and pick the best",
      takeaway:
        "Fan-out is expensive but powerful for high-value tasks: run two models in parallel, score outputs, and select the winner. Use sparingly with strict budgets.",
      why: "It can dramatically improve quality for key workflows, but can double cost if overused.",
      paragraphs: [
        [
          s("Use when: executive summaries, high-risk compliance extraction, or critical incident narratives — not for routine drafts."),
        ],
      ],
      workflowSteps: [
        "Define when fan-out is allowed (policy).",
        "Implement scoring rubric (schema, groundedness, style).",
        "Log costs and disable if ROI isn’t proven.",
      ],
    }),
    buildGuideSection({
      id: "hitl",
      number: "7.6",
      title: "The human-in-the-loop pattern",
      subtitle: "Insert human review into AI workflows",
      takeaway:
        "HITL is the trust engine: use approval gates, review queues, and confidence thresholds. Start conservative and expand autonomy based on evidence.",
      why: "Full autonomy is rarely right at day one, especially for writes and compliance impacts.",
      paragraphs: [[s("Design approvals as a product: clear UI, evidence, and audit trails.")]],
      workflowSteps: [
        "Define confidence bands and actions per band.",
        "Build review queues with evidence and citations.",
        "Measure override rates and adjust thresholds.",
      ],
    }),
    buildGuideSection({
      id: "shadow-mode",
      number: "7.7",
      title: "The shadow mode pattern",
      subtitle: "Run AI alongside existing process before cutover",
      takeaway:
        "Shadow mode runs AI in parallel without affecting outcomes, so you can measure accuracy, drift, and cost before enabling automation.",
      why: "It’s the safest way to validate AI in production-like conditions.",
      paragraphs: [[s("Shadow mode produces the evidence needed for governance boards: quality metrics on real traffic.")]],
      workflowSteps: [
        "Run AI predictions/drafts but do not apply them.",
        "Log outcomes and compare to human decisions.",
        "Enable automation only after thresholds are met.",
      ],
    }),
    buildGuideSection({
      id: "pattern-selection-guide",
      number: "7.8",
      title: "Pattern selection guide",
      subtitle: "Decision tree for choosing the right pattern",
      takeaway:
        "Choose patterns by criticality, latency needs, and risk: event-driven + async by default; circuit breaker always; HITL for high-impact writes; shadow mode for validation.",
      why: "A pattern guide prevents ad hoc designs and inconsistent risk posture.",
      paragraphs: [
        [
          s("Rule of thumb: if the workflow creates or updates a high-impact record, you need "),
          x("HITL or shadow mode first", "Start safe and earn autonomy."),
          s("."),
        ],
      ],
      workflowSteps: [
        "Classify workflows by risk (assist vs decide vs act).",
        "Pick default patterns per risk tier.",
        "Standardize templates for each pattern (copy/paste).",
      ],
      artifact: {
        id: "pattern-selection-cheatsheet",
        title: "AI architecture patterns (cheatsheet)",
        description: "Quick mapping from use case to pattern.",
        content:
          `If UX must be fast → async/event-driven\nIf provider risk exists → circuit breaker + degraded mode\nIf action is high-risk → HITL + approvals\nIf unsure about quality → shadow mode\nIf quality is critical and budget allows → fan-out`,
      },
    }),
  ],
};

