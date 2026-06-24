import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter05MktCrmIntelligenceLeadNurturing = buildChapter({
  slug: "mkt-crm-intelligence-lead-nurturing",
  number: 5,
  shortTitle: "CRM Intelligence & Lead Nurturing",
  title: "CRM Intelligence & Lead Nurturing — Turning Email Engagement Into Sales-Ready Pipeline With AI-Assisted Scoring and Nurture Design",
  readingMinutes: 24,
  summary:
    "Email programmes generate behavioural signals — opens, clicks, content consumption, form submissions, and product usage — that CRM systems can translate into pipeline intelligence. AI accelerates lead scoring, intent detection, enrichment, and nurture personalisation, but revenue impact depends on marketer-owned architecture: scoring models aligned to buying stages, routing rules sales trusts, nurture maps that match sales cycles, and reporting that connects email activity to closed-won revenue. Teams that treat CRM as a contact database waste nurture investment; teams that treat it as a revenue intelligence layer compound email ROI.",
  keyTakeaway:
    "CRM intelligence is a workflow, not a dashboard. The sequence that wins: define buying stages and scoring criteria → capture intent signals from email and web → enrich and route with SLA discipline → map nurture tracks to stage transitions → align sales on handoff thresholds → report pipeline contribution from email. AI accelerates scoring and content matching; marketers own model governance and sales trust.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "5.1",
      title: "Lead Scoring Architecture",
      subtitle: "Explicit, implicit, and negative scoring — building models sales actually believes",
      take: "Lead scoring assigns numeric values to profile fit (explicit) and behavioural engagement (implicit), with negative scores for disengagement or poor fit signals. AI can propose weight distributions from historical conversion data and suggest score decay rules — but scoring models fail when marketing optimises for MQL volume instead of sales-accepted quality. Architecture starts with agreed definitions: what score triggers nurture escalation, sales notification, or SDR outreach.",
      why: "Broken scoring floods sales with unqualified leads or hides hot prospects in nurture purgatory. Marketers who co-design scoring with sales and validate against opportunity conversion rates build CRM intelligence that email programmes can feed continuously.",
      paragraphs: [
        [
          s("Separate fit scoring from engagement scoring before combining. "),
          x(
            "Fit (explicit): job title, company size, industry, geography, technographic match. Engagement (implicit): email clicks on pricing content, demo page visits, webinar attendance, reply to SDR email. Combined score uses weighted formula — typical B2B: 40% fit, 60% engagement for inbound; reverse for ABM where fit is pre-qualified.",
            "Single blended score without transparency makes sales distrust the model — they cannot see why a lead scored 85.",
          ),
          s(" Document score components in CRM field tooltips — sales adoption requires explainability."),
        ],
        [
          s("Score decay prevents stale engagement from inflating priority. "),
          x(
            "Engagement points decay 50% every 30 days without activity; fit points remain stable. AI analyses optimal decay curves from your win/loss data — high-velocity SaaS may use 14-day half-life; enterprise may use 90 days. Without decay, a lead who clicked one email six months ago still looks hot.",
            "Decay is the most commonly omitted scoring element — and the primary cause of false MQL spikes.",
          ),
          s(" Run quarterly score distribution audits — healthy models show bell curve, not 80% above MQL threshold."),
        ],
        [
          s("Negative scoring protects pipeline quality. "),
          x(
            "Subtract points for: competitor email domains, student titles, unsubscribes from product emails, spam complaint, repeated no-shows, or CRM disqualified reason codes. AI flags anomalous positive-score profiles — personal Gmail with C-suite title at Fortune 500 often indicates bad enrichment.",
            "Negative scores are governance, not pessimism — they prevent SDR time on uncallable records.",
          ),
          s(" Sales-rejected leads should feed negative scoring rules — closed-loop model refinement."),
        ],
      ],
      examples: [
        {
          title: "B2B SaaS — fit-engagement split scoring",
          body: "A marketing automation platform rebuilt scoring after sales rejected 62% of MQLs. New model: fit capped at 40 points (title + company size + industry), engagement up to 60 points (pricing page, integration doc clicks, trial signup). MQL threshold raised from 50 to 75. MQL volume dropped 34%; SAL rate increased from 38% to 71%. Email nurture tracks tagged by engagement tier — high-engagement/low-fit routed to education, high-fit/low-engagement to case study sequences.",
        },
        {
          title: "AI-assisted weight calibration",
          body: "An enterprise software vendor fed 18 months of CRM opportunity data into a scoring analysis workflow. AI suggested engagement weights 2.3x higher for 'security whitepaper' clicks than 'blog' clicks — correlated with 4x close rate. Weights adopted after sales validation workshop. False positive MQLs from generic blog traffic fell 45% without changing email send volume.",
        },
        {
          title: "Decay failure — stale lead crisis",
          body: "A fintech company's scoring had no decay. Q4 campaign re-engaged 40,000 dormant contacts; 3,200 crossed MQL threshold simultaneously from historical engagement points. SDR team overwhelmed; follow-up SLA breached. Fix: 30-day engagement decay, batch re-engagement scores capped at 15 points until fresh high-intent action. Crisis resolved; re-engagement programme restructured with progressive scoring.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-email-ch5-crm-intelligence",
      type: "flow",
      title: "CRM Intelligence Workflow",
      caption:
        "Email and web signals → lead scoring and intent detection → enrichment and routing → stage-mapped nurture → sales handoff → pipeline reporting and model refinement.",
    }),
    buildSection({
      number: "5.2",
      title: "Intent Signal Capture from Email",
      subtitle: "Clicks, content depth, reply sentiment, and cross-channel behaviour as buying signals",
      take: "Intent signals from email go beyond opens: link category clicked (pricing vs thought leadership), email reply sentiment, forward behaviour, sequence completion, and time-between-clicks patterns. AI classifies click intent from URL taxonomy and email body context; marketers define the signal taxonomy and ensure UTM and CRM event mapping captures granularity sales needs.",
      why: "Treating all clicks as equal intent destroys scoring precision. A pricing page click and a careers page click should not carry the same weight — but many ESP-CRM integrations log only 'email clicked' without URL classification.",
      paragraphs: [
        [
          s("Build a URL intent taxonomy before scaling nurture. "),
          x(
            "Tier 1 (high intent): pricing, demo request, ROI calculator, comparison pages. Tier 2 (evaluation): case studies, integration docs, product feature pages. Tier 3 (awareness): blog, podcast, generic resources. Map every email link through tagged UTM and CRM activity logging with tier classification.",
            "Untagged links make every click a generic signal — scoring cannot differentiate buying stage.",
          ),
          s(" Audit email templates quarterly — new links without taxonomy tags are a common drift source."),
        ],
        [
          s("Email engagement velocity signals urgency. "),
          x(
            "Three pricing-related clicks in 48 hours outweigh three blog clicks over 90 days. AI velocity models flag acceleration patterns — sudden spike in product content consumption often precedes RFP or internal budget approval. Velocity multipliers apply on top of base click scores.",
            "Velocity without volume context creates false alarms on bot clicks — pair with human-like engagement patterns.",
          ),
          s(" Define velocity thresholds per segment — enterprise buyers move slower than SMB self-serve."),
        ],
        [
          s("Cross-channel intent stitching requires identity resolution. "),
          x(
            "Email click → website session → product trial signup should chain in CRM timeline as single intent story. Fragmented records — email in ESP, web in analytics, product in separate system — break nurture triggers. Minimum viable: email address as primary key with form pre-fill and login capture.",
            "Stitched intent is the difference between 'clicked email' and 'evaluating competitor replacement this quarter.'",
          ),
          s(" Marketing ops owns identity resolution SLA — new integrations must log to CRM within 15 minutes."),
        ],
      ],
      examples: [
        {
          title: "URL taxonomy lift — enterprise ABM",
          body: "An HR tech company classified 240 email link destinations into 4 intent tiers. Previously all clicks scored +5. Post-taxonomy: Tier 1 +25, Tier 2 +10, Tier 3 +3. Scoring correlated with opportunity creation within 30 days improved from 0.31 to 0.58 AUROC. Sales began trusting score-sorted daily digest — follow-up rate on 80+ leads increased 40%.",
        },
        {
          title: "Velocity trigger — trial conversion",
          body: "A project management SaaS added velocity rule: 3+ product-help email clicks in 7 days triggers CS outreach, not nurture. AI flagged 12% of trialists matching pattern — conversion rate in flagged cohort 2.4x unflagged. Email programme shifted from generic drip to intent-triggered CS handoff for high-velocity trialists.",
        },
        {
          title: "Identity fragmentation failure",
          body: "A B2B manufacturer ran email nurture in HubSpot and tracked web in GA4 without CRM sync. Hot leads clicked pricing emails but web sessions stayed anonymous — scoring never updated. Fix: reverse proxy form capture, UTM persistence, and HubSpot tracking code on all product pages. Intent capture completeness rose from 41% to 89% of known contacts.",
        },
      ],
    }),
    buildSection({
      number: "5.3",
      title: "Data Enrichment & Profile Completeness",
      subtitle: "Firmographic, technographic, and contact enrichment — AI fill with validation gates",
      take: "Enrichment fills CRM gaps: company size, industry, tech stack, social profiles, and contact role verification. AI enrichment tools — Clearbit, ZoomInfo, Clay workflows — accelerate profile completion for scoring and personalisation. Marketers govern enrichment sources, refresh cadence, and override rules when AI confidence is low. Incomplete profiles break fit scoring; stale enrichment breaks ABM personalisation.",
      why: "Nurture personalisation and routing depend on accurate firmographics. Enrichment without validation injects garbage — wrong industry tags send enterprise contacts into SMB nurture tracks.",
      paragraphs: [
        [
          s("Prioritise enrichment on high-engagement records first. "),
          x(
            "Enrich on MQL threshold crossing, not on every new subscriber — enrichment API costs scale with volume. Queue: engaged unknowns → MQL candidates → post-form-submit gaps. AI prioritises records with highest expected pipeline value based on engagement velocity and partial fit data.",
            "Bulk enriching cold lists wastes budget and imports outdated firmographics.",
          ),
          s(" Set enrichment budget caps monthly — marketing ops reports cost per SAL enriched."),
        ],
        [
          s("Validation gates prevent enrichment hallucination. "),
          x(
            "Require minimum confidence score from enrichment provider. Flag conflicts: form says 'Healthcare' but enrichment says 'Retail.' Human review queue for high-score leads with conflicting data. AI can cross-reference LinkedIn and company website — but marketer defines conflict resolution rules.",
            "Auto-accepting enrichment on scored leads propagates errors into routing and personalisation.",
          ),
          s(" Sales can override enrichment fields — overrides feed data quality feedback loop."),
        ],
        [
          s("Refresh cadence matches data decay reality. "),
          x(
            "Job changes, acquisitions, and funding rounds invalidate firmographics. Re-enrich active pipeline contacts quarterly; dormant contacts on re-engagement trigger. AI monitors news signals for target accounts — funding announcement may upgrade ABM tier and nurture track.",
            "Stale employee count breaks company-size routing — enterprise lead routed to SMB SDR.",
          ),
          s(" Enrichment refresh logs in CRM audit trail — scoring recalculates on material field changes."),
        ],
      ],
      examples: [
        {
          title: "Clay workflow — ABM enrichment at scale",
          body: "A cybersecurity vendor used Clay to enrich 2,400 target accounts from email engagement signals. Workflow: domain from email → firmographic pull → technographic match against ICP stack → confidence score. Records below 0.7 confidence routed to manual research queue. Enrichment completion on MQLs rose from 54% to 91%; personalised nurture by industry deployed only on validated records — reply rate up 28%.",
        },
        {
          title: "Conflict resolution — wrong industry routing",
          body: "An edtech company auto-enriched 'University of State' contacts as K-12 district — wrong nurture track sent classroom teacher content to provosts. Fix: .edu domain rule bypasses industry enrichment; triggers manual segment assignment. Conflict rate on education vertical dropped from 18% to 2%.",
        },
        {
          title: "Funding signal refresh",
          body: "AI news monitor flagged 34 target accounts with Series B announcements in 90 days. CRM re-enriched employee count and tech stack; ABM tier upgraded from Tier 2 to Tier 1. Dedicated nurture sequence with expansion case studies deployed — 6 opportunities created from previously stalled accounts.",
        },
      ],
    }),
    buildSection({
      number: "5.4",
      title: "Lead Routing & SLA Design",
      subtitle: "Round-robin, territory, score-based, and account-based routing with email-triggered handoffs",
      take: "Routing assigns scored and enriched leads to the right owner: SDR, AE, account team, or continued nurture. Email programmes trigger routing via score thresholds, intent tier spikes, or sequence completion. AI can optimise round-robin load balancing and predict best rep match from historical win rates — but routing rules need documented SLAs: time-to-first-touch, escalation on breach, and holiday coverage.",
      why: "The fastest nurture programme fails if hot leads sit unassigned for 48 hours. Sales blames marketing quality; marketing blames sales follow-up — routing SLAs make accountability measurable.",
      paragraphs: [
        [
          s("Define routing tiers by score and intent, not score alone. "),
          x(
            "Tier A (immediate): score 80+ AND Tier 1 intent in 7 days → AE or senior SDR, 15-minute SLA. Tier B (same day): score 60–79 OR Tier 2 intent spike → SDR queue, 4-hour SLA. Tier C (nurture): below threshold → automated sequence, no sales assignment. AI adjusts tier boundaries from conversion data quarterly.",
            "Score-only routing ignores intent recency — a 75-score lead who clicked pricing today beats a 85-score dormant record.",
          ),
          s(" Routing rules documented in shared playbook — sales and marketing sign off quarterly."),
        ],
        [
          s("Account-based routing overrides individual lead rules. "),
          x(
            "Known target account contacts route to assigned AE regardless of score — ABM relationship trumps nurture. Email engagement on target accounts triggers account team alert, not generic SDR pool. AI aggregates account-level engagement score from all contacts at domain.",
            "Individual lead routing on strategic accounts fragments relationship ownership.",
          ),
          s(" Account engagement rollup visible in CRM — email programme reports at account level for ABM."),
        ],
        [
          s("SLA monitoring and escalation are non-negotiable. "),
          x(
            "CRM workflow: assignment timestamp → alert at 50% SLA → escalate to manager at breach → re-route if no action in 2x SLA. AI predicts SLA breach risk from rep workload and queues redistribution. Marketing receives weekly SLA compliance report — nurture cannot compensate for sales neglect on hot leads.",
            "Unmonitored SLAs erode trust faster than scoring model disagreements.",
          ),
          s(" SLA breach data feeds quarterly sales-marketing QBR — not buried in ops tickets."),
        ],
      ],
      examples: [
        {
          title: "Intent-triggered routing — demo request",
          body: "A CRM SaaS replaced score-only routing with intent override: any pricing page click from email within 24 hours routes to SDR within 30 minutes regardless of total score. Average time-to-first-touch dropped from 6.2 hours to 22 minutes. Opportunity creation rate on pricing clickers up 35%. Score still governs non-pricing nurture paths.",
        },
        {
          title: "ABM account rollup alert",
          body: "An enterprise data platform aggregated email engagement across 5 contacts at a target bank. No individual exceeded MQL threshold; account score hit Tier 1. AE received consolidated engagement digest with contact roles and content consumed. Single meeting booked led to $280K opportunity — would have stayed in nurture under contact-level rules.",
        },
        {
          title: "SLA breach escalation fix",
          body: "Analysis showed 41% of Tier A leads breached 4-hour SLA during month-end. SDR team overloaded; hot leads recycled to nurture. Escalation workflow added: breach at 2 hours routes to backup SDR pool. SLA compliance rose to 87%; sales accepted lead rate improved 19% — same lead quality, faster follow-up.",
        },
      ],
    }),
    buildSection({
      number: "5.5",
      title: "Nurture Track Mapping",
      subtitle: "Stage-aligned email sequences — awareness, consideration, evaluation, and re-engagement paths",
      take: "Nurture mapping assigns contacts to email tracks based on CRM stage, score band, intent tier, and persona. Each track has entry triggers, content themes, exit criteria, and branch logic. AI drafts sequence outlines and subject line variants per stage; marketers define stage definitions, content governance, and maximum time-in-nurture before recycle or suppress.",
      why: "Generic drip campaigns ignore buying stage — sending case studies to awareness contacts and thought leadership to evaluation-stage buyers wastes attention. Mapped nurture aligns email cadence to CRM intelligence.",
      paragraphs: [
        [
          s("Map tracks to CRM lifecycle stages explicitly. "),
          x(
            "Subscriber → MQL nurture (education + proof). MQL → SQL bridge (objection handling + demo CTA). Customer onboarding (activation emails). Churn-risk (re-engagement). Each track: 4–8 emails, 7–21 day spacing, exit on score threshold or stage change. AI suggests content themes from top-performing emails per stage.",
            "Tracks without exit criteria trap engaged buyers in nurture when they should route to sales.",
          ),
          s(" Visual nurture map in programme documentation — ops and content teams share single reference."),
        ],
        [
          s("Branch logic responds to in-sequence behaviour. "),
          x(
            "Clicked pricing in email 3 → branch to evaluation track, skip awareness emails 4–6. No open on 3 consecutive sends → branch to re-engagement or suppress. AI recommends branch points from engagement drop-off analysis. Marketer approves branch complexity — over-branching creates untestable permutations.",
            "Linear drips ignore the strongest signal: what the contact did during the sequence.",
          ),
          s(" Maximum 3 branch points per track — simplicity beats theoretical personalisation."),
        ],
        [
          s("Content theme rotation prevents nurture fatigue. "),
          x(
            "Alternate proof types: customer story, data point, how-to, objection FAQ, social proof, offer. AI analyses which themes drive stage progression per persona. Same CTA in every email trains ignore behaviour. Track-level frequency caps: max 2 emails per week per contact across all active nurtures.",
            "Nurture fatigue shows as declining opens before unsubscribes — monitor engagement slope, not just opt-outs.",
          ),
          s(" Quarterly track performance review — retire sequences with negative engagement trend."),
        ],
      ],
      examples: [
        {
          title: "Stage-mapped nurture — consideration bridge",
          body: "A B2B payments company split nurture into 4 tracks by CRM stage. Consideration track: 6 emails over 18 days — comparison guide, ROI calculator, integration proof, objection FAQ, customer webinar invite, demo CTA. Contacts entering with pricing intent skip to email 4. MQL-to-SQL conversion rate up 24% versus single generic 12-email drip. AI drafted email outlines; compliance reviewed financial claims.",
        },
        {
          title: "Branch on pricing click",
          body: "An HR software nurture detected pricing link click on email 2 of 8-email awareness sequence. Branch rule moved contact to 3-email 'fast track' with demo focus. Average days-to-SQL reduced from 34 to 12 for branched cohort. Non-clickers continued awareness track — no premature sales pressure.",
        },
        {
          title: "Nurture fatigue detection",
          body: "AI flagged declining open rate slope on 9-month-old lead nurture — engagement down 40% from launch. Root cause: unchanged content, weekly cadence, no theme rotation. Track retired; replaced with quarterly pulse plus re-engagement sunset. List health improved; complaint rate dropped 60%.",
        },
      ],
    }),
    buildSection({
      number: "5.6",
      title: "Sales & Marketing Alignment",
      subtitle: "Shared definitions, feedback loops, and joint pipeline reviews — making CRM intelligence actionable",
      take: "Alignment means shared MQL/SQL definitions, agreed scoring thresholds, lead rejection reason taxonomy, and regular pipeline reviews where email engagement data informs sales prioritisation. AI synthesises win/loss themes and email engagement patterns for QBR decks — but alignment is a process: weekly lead review, monthly score calibration, quarterly definition audit.",
      why: "CRM intelligence without alignment becomes shelfware. Sales overrides CRM scores with gut feel; marketing inflates MQL definitions to hit KPIs. Shared governance restores signal integrity.",
      paragraphs: [
        [
          s("Document MQL, SAL, and SQL definitions with examples. "),
          x(
            "MQL: score 75+ AND fit criteria met AND engagement in 30 days. SAL: sales accepts within 48 hours. SQL: discovery meeting completed. Each definition includes CRM field requirements and disqualification examples. AI drafts definition doc from historical converted profiles — sales edits edge cases.",
            "Ambiguous definitions cause monthly arguments that scoring refinements cannot fix.",
          ),
          s(" Definition doc version-controlled — changes trigger scoring and routing rule review."),
        ],
        [
          s("Lead rejection feedback closes the scoring loop. "),
          x(
            "Mandatory rejection reasons: bad fit, no budget, competitor, no response, duplicate, timing. Marketing analyses rejection patterns monthly — high 'bad fit' on specific segment triggers scoring or list source fix. AI clusters rejection notes for theme detection.",
            "Rejections without reasons waste the richest sales intelligence in your CRM.",
          ),
          s(" Rejection rate by lead source feeds channel and content investment decisions."),
        ],
        [
          s("Joint pipeline reviews connect email to revenue. "),
          x(
            "Weekly: new MQLs with email engagement summary for SDR prioritisation. Monthly: influenced pipeline from nurture tracks. Quarterly: scoring model AUROC, SLA compliance, track conversion rates. AI generates review packets; leaders discuss exceptions and definition drift.",
            "Reviews without email context reduce CRM to contact counts — engagement story sells programme value.",
          ),
          s(" Marketing attends sales pipeline call monthly — not only annual alignment workshops."),
        ],
      ],
      examples: [
        {
          title: "Definition workshop — MQL reset",
          body: "A martech company's sales rejected 55% of MQLs citing 'not ready to buy.' Joint workshop redefined MQL to require Tier 2+ intent in 14 days, not just score. Marketing adjusted nurture to build intent before threshold. MQL volume down 28%; pipeline created per MQL up 2.1x. Email programme credited in QBR with influenced pipeline dashboard.",
        },
        {
          title: "Rejection analysis — list source fix",
          body: "Rejection analysis showed 34% 'bad fit' from one webinar partner list. Fit scoring added partner-specific penalty; list excluded from MQL campaigns. Replacement partner list had 8% bad-fit rejection. Scoring loop prevented recurring SDR waste — saved 120 hours quarterly.",
        },
        {
          title: "Engagement digest for SDR prioritisation",
          body: "Daily SDR digest added email engagement summary: last 3 clicks with intent tier, sequence position, account rollup for ABM. SDRs reported 25% higher connect rate on calls referencing specific content consumed. Sales began requesting more granular URL taxonomy from marketing.",
        },
      ],
    }),
    buildSection({
      number: "5.7",
      title: "CRM Reporting & Pipeline Attribution",
      subtitle: "Email-influenced pipeline, nurture velocity, and scoring model performance dashboards",
      take: "CRM reporting for email programmes tracks: MQLs and SQLs by nurture track, pipeline influenced by email engagement, velocity from subscriber to opportunity, scoring model accuracy, and SLA compliance. AI automates dashboard narration and anomaly detection — but marketers define attribution rules: first-touch, last-touch, or multi-touch with email weight.",
      why: "Without pipeline attribution, email nurture is judged on opens and clicks while revenue credit goes to sales activity. CRM reporting makes nurture investment defensible.",
      paragraphs: [
        [
          s("Build email-influenced pipeline as primary programme metric. "),
          x(
            "Opportunity with email engagement in 90 days before creation = influenced. Track influenced pipeline value, win rate, and cycle length versus non-influenced. Multi-touch model assigns fractional credit to nurture emails in long cycles. AI flags opportunities with no email touch for process gaps.",
            "Open rate dashboards do not secure nurture budget — pipeline influence does.",
          ),
          s(" Influenced pipeline in monthly marketing report — same visibility as paid media ROAS."),
        ],
        [
          s("Nurture velocity metrics expose bottleneck tracks. "),
          x(
            "Measure: days from track entry to MQL, MQL to SQL, SQL to opportunity. Compare tracks and personas. Slow velocity on high-intent track indicates content or routing failure, not lead quality. AI benchmarks velocity against historical quarters and flags regression.",
            "Velocity beats volume — 50 MQLs in 7 days beats 200 MQLs in 90 days for sales efficiency.",
          ),
          s(" Velocity dashboard shared in sales-marketing QBR — joint accountability."),
        ],
        [
          s("Scoring model performance requires ongoing validation. "),
          x(
            "Track AUROC or lift at MQL threshold quarterly. Decaying model accuracy triggers recalibration. A/B test score threshold changes on holdout cohort before full rollout. AI monitors score distribution drift — sudden spikes often indicate bot engagement or broken decay.",
            "Set-and-forget scoring degrades as product, ICP, and market shift.",
          ),
          s(" Model validation report annual minimum — more frequent if ICP or product changes."),
        ],
      ],
      examples: [
        {
          title: "Influenced pipeline dashboard",
          body: "A B2B analytics company built CRM dashboard: $4.2M influenced pipeline from email nurture in Q3, 38% win rate versus 22% non-influenced. CFO approved nurture headcount expansion. Attribution used 90-day engagement window with multi-touch weights — marketing and finance agreed rules in Q1.",
        },
        {
          title: "Velocity bottleneck — evaluation track",
          body: "Velocity analysis showed evaluation nurture averaged 52 days to MQL versus 21 days on consideration track. Content audit revealed evaluation track lacked demo CTA until email 7. Restructured to demo on email 3 for high-intent entrants. Evaluation velocity dropped to 28 days; SQL rate up 31%.",
        },
        {
          title: "Scoring drift detection",
          body: "AI anomaly alert: MQL volume up 80% week-over-week with flat opportunity creation. Investigation: broken decay after CRM migration — 2-year-old engagement points persisted. Emergency decay rule applied; model recalibrated. Prevented quarter of sales capacity waste on false MQLs.",
        },
      ],
    }),
    buildSection({
      number: "5.8",
      title: "The Marketer Decision Lens — CRM AI Investment",
      subtitle: "When to score, enrich, route, or rebuild nurture — allocating CRM intelligence resources",
      take: "Before investing in AI scoring, enrichment APIs, or nurture personalisation, run four checks: (1) are MQL/SQL definitions agreed with sales — alignment before automation? (2) is intent signal capture complete — URL taxonomy and identity resolution? (3) do routing SLAs and owners exist — intelligence without follow-up is waste? (4) can you measure pipeline influence — reporting before scaling? Invest in scoring when definitions are stable and signals are captured. Enrich when fit gaps block routing. Rebuild nurture when velocity stalls despite clean data.",
      why: "AI makes scoring and enrichment cheap — tempting teams to automate before fixing signal capture and sales alignment. This lens prioritises CRM intelligence investments that compound email programme ROI.",
      paragraphs: [
        [
          s("Check one: definition and alignment readiness. "),
          x(
            "No agreed MQL definition → workshop before scoring investment. Sales rejection rate above 40% → fix definitions and signals before AI weight optimisation.",
            "AI scoring on broken definitions automates disagreement.",
          ),
          s(" Alignment gate precedes any scoring tool purchase or enrichment contract."),
        ],
        [
          s("Check two: signal capture completeness. "),
          x(
            "Audit: percentage of email clicks logged with intent tier in CRM. Target 85%+ before advanced scoring. Identity resolution gaps → fix tracking before enrichment spend.",
            "Incomplete signals make AI scoring confidently wrong.",
          ),
          s(" Signal audit quarterly — new email templates and landing pages often introduce gaps."),
        ],
        [
          s("Checks three and four: routing capacity and attribution. "),
          x(
            "SLA compliance below 70% → fix sales capacity before raising MQL volume. No influenced pipeline metric → build reporting before scaling nurture tracks. AI personalisation requires stable tracks and measurement — not vice versa.",
            "Intelligence without action and measurement is expensive logging.",
          ),
          s(" Run lens in quarterly programme review with CRM, sales ops, and marketing ops present."),
        ],
      ],
      examples: [
        {
          title: "Scoring deferred for signal fix",
          body: "CMO wanted AI lead scoring vendor implementation. Lens audit: 38% click capture rate, no URL taxonomy. Deferred scoring 90 days; invested in tracking and taxonomy. Post-fix scoring deployment achieved 0.62 AUROC on first calibration versus projected 0.45 on dirty data. Lens saved $40K annual scoring waste on uncallable signals.",
        },
        {
          title: "Enrichment ROI gate",
          body: "Enrichment vendor proposed bulk enrich on 80,000 subscribers. Lens: only 12,000 engaged in 180 days. Pilot enriched engaged cohort only — cost 85% lower, SAL rate identical to bulk proposal. Scaled enrichment on engagement trigger, not list size.",
        },
        {
          title: "Nurture rebuild over personalisation",
          body: "Team proposed AI hyper-personalised nurture for 12 personas. Lens: velocity stalled on 3 core tracks with clean data — content and exit criteria problem, not personalisation gap. Rebuilt 3 tracks with branch logic; conversion up 22% without persona explosion. Personalisation deferred until track velocity optimised.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Sales rejects 58% of MQLs as poor fit. What should marketing fix first?",
      options: [
        "Buy AI scoring software immediately.",
        "Revisit MQL definitions, fit scoring, and intent signal capture with sales — alignment before automation.",
        "Send more nurture emails to increase volume.",
        "Lower the MQL score threshold to help sales hit quota.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Alignment and signal quality precede scoring investment. Re-read sections 5.1 and 5.6.",
      wrongFeedback:
        "Fix definitions and fit scoring with sales before adding AI. Re-read sections 5.1 and 5.6.",
    },
    {
      q: "All email clicks currently score +5 regardless of destination. What improves scoring most?",
      options: [
        "Double the points for all clicks.",
        "Implement URL intent taxonomy — classify pricing, evaluation, and awareness clicks with different weights.",
        "Remove engagement scoring entirely.",
        "Score opens higher than clicks.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Intent taxonomy differentiates buying signals. Re-read sections 5.2 and 5.4.",
      wrongFeedback:
        "Not all clicks signal equal intent — classify URLs first. Re-read sections 5.2 and 5.4.",
    },
    {
      kind: "order",
      q: "Order the CRM intelligence workflow from first step to last.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Capture intent signals from email and web with taxonomy",
        "Score, enrich, and route leads with SLA discipline",
        "Map nurture tracks to CRM stages with branch logic",
        "Report pipeline influence and refine the scoring model",
      ],
      correctFeedback:
        "Right. Signals → score/route → nurture → report and refine. Re-read sections 5.1–5.8.",
      wrongFeedback:
        "Start with signal capture. Reporting closes the loop. Re-read sections 5.1–5.8.",
    },
    {
      kind: "categorize",
      q: "Sort each practice into the correct CRM intelligence layer.",
      categories: ["Scoring & signals", "Enrichment & routing", "Nurture & alignment", "Reporting & governance"],
      items: [
        { text: "Engagement score decay every 30 days.", category: 0 },
        { text: "Tier 1 pricing click triggers 30-minute SDR SLA.", category: 1 },
        { text: "Branch to evaluation track on pricing email click.", category: 2 },
        { text: "Quarterly scoring model AUROC validation.", category: 3 },
        { text: "Mandatory lead rejection reason codes.", category: 2 },
        { text: "Enrich on MQL threshold, not bulk list.", category: 1 },
      ],
      correctFeedback:
        "Right. Scoring = signals and decay. Routing = enrichment and SLAs. Nurture = tracks and alignment. Reporting = validation and attribution. Re-read sections 5.1–5.7.",
      wrongFeedback:
        "Match each practice to scoring, routing, nurture, or reporting. Re-read sections 5.1–5.7.",
    },
    {
      q: "A hot lead sits unassigned for 36 hours after hitting Tier A score. What does the lens prioritise?",
      options: [
        "Add more nurture emails for similar leads.",
        "Fix routing SLAs, escalation workflows, and sales capacity before raising MQL volume.",
        "Increase the MQL score threshold to reduce volume.",
        "Buy enrichment data for all subscribers.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Intelligence without follow-up is waste. Re-read sections 5.4 and 5.8.",
      wrongFeedback:
        "SLA and routing capacity must work before scaling volume. Re-read sections 5.4 and 5.8.",
    },
    {
      q: "Email click capture rate in CRM is 41%. What should precede AI scoring deployment?",
      options: [
        "Deploy scoring immediately — AI will compensate.",
        "Fix tracking, URL taxonomy, and identity resolution until capture exceeds 85%.",
        "Stop all email campaigns until CRM is perfect.",
        "Score only on opens instead of clicks.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Signal completeness gate precedes scoring investment. Re-read sections 5.2 and 5.8.",
      wrongFeedback:
        "Incomplete signals make scoring unreliable. Fix capture first. Re-read sections 5.2 and 5.8.",
    },
  ],
});
