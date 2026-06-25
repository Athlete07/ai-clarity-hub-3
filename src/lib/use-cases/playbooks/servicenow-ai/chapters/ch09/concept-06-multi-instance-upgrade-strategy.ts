import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_06_MULTI_INSTANCE_UPGRADES: GuideConcept = {
  number: 6,
  title: "Multi-instance and Upgrade Strategy",
  subtitle:
    "Instance separation, promotion, upgrade impacts, regression testing, AI change management, rollback, PDI innovation, and checklists",
  sections: [
    buildGuideSection({
      id: "instance-strategy",
      number: "6.1",
      title: "The instance strategy for AI",
      subtitle: "What belongs in dev, test, and prod (and why separate)",
      takeaway:
        "Separate instances are non-negotiable for AI: prompts, routing, skills, agents, and models must be promoted through environments with evaluation gates.",
      why: "AI changes can affect user trust and compliance. You need controlled rollout and rollback.",
      paragraphs: [
        [
          s("Dev: rapid iteration. Test: evaluation + security validation. Prod: controlled rollout with monitoring and feature flags."),
        ],
      ],
      workflowSteps: [
        "Define environment-specific provider connections and secrets.",
        "Keep production data out of dev by default.",
        "Use feature flags to stage AI changes in prod.",
      ],
    }),
    buildGuideSection({
      id: "config-promotion",
      number: "6.2",
      title: "AI configuration promotion",
      subtitle: "Move skills, agent definitions, and models between instances",
      takeaway:
        "Promote AI configs like code: version prompts, capability schemas, routing rules, and model definitions. Promotion requires eval results and approvals.",
      why: "Manual copying creates drift and untracked changes.",
      paragraphs: [
        [
          s("Bundle configuration artifacts: prompt versions, schemas, policy tables, decision thresholds, and dashboards."),
        ],
      ],
      workflowSteps: [
        "Create a promotion package checklist per release.",
        "Include eval outputs and sign-offs.",
        "Track versions in ADRs and trust packs.",
      ],
    }),
    buildGuideSection({
      id: "upgrade-impact",
      number: "6.3",
      title: "Upgrade impact on AI",
      subtitle: "Release changes that affect behavior and configuration",
      takeaway:
        "Upgrades can change AI skill behavior, available actions, default prompts, search ranking, and PI internals. Treat every upgrade as an AI regression event.",
      why: "AI output quality can change without any local configuration change.",
      paragraphs: [
        [
          s("Track: new AI features, changed defaults, updated models, and new governance knobs. Re-run eval suites and compare."),
        ],
      ],
      workflowSteps: [
        "Maintain a list of critical AI workflows.",
        "Re-run eval suites after each upgrade.",
        "Roll out upgrades with feature flags and monitoring.",
      ],
    }),
    buildGuideSection({
      id: "ai-regression-testing",
      number: "6.4",
      title: "Regression testing for AI",
      subtitle: "Detect when upgrades change output quality",
      takeaway:
        "Regression tests must be outcome-based: schema compliance, groundedness, routing accuracy, and user edit distance — not “looks good to me”.",
      why: "Subjective reviews miss drift and silent regressions.",
      paragraphs: [
        [
          s("Keep a fixed eval set per capability and score: correctness, safety, format adherence, latency, and cost."),
        ],
      ],
      workflowSteps: [
        "Build eval suites (prompts + expected outputs/citations).",
        "Automate scoring where possible.",
        "Require pass thresholds to promote changes.",
      ],
    }),
    buildGuideSection({
      id: "ai-change-management",
      number: "6.5",
      title: "The AI change management process",
      subtitle: "Governance for changes that affect AI",
      takeaway:
        "Create a dedicated AI change path: risk tiering, approvals, test evidence, monitoring plan, and rollout cohorts. Changes to prompts/models are production changes.",
      why: "Without change management, teams hotfix prompts in prod and break trust.",
      paragraphs: [
        [
          s("Treat prompt changes like code deploys: version, peer review, test evidence, and staged rollout."),
        ],
      ],
      workflowSteps: [
        "Define change risk tiers (assist vs action).",
        "Require evidence attachments (eval, dashboards).",
        "Use feature flags for controlled rollout.",
      ],
    }),
    buildGuideSection({
      id: "rollback-planning",
      number: "6.6",
      title: "Rollback planning",
      subtitle: "Revert to previous AI configuration safely",
      takeaway:
        "Rollback must be designed: pin provider/model versions, keep previous prompt versions, and have a kill switch/degraded mode ready for urgent incidents.",
      why: "When AI output changes harm users, you need fast containment.",
      paragraphs: [
        [
          s("Rollback assets: previous prompt versions, previous routing rules, cached outputs, and a clear communication plan."),
        ],
      ],
      workflowSteps: [
        "Implement version pinning and feature flags.",
        "Maintain a rollback runbook per capability.",
        "Practice rollback in test before production.",
      ],
    }),
    buildGuideSection({
      id: "pdi-innovation",
      number: "6.7",
      title: "PDI as a permanent innovation environment",
      subtitle: "Continuous experimentation without risking production",
      takeaway:
        "Use PDI to prototype and demo. Promote only proven patterns to dev/test/prod. PDI is your experimentation sandbox, not a shortcut to production.",
      why: "Teams confuse “it worked in PDI” with “it’s production-ready”.",
      paragraphs: [
        [
          s("Keep a PDI lab backlog: new prompts, RAG experiments, agent tools, and evaluation packs."),
        ],
      ],
      workflowSteps: [
        "Maintain a PDI playbook for repeatable demos.",
        "Capture learnings as templates and ADRs.",
        "Move only hardened patterns to shared environments.",
      ],
    }),
    buildGuideSection({
      id: "upgrade-checklist",
      number: "6.8",
      title: "The AI upgrade checklist",
      subtitle: "Before/during/after steps for every release",
      takeaway:
        "Use a structured checklist for upgrades: inventory changes, rerun eval suites, validate governance, stage rollout, and monitor. Upgrades without AI validation are risky.",
      why: "This is the operational discipline that keeps AI trustworthy over time.",
      paragraphs: [[s("Treat each upgrade as a controlled experiment with explicit acceptance criteria.")]],
      workflowSteps: [
        "Before: inventory AI configs, eval suites, and dashboards.",
        "During: upgrade in test and rerun eval; validate residency/retention settings.",
        "After: staged rollout with monitoring and rollback readiness.",
      ],
      artifact: {
        id: "ai-upgrade-checklist",
        title: "AI upgrade checklist (copy/paste)",
        description: "Use for every ServiceNow release cycle.",
        content:
          `Before\n- Inventory AI capabilities + owners\n- Snapshot prompt versions + routing rules\n- Confirm provider connections and secrets\n\nTest\n- Upgrade test instance\n- Run eval suites (quality/cost/latency)\n- Run security checklist + injection tests\n\nProd rollout\n- Enable via feature flags (pilot cohort)\n- Monitor p95 latency, errors, spend, feedback\n- Keep rollback plan ready`,
      },
    }),
  ],
};

