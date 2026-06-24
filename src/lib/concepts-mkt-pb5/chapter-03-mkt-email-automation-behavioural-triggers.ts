import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter03MktEmailAutomationBehaviouralTriggers = buildChapter({
  slug: "mkt-email-automation-behavioural-triggers",
  number: 3,
  shortTitle: "Email Automation & Behavioural Triggers",
  title: "Email Automation & Behavioural Triggers",
  readingMinutes: 24,
  summary:
    "Behavioural email automation responds to what subscribers do — signup, browse, abandon cart, purchase, go silent — with triggered sequences that outperform broadcast on revenue per send. Klaviyo flows, HubSpot workflows, Mailchimp Customer Journeys, and Salesforce Journey Builder execute trigger logic at scale. AI improves trigger threshold design, copy production, drop-off analysis, and sequence optimisation. This chapter covers trigger design, welcome and onboarding, abandonment recovery, re-engagement, post-purchase expansion, continuous improvement, and build-priority lens for resource-constrained teams.",
  keyTakeaway:
    "Automations are revenue infrastructure — build triggers on behaviours with commercial intent first. Welcome and cart abandonment before complex branching; measure drop-off per step; suppress when behaviour resolves. AI accelerates copy and optimisation; marketers own trigger logic, frequency caps, and priority order.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "3.1",
      title: "Behavioural Trigger Design",
      subtitle: "The user actions that should trigger email sequences — what behaviours to watch, what threshold to set, and what emails to send in response",
      take: "Effective triggers map observable events to commercial intent: subscribed (relationship start), viewed product (interest), added to cart (intent), purchased (relationship deepen), inactive 90 days (risk). Threshold design prevents noise — browse abandonment may require 2+ product views or 30+ seconds on site; cart abandonment waits 1–4 hours before first email. Klaviyo, Segment, and HubSpot tracking pixels feed ESP triggers; Salesforce uses object events. Every trigger needs entry criteria, exit/suppression rules, frequency caps, and goal metric.",
      why: "Over-sensitive triggers spam; under-sensitive triggers leak revenue. Explicit threshold documentation lets teams tune without breaking flows.",
      paragraphs: [
        [
          s("Inventory behaviours by intent strength. "),
          x(
            "High intent: cart add, checkout start, pricing page repeat visit, trial signup. Medium: category browse, content download, wishlist. Low: single homepage view — usually insufficient alone.",
            "B2B: form submit, demo request, pricing PDF — each deserves distinct sequence.",
          ),
          s(" Document minimum event criteria in automation playbook before building."),
        ],
        [
          s("Define suppression and exit conditions upfront. "),
          x(
            "Cart flow exits on purchase; browse flow suppresses if cart flow active; global cap 3 triggered emails per day.",
            "Klaviyo smart sending and HubSpot communication limits prevent trigger pile-up.",
          ),
          s(" Test edge cases: guest checkout, multi-device, cleared cart — with QA profiles."),
        ],
        [
          s("AI assists threshold tuning from historical data. "),
          x(
            "Analyse time-to-purchase distribution — if 80% buy within 2 hours of cart add, first reminder at 4 hours may be late. AI suggests delays; marketer validates against CX.",
            "Seasonal and promo periods need trigger delay overrides.",
          ),
          s(" Review trigger volume monthly — sudden spikes indicate tracking bugs or bot traffic."),
        ],
      ],
      examples: [
        {
          title: "Browse vs cart thresholds — home goods",
          body: "Klaviyo browse flow initially fired on single product view — 40% higher unsubscribes. Raised to 2+ views or 45 seconds on site; revenue per browse trigger rose 22% with lower complaint rate. Threshold design was commercial and deliverability decision.",
        },
        {
          title: "B2B demo trigger — HubSpot",
          body: "Demo request triggered instant sales alert plus 3-email nurture for no-shows. Suppression if opportunity created within 48 hours. Sales accepted leads faster; marketing avoided nagging converted prospects. Trigger logic documented in shared playbook.",
        },
        {
          title: "Bot traffic false triggers — fashion retail",
          body: "Cart abandonment volume spiked 3x; investigation found scraper bots. Added reCAPTCHA and minimum cart value filter. False triggers dropped; flow ROI reporting trustworthy again.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-email-ch3-automation-triggers",
      type: "flow",
      title: "Automation Trigger Flow",
      caption:
        "Behaviour signal → trigger logic with threshold and delay → multi-step sequence → personalisation → drop-off optimisation.",
    }),
    buildSection({
      number: "3.2",
      title: "Welcome Sequence Design with AI",
      subtitle: "The first impression that determines long-term engagement — the sequence structure, the value delivery arc, and the AI-assisted production workflow",
      take: "Welcome sequences deliver the promise that earned opt-in: discount code, content access, brand story, or product education. Structure: email 1 immediate confirmation + expectation setting, email 2 core value delivery, email 3 social proof, email 4 soft conversion CTA. Delays 1–3 days for B2B, 1–2 days for DTC. AI drafts copy from signup source context — popup vs checkout vs content gate differ. Klaviyo welcome flows are highest-ROI automation for most brands.",
      why: "First 48 hours set engagement trajectory. Weak welcome — delayed, generic, or over-promotional — wastes acquisition cost and trains filters.",
      paragraphs: [
        [
          s("Branch welcome by acquisition source and expectation. "),
          x(
            "Checkout signup expects order info; popup expects offer; webinar gate expects replay link. One welcome for all sources causes mismatch.",
            "UTM and form hidden fields feed ESP branch logic.",
          ),
          s(" Email 1 sends within minutes — delay loses intent peak."),
        ],
        [
          s("Set frequency expectation in welcome email 1. "),
          x(
            "'You'll hear from us weekly with X' reduces surprise unsubscribes. AI drafts expectation copy per list type.",
            "Double opt-in markets need confirmation before full welcome — legal requirement.",
          ),
          s(" Include preference centre link early — self-segmentation improves later targeting."),
        ],
        [
          s("Measure welcome beyond opens — click, first purchase, trial activation. "),
          x(
            "A/B welcome subject and offer with holdout on email 2–4 for mature programmes.",
            "Klaviyo AI suggests flow improvements when drop-off concentrates on step 2.",
          ),
          s(" Refresh welcome quarterly — offer and proof stale fast."),
        ],
      ],
      examples: [
        {
          title: "Source-branched welcome — skincare DTC",
          body: "Three welcome paths in Klaviyo: post-purchase (care tips + cross-sell delay), popup 15% off (code + routine guide), Instagram lead (brand story + UGC). First-30-day LTV rose 19% vs single generic welcome. AI drafted path-specific copy in one session.",
        },
        {
          title: "B2B content gate welcome — HubSpot",
          body: "Whitepaper download triggered 4-email welcome: asset delivery, related guide, customer story, demo CTA. Sales reported higher meeting quality — expectations set for education not hard pitch. Welcome CTR 8.2% vs 2.1% on old single-blast template.",
        },
        {
          title: "Welcome delay failure — subscription box",
          body: "Welcome email 1 delayed 24 hours for 'batch processing.' First-week retention 12% below benchmark. Moved to instant send; retention recovered. Automation speed is UX.",
        },
      ],
    }),
    buildSection({
      number: "3.3",
      title: "Onboarding Email Sequences",
      subtitle: "Getting new users or customers to their first value moment — the AI-designed journey that reduces time-to-value and early churn",
      take: "Onboarding differs from welcome: welcome confirms relationship; onboarding drives product activation — first project created, first report run, first order delivered. Triggers from product analytics (Segment, Amplitude, HubSpot product events) feed ESP when milestone missed or achieved. AI maps friction points from support tickets and usage data into email content. SaaS onboarding sequences reduce time-to-value; e-commerce onboarding may focus on product care and replenishment timing.",
      why: "Subscribers who never reach first value churn silently. Onboarding automation intervenes before support tickets and cancellation.",
      paragraphs: [
        [
          s("Define 'first value moment' per product — email supports it. "),
          x(
            "SaaS: first dashboard configured. E-commerce: first successful order received. Marketplace: first listing live. Emails reference milestone by name in CTA.",
            "Product and marketing must agree on milestone definition — not guessed in copy.",
          ),
          s(" Trigger emails on milestone miss at day 1, 3, 7 — not random calendar."),
        ],
        [
          s("Use AI to draft role-based onboarding tips from documentation. "),
          x(
            "Feed help centre articles to Claude; output 3-email tip series per persona. HubSpot and Intercom integrations personalize by role field.",
            "Video GIF thumbnails in email lift onboarding CTR for complex products.",
          ),
          s(" Link to in-app deep links, not generic homepage — reduce friction."),
        ],
        [
          s("Coordinate with in-app messaging — email is one channel. "),
          x(
            "Duplicate email and push annoys; orchestration rules in Customer.io or Braze plus ESP prevent overlap.",
            "Email handles depth; in-app handles contextual nudges.",
          ),
          s(" Measure activation rate cohorts with vs without onboarding sequence."),
        ],
      ],
      examples: [
        {
          title: "SaaS activation — Mixpanel + HubSpot",
          body: "Trial users not completing integration by day 3 entered onboarding track with setup video and office hours invite. Activation at day 14 rose from 34% to 47%. AI drafted role-specific tips for admin vs end user from docs.",
        },
        {
          title: "E-commerce first order — Klaviyo",
          body: "Post-first-order series: delivery care, how-to video, replenishment timing at day 25. Second purchase rate within 60 days up 14%. Onboarding sold retention, not just thank-you.",
        },
        {
          title: "Over-mail onboarding — fintech app",
          body: "Seven onboarding emails in ten days overlapped with push notifications. Unsubscribes spiked. Cut to four emails over twenty-one days with channel rules. Activation unchanged; complaints down 60%.",
        },
      ],
    }),
    buildSection({
      number: "3.4",
      title: "Abandoned Cart and Browse Abandonment",
      subtitle: "The recovery sequences with the highest revenue-per-send — the trigger logic, the sequence design, and the urgency copy formula",
      take: "Cart abandonment flows recover 5–15% of abandoned sessions — highest RPE automation for e-commerce. Standard arc: reminder at 1–4 hours (helpful, show cart), social proof at 24 hours, incentive at 48–72 hours if margin allows. Browse abandonment targets viewers without cart — softer CTA, category recommendations. Shopify + Klaviyo, Magento + dotdigital, and Salesforce Commerce integrations power cart content dynamically. AI drafts urgency without false scarcity — compliance matters.",
      why: "Intent is hottest at abandonment moment. Delayed, untested, or missing flows leave recoverable revenue on table daily.",
      paragraphs: [
        [
          s("Cart email 1 should help complete purchase, not scream discount. "),
          x(
            "Show cart items, shipping info, support link. Reserve incentive for email 2–3 if policy allows.",
            "Immediate 20% off trains customers to abandon for codes.",
          ),
          s(" Dynamic cart block must match live inventory — oversell destroys trust."),
        ],
        [
          s("Browse abandonment needs lighter touch and higher threshold. "),
          x(
            "Recommend viewed products or category bestsellers. Suppress if cart flow active or recent purchase.",
            "AI product recommendations in Klaviyo lift browse flow RPE when catalog rich.",
          ),
          s(" Cap browse emails 1–2 per week — browsing is lower intent than cart."),
        ],
        [
          s("Test timing, incentive, and subject as separate variables. "),
          x(
            "One test at a time: delay 2hr vs 4hr, then free shipping vs percent off.",
            "AI generates urgency copy variants — human sets true offer constraints.",
          ),
          s(" Exclude converted users in real time — purchase event cancels flow immediately."),
        ],
      ],
      examples: [
        {
          title: "Incentive timing test — electronics retailer",
          body: "Tested discount on email 1 vs email 3. Email 3 incentive recovered 9% more revenue per abandon at higher margin — email 1 trained code waiting. Klaviyo flow restructured; annual recovery up $420k.",
        },
        {
          title: "Browse flow with AI recs — furniture DTC",
          body: "Browse abandonment used Klaviyo AI product recommendations vs static bestsellers. AI recs lifted click rate 31% and RPE 18% on high-SKU catalog. Threshold: 3+ product views in session.",
        },
        {
          title: "Cart dynamic block failure — multi-currency",
          body: "Cart emails showed USD prices to EU customers post-Brexit rule change. Support tickets spiked. Fixed locale-aware template in Salesforce Marketing Cloud — recovery rate restored after 2-week dip.",
        },
      ],
    }),
    buildSection({
      number: "3.5",
      title: "Re-engagement Sequences",
      subtitle: "Bringing disengaged subscribers back with AI-identified targeting and AI-assisted copy — and the suppression decision when re-engagement fails",
      take: "Re-engagement targets subscribers with no opens or clicks in 90–120 days — value reminder, incentive, survey, final stay-or-unsubscribe email. AI identifies at-risk profiles before hard inactivity using engagement decay scores in Klaviyo or HubSpot. Success: 15–25% reactivation on engaged-at-risk; failed cohorts must sunset — continued mailing hurts deliverability. Plain-text 'breakup' emails often outperform designed blasts in B2B.",
      why: "Re-engagement is list hygiene with revenue upside. Skipping sunset after failed sequence inflates costs and spam risk.",
      paragraphs: [
        [
          s("Segment at-risk before full inactive — earlier intervention wins. "),
          x(
            "Declining open frequency over 60 days flags risk before 120-day rule triggers.",
            "AI engagement scoring in ESP prioritises who enters re-engagement first.",
          ),
          s(" Exclude recent purchasers — purchase without email open is still valuable."),
        ],
        [
          s("Three-email arc: value, offer or survey, breakup. "),
          x(
            "Email 1 best content or product update. Email 2 incentive or 'what do you want?' survey. Email 3 unsubscribe warning with preference link.",
            "AI drafts empathetic breakup — aggressive guilt trips increase complaints.",
          ),
          s(" Auto-suppress non-openers after final email — document in deliverability policy."),
        ],
        [
          s("Measure re-engagement incrementally. "),
          x(
            "Holdout 10% inactive without re-engagement — compare 90-day revenue or re-subscribe. Some 'reactivations' would have purchased anyway.",
            "Report recovered revenue minus incentive cost and sunset list reduction benefit.",
          ),
          s(" Quarterly re-engagement prevents inactive accumulation."),
        ],
      ],
      examples: [
        {
          title: "Sunset after breakup — publisher Mailchimp",
          body: "Re-engagement recovered 18% of at-risk; 82% sunset after breakup. Deliverability inbox rate improved 6 points over quarter. Smaller list, higher engagement — economic win beyond recovered subs.",
        },
        {
          title: "Preference survey — B2B nurture",
          body: "Inactive HubSpot contacts received plain survey: topics and frequency. 12% updated preferences vs 3% prior generic 'we miss you' HTML. Reactivated segment showed higher 90-day CTR — self-segmentation worked.",
        },
        {
          title: "Failed re-engagement discipline — retail",
          body: "Brand kept mailing 180-day inactives 'because list size matters.' Gmail bulk folder placement hit campaigns. Emergency sunset removed 90k profiles; core metrics recovered in 60 days. Failed re-engagement requires suppression courage.",
        },
      ],
    }),
    buildSection({
      number: "3.6",
      title: "Post-Purchase Sequences",
      subtitle: "Onboarding, cross-sell, upsell, and loyalty development — the revenue opportunity in the relationship after the first transaction",
      take: "Post-purchase automation spans thank-you and order status (transactional-marketing hybrid), product education, cross-sell recommendations, replenishment reminders, review requests, and loyalty enrollment. Klaviyo post-purchase flows drive 15–30% of email revenue for mature DTC. Timing respects product consumption cycle — skincare replenishment at 45 days, coffee at 21. AI suggests cross-sell from purchase affinity; humans set margin and inventory rules.",
      why: "Acquiring customers is expensive; post-purchase maximises LTV with permission you already earned. Neglecting post-purchase while chasing new subscribers misallocates effort.",
      paragraphs: [
        [
          s("Separate transactional status from marketing cross-sell. "),
          x(
            "Shipping updates stay transactional; education and cross-sell in distinct marketing sends with appropriate consent.",
            "Mixing causes compliance issues in GDPR strict interpretation.",
          ),
          s(" Thank-you email 1 confirms purchase and sets delivery expectation — no hard upsell."),
        ],
        [
          s("Cross-sell logic uses category affinity, not random bestsellers. "),
          x(
            "Purchased running shoes → socks and insoles, not unrelated electronics. Klaviyo AI and Salesforce Einstein recommendations need catalog rules.",
            "Bundle offers in email 2–3 post-delivery when satisfaction likely.",
          ),
          s(" Suppress cross-sell if return or support ticket open — sensitivity wins."),
        ],
        [
          s("Review and UGC requests timed after delivery confirmation. "),
          x(
            "Day 7–14 post-delivery for most physical goods. AI personalises ask referencing product name.",
            "Incentivised reviews disclosed per FTC — compliance in copy template.",
          ),
          s(" Loyalty programme invite after second purchase or NPS promoter score."),
        ],
      ],
      examples: [
        {
          title: "Replenishment flow — supplement brand",
          body: "Klaviyo replenishment at 30-day supply interval with one-click reorder link. Subscription take rate from email rose 22%. AI drafted variant copy for subscribers vs one-time buyers.",
        },
        {
          title: "Cross-sell post-delivery — kitchenware",
          body: "Post-delivery email 5 days recommended accessories from purchase category. Attach rate 14% vs 4% generic bestseller email. Salesforce product rules excluded incompatible items.",
        },
        {
          title: "Support ticket suppression — electronics",
          body: "Cross-sell fired during active return — customer complaint viral on social. Added support ticket hold in CRM integration. Post-purchase sensitivity rule now standard.",
        },
      ],
    }),
    buildSection({
      number: "3.7",
      title: "AI for Sequence Optimisation",
      subtitle: "Analysing where subscribers drop off, what copy converts, and how to improve each step — the continuous improvement system for automated email",
      take: "Sequence optimisation reviews funnel metrics per step: entered, received email N, clicked, converted. Klaviyo flow analytics, HubSpot workflow reports, and AI exports identify drop-off cliffs. AI summarises patterns — 'step 2 loses 40% with mobile users' — and suggests copy or delay tests. Continuous improvement cadence: monthly review top 3 flows by revenue; quarterly full audit. Document changes and holdout when possible.",
      why: "Set-and-forget flows decay as product, offer, and audience change. Optimisation compounds automation ROI without new acquisition spend.",
      paragraphs: [
        [
          s("Prioritise optimisation by revenue × drop-off severity. "),
          x(
            "High-volume welcome step 2 drop-off beats low-volume VIP flow tweak.",
            "AI ranks steps by recovery opportunity from funnel export.",
          ),
          s(" One change per test — delay, subject, or CTA, not all three."),
        ],
        [
          s("Segment drop-off analysis — device, source, product. "),
          x(
            "Mobile drop-off on step 3 may mean CTA below fold — design fix not copy.",
            "Signup source quality shows in welcome completion rates.",
          ),
          s(" Export insights to product team — onboarding email exposes UX friction."),
        ],
        [
          s("Automate monitoring alerts for flow anomalies. "),
          x(
            "Sudden volume drop — tracking break. Conversion cliff — offer expired in template. Klaviyo benchmarks flag underperformance.",
            "Weekly AI summary of ESP metrics to Slack for lean teams.",
          ),
          s(" Archive losing variants; promote winners to default branch."),
        ],
      ],
      examples: [
        {
          title: "Welcome step 2 mobile fix — apparel",
          body: "AI analysis of Klaviyo funnel showed 52% mobile drop at email 2 CTA. Moved button above fold and enlarged tap target. Step 2 CTR rose 28%; welcome-attributed revenue up 11%.",
        },
        {
          title: "Cart delay optimisation — A/B ongoing",
          body: "Quarterly test of cart email 1 delay: 1hr vs 3hr vs 6hr. Category-dependent winner — impulse gifts at 1hr, considered purchases at 4hr. AI suggested category splits; marketer implemented branched delays.",
        },
        {
          title: "Flow stale offer — B2B trial",
          body: "Onboarding email 4 still referenced deprecated feature. Support tickets referenced email confusion. Quarterly audit caught; activation rate on step 4 recovered 9 points post-update.",
        },
      ],
    }),
    buildSection({
      number: "3.8",
      title: "Marketer Decision Lens: Automation Build Priority",
      subtitle: "Sequencing which triggered workflows to build first based on revenue impact per subscriber, volume, and implementation complexity",
      take: "Score automations: welcome (high volume, medium complexity, high long-term value), cart abandonment (high revenue per trigger, medium complexity), browse (medium all), post-purchase (high LTV impact), re-engagement (deliverability + recovery), onboarding (SaaS high, retail variable). Build when data integration ready — cart flow needs commerce sync; onboarding needs product events. Defer complex branching until core flows optimised.",
      why: "Teams build ornate journeys while cart recovery missing. Priority lens aligns dev, CRM, and creative on revenue-first automation backlog.",
      paragraphs: [
        [
          s("E-commerce default build order: welcome → cart → post-purchase → browse → sunset/re-engagement. "),
          x(
            "Each step needs commerce catalog, cart events, and purchase webhooks live.",
            "Six weeks to full core stack for mid-market on Klaviyo — realistic planning.",
          ),
          s(" B2B: welcome → lead nurture → demo no-show → sales alert → re-engagement."),
        ],
        [
          s("Estimate monthly trigger volume before building. "),
          x(
            "Browse flow with 50 triggers/month not worth complex AI branching — simplify or defer.",
            "Volume × recovery rate × AOV = revenue opportunity score.",
          ),
          s(" Share scorecard with leadership — explains deferring fancy journeys."),
        ],
        [
          s("Gate new flows on QA checklist and attribution. "),
          x(
            "Test profiles, live purchase test, UTM on all links, revenue tracking verified.",
            "Launching cart flow without dynamic cart block wastes development.",
          ),
          s(" Re-prioritise quarterly from flow revenue report — data beats assumptions."),
        ],
      ],
      examples: [
        {
          title: "Priority scorecard — Shopify merchant",
          body: "Scored eight proposed flows. Cart (score 14) and welcome (13) beat loyalty tier journey (9) on complexity. Eight-week roadmap delivered $180k incremental flow revenue; loyalty deferred to Q4 integration.",
        },
        {
          title: "B2B HubSpot — demo no-show first",
          body: "High demo volume but weak welcome. Reordered: demo no-show sequence before newsletter automation. Meeting recovery rose 15% — revenue impact justified swap.",
        },
        {
          title: "Premature branching — marketplace",
          body: "Built 12-branch onboarding before welcome tested. Maintenance nightmare; bugs in obscure branches. Reset to linear welcome + onboarding; branched after baseline metrics stable.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Cart abandonment email 1 fires instantly with 25% off code. Likely problem?",
      options: [
        "Discount too small — increase to 40%.",
        "Immediate incentive trains abandonment; start with helpful cart reminder.",
        "Send more emails same day.",
        "Disable cart flow — discounts never work.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Cart sequence arc starts helpful; incentive later if policy allows. Re-read section 3.4.",
      wrongFeedback:
        "First email should help purchase completion, not always discount. Re-read section 3.4.",
    },
    {
      kind: "order",
      q: "Order typical e-commerce automation build priority.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Welcome sequence by signup source",
        "Cart abandonment recovery",
        "Post-purchase cross-sell and replenishment",
        "Browse abandonment with thresholds",
        "Re-engagement and sunset hygiene",
        "Advanced branched journeys",
      ],
      correctFeedback:
        "Right. Core intent flows before browse and complex branching. Re-read sections 3.2 and 3.8.",
      wrongFeedback:
        "Welcome and cart deliver highest ROI first. Re-read sections 3.2 and 3.8.",
    },
    {
      kind: "categorize",
      q: "Sort triggers by typical intent strength.",
      categories: ["High intent", "Lower intent"],
      items: [
        { text: "Added item to cart.", category: 0 },
        { text: "Single homepage view.", category: 1 },
        { text: "Started checkout.", category: 0 },
        { text: "Browsed two products in category.", category: 1 },
        { text: "Requested demo on pricing page.", category: 0 },
        { text: "Opened newsletter without click.", category: 1 },
      ],
      correctFeedback:
        "Right. Cart and checkout signals exceed casual browse. Re-read section 3.1.",
      wrongFeedback:
        "Match trigger thresholds to intent strength. Re-read section 3.1.",
    },
    {
      q: "Re-engagement sequence fails — no opens after breakup email. Next step?",
      options: [
        "Keep mailing indefinitely to preserve list size.",
        "Suppress sunset cohort per deliverability policy.",
        "Switch to hourly sends.",
        "Buy more similar contacts.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Failed re-engagement requires suppression. Re-read section 3.5.",
      wrongFeedback:
        "Mailing inactives hurts deliverability — sunset after breakup. Re-read section 3.5.",
    },
    {
      q: "Welcome email 1 best practice for timing?",
      options: [
        "Send within minutes of opt-in with expectation-setting content.",
        "Wait 7 days to avoid seeming eager.",
        "Batch weekly with other campaigns.",
        "Send only after manual sales approval.",
      ],
      correct: 0,
      correctFeedback:
        "Right. Immediate welcome captures intent peak. Re-read section 3.2.",
      wrongFeedback:
        "Delay loses signup intent — welcome sends fast. Re-read section 3.2.",
    },
    {
      kind: "categorize",
      q: "Match automation type to primary goal.",
      categories: ["Activation goal", "Recovery goal"],
      items: [
        { text: "SaaS onboarding to first integration.", category: 0 },
        { text: "Cart abandonment sequence.", category: 1 },
        { text: "Product education after trial start.", category: 0 },
        { text: "Re-engagement for 120-day inactive.", category: 1 },
        { text: "Milestone miss nudge email.", category: 0 },
        { text: "Browse abandonment with product recs.", category: 1 },
      ],
      correctFeedback:
        "Right. Onboarding activates; abandonment and re-engagement recover. Re-read sections 3.3 and 3.4.",
      wrongFeedback:
        "Distinguish activation journeys from recovery flows. Re-read sections 3.3 and 3.4.",
    },
  ],
});
