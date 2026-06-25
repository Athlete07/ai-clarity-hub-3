import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_01_AI_SEARCH_ARCHITECTURE: GuideConcept = {
  number: 1,
  title: "AI Search Architecture",
  subtitle: "Indexes, NLU, embeddings, ranking, federation, analytics, and PDI configuration",
  sections: [
    buildGuideSection({
      id: "search-index",
      number: "1.1",
      title: "The search index",
      subtitle:
        "How ServiceNow indexes content and what makes AI Search different from legacy search",
      takeaway:
        "AI Search is an index-driven retrieval system tuned for enterprise workflows: it indexes approved sources, respects ACLs, and supports semantic retrieval — not just keyword matching.",
      why: "Search quality is the foundation beneath self-service, Virtual Agent, and Now Assist grounding. If retrieval is wrong, GenAI will be wrong faster.",
      paragraphs: [
        [
          s("Legacy search largely optimised for "),
          x("keyword matching", "Lexical relevance — good when users type the same words as the article."),
          s(
            ". AI Search adds semantic signals and richer ranking controls so “VPN drops” can still find “Remote access troubleshooting” when the vocabulary differs.",
          ),
        ],
        [
          s("Indexes are "),
          x(
            "source-scoped",
            "You choose which knowledge bases, catalogs, records, and external systems are searchable — and for which users.",
          ),
          s(
            ". The most common failure is indexing too much (noise + leakage risk) or too little (empty results).",
          ),
        ],
        [
          s(
            "Architecture rule: treat AI Search like a production service. Define sources, ranking, analytics, and a lifecycle for improvements — not a one-time configuration.",
          ),
        ],
      ],
      workflowSteps: [
        "List your top 5 search surfaces (portal, Agent Workspace, VA, mobile).",
        "For each, define: sources allowed, users allowed, and what “good result” means.",
        "Start with knowledge + catalog; expand to record search only after ACL review.",
      ],
      example: {
        title: "Why GenAI “hallucinated” the VPN policy",
        body: "Now Assist drafted from an outdated article because AI Search indexed old KB spaces. Fixing the index scope and boosting current policy improved both search and GenAI output — the model didn’t change; retrieval did.",
      },
    }),
    buildGuideSection({
      id: "nlu-in-search",
      number: "1.2",
      title: "Natural Language Understanding in search",
      subtitle: "How NLU interprets intent rather than matching keywords",
      takeaway:
        "NLU helps map messy user phrasing to intent (“reset MFA”) and constraints (“mobile device”), improving recall and routing — especially in portal search and Virtual Agent entry.",
      why: "Users don’t know your internal taxonomy. NLU is the bridge between human language and enterprise content structure.",
      paragraphs: [
        [
          s("NLU is useful when you have "),
          x("synonyms and ambiguity", "“VPN”, “remote access”, “Citrix”, “pulse” — same intent, different words."),
          s(
            ". It complements embeddings by normalising common patterns and extracting entities (app, device type, location).",
          ),
        ],
        [
          s("Avoid overfitting: NLU intent models require "),
          x("maintenance", "New tools and product names appear quarterly; update synonyms and training phrases."),
          s(". If you don’t maintain it, users will drift and recall will collapse."),
        ],
        [
          s(
            "Design choice: use NLU for high-volume intents (password, VPN, email, access). Do not attempt to model every long-tail question — let semantic retrieval handle the tail.",
          ),
        ],
      ],
      workflowSteps: [
        "Export top 50 portal queries. Cluster into 10 intents.",
        "Add synonyms and abbreviations for each intent.",
        "Validate improvement on a fixed test set weekly for 4 weeks.",
      ],
      example: {
        title: "“MFA broken” routed to correct KB",
        body: "NLU recognised MFA reset intent and added query expansion. AI Search returned the correct article even when users typed “auth app not working” — containment improved without adding new KB.",
      },
    }),
    buildGuideSection({
      id: "semantic-similarity",
      number: "1.3",
      title: "Semantic similarity",
      subtitle: "Vector embeddings and how they find conceptually related content",
      takeaway:
        "Embeddings represent meaning, enabling AI Search to retrieve relevant content even when keywords differ — critical for deflection and GenAI grounding.",
      why: "Semantic retrieval is what makes search resilient to phrasing variability and multilingual behaviour.",
      paragraphs: [
        [
          s("Embeddings map text into a "),
          x("vector space", "Numbers representing meaning; similar meanings are close together."),
          s(
            ". When a user asks a question, AI Search retrieves content whose embeddings are closest — not just content sharing the same words.",
          ),
        ],
        [
          s("Semantic similarity fails when content is "),
          x("too generic", "Articles like “General troubleshooting” match everything and crowd out specific fixes."),
          s(
            " or when your KB is inconsistent. Fix with better article structure and boosting, not by disabling semantics.",
          ),
        ],
        [
          s(
            "Architect advice: keep a “golden set” of 50–100 queries with expected results. Use it as regression tests when you change sources or ranking.",
          ),
        ],
      ],
      workflowSteps: [
        "Create a golden query set with expected KB hits.",
        "Identify generic articles that appear in too many queries; refine or demote.",
        "Reindex after major KB changes; compare golden set results.",
      ],
      example: {
        title: "Concept match beat keyword match",
        body: "Users searched “laptop encryption key” and got zero results with legacy search. AI Search semantic retrieval returned “BitLocker recovery key” correctly — vocabulary mismatch solved.",
      },
    }),
    buildGuideSection({
      id: "ranking-pipeline",
      number: "1.4",
      title: "The ranking pipeline",
      subtitle: "Relevance scoring, recency, personalisation, and how to influence each",
      takeaway:
        "Ranking blends multiple signals: textual relevance, semantic similarity, freshness, popularity, user context, and explicit boosts — you can tune the ranking without changing content.",
      why: "Most search “bugs” are ranking problems: the right doc exists, but it’s buried.",
      paragraphs: [
        [
          s("Think in layers: retrieve candidates (semantic + lexical), then "),
          x("re-rank", "Apply business signals like freshness, click-through, role relevance, and boosts."),
          s(". Tuning happens mostly in re-ranking."),
        ],
        [
          s("Three levers you control: "),
          x("boosting", "Promote certain KBs or article types."),
          s(", "),
          x("recency weighting", "Prefer updated docs for fast-changing systems."),
          s(", and "),
          x("profile scoping", "Different ranking per portal / persona."),
          s(".",
          ),
        ],
        [
          s("Do not use recency to hide low-quality docs. Fix quality. Recency is a tie-breaker, not a cleanup strategy."),
        ],
      ],
      workflowSteps: [
        "Pick one portal. Define top 10 queries and desired top 3 results.",
        "Tune boosts and recency. Re-test on golden set.",
        "Roll out to 10% of users; monitor zero-results and click-through.",
      ],
      example: {
        title: "Recency prevented outdated VPN article",
        body: "Two VPN policies existed; 2019 doc ranked higher due to backlinks. Adding recency weighting and boosting the 2025 policy corrected ranking — deflection improved immediately.",
      },
    }),
    buildGuideSection({
      id: "federated-search",
      number: "1.5",
      title: "Federated search",
      subtitle:
        "Connecting external content sources and the configuration that governs source priority",
      takeaway:
        "Federation lets AI Search surface results from external systems (docs, wikis, ticketing, repos) while keeping ServiceNow as the orchestration layer — with explicit source priority and access controls.",
      why: "Most enterprises don’t store truth in one place. Federation reduces context-switching while preserving governance.",
      paragraphs: [
        [
          s("Federation requires two decisions: "),
          x("what to connect", "Which systems contain authoritative support knowledge?"),
          s(" and "),
          x("who is allowed", "Access must mirror the source system and ServiceNow roles."),
          s(".",
          ),
        ],
        [
          s("Priority matters: when internal KB and external wiki conflict, decide which wins by portal/persona — otherwise you train users to distrust search."),
        ],
        [
          s("Architecture rule: federation is not a replacement for knowledge governance. It is an amplifier — it amplifies both good and bad content."),
        ],
      ],
      workflowSteps: [
        "Inventory knowledge sources (ServiceNow KB, SharePoint, Confluence, GitHub).",
        "Define per-portal priority order and allowlist.",
        "Run a conflict test: 5 topics with duplicate docs; pick winners explicitly.",
      ],
      example: {
        title: "Confluence vs KB conflict resolved",
        body: "Engineers preferred Confluence runbooks; service desk needed KB. Federation enabled both with portal-specific priority so each audience saw the right source first — adoption rose without forcing migration.",
      },
    }),
    buildGuideSection({
      id: "search-analytics",
      number: "1.6",
      title: "Search analytics",
      subtitle:
        "Query logs, zero-result queries, and the data that drives continuous improvement",
      takeaway:
        "Analytics turn search into an operating system: top queries, zero results, click-through, abandonment, and deflection attribution drive weekly improvements.",
      why: "Without analytics, teams argue with anecdotes. With analytics, you ship a knowledge flywheel.",
      paragraphs: [
        [
          s("High-yield metrics: "),
          x("zero-result rate", "How often users get nothing — direct indicator of coverage gaps."),
          s(", click-through on top result, and abandonment (search then ticket create)."),
        ],
        [
          s("Use analytics to drive "),
          x("knowledge backlog", "New articles, retagging, synonym updates, and boost changes."),
          s(". Assign owners and SLAs like any product backlog."),
        ],
        [
          s("Measure improvements against a stable baseline — avoid changing ranking and KB simultaneously without tracking which change helped."),
        ],
      ],
      workflowSteps: [
        "Weekly: export top 20 zero-result queries and top 20 high-volume queries.",
        "Create action items: new KB, synonyms, boosts, or federation updates.",
        "Monthly: review deflection impact and adjust portal funnels.",
      ],
      example: {
        title: "Zero-result dashboard drove 14 new articles",
        body: "Top zero queries were ‘email signature’, ‘VPN on iPhone’, ‘new laptop request’. Writing 14 focused articles and boosting them cut zero-result rate by half in 6 weeks.",
      },
    }),
    buildGuideSection({
      id: "pdi-walkthrough",
      number: "1.7",
      title: "AI Search configuration walkthrough",
      subtitle: "Enabling, configuring, and testing on PDI",
      takeaway:
        "PDI success pattern: enable AI Search → define sources → configure search profile → tune ranking → validate with golden queries → monitor analytics.",
      why: "Hands-on PDI steps are required to turn theory into an interview-ready, demoable capability.",
      paragraphs: [
        [s("Step 1: Enable AI Search features on your PDI (availability depends on instance/build).")],
        [s("Step 2: Configure search sources (start with one KB + catalog).")],
        [s("Step 3: Create a portal profile and test queries with different roles.")],
        [s("Step 4: Tune boosting and recency; rerun golden query set.")],
        [s("Step 5: Capture analytics — zero results, clicks — and iterate.")],
      ],
      workflowSteps: [
        "Create 10 test KB articles with deliberate synonyms and structure.",
        "Create golden set: 20 queries with expected top result.",
        "Run tests as three users: employee, agent, admin; verify ACL scoping.",
      ],
      artifact: {
        id: "ai-search-golden-set",
        title: "AI Search golden query set (starter)",
        description: "Paste into spreadsheet and use as regression tests.",
        content:
          `| Query | Persona | Expected top result | Pass? |\n|------|---------|----------------------|-------|\n| reset mfa | employee | MFA reset article | |\n| vpn drops | employee | remote access troubleshooting | |\n| request new laptop | employee | catalog item: laptop request | |\n| outlook sync error | agent | KB: Outlook sync fix | |\n| bitlocker key | employee | KB: recovery key | |`,
      },
    }),
    buildGuideSection({
      id: "migration-ab-testing",
      number: "1.8",
      title: "AI Search vs legacy search",
      subtitle:
        "Migration considerations and the A/B testing approach for rollout",
      takeaway:
        "Migrate by portal and persona. A/B test AI Search vs legacy on the golden set and real traffic. Roll back safely if zero-result or wrong-result rate rises.",
      why: "Search is a front door. Breaking it causes immediate ticket spikes and loss of trust.",
      paragraphs: [
        [
          s("Migration risks: different ranking, different source scope, and user expectation shifts. Manage by "),
          x("A/B testing", "Run controlled cohorts; compare zero-results, click-through, and ticket creation."),
          s(" before full cutover."),
        ],
        [
          s("Define success criteria: improved top-1 click-through, reduced zero results, and stable or improved deflection. If deflection rises but wrong-result complaints spike, stop."),
        ],
        [
          s("Operationally: keep legacy available as fallback during pilot. Make it easy for users to report bad results — that feedback is gold."),
        ],
      ],
      workflowSteps: [
        "Pilot on one portal (employee IT) with 10–20% traffic.",
        "Track: zero results, click-through, ticket funnel, and feedback volume.",
        "Expand to HR/CSM portals after stabilising IT portal ranking.",
      ],
      example: {
        title: "A/B prevented a bad cutover",
        body: "Pilot showed AI Search improved click-through but surfaced a restricted article to a broad role due to mis-scoped source. Fixing the profile before 100% rollout avoided a compliance incident.",
      },
    }),
  ],
};

