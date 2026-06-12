import { MKT_CALLOUT, buildChapter, buildSection, sectionWithDiagram, s, x } from "../concepts-mkt-helpers";

export const chapter01MktPersonalisationMeansInAi = buildChapter({
  slug: "mkt-personalisation-means-in-ai",
  number: 1,
  shortTitle: "What AI Personalisation Means",
  title: "What Personalisation Really Means in the AI Era",
  readingMinutes: 21,
  summary:
    "AI personalisation is not just putting a first name in an email. It is the system-level ability to adapt message, timing, channel, and offer based on evolving customer context. This chapter helps marketers distinguish meaningful personalisation from shallow tokenization.",
  keyTakeaway:
    "Real personalisation changes customer outcomes and business economics. It starts with use-case clarity, consent-safe data, and a decision framework for when to automate versus when to keep human control.",
  pmCallout: MKT_CALLOUT,
  sections: [
    buildSection({
      number: "1.1",
      title: "Segmentation vs Personalisation",
      subtitle: "Why targeting groups is not the same as adapting journeys",
      take: "Segmentation clusters customers into groups; personalisation changes the experience for an individual in context. AI helps teams move from broad targeting to individualized decisioning.",
      why: "Teams that confuse segmentation with personalisation often report activity lift but miss revenue-quality and retention gains.",
      paragraphs: [
        [
          s("Segmentation and personalisation are related, but they solve different problems. "),
          x(
            "Segmentation answers, 'which group does this customer belong to?' based on shared attributes such as lifecycle stage, industry, or prior spend.",
            "Personalisation answers, 'what should this specific customer see now?' by using current behavior, intent, and channel context.",
          ),
          s(" Segmenting is a planning tool; personalisation is an execution system."),
        ],
        [
          s("In practice, most teams start with segment-level messages and call it personalisation. "),
          x(
            "That approach improves relevance versus one-size-fits-all campaigns, but it still treats everyone in the segment similarly.",
            "AI personalisation adds moment-level decisioning: next-best offer, channel choice, send timing, and content sequencing per user.",
          ),
          s(" The difference shows up when two customers in the same segment receive different journeys because their behaviors diverge."),
        ],
        [
          s("The commercial implication is straightforward: segmentation improves efficiency, while personalisation improves efficiency and outcomes. "),
          x(
            "Segmentation helps reduce waste by narrowing audience fit, but it rarely maximizes conversion quality across the full journey.",
            "Personalisation compounds over time because each interaction becomes feedback that improves the next decision.",
          ),
          s(" The strongest programs use both: segmentation for strategic structure and AI personalisation for tactical precision."),
        ],
      ],
      examples: [
        {
          title: "Ecommerce segment-to-individual shift",
          body: "A retailer initially sent the same weekly promotion to its 'high-value repeat' segment. After introducing AI personalisation, customers in that segment received different offers based on browsing recency, price sensitivity, and category intent. Revenue per send increased while discount usage dropped.",
        },
        {
          title: "B2B demand generation refinement",
          body: "A SaaS team kept segmentation by industry but personalized CTA and case-study sequencing per account behavior. Two accounts in the same industry saw different proof points based on feature interest. Demo quality improved without increasing media spend.",
        },
        {
          title: "Subscription win-back precision",
          body: "A subscription business segmented churn-risk cohorts first, then personalized save-offers using engagement patterns and support history. This replaced blanket incentives with individualized interventions and improved retained margin.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "1.2",
      title: "Personalisation Maturity Model",
      subtitle: "How teams progress from static campaigns to adaptive systems",
      take: "Personalisation maturity grows through clear stages: static segmentation, rule-based tailoring, AI-assisted optimisation, and real-time orchestration.",
      why: "A maturity model helps leaders invest in the right capability next instead of buying advanced tooling before foundations are ready.",
      paragraphs: [
        [
          s("Most marketing teams begin at a basic stage where personalisation means campaign-level segmentation and manual variant building. "),
          x(
            "This stage is useful and often profitable, but it is limited by planning cycles and team capacity.",
            "The next stage introduces rule-based automation, where predefined logic controls triggers, timing, and offer paths.",
          ),
          s(" Rule-based maturity improves consistency, but learning remains slow because rules are manually tuned."),
        ],
        [
          s("AI-assisted maturity begins when models influence decision priority, such as send-time optimisation, recommendation ranking, and churn scoring. "),
          x(
            "At this level, marketers still define strategy and guardrails, but systems continuously adjust execution parameters based on outcomes.",
            "The highest stage is real-time orchestration where channel, message, and offer are coordinated dynamically across the journey.",
          ),
          s(" Teams do not need full real-time orchestration immediately; they need to know which stage they are in and what unlocks the next one."),
        ],
        [
          s("Leaders should evaluate maturity across five dimensions: data quality, decision latency, channel integration, experimentation discipline, and governance. "),
          x(
            "A team with strong modeling but weak governance is not fully mature, especially in regulated contexts.",
            "Likewise, a team with good governance but siloed channels will cap performance gains.",
          ),
          s(" Maturity is not a tool purchase; it is operating capability across people, process, and systems."),
        ],
      ],
      examples: [
        {
          title: "Retail maturity progression",
          body: "A retailer moved from monthly segment campaigns to rule-based browse abandonment, then added AI send-time optimisation. Over three quarters, the team advanced one maturity stage at a time and improved conversion consistency without a full platform rebuild.",
        },
        {
          title: "B2B orchestration journey",
          body: "A B2B firm started with industry segmentation, then introduced propensity scoring for nurture paths, and finally connected email plus site personalisation into one decision layer. Pipeline velocity improved as channel messages stopped conflicting.",
        },
        {
          title: "Financial services controlled advancement",
          body: "A financial brand paused at AI-assisted maturity rather than full autonomy to satisfy compliance controls. It still gained material lift by optimizing timing and content selection while keeping sensitive decisions under human review.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-pb5-ch1-personalisation-layers",
      type: "nested",
      title: "Personalisation Maturity Model",
      caption: "Progress from static segmentation to real-time orchestration through staged capability development.",
    }),
    buildSection({
      number: "1.3",
      title: "What AI Enables in Personalisation",
      subtitle: "Capabilities that are hard to run manually at scale",
      take: "AI enables speed, granularity, and coordination in personalisation decisions that manual campaign workflows cannot sustain.",
      why: "Understanding specific AI-enabled capabilities helps marketers prioritize investments with clear business impact.",
      paragraphs: [
        [
          s("AI expands personalisation from static message variation to continuous decisioning. "),
          x(
            "Models can score intent in near real time, rank next-best actions, and optimize timing based on predicted engagement windows.",
            "This removes dependence on fixed campaign calendars and allows the system to react to customer behavior as it changes.",
          ),
          s(" The core shift is from scheduled communication to adaptive interaction."),
        ],
        [
          s("AI also improves cross-channel consistency by using shared decision logic. "),
          x(
            "Instead of separate teams optimizing email, web, and paid channels independently, a common model can coordinate message sequence and suppression rules.",
            "This reduces contradictory experiences such as receiving a discount email after a full-price purchase or seeing acquisition ads as an active customer.",
          ),
          s(" Better orchestration usually delivers both performance gains and better customer experience."),
        ],
        [
          s("Finally, AI enables learning velocity through experimentation at scale. "),
          x(
            "Teams can test many micro-variants across cohorts and contexts, then promote winning logic quickly.",
            "When paired with governance, this creates a compounding performance loop rather than isolated campaign wins.",
          ),
          s(" AI value in personalisation is not just prediction accuracy; it is faster, safer, and more coordinated decision cycles."),
        ],
      ],
      examples: [
        {
          title: "Real-time onsite adaptation",
          body: "A commerce brand used AI to reorder homepage modules by live session behavior, not historical segments alone. Bounce rate dropped and product discovery improved in high-intent sessions.",
        },
        {
          title: "Cross-channel suppression control",
          body: "A lifecycle team connected email and paid retargeting through shared model logic. Users who completed key actions were automatically suppressed from redundant campaigns, improving spend efficiency.",
        },
        {
          title: "Experiment velocity increase",
          body: "A SaaS company expanded from 4 monthly nurture variants to over 40 AI-assisted micro-variants with guardrails. The team identified winning combinations faster and scaled them within a single quarter.",
        },
      ],
    }),
    buildSection({
      number: "1.4",
      title: "Data Foundation for AI Personalisation",
      subtitle: "What must be true before models can produce useful decisions",
      take: "AI personalisation quality depends on identity resolution, clean event taxonomy, timely data flow, and consent-safe activation.",
      why: "Most personalisation failures come from weak data foundations, not from poor model selection.",
      paragraphs: [
        [
          s("First-party data infrastructure is the backbone of personalisation performance. "),
          x(
            "If customer identity is fragmented across tools, models cannot connect behavior patterns across sessions and channels.",
            "If event names are inconsistent, learning systems consume noisy signals and produce unreliable recommendations.",
          ),
          s(" Reliable identity and event contracts are prerequisites, not optimizations."),
        ],
        [
          s("Data freshness must match decision speed. "),
          x(
            "A system that updates nightly cannot support intra-day personalisation decisions in fast-moving channels.",
            "Teams should map each use case to required latency and ensure ingestion pipelines can meet that operating rhythm.",
          ),
          s(" Stale data makes sophisticated models behave like blunt rules."),
        ],
        [
          s("Consent and trust are equally foundational. "),
          x(
            "Each personalisation use case should define allowed signals, retention windows, opt-out behavior, and escalation controls for sensitive categories.",
            "When trust controls are embedded in the decision system, teams can scale experimentation without repeated legal friction.",
          ),
          s(" The winning foundation balances data richness, data quality, and data responsibility."),
        ],
      ],
      examples: [
        {
          title: "Identity graph repair",
          body: "A retailer unified web, app, and CRM customer IDs before expanding AI decisioning. Personalisation accuracy improved because the system could finally link browsing, purchase, and support behavior to one profile.",
        },
        {
          title: "Event taxonomy cleanup",
          body: "A SaaS team standardized activation and feature-use events across analytics and CRM. Propensity models became more stable and email trigger quality improved within two release cycles.",
        },
        {
          title: "Consent-safe activation layer",
          body: "A financial services team embedded consent status directly into recommendation eligibility logic. This prevented restricted users from entering personalized flows and reduced compliance escalations.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "1.5",
      title: "Personalisation Across the Customer Journey",
      subtitle: "Using AI at discovery, conversion, retention, and expansion stages",
      take: "The highest-value personalisation strategy coordinates AI decisions across the full customer journey, not just one channel or one funnel stage.",
      why: "Isolated optimisation creates local lift but leaves major lifecycle value untapped.",
      paragraphs: [
        [
          s("At awareness and discovery stages, AI personalisation helps match creative, channel, and landing experience to intent and audience fit. "),
          x(
            "This improves media efficiency by reducing irrelevant impressions and accelerating first useful interactions.",
            "Early-stage signals also feed downstream models that improve mid-funnel sequencing.",
          ),
          s(" Journey coordination starts by treating top-of-funnel interactions as data and decision inputs, not isolated campaign outputs."),
        ],
        [
          s("At conversion and onboarding stages, personalisation should optimize next-best action, friction reduction, and time-to-value. "),
          x(
            "Examples include dynamic onboarding steps, contextual social proof, and trigger-based support nudges.",
            "When this layer works well, conversion quality improves and early churn declines.",
          ),
          s(" Mid-journey personalisation often creates the fastest measurable ROI."),
        ],
        [
          s("At retention and expansion stages, AI can predict churn risk, identify upsell readiness, and tailor save or growth offers. "),
          x(
            "The key is ensuring these decisions are informed by full-journey context, including support history and product usage, not just campaign interaction.",
            "Teams that orchestrate across stages avoid contradictory messaging and improve lifetime value outcomes.",
          ),
          s(" Personalisation maturity is visible when the customer experiences one coherent journey rather than disconnected channel tactics."),
        ],
      ],
      examples: [
        {
          title: "Awareness-to-conversion continuity",
          body: "A B2B company aligned ad messaging themes with personalized landing modules and follow-up email sequences. Prospects saw consistent narrative progression, increasing qualified pipeline conversion.",
        },
        {
          title: "Onboarding journey optimization",
          body: "A PLG product used AI to personalize onboarding nudges based on feature adoption milestones. Activation improved because new users saw guidance tied to their current product state.",
        },
        {
          title: "Retention and expansion orchestration",
          body: "A subscription brand combined churn scoring with upsell timing to avoid promoting expansion to at-risk users. Retention improved and upsell quality became more predictable.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-pb5-ch1-autonomy-map",
      type: "comparison",
      title: "Journey-Wide Personalisation Map",
      caption: "Coordinate AI decisions across discovery, conversion, retention, and expansion for compounding impact.",
    }),
    buildSection({
      number: "1.6",
      title: "Personalisation Maturity Assessment",
      subtitle: "How to score current capability and choose the next move",
      take: "A useful maturity assessment checks strategy, data, decisioning, measurement, and governance to identify the next highest-return improvement.",
      why: "Without a structured assessment, teams overinvest in tools and underinvest in bottlenecks that limit performance.",
      paragraphs: [
        [
          s("A practical assessment starts with clear scoring criteria for each capability dimension. "),
          x(
            "For strategy, evaluate whether personalisation objectives are linked to business outcomes beyond channel metrics.",
            "For data, evaluate identity quality, event consistency, and activation latency against decision needs.",
          ),
          s(" A maturity score should expose operational constraints, not just technology adoption."),
        ],
        [
          s("Next, assess decision execution and measurement discipline. "),
          x(
            "Can teams convert model outputs into action quickly with named owners and thresholds?",
            "Do experiments measure incremental impact and distinguish model quality from business value?",
          ),
          s(" Mature teams are not just predicting better; they are deciding and learning faster."),
        ],
        [
          s("Finally, evaluate governance and trust readiness: consent controls, risk classification, override pathways, and auditability. "),
          x(
            "This determines how far automation can safely expand and where human review must remain.",
            "The outcome of the assessment should be a 90-day capability roadmap with explicit owners and success metrics.",
          ),
          s(" The best maturity assessments are actionable documents that guide investments quarter by quarter."),
        ],
      ],
      examples: [
        {
          title: "Quarterly maturity scorecard rollout",
          body: "A mid-market SaaS team introduced a five-dimension maturity scorecard and identified data latency as the top constraint. Fixing ingestion cadence unlocked faster trigger decisions and immediate conversion lift.",
        },
        {
          title: "Enterprise capability gap diagnosis",
          body: "A global retailer discovered strong modeling capability but weak governance controls in sensitive lifecycle messaging. It paused automation expansion and implemented approval workflows before scaling.",
        },
        {
          title: "B2B roadmap prioritization",
          body: "A B2B demand team used maturity assessment results to prioritize cross-channel orchestration over additional model complexity. Pipeline quality improved because experience consistency was the real bottleneck.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What best distinguishes AI-era personalization from classic token substitution?",
      options: [
        "Using customer first name in messages",
        "Adaptive decisioning on message, timing, and channel",
        "Sending more emails per week",
        "Adding more segments manually",
      ],
      correct: 1,
      correctFeedback: "Correct. AI personalization is about adaptive decision systems, not cosmetic template tokens.",
      wrongFeedback: "Real personalization changes decisions dynamically based on context and behavior signals.",
    },
    {
      kind: "order",
      q: "Order a practical personalization maturity path.",
      prompt: "Arrange from first stage to last stage.",
      items: [
        "Fix data hygiene and event taxonomy",
        "Launch focused high-impact pilots",
        "Integrate decisioning across channels",
        "Scale continuous optimization with governance",
      ],
      correctFeedback: "Right. Strong foundations first, then pilots, integration, and scaled optimization.",
      wrongFeedback: "Personalization scale requires sequence discipline; skipping foundations creates fragile systems.",
    },
    {
      kind: "categorize",
      q: "Categorize each use case by recommended autonomy level.",
      categories: ["Mostly automated", "Human approval needed"],
      items: [
        { text: "Homepage recommendation ordering", category: 0 },
        { text: "Sensitive win-back discount exception", category: 1 },
        { text: "Email send-time optimization", category: 0 },
        { text: "Pricing and eligibility messaging in regulated context", category: 1 },
      ],
      correctFeedback: "Correct. Low-risk optimization can be automated; higher-risk decisions need stronger human control.",
      wrongFeedback: "Map autonomy by risk and consequence, not by technical feasibility alone.",
    },
    {
      q: "Which personalization strategy usually creates the strongest ROI early?",
      options: [
        "Personalize every touchpoint lightly",
        "Focus on bottleneck moments with clear business metrics",
        "Delay all pilots until data is perfect",
        "Run only brand-level creative experiments",
      ],
      correct: 1,
      correctFeedback: "Exactly. Prioritize high-friction moments where relevance directly changes conversion or retention economics.",
      wrongFeedback: "Early ROI comes from focused, high-impact use cases rather than broad shallow personalization.",
    },
  ],
});
