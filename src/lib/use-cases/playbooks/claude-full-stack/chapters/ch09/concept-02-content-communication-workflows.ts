import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_02_CONTENT_COMMUNICATION: GuideConcept = {
  number: 2,
  title: "Content & Communication Workflows",
  subtitle:
    "The end-to-end workflows for writing, editing, and communication — with detailed examples and the exact prompts that make them work",
  sections: [
    buildGuideSection({
      id: "brief-to-draft",
      number: "2.1",
      title: "The content brief-to-draft workflow",
      subtitle:
        "Brief → research → outline → draft → edit → format — the complete pipeline with example prompts at each stage",
      takeaway:
        "Six-stage pipeline: brief validation → targeted research → outline approval → section draft → edit pass → format for channel — never skip outline on long-form.",
      why: "Skipping stages produces polished prose on the wrong thesis.",
      paragraphs: [
        [
          s("Stage prompts: (1) 'Validate brief: audience, goal, constraints, missing info.' (2) 'Research: 5 sources, cite URLs, flag gaps.' (3) 'Outline: H2s with one-line thesis each — stop for approval.' (4) 'Draft section 2 only.' (5) 'Edit for clarity, cut 15%, flag claims needing citation.' (6) 'Export as markdown + meta description.'"),
        ],
      ],
      workflowSteps: [
        "Load brief into Project with brand voice file.",
        "Run stages as separate messages (context hygiene).",
        "Human approves outline before draft.",
      ],
      example: {
        title: "Stage 3 — outline prompt",
        body: "Given the approved brief below, produce an outline only. For each H2: thesis sentence, 3 bullet supports, estimated word count. Do not draft prose. Brief: [...]",
      },
    }),
    buildGuideSection({
      id: "email-management",
      number: "2.2",
      title: "The email management workflow",
      subtitle:
        "Inbox → priority triage → draft responses → send queue — connected to Gmail via MCP",
      takeaway:
        "MCP Gmail workflow: fetch unread → classify (urgent/reply-later/FYI) → draft replies in your voice → queue for human send — never auto-send external mail in v1.",
      why: "Email is high-stakes; triage + draft saves hours while HITL prevents embarrassment.",
      paragraphs: [
        [
          x("MCP Gmail", "Chapter 7 connector — read labels, threads, draft messages with approval."),
          s(" Prompt: 'Triage last 20 unread: table with sender, topic, priority 1-3, suggested action. Draft replies only for priority 1-2; match tone samples in Project.'"),
        ],
      ],
      workflowSteps: [
        "Connect Gmail MCP read + draft scopes.",
        "Add 3 sent-email tone samples to Project.",
        "Morning: triage → review drafts → send.",
      ],
    }),
    buildGuideSection({
      id: "meeting-intelligence",
      number: "2.3",
      title: "The meeting intelligence workflow",
      subtitle:
        "Recording → transcript → summary → action items → calendar updates → Slack notification",
      takeaway:
        "Pipeline: transcript upload → structured summary (decisions, risks, open questions) → action items with owner/due → optional MCP to Slack/calendar — validate names and dates.",
      why: "Meeting notes fail when action items lack owners; structure fixes that.",
      paragraphs: [
        [
          s("Prompt after transcript: 'Output: (A) 5-bullet executive summary, (B) decisions table, (C) action items: owner | task | due | dependency, (D) follow-up meeting agenda if needed.' Human fixes wrong attendee attribution before Slack post via MCP."),
        ],
      ],
      workflowSteps: [
        "Standardize recording → transcript tool.",
        "Run summary prompt in Project with attendee list.",
        "Human verify action items; MCP post to #team.",
      ],
    }),
    buildGuideSection({
      id: "report-writing",
      number: "2.4",
      title: "The report writing workflow",
      subtitle:
        "Data input → analysis → narrative → visualisation → formatted document — end to end with examples",
      takeaway:
        "Feed data (CSV, metrics export) → Claude analyzes trends and anomalies → narrative sections → chart specs or code → assemble in artifact/Google Doc template.",
      why: "Reports need numbers-grounded narrative — separate analysis from prose to reduce hallucination.",
      paragraphs: [
        [
          s("Step 1: 'List metrics, deltas, anomalies only — table format, cite row numbers.' Step 2: 'Write executive summary from table only — no new numbers.' Step 3: 'Suggest 3 chart types with axis labels.' Use code execution for charts when enabled."),
        ],
      ],
      workflowSteps: [
        "Upload sanitized data to Project.",
        "Run analysis pass; human spot-check figures.",
        "Narrative + charts → final template.",
      ],
    }),
    buildGuideSection({
      id: "content-repurposing",
      number: "2.5",
      title: "The content repurposing workflow",
      subtitle:
        "One long-form piece → LinkedIn posts, newsletter, slides, and Twitter thread — the multi-format pipeline",
      takeaway:
        "Single source article → extract core thesis + 5 proof points → parallel format passes (LinkedIn hook style, newsletter intro, slide titles, thread numbering) — shared fact sheet prevents drift.",
      why: "Repurposing without a shared fact sheet invents new claims per channel.",
      paragraphs: [
        [
          s("Create FACT_SHEET.md: thesis, quotes, stats with sources, CTA. Then: 'LinkedIn: 3 posts, hook-first, 1200 chars max, from FACT_SHEET only.' Repeat per channel with format rules in Project instructions."),
        ],
      ],
      workflowSteps: [
        "Generate fact sheet from long-form.",
        "Human approve facts once.",
        "Run per-channel format prompts.",
      ],
    }),
    buildGuideSection({
      id: "research-synthesis",
      number: "2.6",
      title: "The research synthesis workflow",
      subtitle:
        "Multiple sources → extraction → comparison → synthesis → cited output — with document upload and web search",
      takeaway:
        "Upload PDFs + enable web search → per-source extraction template → comparison matrix → synthesis with inline citations → bibliography — require 'insufficient evidence' flag when thin.",
      why: "Research workflows fail when synthesis invents bridges between sources.",
      paragraphs: [
        [
          s("Extraction prompt: 'For each source: claim | evidence quote | page/URL | confidence.' Comparison: 'Matrix of claims vs sources.' Synthesis: 'Answer question X; every sentence tagged [S1] or [WEB].'"),
        ],
      ],
      workflowSteps: [
        "Chunk large PDFs if needed (Ch 5).",
        "Run extraction per source batch.",
        "Human spot-check citations before publish.",
      ],
    }),
    buildGuideSection({
      id: "proposal-workflow",
      number: "2.7",
      title: "The proposal workflow",
      subtitle:
        "Brief → competitive context → structure → draft → review → formatted output — with client Project configuration",
      takeaway:
        "Client-specific Project: tone, case studies, pricing rules → intake brief → competitive landscape table → section outline → draft → legal/commercial review → branded PDF/markdown export.",
      why: "Proposals mix creativity and compliance — Project encodes what must not change.",
      paragraphs: [
        [
          s("Never let Claude invent pricing or legal terms — reference approved snippets from Project knowledge. Prompt: 'Draft Section 3 Approach only; use case study B; flag assumptions.'"),
        ],
      ],
      workflowSteps: [
        "Create Project per client or vertical.",
        "Load approved case studies + boilerplate.",
        "Partner review before client send.",
      ],
    }),
    buildGuideSection({
      id: "editorial-calendar",
      number: "2.8",
      title: "The editorial calendar workflow",
      subtitle:
        "Strategy → topic generation → brief creation → scheduling — with Notion integration",
      takeaway:
        "Quarterly themes → Claude generates topic backlog scored by ICP fit → brief template per topic → MCP writes rows to Notion calendar with status, owner, publish date.",
      why: "Calendars die without brief quality; automation should create briefs, not just titles.",
      paragraphs: [
        [
          s("Prompt: 'Given ICP doc and Q3 theme, propose 12 topics: title | angle | funnel stage | effort 1-5.' Approved topics → 'Fill brief template for topic 4.' Notion MCP creates database entries."),
        ],
      ],
      workflowSteps: [
        "Define theme + ICP in Project.",
        "Generate and rank topic batch.",
        "MCP push approved briefs to Notion.",
      ],
    }),
  ],
};
