import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_01_WORKFLOW_DESIGN_PRINCIPLES: GuideConcept = {
  number: 1,
  title: "Workflow Design Principles",
  subtitle:
    "The design thinking behind effective Claude workflows — what makes a workflow robust, repeatable, and scalable",
  sections: [
    buildGuideSection({
      id: "what-production-workflow-is",
      number: "1.1",
      title: "What a production workflow is",
      subtitle:
        "The difference between a one-off prompt and a repeatable system that delivers consistent output",
      takeaway:
        "A production workflow is a documented, repeatable pipeline — trigger → prepared inputs → configured Claude step(s) → validated output → downstream action — not a clever prompt you remember.",
      why: "One-off prompts don't scale across people, weeks, or handoffs; workflows do.",
      paragraphs: [
        [
          s("A one-off prompt: 'write me a QBR summary.' A production workflow: weekly trigger pulls metrics CSV, Project instructions define tone and sections, output lands in Notion template, human approves before Slack post."),
        ],
        [
          x(
            "Production bar",
            "Same inputs produce equivalent quality; failures are detectable; someone else can run it Monday morning.",
          ),
          s(" — that's the difference from demo magic."),
        ],
      ],
      workflowSteps: [
        "Name the workflow and owner.",
        "Define trigger (schedule, event, manual).",
        "Document inputs, Claude config, output schema.",
        "Run twice; compare outputs for drift.",
      ],
    }),
    buildGuideSection({
      id: "workflow-anatomy",
      number: "1.2",
      title: "The workflow anatomy",
      subtitle:
        "Trigger, input preparation, Claude configuration, output handling, and downstream action — the five stages every workflow shares",
      takeaway:
        "Every robust workflow has five stages: trigger, input prep, Claude config (model, tools, instructions), output handling (parse, validate, store), downstream action (send, ticket, deploy).",
      why: "Teams that skip stages get fragile pipelines — usually at input prep or output validation.",
      paragraphs: [
        [
          s("Trigger: cron, webhook, form submit, 'new PR opened'. Input prep: gather files, strip PII, chunk to context budget, attach schema. Claude config: Project, system prompt, MCP tools, temperature. Output: JSON schema, markdown sections, artifact. Downstream: email draft queue, Jira comment, git commit."),
        ],
      ],
      workflowSteps: [
        "Draw five boxes for your workflow.",
        "Fill each box with concrete tool + owner.",
        "Identify the weakest stage (usually validation).",
      ],
      artifact: {
        id: "workflow-five-stage-template",
        title: "Five-stage workflow canvas",
        content: `TRIGGER: [event / schedule]
INPUT PREP: [sources, cleaning, chunking]
CLAUDE CONFIG: [model, Project, tools, prompt template]
OUTPUT HANDLING: [format, validation, storage]
DOWNSTREAM: [who/what acts on result]`,
      },
    }),
    buildGuideSection({
      id: "workflow-failure-modes",
      number: "1.3",
      title: "Workflow failure modes",
      subtitle:
        "The points where workflows break — input variation, context limits, output format drift, and downstream dependency failures",
      takeaway:
        "Workflows break at: messy inputs, context overflow, format drift (JSON → prose), hallucinated facts, and downstream APIs rejecting malformed payloads.",
      why: "Knowing failure points lets you add guards before production, not after an incident.",
      paragraphs: [
        [
          s("Input variation: empty fields, new file types, renamed columns. Context limits: dumping 200-page PDF. Format drift: asked for JSON, got markdown fences. Downstream: Slack message too long, invalid GitHub review format."),
        ],
        [
          s("Mitigate: input validators, summarization pre-step, structured output + parser retry, dry-run downstream in staging."),
        ],
      ],
      workflowSteps: [
        "List last three workflow failures.",
        "Map each to a stage (1.2).",
        "Add one guard per failure class.",
      ],
    }),
    buildGuideSection({
      id: "idempotency",
      number: "1.4",
      title: "Idempotency in Claude workflows",
      subtitle:
        "Designing workflows that produce the same result when run twice — the reliability principle",
      takeaway:
        "Idempotent workflows: deterministic inputs, versioned prompts, temperature 0 for extraction, dedupe keys on downstream writes — re-run safe without duplicate emails or double tickets.",
      why: "Retries are inevitable (API timeouts, human 'run again'); non-idempotent workflows corrupt state.",
      paragraphs: [
        [
          s("Use content hashes or record IDs in downstream actions. Store 'last processed' cursor. For generative steps, separate extraction (idempotent) from creative (versioned, human-approved)."),
        ],
      ],
      workflowSteps: [
        "Ask: what happens if this runs twice today?",
        "Add idempotency key to writes.",
        "Pin prompt version in workflow doc.",
      ],
    }),
    buildGuideSection({
      id: "human-in-the-loop",
      number: "1.5",
      title: "Human-in-the-loop design",
      subtitle:
        "Where to put the human review step — the decision that determines how autonomous a workflow can safely be",
      takeaway:
        "Place human review where error cost exceeds automation savings — external sends, financial figures, legal language, production deploys. Automate everything before and after that gate.",
      why: "Wrong HITL placement either blocks velocity (review everything) or creates liability (review nothing).",
      paragraphs: [
        [
          s("High autonomy: internal research summaries, draft outlines, code suggestions on branch. Medium: client emails, competitive reports. Low: contract redlines, pricing changes, incident remediation without approval."),
        ],
        [
          x("Review queue pattern", "Claude produces → structured draft in queue → human approve/edit → downstream send."),
          s(" beats paste-and-pray in chat."),
        ],
      ],
      workflowSteps: [
        "Classify workflow output: internal / external / regulated.",
        "Set review gate per class.",
        "Measure time saved vs review burden.",
      ],
    }),
    buildGuideSection({
      id: "error-handling-fallback",
      number: "1.6",
      title: "Error handling and fallback design",
      subtitle:
        "What the workflow does when Claude produces unexpected output — the resilience layer",
      takeaway:
        "Define fallbacks: schema validation failure → retry with repair prompt; empty extraction → escalate to human; tool timeout → partial result + alert; refusal → log and route to manual queue.",
      why: "Silent failures are worse than loud ones — workflows need explicit unhappy paths.",
      paragraphs: [
        [
          s("Pattern: validate output against JSON schema or checklist → on fail, one structured retry ('fix JSON only') → on second fail, notify owner with raw output attached. Never auto-send unvalidated external content."),
        ],
      ],
      workflowSteps: [
        "Define success criteria machine-checkable.",
        "Write retry prompt for format repair.",
        "Wire alert channel for hard failures.",
      ],
      example: {
        title: "JSON drift — two-strike fallback",
        body: "Workflow expected { risks: [] }. Claude returned prose. Parser failed → retry with 'output JSON only'. Second failure → PagerDuty-lite Slack ping to workflow owner with session link.",
      },
    }),
    buildGuideSection({
      id: "workflow-documentation",
      number: "1.7",
      title: "Workflow documentation",
      subtitle:
        "How to document a Claude workflow so someone else can run it, audit it, or improve it",
      takeaway:
        "Workflow doc includes: purpose, owner, trigger, inputs with examples, Claude config snapshot, output schema, downstream steps, failure runbook, last tested date, prompt version.",
      why: "Undocumented workflows die when the builder leaves — or get 'improved' into breakage.",
      paragraphs: [
        [
          s("Store in repo WORKFLOWS/ or Notion database. Link Project ID, MCP servers used, model tier (Ch 2). Include redacted input/output samples for auditors."),
        ],
      ],
      workflowSteps: [
        "Copy workflow doc template (Ch 9 artifact).",
        "Fill after first successful production run.",
        "Review quarterly or when prompt changes.",
      ],
      artifact: {
        id: "workflow-doc-template",
        title: "Workflow documentation template",
        content: `# Workflow: [name]
Owner: | Last tested: | Prompt v:

## Purpose
## Trigger
## Inputs (with example)
## Claude configuration
Project / model / tools / temperature

## Steps (numbered)
## Output schema
## Downstream actions
## Failure runbook
## Idempotency notes
## Change log`,
      },
    }),
    buildGuideSection({
      id: "workflow-portfolio-mindset",
      number: "1.8",
      title: "The workflow portfolio mindset",
      subtitle:
        "Building a library of tested workflows rather than recreating good prompts from memory every time",
      takeaway:
        "Treat workflows like a product portfolio — catalog by function, maturity (experimental → production), owner, and ROI; retire duplicates; promote winners with shared templates.",
      why: "Memory-based prompting doesn't compound; a portfolio does.",
      paragraphs: [
        [
          s("Start registry: Content, Analysis, Technical tabs. Tag: MCP-required, HITL-level, model tier. New hire runs 'weekly competitive brief' from doc, not Slack archaeology."),
        ],
        [
          s("Connect to Ch 6 Projects — one Project per production workflow family with pinned instructions and knowledge files."),
        ],
      ],
      workflowSteps: [
        "Inventory existing Claude habits → name as workflows.",
        "Mark maturity: draft / pilot / production.",
        "Kill two redundant workflows this quarter.",
      ],
    }),
  ],
};
