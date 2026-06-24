import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter03MktAiOverviewsAnswerEngineOptimisation = buildChapter({
  slug: "mkt-ai-overviews-answer-engine-optimisation",
  number: 3,
  shortTitle: "AI Overviews & Answer Engine Optimisation",
  title: "AI Overviews & Answer Engine Optimisation",
  readingMinutes: 24,
  summary:
    "Answer Engine Optimisation (AEO) is the practice of structuring content to be selected, cited, and trusted by Google AI Overviews, Perplexity, ChatGPT Search, and similar systems. Clicks may fall while citation visibility rises — marketers who master source selection logic, factual density, and tracking methodology stay present in the buyer research journey. This chapter covers the citation economy and a practical AEO strategy lens.",
  keyTakeaway:
    "AEO extends SEO: lead with direct answers, structure for extraction, cite verifiable facts, earn authority backlinks, and track citation share — not only blue-link rankings. Optimise for being the source AI quotes.",
  pmCallout: MKT_CALLOUT,
  sections: [
    buildSection({
      number: "3.1",
      title: "How AI Overviews Select Sources",
      subtitle: "What Google and answer engines appear to favour — and what you can influence",
      take: "AI Overviews and answer engines synthesise responses from indexed pages they judge relevant, authoritative, and extractable — often overlapping with traditional ranking signals plus clarity of answer blocks. Selection is opaque and query-dependent, but cited sources commonly show strong organic presence, structured content, recent updates, E-E-A-T markers, and passages that directly answer the question without fluff.",
      why: "Teams cannot control AI black boxes — but they can control content structure, authority, and indexability. Understanding selection patterns focuses effort on levers that actually move citation odds.",
      paragraphs: [
        [
          s("Baseline requirement: be indexed, crawlable, and ranking competitively for the query neighbourhood. "),
          x(
            "Pages never in top 30 organically rarely appear as AI Overview sources. Technical SEO and topical authority remain prerequisites — AEO is not a bypass.",
            "Check GSC indexing and canonical correctness on target URLs before AEO-specific tweaks.",
          ),
          s(" Fix indexation on hub pages first — AEO polish on orphaned URLs wastes time."),
        ],
        [
          s("Study citation patterns manually before scaling AEO playbooks. "),
          x(
            "Sample 30 target queries monthly: record AI Overview presence, cited domains, URL types. Semrush and Ahrefs track AI Overview SERP features; manual review catches nuance tools miss.",
            "Note whether citations favour definitions, lists, tables, or primary research — format signals vary by query class.",
          ),
          s(" Citation pattern log becomes your AEO competitive intel — review in monthly SEO standup."),
        ],
        [
          s("Diversity of sources in AI answers means share-of-voice, not winner-take-all. "),
          x(
            "Many Overviews cite three to eight sources — mid-authority specialists can appear alongside giants if their passage best answers a sub-question.",
            "Optimise specific passages and FAQ sections — not only homepage hero copy.",
          ),
          s(" Track 'citation share' — percent of sampled queries where your domain appears — as core AEO KPI."),
        ],
      ],
      examples: [
        {
          title: "Citation log — B2B analytics",
          body: "An analytics vendor logged 50 category queries weekly. Citations clustered on pages with methodology sections and dated benchmark tables — not generic thought leadership. They retrofitted methodology blocks to twenty URLs; citation share rose from 8% to 22% in four months.",
        },
        {
          title: "Indexation fix before AEO — ecommerce",
          body: "A retailer chased FAQ schema on faceted URLs blocked by robots.txt. Fixed crawl budget and canonicals on category hubs first — then FAQ blocks. AI Overview appearances followed organic ranking recovery — selection required discoverability.",
        },
        {
          title: "Mid-authority citation — niche legal guide",
          body: "DR 38 legal site cited in AI Overviews for state-specific compliance questions despite DR 70 publishers ranking above them. Passage had clearest step list and effective date — proof mid-sites win sub-questions with superior extractability.",
        },
      ],
    }),
    buildSection({
      number: "3.2",
      title: "The Citation Economy",
      subtitle: "Brand visibility when the click never happens — and how citations compound authority",
      take: "The citation economy treats AI and snippet citations as brand impressions that influence consideration, branded search, and sales conversations — even without sessions. Being named as a source in Perplexity or AI Overviews builds category authority prospects remember. Citations also correlate with link earning and journalist pickup as your data becomes the referenced standard.",
      why: "If you only value clicks, you will defund the content that shapes market narrative. Citation economy metrics align SEO with how modern research actually happens.",
      paragraphs: [
        [
          s("Quantify citation visibility alongside traditional SEO metrics. "),
          x(
            "Metrics: citation share on target query set, branded search lift, mention in sales call recordings ('I saw you cited in...'). Tools emerging for AI visibility tracking — supplement with manual sampling for accuracy.",
            "Report citations in QBRs the same way you report ranking distribution — trend matters.",
          ),
          s(" Set citation share goal per hub territory — e.g. appear in 25% of category definitional queries by Q4."),
        ],
        [
          s("Citations compound: referenced data attracts links, journalists, and further AI selection. "),
          x(
            "Original statistics become citation magnets — competitors cite you; AI systems trace primary source. Invest once in research, harvest citations for years with updates.",
            "Digital PR amplifies citation economy — press coverage feeds both links and AI source pools.",
          ),
          s(" Tag original research URLs in analytics — measure downstream links and citations separately."),
        ],
        [
          s("Competitive citation displacement is a defensible moat strategy. "),
          x(
            "When rivals dominate citations for your category definitions, publish superior definitional content with clearer structure and fresher data — then refresh faster.",
            "Monitor rival citation share monthly — displacement campaigns are deliberate hub projects.",
          ),
          s(" Citation share loss is early warning — act before organic rankings follow."),
        ],
      ],
      examples: [
        {
          title: "Benchmark report — citation flywheel",
          body: "Annual industry benchmark PDF and indexable web version cited in 40% of sampled Perplexity queries within six months. Journalists linked source; AI systems reinforced primary authority. Demo requests cited report on forms — citation economy drove pipeline without proportional click growth.",
        },
        {
          title: "Sales call mention tracking — Gong",
          body: "Gong keyword alert for 'Perplexity' and 'AI Overview' in sales calls — reps heard prospects reference citations on pricing comparisons. Validated AEO investment to CFO when session-based SEO looked flat.",
        },
        {
          title: "Competitor displacement — project management",
          body: "Rival owned definitional citations for 'resource allocation'. Competitor published clearer glossary with examples and FAQ schema, updated quarterly. Citation share flipped in nine months — branded search rose 15%.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "3.3",
      title: "Content Structure for AI Extraction",
      subtitle: "Answer blocks, headings, tables, and schema that machines can quote accurately",
      take: "AI systems extract passages — structure determines whether your content is quotable. Lead sections with direct answers, use question-form H2s, break steps into numbered lists, put comparisons in tables, and implement FAQ and Article schema where appropriate. Avoid burying answers below narrative fluff or interactive elements crawlers struggle to parse.",
      why: "The same facts unstructured lose citations to a competitor with a three-sentence answer block and a table. Structure is AEO's on-page lever.",
      paragraphs: [
        [
          s("Answer-first architecture: definition or conclusion in the first 50 words of each major section. "),
          x(
            "Pattern: '[Term] is [direct definition]. [One-sentence context].' Then expand with detail, examples, caveats.",
            "AI and featured snippets pull from this pattern — burying the lede hides you from extraction.",
          ),
          s(" SEO brief template requires answer block draft before long-form expansion — AI can draft both in one pass."),
        ],
        [
          s("Tables and lists beat prose for comparative and procedural queries. "),
          x(
            "Comparison queries: feature table with neutral tone. How-to queries: numbered steps with imperative verbs. Each row or step is a micro-passage AI can cite.",
            "HTML tables outperform images of tables — text must be machine-readable.",
          ),
          s(" Audit top twenty URLs for 'table or list opportunity' — retrofit beats net-new production."),
        ],
        [
          s("Schema reinforces structure — FAQ, HowTo, Article, Speakable where valid. "),
          x(
            "Validate in Google Rich Results Test. FAQ schema on genuine Q&A only — spam triggers penalties.",
            "dateModified in schema signals freshness to crawlers and AI refresh logic.",
          ),
          s(" Schema deployment checklist on publish — cannot be afterthought for AEO hubs."),
        ],
      ],
      examples: [
        {
          title: "Answer-first retrofit — cybersecurity glossary",
          body: "Forty glossary pages buried definitions in paragraph three. Restructured to answer-first plus FAQ schema. AI Overview citations on 18 terms within ten weeks — same facts, new structure.",
        },
        {
          title: "Comparison table — martech alternatives page",
          body: "'Tool A vs Tool B' page redesigned as neutral comparison table with methodology footnote. Cited in ChatGPT Search and Perplexity for comparison prompts — previously invisible with prose-only layout.",
        },
        {
          title: "FAQ schema discipline — health tech",
          body: "Health tech site added FAQ schema to 200 auto-generated questions — manual action risk. Pruned to 40 expert-validated FAQs with schema. Citations recovered; penalty avoided. Structure plus quality, not schema alone.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-seo-ch3-aio-citation",
      type: "flow",
      title: "AEO Citation Path",
      caption:
        "Direct answer block → structured sections → cited sources → AI selects page → brand visibility even with fewer clicks.",
    }),
    buildSection({
      number: "3.4",
      title: "Factual Density and Verifiability",
      subtitle: "Why vague thought leadership loses to specific, sourced, updatable facts",
      take: "Factual density means concentrated, verifiable claims — numbers, dates, named studies, methodology, limitations — rather than generic advice AI could generate without you. Answer engines prefer sources they can attribute; vague superlatives and unsupported assertions get skipped. Every pillar should declare what you measured, when, and how.",
      why: "AI training and retrieval reward specificity. Thin 'importance of digital transformation' prose never gets cited; '62% of mid-market CFOs surveyed in Q1 2026 delayed AP automation due to integration concerns' does.",
      paragraphs: [
        [
          s("Replace adjectives with data — proprietary or properly attributed third-party. "),
          x(
            "Audit pillars for sentences that could appear in any competitor's blog. Replace with stats, customer outcomes (with permission), or cited external research with links.",
            "AI drafts fluff fast — editor job is factual densification.",
          ),
          s(" Factual density score in quality rubric: minimum three verifiable facts per 1,000 words on tier-one pages."),
        ],
        [
          s("Footnotes and outbound links to primary sources increase trust signals. "),
          x(
            "Link to .gov, standards bodies, peer-reviewed sources where relevant. AI systems trace citation chains — being hub that links to primary sources helps.",
            "Avoid broken outbound links — Ahrefs audit quarterly.",
          ),
          s(" 'Sources' section at bottom of research posts — journalists and AI both use it."),
        ],
        [
          s("Visible freshness markers on fact-heavy content. "),
          x(
            "'Last updated March 2026' with changelog for material revisions. Stale statistics get dropped from AI answers in favour of newer pages.",
            "Calendar fact-refresh alongside algorithm update reviews.",
          ),
          s(" Deprecate outdated stats — redirect or update; never leave wrong numbers indexable."),
        ],
      ],
      examples: [
        {
          title: "Survey densification — HR tech",
          body: "Generic 'employees want flexibility' post replaced with proprietary survey n=400, segment breakdowns, methodology PDF. Perplexity cited within weeks; three trade pubs linked. Factual density was the differentiation.",
        },
        {
          title: "Footnote upgrade — fintech compliance",
          body: "Compliance guide added inline citations to SEC and FINRA primary docs. AI Overview citation rate 3x vs sister page without footnotes — same topic, different verifiability.",
        },
        {
          title: "Stale stat penalty — martech",
          body: "2022 benchmark still ranking but citations dropped in AI answers. Updated with 2026 data — citations returned within one crawl cycle. Freshness competitive in citation economy.",
        },
      ],
    }),
    buildSection({
      number: "3.5",
      title: "Perplexity Optimisation",
      subtitle: "How Perplexity selects citations — and tactics that improve appearance in answers",
      take: "Perplexity combines retrieval-augmented search with source attribution — users see inline citations with links. It favours clear extractable passages, authoritative domains, recent content, and pages that directly address query facets. Perplexity Pro and publisher programmes evolve — core play remains: rank-worthy content, structured answers, and earned authority.",
      why: "B2B buyers increasingly research in Perplexity before Google. Presence there is measurable brand equity — especially for technical and comparison queries.",
      paragraphs: [
        [
          s("Run weekly Perplexity citation audits on your buyer question set. "),
          x(
            "Log query, answer summary, cited URLs, your presence. Note passage type cited — definition, list, stat.",
            "Compare cited pages' structure to yours — gap analysis is visual, not tool-export only.",
          ),
          s(" Perplexity audit template shared with content team — five queries per person weekly builds habit."),
        ],
        [
          s("Earn links from sources Perplexity already trusts in your category. "),
          x(
            "If Perplexity cites Wikipedia, major trade pubs, and .edu — digital PR toward those ecosystems lifts your odds.",
            "Community presence (expert forums, GitHub for dev tools) surfaces in some Perplexity chains.",
          ),
          s(" Perplexity optimisation is SEO plus PR — not meta tag tricks."),
        ],
        [
          s("Publish indexable versions of high-value PDFs and gated research. "),
          x(
            "Perplexity cannot cite what crawlers cannot read. Executive summaries on open web with full PDF optional — balance lead gen with citation visibility.",
            "Unblock useful excerpts from gated assets for AEO — gate depth, not definitions.",
          ),
          s(" Review gated content policy — citation economy may justify ungating summaries."),
        ],
      ],
      examples: [
        {
          title: "Perplexity audit loop — dev tools",
          body: "Developer tools company audited 40 setup and comparison queries in Perplexity. Docs pages with code blocks outranked marketing blogs for citations. Shifted investment to docs SEO and ungated quickstarts — citation share doubled.",
        },
        {
          title: "PR → Perplexity — climate tech",
          body: "Trade publication feature linked to methodology page. That URL became default Perplexity citation for category efficiency benchmarks for six months. PR targeted publications Perplexity already cited.",
        },
        {
          title: "Ungated summary — research report",
          body: "Gated annual report got two-sentence web summary with key stats indexable. Perplexity cited summary; full PDF still gated for lead capture. Citations and MQLs both rose.",
        },
      ],
    }),
    buildSection({
      number: "3.6",
      title: "ChatGPT Search and Bing Copilot",
      subtitle: "OpenAI and Microsoft answer surfaces — overlapping tactics, distinct tracking",
      take: "ChatGPT Search and Bing Copilot pull from web indexes with conversational context — citation patterns resemble Perplexity and AI Overviews: authoritative, structured, fresh, directly relevant passages win. Tracking is manual today; sample query sets and log outcomes. Bing Webmaster Tools and IndexNow can accelerate discovery for Copilot ecosystem.",
      why: "Enterprise buyers use ChatGPT with search enabled inside procurement research. Absence from those answers is invisible in GSC — you must look deliberately.",
      paragraphs: [
        [
          s("Build a shared query set across Perplexity, ChatGPT Search, and Google AI Overviews. "),
          x(
            "Same 50 buyer questions — log citation overlap. Universal wins deserve hub investment; platform-specific gaps inform format tweaks.",
            "Rotate query set quarterly as product and market evolve.",
          ),
          s(" Unified AEO tracker spreadsheet — one source of truth for answer engine presence."),
        ],
        [
          s("IndexNow and Bing WMT for Microsoft ecosystem discoverability. "),
          x(
            "Faster indexing helps fresh factual content appear in Copilot answers sooner after publish or update.",
            "Not a replacement for authority — accelerant only.",
          ),
          s(" Submit key hub URLs on publish via IndexNow — automate in CMS if possible."),
        ],
        [
          s("Conversational queries are longer — cover natural language variants in FAQ sections. "),
          x(
            "ChatGPT users ask full sentences. FAQ H2s mirroring natural questions improve match.",
            "AI keyword expansion from section 2.5 feeds AEO question coverage.",
          ),
          s(" Voice and conversational phrasing in FAQs — not only keyword-stuffed headers."),
        ],
      ],
      examples: [
        {
          title: "Cross-engine citation map — SaaS security",
          body: "Security SaaS tracked 30 queries across three engines. 70% citation overlap on definitional queries; comparison queries diverged — ChatGPT favoured neutral third-party reviews, Google favoured vendor docs with schema. Format strategy split by engine and query type.",
        },
        {
          title: "IndexNow publish workflow — newsy product updates",
          body: "Product launch pages submitted via IndexNow on publish. Appeared in Bing Copilot answers within 48 hours for product-name queries — faster than organic alone. Time-sensitive AEO win.",
        },
        {
          title: "Natural language FAQ — accounting software",
          body: "Rewrote H2s as full questions users type in ChatGPT ('How do I reconcile Stripe payouts in QuickBooks?'). Citations in ChatGPT Search rose on long-tail procedural queries — structure matched conversational retrieval.",
        },
      ],
    }),
    buildSection({
      number: "3.7",
      title: "Tracking AI Search Visibility",
      subtitle: "Manual sampling, emerging tools, and proxy metrics when perfect data does not exist",
      take: "Perfect AI visibility analytics do not exist yet — mature programmes combine manual citation sampling, SERP feature tracking in Semrush/Ahrefs, branded search trends, GSC impression growth on zero-click queries, and sales qualitative signals. Consistency beats false precision: same queries, same methodology, monthly trend.",
      why: "You cannot optimise what you do not measure. Without AEO tracking, leadership defaults to session-only ROI and misallocates budget.",
      paragraphs: [
        [
          s("Define a fixed query panel for reproducible measurement. "),
          x(
            "50–100 queries stratified: definitional, comparison, implementation, brand. Same panel monthly — do not chase random prompts.",
            "Include queries where you rank top 10 and where you do not — measure citation decoupled from rank.",
          ),
          s(" Query panel approved by marketing and sales — reflects real buyer language."),
        ],
        [
          s("Use tool SERP features as partial automation. "),
          x(
            "Semrush and Ahrefs AI Overview tracking scales monitoring; validate 10% manually for false positives.",
            "Supplement with Peec, Otterly, or similar AI visibility startups where budget allows — compare vendor methodology.",
          ),
          s(" Document tool limitations in reporting footnotes — honesty builds CFO trust."),
        ],
        [
          s("Proxy metrics bridge until citation tools mature. "),
          x(
            "Branded search volume in GSC, direct traffic, impression share on informational queries, backlink velocity to research URLs.",
            "Assisted conversions in multi-touch models capture zero-click influence.",
          ),
          s(" Dashboard: citation share (manual) + branded search + assisted pipeline — three-legged stool."),
        ],
      ],
      examples: [
        {
          title: "Monthly citation panel — consistent methodology",
          body: "Team sampled same 75 queries first Monday monthly — spreadsheet trended citation share from 12% to 31% over year. CFO accepted metric because methodology was documented and stable — not because vendor dashboard said so.",
        },
        {
          title: "Semrush AI + manual validation",
          body: "Semrush flagged AI Overview on keyword; manual check showed Overview cited competitor but not them despite rank #4. Passage-level gap diagnosis — restructured answer block; cited next month. Tool alerted; human diagnosed.",
        },
        {
          title: "Assisted pipeline proxy — zero-click proof",
          body: "Multi-touch model showed informational URLs with falling clicks still appeared in 40% of won deal paths as first touch. Saved AEO budget when last-click report suggested cut.",
        },
      ],
    }),
    buildSection({
      number: "3.8",
      title: "The Marketer AEO Strategy Lens",
      subtitle: "Six checks before declaring an AEO programme — or hiring an 'AEO agency'",
      take: "Run six checks: (1) Are hub pages indexed and ranking competitively? (2) Is content structured for extraction — answer-first, tables, FAQ? (3) Does factual density meet verifiability bar? (4) Are you tracking citation share on a fixed query panel? (5) Is gated content blocking cite-worthy facts? (6) Do KPIs include visibility beyond clicks? AEO without SEO fundamentals is theatre.",
      why: "AEO agencies sell schema packages while hubs are noindexed. This lens keeps investment ordered and measurable.",
      paragraphs: [
        [
          s("Checks one and two: fundamentals and structure. "),
          x(
            "No index, no citation — technical first.",
            "Structure audit on money hubs: answer in first 50 words per H2? Table where comparison intent exists?",
          ),
          s(" Structure retrofit often beats new AEO content."),
        ],
        [
          s("Checks three and four: facts and measurement. "),
          x(
            "Three verifiable facts per thousand words on tier-one — or why not?",
            "Fixed query panel logged monthly — no panel, no programme.",
          ),
          s(" Measurement discipline separates strategy from buzzword."),
        ],
        [
          s("Checks five and six: access and KPI alignment. "),
          x(
            "Ungate summaries of research worth citing.",
            "Report citation share and assisted pipeline — not sessions alone on informational assets.",
          ),
          s(" Run lens before AEO vendor contracts — reject schema-only pitches without hub strategy."),
        ],
      ],
      examples: [
        {
          title: "AEO agency vetting — six-check filter",
          body: "Vendor promised 'AI ranking' via schema injection. Six-check failed indexation and factual density on client hubs. Hired in-house retrofit instead — citation share rose 19% in two quarters without vendor.",
        },
        {
          title: "Executive dashboard — three-legged stool",
          body: "CMO dashboard: manual citation share, branded search, assisted organic pipeline. All three trending up while clicks flat — board continued SEO+AEO funding.",
        },
        {
          title: "Ungate decision — research team buy-in",
          body: "Research team resisted ungating. Compromise: key stats and methodology on web, full dataset gated. Perplexity citations rose; gated form fills held steady. Lens check five unlocked compromise.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Your hub ranks #8 organically but never appears in AI Overview citations. Most likely fix?",
      options: [
        "Buy more exact-match domains.",
        "Improve passage extractability — answer-first blocks, tables, factual density — not only meta tags.",
        "Remove all content from Google index.",
        "Copy competitor AI Overview text exactly.",
      ],
      correct: 1,
      correctFeedback:
        "Right. AEO favours structured, quotable passages on rank-worthy URLs. Re-read sections 3.1 and 3.3.",
      wrongFeedback:
        "Ranking helps but structure and verifiability drive citation selection. Re-read sections 3.1 and 3.3.",
    },
    {
      kind: "order",
      q: "Order the AEO content optimisation workflow.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Ensure URLs are indexed and rank competitively",
        "Audit citation patterns on target queries",
        "Restructure with answer-first passages and tables",
        "Increase factual density with sourced data",
        "Implement valid FAQ or Article schema",
        "Track citation share monthly on fixed query panel",
      ],
      correctFeedback:
        "Right. Fundamentals → intel → structure → facts → schema → measurement. Re-read sections 3.1 and 3.7.",
      wrongFeedback:
        "Indexation and ranking precede extraction tweaks. Re-read sections 3.1 and 3.7.",
    },
    {
      kind: "categorize",
      q: "Sort each tactic into citation economy mindset vs click-only SEO mindset.",
      categories: ["Citation economy", "Click-only mindset"],
      items: [
        { text: "Track Perplexity citation share on buyer questions.", category: 0 },
        { text: "Kill definitional content because CTR is low.", category: 1 },
        { text: "Publish indexable summary of benchmark research.", category: 0 },
        { text: "Judge all SEO success by blog sessions.", category: 1 },
        { text: "Monitor branded search lift from SERP visibility.", category: 0 },
        { text: "Avoid tables because they look 'ugly' in prose posts.", category: 1 },
      ],
      correctFeedback:
        "Right. AEO values visibility and assists beyond raw clicks. Re-read sections 3.2 and 3.7.",
      wrongFeedback:
        "Citations and brand search matter when clicks fall. Re-read sections 3.2 and 3.7.",
    },
    {
      q: "A tier-one page has flowing prose but no stats, dates, or sources. AEO risk?",
      options: [
        "None — AI prefers long prose.",
        "Low factual density — AI systems favour verifiable, specific claims they can attribute.",
        "Only a problem for B2C.",
        "Fixed by adding more adjectives.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Verifiable facts and sources increase citation odds. Re-read section 3.4.",
      wrongFeedback:
        "Vague thought leadership loses to specific sourced facts. Re-read section 3.4.",
    },
    {
      q: "Gated PDF contains all benchmark data; web page is thin signup wall. Perplexity impact?",
      options: [
        "Perplexity cites gated PDFs fully.",
        "Crawlers cannot extract facts — publish indexable summary for citation while gating depth.",
        "Gating always improves SEO.",
        "ChatGPT ignores all research content.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Ungate cite-worthy summaries; gate depth if needed. Re-read sections 3.5 and 3.8.",
      wrongFeedback:
        "Answer engines need machine-readable facts on indexable URLs. Re-read sections 3.5 and 3.8.",
    },
    {
      kind: "categorize",
      q: "Classify each metric as direct AEO tracking vs useful proxy.",
      categories: ["Direct AEO tracking", "Useful proxy metric"],
      items: [
        { text: "Manual citation share on fixed query panel.", category: 0 },
        { text: "Branded search impressions in GSC.", category: 1 },
        { text: "Semrush AI Overview SERP feature presence.", category: 0 },
        { text: "Assisted conversions in multi-touch model.", category: 1 },
        { text: "Logged Perplexity cited URLs per audit.", category: 0 },
        { text: "Backlinks to research methodology page.", category: 1 },
      ],
      correctFeedback:
        "Right. Combine direct citation sampling with proxies until analytics mature. Re-read section 3.7.",
      wrongFeedback:
        "Direct tracking is citation logging; proxies include branded search and assists. Re-read section 3.7.",
    },
  ],
});
