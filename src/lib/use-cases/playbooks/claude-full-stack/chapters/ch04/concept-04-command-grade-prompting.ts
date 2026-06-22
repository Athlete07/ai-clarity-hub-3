import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_04_COMMAND_GRADE_PROMPTING: GuideConcept = {
  number: 4,
  title: "Command-Grade Prompting",
  subtitle:
    "The professional system — how power users structure their prompting practice for consistent, scalable output quality",
  sections: [
    buildGuideSection({
      id: "prompt-templates",
      number: "4.1",
      title: "Prompt templates",
      subtitle:
        "The reusable prompt structures that deliver consistent output for recurring task types",
      takeaway:
        "Templates freeze the parts that shouldn't change (format, rubric, constitution) and leave variables for the task — consistency without copy-paste drift.",
      why: "Ad hoc prompts don't scale across teams or weeks. Templates are the unit of reusable prompt IP.",
      paragraphs: [
        [
          s("Template structure: metadata (name, owner, version), variable slots [BRACKETED], fixed instructions, format skeleton, test cases. Store in Project docs, Notion, or git."),
        ],
        [
          s("Good template candidates: weekly reports, PRD sections, code review checklists, customer reply drafts, research briefs — anything you do more than twice monthly."),
        ],
      ],
      workflowSteps: [
        "Identify top 5 recurring Claude tasks.",
        "Extract last best prompt; parameterise names, dates, inputs.",
        "Add 2 test inputs in template footer.",
        "Review monthly — retire templates that fail tests.",
      ],
      artifact: {
        id: "prompt-template-skeleton",
        title: "Prompt template skeleton",
        content: `# Template: [NAME] v[0.1]
Owner: [team]
Use when: [trigger]

## Variables
- [INPUT_DOC]
- [AUDIENCE]
- [DEADLINE]

## Instructions
[fixed instructions]

## Format
[fixed skeleton]

## Constitution
[fixed rules]

---
INPUT:
[INPUT_DOC]`,
      },
    }),
    buildGuideSection({
      id: "risen-framework",
      number: "4.2",
      title: "The RISEN framework",
      subtitle:
        "Role, Instructions, Steps, End goal, Narrowing — the professional prompting structure that works across task types",
      takeaway:
        "RISEN is a checklist for complete prompts: Role (who Claude is), Instructions (task), Steps (procedure), End goal (success definition), Narrowing (constraints and exclusions).",
      why: "Frameworks prevent omitted components better than ad hoc memory — especially under time pressure.",
      paragraphs: [
        [
          s(""),
          x("Role", "Expertise frame — optional if Instructions are detailed."),
          s(": 'You are a technical editor.' "),
          x("Instructions", "Core task in one paragraph."),
          s(": 'Tighten this spec for engineering.' "),
          x("Steps", "Ordered procedure."),
          s(": '1) Flag ambiguity 2) Propose edits 3) Output redline.' "),
          x("End goal", "What success enables."),
          s(": 'Eng can estimate without clarification calls.' "),
          x("Narrowing", "Bounds."),
          s(": Max 400 words; do not change scope; mark assumptions."),
        ],
      ],
      workflowSteps: [
        "Draft prompt; label R-I-S-E-N sections.",
        "Any blank section — fill or delete Role if redundant.",
        "Compare output to End goal — if miss, fix Steps not adjectives.",
      ],
      artifact: {
        id: "risen-block",
        title: "RISEN prompt block",
        content: `ROLE: [optional expertise frame]
INSTRUCTIONS: [single clear task]
STEPS:
1. [step]
2. [step]
3. [step]
END GOAL: [what done enables — measurable if possible]
NARROWING: [length, tone, exclusions, must-not-change]`,
      },
    }),
    buildGuideSection({
      id: "system-prompt-design",
      number: "4.3",
      title: "System prompt design",
      subtitle:
        "Writing the instruction layer that shapes every response in a project — the architectural skill",
      takeaway:
        "System prompts (API) and Project instructions (Claude.ai) are persistent constitution + capability brief — design them once, benefit on every turn.",
      why: "Repeating rules in every user message wastes tokens and drifts. System layer is the right place for stable policy.",
      paragraphs: [
        [
          s("System prompt layers: identity & scope, output defaults, tool usage rules, safety constitution, escalation ('ask if ambiguous'). Keep under ~800–1500 tokens unless cached — see Chapter 2."),
        ],
        [
          s("Test system prompts in isolation with minimal user messages. If behaviour only works with long user prompts, policy belongs in system."),
        ],
      ],
      workflowSteps: [
        "List behaviours you repeat in every chat — move to system.",
        "Version system prompt in git; tag with model ID.",
        "Regression-test 10 canonical user inputs after each change.",
      ],
      example: {
        title: "API product — system prompt as product spec",
        body: "Support bot system prompt: tone, escalation triggers, forbidden promises, citation rules, JSON handoff to ticketing. User message is only customer text. Policy changes ship like code — PR review, staging eval, prod.",
      },
    }),
    buildGuideSection({
      id: "xml-tags",
      number: "4.4",
      title: "XML tags in prompts",
      subtitle:
        "How to use structured tags to separate context, instructions, and examples for complex prompts",
      takeaway:
        "XML-style tags (<context>, <instructions>, <examples>) help Claude parse long prompts — especially with multiple documents and few-shot examples.",
      why: "Anthropic models are trained to attend to structured delimiters. Tags reduce bleed between sections.",
      paragraphs: [
        [
          s("Convention: wrap each block — <context>, <instructions>, <examples>, <input>. Close tags. Nesting is fine for sub-documents."),
        ],
        [
          s("Use tags when prompt exceeds ~500 words or mixes 3+ sources. Skip for short conversational tasks."),
        ],
      ],
      workflowSteps: [
        "Refactor messy prompt into tagged sections.",
        "Run same input tagged vs untagged — compare parse errors and quality.",
        "Standardise tag names across team templates.",
      ],
      artifact: {
        id: "xml-prompt-example",
        title: "Tagged prompt example",
        content: `<instructions>
Summarise the contract for a non-lawyer PM.
Flag termination, liability, and data processing.
</instructions>

<context>
[paste contract excerpt]
</context>

<format>
Markdown table: Clause | Plain English | Risk (H/M/L)
</format>`,
      },
    }),
    buildGuideSection({
      id: "prompt-libraries",
      number: "4.5",
      title: "Prompt libraries",
      subtitle:
        "Building and organising your personal collection of tested prompts — the asset that compounds over time",
      takeaway:
        "A prompt library is indexed templates with version, owner, use case, and test status — not a folder of one-off chats.",
      why: "Individual skill doesn't scale. Libraries turn personal hacks into organisational capability.",
      paragraphs: [
        [
          s("Organise by: function (PM, eng, sales), task type, model tier, maturity (draft / tested / deprecated). Search by keyword and outcome, not filename."),
        ],
        [
          s("Each entry: prompt text, variables, example output, known failures, last tested date."),
        ],
      ],
      workflowSteps: [
        "Start with 10 templates from your last month of Claude work.",
        "Add metadata row per template in Notion or repo README.",
        "Monthly: promote one draft to tested; deprecate one failure.",
      ],
    }),
    buildGuideSection({
      id: "prompt-version-control",
      number: "4.6",
      title: "Prompt version control",
      subtitle:
        "Tracking what changed, why, and what effect it had — the discipline that turns prompting into engineering",
      takeaway:
        "Prompts are code-adjacent assets — version them, diff them, tie changes to eval results.",
      why: "Silent prompt edits cause mysterious quality regressions. Version control makes prompting auditable.",
      paragraphs: [
        [
          s("Store prompts in git (prompts/ folder) or Notion with version headers. Changelog line: what changed, hypothesis, eval result (pass/fail on N cases)."),
        ],
        [
          s("Semantic versioning for prompts: patch = wording; minor = new constraint; major = behaviour change requiring re-eval."),
        ],
      ],
      workflowSteps: [
        "Never edit production prompt in place without version bump.",
        "Run eval suite before merge.",
        "Keep rollback copy one command away.",
      ],
    }),
    buildGuideSection({
      id: "prompt-audit",
      number: "4.7",
      title: "The prompt audit",
      subtitle:
        "Testing your existing prompts systematically against a quality rubric — the practice that surfaces hidden failures",
      takeaway:
        "A prompt audit scores templates against rubric + fixed test set — finding vagueness, missing format, and untested edge cases before users hit them.",
      why: "Prompts decay as products, models, and tasks change. Audits are preventive maintenance.",
      paragraphs: [
        [
          s("Rubric dimensions: specificity, format clarity, verifiability, safety, token efficiency, examples present. Score 1–5 per template."),
        ],
        [
          s("Test set: 5 inputs per template — happy path, edge, adversarial, empty input, oversized input. Record pass/fail and failure mode."),
        ],
      ],
      workflowSteps: [
        "Quarterly audit of top 20 templates.",
        "Fix anything scoring below 3 on any dimension.",
        "Re-run test set; document in changelog.",
      ],
      artifact: {
        id: "prompt-audit-rubric",
        title: "Prompt audit rubric (abbreviated)",
        content: `1. Specificity — audience, length, success defined? (1-5)
2. Format — parseable output specified? (1-5)
3. Evidence — facts require sources? (1-5)
4. Safety — prohibited actions listed? (1-5)
5. Efficiency — no redundant context? (1-5)
6. Tested — 5 cases pass in last 90 days? (Y/N)

<3 on any dimension → rewrite before next use`,
      },
    }),
    buildGuideSection({
      id: "sharing-prompts-teams",
      number: "4.8",
      title: "Sharing prompts with teams",
      subtitle:
        "How to distribute prompt templates across a team so quality doesn't depend on individual skill",
      takeaway:
        "Team prompt distribution needs: central library, ownership, onboarding path, and permission to fork — not Slack pins that rot.",
      why: "Hero prompters become bottlenecks. Shared systems raise the floor without capping the ceiling.",
      paragraphs: [
        [
          s("Rollout: (1) seed library with 5 audited templates, (2) train on RISEN + traps in workshop, (3) assign template owners, (4) collect forks via PR with eval evidence, (5) celebrate tested additions."),
        ],
        [
          s("Claude Team Projects: host TEAM_PROMPTS.md + per-function Projects. Avoid mandating one prompt for all — mandate structure and testing instead."),
        ],
      ],
      workflowSteps: [
        "Publish library URL in onboarding.",
        "Require new templates to include test cases before merge.",
        "Review library usage quarterly — retire unused templates.",
      ],
      example: {
        title: "40-person product org — prompt guild",
        body: "Monthly 45-min prompt guild: one template demo, one failure post-mortem, one audit result. Library grew to 34 templates; support ticket draft time down 40%; fewer 'which prompt do you use?' Slack threads.",
      },
    }),
  ],
};
