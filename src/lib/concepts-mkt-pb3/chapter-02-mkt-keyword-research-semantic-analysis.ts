import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter02MktKeywordResearchSemanticAnalysis = buildChapter({
  slug: "mkt-keyword-research-semantic-analysis",
  number: 2,
  shortTitle: "Keyword Research & Semantic Analysis",
  title: "Keyword Research & Semantic Analysis",
  readingMinutes: 24,
  summary:
    "Keyword research in 2026 goes beyond volume sorting — it maps intent, semantic neighbourhoods, and question patterns that AI search surfaces cite. Marketers who cluster by meaning, score difficulty with business context, and prioritise from pipeline data build content roadmaps that rank and get referenced in AI Overviews. This chapter covers AI-assisted discovery, intent classification, competitor gaps, and prioritisation lenses that turn keyword lists into strategy.",
  keyTakeaway:
    "Stop chasing isolated high-volume terms. Build semantic clusters from seed topics, classify intent rigorously, fill competitor gaps with differentiated angles, and prioritise with difficulty plus commercial impact — AI accelerates list building; humans own the filter.",
  pmCallout: MKT_CALLOUT,
  sections: [
    buildSection({
      number: "2.1",
      title: "Beyond Search Volume",
      subtitle: "Why volume alone misleads prioritisation — and what to weigh instead",
      take: "Search volume estimates from Ahrefs, Semrush, and Google Keyword Planner are directional, not gospel — they smooth seasonality, miss long-tail clusters, and ignore click propensity on zero-click SERPs. Smart prioritisation layers business relevance, intent, conversion history, competitive gap, and difficulty. A 500-volume keyword that closes deals beats a 50,000-volume term that attracts students.",
      why: "Junior marketers and AI tools default to sorting by volume. Leadership sees big numbers and approves wrong topics. This section gives you a scoring vocabulary to defend focus.",
      paragraphs: [
        [
          s("Treat volume as one input in a multi-factor score — never the sort key alone. "),
          x(
            "Build a spreadsheet: keyword, volume estimate, intent, CPC proxy (commercial signal), your current rank, competitor strength, CRM topic match, difficulty. Weight factors by quarterly goal — pipeline quarters overweight commercial intent and CRM match.",
            "Google Keyword Planner shows ranges for ads — use Ahrefs or Semrush for organic estimates but calibrate against GSC once you rank.",
          ),
          s(" Present prioritisation as a scored matrix in planning meetings — not a sorted export screenshot."),
        ],
        [
          s("Long-tail clusters often sum to more qualified traffic than one head term. "),
          x(
            "Ahrefs 'Group by parent topic' and Semrush keyword grouping reveal clusters where combined volume and lower difficulty beat frontal assault on competitive heads.",
            "AI can suggest long-tail variants from seed topics — validate each against SERP SERP features and AI Overview presence.",
          ),
          s(" Report cluster opportunity size — leadership understands '42 related queries' better than one scary difficulty score."),
        ],
        [
          s("Zero-volume keywords from sales and support often convert highest. "),
          x(
            "Tools show zero or 10 volume for niche buyer phrases — GSC later proves impressions exist. First-party question mining fills what tools miss.",
            "Maintain a 'CRM keyword' list separate from tool exports — merge at prioritisation, not discovery only.",
          ),
          s(" Label keywords by source: tool, GSC, sales, AI brainstorm — traceability prevents fantasy targets."),
        ],
      ],
      examples: [
        {
          title: "Weighted scorecard — enterprise SaaS",
          body: "An enterprise SaaS team scored 300 keywords: 40% weight on commercial intent, 30% on CRM deal correlation, 20% on gap vs competitor, 10% on volume. Top priorities were 800-volume integration terms, not 40k 'what is' queries. Demo requests from organic rose 24% with half the content output.",
        },
        {
          title: "Cluster vs head term — HR software",
          body: "Head term 'employee engagement' — difficulty 78, dominated by Wikipedia and Gallup. Cluster of twelve manager-behavior long-tails summed to similar traffic potential at difficulty 35–45. They owned the cluster in nine months; never cracked top ten on the head. Semantic cluster strategy beat volume vanity.",
        },
        {
          title: "Zero-volume win — Gong-sourced keyword",
          body: "Semrush showed zero volume for 'SOC 2 Type II timeline for startups'. Sales heard it weekly. Published expert guide; GSC showed 1,400 monthly impressions within four months. Volume estimate was wrong; buyer relevance was right.",
        },
      ],
    }),
    buildSection({
      number: "2.2",
      title: "AI-Assisted Keyword Research",
      subtitle: "Using ChatGPT, Semrush AI, and Ahrefs to expand lists — with human validation gates",
      take: "AI compresses keyword brainstorming: seed expansion, question generation, synonym clustering, and competitor theme extraction in minutes. Outputs are hypotheses until validated against search data and SERPs. The workflow is AI expand → tool validate → human prioritise — never publish from AI lists alone.",
      why: "Teams skip validation because AI lists look comprehensive. Unvalidated lists produce content that sounds right but targets phantom demand or impossible difficulty.",
      paragraphs: [
        [
          s("Use structured prompts for reproducible keyword expansion. "),
          x(
            "Template: 'Given [product] for [audience], list 50 questions buyers ask by funnel stage — informational, comparison, implementation, pricing'. Export to CSV; upload seeds to Ahrefs Keywords Explorer or Semrush Keyword Magic Tool.",
            "Add constraints: industry, geography, exclude consumer meanings if B2B.",
          ),
          s(" Store prompt templates in your SEO ops doc — consistency beats one-off genius prompts."),
        ],
        [
          s("AI clustering accelerates semantic grouping before tool-native cluster features. "),
          x(
            "Paste 200 keywords into Claude: 'group by semantic intent and suggest hub names'. Cross-check with Ahrefs Parent Topic column — disagreements often reveal interesting sub-niches.",
            "Semrush Keyword Strategy Builder and Ahrefs Keywords Explorer cluster views provide algorithmic backup.",
          ),
          s(" Human names hubs — AI suggests groups; strategists align to product and messaging."),
        ],
        [
          s("Automate validation loops where possible. "),
          x(
            "Zapier or scripts: AI output CSV → bulk upload to keyword tool API → return volume, KD, SERP features. Flags zero-volume and impossible difficulty before humans review.",
            "Weekly cap on net-new keywords entering backlog — infinite AI lists swamp prioritisation.",
          ),
          s(" Validation is a gate, not optional cleanup — same discipline as legal review for claims."),
        ],
      ],
      examples: [
        {
          title: "ChatGPT + Ahrefs bulk — agency workflow",
          body: "An agency prompts ChatGPT for question variants per client pillar, bulk-checks in Ahrefs, filters KD under 40 and volume over 100. Strategist reviews 80 survivors, picks 15 per quarter. AI reduced research hours from 12 to 3 per client monthly — validation prevented three off-topic clusters.",
        },
        {
          title: "Semrush AI — intent mislabel caught",
          body: "Semrush AI suggested 'AP automation ROI calculator' as informational. Manual SERP check showed tool and vendor pages — commercial investigation. Reclassified intent; built interactive asset instead of blog. AI seed was right; human SERP read saved format choice.",
        },
        {
          title: "Unvalidated AI list disaster — affiliate site",
          body: "A publisher published 200 ChatGPT keywords without tool check — 70% had no searchable demand or were typo variants. Indexed bloat, zero traffic. They rebuilt with validate-first workflow; pruned 150 URLs. AI expands; tools and humans filter.",
        },
      ],
    }),
    buildSection({
      number: "2.3",
      title: "Intent Classification",
      subtitle: "Informational, commercial, transactional, and navigational — classified from SERPs, not labels",
      take: "Search intent determines content format and success metric. Classify by analysing SERP composition: blogs and Wikipedia suggest informational; 'best X' lists and comparison tables signal commercial investigation; product and pricing pages dominate transactional. AI can draft intent labels — humans verify with live SERP review because misclassified intent produces wrong assets.",
      why: "Publishing a blog where Google wants a tool, or a product page where searchers want a guide, guarantees underperformance regardless of word count or AI polish.",
      paragraphs: [
        [
          s("Run SERP-based intent classification for every priority keyword. "),
          x(
            "Record top ten URL types, SERP features (snippets, shopping, AI Overview), and dominant content format. Ahrefs SERP overview and Semrush intent labels are starting points — not final truth.",
            "Navigational queries (brand names) need different treatment — often defend brand SERP, not new content.",
          ),
          s(" Add 'intent confidence' column: high after manual SERP, medium after tool only, low needs review."),
        ],
        [
          s("Map intent to funnel stage and asset type explicitly. "),
          x(
            "Informational → guide, glossary, video. Commercial → comparison, review, alternative. Transactional → product, pricing, demo. Mismatch is the #1 format error in AI content programmes.",
            "Some keywords are mixed intent — SERP shows split formats. Choose flank angle or build hybrid with clear sections.",
          ),
          s(" Intent-to-template mapping in CMS prevents writers defaulting to blog for everything."),
        ],
        [
          s("AI intent classifiers need spot-check sampling. "),
          x(
            "Batch-classify 500 keywords with GPT using SERP snippets pasted as context — sample 10% manual audit. Error rate above 15% means refine prompt or classify manually for money terms.",
            "Commercial misclassified as informational wastes pillar budget on unwinnable SERP formats.",
          ),
          s(" Money keywords get manual SERP review — always, regardless of AI confidence."),
        ],
      ],
      examples: [
        {
          title: "SERP format flip — project management",
          body: "'Best project management software' SERP was listicles and review sites — not vendor blogs. A vendor kept publishing blogs; never ranked. They launched comparison hub with methodology and original survey — page two in four months. Intent classification should have happened year one.",
        },
        {
          title: "AI batch classify + audit — e-commerce",
          body: "An e-commerce team AI-classified 2,000 keywords; audit found 18% errors on commercial terms. Fixed taxonomy before content calendar lock. Avoided 40 wrong-format briefs — estimated six figures saved in production waste.",
        },
        {
          title: "Navigational defence — rebranded SaaS",
          body: "Post-rebrand, navigational queries for old name still spiked. Intent = navigational; solution was redirect and brand SERP optimisation, not new blog content. Intent lens redirected effort from content factory to technical and PR.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "2.4",
      title: "Semantic Keyword Clusters",
      subtitle: "Grouping by meaning to build hubs — not one keyword per URL",
      take: "Semantic clusters group keywords that share intent and entity context so one hub plus supporting URLs cover the neighbourhood comprehensively. Google rewards sites that exhaust subtopics with internal links — not sites with fifty thin pages each targeting a synonym variant. Cluster maps drive editorial calendars and prevent cannibalisation.",
      why: "Without clustering, keyword research produces a flat list that becomes fifty disconnected posts competing with each other. Clusters turn lists into architecture.",
      paragraphs: [
        [
          s("Start clusters from business seed topics, not tool dumps. "),
          x(
            "Seeds: product modules, buyer jobs-to-be-done, competitor battlecard themes. Expand with Ahrefs 'Also rank for' on seed URLs and Semrush Keyword Magic Tool grouping.",
            "Name each cluster with hub keyword (highest business value) and spoke list (supporting queries).",
          ),
          s(" One hub per cluster — multiple hubs create cannibalisation unless clearly scoped."),
        ],
        [
          s("Cannibalisation audit before assigning keywords to URLs. "),
          x(
            "GSC filter: multiple URLs ranking for same query — merge or differentiate. Ahrefs cannibalisation report flags overlap.",
            "AI can suggest merge candidates from URL + keyword export — human decides redirect vs consolidate content.",
          ),
          s(" New cluster posts must declare primary keyword and linking hub — no orphan spokes."),
        ],
        [
          s("Cluster completeness score drives authority. "),
          x(
            "Checklist per cluster: pillar live, 80% of high-priority spokes published, internal links bidirectional, schema on hub. Semrush topic research 'missing' subtopics fill gaps.",
            "Incomplete clusters leak authority — finish before starting cluster four.",
          ),
          s(" Dashboard cluster completion in monthly SEO review — leadership sees progress, not keyword count."),
        ],
      ],
      examples: [
        {
          title: "Ahrefs parent topic — payments cluster",
          body: "Seed 'virtual card management' expanded to 34 keywords in one parent topic. One hub, eight spokes, glossary entries for entities. Captured page one for 22 keywords in six months vs zero when they had ten competing thin pages.",
        },
        {
          title: "Cannibalisation merge — martech blog",
          body: "Three URLs ranked for 'marketing attribution models' at positions 8–15. Merged into one definitive guide with redirects. Consolidated to position 3; combined traffic up 90%. Cluster discipline includes consolidation.",
        },
        {
          title: "AI cluster naming — legal tech",
          body: "ChatGPT grouped 150 contract-management keywords into six clusters; strategist renamed two to match product modules and killed one overlapping sales territory. Cluster map synced to Airtable calendar — every row linked to hub URL.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-seo-ch2-keyword-clusters",
      type: "flow",
      title: "Keyword Cluster Workflow",
      caption:
        "Seed topics → intent classify → semantic clusters → gap and difficulty scoring → prioritised content map.",
    }),
    buildSection({
      number: "2.5",
      title: "Question Queries and PAA",
      subtitle: "Mining People Also Ask, forums, and AI question expansions for passage-level wins",
      take: "Question queries — who, what, how, why, best — power featured snippets, PAA boxes, voice search, and AI Overview citations. Ahrefs Questions report, AlsoAsked, GSC query filters, and Reddit listening surface question patterns. Each question is a passage opportunity within a cluster page or a dedicated FAQ asset with FAQ schema.",
      why: "Question coverage is the fastest path to SERP real estate in AI-heavy informational SERPs — often easier than beating entrenched domains on head terms.",
      paragraphs: [
        [
          s("Harvest questions from tools and first-party sources into cluster FAQ plans. "),
          x(
            "AlsoAsked and Ahrefs show PAA trees. GSC regex filter on queries containing 'how', 'what', 'why'. Sales calls add questions tools never list.",
            "Map each question to hub section or standalone FAQ URL — avoid duplicate answers across pages.",
          ),
          s(" Question inventory lives in cluster brief — writers answer every high-priority question in one publish."),
        ],
        [
          s("Structure answers for extraction: 40–60 word direct answer, then depth. "),
          x(
            "Snippet-friendly paragraphs start with definitional sentence. Follow with bullets, steps, or table.",
            "FAQ schema on dedicated FAQ pages and key sections — validates in Google Rich Results Test.",
          ),
          s(" AI drafts FAQ answers; expert verifies — wrong FAQ schema damages trust fast."),
        ],
        [
          s("Monitor question query performance separately in GSC. "),
          x(
            "Filter question queries; track impressions and average position. Rising impressions on questions often precede AI Overview citations.",
            "Refresh answers when PAA competitors update — question SERPs shift faster than head terms.",
          ),
          s(" Quarterly question gap review per hub — new PAA nodes appear as category evolves."),
        ],
      ],
      examples: [
        {
          title: "AlsoAsked → FAQ schema — insurance broker",
          body: "AlsoAsked mapped 45 PAA questions on 'small business liability insurance'. Built hub with FAQ schema blocks answering each in first paragraph. Won 19 PAA features and four AI Overview citations in three months — traffic modest, lead quality high.",
        },
        {
          title: "GSC question filter — developer tools",
          body: "GSC showed rising 'how to migrate from X' queries — not in Ahrefs top lists. Published migration hub with step sections per question variant. Became top assist URL in HubSpot multi-touch report for competitive takeout deals.",
        },
        {
          title: "Reddit question mining — fintech",
          body: "Team scraped r/smallbusiness threads for payroll questions, AI-clustered themes, validated in Semrush. Ten spoke posts targeted language real users used — not jargon from product marketing. Engagement and rankings beat prior agency keyword list.",
        },
      ],
    }),
    buildSection({
      number: "2.6",
      title: "Competitor Keyword Gap Analysis",
      subtitle: "Finding what rivals rank for that you do not — and flanking instead of copying",
      take: "Content gap reports in Semrush and Ahrefs compare your domain to competitors' organic keywords. Gaps fall into three buckets: must-win (core category), flank (subtopic they own weakly), and ignore (irrelevant traffic). AI summarises gap exports into themes — humans assign strategic action: build, merge, or deprioritise.",
      why: "Raw gap exports overwhelm teams into copying competitor topics without differentiation. Gap analysis is intelligence for flanking — not a plagiarism backlog.",
      paragraphs: [
        [
          s("Run gap analysis against three competitor types: direct product, content leader, and aspirational authority. "),
          x(
            "Direct product competitor gaps reveal commercial battlegrounds. Content leader gaps show editorial standards to match or flank. Aspirational gaps inspire long-term territory — not Q1 calendar.",
            "Different competitors for different clusters — one rival does not fit all.",
          ),
          s(" Document competitor set per hub in cluster map — refresh when market shifts."),
        ],
        [
          s("Score gaps with differentiation potential, not only KD and volume. "),
          x(
            "Ask: can we add proprietary data, expert voice, or better UX format? If gap is parity listicle and rival has 500 backlinks, flank subtopic instead.",
            "AI prompt: 'for gap keyword X, suggest three flank angles with original proof types' — not 'write like competitor'.",
          ),
          s(" Reject gaps that fail parity test — saves production budget."),
        ],
        [
          s("Track gap closure over time — SEO is a share game. "),
          x(
            "Monthly: keywords where you entered top 20 vs still missing. Share of voice reports in Semrush visualize cluster progress.",
            "Closed gaps with redirects when you consolidate — gap list stays living document.",
          ),
          s(" Report 'gap closure rate' to leadership — clearer than raw ranking count."),
        ],
      ],
      examples: [
        {
          title: "Semrush gap — flank not frontal",
          body: "Competitor owned 'best CRM for nonprofits' — KD 65, strong backlinks. Gap analysis found weak coverage on 'CRM grant reporting' subtopic. Flank post ranked page one in ten weeks; later internal-linked to nonprofit hub. Gap intel chose asymmetry.",
        },
        {
          title: "Ahrefs three-competitor view — B2B API",
          body: "Compared API docs site against Stripe, Twilio, and SendGrid content gaps. Implementation tutorials missing across board — they built tutorial cluster with code samples. Became top developer acquisition channel — gap was format, not keyword luck.",
        },
        {
          title: "Gap copy trap rejected",
          body: "Agency proposed 100 gap keywords as AI rewrites of rival pages. In-house SEO scored — 80 failed differentiation test. Kept 12 with original survey angle. Avoided index bloat and legal exposure.",
        },
      ],
    }),
    buildSection({
      number: "2.7",
      title: "Keyword Difficulty Scoring",
      subtitle: "Interpreting KD metrics with your domain reality — and when to ignore the number",
      take: "Keyword difficulty (KD) scores estimate ranking effort from backlink profiles of top results — algorithms vary by tool. Low DR sites should not frontal-assault KD 70+ heads; they should cluster, flank, and earn links on winnable terms. Adjust tool KD with your GSC history: keywords where you rank top 30 despite 'high' KD are proven pockets.",
      why: "KD prevents naive prioritisation but also scares teams away from winnable long-tails bundled in clusters. Context turns KD from veto into input.",
      paragraphs: [
        [
          s("Calibrate tool KD against your domain's proven ranking band. "),
          x(
            "Export GSC queries where you rank 1–20; note Ahrefs KD for each. Your site may win KD 45 with authority in niche but fail KD 30 in generic spaces.",
            "Build internal 'effective KD' offset per topic territory based on historical performance.",
          ),
          s(" Effective KD belongs in prioritisation spreadsheet — raw KD misleads without calibration."),
        ],
        [
          s("Supplement KD with SERP weakness analysis. "),
          x(
            "High KD but weak pages — thin content, old dates, forum results — are opportunities. Low KD but SERP full of .gov and Wikipedia may be unwinnable for snippets.",
            "Manual SERP review for top ten priorities — ten minutes prevents quarter-long mistakes.",
          ),
          s(" Flag 'SERP weak spot' on keywords where KD overstates difficulty."),
        ],
        [
          s("Link requirement estimates for competitive gaps. "),
          x(
            "Ahrefs keyword difficulty plus referring domains on top three set minimum link investment. If gap needs 40 RDs and link budget is zero, deprioritise or choose flank.",
            "AI cannot build links — difficulty scoring must include off-page reality.",
          ),
          s(" Pair content calendar with link building calendar when KD exceeds calibrated threshold."),
        ],
      ],
      examples: [
        {
          title: "Effective KD calibration — DR 42 SaaS",
          body: "Site ranked top 10 for fifteen keywords Ahrefs labeled KD 50–55 in cybersecurity sub-niche. Calibrated effective KD -10 in that territory. Prioritised cluster competitors avoided as 'too hard' — closed gap in two quarters.",
        },
        {
          title: "SERP weakness — outdated leader",
          body: "KD 58 head term; top result from 2019 with thin content. They published 2026 guide with original data — page one in 11 weeks. KD said hard; SERP said opportunity.",
        },
        {
          title: "KD reality check — link budget zero",
          body: "Gap keyword KD 44 looked winnable until top three averaged 200 referring domains each. Team deprioritised, flanked long-tail cluster — ranked without link campaign. Difficulty scoring included off-page, not only on-page.",
        },
      ],
    }),
    buildSection({
      number: "2.8",
      title: "The Marketer Prioritisation Lens",
      subtitle: "Six filters before a keyword enters your content calendar",
      take: "Before scheduling production, run six filters: (1) Business and CRM relevance? (2) Intent classified from SERP? (3) Assigned to semantic cluster with hub? (4) Differentiation or flank angle clear? (5) Difficulty calibrated to your domain? (6) Success metric matches intent? AI builds lists; this lens decides what ships.",
      why: "Infinite validated keywords still exceed capacity. The lens prevents calendar stuffing and keeps SEO tied to pipeline.",
      paragraphs: [
        [
          s("Filters one and two: relevance and intent truth. "),
          x(
            "No CRM or product tie — park unless brand awareness quarter. Tool-only keywords need human business check.",
            "Intent unverified — no brief. SERP review is non-delegable for tier-one assets.",
          ),
          s(" Relevance and intent gates stop pretty lists becoming pretty failures."),
        ],
        [
          s("Filters three and four: architecture and differentiation. "),
          x(
            "Orphan keyword without hub — assign cluster or reject. Cannibalisation risk — merge first.",
            "Parity gap vs competitor — require proprietary angle or flank plan before AI draft.",
          ),
          s(" Architecture without differentiation produces index bloat."),
        ],
        [
          s("Filters five and six: difficulty honesty and metric fit. "),
          x(
            "KD plus link budget reality — frontal assault needs resources.",
            "Informational keyword cannot carry demo KPI — align metric or reclassify priority tier.",
          ),
          s(" Run six-filter review in monthly planning — export rejected keywords to parking lot with reason."),
        ],
      ],
      examples: [
        {
          title: "Planning meeting — six-filter board",
          body: "SEO lead printed six filters for quarterly planning. 60 of 90 proposed keywords failed filter two or four. Calendar cut from 40 to 18 assets — all ranked or assisted pipeline within two quarters vs prior year 12% hit rate.",
        },
        {
          title: "Agency keyword handoff",
          body: "Agency delivered 500-keyword Excel. In-house applied six filters — 47 advanced. Agency scope changed to cluster strategy on 47, not volume play on 500. Relationship improved with clearer expectations.",
        },
        {
          title: "Parking lot transparency",
          body: "Rejected keywords logged with reason ('no cluster', 'parity gap', 'KD/link mismatch'). Leadership stopped re-requesting same bad ideas. Parking lot became learning artifact for new hires.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A junior marketer sorts Ahrefs export by volume descending and proposes top 30 for Q1. Best response?",
      options: [
        "Approve — high volume means high traffic.",
        "Apply multi-factor prioritisation: intent, CRM fit, cluster, difficulty, differentiation — volume alone misleads.",
        "Reject all keyword research.",
        "Only target keywords under 100 volume.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Volume is one input among business relevance, intent, and difficulty. Re-read sections 2.1 and 2.8.",
      wrongFeedback:
        "High volume often means high difficulty and wrong intent. Score holistically. Re-read sections 2.1 and 2.8.",
    },
    {
      kind: "order",
      q: "Order the AI-assisted keyword research workflow correctly.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Seed topics from business and audience",
        "AI expand questions and variants",
        "Validate with Ahrefs or Semrush data",
        "Classify intent from SERP analysis",
        "Group into semantic clusters",
        "Apply prioritisation lens before calendar",
      ],
      correctFeedback:
        "Right. Expand → validate → classify → cluster → prioritise. Re-read sections 2.2 and 2.4.",
      wrongFeedback:
        "Never calendar before validation and intent check. Re-read sections 2.2 and 2.4.",
    },
    {
      kind: "categorize",
      q: "Match each keyword signal to primary intent type.",
      categories: ["Informational", "Commercial investigation"],
      items: [
        { text: "'What is marketing attribution' — SERP shows guides and Wikipedia.", category: 0 },
        { text: "'Best SEO tools for agencies' — SERP shows listicles and reviews.", category: 1 },
        { text: "'How to set up GA4 events' — tutorial and video results.", category: 0 },
        { text: "'Semrush vs Ahrefs' — comparison and alternative pages.", category: 1 },
        { text: "'HubSpot pricing' — product and pricing pages dominate.", category: 1 },
        { text: "'History of search engines' — editorial and edu sources.", category: 0 },
      ],
      correctFeedback:
        "Right. SERP composition reveals intent — classify before choosing format. Re-read section 2.3.",
      wrongFeedback:
        "Look at who ranks and what format wins — not the keyword label alone. Re-read section 2.3.",
    },
    {
      q: "Two URLs on your site rank positions 9 and 14 for the same cluster keyword. First action?",
      options: [
        "Publish a third post on the same keyword.",
        "Cannibalisation audit — merge, redirect, or differentiate with clear hub assignment.",
        "Ignore — more pages means more chances.",
        "Delete both URLs immediately.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Cluster discipline includes consolidation when URLs compete. Re-read section 2.4.",
      wrongFeedback:
        "Competing URLs dilute authority — merge or scope clearly. Re-read section 2.4.",
    },
    {
      q: "Competitor gap report shows 200 keywords they rank for that you do not. Wisest next step?",
      options: [
        "AI-rewrite all 200 competitor pages immediately.",
        "Theme gaps, score differentiation and difficulty, flank where frontal parity fails.",
        "Ignore gaps — only original ideas matter.",
        "Buy exact-match domains for each keyword.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Gap analysis informs flanking strategy — not bulk copying. Re-read section 2.6.",
      wrongFeedback:
        "Raw gaps need strategic filtering and differentiation. Re-read section 2.6.",
    },
    {
      kind: "categorize",
      q: "Sort each task into AI-accelerated vs human judgment required.",
      categories: ["AI-accelerated", "Human judgment required"],
      items: [
        { text: "Generating 50 question variants from a seed topic.", category: 0 },
        { text: "Manual SERP review for tier-one money keywords.", category: 1 },
        { text: "Bulk uploading seeds to Ahrefs for volume check.", category: 0 },
        { text: "Rejecting parity gaps without proprietary angle.", category: 1 },
        { text: "Clustering keywords into semantic groups draft.", category: 0 },
        { text: "Setting quarterly cluster priority with CRM input.", category: 1 },
      ],
      correctFeedback:
        "Right. AI expands and organises; humans own SERP truth and business prioritisation. Re-read sections 2.2 and 2.8.",
      wrongFeedback:
        "Accountability decisions — intent, priority, differentiation — stay human-led. Re-read sections 2.2 and 2.8.",
    },
  ],
});
