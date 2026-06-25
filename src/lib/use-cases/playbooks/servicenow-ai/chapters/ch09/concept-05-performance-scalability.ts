import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_05_PERFORMANCE_SCALABILITY: GuideConcept = {
  number: 5,
  title: "Performance and Scalability",
  subtitle:
    "Latency budgets, throughput planning, caching, queueing, async patterns, load testing, bottleneck diagnosis, and scaling architecture",
  sections: [
    buildGuideSection({
      id: "latency-budgets",
      number: "5.1",
      title: "Latency budgets",
      subtitle: "Set and enforce response time targets",
      takeaway:
        "Define latency budgets per experience: agent assist can tolerate seconds; portal self-service needs snappy responses; record save must never block on slow AI.",
      why: "Latency determines adoption. If AI makes workflows slow, users will bypass it.",
      paragraphs: [
        [
          s("Budget by critical path: keep synchronous AI only where it must influence the immediate decision."),
        ],
      ],
      workflowSteps: [
        "Define p50/p95 latency targets per capability and channel.",
        "Set hard timeouts with degraded mode.",
        "Track latency by provider/model and route accordingly.",
      ],
    }),
    buildGuideSection({
      id: "throughput-planning",
      number: "5.2",
      title: "Throughput planning",
      subtitle: "Estimate request volume per population and use case",
      takeaway:
        "Throughput planning is a sizing exercise: users × calls per workflow × peak factors. You must size provider quotas, queues, and budgets before rollout.",
      why: "AI cost and rate limits are nonlinear at peak times.",
      paragraphs: [
        [
          s("Estimate peak: ticket storms, outages, and major change windows are your real load tests."),
        ],
      ],
      workflowSteps: [
        "Model daily and peak request volumes per capability.",
        "Reserve quotas and set throttles.",
        "Plan for burst handling via queues and async.",
      ],
    }),
    buildGuideSection({
      id: "caching-strategy",
      number: "5.3",
      title: "Caching strategy",
      subtitle: "What to cache and invalidation logic",
      takeaway:
        "Cache stable outputs (policy answers, KB summaries) and reuse record summaries. Invalidate based on source version changes and policy version changes.",
      why: "Caching is the largest cost lever and a major latency reducer.",
      paragraphs: [
        [
          s("Cache keys should include: capability id, locale, policy version, and source content version."),
        ],
      ],
      workflowSteps: [
        "Identify high-volume queries and stable content.",
        "Implement cache with explicit invalidation triggers.",
        "Measure cache hit rate and spend reduction.",
      ],
    }),
    buildGuideSection({
      id: "queue-management",
      number: "5.4",
      title: "Queue management for AI",
      subtitle: "Handle bursts without degrading UX",
      takeaway:
        "Use queues for non-critical AI tasks: prioritize by business impact, rate-limit by capability, and ensure retries don’t cause thundering herds.",
      why: "Burst load plus retries can create cascading failures and runaway cost.",
      paragraphs: [
        [
          s("Queues give you backpressure: the system stays stable even when providers throttle."),
        ],
      ],
      workflowSteps: [
        "Classify tasks as sync vs async.",
        "Implement priority queues and deduplication.",
        "Add circuit breaker when backlog grows beyond threshold.",
      ],
    }),
    buildGuideSection({
      id: "async-patterns",
      number: "5.5",
      title: "Async AI patterns",
      subtitle: "Move AI off critical path where possible",
      takeaway:
        "Async is the default for non-real-time capabilities: generate summaries after record creation, not during it; enrich records in the background; notify when ready.",
      why: "Async improves reliability and keeps the platform responsive.",
      paragraphs: [
        [
          s("Design pattern: create record → enqueue AI task → update record when complete → notify/refresh UI."),
        ],
      ],
      workflowSteps: [
        "Identify which AI steps can be delayed safely.",
        "Implement callbacks/update jobs.",
        "Provide UI status (pending/ready) to avoid confusion.",
      ],
    }),
    buildGuideSection({
      id: "load-testing",
      number: "5.6",
      title: "Load testing AI workflows",
      subtitle: "Simulate AI load on non-prod",
      takeaway:
        "Load test the integration layer, not just the UI: run synthetic workloads through flows, measure latency, error rates, queue backlog, and cost under peak.",
      why: "Most failures happen under peak conditions, not average usage.",
      paragraphs: [
        [
          s("Test with provider throttling and timeouts enabled. Confirm degraded modes behave correctly."),
        ],
      ],
      workflowSteps: [
        "Create synthetic incident/case bursts.",
        "Simulate provider rate limiting.",
        "Validate: no blocked intake and costs stay bounded.",
      ],
    }),
    buildGuideSection({
      id: "bottleneck-identification",
      number: "5.7",
      title: "Bottleneck identification",
      subtitle: "Find where latency is introduced",
      takeaway:
        "Diagnose end-to-end: UI → platform logic → retrieval → provider call → validation → storage. Don’t guess; instrument every step.",
      why: "Teams blame the model when the bottleneck is retrieval or payload bloat.",
      paragraphs: [
        [
          s("Key metrics: time in retrieval, time in provider, payload size, cache hit rate, and schema repair frequency."),
        ],
      ],
      workflowSteps: [
        "Add per-step timing logs with request ids.",
        "Correlate latency spikes to provider and payload changes.",
        "Optimize the highest contributor first.",
      ],
    }),
    buildGuideSection({
      id: "scalability-architecture",
      number: "5.8",
      title: "Scalability architecture",
      subtitle: "Design that scales with user growth",
      takeaway:
        "Scale by design: capability wrappers, queues, caching, model routing, and cost attribution. Growth without these becomes runaway spend and degraded UX.",
      why: "AI costs scale with usage; architecture must keep spend aligned with value.",
      paragraphs: [
        [
          s("A scalable system has bounded costs per capability and clear levers to throttle, cache, and degrade safely."),
        ],
      ],
      workflowSteps: [
        "Centralize all AI calls through wrappers with quotas.",
        "Build dashboards for spend and performance per capability.",
        "Review monthly and adjust routing/caching based on ROI.",
      ],
      artifact: {
        id: "ai-performance-slo-template",
        title: "AI SLO template (starter)",
        description: "Define SLOs per capability and channel.",
        content:
          `Capability | Channel | p95 latency | Timeout | Degraded mode | Error budget\n---|---|---|---|---|---\nIncident summary | Agent workspace | 4s | 6s | show cached/older summary | 1%\nPortal answer | Self-service | 2s | 3s | show AI Search + ticket | 2%\nRisk score | Change | 1s | 1.5s | rules-only | 0.5%`,
      },
    }),
  ],
};

