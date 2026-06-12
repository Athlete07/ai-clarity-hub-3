import type { ExecutiveKb } from "./executive-kb";
import { withTrackOrder } from "./executive-kb";

const MARKETER_EXECUTIVE_KBS_DATA: Omit<ExecutiveKb, "order">[] = [
  {
    id: "ai-fundamentals-for-marketers",
    title: "AI Fundamentals for Marketers",
    subtitle: "Technical fluency for marketers who own campaigns, budgets, and brand outcomes.",
    description:
      "The AI hierarchy, how models learn, inference costs, data as asset, evaluation, liability, and the martech vendor landscape — framed for marketers choosing tools, briefing agencies, and defending spend.",
    difficulty: "Intermediate",
    readingMinutes: 192,
    topics: [
      "AI vs ML vs DL (marketer lens)",
      "How models learn & what it means for your campaigns",
      "Training vs inference — why it affects your tool costs",
      "Data as marketing asset",
      "Probability & confidence — understanding AI recommendations",
      "Model evaluation for non-technical marketers",
      "Bias & hallucination — the marketing liability",
      "AI landscape & martech vendor structure",
    ],
    sequence: [
      {
        slug: "mkt-ai-vs-ml-vs-dl-marketer-lens",
        note: "AI ⊃ ML ⊃ DL — the martech lens for separating hype from learning systems before you sign a contract.",
      },
      {
        slug: "mkt-how-models-learn-campaigns",
        note: "Training data, cold start, feedback loops — why the same tool performs differently for every brand.",
      },
      {
        slug: "mkt-training-vs-inference-tool-costs",
        note: "Per-word pricing, usage tiers, and the inference math behind every AI martech subscription.",
      },
      {
        slug: "mkt-data-marketing-superpower-liability",
        note: "First-party data, consent, and the flywheel that makes your AI tools actually work.",
      },
      {
        slug: "mkt-probability-confidence-recommendations",
        note: "AI recommendations are bets — when to trust the algorithm and when to override it.",
      },
      {
        slug: "mkt-model-evaluation-marketing-ai",
        note: "Incrementality, precision vs recall, and the quarterly audit for every AI tool in your stack.",
      },
      {
        slug: "mkt-bias-hallucination-marketing-liability",
        note: "Targeting bias, content hallucinations, and the review checklist before anything goes live.",
      },
      {
        slug: "mkt-ai-martech-landscape",
        note: "Horizontal vs vertical AI, platform integrations, and a structured evaluation framework.",
      },
    ],
  },
  {
    id: "ai-powered-content-strategy",
    title: "AI-Powered Content Strategy",
    subtitle: "Scale content without sacrificing voice, quality, or brand trust.",
    description:
      "Prompting, workflows, human-AI collaboration, repurposing, multilingual content, and quality control — so you can ship more content that still sounds like you and performs.",
    difficulty: "Intermediate",
    readingMinutes: 240,
    topics: [
      "AI content generation fundamentals",
      "Prompt engineering for marketers",
      "Content at scale without quality loss",
      "Brand voice preservation in AI content",
      "AI content workflow design",
      "Human-AI collaboration model",
      "Content repurposing with AI",
      "AI for multilingual content",
      "Quality control frameworks",
      "Content performance prediction with AI",
    ],
    sequence: [
      {
        slug: "mkt-ai-content-generation-fundamentals",
        note: "What LLMs do when they write — strengths, failure modes, and the human-AI division of labour.",
      },
      {
        slug: "mkt-prompt-engineering-marketers",
        note: "Role, context, tone, constraints — the prompt library that makes AI output usable at scale.",
      },
      {
        slug: "mkt-content-at-scale-quality",
        note: "Brief → generate → review → publish — the pipeline that scales without bottlenecks.",
      },
      {
        slug: "mkt-brand-voice-preservation-ai",
        note: "Voice documents, few-shot examples, and governance that protects brand while enabling volume.",
      },
      {
        slug: "mkt-content-repurposing-ai",
        note: "One asset, ten formats — the highest-ROI workflow in AI content marketing.",
      },
    ],
  },
  {
    id: "seo-in-the-age-of-ai",
    title: "SEO in the Age of AI",
    subtitle: "Win visibility when search is rewritten by AI Overviews and answer engines.",
    description:
      "Semantic SEO, topic clusters, entity strategy, structured data, and AIO — practical playbooks for ranking in AI answers, not just blue links.",
    difficulty: "Intermediate",
    readingMinutes: 264,
    topics: [
      "How AI is restructuring search",
      "Google AI Overviews — what changed and what it means",
      "Semantic SEO fundamentals",
      "Topic clusters & pillar page strategy",
      "Entity-based SEO",
      "Keyword research with AI tools",
      "AI-generated content & Google's stance",
      "Search intent mapping",
      "Structured data & schema markup",
      "AIO (AI search optimisation)",
      "Ranking in AI answers not just search results",
    ],
    sequence: [
      {
        slug: "mkt-ai-restructuring-search",
        note: "AI Overviews, conversational queries, and the CTR shift — audit your strategy for the next 24 months.",
      },
      {
        slug: "mkt-semantic-seo-meaning-keywords",
        note: "Topic clusters, entities, and depth — ranking for meaning, not keyword stuffing.",
      },
      {
        slug: "mkt-optimising-ai-answers-aio",
        note: "Citation-ready structure, FAQ content, and schema for AI answer visibility.",
      },
      {
        slug: "mkt-ai-tools-for-seo",
        note: "Keyword research, briefs, gap analysis — which SEO tasks to automate vs keep human.",
      },
    ],
  },
  {
    id: "ai-paid-advertising-performance-marketing",
    title: "AI for Paid Advertising & Performance Marketing",
    subtitle: "How modern ad platforms actually work — and when to override the algorithm.",
    description:
      "Performance Max, Advantage+, AI bidding, creative testing at scale, attribution, and budget optimisation — for marketers who need control, not black-box faith.",
    difficulty: "Intermediate",
    readingMinutes: 240,
    topics: [
      "How AI runs modern ad platforms",
      "Google Performance Max — how it actually works",
      "Meta Advantage+ — the algorithm marketer's guide",
      "AI bidding strategies & when to override",
      "Audience targeting with AI",
      "Creative testing at AI scale",
      "Attribution in an AI-driven ad world",
      "AI for ad copy generation",
      "Budget optimisation with AI",
      "Performance marketing metrics in an AI world",
    ],
    sequence: [
      {
        slug: "mkt-how-ai-runs-ad-platforms",
        note: "Smart Bidding, Advantage+, and the signal economy — feed the machine or fight it.",
      },
      {
        slug: "mkt-creative-strategy-ai-ads",
        note: "Creative is the last human lever — testing engines, AI copy, and fatigue detection.",
      },
      {
        slug: "mkt-attribution-ai-paid-media",
        note: "Incrementality, MMM, and platform ROAS vs CFO numbers — a defensible measurement framework.",
      },
    ],
  },
  {
    id: "ai-personalisation-customer-experience",
    title: "AI Personalisation & Customer Experience",
    subtitle: "Move beyond segments to experiences that feel relevant — without creepy.",
    description:
      "Behavioural data, recommendation engines, email and web personalisation, cross-channel orchestration, and privacy-first measurement for marketers owning CX outcomes.",
    difficulty: "Intermediate",
    readingMinutes: 240,
    topics: [
      "What personalisation actually means in AI",
      "Segmentation vs personalisation — the distinction",
      "Behavioural data as personalisation fuel",
      "AI recommendation engines",
      "Email personalisation at scale",
      "Website personalisation with AI",
      "Personalisation across channels",
      "Real-time personalisation architecture",
      "Measuring personalisation impact",
      "Privacy-first personalisation",
    ],
    sequence: [
      {
        slug: "mkt-personalisation-means-in-ai",
        note: "Maturity model, data foundation, and where personalisation ROI is highest in the journey.",
      },
      {
        slug: "mkt-ai-recommendation-engines",
        note: "Collaborative vs content-based filtering, cold start, and measuring recommendation impact.",
      },
      {
        slug: "mkt-email-personalisation-scale",
        note: "Send time, dynamic content, behavioural triggers — beyond {first_name} personalisation.",
      },
    ],
  },
  {
    id: "ai-analytics-marketing-intelligence",
    title: "AI Analytics & Marketing Intelligence",
    subtitle: "From reporting what happened to predicting what will happen.",
    description:
      "CLV, churn, marketing mix modelling, competitive intelligence, social listening, sentiment, demand forecasting, and dashboards — turning AI insights into decisions your CMO will act on.",
    difficulty: "Intermediate",
    readingMinutes: 240,
    topics: [
      "Moving from descriptive to predictive analytics",
      "AI for customer lifetime value prediction",
      "Churn prediction & prevention",
      "Marketing mix modelling with AI",
      "AI for competitive intelligence",
      "Social listening with AI",
      "Sentiment analysis in practice",
      "Demand forecasting",
      "AI dashboards & reporting",
      "Turning AI insights into marketing decisions",
    ],
    sequence: [
      {
        slug: "mkt-descriptive-to-predictive-analytics",
        note: "Four analytics levels — and the operational infrastructure to act on predictions.",
      },
      {
        slug: "mkt-clv-prediction-marketing",
        note: "Predicted vs historical CLV — bidding and retention decisions that compound.",
      },
      {
        slug: "mkt-competitive-intelligence-ai",
        note: "Share of voice, competitor content, ad intelligence — lightweight CI without an analyst team.",
      },
    ],
  },
  {
    id: "ai-for-growth-acquisition-retention",
    title: "AI for Growth — Acquisition, Retention & Revenue",
    subtitle: "Build a growth engine that learns from every funnel stage.",
    description:
      "Lead scoring, CRO, churn prevention, upsell, viral loops, experimentation, PLG, and revenue attribution — for marketers accountable for pipeline and retention, not just top-of-funnel.",
    difficulty: "Intermediate",
    readingMinutes: 240,
    topics: [
      "AI in the growth funnel",
      "Lead scoring with AI",
      "AI for conversion rate optimisation",
      "Churn prevention with AI",
      "AI for upsell & cross-sell",
      "Viral loop design with AI",
      "Growth experimentation at AI scale",
      "AI for product-led growth",
      "Revenue attribution with AI",
      "Building a growth engine that learns",
    ],
    sequence: [
      {
        slug: "mkt-ai-growth-funnel",
        note: "Where AI has proven leverage vs hype — map your funnel before you buy another tool.",
      },
      {
        slug: "mkt-lead-scoring-qualification-ai",
        note: "Fit vs intent signals, model accuracy, and getting sales to trust the score.",
      },
      {
        slug: "mkt-cro-with-ai",
        note: "Hypothesis generation, personalised landing pages, and rigorous testing at AI speed.",
      },
    ],
  },
  {
    id: "ai-martech-stack-tool-selection",
    title: "AI Martech Stack & Tool Selection",
    subtitle: "Evaluate, integrate, and future-proof your AI marketing stack.",
    description:
      "Landscape mapping, build vs buy, data flows, consolidation, ROI measurement, vendor lock-in, and sprawl avoidance — for marketers drowning in overlapping AI point solutions.",
    difficulty: "Intermediate",
    readingMinutes: 240,
    topics: [
      "The AI martech landscape 2025",
      "How to evaluate AI marketing tools",
      "Build vs buy in martech",
      "Martech stack integration with AI",
      "Data flow between AI marketing tools",
      "AI tool consolidation strategy",
      "Avoiding martech sprawl",
      "ROI measurement for AI tools",
      "Vendor lock-in in martech",
      "Future-proofing your martech stack",
    ],
    sequence: [
      {
        slug: "mkt-navigating-ai-martech-landscape",
        note: "Category map, RFP process, pilot design — find signal in 5,000 vendors.",
      },
      {
        slug: "mkt-coherent-ai-martech-stack",
        note: "CDP foundation, data flows, consolidation, and the annual stack audit.",
      },
    ],
  },
];

export const MARKETER_EXECUTIVE_KBS: ExecutiveKb[] = withTrackOrder(MARKETER_EXECUTIVE_KBS_DATA);
