import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter08MktContentDistributionAmplification = buildChapter({
  slug: "mkt-content-distribution-amplification",
  number: 8,
  shortTitle: "Content Distribution & Amplification",
  title: "Content Distribution & Amplification — Building the Engine That Gets Content Seen",
  readingMinutes: 24,
  summary:
    "The best content fails quietly when distribution is an afterthought. AI accelerates production — which makes distribution the bottleneck and the multiplier. Marketers who plan distribution before creation, match channels to content format, and systematically amplify winners build a distribution engine where every pillar asset earns reach across owned, earned, paid, and community channels.",
  keyTakeaway:
    "Distribution is not 'post and pray'. It is a planned mix of owned, earned, paid, and organic social — with AI assisting adaptation, scheduling, and optimisation while humans own channel strategy and community relationships.",
  pmCallout: MKT_CALLOUT,
  sections: [
    buildSection({
      number: "8.1",
      title: "Distribution-First Planning",
      subtitle: "Why the distribution plan belongs in the brief — not the day after publish",
      take: "Distribution-first planning means defining target channels, audience reach goals, repurposing map, and amplification budget before production starts. Content format, length, and production investment should follow distribution strategy — not the reverse. AI makes production cheap enough that undistributed content inventory piles up faster than ever.",
      why: "Teams that plan distribution post-publish discover their 2,000-word blog does not fit LinkedIn, they have no email segment ready, and paid budget was allocated elsewhere. Distribution-first prevents expensive assets with no pathway to audience.",
      paragraphs: [
        [
          s("Every content brief includes a distribution section with four fields. "),
          x(
            "Primary channel: where this asset launches first for maximum impact. Secondary channels: repurposed formats and timing. Audience: which segments receive it and through which mechanism. Success metric: reach, engagement, pipeline, or retention target per channel.",
            "If distribution section is blank, brief is incomplete — same gate as missing audience definition.",
          ),
          s(" Campaign kickoff reviews distribution map alongside creative — one conversation, not two sequential meetings."),
        ],
        [
          s("Production investment scales with distribution reach potential. "),
          x(
            "Pillar content with email, paid, social, and sales enablement distribution warrants higher production — original research, custom visuals, video. Single-channel experimental post warrants lighter AI-assisted production.",
            "Avoid gold-plating assets with minimal distribution plan — and avoid under-investing in heroes with no repurposing map.",
          ),
          s(" ROI conversation: expected reach × conversion path ÷ production cost — distribution estimates feed the denominator."),
        ],
        [
          s("Build a repurposing map at brief stage, not after publish. "),
          x(
            "Webinar brief includes: five social clips, email summary, blog recap, sales one-pager — with owners and dates. AI assists each derivative; humans assign channel owners at plan time.",
            "Repurposing map prevents 'we should clip that webinar someday' backlog that never clears.",
          ),
          s(" Calendar shows derivative assets as first-class entries — not subtasks buried under parent."),
        ],
      ],
      examples: [
        {
          title: "Gong — content atomisation planning",
          body: "Gong's content team plans atomisation at ideation: a research report brief lists LinkedIn carousel, podcast episode, five stat graphics, and sales talk track as day-one deliverables alongside PDF. Production and distribution teams align on launch week choreography. AI drafts social variants from report sections; design applies template system. Report downloads increased 45% versus prior launches with post-hoc social promotion only.",
        },
        {
          title: "Distribution-first budget allocation",
          body: "A B2B fintech allocated 60% of campaign budget to distribution (LinkedIn ads, newsletter sponsorship, sales outreach kit) and 40% to production for a compliance guide launch. Previous campaigns inverted ratio — beautiful PDF, minimal promotion. Distribution-first launch generated 3x qualified leads at lower cost per lead because reach matched asset quality.",
        },
        {
          title: "Orphan pillar content",
          body: "Marketing team invested six weeks in AI-assisted pillar page with original survey data. No email segment, no paid budget, one LinkedIn post. Traffic flat after launch week. Post-mortem: distribution plan was 'SEO will handle it' in competitive category. Rebuilt launch playbook with mandatory distribution checklist. Next pillar hit traffic goal in 30 days.",
        },
      ],
    }),
    buildSection({
      number: "8.2",
      title: "Channel Selection",
      subtitle: "Owned, earned, paid, organic social — matching content to where your audience actually decides",
      take: "Channel selection is strategic filtering: not every piece belongs on every platform. Owned channels (email, site, app) offer control and depth. Earned (PR, community shares, syndication) offer credibility. Paid offers reach and targeting. Organic social offers frequency and conversation. AI helps adapt format per channel; marketers decide which channels earn the asset.",
      why: "Spray-and-pray distribution wastes production and trains algorithms on low engagement. Channel discipline concentrates effort where ICP actually consumes and converts.",
      paragraphs: [
        [
          s("Map channels to buyer journey and content job. "),
          x(
            "Awareness: organic social, paid video, PR, podcast guesting. Consideration: email nurture, webinars, comparison content on site. Decision: case studies via sales, retargeting ads, demo landing pages. Retention: in-app content, customer email, community.",
            "Channel-audience fit beats channel trendiness — TikTok for B2B cybersecurity buyers may not earn its ops cost.",
          ),
          s(" Document channel strategy in ICP research — revisit when audience or product motion shifts."),
        ],
        [
          s("Channel capacity is a real constraint. "),
          x(
            "Each channel has maintenance cost: community moderation, email list hygiene, ad ops, platform algorithm learning. Adding channels without capacity produces ghost accounts and inconsistent presence.",
            "Rule: master two primary channels before expanding to five mediocre ones.",
          ),
          s(" Quarterly channel audit: engagement rate, pipeline influence, ops hours — sunset channels that fail both reach and efficiency tests."),
        ],
        [
          s("AI adaptation does not mean identical content everywhere. "),
          x(
            "Same insight, different packaging: LinkedIn document carousel versus Twitter thread versus email narrative versus 60-second Reel. AI drafts variants; channel owners ensure native format compliance.",
            "Cross-posting identical copy across platforms signals low effort — algorithms and audiences penalise it.",
          ),
          s(" Channel selection includes format selection — pick channels you can natively serve."),
        ],
      ],
      examples: [
        {
          title: "Ahrefs — SEO-led owned channel focus",
          body: "Ahrefs concentrates distribution on owned blog and YouTube — channels aligned to search intent where their ICP researches SEO tools. They deprioritise platforms without search or education fit. AI assists blog and video script production; distribution energy goes to SEO optimisation and YouTube packaging, not twelve peripheral social accounts.",
        },
        {
          title: "B2B ABM channel pairing",
          body: "Enterprise software ABM campaign paired content to channels by account stage: awareness via LinkedIn ads and podcast ads on business shows; consideration via personalised email and custom landing page; decision via sales-delivered case study PDF and executive dinner invite. AI personalised email and page variants; human owned relationship channels. Channel mix matched six-figure deal motion.",
        },
        {
          title: "Channel sprawl — ghost Pinterest",
          body: "DTC brand auto-cross-posted Instagram to Pinterest, Twitter, and Facebook without native adaptation. Pinterest and Twitter engagement near zero; brand looked inactive. Channel audit killed two platforms, doubled Instagram and email investment. Engagement rate doubled on remaining channels with same total ops hours.",
        },
      ],
    }),
    buildSection({
      number: "8.3",
      title: "Organic Optimisation",
      subtitle: "Platform algorithms, posting cadence, and AI-assisted hooks that earn reach without paid boost",
      take: "Organic optimisation is the craft of earning distribution within platform algorithms: native formats, hook strength, posting timing, engagement velocity in first hour, and consistent cadence. AI assists hook variants, caption drafting, and hashtag research — but organic reach requires genuine audience resonance, not automation alone.",
      why: "Paid can buy impressions; organic builds community and reduces blended CAC over time. Neglecting organic while over-indexing on paid creates dependency on rising ad costs.",
      paragraphs: [
        [
          s("Platform-native format is non-negotiable for organic success. "),
          x(
            "LinkedIn: document posts, carousels, native video under 90 seconds. Instagram: Reels, carousel, Stories. X: threads with strong first tweet. YouTube: Shorts versus long-form with distinct packaging.",
            "AI can draft carousel slide copy and thread structure; designers apply platform dimensions and safe zones.",
          ),
          s(" Maintain format checklist per platform in ops handbook — reject cross-posted link dumps without native preview."),
        ],
        [
          s("Hook testing is the highest-leverage organic optimisation. "),
          x(
            "First line, thumbnail, or three seconds determines scroll-stop. Generate 5–10 hook variants with AI; test in Stories or smaller audience before main post. Track save and share rate — stronger organic signals than likes.",
            "Document winning hook patterns in prompt library: question hooks, contrarian hooks, data-led hooks.",
          ),
          s(" Organic posts that underperform on hook get repurposed with new hook — not discarded entirely."),
        ],
        [
          s("Cadence and timing beat sporadic virality attempts. "),
          x(
            "Consistent 3–5x weekly posting with audience-active windows beats one monthly 'viral attempt'. Scheduling tools — Buffer, Hootsuite, Sprout, native schedulers — with AI caption assist maintain cadence.",
            "Batch content production weekly; distribute daily. Ops calendar shows organic slots per channel.",
          ),
          s(" Review organic performance weekly: top hooks, format winners, posting time correlation — feed next week's plan."),
        ],
      ],
      examples: [
        {
          title: "Hook A/B via LinkedIn document posts",
          body: "B2B consultant tests two AI-generated opening hooks on same carousel content — posts to similar audience days apart. Hook B ('The CFO question nobody asks about AI spend') achieved 4x saves versus Hook A. Winning pattern added to prompt library; applied to next four posts with above-average engagement. Organic reach grew 60% over quarter without paid spend increase.",
        },
        {
          title: "Reels repurposing pipeline",
          body: "Fitness DTC brand batches four Reels weekly from one filming session plus AI caption variants. CapCut templates ensure brand consistency. Posting Tuesday/Thursday/Saturday 6am local per Sprout analytics recommendation. Reels drive 70% of new Instagram followers; product link in bio converts. Organic discipline reduced paid Instagram dependency 25%.",
        },
        {
          title: "Algorithm penalty — engagement bait",
          body: "Brand used AI to generate 'comment YES for guide' posts at high volume. LinkedIn distribution throttled account for engagement bait. Organic reach collapsed for six weeks. Pivot: value-first carousels with soft CTA; gradual recovery. Platform policy compliance is part of organic optimisation.",
        },
      ],
    }),
    buildSection({
      number: "8.4",
      title: "Paid Distribution",
      subtitle: "When to boost, how to structure campaigns, and AI's role in ad creative at scale",
      take: "Paid distribution amplifies content with proven organic resonance or strategic priority — not rescues content that failed organically without diagnosis. Meta, LinkedIn, Google, TikTok, and YouTube ads each demand format-specific creative, audience targeting, and landing page message match. AI accelerates ad variant production; media ops owns budget, structure, and measurement.",
      why: "Paid without message match and conversion path burns budget. Paid with strong pillar content and segment landing pages compounds reach efficiently.",
      paragraphs: [
        [
          s("Paid amplification rules: boost winners, test pillars, kill fast. "),
          x(
            "Organic post with above-average engagement → paid boost to lookalike or ICP segment. New pillar launch → structured test campaign with 3–5 creative variants, kill underperformers at 48–72 hours. Never infinite spend on creative without conversion signal.",
            "AI generates headline and body variants; media buyer manages budget pacing and audience.",
          ),
          s(" Minimum viable landing page message match before paid spend — ad promise must match page above fold."),
        ],
        [
          s("Campaign structure mirrors content strategy. "),
          x(
            "Prospecting: broad ICP, awareness content, video or carousel. Retargeting: site visitors, content engagers, nurture accelerators. ABM: named account lists with personalised creative. Each needs distinct creative and KPI — do not run one ad set for all.",
            "UTM discipline on every paid link — attribute pipeline to campaign and creative variant.",
          ),
          s(" Align paid calendar with organic and email — surround sound beats isolated ad bursts."),
        ],
        [
          s("AI ad creative at scale requires brand and policy guardrails. "),
          x(
            "Meta Advantage+ and similar tools auto-generate creative combinations. Governance: approved asset library only, claim review, platform policy checklist. AI variants of winning manual creative often outperform — but unguided AI ad creative risks policy rejection.",
            "Maintain ad creative template system parallel to organic — locked layouts, variant copy slots.",
          ),
          s(" Creative fatigue monitoring: refresh ad variants every 2–4 weeks or when frequency exceeds threshold."),
        ],
      ],
      examples: [
        {
          title: "LinkedIn thought leadership ads — B2B",
          body: "Cybersecurity vendor boosts top organic LinkedIn posts from CISO-focused carousels. £5K monthly boost budget to ICP job titles and account lists. Cost per content download 40% lower than cold sponsored content because organic proof pre-qualified interest. AI drafts three headline variants per boost; winner selected at day three.",
        },
        {
          title: "Meta DTC retargeting content funnel",
          body: "Skincare DTC runs prospecting video ads from UGC-style Reels and retargets site visitors with educational carousel ads addressing objections. AI generates objection-handler copy variants; human curates. ROAS on retargeting 3.2x prospecting — content-matched retargeting outperforms generic product shots.",
        },
        {
          title: "Paid rescue failure",
          body: "SaaS company spent £30K promoting blog with 12-second average time-on-page. Paid drove clicks; conversion zero. Diagnosis: content failed consideration job, not distribution. Paid cannot fix weak offer. Rewrote pillar for decision-stage audience; organic engagement improved; then paid amplified with 8x better trial signup rate.",
        },
      ],
    }),
    buildSection({
      number: "8.5",
      title: "Email Distribution",
      subtitle: "Newsletter as owned audience, segmentation sends, and AI-assisted subject line optimisation",
      take: "Email is the highest-control distribution channel: you own the list, the send time, and the personalisation. Newsletter programmes, campaign sends, and automated nurture distribute content directly to permissioned audiences. AI assists subject lines, preview text, and body variants — but list health, segmentation, and deliverability determine whether anyone sees it.",
      why: "Algorithm changes do not deprecate your email list. Email distribution is the anchor of owned audience — underinvest here and every other channel rents attention from platforms.",
      paragraphs: [
        [
          s("Newsletter strategy: cadence, promise, and content mix. "),
          x(
            "Readers subscribe to a promise — weekly industry analysis, monthly product updates, daily tips. Content mix balances original pillar, curated links, and soft product CTAs. AI drafts sections; editor maintains editorial voice.",
            "Irregular sends and broken promises drive unsubscribes faster than weak copy.",
          ),
          s(" Growth and hygiene: double opt-in where appropriate, sunset inactive contacts, monitor spam complaint rate."),
        ],
        [
          s("Segmentation multiplies email distribution relevance. "),
          x(
            "Same newsletter framework, different featured content blocks per segment. Product update email: enterprise versus SMB feature highlights. AI generates segment variants from matrix coordinates; one send operation, multiple dynamic versions.",
            "Batch sends to full list when segmented version would perform better is lazy distribution.",
          ),
          s(" Re-engagement campaigns for cold segments before removing — distribution win-back cheaper than new acquisition."),
        ],
        [
          s("Subject line and preview optimisation is AI's highest-ROI email assist. "),
          x(
            "Generate 10 subject variants; shortlist 3 for A/B test. Tools: HubSpot, Iterable, Phrasee (enterprise). Track open, click, and downstream conversion — not opens alone.",
            "Preview text is second subject line — AI draft alongside subject, not left blank.",
          ),
          s(" Document winning subject patterns per segment in prompt library — seasonal refresh."),
        ],
      ],
      examples: [
        {
          title: "Morning Brew — editorial email machine",
          body: "Morning Brew built distribution on email-first content: witty, scannable, consistent daily send. Marketing teams can learn the ops discipline — fixed sections, voice consistency, subject line testing — even at smaller scale. AI assists variant production for sponsored sections; editorial curation defines the product. Email list became acquisition asset valued in nine figures.",
        },
        {
          title: "B2B nurture as distribution engine",
          body: "HR tech company distributes one pillar asset per month through segmented nurture: awareness blog to top-of-funnel, case study to mid-funnel, ROI calculator to bottom. AI drafts segment email wrappers; links to matrix-aligned landing pages. Pipeline influenced by email-touched content reached 42% of new ARR — email as distribution, not just notification.",
        },
        {
          title: "Deliverability neglect",
          body: "Company tripled email volume with AI-generated campaigns without list hygiene. Spam complaint rate spiked; domain reputation damaged; all email including transactional affected. Six-month recovery: sunset policy, re-permission campaign, dedicated sending subdomain for marketing. Distribution scale requires deliverability ops.",
        },
      ],
    }),
    buildSection({
      number: "8.6",
      title: "Community Distribution",
      subtitle: "Slack groups, Discord, forums, and customer communities — where trust travels peer-to-peer",
      take: "Community distribution puts content where audiences already discuss problems: Slack communities, Discord servers, LinkedIn groups, Reddit (carefully), customer advisory boards, and owned community platforms like Circle. Unlike broadcast channels, community requires participation, value-first sharing, and long-term relationship — AI drafts help, but authenticity and moderator judgment gate distribution.",
      why: "Peer recommendation converts at multiples of cold content. Community distribution is slow to build and fast to destroy with promotional spam.",
      paragraphs: [
        [
          s("Community content strategy is give-first, promote-second. "),
          x(
            "Ratio guideline: 80% helpful participation — answering questions, sharing insights without link — 20% owned content when genuinely relevant. AI helps draft thoughtful responses; human approves before post.",
            "Drop link dumps in communities without context → banned, brand damaged.",
          ),
          s(" Assign community distribution owner with platform fluency — not intern rotation without training."),
        ],
        [
          s("Employee advocacy extends community reach authentically. "),
          x(
            "Tools: GaggleAMP, Sprout, LinkedIn advocacy features. Provide employees with pre-approved content packs, talking points, and optional AI-personalised intros. Voluntary participation with governance — not mandated spam.",
            "Executive authentic posts outperform corporate account posts in many B2B categories.",
          ),
          s(" Track advocacy participation and engagement — recognise contributors, refine content packs."),
        ],
        [
          s("Owned community platforms compound content value. "),
          x(
            "Customer community on Circle, Discourse, or in-app forum archives discussions as searchable content. Pillar articles seed discussion threads; community questions inspire next content. AI summarises weekly community themes for product and content teams.",
            "Owned community is distribution plus research — dual ROI.",
          ),
          s(" Moderation policy and escalation path required before scaling community distribution."),
        ],
      ],
      examples: [
        {
          title: "Figma community — template distribution",
          body: "Figma distributes through community-created templates and Config conference content — users share and remix, extending reach beyond official channels. Marketing lesson: enable community to distribute on your behalf with assets worth sharing. AI assists official tutorial content; community layer multiplies organically.",
        },
        {
          title: "B2B Slack community value-first",
          body: "RevOps leader runs 8,000-member Slack community. Vendor content allowed only when answering specific member question with genuine resource. AI helps draft concise answers; moderator checks promotional balance. Trusted vendors earn pipeline; drive-by link posters removed. One case study share generated 40 qualified DMs — because trust was pre-built.",
        },
        {
          title: "Reddit self-promotion ban",
          body: "SaaS marketer used AI to mass-post blog links across subreddits. Account banned; brand mentioned negatively in target community for months. Policy: Reddit only via genuine participation account, no AI automation, human judgment on when link adds value. Slow but durable presence rebuilt over two quarters.",
        },
      ],
    }),
    buildSection({
      number: "8.7",
      title: "Syndication & Partnerships",
      subtitle: "Guest posts, newsletters swaps, podcast tours, and co-marketing that borrow audiences",
      take: "Syndication and partnerships distribute content through others' owned channels: guest articles on industry publications, newsletter swaps, podcast guesting, co-branded webinars, and integration partner enablement. AI assists pitch emails, guest post drafts, and talk track adaptation — but relationship and audience fit determine success.",
      why: "Borrowed audiences accelerate reach when your owned channels are still growing. Partnership distribution multiplies pillar investment across networks you cannot buy with ads alone.",
      paragraphs: [
        [
          s("Partnership distribution starts with audience overlap analysis. "),
          x(
            "Ideal partner: complementary product, shared ICP, non-competing. Pitch value for their audience — original insight, not repackaged promo. AI researches partner recent content to personalise pitch.",
            "Mass-blast guest post pitches produce mass rejection. Quality partnership pipeline beats volume.",
          ),
          s(" Track partnership ROI: referral traffic, pipeline, list growth — not just logo on slide."),
        ],
        [
          s("Syndication formats: guest, licensed, excerpt. "),
          x(
            "Guest: original content for partner channel. Licensed: republish with attribution agreement. Excerpt: teaser linking to full pillar on your site — drives SEO and owned capture.",
            "Legal clarity on content ownership and backlink policy before syndication.",
          ),
          s(" AI adapts pillar to partner format guidelines — word count, tone, CTA rules — human reviews before submit."),
        ],
        [
          s("Co-marketing webinars are high-intensity distribution events. "),
          x(
            "Partner promotes to their list; you promote to yours; recording becomes repurposing source. Brief includes joint distribution commitments — minimum email sends, social posts, sales follow-up.",
            "Webinar without partner promotion commitment is production cost without borrowed reach.",
          ),
          s(" Post-webinar lead share and follow-up SLA defined in partnership agreement upfront."),
        ],
      ],
      examples: [
        {
          title: "Newsletter swap — cross-pollination",
          body: "Two complementary B2B SaaS companies swapped newsletter features: each wrote original tip for other's audience with soft CTA. Combined reach 80,000 subscribers neither could access solo. AI drafted adaptation for each voice guide; editors curated. List growth 12% for both in swap week — cheaper than sponsorship.",
        },
        {
          title: "Podcast tour for pillar launch",
          body: "Author of industry report guested on five podcasts in launch month. AI prepped talk tracks and host-specific intro hooks from master brief. Each episode drove tracked landing page traffic; cumulative downloads exceeded owned blog launch week. Distribution plan allocated executive time because borrowed audiences justified it.",
        },
        {
          title: "Syndication without attribution",
          body: "Partner republished blog without agreed backlink. SEO value lost; referral traffic zero. Contract now specifies canonical link, author bio, UTM on all syndicated content. Legal template in partnership ops kit.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "8.8",
      title: "The Marketer Decision Lens — Distribution Engine",
      subtitle: "Five checks before you publish another pillar without an amplification plan",
      take: "Before publishing pillar content: (1) does the brief include primary channel, repurposing map, and success metrics? (2) are owned, earned, paid, and organic roles assigned with owners? (3) is landing page message match confirmed for paid paths? (4) does email segment or newsletter slot exist for launch week? (5) is there a 30-day amplification calendar — not just launch day? Five yes → publish. Any no → complete distribution plan first.",
      why: "Production without distribution is inventory. This lens forces distribution parity with creation — usable in campaign kickoff and content retro.",
      paragraphs: [
        [
          s("Check one: distribution brief completeness. "),
          x(
            "Primary and secondary channels named. Repurposing derivatives listed with owners and dates. Success metric per channel defined.",
            "Blank distribution section is a publish blocker — same as missing legal review on regulated claims.",
          ),
          s(" Distribution plan reviewed in same meeting as content approval — not deferred."),
        ],
        [
          s("Checks two and three: channel ownership and paid readiness. "),
          x(
            "Named owner per channel — organic social, email, paid, community, partnerships. Paid paths have budget line, creative variants, and landing page message match verified.",
            "Unowned channels produce ghost posts and missed launch windows.",
          ),
          s(" Channel capacity audit quarterly — kill channels that lack owner and results."),
        ],
        [
          s("Checks four and five: owned audience and amplification calendar. "),
          x(
            "Email segment or newsletter placement confirmed for launch. 30-day amplification calendar includes organic reposts, paid boost windows, community shares, and partnership activations — not single launch spike.",
            "Sustained distribution beats launch day fireworks for pillar ROI.",
          ),
          s(" Retro measures distribution execution versus plan — missed slots feed ops improvement."),
        ],
      ],
      examples: [
        {
          title: "Distribution gate in Asana",
          body: "Content ops added 'distribution plan approved' checkbox before publish status. Blocked three launches in first month for incomplete plans — frustrating short-term, prevented orphan assets. Quarter later: average 30-day pillar traffic up 55% versus prior quarter. Gate became culture, not bureaucracy.",
        },
        {
          title: "Amplification calendar template",
          body: "Marketing team uses Notion template: launch day email + organic + paid; week 2 repurposed clips; week 3 community share + partner newsletter; week 4 retargeting ad refresh. AI generates variants per slot. Template reduced planning time from ad hoc Slack coordination to 30-minute kickoff fill-in.",
        },
        {
          title: "Five-check failure — research report",
          body: "£40K research report published with PR wire release only. No email to house list ('we did not want to spam'), no sales enablement, no social atomisation. Report cited zero times in sales calls. Following year: same investment with full five-check distribution — 2,400 downloads, 18% cited in won deals. Same content quality; different engine.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-cs-ch8-distribution-mix",
      type: "comparison",
      title: "Distribution Mix",
      caption:
        "Owned (email, site) + earned (community, PR, syndication) + paid (amplification) + organic social (native format) — plan all four before publish.",
    }),
  ],
  quiz: [
    {
      q: "A pillar blog is ready to publish. The brief has audience and message but no distribution section. What should happen?",
      options: [
        "Publish immediately — distribution can be figured out later.",
        "Block publish until distribution plan includes primary channel, repurposing map, owners, and success metrics.",
        "Only post on LinkedIn once.",
        "Run paid ads to homepage without UTM tracking.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Distribution-first planning belongs in the brief before publish. Re-read sections 8.1 and 8.8.",
      wrongFeedback:
        "Distribution plan is part of brief completeness — not post-publish afterthought. Re-read sections 8.1 and 8.8.",
    },
    {
      q: "An organic LinkedIn post significantly outperforms your average. What is the best next distribution move?",
      options: [
        "Never post again to avoid comparison.",
        "Boost to ICP audience with paid, generate ad variants from winning hook, and repurpose format to other channels.",
        "Copy exact post to every platform unchanged.",
        "Delete the post to keep feed uniform.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Boost winners and repurpose natively — paid amplifies proven organic resonance. Re-read sections 8.3 and 8.4.",
      wrongFeedback:
        "High-performing organic content warrants paid boost and cross-channel native adaptation. Re-read sections 8.3 and 8.4.",
    },
    {
      kind: "order",
      q: "Order distribution planning steps from first (foundational) to last (sustained execution).",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Define distribution in brief with channels, metrics, and repurposing map",
        "Match content format to channel-native requirements",
        "Launch across owned and organic channels with message match",
        "Amplify winners via paid, email, community, and partnerships over 30 days",
      ],
      correctFeedback:
        "Right. Plan → format → launch → sustain amplification. Skipping planning produces orphan content. Re-read sections 8.1–8.8.",
      wrongFeedback:
        "Start with distribution in the brief, then format, launch, and sustained amplification. Re-read sections 8.1–8.8.",
    },
    {
      kind: "categorize",
      q: "Sort each tactic into the correct distribution channel type.",
      categories: ["Owned", "Earned", "Paid", "Organic social"],
      items: [
        { text: "Segmented nurture email featuring pillar content.", category: 0 },
        { text: "Guest post on industry publication with backlink.", category: 1 },
        { text: "LinkedIn boost to ICP job titles.", category: 2 },
        { text: "Native carousel post with AI-tested hook.", category: 3 },
        { text: "Newsletter swap with complementary SaaS partner.", category: 1 },
        { text: "Meta retargeting ad for content engagers.", category: 2 },
      ],
      correctFeedback:
        "Right. Owned = your list/site; earned = borrowed credibility; paid = amplification spend; organic social = platform-native posts. Re-read sections 8.2–8.7.",
      wrongFeedback:
        "Match tactics: owned (email/site), earned (partners/PR), paid (ads), organic social (native posts). Re-read sections 8.2–8.7.",
    },
    {
      q: "Team tripled AI email volume without list hygiene. Deliverability collapsed. What is the lesson?",
      options: [
        "Email is dead — move to TikTok only.",
        "Owned channel distribution scale requires list hygiene, segmentation, and deliverability ops — not just content volume.",
        "AI cannot write emails.",
        "Send more emails to fix reputation.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Email distribution depends on list health and deliverability infrastructure. Re-read section 8.5.",
      wrongFeedback:
        "Volume without hygiene damages owned audience — the highest-control channel. Re-read section 8.5.",
    },
    {
      q: "£30K paid spend drove clicks to a blog with 12-second average time-on-page and zero conversions. Best diagnosis?",
      options: [
        "Paid does not work for content.",
        "Content-audience fit failed — fix consideration-stage content and message match before amplifying with paid.",
        "Need more AI ad variants.",
        "Wrong ad platform only.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Paid amplifies content that earns engagement — it rarely rescues wrong-stage or weak content. Re-read sections 8.1 and 8.4.",
      wrongFeedback:
        "Low time-on-page and zero conversion signal content problem, not just distribution. Fix content-job fit first. Re-read sections 8.1 and 8.4.",
    },
  ],
});
