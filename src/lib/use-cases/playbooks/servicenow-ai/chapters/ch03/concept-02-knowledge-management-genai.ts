import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_02_KNOWLEDGE_MANAGEMENT_GENAI: GuideConcept = {
  number: 2,
  title: "Knowledge Management with GenAI",
  subtitle:
    "How GenAI creates, evaluates, organises, translates, and continuously improves knowledge for self-service",
  sections: [
    buildGuideSection({
      id: "ai-assisted-article-creation",
      number: "2.1",
      title: "AI-assisted article creation",
      subtitle:
        "How Now Assist drafts knowledge articles from incident resolutions and case notes",
      takeaway:
        "GenAI can draft first-pass knowledge articles from resolved tickets — but humans must validate accuracy, scope, and policy before publishing.",
      why: "Knowledge authoring cost is the #1 bottleneck in self-service programs. GenAI reduces the cost of drafts; governance preserves trust.",
      paragraphs: [
        [
          s("Source material matters: the best drafts come from "),
          x("clean resolution notes", "Clear cause, fix, verification steps — not vague one-liners."),
          s(" and well-structured work notes. Garbage tickets produce garbage knowledge."),
        ],
        [
          s("Draft pipeline: resolved ticket → draft article → SME review → publish → monitor analytics. Do not publish auto-drafts straight to production portals."),
        ],
        [
          s("Optimise for reusability: a knowledge article should answer a repeatable problem, not describe a one-off incident timeline."),
        ],
      ],
      workflowSteps: [
        "Pick one high-volume category (password, VPN, email).",
        "Generate 5 draft articles from top resolved tickets.",
        "SME validates with a checklist: correctness, safety, scope, and links.",
      ],
      example: {
        title: "VPN outage ticket → evergreen troubleshooting article",
        body: "Draft originally described a specific outage window. SME edited into general troubleshooting steps with decision tree and escalation. Deflection rose because the article became evergreen.",
      },
    }),
    buildGuideSection({
      id: "knowledge-gap-detection",
      number: "2.2",
      title: "Knowledge gap detection",
      subtitle:
        "How AI identifies missing knowledge based on failed search queries",
      takeaway:
        "Search analytics (zero results, low click-through, ticket creation after search) reveal knowledge gaps; GenAI helps convert those gaps into article drafts and taxonomy updates.",
      why: "The highest ROI knowledge work is writing what users actually search for — not what SMEs think they search for.",
      paragraphs: [
        [
          s("Gap signals: "),
          x("zero-result queries", "No retrievable content exists or scope is wrong."),
          s(", high abandonment, and repeated escalations after search."),
        ],
        [
          s("GenAI helps by proposing article outlines and titles for the top gaps — but the important part is the backlog and ownership model."),
        ],
        [
          s("Treat knowledge gaps like product bugs with SLAs. If 'MFA reset' has zero results, that's an outage of self-service."),
        ],
      ],
      workflowSteps: [
        "Weekly: export top 20 zero-result queries.",
        "Group them into 5–10 gap themes.",
        "Create drafts for the top 3 themes; publish only after SME review.",
      ],
      example: {
        title: "“Email signature” gap fixed in 48 hours",
        body: "Analytics showed 1,200 searches/month with zero results. GenAI drafted an article; SME verified steps; published in 2 days. Ticket volume for that category dropped within a week.",
      },
    }),
    buildGuideSection({
      id: "article-quality-scoring",
      number: "2.3",
      title: "Article quality scoring",
      subtitle:
        "How the platform evaluates knowledge article completeness and accuracy",
      takeaway:
        "Quality scoring blends structural completeness (title, steps, prerequisites, links), readability, and usage signals (helpful votes, deflection success) — and it can be used to prioritise remediation.",
      why: "Publishing more articles doesn’t help if users can’t follow them. Quality scoring keeps the knowledge base trustworthy.",
      paragraphs: [
        [
          s("Structural signals: clear title, prerequisites, ordered steps, and expected outcomes. Usage signals: helpfulness, time on page, and repeat search after view."),
        ],
        [
          s("Accuracy is hardest: the platform can flag likely issues (too old, contradictory, low success), but human validation is still required for high-risk procedures."),
        ],
        [
          s("Use score thresholds: below X → requires review; above Y → eligible for automation and self-service flows."),
        ],
      ],
      workflowSteps: [
        "Define a knowledge quality rubric and map it to score ranges.",
        "Create a remediation queue for low-score articles.",
        "Review 10 low-score articles monthly; fix or retire.",
      ],
      example: {
        title: "Top-viewed article was low quality",
        body: "“Request software” article had high views but low helpfulness. Score flagged it. Rewrite added screenshots and clarified approval flow. Helpful votes doubled; ticket creation after view dropped.",
      },
    }),
    buildGuideSection({
      id: "automated-lifecycle-management",
      number: "2.4",
      title: "Automated lifecycle management",
      subtitle:
        "AI-driven review scheduling, expiry, and retirement",
      takeaway:
        "Knowledge decays. Automated lifecycle management schedules reviews based on change frequency, policy sensitivity, and usage — retiring stale articles before they poison search and GenAI.",
      why: "Outdated articles are a deflection killer and a compliance risk. Automation prevents knowledge rot at scale.",
      paragraphs: [
        [
          s("High-risk domains (security, HR policy, finance) need shorter review cycles. Low-risk how-to content can be reviewed less often."),
        ],
        [
          s("AI can recommend retire/refresh based on age + low success + contradiction signals. Humans approve retirements for auditability."),
        ],
        [
          s("Link lifecycle to product releases and tool changes — knowledge should update when the workflow changes."),
        ],
      ],
      workflowSteps: [
        "Tag articles by risk tier (IT how-to vs HR policy).",
        "Set review cadence by tier and usage.",
        "Auto-create review tasks; track completion SLA.",
      ],
      example: {
        title: "Stale security article caused policy breach",
        body: "Old article recommended unsafe VPN configuration. Lifecycle scoring flagged it due to age and negative feedback; retiring it prevented further misuse and reduced hallucinations in assist drafts.",
      },
    }),
    buildGuideSection({
      id: "knowledge-extraction-from-tickets",
      number: "2.5",
      title: "Knowledge extraction from tickets",
      subtitle:
        "Turning resolved incidents into structured knowledge automatically",
      takeaway:
        "Ticket-to-knowledge pipelines extract: symptom, environment, cause, fix, verification, and escalation criteria — producing structured drafts that are easier to validate and search.",
      why: "Unstructured drafts are hard to review. Structure makes knowledge scalable and improves AI Search ranking.",
      paragraphs: [
        [
          s("A structured template prevents the common failure: articles that say “Reboot fixed it” without stating what rebooted, why, and what to do if it fails."),
        ],
        [
          s("Use extraction for repetitive categories only — where the same fix applies. For one-off incidents, extraction creates noise."),
        ],
        [
          s("Pipeline discipline: only extract from tickets with high-quality resolution notes and successful closure (low reopen rate)."),
        ],
      ],
      workflowSteps: [
        "Define extraction template fields (symptom, steps, validation).",
        "Select eligible tickets: high volume + low reopen + clear resolution.",
        "Generate drafts; SME approves or rejects.",
      ],
      example: {
        title: "Printer incidents → structured knowledge set",
        body: "Top 3 printer errors generated 15 structured articles. Search recall improved and agents stopped copy-pasting long notes. Deflection rose for printers without changing Virtual Agent topics.",
      },
    }),
    buildGuideSection({
      id: "kb-organisation",
      number: "2.6",
      title: "Knowledge base organisation",
      subtitle:
        "AI-assisted categorisation and tagging",
      takeaway:
        "Consistent taxonomy (categories, products, CI classes, audience) improves search ranking and retrieval; AI-assisted tagging reduces manual load but must be audited.",
      why: "Search systems love structure. Tagging is the cheapest high-leverage improvement you can make.",
      paragraphs: [
        [
          s("Tagging improves both lexical and semantic retrieval by adding clean signals that embeddings alone can’t infer reliably (audience, risk, region)."),
        ],
        [
          s("AI can suggest tags and categories from content. Human reviewers approve for high-risk domains to prevent misclassification."),
        ],
        [
          s("Define a controlled vocabulary for abbreviations and product names — don’t let tags proliferate into chaos."),
        ],
      ],
      workflowSteps: [
        "Create a canonical tag list (products, services, regions).",
        "Run AI-assisted tagging suggestions on 100 articles.",
        "Audit a sample for accuracy; then scale.",
      ],
      example: {
        title: "Tag standardisation improved recall",
        body: "“MFA” vs “2FA” tags were inconsistent. Normalising to one tag and adding synonyms improved top-3 recall across security articles without rewriting content.",
      },
    }),
    buildGuideSection({
      id: "multilingual-knowledge",
      number: "2.7",
      title: "Multilingual knowledge",
      subtitle:
        "Machine translation and quality considerations for non-English content",
      takeaway:
        "Translation can accelerate global coverage, but quality and cultural fit require native review for policy-sensitive content. Semantic search helps, but only if translations are accurate.",
      why: "Global portals fail when English-only knowledge is pushed into non-English regions without validation.",
      paragraphs: [
        [
          s("Machine translation works best for procedural IT steps; it is risky for HR and legal policy where wording matters."),
        ],
        [
          s("Maintain locale-specific variations: the same “leave policy” differs by country. Translation is not localisation."),
        ],
        [
          s("Use analytics per locale: zero-result and abandonment patterns differ by language. Treat each locale as a product."),
        ],
      ],
      workflowSteps: [
        "Pick one locale and 50 high-volume articles to translate.",
        "Native reviewer signs off on top 20 policy-sensitive pieces.",
        "Compare deflection and feedback before/after per locale.",
      ],
      example: {
        title: "Spanish portal parity required content investment",
        body: "Deflection lagged until 120 core articles were translated and reviewed. Once coverage matched English, AI Search and portal assist reached near parity.",
      },
    }),
    buildGuideSection({
      id: "knowledge-flywheel",
      number: "2.8",
      title: "The knowledge flywheel",
      subtitle:
        "System design that makes knowledge better over time without manual curation drag",
      takeaway:
        "Flywheel: Search analytics → gap backlog → GenAI drafts → SME review → publish → deflection measurement → retire stale content → repeat. This is the engine beneath sustainable self-service.",
      why: "Enterprises that win at AI Search treat knowledge as a product with feedback loops — not a documentation graveyard.",
      paragraphs: [
        [
          s("The flywheel converts operational exhaust (queries, tickets, feedback) into better content and better retrieval. Without it, search quality decays and GenAI becomes untrustworthy."),
        ],
        [
          s("The key is ownership: knowledge manager + portal owner + AI Search admin + SME guild. No owner means no flywheel."),
        ],
        [
          s("Instrument everything: when a user searches, what did they click, did they create a ticket, did they succeed? Those signals drive iteration."),
        ],
      ],
      workflowSteps: [
        "Stand up a weekly Knowledge Flywheel meeting (30 min).",
        "Review: top zero queries, low-quality articles, deflection drop areas.",
        "Ship: 5 improvements per week (articles, synonyms, boosts, retirement).",
      ],
      artifact: {
        id: "knowledge-flywheel-operating-rhythm",
        title: "Knowledge flywheel operating rhythm",
        description: "Weekly agenda you can paste into your ops calendar.",
        content:
          `## Weekly (30 min)\n- Review top 20 zero-result queries\n- Review top 10 abandonment queries (search → ticket)\n- Pick 5 actions: new article / retag / synonym / boost / retire\n\n## Monthly (60 min)\n- Quality score distribution\n- Top deflection categories and failures\n- Locale review (non-English)\n\n## Quarterly\n- Taxonomy refresh\n- High-risk policy review (HR/security/finance)\n- Federation source audit`,
      },
    }),
  ],
};

