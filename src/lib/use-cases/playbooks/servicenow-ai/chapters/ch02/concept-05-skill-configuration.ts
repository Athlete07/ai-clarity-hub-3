import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_05_SKILL_CONFIGURATION: GuideConcept = {
  number: 5,
  title: "Skill Configuration and Tuning",
  subtitle:
    "Prompt templates, guardrails, domain tuning, multilingual setup, A/B tests, and versioning",
  sections: [
    buildGuideSection({
      id: "skill-anatomy",
      number: "5.1",
      title: "Skill anatomy",
      subtitle:
        "Prompt templates, context sources, output formats, and tone parameters",
      takeaway:
        "Every skill decomposes into: input contract, prompt template, context sources, output schema, tone, and guardrails — tune each independently.",
      why: "Custom skill work starts here. Interview question: 'how would you build a custom summary skill?'",
      paragraphs: [
        [
          s("Input contract: which fields, max note count, related lists. Prompt template: task instruction and format. Output schema: bullets, JSON, max length."),
        ],
        [
          s("Tone parameters: formal, concise, empathetic — map to brand or HR policy."),
        ],
        [
          s("Version all components in dev — diff before promote."),
        ],
      ],
      workflowSteps: [
        "Decompose one native skill into anatomy diagram.",
        "Identify which parts are admin-tunable vs platform-fixed.",
        "Document your org's standard output format per skill type.",
      ],
      example: {
        title: "Custom outage comms skill",
        body: "Built custom skill: input = incident + affected CI list; output = three-paragraph exec template; tone = calm/factual; guardrail = no root cause claim without verified field. Anatomy doc became template for 4 more skills.",
      },
    }),
    buildGuideSection({
      id: "system-prompt-customisation",
      number: "5.2",
      title: "System prompt customisation",
      subtitle:
        "How to tailor Now Assist responses to your organisation's language and standards",
      takeaway:
        "Organisation-level instructions inject vocabulary, acronym glossaries, mandatory disclaimers, and formatting rules into skills — consistency without per-agent prompting.",
      why: "Global enterprises need 'how we write' embedded in AI — not reinvented per user.",
      paragraphs: [
        [
          s("Examples: always use 'colleague' not 'user' in HR; include ticket number in summaries; spell product names correctly from glossary."),
        ],
        [
          s("Avoid conflict: org instructions should not fight skill-specific tasks — layer general → specific."),
        ],
        [
          s("Review quarterly with comms and legal — stale org prompts cause drift."),
        ],
      ],
      workflowSteps: [
        "Draft ORG_AI_STYLE_GUIDE.md with legal/comms.",
        "Apply via admin system prompt settings (per release).",
        "Sample 20 outputs monthly for compliance.",
      ],
      example: {
        title: "Banking — mandatory disclaimer injection",
        body: "Org prompt required regulatory disclaimer on customer-facing drafts. 100% compliance in spot check vs 60% when agents typed manually under pressure.",
      },
    }),
    buildGuideSection({
      id: "guardrail-configuration",
      number: "5.3",
      title: "Guardrail configuration",
      subtitle:
        "What topics, formats, and outputs to prohibit and how to enforce them",
      takeaway:
        "Guardrails block: competitor mentions, medical/legal advice, credential disclosure, speculative blame, off-topic generation — enforced at skill and org level.",
      why: "One viral bad output kills a program. Guardrails are insurance.",
      paragraphs: [
        [
          s("Techniques: prohibited topic lists, required citations, max length, refusal instructions when context empty, block on restricted field patterns."),
        ],
        [
          s("Test guardrails with red-team prompts monthly."),
        ],
        [
          s("Log guardrail triggers — high rate means retrieval or policy gap, not just attacks."),
        ],
      ],
      workflowSteps: [
        "List 20 prohibited outputs for your industry.",
        "Configure guardrails; run red-team script.",
        "Fix retrieval before weakening guardrails.",
      ],
      example: {
        title: "Healthcare — no diagnosis guardrail",
        body: "HR health benefits skill refused diagnosis prompts and redirected to nurse line. Red-team found 0 successful diagnosis generations in 500 attempts. Legal signed off rollout.",
      },
    }),
    buildGuideSection({
      id: "domain-specific-tuning",
      number: "5.4",
      title: "Domain-specific tuning",
      subtitle:
        "Adapting skills for specialised industries (legal, healthcare, finance)",
      takeaway:
        "Regulated domains need narrower retrieval, specialist glossaries, stricter human approval, and often geographic persona splits.",
      why: "Generic ITSM tuning fails in legal and finance — architects show domain fluency.",
      paragraphs: [
        [
          s("Legal: no contract interpretation; cite only approved playbooks; privilege-aware field exclusion."),
        ],
        [
          s("Finance: numbers must match record fields — instruct model never to calculate independently."),
        ],
        [
          s("Healthcare: HIPAA-aligned context minimisation."),
        ],
      ],
      workflowSteps: [
        "Domain SME workshop — allowed vs forbidden assist tasks.",
        "Tune retrieval to approved libraries only.",
        "Dual approval on external comms in regulated domains.",
      ],
      example: {
        title: "Insurance claims — field-anchored numbers",
        body: "Skill instructed: all amounts must copy claim field values verbatim. Hallucinated payout amounts dropped to zero in UAT. Adjusters still approve every letter.",
      },
    }),
    buildGuideSection({
      id: "multi-language",
      number: "5.5",
      title: "Multi-language configuration",
      subtitle:
        "Enabling Now Assist in non-English environments",
      takeaway:
        "Multilingual assist requires: language detection, KB in target languages, persona per locale, and native-speaker UAT — not just translate-English-output.",
      why: "Global rollouts fail when HQ English skills ship to LATAM unchanged.",
      paragraphs: [
        [
          s("Configure language preference on user or portal profile where supported."),
        ],
        [
          s("Maintain parallel KB — translated articles, not machine-translated stale content."),
        ],
        [
          s("UAT with native speakers for tone and policy accuracy."),
        ],
      ],
      workflowSteps: [
        "Pick pilot language with complete KB subset.",
        "Enable locale persona.",
        "Compare CSAT vs English baseline.",
      ],
      example: {
        title: "LATAM HR portal — Spanish assist",
        body: "Spanish KB subset 120 articles. Assist configured for es-MX tone. Deflection 28% vs 31% English — parity achieved after content investment, not model change.",
      },
    }),
    buildGuideSection({
      id: "ab-testing-skills",
      number: "5.6",
      title: "A/B testing skills",
      subtitle:
        "How to run controlled experiments on skill variations before full deployment",
      takeaway:
        "Test prompt variants on cohorts — team A vs team B, or percentage rollout — measuring accept rate, edit distance, and task time before global default.",
      why: "Data-driven tuning separates architects from guessers.",
      paragraphs: [
        [
          s("Design: hypothesis, metric, duration, sample size, ethical approval for employee-facing tests."),
        ],
        [
          s("Compare variant B only if statistically better on primary metric without harming quality guardrails."),
        ],
        [
          s("Document winner in skill version notes."),
        ],
      ],
      workflowSteps: [
        "Define metric: edit distance primary.",
        "Split 50 agents — control vs variant prompt.",
        "Run 2 weeks; analyse; promote winner.",
      ],
      example: {
        title: "Resolution note — bullet vs paragraph format",
        body: "Variant A bullets, B short paragraphs. Bullets won: 12% lower edit distance, faster scan by agents. Promoted globally in skill v2.1.",
      },
    }),
    buildGuideSection({
      id: "feedback-analysis",
      number: "5.7",
      title: "Feedback analysis",
      subtitle:
        "Using feedback data to identify skill underperformance and iterate",
      takeaway:
        "Aggregate thumbs-down by category, skill, region, and topic — pattern analysis drives prompt and retrieval fixes, not random tweaks.",
      why: "Continuous improvement needs an analytics ritual.",
      paragraphs: [
        [
          s("Weekly dashboard: feedback rate, top negative themes, correlation with missing KB, agent tenure."),
        ],
        [
          s("Qualitative: sample 10 negative cases — root cause tag: grounding, tone, length, wrong task."),
        ],
        [
          s("Close loop with release notes to agents — visibility builds trust."),
        ],
      ],
      workflowSteps: [
        "Build feedback export (report or admin view per release).",
        "Tag root causes in spreadsheet.",
        "Monthly skill owner review meeting.",
      ],
      example: {
        title: "Negative spike after upgrade",
        body: "Thumbs-down doubled post upgrade. Analysis: retrieval index lag — not model change. Reindex fixed 80% of negatives in 48 hours. Feedback analysis avoided wrongful rollback.",
      },
    }),
    buildGuideSection({
      id: "skill-versioning",
      number: "5.8",
      title: "Skill versioning",
      subtitle:
        "Managing skill changes across development, test, and production instances",
      takeaway:
        "Skills move dev → test → prod with version tags, rollback plan, and change window — same discipline as code promotion.",
      why: "Untracked skill edits in prod are how governance breaks.",
      paragraphs: [
        [
          s("Store: version id, change summary, approver, rollback steps, ATF/UAT evidence."),
        ],
        [
          s("Use update sets or platform deployment tools per your release practice."),
        ],
        [
          s("Never hot-edit prod skill during business hours without rollback ready."),
        ],
      ],
      workflowSteps: [
        "Define skill promotion pipeline in CAB.",
        "Test in subprod with production-like data mask.",
        "Tag prod skill config with version metadata field.",
      ],
      artifact: {
        id: "skill-version-log",
        title: "Skill version log template",
        description: "Track skill promotions across instances.",
        content: `| Version | Skill | Instance | Change | Approver | UAT ref | Rollback |
|---------|-------|----------|--------|----------|---------|----------|
| 1.0.0 | incident_summary | prod | initial | J.Smith | UAT-441 | disable skill |
| 1.1.0 | incident_summary | prod | added CI context | A.Lee | UAT-502 | revert to 1.0.0 |`,
      },
    }),
  ],
};
