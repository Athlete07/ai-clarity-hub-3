import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter01MktContentStrategyWithAi = buildChapter({
  slug: "mkt-content-strategy-with-ai",
  number: 1,
  shortTitle: "Content Strategy with AI",
  title: "Content Strategy with AI",
  readingMinutes: 24,
  summary:
    "AI accelerates content production — but without strategy-first discipline, teams publish more noise, not more pipeline. Marketers who sequence audience intelligence, gap analysis, demand mapping, and editorial planning before opening Jasper or ChatGPT build content systems that compound authority instead of flooding channels with interchangeable drafts.",
  keyTakeaway:
    "Strategy before production. AI is an execution multiplier on a brief you already believe in — not a substitute for knowing who you serve, what gaps you own, and which angles differentiate you. Run the strategy stack first; let AI accelerate research synthesis, angle generation, and calendar scaffolding.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "1.1",
      title: "Strategy Before Production",
      subtitle: "Why opening ChatGPT before defining audience, gaps, and goals is the fastest path to content theatre",
      take: "Content strategy answers who you serve, what you want them to believe, and how each asset moves them toward pipeline — before a single word is drafted. AI belongs after that foundation: accelerating research synthesis, angle exploration, and calendar scaffolding. Teams that invert the order produce fluent volume with flat conversion because generation optimises for plausibility, not business outcomes.",
      why: "Leadership often pressures marketing to 'use AI for content' by counting published pieces. Without a strategy-first gate, that mandate becomes a content factory — activity without intent. This section gives you language to push back and a sequence that makes AI spend defensible in budget reviews.",
      paragraphs: [
        [
          s("Strategy-first content marketing defines the decision tree before the draft. "),
          x(
            "Who is the primary audience segment for this quarter? What belief must shift for them to engage? Which funnel stage does this asset serve — awareness, consideration, or decision? What proof points only you can claim? AI cannot answer these from a blank prompt; a strategist must.",
            "Once answered, AI accelerates execution: summarising interview transcripts into persona updates, clustering keyword gaps into topic themes, drafting calendar rows from approved angles. Production without strategy is expensive guessing.",
          ),
          s(" Make strategy completion a hard gate before any generative tool opens — same discipline as legal review, earlier in the pipeline."),
        ],
        [
          s("The commercial case for strategy-first is measurable. "),
          x(
            "Teams that brief AI with audience, angle, and success metric produce drafts requiring 40–60% less revision than 'write a blog about X' prompts. Editorial calendars tied to pipeline goals prevent the trap of publishing thirty posts that rank for nothing.",
            "Conversely, strategy-free AI output inflates vanity metrics — impressions, word count — while assisted pipeline stays flat. CFOs notice the disconnect quickly.",
          ),
          s(" Attach every AI-assisted asset to a strategy field in your CMS or project tool: audience, stage, metric. No field, no schedule."),
        ],
        [
          s("Strategy-first also determines where AI helps versus where human judgment is non-negotiable. "),
          x(
            "AI excels at synthesising large inputs — competitor pages, forum threads, sales call notes — into structured summaries. Humans excel at choosing which insight matters for your positioning this quarter.",
            "The workflow: strategist sets direction → AI processes research volume → strategist selects angles → AI drafts from approved brief → human edits and verifies. Skipping the first and third steps is how brands sound like everyone else.",
          ),
          s(" Document this sequence in your content ops playbook so contractors and agencies inherit the same gate."),
        ],
      ],
      examples: [
        {
          title: "HubSpot content strategy template — brief before Breeze",
          body: "HubSpot teams using Breeze content assistant report better output when campaigns start in the content strategy tool — pillar topic, persona, and funnel stage defined first. A SaaS customer who skipped strategy and prompted 'write about marketing AI' got generic listicles. After requiring persona and goal fields before AI draft, revision cycles dropped and email-assisted conversions rose on gated assets.",
        },
        {
          title: "Ahrefs + strategist gate — SEO without soul",
          body: "An agency used Ahrefs keyword gaps to auto-feed ChatGPT thirty blog topics monthly. Traffic rose marginally; demo requests flatlined — topics matched search volume, not buyer pain. They added a strategist review: only keywords mapping to validated sales objections advanced. Volume halved; pipeline per post tripled. AI fed the gap list; humans owned the filter.",
        },
        {
          title: "Notion strategy doc as AI context",
          body: "A fintech marketing lead maintains a living strategy doc — ICP, messaging hierarchy, quarterly bets — and pastes relevant sections into every Jasper campaign brief. AI drafts align to positioning without fine-tuning. New hires onboard faster because the strategy doc is the prompt library's foundation. Strategy is the moat; AI is the typist.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-cs-ch1-strategy-first",
      type: "flow",
      title: "Strategy Before Production",
      caption:
        "Audience insight → gap analysis → strategic angles → editorial calendar → production. AI accelerates steps two through five — never step zero.",
    }),
    buildSection({
      number: "1.2",
      title: "Audience Intelligence with AI",
      subtitle: "Synthesising research faster — without letting AI invent your ICP",
      take: "Audience intelligence combines first-party data (CRM segments, support tickets, win-loss notes) with qualitative research (interviews, community listening) into actionable persona and pain-point maps. AI compresses synthesis time — clustering themes from transcripts, summarising survey open-ends, tagging sales calls — but cannot replace talking to customers. Marketers who feed AI real inputs get sharper briefs; those who ask AI to 'describe our buyer' get plausible fiction.",
      why: "Every content angle should trace to a validated audience insight. Weak audience work produces content that ranks but does not resonate — or worse, resonates with the wrong segment. AI makes synthesis cheap; your job is ensuring the inputs are true.",
      paragraphs: [
        [
          s("Start audience intelligence from owned data, not generative imagination. "),
          x(
            "Export HubSpot lifecycle segments with engagement patterns. Pull Gong or Chorus themes from closed-won versus closed-lost calls. Mine support tickets in Zendesk for recurring objections. Feed anonymised samples to AI with a synthesis prompt: 'cluster pain points by funnel stage'.",
            "Generative-only persona exercises — 'write a persona for our product' — produce textbook composites that sound right but may not match your actual buyer committee.",
          ),
          s(" Label every persona claim with its source: interview, CRM, or inference. Inference gets validated before it drives calendar bets."),
        ],
        [
          s("AI accelerates the messy middle of audience work — pattern finding across too much text for one strategist to read. "),
          x(
            "A quarter of customer interviews yields forty hours of transcript. AI summarises by role, objection, and trigger event in an hour. The strategist then validates outliers and updates the messaging doc.",
            "The same workflow applies to Reddit, G2 review analysis, and LinkedIn comment mining — AI structures noise; humans judge significance.",
          ),
          s(" Set a rule: no persona update ships from AI synthesis alone without at least three corroborating first-party data points."),
        ],
        [
          s("Audience intelligence should output brief-ready artifacts, not slide deck wallpaper. "),
          x(
            "Strong outputs: 'CFO buyers in mid-market SaaS ask about payback period before security' with three verbatim quotes. Weak outputs: 'Decision-maker values efficiency' with no proof.",
            "Structure your AI synthesis template to force quotes, frequency counts, and funnel stage tags. Brief writers paste these blocks directly into campaign docs.",
          ),
          s(" Review audience intelligence quarterly — markets shift faster than annual persona workshops."),
        ],
      ],
      examples: [
        {
          title: "Gong + ChatGPT — win-loss theme extraction",
          body: "A B2B cybersecurity team exported six months of Gong calls tagged won/lost. ChatGPT clustered loss reasons: integration complexity cited 3x more in losses than wins. Content shifted from feature blogs to implementation guides — win rate on inbound opps rose 8% in two quarters. AI found the pattern; sales data proved it.",
        },
        {
          title: "Typeform open-ends — survey synthesis",
          body: "A DTC brand added AI summarisation to post-purchase Typeform open-ends inside Zapier → Notion. Weekly themes surfaced 'sizing confusion' before returns spiked. Creative briefs for UGC and email adopted sizing language customers actually used. AI compressed analysis from days to hours.",
        },
        {
          title: "Hallucinated persona trap — startup cautionary",
          body: "A Series A startup skipped interviews and asked Jasper to 'create three buyer personas'. Content targeted 'Innovative Ian' — no such buyer existed in their CRM. Paid social CTR was fine; sales flagged lead quality. They restarted with ten customer interviews, AI-synthesised themes, and rebuilt personas. Engagement quality improved; fiction personas cost six months.",
        },
      ],
    }),
    buildSection({
      number: "1.3",
      title: "Content Gap Analysis",
      subtitle: "Finding what you should say — not just what keywords exist",
      take: "Gap analysis compares your published content, competitor coverage, and search or social demand to reveal topics you should own but do not. AI accelerates audits — scraping sitemaps, clustering missing subtopics, summarising competitor angles — but strategic gaps are not only SEO holes. They include sales objections with no enablement asset, launch features with no explainer, and journey stages your library skips entirely.",
      why: "Random AI topic generation fills calendars with searchable but strategically irrelevant posts. Gap analysis ensures AI drafting effort maps to holes that matter for authority, conversion, or competitive defence.",
      paragraphs: [
        [
          s("Run gap analysis on three axes: search demand, competitive coverage, and internal journey coverage. "),
          x(
            "Semrush or Ahrefs content gap reports show keywords competitors rank for that you do not. A manual or AI-assisted content inventory maps your URLs to funnel stages. Sales enablement interviews reveal objections with no matching asset.",
            "AI can merge these inputs into a prioritised matrix — but prioritisation criteria (pipeline impact, SEO difficulty, competitive urgency) are human decisions.",
          ),
          s(" Score gaps 1–5 on business impact before any AI draft begins."),
        ],
        [
          s("Archive audits prevent AI from reinventing content you already have — or contradicting published claims. "),
          x(
            "Feed your sitemap or CMS export to AI: 'identify duplicate topic coverage and flag outdated claims'. Marketing teams with ten years of blogs often discover three competing posts on the same keyword with inconsistent messaging.",
            "Consolidation gaps — merge-and-redirect opportunities — often outperform net-new AI posts for SEO.",
          ),
          s(" Run archive AI audit before quarterly planning; net-new production comes second."),
        ],
        [
          s("Gap analysis outputs should be decision-ready, not exhaustive lists. "),
          x(
            "A raw Ahrefs gap export may show 500 keywords. AI clustering groups them into twelve topic themes; strategists pick three aligned to quarterly bets.",
            "Attach owner, format, and funnel stage to each accepted gap. Rejected gaps go to a parking lot — preventing AI from resurrecting low-impact ideas every planning cycle.",
          ),
          s(" Cap accepted gaps per quarter — focus beats AI-enabled infinite backlog."),
        ],
      ],
      examples: [
        {
          title: "Semrush gap + AI clustering — B2B payments",
          body: "A payments fintech ran Semrush content gap against two competitors — 200+ keyword opportunities. ChatGPT clustered into themes; strategists prioritised 'chargeback prevention' aligned to a new product module. Eight cluster posts and one pillar over two quarters captured page-one rankings competitors held for years. AI organised the list; strategy picked the wedge.",
        },
        {
          title: "Sales call gap — missing objection handler",
          body: "Win-loss analysis revealed prospects asking about SOC 2 timing — no public content addressed it. Gap was invisible to SEO tools. One AI-assisted FAQ series and a sales one-pager cut security objection stall time in demos. Not every gap shows up in Ahrefs.",
        },
        {
          title: "Cannibalisation audit — HR tech consolidation",
          body: "An HR tech company used AI to analyse 400 blog URLs. Forty-seven posts targeted 'employee engagement' with conflicting definitions. They consolidated to one pillar and redirected losers — organic traffic rose 22% without new AI volume. Gap analysis includes fixing what you broke.",
        },
      ],
    }),
    buildSection({
      number: "1.4",
      title: "Topic and Angle Generation",
      subtitle: "Using AI to explore framing — after gaps are validated, not instead of strategy",
      take: "Topic generation selects what to write about; angle generation decides the distinctive framing — contrarian, data-led, practitioner, executive. AI generates dozens of angles from a validated gap and audience brief in minutes. Marketers who constrain prompts with positioning, proof points, and tone filters get usable options; those who accept the first output get commodity headlines.",
      why: "The same keyword supports ten angles — only one fits your brand and buyer this quarter. AI's value is exploring the option space quickly so strategists choose with eyes open, not defaulting to 'ultimate guide' templates.",
      paragraphs: [
        [
          s("Feed angle prompts with non-negotiable context blocks. "),
          x(
            "Paste: audience segment, validated pain point, competitive angle to avoid, proof points available, brand voice rules. Ask for ten angles with one-sentence rationale each — not full drafts.",
            "Example: 'Angles for mid-market CFOs on AP automation — we have customer data showing 18-day payback; avoid fear-mongering; no competitor naming'.",
          ),
          s(" Strategist picks two angles for testing; only one advances to brief and AI draft."),
        ],
        [
          s("Use AI to stress-test angles against sameness. "),
          x(
            "Prompt: 'Which of these angles would a competitor with ChatGPT produce identically?' Flag parity angles for extra proprietary data or expert quotes.",
            "Angles passing the parity test include original research, named customer outcomes, or methodology only your company owns.",
          ),
          s(" Kill 'ultimate guide' and 'everything you need to know' unless you truly deliver comprehensive original value."),
        ],
        [
          s("Angle generation pairs naturally with small-scale validation before production investment. "),
          x(
            "Test angles as LinkedIn polls, email subject A/B stubs, or sales slack reactions before commissioning long-form. AI drafts ten social posts from five angles; engagement picks the winner for pillar investment.",
            "This reduces wasted long-form production on angles that never resonated.",
          ),
          s(" Treat angles as hypotheses — AI expands hypotheses; market response selects."),
        ],
      ],
      examples: [
        {
          title: "Jasper campaign — angle matrix for product launch",
          body: "A project management SaaS launching AI features used Jasper with a structured angle prompt — practitioner efficiency vs executive risk vs IT governance. Sales voted on Slack; governance angle won for enterprise segment. Webinar and pillar content followed that angle only. AI explored; humans committed.",
        },
        {
          title: "LinkedIn poll — angle pre-test",
          body: "A marketing consultant AI-generated five post hooks on 'AI content strategy'. LinkedIn poll winner ('strategy before tools') became a newsletter series title; losers retired. Saved writing a full guide on an angle nobody clicked.",
        },
        {
          title: "Parity angle rejection — cybersecurity",
          body: "AI proposed 'Top 10 security tips for remote work' — identical to hundreds of competitor posts. Strategist added constraint: must reference their proprietary threat report data. Revised angles led to a data-led annual report format that earned press coverage. Constraint improved AI output.",
        },
      ],
    }),
    buildSection({
      number: "1.5",
      title: "Demand Mapping",
      subtitle: "Connecting topics to search, social, and buyer intent signals",
      take: "Demand mapping layers keyword volume, SERP difficulty, seasonal trends, and social conversation velocity onto your gap-prioritised topics. AI helps normalise data from Ahrefs, Google Trends, SparkToro, and LinkedIn analytics into a single prioritisation view — but demand without strategic fit still produces hollow traffic. Map demand to journey stage and commercial intent, not just volume.",
      why: "Chasing high-volume keywords alone wastes AI production capacity on awareness content when your pipeline bottleneck is decision-stage proof. Demand mapping aligns SEO and social opportunity with revenue mechanics.",
      paragraphs: [
        [
          s("Build a demand map with explicit intent labels. "),
          x(
            "Informational ('what is'), commercial investigation ('best tools for'), transactional ('pricing'), and navigational. AI can classify keyword lists by intent using SERP feature analysis and snippet patterns.",
            "Attach each topic to primary intent and secondary distribution channel — some topics win on search; others on LinkedIn or YouTube.",
          ),
          s(" Reject high-volume informational gaps when your quarter goal is demo requests — demand must serve the metric."),
        ],
        [
          s("Social demand signals differ from search — map both. "),
          x(
            "SparkToro or native LinkedIn hashtag analytics show where your audience congregates and what formats spread. A topic with moderate search volume may explode in practitioner LinkedIn threads.",
            "AI summarises 'audience questions from Reddit and Quora' for topical social demand — useful for angle refinement, not just blog titles.",
          ),
          s(" Dual-channel demand maps prevent over-investing in SEO assets for audiences that actually live on social."),
        ],
        [
          s("Seasonality and launch windows belong on the demand map. "),
          x(
            "Google Trends and historical CRM data reveal when buyers research your category. AI can draft a seasonal calendar overlay — but product launches and industry events are human inputs.",
            "Publishing AI content at peak demand with weak angle still underperforms; timing multiplies good strategy, does not fix bad.",
          ),
          s(" Review demand map monthly for trending topics — AI makes opportunistic content faster, not always wiser."),
        ],
      ],
      examples: [
        {
          title: "Ahrefs + Trends — seasonal B2B planning",
          body: "An accounting software team mapped 'year-end close' keyword spike to October–November. AI drafted calendar placeholders; strategists slotted pillar and email series ahead of peak. Organic demos rose 35% vs prior year flat publishing. Demand timing was the insight; AI filled the calendar.",
        },
        {
          title: "SparkToro — audience concentration surprise",
          body: "SparkToro showed a HR audience over-indexed on specific podcasts, not Google. Team shifted AI repurposing effort to guest pitch briefs and podcast snippet posts instead of more blogs. Pipeline from partner referrals rose — demand map redirected format, not just topic.",
        },
        {
          title: "High volume, wrong intent — martech caution",
          body: "A CRM vendor targeted 'what is CRM' — huge volume, low conversion. Demand map recategorized: awareness filler only. Resources shifted to 'CRM integration comparison' keywords with lower volume but 4x demo rate. AI still drafted both; strategy starved the vanity keyword.",
        },
      ],
    }),
    buildSection({
      number: "1.6",
      title: "Competitive Intelligence for Content",
      subtitle: "Learning from rival coverage without letting AI paraphrase your way to sameness",
      take: "Competitive content intelligence analyses what rivals publish, how they frame topics, which assets earn links and engagement, and where their narrative is weak. AI summarises competitor sitemaps, extracts messaging themes, and drafts battlecard updates — but your content strategy should exploit gaps and differentiation, not produce 'our version of their post'. Use AI for speed of analysis; use strategy for angle divergence.",
      why: "Marketers who AI-summarise competitor blogs and immediately draft 'similar but ours' content accelerate parity. Those who extract structural lessons — depth, format, proof — while committing to distinct angles build authority.",
      paragraphs: [
        [
          s("Automate competitor monitoring; manual synthesise strategic implications. "),
          x(
            "Tools like Crayon, Kompyte, or Ahrefs site alerts feed changes. AI weekly digest: 'new competitor pages on topic X, messaging shift toward Y'. Strategist asks: threat, opportunity, or ignore?",
            "Do not auto-feed competitor URLs into 'rewrite for our blog' prompts — that is a plagiarism and parity machine.",
          ),
          s(" Competitive intel informs angle choice; it should not dictate outline structure line-by-line."),
        ],
        [
          s("Analyse what earns engagement, not just what exists. "),
          x(
            "AI-assisted backlink and social share analysis on competitor URLs reveals which assets earned authority. Sometimes a rival's weakest post is your opportunity; sometimes their pillar is unbeatable head-on — flank with a subtopic cluster instead.",
            "Prompt AI: 'given this competitor pillar outline, suggest three subtopic flanks we could own with original data' — not 'write the same article'.",
          ),
          s(" Flanking beats frontal AI rewrites every time in crowded categories."),
        ],
        [
          s("Battlecards and sales intel close the loop from competitive content to revenue. "),
          x(
            "When competitors publish pricing changes or feature claims, AI drafts battlecard bullets from release notes plus your positioning doc. Content marketing aligns web copy and sales enablement in the same week.",
            "Competitive intelligence without sales distribution is academic — wire updates to Slack channels sales actually reads.",
          ),
          s(" Name a owner for competitive content response SLA — 48 hours for major rival launches."),
        ],
      ],
      examples: [
        {
          title: "Kompyte + Notion — weekly rival digest",
          body: "A sales enablement platform uses Kompyte alerts plus ChatGPT summarisation into Notion. Marketing receives 'competitor X launched AI feature page — claims A, B, C'. Content team publishes comparison update and FAQ within 72 hours. Sales cites fresher intel on calls. AI speed; human positioning.",
        },
        {
          title: "Ahrefs top pages — flank don't copy",
          body: "Competitor's top SEO asset was a 10,000-word 'state of industry' report. AI analysis suggested flanking with practitioner checklists and calculator tools instead of another report. Lower keyword overlap; higher conversion on tools. Intelligence chose asymmetry.",
        },
        {
          title: "Paraphrase trap — agency fired",
          body: "An agency fed rival blogs into Jasper 'rewrite in our voice'. Pages ranked briefly; legal received similarity complaints; brand sounded derivative. Client brought competitive analysis in-house with strict 'no line-level source' policy. AI now used for theme extraction only.",
        },
      ],
    }),
    buildSection({
      number: "1.7",
      title: "Editorial Calendar Design",
      subtitle: "Goals, cadence, and dependencies before AI fills the grid",
      take: "An editorial calendar translates strategy into scheduled commitments: asset type, owner, funnel stage, distribution channel, and success metric per slot. AI scaffolds calendar rows from approved topic list and demand map — suggesting cadence, repurposing chains, and dependency notes — but humans set realistic capacity and protect quality floors. Calendars optimising for volume alone recreate the content factory.",
      why: "The calendar is where strategy meets operations. A weak calendar turns AI into a production treadmill; a strong one sequences pillar builds, cluster support, sales launches, and repurposing waves with clear metrics.",
      paragraphs: [
        [
          s("Design calendar tiers: flagship, core, and opportunistic. "),
          x(
            "Flagship — quarterly pillar, original research, major launch. Core — weekly cluster support, email nurture. Opportunistic — trending response, AI-assisted fast takes with short shelf life.",
            "AI drafts opportunistic slots; flagship slots get full brief, expert interview, and legal review. Mixing tiers prevents everything from receiving the same shallow treatment.",
          ),
          s(" Cap flagship count — teams over-schedule heroes and under-resource them."),
        ],
        [
          s("Build repurposing into calendar rows, not as an afterthought. "),
          x(
            "One pillar maps to: email feature, four LinkedIn posts, sales one-pager, webinar abstract. AI generates repurposing checklist from pillar brief when calendar row is created.",
            "CoSchedule, Notion, or Airtable templates with repurposing child tasks ensure multiplication is planned, not hoped for.",
          ),
          s(" If the calendar has no distribution child tasks, the parent asset is half a plan."),
        ],
        [
          s("Capacity planning is the calendar's hardest human job. "),
          x(
            "AI makes drafting faster but not review, design, or promotion faster. A team of two cannot sustain eight AI-assisted long-form pieces weekly with quality.",
            "Model hours per tier; let AI suggest slots but cut to fit realistic FTE. Leadership sees trade-offs explicitly.",
          ),
          s(" Publish calendar adherence and pipeline metric together in monthly reviews — not post count alone."),
        ],
      ],
      examples: [
        {
          title: "Airtable + AI — repurposing chain template",
          body: "A B2B team built Airtable calendar with linked repurposing tasks. Zapier sends approved brief to ChatGPT for social stub generation when pillar date is set. Editors receive drafts two weeks before pillar launch — distribution ready at publish. Calendar became a workflow engine, not a spreadsheet graveyard.",
        },
        {
          title: "HubSpot calendar — tier labels",
          body: "Marketing ops added Tier 1/2/3 labels in HubSpot campaigns. Tier 1 required CMO angle approval; Tier 3 allowed AI-first short posts. Review bottlenecks cleared because approvers knew which slots needed depth. Quality rose while total output stayed flat.",
        },
        {
          title: "Overstuffed calendar collapse",
          body: "A startup AI-generated a 90-day calendar of 60 posts. Team burned out by week four; social and sales ignored output. They cut to 12 core assets with repurposing multipliers — effective reach doubled with less raw writing. Calendar lesson: AI fills slots; humans must empty impossible ones.",
        },
      ],
    }),
    buildSection({
      number: "1.8",
      title: "The Marketer Decision Lens — Keeping Strategy Human",
      subtitle: "Six checks before AI touches your content plan this quarter",
      take: "Before scaling AI content production, run six checks: (1) Is audience insight sourced from first-party data? (2) Does each topic trace to a validated gap? (3) Is the angle differentiated, not parity? (4) Does demand mapping match your pipeline metric? (5) Does competitive intel inform flanking, not copying? (6) Does the calendar respect capacity and tiered quality? AI accelerates only after humans answer yes — strategy stays human; execution gets faster.",
      why: "This lens fits on one slide for leadership and agency kickoffs. It prevents the most expensive mistake in AI content marketing: confusing production speed with strategic progress.",
      paragraphs: [
        [
          s("Check one and two: truth and relevance. "),
          x(
            "Audience and gap — can you cite the interview, CRM segment, or sales data behind this topic? If the only source is AI persona fiction, stop.",
            "Gaps without business impact scores are hobbies. Require impact 3+ before calendar placement.",
          ),
          s(" Truth and relevance gates protect brand and pipeline simultaneously."),
        ],
        [
          s("Check three and four: differentiation and demand fit. "),
          x(
            "Angle parity test: would a competitor produce 80% the same with ChatGPT? Add proprietary proof or kill the angle.",
            "Demand fit: does primary intent align with quarterly metric? Awareness traffic does not fix decision-stage pipeline holes.",
          ),
          s(" Differentiation and demand are where strategy earns its salary — AI cannot substitute."),
        ],
        [
          s("Check five and six: competitive ethics and operational reality. "),
          x(
            "Competitive response uses themes and flanks — never line-level source rewriting.",
            "Calendar capacity: total flagship hours ≤ available strategist and editor FTE. AI savings fund promotion, not infinite slots.",
          ),
          s(" Run the six-check audit in quarterly planning and before any agency AI content SOW signing."),
        ],
      ],
      examples: [
        {
          title: "CMO planning offsite — six-check poster",
          body: "A CMO printed the six checks for a planning offsite. Half the proposed AI content backlog failed gap or parity checks. Team reallocated budget from Jasper seats to customer research interviews. Next quarter's smaller calendar outperformed prior volume on assisted pipeline.",
        },
        {
          title: "Agency SOW — strategy gate clause",
          body: "A growth lead added 'no AI production without signed brief meeting six-check criteria' to agency contracts. Agencies pushed back initially; revision rates dropped 50% because briefs improved. Contract language enforced strategy-first culturally.",
        },
        {
          title: "Weekly standup — one check rotation",
          body: "Content team rotates one lens question per weekly standup — fast ritual, no new software. Month one surfaced chronic demand-metric mismatch; they shifted keyword targets. Small discipline compounds.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A director asks the team to 'start using ChatGPT for next month's blogs' with no brief. What is the strongest marketer response?",
      options: [
        "Agree — AI makes blogs faster.",
        "Insist on strategy-first: audience, validated gap, angle, and metric before AI drafts — production without strategy is content theatre.",
        "Reject all AI blogging.",
        "Let interns prompt ChatGPT and fix later.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Strategy before production — AI accelerates execution on a brief you believe in. Re-read sections 1.1 and 1.8.",
      wrongFeedback:
        "Opening generative tools before strategy produces volume without pipeline. Gate on audience, gap, and angle first. Re-read sections 1.1 and 1.8.",
    },
    {
      kind: "order",
      q: "Order the strategy-first content workflow from first step to last.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Audience intelligence from first-party and qualitative sources",
        "Gap analysis across search, competitors, and journey",
        "Topic and angle selection with parity test",
        "Demand mapping to intent and channels",
        "Editorial calendar with tiers and capacity",
        "AI-assisted production from approved brief",
      ],
      correctFeedback:
        "Right. Insight → gaps → angles → demand → calendar → production. Re-read section 1.1.",
      wrongFeedback:
        "Production comes after calendar planning, not before audience work. Re-read section 1.1.",
    },
    {
      kind: "categorize",
      q: "Sort each task into human-led strategy vs AI-accelerated execution.",
      categories: ["Human-led strategy", "AI-accelerated execution"],
      items: [
        { text: "Choosing quarterly pillar topic aligned to pipeline goal.", category: 0 },
        { text: "Clustering Gong call transcripts into objection themes.", category: 1 },
        { text: "Scoring content gaps 1–5 on business impact.", category: 0 },
        { text: "Drafting ten angle options from an approved brief.", category: 1 },
        { text: "Rejecting parity angles that competitors could copy.", category: 0 },
        { text: "Classifying Ahrefs keyword list by search intent.", category: 1 },
      ],
      correctFeedback:
        "Right. Humans own prioritisation, judgment, and differentiation; AI synthesises volume and drafts options. Re-read sections 1.2–1.5.",
      wrongFeedback:
        "Ask: does this require business judgment and accountability? If yes, human-led. Re-read sections 1.2–1.5.",
    },
    {
      q: "An intern asks ChatGPT to 'write our buyer persona' with no customer data. What risk does section 1.2 highlight?",
      options: [
        "No risk — AI personas are standard.",
        "Hallucinated persona — plausible fiction that may not match real buyers, wasting content targeting.",
        "Personas are illegal with AI.",
        "Only Jasper can write personas.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Audience intelligence needs first-party inputs; generative-only personas are fiction. Re-read section 1.2.",
      wrongFeedback:
        "AI can synthesise real research but cannot replace it. Unsourced personas misdirect content. Re-read section 1.2.",
    },
    {
      q: "A rival publishes a hit pillar page. Your agency proposes Jasper 'rewrite it in our voice.' Best strategic move?",
      options: [
        "Approve — faster SEO.",
        "Use competitive intel to flank with distinct subtopics or formats — avoid line-level paraphrase parity.",
        "Copy structure exactly but change brand color.",
        "Stop all competitor monitoring.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Competitive intelligence informs asymmetry and flanking, not derivative rewrites. Re-read section 1.6.",
      wrongFeedback:
        "Paraphrase workflows create parity and legal risk. Flank with differentiated angles. Re-read section 1.6.",
    },
    {
      kind: "categorize",
      q: "Classify each editorial calendar practice as healthy vs content-factory trap.",
      categories: ["Healthy calendar practice", "Content factory trap"],
      items: [
        { text: "Tier 1 flagship assets with named approver and metric.", category: 0 },
        { text: "90 AI-generated posts in 90 days with no capacity model.", category: 1 },
        { text: "Repurposing child tasks linked to each pillar row.", category: 0 },
        { text: "Scheduling topics that failed gap impact scoring.", category: 1 },
        { text: "Monthly review of calendar adherence plus pipeline.", category: 0 },
        { text: "Volume KPI as primary success measure.", category: 1 },
      ],
      correctFeedback:
        "Right. Healthy calendars tier quality, plan distribution, and measure pipeline — factories optimise post count. Re-read sections 1.7 and 1.8.",
      wrongFeedback:
        "Factories chase volume without tiers, capacity, or metrics. Re-read sections 1.7 and 1.8.",
    },
  ],
});
