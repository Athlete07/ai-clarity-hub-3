import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter08MktEmailAnalyticsProgrammeOptimisation = buildChapter({
  slug: "mkt-email-analytics-programme-optimisation",
  number: 8,
  shortTitle: "Email Analytics & Programme Optimisation",
  title: "Email Analytics & Programme Optimisation — Building Measurement Systems That Turn Email Data Into Revenue Decisions and Continuous Programme Improvement",
  readingMinutes: 24,
  summary:
    "Email programmes generate rich behavioural data — opens, clicks, conversions, revenue, cohort retention, and sequence progression — but most teams report vanity metrics without connecting email to pipeline and LTV. Analytics excellence requires a structured stack: ESP data integrated with CRM and product analytics, engagement analysis beyond opens, multi-touch attribution, sequence funnel diagnostics, content pattern mining, LTV modelling, and automated reporting. AI accelerates pattern detection and narrative reporting; marketers own metric definitions, attribution rules, and the optimisation roadmap that turns insights into programme changes.",
  keyTakeaway:
    "Email analytics is a decision system, not a monthly PDF. The optimisation loop: integrate data stack → analyse engagement and conversion by segment → attribute revenue with agreed rules → diagnose sequence and content performance → model LTV impact → automate reporting → prioritise roadmap by incremental ROI. AI surfaces patterns; marketers own definitions and action.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "8.1",
      title: "Email Analytics Stack Architecture",
      subtitle: "ESP, CRM, product analytics, data warehouse, and BI — single source of truth design",
      take: "Email analytics stack connects ESP event data (sends, opens, clicks, bounces, unsubscribes) to CRM (leads, opportunities, revenue) and product analytics (usage, activation) via data warehouse or CDP. AI tools sync and normalise data; marketers define event taxonomy, identity resolution rules, and dashboard hierarchy. Fragmented stacks — ESP reports in isolation — cannot attribute email to revenue or diagnose lifecycle impact.",
      why: "You cannot optimise what you cannot measure end-to-end. Stack architecture determines whether email analytics answers 'what revenue did email influence?' or only 'what was our open rate?'",
      paragraphs: [
        [
          s("Map data flows before selecting BI tools. "),
          x(
            "Minimum viable stack: ESP → CRM sync (contact activity, campaign membership) → GA4 or product analytics (onsite behaviour post-click) → warehouse (BigQuery, Snowflake) or CDP (Segment, Hightouch) → BI (Looker, Metabase). Event schema: email_sent, email_opened, email_clicked with campaign_id, link_id, contact_id, timestamp.",
            "Buying BI before fixing ESP-CRM sync produces empty dashboards.",
          ),
          s(" Data flow diagram maintained by marketing ops — updated on every new integration."),
        ],
        [
          s("Identity resolution is the critical integration layer. "),
          x(
            "Email address as primary key across ESP, CRM, and product. Form submissions, login events, and UTM persistence stitch anonymous sessions to known contacts. AI identity matching handles corporate domain variants — john.smith@company.com versus j.smith@company.com.",
            "Broken identity = clicks that never appear in CRM timeline or revenue attribution.",
          ),
          s(" Identity match rate KPI — target 85%+ of known contacts with linked product activity."),
        ],
        [
          s("Define metric ownership and calculation standards. "),
          x(
            "Document: how open rate is calculated (unique vs total), click-to-open rate, conversion window (7-day vs 30-day post-click), revenue attribution model. AI dashboards inherit definitions — ambiguous specs produce conflicting numbers across teams.",
            "Two dashboards, two open rates, zero trust in email reporting.",
          ),
          s(" Metric definition doc version-controlled — changes communicated to all stakeholders."),
        ],
      ],
      examples: [
        {
          title: "Warehouse-first email analytics",
          body: "A B2B company piped ESP, Salesforce, and Mixpanel events into BigQuery via Fivetran. Single email performance table joined campaign, contact, opportunity, and product usage. Time-to-build 8 weeks; replaced 4 conflicting spreadsheet reports. Email-influenced pipeline queryable in seconds — first accurate attribution after 2 years of ESP-only reporting.",
        },
        {
          title: "Identity resolution gap fix",
          body: "Email clicks showed 12,000 monthly; CRM logged 4,100 email activities. Root cause: UTM stripped on redirect, tracking pixel blocked on corporate firewall. Fix: first-party tracking domain, server-side event capture on form submit. Match rate rose to 88%; attributed pipeline increased 2.4x — not from more email, from better measurement.",
        },
        {
          title: "Metric definition conflict",
          body: "Marketing reported 28% open rate; finance dashboard showed 19%. Investigation: marketing used total opens, finance contract required unique opens excluding Apple MPP. Single definition adopted; reporting trust restored. MPP exclusion rule documented for all future dashboards.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-email-ch8-analytics-stack",
      type: "flow",
      title: "Email Analytics & Optimisation Stack",
      caption:
        "Integrated data stack → engagement and conversion analysis → revenue attribution → sequence and content diagnostics → LTV modelling → automated reporting → prioritised optimisation roadmap.",
    }),
    buildSection({
      number: "8.2",
      title: "Open & Click Engagement Analysis",
      subtitle: "Beyond vanity metrics — engagement quality, cohort trends, and device/client segmentation",
      take: "Open and click metrics require context: unique versus total, Apple Mail Privacy Protection inflation, click-to-open rate as engagement quality indicator, engagement by segment and cohort over time, and link-level click distribution. AI detects engagement anomalies and trend breaks; marketers interpret MPP impact, set realistic benchmarks by industry, and act on declining engagement slopes before deliverability suffers.",
      why: "Raw open rate without segmentation misleads — MPP-inflated opens on iOS mask declining Android engagement. Click analysis reveals content resonance; open rate alone cannot.",
      paragraphs: [
        [
          s("Segment opens by client and adjust interpretation. "),
          x(
            "Apple MPP pre-fetches opens — iOS open rates inflated 10–30 points versus pre-2021. Track CTO (click-to-open) and click rate as primary engagement KPIs. Segment reporting: Apple vs non-Apple opens labelled separately. AI MPP detection flags contacts with open-no-click MPP pattern.",
            "Comparing 2026 open rates to 2019 benchmarks is meaningless without MPP adjustment.",
          ),
          s(" Executive dashboards lead with click rate and CTO — opens footnoted with MPP caveat."),
        ],
        [
          s("Analyse engagement trends by cohort, not campaign snapshot. "),
          x(
            "Monthly cohort: subscribers acquired in Q1 — track 90-day engagement curve. Declining cohort engagement versus historical signals list fatigue or relevance drift. AI trend detection alerts when cohort CTR drops 2+ standard deviations from prior cohorts.",
            "Single campaign open rate spike from subject line test does not fix declining programme engagement.",
          ),
          s(" Cohort engagement dashboard reviewed quarterly — informs content and frequency strategy."),
        ],
        [
          s("Link-level click maps reveal content performance. "),
          x(
            "Heatmap of clicks per link position: hero CTA vs footer vs body links. Low hero CTR with high footer CTR indicates layout or copy problem. AI clusters link performance patterns across campaigns — 'case study links outperform blog 2.8x in nurture.'",
            "Aggregate click rate hides which content drives action.",
          ),
          s(" Link taxonomy tagged in ESP — reporting by content type, not just URL."),
        ],
      ],
      examples: [
        {
          title: "MPP-adjusted reporting",
          body: "A publisher's open rate appeared stable at 32% for 18 months. Segmented analysis: non-Apple CTR declined from 4.2% to 2.1%; Apple opens inflated total. Programme intervention based on click metrics — content relevance project — restored non-Apple CTR to 3.6%. Open rate 'stability' had masked real decline.",
        },
        {
          title: "Cohort engagement cliff",
          body: "AI flagged Q3 subscriber cohort had 40% lower 60-day click rate than Q1 cohort. Investigation: Q3 used lead magnet misaligned with newsletter content — attracted wrong audience. Acquisition source review and magnet replacement; Q4 cohort recovered to Q1 engagement levels.",
        },
        {
          title: "Link heatmap redesign",
          body: "B2B newsletter link map showed 62% of clicks on footer 'unsubscribe adjacent' secondary CTA, 8% on hero demo button. Layout restructure moved primary CTA above fold; hero CTR rose to 34% of total clicks. Demo requests from email up 45% without send volume change.",
        },
      ],
    }),
    buildSection({
      number: "8.3",
      title: "Revenue Attribution for Email",
      subtitle: "Last-touch, first-touch, linear, and time-decay models — agreeing rules with finance",
      take: "Email revenue attribution assigns credit for conversions and pipeline to email touchpoints. Models range from last-touch (email gets credit if last click before conversion) to multi-touch linear, time-decay, and position-based. AI implements attribution in warehouse; marketers negotiate model with finance and sales — consistent rules across channels prevent email being under or over-credited.",
      why: "Without agreed attribution, email fights for budget against paid media on unequal measurement terms. Attribution is a political and technical problem — solve both.",
      paragraphs: [
        [
          s("Start with last-touch plus assisted conversion reporting. "),
          x(
            "Last-touch email revenue: conversion within 7 days of email click, email last non-direct channel. Assisted: email in path but not last touch. Report both — last-touch for direct email ROI; assisted for programme influence. AI calculates multi-touch paths from warehouse session data.",
            "Last-touch alone undervalues nurture; assisted alone overvalues email in long cycles.",
          ),
          s(" Dual reporting prevents attribution model wars — both numbers available for different decisions."),
        ],
        [
          s("Define conversion window by sales cycle length. "),
          x(
            "B2C impulse: 1–7 day post-click window. B2B SaaS: 30–90 days. Enterprise: 180 days with opportunity stage weighting. Window too short misses nurture contribution; too long credits stale touches. AI analyses optimal window from click-to-conversion distribution.",
            "7-day window on 90-day sales cycle makes email look worthless.",
          ),
          s(" Conversion window in metric definition doc — finance sign-off required to change."),
        ],
        [
          s("Holdout groups validate email incrementality. "),
          x(
            "5–10% of eligible contacts excluded from promotional email — measure conversion and revenue versus mailed cohort. True incremental email ROI = treated revenue − holdout revenue. Attribution models estimate; holdout proves causation.",
            "Multi-touch attribution without holdout is correlation, not proof.",
          ),
          s(" Annual holdout on primary revenue-driving segment — minimum incrementality validation."),
        ],
      ],
      examples: [
        {
          title: "Dual attribution reporting",
          body: "A DTC brand reported last-touch email revenue $2.1M and assisted $5.8M quarterly. CFO funded email expansion on assisted metric; campaign manager optimised on last-touch for creative testing. Both metrics from same warehouse — no conflicting spreadsheets. Email budget grew 35% with finance alignment.",
        },
        {
          title: "Conversion window calibration",
          body: "B2B company used 7-day attribution window; email credited $180K quarterly pipeline. Extended to 60-day based on median 34-day click-to-opportunity lag. Attributed pipeline rose to $1.4M — same email programme, accurate window. Sales accepted email influence data for first time.",
        },
        {
          title: "Holdout reveals over-attribution",
          body: "Email programme claimed 22% conversion lift from welcome series. Holdout test showed 15% of lift was natural — incremental 7%. Still positive ROI but welcome series offer generosity reduced. Incrementality measurement prevented over-investment in discount-heavy onboarding.",
        },
      ],
    }),
    buildSection({
      number: "8.4",
      title: "Sequence & Automation Funnel Analysis",
      subtitle: "Drop-off by step, branch performance, time-to-convert, and automation health monitoring",
      take: "Sequence analytics measures funnel performance through automation workflows: send-to-open-to-click-to-convert by step, branch path comparison, time between steps, and exit reason distribution. AI identifies bottleneck steps and suggests branch adjustments; marketers diagnose whether drop-off is content, timing, audience, or technical failure.",
      why: "Automation programmes are funnels — optimising individual emails without sequence view misses the step where 60% of contacts disengage.",
      paragraphs: [
        [
          s("Build funnel visualisation for every revenue-critical sequence. "),
          x(
            "Steps: entered → email 1 opened → email 1 clicked → email 2 opened → ... → converted. Conversion rate and drop-off percentage per step. Compare branches: pricing click branch vs default path. AI flags steps with >2x average drop-off.",
            "Sequence with 8 emails and 2% terminal conversion — step 3 may lose 70% of entrants.",
          ),
          s(" Funnel dashboard per sequence — reviewed in monthly automation health meeting."),
        ],
        [
          s("Analyse time-to-convert and step timing. "),
          x(
            "Median days from sequence entry to conversion. Steps with long gaps — 14-day wait — may lose momentum; steps too tight may fatigue. AI optimises wait time from conversion timing distribution. A/B test step delay on high-volume sequences.",
            "Industry 'best practice' 3-day delays may be wrong for your cycle.",
          ),
          s(" Time-to-convert benchmarked by segment — enterprise sequences longer than SMB."),
        ],
        [
          s("Monitor automation technical health separately from content. "),
          x(
            "Trigger failure rate, sync lag between CRM and ESP, contacts stuck in step, duplicate entries, suppression bypass. AI anomaly detection on entry volume — 50% drop may be broken trigger, not audience exhaustion.",
            "Content optimisation on broken automation wastes effort.",
          ),
          s(" Technical health checklist weekly — ops owns, marketing reviews impact on funnel."),
        ],
      ],
      examples: [
        {
          title: "Bottleneck step identification",
          body: "Onboarding sequence: 10,000 entries monthly, 3.2% terminal activation. Funnel analysis: 68% drop between email 2 and 3 — 7-day wait with no engagement check. Test: branch non-openers to shorter re-engagement at day 3. Terminal activation rose to 5.1%. Single step fix beat six months of subject line tests.",
        },
        {
          title: "Branch performance comparison",
          body: "Nurture sequence branched on pricing click: fast track 4 emails, default 8 emails. Fast track converted at 12% vs default 4% — but only 8% of entrants branched. Lowered pricing click threshold; branch rate rose to 19%. Blended sequence conversion up 38%.",
        },
        {
          title: "Broken trigger silent failure",
          body: "Trial signup sequence entries dropped 70% over 2 weeks — no one noticed in open rate reports. CRM-ESP webhook failure after API update. Technical health alert now monitors daily entry count variance. Restored in 4 days; estimated 340 trials missed onboarding.",
        },
      ],
    }),
    buildSection({
      number: "8.5",
      title: "Content Pattern Mining",
      subtitle: "Subject lines, themes, CTAs, and send time — what wins in your data, not generic benchmarks",
      take: "Content pattern mining analyses historical campaign performance to identify winning subject line structures, content themes, CTA verbs, email length, personalisation tokens, and send times — specific to your audience, not industry blog posts. AI clusters and correlates content attributes with click and conversion rates; marketers validate patterns with significance testing before codifying playbooks.",
      why: "Generic 'best practices' — emoji in subject lines, Tuesday sends — may fail your audience. Internal pattern mining from your data produces actionable playbooks.",
      paragraphs: [
        [
          s("Tag campaigns with structured content metadata. "),
          x(
            "Fields: subject structure (question, number, personalisation, urgency), primary theme (proof, education, offer), CTA type (demo, content, purchase), word count band, personalisation level. AI auto-tags from content; marketer audits 10% sample. Untagged archive is unmineable.",
            "Pattern mining without metadata is manual guesswork at scale.",
          ),
          s(" Content tagging mandatory on campaign creation — ESP custom fields or warehouse enrichment."),
        ],
        [
          s("Mine patterns with statistical significance gates. "),
          x(
            "Minimum 20 campaigns per pattern cell before declaring winner. AI surfaces correlations: 'question subjects +18% CTO vs statement subjects, n=47 campaigns.' Marketer validates no confound — question subjects may correlate with nurture, not acquisition.",
            "Pattern from 3 campaigns is anecdote, not playbook.",
          ),
          s(" Quarterly pattern review doc — top 5 validated patterns added to copy brief templates."),
        ],
        [
          s("Segment patterns by audience and funnel stage. "),
          x(
            "Winning acquisition subject patterns differ from retention. Enterprise vs SMB content patterns diverge. AI segments pattern analysis by contact attributes. Universal 'winner' without segment context misapplies insights.",
            "Your best nurture subject line may be your worst cold outreach subject line.",
          ),
          s(" Pattern playbooks maintained per segment — AI copy tools fed segment-specific winners."),
        ],
      ],
      examples: [
        {
          title: "Subject line pattern library",
          body: "AI analysis of 240 campaigns: personalised subject with company name +22% CTO in B2B nurture (n=38); urgency words neutral or negative in same segment. Playbook updated: nurture subjects lead with personalisation, avoid false urgency. Applied to 12-week campaign cycle — blended CTO up 14%.",
        },
        {
          title: "CTA verb pattern — false positive",
          body: "Data showed 'Learn' CTA outperformed 'Get' 3:1. Confound analysis: 'Learn' campaigns were educational content with higher intrinsic engagement; 'Get' on demo asks to colder audience. Segment-specific retest: 'Get your demo' won on consideration-stage list. Pattern mining saved from wrong global rollout.",
        },
        {
          title: "Send time myth busted",
          body: "Industry benchmark: Tuesday 10am best send time. Internal pattern mining across 18 months: no significant day-of-week effect for B2B audience; hour-of-day effect 4% range only. Shifted investment from send time optimisation to content relevance. CTO improved 11% — bigger lever identified.",
        },
      ],
    }),
    buildSection({
      number: "8.6",
      title: "Customer LTV & Email Programme ROI",
      subtitle: "Email-attributed LTV, cohort revenue, programme cost, and payback modelling",
      take: "Email programme ROI connects engagement to customer lifetime value: revenue per subscriber cohort, email-attributed LTV versus non-email customers, programme cost including ESP, staff, and incentives, and payback period. AI models LTV from behavioural cohorts; marketers present email as revenue engine with same rigour as paid acquisition channels.",
      why: "Email judged on cost-per-send looks nearly free and gets under-invested. LTV framing justifies programme expansion, tooling, and headcount.",
      paragraphs: [
        [
          s("Calculate email-attributed LTV by acquisition cohort. "),
          x(
            "Cohort: subscribers from email signup in January — track 12-month revenue, retention, expansion. Compare to paid-acquired cohort LTV. Email subscribers often higher LTV due to engagement self-selection — quantify for stakeholder narrative.",
            "Subscriber LTV justifies list growth investment beyond deliverability concerns.",
          ),
          s(" LTV cohort report quarterly — shared with leadership alongside CAC by channel."),
        ],
        [
          s("Programme ROI includes full cost stack. "),
          x(
            "Costs: ESP platform, integrations, marketing ops and copy FTE allocation, design, incentives and discounts in email offers, deliverability tools. Revenue: attributed last-touch plus assisted per agreed model. ROI = (incremental revenue − cost) / cost.",
            "Free ESP tier ROI looks infinite until you count team time.",
          ),
          s(" ROI model in annual budget review — email competes for investment on same terms as paid."),
        ],
        [
          s("Connect email engagement to retention LTV, not just acquisition. "),
          x(
            "Engaged email subscribers retain at higher rates — model retention lift from email engagement tier. Disengaged subscriber LTV approaches zero. Engagement programme ROI includes retained revenue from retention email, not only new customer conversion.",
            "Acquisition-only email ROI undervalues retention and expansion programmes.",
          ),
          s(" Blended email ROI dashboard: acquisition + retention + expansion attributed revenue."),
        ],
      ],
      examples: [
        {
          title: "Email subscriber LTV premium",
          body: "Analysis: email-acquired customers 18-month LTV $840 versus paid social $520. Email programme cost $180K annual — attributed 4,200 new customers. LTV premium justified list growth and deliverability investment. Board approved email team expansion.",
        },
        {
          title: "Full-cost ROI reframes programme",
          body: "Email reported 12:1 ROI on ESP cost alone. Full-cost model including 2 FTE and tooling: 4.2:1 — still strong but justified automation investment to scale without linear headcount. Automation ROI measured separately at 6.8:1 incremental.",
        },
        {
          title: "Engagement tier LTV cliff",
          body: "Subscribers in Tier 1 engagement (30-day click) had 2.3x LTV versus Tier 3 (no click 90 days). Informed sunset policy — suppressing Tier 4 saved deliverability cost and focused programme on high-LTV segments. Net programme LTV improved 16%.",
        },
      ],
    }),
    buildSection({
      number: "8.7",
      title: "Automated Reporting & AI Narrative Dashboards",
      subtitle: "Weekly scorecards, anomaly alerts, and executive summaries — reporting that drives action",
      take: "Automated reporting delivers consistent email programme scorecards: sends, engagement, conversions, attributed revenue, deliverability health, automation funnel status, and cohort trends. AI generates narrative summaries — 'CTO declined 12% WoW driven by nurture segment B' — and anomaly alerts. Marketers design report hierarchy: ops daily, manager weekly, executive monthly — each with appropriate depth and action items.",
      why: "Manual monthly reporting is stale on arrival and consumes ops time. Automation frees capacity for optimisation; narrative summaries help executives act without decoding spreadsheets.",
      paragraphs: [
        [
          s("Design three-tier reporting hierarchy. "),
          x(
            "Tier 1 (ops daily): deliverability metrics, send volume, automation errors, suppression counts. Tier 2 (manager weekly): engagement trends, campaign performance, funnel drop-offs, A/B test results. Tier 3 (executive monthly): attributed revenue, LTV cohort, programme ROI, roadmap progress. AI narrates each tier in plain language.",
            "Executive dashboard with 40 metrics gets ignored — 5 KPIs with context gets discussed.",
          ),
          s(" Report templates stable quarter-to-quarter — metric changes require definition doc update."),
        ],
        [
          s("Anomaly alerts precede scheduled reports. "),
          x(
            "Real-time alerts: complaint rate spike, entry volume drop, conversion rate 2σ below baseline, deliverability placement fail. AI sets dynamic thresholds from rolling averages. Ops responds before weekly report documents the damage.",
            "Weekly report documenting last Tuesday's incident is failure, not reporting.",
          ),
          s(" Alert routing documented — deliverability alerts to ops, revenue alerts to programme lead."),
        ],
        [
          s("Every report section ends with recommended action. "),
          x(
            "Not 'CTO declined' but 'CTO declined — recommend: audit nurture segment B content, test subject personalisation, review send frequency.' AI drafts recommendations from pattern library; marketer approves before executive distribution.",
            "Data without recommended action is entertainment.",
          ),
          s(" Action item tracking — last month's recommendations status in next report."),
        ],
      ],
      examples: [
        {
          title: "AI narrative weekly scorecard",
          body: "Monday automated email: 'Programme health green. CTO 3.8% (+0.2pp WoW). Revenue attributed $142K (-8% — expected post-promo lull). Alert: trial sequence entry down 22% — investigate CRM sync.' Manager resolved sync in 2 hours. Prior manual report would have surfaced issue following Friday.",
        },
        {
          title: "Executive 5-KPI dashboard",
          body: "CFO dashboard: attributed revenue, programme ROI, list health (engaged %), deliverability score, influenced pipeline. One-page AI narrative quarterly. Email budget review reduced from 2-hour debate to 20-minute decision — shared numbers, shared definitions.",
        },
        {
          title: "Action item accountability",
          body: "Q2 report recommended sunset on underperforming re-engagement sequence. Q3 report opened with status: implemented, list reduced 15%, deliverability improved, revenue per send +12%. Recommendation tracking built executive trust in email team's analytical rigour.",
        },
      ],
    }),
    buildSection({
      number: "8.8",
      title: "The Marketer Decision Lens — Optimisation Roadmap",
      subtitle: "When to fix measurement, test content, rebuild sequences, or invest in stack — prioritising by incremental ROI",
      take: "Before launching optimisation initiatives, run four checks: (1) is data trustworthy — identity resolution and metric definitions solid? (2) does analysis identify specific bottleneck — sequence step, segment, content pattern? (3) is incremental ROI estimable — holdout or historical lift data? (4) can team implement within one quarter? Fix measurement when attribution gaps block decisions. Test content when patterns suggest hypothesis. Rebuild sequence when funnel shows step-level cliff. Invest in stack when manual reporting consumes >20% ops time.",
      why: "AI surfaces infinite optimisation opportunities — roadmap discipline prevents random A/B tests and dashboard projects that never change programme outcomes.",
      paragraphs: [
        [
          s("Check one: measurement readiness. "),
          x(
            "Identity match rate <80% → fix stack before optimising content. Conflicting metric definitions → definition workshop before new dashboards. No attributed revenue metric → attribution before executive reporting investment.",
            "Optimising on bad data compounds errors.",
          ),
          s(" Measurement gate on roadmap — no content tests until click tracking validated."),
        ],
        [
          s("Check two: bottleneck specificity. "),
          x(
            "Vague 'improve engagement' → insufficient. Specific 'step 3 drop-off 68% in onboarding' → roadmap candidate. AI prioritisation ranks bottlenecks by revenue impact × fix feasibility.",
            "Roadmap items need funnel evidence, not brainstorming.",
          ),
          s(" Roadmap template: bottleneck, evidence, proposed fix, expected lift, effort."),
        ],
        [
          s("Checks three and four: ROI estimate and implementation capacity. "),
          x(
            "No lift estimate → run small test before major rebuild. Engineering-dependent fix with 6-month queue → deprioritise versus ESP-native test. Quarterly roadmap cap: 3 major initiatives — focus beats sprawl.",
            "Roadmap without capacity planning is wish list.",
          ),
          s(" Quarterly roadmap review with evidence, ROI, and capacity — kill stale items."),
        ],
      ],
      examples: [
        {
          title: "Measurement before optimisation",
          body: "Team proposed 12 subject line A/B tests. Lens: click tracking broken on 35% of mobile clicks. Deferred all tests 6 weeks; fixed tracking. Subsequent tests produced reliable winners — prior year's 'winners' may have been noise. Measurement investment preceded optimisation.",
        },
        {
          title: "Sequence rebuild ROI gate",
          body: "Funnel showed onboarding step 4 cliff — 71% drop. Estimated fix: branch logic, 2 weeks ops effort. Historical similar fix lifted activation 2.8pp — 280 additional activations monthly × $1,200 LTV. Prioritised over cosmetic template redesign with unquantified lift. Activation rose 2.4pp — ROI validated.",
        },
        {
          title: "Stack investment justified",
          body: "Marketing ops spent 24 hours weekly on manual reports. Lens: stack investment $40K annual saves 800 hours — reallocatable to optimisation. Warehouse project approved; reporting automated; ops capacity shifted to sequence analysis. Two sequence fixes in following quarter attributed $320K pipeline.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Marketing and finance report different email open rates from the same ESP. First fix?",
      options: [
        "Buy a new ESP.",
        "Align metric definitions — unique vs total opens, MPP handling — in a version-controlled doc.",
        "Use whichever rate is higher in executive reports.",
        "Stop reporting open rates entirely without replacement KPIs.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Metric definitions must be agreed and documented. Re-read sections 8.1 and 8.2.",
      wrongFeedback:
        "Conflicting metrics need definition alignment first. Re-read sections 8.1 and 8.2.",
    },
    {
      q: "Onboarding sequence has 3% terminal conversion; 70% drop at step 3. Best optimisation focus?",
      options: [
        "Test subject lines on email 1 only.",
        "Diagnose and fix step 3 bottleneck — timing, content, or branch logic — using funnel analysis.",
        "Add 4 more emails to the end of the sequence.",
        "Increase send volume to the full list.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Sequence funnel identifies bottleneck steps. Re-read section 8.4.",
      wrongFeedback:
        "Fix the step with highest drop-off. Re-read section 8.4.",
    },
    {
      kind: "order",
      q: "Order the email analytics and optimisation loop from first step to last.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Integrate ESP, CRM, and product data with identity resolution",
        "Analyse engagement, attribution, and sequence funnels",
        "Mine content patterns and model programme LTV ROI",
        "Automate reporting and prioritise optimisation roadmap",
      ],
      correctFeedback:
        "Right. Stack → analyse → patterns/LTV → report and roadmap. Re-read sections 8.1–8.8.",
      wrongFeedback:
        "Build measurement first. Roadmap closes the loop. Re-read sections 8.1–8.8.",
    },
    {
      kind: "categorize",
      q: "Sort each practice into the correct analytics layer.",
      categories: ["Stack & definitions", "Engagement & attribution", "Sequence & content", "Reporting & roadmap"],
      items: [
        { text: "Email address as cross-system primary key.", category: 0 },
        { text: "60-day B2B conversion attribution window.", category: 1 },
        { text: "Subject line metadata tagging on campaigns.", category: 2 },
        { text: "Weekly AI narrative manager scorecard.", category: 3 },
        { text: "Holdout group for email incrementality.", category: 1 },
        { text: "Funnel drop-off analysis per automation step.", category: 2 },
      ],
      correctFeedback:
        "Right. Stack = integration and definitions. Attribution = windows and holdout. Content = patterns and funnels. Reporting = dashboards and roadmap. Re-read sections 8.1–8.8.",
      wrongFeedback:
        "Match each practice to stack, attribution, content, or reporting. Re-read sections 8.1–8.8.",
    },
    {
      q: "Click tracking is broken on 35% of mobile clicks. What does the optimisation lens recommend?",
      options: [
        "Launch 12 A/B tests immediately.",
        "Fix measurement and tracking before content or sequence optimisation tests.",
        "Ignore mobile users in reporting.",
        "Switch to open rate as sole KPI.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Measurement readiness gate precedes optimisation. Re-read sections 8.1 and 8.8.",
      wrongFeedback:
        "Fix tracking before testing. Re-read sections 8.1 and 8.8.",
    },
    {
      q: "AI finds 'emoji subjects win' from 4 campaigns without segment analysis. Best response?",
      options: [
        "Mandate emoji in all subjects immediately.",
        "Require minimum sample size and segment validation before adding to playbook.",
        "Ignore all AI pattern suggestions.",
        "Run emoji test on cold acquisition and nurture simultaneously.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Patterns need statistical significance and segment context. Re-read section 8.5.",
      wrongFeedback:
        "Validate patterns with sufficient data and segment analysis. Re-read section 8.5.",
    },
  ],
});
