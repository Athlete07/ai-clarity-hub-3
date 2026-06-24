import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter01MktMarketingDataInfrastructure = buildChapter({
  slug: "mkt-marketing-data-infrastructure",
  number: 1,
  shortTitle: "Marketing Data Infrastructure",
  title: "Marketing Data Infrastructure",
  readingMinutes: 24,
  summary:
    "Marketing data infrastructure is the foundation every analytics, attribution, and AI programme depends on — collection from ads, web, CRM, and product; unification through CDP and identity resolution; warehousing in Snowflake or BigQuery; and activation back to campaigns. AI accelerates schema mapping, anomaly detection, and natural-language querying, but cannot fix missing events or broken identity graphs. This chapter maps the four-layer data stack, first-party strategy post-cookie, event taxonomy, CDP selection, privacy compliance, governance, and the investment sequencing that prevents shelfware.",
  keyTakeaway:
    "Build marketing data infrastructure in order: reliable event collection → identity resolution → governed warehouse → activation segments. AI makes analysis faster; marketers own taxonomy, consent, and the quality bar that determines whether downstream attribution and personalisation are trustworthy.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "1.1",
      title: "The Marketing Data Stack",
      subtitle: "Collection, unification, warehouse, and activation — the four layers that turn raw signals into AI-ready marketing intelligence",
      take: "The marketing data stack has four layers: collection (GA4, ad platforms, ESP, CRM, product analytics), unification (CDP, identity resolution, first-party profiles), warehouse (Snowflake, BigQuery, Databricks as governed single source), and activation (segments, reverse ETL, predictive models in HubSpot, Meta, Google). Fragmented stacks — platform dashboards in silos — cannot answer revenue questions or train reliable AI. Each layer has distinct owners, SLAs, and failure modes.",
      why: "Teams that buy BI before fixing collection report confident wrong numbers. Stack architecture determines whether marketing analytics is strategic or decorative.",
      paragraphs: [
        [
          s("Map current data flows before adding tools. "),
          x(
            "Inventory sources: GA4 events, Google Ads offline conversions, HubSpot or Salesforce objects, Segment or Rudderstack streams, Snowflake tables. Document which system is source of truth for contact ID, campaign ID, and revenue.",
            "Duplicate definitions — 'lead' in HubSpot vs 'conversion' in GA4 — break joins and AI models.",
          ),
          s(" Publish a data flow diagram reviewed quarterly by marketing, RevOps, and data engineering."),
        ],
        [
          s("Warehouse sits at the centre — not the CDP alone. "),
          x(
            "CDPs like Segment, mParticle, or Tealium unify profiles for activation; Snowflake or BigQuery stores historical grain for attribution, cohorts, and MMM inputs. Reverse ETL (Hightouch, Census) pushes warehouse segments to ads and ESP.",
            "CDP-without-warehouse limits longitudinal analysis; warehouse-without-CDP slows real-time activation.",
          ),
          s(" Define minimum refresh cadence: daily for reporting, hourly for high-velocity ecommerce, real-time for cart abandon only where ROI justifies cost."),
        ],
        [
          s("Activation closes the loop — data infrastructure must change campaigns. "),
          x(
            "Segments from warehouse feed Meta Custom Audiences, Google Customer Match, HubSpot workflows, and sales prioritisation. AI scoring models need clean feature tables in the warehouse first.",
            "Infrastructure that only powers Looker dashboards without activation ROI is hard to defend in budget reviews.",
          ),
          s(" Measure stack health: event delivery rate, identity match rate, pipeline sync latency, and segment freshness."),
        ],
      ],
      examples: [
        {
          title: "Stack rebuild — B2B SaaS",
          body: "A Series B SaaS vendor had GA4, HubSpot, and Salesforce reporting different MQL counts. RevOps implemented Segment → Snowflake → Hightouch to HubSpot and LinkedIn. Identity stitch via hashed email raised match rate from 41% to 78%. Marketing-sourced pipeline reporting reconciled to finance within 8% — first time in three years.",
        },
        {
          title: "Warehouse-first — DTC brand",
          body: "A DTC skincare brand skipped CDP initially: Shopify → Fivetran → Snowflake → dbt models → Hightouch to Klaviyo and Meta. CDP deferred until identity use cases multiplied. Saved $120K annual licence; analysts queried unified data in Looker. AI churn model trained on warehouse features outperformed ESP-native predictions.",
        },
        {
          title: "Activation gap exposed — enterprise martech",
          body: "An enterprise invested $400K in Tealium CDP but never connected reverse ETL. Profiles enriched in CDP; paid media still used 90-day-old CSV uploads. Audit moved activation to Hightouch from Snowflake golden records. Match rates rose 34%; CDP retained for tag management only.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-ma-ch1-data-stack",
      type: "nested",
      title: "Marketing Data Stack",
      caption:
        "Collection → unification → warehouse → activation. AI-ready marketing intelligence requires all four layers governed — not platform silos.",
    }),
    buildSection({
      number: "1.2",
      title: "First-Party Data Strategy",
      subtitle: "Owned audiences, consent-based collection, and the post-cookie foundation that paid media and personalisation require",
      take: "First-party data is information you collect directly with consent — email, account data, purchase history, product usage, and on-site behaviour tied to known identity. Third-party cookies and device graphs are eroding; Meta, Google, and retail media reward first-party audiences with better match rates and measurement. AI enriches first-party profiles with propensity scores and lookalike expansion — but only on data you lawfully hold.",
      why: "Teams without first-party strategy overpay for acquisition and underperform on retargeting as match rates collapse. Strategy precedes CDP purchase.",
      paragraphs: [
        [
          s("Audit first-party collection points and consent status. "),
          x(
            "Map every form, account creation, loyalty enrolment, and logged-in experience. HubSpot and Salesforce consent fields must sync to ad platforms via Customer Match and Enhanced Conversions.",
            "GDPR and CCPA require documented lawful basis — marketing cannot export lists data legal has not approved.",
          ),
          s(" Target 60%+ known-visitor rate on key conversion paths before scaling paid retargeting."),
        ],
        [
          s("Value exchange drives collection — not more form fields. "),
          x(
            "Tools, calculators, preference centres, and exclusive content justify email capture. AI personalises value prop copy; marketers design the exchange.",
            "Gated everything destroys SEO; ungated everything starves identity. Balance by funnel stage.",
          ),
          s(" Measure first-party growth: authenticated users, CRM coverage of customers, and match rate to ad platforms."),
        ],
        [
          s("Activate first-party across paid, email, and sales. "),
          x(
            "Suppression lists for customers, VIP early access segments, and cross-sell audiences from warehouse LTV tiers. Google Enhanced Conversions and Meta CAPI pass hashed identifiers from server-side GTM.",
            "Server-side tracking is infrastructure, not optional — browser pixels alone miss 20–40% of conversions post-ATT.",
          ),
          s(" Review match rate monthly — below 50% triggers data collection or implementation fixes."),
        ],
      ],
      examples: [
        {
          title: "Preference centre lift — fintech",
          body: "A fintech added preference centre with topic-level opt-ins post-rebrand. First-party email pool grew 28% in two quarters; unsubscribes fell 15%. Server-side GTM sent hashed emails to Google Ads — Enhanced Conversions improved Smart Bidding stability. Lookalike audiences built from high-LTV warehouse segment reduced CPA 19%.",
        },
        {
          title: "Logged-in strategy — media subscription",
          body: "A publisher shifted from cookie-based personalisation to logged-in free tier. Known users rose from 12% to 44% of traffic. Segment unified identity across web and app. Paid social retargeting match rate doubled; churn model in Snowflake triggered win-back before cancel.",
        },
        {
          title: "B2B account registration — API platform",
          body: "A developer API company required GitHub OAuth for docs and sandbox — first-party developer IDs linked to HubSpot and product usage in Segment. Sales saw product-qualified leads with usage depth scores. ABM audiences excluded active trialists from cold display — wasted impressions down 31%.",
        },
      ],
    }),
    buildSection({
      number: "1.3",
      title: "Event Tracking & Taxonomy",
      subtitle: "GA4, GTM, server-side tagging, and the event schema that makes every downstream report trustworthy",
      take: "Event tracking captures user actions — page views, signups, purchases, feature usage — with consistent names, parameters, and identity. GA4 data layer and GTM containers implement web events; Segment or Rudderstack standardises across web, app, and server. Taxonomy is a contract: `signup_completed` means the same in analytics, ads, and warehouse. AI helps audit tag coverage and suggest schema fixes; marketers own definitions with product and analytics.",
      why: "Bad taxonomy produces garbage-in AI insights. Fixing events costs less before warehouse modelling than after years of polluted history.",
      paragraphs: [
        [
          s("Publish a marketing event taxonomy document. "),
          x(
            "Columns: event name, trigger, parameters, identity required, downstream consumers (GA4, ads, CRM, warehouse). Include funnel events: `demo_requested`, `pricing_viewed`, `trial_started`.",
            "Renaming events breaks historical trends — version taxonomy (`signup_completed_v2`) when semantics change.",
          ),
          s(" Gate new campaigns on taxonomy compliance — no bespoke pixels without registry entry."),
        ],
        [
          s("Implement server-side and deduplication for conversions. "),
          x(
            "Server-side GTM or Segment sends purchase and lead events with `event_id` for Meta CAPI and Google deduplication. Client-only pixels double-count and miss iOS traffic.",
            "Shopify, Stripe, and HubSpot webhooks provide authoritative conversion source — prefer server events over thank-you page fires.",
          ),
          s(" QA tracking with GA4 DebugView and platform test events before campaign launch."),
        ],
        [
          s("Monitor tracking health continuously. "),
          x(
            "Alert on session drops, null `user_id` spikes, and checkout event volume vs payment processor. AI anomaly tools flag drift; humans investigate site releases and consent banner changes.",
            "Consent Management Platforms (OneTrust, Cookiebot) affect volume — segment reports by consent state.",
          ),
          s(" Run quarterly tracking audits after major site releases and CMS migrations."),
        ],
      ],
      examples: [
        {
          title: "Taxonomy reset — ecommerce replatform",
          body: "A fashion retailer replatformed to Shopify without event mapping — GA4 revenue diverged 40% from Shopify Admin. RevOps deployed server-side purchase events via Elevar → Segment → Snowflake. dbt tests flagged missing `item_id` on 8% of events. Post-fix, Meta ROAS reconciled to finance within 12%.",
        },
        {
          title: "B2B funnel events — HubSpot sync",
          body: "A HR tech vendor defined six funnel events in GTM data layer, synced to HubSpot via Segment. `pricing_calculator_completed` became predictive lead score input. Sales accepted MQL definition tied to event bundle — SQL rate rose 24% after discarding pageview-only leads.",
        },
        {
          title: "Consent-aware reporting — EU expansion",
          body: "A US SaaS entering EU deployed OneTrust; analytics volume dropped 35% for declined cookies. Marketing reported consented vs modelling-adjusted metrics separately. Leadership approved EU spend with honest baseline — avoided false panic when dashboards showed dip.",
        },
      ],
    }),
    buildSection({
      number: "1.4",
      title: "CDP Selection & Identity Resolution",
      subtitle: "Segment, mParticle, Tealium, and warehouse-native approaches — matching CDP capability to activation needs",
      take: "Customer Data Platforms unify profiles across touchpoints — stitching anonymous web behaviour to known CRM contacts via email, login ID, or device graph. Segment and Rudderstack lead developer-centric stacks; Tealium and mParticle serve enterprise tag and consent complexity; ActionIQ and Simon Data warehouse-native CDPs query Snowflake directly. AI features (identity ML, propensity) require clean inputs. Buy CDP for activation latency and identity rules you cannot build in warehouse alone.",
      why: "Wrong CDP fit wastes six-figure licences. Identity resolution quality determines personalisation, attribution joins, and audience match rates.",
      paragraphs: [
        [
          s("Define identity resolution rules explicitly. "),
          x(
            "Primary keys: email (hashed), `user_id`, `crm_id`. Merge rules: last-touch vs first-touch identity; handling shared emails and B2B domains.",
            "Segment Identity Resolution and mParticle IDSync document merge logic — misconfiguration duplicates or splits profiles.",
          ),
          s(" Measure stitch rate: anonymous sessions linked to known contacts within 7 days."),
        ],
        [
          s("Evaluate CDP vs composable stack honestly. "),
          x(
            "Composable: Rudderstack/Segment collection → Snowflake → Hightouch activation. Packaged CDP: Tealium AudienceStream, Salesforce Data Cloud. Warehouse-native suits mature data teams; packaged suits marketers needing UI activation.",
            "AI vendor demos show real-time personalisation — validate against your identity match rate reality.",
          ),
          s(" Pilot 90 days on one use case — cart abandon sync or ABM list — before enterprise rollout."),
        ],
        [
          s("Connect CDP to ads, ESP, and sales systems bidirectionally. "),
          x(
            "Outbound: audiences to Meta, Google, LinkedIn. Inbound: offline conversions and CRM updates. HubSpot and Salesforce native integrations reduce custom code.",
            "Latency matters: batch nightly audiences miss intraday abandon; real-time costs more infrastructure.",
          ),
          s(" Document data retention and deletion — CDP must honour erasure requests across destinations."),
        ],
      ],
      examples: [
        {
          title: "Segment + Snowflake — growth-stage SaaS",
          body: "A 200-person SaaS chose Segment Connections to Snowflake with Hightouch to Salesforce and Google Ads. Identity via `user_id` + email hash achieved 72% stitch rate. CDP licence half the cost of enterprise Tealium quote. Marketing activated product usage segments within six weeks of implementation.",
        },
        {
          title: "Tealium at scale — retail",
          body: "A multi-brand retailer needed consent enforcement across 40 domains. Tealium AudienceStream managed tags, consent, and audience firing. Match rate to Meta 65% with loyalty ID. AI propensity scores from Tealium Predictions fed email triggers — incremental revenue 11% in test holdout.",
        },
        {
          title: "CDP deferral — early startup",
          body: "A seed-stage startup used HubSpot tracking code + GA4 + manual CSV Customer Match. CDP deferred until 10K monthly known contacts. Claude-assisted SQL in BigQuery (Fivetran from HubSpot) built audiences. Saved $50K year one; revisited Segment at Series A with clear use cases documented.",
        },
      ],
    }),
    buildSection({
      number: "1.5",
      title: "Privacy, Consent & Compliance",
      subtitle: "GDPR, CCPA, consent mode, and the lawful foundation for analytics, ads, and AI on customer data",
      take: "Privacy compliance governs what data you collect, how long you keep it, and which processing is lawful — GDPR in EU, CCPA/CPRA in California, and sector rules (HIPAA, financial). Consent Management Platforms gate tags; Google Consent Mode v2 adjusts modelling for denied analytics. AI on customer data requires documented purpose limitation — you cannot feed support tickets into ad targeting without basis. Marketers partner with legal; ignorance is not a defence.",
      why: "Fines and brand damage exceed martech savings. Non-compliant data poisons AI models and ad platform accounts.",
      paragraphs: [
        [
          s("Map data processing activities to lawful basis. "),
          x(
            "Consent for marketing email and non-essential cookies; legitimate interest for B2B outreach where applicable; contract for product delivery analytics.",
            "Legal review on new AI tools that process PII — ChatGPT with customer exports requires DPA and opt-out policy.",
          ),
          s(" Maintain Records of Processing Activities — marketing inputs campaign and analytics systems."),
        ],
        [
          s("Implement technical consent controls, not banner theatre. "),
          x(
            "OneTrust or Cookiebot blocks GA4 and ad tags until consent; Consent Mode passes signals to Google for modelling. Server-side tags respect same consent state.",
            "Pre-ticked boxes and dark patterns invite regulatory action — UX and legal align on clear choices.",
          ),
          s(" Segment dashboards by consent — compare modelled vs observed conversion paths."),
        ],
        [
          s("Honour deletion and portability requests end-to-end. "),
          x(
            "Erasure must cascade: CRM, CDP, warehouse, ESP, and ad platform suppression lists. Hightouch and Segment Destinations need deletion API workflows.",
            "AI training data retention — if you fine-tuned on customer text, deletion may require model retraining policies.",
          ),
          s(" Quarterly privacy audit: sample deletion request completion time under 30 days."),
        ],
      ],
      examples: [
        {
          title: "Consent Mode v2 — EU paid media",
          body: "A B2C travel brand deployed Consent Mode v2 with OneTrust before Google enforcement deadline. Observed conversions dropped; modelled conversions in GA4 and Google Ads recovered 70% of signal for bidding. EU ROAS reporting stabilised — campaigns paused incorrectly during transition restarted with honest blended view.",
        },
        {
          title: "AI vendor review — healthcare marketing",
          body: "A healthcare SaaS blocked marketing from uploading patient-adjacent testimonials to public LLMs. Approved workflow: anonymised summaries in Claude Enterprise with BAA. HubSpot remained system of record; AI drafts from de-identified exports only. Compliance signed off; velocity still improved 35%.",
        },
        {
          title: "Deletion cascade — subscription box",
          body: "A DTC brand received GDPR erasure request; manual process left Meta Custom Audience and Klaviyo profiles active — compliance gap. Implemented Segment deletion API fan-out to all destinations. Next audit: 100% cascade within 72 hours. Trust score in privacy policy page became conversion test winner.",
        },
      ],
    }),
    buildSection({
      number: "1.6",
      title: "Data Governance & Quality",
      subtitle: "Ownership, SLAs, dbt tests, and the quality bar that determines whether AI and attribution are trustworthy",
      take: "Data governance assigns ownership — marketing owns campaign taxonomy, RevOps owns CRM hygiene, data engineering owns pipeline SLAs. Quality dimensions: completeness, accuracy, timeliness, consistency. dbt tests in Snowflake flag null rate spikes; Great Expectations monitors warehouse tables. AI magnifies bad data into confident wrong recommendations. Governance is not bureaucracy — it is the immune system for measurement.",
      why: "Without governance, every team trusts different numbers. Budget fights replace decisions.",
      paragraphs: [
        [
          s("Assign data owners and escalation paths. "),
          x(
            "RACI for key entities: Contact, Account, Campaign, Opportunity, Event. Marketing data steward approves taxonomy changes; RevOps approves CRM field additions.",
            "Shadow spreadsheets appear when official data is distrusted — governance restores single source of truth.",
          ),
          s(" Monthly data council: marketing, sales, finance, data — review open quality issues."),
        ],
        [
          s("Automate quality checks at pipeline boundaries. "),
          x(
            "dbt tests: `not_null` on `email`, `accepted_values` on `lifecycle_stage`, referential integrity between events and users. Alert Slack on failure before dashboards refresh.",
            "HubSpot duplicate contacts and Salesforce orphan opportunities are top B2B quality killers.",
          ),
          s(" Publish data quality scorecard — match rate, duplicate rate, sync lag — on marketing wiki."),
        ],
        [
          s("Document definitions aligned to finance and sales. "),
          x(
            "Marketing Qualified Lead, pipeline, and revenue must match board definitions. AI-generated reports using ambiguous metrics erode credibility.",
            "Metric dictionary in Notion or Confluence — version controlled when definitions change.",
          ),
          s(" Reconcile marketing pipeline to finance monthly — variance over 10% triggers root cause."),
        ],
      ],
      examples: [
        {
          title: "dbt quality gates — Series C SaaS",
          body: "A SaaS vendor added dbt tests on Segment-derived Snowflake tables. Failed `opportunity_amount` null test blocked Looker refresh — caught HubSpot-Salesforce sync bug before board meeting. Marketing regained trust in pipeline dashboard; AI narrative tool restricted to tested marts only.",
        },
        {
          title: "CRM hygiene sprint — enterprise",
          body: "Duplicate rate in Salesforce hit 18% — attribution and ABM lists polluted. RevOps ran dedupe with ZoomInfo enrichment; marketing paused campaigns two weeks. Post-sprint: 3% duplicates, match rate to LinkedIn 61% from 39%. ABM ROI improved without additional spend.",
        },
        {
          title: "Metric dictionary — multi-channel retail",
          body: "A retailer aligned 'customer', 'order', and 'ROAS' across Amazon, DTC, and wholesale. Finance-owned revenue; marketing-owned attributed marketing revenue subledger. AI weekly summary pulled from dictionary-linked Looker explores only — eliminated 'which ROAS?' arguments in leadership meetings.",
        },
      ],
    }),
    buildSection({
      number: "1.7",
      title: "Infrastructure Investment Sequencing",
      subtitle: "What to build first, what to defer, and how to stage martech spend for compounding returns",
      take: "Investment sequencing prevents analytics theatre: (1) fix event tracking and CRM hygiene, (2) establish warehouse or unified export, (3) identity and CDP if activation requires it, (4) BI and AI layers, (5) advanced attribution and MMM. Skipping steps produces expensive dashboards on broken foundations. AI querying tools (Julius, ThoughtSpot, Claude on CSV) are cheap leverage only when underlying data is clean.",
      why: "Vendors sell the top of the stack. Marketers who sequence bottom-up compound capability; others rotate tools annually.",
      paragraphs: [
        [
          s("Run infrastructure maturity assessment quarterly. "),
          x(
            "Score 1–5: tracking coverage, identity match, warehouse freshness, activation use cases live, governance documented. Lowest score gets next quarter budget.",
            "Honest assessment beats vendor demo envy — Tealium cannot fix missing purchase events.",
          ),
          s(" Share maturity score with finance — justifies infrastructure before campaign scale."),
        ],
        [
          s("Stage CDP, reverse ETL, and BI in dependency order. "),
          x(
            "Typical path: GA4 + server-side → Fivetran/Airbyte to Snowflake → dbt → Looker → Hightouch → then evaluate CDP if identity UI needed.",
            "Parallel big-bang implementations fail — pick one activation win per quarter.",
          ),
          s(" Cap concurrent martech projects at two — implementation fatigue kills adoption."),
        ],
        [
          s("Measure infrastructure ROI in decision quality, not tool count. "),
          x(
            "Success: faster campaign post-mortems, reconciled attribution, fewer manual CSV exports, sales trusts lead source field.",
            "AI assistants on warehouse reduce analyst queue — marketers self-serve cohort questions.",
          ),
          s(" Sunset unused licences annually — shelfware tax funds next layer."),
        ],
      ],
      examples: [
        {
          title: "Bottom-up rebuild — marketplace",
          body: "A marketplace skipped warehouse and bought enterprise BI on raw exports. Reports contradicted finance. Reset: Segment → Snowflake → dbt (6 months) before any new BI. Deferred CDP. Year two: single pipeline truth; Meta and Google audiences from warehouse; MMM inputs ready.",
        },
        {
          title: "Phased Hightouch — B2B",
          body: "A B2B company activated three Hightouch syncs in sequence: (1) HubSpot lifecycle to Salesforce, (2) Snowflake ABM tier to LinkedIn, (3) product usage to CS alerts. Each phase proved ROI before next. Total implementation 9 months vs failed 18-month CDP-only project at prior employer.",
        },
        {
          title: "AI after foundation — retail media",
          body: "A brand rushed ChatGPT analysis on messy Excel exports — wrong recommendations on inventory. Paused AI spend; fixed Fivetran + dbt in 10 weeks. Relaunched Claude on curated Snowflake views with metric dictionary. Merchandising tests from AI insights lifted margin 4% — credible because data was governed.",
        },
      ],
    }),
    buildSection({
      number: "1.8",
      title: "Marketer Decision Lens: Data Infrastructure Investment",
      subtitle: "The tracking, identity, governance, and sequencing checks before the next martech purchase",
      take: "Before approving CDP, BI, or AI analytics tools, run four gates: (1) can you trust event volume vs business reality within 15%? (2) identity match rate above 50% for key use cases? (3) named owners and metric dictionary exist? (4) will the tool activate campaigns or only add dashboards? Fix collection before CDP; fix CDP/warehouse before AI narratives. Defer glamour tools until foundation score exceeds 3/5 on internal maturity rubric.",
      why: "Infrastructure decisions outlast campaign cycles. This lens prevents six-figure shelfware and builds trust with sales and finance.",
      paragraphs: [
        [
          s("Gate one: tracking trust test. "),
          x(
            "Compare last 30 days GA4 key events to CRM creates and payment processor totals. Gap over 15% blocks new tool purchase until root cause fixed.",
            "Server-side implementation and taxonomy audit are prerequisites, not parallel projects.",
          ),
          s(" Document sign-off from RevOps and finance on reconciliation method."),
        ],
        [
          s("Gate two: identity and activation path. "),
          x(
            "Define one must-ship activation use case — abandon cart, ABM tier, churn risk — with target match rate and latency. Vendor selection serves that use case.",
            "If warehouse + Hightouch solves it, CDP may be optional.",
          ),
          s(" Kill pilots that do not hit match rate target in 90 days."),
        ],
        [
          s("Gate three: governance and privacy readiness. "),
          x(
            "Consent flows, deletion cascade, and AI data policy documented before feeding customer data to LLMs or predictive models.",
            "Legal sign-off on ad platform data terms when using Enhanced Conversions.",
          ),
          s(" Infrastructure charter published — shared with procurement to block rogue tool buys."),
        ],
      ],
      examples: [
        {
          title: "Procurement block — sane sequencing",
          body: "A CMO halted Tealium RFP when tracking audit showed 35% purchase event loss. Funded server-side GTM and taxonomy instead. Six months later Tealium reconsidered from strength — implementation completed in 8 weeks vs projected 14. Finance cited sequencing discipline in annual planning.",
        },
        {
          title: "Build vs buy — composable win",
          body: "Marketing wanted Salesforce Data Cloud; data team proposed Segment + Snowflake + Hightouch at 40% cost. Pilot ABM sync proved value in 60 days. Leadership approved composable stack; savings funded analyst headcount for governance.",
        },
        {
          title: "AI tool pause — quality first",
          body: "A team licensed natural-language BI before warehouse tests existed. AI cited inflated lead counts from duplicate HubSpot records. Paused licence; fixed dbt tests; relaunched. Decision lens now requires quality scorecard green before AI analytics budget.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Marketing data stack layers in correct dependency order?",
      options: [
        "Activation → collection → warehouse → unification",
        "Collection → unification → warehouse → activation",
        "Warehouse → collection → activation → unification",
        "BI → CDP → ads → CRM only",
      ],
      correct: 1,
      correctFeedback:
        "Right. Collect, unify, warehouse, then activate. Re-read sections 1.1 and 1.7.",
      wrongFeedback:
        "Stack builds from collection through activation. Re-read sections 1.1 and 1.7.",
    },
    {
      kind: "order",
      q: "Order infrastructure investment sequencing from first to last priority.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Fix event tracking and CRM hygiene",
        "Establish warehouse or unified export",
        "Identity resolution and CDP if needed",
        "BI and AI analytics layers",
        "Advanced attribution and MMM",
      ],
      correctFeedback:
        "Right. Foundation before glamour tools. Re-read section 1.7.",
      wrongFeedback:
        "Build tracking and warehouse before MMM. Re-read section 1.7.",
    },
    {
      kind: "categorize",
      q: "Sort each item into first-party vs third-party data approach.",
      categories: ["First-party", "Third-party / deprecated"],
      items: [
        { text: "Logged-in user preference centre data.", category: 0 },
        { text: "Third-party cookie retargeting pool.", category: 1 },
        { text: "HubSpot form submissions with consent.", category: 0 },
        { text: "Purchased email list without opt-in.", category: 1 },
        { text: "Server-side Enhanced Conversions hash.", category: 0 },
        { text: "Cross-site device graph broker.", category: 1 },
      ],
      correctFeedback:
        "Right. Owned, consented data is the durable foundation. Re-read section 1.2.",
      wrongFeedback:
        "First-party is collected directly with consent. Re-read section 1.2.",
    },
    {
      q: "Identity match rate below 50% — best next action?",
      options: [
        "Buy enterprise CDP immediately.",
        "Diagnose tracking, merge rules, and collection before scaling activation.",
        "Ignore — platforms model the gap.",
        "Stop all paid media permanently.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Fix identity and collection before CDP glamour. Re-read sections 1.3 and 1.4.",
      wrongFeedback:
        "Low match rate requires taxonomy and identity fixes first. Re-read sections 1.3 and 1.4.",
    },
    {
      q: "Before feeding customer data to AI tools, what is required?",
      options: [
        "Nothing — AI vendors handle privacy.",
        "Documented lawful basis, DPA, and data policy alignment with legal.",
        "Only marketing manager approval.",
        "Delete all CRM records first.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Privacy and legal alignment precede AI on PII. Re-read section 1.5.",
      wrongFeedback:
        "Compliance and purpose limitation govern AI on customer data. Re-read section 1.5.",
    },
    {
      kind: "categorize",
      q: "Match each check to infrastructure investment gate.",
      categories: ["Must pass before new tool", "Can improve in parallel"],
      items: [
        { text: "Event volume within 15% of CRM reality.", category: 0 },
        { text: "Email subject line A/B test.", category: 1 },
        { text: "Named data owners and metric dictionary.", category: 0 },
        { text: "Social creative hook variant.", category: 1 },
        { text: "Deletion cascade documented for CDP.", category: 0 },
        { text: "Webinar slide design refresh.", category: 1 },
      ],
      correctFeedback:
        "Right. Foundation gates precede tactical tests. Re-read section 1.8.",
      wrongFeedback:
        "Infrastructure gates block tools until tracking and governance pass. Re-read section 1.8.",
    },
  ],
});
