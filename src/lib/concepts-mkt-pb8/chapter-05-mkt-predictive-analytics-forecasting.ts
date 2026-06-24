import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter05MktPredictiveAnalyticsForecasting = buildChapter({
  slug: "mkt-predictive-analytics-forecasting",
  number: 5,
  shortTitle: "Predictive Analytics & Forecasting",
  title: "Predictive Analytics & Forecasting — Pipeline Models, Demand Signals, and Scenario Planning That Inform Budget Decisions",
  readingMinutes: 24,
  summary:
    "Predictive analytics translates historical marketing and revenue data into forward-looking signals — pipeline forecasts, churn risk, demand curves, and budget scenarios. AI accelerates feature engineering, model training, and scenario simulation, but forecast accuracy depends on marketer-owned foundations: clean CRM stage definitions, consistent UTM governance, labelled outcome data, and explicit confidence intervals leadership understands. Teams that deploy black-box predictions without governance chase phantom precision; teams that pair models with human judgment and refresh cadence make allocation decisions with defensible ranges.",
  keyTakeaway:
    "Forecasting is a decision system, not a dashboard vanity metric. The sequence that wins: define forecast objects and horizons → engineer features from governed data → train and validate models with holdout periods → publish ranges with assumptions → run scenario planning in budget cycles → apply the decision lens before scaling AI model complexity. AI accelerates computation; marketers own data quality, assumption transparency, and action thresholds.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "5.1",
      title: "Forecast Objects & Planning Horizons",
      subtitle: "Pipeline, demand, churn, and spend — what you predict, for whom, and on what cadence",
      take: "Forecast architecture starts with explicit objects: marketing-sourced pipeline (MQL → SQL → opp → close), channel demand (leads, revenue, CAC), customer churn and expansion, and media spend efficiency. Each object needs a horizon (weekly tactical, monthly operational, quarterly strategic) and an audience (campaign manager, CMO, CFO). AI can model all of them — marketers define which forecasts drive budget gates versus operational nudges.",
      why: "Unscoped forecasting produces numbers nobody trusts. Object and horizon clarity prevents the common failure mode: a daily model presented in a quarterly board deck without reconciling to finance actuals.",
      paragraphs: [
        [
          s("Map forecast objects to decision rights. "),
          x(
            "Pipeline forecast: sales and marketing joint accountability, weekly refresh, used for campaign pause/scale. Channel demand: media team, daily/weekly, used for bid and budget pacing. Revenue forecast: finance partnership, monthly, used for headcount and board reporting. AI models each layer — marketers document who acts on which output.",
            "One forecast for all stakeholders creates conflicting actions — pipeline ops cuts spend while finance plans hiring on optimistic revenue.",
          ),
          s(" Forecast charter signed by marketing, sales ops, and finance — objects, owners, refresh SLA."),
        ],
        [
          s("Horizon length must match signal decay. "),
          x(
            "B2B enterprise: 90–180 day pipeline horizon with stage-velocity features. DTC: 7–28 day demand with promotional and seasonality features. Churn: 30–90 day risk scores for retention campaigns. AI auto-suggests lag structures — marketers validate against known sales cycles.",
            "30-day pipeline forecast for 9-month enterprise cycles is theatre — horizon mismatch guarantees error.",
          ),
          s(" Document minimum history required per object — typically 18–24 months for seasonal B2C, 12+ quarters for B2B."),
        ],
        [
          s("Granularity trades accuracy for actionability. "),
          x(
            "Company-level revenue forecast may be accurate; channel-level forecasts wider but actionable for budget shifts. AI hierarchical models reconcile roll-ups — marketers set minimum confidence for channel reallocation decisions.",
            "Over-granular forecasts with wide error bands invite false precision at campaign level.",
          ),
          s(" Publish confidence bands at the granularity decisions require — not every forecast needs SKU-level detail."),
        ],
      ],
      examples: [
        {
          title: "Object split — pipeline vs revenue",
          body: "Marketing built one 'revenue forecast' model mixing pipeline and closed-won. Sales used it for quota; finance used it for board — constant reconciliation fights. Split into pipeline velocity model (marketing + sales ops, weekly) and revenue recognition model (finance, monthly). Forecast error MAPE dropped from 28% to 14% at company level; channel budget changes dropped 40% fewer fire drills.",
        },
        {
          title: "Horizon fix — enterprise SaaS",
          body: "CMO presented 30-day lead forecast to board; actual pipeline impact visible at 120 days. Rebuilt with 90-day rolling pipeline object and stage-conversion features. Board deck shifted to range-based pipeline outlook; hiring decisions tied to 6-month scenario bands. Leadership trust score on marketing data rose in annual survey.",
        },
        {
          title: "Granularity gate — paid media",
          body: "AI produced keyword-level spend forecasts with ±60% error. Media team ignored outputs. Rolled to channel-campaign type level with ±18% bands — sufficient for weekly reallocation between prospecting and retargeting. Model adoption went from 12% to 78% of weekly media reviews.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-ma-ch5-predictive-models",
      type: "nested",
      title: "Predictive Analytics Model Stack",
      caption:
        "Governed data sources → feature engineering → model training and validation → confidence intervals → scenario planning → budget and campaign decisions → actuals feedback → model refresh.",
    }),
    buildSection({
      number: "5.2",
      title: "Feature Engineering & Data Readiness",
      subtitle: "CRM stages, channel taxonomy, seasonality, and external signals — garbage in, confident wrong out",
      take: "Predictive model quality is 80% feature engineering: stage duration, touchpoint sequences, campaign membership, firmographic enrichment, promotional flags, competitive activity proxies, and macro seasonality. AI automates feature discovery and lag selection — marketers govern definitions so 'MQL' means the same thing in training data and live scoring.",
      why: "Models trained on inconsistent CRM hygiene learn noise. Feature governance is the highest-leverage investment before algorithm sophistication.",
      paragraphs: [
        [
          s("Standardise outcome labels before modelling. "),
          x(
            "Pipeline: opp created, stage advanced, closed-won with consistent stage names. Churn: defined cancellation event, not payment failure ambiguous cases. Demand: attributed conversion with documented attribution window. AI cannot fix label drift across regions.",
            "Training on 'MQL' definitions that changed quarterly teaches the model your process chaos, not buyer intent.",
          ),
          s(" Quarterly label audit with sales ops — freeze definitions during model training windows."),
        ],
        [
          s("Engineer lag and sequence features deliberately. "),
          x(
            "Examples: days since last email, webinar attendance before opp, ad impression frequency 14 days pre-conversion, content depth score. AI suggests candidate features — marketers prune collinear and leaky features (post-conversion signals).",
            "Data leakage — using future information in training — produces accurate backtests and useless live scores.",
          ),
          s(" Feature catalogue documented with business definition and refresh cadence."),
        ],
        [
          s("External signals augment internal data. "),
          x(
            "Industry indices, Google Trends, weather for seasonal categories, competitor pricing scrapes, hiring data for B2B intent. AI merges external feeds — marketers assess signal-to-noise before production.",
            "External data without internal validation adds complexity without lift — test incrementally.",
          ),
          s(" Pilot external features in holdout period — promote only if validation MAPE improves beyond noise."),
        ],
      ],
      examples: [
        {
          title: "Stage definition fix",
          body: "Pipeline model underperformed — investigation showed 'SQL' meant different things in EMEA vs NA. Standardised SQL criteria globally; retrained with 14 months clean data. Stage conversion predictions improved 22 points AUC; sales trusted lead scores for first time.",
        },
        {
          title: "Leakage catch — post-demo feature",
          body: "AI feature importance flagged 'demo completed' as top predictor for opp creation — but feature was populated after opp creation in CRM. Removed leaky features; live model accuracy dropped on backtest but rose in production. Lesson: backtest vanity vs production truth.",
        },
        {
          title: "Seasonality feature — retail",
          body: "DTC brand ignored promotional calendar in demand model — Black Friday treated as anomaly. Added promo flags and Google Trends category index. November forecast error cut from 41% to 19%; inventory and media pacing aligned for first time.",
        },
      ],
    }),
    buildSection({
      number: "5.3",
      title: "Model Selection & Validation",
      subtitle: "Regression, survival, classification, and ensemble methods — fit method to forecast object",
      take: "Model choice follows forecast type: logistic regression or gradient boosting for conversion probability; survival models for time-to-stage; ARIMA or Prophet for univariate demand; hierarchical Bayesian for sparse segment forecasts. AI platforms auto-select algorithms — marketers require walk-forward validation, holdout periods, and error metrics aligned to business cost (under-forecast vs over-forecast asymmetry).",
      why: "Wrong model class produces smooth charts that fail on regime change. Validation discipline separates deployable forecasts from data science experiments.",
      paragraphs: [
        [
          s("Walk-forward validation mimics production. "),
          x(
            "Train on months 1–12, test on 13; train on 1–13, test on 14 — rolling windows. Random train/test splits inflate accuracy on time-series marketing data. AI pipelines automate walk-forward — marketers review error by segment and season.",
            "Random splits on seasonal B2C data produce overconfident models that fail every Q4.",
          ),
          s(" Minimum 3 holdout windows before production — document worst-case window performance."),
        ],
        [
          s("Choose error metrics for decision asymmetry. "),
          x(
            "Over-forecasting pipeline may cause over-hiring; under-forecasting may starve growth. Weighted MAPE, quantile loss for range forecasts, or custom cost functions. AI optimises default metrics — marketers override when business cost asymmetric.",
            "RMSE alone treats over and under forecast equally — rarely true in marketing budget decisions.",
          ),
          s(" Present error distributions to stakeholders — not single accuracy number."),
        ],
        [
          s("Champion/challenger before full rollout. "),
          x(
            "Production model (champion) runs alongside new model (challenger) for 4–8 weeks. Compare live error, calibration, and decision impact. AI makes challenger cheap — governance prevents silent swap without review.",
            "Big-bang model replacement without parallel run risks budget decisions on unvalidated logic.",
          ),
          s(" Rollback procedure documented — revert to champion within 24 hours if live error breaches threshold."),
        ],
      ],
      examples: [
        {
          title: "Survival model — stage velocity",
          body: "Classification model predicted 'will advance' but not when — sales could not prioritise. Switched to survival analysis for days-in-stage. Top decile acceleration list improved rep connect rate 31%; model adopted in weekly sales standup.",
        },
        {
          title: "Asymmetric loss — inventory",
          body: "DTC over-forecast error cost 2x under-forecast (excess inventory). Custom quantile model targeted 60th percentile demand. Stockouts down 18%; write-offs down 12% vs mean forecast approach.",
        },
        {
          title: "Challenger win — regime change",
          body: "Post-product-launch, champion model error doubled. Challenger trained with launch dummy variables and refreshed creative features beat champion in 6-week parallel run. Controlled swap with finance sign-off — Q2 forecast within 8% actual vs 22% prior quarter.",
        },
      ],
    }),
    buildSection({
      number: "5.4",
      title: "Pipeline & Revenue Forecasting",
      subtitle: "Stage conversion, velocity, and marketing-sourced contribution — forecasts sales and finance will use",
      take: "Pipeline forecasting combines historical stage conversion rates, velocity distributions, seasonality, and marketing activity features to project opp creation, advancement, and close. AI updates conversion priors by segment — marketers reconcile marketing-sourced pipeline to CRM categories finance recognises. Joint forecast reviews with sales ops prevent marketing-owned models sales ignore.",
      why: "Pipeline forecast disconnected from sales methodology becomes shelfware. Co-ownership and CRM integration are adoption prerequisites.",
      paragraphs: [
        [
          s("Bottom-up and top-down reconciliation. "),
          x(
            "Bottom-up: sum of opp-level probabilities. Top-down: segment trend models. AI flags when bottom-up diverges >15% from top-down — signals data quality or market shift. Marketers facilitate reconciliation meeting, not hide the gap.",
            "Publishing only bottom-up when top-down diverges sets marketing up for blame when actuals land.",
          ),
          s(" Reconciliation template in monthly pipeline review — documented adjustment rationale."),
        ],
        [
          s("Marketing activity features in pipeline models. "),
          x(
            "Campaign membership, content engagement depth, ABM tier, event attendance, paid media impression lag. Isolate marketing-sourced contribution vs sales outbound — different forecast objects. AI attributes incremental pipeline lift from activity features.",
            "Blending all pipeline into one model obscures marketing ROI from forecast — finance asks 'what did marketing add?'",
          ),
          s(" Report marketing-sourced forecast range separate from total pipeline — accountability clarity."),
        ],
        [
          s("Scenario toggles for campaign decisions. "),
          x(
            "What-if: +20% paid spend, +1 webinar/month, competitor launch shock. AI simulates pipeline impact with uncertainty bands. Marketers use scenarios in budget requests — not single-point promises.",
            "Single-point pipeline promises in budget season create trust debt when variance hits.",
          ),
          s(" Standard scenario library: base, growth, conservative — aligned with finance planning."),
        ],
      ],
      examples: [
        {
          title: "Reconciliation ritual",
          body: "Marketing pipeline forecast exceeded sales VP bottom-up by 24%. Joint session found marketing counted recycled opps. Definition fix plus shared model. Next quarter variance 9%; sales began using marketing forecast in territory planning.",
        },
        {
          title: "Activity attribution in forecast",
          body: "ABM tier-1 accounts with 3+ marketing touches showed 2.4x opp creation vs model baseline. Feature promoted; forecast module highlighted 'touch gap' accounts. Marketing-sourced pipeline up 19% without increasing spend — reallocation from low-touch segments.",
        },
        {
          title: "Scenario — budget defence",
          body: "CFO challenged 15% marketing increase. Growth scenario showed pipeline range +12–18% with spend; conservative +4–7%. Board approved midpoint with gate at Q2 review. Scenario language prevented binary yes/no fight.",
        },
      ],
    }),
    buildSection({
      number: "5.5",
      title: "Demand & Channel Forecasting",
      subtitle: "Lead volume, CAC curves, and media efficiency — tactical pacing with strategic envelopes",
      take: "Demand forecasting projects leads, conversions, revenue, and CAC by channel over weekly and monthly horizons. AI incorporates spend lag, creative fatigue signals, auction seasonality, and promotional calendar. Outputs feed media pacing dashboards and MMM validation — marketers set guardrails when forecast breaches efficiency thresholds.",
      why: "Daily platform optimisation without demand forecast context overreacts to noise. Forecast bands stabilise pacing decisions and reduce whipsaw budget shifts.",
      paragraphs: [
        [
          s("Model spend-response curves per channel. "),
          x(
            "Diminishing returns: incremental leads per dollar flatten at spend levels. AI fits response curves from historical spend-outcome pairs — marketers cap recommendations where marginal CAC exceeds LTV threshold.",
            "Linear extrapolation of last week's ROAS causes overspend into inefficient auction zones.",
          ),
          s(" Refresh curves monthly — auction dynamics and creative mix shift response shapes."),
        ],
        [
          s("Separate branded and non-branded demand. "),
          x(
            "Branded search demand correlates with awareness investment with lag. Non-branded more spend-elastic. Combined model misattributes branded lift to paid search budget. AI hierarchical models split — marketers align with finance revenue categories.",
            "Treating branded search as incremental demand overstates paid search forecast at budget time.",
          ),
          s(" Branded forecast tied to SOV and PR calendar features where available."),
        ],
        [
          s("Fatigue and creative rotation signals. "),
          x(
            "Frequency caps, CTR decay, creative age in days — early warning features for efficiency decline. AI flags campaigns entering fatigue zone before CPA spikes. Marketers trigger creative refresh workflow from forecast alerts.",
            "Reactive CPA management after spike wastes half the inefficient spend — predictive fatigue features buy lead time.",
          ),
          s(" Link forecast alerts to creative ops SLA — alert without production capacity is noise."),
        ],
      ],
      examples: [
        {
          title: "Response curve — paid social",
          body: "Team scaled Meta 40% based on linear trend — CAC rose 55% in week three. Response curve model showed knee at prior spend level. Rolled back to knee plus 8%; marginal volume captured at acceptable CAC. Weekly pacing now uses curve not trend line.",
        },
        {
          title: "Branded split — search forecast",
          body: "Combined search model over-forecast Q1 branded after TV flight ended. Split model used TV GRP lag on branded; non-branded used spend elasticity. Forecast accuracy improved 16 points; finance trusted search envelope for planning.",
        },
        {
          title: "Fatigue alert — creative ops",
          body: "Forecast flagged creative age >21 days with frequency >8 on top prospecting ad set 5 days before CPA breach. Creative sprint produced 4 variants; CPA stabilised. Alert-to-action SLA 72 hours now in media playbook.",
        },
      ],
    }),
    buildSection({
      number: "5.6",
      title: "Churn, Retention & LTV Prediction",
      subtitle: "Risk scoring, expansion propensity, and cohort economics — forecasts that protect revenue base",
      take: "Retention forecasting scores churn risk and expansion propensity from product usage, support tickets, billing behaviour, and marketing engagement. AI classification models prioritise accounts for CS and lifecycle campaigns — marketers own intervention playbooks and measure incremental save rate, not just model AUC.",
      why: "Churn models without action workflows are analytics vanity. Forecast value is realised when scores trigger plays with measured lift.",
      paragraphs: [
        [
          s("Define churn and expansion events precisely. "),
          x(
            "Churn: subscription cancelled vs paused vs downgraded — separate models or multi-class. Expansion: seat add, tier upgrade, cross-sell SKU. Label consistency across billing and CRM required for training.",
            "Ambiguous churn labels train models that CS cannot act on — 'risky' accounts with no clear intervention.",
          ),
          s(" Align event definitions with finance revenue recognition — forecast object matches P&L impact."),
        ],
        [
          s("Prioritise by expected revenue at risk. "),
          x(
            "Risk score × ARR = priority queue. AI may over-index small accounts with high churn probability. Marketers weight by revenue and strategic logo value — custom priority rules on model output.",
            "Uniform churn alerts swamp CS — revenue-weighted prioritisation focuses retention spend.",
          ),
          s(" Monthly review: precision at top decile for revenue saved, not global accuracy."),
        ],
        [
          s("Measure incremental save from interventions. "),
          x(
            "Holdout or propensity-matched test: contacted vs not for same risk band. AI estimates uplift from lifecycle campaigns — marketers prove retention marketing ROI to finance.",
            "Contacting all high-risk accounts without holdout confounds model value with natural retention.",
          ),
          s(" Retention forecast dashboard shows scored, contacted, saved, incremental ARR — closed loop."),
        ],
      ],
      examples: [
        {
          title: "Revenue-weighted queue",
          body: "CS ignored churn scores — top 100 were mostly SMB. Re-ranked by risk × ARR; top 50 included 8 enterprise logos. Save rate on contacted enterprise 42% vs 11% prior spray approach. CS headcount request approved with forecast ROI proof.",
        },
        {
          title: "Expansion model — lifecycle",
          body: "Usage features predicted seat expansion 60 days ahead. Marketing triggered executive webinar series for expansion cohort; incremental upgrade rate 2.3x vs control. Model moved from 'interesting' to lifecycle automation trigger.",
        },
        {
          title: "Holdout proof — email save campaign",
          body: "High-risk cohort: 50% received save offer, 50% holdout. Incremental save 8.2 points above natural retention in band. Finance accepted retention marketing budget increase with causal evidence.",
        },
      ],
    }),
    buildSection({
      number: "5.7",
      title: "Scenario Planning & Uncertainty Communication",
      subtitle: "Ranges, sensitivity analysis, and narrative for leadership — honesty beats false precision",
      take: "Scenario planning translates model outputs into decision-ready ranges: base, upside, downside with explicit assumptions (conversion rate shift, spend level, competitive shock). AI runs Monte Carlo simulations across correlated variables — marketers narrate assumptions in language CFOs trust and update scenarios when actuals diverge from base.",
      why: "Single-number forecasts create organisational brittleness. Ranges with documented assumptions enable agile reallocation when reality lands in the tails.",
      paragraphs: [
        [
          s("Publish assumptions alongside numbers. "),
          x(
            "Assumption log: SQL-to-opp rate holds at 28% ±3pts; paid CAC stable; no major competitor launch. AI sensitivity ranks which assumptions swing outcome most — marketers monitor leading indicators for top drivers.",
            "Forecast without assumptions is unfalsifiable — when wrong, nobody learns which belief failed.",
          ),
          s(" Assumption log versioned in forecast deck — QBR reviews assumption drift not just variance."),
        ],
        [
          s("Correlate scenarios across functions. "),
          x(
            "Marketing demand scenario feeds sales capacity scenario feeds finance hiring. AI joint simulation prevents marketing upside scenario while sales plans flat hiring. Cross-functional scenario workshop quarterly.",
            "Siloed scenarios — marketing aggressive, finance conservative — surface as execution conflict mid-quarter.",
          ),
          s(" Single scenario taxonomy adopted company-wide: base/growth/stress naming consistent."),
        ],
        [
          s("Variance post-mortems feed model refresh. "),
          x(
            "When actuals miss base: decompose variance — data issue, assumption wrong, model drift, external shock. AI automates variance attribution drafts — marketers validate before feeding retrain triggers.",
            "Blaming 'market' without decomposition repeats same forecast error next quarter.",
          ),
          s(" Forecast accuracy KPI for marketing ops — MAPE by object, not model R-squared in isolation."),
        ],
      ],
      examples: [
        {
          title: "Assumption log save",
          body: "Q2 miss traced to assumption 'webinar-to-SQL rate stable' — rate dropped 40% after format change. Assumption log updated; model retrained with format feature. Q3 base scenario landed inside range for first time in year.",
        },
        {
          title: "Joint scenario workshop",
          body: "Stress scenario: competitor price cut 20%. Marketing modelled demand hit; sales modelled win rate; finance modelled margin. Agreed contingency: pause 15% top-funnel, intensify battle card programme. Stress did not materialise but contingency reduced panic when rumor emerged.",
        },
        {
          title: "Variance decomposition",
          body: "Pipeline miss 18% — decomposition showed 11% data (CRM sync lag), 4% assumption (seasonality), 3% model drift. Fixed sync before retrain — avoided overfitting to one-quarter noise.",
        },
      ],
    }),
    buildSection({
      number: "5.8",
      title: "The Marketer Decision Lens — Forecast Investment",
      subtitle: "When to fix data, add models, or scale AI — prioritising decision impact over sophistication",
      take: "Before expanding predictive analytics headcount or AI forecasting vendors, run four checks: (1) are forecast objects, horizons, and owners documented — architecture before algorithms? (2) is training data governed with walk-forward validation — quality before complexity? (3) do forecasts publish ranges with assumptions leadership uses in decisions — communication before dashboards? (4) do scenarios tie to budget and campaign actions with variance feedback — closed loop? Invest in data and reconciliation first. Scale AI when adoption and accuracy thresholds hold.",
      why: "AI makes model building cheap — tempting teams to deploy scores nobody acts on. This lens prioritises investments that improve allocation and cross-functional trust.",
      paragraphs: [
        [
          s("Check one: object and ownership clarity. "),
          x(
            "No signed forecast charter or sales ignores marketing pipeline model → fix co-ownership before new algorithms. Multiple conflicting forecasts in exec meetings → consolidate objects before vendor POC.",
            "New model on messy definitions multiplies confusion at machine speed.",
          ),
          s(" Charter workshop gate precedes predictive analytics platform expansion."),
        ],
        [
          s("Check two: validation and leakage discipline. "),
          x(
            "Backtest accuracy >> live accuracy → leakage or random split problem — fix before production. No walk-forward validation → methodology before headcount.",
            "Impressive offline metrics with no production parallel run is experimentation, not forecasting.",
          ),
          s(" Champion/challenger required for any model touching budget gates."),
        ],
        [
          s("Checks three and four: communication and action loops. "),
          x(
            "Forecasts presented as single points → range and assumption training before new stakeholder audiences. Scores without intervention playbook → workflow before churn model scale.",
            "Decision impact is the product — not model AUC on a slide.",
          ),
          s(" Run lens in quarterly marketing-finance sync with sales ops present."),
        ],
      ],
      examples: [
        {
          title: "Vendor deferred — data first",
          body: "AI forecasting vendor promised 95% accuracy. Lens: CRM stage definitions inconsistent 14 months, no walk-forward protocol. Deferred vendor; 90-day data governance sprint. Pilot after governance — live MAPE 16% vs vendor demo 8% on clean holdout — realistic trust established.",
        },
        {
          title: "Model complexity blocked",
          body: "Data science proposed ensemble of 12 models. Lens: champion logistic model within 2 points MAPE of ensemble, ops team cannot explain ensemble. Kept interpretable champion; budget decisions faster with stakeholder comprehension.",
        },
        {
          title: "Churn scale gated",
          body: "Request to email all high-risk accounts. Lens: no holdout proof, CS capacity 200 accounts/month. Ran holdout test on 500 accounts first; proved 8 point lift; scaled with revenue-ranked queue only.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Pipeline forecasts consistently miss actuals and sales distrusts marketing numbers. What should marketing fix first?",
      options: [
        "Deploy a more complex ensemble AI model immediately.",
        "Define forecast objects and horizons, govern CRM labels, and reconcile with sales ops before algorithm changes.",
        "Present single-point forecasts with more confidence.",
        "Add ten external data feeds without validation.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Architecture, label governance, and reconciliation precede model sophistication. Re-read sections 5.1 and 5.2.",
      wrongFeedback:
        "Fix objects, data definitions, and co-ownership before new models. Re-read sections 5.1 and 5.2.",
    },
    {
      q: "A model shows excellent backtest accuracy but poor live performance. What likely failed?",
      options: [
        "Stakeholders prefer ranges over point estimates.",
        "Data leakage or improper train/test splits — validation methodology.",
        "Scenario planning with finance.",
        "Revenue-weighted churn prioritisation.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Walk-forward validation and leakage checks separate deployable models from vanity backtests. Re-read section 5.3.",
      wrongFeedback:
        "Backtest/live gaps usually indicate leakage or invalid validation. Re-read section 5.3.",
    },
    {
      kind: "order",
      q: "Order the predictive analytics system from first step to last.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Define forecast objects, horizons, and owners",
        "Engineer features from governed data and validate models",
        "Publish ranges with scenarios for budget decisions",
        "Decompose variance and refresh models from actuals",
      ],
      correctFeedback:
        "Right. Define → engineer/validate → scenario publish → feedback refresh. Re-read sections 5.1–5.8.",
      wrongFeedback:
        "Start with forecast architecture. Variance feedback closes the loop. Re-read sections 5.1–5.8.",
    },
    {
      kind: "categorize",
      q: "Sort each practice into the correct forecasting layer.",
      categories: ["Architecture & data", "Modelling & validation", "Decision & scenarios", "Improvement & lens"],
      items: [
        { text: "Forecast charter with sales and finance.", category: 0 },
        { text: "Walk-forward validation with holdout windows.", category: 1 },
        { text: "Base/growth/stress scenario library.", category: 2 },
        { text: "Variance decomposition post-mortems.", category: 3 },
        { text: "CRM stage label standardisation.", category: 0 },
        { text: "Champion/challenger parallel run.", category: 1 },
      ],
      correctFeedback:
        "Right. Architecture = objects and data. Modelling = validation. Decision = scenarios. Improvement = lens and feedback. Re-read sections 5.1–5.8.",
      wrongFeedback:
        "Match each practice to architecture, modelling, decision, or improvement. Re-read sections 5.1–5.8.",
    },
    {
      q: "Leadership wants one exact pipeline number for the board. What does the lens recommend?",
      options: [
        "Hide uncertainty to appear confident.",
        "Publish ranges with documented assumptions and reconciled bottom-up/top-down views.",
        "Stop forecasting until accuracy is perfect.",
        "Use only AI vendor default outputs.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Ranges and assumptions build trust and enable agile response. Re-read sections 5.7 and 5.8.",
      wrongFeedback:
        "Communicate uncertainty with scenarios — false precision erodes trust. Re-read sections 5.7 and 5.8.",
    },
    {
      q: "Churn model has high AUC but retention ROI unproven. What investment comes first?",
      options: [
        "Email every high-risk account immediately.",
        "Revenue-weighted prioritisation and holdout-tested intervention playbook.",
        "Replace model with deeper neural network.",
        "Add churn scores to board deck only.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Action workflows and causal proof precede scale. Re-read sections 5.6 and 5.8.",
      wrongFeedback:
        "Prove incremental save with prioritisation and holdouts before scaling. Re-read sections 5.6 and 5.8.",
    },
  ],
});
