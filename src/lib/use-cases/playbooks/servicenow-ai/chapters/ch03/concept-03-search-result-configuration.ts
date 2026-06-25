import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_03_SEARCH_RESULT_CONFIGURATION: GuideConcept = {
  number: 3,
  title: "Search Result Configuration",
  subtitle:
    "Profiles, boosting, blocks, synonyms, personalisation, evaluation, APIs, and performance tuning",
  sections: [
    buildGuideSection({
      id: "search-profiles",
      number: "3.1",
      title: "Search profiles",
      subtitle: "Configuring what content each user type sees in search results",
      takeaway:
        "Search profiles define which sources, ranking rules, and UI blocks appear per persona (employee portal, agent workspace, HR portal) — preventing “one search to rule them all” mistakes.",
      why: "Different users require different results and different compliance constraints. Profiles are how you encode that reality.",
      paragraphs: [
        [
          s("Profiles segment by "),
          x("surface and persona", "Portal vs workspace; employee vs agent vs HR specialist."),
          s(". Each profile can point at different sources and ranking preferences."),
        ],
        [
          s("Security implication: HR profile can include HR KB; employee IT profile should not. Profiles plus ACLs form the retrieval boundary."),
        ],
        [
          s("Practical rule: create the minimum set of profiles that reflect real differences. Too many profiles become unmaintainable."),
        ],
      ],
      workflowSteps: [
        "Define 3 profiles: employee IT, agent ITSM, HR employee.",
        "Assign sources and ranking priorities per profile.",
        "Test the same query across profiles to validate audience separation.",
      ],
      example: {
        title: "HR content leakage avoided by profile split",
        body: "Without profile separation, “leave policy” query surfaced internal HR manager guidance to all employees. Splitting HR manager vs employee profiles fixed it while retaining findability for the right audience.",
      },
    }),
    buildGuideSection({
      id: "boosting-weighting",
      number: "3.2",
      title: "Boosting and weighting",
      subtitle:
        "How to promote specific content types, sources, or attributes",
      takeaway:
        "Boosting is how you encode business intent into ranking: promote authoritative KB spaces, demote generic docs, and prioritise catalog items for request intents.",
      why: "If search returns the “wrong right answer,” users lose trust. Boosting makes the right answer win consistently.",
      paragraphs: [
        [
          s("Boost dimensions include source type (KB vs record), KB base, article category, recency, and popularity signals."),
        ],
        [
          s("Use boosting to enforce governance: official policy docs should outrank personal wiki pages on compliance topics."),
        ],
        [
          s("Anti-pattern: boosting everything. If all sources are boosted, nothing is. Keep boosts scarce and justified."),
        ],
      ],
      workflowSteps: [
        "Pick 10 high-impact queries; define desired top result.",
        "Apply minimal boosts to achieve target ordering.",
        "Re-run on golden set to avoid collateral ranking damage.",
      ],
      example: {
        title: "Catalog intent boosted over KB",
        body: "Users searching “new laptop” wanted the request item, not troubleshooting articles. Boosting catalog results for request intents improved funnel conversion and reduced abandoned searches.",
      },
    }),
    buildGuideSection({
      id: "search-blocks",
      number: "3.3",
      title: "Search blocks",
      subtitle:
        "Configurable result cards and tailoring them for different portals",
      takeaway:
        "Search blocks are UI result components (KB card, catalog card, how-to snippet, recommended actions) — tuned per portal to drive deflection and correct next steps.",
      why: "Even perfect retrieval fails if the UI doesn’t guide the user to act (read, request, reset, escalate).",
      paragraphs: [
        [
          s("Portal blocks should prioritise “do the thing”: reset password, request access, start chat — not just list documents."),
        ],
        [
          s("Agent workspace blocks should prioritise speed: similar incidents, KB snippets, and recommended fix steps."),
        ],
        [
          s("Design principle: show fewer, better blocks. Too many blocks create choice paralysis and reduce deflection."),
        ],
      ],
      workflowSteps: [
        "Choose a portal and define 3 blocks: KB, catalog, escalation.",
        "A/B test block order for top 10 intents.",
        "Measure funnel: search → click → success (no ticket).",
      ],
      example: {
        title: "Reset flow block increased self-service",
        body: "Adding a “Reset MFA” action block above KB results increased successful self-service even when the KB article existed — because users preferred action to reading.",
      },
    }),
    buildGuideSection({
      id: "query-expansion",
      number: "3.4",
      title: "Query expansion",
      subtitle:
        "Synonyms, abbreviations, and vocabulary configuration that improves recall",
      takeaway:
        "Query expansion increases recall by mapping user vocabulary to enterprise vocabulary: acronyms, product nicknames, and regional terms.",
      why: "In large orgs, vocabulary drift is constant. Query expansion prevents search from decaying as language changes.",
      paragraphs: [
        [
          s("Maintain a "),
          x("synonym dictionary", "MFA=2FA=auth app; remote access=VPN=Pulse; laptop=notebook."),
          s(" per domain and locale."),
        ],
        [
          s("Expansion should be governed: careless synonyms can increase false positives and surface wrong policies."),
        ],
        [
          s("Use analytics to propose new synonyms: repeated “no results” terms become expansion candidates."),
        ],
      ],
      workflowSteps: [
        "Extract top 100 queries; identify synonyms and acronyms.",
        "Add expansions for top 20.",
        "Validate on golden set; monitor for false positives.",
      ],
      example: {
        title: "Acronym expansion fixed finance searches",
        body: "Users typed “SOX access” and got generic security docs. Adding expansions for “SOX” to approved access control KB improved top-1 results immediately.",
      },
    }),
    buildGuideSection({
      id: "personalised-search",
      number: "3.5",
      title: "Personalised search",
      subtitle:
        "Using user context, history, and role to individualise results",
      takeaway:
        "Personalisation uses role, location, device type, and past interactions to rank results that are more likely correct for this user — but must remain transparent and policy-safe.",
      why: "Personalisation is how you avoid showing Mac VPN articles to Windows-only users — reducing frustration and tickets.",
      paragraphs: [
        [
          s("Signals: role (employee vs agent), device fleet (Windows/Mac), region, assigned apps, and history. Use the minimum signals needed."),
        ],
        [
          s("Transparency matters: users should see why a result was recommended (e.g., “Windows instructions”). Hidden personalisation can look like inconsistency."),
        ],
        [
          s("Governance: never personalise into restricted knowledge. ACL rules still dominate."),
        ],
      ],
      workflowSteps: [
        "Pick one safe signal (device type) and implement personalisation for it.",
        "Measure reduction in “wrong OS” clicks.",
        "Expand to role and location after validation.",
      ],
      example: {
        title: "OS-aware search cut repeat contacts",
        body: "Mobile users kept following desktop steps. Personalising by device type surfaced mobile instructions first, reducing repeat contacts and increasing successful self-service.",
      },
    }),
    buildGuideSection({
      id: "testing-search-quality",
      number: "3.6",
      title: "Testing search quality",
      subtitle:
        "Evaluation methodology for measuring search improvement",
      takeaway:
        "Search quality needs an evaluation stack: golden query set, top-k recall, click-through, deflection attribution, and qualitative audits — not “it feels better.”",
      why: "Search tuning is iterative. Without tests, you regress silently and lose trust.",
      paragraphs: [
        [
          s("Offline eval: golden query set and expected results. Online eval: A/B testing on traffic and funnel metrics."),
        ],
        [
          s("Use top-k metrics: top-1 accuracy is ideal; top-3 recall is acceptable when UI guides users. Zero-results must trend down."),
        ],
        [
          s("Add qualitative audits: sample 20 queries weekly and judge result usefulness — analytics can miss “technically clicked but wrong.”"),
        ],
      ],
      workflowSteps: [
        "Maintain a 100-query golden set across IT, HR, and CSM.",
        "Run monthly evaluation after any ranking/source change.",
        "Publish a simple scorecard to stakeholders.",
      ],
      example: {
        title: "Scorecard prevented silent regression",
        body: "After adding a new source, top-1 accuracy dropped for 12 common queries. Golden set test caught it before broad rollout; boosts were adjusted and accuracy recovered.",
      },
    }),
    buildGuideSection({
      id: "search-for-developers",
      number: "3.7",
      title: "Search for developers",
      subtitle:
        "API surface for building custom search experiences",
      takeaway:
        "Developers can build custom search UX on portals/workspaces using platform APIs — but must preserve the same profile scoping and ACL behaviour as standard search.",
      why: "Custom portals often need tailored search. Doing it wrong creates leakage and inconsistent results.",
      paragraphs: [
        [
          s("Use platform search APIs where available instead of replicating ranking in custom code. Keep profiles and sources centralised."),
        ],
        [
          s("Security rule: never bypass ACLs. Custom experiences must run as the user, not as admin."),
        ],
        [
          s("UX rule: keep result types consistent with standard search so users recognise what they’re seeing."),
        ],
      ],
      workflowSteps: [
        "Define the custom portal requirements that standard search can’t meet.",
        "Use official APIs with profile scoping; verify ACL behaviour.",
        "Add analytics instrumentation to custom search events.",
      ],
      example: {
        title: "Custom mobile search with safe scoping",
        body: "Field technicians used a custom mobile portal. Team built a simplified search UI using platform search APIs and technician profile. Results remained ACL-safe and analytics fed the knowledge flywheel.",
      },
    }),
    buildGuideSection({
      id: "performance-tuning",
      number: "3.8",
      title: "Performance tuning",
      subtitle:
        "Configuration knobs that affect search latency and throughput",
      takeaway:
        "Latency depends on source scope, retrieval depth (top-k), federation calls, and re-ranking complexity. Tune by reducing scope and caching common queries before scaling infrastructure.",
      why: "If search is slow, users abandon and create tickets. Performance is deflection.",
      paragraphs: [
        [
          s("Start by reducing scope: fewer sources, smaller indexes, and tighter profiles. Avoid federating to slow external systems for high-volume portals."),
        ],
        [
          s("Tune retrieval: limit top-k and chunk sizes; demote generic content that explodes candidate sets."),
        ],
        [
          s("Treat performance as an SLO: define p95 latency targets per portal, and monitor continuously."),
        ],
      ],
      workflowSteps: [
        "Measure p50/p95 latency for portal search.",
        "Disable one external federated source and compare latency.",
        "Reduce top-k retrieval and retest quality vs speed.",
      ],
      example: {
        title: "Federation caused p95 latency spike",
        body: "Confluence federation added 800ms at p95. Portal searches abandoned increased. Fix: only federate for agent workspace, not employee portal; latency returned and deflection recovered.",
      },
    }),
  ],
};

