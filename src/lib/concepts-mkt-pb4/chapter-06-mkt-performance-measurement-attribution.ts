import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter06MktPerformanceMeasurementAttribution = buildChapter({
  slug: "mkt-performance-measurement-attribution",
  number: 6,
  shortTitle: "Performance Measurement & Attribution",
  title: "Performance Measurement & Attribution — Triangulating Truth When Platform Data Lies",
  readingMinutes: 24,
  summary:
    "Platform-reported ROAS and last-click attribution systematically overcredit bottom-funnel channels and undercount upper-funnel contribution. AI accelerates anomaly detection, MMM modelling, incrementality analysis, and automated reporting — but measurement strategy requires triangulation: platform data for direction, incrementality tests for causal truth, and MMM for cross-channel allocation. Marketers who build unified measurement frameworks make budget decisions with confidence instead of platform dashboard theatre.",
  keyTakeaway:
    "No single attribution model tells the truth. The framework that wins: treat platform metrics as directional → validate with incrementality holdouts → inform allocation with MMM → unify in a single decision view with documented confidence levels. AI automates analysis; marketers own methodology choices and investment thresholds.",
  pmCallout: MKT_CALLOUT,
  sections: [
    buildSection({
      number: "6.1",
      title: "The Attribution Crisis in Paid Media",
      subtitle: "Why platform-reported conversions diverge from business reality — and what marketers should trust instead",
      take: "Attribution crisis describes the growing gap between platform-reported conversions and actual business outcomes: double-counting across Meta, Google, and TikTok; view-through inflation; iOS ATT signal loss; cookie deprecation; and last-click bias that starves prospecting. AI does not fix broken attribution — it can amplify false confidence with polished dashboards built on flawed inputs.",
      why: "Budget decisions based on platform ROAS alone systematically misallocate spend. Marketers who understand attribution limitations invest in triangulation before scaling channels the platforms claim are 'winning.'",
      paragraphs: [
        [
          s("Platform attribution is optimised for platform revenue, not your P&L. "),
          x(
            "Each ad platform claims credit for conversions using proprietary models biased toward that platform's touchpoints. Sum platform conversions across Google, Meta, and LinkedIn routinely exceeds actual CRM conversions by 30–80%. This is structural, not a tracking bug.",
            "Platform dashboards answer 'how is my spend on this platform performing for the platform' — not 'what is true incrementality.'",
          ),
          s(" Reconcile platform conversions to CRM weekly — persistent gap above 20% triggers methodology review."),
        ],
        [
          s("Signal loss compounds attribution error post-ATT and cookie deprecation. "),
          x(
            "iOS App Tracking Transparency, Safari ITP, and third-party cookie phase-out reduce observable conversion paths. Platforms model 'estimated' conversions with increasing opacity. Modeled conversions are directional at best — not audit-grade.",
            "Treat modeled conversion metrics as hypotheses requiring incrementality validation, not budget gospel.",
          ),
          s(" Document signal loss impact per channel in your measurement playbook — assumptions decay quarterly."),
        ],
        [
          s("Last-click default hides upper-funnel value. "),
          x(
            "Default attribution in most platforms credits the final ad click before conversion. CTV, YouTube, podcast, and display prospecting appear worthless while branded search and retargeting appear over-efficient. Cutting prospecting based on last-click data often collapses pipeline 90 days later.",
            "Last-click is a reporting convenience, not a causal model. Use it for tactical optimisation within channel, not cross-channel allocation.",
          ),
          s(" Pair last-click reporting with assisted conversion and path analysis where available — pattern, not proof."),
        ],
      ],
      examples: [
        {
          title: "Platform sum versus CRM — DTC brand",
          body: "A DTC skincare brand reported Meta ROAS 4.2x and Google ROAS 3.8x simultaneously — blended platform ROAS implied 180% more revenue than Shopify attributed to paid. CRM reconciliation showed 40% overlap in platform credit. True blended paid ROAS closer to 2.1x. Budget reallocation based on platform rankings would have over-invested in Meta retargeting. Triangulation programme initiated with quarterly incrementality tests.",
        },
        {
          title: "Prospecting cut on last-click — B2B pipeline collapse",
          body: "A B2B SaaS company cut LinkedIn prospecting 60% after last-click showed 0.3x ROAS versus Google branded search at 8x. Three months later: pipeline creation down 35%, branded search volume flat, sales blamed marketing. MMM retrospective showed LinkedIn drove assisted pipeline 90 days upstream. Prospecting restored with incrementality-tested budget envelope.",
        },
        {
          title: "Modeled conversions over-trust — app install campaign",
          body: "A mobile gaming company scaled Meta spend 3x based on modeled install ROAS after ATT. Incrementality holdout revealed 45% of modeled installs would have occurred organically. True incremental CPI 2.8x higher than platform reported. Lesson: modeled metrics require holdout validation before scale decisions.",
        },
      ],
    }),
    buildSection({
      number: "6.2",
      title: "Marketing Mix Modelling with AI",
      subtitle: "Econometric channel contribution — cookie-independent allocation intelligence at quarterly cadence",
      take: "Marketing Mix Modelling (MMM) uses regression on historical spend, seasonality, promotions, and external factors to estimate each channel's contribution to revenue or conversions. AI-accelerated MMM platforms — Robyn, Meridian, Recast, Mutinex — reduce model build time from months to weeks. MMM informs strategic allocation; it does not replace daily platform optimisation.",
      why: "MMM is the primary cookie-independent method for cross-channel budget allocation. Marketers without MMM default to platform dashboards for strategic decisions — systematically wrong as signal loss increases.",
      paragraphs: [
        [
          s("MMM inputs require two-plus years of clean data. "),
          x(
            "Minimum: weekly channel spend, revenue or conversions, seasonality indicators, major promotional events, and external factors (competitive activity, macro trends). AI helps clean and impute gaps; garbage data produces confident wrong models.",
            "Start data hygiene before model purchase — many MMM projects fail on input quality, not methodology.",
          ),
          s(" Document promotional calendar and offline spend — omitted variables bias channel coefficients."),
        ],
        [
          s("MMM outputs are ranges, not point estimates. "),
          x(
            "Channel ROI from MMM includes confidence intervals. AI-accelerated models produce posterior distributions — 'Meta contributes 15–25% of revenue' not 'Meta ROAS is exactly 3.2x.' Decisions use ranges and scenario planning.",
            "False precision from single-number MMM outputs creates overconfidence. Report ranges to leadership.",
          ),
          s(" Refresh MMM quarterly minimum — coefficients shift with market, creative, and competitive dynamics."),
        ],
        [
          s("MMM and platform optimisation coexist at different time horizons. "),
          x(
            "MMM: quarterly strategic allocation between channels. Platform bidding: daily tactical efficiency within channel. Do not change Google tROAS targets daily based on MMM — use MMM to set channel budget envelopes.",
            "Horizon mismatch causes chaos when leadership demands MMM insights at campaign-manager cadence.",
          ),
          s(" Translate MMM scenarios into budget guardrails — ±15% channel spend bands, not daily reallocation."),
        ],
      ],
      examples: [
        {
          title: "Robyn MMM — consumer packaged goods",
          body: "A CPG brand implemented Meta's open-source Robyn with 3 years of weekly data: TV, digital display, paid social, search, trade promotions. MMM revealed TV and paid social synergies — cutting TV to fund social-only strategy (platform dashboards suggested) would reduce blended revenue 8% per model scenario. Quarterly MMM refresh now sets annual channel envelopes; platform teams optimise within bands.",
        },
        {
          title: "MMM catches diminishing returns",
          body: "A fintech scaling Google Search found platform ROAS stable as spend increased 4x. MMM showed search saturation — marginal ROI below paid social above $2M quarterly search spend. Reallocated 20% of incremental budget to YouTube prospecting per MMM scenario; pipeline creation improved 18% at flat blended CAC. Platform ROAS alone missed saturation.",
        },
        {
          title: "MMM failure — insufficient data history",
          body: "A startup with 9 months of spend data purchased enterprise MMM. Model produced unstable coefficients — wide confidence intervals spanning negative contribution. Vendor still presented point estimates. Leadership made aggressive channel cuts; results regressed. Fix: waited for 24 months data, used lighter Bayesian model, reported ranges only. Lesson: MMM needs data maturity.",
        },
      ],
    }),
    buildSection({
      number: "6.3",
      title: "Incrementality Testing",
      subtitle: "Holdouts, geo-lift, and conversion lift studies — the causal gold standard for channel truth",
      take: "Incrementality testing measures what happens when you show ads versus when you do not — the only direct causal read on whether paid media creates conversions that would not otherwise occur. Methods: user-level holdouts (conversion lift), geo holdouts (geo experiments), and ghost bidding. AI assists power analysis, result interpretation, and test design — but test execution requires discipline on duration, geography, and spend levels.",
      why: "Every platform claims incrementality; few marketers validate. Incrementality tests are the audit that prevents scaling phantom performance — especially for retargeting, branded search, and high-frequency display.",
      paragraphs: [
        [
          s("Choose incrementality method by channel and data capability. "),
          x(
            "Conversion lift (Meta, Google): platform-native holdout experiments. Geo lift: split DMAs or regions for channels without native holdouts — CTV, OOH, podcast. Ghost ads: bid on control group without serving — advanced, platform-dependent.",
            "Match method to minimum detectable effect and available spend — underpowered tests waste money and produce 'inconclusive' forever.",
          ),
          s(" Pre-register hypothesis, duration, and success criteria before test launch — prevents post-hoc narrative."),
        ],
        [
          s("Retargeting and branded search need incrementality most. "),
          x(
            "These channels target users likely to convert anyway. Platform ROAS looks excellent; incrementality often shows 30–70% of conversions are non-incremental. Results should inform bid strategy and budget caps, not elimination — some 'non-incremental' conversions still have defensive value.",
            "Incrementality answers 'should I spend this much' not 'should I spend zero.'",
          ),
          s(" Annual incrementality calendar: test highest-spend and highest-ROAS channels first — surprises concentrate there."),
        ],
        [
          s("Interpret incrementality with business context. "),
          x(
            "iROAS below 1.0 does not always mean cut — new market entry, competitive defence, and pipeline channels may accept sub-1.0 with lagged value. AI helps model lag structures; strategist sets acceptable iROAS thresholds by objective.",
            "Incrementality is input to judgment, not a replacement for judgment.",
          ),
          s(" Document incrementality results in channel playbook — prevents re-debating settled questions each budget cycle."),
        ],
      ],
      examples: [
        {
          title: "Meta conversion lift — retargeting reality check",
          body: "A fashion retailer ran Meta conversion lift study on retargeting campaigns showing 6.2x platform ROAS. Incremental ROAS: 1.4x — 77% of platform-attributed conversions occurred in holdout. Action: reduced retargeting frequency caps and budget 35%; reallocated to prospecting with positive lift test. Blended revenue flat; prospecting pipeline up 22%.",
        },
        {
          title: "Geo holdout — CTV incrementality",
          body: "A DTC mattress brand ran 6-week geo holdout on Hulu CTV — 8 matched DMA pairs, $400K test spend. Treatment DMAs showed 12% lift in branded search and 8% lift in direct site visits versus control. iROAS 0.9 on immediate purchases but 1.6 when including 30-day attributed conversions. Justified upper-funnel CTV in MMM with lagged value assumption.",
        },
        {
          title: "Underpowered test — inconclusive trap",
          body: "A B2B company ran 2-week conversion lift on LinkedIn with $15K spend — insufficient for B2B conversion volume. Result: inconclusive. Leadership declared 'LinkedIn doesn't work.' Fix: 8-week test at 3x spend with pipeline metric, not just leads. Second test showed 1.3x incremental pipeline ROAS. Lesson: power analysis before launch.",
        },
      ],
    }),
    buildSection({
      number: "6.4",
      title: "Anomaly Detection in Campaign Performance",
      subtitle: "AI-flagged spikes, drops, and tracking breaks — catching problems before weekly reports",
      take: "Performance anomalies — sudden CPA spikes, conversion rate drops, spend pacing errors, tracking outages, and competitive auction shifts — destroy budget efficiency when discovered late. AI anomaly detection on daily campaign metrics flags deviations from expected ranges using seasonality-adjusted baselines. Marketers configure alert thresholds, root-cause playbooks, and escalation paths.",
      why: "Weekly reporting cycles mean 5–7 days of wasted spend on broken tracking or auction anomalies. AI monitoring shifts detection from reactive to same-day — preserving budget and data integrity for attribution.",
      paragraphs: [
        [
          s("Define anomaly types and alert severity. "),
          x(
            "Critical: conversion tracking drop >50%, spend pacing 2x daily cap, landing page 404. High: CPA >30% above 14-day baseline, CVR drop >25%. Medium: CTR drift, impression share loss. AI models learn baselines per campaign; marketer sets severity and notification channel.",
            "Alert fatigue kills programmes — tune thresholds after 30-day calibration period.",
          ),
          s(" Every alert links to root-cause playbook: tracking, creative fatigue, auction, landing page, or external."),
        ],
        [
          s("Distinguish signal from noise with seasonality awareness. "),
          x(
            "Black Friday CPA spikes are expected; Tuesday afternoon dips may be noise. AI anomaly engines with holiday and promotional calendars reduce false positives. Feed AI your promotional event schedule as exogenous variables.",
            "Unseasonalised anomaly detection cries wolf on every sale period.",
          ),
          s(" Review false positive rate monthly — adjust sensitivity per campaign tier."),
        ],
        [
          s("Anomaly response integrates paid, CRO, and analytics. "),
          x(
            "CPA spike playbook: check tracking first, then landing page, then auction insights, then creative fatigue. AI can auto-generate diagnostic summary pulling GTM health, page speed, and platform change logs.",
            "Cross-functional response SLAs: tracking issues resolved in 4 hours, not next sprint.",
          ),
          s(" Post-incident log feeds anomaly model — recurring failure modes get proactive monitoring."),
        ],
      ],
      examples: [
        {
          title: "Tracking outage caught in 2 hours",
          body: "A lead gen company's AI monitoring flagged Google Ads conversion count drop 90% at 10am Tuesday — 6 hours before weekly report. GTM container publish had broken trigger. Fix deployed by 12pm; estimated $8K misoptimisation prevented versus prior 3-day average detection time. Anomaly programme ROI positive in first incident.",
        },
        {
          title: "Creative fatigue early warning",
          body: "A DTC brand's anomaly model flagged CTR decline on top Meta ad set 5 days before CPA impact — creative fatigue pattern recognised from historical data. Creative refresh deployed proactively; CPA spike avoided. Without anomaly layer, team would have reacted after 2 weeks of elevated CPA.",
        },
        {
          title: "False positive storm — sale period",
          body: "An e-commerce anomaly system generated 40 alerts during Black Friday week — all 'CPA above baseline.' Team ignored alerts; genuine landing page issue on Cyber Monday buried in noise. Fix: promotional calendar integration and severity downgrade during expected volatility; separate 'sale mode' monitoring rules.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "6.5",
      title: "Unified Measurement Frameworks",
      subtitle: "Triangulating platform data, incrementality, and MMM into one decision view with confidence levels",
      take: "A unified measurement framework assigns each metric a role and confidence level: platform data for daily tactical optimisation (low causal confidence); incrementality for channel validation (high causal confidence, periodic); MMM for strategic allocation (medium confidence, lagged). AI dashboards unify sources but marketers define the framework — which metrics decide what decisions.",
      why: "Teams drown in conflicting numbers without a hierarchy of evidence. Unified frameworks end 'which ROAS is real' debates by documenting what each number means and when to use it.",
      paragraphs: [
        [
          s("Three-layer measurement architecture. "),
          x(
            "Layer 1 — Operational: platform metrics, daily, for bid and creative optimisation within channel. Layer 2 — Tactical validation: incrementality tests, quarterly, for channel budget adjustments. Layer 3 — Strategic: MMM scenarios, quarterly/annual, for cross-channel allocation and board reporting.",
            "Decisions at wrong layer cause errors — don't set annual budget from yesterday's platform ROAS.",
          ),
          s(" Document decision rights: who acts on which layer, at what cadence."),
        ],
        [
          s("Confidence labels prevent false precision in leadership reporting. "),
          x(
            "Report format: 'Meta prospecting — platform ROAS 2.8x (directional); incremental ROAS 1.2x (Q2 lift test, medium confidence); MMM contribution 18% revenue (±5%, Q3 refresh).' AI generates narrative; framework ensures labels.",
            "Leadership learns to ask 'which layer?' instead of 'why do numbers disagree?'",
          ),
          s(" Single source of truth dashboard with layer tags — not three conflicting slides."),
        ],
        [
          s("Reconciliation rules when sources disagree. "),
          x(
            "Platform sum exceeds CRM: apply overlap discount factor from historical reconciliation. MMM and incrementality conflict: defer to incrementality for tested channel, MMM for untested. New channel without history: pilot budget with mandatory incrementality test at spend threshold.",
            "Disagreement is expected — framework provides tie-break rules, not false unity.",
          ),
          s(" Annual framework review when methodology, privacy, or channel mix shifts materially."),
        ],
      ],
      examples: [
        {
          title: "Measurement triangle dashboard",
          body: "A multi-brand retailer built unified dashboard: platform pacing (daily), incrementality results log (quarterly), MMM scenario planner (quarterly). Budget committee uses MMM scenarios; channel managers use platform metrics within MMM bands; incrementality tests trigger band adjustments. Cross-functional alignment meetings dropped from weekly arguments to monthly framework reviews.",
        },
        {
          title: "New channel governance via framework",
          body: "A SaaS company added TikTok with $50K monthly pilot. Framework rule: incrementality test mandatory at $150K cumulative spend before budget increase. Test at month 4 showed 0.7x incremental pipeline ROAS — below 1.0 threshold. Spend capped; budget reallocated per MMM. Without framework, platform metrics would have justified 3x scale.",
        },
        {
          title: "Framework without incrementality — MMM-only trap",
          body: "A CPG brand relied solely on MMM without incrementality validation. MMM recommended 30% display increase; incrementality test (added later) showed display near zero incremental. MMM had correlated display with unmeasured TV synergies. Framework updated: MMM proposals for channels above $500K require incrementality confirmation within 6 months.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-pm-ch6-measurement-triangle",
      type: "nested",
      title: "Measurement Triangulation Framework",
      caption:
        "Platform data for directional optimisation → incrementality tests for causal validation → MMM for strategic allocation → unified view for investment confidence.",
    }),
    buildSection({
      number: "6.6",
      title: "Competitive Intelligence in Paid Media",
      subtitle: "Auction insights, share of voice, and AI-synthesised competitor spend signals",
      take: "Competitive intelligence informs paid media strategy: impression share loss, auction overlap, competitor creative themes, estimated spend shifts, and SOV by category. AI tools scrape ad libraries, synthesise competitor messaging trends, and flag share-of-voice changes. Intelligence supports positioning and budget defence — not reactive copying.",
      why: "Operating in a vacuum means misreading your own performance — CPA spikes may be auction compression, not creative failure. Marketers who monitor competitive context interpret anomalies correctly and defend strategic keywords.",
      paragraphs: [
        [
          s("Platform-native competitive signals. "),
          x(
            "Google Auction Insights: impression share, overlap rate, position above rate, outranking share. Meta Ad Library: competitor creative and estimated active duration. LinkedIn Campaign Manager: auction competitiveness indicators. AI aggregates weekly competitive digest from exports.",
            "Native signals are lagged and incomplete — supplement with third-party estimators where budget justifies.",
          ),
          s(" Track top 5 competitors monthly — SOV trends predict auction pressure before CPA impact."),
        ],
        [
          s("Creative competitive intelligence with AI. "),
          x(
            "AI analyses competitor ad libraries for messaging themes, offer patterns, format mix, and creative refresh cadence. Output: 'competitor X shifted to UGC video, discount-led, 2-week creative cycles.' Informs your differentiation and refresh velocity.",
            "Copy competitor tactics, not strategy — intelligence should sharpen your positioning angle.",
          ),
          s(" Quarterly competitive positioning review with creative and paid teams — intelligence to brief, not react."),
        ],
        [
          s("Competitive context in performance interpretation. "),
          x(
            "CPA up 20% with impression share down 15% and competitor overlap up — likely auction pressure, test bid strategy before creative overhaul. CPA up with stable auction metrics — internal issue: landing page, tracking, or creative fatigue.",
            "AI diagnostic prompts should include competitive variables before recommending actions.",
          ),
          s(" Document competitive events (competitor sale, new entrant) in performance annotations."),
        ],
      ],
      examples: [
        {
          title: "Auction compression diagnosis",
          body: "A B2B software company's Google branded search CPA rose 35% over 6 weeks. Creative and landing page audits clean. Auction insights showed new competitor with 45% overlap rate and high position-above rate. Response: defensive bid strategy on brand, differentiation ad copy emphasising unique integration. CPA recovered 80% in 4 weeks. Without competitive layer, team would have rebuilt landing pages.",
        },
        {
          title: "AI ad library synthesis",
          body: "A DTC brand uses monthly GPT workflow on top 5 competitors' Meta Ad Library exports: theme clustering, offer analysis, format breakdown. Q3 insight: competitors shifted to subscription-first offers. Brand tested subscription landing page variant — 24% LTV improvement on matched traffic. Intelligence drove proactive test, not reactive catch-up.",
        },
        {
          title: "Over-reaction to competitor sale",
          body: "Competitive intelligence flagged competitor 40% off sale. Team slashed prices and doubled Meta spend. Incrementality later showed competitor sale absorbed their demand, not yours — unnecessary margin erosion. Lesson: competitive intelligence needs impact assessment, not automatic matching.",
        },
      ],
    }),
    buildSection({
      number: "6.7",
      title: "Automated Performance Reporting",
      subtitle: "AI-generated narratives, exception-based dashboards, and stakeholder-specific views",
      take: "Automated reporting replaces manual weekly slide builds with AI-generated performance narratives: pacing versus plan, metric anomalies, test results, and recommended actions — tailored by audience. CMO wants strategic summary; channel manager wants campaign detail. AI drafts; marketer validates numbers and edits narrative before distribution.",
      why: "Manual reporting consumes 20–40% of performance marketing team time. Automation frees capacity for optimisation — but unvalidated AI narratives hallucinate causes and recommend wrong actions.",
      paragraphs: [
        [
          s("Design reporting tiers by stakeholder. "),
          x(
            "Executive: 1-page — spend pacing, revenue versus target, top 3 insights, decisions needed. Channel lead: campaign table with anomalies flagged. Analyst: full data appendix. AI generates all tiers from same data warehouse; template controls depth.",
            "One report for all audiences satisfies nobody — tiered automation beats universal dashboards.",
          ),
          s(" Executive report maximum 5 bullets — AI summarisation with human curation."),
        ],
        [
          s("Exception-based reporting reduces noise. "),
          x(
            "Only surface metrics beyond threshold deviation from plan or baseline. 'All campaigns green' is one line; exceptions get narrative. AI ranks exceptions by estimated revenue impact.",
            "Reporting value is in exceptions and decisions, not restating numbers visible in platform UI.",
          ),
          s(" Calibrate exception thresholds monthly — too sensitive creates report fatigue."),
        ],
        [
          s("Human validation gate before automated distribution. "),
          x(
            "AI narrative cross-checked against source data for: correct period, currency, attribution window, and causal language. Ban phrases like 'caused by' unless incrementality-backed; use 'correlated with' for platform data.",
            "Automated wrong narrative distributed to CMO is worse than delayed manual report.",
          ),
          s(" 15-minute validation ritual before Monday auto-send — non-negotiable."),
        ],
      ],
      examples: [
        {
          title: "AI weekly exec brief",
          body: "A retail media team automated Monday 7am exec email: AI pulls warehouse data, generates pacing summary, flags 3 exceptions, drafts recommended actions. Performance lead validates in 12 minutes, edits one narrative, sends. Reporting time dropped from 6 hours to 15 minutes weekly. Leadership satisfaction up — faster insights, consistent format.",
        },
        {
          title: "Exception ranking prevents alert fatigue",
          body: "An agency's automated client reports initially flagged 25 metrics per week. Clients stopped reading. AI reranked by estimated revenue impact; threshold raised to >10% deviation. Average 4 exceptions per report. Engagement and action rate on reports increased 3x.",
        },
        {
          title: "AI narrative hallucination",
          body: "Automated report claimed 'CPA improved due to new creative launch' — creative had launched after the metric change; actual cause was bid strategy adjustment. Client challenged causality. Fix: AI prompts restricted to correlated factors with timestamps; causal claims require human annotation tag.",
        },
      ],
    }),
    buildSection({
      number: "6.8",
      title: "The Marketer Decision Lens — Measurement Infrastructure Investment",
      subtitle: "What to build, test, and report when AI makes analysis cheap but methodology choices are expensive",
      take: "Before investing in MMM, incrementality programmes, or reporting automation, run four checks: (1) can you reconcile platform data to CRM within 15% — if not, fix tracking first? (2) do you have sufficient data history and spend for chosen methodology? (3) will results connect to actual budget decisions — or sit in unused dashboards? (4) does team capacity exist to validate AI outputs and act on findings? Fix tracking before MMM. Pilot incrementality on highest-spend channels. Automate reporting only after metric definitions are agreed.",
      why: "Measurement infrastructure is expensive to build and easy to shelf. This lens sequences investment so each layer produces actionable decisions — not analytics theatre.",
      paragraphs: [
        [
          s("Check one: tracking and data foundation. "),
          x(
            "CRM reconciliation, conversion event integrity, UTM discipline, and offline conversion import. AI analysis on broken data accelerates wrong decisions.",
            "Foundation gate: weekly platform-to-CRM variance below 15% for 8 consecutive weeks before MMM investment.",
          ),
          s(" No MMM or incrementality until foundation passes — fix inputs first."),
        ],
        [
          s("Check two: methodology fit for data maturity. "),
          x(
            "<18 months spend history: incrementality and platform triangulation only. 2+ years weekly data: MMM viable. <$50K monthly on channel: geo lift underpowered — defer or pool with similar campaigns.",
            "Methodology overreach produces false confidence — match tool to data.",
          ),
          s(" Document data maturity score in measurement roadmap — revisit quarterly."),
        ],
        [
          s("Checks three and four: decision connection and validation capacity. "),
          x(
            "Every measurement investment needs named decision: 'MMM sets Q1 channel envelopes.' Unused dashboards are shelfware. AI automation requires 15-minute daily validation capacity — budget headcount or reduce automation scope.",
            "Measurement ROI = decisions improved, not reports produced.",
          ),
          s(" Run lens in annual planning with finance — measurement budget tied to decision calendar."),
        ],
      ],
      examples: [
        {
          title: "Tracking-first sequencing",
          body: "A healthcare brand wanted enterprise MMM immediately. Lens check: platform-to-CRM variance 35%, offline conversions not imported. Deferred MMM 6 months; invested in server-side tracking and CRM integration. Variance dropped to 11%. MMM then produced stable coefficients. Skipped MMM would have misallocated 30% of budget per later incrementality spot-checks.",
        },
        {
          title: "Incrementality tied to budget trigger",
          body: "A marketplace set rule: any channel exceeding $200K monthly gets annual incrementality test. TikTok crossed threshold; test showed 1.1x iROAS. Budget increased 25% with confidence. Pinterest at $80K deferred — insufficient for powered test. Framework prevented both over-scale and under-investment.",
        },
        {
          title: "Automation without validation capacity",
          body: "Team deployed AI reporting to 12 stakeholders without validation ritual. Month 2: incorrect attribution window in one data pull — AI narrated wrong story to board. Programme paused 6 weeks for reputation recovery. Lens update: automation scope limited to 3 validated templates until headcount added.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Sum of platform-reported conversions across Google and Meta exceeds CRM conversions by 50%. What does this indicate?",
      options: [
        "CRM is broken — ignore it.",
        "Structural attribution overlap — platform data is directional; triangulate with CRM reconciliation and incrementality.",
        "Double the ad spend immediately.",
        "Switch to last-click attribution only.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Platform overlap is structural. Reconcile and triangulate. Re-read sections 6.1 and 6.5.",
      wrongFeedback:
        "Platform sum exceeding CRM indicates overlap, not CRM failure. Re-read sections 6.1 and 6.5.",
    },
    {
      q: "Retargeting shows 5x platform ROAS. Before increasing budget 3x, what validation is most important?",
      options: [
        "Check creative refresh dates only.",
        "Run incrementality holdout test — retargeting often captures conversions that would happen anyway.",
        "Trust platform ROAS — it's audited.",
        "Switch attribution to first-click.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Retargeting needs incrementality validation. Re-read section 6.3.",
      wrongFeedback:
        "High retargeting ROAS often includes non-incremental conversions. Test first. Re-read section 6.3.",
    },
    {
      kind: "order",
      q: "Order the measurement confidence layers from daily tactical to strategic.",
      prompt: "Drag to arrange from most frequent (top) to most strategic (bottom).",
      items: [
        "Platform metrics for in-channel bid and creative optimisation",
        "Incrementality tests for causal channel validation",
        "MMM for cross-channel budget allocation scenarios",
        "Unified framework with confidence labels for leadership decisions",
      ],
      correctFeedback:
        "Right. Platform (daily) → incrementality (periodic) → MMM (strategic) → unified view. Re-read sections 6.1–6.8.",
      wrongFeedback:
        "Platform is operational; MMM is strategic. Re-read sections 6.1–6.8.",
    },
    {
      kind: "categorize",
      q: "Sort each practice into the correct measurement layer.",
      categories: ["Platform / operational", "Incrementality", "MMM / strategic", "Governance"],
      items: [
        { text: "Daily tROAS bid adjustments within Google.", category: 0 },
        { text: "Geo holdout test on CTV spend.", category: 1 },
        { text: "Quarterly channel envelope from Robyn model.", category: 2 },
        { text: "CRM-to-platform weekly reconciliation.", category: 3 },
        { text: "Meta conversion lift on retargeting.", category: 1 },
        { text: "AI anomaly alert on tracking drop.", category: 0 },
      ],
      correctFeedback:
        "Right. Platform = daily ops. Incrementality = causal tests. MMM = strategic allocation. Governance = data integrity. Re-read sections 6.1–6.8.",
      wrongFeedback:
        "Match each practice to operational, incrementality, strategic, or governance. Re-read sections 6.1–6.8.",
    },
    {
      q: "A startup with 10 months of spend data wants enterprise MMM for annual budget. What does the decision lens recommend?",
      options: [
        "Proceed immediately — MMM always works.",
        "Defer MMM — insufficient history; use incrementality on top channels and platform triangulation until 24+ months data.",
        "Skip all measurement.",
        "Use only last-click attribution for annual budget.",
      ],
      correct: 1,
      correctFeedback:
        "Right. MMM needs data maturity. Re-read sections 6.2 and 6.8.",
      wrongFeedback:
        "MMM requires sufficient history. Start with incrementality. Re-read sections 6.2 and 6.8.",
    },
    {
      q: "AI automated report claims CPA improved 'because of' new creative, but creative launched after the metric change. What is wrong?",
      options: [
        "Nothing — AI is always correct.",
        "Causal language without validation — AI narratives need human review and correlation-only language for platform data.",
        "Delete all reporting.",
        "Add more AI models.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Validate AI narratives; avoid unverified causal claims. Re-read section 6.7.",
      wrongFeedback:
        "AI reports need human validation and careful causal language. Re-read section 6.7.",
    },
  ],
});
