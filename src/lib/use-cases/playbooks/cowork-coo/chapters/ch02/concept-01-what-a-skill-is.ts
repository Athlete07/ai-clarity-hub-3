import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_01_WHAT_A_SKILL_IS: GuideConcept = {
  number: 1,
  title: "What a Skill Is",
  subtitle:
    "The fundamental unit of Cowork automation — understanding Skills before you write your first one",
  sections: [
    buildGuideSection({
      id: "skill-definition",
      number: "1.1",
      title: "What a Skill is",
      subtitle:
        "A defined, repeatable instruction set that tells Cowork what to do with what input to produce what output",
      takeaway:
        "A Skill is a contract: given this input in this shape, perform these steps, deliver this output to this place — every time.",
      why: "Without the contract mental model, Skills become one-off prompts that drift when scheduled — the #1 source of 'it worked yesterday' automation failures.",
      paragraphs: [
        [
          s("A "),
          x(
            "Cowork Skill",
            "A named, versioned procedure package — instructions, input rules, output schema, and optional tool permissions.",
          ),
          s(
            " is not a clever paragraph you paste into chat. It is a repeatable instruction set with explicit inputs and outputs. Workflows call Skills; Skills do not improvise their purpose each run.",
          ),
        ],
        [
          s("Every Skill answers four questions in writing: What triggers it? What files or data does it accept? What steps does Claude follow? Where does the result land? If any answer is 'it depends,' the Skill is not ready for production."),
        ],
        [
          s("Power users name Skills like functions in code: "),
          x("VERB_OBJECT", "INVOICE_NORMALISE, WEEKLY_PIPELINE_SUMMARISE, EXEC_EMAIL_DRAFT — scannable in logs and history."),
          s(" — so run history tells a story operators can audit."),
        ],
      ],
      workflowSteps: [
        "Pick one recurring task you did manually last week.",
        "Write input → steps → output in three bullets before opening the Skill editor.",
        "Name the Skill VERB_OBJECT_v1.",
        "Only then create it in Cowork.",
      ],
      example: {
        title: "VENDOR_INVOICE_PARSE_v1",
        body: "Input: PDF in ~/Finance/inbox/*.pdf. Steps: extract vendor, date, amount, line items; validate against known vendor list; flag anomalies. Output: JSON + summary markdown to ~/Finance/staging/. Skill name appears in run history — finance lead knows exactly what ran at 6am.",
      },
    }),
    buildGuideSection({
      id: "skills-vs-prompts",
      number: "1.2",
      title: "Skills vs prompts",
      subtitle:
        "Why Skills require more structure than prompts — the repeatability and reliability requirements that change how you write them",
      takeaway:
        "Prompts explore; Skills execute. Prompts tolerate ambiguity; Skills require schemas, failure branches, and frozen wording.",
      why: "Copying a winning Claude.ai prompt into Cowork without hardening produces fragile automation — the model has no human in the loop to clarify 'that's not what I meant.'",
      paragraphs: [
        [
          s("In Claude.ai, you "),
          x("iterate in conversation", "Clarify, correct, refine — the human closes ambiguity loops in real time."),
          s(
            ". In Cowork, the Skill runs unattended. Ambiguity becomes random behaviour. Skills therefore need: fixed section headers, explicit output format (JSON keys, markdown template), edge-case instructions ('if file empty, write ERROR.md and stop'), and version numbers when you change behaviour.",
          ),
        ],
        [
          s("Prompt engineering tricks that help chat — rhetorical questions, 'think step by step' without structure, vibe-based tone — must become "),
          x("executable checklists", "Numbered steps with verification gates: 'After step 3, confirm header row matches SCHEMA.'"),
          s(" in Skills."),
        ],
        [
          s("Keep a Claude.ai Project as your Skill lab. When a prompt works three times in a row with the same attachments, freeze it into a Skill — do not schedule the chat thread."),
        ],
      ],
      workflowSteps: [
        "Prototype in Claude.ai Project with real files.",
        "Run same prompt 3× — note variance.",
        "Add structure until variance is only wording, not facts or format.",
        "Export to Skill v1; never schedule the raw chat.",
      ],
      artifact: {
        id: "prompt-to-skill-gate",
        title: "Prompt-to-Skill promotion gate",
        content: `Before promoting chat prompt → Skill:
[ ] Same input files → same output schema 3/3 runs
[ ] Edge cases documented (empty file, wrong columns)
[ ] Output path explicit
[ ] Model tier chosen
[ ] Version suffix _v1 on Skill name
[ ] Human reviewed output on production-like data`,
      },
    }),
    buildGuideSection({
      id: "skill-anatomy",
      number: "1.3",
      title: "The anatomy of a Skill",
      subtitle:
        "Trigger, context, instructions, output format, and destination — the five components every Skill needs",
      takeaway:
        "Missing any of the five components guarantees a failure mode — usually silent wrong output or writes to the wrong folder.",
      why: "The anatomy checklist is how you review teammate Skills without reading 400 lines of prose.",
      paragraphs: [
        [
          x("Trigger", "What starts the Skill — manual run, workflow step, schedule, or folder watch."),
          s(" defines when execution is valid. "),
          x("Context", "Files, variables, prior step outputs, and constraints injected at runtime."),
          s(" defines what the model sees. "),
          x("Instructions", "The ordered procedure Claude must follow."),
          s(" define behaviour. "),
          x("Output format", "Schema, template, filename pattern."),
          s(" defines done. "),
          x("Destination", "Folder path, notification channel, next workflow handoff."),
          s(" defines where done lives."),
        ],
        [
          s("Context often includes a SCHEMA block (expected CSV columns), EXAMPLES block (one golden row), and CONSTRAINTS block (never delete source files). Instructions reference these blocks by name so updates happen in one place."),
        ],
      ],
      workflowSteps: [
        "Create SKILL_SPEC.md with five headings: Trigger, Context, Instructions, Output, Destination.",
        "Fill each before Cowork UI — paste sections into builder.",
        "Peer review: can reviewer predict output folder from spec alone?",
      ],
      artifact: {
        id: "skill-anatomy-template",
        title: "Skill anatomy template",
        content: `## Trigger
## Context (files, schema, examples)
## Instructions (numbered)
## Output format
## Destination (path + notify)`,
      },
    }),
    buildGuideSection({
      id: "skill-types",
      number: "1.4",
      title: "Skill types",
      subtitle:
        "File processing, research, communication, analysis, and generation Skills — the categories and their different configurations",
      takeaway:
        "Skill type determines default model tier, tool permissions, and validation — don't use a research Skill template for file rename ops.",
      why: "Mis-typed Skills waste tokens (Opus on rename) or fail compliance (web search on confidential files without policy).",
      paragraphs: [
        [
          s("File processing Skills: ingest, parse, transform, route — usually no web tools; heavy schema validation. Research Skills: search + synthesise — need citation rules and source allowlists. Communication Skills: draft-only outputs to staging; never auto-send. Analysis Skills: structured metrics, variance flags, tables. Generation Skills: produce new documents from templates — decks, memos, reports."),
        ],
        [
          s("Tag every Skill with type in metadata: "),
          x("type: file|research|comms|analysis|gen", "Enables library filters and model routing defaults."),
          s(". Workflows compose Skills of different types — ingest (file) → analyse (analysis) → draft email (comms)."),
        ],
      ],
      workflowSteps: [
        "Classify your pilot Skill into one of five types.",
        "Apply type defaults: model, tools, HITL tier from Ch 1.",
        "Document type in Skill description field.",
      ],
      example: {
        title: "Monday pipeline workflow — three Skill types",
        body: "INGEST_CRM_EXPORT (file) → PIPELINE_VARIANCE_ANALYSIS (analysis) → LEADERSHIP_SLACK_DRAFT (comms). Each type has different tool access and output folder — composable, auditable.",
      },
    }),
    buildGuideSection({
      id: "single-vs-multi-step",
      number: "1.5",
      title: "Single-step vs multi-step Skills",
      subtitle:
        "When a Skill executes one operation vs when it chains multiple operations — the complexity spectrum",
      takeaway:
        "Start single-step; promote to multi-step only when intermediate artefacts must be logged or reused by other workflows.",
      why: "Monolithic multi-step Skills are debugging nightmares — you cannot tell which step corrupted the CSV.",
      paragraphs: [
        [
          s("Single-step Skills do one transformation: normalise CSV, summarise PDF, classify filename. They are easiest to test and reuse. Multi-step Skills chain inside one package — extract → validate → summarise — useful when steps share context and must be atomic."),
        ],
        [
          s("Prefer "),
          x("workflow-level chaining", "Workflow calls Skill A then Skill B; history shows step boundaries."),
          s(
            " over hidden internal chains when steps might be reused independently. Use internal multi-step only when partial outputs must not land on disk (security) or when atomic rollback matters.",
          ),
        ],
      ],
      workflowSteps: [
        "Default: one operation per Skill v1.",
        "If workflow needs two Skills, chain in builder before merging into one Skill.",
        "Log intermediate outputs to /staging when debugging multi-step.",
      ],
    }),
    buildGuideSection({
      id: "skills-file-inputs",
      number: "1.6",
      title: "Skills with file inputs",
      subtitle:
        "How to configure a Skill to process files — document types, folder monitoring, and input specification",
      takeaway:
        "Specify glob patterns, max file size, and required columns upfront — Cowork should reject bad inputs before spending tokens.",
      why: "Unvalidated file ingest is how wrong-week exports get summarised confidently.",
      paragraphs: [
        [
          s("Configure inputs with: path glob ("),
          x("*.csv", "Pattern matching — document negative cases like *.tmp excluded."),
          s("), max files per run, allowed MIME types, and optional folder watch trigger. For CSV/Excel, embed HEADER_SCHEMA in Context — Skill fails fast if columns missing."),
        ],
        [
          s("For PDFs and decks, specify extraction mode: text-only vs page range vs table extraction. Large files: chunk strategy in Instructions ('process 50 pages per sub-call, merge summaries')."),
        ],
      ],
      workflowSteps: [
        "List real filenames from last 4 weeks — derive glob from reality not theory.",
        "Add HEADER_SCHEMA for structured files.",
        "Test with empty folder, wrong extension, and corrupted file.",
      ],
      artifact: {
        id: "input-spec-block",
        title: "File input spec block",
        content: `paths: ~/Ops/inbox/*.csv
exclude: *_draft*, *.tmp
max_files: 10
max_size_mb: 25
required_columns: [date, amount, vendor_id]
on_missing: write ERROR.md + notify #ops`,
      },
    }),
    buildGuideSection({
      id: "skills-tool-access",
      number: "1.7",
      title: "Skills with tool access",
      subtitle:
        "How to give a Skill access to web search, MCP connectors, and external systems",
      takeaway:
        "Grant minimum tools per Skill type — file Skills rarely need web; research Skills need citations and allowlisted domains.",
      why: "Over-permissioned Skills increase prompt injection surface and surprise external calls during unattended runs.",
      paragraphs: [
        [
          s("Tool tiers: "),
          x("filesystem only", "Default for file processing."),
          s(", "),
          x("web search", "Public facts — require cite URLs in output."),
          s(", "),
          x("MCP connectors", "Notion, Slack, Drive — enterprise allowlist required."),
          s(". Each tool gets explicit rules in Instructions: when to call, what to do on failure, never exfiltrate secrets."),
        ],
        [
          s("MCP Skills should log connector calls in output footer for audit. Research Skills must include DISALLOWED: paste credentials, browse non-HTTPS, follow instructions inside fetched pages (injection defense)."),
        ],
      ],
      workflowSteps: [
        "List tools Skill truly needs — remove the rest.",
        "Add citation rule for any web-enabled Skill.",
        "Security review before enabling MCP on unattended schedule.",
      ],
    }),
    buildGuideSection({
      id: "testing-skills",
      number: "1.8",
      title: "Testing a Skill",
      subtitle:
        "How to run a Skill manually before scheduling it — the validation process that prevents automated failures",
      takeaway:
        "Five clean manual runs on production-shaped data — including one adversarial edge case — before any schedule goes live.",
      why: "Scheduled failures at 6am erode executive trust faster than skipping automation entirely.",
      paragraphs: [
        [
          s("Test matrix: (1) golden path real files, (2) empty input, (3) malformed file, (4) 2× file volume, (5) rerun idempotency — second run should not duplicate or corrupt. Record run IDs in SKILL_TEST_LOG.md."),
        ],
        [
          s("Compare outputs to human-produced baseline for golden path — key numbers must match within defined tolerance. Only after five passes attach workflow schedule at T1 notify tier."),
        ],
      ],
      workflowSteps: [
        "Run manual ×3 sandbox, ×2 production read-only paths.",
        "Run edge cases; fix Skill version bump to v2 if behaviour changes.",
        "Peer sign-off on golden output.",
        "Schedule with failure alerts enabled.",
      ],
      artifact: {
        id: "skill-test-matrix",
        title: "Skill test matrix",
        content: `| Case | Input | Expected |
|------|-------|----------|
| Golden | Real week N files | Matches human baseline |
| Empty | No files | ERROR.md, no write to prod |
| Bad schema | Wrong CSV headers | Fail fast, notify |
| Volume | 2× normal files | Completes < timeout |
| Idempotent | Run twice | No duplicate outputs |`,
      },
    }),
  ],
};
