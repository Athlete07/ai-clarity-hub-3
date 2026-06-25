import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_05_AIOPS: GuideConcept = {
  number: 5,
  title: "AIOps and Event Correlation",
  subtitle:
    "Event ingestion, correlation, alert grouping, root cause signals, anomaly detection, topology logic, integrations, and a PDI tuning walkthrough",
  sections: [
    buildGuideSection({
      id: "aiops-value",
      number: "5.1",
      title: "The AIOps value proposition",
      subtitle:
        "Why alert volumes in large estates make manual management impossible",
      takeaway:
        "AIOps reduces noise by grouping, correlating, and prioritising alerts into actionable signals — enabling humans to focus on remediation instead of triage.",
      why: "In large estates, alert volume grows faster than headcount. Without correlation, teams drown and miss real incidents.",
      paragraphs: [
        [
          s("AIOps aims to reduce "),
          x("mean time to detect", "Faster signal extraction from alert storms."),
          s(" and "),
          x("mean time to triage", "Fewer alerts per incident through grouping and suppression."),
          s(".",
          ),
        ],
        [
          s("The key deliverable is not a dashboard. It is a workflow: event → actionable alert group → incident → resolution with audit."),
        ],
        [
          s("Prerequisite: CI quality in CMDB. Correlation is topology-driven; bad CMDB creates bad correlation."),
        ],
      ],
      workflowSteps: [
        "Measure baseline: alerts/day, incidents/day, alerts per incident.",
        "Identify top 3 noise sources (flapping monitors, duplicate tooling).",
        "Define target: reduce alerts per incident by X% in 90 days.",
      ],
      example: {
        title: "Alert storms became one incident",
        body: "A monitoring outage produced 15k alerts. Correlation grouped them into 12 actionable alert groups, creating 1 major incident and a handful of tasks — preventing the service desk from collapsing.",
      },
    }),
    buildGuideSection({
      id: "event-management",
      number: "5.2",
      title: "Event Management and AI",
      subtitle:
        "How the platform ingests, correlates, and suppresses events at scale",
      takeaway:
        "ServiceNow Event Management ingests events from monitoring tools, normalises them, applies rules + ML correlation, and can suppress redundant events — producing actionable alerts and incidents.",
      why: "AIOps isn’t “ML on dashboards.” It’s operational automation on event streams.",
      paragraphs: [
        [
          s("Pipeline: ingest → normalise → enrich with CI/topology → correlate/group → suppress/notify → open incident or task."),
        ],
        [
          s("Rules still matter: maintenance windows and known noisy monitors should be handled deterministically. ML complements rules by catching patterns rules miss."),
        ],
        [
          s("Governance: correlation decisions must be observable. Store correlation reason and grouping evidence where possible."),
        ],
      ],
      workflowSteps: [
        "Pick one monitoring source to integrate first.",
        "Define normalisation mapping and CI lookup strategy.",
        "Run in observe-only mode; compare correlated groups vs human triage.",
      ],
      example: {
        title: "Observe-only prevented suppression mistakes",
        body: "Correlation looked great on day 1 but grouped two unrelated services due to CMDB relationship error. Observe-only mode revealed the issue before suppressing real alerts in production.",
      },
    }),
    buildGuideSection({
      id: "alert-grouping",
      number: "5.3",
      title: "Alert grouping",
      subtitle:
        "How ML clusters related alerts into a single actionable event",
      takeaway:
        "Grouping collapses many noisy alerts into one actionable unit based on time window, CI/service, signatures, and topology — reducing triage overhead dramatically.",
      why: "Grouping is where most AIOps ROI comes from: fewer things for humans to look at.",
      paragraphs: [
        [
          s("Signals: temporal proximity, shared CI, shared metric, shared error signature, and dependency relations."),
        ],
        [
          s("Design: group for actionability. If grouped alerts require different responders, grouping hurts. Use assignment boundaries as part of grouping logic."),
        ],
        [
          s("Measure: alerts per alert-group and alert-groups per incident."),
        ],
      ],
      workflowSteps: [
        "Define grouping window (e.g., 5–15 minutes) per service.",
        "Validate grouping on historical storms.",
        "Tune grouping rules per CI class and monitoring source.",
      ],
      example: {
        title: "Disk alerts grouped into one remediation",
        body: "Hundreds of disk threshold alerts across nodes were grouped into one ‘capacity remediation’ alert group routed to platform team. No more per-host tickets.",
      },
    }),
    buildGuideSection({
      id: "root-cause-identification",
      number: "5.4",
      title: "Root cause identification",
      subtitle:
        "Tracing event chains back to originating CI",
      takeaway:
        "Root cause signals use topology chains and event propagation patterns to highlight likely origin — accelerating diagnosis without pretending ML can prove causation automatically.",
      why: "Correlation reduces noise; root cause hints reduce time-to-diagnosis.",
      paragraphs: [
        [
          s("Topology matters: if a database CI fails, dependent apps throw errors. Root cause hinting should point toward upstream CIs with earliest/highest severity events."),
        ],
        [
          s("Avoid over-automation: root cause suggestions should be advisory with evidence (dependency path, timing)."),
        ],
        [
          s("Use feedback: when engineers confirm root cause, capture that label to improve future hinting."),
        ],
      ],
      workflowSteps: [
        "Ensure CMDB dependency mapping is accurate for top services.",
        "Test root cause hints on past incidents; compare to known root causes.",
        "Introduce engineer feedback capture in postmortems.",
      ],
      example: {
        title: "DB root cause flagged early",
        body: "Many app alerts fired, but root cause hint highlighted database CI based on earliest failure and dependency fan-out. Engineers went straight to DB, reducing MTTR.",
      },
    }),
    buildGuideSection({
      id: "anomaly-detection",
      number: "5.5",
      title: "Anomaly detection",
      subtitle:
        "Identifying unusual patterns in metric streams before incidents occur",
      takeaway:
        "Anomaly detection flags deviations from normal baselines (latency spikes, error rate shifts) so teams can act before users notice — but must be tuned to avoid alert fatigue.",
      why: "Proactive detection is the difference between reactive incident management and resilient operations.",
      paragraphs: [
        [
          s("Baseline selection: use seasonality and business cycles. A Monday morning spike may be normal; a midnight spike may not."),
        ],
        [
          s("Tune sensitivity by service tier. Critical services deserve higher sensitivity; low-impact services should be quieter."),
        ],
        [
          s("Tie anomalies to action: open investigation task, run automation, or notify on-call — not just an extra dashboard chart."),
        ],
      ],
      workflowSteps: [
        "Select 5 key metrics for one critical service.",
        "Enable anomaly detection; run in observe-only mode for 2 weeks.",
        "Adjust thresholds; promote to alerting only after false positives are manageable.",
      ],
      example: {
        title: "Latency anomaly prevented outage",
        body: "Anomaly detection flagged rising DB latency; team added capacity before it caused incident. The system paid for itself in one avoided outage.",
      },
    }),
    buildGuideSection({
      id: "topology-correlation",
      number: "5.6",
      title: "Topology-based correlation",
      subtitle:
        "How CMDB relationships inform event grouping logic",
      takeaway:
        "Topology correlation uses CMDB relationships to group events along dependency graphs — enabling service-level alert groups rather than host-level noise.",
      why: "Without topology, correlation is shallow. With topology, correlation becomes service-aware.",
      paragraphs: [
        [
          s("Dependency graphs allow correlation to follow “blast radius”: upstream CI failures generate downstream symptoms. Grouping by topology aligns alerts to service ownership."),
        ],
        [
          s("CMDB hygiene is mandatory: wrong relationships create wrong correlation. Invest in discovery and relationship validation for top services first."),
        ],
        [
          s("Governance: keep a “topology exceptions” backlog to fix relationship errors discovered through correlation mistakes."),
        ],
      ],
      workflowSteps: [
        "Pick one business service and map its top dependencies in CMDB.",
        "Validate topology correlation on that service only.",
        "Expand service-by-service as CMDB quality improves.",
      ],
      example: {
        title: "Service-level correlation reduced noise",
        body: "Instead of 500 host alerts, teams saw 3 service alert groups mapped to business services. Routing and comms improved because alerts matched ownership boundaries.",
      },
    }),
    buildGuideSection({
      id: "integrations",
      number: "5.7",
      title: "Integration with monitoring tools",
      subtitle:
        "Connecting Dynatrace, Datadog, Splunk, and others to Event Management",
      takeaway:
        "Integrations deliver events, enrich with metadata, map to CIs, and standardise severity — without consistent mapping, correlation quality collapses.",
      why: "Tool integration is where most AIOps programs stall. The details matter: mappings, dedup, and normalisation.",
      paragraphs: [
        [
          s("Integration tasks: event ingestion, normalisation, CI identification, service mapping, and dedup across tools."),
        ],
        [
          s("Avoid double counting: the same incident may appear in multiple tools. Use correlation rules to collapse duplicates."),
        ],
        [
          s("Operational discipline: track integration changes like code releases; a mapping change can flood alerts."),
        ],
      ],
      workflowSteps: [
        "Integrate one tool first; validate CI mapping accuracy.",
        "Add second tool; test cross-tool dedup and grouping.",
        "Create runbook for integration breakages (missing fields, new tags).",
      ],
      example: {
        title: "Two tools, one truth",
        body: "Datadog and Splunk both generated alerts for same outage. Correlation collapsed them into one alert group. Teams stopped opening duplicate incidents and comms became consistent.",
      },
    }),
    buildGuideSection({
      id: "pdi-aiops-walkthrough",
      number: "5.8",
      title: "Configuration and tuning walkthrough",
      subtitle:
        "Building an AIOps pipeline on PDI with synthetic event data",
      takeaway:
        "PDI AIOps lab: create synthetic events → map to CIs → apply grouping rules → validate alert groups → tune thresholds → measure alerts per group.",
      why: "Hands-on AIOps work is rare. This walkthrough makes you interview-ready even without enterprise tooling access.",
      paragraphs: [
        [s("Step 1: Create a small CMDB sample: one business service with 5–10 dependent CIs.")],
        [s("Step 2: Generate synthetic events with timestamps and CI identifiers.")],
        [s("Step 3: Configure event ingestion and normalisation mapping.")],
        [s("Step 4: Apply correlation/grouping; inspect alert groups and linkage evidence.")],
        [s("Step 5: Tune grouping window and thresholds; rerun synthetic storms.")],
      ],
      workflowSteps: [
        "Model one service topology in CMDB.",
        "Generate 100 synthetic events over 10 minutes across dependent CIs.",
        "Tune grouping until you see 1–5 actionable alert groups instead of 100 alerts.",
      ],
      artifact: {
        id: "synthetic-event-generator-spec",
        title: "Synthetic event lab spec (PDI)",
        description: "Use as a repeatable lab for correlation tuning.",
        content:
          `## Synthetic events\n- 10 CIs in one business service\n- 3 event signatures: latency, error rate, host down\n- 10-minute storm window\n\n## Success criteria\n- Alerts grouped into ≤5 alert groups\n- Root cause hint points to upstream CI (optional)\n- No grouping across unrelated services\n\n## Metrics\n- Alerts per incident\n- Time to identify likely root cause`,
      },
    }),
  ],
};

