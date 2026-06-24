import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter02MktContentPillarClusterArchitecture = buildChapter({
  slug: "mkt-content-pillar-cluster-architecture",
  number: 2,
  shortTitle: "Pillar & Cluster Architecture",
  title: "Content Pillar & Cluster Architecture",
  readingMinutes: 24,
  summary:
    "Pillar and cluster architecture organises content into authority hubs and supporting spokes — building topical depth search engines reward and buyers need across the journey. AI accelerates cluster mapping, internal link suggestions, and draft scaffolding — but architecture is a strategic investment decision. Marketers who design pillars before production avoid scattered blogs that compete with themselves.",
  keyTakeaway:
    "One pillar, many clusters, deliberate internal links. AI helps map subtopics and draft cluster posts from pillar briefs — humans own pillar selection, journey sequencing, and when to refresh versus retire. Architecture compounds SEO and sales enablement; random publishing does not.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "2.1",
      title: "The Pillar-Cluster Model",
      subtitle: "Hub-and-spoke content architecture — and why AI makes it feasible at last",
      take: "A pillar page comprehensively covers a core topic your brand wants to own — typically 3,000+ words, multimedia, and original insight. Cluster articles address specific subtopics, long-tail keywords, and journey-stage questions, each linking back to the pillar. Search engines interpret this hub-and-spoke structure as topical authority; buyers find answers at the depth they need. AI lowers the cost of building clusters once the pillar strategy is set — but cannot choose which hub deserves years of investment.",
      why: "Without architecture, AI-assisted blogging produces isolated posts that cannibalise keywords and confuse crawlers. Pillar-cluster design is how modern SEO and B2B education strategies scale without losing coherence — especially when AI multiplies cluster output.",
      paragraphs: [
        [
          s("The pillar-cluster model replaces one-off keyword chasing with a system. "),
          x(
            "Choose a pillar topic aligned to your core value proposition — e.g. 'accounts payable automation' for a fintech, 'employer branding' for an HR platform. Map fifteen to thirty cluster questions buyers ask along the journey. Publish pillar first or alongside foundational clusters; add clusters over quarters.",
            "AI assists by suggesting subtopic lists from pillar outlines, competitor gap exports, and People Also Ask scrapes — humans validate business fit.",
          ),
          s(" One strong pillar beats ten disconnected AI posts targeting adjacent keywords."),
        ],
        [
          s("Architecture creates internal economies of scale for repurposing and sales enablement. "),
          x(
            "Sales cites the pillar in discovery; clusters become email nurture and objection handlers. Webinars and reports anchor the pillar URL; social snippets drive to cluster entry points.",
            "AI repurposing chains run pillar → cluster summaries → LinkedIn carousels — but only when the hub exists to link back to.",
          ),
          s(" Document pillar-cluster maps in your CMS or Notion — living architecture, not a one-time SEO project."),
        ],
        [
          s("The model requires patience — authority compounds over 6–18 months. "),
          x(
            "Teams expecting AI cluster volume to rank in weeks get disappointed. Pillars need backlinks, refresh cycles, and cluster coverage depth.",
            "Leadership buy-in comes from framing architecture as a capital asset — like product documentation — not a campaign fling.",
          ),
          s(" Set quarterly architecture milestones: clusters published, internal links completed, pillar refresh date — not vanity traffic alone."),
        ],
      ],
      examples: [
        {
          title: "HubSpot topic clusters — canonical B2B pattern",
          body: "HubSpot pioneered pillar pages with supporting cluster posts linked via hub-and-spoke internal linking. Marketing teams copying the model with AI cluster drafts report faster time-to-coverage — but only after strategists locked pillar topics tied to product categories. Teams skipping pillar depth and AI-generating clusters alone saw thin content penalties.",
        },
        {
          title: "Ahrefs 'topic cluster' workflow — SEO ops",
          body: "An SEO lead used Ahrefs keyword clustering to group 120 keywords into one pillar and eight cluster themes. ChatGPT drafted cluster outlines from the pillar brief. Six months later pillar ranked page one; clusters captured long-tail. Architecture turned keyword lists into a system.",
        },
        {
          title: "Scattered blog graveyard — pre-architecture",
          body: "A legal tech company had 300 AI-assisted blogs with no linking strategy. Google Search Console showed cannibalisation on 'contract management'. They consolidated into one pillar and 12 clusters with redirects — traffic recovered 30% without new volume. Architecture fixed what production created.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-cs-ch2-pillar-cluster",
      type: "nested",
      title: "The Pillar-Cluster Model",
      caption:
        "Pillar page anchors authority; cluster articles deepen subtopics; internal links distribute equity; journey stages sequence the build.",
    }),
    buildSection({
      number: "2.2",
      title: "Pillar Page Design",
      subtitle: "What belongs on the hub — and what AI can draft versus what must be original",
      take: "A pillar page must earn bookmarking: comprehensive coverage, clear structure, original data or frameworks, multimedia, and prominent paths into clusters. AI can draft section scaffolding and summarise known concepts — but pillars without proprietary insight become interchangeable 'ultimate guides' search engines already reward elsewhere. Design pillars for depth, navigability, and conversion — not word count alone.",
      why: "Pillar investment is high; getting design wrong means rewriting or redirecting later. This section defines the bar before AI accelerates drafting.",
      paragraphs: [
        [
          s("Pillar structure follows buyer questions, not table-of-contents aesthetics. "),
          x(
            "Lead with definition and business case; progress through implementation, pitfalls, benchmarks, and tool landscape; close with next steps and cluster links. AI outlines from 'buyer questions for [topic]' prompts — strategist reorders for journey logic.",
            "Include jump links, visual summaries, and embedded calculators or checklists where possible — engagement signals matter.",
          ),
          s(" Pillars should answer 'what is this and why should I care' and 'how do I act' in one URL."),
        ],
        [
          s("Original elements differentiate AI-assisted pillars. "),
          x(
            "Proprietary survey data, customer benchmark aggregates, named case outcomes, and branded frameworks cannot be generated from public training data credibly.",
            "Assign SME interviews and data pulls before AI first draft — paste results into prompts as non-negotiable blocks.",
          ),
          s(" If your pillar could be signed by any competitor's AI, it is not a pillar — it is filler."),
        ],
        [
          s("Conversion architecture belongs in pillar design from day one. "),
          x(
            "CTA placement: soft after education sections, hard after proof blocks. Gated assets for depth — checklist, ROI model — ungated for awareness sections.",
            "AI drafts CTA copy variants; humans set funnel logic and test in HubSpot or Optimizely.",
          ),
          s(" Measure pillar success on assisted conversions and cluster click-through — not time on page alone."),
        ],
      ],
      examples: [
        {
          title: "Gartner-style framework pillar — SaaS",
          body: "A revenue operations SaaS published a pillar with an original 'RevOps maturity model' from customer interviews — AI drafted explanatory prose around human-built framework diagrams. Pillar became sales deck anchor and earned backlinks from partners. Original framework was the moat; AI was prose accelerator.",
        },
        {
          title: "Canva template pillar — multimedia hub",
          body: "A design tool's pillar combined AI-drafted educational copy with embedded Canva templates and video walkthroughs. Multimedia raised dwell time and shares. Pure text AI pillars in the same category ranked lower.",
        },
        {
          title: "Generic AI pillar flop",
          body: "A martech vendor AI-generated a 5,000-word 'complete guide' with no original data. Bounced quickly; no backlinks. Rewrote with customer benchmark section — rankings improved in four months. Pillar design lesson: originality beats length.",
        },
      ],
    }),
    buildSection({
      number: "2.3",
      title: "Cluster Topic Mapping",
      subtitle: "From keyword lists to journey-aligned subtopic systems",
      take: "Cluster mapping translates pillar scope into a prioritized list of subtopics — each with target keyword, intent, funnel stage, format, and link relationship to pillar and sibling clusters. AI clusters keyword exports and suggests missing questions from forums and sales notes — humans merge SEO opportunity with sales urgency and production capacity.",
      why: "Unmapped clusters lead to random AI post generation — overlapping coverage, missing decision-stage content, and wasted drafts on low-impact long-tail.",
      paragraphs: [
        [
          s("Start cluster maps from three inputs: SEO gaps, buyer questions, and product story. "),
          x(
            "Ahrefs or Semrush cluster keywords by parent topic. Sales and support supply 'questions we hear weekly'. Product marketing tags feature narratives needing education.",
            "AI merges into a matrix: subtopic | keyword | stage | pillar section anchor | priority.",
          ),
          s(" Deduplicate aggressively — two clusters on the same intent cannibalise."),
        ],
        [
          s("Assign cluster formats by intent — not everything is a blog. "),
          x(
            "Comparison posts for commercial investigation; how-to for implementation; FAQ for objections; calculator for transactional nudge.",
            "AI suggests format from SERP analysis — 'top results are videos; consider YouTube cluster'. Strategist approves production path.",
          ),
          s(" Format diversity strengthens architecture; AI blog spam weakens it."),
        ],
        [
          s("Sequence cluster publication for internal link opportunities. "),
          x(
            "Publish foundational definitional clusters before advanced ones so pillar updates can link naturally. AI calendar suggests dependency order from outline graph.",
            "Batch-related clusters in the same sprint so pillar 'related reading' blocks update once.",
          ),
          s(" Review cluster map monthly — new product launches and competitor moves add rows."),
        ],
      ],
      examples: [
        {
          title: "Semrush keyword clustering — HR tech",
          body: "Semrush auto-clustered 80 keywords under 'employee onboarding'. Team mapped eight cluster posts to onboarding week milestones. AI drafted outlines from shared pillar brief. Internal links formed a onboarding journey path — nurture email CTR rose.",
        },
        {
          title: "Sales question mining — cluster backlog",
          body: "Slack channel #deal-blockers fed monthly into AI theme summary. 'Integration timeline' appeared repeatedly — no cluster existed. Fast-tracked cluster post; sales started sharing URL in proposals. Cluster map sourced from revenue, not only SEO.",
        },
        {
          title: "Duplicate cluster cleanup",
          body: "AI had suggested three clusters on 'remote team communication' with slight keyword variation. SEO lead merged to one comprehensive cluster with FAQ schema; retired two thin posts via redirect. Mapping discipline prevented ongoing waste.",
        },
      ],
    }),
    buildSection({
      number: "2.4",
      title: "Internal Linking Strategy",
      subtitle: "Distributing authority deliberately — AI suggests, humans govern",
      take: "Internal links pass authority from pillar to clusters and signal topical relationships to crawlers. Every cluster should link up to pillar; pillar should link down to all live clusters; related clusters cross-link where reader context warrants. AI scans drafts and suggests anchor text and target URLs — but automated linking without governance creates over-optimization and broken journeys.",
      why: "Many teams AI-publish clusters without updating pillar — orphan content that never receives hub equity. Linking is architecture maintenance, not an afterthought.",
      paragraphs: [
        [
          s("Define linking rules before cluster production scales. "),
          x(
            "Pillar: contextual links to each cluster in relevant sections plus 'explore further' module. Cluster: breadcrumb, intro link to pillar, one related cluster minimum. Anchor text: descriptive, varied — not exact-match spam.",
            "AI tools like Surfer or Clearscope suggest links; Yoast and CMS plugins flag orphans.",
          ),
          s(" Add 'update pillar links' as a publish checklist item for every new cluster."),
        ],
        [
          s("Audit internal links quarterly — AI accelerates orphan detection. "),
          x(
            "Export site crawl from Screaming Frog or Ahrefs; AI summarises pages with zero inbound internal links and suggests source pages for links.",
            "Retire or merge orphans; do not AI-generate more content on top of broken architecture.",
          ),
          s(" Link equity flows to money pages — prioritize links toward conversion clusters."),
        ],
        [
          s("Avoid over-automation that reads unnatural to humans. "),
          x(
            "Footer link dumps and identical anchor text across fifty pages trigger quality signals. AI-suggested links need editor judgment for reader value.",
            "If the link does not help a human reader, remove it — SEO follows UX.",
          ),
          s(" Train writers: one good contextual link beats five forced ones."),
        ],
      ],
      examples: [
        {
          title: "Screaming Frog + ChatGPT — orphan audit",
          body: "Quarterly crawl found 22 cluster posts with no pillar inbound links. AI suggested source paragraphs in pillar for insertion; editor updated in one afternoon. Rankings for orphan clusters lifted within weeks.",
        },
        {
          title: "Surfer SEO — draft-time link suggestions",
          body: "Content team runs Surfer on cluster drafts for semantic terms and internal link targets. Suggestions cut manual wiki-hunting time. Human editor rejects irrelevant links — about 20% of AI suggestions.",
        },
        {
          title: "Footer link spam penalty scare",
          body: "Agency added auto-generated 'related links' footer block site-wide with exact-match anchors. Traffic wobbled; agency removed. Lesson: AI scale amplifies bad linking patterns fast.",
        },
      ],
    }),
    buildSection({
      number: "2.5",
      title: "Journey Mapping Across Clusters",
      subtitle: "Sequencing content for awareness, consideration, and decision — not random publication",
      take: "Journey mapping assigns each cluster to a buyer stage: awareness (problem education), consideration (solution evaluation), decision (proof, pricing, implementation). Pillars span stages; clusters lean toward one. AI tags drafts by stage from brief metadata and suggests nurture email sequences linking stage-appropriate clusters — humans ensure sales and product launches align with stage coverage gaps.",
      why: "Architecture that ignores journey produces SEO traffic that does not convert — all awareness, no decision content, or vice versa.",
      paragraphs: [
        [
          s("Visualise cluster coverage on a journey grid. "),
          x(
            "Rows: persona segments. Columns: awareness / consideration / decision. Place existing and planned clusters in cells; empty cells are priority gaps.",
            "AI cannot know your funnel conversion data — pull stage hints from CRM influenced content reports.",
          ),
          s(" Empty decision cells explain high traffic, low pipeline — fix before more AI awareness volume."),
        ],
        [
          s("Email and paid nurture should mirror cluster journey design. "),
          x(
            "HubSpot workflows deliver awareness clusters first, consideration comparisons next, decision case studies last. AI drafts email blurbs linking to cluster URLs from journey map export.",
            "Misaligned nurture — sending pricing content to cold leads — wastes architecture.",
          ),
          s(" Sync journey map with lifecycle marketing monthly."),
        ],
        [
          s("Sales enablement completes the journey loop. "),
          x(
            "Decision-stage clusters become talk tracks and proposal appendices. AI summarises cluster into one-page sales sheets — verified by product marketing.",
            "If sales does not know clusters exist, architecture is SEO-only theatre.",
          ),
          s(" Launch enablement when decision clusters publish, not at pillar launch."),
        ],
      ],
      examples: [
        {
          title: "Journey grid — cybersecurity vendor",
          body: "Grid revealed heavy awareness clusters, zero decision-stage implementation guides. AI-assisted implementation cluster series published; sales cycle shortened 12 days average on inbound deals citing guides.",
        },
        {
          title: "HubSpot nurture — stage-tagged clusters",
          body: "Lifecycle emails tagged by journey stage pulled cluster URLs dynamically. AI wrote stage-appropriate subject lines. Unsubscribe fell; MQL-to-SQL rose — right depth at right time.",
        },
        {
          title: "Awareness-only trap — analytics SaaS",
          body: "Team AI-published 40 top-of-funnel clusters; demo requests flat. Journey map showed decision gap; three ROI calculator clusters fixed conversion. Architecture without journey is a traffic machine only.",
        },
      ],
    }),
    buildSection({
      number: "2.6",
      title: "Evergreen vs Timely Clusters",
      subtitle: "Balancing durable authority with AI-assisted news response",
      take: "Evergreen clusters sustain traffic for years — fundamentals, how-tos, definitions. Timely clusters capture momentary demand — regulation changes, competitor moves, trend commentary — with shorter shelf life. Architecture budgets both: evergreen builds the hub's foundation; timely clusters attract links and social spikes. AI makes timely clusters cheap — but over-indexing on news erodes architecture stability.",
      why: "Teams swept into reactive AI content neglect pillar refresh and evergreen gaps. Balance protects long-term authority while staying relevant.",
      paragraphs: [
        [
          s("Tag every cluster row evergreen or timely at planning. "),
          x(
            "Evergreen: update annually, deep internal links, no date-stamped titles. Timely: publish fast, promote hard, archive or redirect when stale.",
            "AI drafts timely posts from news briefs; evergreen gets full research and SME review.",
          ),
          s(" Cap timely slots per month — e.g. 20% of production — to protect evergreen backlog."),
        ],
        [
          s("Timely clusters should link into evergreen hubs for lasting value. "),
          x(
            "Regulation change post links to evergreen compliance pillar section — spike traffic flows equity inward.",
            "Pure hot takes with no pillar connection die alone.",
          ),
          s(" Prompt AI timely drafts: 'include link anchor to pillar section X'. Architecture absorbs news."),
        ],
        [
          s("Refresh evergreen on schedule — AI assists update drafts. "),
          x(
            "Annual pillar and top-cluster refresh: new stats, product screenshots, dead link fixes. AI compares old vs new product docs and flags outdated claims.",
            "Stale evergreen erodes trust faster than missing timely takes.",
          ),
          s(" Set refresh dates in CMS; overdue refresh blocks new timely production in disciplined teams."),
        ],
      ],
      examples: [
        {
          title: "GDPR timely → evergreen pillar — fintech",
          body: "GDPR update timely cluster linked to evergreen data privacy pillar. Spike traffic persisted via pillar bookmarks. AI drafted timely analysis in hours; pillar updated once regulation settled.",
        },
        {
          title: "Newsjacking overload — DTC brand",
          body: "Brand AI-published weekly trend posts; evergreen product education neglected. SEO declined when trends faded. Rebalanced 80/20 evergreen/timely — baseline traffic recovered.",
        },
        {
          title: "Annual refresh workflow — Jasper + CMS",
          body: "Content ops runs Jasper with 'update statistics and examples' on top ten evergreen clusters each January. Editors verify. Rankings held through algorithm updates.",
        },
      ],
    }),
    buildSection({
      number: "2.7",
      title: "Measuring Cluster Performance",
      subtitle: "Metrics beyond pageviews — authority, assists, and architecture health",
      take: "Cluster performance spans SEO (rankings, impressions, backlinks), engagement (time on page, cluster-to-pillar CTR), and revenue (assisted conversions, sales usage). AI builds dashboards summarising Search Console and HubSpot data — humans interpret which clusters to expand, refresh, merge, or retire. Architecture is a portfolio; measure it like one.",
      why: "Without cluster metrics, teams AI-produce more instead of fixing weak nodes — inflating architecture size while authority stagnates.",
      paragraphs: [
        [
          s("Define a cluster scorecard template. "),
          x(
            "Metrics: target keyword position, organic sessions, internal link count, assisted pipeline, sales shares (qualitative). AI monthly report highlights outliers top and bottom.",
            "Bottom quartile clusters trigger review: refresh, merge, redirect, or rewrite — not another net-new cluster.",
          ),
          s(" Compare clusters within same pillar — relative performance reveals mapping errors."),
        ],
        [
          s("Pillar health metrics aggregate cluster success. "),
          x(
            "Pillar URL equity: referring domains, pillar as landing page for demos, cluster coverage % published vs planned.",
            "Incomplete architecture — pillar live, 30% clusters published — underperforms complete competitors.",
          ),
          s(" Report architecture completion % to leadership alongside traffic."),
        ],
        [
          s("Attribution humility — clusters assist; they rarely close alone. "),
          x(
            "Use multi-touch models in HubSpot or Bizible; AI summarises content paths to won deals.",
            "Kill clusters only after sufficient data — new clusters need 90+ days unless clearly thin.",
          ),
          s(" Celebrate sales-sourced cluster wins in Slack — qualitative signal metrics miss."),
        ],
      ],
      examples: [
        {
          title: "Ahrefs rank tracking — cluster portfolio review",
          body: "Monthly Ahrefs report grouped by pillar. One cluster family underperformed — keyword mapping wrong intent. Merged three thin posts; one stronger cluster rose to page two. Portfolio review beat AI volume.",
        },
        {
          title: "HubSpot influenced revenue — decision clusters",
          body: "Attribution showed implementation clusters touched 40% of won deals. Team doubled decision cluster investment; AI accelerated drafts. Awareness clusters held steady. Data drove architecture budget.",
        },
        {
          title: "Sales share tracking — Notion integration",
          body: "Sales dropped cluster URLs in Notion deal notes. Marketing counted shares per cluster; low-SEO high-share pieces prioritized for refresh. Metric connected architecture to revenue conversation.",
        },
      ],
    }),
    buildSection({
      number: "2.8",
      title: "The Marketer Decision Lens — Architecture Investment",
      subtitle: "Five questions before committing pillar budget and AI cluster scale",
      take: "Before scaling pillar-cluster production with AI, ask: (1) Does this pillar topic map to core revenue narrative? (2) Is cluster map journey-complete for target persona? (3) Are linking and refresh workflows staffed? (4) Is evergreen/timely ratio intentional? (5) What does success look like at 6 and 12 months? Architecture is capital allocation — AI lowers construction cost, not strategic stakes.",
      why: "Pillar-cluster programs fail when treated as SEO side projects without investment lens. These five questions align leadership, SEO, and content ops on commitment level.",
      paragraphs: [
        [
          s("Question one: revenue narrative fit. "),
          x(
            "If pillar topic is tangential to product, traffic will not convert. AI cannot fix misaligned topic choice.",
            "Pillar topics should be categories you want to be known for at earnings calls.",
          ),
          s(" Kill pillar ideas that only serve vanity thought leadership."),
        ],
        [
          s("Questions two and three: journey completeness and operations. "),
          x(
            "Empty decision cells mean pipeline risk. Linking and refresh require named owners — not 'SEO will handle it'.",
            "If ops cannot maintain pillar links when clusters launch weekly, slow cluster cadence.",
          ),
          s(" Architecture debt compounds like technical debt — AI speed worsens neglect."),
        ],
        [
          s("Questions four and five: balance and time horizon. "),
          x(
            "Timely ratio, refresh calendar, and 6/12-month KPIs (coverage %, rankings, assisted pipeline) belong in the investment memo.",
            "Leadership approves architecture years, not quarters — set expectations before Jasper cluster sprints.",
          ),
          s(" Present architecture as a portfolio with milestones — not a blog initiative."),
        ],
      ],
      examples: [
        {
          title: "Investment memo — CFO-friendly architecture",
          body: "Marketing presented pillar-cluster plan with 12-month coverage targets and assisted pipeline goal. CFO approved headcount over more AI seats. Architecture framed as asset building won budget.",
        },
        {
          title: "Premature scale — cluster sprint regret",
          body: "Team AI-published 25 clusters in 60 days without pillar refresh capacity. Orphans multiplied; rankings stalled. Paused production; fixed linking SOP; resumed at sustainable cadence.",
        },
        {
          title: "Annual architecture review",
          body: "Year-end review retired two pillars misaligned to product pivot; doubled down on one winner. AI made consolidation drafts fast; strategic choice was human. Portfolio management, not hoarding URLs.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is the primary role of a pillar page in hub-and-spoke architecture?",
      options: [
        "Publish daily AI blogs for crawl frequency.",
        "Comprehensive topic anchor linking to cluster subtopics — building topical authority and buyer navigation.",
        "Replace all product documentation.",
        "Host only news and trend commentary.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Pillars anchor authority; clusters deepen subtopics with links back. Re-read sections 2.1 and 2.2.",
      wrongFeedback:
        "Pillars are comprehensive hubs, not news feeds or doc replacements. Re-read sections 2.1 and 2.2.",
    },
    {
      kind: "order",
      q: "Order cluster architecture workflow from first step to last.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Select pillar topic aligned to revenue narrative",
        "Map clusters from SEO gaps and buyer questions",
        "Design pillar with original insight and conversion paths",
        "Publish clusters with internal links to pillar",
        "Measure cluster portfolio and refresh evergreen",
      ],
      correctFeedback:
        "Right. Topic → map → pillar design → linked clusters → measure. Re-read sections 2.1–2.4.",
      wrongFeedback:
        "Pillar strategy and mapping precede scattered cluster publishing. Re-read sections 2.1–2.4.",
    },
    {
      kind: "categorize",
      q: "Sort each content type into pillar vs cluster.",
      categories: ["Pillar hub", "Cluster spoke"],
      items: [
        { text: "Comprehensive 4,000-word guide to 'marketing automation' with framework and CTAs.", category: 0 },
        { text: "Long-tail post: 'How to score leads in HubSpot workflows'.", category: 1 },
        { text: "Anchor URL sales cites as category overview.", category: 0 },
        { text: "FAQ addressing one pricing objection.", category: 1 },
        { text: "Topic hub linking to 20 subtopic articles.", category: 0 },
        { text: "Comparison post: 'Marketo vs HubSpot for mid-market'.", category: 1 },
      ],
      correctFeedback:
        "Right. Pillars are comprehensive hubs; clusters address specific subtopics linking back. Re-read section 2.1.",
      wrongFeedback:
        "Clusters are narrower spokes supporting a pillar hub. Re-read section 2.1.",
    },
    {
      q: "A new cluster publishes but the pillar is not updated with links. What architecture failure is this?",
      options: [
        "Normal — Google finds content automatically.",
        "Orphan cluster — hub equity does not flow; readers and crawlers miss the relationship.",
        "Only affects paid ads.",
        "Pillars should never link out.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Internal linking is architecture maintenance — update pillar when clusters go live. Re-read section 2.4.",
      wrongFeedback:
        "Clusters need deliberate links to and from pillar. Re-read section 2.4.",
    },
    {
      q: "Team AI-publishes 40 awareness clusters but demos stay flat. Journey map shows empty decision cells. Best fix?",
      options: [
        "More awareness clusters with AI.",
        "Build decision-stage clusters and align nurture/sales enablement to journey gaps.",
        "Delete the pillar.",
        "Stop internal linking.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Journey mapping reveals stage gaps — decision content drives conversion. Re-read section 2.5.",
      wrongFeedback:
        "Traffic without decision-stage coverage underperforms on pipeline. Re-read section 2.5.",
    },
    {
      kind: "categorize",
      q: "Classify each cluster approach as evergreen vs timely.",
      categories: ["Evergreen cluster", "Timely cluster"],
      items: [
        { text: "'What is accounts payable automation' definition guide.", category: 0 },
        { text: "Analysis of competitor's product launch last week.", category: 1 },
        { text: "Annual refresh scheduled with updated statistics.", category: 0 },
        { text: "Regulatory change commentary linking to compliance pillar.", category: 1 },
        { text: "How-to implementation guide valid for multiple years.", category: 0 },
        { text: "Trending hashtag hot take with short shelf life.", category: 1 },
      ],
      correctFeedback:
        "Right. Evergreen sustains authority; timely captures moments but should link to hubs. Re-read section 2.6.",
      wrongFeedback:
        "Evergreen endures with refresh; timely is reactive and shorter-lived. Re-read section 2.6.",
    },
  ],
});
