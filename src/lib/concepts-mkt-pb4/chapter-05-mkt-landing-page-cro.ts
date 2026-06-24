import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter05MktLandingPageCro = buildChapter({
  slug: "mkt-landing-page-cro",
  number: 5,
  shortTitle: "Landing Page & Conversion Rate Optimisation",
  title: "Landing Page & Conversion Rate Optimisation — Turning Paid Traffic Into Measurable Revenue With AI-Assisted CRO",
  readingMinutes: 24,
  summary:
    "Paid media efficiency lives or dies on the post-click experience. AI can draft landing copy, generate variant headlines, and synthesise session recordings at scale — but conversion gains come from structured CRO programmes: research-backed hypotheses, rigorous testing, message-match discipline, and compound implementation of winners. Marketers who treat landing pages as campaign extensions, not brochureware, recover CAC and scale spend with confidence.",
  keyTakeaway:
    "CRO is a programme, not a one-off test. The workflow that wins: synthesise user research and post-click data → prioritise hypotheses with expected impact → generate and review copy variants → run statistically valid A/B tests → implement winners and feed learnings back. AI accelerates each stage; marketers own message match, brand trust, and test governance.",
  pmCallout: MKT_CALLOUT,
  sections: [
    buildSection({
      number: "5.1",
      title: "AI-Assisted Landing Page Copy",
      subtitle: "From ad promise to page headline — drafting conversion copy with human message-match gates",
      take: "AI landing copy tools generate headlines, subheads, benefit bullets, social proof blocks, and CTA variants from briefs that include ad copy, audience segment, offer details, and objection lists. They collapse first-draft time from hours to minutes. Conversion copy still requires message-match verification against the ad that sent the click, brand voice calibration, and claims compliance — especially in regulated categories.",
      why: "Generic AI landing copy that ignores ad context produces message mismatch — the fastest way to waste paid traffic. Marketers who brief AI with campaign-specific inputs and enforce match gates outperform teams that paste ad headlines into ChatGPT without structure.",
      paragraphs: [
        [
          s("A conversion copy brief has six mandatory fields. "),
          x(
            "Source ad copy and creative angle — what promise earned the click. Audience segment and awareness stage. Primary conversion action and friction points. Proof assets available — testimonials, logos, data. Objection list from sales or support. Brand voice constraints and compliance boundaries.",
            "Briefs without source ad context produce pages that feel like a different company from the ad — bounce rates spike before tests even run.",
          ),
          s(" Store brief templates in your experimentation platform so every variant starts from campaign context."),
        ],
        [
          s("AI excels at variant volume; marketers excel at promise alignment. "),
          x(
            "Feed Claude, Jasper, or Unbounce Smart Copy the ad headline and three competitor landing pages; request five headline variants that preserve the ad's core promise with different proof angles. Review for exaggeration, unsubstantiated claims, and voice drift. Select two for testing, not ten for confusion.",
            "Variant volume without selection criteria creates testing noise. AI generates options; marketer selects based on message match and proof hierarchy.",
          ),
          s(" Require paid media lead sign-off on headline-ad match before any test goes live."),
        ],
        [
          s("Copy frameworks give AI structure that converts. "),
          x(
            "PAS (Problem-Agitate-Solve), AIDA, and Before-After-Bridge prompts produce more usable drafts than 'write landing page copy.' Encode framework choice in brief based on awareness stage — problem-aware audiences need PAS; solution-aware need comparison and proof.",
            "Framework selection is a strategist decision. AI executes the framework; it does not choose the right persuasion arc for the funnel stage.",
          ),
          s(" Log which frameworks win tests by segment — build a playbook of proven structures per audience."),
        ],
      ],
      examples: [
        {
          title: "B2B SaaS — ad-to-page message match",
          body: "A project management SaaS ran LinkedIn ads promising 'cut standup time by 40%' but AI-generated landing pages led with generic 'collaborate better' copy. Message mismatch drove 78% bounce rate on paid traffic. Brief updated to mandate ad headline as H1 starting point; AI generated proof variants around the 40% claim with customer case study data. Bounce dropped to 41%; demo conversion rate up 2.3x on paid traffic within three weeks — without changing bids.",
        },
        {
          title: "E-commerce offer-specific copy at scale",
          body: "A DTC skincare brand runs 40+ Meta ad variants weekly. Their CRO workflow feeds each ad's hook and offer into GPT with a constrained template: hero headline, three benefit bullets, risk-reversal line, CTA. Human reviews for ingredient claim compliance only. Landing page production dropped from 2 days to 4 hours per campaign. Conversion rate variance across matched ad-page pairs fell 60% versus generic product pages.",
        },
        {
          title: "Compliance failure — financial services",
          body: "A wealth management firm used AI to draft landing copy for a retirement calculator campaign. An early variant implied guaranteed returns — compliance flagged post-publish. Root cause: AI brief lacked regulatory constraints and proof source list. Fix: mandatory compliance field in brief, legal review on any variant mentioning returns or projections. AI still drafts; compliance gate is non-negotiable in YMYL paid landing pages.",
        },
      ],
    }),
    buildSection({
      number: "5.2",
      title: "Landing Page Structure & Hierarchy",
      subtitle: "Above-the-fold architecture, visual hierarchy, and form design that AI cannot invent from copy alone",
      take: "Landing page structure determines whether copy gets read: hero with single CTA, proof placement, objection handling sequence, form field minimisation, and mobile-first layout. AI can suggest section order from high-converting templates, but structure must reflect your funnel — lead gen forms differ from e-commerce checkout, and long-form B2B differs from short-form impulse offers.",
      why: "Beautiful AI copy in a broken hierarchy still loses. Marketers who define structural templates per campaign type and use AI to populate sections — not redesign architecture ad hoc — test faster with fewer layout variables confounding results.",
      paragraphs: [
        [
          s("Define three structural templates by conversion type. "),
          x(
            "Lead gen: hero + social proof strip + benefit stack + objection FAQ + single-field or progressive form + secondary proof. E-commerce: hero product + offer urgency + reviews + add-to-cart sticky on mobile. Webinar/event: speaker credibility + agenda + countdown + registration. AI fills copy within template; structure stays constant across tests.",
            "Changing layout and copy simultaneously makes test results uninterpretable. Isolate copy tests within stable structure.",
          ),
          s(" Document winning structures in your design system — new campaigns start from proven skeletons."),
        ],
        [
          s("Above-the-fold carries disproportionate conversion weight. "),
          x(
            "Five elements in priority order: headline matching ad promise, supporting subhead with specificity, primary CTA with action verb, trust signal (logo strip, rating, or guarantee), and visual showing product or outcome. AI heatmap analysis from tools like Microsoft Clarity can validate whether users reach below-fold content.",
            "If 70% of users never scroll, below-fold copy changes are irrelevant. Fix the fold first.",
          ),
          s(" Mobile fold is different from desktop — test thumb-reach CTA placement separately."),
        ],
        [
          s("Form design is a structural conversion lever. "),
          x(
            "Each form field reduces completion rate — benchmark 5–10% drop per unnecessary field. AI can draft microcopy for field labels and error states; marketer decides field count based on lead quality trade-off. Multi-step forms often outperform long single-page forms for complex B2B offers.",
            "Form field reduction tests frequently beat headline tests on ROI. Include form structure in CRO backlog.",
          ),
          s(" Track form abandonment by field in analytics — AI session synthesis should flag drop-off fields."),
        ],
      ],
      examples: [
        {
          title: "Form field reduction — insurance quote",
          body: "A home insurance comparison site tested removing 'property year built' from initial quote form — AI suggested the field was redundant with address lookup. Single-field test on 200,000 paid clicks: quote starts up 34%, qualified quote rate unchanged. Structural change outperformed six months of headline tests. Form architecture now reviewed before every copy test cycle.",
        },
        {
          title: "Mobile sticky CTA — e-commerce",
          body: "A fashion retailer identified via Hotjar that mobile paid traffic scrolled but failed to tap below-fold add-to-cart. Structural test: sticky CTA bar on mobile landing pages from paid social. Conversion rate up 19% on mobile with no copy change. AI assisted with button microcopy variants on the sticky bar in a follow-up test for additional 7% lift.",
        },
        {
          title: "Layout confound — SaaS trial page",
          body: "A SaaS team simultaneously tested new AI headlines and a redesigned hero layout. Test showed no significant winner — post-analysis revealed layout change moved social proof below fold on mobile, negating copy improvements. Retest with copy-only variants in original layout: winning headline lifted trial starts 14%. Lesson: one variable per test; structure templates prevent confounds.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "5.3",
      title: "A/B Test Hypothesis Generation",
      subtitle: "AI-prioritised experiment backlogs grounded in research, not random button colour changes",
      take: "Strong CRO hypotheses follow the format: 'Because we observed [evidence], we believe [change] will cause [outcome] for [segment]. We'll measure [metric].' AI accelerates hypothesis generation by synthesising heatmaps, session recordings, survey data, and competitor pages into prioritised backlogs — but hypotheses need human validation on feasibility, traffic requirements, and strategic alignment.",
      why: "Random testing without hypotheses wastes traffic and produces non-replicable wins. AI-generated backlogs without prioritisation frameworks create 50-test queues where only three have adequate sample size. Marketers need ICE or PXL scoring before tests enter the pipeline.",
      paragraphs: [
        [
          s("Build hypotheses from evidence, not opinions. "),
          x(
            "Evidence sources: quantitative (funnel drop-off, scroll depth, form analytics), qualitative (session replays, on-page surveys, sales call themes), competitive (competitor page audits), and heuristic (CRO best practices as starting points only). AI tools like VWO's Copilot or custom GPT workflows ingest Clarity exports and draft hypothesis statements.",
            "Heuristic-only hypotheses ('best practice says add urgency') without your data fail more often than they win.",
          ),
          s(" Require evidence citation in every hypothesis card before it enters the test queue."),
        ],
        [
          s("Prioritise with ICE or PXL scoring. "),
          x(
            "ICE: Impact × Confidence × Ease. PXL adds more rigour: above-fold, audience-specific, backed by user research. AI can pre-score based on historical test performance and traffic volume. Marketer adjusts for strategic priority — a low-traffic page may warrant a high-impact test if it's your primary paid landing URL.",
            "Prioritisation prevents the common failure mode: testing on low-traffic pages that never reach significance.",
          ),
          s(" Cap active tests per primary landing URL — parallel tests on same page contaminate results."),
        ],
        [
          s("Traffic and significance planning precede test launch. "),
          x(
            "Calculate minimum sample size before starting. At 3% baseline conversion and 10% minimum detectable effect, most B2B pages need 15,000+ visitors per variant. AI calculators accelerate this; marketer confirms traffic source stability during test window — pausing ads mid-test invalidates results.",
            "Underpowered tests that 'call winners' at 95% confidence with 200 conversions are statistical noise.",
          ),
          s(" Document expected runtime in hypothesis card — kill tests that cannot reach significance in 4 weeks."),
        ],
      ],
      examples: [
        {
          title: "AI-synthesised session replay backlog",
          body: "A fintech startup fed 200 Microsoft Clarity session replays from paid traffic into a GPT workflow with a hypothesis template. Output: 23 draft hypotheses ranked by frequency of observed behaviour — rage clicks on pricing FAQ, confusion at identity verification step, mobile form keyboard overlap. CRO lead scored with ICE; top 5 entered quarterly test plan. First test (simplified ID copy) lifted application completion 11%. Research synthesis time dropped from 2 days to 3 hours.",
        },
        {
          title: "ICE scoring prevents low-traffic waste",
          body: "An agency client wanted to test 15 landing page elements simultaneously across 8 URLs. ICE scoring revealed only 3 URLs had sufficient paid traffic for 10% MDE within 30 days. Consolidated testing on primary campaign URL; winning hero variant rolled to secondary URLs sequentially. Programme delivered 4 significant wins in one quarter versus zero from prior spray-and-pray approach.",
        },
        {
          title: "Hypothesis without evidence — button colour myth",
          body: "Junior marketer queued green-vs-blue CTA test with no supporting data — 'best practice.' Test ran 6 weeks, reached significance at 2% lift, rolled out. Next quarter retest on different campaign showed no effect. Root cause: random variation, not insight. Programme now requires evidence field; button colour tests deprioritised unless heatmaps show CTA visibility problem.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-pm-ch5-cro-workflow",
      type: "flow",
      title: "AI-Assisted CRO Workflow",
      caption:
        "Research synthesis from heatmaps and sessions → AI-prioritised hypotheses → copy and structure variants → statistically rigorous A/B tests → implement winners and compound gains.",
    }),
    buildSection({
      number: "5.4",
      title: "Copy Variant Generation at Scale",
      subtitle: "Headlines, CTAs, and proof blocks — volume production with brand and compliance guardrails",
      take: "Once hypotheses are approved, AI generates copy variants within constrained templates: headline pairs, CTA verb variants, risk-reversal lines, and social proof introductions. Scale matters for multivariate and multi-armed bandit tests — but variant count must match traffic budget. Three strong variants beat ten mediocre ones.",
      why: "Manual copywriting bottlenecks CRO velocity. AI removes the bottleneck but introduces homogeneity risk — every competitor's AI produces similar 'transform your business' headlines. Marketers need differentiation mandates in variant briefs, same as SEO content.",
      paragraphs: [
        [
          s("Constrain AI variants with proof and voice rules. "),
          x(
            "Variant brief specifies: approved proof points only, banned phrases list, reading level target, max headline character count for ad match, and CTA verb options. AI generates within bounds; editor rejects out-of-bounds output.",
            "Unconstrained AI variants often hallucinate statistics — '10,000+ customers' when CRM shows 2,400.",
          ),
          s(" Link variant brief to hypothesis card — every variant traces to a specific belief about user behaviour."),
        ],
        [
          s("Match variant count to test design and traffic. "),
          x(
            "Classic A/B: two variants plus control. A/B/n: traffic must scale linearly with arms. Bandit tests: AI can feed more variants because allocation shifts to winners — but need platform support and sufficient baseline traffic. Rule: fewer than 1,000 conversions per week → stick to A/B.",
            "Multivariate enthusiasm kills programmes on typical B2B traffic volumes.",
          ),
          s(" Pre-register variant rationale in test documentation — post-hoc storytelling erodes programme credibility."),
        ],
        [
          s("Learn from variant performance across tests. "),
          x(
            "Tag winning elements: proof-before-CTA, question headlines, first-person CTA verbs. AI analyses test archive to suggest patterns — 'benefit-specific headlines outperform feature headlines 3:1 in your data.' Builds institutional CRO knowledge beyond individual tests.",
            "Compound learning turns CRO from random wins into repeatable playbooks.",
          ),
          s(" Quarterly variant pattern review feeds next quarter's hypothesis generation."),
        ],
      ],
      examples: [
        {
          title: "CTA verb testing at scale — lead gen",
          body: "A B2B marketing agency used AI to generate 12 CTA variants across 'Get,' 'Start,' 'See,' and 'Book' verb families for a client's demo request page. Human shortlist: 4 variants matching brand voice. A/B/n test over 45,000 paid clicks: 'See your custom demo' outperformed 'Get a demo' by 18%. Pattern logged: 'See' + personalisation hint beats generic 'Get' for consideration-stage traffic.",
        },
        {
          title: "Headline proof-angle variants — e-commerce",
          body: "A supplement brand hypothesised that clinical proof headlines would beat lifestyle headlines for Google Search traffic. AI generated 6 proof-angle headlines using approved study citations from brief. Three-way test: clinical headline won on search; lifestyle headline won on Meta. Segment-specific variant deployment lifted blended CVR 12% versus single winner rollout.",
        },
        {
          title: "Hallucinated stat in variant — edtech",
          body: "AI-generated variant claimed '94% job placement rate' — actual audited figure was 71%. Compliance review caught pre-launch. Fix: brief now includes approved statistics as sole source; AI instructed to use only provided numbers. Variant generation speed unchanged; trust risk eliminated.",
        },
      ],
    }),
    buildSection({
      number: "5.5",
      title: "User Research Synthesis with AI",
      subtitle: "From session recordings and surveys to actionable CRO insights — without watching 500 hours of replays",
      take: "Qualitative research — session replays, on-page surveys, user testing transcripts, support ticket themes, and sales objection logs — grounds CRO in why users fail to convert. AI synthesis tools cluster themes, extract quotes, and map friction to funnel stages. Marketers validate synthesis against raw samples to prevent AI from inventing patterns.",
      why: "Quantitative data shows where users drop off; qualitative explains why. Teams that skip qual synthesis optimise the wrong elements — polishing headlines when the real issue is pricing confusion below the fold.",
      paragraphs: [
        [
          s("Structure qual inputs for AI synthesis. "),
          x(
            "Export formats matter: timestamped replay notes, survey responses with page URL tags, NPS verbatims filtered to paid landing visitors, sales call snippets about landing page objections. Feed AI with consistent schema: page, behaviour, user quote, inferred friction.",
            "Garbage-in synthesis produces plausible-sounding but wrong themes — always spot-check 10% of source data.",
          ),
          s(" Monthly qual synthesis cadence aligned to campaign launches — not annual UX research projects."),
        ],
        [
          s("Cross-reference qual themes with quant drop-offs. "),
          x(
            "AI maps qual theme frequency to funnel steps: 'pricing confusion' mentioned in 34% of exit surveys AND correlates with 60% drop at pricing section scroll depth. High-confidence hypothesis fuel. Themes without quant correlation are lower priority.",
            "Triangulation prevents over-indexing on loud minority complaints.",
          ),
          s(" Visualise qual-quant overlap in CRO planning dashboards — hypotheses born from overlap score highest."),
        ],
        [
          s("Competitive qual audits supplement internal research. "),
          x(
            "AI can analyse competitor landing pages for proof density, objection handling, and CTA patterns. Combined with your qual data: 'competitors address integration concerns in FAQ; our exit surveys show integration as top objection; we have no FAQ.' Competitive gap hypotheses are high-impact.",
            "Competitor copy is public; your user friction is proprietary — combine both.",
          ),
          s(" Refresh competitive audits quarterly — paid landing pages change faster than corporate sites."),
        ],
      ],
      examples: [
        {
          title: "Exit survey synthesis — SaaS trial",
          body: "A CRM SaaS ran on-page exit surveys on trial landing pages for 60 days — 1,200 responses. AI clustered themes: setup complexity (28%), pricing uncertainty (22%), missing integration (19%). Cross-referenced with funnel data: pricing section had highest scroll-stop rate. Hypothesis queue reprioritised from headline tests to pricing clarity and integration logo strip. Trial starts up 16% in 8 weeks.",
        },
        {
          title: "Session replay GPT workflow",
          body: "An e-commerce team exports 50 weekly session replays from paid traffic with AI-generated summaries: user path, hesitation points, exit page. Human CRO lead reviews summaries plus 5 full replays for calibration. Monthly synthesis report feeds hypothesis backlog. Identified mobile checkout wallet-button confusion — fix lifted mobile paid CVR 22%.",
        },
        {
          title: "AI synthesis false pattern",
          body: "AI synthesis claimed 'users hate the colour scheme' based on two survey mentions. Quant data showed no correlation with conversion; full replay review revealed colour comments were sarcastic asides, not friction drivers. Calibration rule: themes need minimum 15% mention rate AND quant correlation before entering hypothesis backlog.",
        },
      ],
    }),
    buildSection({
      number: "5.6",
      title: "Personalised Landing Pages",
      subtitle: "Dynamic content by audience, ad group, and firmographic — AI personalisation with governance",
      take: "Personalised landing pages swap headlines, proof points, imagery, and offers based on traffic source, ad group, industry, geography, or CRM segment. AI generates personalisation variants and rules; marketers define segment taxonomy, fallback defaults, and personalisation depth limits. Over-personalisation without traffic volume produces untestable fragment permutations.",
      why: "Message match improves when page reflects ad context automatically — but personalisation at scale requires CMS or experimentation platform support, analytics tagging per variant, and governance to prevent segment sprawl.",
      paragraphs: [
        [
          s("Start personalisation with traffic source, not hyper-segmentation. "),
          x(
            "Tier 1: ad group or campaign-specific pages — highest message-match ROI. Tier 2: industry or use-case personalisation for ABM. Tier 3: firmographic or behavioural — requires adequate segment traffic. AI drafts variant sets per tier; marketer approves segment count based on traffic math.",
            "100 personalisation rules with 50 visits each per month cannot be optimised or tested.",
          ),
          s(" Minimum 500 monthly visits per personalisation cell before adding new segment rules."),
        ],
        [
          s("Default fallback pages are mandatory. "),
          x(
            "Unknown traffic, new ad groups, and bot traffic hit default variant. AI-generated personalisation must include tested default that performs adequately. Unpersonalised traffic often exceeds 30% in early programmes.",
            "Broken personalisation rules showing blank merge tags destroy trust faster than generic pages.",
          ),
          s(" Weekly QA crawl of personalisation rules — automated alerts on fallback rate spikes."),
        ],
        [
          s("Measure incrementality of personalisation, not just variant CVR. "),
          x(
            "Compare personalised versus default experience holdout — not just variant A vs B within personalisation. Some programmes show personalisation lift only versus old generic page; holdout confirms incremental value.",
            "Personalisation platform costs justify only with proven incrementality.",
          ),
          s(" Document personalisation rules in campaign briefs — paid and CRO teams share segment taxonomy."),
        ],
      ],
      examples: [
        {
          title: "Ad group personalisation — Google Ads",
          body: "A B2B cybersecurity company built dynamic landing pages mapped to top 12 Google Ads ad groups — each with threat-specific headline and case study from matching vertical. AI drafted variant copy from ad group keywords and vertical proof library. Blended paid conversion rate up 31% versus single generic page. Implementation via Unbounce Dynamic Text Replacement plus UTM rules.",
        },
        {
          title: "ABM industry pages at scale",
          body: "An enterprise software vendor used AI to generate industry-specific proof sections for 8 target verticals — healthcare, finance, retail, etc. Personalisation triggered by UTM industry parameter from LinkedIn campaigns. Healthcare page conversion 2.1x generic page on matched traffic; finance 1.8x. Segment traffic justified 8 variants; 20-variant plan was correctly rejected for insufficient volume.",
        },
        {
          title: "Personalisation rule failure",
          body: "A retailer deployed 40 geo-personalised offer pages; UTM mapping errors sent 60% of traffic to wrong geo variant — users saw incorrect shipping promises. Fallback rate monitoring absent. Fix: reduced to 5 geo regions, automated UTM validation pre-launch, default page with geo-detection prompt. Trust recovery took one campaign cycle.",
        },
      ],
    }),
    buildSection({
      number: "5.7",
      title: "Post-Click Experience Audit",
      subtitle: "Systematic review of message match, speed, mobile UX, and tracking before and after campaign launch",
      take: "Post-click audit is a pre-launch and ongoing discipline: ad-to-page message match, page load speed on mobile networks, form functionality, tracking pixel and conversion event firing, cross-browser rendering, and accessibility basics. AI can automate audit checklists from URL lists and flag mismatches between ad copy and page content — but human review catches brand and compliance gaps.",
      why: "Launching paid campaigns without post-click audit is the most common preventable CRO failure. Perfect targeting with a broken landing experience burns budget before the first test completes.",
      paragraphs: [
        [
          s("Pre-launch audit checklist — non-negotiable items. "),
          x(
            "Message match: ad headline reflected in page H1 within 3 seconds. Speed: LCP under 2.5s on 4G throttled mobile. Tracking: conversion event fires on test submission; UTM parameters persist. Form: submission completes on iOS and Android. Compliance: claims match approved copy bank.",
            "Run checklist on every new landing URL before ad approval — not after launch when spend is live.",
          ),
          s(" Automate speed and tracking checks; human review message match and compliance."),
        ],
        [
          s("AI-assisted ad-to-page match scanning. "),
          x(
            "Custom workflows compare active ad copy exports to landing page text — flag headline divergence, offer mismatch, and expired promotional language. Scale to hundreds of ad-page pairs weekly; human reviews flagged items only.",
            "Ad platforms update copy faster than landing pages — drift is continuous, not one-time.",
          ),
          s(" Weekly match scan for always-on campaigns — catch creative refresh without page update."),
        ],
        [
          s("Post-launch monitoring extends audit into flight. "),
          x(
            "Anomaly alerts: bounce rate spike, conversion rate drop, page speed regression, 404 on landing URL. AI anomaly detection on daily campaign-landing pairs surfaces issues before weekly reporting. Pair with session replay sampling on alert trigger.",
            "Flight monitoring catches CMS deployments that break forms mid-campaign.",
          ),
          s(" Post-click audit findings feed back to paid media creative briefing — closed loop."),
        ],
      ],
      examples: [
        {
          title: "Automated ad-page match scan",
          body: "A performance marketing team runs weekly GPT workflow: export all active Meta ad primary text, scrape linked landing H1s, flag mismatches above 40% semantic divergence. Average 12% of pairs flagged per week — mostly after rapid creative iteration. CRO lead reviews flags in 30 minutes; mismatch-related bounce reduced 25% after programme launch.",
        },
        {
          title: "Speed audit before Black Friday",
          body: "An e-commerce brand AI-audited 30 campaign landing pages for Core Web Vitals before Black Friday paid push. 8 pages failed LCP threshold due to uncompressed hero videos. Fix deployed pre-launch; estimated 8% conversion recovery on mobile paid traffic based on prior speed-conversion correlation. Audit cost 4 hours; revenue impact six figures.",
        },
        {
          title: "Broken tracking — silent budget waste",
          body: "A lead gen campaign ran 3 weeks before audit discovered conversion pixel fired on thank-you page URL change from CMS update. Smart bidding optimised toward phantom conversions. Root cause: post-launch audit skipped after minor CMS deploy. Fix: automated daily conversion event count alert — drops below 7-day average trigger immediate review.",
        },
      ],
    }),
    buildSection({
      number: "5.8",
      title: "The Marketer Decision Lens — CRO Programme Investment",
      subtitle: "When to test, personalise, or rebuild — allocating CRO resources when AI makes everything faster",
      take: "Before launching tests, personalisation, or page rebuilds, run four checks: (1) is there sufficient traffic to reach significance within your test window? (2) does research support the hypothesis — qual and quant triangulation? (3) is message match and post-click audit clean — fix fundamentals before optimising? (4) does implementation capacity exist to roll out winners and compound gains? Test when traffic and evidence align. Personalise when segment volume justifies variant maintenance. Rebuild when structural debt blocks all copy tests.",
      why: "AI makes it cheap to generate variants and hypotheses — creating temptation to test everything on every page. This lens focuses CRO investment on primary paid landing URLs with clean fundamentals and adequate traffic.",
      paragraphs: [
        [
          s("Check one: traffic adequacy. "),
          x(
            "Calculate required sample size for your baseline CVR and target MDE. Insufficient traffic → fix traffic or consolidate tests on highest-volume URL. Do not lower significance thresholds to 'get results faster.'",
            "Low-traffic pages need structural or traffic fixes, not A/B tests.",
          ),
          s(" Traffic math is a go/no-go gate before hypothesis enters queue."),
        ],
        [
          s("Check two: research-backed hypothesis. "),
          x(
            "Hypothesis must cite evidence — replay, survey, funnel, or competitive gap. AI-generated ideas without evidence review are brainstorming, not programme work.",
            "Opinion-driven tests erode stakeholder trust when win rate regresses to chance.",
          ),
          s(" Evidence requirement filters AI backlog from 30 ideas to 5 programme-worthy tests."),
        ],
        [
          s("Checks three and four: fundamentals and implementation. "),
          x(
            "Post-click audit pass required before optimisation tests — message match, speed, tracking. Winner implementation capacity: if dev queue is 8 weeks, prioritise tests your team can deploy without engineering. Compound gains require rolling winners to all relevant URLs.",
            "CRO programmes die when tests win but never ship. Implementation SLA is part of the lens.",
          ),
          s(" Run this lens in monthly CRO-paid media sync with traffic and audit data visible."),
        ],
      ],
      examples: [
        {
          title: "Rebuild versus test decision",
          body: "A B2B company's primary paid landing page had 4.2s mobile LCP, broken form on Safari, and ad mismatch — CVR 0.8%. Team proposed headline A/B test. Decision lens: audit failures block optimisation; rebuild and audit first. Post-rebuild CVR 2.1% without any tests. Subsequent headline test added 14% on solid foundation. Lens saved 6 weeks of underpowered testing on broken page.",
        },
        {
          title: "Personalisation deferred for traffic",
          body: "CMO requested industry personalisation across 15 segments. Lens check: only 3 segments exceeded 500 monthly paid visits. Deployed personalisation for 3; default page optimised for remainder. Avoided 12 untestable variants. Consolidated traffic to 3 industry pages improved significance velocity on tests within those segments.",
        },
        {
          title: "Winner implementation SLA",
          body: "An agency won 8 tests in one quarter but implemented 2 — dev bottleneck. Paid media continued sending traffic to losing variants. Lens update: max 4 active tests per quarter aligned to 2-week implementation SLA. Win rate unchanged; realised conversion lift increased 3x because winners actually shipped.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Paid traffic bounces at 75% and ad headlines promise a specific outcome the landing page doesn't mention. What should you fix first?",
      options: [
        "Run a button colour A/B test.",
        "Message-match the landing page to ad promise — post-click audit and copy alignment before optimisation tests.",
        "Increase bid budgets to get more data.",
        "Add more form fields for lead qualification.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Message match and audit fundamentals precede CRO tests. Re-read sections 5.1 and 5.7.",
      wrongFeedback:
        "Fix ad-to-page message match before running tests. Re-read sections 5.1 and 5.7.",
    },
    {
      q: "AI generated 15 headline variants for a page with 800 monthly paid visits. What is the best approach?",
      options: [
        "Test all 15 in a multivariate experiment.",
        "Select 1–2 strong variants for classic A/B testing against control — match variant count to traffic budget.",
        "Publish all variants on rotation without testing.",
        "Skip testing and pick the longest headline.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Variant count must match traffic for valid tests. Re-read sections 5.3 and 5.4.",
      wrongFeedback:
        "Low traffic requires focused A/B tests, not multivariate sprawl. Re-read sections 5.3 and 5.4.",
    },
    {
      kind: "order",
      q: "Order the AI-assisted CRO workflow from first step to last.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Synthesise user research and post-click audit data",
        "Prioritise evidence-backed hypotheses with ICE scoring",
        "Generate and review copy variants within brand constraints",
        "Run A/B tests and implement winners to compound gains",
      ],
      correctFeedback:
        "Right. Research → hypotheses → variants → test and implement. Skipping research or audit creates noise. Re-read sections 5.1–5.8.",
      wrongFeedback:
        "Start with research and audit. Tests come after hypotheses. Re-read sections 5.1–5.8.",
    },
    {
      kind: "categorize",
      q: "Sort each practice into the correct CRO layer.",
      categories: ["Copy & message match", "Structure & UX", "Research & hypotheses", "Governance & audit"],
      items: [
        { text: "Ad headline preserved as landing page H1 starting point.", category: 0 },
        { text: "Form field reduction based on abandonment analytics.", category: 1 },
        { text: "ICE scoring before tests enter the queue.", category: 2 },
        { text: "Weekly ad-to-page message match scan.", category: 3 },
        { text: "AI session replay synthesis for friction themes.", category: 2 },
        { text: "Mobile sticky CTA structural test.", category: 1 },
      ],
      correctFeedback:
        "Right. Copy = message match. Structure = layout and forms. Research = evidence and prioritisation. Governance = audit and QA. Re-read sections 5.1–5.7.",
      wrongFeedback:
        "Match each practice to copy, structure, research, or governance. Re-read sections 5.1–5.7.",
    },
    {
      q: "A landing page has 0.9% CVR, 5-second mobile LCP, and broken conversion tracking. What does the decision lens recommend?",
      options: [
        "Launch headline A/B test immediately.",
        "Rebuild and audit fundamentals — speed, tracking, message match — before optimisation tests.",
        "Deploy 20 industry personalisation variants.",
        "Lower statistical significance to 80%.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Fix fundamentals before testing. Re-read sections 5.7 and 5.8.",
      wrongFeedback:
        "Broken tracking and speed block valid CRO. Audit first. Re-read sections 5.7 and 5.8.",
    },
    {
      q: "AI synthesis claims users dislike page colour based on two survey mentions with no quant correlation. What should you do?",
      options: [
        "Immediately redesign the colour scheme.",
        "Deprioritise — require minimum theme frequency and quant triangulation before hypothesis backlog entry.",
        "Run 10 colour variants.",
        "Ignore all AI synthesis permanently.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Qual themes need frequency and quant correlation. Re-read section 5.5.",
      wrongFeedback:
        "Validate AI synthesis against quant data and minimum thresholds. Re-read section 5.5.",
    },
  ],
});
