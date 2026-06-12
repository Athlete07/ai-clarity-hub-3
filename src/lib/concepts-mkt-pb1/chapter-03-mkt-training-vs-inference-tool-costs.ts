import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter03MktTrainingVsInferenceToolCosts = buildChapter({
  slug: "mkt-training-vs-inference-tool-costs",
  number: 3,
  shortTitle: "Training vs Inference Costs",
  title: "Training vs Inference — The Marketing Tool Cost Reality",
  readingMinutes: 22,
  summary:
    "Most marketing teams budget AI tools like fixed SaaS subscriptions, but model economics are usage-driven. This chapter separates training and inference costs so you can forecast spend accurately.",
  keyTakeaway:
    "Training is the upfront learning phase; inference is the ongoing cost every time the model generates or predicts. For marketers, inference drives most recurring spend.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "3.1",
      title: "Training vs Inference in Marketing Terms",
      subtitle: "Build phase versus run phase",
      take: "Training teaches the model from historical data. Inference is the day-to-day operation when the model scores leads, suggests bids, or generates content.",
      why: "Confusing these phases creates bad contracts and surprise invoices during scale-up.",
      paragraphs: [
[
          s("Training is usually hidden from marketers because vendors absorb that cost in platform pricing. "),
          x(
            "When a tool says it is 'continuously learning,' you still need to know whether retraining is included or billed separately.",
            "If retraining terms are vague, you risk paying premium pricing without guaranteed model updates.",
          ),
          s(" Ask what exactly is trained, how often, and with whose data."),
        ],
[
          s("Inference is where recurring economics live. "),
          x(
            "Every prompt, summary, recommendation, and prediction consumes compute.",
            "Usage spikes from campaign launches or team-wide adoption can multiply costs quickly even when per-call pricing looks tiny.",
          ),
          s(" Cost transparency must be tied to expected campaign volume."),
        ],

        [

          s("Operationally, separate budget governance for training commitments and inference consumption so finance can see fixed versus variable AI spend. "),

          x(

            "Require vendors to disclose retraining cadence, included retraining scope, and per-interaction cost mechanics before rollout approvals.",

            "Then align campaign plans with volume forecasts so scaling activity has pre-approved inference cost envelopes instead of surprise overruns.",

          ),

          s("This split makes cost accountability clear and prevents contract ambiguity from becoming an operations problem."),

        ],

      ],
      examples: [
        {
          title: "Jasper content scaling",
          body: "A team moved from 200 briefs per month to 3,000 and discovered their effective generation costs were far above initial estimates because usage tiers changed.",
        },
        {
          title: "Salesforce Einstein scoring",
          body: "A RevOps team negotiated clear retraining language in contract renewals, preventing performance drift from being treated as a billable add-on.",
        },
        {
          title: "Meta creative AI tools",
          body: "High ad-variation testing volume increased inference usage significantly, forcing budget owners to model creative experimentation as a cost driver.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-ch3-training-inference",
      type: "comparison",
      title: "Training vs Inference Cost Split",
      caption: "Training is episodic and strategic; inference is continuous and scales with every marketing interaction.",
    }),
    buildSection({
      number: "3.2",
      title: "Why Inference Costs Surprise Marketing Teams",
      subtitle: "Pilot math rarely matches rollout math",
      take: "Inference costs often look trivial in pilots and become material at production scale.",
      why: "Without volume scenarios, teams approve AI use cases that later look inefficient.",
      paragraphs: [
[
          s("Pilot campaigns have constrained usage, fewer users, and shorter prompts. "),
          x(
            "Production environments add channel expansions, more stakeholders, and larger context payloads.",
            "The result is non-linear spend growth that finance flags as overrun even when results improve.",
          ),
          s(" Pilot success should include scale-cost simulation, not only performance lift."),
        ],
[
          s("Three factors drive inference shocks: frequency, payload size, and user adoption. "),
          x(
            "A small increase in each can compound into a large monthly delta.",
            "Teams that monitor unit cost per output early can catch cost drift before budget reallocation becomes political.",
          ),
          s(" Track cost per qualified output, not raw AI call count."),
        ],

        [

          s("Why Inference Costs Surprise Marketing Teams becomes actionable when metrics are tied to campaign decisions, not viewed as dashboard trivia. "),

          x(

            "Inference costs often look trivial in pilots and become material at production scale.",

            "Without volume scenarios, teams approve AI use cases that later look inefficient.",

          ),

          s("The goal is to make every score change trigger a concrete optimization decision."),

        ],

      ],
      examples: [
        {
          title: "B2B campaign assistant expansion",
          body: "A content assistant initially used by one team went company-wide and multiplied monthly calls by 18x within one quarter.",
        },
        {
          title: "Long-prompt SEO workflows",
          body: "An SEO team embedded large style/context docs in each prompt, doubling token usage without proportional quality gains.",
        },
        {
          title: "Agency client portfolio rollout",
          body: "An agency replicated an AI workflow across accounts and learned that onboarding volume, not generation quality, was the main cost shock driver.",
        },
      ],
    }),
    buildSection({
      number: "3.3",
      title: "Cost Levers Marketers Can Actually Control",
      subtitle: "Practical optimization before engineering rewrites",
      take: "Marketers can reduce inference spend through workflow design, prompt discipline, and output routing.",
      why: "Not every optimization requires ML engineering. Many savings come from operating behavior.",
      paragraphs: [
[
          s("Right-size model usage by task complexity. "),
          x(
            "Use premium models for high-stakes copy or strategic analysis, and lighter configurations for repetitive transformation tasks.",
            "This routing approach can reduce spend while preserving quality where it matters.",
          ),
          s(" Model choice should map to business value, not convenience."),
        ],
[
          s("Improve prompt hygiene and reuse patterns. "),
          x(
            "Concise instructions and modular templates reduce redundant context without sacrificing quality.",
            "Review teams that standardize prompts and expected output formats usually cut retries and manual cleanup time as well.",
          ),
          s(" Better prompts improve both cost and throughput."),
        ],

        [

          s("Cost Levers Marketers Can Actually Control becomes actionable when metrics are tied to campaign decisions, not viewed as dashboard trivia. "),

          x(

            "Marketers can reduce inference spend through workflow design, prompt discipline, and output routing.",

            "Not every optimization requires ML engineering. Many savings come from operating behavior.",

          ),

          s("The goal is to make every score change trigger a concrete optimization decision."),

        ],

      ],
      examples: [
        {
          title: "HubSpot campaign brief templates",
          body: "A team standardized prompt templates and reduced token usage and revision cycles in one reporting month.",
        },
        {
          title: "Jasper task routing",
          body: "A growth team routed first drafts to a lighter model and final positioning work to a stronger model, improving cost-quality balance.",
        },
        {
          title: "Sales enablement content ops",
          body: "Reusable output schemas reduced regenerate attempts and made AI-assisted assets easier to QA and publish.",
        },
      ],
    }),
    buildSection({
      number: "3.4",
      title: "Build vs Buy for Marketing AI",
      subtitle: "When custom capability is worth it",
      take: "Most marketing organizations should buy before they build, but high-volume specialized workflows may justify custom deployment.",
      why: "Build decisions are financial and operational bets, not technical vanity projects.",
      paragraphs: [
[
          s("Buying gives speed and lower initial complexity. "),
          x(
            "You benefit from vendor iteration, support, and ecosystem integrations.",
            "The trade-off is dependency on vendor pricing, roadmap priorities, and data policy terms.",
          ),
          s(" For many teams, that trade-off is rational."),
        ],
[
          s("Building or heavily customizing becomes attractive when usage is huge or requirements are unique. "),
          x(
            "If a workflow is core to competitive advantage, per-call economics and control may eventually justify internal architecture investment.",
            "Set volume and ROI thresholds before committing to build paths.",
          ),
          s(" Trigger-based governance prevents premature platform rewrites."),
        ],

        [

          s("Treat build-versus-buy as a threshold decision: move custom only when volume, differentiation, and risk economics clearly beat vendor paths. "),

          x(

            "Set objective triggers such as sustained usage spend, required control depth, and data-policy constraints that vendor tooling cannot satisfy.",

            "Review those triggers quarterly with marketing, RevOps, finance, and security so architecture moves follow evidence instead of opinion.",

          ),

          s("A trigger-based governance model keeps teams from overbuilding too early or overpaying too long."),

        ],

      ],
      examples: [
        {
          title: "Retail catalog intelligence",
          body: "A large retailer moved one high-volume enrichment workflow in-house after sustained usage made vendor inference pricing uncompetitive.",
        },
        {
          title: "B2B personalization at scale",
          body: "A SaaS company stayed with vendor tooling for most use cases but custom-built one account intelligence pipeline tied to proprietary data.",
        },
        {
          title: "Agency hybrid architecture",
          body: "An agency kept vendor tools for creative generation while building internal QA and orchestration layers for cost control and governance.",
        },
      ],
    }),
    buildSection({
      number: "3.5",
      title: "Decision Lens: Cost Governance for AI Tools",
      subtitle: "How marketers avoid cost chaos",
      take: "AI tool governance needs shared metrics, clear owners, and monthly review of usage against business outcomes.",
      why: "Without governance, costs sprawl across teams and ROI attribution becomes guesswork.",
      paragraphs: [
[
          s("Set three mandatory metrics: cost per qualified output, cost per revenue-influencing action, and adoption-adjusted efficiency. "),
          x(
            "These metrics translate technical spend into marketing economics leadership can act on.",
            "They also expose low-value usage patterns early.",
          ),
          s(" Visibility is a prerequisite for optimization."),
        ],
[
          s("Assign ownership across marketing, RevOps, and finance. "),
          x(
            "One owner tracks unit economics, one validates data integrity, and one approves scaling thresholds.",
            "This shared model keeps AI spend strategic instead of reactive.",
          ),
          s(" Governance should speed decisions, not block experimentation."),
        ],

        [

          s("Decision Lens: Cost Governance for AI Tools becomes actionable when metrics are tied to campaign decisions, not viewed as dashboard trivia. "),

          x(

            "AI tool governance needs shared metrics, clear owners, and monthly review of usage against business outcomes.",

            "Without governance, costs sprawl across teams and ROI attribution becomes guesswork.",

          ),

          s("The goal is to make every score change trigger a concrete optimization decision."),

        ],

      ],
      examples: [
        {
          title: "CMO monthly AI spend review",
          body: "A CMO instituted monthly AI spend dashboards by use case and cut low-value workflows while doubling down on two high-ROI automations.",
        },
        {
          title: "RevOps cost-per-qualified-lead tracking",
          body: "A RevOps team tied inference usage to qualified pipeline metrics, revealing one heavily used workflow with weak commercial impact.",
        },
        {
          title: "Finance-marketing joint approval gates",
          body: "A joint gate required scale-up proposals to include unit economics scenarios before budget expansion approvals.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Which statement best describes inference cost in marketing AI tools?",
      options: [
        "It is a one-time setup cost paid during onboarding.",
        "It is the recurring cost every time the model runs predictions or generates outputs.",
        "It only matters for custom-built models.",
        "It is unrelated to campaign scale.",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Inference is the recurring run-time cost tied directly to usage volume.",
      wrongFeedback:
        "Inference is the operational phase and therefore the recurring cost center for most marketing AI usage.",
    },
    {
      kind: "order",
      q: "Order the cost-governance setup sequence.",
      prompt: "Arrange from first to last.",
      items: [
        "Define unit economics metrics per use case.",
        "Assign cross-functional owners.",
        "Run monthly variance reviews.",
        "Scale only workflows that clear ROI thresholds.",
      ],
      correctFeedback:
        "Correct. Metric clarity first, then ownership, then review rhythm, then scaling decisions.",
      wrongFeedback:
        "Governance works best when metrics and ownership are established before scale decisions.",
    },
    {
      kind: "categorize",
      q: "Categorize each cost item.",
      categories: ["Training", "Inference", "Governance"],
      items: [
        { text: "Vendor retraining of lead model quarterly", category: 0 },
        { text: "Generating 10,000 ad variants this month", category: 1 },
        { text: "Monthly cost-per-qualified-output review", category: 2 },
        { text: "Initial tuning on historical campaign dataset", category: 0 },
        { text: "Real-time recommendation calls in campaign flow", category: 1 },
        { text: "Cross-functional approval for scale-up", category: 2 },
      ],
      correctFeedback:
        "Correct. Training builds capability, inference runs it, governance controls economics and accountability.",
      wrongFeedback:
        "Separate build costs from run costs, then classify oversight and decision rituals under governance.",
    },
  ],
});
