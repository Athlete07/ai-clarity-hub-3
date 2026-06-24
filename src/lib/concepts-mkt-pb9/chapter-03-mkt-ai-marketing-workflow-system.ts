import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter03MktAiMarketingWorkflowSystem = buildChapter({
  slug: "mkt-ai-marketing-workflow-system",
  number: 3,
  shortTitle: "The AI Marketing Workflow System",
  title: "The AI Marketing Workflow System",
  readingMinutes: 24,
  summary:
    "The AI marketing workflow system is a personal operating rhythm: daily intelligence and monitoring, weekly content production, campaign planning cycles, monthly analytics, quarterly strategy refresh, plus a compounding prompt library and knowledge management practice. This chapter maps each cadence with AI assistance points, human gates, and tools — ending with a workflow mapping exercise to design habits that maximise leverage.",
  keyTakeaway:
    "Excellence in AI-era marketing is rhythmic, not heroic. Design daily, weekly, monthly, and quarterly workflows with explicit AI steps and human gates; maintain prompt library and knowledge base as compounding assets. Map your recurring work once — then improve the system every retro.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "3.1",
      title: "The Daily AI Marketing Routine",
      subtitle: "Morning intelligence brief, content review, campaign monitoring, and communication production — the daily rhythm of an AI-augmented marketer",
      take: "Daily routine anchors attention: morning intelligence brief (AI-summarised news, competitor moves, performance anomalies), campaign monitoring check (spend pacing, creative fatigue signals), communication production window (emails, Slack updates, quick responses), and content review queue (approve or send back AI-assisted drafts). Block 90 minutes morning for deep work before reactive mode. AI handles first-pass synthesis; humans decide what matters and what gets action. Same routine daily reduces decision fatigue.",
      why: "Without daily rhythm, marketers react to inbox and never compound workflow improvements.",
      paragraphs: [
        [
          s("Start with AI-assisted morning brief — curated, not firehose. "),
          x(
            "Prompt: summarise overnight performance deltas, competitor content, industry news relevant to ICP — max five bullets with links. Perplexity, Claude, or RSS + LLM pipeline.",
            "Unfiltered news consumption burns 60 minutes without strategic value.",
          ),
          s(" Time-box brief to 15 minutes — one action item captured to task system."),
        ],
        [
          s("Midday campaign health check with exception-only focus. "),
          x(
            "Dashboard rules: alert if CPA +20% WoW, frequency >4, spend pacing >110%. AI narrates exceptions from export; human investigates root cause.",
            "Reviewing full dashboards daily when nothing changed wastes attention.",
          ),
          s(" Log exceptions and actions — feeds weekly retro."),
        ],
        [
          s("Afternoon communication and review batch. "),
          x(
            "Batch: stakeholder emails, social responses, editor review of AI drafts queued overnight. Batching beats context-switching between strategy and micro-tasks.",
            "Leave Slack default-off during morning deep block — async culture required.",
          ),
          s(" End day: tomorrow's top three priorities written — reduces morning drift."),
        ],
      ],
      examples: [
        {
          title: "Morning brief — B2B demand gen",
          body: "Demand gen manager automated morning brief from GA4, HubSpot, and LinkedIn Ad exports via Claude project. Fifteen-minute review replaced 45-minute manual tab switching. Caught pacing issue on day two of campaign — saved $12K overspend.",
        },
        {
          title: "Review batch — content lead",
          body: "Content lead reviews AI drafts 4–5pm daily — authors queue by 3pm. Predictable SLA reduced author anxiety and weekend crunches. Revision turnaround 24 hours guaranteed.",
        },
        {
          title: "Reactive trap — solo marketer",
          body: "Solo marketer had no routine — inbox drove day. Implemented brief + batch review only. Strategic project (positioning doc) completed in two weeks after months of deferral. Routine freed cognition.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-era-ch3-workflow-rhythm",
      type: "flow",
      title: "AI Marketing Workflow Rhythm",
      caption:
        "Daily intelligence and monitoring → weekly content → monthly analytics → quarterly strategy — with prompt library compounding throughout.",
    }),
    buildSection({
      number: "3.2",
      title: "The Weekly Content Workflow",
      subtitle: "Brief creation, AI production, human editing, scheduling, and performance review — the weekly content cycle end to end",
      take: "Weekly content workflow: Monday plan and briefs from calendar; Tuesday–Wednesday AI production and human edit; Thursday design and scheduling; Friday performance snapshot and retro. Each piece flows: brief approval → AI draft → editor rubric → design handoff → CMS schedule → analytics tag. Bottleneck is usually brief quality or review capacity — not AI speed. Weekly retro asks which prompt change improves next week.",
      why: "Content chaos comes from missing weekly container. Rhythm turns AI speed into predictable publishing.",
      paragraphs: [
        [
          s("Monday: align calendar to strategy priorities — briefs before production. "),
          x(
            "Each brief: audience, angle, CTA, SEO target if applicable, references. No brief, no AI run — prevents filler content.",
            "Calendar driven only by SEO volume targets produces undifferentiated slop.",
          ),
          s(" Cap weekly commitments to review capacity — quality ceiling is human edits."),
        ],
        [
          s("Tuesday–Wednesday: AI production sprints with parallel human edit. "),
          x(
            "Authors batch prompts Tuesday AM; editors batch review Wednesday. Async handoff in Notion or CMS comments.",
            "Sequential one-piece-at-a-time underuses AI parallelism.",
          ),
          s(" Track cycle time per piece — optimise stages with highest rework."),
        ],
        [
          s("Friday: lightweight performance review and prompt tweak. "),
          x(
            "Top and bottom performers — hypothesis why. Update prompt library with winning patterns; retire failures.",
            "Friday retro skipped first — library stagnates, same mistakes repeat.",
          ),
          s(" One improvement action assigned owner for next Monday."),
        ],
      ],
      examples: [
        {
          title: "Weekly rhythm — SaaS blog",
          body: "SaaS blog team runs strict weekly cycle. Publish cadence reliable three years. AI introduced — same rhythm, 40% more depth per post (more examples, data) not more posts. Organic traffic compounding.",
        },
        {
          title: "Brief gate — quality lift",
          body: "Team instituted 'brief approval by strategist' gate. AI drafts rejected pre-brief dropped 90%. Average time on page rose 22% — strategy upstream beat faster drafts downstream.",
        },
        {
          title: "Overproduction — SEO trap",
          body: "SEO lead pushed 12 AI posts weekly without edit capacity. Thin content hurt domain. Reset to four edited posts weekly — rankings recovered in two months. Weekly workflow capacity matched to gates.",
        },
      ],
    }),
    buildSection({
      number: "3.3",
      title: "The Campaign Planning Workflow",
      subtitle: "Brief, AI research, strategy, content plan, production, launch, monitoring, and reporting — full campaign cycle with AI at each stage",
      take: "Campaign workflow spans weeks: charter (objective, audience, offer, KPIs) → AI-assisted research (competitive, audience quotes, past performance) → strategy doc human-approved → content and channel plan → production via weekly content workflow → launch checklist → monitoring cadence → post-campaign report. AI accelerates research synthesis and variant production; humans own positioning, budget, and go/no-go. Template campaign hub in Notion or Asana — clone per launch.",
      why: "Campaigns fail from skipped stages, not weak AI. Workflow ensures research and strategy precede production.",
      paragraphs: [
        [
          s("Charter and research before creative — non-negotiable sequence. "),
          x(
            "AI research pack: competitor messaging scrape summary, customer review themes, prior campaign learnings from knowledge base. Strategist extracts insight — not copy-paste to brief.",
            "Skipping research produces recycled angles AI defaults to.",
          ),
          s(" Research pack attached to campaign hub — audit trail for retros."),
        ],
        [
          s("Production phase reuses weekly content workflow at campaign scale. "),
          x(
            "Content matrix maps assets to channels; parallel AI drafts per cell; unified editor review for message consistency.",
            "Channel silos produce contradictory campaign stories.",
          ),
          s(" Launch checklist: tracking, UTMs, audiences, creative specs — ops owned."),
        ],
        [
          s("Monitoring and reporting close loop to knowledge base. "),
          x(
            "Daily exception monitoring during flight; post-campaign AI draft report human-verified; learnings tagged and stored for next charter.",
            "Campaigns without documented learnings repeat errors annually.",
          ),
          s(" Retro within ten business days of campaign end — attendance mandatory."),
        ],
      ],
      examples: [
        {
          title: "Campaign hub — product launch",
          body: "Product launch cloned hub template: charter, research, 24-asset matrix, launch checklist. AI cut research phase from ten days to four. Message consistency score from sales feedback highest in company history.",
        },
        {
          title: "Research miss — competitive blind spot",
          body: "Campaign launched without AI-assisted competitive scan — competitor simultaneous promotion diluted results. Post-mortem mandated research pack gate. Next campaign preempted competitor angle in messaging — share of voice won.",
        },
        {
          title: "Reporting automation — ABM",
          body: "ABM campaign report drafted by AI from Salesforce and LinkedIn exports; marketer added narrative and recommendations. Report delivered day 3 post-campaign vs day 12 prior. Faster learnings fed Q2 targeting.",
        },
      ],
    }),
    buildSection({
      number: "3.4",
      title: "The Monthly Analytics Workflow",
      subtitle: "Data pull, AI analysis, insight synthesis, reporting, recommendation, and planning adjustment — the monthly intelligence cycle",
      take: "Monthly analytics rhythm: week-one data close and validation; week-two AI-assisted exploration and hypothesis generation; week-three insight synthesis and stakeholder draft; week-four presentation and planning adjustments. AI pulls patterns from clean exports — humans validate definitions and decide actions. Monthly cycle connects to budget and content calendar updates. One source of truth dashboard refreshed before analysis — never analyse stale or disputed data.",
      why: "Monthly intelligence without workflow becomes rushed deck theater. Rhythm builds finance trust.",
      paragraphs: [
        [
          s("Week one: data close with RevOps — definitions locked. "),
          x(
            "Reconcile GA4, CRM, and ads to metric dictionary. Fix tracking breaks before analysis — AI on bad data wastes month.",
            "Disputed definitions should be resolved in data council, not in board room.",
          ),
          s(" Export validated dataset to analysis environment — version filed."),
        ],
        [
          s("Week two: AI exploration with neutral prompts. "),
          x(
            "Prompts: 'what changed MoM by channel with counts', 'where funnel conversion moved', 'hypotheses for pipeline dip'. Marketer validates top hypotheses.",
            "Leading questions produce comforting lies.",
          ),
          s(" Document hypotheses in monthly hub — track which confirmed later."),
        ],
        [
          s("Week three–four: narrative, recommendations, planning hooks. "),
          x(
            "AI drafts executive summary; human adds decisions requested and resource asks. Recommendations tie to next month calendar and spend.",
            "Insights without recommended actions are academic exercises.",
          ),
          s(" Archive monthly pack to knowledge base — YoY comparison aid."),
        ],
      ],
      examples: [
        {
          title: "Monthly cadence — CMO rhythm",
          body: "CMO institutionalised four-week analytics calendar company-wide. Marketing-finance variance meetings dropped from ad hoc firefights to scheduled review. Board confidence in marketing data cited in annual survey.",
        },
        {
          title: "Hypothesis validation — ecommerce",
          body: "AI suggested cart abandon spike from email deliverability; human validated SPF issue with ops. Fix recovered $180K monthly revenue. Monthly workflow caught what daily panic missed.",
        },
        {
          title: "Skipped validation — wrong cut",
          body: "AI narrative implied paid search failure; human skipped validation — actually tracking outage. Budget cut mistakenly. Added week-one validation gate permanently.",
        },
      ],
    }),
    buildSection({
      number: "3.5",
      title: "The Quarterly Strategy Workflow",
      subtitle: "Competitive review, performance audit, strategy adjustment, and planning refresh — quarterly rhythm that keeps strategy current",
      take: "Quarterly workflow elevates from monthly tactics: competitive positioning review, ICP and messaging audit, channel mix reassessment, budget reforecast, and OKR refresh. AI synthesises quarter's campaign learnings, market shifts, and performance trends — strategist team decides pivots. Quarterly offsite or workshop with pre-read AI-generated pack (human-verified). Output: updated positioning doc, channel plan, and resource allocation. Prevents annual strategy from going stale in fast markets.",
      why: "AI accelerates execution daily — without quarterly lift, teams optimise locally while strategy drifts.",
      paragraphs: [
        [
          s("Pre-read pack assembled two weeks before strategy session. "),
          x(
            "Contents: win/loss themes, content performance tiers, competitive messaging changes, budget vs outcome, customer interview synthesis.",
            "Strategy session without pre-read debates anecdotes not data.",
          ),
          s(" AI drafts pack sections; owners verify and annotate disagreements."),
        ],
        [
          s("Workshop decisions documented as strategy deltas — not vibes. "),
          x(
            "Explicit: what we stop, start, continue; messaging changes; channel reallocation; hiring implications.",
            "Strategy slides without decision log disappear into drive.",
          ),
          s(" Communicate deltas to sales and product within one week."),
        ],
        [
          s("Cascade quarterly decisions to monthly and weekly workflows. "),
          x(
            "Updated positioning feeds brief templates; channel mix changes calendar; budget shifts monitoring thresholds.",
            "Quarterly strategy unconnected to weekly briefs is wallpaper.",
          ),
          s(" Q+1 first monthly review checks cascade compliance."),
        ],
      ],
      examples: [
        {
          title: "Quarterly pivot — SMB to enterprise",
          body: "Q2 review showed SMB CAC unsustainable; enterprise pipeline rising. Quarterly workflow reprioritised content and ABM. H2 enterprise revenue 38% of new ARR vs 12% H1 — pivot traceable to quarterly decision log.",
        },
        {
          title: "Competitive refresh — fintech",
          body: "AI competitive pack flagged three rivals adopting same claim. Quarterly messaging workshop differentiated on compliance and support. Win rate in competitive deals rose 9 points next quarter.",
        },
        {
          title: "Stale strategy — annual only",
          body: "Company strategy annual only; AI sped execution on wrong positioning nine months. Introduced quarterly lite-review — course corrections cheaper mid-year.",
        },
      ],
    }),
    buildSection({
      number: "3.6",
      title: "The Prompt Library as a Professional Asset",
      subtitle: "Building, organising, and maintaining your personal library of marketing prompts — compounding asset that reduces rework and improves output quality",
      take: "Personal prompt library complements team library: your best channel prompts, analysis templates, brief structures, and iteration chains. Organise by workflow stage; tag with last validated date and model version. Weekly habit: one improvement or new prompt from retro. Personal library accelerates your leverage even when team library is immature. Portability matters — career asset you take with anonymised patterns.",
      why: "Marketers without personal library reinvent prompts weekly — uncompounded labour.",
      paragraphs: [
        [
          s("Capture prompts immediately when iteration succeeds — not from memory Friday. "),
          x(
            "Template: context, prompt text, model, output quality score, notes. Store in Notion, Obsidian, or tool-native Projects.",
            "Memory-based libraries lose nuance that made prompt work.",
          ),
          s(" Weekly 15-minute library grooming — archive failures, promote winners."),
        ],
        [
          s("Chain prompts for multi-step workflows — document sequence. "),
          x(
            "Research chain → outline chain → draft chain → edit chain. Each step separate prompt often beats monolithic mega-prompt.",
            "Chains need version sync when voice doc updates.",
          ),
          s(" Link chains to calendar workflows — which chain for weekly blog."),
        ],
        [
          s("Revalidate after major model upgrades quarterly. "),
          x(
            "Run golden test set: five standard tasks, compare output quality 1–5. Update or retire prompts scoring below 4.",
            "Legacy prompts decay silently — output drifts off-brand.",
          ),
          s(" Share personal improvements to team library when generalisable."),
        ],
      ],
      examples: [
        {
          title: "Personal library — consultant marketer",
          body: "Fractional CMO maintained personal library across clients — anonymised patterns. Onboarding new client cut from three weeks to one for content workflow. Library cited as IP in contract renewal.",
        },
        {
          title: "Chain documentation — email marketer",
          body: "Email marketer documented four-step chain for campaign emails. Consistent 4.5+ brand scores; junior freelancer ran chain with minimal supervision. Personal asset became team SOP.",
        },
        {
          title: "Decay caught — model upgrade",
          body: "Claude upgrade broke compliance block behaviour in old prompt. Quarterly revalidation caught issue; updated prompt in one hour. Without habit, off-brand email nearly shipped.",
        },
      ],
    }),
    buildSection({
      number: "3.7",
      title: "Knowledge Management for AI-Era Marketers",
      subtitle: "Capturing, organising, and retrieving competitive intelligence, customer insight, and campaign learning that makes AI-assisted work better over time",
      take: "Knowledge management feeds AI context: customer interview transcripts, win/loss notes, campaign retros, competitive snapshots, brand decisions log. Structure for retrieval — tags, dates, source — not graveyard folders. Claude Projects and RAG tools consume organised knowledge; garbage folders produce garbage synthesis. Weekly capture habit: one insight logged from customer or sales conversation. Knowledge compounds AI output quality more than better model tier.",
      why: "AI without your organisation's knowledge is generic. KM is the moat for marketing intelligence.",
      paragraphs: [
        [
          s("Define minimum viable knowledge categories. "),
          x(
            "Customer voice, competitive intel, campaign learnings, brand decisions, performance benchmarks. One home — Notion, Confluence — linked from prompts.",
            "Scattered Google Docs defeat retrieval — centralise or accept generic AI.",
          ),
          s(" Assign KM hygiene owner if team; personal discipline if solo."),
        ],
        [
          s("Capture at moment of insight — frictionless templates. "),
          x(
            "Slack workflow to Notion: source, quote, implication, date. Sales call notes tagged account and theme.",
            "Quarterly batch 'document everything' sprints fail — habit beats heroics.",
          ),
          s(" Monthly KM review: prune outdated, merge duplicates, tag gaps for research."),
        ],
        [
          s("Attach knowledge to AI workflows explicitly. "),
          x(
            "Brief template links three relevant past learnings. Research prompt includes 'search customer voice folder for [theme]'.",
            "Expecting AI to find unnamed files in drive does not work.",
          ),
          s(" Measure retrieval use — if never cited, improve structure or relevance."),
        ],
      ],
      examples: [
        {
          title: "Customer voice hub — product marketing",
          body: "Product marketing indexed 80 interview clips by pain theme. Campaign briefs link hub; AI drafts use verbatim customer language. Message resonance scores beat generic AI copy in tests consistently.",
        },
        {
          title: "Retro archive — demand gen",
          body: "Two years campaign retros searchable by channel and offer type. New campaign AI research prompt pulls similar past campaigns. Repeated mistakes (weak CTA on webinar) eliminated.",
        },
        {
          title: "KM neglect — generic output",
          body: "Team relied on AI without KM investment — outputs interchangeable with competitors. Six-week KM sprint; next campaign differentiated on documented customer proof points. CTR lift 31%.",
        },
      ],
    }),
    buildSection({
      number: "3.8",
      title: "Marketer Decision Lens: Designing Your Personal Workflow System",
      subtitle: "Workflow mapping exercise that identifies recurring marketing work, AI assistance opportunities, and system design that builds habit",
      take: "Personal workflow design exercise: list recurring tasks by cadence (daily, weekly, monthly, quarterly); mark AI candidate vs human-only; design gates and tools; block calendar to match rhythm; commit one library and one KM improvement weekly. Decision lens: if task repeats thrice, systematise; if AI output needs same fix thrice, fix prompt not output. Review system at day 30 and 90 — adjust calendar blocks before buying tools.",
      why: "Personal OS separates operators who compound from marketers who hustle randomly.",
      paragraphs: [
        [
          s("Map recurring work on single page — cadence columns. "),
          x(
            "Include: meetings, reports, content, campaigns, admin. Highlight top five time consumers — optimise those first.",
            "Mapping reveals hidden rework — same report rebuilt three ways.",
          ),
          s(" Share map with manager for alignment on priorities and protected time."),
        ],
        [
          s("Insert AI steps and gates per row — avoid blanket 'use AI'. "),
          x(
            "Each row: input, AI action, human gate, output destination, tool. Rows without gate flagged high-risk.",
            "Blanket AI creates inconsistent quality — surgical insertion wins.",
          ),
          s(" Pilot one weekly workflow redesign before rolling all cadences."),
        ],
        [
          s("Calendar blocks enforce rhythm — system fails without time protection. "),
          x(
            "Recurring holds: morning brief, review batch, Friday retro, monthly analysis week-one. Decline conflicting meetings policy.",
            "Workflow docs without calendar blocks are aspirational fiction.",
          ),
          s(" Day 30 retro: what to stop, start, continue — document in KM."),
        ],
      ],
      examples: [
        {
          title: "Workflow map — first 90 days",
          body: "Senior marketer mapped cadences, redesigned weekly content and monthly analytics only. Freed 6 hours weekly; invested in quarterly strategy prep. Promotion case built on system design evidence, not hustle narrative.",
        },
        {
          title: "Calendar protection — CMO coach",
          body: "Executive coach required client to block daily brief and Friday retro. Client resisted — then cited as turning point for strategic project completion. Personal workflow design is leadership behaviour.",
        },
        {
          title: "Tool before system — mistake",
          body: "Marketer bought AI suite before mapping workflows. Features unused; calendar unchanged. Reset: map first, tool second. Utilisation rose from 20% to 78% same licences.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Correct order of marketing workflow rhythms from most frequent to least?",
      options: [
        "Quarterly → monthly → weekly → daily",
        "Daily → weekly → monthly → quarterly",
        "Weekly only — other cadences optional",
        "Monthly → daily → quarterly → weekly",
      ],
      correct: 1,
      correctFeedback:
        "Right. Daily through quarterly layers compound. Re-read section 3.1 and diagram.",
      wrongFeedback:
        "Workflow rhythm stacks daily to quarterly. Re-read section 3.1.",
    },
    {
      kind: "order",
      q: "Order weekly content workflow stages from first to last.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Monday briefs and calendar alignment",
        "AI production sprint",
        "Human editor batch review",
        "Design and scheduling",
        "Friday performance retro and prompt tweak",
      ],
      correctFeedback:
        "Right. Brief before production; retro closes loop. Re-read section 3.2.",
      wrongFeedback:
        "Briefs precede production; retro follows publish. Re-read section 3.2.",
    },
    {
      kind: "categorize",
      q: "Sort tasks into daily routine vs monthly analytics workflow.",
      categories: ["Daily routine", "Monthly analytics"],
      items: [
        { text: "Exception-based campaign pacing check.", category: 0 },
        { text: "MoM funnel hypothesis validation.", category: 1 },
        { text: "15-minute morning intelligence brief.", category: 0 },
        { text: "Data close with RevOps week one.", category: 1 },
        { text: "Afternoon draft review batch.", category: 0 },
        { text: "Executive narrative and recommendations.", category: 1 },
      ],
      correctFeedback:
        "Right. Daily monitors; monthly analyses deeply. Re-read sections 3.1 and 3.4.",
      wrongFeedback:
        "Daily is brief and monitor; monthly is close and synthesise. Re-read sections 3.1 and 3.4.",
    },
    {
      q: "Campaign workflow — what must complete before AI creative production?",
      options: [
        "Launch checklist and paid ads live",
        "Charter and AI-assisted research pack approved",
        "Post-campaign report draft",
        "Quarterly strategy offsite only",
      ],
      correct: 1,
      correctFeedback:
        "Right. Research and charter precede production. Re-read section 3.3.",
      wrongFeedback:
        "Charter and research come before creative production. Re-read section 3.3.",
    },
    {
      q: "Personal prompt library revalidation is triggered when?",
      options: [
        "Never — prompts work forever",
        "After major model upgrades and during quarterly golden tests",
        "Only when leaving the company",
        "Daily for every prompt used",
      ],
      correct: 1,
      correctFeedback:
        "Right. Revalidate on model changes and quarterly. Re-read section 3.6.",
      wrongFeedback:
        "Prompts decay — revalidate quarterly and after upgrades. Re-read section 3.6.",
    },
    {
      kind: "categorize",
      q: "Match personal workflow design step to outcome.",
      categories: ["Core system design step", "Premature optimisation"],
      items: [
        { text: "Map recurring tasks by cadence.", category: 0 },
        { text: "Buy enterprise AI suite before mapping.", category: 1 },
        { text: "Block calendar for review batch.", category: 0 },
        { text: "Skip gates to save time.", category: 1 },
        { text: "Day 30 stop/start/continue retro.", category: 0 },
        { text: "Adopt every new model launch immediately.", category: 1 },
      ],
      correctFeedback:
        "Right. Map, block time, retro — tools follow system. Re-read section 3.8.",
      wrongFeedback:
        "Design system before tools; gates are non-negotiable. Re-read section 3.8.",
    },
  ],
});
