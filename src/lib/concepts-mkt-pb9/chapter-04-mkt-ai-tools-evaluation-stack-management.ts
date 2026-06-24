import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter04MktAiToolsEvaluationStackManagement = buildChapter({
  slug: "mkt-ai-tools-evaluation-stack-management",
  number: 4,
  shortTitle: "AI Tools Evaluation & Stack Management",
  title: "AI Tools Evaluation & Stack Management",
  readingMinutes: 24,
  summary:
    "AI marketing stack management requires rigorous evaluation — capability fit, integration, pricing, data handling, support — plus structured 30-day pilots, ROI measurement, security review, quarterly audits, and portfolio decisions on consolidation vs specialisation. This chapter gives marketers the framework to adopt tools that compound workflow value and cut shelfware before renewal.",
  keyTakeaway:
    "Treat AI tools as workflow investments, not novelty subscriptions. Evaluate on five dimensions, pilot on real work, measure ROI in time and quality, audit quarterly, and architect a coherent stack — powerful without unwieldy.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "4.1",
      title: "The AI Tool Evaluation Framework",
      subtitle: "Capability fit, integration quality, pricing model, data handling, and support — five dimensions of rigorous tool evaluation",
      take: "AI tool evaluation scores vendors on five dimensions before pilot: (1) capability fit — does it solve a defined workflow gap better than current stack? (2) integration — native connectors to HubSpot, Salesforce, GA4, CMS, design tools? (3) pricing — per seat, usage, output caps at your scale? (4) data handling — training opt-out, retention, DPA, region? (5) support — onboarding, SLA, community? Weight dimensions by risk — regulated industries weight data handling highest. Scorecard 1–5 per dimension; below 3.5 average kills before pilot unless strategic bet.",
      why: "Demo-driven buying produces shelfware. Framework forces workflow anchor and comparability.",
      paragraphs: [
        [
          s("Start evaluation with written workflow gap — not vendor inbound. "),
          x(
            "Gap doc: current state, pain cost (hours, errors, revenue), must-have capabilities, nice-to-haves, data classification involved.",
            "Solutions looking for problems accumulate — average marketing team carries 12+ overlapping SaaS.",
          ),
          s(" Require two alternatives scored — including 'improve current tool' and 'build in Claude'."),
        ],
        [
          s("Score integration and data before feature excitement. "),
          x(
            "Feature parity demos ignore export friction and SSO gaps. Integration failure means manual CSV hell — ROI negative.",
            "Ask vendors: model training on customer data default? Opt-out process? Subprocessor list?",
          ),
          s(" Legal and IT on scorecard for any tool touching customer or unpublished content."),
        ],
        [
          s("Use weighted scorecard aligned to company risk profile. "),
          x(
            "Template: five dimensions × weight × score. Document in decision memo for procurement audit trail.",
            "Tie-breaker: which tool improves shared prompt library and workflow compatibility.",
          ),
          s(" Reject tools refusing security questionnaire — non-negotiable for marketing data."),
        ],
      ],
      examples: [
        {
          title: "Scorecard kill — writing tool",
          body: "Writing AI tool scored 4.5 capability, 2.0 integration with HubSpot and 2.5 data handling. Killed before pilot — manual export would cost 4 hours weekly, erasing time savings. Team extended Claude Project instead.",
        },
        {
          title: "Data weighting — healthcare",
          body: "Healthcare marketing weighted data handling 40% on scorecard. Consumer-grade tool with vague training policy disqualified despite flashy creative features. Enterprise vendor won at higher price — compliance signed off.",
        },
        {
          title: "Build alternative — analytics",
          body: "Natural-language BI vendor scored 3.8; 'Claude on curated Snowflake views' scored 4.1 on integration and cost. Chose build — saved $48K annual; analyst curated views weekly.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-era-ch4-tool-evaluation",
      type: "flow",
      title: "AI Tool Evaluation Flow",
      caption:
        "Define need → 30-day pilot on real workflow → measure ROI → security check → adopt or cut at quarterly audit.",
    }),
    buildSection({
      number: "4.2",
      title: "The Pilot Process for New AI Tools",
      subtitle: "How to test a new marketing AI tool before subscription commitment — the 30-day evaluation workflow",
      take: "30-day pilot structure: week zero setup and baseline metrics; weeks 1–2 run real workflow on live work with 5–8 users; week 3 measure and gather friction log; week 4 decision memo adopt, extend, or kill. Pilot charter defines success metrics upfront — hours saved, quality score delta, integration tasks completed. No parallel shadow work on fake briefs — pilots on production with rollback plan. Kill decision celebrated — prevents zombie subscriptions.",
      why: "Annual contracts signed from demo adrenaline regret at renewal. Pilots convert hype into evidence.",
      paragraphs: [
        [
          s("Write pilot charter before vendor access — success criteria non-negotiable. "),
          x(
            "Charter: users, workflow, baseline time/quality, target improvement, data allowed, exit date, decision owner.",
            "Open-ended pilots drift to 'still evaluating' at renewal invoice.",
          ),
          s(" Baseline measured week zero — not estimated from memory."),
        ],
        [
          s("Run on real work with daily friction log. "),
          x(
            "Log: integration pain, off-brand outputs, support tickets, workarounds. Users submit weekly — ops synthesises.",
            "Fake pilot work on lorem ipsum hides integration failure.",
          ),
          s(" Mid-pilot check day 15 — kill early if criteria clearly unmet."),
        ],
        [
          s("Decision memo within five days of pilot end. "),
          x(
            "Adopt: rollout plan, training, library integration, sunset overlaps. Extend: only with new hypothesis and metrics. Kill: notify vendor, document lessons.",
            "Extend without new hypothesis is avoidance behaviour.",
          ),
          s(" Share memo with finance — builds trust in marketing procurement discipline."),
        ],
      ],
      examples: [
        {
          title: "Pilot kill — image AI",
          body: "Image AI pilot targeted ad creative variants. Quality score averaged 3.1 vs 4.4 human briefed Midjourney workflow. Killed day 22 — saved $28K annual. Lesson: capability fit insufficient without brand rubric pass rate.",
        },
        {
          title: "Pilot adopt — research tool",
          body: "Research synthesis tool pilot on competitive briefs: research phase 6h to 2.5h, strategist satisfaction 4.6/5. Adopted with SSO and prompt library links. Rollout completed before Q4 campaign surge.",
        },
        {
          title: "Extend trap avoided",
          body: "Team wanted third 30-day extension on social tool — no new metrics. CMO enforced kill per charter. Freed budget for proven email AI — discipline precedent set.",
        },
      ],
    }),
    buildSection({
      number: "4.3",
      title: "Measuring AI Tool ROI",
      subtitle: "Time saved, quality improvement, and output increase that justify each tool's cost — individual tool ROI calculation",
      take: "AI tool ROI formula combines hard and soft value: (hours saved × loaded labour rate) + (quality improvement × value of outcome) + (output enablement × marginal revenue) − (licence + implementation + ongoing admin). Measure honestly — saved hours must be reallocated to valuable work, not lost to meetings. Quality improvements need rubric scores or business metrics. Minimum hurdle: payback under 12 months for point tools, under 24 for platform bets. Document ROI at renewal — kill tools that cannot show value.",
      why: "CFO scrutiny on martech intensifies. Marketers who quantify ROI keep budget; those who cite 'everyone uses AI' lose it.",
      paragraphs: [
        [
          s("Calculate loaded cost of time saved — verify reallocation. "),
          x(
            "Example: 5 users × 2 hours weekly saved × $75 loaded rate × 50 weeks = $37.5K annual labour value. Licence $24K — positive if hours reinvested in pipeline work.",
            "Phantom savings — same output, same hours, more tools — ROI negative.",
          ),
          s(" Survey users: where did saved time go? Red flag if answer is unclear."),
        ],
        [
          s("Quantify quality and outcome deltas where possible. "),
          x(
            "Brand score up 0.5 points; email open rate +3pp; campaign launch cycle −3 days → pipeline impact model.",
            "Soft 'feels faster' insufficient at renewal — tie to metric dictionary.",
          ),
          s(" Compare pilot cohort vs control when feasible — holdout strengthens case."),
        ],
        [
          s("Include implementation and admin cost — often omitted. "),
          x(
            "Integration dev, training hours, library maintenance, IT security review — amortise year one.",
            "Cheap licence with 200-hour implementation is expensive tool.",
          ),
          s(" ROI dashboard per tool in marketing ops tracker — review quarterly."),
        ],
      ],
      examples: [
        {
          title: "ROI proof — Claude Team",
          body: "Marketing team documented 142 hours monthly saved on drafts and reporting, reallocated to ABM research. Loaded value $128K vs $72K licence and admin. Renewed with finance endorsement — model for other departments.",
        },
        {
          title: "Negative ROI exposed — duplicate SEO",
          body: "SEO AI tool $15K overlapped Surfer and Claude workflows. Usage analytics: 12% MAU. ROI negative after admin. Killed at audit — redirected to analyst contractor for strategy.",
        },
        {
          title: "Quality ROI — creative suite",
          body: "Creative AI suite raised ad relevance scores 8% — modelled $95K incremental revenue on $30K spend. ROI case included outcome not just time — secured expansion to EU team.",
        },
      ],
    }),
    buildSection({
      number: "4.4",
      title: "Integration & Workflow Compatibility",
      subtitle: "Evaluating whether a new tool fits existing stack and workflow or requires expensive process changes to adopt",
      take: "Integration assessment maps data flows: source systems → AI tool → destinations. Native integrations beat Zapier chains for reliability. Workflow compatibility: does tool slot into existing brief → draft → edit → publish or force parallel process? High switching cost tools need 2× ROI hurdle. API availability, webhook support, and SSO determine enterprise fit. Marketing ops prototypes integration in pilot week zero — not after contract signed.",
      why: "Isolated tools become islands — adoption dies when export friction exceeds AI benefit.",
      paragraphs: [
        [
          s("Map integration architecture before pilot — data in and out. "),
          x(
            "Diagram: CRM fields read, CMS publish path, asset storage, analytics tags. Gap list with engineering estimate.",
            "CSV export weekly is not integration — flag as friction cost in ROI.",
          ),
          s(" Kill tools requiring bespoke integration over 80 hours unless platform bet."),
        ],
        [
          s("Test workflow fit with real roles — not only power user. "),
          x(
            "Junior marketer, editor, and ops each run pilot tasks. If only power user succeeds, rollout will fail.",
            "UI complexity hidden in vendor-led demos — observe unaided usage.",
          ),
          s(" Workflow fit score in pilot memo — separate from feature score."),
        ],
        [
          s("Prefer tools that strengthen single workflow hub. "),
          x(
            "Notion, Asana, HubSpot, or CMS as hub — tool should attach not compete. Fragmented hubs multiply login fatigue.",
            "Consolidation opportunity when new tool replaces three Zap steps.",
          ),
          s(" Document integration in library SOP — maintenance owner assigned."),
        ],
      ],
      examples: [
        {
          title: "Integration win — HubSpot native",
          body: "Email AI with native HubSpot integration published drafts directly to workflows. Zero export friction — adoption 92% MAU in 60 days. Zapier-dependent competitor pilot showed 41% MAU — killed.",
        },
        {
          title: "Workflow misfit — standalone app",
          body: "Standalone AI app required duplicate brief entry outside Asana campaign hub. Users abandoned — reverted to Claude in Project linked from Asana. Lesson: workflow compatibility beat standalone features.",
        },
        {
          title: "Engineering estimate — CDP adjacent",
          body: "Tool needed custom Segment function — 120 engineering hours quoted. ROI model negative. Chose warehouse-native alternative with existing Fivetran pipe — integrated in two days.",
        },
      ],
    }),
    buildSection({
      number: "4.5",
      title: "Data Security & Privacy Evaluation",
      subtitle: "Questions to ask every AI marketing tool vendor about data handling before granting customer or content access",
      take: "Security questionnaire for marketing AI: Is customer PII processed? Default model training on inputs? Data retention period? Subprocessors and regions? SOC 2 / ISO 27001? SSO and audit logs? BAA for healthcare? Right to delete? Marketing often handles PII in briefs, lists, and transcripts — treat as sensitive. Free tiers and consumer apps frequently fail enterprise policy. Legal sign-off before pilot if data classification is confidential.",
      why: "One marketing tool data leak becomes company incident. Security evaluation is non-delegable to junior buyers.",
      paragraphs: [
        [
          s("Use standard security questionnaire — no verbal assurances. "),
          x(
            "Questions: training opt-out default, encryption, access controls, incident history, DPA availability, data residency.",
            "Vendor 'we take security seriously' without documentation fails.",
          ),
          s(" IT security review gate before production data in pilot."),
        ],
        [
          s("Classify marketing data types allowed per tool tier. "),
          x(
            "Public web copy OK in approved tools; customer lists restricted to enterprise with DPA; executive strategy docs internal-only models.",
            "Classification matrix posted — marketers self-serve allowed combinations.",
          ),
          s(" Block shadow consumer accounts with enforcement not honour system."),
        ],
        [
          s("Plan deletion and offboarding at adoption. "),
          x(
            "Contract end: export prompts, delete workspace data, revoke SSO. Vendor confirmation of deletion in writing.",
            "Prompt libraries may contain confidential strategy — treat as IP.",
          ),
          s(" Annual security re-review on renewal — policies change."),
        ],
      ],
      examples: [
        {
          title: "DPA block — free tier",
          body: "Team used consumer ChatGPT for customer interview summaries — PII risk. IT blocked; migrated to Claude Team with DPA and training opt-out. Near-miss drove classification matrix and training.",
        },
        {
          title: "Healthcare BAA — vendor swap",
          body: "Healthcare marketing required BAA. General writing tool declined. Switched to compliant vendor at 2× price — security dimension correctly weighted in framework.",
        },
        {
          title: "Deletion audit — offboarding",
          body: "Agency contract ended; AI tool workspace contained unreleased campaign data. Deletion certificate requested — vendor delayed. Escalation clause in future contracts — lesson for procurement template.",
        },
      ],
    }),
    buildSection({
      number: "4.6",
      title: "The Quarterly Tool Audit",
      subtitle: "Reviewing AI tool stack for utilisation, ROI, and continued fit — discipline that prevents paying for tools nobody uses",
      take: "Quarterly audit inventory: all AI-related subscriptions, MAU/usage stats, ROI dashboard, overlap map, renewal dates. Categories: keep, optimise, consolidate, kill. Interview users on friction — low usage often means workflow misfit not laziness. Align audit before renewal windows — negotiate from strength or exit. Communicate kills clearly — celebrate budget freed. Ops owner runs audit; marketing leader signs decisions.",
      why: "Shelfware accumulates silently. Quarterly audit is immune system for stack health.",
      paragraphs: [
        [
          s("Maintain live stack registry — single source of truth. "),
          x(
            "Fields: tool, owner, workflow, cost, renewal, MAU, last ROI calc, integrations, risk tier.",
            "Finance surprise renewals happen when registry absent.",
          ),
          s(" Update registry within 48 hours of any new pilot adopt."),
        ],
        [
          s("Run utilisation and overlap analysis each quarter. "),
          x(
            "Flag MAU under 40% for kill review. Map overlapping capabilities — consolidate candidates.",
            "Two tools same job — pick winner unless specialist ROI proven.",
          ),
          s(" User interviews: three questions — value, friction, alternative."),
        ],
        [
          s("Decision meeting outputs action list with owners and dates. "),
          x(
            "Kill: cancellation initiated. Consolidate: migration plan. Optimise: training or integration fix assigned.",
            "Audit without actions is spreadsheet theatre.",
          ),
          s(" Share summary with finance — demonstrates marketing fiscal discipline."),
        ],
      ],
      examples: [
        {
          title: "Audit savings — mid-market SaaS",
          body: "Q3 audit killed four tools totalling $41K annual — low MAU and overlap with Claude Team. Reallocated to events budget with CFO praise. Audit ritual now fixed calendar invite.",
        },
        {
          title: "Optimise not kill — adoption fix",
          body: "Tool at 35% MAU flagged kill; interviews revealed training gap not value gap. Two workflow workshops raised MAU to 71% — ROI positive. Audit category 'optimise' saved good tool.",
        },
        {
          title: "Renewal leverage — negotiate",
          body: "Usage data from audit showed 60% seat idle on enterprise writing tool. Renegotiated seat count — saved $18K without losing capability. Audit data strengthened procurement position.",
        },
      ],
    }),
    buildSection({
      number: "4.7",
      title: "Consolidation vs Specialisation",
      subtitle: "When to consolidate to fewer broader tools and when to maintain specialist tools for specific high-value tasks",
      take: "Consolidate when tools overlap on same workflow, integration tax exceeds specialist benefit, or general platform reached 'good enough' on task. Specialise when domain requires depth — video editing, advanced SEO, MMM, design systems — and specialist ROI proven independently. Portfolio rule: one primary platform per workflow class (writing, image, analytics, automation); specialists need annual ROI defence. Avoid collector mindset — stack coherence beats feature maximalism.",
      why: "Wrong portfolio choice either bleeds budget on overlap or sacrifices quality on core workflows.",
      paragraphs: [
        [
          s("Define workflow classes before adding specialists. "),
          x(
            "Classes: generative text, image/video, analytics/BI, automation, personalisation. One primary per class unless specialist clears ROI hurdle.",
            "Class ambiguity — two 'writing' tools — means consolidate.",
          ),
          s(" Document primary and specialist in registry with rationale."),
        ],
        [
          s("Specialist retention criteria — annual defence. "),
          x(
            "Specialist survives if: quality delta measurable, time save >20%, no primary replacement roadmap, integration maintained.",
            "Sentimental retention — 'designers love it' — without metrics fails audit.",
          ),
          s(" Sunset specialists that primary absorbed via upgrade."),
        ],
        [
          s("Consolidation migration plan — don't run dual indefinitely. "),
          x(
            "Migration: export assets, remap integrations, train users, kill date. Dual-run over 90 days burns admin and confuses library.",
            "Prompt library migration included in consolidation plan.",
          ),
          s(" Communicate consolidation as simplification win — reduce cognitive load."),
        ],
      ],
      examples: [
        {
          title: "Consolidate writing — three to one",
          body: "Three writing tools consolidated to Claude Team + library. Migration 45 days; prompts ported. MAU unified; governance enforceable. Designers kept Figma specialist — distinct workflow class.",
        },
        {
          title: "Specialist retained — video",
          body: "General image AI insufficient for video ads. Specialist video tool ROI $4.2 per $1 on performance creative. Annual defence passed — retained despite consolidation pressure elsewhere.",
        },
        {
          title: "Dual-run drag — automation",
          body: "Make and Zapier both active 14 months — nobody killed either. Audit mandated kill; standardised Make. Integration incidents dropped 50%; ops hours recovered.",
        },
      ],
    }),
    buildSection({
      number: "4.8",
      title: "Marketer Decision Lens: Building a Coherent AI Marketing Stack",
      subtitle: "Guiding principles for a stack that is powerful without unwieldy — architecture thinking that prevents the tool-collection trap",
      take: "Coherent stack principles: workflow-first not tool-first; every tool maps to documented workflow; integration and security gates precede adoption; quarterly audit mandatory; consolidation default unless specialist ROI proven; shared library is connective tissue. Decision lens before new tool: (1) which workflow class? (2) primary already exists? (3) pilot charter ready? (4) security cleared? (5) kill plan for overlap? Five yes → pilot; any no → fix or defer. Stack architecture diagram updated annually — visible to team.",
      why: "Collection traps produce login fatigue, governance holes, and renewal regret. Architecture is marketing leadership.",
      paragraphs: [
        [
          s("Draw stack architecture — workflows not logos. "),
          x(
            "Diagram layers: data sources, AI processing tools, hubs (CRM/CMS), activation channels. Gaps and overlaps visible instantly.",
            "Logo slide decks impress executives briefly — workflow diagrams enable decisions.",
          ),
          s(" Post diagram in handbook — onboarding explains stack rationale."),
        ],
        [
          s("Apply five-gate checklist before every new pilot. "),
          x(
            "Workflow class, primary overlap, charter, security, kill plan. Checklist in procurement ticket — no exceptions for 'urgent' vendor hype.",
            "Urgent demos before campaign are recurring trap — plan pilots in calm periods.",
          ),
          s(" CMO or delegate signs checklist — accountability visible."),
        ],
        [
          s("Measure stack coherence metrics annually. "),
          x(
            "Tools per workflow class, MAU average, integration incident count, audit kill rate, ROI-positive percentage.",
            "Coherence improving when tool count flat or falling while outcomes rise.",
          ),
          s(" Celebrate simplification wins — fewer tools, better outcomes, team relief."),
        ],
      ],
      examples: [
        {
          title: "Architecture reset — scale-up CMO",
          body: "CMO published workflow-first stack diagram; killed seven tools over two audits. Team survey: 'clarity' top improvement theme. Pipeline metrics continued upward — coherence not constraint.",
        },
        {
          title: "Five-gate block — hype tool",
          body: "Sales rep pushed trendy AI video tool. Five-gate failed on security and overlap. Blocked; piloted after vendor achieved SOC 2 next year. Avoided premature data exposure.",
        },
        {
          title: "Library as glue — post-merger",
          body: "Two marketing orgs merged with different stacks. Unified on workflow classes and shared library before tool consolidation. Six-month merge smoother than peer acquisition — architecture thinking first.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Five dimensions of AI tool evaluation framework include which set?",
      options: [
        "Logo colour, office location, founder Twitter followers",
        "Capability fit, integration, pricing, data handling, support",
        "Only monthly licence cost",
        "Number of AI models listed on website",
      ],
      correct: 1,
      correctFeedback:
        "Right. Five dimensions anchor rigorous evaluation. Re-read section 4.1.",
      wrongFeedback:
        "Evaluate capability, integration, pricing, data, and support. Re-read section 4.1.",
    },
    {
      kind: "order",
      q: "Order the 30-day pilot process from first to last.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Write pilot charter with success metrics",
        "Measure week-zero baseline",
        "Run real workflow with friction log",
        "Day 15 mid-pilot kill/continue check",
        "Decision memo adopt, extend, or kill",
      ],
      correctFeedback:
        "Right. Charter, baseline, pilot, check, decide. Re-read section 4.2.",
      wrongFeedback:
        "Pilot requires charter and baseline before decision. Re-read section 4.2.",
    },
    {
      kind: "categorize",
      q: "Sort vendor claims into requires written verification vs insufficient alone.",
      categories: ["Requires written verification", "Insufficient alone"],
      items: [
        { text: "SOC 2 report and DPA terms.", category: 0 },
        { text: "Sales rep says 'we take security seriously'.", category: 1 },
        { text: "Training opt-out default in contract.", category: 0 },
        { text: "Demo looked impressive in meeting.", category: 1 },
        { text: "Subprocessor list and data residency.", category: 0 },
        { text: "Gartner magic quadrant mention.", category: 1 },
      ],
      correctFeedback:
        "Right. Security needs documentation not demos. Re-read section 4.5.",
      wrongFeedback:
        "Verify data handling in writing — demos are insufficient. Re-read section 4.5.",
    },
    {
      q: "Tool MAU at 30% with workflow misfit identified — best audit action?",
      options: [
        "Auto-renew — sunk cost",
        "Kill or optimise with training/integration fix based on user interviews",
        "Buy more seats to drive adoption",
        "Hide usage from finance",
      ],
      correct: 1,
      correctFeedback:
        "Right. Audit drives kill or optimise with evidence. Re-read section 4.6.",
      wrongFeedback:
        "Low MAU triggers kill or optimise — not blind renewal. Re-read section 4.6.",
    },
    {
      q: "When should a specialist AI tool be retained over consolidation?",
      options: [
        "When designers like the UI",
        "When measurable quality or ROI delta justifies annual defence",
        "When vendor sends swag",
        "Always — more tools is better",
      ],
      correct: 1,
      correctFeedback:
        "Right. Specialists need ROI defence. Re-read section 4.7.",
      wrongFeedback:
        "Retain specialists only with proven ROI delta. Re-read section 4.7.",
    },
    {
      kind: "categorize",
      q: "Match five-gate checklist item to coherent stack principle.",
      categories: ["Required before pilot", "Tool-collection trap"],
      items: [
        { text: "Security clearance for data class.", category: 0 },
        { text: "Adopt because competitor announced tool.", category: 1 },
        { text: "Kill plan for overlapping primary.", category: 0 },
        { text: "Skip pilot — annual contract discount.", category: 1 },
        { text: "Workflow class documented.", category: 0 },
        { text: "No registry — renewals surprise finance.", category: 1 },
      ],
      correctFeedback:
        "Right. Gates and registry prevent collection trap. Re-read section 4.8.",
      wrongFeedback:
        "Coherent stack requires gates, workflow map, and registry. Re-read section 4.8.",
    },
  ],
});
