import { buildChapter, buildSection, s, x, sectionWithDiagram, MKT_CALLOUT } from "../concepts-mkt-helpers";

export const chapter01MktAiGrowthFunnel = buildChapter({
  slug: "mkt-ai-growth-funnel",
  number: 1,
  shortTitle: "AI Growth Funnel",
  title: "Designing an AI-Native Growth Funnel",
  readingMinutes: 23,
  summary:
    "Most growth funnels underperform because teams optimize channels in isolation and react to lagging metrics. AI-native growth funnels connect prediction, experimentation, and budget decisions so each stage is improved based on downstream commercial outcomes.",
  keyTakeaway:
    "Treat growth as a portfolio system. Use AI to identify leverage points, run disciplined experiments, and map each automation to your revenue model instead of chasing local conversion wins.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "1.1",
      title: "AI-Augmented Funnel Fundamentals",
      subtitle: "How prediction and orchestration reshape stage execution",
      take: "An AI-augmented funnel turns static stage management into continuous decisioning by combining intent prediction, next-best-action logic, and closed-loop feedback.",
      why: "Teams that still run the funnel as disconnected channel workflows usually improve activity metrics while missing commercial outcomes like qualified pipeline and retained revenue.",
      paragraphs: [
        [
          s("Classic funnel design assumes a mostly linear path from awareness to conversion. "),
          x(
            "In practice, journeys are nonlinear: prospects compare alternatives, pause, return through different channels, and interact at different speeds by segment.",
            "AI augmentation works because it models transition probability in near real time, so teams can react to behavior shifts before weekly reports expose leakage.",
          ),
          s(" The operational shift is from campaign calendars to live decision policies."),
        ],
        [
          s("An AI funnel also changes what data is considered strategically important. "),
          x(
            "Instead of optimizing top-of-funnel on cheap clicks or leads, teams use downstream labels such as SQL conversion, expansion likelihood, and churn risk to retrain targeting models.",
            "This creates a commercial feedback loop where awareness decisions are guided by lifecycle value rather than immediate acquisition volume.",
          ),
          s(" Quality improves because spend follows expected value, not channel habit."),
        ],
        [
          s("AI augmentation does not mean fully autonomous growth operations from day one. "),
          x(
            "High-performing teams start with narrow decision zones such as lead routing, trial activation, or cart recovery where outcomes are measurable and rollback is easy.",
            "As model reliability and governance maturity improve, automation scope expands into bid strategies, creative sequencing, and retention interventions.",
          ),
          s(" Controlled adoption is how AI funnels scale without creating operational fragility."),
        ],
      ],
      examples: [
        {
          title: "B2B SaaS quality-loop acquisition",
          body: "A SaaS company fed opportunity-win outcomes back into paid targeting models. CPL increased slightly, but qualified pipeline per dollar improved and SDR acceptance rates rose.",
        },
        {
          title: "DTC retention-informed prospecting",
          body: "A retailer retrained prospecting audiences using repeat-purchase and return-rate signals, reducing first-order discount dependency and improving 90-day contribution margin.",
        },
        {
          title: "Fintech onboarding decisioning",
          body: "A fintech team used transition propensity scoring to trigger assisted onboarding at high-friction steps, increasing verified-account completion and reducing abandonment costs.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-7-1-adaptive-funnel",
      type: "flow",
      title: "Adaptive Growth Funnel Loop",
      caption: "Downstream outcomes continuously reshape upstream targeting and creative.",
    }),
    buildSection({
      number: "1.2",
      title: "Finding Highest-Leverage Funnel Stages",
      subtitle: "Where AI creates outsized commercial impact first",
      take: "The best AI opportunities are not evenly distributed across the funnel. Leverage is highest where decision latency is costly, variation is high, and outcomes are measurable.",
      why: "Teams that apply AI everywhere at once usually dilute resources, delay learning, and miss faster wins in high-friction bottlenecks.",
      paragraphs: [
        [
          s("Leverage mapping begins with bottleneck economics, not technology enthusiasm. "),
          x(
            "A stage is high leverage when small improvement yields disproportionate downstream value, such as reducing time-to-first-value in onboarding or increasing handoff quality between marketing and sales.",
            "AI is most useful in these points because prediction and orchestration can materially change throughput and unit economics.",
          ),
          s(" Start where delay or misrouting has visible commercial cost."),
        ],
        [
          s("In many organizations, the highest initial leverage sits in mid-funnel qualification and activation. "),
          x(
            "These stages combine rich behavioral data with clear outcomes, making model training practical and interventions immediately actionable.",
            "Top-funnel creative optimization can still benefit from AI, but it often depends on noisier signals and longer attribution windows.",
          ),
          s(" Sequencing matters: capture fast-win stages before diffuse ones."),
        ],
        [
          s("Leverage can also shift by business model and growth maturity. "),
          x(
            "PLG products often gain fastest from activation and expansion decisioning, while enterprise GTM motions gain fastest from account qualification and sequence prioritization.",
            "Reassess leverage quarterly using stage conversion elasticity, cost-to-serve, and confidence in intervention measurement.",
          ),
          s(" AI stage prioritization should evolve with your growth model, not stay fixed."),
        ],
      ],
      examples: [
        {
          title: "PLG onboarding leverage capture",
          body: "A product-led SaaS company focused first on activation drop-off between signup and first key action. AI-triggered onboarding assistance lifted activation more than prior ad optimization projects.",
        },
        {
          title: "Enterprise lead-routing bottleneck",
          body: "A B2B team identified SDR queue delay as the highest-leverage stage and introduced AI qualification bands, improving meeting-booked rates without increasing headcount.",
        },
        {
          title: "DTC checkout friction prioritization",
          body: "A retailer deprioritized top-funnel experimentation and targeted checkout risk prediction first, capturing rapid incremental revenue from abandonment recovery.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "1.3",
      title: "Building Experimentation Infrastructure",
      subtitle: "The operating system behind reliable AI growth",
      take: "AI growth performance depends less on model novelty and more on experimentation infrastructure: clean event contracts, controlled testing, and fast feedback into policy updates.",
      why: "Without reliable experimentation infrastructure, teams mistake noise for uplift, scale fragile tactics, and lose trust in AI recommendations.",
      paragraphs: [
        [
          s("Infrastructure starts with instrumentation quality and event governance. "),
          x(
            "If identity resolution is inconsistent or key events are delayed, funnel models optimize on distorted signals and experiments become hard to interpret.",
            "A minimum viable foundation includes canonical funnel events, segment definitions, and automated data quality checks.",
          ),
          s(" Reliable data is the prerequisite for reliable AI growth decisions."),
        ],
        [
          s("Testing design should move beyond creative A/Bs to policy and workflow experiments. "),
          x(
            "Teams should test score thresholds, routing rules, sequence timing, and intervention eligibility to validate whether AI policy changes produce true incremental lift.",
            "Pre-registered success metrics and holdout cohorts are essential for separating real impact from seasonality or campaign overlap.",
          ),
          s(" Policy experimentation is what turns AI from pilot to compounding system."),
        ],
        [
          s("Operational cadence determines how quickly insights become value. "),
          x(
            "A weekly loop for anomaly triage and experiment launch, plus a monthly governance review for model drift and budget allocation, keeps the system both agile and controlled.",
            "When the loop is slower than market or channel change, growth teams revert to manual firefighting and AI trust drops.",
          ),
          s(" Infrastructure quality is ultimately a cadence discipline, not a dashboard artifact."),
        ],
      ],
      examples: [
        {
          title: "Policy holdout in lifecycle marketing",
          body: "A lifecycle team tested AI-triggered next actions against a static nurture control and proved incremental activation lift before scaling automation.",
        },
        {
          title: "Event-contract remediation in ecommerce",
          body: "Checkout event schema fixes eliminated misfired interventions and improved confidence in abandonment-recovery model outputs.",
        },
        {
          title: "Weekly AI growth operating rhythm",
          body: "A growth pod used weekly experiment triage and monthly drift audits to keep model-led journey policies effective during seasonal demand swings.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-7-3-next-best-action",
      type: "comparison",
      title: "Static Journey vs Next-Best Action",
      caption: "Adaptive decisioning outperforms one-size-fits-all sequencing.",
    }),
    buildSection({
      number: "1.4",
      title: "AI Prioritisation for Growth Teams",
      subtitle: "Choosing the right bets under limited capacity",
      take: "AI prioritisation should rank opportunities by expected incremental value, confidence, implementation effort, and strategic alignment with revenue goals.",
      why: "Most AI roadmaps fail because teams prioritize visible ideas over economically meaningful opportunities with measurable upside.",
      paragraphs: [
        [
          s("A practical prioritisation model combines four dimensions: impact, confidence, effort, and reversibility. "),
          x(
            "Impact estimates expected downstream value, confidence reflects data quality and causal plausibility, effort captures build and change-management cost, and reversibility captures risk if assumptions fail.",
            "This model prevents teams from overcommitting to impressive but hard-to-validate projects.",
          ),
          s(" Prioritisation quality improves when risk and learning speed are explicit."),
        ],
        [
          s("Sequence initiatives so early projects improve later project economics. "),
          x(
            "For example, fixing identity and event quality first usually increases performance of lead scoring, personalization, and attribution models.",
            "Infrastructure-first sequencing often beats feature-first sequencing, even when feature demos appear more attractive.",
          ),
          s(" Good prioritisation compounds because each win strengthens the next decision."),
        ],
        [
          s("Prioritisation should also include adoption and workflow reality. "),
          x(
            "If sales, lifecycle, or product teams cannot operationalize model outputs, projected impact will not materialize regardless of model accuracy.",
            "Include stakeholder readiness and execution bandwidth in your scoring rubric so selected initiatives are both valuable and deployable.",
          ),
          s(" The best AI backlog is the one teams can actually execute and sustain."),
        ],
      ],
      examples: [
        {
          title: "Impact-confidence roadmap in B2B",
          body: "A RevOps team prioritized lead qualification automation over website personalization because confidence and operational readiness were higher, delivering faster pipeline gains.",
        },
        {
          title: "Infrastructure-first sequencing in PLG",
          body: "A product growth team delayed recommendation experiments until event taxonomy cleanup was complete, then launched with materially better model precision.",
        },
        {
          title: "Adoption-aware prioritisation",
          body: "A company deferred complex multi-channel orchestration and first shipped AI-assisted SDR routing that sales leadership could adopt quickly, creating early trust and momentum.",
        },
      ],
    }),
    buildSection({
      number: "1.5",
      title: "Mapping AI to Your Growth Model",
      subtitle: "Aligning use cases with how the business creates value",
      take: "AI choices should map directly to your growth model: PLG, sales-led, hybrid, subscription lifecycle, or marketplace. The same tooling can create very different value by model.",
      why: "Copying another company's AI playbook without mapping to your economics and funnel design leads to expensive misfit and low adoption.",
      paragraphs: [
        [
          s("PLG models usually capture strongest AI value in activation, expansion propensity, and churn prevention. "),
          x(
            "Because product interaction data is dense and outcomes are frequent, model retraining and policy testing can run at a faster cadence.",
            "In contrast, pure sales-led motions often require account-level intent synthesis and routing precision across buying committees.",
          ),
          s(" Model selection and cadence should follow signal density and sales cycle reality."),
        ],
        [
          s("Subscription and lifecycle businesses benefit most from cross-stage value modeling. "),
          x(
            "AI should connect acquisition cohorts to retention outcomes, support costs, and expansion potential so channel spending reflects lifetime contribution, not first conversion only.",
            "This mapping is essential when short-term promotion tactics can distort long-term unit economics.",
          ),
          s(" Growth-model alignment prevents local optimization from damaging total value."),
        ],
        [
          s("A practical mapping exercise asks one question per stage: what decision, if improved, changes economics most? "),
          x(
            "For each decision, define available signals, owner, automation boundary, and expected business impact before choosing tools.",
            "This creates a defendable AI roadmap tied to revenue architecture rather than vendor feature lists.",
          ),
          s(" The result is a growth system where AI serves strategy instead of distracting from it."),
        ],
      ],
      examples: [
        {
          title: "PLG activation-to-expansion mapping",
          body: "A SaaS business mapped AI to onboarding activation and expansion scoring first, improving paid conversion quality and net revenue retention.",
        },
        {
          title: "Sales-led account prioritization",
          body: "An enterprise company focused AI on buying-committee intent and SDR routing rather than top-funnel automation, increasing meeting quality and forecast reliability.",
        },
        {
          title: "Lifecycle retailer value alignment",
          body: "A retailer shifted AI budget allocation toward retention-risk and margin-aware offer decisioning, improving contribution margin versus acquisition-only optimization.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What defines an AI-native growth funnel?",
      options: [
        "A linear funnel with more dashboards",
        "A closed-loop system where downstream outcomes inform upstream decisions",
        "Only top-funnel audience expansion",
        "Replacing all human campaign management",
      ],
      correct: 1,
      correctFeedback:
        "Correct. AI-native funnels continuously learn across stages instead of optimizing each stage in isolation.",
      wrongFeedback:
        "The key shift is closed-loop adaptation across the full funnel.",
    },
    {
      q: "Which practice improves next-best-action reliability first?",
      options: [
        "Launching all channels simultaneously",
        "Using unconstrained action spaces",
        "Starting with a constrained, high-impact decision point and fallback rules",
        "Ignoring confidence thresholds",
      ],
      correct: 2,
      correctFeedback:
        "Correct. Constrained rollout with guardrails is the safest and most effective implementation path.",
      wrongFeedback:
        "Start narrow with strong controls before scaling orchestration complexity.",
    },
    {
      kind: "order",
      q: "Order the adaptive funnel optimization cycle.",
      prompt: "Arrange from first to last.",
      items: [
        "Capture stage-specific behavioral signals",
        "Predict transition and value outcomes",
        "Trigger next-best actions",
        "Measure full-funnel impact and recalibrate",
      ],
      correctFeedback:
        "Correct. Signal -> predict -> act -> measure/recalibrate is the core cycle.",
      wrongFeedback:
        "Begin with stage-aware signals, then prediction, then execution, then impact review.",
    },
    {
      kind: "categorize",
      q: "Categorize each metric type.",
      categories: ["Stage Metric", "Full-Funnel Metric"],
      items: [
        { text: "Landing page engagement depth", category: 0 },
        { text: "Retained revenue per acquired cohort", category: 1 },
        { text: "Form completion quality score", category: 0 },
        { text: "Pipeline-to-revenue conversion by source", category: 1 },
        { text: "Activation event completion rate", category: 0 },
        { text: "Payback period by acquisition cohort", category: 1 },
      ],
      correctFeedback:
        "Correct. Stage metrics diagnose local performance; full-funnel metrics validate business value.",
      wrongFeedback:
        "Use both classes: stage signals for optimization and full-funnel metrics for strategy decisions.",
    },
  ],
});
