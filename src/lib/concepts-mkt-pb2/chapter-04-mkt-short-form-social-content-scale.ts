import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter04MktShortFormSocialContentScale = buildChapter({
  slug: "mkt-short-form-social-content-scale",
  number: 4,
  shortTitle: "Short-Form & Social Scale",
  title: "Short-Form & Social Content at Scale",
  readingMinutes: 24,
  summary:
    "Short-form social content — LinkedIn posts, X threads, Instagram carousels, Reels scripts — multiplies reach from pillar assets when adapted natively per platform. AI enables one-to-many repurposing at speed — but copy-paste translation kills engagement and brand. Marketers who build multiplication workflows with tiered review and resonance metrics turn long-form investment into distribution; those who chase volume alone burn channel credibility.",
  keyTakeaway:
    "Multiply, don't duplicate. One pillar spawns platform-native short-form through adaptation workflows — AI drafts variants; humans enforce hooks, voice, and risk-appropriate review. Measure resonance and assisted pipeline, not post count.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "4.1",
      title: "The Content Multiplication Model",
      subtitle: "One pillar asset → many platform-native pieces — AI enables scale, humans enable fit",
      take: "Content multiplication starts with a source asset — pillar blog, webinar, report, case study — and produces a matrix of derivative short-form pieces per channel and format. AI extracts key insights, quotes, and data points; drafts platform-specific variants from a repurposing brief. Multiplication is not copy-paste: each cell in the matrix needs native hook, length, visual format, and CTA appropriate to the channel.",
      why: "Teams either under-repurpose flagship content — leaving reach on the table — or blast identical paragraphs everywhere, training algorithms and audiences to ignore them. Multiplication model balances efficiency and native fit.",
      paragraphs: [
        [
          s("Build a repurposing matrix when the pillar brief is approved — not after publish surprise. "),
          x(
            "Rows: source sections or insights. Columns: LinkedIn text, LinkedIn carousel, X thread, Instagram caption, Reels script, email snippet. AI fills cells from one transcript or draft export.",
            "Zapier or Make chains: published URL → AI summary → task queue per channel with deadlines tied to pillar launch.",
          ),
          s(" Multiplication plan is part of editorial calendar — chapter 1 discipline."),
        ],
        [
          s("Source quality determines multiplication ceiling. "),
          x(
            "Thin pillars yield thin social — AI cannot invent quotable insight from generic copy. Invest in expert quotes, stats, and frameworks in long-form first.",
            "One strong data point becomes ten social hooks; one vague paragraph becomes zero.",
          ),
          s(" Audit source asset for 'social extractability' before multiplication sprint."),
        ],
        [
          s("Measure multiplication efficiency, not just output count. "),
          x(
            "Metrics: reach per source asset, engagement rate by derivative type, assisted pipeline from social UTMs, hours saved vs manual rewrite baseline.",
            "AI that produces 50 posts with 0.1% engagement is negative ROI — resonance beats volume (section 4.8).",
          ),
          s(" Report multiplication ratio: derivatives published per pillar — target quality-weighted, not max."),
        ],
      ],
      examples: [
        {
          title: "Webinar → 12-piece matrix — B2B SaaS",
          body: "One 45-minute webinar transcript fed through ChatGPT repurposing prompt with matrix template. Output: 4 LinkedIn posts, 1 carousel outline, 5 X posts, 2 email blurbs. Editor 2-hour review vs 12 hours manual. Launch week impressions 3x prior average.",
        },
        {
          title: "Thin source failure",
          body: "Team multiplied generic AI blog — social variants equally generic. Engagement flat. Returned to strengthen pillar with customer data; second multiplication wave performed. Model works when source earns extraction.",
        },
        {
          title: "CoSchedule repurposing template",
          body: "CoSchedule task templates spawn child social tasks when pillar status hits 'scheduled'. AI pre-fills from Notion brief. Ops consistency beat ad-hoc ChatGPT sessions.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-cs-ch4-multiplication",
      type: "flow",
      title: "Content Multiplication Model",
      caption:
        "Pillar asset → adapt per channel → platform-native hooks → tiered review → measure resonance over volume.",
    }),
    buildSection({
      number: "4.2",
      title: "LinkedIn Content at Scale",
      subtitle: "Professional narrative, carousels, and thought leadership — adapted not mirrored",
      take: "LinkedIn rewards personal narrative, professional utility, and document carousels that teach in slides. AI drafts text posts from pillar insights — but performs best with executive voice constraints, first-line hook patterns, and whitespace formatting humans refine. Company page and executive personal profiles need different multiplication tracks; employee advocacy multiplies reach when given native drafts, not press releases.",
      why: "LinkedIn is the highest-ROI B2B social channel for many marketers — and the easiest to flood with AI slop. Native adaptation protects algorithmic and professional credibility.",
      paragraphs: [
        [
          s("LinkedIn post structure: hook line, story or insight, takeaway, soft CTA. "),
          x(
            "AI prompt: 'first line must stop scroll — contrarian stat or question; max 1,300 characters; short paragraphs'. Paste pillar insight as source.",
            "Carousels: AI drafts slide headlines + body bullets; designer builds in Canva or Figma with brand template.",
          ),
          s(" Never paste blog intro as LinkedIn post — format mismatch kills reach."),
        ],
        [
          s("Executive ghostwriting workflow scales with AI — with voice calibration. "),
          x(
            "Feed 10 past posts by executive into custom GPT or Jasper voice. AI drafts; comms reviews for reputation risk. Exec approves in 5 minutes on mobile.",
            "Personal profile posts outperform company page for reach in most B2B categories — allocate multiplication effort accordingly.",
          ),
          s(" Employee advocacy tools (GaggleAMP, EveryoneSocial) distribute approved variants — not raw blog links."),
        ],
        [
          s("LinkedIn analytics inform which multiplied formats to repeat. "),
          x(
            "Track impressions, engagement rate, profile clicks, and UTM demo requests. AI monthly summary: 'carousels outperform text 2x for this audience'.",
            "Double down on winning formats; kill low performers even if AI makes them cheap.",
          ),
          s(" Native LinkedIn video and newsletters extend multiplication — script with AI, record human."),
        ],
      ],
      examples: [
        {
          title: "CEO carousel from report — fintech",
          body: "Annual benchmark report multiplied into 8-slide LinkedIn carousel. AI extracted stats; designer templated. CEO post drove 40k impressions and 200 report downloads — text-only company post hit 3k.",
        },
        {
          title: "Custom GPT executive voice — cybersecurity CMO",
          body: "CMO voice GPT trained on approved posts. Draft time cut 70%; rejection rate under 10%. Key was training data curation, not model upgrade.",
        },
        {
          title: "Blog intro paste fail",
          body: "Intern pasted 800-word blog opening as LinkedIn post — zero engagement. Rewrote with hook-first AI prompt; same insight, 12x impressions. Adaptation lesson.",
        },
      ],
    }),
    buildSection({
      number: "4.3",
      title: "Twitter/X Content Patterns",
      subtitle: "Threads, hooks, and brevity — AI drafts fast, humans punch hard",
      take: "X rewards compression, timely takes, and thread narratives that reward the follow click. AI generates thread outlines from pillar sections — one tweet per insight, strong opener, CTA tweet with link. Hashtag discipline is lighter than Instagram; personality and speed matter more. Multiplication to X should feel like native commentary, not truncated blog.",
      why: "X's culture punishes corporate blandness and thread dumps with no payoff. Marketers need platform-specific patterns, not auto-truncation.",
      paragraphs: [
        [
          s("Thread architecture: hook tweet, 3–7 insight tweets, summary, link tweet. "),
          x(
            "AI prompt per tweet: 240 chars max, one idea each, no hashtag spam. Opener must standalone-engage in feed preview.",
            "Schedule via Typefully or Hootsuite; stagger for timezone or event live-tweeting.",
          ),
          s(" Single-tweet variants work for one stat or quote extraction — not every insight needs thread."),
        ],
        [
          s("Timely multiplication on X moves faster than other channels. "),
          x(
            "News response: AI drafts from pillar section + news context in 15 minutes; comms reviews; publish within hour.",
            "Evergreen threads scheduled from multiplication backlog — separate workflows.",
          ),
          s(" Risk tier for timely X is higher — tiered review section 4.7 applies."),
        ],
        [
          s("Engagement patterns differ from LinkedIn — adjust CTA and tone. "),
          x(
            "X tolerates sharper opinion and meme-adjacent formats in some categories. AI 'professional neutral' default underperforms — inject voice constraints.",
            "Quote-tweet pillar link with insight comment beats naked link drop.",
          ),
          s(" A/B test opener tweets with AI variants — pick winner within thread set."),
        ],
      ],
      examples: [
        {
          title: "Typefully thread from pillar — dev tools",
          body: "Pillar on API security became 6-tweet thread via ChatGPT. Typefully analytics showed tweet 2 dropout — rewrote opener. Final thread 2x bookmark rate vs first draft.",
        },
        {
          title: "Live event multiplication",
          body: "Conference keynote notes fed to AI for real-time X thread during session. Timely reach spiked; thread linked to evergreen pillar updated post-event.",
        },
        {
          title: "Corporate thread flop",
          body: "AI thread read like press release bullets — no hook. Re-prompted with 'write like practitioner complaining about problem X' — engagement recovered. Voice constraint mattered.",
        },
      ],
    }),
    buildSection({
      number: "4.4",
      title: "Instagram and Visual-First Social",
      subtitle: "Carousels, captions, and Reels — AI scripts, humans design",
      take: "Instagram is visual-first: carousels, Reels, Stories. AI drafts caption copy, carousel slide text, and Reels shot lists from pillar content — but creative execution requires Canva, Figma, or native editors. Hashtag research via AI plus native analytics; captions stay concise with CTA in first two lines before 'more' fold.",
      why: "B2B and B2C brands increasingly use Instagram for employer brand and product education — multiplication without visual workflow fails.",
      paragraphs: [
        [
          s("Carousel multiplication: AI slide copy → design template → brand review. "),
          x(
            "Prompt: '10 slides: title hook, problem, 6 insights, summary CTA — 30 words per slide max'. Designer maps to Canva brand kit.",
            "Save top carousel as template for next multiplication sprint.",
          ),
          s(" Visual consistency matters more than caption eloquence on Instagram."),
        ],
        [
          s("Reels and Stories need script + shot plan, not blog prose. "),
          x(
            "AI outputs: hook script (3 sec), beat outline, on-screen text suggestions, B-roll list from stock or product footage.",
            "Opus Clip or CapCut for editing; AI does not replace human on-camera for trust-heavy brands.",
          ),
          s(" Repurpose one Reels script to TikTok with format tweak — same multiplication cell."),
        ],
        [
          s("Hashtag strategy: AI suggests clusters; humans cap at 5–10 relevant tags. "),
          x(
            "Avoid banned or shadowban-associated tags — verify against current platform guidance.",
            "Mix branded, niche, and volume-appropriate tags per post type.",
          ),
          s(" Track saves and shares — stronger intent signals than likes for educational carousels."),
        ],
      ],
      examples: [
        {
          title: "Canva carousel pipeline — HR brand",
          body: "Employer brand team multiplied culture pillar into monthly carousel series. ChatGPT slide copy → Canva bulk create. Saves per reach rose 40% vs single-image posts.",
        },
        {
          title: "Reels script from case study",
          body: "Customer story became 30-second Reels script with AI — human customer clip inserted. DMs requesting info up 25%. Visual proof beat text-only case study post.",
        },
        {
          title: "Hashtag spam shadowban scare",
          body: "AI suggested 30 hashtags; reach collapsed. Reduced to 8 researched tags — recovery in two weeks. Human cap on AI hashtag lists now policy.",
        },
      ],
    }),
    buildSection({
      number: "4.5",
      title: "Short-Form Video Scripts",
      subtitle: "Hooks, beats, and CTAs for Reels, TikTok, LinkedIn video, and YouTube Shorts",
      take: "Short-form video scripts follow hook-problem-insight-CTA beats in under 60 seconds. AI drafts scripts from pillar insights with timestamp annotations and on-screen text cues. Multiplication across video platforms requires length and aspect ratio adaptation — not one script everywhere. B-roll and product footage libraries make AI scripts executable without new shoots every time.",
      why: "Video dominates engagement growth — but production bottleneck is scripting and planning. AI removes scripting friction when paired with asset libraries and clear templates.",
      paragraphs: [
        [
          s("Script template: 0–3s hook, 3–15s problem, 15–45s insight/proof, 45–60s CTA. "),
          x(
            "AI generates three hook variants per script for on-camera test. Include [ON SCREEN TEXT] and [B-ROLL: product dashboard] markers.",
            "Descript or Opus Clip assist edit from longer source webinar — AI identifies clip candidates.",
          ),
          s(" Script approval before filming — avoid wasted shoot days on weak hooks."),
        ],
        [
          s("Repurpose long video to shorts with AI clip selection. "),
          x(
            "Opus Clip, Munch, or manual Descript AI finds high-engagement moments from webinar. Human picks clips aligned to multiplication calendar.",
            "Add captions — 80% watch muted; AI caption tools speed post.",
          ),
          s(" One webinar yields 5–10 shorts when multiplication planned pre-record."),
        ],
        [
          s("Platform-native length and tone adjustments. "),
          x(
            "TikTok: faster cuts, trend-aware hooks. LinkedIn video: professional opener, less trend-chasing. YouTube Shorts: SEO title from Ahrefs keyword.",
            "AI prompt includes platform name as constraint — not generic 'video script'.",
          ),
          s(" Batch film 4–6 scripts per session — multiplication amortises production setup."),
        ],
      ],
      examples: [
        {
          title: "Opus Clip webinar shorts — martech",
          body: "60-minute product webinar processed through Opus Clip; AI suggested 12 clips. Team published 6 with pillar links in caption. Shorts drove 18% of pillar traffic month-one.",
        },
        {
          title: "Hook A/B on Reels — DTC",
          body: "AI wrote three hooks for same product demo script. Reels variant B doubled completion rate. Hook testing at script stage became standard.",
        },
        {
          title: "Unscripted ramble fail",
          body: "Founder recorded without AI script — message drifted, CTA missing. Re-shot with 45-second AI beat sheet. Completion rate tripled. Script discipline for short-form.",
        },
      ],
    }),
    buildSection({
      number: "4.6",
      title: "Adaptation vs Translation",
      subtitle: "Native per platform — why copy-paste is the multiplication anti-pattern",
      take: "Translation moves the same words across channels. Adaptation rethinks hook, length, proof format, visual container, and CTA per platform culture and algorithm. AI can assist both — but prompts must explicitly request adaptation: 'rewrite for X audience on LinkedIn, not summarize blog'. Marketers who enforce adaptation rules in repurposing briefs protect engagement; those who automate translation spam channels.",
      why: "This distinction is the difference between multiplication ROI and audience unfollows. Leadership often mistakes translation speed for distribution success.",
      paragraphs: [
        [
          s("Define adaptation dimensions in repurposing brief. "),
          x(
            "Hook style, length, proof type (stat vs story vs visual), CTA strength, mention rules (@exec, no competitor), emoji/hashtag policy.",
            "AI checklist output: 'blog → LinkedIn: personal hook, 1,200 chars, carousel optional'.",
          ),
          s(" Translation is lazy multiplication — flag it in review."),
        ],
        [
          s("Side-by-side review catches translation errors. "),
          x(
            "Editor views source paragraph and derivative — asks 'would a native user engage with this as written for this app?'",
            "AI similarity score tools can flag near-duplicate text across channels — reject above threshold.",
          ),
          s(" Similarity threshold policy: e.g. <40% text overlap blog to social."),
        ],
        [
          s("Adaptation includes visual and interactive format shifts. "),
          x(
            "Blog table → carousel slides. Long quote → audiogram or quote card. Process list → Reels beat sheet.",
            "Same insight, different container — true adaptation.",
          ),
          s(" Multiplication matrix column headers are formats, not just networks."),
        ],
      ],
      examples: [
        {
          title: "Adaptation brief — enterprise software",
          body: "Repurposing brief required LinkedIn personal story opener, X stat hook, Instagram carousel for frameworks. AI outputs diverged appropriately. Engagement rose vs prior translation quarter.",
        },
        {
          title: "Duplicate detection — plagiarism scare",
          body: "AI produced social posts 80% identical to blog. Similarity check failed review. Re-prompted with adaptation constraints — passed. Process prevented SEO cannibalisation feelings and reader fatigue.",
        },
        {
          title: "Audiogram adaptation — podcast pillar",
          body: "Podcast insight became audiogram quote card for Instagram and text commentary for LinkedIn — same quote, native containers. Downloads and follows both up.",
        },
      ],
    }),
    buildSection({
      number: "4.7",
      title: "Tiered Review for Social Scale",
      subtitle: "Risk-based approval — not every tweet needs CMO eyes",
      take: "Tiered review matches approval depth to risk: Tier 1 executive or regulated claims need comms and legal; Tier 2 company educational posts need editor; Tier 3 employee advocacy variants need template compliance check only. AI increases volume — tiered review prevents bottlenecks without abandoning governance. Document tiers in social policy; automate routing in Sprout, Hootsuite, or Notion.",
      why: "All-post CMO approval does not scale; no approval scales brand risk. Tiered review is the operational answer to AI multiplication.",
      paragraphs: [
        [
          s("Define tier criteria by claim type, speaker, and channel. "),
          x(
            "Tier 1: earnings-adjacent, competitor attacks, crisis response, executive personal. Tier 2: product claims, customer mentions. Tier 3: curated stats from approved library, event live-tweets from script.",
            "AI drafts include tier suggestion based on brief metadata — human confirms.",
          ),
          s(" Wrong-tier publish is process failure — audit monthly."),
        ],
        [
          s("SLA per tier — AI speed means review must keep pace. "),
          x(
            "Tier 3: 2-hour SLA. Tier 1: 24-hour unless crisis playbook. Batch Tier 2 reviews twice daily.",
            "Pre-approved snippet library accelerates Tier 3 — AI assembles only from library.",
          ),
          s(" Bottleneck at Tier 1 means too many Tier 1 classifications — recalibrate."),
        ],
        [
          s("Employee advocacy adds distribution tier — with guardrails. "),
          x(
            "EveryoneSocial supplies 3 approved variants; employees pick one. AI personalisation optional within character limits — no freeform gen on employee accounts.",
            "Track who shares what for compliance audit trail.",
          ),
          s(" Employee shares are still brand exposure — tier rules apply."),
        ],
      ],
      examples: [
        {
          title: "Sprout tier routing — regulated health",
          body: "Health brand mapped tiers in Sprout approval queues. Tier 1 legal queue averaged 4 hours; Tier 3 cleared in 30 minutes. Social volume tripled without incident.",
        },
        {
          title: "Snippet library — Tier 3 acceleration",
          body: "20 approved stat snippets in Notion. AI assembles daily social from library only — no novel claims. Editor spot-checks 10% sample. Throughput 5x.",
        },
        {
          title: "Tier misclassification incident",
          body: "Competitive swipe tweet classified Tier 3 — published without legal. Reclassified competitor content as Tier 1 minimum. Tier definitions updated same day.",
        },
      ],
    }),
    buildSection({
      number: "4.8",
      title: "The Marketer Decision Lens — Volume vs Resonance",
      subtitle: "Four questions before scaling AI social output this quarter",
      take: "Before multiplying social volume with AI, ask: (1) Is the source asset worth extracting — quotable insight inside? (2) Are derivatives adapted natively, not translated? (3) Does tiered review match new throughput? (4) Are success metrics engagement depth and assisted pipeline — not post count? Resonance beats volume; AI makes volume cheap — discipline chooses what ships.",
      why: "Social algorithms and B2B buyers punish noise. This lens keeps multiplication strategic in leadership conversations obsessed with 'posting more with AI'.",
      paragraphs: [
        [
          s("Question one: source extractability. "),
          x(
            "If pillar lacks stats, quotes, or frameworks, fix long-form before social sprint.",
            "Multiplying weak source multiplies weakness.",
          ),
          s(" Source audit takes 15 minutes — saves weeks of low engagement."),
        ],
        [
          s("Questions two and three: adaptation and review fit. "),
          x(
            "Run similarity check on samples — translation fails. Review SLAs still met at new volume?",
            "If review bottlenecks, reduce volume or upgrade Tier 3 library — do not skip review.",
          ),
          s(" Adaptation and governance scale together or not at all."),
        ],
        [
          s("Question four: resonance metrics. "),
          x(
            "Report engagement rate, saves, profile clicks, UTM conversions — not raw post count. Kill bottom-quartile formats even if AI makes them free.",
            "Quarterly: derivatives per pillar vs assisted pipeline — tie multiplication to revenue language.",
          ),
          s(" Bring volume vs resonance chart to next marketing review — AI efficiency without resonance is waste."),
        ],
      ],
      examples: [
        {
          title: "Post count KPI retired — B2B team",
          body: "CMO replaced '40 posts/month' with 'engagement rate and 3 derivatives per pillar'. AI output dropped 30%; pipeline from social rose 22%. Resonance lens changed incentives.",
        },
        {
          title: "Format kill decision",
          body: "AI-generated X threads underperformed LinkedIn carousels 5x. Team killed X thread multiplication for quarter — reallocated editor time. Overall ROI rose.",
        },
        {
          title: "Multiplication dashboard — Looker",
          body: "Dashboard linked HubSpot UTMs to derivative type and source pillar. Leadership saw which multiplication paths worth AI investment. Data ended volume religion.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is the core difference between content multiplication and copy-paste translation?",
      options: [
        "Multiplication uses more hashtags.",
        "Multiplication adapts hook, format, and CTA natively per platform; translation reuses the same words.",
        "Translation is always better for SEO.",
        "Multiplication means posting the same link everywhere faster.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Native adaptation per channel — not identical text. Re-read sections 4.1 and 4.6.",
      wrongFeedback:
        "Copy-paste across channels kills engagement. Adapt format and hook per platform. Re-read sections 4.1 and 4.6.",
    },
    {
      kind: "order",
      q: "Order the content multiplication workflow from first to last.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Strong source asset with extractable insights",
        "Repurposing matrix planned per channel format",
        "AI drafts platform-native variants",
        "Tiered review by risk level",
        "Publish and measure resonance metrics",
      ],
      correctFeedback:
        "Right. Source → matrix → adapt → review → measure resonance. Re-read section 4.1.",
      wrongFeedback:
        "Review and native adaptation come before blind volume publishing. Re-read section 4.1.",
    },
    {
      kind: "categorize",
      q: "Sort each practice as native adaptation vs translation anti-pattern.",
      categories: ["Native adaptation", "Translation anti-pattern"],
      items: [
        { text: "Blog insight rewritten with LinkedIn hook-first personal opener.", category: 0 },
        { text: "800-word blog intro pasted as LinkedIn post.", category: 1 },
        { text: "Pillar stats converted to 8-slide Canva carousel.", category: 0 },
        { text: "Identical caption posted on X, LinkedIn, and Instagram.", category: 1 },
        { text: "Webinar clip with platform-specific caption and CTA.", category: 0 },
        { text: "Auto-truncated blog paragraph as tweet thread.", category: 1 },
      ],
      correctFeedback:
        "Right. Adaptation rethinks format and hook per platform; translation copies. Re-read section 4.6.",
      wrongFeedback:
        "Native content fits platform culture and format — not copy-paste. Re-read section 4.6.",
    },
    {
      q: "Which LinkedIn multiplication approach typically outperforms company page link drops?",
      options: [
        "Paste press release verbatim.",
        "Executive or employee-native posts with hooks and carousels from pillar insights.",
        "Post only on weekends.",
        "Use 30 hashtags per post.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Personal narrative and native formats outperform raw link dumps. Re-read section 4.2.",
      wrongFeedback:
        "LinkedIn rewards native hooks and personal voice — not press release paste. Re-read section 4.2.",
    },
    {
      q: "AI suggests 30 Instagram hashtags. Best policy?",
      options: [
        "Use all 30 — more discovery.",
        "Cap at researched 5–10 relevant tags; avoid spam patterns.",
        "Never use hashtags.",
        "Only use trending tags unrelated to topic.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Human-capped, relevant hashtag sets beat AI spam lists. Re-read section 4.4.",
      wrongFeedback:
        "Hashtag spam hurts reach. Curate a small relevant set. Re-read section 4.4.",
    },
    {
      kind: "categorize",
      q: "Classify each social review scenario into tier 1 (high) vs tier 3 (low) risk.",
      categories: ["Tier 1 — high review", "Tier 3 — lighter review"],
      items: [
        { text: "Executive personal post mentioning competitor by name.", category: 0 },
        { text: "Carousel using pre-approved stat from snippet library.", category: 1 },
        { text: "Crisis response tweet during outage.", category: 0 },
        { text: "Event live-tweet from pre-approved script.", category: 1 },
        { text: "Earnings-adjacent growth claim on company page.", category: 0 },
        { text: "Employee advocacy variant from approved template set.", category: 1 },
      ],
      correctFeedback:
        "Right. Competitor, executive, crisis, and financial claims need heavy review; library-based variants can be lighter. Re-read section 4.7.",
      wrongFeedback:
        "Regulated, competitive, and executive content is Tier 1; templated snippets lower risk. Re-read section 4.7.",
    },
  ],
});
