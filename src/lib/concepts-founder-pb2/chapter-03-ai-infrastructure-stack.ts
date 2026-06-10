import type { ConceptBodyBlock } from "../concepts";
import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

function insertDiagram(
  blocks: ConceptBodyBlock[],
  diagram: Extract<ConceptBodyBlock, { kind: "diagram" }>,
): ConceptBodyBlock[] {
  const exIdx = blocks.findIndex((b) => b.kind === "ex");
  const idx = exIdx === -1 ? blocks.length : exIdx;
  return [...blocks.slice(0, idx), diagram, ...blocks.slice(idx)];
}

const section31 = insertDiagram(
  buildSection({
    number: "3.1",
    title: "The AI infrastructure stack",
    subtitle: "Foundation models, vector databases, orchestration, serving, observability — what each layer does",
    take: "The AI stack has five layers founders must map: foundation models (intelligence), retrieval/vector stores (knowledge), orchestration (prompt chains, agents, routing), serving (latency, scale, cost), and observability (quality, drift, cost per trace). Each layer is a strategic choice — not a checkbox for engineering.",
    why: "Investors ask technical diligence whether your stack is portable, costed, and observable. Founders who cannot map layers signal they are renting a demo, not building a business.",
    paragraphs: [
      [
        s("Foundation models provide general intelligence via API or self-hosted weights. "),
        x(
          "This layer commoditizes fastest — your differentiation is not which GPT version you call.",
          "Founders treat models as replaceable inputs with abstraction layers.",
        ),
        s(" Budget this layer as COGS with vendor diversification plan."),
      ],
      [
        s("Retrieval and vector databases ground models in your proprietary knowledge. "),
        x(
          "Orchestration wires prompts, tools, memory, and routing into workflows.",
          "Serving translates all of this into user-facing latency and uptime SLAs.",
        ),
        s(" Most seed products live in orchestration plus retrieval — not custom training."),
      ],
      [
        s("Observability closes the loop: trace every inference, measure quality, cost, and drift. "),
        x(
          "Without tracing, you cannot debug hallucinations, optimize spend, or prove improvement to investors.",
          "Observability is not optional at 1,000 users — it is how you survive 10,000.",
        ),
        s(" Map your stack on one page before signing annual vendor contracts."),
      ],
    ],
    examples: [
      {
        title: "Perplexity — retrieval as core layer",
        body: "Perplexity's stack centers retrieval plus synthesis — not proprietary foundation training. Founders in search/Q&A should overweight vector and citation architecture.",
      },
      {
        title: "Seed RAG startup — orchestration-heavy",
        body: "Typical seed stack: OpenAI API + Pinecone + LangChain/LlamaIndex + Vercel + Langfuse traces. Founder documented layer owners and swap costs — diligence passed portability test.",
      },
      {
        title: "Enterprise pilot failure — no observability",
        body: "B2B tool could not explain wrong answers in pilot — no trace IDs, no retrieval logging. Lost deal to competitor with audit trail. Observability is enterprise sales infrastructure.",
      },
    ],
  }),
  {
    kind: "diagram",
    id: "ch3-ai-stack",
    type: "flow",
    title: "The AI Infrastructure Stack",
    caption:
      "Foundation models, retrieval, orchestration, serving, and observability — five layers where early choices compound into cost, portability, and debuggability.",
  },
);

