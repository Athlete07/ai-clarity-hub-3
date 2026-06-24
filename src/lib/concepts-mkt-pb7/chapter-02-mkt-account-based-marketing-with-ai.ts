import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter02MktAccountBasedMarketingWithAi = buildChapter({
  slug: "mkt-account-based-marketing-with-ai",
  number: 2,
  shortTitle: "Account-Based Marketing with AI",
  title: "Account-Based Marketing with AI",
  readingMinutes: 24,
  summary:
    "Account-based marketing coordinates marketing and sales around named target accounts — personalised engagement across channels until pipeline advances. AI makes ABM economically viable by compressing account research, content personalisation, orchestration, and measurement that previously required armies of contractors. This chapter covers why AI changes ABM economics, account selection from CRM and intent data, research at scale, personalised content, multi-stakeholder messaging, campaign orchestration, account-level measurement, and the programme design decisions that determine whether ABM fits your stage.",
  keyTakeaway:
    "ABM succeeds when account selection is ruthless, personalisation is relevant not creepy, and sales-marketing orchestration is operational — not aspirational. AI accelerates research, drafting, and signal processing; marketers own tier definitions, message quality, and the coordination model with sales. Scale depth before breadth.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "2.1",
      title: "What ABM Is and Why AI Changes It",
      subtitle: "The account-focused approach that was previously too resource-intensive to scale — and the AI capabilities that change the economics",
      take: "ABM flips volume marketing: instead of generating thousands of anonymous leads, teams concentrate budget and personalisation on hundreds or thousands of named accounts that match ICP and show buying potential. Classic ABM failed at scale because research, custom content, and multi-channel coordination cost hours per account. AI collapses research synthesis, first-draft personalisation, and engagement summarisation — enabling one-to-few and one-to-many ABM tiers alongside true one-to-one for strategic accounts. Platforms like 6sense, Demandbase, Terminus, and RollWorks embed AI across the workflow.",
      why: "Enterprise deals are won at account level, not lead level — yet most martech still optimises for form fills. AI-aligned ABM matches how B2B buying actually works.",
      paragraphs: [
        [
          s("Define ABM tiers before choosing tools. "),
          x(
            "Tier 1: bespoke one-to-one (10–50 accounts). Tier 2: one-to-few clusters by industry or use case (50–500). Tier 3: one-to-many programmatic ABM on ICP list (500–5000+).",
            "AI personalisation depth should match tier — full custom for tier 1, segment templates for tier 3.",
          ),
          s(" Sales capacity caps tier 1 count — marketing cannot outrun SDR/AE bandwidth."),
        ],
        [
          s("AI changes unit economics on research and content, not on strategic judgment. "),
          x(
            "Claude with CRM exports produces account briefs in minutes. Jasper and Mutiny personalise landing pages at scale. 6sense AI writers draft outreach variants.",
            "Judgment calls — which accounts, which message, when sales engages — remain human.",
          ),
          s(" Calculate cost-per-account before and after AI — justify platform spend with hours saved and pipeline lift."),
        ],
        [
          s("ABM requires marketing-sales shared definitions of account engagement. "),
          x(
            "Marketing Qualified Account (MQA) or engagement score thresholds trigger sales plays. Misalignment produces ignored alerts or premature outreach.",
            "Weekly standups on tier 1 accounts beat quarterly ABM retrospectives.",
          ),
          s(" ABM is a coordination model first, a technology purchase second."),
        ],
      ],
      examples: [
        {
          title: "Tier model — enterprise data platform",
          body: "A data platform ran 25 tier-1 accounts with bespoke executive briefs and custom events; 200 tier-2 with industry landing pages via Mutiny; 2,000 tier-3 on Demandbase intent journeys. AI cut tier-1 research from 4 hours to 45 minutes per account. Pipeline from ABM accounts rose 38% year-over-year; sales adoption of marketing alerts hit 82%.",
        },
        {
          title: "ABM vs lead-gen pivot — security vendor",
          body: "A security vendor replaced broad LinkedIn lead-gen with 6sense ABM on 800 ICP accounts. Lead volume dropped 60%; opportunity count rose 22%. AI engagement summaries in Salesforce gave reps context before calls — connect rate doubled on tier-1 outreach.",
        },
        {
          title: "Startup ABM minimum — Series A",
          body: "A Series A startup could not afford full ABM suite — used HubSpot + Claude for 150 named accounts, manual LinkedIn plus email sequences. Tier-1 only. Won three logos from list in nine months — proved motion before Terminus contract.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-dg-ch2-abm-workflow",
      type: "flow",
      title: "ABM Workflow",
      caption:
        "Select accounts → research → personalise → orchestrate multi-channel → measure account pipeline influence. AI accelerates research and personalisation layers.",
    }),
    buildSection({
      number: "2.2",
      title: "Account Identification and Selection with AI",
      subtitle: "Scoring and prioritising target accounts from CRM data, intent signals, and market intelligence — the ICP applied to a named account list",
      take: "Account selection applies ICP criteria to a named list — firmographics, technographics, whitespace in wallet share, intent stage, and strategic fit (logo value, reference potential). AI scores thousands of accounts against fit models and surfaces in-market signals from 6sense, Demandbase, Bombora, and G2. Selection is subtractive: the discipline to remove accounts matters as much as adding them. Sales must co-own the list — imposed ABM lists fail.",
      why: "Wrong accounts waste personalisation investment and erode sales trust. AI scoring makes large-list prioritisation feasible; humans finalize strategic adds and cuts.",
      paragraphs: [
        [
          s("Build the target account list from three inputs. "),
          x(
            "Existing CRM accounts with expansion potential, net-new accounts matching ICP from ZoomInfo or LinkedIn Sales Navigator, and intent-surging accounts from your ABM platform.",
            "AI deduplicates and scores — flag conflicts when CRM owner disagrees with marketing tier assignment.",
          ),
          s(" Cap list size to what orchestration can sustain — growing the list without tier discipline dilutes ABM."),
        ],
        [
          s("Use composite scoring: fit × intent × engagement. "),
          x(
            "Fit: employee band, industry, tech stack. Intent: 6sense stage or Bombora surge topics. Engagement: ad clicks, site visits, content downloads in last 90 days.",
            "HubSpot target account features and Salesforce account tiers operationalise scores for routing.",
          ),
          s(" Re-score monthly — intent decays; stale scores produce embarrassing outreach."),
        ],
        [
          s("Govern list changes with sales input. "),
          x(
            "Quarterly list review: sales nominates strategic accounts; marketing proposes intent-based adds; leadership resolves capacity conflicts.",
            "AI drafts review packets — engagement summary and recommended tier per account.",
          ),
          s(" Document why accounts were removed — prevents relitigating cuts every month."),
        ],
      ],
      examples: [
        {
          title: "6sense scoring — cloud cost management",
          body: "A FinOps vendor uploaded 3,400 ICP-matched accounts to 6sense. AI intent model identified 280 in 'decision' stage with AWS spend signals. Marketing concentrated 70% of ABM budget on that slice. SQL-to-opportunity rate 2.7x non-intent accounts.",
        },
        {
          title: "Whitespace analysis — Salesforce CRM",
          body: "A SaaS vendor used AI on Salesforce data to find customers under-deployed in second product line — expansion ABM list of 120 accounts. Personalised campaigns referenced current usage metrics. Expansion pipeline $1.4M in two quarters from list alone.",
        },
        {
          title: "List hygiene — negative fit",
          body: "AI clustering found 15% of ABM list were agencies and consultants — high engagement, zero conversion. Suppressed from Demandbase and SDR sequences. Cost per engaged account fell 19% without losing real pipeline.",
        },
      ],
    }),
    buildSection({
      number: "2.3",
      title: "Account Research at Scale",
      subtitle: "Researching target accounts — their strategy, challenges, buying signals, and stakeholder map — using AI in minutes rather than hours per account",
      take: "Account research briefs equip marketing and sales with company strategy, initiatives, tech stack, financial signals, stakeholder map, and hypothesised pain points. AI synthesises 10-K excerpts, earnings calls, press releases, LinkedIn profiles, job postings, and technographic data into structured briefs — what took analysts hours now takes minutes. Briefs must be dated, sourced, and verified for tier-1 outreach; AI hallucinates on private companies without sufficient public data.",
      why: "Generic ABM fails because personalisation lacks substance. Scalable research is the prerequisite for relevant tier-1 and tier-2 plays.",
      paragraphs: [
        [
          s("Standardise brief template across tiers. "),
          x(
            "Sections: company snapshot, strategic priorities, likely pains mapped to your value prop, tech stack, key stakeholders, recent triggers, recommended angle. Tier 1 adds custom talk tracks; tier 3 uses industry-level template.",
            "Claude Projects with brief template and ICP context produce consistent output — store in Salesforce account notes or Notion.",
          ),
          s(" Timestamp every brief — stale research causes worse outcomes than no research."),
        ],
        [
          s("Combine public AI research with internal CRM intelligence. "),
          x(
            "Gong snippets from similar accounts, support tickets if they are a customer, partner introductions. AI merges public and private into single view.",
            "Never paste confidential customer data into public AI without enterprise agreements.",
          ),
          s(" Sales adds relationship context briefs cannot capture — brief is start of conversation prep."),
        ],
        [
          s("Trigger brief refresh on buying signals. "),
          x(
            "New CIO hire, funding round, M&A, intent surge — 6sense alerts can trigger auto-regeneration workflow via Zapier to AI prompt.",
            "Marketing ops automates tier-2 refresh quarterly; tier-1 on signal.",
          ),
          s(" Quality spot-check 10% of AI briefs monthly — catch hallucination patterns early."),
        ],
      ],
      examples: [
        {
          title: "Brief factory — tier-2 manufacturing ABM",
          body: "A manufacturing software company generated 180 tier-2 briefs monthly via Claude with ZoomInfo and earnings transcript inputs. SDRs reported 25-minute prep reduced to 8 minutes. Meeting book rate from ABM sequence rose 34% after brief rollout.",
        },
        {
          title: "Stakeholder map — healthcare system sale",
          body: "AI mapped LinkedIn org chart for tier-1 hospital network — identified CIO, CMIO, and procurement lead. Multi-threaded outreach coordinated in Salesforce. Deal advanced to evaluation after engaging three stakeholders — single-thread prior attempts had stalled.",
        },
        {
          title: "Hallucination catch — private company",
          body: "AI brief invented initiative for private logistics firm. SDR caught before call; brief template updated to flag low-confidence sections when public data sparse. Governance rule: tier-1 briefs human-verified before executive outreach.",
        },
      ],
    }),
    buildSection({
      number: "2.4",
      title: "Personalised ABM Content with AI",
      subtitle: "Generating account-specific messaging, outreach, and content at scale — the personalisation depth ABM requires without the production cost it traditionally demanded",
      take: "ABM personalisation spans ads, landing pages, emails, direct mail, and sales sequences — referencing account context without crossing into surveillance tone. AI generates first drafts of personalised headlines, email openers, ad copy, and landing page modules from account briefs. Tools like Mutiny, Instapage, and 6sense AI personalise web experiences; Outreach and Salesloft integrate AI assist for sequences. Relevance beats volume: one accurate reference outperforms ten generic merge fields.",
      why: "Buyers ignore 'Hi {{company}}' templates. AI makes segment-level and account-level copy economically viable if humans enforce tone and accuracy standards.",
      paragraphs: [
        [
          s("Personalise at the depth appropriate to tier. "),
          x(
            "Tier 1: reference specific initiative from brief. Tier 2: industry and role pain. Tier 3: dynamic industry insert on scalable template.",
            "Mutiny or Demandbase personalisation rules swap headlines by firmographic segment — AI drafts rule variants.",
          ),
          s(" Test personalisation lift — holdout accounts without personalisation prove incrementality."),
        ],
        [
          s("Maintain brand voice and compliance guardrails. "),
          x(
            "Style guide in AI system prompt; banned claims list; legal review for regulated industries. Personalisation must not imply non-public knowledge.",
            "AI red-team prompt: 'Does this sound stalkerish or inaccurate?' before publish.",
          ),
          s(" Store approved templates in sales enablement — reps should not freestyle AI personalisation on tier-1."),
        ],
        [
          s("Connect personalised content to account journeys in ABM platform. "),
          x(
            "Demandbase and Terminus orchestrate ad → landing → sales touch with consistent narrative. Disjointed personalisation across channels confuses buyers.",
            "HubSpot workflows trigger emails when account hits intent threshold — content pulled from brief library.",
          ),
          s(" Retire underperforming personalisation variants — refresh quarterly from new win-loss themes."),
        ],
      ],
      examples: [
        {
          title: "Mutiny landing test — HR tech",
          body: "An HR tech company personalised landing pages by employee count band and industry for 400 ABM accounts. AI drafted headline variants; Mutiny served dynamically. Conversion to demo request 2.4x generic page; sales noted higher-quality discovery calls.",
        },
        {
          title: "Executive email — tier-1 only",
          body: "CMO-sent emails to 30 tier-1 accounts referenced public sustainability report initiatives — AI drafted, CMO edited two sentences each. Six replies led to four meetings. Template banned for tier-3 — would not scale authentically.",
        },
        {
          title: "Ad personalisation — Terminus",
          body: "A cybersecurity vendor ran Terminus display with industry-specific creative plus logo inclusion for tier-2. AI produced twelve ad variants from single brief library. Account engagement score lift 28% versus non-ABM display benchmark.",
        },
      ],
    }),
    buildSection({
      number: "2.5",
      title: "Multi-Stakeholder Messaging",
      subtitle: "Developing differentiated messages for each buying committee member from the same account brief — the CFO version, the CISO version, the end-user version",
      take: "Enterprise purchases involve committees — economic buyer, technical evaluator, user champion, and blocker roles each care about different outcomes. ABM must multi-thread messaging: ROI and risk for CFO, integration and security for CISO, workflow and adoption for end users. AI extracts role-specific angles from one account brief and value-prop matrix — drafting parallel message tracks without contradicting core positioning. Sales maps stakeholders in Salesforce; marketing supplies role-matched content.",
      why: "Single-thread ABM dies when your champion leaves or lacks authority. Committee coverage is how ABM deals advance to evaluation.",
      paragraphs: [
        [
          s("Build a role × value matrix before account campaigns launch. "),
          x(
            "Rows: stakeholder roles. Columns: pain, proof, objection, CTA. AI populates from product marketing source docs and account brief.",
            "Gong analysis of won deals reveals which proof types resonate per role — feed matrix updates.",
          ),
          s(" Align with sales on stakeholder map — marketing cannot message ghosts."),
        ],
        [
          s("Coordinate timing across roles without overwhelming the account. "),
          x(
            "Orchestration rules: technical content after economic buyer awareness; user webinar invite parallel to exec touch. ABM platforms sequence touches.",
            "Cap touches per account per week — committee bombardment triggers procurement freeze.",
          ),
          s(" Track role-level engagement in ABM analytics — unseen CFO may block late stage."),
        ],
        [
          s("Enable sales with role-specific snippets, not full decks only. "),
          x(
            "AI generates email paragraphs, talk tracks, and one-pagers per role from same brief — stored in Highspot or Seismic.",
            "Reps mix snippets into custom outreach faster than rewriting from generic deck.",
          ),
          s(" Update matrix when product launches change technical proof — stale CISO messaging fails audits."),
        ],
      ],
      examples: [
        {
          title: "CFO + IT dual track — ERP migration",
          body: "An ERP vendor ran parallel tracks: CFO received ROI calculator and peer CFO case study; IT received integration architecture guide. AI drafted from single brief. Salesforce showed both roles engaged before demo — win rate 2x single-thread deals in same segment.",
        },
        {
          title: "CISO objection prep — zero trust",
          body: "AI generated CISO-specific FAQ from security documentation and account's known stack. SDR shared after technical evaluator engaged. Shortened security review cycle 18 days on average — blocker neutralised earlier.",
        },
        {
          title: "User champion programme — collaboration SaaS",
          body: "End-user champions received adoption playbook and internal rollout template — not pricing. Champions forwarded to managers; 40% of tier-2 opportunities showed user engagement before sales contact. Multi-stakeholder design intentional.",
        },
      ],
    }),
    buildSection({
      number: "2.6",
      title: "ABM Campaign Orchestration",
      subtitle: "Coordinating personalised outreach across email, LinkedIn, display, and sales touch — the multi-channel ABM campaign with AI at the coordination layer",
      take: "ABM orchestration sequences ads, web personalisation, marketing email, SDR outreach, and direct mail around account milestones — intent stage changes, engagement thresholds, and sales triggers. AI assists with journey design, next-best-action suggestions, and engagement summarisation for sales. Platforms — 6sense Orchestration, Demandbase Advertising + Sales Intelligence, Terminus — centralise coordination; smaller teams stitch HubSpot, LinkedIn, and Outreach with clear playbooks.",
      why: "Uncoordinated channel blasts produce account fatigue and conflicting messages. Orchestration is where ABM becomes a system rather than disconnected tactics.",
      paragraphs: [
        [
          s("Document plays per tier: triggers, channels, content, sales action, exit criteria. "),
          x(
            "Example play: account enters 'consideration' intent → display + personalised landing → SDR sequence day 5 if no reply → exec invite day 12.",
            "AI drafts play copy variants; RevOps builds automation in ABM platform.",
          ),
          s(" Sales agrees SLAs on alert response — orchestration fails if reps ignore MQAs."),
        ],
        [
          s("Use engagement scoring to pace intensity. "),
          x(
            "High engagement: accelerate sales touch. Low engagement: swap creative or pause to avoid waste. 6sense account scores drive rules.",
            "AI weekly account summaries help reps prioritise within tier-1 list.",
          ),
          s(" Review orchestration quarterly — channel saturation shifts by industry."),
        ],
        [
          s("Integrate offline and executive touches in the journey. "),
          x(
            "Direct mail, executive dinners, and conference meetings are nodes in the same account plan — not side projects.",
            "Salesforce campaigns attribute offline touches; marketing funds tier-1 experiences.",
          ),
          s(" Orchestration includes deliberate pauses — persistence without nuance burns accounts."),
        ],
      ],
      examples: [
        {
          title: "6sense journey — data analytics",
          body: "A analytics firm built 6sense journey for 600 accounts: display by intent stage, automated SDR task creation at engagement threshold, Mutiny page swap. Pipeline velocity improved 21%; marketing-sourced ABM opps tracked in single Salesforce campaign hierarchy.",
        },
        {
          title: "LinkedIn + Outreach stitch — mid-market",
          body: "Without full suite, team used LinkedIn Company Targeting + HubSpot workflows + Outreach sequences. AI drafted sequence steps from brief library. Playbook doc in Notion — 90% adherence in sales audit. Meeting rate 1.6x pre-orchestration.",
        },
        {
          title: "Fatigue reset — over-touch",
          body: "ABM dashboard showed 40 accounts with 12+ touches in 14 days, zero replies. Orchestration paused; messaging reset to value-led soft touch. Re-engagement rate recovered — lesson embedded in cap rules platform-wide.",
        },
      ],
    }),
    buildSection({
      number: "2.7",
      title: "ABM Measurement",
      subtitle: "Tracking account engagement, pipeline influence, and revenue attribution at the account level — the metrics that tell you whether ABM is working",
      take: "ABM measurement tracks account engagement scores, MQAs, pipeline created and influenced, velocity, win rate, and ACV versus non-ABM accounts. Attribution at account level uses Salesforce campaign influence, HubSpot account-based reports, and ABM platform analytics — not last-touch lead metrics. AI summarises account journeys for QBRs and flags anomalies. Prove incrementality with holdout accounts or pre-post cohorts when leadership sceptical.",
      why: "Lead-based reporting undervalues ABM — accounts engage long before form fills. Account metrics align marketing with how sales measures progress.",
      paragraphs: [
        [
          s("Define ABM success metrics before programme launch. "),
          x(
            "Primary: pipeline influenced and won from target accounts. Secondary: engagement depth, meeting rate, velocity, multi-thread coverage.",
            "6sense and Demandbase dashboards plus Salesforce custom reports — single source of truth in QBR deck.",
          ),
          s(" Set realistic timelines — ABM pipeline lags 2–3x inbound for enterprise cycles."),
        ],
        [
          s("Track influence, not just creation. "),
          x(
            "Marketing may influence existing opportunities via ABM touches — campaign influence models in Salesforce credit appropriately.",
            "AI generates account journey timelines for exec reviews — replaces screenshot archaeology.",
          ),
          s(" Compare win rate ABM list vs matched non-ABM control cohort quarterly."),
        ],
        [
          s("Connect measurement to list and tier decisions. "),
          x(
            "Accounts with high spend and zero pipeline influence → tier downgrade or remove. High performers → tier upgrade.",
            "Measurement closes loop on selection criteria — refine ICP and scoring models.",
          ),
          s(" Report account-level metrics to sales leadership — shared scorecard builds partnership."),
        ],
      ],
      examples: [
        {
          title: "Holdout test — Terminus customer",
          body: "A software vendor held out 10% of ICP list from ABM for two quarters. ABM cohort win rate 1.9x holdout; average deal size 15% higher. Justified 2x ABM budget increase in planning cycle.",
        },
        {
          title: "MQA calibration — false positives",
          body: "MQA alerts fired on bot traffic and student researchers — SQL rate collapsed. Scoring model tightened with 6sense engagement filters; sales trust restored. MQA-to-meeting rate recovered from 8% to 24%.",
        },
        {
          title: "Executive QBR narrative — AI summary",
          body: "AI produced account journey summaries for top 20 ABM accounts quarterly — touches, roles engaged, stage, blockers. CMO and CRO reviews shortened from 3 hours to 45 minutes with better decisions on tier-1 investment.",
        },
      ],
    }),
    buildSection({
      number: "2.8",
      title: "Marketer Decision Lens: ABM Programme Design",
      subtitle: "The account selection criteria, personalisation depth, and sales-marketing coordination model that determines whether ABM is the right approach for your business stage",
      take: "ABM fits when ACV and sales complexity justify account-level investment — typically mid-market and enterprise B2B with named-account sales motion. Wrong-stage ABM: low ACV transactional sales, no sales capacity for follow-up, or ICP still undefined. Programme design choices: tier structure, platform vs stitched stack, personalisation depth, list size, and governance. AI lowers cost but does not fix misaligned motion — diagnose fit before buying Demandbase.",
      why: "ABM platform contracts and content investment are expensive. Design lens prevents buying technology for a motion the organisation cannot execute.",
      paragraphs: [
        [
          s("Run ABM readiness checklist before platform purchase. "),
          x(
            "ICP defined? Sales named-account motion? CRM hygiene? Executive sponsor? Minimum 12-month commitment? If four of five no, fix foundations first.",
            "Pilot tier-2 one-to-few with HubSpot + AI before enterprise ABM suite.",
          ),
          s(" ABM is not anti-inbound — most programmes run both with clear account overlay."),
        ],
        [
          s("Choose personalisation depth vs list breadth trade-off explicitly. "),
          x(
            "Shallow personalisation on 10,000 accounts rarely beats deep work on 200. AI enables middle path — test before scaling.",
            "Sales headcount caps tier-1 — negotiate with sales before marketing promises bespoke programmes.",
          ),
          s(" Document trade-off in ABM charter — prevents scope creep to 'ABM everything'."),
        ],
        [
          s("Govern AI personalisation and data use in ABM workflows. "),
          x(
            "Enterprise AI agreements for account data; no confidential enrichment in consumer tools; human review on tier-1 external copy.",
            "Measurement proves ROI — without account metrics, ABM becomes expensive brand exercise.",
          ),
          s(" Review programme fit annually — motion changes (PLG add-on) may shift ABM role."),
        ],
      ],
      examples: [
        {
          title: "Not ready — PLG miscast",
          body: "A PLG startup bought ABM suite before sales team existed. Accounts engaged; nobody followed up. Programme paused; budget redirected to inbound and product-qualified lead motion. Revisited ABM 18 months later with 8 AEs — succeeded second attempt.",
        },
        {
          title: "Coordination charter — sales marketing SLA",
          body: "ABM programme required signed SLA: MQA response in 4 business hours, weekly tier-1 sync, shared Salesforce dashboard. SLA compliance tracked in QBR. Programme NPS between teams rose from negative to +42.",
        },
        {
          title: "Depth win — 50 account focus",
          body: "Leadership wanted 5,000-account ABM; CMO argued for 50 tier-1 proof. Won argument with 6-month pilot metrics. Deep programme sourced $3.2M pipeline — scaled to 200 accounts with proven playbook, not 5,000 shallow.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What changed ABM economics most significantly with AI?",
      options: [
        "Eliminated need for sales involvement.",
        "Compressed account research and personalisation production cost per account.",
        "Made all accounts tier-1 bespoke.",
        "Removed need for intent data.",
      ],
      correct: 1,
      correctFeedback:
        "Right. AI accelerates research and content — judgment and coordination stay human. Re-read sections 2.1 and 2.3.",
      wrongFeedback:
        "AI changes unit economics on research and drafting, not strategic ownership. Re-read sections 2.1 and 2.3.",
    },
    {
      kind: "order",
      q: "Order the ABM workflow from start to measurement.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Select and score target accounts",
        "Research account context and stakeholders",
        "Personalise content and messaging",
        "Orchestrate multi-channel touches",
        "Measure account pipeline influence",
      ],
      correctFeedback:
        "Right. Selection → research → personalise → orchestrate → measure. Re-read section 2.1 diagram.",
      wrongFeedback:
        "ABM flows from account selection through measurement. Re-read section 2.1.",
    },
    {
      kind: "categorize",
      q: "Sort ABM activities by appropriate tier depth.",
      categories: ["Tier 1 (one-to-one)", "Tier 3 (one-to-many)"],
      items: [
        { text: "CMO-personalised email referencing public initiative.", category: 0 },
        { text: "Industry-segment dynamic landing page.", category: 1 },
        { text: "Custom executive briefing dinner.", category: 0 },
        { text: "Programmatic display on ICP list.", category: 1 },
        { text: "Hand-verified stakeholder map.", category: 0 },
        { text: "Firmographic ad headline insert.", category: 1 },
      ],
      correctFeedback:
        "Right. Depth matches tier — bespoke for tier 1, scalable templates for tier 3. Re-read sections 2.1 and 2.4.",
      wrongFeedback:
        "Tier 1 is bespoke; tier 3 is scalable personalisation. Re-read sections 2.1 and 2.4.",
    },
    {
      q: "ABM should be measured primarily at what level?",
      options: [
        "Individual form fills only.",
        "Account engagement, pipeline influence, and win rate vs control cohort.",
        "Total ad impressions.",
        "Email open rate across all contacts.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Account-level metrics align with how B2B deals progress. Re-read section 2.7.",
      wrongFeedback:
        "Lead metrics undervalue ABM — measure accounts and influence. Re-read section 2.7.",
    },
    {
      q: "Multi-stakeholder ABM messaging requires what first?",
      options: [
        "Same message to all contacts for consistency.",
        "Role × value matrix mapped to buying committee members.",
        "Only end-user outreach.",
        "Avoid contacting more than one person per account.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Committee coverage needs role-specific angles from a shared brief. Re-read section 2.5.",
      wrongFeedback:
        "Enterprise deals need differentiated role messaging. Re-read section 2.5.",
    },
    {
      kind: "categorize",
      q: "Classify ABM programme design decisions.",
      categories: ["Human-led strategic choice", "AI-assisted execution"],
      items: [
        { text: "Final target account list approval with sales.", category: 0 },
        { text: "First-draft account research brief.", category: 1 },
        { text: "Tier structure and personalisation depth trade-off.", category: 0 },
        { text: "Engagement score summarisation for reps.", category: 1 },
        { text: "Whether ABM fits current sales motion.", category: 0 },
        { text: "Landing page headline variants by segment.", category: 1 },
      ],
      correctFeedback:
        "Right. Strategy and fit are human; research and drafting assist with AI. Re-read section 2.8.",
      wrongFeedback:
        "Account selection and motion fit stay human-led. Re-read section 2.8.",
    },
  ],
});
