import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter01MktNewSeoLandscape = buildChapter({
  slug: "mkt-new-seo-landscape",
  number: 1,
  shortTitle: "The New SEO Landscape",
  title: "The New SEO Landscape",
  readingMinutes: 24,
  summary:
    "Search has shifted from keyword matching to meaning, authority, and answer surfaces — accelerated by AI Overviews, Perplexity, and ChatGPT Search. Marketers who still optimise for ten blue links alone lose visibility in the citation economy. This chapter maps the semantic revolution, E-E-A-T signals, zero-click economics, and first-party data strategy so your SEO programme matches how discovery actually works in 2026.",
  keyTakeaway:
    "SEO is no longer page-level keyword placement — it is topical authority, entity clarity, and citation-worthy content across traditional SERPs and AI answer engines. Build for meaning first, measure beyond clicks, and anchor strategy in first-party proof that AI systems and Google both trust.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "1.1",
      title: "The Semantic Revolution",
      subtitle: "Why Google ranks meaning and entities — not keyword density — and what that means for your content model",
      take: "Semantic search interprets query intent, entity relationships, and topical context rather than counting exact-match strings on a page. Google's Knowledge Graph, BERT-family models, and passage-level understanding mean a well-structured cluster on 'accounts payable automation' can outrank a keyword-stuffed page targeting the same phrase. Marketers must think in topics, entities, and user tasks — not single-keyword pages.",
      why: "Teams still briefing writers with 'use the keyword five times' waste effort on a ranking model that expired years ago. Semantic discipline aligns content architecture with how search engines actually evaluate relevance — and prepares you for AI systems that reason over meaning the same way.",
      paragraphs: [
        [
          s("Semantic SEO starts with entity mapping — who, what, where, and how your brand relates to category concepts. "),
          x(
            "List core entities: your product category, buyer roles, problems solved, integrations, regulations, and competitors. Tools like Semrush's keyword grouper, Ahrefs topical clusters, or manual SERP analysis reveal how Google groups related queries.",
            "Each entity should appear in clear, consistent language across pillar pages, schema markup, and internal links — not as synonym spam but as coherent topical coverage.",
          ),
          s(" Build an entity glossary your writers and AI tools reference so terminology stays aligned across hundreds of URLs."),
        ],
        [
          s("Passage-level ranking means individual sections can win snippets and AI citations without the whole page ranking #1. "),
          x(
            "A comprehensive guide with a sharp definition block, comparison table, or step-by-step section may surface for dozens of long-tail queries while the URL ranks on page two for the head term.",
            "Structure content in discrete, answer-ready blocks — definition up front, H2s as questions, tables for comparisons — so algorithms can extract the right passage for the right query.",
          ),
          s(" Audit top pages in GSC for 'impressions, low position' queries — often passage opportunities, not full-page rewrites."),
        ],
        [
          s("AI-assisted semantic research accelerates entity discovery without replacing SERP validation. "),
          x(
            "Feed ChatGPT or Claude a seed topic: 'list related subtopics, questions, and entities a buyer researching AP automation would expect covered'. Cross-check outputs against Ahrefs 'Questions' and 'Also rank for' reports.",
            "AI expands the semantic map; search data confirms demand. Skipping validation produces entity lists that sound complete but miss commercial intent.",
          ),
          s(" Document semantic maps in your SEO brief template — every new asset should declare primary entity and supporting subtopics."),
        ],
      ],
      examples: [
        {
          title: "Ahrefs topical map — B2B payments cluster",
          body: "A fintech SEO lead used Ahrefs Site Explorer topical view on a competitor and discovered Google treated 'virtual cards', 'spend management', and 'AP automation' as one semantic neighbourhood. They restructured silos into one hub with sub-hubs instead of isolated keyword pages. Organic traffic rose 40% in two quarters as internal linking reinforced entity relationships.",
        },
        {
          title: "Passage win — HR software FAQ block",
          body: "An HR tech blog ranked poorly for 'employee onboarding checklist' but a single H2 section earned a featured snippet and later appeared in AI Overviews. GSC showed 12,000 impressions at position 8 for the URL but position 1–3 for that query via rich results. They replicated the pattern — sharp answer blocks — across forty posts without rewriting entire articles.",
        },
        {
          title: "Entity glossary — AI brief consistency",
          body: "A cybersecurity vendor maintained a Notion entity glossary: product names, threat types, compliance frameworks. Every Jasper and ChatGPT SEO brief pasted the glossary. Cannibalisation dropped; Knowledge Panel consistency improved. Semantic discipline scaled across agency writers who never attended brand training.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-seo-ch1-search-evolution",
      type: "comparison",
      title: "Search Evolution",
      caption:
        "Keyword era: string matching and page-level blue-link clicks. Semantic + AI era: meaning, topical authority, and answers before clicks.",
    }),
    buildSection({
      number: "1.2",
      title: "AI Search Disruption",
      subtitle: "Google AI Overviews, Perplexity, and ChatGPT Search are reshaping discovery — not replacing SEO",
      take: "AI answer surfaces synthesise information from indexed sources — often with fewer clicks to publishers. Google AI Overviews appear on a growing share of queries; Perplexity and ChatGPT Search pull from live web indexes. SEO strategy must expand from 'rank and click' to 'be cited, be trusted, be remembered' — because brand visibility now happens inside answer boxes, not only on SERP listings.",
      why: "Marketers who ignore AI search treat it as a fad; those who panic declare SEO dead. Neither is correct. The discipline shifts toward authority, structure, and citation-worthiness — skills serious SEO teams already pursue, now with higher stakes.",
      paragraphs: [
        [
          s("Measure AI search impact on your category before restructuring the entire programme. "),
          x(
            "Track AI Overview presence on target keywords using Semrush, Ahrefs SERP features, or manual sampling. Log which competitors get cited. Segment queries: informational (high AI Overview rate) vs transactional (still click-heavy).",
            "A SaaS brand may find 60% of top-funnel queries show AI Overviews but bottom-funnel 'pricing' and 'integration' queries still drive clicks. Strategy differs by segment.",
          ),
          s(" Build an AI SERP tracker spreadsheet — query, AI surface, cited domains, your presence — updated monthly."),
        ],
        [
          s("AI search rewards the same foundations as strong SEO — with extra weight on clarity and verifiability. "),
          x(
            "Pages cited in Perplexity and AI Overviews tend to have clear definitions, authoritative backlinks, recent updates, and structured data. Thin affiliate content and AI-generated fluff without expertise rarely appear.",
            "Disruption favours brands that already invested in depth; it punishes arbitrage plays that gamed the old algorithm.",
          ),
          s(" Run a citation audit: prompt Perplexity and ChatGPT Search with your top fifty buyer questions — note who appears and why."),
        ],
        [
          s("Distribution and brand search buffer the click-loss from AI answers. "),
          x(
            "When AI Overviews answer 'what is X', users may still click branded navigational queries or return via email and community. Strong newsletter, YouTube, and LinkedIn presence keeps you in the consideration set even when informational clicks dip.",
            "SEO alone is no longer the entire discovery stack — but it feeds the authority AI systems cite.",
          ),
          s(" Pair SEO with brand search monitoring in GSC — rising branded impressions often compensate for informational zero-click."),
        ],
      ],
      examples: [
        {
          title: "Semrush AI Overview tracking — martech category",
          body: "A marketing automation vendor tracked 200 category keywords in Semrush. AI Overviews appeared on 34% within six months. They shifted content investment from short definitional posts to comparison and implementation guides with original benchmark data — formats cited more often in manual Perplexity audits. Assisted pipeline held steady despite informational click decline.",
        },
        {
          title: "Perplexity citation audit — legal tech surprise",
          body: "A legal tech startup ran fifty buyer prompts in Perplexity. Competitors with bar-association backlinks dominated. They pivoted link building toward professional body partnerships and expert bylines. Citations in Perplexity rose within four months — AI search amplified existing authority signals.",
        },
        {
          title: "ChatGPT Search — branded recovery",
          body: "An e-learning platform lost clicks on 'best online courses for data science' to AI answers. Branded search and direct traffic rose 18% as they invested in YouTube and podcast presence. SEO team reframed reporting: citation share plus branded lift, not informational clicks alone.",
        },
      ],
    }),
    buildSection({
      number: "1.3",
      title: "E-E-A-T in Practice",
      subtitle: "Experience, expertise, authoritativeness, and trust — operationalised for marketers, not just quality raters",
      take: "Google's E-E-A-T framework evaluates whether content demonstrates real experience, subject expertise, site-wide authority, and trust signals — especially for YMYL topics like finance, health, and legal. For B2B marketers, E-E-A-T translates to named authors with credentials, first-hand case data, transparent sourcing, and site integrity (HTTPS, clear about pages, accurate product claims). AI content without expert oversight fails the trust test.",
      why: "E-E-A-T is not a ranking factor checkbox — it is how search engines and AI systems reduce risk of surfacing harmful or misleading information. Brands that operationalise E-E-A-T build durable rankings; those that publish anonymous AI walls of text invite quality demotions and citation exclusion.",
      paragraphs: [
        [
          s("Author architecture matters more than author bio boilerplate. "),
          x(
            "Every substantive post needs a named author linked to a dedicated bio page with credentials, LinkedIn, and published expertise proof. Multi-author sites should show why this author owns this topic.",
            "Aggregate 'Team' bylines signal low accountability — fine for news briefs, weak for pillar content competing in YMYL-adjacent categories.",
          ),
          s(" Audit top twenty revenue-driving URLs for author E-E-A-T compliance before next content sprint."),
        ],
        [
          s("Experience signals require first-hand proof, not generic advice. "),
          x(
            "Original screenshots, customer outcomes with permission, proprietary survey data, and 'we tested this' methodology sections differentiate expert content from summarised AI output.",
            "Prompt AI to draft structure; experts inject experience markers — sample sizes, dates, limitations, what failed.",
          ),
          s(" Add an 'experience block' to SEO briefs: what first-hand proof must this page include?"),
        ],
        [
          s("Trust extends to site-wide policies and technical hygiene. "),
          x(
            "Clear privacy policy, contact information, editorial standards, correction policy, and secure checkout matter for crawlers and humans. Schema Person and Organization markup reinforces entity trust.",
            "Ahrefs Site Audit flags HTTPS mixed content, broken links, and thin affiliate pages — fix these before chasing new content volume.",
          ),
          s(" Run quarterly E-E-A-T audits alongside technical crawls — trust is cumulative."),
        ],
      ],
      examples: [
        {
          title: "Author hub — healthcare SaaS recovery",
          body: "A healthcare analytics site used anonymous AI content for two years. Medic update traffic dropped 30%. They rebuilt with MD-reviewed bylines, author hub pages, and cited clinical sources. Recovery took nine months but AI Overview citations returned on condition-specific queries. E-E-A-T was the bottleneck, not keyword targeting.",
        },
        {
          title: "Original benchmark — fintech E-E-A-T wedge",
          body: "A corporate card startup published annual spend benchmark data from anonymised customer transactions. Competitors summarised their report; Google and Perplexity cited the original. Experience signal — proprietary data — became their top link magnet and E-E-A-T differentiator.",
        },
        {
          title: "Schema Person + bio — B2B blog standard",
          body: "An ERP vendor added Person schema and consistent bio pages for twelve subject-matter experts. Rich results for author names rose; sales reported prospects mentioning 'your team's article on inventory optimisation'. Trust became a pipeline artifact, not just SEO hygiene.",
        },
      ],
    }),
    buildSection({
      number: "1.4",
      title: "Zero-Click Economics",
      subtitle: "When SERPs answer the query on the page — and how to model ROI beyond organic sessions",
      take: "Featured snippets, knowledge panels, People Also Ask expansions, and AI Overviews deliver answers without a click. Zero-click SERPs are not failures — they are brand impressions at scale. Marketers must model assisted conversions, branded search lift, and citation authority alongside session-based ROI, or they will defund SEO precisely when visibility still matters.",
      why: "CFOs compare SEO to paid media on cost-per-click. When clicks fall while impressions rise, SEO looks broken unless you reframe the metric. Zero-click economics requires new reporting — and content formats designed for visibility, not only traffic.",
      paragraphs: [
        [
          s("Segment queries by click propensity before setting KPIs. "),
          x(
            "GSC shows query-level CTR. Bucket keywords: high-click (commercial, branded, tool), medium, zero-click-prone (definitions, weather-style informational). Allocate content formats accordingly — don't expect demo pages from pure 'what is' queries.",
            "Ahrefs traffic potential estimates often overstate clicks in zero-click-heavy SERPs — adjust forecasts with your own GSC CTR data.",
          ),
          s(" Present leadership a two-column forecast: visibility impressions and expected clicks by segment."),
        ],
        [
          s("Win zero-click SERPs intentionally for category presence. "),
          x(
            "Owning the featured snippet or AI Overview citation for 'what is [category]' puts your brand in every research journey — even without a click. Pair with retargeting, newsletter capture on deeper pages, and sales enablement that references your definitional authority.",
            "Sometimes the goal is mindshare, not session — especially for emerging categories you need to name and own.",
          ),
          s(" Track impression share on definitional queries in GSC as a first-class KPI."),
        ],
        [
          s("Connect zero-click visibility to downstream attribution. "),
          x(
            "Use branded search lift, direct traffic, and self-reported 'how did you hear about us' in CRM to connect SERP presence to pipeline. Multi-touch models in HubSpot or Bizible attribute assist roles to organic impressions.",
            "AI-heavy informational journeys may convert weeks later via branded search — last-click analytics undercredit SEO.",
          ),
          s(" Add 'first organic touch' reporting before cutting budget on flat session trends."),
        ],
      ],
      examples: [
        {
          title: "GSC impression KPI — insurance comparison",
          body: "A comparison site reframed SEO success as impression share on 500 educational queries after AI Overviews expanded. Clicks dipped 15%; branded search rose 22%; quote form submissions held flat. Board accepted impression-led reporting for top-funnel; click KPIs remained for bottom-funnel money pages.",
        },
        {
          title: "Snippet ownership — SaaS category creation",
          body: "A new category entrant won featured snippets for twelve 'what is [new category term]' variants. Almost zero clicks — but sales heard 'I saw you define it everywhere' on calls. Zero-click visibility seeded category leadership worth more than 2,000 monthly sessions.",
        },
        {
          title: "CTR reality check — Ahrefs forecast fix",
          body: "A DTC brand used Ahrefs traffic potential for board planning — missed by 40% because SERPs were snippet-heavy. They built a GSC-based CTR model by position and SERP feature. Planning accuracy improved; they stopped over-promising blog traffic and under-investing in product page SEO.",
        },
      ],
    }),
    buildSection({
      number: "1.5",
      title: "First-Party Data Strategy",
      subtitle: "Using CRM, product usage, and search console data to steer SEO when third-party signals shrink",
      take: "Cookies deprecate, SERP tracking samples vary, and AI citations are hard to scrape — first-party data becomes the marketer's ground truth. Google Search Console, GA4, CRM opportunity data, and product analytics reveal which topics drive qualified pipeline, not just traffic. SEO strategy anchored in first-party conversion paths resists algorithm volatility.",
      why: "Third-party keyword tools estimate demand; only your data shows which rankings produce revenue. Teams that SEO in a vacuum optimise for traffic charts; teams that join GSC to CRM optimise for pipeline.",
      paragraphs: [
        [
          s("Join GSC query data to landing page conversions in GA4 or your warehouse. "),
          x(
            "Export GSC performance by page; merge with GA4 key events or HubSpot form submissions by URL. Pages ranking for high-volume keywords but converting poorly get content or CTA fixes — not more links.",
            "BigQuery export or Looker Studio templates automate the join — monthly is minimum cadence.",
          ),
          s(" Rank pages by 'assisted pipeline per 1,000 organic sessions' — not sessions alone."),
        ],
        [
          s("Mine CRM and sales calls for SEO topic gaps with commercial intent. "),
          x(
            "Closed-won deals often start with questions no blog answers. Feed anonymised Gong transcripts to AI: 'extract questions prospects asked before buying'. Cross-reference against GSC — gaps with pipeline proof outrank Ahrefs volume.",
            "Sales-sourced keywords convert at 3–5x informational volume plays in most B2B stacks.",
          ),
          s(" Quarterly 'sales to SEO' sync — bring ten questions from calls; leave with five briefed URLs."),
        ],
        [
          s("Product usage data reveals post-click value invisible to search tools. "),
          x(
            "Which help centre articles correlate with activation? Which blog paths precede trial signup? Product analytics inform which SEO clusters deserve investment beyond search volume.",
            "First-party loops also feed personalization and email — SEO becomes one node in owned data, not a silo.",
          ),
          s(" Share SEO–product correlation dashboards with leadership — pipeline language, not rankings alone."),
        ],
      ],
      examples: [
        {
          title: "GSC + HubSpot — pipeline per URL",
          body: "A project management SaaS joined GSC and HubSpot in Looker Studio. Five URLs drove 8% of traffic but 34% of MQLs — all integration-focused. They doubled cluster investment there and deprioritised high-traffic glossary pages with zero assists. Pipeline rose 19% without total traffic growth.",
        },
        {
          title: "Gong → SEO backlog — security software",
          body: "Win-loss calls surfaced 'SSO implementation timeline' as a pre-buy question — zero search volume in Semrush. They published an expert guide; it ranked within eight weeks and appeared in three enterprise RFP bibliographies. First-party gap beat keyword tool silence.",
        },
        {
          title: "Help centre activation correlation — fintech",
          body: "Product analytics showed users who read 'international wire fees' help articles activated 2x faster. SEO team elevated fee transparency content from support-only to indexable hub pages. Organic signups from those URLs carried higher LTV than generic blog traffic.",
        },
      ],
    }),
    buildSection({
      number: "1.6",
      title: "Content Quality Signals",
      subtitle: "What algorithms and AI systems use to separate authoritative depth from scaled thin content",
      take: "Quality signals include topical depth, internal link support, freshness, engagement proxies, backlink authority, and low duplicate/thin footprints. Google's helpful content system and spam policies target mass-produced AI pages without value. Marketers should run quality rubrics before publish — especially when AI accelerates draft speed.",
      why: "Speed without quality gates scales penalties alongside output. One quality rubric applied to every AI-assisted draft protects domain trust worth years of link building.",
      paragraphs: [
        [
          s("Define a publish-quality rubric with pass/fail gates. "),
          x(
            "Criteria: unique insight or data, expert review, satisfies intent completely, clear author, updated date, internal links to hub, no factual errors, readable structure. Score 1–5; below 4 returns to editor.",
            "AI drafts often start at 2–3 without expert pass — rubric makes gap visible.",
          ),
          s(" Automate rubric reminders in CMS workflow — cannot publish without checklist completion."),
        ],
        [
          s("Helpful content means satisfying the query without forcing clicks through friction. "),
          x(
            "Answer the question in the first scroll; avoid empty intro paragraphs and clickbait gaps. Google and AI systems detect when users pogo-stick back to SERP — a negative quality signal.",
            "Commercial pages can still convert — but informational sections should genuinely inform.",
          ),
          s(" Test 'scroll satisfaction' on mobile — can a researcher complete their task without rage-clicking?"),
        ],
        [
          s("Monitor sitewide quality health in Search Console and crawlers. "),
          x(
            "GSC manual actions, indexing drops, and 'crawled not indexed' spikes flag quality issues. Ahrefs or Semrush audits surface thin content, orphan pages, and duplicate titles at scale.",
            "AI-assisted content programmes need monthly index health reviews — velocity increases risk.",
          ),
          s(" Set alert on indexed page count drops greater than 5% month-over-month."),
        ],
      ],
      examples: [
        {
          title: "Quality rubric — agency scale control",
          body: "A B2B agency publishing 40 AI-assisted posts monthly implemented a five-point rubric with mandatory SME sign-off. Indexed count stabilised after prior spike in 'crawled not indexed'. Client organic traffic quality improved — longer session duration, higher form rate.",
        },
        {
          title: "Pogo-stick fix — recipe site lesson for B2B",
          body: "A software comparison site noticed high bounce on definitional posts with 800-word intros before the answer. Restructured to answer-first format; dwell time rose 45%; featured snippet capture doubled. Quality signal was user satisfaction, not word count.",
        },
        {
          title: "Crawled not indexed — AI volume caution",
          body: "An affiliate site scaled ChatGPT content to 2,000 URLs. Sixty percent landed 'crawled not indexed' within three months. They pruned 40%, improved survivors with expert edits — index rate recovered. Quality beats quantity for indexation.",
        },
      ],
    }),
    buildSection({
      number: "1.7",
      title: "Topical Authority Building",
      subtitle: "Owning a semantic neighbourhood through hubs, clusters, and consistent depth",
      take: "Topical authority is earned when a site comprehensively covers a subject area with interlinked, expert content — signalling to Google and AI systems that you are a primary source. Hub-and-spoke architecture, consistent publishing cadence in one category, and internal linking discipline compound faster than scattered posts across unrelated topics.",
      why: "Brands that publish one post per fifty topics stay perpetually mediocre everywhere. Brands that dominate one neighbourhood become the default citation — in SERPs and AI answers.",
      paragraphs: [
        [
          s("Choose three to five topical territories aligned to pipeline — not your entire TAM. "),
          x(
            "Map hubs: pillar URL per territory, cluster posts for subtopics, glossary for entities. Semrush Keyword Gap and site structure visualisation show coverage holes.",
            "Depth in one territory beats shallow coverage in ten — especially for mid-domain-authority sites.",
          ),
          s(" Leadership signs off territory list quarterly — prevents SEO drift into low-impact topics."),
        ],
        [
          s("Internal linking is the authority engine most teams underuse. "),
          x(
            "Every cluster post links up to hub and sideways to related clusters. Use descriptive anchors with entity language — not 'click here'.",
            "AI tools can suggest internal link inserts from site search exports; humans verify relevance.",
          ),
          s(" Run quarterly internal link audits in Screaming Frog or Ahrefs — orphan cluster posts are wasted drafts."),
        ],
        [
          s("Refresh cadence signals living authority. "),
          x(
            "Update pillars when product, regulations, or SERP leaders change. GSC shows declining CTR on URLs that need freshness passes.",
            "AI assists refresh: summarise what changed in the industry, draft update sections — expert approves.",
          ),
          s(" Tag URLs with 'last substantively updated' date visible to users and in schema dateModified."),
        ],
      ],
      examples: [
        {
          title: "Hub rebuild — cybersecurity vendor",
          body: "A cybersecurity company collapsed 80 scattered posts into five hubs with 12–20 clusters each. Six-month organic traffic doubled; AI Overview citations appeared on three hub URLs. Topical authority was architectural — not one viral post.",
        },
        {
          title: "Internal link sprint — e-commerce SEO",
          body: "An outdoor retailer had 400 product-adjacent blog posts with zero cross-links. Ahrefs internal link opportunities report plus AI-suggested anchor text fixed 1,200 links in two weeks. Category page rankings rose without new content.",
        },
        {
          title: "Refresh programme — compliance SaaS",
          body: "Regulatory pages decayed fast. Quarterly refresh SOP: legal review, AI draft delta sections, schema dateModified update. Maintained top-three rankings through two algorithm updates competitors lost.",
        },
      ],
    }),
    buildSection({
      number: "1.8",
      title: "The Marketer SEO Strategy Lens",
      subtitle: "Six checks before your next SEO budget or agency review",
      take: "Before scaling SEO investment, run six checks: (1) Are we mapping entities and topics, not just keywords? (2) Have we audited AI search citation share? (3) Does E-E-A-T meet bar on money pages? (4) Do KPIs include zero-click visibility and pipeline? (5) Is strategy anchored in first-party conversion data? (6) Are we building topical authority in focused territories? AI accelerates execution — strategy stays human.",
      why: "This lens prevents two failures: nostalgia for 2015 keyword tactics and panic that SEO is dead. The discipline evolved — your strategy must too.",
      paragraphs: [
        [
          s("Checks one and two: semantic fit and AI visibility. "),
          x(
            "Can you draw your entity map for top territories? If keywords float without topical structure, fix architecture first.",
            "Run ten Perplexity prompts for buyer questions — if you're never cited, authority gap is the diagnosis, not meta tags.",
          ),
          s(" Semantic and AI checks belong in quarterly business reviews — not annual SEO audits."),
        ],
        [
          s("Checks three and four: trust and measurement honesty. "),
          x(
            "Money pages need named experts and first-hand proof — no anonymous AI walls.",
            "Report impressions and pipeline assists alongside clicks — or leadership will misread zero-click wins as failure.",
          ),
          s(" Trust and metrics alignment protect budget when SERP formats shift."),
        ],
        [
          s("Checks five and six: data grounding and focus. "),
          x(
            "Prioritise URLs and topics with CRM or product proof — not tool volume alone.",
            "Cap active territories at three to five until hubs rank — scattered SEO is invisible SEO.",
          ),
          s(" Run the six-check lens before agency SOWs and content vendor renewals."),
        ],
      ],
      examples: [
        {
          title: "CMO QBR — six-check slide",
          body: "A CMO added the six-check lens to quarterly reviews. Two proposed content vendors failed E-E-A-T and topical focus tests. Budget shifted to hub refresh and first-party data integration. Pipeline per organic session rose 28% year-over-year.",
        },
        {
          title: "Agency reframing — zero-click acceptance",
          body: "An agency reported 'traffic down, impressions up' until the client threatened cancellation. They rebuilt reporting with GSC impression share and branded lift — renewal signed. Lens check four saved the relationship.",
        },
        {
          title: "Territory focus — startup discipline",
          body: "A Series B startup wanted SEO for twelve product lines. Six-check forced three territories. One hub ranked top five in six months; prior scattered approach produced zero page-one URLs in a year. Focus was the strategy.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A stakeholder says SEO is dead because AI Overviews answer queries without clicks. Strongest marketer response?",
      options: [
        "Agree — stop all SEO investment.",
        "SEO evolved: optimise for topical authority, citations, and pipeline — measure visibility and assists, not clicks alone.",
        "Only invest in paid ads now.",
        "Ignore AI Overviews until they disappear.",
      ],
      correct: 1,
      correctFeedback:
        "Right. AI search shifts metrics and tactics — it does not eliminate the need for authority. Re-read sections 1.2 and 1.4.",
      wrongFeedback:
        "AI surfaces cite authoritative sources — SEO feeds that authority. Reframe KPIs for zero-click economics. Re-read sections 1.2 and 1.4.",
    },
    {
      kind: "order",
      q: "Order the semantic SEO workflow from foundation to ongoing maintenance.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Map core entities and topical territories",
        "Build hub-and-spoke content architecture",
        "Structure pages with answer-ready passages",
        "Apply E-E-A-T and quality rubric at publish",
        "Join GSC data to pipeline for prioritisation",
        "Refresh hubs and monitor AI citation share",
      ],
      correctFeedback:
        "Right. Entities → architecture → structure → quality → data → refresh. Re-read sections 1.1 and 1.7.",
      wrongFeedback:
        "Architecture and entities come before publish quality gates. Re-read sections 1.1 and 1.7.",
    },
    {
      kind: "categorize",
      q: "Sort each practice into semantic/authority era vs legacy keyword-era thinking.",
      categories: ["Semantic / authority era", "Legacy keyword-era"],
      items: [
        { text: "Hub-and-spoke topical clusters with internal linking.", category: 0 },
        { text: "Targeting one exact-match keyword per thin page.", category: 1 },
        { text: "Entity glossary for consistent terminology.", category: 0 },
        { text: "Keyword density targets in every brief.", category: 1 },
        { text: "Tracking AI Overview citation share.", category: 0 },
        { text: "Judging SEO success on blog sessions only.", category: 1 },
      ],
      correctFeedback:
        "Right. Modern SEO emphasises meaning, authority, and multi-surface visibility. Re-read sections 1.1 and 1.2.",
      wrongFeedback:
        "If it optimises strings without topical depth, it is legacy thinking. Re-read sections 1.1 and 1.2.",
    },
    {
      q: "A money page uses anonymous 'Staff' byline and generic AI content with no sources. Which framework flags the risk?",
      options: [
        "Keyword density limits",
        "E-E-A-T — missing expertise, experience, and trust signals",
        "Meta description length",
        "Social share count",
      ],
      correct: 1,
      correctFeedback:
        "Right. E-E-A-T operationalises trust and expertise — especially on consequential topics. Re-read section 1.3.",
      wrongFeedback:
        "Anonymous thin content fails experience and trust bars — not a formatting issue. Re-read section 1.3.",
    },
    {
      q: "GSC shows rising impressions but falling clicks on definitional queries. Best strategic interpretation?",
      options: [
        "SEO is failing — cut budget.",
        "Zero-click economics — visibility may still build brand and assisted pipeline; segment KPIs accordingly.",
        "Delete all definitional content immediately.",
        "Clicks are the only metric that matters.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Zero-click SERPs need impression and assist metrics, not click-only ROI. Re-read section 1.4.",
      wrongFeedback:
        "Impressions without clicks can still drive branded search and trust. Re-read section 1.4.",
    },
    {
      kind: "categorize",
      q: "Classify each data source as first-party vs third-party estimate.",
      categories: ["First-party data", "Third-party estimate"],
      items: [
        { text: "GSC query impressions for your site.", category: 0 },
        { text: "Ahrefs search volume estimate.", category: 1 },
        { text: "HubSpot MQLs attributed to organic landing pages.", category: 0 },
        { text: "Semrush traffic potential forecast.", category: 1 },
        { text: "Gong questions from closed-won calls.", category: 0 },
        { text: "Keyword difficulty score from a tool.", category: 1 },
      ],
      correctFeedback:
        "Right. Steer strategy with GSC, CRM, and product data; use tools for discovery estimates. Re-read section 1.5.",
      wrongFeedback:
        "Your ground truth is what happened on your site and in your pipeline. Re-read section 1.5.",
    },
  ],
});
