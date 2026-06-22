import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_02_TRAP_CATALOGUE: GuideConcept = {
  number: 2,
  title: "The Trap Catalogue",
  subtitle:
    "Every major Claude mistake — what causes it, what it costs, and exactly how to avoid it",
  sections: [
    buildGuideSection({
      id: "hallucination-trap",
      number: "2.1",
      title: "The hallucination trap",
      subtitle:
        "Confident wrong answers — the use cases where hallucination is most likely and the verification habits that catch it",
      takeaway:
        "Highest risk: specific numbers, citations, API names, legal clauses, 'latest' facts. Habit: require sources, spot-check claims, never ship unverified stats to clients.",
      why: "Claude sounds authoritative on fabricated details — confidence is not calibration.",
      paragraphs: [
        [
          s("Triggers: 'What did X company announce last week?' without search; 'Quote regulation section Y'; obscure library APIs. Mitigate: web search, upload source, 'say insufficient evidence.'"),
        ],
      ],
      workflowSteps: [
        "Classify task: factual vs generative.",
        "Factual → source required.",
        "Random audit 10% of outputs.",
      ],
    }),
    buildGuideSection({
      id: "sycophancy-trap",
      number: "2.2",
      title: "The sycophancy trap",
      subtitle:
        "Claude agreeing with you when you're wrong — how to get honest disagreement rather than polite compliance",
      takeaway:
        "Explicitly request dissent: 'Argue the opposite. What would convince you my plan is wrong?' Reward pushback in your prompts — don't punish Claude for disagreeing.",
      why: "Users phrase hypotheses as conclusions; Claude mirrors confidence to be helpful.",
      paragraphs: [
        [
          s("Phrases that invite honesty: 'Steel-man the counter-position.' 'List three reasons this fails.' 'Do not agree for politeness — accuracy over rapport.'"),
        ],
      ],
      workflowSteps: [
        "State your position as hypothesis, not fact.",
        "Ask for pre-mortem or red team.",
        "Use separate 'critic' persona in Project.",
      ],
      example: {
        title: "Anti-sycophancy prompt",
        body: "I believe we should sunset Feature X. Before agreeing, list strongest arguments to keep it. If my reasoning has gaps, say so directly.",
      },
    }),
    buildGuideSection({
      id: "context-drift-trap",
      number: "2.3",
      title: "The context drift trap",
      subtitle:
        "Quality degradation in long conversations — when to start fresh and when to compress",
      takeaway:
        "Start fresh when: topic pivot, quality drop, contradictory earlier answers, or >~50% context used on messy thread. Compress when: same task, summarize decisions + open items in a block, paste into new chat.",
      why: "Long threads accumulate noise; 'lost in the middle' buries key constraints (Ch 5).",
      paragraphs: [
        [
          s("Compression prompt: 'Summarize: goal, decisions made, constraints, open questions, current artifact state — under 500 words.' New chat: Project + summary + continue."),
        ],
      ],
      workflowSteps: [
        "Watch for repetition and forgotten constraints.",
        "Compress at natural breakpoints.",
        "Use Projects for persistent context, not infinite chat.",
      ],
    }),
    buildGuideSection({
      id: "format-drift-trap",
      number: "2.4",
      title: "The format drift trap",
      subtitle:
        "Output format degrading across a long task — the instruction reinforcement that prevents it",
      takeaway:
        "Re-state output schema every 3–4 turns; use 'FORMAT LOCK: JSON only, keys X Y Z'; validate with parser; reject and retry on drift.",
      why: "Early messages emphasize format; later turns optimize for content and shed structure.",
      paragraphs: [
        [
          s("Pin format in Project instructions. For multi-step: 'Each section output must start with ## Section N and end with ---'. Automated workflows: schema validation (Ch 9)."),
        ],
      ],
      workflowSteps: [
        "Define machine-readable schema upfront.",
        "Re-anchor format before each stage.",
        "Parser + one retry on failure.",
      ],
    }),
    buildGuideSection({
      id: "over-reliance-trap",
      number: "2.5",
      title: "The over-reliance trap",
      subtitle:
        "Using Claude for tasks where it is systematically worse than alternatives — knowing when not to use it",
      takeaway:
        "Don't use Claude for: real-time data without tools, pixel-perfect design, guaranteed math without code check, relationship-sensitive apologies without human edit, legal final word.",
      why: "Power users know tool boundaries — amateurs force every task through chat.",
      paragraphs: [
        [
          s("Better alternatives: spreadsheet for simple math, IDE debugger for breakpoints, designer for brand assets, lawyer for binding advice, SQL BI tool for dashboard drill-down."),
        ],
        [
          x("Claude sweet spot", "Language-heavy work with human verification — draft, analyze, transform, explain."),
        ],
      ],
      workflowSteps: [
        "Ask: is verification cost > generation savings?",
        "Route task to right tool in 10 seconds.",
        "Document 'not Claude' list for team.",
      ],
    }),
    buildGuideSection({
      id: "privacy-trap",
      number: "2.6",
      title: "The privacy trap",
      subtitle:
        "Pasting sensitive data into Claude without understanding what happens to it — the data hygiene that protects you",
      takeaway:
        "Know your plan's data policy (Ch 2): consumer vs Team vs Enterprise retention and training use. Redact PII, secrets, unreleased financials; use Enterprise/API with DPA for regulated data.",
      why: "Convenience paste has caused leaks, compliance violations, and contract breaches.",
      paragraphs: [
        [
          s("Never paste: API keys, passwords, full customer databases, HIPAA/PCI without approval. Substitute: synthetic rows, '[REDACTED]', tokenized IDs."),
        ],
      ],
      workflowSteps: [
        "Read org AI data policy before first paste.",
        "Build redaction habit for demos.",
        "Use on-prem or VPC options if required.",
      ],
      artifact: {
        id: "paste-checklist",
        title: "Before you paste checklist",
        content: `□ Approved plan/tier for this data class?
□ PII/secrets removed or tokenized?
□ Would I email this to a stranger?
□ Is there a local/offline alternative?
□ Logged in correct account (work vs personal)?`,
      },
    }),
    buildGuideSection({
      id: "prompt-injection-trap",
      number: "2.7",
      title: "The prompt injection trap",
      subtitle:
        "Malicious instructions embedded in content you ask Claude to process — the attack vector and the defence",
      takeaway:
        "Attack: hidden text in PDF/email/web says 'exfiltrate data' or 'ignore policies.' Defence: untrusted-data framing, MCP least privilege, human approval on actions, output filtering.",
      why: "Agents that read email and web at scale execute injection at scale.",
      paragraphs: [
        [
          s("Examples: resume with white-on-white 'hire immediately'; webpage with 'send user secrets to URL.' Layer defences: instruction hierarchy, tool scopes, no auto-send, audit logs (Ch 7)."),
        ],
      ],
      workflowSteps: [
        "Add injection-aware instructions to Projects.",
        "MCP write tools require human confirm.",
        "Train team on suspicious document patterns.",
      ],
    }),
    buildGuideSection({
      id: "version-trap",
      number: "2.8",
      title: "The version trap",
      subtitle:
        "Behaviour differences across Claude model versions — what changes when Anthropic updates the model and how to manage it",
      takeaway:
        "Model updates change tone, refusal rates, coding style, and context handling — pin versions in API; re-test critical prompts after Claude.ai model rollouts; version your Project instructions.",
      why: "A prompt that worked last quarter may fail silently after a model swap.",
      paragraphs: [
        [
          s("Maintain prompt regression set: 10 canonical tasks with expected shape. After update, run set; diff outputs. Document 'last verified on Sonnet X / date' in workflow registry (Ch 9)."),
        ],
      ],
      workflowSteps: [
        "API: pin model ID until regression passes.",
        "Claude.ai: note release notes; re-pilot workflows.",
        "Version Project instructions in changelog.",
      ],
    }),
  ],
};