export const chapter03AiInfrastructureStack = buildChapter({
  slug: "founder-ai-infrastructure-stack",
  number: 3,
  shortTitle: "AI Infrastructure Stack",
  title: "AI Infrastructure — The Stack Decisions That Are Hard to Undo",
  readingMinutes: 26,
  summary:
    "Stack choices that feel technical are strategic: model commitment, API vs self-host, vector retrieval, MLOps, observability, and cost curves at scale. Four decisions to make in writing before month six.",
  keyTakeaway:
    "Model-agnostic orchestration, observability from day one, and a cost model at 10x usage — the infrastructure choices that are expensive to reverse and cheap to plan early.",
  pmCallout:
    "As a founder: you do not need to understand every layer deeply — but you must know what you are locked into, what it costs at 10x users, and what breaks if your model vendor changes pricing tomorrow.",
  sections: [
    section31,
    buildSection({
      number: "3.2",
      title: "Model-agnostic vs model-committed",
      subtitle: "Why being locked to one model provider feels safe and is actually dangerous",
      take: "Model-committed architecture optimizes for one provider's API quirks, token limits, and tool formats — faster short-term, painful to migrate. Model-agnostic architecture abstracts model calls behind interfaces with eval gates per provider — slightly slower to ship, strategically essential before usage scales.",
      why: "OpenAI, Anthropic, Google, and open weights compete on price and capability quarterly. Single-vendor coupling is a balance-sheet risk investors underwrite explicitly.",
      paragraphs: [
        [
          s("Commitment happens in subtle ways — not just contract signatures. "),
          x(
            "Provider-specific function calling, embedding dimensions, fine-tune formats, and prompt templates embed dependency.",
            "Migration cost grows with every hard-coded assumption.",
          ),
          s(" Audit codebase for provider-specific strings before calling yourself agnostic."),
        ],
        [
          s("Agnostic does not mean using every model — it means swap capability with eval proof. "),
          x(
            "Maintain a model router interface, golden eval set, and promotion criteria per provider.",
            "Run shadow traffic on alternate models monthly — migration becomes a config change, not a rewrite.",
          ),
          s(" Document fallback model in incident runbooks."),
        ],
        [
          s("Strategic commitment is intentional when a provider offers exclusive capability worth the risk. "),
          x(
            "Long context, specific multimodal features, or enterprise indemnification may justify temporary lock-in.",
            "Intentional lock-in with exit timeline beats accidental lock-in with no plan.",
          ),
          s(" Board should see vendor concentration as a tracked risk metric."),
        ],
      ],
      examples: [
        {
          title: "OpenAI function-calling lock-in",
          body: "Startup built entirely on OpenAI tool schema; migration to Claude required rewriting agent layer — three-month delay. Founder now maintains provider abstraction and eval parity tests.",
        },
        {
          title: "Multi-model router at Series A",
          body: "Company routes simple queries to Haiku, complex to Sonnet, with weekly cost-quality eval. Vendor price increase triggered 48-hour partial migration — agility from agnostic design.",
        },
        {
          title: "Intentional OpenAI fine-tune commitment",
          body: "Vertical voice product fine-tuned exclusive OpenAI model with 18-month contract for indemnification. CEO documented exit plan via open-weight fallback at quality threshold. Commitment with eyes open.",
        },
      ],
    }),
    buildSection({
      number: "3.3",
      title: "API-first vs self-hosted",
      subtitle: "Cost, latency, privacy, control — the four dimensions of this decision",
      take: "API-first optimizes time-to-market and capability access — you rent frontier intelligence. Self-hosted optimizes data residency, unit economics at scale, and control — you operate infrastructure. Most seed companies should be API-first with a documented self-host threshold in usage and margin.",
      why: "Founders self-host too early (burning eng on GPUs) or too late (margin collapse at scale). The decision is economic and regulatory — not macho.",
      paragraphs: [
        [
          s("API-first wins on capability and speed for seed and most Series A. "),
          x(
            "Frontier models, safety filters, and scaling are vendor problems.",
            "You pay premium per token but avoid ML platform headcount.",
          ),
          s(" Model inference COGS in unit economics from user one."),
        ],
        [
          s("Self-hosted wins when privacy, residency, or unit economics cross thresholds. "),
          x(
            "Healthcare, defense, and large enterprise often require data not leaving VPC.",
            "At sufficient volume, open-weight models on dedicated GPUs beat API per-token cost.",
          ),
          s(" Calculate crossover point in spreadsheet — do not guess."),
        ],
        [
          s("Hybrid is the mature pattern: API for frontier, self-hosted for high-volume slices. "),
          x(
            "Route by sensitivity and complexity — not binary company-wide choice.",
            "Reversibility: API to self-host is easier with open weights than proprietary fine-tunes locked to one vendor.",
          ),
          s(" Revisit decision every 10x usage milestone."),
        ],
      ],
      examples: [
        {
          title: "Seed legal AI — API-first correct",
          body: "Harvey-class startup at seed used API for synthesis — shipped in months vs years of GPU ops. Self-host eval deferred until enterprise residency deals required it. Time-to-market won.",
        },
        {
          title: "Support bot at 50M tokens/month — hybrid",
          body: "Company self-hosted Llama 8B for tier-1 FAQs, API for complex escalations. Inference COGS dropped 60%. Founder modeled crossover at 20M tokens before building.",
        },
        {
          title: "Premature self-host — 12 months lost",
          body: "Seed founder bought GPU cluster to 'own AI' with $4M runway. Team spent year on infra while competitor shipped on API and captured market. Self-host without volume is vanity CapEx.",
        },
      ],
    }),
    buildSection({
      number: "3.4",
      title: "Vector databases",
      subtitle: "Pinecone, Weaviate, Chroma — the retrieval layer and why it matters for your product",
      take: "Vector databases store embeddings for semantic retrieval — the layer that lets models answer from your documents, not just training memory. Choice affects cost, latency, hybrid search capability, and operational burden. For most founders, managed Pinecone or Weaviate at seed; evaluate self-host Weaviate/pgvector at scale.",
      why: "RAG products live or die on retrieval quality. Investors ask whether your retrieval architecture is proprietary or a default tutorial stack — both are fine if you own eval and chunking strategy.",
      paragraphs: [
        [
          s("Retrieval quality depends more on chunking, metadata, and reranking than on vector DB brand. "),
          x(
            "Embeddings plus naive top-k retrieval fails on enterprise docs — hybrid keyword plus vector plus rerankers win.",
            "Founders over-buy vector DB and under-invest in ingestion pipeline.",
          ),
          s(" Budget eng time for document processing, not just Pinecone signup."),
        ],
        [
          s("Cost scales with vectors stored and queries per second. "),
          x(
            "Managed services simplify ops at premium price. pgvector on Postgres reduces stack complexity for seed.",
            "Multi-tenant isolation and deletion compliance matter for B2B — not just performance benchmarks.",
          ),
          s(" Model embedding dimension locks some DB choices — plan before fine-tuning embeddings."),
        ],
        [
          s("Migration between vector stores is painful but possible — ingestion pipeline is the moat. "),
          x(
            "Proprietary chunking, metadata schema, and refresh cadence matter more than vendor.",
            "Evaluate on recall@k on your eval set, not vendor marketing numbers.",
          ),
          s(" Run retrieval eval weekly — vector DB cannot fix bad chunks."),
        ],
      ],
      examples: [
        {
          title: "Notion Q&A — retrieval as product core",
          body: "Workspace search quality depends on chunking workspace structure, permissions, and refresh — not just vector similarity. Founders should own ingestion eval, not outsource to DB vendor.",
        },
        {
          title: "Seed startup — pgvector on existing Postgres",
          body: "Team avoided new vendor by using pgvector — one less bill, adequate at 10M vectors. Migrated to Pinecone at 100M when QPS required it. Staged infrastructure matches stage.",
        },
        {
          title: "Enterprise RFP — tenant isolation",
          body: "Bank pilot required per-tenant vector namespaces and deletion guarantees. Weaviate hybrid search plus metadata filters won over simpler stack. B2B retrieval is compliance plus recall.",
        },
      ],
    }),
    buildSection({
      number: "3.5",
      title: "MLOps",
      subtitle: "The operational infrastructure for AI that most founders build too late",
      take: "MLOps is the toolchain for training, evaluating, versioning, deploying, and monitoring models — experiment tracking, model registry, feature stores, retrain pipelines, and promotion gates. Seed RAG products need lightweight MLOps (eval harness, prompt versioning); native ML products need full stack before second model iteration.",
      why: "Without MLOps, every model change is manual, untracked, and irreproducible. Diligence asks how you know version 2.1 is better than 2.0 — 'we think users like it' fails.",
      paragraphs: [
        [
          s("Minimum viable MLOps for LLM products: prompt/model version control, golden eval set, automated regression on deploy. "),
          x(
            "Tools: Langfuse, Weights & Biases, or homegrown with git tags.",
            "Every production change links to eval results — not Slack approval alone.",
          ),
          s(" Ship eval before you ship feature flag for model updates."),
        ],
        [
          s("Full MLOps for training loops: feature pipelines, retrain schedules, model registry, shadow deployment. "),
          x(
            "Build when feedback data flows consistently — not at incorporation.",
            "Over-building MLOps before product-market fit burns runway on platform nobody uses.",
          ),
          s(" Stage MLOps investment with loop maturity."),
        ],
        [
          s("MLOps hire timing: when manual deploys cause incidents or retrain takes more than one eng-week monthly. "),
          x(
            "First AI engineer often covers light MLOps at seed.",
            "Dedicated MLOps at Series A when inference revenue justifies platform team.",
          ),
          s(" Document who owns model promotion today — ambiguity causes outages."),
        ],
      ],
      examples: [
        {
          title: "Prompt deploy without eval — production incident",
          body: "PM changed system prompt in production directly; CSAT dropped 15% over weekend. No version rollback. Team implemented Langfuse versioning and eval gate — incident cost more than MLOps setup would have.",
        },
        {
          title: "Fraud model — weekly retrain pipeline",
          body: "Series B fintech runs automated weekly retrain with holdout eval and auto-rollback on precision drop. MLOps built after manual retrain caused false-positive spike. Native ML requires this infrastructure.",
        },
        {
          title: "Seed RAG — git for prompts sufficient",
          body: "Five-person team uses prompt files in git plus 200-case eval script in CI. Adequate until 3+ models in production. Staged MLOps — not Kubernetes on day one.",
        },
      ],
    }),
    buildSection({
      number: "3.6",
      title: "Observability for AI products",
      subtitle: "How you know your AI is working in production — and how you know when it's quietly failing",
      take: "AI observability traces every request: input, retrieval context, model version, output, latency, cost, user reaction, and downstream outcome. Standard APM shows uptime; AI observability shows quality drift, empty retrieval, hallucination patterns, and cost per successful task — the metrics that predict churn before NPS moves.",
      why: "Models fail quietly — accuracy erodes with zero error logs. Enterprise buyers ask for trace IDs on wrong answers. Investors ask for override rate trends.",
      paragraphs: [
        [
          s("Trace structure is a product and compliance requirement. "),
          x(
            "Each inference gets trace_id linking prompt, chunks retrieved, model version, and output.",
            "Support and sales need lookup — not engineering grep through raw logs.",
          ),
          s(" Instrument from first paying customer, not first enterprise deal."),
        ],
        [
          s("Quality metrics belong in dashboards alongside latency and cost. "),
          x(
            "Human override rate, task completion, retrieval empty rate, thumbs down, edit distance.",
            "Alert on metric drift, not just error 500 rate.",
          ),
          s(" Weekly review cadence with owner named in org chart."),
        ],
        [
          s("Observability enables model routing and cost optimization. "),
          x(
            "Identify query classes that cheap models handle — route savings to margin.",
            "Without traces, cost cutting blindfolds quality.",
          ),
          s(" Observability is margin infrastructure, not eng luxury."),
        ],
      ],
      examples: [
        {
          title: "APM green, NPS red — empty retrieval",
          body: "APM showed 99.9% success; NPS dropped. AI traces revealed retrieval returning empty on new doc format — model apologized vaguely. Fix: parser upgrade, not prompt. Alert on empty retrieval rate now.",
        },
        {
          title: "Langfuse at seed — diligence win",
          body: "Founder demoed trace lookup live in Series A — showed exactly why one answer wrong. Investor cited operational maturity. Observability as sales and fundraise asset.",
        },
        {
          title: "Override rate alert — caught drift early",
          body: "Human override rate climbed 2% over two weeks before CSAT moved. Traces showed new customer doc template breaking chunker. Fixed in days — observability paid for itself.",
        },
      ],
    }),
    buildSection({
      number: "3.7",
      title: "Infrastructure cost curves",
      subtitle: "What your AWS bill looks like at 1,000 vs 10,000 vs 100,000 users — the numbers founders need to model",
      take: "AI costs scale non-linearly: inference dominates at low scale, retrieval and observability grow with data, self-host crossover appears at high token volume. Founders need a spreadsheet with cost per active user, cost per successful task, and margin at 3x and 10x current usage — updated monthly.",
      why: "Unit economics that work at pilot break at production. Boards kill AI features when COGS surprise arrives quarter after launch.",
      paragraphs: [
        [
          s("At 1,000 users, API inference is usually 60–80% of AI COGS. "),
          x(
            "Average 10–50 conversations per user per month at $0.01–$0.10 per conversation adds up fast.",
            "Free tiers without inference caps burn runway on power users.",
          ),
          s(" Model cost in pricing model before marketing free AI."),
        ],
        [
          s("At 10,000 users, retrieval storage, embedding refresh, and support traces add 15–25%. "),
          x(
            "Power law usage — top 10% users generate 50%+ tokens.",
            "Rate limits and model routing become margin tools, not optional optimizations.",
          ),
          s(" Segment COGS by customer tier — enterprise pilots often loss-lead on inference."),
        ],
        [
          s("At 100,000 users, self-host crossover and vendor negotiation matter. "),
          x(
            "Volume discounts, reserved capacity, and open-weight routing can cut COGS 40–70%.",
            "Without model, gross margin story breaks at Series B.",
          ),
          s(" Update cost model every funding milestone — investors will model it anyway."),
        ],
      ],
      examples: [
        {
          title: "Support AI — $0.08 per resolution at scale",
          body: "Founder modeled $0.12 per conversation at 1K users, $0.08 at 10K with caching and Haiku routing. Pricing at $29/seat required resolution cap. Cost model drove product limits.",
        },
        {
          title: "Free tier disaster — power users",
          body: "Unlimited free AI attracted bots and power users — $40K monthly API bill on $8K MRR. Added rate limits and paid tier for heavy usage. Cost curve lesson learned in one month.",
        },
        {
          title: "Series B — negotiated 30% API discount",
          body: "At 2B tokens monthly, company negotiated enterprise API pricing — gross margin jumped 12 points. Founder documented volume threshold in board deck as inflection point.",
        },
      ],
    }),
    buildSection({
      number: "3.8",
      title: "Founder decision lens",
      subtitle: "The four choices that are expensive to reverse and cheap to think through early",
      take: "Document four decisions before month six: (1) model agnostic interface and fallback provider, (2) API-first with documented self-host crossover threshold, (3) retrieval architecture and eval ownership, (4) observability and cost-per-trace from first paid user. Write reversibility score and owner for each.",
      why: "These four choices embed into codebase, contracts, and org habits. Reversing them at Series A costs quarters. Thinking them through at seed costs an afternoon.",
      paragraphs: [
        [
          s("Decision one: vendor concentration and exit plan. "),
          x(
            "Who owns model abstraction? What is fallback? When do we last run shadow eval on alternate provider?",
            "Board risk register entry if >70% spend on one vendor.",
          ),
          s(" Review quarterly — not annual."),
        ],
        [
          s("Decision two: hosting strategy with numeric crossover. "),
          x(
            "Token volume and margin threshold for self-host eval.",
            "Data residency triggers for VPC deployment.",
          ),
          s(" Spreadsheet lives next to financial model."),
        ],
        [
          s("Decisions three and four: retrieval eval owner and observability SLA. "),
          x(
            "Named person owns recall@k weekly.",
            "Trace coverage target — e.g. 99% production requests traced with user linkable ID.",
          ),
          s(" Share one-page infra memo with first enterprise prospect — accelerates security review."),
        ],
      ],
      examples: [
        {
          title: "Month-four infra memo — seed discipline",
          body: "CEO wrote four decisions with eng before month six. Referenced in every vendor negotiation. New hires onboard from memo — no oral tradition.",
        },
        {
          title: "Skipped observability — enterprise delay",
          body: "Company delayed tracing until Series A; lost two enterprise pilots to 'cannot audit AI answers'. Rebuilt observability under deal pressure — cost 3x vs doing at seed.",
        },
        {
          title: "Self-host threshold hit — planned migration",
          body: "At 30M tokens/month, spreadsheet predicted crossover; team executed 6-week migration to hybrid hosting. No emergency board meeting — because threshold was pre-documented.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A seed startup hard-codes OpenAI function-calling schema throughout the agent layer. What is the primary strategic risk?",
      options: [
        "OpenAI is the best model — no risk.",
        "Vendor lock-in — migration to another provider requires costly rewrite; pricing changes become leverage against you.",
        "Function calling is an open standard — portable by default.",
        "Investors prefer single-vendor stacks.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Model-committed architecture creates migration cost and vendor risk. Re-read section 3.2.",
      wrongFeedback:
        "Provider-specific APIs embed dependency. Agnostic abstraction with eval gates reduces risk. Re-read section 3.2.",
    },
    {
      kind: "categorize",
      q: "Sort each scenario toward API-first or self-hosted as the default seed-stage choice.",
      categories: ["API-first default", "Self-hosted consideration early"],
      items: [
        { text: "Seed legal synthesis product needing frontier capability fast.", category: 0 },
        { text: "Defense contractor requiring data never leaves air-gapped VPC.", category: 1 },
        { text: "B2B RAG on public docs with 500 beta users.", category: 0 },
        { text: "Healthcare diagnostic with strict HIPAA residency requirements.", category: 1 },
        { text: "Consumer writing assistant pre-PMF.", category: 0 },
        { text: "50M tokens/month support bot with margin collapse on API pricing.", category: 1 },
      ],
      correctFeedback:
        "Right. API-first for speed and capability at seed; self-host when residency, privacy, or unit economics demand it. Re-read section 3.3.",
      wrongFeedback:
        "Seed defaults to API unless regulatory or economic thresholds force self-host. Re-read section 3.3.",
    },
    {
      q: "APM shows 99.9% uptime but user satisfaction on AI features is dropping. What is the most likely missing layer?",
      options: [
        "More GPU capacity.",
        "AI observability — quality drift, empty retrieval, or hallucination patterns invisible to standard APM.",
        "Different vector database brand.",
        "Larger context window.",
      ],
      correct: 1,
      correctFeedback:
        "Right. AI fails quietly on quality while remaining 'up'. Traces reveal retrieval and output issues. Re-read section 3.6.",
      wrongFeedback:
        "Uptime ≠ quality. AI observability tracks override rate, retrieval, and task completion. Re-read section 3.6.",
    },
    {
      kind: "order",
      q: "Order the AI infrastructure stack layers from intelligence input to production accountability.",
      prompt: "Drag to arrange (bottom = closest to user accountability).",
      items: [
        "Foundation models — general intelligence via API or self-hosted weights.",
        "Retrieval / vector stores — grounding in proprietary knowledge.",
        "Orchestration — prompts, tools, agents, routing.",
        "Serving — latency, scale, uptime SLAs.",
        "Observability — traces, quality metrics, cost per task.",
      ],
      correctFeedback:
        "Right. Models and retrieval feed orchestration and serving; observability wraps all layers. Re-read section 3.1.",
      wrongFeedback:
        "Map foundation → retrieval → orchestration → serving, with observability across the stack. Re-read section 3.1.",
    },
    {
      q: "When is lightweight MLOps (prompt versioning + eval in CI) sufficient vs full retrain pipelines required?",
      options: [
        "Always full MLOps from day one.",
        "Lightweight for LLM/RAG products at seed; full pipelines when proprietary feedback retraining is core loop.",
        "Never needed for LLM products.",
        "Only after IPO.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Stage MLOps with loop maturity — eval gates early, retrain automation when feedback flows. Re-read section 3.5.",
      wrongFeedback:
        "Match MLOps investment to whether you retrain models or primarily orchestrate APIs. Re-read section 3.5.",
    },
    {
      kind: "order",
      q: "Order the four infrastructure decisions to document before month six.",
      prompt: "Drag to arrange (top = first to decide).",
      items: [
        "Model-agnostic interface and fallback provider plan.",
        "API-first with self-host crossover threshold in tokens and margin.",
        "Retrieval architecture with named eval owner.",
        "Observability and cost-per-trace from first paid user.",
      ],
      correctFeedback:
        "Right. Vendor risk → hosting economics → retrieval quality → production visibility. Re-read section 3.8.",
      wrongFeedback:
        "Start with vendor portability, then hosting economics, retrieval, observability. Re-read section 3.8.",
    },
  ],
});
