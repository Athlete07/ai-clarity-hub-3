import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter01MktAiShiftPaidMedia = buildChapter({
  slug: "mkt-ai-shift-paid-media",
  number: 1,
  shortTitle: "The AI Shift in Paid Media",
  title: "The AI Shift in Paid Media",
  readingMinutes: 24,
  summary:
    "Paid media has moved from manual bid sheets and audience spreadsheets to algorithmic delivery where creative, signals, and measurement quality determine outcomes. Google Smart Bidding, Meta Advantage+, LinkedIn predictive audiences, and DSP goal-based buying automate decisions marketers once made hourly. This chapter maps the automation wave, creative-as-targeting, signal dependency, black-box opacity, first-party data, measurement crisis, and platform differences — so you lead strategy while machines execute.",
  keyTakeaway:
    "AI in paid media does not remove the marketer — it relocates leverage to creative strategy, first-party signal quality, measurement design, and governance. Win by feeding algorithms better inputs and holding platforms accountable, not by pretending manual control still exists at scale.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "1.1",
      title: "The Automation Wave",
      subtitle: "How Smart Bidding, Advantage+, and DSP AI replaced manual bid and audience management at scale",
      take: "Platform automation now handles bid adjustments, budget pacing, placement selection, and audience expansion in milliseconds — tasks that took teams of media buyers days. Google's Smart Bidding, Meta's Advantage+ campaigns, LinkedIn's predictive audiences, and DSP goal-based optimisation are default, not experimental. Marketers who resist automation lose auction efficiency; those who adopt without strategy lose accountability.",
      why: "Understanding the automation wave prevents two costly mistakes: nostalgia for manual control that cannot compete at auction speed, and blind trust in black-box defaults without signal hygiene or creative discipline.",
      paragraphs: [
        [
          s("Audit which decisions your platforms still let you make — and which they already made for you. "),
          x(
            "Export campaign settings in Google Ads, Meta Ads Manager, and your primary DSP. Flag campaigns on automated bidding, broad targeting, or Advantage+ delivery. List human-owned levers: budgets, creative, conversion definitions, exclusions, and brand safety lists.",
            "Most accounts in 2026 run 70–90% of spend through automated bidding and broad or Advantage audiences. Your job shifted from turning dials to setting constraints and inputs.",
          ),
          s(" Document an automation map before the next budget cycle — leadership should know what AI controls versus what your team owns."),
        ],
        [
          s("Automation rewards volume and signal density — small accounts need different rules than enterprise programmes. "),
          x(
            "Smart Bidding needs roughly 30 conversions per month per campaign to stabilise; Advantage+ creative needs multiple assets to test; DSP algorithms need conversion pixels firing consistently.",
            "Under-signalled accounts should use manual or enhanced CPC longer, tighter geo targeting, and consolidated campaign structures — not copy enterprise playbooks.",
          ),
          s(" Set minimum conversion thresholds in your media playbook before enabling full automation."),
        ],
        [
          s("Change management matters as much as platform settings. "),
          x(
            "Train media buyers on search term reviews, creative iteration cadence, and offline conversion imports — not bid modifier spreadsheets.",
            "Agencies still billing hourly on manual bid tweaks deliver theatre, not value. Reframe retainers around strategy, creative, and measurement.",
          ),
          s(" Run a skills audit: can your team explain what the algorithm optimises for on each major platform?"),
        ],
      ],
      examples: [
        {
          title: "Google Ads migration — B2B SaaS consolidation",
          body: "A project management SaaS moved 85% of search spend from manual CPC to Target CPA across twelve campaigns consolidated to four. CPAs dropped 22% in six weeks once offline qualified-lead imports stabilised. Media buyers redeployed time to RSA asset testing and search term governance — higher leverage than bid tweaks.",
        },
        {
          title: "Meta Advantage+ Shopping — DTC scale",
          body: "A skincare DTC brand shifted prospecting from twenty manual ad sets to two Advantage+ Shopping campaigns with broad geo and twenty creative variants. ROAS held within 5% of prior manual structure while buyer hours fell 60%. Automation worked because creative volume and purchase signal were already strong.",
        },
        {
          title: "The Trade Desk Koa — programmatic efficiency",
          body: "An automotive brand enabled goal-based bidding in The Trade Desk with first-party CRM segments and view-through conversion windows aligned to sales cycle. CPA improved 18% versus rule-based bidding. DSP automation required clean post-click attribution — not more bid rules.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-pm-ch1-paid-media-shift",
      type: "comparison",
      title: "Paid Media Shift",
      caption:
        "Manual era: bid management, audience lists, keyword spreadsheets. AI-automated era: creative strategy, signal quality, measurement and governance.",
    }),
    buildSection({
      number: "1.2",
      title: "Creative as Targeting",
      subtitle: "Why ad creative now functions as audience signal — especially on Meta, TikTok, and Performance Max",
      take: "On algorithmic platforms, creative is not just messaging — it is targeting input. Meta's Andromeda delivery, TikTok's creative-led matching, and Google Performance Max asset groups infer who should see an ad from creative hooks, formats, and engagement patterns. Weak creative cannot be rescued by audience narrowing; strong creative finds buyers platforms no longer let you select manually.",
      why: "Teams still briefing media before creative — or running stale assets on broad delivery — waste budget. Creative-as-targeting inverts the workflow: concept and variant volume come first; audience boxes are secondary.",
      paragraphs: [
        [
          s("Build creative briefs around persona pain and proof — not audience checkbox lists. "),
          x(
            "Each variant should signal a distinct buyer: CFO cost angle, ops manager workflow angle, IT security angle. Platforms match creative to users who engage with similar content organically.",
            "On Meta Advantage+ and PMax, three strong angles outperform twelve ad sets with one generic banner.",
          ),
          s(" Require three message angles minimum per campaign before launch — no single-asset broad delivery."),
        ],
        [
          s("Format diversity feeds the algorithm different engagement signals. "),
          x(
            "Mix static, short video, UGC-style, carousel, and testimonial formats. TikTok and Reels reward native vertical video; LinkedIn still converts static thought-leadership for ABM.",
            "AI tools accelerate variant production — but brand voice review stays human.",
          ),
          s(" Track creative-level CPA in platform breakdowns weekly — kill losers fast on broad delivery."),
        ],
        [
          s("Creative testing cadence replaces audience split tests. "),
          x(
            "Old model: same ad, five audiences. New model: five ads, one broad or Advantage+ audience. Read results in Ads Manager creative reporting or Google asset group performance.",
            "Document winning hooks in a creative playbook — algorithms fatigue faster than humans refresh.",
          ),
          s(" Pair creative sprints with media reviews every two weeks, not quarterly brand cycles."),
        ],
      ],
      examples: [
        {
          title: "Meta creative-led prospecting — fintech",
          body: "A corporate card startup ran Advantage+ with broad targeting and twelve UGC-style videos featuring different spend pain points. Best creative acquired customers at 40% lower CPA than their prior interest-targeted static campaign. Audience was the creative; interest stacks were redundant.",
        },
        {
          title: "PMax asset groups — B2B lead gen",
          body: "An HR software vendor built three PMax asset groups aligned to payroll, benefits, and compliance messaging with distinct headlines and video snippets. Lead quality improved because each asset group attracted a different query intent cluster — creative steered matching.",
        },
        {
          title: "TikTok Spark Ads — consumer app",
          body: "A fitness app promoted creator Spark Ads instead of polished studio assets. Install CPA dropped 35% as TikTok matched authentic creative to lookalike engagers. Creative-as-targeting required relinquishing brand-perfect-only standards.",
        },
      ],
    }),
    buildSection({
      number: "1.3",
      title: "Signal Dependency",
      subtitle: "What algorithms need to perform — conversion events, value rules, CRM lists, and offline imports",
      take: "Automated paid media is only as smart as the signals you feed it. Conversion pixel quality, event deduplication, value-based bidding inputs, Enhanced Conversions, Meta CAPI, LinkedIn Insight Tag accuracy, and CRM audience uploads determine whether Smart Bidding and Advantage+ find profitable users or optimise toward junk leads. Signal dependency is the new technical SEO of paid media.",
      why: "Marketers blame 'the algorithm' when CPAs spike — but root cause is usually mislabelled conversions, double-counted events, or prospecting optimised to form fills instead of pipeline. Fix signals before restructuring campaigns.",
      paragraphs: [
        [
          s("Define one primary conversion per funnel stage — and demote everything else to secondary or observation. "),
          x(
            "Google Ads: qualified lead or opportunity, not every form start. Meta: purchase or complete registration, not page view. Misaligned primary events train algorithms toward volume, not value.",
            "Use conversion value rules or offline import to weight enterprise deals higher than SMB trials.",
          ),
          s(" Audit conversion actions quarterly with analytics and sales ops — not media alone."),
        ],
        [
          s("Server-side tracking bridges the attribution gap. "),
          x(
            "Implement Meta Conversions API and Google Enhanced Conversions for Leads alongside pixels. Dedupe events in GTM server containers or tools like Elevar, Segment, or native CRM integrations.",
            "Signal loss from iOS ATT and cookie deprecation makes CAPI and Enhanced Conversions baseline hygiene, not advanced tactics.",
          ),
          s(" Target 90%+ event match rate in Meta Events Manager before scaling Advantage+ spend."),
        ],
        [
          s("CRM audiences are bidding fuel, not just retargeting pools. "),
          x(
            "Upload closed-won customer lists, pipeline stages, and churned users for exclusion. LinkedIn Matched Audiences, Google Customer Match, and Meta Custom Audiences improve lookalike seed quality.",
            "Refresh lists weekly — stale CRM uploads degrade model quality.",
          ),
          s(" Document signal ownership: who maintains pixels, CAPI, offline imports, and list hygiene?"),
        ],
      ],
      examples: [
        {
          title: "Offline conversion import — enterprise SaaS",
          body: "A data platform imported Salesforce qualified opportunities into Google Ads with dynamic values by deal size. Target ROAS campaigns stopped chasing demo requests from students and SMBs. CPA per qualified opp fell 31% without changing creative.",
        },
        {
          title: "Meta CAPI recovery — e-commerce",
          body: "A fashion retailer lost 40% of pixel events post-iOS updates. Elevar CAPI implementation restored match rates to 88%. Advantage+ Shopping ROAS recovered within three weeks — same creative, better signal.",
        },
        {
          title: "Value rules — marketplace lead quality",
          body: "A B2B marketplace assigned higher conversion values to leads from enterprise domains via Google value rules. Smart Bidding shifted impression share toward Fortune 500–adjacent queries. Signal design beat keyword expansion.",
        },
      ],
    }),
    buildSection({
      number: "1.4",
      title: "The Black Box Problem",
      subtitle: "Opacity in PMax, Advantage+, and DSP AI — and how marketers retain control without manual bids",
      take: "Automated campaigns hide placement, query, and audience detail behind aggregated reporting. Performance Max shows limited search term insight; Meta Advantage+ collapses breakdowns; DSPs bundle inventory across exchanges. The black box is intentional — platforms optimise holistically. Marketers respond with guardrails, supplemental manual campaigns, and independent measurement — not by demanding full transparency that no longer exists.",
      why: "Fighting the black box with over-segmentation restores visibility but often destroys auction learning. Smart governance accepts opacity in exchange for scale while auditing outcomes rigorously.",
      paragraphs: [
        [
          s("Use exclusion and brand controls as your steering wheel. "),
          x(
            "PMax: account-level placement exclusions, brand exclusions, search term insights weekly. Meta: block lists, geographic caps, existing customer budget caps in Advantage+. DSP: domain and app exclusion lists, viewability thresholds.",
            "You cannot see every auction — but you can define where ads must not appear.",
          ),
          s(" Review placement and partner reports monthly — add exclusions before scaling spend."),
        ],
        [
          s("Run holdout experiments to validate incrementality, not just platform ROAS. "),
          x(
            "Geo holdouts, conversion lift studies in Meta, and Google conversion experiments test whether automated campaigns drive incremental revenue.",
            "Platform-reported ROAS often overstates impact when branded search and organic overlap are captured as paid conversions.",
          ),
          s(" Budget 5–10% of media for incrementality tests annually — black-box trust requires proof."),
        ],
        [
          s("Maintain manual or standard campaigns for visibility on critical intents. "),
          x(
            "Many B2B teams run branded search and high-intent non-brand in standard Search while PMax handles discovery. Meta retargeting sometimes stays manual while prospecting goes Advantage+.",
            "Hybrid structures balance learning and transparency — not every dollar belongs in the blackest box.",
          ),
          s(" Document which campaigns exist for control versus scale — avoid duplicate bidding on same intent."),
        ],
      ],
      examples: [
        {
          title: "PMax search term audit — legal tech",
          body: "A legal tech company found PMax spending on irrelevant 'free template' queries via weekly search term insights. Added negative keywords at account level and shifted high-intent non-brand to standard Search. Blended CPA improved 19% while keeping PMax for discovery.",
        },
        {
          title: "Meta conversion lift — retail",
          body: "A home goods retailer ran a Meta conversion lift study on Advantage+ prospecting. Incremental ROAS was 22% lower than Ads Manager reported. They cut prospecting budget 15% and reallocated to retargeting with confirmed lift — black-box reporting alone would have overspent.",
        },
        {
          title: "DSP placement report — financial services",
          body: "A bank's programmatic buy showed 8% of impressions on MFA sites despite brand safety settings. Domain exclusion list updated from quarterly placement report. Brand safety guardrails matter more when bidding is fully automated.",
        },
      ],
    }),
    buildSection({
      number: "1.5",
      title: "First-Party Data in Paid Media",
      subtitle: "Customer Match, CRM audiences, and consent-driven targeting as cookies fade",
      take: "First-party data — emails, account IDs, purchase history, product usage — powers Customer Match, Meta Custom Audiences, LinkedIn Matched Audiences, and DSP onboarded segments. Consent and data clean rooms determine legal reach. Marketers who built email lists only for newsletters now treat CRM as media infrastructure; those relying on third-party cookie audiences face shrinking reach and rising CPMs.",
      why: "Paid media performance increasingly correlates with first-party data maturity. Media excellence without CRM integration is a temporary advantage.",
      paragraphs: [
        [
          s("Segment CRM data by value, lifecycle, and product fit before uploading. "),
          x(
            "Seed lookalikes from closed-won customers, not all leads. Exclude churned and active subscribers from prospecting. Upload LTV tiers for value-based bidding where supported.",
            "Generic 'all contacts' uploads dilute model quality on every platform.",
          ),
          s(" Sync CRM segments automatically via HubSpot, Salesforce, or CDP — manual CSV uploads decay."),
        ],
        [
          s("Consent gates who is addressable in paid channels. "),
          x(
            "GDPR, CCPA, and platform policies require opt-in for marketing in many jurisdictions. Work with legal on Customer Match and email list eligibility.",
            "Smaller but consented audiences outperform larger non-compliant lists that risk account flags.",
          ),
          s(" Tag consent status in CRM — media audiences should filter marketing-eligible only."),
        ],
        [
          s("Combine first-party with contextual and broad for prospecting gaps. "),
          x(
            "When lookalike reach saturates, creative-led broad and contextual keyword bundles in DSPs fill prospecting without cookies.",
            "First-party powers retargeting and seeding; it rarely replaces all top-of-funnel alone.",
          ),
          s(" Model addressable reach quarterly — plan budget mix as match rates change."),
        ],
      ],
      examples: [
        {
          title: "Customer Match LTV tiers — subscription box",
          body: "A meal-kit brand uploaded high-LTV subscriber emails for Google Similar Audiences seeding before similar audience deprecation, then shifted to optimized targeting with that seed. New subscriber quality rose — first-party seed beat interest targeting on retention at 90 days.",
        },
        {
          title: "HubSpot → LinkedIn — ABM pipeline",
          body: "An ERP vendor synced HubSpot target accounts to LinkedIn Company Matched Audiences for ABM campaigns. Opportunity creation from named accounts rose 26% year-over-year. First-party account lists beat third-party intent data on win rate.",
        },
        {
          title: "CDP audience orchestration — retail media",
          body: "A retailer connected Segment CDP to Meta and their retail media network. Cart abandoners and loyalty members received coordinated offers across onsite and paid social. First-party unified measurement showed paid social assisted 34% of loyalty signups.",
        },
      ],
    }),
    buildSection({
      number: "1.6",
      title: "The Measurement Crisis",
      subtitle: "Attribution gaps, modeled conversions, and why platform ROAS lies by omission",
      take: "Cookies break, view-through windows inflate credit, platforms model conversions you cannot verify, and multi-touch journeys span search, social, CTV, and sales calls. The measurement crisis means no single dashboard tells truth — marketers must triangulate platform data, analytics, CRM, and incrementality tests. Reporting platform ROAS to the board without caveats is a career risk.",
      why: "Under-measurement leads to cutting working channels; over-trusting platform metrics leads to overspending on credited-but-not-incremental conversions. Honest measurement design is a competitive advantage.",
      paragraphs: [
        [
          s("Align conversion windows to your actual sales cycle. "),
          x(
            "Default 7-day click / 1-day view Meta windows undercount B2B with 90-day cycles; 28-day click may overcount impulse DTC. Google Ads attribution models and lookback settings should match finance's definition of a qualified lead.",
            "Mismatch between ad platform and CRM attribution creates eternal channel wars.",
          ),
          s(" Document official attribution policy — channel leads report against it, not against native platform defaults."),
        ],
        [
          s("Triangulate with GA4, CRM, and media mix modeling. "),
          x(
            "GA4 data-driven attribution, HubSpot multi-touch, and periodic MMM from vendors like Ruler, Northbeam, or Recast provide cross-channel view.",
            "No tool is perfect — directionally consistent trends matter more than last-click precision.",
          ),
          s(" Present leadership a measurement stack diagram — what each layer proves and cannot prove."),
        ],
        [
          s("Label platform metrics as 'platform-reported' in every dashboard. "),
          x(
            "Meta ROAS, Google conv. value/cost, and DSP CPA are optimisation signals — not finance-grade revenue unless reconciled to ERP.",
            "Monthly reconciliation catches pixel double-fires and refund gaps before budgets scale wrong.",
          ),
          s(" Finance sign-off on conversion definitions annually — media and sales ops in the same room."),
        ],
      ],
      examples: [
        {
          title: "MMM reveal — DTC overspend on Meta",
          body: "A supplements brand trusted Meta ROAS of 4.2x. Annual MMM showed true incremental ROAS near 2.8x after organic and email overlap. They rebalanced 20% budget to YouTube and search — total revenue rose despite lower platform-reported blended ROAS.",
        },
        {
          title: "B2B CRM reconciliation — Google vs Salesforce",
          body: "A cybersecurity vendor compared Google Ads conversions to Salesforce opportunities monthly. Thirty percent of 'conversions' were existing customers and duplicates. Enhanced Conversions for Leads and primary event cleanup fixed training data — CPAs fell 24%.",
        },
        {
          title: "View-through policy — CPG clarity",
          body: "A CPG marketer disabled view-through for display prospecting after tests showed near-zero incremental lift. Reported CPA looked worse; finance-approved incrementality improved. Measurement honesty changed decisions, not just reporting.",
        },
      ],
    }),
    buildSection({
      number: "1.7",
      title: "Platform AI Comparison",
      subtitle: "How Google, Meta, LinkedIn, and DSP automation differ — and when to use each",
      take: "Not all platform AI works the same way. Google Smart Bidding optimises toward search and shopping intent signals; Meta Advantage+ optimises social engagement and conversion patterns; LinkedIn optimises professional graph and firmographic fit; DSPs optimise toward bid requests across open web inventory. Budget allocation should follow signal strength and creative fit per platform — not mirror budgets across channels.",
      why: "Copy-paste media strategy across Google, Meta, and LinkedIn wastes spend. Platform-native AI rewards platform-native inputs.",
      paragraphs: [
        [
          s("Google: intent-rich, signal-hungry, PMax-heavy. "),
          x(
            "Best when search volume exists and conversion tracking is clean. Smart Bidding and PMax dominate; success needs RSAs, asset groups, negative keywords, and offline imports.",
            "Weak fit for categories with no search demand — do not force search spend.",
          ),
          s(" Score Google readiness: search volume + tracking maturity + landing page speed."),
        ],
        [
          s("Meta: creative-led, broad delivery, CAPI-dependent. "),
          x(
            "Best for visual products, impulse categories, and creative testing velocity. Advantage+ Shopping and App campaigns lead; prospecting needs video and UGC volume.",
            "B2B with long cycles can work — but needs lead quality feedback loops, not just form volume.",
          ),
          s(" Score Meta readiness: creative pipeline + CAPI match rate + catalog or event depth."),
        ],
        [
          s("LinkedIn and DSPs: ABM, brand, and programmatic scale. "),
          x(
            "LinkedIn AI features — predictive audiences, thought-leadership ad formats — suit high-ACV B2B with account lists. DSPs with goal-based bidding suit retargeting, CTV extension, and contextual prospecting.",
            "Compare CPM efficiency against pipeline impact — LinkedIn wins on deal size, not CPL alone.",
          ),
          s(" Build a platform scorecard: signal, creative, audience, measurement — rate each channel quarterly."),
        ],
      ],
      examples: [
        {
          title: "Channel scorecard — martech reallocation",
          body: "A martech company scored Google 9/10 on signals, Meta 6/10, LinkedIn 8/10 for enterprise SKU. They shifted 15% budget from Meta to LinkedIn ABM and Google non-brand. Pipeline rose; Meta had been optimising to low-quality trials.",
        },
        {
          title: "LinkedIn predictive audiences — consulting firm",
          body: "A consulting firm used LinkedIn predictive audiences seeded from CRM wins plus thought-leadership video ads. Cost per RFP request beat manual job-title targeting by 28%. Platform AI worked because seed data and creative matched LinkedIn's graph strengths.",
        },
        {
          title: "DV360 + YouTube — brand plus performance",
          body: "A consumer electronics brand combined YouTube demand gen with DV360 retargeting using first-party site segments. DSP AI optimised frequency across CTV and display. Platform comparison showed Google ecosystem outperformed isolated Meta for considered purchases.",
        },
      ],
    }),
    buildSection({
      number: "1.8",
      title: "The Human Role in Paid Media Lens",
      subtitle: "Six checks before your next media budget, agency review, or automation rollout",
      take: "Before scaling AI-driven paid media, run six checks: (1) Is creative volume sufficient for creative-as-targeting? (2) Are conversion signals clean and value-aligned? (3) Do black-box guardrails and hybrid structures exist? (4) Is first-party data integrated and consented? (5) Does measurement triangulate beyond platform ROAS? (6) Does budget follow platform AI strengths? Humans set strategy, constraints, and proof — algorithms execute.",
      why: "This lens prevents automation without signals and manual nostalgia without scale. Paid media leadership in 2026 is governance and inputs, not bid modifiers.",
      paragraphs: [
        [
          s("Checks one and two: creative and signals. "),
          x(
            "Launching Advantage+ or PMax with three stale assets and junk conversion events guarantees poor outcomes — not 'AI failure'.",
            "Verify minimum creative variants and primary conversion definition before any automation scale-up.",
          ),
          s(" No new automated campaign without creative sprint and signal audit sign-off."),
        ],
        [
          s("Checks three and four: governance and data. "),
          x(
            "Exclusion lists, brand safety, and manual campaigns for branded intent are non-negotiable guardrails.",
            "CRM sync and CAPI should be live before prospecting budgets increase.",
          ),
          s(" Black-box spend caps at 70% of channel until incrementality tested."),
        ],
        [
          s("Checks five and six: measurement and platform fit. "),
          x(
            "Dashboards must show CRM-reconciled metrics alongside platform ROAS.",
            "Reallocate when platform scorecard shows weak signal or creative fit — do not mirror last year's budget split.",
          ),
          s(" Run the six-check lens in quarterly business reviews with finance and sales ops present."),
        ],
      ],
      examples: [
        {
          title: "CMO automation gate — six-check policy",
          body: "A CMO mandated six-check completion before any campaign over $50k/month automated. Two rushed PMax launches were blocked until offline imports fixed. Year-end blended CPA beat prior year despite 40% more automation — gates prevented expensive learning phases on bad data.",
        },
        {
          title: "Agency reframing — inputs not hours",
          body: "A brand replaced agency KPIs from bid changes to creative variants launched and signal match rate. Agency delivered twice the creative tests and CAPI implementation. Performance improved; the old hourly bid-management model was invisible value.",
        },
        {
          title: "Platform scorecard QBR — budget shift",
          body: "Quarterly scorecard showed Meta creative fatigue and Google signal strength. Budget shifted 20% mid-quarter. Pipeline targets still hit — lens check six prevented sentimental channel loyalty.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A stakeholder wants to return to manual bids because 'the algorithm wasted budget.' Best first diagnostic step?",
      options: [
        "Immediately disable all automation.",
        "Audit conversion signal quality and creative inputs before blaming the algorithm.",
        "Double budgets to give AI more data.",
        "Switch to a new platform.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Signal dependency and creative-as-targeting drive automated outcomes. Re-read sections 1.2 and 1.3.",
      wrongFeedback:
        "Automation fails on bad signals and weak creative — not magic. Audit inputs first. Re-read sections 1.2 and 1.3.",
    },
    {
      kind: "order",
      q: "Order the paid media AI readiness workflow from foundation to scale.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Define primary conversions aligned to pipeline value",
        "Implement pixel, CAPI, and CRM audience sync",
        "Build creative variant volume for broad delivery",
        "Enable automated bidding with guardrails and exclusions",
        "Triangulate measurement beyond platform ROAS",
        "Run incrementality tests and platform scorecard reviews",
      ],
      correctFeedback:
        "Right. Signals → creative → automation → governance → measurement → proof. Re-read sections 1.1 and 1.3.",
      wrongFeedback:
        "Clean signals and creative come before scaling black-box campaigns. Re-read sections 1.1 and 1.3.",
    },
    {
      kind: "categorize",
      q: "Sort each practice into AI-era paid media vs legacy manual-era thinking.",
      categories: ["AI-era paid media", "Legacy manual-era"],
      items: [
        { text: "Creative variants as primary targeting lever on Meta.", category: 0 },
        { text: "Hourly bid modifier spreadsheets at keyword level.", category: 1 },
        { text: "CRM Customer Match for lookalike seeding.", category: 0 },
        { text: "Twenty ad sets with identical creative and narrow interests.", category: 1 },
        { text: "Incrementality tests on Advantage+ campaigns.", category: 0 },
        { text: "Judging channels on platform ROAS alone.", category: 1 },
      ],
      correctFeedback:
        "Right. Modern paid media emphasises signals, creative, and honest measurement. Re-read sections 1.2 and 1.6.",
      wrongFeedback:
        "If it assumes manual audience control without signal hygiene, it is legacy thinking. Re-read sections 1.2 and 1.6.",
    },
    {
      q: "Performance Max spends on irrelevant queries but overall CPA looks acceptable. Best response?",
      options: [
        "Pause all Google Ads permanently.",
        "Use search term insights, negatives, and hybrid structure with standard Search for high-intent control.",
        "Ignore query detail because PMax is fully automated.",
        "Only increase budget.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Black-box governance uses exclusions and hybrid campaigns — not blind trust. Re-read section 1.4.",
      wrongFeedback:
        "Opacity requires guardrails, not surrender. Re-read section 1.4.",
    },
    {
      q: "Meta Events Manager shows 62% event match rate after iOS changes. Before scaling Advantage+ spend, priority action?",
      options: [
        "Launch more interest-targeted ad sets.",
        "Implement or fix Conversions API and deduplication to restore signal quality.",
        "Switch to impressions-only optimisation.",
        "Remove all video creative.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Signal dependency makes CAPI baseline hygiene. Re-read section 1.3.",
      wrongFeedback:
        "Low match rates starve Advantage+ models. Fix server-side tracking first. Re-read section 1.3.",
    },
    {
      kind: "categorize",
      q: "Match each platform AI strength to its primary use case.",
      categories: ["Google Ads AI", "Meta Advantage+"],
      items: [
        { text: "Smart Bidding on high-intent search queries.", category: 0 },
        { text: "Creative-led broad prospecting for visual products.", category: 1 },
        { text: "PMax asset groups across Search, Shopping, Display.", category: 0 },
        { text: "Advantage+ Shopping with catalog and UGC video.", category: 1 },
        { text: "Offline conversion import for B2B pipeline value.", category: 0 },
        { text: "Engagement-pattern matching from Reels and Stories.", category: 1 },
      ],
      correctFeedback:
        "Right. Google wins on intent signals; Meta wins on creative-led social delivery. Re-read section 1.7.",
      wrongFeedback:
        "Platform AI differs — match channel to signal and creative strengths. Re-read section 1.7.",
    },
  ],
});
