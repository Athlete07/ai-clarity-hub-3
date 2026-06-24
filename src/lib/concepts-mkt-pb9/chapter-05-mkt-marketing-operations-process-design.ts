import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter05MktMarketingOperationsProcessDesign = buildChapter({
  slug: "mkt-marketing-operations-process-design",
  number: 5,
  shortTitle: "Marketing Operations & Process Design",
  title: "Marketing Operations & Process Design — Briefs, Production, QA, and Launch Systems That Scale AI-Assisted Output",
  readingMinutes: 24,
  summary:
    "Marketing operations is the delivery backbone of the AI era — standardised briefs, governed intake, AI-assisted production, human QA gates, launch tracking, and measurement loops that turn creative ambition into repeatable outcomes. AI accelerates drafting, variant generation, and workflow routing, but speed without process design produces volume without quality, compliance risk, and attribution chaos. Teams that invest in ops architecture before tool sprawl ship faster with fewer errors; teams that bolt AI onto ad hoc email chains multiply rework.",
  keyTakeaway:
    "Process design is a competitive advantage, not bureaucracy. The sequence that wins: standardise briefs and intake → design production workflows with AI assist → enforce QA and approval gates → operationalise launch and tracking → close measurement loops → apply the decision lens before adding tools or headcount. AI multiplies throughput; marketers own definitions, handoffs, and error prevention.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "5.1",
      title: "Marketing Ops as the AI Delivery Backbone",
      subtitle: "Why process architecture precedes tool selection in scaled marketing organisations",
      take: "Marketing operations translates strategy into executable rhythm: who submits work, what inputs are required, how AI assists production, where humans approve, and how launches connect to measurement. In the AI era, ops is not back-office — it is the constraint that determines whether AI output is trustworthy, on-brand, and attributable. Leaders who treat ops as ticket-triage inherit rework; leaders who design ops as a product ship campaigns at predictable quality.",
      why: "AI removes friction from content creation but not from coordination. Without ops backbone, faster production becomes faster chaos.",
      paragraphs: [
        [
          s("Define ops scope beyond MarTech administration. "),
          x(
            "Modern marketing ops owns: intake and brief standards, workflow design, QA protocols, campaign launch checklists, UTM and tracking governance, SLA design with creative and demand gen, and performance feedback into process improvement. AI tools plug into this spine — not replace it.",
            "Ops reduced to 'Salesforce admin' leaves production, QA, and launch as tribal knowledge — AI scales tribal knowledge into organisation-wide mistakes.",
          ),
          s(" Ops charter signed by CMO and functional leads — scope, headcount, and escalation path documented."),
        ],
        [
          s("Map the end-to-end campaign lifecycle before automating steps. "),
          x(
            "Lifecycle: brief → produce → QA → approve → launch → track → measure → retrospective. AI accelerates produce and measure; humans own approve and governance gates. Marketers document decision rights at each stage — who can skip QA, who signs launch.",
            "Automating the middle of a broken lifecycle automates failure at higher velocity.",
          ),
          s(" Lifecycle diagram posted in team wiki — every new hire walks the same path on day one."),
        ],
        [
          s("Ops maturity correlates with AI ROI, not AI spend. "),
          x(
            "Mature ops: standard brief, templated AI prompts, brand guardrails, automated UTM, launch checklist, weekly retro. Immature ops: Slack requests, inconsistent filenames, manual tracking, post-hoc fixes. AI investment in immature ops yields 3x content and 3x errors.",
            "Vendor demos assume mature ops — your organisation may be at intake chaos stage.",
          ),
          s(" Assess ops maturity quarterly — brief compliance rate, QA catch rate, launch defect rate as leading indicators."),
        ],
      ],
      examples: [
        {
          title: "Ops charter — Series B SaaS",
          body: "Marketing had 14 AI tools and no ops owner. Campaigns launched with wrong UTMs 31% of the time. Hired marketing ops lead; published lifecycle charter and brief template. Six months later: launch defect rate 31% → 6%, creative rework hours down 44%, CMO credited ops as 'AI multiplier not AI mess.'",
        },
        {
          title: "Lifecycle before automation",
          body: "Team bought workflow automation to route AI drafts. Skipped brief standardisation — automation routed incomplete inputs to production. Paused automation; fixed brief gates first. Relaunched workflow with mandatory fields; throughput rose 28% with fewer rejections at QA.",
        },
        {
          title: "Maturity assessment gate",
          body: "AI copy tool POC showed 40% time savings in pilot. Org-wide rollout stalled — brief compliance 52%, no QA protocol. Deferred rollout; 90-day ops sprint. Re-pilot at 89% brief compliance — savings held at scale. Lesson: maturity gate before enterprise AI licences.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-era-ch5-marketing-ops",
      type: "flow",
      title: "Marketing Operations Lifecycle",
      caption:
        "Standardised brief → AI-assisted produce → QA and approve → launch and track → measure performance → feedback into brief and process improvements.",
    }),
    buildSection({
      number: "5.2",
      title: "Standardised Briefs & Intake Governance",
      subtitle: "Inputs, owners, deadlines, and success criteria — garbage brief in, polished garbage out",
      take: "A standardised marketing brief captures objective, audience, offer, channel, tone, compliance constraints, tracking requirements, and approval chain. AI prompt libraries derive from brief fields — inconsistent briefs produce inconsistent AI output. Intake governance routes requests through prioritisation criteria aligned to OKRs, not loudest stakeholder.",
      why: "Brief quality is the highest-leverage control point before any AI generation. Weak intake creates rework downstream that no QA team can fully absorb.",
      paragraphs: [
        [
          s("Mandatory brief fields prevent ambiguous production. "),
          x(
            "Minimum fields: business objective (awareness, demand, retention), target segment, single primary CTA, channel list, brand voice reference, legal/compliance flags, success metric, launch date, approver. AI auto-populates draft sections from CRM or product data — marketers validate, not skip fields.",
            "'Need a campaign for Q3' in Slack is not a brief — it is a ticket to misalignment.",
          ),
          s(" Brief template in project tool — submission blocked until required fields complete."),
        ],
        [
          s("Prioritisation framework ends intake anarchy. "),
          x(
            "Score requests: revenue impact, strategic priority, resource fit, deadline feasibility. Marketing ops runs weekly intake review with demand gen and product marketing. AI cannot prioritise — leadership criteria encoded in rubric.",
            "First-in-first-out intake starves high-impact work behind low-stakes requests.",
          ),
          s(" Intake SLA published: acknowledgement 24h, prioritisation decision 72h, decline with rationale when capacity exceeded."),
        ],
        [
          s("Brief versioning ties to asset lineage. "),
          x(
            "Brief v1.2 links to all derivative assets — copy, creative, landing page. When brief changes post-production, ops triggers change log and re-approval. AI-generated variants inherit brief ID — audit trail for compliance.",
            "Orphan assets with no brief lineage cannot be explained in brand or legal review.",
          ),
          s(" Asset naming convention includes brief ID and version — searchable in DAM and ad platforms."),
        ],
      ],
      examples: [
        {
          title: "Mandatory fields — compliance catch",
          body: "Brief template added regulatory claim flag after legal incident. PM submitted brief without flag; system blocked submission. PM added substantiation doc; legal pre-approved claims before production. Incident class avoided — ops gate worked as designed.",
        },
        {
          title: "Intake rubric — capacity clarity",
          body: "Sales flooded marketing with one-off deck requests. Intake rubric scored requests; 60% declined or deferred with template self-serve path. High-score requests got SLA commitment. Sales NPS on marketing partnership rose — clarity beat false yes.",
        },
        {
          title: "Brief lineage — rebrand",
          body: "Rebrand mid-quarter changed tone guidelines. Brief versioning flagged 23 in-flight assets on old brief. Ops batch re-approval workflow; 4 assets caught off-brand AI copy before launch. Lineage saved launch-week fire drill.",
        },
      ],
    }),
    buildSection({
      number: "5.3",
      title: "Production Workflows & AI-Assisted Execution",
      subtitle: "Templates, prompt libraries, and role clarity — humans direct, AI accelerates",
      take: "Production workflows define stages, owners, tools, and AI assist points: outline generation, copy variants, image concepts, localisation drafts, metadata tags. Prompt libraries encode brand voice, banned phrases, and compliance rules. Marketers assign human owners for creative direction and final craft — AI handles first drafts and mechanical variants.",
      why: "Undocumented AI usage in production creates brand drift and untraceable claims. Workflow design makes AI assist repeatable and auditable.",
      paragraphs: [
        [
          s("Stage-based workflows match work type. "),
          x(
            "Demand gen: brief → outline → copy draft → design brief → asset build. Product marketing: positioning doc → messaging matrix → sales enablement pack. Each stage has entry criteria, AI assist allowed actions, and exit criteria. Generic 'content workflow' fails channel-specific needs.",
            "One workflow for all marketing work types forces square pegs — teams route around ops in shadow tools.",
          ),
          s(" Workflow catalogue maintained by ops — new campaign types add workflow, not one-off exceptions."),
        ],
        [
          s("Prompt libraries are brand IP, not personal shortcuts. "),
          x(
            "Central library: voice descriptors, example headlines, compliance preambles, channel-specific length rules, localisation instructions. Version-controlled like code. AI tool connectors pull approved prompts — not individual employee custom GPTs for production.",
            "Shadow prompt libraries diverge on claims and tone — brand sounds like five companies.",
          ),
          s(" Quarterly prompt audit with brand and legal — deprecate prompts tied to retired claims."),
        ],
        [
          s("Human-AI role split explicit in RACI. "),
          x(
            "AI: first draft, variant generation, summarisation, tag suggestions. Human: strategy, nuance, emotional resonance, final accountability. RACI on workflow docs prevents 'AI wrote it' abdication in approval chains.",
            "Ambiguous accountability delays approvals — legal asks who stands behind the claim.",
          ),
          s(" Production SLA includes human review time — AI speed does not compress approval below quality bar."),
        ],
      ],
      examples: [
        {
          title: "Workflow catalogue — ABM",
          body: "ABM campaigns used ad hoc Notion docs. Ops published ABM workflow with AI assist at personalisation layer only. Personalised email variants up 4x; brand review time flat because prompts locked voice. ABM pipeline contribution visible in ops metrics for first time.",
        },
        {
          title: "Prompt library centralisation",
          body: "12 marketers maintained private ChatGPT instructions. Consolidated to versioned library in ops repo. Brand consistency score in quarterly audit rose from 62% to 91%. Onboarding new hire to production-ready prompts: 2 days vs 6 weeks tribal learning.",
        },
        {
          title: "RACI clarity — legal approval",
          body: "Legal rejected AI-generated case study — no human owner on workflow. Added 'accountable editor' stage before legal queue. Approval cycle time dropped 35% — legal knew who to query. AI still drafted; human owned substantiation.",
        },
      ],
    }),
    buildSection({
      number: "5.4",
      title: "QA, Review & Error Prevention",
      subtitle: "Checklists, automated checks, and human gates — speed with safety",
      take: "QA in AI-assisted marketing combines automated checks (broken links, UTM format, character limits, banned terms, accessibility alt text) with human review for claims, tone, and audience fit. Error prevention beats error correction — ops designs checkpoints before launch, not post-mortems after customer complaints.",
      why: "AI hallucinates plausible claims and confident typos. QA is the trust layer between production velocity and brand liability.",
      paragraphs: [
        [
          s("Tiered QA matches risk level. "),
          x(
            "Tier 1 (low risk, internal): automated spell, link, UTM check. Tier 2 (external, standard): + brand checklist, claim substantiation link. Tier 3 (regulated, major launch): + legal, accessibility, exec sign-off. AI output defaults to Tier 2 minimum for external — never Tier 1 by assumption.",
            "One-size QA either over-burdens low-risk work or under-protects regulated claims.",
          ),
          s(" Risk tier assigned at brief intake — QA path determined before production starts."),
        ],
        [
          s("Automated pre-flight catches mechanical defects. "),
          x(
            "Scripts and MarTech rules: UTM campaign matches brief ID, landing page live, form connected to MAP, pixel firing, locale correct, file size within spec. AI assists QA with diff review against brief — flag missing CTA or off-tone phrases.",
            "Manual QA of 50 assets misses link 404 on variant 47 — automation scales vigilance.",
          ),
          s(" Pre-flight dashboard green/red before human QA queue — humans focus on judgment, not clicks."),
        ],
        [
          s("QA metrics feed process improvement. "),
          x(
            "Track: defect rate by stage caught, escape rate post-launch, rework hours, top failure categories (claims, tracking, brand). AI categorises defect tags from retro notes — ops prioritises template and prompt fixes.",
            "QA as checkbox without metrics never improves — same errors repeat quarterly.",
          ),
          s(" Monthly QA review with creative lead — top 3 defect drivers become workflow or training fixes."),
        ],
      ],
      examples: [
        {
          title: "Tiered QA — fintech",
          body: "Regulated fintech treated all emails as Tier 1 — 9-day approval. Risk matrix moved nurture to Tier 2 with substantiation links. Tier 3 reserved for new product claims. External send volume up 22%; compliance incidents zero in 12 months.",
        },
        {
          title: "Pre-flight automation",
          body: "Launch week discovered 18 broken UTMs across paid set — manual QA missed. Built pre-flight script integrated with brief ID. Next quarter escape rate 14% → 2%. Media team trusted ops gate before platform upload.",
        },
        {
          title: "Defect retro — AI claims",
          body: "QA escape: AI invented customer statistic in ad copy. Retro tagged 'unsubstantiated claim.' Prompt library added mandatory stat source field; automated check blocks numerals without citation token. Repeat category eliminated in 6 months.",
        },
      ],
    }),
    buildSection({
      number: "5.5",
      title: "Campaign Launch & Tracking Operations",
      subtitle: "Checklists, UTMs, pixels, and go-live coordination — attribution starts at launch",
      take: "Launch operations orchestrate go-live: platform configs, audience uploads, budget caps, creative trafficking, landing page sync, tracking verification, and stakeholder comms. AI can generate launch runbooks and checklists from brief metadata — marketers own the canonical launch checklist and post-launch smoke test within 24 hours.",
      why: "Attribution and optimisation depend on launch executed correctly the first time. Rework after live spend wastes budget and pollutes data.",
      paragraphs: [
        [
          s("Launch checklist is non-negotiable for external campaigns. "),
          x(
            "Checklist sections: tracking (UTM, pixels, MAP forms), creative (correct variants, URLs), audience (suppression, geo), budget (caps, pacing), compliance (disclosures live), comms (sales alert, support macro). AI drafts checklist from brief — ops maintains master template.",
            "Ad hoc launches are the leading cause of 'marketing data doesn't match platform' disputes.",
          ),
          s(" No launch without checklist sign-off — ops role includes final tracking verification."),
        ],
        [
          s("UTM and naming governance enables clean reporting. "),
          x(
            "Convention: source, medium, campaign, content — aligned to taxonomy in analytics. AI suggests UTM strings from brief fields — humans approve against governance doc. Duplicate campaign names break MMM and multi-touch models.",
            "Free-form UTMs from media buyers make channel reporting a monthly archaeology project.",
          ),
          s(" UTM builder tool enforces taxonomy — free text blocked for campaign field."),
        ],
        [
          s("Go-live war room for high-stakes launches. "),
          x(
            "Major launches: 30-minute sync with demand gen, web, sales, support — roles assigned, rollback plan documented. AI-generated runbook distributed pre-launch. Smoke test: conversion event, lead routing, sales notification within 2 hours of live.",
            "Silent launches strand sales — leads arrive with no context or broken routing.",
          ),
          s(" Launch retrospective within 5 business days — tracking defects logged as ops incidents."),
        ],
      ],
      examples: [
        {
          title: "Checklist gate — product launch",
          body: "Product launch skipped checklist sign-off — demo request form routed to deprecated queue. 340 leads lost 48 hours. Post-incident: checklist mandatory in project tool; ops sign-off blocked launch button. Next launch zero routing defects.",
        },
        {
          title: "UTM governance — paid search",
          body: "Agency used inconsistent campaign tags — paid search ROI report unusable. UTM builder enforced taxonomy; AI pre-filled from brief. Finance trusted channel report for first time in planning cycle; budget reallocation debate dropped from 3 hours to 45 minutes.",
        },
        {
          title: "War room — pricing change",
          body: "Pricing page update plus email blast plus paid retargeting — war room caught conflicting offer codes 90 minutes pre-live. Fix before spend. Rollback plan unused but documented. CMO cited ops ritual as 'cheap insurance.'",
        },
      ],
    }),
    buildSection({
      number: "5.6",
      title: "Performance Measurement Loops",
      subtitle: "From launch to insight to process fix — closing the ops feedback cycle",
      take: "Measurement loops connect campaign performance to process improvement: did brief predict outcome, did QA catches correlate with underperformance, did launch defects affect attribution, did AI assist reduce time without quality drop. Ops partners with analytics on operational KPIs alongside marketing KPIs — cycle time, rework rate, launch accuracy.",
      why: "Ops without measurement becomes permanent cost centre. Closed loops prove ops enables speed and quality — securing headcount and tool budget.",
      paragraphs: [
        [
          s("Operational KPIs sit alongside campaign KPIs. "),
          x(
            "Ops metrics: brief-to-launch cycle time, rework rate, QA defect catch rate, launch escape rate, tracking accuracy score, SLA adherence. AI dashboards aggregate — marketers review monthly with functional leads.",
            "Reporting only ROAS ignores whether ops failures caused wasted spend or bad data.",
          ),
          s(" Ops scorecard on marketing QBR — tied to continuous improvement goals, not blame."),
        ],
        [
          s("Retrospectives link outcomes to process breakpoints. "),
          x(
            "Campaign retro template: objective vs result, process failures (brief, QA, launch), AI assist quality rating, one process fix. AI summarises retro notes across campaigns — ops spots systemic patterns.",
            "Celebrate-only retros miss the ops defects that will repeat on next launch.",
          ),
          s(" Top process fix from each major campaign assigned owner and due date in ops backlog."),
        ],
        [
          s("Feedback into brief and prompt library updates. "),
          x(
            "Underperforming campaign traces to vague audience in brief — update brief helper text. Repeated tone escapes — update prompt library. Measurement loop improves system, not just next campaign tactic.",
            "Analytics insight without ops feedback loop dies in slide deck — same brief mistakes recur.",
          ),
          s(" Quarterly 'system retro' — brief template, workflows, QA tiers reviewed against defect data."),
        ],
      ],
      examples: [
        {
          title: "Ops scorecard — QBR",
          body: "CMO added ops scorecard to QBR: cycle time down 19%, escape rate down 11 points. Justified second ops hire and workflow tool renewal. Finance saw ops as efficiency lever — not overhead.",
        },
        {
          title: "Retro pattern — brief quality",
          body: "AI analysis of 40 retros flagged 'audience too broad' in 12 underperformers. Brief template added audience specificity prompts and ICP link requirement. Next quarter campaigns meeting SQL target rose 26% — process fix, not media tweak.",
        },
        {
          title: "Prompt library update loop",
          body: "QA tagged 15% of AI drafts for 'generic tone.' Updated prompt library with vertical-specific examples. Generic tone tag rate dropped to 4% in 8 weeks. Measurement loop protected brand without slowing AI use.",
        },
      ],
    }),
    buildSection({
      number: "5.7",
      title: "Cross-Functional Handoffs & SLA Design",
      subtitle: "Creative, demand gen, sales, web, and legal — contracts between teams",
      take: "Handoff design documents what each function delivers, in what format, by when, with what acceptance criteria. SLAs encode reciprocity: marketing delivers MQL definition and nurture content; sales delivers feedback on lead quality within 48 hours; web delivers landing page within 5 days of approved brief. AI generates handoff summaries and status digests — humans enforce SLA accountability.",
      why: "AI-accelerated production crashes into downstream bottlenecks when handoffs are implicit. SLA clarity prevents marketing blamed for sales inaction and vice versa.",
      paragraphs: [
        [
          s("Document handoff artifacts and acceptance criteria. "),
          x(
            "Marketing → sales: lead definition doc, battle card, talk track, SLA on lead routing test. Marketing → web: brief, copy, design spec, tracking requirements, acceptance = live page plus pixel test. Ambiguous 'send assets' handoffs cause rework.",
            "Sales complains lead quality; marketing complains sales ignore leads — usually undefined handoff.",
          ),
          s(" Handoff templates in shared project tool — status visible to ops without chasing Slack."),
        ],
        [
          s("SLA breaches trigger escalation, not shame. "),
          x(
            "Ops tracks SLA adherence; breach notifies functional lead with context, not blame thread. Chronic breaches feed capacity planning — hire, reprioritise, or simplify scope. AI flags bottleneck stages from cycle time data.",
            "SLA without escalation is aspiration — chronic misses normalise.",
          ),
          s(" Monthly cross-functional SLA review with sales and web leads — adjust targets to reality."),
        ],
        [
          s("Align SLAs with AI-assisted capacity gains. "),
          x(
            "If AI cuts copy production 40%, reinvest capacity in QA depth or strategic work — not invisible scope creep. Ops communicates new throughput assumptions to intake rubric — prevents 40% more briefs with same headcount without leadership agreement.",
            "AI efficiency silently absorbed as 40% more requests burns team and erodes quality.",
          ),
          s(" Capacity model updated semi-annually — AI assist factors, headcount, agency spend."),
        ],
      ],
      examples: [
        {
          title: "Sales handoff — lead definition",
          body: "MQL-to-SQL conversion stalled — sales rejected 45% as 'not ready.' Joint session documented MQL criteria and sales follow-up SLA. Marketing adjusted nurture; sales committed 48h contact. SQL rate up 33% in two quarters — handoff fix, not more leads.",
        },
        {
          title: "Web SLA — landing pages",
          body: "Campaigns delayed average 11 days waiting on web. SLA 5 business days with brief completeness gate. Ops blocked incomplete briefs from web queue. On-time launch rate 54% → 88%; paid waste from late starts dropped measurably.",
        },
        {
          title: "Capacity model — AI throughput",
          body: "AI doubled email production capacity. Leadership assumed 2x program volume without headcount. Ops presented capacity model — recommended 1x volume plus higher QA tier. CMO agreed; quality scores held while volume rose 60%, not 100%.",
        },
      ],
    }),
    buildSection({
      number: "5.8",
      title: "The Marketer Decision Lens — Process Investment",
      subtitle: "When to fix briefs, add tools, or hire ops — prioritising system over sprawl",
      take: "Before buying another AI tool or hiring agency capacity, run four checks: (1) is brief and intake governance above 85% compliance — inputs before acceleration? (2) are QA tiers and launch checklists enforced — safety before scale? (3) do measurement loops feed brief and workflow updates — learning before volume? (4) are cross-functional SLAs documented and reviewed — handoffs before blame? Invest in process architecture first. Scale AI and headcount when defect and escape rates trend down.",
      why: "AI makes production cheap — tempting teams to skip ops investment. This lens prioritises systems that compound quality and attribution trust.",
      paragraphs: [
        [
          s("Check one: intake and brief discipline. "),
          x(
            "Brief compliance below 80% or shadow intake via Slack → standardise before AI rollout. Multiple conflicting brief formats → consolidate before workflow automation.",
            "Faster production on ambiguous briefs multiplies misaligned campaigns.",
          ),
          s(" Brief compliance KPI on marketing leadership dashboard — ops owns metric definition."),
        ],
        [
          s("Check two: QA and launch gates. "),
          x(
            "Launch escape rate rising or untracked → enforce checklist before new channel expansion. QA skipped on 'rush' launches → culture fix before AI volume increase.",
            "Scaling AI without QA tier design exports defects to customers and regulators.",
          ),
          s(" No enterprise AI licence expansion without Tier 2 QA path for external content."),
        ],
        [
          s("Checks three and four: loops and handoffs. "),
          x(
            "Retros never produce process fixes → measurement ritual before headcount. Chronic SLA breaches with sales or web → handoff workshop before demand gen hiring.",
            "Ops ROI is proven in cycle time and escape rate — not tool count.",
          ),
          s(" Run lens in quarterly ops-business review with CMO and functional leads."),
        ],
      ],
      examples: [
        {
          title: "Tool deferred — brief first",
          body: "Creative AI suite POC requested. Lens: brief compliance 61%, no QA tiers. Deferred purchase; 90-day brief and QA sprint. Re-POC at 87% compliance — defect rate half of pilot. Vendor sale slower; organisation risk lower.",
        },
        {
          title: "Headcount justified — escape data",
          body: "Ops hire request challenged by finance. Lens: launch escape rate cost estimated 2.4 FTE rework equivalent. Presented escape trend and checklist ROI. Hire approved — escape rate halved in two quarters.",
        },
        {
          title: "Agency scale blocked",
          body: "Proposal to double agency output via AI. Lens: UTM governance broken, handoff SLA with web at 40% on-time. Blocked scale; fixed governance first. Agency AI output then landed in attributable reporting — scale approved Q+1.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "AI tools increased content volume but launch defects and attribution errors rose. What should marketing fix first?",
      options: [
        "Buy a more advanced AI model immediately.",
        "Standardise briefs, intake governance, QA tiers, and launch checklists before scaling AI output.",
        "Remove human approval to match AI speed.",
        "Add more channels without changing process.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Process architecture — briefs, QA, launch — precedes AI acceleration. Re-read sections 5.1 and 5.4.",
      wrongFeedback:
        "Fix ops backbone before more AI volume. Re-read sections 5.1 and 5.4.",
    },
    {
      q: "Teams route campaign requests through Slack with no standard brief. What is the highest-leverage ops investment?",
      options: [
        "Automate Slack messages into production.",
        "Mandatory brief template with prioritisation rubric and blocked submission until complete.",
        "Hire more designers first.",
        "Deploy AI without intake gates.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Standardised briefs and intake governance prevent ambiguous production. Re-read section 5.2.",
      wrongFeedback:
        "Brief and intake discipline is the control point before production. Re-read section 5.2.",
    },
    {
      kind: "order",
      q: "Order the marketing operations lifecycle from first step to last.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Standardise brief and intake governance",
        "AI-assisted production with prompt libraries",
        "QA approve and launch with tracking verification",
        "Measure performance and feed process improvements",
      ],
      correctFeedback:
        "Right. Brief → produce → QA/launch → measure/feedback. Re-read sections 5.1–5.8.",
      wrongFeedback:
        "Start with brief governance; close with measurement loops. Re-read sections 5.1–5.8.",
    },
    {
      kind: "categorize",
      q: "Sort each practice into the correct marketing ops layer.",
      categories: ["Intake & brief", "Production & QA", "Launch & tracking", "Improvement & lens"],
      items: [
        { text: "Prioritisation rubric for campaign requests.", category: 0 },
        { text: "Version-controlled prompt library.", category: 1 },
        { text: "UTM taxonomy enforcement tool.", category: 2 },
        { text: "Ops scorecard on quarterly business review.", category: 3 },
        { text: "Tiered QA by campaign risk level.", category: 1 },
        { text: "Launch checklist sign-off gate.", category: 2 },
      ],
      correctFeedback:
        "Right. Intake = briefs. Production = workflows and QA. Launch = tracking. Improvement = lens and loops. Re-read sections 5.1–5.8.",
      wrongFeedback:
        "Match each practice to intake, production, launch, or improvement. Re-read sections 5.1–5.8.",
    },
    {
      q: "AI cut copy production time 40% but team burnout rose from scope creep. What does the lens recommend?",
      options: [
        "Absorb all savings as 40% more requests silently.",
        "Update capacity model and intake rubric with leadership agreement on reinvestment.",
        "Remove QA to match new volume.",
        "Ban AI to restore prior workload.",
      ],
      correct: 1,
      correctFeedback:
        "Right. SLA and capacity planning must reflect AI throughput gains explicitly. Re-read sections 5.7 and 5.8.",
      wrongFeedback:
        "Reinvest or bound AI efficiency gains via capacity model — not invisible scope creep. Re-read sections 5.7 and 5.8.",
    },
    {
      q: "Launch escape rate is high but campaign ROAS looks fine. What investment comes first?",
      options: [
        "Ignore ops metrics if ROAS is acceptable.",
        "Enforce launch checklist, pre-flight automation, and tracking verification gates.",
        "Scale paid spend immediately.",
        "Replace analytics platform only.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Launch and tracking ops protect attribution and prevent wasted spend. Re-read sections 5.5 and 5.8.",
      wrongFeedback:
        "High escape rate poisons data and risks compliance — fix launch ops first. Re-read sections 5.5 and 5.8.",
    },
  ],
});
