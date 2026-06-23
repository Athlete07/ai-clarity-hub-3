import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_02_GOVERNANCE_SAFETY: GuideConcept = {
  number: 2,
  title: "Governance & Safety",
  subtitle:
    "The oversight structures that make autonomous operation safe — what a professional Cowork deployment looks like",
  sections: [
    buildGuideSection({
      id: "minimum-access",
      number: "2.1",
      title: "The principle of minimum access",
      subtitle:
        "Giving Cowork access to only the systems and files it genuinely needs for each Skill",
      takeaway:
        "Scope per Skill, not per machine — narrow folders, connector allowlists, and model tools are the default.",
      why: "Broad access simplifies day-one demos and complicates day-90 incident response.",
      paragraphs: [
        [
          s("Minimum access matrix: each Skill lists read paths, write paths, connectors, channels. No Skill gets 'whole Drive' or 'all Gmail.' Quarterly permission review removes paths no longer referenced in TAR specs."),
        ],
        [
          s("Separate "),
          x("sandbox profile", "Test paths and test connectors only."),
          s(" from "),
          x("production profile", "Production allowlists — different OAuth where possible."),
        ],
      ],
      workflowSteps: [
        "Document allowlists in every TAR spec.",
        "Remove unused paths from Cowork settings.",
        "Quarterly access review with IT.",
        "Deny by default for new connectors.",
      ],
      artifact: {
        id: "access-matrix",
        title: "Skill access matrix",
        content: `| Skill | read | write | connectors | HITL |
|-------|------|-------|------------|------|`,
      },
    }),
    buildGuideSection({
      id: "sensitive-data-handling",
      number: "2.2",
      title: "Sensitive data handling in Cowork",
      subtitle:
        "What to never put in a Skill, how to handle credentials, and the data hygiene for automated workflows",
      takeaway:
        "Never in Skills: secrets, full customer PII dumps, unretractable instructions to exfiltrate. Credentials in connector store only.",
      why: "Skill files copy to wikis, git, and logs — treat them as published documentation.",
      paragraphs: [
        [
          s("Data classes: public, internal, confidential, restricted. Restricted workflows require T3 approval, encrypted staging if policy demands, retention limits on raw/. Redact logs; manifest records counts not content for mail/message bodies."),
        ],
        [
          s("Prohibited in TAR: API keys, passwords, SSN patterns in examples, 'send all files to external URL.' Train teams on prompt injection via fetched docs (Ch 2 §1.7)."),
        ],
      ],
      workflowSteps: [
        "Classify each production workflow data tier.",
        "Scan Skills for secret patterns quarterly.",
        "Redact manifest logs for confidential runs.",
        "Incident playbook if PII leaked to wrong folder.",
      ],
      artifact: {
        id: "data-hygiene-rules",
        title: "Cowork data hygiene rules",
        content: `- No secrets in Skills
- Staging retention per class
- Restricted → T3 + encrypted staging if required
- Manifest: metadata only for mail bodies`,
      },
    }),
    buildGuideSection({
      id: "output-destinations",
      number: "2.3",
      title: "Output destinations and access control",
      subtitle:
        "Where Skill outputs go and who can see them — the data governance of automated output",
      takeaway:
        "Three-tier paths: sandbox, staging (review), production — ACLs match human access; automation does not bypass folder permissions.",
      why: "Cowork writing board packs to a world-readable folder is a governance failure, not a Skill bug.",
      paragraphs: [
        [
          s("Map destinations: who can read, who can write, who gets notified. Production paths require validation PASS + HITL tier met. Shared drives: use service account with explicit ACL, not personal home directory."),
        ],
        [
          s("Version outputs by run_id or date — never overwrite sole copy. Deprecation: archive old reports, do not delete without retention policy check."),
        ],
      ],
      workflowSteps: [
        "Define path taxonomy in OPS_WIKI.",
        "ACL review per production destination.",
        "Automated writes only to staging until promoted.",
        "Audit random sample of output ACLs quarterly.",
      ],
    }),
    buildGuideSection({
      id: "human-approval-gate",
      number: "2.4",
      title: "The human approval gate",
      subtitle:
        "Designing Skills with an explicit approval step before output is delivered or action is taken",
      takeaway:
        "Approval = explicit artifact (approval.flag, ticket ID, button in review queue) — not 'someone probably saw the Slack message.'",
      why: "Ambiguous approval is how automated emails and customer-facing docs slip out.",
      paragraphs: [
        [
          s("HITL tiers (Ch 1): T0 none (rare), T1 notify, T2 review queue (default), T3 dual approval for external/customer/restricted. SEND_* Skills check approval/{id}.flag exists and signer != Skill runner identity."),
        ],
        [
          s("Approval audit: who approved, when, run_id, output hash. Revoke approval.flag on output edit — require re-approval."),
        ],
      ],
      workflowSteps: [
        "Assign HITL tier per workflow in SOP.",
        "Implement approval.flag pattern for writes/sends.",
        "Log approvals in manifest.",
        "Legal sign-off for T3 customer comms.",
      ],
      artifact: {
        id: "approval-flag-spec",
        title: "approval.flag spec",
        content: `{
  "run_id": "...",
  "approver": "user@company.com",
  "approved_at": "ISO8601",
  "output_hash": "sha256..."
}`,
      },
    }),
    buildGuideSection({
      id: "skill-change-management",
      number: "2.5",
      title: "Skill change management",
      subtitle:
        "How to update a running Skill safely without disrupting downstream workflows",
      takeaway:
        "Version bump → regression → staged rollout → schedule pointer update — never edit production Skill in place without version suffix.",
      why: "In-place edits break audit trail and leave pipelines on unknown behaviour mid-week.",
      paragraphs: [
        [
          s("Change flow: PR to TAR spec → implement SKILL_vN+1 → regression fixtures → parallel run in shadow mode (write sandbox only) → compare outputs → flip workflow to new version → monitor 3 runs → deprecate vN."),
        ],
        [
          s("Breaking handoff schema: bump schema_version; support N-1 for one sprint; notify downstream Skill owners."),
        ],
      ],
      workflowSteps: [
        "Never edit v1 in place — create v2.",
        "Shadow run 3 cycles before cutover.",
        "Update SKILL_INDEX version column.",
        "Announce breaking changes in #ops.",
      ],
      artifact: {
        id: "change-management-checklist",
        title: "Skill change management checklist",
        content: `[ ] TAR PR reviewed
[ ] Version _vN+1 created
[ ] Regression pass
[ ] Shadow runs OK
[ ] Workflow pointer updated
[ ] 3 prod runs monitored`,
      },
    }),
    buildGuideSection({
      id: "cowork-for-teams-governance",
      number: "2.6",
      title: "Cowork for teams",
      subtitle:
        "The governance model for shared Skills and shared connectors — who can create, modify, and schedule",
      takeaway:
        "RBAC: creators draft Skills, owners approve production, schedulers bind triggers, admins manage connectors — four roles minimum.",
      why: "Shared Cowork without roles becomes nobody's problem until something breaks.",
      paragraphs: [
        [
          s("Roles: "),
          x("Creator", "Draft Skills in sandbox."),
          s(", "),
          x("Owner", "DRI for TAR, regression, incidents."),
          s(", "),
          x("Scheduler", "Attach triggers after readiness gate."),
          s(", "),
          x("Admin", "Connectors, machine permissions, audit."),
          s(". Shared library in git or drive; changes via PR not direct UI edit for production Skills."),
        ],
        [
          s("Team connectors use service identity; personal OAuth only for individual sandboxes."),
        ],
      ],
      workflowSteps: [
        "Define roles in COWORK_GOV.md.",
        "Assign owner per production Skill.",
        "Require owner approval for schedule changes.",
        "Quarterly role recertification.",
      ],
    }),
    buildGuideSection({
      id: "audit-logging",
      number: "2.7",
      title: "Audit logging for Cowork",
      subtitle:
        "Maintaining a record of what Cowork did, when, and what it produced — the accountability trail",
      takeaway:
        "Correlate run history + manifest + connector audit + approval flags — answer 'what happened?' in one run_id lookup.",
      why: "Regulators and security ask for trails; building them after an incident is too late.",
      paragraphs: [
        [
          s("Log retention per policy (e.g. 90d run metadata, 1y approval records). Export monthly AUDIT_BUNDLE for compliance. Include: trigger, Skills versions, paths read/written, connector calls, validation result, approver."),
        ],
        [
          s("Platform caveat: "),
          x("Cowork activity may not yet appear in org Compliance API or all enterprise audit logs", "Verify current admin guide — export run history + manifests until platform audit matures; Ch 7 §2.7."),
          s(". Your AUDIT_BUNDLE is the authoritative trail today alongside connector vendor logs."),
        ],
      ],
      workflowSteps: [
        "Standardise manifest schema across workflows.",
        "Monthly audit export to compliance folder.",
        "Verify Compliance API coverage quarterly (Ch 7 §2.7).",
        "Test run_id lookup drill quarterly.",
        "Align retention with legal.",
      ],
      artifact: {
        id: "audit-bundle-contents",
        title: "Monthly AUDIT_BUNDLE contents",
        content: `run_history_export.csv
manifests/{month}/
approval_flags/
connector_audit_summary.json`,
      },
    }),
    buildGuideSection({
      id: "cowork-security-review",
      number: "2.8",
      title: "The Cowork security review",
      subtitle:
        "The periodic assessment of your Cowork configuration for security risks, stale permissions, and unnecessary access",
      takeaway:
        "Semi-annual security review: permissions, connectors, offboarded users, Skill content scan, incident retrospective.",
      why: "Automation attack surface grows with every connector and scheduled write.",
      paragraphs: [
        [
          s("Review agenda: filesystem scope vs SKILL_INDEX, connector OAuth scopes, revoked employees, Skills with web/MCP tools, staging retention, failed auth attempts, injection near-misses. Output: findings + remediation owners + dates."),
        ],
        [
          s("Pair with IT security; use same checklist as Ch 4 §1.8 connector audit. Red findings block new production schedules until resolved."),
        ],
      ],
      workflowSteps: [
        "Schedule semi-annual review on calendar.",
        "Run automated secret scan on Skill repo.",
        "Verify offboarding revoked Cowork access.",
        "Publish findings to leadership.",
      ],
      artifact: {
        id: "security-review-checklist",
        title: "Cowork security review checklist",
        content: `[ ] Filesystem scope minimal
[ ] Connector scopes current
[ ] Offboarded users revoked
[ ] No secrets in Skills
[ ] Staging retention compliant
[ ] Incident log reviewed`,
      },
    }),
  ],
};
