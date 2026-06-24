import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter07MktLocalInternationalSeo = buildChapter({
  slug: "mkt-local-international-seo",
  number: 7,
  shortTitle: "Local & International SEO",
  title: "Local & International SEO — Scaling Geographic Visibility with AI-Assisted Localisation",
  readingMinutes: 24,
  summary:
    "Local SEO wins nearby customers through Google Business Profile, local content, and review authority. International SEO expands reach through correct site architecture, genuine localisation, and market-specific keyword research. AI accelerates translation, local content variants, and multi-market analysis — but cannot replace cultural adaptation, hreflang accuracy, or regional link building. Marketers who govern geographic SEO as a portfolio make smarter market entry and local investment decisions.",
  keyTakeaway:
    "Geographic SEO is two disciplines: local depth for proximity intent, international breadth for market expansion. AI handles mechanical localisation and research scale; humans own architecture decisions, cultural adaptation, review strategy, and regional authority building. Invest where demand, fit, and execution capacity align.",
  pmCallout: MKT_CALLOUT,
  sections: [
    buildSection({
      number: "7.1",
      title: "Local SEO Fundamentals",
      subtitle: "Google Business Profile, NAP consistency, local pack rankings, and proximity signals",
      take: "Local SEO optimises visibility for geographically intent-driven searches: Google Business Profile (GBP) optimisation, name-address-phone consistency across citations, local pack ranking factors, review volume and sentiment, and location page architecture for multi-location businesses. AI assists GBP post drafting, Q&A monitoring, and citation audit automation — but strategic category selection and review response tone remain human decisions.",
      why: "For businesses serving defined geographies — retail, services, healthcare, hospitality — local pack visibility often drives more revenue than organic blue links. Neglecting GBP while investing in blog content is a common misallocation.",
      paragraphs: [
        [
          s("Google Business Profile is the local SEO homepage. "),
          x(
            "Optimise: primary and secondary categories, business description with natural keywords, services list, attributes, photos updated monthly, posts for offers and events, Q&A seeded and monitored. GBP signals influence local pack and map visibility directly.",
            "AI drafts post copy and Q&A responses; local manager approves for accuracy and tone.",
          ),
          s(" Audit GBP monthly: competitor category choices, photo freshness, review velocity comparison."),
        ],
        [
          s("NAP consistency and citations build local trust signals. "),
          x(
            "Name, address, phone must match exactly across website, GBP, directories, and data aggregators. AI citation tools scan inconsistencies and suggest corrections. Prioritise industry-relevant and regional directories over generic spam lists.",
            "Citation building is maintenance, not a one-time project — acquisitions and relocations break NAP.",
          ),
          s(" Use UTM tracking on GBP website links to measure local pack referral conversions in GA4."),
        ],
        [
          s("Local pack ranking factors extend beyond GBP. "),
          x(
            "Proximity, relevance, and prominence: distance to searcher, category and keyword match, review count and rating, backlink local relevance, and behavioural signals. Multi-location brands need location page depth — not just a store locator pin.",
            "Each location is a local SEO entity requiring dedicated optimisation, not a database row.",
          ),
          s(" Track local pack rankings by zip code grid for multi-location brands — visibility varies dramatically by area."),
        ],
      ],
      examples: [
        {
          title: "Multi-location dental group GBP programme",
          body: "A 35-location dental group standardised GBP optimisation: AI-drafted weekly posts customised per location with local community hooks; human office managers approve. Review response SLA 48 hours using AI-drafted empathetic templates personalised per review. Local pack visibility for 'dentist near me' improved in 28 of 35 markets within four months. Centralised AI + local human approval scaled what individual offices could not maintain.",
        },
        {
          title: "Citation cleanup after rebrand",
          body: "A regional law firm rebranded and moved offices. AI citation audit found 340 listings with old NAP data across 60 directories. Prioritised top 40 by domain authority and industry relevance; corrected over eight weeks. Local pack rankings recovered from position 8+ to top 3 in primary market within 90 days post-cleanup. NAP inconsistency had suppressed prominence signals.",
        },
        {
          title: "Store locator only failure",
          body: "A retail chain relied on a JavaScript store locator without individual location pages. Competitors with dedicated location URLs, local reviews, and GBP per store dominated local pack. Organic local traffic flat despite national SEO growth. Fix: programmatic location pages with unique local content (see section 7.2). Local organic sessions up 67% year-one after deployment.",
        },
      ],
    }),
    buildSection({
      number: "7.2",
      title: "Local Content Strategy",
      subtitle: "City pages, neighbourhood guides, and locally differentiated content that earns local rankings",
      take: "Local content goes beyond NAP blocks: neighbourhood service guides, locally relevant FAQs, community event coverage, staff bios tied to locations, and case studies from regional clients. AI generates local content variants from structured data — service area facts, local landmarks, regional regulations — within uniqueness guardrails. Generic 'Welcome to [City]' templates fail.",
      why: "Google evaluates whether location pages genuinely serve local intent. Thin duplicate city pages trigger quality issues; differentiated local content supports both local pack and organic local queries.",
      paragraphs: [
        [
          s("Local content uniqueness requires local facts, not synonym spinning. "),
          x(
            "Include: service area specifics, local licensing or regulation notes, neighbourhood names, local project photos, community involvement, and region-specific FAQs. AI fills template slots from verified local data — not invented landmarks.",
            "Minimum unique content threshold per location page before indexation — same governance as programmatic SEO.",
          ),
          s(" Local managers or franchisees supply facts monthly; AI assembles into on-brand copy."),
        ],
        [
          s("Local link building complements local content. "),
          x(
            "Sponsor local events, join chamber of commerce, earn links from local news covering community involvement. AI identifies local link prospects — regional blogs, event calendars, charity partners.",
            "Local prominence signals include local backlink relevance, not just national authority.",
          ),
          s(" Each location should have a local link target list of 10–20 realistic regional prospects."),
        ],
        [
          s("Hyperlocal blog content captures long-tail local queries. "),
          x(
            "'Best [service] in [neighbourhood]' and 'how [regulation] affects [city] homeowners' target queries GBP alone cannot serve. AI drafts from local expert input; one post per quarter per major location adds organic depth.",
            "Connect hyperlocal posts to location pages via internal links — cluster architecture applies locally.",
          ),
          s(" Measure local content ROI in GBP calls, direction requests, and location page conversions — not just rankings."),
        ],
      ],
      examples: [
        {
          title: "Franchise local page programme",
          body: "A pest control franchise deployed location pages with AI-written intros fed by franchisee-submitted local facts: common regional pests, climate factors, local licensing numbers. Photos from actual local jobs required. 200 pages indexed at 91%; local organic leads per territory up average 44%. Franchisees who submitted richer local facts saw above-average performance — data layer quality drove outcomes.",
        },
        {
          title: "Local guide content cluster",
          body: "A property management company published neighbourhood guides for 15 cities — schools, commute, rental market notes sourced from local agent interviews. AI structured interviews into guides; agents verified facts. Guides rank for hyperlocal queries and link to location service pages. Organic local traffic doubled; guides earn occasional local news links.",
        },
        {
          title: "AI invented local landmarks",
          body: "A home services company used AI to generate city pages referencing parks and landmarks that did not exist in those cities. Customer trust complaints and one local blogger exposé followed. Pages noindexed and rebuilt with franchisee-verified fact forms only. Policy: no AI-invented local facts — structured input required.",
        },
      ],
    }),
    buildSection({
      number: "7.3",
      title: "Review Management at Scale",
      subtitle: "Generating, monitoring, responding to, and leveraging reviews as a local ranking and trust signal",
      take: "Reviews influence local pack rankings, click-through rates, and conversion. Review management includes ethical generation workflows, multi-platform monitoring, AI-assisted response drafting, sentiment analysis, and escalation of negative feedback. Fake reviews and incentive violations risk GBP suspension — governance is non-negotiable.",
      why: "A 4.2-star profile with stale unanswered negatives loses to a 4.6-star competitor with active responses. Review velocity and recency matter algorithmically and psychologically.",
      paragraphs: [
        [
          s("Ethical review generation beats manipulation. "),
          x(
            "Post-service email/SMS requests, QR codes in location, staff training on asking satisfied customers. Prohibited: incentives for positive reviews, review gating, fake accounts. AI personalises request timing and message; humans ensure policy compliance.",
            "Google's policies evolve — legal and ops should review annually.",
          ),
          s(" Track review request-to-completion rate by location — operational signal, not just marketing."),
        ],
        [
          s("Response strategy: speed, empathy, resolution path. "),
          x(
            "AI drafts responses in brand voice; local manager approves within 48 hours. Negative reviews: acknowledge, apologise where appropriate, offer offline resolution — never argue publicly. Positive reviews: thank with specificity, not generic template.",
            "Review responses are public marketing copy read by future customers, not just the reviewer.",
          ),
          s(" Escalate recurring complaint themes to operations — reviews are product feedback at scale."),
        ],
        [
          s("Multi-platform monitoring beyond Google. "),
          x(
            "Yelp, Trustpilot, industry-specific platforms, Facebook, Apple Maps. AI sentiment dashboards aggregate mentions and flag crisis velocity. GBP is priority but not exclusive.",
            "Competitor review benchmarking reveals service gaps and rating targets by market.",
          ),
          s(" Include review metrics in local SEO monthly report: velocity, average rating, response rate, sentiment trend."),
        ],
      ],
      examples: [
        {
          title: "Automated review response with human gate",
          body: "A hotel group uses AI to draft review responses in brand hospitality tone across 50 properties. Property managers approve via mobile app within 24 hours. Response rate went from 34% to 96%; average rating improved 0.3 stars over 12 months as customers felt heard. Ranking improvement in local pack correlated with response rate increase in test markets.",
        },
        {
          title: "Negative review to operations loop",
          body: "AI sentiment analysis on a restaurant chain's reviews flagged 'slow service' spike in three locations. Operations deployed staffing fix; follow-up reviews improved within six weeks. Review monitoring connected to ops — not siloed in marketing. Local rankings recovered in affected markets.",
        },
        {
          title: "Incentivised review GBP suspension",
          body: "A auto dealer offered $25 gift cards for five-star Google reviews. Competitor reported; GBP suspended two weeks during peak season. Revenue impact estimated six figures. Policy rewritten: request reviews ethically, never condition on rating. AI request templates reviewed by legal. Recovery took three months of compliant behaviour.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "7.4",
      title: "International Site Architecture",
      subtitle: "ccTLDs, subdomains, subdirectories, and hreflang — choosing and implementing the right structure",
      take: "International site architecture determines how search engines serve the right language and country version to users: country-code top-level domains (ccTLDs), subdomains (de.example.com), subdirectories (example.com/de/), or separate domains. Hreflang tags signal language-country relationships. Wrong architecture creates duplicate content, indexation chaos, and years of migration pain. AI assists hreflang audit and mapping documentation — architecture choice is strategic.",
      why: "Architecture decisions are expensive to reverse. Marketing, legal, and engineering must align before international expansion — not after pages are live in the wrong structure.",
      paragraphs: [
        [
          s("Architecture trade-offs: authority consolidation vs local trust. "),
          x(
            "Subdirectories consolidate authority on one domain — often fastest path for established brands. ccTLDs signal strongest local trust but split authority and increase operational cost. Subdomains sit between — separate crawl budgets, moderate authority split.",
            "No universal best choice — depends on market priority, legal entity structure, and existing domain strength.",
          ),
          s(" Document architecture decision with 3-year market plan — engineering implements once correctly."),
        ],
        [
          s("Hreflang implementation is where international SEO breaks. "),
          x(
            "Each URL needs reciprocal hreflang annotations pointing to all alternates including x-default. Common errors: missing return tags, wrong country codes, hreflang on non-indexable pages, conflicting canonicals. AI audits crawl exports flagging hreflang errors at scale.",
            "Hreflang tells Google which version to show — it does not translate content or fix thin localisation.",
          ),
          s(" Validate hreflang with dedicated tools post-launch; recheck after CMS migrations."),
        ],
        [
          s("Geo-targeting in GSC complements hreflang. "),
          x(
            "For subdomains and ccTLDs, set geographic target in Google Search Console per property. Subdirectories rely on hreflang and content signals primarily.",
            "International architecture must pair with CDN, hosting latency, and legal privacy requirements per market.",
          ),
          s(" Engineering, legal, and SEO sign architecture one-pager before first international page publishes."),
        ],
      ],
      examples: [
        {
          title: "Stripe subdirectory internationalisation",
          body: "Stripe expanded international content via subdirectories (/de/, /fr/) consolidating authority on stripe.com. Hreflang maps language-country variants; x-default points to English. Strong domain authority transferred to new markets faster than greenfield ccTLDs would have. Trade-off: less local domain trust than stripe.de might convey — acceptable for their global brand recognition.",
        },
        {
          title: "Hreflang disaster recovery",
          body: "An e-commerce brand launched 12 language subdomains without reciprocal hreflang. Google indexed wrong language versions in multiple countries; organic revenue in DACH market dropped 40%. Six-month recovery: hreflang implementation, canonical cleanup, GSC geo-targeting. AI audit identified 2,400 hreflang errors. Cost of wrong architecture exceeded years of correct implementation budget.",
        },
        {
          title: "ccTLD for regulated market",
          body: "A financial services firm used ccTLD for Germany (.de) due to BaFin local presence requirements and consumer trust expectations. Higher operational cost accepted for regulatory and trust benefits. Hreflang connects .de with global English site; link building runs separately per market. Architecture matched legal reality, not SEO convenience alone.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-seo-ch7-international-seo",
      type: "nested",
      title: "International SEO Layer Model",
      caption:
        "Market selection → site architecture and hreflang → cultural localisation → regional authority building through local links and PR.",
    }),
    buildSection({
      number: "7.5",
      title: "Content Localisation vs Translation",
      subtitle: "Why machine translation alone fails — and how AI-assisted localisation preserves intent and culture",
      take: "Translation converts words between languages. Localisation adapts content for cultural context: currency, units, examples, imagery, legal disclaimers, tone, and search intent differences. AI machine translation (DeepL, Google Translate API, GPT) accelerates first drafts — human localisers or in-market marketers adapt for culture and SEO. Publishing raw MT without review damages trust and rankings in competitive markets.",
      why: "Brands that treat international SEO as 'run English through translate' publish content that reads foreign to locals and misses country-specific keywords. Competitors with genuine localisation win both rankings and conversions.",
      paragraphs: [
        [
          s("Localisation workflow: MT draft → in-market edit → SEO local keyword pass. "),
          x(
            "AI produces MT draft at scale. Native or fluent localiser edits for naturalness, cultural fit, and compliance. SEO adds market-specific keywords from local research — not direct translation of English terms.",
            "Budget 40–60% of manual translation cost for quality AI-assisted localisation — not 5% for MT-only.",
          ),
          s(" Style guides per market: formality level, prohibited idioms, local brand terminology."),
        ],
        [
          s("Transcreation for high-impact commercial pages. "),
          x(
            "Homepage, pricing, product positioning, and ad landing pages need transcreation — recreating persuasion for local culture, not literal translation. AI assists variant brainstorming; local marketer owns final copy.",
            "English humour, idioms, and cultural references rarely survive direct translation.",
          ),
          s(" Tier localisation depth: transcreation for tier 1 pages, MT+edit for tier 2, glossary-only for tier 3."),
        ],
        [
          s("Legal and regulatory localisation is non-negotiable. "),
          x(
            "Privacy policies, terms, claims, and industry disclaimers require legal review per market. AI must not paraphrase legal text without counsel. Local regulatory keywords (compliance terms) must appear accurately.",
            "YMYL international expansion is slow by necessity — shortcuts create liability.",
          ),
          s(" Maintain localisation memory and glossary in TMS — AI learns approved terms, not inconsistent variants."),
        ],
      ],
      examples: [
        {
          title: "DeepL + localiser hybrid workflow",
          body: "A B2B software company localises blog content into German and French: DeepL draft → freelance localiser edit (2 hours per 2000 words) → SEO keyword pass with Semrush Germany/France data. Cost 55% below full human translation; quality scores from in-market sales team comparable to prior pure-human process. Throughput increased 3x, enabling consistent international publishing cadence.",
        },
        {
          title: "Transcreation win — consumer campaign",
          body: "A sportswear brand transcreated a US campaign slogan for Japan market with local agency — AI generated ten cultural adaptation options; agency selected approach using local athletic cultural references. Campaign outperformed literal translation attempt (tested in holdout region) by 2.3x engagement. International SEO landing page used transcreated headline with local keyword research.",
        },
        {
          title: "MT-only embarrassment",
          body: "A tech company published machine-translated support docs in Brazilian Portuguese with errors in technical terms and informal tone inappropriate for enterprise buyers. Brazilian reseller complained; docs pulled for rework. Reputation damage in launch quarter. Policy: no MT publish without human edit for customer-facing content.",
        },
      ],
    }),
    buildSection({
      number: "7.6",
      title: "Market-Specific Keyword Research",
      subtitle: "Why translated English keywords miss demand — and how AI helps discover local search behaviour",
      take: "Market keyword research discovers how local users actually search — vocabulary, spelling variants, local competitors, and intent differences. Direct translation of English keyword lists fails: search volumes, SERP composition, and commercial intent vary by country. AI accelerates local corpus analysis and competitor SERP scraping; in-market validation confirms targets.",
      why: "Targeting wrong keywords in new markets wastes localisation investment on pages nobody searches. Local research redirects effort toward real demand.",
      paragraphs: [
        [
          s("Build local keyword lists from local SERPs, not translation. "),
          x(
            "Use Semrush/Ahrefs country databases, Google Keyword Planner by country, local autocomplete, and competitor domain analysis in target market. AI clusters local keywords by intent in native language.",
            "Compare: direct translation of 'project management software' vs actual German search terms — often differ structurally.",
          ),
          s(" Validate top targets with in-market stakeholder review before content production queue."),
        ],
        [
          s("SERP analysis per market reveals different content winners. "),
          x(
            "English SERP for a query may favour listicles; German SERP may favour long-form guides; Japanese SERP may favour compact structured answers. Local content format should match local SERP, not English template.",
            "AI SERP scraping per country feeds brief localisation requirements.",
          ),
          s(" Include local SERP feature analysis in international content briefs."),
        ],
        [
          s("Search volume and competition prioritise market entry sequence. "),
          x(
            "AI matrices score markets by: addressable search demand, keyword difficulty, commercial intent, and operational readiness. Enter markets where you can win, not just where leadership wants a flag.",
            "Quarterly refresh as local competitors publish and volumes shift.",
          ),
          s(" Align market keyword research with sales pipeline data — search demand should correlate with revenue potential."),
        ],
      ],
      examples: [
        {
          title: "UK vs US keyword divergence",
          body: "An American SaaS expanding to UK assumed 'vacation rental software' translation. UK research revealed 'holiday let management software' as primary term with 3x local volume. Content localised to UK vocabulary ranked within four months; US-keyword-translated page had failed to index meaningfully. Lesson: same language still needs local research.",
        },
        {
          title: "Japan market entry research",
          body: "A dev tools company used AI to analyse Japanese competitor content and Yahoo Japan search patterns — distinct from Google US behaviour. Discovered compact comparison table format dominates SERP versus long English-style guides. Restructured Japanese product page accordingly. Organic trials from Japan up 180% year-one. Format localisation mattered as much as language.",
        },
        {
          title: "Skipped research, skipped rankings",
          body: "A retailer launched French site translating English category names without research. Missed high-volume local terms used by dominant French competitors. Six months of negligible organic traffic. Rework with French keyword research and URL slug updates (with redirects) recovered trajectory over following two quarters. Upfront research cost fraction of rework cost.",
        },
      ],
    }),
    buildSection({
      number: "7.7",
      title: "International Link Building",
      subtitle: "Regional PR, local directories, and market-specific authority that global campaigns miss",
      take: "International link building earns authority from in-market domains: local media, regional industry publications, country-specific directories, local partnerships, and ccTLD backlinks. Global US-link building does not transfer fully to German or Brazilian rankings. AI identifies local prospects; in-market PR execution or agencies deliver placements.",
      why: "A .com domain with only US links competing in France faces prominence disadvantage against .fr competitors with French editorial links. International SEO requires distributed regional authority.",
      paragraphs: [
        [
          s("Regional digital PR mirrors domestic playbook with local angles. "),
          x(
            "Local data in research reports, country-specific trend commentary, local customer stories. Pitch local journalists in native language — translated pitches underperform.",
            "Hire in-market PR freelancer or agency for journalist relationships — AI cannot replace local trust.",
          ),
          s(" Include regional link KPIs in international launch scorecard — not just page count live."),
        ],
        [
          s("Local directories and partnerships vary by market. "),
          x(
            "Germany: Branchenbücher and industry portals. UK: relevant trade associations. Japan: distinct local platform ecosystem. AI compiles market-specific directory lists; human prioritises by authority and relevance.",
            "Avoid international directory spam — same quality bar as domestic link building.",
          ),
          s(" Integration and partner links from in-market business relationships often easiest early wins."),
        ],
        [
          s("Link gap analysis per country competitor set. "),
          x(
            "Compare referring domains from local competitors in each target market — not global competitor only. AI gap analysis segmented by country TLD and language.",
            "Six-month international link plan per priority market with realistic placement targets.",
          ),
          s(" Track regional authority growth separately in reporting — global aggregate hides market gaps."),
        ],
      ],
      examples: [
        {
          title: "Germany regional PR launch",
          body: "A US analytics company entering Germany commissioned local PR agency for DACH data privacy benchmark report. Earned links from Handelsblatt and three DACH tech publications in 90 days. German subdirectory pages moved from invisible to page two for priority terms. US digital PR links to same pages had minimal German ranking impact — regional links mattered.",
        },
        {
          title: "Brazil partnership link programme",
          body: "A payments fintech partnered with Brazilian e-commerce platforms for integration pages co-marketed in Portuguese. Partner links from high-authority .com.br domains accelerated trust signals faster than translated blog content alone. AI identified partner link opportunities from competitor integration ecosystems.",
        },
        {
          title: "Global links, local stagnation",
          body: "A content site translated 500 articles into Spanish but built links only through US outreach. Mexican and Colombian rankings lagged despite content volume. Added Mexico-specific PR and local directory presence; six-month recovery in LATAM organic traffic. Global .com links insufficient for geo-specific prominence.",
        },
      ],
    }),
    buildSection({
      number: "7.8",
      title: "The Marketer Decision Lens — Local vs International Investment Priority",
      subtitle: "Where to allocate geographic SEO budget when you cannot do everything at once",
      take: "Before expanding geographically, run four checks: (1) local foundation solid — GBP, reviews, location content for existing markets? (2) international demand validated — local keyword research and SERP viability? (3) operational readiness — localisation capacity, legal, support? (4) architecture and hreflang ready for scale? Fix local gaps before international sprawl. Enter international markets in priority order by demand × fit × readiness — not alphabetically by country.",
      why: "Brands spread thin across 20 countries with translated thin content while neglecting local pack in core markets. Geographic portfolio discipline maximises ROI per dollar.",
      paragraphs: [
        [
          s("Check one: local foundation audit. "),
          x(
            "If you serve local customers: GBP optimised? Review programme active? Location pages differentiated? Local pack visibility tracked? Weak local foundation → invest locally before international.",
            "Multi-location domestic often beats international for same spend.",
          ),
          s(" Local ROI is measurable faster — prioritise when revenue depends on proximity."),
        ],
        [
          s("Check two: international demand and fit. "),
          x(
            "Local keyword volumes, competitor strength, SERP localisation requirements, and sales pipeline alignment. AI market scoring matrix; leadership validates strategic fit.",
            "No demand or no product-market fit → defer market entry despite executive travel enthusiasm.",
          ),
          s(" Pilot one market thoroughly before parallel multi-market launch."),
        ],
        [
          s("Checks three and four: operational readiness and technical architecture. "),
          x(
            "Localisation workflow staffed, legal reviewed, support hours aligned. Hreflang-ready architecture implemented before page 1, not after page 500.",
            "Budget split: 70% depth in priority markets beats 10% effort in seven markets simultaneously for most mid-market brands.",
          ),
          s(" Run this lens at annual planning with map visualisation of priority tiers — tier 1, 2, 3 markets."),
        ],
      ],
      examples: [
        {
          title: "Local-first reallocation",
          body: "A US home services chain planned international expansion to Canada while 40% of US locations had unclaimed GBP listings. Decision lens halted international; six-month US local SEO programme. Local lead volume up 35% nationally. Canada deferred with stronger cash flow for proper localised launch next year. Geographic discipline captured existing demand before chasing new flags.",
        },
        {
          title: "Tiered international rollout",
          body: "A SaaS company scored 12 EU markets; tier 1 (Germany, France, UK) received transcreated commercial pages, local keyword research, and regional PR budget. Tier 2 got MT+edit blog only. Tier 3 English placeholder with noindex until ready. Year-one ARR from tier 1 markets justified expansion; tier 2 activated in year two with playbook refined from tier 1 learnings.",
        },
        {
          title: "Parallel launch overload",
          body: "An e-commerce brand launched 8 language sites simultaneously with MT-only content and no hreflang plan. Indexation chaos, support overload, zero market traction. Retrenched to 2 priority markets with full localisation stack. Recovery took 18 months. Lens checks three and four would have prevented sprawl.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A multi-location business has optimised blog content but weak local pack visibility. What is the most likely gap?",
      options: [
        "More guest posts nationally.",
        "Google Business Profile optimisation, review programme, and differentiated location pages per store.",
        "Longer meta descriptions.",
        "Deleting all location data for privacy.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Local pack requires GBP, reviews, and local content depth. Re-read sections 7.1–7.3.",
      wrongFeedback:
        "National SEO does not replace local pack fundamentals. Re-read sections 7.1–7.3.",
    },
    {
      q: "You are expanding to Germany. English keyword research translated directly is ready. What is missing?",
      options: [
        "More English keywords.",
        "Market-specific keyword research, SERP analysis, and localisation — not direct translation.",
        "US-focused link building only.",
        "Removing hreflang tags.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Local search behaviour requires in-market research. Re-read sections 7.5 and 7.6.",
      wrongFeedback:
        "Translation ≠ local keyword research or cultural localisation. Re-read sections 7.5 and 7.6.",
    },
    {
      kind: "order",
      q: "Order the international SEO expansion layers from foundation to authority.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Market selection based on demand and fit",
        "Site architecture and hreflang implementation",
        "Cultural localisation with in-market review",
        "Regional link building and local PR",
      ],
      correctFeedback:
        "Right. Select → architect → localise → build regional authority. Skipping architecture or localisation fails. Re-read sections 7.4–7.8.",
      wrongFeedback:
        "Market selection and architecture precede content. Regional links come after localised pages exist. Re-read sections 7.4–7.8.",
    },
    {
      kind: "categorize",
      q: "Sort each practice into the correct geographic SEO category.",
      categories: ["Local SEO", "Architecture", "Localisation", "International links"],
      items: [
        { text: "48-hour review response SLA with AI-drafted replies.", category: 0 },
        { text: "Reciprocal hreflang tags across all language alternates.", category: 1 },
        { text: "Transcreation of homepage for Japan market.", category: 2 },
        { text: "DACH regional digital PR for German subdirectory.", category: 3 },
        { text: "NAP citation audit after office relocation.", category: 0 },
        { text: "Semrush keyword research using Germany country database.", category: 2 },
      ],
      correctFeedback:
        "Right. Local = GBP/reviews. Architecture = hreflang/structure. Localisation = language/culture. Links = regional authority. Re-read sections 7.1–7.7.",
      wrongFeedback:
        "Match each practice to local fundamentals, technical architecture, content adaptation, or regional links. Re-read sections 7.1–7.7.",
    },
    {
      q: "AI generates city location pages with invented local landmarks. What is the correct policy response?",
      options: [
        "Publish faster for more coverage.",
        "Prohibit AI-invented local facts — require verified structured input from local managers before generation.",
        "Copy competitor city pages.",
        "Remove all location pages.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Local content requires verified facts, not AI fabrication. Re-read section 7.2.",
      wrongFeedback:
        "Invented local facts damage trust and quality. Verified data inputs required. Re-read section 7.2.",
    },
    {
      q: "40% of US store locations have unclaimed GBP listings, but leadership wants Canada launch. What does the investment lens recommend?",
      options: [
        "Launch Canada immediately for brand prestige.",
        "Fix US local foundation first — capture existing proximity demand before international expansion.",
        "Abandon all local SEO.",
        "Use machine translation only for Canada with no hreflang.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Local foundation before international sprawl when core market has gaps. Re-read section 7.8.",
      wrongFeedback:
        "Investment lens prioritises measurable local gaps before geographic expansion. Re-read section 7.8.",
    },
  ],
});
