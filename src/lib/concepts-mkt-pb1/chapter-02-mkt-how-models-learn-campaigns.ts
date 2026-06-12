import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter02MktHowModelsLearnCampaigns = buildChapter({
  slug: "mkt-how-models-learn-campaigns",
  number: 2,
  shortTitle: "How Models Learn in Marketing",
  title: "How AI Models Learn in Campaign Environments",
  readingMinutes: 23,
  summary:
    "Marketing AI performance is a data-and-feedback story, not a magic model story. This chapter explains how models learn, why they fail, and what marketers can control before budget is wasted.",
  keyTakeaway:
    "Models learn from campaign outcomes, data quality, and feedback loops. If those inputs are weak, no vendor promise can rescue performance.",
  pmCallout: MKT_CALLOUT,
  sections: [
    buildSection({
      number: "2.1",
      title: "Model Mental Model for Marketers",
      subtitle: "Think in signals, labels, and probabilities",
      take: "A marketing model learns relationships between signals and outcomes. It does not understand your brand strategy; it predicts what is likely to happen next.",
      why: "Teams that treat models as probabilistic systems design better tests, set better expectations, and avoid overreacting to single bad outputs.",
      paragraphs: [
[
          s("A practical model mental model is simple: input signals in, probability out. "),
          x(
            "Signals can include audience traits, ad context, browsing behavior, CRM lifecycle stage, and channel timing.",
            "The output is usually a probability of conversion, churn, click, or revenue event, not a guaranteed decision.",
          ),
          s(" This framing helps campaign teams use model output as decision support rather than automation theater."),
        ],
[
          s("Marketers get better results when they pair model probability with business constraints. "),
          x(
            "For example, a 0.62 conversion probability might still be rejected if expected margin is low or compliance risk is high.",
            "The best operating pattern is model suggestion plus human or rule guardrails tied to CAC, LTV, and brand risk thresholds.",
          ),
          s(" You are not replacing judgment; you are scaling it with data."),
        ],

        [

          s("Turn this mental model into a campaign decision protocol: every score should trigger a predefined action path rather than ad hoc interpretation. "),

          x(

            "Define probability bands, ownership, and business constraints so growth teams, sales, and RevOps treat model output consistently across channels.",

            "This reduces noisy escalations after individual misses and keeps optimization tied to aggregate conversion and margin outcomes.",

          ),

          s("A shared decision protocol is what converts probabilistic insight into repeatable execution quality."),

        ],

      ],
      examples: [
        {
          title: "Meta lead campaign scoring",
          body: "A B2B demand team treated Meta lead quality as a probability score instead of a binary pass/fail and improved sales acceptance by adding CRM-stage guardrails before routing.",
        },
        {
          title: "HubSpot lead fit + intent split",
          body: "A RevOps team separated fit and intent probabilities rather than combining them into one score, improving SDR prioritization and reducing noisy handoffs.",
        },
        {
          title: "Salesforce Einstein opportunity risk",
          body: "Marketing and sales aligned on risk bands from Einstein predictions and linked each band to specific nurture actions instead of manual debate in pipeline meetings.",
        },
      ],
    }),
    buildSection({
      number: "2.2",
      title: "Training Data in Campaign Reality",
      subtitle: "Why event hygiene determines model quality",
      take: "Training data is historical campaign behavior. Broken tracking, inconsistent naming, and missing outcome labels directly reduce model quality.",
      why: "Many marketing AI rollouts fail because instrumentation debt was ignored in favor of tool procurement.",
      paragraphs: [
[
          s("Campaign models learn from what you record, not what actually happened in the market. "),
          x(
            "If UTM conventions are inconsistent, offline conversions are delayed, or lifecycle stages are overwritten manually, the model sees distorted history.",
            "That distortion creates confident but low-value predictions that appear sophisticated in dashboards.",
          ),
          s(" Data governance in marketing ops is therefore model governance."),
        ],
[
          s("Before scaling any AI optimization module, run a data readiness audit. "),
          x(
            "Check event completeness, stage consistency, conversion timestamp integrity, and channel attribution latency.",
            "Even small fixes like standardized campaign taxonomy can produce larger performance gains than switching vendors.",
          ),
          s(" Better labels usually beat fancier algorithms."),
        ],

        [

          s("Operationally, treat training data as a managed asset with named owners for taxonomy, labeling quality, and ingestion latency. "),

          x(

            "Before scaling automation, enforce readiness gates such as event completeness thresholds and acceptable offline-conversion delay windows.",

            "When those gates fail, pause optimization expansion and prioritize instrumentation fixes to prevent expensive model mislearning.",

          ),

          s("This keeps model improvements grounded in signal quality instead of vendor promises."),

        ],

      ],
      examples: [
        {
          title: "Google Ads offline conversion lag",
          body: "A SaaS company reduced bid model volatility by fixing a 10-day offline conversion import lag, giving Smart Bidding fresher outcomes to learn from.",
        },
        {
          title: "Braze event taxonomy cleanup",
          body: "Lifecycle teams standardized event names across product squads and saw improved churn propensity stability within one retraining cycle.",
        },
        {
          title: "Marketo lifecycle stage normalization",
          body: "A global team unified MQL and SQL definitions by region before retraining lead models, significantly reducing score drift between business units.",
        },
      ],
    }),
    buildSection({
      number: "2.3",
      title: "Why Different Companies Get Different Results",
      subtitle: "Same tool, different outcomes",
      take: "The same model can produce very different outcomes across companies because data context, funnel design, and offer-market fit differ.",
      why: "Benchmarks are useful, but your deployment context determines realized lift.",
      paragraphs: [
[
          s("Vendor case studies often hide distribution differences across industries and sales motions. "),
          x(
            "A model trained mostly on high-volume e-commerce signals will behave differently in enterprise B2B with long cycles and sparse conversions.",
            "Copying another brand's setup without context alignment usually produces disappointing results.",
          ),
          s(" Treat benchmarks as directional, not contractual."),
        ],
[
          s("Context variables matter: deal cycle length, traffic intent mix, creative quality, and CRM discipline all interact with model behavior. "),
          x(
            "Two teams can run the same AI feature and report opposite ROI because one has clean feedback loops and the other has noisy handoffs.",
            "Your first goal is not maximum automation. It is context-fit learning.",
          ),
          s(" Start with scoped pilots tied to your own funnel physics."),
        ],

        [

          s("Why Different Companies Get Different Results becomes actionable when metrics are tied to campaign decisions, not viewed as dashboard trivia. "),

          x(

            "The same model can produce very different outcomes across companies because data context, funnel design, and offer-market fit differ.",

            "Benchmarks are useful, but your deployment context determines realized lift.",

          ),

          s("The goal is to make every score change trigger a concrete optimization decision."),

        ],

      ],
      examples: [
        {
          title: "HubSpot predictive lead scoring variance",
          body: "A PLG company saw strong lift quickly, while a services firm saw weak early results until they reworked lifecycle definitions and form routing logic.",
        },
        {
          title: "Meta Advantage+ by catalog quality",
          body: "Two retailers used the same setup; the one with richer product feed metadata and faster creative refreshes captured better CPA outcomes.",
        },
        {
          title: "Jasper content workflow differences",
          body: "Teams with strict briefing templates and SME review got consistent quality, while ad hoc prompting teams generated off-message drafts and low adoption.",
        },
      ],
    }),
    buildSection({
      number: "2.4",
      title: "Overfitting in Marketing Models",
      subtitle: "When yesterday's winners become tomorrow's waste",
      take: "Overfitting means the model memorized old campaign patterns and fails to generalize when market conditions change.",
      why: "Overfit models can look excellent in backtests but underperform in live spend decisions.",
      paragraphs: [
[
          s("If a model performs great on historical data but weakly in new campaigns, overfitting is a likely cause. "),
          x(
            "It may have learned creative artifacts, seasonal quirks, or platform anomalies that no longer hold.",
            "Marketers often misread this as 'AI stopped working' when the real issue is generalization failure.",
          ),
          s(" Live holdout testing is your best defense."),
        ],
[
          s("Use rolling validation and fresh control groups to monitor generalization. "),
          x(
            "Track performance decay by segment and channel, not only global averages.",
            "When drift appears, retrain with newer data and retire stale features that encode dead patterns.",
          ),
          s(" Performance governance beats post-mortem blame."),
        ],

        [

          s("Build anti-overfitting controls into campaign governance by requiring live holdouts before major budget reallocations. "),

          x(

            "Set decay alerts by segment and channel so teams catch when backtest winners stop generalizing in current market conditions.",

            "Pair those alerts with retraining triggers and feature retirement rules to prevent stale patterns from driving spend.",

          ),

          s("Treating generalization as a monitored KPI helps marketers avoid costly confidence in outdated models."),

        ],

      ],
      examples: [
        {
          title: "DTC seasonality overfit",
          body: "A retailer's model overweighted holiday-era behavior and overspent during off-season until retraining with balanced seasonal windows restored efficiency.",
        },
        {
          title: "LinkedIn audience artifact",
          body: "A B2B team discovered its model relied on job-title shorthand from one region and underperformed globally until feature redesign.",
        },
        {
          title: "Email send-time optimization decay",
          body: "A lifecycle model trained on pre-product-launch habits lost lift after UX changes; weekly monitoring caught the decline early and triggered retraining.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "2.5",
      title: "Cold Start in New Campaigns",
      subtitle: "What happens before the model has enough evidence",
      take: "Cold start is the period when models have limited outcome data. During this phase, exploration strategy and priors matter more than heavy automation.",
      why: "Marketers launching new offers or geographies need a staged approach that balances learning speed with budget protection.",
      paragraphs: [
[
          s("At launch, the model has little signal about audience-response patterns for the new campaign. "),
          x(
            "If you constrain too aggressively, learning stalls. If you explore too broadly, spend burns with low return.",
            "The best practice is controlled exploration with predefined spend caps and fast feedback ingestion.",
          ),
          s(" Cold start is a design phase, not a failure phase."),
        ],
[
          s("Warm starts can reduce cold-start pain. "),
          x(
            "Reuse adjacent audience priors, historical creative embeddings, and similar-offer conversion baselines where available.",
            "Then progressively hand off more control to the model as confidence and volume improve.",
          ),
          s(" Plan this handoff before launch so teams avoid reactive toggling."),
        ],

        [

          s("Cold-start execution should be planned as a staged rollout with explicit exploration budgets, stop-loss limits, and evidence milestones. "),

          x(

            "Assign owners for prior selection, early-signal review, and weekly adjustment decisions so teams do not toggle automation reactively.",

            "As confidence improves, codify handoff criteria for increasing automation rather than relying on intuition or launch pressure.",

          ),

          s("A disciplined cold-start playbook protects budget while accelerating reliable learning."),

        ],

      ],
      examples: [
        {
          title: "New geo launch with Meta",
          body: "A fintech entered a new market and used capped exploration ad sets for two weeks before expanding budget, reducing early CPA spikes.",
        },
        {
          title: "HubSpot new product line",
          body: "A SaaS company seeded scoring models with adjacent product behavior and shortened time-to-stable routing for SDR teams.",
        },
        {
          title: "Retail catalog expansion",
          body: "A brand introduced a new category and used conservative bid automation until enough conversion signal accumulated for full ML optimization.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-ch2-cold-start-loop",
      type: "flow",
      title: "Cold Start Learning Loop",
      caption: "Explore with guardrails, capture outcomes quickly, then increase automation as confidence rises.",
    }),
    buildSection({
      number: "2.6",
      title: "Feedback Loops that Improve Models",
      subtitle: "Closing the loop from click to revenue",
      take: "Models improve when high-quality outcomes are fed back quickly. Slow, missing, or noisy feedback keeps performance flat.",
      why: "Campaign AI without reliable feedback loops is expensive automation with limited learning.",
      paragraphs: [
[
          s("A complete feedback loop connects ad exposure, engagement, pipeline progression, and revenue outcomes. "),
          x(
            "If the loop breaks after top-funnel events, models optimize for clicks instead of business value.",
            "High-performing teams push downstream outcomes back into ad and CRM systems regularly.",
          ),
          s(" Learning quality depends on outcome depth, not dashboard polish."),
        ],
[
          s("Speed also matters. "),
          x(
            "Weekly or daily feedback updates usually outperform monthly uploads in dynamic campaign environments.",
            "When latency cannot be reduced, use interim proxy labels carefully and replace them with final outcomes once available.",
          ),
          s(" Freshness and fidelity are twin levers for model lift."),
        ],

        [

          s("Operational performance depends on closing the loop from campaign action to business outcome with strict freshness targets. "),

          x(

            "Set SLAs for syncing downstream events such as opportunity stage and closed-won updates into optimization systems.",

            "When outcome latency breaches thresholds, downgrade automation confidence and adjust spend decisions until loop health recovers.",

          ),

          s("Feedback-loop discipline is the difference between temporary automation gains and compounding model improvement."),

        ],

      ],
      examples: [
        {
          title: "Salesforce opportunity-stage feedback",
          body: "A B2B team synced stage progression nightly and improved audience suppression for low-propensity segments, reducing wasted spend.",
        },
        {
          title: "Google Enhanced Conversions discipline",
          body: "An e-commerce team improved bid quality by fixing match rates and speeding event uploads, helping models optimize to real purchase value.",
        },
        {
          title: "HubSpot closed-won enrichment",
          body: "A growth team fed closed-won and churn outcomes into model monitoring, finding channels that looked strong on MQLs but weak on revenue.",
        },
      ],
    }),
    buildSection({
      number: "2.7",
      title: "Marketer Decision Lens for Model Learning",
      subtitle: "Seven questions before scaling spend",
      take: "Before scaling any AI-driven campaign system, ask structured questions about data, drift, retraining, and accountability.",
      why: "A standard decision lens prevents emotional rollouts and makes AI performance reviews repeatable across teams.",
      paragraphs: [
[
          s("Use seven checks: data completeness, label quality, context fit, cold-start plan, retraining cadence, feedback latency, and owner accountability. "),
          x(
            "If any check fails, keep deployment scoped and fix the weak link first.",
            "This prevents expensive full-rollout failures that are hard to unwind politically.",
          ),
          s(" Discipline beats enthusiasm in AI adoption."),
        ],
[
          s("Institutionalize this lens in campaign review rituals. "),
          x(
            "When every AI module is reviewed with the same template, leadership can compare tools fairly and reallocate budget confidently.",
            "It also improves cross-functional trust between marketing, RevOps, analytics, and finance.",
          ),
          s(" Consistency is a force multiplier."),
        ],

        [

          s("Marketer Decision Lens for Model Learning becomes actionable when metrics are tied to campaign decisions, not viewed as dashboard trivia. "),

          x(

            "Before scaling any AI-driven campaign system, ask structured questions about data, drift, retraining, and accountability.",

            "A standard decision lens prevents emotional rollouts and makes AI performance reviews repeatable across teams.",

          ),

          s("The goal is to make every score change trigger a concrete optimization decision."),

        ],

      ],
      examples: [
        {
          title: "Quarterly AI campaign governance",
          body: "A SaaS CMO added a model-readiness scorecard to QBRs and reduced failed pilot expansions by filtering weak setups earlier.",
        },
        {
          title: "Agency multi-client playbook",
          body: "An agency standardized AI readiness checks across clients and improved average time-to-stable performance after launch.",
        },
        {
          title: "Retail growth council",
          body: "A retailer used the decision lens to prioritize two high-signal AI modules and paused three low-readiness initiatives, improving ROI concentration.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "If a campaign model looks great in backtests but performs poorly in new traffic, what is the most likely explanation?",
      options: [
        "The ad platform intentionally throttled delivery.",
        "The model is overfit to historical patterns and not generalizing to current conditions.",
        "The model needs more creative variety only.",
        "The issue is always budget size.",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Overfitting is a common reason for strong historical metrics but weak live performance.",
      wrongFeedback:
        "The key signal is historical strength with live weakness, which usually indicates poor generalization.",
    },
    {
      kind: "order",
      q: "Order the recommended cold-start rollout steps.",
      prompt: "Arrange from first to last.",
      items: [
        "Launch controlled exploration with spend caps.",
        "Capture and sync outcomes quickly.",
        "Evaluate confidence and segment stability.",
        "Increase automation and budget gradually.",
      ],
      correctFeedback:
        "Correct. Controlled exploration first, then rapid feedback, then confidence checks, then scale.",
      wrongFeedback:
        "Cold start works best when you balance exploration and risk before full automation.",
    },
    {
      kind: "categorize",
      q: "Categorize each issue by root cause.",
      categories: ["Data Quality", "Cold Start", "Feedback Loop"],
      items: [
        { text: "Offline conversions arrive 12 days late", category: 2 },
        { text: "UTM naming differs by region and channel", category: 0 },
        { text: "New product launch has no historical conversion patterns", category: 1 },
        { text: "CRM lifecycle stages are inconsistently updated", category: 0 },
        { text: "Initial audience exploration burns spend without clear priors", category: 1 },
        { text: "Closed-won outcomes are never sent back to ad platforms", category: 2 },
      ],
      correctFeedback:
        "Correct. Strong model performance depends on clean data, managed cold starts, and closed feedback loops.",
      wrongFeedback:
        "Map each problem to data hygiene, early-learning conditions, or feedback latency/missing outcomes.",
    },
  ],
});
