import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter07MktPartnerChannelMarketingWithAi = buildChapter({
  slug: "mkt-partner-channel-marketing-with-ai",
  number: 7,
  shortTitle: "Partner & Channel Marketing with AI",
  title: "Partner & Channel Marketing with AI — Ecosystem Strategy, Co-Marketing Execution, and Pipeline Attribution Across Partner Motions",
  readingMinutes: 24,
  summary:
    "Partner and channel marketing extends GTM reach through resellers, ISVs, alliances, and co-sell motions — but only when partners are recruited strategically, enabled with co-branded assets, and measured on attributed pipeline. AI accelerates partner research, enablement kit drafting, joint campaign personalisation, and attribution modelling, yet programme success depends on marketer-owned architecture: partner tier strategy, enablement standards, co-marketing governance, conflict rules with direct sales, and ROI by partner type. Teams that sign partners without enablement see zero pipeline; teams that treat partners as a governed ecosystem compound indirect revenue.",
  keyTakeaway:
    "Partner marketing is an ecosystem programme, not logo collection. The sequence that wins: identify and tier partners by ICP fit → build enablement kits and co-branded assets → execute joint campaigns with attribution → govern co-sell and conflict → measure ROI by partner → run a decision lens before scaling co-marketing spend. AI accelerates research and production; marketers own fit, governance, and attribution.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "7.1",
      title: "Partner Ecosystem Strategy",
      subtitle: "Partner types, tier model, and ICP alignment — architecture before recruitment",
      take: "Partner ecosystem strategy defines partner types: referral, reseller, technology integration, services implementation, and strategic alliance — each with tier criteria (certified, gold, platinum), revenue expectations, and marketing support levels. AI maps market landscape: who serves your ICP, integration density, and competitive overlap. Marketers align partner strategy to GTM gaps — geographic coverage, vertical depth, or product attach — not vanity partner counts.",
      why: "Unstrategic partner signing creates channel conflict and enablement debt. Tier architecture focuses marketing investment on partners who can move pipeline in target segments.",
      paragraphs: [
        [
          s("Start from GTM gap, not partner inbound volume. "),
          x(
            "Gap examples: no coverage in DACH mid-market, weak healthcare vertical, missing ERP integration for enterprise deals. AI research lists partners with customer overlap and integration footprint — scored against gap priority.",
            "Signing partners who sell to wrong ICP creates conflict without revenue.",
          ),
          s(" Partner strategy doc updated annually with sales and alliances leadership."),
        ],
        [
          s("Tier model links benefits to performance. "),
          x(
            "Tier 1: MDF, co-marketing, dedicated partner manager, early product access. Tier 2: enablement kit, listing, event presence. Tier 3: self-serve portal, referral registration. AI tracks tier KPIs — deals registered, certifications, campaign participation.",
            "Equal treatment for all partners dilutes investment on performers.",
          ),
          s(" Tier downgrade policy documented — performance review semi-annually."),
        ],
        [
          s("Partner ICP fit scoring before contract. "),
          x(
            "Score: customer segment overlap, deal size alignment, technical certification capacity, competitive exclusivity constraints. AI aggregates from partner website, case studies, and job postings — human validates in recruitment call.",
            "Logo partners without ICP fit consume MDF without pipeline return.",
          ),
          s(" Minimum fit score gate for co-marketing budget — exceptions require VP approval."),
        ],
      ],
      examples: [
        {
          title: "Gap-led recruitment — DACH coverage",
          body: "Direct sales covered UK only; DACH pipeline leakage to local competitor. AI landscape identified 12 regional SI partners; scored 3 as tier 1 fit. Recruited 2 with co-sell agreement. Partner-sourced pipeline in DACH reached $2.1M ARR in 18 months — 34% of regional new business.",
        },
        {
          title: "Tier downgrade — MDF reallocation",
          body: "Partner consumed $80K MDF with zero registered deals in 4 quarters. Tier downgrade triggered; MDF reallocated to top performer who co-hosted webinar series. Underperformer exited programme; top partner pipeline doubled — lesson on tier discipline.",
        },
        {
          title: "ICP misfit rejection",
          body: "Inbound partner served SMB retail — company ICP enterprise manufacturing. Fit score 22/100; declined exclusive discussion. Avoided channel conflict when enterprise team expanded into adjacent accounts. Recruitment rubric now mandatory gate.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-dg-ch7-partner-ecosystem",
      type: "flow",
      title: "Partner Ecosystem Workflow",
      caption:
        "Identify partners by ICP gap → enable with co-branded kits → co-market joint campaigns → track attributed pipeline → optimise partner mix and tier investment.",
    }),
    buildSection({
      number: "7.2",
      title: "Partner Identification & Recruitment",
      subtitle: "AI research, outreach personalisation, and mutual value proposition — quality partners only",
      take: "Partner recruitment combines AI landscape research with personalised outreach: mutual customer value, integration story, and co-sell economics. AI drafts partner-specific value props from their case studies and your ICP overlap — alliances team validates relationship fit. Recruitment pipeline tracked like sales: target list, outreach, discovery, contract, onboarding kickoff.",
      why: "Generic partner recruitment emails convert poorly and attract low-commitment signups. Research-backed outreach signals serious programme — attracts partners who invest reciprocally.",
      paragraphs: [
        [
          s("Build target list from data, not conference badge scanning. "),
          x(
            "Sources: integration marketplace traffic, mutual customer mentions, analyst ecosystem maps, competitor partner pages. AI enriches with firmographics and overlap score — alliances prioritises top quartile.",
            "Conference volume without scoring fills CRM with dead partner opps.",
          ),
          s(" Target list refreshed quarterly — market M&A shifts partner landscape fast."),
        ],
        [
          s("Mutual value proposition in first outreach. "),
          x(
            "Template: 'Your customers in [vertical] face [pain]; our integration reduces [outcome]; joint customers include [proof].' AI personalises from partner site crawl — human edits for tone and accuracy.",
            " 'Join our partner programme' without mutual value reads as vendor vanity.",
          ),
          s(" Track recruitment conversion by outreach variant — iterate messaging."),
        ],
        [
          s("Legal and economics clarity before marketing promises. "),
          x(
            "Deal registration rules, margin or referral fee, MDF eligibility, brand usage rights — documented before co-marketing commitments. Marketing waits on executed agreement for tier benefits.",
            "Premature MDF promises before contract create partner distrust and legal rework.",
          ),
          s(" Recruitment SLA: kickoff enablement within 30 days of signature — momentum matters."),
        ],
      ],
      examples: [
        {
          title: "AI research list — ISV recruitment",
          body: "Product needed CRM integration for enterprise deals. AI ranked 40 ISVs by install base overlap and API maturity; top 8 outreach personalised with mutual customer names from public case studies. 3 signed integration partners in 5 months; integration attach rate in enterprise opps up 28%.",
        },
        {
          title: "Outreach A/B — response rate",
          body: "Generic partner invite: 4% response. Mutual-value AI-personalised: 19% response. Alliances adopted personalisation standard; recruitment pipeline 2.5x in one quarter.",
        },
        {
          title: "Contract gate — MDF save",
          body: "Partner requested co-branded campaign before agreement signed. Marketing held MDF per policy; partner signed within 2 weeks. Avoided unregistered deal dispute later when terms clarified registration window.",
        },
      ],
    }),
    buildSection({
      number: "7.3",
      title: "Enablement Kits & Co-Branded Assets",
      subtitle: "Partner-ready content, brand governance, and localisation — scale without brand chaos",
      take: "Partner enablement kits bundle: co-branded pitch deck, solution brief, demo script, email templates, social assets, and battle cards with partner-specific proof. AI generates first drafts from master messaging house with co-brand placeholders — partner marketing governs brand compliance, claim accuracy, and localisation. Self-serve portal with tier-gated downloads reduces one-off requests.",
      why: "Partners sell with your materials or invent wrong ones. Ungoverned co-branding damages brand; missing kits mean partners do not sell at all.",
      paragraphs: [
        [
          s("Master assets with controlled co-brand zones. "),
          x(
            "Template defines: partner logo placement, approved claims, optional local proof section, mandatory legal footer. AI fills partner name and vertical variants — brand team approves template once, not every instance.",
            "One-off co-brand decks per partner do not scale — template architecture first.",
          ),
          s(" Brand violation reporting process — partners fix or lose tier benefits."),
        ],
        [
          s("Localisation for regional partners. "),
          x(
            "AI translates and culturally adapts kits for tier 1 regional partners — human native review for regulated claims. Glossary locks product names and trademark usage.",
            "Machine translation alone fails compliance in EU and APAC markets.",
          ),
          s(" Localisation backlog prioritised by partner pipeline contribution."),
        ],
        [
          s("Certification tied to kit usage. "),
          x(
            "Partners complete product certification plus enablement quiz before MDF access. AI quiz from kit content — alliances tracks completion. Certified partners close 2–3x non-certified in benchmark programmes.",
            "Kits without certification requirement sit unused in portal.",
          ),
          s(" Quarterly kit refresh aligned to product release — stale kits harm win rates."),
        ],
      ],
      examples: [
        {
          title: "Template scale — 50 partners",
          body: "Previously custom deck per partner — 3-week turnaround. Co-brand template plus AI variant generation cut to 2 days with brand pre-approval. Partner-sourced opp registration up 40% in quarter following kit launch.",
        },
        {
          title: "Brand violation enforcement",
          body: "Partner altered ROI claim on co-branded PDF. Monitoring caught via partner portal watermark audit; warning issued, corrected within 48 hours. Repeat would trigger tier downgrade — policy communicated at onboarding.",
        },
        {
          title: "Certification gate",
          body: "MDF unlocked only after certification quiz pass rate 85%+. Certified partner win rate on registered deals 2.4x uncertified. Investment shifted from custom decks to certification programme.",
        },
      ],
    }),
    buildSection({
      number: "7.4",
      title: "Joint Campaign Planning & Execution",
      subtitle: "Co-marketing calendars, MDF governance, and shared KPIs — campaigns that register pipeline",
      take: "Joint campaigns require shared brief: audience, offer, channels, budget split, registration rules, and success metrics (registered opps, influenced pipeline, not just leads). AI drafts campaign plans from partner vertical and past co-marketing performance — partner marketing approves MDF spend against tier caps. Execution includes lead share protocol, SLA for follow-up, and post-campaign reconciliation.",
      why: "Co-marketing without registration discipline creates channel conflict and unattributed pipeline. MDF without KPIs is partner subsidy, not investment.",
      paragraphs: [
        [
          s("Campaign brief mutual sign-off before spend. "),
          x(
            "Fields: ICP segment, offer, landing page owner, UTMs, registration deadline, lead routing. Both parties sign in partner portal — AI checks completeness before MDF release.",
            "Verbal campaign plans produce disputed lead ownership — brief is contract.",
          ),
          s(" Standard UTM schema for all partner campaigns — attribution non-negotiable."),
        ],
        [
          s("MDF governance with tier caps and ROI review. "),
          x(
            "Tier 1: $X quarterly MDF with 3:1 pipeline influence target. AI tracks spend vs registered pipeline; underperformers lose next tranche. Finance reconciles MDF quarterly.",
            "Open MDF taps attract partners who optimise for events, not deals.",
          ),
          s(" MDF application requires campaign brief plus historical partner ROI."),
        ],
        [
          s("Lead follow-up SLA in partner agreements. "),
          x(
            "Partner leads to partner within 24 hours; vendor leads to vendor. Shared leads tagged in CRM with partner ID. AI alerts on SLA breach — alliances escalates.",
            "Stale partner leads convert poorly and blame vendor marketing quality.",
          ),
          s(" Post-campaign retro within 14 days — learning feeds next co-marketing cycle."),
        ],
      ],
      examples: [
        {
          title: "Webinar co-mark — registered pipeline",
          body: "Joint webinar with tier 1 SI: 840 registrants, 312 partner-sourced leads registered in PRM. Follow-up SLA met 94%; $680K pipeline registered within 60 days. MDF $25K — 27:1 influence ratio justified renewal.",
        },
        {
          title: "MDF cap enforcement",
          body: "Partner requested second event MDF without first campaign retro. Held tranche pending retro; retro showed low ICP attendance. Revised campaign to ABM account list — second campaign pipeline 3x first.",
        },
        {
          title: "UTM attribution fix",
          body: "Partner campaigns used inconsistent UTMs — 40% leads unattributed. Standard schema plus portal validation before publish; attribution recovery to 96%. Partner tier reviews now data-backed.",
        },
      ],
    }),
    buildSection({
      number: "7.5",
      title: "Pipeline Attribution & Partner Analytics",
      subtitle: "PRM integration, influence models, and partner scorecards — prove ecosystem ROI",
      take: "Partner attribution connects PRM (partner relationship management), CRM deal registration, campaign UTMs, and multi-touch influence models. AI reconciles conflicting claims and flags duplicate registration — marketers define rules: first touch, sourced vs influenced, registration window. Partner scorecards publish quarterly: pipeline, win rate, certification, campaign participation, MDF ROI.",
      why: "Without attribution, partner programmes become relationship theatre — leadership cuts MDF when ROI unprovable. Clear rules prevent sales-partner disputes.",
      paragraphs: [
        [
          s("Define sourced vs influenced upfront. "),
          x(
            "Sourced: partner registered deal first, validated within window. Influenced: partner touch in opp journey without sole source. AI tags CRM activities with partner ID — finance accepts model documented with sales.",
            "Ambiguous rules create quarter-end registration races and distrust.",
          ),
          s(" Attribution model reviewed annually with sales ops and finance."),
        ],
        [
          s("PRM-CRM integration is infrastructure, not nice-to-have. "),
          x(
            "Deal registration flows to CRM opp with partner field locked. Campaign leads auto-route with partner stamp. AI dedupes registration conflicts — alliances adjudicates exceptions.",
            "Spreadsheet registration dies at scale — integrate early.",
          ),
          s(" Partner portal dashboard shows partner their pipeline — transparency drives behaviour."),
        ],
        [
          s("Scorecards drive tier and MDF decisions. "),
          x(
            "Metrics: registered pipeline, win rate, avg deal size, time to register, MDF ROI, certification status. AI generates scorecard drafts — alliances presents in QBR.",
            "Scorecards without tier consequences are reports nobody acts on.",
          ),
          s(" Top partner case studies internal — replicate playbooks with mid-tier partners."),
        ],
      ],
      examples: [
        {
          title: "Influence model — board proof",
          body: "Multi-touch model showed partner-influenced pipeline 42% of enterprise new ARR — direct-only view showed 11%. Board approved MDF doubling. Model documented with finance sign-off.",
        },
        {
          title: "Registration dedupe",
          body: "AI flagged 23 duplicate registrations in quarter — vendor and partner both claimed same opp. Rules clarified: first valid registration wins; 48-hour adjudication SLA. Disputes down 80% next quarter.",
        },
        {
          title: "Scorecard tier move",
          body: "Mid-tier partner scorecard top 5% — auto-promoted tier 1 with increased MDF. Bottom quartile partners received improvement plan or exit. Programme NRR from partner channel up 19%.",
        },
      ],
    }),
    buildSection({
      number: "7.6",
      title: "Channel Conflict & Co-Sell Governance",
      subtitle: "Deal registration, rules of engagement, and direct-partner balance — protect customer experience",
      take: "Co-sell governance defines rules of engagement: account assignment, deal registration windows, direct vs partner pursuit, and escalation paths. AI monitors CRM for overlap flags — same account touched by direct AE and partner. Marketers communicate rules in enablement; alliances enforces. Conflict resolution SLA prevents deals dying in internal dispute.",
      why: "Channel conflict destroys partner trust faster than no programme. Customers caught between direct and partner reps churn or stall — revenue loss exceeds conflict deal value.",
      paragraphs: [
        [
          s("Document rules of engagement in partner agreement and sales playbook. "),
          x(
            "Examples: named account lists exclusive to direct; geo partners own territory; deal registration 90-day protection window. AI scans opp creation against rules — flags violations for review.",
            "Verbal rules fail when quarter-end pressure hits — document and train.",
          ),
          s(" Sales kickoff includes partner rules module — mandatory for AEs."),
        ],
        [
          s("Co-sell motion clarity — who leads, who supports. "),
          x(
            "Partner-led: partner owns relationship, vendor SE support. Vendor-led: AE owns, partner implements. Joint: shared account plan in CRM. AI drafts joint account plan template from opp data.",
            "Unclear lead role duplicates effort or leaves gaps — customer confusion.",
          ),
          s(" Co-sell plans required for deals above threshold — executive sponsor optional."),
        ],
        [
          s("Escalation path with executive timeout. "),
          x(
            "Level 1: partner manager + AE manager within 48 hours. Level 2: VP alliances + sales VP within 5 days. Unresolved: pre-agreed split or customer-choice principle.",
            "Conflict tickets open 60+ days lose deals — SLA with teeth.",
          ),
          s(" Quarterly conflict retro — pattern fixes in rules, not only case-by-case."),
        ],
      ],
      examples: [
        {
          title: "Registration window save",
          body: "Partner registered deal day 85; direct AE created duplicate opp day 90. Registration window 90 days upheld — partner sourced credit preserved. AE trained on registration check; duplicate creation down 70%.",
        },
        {
          title: "Named account clarity",
          body: "Fortune 500 named account list published to partners — direct exclusive. Partner pursued subsidiary not on list — allowed under rules. Avoided false conflict; subsidiary deal $400K partner-sourced.",
        },
        {
          title: "Escalation SLA",
          body: "Conflict avg resolution 34 days — deals stalling. Implemented 5-day VP timeout; avg resolution 6 days. Partner NPS on programme up 22 points.",
        },
      ],
    }),
    buildSection({
      number: "7.7",
      title: "Partner Community & Tier Management",
      subtitle: "Portals, advisory councils, and lifecycle marketing — retain and grow partner commitment",
      take: "Partner community programmes: portal with assets and training, quarterly business reviews, partner advisory council for product feedback, and lifecycle emails by tier. AI personalises portal content and identifies partners at churn risk (certification lapse, registration drop). Marketers treat partners as audience segment — nurture to certification and campaign participation.",
      why: "Partner recruitment without retention leaks ecosystem investment. Engaged certified partners compound; inactive partners create support burden and conflict risk.",
      paragraphs: [
        [
          s("Portal as daily utility, not file dump. "),
          x(
            "Features: deal reg one-click, MDF application, asset generator, training paths, leaderboard. AI recommends next action based on tier and performance — 'complete certification to unlock webinar MDF.'",
            "Static portal unused — dynamic personalisation drives login frequency.",
          ),
          s(" Login and asset download metrics in partner scorecard."),
        ],
        [
          s("Partner advisory council for strategic partners. "),
          x(
            "6–10 tier 1 partners quarterly: roadmap preview, co-marketing feedback, conflict themes. AI synthesises council notes into product and marketing backlog.",
            "Council without action items wastes partner goodwill — close loop publicly.",
          ),
          s(" Council members get early campaign beta — reciprocity for time."),
        ],
        [
          s("Lifecycle nurture by partner maturity. "),
          x(
            "Onboarding series: certification, first registration, first MDF. Growth: co-marketing playbooks, top partner case studies. At-risk: re-engagement with simplified offer. AI triggers from PRM behaviour.",
            "One-size partner newsletter ignored — segment like customer marketing.",
          ),
          s(" Partner marketing owns lifecycle map — alliances owns relationship escalation."),
        ],
      ],
      examples: [
        {
          title: "Portal personalisation — registration lift",
          body: "AI 'next best action' on portal homepage drove 38% more certification completions in 90 days. Registered deals from newly certified partners up $1.2M pipeline quarter.",
        },
        {
          title: "Advisory council — product influence",
          body: "Council flagged integration API gap blocking partner deals. Product prioritised fix; partner win rate on integration-dependent opps up 15 points. Council minutes published to all tier 1 — trust reinforced.",
        },
        {
          title: "At-risk re-engagement",
          body: "AI flagged 14 partners with registration drop 50%+ QoQ. Targeted re-engagement campaign with simplified MDF offer; 9 reactivated, 4 exited cleanly. Programme health improved vs silent churn.",
        },
      ],
    }),
    buildSection({
      number: "7.8",
      title: "The Marketer Decision Lens — Partner Marketing Investment",
      subtitle: "When to recruit, scale MDF, or expand co-marketing — prioritising ecosystem ROI",
      take: "Before scaling partner recruitment, MDF, or AI co-brand production, run four checks: (1) is ecosystem strategy tied to GTM gaps and tier model — architecture before logos? (2) are enablement kits and brand governance live — partners can sell accurately? (3) is PRM-CRM attribution with conflict rules operational — ROI measurable? (4) do scorecards drive tier decisions — performance governs investment? Recruit against gaps first. Scale MDF when attribution proves influence. Expand AI co-brand when template governance holds.",
      why: "AI makes partner content fast — tempting teams to co-brand before fit and attribution exist. This lens prioritises ecosystem quality over partner count.",
      paragraphs: [
        [
          s("Check one: strategy and fit gates. "),
          x(
            "No tier model or ICP fit score → strategy workshop before recruitment blitz. Partners signed without gap alignment → pause co-marketing until scorecard baseline.",
            "Logo count without fit creates conflict and MDF waste.",
          ),
          s(" Gap analysis gate precedes major conference partner sponsorship spend."),
        ],
        [
          s("Check two: enablement and brand readiness. "),
          x(
            "No co-brand template → build kit before MDF campaigns. Brand violations uncorrected → governance before AI variant scale.",
            "Ungoverned co-brand scales embarrassment.",
          ),
          s(" Certification requirement before tier 1 MDF — non-negotiable lens item."),
        ],
        [
          s("Checks three and four: attribution and performance. "),
          x(
            "No PRM-CRM integration → infrastructure before MDF doubling. Scorecards not linked to tier → analytics fix before headcount. Conflict resolution SLA over 14 days → governance before new geo expansion.",
            "Attribution and tier consequences prerequisites for scale.",
          ),
          s(" Run lens in semi-annual partner programme review with alliances and finance."),
        ],
      ],
      examples: [
        {
          title: "Recruitment blitz deferred",
          body: "Sales wanted 100 partners signed. Lens: no fit scoring, attribution 60% accurate. Deferred blitz; implemented PRM integration and rubric. Next wave 40 partners with 2.3x pipeline per partner vs prior cohort.",
        },
        {
          title: "MDF scale gated",
          body: "Requested 2x MDF budget. Lens: only 3 partners met ROI target. Scaled MDF for top quartile only; mid-tier got enablement investment first. Programme ROI improved 40% vs prior blanket increase.",
        },
        {
          title: "AI co-brand pilot",
          body: "AI co-brand tool proposed for all partners. Lens: brand template not final. Pilot with 5 tier 1 partners; template refined from violations. Global rollout after 95% compliance rate.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Partner programme has many logos but little pipeline. What should marketing fix first?",
      options: [
        "Sign more partners at conferences.",
        "Align ecosystem strategy to GTM gaps, tier partners by ICP fit, and build enablement with attribution.",
        "Increase MDF for all partners equally.",
        "Stop working with partners entirely.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Strategy, fit, enablement, and attribution precede volume. Re-read sections 7.1 and 7.5.",
      wrongFeedback:
        "Fix strategy and attribution before signing more partners. Re-read sections 7.1 and 7.5.",
    },
    {
      q: "Direct AE and partner both claim the same opportunity. What prevents repeat conflict?",
      options: [
        "Let whoever emails customer first win.",
        "Documented deal registration rules, PRM-CRM integration, and escalation SLAs.",
        "Avoid all partner sales in enterprise.",
        "Hide partner leads from direct sales.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Governance and registration rules protect relationships. Re-read sections 7.5 and 7.6.",
      wrongFeedback:
        "Rules of engagement and PRM integration resolve conflict. Re-read sections 7.5 and 7.6.",
    },
    {
      kind: "order",
      q: "Order the partner ecosystem workflow from first step to last.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Identify and tier partners by ICP gap fit",
        "Enable with co-branded kits and certification",
        "Execute joint campaigns with MDF governance",
        "Track pipeline attribution and optimise partner mix",
      ],
      correctFeedback:
        "Right. Identify → enable → co-market → measure and optimise. Re-read sections 7.1–7.8.",
      wrongFeedback:
        "Start with strategic identification; attribution closes the loop. Re-read sections 7.1–7.8.",
    },
    {
      kind: "categorize",
      q: "Sort each practice into the correct partner marketing layer.",
      categories: ["Strategy & recruitment", "Enablement & campaigns", "Attribution & governance", "Community & lens"],
      items: [
        { text: "ICP fit score before partner contract.", category: 0 },
        { text: "Co-brand template with brand zones.", category: 1 },
        { text: "Sourced vs influenced attribution model.", category: 2 },
        { text: "MDF gated on certification completion.", category: 1 },
        { text: "Deal registration 90-day window.", category: 2 },
        { text: "Partner scorecards drive tier moves.", category: 3 },
      ],
      correctFeedback:
        "Right. Strategy = fit and tiers. Enablement = kits and MDF. Governance = attribution and rules. Community/lens = scorecards and investment gates. Re-read sections 7.1–7.8.",
      wrongFeedback:
        "Match each practice to strategy, enablement, governance, or community/lens. Re-read sections 7.1–7.8.",
    },
    {
      q: "Partner alters ROI claims on co-branded PDF. What does governance require?",
      options: [
        "Ignore — partner knows their market.",
        "Brand violation process with correction deadline and tier consequences.",
        "Stop all co-branding forever.",
        "Let AI regenerate without review.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Brand governance protects both parties. Re-read sections 7.3 and 7.8.",
      wrongFeedback:
        "Co-brand templates require violation enforcement. Re-read sections 7.3 and 7.8.",
    },
    {
      q: "CMO wants to double MDF budget but attribution is 60% accurate. What precedes spend?",
      options: [
        "Double MDF immediately for partner goodwill.",
        "Fix PRM-CRM attribution and prove ROI with scorecards on current MDF first.",
        "Cut all partner marketing.",
        "Measure event attendance only.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Attribution gate precedes MDF scale. Re-read sections 7.5 and 7.8.",
      wrongFeedback:
        "Prove attribution before scaling MDF. Re-read sections 7.5 and 7.8.",
    },
  ],
});
