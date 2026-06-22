import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_02_DESIGNING_PROJECTS: GuideConcept = {
  number: 2,
  title: "Designing Projects Like a Power User",
  subtitle:
    "The craft of building Projects that deliver consistent, high-quality output without re-explaining yourself",
  sections: [
    buildGuideSection({
      id: "instruction-template",
      number: "2.1",
      title: "The Project instruction template",
      subtitle:
        "The structure that covers role, context, constraints, output format, and behaviour — the components of an effective system prompt",
      takeaway:
        "Effective Project instructions follow a fixed skeleton: purpose, role, knowledge map, constraints, output format, behaviour rules, escalation.",
      why: "Incomplete instructions produce inconsistent chats. Template ensures nothing critical is omitted.",
      paragraphs: [
        [
          s("Sections: PURPOSE (one line), ROLE (optional), KNOWLEDGE MAP (which files when), CONSTRAINTS (must/must not), OUTPUT (format defaults), BEHAVIOUR (tone, cite rules), ESCALATION (when to ask human)."),
        ],
      ],
      workflowSteps: [
        "Copy template artifact into new Project.",
        "Fill in 20 minutes — don't over-write.",
        "Test before uploading large knowledge.",
      ],
      artifact: {
        id: "project-instruction-template",
        title: "Project instruction template",
        content: `PURPOSE: [one sentence]
ROLE: [optional expertise frame]
KNOWLEDGE MAP:
- [FILE_A]: use for [questions]
- [FILE_B]: use for [questions]
CONSTRAINTS:
- MUST: [...]
- MUST NOT: [...]
OUTPUT: [default format, length, artifact preference]
BEHAVIOUR: [cite rules, uncertainty handling]
ESCALATION: [when to stop and ask]`,
      },
    }),
    buildGuideSection({
      id: "role-project",
      number: "2.2",
      title: "Writing your role Project",
      subtitle:
        "The Claude configured to think, write, and respond like your ideal professional counterpart — for your specific job",
      takeaway:
        "A role Project encodes how you work — deliverables, stakeholders, jargon, quality bar — so Claude matches your job, not generic assistant mode.",
      why: "One role Project becomes your daily driver; global prefs stay minimal.",
      paragraphs: [
        [
          s("PM role Project: PRD structure, prioritisation frameworks, stakeholder map, 'flag eng feasibility', sample good spec in knowledge. Founder role: investor update format, metrics definitions, board tone."),
        ],
        [
          s("Keep role Project free of client-specific data — use separate client Projects for boundary."),
        ],
      ],
      workflowSteps: [
        "List top 5 weekly deliverables.",
        "Attach one exemplar per deliverable.",
        "Instructions: default output per deliverable type.",
      ],
      example: {
        title: "Engineering manager — role Project",
        body: "Knowledge: team charter, on-call runbook, RFC template, architecture principles. Instructions: prefer bullet RFCs, cite files, never approve prod changes. Daily standup prep and incident timelines in configured voice.",
      },
    }),
    buildGuideSection({
      id: "client-project",
      number: "2.3",
      title: "Writing a client Project",
      subtitle:
        "A Claude configured with everything it needs to know about a specific client or account",
      takeaway:
        "Client Projects isolate boundary: SOW, contacts, tone, banned topics, active deliverables — zero cross-client bleed.",
      why: "Cross-client contamination is a confidentiality and quality failure.",
      paragraphs: [
        [
          s("Knowledge: SOW, brand guide, org chart, decision log, active timeline. Instructions: client voice, approval chain, what is off-limits."),
        ],
        [
          s("Never use client Project for another client's work — duplicate template, swap knowledge."),
        ],
      ],
      workflowSteps: [
        "Clone CLIENT_TEMPLATE Project.",
        "Upload SOW + brand on day one.",
        "Archive Project at engagement end — export knowledge to CRM.",
      ],
    }),
    buildGuideSection({
      id: "domain-project",
      number: "2.4",
      title: "Writing a domain Project",
      subtitle:
        "A Claude configured with deep knowledge of a specific subject area — law, finance, medicine, engineering",
      takeaway:
        "Domain Projects hold reference corpora and domain rules — not for one client, but for a field you work in repeatedly.",
      why: "Domain depth requires curated knowledge + retrieval constitution (Chapter 5 KB pattern).",
      paragraphs: [
        [
          s("Examples: tax research Project with IRC summaries, clinical guidelines Project with citation rules, security review Project with OWASP checklist."),
        ],
        [
          s("Always include disclaimer in instructions: assistive research, not professional advice — human sign-off required."),
        ],
      ],
      workflowSteps: [
        "Define domain scope narrowly.",
        "Upload primary sources, not blog summaries.",
        "Canonical Q test set before relying on answers.",
      ],
    }),
    buildGuideSection({
      id: "workflow-project",
      number: "2.5",
      title: "Writing a workflow Project",
      subtitle:
        "A Claude configured to execute a specific recurring process — content production, code review, analysis",
      takeaway:
        "Workflow Projects encode a process: steps, templates, QA checks, and handoff format — Claude executes the SOP, not ad hoc magic.",
      why: "Recurring processes deserve Project + prompt templates (Chapter 4) baked into instructions.",
      paragraphs: [
        [
          s("Content workflow: brief template, brand rules, SEO checklist, artifact export SOP. Code review: style guide, security checklist, output format for findings."),
        ],
        [
          s("Link workflow Project instructions to saved prompt templates in knowledge/PROMPTS.md."),
        ],
      ],
      workflowSteps: [
        "Document SOP as numbered steps in instructions.",
        "Attach blank templates for each step output.",
        "Run end-to-end dry run; fix instruction gaps.",
      ],
      artifact: {
        id: "workflow-project-sop",
        title: "Workflow Project SOP block",
        content: `WORKFLOW: [name]
TRIGGER: [when to start new chat]
STEPS:
1. [input required] → [output artifact]
2. ...
QA: [checklist before done]
HANDOFF: [where output is filed]`,
      },
    }),
    buildGuideSection({
      id: "knowledge-curation",
      number: "2.6",
      title: "Project knowledge curation",
      subtitle:
        "What to upload, how to format it, and how to keep it current — the knowledge management discipline",
      takeaway:
        "Curate knowledge like a librarian: INDEX, owners, review dates, chunking, deprecation — not infinite upload.",
      why: "Stale or chaotic knowledge degrades retrieval and trust.",
      paragraphs: [
        [
          s("Upload criteria: canonical, current, referenced repeatedly, structured. Reject: duplicates, superseded versions, unlabelled dumps."),
        ],
        [
          s("Monthly curation: archive old versions, update INDEX, run 5 retrieval tests."),
        ],
      ],
      workflowSteps: [
        "Filename: TOPIC_vDATE_owner.ext",
        "INDEX row per file with review date.",
        "Delete from Project when canonical source moves to wiki.",
      ],
    }),
    buildGuideSection({
      id: "testing-instructions",
      number: "2.7",
      title: "Testing and iterating Project instructions",
      subtitle:
        "How to evaluate whether your Project is configured correctly and how to improve it systematically",
      takeaway:
        "Test Projects with canonical prompts and a rubric — iterate instructions, not random chats, when behaviour drifts.",
      why: "Untested Projects decay silently as models and tasks evolve.",
      paragraphs: [
        [
          s("Canonical set: 5–10 prompts representing real work. Score: format compliance, cite accuracy, tone, constraint adherence. Change one instruction variable per iteration."),
        ],
        [
          s("Log instruction versions — what changed, test result delta (Chapter 4 prompt version control)."),
        ],
      ],
      workflowSteps: [
        "Run canonical set after any instruction edit.",
        "Require 90% pass before team rollout.",
        "File failures as instruction bugs, not user error.",
      ],
    }),
    buildGuideSection({
      id: "project-portfolio",
      number: "2.8",
      title: "The Project portfolio",
      subtitle:
        "Managing multiple Projects for different roles, clients, and domains — the organisational system for a power user",
      takeaway:
        "Portfolio view: role Project (daily), client Projects (bounded), domain Projects (reference), workflow Projects (process) — naming convention and review cadence.",
      why: "Without portfolio discipline, power users drown in 30 half-configured Projects.",
      paragraphs: [
        [
          s("Naming: [TYPE]_[NAME] — e.g. ROLE_PM, CLIENT_Acme, DOMAIN_Tax, WF_ContentWeekly. Pin 3–5 active; archive rest."),
        ],
        [
          s("Quarterly portfolio review: archive completed clients, merge duplicate domain Projects, refresh role Project exemplars."),
        ],
      ],
      workflowSteps: [
        "Maintain PROJECTS.md dashboard in role Project.",
        "Cap active client Projects at your mental load.",
        "Archive with export — never delete blindly.",
      ],
      artifact: {
        id: "project-portfolio-dashboard",
        title: "Project portfolio dashboard",
        content: `| Project | Type | Owner | Last reviewed | Status |
|---------|------|-------|---------------|--------|
| ROLE_PM | role | me | 2025-06-01 | active |
| CLIENT_X | client | me | 2025-06-15 | active |

Rules: max 8 active; review monthly; archive client on close`,
      },
    }),
  ],
};
