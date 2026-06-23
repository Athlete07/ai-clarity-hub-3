import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_02_TAR_FRAMEWORK: GuideConcept = {
  number: 2,
  title: "The TAR Framework",
  subtitle:
    "The structured approach to writing Skills that work reliably — Task, Action, Result",
  sections: [
    buildGuideSection({
      id: "what-is-tar",
      number: "2.1",
      title: "What TAR is",
      subtitle:
        "Task, Action, Result — the three components that every effective Skill clearly defines",
      takeaway:
        "TAR is the minimum viable spec for any Skill — if you cannot fill all three boxes, you are not ready to schedule.",
      why: "Unstructured Skills read well in demos and fail in production because nobody agreed what 'done' meant.",
      paragraphs: [
        [
          x("Task", "One sentence: what job this Skill performs and for whom — bounded, not aspirational."),
          s(" states purpose. "),
          x("Action", "Ordered steps Claude executes — including validation gates and failure branches."),
          s(" states method. "),
          x("Result", "Exact output shape, quality bar, and destination — how reviewers accept or reject."),
          s(" states definition of done."),
        ],
        [
          s("TAR maps directly to Cowork Skill anatomy: Task ≈ trigger + context summary; Action ≈ instructions; Result ≈ output format + destination. Writing TAR first prevents you from drowning in instructions before clarifying purpose."),
        ],
      ],
      workflowSteps: [
        "Open blank doc — three headings only: Task, Action, Result.",
        "Task must fit one sentence; if it needs 'and also,' split into two Skills.",
        "Only expand Action after Task and Result are signed off.",
      ],
    }),
    buildGuideSection({
      id: "tar-task",
      number: "2.2",
      title: "Task",
      subtitle:
        "Defining what the Skill is for — the specific, bounded description of the work that eliminates ambiguity",
      takeaway:
        "A good Task names the audience, the input artefact, and the business outcome — not the model behaviour.",
      why: "Vague Tasks ('help with finance') cause scope creep inside Action — the model invents work each run.",
      paragraphs: [
        [
          s("Task formula: "),
          x(
            "[Role] needs [output] from [input] by [constraint]",
            "Example: Finance lead needs normalised invoice JSON from PDF inbox drops by 7am Monday.",
          ),
          s(". Avoid verbs like 'understand' or 'improve' — use 'extract,' 'summarise,' 'classify,' 'draft.'"),
        ],
        [
          s("Include explicit non-goals in Task footnote: 'Does not approve payments' or 'Does not email customers.' Non-goals are as important as goals for unattended automation."),
        ],
      ],
      workflowSteps: [
        "Write Task sentence — read aloud; if >20 seconds, shorten.",
        "Add 2–3 non-goals.",
        "Stakeholder initials on Task before writing Action.",
      ],
      example: {
        title: "Weak vs strong Task",
        body: "Weak: 'Process invoices.' Strong: 'Accounts payable clerk needs structured invoice JSON (vendor, date, line items, total) from PDFs dropped in ~/Finance/inbox — does not post to ERP or send vendor email.'",
      },
    }),
    buildGuideSection({
      id: "tar-action",
      number: "2.3",
      title: "Action",
      subtitle:
        "Defining how the Skill does it — the step-by-step instruction sequence that Claude follows",
      takeaway:
        "Actions are numbered procedures with verification gates — not suggestions, not personality, not 'use your judgment' without criteria.",
      why: "Under-specified Actions are why two runs on the same file produce different column orders or summary lengths.",
      paragraphs: [
        [
          s("Each Action step: verb + object + verification. Example: '1. Read each PDF in inbox; if unreadable, append to errors.jsonl and continue.' '2. Extract fields per SCHEMA; if vendor unknown, set vendor_id=null and flag review.' '3. Write one JSON per invoice to staging; never overwrite existing files — use timestamp suffix.'"),
        ],
        [
          s("Include "),
          x("failure branches", "Explicit if/then for empty input, schema mismatch, API timeout."),
          s(" and "),
          x("stop conditions", "When to halt entire Skill vs skip one file."),
          s(". Reference Context blocks (SCHEMA, EXAMPLES) by name — do not duplicate schema inside every step."),
        ],
      ],
      workflowSteps: [
        "Number steps 1–N; max ~12 steps per Skill — split if longer.",
        "Add VERIFY line after destructive or write steps.",
        "Add failure branch for top 3 risks from last manual run.",
      ],
      artifact: {
        id: "action-step-pattern",
        title: "Action step pattern",
        content: `N. [VERB] [object] using [SCHEMA/TOOL].
   VERIFY: [observable check]
   ON FAIL: [skip|stop|notify]`,
      },
    }),
    buildGuideSection({
      id: "tar-result",
      number: "2.4",
      title: "Result",
      subtitle:
        "Defining what good output looks like — the format, the quality standard, and the destination",
      takeaway:
        "Result specifies machine-readable format AND human review criteria — both must pass.",
      why: "Pretty markdown with wrong numbers still fails the business Task — Result must encode verifiable checks.",
      paragraphs: [
        [
          s("Result block contains: (1) "),
          x("format", "JSON schema, markdown template, filename pattern."),
          s(", (2) "),
          x("quality bar", "Numeric tolerances, required sections, citation rules."),
          s(", (3) "),
          x("destination", "Path, notification, next workflow trigger."),
          s(". Example: 'summary.md with sections Executive, Risks, Actions; all currency to 2dp; write to ~/Reports/staging/YYYY-MM-DD/; notify #ops if any Risk is HIGH.'"),
        ],
        [
          s("Define acceptance test in Result: 'Reviewer can reconcile totals to source CSV within $0.01.' Include "),
          x("citation rules", "Sources section — file paths, message IDs, URLs — Ch 7 §1.7."),
          s(" for any external-facing Skill. That sentence becomes your golden-path test from §1.8."),
        ],
      ],
      workflowSteps: [
        "Paste output template into Result section.",
        "List 3 acceptance checks measurable without opinion.",
        "Confirm destination is staging until HITL tier allows prod write.",
      ],
    }),
    buildGuideSection({
      id: "tar-in-practice",
      number: "2.5",
      title: "TAR in practice",
      subtitle:
        "Walking through a complete Skill written with TAR — the before and after of structured vs unstructured Skill design",
      takeaway:
        "Structured TAR Skills shorten debug time from hours to minutes because run failures map to Task, Action, or Result gaps.",
      why: "Seeing a full example is how operators learn to spot which TAR leg broke when history shows 'completed' but output is wrong.",
      paragraphs: [
        [
          s("Before TAR: a 400-word prompt 'summarise the weekly sales export helpfully for leadership.' After TAR: Task names CSV path and audience; Action lists parse steps, metric definitions, anomaly rules; Result defines one-page memo template and staging path. Same model — 10× fewer Monday surprises."),
        ],
      ],
      workflowSteps: [
        "Take one unstructured Skill from your sandbox.",
        "Rewrite Task in one sentence.",
        "Extract Action steps from old prompt — add VERIFY lines.",
        "Define Result template — run golden test.",
      ],
      example: {
        title: "WEEKLY_SALES_MEMO_v1 — full TAR",
        body: "Task: Sales lead needs one-page Monday memo from ~/Sales/exports/weekly_*.csv — no CRM writes. Action: validate schema → compute WoW by region → flag >15% drops → fill memo template. Result: memo.md in ~/Sales/staging/{date}/; notify #sales if any HIGH flag; totals must match CSV sum.",
      },
      artifact: {
        id: "tar-worked-example",
        title: "TAR worked example — WEEKLY_SALES_MEMO_v1",
        content: `## Task
Sales lead needs one-page Monday memo from weekly CSV export.

## Action
1. Load weekly_*.csv; VERIFY headers match SCHEMA.
2. Compute WoW revenue by region.
3. Flag regions with >15% WoW drop.
4. Fill MEMO_TEMPLATE sections.
5. Write memo.md to staging/{date}/.

## Result
Format: memo.md (Executive, Regions, Flags, Actions)
Quality: totals reconcile to CSV; flags cite region + %
Destination: ~/Sales/staging/{date}/ + #sales on HIGH`,
      },
    }),
    buildGuideSection({
      id: "tar-mistakes",
      number: "2.6",
      title: "Common TAR mistakes",
      subtitle:
        "Vague Tasks, under-specified Actions, and undefined Results — the failures that produce inconsistent Skill output",
      takeaway:
        "When output drifts, diagnose TAR in order: Task scope → Action gaps → Result acceptance — never 'try a better model' first.",
      why: "Model upgrades mask spec debt temporarily — then failures return more expensively.",
      paragraphs: [
        [
          s("Vague Task: 'help with reporting' → split Skills or bound input. Under-specified Action: missing VERIFY after writes → duplicate files. Undefined Result: 'professional tone' without template → length and structure drift. Kitchen-sink Task: one Skill that extracts, analyses, emails, and archives → split into four Skills and chain workflow."),
        ],
        [
          s("Hidden Action: relying on model to 'figure out' column mapping → embed COLUMN_MAP in Context. Result without destination → outputs land in unpredictable cwd paths."),
        ],
      ],
      workflowSteps: [
        "On failure, label: Task, Action, or Result gap.",
        "Fix spec; bump Skill version.",
        "Re-run test matrix — do not only re-run happy path.",
      ],
    }),
    buildGuideSection({
      id: "tar-complex-skills",
      number: "2.7",
      title: "TAR for complex Skills",
      subtitle:
        "How the framework scales to multi-step, multi-tool Skills without losing structure",
      takeaway:
        "Complexity lives in Action subsections and workflow chains — Task stays one sentence; Result stays one acceptance contract per Skill.",
      why: "Teams abandon TAR on 'hard' Skills and recreate monolithic prompts — the hardest automations need structure most.",
      paragraphs: [
        [
          s("Pattern: one Task per Skill; complex pipelines use workflow DAG — Skill A Result becomes Skill B Context. Within a large Skill, group Action into phases (INGEST, TRANSFORM, EMIT) each with phase-level VERIFY."),
        ],
        [
          s("Multi-tool Skills: Action phase 1 filesystem only; phase 2 web with allowlist; phase 3 MCP write to staging. Each phase has own failure branch. Result lists outputs per phase for partial debugging."),
        ],
      ],
      workflowSteps: [
        "Draw workflow DAG on paper — one TAR box per node.",
        "Resist merging nodes until each has five clean test runs.",
        "Document handoff filenames between Skills in Result/Context.",
      ],
    }),
    buildGuideSection({
      id: "tar-template",
      number: "2.8",
      title: "The TAR Skill template",
      subtitle:
        "A reusable template for writing any Skill using the TAR structure — the starting point that saves time",
      takeaway:
        "Copy this template for every new Skill — fill Task and Result before Action; version the file with the Skill.",
      why: "A shared template is how teams keep Skills reviewable and onboard new operators in one sitting.",
      paragraphs: [
        [
          s("Store templates in your ops wiki and in Cowork Skill library folder. Pair with SKILL_SPEC from §1.3 — TAR is the narrative spec; anatomy is the technical checklist."),
        ],
      ],
      workflowSteps: [
        "Duplicate template → rename SKILL_NAME_v1.md.",
        "Fill Task + Result + non-goals.",
        "Draft Action → peer review → paste into Cowork.",
        "Attach template path in Skill metadata.",
      ],
      artifact: {
        id: "tar-skill-template",
        title: "TAR Skill template (copy-paste)",
        content: `# SKILL_NAME_v1

## Metadata
- type: file | research | comms | analysis | gen
- owner:
- model tier:
- tools:

## Task
[One sentence — role, input, output, constraint]
Non-goals:
-

## Action
### Phase 1 — INGEST
1.
   VERIFY:
   ON FAIL:

### Phase 2 — TRANSFORM
1.
   VERIFY:
   ON FAIL:

### Phase 3 — EMIT
1.
   VERIFY:
   ON FAIL:

## Context
SCHEMA:
EXAMPLES:
CONSTRAINTS:

## Result
Format:
Quality checks:
Destination:
Notify:
Acceptance test:

## Test log
| run_id | case | pass |
|--------|------|------|`,
      },
    }),
  ],
};
