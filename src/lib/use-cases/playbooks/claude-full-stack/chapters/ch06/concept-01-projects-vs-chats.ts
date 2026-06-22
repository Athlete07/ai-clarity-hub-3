import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_01_PROJECTS_VS_CHATS: GuideConcept = {
  number: 1,
  title: "Projects vs Chats — The Fundamental Distinction",
  subtitle:
    "Understanding why Projects exist and what they change about how Claude works",
  sections: [
    buildGuideSection({
      id: "what-is-project",
      number: "1.1",
      title: "What a Project is",
      subtitle:
        "Persistent instructions, shared knowledge, and organised conversations in one container",
      takeaway:
        "A Project is a configured workspace — standing instructions plus knowledge files plus a history of conversations scoped to one purpose.",
      why: "Without Projects, every chat is a blank slate. Projects are how Claude.ai becomes a work environment instead of a search box.",
      paragraphs: [
        [
          s("A "),
          x("Project", "Claude.ai container with its own instructions, file knowledge, and conversation list."),
          s(
            " bundles three things generic chats lack: persistent instructions (system-style brief), uploaded knowledge (external memory), and organised threads under one purpose.",
          ),
        ],
        [
          s("Think workspace, not folder. A folder stores files; a Project configures how Claude behaves whenever you work inside it."),
        ],
      ],
      workflowSteps: [
        "Open Projects sidebar — list your active workstreams.",
        "For each recurring workstream, ask: does this deserve a Project?",
        "Name Projects by outcome (Client_Acme) not by date.",
      ],
    }),
    buildGuideSection({
      id: "chats-vs-projects",
      number: "1.2",
      title: "Chats vs Projects",
      subtitle:
        "The difference that matters — ephemeral vs persistent, one-off vs ongoing, generic vs configured",
      takeaway:
        "Chats are disposable sessions. Projects are configured environments where Claude already knows the rules, files, and scope.",
      why: "Mixing them up means re-pasting instructions daily or polluting Projects with one-off trivia.",
      paragraphs: [
        [
          s("Chat: default Claude, no Project files, instructions only from global prefs/memory. Project: instructions + knowledge apply to every new conversation inside."),
        ],
        [
          s("Ephemeral vs persistent: chat context dies with the thread. Project instructions and files persist until you change them (Chapter 5 memory layers)."),
        ],
      ],
      workflowSteps: [
        "Default to chat only for <5 minute tasks.",
        "Create Project when you have said the same preamble twice.",
        "Never mix unrelated clients in one Project.",
      ],
      example: {
        title: "Consultant — chat sprawl vs Project discipline",
        body: "Before Projects: 40 chats named 'quick question'. Re-uploaded SOW weekly. After: one Project per client with SOW, tone guide, and deliverable templates. New chat inside Project starts configured — 15 minutes saved per session.",
      },
    }),
    buildGuideSection({
      id: "when-use-chat",
      number: "1.3",
      title: "When to use a chat",
      subtitle:
        "The task types that don't justify a Project — quick questions, one-time documents, exploratory thinking",
      takeaway:
        "Use a plain chat for one-off, low-stakes, exploratory work with no recurring context — don't create Project overhead for trivia.",
      why: "Project sprawl is as bad as chat sprawl. Reserve Projects for compounding value.",
      paragraphs: [
        [
          s("Good chat tasks: single factual question, one-time rewrite, brainstorm with no client data, trying Claude for the first time on a topic you'll never revisit."),
        ],
        [
          s("Signals to stay in chat: no files to reuse, no standing rules, no second session expected, sensitive client boundary not needed."),
        ],
      ],
      workflowSteps: [
        "Ask: will I do this again with same context?",
        "If no → chat. If maybe → note for Project decision next time.",
        "Delete or archive exploratory chats — don't promote junk to Projects.",
      ],
    }),
    buildGuideSection({
      id: "when-create-project",
      number: "1.4",
      title: "When to create a Project",
      subtitle:
        "The task types that compound in value with persistent context — roles, clients, domains, recurring workflows",
      takeaway:
        "Create a Project when context compounds: same role, client, domain, or workflow across multiple sessions.",
      why: "Compound tasks are where Projects pay back setup time in the first week.",
      paragraphs: [
        [
          s("Create when: recurring deliverables, shared team context, attached reference docs, role-specific voice, multi-week initiatives, client-bound work."),
        ],
        [
          s("Rule of thumb: second time you paste the same background → create Project before third time."),
        ],
      ],
      workflowSteps: [
        "Track 're-paste count' for a week.",
        "Any task with re-paste ≥2 → Project candidate.",
        "Bootstrap from best prior chat — extract instructions into Project.",
      ],
      artifact: {
        id: "project-vs-chat-checklist",
        title: "Project vs chat decision",
        content: `CREATE PROJECT if 2+ true:
□ Same context next week
□ Team needs shared setup
□ Files re-uploaded regularly
□ Standing output format/rules
□ Client/domain boundary matters

USE CHAT if all false OR one-off exploratory`,
      },
    }),
    buildGuideSection({
      id: "project-instructions-deep",
      number: "1.5",
      title: "Project instructions",
      subtitle:
        "The system prompt you write once that shapes every conversation inside the Project forever",
      takeaway:
        "Project instructions are the persistent system layer — role, scope, output defaults, and rules applied to every new chat in the Project.",
      why: "This is the highest-leverage text in Claude.ai for recurring work. Underwritten instructions waste every future session.",
      paragraphs: [
        [
          s("Include: purpose, audience, must-read files, output format, escalation rules, prohibited actions. Exclude: entire corp wiki — link or attach instead (Chapter 2 token economics)."),
        ],
        [
          s("Instructions stack with global user preferences — resolve conflicts by making Project rules explicit: 'Project rules override general brevity prefs for this work.'"),
        ],
      ],
      workflowSteps: [
        "Draft instructions using template (Concept 2.1).",
        "Test with 3 minimal user messages — behaviour should hold.",
        "Version instructions in attached INSTRUCTIONS_v1.md.",
      ],
    }),
    buildGuideSection({
      id: "project-knowledge-deep",
      number: "1.6",
      title: "Project knowledge",
      subtitle:
        "The documents, files, and context you upload that Claude can access in every Project conversation",
      takeaway:
        "Project knowledge is shared external memory — every chat in the Project can draw on the same curated files without re-upload.",
      why: "Knowledge files are the evidence layer for native RAG (Chapter 5). Garbage uploads = garbage retrieval.",
      paragraphs: [
        [
          s("Upload: canonical specs, brand guides, contracts, INDEX.md, prompt templates. Format for retrieval — headings, summaries, stable filenames."),
        ],
        [
          s("Maintain an INDEX in knowledge: what's each file, when updated, when to use. Owner reviews monthly."),
        ],
      ],
      workflowSteps: [
        "Add INDEX.md as first knowledge file.",
        "Cap active corpus — archive stale files.",
        "Run 5 retrieval test questions after each upload batch.",
      ],
    }),
    buildGuideSection({
      id: "project-conversations",
      number: "1.7",
      title: "Project conversations",
      subtitle:
        "How multiple conversations inside one Project share the same configured Claude",
      takeaway:
        "Each conversation in a Project is a separate thread but shares instructions and knowledge — use multiple chats for parallel workstreams, not one zombie thread.",
      why: "One mega-thread dilutes context. Multiple Project chats give clean in-context memory with shared configuration.",
      paragraphs: [
        [
          s("Pattern: one chat per deliverable or per week — all inherit Project setup. Cross-chat continuity via STATE.md in knowledge, not message history."),
        ],
        [
          s("Naming chats inside Projects: '2025-06 PRD draft' not 'Chat 47' — future you will thank you."),
        ],
      ],
      workflowSteps: [
        "Start new Project chat when scope shifts.",
        "Link related chats in STATE.md.",
        "End chats with handoff block (Chapter 5 artifact).",
      ],
    }),
    buildGuideSection({
      id: "project-design-mindset",
      number: "1.8",
      title: "The Project design mindset",
      subtitle:
        "Thinking of Projects as configured environments rather than folders — the shift that unlocks their value",
      takeaway:
        "Design Projects like products: purpose, users, knowledge, instructions, tests, and owners — not like dumping grounds for random uploads.",
      why: "Folder mindset produces stale files and ignored instructions. Environment mindset produces reliable configured Claude.",
      paragraphs: [
        [
          s("Ask when designing: Who works here? What decisions happen here? What must Claude never do? What does done look like? How do we test configuration?"),
        ],
        [
          s("A well-designed Project reduces prompt length in every chat — the environment does the heavy lifting."),
        ],
      ],
      workflowSteps: [
        "Write one-paragraph Project charter before first upload.",
        "Define 5 canonical test prompts.",
        "Review Project monthly like a product backlog.",
      ],
      example: {
        title: "PM — Product Area X Project as OS",
        body: "PM treated Project as product OS: PRD template in knowledge, eng glossary, decision log, instructions for RFC format. Every spec chat started configured. Eng feedback: 'Claude finally sounds like it works here.'",
      },
    }),
  ],
};
