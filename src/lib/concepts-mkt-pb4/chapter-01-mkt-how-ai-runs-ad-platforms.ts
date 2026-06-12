import {
  MKT_CALLOUT,
  buildChapter,
  buildSection,
  sectionWithDiagram,
  s,
  x,
} from "../concepts-mkt-helpers";

export const chapter01MktHowAiRunsAdPlatforms = buildChapter({
  slug: "mkt-how-ai-runs-ad-platforms",
  number: 1,
  shortTitle: "How AI Runs Ad Platforms",
  title: "How AI Runs Modern Ad Platforms (Google, Meta, and the Signal Economy)",
  readingMinutes: 20,
  summary:
    "Paid media is no longer a manual bidding game. Platform AI now controls auction pricing, budget pacing, and delivery decisions in milliseconds. Marketers who understand this shift move from tactical tweaking to strategic signal design.",
  keyTakeaway:
    "Your leverage is not in micro-adjusting bids. Your leverage is feeding cleaner signals, clearer creative intent, and stronger conversion events into platform models.",
  pmCallout: MKT_CALLOUT,
  sections: [
    buildSection({
      number: "1.1",
      title: "Google Smart Bidding and Auction AI",
      subtitle: "How bidding decisions now happen in milliseconds",
      take: "Google bidding systems optimize against predicted conversion probability and value, so objective design and signal quality matter more than manual bid tweaks.",
      why: "Teams that still prioritize frequent bid edits over event quality usually create volatility without improving outcomes.",
      paragraphs: [
        [
          s(
            "Google Smart Bidding evaluates each auction in real time using context, intent signals, and historical conversion outcomes. ",
          ),
          x(
            "Strategies like tCPA and tROAS are optimization contracts with the model: you define the target, and the system decides bid aggressiveness auction by auction.",
            "When conversion events are noisy or misaligned, the model optimizes faithfully toward the wrong business objective.",
          ),
          s(" Performance quality starts with objective precision, not dashboard reactivity."),
        ],
        [
          s("Learning stability is the second major driver of Smart Bidding performance. "),
          x(
            "Frequent target shifts, budget shocks, and campaign restructuring reset learning and reduce model confidence.",
            "Disciplined change cadence allows the system to converge and produce more predictable efficiency over time.",
          ),
          s(" Stability is a strategic input, not a passive choice."),
        ],
        [
          s("Marketers still have high leverage, but in system design rather than micro-bidding. "),
          x(
            "Define event hierarchy, import qualified offline signals, and align bidding goals with margin or pipeline value instead of shallow top-funnel proxies.",
            "These inputs give Google’s auction AI better training targets and improve business-level outcomes from paid search spend.",
          ),
          s(" Better feed quality produces better bidding behavior at scale."),
        ],
      ],
      examples: [
        {
          title: "DTC skincare brand cuts CPA by fixing signal design",
          body: "A growth team reduced campaign complexity from 48 ad sets to 8 and replaced low-value events with purchase-value optimization. CPA dropped 22% in six weeks even with fewer manual controls.",
        },
        {
          title: "B2B SaaS shifts from MQL optimization to pipeline events",
          body: "Instead of optimizing for form fills, the team passed Salesforce stage progression events back into ad platforms. Lead volume dropped, pipeline quality improved, and SQL-to-opportunity conversion increased 31%.",
        },
        {
          title: "Marketplace team removes bid micromanagement",
          body: "A marketplace stopped hourly bid edits and moved to target ROAS with stable learning windows. Performance volatility fell and weekly revenue became more predictable.",
        },
      ],
    }),
    sectionWithDiagram(
      {
        number: "1.2",
        title: "Meta Targeting in an AI Delivery System",
        subtitle: "How broad targeting and creative signals work together",
        take: "Meta’s AI delivery favors broad audience inputs plus strong creative and event signals, shifting control from manual segmentation to signal design.",
        why: "Over-segmentation often reduces learning efficiency and prevents the model from finding profitable audience pockets.",
        paragraphs: [
          [
            s(
              "Meta’s modern targeting stack infers relevance dynamically from behavior and response signals rather than rigid audience slicing. ",
            ),
            x(
              "Broad targeting gives the system room to explore, while conversion events and creative interactions guide where delivery concentrates.",
              "This is why many narrowly segmented account structures underperform compared with simpler, signal-rich campaign setups.",
            ),
            s(" Meta targeting quality depends on the strength of your signal environment."),
          ],
          [
            s("Creative functions as targeting input in this system. "),
            x(
              "Different hooks, proof styles, and formats attract different intent clusters, helping delivery models route impressions toward likely converters.",
              "If creative variation is weak, broad targeting appears inefficient because the model lacks informative differentiation signals.",
            ),
            s(" Better creative diversity improves targeting outcomes."),
          ],
          [
            s(
              "Operationally, Meta performance improves when event hierarchy is explicit and stable. ",
            ),
            x(
              "Prioritize business-close events, protect learning windows, and avoid frequent structural resets that erase model memory.",
              "This gives delivery systems the consistency needed to scale profitable trajectories across placements and formats.",
            ),
            s(" In AI-driven targeting, consistency and signal depth beat manual complexity."),
          ],
        ],
        examples: [
          {
            title: "Retailer moves from Max Clicks to tROAS",
            body: "After switching from click volume optimization to purchase-value signals and tROAS, average order value from paid search rose 18% with similar spend.",
          },
          {
            title: "Travel brand recovers from constant target edits",
            body: "The team stopped changing tCPA every 2 days, moved to weekly review cycles, and saw conversion rate variance tighten within three weeks.",
          },
          {
            title: "Local services brand fixes offline conversion imports",
            body: "By sending qualified booked-appointment events back to Google Ads, Smart Bidding began prioritizing higher-intent searches and improved close rate.",
          },
        ],
      },
      {
        kind: "diagram",
        id: "mkt-pb4-ch1-google-bidding-loop",
        type: "flow",
        title: "Smart Bidding Feedback Loop",
        caption:
          "Signal quality, objective clarity, and learning stability determine bidding outcomes more than manual bid tweaks.",
      },
    ),
    buildSection({
      number: "1.3",
      title: "The Signal Economy in Paid Media",
      subtitle: "Why first-party event quality is now your core edge",
      take: "In AI-run ad platforms, signal quality is the primary competitive moat because optimization quality mirrors the fidelity of your conversion and value data.",
      why: "If event architecture is noisy, even advanced automation scales toward low-value outcomes.",
      paragraphs: [
        [
          s("Paid media has moved from control economy to signal economy. "),
          x(
            "Platforms now share similar automation capabilities, so differentiation comes from cleaner first-party events, value mapping, and feedback loops.",
            "Brands that pass richer outcome data give algorithms a stronger learning substrate than brands optimizing on shallow clicks or form starts.",
          ),
          s(" Signal integrity increasingly determines media efficiency."),
        ],
        [
          s("Event hierarchy design is a strategic leadership task. "),
          x(
            "Primary events should represent business value, secondary events should represent intent progression, and diagnostic events should stay out of optimization goals.",
            "This hierarchy helps platforms distinguish true demand creation from low-quality engagement noise.",
          ),
          s(" Better hierarchy design improves both bidding and delivery quality."),
        ],
        [
          s(
            "Signal economy maturity requires tight collaboration between marketing, analytics, and engineering. ",
          ),
          x(
            "Server-side tracking, CRM feedback loops, and value-based event enrichment strengthen model learning under privacy and attribution constraints.",
            "Teams that operationalize these connections build a durable acquisition advantage that competitors cannot copy quickly.",
          ),
          s(" Strong signal operations are now a paid media capability, not just a tracking task."),
        ],
      ],
      examples: [
        {
          title: "Consumer app scales with broad targeting + stronger creative",
          body: "After replacing 20 audience slices with broad Advantage+ and weekly creative rotations, install volume increased 27% at similar CPI.",
        },
        {
          title: "eCom brand learns placement mix via automation",
          body: "Instead of forcing feed-only delivery, the team allowed automated placements and found incremental purchases from Reels and Stories at lower blended CPA.",
        },
        {
          title: "Education brand fixes event hierarchy",
          body: "Prioritizing completed application events over lead events reduced low-quality lead optimization and improved enrolled-student efficiency.",
        },
      ],
    }),
    buildSection({
      number: "1.4",
      title: "Why Restricting the Algorithm Hurts Performance",
      subtitle: "The hidden cost of excessive manual constraints",
      take: "Over-constraining automated systems with narrow audiences, rigid placements, and frequent edits reduces learning depth and raises acquisition costs.",
      why: "Many teams interpret control as risk reduction when it actually removes the exploration needed for efficient optimization.",
      paragraphs: [
        [
          s("Automated delivery systems need room to test and adapt across contexts. "),
          x(
            "When marketers over-specify segments, placements, or bid rules, they force models into narrow spaces where learning is slower and more expensive.",
            "Short-term comfort from control often comes with long-term efficiency loss and weaker scale potential.",
          ),
          s(" Restriction can look disciplined while quietly degrading performance."),
        ],
        [
          s("The goal is not zero controls; it is high-value guardrails. "),
          x(
            "Use controls to protect brand safety, legal boundaries, and budget risk, but avoid constraints that block normal model exploration.",
            "This balance keeps systems accountable without crippling their core optimization mechanism.",
          ),
          s(" Guardrails should guide algorithms, not suffocate them."),
        ],
        [
          s(
            "A practical test is to compare constrained and less-constrained structures under stable objectives. ",
          ),
          x(
            "If broader setups consistently win on cost-adjusted outcomes, your manual controls are likely suppressing model learning rather than improving quality.",
            "Use that evidence to simplify structures and redeploy effort into signal and creative quality improvements.",
          ),
          s(" Evidence-led simplification usually beats control-heavy complexity."),
        ],
      ],
      examples: [
        {
          title: "Subscription brand maps events to LTV tiers",
          body: "Passing 30-day retention and plan-tier value back to ad platforms improved high-LTV acquisition mix without increasing total spend.",
        },
        {
          title: "Fintech team removes noisy micro-conversions",
          body: "After excluding low-intent click events from optimization goals, campaign quality improved and downstream approved-account rate increased.",
        },
        {
          title: "B2B pipeline team implements server-side events",
          body: "Server-side tracking restored conversion fidelity after browser tracking loss, reducing reporting gaps and improving bid model confidence.",
        },
      ],
    }),
    sectionWithDiagram(
      {
        number: "1.5",
        title: "The Marketer Role: Feeding the Machine",
        subtitle: "Where human leverage sits in AI-led media operations",
        take: "In automated platforms, marketer leverage comes from objective definition, signal architecture, creative variation, and experiment design.",
        why: "Teams that focus mainly on micro-optimizations underinvest in the inputs that actually drive model quality.",
        paragraphs: [
          [
            s("AI-run ad systems are only as good as the training environment marketers create. "),
            x(
              "Your responsibilities include defining what success means, which events represent that success, and how creative assets express differentiated value propositions.",
              "When these inputs are weak, platform automation optimizes efficiently toward the wrong destination.",
            ),
            s(" Human strategy sets the direction; algorithms scale the execution."),
          ],
          [
            s("Feeding the machine is a cross-functional process, not a media-only task. "),
            x(
              "Analytics teams ensure signal fidelity, product and sales teams define value quality, and creative teams generate message variation for model exploration.",
              "When these loops are disconnected, performance diagnosis becomes slow and optimization quality declines.",
            ),
            s(" Coordination quality is now a paid media multiplier."),
          ],
          [
            s(
              "Weekly review rituals should center on model input decisions, not only output metrics. ",
            ),
            x(
              "Ask which events need re-prioritization, which creative angles are saturating, and which experiments can improve learning in the next cycle.",
              "This approach keeps teams proactive and prevents reactive budget-only decision patterns.",
            ),
            s(" Feeding the machine well is an ongoing management discipline."),
          ],
        ],
        examples: [
          {
            title: "Fashion brand uses staged budget ramps",
            body: "Moving from sudden 50% budget jumps to staged weekly ramps preserved ROAS while scaling spend for peak season.",
          },
          {
            title: "Lead-gen team codifies change protocol",
            body: "A simple rule set (one major campaign variable per week) reduced week-over-week CPA swings and improved decision confidence.",
          },
          {
            title: "Gaming app avoids duplicate campaign resets",
            body: "Consolidating duplicates into stable campaign groups improved model learning depth and lowered blended CPI.",
          },
        ],
      },
      {
        kind: "diagram",
        id: "mkt-pb4-ch1-learning-volatility-map",
        type: "comparison",
        title: "Stable vs Unstable Learning Inputs",
        caption:
          "Stable objectives and paced changes improve AI convergence; constant resets produce avoidable volatility.",
      },
    ),
    buildSection({
      number: "1.6",
      title: "Control vs Automation Decision Framework",
      subtitle: "Choosing where to constrain and where to let models run",
      take: "A strong paid media framework defines which decisions should stay human-led and which should be delegated to platform automation based on risk and value impact.",
      why: "Binary thinking about control versus automation creates either fragility or stagnation in campaign performance.",
      paragraphs: [
        [
          s("Not every lever should be automated, and not every lever should remain manual. "),
          x(
            "Keep strategic choices manual: business goals, value definitions, legal constraints, and experiment priorities.",
            "Delegate high-frequency execution tasks to automation: auction bidding, placement routing, and intra-auction signal weighting.",
          ),
          s(" Division of labor should follow comparative advantage."),
        ],
        [
          s("The framework should also define change cadence and escalation rules. "),
          x(
            "Specify which parameters can change daily, weekly, or monthly, and when poor performance triggers structural intervention.",
            "This prevents panic edits while maintaining accountability for major deviations from expected outcomes.",
          ),
          s(" Governance converts automation from black box to managed system."),
        ],
        [
          s("As teams mature, framework decisions should be backed by evidence logs. "),
          x(
            "Document which constraints improved outcomes, which automation modes performed best, and under what market conditions exceptions were justified.",
            "Over time this builds an internal playbook that improves decision speed and consistency across accounts and channels.",
          ),
          s(" Control-vs-automation maturity is a compounding strategic asset."),
        ],
      ],
      examples: [
        {
          title: "Enterprise team introduces signal owner role",
          body: "Assigning a clear owner for conversion architecture reduced tracking incidents and improved campaign decision speed across channels.",
        },
        {
          title: "Scale-up aligns creative and media sprints",
          body: "Synchronizing creative testing with bid-learning windows lifted conversion efficiency by reducing mismatched iteration cadence.",
        },
        {
          title: "B2B team adds model-readiness checklist",
          body: "Before launching campaigns, teams validate event mapping, CRM sync, and budget stability assumptions, reducing failed launches.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is the highest-leverage action for a marketer in AI-led ad platforms?",
      options: [
        "Editing bids every few hours",
        "Creating many tiny audience segments",
        "Improving signal quality and objective alignment",
        "Resetting campaigns when results fluctuate",
      ],
      correct: 2,
      correctFeedback:
        "Correct. Platform AI already handles auction mechanics; your leverage is objective clarity and high-quality conversion signals.",
      wrongFeedback:
        "The biggest leverage now is upstream: signal architecture, event quality, and objective design.",
    },
    {
      kind: "categorize",
      q: "Classify each action by likely impact on model learning.",
      categories: ["Helps learning", "Hurts learning"],
      items: [
        { text: "Stable goals for multiple weeks", category: 0 },
        { text: "Frequent target and budget resets", category: 1 },
        { text: "Prioritizing high-value conversion events", category: 0 },
        { text: "Duplicating similar campaigns repeatedly", category: 1 },
      ],
      correctFeedback:
        "Right. AI systems improve with stable objectives and clean events, and degrade under constant structural disruption.",
      wrongFeedback:
        "Focus on stability and signal quality; volatility from repeated resets usually hurts model convergence.",
    },
    {
      kind: "order",
      q: "Order the paid media optimization workflow for AI platforms.",
      prompt: "Arrange from first step to last step.",
      items: [
        "Define business outcome and optimization event hierarchy",
        "Ensure tracking and data flow integrity",
        "Launch with stable structure and learning window",
        "Iterate using controlled experiments and review cadence",
      ],
      correctFeedback:
        "Correct. Strategy and signal quality come first, then stable launch, then disciplined iteration.",
      wrongFeedback:
        "Start with outcome and event design, then data integrity, then launch and controlled iteration.",
    },
    {
      q: "In the signal economy, what most differentiates two brands using the same ad platform tools?",
      options: [
        "Who changes bids faster",
        "Who has better first-party outcome signals",
        "Who uses more manual placements",
        "Who creates more ad sets",
      ],
      correct: 1,
      correctFeedback:
        "Correct. First-party event quality is a core performance moat when platform tooling is widely shared.",
      wrongFeedback:
        "Shared tooling levels the field; better first-party signal design creates the real edge.",
    },
  ],
});
