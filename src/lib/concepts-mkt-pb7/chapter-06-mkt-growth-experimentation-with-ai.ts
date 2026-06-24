import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter06MktGrowthExperimentationWithAi = buildChapter({
  slug: "mkt-growth-experimentation-with-ai",
  number: 6,
  shortTitle: "Growth Experimentation with AI",
  title: "Growth Experimentation with AI — Hypothesis Generation, Statistical Rigor, and Learning Systems That Compound Pipeline Growth",
  readingMinutes: 24,
  summary:
    "Growth experimentation turns marketing from campaign calendar into a learning engine — structured hypotheses, prioritised backlogs, valid tests, and institutional memory that compounds. AI accelerates hypothesis generation from funnel data, variant drafting, and post-test synthesis, but velocity without rigor produces false positives and organisational cynicism. Marketer-owned architecture: experiment taxonomy by funnel stage, ICE or similar prioritisation, statistical guardrails, learning logs accessible to GTM teams, and governance that prevents HiPPO overrides. Teams that run tests without logging learnings repeat failures; teams that treat experimentation as a programme shift CAC and conversion quarter over quarter.",
  keyTakeaway:
    "Experimentation is a programme, not a landing page hobby. The sequence that wins: generate hypotheses from data → prioritise with ICE and capacity → design valid tests → run and analyse with discipline → log learnings institutionally → run a decision lens before scaling AI-generated variants. AI accelerates ideation and analysis; marketers own validity, prioritisation, and culture.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "6.1",
      title: "Experimentation Framework & Hypothesis Generation",
      subtitle: "Taxonomy, data sources, and AI-assisted ideation — hypotheses worth testing",
      take: "An experimentation framework defines what you test: funnel stage (awareness, activation, conversion, expansion), channel, audience segment, and metric moved. AI mines analytics, CRM drop-off, heatmaps, and support tickets for hypothesis candidates — 'checkout abandon at payment step correlates with mobile Safari.' Marketers format hypotheses: If [change], then [metric] will [direction] because [reason]; success criteria and minimum detectable effect stated before launch.",
      why: "Random A/B tests without framework produce noise. Structured hypothesis generation focuses limited experiment capacity on pipeline and revenue levers — not button colour roulette.",
      paragraphs: [
        [
          s("Anchor hypotheses to business metrics, not tool defaults. "),
          x(
            "Primary metrics: MQL volume, SQL conversion, opp create rate, CAC, payback period. Secondary: CTR, time on page, form completion. AI correlates funnel steps with segment — surfaces 'enterprise demo request form abandonment 2.3x consumer.' Hypothesis ties change to primary metric where sample allows.",
            "Optimising email open rate while SQL conversion flat is local maximum theatre.",
          ),
          s(" Hypothesis template mandatory in experiment intake — no 'let us try this' without predicted impact."),
        ],
        [
          s("AI ideation from multi-source data beats brainstorm-only. "),
          x(
            "Feed AI: 90-day GA4 funnel, HubSpot stage conversion, Hotjar scroll maps, win-loss themes, competitor landing changes. Prompt: generate 20 hypotheses ranked by estimated pipeline impact and test feasibility.",
            "Brainstorm-only hypotheses reflect marketer bias — data seeding diversifies bets.",
          ),
          s(" Weekly ideation ritual: AI draft plus human filter — reject ideas without measurable outcome or sufficient traffic."),
        ],
        [
          s("Taxonomy enables learning retrieval later. "),
          x(
            "Tag every experiment: stage, channel, segment, element type (copy, offer, layout, audience). Consistent tags power AI search across learning log — 'what worked for enterprise consideration?'",
            "Untagged experiments become anecdote — taxonomy is institutional memory infrastructure.",
          ),
          s(" Taxonomy documented in experimentation handbook — new hires tag correctly from test one."),
        ],
      ],
      examples: [
        {
          title: "Funnel drop-off hypothesis — form fix",
          body: "AI analysis flagged 62% drop at multi-field demo form on mobile. Hypothesis: reduce to 3 fields plus calendar embed increases SQL submit rate 25%+. Test ran 3 weeks; mobile SQL rate up 31%; downstream opp quality unchanged. Learning logged under 'consideration / form / mobile.'",
        },
        {
          title: "Win-loss seeded test — pricing page",
          body: "Win-loss synthesis: 6 losses cited 'pricing unclear vs competitor.' Hypothesis: comparison table with TCO calculator increases demo requests from pricing page 15%. A/B test confirmed 19% lift; rolled out globally. Tagged 'evaluation / pricing / mid-market.'",
        },
        {
          title: "Rejected AI hypothesis — traffic reality",
          body: "AI proposed testing homepage hero for enterprise segment — traffic 400/month. Marketer rejected: insufficient sample for 95% confidence on SQL metric within quarter. Redirected capacity to paid landing page with 12K monthly visits. Avoided 8-week inconclusive test.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-dg-ch6-experiment-loop",
      type: "flow",
      title: "Growth Experiment Loop",
      caption:
        "Hypothesis from data → design valid test → ICE prioritise backlog → run and analyse → log learning → feed next hypothesis cycle.",
    }),
    buildSection({
      number: "6.2",
      title: "Test Design & Statistical Rigor",
      subtitle: "Sample size, duration, guardrails, and novelty effects — valid conclusions only",
      take: "Valid test design specifies: control and variant, primary metric, sample size calculator output, minimum runtime, and exclusion rules (bot traffic, internal IPs). AI estimates duration from traffic forecasts — but marketers enforce no peeking policies, sequential testing discipline, and holdout groups for major changes. Invalid tests waste capacity and erode trust when leadership sees contradictory results.",
      why: "Calling tests early on noise produces false wins rolled out globally — then reversed at pipeline cost. Rigor is respect for the organisation's learning budget.",
      paragraphs: [
        [
          s("Pre-register success criteria before launch. "),
          x(
            "Document: expected lift, confidence level, minimum sample per variant. Use Evan Miller or similar calculator. AI drafts test plan doc from hypothesis — human approves before traffic split.",
            "Peeking at results daily and stopping on first green inflates false positive rate dramatically.",
          ),
          s(" Test plan stored in experiment repo — audit trail for rolled-out changes."),
        ],
        [
          s("Scan for novelty and seasonality confounds. "),
          x(
            "Major tests avoid holiday weeks, product outages, or simultaneous campaigns on same audience. Holdout 10% on large pricing or offer changes to measure long-term effect. AI flags calendar conflicts from marketing calendar feed.",
            "Launch week traffic spikes contaminate conversion tests — schedule around or exclude.",
          ),
          s(" Document external factors in learning log even when test completes — context for meta-analysis."),
        ],
        [
          s("Multivariate only when traffic supports it. "),
          x(
            "Most B2B teams lack traffic for full factorial tests. Prefer sequential A/B on highest-impact element. AI can suggest element priority from heatmap importance — one change per test for clear attribution.",
            "Multivariate on low traffic produces 'winner' that is statistical ghost.",
          ),
          s(" Interaction tests reserved for high-traffic PLG flows — enterprise sites rarely qualify."),
        ],
      ],
      examples: [
        {
          title: "Peeking policy save",
          body: "Marketer stopped test at day 5 with 90% 'confidence' on early data. Analyst replay showed regression to mean by day 21 — no significant lift. Policy: minimum 14 days and pre-calculated sample before read. Avoided rolling losing variant to 100% traffic.",
        },
        {
          title: "Seasonality control",
          body: "Black Friday test on free trial CTA looked +40% lift — but all traffic spiked. Re-ran in January with holdout; true lift 8%. Learning: tag seasonal tests separately; require non-promotional validation before global roll.",
        },
        {
          title: "Sample size gate",
          body: "Product wanted 4-way headline test on blog CTA. Traffic supported 2 variants in 4 weeks only. Sequential A/B on top two AI-ranked headlines; winner then tested against control. Clear winner in 6 weeks vs inconclusive 4-way.",
        },
      ],
    }),
    buildSection({
      number: "6.3",
      title: "ICE Prioritisation & Backlog Management",
      subtitle: "Impact, confidence, ease scoring and capacity planning — finite tests, infinite ideas",
      take: "ICE scoring ranks backlog: Impact (pipeline or revenue if win), Confidence (evidence strength), Ease (implementation and traffic requirements). AI pre-scores from historical similar tests and funnel impact estimates — council adjusts. Backlog cap: run only experiments matching squad capacity; WIP limits prevent 12 concurrent inconclusive tests.",
      why: "Idea volume exceeds test capacity 100:1. Prioritisation without scoring becomes loudest stakeholder wins — usually HiPPO, not highest leverage.",
      paragraphs: [
        [
          s("Score consistently with documented rubrics. "),
          x(
            "Impact 1–10: tie to ARR or SQL forecast where possible. Confidence: data-backed=8, anecdote=3. Ease: dev hours plus time to significance. AI fills draft scores; growth council finalises weekly.",
            "Subjective scoring without rubric makes ICE a cosmetic exercise.",
          ),
          s(" ICE sheet linked in experiment tool — every live test traceable to prioritisation decision."),
        ],
        [
          s("Capacity-based WIP limits. "),
          x(
            "Rule of thumb: 2–4 concurrent tests per growth marketer plus one dev slot. Queue rest. AI backlog report highlights stale high-ICE items blocked on resource — escalates in GTM standup.",
            "Parallel tests on overlapping audiences contaminate results — WIP limits reduce collision.",
          ),
          s(" Quarterly backlog prune: drop ICE below threshold or obsolete hypotheses."),
        ],
        [
          s("Balance quick wins and strategic bets. "),
          x(
            "70% capacity on high-confidence funnel fixes; 30% on exploratory channel or offer tests. AI tags bets vs fixes — council guards exploration budget when quarter behind pipeline.",
            "All quick wins miss step-change growth; all bets miss quarterly targets.",
          ),
          s(" Portfolio mix reviewed in monthly growth review with demand gen and product marketing."),
        ],
      ],
      examples: [
        {
          title: "ICE council — stakeholder override blocked",
          body: "VP demanded immediate homepage video test — ICE score 12/30, low traffic. Council queued behind pricing page test (ICE 24/30). Pricing test +18% SQL; video test later showed neutral. Documented prioritisation protected quarter pipeline.",
        },
        {
          title: "WIP collision avoided",
          body: "Two tests targeted same paid landing audience — discovered in backlog review. Sequenced second test 2 weeks after first. First test clean read; second informed by first learning. Avoided audience split contamination.",
        },
        {
          title: "Backlog prune",
          body: "Backlog grew to 140 ideas — 60% older than 6 months. AI flagged obsolete (product UI changed). Pruned to 45 active; council velocity doubled. Lesson: quarterly prune as important as ideation.",
        },
      ],
    }),
    buildSection({
      number: "6.4",
      title: "Channel & Funnel Experiments",
      subtitle: "Paid, email, nurture, and PLG tests — stage-appropriate experiment types",
      take: "Channel experiments match stage: awareness tests (creative, audience, bid strategy), consideration tests (lead magnet, webinar format, nurture sequence), conversion tests (demo flow, trial onboarding, pricing presentation). AI drafts ad variants and email branches from messaging house — marketers enforce brand and compliance. Funnel experiments connect metrics across stages to detect local optima that hurt SQL quality.",
      why: "Optimising one stage in isolation degrades another — high MQL volume with falling SQL rate is classic misaligned experimentation.",
      paragraphs: [
        [
          s("Guard downstream metrics on top-of-funnel tests. "),
          x(
            "Awareness test success requires MQL plus SQL conversion hold. AI dashboard tracks cohort quality post-change. Kill creative that lifts CTR but drops opp create rate.",
            "Cheap MQLs that never convert are experimentation anti-goals.",
          ),
          s(" Minimum 30-day downstream window before declaring TOF test winner."),
        ],
        [
          s("Nurture experiments need audience isolation. "),
          x(
            "Test one sequence branch at a time: subject line, CTA, content order. AI personalisation tests require clear control on same segment. HubSpot or Marketo experiment groups documented.",
            "Changing whole nurture while running form test confounds both — isolate.",
          ),
          s(" Sync experiment calendar with product launch and sales campaign — avoid overlap."),
        ],
        [
          s("PLG experiments differ from sales-led. "),
          x(
            "Self-serve: activation, feature adoption, upgrade triggers. Sales-led: demo booking, RFP response, executive briefing uptake. AI hypothesis sources differ — product analytics vs CRM. Do not copy PLG playbooks to enterprise motion blindly.",
            "Motion mismatch produces irrelevant tests — taxonomy includes GTM model tag.",
          ),
          s(" Cross-functional review when test touches product UX — PM sign-off required."),
        ],
      ],
      examples: [
        {
          title: "TOF guardrail — creative kill",
          body: "LinkedIn creative variant lifted CTR 45% but SQL conversion from those clicks down 22%. Downstream guardrail auto-flagged; creative killed despite 'winning' CTR. Saved wasted SDR follow-up on low-intent leads.",
        },
        {
          title: "Nurture branch test",
          body: "Tested case study vs webinar invite as email 3 in enterprise nurture. Case study branch SQL rate 1.4x; rolled out. AI drafted 4 case study snippets from proof library — human edited. Tagged nurture / enterprise / consideration.",
        },
        {
          title: "PLG vs sales-led",
          body: "Startup copied competitor's in-app upgrade prompt test — irrelevant for demo-only enterprise product. Reframed hypothesis around demo scheduling friction; calendar embed test +24% bookings. Motion tag prevented repeat mismatch.",
        },
      ],
    }),
    buildSection({
      number: "6.5",
      title: "Landing Page & Conversion Optimisation",
      subtitle: "Copy, layout, offer, and social proof tests — high-velocity learning surface",
      take: "Landing pages offer fastest experiment cycles when traffic sufficient: headline, subhead, CTA, form length, social proof placement, offer framing. AI generates variant copy from persona briefs and winning past tests — brand review mandatory. Personalisation tests (industry-specific hero) require traffic per variant or server-side rules with holdout.",
      why: "Landing pages concentrate intent traffic — small relative lifts compound on paid spend. Poor governance on AI copy risks off-brand or non-compliant claims at scale.",
      paragraphs: [
        [
          s("One primary change per test for attribution clarity. "),
          x(
            "Variant A: headline only. Next test: CTA. AI may draft full page variants — marketer sequences tests. Multielement redesigns confound learning unless full redesign intentional with long holdout.",
            "Full page AI variants win or lose opaquely — sequence for learning.",
          ),
          s(" Component library documents winning patterns — reuse before reinventing."),
        ],
        [
          s("Message-match with ad or email source. "),
          x(
            "LP test must preserve UTM segment analysis — same page with different entry messages tests message-match hypothesis separately. AI detects copy disconnect between ad and LP from crawl.",
            "Generic LP wastes paid click intent — match is often highest-ICE test.",
          ),
          s(" Dynamic text replacement only with analytics per variant — avoid invisible personalisation."),
        ],
        [
          s("Compliance on claims and customer logos. "),
          x(
            "AI-generated social proof or stats require source validation. Logo bar order tests OK; fabricated testimonials not. Legal list for regulated industries.",
            "LP tests move fast — compliance checklist on variant publish.",
          ),
          s(" Rollout winning LP template to campaign playbooks — close loop to demand gen."),
        ],
      ],
      examples: [
        {
          title: "Form length test — SQL lift",
          body: "Reduced fields from 8 to 4 on paid LP; added progressive profiling in nurture. SQL submit +28%; MQL-to-SQL quality stable. Learning became standard for all paid LPs — estimated $180K pipeline from single test.",
        },
        {
          title: "Message-match test",
          body: "Ad promised 'ROI in 90 days' but LP led with product features. Message-match variant aligned hero to ROI claim; conversion +34%. AI flagged disconnect from ad crawl — human designed test.",
        },
        {
          title: "Social proof placement",
          body: "Tested customer logo bar above vs below fold on enterprise LP. Above fold +12% demo requests — modest but rolled out globally on 6 LPs. Component library updated; ICE reprioritised next tests to offer framing.",
        },
      ],
    }),
    buildSection({
      number: "6.6",
      title: "AI-Assisted Analysis & Learning Logs",
      subtitle: "Post-test synthesis, meta-analysis, and searchable institutional memory",
      take: "Learning logs capture: hypothesis, result, confidence, segment insights, and recommendation (roll out, iterate, abandon). AI narrates results for stakeholders and searches past tests when planning new ones — 'show pricing tests for mid-market last 12 months.' Meta-analysis quarterly identifies patterns: copy length, offer type, form fields. Marketers own log quality — garbage in defeats AI retrieval.",
      why: "Organisations rerun failed tests because nobody remembers. Learning logs compound experiment ROI across employee turnover and years.",
      paragraphs: [
        [
          s("Standardise log entries at test close. "),
          x(
            "Required fields: ID, tags, hypothesis, result (win/loss/inconclusive), effect size, segment notes, next action. AI draft from experiment tool export — owner validates within 48 hours of test end.",
            "Logs completed months later are fiction — close-out SLA non-negotiable.",
          ),
          s(" Slack or wiki bot surfaces related past tests when new hypothesis submitted."),
        ],
        [
          s("Meta-analysis feeds strategy, not only tactics. "),
          x(
            "Quarterly: AI aggregates by tag — 'enterprise consideration tests win on proof-first 73% of time.' Informs messaging house and campaign briefs beyond individual LPs.",
            "Tactical wins without meta-analysis stay siloed in growth team.",
          ),
          s(" Share meta-analysis in GTM all-hands — celebrate learning, not only wins."),
        ],
        [
          s("Inconclusive tests are valuable assets. "),
          x(
            "Log failures prominently — prevents repeat. AI retrieval weights failures when similar hypothesis detected: 'Warning: similar test failed Q2 — sample size issue.'",
            "Failure-only-in-slides culture hides organisational memory.",
          ),
          s(" Blameless post-mortem on inconclusive tests — fix design, not person."),
        ],
      ],
      examples: [
        {
          title: "Duplicate test prevented",
          body: "Marketer proposed social proof test on SMB LP. AI log search surfaced identical inconclusive test 8 months prior — traffic too low. Redirected to higher-traffic page; avoided repeat waste. Log quality rated in team retro.",
        },
        {
          title: "Meta-analysis — messaging shift",
          body: "Quarterly meta-analysis: outcome-led headlines outperformed feature-led 2:1 in consideration stage. Messaging house updated; new campaign brief template. Pipeline influence attributed in marketing QBR.",
        },
        {
          title: "48-hour close-out SLA",
          body: "Implemented mandatory log within 48 hours via experiment tool webhook. Log completion rose from 41% to 94%. Searchable memory usable — new hire found 12 relevant tests in first week.",
        },
      ],
    }),
    buildSection({
      number: "6.7",
      title: "Culture & Governance for Experimentation",
      subtitle: "Council rhythm, tool stack, and stakeholder alignment — programme sustainability",
      take: "Experimentation governance: weekly growth council (demand gen, product marketing, analytics, optional dev), shared experiment repo, tool stack (Optimizely, VWO, native ad tests, analytics), and executive narrative on learning not only wins. AI lowers cost per test — governance prevents test proliferation that breaks site experience or brand consistency.",
      why: "Without culture, experimentation becomes one person's side project — first reorg kills it. Governance makes learning a GTM capability.",
      paragraphs: [
        [
          s("Council decides priorities; owners execute. "),
          x(
            "Council agenda: backlog ICE review, live test status, collisions, roll-outs. No council, no test launch — prevents rogue pages and conflicting splits.",
            "Distributed experimentation without council fragments brand and data.",
          ),
          s(" Executive sponsor attends quarterly — air cover when tests fail publicly."),
        ],
        [
          s("Tool stack documented with ownership. "),
          x(
            "Who owns Optimizely vs ad platform tests vs email experiments. AI monitoring flags orphan tests (no owner, past end date). Sunset policy for stale splits.",
            "Orphan tests at 50/50 split for months harm SEO and UX — audit monthly.",
          ),
          s(" Integration map: experiment ID flows to analytics for cohort reporting."),
        ],
        [
          s("Celebrate learning in public metrics. "),
          x(
            "Report tests run, win rate, cumulative pipeline impact estimate, top 3 learnings — not only winners. AI drafts quarterly experimentation newsletter from logs.",
            "Win-only reporting hides programme value and discourages risk.",
          ),
          s(" Tie experimentation OKR to learning log completion and roll-out count."),
        ],
      ],
      examples: [
        {
          title: "Council collision catch",
          body: "Paid and web teams planned simultaneous LP tests on same URL path — council caught in weekly sync. Sequenced tests; both completed valid. Pre-council era had 2 contaminated quarters.",
        },
        {
          title: "Orphan test audit",
          body: "Monthly audit found 3 splits running 90+ days without owner. Rolled back; one was accidentally suppressing 15% traffic to broken variant. Governance audit now automated via AI crawl of experiment tags.",
        },
        {
          title: "Executive learning narrative",
          body: "CMO presented '12 tests, 4 wins, $420K pipeline estimate, 8 logged learnings' vs wins-only deck. Board approved experimentation headcount. Failures framed as cost avoidance on bad roll-outs.",
        },
      ],
    }),
    buildSection({
      number: "6.8",
      title: "The Marketer Decision Lens — Experimentation Investment",
      subtitle: "When to scale tests, add tools, or expand AI variants — prioritising learning ROI",
      take: "Before scaling experiment volume or AI variant generation, run four checks: (1) is hypothesis intake tied to funnel metrics and taxonomy — framework before volume? (2) are test design standards enforced — rigor before velocity? (3) is ICE council resourced with WIP limits — focus before backlog bloat? (4) does learning log feed meta-analysis — memory before repetition? Scale AI drafting when rigor and logging hold. Add tools only when traffic and capacity justify.",
      why: "AI makes testing cheap to start — tempting teams to run many invalid tests. This lens prioritises learning quality over experiment count.",
      paragraphs: [
        [
          s("Check one: framework and metric alignment. "),
          x(
            "No primary metric on live tests → stop new launches until fixed. Hypotheses not tagged → taxonomy before AI ideation scale.",
            "Volume without framework is randomness at scale.",
          ),
          s(" Framework workshop gate precedes Optimizely tier upgrade."),
        ],
        [
          s("Check two: statistical discipline. "),
          x(
            "Peeking or early stops documented → policy training before more tests. Downstream metrics not tracked on TOF → guardrails before paid scale.",
            "Invalid wins rolled out damage more than no test.",
          ),
          s(" Analyst review on tests above traffic threshold — mandatory sign-off."),
        ],
        [
          s("Checks three and four: prioritisation and memory. "),
          x(
            "Backlog over 50 unreviewed → prune before new ideation sprint. Log completion under 70% → fix process before headcount. No meta-analysis in 6 months → quarterly ritual before new channel tests.",
            "Memory and focus prerequisites for scale.",
          ),
          s(" Run lens in quarterly growth review with demand gen and analytics leads."),
        ],
      ],
      examples: [
        {
          title: "AI variants deferred",
          body: "Tool offered unlimited AI LP variants. Lens: log completion 38%, no peeking policy. Deferred; implemented close-out SLA and test plan template. After 90 days at 91% log completion, piloted AI variants on 2 tests only — both valid reads.",
        },
        {
          title: "Tool expansion blocked",
          body: "Requested second A/B tool for product team. Lens: overlapping audiences with marketing tests, no council. Unified council and shared repo first; single tool expansion approved 6 months later with collision rate near zero.",
        },
        {
          title: "Headcount gated on memory",
          body: "Growth hire request denied until learning log searchable and meta-analysis presented once. Hired analyst to fix logs first; growth hire Q+1 with 120 logged tests as onboarding corpus.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Team runs many A/B tests but pipeline flat. What should marketing fix first?",
      options: [
        "Run more tests simultaneously.",
        "Align hypotheses to funnel metrics, enforce test rigor, and ICE-prioritise with learning logs.",
        "Test button colours on every page.",
        "Stop experimenting entirely.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Framework, rigor, and prioritisation precede volume. Re-read sections 6.1–6.3 and 6.6.",
      wrongFeedback:
        "Fix framework and rigor before scaling tests. Re-read sections 6.1–6.3 and 6.6.",
    },
    {
      q: "Early test results look positive at day 3. What governs the decision?",
      options: [
        "Ship winner immediately to maximise lift.",
        "Pre-registered sample size and duration — avoid peeking false positives.",
        "Ask the HiPPO which variant they prefer.",
        "Ignore statistics — trust intuition.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Pre-registration and duration discipline protect validity. Re-read section 6.2.",
      wrongFeedback:
        "Follow pre-registered test plans — no early peeking ship. Re-read section 6.2.",
    },
    {
      kind: "order",
      q: "Order the growth experiment loop from first step to last.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Generate tagged hypotheses from funnel data",
        "ICE prioritise and design valid tests",
        "Run experiments with WIP limits",
        "Log learnings and meta-analyse — feed next cycle",
      ],
      correctFeedback:
        "Right. Hypothesis → prioritise/design → run → learn. Re-read sections 6.1–6.8.",
      wrongFeedback:
        "Start with hypotheses; learning closes the loop. Re-read sections 6.1–6.8.",
    },
    {
      kind: "categorize",
      q: "Sort each practice into the correct experimentation layer.",
      categories: ["Framework & rigor", "Prioritisation & execution", "Analysis & culture", "Decision lens"],
      items: [
        { text: "Hypothesis template with primary metric.", category: 0 },
        { text: "ICE council with WIP limits.", category: 1 },
        { text: "48-hour learning log close-out.", category: 2 },
        { text: "Meta-analysis before scaling AI variants.", category: 3 },
        { text: "Pre-registered sample size calculator.", category: 0 },
        { text: "Downstream SQL guard on TOF tests.", category: 1 },
      ],
      correctFeedback:
        "Right. Framework = hypothesis and rigor. Execution = ICE and channel tests. Analysis = logs and culture. Lens = investment gates. Re-read sections 6.1–6.8.",
      wrongFeedback:
        "Match each practice to framework, execution, analysis, or lens. Re-read sections 6.1–6.8.",
    },
    {
      q: "Stakeholder demands immediate homepage test with low ICE score. What does council do?",
      options: [
        "Always obey HiPPO requests.",
        "Queue by ICE score and capacity — higher-impact tests first.",
        "Run all requested tests in parallel.",
        "Cancel experimentation programme.",
      ],
      correct: 1,
      correctFeedback:
        "Right. ICE prioritisation protects pipeline impact. Re-read sections 6.3 and 6.7.",
      wrongFeedback:
        "Council prioritises by ICE and capacity, not HiPPO. Re-read sections 6.3 and 6.7.",
    },
    {
      q: "Team reruns failed tests because nobody remembers results. What investment comes first?",
      options: [
        "More AI variant tools.",
        "Searchable learning logs with taxonomy and meta-analysis rhythm.",
        "Higher ad spend for traffic.",
        "Remove all failed tests from records.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Institutional memory compounds experimentation ROI. Re-read sections 6.1, 6.6, and 6.8.",
      wrongFeedback:
        "Build learning logs and meta-analysis before scaling tools. Re-read sections 6.1, 6.6, and 6.8.",
    },
  ],
});
