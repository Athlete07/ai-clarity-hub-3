import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter01MktEmailStrategyProgrammeArchitecture = buildChapter({
  slug: "mkt-email-strategy-programme-architecture",
  number: 1,
  shortTitle: "Email Strategy & Programme Architecture",
  title: "Email Strategy & Programme Architecture",
  readingMinutes: 24,
  summary:
    "Email is the owned channel marketers control when paid algorithms shift and social reach contracts. A mature programme is not a newsletter calendar — it is an architecture of welcome series, onboarding flows, nurture sequences, broadcast campaigns, transactional messages, and retention programmes wired to revenue. This chapter maps the complete programme structure, AI-assisted journey design, behavioural segmentation, list health, send-time optimisation, measurement frameworks, and the email-to-revenue model — so you build lifecycle infrastructure before chasing subject line hacks.",
  keyTakeaway:
    "Email programme excellence starts with architecture, not copy. Map acquisition → nurture → broadcast → retention layers, segment on behaviour not demographics alone, protect list health before scale, and connect every sequence to revenue attribution. AI accelerates journey design and send-time personalisation — marketers own programme structure, data integration, and investment priority.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "1.1",
      title: "The Email Programme Architecture",
      subtitle: "Welcome series, onboarding, nurture flows, broadcast campaigns, transactional emails, and retention programmes — the complete programme map",
      take: "Every high-performing email programme runs on four layers: acquisition (welcome and first-value moments), nurture (behavioural sequences that educate and convert), broadcast (campaigns and newsletters that drive engagement and offers), and retention (loyalty, win-back, and expansion). Transactional email sits underneath as infrastructure — order confirmations, password resets, and receipts that build trust. Klaviyo, HubSpot, Mailchimp, and Salesforce Marketing Cloud each implement these layers differently, but the architecture is universal. Teams that skip the map send random campaigns; teams that document it scale revenue predictably.",
      why: "Without a programme map, marketers over-invest in broadcast blasts while welcome and abandonment flows leak revenue. Architecture first clarifies what to build, what to automate, and what data each layer requires.",
      paragraphs: [
        [
          s("Document every live and planned email type in a single programme map. "),
          x(
            "List: welcome series (post-signup), onboarding (product activation), nurture (education and conversion), broadcast (promotional and editorial), transactional (system-triggered), retention (loyalty and win-back). Tag each with trigger, audience, goal metric, and owning team.",
            "A DTC brand on Klaviyo often has 12+ flows plus weekly campaigns — without a map, duplicate welcome triggers and conflicting suppressions appear within months.",
          ),
          s(" Review the map quarterly with CRM and product — new signup paths and SKUs create gaps."),
        ],
        [
          s("Acquisition and nurture layers carry disproportionate ROI per send. "),
          x(
            "Welcome emails average 4–5x higher open rates than broadcast. Abandonment and browse flows recover 5–15% of lost carts. Broadcast fills calendar gaps but rarely outperforms behavioural triggers on revenue per recipient.",
            "Enterprise B2B on HubSpot may run six nurture tracks by persona while sending one monthly newsletter — the nurture tracks drive pipeline; the newsletter maintains awareness.",
          ),
          s(" Allocate production capacity to flows before adding another promotional send."),
        ],
        [
          s("Transactional email is brand infrastructure, not an afterthought. "),
          x(
            "Order confirmations, shipping updates, and billing notices in Klaviyo or Salesforce often exceed marketing send volume. They set deliverability baseline and trust — broken transactional templates damage every subsequent campaign.",
            "Stripe + Klaviyo integrations, HubSpot transactional APIs, and Mailchimp Mandrill each need separate authentication and template governance.",
          ),
          s(" Audit transactional templates annually — they are the highest-open emails you send."),
        ],
      ],
      examples: [
        {
          title: "Klaviyo programme map — DTC skincare",
          body: "A skincare brand mapped six layers: welcome (3 emails), post-purchase (5), browse abandonment (3), cart abandonment (3), VIP retention (monthly), and weekly broadcast. Map review revealed two duplicate welcome flows from Shopify and popup signup. Consolidation lifted welcome-to-purchase rate 18% and cut list fatigue complaints 40%. Architecture audit paid back in one quarter.",
        },
        {
          title: "HubSpot B2B — nurture vs broadcast split",
          body: "An HR software vendor documented twelve persona nurture tracks, three onboarding sequences, and biweekly broadcast. Leadership wanted more newsletters; map showed nurture tracks generated 73% of marketing-sourced SQLs. Budget shifted to track expansion and sales-alert triggers — pipeline rose 22% without more broadcast volume.",
        },
        {
          title: "Salesforce Marketing Cloud — enterprise layering",
          body: "A financial services firm unified transactional (Journey Builder entry from core banking), onboarding (30-day activation), and retention (annual review prompts) in one architecture doc. Siloed teams had been sending conflicting messages to new account holders. Unified map plus suppression rules cut complaint rate 35% and improved cross-sell email CTR 2.1x.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-email-ch1-programme-map",
      type: "nested",
      title: "Email Programme Map",
      caption:
        "Four lifecycle layers: Acquisition (welcome + onboarding), Nurture (behavioural sequences), Broadcast (campaigns + newsletters), Retention (loyalty + win-back). Transactional underpins trust.",
    }),
    buildSection({
      number: "1.2",
      title: "AI for Subscriber Journey Design",
      subtitle: "Mapping the email experience from first subscription to long-term loyalty — and how AI personalises the path at each stage",
      take: "Subscriber journey design maps every touchpoint from opt-in to advocacy: what they receive after signup, how onboarding accelerates first value, when nurture shifts from education to offer, and how retention programmes recognise loyalty milestones. AI tools — Klaviyo AI, HubSpot content assistants, Jasper, and Claude with CRM exports — accelerate journey mapping by synthesising behavioural data, suggesting branch logic, and drafting stage-appropriate copy. Humans own journey goals, brand voice, and suppression rules that prevent over-mailing.",
      why: "Generic journeys treat all subscribers identically; AI-assisted design branches on product interest, engagement velocity, and purchase history — the difference between a 2% and 8% conversion path.",
      paragraphs: [
        [
          s("Start journey design from the subscriber's goal, not your campaign calendar. "),
          x(
            "Ask: what did they expect when they opted in? Map emails to deliver that promise in 48 hours, then expand. AI can cluster signup source and first-click behaviour to suggest branch paths — popup discount seekers differ from content downloaders.",
            "Klaviyo predictive analytics and HubSpot lead scoring feed branch suggestions; marketers validate against business rules.",
          ),
          s(" Document one primary goal per journey stage — awareness, activation, conversion, retention."),
        ],
        [
          s("Use AI to draft journey logic and copy variants, not to set strategy. "),
          x(
            "Export segment definitions and top-performing emails into Claude; request a five-email nurture arc with subject lines and delay recommendations. Review for offer frequency, compliance, and voice before building in ESP.",
            "AI-generated journeys often over-email — cap touchpoints per week in governance rules.",
          ),
          s(" Prototype journeys in staging with test profiles before connecting live triggers."),
        ],
        [
          s("Personalisation at journey level means dynamic paths, not just tokens. "),
          x(
            "Branch on product category viewed, trial feature used, or content topic consumed. Mailchimp Customer Journeys and HubSpot workflows support if/then branches; Klaviyo splits on predictive CLV tiers.",
            "Paths with three or fewer branches ship faster than fifteen — start simple, add AI-suggested branches when data supports them.",
          ),
          s(" Measure journey completion rate and time-to-conversion, not just per-email opens."),
        ],
      ],
      examples: [
        {
          title: "AI journey mapping — SaaS trial activation",
          body: "A project management SaaS exported 90-day trial behaviour into GPT: feature usage clusters, email engagement, and churn patterns. AI proposed a three-branch onboarding: power users (advanced tips), stalled users (setup help), and team-invite laggers (collaboration prompts). Built in HubSpot with human-edited copy. Trial-to-paid conversion rose 14% — branches matched real friction points manual mapping missed.",
        },
        {
          title: "Klaviyo AI — post-purchase journey branches",
          body: "A supplement brand used Klaviyo AI to suggest post-purchase sequences by first product SKU — collagen vs protein vs vitamins. Each branch recommended cross-sell timing and education topics. Revenue per new customer at 60 days rose 26% versus one-size post-purchase flow.",
        },
        {
          title: "Journey over-mail fix — B2B newsletter",
          body: "An analytics vendor's AI-drafted nurture included eleven touches in fourteen days. Compliance review cut to six emails over twenty-one days with clearer value gates. Unsubscribe rate halved; meeting-booked rate unchanged — proof that journey design needs human throttle, not maximum AI output.",
        },
      ],
    }),
    buildSection({
      number: "1.3",
      title: "Audience Segmentation with AI",
      subtitle: "Building segments based on behaviour, engagement history, purchase data, and predictive signals — beyond list demographics",
      take: "Demographic segments — industry, company size, geography — are table stakes. AI-era segmentation layers behavioural recency, frequency, monetary value (RFM), content affinity, predictive churn risk, and next-best-product propensity. Klaviyo segments on 350+ properties; HubSpot lists combine CRM and email behaviour; Salesforce Einstein segments score engagement automatically. Segments should answer a send decision: who gets this offer, who gets suppressed, who needs a different message.",
      why: "Broadcast to full list trains algorithms and subscribers that email is irrelevant. Behavioural segments lift click rate 2–3x and protect deliverability by targeting engaged users first.",
      paragraphs: [
        [
          s("Build a segmentation hierarchy: engagement, value, lifecycle, intent. "),
          x(
            "Engagement: opened/clicked in 30/90 days. Value: RFM tiers or LTV quartiles. Lifecycle: prospect, customer, churned. Intent: browsed category, abandoned cart, downloaded asset. AI suggests thresholds from your data distribution.",
            "Start with four to six core segments every campaign references — not 200 micro-lists no one uses.",
          ),
          s(" Name segments by action they enable: 'VIP-90d-active' not 'Segment 47'."),
        ],
        [
          s("Predictive segments require clean event data and minimum volume. "),
          x(
            "Klaviyo CLV and churn prediction need purchase history; HubSpot predictive lead scoring needs form and page events. Below 5,000 engaged profiles, rule-based RFM outperforms unstable ML segments.",
            "Sync Shopify, Salesforce, or product analytics before trusting predictive segments.",
          ),
          s(" Validate predictive segments monthly against actual conversion — recalibrate thresholds."),
        ],
        [
          s("Suppression segments matter as much as inclusion. "),
          x(
            "Exclude recent purchasers from promo blasts, suppress complainers and hard bounces automatically, and hold out control groups for incrementality tests. AI can flag over-mailed profiles showing engagement decay.",
            "Mailchimp engagement segments and Klaviyo sunset flows prevent sending to zombies.",
          ),
          s(" Every broadcast brief lists inclusion and exclusion segments before copy starts."),
        ],
      ],
      examples: [
        {
          title: "RFM segmentation — e-commerce on Klaviyo",
          body: "A home goods retailer built RFM tiers from order data: Champions, Loyal, At Risk, Hibernating. Champions received early access; At Risk got win-back offers; Hibernating entered sunset suppression. Campaign revenue per send rose 34% versus undifferentiated blasts. AI suggested RFM thresholds from order distribution — marketer approved boundaries.",
        },
        {
          title: "HubSpot + Salesforce — ABM email segments",
          body: "An ERP vendor synced Salesforce account tier and HubSpot engagement into dynamic lists: target accounts with no meeting in 60 days, engaged contacts at opportunity stage, and cold accounts with content downloads. Sales-aligned segments lifted meeting rate 19% on nurture sends versus generic industry blasts.",
        },
        {
          title: "Predictive CLV — subscription box",
          body: "A meal-kit brand used Klaviyo predicted CLV to route new subscribers into premium recipe content vs discount-heavy tracks. High-CLV predicted profiles received retention-focused emails; low-CLV received referral incentives. Twelve-month retention spread improved 8 points between tiers — segmentation matched investment to value.",
        },
      ],
    }),
    buildSection({
      number: "1.4",
      title: "Email List Health with AI",
      subtitle: "Identifying disengaged subscribers, predicting churn, and designing re-engagement workflows before the list degrades and deliverability suffers",
      take: "List health is deliverability insurance. Inactive subscribers who never open drag engagement rates, trigger spam placement, and inflate list size metrics that fool leadership. AI identifies disengagement patterns early — declining open frequency, click gaps, preference silence — and triggers re-engagement or suppression before Gmail and Yahoo classify you as a bulk sender with poor engagement. Klaviyo sunset flows, Mailchimp re-engagement automations, and HubSpot inactive contact workflows automate the hygiene cycle.",
      why: "A list that grows 20% annually but engagement falls 30% is shrinking in effective reach. Proactive hygiene beats emergency deliverability crises after a major campaign lands in spam.",
      paragraphs: [
        [
          s("Define disengagement with platform-appropriate windows. "),
          x(
            "Common rule: no open or click in 90–120 days = at risk; 180+ days = sunset candidate. B2B with monthly sends may use 120 days; daily retail may use 60. AI analyses your open curve to suggest optimal thresholds.",
            "Apple Mail Privacy Protection inflates open rates — weight clicks and site activity heavier in health scoring.",
          ),
          s(" Document health tiers in your ESP and review monthly trend, not just absolute list size."),
        ],
        [
          s("Re-engagement is a structured sequence, not a desperate blast. "),
          x(
            "Three-email arc: value reminder, incentive or survey, final 'stay or unsubscribe' with clear preference link. AI drafts copy variants; humans set offer economics and legal opt-out language.",
            "Failed re-engagement should suppress, not keep mailing — respect the sunset.",
          ),
          s(" Target 15–25% re-activation on at-risk segments; below 10% suggests earlier intervention."),
        ],
        [
          s("Acquisition quality determines long-term health. "),
          x(
            "Purchased lists, aggressive popups without expectation-setting, and contest entries decay fast. AI fraud detection on signup velocity and disposable domains catches some abuse; marketer owns source quality.",
            "Track engagement by acquisition source in UTM and ESP — cut channels that produce 90-day zombies.",
          ),
          s(" Quarterly list audit: active %, complaint rate, bounce rate, and source-level engagement."),
        ],
      ],
      examples: [
        {
          title: "Sunset flow — Mailchimp list recovery",
          body: "A publisher's 400k list had 22% active openers. Sunset automation: 90-day non-openers entered re-engagement; 180-day failures unsubscribed automatically. List shrank 28% but inbox placement improved; next campaign revenue rose 12% on smaller send — engaged core responded better without zombie drag.",
        },
        {
          title: "AI churn prediction — B2B SaaS",
          body: "A marketing automation vendor used HubSpot + product usage to score subscriber churn risk before email disengagement. At-risk trial users received activation sequences; marketing contacts showing decay entered preference centre prompts. Churn among scored cohort fell 11% — earlier than open-rate-only rules would trigger.",
        },
        {
          title: "Complaint spike post-acquisition — retail",
          body: "A fashion brand's co-registration partnership added 50k emails in one week; complaint rate tripled. AI signup analysis flagged mismatched expectations. Partnership paused; welcome series rewritten to state frequency and content type. Complaints normalised in 30 days — list health starts at acquisition, not cleanup.",
        },
      ],
    }),
    buildSection({
      number: "1.5",
      title: "Send Time Optimisation",
      subtitle: "How AI determines the best send time for each individual subscriber — the capability, the implementation, and the lift it delivers",
      take: "Send time optimisation (STO) uses machine learning on each subscriber's historical open and click patterns to deliver at their predicted peak engagement window. Klaviyo STO, Mailchimp Send Time Optimization, HubSpot send-time AI, and Salesforce Einstein Send Time Optimization analyse timezone, day-of-week, and hour-level behaviour. Lift is real but modest — typically 5–15% open rate improvement — and works best on lists with 6+ months of engagement data per profile.",
      why: "Batch sending at 10am Tuesday ignores global audiences and individual habits. STO is low-effort lift once data exists — but it does not rescue weak content or bad segmentation.",
      paragraphs: [
        [
          s("Enable STO on campaigns where individual history exists — not brand-new lists. "),
          x(
            "Minimum: thousands of profiles with varied open timestamps. New subscribers fall back to segment or timezone defaults until data accumulates.",
            "Klaviyo spreads sends over 24 hours for STO campaigns — plan cutoffs for time-sensitive offers.",
          ),
          s(" Compare STO vs control on subject-held-constant tests quarterly — measure clicks, not opens alone."),
        ],
        [
          s("Combine STO with timezone and locale segmentation for global programmes. "),
          x(
            "APAC subscribers on a US-default send schedule underperform regardless of STO. Segment by region first; apply STO within region.",
            "B2B may cluster around Tuesday–Thursday business hours; DTC evening and weekend opens often win.",
          ),
          s(" Document send window policy for flash sales — STO may conflict with coordinated launch times."),
        ],
        [
          s("STO complements frequency capping, not replaces it. "),
          x(
            "Multiple STO campaigns same day can still over-mail. Use global frequency rules in Klaviyo or Marketing Cloud contact policies.",
            "AI send-time without frequency governance trains subscribers to ignore habitual batch days.",
          ),
          s(" Cap promotional sends per week regardless of individual STO windows."),
        ],
      ],
      examples: [
        {
          title: "Klaviyo STO — global DTC lift",
          body: "A footwear brand enabled STO on weekly campaigns across 180k profiles. Open rate rose 9%; click rate 6% versus prior fixed Tuesday 9am ET send. APAC revenue share of email-attributed orders rose 14% — STO plus timezone segments fixed underperformance without new creative.",
        },
        {
          title: "HubSpot STO — B2B nurture",
          body: "A cybersecurity vendor applied send-time AI to monthly nurture tracks. Meeting-booked rate from email CTAs rose 11% — modest but zero incremental production cost. Test confirmed lift on clicks, not inflated MPP opens.",
        },
        {
          title: "Flash sale STO conflict — beauty brand",
          body: "A 24-hour sale required simultaneous send for inventory clarity. Brand disabled STO for sale campaign; used STO for post-sale follow-up. Documented exception policy prevents ops confusion — STO is default, not dogma.",
        },
      ],
    }),
    buildSection({
      number: "1.6",
      title: "Programme Metrics and Measurement",
      subtitle: "Open rate, click rate, conversion rate, revenue per email, and list growth — the measurement framework and the benchmarks that indicate programme health",
      take: "Email metrics form a hierarchy: deliverability (bounce, complaint, inbox placement), engagement (open, click, unsubscribe), conversion (site actions, purchases, meetings), and economic (revenue per recipient, RPE, list growth rate, subscriber LTV). Apple Mail Privacy Protection made open rate an unreliable solo KPI — click rate, conversion rate, and revenue attribution matter more. Benchmarks vary by industry: B2B nurture 2–5% CTR; e-commerce campaign 1–3%; welcome flows 5–15% CTR.",
      why: "Reporting opens alone optimises for subject line bait. A measurement framework aligned to revenue prevents celebrating hollow metrics while pipeline stalls.",
      paragraphs: [
        [
          s("Build a dashboard with four tiers — deliverability, engagement, conversion, revenue. "),
          x(
            "ESP native reporting plus GA4 UTM discipline plus CRM or Shopify revenue tie-back. Each campaign tags source/medium/campaign for post-click behaviour.",
            "Klaviyo and HubSpot revenue attribution need ecommerce or deal integration — without it, clicks are ceiling metrics.",
          ),
          s(" Label MPP impact on open benchmarks in every leadership report."),
        ],
        [
          s("Track flow-level and campaign-level metrics separately. "),
          x(
            "Welcome and abandonment flows should show conversion and revenue per recipient; broadcasts show engagement and assisted revenue. Blending hides automation ROI.",
            "Sequence drop-off analysis belongs in flow reports — not averaged into campaign averages.",
          ),
          s(" Set benchmark ranges by email type in your playbook — not one global open rate target."),
        ],
        [
          s("List growth metrics include quality, not just net new. "),
          x(
            "Measure signup rate, unsubscribe rate, re-engagement recovery, and active subscriber percentage monthly.",
            "Vanity list size without active % misallocates ESP cost and deliverability risk.",
          ),
          s(" Report 'engaged list size' alongside total subscribers in QBRs."),
        ],
      ],
      examples: [
        {
          title: "Metric hierarchy reset — B2B martech",
          body: "A martech company reported 38% opens to the board while SQLs flatlined. Dashboard rebuilt: click-to-meeting rate, nurture progression, and Salesforce influenced pipeline. Team stopped optimising open-bait subjects; SQLs rose 24% in two quarters on lower reported opens — honest metrics changed behaviour.",
        },
        {
          title: "Flow vs campaign reporting — Klaviyo DTC",
          body: "A pet supplies brand separated automation RPE ($0.42) from campaign RPE ($0.08). Leadership reallocated designer time from two extra monthly blasts to cart flow optimisation. Programme revenue rose 19% — measurement structure drove investment.",
        },
        {
          title: "Engaged list KPI — publisher",
          body: "A media company added '90-day active subscribers' as primary health KPI alongside total list. Ad sales and editorial aligned on engagement quality. Sponsorship CPM on engaged segments justified rate increase — economic metric beyond opens.",
        },
      ],
    }),
    buildSection({
      number: "1.7",
      title: "The Email-to-Revenue Model",
      subtitle: "Connecting email programme metrics to revenue outcomes — the attribution model that makes email's contribution to the business visible",
      take: "Email revenue attribution connects sends to outcomes: last-click from ESP UTMs, GA4 data-driven attribution, CRM influenced pipeline, and merchant platform order tagging in Shopify or Salesforce. Multi-touch models acknowledge email assists paid and organic journeys — especially in B2B with 90-day cycles. The email-to-revenue model quantifies programme ROI: (email-attributed revenue − ESP cost − production cost) / production cost, and compares to paid channel CAC.",
      why: "Email without revenue visibility gets underfunded or over-credited. A defensible attribution model secures headcount, ESP upgrades, and integration budget.",
      paragraphs: [
        [
          s("Define official email attribution policy with finance and sales ops. "),
          x(
            "Last-click for DTC flash sales may suffice; B2B needs influenced-opportunity models with lookback windows matching sales cycle. Document what counts: direct click only, view-through, or CRM campaign membership.",
            "HubSpot influenced revenue and Salesforce Campaign Influence require setup discipline — not default exports.",
          ),
          s(" Reconcile ESP-reported revenue to Shopify or ERP monthly — fix UTM gaps before scaling."),
        ],
        [
          s("Separate retention revenue from acquisition revenue in email reporting. "),
          x(
            "Post-purchase and win-back flows drive repeat revenue; welcome and nurture drive first order or SQL. Blended email ROAS hides which layers deserve investment.",
            "Subscription brands track email impact on churn reduction — retention dollars, not just campaign sales.",
          ),
          s(" Present email as % of total revenue and % of incremental lift from holdout tests."),
        ],
        [
          s("Incrementality tests prove email's true lift. "),
          x(
            "Hold out 5–10% of eligible subscribers from a major campaign or flow quarterly. Compare purchase or conversion rate to mailed group.",
            "Platform-attributed email revenue often overstates when coupons and branded search overlap.",
          ),
          s(" Run one incrementality test per quarter — builds credibility beyond last-click dashboards."),
        ],
      ],
      examples: [
        {
          title: "Shopify + Klaviyo reconciliation — apparel",
          body: "A apparel brand's Klaviyo attributed $2.1M monthly; Shopify UTM last-click showed $1.4M. Gap traced to untagged flows and assisted mobile sessions. UTM governance and post-purchase survey 'how did you hear' closed gap to 8%. Finance trusted email budget requests for first time.",
        },
        {
          title: "Salesforce influenced pipeline — enterprise software",
          body: "An ERP vendor implemented Campaign Influence with 90-day lookback. Email nurtured 34% of opportunities touched before close — not last-click sourced. Board approved two FTE lifecycle marketers; attribution made invisible assist visible.",
        },
        {
          title: "Holdout test — subscription coffee",
          body: "A coffee subscription held out 8% from win-back flow. Mailed group reactivated 12%; holdout 4%. True incremental lift 8 points — ESP had overstated 16% gross. Model updated; win-back offer economics recalculated profitably.",
        },
      ],
    }),
    buildSection({
      number: "1.8",
      title: "Marketer Decision Lens: Email Programme Investment Priority",
      subtitle: "Which sequences, segments, and automations to build first based on revenue potential, subscriber volume, and production complexity",
      take: "Before building, score initiatives on three axes: revenue potential (cart abandonment > generic newsletter), addressable volume (how many subscribers hit trigger monthly), and implementation complexity (data integration, copy production, legal review). Build order typical for e-commerce: welcome, cart/browse abandonment, post-purchase, sunset, then broadcast optimisation. B2B: welcome, lead nurture by persona, re-engagement, sales-alert triggers, then ABM segments. The lens prevents building predictive personalisation before welcome flow works.",
      why: "Resource-constrained teams fail by chasing advanced AI features while core flows leak revenue. Priority scoring aligns engineering, CRM, and creative on highest-leverage work first.",
      paragraphs: [
        [
          s("Score every proposed email initiative on revenue, volume, complexity (1–5 each). "),
          x(
            "Cart abandonment: revenue 5, volume 4, complexity 2 — build first. Predictive CLV branching: revenue 4, volume 3, complexity 5 — defer until data mature.",
            "Share scorecard in quarterly planning — stakeholders see why welcome beats another promo template.",
          ),
          s(" Re-score after each launch; completed flows move to optimisation tier."),
        ],
        [
          s("Gate advanced AI on foundation checklist. "),
          x(
            "No STO or predictive segments until: authentication live, welcome flow converting, suppression rules active, UTM attribution reconciled.",
            "Foundation failures make advanced features expensive noise.",
          ),
          s(" Publish checklist in programme playbook — vendor sales cannot skip it."),
        ],
        [
          s("Balance quick wins and compound investments. "),
          x(
            "Quick: fix welcome subject line, add browse abandonment. Compound: CRM sync, preference centre, predictive personalisation infrastructure.",
            "Run one quick win and one infrastructure sprint per quarter — maintains momentum and capability.",
          ),
          s(" Review lens in QBR with revenue attribution data — reprioritise with evidence, not opinions."),
        ],
      ],
      examples: [
        {
          title: "Priority scorecard — mid-market retailer",
          body: "A retailer scored twelve initiatives. Welcome refresh (score 13/15) and cart flow (14/15) beat AI product recommendations (11/15) on complexity. Six-week sprint delivered 31% lift in flow revenue; recommendations deferred to Q3 after catalog sync completed. Lens prevented parallel half-built projects.",
        },
        {
          title: "B2B build order — HubSpot migration",
          body: "Post-migration, team built: form-trigger welcome, persona nurture tracks (three), MQL sales alert, inactive sunset — in that order. Skipped predictive scoring until 10k engaged contacts accumulated. Pipeline contribution from email rose 18% in two quarters without Einstein features.",
        },
        {
          title: "Executive challenge — AI before basics",
          body: "CMO requested AI personalisation launch. Lens audit showed broken DKIM, no abandonment flow, and 40% inactive list. Board approved hygiene and abandonment first; personalisation pilot in six months on clean data. Year-end email revenue up 27% — sequence mattered more than AI headline.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A team wants to add AI product recommendations before fixing welcome email. Best guidance?",
      options: [
        "Launch recommendations immediately for competitive parity.",
        "Score initiatives on revenue, volume, and complexity — build welcome and core flows first.",
        "Pause all email until AI is fully implemented.",
        "Send more broadcasts to gather data faster.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Programme architecture prioritises high-ROI foundations before advanced AI. Re-read sections 1.1 and 1.8.",
      wrongFeedback:
        "Advanced personalisation fails on weak foundations. Use the investment lens. Re-read sections 1.1 and 1.8.",
    },
    {
      kind: "order",
      q: "Order the email programme build workflow from foundation to advanced capability.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Map programme layers and document live flows",
        "Implement authentication, welcome, and suppression rules",
        "Build behavioural segments and core automation flows",
        "Connect revenue attribution and flow-level reporting",
        "Enable STO and predictive segments where data supports",
        "Run incrementality tests and quarterly priority rescoring",
      ],
      correctFeedback:
        "Right. Architecture → foundation → automation → attribution → optimisation → proof. Re-read sections 1.1 and 1.7.",
      wrongFeedback:
        "Map and measure before advanced AI features. Re-read sections 1.1 and 1.7.",
    },
    {
      kind: "categorize",
      q: "Sort each practice into healthy programme architecture vs risky shortcut.",
      categories: ["Healthy architecture", "Risky shortcut"],
      items: [
        { text: "Sunset inactive subscribers after re-engagement sequence.", category: 0 },
        { text: "Measure success primarily by total list size.", category: 1 },
        { text: "Separate flow RPE from campaign metrics in reporting.", category: 0 },
        { text: "Enable predictive segments before CRM event sync.", category: 1 },
        { text: "Document inclusion and exclusion rules per send.", category: 0 },
        { text: "Skip transactional template audit to ship campaigns faster.", category: 1 },
      ],
      correctFeedback:
        "Right. Architecture emphasises health, attribution, and governance. Re-read sections 1.4 and 1.6.",
      wrongFeedback:
        "Shortcuts that ignore list health and measurement degrade the whole programme. Re-read sections 1.4 and 1.6.",
    },
    {
      q: "Open rates rose after MPP but SQLs flatlined. Best metric focus shift?",
      options: [
        "Optimise for higher open rates with urgency subjects.",
        "Prioritise click rate, conversion, and CRM-influenced pipeline metrics.",
        "Stop sending email and move budget to paid social.",
        "Remove all segmentation to maximise reach.",
      ],
      correct: 1,
      correctFeedback:
        "Right. MPP distorts opens — conversion and revenue metrics matter more. Re-read section 1.6.",
      wrongFeedback:
        "Opens alone mislead post-MPP. Focus on clicks and revenue. Re-read section 1.6.",
    },
    {
      q: "Klaviyo STO on a 24-hour flash sale with inventory limits. Recommended approach?",
      options: [
        "Always use STO — AI knows best.",
        "Disable STO for time-coordinated launch; use STO for non-time-critical sends.",
        "Send only to highest open-rate segment.",
        "Triple send frequency to compensate.",
      ],
      correct: 1,
      correctFeedback:
        "Right. STO conflicts with synchronized launches — policy exceptions matter. Re-read section 1.5.",
      wrongFeedback:
        "Time-sensitive offers need coordinated send windows, not spread STO delivery. Re-read section 1.5.",
    },
    {
      kind: "categorize",
      q: "Match each programme layer to its primary purpose.",
      categories: ["Acquisition layer", "Retention layer"],
      items: [
        { text: "Welcome series delivering first-value promise.", category: 0 },
        { text: "Win-back sequence for lapsed customers.", category: 1 },
        { text: "Post-signup onboarding to activation.", category: 0 },
        { text: "VIP loyalty and expansion offers.", category: 1 },
        { text: "Browse abandonment for first-time visitors.", category: 0 },
        { text: "Churn-prevention campaign for at-risk subscribers.", category: 1 },
      ],
      correctFeedback:
        "Right. Acquisition/onboarding vs retention/win-back layers serve different lifecycle stages. Re-read section 1.1.",
      wrongFeedback:
        "Map layers by lifecycle stage — welcome differs from loyalty. Re-read section 1.1.",
    },
  ],
});
