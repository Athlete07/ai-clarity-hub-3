import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_03_SHARED_PROJECTS: GuideConcept = {
  number: 3,
  title: "Shared Projects & Team Collaboration",
  subtitle:
    "How Projects work across teams — the collaboration patterns that give everyone access to the same configured Claude",
  sections: [
    buildGuideSection({
      id: "sharing-mechanics",
      number: "3.1",
      title: "Sharing a Project with teammates",
      subtitle:
        "The mechanics, the permissions, and the collaboration patterns",
      takeaway:
        "Shared Projects on Claude Team give teammates the same instructions and knowledge — permissions depend on org admin settings; treat sharing as publishing configured Claude.",
      why: "Sharing without governance creates conflicting uploads and instruction edits.",
      paragraphs: [
        [
          s("Mechanics: create Project, invite team or org per Claude Team features, members start chats inside shared container. They inherit instructions + knowledge; individual chats remain private unless exported."),
        ],
        [
          s("Patterns: read-only knowledge for most, 1–2 instruction editors, separate chats per person per deliverable."),
        ],
      ],
      workflowSteps: [
        "Confirm Team plan supports shared Projects.",
        "Assign Project owner before inviting.",
        "Document sharing rules in Project INDEX.",
      ],
    }),
    buildGuideSection({
      id: "shared-instructions-standards",
      number: "3.2",
      title: "Shared Project instructions as team standards",
      subtitle:
        "How a shared Project creates consistent output quality across a team",
      takeaway:
        "Shared instructions are team standards in executable form — voice, format, compliance rules everyone inherits.",
      why: "Standards in Google Docs are ignored; standards in Project instructions show up in every chat.",
      paragraphs: [
        [
          s("Encode: brand voice, citation rules, approval language, prohibited claims, default artifact types. Align with Chapter 4 prompt library — Project is the delivery layer."),
        ],
        [
          s("Change management: announce instruction updates in Slack; version INSTRUCTIONS file; run canonical test set after edits."),
        ],
      ],
      workflowSteps: [
        "Draft instructions with leads from each function.",
        "Pilot with 3 users for one week.",
        "Publish v1 with changelog.",
      ],
      example: {
        title: "Marketing team — brand Project",
        body: "Shared instructions: voice adjectives, banned superlatives, citation rules for stats, artifact for all external copy. Junior marketers matched senior output format week one. Instruction updates announced with diff summary.",
      },
    }),
    buildGuideSection({
      id: "shared-knowledge",
      number: "3.3",
      title: "Shared Project knowledge",
      subtitle:
        "Uploading team documents, playbooks, and brand guidelines that every team member's Claude can access",
      takeaway:
        "Shared knowledge is the team corpus — brand, ICP, pricing, playbooks — curated centrally, not re-uploaded per person.",
      why: "Duplicate uploads diverge; central knowledge is single source of truth for native RAG.",
      paragraphs: [
        [
          s("Centralise: brand guide, messaging framework, product one-pagers, competitive battlecards. Label with INDEX and owners."),
        ],
        [
          s("Upload path: owner adds file → updates INDEX → announces in #team-ai — not silent dumps."),
        ],
      ],
      workflowSteps: [
        "Migrate top 5 most re-uploaded docs to shared Project.",
        "Ban personal copies in onboarding — link to Project.",
        "Monthly knowledge hygiene meeting (15 min).",
      ],
    }),
    buildGuideSection({
      id: "project-governance",
      number: "3.4",
      title: "Project governance for teams",
      subtitle:
        "Who manages the instructions, who can upload documents, and how changes are communicated",
      takeaway:
        "Governance roles: Project owner (instructions), knowledge curator (files), contributors (chats), admin (access). Changes logged.",
      why: "Ungoverned shared Projects become instruction edit wars and stale file piles.",
      paragraphs: [
        [
          s("RACI: Owner approves instruction changes. Curator approves knowledge adds. Contributors cannot edit instructions without PR-style review."),
        ],
        [
          s("Sensitive docs: access review quarterly; remove leavers from Project access same day as email deactivation."),
        ],
      ],
      workflowSteps: [
        "Write PROJECT_CHARTER.md with roles.",
        "Instruction changes via owner only.",
        "Knowledge adds via curator ticket.",
      ],
      artifact: {
        id: "project-governance-charter",
        title: "Shared Project governance charter",
        content: `OWNER: [name] — instructions, test suite
CURATOR: [name] — knowledge uploads, INDEX
CONTRIBUTORS: [team] — chats only
CHANGE LOG: [link]
REVIEW: monthly instructions, monthly knowledge
ACCESS: sync with HR offboarding`,
      },
    }),
    buildGuideSection({
      id: "onboarding-via-projects",
      number: "3.5",
      title: "Onboarding new team members via Projects",
      subtitle:
        "Using a configured Project as part of onboarding — the self-service knowledge layer",
      takeaway:
        "Onboarding Project: START_HERE.md, role instructions, exemplar outputs, canonical prompts — new hires productive before shadowing completes.",
      why: "Projects scale onboarding better than 'ask Sarah' or static PDF handbooks alone.",
      paragraphs: [
        [
          s("Day-one path: join Team → open ONBOARDING Project → read START_HERE → run canonical prompt 1 with coach review → graduate to role/client Projects."),
        ],
      ],
      workflowSteps: [
        "Build ONBOARDING Project with 30-min exercise.",
        "Link from HR checklist.",
        "Update when tools/process change.",
      ],
      example: {
        title: "Sales — onboarding Project",
        body: "New reps run competitive battlecard Q&A inside onboarding Project day one. Must pass 8/10 canonical questions with cites before live outreach. Manager reviews chat exports, not lecture slides.",
      },
    }),
    buildGuideSection({
      id: "cross-functional-projects",
      number: "3.6",
      title: "Projects for cross-functional collaboration",
      subtitle:
        "Shared Projects that span multiple functions or roles — the collaboration surface",
      takeaway:
        "Cross-functional Projects align PM, eng, design, legal on one configured context — initiative or product area, not one person's chat.",
      why: "Handoffs break when each function uses differently configured Claude.",
      paragraphs: [
        [
          s("Use for: product launches, compliance initiatives, major deals. Knowledge: shared PRD, legal constraints, timeline. Instructions: neutral voice, cite sources, flag cross-functional risks."),
        ],
        [
          s("One chat per function optional; shared knowledge prevents re-explaining launch scope."),
        ],
      ],
      workflowSteps: [
        "Create INITIATIVE_[name] Project at kickoff.",
        "Each function lead adds one knowledge file.",
        "Weekly STATE.md update in knowledge.",
      ],
    }),
    buildGuideSection({
      id: "instruction-version-control",
      number: "3.7",
      title: "Version control for Project instructions",
      subtitle:
        "How to update shared instructions without breaking existing conversations",
      takeaway:
        "Version instructions in attached INSTRUCTIONS_vX.md; active chats keep old behaviour until new chat; announce breaking changes.",
      why: "Silent instruction edits confuse users mid-deliverable.",
      paragraphs: [
        [
          s("Process: draft vNext in doc → run test suite → owner publishes → changelog in INDEX → recommend new chats for major changes."),
        ],
        [
          s("Breaking change: output format shift, new compliance rule — notify; non-breaking: typo, clarity."),
        ],
      ],
      workflowSteps: [
        "Semantic version instructions (1.2.0).",
        "Keep previous version file for rollback.",
        "Never edit instructions during active crisis without owner sign-off.",
      ],
    }),
    buildGuideSection({
      id: "measuring-effectiveness",
      number: "3.8",
      title: "Measuring Project effectiveness for teams",
      subtitle:
        "How to know whether the shared Project is producing the consistency it was designed for",
      takeaway:
        "Measure: canonical prompt pass rate, revision rounds, time-to-first-draft, compliance flags, adoption (% team using Project vs stray chats).",
      why: "Without metrics, shared Projects become shelfware.",
      paragraphs: [
        [
          s("Monthly: run blind review of 5 outputs from shared Project vs 5 from unconfigured chats — score format and brand compliance."),
        ],
        [
          s("Survey: 'Did Project save re-explaining?' Track stray chat mentions of client names outside client Projects."),
        ],
      ],
      workflowSteps: [
        "Define 4 metrics at Project launch.",
        "Review dashboard monthly in team standup.",
        "Retire or fix Project if pass rate <80% for 2 months.",
      ],
      artifact: {
        id: "project-effectiveness-scorecard",
        title: "Project effectiveness scorecard",
        content: `Monthly review — [PROJECT NAME]
Canonical tests: __/10 pass
Avg revision rounds: __ (target ≤1.5)
Compliance flags: __ (target 0)
Active users / team: __% (target >70%)
Qualitative: one win, one fix for next month`,
      },
    }),
  ],
};
