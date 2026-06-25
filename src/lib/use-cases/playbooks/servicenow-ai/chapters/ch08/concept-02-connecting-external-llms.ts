import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_02_EXTERNAL_LLMS: GuideConcept = {
  number: 2,
  title: "Connecting External LLMs",
  subtitle:
    "Provider support, configuration, model selection, private deployments, fallback, side-by-side evaluation, and PDI walkthrough",
  sections: [
    buildGuideSection({
      id: "supported-providers",
      number: "2.1",
      title: "The supported provider list",
      subtitle:
        "OpenAI, Azure OpenAI, Anthropic Claude, Google Gemini, and others",
      takeaway:
        "Enterprises typically operate multiple LLM providers for residency, cost, and capability. Your architecture should support multi-provider routing rather than vendor religion.",
      why: "One provider rarely satisfies every constraint (EU residency, long context, cost, ecosystem). Multi-provider is the enterprise reality.",
      paragraphs: [
        [
          s("Provider choice is a policy decision: data residency and procurement constraints often decide provider for a region before capability does."),
        ],
        [
          s("Capability differences still matter: long-context synthesis, tool-use quality, and structured output reliability vary. Route by task type."),
        ],
        [
          s("Avoid mixing providers ad hoc per developer. Centralize connections, allowlists, and logging so governance is consistent."),
        ],
      ],
      workflowSteps: [
        "List providers your org is allowed to use (by region).",
        "Map capabilities to providers (drafting, extraction, embeddings).",
        "Document provider routing rules as platform policy.",
      ],
      example: {
        title: "EU + US split",
        body: "EU tenant used Azure private endpoints; US used a different provider for long-context analysis. Both were abstracted behind a single 'GenerateDraft' capability wrapper.",
      },
    }),
    buildGuideSection({
      id: "provider-config",
      number: "2.2",
      title: "Provider configuration",
      subtitle:
        "Connection record, authentication, and endpoint configuration",
      takeaway:
        "Provider config should live in connection records with least-privilege credentials, endpoint allowlists, and environment separation — never in scripts or prompts.",
      why: "Most AI security incidents are integration incidents: leaked keys, wrong endpoints, or missing redaction in logs.",
      paragraphs: [
        [
          s("Separate dev/test/prod connections. Never reuse production keys in dev. Enforce rotation, owners, and revocation procedures."),
        ],
        [
          s("Endpoint governance: allowlist hostnames and paths. For private endpoints, document network boundaries and outbound restrictions."),
        ],
        [
          s("Logging: store request metadata, not secrets. Redact request/response bodies where policies require."),
        ],
      ],
      workflowSteps: [
        "Create provider connection objects per environment.",
        "Implement secret rotation schedule and owners.",
        "Test failure modes: auth error, timeout, rate limit.",
      ],
      example: {
        title: "Connection separation prevented leakage",
        body: "Dev key leaked in a test log; because prod keys were separate, no production impact occurred. Rotation policy resolved quickly.",
      },
    }),
    buildGuideSection({
      id: "model-selection",
      number: "2.3",
      title: "Model selection",
      subtitle:
        "Choosing models by cost and capability",
      takeaway:
        "Choose models by task: cheap/fast for classification and extraction, stronger for complex synthesis and agentic planning. Model routing is cost engineering and quality engineering.",
      why: "Defaulting to the most expensive model is the fastest way to get your program cut.",
      paragraphs: [
        [
          s("Route tasks: extraction → smaller model; routing/classification → PI or small model; long-doc reasoning → stronger model; drafts → medium model."),
        ],
        [
          s("Define acceptance criteria and test harness per task type. If a cheaper model meets the criteria, use it."),
        ],
        [
          s("Include latency SLOs. A portal bot that takes 12 seconds will be bypassed regardless of quality."),
        ],
      ],
      workflowSteps: [
        "Label top 20 AI workflows by complexity and risk.",
        "Assign default models per workflow category.",
        "Review monthly: spend per workflow and quality signals.",
      ],
      example: {
        title: "Routing used PI; drafts used LLM",
        body: "Org stopped using LLM for routing and used PI instead. LLM spend dropped while quality improved because the right tool was chosen.",
      },
    }),
    buildGuideSection({
      id: "private-deployments",
      number: "2.4",
      title: "Private deployment options",
      subtitle:
        "Azure private endpoints, AWS Bedrock, and residency implications",
      takeaway:
        "Private deployments help satisfy residency and network controls, but they add operational complexity. Document data flow, regions, and retention clearly for compliance.",
      why: "Most enterprise blockers are residency and DLP, not model quality.",
      paragraphs: [
        [
          s("Options: provider-managed private endpoints, cloud-managed platforms (e.g., Bedrock), or self-hosted endpoints. Each changes responsibility boundaries."),
        ],
        [
          s("Residency: where prompts are processed and where logs are stored. Don’t assume 'private' means 'no data leaves region' without documentation."),
        ],
        [
          s("Design degraded modes: private endpoints can still fail. Workflows must continue safely without AI."),
        ],
      ],
      workflowSteps: [
        "Document data flow diagram with regions and subprocessors.",
        "Define retention policy for prompts/logs.",
        "Run a compliance review before production use.",
      ],
      example: {
        title: "Residency decision drove provider choice",
        body: "EU subsidiary required EU-only processing. Private endpoints satisfied the constraint; the platform routed EU requests accordingly while US stayed on a different provider.",
      },
    }),
    buildGuideSection({
      id: "fallback-config",
      number: "2.5",
      title: "Fallback configuration",
      subtitle:
        "What happens when the primary provider is unavailable",
      takeaway:
        "Fallback must be intentional: alternate provider/model for low-risk tasks, degraded mode for high-risk tasks, and always explicit logging of fallbacks.",
      why: "Silent fallbacks create quality drift and compliance risk. Explicit fallbacks create resilience.",
      paragraphs: [
        [
          s("Fallback hierarchy: primary provider → alternate provider (if allowed) → degraded mode (no AI) → human queue."),
        ],
        [
          s("Risk gating: for sensitive workflows, do not fallback to a provider that violates residency or policy; degrade instead."),
        ],
        [
          s("Observability: track fallback rate and reasons. Spikes indicate provider instability or throttling."),
        ],
      ],
      workflowSteps: [
        "Define fallback policy per capability and region.",
        "Implement test: simulate provider outage.",
        "Alert on high fallback rates and error spikes.",
      ],
      example: {
        title: "Fallback preserved portal experience",
        body: "When GenAI provider failed, portal switched to AI Search results and guided actions. Users still resolved common issues; only narrative summaries were deferred.",
      },
    }),
    buildGuideSection({
      id: "side-by-side-testing",
      number: "2.6",
      title: "Side-by-side testing",
      subtitle:
        "Running two providers in parallel to compare quality and cost",
      takeaway:
        "Side-by-side evaluation compares providers on real tasks with stable test sets and cost telemetry. Choose by measured outcomes, not vendor marketing.",
      why: "Provider selection is a procurement and architecture decision. Without evaluation, it becomes politics.",
      paragraphs: [
        [
          s("Use a fixed evaluation set: 50–200 prompts across workflows (drafts, extraction, compliance). Score quality and safety."),
        ],
        [
          s("Measure cost: token usage, latency, error rates, and downstream rework (edit distance)."),
        ],
        [
          s("Select providers per task type if needed. Multi-provider routing is often the best solution."),
        ],
      ],
      workflowSteps: [
        "Build an eval suite by workflow category.",
        "Run both providers; log quality scores and cost.",
        "Adopt winner per category; set review cadence quarterly.",
      ],
      example: {
        title: "Different winners for different tasks",
        body: "Provider A won extraction cost; Provider B won long-doc synthesis. Routing by task type delivered best overall program performance.",
      },
    }),
    buildGuideSection({
      id: "provider-cost-management",
      number: "2.7",
      title: "Provider cost management",
      subtitle:
        "Tracking and allocating spend across providers",
      takeaway:
        "Cost governance requires tagging calls by capability, business unit, and channel; allocating spend; and enforcing quotas and throttles to prevent runaway bills.",
      why: "Multi-provider setups become unmanageable without cost allocation. Finance will shut it down.",
      paragraphs: [
        [
          s("Track spend by: capability (draft/extract), workflow (incident summary), channel (portal/agent), and org unit."),
        ],
        [
          s("Enforce quotas: per-day call limits, per-user limits, and max payload caps. Add circuit breakers on anomalies."),
        ],
        [
          s("Optimize spend: caching, summaries, model routing, and batch processing for offline tasks."),
        ],
      ],
      workflowSteps: [
        "Add metadata tags to every AI call (capability, owner).",
        "Build monthly chargeback report per business unit.",
        "Alert on spend anomalies and call volume spikes.",
      ],
      example: {
        title: "Chargeback prevented abuse",
        body: "When spend was attributed to teams, wasteful usage decreased. Teams optimized prompts and caching because they felt the cost.",
      },
    }),
    buildGuideSection({
      id: "pdi-walkthrough",
      number: "2.8",
      title: "Configuration walkthrough",
      subtitle:
        "Connect an external LLM to a ServiceNow instance on PDI",
      takeaway:
        "PDI lab: create connection record → configure auth + endpoint allowlist → build a Flow action wrapper → call it from a test flow → log metadata → test degraded mode and rate limits.",
      why: "This is the hands-on proof you can integrate external LLMs safely without creating shadow IT.",
      paragraphs: [
        [s("Step 1: Create provider connection for dev/PDI with least-privilege key.")],
        [s("Step 2: Define endpoint allowlist and payload caps.")],
        [s("Step 3: Build IntegrationHub action or Flow wrapper returning structured output.")],
        [s("Step 4: Call from a flow; store output + metadata on record.")],
        [s("Step 5: Simulate failures: wrong key, timeout, rate limit; verify degraded mode.")],
      ],
      workflowSteps: [
        "Implement a 'DraftSummary' action with max input size.",
        "Add logging fields: provider, model, latency, request_id.",
        "Add circuit breaker: if errors spike, disable external calls.",
      ],
      artifact: {
        id: "external-llm-connection-checklist",
        title: "External LLM connection checklist",
        description: "Use for security review.",
        content:
          `- [ ] Provider allowlisted by policy\n- [ ] Connection per environment (dev/test/prod)\n- [ ] Least-privilege credential + rotation\n- [ ] Endpoint allowlist\n- [ ] Payload caps + redaction\n- [ ] Logging metadata (no secrets)\n- [ ] Rate limits + circuit breakers\n- [ ] Degraded mode path\n- [ ] Side-by-side eval suite`,
      },
    }),
  ],
};

