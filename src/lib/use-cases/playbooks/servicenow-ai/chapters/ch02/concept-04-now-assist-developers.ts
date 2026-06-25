import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_04_NOW_ASSIST_DEVELOPERS: GuideConcept = {
  number: 4,
  title: "Now Assist for Developers",
  subtitle:
    "Code generation, Flow generation, ATF tests, explanation, docs, refactoring, and PDI enablement",
  sections: [
    buildGuideSection({
      id: "code-generation",
      number: "4.1",
      title: "Code generation in Script Editor",
      subtitle:
        "How Now Assist writes GlideRecord queries, Business Rules, and client scripts",
      takeaway:
        "Developer Now Assist generates ServiceNow-native code patterns — GlideRecord, gs, g_form — from natural language, with accept/reject in Script Editor.",
      why: "Admins and developers interview on 'does it write good GlideRecord?' Know limits and review discipline.",
      paragraphs: [
        [
          s("Strengths: boilerplate queries, field validation stubs, simple business rules. Weaknesses: complex transactions, scope chains, performance-critical bulk operations — always review."),
        ],
        [
          s("Always validate: "),
          x("addQuery ACL impact", "Generated queries may bypass intent if tables are sensitive."),
          s(", null checks, async patterns, and update() in before rules."),
        ],
        [
          s("Team standard: generated code goes through same peer review as human code."),
        ],
      ],
      workflowSteps: [
        "On PDI: open Script Editor → invoke Now Assist for Development.",
        "Prompt: 'GlideRecord query open incidents assigned to Network group.'",
        "Compare output to team coding standard — note gaps.",
      ],
      example: {
        title: "Junior admin — first business rule in 20 minutes",
        body: "New admin used assist for date validation on change request. Senior corrected getValue() pattern. Still faster than blank page — learning accelerated with review, not blind trust.",
      },
    }),
    buildGuideSection({
      id: "flow-generation",
      number: "4.2",
      title: "Flow generation",
      subtitle:
        "How natural language descriptions produce Flow Designer flows",
      takeaway:
        "Flow generation translates intent into draft flows — triggers, conditions, actions — that builders refine in Flow Designer; not production-ready without human validation.",
      why: "Flow is where citizen developers collide with AI — governance matters.",
      paragraphs: [
        [
          s("Describe: 'When incident priority becomes 1, notify major incident manager and create problem task.' Assist proposes flow skeleton."),
        ],
        [
          s("Review: error handling, subflow reuse, ACL on actions, idempotency on re-triggers."),
        ],
        [
          s("Citizen developer policy: generated flows require admin approval before promote."),
        ],
      ],
      workflowSteps: [
        "Generate draft flow from plain English on PDI.",
        "Walk through test plan — happy path and edge cases.",
        "Add logging and failure notifications before activate.",
      ],
      example: {
        title: "Catalog request flow — 2 hours vs 1 day",
        body: "Builder generated 80% of hardware request flow from description. Manual work: integration action tuning and approval branch. Net savings one day; quality gate prevented missing rollback email.",
      },
    }),
    buildGuideSection({
      id: "test-generation",
      number: "4.3",
      title: "Test generation",
      subtitle:
        "How Now Assist creates ATF test cases from flow and script descriptions",
      takeaway:
        "Assist drafts Automated Test Framework steps — open form, set field, submit, assert — accelerating regression coverage for flows and critical scripts.",
      why: "Test debt blocks upgrades. ATF generation is an underused Now Assist developer win.",
      paragraphs: [
        [
          s("Input: flow name or script purpose. Output: ATF step sequence with suggested assertions."),
        ],
        [
          s("Human adds: test data setup, teardown, environment constraints, flaky UI waits."),
        ],
        [
          s("Integrate with CI pipeline — tests generated in sprint, not hoarded in draft."),
        ],
      ],
      workflowSteps: [
        "Pick one production-critical flow.",
        "Generate ATF draft; run on PDI.",
        "Fix selectors and timing; commit to test suite.",
      ],
      example: {
        title: "Upgrade regression — 12 new ATF tests in a sprint",
        body: "Team generated ATF coverage for 12 high-risk flows before Vancouver upgrade. Caught 3 breakages in test env. Assist did not replace test strategy — accelerated authoring.",
      },
    }),
    buildGuideSection({
      id: "code-explanation",
      number: "4.4",
      title: "Code explanation",
      subtitle:
        "How developers use Now Assist to understand inherited scripts and legacy code",
      takeaway:
        "Explain mode walks through legacy Business Rules, Script Includes, and client scripts — invaluable for acquisitions and consultant handoffs.",
      why: "Every ServiceNow shop has tribal knowledge in opaque scripts. Explanation reduces bus factor.",
      paragraphs: [
        [
          s("Paste or point assist at script — ask for line-by-line explanation, side effects, and tables touched."),
        ],
        [
          s("Verify explanation against execution — assist may miss dynamic table names."),
        ],
        [
          s("Document output into technical debt register — explanation becomes spec for refactor."),
        ],
      ],
      workflowSteps: [
        "Select top 5 highest-incident legacy scripts.",
        "Generate explanations; senior dev validates.",
        "Add comments or wiki pages from validated explanations.",
      ],
      example: {
        title: "Acquisition integration — 400 Script Includes",
        body: "Acquired company's instance had minimal documentation. Assist explanation accelerated mapping of integration Script Includes. Humans flagged 12 dangerous patterns assist missed — still 3x faster than manual-only read.",
      },
    }),
    buildGuideSection({
      id: "documentation-generation",
      number: "4.5",
      title: "Documentation generation",
      subtitle:
        "Producing technical documentation from code and flow definitions",
      takeaway:
        "Assist generates runbooks, field dictionaries, and flow narratives from artifacts — keeping docs closer to truth if regenerated on change.",
      why: "Auditors and handoffs need docs. AI lowers the cost of staying current.",
      paragraphs: [
        [
          s("Generate: flow diagram narrative, input/output contract, error paths, related tables."),
        ],
        [
          s("Store in knowledge or Git-linked docs — version with release."),
        ],
        [
          s("Mark auto-generated sections — human owner signs off quarterly."),
        ],
      ],
      workflowSteps: [
        "Pick flow without documentation.",
        "Generate doc; owner edits for operational truth.",
        "Link doc from flow properties or team wiki.",
      ],
      example: {
        title: "SOX audit — flow documentation in one week",
        body: "Audit required documentation for 40 financial flows. Assist generated first draft; owners corrected approval paths. Audit passed with minor edits — vs months of manual doc debt.",
      },
    }),
    buildGuideSection({
      id: "refactoring-assist",
      number: "4.6",
      title: "Refactoring assist",
      subtitle:
        "How Now Assist suggests improvements to existing scripts",
      takeaway:
        "Refactor suggestions target readability, GlideRecord best practices, and duplication reduction — not automatic apply in production.",
      why: "Technical debt sprints benefit from AI pair programming — with senior review.",
      paragraphs: [
        [
          s("Ask: 'refactor for performance' or 'replace nested GlideRecord with single query' — compare suggestions to platform best practices docs."),
        ],
        [
          s("Watch for: over-abstraction, breaking subtle business logic, deprecated APIs."),
        ],
        [
          s("Pair with ATF — refactor without tests is gambling."),
        ],
      ],
      workflowSteps: [
        "Run ATF baseline on target script's flows.",
        "Apply refactor suggestion in dev.",
        "Re-run ATF; performance test on large dataset.",
      ],
      example: {
        title: "GlideRecord get() in loop — assist caught it",
        body: "Legacy incident update rule used get() per row in loop. Assist suggested bulk query pattern. 40s → 3s on test batch. Senior approved after ATF green.",
      },
    }),
    buildGuideSection({
      id: "developer-productivity-case",
      number: "4.7",
      title: "The developer productivity case",
      subtitle:
        "Time saved, error rates, and the realistic developer uplift",
      takeaway:
        "Realistic uplift: 15–30% on authoring tasks (scripts, flows, tests, docs); near-zero on judgment-heavy architecture. Error rate rises if review skipped.",
      why: "Platform leaders need honest numbers — not '10x developer' keynote math.",
      paragraphs: [
        [
          s("Measure: story points, cycle time, defect escape rate, ATF coverage — before/after assist adoption."),
        ],
        [
          s("Biggest gains: onboarding new developers, documentation debt, repetitive ATF."),
        ],
        [
          s("Smallest gains: net-new architecture, complex integrations — still human-led."),
        ],
      ],
      workflowSteps: [
        "Track assist usage in dev team for 4 sprints.",
        "Survey: where did it help vs waste time?",
        "Adjust guidelines — when assist is required vs optional.",
      ],
      example: {
        title: "Platform team — 6-month developer metrics",
        body: "8 developers, assist enabled. Flow authoring time −22%, script defects in UAT −11% (more review), doc coverage 45% → 78%. Architecture spikes unchanged — assist did not replace design meetings.",
      },
    }),
    buildGuideSection({
      id: "developer-pdi-walkthrough",
      number: "4.8",
      title: "Configuration walkthrough",
      subtitle:
        "Enabling and using Now Assist for Development on PDI",
      takeaway:
        "PDI: enable developer assist SKU/plugin → Script Editor and Flow Designer assist icons → configure org coding standards in prompt hints where supported → pilot on non-prod apps only.",
      why: "Hands-on enablement closes the chapter for builders.",
      paragraphs: [
        [
          s("Enable Now Assist for Development in instance settings (per release documentation)."),
        ],
        [
          s("Verify roles: admin, developer, or custom role with assist entitlement."),
        ],
        [
          s("Exercise: generate GlideRecord, explain script, draft ATF, generate flow — four labs in one afternoon."),
        ],
      ],
      workflowSteps: [
        "PDI → enable developer assist.",
        "Lab 1: GlideRecord from NL prompt.",
        "Lab 2: explain unknown Script Include.",
        "Lab 3: ATF for simple catalog flow.",
        "Lab 4: document that flow.",
      ],
      artifact: {
        id: "developer-assist-labs",
        title: "PDI Developer Now Assist — half-day lab",
        description: "Self-paced lab checklist.",
        content: `## Morning labs
1. GlideRecord: query + update with guard
2. Business Rule: before insert validation
3. Explain inherited Script Include (paste)

## Afternoon labs
4. Flow from NL description + manual fix
5. ATF generation + run
6. Doc export to team wiki

## Exit criteria
- [ ] Peer review checklist used on all accepts
- [ ] No assist-accepted code in prod without ATF
- [ ] Team coding standard doc linked in wiki`,
      },
    }),
  ],
};
