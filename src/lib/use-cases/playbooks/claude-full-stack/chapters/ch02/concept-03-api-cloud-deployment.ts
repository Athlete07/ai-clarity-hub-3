import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_03_API_CLOUD_DEPLOYMENT: GuideConcept = {
  number: 3,
  title: "API, Cloud & Platform Economics",
  subtitle:
    "Messages API depth, prompt caching, batch, streaming, Bedrock/Vertex/Foundry billing, and Skills API costs",
  sections: [
    buildGuideSection({
      id: "messages-api-depth",
      number: "3.1",
      title: "Messages API — production patterns",
      subtitle:
        "Streaming, tool use, vision, PDF input, stop sequences, and error handling at scale",
      takeaway:
        "Production API: stream for UX, tools for live data, vision/PDF for documents, structured outputs for parsers — always log usage and handle 429/529 with backoff.",
      why: "Ch 1 introduced the API; builders need operational patterns before first customer.",
      paragraphs: [
        [
          s("Stream responses for chat UIs. Attach images/PDFs in content blocks. Define tools[] for function calling; your backend executes and returns tool_result. Use stop_sequences to cap runaway generations."),
        ],
      ],
      workflowSteps: [
        "Implement streaming + usage logging day one.",
        "Add tools only when static context insufficient.",
        "Retry with exponential backoff on rate limits.",
      ],
    }),
    buildGuideSection({
      id: "prompt-caching-depth",
      number: "3.2",
      title: "Prompt caching — economics and design",
      subtitle:
        "Caching stable system prompts and tool definitions to cut input cost on high-volume agents",
      takeaway:
        "Mark stable prefix (system prompt, tools, docs) with cache_control — subsequent requests pay reduced input on cached blocks; ideal for agents with fat instructions.",
      why: "Uncached 8k-token system prompt × 1M requests destroys unit economics.",
      paragraphs: [
        [
          x("Prompt caching", "API feature — cache breakpoints on long stable prefixes; TTL and pricing per Anthropic docs."),
          s(" Put static content first, variable user content last. Invalidate cache when system prompt version changes."),
        ],
      ],
      workflowSteps: [
        "Identify prompts repeated >1000×/day.",
        "Split static vs dynamic blocks.",
        "Version system prompt; bump cache on major change.",
      ],
      example: {
        title: "Support bot — 62% input cost reduction",
        body: "8k policy doc + tool schemas cached. Per-ticket user message only in dynamic tail. Input cost dropped 62%; latency improved on cache hits.",
      },
    }),
    buildGuideSection({
      id: "batch-api",
      number: "3.3",
      title: "Batch API",
      subtitle:
        "Overnight bulk processing at discount — when batch beats real-time Messages API",
      takeaway:
        "Batch API for non-urgent bulk: classify 10k tickets, summarise archives, eval runs — lower cost, async completion within SLA window.",
      why: "Real-time API for batch-shaped work wastes money and hits rate limits.",
      paragraphs: [
        [
          s("Submit JSONL of requests; poll or webhook for results. Not for interactive chat — for back-office pipelines."),
        ],
      ],
      workflowSteps: [
        "Define SLA: results needed within 24h?",
        "If yes and not interactive → batch.",
        "Validate sample batch before full corpus.",
      ],
    }),
    buildGuideSection({
      id: "extended-thinking-cost",
      number: "3.4",
      title: "Extended thinking — cost and routing",
      subtitle:
        "Thinking token budgets, adaptive reasoning tiers, and when to charge thinking to client vs absorb",
      takeaway:
        "Thinking tokens bill separately — route only hard tasks to extended thinking; expose tier in product pricing if customer-facing.",
      why: "Blanket thinking on all API calls multiplies cost without quality gain.",
      paragraphs: [
        [
          s("Classify requests: ROUTE_STANDARD vs ROUTE_THINKING. Monitor thinking_tokens in usage dashboard. Set per-user caps on consumer products."),
        ],
      ],
      workflowSteps: [
        "Log thinking_tokens per request type.",
        "A/B quality vs cost on top 3 hard task types.",
        "Default standard; opt-in thinking for premium tier.",
      ],
    }),
    buildGuideSection({
      id: "computer-use-api",
      number: "3.5",
      title: "Computer use API economics",
      subtitle:
        "Screenshot loops, action steps, and infrastructure cost of desktop agents",
      takeaway:
        "Computer use bills per step + vision tokens — budget VM time, step caps, and human escalation; never unbounded loops.",
      why: "Desktop agents can burn tokens faster than chat if screenshots repeat every turn.",
      paragraphs: [
        [
          s("Cap max_steps per task. Use smaller crops when possible. Run in dedicated sandbox accounts."),
        ],
      ],
      workflowSteps: [
        "Pilot with step limit 20.",
        "Measure cost per successful task.",
        "Compare vs human time before scaling.",
      ],
    }),
    buildGuideSection({
      id: "skills-api",
      number: "3.6",
      title: "Skills API & workspace skills",
      subtitle:
        "Uploading skills to API workspaces — versioning, sharing, and divergence from Claude.ai uploads",
      takeaway:
        "API workspace skills are team-wide; Claude.ai skills are per-user — maintain separate registries or sync via CI upload pipeline.",
      why: "Uploading to one surface does not propagate to the other — drift causes 'works in dev, fails in chat'.",
      paragraphs: [
        [
          s("Use Skills API for workspace deployment. Version SKILL.md in git. CI uploads on merge to main. Document which skills active per environment."),
        ],
      ],
      workflowSteps: [
        "Git repo for team skills.",
        "CI deploy to API workspace.",
        "Claude.ai users upload zip separately if needed.",
      ],
    }),
    buildGuideSection({
      id: "cloud-marketplace-billing",
      number: "3.7",
      title: "Bedrock, Vertex & Foundry billing",
      subtitle:
        "Hyperscaler metering vs direct API — commitment discounts, IAM overhead, and feature parity checks",
      takeaway:
        "Cloud marketplaces bill through AWS/GCP/Azure contracts — compare effective $/MTok vs direct API; verify model list, Skills, and thinking support per region.",
      why: "Procurement wins on cloud path but engineering may lose features if parity unchecked.",
      paragraphs: [
        [
          s("Run feature parity matrix quarterly: model IDs, max context, tools, caching, batch, computer use, skills. Finance compares committed spend discounts."),
        ],
      ],
      workflowSteps: [
        "Build parity spreadsheet from vendor docs.",
        "Pilot same workload on direct API vs cloud.",
        "Pick path matching procurement + feature needs.",
      ],
    }),
    buildGuideSection({
      id: "api-observability",
      number: "3.8",
      title: "API observability & governance",
      subtitle:
        "Logging, evals, rate limits, key rotation, and cost attribution per team",
      takeaway:
        "Log request_id, model, tokens, latency, tool calls, skill invocations — attribute cost to team/feature; rotate keys; run eval suite on model upgrades.",
      why: "Without observability, API scale becomes ungovernable spend and silent quality regressions.",
      paragraphs: [
        [
          s("Dashboards: cost by model, by feature flag, by customer. Alerts on spend anomaly. Eval harness tied to Ch 10 version trap protocol."),
        ],
      ],
      workflowSteps: [
        "Centralize API keys — no personal keys in prod.",
        "Tag requests with feature/team metadata.",
        "Weekly cost review + monthly eval run.",
      ],
    }),
  ],
};
