import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter08MktCustomerMarketingAdvocacy = buildChapter({
  slug: "mkt-customer-marketing-advocacy",
  number: 8,
  shortTitle: "Customer Marketing & Advocacy",
  title: "Customer Marketing & Advocacy — Lifecycle Architecture, Expansion Triggers, and Reference Programmes That Drive NRR",
  readingMinutes: 24,
  summary:
    "Customer marketing owns revenue after the first sale — onboarding acceleration, health monitoring, expansion triggers, advocacy, and community that compound net revenue retention. AI accelerates health scoring, personalisation at scale, reference matching, and churn signal detection, but NRR impact depends on marketer-owned architecture: lifecycle stage definitions, CS-marketing handoffs, expansion playbooks tied to product usage, reference governance, and measurement on NRR and advocacy-sourced pipeline — not email open rates alone. Teams that treat customer marketing as newsletter duty miss expansion; teams that treat it as a lifecycle programme turn customers into growth engine.",
  keyTakeaway:
    "Customer marketing is a retention and expansion system, not post-sale email. The sequence that wins: map lifecycle stages and handoffs → accelerate time-to-value in onboarding → monitor health and trigger expansion → build advocacy and reference programmes → measure NRR and advocacy influence → run a decision lens before scaling AI personalisation. AI accelerates signals and content; marketers own journey design, reference governance, and revenue attribution.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "8.1",
      title: "Customer Lifecycle Marketing Architecture",
      subtitle: "Stages, handoffs, and segment models — post-sale journey as designed system",
      take: "Lifecycle architecture defines post-sale stages: onboard, adopt, expand, advocate, renew — with entry/exit criteria, owner (CS, marketing, product), and plays per segment. AI maps accounts to stage from product usage, support tickets, and NPS — marketers design plays and content, not just labels. Handoffs documented: when CS leads vs when marketing nurtures at scale vs when AE re-engages for expansion.",
      why: "Undefined lifecycle produces random touches — customers get sales outreach and nurture emails simultaneously, or go dark between onboarding and renewal.",
      paragraphs: [
        [
          s("Stage criteria must be observable in data. "),
          x(
            "Onboard: implementation complete, first value milestone hit. Adopt: weekly active usage threshold. Expand: whitespace identified in account plan. Advocate: NPS promoter plus reference agreement. AI scores accounts against criteria nightly — triggers enter play.",
            "Stages defined by calendar ('90 days = adopt') miss account reality.",
          ),
          s(" Stage definitions co-authored with CS ops and product analytics — single source of truth."),
        ],
        [
          s("Segment by value and potential, not only industry. "),
          x(
            "Matrix: current ARR × expansion potential × health score. High ARR low health = save play. Low ARR high potential = grow play. AI clusters from usage patterns — marketing allocates human-heavy vs automated plays.",
            "Same nurture for $5K and $500K accounts wastes capacity and annoys enterprise.",
          ),
          s(" Segment refresh monthly — usage and health shift faster than annual segmentation."),
        ],
        [
          s("Document marketing-CS-AE boundaries. "),
          x(
            "Marketing: scaled onboarding email, webinar invites, advocacy asks, community. CS: QBR, success plan, escalation. AE: expansion opp creation above threshold. AI routing rules enforce — no marketing promo during open P1 ticket.",
            "Boundary violations erode CS trust — governance in MAP/CRM rules.",
          ),
          s(" RACI published in customer marketing handbook — onboarding for new CS hires."),
        ],
      ],
      examples: [
        {
          title: "Stage trigger — expansion play",
          body: "AI flagged 120 accounts hitting 'adopt' threshold with unused seats 30%+. Entered expansion nurture; CS notified for high-ARR subset. Expansion pipeline $890K in quarter; 34% influenced by marketing-triggered CS notification.",
        },
        {
          title: "Boundary fix — ticket conflict",
          body: "Customers received upsell email during P1 outage — NPS drop. Marketing suppressed campaigns on open severity-1 tickets via support integration. Complaint rate on marketing touches down 90%.",
        },
        {
          title: "Segment matrix — resource allocation",
          body: "High-potential mid-ARR segment previously got generic newsletter. Dedicated lifecycle track with executive webinar series; segment expansion rate 2.1x company average in 6 months.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-dg-ch8-customer-growth",
      type: "flow",
      title: "Customer Growth Lifecycle",
      caption:
        "Onboard for time-to-value → monitor health → trigger expansion → cultivate advocates and referrals → community retention → measure NRR impact.",
    }),
    buildSection({
      number: "8.2",
      title: "Onboarding & Time-to-Value",
      subtitle: "Welcome sequences, milestone messaging, and activation campaigns — first 90 days critical",
      take: "Onboarding marketing accelerates time-to-value: welcome series tied to implementation milestones, feature adoption prompts from usage gaps, and executive sponsor alignment content. AI personalises by role and use case from signup data — marketers define milestones with CS and product. Success metric: time to first value event, not email opens.",
      why: "Slow onboarding drives churn before renewal conversation. Marketing touches in first 90 days set adoption trajectory — generic welcome wastes highest-attention window.",
      paragraphs: [
        [
          s("Milestone-based triggers, not day-based drips. "),
          x(
            "Trigger: integration connected → send advanced workflow guide. Trigger: no login 7 days → CS alert plus re-engagement email. AI monitors product events — marketing supplies content per milestone.",
            "Day 14 email regardless of progress feels irrelevant — event triggers respect journey.",
          ),
          s(" Milestone library maintained with CS and product — updated each release."),
        ],
        [
          s("Role-based paths for multi-user accounts. "),
          x(
            "Admin vs end-user vs executive sponsor get different onboarding tracks. AI assigns from CRM contact role — admin gets setup, user gets quick wins, sponsor gets ROI dashboard intro.",
            "One track for all contacts confuses admins and bores executives.",
          ),
          s(" Path completion tracked — incomplete admin path blocks expansion ask."),
        ],
        [
          s("Celebrate value moments publicly where appropriate. "),
          x(
            "In-app plus email: 'You saved 10 hours this month' with share prompt. AI drafts personalised value recap from usage metrics — customer marketing approves tone.",
            "Value reinforcement reduces churn and seeds advocacy asks.",
          ),
          s(" Value moment content feeds reference recruitment — happy moment is ask moment."),
        ],
      ],
      examples: [
        {
          title: "Milestone trigger — activation lift",
          body: "Shifted from 30-day drip to event-based onboarding. First value milestone time dropped from 22 to 14 days median; 90-day retention up 11 points. CS credited marketing triggers for faster admin completion.",
        },
        {
          title: "Role paths — enterprise account",
          body: "Enterprise account with 40 users on single track — low user activation. Role paths launched; end-user activation 68% vs 31% prior cohort. Expansion conversation included usage proof per role.",
        },
        {
          title: "Value recap — advocacy seed",
          body: "Monthly AI value recap email to sponsors with ROI estimate. Click-through to 'share your story' 8%; produced 12 reference leads in quarter without cold outreach.",
        },
      ],
    }),
    buildSection({
      number: "8.3",
      title: "Expansion & Upsell Triggers",
      subtitle: "Whitespace plays, product-led signals, and AE coordination — grow existing accounts",
      take: "Expansion marketing identifies whitespace: unused modules, seat growth, tier upgrade, cross-sell products. AI combines usage, firmographic growth, and intent signals — triggers marketing nurture or AE task. Plays include ROI calculators, peer benchmark reports, and executive roundtables for account expansion. Marketing never closes expansion — creates qualified interest for AE or CS-led motion.",
      why: "Expansion is highest-margin revenue — yet many teams treat existing customers as solved. Trigger-based expansion marketing feeds pipeline with warm context.",
      paragraphs: [
        [
          s("Usage whitespace is primary signal. "),
          x(
            "Examples: API limit 80% consumed, feature trial started but not purchased, seat utilisation above license. AI scores expansion propensity — marketing assigns play by score band.",
            "Firmographic-only expansion misses product-qualified intent.",
          ),
          s(" Propensity model validated quarterly against closed-won expansion opps."),
        ],
        [
          s("Coordinate with AE on account ownership rules. "),
          x(
            "Marketing creates expansion campaign; AE owns opp above $X ARR. AI creates CRM task with context snippet — not duplicate opp. Rules prevent marketing SQL flooding AE with low-quality upsell.",
            "Uncoordinated expansion touches annoy customers with three reps emailing.",
          ),
          s(" Expansion play catalog in CRM — AE opts in per account."),
        ],
        [
          s("Content proves expansion value with customer peer proof. "),
          x(
            "Benchmark report: 'Customers like you added module X and saw Y outcome.' AI drafts from anonymised cohort data — legal approves aggregates.",
            "Generic upsell without peer proof fails enterprise procurement.",
          ),
          s(" Expansion assets tagged in library for AE self-serve in QBR prep."),
        ],
      ],
      examples: [
        {
          title: "Seat utilisation trigger",
          body: "Accounts at 95% seat utilisation entered 2-email nurture plus AE task. Expansion win rate 3.2x vs cold AE outreach on same segment. $1.4M ARR expanded in 2 quarters from trigger programme.",
        },
        {
          title: "Module trial conversion",
          body: "Analytics module trial users got case study series plus exec roundtable invite. Trial-to-paid conversion 41% vs 18% unnurtured. Play added to lifecycle library for all module trials.",
        },
        {
          title: "AE coordination",
          body: "Marketing expansion campaign without AE rules created duplicate opps — CRM hygiene crisis. Implemented opt-in plus task-only model; AE satisfaction with marketing-sourced expansion up from 2.1 to 4.0 on 5-point scale.",
        },
      ],
    }),
    buildSection({
      number: "8.4",
      title: "Health Scoring & Churn Prevention",
      subtitle: "Risk signals, save plays, and executive outreach — retain before renewals crisis",
      take: "Health scores combine usage trend, support sentiment, NPS, payment behaviour, and champion turnover. AI models churn risk — marketing and CS execute save plays: executive outreach, training offer, business review, product roadmap session. Save plays tiered by ARR and risk score — high-touch for strategic accounts, automated for long tail.",
      why: "Renewal save at 30 days before contract is often too late. Early risk detection and save plays protect NRR — cheaper than new logo acquisition.",
      paragraphs: [
        [
          s("Define health score with CS — marketing executes plays, not owns score. "),
          x(
            "Score inputs documented; weekly refresh. Red account: marketing pauses upsell, CS leads. Yellow: joint save play. Green: expansion eligible. AI explains score drivers for play selection.",
            "Marketing upsell on red accounts accelerates churn — suppression rules mandatory.",
          ),
          s(" Health score visible in MAP and CRM — no conflicting campaigns."),
        ],
        [
          s("Save play library with clear entry criteria. "),
          x(
            "Plays: re-onboarding webinar, executive sponsor call template, discount governance (finance-approved), product office hours. AI drafts personalised save email from account history — CS approves send.",
            "Ad hoc save attempts inconsistent — library enables speed.",
          ),
          s(" Save play outcomes logged — model learns which plays work by segment."),
        ],
        [
          s("Champion loss trigger is high priority. "),
          x(
            "CRM contact marked departed → alert CS and marketing; new champion identification play. AI monitors LinkedIn job changes where integrated.",
            "Champion departure without outreach is leading churn indicator ignored.",
          ),
          s(" New champion welcome track within 7 days of detected change."),
        ],
      ],
      examples: [
        {
          title: "Red account suppression",
          body: "Expansion campaign sent to accounts with health score under 40 — churn spike in cohort. Implemented hard suppress on red; save play only. Churn rate in previously targeted cohort improved 8 points over 2 quarters.",
        },
        {
          title: "Champion loss play",
          body: "Job change integration flagged 45 champion departures in quarter. New champion track within 5 days avg; 38 accounts retained that historical data suggested would churn. NRR impact estimated $620K ARR.",
        },
        {
          title: "Save play analytics",
          body: "Re-onboarding webinar save play recovered 29% of yellow accounts vs 11% control. Play standardised; AI personalises invite from usage gap. Save play ROI justified customer marketing headcount.",
        },
      ],
    }),
    buildSection({
      number: "8.5",
      title: "Advocacy & Reference Programmes",
      subtitle: "Reference tiers, recruitment workflows, and sales matching — proof on demand",
      take: "Advocacy programmes tier customers: reference calls, case studies, speaking, advisory board. AI matches reference requests to opp profile: industry, use case, competitor displaced — searches reference database and promoter NPS. Marketers govern reference fatigue caps, legal agreements, and rewards. Sales requests flow through system — not Slack begging CS.",
      why: "Late-stage deals stall without references — ad hoc reference hunting burns champions and CS relationships. Systematic advocacy supplies proof at speed.",
      paragraphs: [
        [
          s("Reference database with structured attributes. "),
          x(
            "Fields: industry, size, use case, products used, competitor displaced, geo, reference types willing, last reference date. AI auto-tags from CRM and surveys — CS validates.",
            "Spreadsheet references do not scale — database with fatigue rules.",
          ),
          s(" Reference cap per customer per quarter — protect champion goodwill."),
        ],
        [
          s("Recruitment at value moments, not only renewal. "),
          x(
            "Triggers: NPS 9–10, successful QBR, expansion close, support praise. AI prompts CS with advocacy ask script — customer marketing supplies incentive catalogue.",
            "Only asking at renewal feels transactional — value moments convert.",
          ),
          s(" Incentive policy: gift cards, donations, event access — finance pre-approved tiers."),
        ],
        [
          s("Sales reference request SLA and matching. "),
          x(
            "AE submits opp profile in portal; AI suggests 3 matches; reference manager confirms availability within 48 hours. Decline reasons logged — gaps feed case study production.",
            "Slack reference hunts bypass fatigue tracking — portal mandatory.",
          ),
          s(" Reference influence tracked in CRM on won opps — prove advocacy ROI."),
        ],
      ],
      examples: [
        {
          title: "AI reference match — deal save",
          body: "Enterprise opp needed healthcare reference vs competitor Y. AI matched 3 references in 2 hours; call completed day 2. Deal closed $380K — AE cited reference as tipping point. Portal SLA adopted globally.",
        },
        {
          title: "Fatigue cap",
          body: "Top customer asked 6 references in 4 months — champion refused further. Fatigue cap max 2 per quarter enforced; redirected requests to similar profile accounts. Champion retention improved; reference supply diversified.",
        },
        {
          title: "Recruitment at NPS",
          body: "Promoter NPS auto-triggered advocacy invite; 23% joined reference programme in 6 months vs 4% from annual batch ask. Reference-ready database grew 3x.",
        },
      ],
    }),
    buildSection({
      number: "8.6",
      title: "Referral & Community Programmes",
      subtitle: "Customer-led growth, peer networks, and WOM measurement — advocates as channel",
      take: "Referral programmes incentivise customers to introduce peers: structured offer, tracking links, payout governance, and marketing support materials. Community programmes (Slack, Circle, events) deepen engagement and surface advocates organically. AI identifies super-users for referral invite and community moderator recruitment — marketers measure referral-sourced pipeline and community engagement correlation with retention.",
      why: "Referred customers typically retain and expand better — community creates switching cost and product feedback loop. Ungoverned referral creates discount abuse.",
      paragraphs: [
        [
          s("Referral offer clarity and fraud prevention. "),
          x(
            "Rules: eligible accounts, payout timing, duplicate detection, self-referral block. AI flags suspicious patterns — finance approves payout batch.",
            "Vague referral terms create support tickets and partner conflict.",
          ),
          s(" Referral UTMs and CRM opp source mandatory — attribute like partner channel."),
        ],
        [
          s("Community serves customers first, not marketing billboard. "),
          x(
            "Programming: office hours, peer tips, product roadmap teasers, customer awards. AI summarises community themes for product marketing — 80% value / 20% promo rule.",
            "Promo-heavy communities die — utility drives retention.",
          ),
          s(" Community metrics: DAU/MAU, post rate, retention delta members vs non."),
        ],
        [
          s("Super-user identification for advocacy pipeline. "),
          x(
            "AI scores: login frequency, community posts, support praise, NPS. Top decile invited to referral plus advisory paths — personalised, not mass blast.",
            "Mass referral invites to entire base dilute programme and annoy passives.",
          ),
          s(" Super-user programme reviewed quarterly — rotate to fresh advocates."),
        ],
      ],
      examples: [
        {
          title: "Referral pipeline",
          body: "Structured referral programme with $500 credit both sides; AI fraud checks. Referral-sourced pipeline 8% of new ARR in year one — CAC 60% below paid channel. Programme expanded to EMEA with localised terms.",
        },
        {
          title: "Community retention",
          body: "Customer community members showed 94% gross retention vs 87% non-members. Community office hours reduced support tickets 12% on participating accounts. Marketing headcount partially funded by support savings argument.",
        },
        {
          title: "Super-user pipeline",
          body: "AI super-user score identified 200 accounts; personalised referral invite. 45 became active referrers — 60% of referral revenue from this cohort. Rotated invite to next decile to prevent fatigue.",
        },
      ],
    }),
    buildSection({
      number: "8.7",
      title: "Retention Measurement & NRR Impact",
      subtitle: "Cohort analytics, campaign influence, and board-ready customer marketing metrics",
      take: "Customer marketing measurement tracks: gross and net retention by cohort, churn reason correlation with touches, expansion influenced by marketing triggers, reference impact on win rate, referral-sourced ARR. AI narrates dashboards and attributes influence conservatively — marketers define rules with finance. Board metrics: NRR, logo retention, expansion rate, advocacy-sourced pipeline — not email clicks alone.",
      why: "Customer marketing without NRR linkage loses budget to acquisition. Proof of retention and expansion influence secures programme investment.",
      paragraphs: [
        [
          s("Cohort retention vs campaign exposure. "),
          x(
            "Compare accounts receiving lifecycle programme vs holdout or pre-programme cohort. AI controls for segment and ARR band — marketer interprets causation carefully.",
            "Before/after without holdout overclaims impact — use control where ethical.",
          ),
          s(" Annual retention study presented with finance — methodology transparent."),
        ],
        [
          s("Influence attribution on expansion opps. "),
          x(
            "CRM: marketing touch within 90 days of expansion opp create. Weighted influence model for multi-touch. AI tags activity; ops validates.",
            "Last-touch only undervalues nurture — multi-touch for expansion.",
          ),
          s(" influenced expansion ARR in customer marketing OKR — shared with CS."),
        ],
        [
          s("Advocacy ROI in sales terms. "),
          x(
            "Win rate when reference used vs not; cycle time delta; deal size delta. Reference programme cost vs influenced revenue — payback calculation for board.",
            "Reference count vanity metric — tie to won ARR.",
          ),
          s(" Quarterly customer marketing impact deck: retain, expand, advocate pillars."),
        ],
      ],
      examples: [
        {
          title: "Lifecycle cohort proof",
          body: "Accounts in full lifecycle programme: NRR 112% vs 103% partial/no programme over 18 months. Controlled for segment. Board approved customer marketing expansion budget on cohort evidence.",
        },
        {
          title: "Expansion influence",
          body: "Multi-touch model attributed $2.3M expansion ARR to marketing triggers in FY. Finance accepted methodology after 90-day pilot audit. Marketing-CS joint OKR on influenced expansion.",
        },
        {
          title: "Reference win rate",
          body: "Enterprise opps with reference touch won at 48% vs 31% without. Reference programme cost $180K — influenced pipeline $4.1M. ROI justified advisory board recruitment.",
        },
      ],
    }),
    buildSection({
      number: "8.8",
      title: "The Marketer Decision Lens — Customer Marketing Investment",
      subtitle: "When to scale lifecycle automation, advocacy, or AI personalisation — prioritising NRR impact",
      take: "Before scaling lifecycle emails, advocacy incentives, or AI personalisation, run four checks: (1) is lifecycle architecture with CS handoffs documented — journey before automation? (2) is health score governing suppress and save rules — no upsell on red accounts? (3) is reference programme with fatigue caps and sales SLA operational — proof supply before demand? (4) is NRR and influence attribution measured — impact before budget scale? Build architecture and measurement first. Scale AI when governance and CS alignment hold.",
      why: "AI makes customer communication cheap — tempting teams to nurture and upsell without health governance. This lens prioritises retention quality over touch volume.",
      paragraphs: [
        [
          s("Check one: lifecycle and handoff readiness. "),
          x(
            "No stage criteria in data → define with CS before MAP automation scale. CS-marketing conflicts unresolved → RACI workshop before expansion campaigns.",
            "Automation without architecture amplifies chaos.",
          ),
          s(" Lifecycle workshop gate precedes MAP tier upgrade or headcount."),
        ],
        [
          s("Check two: health and save governance. "),
          x(
            "Upsell sent to red accounts in last quarter → hard suppress before any expansion scale. No save play library → CS co-build before churn marketing.",
            "Revenue recovery beats premature upsell.",
          ),
          s(" Health suppress rules tested quarterly — integration breaks silently."),
        ],
        [
          s("Checks three and four: advocacy and measurement. "),
          x(
            "Reference requests via Slack only → portal and SLA before sales expansion. No NRR cohort view → analytics before advocacy incentive increase. Referral programme without fraud checks → governance before promotion.",
            "Advocacy and metrics prerequisites for scale.",
          ),
          s(" Run lens in annual customer marketing planning with CS, finance, and sales ops."),
        ],
      ],
      examples: [
        {
          title: "Automation scale deferred",
          body: "MAP vendor proposed 50 new lifecycle emails. Lens: no health suppress, CS conflict on boundaries. Deferred; implemented suppress and RACI. Pilot 8 emails with measurement — NRR-positive cohort before full scale.",
        },
        {
          title: "Advocacy incentive gated",
          body: "Requested 2x referral rewards. Lens: attribution manual, fraud checks weak. Built referral CRM integration and AI fraud rules; then scaled rewards. Referral ARR doubled without payout disputes.",
        },
        {
          title: "AI personalisation pilot",
          body: "AI personalisation for all customers. Lens: role data 60% complete. Enriched CRM roles first; pilot on segment with 95% role coverage. Personalisation lift proven before global send.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Customer marketing sends upsell emails while accounts have open P1 tickets. What failed?",
      options: [
        "Email subject lines need A/B testing.",
        "Lifecycle architecture with health suppress rules and CS-marketing boundaries.",
        "More frequent emails.",
        "Remove CS from customer journey.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Handoffs and health governance protect experience. Re-read sections 8.1 and 8.4.",
      wrongFeedback:
        "Fix lifecycle boundaries and health suppress before scaling touches. Re-read sections 8.1 and 8.4.",
    },
    {
      q: "Sales requests references via Slack with no tracking. What should marketing implement first?",
      options: [
        "Ask CS for favours case by case.",
        "Reference database with AI matching, fatigue caps, and request SLA portal.",
        "Pay all customers to reference.",
        "Stop providing references.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Systematic advocacy supplies proof without burning champions. Re-read section 8.5.",
      wrongFeedback:
        "Build reference programme infrastructure before scaling sales demands. Re-read section 8.5.",
    },
    {
      kind: "order",
      q: "Order the customer growth lifecycle from first step to last.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Onboard for time-to-value milestones",
        "Monitor health and prevent churn",
        "Trigger expansion and cultivate advocates",
        "Measure NRR and optimise lifecycle",
      ],
      correctFeedback:
        "Right. Onboard → health → expand/advocate → measure. Re-read sections 8.1–8.8.",
      wrongFeedback:
        "Start with onboarding; measurement closes the loop. Re-read sections 8.1–8.8.",
    },
    {
      kind: "categorize",
      q: "Sort each practice into the correct customer marketing layer.",
      categories: ["Lifecycle & onboarding", "Health & expansion", "Advocacy & community", "Measurement & lens"],
      items: [
        { text: "Milestone-based onboarding triggers.", category: 0 },
        { text: "Hard suppress upsell on red health score.", category: 1 },
        { text: "Reference fatigue cap per quarter.", category: 2 },
        { text: "NRR cohort vs programme exposure.", category: 3 },
        { text: "Role-based onboarding paths.", category: 0 },
        { text: "Seat utilisation expansion trigger.", category: 1 },
      ],
      correctFeedback:
        "Right. Lifecycle = onboard. Health/expansion = scores and triggers. Advocacy = references and community. Measurement = NRR and lens. Re-read sections 8.1–8.8.",
      wrongFeedback:
        "Match each practice to lifecycle, health/expansion, advocacy, or measurement. Re-read sections 8.1–8.8.",
    },
    {
      q: "Champion leaves customer account. What is the priority play?",
      options: [
        "Immediate expansion offer to remaining users.",
        "Champion loss alert with new champion identification within 7 days.",
        "Ignore — CS will notice eventually.",
        "Send generic newsletter.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Champion loss is high-priority churn signal. Re-read sections 8.4 and 8.5.",
      wrongFeedback:
        "Champion departure triggers save and identification plays. Re-read sections 8.4 and 8.5.",
    },
    {
      q: "CMO wants to scale lifecycle emails but NRR impact unmeasured. What precedes scale?",
      options: [
        "Send more emails immediately.",
        "Cohort retention measurement and influence attribution with CS alignment.",
        "Cut customer marketing budget.",
        "Measure opens only.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Measurement gate precedes automation scale. Re-read sections 8.7 and 8.8.",
      wrongFeedback:
        "Prove NRR impact before scaling lifecycle automation. Re-read sections 8.7 and 8.8.",
    },
  ],
});
