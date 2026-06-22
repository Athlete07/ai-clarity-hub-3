import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_02_TOKEN_ECONOMICS: GuideConcept = {
  number: 2,
  title: "Token Economics for Power Users",
  subtitle:
    "Understanding the currency of Claude — how tokens affect cost, quality, and what you can accomplish",
  sections: [
    buildGuideSection({
      id: "what-is-token",
      number: "2.1",
      title: "What a token is and how to count them",
      subtitle:
        "The practical estimation skills that prevent cost surprises",
      takeaway:
        "Tokens are the billing atom — roughly ¾ of an English word per token. Estimate before you run; measure after you ship.",
      why: "Teams quote 'we'll send the whole wiki' without knowing that is 2M tokens × every request. Estimation is the cheapest insurance.",
      paragraphs: [
        [
          s("Models read and write in "),
          x(
            "tokens",
            "Subword chunks — 'prompting' might be one token; 'uncharacteristically' might be several.",
          ),
          s(
            ". English prose averages ~1.3 tokens per word. Code and JSON are often denser. Anthropic's console and API responses expose exact counts — use them to calibrate your mental model.",
          ),
        ],
        [
          s("Quick estimates: 500 words ≈ 650 tokens. 10-page PDF ≈ 5k–15k tokens depending on density. A 50-message chat history can exceed your new question in token cost."),
        ],
      ],
      workflowSteps: [
        "Paste representative text into Claude or API token counter.",
        "Record tokens for your top 3 prompt templates.",
        "Add 20% buffer for tool definitions and formatting overhead.",
      ],
      artifact: {
        id: "token-estimation-cheatsheet",
        title: "Token estimation cheatsheet",
        content: `English prose:     words × 1.3 ≈ tokens
JSON/code:         chars ÷ 3.5 ≈ tokens (rough)
Single email:      ~300–800 tokens
10-slide deck text: ~2k–6k tokens
1hr transcript:    ~8k–15k tokens

Rule: If unsure, run one sample through the API with max_tokens=1 and read usage in response.`,
      },
    }),
    buildGuideSection({
      id: "system-prompt-cost",
      number: "2.2",
      title: "The cost of a long system prompt",
      subtitle:
        "Why your 2,000-word project instruction costs tokens on every message",
      takeaway:
        "Everything in the context window on every request is re-billed as input — your system prompt is a recurring subscription, not a one-time setup fee.",
      why: "A beautiful 3,000-token Project instruction feels free in chat until the API bill arrives with that 3k × 10,000 requests.",
      paragraphs: [
        [
          s("On each API call, "),
          x(
            "system + messages + tools",
            "The full assembled prompt sent to the model — not just the user's latest line.",
          ),
          s(
            " count as input tokens. A 2,000-word instruction (~2,600 tokens) on a Haiku route at scale is real money. In Claude.ai Projects, the same principle applies to how much you stuff into project knowledge.",
          ),
        ],
        [
          s("Optimise system prompts ruthlessly: remove examples duplicated in user messages, link to retrieval instead of pasting corpora, version externally and inject only deltas."),
        ],
      ],
      workflowSteps: [
        "Measure system prompt token count once.",
        "Multiply by expected requests/month — add to cost model.",
        "Cut 30% of words; re-eval quality — often unchanged.",
      ],
      example: {
        title: "Support bot — system prompt diet",
        body: "A SaaS team had a 4,200-token system prompt with 12 full example tickets. Moving examples to a retrieval tool and keeping 800 tokens of rules cut input cost ~70% with identical CSAT in A/B test.",
      },
    }),
    buildGuideSection({
      id: "input-vs-output",
      number: "2.3",
      title: "Input vs output token pricing",
      subtitle:
        "Why generation is priced differently from reading — and how that shapes your prompting strategy",
      takeaway:
        "Output tokens usually cost more than input. Ask for concise structured answers; don't pay Sonnet to rewrite your entire input as prose.",
      why: "Prompting strategy and pricing strategy are the same problem stated differently.",
      paragraphs: [
        [
          s("Anthropic (like peers) charges "),
          x(
            "higher per-token rates for output",
            "Generation is compute-heavy; reading is cheaper.",
          ),
          s(
            ". A request with 10k input and 200 output is dominated by input. A request with 2k input and 8k output flips the bill.",
          ),
        ],
        [
          s("Strategies: request bullet summaries not essays, use JSON with short keys, cap max_tokens in API, split 'read everything' from 'write little' across two calls if the read can be cached or retrieved once."),
        ],
      ],
      workflowSteps: [
        "Log ratio of input:output tokens per endpoint.",
        "If output >40% of cost, tighten format instructions.",
        "Set max_tokens to P95 of observed needs + margin.",
      ],
    }),
    buildGuideSection({
      id: "million-token-context",
      number: "2.4",
      title: "The 1 million token context",
      subtitle:
        "What it means, what it costs, and what becomes possible that wasn't before",
      takeaway:
        "1M context lets you reason across entire codebases or document sets in one pass — but you pay for what you put in, every time, unless cached.",
      why: "Mega-context is a capability unlock and a budget risk. Use it for tasks impossible with retrieval; don't use it as lazy filing cabinet.",
      paragraphs: [
        [
          s("Extended context windows (up to ~1M tokens on select models/tiers) mean Claude can hold entire repos, multi-hundred-page filings, or full contract histories in one shot. "),
          x(
            "Long-context pricing",
            "Rates may differ above standard context thresholds — verify current docs.",
          ),
          s(" applies; stuffing 800k tokens because you can is not free."),
        ],
        [
          s("Best fits: litigation review, migration planning across monorepo, cross-document contradiction finding. Poor fits: FAQ bot, daily chat — use RAG instead."),
        ],
      ],
      workflowSteps: [
        "Ask: can retrieval answer with <50k tokens?",
        "If no, batch to long context once; summarise to durable artifact.",
        "Never attach 1M context to high-QPS endpoints.",
      ],
    }),
    buildGuideSection({
      id: "token-efficiency",
      number: "2.5",
      title: "Token efficiency strategies",
      subtitle:
        "Getting the same quality output with fewer tokens — the practical techniques",
      takeaway:
        "Efficiency is compression without losing constraints — shorter prompts that still specify format, audience, and success criteria.",
      why: "The cheapest token is the one you never send twice.",
      paragraphs: [
        [
          s("Techniques: "),
          x("reference by ID", "See doc #3 for tone — not repaste doc #3."),
          s(
            ", hierarchical summaries (chapter → section → detail on demand), strip boilerplate from logs, use tables over prose for comparisons, and stop including failed tool outputs in the next turn.",
          ),
        ],
        [
          s("In chat: start new threads when topic shifts — old thread is silent tax on every message."),
        ],
      ],
      workflowSteps: [
        "Audit last production prompt — highlight redundant paragraphs.",
        "Replace with checklist + one example max.",
        "Measure token delta and quality on 20-case eval set.",
      ],
      example: {
        title: "Weekly report agent",
        body: "Marketing agent reduced weekly report from 12k to 4k input tokens by passing metrics JSON instead of prose dashboards, and a 200-token style guide instead of three sample reports.",
      },
    }),
    buildGuideSection({
      id: "prompt-caching",
      number: "2.6",
      title: "Caching and how it reduces costs",
      subtitle: "What prompt caching is and when it applies to your usage",
      takeaway:
        "Prompt caching discounts repeated long prefixes — ideal for stable system prompts, tool defs, and document corpora sent on every request.",
      why: "Without caching, multi-tenant SaaS with shared instructions leaves money on the table every request.",
      paragraphs: [
        [
          s("Anthropic "),
          x(
            "prompt caching",
            "Mark cacheable blocks; subsequent requests with same prefix pay reduced input rates for cached portions.",
          ),
          s(
            " rewards stable leading content. Place static material first (system, tools, reference docs); put variable user input last.",
          ),
        ],
        [
          s("High ROI: customer support with fixed policy docs, coding agents with repo snapshot, agents with large tool schemas. Low ROI: one-off chats with unique prompts."),
        ],
      ],
      workflowSteps: [
        "Identify prompts where first 80% is identical across requests.",
        "Implement cache breakpoints per Anthropic docs.",
        "Compare bill week-over-week on same traffic.",
      ],
    }),
    buildGuideSection({
      id: "model-selection",
      number: "2.7",
      title: "Model selection as a cost lever",
      subtitle:
        "When Haiku does the job Opus would do at 20× the cost — the routing mindset",
      takeaway:
        "Route by task difficulty: Haiku for classify/extract, Sonnet for general reasoning, Opus for hardest multi-step work — not one model for everything.",
      why: "Defaulting to Opus is like flying first class to the corner shop.",
      paragraphs: [
        [
          s("Build a "),
          x(
            "routing layer",
            "Classifier or rules send each request to the cheapest model that meets quality bar.",
          ),
          s(
            ": triage → Haiku; draft → Sonnet; appeal/escalation → Opus. Measure quality per route; downgrade aggressively when evals pass.",
          ),
        ],
        [
          s("Claude.ai users mimic this manually: quick questions on fast model, deep work when quality bar demands it — when the UI exposes model choice."),
        ],
      ],
      workflowSteps: [
        "Tag 100 production queries by difficulty.",
        "Run Haiku on 'easy' tag — if accuracy >95%, route there.",
        "Reserve Opus for <5% of traffic with measurable uplift.",
      ],
      artifact: {
        id: "model-routing-rules",
        title: "Starter model routing rules",
        content: `HAIKU  — classification, extraction, regex-like transforms, 
         yes/no gates, formatting, simple summaries

SONNET — general drafting, analysis, multi-step reasoning,
         code generation, most agent loops

OPUS   — novel strategy, complex synthesis, highest-stakes
         decisions, when Sonnet fails eval twice

Escalation: auto-promote one tier if confidence low or 
user flags "retry with best model".`,
      },
    }),
    buildGuideSection({
      id: "personal-token-budget",
      number: "2.8",
      title: "Building a personal token budget",
      subtitle: "Estimating your monthly usage before you commit to a plan",
      takeaway:
        "Combine chat subscription + API meter into one personal or team 'AI budget' with weekly check-ins — surprises become trends you saw coming.",
      why: "Budgets turn pricing from anxiety into a dial you control.",
      paragraphs: [
        [
          s("Structure: fixed (Pro/Team seats) + variable (API) + buffer (20%). Track "),
          x("cost per outcome", "$ per qualified lead summary, per ticket resolved, per PR merged."),
          s(", not cost per token — tokens are the lever, outcomes are the KPI."),
        ],
        [
          s("Weekly 15-minute review: top 3 expensive endpoints, one efficiency experiment, one routing tweak."),
        ],
      ],
      workflowSteps: [
        "Export 30 days API usage if applicable.",
        "Add subscription line items.",
        "Set monthly cap alerts in cloud console; assign owner.",
      ],
      artifact: {
        id: "monthly-ai-budget-template",
        title: "Monthly AI budget template",
        content: `FIXED
Claude Pro/Team seats:     $____
Other tools:               $____

VARIABLE (API)
Projected MTok in:         ____ × $____ = $____
Projected MTok out:        ____ × $____ = $____
Cache savings (est.):      -$____

BUFFER (20%):              $____

TOTAL MONTHLY:             $____

OUTCOME METRICS
Cost per [key outcome]:    $____
Notes / experiments:       ________________`,
      },
    }),
  ],
};
