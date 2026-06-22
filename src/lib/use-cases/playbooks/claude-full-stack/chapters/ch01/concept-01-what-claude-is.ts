import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_01_WHAT_CLAUDE_IS: GuideConcept = {
  number: 1,
  title: "What Claude Actually Is",
  subtitle:
    "Not a search engine, not a chatbot — the right mental model changes everything about how you use it",
  sections: [
    buildGuideSection({
      id: "probabilistic-reasoning",
      number: "1.1",
      title: "Claude as a probabilistic reasoning system",
      subtitle:
        "Why every response is a distribution, not a lookup — the mental shift that explains why prompting is a skill",
      takeaway:
        "Claude does not retrieve a stored answer. It predicts the most useful continuation of text given your prompt — which means the same question can yield different (equally plausible) answers.",
      why: "Teams that treat Claude like Google blame 'the AI' when outputs vary. Power users expect variance, design for it with structure, evals, and verification — and treat prompting as steering a distribution, not pressing a button.",
      paragraphs: [
        [
          s("Under the hood, Claude is a "),
          x(
            "large language model",
            "A neural network trained on vast text to predict the next token in a sequence — not a database of facts.",
          ),
          s(
            " that completes text. When you ask a question, it does not look up a row in a table. It runs billions of probability calculations to choose the next word, then the next, until the response ends. The answer you see is one sample from a very large space of plausible answers.",
          ),
        ],
        [
          s("This is why "),
          x(
            "temperature",
            "A setting (0–1) controlling randomness. Low = more deterministic; high = more creative variation.",
          ),
          s(
            " matters in the API, and why Claude.ai can feel slightly different on repeat tries. Low temperature narrows the distribution for factual or code tasks. Higher temperature widens it for brainstorming — but also increases the chance of an unlikely (wrong) completion.",
          ),
        ],
        [
          s("Practical implication: never ship a workflow that assumes bit-identical outputs. Design for "),
          x(
            "structured outputs",
            "JSON schemas, bullet templates, or checklists that constrain format even when wording shifts.",
          ),
          s(
            ", human review on high-stakes decisions, and regression tests that check semantic correctness — not string equality.",
          ),
        ],
      ],
      workflowSteps: [
        "Run the same prompt 3 times on a critical task — note what varies vs what stays stable.",
        "If facts drift, add sources (documents, retrieval) or lower temperature in API calls.",
        "Define 'good enough' as a range (key points present) not a single golden string.",
      ],
      example: {
        title: "PM writing a PRD outline — variance that helps vs hurts",
        body: "A PM asks Claude to draft a PRD outline for a notification preferences feature. Run 1 emphasises compliance; Run 2 emphasises engagement metrics; Run 3 emphasises engineering complexity. All are valid framings. The power-user move: ask Claude to produce three strategic angles first, pick one, then request a full outline locked to that angle — using variance as exploration, not noise.",
      },
    }),
    buildGuideSection({
      id: "stateless-default",
      number: "1.2",
      title: "The stateless default",
      subtitle:
        "Why Claude has no memory between conversations unless you build it — and why most users don't realise this until it costs them",
      takeaway:
        "Each new chat starts cold. Claude only 'remembers' what is in the current thread's context — or what you explicitly attach via Projects, memory features, or your own database.",
      why: "The most expensive mistake in enterprise Claude rollouts is assuming the model remembers last week's decision. Stateless design is a feature (privacy, predictability) that becomes a bug when users expect persistence without architecture.",
      paragraphs: [
        [
          s("By default, "),
          x(
            "stateless inference",
            "Each API call or new chat is independent — no hidden memory of prior sessions unless you send history in the prompt.",
          ),
          s(
            " means Claude has no enduring memory of you. Close the tab, open a new chat — the model has zero knowledge of the previous conversation unless Anthropic product features (Projects, team context) or your integration stores and resends history.",
          ),
        ],
        [
          s("Within a single conversation, Claude can use the full "),
          x("context window", "All messages and attachments visible in the current thread — one shared working memory."),
          s(
            " as working memory — but long threads fill that window. Early instructions get compressed or dropped as you approach limits. Power users restart threads with a distilled 'state of play' summary rather than dragging 200-message threads.",
          ),
        ],
        [
          s("Builders solve persistence with "),
          x(
            "RAG and session stores",
            "Retrieve relevant docs at query time; save conversation summaries to a database and inject them into the next prompt.",
          ),
          s(
            ". Claude Code solves it by reading your repo and git history. Claude.ai Projects solve it by attaching persistent knowledge files. None of these are automatic — you choose the layer.",
          ),
        ],
      ],
      workflowSteps: [
        "Before a multi-day task, create a Project or doc called SESSION_STATE.md — update it at end of each session.",
        "Start new chats with: 'Read SESSION_STATE below. Confirm understanding before we continue.'",
        "For API apps, store user_id → summary in your DB; prepend summary to every request.",
      ],
      example: {
        title: "The lost pricing decision — an illustrative rework story",
        body: "A startup ran pricing workshops in Claude over two weeks across separate chats. No Project, no shared doc. Engineering built to $29/seat because that number appeared in the most recent thread — an abandoned brainstorm, not the approved $39 tier from week one. Stateless default + human assumption of memory = shipped wrong price. Fix: one Project with PRICING_DECISIONS.md as source of truth; all chats in that Project.",
      },
    }),
    buildGuideSection({
      id: "claude-vs-others",
      number: "1.3",
      title: "Claude vs GPT vs Gemini",
      subtitle:
        "The architectural and character differences that matter for real use — not benchmarks, but behaviour",
      takeaway:
        "Model choice is a product decision: Claude tends toward careful reasoning, long-context synthesis, and explicit refusals; GPT toward breadth and plugin ecosystem; Gemini toward Google workspace integration. Benchmarks rarely predict your workflow.",
      why: "Procurement teams pick from leaderboard scores. Practitioners pick from behaviour on their actual tasks — contract review, code refactor, campaign copy. This section is the behaviour map.",
      paragraphs: [
        [
          s("Claude is often chosen for "),
          x(
            "long-document analysis",
            "Legal, financial, and research workflows where 200k+ token context and careful tone matter.",
          ),
          s(
            ", nuanced writing, and cases where false confidence is dangerous. Teams report fewer 'made up with confidence' moments on compliance tasks — at the cost of sometimes refusing or over-hedging when pushed.",
          ),
        ],
        [
          s("GPT models excel in "),
          x("ecosystem surface area", "Plugins, Custom GPTs, wide third-party integrations, massive user community."),
          s(
            " — if your stack is already OpenAI-native (Assistants API, Azure OpenAI), switching has migration cost. Gemini's advantage is native Google Workspace, Search grounding, and Gmail/Docs adjacency.",
          ),
        ],
        [
          s("The power-user approach in 2026: "),
          x("multi-model routing", "Send easy tasks to fast/cheap models; hard reasoning to flagship models — per task, not per vendor religion."),
          s(
            ". Use Claude for draft-and-reason workflows; use others where integration wins. Your playbook library should document which surface owns which job.",
          ),
        ],
      ],
      workflowSteps: [
        "Pick 5 real tasks from your job (e.g. summarise RFC, write SQL, critique slide deck).",
        "Run identical prompts on Claude Sonnet and one alternative; score: accuracy, tone, edit time.",
        "Document winners per task type in a team MODEL_ROUTING.md — revisit quarterly.",
      ],
      example: {
        title: "Legal ops team — Claude for review, GPT for templates",
        body: "A 30-person legal ops team routes M&A contract review to Claude Opus (long context, citation-style answers). They route mail-merge style NDA variants to a faster GPT model with templating scripts. Neither vendor 'won' — task routing won. PM lesson: evals are per workflow, not per brand.",
      },
    }),
    buildGuideSection({
      id: "context-window",
      number: "1.4",
      title: "The context window as working memory",
      subtitle:
        "Why everything Claude knows in a session lives in one finite space — and why managing it is your job",
      takeaway:
        "The context window is RAM, not disk. Everything you paste, upload, and say competes for the same limited space — and quality degrades as you approach the ceiling.",
      why: "Users paste 80 PDFs and ask 'why is it forgetting instructions?' — because attention budgets are real. Managing context is the core skill of production-grade Claude use.",
      paragraphs: [
        [
          s("Claude's "),
          x(
            "context window",
            "Maximum tokens (text units) the model can consider in one request — inputs + outputs combined.",
          ),
          s(
            " defines how much text it can see at once. A 200k window sounds infinite until you attach ten annual reports, three codebases, and a full chat history. Everything counts: system prompts, tool results, hidden formatting.",
          ),
        ],
        [
          s("Performance often degrades before you hit the hard limit — the "),
          x(
            "lost in the middle",
            "Research finding: models may under-weight information buried in the middle of very long contexts.",
          ),
          s(
            " effect means critical instructions should live at the start or end of prompts, not buried page 47 of an upload.",
          ),
        ],
        [
          s("Power users run a "),
          x("context budget", "Explicit plan: X tokens for instructions, Y for sources, Z reserved for output."),
          s(
            ": attach only relevant excerpts; summarise large docs first; use Projects for stable reference material instead of re-pasting; split multi-phase work across chats with handoff summaries.",
          ),
        ],
      ],
      workflowSteps: [
        "Before each session, list what Claude must know vs nice-to-know — cut nice-to-know.",
        "Put non-negotiable rules in the first 500 words of the system prompt or opening message.",
        "At 70% of estimated context, ask Claude to summarise thread + decisions before continuing.",
      ],
      example: {
        title: "Consulting firm diligence — chunking that saved the deal",
        body: "Analysts uploaded an entire data room (400MB) to a single chat. Claude slowed, contradicted earlier findings, missed a change-of-control clause. Re-run: index documents in a Project; per-workstream chats with only 3–5 relevant files each; executive summary chat with 2-page brief only. Time to insight dropped 40%; partner trust went up because citations mapped to specific files.",
      },
    }),
    buildGuideSection({
      id: "how-trained",
      number: "1.5",
      title: "How Claude was trained",
      subtitle:
        "RLHF, Constitutional AI, and what that means for how it responds to you — the character behind the model",
      takeaway:
        "Claude's 'personality' — helpful, cautious, refusal-prone on harm — is engineered through Constitutional AI and reinforcement learning from human feedback, not accident.",
      why: "When Claude refuses or hedges, it's often doing what training optimised for. Understanding that lets you reframe prompts productively instead of fighting the model.",
      paragraphs: [
        [
          s("After initial training on text, Claude undergoes "),
          x(
            "RLHF",
            "Reinforcement Learning from Human Feedback — humans rank outputs; the model learns preferences.",
          ),
          s(
            " so human raters prefer helpful, honest, harmless answers. Anthropic's "),
          x(
            "Constitutional AI",
            "The model critiques and revises its own drafts against written principles before showing you — reducing harmful outputs without only relying on human labels.",
          ),
          s(
            " adds a layer where Claude evaluates its own drafts against principles — shaping the careful, sometimes verbose tone users recognise.",
          ),
        ],
        [
          s("This training creates predictable behaviours: Claude will often "),
          x(
            "surface uncertainty",
            "Phrases like 'it depends' or presenting multiple options — trained to reduce overconfidence.",
          ),
          s(
            ", offer balanced views on contentious topics, and refuse requests that look like harm facilitation — even when a user only wanted a security audit example.",
          ),
        ],
        [
          s("Legitimate reframes: specify role ('you are a red-team security consultant'), scope ('for authorised penetration test on my app'), and output format. You're not 'jailbreaking' — you're disambiguating intent within policy."),
        ],
      ],
      workflowSteps: [
        "When you get a refusal, ask: was intent ambiguous? Add role, audience, and legitimate use case.",
        "For nuanced work, invite Claude to state assumptions before answering — uses its caution as a feature.",
        "Log refusals in team playbook — patterns reveal prompt templates that need fixing.",
      ],
    }),
    buildGuideSection({
      id: "knowledge-cutoff",
      number: "1.6",
      title: "Claude's knowledge cutoff",
      subtitle:
        "What it knows, what it doesn't, and how to work around the gap with web search and documents",
      takeaway:
        "Parametric knowledge freezes at training time. For anything after the cutoff — or anything private — you must attach sources, enable search, or use tools.",
      why: "Hallucinated launch dates and invented API methods usually trace to cutoff gaps, not 'AI being dumb.' Architecture fixes this; yelling at the chat does not.",
      paragraphs: [
        [
          s("Claude's internal knowledge has a "),
          x(
            "training cutoff",
            "The last date of events reliably represented in weights — always verify current facts externally.",
          ),
          s(
            ". It will not reliably know last month's pricing change, yesterday's API deprecation, or your company's org chart unless you provide it.",
          ),
        ],
        [
          s("Mitigations stack: "),
          x("web search", "Claude can fetch current pages when enabled — verify citations against sources."),
          s(
            " in Claude.ai for public facts; document upload / Projects for private facts; MCP connectors for live systems (Notion, Drive, GitHub); API tool use for databases.",
          ),
        ],
        [
          s("Power-user rule: treat Claude as "),
          x("reasoning engine over provided evidence", "Strong synthesis and logic — weak as sole source of truth for fresh facts."),
          s(
            ", not oracle. Every factual claim in production workflows should trace to a source you attached or a tool result you logged.",
          ),
        ],
      ],
      workflowSteps: [
        "For time-sensitive tasks, start prompt with: 'Use web search; cite URLs; say if uncertain.'",
        "Maintain a TEAM_FACTS.md with versioned API endpoints, pricing, headcount — attach to Project.",
        "In API pipelines, inject retrieved snippets with timestamps in metadata.",
      ],
      artifact: {
        id: "cutoff-handoff-prompt",
        title: "Knowledge cutoff handoff prompt",
        description: "Paste at the start of research or strategy chats.",
        content: `You are helping with a task that may require current information.

Rules:
1. If a fact may have changed after your training cutoff, say so explicitly.
2. When web search is available, use it for: pricing, API versions, regulations, competitor features.
3. Separate "from your training" vs "from search results" vs "from attached docs".
4. If you cannot verify, recommend what the human should check.

My task: [DESCRIBE TASK]
Attached sources: [LIST OR NONE]`,
      },
    }),
    buildGuideSection({
      id: "three-models",
      number: "1.7",
      title: "The three Claude models — Haiku, Sonnet, and Opus",
      subtitle:
        "What each is built for, what each costs, and when to choose which",
      takeaway:
        "Haiku for speed and scale; Sonnet for daily professional work; Opus for hardest reasoning. Wrong model choice shows up as either wasted money or rework from shallow answers.",
      why: "Teams default to the most expensive model for everything, or the cheapest for everything — both fail. Model routing is cost engineering and quality engineering at once.",
      paragraphs: [
        [
          x("Haiku", "Fastest, lowest cost — classification, routing, high-volume extraction."),
          s(" handles triage, tagging, and simple extraction at millions of tokens. "),
          x("Sonnet", "Balanced flagship for most knowledge work — writing, analysis, code, agents."),
          s(" is the default for serious professional use. "),
          x("Opus", "Highest capability — complex reasoning, ambiguous multi-step work, highest cost."),
          s(" earns its cost when mistakes are expensive and ambiguity is high."),
        ],
        [
          s("Routing pattern: Haiku classifies incoming request → Sonnet handles 80% of work → Opus escalates on low confidence or high stakes. Same architecture customer support teams use for ticket triage, applied to model selection."),
        ],
      ],
      workflowSteps: [
        "Label last week's Claude tasks: easy / medium / hard.",
        "Map easy → Haiku, medium → Sonnet, hard → Opus for next week.",
        "Track cost per task type in a spreadsheet — adjust boundaries monthly.",
      ],
      example: {
        title: "SaaS support stack — 62% cost reduction with routing",
        body: "A 120-person SaaS routed all API calls through Opus ($15/M input). After task labelling: 55% were simple categorisation → Haiku; 35% draft responses → Sonnet; 10% escalations → Opus. Quality held (CSAT flat); inference spend dropped 62%. PM owned the routing spec, not infra magic.",
      },
    }),
    buildGuideSection({
      id: "refusals",
      number: "1.8",
      title: "Why Claude refuses things",
      subtitle:
        "The values and safety training behind refusals — and the legitimate ways to get better responses when the default is wrong",
      takeaway:
        "Refusals are often ambiguous-intent triggers, not moral judgments on your job. Clarity, professional framing, and structured scope usually unlock the work.",
      why: "Executives interpret refusals as 'we can't use AI for this.' Power users interpret them as 'my prompt looked risky.' The second group ships.",
      paragraphs: [
        [
          s("Claude is trained to refuse assistance with clear harm: weapons, exploitation, bypassing security of systems you don't own. Gray zones — security research, medical info, legal drafts — trigger refusals when "),
          x(
            "intent is unclear",
            "The model can't tell red-team audit from attack planning — same words, different legitimacy.",
          ),
          s("."),
        ],
        [
          s("Productive moves: name the authorised context ('I'm the CISO'); specify defensive purpose; request educational framing; break task into smaller non-sensitive steps; use API with system prompt in controlled enterprise environment."),
        ],
        [
          s("Document team-wide "),
          x("approved prompt patterns", "Pre-reviewed templates for recurring sensitive workflows — legal, security, HR."),
          s(
            " for security reviews, HR investigations, and medical-adjacent content — reduces random refusals and standardises quality.",
          ),
        ],
      ],
      workflowSteps: [
        "On refusal, copy the exchange to REFUSAL_LOG — note task type and fix that worked.",
        "Add role + scope + output format before retrying.",
        "For enterprise, request policy docs from Anthropic on acceptable use for your industry.",
      ],
    }),
  ],
};
