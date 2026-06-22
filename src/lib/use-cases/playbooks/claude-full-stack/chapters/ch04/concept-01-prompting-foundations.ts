import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_01_PROMPTING_FOUNDATIONS: GuideConcept = {
  number: 1,
  title: "Prompting Foundations",
  subtitle:
    "What actually makes a prompt work — the principles behind every technique",
  sections: [
    buildGuideSection({
      id: "four-components",
      number: "1.1",
      title: "The four components of every prompt",
      subtitle:
        "Instructions, context, examples, and output format — the anatomy that explains why prompts succeed or fail",
      takeaway:
        "Every effective prompt combines four elements: what to do (instructions), what to know (context), what good looks like (examples), and what shape to return (format). Missing any one produces predictable failure modes.",
      why: "Most 'bad prompts' are incomplete prompts. Diagnosing which component is missing turns random trial-and-error into systematic improvement.",
      paragraphs: [
        [
          s(""),
          x("Instructions", "The task — verbs, constraints, success criteria."),
          s(" tell Claude what to accomplish. "),
          x("Context", "Background facts, documents, audience, constraints."),
          s(" grounds the answer. "),
          x("Examples", "One to three demonstrations of input → ideal output."),
          s(" calibrate quality. "),
          x("Output format", "JSON, table, bullets, word count, sections."),
          s(" constrains structure so you can use the result without reformatting."),
        ],
        [
          s("Weak prompt: 'Summarise this.' Strong prompt: instructions ('Summarise for a CFO'), context (attached earnings call), example (prior summary you liked), format ('5 bullets, max 20 words each, lead with revenue impact')."),
        ],
      ],
      workflowSteps: [
        "Before sending, label your draft: I / C / E / F — which are present?",
        "If output is wrong shape, fix format first; if wrong substance, add context or examples.",
        "Save prompts where all four are explicit as templates.",
      ],
      artifact: {
        id: "prompt-anatomy-checklist",
        title: "Prompt anatomy checklist",
        content: `INSTRUCTIONS — What should Claude do? (verbs, scope, exclusions)
CONTEXT — What must it know? (docs, audience, date, constraints)
EXAMPLES — What does good look like? (1–3 pairs if task is nuanced)
FORMAT — How should output appear? (structure, length, file type)

Score each 0–2 before sending. Below 6 total → revise first.`,
      },
    }),
    buildGuideSection({
      id: "specificity-lever",
      number: "1.2",
      title: "Specificity as the primary lever",
      subtitle:
        "Why vague prompts produce vague outputs and exactly how to be more specific",
      takeaway:
        "Specificity is the highest-ROI prompt edit — replace abstract goals with concrete constraints: audience, length, criteria, and what to exclude.",
      why: "Claude fills gaps with generic training-data defaults. Vagueness outsources decisions to the model; specificity keeps them with you.",
      paragraphs: [
        [
          s("Vague: 'Improve this email.' Specific: 'Rewrite for a busy VP who ignored our last two emails. Under 120 words. One clear CTA: book a 15-min call. Tone: direct, not salesy. Keep subject line under 50 characters.'"),
        ],
        [
          s("Add specificity along four axes: "),
          x("who", "Audience and their incentives."),
          s(", "),
          x("what", "Deliverable and boundaries."),
          s(", "),
          x("how", "Format, tone, structure."),
          s(", "),
          x("why", "Decision the output supports — helps Claude prioritise."),
        ],
      ],
      workflowSteps: [
        "Highlight vague words (good, better, professional, brief) — replace each with a number or example.",
        "Add one sentence: 'Optimize for X, not Y.'",
        "If output is still generic, add a negative example: 'Do not write like this: …'",
      ],
      example: {
        title: "Founder — investor update specificity",
        body: "Generic prompt produced a 600-word essay. Revised prompt: 'Monthly investor email. 4 sections: metrics (table), wins (3 bullets), asks (numbered), risks (honest, 2 max). Total under 400 words. Assume readers skim on mobile.' Second output required one edit, not a rewrite.",
      },
    }),
    buildGuideSection({
      id: "positive-negative-instructions",
      number: "1.3",
      title: "Positive vs negative instructions",
      subtitle:
        "Telling Claude what to do vs what not to do — when each is more effective",
      takeaway:
        "Lead with positive instructions ('do X'); use negatives sparingly for genuine failure modes. Long lists of 'don't' dilute attention and often get ignored.",
      why: "Models attend strongly to the first actionable pattern. Ten prohibitions compete with one clear task.",
      paragraphs: [
        [
          s("Positive: 'Use active voice. Lead with the recommendation.' Negative: 'Don't be verbose. Don't use jargon. Don't start with Certainly.' Positives define the target; negatives patch holes after the target is clear."),
        ],
        [
          s("When negatives help: safety boundaries, known failure modes ('do not invent citations'), compliance ('exclude PII'). Cap at 3–5 high-signal negatives per prompt."),
        ],
      ],
      workflowSteps: [
        "Rewrite top 3 'don't' lines as 'do' lines.",
        "Keep negatives only for irreversible errors (legal, factual, security).",
        "Test: remove all negatives — if quality drops, re-add only the ones that mattered.",
      ],
    }),
    buildGuideSection({
      id: "role-persona",
      number: "1.4",
      title: "Role and persona prompting",
      subtitle:
        "When 'act as a...' genuinely helps and when it is cargo cult — the honest assessment",
      takeaway:
        "Roles help when they imply domain constraints, vocabulary, and evaluation criteria — not when they're generic theatre ('act as an expert').",
      why: "Cargo-cult roles add tokens without information. Good roles encode how an expert would think about the task.",
      paragraphs: [
        [
          s("Useful role: 'You are a senior PM at a B2B SaaS company reviewing a PRD for engineering feasibility — flag scope creep, missing acceptance criteria, and dependencies.' Useless role: 'You are a world-class genius.'"),
        ],
        [
          s("Roles work best paired with "),
          x("stakes and audience", "Who reads this output and what happens if it's wrong?"),
          s(". Skip the role if instructions and context already specify expertise level."),
        ],
      ],
      workflowSteps: [
        "If using a role, list 3 behaviours the role must exhibit.",
        "A/B test with and without role on the same task — keep only if output improves.",
        "Prefer Project-level persona over repeating role in every message.",
      ],
      example: {
        title: "Legal review role — useful vs theatre",
        body: "Theatre: 'Act as a lawyer.' Useful: 'You are in-house counsel reviewing a vendor DPA for a 200-person SaaS. Flag clauses that conflict with GDPR Art. 28, unlimited liability, and missing subprocessors list. Output: table of clause, risk, suggested redline.'",
      },
    }),
    buildGuideSection({
      id: "output-format",
      number: "1.5",
      title: "Output format specification",
      subtitle:
        "JSON, markdown, tables, prose — how telling Claude the format changes the output",
      takeaway:
        "Format instructions are cheap and powerful — they turn free-form prose into parseable, comparable, shippable output.",
      why: "Integration, team review, and iteration all require predictable structure. Format is how you make Claude's output a data product.",
      paragraphs: [
        [
          s("Specify: container (JSON / markdown / table), field names, max lengths, required sections, and whether to omit preamble ('no intro paragraph'). For API use, request JSON only with a schema snippet."),
        ],
        [
          s("Claude often complies better when you show a "),
          x("skeleton", "Empty template with placeholders — '## Summary\\n\\n## Risks\\n\\n| Item | Severity |'"),
          s(" than when you only name the format in abstract terms."),
        ],
      ],
      workflowSteps: [
        "Paste an empty template of the desired output.",
        "For JSON: include keys, types, and 'return valid JSON only'.",
        "Validate output with a parser or checklist — feed errors back in iteration 2.",
      ],
      artifact: {
        id: "format-spec-block",
        title: "Format specification block",
        content: `OUTPUT FORMAT:
- Type: [markdown table / JSON / bullet list]
- Sections: [ordered list]
- Max length: [words or rows]
- Rules: [no preamble | cite sources inline | use H2 only]
- Template:
[paste skeleton here]`,
      },
    }),
    buildGuideSection({
      id: "tone-register",
      number: "1.6",
      title: "Tone and register control",
      subtitle:
        "How to get Claude to match the voice your work requires — professional, casual, technical, executive",
      takeaway:
        "Tone is specified through audience, sample phrases, and anti-patterns — not adjectives alone ('professional' is ambiguous).",
      why: "Brand voice drift causes rework. Explicit register beats hoping Claude guesses your company's style.",
      paragraphs: [
        [
          s("Effective tone controls: target reader ('board members, not engineers'), sentence length band, vocabulary level, 2–3 phrases to emulate, 2–3 phrases to ban."),
        ],
        [
          s("For recurring tone, put voice rules in "),
          x("Project instructions", "Persistent per-workspace guidance — see Chapter 3."),
          s(" and reference a sample paragraph: 'Match the register of this example: …'"),
        ],
      ],
      workflowSteps: [
        "Attach one approved sample of the target voice.",
        "List 3 banned patterns (hedging, emoji, hype words).",
        "Ask Claude to self-check tone against criteria before finalising.",
      ],
    }),
    buildGuideSection({
      id: "length-control",
      number: "1.7",
      title: "Length control",
      subtitle:
        "Getting Claude to be concise when you need it and thorough when you need that — the specific instructions that work",
      takeaway:
        "Length must be numeric or structural — word counts, bullet caps, section limits — not 'be concise' alone.",
      why: "Claude's default is thoroughness. Without caps, you pay in tokens, reading time, and buried lead sentences.",
      paragraphs: [
        [
          s("Concise: 'Max 150 words. One paragraph. No intro.' Thorough: 'Minimum 800 words. Cover 5 subsections with evidence per section.' Mixed: 'Executive summary: 3 bullets. Deep dive: up to 500 words per section.'"),
        ],
        [
          s("Pair length with "),
          x("information density", "Require every bullet to contain a number, name, or decision — no filler."),
          s(" rules to avoid padding when you ask for length."),
        ],
      ],
      workflowSteps: [
        "Set hard caps for emails, Slack, exec summaries.",
        "Use 'if over N words, cut lowest-priority section first' for flexible caps.",
        "In API calls, set max_tokens as a backstop.",
      ],
    }),
    buildGuideSection({
      id: "iteration-mindset",
      number: "1.8",
      title: "The iteration mindset",
      subtitle:
        "Treating prompting as a conversation, not a one-shot transaction — the workflow that produces better results",
      takeaway:
        "First drafts are briefings, not deliverables. The second and third turns — critique, refine, lock format — produce most of the value.",
      why: "One-shot prompting wastes Claude's ability to incorporate feedback and your ability to steer without rewriting from scratch.",
      paragraphs: [
        [
          s("Iteration loop: (1) rough prompt → draft, (2) 'What's weak? What did you assume?' → diagnosis, (3) 'Revise: fix X, keep Y, output as Z' → near-final. Use artifacts to hold the deliverable while chat handles negotiation."),
        ],
        [
          s("Save iteration patterns: "),
          x("critique-then-revise", "Ask for rubric-based self-score before rewriting — reduces blind edits."),
          s(", "),
          x("diff-style edits", "'Change only section 2; leave the rest verbatim.'"),
          s("."),
        ],
      ],
      workflowSteps: [
        "Never ship first response on high-stakes work.",
        "Turn 2: ask 'list assumptions and gaps'.",
        "Turn 3: single revision brief with format lock.",
        "Log what changed between v1 and v3 — that's your next template.",
      ],
      example: {
        title: "PM — PRD in three turns",
        body: "Turn 1: outline. Turn 2: 'Score against eng-readiness rubric; list gaps.' Turn 3: 'Fill gaps in sections 2 and 4 only; output full PRD in artifact.' Total time under 25 minutes vs 2 hours of one-shot editing.",
      },
    }),
  ],
};
