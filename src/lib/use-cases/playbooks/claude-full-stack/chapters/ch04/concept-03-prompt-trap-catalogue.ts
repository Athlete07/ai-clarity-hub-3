import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_03_PROMPT_TRAP_CATALOGUE: GuideConcept = {
  number: 3,
  title: "The Prompt Trap Catalogue",
  subtitle:
    "Every common prompting mistake — what it costs you and exactly how to fix it",
  sections: [
    buildGuideSection({
      id: "vagueness-trap",
      number: "3.1",
      title: "The vagueness trap",
      subtitle:
        "\"Write something good about X\" — the prompt pattern that guarantees mediocre output",
      takeaway:
        "Vague prompts outsource every decision to the model — you get average-of-the-internet output, not your output.",
      why: "This is the most common trap and the cheapest to fix with specificity (Concept 1.2).",
      paragraphs: [
        [
          s("Trap: 'Write something good about our product.' Fix: audience, angle, length, proof points, CTA, and what to avoid. Good is not a specification."),
        ],
      ],
      workflowSteps: [
        "Ban the words good, better, nice, professional without definitions.",
        "Add: who reads this, what they do after reading, max length.",
      ],
      example: {
        title: "Marketing — landing page trap",
        body: "'Write good copy' produced generic SaaS fluff. Fixed prompt named ICP, three differentiators with proof, objection to address, and hero under 12 words. Conversion on A/B test improved — not because of magic AI, because of specifications.",
      },
    }),
    buildGuideSection({
      id: "novel-trap",
      number: "3.2",
      title: "The novel trap",
      subtitle:
        "Treating Claude like a search engine for creative questions — why it hallucinates when you ask for facts",
      takeaway:
        "Claude composes plausible text — it does not verify facts. Factual questions need sources, search, or attached documents.",
      why: "Chapter 1's mental model: reasoning engine over evidence, not oracle. This trap causes the most expensive business errors.",
      paragraphs: [
        [
          s("Trap: 'What was our competitor's Q3 revenue?' without data. Fix: attach 10-K, enable search with source rules, or ask Claude to say 'I don't have this' if not in context."),
        ],
      ],
      workflowSteps: [
        "Tag prompts FACT or OPINION before sending.",
        "FACT prompts require attached source or search + citation review.",
        "Never paste unverified numbers into decks or contracts.",
      ],
    }),
    buildGuideSection({
      id: "confirmation-trap",
      number: "3.3",
      title: "The confirmation trap",
      subtitle:
        "Asking Claude if something is correct — why it agrees and how to get honest evaluation instead",
      takeaway:
        "Claude is biased toward agreement. 'Is this right?' gets yes. 'Find flaws under criteria X' gets useful critique.",
      why: "RLHF rewards helpfulness; confirmation feels helpful even when wrong.",
      paragraphs: [
        [
          s("Trap: 'My plan is solid, right?' Fix: 'Act as sceptical reviewer. List 5 ways this plan fails. Cite assumptions.' Or: 'Steel-man the opposite position.'"),
        ],
        [
          s("For factual verification, compare against source text: 'Quote the passage that supports each claim' — unsupported claims surface quickly."),
        ],
      ],
      workflowSteps: [
        "Replace 'is this good?' with rubric-based scoring.",
        "Ask for disconfirming evidence explicitly.",
        "Use a fresh chat without your ego in the thread for red-team passes.",
      ],
    }),
    buildGuideSection({
      id: "length-trap",
      number: "3.4",
      title: "The length trap",
      subtitle:
        "Not specifying length — why Claude defaults to verbose and how to control it",
      takeaway:
        "Default Claude is thorough. Without caps, you get essays when you needed a Slack message.",
      why: "Verbose output hides weak thinking and wastes reader time — see Concept 1.7.",
      paragraphs: [
        [
          s("Trap: 'Summarise the report.' Fix: 'Summarise in 5 bullets, max 15 words each, lead with decision impact.'"),
        ],
      ],
      workflowSteps: [
        "Set numeric caps on every outward-facing deliverable.",
        "Ask for executive summary + optional appendix if depth needed.",
      ],
    }),
    buildGuideSection({
      id: "format-trap",
      number: "3.5",
      title: "The format trap",
      subtitle:
        "Getting prose when you needed a table, or a list when you needed a paragraph — the one sentence that fixes it",
      takeaway:
        "One explicit format line prevents 80% of reformatting work: 'Return a markdown table with columns A, B, C — no intro.'",
      why: "Format mismatch is pure friction — easy to prevent, tedious to fix.",
      paragraphs: [
        [
          s("Trap: assuming Claude will guess your team's standard format. Fix: paste empty template or schema in every recurring task."),
        ],
      ],
      workflowSteps: [
        "Add OUTPUT FORMAT as mandatory section in templates.",
        "If wrong format, don't re-ask whole task — 'convert previous answer to [format] only'.",
      ],
    }),
    buildGuideSection({
      id: "context-dump-trap",
      number: "3.6",
      title: "The context dump trap",
      subtitle:
        "Giving Claude too much irrelevant context and watching the quality degrade — the signal-to-noise discipline",
      takeaway:
        "More context is not better context. Irrelevant documents dilute attention and increase cost — curate what the model sees.",
      why: "Context window is finite attention, not unlimited storage (Chapter 1, Chapter 2).",
      paragraphs: [
        [
          s("Trap: uploading entire data room for one clause review. Fix: extract relevant pages, summarise background in 200 words, attach only primary sources."),
        ],
        [
          s("Use Projects for stable corp context; per-message attachments for task-specific evidence only."),
        ],
      ],
      workflowSteps: [
        "Before attach: 'What 3 facts does Claude need?'",
        "Remove docs that don't change the answer.",
        "Summarise long files in a separate step, then chain.",
      ],
    }),
    buildGuideSection({
      id: "one-shot-trap",
      number: "3.7",
      title: "The one-shot trap",
      subtitle:
        "Giving up after the first response — why the second and third iteration almost always produce better output",
      takeaway:
        "First outputs are drafts. Teams that one-shot either accept mediocrity or blame the tool instead of iterating.",
      why: "Iteration is the workflow (Concept 1.8) — not a sign of failure.",
      paragraphs: [
        [
          s("Trap: 'Claude can't do this' after one try. Fix: critique pass, targeted revision, format lock — usually three turns."),
        ],
      ],
      workflowSteps: [
        "Budget 3 turns minimum for important work.",
        "Turn 2 always asks for gaps and assumptions.",
        "Save winning iteration sequences as templates.",
      ],
    }),
    buildGuideSection({
      id: "compliance-trap",
      number: "3.8",
      title: "The compliance trap",
      subtitle:
        "Mistaking Claude's agreeableness for accuracy — the verification habits that prevent expensive mistakes",
      takeaway:
        "Polite, confident wrong answers are the danger — not refusals. Verify facts, numbers, names, and legal claims before ship.",
      why: "The trap combines confirmation bias (3.3) with novel trap (3.2) — lethal in regulated or customer-facing work.",
      paragraphs: [
        [
          s("Habits: citation check, spot-verify 3 random facts, second-model or human review on high stakes, never auto-send customer emails without human read."),
        ],
        [
          s("Build "),
          x("verification into the prompt", "'List claims requiring source; mark unverified as UNKNOWN.'"),
          s(" — don't rely on post-hoc discipline alone."),
        ],
      ],
      workflowSteps: [
        "Define tier 1 (auto-ok), tier 2 (spot check), tier 3 (mandatory human) tasks.",
        "Tier 3: no send without named approver.",
        "Log incidents where compliance trap fired — update prompts.",
      ],
      example: {
        title: "Sales — wrong stat in proposal",
        body: "AE pasted Claude-generated market size into a proposal without checking. Stat was outdated composite from training data. Fix: proposal prompt requires citation or 'VERIFY' flag; CRM attach for source PDF; manager review on tier-3 deals.",
      },
    }),
  ],
};
