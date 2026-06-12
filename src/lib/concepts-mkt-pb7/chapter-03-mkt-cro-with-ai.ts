import { buildChapter, buildSection, s, x, sectionWithDiagram, MKT_CALLOUT } from "../concepts-mkt-helpers";

export const chapter03MktCroWithAi = buildChapter({
  slug: "mkt-cro-with-ai",
  number: 3,
  shortTitle: "CRO with AI",
  title: "Conversion Rate Optimization with AI",
  readingMinutes: 24,
  summary:
    "Traditional CRO often stalls because hypothesis generation is slow and experimentation bandwidth is limited. AI-augmented CRO improves speed and precision across discovery, personalization, and test design while requiring strong statistical and governance guardrails.",
  keyTakeaway:
    "AI can dramatically increase CRO throughput, but performance only compounds when hypothesis quality, experiment validity, and rollout governance are managed as one system.",
  pmCallout: MKT_CALLOUT,
  sections: [
    buildSection({
      number: "3.1",
      title: "How AI Changes CRO",
      subtitle: "From reactive analysis to continuous opportunity detection",
      take: "AI changes CRO by continuously ranking conversion friction, surfacing hidden patterns, and reducing the time between insight and experiment launch.",
      why: "When CRO depends only on manual analysis, teams spend scarce experimentation capacity on low-impact ideas and detect leakage too late.",
      paragraphs: [
        [
          s("Conventional CRO programs usually rely on periodic dashboards and analyst intuition. "),
          x(
            "That workflow can produce useful hypotheses, but ranking quality is constrained by human bandwidth and the tendency to focus on obvious page-level issues.",
            "AI can process high-volume event streams and session patterns continuously, exposing friction points earlier and with richer segment context.",
          ),
          s(" This shifts CRO from weekly review cycles to near-real-time detection."),
        ],
        [
          s("AI also improves prioritization quality by estimating likely commercial impact. "),
          x(
            "Instead of testing ideas because they are easy to ship, teams can prioritize by expected revenue lift, confidence, and implementation effort.",
            "This increases experiment portfolio efficiency and reduces opportunity cost from low-value test backlogs.",
          ),
          s(" Better prioritization means each experiment slot carries more value."),
        ],
        [
          s("The biggest change is not automation alone but decision cadence. "),
          x(
            "When AI insight generation, hypothesis triage, and experiment planning are integrated, teams run more tests with higher average quality.",
            "However, this benefit only materializes when analytics, design, engineering, and growth teams share clear ownership and review rhythms.",
          ),
          s(" AI changes CRO most when operating model evolves with tooling."),
        ],
      ],
      examples: [
        {
          title: "Ecommerce anomaly detection",
          body: "A retailer used AI to detect sudden mobile checkout friction, launching a fix experiment days earlier than the prior manual review process.",
        },
        {
          title: "SaaS onboarding prioritization",
          body: "A PLG team ranked onboarding bottlenecks by predicted activation impact, improving experiment hit rate compared with intuition-led backlogs.",
        },
        {
          title: "Form abandonment segmentation",
          body: "Session clustering revealed that abandonment causes differed by traffic source, enabling targeted hypotheses instead of one generic redesign.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "3.2",
      title: "AI Hypothesis Generation and Prioritisation",
      subtitle: "Designing a higher-quality experiment backlog",
      take: "AI hypothesis systems should combine friction detection with structured prioritization frameworks so teams test high-value ideas first.",
      why: "Most CRO programs accumulate large backlogs but lack a consistent method to separate high-upside hypotheses from low-value noise.",
      paragraphs: [
        [
          s("AI can translate behavioral anomalies into intervention candidates at scale. "),
          x(
            "If users repeatedly revisit pricing and then abandon, the system can suggest hypotheses around plan clarity, trust assurance, or decision-support elements.",
            "This reduces blank-page ideation cycles and gives teams a faster starting point for test design.",
          ),
          s(" Generated hypotheses should accelerate thinking, not replace judgment."),
        ],
        [
          s("Prioritization quality depends on transparent scoring criteria. "),
          x(
            "Expected impact, confidence, effort, risk, and strategic relevance should be weighted explicitly so stakeholders can challenge and improve rankings.",
            "AI can estimate inputs, but threshold governance must be defined by the CRO leadership team.",
          ),
          s(" A shared scoring framework reduces backlog politics and improves focus."),
        ],
        [
          s("Hypothesis governance should include quality filters before build. "),
          x(
            "Each candidate should pass checks for measurement feasibility, brand constraints, legal compliance, and engineering practicality.",
            "This pre-filter prevents teams from running statistically valid tests on hypotheses that are commercially or operationally nonviable.",
          ),
          s(" Better filters upstream protect experimentation throughput downstream."),
        ],
      ],
      examples: [
        {
          title: "B2B pricing-page backlog upgrade",
          body: "AI-generated and ranked hypotheses shifted a team from cosmetic CTA tests to trust-and-proof experiments with stronger commercial impact.",
        },
        {
          title: "Retail impact-effort filtering",
          body: "A retailer reduced low-value test volume by applying weighted impact-confidence-effort scoring to AI-generated PDP hypotheses.",
        },
        {
          title: "Compliance-aware hypothesis triage",
          body: "A fintech CRO team added legal and disclosure filters to generated hypotheses, preventing noncompliant experiment ideas from entering build queues.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-7-3-hypothesis-pipeline",
      type: "flow",
      title: "AI CRO Hypothesis Pipeline",
      caption: "Detect friction -> generate ideas -> score -> test -> learn.",
    }),
    buildSection({
      number: "3.3",
      title: "Personalised Landing Pages with AI",
      subtitle: "Context-specific messaging without experience fragmentation",
      take: "AI personalization improves landing-page conversion when content and proof elements adapt to visitor context while preserving brand coherence and measurement integrity.",
      why: "Mixed-intent traffic rarely responds equally to one default page; targeted relevance can lift conversion if personalization is controlled.",
      paragraphs: [
        [
          s("Landing-page personalization works best when intent and needs differ clearly across cohorts. "),
          x(
            "Industry, role, acquisition source, product use-case, and lifecycle stage can all indicate what proof, messaging, or CTA framing should be emphasized.",
            "AI helps choose variant combinations in real time, but variant architecture must remain manageable and interpretable.",
          ),
          s(" The objective is relevance lift, not uncontrolled content sprawl."),
        ],
        [
          s("Personalization depth should follow model confidence and business risk. "),
          x(
            "High-confidence cohorts can receive stronger adaptation across headlines, social proof, and CTA sequencing, while uncertain cohorts should remain on robust defaults.",
            "This reduces volatility and prevents overfitting experiences to sparse or unstable segments.",
          ),
          s(" Controlled adaptation usually outperforms maximal adaptation over time."),
        ],
        [
          s("Measurement design is critical for personalization credibility. "),
          x(
            "Teams should track both blended uplift and cohort-level effects to ensure variants do not help one segment while harming strategic cohorts.",
            "A periodic simplification review should retire weak variants so the system stays performant and maintainable.",
          ),
          s(" Personalization becomes durable only when complexity is actively managed."),
        ],
      ],
      examples: [
        {
          title: "Role-based SaaS landing adaptation",
          body: "A SaaS team personalized hero messaging and proof blocks by buyer role, increasing qualified trial starts from enterprise traffic.",
        },
        {
          title: "Margin-aware retail personalization",
          body: "A retailer used AI to target incentive depth by predicted margin sensitivity, lifting checkout conversion without eroding contribution margin.",
        },
        {
          title: "Acquisition-source page mapping",
          body: "A marketplace mapped landing variants to source-specific intent profiles, improving first-action completion while keeping a unified brand system.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "3.4",
      title: "AI Form Optimisation",
      subtitle: "Reducing friction in high-intent conversion moments",
      take: "AI form optimization improves completion and lead quality by identifying friction patterns, adapting fields and sequencing, and balancing conversion rate with qualification integrity.",
      why: "Forms are frequent conversion chokepoints where small UX and logic changes can produce large downstream effects.",
      paragraphs: [
        [
          s("Form optimization should focus on where users abandon and why. "),
          x(
            "AI can detect friction linked to field count, ambiguous labels, validation timing, mobile input burden, and trust concerns around sensitive questions.",
            "These insights help teams redesign forms around progressive disclosure and clearer user guidance.",
          ),
          s(" The goal is lower friction without degrading data quality."),
        ],
        [
          s("Adaptive form logic can improve both conversion and routing precision. "),
          x(
            "High-intent users can be guided through streamlined paths, while uncertain users can receive clarifying prompts or optional context fields that improve qualification.",
            "AI can also recommend optimal field ordering for different cohorts and devices.",
          ),
          s(" Dynamic sequencing is most effective when tied to explicit policy rules."),
        ],
        [
          s("Optimization must include quality and compliance guardrails. "),
          x(
            "Lowering form friction should not remove legally required disclosures, consent fields, or key qualification inputs needed by downstream teams.",
            "Track post-submit quality metrics such as SDR acceptance, no-show rates, and opportunity yield to ensure gains are real.",
          ),
          s(" Fast form completion is only valuable when downstream outcomes improve."),
        ],
      ],
      examples: [
        {
          title: "Progressive disclosure in B2B demo forms",
          body: "A B2B team used AI friction analysis to simplify initial fields and defer noncritical questions, increasing completions while preserving lead quality.",
        },
        {
          title: "Mobile field-sequence optimization",
          body: "A retailer reordered checkout form fields by predicted abandonment risk on mobile, improving completion rates and reducing payment retries.",
        },
        {
          title: "Qualification guardrail monitoring",
          body: "A fintech company linked form tests to opportunity quality checks, preventing a high-conversion but low-quality variant from full rollout.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-7-3-experiment-loop",
      type: "comparison",
      title: "Speed vs Validity in AI CRO",
      caption: "AI accelerates testing, while guardrails preserve trust in outcomes.",
    }),
    buildSection({
      number: "3.5",
      title: "Statistical Significance in AI CRO",
      subtitle: "Speed without false confidence",
      take: "AI-accelerated CRO still requires rigorous statistical design, including predefined metrics, adequate sample sizes, and disciplined stopping rules.",
      why: "Without statistical discipline, AI can increase testing speed but also amplify false positives and costly rollout mistakes.",
      paragraphs: [
        [
          s("Faster hypothesis generation increases the risk of underpowered or poorly defined experiments. "),
          x(
            "Teams should pre-register primary success metrics, minimum detectable effect thresholds, and analysis windows before launch.",
            "This prevents hindsight metric switching and protects decision quality under pressure to ship quickly.",
          ),
          s(" Statistical planning is the control layer for AI-driven experimentation velocity."),
        ],
        [
          s("Significance should be interpreted with practical impact and cohort effects. "),
          x(
            "A statistically significant lift with negligible business value may not justify rollout, while blended significance can hide meaningful harm in specific segments.",
            "Decision frameworks should combine p-values or Bayesian confidence with commercial effect size and risk context.",
          ),
          s(" Valid decisions require both statistical and business significance."),
        ],
        [
          s("AI-assisted analysis can help detect interactions and heterogeneity, but governance remains human-led. "),
          x(
            "Use holdouts, variance checks, and replication where needed to validate unexpectedly large effects before broad deployment.",
            "A structured escalation path for ambiguous results prevents rushed conclusions from noisy data.",
          ),
          s(" Confidence in CRO outcomes is earned through method, not model branding."),
        ],
      ],
      examples: [
        {
          title: "Underpowered test correction",
          body: "A growth team paused a fast-moving AI-generated test set after identifying insufficient sample sizes, then relaunched with proper power calculations and clearer outcomes.",
        },
        {
          title: "Segment-level significance safeguard",
          body: "A variant showed blended significance but harmed mobile conversions; cohort-level analysis prevented a misleading full rollout.",
        },
        {
          title: "Replication before global rollout",
          body: "A retailer required repeat significance in a second cycle for unusually large uplifts, avoiding deployment based on a likely outlier week.",
        },
      ],
    }),
    buildSection({
      number: "3.6",
      title: "Designing an AI CRO Programme",
      subtitle: "Operating model, governance, and scale roadmap",
      take: "A durable AI CRO programme combines discovery workflows, experimentation standards, personalization governance, and cross-functional ownership in a phased maturity roadmap.",
      why: "Without a programme-level design, isolated wins fail to compound and teams revert to ad hoc testing behavior.",
      paragraphs: [
        [
          s("Programme design should begin with clear scope and ownership. "),
          x(
            "Define who owns insight generation, hypothesis triage, experiment quality, and rollout decisions across growth, analytics, product, and engineering.",
            "Role clarity prevents bottlenecks and keeps experimentation velocity aligned with quality standards.",
          ),
          s(" CRO scale is primarily an operating-model challenge, not a tooling challenge."),
        ],
        [
          s("A phased roadmap reduces risk while building capability. "),
          x(
            "Phase one uses AI for insight support; phase two adds prioritized experimentation and assisted analysis; phase three introduces selective personalization and governed automation in low-risk zones.",
            "Each phase should include explicit entry criteria, success metrics, and rollback protocols.",
          ),
          s(" Maturity comes from controlled expansion, not sudden autonomy."),
        ],
        [
          s("Governance should evaluate both growth impact and trust outcomes. "),
          x(
            "Quarterly reviews should track conversion lift, experiment hit rate, statistical quality, complaint signals, and retention impact to ensure optimization remains healthy.",
            "Programme dashboards must make trade-offs visible so leadership can adjust policy before issues become systemic.",
          ),
          s(" A strong AI CRO programme compounds gains while protecting brand and customer experience."),
        ],
      ],
      examples: [
        {
          title: "Phased rollout in PLG SaaS",
          body: "A PLG team moved from AI-assisted hypothesis ranking to selective personalization only after establishing stable experiment quality and guardrails.",
        },
        {
          title: "Governed automation in retail",
          body: "A retailer limited automated variant selection to low-risk category pages with predefined rollback triggers tied to complaints and return rates.",
        },
        {
          title: "Cross-functional CRO council",
          body: "A marketplace created a quarterly AI CRO council to review statistical integrity, customer impact, and roadmap sequencing across teams.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is the best first use of AI in CRO programs?",
      options: [
        "Full autonomous page optimization on day one",
        "AI-assisted friction detection and hypothesis prioritization",
        "Replacing all experimentation with personalization",
        "Removing statistical controls for faster shipping",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Assisted discovery and prioritization usually deliver fast value with lower risk.",
      wrongFeedback:
        "Start with AI-assisted insight and prioritization before expanding automation scope.",
    },
    {
      q: "Why are guardrails essential in AI-driven CRO?",
      options: [
        "They reduce all conversion improvements.",
        "They avoid any need for testing.",
        "They protect trust, compliance, and long-term performance from short-term optimization bias.",
        "They are only useful in healthcare.",
      ],
      correct: 2,
      correctFeedback:
        "Correct. Guardrails prevent harmful optimization behaviors and preserve durable growth.",
      wrongFeedback:
        "CRO gains are sustainable only when experience quality and compliance are protected.",
    },
    {
      kind: "order",
      q: "Order the AI CRO execution loop.",
      prompt: "Arrange from first to last.",
      items: [
        "Detect and rank conversion friction",
        "Generate and prioritize hypotheses",
        "Run controlled experiments",
        "Scale winners and recalibrate models",
      ],
      correctFeedback:
        "Correct. Detection -> hypothesis -> test -> scale/recalibrate is the core loop.",
      wrongFeedback:
        "Insight ranking comes first, then experimentation, then controlled scaling.",
    },
    {
      kind: "categorize",
      q: "Categorize each activity by CRO phase.",
      categories: ["Discovery", "Execution"],
      items: [
        { text: "Session-pattern anomaly detection", category: 0 },
        { text: "Launch segmented variant test", category: 1 },
        { text: "Behavior cluster analysis", category: 0 },
        { text: "Apply rollout rule for winning cohort", category: 1 },
        { text: "Friction-point prioritization score", category: 0 },
        { text: "Implement rollback on adverse signal", category: 1 },
      ],
      correctFeedback:
        "Correct. Discovery identifies where to act; execution applies and governs interventions.",
      wrongFeedback:
        "Separate analysis from action: discover first, then execute with controls.",
    },
  ],
});
