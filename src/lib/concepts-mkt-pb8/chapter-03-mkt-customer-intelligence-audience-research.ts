import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter03MktCustomerIntelligenceAudienceResearch = buildChapter({
  slug: "mkt-customer-intelligence-audience-research",
  number: 3,
  shortTitle: "Customer Intelligence & Audience Research",
  title: "Customer Intelligence & Audience Research",
  readingMinutes: 24,
  summary:
    "Customer intelligence combines qualitative depth and quantitative scale — interviews and surveys synthesised by AI, social listening, review mining, AI-discovered segmentation, jobs-to-be-done framing, and market sizing. The output feeds ICP, messaging, creative, and media targeting in HubSpot, Demandbase, and ad platforms. AI compresses synthesis from weeks to days but cannot replace representative sampling or ethical use of public data. This chapter maps the intelligence workflow, qual synthesis, social and review signals, segmentation, JTBD, market sizing, and research investment decisions marketers own.",
  keyTakeaway:
    "Treat customer intelligence as a continuous system — qual plus quant, social plus CRM, segment plus activate — not a one-off persona workshop. AI accelerates synthesis and pattern detection; marketers own research design, sample quality, and the strategic choices that turn insight into campaigns.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "3.1",
      title: "Customer Intelligence Architecture",
      subtitle: "Qualitative plus quantitative, listening plus surveys, segment plus activate — the end-to-end intelligence system",
      take: "Customer intelligence architecture connects inputs — interviews, surveys, CRM, product usage, social, reviews — to synthesis layers — AI clustering, theme extraction, sentiment — to outputs — segments, JTBD maps, messaging briefs, audience lists. Tools span Dovetail, Listen Labs, Brandwatch, Sprout, G2 exports, and Claude on transcript corpora. Without activation path to HubSpot, Demandbase, and creative briefs, research becomes shelfware slide decks.",
      why: "Disconnected research produces personas nobody uses. Architecture ensures every insight has a destination in strategy and execution.",
      paragraphs: [
        [
          s("Map intelligence sources to strategic questions. "),
          x(
            "ICP refinement: win-loss and CRM. Messaging: interviews and reviews. Competitive: social and share of voice. Product marketing: JTBD from support and sales calls.",
            "Research plan quarterly — avoid reactive-only listening.",
          ),
          s(" Single customer intelligence repository — Notion, Dovetail, or warehouse tags — searchable by theme."),
        ],
        [
          s("Integrate qual and quant before segmenting. "),
          x(
            "Survey n=500 validates interview theme frequency; CRM fields validate segment size. AI suggests segments; humans check business materiality.",
            "Pure AI clustering on demographics without behaviour produces unactionable clusters.",
          ),
          s(" Document confidence level per insight — directional vs validated."),
        ],
        [
          s("Wire outputs to activation systems. "),
          x(
            "Segments sync to HubSpot lists, LinkedIn matched audiences, and creative brief templates. Intelligence review in campaign kickoff checklist.",
            "Sales enablement consumes same themes as ads — one source of truth.",
          ),
          s(" Measure research ROI: campaign lift on insight-informed tests vs control."),
        ],
      ],
      examples: [
        {
          title: "Dovetail + HubSpot — B2B SaaS",
          body: "A SaaS vendor centralised 120 interview transcripts in Dovetail; AI tagged themes synced to HubSpot contact properties for tier-B accounts. Campaign using top pain theme lifted email CTR 41% vs generic nurture. Sales cited same themes in 70% of won calls within quarter.",
        },
        {
          title: "Warehouse intelligence mart — PLG",
          body: "A PLG company joined product usage, NPS, and support tickets in Snowflake intelligence mart. AI weekly theme digest fed product marketing and paid social hooks. Feature adoption campaign keyed to ticket themes improved trial conversion 15%.",
        },
        {
          title: "Architecture fail — slide deck only",
          body: "An agency delivered persona PDFs without CRM or ad platform integration. Six months later no field used personas. Rebuild linked segments to Demandbase and creative matrix in Asana — insight activation rate became KPI for research budget.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-ma-ch3-customer-intelligence",
      type: "flow",
      title: "Customer Intelligence Flow",
      caption:
        "Qual + quant → social + reviews → segment → JTBD + market → activate in strategy and creative.",
    }),
    buildSection({
      number: "3.2",
      title: "Qualitative Research Synthesis with AI",
      subtitle: "Interviews, win-loss, and support themes — AI-accelerated synthesis with human validation",
      take: "Qualitative synthesis turns interviews, focus groups, win-loss calls, and open-ended survey text into themes, quotes, and opportunity areas. AI — Claude, Dovetail AI, Listen Labs — codes transcripts faster than manual affinity diagrams. Quality depends on interview guide design, diverse sample, and analyst challenge of AI themes. Synthesis is input to positioning and messaging, not replacement for talking to customers.",
      why: "Manual synthesis bottlenecks research throughput. AI scales coding; marketers must still validate and prioritize.",
      paragraphs: [
        [
          s("Design interview guides around decisions, not curiosity. "),
          x(
            "Questions tied to campaign, pricing, or ICP choice. Record with consent; store in searchable repository.",
            "Leading questions produce AI-confident wrong themes — neutral probes on jobs and alternatives.",
          ),
          s(" Target 8–15 interviews per segment before saturation claims."),
        ],
        [
          s("Use AI for first-pass coding; humans for synthesis judgment. "),
          x(
            "Claude Projects with transcript batches: extract themes, frequency, representative quotes. Analyst merges duplicate themes and flags outliers.",
            "Win-loss with Gong exports — tag competitor, objection, champion role.",
          ),
          s(" Present themes with evidence count — '12 of 15 mentioned implementation fear'."),
        ],
        [
          s("Refresh qual on product and market triggers. "),
          x(
            "Major release, competitor move, or ICP shift triggers new interview wave. AI diffs themes quarter-over-quarter.",
            "Sales and CS interview panels reduce marketing blind spots.",
          ),
          s(" Share synthesis in sales kickoff — alignment metric: messaging adoption."),
        ],
      ],
      examples: [
        {
          title: "Win-loss at scale — cybersecurity",
          body: "A cybersecurity firm exported 200 Gong win-loss calls. Claude clustered objections: integration time beat price in losses. Messaging pivot to 'deploy in 48 hours' lifted competitive win rate 9% in tracked segment. Themes linked to Salesforce loss reason picklist.",
        },
        {
          title: "Listen Labs concept test — consumer",
          body: "A consumer brand tested three positioning concepts via AI-moderated interviews in Listen Labs. 40 participants in 5 days. Winning concept validated in follow-up survey n=800. Meta creative using winning angle 22% lower CPA in geo holdout.",
        },
        {
          title: "Bias catch — enterprise software",
          body: "AI synthesis over-indexed friendly beta customers. Analyst added five churned-account interviews — surfaced onboarding gap missed in happy sample. Product fix plus campaign on onboarding proof reduced churn 6%.",
        },
      ],
    }),
    buildSection({
      number: "3.3",
      title: "Social Listening & Always-On Monitoring",
      subtitle: "Brandwatch, Sprout, Mention, and AI digests — turning social signal into marketing action",
      take: "Social listening monitors brand mentions, category conversations, competitor share of voice, and emerging topics across LinkedIn, X, Reddit, forums, and news. AI classifies sentiment, extracts themes, and alerts on spikes. Always-on monitoring complements episodic research — catches crisis early and surfaces content opportunities. Listening is public data ethics territory — transparent use, no astroturfing.",
      why: "Buyers discuss vendors in channels surveys miss. Listening informs real-time response and content calendar.",
      paragraphs: [
        [
          s("Define listening queries with boolean precision. "),
          x(
            "Brand + product aliases; category keywords excluding noise; competitor set. Brandwatch or Sprout dashboards tuned to reduce false positives.",
            "B2B: LinkedIn and Reddit often richer than X for technical categories.",
          ),
          s(" Review query set quarterly — acronym changes and new competitors."),
        ],
        [
          s("Route alerts to owners with response playbooks. "),
          x(
            "Sentiment crash → comms and support. Topic spike → content team brief within 48 hours. Competitor launch → battle-card update trigger.",
            "AI weekly digest summarises volume, SOV, top themes — human validates anomalies.",
          ),
          s(" Distinguish vanity mention volume from ICP-relevant conversation."),
        ],
        [
          s("Feed listening into content and paid creative. "),
          x(
            "Reddit objection threads become FAQ content; LinkedIn practitioner debates inform webinar topics.",
            "Share of voice reports justify brand spend to finance — directional, not attribution proof.",
          ),
          s(" Track content sourced from listening — engagement and pipeline proxy metrics."),
        ],
      ],
      examples: [
        {
          title: "Reddit signal — developer tools",
          body: "A dev tools company monitored r/devops for category terms. AI flagged rising frustration with competitor pricing model. Rapid blog and LinkedIn POV captured search demand; inbound demos rose 28% in category over 60 days. Listening query now standing agenda item.",
        },
        {
          title: "Crisis detection — consumer goods",
          body: "Brandwatch alert on ingredient controversy spiked negative sentiment 300% in 6 hours. Comms response within 2 hours; paid social paused on affected creative. Stock and brand tracker recovered vs prior crisis without listening — 40% faster sentiment normalisation.",
        },
        {
          title: "SOV to budget — B2B",
          body: "A B2B vendor tracked share of voice vs three competitors on LinkedIn and industry podcasts. SOV lagged despite product leadership. Funded podcast sponsorship and executive posting programme — SOV parity in two quarters; branded search lift 19%.",
        },
      ],
    }),
    buildSection({
      number: "3.4",
      title: "Review Mining & Voice-of-Customer Analytics",
      subtitle: "G2, Capterra, App Store, and support tickets — structured VoC for positioning and product marketing",
      take: "Review mining extracts themes from G2, Capterra, Trustpilot, App Store, and Amazon reviews — praise, pain, comparison language. AI summarises thousands of reviews into positioning hooks and objection handlers. Support ticket and NPS verbatims add private VoC. Mining complements surveys with unsolicited language buyers actually use — gold for ad copy and landing pages.",
      why: "Marketing copy in buyer language converts better than internal jargon. Reviews are continuous unpaid research panel.",
      paragraphs: [
        [
          s("Aggregate reviews across platforms into single corpus. "),
          x(
            "Export G2 via API; scrape within terms of service; App Store Connect for mobile. Tag by product line and competitor comparison reviews.",
            "AI sentiment and theme on verified purchaser reviews weights higher than anonymous.",
          ),
          s(" Update mining monthly — new review themes feed creative refresh cycle."),
        ],
        [
          s("Separate your reviews from competitor intelligence. "),
          x(
            "Own reviews: fix themes to CS and product. Competitor reviews: weakness to target in comparison pages and sales battle cards.",
            "Ethical bounds — no fake reviews; highlight public buyer words with attribution.",
          ),
          s(" Track review rating and theme trends as leading indicator of churn and win rate."),
        ],
        [
          s("Convert themes to testable copy variants. "),
          x(
            "Top praise phrase becomes headline A/B on landing page; top objection becomes FAQ block.",
            "HubSpot or Optimizely tests copy from VoC; AI drafts variants from theme library.",
          ),
          s(" Close loop: winning copy added to brand voice guide with source quote."),
        ],
      ],
      examples: [
        {
          title: "G2 theme library — martech",
          body: "A martech vendor mined 2,400 G2 reviews with Claude. Top delight: 'works without IT'. Headline test on homepage lifted demo requests 17%. Objection 'reporting limited' addressed in comparison PDF — win rate vs primary competitor up 8 points.",
        },
        {
          title: "App Store VoC — fintech app",
          body: "A fintech app clustered App Store reviews — onboarding confusion dominated 1–2 star. Product simplified KYC; marketing pre-empted with video ad using reviewer exact words. Store rating 3.8 to 4.4 in 90 days; CPI fell 15%.",
        },
        {
          title: "Ticket + review join — B2B support",
          body: "A B2B company joined Zendesk themes with G2 in Snowflake. Private tickets surfaced integration gaps public reviews had not yet. Proactive fix announcement reduced negative G2 velocity 45% quarter-over-quarter.",
        },
      ],
    }),
    buildSection({
      number: "3.5",
      title: "AI-Discovered Segmentation",
      subtitle: "Behavioural clusters, propensity segments, and the validation that makes segments actionable",
      take: "AI segmentation discovers clusters from behavioural, firmographic, and engagement data — k-means on warehouse features, HubSpot predictive lists, or CDP ML segments. Segments beat one-size personas when sized, reachable, and different in needs. Marketers name segments by motivation not just demographics ('speed-obsessed implementers' vs 'cluster 4'). Validate with qual sample and measure differential response in campaigns.",
      why: "Generic campaigns underperform segmented relevance. AI finds patterns humans miss; humans ensure segments are ethical and actionable.",
      paragraphs: [
        [
          s("Choose segmentation features with activation path. "),
          x(
            "If you cannot target segment in LinkedIn, HubSpot, or product — do not segment. Features: usage depth, industry, technographic, engagement recency.",
            "Snowflake + Python or Census AI segments; HubSpot Einstein for simpler stacks.",
          ),
          s(" Minimum segment size rule — e.g. 500 contacts or 5% of pipeline — before dedicated campaign."),
        ],
        [
          s("Validate AI clusters with qual and holdout tests. "),
          x(
            "Interview 5 per cluster to confirm motivation story. A/B campaign to cluster vs control on same offer.",
            "Segments that differ only in noise features fail holdout — prune annually.",
          ),
          s(" Document segment definition SQL — reproducible when data refreshes."),
        ],
        [
          s("Operationalise in CRM and media. "),
          x(
            "HubSpot smart lists, Demandbase audiences, dynamic creative by segment in Meta. Sales plays per segment tier.",
            "Privacy: sensitive inferred segments (health, finance stress) — legal review before use.",
          ),
          s(" Retirement policy for segments that no longer predict conversion."),
        ],
      ],
      examples: [
        {
          title: "Warehouse clusters — ecommerce",
          body: "A fashion retailer clustered customers on RFM and category affinity in BigQuery. AI named four segments; email journeys per segment lifted revenue per send 24% vs batch blast. Hightouch synced segments to Klaviyo nightly.",
        },
        {
          title: "B2B technographic segments — iPaaS",
          body: "An iPaaS vendor segmented on ZoomInfo stack plus product connector usage. 'Salesforce-heavy ERP migrators' segment received dedicated LinkedIn ABM — SQL rate 2.3x generic ICP list. Segment SQL archived in dbt for refresh.",
        },
        {
          title: "Failed segment — spurious cluster",
          body: "AI found cluster defined by browser type — not motivation. Holdout test showed no lift. Lesson: business interpretability gate before campaign build; analyst removed junk features from model.",
        },
      ],
    }),
    buildSection({
      number: "3.6",
      title: "Jobs-to-Be-Done & Buyer Motivation",
      subtitle: "Functional, emotional, and social jobs — the framework that turns research into positioning",
      take: "Jobs-to-be-Done (JTBD) frames why buyers 'hire' your product — functional job (integrate data), emotional job (feel in control), social job (look innovative to board). AI extracts job statements from interviews and reviews: 'When I [situation], I want to [motivation], so I can [outcome].' JTBD beats feature lists for positioning and category design. One product may serve multiple jobs — segment messaging by primary job.",
      why: "Feature parity markets need job-based differentiation. JTBD aligns product, marketing, and sales language.",
      paragraphs: [
        [
          s("Extract job stories from qual corpus with AI assistance. "),
          x(
            "Prompt Claude on transcripts: list situations, struggles, desired outcomes. Deduplicate into job map.",
            "Forces and anxieties — what prevents switch; competing 'hires' include spreadsheets and agencies.",
          ),
          s(" Prioritise top three jobs per ICP tier — focus beats exhaustive job library."),
        ],
        [
          s("Map jobs to message hierarchy and proof. "),
          x(
            "Primary job = headline; emotional job = brand film; functional proof = case study metrics.",
            "Sales discovery questions aligned to job dimensions — Gong trackers verify usage.",
          ),
          s(" Test job-based vs feature-based ads — metric: CTR and SQL quality."),
        ],
        [
          s("Refresh jobs when market shifts. "),
          x(
            "Economic downturn shifts emotional job toward risk reduction. AI diff interview corpus year-over-year.",
            "New competitor may change 'hire' alternatives — update battle cards.",
          ),
          s(" JTBD workshop annually with product and CS — cross-functional ownership."),
        ],
      ],
      examples: [
        {
          title: "JTBD reposition — project management",
          body: "A PM tool thought job was 'track tasks'; interviews revealed job was 'prove team accountability to executives'. Messaging shifted from features to executive dashboards and reporting. Enterprise pipeline grew 21%; sales cycle shortened — buyers saw immediate political value.",
        },
        {
          title: "Multi-job segmentation — payroll",
          body: "A payroll SaaS served 'compliance peace of mind' job for SMB and 'global consolidation' job for enterprise. AI-tagged CRM job primary field; nurture tracks split. SMB CPA down 14%; enterprise win rate up 11%.",
        },
        {
          title: "Failed feature focus — analytics",
          body: "A analytics vendor led with AI feature in ads; JTBD research showed buyers hired product for 'trusted board numbers'. Creative pivot to governance and audit trail lifted SQL-to-opp 16%. Feature remained secondary proof point.",
        },
      ],
    }),
    buildSection({
      number: "3.7",
      title: "Market Sizing & Opportunity Mapping",
      subtitle: "TAM, SAM, SOM with AI-assisted research — sizing markets for strategy and board narrative",
      take: "Market sizing estimates Total Addressable Market (TAM), Serviceable Addressable Market (SAM), and Serviceable Obtainable Market (SOM) using firmographic databases, analyst reports, keyword demand, and CRM penetration analysis. AI accelerates desk research synthesis and bottom-up building from segment counts × ACV. Sizing supports entry decisions, category creation narratives, and budget ambition — not precision prophecy. Document assumptions; stress-test scenarios.",
      why: "Board and investors ask 'how big?' Marketing owns SAM/SOM narrative grounded in evidence for category and GTM choices.",
      paragraphs: [
        [
          s("Build bottom-up from ICP definition when possible. "),
          x(
            "ZoomInfo or LinkedIn count of firms matching ICP × realistic penetration × ACV = SAM. AI helps compile counts and analyst quote extraction.",
            "Top-down analyst TAM cross-check — large gaps trigger assumption review.",
          ),
          s(" Show range low/base/high — false precision undermines trust."),
        ],
        [
          s("Use demand proxies for early categories. "),
          x(
            "Keyword volume, community size, job postings with skill terms, GitHub stars — directional demand before category exists in analyst reports.",
            "AI summarises fragmented sources into sizing memo draft.",
          ),
          s(" Update SOM annually with actual CRM penetration rate."),
        ],
        [
          s("Connect sizing to campaign and expansion priorities. "),
          x(
            "Underserved SAM segment with high growth → ABM priority. Saturated SOM → expansion geo or product line.",
            "Finance uses SOM for revenue planning — marketing aligns pipe targets.",
          ),
          s(" Sizing deck appendix lives with ICP wiki — single assumption set."),
        ],
      ],
      examples: [
        {
          title: "Bottom-up SAM — vertical SaaS",
          body: "A vertical SaaS for dental practices counted 85K US practices via industry association and ZoomInfo filter. 12% SAM at current product fit × $8K ACV = $81M SAM. Board approved category marketing spend; penetration tracking in Salesforce geo dashboard quarterly.",
        },
        {
          title: "AI desk research — emerging category",
          body: "A AI governance startup had no Gartner market size. Claude synthesised analyst fragments, job posting growth, and competitor funding into TAM range $2–4B. Used for Series A narrative with explicit assumptions; revised down after first year actuals — honesty preserved credibility.",
        },
        {
          title: "SOM reality check — APAC entry",
          body: "Marketing proposed APAC expansion citing large TAM. Bottom-up SOM on reachable English-language ICP was 8% of TAM. Pilot in Australia only; avoided six-country spray. SOM discipline saved $400K misallocated event spend.",
        },
      ],
    }),
    buildSection({
      number: "3.8",
      title: "Marketer Decision Lens: Customer Intelligence Investment",
      subtitle: "Research design, sample quality, activation path, and when AI synthesis is sufficient",
      take: "Before scaling customer intelligence tools, verify: (1) research questions tie to decisions in next two quarters, (2) sample includes won, lost, and churned — not only fans, (3) activation path to CRM, ads, and briefs exists, (4) legal clearance on social scraping and AI on PII transcripts. AI synthesis is sufficient for theme discovery — not for quota-setting or pricing without quant validation. Intelligence budget competes with media; prove lift on insight-informed tests.",
      why: "Research theatre wastes time and erodes sales trust. This lens ensures intelligence changes campaigns and positioning.",
      paragraphs: [
        [
          s("Gate new research with decision memo. "),
          x(
            "One page: decision, method, sample, timeline, activation owner. No memo, no project.",
            "Re-use existing corpus with AI before commissioning new interviews.",
          ),
          s(" Quarterly intelligence portfolio review — kill dormant personas."),
        ],
        [
          s("Score sample quality before acting on AI themes. "),
          x(
            "Check representation: segment, geography, deal size, outcome. Weight recent data higher in fast markets.",
            "Synthetic personas from AI without real interviews — banned for external messaging.",
          ),
          s(" Minimum evidence threshold in creative brief — 'n= quotes, validated in survey'."),
        ],
        [
          s("Measure intelligence ROI on campaign tests. "),
          x(
            "Insight-informed vs control creative, segment vs generic nurture. Document lift and roll into playbook.",
            "Failed test still valuable — updates confidence on insight.",
          ),
          s(" Align research calendar to product launch and planning cycles."),
        ],
      ],
      examples: [
        {
          title: "Decision memo discipline — enterprise",
          body: "CMO required memo for $80K Brandwatch renewal. Linked three decisions: crisis monitoring, competitive SOV, content themes. Renewal approved with activation KPIs. Prior year tool cancelled for lack of memo — shelfware avoided.",
        },
        {
          title: "Sample fix — churn blind spot",
          body: "Intelligence programme only interviewed NPS promoters. Added churn interview wave; discovered implementation partner gap. Partner programme launched; churn fell 5 points. Decision lens now requires lost/churn sample in every wave.",
        },
        {
          title: "ROI proof — VoC copy test",
          body: "CFO challenged research spend. Marketing ran VoC-derived headlines vs control in $20K Meta test — 19% lower CPA. Documented ROI; research budget protected in cut round.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Customer intelligence architecture must end with what?",
      options: [
        "Persona PDF in shared drive only.",
        "Activation in CRM, media, and creative briefs.",
        "More interviews without synthesis.",
        "AI personas without real data.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Intelligence must activate in systems and campaigns. Re-read sections 3.1 and 3.8.",
      wrongFeedback:
        "Architecture requires activation path. Re-read sections 3.1 and 3.8.",
    },
    {
      kind: "order",
      q: "Order the customer intelligence flow stages.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Qualitative and quantitative inputs",
        "Social and review listening",
        "AI segmentation and clustering",
        "JTBD and market sizing insight",
        "Activate in strategy and creative",
      ],
      correctFeedback:
        "Right. Inputs through activation — continuous system. Re-read section 3.1.",
      wrongFeedback:
        "Flow moves from inputs to activation. Re-read section 3.1.",
    },
    {
      kind: "categorize",
      q: "Sort each source into qual vs quant research.",
      categories: ["Qualitative", "Quantitative"],
      items: [
        { text: "Win-loss interview transcripts.", category: 0 },
        { text: "Survey n=1,200 with closed scales.", category: 1 },
        { text: "Gong call theme extraction.", category: 0 },
        { text: "CRM win rate by segment.", category: 1 },
        { text: "Focus group discussion.", category: 0 },
        { text: "Product usage cohort metrics.", category: 1 },
      ],
      correctFeedback:
        "Right. Qual explains why; quant measures how much. Re-read sections 3.2 and 3.5.",
      wrongFeedback:
        "Interviews are qual; scaled metrics are quant. Re-read sections 3.2 and 3.5.",
    },
    {
      q: "AI-discovered segment before campaign — required step?",
      options: [
        "Launch immediately to all channels.",
        "Validate with qual sample and holdout test; confirm targetable size.",
        "Use only browser type clusters.",
        "Skip CRM integration.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Validate segments before operationalising. Re-read section 3.5.",
      wrongFeedback:
        "Segments need validation and activation path. Re-read section 3.5.",
    },
    {
      q: "JTBD framing focuses on what?",
      options: [
        "Feature checklist only.",
        "Why buyers hire the product — functional, emotional, social outcomes.",
        "Competitor employee count.",
        "Internal org chart.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Jobs beat feature lists for positioning. Re-read section 3.6.",
      wrongFeedback:
        "JTBD captures motivation and outcomes. Re-read section 3.6.",
    },
    {
      kind: "categorize",
      q: "Match each sizing term to definition.",
      categories: ["TAM", "SOM"],
      items: [
        { text: "Total market if 100% share in theory.", category: 0 },
        { text: "Realistic obtainable share near-term.", category: 1 },
        { text: "Analyst report top-down universe.", category: 0 },
        { text: "ICP penetration × ACV bottom-up.", category: 1 },
        { text: "Broad category revenue pool.", category: 0 },
        { text: "Next 3-year capture target.", category: 1 },
      ],
      correctFeedback:
        "Right. TAM is theoretical; SOM is obtainable. Re-read section 3.7.",
      wrongFeedback:
        "TAM is total addressable; SOM is what you can capture. Re-read section 3.7.",
    },
  ],
});
