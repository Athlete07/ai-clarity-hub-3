import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter04MktAttributionRevenueAnalytics = buildChapter({
  slug: "mkt-attribution-revenue-analytics",
  number: 4,
  shortTitle: "Attribution & Revenue Analytics",
  title: "Attribution & Revenue Analytics",
  readingMinutes: 24,
  summary:
    "Attribution and revenue analytics answer which marketing investments create pipeline and revenue — amid platform over-reporting, cookie loss, and conflicting models. No single method tells the truth: platform data is directional, multi-touch attribution (MTA) encodes assumptions, marketing mix modelling (MMM) estimates econometric contribution, and incrementality tests provide causal evidence. AI accelerates reconciliation, MMM builds, and narrative reporting — marketers own methodology choices and unified decision views. This chapter covers the attribution crisis, MTA, MMM, incrementality, platform reconciliation, the measurement triangle, revenue reporting, and investment gates.",
  keyTakeaway:
    "Triangulate measurement — platform direction, MTA paths, MMM allocation, incrementality truth — then unify in one decision framework with documented confidence. AI speeds analysis; marketers choose when to scale spend and defend pipeline to finance with reconciled revenue metrics.",
  pmCallout: MKT_CALLOUT,
  sections: [
    buildSection({
      number: "4.1",
      title: "The Attribution Crisis",
      subtitle: "Platform over-credit, signal loss, and why marketers need a measurement philosophy before another dashboard",
      take: "The attribution crisis is the widening gap between platform-reported conversions and CRM reality — summed Meta, Google, and LinkedIn conversions often exceed actual Salesforce closed-won by 30–80%. iOS ATT, cookie deprecation, and modeled conversions increase opacity. Last-click starves upper-funnel; view-through inflates display. AI-generated dashboards on bad inputs amplify false confidence. Marketers need philosophy: no single source is truth.",
      why: "Budget wars fought on platform ROAS alone misallocate millions. Understanding crisis prevents cutting programmes that create pipeline with 90-day lag.",
      paragraphs: [
        [
          s("Reconcile platform to CRM weekly at aggregate level. "),
          x(
            "Sum platform conversions vs HubSpot creates vs Salesforce opportunities — document gap. Persistent gap over 20% triggers methodology review not budget panic.",
            "Offline conversion imports and Enhanced Conversions reduce but do not eliminate gap.",
          ),
          s(" Share reconciliation in marketing-finance meeting — shared reality beats tool debates."),
        ],
        [
          s("Treat modeled and view-through metrics as hypotheses. "),
          x(
            "Meta modeled conversions and Google engaged-view conversions are directional — validate with holdouts before strategic cuts.",
            "Document signal loss by channel in measurement playbook — assumptions decay quarterly.",
          ),
          s(" Separate reporting for click-based vs view-based credit in internal dashboards."),
        ],
        [
          s("Educate leadership on attribution limits before board questions. "),
          x(
            "One-slide 'how we measure' — triangulation approach, confidence tiers, known gaps.",
            "AI exec summaries must include caveat block — auto-template in reporting workflow.",
          ),
          s(" Avoid presenting platform sum as revenue — finance will discredit marketing permanently."),
        ],
      ],
      examples: [
        {
          title: "Platform sum shock — DTC",
          body: "A DTC brand showed Meta 4.5x and Google 4.0x ROAS — implied revenue 170% of Shopify. Reconciliation revealed 45% overlap and view-through inflation. True blended paid ROAS 2.0x. Leadership paused scale; incrementality programme prioritised before next budget cycle.",
        },
        {
          title: "LinkedIn cut regret — B2B",
          body: "A B2B SaaS cut LinkedIn 50% on last-click 0.4x ROAS. Pipeline creation fell 28% two quarters later — branded search flat. MMM retrospective showed LinkedIn assisted enterprise opportunities 120 days upstream. Restored spend with geo incrementality envelope.",
        },
        {
          title: "Modeled conversion trap — mobile app",
          body: "A mobile app scaled Meta on modeled installs post-ATT. Holdout test: 42% of installs incremental. True CPI 2.6x platform report. Crisis response: holdout-first scale policy documented in media playbook.",
        },
      ],
    }),
    buildSection({
      number: "4.2",
      title: "Multi-Touch Attribution Models",
      subtitle: "First-touch, linear, time-decay, W-shaped, and data-driven — assumptions encoded in HubSpot and warehouse MTA",
      take: "Multi-touch attribution (MTA) assigns credit across touchpoints on the path to conversion — first-touch rewards discovery, last-touch rewards close, linear splits equally, time-decay weights recent touches, W-shaped emphasises first, lead-create, and close. HubSpot custom reports, Bizible, Dreamdata, and warehouse path models implement MTA. Data-driven MTA uses ML on paths when volume sufficient. Every model is wrong differently — choose model matching buying motion and decision being made.",
      why: "Single-touch reporting kills upper-funnel. MTA informs budget narrative and content credit — not causal proof without incrementality cross-check.",
      paragraphs: [
        [
          s("Select MTA model based on decision type. "),
          x(
            "Budget allocation narrative: W-shaped or data-driven. Content team credit: first-touch or position-based. Sales dispute on sourcing: last-touch with assisted report.",
            "Document model choice in metric dictionary — changing model rewrites history.",
          ),
          s(" Run same period in two models for leadership education — show sensitivity."),
        ],
        [
          s("Build warehouse MTA for flexibility beyond CRM native. "),
          x(
            "Segment events + Salesforce opps in Snowflake; Dreamdata or custom SQL for B2B long cycles. Include offline: events, sales emails when logged in CRM.",
            "Identity stitch quality determines MTA validity — garbage paths, garbage credit.",
          ),
          s(" Minimum path volume rule before trusting data-driven MTA — B2B needs hundreds of opps."),
        ],
        [
          s("Pair MTA with qualitative journey validation. "),
          x(
            "MTA may over-credit email if every opp touched nurture — incrementality on email tests sanity-check.",
            "AI summarises top paths from warehouse — marketers sense-check against Gong stories.",
          ),
          s(" Refresh MTA quarterly when channel mix or sales process changes."),
        ],
      ],
      examples: [
        {
          title: "Dreamdata B2B — long cycle",
          body: "A B2B vendor implemented Dreamdata on Segment + Salesforce. 180-day window captured webinar and content assists enterprise deals. W-shaped model showed content 32% credit vs 8% last-click. Content budget protected in cut round; pipeline influence metric added to CMO scorecard.",
        },
        {
          title: "HubSpot multi-touch — SMB",
          body: "An SMB SaaS used HubSpot attribution with linear model for simplicity. Marketing and sales agreed same definitions. Assisted conversion report showed paid social undervalued on last-click — shifted 15% budget from branded search only after SQL quality held in pilot.",
        },
        {
          title: "Model change communication — retail",
          body: "A retailer switched MTA from last-click to data-driven in GA4. Reported email revenue doubled — email team celebrated; finance sceptical. Parallel run 90 days with documented delta before switching executive KPI. Avoided false celebration and wrong budget shift.",
        },
      ],
    }),
    buildSection({
      number: "4.3",
      title: "Marketing Mix Modelling with AI",
      subtitle: "Robyn, Meridian, Recast — econometric channel contribution for cookie-independent allocation",
      take: "Marketing Mix Modelling (MMM) regresses revenue or conversions on channel spend, seasonality, promotions, and macro factors to estimate incremental contribution per channel. AI-accelerated platforms — Robyn, Google Meridian, Recast, Mutinex — compress build time from months to weeks. MMM informs quarterly channel envelopes; it does not replace daily bid management. Outputs are ranges with uncertainty — report posteriors, not false point ROAS.",
      why: "MMM is primary strategic allocation tool as cookies fade. Marketers without MMM default to platform dashboards for board-level shifts — systematically biased.",
      paragraphs: [
        [
          s("Prepare two-plus years of weekly inputs. "),
          x(
            "Channel spend, outcomes, promotions, holidays, competitive spikes. dbt marts standardise; AI imputes gaps cautiously with documentation.",
            "Omitted variables — offline events, PR — bias coefficients. Include or acknowledge blind spots.",
          ),
          s(" Finance validates outcome variable matches board revenue definition."),
        ],
        [
          s("Interpret MMM as scenarios, not commandments. "),
          x(
            "Recast and Robyn produce ROI ranges and saturation curves. '+10% Meta' scenario shows expected pipeline band — leadership picks risk posture.",
            "Do not daily-tune Google tROAS from yesterday's MMM run — horizon mismatch.",
          ),
          s(" Quarterly MMM refresh minimum; adstock and decay parameters reviewed with vendor or data science."),
        ],
        [
          s("Reconcile MMM to MTA and incrementality. "),
          x(
            "MMM may show display contribution MTA undervalues — design incrementality test on display to adjudicate.",
            "Unified measurement council compares three reads — document which drives which decision.",
          ),
          s(" MMM budget bands ±15% per channel — execution teams optimise inside bands."),
        ],
      ],
      examples: [
        {
          title: "Robyn — CPG",
          body: "A CPG brand ran Meta Robyn on 3 years weekly TV, digital, search, trade. MMM showed TV-social synergy — cutting TV to fund social-only hurt blended revenue 9% in scenario. Quarterly refresh sets envelopes; platform teams bid within.",
        },
        {
          title: "Search saturation — fintech",
          body: "A fintech scaling Google found platform ROAS flat as spend 4x'd. MMM marginal ROI below paid social above $2M quarterly search. Reallocated 18% to YouTube prospecting — pipeline creation +17% at flat blended CAC.",
        },
        {
          title: "MMM premature — startup",
          body: "A startup with 10 months data bought enterprise MMM. Coefficients unstable — wide intervals spanning negative. Waited 24 months; lighter Bayesian model with ranges only. Lesson: data maturity gate before MMM licence.",
        },
      ],
    }),
    buildSection({
      number: "4.4",
      title: "Incrementality Testing",
      subtitle: "Conversion lift, geo holdouts, and ghost ads — causal evidence for scale and cut decisions",
      take: "Incrementality testing measures conversions that occur because of ads versus those that would happen anyway — causal gold standard. Methods: platform conversion lift (Meta, Google), geo experiments (DMA holdouts for CTV, podcast, OOH), and ghost bidding. AI helps power analysis and result interpretation. Tests need sufficient spend, duration, and single-variable discipline. Retargeting, branded search, and high-frequency display often fail incrementality — scale carefully.",
      why: "Every platform claims ROI; few marketers validate. Incrementality prevents scaling phantom performance and defends upper-funnel in budget fights.",
      paragraphs: [
        [
          s("Prioritise incrementality on highest-stakes channels. "),
          x(
            "Rank by spend and scepticism: retargeting, branded search, CTV, display. Run one test per quarter minimum at scale.",
            "Power calculator before launch — underpowered tests waste money and stay 'inconclusive' forever.",
          ),
          s(" Pre-register success criteria and minimum detectable effect with finance witness."),
        ],
        [
          s("Execute geo tests for non-native channels. "),
          x(
            "Split DMAs for podcast, linear TV, billboards — holdout regions receive no exposure. Google Geo Experiments or specialist vendors analyse lift.",
            "Contamination control — no national campaigns bleeding into holdout geos.",
          ),
          s(" Duration often 4–8 weeks minimum — patience beats premature read."),
        ],
        [
          s("Embed incrementality results in budget policy. "),
          x(
            "Example: Meta retargeting capped at incrementality-proven envelope. Non-incremental branded search bid reduced.",
            "AI monitoring flags when spend exceeds tested envelope — triggers retest.",
          ),
          s(" Archive test reports in measurement wiki — institutional memory beats staff turnover."),
        ],
      ],
      examples: [
        {
          title: "Meta conversion lift — DTC",
          body: "A DTC brand ran Meta conversion lift on prospecting campaign. Incremental ROAS 1.8x vs platform 4.2x. Scaled only within incremental envelope; prospecting creative refreshed inside proven band. Blended finance metrics improved vs prior scale-everything approach.",
        },
        {
          title: "Branded search holdout — SaaS",
          body: "A SaaS geo holdout on branded search in 15% US metros for 6 weeks. Incremental pipeline only 22% of platform-attributed — majority would have typed URL anyway. Reduced bids on low-incrementality keywords; saved $120K annual reallocated to content.",
        },
        {
          title: "CTV geo test — consumer",
          body: "A consumer brand tested CTV in 70% DMAs. Geo lift showed 11% store visit lift incremental — below platform claim. Maintained CTV at tested spend level; did not 3x as vendor suggested. Finance trusted marketing measurement maturity.",
        },
      ],
    }),
    buildSection({
      number: "4.5",
      title: "Platform Data Reconciliation",
      subtitle: "CRM as truth anchor, offline imports, and AI-assisted variance explanation",
      take: "Platform reconciliation aligns Google Ads, Meta, LinkedIn, and GA4 reported conversions to HubSpot leads and Salesforce opportunities — identifying double-count, attribution window mismatch, and tracking breaks. CRM is truth anchor for pipeline; finance anchor for revenue. AI assists variance explanation — 'gap spike correlates with site deploy' — but rules are deterministic: same definition, same window, same dedupe key.",
      why: "Unreconciled data produces channel religion — each team trusts different tool. Reconciliation is prerequisite for unified measurement.",
      paragraphs: [
        [
          s("Standardise conversion definitions across systems. "),
          x(
            "Map: platform 'lead' = HubSpot MQL with form X = Salesforce contact with source Y. Document in metric dictionary.",
            "Window alignment: 7-day click vs 28-day view vs CRM create date — largest hidden gap source.",
          ),
          s(" Weekly reconciliation dashboard in Looker — auto-alert on gap threshold breach."),
        ],
        [
          s("Implement offline and server-side conversion paths. "),
          x(
            "HubSpot/Salesforce offline conversion import to Google and Meta with GCLID/fbclid when available. CAPI and Enhanced Conversions improve match — reduce unexplained variance.",
            "Snowflake pipeline logs import failures — silent fail kills reconciliation.",
          ),
          s(" QA test conversion after every site release and form change."),
        ],
        [
          s("Explain variance before reacting. "),
          x(
            "AI narrative on week-over-week gap: tracking outage, campaign pause, CRM sync delay, definition change.",
            "Root cause log prevents repeating panic cuts on phantom dips.",
          ),
          s(" Monthly marketing-finance reconciliation sign-off — shared number for board."),
        ],
      ],
      examples: [
        {
          title: "GCLID recovery — lead gen",
          body: "A lead gen site lost GCLID on redirect — Google conversions dropped 40% while CRM steady. Reconciliation caught in 3 days via automated compare. Fix restored Smart Bidding stability; avoided wrongful channel cut.",
        },
        {
          title: "LinkedIn vs Salesforce — B2B",
          body: "A B2B company reconciled LinkedIn lead gen forms to Salesforce campaign members. 35% duplicate emails created gap. HubSpot dedupe + import rules closed gap to 8%. LinkedIn budget decisions restored sales trust.",
        },
        {
          title: "AI variance digest — multi-channel",
          body: "Weekly Claude digest on reconciliation mart flagged Meta gap spike — traced to duplicate pixel fire on thank-you page. Engineering fix; digest template now standard in marketing ops cadence.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "4.6",
      title: "The Measurement Triangle",
      subtitle: "Platform direction, MTA paths, MMM allocation, incrementality truth — triangulating confidence for decisions",
      take: "The measurement triangle unifies four reads: platform data (fast, directional, biased), multi-touch attribution (path credit, assumption-heavy), MMM (strategic, cookie-independent, slow), incrementality (causal, expensive, channel-specific). No corner alone suffices. Decision framework assigns each method to decision tier — tactical bid tweaks use platform; quarterly allocation uses MMM bounded by incrementality; content credit uses MTA with caveats. AI synthesises triangle into leadership narrative with explicit confidence labels.",
      why: "Teams arguing platform vs MTA vs MMM without framework never align. Triangle gives language for confidence and appropriate use.",
      paragraphs: [
        [
          s("Map decision types to triangle corners. "),
          x(
            "Daily: platform efficiency inside envelope. Monthly: MTA for content and assist reporting. Quarterly: MMM for mix; incrementality for disputed channels.",
            "Document in measurement charter — ends tool holy wars.",
          ),
          s(" When corners conflict, incrementality adjudicates high-spend disputes."),
        ],
        [
          s("Label confidence in every leadership slide. "),
          x(
            "Green: CRM revenue confirmed. Yellow: MTA/MMM range. Red: platform directional only.",
            "AI-generated board text must include confidence tag — template enforced.",
          ),
          s(" Finance trained on triangle — asks 'which corner?' not 'what's ROAS?'"),
        ],
        [
          s("Evolve triangle as maturity grows. "),
          x(
            "Year one: reconciliation + platform + pilot incrementality. Year two: MTA warehouse + first MMM. Year three: unified dashboard with triangle view.",
            "Skip corners deliberately if data immature — honest maturity slide beats fake precision.",
          ),
          s(" Annual measurement retrospective — which corner drove best decisions?"),
        ],
      ],
      examples: [
        {
          title: "Triangle council — enterprise",
          body: "An enterprise formed monthly measurement council: platform ops, MTA owner, MMM vendor, incrementality lead. Dispute on display resolved via geo test — MTA over-credited, MMM agreed with test. Display budget set at incremental envelope; triangle narrative in board deck.",
        },
        {
          title: "Confidence labels — Series C",
          body: "A Series C SaaS added confidence tags to Looker dashboard. CEO stopped demanding single ROAS number. Quarterly mix moved to MMM bands with incrementality check on cuts — marketing credibility with finance restored.",
        },
        {
          title: "Early-stage honest triangle",
          body: "A seed startup presented triangle with only platform + CRM reconciliation — MMM and incrementality 'planned at $2M spend'. Investor appreciated honesty vs fake MMM. Incrementality pilot booked for next scale gate.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-ma-ch4-measurement-triangle",
      type: "nested",
      title: "Measurement Triangle",
      caption:
        "Platform data (directional) → MTA (assumptions) → MMM (econometric) → incrementality (causal). Triangulate — no single corner is truth.",
    }),
    buildSection({
      number: "4.7",
      title: "Revenue Analytics & Pipeline Reporting",
      subtitle: "Marketing-influenced pipeline, revenue cohorts, and finance-aligned reporting in Salesforce and warehouse",
      take: "Revenue analytics connects marketing activity to pipeline created, pipeline influenced, and closed-won revenue — Salesforce campaign influence, HubSpot revenue attribution, warehouse marketing subledger aligned to finance definitions. Report marketing-sourced vs influenced vs partner-sourced separately. Cohort revenue by acquisition channel shows long-term quality. AI drafts monthly revenue narrative; finance signs definitions. Marketing earns seat at revenue table with reconciled numbers.",
      why: "Pipeline without revenue alignment is promotional. Revenue reporting with finance definitions survives board scrutiny.",
      paragraphs: [
        [
          s("Agree marketing revenue definitions with finance once. "),
          x(
            "Sourced: first touch or create. Influenced: any touch in window. Weighted: model-based — document weights.",
            "Board uses finance revenue — marketing subledger reconciles within agreed tolerance.",
          ),
          s(" Snowflake marketing revenue mart mirrors finance close — no shadow spreadsheets."),
        ],
        [
          s("Report pipeline velocity and conversion, not just volume. "),
          x(
            "Pipeline created, stage conversion, average deal size, days to close by channel — AI flags channels with fast small deals vs slow enterprise.",
            "Marketing-influenced expansion revenue separate from new logo — customer marketing overlap.",
          ),
          s(" Cohort revenue at 6 and 12 months by acquisition source — quality over volume."),
        ],
        [
          s("Automate narrative with human finance review. "),
          x(
            "Claude monthly summary from Looker: pipeline vs plan, variance drivers, channel highlights. Finance edits one paragraph before exec send.",
            "Include forward indicators — engaged accounts, intent — not only lagging revenue.",
          ),
          s(" Quarterly business review deck version for sales, finance, exec — same numbers, different emphasis."),
        ],
      ],
      examples: [
        {
          title: "Finance-aligned mart — B2B",
          body: "A B2B vendor built Snowflake marketing revenue mart reconciled to NetSuite within 5%. CMO and CFO co-present quarterly — same slide numbers. Marketing budget increased 12% on proven influenced revenue; prior fights over HubSpot-only reports ended.",
        },
        {
          title: "Cohort revenue quality — PLG",
          body: "A PLG company reported 12-month revenue cohort by signup source. Content-led signups 1.4x paid social LTV. Shifted mix toward SEO and community — year-two revenue plan exceeded despite lower signup volume.",
        },
        {
          title: "Influence vs sourced — ABM",
          body: "An ABM programme showed low 'sourced' but 38% 'influenced' on enterprise opps. Last-click would have killed programme. Weighted model with sales input preserved $800K ABM budget; influenced pipeline metric in CMO OKRs.",
        },
      ],
    }),
    buildSection({
      number: "4.8",
      title: "Marketer Decision Lens: Unified Measurement Investment",
      subtitle: "Tracking gates, methodology sequencing, and when to trust each corner of the triangle",
      take: "Before MMM licence or attribution vendor renewal, pass gates: (1) platform-to-CRM reconciliation within 15% on primary conversion, (2) metric dictionary signed by finance, (3) one incrementality test completed or scheduled, (4) decision map linking triangle corners to budget authority. Fix tracking before MMM. Do not present unified dashboard until corners agree directionally. AI cheapens analysis — methodology choices remain expensive to unwind.",
      why: "Measurement shelfware exceeds martech shelfware. This lens sequences investment toward decisions finance and sales trust.",
      paragraphs: [
        [
          s("Gate one: reconciliation trust. "),
          x(
            "No strategic attribution project until weekly gap dashboard stable. Server-side and offline imports deployed.",
            "Reconciliation failure blocks MMM input trust — garbage spend history.",
          ),
          s(" Sign-off from RevOps and finance on anchor metric."),
        ],
        [
          s("Gate two: methodology matches maturity and spend level. "),
          x(
            "Under $1M paid: reconciliation + MTA + one incrementality pilot. $1M–5M: add MMM. Enterprise: full triangle council.",
            "Vendor sales ahead of maturity — resist.",
          ),
          s(" Document which corner drives each budget line in charter."),
        ],
        [
          s("Gate three: action linkage. "),
          x(
            "MMM without budget authority to reallocate is research project. Incrementality without policy envelope is academic.",
            "Quarterly review: measurement spend vs decisions changed — ROI of measurement team.",
          ),
          s(" Kill dashboards nobody used in 90 days — reinvest in incrementality."),
        ],
      ],
      examples: [
        {
          title: "MMM blocked — tracking first",
          body: "A CMO halted Recast purchase when reconciliation gap 32%. Funded server-side GTM and offline imports. Six months later gap 11%; MMM implemented in 6 weeks. CFO cited discipline in annual planning letter.",
        },
        {
          title: "Incrementality policy — retargeting cap",
          body: "After conversion lift showed retargeting 40% incremental, policy capped retargeting at proven envelope. Platform ROAS looked worse; finance metrics improved. Decision lens documented in media playbook — new hires onboard faster.",
        },
        {
          title: "Dashboard cull — focus incrementality",
          body: "A team maintained 12 attribution dashboards — none matched. Unified triangle view replaced; five dashboards retired. Savings funded geo test programme — one test changed $200K annual search allocation.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Platform conversions sum exceeds CRM — best interpretation?",
      options: [
        "Platforms are always right — scale all.",
        "Structural over-credit and overlap — reconcile and triangulate.",
        "CRM is always wrong — ignore it.",
        "AI will fix without methodology.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Attribution crisis requires reconciliation and triangulation. Re-read sections 4.1 and 4.5.",
      wrongFeedback:
        "Platform sum exceeds reality — reconcile before deciding. Re-read sections 4.1 and 4.5.",
    },
    {
      kind: "order",
      q: "Order measurement triangle methods from directional to causal rigor (approximate).",
      prompt: "Drag to arrange from most directional (top) to most causal (bottom).",
      items: [
        "Platform-reported conversions",
        "Multi-touch attribution paths",
        "Marketing mix modelling",
        "Incrementality holdout tests",
      ],
      correctFeedback:
        "Right. Platform direction → MTA → MMM → incrementality truth. Re-read section 4.6.",
      wrongFeedback:
        "Triangle moves from directional platform data to causal incrementality. Re-read section 4.6.",
    },
    {
      kind: "categorize",
      q: "Sort each method to primary use case.",
      categories: ["Quarterly budget allocation", "Daily in-channel bidding"],
      items: [
        { text: "MMM scenario planning.", category: 0 },
        { text: "Google tROAS target tweak.", category: 1 },
        { text: "Channel envelope from econometric model.", category: 0 },
        { text: "Meta ad set budget pacing.", category: 1 },
        { text: "Incrementality-informed spend cap.", category: 0 },
        { text: "Keyword bid adjustment.", category: 1 },
      ],
      correctFeedback:
        "Right. Strategic methods vs tactical platform ops. Re-read sections 4.3 and 4.6.",
      wrongFeedback:
        "MMM and incrementality inform strategy; platforms optimise daily. Re-read sections 4.3 and 4.6.",
    },
    {
      q: "Branded search shows high ROAS on platform — before cutting prospecting?",
      options: [
        "Trust platform and cut prospecting immediately.",
        "Run incrementality or geo holdout — branded may be non-incremental.",
        "Ignore — search is always incremental.",
        "Only ask the platform rep.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Branded search often fails incrementality tests. Re-read section 4.4.",
      wrongFeedback:
        "Validate branded search incrementality before major mix shifts. Re-read section 4.4.",
    },
    {
      q: "MTA model choice should be driven by what?",
      options: [
        "Random selection.",
        "Decision type and buying motion — document assumptions.",
        "Always last-click only.",
        "Vendor default without review.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Model encodes assumptions for specific decisions. Re-read section 4.2.",
      wrongFeedback:
        "Choose MTA model for the decision and document it. Re-read section 4.2.",
    },
    {
      kind: "categorize",
      q: "Match each item to measurement investment gate.",
      categories: ["Must pass before MMM", "Can run in parallel"],
      items: [
        { text: "Platform-CRM reconciliation within 15%.", category: 0 },
        { text: "Single email A/B subject test.", category: 1 },
        { text: "Metric dictionary finance sign-off.", category: 0 },
        { text: "Social creative hook test.", category: 1 },
        { text: "Offline conversion import live.", category: 0 },
        { text: "Webinar title variant.", category: 1 },
      ],
      correctFeedback:
        "Right. Foundation gates precede MMM. Re-read section 4.8.",
      wrongFeedback:
        "Reconciliation and definitions gate MMM investment. Re-read section 4.8.",
    },
  ],
});
