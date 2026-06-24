import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter06MktMarketingLeadershipAiEra = buildChapter({
  slug: "mkt-marketing-leadership-ai-era",
  number: 6,
  shortTitle: "Marketing Leadership in the AI Era",
  title: "Marketing Leadership in the AI Era — Strategy, Brand, People, and Governance for CMOs and Senior Marketers",
  readingMinutes: 24,
  summary:
    "Marketing leadership in the AI era expands beyond campaign excellence to four simultaneous mandates: driving commercial outcomes, custodianship of brand and trust, building AI-literate teams and culture, and governing ethical AI use across the function. AI compresses execution cycles and raises stakeholder expectations — boards ask for productivity proof, legal asks for risk controls, talent asks for growth paths. Leaders who delegate AI to a tools committee without strategic ownership lose brand coherence; leaders who integrate AI into strategy narrative, talent model, and governance earn organisational trust.",
  keyTakeaway:
    "Leadership is the integration layer AI cannot replace. The sequence that wins: anchor on commercial outcomes → protect brand and trust as non-negotiable → invest in people and AI literacy → install governance before scale → narrate progress to the board → lead change with transparency → apply the decision lens before reorganisation or vendor bets. AI amplifies marketing reach; leaders own direction, culture, and accountability.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "6.1",
      title: "Leadership Scope in AI-Transformed Marketing",
      subtitle: "Strategy, brand, people, and governance — the four pillars senior marketers must hold simultaneously",
      take: "AI-era marketing leadership is not 'CMO plus ChatGPT.' It is holding four pillars: strategy linked to revenue and growth outcomes; brand custodianship ensuring AI output preserves voice, trust, and differentiation; people leadership building AI literacy, psychological safety, and career paths; governance setting standards for data, claims, and model use. Leaders who excel at one pillar while neglecting others create brittle organisations — fast content, eroded trust, talent flight, or regulatory exposure.",
      why: "Stakeholders evaluate marketing leadership on integrated outcomes, not channel metrics. Pillar neglect surfaces as board scepticism, brand incidents, or compliance crises.",
      paragraphs: [
        [
          s("Reframe the CMO role as integrator, not channel owner. "),
          x(
            "Integrator connects product, sales, finance, and technology narratives; allocates AI productivity gains deliberately; arbitrates brand vs performance tension. Channel tactics delegate to functional leads — leader owns system outcomes: pipeline contribution, brand health, team capability, risk posture.",
            "CMO as 'head of campaigns' cannot govern AI across content, data, and customer experience.",
          ),
          s(" Leadership scorecard includes commercial, brand, people, and governance metrics — balanced review quarterly."),
        ],
        [
          s("AI raises the speed of leadership decisions, not the need for judgment. "),
          x(
            "Decisions that once took weeks — creative direction, messaging tests, budget shifts — compress to days with AI assist. Leaders must pre-commit principles: what we will not automate, what requires human approval, how we communicate AI use internally and externally.",
            "Faster execution without decision principles produces inconsistent brand and reactive firefighting.",
          ),
          s(" Document leadership decision principles — published internally, referenced in vendor and agency contracts."),
        ],
        [
          s("Cross-functional credibility is the leadership currency of the AI era. "),
          x(
            "CFO trusts forecast discipline; CIO trusts data governance; CHRO trusts upskilling plan; General Counsel trusts claim and privacy controls. AI projects stall without cross-functional sponsorship — leaders build coalitions before tool rollouts.",
            "Marketing-led AI in isolation breeds shadow IT and duplicated spend — then blame when integrations fail.",
          ),
          s(" Quarterly sync with CFO, CIO, CHRO, GC on AI marketing roadmap — shared risks and wins."),
        ],
      ],
      examples: [
        {
          title: "Integrator CMO — board narrative",
          body: "CMO reframed role from 'demand gen owner' to 'growth integrator' with four-pillar scorecard. Board stopped asking only CAC — added brand trust index, AI literacy completion, governance audit pass rate. Marketing budget defence improved — holistic story beat channel spreadsheet.",
        },
        {
          title: "Decision principles — automation boundary",
          body: "Leadership published 'we automate drafts, not promises' principle after AI inflated product claims in draft deck. Agency and internal teams aligned; legal review time dropped 30% because submissions respected boundary. Principle prevented repeat incident class.",
        },
        {
          title: "Coalition before rollout",
          body: "Personalisation AI project stalled at IT security review. CMO convened CFO, CIO, GC pre-rollout workshop; shared data map and governance plan. Security sign-off in 3 weeks vs 4-month prior project. Coalition upfront beat escalation later.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-era-ch6-leadership",
      type: "nested",
      title: "Marketing Leadership Pillars in the AI Era",
      caption:
        "Strategy (commercial outcomes) → Brand (trust and voice) → People (talent and AI literacy) → Governance (ethical AI standards and oversight) — integrated leadership, not siloed initiatives.",
    }),
    buildSection({
      number: "6.2",
      title: "Strategy & Commercial Outcomes",
      subtitle: "Pipeline, revenue contribution, and growth bets — leadership accountable to business results",
      take: "Strategic leadership translates market insight, competitive position, and AI-enabled capability into growth choices: segment focus, positioning bets, channel mix, and investment timing. AI improves scenario modelling and signal detection — leaders own which bets get resourced and how marketing proves incremental contribution to pipeline and revenue, not vanity engagement.",
      why: "AI productivity without strategic focus produces more output in wrong directions. Commercial accountability keeps AI investment defensible to finance and the board.",
      paragraphs: [
        [
          s("Anchor strategy on measurable commercial objects. "),
          x(
            "Objects: marketing-sourced pipeline, category share of voice, win rate on target accounts, expansion revenue from lifecycle, CAC payback by segment. AI forecasts and simulates — leaders set which objects gate budget and headcount.",
            "Strategy decks without commercial objects become AI experimentation theatre.",
          ),
          s(" Annual strategy doc lists 3–5 commercial bets with success metrics and kill criteria."),
        ],
        [
          s("AI informs allocation; leaders own trade-offs. "),
          x(
            "AI surfaces: segment response heterogeneity, creative fatigue, competitive share shifts. Leaders decide: double down on winning segment vs diversify; brand investment vs performance sprint. Algorithm recommendations are inputs — trade-offs are judgment.",
            "Delegating strategy to platform optimisers optimises local maxima, not company strategy.",
          ),
          s(" Monthly strategy review uses AI insights as agenda items — decisions logged with rationale."),
        ],
        [
          s("Prove incrementality to earn trust. "),
          x(
            "Holdouts, geo tests, matched market experiments — leadership sponsors measurement discipline. AI makes test analysis faster; leaders protect test budget when quarters tighten.",
            "Correlation dashboards without incrementality proof lose CFO trust at first budget cut.",
          ),
          s(" One incrementality study per major channel or program annually — leadership visibility on results."),
        ],
      ],
      examples: [
        {
          title: "Kill criteria — ABM bet",
          body: "ABM strategy bet with 12-month horizon; AI showed tier-2 accounts underperforming at month 6. Leadership invoked kill criteria — reallocated to tier-1 plus lifecycle. Pipeline from target accounts up 24% vs flat continuation forecast. Discipline beat sunk cost.",
        },
        {
          title: "Trade-off — brand vs performance",
          body: "AI model recommended 100% performance shift; brand health index projected decline in 2 quarters. Leadership held 70/30 split with test markets at 100% performance. Test markets showed higher CAC in quarter 3 — validated balanced trade-off in board narrative.",
        },
        {
          title: "Incrementality proof — CFO ally",
          body: "CFO sceptical of paid social ROI. Leadership sponsored geo holdout test; AI accelerated analysis. Proved 18% incremental revenue — not 45% attributed. Lower number credible; budget held while other channels cut. Trust from honesty.",
        },
      ],
    }),
    buildSection({
      number: "6.3",
      title: "Brand Custodianship & Trust",
      subtitle: "Voice, differentiation, and customer trust — the non-delegable leadership duty",
      take: "Brand leadership in the AI era means guarding voice, visual identity, promise consistency, and customer trust while scaling content volume. AI generates on-brand-ish output at scale — leaders define brand guardrails, approval rights, and trust recovery protocols when AI or human error damages perception. Trust is slower to build than content is to publish.",
      why: "Brand erosion from AI slop is cumulative — customers notice inconsistency before leadership sees dashboard. Custodianship prevents short-term volume from becoming long-term commodity.",
      paragraphs: [
        [
          s("Brand system must be machine-readable and human-owned. "),
          x(
            "Brand guidelines encoded for AI: voice attributes, forbidden claims, visual templates, exemplar library. Leaders appoint brand owner with veto on external AI output — not bureaucratic bottleneck, quality gate.",
            "PDF brand book from 2019 that AI cannot parse is not governance — it is decoration.",
          ),
          s(" Brand system update cadence quarterly — AI prompt libraries sync within 48 hours of change."),
        ],
        [
          s("Differentiation beats generic AI fluency. "),
          x(
            "Competitors use same models — differentiation comes from proprietary insight, customer stories, category POV, and creative courage AI cannot invent. Leaders invest in distinctive assets, not just faster generic copy.",
            "AI makes average marketing free — brand leadership makes premium perception possible.",
          ),
          s(" Distinctive asset audit annually — which elements AI cannot replicate without your data and stories."),
        ],
        [
          s("Trust incidents require leadership-visible response. "),
          x(
            "Wrong claim, privacy overreach, insensitive personalisation — leader owns public response, root cause review, and process fix. AI accelerates incident spread; leadership speed on accountability limits damage.",
            "Delegating trust incidents to junior comms reads as leadership avoidance — trust compounds negatively.",
          ),
          s(" Trust incident playbook: acknowledge, investigate, fix, communicate — leadership on step one and four."),
        ],
      ],
      examples: [
        {
          title: "Machine-readable brand — rollout",
          body: "Rebuilt brand guidelines as structured voice matrix plus exemplar library linked to prompt system. AI off-brand escapes dropped 67% in two quarters. Brand owner role formalised — 24h SLA on Tier 3 campaign review.",
        },
        {
          title: "Distinctive asset — customer stories",
          body: "Competitor AI content flooded category with interchangeable tips. Leadership invested in verified customer story program — human interviews, data permission. Story-led campaigns outperformed AI-generic 2.1x on engagement and win rate in enterprise segment.",
        },
        {
          title: "Trust incident — personalisation error",
          body: "Lifecycle email used incorrect personalisation merge — sensitive inference. CMO recorded video apology, paused program, GC-led review. Fixed data rules; published transparency blog. NPS dip recovered in 8 weeks vs peer incident 6-month drag.",
        },
      ],
    }),
    buildSection({
      number: "6.4",
      title: "People, Talent & AI Literacy",
      subtitle: "Hiring, upskilling, psychological safety, and career paths — leadership builds the team AI cannot replace",
      take: "People leadership means hiring for judgment and learning agility, not tool memorisation; designing AI literacy programs by role; creating psychological safety to report AI errors; and defining career paths that reward orchestration and outcomes over output volume. Leaders who threaten 'replace or upskill' without investment create hiding and shadow AI use.",
      why: "Talent market rewards leaders who develop capability. AI literacy without career clarity drives attrition — people fear obsolescence without growth narrative.",
      paragraphs: [
        [
          s("Hire for orchestration, taste, and ethical judgment. "),
          x(
            "Role competencies shift: prompt craft, workflow design, QA discipline, data literacy, stakeholder communication. Interview for 'show me how you validated AI output' not 'which tools have you used.' Leaders model validation behaviour in staff meetings.",
            "Hiring tool specialists without judgment creates fast wrong answers at scale.",
          ),
          s(" Updated competency matrix per marketing role — recruiting and performance reviews aligned."),
        ],
        [
          s("Tiered AI literacy by role depth. "),
          x(
            "All: responsible use policy, disclosure norms, error reporting. Practitioners: prompt libraries, workflow tools, QA protocols. Leaders: governance, vendor evaluation, board narrative. AI personalises learning paths — leaders fund time, not just licenses.",
            "One-hour generic AI training checks compliance box without changing behaviour.",
          ),
          s(" Literacy completion tied to development plans — leaders track team completion monthly."),
        ],
        [
          s("Psychological safety for AI error reporting. "),
          x(
            "Reward catching AI hallucination before publish; blameless post-mortems on escapes. Leaders share own correction stories — normalise human oversight. Shadow AI use drops when official paths are faster and safe.",
            "Punitive culture drives hidden AI use — highest risk in regulated claims and customer data.",
          ),
          s(" 'Good catch' channel in team rituals — celebrate QA and peer review saves weekly."),
        ],
      ],
      examples: [
        {
          title: "Competency matrix — hiring",
          body: "Rewrote job descriptions for content and demand roles around orchestration competencies. New hires screened with live AI validation exercise. 12-month performance: quality scores up, rework down 38%. Tool training onboarding reduced from 4 weeks to 1 — judgment emphasized.",
        },
        {
          title: "Tiered literacy — leadership track",
          body: "Directors completed governance and vendor evaluation module; practitioners completed workflow certification. Cross-team shadowing paired legal with lifecycle marketer. Escaped claim rate near zero in certified cohort vs prior year.",
        },
        {
          title: "Good catch culture",
          body: "Junior marketer flagged AI inventing certification in partner email — praised in all-hands. Leader shared own missed hallucination story same week. Error reports rose 3x first month (visibility up); escapes down 55% over quarter.",
        },
      ],
    }),
    buildSection({
      number: "6.5",
      title: "Governance & Ethical AI Use",
      subtitle: "Policies, oversight, and accountability — leadership sets the guardrails before regulators do",
      take: "Governance leadership establishes responsible AI policy for marketing: approved tools, data use boundaries, human approval requirements, bias and inclusion checks, customer transparency norms, and audit cadence. AI scales reach of every governance failure — leaders chair or sponsor marketing AI council with legal, privacy, and IT representation.",
      why: "Regulatory and customer scrutiny of AI marketing is accelerating. Proactive governance is cheaper than incident response and brand repair.",
      paragraphs: [
        [
          s("Marketing AI policy is operational, not legal PDF shelfware. "),
          x(
            "Policy covers: approved vendor list, customer data permitted in prompts, prohibition on sensitive inference, claim substantiation rules, disclosure when AI shapes customer-facing content, incident escalation. Embedded in brief, QA, and procurement — not annual email.",
            "Policy nobody references in workflow is irrelevant when speed pressure hits.",
          ),
          s(" Policy acknowledgment in workflow tools — blocked production on unapproved AI for external use."),
        ],
        [
          s("Oversight council with decision rights. "),
          x(
            "Council: marketing, legal, privacy, IT security, brand. Meets monthly; approves new use cases, reviews incidents, updates standards. Leaders delegate operations, not accountability — CMO or delegate signs council charter.",
            "Governance by email thread collapses under first controversial use case.",
          ),
          s(" Council agenda template: new use cases, incident review, vendor changes, training gaps."),
        ],
        [
          s("Audit trail for high-risk customer touchpoints. "),
          x(
            "Lifecycle personalisation, dynamic pricing messaging, automated social response — log model version, input features, human approver, outcome. AI assists logging — leaders require audit for regulatory inquiry readiness.",
            "Cannot explain why customer received message — GDPR and FTC scrutiny risk.",
          ),
          s(" Annual governance audit — sample customer journeys for policy adherence."),
        ],
      ],
      examples: [
        {
          title: "Workflow-embedded policy",
          body: "Unapproved AI tool for social drafts blocked at SSO level; workflow offered approved alternative. Shadow tool usage dropped 80% in telemetry. Policy became frictionless default — not nag email.",
        },
        {
          title: "Council — new use case",
          body: "Lifecycle team proposed generative email from product usage signals. Council required opt-out, no health inference, human spot-check 10%. Pilot approved with conditions; scaled after 90-day audit clean. Avoided launch-then-ban pattern.",
        },
        {
          title: "Audit trail — regulatory inquiry",
          body: "Regulator inquiry on targeted ad. Audit trail produced message logic, approver, data inputs in 48 hours. Inquiry closed without fine; leadership cited governance as investment not cost.",
        },
      ],
    }),
    buildSection({
      number: "6.6",
      title: "Board & Executive Narrative",
      subtitle: "Translating marketing and AI into language CFOs and boards trust",
      take: "Executive narrative connects AI-enabled marketing to business outcomes: productivity reinvestment, pipeline contribution, brand health, risk posture, and talent readiness. Leaders avoid tool laundry lists and vanity metrics — they tell stories with ranges, assumptions, and lessons from failures. Board time is scarce; narrative discipline is leadership craft.",
      why: "Boards fund marketing when they understand risk-adjusted return and governance maturity — not when they hear platform feature updates.",
      paragraphs: [
        [
          s("Structure board updates around decisions, not activities. "),
          x(
            "Format: outcomes vs plan, key bets status, AI productivity reinvestment choices, brand and risk dashboard, asks. AI drafts slides — leader owns storyline and Q&A honesty.",
            "Activity decks ('we ran 47 campaigns') invite 'so what' from directors.",
          ),
          s(" Pre-brief CFO on ranges and assumptions — no surprise in board room."),
        ],
        [
          s("Translate AI productivity into business terms. "),
          x(
            "Not 'we use Copilot' — 'cycle time down 22%, reinvested 15% capacity into ABM, QA headcount added 1 FTE equivalent quality gain.' Leaders quantify reinvestment or savings — finance listens.",
            "Vague AI productivity claims without reinvestment story sound like cost without value.",
          ),
          s(" Productivity ledger maintained quarterly — hours saved, where reinvested, quality metrics."),
        ],
        [
          s("Disclose risks and mitigations proactively. "),
          x(
            "Board hears: personalisation governance, claim QA, data boundaries, incident count and response. Surprises erode trust; proactive risk disclosure builds credibility.",
            "Hiding near-miss incidents until press leak is leadership failure mode.",
          ),
          s(" Risk section standard in board deck — same rigour as financial variance."),
        ],
      ],
      examples: [
        {
          title: "Decision deck — budget held",
          body: "Board challenged marketing budget. CMO presented decision format: incrementality proof, AI productivity ledger, governance audit pass. Budget held while peers cut 12% — narrative beat spreadsheet alone.",
        },
        {
          title: "Productivity ledger",
          body: "Finance asked 'what did AI actually save?' Leader presented ledger: 340 hours/quarter copy, reinvested to lifecycle experimentation, defect rate down. Approved experimentation budget increase — linked to ledger line items.",
        },
        {
          title: "Proactive risk disclosure",
          body: "Disclosed near-miss AI claim incident in board risk section with fix summary. Director praised transparency; peer company same quarter faced press leak. Trust differential noted in CEO feedback.",
        },
      ],
    }),
    buildSection({
      number: "6.7",
      title: "Organisational Change Leadership",
      subtitle: "Restructuring, rituals, and resistance — leading humans through AI transformation",
      take: "Change leadership guides org design, role evolution, meeting rituals, and resistance patterns as AI reshapes marketing work. Leaders communicate 'what stays human' as clearly as 'what changes'; involve practitioners in workflow design; phase changes with training before KPI shifts. Reorganisation without change management repeats failed digital transformations.",
      why: "AI transformation fails on adoption and culture, not technology. Leaders who announce restructures before capability building lose people and knowledge.",
      paragraphs: [
        [
          s("Phase change: learn, pilot, scale, measure. "),
          x(
            "Phase 1 literacy and policy; Phase 2 pilot teams with success metrics; Phase 3 scale workflows and tools; Phase 4 KPI evolution. Leaders resist skipping phases when vendor or board pressures speed.",
            "Big-bang AI mandate without pilot proof breeds sabotage and shadow processes.",
          ),
          s(" Change roadmap published — phases, owners, success criteria visible to all marketing."),
        ],
        [
          s("Co-design workflows with practitioners. "),
          x(
            "Ops and frontline marketers design AI assist points — not only consultants or IT. Ownership increases adoption; top-down mandates without input fail at QA and brief compliance.",
            "Workflow designed in boardroom breaks on first real campaign deadline.",
          ),
          s(" Pilot team members become champions — rotate into next pilot wave as coaches."),
        ],
        [
          s("Manage grief and identity shifts openly. "),
          x(
            "Marketers tied identity to craft skills AI augments — leaders acknowledge loss, redefine excellence as orchestration and impact. Career paths updated before role titles change.",
            "Ignoring identity threat drives attrition of best judgment holders.",
          ),
          s(" Listening sessions before reorg — concerns logged, responses published."),
        ],
      ],
      examples: [
        {
          title: "Phased roadmap — skipped scale disaster avoided",
          body: "CEO pressured instant AI rollout. CMO held phase gate — pilot showed 34% brief non-compliance at scale attempt in test cell. Delayed scale 60 days for ops fix. Full scale later achieved adoption 81% vs pilot-only-mandate peer at 40%.",
        },
        {
          title: "Co-design — lifecycle workflow",
          body: "Consultant-designed AI lifecycle workflow rejected by practitioners. Co-design sprint with 6 lifecycle marketers produced revised flow. Adoption 92% in 30 days vs 23% on consultant-only design.",
        },
        {
          title: "Identity shift — content team",
          body: "Content team feared obsolescence. Leader redefined role as 'editorial orchestrators,' updated titles and comp bands. Retention 94% vs 71% prior year industry benchmark. Public internal stories of career evolution.",
        },
      ],
    }),
    buildSection({
      number: "6.8",
      title: "The Marketer Decision Lens — Leadership Priorities",
      subtitle: "When to reorganise, invest in tools, or pause AI — sequencing leadership bets",
      take: "Before reorg or major AI vendor commitment, run four checks: (1) are commercial outcomes and incrementality proof current — strategy before structure? (2) is brand governance and trust posture solid — custodianship before volume? (3) is AI literacy and psychological safety adequate — people before KPI shift? (4) is governance council active with audit trail — guardrails before scale? Invest in narrative and coalition first. Scale organisation change when pilot metrics and trust indicators hold.",
      why: "Leadership credibility compounds or erodes with each AI bet. This lens sequences investments that protect trust while capturing productivity.",
      paragraphs: [
        [
          s("Check one: commercial proof and strategic clarity. "),
          x(
            "No incrementality discipline or drifting OKRs → measurement before reorg. Reorg proposed to fix strategy gap → strategy workshop before boxes and lines.",
            "Reorganising confused strategy rearranges deck chairs.",
          ),
          s(" Strategy refresh gate precedes structural change announcements."),
        ],
        [
          s("Check two: brand and trust readiness. "),
          x(
            "Rising off-brand escapes or trust incidents → brand system and QA before AI volume scale. Board asks brand risk questions → custodianship narrative before new AI use cases.",
            "Scaling AI with weak brand guardrails exports leadership accountability to customers.",
          ),
          s(" Brand escape rate threshold gates major generative campaigns."),
        ],
        [
          s("Checks three and four: people and governance. "),
          x(
            "Literacy below 80% on target cohort → training before KPI change. No council or audit trail → governance before customer-facing model scale.",
            "People and governance gaps become crises at scale — fix at pilot size.",
          ),
          s(" Run lens in executive staff meeting quarterly — document go/no-go on major bets."),
        ],
      ],
      examples: [
        {
          title: "Reorg deferred — strategy first",
          body: "Consultant proposed AI-centric marketing reorg. Lens: OKRs unsettled, incrementality stale. Deferred reorg; 90-day strategy and measurement refresh. Revisited structure with clear bets — smoother adoption, fewer redundancies.",
        },
        {
          title: "Vendor scale gated",
          body: "Enterprise gen-AI suite ready to sign. Lens: literacy 62%, council not chartered. Signed pilot tier only; council formed; literacy to 88%. Then enterprise — incidents zero first year vs peer rollout with public mistake.",
        },
        {
          title: "KPI shift delayed",
          body: "Proposed output-based KPIs for AI era. Lens: psychological safety low, error reporting rare. Delayed KPI shift; ran 'good catch' quarter. Then evolved KPIs with team input — adoption without attrition spike.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "AI increased content output but brand consistency and trust scores declined. What should leadership prioritise first?",
      options: [
        "More AI tools to fix quality algorithmically.",
        "Brand custodianship: machine-readable guardrails, approval rights, and trust recovery protocols before scaling volume.",
        "Remove human brand review to match AI speed.",
        "Focus only on CAC metrics.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Brand and trust are non-delegable leadership duties before AI scale. Re-read sections 6.1 and 6.3.",
      wrongFeedback:
        "Protect brand governance and trust before more AI volume. Re-read sections 6.1 and 6.3.",
    },
    {
      q: "Board asks what marketing did with AI this quarter. What narrative structure builds trust?",
      options: [
        "List of tools purchased and login counts.",
        "Commercial outcomes, productivity reinvestment ledger, governance posture, and disclosed risks.",
        "Vanity engagement metrics only.",
        "Avoid mentioning any failures.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Executive narrative ties AI to business outcomes and honest risk disclosure. Re-read section 6.6.",
      wrongFeedback:
        "Boards want outcomes, reinvestment, and risk — not tool lists. Re-read section 6.6.",
    },
    {
      kind: "order",
      q: "Order the AI-era leadership priorities from foundation to scale.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Anchor strategy on commercial outcomes",
        "Establish brand guardrails and people literacy",
        "Install governance council and audit practices",
        "Scale change with pilot proof and board narrative",
      ],
      correctFeedback:
        "Right. Strategy → brand/people → governance → scaled change. Re-read sections 6.1–6.8.",
      wrongFeedback:
        "Build strategy, brand, people, and governance before scaling org change. Re-read sections 6.1–6.8.",
    },
    {
      kind: "categorize",
      q: "Sort each leadership action into the correct pillar.",
      categories: ["Strategy", "Brand & trust", "People", "Governance"],
      items: [
        { text: "Incrementality test sponsorship.", category: 0 },
        { text: "Machine-readable voice guidelines.", category: 1 },
        { text: "Tiered AI literacy program.", category: 2 },
        { text: "Marketing AI oversight council.", category: 3 },
        { text: "Kill criteria on growth bets.", category: 0 },
        { text: "Good catch error reporting ritual.", category: 2 },
      ],
      correctFeedback:
        "Right. Strategy = commercial bets. Brand = voice and trust. People = literacy and safety. Governance = oversight. Re-read sections 6.1–6.8.",
      wrongFeedback:
        "Match each action to strategy, brand, people, or governance pillar. Re-read sections 6.1–6.8.",
    },
    {
      q: "Team hides AI errors fearing blame. What leadership move comes first?",
      options: [
        "Punish first error to set standards.",
        "Psychological safety: blameless reporting, leader modeling, and good-catch recognition.",
        "Ban AI until perfect.",
        "Ignore errors if customers do not complain.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Safety and recognition reduce shadow AI and escapes. Re-read sections 6.4 and 6.7.",
      wrongFeedback:
        "Build safe error reporting before scaling AI KPIs. Re-read sections 6.4 and 6.7.",
    },
    {
      q: "CEO demands immediate company-wide AI marketing rollout. What does the lens recommend?",
      options: [
        "Skip pilot and reorg immediately.",
        "Phase: literacy, pilot with metrics, governance council, then scale with change management.",
        "Buy largest vendor contract first.",
        "Delegate entirely to IT without marketing leadership.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Phased change with governance and people readiness precedes scale. Re-read sections 6.7 and 6.8.",
      wrongFeedback:
        "Pilot, govern, and develop people before big-bang rollout. Re-read sections 6.7 and 6.8.",
    },
  ],
});
