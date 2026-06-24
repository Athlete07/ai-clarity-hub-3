import type { ExecutiveKb } from "./executive-kb";
import { withTrackOrder } from "./executive-kb";

const MARKETER_EXECUTIVE_KBS_DATA: Omit<ExecutiveKb, "order">[] = [
  {
    id: "ai-fundamentals-for-marketers",
    title: "AI Fundamentals for Marketers",
    subtitle:
      "What every marketer needs to understand about AI — not to build it, but to use it with strategic judgment, creative confidence, and competitive edge.",
    description:
      "Eight chapters covering the marketer's mental model, how models learn, the tool landscape, prompting, brand voice, ethics, measurement, and the AI-era mindset — built for marketers who own outcomes, not outputs.",
    difficulty: "Intermediate",
    readingMinutes: 192,
    topics: [
      "The marketer's AI mental model",
      "How models learn — implications for marketing",
      "AI marketing tool landscape",
      "Prompting for marketers",
      "Brand voice in the age of AI",
      "AI ethics & responsible marketing",
      "Measuring AI marketing impact",
      "The AI marketing mindset",
    ],
    sequence: [
      {
        slug: "mkt-ai-marketers-mental-model",
        note: "AI vs ML vs generative AI, what AI changes and cannot change, and where leverage actually lives in your function.",
      },
      {
        slug: "mkt-how-models-learn-marketing",
        note: "Training data, fine-tuning, hallucinations, temperature, and context — why AI produces what it produces.",
      },
      {
        slug: "mkt-ai-marketing-tool-landscape",
        note: "Foundation models, specialised tools, embedded platform AI, and workflow connectors — buy capability, not hype.",
      },
      {
        slug: "mkt-prompting-for-marketers",
        note: "The brief-as-prompt skill: specificity, voice, few-shot examples, iteration, and a personal prompt library.",
      },
      {
        slug: "mkt-brand-voice-age-of-ai",
        note: "Governance that lets you scale AI content without losing the distinctiveness that makes your brand worth attention.",
      },
      {
        slug: "mkt-ai-ethics-responsible-marketing",
        note: "Transparency, copyright, hallucination risk, bias, privacy, and synthetic media — the governance layer marketers must own.",
      },
      {
        slug: "mkt-measuring-ai-marketing-impact",
        note: "Productivity, quality, cost, attribution, and adoption — metrics that tell you whether AI is actually working.",
      },
      {
        slug: "mkt-ai-marketing-mindset",
        note: "Amplifier not replacement, curation, iteration, experimentation, and your 90-day personal development plan.",
      },
    ],
  },
  {
    id: "ai-powered-content-strategy-creation",
    title: "AI-Powered Content Strategy & Creation",
    subtitle:
      "The complete content system — from strategic planning to production at scale — that creates genuine value for your audience without sacrificing quality, voice, or originality.",
    description:
      "Eight chapters on content strategy, pillar-cluster architecture, long-form and short-form production, visual multimedia, personalisation, operations, and distribution — the end-to-end system for marketers who use AI to compound authority, not fill a calendar.",
    difficulty: "Intermediate",
    readingMinutes: 192,
    topics: [
      "Content strategy with AI",
      "Pillar & cluster architecture",
      "Long-form content production",
      "Short-form & social at scale",
      "Visual & multimedia content",
      "Content personalisation at scale",
      "Content operations & workflow",
      "Content distribution & amplification",
    ],
    sequence: [
      {
        slug: "mkt-content-strategy-with-ai",
        note: "Strategy before production, audience intelligence, gap analysis, and keeping strategic judgment human.",
      },
      {
        slug: "mkt-content-pillar-cluster-architecture",
        note: "Pillar-cluster design, internal linking, journey mapping, and content architecture as business investment.",
      },
      {
        slug: "mkt-long-form-content-production",
        note: "Brief-to-publish workflow: research, outlines, drafts, expert insertion, editing, and fact-checking.",
      },
      {
        slug: "mkt-short-form-social-content-scale",
        note: "Content multiplication across LinkedIn, X, Instagram, and short-form video with tiered review.",
      },
      {
        slug: "mkt-visual-multimedia-content",
        note: "AI image, video, audio, and design tools — quality limits, brand consistency, and visual governance.",
      },
      {
        slug: "mkt-content-personalisation-scale",
        note: "Segmentation, variant production, email and landing page personalisation, and maturity path.",
      },
      {
        slug: "mkt-content-operations-workflow",
        note: "Team roles, brief systems, quality scoring, performance review, and archive as training asset.",
      },
      {
        slug: "mkt-content-distribution-amplification",
        note: "Distribution-first planning, organic and paid amplification, email, community, and syndication.",
      },
    ],
  },
  {
    id: "ai-powered-seo-organic-growth",
    title: "AI-Powered SEO & Organic Growth",
    subtitle:
      "The organic growth system — built on semantic authority, technical excellence, and the AI-era search landscape where the answer often appears before the link.",
    description:
      "Eight chapters on the new SEO landscape, keyword research, answer engine optimisation, technical SEO, content production, link building, local and international SEO, and analytics — the end-to-end organic growth system for marketers.",
    difficulty: "Intermediate",
    readingMinutes: 192,
    topics: [
      "The new SEO landscape",
      "Keyword research & semantic analysis",
      "AI Overviews & answer engine optimisation",
      "Technical SEO with AI",
      "AI-powered SEO content production",
      "Link building & digital PR",
      "Local & international SEO",
      "SEO analytics & reporting",
    ],
    sequence: [
      {
        slug: "mkt-new-seo-landscape",
        note: "Semantic search, AI Overviews, E-E-A-T, zero-click strategy, and topical authority.",
      },
      {
        slug: "mkt-keyword-research-semantic-analysis",
        note: "Intent classification, semantic clusters, question research, and keyword prioritisation.",
      },
      {
        slug: "mkt-ai-overviews-answer-engine-optimisation",
        note: "Citation economy, content structure for AI selection, Perplexity and ChatGPT Search.",
      },
      {
        slug: "mkt-technical-seo-with-ai",
        note: "Site audits, schema markup, Core Web Vitals, log analysis, and technical prioritisation.",
      },
      {
        slug: "mkt-ai-powered-seo-content-production",
        note: "SEO briefs, differentiation, on-page optimisation, refresh workflows, and programmatic SEO.",
      },
      {
        slug: "mkt-link-building-digital-pr",
        note: "Prospect research, digital PR, outreach personalisation, and link portfolio health.",
      },
      {
        slug: "mkt-local-international-seo",
        note: "Local SEO, hreflang, cultural localisation, and international market sequencing.",
      },
      {
        slug: "mkt-seo-analytics-reporting",
        note: "GSC analysis, traffic quality, competitor intelligence, and stakeholder reporting.",
      },
    ],
  },
  {
    id: "ai-powered-paid-media-performance",
    title: "AI-Powered Paid Media & Performance Marketing",
    subtitle:
      "The performance system — how AI is restructuring paid acquisition, creative testing, optimisation, and measurement across every paid channel.",
    description:
      "Eight chapters on the AI shift in paid media, paid search, paid social, programmatic, landing page CRO, attribution, budget planning, and emerging channels — the end-to-end performance marketing system for the AI-automated era.",
    difficulty: "Intermediate",
    readingMinutes: 192,
    topics: [
      "The AI shift in paid media",
      "AI in paid search",
      "AI in paid social",
      "Programmatic & display advertising",
      "Landing page & CRO",
      "Performance measurement & attribution",
      "Budget planning & media allocation",
      "Retail media & emerging paid channels",
    ],
    sequence: [
      {
        slug: "mkt-ai-shift-paid-media",
        note: "Automation wave, creative as targeting, signal dependency, black box oversight, and the human role.",
      },
      {
        slug: "mkt-ai-paid-search",
        note: "Smart Bidding, Performance Max, keyword strategy, RSA copy, and search account architecture.",
      },
      {
        slug: "mkt-ai-paid-social",
        note: "Meta Advantage+, creative testing, video and static production, LinkedIn AI, and creative fatigue.",
      },
      {
        slug: "mkt-programmatic-display-advertising",
        note: "RTB, DCO, audience targeting, brand safety, CTV, and programmatic investment criteria.",
      },
      {
        slug: "mkt-landing-page-cro",
        note: "AI copy variants, page structure, A/B hypotheses, personalisation, and CRO programme design.",
      },
      {
        slug: "mkt-performance-measurement-attribution",
        note: "Attribution crisis, MMM, incrementality, anomaly detection, and unified measurement.",
      },
      {
        slug: "mkt-budget-planning-media-allocation",
        note: "Budget modelling, channel allocation, forecasting, seasonality, and marginal return analysis.",
      },
      {
        slug: "mkt-retail-media-emerging-channels",
        note: "Amazon Ads, CTV, audio, influencer at scale, OOH, TikTok/Reddit, and channel expansion criteria.",
      },
    ],
  },
  {
    id: "ai-powered-email-crm-lifecycle",
    title: "AI-Powered Email, CRM & Lifecycle Marketing",
    subtitle:
      "The owned channel system — how AI transforms email and CRM from broadcast tools into personalised, behavioural, revenue-generating lifecycle engines.",
    description:
      "Eight chapters on email programme architecture, AI copywriting, automation, personalisation, CRM intelligence, retention, deliverability, and analytics — the end-to-end lifecycle marketing system for marketers who own the owned channel.",
    difficulty: "Intermediate",
    readingMinutes: 192,
    topics: [
      "Email strategy & programme architecture",
      "AI for email copywriting",
      "Email automation & behavioural triggers",
      "Personalisation & dynamic content",
      "CRM intelligence & lead nurturing",
      "Customer retention & loyalty marketing",
      "Email deliverability & technical excellence",
      "Email analytics & programme optimisation",
    ],
    sequence: [
      {
        slug: "mkt-email-strategy-programme-architecture",
        note: "Programme map, journey design, segmentation, list health, send-time optimisation, and revenue model.",
      },
      {
        slug: "mkt-ai-email-copywriting",
        note: "Subject lines, preview text, body copy, CTAs, dynamic blocks, sequences, and human editing layer.",
      },
      {
        slug: "mkt-email-automation-behavioural-triggers",
        note: "Welcome, onboarding, abandonment, re-engagement, post-purchase, and automation build priority.",
      },
      {
        slug: "mkt-email-personalisation-dynamic-content",
        note: "Product recommendations, behavioural personalisation, dynamic blocks, and personalisation infrastructure.",
      },
      {
        slug: "mkt-crm-intelligence-lead-nurturing",
        note: "Lead scoring, intent signals, enrichment, routing, nurture mapping, and CRM AI investment.",
      },
      {
        slug: "mkt-customer-retention-loyalty-marketing",
        note: "Churn prediction, retention campaigns, expansion, loyalty programmes, and retention ROI.",
      },
      {
        slug: "mkt-email-deliverability-technical-excellence",
        note: "SPF/DKIM/DMARC, reputation, list hygiene, engagement-based sending, and deliverability investment.",
      },
      {
        slug: "mkt-email-analytics-programme-optimisation",
        note: "Analytics stack, attribution, sequence analysis, LTV, automated reporting, and optimisation roadmap.",
      },
    ],
  },
  {
    id: "ai-powered-brand-pr-communications",
    title: "AI-Powered Brand, PR & Communications",
    subtitle:
      "The brand and communications system — building, protecting, and expressing a brand when content is abundant, attention is scarce, and AI can replicate the surface of your voice.",
    description:
      "Eight chapters on brand strategy, identity, PR, crisis communications, thought leadership, employer brand, social media, and brand measurement — the end-to-end communications system for marketers who protect distinctiveness while scaling production.",
    difficulty: "Intermediate",
    readingMinutes: 192,
    topics: [
      "Brand strategy with AI",
      "Brand identity & expression",
      "PR & media relations with AI",
      "Crisis communications with AI",
      "Thought leadership & executive communications",
      "Internal communications & employer brand",
      "Social media strategy & management",
      "Brand measurement & reputation intelligence",
    ],
    sequence: [
      {
        slug: "mkt-brand-strategy-with-ai",
        note: "Brand research, positioning, narrative, competitive mapping, architecture, and where AI must not lead.",
      },
      {
        slug: "mkt-brand-identity-expression",
        note: "Visual identity, voice guides for AI, image prompting, templates, compliance monitoring, and governance.",
      },
      {
        slug: "mkt-pr-media-relations-with-ai",
        note: "Media intelligence, story angles, pitches, press releases, journalist research, and PR governance.",
      },
      {
        slug: "mkt-crisis-communications-with-ai",
        note: "Signal monitoring, response preparation, stakeholder mapping, social response, and crisis governance.",
      },
      {
        slug: "mkt-thought-leadership-executive-comms",
        note: "Executive voice preservation, ghostwriting workflow, LinkedIn, speaking, op-eds, and media prep.",
      },
      {
        slug: "mkt-internal-comms-employer-brand",
        note: "EVP development, recruitment marketing, employee advocacy, Glassdoor, and employer brand ROI.",
      },
      {
        slug: "mkt-social-media-strategy-management",
        note: "Platform strategy, content planning, community management, listening, influencers, and social governance.",
      },
      {
        slug: "mkt-brand-measurement-reputation-intelligence",
        note: "Brand tracking, social listening, earned media, share of voice, NPS analysis, and measurement investment.",
      },
    ],
  },
  {
    id: "ai-powered-demand-generation-gtm",
    title: "AI-Powered Demand Generation & Go-to-Market",
    subtitle:
      "The growth system — from awareness to revenue — how AI accelerates every stage of demand creation, campaign execution, and market entry.",
    description:
      "Eight chapters on demand generation strategy, ABM, GTM strategy, product launch, sales enablement, growth experimentation, partner marketing, and customer advocacy — the end-to-end growth system for B2B and product marketers.",
    difficulty: "Intermediate",
    readingMinutes: 192,
    topics: [
      "Demand generation strategy",
      "Account-based marketing with AI",
      "Go-to-market strategy with AI",
      "Product launch planning & execution",
      "Sales enablement with AI",
      "Growth experimentation with AI",
      "Partner & channel marketing with AI",
      "Customer marketing & advocacy",
    ],
    sequence: [
      {
        slug: "mkt-demand-generation-strategy",
        note: "Full-funnel demand model, ICP definition, channel selection, content-led and community-led demand.",
      },
      {
        slug: "mkt-account-based-marketing-with-ai",
        note: "Account selection, research at scale, personalised ABM content, orchestration, and ABM measurement.",
      },
      {
        slug: "mkt-go-to-market-strategy-with-ai",
        note: "GTM framework, market analysis, personas, differentiation, pricing, channels, and pre-mortem.",
      },
      {
        slug: "mkt-product-launch-planning-execution",
        note: "Launch planning, messaging house, content sprint, sales enablement, PR, and launch week ops.",
      },
      {
        slug: "mkt-sales-enablement-with-ai",
        note: "Content map, battle cards, case studies, RFP responses, objection handling, and usage analytics.",
      },
      {
        slug: "mkt-growth-experimentation-with-ai",
        note: "Hypothesis generation, experiment design, ICE scoring, velocity, interpretation, and learning log.",
      },
      {
        slug: "mkt-partner-channel-marketing-with-ai",
        note: "Partner identification, co-marketing, enablement kits, affiliate, reseller, and partner ROI.",
      },
      {
        slug: "mkt-customer-marketing-advocacy",
        note: "Onboarding marketing, health monitoring, expansion, advocacy programmes, community, and retention ROI.",
      },
    ],
  },
  {
    id: "ai-powered-marketing-analytics-intelligence",
    title: "AI-Powered Marketing Analytics & Intelligence",
    subtitle:
      "The measurement and intelligence system — from data collection to strategic decision — how AI transforms marketing analytics from backward-looking reporting to forward-looking intelligence.",
    description:
      "Eight chapters on data infrastructure, marketing analytics, customer intelligence, attribution, predictive analytics, competitive intelligence, performance reporting, and marketing finance — the end-to-end measurement system for marketers who own outcomes with data.",
    difficulty: "Intermediate",
    readingMinutes: 192,
    topics: [
      "Marketing data infrastructure",
      "Marketing analytics with AI",
      "Customer intelligence & audience research",
      "Attribution & revenue analytics",
      "Predictive analytics & forecasting",
      "Competitive intelligence with AI",
      "Marketing performance reporting",
      "Marketing finance & budget management",
    ],
    sequence: [
      {
        slug: "mkt-marketing-data-infrastructure",
        note: "Data stack, first-party strategy, event tracking, CDP, privacy, governance, and investment sequencing.",
      },
      {
        slug: "mkt-marketing-analytics-with-ai",
        note: "NL querying, journey analysis, cohorts, funnel diagnosis, mix optimisation, and automated insights.",
      },
      {
        slug: "mkt-customer-intelligence-audience-research",
        note: "Qualitative synthesis, social listening, review mining, segmentation, JTBD, and market sizing.",
      },
      {
        slug: "mkt-attribution-revenue-analytics",
        note: "Attribution crisis, MTA, MMM, incrementality, unified measurement, and revenue reporting.",
      },
      {
        slug: "mkt-predictive-analytics-forecasting",
        note: "Lead scoring, churn, LTV, demand forecasting, campaign pre-flight, and budget scenarios.",
      },
      {
        slug: "mkt-competitive-intelligence-with-ai",
        note: "Content, paid, product, PR monitoring, win/loss analysis, and intelligence distribution.",
      },
      {
        slug: "mkt-marketing-performance-reporting",
        note: "Reporting cadence, dashboards, automated narratives, pipeline contribution, and stakeholder versions.",
      },
      {
        slug: "mkt-marketing-finance-budget-management",
        note: "Budget planning, allocation, CAC/LTV, ROI communication, scenario modelling, and vendor spend.",
      },
    ],
  },
  {
    id: "ai-era-marketer-team-career-operations",
    title: "The AI-Era Marketer — Team, Career & Operations",
    subtitle:
      "The professional layer — the skills, the team model, the operating system, and the career positioning of a marketer who thrives as AI transforms the function.",
    description:
      "Eight chapters on the new skill stack, team building, workflow systems, tool evaluation, marketing operations, leadership, career positioning, and responsible AI — the professional capstone for marketers who lead, not just execute.",
    difficulty: "Intermediate",
    readingMinutes: 192,
    topics: [
      "The new marketing skill stack",
      "Building & leading an AI-powered marketing team",
      "The AI marketing workflow system",
      "AI tools evaluation & stack management",
      "Marketing operations & process design",
      "Marketing leadership in the AI era",
      "Career positioning in an AI-transformed function",
      "Responsible AI marketing — ethics, governance & trust",
    ],
    sequence: [
      {
        slug: "mkt-new-marketing-skill-stack",
        note: "What AI replaces vs amplifies, prompt craft, workflow design, data literacy, and personal skill plan.",
      },
      {
        slug: "mkt-building-leading-ai-marketing-team",
        note: "Team structure, hiring, literacy training, governance, prompt library, and operating model.",
      },
      {
        slug: "mkt-ai-marketing-workflow-system",
        note: "Daily, weekly, monthly, quarterly rhythms, prompt library, knowledge management, and personal system design.",
      },
      {
        slug: "mkt-ai-tools-evaluation-stack-management",
        note: "Evaluation framework, pilots, ROI, integration, security, quarterly audit, and stack architecture.",
      },
      {
        slug: "mkt-marketing-operations-process-design",
        note: "MarTech admin, campaign ops, SOPs, QA, project management, agency management, and ops investment.",
      },
      {
        slug: "mkt-marketing-leadership-ai-era",
        note: "CMO role, AI transformation, commercial alignment, board narrative, talent, ethics, and leadership development.",
      },
      {
        slug: "mkt-career-positioning-ai-transformed-function",
        note: "T-shaped marketer, public body of work, leadership path, specialist vs generalist, and future-proofing.",
      },
      {
        slug: "mkt-responsible-ai-marketing-ethics-governance",
        note: "Transparency, manipulation avoidance, data ethics, misinformation risk, inclusion, culture, and ethical line.",
      },
    ],
  },
];

export const MARKETER_EXECUTIVE_KBS: ExecutiveKb[] = withTrackOrder(MARKETER_EXECUTIVE_KBS_DATA);
