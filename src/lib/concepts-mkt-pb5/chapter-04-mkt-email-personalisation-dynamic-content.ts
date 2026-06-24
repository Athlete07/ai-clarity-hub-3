import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter04MktEmailPersonalisationDynamicContent = buildChapter({
  slug: "mkt-email-personalisation-dynamic-content",
  number: 4,
  shortTitle: "Personalisation & Dynamic Content",
  title: "Personalisation & Dynamic Content",
  readingMinutes: 24,
  summary:
    "Personalisation moves from first-name tokens to behavioural modules and predictive next-best-action — each tier requires more data, ESP capability, and content production capacity. Klaviyo, Salesforce Marketing Cloud, HubSpot, and Mailchimp support dynamic blocks, product recommendations, and AI-driven content selection. This chapter maps the personalisation spectrum, recommendation engines, behavioural adaptation, predictive personalisation, dynamic block production, preference centres, lift testing, and the infrastructure investment lens before scaling beyond segments.",
  keyTakeaway:
    "Personalisation lift is real but tiered — tokens are table stakes; behavioural and predictive layers need clean data, template architecture, and proof via holdout tests. AI generates block variants at scale; marketers own data governance, creepy-line policy, and infrastructure readiness before investment.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "4.1",
      title: "Personalisation Beyond First Name",
      subtitle: "The spectrum from basic token substitution to behavioural personalisation to predictive content recommendation — and where the genuine lift is",
      take: "Personalisation exists on a spectrum: Level 1 — tokens (first name, company); Level 2 — segment rules (industry hero, regional offer); Level 3 — behavioural (last viewed product, cart contents); Level 4 — predictive (next best product, churn risk offer, send-time). Each level increases lift and implementation cost. Tokens alone add minimal CTR; behavioural product modules often deliver 15–30% RPE lift in e-commerce; predictive requires volume and mature data science or ESP-native AI. Klaviyo, Salesforce Einstein, and HubSpot smart content span levels 2–4.",
      why: "Teams jump to predictive before segment personalisation works — wasted integration budget. Understanding the spectrum matches investment to data maturity and proves lift at each tier.",
      paragraphs: [
        [
          s("Audit current personalisation tier and data coverage. "),
          x(
            "Export sample profiles: what fields populate? What events fire? Gap analysis before promising 'AI personalisation.'",
            "80% token fill rate minimum for name; behavioural needs browse and purchase events on 60%+ active profiles.",
          ),
          s(" Document spectrum position in programme roadmap — honest tier label."),
        ],
        [
          s("Match personalisation depth to subscriber relationship stage. "),
          x(
            "Cold prospects: segment-level only. Active customers: behavioural product recs. Loyalists: predictive CLV offers.",
            "Over-personalising cold contacts feels surveillance — under-personalising VIPs wastes LTV.",
          ),
          s(" Creepy-line policy: no referencing private behaviour without clear value exchange."),
        ],
        [
          s("Prove lift at each tier before climbing spectrum. "),
          x(
            "A/B static vs segment hero, then vs behavioural module, then vs predictive. Holdout 10% control.",
            "Some campaigns need no personalisation — broadcast brand story to full list is valid.",
          ),
          s(" Log lift % and production cost per tier — ROI justifies next investment."),
        ],
      ],
      examples: [
        {
          title: "Spectrum climb — outdoor retail",
          body: "Year 1: first name tokens (no measurable lift). Year 2: segment by activity interest from preference centre (+8% CTR). Year 3: behavioural viewed-product module (+22% RPE). Year 4: Klaviyo predictive CLV offers (+11% on top). Each tier proved before next — avoided premature Einstein project.",
        },
        {
          title: "B2B segment personalisation — HubSpot",
          body: "Industry smart content for six verticals outperformed generic nurture 2.1x CTR — without predictive AI. Firmographic personalisation was right tier for data available. Leadership stopped demanding 'Netflix algorithm' until CRM hygiene improved.",
        },
        {
          title: "Creepy overreach — travel brand",
          body: "Email referenced exact browsing hotel from hour prior — complaints rose. Shifted to category-level 'beach destinations you viewed' with preference opt-in. CTR stayed strong; complaints dropped 70%. Spectrum includes restraint.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-email-ch4-personalisation-spectrum",
      type: "nested",
      title: "Personalisation Spectrum",
      caption:
        "Tokens (basic) → behavioural (mid lift) → product AI recommendations → predictive next-best-action. Each tier needs more data and ESP capability.",
    }),
    buildSection({
      number: "4.2",
      title: "Product Recommendation Engines",
      subtitle: "How AI-powered product recommendations in email work — the algorithm, the data required, and the revenue impact",
      take: "Product recommendation engines in email use collaborative filtering, purchase affinity, co-view patterns, and catalog rules to populate dynamic product grids. Klaviyo Product Feeds and Salesforce Einstein Recommendations need SKU catalog sync, inventory status, and purchase/browse history. Algorithms exclude out-of-stock, respect margin floors, and diversify categories to avoid repetitive suggestions. Revenue impact strongest in post-purchase, browse abandonment, and win-back — weakest in cold prospecting without behaviour.",
      why: "Recommendations convert interest to SKUs — but bad recs (wrong size, out of stock, irrelevant category) erode trust faster than generic bestsellers.",
      paragraphs: [
        [
          s("Feed quality determines recommendation quality. "),
          x(
            "Daily catalog sync with price, image URL, stock flag, category taxonomy. Stale feeds show discontinued products — support nightmare.",
            "Shopify, Magento, and Salesforce Commerce connectors need monitoring alerts.",
          ),
          s(" Business rules layer on algorithm: exclude clearance from VIP emails, etc."),
        ],
        [
          s("Choose algorithm type by data volume and catalog size. "),
          x(
            "Cold start: bestsellers and category rules. Warm: viewed-together, purchased-together. Large catalog: ML recommendations from ESP or Nosto, Algolia integrations.",
            "Under 1,000 SKUs manual affinity rules often match ML.",
          ),
          s(" Fallback block when insufficient behaviour — never empty grid."),
        ],
        [
          s("Measure recommendation email RPE vs static merchandising. "),
          x(
            "Holdout static control monthly on high-volume rec campaigns.",
            "Click distribution across recommended SKUs shows diversity — one SKU dominance signals broken algo.",
          ),
          s(" Merchandising veto power on seasonal hero overrides AI."),
        ],
      ],
      examples: [
        {
          title: "Klaviyo recs — fashion DTC",
          body: "Browse abandonment with AI recs vs static new arrivals: recs lifted RPE 26% on 90k monthly triggers. Inventory sync hourly prevented out-of-stock clicks. Fallback to category bestsellers when browse data thin.",
        },
        {
          title: "Salesforce Einstein — B2C marketplace",
          body: "Marketplace with 50k SKUs used Einstein Recommendations in post-purchase. Cross-category attach rate rose 14%. Business rules excluded third-party low-margin sellers from premium segment emails.",
        },
        {
          title: "Stale feed disaster — electronics",
          body: "Nightly catalog sync failed silently; emails showed discontinued models at old prices. Merchandising paused rec flows; fixed monitoring. Recovery took 3 weeks trust rebuild — feed ops is personalisation foundation.",
        },
      ],
    }),
    buildSection({
      number: "4.3",
      title: "Behavioural Personalisation",
      subtitle: "Tailoring email content based on what a subscriber has read, clicked, bought, or ignored — the content adaptation system",
      take: "Behavioural personalisation adapts email modules from individual actions: clicked pricing → ROI case study module; purchased category A → cross-sell category B; ignored three promos → content-led email. ESP conditional content (Klaviyo show/hide, HubSpot if/then, Mailchimp merge tags) implements rules. AI drafts variant modules per behaviour cluster. Requires event tracking integrity — broken pixels mean wrong personalisation.",
      why: "Behaviour beats demographics when intent signals exist. Behavioural personalisation is the sweet spot for many mid-market programmes before full predictive ML.",
      paragraphs: [
        [
          s("Map behaviours to content modules in a decision table. "),
          x(
            "Rows: behaviours (clicked topic X, purchased Y, inactive on promos). Columns: module variants. AI fills cell copy; marketer defines logic.",
            "Decision table prevents one-off spaghetti rules in ESP.",
          ),
          s(" Limit branches per email — three behaviour paths max for maintainability."),
        ],
        [
          s("Weight recency and frequency in behaviour rules. "),
          x(
            "Last 7-day click outweighs 90-day old interest. Frequency caps on same module — don't show same rec every send.",
            "Segment decay: old browse behaviour expires from personalisation.",
          ),
          s(" Sync email behaviour back to CRM for sales visibility."),
        ],
        [
          s("Negative behaviour matters — suppression and pivot. "),
          x(
            "Ignored last four promos → switch to editorial content track. Complained → remove from promotional track immediately.",
            "AI engagement scores in Klaviyo automate pivot triggers.",
          ),
          s(" Test behavioural personalisation vs segment-only with holdout."),
        ],
      ],
      examples: [
        {
          title: "Content affinity — B2B nurture HubSpot",
          body: "Contacts clicking security content received security case study module; ops content getters received workflow stories. Meeting rate 17% higher than single generic nurture body. AI drafted six modules; rules engine selected.",
        },
        {
          title: "Purchase behaviour cross-sell — pet supplies",
          body: "Klaviyo conditional blocks: dog food buyers saw treat recs; cat buyers saw litter. Cross-sell RPE 19% above undifferentiated post-purchase. Behaviour from order line items, not survey.",
        },
        {
          title: "Stale behaviour rule — SaaS",
          body: "Emails referenced 'your interest in Feature X' from 8-month-old click — product renamed. Quarterly behaviour rule audit aligned to current SKU names. CTR recovered 12 points.",
        },
      ],
    }),
    buildSection({
      number: "4.4",
      title: "Predictive Personalisation",
      subtitle: "Using AI to predict what a subscriber is most likely to want next — the next best action in email",
      take: "Predictive personalisation uses ML models — ESP-native (Klaviyo CLV, Salesforce Einstein NBA) or CDP — to predict next purchase date, churn risk, optimal discount depth, or product affinity before explicit behaviour. Next-best-action emails send the right offer to the right person at predicted moment. Requires thousands of transactions or rich event history; cold lists get unreliable predictions. Human sets guardrails: max discount, category exclusions, ethical use of churn scores.",
      why: "Predictive layer extracts margin from timing and offer precision — but misapplied predictions feel manipulative or wrong when data sparse.",
      paragraphs: [
        [
          s("Validate model accuracy before customer-facing deployment. "),
          x(
            "Review precision/recall on holdout set. ESP dashboards show predicted vs actual over 90 days.",
            "Below 70% accuracy on key prediction — stay behavioural.",
          ),
          s(" Start with one use case: churn prevention or replenishment timing."),
        ],
        [
          s("Next-best-action combines channel, offer, and content. "),
          x(
            "High CLV + low churn risk → premium early access. High churn risk → save offer + support CTA. Einstein NBA in Salesforce orchestrates.",
            "AI suggests action; marketer defines offer economics.",
          ),
          s(" Document NBA rules for compliance — no discriminatory pricing without policy."),
        ],
        [
          s("Fallback when prediction missing — new subscribers, gift purchases. "),
          x(
            "Default segment experience, not broken module. Gift buyer behaviour does not predict recipient preferences.",
            "Cold start period 30–90 days uses rules until model warms.",
          ),
          s(" Monitor prediction-driven revenue separately in attribution."),
        ],
      ],
      examples: [
        {
          title: "Churn prediction — subscription box Klaviyo",
          body: "Predicted churn risk triggered save offers at 14-day lead. Retained 9% of at-risk cohort incremental vs control. Offer depth tiered by predicted LTV — high-LTV got concierge call, low got pause option.",
        },
        {
          title: "Replenishment timing — Salesforce Einstein",
          body: "Consumables brand predicted reorder date per household. Emails sent 3 days before predicted depletion. Replenishment rate rose 21% vs fixed 30-day calendar. Model retrained quarterly on returns and skips.",
        },
        {
          title: "Premature predictive — small catalog startup",
          body: "200 customers, Einstein project $40k. Behavioural category rules matched predictive performance within noise. Deferred ML until 5k customers — lens saved budget.",
        },
      ],
    }),
    buildSection({
      number: "4.5",
      title: "Dynamic Content Block Production",
      subtitle: "Using AI to generate the multiple content variants that populate dynamic email templates — the production workflow for personalised at scale",
      take: "Dynamic templates contain slots: hero, product grid, testimonial, CTA bar — each slot has variant sets selected by rules. AI batch-generates variants: 'write hero for 6 industries' or 'write testimonial intro per use case.' Production workflow: template design in Figma → ESP build with slots → AI variant library → rule mapping → QA with test profiles. Klaviyo universal blocks and Salesforce Content Builder reuse modules across campaigns.",
      why: "Personalisation at scale fails when every variant is bespoke. Modular AI production makes dynamic email operationally feasible for small teams.",
      paragraphs: [
        [
          s("Design templates for slots, not monolithic layouts. "),
          x(
            "Hero slot 600px, product slot 3-column, footer static. Designers own grid; copy variants swap in slots.",
            "Changing layout per variant breaks testing — isolate copy personalisation.",
          ),
          s(" Component library in ESP — one update propagates all campaigns."),
        ],
        [
          s("AI variant generation in structured batches. "),
          x(
            "Spreadsheet: slot × segment × copy. Claude fills cells from brand brief. Editor reviews batch not one-offs.",
            "Jasper campaign workflows parallel for retail teams.",
          ),
          s(" Version control variant IDs — map to analytics for winner tracking."),
        ],
        [
          s("QA every rule path with test profiles before launch. "),
          x(
            "Profile A: enterprise, west coast, high CLV. Profile B: SMB, empty fields. Screenshot each render in Litmus.",
            "Broken rule shows wrong slot or empty — catches before 100k send.",
          ),
          s(" Launch with 2–3 slots personalised, expand after stable — not ten slots day one."),
        ],
      ],
      examples: [
        {
          title: "Six-industry hero batch — ERP vendor",
          body: "AI generated six hero blocks in one prompt cycle; HubSpot smart rules mapped CRM industry. Production 2 days vs 3 weeks manual. CTR on personalised heroes 2.4x generic in nurture track.",
        },
        {
          title: "Klaviyo universal blocks — seasonal swap",
          body: "Holiday slot variants pre-generated by AI; merchandising swapped universal block once for all active campaigns. Consistent personalisation across 12 live flows without individual edits.",
        },
        {
          title: "QA catch — missing fallback slot",
          body: "New vertical added to CRM without hero variant — blank hero for 8% of send. QA profile for 'industry=other' added; fallback generic hero rule implemented. Personalisation ops includes edge cases.",
        },
      ],
    }),
    buildSection({
      number: "4.6",
      title: "Preference Centre Design",
      subtitle: "Letting subscribers tell you what they want — and using AI to ensure the programme delivers on those preferences consistently",
      take: "Preference centres let subscribers choose topics, frequency, and channels — reducing unsubscribes and improving relevance. Fields sync to CRM and ESP segments: 'interested in product updates, not events.' AI helps generate preference centre copy, translate options to segment rules, and audit sends for preference violations. GDPR and CAN-SPAM require easy preference access; preference data is first-party gold for personalisation without creepiness.",
      why: "Self-reported intent beats inferred behaviour for trust-sensitive subscribers. Preference centres convert unsubscribe clicks into relationship tuning.",
      paragraphs: [
        [
          s("Design preferences subscribers understand — not internal taxonomy. "),
          x(
            "'Product launches' and 'Weekly tips' not 'Segment A' and 'Nurture track 3.' AI simplifies label copy from internal names.",
            "Limit options to 5–7 — choice overload reduces completion.",
          ),
          s(" Link preference centre in footer, welcome, and re-engagement emails."),
        ],
        [
          s("Wire preferences to suppression and inclusion automatically. "),
          x(
            "HubSpot subscription types, Klaviyo custom properties, Salesforce consent objects — bi-directional sync.",
            "Manual honouring of preferences fails at scale — automate or don't ask.",
          ),
          s(" Audit quarterly: sends to wrong preference = compliance and trust risk."),
        ],
        [
          s("Use preference data to seed personalisation tiers. "),
          x(
            "Declared interest enables segment personalisation without browse tracking — valuable in regulated categories.",
            "AI monitors preference vs click alignment — misalignment signals content gap.",
          ),
          s(" Report preference adoption rate — low usage means poor placement or too many options."),
        ],
      ],
      examples: [
        {
          title: "Preference centre save — media publisher",
          body: "Unsubscribe page offered topic preferences before leave. 22% chose preferences vs prior 100% loss. Engaged preference updaters had 2x 90-day CTR. AI drafted friendly preference copy and topic descriptions.",
        },
        {
          title: "B2B frequency preference — HubSpot",
          body: "Contacts chose weekly vs monthly digest. Complaint rate fell 40%; sales-nurture track excluded monthly-only contacts from weekly blasts. Salesforce sync kept reps informed of contact comm preference.",
        },
        {
          title: "Preference violation audit — retail",
          body: "Quarterly audit found event promos sent to 'product-only' preference — ESP rule misconfigured. Fixed mapping; sent apology to affected segment. Preference automation needs same QA as personalisation rules.",
        },
      ],
    }),
    buildSection({
      number: "4.7",
      title: "Testing Personalisation Lift",
      subtitle: "Measuring whether personalised email genuinely outperforms segment-level targeting — the A/B framework that proves the investment",
      take: "Personalisation lift tests compare personalised experience vs control: same segment, static content, or generic bestseller block. Metrics: CTR, conversion rate, RPE, unsub rate. Minimum sample: hundreds of conversions per variant for e-commerce; B2B may need longer windows. Test one personalisation layer at a time — behavioural product grid vs static, not behavioural + predictive + STO combined. Document incremental lift and production cost for ROI.",
      why: "Personalisation is expensive — data, templates, AI time. Without proof, programmes over-invest in complexity that does not beat good segment creative.",
      paragraphs: [
        [
          s("Holdout control is non-negotiable for major personalisation launches. "),
          x(
            "10% static control on personalised campaign for 4–8 weeks. Some 'lift' is seasonality — control isolates personalisation effect.",
            "Klaviyo A/B and Salesforce Einstein experiments support holdouts.",
          ),
          s(" Kill personalisation that does not beat control on primary metric in 90 days."),
        ],
        [
          s("Segment tests before individual-level when data thin. "),
          x(
            "Industry personalisation vs generic may prove faster than 1:1 product AI.",
            "Document path: segment lift proven → behavioural test → predictive pilot.",
          ),
          s(" Secondary metrics: unsub, complaint, time to purchase — personalisation can hurt if wrong."),
        ],
        [
          s("Calculate personalisation ROI including hidden costs. "),
          x(
            "Catalog sync engineering, variant production hours, ESP tier upgrade for AI features.",
            "Lift must exceed cost of alternative — often better segment creative wins.",
          ),
          s(" Present finance: incremental RPE × annual send volume − personalisation cost."),
        ],
      ],
      examples: [
        {
          title: "Behavioural vs static — home goods",
          body: "Viewed-product personalisation beat static bestsellers 18% RPE on 50k send test. Production cost +$2k/month catalog ops — ROI positive. Predictive tier tested next year after behavioural stable.",
        },
        {
          title: "Personalisation null result — B2B",
          body: "Firmographic smart content tested vs strong single message for IT persona. No significant SQL lift in 8 weeks. Reallocated budget to sales-alert automation — honest null result prevented sunk cost.",
        },
        {
          title: "Combined test mistake — DTC",
          body: "Team tested personalisation + new subject + STO simultaneously — unclear winner. Re-ran isolated behavioural test; personalisation alone 12% lift. Test discipline documented in playbook.",
        },
      ],
    }),
    buildSection({
      number: "4.8",
      title: "Marketer Decision Lens: Personalisation Infrastructure",
      subtitle: "The ESP capability, the data integration, and the content production capacity required before personalisation investment pays back",
      take: "Before scaling personalisation, score infrastructure: ESP supports dynamic content and recommendations? Catalog and CRM sync reliable? Event tracking coverage above 60%? Content team can maintain variant library? Legal comfortable with data use? Minimum viable: segment smart content on clean CRM fields. Advanced: behavioural modules with commerce integration. Expert: predictive NBA with data science or Einstein. Build preference centre and segment personalisation before predictive — foundation checklist gates spend.",
      why: "Vendor demos show Netflix-level personalisation; your stack may lack SKU sync. Infrastructure lens prevents six-figure projects on shaky data.",
      paragraphs: [
        [
          s("ESP capability checklist — dynamic blocks, recs, AI features, API limits. "),
          x(
            "Mailchimp vs Klaviyo vs Marketing Cloud differ radically. Match tier to ambition.",
            "Upgrade costs belong in personalisation ROI model.",
          ),
          s(" POC on staging with real catalog before enterprise contract expansion."),
        ],
        [
          s("Data integration checklist — events, catalog, CRM, consent. "),
          x(
            "Segment or native integrations feed browse and purchase. Consent flags gate personalisation fields.",
            "One broken webhook degrades entire dynamic template.",
          ),
          s(" Data engineering sprint before creative personalisation sprint."),
        ],
        [
          s("Content ops checklist — variant library, QA, governance. "),
          x(
            "Who updates 40 hero variants quarterly? AI reduces burden but not zero.",
            "Creepy-line and pricing policy documented for NBA offers.",
          ),
          s(" Re-score infrastructure annually — maturity unlocks next spectrum tier."),
        ],
      ],
      examples: [
        {
          title: "Infrastructure gate — mid-market retailer",
          body: "Predictive project paused: catalog sync daily not real-time, 30% browse events missing on mobile app. Fixed tracking and hourly sync first. Behavioural recs then delivered 20% lift — predictive approved 9 months later on solid base.",
        },
        {
          title: "ESP tier upgrade ROI — growing DTC",
          body: "Klaviyo upgrade for AI recs cost $15k annually. Holdout test showed $85k incremental revenue — finance approved. Without test, upgrade debated politically.",
        },
        {
          title: "Team capacity reality — nonprofit",
          body: "Einstein demo excited leadership; team of one marketer. Implemented preference centre + two segment variants only. Still beat generic 14% CTR — right-sized personalisation matched capacity.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Programme has 500 customers and broken browse tracking. Best personalisation starting point?",
      options: [
        "Deploy full predictive next-best-action immediately.",
        "Fix tracking; start with segment or preference-based personalisation on clean fields.",
        "Skip personalisation forever.",
        "Use purchased email lists for behaviour data.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Infrastructure and data volume gate predictive tiers. Re-read sections 4.1 and 4.8.",
      wrongFeedback:
        "Match personalisation tier to data maturity. Re-read sections 4.1 and 4.8.",
    },
    {
      kind: "order",
      q: "Order personalisation spectrum from foundational to advanced.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Token and segment-level smart content",
        "Behavioural modules from clicks and purchases",
        "Product recommendation engines with catalog sync",
        "Predictive CLV and next-best-action offers",
        "Holdout testing at each tier before advancing",
        "Preference centre and consent-aligned data",
      ],
      correctFeedback:
        "Right. Segment → behavioural → recs → predictive, with proof and preferences throughout. Re-read section 4.1.",
      wrongFeedback:
        "Climb the spectrum with data and tests — don't skip tiers. Re-read section 4.1.",
    },
    {
      kind: "categorize",
      q: "Sort practices into sound personalisation vs risky overreach.",
      categories: ["Sound personalisation", "Risky overreach"],
      items: [
        { text: "Fallback content when profile data missing.", category: 0 },
        { text: "Referencing private browsing with no value exchange.", category: 1 },
        { text: "Holdout test vs static control before scaling.", category: 0 },
        { text: "Predictive pricing without compliance review.", category: 1 },
        { text: "Preference centre topic self-selection.", category: 0 },
        { text: "Ten dynamic slots before QA process exists.", category: 1 },
      ],
      correctFeedback:
        "Right. Governance, fallbacks, and testing define sound personalisation. Re-read sections 4.6 and 4.7.",
      wrongFeedback:
        "Overreach and untested complexity harm trust and ROI. Re-read sections 4.6 and 4.7.",
    },
    {
      q: "Product recommendation emails show discontinued SKUs. First fix?",
      options: [
        "Change recommendation algorithm vendor.",
        "Repair catalog feed sync and inventory flags before algorithm tuning.",
        "Remove all product images.",
        "Send more emails to compensate.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Feed quality is foundation for product recs. Re-read section 4.2.",
      wrongFeedback:
        "Stale catalog breaks any algorithm — fix data pipeline first. Re-read section 4.2.",
    },
    {
      q: "Personalisation test changed subject, content, and send time together. Problem?",
      options: [
        "None — more changes find winners faster.",
        "Cannot attribute lift; test one personalisation layer at a time.",
        "Should add more variants.",
        "Tests are unnecessary for AI personalisation.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Isolated tests prove what drove lift. Re-read section 4.7.",
      wrongFeedback:
        "Combined changes confound results — test discipline required. Re-read section 4.7.",
    },
    {
      kind: "categorize",
      q: "Match personalisation type to typical data requirement.",
      categories: ["Behavioural data", "Declared preference data"],
      items: [
        { text: "Last viewed product module.", category: 0 },
        { text: "Topic selected in preference centre.", category: 1 },
        { text: "Cart contents dynamic block.", category: 0 },
        { text: "Monthly vs weekly frequency choice.", category: 1 },
        { text: "Purchase affinity cross-sell.", category: 0 },
        { text: "Opt-in to events only.", category: 1 },
      ],
      correctFeedback:
        "Right. Behavioural uses actions; preferences use self-reported intent. Re-read sections 4.3 and 4.6.",
      wrongFeedback:
        "Distinguish inferred behaviour from declared preferences. Re-read sections 4.3 and 4.6.",
    },
  ],
});
