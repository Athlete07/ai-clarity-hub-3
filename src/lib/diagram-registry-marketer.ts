import type { DiagramDef } from "./diagram-registry";

/** Marketer track diagram definitions — keyed by chapter diagram ids. */
export const MARKETER_DIAGRAM_REGISTRY: Record<string, DiagramDef> = {
  "mkt-ch1-dl-stack": {
    type: "nested",
    layers: [
      {
        title: "Artificial Intelligence (AI)",
        desc: "Any system that automates marketing judgment",
        items: "Rules, heuristics, ML, generative tools",
      },
      {
        title: "Machine Learning (ML)",
        desc: "Learns patterns from campaign outcomes",
        items: "Bidding, scoring, churn, send-time optimization",
      },
      {
        title: "Deep Learning (DL)",
        desc: "Powers generative & multimodal martech",
        items: "Copy, images, recommendations, conversational search",
      },
    ],
  },
  "mkt-ch1-honest-spectrum": {
    type: "comparison",
    rows: [
      {
        label: "Rules-first martech",
        steps: ["Fixed if/then logic", "Deterministic segmentation", "Little model feedback"],
      },
      {
        label: "Model-native martech",
        steps: ["Adaptive ML optimization", "Generative creative systems", "Continuous outcome learning"],
      },
    ],
  },
  "mkt-ch2-cold-start-loop": {
    type: "flow",
    steps: [
      { title: "Start broad", desc: "Launch with conservative targeting and spend guardrails" },
      { title: "Capture outcomes", desc: "Log qualified events fast: clicks, leads, purchases" },
      { title: "Score confidence", desc: "Check whether volume is sufficient for automation" },
      { title: "Tighten strategy", desc: "Refine audiences, bids, and creative from early signals" },
      { title: "Increase automation", desc: "Shift control to models as performance stabilizes" },
    ],
  },
  "mkt-ch3-training-inference": {
    type: "comparison",
    cards: [
      {
        label: "Training (vendor cost)",
        title: "Building the model",
        desc: "GPU clusters, R&D — amortised into your SaaS fee or API pricing.",
      },
      {
        label: "Inference (your cost)",
        title: "Running the model",
        desc: "Per generation, per seat, per API call — scales with your usage.",
        accent: true,
      },
    ],
  },
  "mkt-ch4-data-quality-flow": {
    type: "flow",
    steps: [
      { title: "Collect signals", desc: "Unify CRM, ad-platform, product, and conversion events" },
      { title: "Validate hygiene", desc: "Fix missing IDs, duplicates, timestamp drift, and taxonomy errors" },
      { title: "Train or score", desc: "Run bidding, scoring, or recommendation models on cleaned data" },
      { title: "Audit output", desc: "Spot segment anomalies before spend or message expansion" },
      { title: "Deploy confidently", desc: "Scale campaigns with stronger efficiency and fewer false positives" },
    ],
  },
  "mkt-ch5-calibration-curve": {
    type: "flow",
    steps: [
      { title: "Predict probability", desc: "Model outputs likelihood of lead quality or conversion" },
      { title: "Observe reality", desc: "Track actual outcomes across cohorts and channels" },
      { title: "Compare fit", desc: "Measure gap between predicted and observed win rates" },
      { title: "Recalibrate bands", desc: "Adjust score thresholds and routing policies" },
      { title: "Recheck performance", desc: "Confirm confidence scores remain trustworthy over time" },
    ],
  },
  "mkt-ch6-offline-online": {
    type: "comparison",
    cards: [
      {
        label: "Offline evaluation",
        title: "Safe candidate filtering",
        desc: "Use holdout sets and historical replay to remove weak model options quickly.",
      },
      {
        label: "Online evaluation",
        title: "Live business proof",
        desc: "Validate lift with controlled experiments in real traffic and revenue conditions.",
        accent: true,
      },
    ],
  },
  "mkt-ch7-hallucination-controls": {
    type: "flow",
    steps: [
      { title: "Ground inputs", desc: "Attach approved product facts, pricing, and policy constraints" },
      { title: "Constrain generation", desc: "Use schema, forbidden-claim rules, and citation requirements" },
      { title: "Run risk checks", desc: "Flag unverifiable statements and high-liability wording" },
      { title: "Legal and brand review", desc: "Escalate sensitive claims before publication" },
      { title: "Publish and monitor", desc: "Launch with rollback path and incident ownership defined" },
    ],
  },
  "mkt-ch8-suite-vs-point": {
    type: "comparison",
    cards: [
      {
        label: "Suite platform",
        title: "Integrated control plane",
        desc: "Lower integration burden, shared data model, and unified governance workflows.",
      },
      {
        label: "Point solution",
        title: "Specialist performance edge",
        desc: "Deeper capability in a narrow domain with potential incremental lift.",
        accent: true,
      },
    ],
  },
  "mkt-pb2-ch1-operating-model": {
    type: "flow",
    steps: [
      { title: "Set campaign brief", desc: "Define audience, message hierarchy, and success metrics" },
      { title: "Generate drafts", desc: "Produce channel variants from shared strategic intent" },
      { title: "Apply quality filters", desc: "Enforce factual, tone, and compliance checks automatically" },
      { title: "Editor finalization", desc: "Humans approve high-impact copy and claims" },
      { title: "Ship and learn", desc: "Publish, measure performance, and feed improvements back" },
    ],
  },
  "mkt-pb2-ch1-roi-layer": {
    type: "comparison",
    cards: [
      {
        label: "Efficiency layer",
        title: "Time and cost productivity",
        desc: "Measure cycle-time reduction, content throughput, and team capacity release.",
      },
      {
        label: "Quality layer",
        title: "Brand-safe relevance",
        desc: "Track error rates, approval pass rates, and consistency across markets.",
      },
      {
        label: "Performance layer",
        title: "Pipeline and revenue lift",
        desc: "Tie AI content to conversion outcomes, qualified demand, and influenced revenue.",
        accent: true,
      },
    ],
  },
  "mkt-pb2-ch2-library": {
    type: "flow",
    steps: [
      { title: "Author prompt", desc: "Capture objective, constraints, and expected output format" },
      { title: "Pilot with examples", desc: "Test against real briefs and edge-case scenarios" },
      { title: "Version and tag", desc: "Store approved prompt by use case, channel, and locale" },
      { title: "Operationalize reuse", desc: "Embed in workflows, templates, and training docs" },
      { title: "Retire or refresh", desc: "Deprecate prompts that drift or underperform" },
    ],
  },
  "mkt-pb2-ch2-constraints": {
    type: "comparison",
    cards: [
      {
        label: "Open prompt",
        title: "Creative range, variable quality",
        desc: "Useful for ideation but prone to tone drift and inconsistent structure.",
      },
      {
        label: "Constrained prompt",
        title: "Reliable and governable output",
        desc: "Schema, guardrails, and examples improve repeatability at scale.",
        accent: true,
      },
    ],
  },
  "mkt-pb2-ch3-tiered-quality-gates": {
    type: "flow",
    steps: [
      { title: "Classify risk tier", desc: "Separate low-risk posts from high-risk claims and offers" },
      { title: "Run automated checks", desc: "Screen grammar, policy terms, and factual consistency" },
      { title: "Escalate critical assets", desc: "Route legal or product-sensitive content for expert review" },
      { title: "Approve by SLA", desc: "Apply faster or deeper review based on tier" },
      { title: "Log quality outcomes", desc: "Use rejection reasons to improve future prompt design" },
    ],
  },
  "mkt-pb2-ch3-quality-telemetry": {
    type: "comparison",
    cards: [
      {
        label: "Leading quality signals",
        title: "Early operational indicators",
        desc: "Approval latency, revision count, policy flags, and confidence alerts.",
        accent: true,
      },
      {
        label: "Lagging quality signals",
        title: "Downstream market impact",
        desc: "Conversion drop, unsubscribe spikes, complaint rates, and brand incidents.",
      },
    ],
  },
  "mkt-pb2-ch4-voice-prompt-architecture": {
    type: "flow",
    steps: [
      { title: "Define voice pillars", desc: "Codify tone, language bans, and claim boundaries" },
      { title: "Create reusable blocks", desc: "Build intro, proof, CTA, and disclaimer prompt modules" },
      { title: "Compose by channel", desc: "Assemble modules for email, paid social, and landing pages" },
      { title: "Validate style fit", desc: "Check reading level, tone markers, and legal wording" },
      { title: "Publish versioned voice", desc: "Ship with prompt IDs so future audits stay traceable" },
    ],
  },
  "mkt-pb2-ch4-channel-voice-matrix": {
    type: "comparison",
    cards: [
      {
        label: "Core voice",
        title: "Non-negotiable brand identity",
        desc: "Mission language, promise framing, and trust posture stay constant.",
      },
      {
        label: "Channel adaptation",
        title: "Format-specific expression",
        desc: "Adjust length, rhythm, and CTA style to each platform context.",
        accent: true,
      },
    ],
  },
  "mkt-pb2-ch5-source-hierarchy": {
    type: "tree",
    root: "Is the source asset high-signal and strategically reusable?",
    branches: [
      {
        answer: "YES",
        label: "Repurpose as cornerstone",
        action: "Turn into multi-channel variants with shared narrative scaffolding",
      },
      {
        answer: "NO",
        label: "Is it still campaign-critical right now?",
        children: [
          {
            answer: "YES",
            label: "Use tactically",
            conclusion: {
              title: "Limited one-cycle adaptation",
              action: "Create minimal variants without long-term library investment",
            },
          },
          {
            answer: "NO",
            label: "Do not scale it",
            conclusion: {
              title: "Archive or rewrite source",
              action: "Replace weak assets before they contaminate repurposing workflows",
            },
          },
        ],
      },
    ],
  },
  "mkt-pb2-ch5-automation-checkpoints": {
    type: "flow",
    steps: [
      { title: "Select source asset", desc: "Choose webinar, whitepaper, or case study with proven traction" },
      { title: "Automate transforms", desc: "Generate snippets, ad angles, nurture emails, and social cuts" },
      { title: "Insert control checks", desc: "Validate facts, brand tone, and offer alignment per channel" },
      { title: "Approve high-risk outputs", desc: "Human reviewers sign off on claims-heavy assets" },
      { title: "Publish with tracking", desc: "Launch variants and compare contribution by channel" },
    ],
  },
  "mkt-pb3-ch1-visibility-surfaces": {
    type: "comparison",
    cards: [
      {
        label: "Classic SEO",
        title: "Ranking-centric visibility",
        desc: "Performance depends on blue-link positions and page-level click-through rate.",
      },
      {
        label: "AI search visibility",
        title: "Answer-surface presence",
        desc: "Performance depends on citations, snippets, assistant retrieval, and entity trust.",
        accent: true,
      },
    ],
  },
  "mkt-pb3-ch1-adaptation-model": {
    type: "flow",
    steps: [
      { title: "Diagnose losses", desc: "Identify which intents lost clicks to AI answer surfaces" },
      { title: "Reframe content", desc: "Build answer-first modules with explicit entity context" },
      { title: "Reinforce trust", desc: "Add citations, schema, and source depth for retrieval" },
      { title: "Protect conversion", desc: "Embed stronger pathways from informational intent to action" },
      { title: "Iterate by query class", desc: "Adjust templates per intent cluster and funnel stage" },
    ],
  },
  "mkt-pb3-ch2-topic-entity-map": {
    type: "tree",
    root: "What is the pillar topic this page must own?",
    branches: [
      {
        answer: "Clear pillar defined",
        label: "Map entity neighbors",
        action: "Attach supporting entities, attributes, and user questions around the pillar",
      },
      {
        answer: "Pillar is vague",
        label: "Narrow intent first",
        children: [
          {
            answer: "Commercial intent",
            label: "Build conversion cluster",
            conclusion: {
              title: "Decision-oriented topic tree",
              action: "Prioritize comparisons, pricing context, and implementation proof",
            },
          },
          {
            answer: "Educational intent",
            label: "Build authority cluster",
            conclusion: {
              title: "Depth-oriented topic tree",
              action: "Prioritize definitions, examples, and expert evidence links",
            },
          },
        ],
      },
    ],
  },
  "mkt-pb3-ch2-structured-semantic-layer": {
    type: "flow",
    steps: [
      { title: "Model topic intent", desc: "Draft content by user question and decision context" },
      { title: "Encode entities", desc: "Mark key entities, relationships, and differentiators explicitly" },
      { title: "Add schema layer", desc: "Publish machine-readable structure for retrieval systems" },
      { title: "Validate semantic coverage", desc: "Check whether subtopics and attributes are complete" },
      { title: "Monitor retrieval impact", desc: "Track citation rate and answer inclusion changes" },
    ],
  },
  "mkt-pb3-ch3-passage-optimization": {
    type: "flow",
    steps: [
      { title: "Identify answer moments", desc: "Locate passages likely to be quoted in AI responses" },
      { title: "Rewrite for clarity", desc: "Use concise claims, explicit context, and clear qualifiers" },
      { title: "Add trust anchors", desc: "Attach source signals, numbers, and caveat framing" },
      { title: "Link to next step", desc: "Connect passages to relevant conversion paths" },
      { title: "Re-evaluate coverage", desc: "Check whether optimized passages appear in AI summaries" },
    ],
  },
  "mkt-pb3-ch3-aio-template-framework": {
    type: "comparison",
    cards: [
      {
        label: "Unstructured page",
        title: "Hard for retrieval systems",
        desc: "Mixed narrative and weak section logic reduce answer extraction quality.",
      },
      {
        label: "AIO-ready template",
        title: "Designed for extraction and trust",
        desc: "Consistent section blocks improve retrieval, citation clarity, and user transition.",
        accent: true,
      },
    ],
  },
  "mkt-pb3-ch4-workflow-integration": {
    type: "flow",
    steps: [
      { title: "Map SEO stages", desc: "Define research, drafting, optimization, and QA stages" },
      { title: "Assign tool roles", desc: "Match each stage to the best AI tool and owner" },
      { title: "Standardize handoffs", desc: "Use shared briefs, prompts, and quality checklists" },
      { title: "Gate publish readiness", desc: "Require technical SEO and factual checks before launch" },
      { title: "Track stage efficiency", desc: "Measure time saved and quality deltas by workflow step" },
    ],
  },
  "mkt-pb3-ch4-prompt-playbook-cycle": {
    type: "comparison",
    cards: [
      {
        label: "Ad hoc prompting",
        title: "Person-dependent output quality",
        desc: "Results vary by individual writing style and undocumented prompt tricks.",
      },
      {
        label: "Playbook prompting",
        title: "Team-repeatable execution",
        desc: "Versioned prompt patterns produce more consistent SEO quality and speed.",
        accent: true,
      },
    ],
  },
  "mkt-pb4-ch1-google-bidding-loop": {
    type: "flow",
    steps: [
      { title: "Feed quality signals", desc: "Provide reliable conversion and value events to the platform" },
      { title: "Stabilize objectives", desc: "Keep bidding goals consistent long enough to learn" },
      { title: "Allow learning phase", desc: "Avoid frequent structural changes during model adaptation" },
      { title: "Review efficiency", desc: "Monitor CPA, ROAS, and volume trade-offs by segment" },
      { title: "Tune strategically", desc: "Adjust targets gradually to preserve convergence momentum" },
    ],
  },
  "mkt-pb4-ch1-learning-volatility-map": {
    type: "comparison",
    cards: [
      {
        label: "Stable learning inputs",
        title: "Faster model convergence",
        desc: "Consistent conversion definitions, pacing, and audience structure reduce noise.",
        accent: true,
      },
      {
        label: "Unstable learning inputs",
        title: "Persistent performance swings",
        desc: "Frequent resets and goal changes interrupt optimization and inflate volatility.",
      },
    ],
  },
  "mkt-pb4-ch2-hook-matrix": {
    type: "comparison",
    cards: [
      {
        label: "Random variants",
        title: "Noisy creative learning",
        desc: "Superficial asset changes make it hard to isolate which message angle works.",
      },
      {
        label: "Hook matrix",
        title: "Structured angle experimentation",
        desc: "Systematic message-angle testing creates cleaner signal for optimization models.",
        accent: true,
      },
    ],
  },
  "mkt-pb4-ch2-creative-scorecard": {
    type: "flow",
    steps: [
      { title: "Capture top-funnel response", desc: "Track thumb-stop, hook retention, and click-through quality" },
      { title: "Track mid-funnel behavior", desc: "Measure landing engagement, micro-conversions, and drop-off points" },
      { title: "Tie to pipeline value", desc: "Connect creative IDs to qualified lead and revenue contribution" },
      { title: "Score by objective", desc: "Rank assets by brand, acquisition, or retargeting goals" },
      { title: "Refresh creative backlog", desc: "Retire weak themes and scale proven angles" },
    ],
  },
  "mkt-pb4-ch3-attribution-layers": {
    type: "nested",
    layers: [
      {
        title: "Platform attribution",
        desc: "In-channel optimization evidence",
        items: "Ad-platform conversion paths, modeled assists, real-time bidding signals",
      },
      {
        title: "Analytics attribution",
        desc: "Cross-channel behavioral perspective",
        items: "Session paths, source interaction, and funnel progression diagnostics",
      },
      {
        title: "CRM outcome layer",
        desc: "Revenue-truth validation",
        items: "Pipeline creation, win rates, and margin outcomes by source",
      },
    ],
  },
  "mkt-pb4-ch3-causality-flow": {
    type: "flow",
    steps: [
      { title: "Read attribution trend", desc: "Use directional data for rapid media optimization" },
      { title: "Form causality question", desc: "Define which budget shift requires stronger evidence" },
      { title: "Design incrementality test", desc: "Run geo, audience, or holdout experiments" },
      { title: "Compare observed lift", desc: "Validate incremental impact against modeled attribution" },
      { title: "Reallocate budget", desc: "Scale channels with proven causal contribution" },
    ],
  },
  "mkt-pb5-ch1-personalisation-layers": {
    type: "nested",
    layers: [
      {
        title: "Segment personalization",
        desc: "Rules-based targeting by cohort",
        items: "Lifecycle stage, firmographics, and broad behavioral buckets",
      },
      {
        title: "Context personalization",
        desc: "Session-aware messaging choices",
        items: "Channel source, page intent, and recency-informed content blocks",
      },
      {
        title: "Real-time orchestration",
        desc: "Adaptive next-action decisions",
        items: "Dynamic offer, timing, and channel selection based on live signals",
      },
    ],
  },
  "mkt-pb5-ch1-autonomy-map": {
    type: "comparison",
    cards: [
      {
        label: "Discovery and consideration",
        title: "Context-aware content selection",
        desc: "Personalize education assets and social proof by intent cluster.",
      },
      {
        label: "Conversion and onboarding",
        title: "Decision-friction reduction",
        desc: "Adjust offers, sequencing, and onboarding nudges by propensity signals.",
      },
      {
        label: "Retention and expansion",
        title: "Value-based journey orchestration",
        desc: "Prioritize engagement and upsell actions by projected lifetime value.",
        accent: true,
      },
    ],
  },
  "mkt-pb5-ch2-rec-engine-traps": {
    type: "comparison",
    cards: [
      {
        label: "High-priority recommendation surfaces",
        title: "Direct business leverage",
        desc: "Product detail, cart, and lifecycle journeys where ranking quality changes revenue.",
        accent: true,
      },
      {
        label: "Low-priority recommendation surfaces",
        title: "Limited incremental value",
        desc: "Low-intent or low-traffic surfaces where complex models add little lift.",
      },
    ],
  },
  "mkt-pb5-ch2-measurement-stack": {
    type: "flow",
    steps: [
      { title: "Score relevance", desc: "Rank items by predicted user utility and business constraints" },
      { title: "Inject diversity controls", desc: "Limit over-concentration in similar items or categories" },
      { title: "Serve recommendation set", desc: "Deliver balanced slate across web, app, and email touchpoints" },
      { title: "Measure trade-off", desc: "Track relevance, novelty, and conversion simultaneously" },
      { title: "Tune re-ranking policy", desc: "Adjust diversity weights to maintain revenue and user trust" },
    ],
  },
  "mkt-pb5-ch3-email-content-loop": {
    type: "flow",
    steps: [
      { title: "Detect trigger event", desc: "Identify browse, cart, lifecycle, or inactivity behavior signals" },
      { title: "Prioritize journey state", desc: "Select the most relevant trigger when multiple events fire" },
      { title: "Generate email variant", desc: "Compose personalized blocks for subject, body, and offer" },
      { title: "Send with controls", desc: "Respect frequency caps, suppression rules, and consent settings" },
      { title: "Refine trigger logic", desc: "Update sequencing from open, click, and conversion outcomes" },
    ],
  },
  "mkt-pb5-ch3-journey-decision-map": {
    type: "comparison",
    cards: [
      {
        label: "Static template",
        title: "Single message for all recipients",
        desc: "Easy operations but weak relevance across different intent and lifecycle states.",
      },
      {
        label: "Dynamic content",
        title: "Block-level personalization",
        desc: "Adaptive modules improve relevance while retaining template governance.",
        accent: true,
      },
    ],
  },
  "mkt-1-1-descriptive-vs-predictive": {
    type: "comparison",
    rows: [
      {
        label: "Descriptive baseline",
        steps: ["What happened?", "KPI reporting", "Retrospective analysis"],
      },
      {
        label: "Diagnostic layer",
        steps: ["Why did it happen?", "Driver decomposition", "Segment root-cause checks"],
      },
      {
        label: "Predictive layer",
        steps: ["What will happen next?", "Probability forecasts", "Risk-aware planning"],
      },
      {
        label: "Prescriptive layer",
        steps: ["What should we do now?", "Next-best action", "Automated decision policy"],
      },
    ],
  },
  "mkt-1-4-decision-ops": {
    type: "flow",
    steps: [
      { title: "Forecast outcome", desc: "Estimate response likelihood and expected economic value" },
      { title: "Apply thresholds", desc: "Convert probability into action bands and ownership rules" },
      { title: "Execute treatment", desc: "Launch offer, routing, or suppression based on policy" },
      { title: "Measure realized impact", desc: "Compare projected value with observed business results" },
      { title: "Retrain decision policy", desc: "Update thresholds when behavior or channel mix shifts" },
    ],
  },
  "mkt-2-2-clv-signal-map": {
    type: "flow",
    steps: [
      { title: "Resolve customer identity", desc: "Connect cross-channel events to persistent profiles" },
      { title: "Assemble value signals", desc: "Combine transactions, retention behavior, and margin context" },
      { title: "Score lifetime value", desc: "Predict near-term and long-term value potential" },
      { title: "Segment by value band", desc: "Group customers into strategic CLV cohorts" },
      { title: "Activate investment policy", desc: "Align acquisition, retention, and upsell spend to value" },
    ],
  },
  "mkt-2-4-clv-decision-loop": {
    type: "comparison",
    cards: [
      {
        label: "High-CLV cohort policy",
        title: "Protect and expand value",
        desc: "Prioritize premium retention journeys, service quality, and expansion offers.",
        accent: true,
      },
      {
        label: "Mid-CLV cohort policy",
        title: "Grow efficiently",
        desc: "Use selective incentives and education to move customers up-value.",
      },
      {
        label: "Low-CLV cohort policy",
        title: "Control spend exposure",
        desc: "Apply lighter-touch automation and strict profitability guardrails.",
      },
    ],
  },
  "mkt-3-2-intel-pipeline": {
    type: "flow",
    steps: [
      { title: "Ingest market signals", desc: "Capture mentions, ad changes, pricing moves, and content shifts" },
      { title: "Normalize by theme", desc: "Tag signals by competitor, topic, and funnel impact" },
      { title: "Compare share of voice", desc: "Benchmark against baseline by channel and category" },
      { title: "Trigger response play", desc: "Route high-priority threats to predefined counter-strategies" },
      { title: "Measure response effect", desc: "Track regained visibility and downstream demand impact" },
    ],
  },
  "mkt-3-4-response-matrix": {
    type: "comparison",
    cards: [
      {
        label: "Low urgency signal",
        title: "Observe and document",
        desc: "Track movement and queue for regular planning cycles.",
      },
      {
        label: "Medium urgency signal",
        title: "Local tactical response",
        desc: "Activate channel-level adjustments within existing campaign boundaries.",
      },
      {
        label: "High urgency signal",
        title: "Cross-functional escalation",
        desc: "Launch coordinated response across product, comms, and paid programs.",
        accent: true,
      },
    ],
  },
  "mkt-7-1-adaptive-funnel": {
    type: "flow",
    steps: [
      { title: "Capture full-funnel events", desc: "Track awareness, engagement, pipeline, and retention outcomes" },
      { title: "Update funnel diagnostics", desc: "Find the stage causing the largest growth constraint" },
      { title: "Recommend interventions", desc: "Prioritize audience, creative, or channel changes by expected lift" },
      { title: "Activate changes", desc: "Deploy adjustments at the constrained funnel stage" },
      { title: "Recompute priorities", desc: "Shift focus as downstream outcomes alter upstream tactics" },
    ],
  },
  "mkt-7-3-next-best-action": {
    type: "comparison",
    cards: [
      {
        label: "Static journey",
        title: "Predefined sequence for everyone",
        desc: "Simple to operate but weak fit for changing user intent.",
      },
      {
        label: "Next-best action",
        title: "Adaptive action selection",
        desc: "Chooses the highest-value move per customer context and propensity.",
        accent: true,
      },
    ],
  },
  "mkt-7-2-feature-stack": {
    type: "nested",
    layers: [
      {
        title: "Fit features",
        desc: "Account and persona suitability signals",
        items: "Firmographics, role relevance, company maturity, product match",
      },
      {
        title: "Intent features",
        desc: "Observed buying interest momentum",
        items: "Content depth, return frequency, demo behavior, high-value interactions",
      },
      {
        title: "Context and recency",
        desc: "Timing and channel nuance",
        items: "Latest engagement timestamps, source quality, and journey state",
      },
    ],
  },
  "mkt-7-2-score-action": {
    type: "flow",
    steps: [
      { title: "Score incoming leads", desc: "Assign fit-intent score and confidence band in near real time" },
      { title: "Map score to SLA", desc: "Define response speed and owner by score threshold" },
      { title: "Route to destination", desc: "Send high scores to sales and lower scores to nurture tracks" },
      { title: "Capture disposition", desc: "Record acceptance, rejection, and outcome quality feedback" },
      { title: "Recalibrate policy", desc: "Adjust thresholds when precision or conversion drifts" },
    ],
  },
  "mkt-7-3-hypothesis-pipeline": {
    type: "flow",
    steps: [
      { title: "Detect friction signal", desc: "Spot drop-offs, rage clicks, or conversion bottlenecks" },
      { title: "Generate hypotheses", desc: "Use AI to propose UX, copy, and offer interventions" },
      { title: "Prioritize by impact", desc: "Rank hypotheses by expected lift and implementation effort" },
      { title: "Run controlled tests", desc: "Execute experiments with guardrails and sample-quality checks" },
      { title: "Promote winning changes", desc: "Scale validated ideas and feed results into future ideation" },
    ],
  },
  "mkt-7-3-experiment-loop": {
    type: "comparison",
    cards: [
      {
        label: "Speed",
        title: "Rapid test throughput",
        desc: "AI enables more hypotheses and faster variant generation.",
      },
      {
        label: "Validity",
        title: "Decision-grade evidence",
        desc: "Statistical discipline and guardrails prevent false positives at scale.",
        accent: true,
      },
    ],
  },
  "mkt-8-1-classification-grid": {
    type: "comparison",
    cards: [
      {
        label: "Assistive AI tools",
        title: "Human-led execution support",
        desc: "Improve speed for drafting, analysis, and workflow coordination tasks.",
      },
      {
        label: "Optimization AI tools",
        title: "Model-led performance tuning",
        desc: "Continuously refine bidding, targeting, and recommendation decisions.",
        accent: true,
      },
      {
        label: "Autonomous AI tools",
        title: "Policy-governed automation",
        desc: "Execute bounded decisions with explicit oversight and rollback controls.",
      },
    ],
  },
  "mkt-8-1-eval-checklist": {
    type: "flow",
    steps: [
      { title: "Verify evidence", desc: "Require benchmark proof on representative use cases" },
      { title: "Check strategic fit", desc: "Confirm alignment to operating model and team skills" },
      { title: "Assess integration load", desc: "Score identity, data sync, and workflow compatibility" },
      { title: "Review governance and risk", desc: "Evaluate controls, auditability, and policy coverage" },
      { title: "Model total cost", desc: "Estimate run-rate economics before procurement decision" },
    ],
  },
  "mkt-8-2-coherence-principles": {
    type: "comparison",
    cards: [
      {
        label: "Coherent stack",
        title: "Clear ownership and role boundaries",
        desc: "Each tool has a defined job, shared data contracts, and measurable accountability.",
        accent: true,
      },
      {
        label: "Fragmented stack",
        title: "Overlapping tools and blind spots",
        desc: "Duplicate capabilities and weak integration create operational drag and risk.",
      },
    ],
  },
  "mkt-8-2-data-contract-loop": {
    type: "flow",
    steps: [
      { title: "Define contract", desc: "Set canonical fields, identity rules, and acceptable value ranges" },
      { title: "Validate continuously", desc: "Run automated checks on schema, freshness, and key joins" },
      { title: "Monitor drift", desc: "Alert on volume anomalies, null spikes, and identity mismatch" },
      { title: "Remediate quickly", desc: "Fix upstream pipelines and backfill corrupted records" },
      { title: "Re-certify reliability", desc: "Approve downstream activation once data quality recovers" },
    ],
  },
  "mkt-8-2-activation-priority": {
    type: "nested",
    layers: [
      {
        title: "Audience priority layer",
        desc: "Decide who gets addressed first",
        items: "Value-based segments, intent urgency, and lifecycle criticality",
      },
      {
        title: "Channel priority layer",
        desc: "Choose where action should occur",
        items: "Owned channels first, then paid amplification by marginal return",
      },
      {
        title: "Action priority layer",
        desc: "Sequence treatments for coherence",
        items: "Resolve conflicts so one customer receives one best next move",
      },
    ],
  },
};
