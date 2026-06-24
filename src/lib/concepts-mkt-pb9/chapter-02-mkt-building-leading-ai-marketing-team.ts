import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter02MktBuildingLeadingAiMarketingTeam = buildChapter({
  slug: "mkt-building-leading-ai-marketing-team",
  number: 2,
  shortTitle: "Building & Leading an AI-Powered Marketing Team",
  title: "Building & Leading an AI-Powered Marketing Team",
  readingMinutes: 24,
  summary:
    "AI-era marketing teams shift from producer-heavy to strategist-editor-analyst-ops composition. Leaders hire for judgment and AI fluency, build literacy through practice not slides, govern quality at scale, maintain shared prompt libraries, select tools with discipline, and measure productivity by outcomes not activity. This chapter covers structure, hiring, training, governance, shared assets, tool rollout, productivity metrics, and the operating model that makes AI-augmented teams excellent.",
  keyTakeaway:
    "Lead AI-powered marketing teams by designing roles for curation and strategy, not headcount for drafts. Invest in literacy, governance, and shared workflows before licences. Measure leverage — pipeline, quality, cycle time — not AI output volume.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "2.1",
      title: "The AI-Era Marketing Team Structure",
      subtitle: "How AI changes optimal team composition — fewer producers, more strategists, analysts, and hybrid roles that did not exist five years ago",
      take: "AI compresses production headcount needs and expands strategy, analytics, and operations roles. Optimal structure: strategists own ICP, positioning, and channel mix; editors curate AI output to brand standard; analysts interpret data and feed insights to campaigns; ops owns workflow, MarTech, and prompt libraries. Hybrid roles emerge — marketing technologist, AI workflow designer, content engineer. Teams still sized for outcomes, not output — a five-person AI-augmented team often matches fifteen-person legacy team on quality-adjusted throughput.",
      why: "Wrong structure hires producers AI replaces while starving strategy and governance. Restructure before morale and budget crises.",
      paragraphs: [
        [
          s("Map current roles against AI delegation map. "),
          x(
            "Identify FTE time on tasks AI now handles: drafting, formatting, basic reporting, asset resizing. Roles above 50% delegable tasks need redesign, not more hires.",
            "Producer titles without editorial or strategic accountability become redundant.",
          ),
          s(" Target ratio shift: increase strategist and analyst share by 20–30% over two planning cycles."),
        ],
        [
          s("Define hybrid roles with clear accountability. "),
          x(
            "Marketing ops + AI workflow owner maintains prompt library and integrations. Content strategist + editor approves AI batches. Demand gen + analyst owns funnel diagnostics with AI-assisted exploration.",
            "Hybrid without RACI creates 'everyone prompts, nobody owns quality.'",
          ),
          s(" Publish team charter with role boundaries — review when tools or scale change."),
        ],
        [
          s("Right-size team to business motion — not competitor headcount. "),
          x(
            "PLG SaaS needs analyst-heavy; brand DTC needs creative direction-heavy; enterprise ABM needs strategist-heavy. AI multiplies whichever discipline you invest in.",
            "Copying FAANG content team size without their tooling and workflow fails.",
          ),
          s(" Model capacity: campaigns per quarter × channels × review depth, not posts per week."),
        ],
      ],
      examples: [
        {
          title: "Restructure — Series B SaaS",
          body: "A 18-person marketing org had eight content producers. Restructured to three editors, two strategists, two demand gen analysts, one marketing ops/AI lead. AI handled draft volume. Pipeline per marketing FTE rose 41% in year one; regrettable attrition limited to roles without reskilling path.",
        },
        {
          title: "Hybrid hire — ecommerce",
          body: "DTC brand hired 'Marketing Operations & AI Workflow Manager' — owned Zapier, prompt library, and QA gates. Campaign launch errors dropped 60%; time-to-publish fell 35%. Role did not exist in job architecture three years prior — now template for peers.",
        },
        {
          title: "Overhire producers — media company",
          body: "Publisher hired six junior writers against traffic targets. AI writing tools adopted six months later — redundancy conflict. Painful redeployment into newsletter strategy and audience research. Lesson: hire for judgment layers when AI production is baseline.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-era-ch2-team-model",
      type: "nested",
      title: "AI-Era Marketing Team Model",
      caption:
        "Strategists set direction; editors curate AI output; analysts inform decisions; ops scales workflow. Fewer pure producers.",
    }),
    buildSection({
      number: "2.2",
      title: "Hiring for AI-Era Marketing",
      subtitle: "Skills, mindset, and demonstrated behaviours to look for in candidates who will thrive in an AI-augmented function",
      take: "Hire for judgment, learning velocity, and workflow discipline — not tool brand loyalty. Strong candidates show portfolio with AI-assisted work annotated: what they briefed, what they edited, what they rejected. Interview tasks: improve a weak AI draft, design a workflow for recurring campaign, critique hallucinated analytics summary. Red flags: pride in volume without quality, inability to explain prompt choices, resistance to documentation. Mindset: AI as leverage, not threat or crutch.",
      why: "Bad hires amplify AI slop at scale. Hiring bar is the quality ceiling for AI-augmented output.",
      paragraphs: [
        [
          s("Design interview tasks that reveal curation skill. "),
          x(
            "Give candidate off-brand AI paragraph — ask for structured critique and rewrite. Give messy campaign brief — ask for prompt outline and quality gates.",
            "Tasks testing only manual writing miss how job actually works.",
          ),
          s(" Score rubric: strategic fit, voice, accuracy, workflow thinking — not speed alone."),
        ],
        [
          s("Probe learning velocity and experimentation habit. "),
          x(
            "Ask: last tool or workflow they adopted, how they measured impact, what failed. Strong candidates iterate monthly; weak candidates wait for mandated training.",
            "Tool-specific certification matters less than demonstrated self-teaching.",
          ),
          s(" Reference check: quality under pressure and collaboration on shared assets."),
        ],
        [
          s("Balance specialists with AI-fluent generalists by team need. "),
          x(
            "Early-stage teams need generalists who prompt across channels; scaled teams need deep channel experts who encode expertise into libraries.",
            "Hiring only AI enthusiasts without domain depth produces generic marketing.",
          ),
          s(" Job descriptions state AI-augmented expectations explicitly — attracts right applicants."),
        ],
      ],
      examples: [
        {
          title: "Portfolio review — content hire",
          body: "Finalists submitted campaign with 'AI collaboration appendix' — prompts, rejected drafts, final rationale. Winner showed 40% time savings with higher engagement vs prior role samples. Loser submitted polished pieces with no process visibility — hired elsewhere, struggled with team workflow.",
        },
        {
          title: "Analyst task — demand gen",
          body: "Demand gen candidate given CSV and AI summary with embedded error. Candidate identified duplicate counting and proposed verification checklist. Hired; built team analytics lab practice. Peer candidate accepted AI summary — rejected.",
        },
        {
          title: "JD refresh — employer brand",
          body: "Company rewrote marketing JDs: 'You will design AI-assisted workflows and curate output to brand standard' — applications from stronger operators rose; vanity 'AI prompt engineer' title without marketing depth filtered out in screen.",
        },
      ],
    }),
    buildSection({
      number: "2.3",
      title: "Building AI Literacy Across the Marketing Team",
      subtitle: "Training programme, practice environment, and skill development cadence that builds consistent team AI capability",
      take: "AI literacy training fails as one-hour webinar. Effective programmes combine: safe practice environment (sandbox tools, non-production data), hands-on labs on real workflows, peer teaching, and monthly skill cadence. Literacy levels: awareness → guided practice → independent workflow ownership → library contribution. Marketing leaders model usage — executives who ban AI while demanding speed undermine adoption. Measure literacy by work samples and gate compliance, not course completion.",
      why: "Inconsistent literacy creates inconsistent brand and compliance risk. Team capability must be trained, not assumed.",
      paragraphs: [
        [
          s("Launch with workflow-based labs, not generic prompting 101. "),
          x(
            "Lab one: email campaign workflow end to end. Lab two: analytics verification. Lab three: creative brief and rubric. Use actual brand voice docs and compliance rules.",
            "Generic ChatGPT tips do not transfer to marketing guardrails.",
          ),
          s(" Cap lab size for feedback — 8–12 per session with expert coach."),
        ],
        [
          s("Create practice environment with clear data boundaries. "),
          x(
            "Enterprise: Claude Team or approved tools with DPA; no pasting customer PII into public free tiers. Sandbox projects with redacted briefs for new hires.",
            "Shadow IT from literacy gaps is security incident waiting to happen.",
          ),
          s(" Publish approved tool list and prohibited practices — update when legal reviews."),
        ],
        [
          s("Institute monthly literacy cadence and peer learning. "),
          x(
            "Show-and-tell: one team member demos workflow improvement. Rotating 'prompt of the month' contribution. Quarterly external workshop or certification budget.",
            "Literacy decays without practice — model upgrades require refresh.",
          ),
          s(" Tie literacy milestones to performance reviews — explicit expectation."),
        ],
      ],
      examples: [
        {
          title: "Literacy programme — financial services marketing",
          body: "Eight-week programme: compliance-first prompting, workflow labs, capstone audited campaign. All marketers passed capstone before solo AI publish rights. Compliance incidents zero in twelve months; production velocity up 45%.",
        },
        {
          title: "Peer teaching — agency pod",
          body: "Agency pods ran biweekly 'workflow swap' — each pod shares one optimisation. Cross-pollination reduced duplicate prompt building. Utilisation improved without headcount — won efficiency pitch to retain margin.",
        },
        {
          title: "Webinar failure — retail marketing",
          body: "One-hour AI overview with no follow-up labs. Adoption stalled at 20%; shadow tool use rose. Replaced with six-week lab programme and ops office hours. Adoption hit 85%; IT security audit clean.",
        },
      ],
    }),
    buildSection({
      number: "2.4",
      title: "AI Governance for Marketing Teams",
      subtitle: "Content review process, brand quality standards, and publication workflow that prevents quality failures at scale",
      take: "AI governance for marketing is publication discipline at higher volume: tiered review by risk (social post vs regulated claim), brand scorecards, fact-check requirements for statistics, legal review triggers, and audit trails. Governance docs define what AI may draft alone, what requires human sign-off, and what is prohibited (competitor disparagement without legal, medical claims). Speed comes from clear tiers — not skipping review. Crisis playbook covers AI error in market.",
      why: "Scale without governance scales embarrassment and liability. One viral AI mistake costs more than governance overhead.",
      paragraphs: [
        [
          s("Implement tiered review by content risk class. "),
          x(
            "Tier 1 (low): internal brainstorm, non-published drafts — AI + self-review. Tier 2 (medium): blog, social — editor gate. Tier 3 (high): paid ads, regulated industry, executive byline — legal or compliance gate.",
            "Flat review for everything bottlenecks; no review for anything invites crisis.",
          ),
          s(" Document tiers in workflow tool — automated routing by content type."),
        ],
        [
          s("Maintain brand quality scorecard applied to all AI-assisted assets. "),
          x(
            "Dimensions: voice, accuracy, differentiation, accessibility, compliance. Sub-4 scores return to author with structured feedback — not silent override at gate.",
            "Scorecards align editors and reduce subjective arguments.",
          ),
          s(" Sample 10% of published AI-assisted content monthly for audit — trend scores."),
        ],
        [
          s("Define prohibited uses and escalation paths. "),
          x(
            "Prohibited: uploading customer lists to unapproved tools, generating fake testimonials, fabricating statistics, impersonating individuals. Escalation: legal, comms, CMO by severity.",
            "Grey areas — AI 'inspired by' customer stories — require anonymisation standards.",
          ),
          s(" Annual governance refresh with legal — especially when entering new markets."),
        ],
      ],
      examples: [
        {
          title: "Tiered workflow — pharma marketing",
          body: "Pharma marketing implemented three-tier review in Veeva-aligned workflow. AI drafts Tier 2 only after approved brief. Tier 3 requires MLR. Cycle time still beat fully manual drafting by 30% — tiers removed ambiguity, not rigour.",
        },
        {
          title: "Scorecard rollout — tech company",
          body: "Brand team published AI content scorecard in Notion. Editors trained on calibration session — inter-rater reliability 92%. Revision rounds dropped; brand NPS from sales on marketing materials rose.",
        },
        {
          title: "Governance gap — fabricated stat",
          body: "AI blog cited unverifiable market size; picked up by partner newsletter. Retraction and apology required. Post-incident: mandatory source citation field in CMS for AI-assisted posts; fact-check prompt step added. Governance cost less than reputational repair.",
        },
      ],
    }),
    buildSection({
      number: "2.5",
      title: "The Shared Prompt Library",
      subtitle: "Team prompt templates, workflow documentation, and AI SOPs that make capability consistent and transferable",
      take: "Shared prompt library is institutional memory for AI marketing: channel templates, analysis prompts, compliance blocks, voice attachments, and workflow SOPs. Structure by use case — not employee name. Version control when brand or regulation changes. Owners maintain quality; contributors propose via review. Library reduces onboarding time, prevents prompt reinvention, and captures expert encoding of channel norms. Integrate with Projects in Claude Team or equivalent — not scattered Slack pins.",
      why: "Without shared library, quality varies by individual and leaves when people leave.",
      paragraphs: [
        [
          s("Organise library by workflow and channel — searchable metadata. "),
          x(
            "Tags: channel, content type, risk tier, last validated date, owner. Include example inputs and expected output shape.",
            "Libraries organised by 'Sarah's prompts' fail when Sarah leaves.",
          ),
          s(" Quarterly cleanup — archive deprecated prompts; flag untested after model upgrade."),
        ],
        [
          s("Assign library owner with contribution workflow. "),
          x(
            "Marketing ops or AI workflow lead approves additions. Pull request model: propose, peer test, merge. High performers contribute as performance expectation.",
            "Ownerless libraries become junk drawers within six months.",
          ),
          s(" Measure library usage — unused prompts archived or improved."),
        ],
        [
          s("Pair prompts with SOPs — prompt alone is insufficient. "),
          x(
            "Each template links to workflow doc: when to use, gates after, tools required, data restrictions. SOP without prompt is incomplete; prompt without SOP is dangerous.",
            "New hire reads SOP first, runs prompt second — onboarding sequence.",
          ),
          s(" Export critical workflows to LMS or handbook for audit trail."),
        ],
      ],
      examples: [
        {
          title: "Library launch — B2B marketing team",
          body: "Team migrated 40 prompts from Slack to Notion with SOP links. Onboarding time cut from six weeks to eleven days for on-brand output. Contribution KPI: one prompt or improvement per marketer per quarter — 100% participation year one.",
        },
        {
          title: "Version control — rebrand",
          body: "Rebrand invalidated 60% of voice-dependent prompts. Library owner ran 'rebrand sprint' — updated templates in two weeks with version tags. No off-brand AI output during transition — old prompts archived, not deleted silently.",
        },
        {
          title: "Siloed expertise — acquisition",
          body: "Acquired startup's best performer held prompts privately. Integration failed until library mandate and incentive. Documented workflows recovered 80% of productivity differential within one quarter.",
        },
      ],
    }),
    buildSection({
      number: "2.6",
      title: "AI Tool Selection for Marketing Teams",
      subtitle: "Criteria, pilot process, and rollout discipline that prevents tool sprawl across the marketing organisation",
      take: "Team tool selection starts with use case, not vendor demo: which workflow gap, which integration requirements, which data classification. Criteria: capability fit, SSO/admin, data handling, pricing at team scale, support. Pilot one team on one workflow 30 days before org-wide licence. Rollout includes training, library integration, and sunset of overlapping tools. Marketing leaders align with IT and procurement — shadow subscriptions are security and budget risk.",
      why: "Tool sprawl duplicates cost, fragments voice, and confuses governance. Selection discipline is leadership work.",
      paragraphs: [
        [
          s("Require use-case brief before any team AI tool trial. "),
          x(
            "Brief: workflow supported, users, data types, integrations, success metrics, alternatives considered. Reject 'everyone wants ChatGPT' without workflow anchor.",
            "Overlapping writing tools — Jasper plus Claude plus Copilot — waste budget and split libraries.",
          ),
          s(" Centralise trials through marketing ops — single tracker visible to leadership."),
        ],
        [
          s("Run structured pilot with exit criteria. "),
          x(
            "30-day pilot: 5–8 users, one workflow, baseline time/quality measured. Exit: adopt, extend pilot, or kill. Kill is success — prevents shelfware.",
            "Enterprise rollout without pilot discovers misfit at renewal.",
          ),
          s(" Document pilot results in tool decision memo — procurement artifact."),
        ],
        [
          s("Integrate adopted tools into library, training, and governance day one. "),
          x(
            "Adoption without integration recreates individual silos. SSO, audit logs, and data policy alignment before broad access.",
            "Free tiers for team use often violate enterprise data policy — block proactively.",
          ),
          s(" Annual overlap review — consolidate licences at renewal."),
        ],
      ],
      examples: [
        {
          title: "Pilot discipline — creative AI",
          body: "Team piloted two image AI tools on ad creative workflow only. Measured revision time and brand score. One tool won; other killed before annual contract. Saved $35K and avoided dual-library confusion.",
        },
        {
          title: "IT alignment — enterprise SaaS",
          body: "Marketing requested Claude Team; IT security review completed before purchase. DPA signed; SSO enabled. Shadow use of personal accounts dropped 90% post-rollout — governance enforceable.",
        },
        {
          title: "Sprawl cleanup — scale-up",
          body: "Audit found 14 AI-related subscriptions across marketing. Consolidated to four approved tools with clear RACI. Redirected $62K annual savings to analyst hire — better ROI than redundant licences.",
        },
      ],
    }),
    buildSection({
      number: "2.7",
      title: "Measuring Team AI Productivity",
      subtitle: "Metrics that distinguish genuine productivity improvement from activity inflation when AI augments marketing output",
      take: "AI productivity metrics must separate leverage from noise: cycle time per campaign, rework rate, quality scores, pipeline or revenue per FTE, not raw post count. Activity inflation — 3× tweets at same engagement — is anti-productivity. Track before/after baselines when adopting workflows. Survey stakeholder satisfaction (sales, product, executives). Monitor error and compliance incidents — speed with mistakes is negative value. Dashboard AI usage alongside outcomes, not instead of them.",
      why: "Wrong metrics reward slop and burn brand. Leaders need outcome-linked productivity evidence for headcount and tool decisions.",
      paragraphs: [
        [
          s("Establish baseline metrics before AI workflow rollout. "),
          x(
            "Capture: hours per deliverable, revision rounds, time-to-publish, quality audit scores, pipeline influenced per quarter. Baseline makes improvement credible to finance.",
            "Announcing '50% faster' without baseline invites scepticism.",
          ),
          s(" Re-measure at 60 and 120 days — allow learning curve."),
        ],
        [
          s("Weight quality and outcomes equal to speed. "),
          x(
            "Composite score: 40% cycle time, 30% quality audit, 30% business outcome (SQLs, revenue, NPS). Pure speed incentives skip review gates.",
            "Engagement rate per piece beats post volume for content teams.",
          ),
          s(" Review metrics in monthly marketing leadership — adjust weights if gaming appears."),
        ],
        [
          s("Watch for activity inflation and burnout signals. "),
          x(
            "Rising output with flat outcomes means wrong leverage. Rising weekend work with AI means workflow broken, not successful.",
            "Team surveys on 'AI reduced grunt work' vs 'AI increased pressure' — qualitative balance check.",
          ),
          s(" Cap output targets — quality floor matters more than volume ceiling."),
        ],
      ],
      examples: [
        {
          title: "Balanced scorecard — content team",
          body: "Content team KPI shifted from articles/month to composite: cycle time, brand score, organic pipeline. Article count fell 15%; pipeline rose 22%. CMO defended team size to board with outcome metrics — retained budget in downsizing cycle.",
        },
        {
          title: "Activity trap — social team",
          body: "Social team praised for 4× post volume post-AI. Engagement rate halved; unfollows rose. Reset KPIs to engagement and conversion. Post volume cut 50%; revenue from social recovered.",
        },
        {
          title: "Productivity proof — demand gen",
          body: "Demand gen documented campaign launch cycle 12 days to 7 with AI research and draft workflows. SQL volume up 18% same headcount. Used evidence to secure headcount for strategist vs producer — structural win.",
        },
      ],
    }),
    buildSection({
      number: "2.8",
      title: "Marketer Decision Lens: The AI-Powered Marketing Team Operating Model",
      subtitle: "Meeting cadence, review processes, creative workflow, and performance culture that makes an AI-augmented team excellent rather than merely efficient",
      take: "Operating model integrates structure, governance, library, and metrics into rhythm: weekly creative review of AI-assisted batch, biweekly workflow improvement slot, monthly literacy show-and-tell, quarterly tool and library audit. Meetings protect strategy time — not status theatre. Performance culture celebrates curation and documented improvement, not busiest prompt user. Decision lens for leaders: before next hire or tool, can current operating model absorb change? If governance and library are weak, fix model before scaling.",
      why: "Efficiency without operating model produces fast mediocre marketing. Excellence requires rhythm and culture.",
      paragraphs: [
        [
          s("Design meeting cadence around batches and gates — not emergencies. "),
          x(
            "Weekly editor batch review; Monday campaign intel; Friday workflow retro. Async AI draft production between sync gates.",
            "Meeting-heavy cultures negate AI time savings — audit calendar quarterly.",
          ),
          s(" Default no-meeting blocks for deep strategy and library contribution."),
        ],
        [
          s("Embed AI workflow in existing PM and campaign rituals. "),
          x(
            "Brief template includes AI steps; Asana/Monday tasks include gate checkpoints; retros capture prompt improvements.",
            "Parallel shadow process fails — integrate or abandon.",
          ),
          s(" Campaign retro must answer: what prompt or workflow change helps next launch?"),
        ],
        [
          s("Culture: excellence is curated output plus shared learning. "),
          x(
            "Recognise library contributions and quality catches, not raw volume. Tolerate failed experiments documented — punish hiding shadow tools or skipping gates.",
            "Leader behaviour sets tone — CMO shares own edited AI drafts with commentary.",
          ),
          s(" Operating model doc living in handbook — onboarding day one."),
        ],
      ],
      examples: [
        {
          title: "Operating model rollout — global marketing",
          body: "Global team adopted standard operating model across four regions. Weekly batch review timezone-rotated; library single source. Brand consistency score rose cross-region; duplicate tool spend eliminated through shared standards.",
        },
        {
          title: "Calendar reform — CMO intervention",
          body: "CMO audit found 24 hours weekly in meetings for direct reports. Cut standing meetings 40%; replaced with async updates and protected workflow blocks. AI time savings actually materialised — team NPS rose.",
        },
        {
          title: "Scale without model — churn",
          body: "Team doubled headcount without operating model update. Inconsistent quality, library neglected, governance bypassed. Reset: hiring pause, model fix, then growth. Expensive lesson in sequencing.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Optimal AI-era marketing team shifts toward which composition?",
      options: [
        "More junior producers for draft volume",
        "More strategists, editors, analysts, and ops hybrids",
        "Eliminating all human review for speed",
        "Outsourcing all strategy to AI tools",
      ],
      correct: 1,
      correctFeedback:
        "Right. Structure favours judgment and systems roles. Re-read section 2.1.",
      wrongFeedback:
        "AI-era teams need strategists, editors, and analysts — not producer armies. Re-read section 2.1.",
    },
    {
      kind: "order",
      q: "Order team AI tool adoption from first to last.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Use-case brief and workflow anchor",
        "30-day structured pilot with metrics",
        "Security and data policy alignment",
        "Library and training integration",
        "Org-wide rollout and overlap sunset",
      ],
      correctFeedback:
        "Right. Brief, pilot, secure, integrate, rollout. Re-read section 2.6.",
      wrongFeedback:
        "Tool adoption requires brief and pilot before org rollout. Re-read section 2.6.",
    },
    {
      kind: "categorize",
      q: "Sort each item into governance tier 2 (editor gate) vs tier 3 (legal/compliance gate).",
      categories: ["Tier 2 — editor gate", "Tier 3 — legal/compliance"],
      items: [
        { text: "Standard blog post with no regulated claims.", category: 0 },
        { text: "Paid pharma ad with efficacy claim.", category: 1 },
        { text: "Organic LinkedIn post from company page.", category: 0 },
        { text: "Financial product comparison landing page.", category: 1 },
        { text: "Newsletter with product tips, no claims.", category: 0 },
        { text: "Executive byline on industry regulation.", category: 1 },
      ],
      correctFeedback:
        "Right. Risk tier drives review depth. Re-read section 2.4.",
      wrongFeedback:
        "Regulated claims require tier 3 gates. Re-read section 2.4.",
    },
    {
      q: "Best interview task for AI-era marketing hire?",
      options: [
        "Speed-typing test without AI",
        "Critique and improve a weak AI draft with rubric",
        "Name every AI tool on the market",
        "Promise maximum daily post volume",
      ],
      correct: 1,
      correctFeedback:
        "Right. Curation skill is the hiring signal. Re-read section 2.2.",
      wrongFeedback:
        "Hire for judgment and curation, not volume. Re-read section 2.2.",
    },
    {
      q: "Which metric best detects AI activity inflation?",
      options: [
        "Raw post count doubling while engagement rate halves",
        "Library contribution per marketer",
        "Cycle time reduction with stable quality scores",
        "Compliance incidents trending to zero",
      ],
      correct: 0,
      correctFeedback:
        "Right. Volume without outcomes is inflation. Re-read section 2.7.",
      wrongFeedback:
        "Outcome and quality metrics beat raw volume. Re-read section 2.7.",
    },
    {
      kind: "categorize",
      q: "Match operating model element to purpose.",
      categories: ["Builds team capability", "Symptom of weak operating model"],
      items: [
        { text: "Weekly AI-assisted batch review.", category: 0 },
        { text: "Shadow personal tool accounts with customer data.", category: 1 },
        { text: "Shared prompt library with owners.", category: 0 },
        { text: "Skipping gates to hit volume targets.", category: 1 },
        { text: "Monthly literacy show-and-tell.", category: 0 },
        { text: "Prompts stored only in private Slack DMs.", category: 1 },
      ],
      correctFeedback:
        "Right. Rhythm and shared assets enable excellence. Re-read section 2.8.",
      wrongFeedback:
        "Operating model requires gates, library, and learning rhythm. Re-read section 2.8.",
    },
  ],
});
