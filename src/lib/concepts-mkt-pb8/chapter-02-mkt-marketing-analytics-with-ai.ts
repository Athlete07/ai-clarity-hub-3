import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter02MktMarketingAnalyticsWithAi = buildChapter({
  slug: "mkt-marketing-analytics-with-ai",
  number: 2,
  shortTitle: "Marketing Analytics with AI",
  title: "Marketing Analytics with AI",
  readingMinutes: 24,
  summary:
    "Marketing analytics with AI transforms backward-looking reporting into forward-looking decision support — natural-language querying on warehouse data, journey and path analysis, cohort retention curves, funnel leak diagnosis, channel mix recommendations, and automated anomaly narratives. AI compresses analysis time from days to minutes, but outputs are only as trustworthy as GA4, Segment, and Snowflake inputs. This chapter maps the analytics workflow from ingest to recommendation, NL tools, journey and cohort methods, funnel diagnostics, mix optimisation, automated insights, and the operating model marketers must own.",
  keyTakeaway:
    "Use AI to accelerate the analytics workflow — ingest, analyse, narrate, recommend — not to skip methodology. Marketers validate AI-surfaced patterns against business context, own metric definitions, and act on insights within campaign cadence. Cheap analysis on dirty data is worse than slow analysis on governed data.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "2.1",
      title: "The AI-Assisted Analytics Workflow",
      subtitle: "Ingest, analyse, extract insight, narrate, and recommend — the five-stage loop that turns data into decisions",
      take: "The AI-assisted analytics workflow runs: ingest and clean warehouse data → analyse journeys, cohorts, and funnels → extract patterns with ML or LLM → narrate decision-ready stories → recommend next actions with confidence caveats. Tools like ThoughtSpot, Julius, Omni, or Claude on curated Snowflake views accelerate middle stages; humans own problem framing, validation, and execution. Workflow fails when narration outruns data quality or recommendations ignore seasonality and external shocks.",
      why: "Teams that bolt ChatGPT onto Excel without workflow design get plausible fiction. Structured workflow connects AI speed to governed data and action.",
      paragraphs: [
        [
          s("Start every analysis with a decision question, not a dataset dump. "),
          x(
            "Frame: 'Should we shift $50K from LinkedIn to search this quarter?' AI explores supporting evidence — cohort SQL rates, marginal CAC, funnel leaks — when question is specific.",
            "Open-ended 'what's interesting?' prompts produce vanity insights — engagement spikes from bot traffic, etc.",
          ),
          s(" Document decision, data sources, and conclusion in shared log — builds institutional memory."),
        ],
        [
          s("Constrain AI to governed data marts and metric dictionary. "),
          x(
            "Looker explores, dbt marts, or CSV exports with column definitions — not raw Segment events with ambiguous field names.",
            "ThoughtSpot Sage and similar tools query semantic layers; marketers define business terms once.",
          ),
          s(" Red-team AI outputs: ask for SQL or logic trace when stakes are high."),
        ],
        [
          s("Close loop with action and measurement. "),
          x(
            "Recommendation without owner and deadline is theatre. HubSpot campaign tags track post-insight tests; review in next analytics cadence.",
            "AI weekly digest templates: anomaly, hypothesis, recommended test, expected lift range.",
          ),
          s(" Retire insights that did not change behaviour — refine workflow instead."),
        ],
      ],
      examples: [
        {
          title: "Warehouse-native workflow — B2B SaaS",
          body: "A SaaS marketing team connected Claude to Snowflake via secure ODBC on dbt marts only. Weekly ritual: three decision questions from CMO, AI drafts SQL and narrative, analyst validates, actions assigned in Asana. Time from question to tested campaign dropped from 12 days to 3. Pipeline influence from insight-driven tests +14% in two quarters.",
        },
        {
          title: "ThoughtSpot for self-serve — retail",
          body: "A retailer deployed ThoughtSpot on BigQuery with retail calendar semantics. Category managers queried promo lift without analyst queue. AI highlights flagged margin erosion in two SKUs — human validated inventory data. Markdown decision saved $180K obsolete stock.",
        },
        {
          title: "Workflow failure — ungoverned export",
          body: "A team fed raw HubSpot export to ChatGPT — duplicate contacts inflated lead velocity insight. False alarm caused unnecessary hiring. Fix: dbt deduped mart + mandatory analyst sign-off on AI narratives before leadership distribution.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-ma-ch2-analytics-workflow",
      type: "flow",
      title: "AI-Assisted Analytics Workflow",
      caption:
        "Ingest → analyse → extract insight → narrate → recommend. AI accelerates the middle; marketers own questions, validation, and action.",
    }),
    buildSection({
      number: "2.2",
      title: "Natural Language Data Querying",
      subtitle: "ThoughtSpot, Julius, Omni, and LLM-on-warehouse — self-serve analytics without SQL fluency",
      take: "Natural language querying lets marketers ask questions in plain English — 'MQL to SQL rate by channel last quarter' — and receive tables or charts from semantic layers or generated SQL. AI translates intent to queries against Snowflake, BigQuery, or Looker explores. Accuracy depends on semantic model quality and disambiguation of terms like 'conversion' or 'customer'. NLQ democratises access; it does not replace metric governance.",
      why: "Analyst bottlenecks delay decisions. NLQ frees specialists for complex modelling while marketers self-serve routine cuts.",
      paragraphs: [
        [
          s("Build semantic layer before deploying NLQ tools. "),
          x(
            "Define dimensions: channel, campaign, region, product line. Metrics: MQL, SQL, pipeline, revenue — with SQL logic documented in dbt or LookML.",
            "Ambiguous 'revenue' — booked, recognised, or marketing-influenced — causes wrong answers confidently.",
          ),
          s(" Test 20 canonical questions monthly; fix semantic gaps when AI misinterprets."),
        ],
        [
          s("Use NLQ for exploration; export SQL for production reports. "),
          x(
            "Ad-hoc questions in Julius or ThoughtSpot; recurring board metrics in fixed Looker dashboards. Save validated AI-generated SQL as dbt models when reused.",
            "LLMs hallucinate joins on unfamiliar schemas — human review before automating.",
          ),
          s(" Restrict write access — NLQ read-only on production warehouse."),
        ],
        [
          s("Train marketers on question craft and scepticism. "),
          x(
            "Good: 'Compare cost per SQL for LinkedIn vs Google, US enterprise segment, Q1–Q2.' Bad: 'Which channel is best?'",
            "Ask AI to show underlying SQL and row counts — spot empty joins and fan-out.",
          ),
          s(" Office hours with data team — build literacy, not dependency."),
        ],
      ],
      examples: [
        {
          title: "Julius on warehouse — growth team",
          body: "A PLG company connected Julius to Snowflake product and marketing marts. PMM queried trial-to-paid by acquisition source without SQL. Discovered podcast sponsorship cohort retained 2.1x average — budget reallocated before annual contract renewal. Analyst promoted top queries to dbt models for dashboard permanence.",
        },
        {
          title: "Looker + Gemini — enterprise",
          body: "An enterprise enabled Looker natural language on governed explores. Marketing ops asked 'pipeline created by campaign type YoY' — correct on first try due to strict LookML. Mis-ask on 'leads' returned MQL not raw form fills — semantic layer disambiguation prevented decision error.",
        },
        {
          title: "NLQ guardrails — regulated",
          body: "A financial services firm allowed NLQ only on aggregated marts — no row-level PII. Queries logged for compliance. Marketers gained speed on channel mix; legal approved read-only role. Attempt to query individual emails blocked at warehouse policy layer.",
        },
      ],
    }),
    buildSection({
      number: "2.3",
      title: "Customer Journey Analysis",
      subtitle: "Path exploration, touchpoint sequences, and AI-surfaced journeys from GA4, Segment, and warehouse data",
      take: "Journey analysis maps touchpoint sequences before conversion — ads, content, email, sales, product. GA4 path exploration, Adobe Journey Analytics, and warehouse session stitching show common routes and dead ends. AI clusters millions of paths into archetypes — 'content-heavy research', 'sales-led enterprise', 'product trial first'. Insights inform nurture design and attribution assumptions; journeys are descriptive, not causal without incrementality.",
      why: "Last-click hides the journey that actually convinced buyers. Journey view reallocates content and sales touch investments.",
      paragraphs: [
        [
          s("Stitch cross-channel identity before path analysis. "),
          x(
            "Segment anonymous_id to user_id merge in warehouse; GA4 User-ID for logged-in flows. Without stitch, journeys fragment at login.",
            "B2B journeys span months — window 90–180 days for opportunity creation analysis.",
          ),
          s(" Exclude internal and bot traffic — path reports inflate on polluted data."),
        ],
        [
          s("Identify high-converting path archetypes. "),
          x(
            "AI clustering on path strings surfaces patterns: pricing page after two blog touches vs direct demo request. Double down on content sequences that precede SQL.",
            "Low-volume high-value paths matter — enterprise may be 5% of sessions but 40% of pipeline.",
          ),
          s(" Translate archetypes into HubSpot nurture branches and sales play triggers."),
        ],
        [
          s("Pair journey insight with qualitative validation. "),
          x(
            "Gong calls confirm whether data paths match buyer stories — procurement loops invisible in digital-only data.",
            "AI journey summaries for leadership need sample size and segment filters stated.",
          ),
          s(" Refresh journey analysis quarterly — product and channel mix shift paths."),
        ],
      ],
      examples: [
        {
          title: "Path to pipeline — cybersecurity",
          body: "A cybersecurity vendor analysed 180-day paths in Snowflake from Segment events to Salesforce opportunity. Top SQL path: Gartner report download → webinar → pricing page → SDR outreach. Cut low-converting display touchpoints from nurture maps. SQL rate from report cohort rose 26%.",
        },
        {
          title: "PLG journey — analytics tool",
          body: "A PLG analytics product found 62% of paid conversions touched docs before signup — not homepage ads. AI clustered paths with docs depth score. Invested in AI-assisted doc expansion and in-app guides; paid search held flat while organic trial rate rose 33%.",
        },
        {
          title: "Omnichannel retail journey",
          body: "A retailer linked GA4, loyalty ID, and store POS in BigQuery. Journey analysis showed email → browse → store purchase within 7 days for 18% of revenue. Refined email send time and local inventory ads. Omnichannel attributed revenue in board deck for first time.",
        },
      ],
    }),
    buildSection({
      number: "2.4",
      title: "Cohort Analysis with AI",
      subtitle: "Retention curves, revenue cohorts, and AI-detected behavioural segments over time",
      take: "Cohort analysis groups users by acquisition period, channel, or campaign and tracks behaviour over time — retention, expansion revenue, repeat purchase. Warehouse SQL or Amplitude, Mixpanel, and Heap provide cohort charts; AI flags cohorts with anomalous decay or unexpected LTV. Marketing uses cohorts to judge channel quality beyond day-zero CPA and to time re-engagement. Cohort definitions must be stable — changing signup definition breaks comparability.",
      why: "Blended averages hide channel quality differences. Cohorts expose which acquisition sources produce durable customers.",
      paragraphs: [
        [
          s("Define cohort key and success metric upfront. "),
          x(
            "Acquisition week × channel; success = week-8 retention, 90-day revenue, or expansion event. Align with finance on revenue recognition timing.",
            "B2B: cohort on opportunity create date and marketing source, not just lead create.",
          ),
          s(" Store cohort logic in dbt — reproducible, not one-off spreadsheet."),
        ],
        [
          s("Compare cohorts at equal maturity — no partial periods. "),
          x(
            "January cohort viewed at 90 days in April; February cohort needs May for fair compare. AI tools may not auto-handle — marketers set date filters.",
            "Seasonality affects retail cohorts — YoY compare for holiday acquisition.",
          ),
          s(" Visualise retention curves, not just single-point conversion."),
        ],
        [
          s("Act on cohort divergence with targeted programmes. "),
          x(
            "Weak week-4 retention from paid social cohort triggers onboarding email experiment. Strong enterprise cohort from events justifies budget increase.",
            "AI surfaces 'cohorts worth investigation' — humans assign cause and action.",
          ),
          s(" Link cohort dashboards to quarterly channel review agenda."),
        ],
      ],
      examples: [
        {
          title: "Channel quality reveal — subscription app",
          body: "A subscription app compared 6-month retention by Meta vs Apple Search Ads cohorts. Meta CPA lower but month-6 retention 40% worse. AI flagged divergence at week 3. Shifted 30% budget to ASA and improved creative targeting on Meta for quality signals. Blended LTV:CAC improved 22%.",
        },
        {
          title: "B2B expansion cohorts — HubSpot + Snowflake",
          body: "A SaaS vendor cohorted accounts by first marketing touch on expansion revenue year two. Webinar-first accounts expanded 1.7x email-only. Doubled executive webinar programme; expansion pipeline from marketing-influenced accounts rose 19%.",
        },
        {
          title: "Cohort false alarm — definition drift",
          body: "AI flagged Q2 cohort underperforming Q1 — investigation showed MQL definition tightened mid-quarter. Fixed definition in dbt; reran analysis. Lesson: document definition changes in cohort metadata before trusting AI anomaly.",
        },
      ],
    }),
    buildSection({
      number: "2.5",
      title: "Funnel Diagnosis & Leak Detection",
      subtitle: "Stage conversion analysis, AI anomaly detection, and the fixes that move accounts forward",
      take: "Funnel diagnosis measures conversion between defined stages — visit to lead, MQL to SQL, trial to paid — and locates leaks. GA4 funnels, HubSpot funnel reports, and warehouse stage-transition tables quantify drop-off; AI highlights stages with sudden decay or segment-specific holes. Fixes target the stage: broken form, weak nurture, sales SLA miss, product friction. Diagnosis without stage definitions in CRM is guesswork.",
      why: "Optimising top-of-funnel when consideration leaks wastes spend. Funnel diagnostics focus improvement where elasticity is highest.",
      paragraphs: [
        [
          s("Align funnel stages across GA4, HubSpot, and Salesforce. "),
          x(
            "Single wiki definition: what event or field marks MQL, SQL, SAL. Misalignment makes AI leak detection point at wrong stage.",
            "RevOps owns stage transitions; marketing owns pre-SQL funnel.",
          ),
          s(" Measure stage conversion weekly with 4-week rolling average — reduce noise."),
        ],
        [
          s("Segment funnel by ICP tier, channel, and region. "),
          x(
            "Aggregate funnel hides enterprise leak at demo no-show while SMB converts fine. AI segmentation suggests which slices to prioritise.",
            "Amplitude and Mixpanel support property breakdown; warehouse SQL flexible for custom slices.",
          ),
          s(" Run one funnel fix experiment per quarter — measure stage lift, not vanity traffic."),
        ],
        [
          s("Combine quantitative leaks with qualitative why. "),
          x(
            "Drop at pricing page + Gong mentions budget timing → sales enablement fix, not more ads.",
            "AI summarises support tickets at leak stage — pattern detection on objection themes.",
          ),
          s(" Close loop: document fix and re-measure same cohort definition 30 days later."),
        ],
      ],
      examples: [
        {
          title: "MQL→SQL leak — integration SaaS",
          body: "Funnel showed 38% MQL→SQL drop after pricing page redesign. Heatmaps and AI ticket summary: missing enterprise tier clarity. Restored comparison table and ROI snippet; MQL→SQL recovered 11 points in 45 days. Salesforce stage history proved fix — not seasonal.",
        },
        {
          title: "Trial funnel — product-led",
          body: "A PLG tool found 55% trial drop at 'connect data source' step. AI clustered drop-off by integration type — Salesforce connector confusion. Product improved wizard; marketing retargeted abandoners with setup video. Trial-to-paid rose 18%.",
        },
        {
          title: "SDR SLA leak — enterprise",
          body: "Warehouse funnel: SQL to meeting held collapsed for LinkedIn-sourced leads. Discovery: 72-hour SLA miss vs 24-hour for inbound. RevOps fixed routing; leak closed in one sprint. LinkedIn SQL rate matched inbound within 60 days.",
        },
      ],
    }),
    buildSection({
      number: "2.6",
      title: "Channel & Mix Optimisation",
      subtitle: "Marginal ROI, diminishing returns, and AI-assisted budget reallocation recommendations",
      take: "Mix optimisation allocates budget across channels for maximum pipeline or revenue subject to constraints — brand minimums, geo coverage, test reserves. AI regression on historical spend-response curves estimates diminishing returns; platforms show marginal ROAS in Google and Meta when configured. Optimisation is strategic (quarterly envelopes) plus tactical (in-channel bidding). Model outputs are scenarios — marketers choose risk tolerance and execution capacity.",
      why: "Flat allocation across channels leaves money on table. AI accelerates scenario math; leaders still judge strategic bets MMM cannot see.",
      paragraphs: [
        [
          s("Model marginal not average performance. "),
          x(
            "Channel averaging 4x ROAS may be 1.2x on last $100K — AI spend-response curves from warehouse data reveal knee points.",
            "Google marginal ROAS columns and Meta cost cap experiments supplement warehouse models.",
          ),
          s(" Reallocate in bands ±15% per quarter — avoid daily whiplash from noisy AI suggestions."),
        ],
        [
          s("Include constraints AI omits by default. "),
          x(
            "Minimum brand search spend, event commitments, sales capacity for SQL volume, creative production limits.",
            "Scenario planner templates: base, aggressive prospecting, defensive retention.",
          ),
          s(" Document assumptions in every mix recommendation deck — finance challenges opaque models."),
        ],
        [
          s("Validate mix changes with holdouts when possible. "),
          x(
            "Geo or audience holdout on major shifts — incrementality confirms model suggestion.",
            "AI-proposed 40% LinkedIn cut gets 10% test holdout first in two regions.",
          ),
          s(" Review mix monthly ops, quarterly strategy — align to planning cycle."),
        ],
      ],
      examples: [
        {
          title: "Marginal ROAS — DTC",
          body: "A DTC brand used Snowflake spend and Shopify revenue by channel week. AI curve showed Meta saturation at $180K monthly — marginal ROAS below 1.5x. Shifted $60K to YouTube prospecting per scenario; blended ROAS up 12% at flat total spend.",
        },
        {
          title: "B2B mix — pipeline not CPL",
          body: "A B2B company optimised mix on cost per SQL not CPL. LinkedIn CPL 3x search but SQL-to-opp 2x better. AI scenario kept LinkedIn at 35% despite CFO pressure on CPL. Pipeline created rose 16%; CAC payback within target.",
        },
        {
          title: "Constraint-aware plan — global launch",
          body: "APAC launch required minimum local event spend — AI model initially cut events to zero. Marketer added constraints; revised scenario balanced digital and field. APAC pipeline target hit with 8% lower total spend than unconstrained model suggested.",
        },
      ],
    }),
    buildSection({
      number: "2.7",
      title: "Automated Insights & Anomaly Detection",
      subtitle: "AI digests, threshold alerts, and the human review that separates signal from noise",
      take: "Automated insights tools — Google Analytics Intelligence, Adobe anomaly detection, Amplitude Insight, custom dbt + Slack bots — flag metric deviations, trend breaks, and correlation spikes. LLMs narrate weekly marketing digests from dashboard screenshots or API pulls. Automation scales monitoring; humans filter false positives from launches, tracking bugs, and holidays. Insight without assigned owner decays into ignored Slack noise.",
      why: "Manual dashboard review misses slow leaks and sudden breaks. Automation surfaces candidates; marketers adjudicate and act.",
      paragraphs: [
        [
          s("Configure anomalies on business metrics, not raw sessions alone. "),
          x(
            "Alert on SQL volume, CPA, match rate, email revenue per send — metrics tied to decisions. Seasonality-aware models reduce false positives.",
            "GA4 Intelligence useful for directional flags; warehouse alerts on governed metrics for board-aligned KPIs.",
          ),
          s(" Triage SLA: critical alerts within 4 hours; weekly digest review every Monday."),
        ],
        [
          s("Template AI narratives with structure and caveats. "),
          x(
            "Sections: what changed, likely drivers, recommended investigation, do-not-panic list (known campaigns ending). Claude or GPT on Looker PDF exports — analyst edits before send.",
            "Include comparison period and sample size — 'SQL down 12% WoW, n=340' vs vague alarmism.",
          ),
          s(" A/B test digest format with leadership — engagement drives adoption."),
        ],
        [
          s("Log insight outcomes to train better thresholds. "),
          x(
            "False positive on Prime Day traffic spike → add retail calendar to anomaly model. True positive on tracking break → faster escalation runbook.",
            "Quarterly review: which alerts led to action vs noise — prune channels.",
          ),
          s(" Pair automated insight with single accountable reviewer per metric family."),
        ],
      ],
      examples: [
        {
          title: "Slack anomaly bot — ecommerce",
          body: "A retailer built dbt test + Slack bot on daily revenue, CVR, and AOV by channel. Bot flagged CVR drop on mobile checkout — engineering deploy correlated. Fix in 6 hours vs prior 3-day discovery via manual reports. Estimated saved $45K weekend revenue.",
        },
        {
          title: "Weekly AI digest — B2B",
          body: "Marketing ops automated Claude summary from five Looker tiles every Monday. CMO review time cut from 90 to 25 minutes. One digest caught branded search impression share collapse — competitor conquest detected; response campaign launched same week.",
        },
        {
          title: "False positive governance — product launch",
          body: "Amplitude anomaly fired on signup spike during Product Hunt launch — predictable. Added launch calendar overlay to suppress alerts. Documented in runbook; team trust in alerts recovered after prior cry-wolf fatigue.",
        },
      ],
    }),
    buildSection({
      number: "2.8",
      title: "Marketer Decision Lens: Analytics Operating Model",
      subtitle: "Cadence, roles, validation rules, and when to trust AI-generated analysis",
      take: "Analytics operating model defines who asks questions, who validates AI output, review cadence (weekly ops, monthly deep dive, quarterly strategy), and escalation when data conflicts. Marketers own business questions and actions; analysts own semantic layer and SQL; data engineering owns pipelines. AI is draft analyst — not autonomous decision-maker. Trust tiers: green (recurring governed metrics), yellow (exploratory, needs review), red (high-stakes budget shifts require human SQL proof and holdout).",
      why: "Without operating model, AI creates parallel shadow analytics — conflicting numbers and faster confusion.",
      paragraphs: [
        [
          s("Publish analytics RACI and cadence calendar. "),
          x(
            "Weekly: channel performance, funnel stage, alert triage. Monthly: cohort and journey review. Quarterly: mix scenarios and charter metrics.",
            "AI digests slot into weekly — not replace monthly deep dives.",
          ),
          s(" Share calendar with sales and finance — predictable rhythm beats ad-hoc panic."),
        ],
        [
          s("Define validation rules for AI outputs. "),
          x(
            "Two-source confirm for budget moves over $25K. Show SQL for any number in leadership deck. Ban one-click export to board without analyst spot-check.",
            "Red-team prompts: 'what would disprove this insight?'",
          ),
          s(" Train marketers on scepticism — confidence interval beats point estimate."),
        ],
        [
          s("Invest in semantic layer before more AI licences. "),
          x(
            "One governed mart beats three NLQ tools on dirty data. ROI from fixing dbt tests exceeds new narrative AI subscription.",
            "Operating model maturity score tracks self-serve adoption and incident rate.",
          ),
          s(" Annual retrospective: decisions changed by analytics — qualitative success metric."),
        ],
      ],
      examples: [
        {
          title: "RACI clarity — mid-market",
          body: "A 150-person company assigned marketing ops as AI narrative editor, data analyst as SQL validator, CMO as decision owner. Shadow ChatGPT analyses stopped. Board deck numbers single-sourced from Looker; AI only drafted commentary. Finance trust score improved in annual survey.",
        },
        {
          title: "Trust tiers — enterprise",
          body: "Enterprise marketing codified green/yellow/red insight paths. Red tier required incrementality or finance sign-off — blocked two AI-suggested cuts to brand search that MMM later validated as harmful. Yellow tier drove healthy experimentation.",
        },
        {
          title: "Cadence fix — chaotic startup",
          body: "Startup ran daily AI digests — no one acted. Shifted to weekly ops digest + monthly deep dive. Action rate per insight rose 4x; team stopped alert fatigue. Documented in analytics charter.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "AI analytics workflow — what must marketers own?",
      options: [
        "Only warehouse ETL code.",
        "Decision questions, validation, and action on insights.",
        "Eliminating all human analysts.",
        "Raw platform exports without governance.",
      ],
      correct: 1,
      correctFeedback:
        "Right. AI accelerates; marketers own questions and validation. Re-read sections 2.1 and 2.8.",
      wrongFeedback:
        "Workflow requires human framing and action. Re-read sections 2.1 and 2.8.",
    },
    {
      kind: "order",
      q: "Order the AI-assisted analytics workflow stages.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Ingest and clean data",
        "Analyse journeys, cohorts, funnels",
        "Extract patterns with AI",
        "Narrate decision-ready story",
        "Recommend next action",
      ],
      correctFeedback:
        "Right. Ingest through recommend — close the loop with action. Re-read section 2.1.",
      wrongFeedback:
        "Workflow runs ingest → analyse → insight → narrate → recommend. Re-read section 2.1.",
    },
    {
      kind: "categorize",
      q: "Sort each analysis type by primary question it answers.",
      categories: ["Journey analysis", "Cohort analysis"],
      items: [
        { text: "Which touchpoint sequence precedes SQL?", category: 0 },
        { text: "Do Meta-acquired users retain at week 8?", category: 1 },
        { text: "Path from blog to pricing to demo.", category: 0 },
        { text: "Q1 vs Q2 acquisition channel LTV curves.", category: 1 },
        { text: "Common routes before enterprise opp create.", category: 0 },
        { text: "Retention by signup week cohort.", category: 1 },
      ],
      correctFeedback:
        "Right. Journeys are paths; cohorts are groups over time. Re-read sections 2.3 and 2.4.",
      wrongFeedback:
        "Journey = path sequences; cohort = group behaviour over time. Re-read sections 2.3 and 2.4.",
    },
    {
      q: "Funnel leak at MQL→SQL — best first step?",
      options: [
        "Double top-of-funnel ad spend.",
        "Segment leak by channel/ICP and validate stage definitions in CRM.",
        "Trust AI to auto-fix CRM.",
        "Ignore — leaks average out.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Diagnose stage and segment before scaling spend. Re-read section 2.5.",
      wrongFeedback:
        "Fix stage alignment and segment leaks first. Re-read section 2.5.",
    },
    {
      q: "Channel mix optimisation should prioritise what metric?",
      options: [
        "Average CPL only.",
        "Marginal ROI and pipeline quality subject to constraints.",
        "Highest impression share.",
        "Most AI scenarios generated.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Marginal performance and constraints beat average CPL. Re-read section 2.6.",
      wrongFeedback:
        "Optimise marginal returns with real constraints. Re-read section 2.6.",
    },
    {
      kind: "categorize",
      q: "Match each practice to analytics operating model tier.",
      categories: ["Required for red-tier decisions", "Routine weekly ops"],
      items: [
        { text: "Human SQL proof for $50K budget shift.", category: 0 },
        { text: "Monday alert triage on CPA.", category: 1 },
        { text: "Holdout or incrementality validation.", category: 0 },
        { text: "AI draft weekly digest review.", category: 1 },
        { text: "Finance sign-off on major mix change.", category: 0 },
        { text: "Channel performance snapshot.", category: 1 },
      ],
      correctFeedback:
        "Right. High-stakes moves need proof; ops cadence is lighter. Re-read section 2.8.",
      wrongFeedback:
        "Red-tier decisions need validation and sign-off. Re-read section 2.8.",
    },
  ],
});
