import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_03_SKILL_LIBRARY: GuideConcept = {
  number: 3,
  title: "Building Your Skill Library",
  subtitle:
    "Growing and organising your Skills into a personal automation library that compounds in value over time",
  sections: [
    buildGuideSection({
      id: "skill-categories-starter",
      number: "3.1",
      title: "Skill categories for knowledge workers",
      subtitle:
        "The core Skill types that cover most of what a professional automates — the library starter set",
      takeaway:
        "Aim for 2–3 Skills per category before building exotic automations — coverage beats novelty.",
      why: "Scattered one-off Skills do not compound; a starter set gives workflows something to compose.",
      paragraphs: [
        [
          s("Starter library (10–15 Skills): document ingest, weekly report memo, inbox triage summary, competitive snapshot, meeting notes → actions, variance analysis, customer email draft, internal status update, file rename/route, backup manifest. Most knowledge workers spend 80% of time in these buckets."),
        ],
        [
          s("Prioritise Skills tied to calendar cadence — weekly sales, monthly close, quarterly board — so schedules attach immediately after testing."),
        ],
      ],
      workflowSteps: [
        "List top 10 recurring tasks from last quarter.",
        "Map each to category from §1.4.",
        "Pick highest-pain weekly task as Skill #1.",
        "Target 3 Skills live in 30 days — not 30 Skills in 3 days.",
      ],
      artifact: {
        id: "starter-library-checklist",
        title: "Starter library checklist",
        content: `File: ingest, normalise, route
Research: competitor scan, news digest
Writing: memo, brief, summary
Analysis: variance, pipeline, KPI table
Comms: email draft, Slack update, status post`,
      },
    }),
    buildGuideSection({
      id: "document-processing-skill",
      number: "3.2",
      title: "The document processing Skill",
      subtitle:
        "Reading, extracting, summarising, and reformatting documents — the most universally useful Skill type",
      takeaway:
        "Document Skills win on schema discipline — extraction without SCHEMA is expensive guessing.",
      why: "Every team has PDF/CSV/DOCX piles; document Skills are the fastest path to measurable time saved.",
      paragraphs: [
        [
          s("Common patterns: PDF → structured JSON; DOCX → markdown with heading map; CSV → cleaned CSV + anomaly report; multi-file → index manifest. Always write manifest.json listing inputs, outputs, run_id, Skill version."),
        ],
        [
          s("Use "),
          x("staging folders", "Never write transformed docs directly to canonical archives."),
          s(" and preserve originals. Document Skills pair well with HITL tier T2 — human spot-check before archive move."),
        ],
      ],
      workflowSteps: [
        "Collect 5 representative source files.",
        "Define SCHEMA + golden JSON example.",
        "Build EXTRACT_* Skill v1; test matrix §1.8.",
        "Chain ROUTE_TO_ARCHIVE Skill only after extract is stable.",
      ],
      example: {
        title: "CONTRACT_EXTRACT_v1",
        body: "Input: signed PDFs in ~/Legal/inbox/. Output: parties, effective_date, renewal_clause, liability_cap in JSON + 3-bullet exec summary. Unknown clauses → flags array, not silent omission.",
      },
    }),
    buildGuideSection({
      id: "research-skill",
      number: "3.3",
      title: "The research Skill",
      subtitle:
        "Searching, reading, synthesising, and reporting — the intelligence-gathering Skill",
      takeaway:
        "Research Skills require citation rules and source tiers — unsourced synthesis is liability in unattended runs.",
      why: "Operators confuse 'research Skill' with 'browse the web freely' — that produces untraceable briefs.",
      paragraphs: [
        [
          s("Structure: Task bounds topic and time window; Action lists search queries, allowlisted domains, max sources; Result requires numbered citations with URL and retrieval date. Include DISALLOWED: paywalled credential use, social media rumours as fact."),
        ],
        [
          s("Schedule research Skills off-peak — token heavy. Cache intermediate source summaries to disk so reruns do not re-fetch unchanged pages."),
        ],
      ],
      workflowSteps: [
        "Define topic boundary + date range in Task.",
        "Allowlist 5–10 domains.",
        "Require Sources section with URLs.",
        "Human review before forwarding to executives.",
      ],
      artifact: {
        id: "research-output-template",
        title: "Research Skill output template",
        content: `# Brief: {topic}
## Key findings (max 5)
## Implications
## Sources
1. [title](url) — retrieved {date}`,
      },
    }),
    buildGuideSection({
      id: "writing-skill",
      number: "3.4",
      title: "The writing Skill",
      subtitle:
        "Drafting, editing, formatting, and producing written output from inputs — the content Skills",
      takeaway:
        "Writing Skills produce drafts in staging — tone and structure come from templates, not adjectives in the prompt.",
      why: "Auto-sent prose is the fastest way to get Cowork banned from your organisation.",
      paragraphs: [
        [
          s("Inputs: prior Skill outputs, bullet notes, CSV highlights. Action: fill TEMPLATE sections in order; enforce word limits per section; banned phrases list for compliance. Result: draft.md only — send step is human or separate comms workflow with approval."),
        ],
        [
          s("Maintain "),
          x("style cards", "Short doc: audience, tone, forbidden claims, example opening paragraph."),
          s(" in Context — one style card per audience (board vs team vs customer)."),
        ],
      ],
      workflowSteps: [
        "Create TEMPLATE with fixed headings.",
        "Attach style card for audience.",
        "Output to staging; never wire Send button in v1.",
      ],
      example: {
        title: "BOARD_UPDATE_DRAFT_v1",
        body: "Input: analysis Skill output + CEO bullet notes. Template: Context, Wins, Risks, Asks (150 words max each). Result: draft.md in ~/Board/staging/ — CFO edits before send.",
      },
    }),
    buildGuideSection({
      id: "analysis-skill",
      number: "3.5",
      title: "The analysis Skill",
      subtitle:
        "Processing data, identifying patterns, and producing structured insight — the analytical Skills",
      takeaway:
        "Analysis Skills must define metrics in Context — never let the model invent WoW or 'significant' without thresholds.",
      why: "Invented metrics in scheduled analysis destroy trust faster than no analysis.",
      paragraphs: [
        [
          s("Include METRIC_DEFINITIONS block: formulae, rounding, comparison window. Action: compute → flag thresholds → rank → output table + narrative only for flagged rows. Result: analysis.json + summary.md; numbers in summary must trace to json keys."),
        ],
        [
          s("Prefer Sonnet for analysis Skills unless nuance is critical — reserve Opus for ambiguous qualitative synthesis on top of computed json."),
        ],
      ],
      workflowSteps: [
        "Document metric definitions with finance/ops sign-off.",
        "Golden test: reconcile to spreadsheet.",
        "Separate COMPUTE (analysis) from NARRATE (writing) Skills.",
      ],
      artifact: {
        id: "metric-definitions-block",
        title: "METRIC_DEFINITIONS block",
        content: `wow_revenue: (this_week - prior_week) / prior_week
flag_threshold: wow_revenue < -0.15
rounding: 2dp USD`,
      },
    }),
    buildGuideSection({
      id: "communication-skill",
      number: "3.6",
      title: "The communication Skill",
      subtitle:
        "Drafting emails, messages, and updates from context — the communication automation Skills",
      takeaway:
        "Comms Skills stop at draft + suggested subject line — sending is a human gate or explicit approval workflow.",
      why: "One wrong automated Slack post teaches the whole company to disable Cowork.",
      paragraphs: [
        [
          s("Inputs: analysis summary, calendar context, recipient role from style card. Output: draft email or Slack block with placeholders for human names confirmed. Include sensitivity check: 'If message contains termination, legal, or medical terms → write REVIEW_REQUIRED.txt instead of draft.'"),
        ],
        [
          s("For Slack/Teams via MCP: write to draft channel or DM-to-self staging — never production channel in v1."),
        ],
      ],
      workflowSteps: [
        "Define recipient tiers and tone cards.",
        "Add sensitivity keyword guard.",
        "Pilot with DM-to-self for two weeks.",
      ],
      example: {
        title: "WEEKLY_TEAM_UPDATE_DRAFT_v1",
        body: "Input: pipeline analysis json. Output: Slack blocks — Highlights, Blockers, Asks. Post to #drafts-only via MCP; manager copies to #team after edit.",
      },
    }),
    buildGuideSection({
      id: "organising-library",
      number: "3.7",
      title: "Organising your Skill library",
      subtitle:
        "Naming conventions, categories, and documentation — the library management that makes Skills findable and maintainable",
      takeaway:
        "If you cannot find the Skill in 10 seconds from run history, your naming convention failed.",
      why: "Libraries decay into duplicates (invoice_skill_final_v2) without conventions — maintenance cost exceeds build cost.",
      paragraphs: [
        [
          s("Naming: "),
          x("DOMAIN_VERB_vN", "FINANCE_NORMALISE_INVOICE_v3 — domain prefix for filter, verb for action, version suffix."),
          s(". Folder: ~/Cowork/skills/{domain}/ with TAR spec + changelog per Skill. Metadata tags: type, owner, schedule_id, model tier."),
        ],
        [
          s("Quarterly library review: deprecate unused Skills, merge duplicates, audit permissions. Keep SKILL_INDEX.md — table of name, Task one-liner, owner, last run, status."),
        ],
      ],
      workflowSteps: [
        "Create SKILL_INDEX.md today — even for 2 Skills.",
        "Enforce DOMAIN_VERB_vN on every new Skill.",
        "Calendar quarterly 30-min library hygiene.",
      ],
      artifact: {
        id: "skill-index-template",
        title: "SKILL_INDEX.md template",
        content: `| Skill | Task (one line) | Owner | Type | Schedule | Status |
|-------|-----------------|-------|------|----------|--------|
| FINANCE_NORMALISE_INVOICE_v1 | PDF → JSON | AP lead | file | Mon 6am | prod |`,
      },
    }),
    buildGuideSection({
      id: "sharing-skills",
      number: "3.8",
      title: "Sharing Skills with teammates",
      subtitle:
        "How to export, share, and collaborate on Skills — the team Skill library",
      takeaway:
        "Share TAR specs and test logs with the Skill — export without context recreates failures on teammate machines.",
      why: "Skills are organisational IP; sharing raw Cowork exports without docs wastes everyone's time.",
      paragraphs: [
        [
          s("Share bundle: TAR markdown + SCHEMA samples + golden input/output pairs + SKILL_TEST_LOG + required folder paths. Teammate imports into sandbox, runs golden test, then promotes to their production paths — never copy-paste prod paths blindly."),
        ],
        [
          s("Assign "),
          x("Skill owner", "One DRI for version bumps and permission reviews."),
          s(" per Skill; contributors PR changes to TAR spec in git or shared drive before Cowork UI edit. Run history links in team wiki for transparency."),
        ],
      ],
      workflowSteps: [
        "Export Skill + TAR spec to shared repo folder.",
        "Include anonymised golden fixtures.",
        "New teammate: sandbox import → golden test → path mapping doc.",
        "Owner reviews first prod schedule.",
      ],
      artifact: {
        id: "skill-share-bundle",
        title: "Skill share bundle checklist",
        content: `Share package:
[ ] TAR spec (SKILL_NAME_vN.md)
[ ] Cowork Skill export
[ ] Golden input files (anonymised)
[ ] Expected output samples
[ ] SKILL_TEST_LOG
[ ] PATH_MAPPING.md (sandbox → prod)
[ ] Owner contact + escalation`,
      },
    }),
  ],
};
