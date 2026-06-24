import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter04MktTechnicalSeoWithAi = buildChapter({
  slug: "mkt-technical-seo-with-ai",
  number: 4,
  shortTitle: "Technical SEO with AI",
  title: "Technical SEO with AI",
  readingMinutes: 24,
  summary:
    "Technical SEO ensures crawlers can discover, index, and render your content — and that users experience fast, stable pages. AI assists audits, schema generation, log analysis, and duplicate detection at scale, but humans prioritise fixes by business impact. This chapter covers fundamentals through Core Web Vitals, site architecture, and a technical prioritisation lens for marketers who own outcomes, not just tickets.",
  keyTakeaway:
    "Technical SEO is the foundation AEO and content strategy rest on. Use AI to accelerate crawling insights and fix lists — prioritise indexation, architecture, and CWV on revenue URLs first. No amount of keyword research compensates for blocked crawlers or broken canonicals.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "4.1",
      title: "Technical SEO Fundamentals",
      subtitle: "Crawl, index, render, rank — the stack marketers must understand to brief dev and agency partners",
      take: "Technical SEO spans discoverability (crawl), inclusion (index), presentation (rendering JavaScript), and signals (speed, mobile, HTTPS, canonicals). Marketers do not need to write robots.txt — but must know enough to spot when product launches, CMS changes, or faceted navigation silently kill organic visibility. AI summarises audit exports; humans escalate by revenue impact.",
      why: "Content and AEO investments fail when technical blockers prevent indexing. Fundamentals are the first filter in every SEO programme — especially after replatforms or AI content scale-ups.",
      paragraphs: [
        [
          s("The crawl-index-rank pipeline is sequential — breaks early cascade. "),
          x(
            "Crawlers must reach URL via internal links and sitemap; robots.txt and noindex must allow; canonical must point to preferred version; page must return 200 and render meaningful content.",
            "GSC Pages report shows indexed vs not indexed reasons — start every technical review there.",
          ),
          s(" Maintain a 'money URL indexation checklist' run after every deploy — top 50 pipeline URLs."),
        ],
        [
          s("HTTPS, mobile usability, and clean status codes are non-negotiable baselines. "),
          x(
            "Mixed content, redirect chains, and 404s on important URLs erode trust signals. Ahrefs and Screaming Frog surface at scale.",
            "AI can categorise crawl export errors by severity — 'blocking indexation' vs 'cosmetic'.",
          ),
          s(" Share technical baseline scorecard with leadership quarterly — green/yellow/red on fundamentals."),
        ],
        [
          s("JavaScript rendering gaps still affect SPA and hybrid sites. "),
          x(
            "Test key templates with Google URL Inspection 'view crawled page' and Screaming Frog JS rendering. Content visible to users but not crawlers is invisible to SEO and AEO.",
            "SSR, static generation, or dynamic rendering decisions are dev — marketer flags template gaps from audit.",
          ),
          s(" Flag JS-dependent money pages in technical backlog — not every blog, every product page."),
        ],
      ],
      examples: [
        {
          title: "Post-launch index drop — replatform",
          body: "E-commerce replatform launched without sitemap submit and canonical audit. Indexed pages fell 40% in two weeks. GSC 'Crawled - currently not indexed' spiked. Emergency robots and canonical fix recovered 90% in six weeks — content team had paused production correctly until green.",
        },
        {
          title: "URL Inspection — SPA pricing page",
          body: "SaaS pricing page looked fine in browser; URL Inspection showed empty body for Googlebot. Moved critical copy to SSR block — rankings and AI citations returned within one month. Marketer caught via monthly money URL check, not dev ticket queue.",
        },
        {
          title: "AI error triage — crawl export",
          body: "Screaming Frog export of 50,000 URLs fed to ChatGPT: 'group errors by indexation impact and suggest fix priority'. Output matched senior SEO triage — junior marketer escalated top ten to dev with business context. AI accelerated reading; human owned priority.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-seo-ch4-technical-stack",
      type: "nested",
      title: "Technical SEO Stack",
      caption:
        "Crawl & index → performance (CWV) → structured data → architecture. Each layer supports discoverability and extraction.",
    }),
    buildSection({
      number: "4.2",
      title: "AI-Assisted Site Auditing",
      subtitle: "Scaling crawl analysis without losing prioritisation discipline",
      take: "Site audits at scale — Screaming Frog, Sitebulb, Ahrefs Site Audit, Semrush — produce thousands of rows. AI summarises patterns, drafts dev tickets, and explains issues in plain language for stakeholder emails. Audits without prioritisation create developer fatigue; marketers must filter to revenue URLs and indexation blockers first.",
      why: "Agencies dump 200-page audit PDFs; internal teams ignore them. AI makes audits actionable by translating technical issues into business risk — if you keep prioritisation human.",
      paragraphs: [
        [
          s("Run tiered audits: money URLs weekly, full site monthly, post-deploy smoke test. "),
          x(
            "Ahrefs Site Audit scheduled crawls catch regressions. Screaming Frog segment crawls on /blog vs /product.",
            "AI weekly digest: 'new critical issues on money URL paths' from audit API export.",
          ),
          s(" Audit cadence in SEO ops calendar — not only when traffic drops."),
        ],
        [
          s("Translate technical issues to business language for dev prioritisation. "),
          x(
            "Not 'duplicate title tags' — '12 product pages with duplicate titles may confuse indexation for $2M ARR SKU line'.",
            "ChatGPT prompt: 'rewrite these ten audit issues for engineering backlog with user impact'.",
          ),
          s(" Jira tickets link GSC impression data to technical issue — devs prioritise with evidence."),
        ],
        [
          s("Validate AI audit summaries against source tool — hallucinated fixes waste sprints. "),
          x(
            "Spot-check five issues AI flagged critical — confirm in raw crawl. False positive rate above 10% means tighter prompts or human-only triage for severity.",
            "Never deploy robots.txt changes from AI without senior review — catastrophic risk.",
          ),
          s(" AI drafts tickets; technical SEO or dev lead approves severity."),
        ],
      ],
      examples: [
        {
          title: "Ahrefs Site Audit + AI digest — weekly",
          body: "Marketing ops automated Ahrefs audit export to ChatGPT summary in Slack every Monday. Dev fixed average three critical issues weekly vs quarterly audit dumps before. Indexed product pages rose 12% without new content.",
        },
        {
          title: "Business-language tickets — duplicate meta",
          body: "47 duplicate meta descriptions on integration pages — AI-drafted tickets cited integration keyword impressions from GSC. Dev squad prioritised in sprint; integration organic traffic rose 18%. Translation mattered.",
        },
        {
          title: "AI robots.txt hallucination caught",
          body: "Junior pasted crawl errors; AI suggested disallow /blog to 'fix duplication'. Senior blocked — would have nuked half of organic traffic. Rule established: no robots changes from AI without review.",
        },
      ],
    }),
    buildSection({
      number: "4.3",
      title: "Schema Markup with AI",
      subtitle: "Generating and validating structured data — without spam penalties",
      take: "Schema markup helps search engines understand entities, FAQs, products, articles, and breadcrumbs — powering rich results and aiding AI extraction. AI drafts JSON-LD from page content; humans validate in Google Rich Results Test and ensure markup matches visible content. Schema spam — fake FAQs, misleading product data — triggers manual actions.",
      why: "Schema is high-leverage when correct and high-risk when automated blindly. Marketers own which templates get schema and quality gates before deploy.",
      paragraphs: [
        [
          s("Prioritise schema types by template and intent. "),
          x(
            "Article and Person on editorial; FAQ on genuine Q&A sections; Product on SKU pages; Organization sitewide; BreadcrumbList on deep URLs.",
            "AI generates JSON-LD per template — store in CMS fields, not hand-coded per page at scale.",
          ),
          s(" Schema roadmap: five templates first — not every URL type day one."),
        ],
        [
          s("Validation is mandatory pre-publish — Rich Results Test and GSC enhancement reports. "),
          x(
            "Errors and warnings triaged: errors block eligibility; warnings often fixable.",
            "Monitor GSC 'Unparsable structured data' after bulk schema deploys.",
          ),
          s(" No bulk schema deploy Friday afternoon — weekend ranking surprises hurt."),
        ],
        [
          s("Schema must reflect visible content — not bait for rich results. "),
          x(
            "FAQ schema only on questions answered on page. Review schema only with real reviews displayed.",
            "AI-generated fake FAQ pairs are policy violations — editor verifies each Q&A.",
          ),
          s(" Schema quality gate in publish checklist — same tier as legal for YMYL."),
        ],
      ],
      examples: [
        {
          title: "FAQ schema — selective deployment",
          body: "B2B site added FAQ schema to 30 expert-validated Q&As — rich result impressions rose 40%. Competitor spammed 500 auto-FAQs and lost enhancements. Selective AI-assisted JSON-LD plus human gate won.",
        },
        {
          title: "Product schema — ecommerce fix",
          body: "AI drafted Product schema from PIM export; price mismatch with page triggered warnings. Synced PIM feed to visible price before deploy — shopping appearances recovered. AI draft; human data sync.",
        },
        {
          title: "Person schema — author E-E-A-T",
          body: "Article schema plus linked Person schema on author bios improved author rich result presence. AI generated JSON-LD template; authors validated social sameAs links. E-E-A-T and technical SEO aligned.",
        },
      ],
    }),
    buildSection({
      number: "4.4",
      title: "Core Web Vitals and Performance",
      subtitle: "LCP, INP, CLS — user experience signals marketers should track on money templates",
      take: "Core Web Vitals — Largest Contentful Paint (LCP), Interaction to Next Paint (INP), Cumulative Layout Shift (CLS) — influence rankings and conversion. AI cannot fix slow servers, but helps interpret PageSpeed Insights reports and prioritise fixes. Marketers track CWV on templates (product, checkout, pillar), not only homepage vanity scores.",
      why: "Slow pages lose rankings and demos. CWV regressions after marketing adds tag managers and hero videos are common — someone must own template-level monitoring.",
      paragraphs: [
        [
          s("Monitor CWV in GSC Experience report and CrUX by template URL pattern. "),
          x(
            "Segment poor URLs — often one template drags thousands. LCP failures from unoptimised hero images; INP from heavy JS; CLS from ads and web fonts.",
            "Set alerts when % good URLs drops below threshold on /product or /pricing paths.",
          ),
          s(" CWV dashboard shared with dev and marketing — tag manager changes need CWV check."),
        ],
        [
          s("AI interprets PageSpeed recommendations — humans sequence dev work. "),
          x(
            "Paste PSI output: 'summarise top three fixes by impact for LCP on this URL'. Dev validates — AI sometimes suggests impractical CDN changes for small teams.",
            "Quick wins: image compression, font-display swap, defer non-critical JS.",
          ),
          s(" Marketing owns hero image specs — dimensions, format, lazy load — in brand guidelines."),
        ],
        [
          s("Balance rich creative with performance budgets. "),
          x(
            "Video heroes and carousels hurt LCP — lazy load below fold, poster images for heroes.",
            "A/B test conversion impact of faster simpler template vs heavy creative — data settles debates.",
          ),
          s(" Performance budget in brief for landing page redesigns — not retroactive regret."),
        ],
      ],
      examples: [
        {
          title: "INP fix — interactive pricing calculator",
          body: "Pricing calculator tanked INP on mobile. AI summarised PSI: main-thread blocking from analytics bundle. Dev deferred non-critical scripts — rankings on pricing keywords improved alongside mobile demo form rate.",
        },
        {
          title: "CLS from ad injection — publisher lesson",
          body: "Marketing added ad slot mid-content without reserved height — CLS failed. Reserved space fix recovered 'Good' CLS; RPM and organic held. CWV is marketing plus ad ops, not only dev.",
        },
        {
          title: "Image policy — marketing guidelines",
          body: "Brand team mandated WebP heroes under 150KB after CWV QBR embarrassment. LCP good rate rose from 60% to 85% site-wide without engineering sprint — policy fix.",
        },
      ],
    }),
    buildSection({
      number: "4.5",
      title: "Site Architecture and Internal Linking",
      subtitle: "URL structure, depth, and hub topology that crawlers and users navigate",
      take: "Site architecture defines how authority flows: shallow important URLs, logical hierarchies, clean slugs, breadcrumb trails, and internal links from high-authority pages to priorities. Faceted navigation and parameter URLs create crawl traps without canonical discipline. AI suggests internal link inserts from crawl exports — humans verify relevance.",
      why: "Great content buried four clicks deep or orphaned without internal links underperforms mediocre content in strong architecture. Technical architecture is off-page's on-site cousin.",
      paragraphs: [
        [
          s("Target click depth ≤3 for money and hub URLs from homepage or main nav. "),
          x(
            "Screaming Frog crawl depth report flags orphans and deep pages. Flatten where possible — merge tag archives into hubs.",
            "URL slug clarity helps users and engines: /category/subtopic not /p?id=8842.",
          ),
          s(" Architecture review in every major IA project — SEO sign-off before launch."),
        ],
        [
          s("Internal linking automation with guardrails. "),
          x(
            "Plugins and AI tools suggest contextual links from phrase matching — review prevents irrelevant or over-optimized anchor spam.",
            "Ahrefs Internal Link Opportunities report plus manual editorial links on pillars.",
          ),
          s(" Cap auto-internal links per page — five to eight relevant links beat fifty forced anchors."),
        ],
        [
          s("Facets and filters: canonical to parent or noindex low-value combinations. "),
          x(
            "E-commerce colour filters can generate millions of URLs. Canonical strategy and robots rules prevent index bloat.",
            "AI can estimate index bloat from parameter patterns in crawl — dev implements rules.",
          ),
          s(" Facet strategy documented — marketing must know which filters are SEO landing pages vs noise."),
        ],
      ],
      examples: [
        {
          title: "Hub flattening — docs site",
          body: "Documentation buried under four paths averaged depth 5 — orphan API guides. IA flatten to /docs/api with breadcrumb schema — indexed doc pages rose 35%; developer organic signups followed.",
        },
        {
          title: "Internal link sprint — AI assisted",
          body: "Ahrefs opportunities plus ChatGPT anchor suggestions for 200 blog posts linking to pillar — human approved 180 links. Pillar rankings moved page 2 to page 1 in eight weeks. Architecture plus links, no new content.",
        },
        {
          title: "Facet canonical crisis — fashion retail",
          body: "Colour facets indexed 400,000 URLs; crawl budget wasted. Canonical to parent category plus noindex on low-traffic combos — index count normalised; core category rankings improved.",
        },
      ],
    }),
    buildSection({
      number: "4.6",
      title: "Log File Analysis with AI",
      subtitle: "What Googlebot actually crawls — beyond audit simulations",
      take: "Server log analysis reveals real crawler behaviour: which URLs Googlebot requests, response codes, crawl waste on parameters, and orphan discovery gaps. Tools like Screaming Frog Log Analyser, Ahrefs, or Splunk process logs; AI summarises patterns for marketers who do not read raw log lines. Log data validates whether fixes changed crawl behaviour.",
      why: "Crawl audits guess; logs show truth. When indexation stalls despite clean on-page SEO, logs often reveal budget wasted on junk URLs.",
      paragraphs: [
        [
          s("Collect and analyse logs monthly if site exceeds 10k URLs or has faceted navigation. "),
          x(
            "Filter Googlebot user-agent; join with URL taxonomy. Metrics: crawl share by section, 404 rate, redirect chains hit by bot.",
            "Cloudflare and CDN logs increasingly accessible — dev coordinates export.",
          ),
          s(" Log review calendar slot — quarterly minimum for smaller sites."),
        ],
        [
          s("AI summarises log exports into actionable narratives. "),
          x(
            "Prompt: 'identify top 10 URLs by Googlebot hits with 404 or 301' and 'sections receiving <1% crawl share despite importance'.",
            "Cross-reference low crawl share with GSC impressions — high impression low crawl means internal link gap.",
          ),
          s(" Log findings become Jira epics with crawl share before/after success metric."),
        ],
        [
          s("Post-fix validation via logs — did robots change actually reduce junk crawls? "),
          x(
            "Compare bot hit counts on /filter URLs week over week after canonical deploy.",
            "Prevents declaring victory from audit green checks while bot behaviour unchanged.",
          ),
          s(" Log validation closes the loop on technical tickets — marketers hold dev accountable with data."),
        ],
      ],
      examples: [
        {
          title: "Crawl waste discovery — marketplace",
          body: "Logs showed 60% Googlebot hits on expired listing URLs despite sitemap cleanup. 410 responses plus updated sitemap — crawl share to active listings doubled; new listing indexation speed improved.",
        },
        {
          title: "AI log summary — enterprise marketing",
          body: "Splunk export too large for marketer; ChatGPT summarised weekly Googlebot top paths and anomalies. Flagged blog tag pages consuming 25% crawl — noindex tags freed budget for product pages.",
        },
        {
          title: "Internal link gap from logs",
          body: "High-impression hub in GSC had near-zero Googlebot hits in logs — orphaned in IA. Added nav and contextual links; crawl and rankings rose within three weeks. Logs diagnosed what site audit missed.",
        },
      ],
    }),
    buildSection({
      number: "4.7",
      title: "Duplicate Content and Canonicalisation",
      subtitle: "Consolidating signals when URLs multiply — CMS, parameters, and syndication",
      take: "Duplicate content splits ranking signals across URLs: www vs non-www, HTTP vs HTTPS, trailing slashes, parameter variants, print pages, syndicated articles, and AI-translated clones. Canonical tags, 301 redirects, and consistent internal links consolidate authority. AI detects duplicate title and body patterns in crawl exports — humans choose merge vs canonical strategy.",
      why: "Content teams scale AI output; technical teams must prevent duplicate indexation from scaling penalties. Canonical discipline is the guardrail.",
      paragraphs: [
        [
          s("Enforce single preferred URL per content piece — redirect alternates. "),
          x(
            "Screaming Frog canonical report: self-referencing canonical on preferred; alternates point to it or 301.",
            "Hreflang pairs need correct canonical in each locale — international adds complexity.",
          ),
          s(" Canonical map spreadsheet for top 500 URLs — dev and SEO shared source of truth."),
        ],
        [
          s("Syndication and guest posts require canonical back to origin or noindex on republish. "),
          x(
            "Medium and LinkedIn republication without canonical cannibalises your site. Use their canonical tools or publish excerpt only.",
            "AI content syndicated across subdomains duplicates — pick one indexable home.",
          ),
          s(" Syndication policy in content guidelines — legal and SEO approve."),
        ],
        [
          s("Near-duplicate AI pages at scale trigger quality and duplication risk. "),
          x(
            "Ahrefs duplicate content report clusters similar body text. Merge, improve differentiation, or noindex.",
            "AI compares two URLs: 'list substantive differences' — if none, merge.",
          ),
          s(" Monthly duplicate scan after bulk AI publish weeks — non-negotiable."),
        ],
      ],
      examples: [
        {
          title: "WWW consolidate — redirect chain fix",
          body: "http://www, https://www, and https://non-www all accessible — four duplicates per page. Single 301 chain to preferred — organic lift 9% in six weeks without new content. Fundamentals first.",
        },
        {
          title: "AI near-duplicate prune — affiliate",
          body: "Bulk AI city pages differed only by city name — duplicate cluster. Kept 20 with unique data; merged or noindexed 180. Index health recovered from crawled-not-indexed spike.",
        },
        {
          title: "Guest post canonical — B2B",
          body: "Forbes contribution without canonical split rankings with on-site version. Forbes canonical to origin negotiated — combined authority on owned URL. Syndication policy updated.",
        },
      ],
    }),
    buildSection({
      number: "4.8",
      title: "The Marketer Technical Prioritisation Lens",
      subtitle: "Six filters before your dev sprint fills with SEO tickets",
      take: "Prioritise technical work with six filters: (1) Does it block indexation on money URLs? (2) Is issue on high-impression templates? (3) Does fix affect CWV on conversion paths? (4) Is architecture preventing crawl to priorities? (5) Does duplicate split authority on revenue content? (6) Can we validate fix in GSC and logs? AI expands audit lists — this lens decides what ships.",
      why: "Developers ignore SEO noise. Business-prioritised technical roadmaps get sprint slots — vanity fixes do not.",
      paragraphs: [
        [
          s("Filters one and two: indexation and impression weight. "),
          x(
            "noindex on money URL — drop everything.",
            "GSC impressions by URL pattern ranks audit issues — fix what people would have seen.",
          ),
          s(" Attach impression export to every critical technical ticket."),
        ],
        [
          s("Filters three and four: CWV on convert paths and crawl to hubs. "),
          x(
            "Poor INP on demo form beats CLS on blog author page.",
            "Orphan hub with 50k monthly impressions — internal link epic before new schema project.",
          ),
          s(" Conversion-path CWV in quarterly review with demand gen."),
        ],
        [
          s("Filters five and six: duplication and measurable validation. "),
          x(
            "Duplicate product pages split SKU authority — merge before content scale.",
            "Define success metric per fix: indexed count, crawl share, CWV good % — validate in 30 days.",
          ),
          s(" Run lens in SEO-dev triage meeting — reject low-impact AI-suggested fixes politely."),
        ],
      ],
      examples: [
        {
          title: "Sprint triage — impression-weighted backlog",
          body: "Dev had 40 SEO tickets; marketer ranked by GSC impressions affected. Top five fixes covered 70% of impression base — shipped in one sprint. Organic held through algorithm update while competitors scrambled.",
        },
        {
          title: "Schema vs indexation — priority call",
          body: "Team wanted FAQ schema on blogs while 200 product pages were crawled-not-indexed. Lens filter one redirected sprint to canonical fix — product indexation recovered; schema waited. Right order.",
        },
        {
          title: "Log-validated closure — facet fix",
          body: "Facet canonical deploy validated via log crawl share shift — ticket closed with data. Dev trust in SEO requests rose; next quarter got proactive crawl budget review.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "New product pages look fine in browser but GSC shows 'Crawled - currently not indexed' rising. First investigate?",
      options: [
        "Add more blog content immediately.",
        "Technical fundamentals — canonicals, internal links, duplicate signals, render — on affected templates.",
        "Buy backlinks only.",
        "Remove sitemap entirely.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Indexation blockers precede content and link tactics. Re-read sections 4.1 and 4.7.",
      wrongFeedback:
        "Indexing failures are often technical — audit crawl, canonical, and architecture first. Re-read sections 4.1 and 4.7.",
    },
    {
      kind: "order",
      q: "Order technical SEO remediation by typical priority.",
      prompt: "Drag to arrange from highest (top) to lowest (bottom) priority.",
      items: [
        "Fix noindex or robots blocking money URLs",
        "Resolve canonical duplication on high-impression templates",
        "Improve CWV on conversion paths",
        "Add internal links to orphan hub pages",
        "Deploy validated FAQ schema on key hubs",
        "Cosmetic meta description tweaks on low-traffic archives",
      ],
      correctFeedback:
        "Right. Indexation and duplication on money URLs beat cosmetic fixes. Re-read section 4.8.",
      wrongFeedback:
        "Money URL indexation and high-impression issues come first. Re-read section 4.8.",
    },
    {
      kind: "categorize",
      q: "Sort each task into safe AI-assisted vs requires expert human approval.",
      categories: ["Safe AI-assisted", "Requires expert approval"],
      items: [
        { text: "Summarising Screaming Frog export into plain language.", category: 0 },
        { text: "Drafting JSON-LD FAQ schema from visible page Q&A.", category: 0 },
        { text: "Changing robots.txt based on AI suggestion alone.", category: 1 },
        { text: "Interpreting PageSpeed recommendations for dev backlog.", category: 0 },
        { text: "Bulk deploying schema on unverified auto-generated FAQs.", category: 1 },
        { text: "Prioritising audit issues by GSC impressions.", category: 1 },
      ],
      correctFeedback:
        "Right. AI accelerates analysis and drafts; robots, schema spam risk, and priority need human gates. Re-read sections 4.2 and 4.3.",
      wrongFeedback:
        "Never auto-apply robots or unvalidated bulk schema. Re-read sections 4.2 and 4.3.",
    },
    {
      q: "Pricing page ranks poorly; INP is 'Poor' on mobile in GSC. Best cross-functional action?",
      options: [
        "Ignore — rankings are unrelated to speed.",
        "Work with dev to reduce main-thread blocking on interactive elements — CWV affects UX and rankings.",
        "Only add keywords to copy.",
        "Delete pricing page.",
      ],
      correct: 1,
      correctFeedback:
        "Right. INP on conversion paths is high-priority technical work. Re-read section 4.4.",
      wrongFeedback:
        "CWV on money templates matters for SEO and conversion. Re-read section 4.4.",
    },
    {
      q: "Logs show Googlebot spends 40% of crawls on filter parameter URLs with no traffic. Likely fix?",
      options: [
        "Publish more blog posts.",
        "Canonical/noindex strategy on low-value facet URLs to free crawl budget.",
        "Block Google entirely.",
        "Add more parameters.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Log analysis informs facet and canonical fixes. Re-read sections 4.5 and 4.6.",
      wrongFeedback:
        "Crawl budget waste on junk URLs hurts priority page discovery. Re-read sections 4.5 and 4.6.",
    },
    {
      kind: "categorize",
      q: "Classify each issue as duplicate-content risk vs performance signal.",
      categories: ["Duplicate content risk", "Performance (CWV) signal"],
      items: [
        { text: "Same article on www and non-www without redirect.", category: 0 },
        { text: "LCP 4.2s on hero image-heavy landing page.", category: 1 },
        { text: "200 AI city pages differing only by city name.", category: 0 },
        { text: "CLS from late-loading ad slots in content.", category: 1 },
        { text: "Syndicated post without canonical to origin.", category: 0 },
        { text: "INP degradation from heavy analytics bundle.", category: 1 },
      ],
      correctFeedback:
        "Right. Duplication splits authority; CWV issues hurt UX and rankings. Re-read sections 4.4 and 4.7.",
      wrongFeedback:
        "URL variants and near-duplicates are duplication; LCP/INP/CLS are CWV. Re-read sections 4.4 and 4.7.",
    },
  ],
});
