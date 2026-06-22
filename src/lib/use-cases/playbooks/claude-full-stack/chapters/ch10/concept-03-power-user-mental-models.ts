import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_03_POWER_USER_MENTAL_MODELS: GuideConcept = {
  number: 3,
  title: "The Power User Mental Models",
  subtitle:
    "The thinking frameworks that separate people who use Claude well from people who use it a lot",
  sections: [
    buildGuideSection({
      id: "brilliant-generalist",
      number: "3.1",
      title: "Claude as a brilliant generalist",
      subtitle:
        "What that means for task selection, verification requirements, and the work you never delegate to it alone",
      takeaway:
        "Claude is broad, not deep-certified — great at drafting, structuring, explaining; never sole authority on law, medicine, live markets, or novel security proofs.",
      why: "Misunderstanding 'generalist' leads to expert-level trust on non-expert outputs.",
      paragraphs: [
        [
          s("Delegate: first drafts, option generation, summarization, code scaffolding. Don't delegate alone: compliance sign-off, production config, personnel decisions, untrusted code execution."),
        ],
        [
          s("Verification depth scales inversely with your expertise — experts spot errors fast; novices need checklists."),
        ],
      ],
      workflowSteps: [
        "Label task: generalist-ok vs expert-required.",
        "Match verification to risk class.",
        "Keep human expert in loop for regulated domains.",
      ],
    }),
    buildGuideSection({
      id: "configuration-before-conversation",
      number: "3.2",
      title: "The configuration-before-conversation model",
      subtitle:
        "Investing in setup so every conversation starts from a better baseline",
      takeaway:
        "Spend 20 minutes on Project instructions, knowledge files, and custom settings before 20 one-off chats — configuration compounds; raw chat does not.",
      why: "Power users front-load context; beginners repeat the same preamble forever.",
      paragraphs: [
        [
          s("Configure: custom instructions (Ch 3), Project persona + docs (Ch 6), MCP connectors (Ch 7), CLAUDE.md for code (Ch 8). Every conversation inherits the stack."),
        ],
      ],
      workflowSteps: [
        "Before new workstream, create or select Project.",
        "Upload stable reference docs once.",
        "Iterate instructions from debug prompts (1.8).",
      ],
    }),
    buildGuideSection({
      id: "portfolio-model",
      number: "3.3",
      title: "The portfolio model",
      subtitle:
        "Managing a set of configured Projects rather than living in individual chats — the professional operating model",
      takeaway:
        "Portfolio: Client A Project, Research Project, Code Review Project — each with instructions, files, and MCP scope. Chats are disposable sessions inside durable Projects.",
      why: "Chat history as 'memory' doesn't scale; Projects are your Claude filesystem.",
      paragraphs: [
        [
          s("Organize like apps on a phone: one Project per recurring function. Archive stale Projects. Share team Projects with governed instructions."),
        ],
      ],
      workflowSteps: [
        "Map your top 5 recurring tasks to Projects.",
        "Delete or archive orphan chats monthly.",
        "Assign Project owner on teams.",
      ],
    }),
    buildGuideSection({
      id: "iteration-model",
      number: "3.4",
      title: "The iteration model",
      subtitle:
        "Treating every Claude interaction as the start of a refinement loop, not the end of a process",
      takeaway:
        "First output is draft v0 — plan 2–4 refinement turns: critique, tighten scope, fix facts, polish format. Professionals rarely ship turn one.",
      why: "Beginners treat chat like a vending machine; power users treat it like a design review.",
      paragraphs: [
        [
          s("Loop: generate → critique (1.3) → revise → verify → export. For artifacts, iterate inside artifact panel before copying out."),
        ],
      ],
      workflowSteps: [
        "Budget time for iteration in estimates.",
        "Use explicit version labels in thread.",
        "Stop when marginal gain < review cost.",
      ],
    }),
    buildGuideSection({
      id: "verification-model",
      number: "3.5",
      title: "The verification model",
      subtitle:
        "Knowing which Claude outputs need checking and which can be trusted — the risk calibration that scales",
      takeaway:
        "Tier outputs: Tier 0 internal brainstorm (light check), Tier 1 team doc (peer review), Tier 2 external/client (source verify every claim), Tier 3 regulated (expert sign-off).",
      why: "Verifying everything is slow; verifying nothing is reckless — tiers scale.",
      paragraphs: [
        [
          s("Automate Tier 0–1 checks where possible: linters, schema validation, diff review. Tier 2+: citation pass, number audit, legal skim."),
        ],
      ],
      workflowSteps: [
        "Tag each output with tier before sending.",
        "Document tier rules in team policy.",
        "Audit incidents — adjust tiers.",
      ],
      artifact: {
        id: "verification-tiers",
        title: "Output verification tiers",
        content: `T0 Brainstorm — sanity skim
T1 Internal — colleague or self-critique pass
T2 External — fact-check + tone + brand
T3 Regulated — domain expert + compliance`,
      },
    }),
    buildGuideSection({
      id: "amplification-model",
      number: "3.6",
      title: "The amplification model",
      subtitle:
        "Claude amplifies your existing skills — the better you are at something, the more Claude can help — the compounding advantage",
      takeaway:
        "Strong writers get better drafts; strong engineers get better refactors; weak domain knowledge + Claude = confident nonsense. Invest in your skill, use Claude as multiplier.",
      why: "AI literacy without domain literacy produces fast garbage.",
      paragraphs: [
        [
          s("PM who understands market structure gets sharper strategy memos. Developer who knows architecture directs Claude Code effectively. Train the human loop, not just the prompt."),
        ],
      ],
      workflowSteps: [
        "Pair Claude use with skill development.",
        "Use Claude to teach while doing — explain as you go.",
        "Avoid delegating what you don't understand.",
      ],
    }),
    buildGuideSection({
      id: "workflow-not-chat-model",
      number: "3.7",
      title: "The workflow-not-chat model",
      subtitle:
        "Replacing ad hoc prompting with designed workflows for recurring work — the systematisation that creates leverage",
      takeaway:
        "Third time you do something in chat, promote it to workflow doc + Project + checklist (Ch 9). Chat is exploration; workflow is production.",
      why: "Heavy users hit a ceiling without systematization — same mistakes, no handoff.",
      paragraphs: [
        [
          s("Signal to promote: weekly recurrence, multiple people need it, quality variance hurts. Workflow captures prompts, HITL gates, failure runbook."),
        ],
      ],
      workflowSteps: [
        "Notice repeat patterns in chat history.",
        "Draft five-stage workflow (Ch 9.1.2).",
        "Pilot once; add to portfolio registry.",
      ],
    }),
    buildGuideSection({
      id: "total-cost-model",
      number: "3.8",
      title: "The total cost model",
      subtitle:
        "Thinking about the combined cost of your time and Claude's tokens — the optimisation that maximises the return on using Claude at all",
      takeaway:
        "Total cost = your hourly rate × (prompt + review + fix time) + token/API cost (Ch 2). Optimize the bottleneck — sometimes faster model + more review beats Opus + hope.",
      why: "Token-obsessed users ignore review labor; time-obsessed users burn Opus on trivial extraction.",
      paragraphs: [
        [
          s("Example: Haiku extracts table ($0.01, 2 min review) vs Opus narrative ($0.50, 10 min fixing drift). Pick tier per subtask. Batch similar work to amortize setup."),
        ],
        [
          x("ROI question", "Would I pay a junior analyst this much time for this output? If no, redesign the workflow."),
        ],
      ],
      workflowSteps: [
        "Estimate human minutes per task type.",
        "Add token cost from Ch 2 calculator.",
        "Cut workflows where total cost > alternative.",
      ],
    }),
  ],
};
