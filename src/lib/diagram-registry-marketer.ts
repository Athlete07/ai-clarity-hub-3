import type { DiagramDef } from "./diagram-registry";

/** Marketer track diagram definitions — keyed by chapter diagram ids. */
export const MARKETER_DIAGRAM_REGISTRY: Record<string, DiagramDef> = {
  "mkt-ch1-ai-hierarchy": {
    type: "nested",
    layers: [
      {
        title: "Artificial Intelligence (AI)",
        desc: "Any system that automates marketing judgment",
        items: "Rules, heuristics, ML, generative tools",
      },
      {
        title: "Machine Learning (ML)",
        desc: "Learns patterns from campaign and customer data",
        items: "Bidding, scoring, churn, send-time optimisation",
      },
      {
        title: "Generative AI",
        desc: "Predicts useful next outputs from pattern-trained models",
        items: "Copy, images, video, personalisation drafts",
      },
    ],
  },
  "mkt-ch1-retrieval-vs-generation": {
    type: "comparison",
    rows: [
      {
        label: "Search / retrieval",
        steps: ["Finds existing documents", "Cites sources", "Fails when content does not exist"],
      },
      {
        label: "Generative AI",
        steps: ["Predicts plausible text", "May invent facts", "Requires verification habit"],
      },
    ],
  },
  "mkt-ch2-training-to-output": {
    type: "flow",
    steps: [
      { title: "Training data", desc: "Internet-scale patterns baked into weights" },
      { title: "Your prompt", desc: "Context, instructions, examples" },
      { title: "Model predicts", desc: "Most useful next token sequence" },
      { title: "Your review", desc: "Voice, facts, claims, brand fit" },
      { title: "Publish", desc: "Only after human curation" },
    ],
  },
  "mkt-ch3-stack-layers": {
    type: "nested",
    layers: [
      { title: "Foundation models", desc: "Claude, GPT, Gemini", items: "General reasoning + generation" },
      { title: "Marketing platforms", desc: "Jasper, Midjourney, HubSpot AI", items: "Packaged workflows" },
      { title: "Automation", desc: "Zapier, Make, n8n", items: "Chained workflows" },
      { title: "Analytics", desc: "Attribution, forecasting", items: "Learning loop" },
    ],
  },
  "mkt-ch4-prompt-components": {
    type: "flow",
    steps: [
      { title: "Instructions", desc: "What to produce" },
      { title: "Context", desc: "Audience, offer, channel" },
      { title: "Examples", desc: "Few-shot on-brand samples" },
      { title: "Format", desc: "Length, structure, constraints" },
      { title: "Iterate", desc: "Refine until publishable" },
    ],
  },
  "mkt-ch5-voice-governance": {
    type: "flow",
    steps: [
      { title: "Voice document", desc: "Tone, vocabulary, forbidden phrases" },
      { title: "System prompt + examples", desc: "Train AI on your voice" },
      { title: "Generate", desc: "AI drafts at scale" },
      { title: "Human curation", desc: "Select, edit, reject" },
      { title: "Publish + audit", desc: "Detect drift monthly" },
    ],
  },
  "mkt-ch6-responsible-review": {
    type: "flow",
    steps: [
      { title: "Draft", desc: "AI-assisted content" },
      { title: "Fact-check", desc: "Claims, stats, product details" },
      { title: "Rights check", desc: "Copyright, likeness, disclosure" },
      { title: "Bias scan", desc: "Targeting and creative fairness" },
      { title: "Approve", desc: "Named owner signs off" },
    ],
  },
  "mkt-ch7-scorecard": {
    type: "comparison",
    cards: [
      { label: "Productivity", title: "Time & volume", desc: "Hours saved, pieces per week" },
      { label: "Quality", title: "Engagement & conversion", desc: "AI vs human baseline" },
      { label: "Cost", title: "Unit economics", desc: "Cost per lead, per piece" },
      { label: "Adoption", title: "Real usage", desc: "Workflows that stick" },
    ],
  },
  "mkt-ch8-mindset-loop": {
    type: "flow",
    steps: [
      { title: "Experiment", desc: "Low-cost tool trials" },
      { title: "Curate", desc: "Keep what works" },
      { title: "Systematise", desc: "Prompt library + workflow" },
      { title: "Measure", desc: "Honest scorecard" },
      { title: "Elevate", desc: "More strategy, less busywork" },
    ],
  },
  "mkt-cs-ch1-strategy-first": {
    type: "flow",
    steps: [
      { title: "Audience insight", desc: "Research synthesis" },
      { title: "Gap analysis", desc: "Competitor + archive audit" },
      { title: "Strategic angles", desc: "Topics mapped to journey" },
      { title: "Editorial calendar", desc: "Goals before volume" },
      { title: "Production", desc: "AI accelerates execution" },
    ],
  },
  "mkt-cs-ch2-pillar-cluster": {
    type: "nested",
    layers: [
      { title: "Pillar page", desc: "Comprehensive topic anchor", items: "Authority hub" },
      { title: "Cluster articles", desc: "Deep subtopic coverage", items: "SEO + education" },
      { title: "Internal links", desc: "Authority distribution", items: "Hub-and-spoke" },
      { title: "Journey stages", desc: "Awareness → decision", items: "Strategic sequencing" },
    ],
  },
  "mkt-cs-ch3-long-form-workflow": {
    type: "flow",
    steps: [
      { title: "Brief", desc: "Audience, angle, proof points" },
      { title: "Research", desc: "Sources + synthesis" },
      { title: "Outline", desc: "Structure stress-test" },
      { title: "Draft + expert layer", desc: "AI + proprietary insight" },
      { title: "Edit + verify", desc: "Quality gate before publish" },
    ],
  },
  "mkt-cs-ch4-multiplication": {
    type: "flow",
    steps: [
      { title: "Pillar asset", desc: "Report, webinar, blog" },
      { title: "Adapt per channel", desc: "Not copy-paste" },
      { title: "Platform-native hooks", desc: "LinkedIn, X, Reels" },
      { title: "Tiered review", desc: "Risk-based approval" },
      { title: "Measure resonance", desc: "Engagement over volume" },
    ],
  },
  "mkt-cs-ch5-visual-pipeline": {
    type: "flow",
    steps: [
      { title: "Brief visual", desc: "Style + brand constraints" },
      { title: "Generate / design", desc: "Midjourney, Canva, Firefly" },
      { title: "Iterate", desc: "Style reference + negatives" },
      { title: "Rights check", desc: "Copyright + disclosure" },
      { title: "Approve", desc: "Visual governance gate" },
    ],
  },
  "mkt-cs-ch6-personalisation-spectrum": {
    type: "nested",
    layers: [
      { title: "Basic substitution", desc: "Name, company merge tags", items: "Entry level" },
      { title: "Segment messaging", desc: "Role/industry variants", items: "Mid maturity" },
      { title: "Behavioural adaptation", desc: "Engagement-triggered content", items: "Advanced" },
      { title: "Real-time dynamic", desc: "Page + email personalisation", items: "High data requirement" },
    ],
  },
  "mkt-cs-ch7-content-ops": {
    type: "flow",
    steps: [
      { title: "Plan", desc: "Editorial calendar" },
      { title: "Brief", desc: "Standardised AI inputs" },
      { title: "Produce", desc: "AI-assisted creation" },
      { title: "Score + approve", desc: "Quality rubric" },
      { title: "Distribute + review", desc: "Performance loop" },
    ],
  },
  "mkt-cs-ch8-distribution-mix": {
    type: "comparison",
    cards: [
      { label: "Owned", title: "Email + site", desc: "Newsletter, blog, resource hub" },
      { label: "Earned", title: "Community + PR", desc: "Shares, syndication, mentions" },
      { label: "Paid", title: "Amplification", desc: "Boost high-value pillars" },
      { label: "Organic social", title: "Channel-native", desc: "Posting time + format optimisation" },
    ],
  },
  "mkt-seo-ch1-search-evolution": {
    type: "comparison",
    rows: [
      {
        label: "Keyword era",
        steps: ["String matching", "Page-level ranking", "Clicks from blue links"],
      },
      {
        label: "Semantic + AI era",
        steps: ["Meaning understanding", "Topical authority", "Answers before clicks"],
      },
    ],
  },
  "mkt-seo-ch2-keyword-clusters": {
    type: "flow",
    steps: [
      { title: "Seed topics", desc: "Business + audience themes" },
      { title: "Intent classify", desc: "Info, commercial, transactional" },
      { title: "Semantic clusters", desc: "Group by meaning" },
      { title: "Gap + difficulty", desc: "Opportunity scoring" },
      { title: "Content map", desc: "Prioritised targets" },
    ],
  },
  "mkt-seo-ch3-aio-citation": {
    type: "flow",
    steps: [
      { title: "Direct answer block", desc: "Definition + facts upfront" },
      { title: "Structured sections", desc: "FAQ, steps, tables" },
      { title: "Cited sources", desc: "Verifiable claims" },
      { title: "AI selects page", desc: "Overview or Perplexity cite" },
      { title: "Brand visibility", desc: "Authority even with fewer clicks" },
    ],
  },
  "mkt-seo-ch4-technical-stack": {
    type: "nested",
    layers: [
      { title: "Crawl & index", desc: "Discoverability foundation", items: "Robots, sitemap, canonicals" },
      { title: "Performance", desc: "Core Web Vitals", items: "LCP, INP, CLS" },
      { title: "Structured data", desc: "Schema markup", items: "FAQ, Article, Product" },
      { title: "Architecture", desc: "URLs + internal links", items: "Hub clusters, depth" },
    ],
  },
  "mkt-seo-ch5-seo-content-workflow": {
    type: "flow",
    steps: [
      { title: "SEO brief", desc: "Intent, entities, gaps" },
      { title: "Differentiate", desc: "Original data or insight" },
      { title: "Draft + optimise", desc: "Headings, terms, links" },
      { title: "Quality gate", desc: "Rubric + human review" },
      { title: "Publish + refresh", desc: "Monitor and update" },
    ],
  },
  "mkt-seo-ch6-link-building": {
    type: "flow",
    steps: [
      { title: "Prospect research", desc: "AI identifies targets" },
      { title: "Story angle", desc: "Data PR or expert hook" },
      { title: "Personalised outreach", desc: "Scaled but individual" },
      { title: "Earn coverage", desc: "Editorial + links" },
      { title: "Monitor portfolio", desc: "Anchor + domain quality" },
    ],
  },
  "mkt-seo-ch7-international-seo": {
    type: "nested",
    layers: [
      { title: "Market selection", desc: "Priority countries", items: "Demand + competition" },
      { title: "Architecture", desc: "Hreflang + domains", items: "Technical structure" },
      { title: "Localisation", desc: "Cultural adaptation", items: "Not just translation" },
      { title: "Local authority", desc: "Regional links + PR", items: "Market-specific trust" },
    ],
  },
  "mkt-seo-ch8-reporting-stack": {
    type: "comparison",
    cards: [
      { label: "GSC", title: "Visibility", desc: "Queries, CTR, indexation" },
      { label: "GA4", title: "Traffic quality", desc: "Engagement, conversion" },
      { label: "Rank tracking", title: "Share of voice", desc: "SERP features" },
      { label: "Backlinks", title: "Authority", desc: "Referring domains" },
    ],
  },
  "mkt-pm-ch1-paid-media-shift": {
    type: "comparison",
    rows: [
      {
        label: "Manual era",
        steps: ["Bid management", "Audience targeting", "Keyword lists"],
      },
      {
        label: "AI-automated era",
        steps: ["Creative strategy", "Signal quality", "Measurement + governance"],
      },
    ],
  },
  "mkt-pm-ch2-smart-bidding": {
    type: "flow",
    steps: [
      { title: "Conversion events", desc: "Clean, valued signals" },
      { title: "Audience signals", desc: "CRM + first-party data" },
      { title: "Creative variety", desc: "RSA + asset groups" },
      { title: "Smart Bidding", desc: "Target CPA / ROAS" },
      { title: "Human oversight", desc: "Search terms + structure" },
    ],
  },
  "mkt-pm-ch3-creative-led-social": {
    type: "flow",
    steps: [
      { title: "Persona insight", desc: "Audience research" },
      { title: "Creative variants", desc: "AI-assisted production" },
      { title: "Advantage+ delivery", desc: "Platform AI optimises" },
      { title: "Test matrix", desc: "Message × format" },
      { title: "Refresh on fatigue", desc: "Monitor + replace" },
    ],
  },
  "mkt-pm-ch4-programmatic-stack": {
    type: "nested",
    layers: [
      { title: "DSP bidding", desc: "Real-time auction", items: "Goal-based optimisation" },
      { title: "DCO", desc: "Dynamic creative", items: "Component assets" },
      { title: "Audiences", desc: "First-party + contextual", items: "Post-cookie targeting" },
      { title: "Brand safety", desc: "Inventory quality", items: "Exclusion lists" },
    ],
  },
  "mkt-pm-ch5-cro-workflow": {
    type: "flow",
    steps: [
      { title: "Research synthesis", desc: "Heatmaps + sessions" },
      { title: "Hypotheses", desc: "AI-prioritised backlog" },
      { title: "Copy variants", desc: "Headlines + CTAs" },
      { title: "A/B test", desc: "Statistical rigour" },
      { title: "Implement winners", desc: "Compound gains" },
    ],
  },
  "mkt-pm-ch6-measurement-triangle": {
    type: "nested",
    layers: [
      { title: "Platform data", desc: "Directional only", items: "Last-click limits" },
      { title: "Incrementality", desc: "Holdout tests", items: "Gold standard" },
      { title: "MMM", desc: "Channel contribution", items: "Cookie-independent" },
      { title: "Unified view", desc: "Triangulated decisions", items: "Investment confidence" },
    ],
  },
  "mkt-pm-ch7-budget-allocation": {
    type: "flow",
    steps: [
      { title: "Forecast scenarios", desc: "AI budget modelling" },
      { title: "Marginal returns", desc: "Diminishing efficiency" },
      { title: "Channel mix", desc: "Cross-channel allocation" },
      { title: "Seasonality", desc: "Forward planning" },
      { title: "Reallocate live", desc: "Governance triggers" },
    ],
  },
  "mkt-pm-ch8-channel-expansion": {
    type: "comparison",
    cards: [
      { label: "Search + social", title: "Core channels", desc: "Google, Meta, LinkedIn" },
      { label: "Retail media", title: "Shopper intent", desc: "Amazon, Walmart" },
      { label: "CTV + audio", title: "Upper funnel", desc: "Streaming, podcast" },
      { label: "Emerging", title: "TikTok, Reddit", desc: "Audience-specific reach" },
    ],
  },
  "mkt-email-ch1-programme-map": {
    type: "nested",
    layers: [
      { title: "Acquisition", desc: "Welcome + onboarding", items: "First value moment" },
      { title: "Nurture", desc: "Behavioural sequences", items: "Education + conversion" },
      { title: "Broadcast", desc: "Campaigns + newsletters", items: "Engagement + offers" },
      { title: "Retention", desc: "Loyalty + win-back", items: "LTV expansion" },
    ],
  },
  "mkt-email-ch2-copy-workflow": {
    type: "flow",
    steps: [
      { title: "Brief", desc: "Audience, goal, offer" },
      { title: "Subject + preview", desc: "AI variants" },
      { title: "Body + CTA", desc: "On-brand draft" },
      { title: "Human edit", desc: "Voice + facts" },
      { title: "Test + send", desc: "A/B and STO" },
    ],
  },
  "mkt-email-ch3-automation-triggers": {
    type: "flow",
    steps: [
      { title: "Behaviour signal", desc: "Cart, browse, signup" },
      { title: "Trigger logic", desc: "Threshold + delay" },
      { title: "Sequence", desc: "Multi-step emails" },
      { title: "Personalise", desc: "Dynamic content" },
      { title: "Optimise", desc: "Drop-off analysis" },
    ],
  },
  "mkt-email-ch4-personalisation-spectrum": {
    type: "nested",
    layers: [
      { title: "Tokens", desc: "Name, company", items: "Basic" },
      { title: "Behavioural", desc: "Clicks, purchases", items: "Mid lift" },
      { title: "Recommendations", desc: "Product AI", items: "E-commerce" },
      { title: "Predictive", desc: "Next best action", items: "Advanced data" },
    ],
  },
  "mkt-email-ch5-crm-intelligence": {
    type: "flow",
    steps: [
      { title: "Enrich data", desc: "Firmographic + intent" },
      { title: "Score leads", desc: "Fit + behaviour" },
      { title: "Route", desc: "Sales vs nurture" },
      { title: "Nurture content", desc: "Stage-mapped" },
      { title: "Pipeline report", desc: "Attribution loop" },
    ],
  },
  "mkt-email-ch6-retention-loop": {
    type: "flow",
    steps: [
      { title: "Health signals", desc: "Usage + engagement" },
      { title: "Churn risk score", desc: "Early warning" },
      { title: "Intervention", desc: "Retention campaign" },
      { title: "Expansion", desc: "Upsell trigger" },
      { title: "Advocacy", desc: "Referral programme" },
    ],
  },
  "mkt-email-ch7-deliverability": {
    type: "flow",
    steps: [
      { title: "Authenticate", desc: "SPF, DKIM, DMARC" },
      { title: "List hygiene", desc: "Bounces + complaints" },
      { title: "Engagement send", desc: "Suppress inactive" },
      { title: "Inbox test", desc: "Pre-send placement" },
      { title: "Monitor reputation", desc: "Ongoing health" },
    ],
  },
  "mkt-email-ch8-analytics-stack": {
    type: "comparison",
    cards: [
      { label: "ESP", title: "Opens + clicks", desc: "Campaign performance" },
      { label: "GA4", title: "Site behaviour", desc: "Post-click journey" },
      { label: "Revenue", title: "Attribution", desc: "Email to pipeline" },
      { label: "LTV", title: "Subscriber value", desc: "Long-term ROI" },
    ],
  },
  "mkt-brand-ch1-strategy-research": {
    type: "flow",
    steps: [
      { title: "Research synthesis", desc: "Interviews, reviews, social" },
      { title: "Positioning options", desc: "AI stress-test" },
      { title: "Competitive map", desc: "White space analysis" },
      { title: "Narrative framework", desc: "Human distinctiveness" },
      { title: "Brand health track", desc: "Ongoing measurement" },
    ],
  },
  "mkt-brand-ch2-identity-system": {
    type: "nested",
    layers: [
      { title: "Visual identity", desc: "Logo, colour, type", items: "AI creative briefs" },
      { title: "Voice guide", desc: "Tone + examples", items: "Model-influencing doc" },
      { title: "Templates", desc: "Design guardrails", items: "Constrained production" },
      { title: "Compliance audit", desc: "Cross-channel check", items: "Scale monitoring" },
    ],
  },
  "mkt-brand-ch3-pr-workflow": {
    type: "flow",
    steps: [
      { title: "Media intelligence", desc: "Always-on monitoring" },
      { title: "Story angle", desc: "News-worthy hook" },
      { title: "Journalist research", desc: "Beat + preferences" },
      { title: "Personalised pitch", desc: "Human-edited draft" },
      { title: "Coverage track", desc: "Share of voice" },
    ],
  },
  "mkt-brand-ch4-crisis-response": {
    type: "flow",
    steps: [
      { title: "Signal detect", desc: "Sentiment + mentions" },
      { title: "Prepare holds", desc: "Stakeholder messages" },
      { title: "Draft responses", desc: "AI-assisted scale" },
      { title: "Human approve", desc: "Named authority" },
      { title: "Post-crisis review", desc: "Playbook update" },
    ],
  },
  "mkt-brand-ch5-thought-leadership": {
    type: "flow",
    steps: [
      { title: "Strategy", desc: "Topics + audience" },
      { title: "Interview capture", desc: "Genuine perspective" },
      { title: "AI shape draft", desc: "Preserve voice" },
      { title: "Executive edit", desc: "Authenticity gate" },
      { title: "Distribute", desc: "LinkedIn, op-ed, stage" },
    ],
  },
  "mkt-brand-ch6-employer-brand": {
    type: "nested",
    layers: [
      { title: "EVP research", desc: "Candidate perception", items: "Competitive analysis" },
      { title: "Recruitment content", desc: "Jobs + careers", items: "AI-assisted copy" },
      { title: "Employee advocacy", desc: "Shareable assets", items: "Reach amplification" },
      { title: "Measure hiring", desc: "Offer + retention", items: "Business case" },
    ],
  },
  "mkt-brand-ch7-social-system": {
    type: "flow",
    steps: [
      { title: "Platform strategy", desc: "Pillars + formats" },
      { title: "Content calendar", desc: "AI planning" },
      { title: "Community draft", desc: "Human oversight" },
      { title: "Social listening", desc: "Real-time intel" },
      { title: "Report + adapt", desc: "Performance narrative" },
    ],
  },
  "mkt-brand-ch8-reputation-stack": {
    type: "comparison",
    cards: [
      { label: "Brand tracking", title: "Awareness + NPS", desc: "Health metrics" },
      { label: "Social listening", title: "Sentiment trends", desc: "Share of conversation" },
      { label: "Earned media", title: "Coverage value", desc: "Message penetration" },
      { label: "Risk monitor", title: "Early warning", desc: "Reputation threats" },
    ],
  },
  "mkt-dg-ch1-full-funnel": {
    type: "flow",
    steps: [
      { title: "Awareness", desc: "Content + community" },
      { title: "Consideration", desc: "Nurture + events" },
      { title: "Intent", desc: "Capture signals" },
      { title: "Evaluation", desc: "Enable sales" },
      { title: "Purchase", desc: "Convert demand" },
    ],
  },
  "mkt-dg-ch2-abm-workflow": {
    type: "flow",
    steps: [
      { title: "Select accounts", desc: "ICP + intent scoring" },
      { title: "Research", desc: "AI account intel" },
      { title: "Personalise", desc: "Stakeholder messaging" },
      { title: "Orchestrate", desc: "Multi-channel touches" },
      { title: "Measure", desc: "Account pipeline influence" },
    ],
  },
  "mkt-dg-ch3-gtm-framework": {
    type: "nested",
    layers: [
      { title: "Market + customer", desc: "TAM, ICP, personas", items: "Research foundation" },
      { title: "Product + positioning", desc: "Differentiation map", items: "Messaging house" },
      { title: "Channel + pricing", desc: "Economics model", items: "Go-to-market mix" },
      { title: "Risk review", desc: "Pre-mortem", items: "Stress-test assumptions" },
    ],
  },
  "mkt-dg-ch4-launch-sprint": {
    type: "flow",
    steps: [
      { title: "Plan + owners", desc: "Workback schedule" },
      { title: "Messaging house", desc: "Align teams" },
      { title: "Content sprint", desc: "AI production" },
      { title: "Enable + PR", desc: "Sales + media" },
      { title: "Launch week", desc: "Monitor + optimise" },
    ],
  },
  "mkt-dg-ch5-sales-enablement": {
    type: "nested",
    layers: [
      { title: "Content map", desc: "Stage × persona", items: "Priority production" },
      { title: "Battle cards", desc: "Competitive intel", items: "Seller-ready" },
      { title: "Case studies", desc: "Proof points", items: "Interview workflow" },
      { title: "Usage analytics", desc: "What sells", items: "Compound library" },
    ],
  },
  "mkt-dg-ch6-experiment-loop": {
    type: "flow",
    steps: [
      { title: "Hypothesis", desc: "AI from data" },
      { title: "Design test", desc: "Statistical validity" },
      { title: "ICE prioritise", desc: "Backlog rank" },
      { title: "Run + analyse", desc: "Velocity + insight" },
      { title: "Log learning", desc: "Institutional memory" },
    ],
  },
  "mkt-dg-ch7-partner-ecosystem": {
    type: "flow",
    steps: [
      { title: "Identify partners", desc: "AI research" },
      { title: "Enable kit", desc: "Co-branded assets" },
      { title: "Co-market", desc: "Joint campaigns" },
      { title: "Track pipeline", desc: "Partner attribution" },
      { title: "Optimise mix", desc: "ROI by partner" },
    ],
  },
  "mkt-dg-ch8-customer-growth": {
    type: "flow",
    steps: [
      { title: "Onboard fast", desc: "Time to value" },
      { title: "Health monitor", desc: "Churn signals" },
      { title: "Expand", desc: "Upsell triggers" },
      { title: "Advocate", desc: "Referral programme" },
      { title: "Community", desc: "Retention + WOM" },
    ],
  },
  "mkt-ma-ch1-data-stack": {
    type: "nested",
    layers: [
      { title: "Collection", desc: "CRM, ads, email, web", items: "Event tracking" },
      { title: "Unification", desc: "CDP + identity", items: "First-party data" },
      { title: "Warehouse", desc: "Single source", items: "Clean + governed" },
      { title: "Activation", desc: "Segments + models", items: "AI-ready data" },
    ],
  },
  "mkt-ma-ch2-analytics-workflow": {
    type: "flow",
    steps: [
      { title: "Ingest + clean", desc: "Quality data" },
      { title: "Analyse", desc: "Journey + cohorts" },
      { title: "Extract insight", desc: "AI surfaces patterns" },
      { title: "Narrate", desc: "Decision-ready story" },
      { title: "Recommend", desc: "Next action" },
    ],
  },
  "mkt-ma-ch3-customer-intelligence": {
    type: "flow",
    steps: [
      { title: "Qual + quant", desc: "Interviews + surveys" },
      { title: "Social + reviews", desc: "Always-on listening" },
      { title: "Segment", desc: "AI discovers clusters" },
      { title: "JTBD + market", desc: "Strategic insight" },
      { title: "Activate", desc: "Strategy + creative" },
    ],
  },
  "mkt-ma-ch4-measurement-triangle": {
    type: "nested",
    layers: [
      { title: "Platform data", desc: "Directional only", items: "Last-click bias" },
      { title: "Multi-touch", desc: "Model assumptions", items: "Partial truth" },
      { title: "MMM", desc: "Channel contribution", items: "Cookie-independent" },
      { title: "Incrementality", desc: "Holdout tests", items: "Gold standard" },
    ],
  },
  "mkt-ma-ch5-predictive-models": {
    type: "comparison",
    cards: [
      { label: "Lead score", title: "Conversion likelihood", desc: "Sales prioritisation" },
      { label: "Churn risk", title: "Retention trigger", desc: "Early intervention" },
      { label: "LTV", title: "Acquisition value", desc: "Unit economics" },
      { label: "Demand forecast", title: "Pipeline predict", desc: "Planning accuracy" },
    ],
  },
  "mkt-ma-ch6-competitive-stack": {
    type: "flow",
    steps: [
      { title: "Monitor", desc: "Content, ads, product" },
      { title: "Synthesise", desc: "AI briefings" },
      { title: "Win/loss", desc: "Sales interviews" },
      { title: "Distribute", desc: "Sales + product" },
      { title: "Respond", desc: "Strategy update" },
    ],
  },
  "mkt-ma-ch7-reporting-cadence": {
    type: "comparison",
    cards: [
      { label: "Weekly", title: "Operational", desc: "Campaign + channel" },
      { label: "Monthly", title: "Programme", desc: "Performance narrative" },
      { label: "Quarterly", title: "Strategic", desc: "Mix + investment" },
      { label: "Anomaly", title: "Always-on", desc: "AI monitoring" },
    ],
  },
  "mkt-ma-ch8-marketing-finance": {
    type: "flow",
    steps: [
      { title: "Plan budget", desc: "Channel models" },
      { title: "Allocate", desc: "Marginal returns" },
      { title: "Track CAC/LTV", desc: "Unit economics" },
      { title: "Scenario model", desc: "Negotiation prep" },
      { title: "Report ROI", desc: "CFO-credible" },
    ],
  },
  "mkt-era-ch1-skill-stack": {
    type: "comparison",
    rows: [
      {
        label: "AI handles",
        steps: ["Draft production", "Basic reporting", "Template creative", "Routine optimisation"],
      },
      {
        label: "Human leads",
        steps: ["Strategy + taste", "Prompt craft", "Creative direction", "Channel expertise"],
      },
    ],
  },
  "mkt-era-ch2-team-model": {
    type: "nested",
    layers: [
      { title: "Strategists", desc: "ICP, positioning, mix", items: "Fewer producers" },
      { title: "Editors", desc: "Curate AI output", items: "Quality gate" },
      { title: "Analysts", desc: "Data + attribution", items: "Decision support" },
      { title: "Ops", desc: "Workflow + MarTech", items: "Scale enabler" },
    ],
  },
  "mkt-era-ch3-workflow-rhythm": {
    type: "flow",
    steps: [
      { title: "Daily", desc: "Intel + monitor" },
      { title: "Weekly", desc: "Content cycle" },
      { title: "Monthly", desc: "Analytics + report" },
      { title: "Quarterly", desc: "Strategy refresh" },
      { title: "Prompt library", desc: "Compounding asset" },
    ],
  },
  "mkt-era-ch4-tool-evaluation": {
    type: "flow",
    steps: [
      { title: "Define need", desc: "Capability fit" },
      { title: "Pilot 30 days", desc: "Real workflow test" },
      { title: "Measure ROI", desc: "Time + quality" },
      { title: "Security check", desc: "Data handling" },
      { title: "Adopt or cut", desc: "Quarterly audit" },
    ],
  },
  "mkt-era-ch5-marketing-ops": {
    type: "flow",
    steps: [
      { title: "Brief", desc: "Standardised inputs" },
      { title: "Produce", desc: "AI-assisted" },
      { title: "QA approve", desc: "Error prevention" },
      { title: "Launch track", desc: "Campaign ops" },
      { title: "Measure", desc: "Performance loop" },
    ],
  },
  "mkt-era-ch6-leadership": {
    type: "nested",
    layers: [
      { title: "Strategy", desc: "Commercial outcomes", items: "Board narrative" },
      { title: "Brand", desc: "Custodianship", items: "Trust + voice" },
      { title: "People", desc: "Talent + culture", items: "AI literacy" },
      { title: "Governance", desc: "Ethical AI use", items: "Standards + oversight" },
    ],
  },
  "mkt-era-ch7-career-t-shape": {
    type: "nested",
    layers: [
      { title: "Deep specialty", desc: "One domain mastery", items: "Differentiation" },
      { title: "AI breadth", desc: "Cross-function fluency", items: "Leverage multiplier" },
      { title: "Public work", desc: "Reputation asset", items: "Career options" },
      { title: "Learning loop", desc: "Stay current", items: "Future-proof" },
    ],
  },
  "mkt-era-ch8-ethical-foundation": {
    type: "flow",
    steps: [
      { title: "Transparency", desc: "Disclosure norms" },
      { title: "Verify claims", desc: "No hallucination publish" },
      { title: "Respect privacy", desc: "Ethical personalisation" },
      { title: "Audit bias", desc: "Inclusive output" },
      { title: "Culture", desc: "Default responsibility" },
    ],
  },
};
