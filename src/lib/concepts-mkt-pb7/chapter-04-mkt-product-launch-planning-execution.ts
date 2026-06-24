import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter04MktProductLaunchPlanningExecution = buildChapter({
  slug: "mkt-product-launch-planning-execution",
  number: 4,
  shortTitle: "Product Launch Planning & Execution",
  title: "Product Launch Planning & Execution",
  readingMinutes: 24,
  summary:
    "Product launch is coordinated execution across messaging, content, sales enablement, PR, community, and live operations — not a single announcement email. AI compresses workback planning, messaging house drafting, content sprints, enablement materials, media outreach, influencer briefing, and launch-week monitoring. This chapter maps launch planning, positioning documents, content production, sales enablement, PR strategy, community activation, launch-week ops, and the scope decision between minimum and maximum viable launch investment.",
  keyTakeaway:
    "Launch success is operational discipline: clear owners, workback schedule, messaging alignment before content production, enablement before sales promises, and live monitoring with human judgment on responses. AI accelerates production and summarisation — marketers own scope, quality gates, and cross-functional coordination.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "4.1",
      title: "Launch Planning with AI",
      subtitle: "Building the launch plan, the workback schedule, and the owner assignment — the project management layer of a marketing launch",
      take: "Launch planning translates GTM strategy into dated deliverables: messaging lock, assets, enablement, PR embargo, sales training, support docs, and launch-day runbook. AI generates workback schedules from template libraries, drafts RACI matrices, and flags dependency conflicts — but dates and owners are human commitments. Tools: Asana, Monday, Notion, or Salesforce campaigns for milestone tracking. Plans without named owners and escalation paths fail when product slips or legal delays.",
      why: "Launch chaos comes from missing dependencies — sales trained on old messaging while blog ships new positioning. Planning layer prevents coordination debt.",
      paragraphs: [
        [
          s("Start workback from immovable launch date or external event. "),
          x(
            "Embargo, conference keynote, fiscal quarter — anchor date and reverse schedule with buffer weeks for legal and product slip.",
            "AI suggests standard lead times: messaging -6 weeks, enablement -3 weeks, PR -2 weeks embargo.",
          ),
          s(" Build slip scenarios — what drops if date holds but feature delays?"),
        ],
        [
          s("Assign single-threaded owners per workstream. "),
          x(
            "Messaging, content, demand gen, sales enablement, PR, support, analytics — one DRI each plus executive sponsor for conflict resolution.",
            "Shared Notion launch hub with AI weekly status summary from task tool exports.",
          ),
          s(" Weekly launch standup mandatory final eight weeks — async updates miss blockers."),
        ],
        [
          s("Integrate launch plan with product and engineering milestones. "),
          x(
            "GA readiness, documentation, API stability, migration tools — marketing cannot promise what product has not shipped.",
            "Salesforce opportunity 'launch hold' flag prevents reps pre-selling unfinished capabilities.",
          ),
          s(" Launch readiness checklist signed by product, marketing, sales, support — gate before PR."),
        ],
      ],
      examples: [
        {
          title: "Workback rescue — slipped GA",
          body: "A analytics product slipped GA two weeks; AI replanned workback preserving PR embargo by cutting non-critical video assets. Messaging and enablement stayed on track — launch day coherent. Prior launch without replan shipped mismatched sales deck and blog.",
        },
        {
          title: "RACI clarity — platform release",
          body: "Enterprise platform launch used Notion RACI with 47 deliverables. AI generated first RACI from template; leads assigned owners. Standup surfaced legal review bottleneck week 5 — resolved before crunch. Zero missed external commitments.",
        },
        {
          title: "Conference anchor — forced discipline",
          body: "SaaS vendor anchored launch to Dreamforce booth demo. Immovable date focused team — scope cut to MVP launch tier. Planning discipline from fixed date beat prior slip-prone soft launches.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-dg-ch4-launch-sprint",
      type: "flow",
      title: "Launch Sprint Workflow",
      caption:
        "Plan + owners → messaging house → content sprint → enablement + PR → launch week monitor. AI accelerates production; humans own gates and coordination.",
    }),
    buildSection({
      number: "4.2",
      title: "Messaging and Positioning Documents",
      subtitle: "The messaging house, the positioning statement, and the narrative that aligns marketing, sales, and product before launch day",
      take: "Launch messaging house structures promise, positioning, pillars, proof points, persona messages, and anti-messaging (what we are not). Positioning statement follows target, frame, differentiation, proof format. AI drafts from GTM doc and competitive map — humans lock before content sprint begins. Messaging lock is a hard gate: no asset production until sign-off from product marketing, sales leadership, and product. Version control prevents teams working from stale docs.",
      why: "Misaligned messaging at launch produces ads that contradict sales calls and support confusion. One house, many expressions — not many houses.",
      paragraphs: [
        [
          s("Build messaging house before any launch copy production. "),
          x(
            "Levels: brand promise stable; launch promise specific; three pillars with proof each; persona hooks; objection handlers.",
            "Claude with GTM context generates v1; workshop narrows with sales objection input.",
          ),
          s(" Publish in Highspot, Notion, or Google — single link in every brief."),
        ],
        [
          s("Run messaging comprehension test internally and with customers. "),
          x(
            "Five sales reps and five customers: 'What is new and why care?' Confusing answers mean rewrite, not more content.",
            "AI simulates buyer summary — quick sanity check before external spend.",
          ),
          s(" Lock messaging doc with date and approver names — audit trail for post-launch disputes."),
        ],
        [
          s("Translate house to channel cheat sheets. "),
          x(
            "Blog tone, ad character limits, sales talk track, support macro — AI derives from same house, different formats.",
            "Prevents social team inventing launch angle disconnected from sales deck.",
          ),
          s(" Anti-messaging section prevents feature-checklist parity with competitors."),
        ],
      ],
      examples: [
        {
          title: "Lock gate save — security launch",
          body: "Content sprint started early without lock — ads emphasised speed, positioning emphasised compliance. Gate process instituted; launch reset two weeks. Final house aligned; SQL quality rose — prior misaligned soft launch had polluted pipeline.",
        },
        {
          title: "Persona hooks — HR feature",
          body: "Messaging house included CHRO, HR ops, and IT hooks from same three pillars. AI generated persona one-liners; sales picked correct hook per meeting from cheat sheet. Demo-to-proposal rate 18% above prior feature launch.",
        },
        {
          title: "Anti-messaging — avoid table stakes",
          body: "House explicitly stated not competing on lowest price or generic AI label — crowded claims. Creative briefs referenced anti-messaging; award submission narrative differentiated on implementation speed with proof. Clarity reduced creative revision cycles 40%.",
        },
      ],
    }),
    buildSection({
      number: "4.3",
      title: "Launch Content Production Sprint",
      subtitle: "Blog posts, landing pages, email sequences, social content, and PR materials — the AI-accelerated content production that delivers launch assets on time",
      take: "Content sprint produces launch asset set: hero blog, product page, landing variants, email nurture, social calendar, sales snippets, and demo scripts — from locked messaging house. AI drafts, repurposes, and resizes; editors enforce accuracy, voice, and legal review. Sprint runs parallel workstreams with dependency rules: product page before ads, blog before social thought leadership. Quality gates beat volume — ten mediocre assets underperform three excellent ones with repurposing.",
      why: "Launch delays often trace to sequential content bottlenecks. AI parallelises first drafts; planning parallelises workstreams.",
      paragraphs: [
        [
          s("Define minimum viable launch asset list with priority tiers. "),
          x(
            "Tier A: product page, announcement email, sales deck update. Tier B: blog, customer email, paid creative. Tier C: video, infographic, partner kit.",
            "AI cannot expand Tier A scope — protect must-ships when timeline compresses.",
          ),
          s(" Asset list maps to funnel stage and channel from GTM plan."),
        ],
        [
          s("Run human-in-the-loop sprint with daily standups. "),
          x(
            "Morning: blockers. AI overnight drafts from house. Afternoon: SME and legal review queue.",
            "HubSpot and Webflow CMS prepublish staging — no launch-day paste panic.",
          ),
          s(" Repurpose hero blog into 10+ derivatives — AI multiplies output from approved source."),
        ],
        [
          s("Localise and segment only where GTM requires. "),
          x(
            "APAC launch needs translation workflow; ABM tier needs landing variants — not every asset needs 20 versions.",
            "AI translation plus local marketer review for regulated markets.",
          ),
          s(" Track asset completion in launch dashboard — red/yellow/green visible to executive sponsor."),
        ],
      ],
      examples: [
        {
          title: "Two-week sprint — API v2",
          body: "Team produced 14 Tier A/B assets in 10 business days — AI first drafts, two editors, product review queue. Blog repurposed to 24 social posts via Claude. Launch day all channels live within 2-hour window; traffic spike handled by staged publish checklist.",
        },
        {
          title: "Legal gate — fintech feature",
          body: "Regulated fintech required legal on all external copy. Sprint built 48-hour legal SLA into workback; AI pre-flagged claims needing footnotes. No launch-day pullbacks — prior launch had withdrawn ad hours after publish.",
        },
        {
          title: "Tier cut discipline — startup launch",
          body: "Three-person marketing team cut Tier C video; doubled down on interactive demo and blog SEO. AI wrote long-form technical post; ranked page one within 30 days. Launch pipeline target met without video — scope realism mattered.",
        },
      ],
    }),
    buildSection({
      number: "4.4",
      title: "Sales Enablement for Launch",
      subtitle: "Product sheets, battle cards, competitive positioning, and objection handling guides — the materials that prepare the sales team to sell the launch",
      take: "Launch enablement equips sales to sell what's new: updated deck, one-pager, demo script, battle cards, FAQ, pricing guide, and migration talk track for existing customers. AI drafts from messaging house and release notes; product marketing and sales enablement validate. Training session or certification before launch day — reps who skip training become launch bottleneck. Seismic, Highspot, or Guru host materials with read receipts.",
      why: "Buyers hear launch from sales before they read the blog. Unenabled sales undermines marketing spend and damages trust on day one.",
      paragraphs: [
        [
          s("Package enablement kit as mandatory launch prerequisite. "),
          x(
            "Kit checklist tied to Salesforce launch campaign — reps marked enabled before opportunity stage advance on new SKU.",
            "AI generates objection handlers from win-loss and competitive map.",
          ),
          s(" Record enablement webinar for async regions — same content, tracked completion."),
        ],
        [
          s("Differentiate new customer vs expansion playbooks. "),
          x(
            "Existing customers need migration value, timing, and support path — not net-new positioning only.",
            "AI drafts expansion email and talk track from usage data themes.",
          ),
          s(" Customer success aligned on launch comms — avoid sales promising CS cannot deliver."),
        ],
        [
          s("Measure enablement usage post-launch. "),
          x(
            "Highspot analytics: deck views, battle card opens, search terms. Low usage triggers manager follow-up.",
            "AI correlates enablement views with win rate in launch segment — justifies next launch investment.",
          ),
          s(" Update battle cards within 72 hours of competitor response — launch week is dynamic."),
        ],
      ],
      examples: [
        {
          title: "Certification gate — enterprise ERP module",
          body: "Salesforce checkbox required enablement quiz pass before quoting new module. 94% completion pre-launch; discounting errors dropped 70% versus prior module without gate. AI-generated quiz from messaging house.",
        },
        {
          title: "Battle card velocity — competitive reply",
          body: "Rival announced similar feature launch day -2. AI refreshed battle card overnight; Seismic push notification to all reps. Competitive win rate week one held at 52% — enabled reps had answers.",
        },
        {
          title: "Expansion playbook — PLG upgrade",
          body: "PLG product launch included sales-assist upgrade playbook with usage triggers from product analytics. Marketing-sourced upgrade opps 31% of launch-quarter expansion — enablement connected signal to talk track.",
        },
      ],
    }),
    buildSection({
      number: "4.5",
      title: "Launch PR and Media Strategy",
      subtitle: "Developing the media pitch, the press release, the spokesperson brief, and the journalist outreach plan",
      take: "Launch PR earns third-party credibility: press release, media briefings, embargo outreach, byline articles, and analyst briefings. AI drafts release and pitch variants by publication beat; humans personalise journalist relationships and approve quotes. Embargo discipline matters — leak destroys coordinated launch. Cision or Muck Rack manage lists; coordinate with product availability and customer reference readiness.",
      why: "Owned channels alone miss buyers who trust press and analysts. PR extends launch reach but requires preparation and spokesperson training.",
      paragraphs: [
        [
          s("Build media list from beat relevance, not circulation alone. "),
          x(
            "AI ranks journalists by past coverage themes versus your launch angle. Tier 1 personal pitch; tier 2 release distribution.",
            "Customer reference and executive quote approval before any outreach.",
          ),
          s(" Embargo calendar shared with PR, legal, and exec — single source of truth."),
        ],
        [
          s("Prepare spokesperson brief with Q&A and bridge phrases. "),
          x(
            "AI generates tough questions from competitive and product risk angles; comms trains exec responses.",
            "Technical spokesperson for product depth; CEO for market narrative — match to outlet.",
          ),
          s(" Avoid AI quotes in release without human authorship — media and SEC scrutiny vary."),
        ],
        [
          s("Coordinate PR timing with demand gen and sales. "),
          x(
            "Coverage lands day-of or day-after depending on strategy; sales alerted to coverage for outreach personalisation.",
            "HubSpot tracks PR-driven traffic spike; SDRs use article in sequences same day.",
          ),
          s(" Measure PR by quality coverage and influenced pipeline — not release wire impressions."),
        ],
      ],
      examples: [
        {
          title: "Embargo success — data platform",
          body: "Five tier-1 tech press under embargo with coordinated briefing. AI personalised pitch angles per outlet beat. Embargo lift generated 12 stories launch week; inbound demo requests 3x baseline. Leak-free discipline credited to tight calendar.",
        },
        {
          title: "Analyst briefing parallel — enterprise launch",
          body: "Gartner and Forrester briefings two weeks pre-launch with AI-prepared briefing doc from messaging house. Analyst mention in launch wave lent sales air cover — enterprise pipeline influence $2.8M attributed in Salesforce campaign.",
        },
        {
          title: "PR trim — wrong stage",
          body: "Startup skipped wire release; focused on three niche newsletter sponsors and founder podcast tour. AI drafted guest pitches. Coverage smaller but ICP-dense — SQL rate 2x prior broad wire launch.",
        },
      ],
    }),
    buildSection({
      number: "4.6",
      title: "Community and Influencer Activation",
      subtitle: "Planning, briefing, and coordinating community and influencer activity to amplify the launch beyond owned channels",
      take: "Community and influencer activation extends launch through trusted voices: customer advocates, practitioners, creators, and partner ecosystems. AI identifies potential amplifiers from social graphs and community engagement data; humans manage relationships and brief authentically. Brief includes messaging house, allowed claims, disclosure requirements, and timing. Coordinate organic community posts with owned calendar — stagger to avoid fatigue.",
      why: "Peer recommendation compresses trust-building. Launch week peer voice multiplies reach when briefed with accuracy guardrails.",
      paragraphs: [
        [
          s("Segment amplifiers: customers, creators, partners, employees. "),
          x(
            "Customers need early access and talk track; creators need creative freedom within claim guardrails; partners need co-brand rules.",
            "AI drafts brief templates per segment from messaging house.",
          ),
          s(" Legal review on incentivised posts — FTC and ASA disclosure rules apply."),
        ],
        [
          s("Time activation across launch week arc. "),
          x(
            "Tease, announce, deep-dive, customer story — map influencer posts to arc not single blast.",
            "Common Room or manual tracker monitors community reaction for response opportunities.",
          ),
          s(" Employee advocacy programme with pre-approved assets — multiply reach safely."),
        ],
        [
          s("Measure amplifier impact on pipeline and sentiment. "),
          x(
            "UTM and promo codes per partner; social listening on launch sentiment. AI summarises community threads for product feedback.",
            "Low-performing amplifiers deprioritised next launch — data beats relationships alone.",
          ),
          s(" Thank and debrief amplifiers — relationship compounds next launch."),
        ],
      ],
      examples: [
        {
          title: "Customer advocate wave — dev tool",
          body: "Twelve customer advocates briefed under NDA with early access. Launch day coordinated posts and GitHub stars campaign. Community-sourced trials 18% of launch-week signups — highest quality cohort per product analytics.",
        },
        {
          title: "Creator brief discipline — beauty brand",
          body: "AI drafted creator brief with allowed claims and mandatory #ad disclosure. Legal approved once for 40 creators. Zero compliance issues; launch sentiment 89% positive in Brandwatch versus 71% prior influencer-heavy launch without brief.",
        },
        {
          title: "Partner co-announce — integration launch",
          body: "Salesforce AppExchange partner co-marketed integration launch. Joint webinar, shared email to overlapping ICP. Partner-sourced pipeline 22% of launch quarter — activation planned in launch workback week 6.",
        },
      ],
    }),
    buildSection({
      number: "4.7",
      title: "Launch Week Operations",
      subtitle: "Real-time monitoring, response management, and performance optimisation during launch — how AI assists the live execution without removing human judgment",
      take: "Launch week ops runs war room rhythm: publish checklist, monitor site and signup flows, track media and social, triage support surge, watch competitor response, optimise paid creative, and escalate incidents. AI summarises sentiment, flags anomalies in conversion funnels, drafts rapid response copy for approval — humans approve external responses and pricing decisions. Pre-written holding statements for outage or backlash. Daily launch retro adjusts spend and messaging.",
      why: "Launch day is when small failures become public. Ops discipline and human judgment on responses protect brand and revenue.",
      paragraphs: [
        [
          s("Run launch war room with defined roles and escalation. "),
          x(
            "Comms lead, demand gen, product, support, legal on-call. Hour-zero publish checklist with rollback plan.",
            "AI dashboard aggregates HubSpot, Google Analytics, social listening, Salesforce pipeline.",
          ),
          s(" Pre-agree who can pause ads, edit website, or delay email — authority clear."),
        ],
        [
          s("Monitor leading indicators hourly day one, daily week one. "),
          x(
            "Signup conversion, demo requests, error rates, support queue, sentiment, competitor ads.",
            "AI alerts on threshold breach — human validates before public response.",
          ),
          s(" Shift paid budget to winning creative within 48 hours if data sufficient."),
        ],
        [
          s("Capture launch learnings in real time. "),
          x(
            "Shared doc: what worked, bugs, sales feedback, press hits, customer quotes for follow-up.",
            "AI nightly summary for executive — not buried in Slack threads.",
          ),
          s(" Post-launch nurture activates within 24 hours — do not waste launch traffic."),
        ],
      ],
      examples: [
        {
          title: "Signup outage response — 47 minutes",
          body: "Launch hour signup API failed. War room escalated engineering; comms held social silence until fix. AI drafted status update; legal approved. Downtime 47 minutes; post-fix email to partial signups recovered 62% of lost conversions.",
        },
        {
          title: "Creative pivot day 2 — paid social",
          body: "Launch ads variant A underperformed variant B 3x on CPM-to-demo. AI flagged by midnight; media buyer shifted budget by 8am day two. Saved $40K wasted spend across launch week.",
        },
        {
          title: "Competitor counter-launch — messaging hold",
          body: "Rival launched counter-message day one. Leadership wanted immediate response; war room held to pre-approved battle narrative. Measured response day three with customer proof video — avoided reactive price war.",
        },
      ],
    }),
    buildSection({
      number: "4.8",
      title: "Marketer Decision Lens: Minimum vs Maximum Viable Launch",
      subtitle: "How to make the investment-impact decision on launch scope — and what each level of launch investment realistically produces",
      take: "Launch scope tiers clarify investment vs outcome: minimum viable launch (MVl) — core messaging, product page, enablement, customer email; standard launch adds blog, PR, paid, community; maximum viable launch adds events, video, global localisation, ABM overlay. AI lowers production cost but does not eliminate trade-offs. Choose tier from GTM bet size, competitive urgency, and sales capacity — not ego. Document what each tier excludes so stakeholders align on realistic outcomes.",
      why: "Over-scoped launches miss dates; under-scoped launches waste product investment. Explicit tier decision prevents mid-project scope fights.",
      paragraphs: [
        [
          s("Define three launch tiers with asset lists and budget bands. "),
          x(
            "MVL: 2-week sprint, $X, expected pipeline Y. Standard: 6-week, $2X, pipeline 1.6Y. Max: 12-week, $4X, pipeline 2Y — illustrative ratios require your data.",
            "AI estimates effort hours per asset from historical launches — improves tier accuracy over time.",
          ),
          s(" Executive picks tier with written acknowledgment of exclusions."),
        ],
        [
          s("Match tier to launch type: feature, product, company, market entry. "),
          x(
            "Minor feature: MVL often sufficient. New category: standard or max. Market entry may need max in one region, MVL elsewhere.",
            "Sales motion determines enablement depth — enterprise needs more than PLG toggle.",
          ),
          s(" Upgrade tier only with budget and time — not mid-sprint without dropping assets."),
        ],
        [
          s("Review launch ROI 30/60/90 days against tier hypothesis. "),
          x(
            "Did MVL hit pipeline target? If yes, resist max next time without cause. If no, diagnose messaging vs scope vs product fit.",
            "AI attributes pipeline to launch campaign hierarchy in Salesforce.",
          ),
          s(" Institutionalise tier playbook — launches get faster and cheaper with reuse."),
        ],
      ],
      examples: [
        {
          title: "MVL win — incremental integration",
          body: "Integration feature shipped MVL: page update, email, enablement one-pager. No PR. Hit 112% of modest pipeline target at 30% of prior launch cost. Tier choice matched feature significance.",
        },
        {
          title: "Max justified — category creation",
          body: "New category required analyst, PR, event, ABM, and video — max tier. $480K spend; $4.2M pipeline influenced in two quarters. MVL would not have shifted market perception — tier matched strategic bet.",
        },
        {
          title: "Scope creep block — executive request",
          body: "CEO requested launch video week 3 of MVL plan. CMO showed workback conflict — video drops enablement certification on time. CEO chose enablement; launch succeeded. Documented tier decision prevented silent failure.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What must be locked before launch content sprint begins?",
      options: [
        "Paid media budget only.",
        "Messaging house and positioning with stakeholder sign-off.",
        "Post-launch retrospective date.",
        "Competitor stock price.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Messaging lock gates content production. Re-read sections 4.2 and 4.3.",
      wrongFeedback:
        "Content sprint starts after messaging house is locked. Re-read sections 4.2 and 4.3.",
    },
    {
      kind: "order",
      q: "Order launch sprint workflow from planning to live week.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Launch plan with owners and workback",
        "Messaging house alignment",
        "Content production sprint",
        "Sales enablement and PR preparation",
        "Launch week monitoring and optimisation",
      ],
      correctFeedback:
        "Right. Plan → message → produce → enable → operate live. Re-read section 4.1 diagram.",
      wrongFeedback:
        "Launch flows from planning through live operations. Re-read section 4.1.",
    },
    {
      kind: "categorize",
      q: "Classify launch assets by tier priority.",
      categories: ["Tier A — must ship", "Tier C — nice to have"],
      items: [
        { text: "Updated product page.", category: 0 },
        { text: "Launch announcement email.", category: 0 },
        { text: "Cinematic brand video.", category: 1 },
        { text: "Sales deck update.", category: 0 },
        { text: "Infographic for social.", category: 1 },
        { text: "Core enablement one-pager.", category: 0 },
      ],
      correctFeedback:
        "Right. Tier A covers page, email, enablement; video often Tier C. Re-read section 4.3.",
      wrongFeedback:
        "Must-ship assets are page, email, enablement — video often optional. Re-read section 4.3.",
    },
    {
      q: "Launch week AI-generated social response to crisis should?",
      options: [
        "Auto-publish immediately for speed.",
        "Draft for human and legal approval before posting.",
        "Never be used.",
        "Replace war room entirely.",
      ],
      correct: 1,
      correctFeedback:
        "Right. AI drafts; humans approve external crisis comms. Re-read section 4.7.",
      wrongFeedback:
        "Launch week responses need human judgment and approval. Re-read section 4.7.",
    },
    {
      q: "Sales enablement before launch day primarily prevents what?",
      options: [
        "Too much website traffic.",
        "Reps selling misaligned or incomplete launch narrative.",
        "Legal trademark registration.",
        "Product bugs.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Enablement aligns sales with messaging house. Re-read section 4.4.",
      wrongFeedback:
        "Unenabled sales undermines launch messaging. Re-read section 4.4.",
    },
    {
      kind: "categorize",
      q: "Match launch scope decision to appropriate scenario.",
      categories: ["Minimum viable launch", "Maximum viable launch"],
      items: [
        { text: "Minor integration feature update.", category: 0 },
        { text: "New category market entry.", category: 1 },
        { text: "Bug fix release.", category: 0 },
        { text: "Flagship platform with analyst scrutiny.", category: 1 },
        { text: "Single persona PLG toggle.", category: 0 },
        { text: "Global multi-region simultaneous entry.", category: 1 },
      ],
      correctFeedback:
        "Right. Scope matches strategic significance and market bet. Re-read section 4.8.",
      wrongFeedback:
        "MVL for incremental; max for category or market bets. Re-read section 4.8.",
    },
  ],
});
