import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter05MktSalesEnablementWithAi = buildChapter({
  slug: "mkt-sales-enablement-with-ai",
  number: 5,
  shortTitle: "Sales Enablement with AI",
  title: "Sales Enablement with AI — Content Architecture, Competitive Intelligence, and Usage Analytics That Compound Pipeline Velocity",
  readingMinutes: 24,
  summary:
    "Sales enablement is the bridge between marketing output and revenue conversations — battle cards, case studies, talk tracks, and onboarding that sellers actually use in deals. AI accelerates competitive research, case study drafting, content personalisation, and usage analytics, but pipeline impact depends on marketer-owned architecture id: content mapped to buyer stage and persona, governance that keeps claims accurate, CRM integration that surfaces assets in workflow, and measurement tied to win rates — not library size. Teams that publish enablement without seller input build graveyards; teams that co-design with sales compound win rates quarter over quarter.",
  keyTakeaway:
    "Enablement is a revenue system, not a content dump. The sequence that wins: map content to stage × persona gaps → produce battle cards and proof with sales input → integrate into CRM and onboarding → measure usage and win-rate correlation → run a decision lens before scaling AI production. AI accelerates research and drafting; marketers own accuracy, seller adoption, and pipeline attribution.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "5.1",
      title: "Enablement Strategy & Content Mapping",
      subtitle: "Stage × persona matrix, gap analysis, and seller co-design — architecture before production",
      take: "Enablement strategy starts with a content map: buyer stages (awareness through negotiation) crossed with personas (economic buyer, technical evaluator, champion). AI audits existing assets against the matrix and flags gaps — but marketers prioritise gaps by deal volume, competitive pressure, and sales feedback. Co-design sessions with sales leadership define what 'seller-ready' means: length, format, objection coverage, and CRM discoverability.",
      why: "Unmapped enablement produces random assets sellers ignore. A matrix forces production toward revenue friction points — where deals stall, competitors win, or proof is missing.",
      paragraphs: [
        [
          s("Build the matrix from CRM stage data, not marketing intuition. "),
          x(
            "Export opportunity stage duration, loss reasons, and competitor tags from Salesforce or HubSpot. Cross-reference with win-loss interviews. AI clusters loss themes by persona and stage — 'technical evaluator stalls at security review' becomes a gap row, not a vague content request.",
            "Stage × persona without CRM data maps to what marketing already made — not what deals need.",
          ),
          s(" Refresh matrix quarterly with sales ops — GTM shifts change gap priority faster than annual planning."),
        ],
        [
          s("Define seller-ready standards per asset type. "),
          x(
            "Battle card: one page, three competitor traps, three counters, one customer proof. Case study: problem-solution-outcome in 400 words plus forwardable PDF. Talk track: 60-second opener, three discovery questions, two objection handlers. AI drafts to template — marketers enforce standards before publish.",
            "Seller-ready means scannable in a pre-call minute — not comprehensive decks nobody opens.",
          ),
          s(" Standards documented in enablement charter signed by sales and marketing leadership."),
        ],
        [
          s("Co-design beats post-publish promotion. "),
          x(
            "Monthly enablement council: 2 AEs, 2 SEs, sales manager, product marketing, enablement lead. Agenda: top 3 deal friction themes, gap votes, retire unused assets. AI pre-reads usage analytics and win-loss notes for council prep.",
            "Marketing announcing new assets without council input repeats the library graveyard pattern.",
          ),
          s(" Council decisions logged — retire criteria as important as production criteria."),
        ],
      ],
      examples: [
        {
          title: "Matrix gap — security persona stall",
          body: "CRM analysis showed 34% of enterprise deals stalling at technical evaluation with 'security documentation insufficient' in loss notes. Matrix had zero security-evaluator assets at consideration stage. Co-design session produced one-page security FAQ and SOC 2 summary card. Stage duration at evaluation dropped 18 days average; security-related losses down 22% in two quarters.",
        },
        {
          title: "Retire campaign — content graveyard cleanup",
          body: "Enablement audit: 847 assets in Seismic, 12% used in 90 days. AI usage report flagged 400+ items with zero views. Council retired 320 assets, consolidated 80 into updated battle cards. Seller search satisfaction survey up from 41% to 78%; time-to-find asset dropped from 4.2 to 1.1 minutes.",
        },
        {
          title: "Co-design council — competitive win",
          body: "AEs reported losing to Competitor X on pricing narrative in mid-market. Council prioritised battle card refresh over new webinar. Product marketing + top AE drafted counters in one session; AIWatch scan validated claims. Win rate vs Competitor X rose from 38% to 52% in 90 days — attributed in QBR via CRM competitor field.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-dg-ch5-sales-enablement",
      type: "nested",
      title: "Sales Enablement Content System",
      caption:
        "Content map by stage × persona → battle cards and competitive intel → case studies and proof → onboarding and ramp → CRM integration and usage analytics → win/loss feedback → refine library.",
    }),
    buildSection({
      number: "5.2",
      title: "Battle Cards & Competitive Intelligence",
      subtitle: "AI-assisted research, claim governance, and seller validation — intel that survives live calls",
      take: "Battle cards translate competitive intelligence into call-ready counters: competitor positioning, common traps, differentiation proof, and landmine questions. AI monitors competitor websites, G2 reviews, earnings calls, and job postings for intel deltas — but marketers govern claim accuracy, legal-safe language, and refresh cadence. Seller validation sessions test whether counters work in real objections.",
      why: "Stale battle cards erode seller trust faster than no cards. One wrong competitor claim repeated on a recorded call becomes a legal and credibility problem.",
      paragraphs: [
        [
          s("Automate intel monitoring; human-govern publish. "),
          x(
            "AI agents scrape competitor pricing pages, release notes, and review themes weekly. Diff reports flag changes inclusions, messaging shifts, or analyst mentions. Product marketing validates before battle card update — auto-publish without review is prohibited.",
            "Intel velocity without governance produces confident wrong counters — sellers stop trusting the library.",
          ),
          s(" Competitive intel SLA: critical competitor move within 5 business days; routine refresh monthly."),
        ],
        [
          s("Structure cards for objection moments, not feature matrices. "),
          x(
            "Sections: 'When they say X,' 'Our counter,' 'Proof point,' 'Question to ask.' Avoid feature comparison tables sellers cannot navigate mid-call. AI drafts from product docs and win stories — top performers edit for conversational language.",
            "Feature dumps lose calls — objection handlers win them.",
          ),
          s(" Record top AE handling competitor objection; transcribe for card language — authenticity beats marketing polish."),
        ],
        [
          s("Legal and product sign-off on comparative claims. "),
          x(
            "Yellow claims: marketing-approved comparisons with dated sources. Red claims: legal review required (performance benchmarks, security certifications). AI scan flags superlatives and unsubstantiated 'only' statements before publish.",
            "Comparative claims without audit trail fail enterprise procurement review — and invite competitor legal action.",
          ),
          s(" Source links embedded in card footer — sellers can cite evidence in follow-up email."),
        ],
      ],
      examples: [
        {
          title: "Intel diff — pricing page change",
          body: "AI diff flagged competitor adding free tier with usage caps — not announced in press. Product marketing validated within 48 hours; battle card section 'When they say free' updated with TCO counter and mid-market customer proof. AE survey: 71% used new section within two weeks; reported fewer pricing surprise losses.",
        },
        {
          title: "Seller validation — counter rewrite",
          body: "Marketing-drafted counter to 'Your implementation takes too long' read corporate. Top SE rewrote: 'Ask who owns timeline — our average enterprise go-live is X weeks with named customer.' Validation session adopted SE language. Card usage doubled; implementation objection appeared in 40% fewer loss notes.",
        },
        {
          title: "Legal save — benchmark claim",
          body: "AI draft claimed '2x faster than Competitor Y' from outdated third-party report. Legal review blocked; replaced with approved internal benchmark with methodology footnote. Competitor later challenged peer in RFP — customer cited sourced footnote. Governance prevented retraction scenario.",
        },
      ],
    }),
    buildSection({
      number: "5.3",
      title: "Case Studies & Proof Point Production",
      subtitle: "Interview workflows, AI drafting, and customer approval — proof that closes deals",
      take: "Case study production follows a repeatable pipeline: identify win themes from CRM, recruit customer with CS support, structured interview, AI draft from transcript, customer and legal approval, seller-ready formats (PDF, slide, 90-second video). Proof point library tags outcomes by industry, persona, and use case for AI-assisted personalisation in outreach.",
      why: "Generic case studies without buyer-relevant outcomes fail in late-stage deals. Production velocity matters — slow approval cycles mean sellers cite outdated proof or none at all.",
      paragraphs: [
        [
          s("Source stories from wins, not marketing wish lists. "),
          x(
            "CRM filters: closed-won last quarter, short sales cycle, competitive takeaway, referenceable account flag. CS validates relationship health before outreach. AI ranks candidates by persona match to current pipeline gap.",
            "Marketing-led case study lists ignore referenceability — burned customers refuse approval.",
          ),
          s(" Target 2–4 new proof points per quarter per priority segment — depth over volume."),
        ],
        [
          s("Interview for outcomes and quotes, not product tour. "),
          x(
            "Question framework: situation before, decision criteria, measurable outcome, quote on partnership. AI transcribes and drafts narrative arc — marketer edits for story clarity. Customer approves quotes only, not marketing spin.",
            "Product-feature case studies bore economic buyers — outcomes and metrics win RFPs.",
          ),
          s(" 90-second customer video from interview recording lowers production cost vs studio shoots."),
        ],
        [
          s("Atomise proof for multi-touch use. "),
          x(
            "One interview yields: full PDF, one-slide summary, email snippet, battle card proof bullet, LinkedIn quote graphic. AI atomisation from approved master — no new claims in derivatives.",
            "Single PDF format limits seller use in email, Slack, and CRM — atomise at approval.",
          ),
          s(" Proof tagged in DAM with industry, persona, competitor displaced — powers AI personalisation."),
        ],
      ],
      examples: [
        {
          title: "Pipeline-matched proof sprint",
          body: "Q3 pipeline skewed 60% healthcare; proof library had 2 healthcare stories. CRM win filter + CS referral produced 4 interviews in 6 weeks. AI drafts cut writing time 70%; legal pre-approved quote template accelerated sign-off. Healthcare win rate up 11 points; sellers cited new stories in 58% of healthcare opps per CRM notes.",
        },
        {
          title: "Atomisation — one interview, six assets",
          body: "Manufacturing customer interview approved as master PDF. AI generated slide, three email snippets, battle card bullet, and social graphic from same quotes. Enablement tracked usage: email snippets highest adoption. Production cost per usable asset dropped 65% vs separate shoots.",
        },
        {
          title: "Approval bottleneck fix",
          body: "Average case study approval 11 weeks — stories stale before publish. Shifted to quote-only approval via DocuSign template; full PDF optional. Cycle dropped to 3 weeks. Seller NPS on proof library rose from 52 to 81.",
        },
      ],
    }),
    buildSection({
      number: "5.4",
      title: "Onboarding & Ramp Acceleration",
      subtitle: "New hire curricula, certification, and AI coaching — time-to-productivity as enablement metric",
      take: "Sales onboarding connects product knowledge, methodology, enablement library navigation, and mock calls. AI generates role-play scenarios from battle cards and case studies, scores discovery questions, and personalises learning paths by segment assignment. Marketers supply content modules; enablement owns certification gates before quota-bearing live calls.",
      why: "Ramp time directly affects revenue capacity. Enablement content unused in onboarding never becomes habit — sellers learn the library in week one or never.",
      paragraphs: [
        [
          s("Sequence onboarding to mirror deal flow. "),
          x(
            "Week 1: ICP, personas, CRM hygiene. Week 2: discovery methodology + library tour. Week 3: competitive certification. Week 4: mock call with AI or manager scoring. Content modules tagged to week — not a content dump on day one.",
            "Onboarding decks without certification produce confident underperformers — gate before live pipeline.",
          ),
          s(" Ramp milestone: certified on top 3 battle cards and 5 proof stories for assigned segment."),
        ],
        [
          s("AI role-play supplements manager coaching scale. "),
          x(
            "Scenarios generated from real loss reasons: 'Technical buyer asks about SSO integration — respond using enablement assets.' AI scores talk track coverage and flags missed proof points. Manager reviews low scores only — scale coaching.",
            "Generic role-play ('sell me a pen') does not transfer to your category objections.",
          ),
          s(" Refresh scenarios quarterly from win-loss themes — onboarding stays current with market."),
        ],
        [
          s("Measure ramp, not completion. "),
          x(
            "Metrics: days to first meeting booked, days to first opp created, win rate at 90 days vs tenured baseline. LMS completion rates are vanity — correlate module usage with ramp KPIs.",
            "100% LMS completion with slow ramp means content wrong or certification too easy.",
          ),
          s(" Monthly ramp review with sales leadership — adjust onboarding when segment mix shifts."),
        ],
      ],
      examples: [
        {
          title: "Certification gate — competitive module",
          body: "New AEs previously went live without battle card knowledge — early losses to known competitors. Mandatory competitive certification with AI role-play (80% score to pass) before territory assignment. 90-day win rate for new hires improved from 12% to 19%; manager coaching hours per rep down 30%.",
        },
        {
          title: "Library tour integration",
          body: "Onboarding added 'find asset in 60 seconds' exercise using real opp scenario in Seismic. Reps failing retook module. Search usage in first 30 days up 3x vs prior cohort; time-to-first-customer-email-with-proof dropped from 18 to 7 days.",
        },
        {
          title: "Segment-specific paths",
          body: "Enterprise and SMB reps shared onboarding — enterprise reps underprepared on multi-threading content. AI-personalised paths by segment assignment: enterprise track added executive briefing module and long-cycle nurture assets. Enterprise new-hire ramp to quota 25 days faster.",
        },
      ],
    }),
    buildSection({
      number: "5.5",
      title: "Demo & Discovery Enablement",
      subtitle: "Talk tracks, discovery guides, and SE alignment — consistency without script robots",
      take: "Demo and discovery enablement equips sellers to qualify and show value by persona: discovery question banks tied to pain hypotheses, demo storylines mapped to use cases, and SE handoff briefs. AI drafts question trees from win stories and persona research — product marketing validates product accuracy; top performers validate conversational language.",
      why: "Inconsistent discovery produces demo-no-shows and SE burnout. Enablement that stops at product training leaves the hardest part of the call — qualification and narrative — to improvisation.",
      paragraphs: [
        [
          s("Discovery before demo — enforce qualification content. "),
          x(
            "Discovery guides organised by persona pain: economic buyer (ROI, risk), technical (integration, security), champion (adoption, internal sell). AI suggests follow-up questions from CRM industry and competitor fields. Sellers log answers in CRM fields enablement defines.",
            "Demo-first culture wastes SE time on unqualified opps — discovery enablement is pipeline hygiene.",
          ),
          s(" CRM required fields gate demo request — controversial but effective when leadership backs it."),
        ],
        [
          s("Demo storylines, not feature tours. "),
          x(
            "Three storylines per segment: 'Day in the life before/after,' 'Competitive displacement,' 'Expansion use case.' Each maps 5–7 screens max. AI generates storyline from case study outcomes — SEs validate technical flow.",
            "Feature tours let buyers pick their objection screen — storylines control narrative arc.",
          ),
          s(" Quarterly storyline refresh when product ships major capabilities — avoid stale demos."),
        ],
        [
          s("SE alignment via handoff brief template. "),
          x(
            "AE completes brief: persona map, pain confirmed, competitor present, proof to emphasise, landmines to avoid. AI pre-fills from CRM and call transcripts where recorded. SE prep time drops; demo relevance scores up in post-call surveys.",
            "SEs improvising without brief repeat discovery — buyer fatigue and longer cycles.",
          ),
          s(" Post-demo debrief feeds case study and battle card backlog — closed loop to product marketing."),
        ],
      ],
      examples: [
        {
          title: "Discovery gate — demo conversion",
          body: "Implemented discovery checklist in CRM before SE calendar release. Opps with incomplete discovery had 40% no-show on demos vs 12% for complete. Sales leadership enforced 2-week trial; qualified demo-to-opp conversion rose 28%. Enablement updated question bank from lost opp patterns.",
        },
        {
          title: "Storyline refresh — product launch",
          body: "Major analytics module launch; old demos still led with legacy workflow. AI drafted new storyline from launch messaging and top win transcript. SE certification on new flow in 10 days. Launch-quarter opps mentioning new module in CRM notes up 4x vs prior feature release.",
        },
        {
          title: "Handoff brief — SE satisfaction",
          body: "SE survey cited 'unprepared AE handoffs' as top friction. Standardised brief with AI CRM pre-fill adopted. SE prep time per demo dropped 35 minutes average; post-demo relevance rating rose from 3.2 to 4.1 on 5-point scale.",
        },
      ],
    }),
    buildSection({
      number: "5.6",
      title: "CRM Integration & Usage Analytics",
      subtitle: "In-workflow surfacing, content recommendations, and adoption metrics — enablement where sellers live",
      take: "Enablement ROI requires CRM and sales engagement integration: recommended assets by opp stage, competitor, and industry; tracking which content appeared in won vs lost deals; and alerts when high-performing assets go stale. AI ranks recommendations from similarity to winning opp profiles — marketers set governance on auto-suggest vs mandatory playbooks.",
      why: "Standalone enablement portals fail when sellers live in CRM. Usage analytics without win correlation justify library size, not revenue impact.",
      paragraphs: [
        [
          s("Surface assets in opp context, not separate login. "),
          x(
            "Salesforce/HubSpot sidebar: stage-appropriate assets, competitor-triggered battle cards, industry proof. AI recommendation from opp attributes — seller one-click attach to email or log usage. Friction reduction drives adoption more than training emails.",
            "Another portal login is adoption death — embed in existing workflow.",
          ),
          s(" Pilot with one segment before global rollout — fix recommendation noise early."),
        ],
        [
          s("Track usage and outcome correlation. "),
          x(
            "Metrics: asset views, shares, attach rate, win rate when asset touched vs not, cycle time delta. AI analyses CRM activity fields and email tracking — marketer validates attribution rules quarterly.",
            "View counts without win correlation celebrate popular but ineffective content.",
          ),
          s(" Monthly 'what sells' report to enablement council — drives retire and invest decisions."),
        ],
        [
          s("Playbooks vs optional recommendations balance autonomy. "),
          x(
            "Mandatory playbooks for regulated claims or new product launch windows. Optional AI recommendations elsewhere — over-mandating breeds workarounds. Governance documents which stages require playbook adherence.",
            "Mandatory everything trains sellers to ignore the system — tier enforcement.",
          ),
          s(" Seller feedback loop on bad recommendations — tune model and tagging monthly."),
        ],
      ],
      examples: [
        {
          title: "CRM sidebar — adoption lift",
          body: "Moved top assets from Seismic-only to Salesforce sidebar with stage triggers. 90-day active seller rate on enablement rose from 34% to 67%. Win rate on opps with logged asset touch 9 points higher — reported in sales QBR, securing enablement headcount.",
        },
        {
          title: "What sells report — invest decision",
          body: "Analytics showed vertical one-pager used in 41% of won manufacturing opps vs 8% of losses. Marketing doubled manufacturing proof production; generic industry deck retired. Manufacturing segment win rate up 14 points over two quarters.",
        },
        {
          title: "Recommendation noise fix",
          body: "Initial AI recommendations surfaced irrelevant assets 30% of time — sellers disabled widget. Added competitor and industry hard filters; noise dropped to 8%. Widget re-enable rate 89%; attach rate recovered.",
        },
      ],
    }),
    buildSection({
      number: "5.7",
      title: "Win/Loss & Continuous Improvement",
      subtitle: "Feedback loops, content refresh triggers, and sales-marketing QBR rhythm — compound the library",
      take: "Win/loss programmes feed enablement prioritisation: structured interviews within 30 days of close, AI synthesis of themes by competitor and persona, and explicit links to content gaps. Continuous improvement rhythm: monthly usage review, quarterly battle card refresh, annual library audit. Marketers present enablement impact in revenue terms at QBR — not asset count.",
      why: "Static libraries decay as competitors and product evolve. Win/loss without enablement action is expensive research theatre.",
      paragraphs: [
        [
          s("Interview fast; synthesise for enablement backlog. "),
          x(
            "Win/loss vendor or internal team interviews within 30 days. AI tags transcripts: content mentioned, content missing, competitor narrative that worked. Tags auto-populate enablement Jira/Asana backlog — council prioritises monthly.",
            "Win/loss reports in leadership decks without backlog items change nothing in seller hands.",
          ),
          s(" Win interviews source case studies; loss interviews source battle card and discovery gaps."),
        ],
        [
          s("Refresh triggers, not calendar-only updates. "),
          x(
            "Triggers: competitor product launch, win rate drop vs named competitor, asset usage below threshold, new loss theme in 3+ interviews. AI monitoring plus CRM alerts — calendar refresh alone misses market moves.",
            "Annual battle card update is obsolete on publish day in competitive markets.",
          ),
          s(" Version history on all assets — sellers trust 'updated this month' badges."),
        ],
        [
          s("QBR narrative: revenue impact, not production volume. "),
          x(
            "Present: win rate delta on asset-touched opps, ramp improvement, competitive win rate trends, top 3 gaps closed. Avoid '47 assets published' without adoption data — sales leadership funds outcomes.",
            "Production metrics without adoption invite budget cuts — speak revenue.",
          ),
          s(" Joint marketing-sales enablement OKR: one shared metric (e.g., competitive win rate) quarterly."),
        ],
      ],
      examples: [
        {
          title: "Loss theme — discovery gap closed",
          body: "Win/loss synthesis: 8 consecutive losses cited 'ROI justification unclear' at economic buyer. Backlog item: ROI calculator talk track + one-page business case template. Shipped in 3 weeks; next quarter losses citing ROI theme dropped 1 in 12 interviews.",
        },
        {
          title: "Competitor launch trigger",
          body: "Competitor announced AI feature in press; win rate vs them dropped 12 points in 45 days. Triggered emergency battle card sprint — AI intel diff plus SE input. Updated card within 6 days; win rate recovered to prior baseline in 60 days.",
        },
        {
          title: "QBR funding — attribution proof",
          body: "Enablement team presented CRM analysis: opps with 3+ enablement touches won at 2.1x rate. Secured budget for dedicated competitive analyst vs cut proposal. Shared OKR with sales: competitive win rate +5 points — achieved in two quarters.",
        },
      ],
    }),
    buildSection({
      number: "5.8",
      title: "The Marketer Decision Lens — Enablement Investment",
      subtitle: "When to build the map, scale AI production, or integrate CRM — prioritising revenue impact",
      take: "Before scaling enablement production or AI drafting tools, run four checks: (1) is stage × persona matrix validated with CRM and sales — architecture before volume? (2) do battle cards and proof have governance and seller validation — accuracy before speed? (3) is content integrated in CRM with usage-to-win analytics — adoption before library growth? (4) does win/loss feed a prioritised backlog — compound learning? Invest in mapping and integration first. Scale AI when governance and adoption hold.",
      why: "AI makes enablement content cheap to produce — tempting teams to publish more before fixing discovery, adoption, and measurement. This lens prioritises investments that move win rates.",
      paragraphs: [
        [
          s("Check one: matrix and co-design readiness. "),
          x(
            "No stage × persona map or no sales council → build architecture before AI content sprint. Sellers report 'cannot find relevant asset' → fix taxonomy and CRM surfacing before new production.",
            "Volume without map repeats graveyard pattern at AI speed.",
          ),
          s(" Matrix workshop gate precedes enablement platform expansion or agency retainer."),
        ],
        [
          s("Check two: competitive and proof governance. "),
          x(
            "Battle cards without legal review on comparisons → governance before scale. Case study approval over 8 weeks → fix workflow before doubling interview volume.",
            "Fast wrong intel damages seller trust permanently — slower accuracy wins.",
          ),
          s(" Seller validation session required for every new battle card tier-one competitor."),
        ],
        [
          s("Checks three and four: integration and feedback loops. "),
          x(
            "Usage analytics not tied to win rate → build attribution before headcount for content producers. Win/loss not linked to backlog → process fix before new research vendor spend.",
            "Integration and feedback are prerequisites for scale, not phase two.",
          ),
          s(" Run lens in quarterly enablement council with sales ops and product marketing present."),
        ],
      ],
      examples: [
        {
          title: "AI production deferred",
          body: "Vendor proposed AI-generated 200 assets quarterly. Lens: no CRM integration, 11% seller active usage. Deferred AI scale; implemented Salesforce sidebar and usage tracking. Pilot AI on 10 gap assets only after adoption hit 55%. Win-rate correlation proved before full contract.",
        },
        {
          title: "Library expansion blocked",
          body: "Marketing wanted 50 new PDFs for launch. Lens: prior launch assets 9% used; no atomisation plan. Reduced to 12 seller-ready assets with atomisation pipeline and mandatory onboarding module. Launch quarter asset attach rate 44% vs 11% prior launch.",
        },
        {
          title: "Win/loss before headcount",
          body: "Request for second enablement FTE. Lens: no win/loss programme, backlog unprioritised. Hired win/loss coordinator first; first quarter backlog closed 6 gap items with measured win-rate lift. Second FTE approved with evidence.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Sellers ignore the enablement library despite hundreds of assets. What should marketing fix first?",
      options: [
        "Publish 50 more AI-generated PDFs immediately.",
        "Build stage × persona matrix with CRM data, co-design with sales, and surface assets in CRM workflow.",
        "Mandate weekly asset reading assignments.",
        "Move library to a new vendor portal.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Architecture, co-design, and in-workflow access precede volume. Re-read sections 5.1 and 5.6.",
      wrongFeedback:
        "Fix mapping and CRM integration before adding content. Re-read sections 5.1 and 5.6.",
    },
    {
      q: "A battle card claims a competitor lacks a feature they just launched. What failed?",
      options: [
        "Seller training on objection handling.",
        "Competitive intel monitoring with human-governed refresh before publish.",
        "Too many case studies in the library.",
        "CRM sidebar recommendations.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Intel velocity requires governance and refresh triggers. Re-read sections 5.2 and 5.7.",
      wrongFeedback:
        "Battle cards need monitored intel and validated publish workflow. Re-read sections 5.2 and 5.7.",
    },
    {
      kind: "order",
      q: "Order the sales enablement system from first step to last.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Map content gaps by stage × persona with sales input",
        "Produce battle cards, proof, and onboarding modules",
        "Integrate assets in CRM and track usage vs wins",
        "Feed win/loss into backlog and refresh library",
      ],
      correctFeedback:
        "Right. Map → produce → integrate → improve. Re-read sections 5.1–5.8.",
      wrongFeedback:
        "Start with mapping and co-design. Win/loss closes the loop. Re-read sections 5.1–5.8.",
    },
    {
      kind: "categorize",
      q: "Sort each practice into the correct enablement layer.",
      categories: ["Architecture & proof", "Seller readiness", "Integration & analytics", "Improvement & lens"],
      items: [
        { text: "Stage × persona gap matrix from CRM.", category: 0 },
        { text: "Competitive certification before territory assignment.", category: 1 },
        { text: "Asset recommendations in Salesforce sidebar.", category: 2 },
        { text: "Win/loss themes auto-tag enablement backlog.", category: 3 },
        { text: "Customer quote-only approval workflow.", category: 0 },
        { text: "AI role-play from real loss scenarios.", category: 1 },
      ],
      correctFeedback:
        "Right. Architecture = map and proof. Readiness = onboarding and demo. Integration = CRM. Improvement = win/loss and lens. Re-read sections 5.1–5.8.",
      wrongFeedback:
        "Match each practice to architecture, readiness, integration, or improvement. Re-read sections 5.1–5.8.",
    },
    {
      q: "Win rate is flat but enablement published 40 new assets. What does the lens prioritise?",
      options: [
        "Double asset production with AI.",
        "Usage-to-win correlation and win/loss backlog before more production.",
        "Retire all battle cards.",
        "Measure LMS completion only.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Measure adoption and impact before scaling production. Re-read sections 5.6, 5.7, and 5.8.",
      wrongFeedback:
        "Analytics and feedback loops precede volume. Re-read sections 5.6, 5.7, and 5.8.",
    },
    {
      q: "New hires struggle in competitive deals. What enablement investment comes first?",
      options: [
        "More generic product training videos.",
        "Competitive certification with battle cards and AI role-play tied to top loss themes.",
        "Larger case study library without segment filter.",
        "Remove all certification gates for speed.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Ramp acceleration ties onboarding to competitive readiness. Re-read sections 5.2, 5.4, and 5.8.",
      wrongFeedback:
        "Certification on competitive content and role-play beats generic training. Re-read sections 5.2, 5.4, and 5.8.",
    },
  ],
});
