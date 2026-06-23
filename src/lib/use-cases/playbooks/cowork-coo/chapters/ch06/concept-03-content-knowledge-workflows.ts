import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_03_CONTENT_KNOWLEDGE_WORKFLOWS: GuideConcept = {
  number: 3,
  title: "Content & Knowledge Workflows",
  subtitle:
    "The workflows that run content operations and knowledge management — production-grade designs for content teams and knowledge workers",
  sections: [
    buildGuideSection({
      id: "content-production-pipeline",
      number: "3.1",
      title: "The content production pipeline",
      subtitle:
        "Brief → research → outline → draft → edit → format → schedule → publish confirmation",
      takeaway:
        "CONTENT_PIPELINE_v1: stage-gated production — each stage is a Skill; publish requires approval.flag — never auto-publish v1.",
      why: "Content teams need pipeline clarity — blueprint maps creative process to auditable Skills.",
      paragraphs: [
        [
          s("Stages: BRIEF_INGEST → RESEARCH_v1 → OUTLINE_v1 → DRAFT_v1 → EDIT_v1 (style card) → FORMAT_v1 → SCHEDULE_STAGING → (T3) PUBLISH_CONFIRM. Handoff manifest between stages; regression fixtures per content type."),
        ],
      ],
      workflowSteps: [
        "Define style card per channel.",
        "Human gate after DRAFT and before PUBLISH.",
        "Store all stages under ~/Content/{project_id}/.",
        "ROI: track mins saved vs review mins.",
      ],
      artifact: {
        id: "blueprint-content-pipeline",
        title: "CONTENT_PIPELINE stages",
        content: `brief → research → outline → draft → edit → format → schedule → (approve) publish
HITL: T2 after draft, T3 before publish`,
      },
    }),
    buildGuideSection({
      id: "research-synthesis-workflow",
      number: "3.2",
      title: "The research synthesis workflow",
      subtitle:
        "Source inputs → extraction → comparison → synthesis → cited output → filed",
      takeaway:
        "RESEARCH_SYNTH_v1: multi-source ingest → EXTRACT per source → COMPARE_MATRIX → SYNTH with numbered citations — filed to ~/Research/{topic}/.",
      why: "Research without citations is unusable in production — blueprint mandates Sources section.",
      paragraphs: [
        [
          s("Inputs: URLs list, PDF drops, internal notes. FETCH → EXTRACT → COMPARE → SYNTH_RESEARCH_v1. Output: synthesis.md + sources.bib.json. Web fetches allowlisted; store retrieval dates."),
        ],
      ],
      workflowSteps: [
        "Allowlist domains in Skill Context.",
        "Require min 3 sources for publish to staging.",
        "QA: every claim maps to source id.",
        "Archive raw fetches 7d per policy.",
      ],
    }),
    buildGuideSection({
      id: "knowledge-base-maintenance",
      number: "3.3",
      title: "The knowledge base maintenance workflow",
      subtitle:
        "New inputs → extraction → classification → integration into knowledge base → change log",
      takeaway:
        "KB_MAINTAIN_v1: classify topic → extract facts → propose KB patch (diff format) → human merge — Cowork proposes, human approves KB write.",
      why: "Fully automated KB writes drift; propose-and-merge is the safe pattern.",
      paragraphs: [
        [
          s("Watch ~/KB/inbox/ → CLASSIFY_KB_TOPIC → EXTRACT_FACTS_v1 → PROPOSE_PATCH_v1 (markdown diff) → REVIEW_QUEUE. On approve: optional Notion/MCP write or manual paste. CHANGELOG.md append per run_id."),
        ],
      ],
      workflowSteps: [
        "Define KB taxonomy.",
        "Patch format: diff only, not full replace.",
        "Owner approves merges weekly.",
        "Version KB exports monthly for regression.",
      ],
    }),
    buildGuideSection({
      id: "newsletter-production-workflow",
      number: "3.4",
      title: "The newsletter production workflow",
      subtitle:
        "Input curation → section drafting → assembly → review queue → formatted for send",
      takeaway:
        "NEWSLETTER_v1: CURATE links/inputs → DRAFT sections per template → ASSEMBLE → FORMAT email blocks — send only after T3 approval.",
      why: "Newsletters are assembly + voice — blueprint separates curation from drafting from assembly.",
      paragraphs: [
        [
          s("Weekly: CURATE_v1 (internal + external allowlist) → DRAFT_INTRO | DRAFT_SECTIONS → ASSEMBLE_NEWSLETTER_v1 → FORMAT_HTML/md → review queue. Track curated item ids to avoid duplicate issues."),
        ],
      ],
      workflowSteps: [
        "Newsletter template with section word limits.",
        "Editor review required — T3 send.",
        "Regression: golden issue fixture.",
        "Archive each issue by date.",
      ],
    }),
    buildGuideSection({
      id: "social-content-workflow",
      number: "3.5",
      title: "The social content workflow",
      subtitle:
        "Source material → multi-format content generation → review queue → scheduled for publishing",
      takeaway:
        "SOCIAL_MULTI_v1: one source brief → PARALLEL draft LinkedIn, X, thread variants → JOIN → review queue — schedule posts only with per-post approval.flag.",
      why: "Multi-format from one source saves time; per-channel style cards prevent voice bleed.",
      paragraphs: [
        [
          s("Input: source.md or blog URL fetch. BRANCH: DRAFT_LINKEDIN | DRAFT_X | DRAFT_THREAD → JOIN_REVIEW. Style card per platform. Publishing connector optional v2 — v1 exports to ~/Social/scheduled/."),
        ],
      ],
      workflowSteps: [
        "Style cards per platform.",
        "Review all variants together.",
        "approval.flag per post id.",
        "No auto-post without legal for regulated industries.",
      ],
    }),
    buildGuideSection({
      id: "competitive-intelligence-content",
      number: "3.6",
      title: "The competitive intelligence workflow",
      subtitle:
        "Competitor monitoring → change detection → synthesis → weekly brief → distributed",
      takeaway:
        "COMP_INTEL_v1: same core as §1.4 with content-team delivery — formatted for internal wiki + Slack #competitive.",
      why: "Content and strategy teams share intel machinery — blueprint notes audience-specific formatting Skill.",
      paragraphs: [
        [
          s("COMP_SCAN parallel → DIFF → SYNTH_COMP_v1 → FORMAT_WIKI_v1 + SLACK_DIGEST_v1. Emphasise product/marketing implications section. Schedule Monday 7am."),
        ],
      ],
      workflowSteps: [
        "Share scan Skills with STRAT_INTEL where possible.",
        "Audience format Skills separate from SYNTH.",
        "Wiki write to staging; human promote.",
      ],
    }),
    buildGuideSection({
      id: "learning-digest-workflow",
      number: "3.7",
      title: "The learning digest workflow",
      subtitle:
        "Reading list inputs → summary extraction → key insight synthesis → formatted digest → distributed",
      takeaway:
        "LEARNING_DIGEST_v1: reading list csv/urls → EXTRACT per item → SYNTH_INSIGHTS → digest.md — team L&D distribution on schedule.",
      why: "Teams curate more than they read — digest makes reading lists actionable.",
      paragraphs: [
        [
          s("Biweekly: READING_LIST ingest → BATCH_EXTRACT (max 10 items) → SYNTH_DIGEST_v1. Sections: One-line thesis per item, Cross-cutting themes, Suggested actions. Cite each item."),
        ],
      ],
      workflowSteps: [
        "Curator maintains reading_list.csv.",
        "Cap items per run for token budget.",
        "Distribute to Slack #learning or email draft.",
        "Archive digests by period.",
      ],
    }),
    buildGuideSection({
      id: "meeting-notes-to-knowledge",
      number: "3.8",
      title: "The meeting notes-to-knowledge workflow",
      subtitle:
        "Meeting transcript → action extraction → decision logging → knowledge base update → notifications sent",
      takeaway:
        "NOTES_TO_KB_v1: transcript → ACTIONS + DECISIONS extract → PROPOSE_KB_ENTRIES → notify owners — actions do not auto-create tickets without approval.",
      why: "Meeting notes are the richest knowledge feed — blueprint structures extract → propose → notify.",
      paragraphs: [
        [
          s("Drop transcript in ~/Meetings/inbox/. EXTRACT_ACTIONS_v1 → EXTRACT_DECISIONS_v1 → PROPOSE_KB_v1 → NOTIFY_OWNERS_v1 (Slack DM template with action list). Ticket creation optional v2 with approval."),
        ],
      ],
      workflowSteps: [
        "Transcript format normalised (vtt/md).",
        "Owner assignment suggestions — human confirms.",
        "KB proposals to review queue.",
        "Notify action owners — no auto-assign in v1.",
      ],
      artifact: {
        id: "blueprint-notes-to-kb",
        title: "NOTES_TO_KB pipeline",
        content: `TRANSCRIPT → EXTRACT_ACTIONS | EXTRACT_DECISIONS
         → PROPOSE_KB → REVIEW → NOTIFY
Output: actions.json, decisions.json, kb_patch.diff`,
      },
    }),
  ],
};
