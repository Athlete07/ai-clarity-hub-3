import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_02_ARTIFACT_SYSTEM: GuideConcept = {
  number: 2,
  title: "The Artifact System",
  subtitle:
    "Claude's output layer — how artifacts work, what they enable, and how to use them as a workflow tool",
  sections: [
    buildGuideSection({
      id: "what-is-artifact",
      number: "2.1",
      title: "What an artifact is",
      subtitle:
        "The separate output panel that makes Claude's work reusable rather than ephemeral",
      takeaway:
        "An artifact is a durable object beside the chat — edit, copy, and export without losing it in message scrollback.",
      why: "Chat-only workflows treat great outputs as disposable; artifacts turn responses into assets.",
      paragraphs: [
        [
          s("When Claude creates an "),
          x("artifact", "A side-panel deliverable — code, document, diagram, or interactive app — versioned in the conversation."),
          s(
            ", it lives outside the message stream. You can iterate, select all, download, and sometimes share without re-prompting the entire thread.",
          ),
        ],
        [
          s("Mental model: chat is the negotiation; artifact is the deliverable."),
        ],
      ],
      workflowSteps: [
        "Next build task, ask: 'Put the final output in an artifact.'",
        "Name the artifact in your prompt (e.g. 'PRD artifact v1').",
        "Copy to your repo/Notion from the panel, not from chat markdown.",
      ],
    }),
    buildGuideSection({
      id: "artifact-types",
      number: "2.2",
      title: "Artifact types",
      subtitle:
        "Code, markdown, HTML, React, SVG, Mermaid — what each is for and when Claude creates them",
      takeaway:
        "Match artifact type to downstream tool — markdown for docs, code for repos, React for interactive prototypes.",
      why: "Asking for React when you need a Word-ready memo wastes iteration cycles.",
      paragraphs: [
        [
          s("Common types: "),
          x("markdown", "Docs, specs, checklists — paste anywhere."),
          s(", code files (syntax-highlighted), "),
          x("HTML", "Static pages and simple UIs."),
          s(", "),
          x("React", "Interactive components in Claude's sandbox."),
          s(", SVG/Mermaid for diagrams."),
        ],
        [
          s("Prompt explicitly: 'Use a Mermaid artifact for the flow, markdown for the spec.' Claude picks type from task cues unless you override."),
        ],
      ],
      workflowSteps: [
        "Define default type per task in your Project README.",
        "Request diagram type upfront for architecture work.",
        "For code, specify language and file extension in the prompt.",
      ],
    }),
    buildGuideSection({
      id: "editing-artifacts",
      number: "2.3",
      title: "Editing artifacts",
      subtitle:
        "How to iterate on an artifact without restarting — the in-place editing workflow",
      takeaway:
        "Iterate on the artifact object — 'edit section 3' or 'change the chart labels' — not the whole conversation from scratch.",
      why: "Restarting threads loses constraints; artifact iteration preserves structure while refining content.",
      paragraphs: [
        [
          s("You can edit artifacts directly in the panel or ask Claude to modify specific sections. Reference the artifact by name or section heading."),
        ],
        [
          s("Pattern: v1 artifact → review → 'In the artifact, tighten the executive summary and add a risks table' → v2 in same panel."),
        ],
      ],
      workflowSteps: [
        "Review artifact before replying in chat.",
        "Give surgical edits, not 'try again'.",
        "Snapshot externally before major rewrites.",
      ],
      example: {
        title: "PM — spec iteration without thread rot",
        body: "A PM kept a PRD in a markdown artifact through twelve revision rounds. Chat held decisions; artifact held the doc. Exec review used exported PDF from the artifact, not chat copy-paste.",
      },
    }),
    buildGuideSection({
      id: "download-export",
      number: "2.4",
      title: "Downloading and exporting artifacts",
      subtitle:
        "Getting Claude's work out of the interface and into your tools",
      takeaway:
        "Export early and often — artifacts are not your system of record until they live in git, Drive, or your wiki.",
      why: "Account limits, accidental deletion, and thread clutter make the interface a poor archive.",
      paragraphs: [
        [
          s("Use copy, download, or export actions on the artifact panel. For code, paste into your IDE or download as files. For markdown, push to Notion/GitHub with your normal workflow."),
        ],
        [
          s("Establish a naming convention: YYYY-MM-DD_artifact-name_v3.md"),
        ],
      ],
      workflowSteps: [
        "After each approved version, export to canonical storage.",
        "Link exported file in Project instructions.",
        "Never treat Claude as sole backup for client deliverables.",
      ],
    }),
    buildGuideSection({
      id: "persistent-artifact-storage",
      number: "2.5",
      title: "Artifacts with persistent storage",
      subtitle:
        "How artifacts can store and retrieve data across sessions — the feature most users haven't found",
      takeaway:
        "Some artifact flows support state across turns or sessions — treat as lightweight app memory, not a database.",
      why: "Trackers and dashboards fail when users don't realise data must be re-loaded or saved explicitly.",
      paragraphs: [
        [
          s("Interactive artifacts (especially React) can hold "),
          x("in-session state", "User inputs, lists, or calculations persisted while the artifact or chat remains active."),
          s(
            ". Cross-session persistence depends on product behaviour — verify what's saved when you return tomorrow.",
          ),
        ],
        [
          s("For durable data: export JSON/CSV from the artifact or sync to your tools via MCP/API — don't rely on chat persistence alone."),
        ],
      ],
      workflowSteps: [
        "Test: close tab, reopen — what survives?",
        "Document persistence limits in your team wiki.",
        "Use Projects for data that must survive weeks.",
      ],
    }),
    buildGuideSection({
      id: "react-mini-apps",
      number: "2.6",
      title: "React artifacts as mini-applications",
      subtitle:
        "Building interactive tools inside Claude — calculators, dashboards, trackers",
      takeaway:
        "React artifacts are prototypes in minutes — calculators, scenario models, approval checklists with UI.",
      why: "Stakeholders understand a clickable model faster than a wall of text.",
      paragraphs: [
        [
          s("Ask Claude to build a "),
          x("React artifact", "Runs in Claude's preview sandbox — not production hosting."),
          s(
            " with explicit inputs, validation, and labels. Great for finance scenarios, prioritisation matrices, and training simulators.",
          ),
        ],
        [
          s("Limits: not for production auth, PII, or scale. Export logic to your codebase when validated."),
        ],
      ],
      workflowSteps: [
        "Specify inputs, outputs, and one example calculation.",
        "Request 'all assumptions visible in UI'.",
        "Screenshot + export code when stakeholders sign off.",
      ],
      example: {
        title: "Ops lead — pricing scenario calculator",
        body: "Built a React artifact with three levers (volume, discount, churn). Leadership changed assumptions live in a meeting — no spreadsheet email thread.",
      },
    }),
    buildGuideSection({
      id: "sharing-artifacts",
      number: "2.7",
      title: "Sharing artifacts",
      subtitle:
        "How to share Claude's outputs with collaborators who don't have Claude",
      takeaway:
        "Share exports and links per Anthropic's sharing features — assume recipients need static files, not live artifacts.",
      why: "Collaborators without accounts need PDF, PNG, or repo links — not 'open my chat'.",
      paragraphs: [
        [
          s("Use share links when available; otherwise export markdown/PDF/code zip. Redact sensitive data before sharing — artifacts may embed details from your uploads."),
        ],
      ],
      workflowSteps: [
        "Export approved version before sharing.",
        "Redact client names if needed.",
        "Prefer repo/Notion link as canonical over share link expiry.",
      ],
    }),
    buildGuideSection({
      id: "artifact-workflow-mindset",
      number: "2.8",
      title: "The artifact workflow mindset",
      subtitle:
        "Using artifacts as deliverables, not just outputs — the shift that changes how you assign work to Claude",
      takeaway:
        "Assign Claude deliverables with artifact type, acceptance criteria, and export path — same as a human contractor.",
      why: "Teams that say 'write me X' without artifact discipline get chat prose they can't ship.",
      paragraphs: [
        [
          s("Template every assignment: artifact type, structure, done-when checklist, export destination. Chat is for questions; artifact is what you ship."),
        ],
      ],
      workflowSteps: [
        "Rewrite top 3 recurring tasks as artifact briefs.",
        "Add 'Definition of done' to each brief.",
        "Review exports in standup, not chat scrollback.",
      ],
      artifact: {
        id: "artifact-assignment-brief",
        title: "Artifact assignment brief",
        content: `DELIVERABLE: [name]
TYPE: [markdown | code | React | Mermaid]
STRUCTURE: [sections / files]
ACCEPTANCE:
- [ ] Matches template
- [ ] No placeholder text
- [ ] Exported to [path]
CHAT: Questions only — final work lives in artifact.`,
      },
    }),
  ],
};
