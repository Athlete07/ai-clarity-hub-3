import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_03_SIMILARITY_DEDUP: GuideConcept = {
  number: 3,
  title: "Similarity and Deduplication",
  subtitle:
    "Duplicates, known errors, collisions, CMDB dedup, thresholds, APIs, and an end-to-end case study",
  sections: [
    buildGuideSection({
      id: "semantic-vs-exact",
      number: "3.1",
      title: "Semantic similarity vs exact match",
      subtitle:
        "Why duplicate detection needs embeddings, not string comparison",
      takeaway:
        "Exact match catches identical text; semantic similarity catches meaning. Duplicate detection in real service desks requires semantic similarity because users describe the same issue differently.",
      why: "If your duplicate detection is keyword-only, you either miss duplicates or over-link unrelated tickets.",
      paragraphs: [
        [
          s("Exact match is brittle: “VPN down” vs “can’t connect to remote access” won’t match. Semantic similarity uses meaning signals and multiple fields."),
        ],
        [
          s("Similarity is probabilistic. You must tune thresholds and decide what happens above/below them (auto-link vs suggest)."),
        ],
        [
          s("Design principle: false positives are often worse than false negatives in dedup. Auto-link only when precision is extremely high."),
        ],
      ],
      workflowSteps: [
        "Collect 100 known duplicate pairs and 100 non-duplicate pairs.",
        "Test similarity scoring; set a conservative auto-link threshold.",
        "Deploy suggest-first; then automate only after precision is proven.",
      ],
      example: {
        title: "Semantic similarity caught outage duplicates",
        body: "During a Wi-Fi outage, users typed many variants. Similarity suggested linking to the major incident, reducing redundant incidents and improving comms consistency.",
      },
    }),
    buildGuideSection({
      id: "incident-dedup",
      number: "3.2",
      title: "Incident deduplication",
      subtitle:
        "Linking duplicate incidents and suppressing redundant alerts",
      takeaway:
        "Deduplication links new incidents to an existing master incident (or major incident), reducing noise, improving status updates, and preserving one source of truth.",
      why: "Duplicate incidents inflate backlog, slow triage, and fragment comms — especially during outages.",
      paragraphs: [
        [
          s("Dedup should be time-aware: duplicates cluster in windows (outages, patch rollouts). Similarity combined with CI/service context improves precision."),
        ],
        [
          s("Policy: when auto-link happens, users must still receive confirmation and status updates. Dedup should not feel like dismissal."),
        ],
        [
          s("Operationally: store the similarity score and reason for link for audit and tuning."),
        ],
      ],
      workflowSteps: [
        "Define master incident selection rules (priority, age, CI match).",
        "Auto-link only at very high similarity + matching CI/service.",
        "Otherwise suggest to triage agent; capture accept/reject as feedback.",
      ],
      example: {
        title: "Outage noise suppressed safely",
        body: "High-confidence duplicates were auto-linked to the major incident; ambiguous cases were suggested to triage. Duplicate volume fell without creating incorrect links that would hide real issues.",
      },
    }),
    buildGuideSection({
      id: "known-error-matching",
      number: "3.3",
      title: "Known error matching",
      subtitle:
        "Surfacing existing known errors when a new incident is created",
      takeaway:
        "Known error matching connects incidents to existing known errors or problems — accelerating resolution and preventing duplicate investigation work.",
      why: "Problem management only works if known errors are reused. Similarity is how you make reuse automatic.",
      paragraphs: [
        [
          s("Match signals: error signatures, CI/service, category, and key phrases. The best performance comes from disciplined known error records and consistent incident fields."),
        ],
        [
          s("Governance: show the evidence — why this known error matches — so agents trust it and don’t ignore it."),
        ],
        [
          s("Measure: reduction in time-to-diagnosis and increased known-error reuse rate."),
        ],
      ],
      workflowSteps: [
        "Ensure known error records are structured and searchable.",
        "Deploy matching suggestions in agent workspace.",
        "Track acceptance and resolution outcomes after match used.",
      ],
      example: {
        title: "Known error reuse became normal",
        body: "Before: agents rarely searched known errors. After matching suggestions, 28% of incidents linked to existing known errors, cutting diagnosis time and increasing resolution consistency.",
      },
    }),
    buildGuideSection({
      id: "change-collision-detection",
      number: "3.4",
      title: "Change collision detection",
      subtitle:
        "Identifying conflicting changes before the deployment window",
      takeaway:
        "Collision detection finds changes that conflict in time, CI scope, dependency chain, or risk patterns — preventing outages caused by overlapping work.",
      why: "Many outages are change collisions, not single-change failures. Similarity + topology + policy prevents the collisions.",
      paragraphs: [
        [
          s("Signals: same CI, dependent CIs, same time window, similar change templates, and historical collision outcomes."),
        ],
        [
          s("Output should be actionable: show the colliding changes and recommended mitigation (reschedule, add approval, or coordinate)."),
        ],
        [
          s("Governance: collision suggestions are advisory; CAB decisions remain human."),
        ],
      ],
      workflowSteps: [
        "Define collision rules baseline (same CI + overlapping window).",
        "Add similarity suggestions for “looks like” conflicts.",
        "Measure reduction in post-change incidents attributed to collisions.",
      ],
      example: {
        title: "Collision prevented a double restart",
        body: "Two teams scheduled restarts for dependent services. Collision detection flagged the overlap. Rescheduling prevented a cascading outage.",
      },
    }),
    buildGuideSection({
      id: "cmdb-dedup",
      number: "3.5",
      title: "Asset and configuration deduplication",
      subtitle:
        "Using similarity to clean and consolidate CMDB records",
      takeaway:
        "Similarity can identify duplicate or near-duplicate CIs and assets (naming variations, serial mismatches), helping clean CMDB data that powers AIOps and routing.",
      why: "AIOps and event correlation fail on dirty CMDB. CMDB dedup is foundational work disguised as data janitorial — and it’s high ROI.",
      paragraphs: [
        [
          s("Duplicates come from multiple discovery sources and inconsistent naming. Similarity uses multiple attributes (serial, hostname, IP, model) to propose merges."),
        ],
        [
          s("Never auto-merge in production without strong identity rules. Use human review and staged remediation."),
        ],
        [
          s("Downstream impact: better correlation, better routing, fewer false alerts."),
        ],
      ],
      workflowSteps: [
        "Select one CI class (servers) and run similarity to find duplicates.",
        "Review top 50 candidates; define merge rules.",
        "Run cleanup in batches; validate no relationship breakage.",
      ],
      example: {
        title: "Dedup improved correlation quality",
        body: "After consolidating duplicate server CIs, event correlation stopped splitting alerts across duplicates. Incident volume dropped because correlation became accurate.",
      },
    }),
    buildGuideSection({
      id: "threshold-calibration",
      number: "3.6",
      title: "Threshold calibration",
      subtitle:
        "Tuning similarity thresholds for precision vs recall trade-offs",
      takeaway:
        "Thresholds define when similarity becomes automation. Start conservative (precision-first), then relax only if review data proves safety.",
      why: "Similarity errors can hide real incidents or link the wrong records — a governance risk.",
      paragraphs: [
        [
          s("Precision-first for automation: auto-link only when wrong links are extremely rare. Use suggestions below that."),
        ],
        [
          s("Use confusion-style evaluation: true duplicates linked vs false links. Set thresholds by category — outages behave differently than normal days."),
        ],
        [
          s("Capture human accept/reject as feedback to tune thresholds and features."),
        ],
      ],
      workflowSteps: [
        "Build a labeled evaluation set of duplicate/non-duplicate pairs.",
        "Test thresholds at 0.9, 0.85, 0.8; choose the safest.",
        "Re-evaluate quarterly or after major process/CI changes.",
      ],
      example: {
        title: "Auto-link only at 0.92",
        body: "Team found 0.92 threshold achieved 98% precision with acceptable recall. Below 0.85, false links increased sharply. Conservative automation preserved trust.",
      },
    }),
    buildGuideSection({
      id: "similarity-api",
      number: "3.7",
      title: "Similarity in the API",
      subtitle:
        "Building custom similarity lookups in scripts and flows",
      takeaway:
        "Similarity signals can be consumed by custom scripts and flows to power dedup, recommendations, and UI hints — but must respect ACLs and logging like any other AI action.",
      why: "Most enterprises need custom similarity workflows (custom tables, industry records). API usage is how you extend beyond OOTB.",
      paragraphs: [
        [
          s("Pattern: record created → compute similarity candidates → branch on threshold → suggest or auto-link → log reason and score."),
        ],
        [
          s("Security: run as user context, never as admin by default. Avoid leaking fields from restricted records into suggestions."),
        ],
        [
          s("Operational discipline: rate limits and performance — similarity calls must not block critical record creation paths."),
        ],
      ],
      workflowSteps: [
        "Choose one custom table and define similarity features.",
        "Implement suggestion-only flow first; log score and decision.",
        "Add auto-actions only after evaluation proves precision.",
      ],
      example: {
        title: "Custom dedup for facilities requests",
        body: "Facilities tickets had duplicates (same building + issue). Custom similarity flow suggested duplicates; supervisors approved links. Duplicate volume fell without wrongly merging unrelated issues.",
      },
    }),
    buildGuideSection({
      id: "dedup-case-study",
      number: "3.8",
      title: "Real use case: reducing duplicate incident volume",
      subtitle:
        "Configuration, measurement, and outcome",
      takeaway:
        "A successful dedup program combines similarity scoring, conservative thresholds, major-incident linking, and clear user comms — and measures true duplicates removed, not vanity link count.",
      why: "This is the use case that convinces stakeholders PI is real, not academic.",
      paragraphs: [
        [
          s("Configuration: similarity suggestions at 0.8+, auto-link at 0.92+ when CI/service matches, and always link to active major incident if present."),
        ],
        [
          s("Measurement: duplicate rate baseline, false-link rate, time saved in triage, and user satisfaction for linked incidents."),
        ],
        [
          s("Outcome: fewer redundant incidents, faster comms, and cleaner metrics. Most importantly: trust preserved through conservative automation."),
        ],
      ],
      workflowSteps: [
        "Baseline duplicate volume for 30 days.",
        "Pilot in one region/team; track precision and recall.",
        "Scale after two successful outage events and one normal week.",
      ],
      example: {
        title: "Duplicate incidents −32% in 90 days",
        body: "Program reduced duplicates by linking to master incidents and suppressing redundant alerts. False-link rate stayed under 1% due to conservative auto-link threshold and human review band.",
      },
    }),
  ],
};

