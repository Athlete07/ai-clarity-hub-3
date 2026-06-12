import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter08MktAiMartechLandscape = buildChapter({
  slug: "mkt-ai-martech-landscape",
  number: 8,
  shortTitle: "AI Martech Landscape",
  title: "Navigating the AI Martech Landscape Like a Strategic Marketer",
  readingMinutes: 26,
  summary:
    "The AI martech ecosystem is crowded, overlapping, and full of repackaged capabilities. This chapter helps marketers map categories, evaluate vendors, and build a stack that creates real advantage.",
  keyTakeaway:
    "Winning stacks are modular, measurable, and governance-ready: pick tools by workflow value, not by category hype.",
  pmCallout: MKT_CALLOUT,
  sections: [
    buildSection({
      number: "8.1",
      title: "Landscape Map: Core AI Martech Categories",
      subtitle: "Know where each tool actually fits",
      take: "Most AI martech tools cluster into six categories: data and CDP intelligence, media optimization, content generation, personalization, analytics/forecasting, and orchestration.",
      why: "Category clarity prevents duplicate spend and contradictory tooling decisions.",
      paragraphs: [
[
          s("Vendors frequently span multiple categories in their positioning, but their strongest value usually sits in one or two workflows. "),
          x(
            "Marketers should evaluate capabilities at module level rather than buying broad category narratives.",
            "This improves stack fit and contract negotiation leverage.",
          ),
          s(" Clear categorization is the first defense against stack bloat."),
        ],
[
          s("Map your current tools and identify overlap before adding net-new AI products. "),
          x(
            "Many organizations already own dormant capabilities in platforms like Salesforce, HubSpot, Adobe, and Meta.",
            "Unlocking existing modules can outperform adding fragmented point solutions.",
          ),
          s(" Expansion should follow capability gaps, not trend pressure."),
        ],

        [

          s("Operationally, convert the category map into an ownership matrix so each workflow has a primary system, accountable team, and KPI set. "),

          x(

            "Flag overlap zones where multiple tools claim the same outcome, then decide whether to consolidate or maintain deliberate redundancy with clear rationale.",

            "This prevents duplicate spend and reduces conflicts where teams optimize against inconsistent definitions of success.",

          ),

          s("A category map is valuable only when it directly informs procurement and operating decisions."),

        ],

      ],
      examples: [
        {
          title: "HubSpot + point-tool overlap audit",
          body: "A growth team discovered overlapping scoring and content features and removed one point tool after proving equivalent outcomes in platform-native modules.",
        },
        {
          title: "Salesforce + external personalization tool review",
          body: "A RevOps audit found duplicated segmentation logic across systems, prompting consolidation and lower ops complexity.",
        },
        {
          title: "Retail martech capability map",
          body: "A retailer mapped all AI modules by workflow and prioritized three gaps instead of responding to vendor-by-vendor pitches.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "8.2",
      title: "Platform Suites vs Point Solutions",
      subtitle: "Breadth versus depth trade-offs",
      take: "Suites offer integration and governance simplicity; point tools offer specialized depth. Most mature stacks use both selectively.",
      why: "The wrong mix creates either innovation bottlenecks or operational fragmentation.",
      paragraphs: [
[
          s("Platform suites reduce integration burden and centralize data/governance controls. "),
          x(
            "They are often best for foundational workflows where consistency matters more than frontier specialization.",
            "However, suite modules may lag best-in-class point tools in niche capability.",
          ),
          s(" Suite-first is often a safe baseline, not always a growth ceiling."),
        ],
[
          s("Point tools can unlock sharp performance gains in high-leverage workflows. "),
          x(
            "Use them where differentiation potential is high and integration burden is manageable.",
            "Require clear success criteria and sunset triggers before adoption to avoid permanent tool sprawl.",
          ),
          s(" Specialization should be earned by measurable lift."),
        ],

        [

          s("Use a decision framework that scores each workflow on required depth, integration burden, and governance complexity before choosing suite or point solution. "),

          x(

            "Prefer suites for shared foundational processes, and deploy point tools only when projected incremental lift justifies added operational overhead.",

            "Include sunset criteria at adoption time so specialized tools do not become permanent complexity after their edge fades.",

          ),

          s("This keeps stack design intentional and limits long-term fragmentation."),

        ],

      ],
      examples: [
        {
          title: "Jasper inside suite-centric stack",
          body: "A company retained platform-native campaign operations while adding Jasper for specialized content velocity and governance controls.",
        },
        {
          title: "Meta native optimization vs external bidder",
          body: "A team tested an external bidder against native optimization and retained only the approach with sustained incremental lift.",
        },
        {
          title: "Adobe suite plus niche experimentation engine",
          body: "A brand used suite infrastructure for governance but layered a niche experimentation tool for advanced test orchestration.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-ch8-suite-vs-point",
      type: "comparison",
      title: "Suite vs Point Solution Decision",
      caption: "Suites optimize control and integration; point tools optimize specialization and potential lift.",
    }),
    buildSection({
      number: "8.3",
      title: "Vendor Evaluation Beyond Demos",
      subtitle: "Proof over polish",
      take: "Great demos are not evidence of durable value. Evaluate vendors on data requirements, integration effort, unit economics, and governance maturity.",
      why: "Most costly martech mistakes come from buying demo narratives without operational due diligence.",
      paragraphs: [
[
          s("Use structured scorecards covering capability fit, data readiness, cost scaling, and policy controls. "),
          x(
            "Require evidence from environments similar to your funnel and sales motion.",
            "Ask for customer references with comparable complexity, not only brand-name logos.",
          ),
          s(" Evidence quality should determine vendor confidence."),
        ],
[
          s("Insist on pilot design before signature where possible. "),
          x(
            "Define success metrics, timeline, and exit criteria in writing.",
            "This prevents post-sale ambiguity and creates cleaner go/no-go decisions.",
          ),
          s(" Procurement rigor protects execution speed later."),
        ],

        [

          s("Turn vendor evaluation into a formal gate that requires operational proof on data fit, integration effort, economics, and control readiness. "),

          x(

            "Score each criterion with weighted thresholds, and block expansion if pilot evidence misses minimum standards for business impact or risk control.",

            "This discipline reduces post-sale surprises and makes procurement decisions auditable across marketing, RevOps, finance, and legal.",

          ),

          s("Evidence-led evaluation helps teams buy capabilities they can actually operationalize."),

        ],

      ],
      examples: [
        {
          title: "B2B AI scoring vendor bake-off",
          body: "A team used a scorecard and rejected a polished vendor whose data prerequisites were unrealistic for their current CRM state.",
        },
        {
          title: "Retail personalization pilot contract",
          body: "Pilot success criteria included incrementality and margin guardrails, preventing expansion based on engagement-only wins.",
        },
        {
          title: "Agency procurement playbook",
          body: "An agency standardized vendor diligence and reduced failed client-side AI rollouts by filtering poor-fit tools earlier.",
        },
      ],
    }),
    buildSection({
      number: "8.4",
      title: "Integration Architecture and Stack Resilience",
      subtitle: "How tools connect determines long-term value",
      take: "Integration quality determines whether AI martech becomes a growth engine or an operations burden.",
      why: "Disconnected tools create reconciliation work, inconsistent signals, and weak model learning.",
      paragraphs: [
[
          s("Design for shared identities, consistent taxonomies, and reliable event pipelines. "),
          x(
            "When identity and event logic diverge across systems, model outputs conflict and teams lose trust.",
            "Resilient architecture favors canonical definitions and controlled transformation layers.",
          ),
          s(" Architecture decisions are marketing performance decisions."),
        ],
[
          s("Plan for failure modes and vendor changes. "),
          x(
            "Document fallback workflows, export pathways, and deprecation procedures before they are needed.",
            "Resilience planning reduces disruption when vendors change pricing or strategy.",
          ),
          s(" Stack resilience protects optionality."),
        ],

        [

          s("Operational resilience requires explicit integration standards for identity, taxonomy, event reliability, and fallback pathways across critical workflows. "),

          x(

            "Define interface contracts and monitoring SLAs so data breaks are detected before they distort optimization or reporting decisions.",

            "Document contingency procedures for vendor outages and migrations to preserve campaign continuity when dependencies fail.",

          ),

          s("Stack resilience is a governance capability, not a one-time technical implementation."),

        ],

      ],
      examples: [
        {
          title: "Identity mismatch remediation",
          body: "A cross-platform identity mismatch reduced personalization quality until a unified ID strategy was implemented.",
        },
        {
          title: "Event pipeline reliability program",
          body: "A team improved model consistency by adding schema checks and SLA monitoring to campaign-critical event flows.",
        },
        {
          title: "Vendor transition readiness",
          body: "Export and fallback plans allowed a smoother migration when a tool's roadmap no longer fit business requirements.",
        },
      ],
    }),
    buildSection({
      number: "8.5",
      title: "Operating Model: Teams, Skills, and Governance",
      subtitle: "Who runs the AI martech stack",
      take: "AI martech needs clear ownership across marketing, RevOps, analytics, legal, and finance.",
      why: "Without an operating model, tools proliferate faster than value and risk controls.",
      paragraphs: [
[
          s("Define roles for strategy, implementation, evaluation, and risk oversight. "),
          x(
            "Marketing owns use cases, RevOps owns data/process reliability, analytics owns measurement, legal owns policy boundaries, and finance owns unit economics discipline.",
            "This structure prevents both ownership gaps and duplicated effort.",
          ),
          s(" Cross-functional clarity accelerates decision quality."),
        ],
[
          s("Create a recurring governance rhythm with lightweight rituals. "),
          x(
            "Monthly stack review, quarterly vendor assessment, and annual architecture refresh are usually sufficient for most teams.",
            "The goal is continuous adaptation without bureaucratic drag.",
          ),
          s(" Governance should be predictable and pragmatic."),
        ],

        [

          s("Make the operating model executable by defining decision rights, meeting cadence, and performance accountability for each AI martech function. "),

          x(

            "Establish who approves new tools, who validates data readiness, who monitors outcomes, and who owns risk escalation when controls fail.",

            "Consistent governance rituals reduce tool sprawl and help teams reallocate budget toward modules with proven business impact.",

          ),

          s("Clear ownership architecture is what makes AI stack strategy sustainable beyond initial rollout."),

        ],

      ],
      examples: [
        {
          title: "CMO-led AI stack council",
          body: "A monthly council aligned tool adoption decisions with revenue priorities and reduced ad hoc procurement requests.",
        },
        {
          title: "RevOps ownership charter",
          body: "Explicit RevOps ownership of taxonomy and routing reduced conflicting model behavior across channels.",
        },
        {
          title: "Finance-linked ROI gates",
          body: "Finance-approved scaling gates improved capital allocation toward AI modules with sustained business impact.",
        },
      ],
    }),
    buildSection({
      number: "8.6",
      title: "Decision Lens: Build Your 12-Month AI Martech Roadmap",
      subtitle: "Prioritize for compounding value",
      take: "The best roadmap focuses on a few high-signal workflows, measurable outcomes, and staged capability expansion.",
      why: "Trying to modernize everything at once usually produces fragmented progress and weak ROI.",
      paragraphs: [
[
          s("Start with top workflow opportunities by impact and readiness. "),
          x(
            "Rank candidate initiatives by expected business value, data readiness, and governance complexity.",
            "Select a small portfolio that can be measured clearly and iterated quickly.",
          ),
          s(" Focus drives faster learning and better economics."),
        ],
[
          s("Plan roadmap phases: foundation, proof, scale, and optimize. "),
          x(
            "Each phase should have exit criteria and budget triggers tied to evidence, not enthusiasm.",
            "This structure creates momentum while protecting teams from uncontrolled tool expansion.",
          ),
          s(" Roadmaps should create optionality, not lock-in."),
        ],

        [

          s("Operationalize the roadmap with stage gates that tie funding, staffing, and expansion rights to evidence from each phase. "),

          x(

            "For each initiative, define baseline metrics, target lift, risk controls, and kill criteria before execution begins.",

            "Quarterly reviews should retire underperforming modules and reallocate resources to workflows showing compounding value and manageable governance load.",

          ),

          s("A roadmap drives results when it governs portfolio choices, not just project timelines."),

        ],

      ],
      examples: [
        {
          title: "12-month phased roadmap in B2B SaaS",
          body: "A team launched two foundation initiatives, proved lift in one quarter, and scaled only modules that beat predefined ROI thresholds.",
        },
        {
          title: "Retail AI stack rationalization roadmap",
          body: "A retailer consolidated low-value tools, upgraded data foundations, and concentrated spend on three high-impact AI workflows.",
        },
        {
          title: "Agency client roadmap templates",
          body: "A template-based roadmap approach improved client adoption consistency and reduced experimentation fatigue.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is the most reliable first step before adding new AI martech tools?",
      options: [
        "Buy a new point solution quickly before competitors",
        "Map current capabilities and overlaps, then prioritize true workflow gaps",
        "Replace the entire stack at once",
        "Choose tools by analyst rankings only",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Capability mapping prevents duplicate spend and improves prioritization.",
      wrongFeedback:
        "Start with a current-state map so new purchases solve actual gaps instead of creating overlap.",
    },
    {
      kind: "order",
      q: "Order the 12-month roadmap phases.",
      prompt: "Arrange from first to last.",
      items: [
        "Foundation: data and operating model readiness",
        "Proof: scoped pilots with success criteria",
        "Scale: expand only validated workflows",
        "Optimize: rationalize stack and improve unit economics",
      ],
      correctFeedback:
        "Correct. Build foundations first, prove value, then scale selectively, then optimize portfolio efficiency.",
      wrongFeedback:
        "Roadmaps work best when readiness precedes proof, and proof precedes broad scaling.",
    },
    {
      kind: "categorize",
      q: "Categorize each decision.",
      categories: ["Platform/Suite Choice", "Point-Solution Choice", "Operating Model/Governance"],
      items: [
        { text: "Consolidate shared segmentation and orchestration in one core platform", category: 0 },
        { text: "Adopt specialized creative ideation tool for high-velocity testing", category: 1 },
        { text: "Create monthly AI stack review with cross-functional owners", category: 2 },
        { text: "Use native platform workflows for standardized campaign automation", category: 0 },
        { text: "Pilot niche recommendation engine for one high-value use case", category: 1 },
        { text: "Define ROI gates and sunset criteria for all AI modules", category: 2 },
      ],
      correctFeedback:
        "Correct. Choose suites for shared foundations, point tools for specialized lift, and governance to keep the stack coherent.",
      wrongFeedback:
        "Separate architecture choices from specialized tool choices and from governance process design.",
    },
  ],
});
