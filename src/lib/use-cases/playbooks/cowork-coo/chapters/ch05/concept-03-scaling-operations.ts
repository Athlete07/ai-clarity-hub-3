import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_03_SCALING_OPERATIONS: GuideConcept = {
  number: 3,
  title: "Scaling Your Cowork Operation",
  subtitle:
    "Growing from a few helpful Skills to a comprehensive operations layer — the scaling principles and the organisational discipline",
  sections: [
    buildGuideSection({
      id: "cowork-inventory",
      number: "3.1",
      title: "The Cowork inventory",
      subtitle:
        "Mapping every recurring task in your role to a potential Cowork Skill — the audit that reveals the full automation opportunity",
      takeaway:
        "Full inventory = every recurring task with frequency, minutes, inputs, automate-now/next/never — the master backlog for your COO layer.",
      why: "Ad hoc Skill sprawl misses high-ROI work; inventory reveals the 80% you have not touched.",
      paragraphs: [
        [
          s("Audit sources: calendar repeats, email templates, weekly reports, standup rituals, close checklists. Columns: task, cadence, mins/run, data source, Skill exists?, priority score. Revisit quarterly as roles change."),
        ],
        [
          s("Cross-reference Ch 3 §1.8 schedule inventory and Ch 2 SKILL_INDEX — one master COWORK_INVENTORY.md."),
        ],
      ],
      workflowSteps: [
        "Block 2h — list all recurring tasks 90 days.",
        "Score frequency × minutes.",
        "Mark automate-now vs human-only.",
        "Feed top 10 into roadmap.",
      ],
      artifact: {
        id: "cowork-inventory-template",
        title: "COWORK_INVENTORY.md",
        content: `| Task | Cadence | min/run | Source | Skill? | Priority | Status |
|------|---------|---------|--------|--------|----------|--------|`,
      },
    }),
    buildGuideSection({
      id: "automation-priority-matrix",
      number: "3.2",
      title: "The automation priority matrix",
      subtitle:
        "Which tasks to automate first based on frequency, time cost, and automation reliability — the sequencing framework",
      takeaway:
        "Prioritise high-frequency × high-minutes × high-reliability — quick wins build trust for harder workflows.",
      why: "Automating rare complex judgment first kills programs; sequencing matters as much as tooling.",
      paragraphs: [
        [
          s("Matrix axes: "),
          x("Impact", "Time saved × people affected."),
          s(", "),
          x("Feasibility", "Stable inputs, clear TAR, low compliance risk."),
          s(". Quadrant 1 (high/high): automate now. Q2 (high impact, low feasibility): invest in Skill design. Q3: batch later. Q4: never automate."),
        ],
        [
          s("Reliability score: can you write acceptance tests? If no, defer until yes."),
        ],
      ],
      workflowSteps: [
        "Plot inventory items on 2×2.",
        "Pick 3 Q1 items for next sprint.",
        "One connector workflow max per quarter early on.",
        "Replot after each production launch.",
      ],
      example: {
        title: "Q1 vs Q4",
        body: "Q1: weekly CSV normalise (weekly, 45 min, schema stable). Q4: negotiate enterprise contract (yearly, judgment-heavy) — human-only.",
      },
    }),
    buildGuideSection({
      id: "skill-interdependency",
      number: "3.3",
      title: "Skill interdependency mapping",
      subtitle:
        "Understanding which Skills depend on others and how to manage the dependency graph as it grows",
      takeaway:
        "Dependency graph: nodes = Skills, edges = handoff manifests — version bumps ripple; map before you change.",
      why: "Upstream schema change without downstream update breaks pipelines silently at join step.",
      paragraphs: [
        [
          s("Maintain DEPENDENCY_GRAPH.md or diagram: FINANCE_INGEST → NORMALISE → VARIANCE → MEMO. Tag each edge with schema_version. Before deprecating Skill, list dependents and migration plan."),
        ],
        [
          s("Critical path: workflows on board-week calendar — change freeze 7 days before. Non-critical Skills can iterate faster."),
        ],
      ],
      workflowSteps: [
        "Draw graph for all production pipelines.",
        "Label schema_version on edges.",
        "Change freeze policy for critical path.",
        "Update graph on every new pipeline.",
      ],
      artifact: {
        id: "dependency-graph-snippet",
        title: "Dependency graph notation",
        content: `INGEST_v2 --[manifest v1]--> ANALYSE_v3 --[metrics.json]--> REPORT_v1`,
      },
    }),
    buildGuideSection({
      id: "team-operation-scale",
      number: "3.4",
      title: "Cowork for a team operation",
      subtitle:
        "Scaling from personal automation to a shared operational layer — the Skills and governance that work at team scale",
      takeaway:
        "Shared layer = central SKILL_INDEX, shared connectors, named owners, team review queue — not everyone's laptop with different paths.",
      why: "Personal Cowork genius does not scale; shared library and ops machine do.",
      paragraphs: [
        [
          s("Team patterns: dedicated ops host or VM always on for schedules; shared staging/review paths; Slack #cowork-ops for failures; weekly 15min triage rotation. Personal sandboxes fork shared Skills with PATH_MAPPING."),
        ],
        [
          s("Avoid N duplicate Skills — merge FINANCE_MEMO_v3 for all analysts; parameterise client folder in Context."),
        ],
      ],
      workflowSteps: [
        "Stand up shared ops environment.",
        "Consolidate duplicate Skills.",
        "Rotate triage duty weekly.",
        "Single source of truth for SKILL_INDEX.",
      ],
    }),
    buildGuideSection({
      id: "cowork-coe",
      number: "3.5",
      title: "The Cowork centre of excellence",
      subtitle:
        "Building a small internal capability for Skill development, quality assurance, and library management",
      takeaway:
        "CoE = 1–2 operators + playbook — TAR reviews, regression gates, library hygiene — not a 20-person platform team.",
      why: "Without CoE, quality variance across creators erodes trust; with CoE, teams ship Skills faster safely.",
      paragraphs: [
        [
          s("CoE services: TAR review office hours, regression fixture templates, connector allowlist maintenance, quarterly audits, training onboarding (§3.7). Metrics: production Skills count, success rate, time-to-production for new Skills."),
        ],
        [
          s("CoE does not own every workflow — domain owners own Skills; CoE owns standards and gates."),
        ],
      ],
      workflowSteps: [
        "Name CoE lead (often ops or chief of staff).",
        "Publish standards doc from this playbook.",
        "Weekly 30min office hours for Skill authors.",
        "Track CoE metrics monthly.",
      ],
    }),
    buildGuideSection({
      id: "measuring-roi",
      number: "3.6",
      title: "Measuring Cowork ROI",
      subtitle:
        "How to quantify the time, cost, and quality impact of your Cowork automation — the business case for continued investment",
      takeaway:
        "ROI = (hours saved × loaded rate) − token cost − ops overhead — track monthly per workflow, not vibes.",
      why: "Finance funds what you measure; hero stories do not survive budget season.",
      paragraphs: [
        [
          s("Hours saved: (manual baseline mins − review mins) × runs/month. Quality: error rate, missed deadline count, queue rejection rate. Cost: TOKEN_LEDGER + ops host + CoE time. Report simple dashboard to leadership quarterly."),
        ],
        [
          s("Include intangible: faster Monday standup, fewer Sunday nights — but anchor on measurable hours first."),
        ],
      ],
      workflowSteps: [
        "Baseline manual time before automation.",
        "Track review time post-automation.",
        "Subtract token + infra cost.",
        "Quarterly ROI slide for leadership.",
      ],
      artifact: {
        id: "roi-worksheet",
        title: "Cowork ROI worksheet",
        content: `hours_saved_mo = (manual_mins - review_mins) * runs / 60
value = hours_saved * loaded_rate
cost = tokens_mo + infra
ROI = value - cost`,
      },
    }),
    buildGuideSection({
      id: "cowork-onboarding",
      number: "3.7",
      title: "Cowork onboarding for new team members",
      subtitle:
        "Using the Skill library as a way to transfer operational knowledge — the documentation and training pattern",
      takeaway:
        "Onboarding = read SKILL_INDEX → sandbox golden tests → shadow triage → own one Skill — ops knowledge in artifacts, not tribal chat.",
      why: "New hires historically relearned Monday rituals by osmosis; Skill library is the curriculum.",
      paragraphs: [
        [
          s("Week 1: playbook Ch 1–2, run manual workflows, read TAR specs for team Skills. Week 2: fix one documentation gap, pass one regression fixture. Week 3: triage rotation. Week 4: propose automate-next from inventory."),
        ],
        [
          s("Pair with PATH_MAPPING for their sandbox; share bundles (Ch 2 §3.8) standardised."),
        ],
      ],
      workflowSteps: [
        "Create ONBOARDING.md linking SKILL_INDEX.",
        "Assign buddy + one sandbox workflow.",
        "Golden test completion = gate to prod access.",
        "30-day feedback to CoE.",
      ],
      artifact: {
        id: "onboarding-checklist",
        title: "Cowork onboarding checklist",
        content: `[ ] Read playbook Ch 1-2
[ ] Run 3 team workflows manually
[ ] Pass golden test in sandbox
[ ] 1 triage shift
[ ] Update one TAR doc`,
      },
    }),
    buildGuideSection({
      id: "fully-automated-operation",
      number: "3.8",
      title: "The fully automated operation",
      subtitle:
        "What it looks like when Cowork is running a significant portion of your operational workload — the vision and the discipline that makes it possible",
      takeaway:
        "Full automation is 60–80% prep and review, not 100% unattended — humans at gates, machines on cadence, audit always on.",
      why: "Pursuing 100% unattended sets up disappointment; realistic vision sustains multi-year programs.",
      paragraphs: [
        [
          s("Mature state: morning triage 15 min; Sunday nights gone; board inputs staged Friday; failures rare and loud; SKILL_INDEX 30+ Skills with owners; ROI positive; security reviews clean. Humans decide; Cowork prepares."),
        ],
        [
          s("Discipline never ends: regression on change, quarterly audits, inventory refresh, CoE standards, no secret bypass of HITL for 'just this once.'"),
        ],
      ],
      workflowSteps: [
        "Define your 12-month maturity targets.",
        "Measure % ops hours on review vs manual prep.",
        "Celebrate gates working, not zero humans.",
        "Annual retrospective — playbook update.",
      ],
      example: {
        title: "Mature ops lead Monday",
        body: "6:15 triage dashboard — all green. 6:20 skim brief + weekly report in review queue — 2 flags, approve. 6:35 standup. Cowork ran 6 workflows overnight; human time 20 min not 90.",
      },
    }),
  ],
};
