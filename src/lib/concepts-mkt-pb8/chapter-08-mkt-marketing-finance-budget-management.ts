import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter08MktMarketingFinanceBudgetManagement = buildChapter({
  slug: "mkt-marketing-finance-budget-management",
  number: 8,
  shortTitle: "Marketing Finance & Budget Management",
  title: "Marketing Finance & Budget Management — Forecast Accuracy, Spend Governance, and ROI Accountability",
  readingMinutes: 24,
  summary:
    "Marketing finance connects analytics to allocation — annual planning, quarterly reforecasting, spend governance, vendor management, and ROMI accountability that finance and the CMO share. AI accelerates budget modelling, scenario simulation, invoice anomaly detection, and variance narration, but budget trust depends on marketer-owned discipline: chart of accounts aligned to programmes, committed vs discretionary spend visibility, forecast ranges finance accepts, and investment cases tied to pipeline outcomes. Teams that treat budget as annual spreadsheet theatre get cut in downturns; teams that run marketing as a portfolio with finance earn strategic flexibility.",
  keyTakeaway:
    "Marketing budget is a portfolio decision system, not a cost centre line item. The sequence that wins: align chart of accounts and planning calendar with finance → build bottom-up and top-down forecasts with ranges → govern spend with pacing and approval tiers → measure ROMI and payback with documented confidence → reforecast with variance discipline → run the decision lens before scaling spend or headcount. AI accelerates modelling; marketers own accountability and cross-functional trust.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "8.1",
      title: "Marketing Finance Operating Model",
      subtitle: "Planning calendar, finance partnership, and chart of accounts — structure before spreadsheets",
      take: "Marketing finance operating model defines how marketing plans, spends, and reports with finance: annual planning timeline, quarterly reforecast cadence, chart of accounts mapping programmes to GL codes, and roles (marketing ops finance liaison, FP&A partner). AI supports consolidation — marketers ensure programme taxonomy matches how decisions are made (brand vs demand vs product marketing), not only how invoices are coded.",
      why: "Misaligned COA makes ROMI impossible and hides spend drift. Operating model clarity prevents marketing and finance from talking past each other every quarter.",
      paragraphs: [
        [
          s("Joint planning calendar with locked milestones. "),
          x(
            "Typical: Q3 annual draft, Q4 board approval, monthly actuals close T+5, quarterly reforecast. Marketing submits pipeline-linked investment case; finance submits constraints. AI scenario tools run in workshops — decisions logged with assumption versions.",
            "Ad hoc budget changes without calendar breed mistrust — finance cannot plan cash flow.",
          ),
          s(" Shared calendar in marketing-finance charter — escalation path for mid-quarter material shifts."),
        ],
        [
          s("Chart of accounts mirrors programme portfolio. "),
          x(
            "Levels: department → programme → channel/vendor. Tags: fixed vs variable, brand vs performance, capitalisable vs expense. AI classifies invoices to programmes — marketers resolve ambiguous vendor splits.",
            "COA that matches agency invoices but not campaigns cannot answer 'what did ABM cost?'",
          ),
          s(" Annual COA review when org restructures — stale codes accumulate shadow spend."),
        ],
        [
          s("Marketing ops finance liaison role. "),
          x(
            "Single accountable owner for forecast submission, accrual accuracy, vendor PO alignment, and ROMI pack preparation. AI automates pulls — liaison validates narrative finance will scrutinise.",
            "Budget spread across channel managers without liaison produces inconsistent submissions.",
          ),
          s(" Liaison attends finance close meetings — marketing voice in variance discussions."),
        ],
      ],
      examples: [
        {
          title: "COA redesign",
          body: "Marketing had 200 GL codes from decade of acquisitions. Finance could not aggregate demand gen. COA collapsed to 24 programme codes with tags. ROMI first calculated same quarter; board approved protected demand budget with evidence.",
        },
        {
          title: "Calendar discipline",
          body: "Mid-quarter ad hoc requests previously bypassed finance. Enforced change request window with 2-week FP&A review. Exceptions dropped 70%; forecast accuracy improved — finance trusted marketing discipline.",
        },
        {
          title: "Liaison impact",
          body: "Hired marketing finance manager bridging ops and FP&A. Accrual errors dropped 85%; month-end marketing-finance meeting shortened from 3 hours to 45 minutes. CMO gained credibility in CFO 1:1s.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-ma-ch8-marketing-finance",
      type: "nested",
      title: "Marketing Finance Management Stack",
      caption:
        "Planning calendar and COA → budget build and scenarios → spend governance and pacing → actuals and accruals → ROMI and payback analysis → reforecast and variance → portfolio reallocation decisions.",
    }),
    buildSection({
      number: "8.2",
      title: "Annual & Quarterly Budget Planning",
      subtitle: "Bottom-up builds, top-down constraints, and scenario envelopes — plan as range not point",
      take: "Budget planning combines bottom-up programme requests (channel plans, headcount, agencies, martech) with top-down finance constraints (revenue target, margin, growth vs efficiency mandate). AI models scenario outcomes: base, growth, efficiency — marketers present investment cases linking spend to pipeline and ROMI ranges, not wish lists.",
      why: "Point budgets break on first market shift. Range-based planning with documented assumptions enables faster reallocation without political reset.",
      paragraphs: [
        [
          s("Investment case per major programme line. "),
          x(
            "Template: objective, prior year actuals, requested change, expected pipeline/revenue impact, ROMI range, risks, dependencies. AI drafts from historical performance — programme owners validate assumptions.",
            "Line items without investment case get cut first in efficiency mandates — no story, no protection.",
          ),
          s(" Cases reviewed in joint marketing-finance workshop before CMO-CFO alignment."),
        ],
        [
          s("Zero-based elements on discretionary spend. "),
          x(
            "Not full ZBB annually — but discretionary lines (events, experimental channels, agencies) justify from scratch each cycle. AI flags YoY increases >20% without performance lift — marketers defend or reallocate.",
            "Automatic 10% uplift on every line compounds bloat — challenge discretionary with data.",
          ),
          s(" Protect proven core; challenge long-tail programmes below ROMI threshold."),
        ],
        [
          s("Headcount and martech as explicit portfolio lines. "),
          x(
            "FTE cost fully loaded; martech licence and implementation amortised. AI TCO models for stack consolidation proposals — marketers avoid hidden shadow tools outside budget.",
            "Underbudgeted martech creates shadow SaaS on corporate cards — ROMI blind spot.",
          ),
          s(" Martech renewal calendar integrated — no surprise Q3 licence cliff."),
        ],
      ],
      examples: [
        {
          title: "Scenario envelope — growth year",
          body: "Finance allowed +12% marketing only in growth scenario hitting revenue target. Marketing presented three envelopes tied to pipeline forecasts. Board chose growth; efficiency scenario pre-documented for trigger if Q1 miss — avoided panic renegotiation.",
        },
        {
          title: "ZBB on events",
          body: "Events budget $2.1M habitual. Zero-based review: 3 events below pipeline-per-dollar threshold. Cut 1, reallocated to ABM. Net pipeline up 9% at flat total budget.",
        },
        {
          title: "Martech consolidation",
          body: "AI TCO showed 4 overlapping analytics tools. Consolidation proposal saved $340K annually; reinvested in data engineering. Finance approved because savings were audited, not hypothetical.",
        },
      ],
    }),
    buildSection({
      number: "8.3",
      title: "Spend Governance & Approval Tiers",
      subtitle: "PO discipline, pacing alerts, and delegation — control without killing velocity",
      take: "Spend governance defines approval tiers: campaign manager daily limits, director thresholds, CMO/CFO for material commits, procurement for new vendors. Committed spend (annual contracts, retainers) separated from discretionary (media, experiments). AI monitors pacing vs plan and flags anomalies — marketers balance control with speed for tactical media decisions.",
      why: "Overspend erodes ROMI; over-control slows competitive response. Tiered governance aligns risk to approval authority.",
      paragraphs: [
        [
          s("Committed vs discretionary visibility. "),
          x(
            "Dashboard: fixed obligations, remaining discretionary envelope, pacing by month. AI forecasts year-end position from current burn — marketers see flex room before new commits.",
            "Teams commit retainers early then have no flex for Q4 opportunities — envelope view prevents lock-up.",
          ),
          s(" Monthly committed spend review — renegotiate or sunset before auto-renew traps flex."),
        ],
        [
          s("Approval tiers matched to materiality and risk. "),
          x(
            "Example: <$10K media shift channel lead; $10–100K director; >$100K or new vendor CMO+CFO. AI routes approval workflow; audit trail for SOX-sensitive orgs.",
            "Everything requires CMO approval slows campaigns; nothing requires it invites overspend.",
          ),
          s(" Tier matrix published — reduces 'who approves this?' Slack threads."),
        ],
        [
          s("Procurement integration for vendor risk. "),
          x(
            "New agency or martech vendor through security and procurement — parallel path with marketing evaluation. AI compares contract terms to benchmark database — marketers negotiate with data.",
            "Shadow vendor contracts create cost and security risk — procurement partnership not obstacle.",
          ),
          s(" Preferred vendor list for speed on tactical creative and media buys."),
        ],
      ],
      examples: [
        {
          title: "Envelope save — Q4 flex",
          body: "Committed spend review in July revealed 78% budget locked in H1 retainers. Renegotiated two contracts to quarterly terms; freed $400K discretionary for competitive conquest in Q4.",
        },
        {
          title: "Tier velocity",
          body: "Media team waited 5 days for CMO approval on $15K shifts. Delegated to director tier with weekly rollup to CMO. Campaign response time improved 60%; overspend incidents zero with pacing dashboard.",
        },
        {
          title: "Procurement catch",
          body: "AI contract scan flagged auto-renew 40% price uplift on DAM vendor. Procurement renegotiated 8% increase. Marketing finance liaison logged savings in ROMI report.",
        },
      ],
    }),
    buildSection({
      number: "8.4",
      title: "Forecasting, Reforecast & Variance Management",
      subtitle: "Monthly marketing forecast, quarterly true-up, and honest variance narrative",
      take: "Marketing forecast tracks spend actuals vs plan, pipeline vs forecast, and ROMI trajectory — updated monthly with quarterly formal reforecast to finance. AI projects year-end from pacing and pipeline models — marketers explain variance drivers: performance choice, market shift, data correction, or execution miss. Reforecast discipline builds CFO trust for mid-year investment asks.",
      why: "Surprise overspend or pipeline miss without early warning damages budget credibility. Transparent reforecast enables portfolio shifts before year-end crisis.",
      paragraphs: [
        [
          s("Rolling forecast replaces set-and-forget annual plan. "),
          x(
            "Monthly: update spend forecast to year-end, pipeline outlook, ROMI projection. Quarterly: formal reforecast submission with finance template. AI rolls forward — marketers annotate one-time vs structural variance.",
            "Annual budget as immutable guarantees Q3 emergency cuts — rolling forecast enables smooth adjustment.",
          ),
          s(" Reforecast assumptions linked to predictive models from chapter 5 — one forecast truth."),
        ],
        [
          s("Variance categories standardised. "),
          x(
            "Categories: volume (more/less activity), rate (CPA/CPC shift), timing (pull-forward/delay), one-time (true-up), execution (missed deliverable). AI drafts variance table — liaison validates before CFO review.",
            "Unstructured 'we underspent' without category blocks learning and reallocation.",
          ),
          s(" Variance over 5% or $X requires written commentary — materiality threshold in charter."),
        ],
        [
          s("Underspend and overspend protocols. "),
          x(
            "Underspend: reallocate to proven programmes vs return to finance — policy agreed upfront. Overspend: escalation and recovery plan before year-end. AI alerts at 90% envelope by month 8.",
            "Hoarding underspend until Q4 panic spend wastes learning — reallocate with governance.",
          ),
          s(" Mid-year investment requests use reforecast credibility — track record of honest variance."),
        ],
      ],
      examples: [
        {
          title: "Early reforecast",
          body: "Pipeline model flagged Q2 miss in April. Marketing proactively reforecast -8% spend and presented efficiency plan. CFO preferred early honesty vs surprise — protected headcount vs across-board cut proposed by board.",
        },
        {
          title: "Variance category insight",
          body: "Underspend attributed to 'timing' on event programme — not savings. Rescheduled to Q3; avoided false ROMI spike in H1 report. Finance appreciated category discipline.",
        },
        {
          title: "Overspend recovery",
          body: "Paid search overspent 12% in Q1 due to auction inflation. Alert at 90% pacing; negotiated agency fee reduction and paused low-ROI display. Year-end within 2% of plan.",
        },
      ],
    }),
    buildSection({
      number: "8.5",
      title: "ROMI, Payback & Incrementality",
      subtitle: "Return metrics finance accepts — ranges, confidence, and causal humility",
      take: "ROMI and payback calculations connect marketing spend to revenue or pipeline with methodology finance endorses: aligned attribution window, incrementality flags, fully loaded costs, and range outputs. AI accelerates ROMI dashboards — marketers document confidence level (validated holdout vs directional attribution) and avoid single-number hero metrics in CFO meetings.",
      why: "Marketing claims 10x ROMI with platform attribution; finance discounts to zero. Shared methodology converts ROMI from argument to planning input.",
      paragraphs: [
        [
          s("Fully loaded cost in ROMI denominator. "),
          x(
            "Include media, agency, martech, allocated FTE, creative production. Exclude sunk costs only when finance agrees. AI allocates shared costs by programme rules — marketers avoid cherry-picked partial costs.",
            "Media-only ROMI ignores 40–60% of real marketing cost — finance rightly dismisses.",
          ),
          s(" ROMI methodology doc co-signed by FP&A — updated when attribution model changes."),
        ],
        [
          s("Payback period for growth investments. "),
          x(
            "CAC payback months for demand programmes; brand investments may use longer horizon proxy metrics with finance agreement. AI models payback distributions — present median and worst case.",
            "ROMI alone misses timing — payback matters for cash-constrained companies.",
          ),
          s(" Board reports ROMI range and payback — paired metrics reduce gaming."),
        ],
        [
          s("Incrementality tier badges on ROMI lines. "),
          x(
            "Tier A: geo or holdout validated. Tier B: MMM-informed. Tier C: directional attribution. AI pulls from experimentation registry. Budget scale decisions require Tier A or B for major lines.",
            "Scaling on Tier C ROMI repeats paid media attribution crisis at portfolio level.",
          ),
          s(" Annual incrementality roadmap — upgrade one major channel to Tier A yearly."),
        ],
      ],
      examples: [
        {
          title: "Fully loaded ROMI",
          body: "Marketing reported 6x ROMI media-only; finance calculated 2.4x fully loaded. Joint methodology adopted fully loaded standard. Next year budget discussion used same number — productive allocation debate.",
        },
        {
          title: "Payback gate",
          body: "New channel showed 5x ROMI but 22-month payback vs 12-month policy. Finance blocked scale; marketing optimised funnel to 14-month payback before Q3 investment — aligned growth with cash discipline.",
        },
        {
          title: "Incrementality upgrade",
          body: "LinkedIn ROMI Tier C for 2 years. Geo holdout moved to Tier A — true ROMI 1.8x vs 4.2x attributed. Reallocated 30% budget to validated higher-ROMI search prospecting.",
        },
      ],
    }),
    buildSection({
      number: "8.6",
      title: "Vendor & Agency Financial Management",
      subtitle: "Contracts, SOWs, benchmarks, and value tracking — spend transparency",
      take: "Vendor financial management tracks agency retainers, media markups, production costs, and martech licences against benchmarks and SOW deliverables. AI parses invoices for anomaly detection, duplicate billing, and scope creep — marketers run quarterly business reviews with vendors tying fees to KPIs and pipeline outcomes.",
      why: "Agency and martech spend often exceeds media in mature teams. Without vendor discipline, ROMI leaks through fees not campaigns.",
      paragraphs: [
        [
          s("SOW linked to measurable deliverables. "),
          x(
            "Retainer SOW: deliverables, KPIs, reporting cadence, exit clause. AI compares delivered hours/assets to SOW — flag under-delivery before renewal.",
            "Evergreen retainer without KPI review becomes expensive relationship tax.",
          ),
          s(" Marketing finance liaison owns vendor scorecard — shared with procurement."),
        ],
        [
          s("Benchmark media and agency rates. "),
          x(
            "Industry benchmark reports, RFP competitive bids, AI contract analysis vs peer data. Marketers negotiate from evidence — finance supports with benchmark discipline.",
            "Renewing 15% agency fee increase without benchmark weakens ROMI silently.",
          ),
          s(" Benchmark review before any multi-year contract renewal."),
        ],
        [
          s("Markup and transparency on media buying. "),
          x(
            "Disclosed vs undisclosed agency model understood. AI reconciles platform spend to invoice — verify no double markup on programmatic. Finance audits sampling annually.",
            "Opaque programmatic markup can consume 20%+ of media budget unnoticed.",
          ),
          s(" Media transparency clause in agency MSA — non-negotiable for new relationships."),
        ],
      ],
      examples: [
        {
          title: "SOW enforcement",
          body: "Creative agency retainer $45K/month; AI audit showed 30% hours on non-SOW 'exploratory.' QBR renegotiated to project-based for exploratory work. Saved $160K annually; quality maintained on core deliverables.",
        },
        {
          title: "RFP benchmark",
          body: "Media agency proposed 12% fee; benchmark 8–9%. Competitive RFP landed 8.5% with same service scope. Savings reinvested in incremental prospecting budget.",
        },
        {
          title: "Programmatic reconciliation",
          body: "Finance audit found $180K discrepancy platform vs invoice over 6 months — misconfigured DSP seat. Fixed; recovered credit. Led to monthly automated reconciliation via AI tool.",
        },
      ],
    }),
    buildSection({
      number: "8.7",
      title: "Portfolio Allocation & Efficiency Mandates",
      subtitle: "Rebalancing under constraint — protect core, cut tail, fund winners",
      take: "Portfolio allocation applies finance constraints to marketing mix: efficiency mandates (do more with same), growth mandates (invest ahead of revenue), or cut mandates (protect ROMI). AI simulates reallocation scenarios across channels — marketers present trade-offs with pipeline impact ranges. Decision principles: protect validated core, cut below-threshold tail, fund experiments with capped bets.",
      why: "Uniform budget cuts destroy high-ROMI programmes alongside waste. Portfolio discipline targets cuts surgically and defends winners with data.",
      paragraphs: [
        [
          s("Programme tiering for allocation decisions. "),
          x(
            "Tier A: proven ROMI, scale protected. Tier B: promising, capped growth. Tier C: experimental, strict cap. Tier D: below threshold, cut candidate. AI scores programmes quarterly — marketers adjust tiers with finance in portfolio review.",
            "Across-the-board 10% cut demoralises winners and rewards underperformers equally.",
          ),
          s(" Tier definitions in marketing finance charter — reduces political allocation fights."),
        ],
        [
          s("Efficiency mandate playbook. "),
          x(
            "Levers: shift to lower-CAC channels, improve conversion vs cut volume, martech consolidation, agency renegotiation, reduce low-tier events. AI ranks levers by pipeline impact per dollar saved — sequence cuts to minimise revenue damage.",
            "Efficiency mandate defaulting to headcount cut first often destroys capability — lever ranking first.",
          ),
          s(" Efficiency plan presented with pipeline sensitivity — finance approves trade-off explicitly."),
        ],
        [
          s("Experiment cap during cuts. "),
          x(
            "Maintain 5–10% budget for controlled experiments even in cuts — innovation pipeline for recovery. AI tracks experiment ROMI separately — prove when to graduate from cap to Tier B.",
            "Zero experiment budget in downturns guarantees slow recovery when market turns.",
          ),
          s(" Experiment fund governed — fast kill rules for failed tests."),
        ],
      ],
      examples: [
        {
          title: "Surgical cut",
          body: "10% cut mandate. Portfolio review cut Tier D programmes only (-$1.2M); protected Tier A ABM (+$200K from freed funds for scale). Net -8% spend, pipeline forecast -2% vs -9% under uniform cut scenario.",
        },
        {
          title: "Efficiency levers",
          body: "Efficiency year: martech consolidation + conversion optimisation before media cut. Achieved 6% spend reduction with flat pipeline — vs prior cut year pipeline dropped 15%.",
        },
        {
          title: "Experiment graduation",
          body: "Podcast sponsorship in 5% experiment cap showed Tier A incrementality after 2 quarters. Graduated to Tier B with 3x budget — new channel at 2.2x ROMI validated.",
        },
      ],
    }),
    buildSection({
      number: "8.8",
      title: "The Marketer Decision Lens — Budget Investment",
      subtitle: "When to fix COA, add spend, or scale headcount — finance trust over wishful ROMI",
      take: "Before budget increases, new vendor contracts, or headcount adds, run four checks: (1) is COA and planning calendar aligned with finance — structure before asks? (2) are forecasts rolling with honest variance categories — credibility before growth? (3) is ROMI fully loaded with incrementality tier appropriate to scale decision — proof before spend? (4) does spend governance show envelope visibility — control before expansion? Invest in operating model and ROMI methodology first. Scale investment when reforecast accuracy and finance partnership metrics hold.",
      why: "AI makes budget models easy to beautify — tempting marketing to request increases on directional attribution. This lens prioritises investments that survive CFO scrutiny.",
      paragraphs: [
        [
          s("Check one: operating model and COA. "),
          x(
            "Cannot answer programme-level spend in 24 hours → COA fix before headcount ask. No marketing finance liaison → role before budget system upgrade.",
            "Structure gaps undermine every investment case.",
          ),
          s(" Joint charter workshop gate precedes annual budget platform purchases."),
        ],
        [
          s("Check two: forecast and variance discipline. "),
          x(
            "Surprise variances two quarters running → reforecast process before growth envelope request. Underspend hoarding without policy → governance fix before mid-year reallocation.",
            "Finance funds partners who forecast honestly — surprises tax all asks.",
          ),
          s(" Track reforecast accuracy as marketing ops KPI."),
        ],
        [
          s("Checks three and four: ROMI proof and governance. "),
          x(
            "Scale request on Tier C ROMI only → incrementality test before commit. No committed/discretionary view → envelope dashboard before new annual retainer.",
            "Proof and control are prerequisites for scale, not afterthoughts.",
          ),
          s(" Run lens in pre-board marketing-finance review with FP&A and CMO staff."),
        ],
      ],
      examples: [
        {
          title: "Headcount deferred",
          body: "Requested 3 FTE for content. Lens: ROMI Tier C on content influence, COA could not isolate content cost. Ran influence study and COA tag first; proved pipeline lift. Approved 2 FTE with measurement plan.",
        },
        {
          title: "Agency expansion blocked",
          body: "Agency proposed doubling retainer for 'AI services.' Lens: SOW KPIs unmet on current retainer. Renegotiated current SOW before expansion; saved $200K and improved deliverables.",
        },
        {
          title: "Growth ask approved",
          body: "12% increase request. Lens: Tier A search incrementality, rolling forecast accurate ±4% four quarters, governance tiers working. Finance approved growth envelope — credibility earned over 18 months discipline.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Finance dismisses marketing ROMI as unreliable. What should marketing fix first?",
      options: [
        "Use highest platform ROAS in the board deck.",
        "Adopt fully loaded costs, co-signed ROMI methodology, and incrementality tier badges with finance.",
        "Stop reporting ROMI entirely.",
        "Add more GL codes without taxonomy review.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Shared methodology and honest confidence tiers build finance trust. Re-read sections 8.1 and 8.5.",
      wrongFeedback:
        "Align ROMI methodology with finance using fully loaded costs and incrementality. Re-read sections 8.1 and 8.5.",
    },
    {
      q: "Marketing has no flex budget in Q4 despite underspend in Q1. What failed?",
      options: [
        "Too many campaigns.",
        "Committed vs discretionary visibility and early committed spend review.",
        "ROMI calculation frequency.",
        "Vendor brand colours on invoices.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Envelope management and committed spend reviews preserve flex. Re-read section 8.3.",
      wrongFeedback:
        "Track committed vs discretionary spend and review renewals early. Re-read section 8.3.",
    },
    {
      kind: "order",
      q: "Order the marketing finance system from first step to last.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Align COA and planning calendar with finance",
        "Build budget with scenarios and investment cases",
        "Govern spend and track ROMI with confidence tiers",
        "Reforecast with variance discipline and reallocate portfolio",
      ],
      correctFeedback:
        "Right. Structure → plan → govern/measure → reforecast. Re-read sections 8.1–8.8.",
      wrongFeedback:
        "Start with operating model. Portfolio reallocation closes the loop. Re-read sections 8.1–8.8.",
    },
    {
      kind: "categorize",
      q: "Sort each practice into the correct marketing finance layer.",
      categories: ["Planning & structure", "Governance & forecast", "ROMI & vendors", "Improvement & lens"],
      items: [
        { text: "Programme-based chart of accounts.", category: 0 },
        { text: "Approval tiers by spend materiality.", category: 1 },
        { text: "Fully loaded ROMI methodology.", category: 2 },
        { text: "Portfolio tiering for cut mandates.", category: 3 },
        { text: "Rolling monthly marketing forecast.", category: 1 },
        { text: "Agency SOW deliverable tracking.", category: 2 },
      ],
      correctFeedback:
        "Right. Planning = COA and budget. Governance = approvals and forecast. ROMI = metrics and vendors. Improvement = portfolio and lens. Re-read sections 8.1–8.8.",
      wrongFeedback:
        "Match each practice to planning, governance, ROMI/vendors, or improvement. Re-read sections 8.1–8.8.",
    },
    {
      q: "Uniform 10% budget cut requested. What does the lens recommend?",
      options: [
        "Cut all programmes equally immediately.",
        "Portfolio tiering — cut Tier D tail, protect Tier A validated programmes with scenario impact.",
        "Ignore the mandate.",
        "Hide spend in new GL codes.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Surgical portfolio allocation minimises pipeline damage. Re-read sections 8.7 and 8.8.",
      wrongFeedback:
        "Use programme tiering and trade-off scenarios for surgical cuts. Re-read sections 8.7 and 8.8.",
    },
    {
      q: "CMO wants to scale spend on a channel with 5x platform ROAS but no holdout. What comes first?",
      options: [
        "Double spend immediately.",
        "Incrementality test to upgrade ROMI tier before major scale decision.",
        "Switch attribution model to show higher ROAS.",
        "Cancel finance reviews.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Validate incrementality before scale on directional metrics. Re-read sections 8.5 and 8.8.",
      wrongFeedback:
        "Run incrementality validation before scaling on Tier C ROMI. Re-read sections 8.5 and 8.8.",
    },
  ],
});
