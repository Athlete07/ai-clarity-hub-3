import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter08MktAiMarketingMindset = buildChapter({
  slug: "mkt-ai-marketing-mindset",
  number: 8,
  shortTitle: "The AI Marketing Mindset",
  title: "The AI Marketing Mindset — Amplify Strategy, Don't Automate Mediocrity",
  readingMinutes: 24,
  summary:
    "Tools change quarterly; mindset compounds. The marketers who thrive with AI treat it as an amplifier for judgment, creativity, and strategy — not a replacement for thinking. This chapter builds the habits that separate teams publishing more from teams winning more: curation, iteration, experimentation, strategic elevation, technical collaboration, and a concrete 90-day development plan.",
  keyTakeaway:
    "AI rewards marketers who curate ruthlessly, iterate prompts like campaigns, experiment with discipline, stay current without chasing hype, elevate toward strategy, and partner with technical teams on governance. The 90-day plan turns philosophy into practice — one workflow, one metric, one habit at a time.",
  pmCallout: MKT_CALLOUT,
  sections: [
    buildSection({
      number: "8.1",
      title: "AI as Amplifier, Not Replacement",
      subtitle: "What AI multiplies in your marketing — and what it cannot multiply if it is missing",
      take: "AI amplifies whatever you bring to it: clear strategy produces faster strategic execution; vague briefs produce vague output at scale. The marketer's job is not to disappear behind automation — it is to supply the judgment, audience insight, and brand intent that AI accelerates. Replacement thinking leads to generic output; amplifier thinking leads to leverage.",
      why: "Fear of replacement and hype of replacement both mislead. Marketing leaders who frame AI as amplifier set realistic expectations, invest in human skills that compound with AI, and avoid the organisational mistake of cutting junior marketers who are actually your curation pipeline.",
      paragraphs: [
        [
          s("Amplifier logic starts with the brief, not the tool. "),
          x(
            "A precise audience definition, sharp value proposition, and clear campaign objective — fed to AI — produce usable drafts. A one-line prompt ('write a LinkedIn post about our product') produces category noise. AI multiplied zero strategic clarity and got zero strategic value.",
            "The time saved on drafting reappears as time available for strategy only if leadership protects that time — otherwise it becomes more low-quality tasks.",
          ),
          s(" Before blaming AI output, audit the brief quality you supplied. Amplifiers reveal weak inputs faster than humans do."),
        ],
        [
          s("Roles evolve; they do not vanish. "),
          x(
            "Junior marketers: more time on audience research, analytics interpretation, and curation — less on first-draft blank-page work. Senior marketers: more time on positioning, creative direction, and cross-functional strategy — less on formatting and variant production.",
            "Organisations that cut entry-level roles lose the talent pipeline that learns brand voice through curation — and end up with expensive seniors fixing robot copy.",
          ),
          s(" Staffing plans should shift role composition toward judgment-heavy work — not reduce headcount by default."),
        ],
        [
          s("Amplifier mindset includes knowing when not to use AI. "),
          x(
            "Crisis communications, sensitive customer responses, original thought leadership with personal credibility, high-stakes regulated claims — these often need human-first authorship. AI may assist research or structure, but the voice must be authentically human.",
            "Disciplined non-use is a sign of maturity, not Luddism.",
          ),
          s(" Maintain a 'human-first' asset list alongside your AI workflow list — and review both quarterly."),
        ],
      ],
      examples: [
        {
          title: "Campaign brief transformation",
          body: "A B2B company's AI output quality jumped when they changed the brief template — not the tool. Added: audience segment, pain point, proof point, competitive frame, CTA goal, voice module link. Same Jasper subscription, 50% less edit time. The amplifier only worked once the input signal was strong.",
        },
        {
          title: "Junior marketer role redesign",
          body: "A consumer brand reframed junior content roles as 'editorial associates' — 60% curation and analytics, 40% drafting with AI. Career path preserved; attrition dropped. Associates who curate 50 AI drafts per week develop faster voice judgment than associates who write five from scratch. Amplifier model invested in humans.",
        },
        {
          title: "CEO letter human-first policy",
          body: "A public company's comms team maintains human-first authorship for CEO shareholder letters and crisis statements — AI used only for research synthesis and fact-check lists. Policy prevents authenticity risk. Investors and journalists notice voice authenticity; amplifier discipline protects it.",
        },
      ],
    }),
    buildSection({
      number: "8.2",
      title: "Curation as Core Marketing Skill",
      subtitle: "Selection, editing, and rejection — the judgment AI cannot replicate",
      take: "In an AI-abundant world, curation — choosing what deserves attention, what ships, and what dies — becomes the scarce marketing skill. Great marketers are great editors: they know what to cut, what to combine, and what to push back on. Curation is not cleanup; it is creative direction.",
      why: "Tools lower the cost of production to near-zero. Attention remains finite. Curation is how brands earn attention in a flood of AI-generated sameness — and how marketers demonstrate value leadership cannot automate.",
      paragraphs: [
        [
          s("Curation operates at three altitudes. "),
          x(
            "Micro: line-level edit — word choice, claim accuracy, tone fix. Meso: asset-level — which of five AI variants becomes the hero email. Macro: portfolio-level — which campaigns deserve budget amid infinite AI-enabled possibilities.",
            "AI assistance increases micro and meso curation volume; macro curation becomes more important because production constraints no longer limit options.",
          ),
          s(" Develop explicit skill paths for each altitude — junior for micro, senior for macro."),
        ],
        [
          s("Rejection is a creative act. "),
          x(
            "Saying no to 80% of AI output protects brand and audience trust. Teams without rejection discipline publish the long tail of mediocre drafts because 'we already generated it'.",
            "Track rejection rate and reasons — high rejection with improving publish quality means prompts are generating useful options; low rejection may mean insufficient standards.",
          ),
          s(" Celebrate good rejections in team reviews — 'this draft failed voice gate, saved us from an off-brand send'."),
        ],
        [
          s("Curation taste is trainable through exposure. "),
          x(
            "Curators improve by studying on-brand exemplars, off-brand failures, and competitor differentiation. Build a swipe file of best and worst AI outputs with annotations — a training corpus for taste.",
            "Taste is not innate mysticism — it is pattern recognition from curated examples, same as AI but with strategic judgment.",
          ),
          s(" Pair junior curators with senior editors for weekly review sessions — apprenticeship accelerates taste faster than solo tool use."),
        ],
      ],
      examples: [
        {
          title: "Netflix thumbnail curation parallel",
          body: "Netflix tests dozens of thumbnail variants but publishes few — heavy curation backed by data. AI enables marketers to generate Netflix-scale variants; curation discipline determines whether you publish like Netflix or spam like a bot. The skill is selection under abundance.",
        },
        {
          title: "Rejection rate tracking",
          body: "A SaaS content team tracked AI draft rejection rate: started 65% rejected at month one, stabilised 35% at month six as prompts improved — while published content engagement rose. Rejection rate declining with quality rising proved prompt maturity. Metric made curation visible to leadership.",
        },
        {
          title: "Swipe file onboarding",
          body: "An agency onboarding programme includes a 'curation gallery' — 50 annotated examples of AI drafts accepted, rejected, and why. New hires curate better within two weeks than veterans who never saw annotated examples. Taste training scaled through documentation.",
        },
      ],
    }),
    buildSection({
      number: "8.3",
      title: "The Iteration Habit",
      subtitle: "Prompts are campaigns — test, measure, refine, repeat",
      take: "One-shot prompting is amateur hour. Professional AI marketing treats prompts like creative briefs: versioned, tested against outcomes, refined from rejection patterns, and retired when obsolete. Iteration habit separates marketers who complain about generic AI from those whose AI output improves monthly.",
      why: "Models and tools update constantly; static prompts decay. Marketers who iterate build compounding advantage — their prompt library is institutional memory that new tools and models inherit.",
      paragraphs: [
        [
          s("Run prompt changes as micro-experiments. "),
          x(
            "Change one variable: add a negative example, tighten audience definition, swap voice module. Generate five outputs, score against rubric, compare to previous prompt version. Document winner.",
            "Same discipline as subject line testing — applied to the generation layer.",
          ),
          s(" Monthly prompt retrospective: top three prompt improvements and their measured impact on edit time or quality score."),
        ],
        [
          s("Version control prompts like creative assets. "),
          x(
            "Prompt v3.2 — email nurture, enterprise segment, changed CTA instruction based on Q2 click-through data. Changelog in prompt library. Rollback when new version underperforms.",
            "Unversioned prompts living in personal ChatGPT histories are not organisational assets.",
          ),
          s(" Centralise in shared prompt library with owner, last tested date, and performance notes."),
        ],
        [
          s("Iterate from failure, not just success. "),
          x(
            "The edited diff between AI draft and published copy is free training data. Weekly: collect five largest diffs, identify pattern ('always fixes superlatives', 'always adds customer quote'), update system prompt.",
            "Teams that iterate only when output is catastrophically bad miss incremental improvement from routine edits.",
          ),
          s(" Assign rotating 'prompt steward' each month — responsible for diff analysis and library updates."),
        ],
      ],
      examples: [
        {
          title: "Prompt A/B on ad headlines",
          body: "A performance marketing team maintains two prompt versions for Google RSA headline generation. Monthly winner becomes default; loser archived with performance notes. Over six months, average CPA from AI-assisted headlines improved 14% — not from better model, from better prompts via iteration discipline.",
        },
        {
          title: "Diff-driven prompt update",
          body: "A healthcare marketer noticed every AI blog draft required adding a regulatory disclaimer paragraph manually. Updated system prompt with disclaimer template and trigger rules. Edit time dropped 12 minutes per post. Single diff pattern, one prompt iteration, measurable savings.",
        },
        {
          title: "Stale prompt incident",
          body: "A fintech team used a 2024 product prompt after a major rebrand. AI outputs used deprecated product names for three weeks before a customer flagged it. Root cause: no prompt version review tied to brand changelog. Fix: rebrand triggers mandatory prompt library audit within 48 hours.",
        },
      ],
    }),
    buildSection({
      number: "8.4",
      title: "Staying Current Without Chasing Hype",
      subtitle: "A sustainable learning rhythm for marketers in a tool-saturated market",
      take: "The AI marketing landscape changes weekly — new models, features, platforms, and case studies. Staying current means a disciplined learning rhythm that separates signal from noise: know what affects your workflows, ignore what does not, and avoid perpetual tool-switching that destroys prompt investment.",
      why: "Hype-chasing marketers accumulate tools, abandon workflows, and never reach prompt maturity. Disciplined learners adopt one meaningful change per quarter, integrate it fully, and measure impact before adding the next.",
      paragraphs: [
        [
          s("Structure learning into three tiers of urgency. "),
          x(
            "Tier one — act now: changes affecting compliance, platform policy, or tools you use in production (e.g. Meta AI ad disclosure rules, your CMS vendor's new AI feature). Tier two — experiment this quarter: capabilities that might improve a measured workflow. Tier three — monitor only: interesting but unproven for your category.",
            "Most LinkedIn AI announcements are tier three. Regulatory updates are tier one.",
          ),
          s(" Weekly 30-minute scan: one tier-one source (vendor changelog, regulator), one tier-two newsletter, ignore the rest during production hours."),
        ],
        [
          s("Build a personal trusted source list — small and stable. "),
          x(
            "Three newsletters, two practitioners in your category, one technical source explaining model changes in plain language. Rotate annually. Avoid adding sources without removing one.",
            "Information diet is as important as information volume.",
          ),
          s(" Share tier-one updates in team Slack with 'action required' vs 'FYI' labels — respect colleagues' attention."),
        ],
        [
          s("Quarterly 'one new thing' adoption rule. "),
          x(
            "Each quarter, one new AI capability integrated into a measured workflow — not ten tools trialled superficially. Full 90-day proof period before the next adoption.",
            "Constraint forces depth. Unlimited experimentation forces shallow tool tourism.",
          ),
          s(" Leaders model this discipline — executive tool hopping undermines marketing ops focus."),
        ],
      ],
      examples: [
        {
          title: "Tier-one platform policy response",
          body: "When Google updated AI content guidance for search, a B2B SEO lead flagged tier-one action within 48 hours: review AI-assisted content ratio, ensure human value-add documented, adjust quality gates. Team avoided panic-driven content purge because signal was separated from hype. Traffic stable.",
        },
        {
          title: "Tool tourism recovery",
          body: "A startup marketing team tried seven AI writing tools in four months. No prompt library maturity, no ROI data. CMO imposed one-tool rule for two quarters. Productivity and quality metrics finally moved. Staying current became staying committed long enough to learn.",
        },
        {
          title: "Practitioner learning circle",
          body: "Five non-competing B2B marketing directors meet monthly for 45 minutes — each shares one AI workflow result with data. Peer learning filters hype: only experiments with evidence get airtime. Members report faster tier-two adoption with lower failure rate than solo scouting.",
        },
      ],
    }),
    buildSection({
      number: "8.5",
      title: "Experimentation with Discipline",
      subtitle: "Low-cost trials, clear hypotheses, and kill criteria before scale",
      take: "Experimentation is how marketers discover where AI actually helps their category, audience, and channel mix — but undisciplined experimentation is expensive noise. Every AI experiment needs a hypothesis, success metric, time box, and kill criterion before it starts.",
      why: "Leadership tolerates experimentation; they do not tolerate endless pilots without conclusions. Disciplined experimentation builds the case studies that justify budget — and the kill decisions that protect focus.",
      paragraphs: [
        [
          s("The experiment card template fits on one page. "),
          x(
            "Hypothesis: 'AI-generated ad variants reduce CPA by 15% on Meta for our retargeting audience.' Workflow: tool, prompt version, curation owner. Metric: CPA vs control. Duration: 4 weeks. Kill if: CPA worse after 2 weeks or brand complaint. Scale if: CPA improvement >10% with quality gate pass.",
            "No card, no experiment — prevents orphan trials that consume attention.",
          ),
          s(" Store completed experiment cards in a team wiki — institutional memory of what worked in your context."),
        ],
        [
          s("Low-cost trials use existing traffic and assets. "),
          x(
            "Test AI email subject lines on 10% of list. Test AI landing page hero on one ad group. Test AI social captions on one platform before cross-channel rollout.",
            "Experiments should risk little brand equity and little budget — learning before scaling.",
          ),
          s(" High-cost trials (full rebrand copy via AI, new channel launch) require executive sign-off and stronger controls."),
        ],
        [
          s("Publish internal experiment results — wins and losses. "),
          x(
            "A culture that only shares wins repeats failures in silos. \"AI persona testing failed for our enterprise audience — here is why\" saves the next team six weeks.",
            "Marketing ops maintains experiment registry: status, outcome, recommendation.",
          ),
          s(" Quarterly experiment retro: what we learned, what we killed, what we scaled — presented alongside scorecard from chapter 7."),
        ],
      ],
      examples: [
        {
          title: "Structured persona experiment",
          body: "A HR software marketer hypothesised AI-generated persona-specific landing pages would lift demo requests 20%. Built 3 personas, 4-week test, 20% traffic split. Result: 8% lift on one persona, neutral on two. Scaled one persona workflow; killed generic persona expansion. Disciplined kill saved three months of low-impact production.",
        },
        {
          title: "Failed chatbot experiment — documented",
          body: "A DTC brand tested AI customer chat on website. Hypothesis: reduce support tickets. Result: 12% of AI answers wrong, ticket volume up due to confusion. Killed at week 3 per kill criterion. Internal write-up prevented customer success from retrying same vendor six months later.",
        },
        {
          title: "Experiment registry ROI",
          body: "A enterprise marketing ops team maintains 24-month experiment registry. Analysis: experiments with pre-written kill criteria concluded 40% faster and had 2x scale rate versus ad-hoc trials. Process discipline accelerated learning velocity.",
        },
      ],
    }),
    buildSection({
      number: "8.6",
      title: "Strategic Elevation",
      subtitle: "Using AI capacity to do harder marketing, not just more marketing",
      take: "Strategic elevation means redeploying AI savings toward work that differentiates: original research, deeper customer insight, creative bravery, sales partnership, and category positioning — not filling every freed hour with more content. The marketers who win treat AI as a ladder, not a treadmill.",
      why: "If AI only makes you faster at interchangeable marketing, competitors with the same tools match you. Elevation toward strategy is how AI becomes competitive advantage rather than table stakes.",
      paragraphs: [
        [
          s("Map capacity freed by AI explicitly in quarterly planning. "),
          x(
            "Document hours saved by workflow. Allocate percentages: 50% reinvest in strategic projects (research, positioning, ABM depth), 30% quality improvement (curation, testing), 20% selective volume increase.",
            "Without allocation, savings evaporate into email and meetings.",
          ),
          s(" Leadership reviews reinvestment allocation — not just savings claims."),
        ],
        [
          s("Strategic work AI cannot do becomes more valuable. "),
          x(
            "Customer interviews, win-loss analysis, pricing narrative, competitive repositioning, executive storytelling, partnership marketing — these require human relationships and judgment. AI assists synthesis; it does not replace discovery.",
            "Marketers who spend freed time here compound advantage; those who spend it on more blog posts do not.",
          ),
          s(" Block calendar time for strategic work — treat it as protected as customer meetings."),
        ],
        [
          s("Elevate metrics alongside activity metrics. "),
          x(
            "Report pipeline influenced by strategic initiatives enabled by AI capacity — not only content count. 'Original research report generated 3x press mentions' beats 'we published 40 AI-assisted posts'.",
            "What you measure signals what you value. Elevation requires elevation metrics.",
          ),
          s(" Include one strategic outcome metric in every marketing QBR — tied to capacity redeployment story."),
        ],
      ],
      examples: [
        {
          title: "Research report pivot",
          body: "A payroll software company used AI to cut blog production time 45%, redeployed capacity to annual 'State of SMB Payroll' survey — human-led research, AI-assisted analysis and drafting. Report became top lead magnet, 2x press coverage versus prior year. Strategic elevation beat volume scaling.",
        },
        {
          title: "ABM depth investment",
          body: "An enterprise marketer reduced generic nurture volume 30% via AI efficiency, reinvested in account-specific research and personalised executive outreach for top 50 accounts. Pipeline from target accounts rose 35% while total email sends dropped. AI enabled focus, not sprawl.",
        },
        {
          title: "Elevation metric in QBR",
          body: "A CMO added 'strategic initiative outcomes' slide: hours redeployed, initiatives completed, pipeline attributed. Shifted conversation from 'AI content count' to 'AI enabled ABM programme'. Board support increased for marketing headcount hold — AI seen as leverage, not headcount threat.",
        },
      ],
    }),
    buildSection({
      number: "8.7",
      title: "Collaboration with Technical Teams",
      subtitle: "Marketing owns outcomes; engineering and data own infrastructure — meet in the middle",
      take: "Effective AI marketing requires partnership with data, engineering, legal, and IT — not shadow IT where marketers paste customer data into unapproved tools. Collaboration means shared governance, integrated workflows, and mutual literacy: marketers understand enough technical constraints to brief responsibly; technical teams understand enough marketing context to build useful integrations.",
      why: "Marketing-led AI shadow operations create privacy incidents, broken integrations, and shelfware. Collaborative models embed AI in martech stack with appropriate controls — slower to start, faster at scale.",
      paragraphs: [
        [
          s("Build a marketing-technology AI working group with clear charter. "),
          x(
            "Members: marketing ops, one channel lead, data/analytics, IT security, legal. Monthly 60 minutes: tool requests, incident review, workflow integration priorities. Decisions: approved tool list, data classification policy, integration roadmap.",
            "Working group prevents both reckless adoption and bureaucratic paralysis.",
          ),
          s(" Escalation path defined: marketer requests tool → working group triage within two weeks → pilot or decline with reason."),
        ],
        [
          s("Speak each other's language at the boundary. "),
          x(
            "Marketers bring: use case, audience, success metric, workflow diagram, sample inputs/outputs. Technical teams bring: data flow, security requirements, integration points, SLA, cost model.",
            "Shared document template for AI use case requests reduces friction and incomplete asks.",
          ),
          s(" Marketing owns the brief quality; technical teams own the architecture — joint ownership of outcome."),
        ],
        [
          s("Celebrate integrated workflows over hero tools. "),
          x(
            "AI embedded in CMS with SSO and metadata beats standalone tool requiring copy-paste. Integration requests should be prioritised by measured workflow pain — marketing ops brings data from scorecard.",
            "Technical collaboration succeeds when marketing articulates business case for integration, not just feature wish list.",
          ),
          s(" Quarterly joint demo: marketing shows workflow; engineering shows roadmap — alignment in public."),
        ],
      ],
      examples: [
        {
          title: "Working group tool approval",
          body: "A bank's marketing-technology AI working group approved enterprise AI writing tool after legal DPIA — six-week process. Marketing gained approved tool with zero-retention clause; IT gained visibility into data flows. Shadow ChatGPT usage dropped 70% in internal monitoring because approved path was faster than fear.",
        },
        {
          title: "Use case brief template",
          body: "A SaaS company's joint AI request template: use case, data classification, volume forecast, success metric, workflow diagram. Engineering reported 50% fewer back-and-forth emails on requests. First integration — AI draft inside CMS — shipped in one sprint because brief was complete.",
        },
        {
          title: "Shadow IT incident prevention",
          body: "A retail marketer nearly pasted loyalty programme data into a free AI tool for 'segmentation ideas'. Data team member in working group had published red-tier data poster in break room; colleague stopped the paste. Collaboration culture plus visible policy prevented incident. Technical partnership is risk management.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "8.8",
      title: "The Marketer Decision Lens — Your 90-Day Plan",
      subtitle: "Four phases to build durable AI marketing habits — one workflow, one metric, one quarter",
      take: "90-day plan: Days 1–30 — master one high-volume workflow with voice guide, prompts, and curation rubric; measure baseline time and quality. Days 31–60 — iterate prompts from diff analysis; run one disciplined experiment with kill criteria. Days 61–90 — scorecard review, redeploy capacity to one strategic initiative, present results to leadership. Repeat quarterly.",
      why: "Mindset without a plan is aspiration. The 90-day structure turns amplifier thinking, curation, iteration, and measurement into habits that compound — applicable whether you are a team of one or fifty.",
      paragraphs: [
        [
          s("Days 1–30: one workflow, measured baseline. "),
          x(
            "Pick highest-volume asset type (e.g. nurture email, product description, social post). Build voice module and system prompt. Log end-to-end time and quality baseline for 10 assets. Name curator and gate owner.",
            "Do not add a second workflow until the first has baseline data.",
          ),
          s(" Deliverable at day 30: baseline report — time, quality, rejection rate."),
        ],
        [
          s("Days 31–60: iterate and experiment. "),
          x(
            "Weekly diff analysis → prompt updates. Launch one experiment card with hypothesis and kill criterion. Track adoption: is the team using the workflow without reminders?",
            "Month two is improvement, not expansion.",
          ),
          s(" Deliverable at day 60: prompt library v2, experiment interim result, adoption rate."),
        ],
        [
          s("Days 61–90: scorecard and strategic redeployment. "),
          x(
            "Run six-metric scorecard from chapter 7. Decide: scale, fix, or kill workflow. Allocate freed hours to one strategic initiative with measurable outcome. Present 90-day review to leadership: honest results, next quarter plan.",
            "Quarterly rhythm repeats: baseline → iterate → scorecard → elevate.",
          ),
          s(" Deliverable at day 90: scorecard slide, strategic initiative progress, next quarter's one workflow or one experiment commitment."),
        ],
      ],
      examples: [
        {
          title: "Solo marketer 90-day execution",
          body: "A solo B2B marketer chose LinkedIn posts as sole workflow. Days 1–30: voice module, prompt, tracked 90 min/post average. Days 31–60: diff analysis cut to 45 min; experimented with carousel format — 20% engagement lift. Days 61–90: redeployed 3 hours/week to customer interview series; one interview became top post of quarter. Plan worked at individual scale.",
        },
        {
          title: "Team 90-day with leadership review",
          body: "A 12-person content team ran unified 90-day on blog workflow. Day 90 presentation: 32% time reduction, quality within 5% baseline, one experiment scaled (AI outline + human research), hours redeployed to original survey project. Leadership approved Q2 expansion to email only — disciplined sequencing, not simultaneous rollout.",
        },
        {
          title: "Failed 90-day — honest reset",
          body: "A team's 90-day plan targeted podcast show notes — low volume, irregular cadence, poor baseline data. Day 45 review: insufficient data, kill workflow, restart with weekly email workflow. Honest reset beat persisting with wrong workflow. Mindset includes willingness to restart with better selection.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-ch8-mindset-loop",
      type: "flow",
      title: "AI Marketing Mindset Loop",
      caption:
        "Experiment → curate → systematise → measure → elevate strategy. Repeat quarterly — the loop compounds, tools do not.",
    }),
  ],
  quiz: [
    {
      q: "A marketer complains 'AI just produces generic garbage.' What is the most likely root cause under the amplifier mindset?",
      options: [
        "The model is too old — upgrade immediately.",
        "The brief lacked strategic clarity — audience, proof, voice — and AI amplified weak input; fix the brief and prompts before blaming the tool.",
        "Marketing should avoid AI entirely.",
        "Generic output means you need to generate more variants.",
      ],
      correct: 1,
      correctFeedback:
        "Right. AI amplifies input quality. Weak briefs produce weak output at scale. Re-read section 8.1.",
      wrongFeedback:
        "Amplifier logic: audit brief and prompt quality first. AI multiplies what you bring to it. Re-read section 8.1.",
    },
    {
      q: "Your team publishes 90% of AI drafts without rejection to hit volume targets. What mindset issue is this?",
      options: [
        "Excellent efficiency — maximise throughput.",
        "Curation failure — rejection discipline protects brand; high publish rates without quality gates indicate automated mediocrity.",
        "Iteration habit is working well.",
        "Strategic elevation is achieved.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Curation requires rejection. Publishing everything to hit volume is the opposite of amplifier mindset. Re-read section 8.2.",
      wrongFeedback:
        "In abundance, curation — including rejection — is the scarce skill. Volume without gates erodes quality. Re-read section 8.2.",
    },
    {
      kind: "order",
      q: "Order the 90-day AI marketing plan phases from first to last.",
      prompt: "Drag to arrange from day 1 (top) to day 90 (bottom).",
      items: [
        "Master one workflow; measure time and quality baseline",
        "Iterate prompts from diffs; run one disciplined experiment",
        "Scorecard review; redeploy capacity to strategic initiative; present to leadership",
      ],
      correctFeedback:
        "Right. Baseline → iterate and experiment → scorecard and elevation. Do not skip to expansion without measurement. Re-read section 8.8.",
      wrongFeedback:
        "Start with one measured workflow, then iterate, then scorecard and strategic redeployment. Re-read section 8.8.",
    },
    {
      kind: "categorize",
      q: "Sort each practice into the primary mindset pillar it develops.",
      categories: ["Amplifier", "Curation", "Iteration", "Strategic elevation"],
      items: [
        { text: "Auditing brief quality before blaming AI output.", category: 0 },
        { text: "Tracking rejection rate of AI drafts with annotated reasons.", category: 1 },
        { text: "Version-controlling prompts and updating from edit diffs.", category: 2 },
        { text: "Redeploying saved hours to original customer research.", category: 3 },
        { text: "Maintaining a human-first asset list for crisis comms.", category: 0 },
        { text: "Weekly senior-junior review of accepted vs rejected AI copy.", category: 1 },
      ],
      correctFeedback:
        "Right. Amplifier = input and role clarity. Curation = selection skill. Iteration = prompt refinement. Elevation = strategic redeployment. Re-read sections 8.1–8.6.",
      wrongFeedback:
        "Match each practice to whether it improves inputs, selection, prompts, or strategic focus. Re-read sections 8.1–8.6.",
    },
    {
      q: "A marketer wants to try five new AI tools this month. What is disciplined guidance?",
      options: [
        "Approve all — experimentation is always good.",
        "Apply quarterly 'one new thing' rule: integrate one capability per quarter with 90-day proof before adding the next — avoid tool tourism.",
        "Ban all new tools permanently.",
        "Let each team member choose their own tools.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Staying current requires discipline, not hype-chasing. Depth beats breadth. Re-read section 8.4.",
      wrongFeedback:
        "Sustainable learning is one meaningful integration per quarter with measurement — not perpetual tool switching. Re-read section 8.4.",
    },
    {
      q: "Marketing wants a new AI tool; IT requests a use case brief with data classification. Best response?",
      options: [
        "Bypass IT — speed matters more than security.",
        "Collaborate: complete the joint brief with workflow, metrics, and data tier — working group partnership prevents shadow IT and enables approved integration.",
        "Cancel the tool request — IT is blocking innovation.",
        "Use the tool secretly until caught.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Marketing-technology collaboration protects the organisation and speeds approved adoption. Re-read section 8.7.",
      wrongFeedback:
        "Shadow IT creates privacy and integration risk. Joint briefs and working groups enable safe speed. Re-read section 8.7.",
    },
  ],
});
