import { buildChapter, buildSection, s, x, sectionWithDiagram, MKT_CALLOUT } from "../concepts-mkt-helpers";

export const chapter01MktNavigatingAiMartechLandscape = buildChapter({
  slug: "mkt-navigating-ai-martech-landscape",
  number: 1,
  shortTitle: "AI Martech Landscape",
  title: "Navigating the AI Martech Landscape Without Overbuying",
  readingMinutes: 25,
  summary:
    "The AI martech market is expanding faster than most organizations can evaluate responsibly. This chapter provides a practical decision framework for mapping categories, evaluating vendors, running structured pilots, and preventing costly integration and portfolio mistakes.",
  keyTakeaway:
    "Treat martech selection as an architecture and operating-model decision, not a feature checklist. Standardized evaluation and governance reduce overbuying and improve stack coherence.",
  pmCallout: MKT_CALLOUT,
  sections: [
    buildSection({
      number: "1.1",
      title: "The AI Martech Landscape Map",
      subtitle: "Building a useful market view before procurement",
      take: "A landscape map should organize martech options by functional domain, AI depth, and workflow role so teams can compare tools on structure rather than marketing language.",
      why: "Without a map, organizations evaluate vendors in isolation and accumulate duplicate capabilities with hidden integration costs.",
      paragraphs: [
        [
          s("AI martech growth has created a crowded market where many tools appear differentiated but solve similar problems. "),
          x(
            "A practical map begins with core domains such as data foundation, audience intelligence, content generation, orchestration, experimentation, and measurement.",
            "Categorizing tools by domain quickly reveals whether a new purchase fills a strategic gap or duplicates existing stack capability.",
          ),
          s(" Market clarity starts with functional structure, not vendor narratives."),
        ],
        [
          s("A useful map also distinguishes intelligence tier and operating role. "),
          x(
            "Tools can be primarily rules-driven, ML-assisted, or deep-learning-heavy, and they can act as systems of record, intelligence services, or execution channels.",
            "This distinction helps teams avoid assigning decision responsibilities to platforms that were not designed for that role.",
          ),
          s(" Role clarity prevents architecture confusion before it starts."),
        ],
        [
          s("Landscape mapping should be updated quarterly as products and pricing evolve rapidly. "),
          x(
            "A recurring map refresh lets leaders track vendor consolidation, feature absorption into suites, and new specialist categories worth piloting.",
            "The map becomes a living portfolio artifact used by marketing, RevOps, data, procurement, and finance for aligned decision-making.",
          ),
          s(" Teams that maintain a live map make faster and better procurement decisions."),
        ],
      ],
      examples: [
        {
          title: "Retail duplicate capability discovery",
          body: "A retailer's landscape map showed three separate recommendation tools across web, email, and app; consolidation reduced license and integration overhead.",
        },
        {
          title: "B2B content category rationalization",
          body: "A B2B company mapped six AI content tools into two overlapping categories and retired redundant subscriptions while improving brand consistency.",
        },
        {
          title: "SaaS intelligence-role correction",
          body: "A SaaS team reclassified an execution tool incorrectly used for scoring decisions and moved prediction logic to a dedicated intelligence layer.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "1.2",
      title: "How to Evaluate AI Martech Tools",
      subtitle: "From feature demos to evidence-based selection",
      take: "Tool evaluation should score outcome evidence, technical fit, operating fit, and cost-to-value rather than relying on interface quality or generic AI claims.",
      why: "Demo-driven selection often overestimates value and underestimates implementation burden.",
      paragraphs: [
        [
          s("Evaluation begins with clear use-case definition and success criteria. "),
          x(
            "Teams should document target workflows, required outcomes, baseline performance, and constraints before vendor meetings.",
            "This forces vendors to demonstrate fit against specific business problems instead of broad capability narratives.",
          ),
          s(" Precision in requirements is the first defense against overbuying."),
        ],
        [
          s("Evidence quality should be weighted more than presentation polish. "),
          x(
            "Require proof of measurable outcomes, model reliability, segment performance, and references from similar deployment contexts.",
            "If claims are not supported by transparent benchmarks and production examples, score them as high risk regardless of demo quality.",
          ),
          s(" Evaluation rigor improves when claims are treated as hypotheses to verify."),
        ],
        [
          s("Final selection should include integration and governance feasibility checks. "),
          x(
            "Assess data dependencies, identity requirements, API quality, permission models, and operational ownership before commercial negotiation closes.",
            "A technically impressive tool is still a poor choice if your team cannot deploy or govern it effectively.",
          ),
          s(" Best-fit vendors are those your organization can execute with confidence."),
        ],
      ],
      examples: [
        {
          title: "Scorecard-based vendor shortlisting",
          body: "A SaaS company used weighted criteria across outcome evidence, integration fit, and governance readiness to reduce eight vendors to two strong finalists.",
        },
        {
          title: "Evidence challenge in enterprise procurement",
          body: "An enterprise buyer requested segment-level benchmark proof and discovered a 'predictive' feature was largely rule-based, leading to revised pricing terms.",
        },
        {
          title: "Integration-feasibility gating",
          body: "A team rejected a high-scoring UI tool after API and identity constraints suggested months of engineering effort with uncertain deployment reliability.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-8-1-classification-grid",
      type: "comparison",
      title: "AI Martech Classification Grid",
      caption: "Map tools by function, AI tier, and operating role before procurement.",
    }),
    buildSection({
      number: "1.3",
      title: "Running an AI Martech RFP Process",
      subtitle: "Structuring vendor competition for better decisions",
      take: "A disciplined RFP process clarifies requirements, standardizes evidence requests, and creates fair comparison across suite and point-solution options.",
      why: "Unstructured procurement increases bias, slows alignment, and produces contracts that underperform in production.",
      paragraphs: [
        [
          s("Effective RFPs start with a clear problem statement and architecture context. "),
          x(
            "Document target workflows, data boundaries, existing stack dependencies, security constraints, and expected commercial outcomes in the RFP brief.",
            "This allows vendors to respond with implementation realism rather than generic feature inventories.",
          ),
          s(" Good RFP design reduces mismatch before negotiations begin."),
        ],
        [
          s("Use standardized response templates and weighted scoring criteria. "),
          x(
            "Request comparable responses for capabilities, model transparency, integration effort, support model, compliance posture, and pricing structure.",
            "A shared scoring rubric makes decision trade-offs explicit across technical and business stakeholders.",
          ),
          s(" Standardization turns procurement into an evidence process, not a persuasion contest."),
        ],
        [
          s("Include practical validation steps before final selection. "),
          x(
            "Top vendors should complete scenario walkthroughs using your real workflows and data assumptions, with implementation owners involved in evaluation sessions.",
            "This surfaces hidden dependencies early and improves contract terms around delivery milestones and success criteria.",
          ),
          s(" RFP quality is highest when evaluation mirrors production reality."),
        ],
      ],
      examples: [
        {
          title: "Weighted RFP in global enterprise",
          body: "A global marketing team used a cross-functional RFP scorecard and selected a vendor with stronger integration feasibility despite a less polished demo.",
        },
        {
          title: "Scenario-based finalist validation",
          body: "Two finalists ran real workflow scenarios with stakeholder panels, exposing one vendor's hidden dependency on unavailable data pipelines.",
        },
        {
          title: "Procurement-to-contract alignment",
          body: "An RFP process linked scoring criteria to contract milestones, improving accountability when rollout timelines slipped.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "1.4",
      title: "Designing High-Quality Martech Pilots",
      subtitle: "Proving value before full commitment",
      take: "A strong pilot isolates target workflows, defines measurable success thresholds, and tests operational fit under realistic constraints.",
      why: "Many pilots fail because they are designed as demos, not as decision experiments.",
      paragraphs: [
        [
          s("Pilot scope should be narrow enough to execute quickly but broad enough to test meaningful value. "),
          x(
            "Choose one or two high-impact workflows with clear baselines, available data, and identifiable owners for implementation and measurement.",
            "Avoid pilots that require major architecture changes before any outcome can be observed.",
          ),
          s(" Good pilot scoping maximizes learning per week of effort."),
        ],
        [
          s("Success criteria must include both performance and operability. "),
          x(
            "Track conversion or efficiency uplift, but also measure setup friction, data reliability, stakeholder adoption, and support responsiveness.",
            "A pilot that lifts one metric but creates unsustainable operations should not pass selection gates.",
          ),
          s(" Pilots should answer 'can we run this well?' as much as 'does it work?'"),
        ],
        [
          s("Pilot governance should define pass, revise, and stop decisions in advance. "),
          x(
            "Pre-agreed decision criteria reduce sunk-cost bias and make it easier to exit weak tools even after teams have invested effort.",
            "Post-pilot reviews should document transfer requirements for production rollout, including integration and ownership decisions.",
          ),
          s(" Pilot discipline converts experimentation into portfolio intelligence."),
        ],
      ],
      examples: [
        {
          title: "Workflow-targeted pilot in SaaS",
          body: "A SaaS team piloted one lifecycle orchestration workflow with clear uplift and reliability targets, producing a go/no-go decision in six weeks.",
        },
        {
          title: "Operability-led pilot rejection",
          body: "A retailer rejected a pilot that showed conversion gains because support and data reliability issues indicated poor production viability.",
        },
        {
          title: "Predefined stop criteria success",
          body: "A marketing team ended an underperforming pilot on schedule using pre-agreed thresholds, freeing budget for a stronger alternative.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-8-1-eval-checklist",
      type: "flow",
      title: "AI Martech Evaluation Flow",
      caption: "Evidence -> fit -> integration -> governance -> TCO -> decision.",
    }),
    buildSection({
      number: "1.5",
      title: "The Integration Problem",
      subtitle: "Why good tools fail in fragmented architectures",
      take: "Integration quality is often the strongest determinant of martech ROI; weak identity, event, and API architecture can neutralize otherwise strong product capabilities.",
      why: "Procurement choices made without integration analysis frequently create long-term execution drag and unreliable measurement.",
      paragraphs: [
        [
          s("Most martech underperformance originates in data and identity inconsistency. "),
          x(
            "When platforms disagree on user identity or event meaning, scoring, segmentation, and activation logic diverge across channels.",
            "This causes duplicate messaging, suppression failures, and distorted attribution that teams misinterpret as campaign problems.",
          ),
          s(" Integration debt often appears as marketing inefficiency but is architectural at its core."),
        ],
        [
          s("API and workflow orchestration design determines operational resilience. "),
          x(
            "If integrations rely on brittle custom scripts or manual exports, model-driven workflows degrade quickly under volume and change.",
            "Reliable stacks require explicit contracts for payloads, latency expectations, failure handling, and ownership.",
          ),
          s(" Integration quality is a governance concern, not only an engineering concern."),
        ],
        [
          s("Teams should evaluate integration readiness before signing contracts. "),
          x(
            "Assess identity dependencies, event contract maturity, API capabilities, and ongoing maintenance cost as part of vendor scoring.",
            "A tool with modest features but clean integration can deliver more value than a feature-rich tool that breaks data coherence.",
          ),
          s(" Integration-first selection protects long-term stack performance."),
        ],
      ],
      examples: [
        {
          title: "Identity mismatch remediation",
          body: "A lifecycle program fixed inconsistent IDs across CDP and ESP, reducing duplicate outreach and restoring suppression reliability.",
        },
        {
          title: "API fragility in orchestration",
          body: "A company replaced manual file-based sync with governed APIs, improving trigger reliability and reducing campaign execution delays.",
        },
        {
          title: "Integration-readiness procurement gate",
          body: "A team rejected a high-profile tool after integration assessment showed unresolved identity and event-contract dependencies.",
        },
      ],
    }),
    buildSection({
      number: "1.6",
      title: "Building an Evaluation Scorecard",
      subtitle: "A repeatable rubric for portfolio-quality decisions",
      take: "A weighted evaluation scorecard creates consistent, defensible martech decisions by balancing capability evidence, architecture fit, governance risk, and commercial value.",
      why: "Without a common scorecard, different teams optimize for different criteria and portfolio coherence deteriorates over time.",
      paragraphs: [
        [
          s("A useful scorecard should include multiple scoring dimensions with explicit weights. "),
          x(
            "Typical dimensions include use-case fit, demonstrated performance, integration complexity, security/compliance posture, total cost, vendor reliability, and change-management burden.",
            "Weighting should reflect business strategy and risk tolerance rather than treating all dimensions as equal.",
          ),
          s(" Weighted scoring makes trade-offs transparent and comparable."),
        ],
        [
          s("Scorecards should include both quantitative and qualitative evidence. "),
          x(
            "Quantitative evidence includes benchmarked outcomes and cost estimates; qualitative inputs include implementation risk, vendor responsiveness, and stakeholder usability feedback.",
            "This combination prevents overreliance on single metrics and improves selection robustness.",
          ),
          s(" Balanced evidence reduces selection bias from charismatic demos."),
        ],
        [
          s("The scorecard should be reused across pilots, renewals, and consolidation reviews. "),
          x(
            "Recurrent use builds organizational memory, improves decision speed, and enables clearer portfolio-level comparisons over time.",
            "When a tool fails to maintain threshold scores, the governance process can trigger remediation or retirement before waste accumulates.",
          ),
          s(" A reusable scorecard turns martech governance into a scalable operating discipline."),
        ],
      ],
      examples: [
        {
          title: "Cross-functional weighted rubric",
          body: "A martech council adopted a weighted scorecard shared by marketing, RevOps, IT, and finance, improving procurement alignment and decision speed.",
        },
        {
          title: "Renewal decision consistency",
          body: "A team used the same scorecard for renewals and flagged a once-useful tool that no longer met value and integration thresholds.",
        },
        {
          title: "Portfolio pruning with evidence",
          body: "Quarterly scorecard reviews identified overlapping tools with low differentiated value, enabling disciplined consolidation and budget reallocation.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is the most effective first step in navigating the AI martech landscape?",
      options: [
        "Choose the vendor with the largest feature list",
        "Classify tools by function, intelligence tier, and operating role",
        "Standardize on point solutions only",
        "Focus only on UI quality",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Structured classification exposes overlap and fit before procurement.",
      wrongFeedback:
        "A clear classification framework should come before vendor preference decisions.",
    },
    {
      q: "Why do many AI martech purchases underperform despite strong demos?",
      options: [
        "Demos are always inaccurate",
        "Teams ignore integration, ownership, and total cost implications",
        "AI cannot support marketing workflows",
        "Suites never work",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Operational and architectural fit usually determines real-world performance.",
      wrongFeedback:
        "Underperformance often comes from integration and governance gaps, not demo quality alone.",
    },
    {
      kind: "order",
      q: "Order the martech evaluation sequence.",
      prompt: "Arrange from first to last.",
      items: [
        "Classify capability and operating role",
        "Validate evidence and use-case fit",
        "Estimate integration effort and governance needs",
        "Model TCO and make portfolio decision",
      ],
      correctFeedback:
        "Correct. Classification and evidence come before architecture and TCO decisions.",
      wrongFeedback:
        "Start with structured classification, then evidence, then integration and cost modeling.",
    },
    {
      kind: "categorize",
      q: "Categorize each platform role.",
      categories: ["System of Record", "Intelligence Layer", "Execution Layer"],
      items: [
        { text: "Canonical customer profile storage", category: 0 },
        { text: "Propensity score generation", category: 1 },
        { text: "Campaign message delivery", category: 2 },
        { text: "Master segmentation attributes", category: 0 },
        { text: "Next-best-action ranking", category: 1 },
        { text: "Journey trigger activation", category: 2 },
      ],
      correctFeedback:
        "Correct. Distinguishing role ownership improves stack coherence and accountability.",
      wrongFeedback:
        "Separate data ownership, prediction logic, and activation responsibilities clearly.",
    },
  ],
});
