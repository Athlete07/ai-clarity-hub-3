import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_03_SKILL_PIPELINES: GuideConcept = {
  number: 3,
  title: "Chaining Skills into Pipelines",
  subtitle:
    "How to connect multiple Skills into end-to-end pipelines — the workflow architecture that creates genuine operational automation",
  sections: [
    buildGuideSection({
      id: "what-skill-pipeline-is",
      number: "3.1",
      title: "What a Skill pipeline is",
      subtitle:
        "Multiple Skills connected so the output of one is the input of the next — the automation chain",
      takeaway:
        "A pipeline is a workflow DAG of Skills — each node has one TAR contract; edges are handoff files or manifests.",
      why: "Monolithic mega-Skills hide failures; pipelines give you run history per step and reusable nodes.",
      paragraphs: [
        [
          s("A "),
          x(
            "Skill pipeline",
            "Ordered or branching sequence of Skills where handoff artifacts pass context between steps.",
          ),
          s(
            " turns operational SOPs into executable graphs. Cowork workflow builder connects Skills; each invocation logs separately. Pipelines compose Skills from your library (Ch 2 §3.7) — do not duplicate instructions.",
          ),
        ],
        [
          s("Minimum pipeline metadata: pipeline_id, owner, version, node list, handoff schema, global failure policy."),
        ],
      ],
      workflowSteps: [
        "Draw pipeline on paper — one box per Skill.",
        "Name handoff files between boxes.",
        "Implement and test each node alone first.",
        "Chain in builder; run end-to-end golden test.",
      ],
    }),
    buildGuideSection({
      id: "sequential-vs-parallel",
      number: "3.2",
      title: "Sequential vs parallel Skill execution",
      subtitle:
        "When Skills must run in order vs when they can run simultaneously — the pipeline architecture decision",
      takeaway:
        "Sequential when step B needs A's output; parallel only when inputs are independent and resources allow.",
      why: "Parallelising dependent steps produces race conditions; serialising independent research burns wall-clock time unnecessarily.",
      paragraphs: [
        [
          s("Sequential default: ingest → transform → emit. Parallel example: three competitor scans on different allowlists — merge in SYNTH_v1. Parallel requires "),
          x("join step", "Waits for all branches; fails if any branch fails unless optional flag set."),
          s(" and resource caps (Ch 3 §1.6)."),
        ],
        [
          s("Never parallel-write same output folder. Use branch subdirs: staging/{run_id}/branch_a/. Merge step owns final canonical write."),
        ],
      ],
      workflowSteps: [
        "Mark each edge sequential or parallel in PIPELINE_SPEC.",
        "Add JOIN node after parallel branches.",
        "Load-test parallel with max concurrent branches.",
      ],
      example: {
        title: "Parallel research, sequential emit",
        body: "SCAN_A || SCAN_B || SCAN_C → JOIN_DIGEST → FORMAT_BRIEF → NOTIFY. Three scans parallel; brief waits for join.",
      },
    }),
    buildGuideSection({
      id: "handoff-design",
      number: "3.3",
      title: "Handoff design",
      subtitle:
        "How to format the output of one Skill so the next Skill can reliably use it as input",
      takeaway:
        "Handoffs are APIs — versioned JSON manifests with schema, run_id, and producer Skill version.",
      why: "Ad hoc markdown handoffs break downstream parsers; implicit 'read the folder' contracts fail when filenames change.",
      paragraphs: [
        [
          s("Standard handoff package: "),
          x("manifest.json", "{ pipeline_id, run_id, step, producer_skill, outputs[], schema_version }."),
          s(" plus payload files. Downstream Skill reads manifest first; validates schema_version; rejects on mismatch."),
        ],
        [
          s("Document HANDOFF_SCHEMA in both Skills' TAR specs. Bump schema_version on breaking changes — downstream must accept N and N-1 during migration."),
        ],
      ],
      workflowSteps: [
        "Define manifest.json schema v1.",
        "Upstream writes manifest on every emit.",
        "Downstream VERIFY manifest before processing.",
        "Integration test with golden handoff fixture.",
      ],
      artifact: {
        id: "handoff-manifest",
        title: "Handoff manifest.json",
        content: `{
  "pipeline_id": "intel-to-brief",
  "run_id": "2026-06-22T05:30:00Z",
  "step": 2,
  "producer": "EXTRACT_SOURCES_v1",
  "schema_version": 1,
  "outputs": ["staging/run_abc/items.json"]
}`,
      },
    }),
    buildGuideSection({
      id: "conditional-branching",
      number: "3.4",
      title: "Conditional branching in pipelines",
      subtitle:
        "How to design a pipeline that takes different paths based on Skill output",
      takeaway:
        "Branch on explicit enum in handoff — HIGH/MEDIUM/LOW, PASS/FAIL — never on free-text model prose.",
      why: "Parsing natural language branch decisions in pipelines is fragile; structured flags are testable.",
      paragraphs: [
        [
          s("Pattern: CLASSIFY_v1 writes route.json with { path: 'escalate' | 'standard' | 'skip' }. Workflow router reads route.json — escalate → DRAFT_URGENT_v1; standard → DRAFT_NORMAL_v1; skip → log only."),
        ],
        [
          s("Always include default branch for unknown values → human review queue. Test all branch paths in pipeline test matrix."),
        ],
      ],
      workflowSteps: [
        "Define route enum in classifier Skill Result.",
        "Map each enum to downstream Skill.",
        "Default branch → REVIEW_QUEUE.",
        "Test one fixture per branch.",
      ],
    }),
    buildGuideSection({
      id: "error-propagation",
      number: "3.5",
      title: "Error propagation in pipelines",
      subtitle:
        "What happens when a Skill in the middle of a pipeline fails — the failure containment design",
      takeaway:
        "Fail-fast default — stop pipeline, preserve partial artifacts in failed/{run_id}/, notify with step number.",
      why: "Downstream steps on bad data amplify errors; 'best effort' completion without flags is worse than clean stop.",
      paragraphs: [
        [
          s("Policies: "),
          x("fail-fast", "Stop; no downstream invoke."),
          s(", "),
          x("optional branch", "Mark branch optional — join proceeds with partial data flagged."),
          s(", "),
          x("retry step", "Retry failed node only, max 2."),
          s(". Write PIPELINE_STATUS.json at halt: { failed_step, error, partial_outputs }."),
        ],
        [
          s("Never auto-run compensation (delete files, send retraction email) without human approval tier T3."),
        ],
      ],
      workflowSteps: [
        "Set fail-fast as default in PIPELINE_SPEC.",
        "Preserve inputs + partial outputs on failure.",
        "Notification includes failed_step + run_id.",
        "Document manual resume from step N procedure.",
      ],
      artifact: {
        id: "pipeline-failure-status",
        title: "PIPELINE_STATUS.json on failure",
        content: `{
  "status": "failed",
  "failed_step": 3,
  "skill": "SYNTH_BRIEF_v1",
  "error": "schema_version_mismatch",
  "partial_outputs": ["staging/run_abc/items.json"]
}`,
      },
    }),
    buildGuideSection({
      id: "pipeline-intel-briefing",
      number: "3.6",
      title: "Pipeline example: intelligence to briefing",
      subtitle:
        "Monitor → extract → synthesise → format → deliver — the complete pipeline design",
      takeaway:
        "Intel-to-brief is the reference pipeline — five Skills, manifest handoffs, QA before notify.",
      why: "Walking one complete pipeline teaches handoffs, branching, and monitoring better than abstract rules.",
      paragraphs: [
        [
          s("Nodes: (1) MONITOR_SCAN_v1 — diff new items; (2) EXTRACT_DETAIL_v1 — fetch summaries for new only; (3) SYNTH_INTEL_v1 — theme clustering; (4) FORMAT_BRIEF_v1 — daily template; (5) NOTIFY_DIGEST_v1. Schedule 5:30am; condition: new_items.count > 0 OR force_run flag."),
        ],
        [
          s("QA_SKILL_v1 after SYNTH checks citation count ≥ new_items. HITL T2 on FORMAT output before external forward."),
        ],
      ],
      workflowSteps: [
        "Build nodes 1–2; test handoff manifest.",
        "Add SYNTH + FORMAT; golden week test.",
        "Add NOTIFY + QA; fail-fast enabled.",
        "Run 5 consecutive days before marking prod.",
      ],
      artifact: {
        id: "pipeline-intel-brief-spec",
        title: "Intel → brief pipeline spec",
        content: `MONITOR_SCAN → EXTRACT_DETAIL → SYNTH_INTEL → QA_CHECK → FORMAT_BRIEF → NOTIFY
handoff: manifest.json per step
trigger: cron 05:30 + condition new_items>0
failure: fail-fast, notify #ops`,
      },
    }),
    buildGuideSection({
      id: "pipeline-inbox-action",
      number: "3.7",
      title: "Pipeline example: inbox to action",
      subtitle:
        "Read → classify → draft → queue → send — the communication pipeline",
      takeaway:
        "Inbox-to-action stops at queue — send is human or separate approval workflow with T3 gate.",
      why: "Communication pipelines have the highest blast radius — design stop points before auto-send fantasies.",
      paragraphs: [
        [
          s("Nodes: READ_INBOX → CLASSIFY_INTENT_v1 → route.json branch → DRAFT_REPLY_v1 (per intent) → QUEUE_REVIEW_v1 (review.md list) → optional SEND_v1 only with approval flag file present."),
        ],
        [
          s("High-risk intents (legal, churn, executive) always branch to ESCALATE_HUMAN — no draft auto-generation."),
        ],
      ],
      workflowSteps: [
        "Implement through QUEUE only.",
        "Human review UI = folder of review.md files.",
        "Pilot 30 days drafts-only.",
        "SEND node requires approval.flag per message id.",
      ],
      example: {
        title: "route.json branch",
        body: "{ intent: 'support' | 'sales' | 'legal' | 'spam' } — legal → escalate; support → DRAFT_SUPPORT_v1; spam → archive log only.",
      },
    }),
    buildGuideSection({
      id: "pipeline-data-decision",
      number: "3.8",
      title: "Pipeline example: data to decision",
      subtitle:
        "Ingest → clean → analyse → interpret → report — the analytical pipeline",
      takeaway:
        "Data-to-decision separates COMPUTE from NARRATE — numbers in JSON, story in markdown, both from same run_id.",
      why: "Mixed compute+narrate Skills drift metrics; split nodes make reconciliation and QA tractable.",
      paragraphs: [
        [
          s("Nodes: INGEST_EXPORT_v1 → CLEAN_NORMALISE_v1 (schema + dedupe) → ANALYSE_METRICS_v1 (metrics.json) → INTERPRET_FLAGS_v1 (flags + explanations) → REPORT_COMPOSE_v1 (template from metrics + flags). QA reconciles metrics.json to source."),
        ],
        [
          s("Schedule after upstream export condition true. Report lands ~/Reports/decisions/{date}/ with metrics.json, report.md, QA_PASS.json."),
        ],
      ],
      workflowSteps: [
        "Golden test: metrics match spreadsheet.",
        "INTERPRET only reads metrics.json — not raw CSV.",
        "REPORT cites metric keys inline.",
        "Weekly ops review of flags false-positive rate.",
      ],
      artifact: {
        id: "pipeline-data-decision-spec",
        title: "Data → decision pipeline spec",
        content: `INGEST → CLEAN → ANALYSE → INTERPRET → QA → REPORT
artifacts: metrics.json, flags.json, report.md
trigger: condition export_ready.flag
SLI: QA PASS by 7am Mon`,
      },
    }),
  ],
};
