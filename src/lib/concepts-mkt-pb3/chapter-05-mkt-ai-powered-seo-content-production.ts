import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter05MktAiPoweredSeoContentProduction = buildChapter({
  slug: "mkt-ai-powered-seo-content-production",
  number: 5,
  shortTitle: "AI-Powered SEO Content Production",
  title: "AI-Powered SEO Content Production — Scaling Search Content Without Sacrificing Rankings or Trust",
  readingMinutes: 24,
  summary:
    "AI can draft SEO articles in minutes — but rankings still reward differentiated intent coverage, entity depth, and editorial quality that generic generation cannot fake. Marketers who treat AI as the first pass in a governed SEO content workflow — brief, differentiate, optimise, quality-gate, refresh — publish more pages that earn clicks and conversions, not thin content that triggers helpful content penalties.",
  keyTakeaway:
    "SEO content AI is a production accelerator, not a ranking strategy. The workflow that wins: AI-assisted brief from SERP and entity analysis → human-defined differentiation angle → draft with on-page and entity requirements → rubric-based QC → publish with refresh triggers. Volume without differentiation is a liability.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "5.1",
      title: "AI-Assisted SEO Briefs",
      subtitle: "From keyword lists to intent-mapped briefs that encode what the SERP actually rewards",
      take: "An AI-assisted SEO brief translates keyword and SERP research into a production document: primary intent, secondary questions, required entities, content gaps versus top-ranking pages, recommended structure, internal link targets, and differentiation mandate. Tools like Clearscope, Surfer, MarketMuse, and custom GPT workflows accelerate brief creation — but the brief must reflect strategic judgment, not just term frequency.",
      why: "Writers without SEO briefs produce articles that rank for nothing — or worse, cannibalise existing pages. AI brief generation collapses research time from hours to minutes, but garbage-in briefs produce garbage-out content at scale.",
      paragraphs: [
        [
          s("A production SEO brief has seven mandatory fields. "),
          x(
            "Primary query and intent classification (informational, commercial, transactional). SERP snapshot: what formats rank — guides, listicles, tools, videos. Entity and topic requirements from NLP analysis. Content gap versus top three results. Recommended H2 structure mapped to sub-intents. Internal link targets and anchor guidance. Differentiation mandate — what this page must add that competitors do not.",
            "Briefs without a differentiation mandate produce interchangeable AI content. 'Cover these terms' is not a brief — 'answer X with our proprietary benchmark data' is.",
          ),
          s(" Store brief templates in your CMS or project tool so every article starts from the same structure."),
        ],
        [
          s("AI brief tools accelerate research extraction, not strategy. "),
          x(
            "Feed Clearscope or Surfer a target keyword; they return term suggestions and competitor word counts. Custom GPT workflows can scrape SERP features, People Also Ask, and competitor H2s in one pass. None decide whether the keyword is worth targeting or how your brand should angle the piece.",
            "Marketer owns keyword prioritisation and angle. AI owns mechanical SERP decomposition.",
          ),
          s(" Require strategist sign-off on brief differentiation before any draft begins — even for AI-first production."),
        ],
        [
          s("Brief quality predicts ranking outcome better than draft polish. "),
          x(
            "Teams that invest 45 minutes in brief quality and 90 minutes in editing outperform teams that spend 15 minutes on briefs and three hours fixing generic AI drafts. The brief is the highest-leverage SEO content artifact.",
            "Run quarterly brief audits: pull ten published articles, compare final content to original brief. Drift above 20% means your production pipeline bypasses briefs.",
          ),
          s(" Treat briefs as living documents — update when SERP shifts before refresh, not only at creation."),
        ],
      ],
      examples: [
        {
          title: "B2B SaaS — Clearscope brief pipeline",
          body: "A project management SaaS uses Clearscope for every blog brief: target keyword, recommended terms, competitor content scores. Their SEO lead adds a mandatory 'proprietary angle' field — customer usage data, integration depth, or practitioner interview requirement. Writers and AI drafting tools receive briefs only after angle approval. Average time-to-brief dropped from 3 hours to 40 minutes; content that hits page-one within six months increased 28% year-over-year because briefs stopped targeting keywords the brand could not differentiate on.",
        },
        {
          title: "E-commerce category brief automation",
          body: "A home goods retailer built a GPT workflow that ingests SERP exports, competitor product page structures, and their own inventory taxonomy to generate category page briefs at scale. Each brief includes required product attributes, FAQ schema candidates, and filter-page internal links. Human merchandiser reviews differentiation field only — confirming the page highlights assortment advantages competitors lack. Programmatic category expansion went from 12 pages per quarter to 45 with consistent brief quality.",
        },
        {
          title: "Brief-less AI disaster — finance publisher",
          body: "A personal finance site scaled AI article production to 200 posts per month without structured briefs — only keyword lists. Six months later: widespread cannibalisation, thin content manual actions on a subset of pages, and branded traffic flat despite volume. Recovery required content audit, brief retrofits on top performers, and deletion of undifferentiated pages. Estimated six-month organic traffic loss: 34%. Root cause was skipped brief layer, not AI drafting itself.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-seo-ch5-seo-content-workflow",
      type: "flow",
      title: "AI-Assisted SEO Content Workflow",
      caption:
        "SEO brief from intent and entity analysis → differentiate with original insight → draft and on-page optimise → quality gate with rubric → publish and schedule refresh.",
    }),
    buildSection({
      number: "5.2",
      title: "Content Differentiation in the AI Era",
      subtitle: "Why 'better written' generic content loses — and what actually earns rankings and citations",
      take: "When every competitor can publish competent AI drafts on the same keywords, differentiation is the ranking moat: original research, proprietary data, expert practitioner insight, unique frameworks, first-party customer evidence, and multimedia depth. Google's helpful content systems and AI Overviews both favour sources that add information gain — not paraphrased consensus.",
      why: "Undifferentiated AI content creates SERP sameness. Users and algorithms increasingly skip pages that restate what five other results already say. Marketers who differentiate at the brief stage avoid expensive production of interchangeable articles.",
      paragraphs: [
        [
          s("Information gain is the differentiation test. "),
          x(
            "Before publishing, ask: if this page disappeared, would the SERP lose unique information? Original survey data, benchmark reports, expert quotes with named credentials, step-by-step workflows from your product's actual usage, and contrarian analysis backed by evidence all pass. Rewritten top-ten summaries fail.",
            "Build a differentiation typology for your content team: data, expertise, experience, tooling, format innovation.",
          ),
          s(" Encode information gain requirements in your content rubric — not as optional 'nice to have'."),
        ],
        [
          s("AI accelerates differentiated content when source material is proprietary. "),
          x(
            "AI drafts from your customer interview transcripts, product analytics exports, or sales call themes produce differentiated output because the input is unique. AI drafts from 'write about keyword X' produce commodity output because the input is public knowledge.",
            "Invest in first-party data collection — surveys, usage reports, practitioner panels — as SEO infrastructure, not just marketing campaigns.",
          ),
          s(" Pair every high-priority keyword target with a differentiation source before greenlighting production."),
        ],
        [
          s("Format differentiation matters when information is similar. "),
          x(
            "Interactive calculators, comparison tables with verified pricing, video walkthroughs, and downloadable templates can differentiate when textual information overlaps. AI can help generate scaffolding; human curation and verification make it trustworthy.",
            "SERP feature analysis in your brief should flag when format — not just copy — is the ranking variable.",
          ),
          s(" Do not publish AI-generated statistics or quotes without verification — fabricated differentiation is worse than none."),
        ],
      ],
      examples: [
        {
          title: "HubSpot State of Marketing report",
          body: "HubSpot's annual research reports target high-volume marketing keywords but rank through proprietary survey data from thousands of practitioners. AI assists analysis and draft sections; the data itself is the moat. Competitors can write 'marketing trends' articles — they cannot replicate HubSpot's dataset without running their own survey. Pages earn links, citations in AI Overviews, and sustained rankings across years.",
        },
        {
          title: "Developer docs with real code examples",
          body: "A API platform's SEO strategy prioritises tutorials using live code from their sandbox environment — examples that only work on their stack. AI helps structure articles and explain concepts; code samples are pulled from tested repositories. Generic 'how to build X' articles from competitors lack runnable examples. Tutorial pages drive 40% of organic signups because differentiation is experiential, not lexical.",
        },
        {
          title: "Commodity AI listicle failure",
          body: "A HR software blog published 50 'best onboarding practices' listicles generated from AI without company-specific data or expert input. None reached page two. Content audit revealed top-ranking competitors all included original research or named expert commentary. Rewrite programme added practitioner interviews to top 15 targets; eight reached page one within four months. Differentiation investment was interview time, not word count.",
        },
      ],
    }),
    buildSection({
      number: "5.3",
      title: "On-Page Optimisation with AI",
      subtitle: "Title tags, headings, meta descriptions, and semantic coverage — automated assistance with human judgment",
      take: "AI on-page SEO tools optimise individual page elements: title and meta variants, heading structure suggestions, semantic term coverage, image alt text, and internal link recommendations. They excel at checklist completion and A/B variant generation. They cannot replace judgment on click-worthiness, brand voice in SERP snippets, or strategic internal linking architecture.",
      why: "On-page factors remain table stakes for competitive keywords. AI makes optimisation faster — but over-optimisation (keyword stuffing via AI term lists) still triggers quality issues. Marketers need a human review gate on anything visible in SERPs.",
      paragraphs: [
        [
          s("Separate optimisation into visible and invisible elements. "),
          x(
            "Visible: title tag, meta description, H1, URL slug — require human approval for brand voice and CTR appeal. Semi-visible: H2/H3 structure, intro paragraph, image alts — AI draft with editor review. Invisible: schema markup, canonical tags, semantic term coverage in body — higher AI automation tolerance with spot checks.",
            "CTR optimisation is a marketing skill, not an NLP task. AI suggests ten titles; marketer picks based on SERP differentiation.",
          ),
          s(" Test title variants on high-impression GSC pages before rolling AI title suggestions site-wide."),
        ],
        [
          s("Semantic coverage tools prevent under-optimisation without encouraging stuffing. "),
          x(
            "Clearscope, Surfer, and Frase score draft coverage against entity models derived from top rankers. Use them as floor checks — 'did we miss critical subtopics?' — not ceiling targets. Hitting 100% term score with awkward copy hurts readability and conversions.",
            "Set team policy: semantic tools inform edits, they do not dictate sentence structure.",
          ),
          s(" Log semantic scores at publish for refresh prioritisation — declining scores may signal SERP intent shift."),
        ],
        [
          s("Internal linking AI suggestions need architecture context. "),
          x(
            "Plugins and tools suggest internal links based on term overlap. Without pillar-cluster architecture, suggestions create random links that dilute topical authority. Feed AI linking tools your hub-and-spoke map as constraints.",
            "Automated internal links should strengthen declared content relationships, not create new ones ad hoc.",
          ),
          s(" Quarterly audit: do AI-suggested links align with your keyword-to-URL mapping document?"),
        ],
      ],
      examples: [
        {
          title: "Title tag A/B via GSC and AI variants",
          body: "A legal services firm used ChatGPT to generate five title variants per page for their top 30 GSC-impression pages. SEO lead selected two candidates per page based on SERP snippet differentiation — not keyword density. Implemented via CMS; monitored CTR over 60 days. Average CTR lift of 11% on tested pages. Pages where AI titles sounded generic were rejected — human judgment gate prevented SERP sameness.",
        },
        {
          title: "Surfer-assisted refresh on declining pages",
          body: "A cybersecurity blog identified 40 pages with declining rankings. Surfer compared drafts to current top-ranker entity models; editors added missing subtopics and updated statistics. AI drafted new sections; security analysts verified technical accuracy. 62% of refreshed pages recovered prior position or improved within 90 days. On-page AI worked because differentiation layer (analyst review) stayed intact.",
        },
        {
          title: "Over-optimisation penalty — affiliate site",
          body: "An affiliate publisher ran every AI draft through aggressive semantic optimisation — forcing every suggested term into awkward sentences. Readability scores plummeted; time-on-page dropped 45%; rankings stalled despite technical completeness. Fix: semantic tools set to 'suggest' not 'require'; editor authority to ignore low-relevance terms. Lesson: on-page AI is a coverage assistant, not a copy dictator.",
        },
      ],
    }),
    buildSection({
      number: "5.4",
      title: "Entity & Topic Inclusion",
      subtitle: "NLP-driven content depth that helps search engines and AI systems understand your authority",
      take: "Entity SEO means covering the people, concepts, products, and relationships that search NLP models associate with your target topic — not just repeating keywords. AI entity extraction from SERPs and knowledge graphs helps briefs and drafts include co-occurring entities competitors cover and gaps they miss. This supports traditional rankings and citation in AI-generated answers.",
      why: "Search engines model topics as entity networks. Thin keyword coverage without entity depth signals shallow expertise. As AI Overviews synthesise answers from entity-rich sources, marketers who neglect entity inclusion lose both blue-link visibility and citation share.",
      paragraphs: [
        [
          s("Build entity requirements into briefs from SERP and knowledge base analysis. "),
          x(
            "For a target query like 'enterprise SSO implementation', entities include: SAML, OIDC, identity providers (Okta, Azure AD), MFA, zero trust, compliance frameworks. AI tools extract these from top rankers and Wikipedia/knowledge graph sources. Brief lists required and optional entities with context on how to cover each.",
            "Entity lists prevent 'keyword covered, topic shallow' content that reads correctly to humans but lacks topical completeness to algorithms.",
          ),
          s(" Maintain an industry entity glossary updated quarterly — AI extraction supplements, not replaces, domain expertise."),
        ],
        [
          s("Named entities need accurate, verifiable treatment. "),
          x(
            "Mentioning competitors, standards bodies, regulations, and product names requires factual accuracy. AI hallucinates entity relationships — claiming integrations that do not exist or outdated compliance statuses. Entity-dense content demands fact-check gates.",
            "High entity density without accuracy is a liability in YMYL categories.",
          ),
          s(" Route entity-heavy drafts in finance, health, and legal through subject-matter review before publish."),
        ],
        [
          s("Schema markup reinforces entity signals for machines. "),
          x(
            "Article, FAQ, HowTo, Product, and Organization schema help search systems parse entities explicitly. AI can draft JSON-LD from page content; developers or SEO validate implementation. Pair content entity coverage with matching schema types.",
            "Schema is the machine-readable layer of entity SEO — content is the human-readable layer. Both matter.",
          ),
          s(" Audit schema quarterly with GSC rich result reports — errors undermine entity clarity."),
        ],
      ],
      examples: [
        {
          title: "MarketMuse entity gap analysis",
          body: "A B2B payments company used MarketMuse topic models for their 'B2B payment processing' pillar. Entity gap analysis revealed competitors consistently covered PCI DSS levels, interchange fees, and Net 30 terms — their content mentioned payments generically. Briefs updated with entity requirements; AI drafts expanded with analyst-verified entity sections. Pillar page moved from position 14 to position 4 over five months; AI Overview citations appeared for two sub-queries.",
        },
        {
          title: "Medical content entity accuracy gate",
          body: "A health publisher uses AI to draft condition overview articles but maintains a clinician review checklist specifically for entity accuracy: drug names, contraindications, guideline references. AI once conflated two similarly named conditions in an early draft — clinician gate caught it. Entity inclusion in health SEO is non-negotiable for E-E-A-T; accuracy gate is as important as coverage.",
        },
        {
          title: "Hallucinated integration entities",
          body: "A martech vendor's AI-generated comparison page claimed integrations with six platforms not in their product documentation. Sales team fielded confused prospect calls; partner relations flagged the issue. Root cause: AI inferred 'likely integrations' without source constraints. Fix: entity mentions in commercial content must link to verified documentation or be removed. Now briefs include an approved entity source list.",
        },
      ],
    }),
    buildSection({
      number: "5.5",
      title: "Scaling Content Production with Quality Control",
      subtitle: "Volume workflows, editorial rubrics, and the gates that prevent thin content at scale",
      take: "Scaling SEO content with AI requires explicit quality control: scoring rubrics covering differentiation, accuracy, entity coverage, readability, and brand voice; staged review roles; sampling audits; and publish thresholds. Without QC gates, volume scales penalties alongside pages — helpful content updates, crawl budget waste, and brand trust erosion.",
      why: "Leadership often demands 3x content output without 3x editorial headcount. The only sustainable path is AI-assisted drafting with rubric-gated review — not AI-assisted publishing without review.",
      paragraphs: [
        [
          s("Design a SEO content rubric with weighted scoring. "),
          x(
            "Example weights: differentiation/information gain (30%), factual accuracy (25%), intent match and structure (20%), on-page optimisation (15%), brand voice (10%). Score 1–5 per dimension; publish threshold e.g. 3.5 average with no dimension below 3.",
            "Rubrics make quality legible to leadership and train AI operators on what 'good' means beyond word count.",
          ),
          s(" Calibrate rubrics quarterly against pages that rank versus pages that do not — adjust weights based on outcomes."),
        ],
        [
          s("Stage review roles by risk and volume tier. "),
          x(
            "Tier 1 (high-volume, lower-risk informational): AI draft → SEO editor rubric → publish. Tier 2 (commercial, competitive keywords): AI draft → subject expert → SEO editor → publish. Tier 3 (YMYL, regulated): full journalist workflow with legal review; AI assists research only.",
            "Not every page needs the same review depth — but every page needs declared tier before production starts.",
          ),
          s(" Track review time per tier to set realistic volume targets — if Tier 2 review takes 90 minutes, math limits throughput."),
        ],
        [
          s("Sampling audits catch drift when volume scales. "),
          x(
            "Weekly random sample of published AI-assisted content reviewed by senior SEO against rubric. Monthly aggregate scores tracked. Declining scores trigger pipeline pause and root-cause analysis — usually brief degradation or skipped review under deadline pressure.",
            "QC at scale is statistical, not exhaustive. Sampling with teeth (unpublish authority) maintains standards.",
          ),
          s(" Publish QC metrics in marketing ops dashboards alongside volume — quality and quantity on same chart."),
        ],
      ],
      examples: [
        {
          title: "Rubric-gated content factory — travel publisher",
          body: "A travel media company scaled destination guides from 20 to 80 per month using AI drafts with a five-dimension rubric. SEO editors score in Airtable; sub-3.5 scores return to writer with specific dimension feedback. First quarter: 12% rejection rate, mostly differentiation failures. After brief template update mandating local expert quotes, rejection dropped to 4% and average position for new guides improved. Volume scaled because QC caught problems pre-publish, not post-penalty.",
        },
        {
          title: "Tiered review at fintech scale-up",
          body: "A fintech content team declared three tiers. Tier 1 glossary terms: AI draft + 20-minute editor review. Tier 2 product comparison pages: product marketer accuracy check + SEO review. Tier 3 regulatory content: no AI body copy — AI research summaries only. Throughput increased 2.5x while compliance incidents stayed zero. Tier declaration in brief prevented 'fast path' shortcuts on high-risk pages.",
        },
        {
          title: "QC bypass under quarterly pressure",
          body: "An e-commerce blog skipped rubric reviews for two weeks to hit a quarterly publish target. Following month: GSC impressions flat despite 60 new pages; crawl stats showed increased soft-404 behaviour on thin pages. Six months to recover after pruning 40% of rushed content. Leadership lesson: volume KPI without quality KPI creates negative ROI. Now publish volume is capped by passed rubric scores, not arbitrary targets.",
        },
      ],
    }),
    buildSection({
      number: "5.6",
      title: "Content Refresh Workflows",
      subtitle: "AI-accelerated updates that recover declining rankings and extend content shelf life",
      take: "Content refresh is often higher ROI than new content: updating declining pages with current data, expanded entity coverage, improved differentiation, and refreshed on-page elements. AI accelerates refresh by analysing GSC performance, comparing drafts to current SERP leaders, and drafting update sections — but refresh priority requires human judgment on business value and ranking potential.",
      why: "Most sites have a long tail of pages 2–3 years old with declining traffic. AI makes refresh economically viable at scale. Marketers who only publish new content while neglecting refresh leave ranking recovery on the table.",
      paragraphs: [
        [
          s("Prioritise refresh candidates with a scoring model. "),
          x(
            "Inputs: GSC impressions trend (declining), current position (5–20 = recovery zone), conversion value, content age, SERP change detected. AI aggregates signals; SEO lead sets quarterly refresh queue. High-impression decliners rank first — they have proven demand with fixable content.",
            "Refresh the pages search engines already trust enough to show — faster than building authority for new URLs.",
          ),
          s(" Set automated GSC alerts for 25%+ impression drops on pages with >1000 monthly impressions."),
        ],
        [
          s("Refresh types map to different AI workflows. "),
          x(
            "Light refresh: update statistics, dates, broken links, meta titles — AI identifies stale elements. Medium refresh: add new H2 sections for SERP gaps, expand entity coverage — AI drafts from updated brief. Heavy refresh: restructure for intent shift, add new differentiation layer — partial rewrite with new brief.",
            "Match refresh depth to SERP change magnitude. Light refresh on heavy intent shift wastes effort.",
          ),
          s(" Document refresh type in CMS changelog — analyse which depth recovers rankings most efficiently."),
        ],
        [
          s("Republish signals and crawl budget matter. "),
          x(
            "Substantial refreshes should update visible 'last updated' dates, resubmit sitemaps, and request indexing in GSC for high-priority pages. Minor typo fixes do not need recrawl campaigns.",
            "AI refresh workflows should output a changelog summary for CMS metadata and internal stakeholder communication.",
          ),
          s(" Track pre/post refresh metrics at 30, 60, and 90 days — build a refresh ROI case for budget."),
        ],
      ],
      examples: [
        {
          title: "GSC-driven refresh queue",
          body: "A software review site runs monthly GSC exports through a script flagging pages with >20% impression decline and position 4–15. AI compares page content to current top-three SERP structures and drafts gap sections. Editors review and publish updates with 'Updated [month year]' badges. Refresh programme recovered an estimated 180,000 monthly organic sessions over one year — 3x the traffic gain from new content in the same period.",
        },
        {
          title: "Regulatory refresh at scale — insurance",
          body: "An insurance comparison site uses AI to monitor regulatory term changes across 200 policy explainer pages. When detected, AI drafts updated paragraphs and flags legal review. Refresh SLA: 10 business days from regulation change to live update. Maintained rankings through two major regulatory cycles while competitors with static content lost visibility on compliance queries.",
        },
        {
          title: "Cosmetic refresh failure",
          body: "A marketing blog changed publish dates and ran AI grammar polish on 100 declining posts without adding information gain or SERP gap coverage. Rankings did not recover; some declined further. Google had already seen these pages as stale on substance, not syntax. Retry with medium refresh (new data sections, expert quotes) on top 30 posts recovered 70% within four months. Lesson: refresh must add value, not just freshness signals.",
        },
      ],
    }),
    buildSection({
      number: "5.7",
      title: "Programmatic SEO with AI",
      subtitle: "Template-driven pages at scale — location, comparison, and integration pages with governance guardrails",
      take: "Programmatic SEO generates large numbers of pages from structured data and templates: location pages, '[product] vs [competitor]' comparisons, integration directories, and calculator outputs. AI assists template copy variants, meta generation, and data-to-prose conversion. Success requires unique value per page, indexation discipline, and quality floors — otherwise programmatic becomes spam.",
      why: "Programmatic SEO can capture long-tail demand at scale impossible with manual writing. It can also trigger manual actions and brand damage when templates produce near-duplicate thin pages. AI lowers production cost but raises the temptation to over-publish.",
      paragraphs: [
        [
          s("Every programmatic page needs a uniqueness threshold. "),
          x(
            "Rule: if you removed the variable (city name, competitor name, integration name), would the remaining content justify a standalone page? Unique local data, proprietary metrics, user-generated content, or dynamic tool outputs pass. Swapping one proper noun in generic copy fails.",
            "Define minimum unique content percentage per template before engineering builds the pipeline.",
          ),
          s(" Pilot programmatic templates on 50–100 pages and measure indexation rate and rankings before scaling to thousands."),
        ],
        [
          s("AI assists variable copy without breaking template consistency. "),
          x(
            "Use AI to generate intro paragraph variants, FAQ answers from structured data, and meta descriptions per page — within constrained prompts that enforce brand voice and factual bounds. Structured data fields feed AI; AI does not invent data.",
            "Separate data layer (database) from narrative layer (AI-generated within constraints) from layout layer (template).",
          ),
          s(" Human review first 100 AI-generated variants per template — pattern-check for hallucination and duplication."),
        ],
        [
          s("Indexation governance prevents crawl waste. "),
          x(
            "Stagger publishing, monitor GSC index coverage, noindex pages that do not meet quality threshold. Programmatic rollouts without index monitoring have buried sites in soft-404 and duplicate content issues.",
            "Set indexation KPIs: % indexed, % ranking, % converting — not just pages published.",
          ),
          s(" Prune underperforming programmatic pages annually — smaller high-quality index beats massive thin index."),
        ],
      ],
      examples: [
        {
          title: "Zapier integration pages",
          body: "Zapier's integration directory programmatically generates thousands of '[App A] + [App B]' pages with unique connection data, setup steps, and use-case copy derived from product metadata. AI assists descriptive copy within templates; uniqueness comes from real integration capabilities. Pages capture long-tail 'connect X to Y' queries with genuine utility. Model for programmatic SEO where data layer is the moat.",
        },
        {
          title: "Local service pages with unique data",
          body: "A home services franchise generates location pages with AI-written intros constrained by local facts: service area zip codes, local team bios, region-specific pricing ranges from CRM data, and project photos geotagged to area. Each page passes 40% unique content threshold. Indexation rate 89% versus 34% on a previous generic template attempt. Local organic leads up 55% year-over-year.",
        },
        {
          title: "Programmatic penalty — real estate aggregator",
          body: "A property site published 50,000 AI-generated neighbourhood pages with identical structure and only neighbourhood name swapped. Google indexed initially then deindexed 80%; manual action on thin content followed. Recovery took 18 months and required deleting 40,000 pages. AI made the mistake cheap to make at scale. Governance: uniqueness threshold and pilot indexation monitoring now mandatory before programmatic launch.",
        },
      ],
    }),
    buildSection({
      number: "5.8",
      title: "The Marketer Decision Lens — New Content vs Refresh",
      subtitle: "A framework for allocating SEO content investment when AI makes both paths faster",
      take: "Before adding new URLs or refreshing existing ones, run four checks: (1) does search demand justify investment — volume, intent fit, business value? (2) can you differentiate — proprietary angle available? (3) is existing coverage better served by refresh — impressions history, current URL authority? (4) does your QC capacity support the chosen path at declared tier? New content when you have differentiation and gap. Refresh when you have declining assets with recovery potential. Neither when demand is weak or differentiation is absent.",
      why: "AI makes both new content and refresh cheap enough to do badly at scale. This lens prevents the two most common SEO content mistakes: publishing undifferentiated new pages while neglecting recoverable existing assets.",
      paragraphs: [
        [
          s("Check one: demand and intent fit. "),
          x(
            "Keyword research must confirm volume, intent alignment with conversion path, and realistic ranking difficulty. AI keyword tools accelerate clustering — strategist confirms business priority. No demand or wrong intent → neither new nor refresh.",
            "High difficulty without differentiation source → defer until angle exists.",
          ),
          s(" Demand validation is a go/no-go gate before brief creation."),
        ],
        [
          s("Check two: differentiation availability. "),
          x(
            "Can you assign a concrete information gain source — data, expert, experience, tool — to this target? If no, new content will be commodity. Consider whether refresh of an existing page can add the differentiation layer more efficiently than a new URL.",
            "Cannibalisation check: does an existing page already target this intent? Refresh may beat new URL.",
          ),
          s(" Differentiation absence is a pause signal, not an AI prompt tuning problem."),
        ],
        [
          s("Checks three and four: refresh potential and QC capacity. "),
          x(
            "Existing pages with impression history and positions 5–20 often beat new URLs on ROI when refreshed with medium or heavy depth. Match production path to review tier capacity — do not queue 50 Tier 2 pages if expert review bottlenecks at eight per week.",
            "Portfolio thinking: quarterly split target between new and refresh based on recovery opportunity, not just leadership preference for 'new'.",
          ),
          s(" Run this lens in content planning meetings with GSC data visible — not from keyword lists alone."),
        ],
      ],
      examples: [
        {
          title: "60/40 refresh allocation shift",
          body: "A B2B analytics company shifted from 90% new content to 60% refresh / 40% new after GSC analysis showed 200 pages with declining impressions but strong backlink profiles. AI refresh workflow recovered average 22% traffic on refreshed pages; new content pipeline focused only on differentiated keyword gaps. Net organic traffic up 31% year-over-year with flat publish volume. Leadership KPI changed from 'articles published' to 'organic sessions gained per content dollar'.",
        },
        {
          title: "Cannibalisation caught in planning lens",
          body: "Content team planned 12 new 'marketing attribution' articles. Decision lens review found three existing pages targeting overlapping intents with positions 8–15. Plan changed: heavy refresh on two existing pillars, one new page for genuinely distinct 'multi-touch attribution for SaaS' angle with product data differentiation. Avoided cannibalisation; recovered two pages to top five within three months.",
        },
        {
          title: "QC capacity reality check",
          body: "CMO requested 100 new Tier 2 product comparison pages in one quarter. Decision lens check four revealed SME review capacity for 25 pages maximum. Compromise: 25 Tier 2 comparisons with differentiation, 40 Tier 1 glossary expansions, 35 medium refreshes on existing comparisons. Quality held; hitting 100 undifferentiated comparisons would have failed rubric and wasted crawl budget.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Your team wants to scale AI article production to 100 posts per month using keyword lists only. What is missing?",
      options: [
        "A faster AI model.",
        "Structured SEO briefs with differentiation mandates, entity requirements, and intent mapping before drafting begins.",
        "More internal links.",
        "Shorter articles.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Briefs with differentiation precede scale. Re-read sections 5.1 and 5.2.",
      wrongFeedback:
        "Keyword lists without briefs produce commodity content at scale. Re-read sections 5.1 and 5.2.",
    },
    {
      q: "An AI draft scores 95% on semantic term coverage but reads awkwardly and adds no new information versus top rankers. What should you do?",
      options: [
        "Publish immediately — high term score guarantees rankings.",
        "Reject or revise — differentiation and readability matter; semantic tools are floor checks, not publish triggers.",
        "Add more keywords until it hits 100%.",
        "Delete all on-page optimisation.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Information gain beats term stuffing. Re-read sections 5.2 and 5.3.",
      wrongFeedback:
        "Semantic scores without differentiation produce thin content. Re-read sections 5.2 and 5.3.",
    },
    {
      kind: "order",
      q: "Order the AI-assisted SEO content workflow from first step to last.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "SEO brief with intent, entities, gaps, and differentiation mandate",
        "Draft with on-page optimisation and entity inclusion",
        "Quality gate — rubric scoring and tiered human review",
        "Publish with refresh monitoring triggers",
      ],
      correctFeedback:
        "Right. Brief → draft → QC → publish/monitor. Skipping brief or QC creates scale risk. Re-read sections 5.1–5.8.",
      wrongFeedback:
        "Start with the brief. Quality gate comes before publish. Re-read sections 5.1–5.8.",
    },
    {
      kind: "categorize",
      q: "Sort each practice into the correct SEO content production layer.",
      categories: ["Brief & strategy", "Differentiation", "On-page & entities", "Quality control"],
      items: [
        { text: "Mandatory proprietary angle field before draft approval.", category: 1 },
        { text: "SERP entity extraction fed into brief template.", category: 0 },
        { text: "Human approval on title tags and meta descriptions.", category: 2 },
        { text: "Weighted rubric with publish threshold score.", category: 3 },
        { text: "First-party survey data as draft input source.", category: 1 },
        { text: "Weekly random sample audit of published AI content.", category: 3 },
      ],
      correctFeedback:
        "Right. Brief = intent and entities. Differentiation = unique value. On-page = SERP elements. QC = rubrics and audits. Re-read sections 5.1–5.5.",
      wrongFeedback:
        "Match each practice to its pipeline stage: brief, differentiate, optimise, or gate. Re-read sections 5.1–5.5.",
    },
    {
      q: "A page has declining GSC impressions, position 11, and strong backlink profile. Leadership wants a new URL on the same keyword. What does the decision lens recommend?",
      options: [
        "Always create new URLs for fresh crawl signals.",
        "Prioritise medium or heavy refresh on the existing URL — recovery zone with existing authority often beats new URL.",
        "Delete the page and forget it.",
        "Publish AI content without review to move faster.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Refresh often outperforms new URLs when assets have history and recovery potential. Re-read sections 5.6 and 5.8.",
      wrongFeedback:
        "Declining pages with authority are refresh candidates, not automatic new URL triggers. Re-read sections 5.6 and 5.8.",
    },
    {
      q: "You are launching 10,000 programmatic location pages with AI-generated copy. What governance step is non-negotiable?",
      options: [
        "Publish all at once for maximum crawl.",
        "Pilot 50–100 pages, enforce uniqueness threshold per template, monitor indexation and rankings before full rollout.",
        "Skip human review entirely at scale.",
        "Use identical copy with city name swapped for consistency.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Programmatic SEO requires uniqueness floors and pilot indexation monitoring. Re-read section 5.7.",
      wrongFeedback:
        "Programmatic at scale without uniqueness and pilot governance risks thin content penalties. Re-read section 5.7.",
    },
  ],
});
