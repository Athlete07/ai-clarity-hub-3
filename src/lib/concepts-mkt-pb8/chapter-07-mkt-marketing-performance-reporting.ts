import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter07MktMarketingPerformanceReporting = buildChapter({
  slug: "mkt-marketing-performance-reporting",
  number: 7,
  shortTitle: "Marketing Performance Reporting",
  title: "Marketing Performance Reporting — Executive Narratives, KPI Architecture, and Cadence That Drives Action",
  readingMinutes: 24,
  summary:
    "Marketing performance reporting translates analytics into decisions — executive dashboards, weekly ops reviews, channel scorecards, and board-ready narratives that connect spend to pipeline and revenue. AI automates data pulls, anomaly narration, and chart generation, but reporting impact depends on marketer-owned architecture: KPI hierarchy aligned to business goals, metric definitions finance accepts, reporting cadence matched to decision speed, and commentary that explains variance not vanity. Teams that ship 40-page decks without insight burn stakeholder attention; teams that report fewer metrics with clear actions earn budget trust.",
  keyTakeaway:
    "Reporting is a decision product, not a data dump. The sequence that wins: define KPI hierarchy and owners → build governed data views → match cadence to audience → narrate variance with recommended actions → audit report usage and retire noise → run the decision lens before adding dashboards. AI accelerates production; marketers own metric truth, narrative, and accountability.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "7.1",
      title: "Reporting Cadence & Audience Architecture",
      subtitle: "Daily ops, weekly performance, monthly executive, quarterly board — rhythm before slides",
      take: "Reporting architecture maps audiences to cadence and depth: media buyers need daily pacing; demand gen leads weekly funnel metrics; CMO monthly business review; board quarterly strategic KPIs. Each layer has defined metrics, data freshness SLA, and decision type (tactical tweak vs budget reallocation). AI schedules and drafts reports — marketers prevent duplicate metrics across layers that contradict when definitions drift.",
      why: "Wrong cadence produces either stale executive data or leadership drowning in daily noise. Architecture aligns reporting to how decisions actually get made.",
      paragraphs: [
        [
          s("One metric hierarchy, multiple views — not multiple truths. "),
          x(
            "North star at top: marketing-sourced pipeline or revenue contribution. Level 2: channel and programme KPIs. Level 3: tactical diagnostics. AI rolls up from governed warehouse — same MQL definition in daily and monthly reports.",
            "Separate spreadsheets per audience breed conflicting numbers in the same exec meeting.",
          ),
          s(" Metric dictionary linked in every report footer — definition version and owner."),
        ],
        [
          s("Freshness SLA per cadence layer. "),
          x(
            "Daily: platform and pacing data T+1. Weekly: CRM funnel T+2 after hygiene job. Monthly: finance-aligned revenue T+5. AI flags stale pipelines — report withheld if SLA missed rather than publish wrong data.",
            "Publishing monthly revenue before finance close destroys credibility — wait for reconciled actuals.",
          ),
          s(" Stale data banner on dashboards — transparency beats silent drift."),
        ],
        [
          s("Decision question on every report template. "),
          x(
            "Header: 'What decision does this enable?' Daily: pause or scale campaign. Weekly: reallocate channel budget. Monthly: continue or fix programme. AI draft commentary answers the question — marketers edit for accountability.",
            "Reports without decision framing become archive folder filler.",
          ),
          s(" Retire reports with no documented decision in two consecutive cycles."),
        ],
      ],
      examples: [
        {
          title: "Cadence clash fix",
          body: "CMO received daily 50-metric email and monthly different MQL count. Unified hierarchy in warehouse; daily shows pacing subset only. Contradiction incidents dropped to zero; CMO quoted marketing numbers in board for first time in year.",
        },
        {
          title: "SLA withhold",
          body: "CRM sync failure threatened weekly funnel report. Team withheld and published incident note vs stale data. Short-term pain; long-term trust. Stakeholders preferred honesty — adopted 'data status' traffic light in report header.",
        },
        {
          title: "Report retirement",
          body: "Audit found 14 weekly reports, 6 opened by <2 people. Retired 9; consolidated 3 into one weekly performance brief with decision question. Analyst time freed 30%; action items per meeting up 2x.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-ma-ch7-reporting-cadence",
      type: "nested",
      title: "Marketing Reporting Cadence Stack",
      caption:
        "KPI hierarchy → governed data views → daily/weekly/monthly/quarterly cadences → variance narrative and actions → stakeholder feedback → metric and report refinement.",
    }),
    buildSection({
      number: "7.2",
      title: "KPI Hierarchy & Metric Dictionary",
      subtitle: "North stars, leading indicators, and diagnostics — fewer metrics, clearer accountability",
      take: "KPI hierarchy defines how metrics roll up: revenue contribution → pipeline created → qualified demand → engagement → reach. Each KPI has owner, definition, data source, target, and leading/lagging classification. AI suggests metric correlations — marketers resist metric sprawl; every new KPI requires retirement candidate or explicit executive request.",
      why: "Metric proliferation creates dashboard obesity. Hierarchy forces trade-offs and clarifies what marketing is accountable for versus context metrics.",
      paragraphs: [
        [
          s("Limit executive KPIs to single digits. "),
          x(
            "CMO dashboard: 5–7 KPIs max with targets and variance. Supporting diagnostics linked, not on main view. AI can generate 100 charts — marketers curate for decision focus.",
            "Executive dashboard with 40 metrics trains leadership to ignore all of them.",
          ),
          s(" Annual KPI review with finance — add/drop requires joint sign-off."),
        ],
        [
          s("Metric dictionary is source of truth. "),
          x(
            "Fields: name, definition, formula, source system, refresh cadence, owner, known limitations. MQL example: 'Sales-accepted lead within 14 days of campaign touch' — not ambiguous label. AI documentation assistants draft entries — owners validate.",
            "Two teams defining ROAS differently makes every report meeting an argument.",
          ),
          s(" Dictionary versioned — breaking changes announced with migration date."),
        ],
        [
          s("Leading vs lagging balance on scorecards. "),
          x(
            "Lagging: revenue, pipeline closed. Leading: engagement depth, qualified meetings booked, SOV on priority topics. AI early-warning on leading indicator decay — intervene before lagging misses.",
            "Lagging-only reporting drives reactive cuts after damage is done.",
          ),
          s(" Each programme owner owns 1–2 leading indicators tied to lagging outcome."),
        ],
      ],
      examples: [
        {
          title: "KPI cap — executive focus",
          body: "CMO deck had 32 KPIs. Reduced to 6 with finance: marketing-sourced pipeline, CAC payback, brand SOV on 3 topics, NPS of demand programmes, ROMI range, headcount efficiency. Board questions became actionable; marketing secured budget with clearer story.",
        },
        {
          title: "Dictionary feud resolved",
          body: "Sales and marketing disputed MQL for 18 months. Dictionary workshop: single definition, HubSpot workflow, Salesforce sync field. Report variance between systems dropped from 22% to 3%. Weekly meeting time saved 4 hours.",
        },
        {
          title: "Leading indicator save",
          body: "Leading metric 'target account engagement score' dropped 30% 6 weeks before pipeline miss would show. Triggered ABM content sprint. Pipeline recovered — lagging miss avoided.",
        },
      ],
    }),
    buildSection({
      number: "7.3",
      title: "Dashboard Design & Data Visualisation",
      subtitle: "Clarity, comparability, and confidence — charts that answer questions in seconds",
      take: "Effective marketing dashboards prioritise comparability: vs target, vs prior period, vs forecast range. AI recommends chart types and highlights anomalies — marketers enforce design standards: consistent colour semantics (good/bad), annotation of data issues, and mobile-readable executive views. Dashboards link to dictionary and drill paths for analysts, not infinite scroll for CMO.",
      why: "Beautiful charts with wrong comparisons mislead faster than tables. Design standards prevent common errors — dual axis abuse, cherry-picked date ranges, unlabelled axes.",
      paragraphs: [
        [
          s("Default comparisons on every KPI tile. "),
          x(
            "Tile shows: current value, vs target %, vs prior period, sparkline 13 weeks. AI anomaly detection flags outliers with plain-language note. No tile without comparison context.",
            "Single big number tiles feel decisive but hide whether trend is improving.",
          ),
          s(" Design system documented — marketing analytics owns template library."),
        ],
        [
          s("Forecast and range overlays where decisions need uncertainty. "),
          x(
            "Pipeline dashboard: actual vs forecast band. Spend dashboard: pacing vs quarterly envelope. AI generates bands from forecast models — marketers explain methodology on hover.",
            "Point forecast line without band implies false precision — overlay ranges from chapter 5 practice.",
          ),
          s(" Finance-approved forecast source linked — one forecast in dashboards and planning."),
        ],
        [
          s("Accessibility and narrative order for executives. "),
          x(
            "Top-left: most important KPI. F-pattern layout. Colour-blind-safe palette. AI-generated executive summary paragraph above fold — marketer approves before send. Mobile PDF export for board prep.",
            "Dense Tableau workbooks that require training defeat purpose of executive dashboard.",
          ),
          s(" Quarterly dashboard usability test with 2 non-analyst executives — fix friction."),
        ],
      ],
      examples: [
        {
          title: "Comparison standard",
          body: "Rebuilt CMO dashboard with mandatory vs-target and vs-LY on all tiles. Time-to-insight in user testing dropped from 4 minutes to 40 seconds. CMO began sharing dashboard link vs requesting custom slides.",
        },
        {
          title: "Range overlay — pipeline",
          body: "Added forecast band to pipeline dashboard after single-line miss caused panic. Band context showed actual within range — avoided knee-jerk programme cut. Stakeholders learned to read uncertainty.",
        },
        {
          title: "Mobile board pack",
          body: "AI auto-generated mobile PDF from dashboard with narrative summary. Board prep time cut 6 hours per quarter; fewer one-off slide requests to analytics team.",
        },
      ],
    }),
    buildSection({
      number: "7.4",
      title: "Channel & Campaign Scorecards",
      subtitle: "Programme-level accountability — standard templates across paid, owned, and earned",
      take: "Channel scorecards standardise reporting per programme type: paid media (spend, CPA, ROAS range, incrementality flag), content (engagement depth, influenced pipeline), email (revenue per send, list health), events (pipeline per attendee, cost per SQL). AI populates scorecards from warehouse — marketers define minimum viable metrics per channel to prevent apples-to-oranges executive debates.",
      why: "Channel teams optimising different metrics work against each other. Standard scorecards enable portfolio allocation conversations.",
      paragraphs: [
        [
          s("Template per channel with finance-aligned efficiency metrics. "),
          x(
            "Paid: cost per qualified opp, not just CPL. Content: influenced revenue with documented attribution window. Events: pipeline 90-day post-event. AI fills templates — channel leads annotate variance drivers.",
            "CPL leaderboard without quality weighting starves enterprise programmes.",
          ),
          s(" Scorecard template version in dictionary — channels cannot invent one-off ROAS definitions."),
        ],
        [
          s("Portfolio view rolls up with guardrails. "),
          x(
            "Blended CAC and pipeline mix by channel. AI flags when single channel exceeds concentration risk threshold. Marketers present portfolio trade-offs, not channel beauty contests.",
            "Optimising each channel in isolation over-invests in last-click winners.",
          ),
          s(" Monthly portfolio review: reallocate 10–15% experimental budget based on scorecard trends."),
        ],
        [
          s("Incrementality and test flags on scorecards. "),
          x(
            "Badge when channel metric validated by holdout or geo test; 'directional' badge when platform-only. AI pulls from experimentation registry — honesty prevents over-scale from inflated ROAS.",
            "Scorecards without confidence badges repeat attribution crisis mistakes at reporting layer.",
          ),
          s(" Experimental results linked from scorecard — methodology one click away."),
        ],
      ],
      examples: [
        {
          title: "Paid scorecard — quality shift",
          body: "Paid team optimised CPL; SQL rate collapsed. Scorecard added cost-per-SQL and opp rate. Reallocated 20% spend from low-quality lead gen to content syndication with better SQL conversion. Blended pipeline up 14% at flat spend.",
        },
        {
          title: "Portfolio concentration",
          body: "AI flag: 72% pipeline from paid search — concentration risk. Portfolio review diversified into ABM and events. When search CPCs spiked Q3, pipeline impact buffered vs prior year search dependency.",
        },
        {
          title: "Incrementality badge",
          body: "Meta ROAS 4x on scorecard marked 'directional' until geo holdout completed. True incremental ROAS 2.1x — scaled with corrected envelope. Avoided 35% overspend that platform metrics suggested.",
        },
      ],
    }),
    buildSection({
      number: "7.5",
      title: "Executive Narrative & Variance Commentary",
      subtitle: "So what, now what — AI drafts, marketers own the story and commitments",
      take: "Executive reporting requires narrative: what happened, why (decomposed variance), so what (business impact), now what (recommended actions with owners). AI drafts commentary from metric deltas and anomaly detection — marketers edit for context machines miss: competitive launch, data fix, campaign creative change. Narrative precedes appendix charts in every exec pack.",
      why: "Data without story forces executives to interpret — they often interpret pessimistically. Marketer-owned narrative builds trust and drives aligned action.",
      paragraphs: [
        [
          s("Variance decomposition before blame. "),
          x(
            "Pipeline miss: split volume vs conversion vs cycle length vs data. AI automates decomposition tables — marketers validate drivers before narrative. Blaming 'market' without decomposition erodes credibility.",
            "Single-line 'pipeline down 12%' commentary invites unproductive speculation.",
          ),
          s(" Decomposition template mandatory for any KPI >10% off target."),
        ],
        [
          s("Recommendations with named owners and dates. "),
          x(
            "Every exec report ends with 3 actions max: owner, due date, expected impact. AI suggests actions from playbooks — CMO approves. Next report opens with prior action status.",
            "Insight without ownership is entertainment — action tracking closes accountability loop.",
          ),
          s(" Action log visible to finance — marketing commitments tracked like sales quota."),
        ],
        [
          s("Tone calibrated to audience risk tolerance. "),
          x(
            "Board: ranges, strategic themes, risk flags. CMO staff: tactical detail OK. AI tone adjustment drafts — marketers ensure honesty without alarmism or false cheer.",
            "False positivity in narrative sets up surprise when actuals land — ranges build trust.",
          ),
          s(" Pre-read sent 24 hours before meeting — narrative questions addressed live not cold."),
        ],
      ],
      examples: [
        {
          title: "Decomposition save",
          body: "Pipeline miss looked catastrophic — decomposition showed 9% CRM sync duplicate removal (one-time), 5% real conversion softening. Narrative prevented panic budget freeze; targeted fix on conversion programme.",
        },
        {
          title: "Action log discipline",
          body: "Monthly marketing review tracked 3 actions with owners. Completion rate rose from 40% to 85% when tied to CMO staff meeting opener. Finance cited action log as model for cross-functional accountability.",
        },
        {
          title: "Board range narrative",
          body: "Shifted board slide from 'pipeline $42M' to '$38–44M range with assumptions.' Board questions shifted from 'why wrong last quarter' to 'what triggers upside scenario' — productive planning dialogue.",
        },
      ],
    }),
    buildSection({
      number: "7.6",
      title: "Automated Reporting & AI Narration",
      subtitle: "Scheduled delivery, anomaly alerts, and draft commentary — scale without losing judgment",
      take: "Automated reporting pipelines pull governed metrics, apply templates, generate AI narrative drafts, and deliver via Slack, email, or BI subscriptions. Anomaly alerts fire when metrics breach thresholds — with context suppression to prevent alert storms. Marketers configure human approval gates for executive-facing automation; tactical reports can auto-send with audit log.",
      why: "Manual reporting burns analyst time on copy-paste. Automation without governance sends wrong numbers at scale — approval gates and SLA checks are non-negotiable for exec audiences.",
      paragraphs: [
        [
          s("Data quality gates before auto-send. "),
          x(
            "Checks: row count vs expected, null rate, reconciliation to finance subledger, freshness timestamp. Fail gate blocks send — AI drafts incident message instead. Marketers define gate rules per report tier.",
            "Auto-send on bad data multiplies credibility damage by recipient count.",
          ),
          s(" Gate failure runbook — who fixes, SLA to retry, manual fallback template."),
        ],
        [
          s("AI narration as draft, not decree. "),
          x(
            "AI summarises deltas, flags anomalies, suggests drivers from metric correlations. Human approver edits 5 minutes — publishes. Feedback loop: approver corrections train prompt improvements.",
            "Fully unattended AI narrative to CMO risks confident wrong explanations.",
          ),
          s(" Approval SLA: exec reports within 2 hours of data ready; tactical auto OK."),
        ],
        [
          s("Alert threshold tuning with seasonality. "),
          x(
            "Static thresholds false-alarm on Black Friday or month-end. AI seasonal baselines reduce noise — marketers set minimum materiality (e.g., >8% off plan AND >$50K pipeline).",
            "Alert fatigue from dumb thresholds — teams mute channel and miss real issues.",
          ),
          s(" Monthly alert false-positive review — tune or retire noisy rules."),
        ],
      ],
      examples: [
        {
          title: "Gate block",
          body: "Duplicate UTM campaign IDs inflated paid conversions 35%. Quality gate caught vs platform API sanity check. Auto-send blocked; fixed attribution before weekly exec email. Avoided CMO presenting inflated ROAS to CEO.",
        },
        {
          title: "AI draft efficiency",
          body: "Weekly performance email AI draft + 10-minute analyst edit vs 3-hour manual write. Same narrative quality per stakeholder survey. Analyst hours reallocated to incrementality analysis.",
        },
        {
          title: "Seasonal alert tuning",
          body: "November CPA alerts fired daily — normal seasonality. AI baseline model reduced false alerts 80%; retained alert on true creative fatigue anomaly. Team re-enabled Slack alerts after prior mute.",
        },
      ],
    }),
    buildSection({
      number: "7.7",
      title: "Report Adoption & Continuous Improvement",
      subtitle: "Usage analytics, stakeholder feedback, and retirement — reports are products",
      take: "Reporting programmes measure themselves: dashboard views, report opens, time-on-page, action item completion, and stakeholder survey scores. AI analyses usage patterns — low adoption triggers retirement or redesign, not more pages. Quarterly reporting retrospective with top stakeholders: what decisions improved, what metrics confused, what to add or kill.",
      why: "Reports nobody reads waste data engineering and analyst capacity. Adoption metrics justify investment and force prioritisation.",
      paragraphs: [
        [
          s("Track usage like a product team. "),
          x(
            "BI tool analytics: unique viewers, refresh rate, drill paths. Email: open and link click. Meeting: was report referenced in decisions? AI usage summary for quarterly retro.",
            "Shipping reports without adoption measurement repeats build-and-ignore cycle.",
          ),
          s(" Adoption KPI for marketing ops — % exec metrics viewed within 48 hours of publish."),
        ],
        [
          s("Stakeholder interviews on decision impact. "),
          x(
            "Semi-annual: 5 interviews with sales, finance, CMO staff. Questions: which report drove last budget decision? what's missing? what's noise? AI synthesises themes — marketers prioritise backlog.",
            "Assuming you know what executives need without asking builds vanity dashboards.",
          ),
          s(" Interview themes logged — linked to report retirement or redesign tickets."),
        ],
        [
          s("Version and changelog discipline. "),
          x(
            "Report version, metric definition changes, known issues. AI drafts changelog from dictionary diffs — stakeholders subscribe. Surprise definition changes destroy trust faster than missing a chart.",
            "Silent KPI definition change makes historical comparison invalid — changelog prevents confusion.",
          ),
          s(" Major version bump requires training micro-session or Loom for affected audiences."),
        ],
      ],
      examples: [
        {
          title: "Retirement from usage data",
          body: "Channel deep-dive deck: 3 views/month. Retired; metrics merged into standard scorecard. Analytics team saved 16 hours/month; channel lead reported no loss in decision quality.",
        },
        {
          title: "Interview-driven redesign",
          body: "Finance interviews revealed ROMI definition mismatch in monthly pack. Redesigned finance-aligned ROMI view; joint sign-off. Finance began citing marketing ROMI in board materials — cross-functional win.",
        },
        {
          title: "Changelog trust",
          body: "MQL definition change announced via changelog + 15-minute sync. Zero 'why numbers jumped' tickets vs 12 confusion threads prior change without notice.",
        },
      ],
    }),
    buildSection({
      number: "7.8",
      title: "The Marketer Decision Lens — Reporting Investment",
      subtitle: "When to add KPIs, automate, or redesign — clarity and action over volume",
      take: "Before new dashboards, BI licences, or AI narration scale, run four checks: (1) is KPI hierarchy documented with finance — definitions before visuals? (2) does cadence match audience decisions — architecture before automation? (3) do exec reports include variance decomposition and owned actions — narrative before charts? (4) is adoption measured with retirement policy — product discipline before build? Invest in dictionary and cadence first. Scale automation when quality gates and approval workflows hold.",
      why: "AI makes report generation cheap — tempting teams to flood stakeholders while core metrics still conflict. This lens prioritises investments that improve decisions and trust.",
      paragraphs: [
        [
          s("Check one: dictionary and hierarchy. "),
          x(
            "Executives debate metric definitions in meetings → dictionary workshop before new dashboards. >10 exec KPIs on one view → consolidate before AI narration adds more text.",
            "More charts on conflicting definitions accelerate confusion.",
          ),
          s(" Dictionary completeness gate precedes executive dashboard v2 projects."),
        ],
        [
          s("Check two: cadence and freshness. "),
          x(
            "Monthly report used for daily decisions → build appropriate cadence layer first. Stale data incidents recurring → SLA and gates before auto-send scale.",
            "Faster delivery of wrong data is negative value.",
          ),
          s(" Quality gate implementation required before exec auto-send."),
        ],
        [
          s("Checks three and four: narrative and adoption. "),
          x(
            "Reports without action items → narrative template before distribution list growth. <50% adoption on exec dashboard → redesign or retire before building mobile app.",
            "Adoption and action are the reporting product outcomes.",
          ),
          s(" Run lens in quarterly marketing ops retrospective with finance partner."),
        ],
      ],
      examples: [
        {
          title: "BI licence deferred",
          body: "Vendor pitched enterprise BI for 200 users. Lens: dictionary 60% complete, CMO dashboard 22% monthly views. Deferred licence expansion; finished dictionary and redesigned exec view to 68% views. Then scaled BI to channel leads only.",
        },
        {
          title: "Automation gated",
          body: "Requested unattended AI board pack. Lens: no quality gates, one prior stale data incident. Built gates and approval workflow first; pilot auto-draft with CMO approval. Zero incidents in 3 quarters.",
        },
        {
          title: "KPI addition blocked",
          body: "VP demanded 4 new KPIs on exec dash. Lens: no retirement, already 11 KPIs. Negotiated swap: drop 4 diagnostics, add 2 strategic. Meeting duration dropped 20 minutes; focus improved.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "CMO and finance cite different MQL numbers in the same meeting. What should marketing fix first?",
      options: [
        "Add more dashboard charts.",
        "Build metric dictionary with joint definitions and governed data views before new reports.",
        "Send daily MQL emails to everyone.",
        "Use AI to generate longer narratives.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Dictionary and governed definitions precede visuals and automation. Re-read sections 7.1 and 7.2.",
      wrongFeedback:
        "Fix metric definitions and hierarchy before more reporting. Re-read sections 7.1 and 7.2.",
    },
    {
      q: "Executive dashboard has 35 KPIs and low engagement. What does the lens recommend?",
      options: [
        "Add AI-generated summaries for all 35.",
        "Consolidate to 5–7 KPIs with comparisons, diagnostics linked, and retire unused reports.",
        "Print larger monitors.",
        "Hide targets to reduce anxiety.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Fewer metrics with clear comparisons and adoption discipline. Re-read sections 7.2 and 7.8.",
      wrongFeedback:
        "Reduce KPI count and improve focus before scaling narration. Re-read sections 7.2 and 7.8.",
    },
    {
      kind: "order",
      q: "Order the marketing reporting system from first step to last.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Define KPI hierarchy and metric dictionary",
        "Match cadence and dashboards to audiences",
        "Narrate variance with owned actions",
        "Measure adoption and retire low-value reports",
      ],
      correctFeedback:
        "Right. Define → cadence → narrative → improve. Re-read sections 7.1–7.8.",
      wrongFeedback:
        "Start with definitions. Adoption closes the loop. Re-read sections 7.1–7.8.",
    },
    {
      kind: "categorize",
      q: "Sort each practice into the correct reporting layer.",
      categories: ["Architecture & KPIs", "Delivery & visuals", "Narrative & automation", "Improvement & lens"],
      items: [
        { text: "Metric dictionary with finance sign-off.", category: 0 },
        { text: "Forecast range overlay on pipeline chart.", category: 1 },
        { text: "Variance decomposition in exec commentary.", category: 2 },
        { text: "Report adoption tracking and retirement.", category: 3 },
        { text: "Channel scorecard templates.", category: 1 },
        { text: "Data quality gate before auto-send.", category: 2 },
      ],
      correctFeedback:
        "Right. Architecture = KPIs and cadence. Delivery = dashboards and scorecards. Narrative = commentary and gates. Improvement = adoption and lens. Re-read sections 7.1–7.8.",
      wrongFeedback:
        "Match each practice to architecture, delivery, narrative, or improvement. Re-read sections 7.1–7.8.",
    },
    {
      q: "Automated exec report nearly sent with inflated conversions due to bad data. What failed?",
      options: [
        "Chart colour palette.",
        "Data quality gates and human approval before executive auto-send.",
        "Too few KPIs.",
        "Board meeting cadence.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Quality gates and approval protect exec credibility. Re-read sections 7.6 and 7.8.",
      wrongFeedback:
        "Implement gates and approval before scaling automation. Re-read sections 7.6 and 7.8.",
    },
    {
      q: "Weekly report has data but no decisions change. What investment comes first?",
      options: [
        "Add 20 more pages of appendix.",
        "Decision question header, action items with owners, and adoption review.",
        "Switch BI vendor.",
        "Remove all commentary.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Reports must drive actions and be measured for adoption. Re-read sections 7.5 and 7.7.",
      wrongFeedback:
        "Add decision framing and action tracking before more content. Re-read sections 7.5 and 7.7.",
    },
  ],
});
