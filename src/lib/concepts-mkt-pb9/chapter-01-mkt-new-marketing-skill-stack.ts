import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter01MktNewMarketingSkillStack = buildChapter({
  slug: "mkt-new-marketing-skill-stack",
  number: 1,
  shortTitle: "The New Marketing Skill Stack",
  title: "The New Marketing Skill Stack",
  readingMinutes: 24,
  summary:
    "The AI-era marketing skill stack separates execution from judgment: AI handles tactical production, template creative, and routine reporting; humans lead strategy, creative direction, prompt craft, workflow design, data literacy, and channel expertise. This chapter inventories what to delegate, what to amplify, how to prompt and evaluate output, how to design workflows that compound leverage, and how to build a 90-day personal development plan that moves you from volume to value.",
  keyTakeaway:
    "High-performing AI-era marketers do not compete with AI on speed — they compete on taste, strategy, and systems. Delegate executional tasks deliberately; invest in prompt craft, workflow design, data literacy, and channel depth. Audit skills quarterly and close gaps before the market does.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "1.1",
      title: "What AI Is Replacing in Marketing",
      subtitle: "Tactical content production, basic copywriting, template creative, and manual reporting — the honest inventory of executional tasks AI now does better and faster",
      take: "AI has crossed the threshold on repeatable marketing execution: first-draft blog posts, ad copy variants, email subject lines, social captions, image resizing, basic reporting narratives, and spreadsheet pivots. These tasks consumed 40–60% of junior marketer time five years ago. Replacement is not elimination — humans review, brand-gate, and publish — but the production layer is commoditised. Marketers who define their value by output volume face displacement; those who define value by judgment do not.",
      why: "Honest inventory prevents denial and panic. Teams that pretend AI cannot do first drafts waste budget on headcount for work machines handle overnight.",
      paragraphs: [
        [
          s("Audit your last 30 days of marketing work by task type. "),
          x(
            "Tag each task: first-draft content, variant generation, formatting, data pull, chart creation, meeting notes, competitive scrape. Claude, Jasper, and native ad platform AI now handle these at acceptable quality with human review.",
            "Tasks requiring live customer conversation, executive relationship, or unpublished strategy remain human-only.",
          ),
          s(" Calculate hours per category — replacement candidates exceed 15 hours weekly for most content marketers."),
        ],
        [
          s("Set explicit delegation rules — not ad hoc experimentation. "),
          x(
            "Define: AI drafts all blog first passes; humans edit for voice and facts. AI generates ten ad headlines; humans pick three and A/B test. AI pulls weekly metrics into template; humans interpret anomalies.",
            "Ambiguous rules produce inconsistent quality and brand risk when junior staff publish unreviewed output.",
          ),
          s(" Document delegation rules in team wiki — same rigour as brand guidelines."),
        ],
        [
          s("Reallocate saved time to judgment work immediately. "),
          x(
            "Time freed from drafting should fund audience research, creative direction, and strategy — not more drafts. Managers who measure output count instead of outcome quality recreate the old treadmill with AI.",
            "Activity inflation — 3× content volume at same quality — impresses dashboards briefly, not CFOs.",
          ),
          s(" Track reallocation: percent of week on strategy vs production before and after AI adoption."),
        ],
      ],
      examples: [
        {
          title: "Content team reset — B2B SaaS",
          body: "A 12-person content team spent 55% of time on first drafts and formatting. After Claude Projects with brand voice docs, draft time fell 62%. Team reallocated to customer interview programme and pillar strategy. Organic pipeline contribution rose 28% in two quarters — not from more posts, but better posts informed by research AI could not do.",
        },
        {
          title: "Reporting automation — DTC brand",
          body: "A DTC marketing manager spent six hours weekly building Shopify + Meta reports in Google Sheets. Connected Claude to exported CSVs with metric dictionary prompt. Report generation dropped to 45 minutes; manager invested saved time in creative testing strategy. ROAS improved 14% from better test design, not better spreadsheets.",
        },
        {
          title: "Denial cost — agency retainers",
          body: "A mid-market manufacturer kept agency on retainer for blog production at $8K monthly. Internal team tested AI drafts with senior editor review — quality parity at 20% cost. Agency retained for strategy and video; blog production brought in-house. CMO reframed role from 'content buyer' to 'editor-in-chief' — career trajectory improved.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-era-ch1-skill-stack",
      type: "comparison",
      title: "AI-Era Marketing Skill Split",
      caption:
        "AI handles draft production, basic reporting, template creative, and routine optimisation. Humans lead strategy, taste, prompt craft, and channel expertise.",
    }),
    buildSection({
      number: "1.2",
      title: "What AI Is Amplifying",
      subtitle: "Strategic thinking, creative direction, audience intuition, brand judgment, and cultural intelligence — human capabilities that compound as AI handles execution",
      take: "AI amplifies marketers who bring context machines lack: why this audience cares now, what the brand would never say, which cultural moment to join and which to avoid. Strategic thinking — ICP prioritisation, positioning choices, channel mix — becomes more valuable when execution is cheap. Creative direction scales: one strong brief yields fifty variants; weak briefs yield fifty mediocre ones. Audience intuition and brand judgment are the bottlenecks AI cannot remove.",
      why: "Amplification without strategy produces more noise. Leaders who invest in human judgment skills get compound returns from AI leverage.",
      paragraphs: [
        [
          s("Strategy work expands when execution compresses. "),
          x(
            "ICP refinement, messaging hierarchy, and channel prioritisation require business context, customer empathy, and political navigation — none are promptable from generic training data.",
            "AI can summarise market reports; it cannot decide which segment the CEO will fund this quarter.",
          ),
          s(" Block weekly strategy time protected from production — minimum 20% of senior marketer calendar."),
        ],
        [
          s("Creative direction is the new production bottleneck. "),
          x(
            "Strong creative directors brief AI with reference boards, anti-examples, and voice constraints — then curate output. Midjourney and Canva AI multiply concepts; taste selects winners.",
            "Brand judgment — knowing when AI output is 'close but off-brand' — requires years of category immersion.",
          ),
          s(" Train teams on evaluation rubrics: on-brand, accurate, differentiated, actionable — score before publish."),
        ],
        [
          s("Cultural intelligence and audience intuition remain human moats. "),
          x(
            "Trend participation, community norms on Reddit vs LinkedIn, and sensitivity to news cycles require lived attention. AI summarises Twitter; it does not feel when a campaign tone-deaf.",
            "Global brands need local cultural judgment AI generalises poorly.",
          ),
          s(" Pair AI research with human sense-check — 'would our best customer cringe at this?'"),
        ],
      ],
      examples: [
        {
          title: "Creative direction lift — fashion brand",
          body: "A fashion brand's creative lead used AI for 40 mood-board variants per campaign instead of three. Human curation selected two directions for shoot. Campaign CTR beat prior season 22% — amplification came from exploring more territory before committing production budget.",
        },
        {
          title: "Strategy protected — enterprise software",
          body: "A VP Marketing blocked Friday mornings company-wide for positioning work — no content deadlines accepted. AI handled weekday draft production. Repositioning narrative tested in six weeks vs prior eighteen-month cycle. Sales adopted new talk track within one quarter.",
        },
        {
          title: "Cultural miss avoided — fintech",
          body: "AI drafted timely blog on banking news; human editor flagged regulatory sensitivity and tone mismatch for retail audience. Delayed publish for legal review and rewrite. Competitor published AI-sounding hot take — backlash on social. Brand judgment prevented reputational damage.",
        },
      ],
    }),
    buildSection({
      number: "1.3",
      title: "Prompt Craft as a Core Marketing Competency",
      subtitle: "Brief writing, voice instruction, output evaluation, and iteration discipline — the prompting skills specific to marketing",
      take: "Prompt craft for marketers is brief engineering: role, audience, channel, voice, constraints, examples, and evaluation criteria in structured input. Marketing prompts differ from generic chat — they reference brand voice docs, compliance rules, competitor positioning, and CTA requirements. Iteration discipline matters: first output is draft zero; marketers refine with specific feedback ('shorter, less jargon, lead with pain point'). Teams without prompt standards get inconsistent voice and hallucinated claims.",
      why: "Prompt quality is the multiplier on every AI tool. Poor prompts waste licences and erode brand trust.",
      paragraphs: [
        [
          s("Structure marketing prompts with non-negotiable fields. "),
          x(
            "Template: Role (senior copywriter for [brand]), Audience (ICP segment), Channel (LinkedIn post / email / landing page), Voice (link to guide), Constraints (word count, banned phrases, compliance), Examples (2–3 on-brand samples), Task.",
            "Missing audience field produces generic B2B sludge regardless of model.",
          ),
          s(" Store templates in shared library — version when brand voice updates."),
        ],
        [
          s("Voice instruction requires positive and negative examples. "),
          x(
            "Show AI what good looks like and what to avoid: 'We sound like X, not like Y.' Claude Projects and custom GPTs embed voice docs; paste alone drifts across sessions.",
            "Superlatives and empty claims ('leading', 'innovative') proliferate without anti-examples.",
          ),
          s(" Quarterly voice audit: sample ten AI outputs against brand rubric — target 85% pass before publish."),
        ],
        [
          s("Build iteration discipline — critique specifically, not 'try again.' "),
          x(
            "Effective feedback: 'Opening hook too soft — lead with statistic from brief. Paragraph 2 repeats value prop — cut. CTA must be trial signup not demo.' Vague 'make it better' wastes tokens.",
            "Chain prompts: outline → draft → edit → compliance check as separate steps improves quality vs one-shot.",
          ),
          s(" Time-box iteration: three refinement rounds max, then human rewrite if still off."),
        ],
      ],
      examples: [
        {
          title: "Prompt library ROI — HR tech",
          body: "An HR tech startup built twelve channel-specific prompt templates in Notion with voice doc attachments. New marketer onboarding dropped from six weeks to ten days for on-brand output. Email open rates stable while production volume doubled — consistency improved, not just speed.",
        },
        {
          title: "Compliance prompt layer — financial services",
          body: "A wealth platform added mandatory compliance block to every prompt: no return promises, required risk disclaimers, banned competitor naming. Claude pass-through compliance check before human review. Regulatory review cycle shortened 40%; zero off-label claims in six months of AI-assisted content.",
        },
        {
          title: "Iteration training — agency upskill",
          body: "A digital agency ran prompt craft workshops — before/after examples with same brief. Junior copywriters learned specific critique language. Client revision rounds fell from 3.2 average to 1.4. Agency pitched 'editorial AI workflow' as differentiator — won two competitive pitches.",
        },
      ],
    }),
    buildSection({
      number: "1.4",
      title: "AI Workflow Design",
      subtitle: "Building, optimising, and managing AI-assisted marketing workflows — the operational skill that separates high-leverage from high-volume marketers",
      take: "AI workflow design maps recurring marketing work into stages: inputs, AI steps, human gates, outputs, and tools. High-leverage marketers design workflows once and reuse them — campaign brief → research synthesis → outline → draft → edit → design brief → schedule. High-volume marketers run ad hoc prompts daily with no compounding. Workflow design includes handoffs, SLAs, and quality gates. Zapier, Make, and native integrations automate repetitive bridges; humans own exceptions.",
      why: "Workflow without design produces random acts of AI. Designed workflows compound quality and reduce rework weekly.",
      paragraphs: [
        [
          s("Map one recurring workflow end to end before automating. "),
          x(
            "Example weekly blog: Monday topic from content calendar → Claude research from customer interview notes → outline approval → draft → editor review → CMS publish. Each stage has owner and time box.",
            "Automating a broken manual process accelerates broken output.",
          ),
          s(" Document in flowchart — identify which stages are AI-only, human-only, or hybrid."),
        ],
        [
          s("Insert human gates at brand and fact risk points. "),
          x(
            "Mandatory human review before: publish, paid spend, executive-facing copy, claims with numbers, competitor mentions. AI-only gates acceptable for internal brainstorm and first drafts.",
            "Gates without owners become bottlenecks — assign backup reviewers.",
          ),
          s(" Measure workflow cycle time and rework rate — optimise stages with highest rework."),
        ],
        [
          s("Iterate workflows monthly — do not set and forget. "),
          x(
            "New tools, model upgrades, and team skills change optimal paths. Retire steps that no longer add value; add validation when error patterns emerge.",
            "Workflow debt accumulates like tech debt — quarterly workflow retrospective recommended.",
          ),
          s(" Share workflow improvements in team standup — compounding team capability."),
        ],
      ],
      examples: [
        {
          title: "Campaign workflow — product launch",
          body: "A product launch workflow in Asana: brief template → Claude competitive scan → positioning doc approval → content matrix → parallel AI drafts per channel → editor batch review → design handoff. Launch cycle compressed from eight weeks to five with fewer weekend crunches. Post-launch retro identified competitor scan as highest-value AI stage.",
        },
        {
          title: "Email workflow — ecommerce",
          body: "A skincare brand wired Klaviyo triggers to Claude API for personalised subject line variants within brand guardrails. Human approves weekly batch. Open rate lift 11% vs template-only predecessor. Workflow design limited API calls to VIP segments where margin justified cost.",
        },
        {
          title: "Workflow failure — no gates",
          body: "A startup enabled self-serve AI publishing to WordPress — no editor gate. Factual error in AI-generated comparison post triggered customer complaint and SEO cleanup. Added mandatory editor gate and fact-check prompt step. Incident became workflow design case study for new hires.",
        },
      ],
    }),
    buildSection({
      number: "1.5",
      title: "Data Literacy for AI-Era Marketers",
      subtitle: "Interpreting AI analytics outputs, questioning assumptions, and making data-informed decisions when machines generate the narrative",
      take: "Data literacy for AI-era marketers is not SQL mastery — it is knowing when to trust AI-generated analysis, which questions to ask, and how to cross-check against source systems. Claude on CSV exports can summarise trends, flag anomalies, and draft insights — but hallucinates metrics, confuses correlation with causation, and omits cohort definitions. Marketers must read metric dictionaries, validate sample sizes, and challenge narratives that contradict funnel reality.",
      why: "AI analytics without literacy produces confident wrong decisions. CFOs and boards punish marketers who present unverified AI summaries.",
      paragraphs: [
        [
          s("Always trace AI insights to source data definitions. "),
          x(
            "Ask: which date range, which attribution model, which segment filter? Compare AI narrative to Looker or GA4 explore for top-line sanity check.",
            "Duplicate HubSpot contacts inflate lead counts AI reports as growth.",
          ),
          s(" Maintain personal metric cheat sheet — five KPIs with exact definitions and sources."),
        ],
        [
          s("Question assumptions embedded in AI analysis prompts. "),
          x(
            "Prompt bias: 'prove email is working' yields confirmation bias. Neutral prompt: 'what changed in channel mix and what hypotheses explain pipeline shift?'",
            "AI cannot know your pricing change or sales hiring unless you include context.",
          ),
          s(" Include business events in analysis prompts — product launch, seasonality, tracking breaks."),
        ],
        [
          s("Use AI for exploration, humans for decisions. "),
          x(
            "Strong pattern: AI surfaces five hypotheses from data; marketer validates top two with domain knowledge and follow-up queries. Weak pattern: paste AI summary into board deck unchecked.",
            "Statistical significance and sample size — ask AI to show counts behind percentages.",
          ),
          s(" Pair with analyst or RevOps quarterly for literacy calibration."),
        ],
      ],
      examples: [
        {
          title: "Hallucination caught — board prep",
          body: "A marketing director used Claude to summarise quarterly pipeline data. AI cited 34% QoQ growth; Looker showed 19% — AI double-counted recycled opportunities. Director fixed prompt to specify dedupe rules and paste metric definitions. Board deck accurate; director instituted 'source verification' step for all AI narratives.",
        },
        {
          title: "Hypothesis generation — paid social",
          body: "Meta ROAS dipped; AI analysis of export suggested creative fatigue. Marketer validated — frequency over 4 on core audience confirmed. Human decision: refresh creative and expand prospecting, not cut budget blindly. Recovery in three weeks vs panic cut that would have shrunk learning phase.",
        },
        {
          title: "Literacy upskill — marketing cohort",
          body: "A CMO required all managers to complete monthly 'AI analytics lab' — same dataset, independent prompts, compare conclusions. Discrepancies drove metric dictionary improvements. Team data literacy scorecard green within two quarters; finance trust in marketing reporting improved.",
        },
      ],
    }),
    buildSection({
      number: "1.6",
      title: "Creative Direction in an AI Workflow",
      subtitle: "Briefing, evaluating, and curating AI creative output — editorial judgment that determines whether AI content is good enough to publish",
      take: "Creative direction in AI workflows is editorial leadership: write briefs AI can execute, evaluate output against strategy not aesthetics alone, and curate combinations humans polish. Briefs need objective, audience tension, proof points, mandatories, and taboos. Evaluation uses rubrics — strategic fit, clarity, differentiation, compliance — not gut alone. Curation selects from volume; polish adds the final 10% humans notice. Creative directors who only critique without briefing become bottlenecks.",
      why: "AI multiplies creative volume; without direction, brands publish mediocre sameness faster.",
      paragraphs: [
        [
          s("Write creative briefs as structured inputs, not vague aspirations. "),
          x(
            "Include: single-minded proposition, audience insight, reason to believe, tone spectrum, deliverable specs, references, anti-references. Attach to Claude Project or paste consistently.",
            "Briefs missing 'reason to believe' produce generic benefit claims.",
          ),
          s(" Brief quality score — peer review before AI production starts."),
        ],
        [
          s("Evaluate AI creative on strategy first, craft second. "),
          x(
            "Question order: Does this address the right audience problem? Is claim substantiated? Is it differentiated from competitor messaging? Then: grammar, rhythm, hook strength.",
            "Polished wrong message outperforms rough right message in tests — but neither builds brand.",
          ),
          s(" Use scorecard 1–5 per dimension — below 4 triggers rewrite not tweak."),
        ],
        [
          s("Curate and combine — hybrid human-AI assets often win. "),
          x(
            "AI headline options + human body; AI layout variants + human photography; AI script draft + human spokesperson delivery. Publish the combination, not the raw output.",
            "100% AI creative signals to audiences on saturated channels — hybrid feels authentic.",
          ),
          s(" Document winning combinations in prompt library for reuse."),
        ],
      ],
      examples: [
        {
          title: "Brief discipline — B2B ABM",
          body: "ABM campaign for three enterprise accounts: bespoke briefs with account-specific pain from sales notes. AI generated personalised landing copy per account; creative director curated one hero message per account. Meeting booking rate 2.4× generic campaign — brief specificity mattered more than model choice.",
        },
        {
          title: "Rubric adoption — in-house team",
          body: "In-house team implemented five-point rubric for all AI-assisted ads. Scores below 4 sent back with structured feedback prompts. Meta ad relevance score improved account-wide; creative rejection rate from legal fell 50%.",
        },
        {
          title: "Hybrid video — consumer app",
          body: "App marketing used AI for storyboard and B-roll concepts; human crew shot spokesperson segments. Final ads tested 18% higher completion than fully AI avatar competitor ads in same category. Creative direction chose authenticity over full automation.",
        },
      ],
    }),
    buildSection({
      number: "1.7",
      title: "Channel Expertise AI Cannot Replicate",
      subtitle: "Deep knowledge of how specific channels work, how audiences behave within them, and how to design for their dynamics and norms",
      take: "Channel expertise is knowing LinkedIn rewards document posts differently than Twitter threads; Google Ads Quality Score responds to landing page experience; TikTok creative fatigues in 72 hours; email deliverability depends on list hygiene not copy alone. AI generates channel-agnostic content unless prompted with deep constraints — experts encode norms into prompts and reject AI output that violates platform logic. Channel expertise compounds: algorithms change; practitioners who test weekly outpace tool defaults.",
      why: "Generic AI content underperforms on every mature channel. Expertise is the targeting layer AI lacks.",
      paragraphs: [
        [
          s("Maintain living channel playbooks — update when platforms change. "),
          x(
            "Each playbook: format specs, algorithm notes, creative best practices, posting cadence, measurement quirks, common failures. AI drafts against playbook; experts audit compliance.",
            "Platform docs change quarterly — stale playbooks produce stale prompts.",
          ),
          s(" Assign channel owner per platform — accountable for playbook freshness."),
        ],
        [
          s("Encode channel norms into prompts explicitly. "),
          x(
            "LinkedIn: professional tone, line breaks, no hashtag spam. Meta: hook in first three seconds script notation. SEO: search intent match and header structure — not just keyword density.",
            "Without encoding, AI defaults to median internet voice — invisible on competitive channels.",
          ),
          s(" A/B test AI vs human-tuned prompts per channel — measure delta quarterly."),
        ],
        [
          s("Invest in platform-native experimentation AI cannot replace. "),
          x(
            "Ad account structure, bidding strategy, audience layering, and creative testing cadence require live platform interaction. AI advises; experts execute and read signals.",
            "New ad features roll out to practitioners first — AI training data lags.",
          ),
          s(" Budget time for platform betas and certification updates annually."),
        ],
      ],
      examples: [
        {
          title: "LinkedIn expertise — founder brand",
          body: "Founder ghostwriter used generic AI LinkedIn posts — flat engagement. Channel expert rewrote prompts with document-post structure, contrarian hook pattern, and comment-bait question format. Impressions rose 5× in eight weeks — same model, different channel encoding.",
        },
        {
          title: "Google Ads structure — lead gen",
          body: "AI suggested keyword expansion; expert pruned low-intent terms and restructured Performance Max with asset group segmentation by use case. CPA fell 26% vs AI-only account restructure at peer company. Channel expertise prevented budget bleed on informational queries.",
        },
        {
          title: "TikTok cadence — beauty DTC",
          body: "Beauty brand AI-generated fifteen TikTok scripts weekly; channel lead cut to eight based on fatigue data and trend alignment. Posted native-style edits not raw AI voiceover. View-through rate doubled — expertise filtered volume to quality.",
        },
      ],
    }),
    buildSection({
      number: "1.8",
      title: "Marketer Decision Lens: Your Personal Skill Development Plan",
      subtitle: "Capability audit, gap identification, and the 90-day investment that moves the marketing skill needle in an AI era",
      take: "Personal skill development starts with honest audit: rate yourself 1–5 on prompt craft, workflow design, data literacy, creative direction, channel depth, and strategy time allocation. Identify top two gaps blocking next role or performance goal. Build 90-day plan: one workflow to design, one channel playbook to deepen, one prompt library contribution weekly. Defer new tool purchases until workflow and prompt foundations score 3+. Review with manager or mentor at day 30 and 90.",
      why: "Without a plan, marketers react to tool hype. With a plan, AI becomes career compound interest.",
      paragraphs: [
        [
          s("Run capability audit using consistent rubric. "),
          x(
            "Dimensions: delegation discipline (using AI for right tasks), prompt quality (peer-reviewed samples), workflow maturity (documented repeatable flows), data verification habit, creative direction (brief + rubric use), channel depth (playbook ownership).",
            "Self-assessment alone biases high — include peer or manager calibration.",
          ),
          s(" Record baseline scores — retest quarterly."),
        ],
        [
          s("Select 90-day investments tied to business outcomes. "),
          x(
            "Gap prompt craft → build five templates for your top channels. Gap data literacy → monthly analytics lab with RevOps. Gap strategy time → block calendar and measure percent shift.",
            "Avoid plans that are only 'try new tools' — tools without skills produce shelfware.",
          ),
          s(" One public deliverable by day 90 — shared prompt, workflow doc, or case study."),
        ],
        [
          s("Measure skill movement, not tool logins. "),
          x(
            "Success metrics: rework rate down, cycle time down, stakeholder quality ratings up, promotion-readiness narrative clear. Login counts prove activity not capability.",
            "Document before/after work samples for performance review evidence.",
          ),
          s(" At day 90, decide next gap or mentor others — teaching cements skill."),
        ],
      ],
      examples: [
        {
          title: "90-day plan — senior content marketer",
          body: "Audited weak on workflow design and data literacy. Days 1–30: documented blog workflow with gates. Days 31–60: weekly Claude analytics with verification checklist. Days 61–90: presented pipeline insight to sales. Promoted to content lead — plan evidence differentiated from peers with only tool experience.",
        },
        {
          title: "Channel depth focus — paid specialist",
          body: "Paid specialist scored low on creative direction. Built brief templates for UGC creators and AI variant testing. Creative quality scores from platform rose; secured budget for creative strategist hire — positioned as player-coach not button-pusher.",
        },
        {
          title: "Plan without audit — wasted quarter",
          body: "Marketer subscribed to four AI tools without skill audit. Overlapping features, inconsistent voice, no workflow. Manager mandated audit and 90-day plan — consolidated to two tools, built prompt library. Output quality recovered; lesson embedded in team onboarding.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Which marketing tasks are best delegated to AI first?",
      options: [
        "Executive stakeholder negotiation and board narrative",
        "First-draft content, variant generation, and routine reporting",
        "Brand positioning and ICP prioritisation decisions",
        "Live customer discovery interviews",
      ],
      correct: 1,
      correctFeedback:
        "Right. Tactical production and reporting are AI replacement candidates. Re-read sections 1.1 and 1.2.",
      wrongFeedback:
        "AI handles executional tasks; humans lead strategy and judgment. Re-read sections 1.1 and 1.2.",
    },
    {
      kind: "order",
      q: "Order the marketing prompt craft workflow from first to last.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Define role, audience, channel, and constraints",
        "Generate first draft with voice examples",
        "Iterate with specific structured feedback",
        "Human review at brand and compliance gates",
        "Publish or hand off to production",
      ],
      correctFeedback:
        "Right. Structure, draft, iterate, gate, publish. Re-read section 1.3.",
      wrongFeedback:
        "Prompt craft requires structure before iteration and gates before publish. Re-read section 1.3.",
    },
    {
      kind: "categorize",
      q: "Sort each capability into AI-amplified human skill vs AI-replaced execution.",
      categories: ["Human-amplified", "AI-replaced execution"],
      items: [
        { text: "Creative direction and brand judgment.", category: 0 },
        { text: "First-draft blog post generation.", category: 1 },
        { text: "Channel-specific playbook expertise.", category: 0 },
        { text: "Spreadsheet pivot and chart formatting.", category: 1 },
        { text: "Audience intuition and cultural timing.", category: 0 },
        { text: "Ten ad headline variants from a brief.", category: 1 },
      ],
      correctFeedback:
        "Right. Judgment amplifies; execution delegates. Re-read sections 1.1 and 1.2.",
      wrongFeedback:
        "Strategy and taste are human; drafts and variants are AI execution. Re-read sections 1.1 and 1.2.",
    },
    {
      q: "AI analytics summary shows 34% growth but Looker shows 19%. Best next step?",
      options: [
        "Use AI number — it sounds more impressive",
        "Verify definitions, dedupe rules, and source data before presenting",
        "Stop using data entirely",
        "Blame the data team publicly",
      ],
      correct: 1,
      correctFeedback:
        "Right. Data literacy requires source verification. Re-read section 1.5.",
      wrongFeedback:
        "Always trace AI insights to source definitions. Re-read section 1.5.",
    },
    {
      q: "What distinguishes high-leverage from high-volume AI marketers?",
      options: [
        "More daily ad hoc prompts without documentation",
        "Designed reusable workflows with human quality gates",
        "Publishing AI output without review for speed",
        "Collecting the maximum number of AI tool subscriptions",
      ],
      correct: 1,
      correctFeedback:
        "Right. Workflow design compounds leverage. Re-read section 1.4.",
      wrongFeedback:
        "Workflows with gates beat random prompting. Re-read section 1.4.",
    },
    {
      kind: "categorize",
      q: "Match each item to personal skill plan element.",
      categories: ["90-day plan action", "Distraction to defer"],
      items: [
        { text: "Capability audit with peer calibration.", category: 0 },
        { text: "Buying fourth overlapping AI tool.", category: 1 },
        { text: "Document one repeatable workflow.", category: 0 },
        { text: "Chasing every new model launch.", category: 1 },
        { text: "Public deliverable by day 90.", category: 0 },
        { text: "Measuring success by login counts only.", category: 1 },
      ],
      correctFeedback:
        "Right. Plan focuses on skills and evidence. Re-read section 1.8.",
      wrongFeedback:
        "Skill plans audit, build workflows, and measure outcomes — not tool hoarding. Re-read section 1.8.",
    },
  ],
});
