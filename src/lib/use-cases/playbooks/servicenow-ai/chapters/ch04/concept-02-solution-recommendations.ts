import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_02_SOLUTION_RECOMMENDATIONS: GuideConcept = {
  number: 2,
  title: "Solution Recommendations",
  subtitle:
    "Classification, routing, priority, similarity, knowledge recommendations, next-best actions, and a hands-on PDI classifier walkthrough",
  sections: [
    buildGuideSection({
      id: "category-classification",
      number: "2.1",
      title: "Category classification",
      subtitle:
        "Auto-categorising incidents, cases, and requests at submission",
      takeaway:
        "Category classification predicts the correct category/subcategory from description, service, CI, and user context — reducing triage workload and improving reporting.",
      why: "Bad categories break everything downstream: routing, SLAs, dashboards, and knowledge coverage. Classification is foundational.",
      paragraphs: [
        [
          s("Best results happen when categories are stable and meaningful. If categories are messy, fix taxonomy first (clustering can help) before training."),
        ],
        [
          s("Design choice: auto-fill category only at high confidence; otherwise suggest and allow agent override. Overrides become training data improvements."),
        ],
        [
          s("Business impact: less triage time + cleaner analytics + better knowledge targeting."),
        ],
      ],
      workflowSteps: [
        "Audit category distribution; merge redundant categories.",
        "Train classifier on short description + service/CI fields.",
        "Deploy as suggestion first; move to auto-fill after validation.",
      ],
      example: {
        title: "Category prediction reduced triage queue",
        body: "Service desk reduced manual categorisation by 55% by suggesting categories with confidence banding. Category accuracy improved reporting quality and reduced wrong knowledge recommendations.",
      },
    }),
    buildGuideSection({
      id: "assignment-group-routing",
      number: "2.2",
      title: "Assignment group routing",
      subtitle:
        "Predicting the correct team based on description, category, and history",
      takeaway:
        "Routing predicts which group should own the work. It’s the highest-ROI PI use case when ticket volume is high and misroutes are costly.",
      why: "Misroutes create delay loops. Routing improvements show up directly in MTTR and agent satisfaction.",
      paragraphs: [
        [
          s("Features that help: short description, category, CI/service, caller location, channel. Avoid noisy features like unstructured work notes."),
        ],
        [
          s("Use confidence thresholds: auto-assign above threshold; suggest in mid band; triage below band. This prevents PI from overreaching."),
        ],
        [
          s("Treat org reorgs as a data event: label mapping should remain stable even when teams rename. Use a stable routing label if necessary."),
        ],
      ],
      workflowSteps: [
        "Compute misroute rate baseline (reassignment count).",
        "Train routing model; deploy with three confidence bands.",
        "Log overrides and retrain monthly in first quarter.",
      ],
      example: {
        title: "Routing reduced reassignments",
        body: "Reassignments fell from 1.8 to 1.2 per incident. MTTR dropped 9% because tickets landed closer to the right team first time.",
      },
    }),
    buildGuideSection({
      id: "priority-prediction",
      number: "2.3",
      title: "Priority prediction",
      subtitle:
        "Suggesting priority vs caller-reported impact/urgency",
      takeaway:
        "Priority prediction learns from historical outcomes to suggest priority bands, reducing both over-prioritisation and missed criticality — but must be governed to avoid under-prioritising real incidents.",
      why: "Priority inflation overwhelms service desks. Predictive suggestions can restore signal — with safety nets.",
      paragraphs: [
        [
          s("Inputs can include CI criticality, affected service, keywords, and caller type. Labels come from final priority after triage, not initial caller input."),
        ],
        [
          s("Safety policy: never allow PI to lower priority for certain categories (security incidents, outages) without human review. Use rules to enforce minimums."),
        ],
        [
          s("Measure: precision on P1/P2 predictions; false negatives are more costly than false positives."),
        ],
      ],
      workflowSteps: [
        "Train priority model using final priority labels.",
        "Apply as suggestion only; require human confirm.",
        "Add rules: minimum priority floors for critical services.",
      ],
      example: {
        title: "Priority inflation reduced without risk",
        body: "PI suggested lower priorities for routine requests; rules prevented lowering for security/outage categories. Queue health improved without missing real P1s.",
      },
    }),
    buildGuideSection({
      id: "similar-records",
      number: "2.4",
      title: "Similar records",
      subtitle:
        "Surfacing similar incidents to speed resolution",
      takeaway:
        "Similarity recommendations retrieve historically similar records so agents can reuse fixes and avoid reinventing troubleshooting — especially valuable for recurring problems.",
      why: "Search for similar incidents is a time sink. Native similarity reduces resolution time and improves consistency.",
      paragraphs: [
        [
          s("Similarity is not exact match. It uses meaning and multiple fields to find neighbors. Quality improves with consistent descriptions and resolution coding."),
        ],
        [
          s("Governance: ensure surfaced incidents are truly resolved and applicable. Highlight confidence and show why it matched (shared CI, category, error signature)."),
        ],
        [
          s("Pair with Now Assist narrative: PI retrieves neighbors; GenAI explains and summarises why they matter (layered design)."),
        ],
      ],
      workflowSteps: [
        "Pilot similarity on 3 recurring categories.",
        "Validate top-3 suggested incidents for 20 new tickets.",
        "Track time-to-first-fix and reuse rate.",
      ],
      example: {
        title: "Recurring Outlook issue resolved faster",
        body: "Similar incident surfacing cut diagnosis time by 30% for one category because agents immediately saw the known fix and the CI patch correlation.",
      },
    }),
    buildGuideSection({
      id: "knowledge-recommendation",
      number: "2.5",
      title: "Knowledge recommendation",
      subtitle:
        "Predicting which knowledge articles are most likely to resolve a ticket",
      takeaway:
        "Knowledge recommendation ranks articles likely to solve the current ticket based on historical resolution associations, category patterns, and text signals — improving deflection and agent assist.",
      why: "Even with great search, agents waste time choosing among similar articles. Recommendations narrow to what historically worked.",
      paragraphs: [
        [
          s("This works only if you have linkage: tickets resolved using KB articles, or at least consistent categories tying to specific articles."),
        ],
        [
          s("Avoid “KB spam”: if low-quality articles are over-recommended, fix knowledge lifecycle and quality scoring first (Chapter 3)."),
        ],
        [
          s("Measure: click-through, accept/use rate, and resolution success after article view."),
        ],
      ],
      workflowSteps: [
        "Ensure KB usage is tracked (which articles actually helped).",
        "Train recommendation model and deploy in agent workspace.",
        "Monitor: recommended article success rate and retire poor performers.",
      ],
      example: {
        title: "Recommendations improved first-contact resolution",
        body: "Agents used recommended KB for common access issues; FCR improved because correct article surfaced immediately, not after multiple searches.",
      },
    }),
    buildGuideSection({
      id: "next-best-action",
      number: "2.6",
      title: "Next best action",
      subtitle:
        "ML-driven guidance that tells agents what to do next",
      takeaway:
        "Next-best-action models predict likely next steps in a case based on similar historical workflows — turning playbooks into recommendations.",
      why: "Standardising action sequences reduces variation and improves quality, especially with junior agents and BPO environments.",
      paragraphs: [
        [
          s("NBA is most valuable when processes are repeatable: access requests, device provisioning, account unlocks, common customer issues."),
        ],
        [
          s("Governance: suggestions must link to policy/playbook steps. Don’t allow “mystery actions” without rationale."),
        ],
        [
          s("Pair with Flow Designer: NBA suggests; Flow executes deterministic steps once approved."),
        ],
      ],
      workflowSteps: [
        "Define the playbook for top 5 case types.",
        "Deploy NBA as suggestions with rationale links.",
        "Measure: adoption and reduction in escalations/rework.",
      ],
      example: {
        title: "Junior agent coaching reduced escalations",
        body: "NBA suggested entitlement check and required info fields before escalation. Escalation rate dropped 14% for one category because agents completed the right steps first time.",
      },
    }),
    buildGuideSection({
      id: "field-value-recommendation",
      number: "2.7",
      title: "Field value recommendation",
      subtitle:
        "Predicting the correct value for any field based on context",
      takeaway:
        "PI can recommend values for many fields (service offering, CI class, location, closure code) as long as you have labels and stable patterns.",
      why: "This is how you gradually reduce manual form filling and improve data quality — a compounding platform advantage.",
      paragraphs: [
        [
          s("Choose high-value fields first: those that drive routing and reporting. Predicting low-impact fields creates noise and fatigue."),
        ],
        [
          s("Use suggestions before auto-fill; track overrides and disagreement to refine model and taxonomy."),
        ],
        [
          s("Beware feedback loops: if models auto-fill wrong values, labels become corrupted. Maintain human oversight during rollout."),
        ],
      ],
      workflowSteps: [
        "Pick one field with consistent historical values.",
        "Train recommendation model and deploy as suggestion.",
        "Monitor override rate; retrain if override > threshold.",
      ],
      example: {
        title: "Closure code recommendation improved consistency",
        body: "Agents selected inconsistent closure codes. Recommendation suggested the most likely code based on resolution notes and category. Reporting improved and follow-up automation became reliable.",
      },
    }),
    buildGuideSection({
      id: "pdi-walkthrough-routing",
      number: "2.8",
      title: "Configuration walkthrough",
      subtitle:
        "Building, training, and deploying an assignment group classifier on PDI",
      takeaway:
        "PDI routing lab: define training dataset → train assignment group classifier → evaluate confusion matrix → deploy with confidence bands → validate with test incidents.",
      why: "This is the hands-on PI demo that wins interviews: it proves you can build and operate ML on the platform.",
      paragraphs: [
        [s("Step 1: Create or import a training dataset of incidents with stable assignment groups.")],
        [s("Step 2: Create PI definition: target = assignment group; inputs = short description, category, CI/service.")],
        [s("Step 3: Train model; review confusion matrix; identify misrouted classes and noisy labels.")],
        [s("Step 4: Deploy with three bands: auto/suggest/triage; log overrides.")],
        [s("Step 5: Create 20 synthetic test incidents; compare model predictions to expected group.")],
      ],
      workflowSteps: [
        "Prepare 1,000+ labeled incidents (or as many as available on PDI).",
        "Train and evaluate; set threshold bands.",
        "Wire to Flow: auto-assign above threshold.",
        "Create a retrain cadence: monthly during pilot.",
      ],
      artifact: {
        id: "pdi-routing-test-pack",
        title: "PDI routing classifier test pack",
        description: "Minimum tests before calling the model production-ready.",
        content:
          `| # | Scenario | Expected | Pass? |\n|---|----------|----------|-------|\n| 1 | VPN cannot connect | Network | |\n| 2 | Email not syncing | Messaging | |\n| 3 | New laptop request | Hardware | |\n| 4 | MFA reset | Identity | |\n| 5 | Printer offline | EUC | |\n| 6 | Ambiguous: “help” | Triage queue | |\n\nAdd 10 more from real tickets; track confidence bands and overrides.`,
      },
    }),
  ],
};

