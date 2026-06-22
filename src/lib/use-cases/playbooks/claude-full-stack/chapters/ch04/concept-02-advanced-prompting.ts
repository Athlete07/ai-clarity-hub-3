import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_02_ADVANCED_PROMPTING: GuideConcept = {
  number: 2,
  title: "Advanced Prompting Techniques",
  subtitle:
    "The techniques that separate good Claude outputs from great ones",
  sections: [
    buildGuideSection({
      id: "chain-of-thought",
      number: "2.1",
      title: "Chain-of-thought prompting",
      subtitle:
        "\"Think step by step\" — why making Claude reason out loud improves accuracy and when to use it",
      takeaway:
        "Asking Claude to show reasoning before the final answer improves accuracy on multi-step logic, math, and trade-off analysis — at the cost of tokens and latency.",
      why: "Hidden reasoning skips checkable steps. Visible chains let you catch errors before they reach the conclusion.",
      paragraphs: [
        [
          s("Use CoT for: prioritisation, debugging, financial models, policy interpretation, architecture decisions. Skip for: simple rewrites, format conversion, tasks with a fixed template."),
        ],
        [
          s("Strong pattern: 'First list assumptions. Then reason step by step. Finally give the recommendation in 3 bullets.' For API, separate reasoning and answer blocks or use "),
          x("structured tags", "XML or markdown sections — see Concept 4.4."),
          s(" so you can strip reasoning in production if needed."),
        ],
      ],
      workflowSteps: [
        "Add 'show work before conclusion' to any decision prompt.",
        "If conclusion is wrong, fix the earliest flawed step — don't restart.",
        "For production API, log reasoning internally; show users only the final block.",
      ],
      example: {
        title: "Eng lead — build vs buy analysis",
        body: "Without CoT, Claude recommended buy. With step-by-step (TCO, team skill, timeline, risk), reasoning exposed a missing maintenance cost assumption. Revised recommendation: build phase 1, buy phase 2. Decision doc cited the chain.",
      },
    }),
    buildGuideSection({
      id: "few-shot",
      number: "2.2",
      title: "Few-shot prompting",
      subtitle:
        "Teaching by example — how three well-chosen examples unlock dramatically better outputs",
      takeaway:
        "Two to three diverse, high-quality examples teach format, tone, and edge-case handling better than paragraphs of rules.",
      why: "Examples are implicit specifications. They show what 'done' looks like when language alone is ambiguous.",
      paragraphs: [
        [
          s("Pick examples that differ in difficulty: easy, typical, edge case. Label them Input/Output. Keep examples shorter than the task you want — Claude generalises from pattern, not length."),
        ],
        [
          s("Few-shot beats zero-shot when: output format is idiosyncratic, brand voice is specific, or task has unwritten rules ('how we write release notes here')."),
        ],
      ],
      workflowSteps: [
        "Harvest 3 real past outputs your team approved.",
        "Strip sensitive data; keep structure and voice.",
        "Add: 'Follow the pattern of these examples for the new input below.'",
      ],
      artifact: {
        id: "few-shot-template",
        title: "Few-shot prompt template",
        content: `<example>
<input>[sanitised input 1]</input>
<output>[ideal output 1]</output>
</example>
<example>
<input>[input 2 — edge case]</input>
<output>[output 2]</output>
</example>

Now process:
<input>[new task]</input>`,
      },
    }),
    buildGuideSection({
      id: "meta-prompting",
      number: "2.3",
      title: "Meta-prompting",
      subtitle:
        "Using Claude to write and improve its own prompts — the recursive technique that scales prompt quality",
      takeaway:
        "Use Claude to draft, critique, and harden prompts against a rubric — then human-approve before production use.",
      why: "Manual prompt writing plateaus. Meta-prompting turns your quality criteria into a repeatable review loop.",
      paragraphs: [
        [
          s("Pattern: (1) Describe task and failure modes. (2) Ask Claude to write a prompt with I/C/E/F. (3) Ask Claude to attack its own prompt — vagueness, missing format, untestable success. (4) You edit and freeze v1."),
        ],
        [
          s("Guardrail: never auto-deploy meta-generated prompts without testing on 5+ real inputs. Meta-prompting accelerates drafting, not judgment."),
        ],
      ],
      workflowSteps: [
        "Prompt: 'Write a prompt for [task]. Include format, examples placeholder, and 3 test cases.'",
        "Follow-up: 'Score this prompt 1–10 on specificity; rewrite weak sections.'",
        "Run test cases; log failures; iterate prompt version.",
      ],
    }),
    buildGuideSection({
      id: "prompt-chaining",
      number: "2.4",
      title: "Prompt chaining",
      subtitle:
        "Breaking complex tasks into sequential prompts — the architecture for work that exceeds a single response",
      takeaway:
        "Chain when one pass mixes incompatible goals (research + write + critique) or exceeds reliable context. Each step has one job and a verifiable output.",
      why: "Monolithic prompts produce mediocre everything. Chains let you inspect, fix, and cache intermediate results.",
      paragraphs: [
        [
          s("Classic chain: extract → transform → format → review. API implementations pass step N output as step N+1 input. Claude.ai users can run chains manually or via Projects with saved step prompts."),
        ],
        [
          s("Design chains with "),
          x("checkpoints", "Human or automated validation between steps — reject bad input early."),
          s(". Failed step 2 should not run until step 1 passes schema validation."),
        ],
      ],
      workflowSteps: [
        "Decompose task into single-verb steps.",
        "Define output schema per step.",
        "Build a chain diagram; implement thinnest step first.",
        "Add human review only where errors are expensive.",
      ],
      example: {
        title: "Content team — research → brief → draft → edit",
        body: "Four prompts in one Project. Step 1: source-backed fact sheet. Step 2: angle + outline (human picks angle). Step 3: draft in artifact. Step 4: editor pass against style guide. Quality up; fewer full rewrites.",
      },
    }),
    buildGuideSection({
      id: "self-consistency",
      number: "2.5",
      title: "Self-consistency",
      subtitle:
        "Running the same prompt multiple times and synthesising the best answer — when it is worth the cost",
      takeaway:
        "Multiple samples + synthesis reduces variance on high-stakes judgments — but multiplies token cost. Reserve for decisions, not drafts.",
      why: "Single samples lie confidently. Consistency across runs surfaces stable conclusions vs noise.",
      paragraphs: [
        [
          s("Process: run prompt 3–5 times (slight temperature if API), extract claims that repeat, flag contradictions, ask Claude to synthesise a final answer citing which runs agreed."),
        ],
        [
          s("Worth it when: classification with fuzzy boundaries, risk assessment, creative strategy options. Not worth it for: deterministic formatting, code with tests, tasks with ground-truth verification."),
        ],
      ],
      workflowSteps: [
        "Run 3 parallel completions.",
        "Diff key claims — agreement = signal.",
        "Synthesis prompt: 'Merge consistent points; list disagreements for human.'",
      ],
    }),
    buildGuideSection({
      id: "structured-output",
      number: "2.6",
      title: "Structured output prompting",
      subtitle:
        "Reliably extracting JSON, tables, and typed data from Claude — the technique for integration with other tools",
      takeaway:
        "Structured output requires schema in the prompt, validation after the response, and a repair loop when parsing fails.",
      why: "Downstream tools need parseable data. Prose is a dead end for automation.",
      paragraphs: [
        [
          s("Anthropic API supports tool use and JSON modes on many models — in Claude.ai, specify schema in the prompt and use artifacts for tables. Always validate with JSON.parse or a schema validator."),
        ],
        [
          s("Repair pattern: 'Your output failed validation: [error]. Return corrected JSON only.' Keep original prompt; add error message. Two repair attempts max, then escalate to human."),
        ],
      ],
      workflowSteps: [
        "Embed JSON schema or table headers in prompt.",
        "Parse response; on failure, auto-retry with error snippet.",
        "Log failure types — recurring schema issues mean prompt fix, not more retries.",
      ],
    }),
    buildGuideSection({
      id: "constitutional-prompting",
      number: "2.7",
      title: "Constitutional prompting",
      subtitle:
        "Building constraints and values directly into the prompt — the safety and quality layer you control",
      takeaway:
        "Write explicit principles Claude must follow — accuracy rules, refusal boundaries, quality checks — as a constitution prepended to tasks.",
      why: "Product safety and brand standards can't rely on base model behaviour alone. Your constitution is enforceable policy in text.",
      paragraphs: [
        [
          s("Constitution blocks include: cite sources or say unknown; never fabricate metrics; refuse requests outside role; check output against prohibited phrases; prioritise user safety over helpfulness when they conflict."),
        ],
        [
          s("End prompts with: 'Before responding, verify compliance with the constitution above.' This activates self-check behaviour trained via Constitutional AI."),
        ],
      ],
      workflowSteps: [
        "Draft 5–10 non-negotiable rules for your use case.",
        "Prepend to system prompt or Project instructions.",
        "Red-team with adversarial inputs monthly.",
      ],
      artifact: {
        id: "mini-constitution",
        title: "Mini-constitution template",
        content: `CONSTITUTION:
1. If fact is not in provided context, say "not in sources."
2. Never invent names, numbers, or citations.
3. Flag uncertainty explicitly.
4. Refuse [specific prohibited requests].
5. Output must pass [format + length] rules.

Task follows below.`,
      },
    }),
    buildGuideSection({
      id: "conditional-prompting",
      number: "2.8",
      title: "Conditional prompting",
      subtitle:
        "Prompts that instruct Claude to behave differently based on what it finds — the branching logic in language",
      takeaway:
        "Use if/then instructions in natural language to branch behaviour — classify first, then apply the right sub-prompt without spinning up separate apps.",
      why: "One smart prompt can replace brittle multi-tool flows when branches are few and inspectable.",
      paragraphs: [
        [
          s("Pattern: 'Read the input. If [condition A], follow procedure A. If [condition B], follow procedure B. If unclear, ask one clarifying question.' Works for triage, support routing, document classification."),
        ],
        [
          s("Limit branches to 3–4. Beyond that, use a chain with an explicit classification step (structured label) then route in code."),
        ],
      ],
      workflowSteps: [
        "Write decision tree on paper first.",
        "Encode as numbered branches in one prompt.",
        "Test one input per branch + one ambiguous input.",
      ],
      example: {
        title: "Support triage — conditional prompt",
        body: "Single prompt: if billing → refund policy path; if bug → collect repro steps; if feature request → template + product area tag. Haiku classifies; human reviews edge cases. Replaced three separate macros.",
      },
    }),
  ],
};
