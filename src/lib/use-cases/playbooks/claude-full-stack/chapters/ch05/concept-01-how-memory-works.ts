import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_01_HOW_MEMORY_WORKS: GuideConcept = {
  number: 1,
  title: "How Claude's Memory Actually Works",
  subtitle:
    "The architecture behind what Claude remembers — and the consequences of each layer for how you work",
  sections: [
    buildGuideSection({
      id: "four-memory-layers",
      number: "1.1",
      title: "The four memory layers",
      subtitle:
        "In-context, external storage, memory system, and project instructions — what each does and who controls it",
      takeaway:
        "Claude memory is not one thing — it is four layers: the live conversation window, uploaded documents, Claude's optional memory feature, and Project-level instructions. Each has different persistence, cost, and control.",
      why: "Teams conflate 'Claude remembered' with the wrong layer and build workflows that break when context shifts. Layer literacy is architecture literacy.",
      paragraphs: [
        [
          s(""),
          x("In-context", "Messages and attachments in the current thread — ephemeral when the window fills or the chat ends."),
          s(" is what Claude sees right now. "),
          x("External storage", "Files in Projects, uploads, MCP-connected systems — you manage what gets attached."),
          s(" is evidence you provide. "),
          x("Memory system", "Claude.ai feature that stores facts about you across chats — editable by you."),
          s(" is selective persistence. "),
          x("Project instructions", "Persistent system-style brief for every chat in a Project."),
          s(" is team-scoped policy and context."),
        ],
        [
          s("You control external storage and Project instructions directly. Memory system is semi-automatic — review it. In-context is automatic but finite."),
        ],
      ],
      workflowSteps: [
        "Map your top 10 facts to a layer: in-context / file / memory / Project.",
        "Nothing critical should live only in in-context.",
        "Document the map in PROJECT_MEMORY.md.",
      ],
      artifact: {
        id: "memory-layer-map",
        title: "Memory layer decision map",
        content: `IN-CONTEXT → session decisions, draft text, this-thread reasoning
EXTERNAL FILES → specs, contracts, data room, codebase exports
MEMORY SYSTEM → stable prefs (role, tools, standing constraints)
PROJECT INSTRUCTIONS → team policy, voice, scope, links to canonical docs

Rule: if losing the chat would hurt → move up a layer.`,
      },
    }),
    buildGuideSection({
      id: "in-context-memory",
      number: "1.2",
      title: "In-context memory",
      subtitle:
        "Everything in the current conversation window — what it holds, how long it lasts, and when it is lost",
      takeaway:
        "In-context is Claude's working RAM — fast, rich, and fragile. It includes messages, tool results, and attachments until the context limit is hit or the chat is abandoned.",
      why: "Chapter 1 established stateless defaults. In-context is the only 'memory' in a single API call — everything else you engineer.",
      paragraphs: [
        [
          s("Everything sent in the thread competes for the same "),
          x("attention budget", "Finite tokens — older content may be truncated or deprioritised as the thread grows."),
          s(". Long threads degrade: early instructions weaken, middle documents suffer lost-in-the-middle effects (Concept 2.2)."),
        ],
        [
          s("In-context is lost when: you start a new chat, the window overflows, or you switch Projects without carrying summaries. Power users distill state before loss."),
        ],
      ],
      workflowSteps: [
        "Monitor thread length on multi-day work — restart with handoff summary at ~60% felt capacity.",
        "Pin critical constraints in the latest message, not only message one.",
        "Use SESSION_STATE.md in Project for continuity across chats.",
      ],
      example: {
        title: "Legal review — 180-message thread collapse",
        body: "A team ran contract redlines in one chat for two weeks. Message 1 contained scope limits; by message 150 Claude suggested clauses outside mandate. Fix: weekly new chat with distilled OPEN_ISSUES.md + only active sections attached.",
      },
    }),
    buildGuideSection({
      id: "memory-system",
      number: "1.3",
      title: "Claude's memory system",
      subtitle:
        "What gets saved, how to view it, how to edit it, and how it surfaces in future conversations",
      takeaway:
        "Claude.ai memory stores inferred facts about you — useful for continuity, dangerous if wrong. You can view, edit, and delete memories; treat them like a profile you'd audit quarterly.",
      why: "Unreviewed memories become confident wrong callbacks. Memory is not a substitute for canonical docs.",
      paragraphs: [
        [
          s("Memory captures preferences and recurring context Claude infers from chats — not full transcripts. It surfaces in new conversations as background, similar to a lightweight user model."),
        ],
        [
          s("Audit memory after role changes, company pivots, or tool switches. Delete stale entries ('you prefer Opus for everything'). Prefer Project files for factual corp data over memory."),
        ],
      ],
      workflowSteps: [
        "Settings → Memory: read all entries monthly.",
        "Delete anything project-specific or outdated.",
        "Add critical standing facts manually if the product allows.",
      ],
    }),
    buildGuideSection({
      id: "project-instructions",
      number: "1.4",
      title: "Project instructions as persistent context",
      subtitle:
        "The system prompt layer that persists across every conversation in a project",
      takeaway:
        "Project instructions are the persistent brief for a workspace — scope, rules, links, and tone that apply to every new chat in that Project without re-pasting.",
      why: "This is the closest Claude.ai gets to a system prompt. Under-invested Projects behave like amnesiac assistants.",
      paragraphs: [
        [
          s("Put here: what this Project is for, canonical file names, approval rules, output defaults, links to repo/wiki. Keep lean — link to large docs rather than paste them (Chapter 2 token economics)."),
        ],
        [
          s("Project instructions + attached knowledge files = "),
          x("persistent context layer", "Survives new chats within the Project — not across unrelated Projects."),
          s(". Different Projects = different memory boundaries (client A vs client B)."),
        ],
      ],
      workflowSteps: [
        "One Project per client, product, or major initiative.",
        "Instructions under 400 words; details in attached INDEX.md.",
        "Review instructions when scope changes — version in filename.",
      ],
      artifact: {
        id: "project-instructions-template",
        title: "Project instructions template",
        content: `PURPOSE: [what this Project is for]
SCOPE: [in / out]
CANONICAL FILES: [list with one-line description each]
OUTPUT DEFAULTS: [format, tone, length]
RULES: [3–5 non-negotiables]
ESCALATION: [when to ask human before acting]`,
      },
    }),
    buildGuideSection({
      id: "external-memory-docs",
      number: "1.5",
      title: "External memory via documents",
      subtitle:
        "Uploading files as external memory — what Claude can retrieve and how accurately",
      takeaway:
        "Uploaded files are external memory — Claude reads them in context, not from a perfect database. Retrieval quality depends on structure, positioning, and question clarity.",
      why: "Uploading a 400-page PDF without structure is hope, not architecture. Document design is memory design.",
      paragraphs: [
        [
          s("Claude processes uploaded text into the context window — it does not magically index every page for selective lookup unless you use tools/MCP or structure prompts for retrieval (Concept 3)."),
        ],
        [
          s("Accuracy improves with: clear headings, tables of contents, chunking large files, and explicit 'answer only from section X' instructions."),
        ],
      ],
      workflowSteps: [
        "Prepend TOC to long PDFs before upload.",
        "Split multi-topic dumps into named files.",
        "Ask Claude to quote supporting passages — verify against source.",
      ],
    }),
    buildGuideSection({
      id: "memory-across-conversations",
      number: "1.6",
      title: "Memory across conversations",
      subtitle:
        "Why Claude starts fresh and the three ways to give it continuity",
      takeaway:
        "New chat = cold start unless you inject continuity via Project context, handoff summaries, or API session stores.",
      why: "Assuming cross-chat memory causes duplicated work and contradictory decisions.",
      paragraphs: [
        [
          s("Three continuity patterns: (1) "),
          x("Project persistence", "Instructions + files travel with every new chat in the Project."),
          s(", (2) "),
          x("handoff summaries", "End each session with STATE.md; start next with 'read and confirm'."),
          s(", (3) "),
          x("API session store", "Your backend saves summary + key facts per user_id; inject each request."),
        ],
      ],
      workflowSteps: [
        "Pick one primary continuity pattern per workstream.",
        "Never rely on Claude memory alone for decisions.",
        "Template handoff block in Chapter 1 artifact.",
      ],
    }),
    buildGuideSection({
      id: "memory-for-teams",
      number: "1.7",
      title: "Memory for teams",
      subtitle:
        "How shared Projects give teams shared context without each member re-explaining everything",
      takeaway:
        "Team Projects are shared external memory — onboarding docs, approved prompts, client context — so new chats inherit org knowledge, not individual folklore.",
      why: "Without shared Projects, every hire re-uploads the same PDFs and re-explains brand voice.",
      paragraphs: [
        [
          s("Claude Team enables shared Projects with role-appropriate access. Treat each shared Project as a "),
          x("team knowledge capsule", "Indexed instructions + files + optional chat history within Project."),
          s(" — not a dumping ground for every file."),
        ],
        [
          s("Assign Project owners: curate files quarterly, prune stale instructions, document what belongs here vs in the wiki."),
        ],
      ],
      workflowSteps: [
        "Create TEAM_HQ Project with onboarding README.",
        "Migrate top 5 re-uploaded files into shared Project once.",
        "Ban 'ask Sarah' — link to Project instead.",
      ],
      example: {
        title: "Agency — client Projects as memory boundary",
        body: "Each client Project: scope doc, brand guide, banned phrases, active campaign artifacts. Account managers start chats inside client Project — no cross-client bleed. New hire productive day one by reading Project INDEX.",
      },
    }),
    buildGuideSection({
      id: "memory-design-decision",
      number: "1.8",
      title: "The memory design decision",
      subtitle:
        "Choosing the right memory layer for each piece of information — the architecture mindset",
      takeaway:
        "For every fact, ask: volatility, sensitivity, audience, and retrieval frequency — then assign a layer. Memory design is explicit, not accidental.",
      why: "Random layer choice creates cost (token bloat), risk (wrong client data), and confusion (stale memory).",
      paragraphs: [
        [
          s("Volatile (changes weekly) → in-context or short-lived files, not memory system. Stable policy → Project instructions. Personal preference → memory or user prefs. Sensitive → external with access control, never public chat links."),
        ],
        [
          s("High-frequency retrieval across many chats → Project file with good structure. One-off analysis → attach, extract conclusions to canonical doc, detach."),
        ],
      ],
      workflowSteps: [
        "Run memory design review when starting a new initiative.",
        "Document layer choices in Project README.",
        "Re-review when team complains 'Claude forgot' — usually wrong layer.",
      ],
      artifact: {
        id: "memory-design-worksheet",
        title: "Memory design worksheet (per fact)",
        content: `Fact: _______________
Volatility: [daily / weekly / stable]
Sensitivity: [public / internal / confidential]
Audience: [solo / team / org]
Frequency needed: [every chat / weekly / once]

→ Layer: [in-context | file | memory | Project instructions]
→ Owner: _______________
→ Review date: _______________`,
      },
    }),
  ],
};
