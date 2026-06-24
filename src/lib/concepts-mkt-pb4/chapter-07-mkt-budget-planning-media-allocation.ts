import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter07MktBudgetPlanningMediaAllocation = buildChapter({
  slug: "mkt-budget-planning-media-allocation",
  number: 7,
  shortTitle: "Budget Planning & Media Allocation",
  title: "Budget Planning & Media Allocation — AI-Assisted Forecasting With Human Governance",
  readingMinutes: 24,
  summary:
    "Media budgets are allocation problems under uncertainty: how much per channel, how fast to spend, when to shift based on marginal returns, and who owns the decision when AI recommends reallocation. AI accelerates forecasting, scenario modelling, bid pacing analysis, and cross-channel optimisation signals — but budget governance requires explicit ownership, reallocation triggers, and seasonality planning that algorithms cannot replace.",
  keyTakeaway:
    "Budget allocation is marginal return optimisation under constraints, not ROAS maximisation per channel. The framework that wins: forecast scenarios with seasonality → allocate by marginal efficiency → pace bids to plan → monitor diminishing returns → reallocate with governance triggers. AI models scenarios; marketers own thresholds, approvals, and accountability.",
  pmCallout: MKT_CALLOUT,
  sections: [
    buildSection({
      number: "7.1",
      title: "AI-Assisted Budget Planning",
      subtitle: "Scenario forecasting from historical performance, pipeline targets, and macro assumptions",
      take: "AI budget planning tools ingest historical spend-revenue curves, pipeline conversion rates, seasonality patterns, and growth targets to generate spend scenarios: conservative, base, and aggressive. Outputs include channel-level envelopes, expected CPA ranges, and revenue confidence intervals. Planning replaces spreadsheet guesswork — but assumptions require marketer validation on market conditions, competitive dynamics, and product launch calendar.",
      why: "Annual and quarterly budget cycles consume weeks of manual modelling. AI collapses scenario iteration time — enabling more 'what-if' analysis. Without validated assumptions, AI plans are precisely wrong instead of roughly right.",
      paragraphs: [
        [
          s("Budget plan inputs beyond last year's spend. "),
          x(
            "Required inputs: revenue or pipeline target, historical channel efficiency curves, seasonality indices, planned product launches, competitive intelligence, incrementality-adjusted ROAS (not platform ROAS), and constraint rules (minimum brand spend, max channel concentration).",
            "AI extrapolating last year without launch calendar or competitive shift produces fantasy forecasts.",
          ),
          s(" Document assumptions in plan appendix — finance and marketing align on what the model believed."),
        ],
        [
          s("Three-scenario planning is minimum viable. "),
          x(
            "Conservative: 80% of base efficiency, delayed pipeline. Base: trend continuation with known initiatives. Aggressive: efficiency improvements from CRO and creative programmes plus market expansion. AI generates all three; leadership picks envelope with explicit risk acceptance.",
            "Single-point forecasts create false certainty — scenarios express uncertainty honestly.",
          ),
          s(" Monthly reforecast against actuals — plans are living documents, not annual fossils."),
        ],
        [
          s("Connect budget plan to downstream execution systems. "),
          x(
            "Channel envelopes must translate to platform daily budgets, pacing rules, and team capacity. AI plan without execution mapping sits in slides. Export envelopes to media buying tools and pacing dashboards.",
            "Plan-to-execution gap is where most budget programmes fail — not in the model.",
          ),
          s(" Budget planning meeting includes channel leads confirming executability of envelopes."),
        ],
      ],
      examples: [
        {
          title: "Scenario planning — B2B SaaS annual budget",
          body: "A B2B SaaS company used AI forecasting with 3 years of data: pipeline creation by channel, close rates, seasonality. Three scenarios presented to board: conservative $4.2M spend / $18M pipeline, base $5.1M / $24M, aggressive $6.8M / $28M with widening confidence intervals. Board approved base with trigger to shift toward aggressive if Q1 pipeline exceeded plan 15%. Reforecast monthly — actual Q2 beat plan, triggered aggressive envelope on paid social per pre-agreed rule.",
        },
        {
          title: "Launch calendar integration",
          body: "A consumer electronics brand's AI budget model initially ignored Q4 product launch — forecast understated Q4 search demand. Merchandising calendar added as input variable; model allocated 40% of annual search budget to Q4 launch window. Launch quarter revenue beat prior year 22%. Lesson: product calendar is non-optional budget input.",
        },
        {
          title: "Fantasy forecast — ignored incrementality",
          body: "A DTC brand's AI plan scaled retargeting 50% based on platform ROAS curves. Finance approved. Incrementality data (available but not fed to model) showed retargeting saturation. Q2 missed revenue target despite spend on plan. Fix: incrementality-adjusted efficiency curves in all budget models. Retargeting envelope capped with diminishing returns flag.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "7.2",
      title: "Channel Allocation Strategy",
      subtitle: "Cross-channel mix decisions using marginal returns, not average ROAS rankings",
      take: "Channel allocation distributes budget across search, social, display, CTV, retail media, and emerging platforms based on marginal return — the incremental revenue from the next dollar spent — not average historical ROAS. AI optimisation tools recommend shifts; marketers set concentration limits, brand minimums, and test budgets for unproven channels.",
      why: "Ranking channels by average ROAS always over-funds saturated channels and starves growth channels. Marginal thinking plus governance constraints produces portfolios that balance efficiency, growth, and risk.",
      paragraphs: [
        [
          s("Marginal ROAS beats average ROAS for allocation. "),
          x(
            "Average ROAS of 5x on branded search does not mean the next $100K earns 5x — often 1.5x at margin. AI models diminishing return curves per channel; allocate until marginal ROAS equalises across channels (within constraints).",
            "The last dollar should earn similar incremental return everywhere — or deliberately not, per strategy.",
          ),
          s(" Refresh marginal curves quarterly — saturation points shift with competition and creative."),
        ],
        [
          s("Allocation constraints reflect strategy, not just math. "),
          x(
            "Brand minimum: always-on upper-funnel regardless of short-term ROAS. Concentration cap: no channel above 40% of spend. New channel test reserve: 5–10% for pilots with incrementality gates. AI respects constraints as optimisation boundaries.",
            "Unconstrained optimisation produces fragile portfolios — one auction change away from crisis.",
          ),
          s(" Document constraints in allocation policy — prevents quarterly renegotiation from scratch."),
        ],
        [
          s("Full-funnel allocation considers lag, not just last-click. "),
          x(
            "Upper-funnel channels show poor platform ROAS but positive MMM contribution. Allocation model includes lagged value estimates from MMM and incrementality — not same-month ROAS alone.",
            "Cutting YouTube because this month's ROAS is low destroys next quarter's branded search efficiency.",
          ),
          s(" Lag assumptions explicit in allocation model — sensitivity analysis on lag error."),
        ],
      ],
      examples: [
        {
          title: "Marginal allocation shift — e-commerce",
          body: "An e-commerce brand's AI allocation model showed Google Shopping marginal ROAS dropping below Meta prospecting at current spend levels. Recommended 15% shift ($180K quarterly) from Shopping to Meta. Incrementality-backed. Blended ROAS improved 8% at same total spend. Average ROAS rankings would have increased Shopping — wrong direction.",
        },
        {
          title: "Concentration cap prevented crisis",
          body: "A fintech company relied on Meta for 70% of leads — efficient until iOS update crushed performance overnight. Allocation policy cap at 45% per channel had been ignored. Post-crisis: enforced cap, diversified into Google and LinkedIn over 2 quarters. No single-channel dependency above 40%. Policy constraint was insurance, not inefficiency.",
        },
        {
          title: "Test reserve funded retail media pilot",
          body: "A CPG brand allocated 8% of digital budget to test reserve per policy. Amazon Ads pilot funded from reserve — not competing with proven Meta budget. Pilot incrementality 1.2x at month 6; graduated to core allocation. Without reserve, retail media would have lost budget battles to higher average ROAS channels.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-pm-ch7-budget-allocation",
      type: "flow",
      title: "AI-Assisted Budget Allocation Workflow",
      caption:
        "Forecast scenarios with AI modelling → allocate by marginal returns → pace bids to plan → plan for seasonality → reallocate live with governance triggers.",
    }),
    buildSection({
      number: "7.3",
      title: "Spend Forecasting & Scenario Modelling",
      subtitle: "Predicting outcomes under uncertainty — revenue, pipeline, and CPA bands",
      take: "Spend forecasting models predict outcomes at planned spend levels: revenue, conversions, pipeline created, and CPA distributions. AI runs Monte Carlo simulations incorporating historical variance, seasonality, and macro assumptions. Forecasts power board commitments, vendor negotiations, and reallocation triggers — with explicit confidence bands.",
      why: "Committing to revenue targets without spend-outcome models creates accountability gaps. Marketers who forecast ranges and track forecast accuracy build credibility with finance — and catch plan drift early.",
      paragraphs: [
        [
          s("Forecast outputs are distributions, not single numbers. "),
          x(
            "Report: '$5M spend → $22–26M pipeline (80% confidence interval).' AI Monte Carlo incorporates historical week-over-week variance, not just point estimates. Leadership sets targets within bands, not at optimistic tail.",
            "Single-number forecasts set up marketing for failure when variance is normal.",
          ),
          s(" Track forecast accuracy monthly — calibrate models that systematically over- or under-predict."),
        ],
        [
          s("Driver-based models beat black-box for stakeholder trust. "),
          x(
            "Decompose forecast: spend → impressions → clicks → conversions → revenue, with conversion rate distributions per stage. AI can build driver trees; marketers validate drivers against business logic.",
            "Finance trusts 'CVR assumed 2.1% ±0.3% based on 12-month data' more than 'AI says $24M.'",
          ),
          s(" Driver assumptions visible in forecast dashboard — drill-down builds confidence."),
        ],
        [
          s("Scenario triggers automate plan shifts. "),
          x(
            "Pre-agree: if Q1 pipeline 15% above forecast, shift to aggressive envelope. If CPA 20% above band for 3 weeks, trigger reallocation review. AI monitors triggers; governance committee approves shifts.",
            "Triggers remove emotion from mid-quarter budget debates — rules decided in planning, executed in flight.",
          ),
          s(" Document triggers in budget charter — prevents ad hoc panic shifts."),
        ],
      ],
      examples: [
        {
          title: "Monte Carlo board presentation",
          body: "A marketplace presented annual forecast as probability distribution: 60% chance of hitting $50M GMV target at planned spend, 25% chance of exceeding by 10%, 15% chance of missing by >10%. Board approved spend with contingency reserve for aggressive trigger. Mid-year miss probability rose to 30% in reforecast — triggered proactive CRO investment before crisis.",
        },
        {
          title: "Driver model caught CVR assumption error",
          body: "AI forecast assumed landing page CVR improvement from Q1 redesign. Driver model separated traffic volume from CVR — showed traffic on plan but CVR flat. Root cause: redesign launched on organic only, not paid landing pages. Forecast error diagnosed in week 3, not quarter end. Paid landing pages updated; CVR recovered.",
        },
        {
          title: "Trigger-based reallocation",
          body: "A SaaS company's budget charter: LinkedIn CPA above $450 for 4 consecutive weeks triggers 20% budget shift to Google review. Trigger fired in March; incrementality data supported shift. $80K reallocated; blended pipeline cost improved 12%. Without pre-agreed trigger, debate would have consumed 3 weeks.",
        },
      ],
    }),
    buildSection({
      number: "7.4",
      title: "Bid Pacing & Budget Pacing",
      subtitle: "Daily spend rhythm, platform pacing settings, and AI alerts on over/under-spend",
      take: "Budget pacing ensures planned spend deploys evenly across days, weeks, and months — avoiding front-loaded exhaustion or end-of-period panic. Platform pacing modes (standard, accelerated), daily budget caps, and portfolio bid strategies interact complexly. AI monitors pacing versus plan and recommends adjustments — but major pacing changes need human approval to avoid auction disruption.",
      why: "Mis-pacing wastes budget on bad days, exhausts monthly envelope too early, or leaves money unspent when auction opportunities exist. Marketers who align platform pacing to business calendar capture demand efficiently.",
      paragraphs: [
        [
          s("Match pacing mode to campaign objective and auction dynamics. "),
          x(
            "Standard pacing: even daily spend — good for always-on prospecting. Accelerated: spend budget quickly — useful for time-limited promotions with inelastic demand. Portfolio strategies: Google and Meta optimise across campaign sets — pacing at portfolio level, not individual campaign.",
            "Wrong pacing mode on promo campaign leaves budget unspent on final high-demand day.",
          ),
          s(" Document pacing mode per campaign type in media playbook."),
        ],
        [
          s("AI pacing alerts on plan variance. "),
          x(
            "Monitor: cumulative spend versus linear plan, daily spend z-score, days-to-exhaustion at current rate. Alert when >10% ahead or behind plan by mid-month. AI recommends: increase daily caps, pause low performers, or shift to under-paced channel.",
            "Pacing alerts are operational — resolve same day, not in weekly meeting.",
          ),
          s(" Pacing dashboard shared with finance — spend predictability builds trust."),
        ],
        [
          s("Intra-month reallocation respects pacing constraints. "),
          x(
            "Shifting budget mid-month between channels requires adjusting both envelope and daily caps. AI models reallocation impact on month-end total — avoid shifting to channel that cannot absorb spend in remaining days.",
            "Reallocation without pacing math creates end-of-month underspend or overspend.",
          ),
          s(" Reallocation playbook includes pacing recalculation step."),
        ],
      ],
      examples: [
        {
          title: "Front-loaded spend correction",
          body: "A retailer's AI pacing alert flagged Google spend 22% ahead of plan by day 10 of month — accelerated pacing on promo campaigns. Shifted to standard pacing, reduced daily caps 15%. Month-end spend within 3% of plan. Without alert, budget exhausted day 22 — missed Black Friday weekend demand.",
        },
        {
          title: "Portfolio pacing — B2B",
          body: "A B2B company used Google portfolio bid strategy across 12 campaigns. Individual campaign pacing looked erratic; portfolio pacing smooth. AI dashboard aggregated portfolio versus plan — revealed one campaign hogging budget with declining marginal return. Rebalanced portfolio targets; blended CPA improved 9%.",
        },
        {
          title: "End-of-month panic spend",
          body: "A team with underspend anxiety increased daily caps 3x in final 3 days to 'use budget.' CPA spiked 40% on low-quality inventory. Finance questioned marketing efficiency. Fix: pacing policy allows 5% monthly underspend carry-forward; prohibits panic acceleration without VP approval.",
        },
      ],
    }),
    buildSection({
      number: "7.5",
      title: "Seasonality & Forward Planning",
      subtitle: "AI-detected seasonal patterns, promotional calendars, and budget phasing",
      take: "Seasonality shapes demand, CPCs, and conversion rates — weekly, monthly, and annual cycles plus event-driven spikes. AI time-series models detect seasonal indices per channel and forecast forward demand. Budget phasing allocates more spend to high-opportunity windows — but requires inventory, creative, and landing page readiness before spend arrives.",
      why: "Flat monthly budgets ignore predictable demand swings — over-spending in troughs, under-spending in peaks. Marketers who phase budgets to seasonality improve efficiency without increasing total spend.",
      paragraphs: [
        [
          s("Build seasonal indices per channel, not one company average. "),
          x(
            "Google branded search may peak in January (B2B budget cycles); Meta may peak in November (retail). AI decomposes time series into trend, seasonality, and residual per channel. Apply indices to monthly envelope allocation.",
            "Company-average seasonality masks channel-specific opportunity windows.",
          ),
          s(" Refresh indices annually — COVID-era patterns may no longer apply."),
        ],
        [
          s("Promotional calendar drives phasing, not just historical seasonality. "),
          x(
            "Planned sales, product launches, and industry events create demand independent of historical pattern. Forward plan merges statistical seasonality with known future events.",
            "AI backward-looking models miss first-time events — marketer inputs future calendar.",
          ),
          s(" 90-day forward look updated monthly — creative and landing page teams sync to spend phasing."),
        ],
        [
          s("CPC seasonality affects efficiency, not just volume. "),
          x(
            "Q4 retail CPCs rise 30–50% — same budget buys fewer clicks. Efficiency-adjusted phasing accounts for CPC inflation, not just demand. AI models CPC seasonality separately from conversion seasonality.",
            "Volume-based phasing without CPC adjustment overspends in expensive auction periods.",
          ),
          s(" Scenario plan for peak period CPA bands — set expectations before auction heat."),
        ],
      ],
      examples: [
        {
          title: "B2B January phasing",
          body: "A B2B software company's AI seasonality model showed LinkedIn pipeline creation 40% above average in January, 20% below in July. Budget phased: January envelope 1.4x monthly average, July 0.8x. Same annual spend, 15% more annual pipeline versus flat monthly allocation. Sales team aligned outreach to January paid spike.",
        },
        {
          title: "Retail Q4 CPC adjustment",
          body: "An e-commerce brand's forward plan incorporated Q4 CPC inflation model — 35% higher than Q3 baseline. Allocated 50% of annual search budget to Q4 but with efficiency-adjusted click expectations. Avoided surprise 'we spent more but got fewer conversions' narrative. ROAS targets set per-season, not annual average.",
        },
        {
          title: "Launch-readiness mismatch",
          body: "A consumer brand phased 30% of Q2 budget to product launch week per AI demand forecast. Landing pages and creative not ready — spend deployed to generic pages. Launch week CPA 2x plan. Lesson: seasonality phasing requires readiness gate — spend phase cannot exceed execution readiness.",
        },
      ],
    }),
    buildSection({
      number: "7.6",
      title: "Marginal Return Optimisation",
      subtitle: "Diminishing returns curves, saturation points, and when to stop scaling a channel",
      take: "Marginal return optimisation finds the spend level where the next dollar earns less incremental return than the same dollar would earn elsewhere. AI models saturation curves from historical data; marketers set minimum acceptable marginal ROAS and reallocation triggers. Scaling past saturation destroys blended efficiency — the most common budget mistake in growth-phase companies.",
      why: "Growth mandates to 'double spend on what works' ignore diminishing returns. Marginal analysis prevents pouring budget into saturated channels while starving channels with headroom.",
      paragraphs: [
        [
          s("Estimate saturation curves from spend-efficiency history. "),
          x(
            "Plot weekly spend versus incremental conversions per channel. AI fits S-curves or piecewise linear models. Identify knee point where marginal return drops below portfolio average.",
            "Curves need 12+ months variance in spend levels — constant spend provides no curve data.",
          ),
          s(" Validate curves with incrementality at saturation boundary — model hypothesis, test confirms."),
        ],
        [
          s("Marginal thresholds vary by objective. "),
          x(
            "Growth mode: accept marginal ROAS 0.8 on new customer acquisition. Profit mode: require marginal ROAS 1.5+. AI recommends scale-up or scale-down against declared threshold — not universal optimum.",
            "Threshold is strategic input; marginal math is tactical execution.",
          ),
          s(" Document marginal thresholds in budget policy — aligned with CFO on acceptable CAC payback."),
        ],
        [
          s("Cross-channel marginal equalisation is the allocation ideal. "),
          x(
            "In theory, allocate until marginal ROAS equal across channels. In practice, constraints, lag differences, and strategic minimums prevent pure equalisation. AI proposes moves toward equilibrium; governance approves.",
            "Perfect equalisation is asymptotic — quarterly moves toward balance beat daily churn.",
          ),
          s(" Quarterly marginal review with MMM cross-check — two methods should directionally agree."),
        ],
      ],
      examples: [
        {
          title: "Search saturation identified",
          body: "A DTC brand scaling Google Search found average ROAS stable at 4x from $50K to $200K monthly. Marginal analysis showed knee at $120K — above that, marginal ROAS 1.1x. Reallocated $80K to Meta where marginal ROAS 2.4x at current spend. Blended ROAS improved 18%. Leadership 'double search' mandate overridden by data.",
        },
        {
          title: "Incrementality confirms saturation",
          body: "MMM suggested LinkedIn saturation; leadership sceptical. Incrementality test at current spend: 1.0x iROAS. Test at +30% spend: 0.6x iROAS. Saturation confirmed. Budget held flat; incremental dollars shifted to podcast sponsorship with 1.4x measured lift.",
        },
        {
          title: "Premature saturation call",
          body: "AI model declared Meta saturated after 3-month spend plateau — recommended cut. Market context: competitor exited, impression share available. Manual review extended Meta 20%; marginal ROAS improved. Lesson: models miss exogenous shifts — marketer context overrides automated saturation flags.",
        },
      ],
    }),
    buildSection({
      number: "7.7",
      title: "Cross-Channel Reallocation in Flight",
      subtitle: "Live budget shifts with governance, pacing recalculation, and performance triggers",
      take: "Cross-channel reallocation moves budget between platforms during the planning period based on performance triggers, market changes, or opportunity signals. AI recommends shifts with impact modelling; governance defines approval thresholds, maximum shift percentages, and cooling-off periods. Reallocation is a discipline — not daily panic optimisation.",
      why: "Rigid budgets waste opportunity; unconstrained daily reallocation creates chaos and auction instability. Governed reallocation balances agility with predictability.",
      paragraphs: [
        [
          s("Reallocation governance tiers by shift size. "),
          x(
            "Tier 1: <10% shift within channel — channel manager approves. Tier 2: 10–25% cross-channel — marketing director approves. Tier 3: >25% — CMO and finance sign-off. AI recommends; humans approve per tier.",
            "Governance prevents both paralysis and reckless mid-month pivots.",
          ),
          s(" Reallocation log with rationale — audit trail for post-hoc learning."),
        ],
        [
          s("Minimum observation windows before reallocation. "),
          x(
            "B2B: 2-week minimum before shift on CPA grounds. E-commerce: 7-day minimum except tracking emergencies. AI flags anomalies faster but governance enforces observation — avoids reacting to noise.",
            "Daily reallocation based on platform ROAS creates perpetual churn without learning.",
          ),
          s(" Emergency override for tracking failure — documented separately from performance shifts."),
        ],
        [
          s("Reallocation impact model includes transition costs. "),
          x(
            "New channel ramp: learning phase CPA elevation for 1–2 weeks. Reduced channel: lost auction momentum if restarted later. AI models net impact, not just instantaneous ROAS comparison.",
            "Ignoring ramp costs makes every shift look profitable on spreadsheet.",
          ),
          s(" Cooling-off period: channel shifted away from cannot receive funds back for 14 days minimum."),
        ],
      ],
      examples: [
        {
          title: "Governed Q2 reallocation",
          body: "A fintech company's Tier 2 trigger fired: Google CPA 25% above band for 3 weeks. AI modelled 15% shift to LinkedIn with ramp cost. Marketing director approved. Pacing recalculated on both platforms. Month-end blended CPA improved 11%. Shift logged with incrementality context — LinkedIn had headroom per marginal analysis.",
        },
        {
          title: "Panic reallocation reversed",
          body: "Channel manager shifted 30% of Meta budget to Google after one bad week — no governance tier. Google couldn't absorb spend efficiently; Meta lost learning data. Following week Meta recovered. Net month negative versus plan. Policy enacted: Tier 2+ approval mandatory; 14-day cooling-off.",
        },
        {
          title: "Opportunity reallocation — competitor exit",
          body: "Competitive intelligence flagged major competitor pausing paid search. AI opportunity alert with impression share data. Tier 3 fast-track approval for 20% search increase. Ramp cost modelled at 1 week elevated CPA. Captured demand at 1.6x marginal ROAS during 6-week competitor gap. Time-sensitive reallocation justified by intelligence, not noise.",
        },
      ],
    }),
    buildSection({
      number: "7.8",
      title: "The Marketer Decision Lens — Budget Ownership & Accountability",
      subtitle: "Who decides, what triggers action, and how AI recommendations enter the governance process",
      take: "Before accepting AI budget recommendations, run four checks: (1) are marginal returns and saturation curves current — not stale models? (2) does reallocation respect governance tier and pacing constraints? (3) is seasonality and readiness aligned — can execution absorb the spend? (4) is accountability clear — who owns the decision if the shift fails? AI recommends; marketers approve with documented rationale. Budget ownership is a governance design problem, not an algorithm problem.",
      why: "AI makes reallocation recommendations cheap — creating risk of either ignoring good advice or blindly following bad advice. Ownership lens connects recommendations to accountable decision-makers.",
      paragraphs: [
        [
          s("Check one: model freshness and context. "),
          x(
            "Marginal curves, seasonality indices, and incrementality data older than one quarter need refresh before major shifts. Exogenous events (competitor exit, platform policy change) override model recommendations.",
            "Stale model + AI recommendation = confident wrong decision.",
          ),
          s(" Model refresh date visible on every AI budget recommendation."),
        ],
        [
          s("Check two: governance and pacing compliance. "),
          x(
            "Shift size matches approval tier. Pacing recalculated. Cooling-off rules respected. AI recommendation includes governance classification automatically.",
            "Bypassing governance for 'urgent' shifts trains organisation to ignore process.",
          ),
          s(" No reallocation without pacing impact statement."),
        ],
        [
          s("Checks three and four: execution readiness and named owner. "),
          x(
            "Creative, landing page, and inventory ready for increased spend. Named approver on every shift — not 'the AI recommended.' Post-shift review at 30 days with accountable owner presenting results.",
            "Accountability without review is theatre. Review without accountability is blameless.",
          ),
          s(" Budget ownership matrix: channel, approver tier, trigger type — published and trained."),
        ],
      ],
      examples: [
        {
          title: "Ownership matrix deployment",
          body: "A multi-brand retailer published budget ownership matrix: channel managers Tier 1, regional directors Tier 2, VP marketing Tier 3. AI recommendations auto-tagged with tier. Average reallocation decision time dropped from 8 days to 2 — not because AI was faster, but because approver was unambiguous. Failed shift in Q3 owned by named director — post-mortem improved trigger calibration.",
        },
        {
          title: "Readiness gate blocked shift",
          body: "AI recommended 25% increase to TikTok based on marginal headroom. Lens check: creative pipeline had 2 weeks of assets, need 6 for scale. Shift deferred; creative production accelerated. Shift executed 3 weeks later at modelled efficiency. Premature shift would have exhausted budget on fatigued creative.",
        },
        {
          title: "Stale model override",
          body: "AI recommended cutting YouTube 20% based on Q2 saturation model. Marketer flagged: model pre-dated major creative refresh that improved efficiency 30%. Model refreshed; recommendation reversed to hold. 30-day post-refresh review showed marginal ROAS above threshold. Lens check one prevented wrong cut.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Google branded search shows 6x average ROAS. Leadership wants to double search budget. What should you analyse first?",
      options: [
        "Average ROAS alone — double immediately.",
        "Marginal ROAS and saturation curve — average masks diminishing returns at scale.",
        "Competitor logo colours.",
        "Last month's impression share only.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Marginal returns determine allocation, not average. Re-read sections 7.2 and 7.6.",
      wrongFeedback:
        "Average ROAS ignores saturation. Check marginal returns first. Re-read sections 7.2 and 7.6.",
    },
    {
      q: "Monthly spend is 20% ahead of plan by day 12. What is the first pacing action?",
      options: [
        "Ignore until month end.",
        "Review pacing mode and daily caps — adjust to align with plan before budget exhausts early.",
        "Triple spend to finish faster.",
        "Cancel all campaigns.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Pacing alerts need same-day response. Re-read section 7.4.",
      wrongFeedback:
        "Front-loaded spend wastes late-month opportunity. Adjust pacing. Re-read section 7.4.",
    },
    {
      kind: "order",
      q: "Order the budget allocation workflow from planning to live optimisation.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Forecast scenarios with seasonality and assumptions",
        "Allocate channel envelopes by marginal returns",
        "Pace daily spend to monthly plan",
        "Reallocate in flight with governance triggers",
      ],
      correctFeedback:
        "Right. Forecast → allocate → pace → reallocate with governance. Re-read sections 7.1–7.8.",
      wrongFeedback:
        "Start with forecast scenarios. Governance governs reallocation. Re-read sections 7.1–7.8.",
    },
    {
      kind: "categorize",
      q: "Sort each practice into the correct budget layer.",
      categories: ["Planning & forecast", "Allocation", "Pacing & seasonality", "Governance"],
      items: [
        { text: "Three-scenario Monte Carlo forecast for board.", category: 0 },
        { text: "Marginal ROAS equalisation across channels.", category: 1 },
        { text: "January budget phasing for B2B seasonality.", category: 2 },
        { text: "Tier 2 approval for 15% cross-channel shift.", category: 3 },
        { text: "8% test reserve for new channel pilots.", category: 1 },
        { text: "AI alert on 10% pacing variance mid-month.", category: 2 },
      ],
      correctFeedback:
        "Right. Planning = scenarios. Allocation = marginal mix. Pacing = daily rhythm and seasonality. Governance = approvals. Re-read sections 7.1–7.8.",
      wrongFeedback:
        "Match each practice to planning, allocation, pacing, or governance. Re-read sections 7.1–7.8.",
    },
    {
      q: "AI recommends 25% budget shift based on a saturation model from 9 months ago, before a major creative refresh. What does the decision lens recommend?",
      options: [
        "Execute immediately — AI knows best.",
        "Refresh model with post-refresh data before approving — stale models miss exogenous improvements.",
        "Never reallocate.",
        "Shift 50% instead.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Model freshness is check one. Re-read sections 7.6 and 7.8.",
      wrongFeedback:
        "Stale models need refresh before major shifts. Re-read sections 7.6 and 7.8.",
    },
    {
      q: "A channel manager shifts 30% of budget cross-channel without tier approval after one bad week. What governance failure occurred?",
      options: [
        "None — speed is everything.",
        "Bypassed governance tier, minimum observation window, and likely pacing recalculation.",
        "Should have shifted 100%.",
        "AI should never be involved.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Reallocation requires governance, observation windows, and pacing. Re-read sections 7.7 and 7.8.",
      wrongFeedback:
        "Cross-channel shifts need tier approval and observation periods. Re-read sections 7.7 and 7.8.",
    },
  ],
});
