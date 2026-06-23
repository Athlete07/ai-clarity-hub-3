import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_01_RELIABILITY_QC: GuideConcept = {
  number: 1,
  title: "Reliability & Quality Control",
  subtitle:
    "Making Cowork workflows reliable enough to run without supervision — the engineering discipline for automated operations",
  sections: [
    buildGuideSection({
      id: "reliability-requirements",
      number: "1.1",
      title: "The reliability requirements for automated Skills",
      subtitle:
        "What you need to be true before a Skill runs without review",
      takeaway:
        "Production gate: five clean runs, defined acceptance tests, failure policy, owner, and HITL tier — all documented before unattended schedule.",
      why: "Teams schedule on enthusiasm; production requires a checklist security and finance would sign.",
      paragraphs: [
        [
          s("Before "),
          x("unattended production", "Schedule or event trigger writing outside sandbox without per-run human review."),
          s(", verify: (1) TAR spec signed off. (2) Test matrix passed (Ch 2 §1.8). (3) Output validation Skill attached. (4) Alert on failure configured. (5) Rollback path documented. (6) Token estimate within budget. (7) HITL tier explicit."),
        ],
        [
          s("Reliability is tiered: T0 auto-deliver only for low-stakes internal transforms; T1 notify; T2 staging review (default); T3 approval flag before external write."),
        ],
        [
          s("Label workflow specs "),
          x("NATIVE vs PATTERN", "Ch 7 §2.3 — do not fail readiness because a pattern is not a menu item."),
          s(" so reviewers know what the product guarantees vs what your team implements."),
        ],
      ],
      workflowSteps: [
        "Complete PRODUCTION_READINESS checklist (artifact).",
        "Stakeholder sign-off on HITL tier.",
        "Enable schedule only after checklist green.",
        "Re-run checklist on any Skill version bump.",
      ],
      artifact: {
        id: "production-readiness-gate",
        title: "Production readiness gate",
        content: `[ ] TAR spec + owner
[ ] Test matrix 5/5
[ ] QA/validation Skill attached
[ ] Failure alerts configured
[ ] HITL tier documented
[ ] Token estimate approved
[ ] Rollback procedure written`,
      },
    }),
    buildGuideSection({
      id: "output-validation",
      number: "1.2",
      title: "Output validation",
      subtitle:
        "How to verify that a Skill produced acceptable output — the quality check that runs after the Skill",
      takeaway:
        "Validation is deterministic code-style checks on outputs — schema, counts, reconciliations — not 'ask Claude if it looks good.'",
      why: "LLM self-review of its own output is circular; production needs measurable gates.",
      paragraphs: [
        [
          s("VALIDATE_* Skills run after primary transform: required files exist, JSON schema matches, totals reconcile to source within tolerance, banned patterns absent. Emit "),
          x("VALIDATION.json", "{ status: PASS|FAIL, checks: [{name, pass, detail}] }."),
          s(" Pipeline blocks downstream on FAIL."),
        ],
        [
          s("Separate validation from narrative QA — numbers first, prose second. Golden fixtures from human baseline become regression oracles."),
        ],
      ],
      workflowSteps: [
        "List 5–10 deterministic checks per workflow.",
        "Implement VALIDATE Skill or script gate.",
        "Block emit/notify on FAIL.",
        "Log validation results in manifest.",
      ],
      artifact: {
        id: "validation-check-template",
        title: "Validation check template",
        content: `checks:
  - name: schema_match
  - name: row_count_delta < 0.2
  - name: revenue_sum_matches_source
  - name: no_pii_in_output
on_fail: stop_pipeline + notify`,
      },
    }),
    buildGuideSection({
      id: "failure-alerting",
      number: "1.3",
      title: "Failure alerting",
      subtitle:
        "How to know immediately when a Skill fails rather than discovering it hours later",
      takeaway:
        "Fail loud, succeed quiet — failure alerts are immediate, paginated for critical workflows; success digests bundle.",
      why: "Discovering failure at standup means the automation already failed the business once.",
      paragraphs: [
        [
          s("Alert payload: workflow name, run_id, failed Skill + version, error class, partial outputs path, owner @mention. Severity: "),
          x("P1", "Money, security, board — immediate page."),
          s(", "),
          x("P2", "Ops miss — Slack within 5 min."),
          s(", "),
          x("P3", "Degraded — digest only."),
        ],
        [
          s("No alert on success except daily digest. Test alerts monthly — muted channels kill programs silently."),
        ],
      ],
      workflowSteps: [
        "Map workflows to P1/P2/P3.",
        "Wire failure → correct channel per tier.",
        "Include run_id in every alert.",
        "Monthly fire-drill: simulate failure.",
      ],
      artifact: {
        id: "alert-template",
        title: "Failure alert template",
        content: `[P2] Cowork FAIL: {workflow}
run_id: {id} | Skill: {name}_v{n}
error: {class} — {message}
partial: {paths}
owner: @{handle}`,
      },
    }),
    buildGuideSection({
      id: "graceful-degradation",
      number: "1.4",
      title: "Graceful degradation",
      subtitle:
        "Skills that produce partial output gracefully rather than failing silently when inputs are incomplete",
      takeaway:
        "Degraded success is explicit — manifest flags missing inputs; output sections say 'unavailable' — never fabricate or omit silently.",
      why: "Silent omission on missing Gmail or CSV reads produced board-ready lies — degradation must be visible.",
      paragraphs: [
        [
          s("Pattern: per-input try/fetch → on fail append to degraded_inputs[] in manifest → primary Skill still runs on available data → Result template includes "),
          x("Data completeness", "Section listing missing sources and impact on conclusions."),
        ],
        [
          s("Do not mark run SUCCESS if P1 input missing — use PARTIAL status and route to review queue."),
        ],
      ],
      workflowSteps: [
        "Classify inputs required vs optional.",
        "Required missing → FAIL or PARTIAL+review.",
        "Optional missing → degrade with flag.",
        "Template section for completeness.",
      ],
      example: {
        title: "Monday brief with missing CRM export",
        body: "manifest: degraded_inputs: [crm_export]. Brief includes Finance + Slack sections; CRM section states 'export not found — pipeline metrics omitted.' Status PARTIAL → review queue.",
      },
    }),
    buildGuideSection({
      id: "review-queue",
      number: "1.5",
      title: "The review queue",
      subtitle:
        "Designing workflows so uncertain outputs land in a human review queue rather than going straight to a destination",
      takeaway:
        "Review queue = folder or ticket list with review.md, confidence scores, and SLA — default destination for T2 workflows.",
      why: "Uncertainty is normal; routing it to humans is design, not failure.",
      paragraphs: [
        [
          s("Route to queue when: validation WARN (not FAIL), classifier confidence < threshold, sensitivity keywords hit, or PARTIAL degraded status. Queue item: output files + REVIEW_BRIEF.md (what to check, 60-second scan guide)."),
        ],
        [
          s("Queue SLA: P1 items 4h, P2 24h. Stale queue alerts ops lead. Approve → move to prod path + approval.flag; reject → archive + feedback to Skill owner."),
        ],
      ],
      workflowSteps: [
        "Create ~/Cowork/review_queue/{workflow}/.",
        "Define routing rules in pipeline router.",
        "REVIEW_BRIEF template per workflow.",
        "Weekly queue hygiene meeting.",
      ],
      artifact: {
        id: "review-brief-template",
        title: "REVIEW_BRIEF.md template",
        content: `# Review — {workflow} / {run_id}
## 60-second check
- [ ] Key number: ___
## Confidence / flags
## Approve → move to {prod_path}`,
      },
    }),
    buildGuideSection({
      id: "skill-regression-testing",
      number: "1.6",
      title: "Skill regression testing",
      subtitle:
        "How to verify that a Skill still performs correctly after you modify it — the regression check before redeployment",
      takeaway:
        "Golden fixtures + diff against expected outputs — rerun full test matrix on every version bump before schedule update.",
      why: "Small TAR edits break column order or totals; regression catches drift before Monday 6am.",
      paragraphs: [
        [
          s("Maintain REGRESSION_FIXTURES/ per Skill: anonymised inputs + expected outputs (json/md). On vN+1: run all fixtures; diff key fields; human spot-check if diff tool flags change. Block promotion if golden test fails."),
        ],
        [
          s("Changelog in SKILL_SPEC: what changed, why, which fixtures updated. Pipelines: regression entire DAG when any node bumps major version."),
        ],
      ],
      workflowSteps: [
        "Capture golden fixtures at v1 promotion.",
        "Automate diff on key fields where possible.",
        "Regression gate in change management (Ch 5 §2.5).",
        "Archive old fixtures when schema versions sunset.",
      ],
      artifact: {
        id: "regression-run-log",
        title: "Regression run log",
        content: `| Skill version | fixture | key_fields_match | reviewer | date |
|---------------|---------|------------------|----------|------|`,
      },
    }),
    buildGuideSection({
      id: "token-monitoring",
      number: "1.7",
      title: "Token usage monitoring",
      subtitle:
        "Tracking how much each Skill costs in tokens — the cost visibility that prevents budget surprises",
      takeaway:
        "Per-workflow token ledger — estimate from manual runs, alert on 2× weekly average, finance digest monthly.",
      why: "Unmonitored schedules discover budget at invoice — too late for trust.",
      paragraphs: [
        [
          s("Track: tokens per run_id, per Skill, per workflow, per week. Cowork run history + export to TOKEN_LEDGER.csv. Compare actual vs estimate; investigate outliers (duplicate runs, missing pagination caps)."),
        ],
        [
          s("Cost controls: model routing, max_files, chunking, condition triggers vs empty cron. ROI section (§3.6) uses token cost as input."),
        ],
      ],
      workflowSteps: [
        "Record baseline tokens from 5 manual runs.",
        "Set weekly budget per workflow.",
        "Alert at 80% and 120% of budget.",
        "Monthly finance review with ledger export.",
      ],
      artifact: {
        id: "token-ledger-columns",
        title: "TOKEN_LEDGER.csv columns",
        content: `week, workflow, run_count, tokens_total, tokens_per_run, budget, variance_pct`,
      },
    }),
    buildGuideSection({
      id: "production-skill-audit",
      number: "1.8",
      title: "The production Skill audit",
      subtitle:
        "The periodic review of your running Skills — what to check, how often, and what to do when a Skill is underperforming",
      takeaway:
        "Quarterly audit every production Skill: still needed, still passing regression, owner active, permissions minimal, token trend OK.",
      why: "Skill libraries rot — duplicates, stale schedules, and zombie workflows erode trust and budget.",
      paragraphs: [
        [
          s("Audit checklist per Skill: last 10 runs success rate, validation pass rate, queue rejection rate, token trend, incident count, owner, downstream dependents. Outcomes: keep, tune, deprecate, merge duplicate."),
        ],
        [
          s("Underperforming: freeze schedule → root cause (Task, Action, Result, input drift) → fix version → regression → re-enable. Kill Skills unused 90 days unless compliance-mandated."),
        ],
      ],
      workflowSteps: [
        "Export SKILL_INDEX + run stats quarterly.",
        "Score each Skill keep/tune/kill.",
        "Assign owners for tune items.",
        "Document deprecations with migration path.",
      ],
      artifact: {
        id: "skill-audit-scorecard",
        title: "Skill audit scorecard",
        content: `| Skill | success% | validation% | tokens/wk | incidents | action |
|-------|----------|-------------|-----------|-----------|--------|`,
      },
    }),
  ],
};
