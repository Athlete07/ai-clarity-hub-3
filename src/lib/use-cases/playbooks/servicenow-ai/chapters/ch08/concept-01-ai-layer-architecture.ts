import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_01_AI_LAYER_ARCHITECTURE: GuideConcept = {
  number: 1,
  title: "The AI Layer Architecture",
  subtitle:
    "Provider abstraction, routing/fallback, APIs, caching, observability, roadmap signals, and extensibility design",
  sections: [
    buildGuideSection({
      id: "what-ai-layer-is",
      number: "1.1",
      title: "What the AI Layer is",
      subtitle:
        "The abstraction that decouples capabilities from model providers",
      takeaway:
        "The AI Layer is an abstraction boundary: your workflows call capabilities (summarise, classify, extract, draft) while the platform manages the underlying provider/model selection, policy, and execution controls.",
      why: "Provider churn is inevitable. Architectures that hard-code one vendor API into dozens of flows become brittle and expensive to change.",
      paragraphs: [
        [
          s("A mature enterprise design separates "),
          x("capability intent", "What you need: summary, extraction, answer."),
          s(" from "),
          x("provider implementation", "Which model runs it today: OpenAI, Claude, Gemini, etc."),
          s(".",
          ),
        ],
        [
          s("This mirrors other platform abstractions: you call Flow steps, not SQL; you call IntegrationHub actions, not raw sockets. The AI Layer aims to be the same for intelligence."),
        ],
        [
          s("Design consequence: you build around stable contracts (inputs/outputs/policy) and let providers be swappable behind the curtain."),
        ],
      ],
      workflowSteps: [
        "List 10 AI use cases in your org and rewrite them as capabilities (not vendors).",
        "Define a stable schema per capability (inputs, outputs, error codes).",
        "Route all workflows through that schema boundary (Flow subflow/tool).",
      ],
      example: {
        title: "Avoiding provider lock-in",
        body: "Instead of calling 'OpenAI chat completions' from 30 flows, the team called one 'GenerateDraft' capability subflow. When provider changed, only the subflow changed — not 30 business processes.",
      },
    }),
    buildGuideSection({
      id: "provider-framework",
      number: "1.2",
      title: "The AI provider framework",
      subtitle:
        "How connections to multiple providers are managed",
      takeaway:
        "A provider framework manages: connection records, auth, endpoint config, model catalogs, routing rules, quotas, and failover — with governance and logging consistent across providers.",
      why: "Multi-provider setups fail when each provider is configured differently, with different secrets, logs, and policies. Frameworks standardize.",
      paragraphs: [
        [
          s("Core elements: provider connection + credential management, model inventory, per-capability routing rules, and environment-specific settings (dev/test/prod)."),
        ],
        [
          s("Governance: allowlisted providers only, least-privilege credentials, and controlled rollout of new providers via staged testing."),
        ],
        [
          s("Avoid 'shadow providers': a developer with a personal API key in a script is a governance and audit failure."),
        ],
      ],
      workflowSteps: [
        "Create an entitlement and provider matrix per instance.",
        "Centralize credentials in connection objects.",
        "Add approval process for adding a new provider or model.",
      ],
      example: {
        title: "Two providers, one governance model",
        body: "Enterprise used Azure OpenAI for EU data residency and Claude for long-doc synthesis. Provider framework kept auth, logging, and rate limits consistent, avoiding fragmented governance.",
      },
    }),
    buildGuideSection({
      id: "now-intelligence-apis",
      number: "1.3",
      title: "The Now Intelligence APIs",
      subtitle:
        "Programmatic surface for calling AI from scripts and integrations",
      takeaway:
        "Use platform APIs or Flow actions (where available) to call AI capabilities programmatically — with consistent audit, ACL behavior, and error handling — instead of embedding raw provider calls in scripts.",
      why: "Direct provider calls in scripts become untraceable, ungoverned, and difficult to maintain. APIs are the control plane.",
      paragraphs: [
        [
          s("Preferred pattern: Flow subflow/tool wraps the AI call and returns a structured response. Scripts call the subflow/tool rather than calling the provider directly."),
        ],
        [
          s("API design should include: request id, model/provider metadata, confidence/quality flags, and safe failure codes."),
        ],
        [
          s("Treat AI APIs like any enterprise integration: versioned, monitored, and rate-limited."),
        ],
      ],
      workflowSteps: [
        "Create a single 'AI_Call' subflow/tool contract used by scripts and flows.",
        "Return structured outputs and store metadata on record.",
        "Add rate limits and degraded mode behavior.",
      ],
      example: {
        title: "One API surface saved a migration",
        body: "When the org changed providers, only the 'AI_Call' subflow changed. Scripts and business logic remained stable because they relied on the platform abstraction.",
      },
    }),
    buildGuideSection({
      id: "genai-controller",
      number: "1.4",
      title: "The generative AI controller",
      subtitle:
        "Internal routing and fallback logic for GenAI requests",
      takeaway:
        "A GenAI controller chooses provider/model per request based on policy: capability, data sensitivity, latency targets, cost ceilings, and availability — then applies fallbacks when needed.",
      why: "In production, outages and latency spikes happen. Without fallback logic, your workflow becomes brittle and users lose trust.",
      paragraphs: [
        [
          s("Routing inputs: capability type (draft vs extract), sensitivity tier, required context length, and time budget."),
        ],
        [
          s("Fallback tiers: primary model → alternate model/provider → degraded mode (no AI) → human queue. Fallback must be explicit, logged, and tested."),
        ],
        [
          s("Avoid silent fallback that changes quality without visibility. When provider changes, log it and surface it in ops dashboards."),
        ],
      ],
      workflowSteps: [
        "Define provider routing rules per capability (draft/extract).",
        "Define degraded mode path for each workflow.",
        "Test: simulate provider outage and confirm workflow continues safely.",
      ],
      example: {
        title: "Outage fallback preserved ticket intake",
        body: "Provider outage stopped GenAI drafts, but the flow continued using deterministic routing and queued drafts for later. Users were not blocked and operations stayed stable.",
      },
    }),
    buildGuideSection({
      id: "caching-cost-optimisation",
      number: "1.5",
      title: "Caching and cost optimisation",
      subtitle:
        "Reducing redundant model calls at scale",
      takeaway:
        "Cost optimization comes from fewer calls and smaller payloads: cache stable outputs, reuse summaries, cap context, and apply model routing. Token efficiency is architecture.",
      why: "AI costs scale with usage. Without caching, common questions and repeated drafts burn budget with no added value.",
      paragraphs: [
        [
          s("Cache by key: policy version + intent + locale. If the source knowledge hasn’t changed, the answer should not be regenerated every time."),
        ],
        [
          s("Amortize context: generate a summary once and store it on the record; later steps reference the stored summary rather than replaying full history."),
        ],
        [
          s("Use model routing: cheaper models for extraction/classification, higher-capability models for complex synthesis only when needed."),
        ],
      ],
      workflowSteps: [
        "Add payload caps and store summaries on records.",
        "Implement caching for stable content (policies, FAQs).",
        "Track cost per capability and optimize the highest spend first.",
      ],
      example: {
        title: "Caching cut spend without hurting quality",
        body: "HR policy answers were identical across users. Caching by policy version reduced LLM calls significantly and improved consistency.",
      },
    }),
    buildGuideSection({
      id: "observability",
      number: "1.6",
      title: "Observability in the AI Layer",
      subtitle:
        "Logs, traces, and metrics for platform engineers",
      takeaway:
        "You need AI observability like SRE: request logs, provider/model metadata, latency, error codes, token/cost telemetry, and quality signals (feedback, overrides).",
      why: "Without observability, AI incidents become blame games. With observability, they become debug sessions.",
      paragraphs: [
        [
          s("Minimum telemetry per call: request id, capability, provider/model, latency, input size, output size, status/error code."),
        ],
        [
          s("Quality telemetry: accept rate, edit distance (for drafts), override rate (for predictions), and user feedback."),
        ],
        [
          s("Security telemetry: which records/fields were accessed (at a safe abstraction level), redaction confirmations, and policy blocks."),
        ],
      ],
      workflowSteps: [
        "Define an AI call log schema and retention policy.",
        "Build dashboards: p95 latency, error rate, spend by capability.",
        "Alert on spikes: errors, spend, and provider fallback frequency.",
      ],
      example: {
        title: "Observability caught runaway flow",
        body: "A new portal feature triggered repeated AI calls per keystroke. Spend spiked. Observability flagged call volume; the trigger was fixed within a day.",
      },
    }),
    buildGuideSection({
      id: "ai-layer-roadmap",
      number: "1.7",
      title: "The AI Layer roadmap",
      subtitle:
        "Where providers have signalled architecture is heading",
      takeaway:
        "The market direction is clear: provider abstraction, tool-use/agent frameworks, structured outputs, and stronger governance hooks. Design now for swapability and auditability.",
      why: "If you design as if today’s provider and model are permanent, your integration will break within a year.",
      paragraphs: [
        [
          s("Signals across providers: multi-model routing, tool-use primitives, and enterprise controls (audit, residency, DLP). ServiceNow will converge toward these primitives to keep the platform stable while models evolve."),
        ],
        [
          s("Expect change: model names, pricing, and capabilities will shift; the stable part is the contract you design (schemas, gates, and logs)."),
        ],
        [
          s("Practical stance: treat the AI Layer as a platform subsystem like IntegrationHub — version it, monitor it, and evolve it deliberately."),
        ],
      ],
      workflowSteps: [
        "Document your capability contracts and provider routing rules.",
        "Avoid provider-specific prompt hacks in business logic.",
        "Budget for quarterly model/provider review as part of ops cadence.",
      ],
      example: {
        title: "Provider switch became routine",
        body: "Because the team used capability contracts and logs, switching the underlying provider was a controlled change with regression testing — not a multi-month rewrite.",
      },
    }),
    buildGuideSection({
      id: "extensibility-design",
      number: "1.8",
      title: "Designing for AI Layer extensibility",
      subtitle:
        "Build integrations that survive provider changes",
      takeaway:
        "Extensibility design means: stable capability schemas, provider-agnostic prompts, centralized tool wrappers, versioning, and test suites that validate outcomes — not strings.",
      why: "This is the architecture that keeps you from rewriting dozens of flows when providers change.",
      paragraphs: [
        [
          s("Design stable interfaces: 'GenerateSummary(record_id)' returns summary + citations + metadata. The calling flow should not know which provider generated it."),
        ],
        [
          s("Centralize provider details in one layer: IntegrationHub action, subflow, or script include tool. Downstream workflows call the abstraction."),
        ],
        [
          s("Testing discipline: run regression suites when changing provider/model. Evaluate quality, cost, and safety signals before promoting."),
        ],
      ],
      workflowSteps: [
        "Create one wrapper per capability (draft, extract, embed).",
        "Version schemas and keep backward compatibility.",
        "Run side-by-side eval before changing provider or model.",
      ],
      example: {
        title: "Schema stability prevented breakage",
        body: "When provider output format changed, the wrapper normalized outputs into the stable schema. Downstream flows never broke because they consumed the normalized contract.",
      },
    }),
  ],
};

