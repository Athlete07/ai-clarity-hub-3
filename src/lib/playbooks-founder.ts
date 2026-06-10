import type { Playbook } from "./playbooks";
import { withTrackOrder } from "./playbooks";

const FOUNDER_PLAYBOOKS_DATA: Omit<Playbook, "order">[] = [
  {
    id: "ai-fundamentals-for-founders",
    title: "AI Fundamentals for Founders",
    subtitle: "Technical fluency for founders who lead strategy, not write code.",
    description:
      "The AI hierarchy, cost lines, data advantage, evaluation, liability, and market structure — explained for founders making strategy and funding decisions.",
    difficulty: "Intermediate",
    readingMinutes: 185,
    topics: [
      "AI vs ML vs DL (founder lens)",
      "How models learn & what it costs",
      "Training vs inference cost lines",
      "Data as competitive advantage",
      "Probability & confidence for founders",
      "Model evaluation for non-technical founders",
      "Bias, hallucination & founder liability",
      "AI landscape & market structure",
    ],
    sequence: [
      {
        slug: "founder-ai-vs-ml-vs-deep-learning",
        note: "Not a technical distinction — a capital allocation distinction. AI vs ML vs DL, rules vs learned, and the honest AI-native / powered / washed self-assessment.",
      },
      {
        slug: "founder-how-models-learn",
        note: "You don't need backpropagation — you need to understand what learning costs in runway, hiring, and board-level resource decisions.",
      },
      {
        slug: "founder-training-vs-inference",
        note: "The financial distinction most non-technical founders get wrong until it's too late — CapEx vs OpEx, unit economics, and the spreadsheet before you sign infrastructure contracts.",
      },
      {
        slug: "founder-data-competitive-advantage",
        note: "Not your model. Not your prompt. Your data — moats, flywheels, labelling costs, liability, and capturing proprietary signal from day one.",
      },
      {
        slug: "founder-probability-confidence",
        note: "Why '95% accurate' is either meaningless or dangerous — and what belongs in your pitch deck vs your terms of service.",
      },
      {
        slug: "founder-model-evaluation",
        note: "The metrics your team shows in demos are probably optimistic. What to measure before every major model update.",
      },
      {
        slug: "founder-bias-hallucination-liability",
        note: "The two failure modes that generate lawsuits, press coverage, and investor calls at 11pm — plus EU AI Act and the lawyer conversation.",
      },
      {
        slug: "founder-ai-landscape",
        note: "Who controls the infrastructure you build on — value chain, provider dependency, commoditisation, and escaping the wrapper trap.",
      },
    ],
  },
  {
    id: "building-ai-native-company",
    title: "Building an AI-Native Company",
    subtitle: "Architect a company where AI is the product, not a bolt-on feature.",
    description:
      "From AI-native vs AI-washed positioning to data moats, flywheels, and infrastructure stack choices that compound over time.",
    difficulty: "Intermediate",
    readingMinutes: 120,
    topics: [
      "AI-native vs AI-powered vs AI-washed",
      "Data architecture decisions",
      "Feedback loop business model",
      "Building your data moat",
      "Proprietary data strategy",
      "AI-native product architecture",
      "Model-agnostic vs model-committed",
      "Synthetic data",
      "Data flywheel design",
      "AI infrastructure stack decisions",
    ],
    sequence: [
      {
        slug: "founder-what-ai-native-means",
        note: "The honest definition of AI-native — and the six-question audit before investors ask.",
      },
      {
        slug: "founder-data-architecture-moat",
        note: "Data architecture decisions in month one that determine your AI ceiling in year three.",
      },
      {
        slug: "founder-ai-infrastructure-stack",
        note: "Stack choices that feel technical but are strategic — model-agnostic, API vs self-hosted, observability.",
      },
      {
        slug: "founder-building-feedback-loop",
        note: "The mechanism that separates AI companies that compound from those that plateau.",
      },
      {
        slug: "founder-ai-culture",
        note: "The organisational operating system underneath everything else — experimentation, failure tolerance, data literacy.",
      },
    ],
  },
  {
    id: "ai-strategy-competitive-positioning",
    title: "AI Strategy & Competitive Positioning",
    subtitle: "Find your wedge and defend it in AI markets.",
    description:
      "Competitive positioning for AI businesses — defensibility, moats, vertical vs horizontal bets, and escaping the wrapper trap.",
    difficulty: "Advanced",
    readingMinutes: 110,
    topics: [
      "Porter's Five Forces for AI markets",
      "Finding your AI wedge",
      "Where AI creates defensibility",
      "Data moats vs distribution moats",
      "Switching costs in AI products",
      "The wrapper problem & how to escape it",
      "Vertical AI vs horizontal AI",
      "Stress-testing your strategy",
      "AI feature vs AI business distinction",
      "Competitive response planning",
    ],
    sequence: [
      {
        slug: "founder-what-ai-strategy-is",
        note: "Most founders have an AI feature list. Almost none have an AI strategy — wedge, moat, loop, expansion.",
      },
      {
        slug: "founder-finding-ai-wedge",
        note: "The one workflow AI makes 10× better — and how to find it before your competitor does.",
      },
      {
        slug: "founder-ai-competitive-moats",
        note: "What happens if OpenAI builds this — the five real moats and the honest self-assessment.",
      },
      {
        slug: "founder-ai-market-structure",
        note: "Value chain, commoditisation clock, vertical vs horizontal — understanding the game before you bet.",
      },
      {
        slug: "founder-stress-testing-ai-strategy",
        note: "Attack your own strategy before competitors do — red team, scenarios, and pivot without losing the team.",
      },
    ],
  },
  {
    id: "funding-valuation-ai-premium",
    title: "Funding, Valuation & the AI Premium",
    subtitle: "Navigate the AI valuation premium and investor expectations.",
    description:
      "How VCs evaluate AI companies, what justifies multiples, due diligence prep, and fundraising narratives from seed to growth.",
    difficulty: "Intermediate",
    readingMinutes: 115,
    topics: [
      "How VCs evaluate AI companies",
      "The AI valuation premium",
      "What justifies an AI multiple",
      "Due diligence questions investors will ask",
      "AI metrics investors actually care about",
      "Telling your AI story without overpromising",
      "Seed vs Series A vs growth stage AI narratives",
      "Cap table implications",
      "AI-native financial model",
      "Fundraising red flags to avoid",
    ],
    sequence: [
      {
        slug: "founder-how-vcs-evaluate-ai",
        note: "What VCs say in the pitch vs what they write in the memo — the ten questions to answer cold.",
      },
      {
        slug: "founder-ai-valuation-premium",
        note: "What justifies the AI multiple — and what does not. The honest scorecard before you negotiate.",
      },
      {
        slug: "founder-ai-metrics-investors",
        note: "Not DAU and MRR — model improvement rate, override rate, loop velocity, AI-attributed revenue.",
      },
      {
        slug: "founder-ai-story-without-overpromising",
        note: "The line between compelling narrative and misleading one — demos, OpenAI question, investor types.",
      },
      {
        slug: "founder-ai-due-diligence",
        note: "Everything surfaces in diligence. The self-audit to run six months before you raise.",
      },
    ],
  },
  {
    id: "ai-team-building-org-design",
    title: "AI Team Building & Org Design",
    subtitle: "Hire, structure, and retain AI talent before you feel ready.",
    description:
      "Org design for AI-native startups — role clarity, first hires, compensation, culture, and interviewing without a technical co-founder.",
    difficulty: "Intermediate",
    readingMinutes: 125,
    topics: [
      "ML Engineer vs AI Engineer vs Data Scientist",
      "When to hire your first AI lead",
      "Founding team AI literacy",
      "AI org chart design",
      "Compensation benchmarks for AI talent",
      "Contractors vs consultants vs full-time",
      "Building AI culture without AI washing",
      "Interviewing AI candidates as a non-technical founder",
      "Team structure at seed vs Series A vs Series B",
      "AI talent retention",
    ],
    sequence: [
      {
        slug: "founder-ai-roles-explained",
        note: "ML Engineer vs AI Engineer vs Data Scientist — what each builds and when you need them.",
      },
      {
        slug: "founder-hiring-ai-talent",
        note: "Evaluating AI candidates as a non-technical founder — compensation, red flags, scorecard.",
      },
      {
        slug: "founder-first-ai-hire",
        note: "The most important hiring decision — timing, generalist vs specialist, job description.",
      },
      {
        slug: "founder-ai-org-design",
        note: "Centralised vs embedded, centre of excellence, org chart at seed through Series B.",
      },
      {
        slug: "founder-retaining-ai-talent",
        note: "Why AI people leave, Big Tech counter-offers, and the quarterly retention audit.",
      },
    ],
  },
  {
    id: "ai-vendor-build-buy-decisions",
    title: "AI Vendor, Build & Buy Decisions",
    subtitle: "Build vs buy vs API — with eyes open on total cost.",
    description:
      "Vendor evaluation, lock-in risk, model provider decisions, and contract negotiation for founders making irreversible infrastructure bets.",
    difficulty: "Intermediate",
    readingMinutes: 118,
    topics: [
      "Total cost of ownership — build vs buy",
      "API dependency risk",
      "Vendor lock-in & exit strategy",
      "Evaluating AI infrastructure vendors",
      "OpenAI vs Anthropic vs open source decision",
      "When to build your own model",
      "Fine-tuning vs RAG vs prompt engineering cost comparison",
      "Vendor due diligence checklist",
      "Contract negotiation with AI vendors",
      "Multi-vendor strategy",
    ],
    sequence: [
      {
        slug: "founder-build-buy-partner-framework",
        note: "Build vs buy vs partner on analysis, not instinct — TCO, reversibility, five-axis framework.",
      },
      {
        slug: "founder-api-dependency-risk",
        note: "One pricing change from a unit economics crisis — vendor risk register and exit strategy.",
      },
      {
        slug: "founder-evaluating-ai-vendors",
        note: "Beyond the demo — RFP questions, pilot design, SLAs, and the vendor scorecard.",
      },
      {
        slug: "founder-finetuning-rag-prompting",
        note: "Three customisation paths, three cost structures — the decision tree for your use case.",
      },
      {
        slug: "founder-ai-vendor-contracts",
        note: "Data ownership, training opt-out, liability — the seven clauses before you sign.",
      },
    ],
  },
  {
    id: "ai-risk-governance-founders",
    title: "AI Risk, Safety & Governance for Founders",
    subtitle: "Compliance, liability, and governance without a legal department.",
    description:
      "EU AI Act, US regulation, board-level governance, red-teaming, and turning responsible AI into a commercial advantage.",
    difficulty: "Advanced",
    readingMinutes: 130,
    topics: [
      "EU AI Act — what founders must know now",
      "US regulatory landscape 2025",
      "High-risk AI categories & compliance",
      "Legal liability for AI outputs",
      "Hallucination liability by vertical",
      "Bias as legal and reputational risk",
      "Board-level AI governance",
      "Minimum viable AI compliance stack",
      "Red-teaming your own product",
      "AI incident response playbook",
      "Responsible AI as a commercial advantage",
    ],
    sequence: [
      {
        slug: "founder-ai-risk-landscape",
        note: "Four risk categories, incident timeline, and the risk register before your board asks.",
      },
      {
        slug: "founder-eu-ai-act",
        note: "Already law — risk tiers, high-risk obligations, penalties up to 7% of global turnover.",
      },
      {
        slug: "founder-us-ai-regulation",
        note: "FTC, EEOC, state patchwork — monitoring without becoming a compliance lawyer.",
      },
      {
        slug: "founder-hallucination-bias-liability",
        note: "When engineering problems become lawsuits — real cases, disparate impact, insurance.",
      },
      {
        slug: "founder-ai-governance-framework",
        note: "Red-teaming, incident response, audit trails — governance as commercial advantage.",
      },
    ],
  },
  {
    id: "scaling-ai-product",
    title: "Scaling an AI Product",
    subtitle: "Unit economics and org design when AI products hit traction.",
    description:
      "Cost curves, degradation at scale, vendor switching, and building for 10× growth without 10× burn.",
    difficulty: "Advanced",
    readingMinutes: 112,
    topics: [
      "Infrastructure cost curves at scale",
      "Unit economics inflection points",
      "Model performance degradation at scale",
      "Data quality problems that appear only at scale",
      "When to switch models or vendors",
      "Organisational scaling alongside technical scaling",
      "AI product at Series A vs Series B",
      "Latency at scale",
      "Cost optimisation at scale",
      "Building for 10x growth without 10x costs",
    ],
    sequence: [
      {
        slug: "founder-infrastructure-cost-curves",
        note: "Unit economics at 1K vs 100K users — inference explosion, routing, caching, the CFO spreadsheet.",
      },
      {
        slug: "founder-model-performance-at-scale",
        note: "Distribution shift, long-tail failures, latency under load — monitoring and A/B for model updates.",
      },
      {
        slug: "founder-data-quality-at-scale",
        note: "Training contamination, feedback loop corruption — the data quality audit before each model update.",
      },
      {
        slug: "founder-organisational-scaling-ai",
        note: "The org structure that works at 10 and breaks at 50 — hiring ahead of the fires.",
      },
      {
        slug: "founder-unit-economics-inflection",
        note: "Four inflection points — negotiation threshold, build vs buy crossover, margin evolution, Series B story.",
      },
    ],
  },
];

export const FOUNDER_PLAYBOOKS: Playbook[] = withTrackOrder(FOUNDER_PLAYBOOKS_DATA);
