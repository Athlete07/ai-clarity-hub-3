import { buildChapter, buildSection, s, x, sectionWithDiagram, MKT_CALLOUT } from "../concepts-mkt-helpers";

export const chapter03MktCompetitiveIntelligenceAi = buildChapter({
  slug: "mkt-competitive-intelligence-ai",
  number: 3,
  shortTitle: "Competitive Intelligence AI",
  title: "AI-Powered Competitive Intelligence for Faster Marketing Moves",
  readingMinutes: 20,
  summary:
    "Competitive intelligence is no longer a quarterly deck exercise. AI lets marketing teams detect messaging shifts, offer changes, and channel strategy moves quickly enough to influence current-quarter execution.",
  keyTakeaway:
    "Use AI to compress the signal-to-decision cycle: collect, classify, prioritize, and act. Intelligence only matters when tied to clear response playbooks.",
  pmCallout: MKT_CALLOUT,
  sections: [
    buildSection({
      number: "3.1",
      title: "Competitive Intelligence Coverage Scope",
      subtitle: "Defining what to monitor and why it matters",
      take: "Effective competitive intelligence (CI) starts with deliberate coverage across competitors, channels, customer segments, and signal types.",
      why: "Without scoped coverage, teams either miss high-impact market moves or drown in low-value monitoring noise.",
      paragraphs: [
        [
          s("Competitive intelligence should begin with a clear coverage model rather than ad hoc monitoring. "),
          x(
            "Coverage scope includes direct competitors, adjacent challengers, and category leaders whose tactics influence customer expectations.",
            "It should also define monitored channels such as paid media, website positioning, pricing pages, social narratives, and lifecycle communications.",
          ),
          s(" Broad but structured coverage reduces blind spots without creating unmanageable data volume."),
        ],
        [
          s("Coverage should be prioritized by strategic relevance, not by equal tracking of every competitor and channel. "),
          x(
            "Teams should weight monitoring toward segments where revenue concentration is highest and competitive pressure is strongest.",
            "A relevance-weighted model prevents analysts from spending time on low-impact signals while critical shifts are developing elsewhere.",
          ),
          s(" Prioritization discipline is what turns CI from reporting activity into strategic leverage."),
        ],
        [
          s("CI coverage plans should be reviewed quarterly to reflect product launches, market entries, and channel mix changes. "),
          x(
            "As business priorities evolve, the intelligence perimeter should evolve too, including retirement of low-value sources.",
            "Treating coverage as a living framework keeps CI aligned with real commercial risk and opportunity.",
          ),
          s(" Sustainable CI starts with scoped, adaptive coverage rather than one-time setup."),
        ],
      ],
      examples: [
        {
          title: "B2B coverage redesign",
          body: "A SaaS company expanded CI scope from three direct competitors to include two fast-growing adjacent players. Early detection of messaging shifts improved response speed in core pipeline segments.",
        },
        {
          title: "Retail channel-priority coverage",
          body: "A DTC brand reduced low-value source tracking and increased monitoring on paid social and promo-email channels where competitor moves affected conversion most. Analyst efficiency and alert relevance improved.",
        },
        {
          title: "Quarterly scope recalibration",
          body: "A fintech team revised CI coverage after entering a new region, adding local competitors and language-specific channels. This prevented blind spots during launch campaigns.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "3.2",
      title: "Share of Voice Intelligence",
      subtitle: "Tracking visibility and narrative dominance in target markets",
      take: "Share of voice (SOV) analysis measures how much presence your brand and competitors hold across channels and themes, then links that visibility to strategic decisions.",
      why: "SOV gives teams an early read on competitive pressure before full-funnel outcomes appear in lagging business metrics.",
      paragraphs: [
        [
          s("Share of voice should be measured across channel types and message themes rather than as one aggregate percentage. "),
          x(
            "A competitor can dominate paid search on one narrative while your brand leads in organic social conversation on another.",
            "Theme-level SOV segmentation helps teams identify where narrative share is strong, weak, or shifting rapidly.",
          ),
          s(" SOV becomes actionable when broken down by channel, audience, and message category."),
        ],
        [
          s("SOV trends are most useful when paired with conversion context and campaign timing. "),
          x(
            "A rise in competitor SOV may not require response if it is concentrated in low-value segments.",
            "A smaller SOV shift in a core high-intent segment can be strategically urgent and worth immediate intervention.",
          ),
          s(" Relevance-weighted SOV interpretation prevents reactive overcorrection."),
        ],
        [
          s("Operationally, SOV monitoring should include threshold alerts and historical baselines by segment. "),
          x(
            "Teams can define intervention rules for sustained SOV loss, sudden competitor spikes, or narrative displacement in priority channels.",
            "This turns SOV from a passive reporting metric into a trigger for targeted response playbooks.",
          ),
          s(" The value of SOV comes from decision linkage, not from charting visibility alone."),
        ],
      ],
      examples: [
        {
          title: "Search narrative share alert",
          body: "A B2B software team tracked SOV by keyword cluster and found a competitor gaining share on integration-related terms. It launched targeted content and paid search responses before pipeline impact widened.",
        },
        {
          title: "Social SOV by audience segment",
          body: "A fintech brand segmented social SOV by user persona and discovered trust messaging weakness in first-time buyer cohorts. Creative strategy shifted accordingly.",
        },
        {
          title: "Retail promo-voice baseline monitoring",
          body: "A retailer monitored competitor promotional SOV during peak season and triggered response campaigns only when sustained share loss exceeded defined thresholds in high-margin categories.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-3-2-intel-pipeline",
      type: "flow",
      title: "Share of Voice Monitoring Loop",
      caption: "Measure voice by channel/theme -> compare baseline -> trigger targeted response.",
    }),
    buildSection({
      number: "3.3",
      title: "Competitor Content Intelligence",
      subtitle: "Tracking messaging, positioning, and offer evolution",
      take: "AI can classify and compare competitor content to detect shifts in value propositions, proof points, pricing narratives, and category framing.",
      why: "Content signals often reveal strategic movement earlier than lagging performance metrics.",
      paragraphs: [
        [
          s("Competitor content intelligence focuses on what competitors are saying and how that message changes over time. "),
          x(
            "Relevant assets include homepage copy, landing pages, product pages, release notes, email messaging, and sales collateral where accessible.",
            "AI-based classification can tag claims by theme, audience, and buying-stage relevance at scale.",
          ),
          s(" Structured classification reduces manual reading and improves signal consistency."),
        ],
        [
          s("Change detection is especially valuable when competitors alter positioning or launch narrative campaigns. "),
          x(
            "Semantic diffing helps distinguish material strategic shifts from routine copy refreshes.",
            "Teams can then prioritize responses based on overlap with active campaigns and target customer segments.",
          ),
          s(" Competitive content analysis should answer, 'what changed, where, and why it matters now.'"),
        ],
        [
          s("Content intelligence works best when linked to playbooks for messaging tests, sales enablement updates, and product marketing responses. "),
          x(
            "Without this linkage, CI outputs remain interesting observations instead of execution inputs.",
            "A recurring content-review cadence ensures insights translate into market-facing action quickly.",
          ),
          s(" The goal is not to mirror competitor messaging but to respond with clearer, differentiated narratives."),
        ],
      ],
      examples: [
        {
          title: "Positioning shift detection",
          body: "An HR tech marketer detected a competitor shift from cost messaging to employee-experience framing and launched differentiated narrative testing before the theme saturated the category.",
        },
        {
          title: "Pricing narrative alert",
          body: "A software company’s content classifier flagged repeated competitor emphasis on all-inclusive pricing. The team updated pricing communication and objection-handling collateral within one sprint.",
        },
        {
          title: "Release-note overlap detection",
          body: "A SaaS team used semantic diffing on competitor release notes to identify overlap with its upcoming launch messaging. Campaign timing and proof points were adjusted proactively.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "3.4",
      title: "Social Listening for Competitive Signals",
      subtitle: "Using public conversation to detect demand and perception shifts",
      take: "Social listening with AI helps teams monitor competitor momentum, audience sentiment, complaint themes, and emerging narratives in near real time.",
      why: "Social channels often surface market reaction and perception shifts before formal reports or sales feedback loops catch up.",
      paragraphs: [
        [
          s("Social listening should track both brand mentions and thematic conversations tied to category pain points, product claims, and competitor announcements. "),
          x(
            "AI classification can separate meaningful sentiment or complaint clusters from routine noise.",
            "This allows teams to identify when a competitor narrative is resonating or when competitor trust is weakening in a target segment.",
          ),
          s(" Social listening is strongest when it prioritizes signal quality over mention volume."),
        ],
        [
          s("Competitive social signals should be interpreted with segment and intent context. "),
          x(
            "A high mention spike in low-intent audiences may be less important than moderate discussion growth among high-intent buyers.",
            "Linking social insights with campaign and pipeline data improves response prioritization.",
          ),
          s(" Context-rich social interpretation prevents overreaction to vanity trends."),
        ],
        [
          s("Operationally, social listening should feed rapid response workflows for messaging, support communication, and lifecycle interventions. "),
          x(
            "Weekly or biweekly intelligence reviews can validate which social signals translated into measurable business effects.",
            "This closes the loop between social detection and revenue-facing execution decisions.",
          ),
          s(" Social listening becomes strategic when it consistently informs timely, evidence-based actions."),
        ],
      ],
      examples: [
        {
          title: "Competitor launch sentiment monitoring",
          body: "A fintech team tracked sentiment around a competitor product launch and found repeated onboarding complaints. It amplified its own ease-of-use messaging in paid and lifecycle channels.",
        },
        {
          title: "Category narrative shift detection",
          body: "An ecommerce brand identified rising social discussion around sustainability claims in its category and updated competitor comparison messaging before campaign refresh cycles.",
        },
        {
          title: "B2B trust-signal response",
          body: "A SaaS firm noticed growing social complaints about a rival’s support reliability among enterprise users and coordinated sales enablement plus case-study promotion in affected segments.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-3-4-response-matrix",
      type: "comparison",
      title: "Social Signal Response Matrix",
      caption: "Classify social competitive signals by urgency and route to relevant response playbooks.",
    }),
    buildSection({
      number: "3.5",
      title: "Ad Intelligence with AI",
      subtitle: "Monitoring competitor paid media strategy and creative shifts",
      take: "Ad intelligence uses AI to track competitor creative, messaging, offer framing, and pacing patterns across paid channels.",
      why: "Paid media shifts can affect auction dynamics and conversion outcomes quickly, making early detection commercially valuable.",
      paragraphs: [
        [
          s("Ad intelligence should monitor creative themes, CTA patterns, landing page alignment, and offer mechanics across major paid platforms. "),
          x(
            "AI-based classifiers can group competitor ads by value proposition and track shifts in emphasis over time.",
            "This reveals whether rivals are changing acquisition strategy, targeting new personas, or repositioning offers aggressively.",
          ),
          s(" Structured ad monitoring helps teams separate strategic shifts from normal campaign variation."),
        ],
        [
          s("Ad intelligence is most useful when connected to your own media decision cycles. "),
          x(
            "Teams can use insights to test counter-messaging, adjust bid emphasis, refine creative mix, or reinforce differentiators on landing pages.",
            "The objective is not imitation but strategic adaptation based on verified competitor movement.",
          ),
          s(" Fast response requires predefined triggers and owners, not just richer ad snapshots."),
        ],
        [
          s("Measurement should track whether ad-intelligence responses improved efficiency or conversion in contested segments. "),
          x(
            "Useful metrics include response lag, competitive impression share stabilization, creative test uplift, and win-rate movement in overlapping audiences.",
            "This ensures ad intelligence is judged by business impact rather than alert volume.",
          ),
          s(" Ad intelligence programs justify investment when they demonstrably improve execution under competitive pressure."),
        ],
      ],
      examples: [
        {
          title: "Creative theme shift response",
          body: "A DTC brand detected competitor movement toward urgency-heavy creative and tested differentiated value messaging. Conversion quality improved in overlapping audiences.",
        },
        {
          title: "Landing page alignment alert",
          body: "A B2B team linked competitor ad capture with landing-page diffing and identified a new compliance-focused campaign direction. It launched counter-positioning pages in one sprint.",
        },
        {
          title: "Auction pressure stabilization",
          body: "A fintech marketer used ad intelligence alerts to anticipate rising competition on priority keywords and adjusted bid strategy plus creative relevance scores before CAC spikes intensified.",
        },
      ],
    }),
    buildSection({
      number: "3.6",
      title: "Designing a Competitive Intelligence System",
      subtitle: "Building an end-to-end CI operating model",
      take: "A durable CI system integrates coverage, collection, classification, prioritization, response playbooks, and outcome measurement in one managed operating loop.",
      why: "Most CI efforts fail when they stop at monitoring and never institutionalize decision ownership or continuous improvement.",
      paragraphs: [
        [
          s("A complete CI system begins with pipeline design: collect signals, normalize data, classify themes, and rank alerts by strategic relevance. "),
          x(
            "This pipeline should include legal/compliance boundaries and data-retention policies from the start.",
            "Structured ingestion enables consistent downstream analytics and faster cross-functional communication.",
          ),
          s(" CI infrastructure quality determines whether insights are timely and trustworthy."),
        ],
        [
          s("Operating design should define distinct responsibilities: intelligence quality owners, function-level response owners, and executive sponsors for prioritization. "),
          x(
            "Each major signal class should map to response playbooks with SLAs and measurable success criteria.",
            "This governance structure prevents the common gap where insights are produced but no team is accountable for action.",
          ),
          s(" Ownership clarity is the key difference between CI reporting and CI execution."),
        ],
        [
          s("Finally, CI systems need a continuous improvement cadence. "),
          x(
            "Quarterly reviews should evaluate alert quality, source relevance, playbook outcomes, and strategic alignment with current growth priorities.",
            "Low-value alerts should be retired, new competitors added, and response logic updated as market dynamics change.",
          ),
          s(" CI becomes a strategic asset when it operates as a continuously tuned system, not a static dashboard."),
        ],
      ],
      examples: [
        {
          title: "End-to-end CI operating model rollout",
          body: "A SaaS company built a CI loop linking signal collection, classification, alert routing, and playbook execution across product marketing and demand teams. Response lag decreased materially over two quarters.",
        },
        {
          title: "Ownership split implementation",
          body: "A retailer assigned one owner for CI signal quality and separate owners for campaign and lifecycle responses. This reduced analysis-action bottlenecks and improved accountability.",
        },
        {
          title: "Quarterly CI system recalibration",
          body: "A fintech team reviewed source value and playbook outcomes quarterly, retiring low-impact alerts and adding social-plus-ad coverage for high-priority segments. Actionable signal rate improved significantly.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is the core value of AI in competitive intelligence?",
      options: [
        "Producing larger weekly slide decks",
        "Reducing cost of analytics tooling only",
        "Detecting and prioritizing market changes fast enough to influence execution",
        "Replacing product marketing teams",
      ],
      correct: 2,
      correctFeedback:
        "Correct. AI is most valuable when it shortens the signal-to-decision loop.",
      wrongFeedback:
        "The objective is faster, higher-quality decisions - not more reporting output.",
    },
    {
      q: "Which practice makes competitive intelligence most actionable?",
      options: [
        "Tracking every competitor equally",
        "Using predefined response playbooks tied to alert classes",
        "Publishing one monthly report for all teams",
        "Measuring alert count as the primary KPI",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Signal classes should map to specific response actions and owners.",
      wrongFeedback:
        "Actionability comes from clear playbooks, ownership, and outcome tracking.",
    },
    {
      kind: "order",
      q: "Order the competitive intelligence workflow.",
      prompt: "Arrange from first to last.",
      items: [
        "Collect and normalize public competitive signals",
        "Classify and rank by strategic relevance",
        "Trigger response playbooks by function",
        "Measure business impact and refine signal logic",
      ],
      correctFeedback:
        "Correct. Collection -> classification -> response -> measurement is the core loop.",
      wrongFeedback:
        "Gather and structure signals first, then prioritize, execute responses, and evaluate outcomes.",
    },
    {
      kind: "categorize",
      q: "Categorize each item as intelligence activity or response activity.",
      categories: ["Intelligence Activity", "Response Activity"],
      items: [
        { text: "Semantic diff of competitor pricing pages", category: 0 },
        { text: "Launch counter-message A/B test", category: 1 },
        { text: "Classify ad copy themes by value proposition", category: 0 },
        { text: "Update sales battlecards for active deals", category: 1 },
        { text: "Rank alerts by ICP overlap and novelty", category: 0 },
        { text: "Deploy retention communications after promo threat", category: 1 },
      ],
      correctFeedback:
        "Correct. Keep sensing and responding distinct but tightly linked.",
      wrongFeedback:
        "Intelligence identifies high-value changes; response actions translate those insights into execution.",
    },
  ],
});
