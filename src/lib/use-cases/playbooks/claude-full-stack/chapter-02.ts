import { x } from "../../explain";
import type { GuideChapter } from "../../guide-types";
import { CONCEPT_01_PLANS_DECODED } from "./chapters/ch02/concept-01-plans-decoded";
import { CONCEPT_02_TOKEN_ECONOMICS } from "./chapters/ch02/concept-02-token-economics";
import { CONCEPT_03_API_CLOUD_DEPLOYMENT } from "./chapters/ch02/concept-03-api-cloud-deployment";

export const CHAPTER_02_PLANS_PRICING: GuideChapter = {
  slug: "ch02-plans-pricing",
  number: 2,
  title: "Plans, Pricing & the Economics of Claude",
  subtitle:
    "What you get, what you pay, and how to extract maximum value from every tier",
  readingMinutes: 70,
  intro: [
    "Chapter 1 gave you the mental model. This chapter gives you the ",
    x(
      "unit economics",
      "What each plan costs, what limits mean in practice, and how tokens translate to dollars.",
    ),
    " — so you never upgrade from FOMO or blow an API budget from ignorance.",
    "Whether you are a solo founder on Pro, a team lead standardising Claude Team, or an engineer forecasting API spend, the same currency applies: plans buy access and throughput; tokens buy compute.",
  ],
  keyInsight:
    "Chat subscriptions solve human throughput; API meters solve product scale. Token math is the bridge — master it and every tier decision becomes arithmetic, not anxiety.",
  concepts: [CONCEPT_01_PLANS_DECODED, CONCEPT_02_TOKEN_ECONOMICS, CONCEPT_03_API_CLOUD_DEPLOYMENT],
  diagrams: [
    {
      id: "plan-stack",
      title: "Claude plan stack",
      caption:
        "Each tier adds collaboration, compliance, or throughput — not 'smarter AI'. Pick the lowest tier that removes your actual friction.",
      steps: [
        { label: "Free", desc: "Learn & evaluate", tool: "Limits" },
        { label: "Pro", desc: "Daily individual work", tool: "Priority" },
        { label: "Team", desc: "Shared Projects + admin", tool: "Seats" },
        { label: "Enterprise", desc: "SSO, audit, MSA", tool: "Compliance" },
        { label: "API", desc: "Product integration", tool: "Metered" },
      ],
    },
    {
      id: "token-flow",
      title: "Where tokens go on each request",
      caption:
        "Input is everything the model reads; output is what it writes. Both bill — system prompt bills every time.",
      steps: [
        { label: "System prompt", desc: "Re-billed each call", tool: "Input" },
        { label: "History + files", desc: "Context window", tool: "Input" },
        { label: "User message", desc: "Latest turn", tool: "Input" },
        { label: "Completion", desc: "Generated text", tool: "Output" },
        { label: "Cache hit", desc: "Discounted prefix", tool: "Savings" },
      ],
    },
  ],
  mindmap: {
    center: "Spend wisely",
    caption: "Two budgets: subscription for people, API for products. Optimise tokens inside both.",
    branches: [
      {
        id: "plans",
        label: "Pick your plan",
        description: "Concept 1 — Plans Decoded",
        children: [
          { label: "Free / Pro", description: "Individual throughput" },
          { label: "Team / Enterprise", description: "Org + compliance" },
        ],
      },
      {
        id: "tokens",
        label: "Control tokens",
        description: "Concept 2 — Token Economics",
        children: [
          { label: "Measure & estimate", description: "Sections 2.1–2.3" },
          { label: "Cache & route", description: "Sections 2.6–2.7" },
        ],
      },
      {
        id: "budget",
        label: "One AI budget",
        description: "Section 2.8",
        children: [
          { label: "Fixed + variable", description: "Seats + API" },
          { label: "Cost per outcome", description: "Not cost per chat" },
        ],
      },
    ],
  },
  businessContext: [
    "Your team already uses Claude — but finance sees scattered Pro receipts, engineering has an API key nobody tracks, and someone hit a usage limit the night before a board meeting.",
    "This chapter replaces guesswork with ",
    x(
      "pricing literacy",
      "Knowing plan boundaries, limit mechanics, and token arithmetic well enough to forecast spend and justify upgrades.",
    ),
    ". Numbers on Anthropic's site change; the structure does not.",
  ],
  decisionCriteria: [
    {
      question: "Do you use Claude more than 3× per week for paid professional work?",
      yesMeans: "Yes — work through 1.2 and 1.8; Pro ROI is usually one avoided delay.",
    },
    {
      question: "Are 3+ people sharing prompts or client context?",
      yesMeans: "Yes — read 1.3; Team likely beats individual Pro chaos.",
    },
    {
      question: "Are you shipping customer-facing features on the API?",
      yesMeans: "Yes — sections 1.5, 2.1–2.7 are mandatory; chat tier is separate.",
    },
    {
      question: "Has legal or IT asked about SSO, audit logs, or data handling?",
      yesMeans: "Yes — start 1.4 Enterprise checklist before seat count balloons.",
    },
  ],
  architecture: {
    title: "Token cost on one API request",
    caption:
      "The formula behind every invoice line — input + output, with optional cache discount on stable prefixes.",
    steps: [
      { label: "Assemble context", desc: "System + tools + user", tool: "Input tokens" },
      { label: "Model generates", desc: "Completion stream", tool: "Output tokens" },
      { label: "Apply rates", desc: "Per model MTok pricing", tool: "× volume" },
      { label: "Subtract cache", desc: "Stable prefix reuse", tool: "− savings" },
    ],
  },
  artifacts: [
    {
      id: "combined-budget",
      title: "Combined Claude budget (chat + API)",
      description: "One page for finance — update rates quarterly from Anthropic docs.",
      content: `FIXED MONTHLY
Pro/Team seats:          $________
Enterprise (if any):     $________

API VARIABLE
Est. input MTok:         ______ × $______ / MTok
Est. output MTok:        ______ × $______ / MTok
Prompt cache savings:    − $______

TOTAL:                   $________
Owner:                   __________
Review cadence:          Weekly 15 min`,
    },
    {
      id: "upgrade-triggers",
      title: "Upgrade trigger checklist",
      description: "Paste into ops wiki — score weekly per section 1.8.",
      content: `FREE → PRO
[ ] Limit hit 2+ times on workdays this week
[ ] Peak-hour delays blocked live work

PRO → TEAM
[ ] 3+ people share same prompts/Projects
[ ] Finance needs one invoice

TEAM → ENTERPRISE
[ ] SSO required
[ ] Audit log requirement documented
[ ] Legal review of MSA complete

ANY TIER → API LINE ITEM
[ ] Customer-facing feature in production
[ ] Token logging enabled`,
    },
  ],
  caseStudy: {
    title: "B2B SaaS — from surprise API bill to predictable unit economics",
    scenario:
      "A 40-person SaaS company had 8 Pro seats, one Team trial, and a production support bot on Sonnet with a 5,000-token system prompt. Month-three API bill was 4× forecast.",
    before:
      "No token logging. System prompt included 20 full example tickets. Every user message resent entire chat history. Opus used for classification 'to be safe'.",
    after:
      "Chapter 2 workshop. Haiku classifier → Sonnet responder routing. System prompt cut to 900 tokens; examples moved to retrieval. Prompt caching on policy docs. Combined budget reviewed Mondays.",
    metrics: [
      "API spend → down 62% at same ticket volume",
      "P95 latency → improved (Haiku triage)",
      "Finance forecast variance → ±8% vs ±300%",
      "Pro seats right-sized → 8 to 5 + 1 Team (shared Project)",
    ],
  },
  failurePoints: [
    {
      problem: "Treating API as 'included' with Claude.ai Pro.",
      fix: "Separate budgets in 1.5; API always metered.",
    },
    {
      problem: "Enterprise purchase to fix usage limits on 5 chat users.",
      fix: "Upgrade path 1.8 — Pro/Team first; Enterprise for compliance.",
    },
    {
      problem: "1M context for tasks retrieval could solve.",
      fix: "Decision tree in 2.4 — long context is capability, not default.",
    },
    {
      problem: "No max_tokens — runaway completions on API.",
      fix: "Cap output per 2.3; monitor P95 completion length.",
    },
  ],
};
