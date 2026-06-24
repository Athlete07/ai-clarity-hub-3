import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter03MktAiPaidSocial = buildChapter({
  slug: "mkt-ai-paid-social",
  number: 3,
  shortTitle: "AI in Paid Social",
  title: "AI in Paid Social",
  readingMinutes: 24,
  summary:
    "Meta Advantage+, TikTok Smart+, and LinkedIn predictive audiences have made paid social a creative-first, algorithm-led channel. Audience narrowing matters less than creative volume, CAPI signal quality, and refresh cadence. This chapter covers Advantage+ mechanics, creative testing at scale, video and static optimisation, AI-assisted audience research, LinkedIn AI features, creative fatigue patterns, and investment criteria for social budgets.",
  keyTakeaway:
    "Paid social AI rewards creative diversity and conversion signal fidelity — not interest-stack micromanagement. Invest in production systems, server-side tracking, and fatigue monitoring; let platforms match creative to users.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "3.1",
      title: "Meta Advantage+ Deep Dive",
      subtitle: "Advantage+ Shopping, App, and lead campaigns — structure, signals, and guardrails",
      take: "Meta Advantage+ campaigns automate audience, placement, and budget allocation using machine learning across Facebook, Instagram, Messenger, and Audience Network. Advantage+ Shopping Catalog campaigns optimise product sets; Advantage+ App promotes installs; lead and sales objectives use broad delivery with creative as primary targeting input. Success requires Conversions API, product catalog or event depth, creative volume, and existing customer budget caps — not resurrected interest targeting.",
      why: "Advantage+ is Meta's default future — fighting it without strong creative and CAPI means higher CPMs on legacy manual structures with shrinking reach.",
      paragraphs: [
        [
          s("Migrate prospecting to Advantage+ only when CAPI match rates and creative pipeline are ready. "),
          x(
            "Check Events Manager aggregated event measurement — target 85%+ match rate. Prepare eight to fifteen creative variants minimum per concept.",
            "Advantage+ Shopping needs catalog feed health: availability, pricing, and policy compliance.",
          ),
          s(" Use Meta's Advantage+ migration checklist — do not bulk-convert weak legacy ad sets."),
        ],
        [
          s("Existing customer budget cap and audience controls prevent retargeting bleed. "),
          x(
            "Set existing customer budget cap percentage for prospecting campaigns. Use custom audiences for exclusion: purchasers, email list, app users.",
            "Advantage+ will spend on easy retargeting conversions without caps — inflates reported ROAS.",
          ),
          s(" Separate true prospecting from retargeting campaigns for honest reporting."),
        ],
        [
          s("Creative reporting replaces audience breakdown analysis. "),
          x(
            "Read Ads Manager by ad creative: CPA, hook rate on video, thumb-stop ratio. Kill bottom quartile weekly.",
            "Placement breakdown still matters for Audience Network exclusions if quality drops.",
          ),
          s(" Build creative scorecard template — hook, hold, click, convert — reviewed weekly."),
        ],
      ],
      examples: [
        {
          title: "Advantage+ Shopping — apparel DTC",
          body: "A fashion brand consolidated prospecting into Advantage+ Shopping with 24 UGC videos and catalog integration. Prospect ROAS matched legacy manual campaigns at 55% less buyer time. Existing customer cap at 20% stopped retargeting masquerading as prospecting.",
        },
        {
          title: "CAPI prerequisite — lead gen gate",
          body: "A B2B webinar promoter launched Advantage+ leads before CAPI — CPL spiked 40%. Post-CAPI fix with deduped Lead events, CPL returned to baseline in ten days. Advantage+ amplified bad signal first.",
        },
        {
          title: "Audience Network exclusion — quality fix",
          body: "An e-commerce account excluded Audience Network after placement breakdown showed high spend, zero incremental purchases. Advantage+ CPA improved 12% on same creative — inventory quality guardrail.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-pm-ch3-creative-led-social",
      type: "flow",
      title: "Creative-Led Social",
      caption:
        "Persona insight → creative variants → Advantage+ delivery → test matrix → refresh on fatigue.",
    }),
    buildSection({
      number: "3.2",
      title: "Creative Testing at Scale",
      subtitle: "Test matrices, dynamic creative, and AI-assisted variant production",
      take: "Paid social testing is multidimensional: message × format × hook × offer × length. Dynamic Creative Optimization bundles assets Meta mixes automatically; manual multivariate tests isolate winners for Advantage+ scaling. AI tools — Meta's text generation, Creative Studio, Runway, Canva — accelerate variant production. Discipline is hypothesis-driven matrices, not random volume.",
      why: "Testing without structure produces noise. A defined matrix prevents 'we launched 50 ads' with no learnings.",
      paragraphs: [
        [
          s("Design test matrices with one variable change per cell where possible. "),
          x(
            "Week one: three hooks × one body × one CTA. Week two: winning hook × three formats. Document winners in creative playbook.",
            "Advantage+ benefits from breadth — but learnings come from structured phases.",
          ),
          s(" Template every test brief: hypothesis, variants, success metric, kill threshold."),
        ],
        [
          s("Use Dynamic Creative for discovery, Advantage+ for scale. "),
          x(
            "DCO ad sets with five images, five headlines, five descriptions find combinations cheaply. Feed winners into dedicated Advantage+ creatives.",
            "Do not run DCO and Advantage+ duplicate on same audience without budget split logic.",
          ),
          s(" Minimum spend per variant for statistical confidence — often $50–200 per cell in prospecting."),
        ],
        [
          s("AI production pipelines need brand guardrails. "),
          x(
            "Generate ten hooks with ChatGPT; design variants in Canva batch; legal reviews claims. UGC creators supply authentic angles AI cannot fake.",
            "Speed without compliance review risks ad disapprovals and brand damage.",
          ),
          s(" Weekly creative sprint: brief Monday, launch Thursday, read results Tuesday."),
        ],
      ],
      examples: [
        {
          title: "Hook matrix — consumer fintech",
          body: "A banking app tested five video hooks in DCO: fear of fees, convenience, rewards, social proof, humor. 'Hidden fee' hook won 2x CTR. Scaled hook across six formats in Advantage+. Structured matrix beat random creative dumps.",
        },
        {
          title: "DCO to Advantage+ pipeline — skincare",
          body: "DCO identified winning image-text pairs over two weeks. Top four combinations became standalone ads in Advantage+ Shopping. ROAS 15% above DCO-only period — scale phase used proven assets.",
        },
        {
          title: "AI + UGC hybrid — meal kit",
          body: "A meal-kit brand used AI for headline variants and UGC creators for kitchen footage. Fifteen variants monthly at half prior agency cost. Creative velocity fed Advantage+ learning.",
        },
      ],
    }),
    buildSection({
      number: "3.3",
      title: "Video Ads and AI",
      subtitle: "Reels, Stories, hook rate, and AI editing for performance creative",
      take: "Video dominates paid social feeds — Reels, Stories, and in-feed video get priority in Meta and TikTok delivery. AI tools trim long footage to short hooks, generate captions, and create variant aspect ratios. Metrics shift to hook rate (3-second views), hold rate, and thru-play — not legacy CTR alone. Vertical native creative beats repurposed TV spots.",
      why: "Static-only social programmes fight algorithmic preference for video engagement signals.",
      paragraphs: [
        [
          s("First three seconds are the ad — script hooks before brand logo. "),
          x(
            "Open with problem, pattern interrupt, or bold claim. Test hooks in isolation before polishing production.",
            "Meta reports hook rate and hold rate in creative insights — use them.",
          ),
          s(" Brief creators: deliver three hook variants per concept before full edit."),
        ],
        [
          s("AI editing accelerates format adaptation — not strategy. "),
          x(
            "Tools like Opus Clip, Captions, and Meta's video tools split long webinars into short ads. Resize 9:16 for Reels, 1:1 for feed.",
            "Human editors still judge pacing and brand tone.",
          ),
          s(" Maintain aspect ratio library per platform spec sheet."),
        ],
        [
          s("Sound-off design with captions is mandatory. "),
          x(
            "Eighty percent of feed video plays muted. Burned-in captions and visual storytelling carry message.",
            "AI auto-caption with human proofread prevents embarrassing errors.",
          ),
          s(" Caption accuracy in brand voice checklist before launch."),
        ],
      ],
      examples: [
        {
          title: "Hook rate optimisation — fitness app",
          body: "A fitness app replaced logo-first intros with 'Stop doing crunches wrong' hook. Hook rate rose from 18% to 34%; CPI fell 22%. Video AI trimmed ten creator clips into forty hook variants.",
        },
        {
          title: "Webinar repurposing — B2B SaaS",
          body: "A SaaS vendor used AI clipping on customer webinar to produce twelve testimonial shorts for LinkedIn and Meta. Cost per lead dropped 19% versus static quote cards. Video AI made ABM creative affordable.",
        },
        {
          title: "UGC vs polished — TikTok test",
          body: "A consumer brand tested studio polish vs creator iPhone footage on TikTok. UGC won on CPA and watch time. Production investment shifted to creator volume, not single hero films.",
        },
      ],
    }),
    buildSection({
      number: "3.4",
      title: "Static Creative Optimization",
      subtitle: "When static still wins, carousel strategy, and AI image generation guardrails",
      take: "Static images still convert for certain B2B, catalog, and retargeting contexts — especially LinkedIn and Meta retargeting. Carousels tell sequential stories; collection ads bridge catalog and creative. AI image generators produce variant backgrounds and lifestyle scenes — but require disclosure policy review and brand consistency checks. Static is not dead; undifferentiated stock static is.",
      why: "Ignoring static leaves efficiency on table for audiences that skim feeds quickly or need diagram clarity B2B buyers expect.",
      paragraphs: [
        [
          s("Use static for clarity offers — pricing, comparison charts, testimonial quotes. "),
          x(
            "LinkedIn static thought-leadership with clear headline often beats video for CFO personas with sound-off office scrolling.",
            "Retargeting static with cart product image and offer code closes efficiently.",
          ),
          s(" Match format to funnel: static for warm, video for cold prospecting generally."),
        ],
        [
          s("Carousel and collection formats extend static storytelling. "),
          x(
            "Card one problem, card two solution, card three proof, card four CTA. Collection ads tie catalog SKUs to lifestyle header.",
            "Each card is a testable hook — swap card one weekly.",
          ),
          s(" Carousel completion rate in insights shows drop-off card."),
        ],
        [
          s("AI-generated images need brand and policy review. "),
          x(
            "Generate variant backgrounds and lifestyle contexts; avoid fake people that trigger Meta AI disclosure policies incorrectly.",
            "Maintain human photography for trust categories — finance, health.",
          ),
          s(" Archive approved AI prompts and outputs for consistency."),
        ],
      ],
      examples: [
        {
          title: "LinkedIn static ABM — enterprise IT",
          body: "An infrastructure vendor ran static carousel case-study cards to named accounts. Opportunity rate beat video 15% on LinkedIn — audience preferred scannable proof. Static optimised for B2B attention pattern.",
        },
        {
          title: "Retargeting static — cart abandon",
          body: "Dynamic product static with urgency line beat generic video retargeting ROAS 1.3x for a electronics retailer. Static efficiency in warm audiences funded cold video tests.",
        },
        {
          title: "AI lifestyle backgrounds — home decor",
          body: "AI-generated room scenes behind product cut photoshoot costs 60%. Human QA caught warped furniture twice before launch. Static variant velocity rose without studio bottlenecks.",
        },
      ],
    }),
    buildSection({
      number: "3.5",
      title: "Audience Research with AI",
      subtitle: "Mining reviews, social listening, and persona insights to fuel creative — not interest boxes",
      take: "AI accelerates audience research: summarise Amazon reviews, Reddit threads, support tickets, and win-loss calls into pain-point lexicons for ad copy. Meta's own audience insights tools shrink — broad delivery means research feeds creative briefs, not interest targeting spreadsheets. Persona depth beats demographic checkbox precision.",
      why: "Creative that uses customer language converts; creative from boardroom assumptions fatigues fast on Advantage+.",
      paragraphs: [
        [
          s("Build persona pain libraries from first-party and public voice-of-customer sources. "),
          x(
            "Prompt AI: 'extract verbatim phrases buyers use for [problem] from these reviews'. Organise by objection, desired outcome, and jargon.",
            "Feed libraries into headline generators and creator briefs.",
          ),
          s(" Refresh pain libraries quarterly from new support and sales data."),
        ],
        [
          s("Social listening informs angles — not keyword targeting. "),
          x(
            "Tools like Brandwatch, Mention, or native TikTok search reveal trending category conversations. Translate trends into creative hooks within brand safety.",
            "Jumping irrelevant trends wastes spend — filter for product adjacency.",
          ),
          s(" Pair listening insights with creative sprint — insight without production is useless."),
        ],
        [
          s("Survey and test small before scaling creative narratives. "),
          x(
            "Use Meta brand lift or simple landing page A/B on message angles before full Advantage+ scale.",
            "Qual research with five customer interviews beats fifty guessed personas.",
          ),
          s(" Document validated personas — one page per role with quotes, not demographics alone."),
        ],
      ],
      examples: [
        {
          title: "Review mining — pet food DTC",
          body: "A pet brand mined Chewy reviews with AI for allergy and ingredient anxiety phrases. UGC scripts using customer words beat agency copy CPA by 26%. Research became creative input, not audience filter.",
        },
        {
          title: "Reddit listening — developer tools",
          body: "A devtools company tracked Reddit threads on CI/CD pain. Ad hooks mirroring thread titles ('Why does deploy take Friday?') outperformed generic 'speed' messaging. Social research fed creative matrix.",
        },
        {
          title: "Win-loss synthesis — HR software",
          body: "Gong call summaries fed ChatGPT persona briefs for HR director vs payroll admin. Separate Advantage+ creative per persona improved SAL rate 18%. AI research replaced deprecated interest stacks.",
        },
      ],
    }),
    buildSection({
      number: "3.6",
      title: "LinkedIn AI Features",
      subtitle: "Predictive audiences, Accelerate campaigns, and B2B creative norms",
      take: "LinkedIn offers predictive audiences seeded from CRM, thought-leadership ad formats, document ads, and Accelerate campaigns that automate targeting and creative rotation for B2B. Professional context demands credibility — AI-generated thought leadership still needs expert voice. LinkedIn AI works best with matched account lists, offline conversion imports, and long-cycle value feedback.",
      why: "B2B marketers underuse LinkedIn signal quality while overusing Meta playbooks — platform-native B2B tactics win.",
      paragraphs: [
        [
          s("Seed predictive audiences from closed-won CRM lists — not all website visitors. "),
          x(
            "Upload target accounts and won deals. Predictive audiences expand professional graph similarity.",
            "Combine with ABM bid adjustments on company lists for tier-one accounts.",
          ),
          s(" Refresh CRM seeds monthly — stale seeds degrade predictive quality."),
        ],
        [
          s("Accelerate and thought-leadership formats suit top-of-funnel pipeline building. "),
          x(
            "Document ads and newsletter-style creatives earn engagement from professional readers. Accelerate automates budget and placement similar to Advantage+.",
            "Measure with pipeline metrics — CPL alone misleads on enterprise.",
          ),
          s(" Import offline opportunity data to Optimise toward quality leads."),
        ],
        [
          s("LinkedIn video and static both work — match seniority and offer type. "),
          x(
            "C-suite: short insight video or static research stat. Practitioners: tutorial clip or carousel how-to.",
            "AI clip webinar segments into LinkedIn video ads for scale.",
          ),
          s(" Split reporting by persona creative — not blended B2B averages."),
        ],
      ],
      examples: [
        {
          title: "Predictive audiences — consulting pipeline",
          body: "A consultancy seeded predictive audiences from two years of won deals. RFP request CPL fell 24% vs job-title targeting. LinkedIn graph plus CRM seed beat manual firmographic stacks.",
        },
        {
          title: "Document ad — cybersecurity whitepaper",
          body: "A cybersecurity vendor ran document ads with gated research. Accelerate campaign rotated three covers. MQL-to-opportunity rate doubled vs single-image traffic campaigns.",
        },
        {
          title: "Offline conversion import — enterprise SaaS",
          body: "LinkedIn offline conversions from Salesforce opportunities trained bidding away from student and competitor clicks. Cost per qualified opp improved 31% over six months.",
        },
      ],
    }),
    buildSection({
      number: "3.7",
      title: "Creative Fatigue",
      subtitle: "Frequency curves, refresh triggers, and systematic replacement workflows",
      take: "Creative fatigue occurs when the same audience sees the same ad too often — CTR drops, CPM rises, CPA follows. Advantage+ and broad delivery accelerate fatigue across larger pools. Monitor frequency, creative-level CPA trends, and hook rate decay. Refresh on schedule — every two to four weeks for prospecting — not when performance already collapsed.",
      why: "Fatigue is the tax on creative-led social. Without refresh systems, even winning ads become losers silently.",
      paragraphs: [
        [
          s("Set refresh triggers: frequency above 2.5 prospecting, CPA +20% week-over-week, hook rate -25%. "),
          x(
            "Ads Manager custom alerts and weekly creative scorecards automate monitoring.",
            "Retargeting tolerates higher frequency — separate thresholds.",
          ),
          s(" Document triggers in media playbook — refresh is proactive."),
        ],
        [
          s("Maintain creative backlog — always have next variants ready. "),
          x(
            "Pipeline: three concepts in test, two in production, one in brief. Never zero backlog.",
            "AI accelerates backlog fill; UGC creators on retainer supply raw footage.",
          ),
          s(" Creative backlog count is weekly standup metric."),
        ],
        [
          s("Rotate winners horizontally — new hooks on proven bodies, new formats on proven messages. "),
          x(
            "Fatigue often hits visual first while message still works — reskin before full abandon.",
            "Archive winners with performance metadata for reuse patterns.",
          ),
          s(" Quarterly creative retrospective: what patterns fatigued slowest?"),
        ],
      ],
      examples: [
        {
          title: "Frequency alert — DTC prospecting",
          body: "A beauty brand set alert at frequency 2.8 on Advantage+ prospecting. Auto-paused fatigued ads and promoted backlog variants. CPA volatility dropped 30% versus reactive monthly refreshes.",
        },
        {
          title: "Hook reskin — SaaS trial",
          body: "Winning demo video fatigued after four weeks — hook rate halved. Same body with three new opening hooks restored CPA within days. Horizontal rotation beat full concept rebuild.",
        },
        {
          title: "Creator retainer — continuous pipeline",
          body: "A meal delivery service retained five UGC creators for four videos monthly each. Creative never ran dry when Advantage+ scaled spend. Fatigue management became supply chain problem.",
        },
      ],
    }),
    buildSection({
      number: "3.8",
      title: "Creative Investment Lens",
      subtitle: "Six checks before scaling paid social or signing creative production contracts",
      take: "Before increasing paid social investment, run six checks: (1) Is CAPI match rate above 85%? (2) Does creative pipeline deliver eight-plus variants monthly? (3) Is Advantage+ structured with customer caps and exclusions? (4) Are video and static matched to funnel stage? (5) Is persona research feeding briefs? (6) Are fatigue triggers and backlog defined? Social AI scales creative economics — not lazy creative.",
      why: "Underfunding creative while scaling media is the dominant paid social failure mode in 2026.",
      paragraphs: [
        [
          s("Checks one and two: signal and production capacity. "),
          x(
            "No budget increase without CAPI health — you scale noise.",
            "Count variants launched last 30 days — below eight means production bottleneck.",
          ),
          s(" Tie media scale requests to creative pipeline proof."),
        ],
        [
          s("Checks three and four: campaign structure and format fit. "),
          x(
            "Prospecting and retargeting separated; existing customer caps set.",
            "Cold campaigns have video-native assets; retargeting has static/catalog coverage.",
          ),
          s(" Structure and format checks in monthly creative-media sync."),
        ],
        [
          s("Checks five and six: research and fatigue systems. "),
          x(
            "Briefs cite customer language from research — not slogan brainstorms.",
            "Backlog count and fatigue triggers documented with owners.",
          ),
          s(" Run lens before H2 budget asks and agency renewals."),
        ],
      ],
      examples: [
        {
          title: "Budget gate — creative prerequisite",
          body: "A CMO blocked 30% Meta budget increase until creative backlog reached twelve variants. Investment in UGC retainer followed; subsequent scale improved ROAS instead of inflating CPMs.",
        },
        {
          title: "CAPI-first policy — lead gen",
          body: "A lead gen company required 85% match rate certificate from agency before Advantage+ scale. One agency failed; switch to CAPI-ready partner saved six figures in wasted learning.",
        },
        {
          title: "Fatigue SOP — always-on DTC",
          body: "Documented fatigue triggers and backlog pipeline cut CPA standard deviation in half year-over-year. Lens checks five and six became operational, not theoretical.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Advantage+ prospecting ROAS looks strong but mostly retargets existing customers. Best fix?",
      options: [
        "Increase budget unconditionally.",
        "Set existing customer budget cap and separate true prospecting campaigns.",
        "Add more interest targeting ad sets.",
        "Remove CAPI.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Advantage+ guardrails prevent retargeting bleed in prospecting metrics. Re-read section 3.1.",
      wrongFeedback:
        "Customer caps and campaign separation clarify prospecting performance. Re-read section 3.1.",
    },
    {
      kind: "order",
      q: "Order the creative testing workflow from research to scale.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Mine voice-of-customer for pain-point language",
        "Build structured test matrix with hypotheses",
        "Run DCO or small-budget variant tests",
        "Identify winning hooks and formats",
        "Scale winners in Advantage+ campaigns",
        "Monitor fatigue and refresh from backlog",
      ],
      correctFeedback:
        "Right. Research → matrix → test → winners → scale → refresh. Re-read sections 3.2 and 3.7.",
      wrongFeedback:
        "Structured testing precedes Advantage+ scale. Re-read sections 3.2 and 3.7.",
    },
    {
      kind: "categorize",
      q: "Sort each tactic into creative-led Advantage+ era vs legacy interest-targeting era.",
      categories: ["Creative-led Advantage+ era", "Legacy interest-targeting"],
      items: [
        { text: "Fifteen UGC video variants on broad delivery.", category: 0 },
        { text: "Twelve ad sets with identical creative and narrow interests.", category: 1 },
        { text: "Weekly creative-level CPA review.", category: 0 },
        { text: "Demographic-only targeting without creative refresh.", category: 1 },
        { text: "CAPI with 88% event match rate.", category: 0 },
        { text: "Scaling spend with three static ads unchanged for 90 days.", category: 1 },
      ],
      correctFeedback:
        "Right. Modern paid social invests in creative volume and signals. Re-read sections 3.1 and 3.2.",
      wrongFeedback:
        "Interest stacks without creative velocity are legacy playbooks. Re-read sections 3.1 and 3.2.",
    },
    {
      q: "Video ad hook rate drops 30% but CTR stable. Most likely issue?",
      options: [
        "Increase interest targeting specificity.",
        "Creative fatigue on opening hook — test new hooks before full abandon.",
        "Disable all video.",
        "Remove captions.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Hook rate decay signals fatigue — rotate hooks horizontally. Re-read sections 3.3 and 3.7.",
      wrongFeedback:
        "Monitor hook rate for video fatigue; refresh hooks first. Re-read sections 3.3 and 3.7.",
    },
    {
      q: "LinkedIn campaigns optimise to form fills but sales rejects lead quality. Priority fix?",
      options: [
        "More job-title targeting layers.",
        "Offline conversion import and predictive audiences seeded from closed-won CRM.",
        "Switch entirely to Meta.",
        "Remove all video creative.",
      ],
      correct: 1,
      correctFeedback:
        "Right. LinkedIn AI needs quality signal feedback from CRM. Re-read section 3.6.",
      wrongFeedback:
        "B2B LinkedIn success requires pipeline-value signals, not more demographics. Re-read section 3.6.",
    },
    {
      kind: "categorize",
      q: "Match each format to its typical best-use case in paid social.",
      categories: ["Cold prospecting", "Warm retargeting"],
      items: [
        { text: "UGC vertical video with strong hook.", category: 0 },
        { text: "Dynamic product static with offer code.", category: 1 },
        { text: "Advantage+ Shopping with catalog and lifestyle video.", category: 0 },
        { text: "Carousel case-study cards to site visitors.", category: 1 },
        { text: "TikTok Spark Ads from creators.", category: 0 },
        { text: "Cart abandon static with SKU image.", category: 1 },
      ],
      correctFeedback:
        "Right. Video and broad creative for cold; static and catalog for warm. Re-read sections 3.3 and 3.4.",
      wrongFeedback:
        "Match format to funnel temperature. Re-read sections 3.3 and 3.4.",
    },
  ],
});
