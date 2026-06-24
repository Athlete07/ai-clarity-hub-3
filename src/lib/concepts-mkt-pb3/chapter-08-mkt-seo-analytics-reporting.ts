import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter08MktSeoAnalyticsReporting = buildChapter({
  slug: "mkt-seo-analytics-reporting",
  number: 8,
  shortTitle: "SEO Analytics & Reporting",
  title: "SEO Analytics & Reporting — Turning Search Data into Decisions Stakeholders Trust",
  readingMinutes: 24,
  summary:
    "SEO without measurement is guesswork — but dashboards full of vanity metrics create false confidence. Marketers need a reporting stack connecting GSC visibility, ranking performance, traffic quality, conversion outcomes, and competitive intelligence into narratives leadership understands. AI accelerates data synthesis, anomaly detection, and report drafting — yet metric definitions, business context, and strategic recommendations remain human responsibilities.",
  keyTakeaway:
    "Build SEO reporting around decisions, not data dumps: GSC for visibility, rank tracking for share of voice, GA4 for traffic quality and conversions, backlink tools for authority, and quarterly content audits for portfolio health. AI drafts the narrative; marketers own what to do next.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "8.1",
      title: "The SEO Reporting Stack",
      subtitle: "GSC, GA4, rank trackers, backlink tools — what each layer answers and how they connect",
      take: "The SEO reporting stack combines complementary data sources: Google Search Console for query-level visibility and indexation, GA4 for on-site behaviour and conversions, rank tracking tools for SERP position and feature share, backlink platforms for authority trends, and content analytics for page-level performance. No single tool answers every question — marketers map metrics to decisions and avoid double-counting across platforms.",
      why: "Stakeholders ask 'is SEO working?' Tools answer different fragments. Without a stack architecture, teams report conflicting numbers and lose credibility in budget conversations.",
      paragraphs: [
        [
          s("Each tool owns a distinct question. "),
          x(
            "GSC: are we visible in search and for which queries? GA4: what happens after the click — engagement, conversions, revenue? Rank tracking: where do we sit versus competitors for target keywords? Backlinks: is authority growing? Content analytics / CMS: which pages drive outcomes?",
            "Define a metric ownership doc — which source is canonical for each KPI.",
          ),
          s(" Reconcile GSC clicks and GA4 organic sessions monthly — variance is normal but large gaps signal tracking issues."),
        ],
        [
          s("Connect tools into a single reporting layer. "),
          x(
            "Looker Studio, Power BI, or SEO platform dashboards unify GSC, GA4, and rank data. AI assists SQL or API query generation and anomaly summaries. Executive view: 8–12 KPIs max. Practitioner view: drill-down dimensions.",
            "Two-tier reporting prevents executive drowning in query-level data.",
          ),
          s(" Audit UTM and channel grouping quarterly — organic misattribution corrupts ROI analysis."),
        ],
        [
          s("Data freshness and sampling limitations matter. "),
          x(
            "GSC data lags 2–3 days; GA4 has thresholding on small volumes. Rank trackers sample SERPs with location and device settings. Document limitations in footnotes so stakeholders interpret trends correctly.",
            "AI-generated insights should cite data date ranges and known limitations explicitly.",
          ),
          s(" Set automated weekly data pulls — manual exports do not scale and get skipped under pressure."),
        ],
      ],
      examples: [
        {
          title: "Looker Studio executive SEO dashboard",
          body: "A B2B company built a Looker Studio dashboard: GSC clicks and impressions (28-day trend), GA4 organic conversions and revenue, top 10 query movers, index coverage status, and referring domain net growth. Executive meeting reduced from 40-slide deck to one live dashboard. AI weekly summary highlights anomalies — 'impressions up 12% but clicks flat, investigate CTR on [query cluster]'. Decision speed improved; SEO credibility with CFO increased.",
        },
        {
          title: "Attribution reconciliation catch",
          body: "Monthly reconciliation found GA4 organic conversions 40% below GSC-click-implied expectations. Investigation: missing cross-domain tracking on checkout subdomain and incorrect channel grouping on payment referrer. Fix restored accurate organic revenue reporting — SEO budget defence depended on it. Stack integration is not set-and-forget.",
        },
        {
          title: "Tool sprawl without architecture",
          body: "Marketing used Semrush, Ahrefs, GSC, GA4, and Moz with overlapping metrics reported differently in each meeting. Leadership confused by conflicting 'organic traffic' numbers. Stack architecture doc defined canonical sources; redundant tool subscriptions cut. Single source of truth restored decision clarity.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-seo-ch8-reporting-stack",
      type: "comparison",
      title: "SEO Reporting Stack",
      caption:
        "GSC measures visibility, GA4 measures traffic quality and conversions, rank tracking measures share of voice, backlink tools measure authority — connect all four for complete SEO intelligence.",
    }),
    buildSection({
      number: "8.2",
      title: "Google Search Console Analysis",
      subtitle: "Queries, pages, CTR, indexation — extracting actionable signals from GSC data",
      take: "Google Search Console is the closest view of how Google sees your site: search queries, impressions, clicks, CTR, average position, page performance, index coverage, Core Web Vitals, and manual actions. AI accelerates GSC export analysis — identifying CTR outliers, impression growth without clicks, query cannibalisation, and indexation drops. GSC is diagnostic, not a full performance picture without GA4 conversion context.",
      why: "GSC is free, authoritative for search visibility, and underused beyond top-line click reports. Marketers who mine GSC weekly find optimisation opportunities competitors miss.",
      paragraphs: [
        [
          s("Weekly GSC review checklist. "),
          x(
            "Query report: rising impressions, declining CTR, new query opportunities. Page report: winners and losers by click delta. Index coverage: new errors, excluded pages spike. Experience: CWV regressions. Manual actions and security issues: immediate escalation.",
            "AI scripts flag top 20 movers by impression or click delta — human prioritises action.",
          ),
          s(" Compare week-over-week and year-over-year — seasonality distorts short windows."),
        ],
        [
          s("CTR optimisation targets high-impression, low-CTR queries. "),
          x(
            "Filter queries with >1000 impressions and CTR below expected curve for position. Title and meta optimisation often recovers clicks without ranking change. AI drafts title variants; marketer selects based on SERP differentiation.",
            "Position 5–15 with high impressions are CTR goldmines — often faster ROI than new content.",
          ),
          s(" Log CTR tests in a changelog tied to GSC query segments for before/after proof."),
        ],
        [
          s("Cannibalisation detection via query-page mapping. "),
          x(
            "Multiple URLs ranking for same query dilutes authority. GSC page-query exports reveal overlap. Consolidate via redirects, canonicals, or content merging. AI clusters cannibalisation candidates.",
            "Cannibalisation fixes often produce ranking lifts within 4–8 weeks.",
          ),
          s(" Run cannibalisation audit quarterly on top 100 revenue queries."),
        ],
      ],
      examples: [
        {
          title: "CTR recovery programme",
          body: "SaaS company identified 45 queries with 500K+ monthly impressions and sub-2% CTR at positions 4–8. AI-generated title/meta variants tested on 20 highest-volume pages. 60-day result: 18% click increase on tested pages, estimated 12,000 additional monthly sessions. No new content required — GSC analysis drove action.",
        },
        {
          title: "Index coverage crisis detection",
          body: "Automated GSC alert flagged 'crawled not indexed' spike — 2,400 new programmatic pages. AI correlated with recent template launch. Paused indexation, improved uniqueness threshold, resubmitted sitemap for quality subset. Prevented thin content index bloat. Weekly index monitoring caught issue at week two versus quarter-end discovery.",
        },
        {
          title: "Ignored manual action",
          body: "A site received manual action for structured data spam; team focused on GA4 traffic trends without checking GSC security/manual section. Traffic declined 60% over three weeks before discovery. Post-incident: manual action check in weekly GSC ritual. Simple discipline prevents catastrophic oversight.",
        },
      ],
    }),
    buildSection({
      number: "8.3",
      title: "Ranking Performance Tracking",
      subtitle: "Share of voice, SERP features, and competitive position — beyond single-keyword ego metrics",
      take: "Rank tracking tools (Semrush, Ahrefs, AccuRanker, STAT) monitor keyword positions, SERP feature ownership, and competitor share of voice over time. Effective tracking uses representative keyword baskets by intent and revenue — not 10,000 vanity terms. AI groups keywords into clusters and summarises movement; humans interpret business impact of shifts.",
      why: "Rankings alone do not equal revenue — but sustained position loss on commercial terms is an early warning system. Tracking without strategy produces anxiety; tracking with clusters produces decisions.",
      paragraphs: [
        [
          s("Design keyword baskets aligned to business priorities. "),
          x(
            "Tier 1: revenue-critical commercial terms (50–100). Tier 2: category and consideration terms (200–500). Tier 3: brand and long-tail monitor set. Track same location, device, and SERP feature set consistently.",
            "Basket size should be actionable — tracking 50 terms weekly beats 5000 terms monthly ignored.",
          ),
          s(" Refresh baskets quarterly as product and market priorities shift."),
        ],
        [
          s("SERP feature tracking expands beyond blue links. "),
          x(
            "Featured snippets, AI Overviews, People Also Ask, local pack, image packs, video carousels — all displace traditional clicks. Track feature ownership and citation presence, not just position 1–10.",
            "Position 1 with AI Overview above the fold may deliver fewer clicks than position 3 without — context matters.",
          ),
          s(" Report SERP feature share alongside traditional rankings in stakeholder updates."),
        ],
        [
          s("Competitive share of voice contextualises movement. "),
          x(
            "Your rank drop may be market-wide algorithm shift or competitor surge. SOV reports show relative movement. AI summarises competitor gainers/losers by cluster.",
            "Avoid panic on single-keyword drops; investigate cluster-level and SOV trends.",
          ),
          s(" Pair rank data with GSC impression trends — rankings and impressions can diverge with SERP layout changes."),
        ],
      ],
      examples: [
        {
          title: "Cluster-based rank reporting",
          body: "E-commerce brand replaced 800-keyword report with 12 intent clusters. Weekly dashboard shows cluster average position and SOV versus three competitors. Content team prioritises clusters with SOV decline >5% quarter-over-quarter. Reporting time cut 70%; action clarity improved. Leadership stopped asking about one irrelevant long-tail term.",
        },
        {
          title: "AI Overview citation tracking",
          body: "B2B publisher added AI Overview citation monitoring for 50 priority queries using manual sampling and rank tool SERP snapshots. Citation rate 18% on informational clusters after structured content optimisation. Traditional rank report showed flat positions while citation share grew — new KPI explained traffic stability despite position stagnation.",
        },
        {
          title: "Vanity rank obsession",
          body: "CMO fixated on single high-volume branded-adjacent term fluctuating position 3–5 weekly. Team wasted hours investigating noise. Reframed to commercial cluster SOV — stable and growing. Redirected effort to cluster with genuine 15% SOV decline. Lesson: rank tracking serves clusters and revenue terms, not ego keywords.",
        },
      ],
    }),
    buildSection({
      number: "8.4",
      title: "Traffic Quality Analysis",
      subtitle: "Engagement, conversion, and revenue from organic — proving SEO business impact",
      take: "Traffic quality analysis in GA4 evaluates whether organic visitors engage and convert: engagement rate, session duration, pages per session, conversion events, assisted conversions, and revenue attribution. AI segments organic traffic by landing page, query intent (via landing page proxy), and cohort behaviour. Volume without quality is a hollow SEO win.",
      why: "Leadership funds SEO for business outcomes. Reporting sessions without conversion context loses budget battles to paid channels with clearer ROAS.",
      paragraphs: [
        [
          s("Define organic quality metrics tied to business model. "),
          x(
            "E-commerce: revenue per session, conversion rate, AOV from organic. B2B SaaS: trial signups, demo requests, pipeline influenced. Publisher: engaged sessions, subscription conversion, ad revenue per organic visit.",
            "One-size engagement metrics mislead — align to how the business makes money.",
          ),
          s(" Set organic quality benchmarks by landing page type — blog vs product vs category."),
        ],
        [
          s("Segment organic traffic by intent and page type. "),
          x(
            "AI clustering on landing page URL patterns and content taxonomy: informational, commercial, transactional. Compare conversion rates across segments. High informational traffic with low conversion may be working as intended (top of funnel) — report assisted conversions.",
            "Multi-touch attribution models show organic's role in paths paid last-click undervalues.",
          ),
          s(" Report organic assisted conversions quarterly to stakeholders who only see last-click."),
        ],
        [
          s("Investigate traffic quality drops before celebrating volume gains. "),
          x(
            "Programmatic pages or AI content scaling can inflate sessions with bounce-heavy traffic. Segment new pages separately in quality reports for 90-day probation.",
            "Quality gates on content programmes should include post-publish GA4 review at 30/60/90 days.",
          ),
          s(" Flag landing pages with >1000 sessions and <20% engagement for content or intent review."),
        ],
      ],
      examples: [
        {
          title: "Organic revenue dashboard for e-commerce",
          body: "Retail brand GA4 dashboard: organic revenue, conversion rate, and AOV trended monthly with landing page leaderboard. Identified category pages driving volume but low conversion — merchandising fix on those pages lifted organic revenue 14% without traffic increase. Quality analysis redirected SEO celebration from click growth to revenue growth.",
        },
        {
          title: "B2B pipeline influence report",
          body: "Enterprise software company used GA4 exploration paths showing organic blog touchpoints in 62% of won deal journeys (90-day lookback). Reported 'organic-influenced pipeline' alongside last-touch demo requests. SEO budget increased 25% after demonstrating influence metric paid search report omitted. AI generated path summary narratives for quarterly board slides.",
        },
        {
          title: "Volume vanity trap",
          body: "Content programme celebrated 200% organic session growth. Conversion rate halved — new AI articles attracted informational traffic with no commercial intent alignment. Quality segment analysis exposed issue. Refocused brief process on commercial cluster content; sessions normalised but conversions tripled. Traffic quality reporting prevented continued misallocation.",
        },
      ],
    }),
    buildSection({
      number: "8.5",
      title: "Competitor Intelligence",
      subtitle: "SERP competitors, content gaps, backlink surges — AI-assisted competitive monitoring",
      take: "SEO competitor intelligence tracks who ranks for your target terms, what content they publish, how their backlink profiles evolve, and what SERP features they capture. AI automates competitor content gap analysis, new page detection, and backlink surge alerts. Intelligence without action cadence is newsletter noise — tie insights to quarterly planning.",
      why: "SEO is relative performance in SERPs. Competitors publish, earn links, and capture AI Overviews while you report last month's clicks. Systematic intelligence keeps strategy proactive.",
      paragraphs: [
        [
          s("Define competitor sets by SERP reality, not boardroom list. "),
          x(
            "SERP overlap analysis reveals actual ranking competitors — often niche sites, not just brand rivals. Track 5–10 SERP competitors per priority cluster plus 2–3 aspirational leaders.",
            "Competitor set varies by keyword cluster — one global list misses nuance.",
          ),
          s(" Refresh competitor sets semi-annually as SERP composition shifts."),
        ],
        [
          s("Content gap and velocity monitoring. "),
          x(
            "AI alerts when competitors publish new URLs in your topic clusters or update pillar pages. Gap analysis: keywords they rank for, you do not. Velocity: their publishing cadence versus yours.",
            "Respond with differentiation assessment — not every competitor page needs a clone.",
          ),
          s(" Monthly competitor content digest for content planning meeting — three actionable gaps max."),
        ],
        [
          s("Backlink and SERP feature competitive tracking. "),
          x(
            "Competitor referring domain surges often precede ranking gains. AI correlates link events with rank movement. SERP feature ownership comparison shows snippet and AI Overview gaps.",
            "Intelligence triggers: competitor research report launch → accelerate your research calendar.",
          ),
          s(" Store competitive insights in shared knowledge base — not lost in email alerts."),
        ],
      ],
      examples: [
        {
          title: "Automated content gap pipeline",
          body: "Semrush content gap export fed into AI summariser weekly: top 10 new competitor keyword gaps by volume and difficulty. Content team triages in Monday standup. One gap — competitor's integration directory — identified and replicated with superior product data in six weeks. Closed 400-keyword gap cluster. Intelligence cadence beat annual agency audit.",
        },
        {
          title: "Competitor backlink surge response",
          body: "Alert: competitor gained 40 referring domains in one month from original industry survey. SEO lead escalated to PR — fast-tracked own survey launch. Mitigated SOV loss in category terms. Competitive backlink monitoring connected SEO and PR workflows.",
        },
        {
          title: "Wrong competitor obsession",
          body: "Team tracked Fortune 500 competitor with minimal SERP overlap while niche blog competitor gained 30% SOV in their cluster. Misallocated content effort chasing irrelevant giant. SERP overlap analysis redefined competitor set; recovered cluster SOV in two quarters. Intelligence requires right competitors.",
        },
      ],
    }),
    buildSection({
      number: "8.6",
      title: "Content Audit Frameworks",
      subtitle: "Evaluating the SEO portfolio — prune, merge, refresh, or redirect with data-driven criteria",
      take: "Content audits systematically evaluate existing pages against performance, quality, and strategic fit: traffic trend, conversion contribution, backlink value, content freshness, differentiation, and indexation status. AI scores pages at scale and clusters recommendations — prune, merge, refresh, redirect, or keep. Audits prevent index bloat and concentrate authority on winners.",
      why: "Most sites accumulate years of content — some valuable, some harmful. Without periodic audits, crawl budget and quality signals dilute across zombie pages.",
      paragraphs: [
        [
          s("Audit scoring model with weighted criteria. "),
          x(
            "Pull GSC, GA4, and backlink data per URL. Score: organic traffic trend (30%), conversion value (25%), backlink equity (20%), content freshness and quality (15%), strategic alignment (10%). Thresholds trigger actions.",
            "AI automates data merge and scoring; content strategists validate edge cases.",
          ),
          s(" Run full audit annually; rolling audit on top 500 URLs quarterly."),
        ],
        [
          s("Action taxonomy: prune, merge, refresh, redirect, keep. "),
          x(
            "Prune/noindex: thin, zero value, harmful duplication. Merge: cannibalising pages combined with 301. Refresh: declining performers with recovery potential. Redirect: outdated URLs to current equivalents. Keep: performers meeting thresholds.",
            "Document every action in redirect map and changelog — audit without execution is shelfware.",
          ),
          s(" Measure post-audit portfolio metrics 90 days later — net traffic, index count, conversion rate."),
        ],
        [
          s("AI content quality scoring supplements performance data. "),
          x(
            "NLP models assess thin content, duplication, entity coverage versus current SERP. Flag pages that perform okay today but risk helpful content demotion.",
            "Proactive refresh beats reactive traffic cliff.",
          ),
          s(" Coordinate audit actions with dev for redirect implementation and sitemap updates."),
        ],
      ],
      examples: [
        {
          title: "Annual audit — 40% prune",
          body: "Publisher audited 8,000 URLs; AI scoring identified 3,200 candidates for noindex or redirect — thin AI content from prior scale experiment. Executed over three months with redirect map. Index size reduced 38%; average engagement rate on remaining content up 22%; commercial cluster rankings improved. Audit recovered domain quality signals.",
        },
        {
          title: "Merge cannibalising product pages",
          body: "B2B company had four URLs targeting 'CRM for small business' with split backlinks and rankings. Audit merge action: consolidated into one pillar, 301 redirects, combined content. Single URL reached position 3 from four URLs at positions 8–20. GSC impressions consolidated; CTR improved with one authoritative page.",
        },
        {
          title: "Audit without execution",
          body: "Agency delivered 200-page audit spreadsheet; internal team never executed actions. Traffic continued declining on zombie index. Hired contractor for redirect implementation only; 90-day post-execution traffic recovery 15%. Lesson: audit budget must include execution resourcing.",
        },
      ],
    }),
    buildSection({
      number: "8.7",
      title: "Stakeholder Reporting",
      subtitle: "Narratives, cadence, and formats that earn SEO budget and cross-functional trust",
      take: "Stakeholder SEO reporting translates data into decisions for CMOs, CEOs, and boards: executive summaries, trend narratives, initiative ROI, competitive context, and next-quarter priorities. AI drafts report prose from dashboard data — marketers edit for accuracy, business context, and political sensitivity. Cadence matters: weekly ops, monthly leadership, quarterly strategic.",
      why: "SEO teams lose budget when they report metrics leadership does not understand or care about. Reporting is advocacy — connect search performance to revenue, pipeline, and market share.",
      paragraphs: [
        [
          s("Report structure: outcome, insight, action, ask. "),
          x(
            "Lead with business outcome (organic revenue, pipeline, SOV). Insight: what changed and why (algorithm, competitor, content initiative). Action: what we are doing next. Ask: resources, engineering time, content budget needed.",
            "Burying the lede with indexation stats loses the room.",
          ),
          s(" Tailor depth: CEO gets one page; content team gets query-level export."),
        ],
        [
          s("Visualise trends, not tables. "),
          x(
            "12-month rolling trends for clicks, conversions, SOV. Annotate algorithm updates and major launches. AI generates chart summaries; designer or Looker templates maintain consistency.",
            "One good chart beats ten spreadsheet screenshots.",
          ),
          s(" Include competitor SOV line on same chart — relative performance resonates with executives."),
        ],
        [
          s("Honest reporting builds long-term credibility. "),
          x(
            "Report losses and setbacks with diagnosis — not only wins. Missed targets with clear recovery plan beat surprise quarter-end failures.",
            "AI drafts should be fact-checked against source dashboards — hallucinated metrics destroy trust instantly.",
          ),
          s(" Record stakeholder questions each meeting; evolve report to answer recurring questions proactively."),
        ],
      ],
      examples: [
        {
          title: "Monthly CMO one-pager",
          body: "SEO lead sends monthly one-pager: organic revenue trend, top 3 wins, top 3 risks, next month priorities, one resource ask. AI drafts from Looker export; lead edits to 400 words. CMO reads it — meeting time reduced from 30 to 10 minutes. Budget approved for technical SEO contractor based on clear ROI narrative in prior three months.",
        },
        {
          title: "Board quarterly SEO slide",
          body: "Public company marketing included organic search SOV versus two public competitors, organic revenue % of digital, and AI Overview citation rate as forward-looking metric. Board member questioned paid search efficiency versus organic — data supported balanced investment. Stakeholder reporting at board level requires business metrics, not crawl stats.",
        },
        {
          title: "Hallucinated metric in AI draft",
          body: "SEO manager pasted AI-generated monthly report without verifying — claimed 45% organic revenue growth; actual was 12%. CFO caught discrepancy in meeting. Credibility damage took two quarters to repair. Policy: AI drafts require dashboard screenshot attachment or automated data binding before send.",
        },
      ],
    }),
    buildSection({
      number: "8.8",
      title: "The Marketer Decision Lens — SEO Measurement Maturity",
      subtitle: "Assessing whether your reporting stack supports the decisions you need to make next",
      take: "Before adding tools or reports, assess measurement maturity across four levels: (1) visibility — do we have reliable GSC and index data? (2) performance — rank tracking and traffic quality connected? (3) impact — conversions and revenue attributed? (4) intelligence — competitive monitoring and audit cadence driving planning? Advance one level at a time. Level 4 without Level 1 foundation produces sophisticated dashboards on broken data.",
      why: "Teams buy enterprise SEO platforms before fixing GA4 tracking. Maturity lens prioritises infrastructure before analytics vanity.",
      paragraphs: [
        [
          s("Level 1 — Visibility foundation. "),
          x(
            "GSC verified for all properties, index coverage monitored weekly, basic click/impression reporting reliable. Without Level 1, higher metrics are untrustworthy.",
            "Check: can you name top 20 queries and pages from GSC right now without exporting?",
          ),
          s(" Do not invest in rank tracking baskets until GSC baseline is stable."),
        ],
        [
          s("Level 2 — Performance connection. "),
          x(
            "GA4 organic channel accurate, GSC-GA4 reconciled, rank tracking on priority clusters, engagement segmented by landing page type.",
            "Level 2 answers: which content types perform, not just what ranks.",
          ),
          s(" Level 2 milestone: organic quality dashboard live with monthly review cadence."),
        ],
        [
          s("Levels 3 and 4 — Impact and intelligence. "),
          x(
            "Level 3: conversion and revenue attribution, assisted conversion reporting, organic ROI calculable. Level 4: competitive intelligence feeding quarterly planning, content audit execution, AI-assisted anomaly detection with action tickets.",
            "Most mid-market teams should target solid Level 3 before Level 4 automation sophistication.",
          ),
          s(" Run maturity self-assessment semi-annually; next investment follows weakest level gap."),
        ],
      ],
      examples: [
        {
          title: "Level 1 fix before platform buy",
          body: "Company considered $40K/year enterprise SEO suite. Maturity assessment revealed GSC unverified on international subdomains and GA4 double-counting organic. Six-week foundation fix cost $8K consulting. Then mid-tier tool at $12K/year sufficed. Saved budget; data trust established first.",
        },
        {
          title: "Level 3 unlocks budget",
          body: "B2B company reached Level 3 with organic-influenced pipeline metric. Presented to board with competitive SOV context (Level 4 element). SEO headcount request approved — prior years denied when only reporting sessions and rankings. Measurement maturity matched advocacy to stakeholder language.",
        },
        {
          title: "Level 4 theatre",
          body: "Team deployed AI anomaly detection and competitive alerts but GA4 organic tracking broken on main conversion flow. Alerts fired on irrelevant rank noise while revenue impact invisible. Reset to Level 1–2 fixes; rebuilt upward over two quarters. Sophistication without foundation is theatre.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "GSC shows rising impressions but flat clicks on a query cluster. What is the first optimisation action?",
      options: [
        "Publish more blog posts on unrelated topics.",
        "Investigate CTR — test title and meta improvements for high-impression, below-expected-CTR queries.",
        "Disavow all backlinks.",
        "Remove the pages from the sitemap.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Impression growth with flat clicks signals CTR opportunity. Re-read sections 8.1 and 8.2.",
      wrongFeedback:
        "CTR optimisation on existing visibility is often fastest ROI. Re-read sections 8.1 and 8.2.",
    },
    {
      q: "Leadership asks 'is SEO working?' Which metric combination answers best?",
      options: [
        "Crawl budget and robots.txt size.",
        "Organic conversions or revenue trend alongside GSC visibility and rank share of voice for priority clusters.",
        "Total word count published.",
        "Number of SEO tools subscribed.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Connect visibility to business outcomes. Re-read sections 8.1, 8.3, and 8.4.",
      wrongFeedback:
        "Stakeholders need outcome metrics connected to visibility. Re-read sections 8.1, 8.3, and 8.4.",
    },
    {
      kind: "order",
      q: "Order SEO measurement maturity levels from foundation to advanced.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Visibility — reliable GSC and index monitoring",
        "Performance — rank tracking and traffic quality connected",
        "Impact — conversion and revenue attribution",
        "Intelligence — competitive monitoring and audit-driven planning",
      ],
      correctFeedback:
        "Right. Visibility → performance → impact → intelligence. Skipping levels produces untrustworthy reporting. Re-read section 8.8.",
      wrongFeedback:
        "Start with GSC visibility foundation before advanced intelligence. Re-read section 8.8.",
    },
    {
      kind: "categorize",
      q: "Sort each tool or metric to its primary SEO reporting layer.",
      categories: ["GSC", "GA4", "Rank tracking", "Backlinks"],
      items: [
        { text: "Query-level impressions and CTR analysis.", category: 0 },
        { text: "Organic landing page conversion rate.", category: 1 },
        { text: "Share of voice versus SERP competitors.", category: 2 },
        { text: "Referring domain net growth trend.", category: 3 },
        { text: "Index coverage error monitoring.", category: 0 },
        { text: "Assisted conversion paths including organic touchpoints.", category: 1 },
      ],
      correctFeedback:
        "Right. GSC = visibility. GA4 = on-site outcomes. Rank tracking = SERP position. Backlinks = authority. Re-read section 8.1.",
      wrongFeedback:
        "Match each metric to its canonical tool layer. Re-read section 8.1.",
    },
    {
      q: "A content audit scores 3,000 URLs but no actions are executed. What is the failure?",
      options: [
        "The scoring model was wrong.",
        "Audit without execution resourcing — audits must include prune, merge, refresh, and redirect implementation.",
        "Too many URLs in the audit.",
        "GSC was not used.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Audits require execution budget and ownership. Re-read section 8.6.",
      wrongFeedback:
        "Audit value comes from actions taken, not spreadsheets delivered. Re-read section 8.6.",
    },
    {
      q: "An AI-drafted monthly SEO report claims 45% revenue growth; actual is 12%. What policy fix is needed?",
      options: [
        "Stop all reporting.",
        "Require AI drafts to be verified against source dashboards before stakeholder distribution — no unverified metrics.",
        "Let AI report any number that sounds good.",
        "Remove GA4 entirely.",
      ],
      correct: 1,
      correctFeedback:
        "Right. AI report drafts need fact-check gates against canonical data. Re-read section 8.7.",
      wrongFeedback:
        "Hallucinated metrics destroy stakeholder trust. Verification before send is mandatory. Re-read section 8.7.",
    },
  ],
});
