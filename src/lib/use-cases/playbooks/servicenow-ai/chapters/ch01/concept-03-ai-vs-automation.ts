import { buildGuideSection, s, x } from "../../../../playbook-helpers";
import type { GuideConcept } from "../../../../guide-types";

export const CONCEPT_03_AI_VS_AUTOMATION: GuideConcept = {
  number: 3,
  title: "AI vs Automation vs Intelligence",
  subtitle:
    "Rules, ML, and generative models — knowing the ceiling of each and how to combine them in real ServiceNow workflows",
  sections: [
    buildGuideSection({
      id: "rule-based-automation",
      number: "3.1",
      title: "Rule-based automation",
      subtitle:
        "What Business Rules, Workflows, and Flow Designer do without AI — and why they remain essential",
      takeaway:
        "Deterministic automation encodes known policy: if priority is 1, notify major incident manager. No probabilities — explicit logic you can audit and regression-test.",
      why: "AI hype makes teams forget rules still carry most enterprise throughput. Architects who over-AI lose trust when behavior becomes opaque.",
      paragraphs: [
        [
          s("Business Rules run on table events — fast, synchronous guardrails. "),
          x("Workflows (legacy)", "Long-running approvals — still present in many instances."),
          s(" "),
          x("Flow Designer", "Modern visual orchestration — the default for new automation."),
          s(" handle multi-step processes with clear diagrams."),
        ],
        [
          s("Use rules when policy is stable and explainable to regulators: segregation of duties, mandatory approvals, SLA timers."),
        ],
        [
          s("Interview tip: say 'AI suggests; rules enforce' — shows maturity."),
        ],
      ],
      workflowSteps: [
        "Document one policy that must never be probabilistic (e.g. SOX approval).",
        "Implement as Flow with no AI steps — baseline reliability.",
        "Only add AI where rules cannot express judgment.",
      ],
      example: {
        title: "Change advisory — rules hold the line",
        body: "Emergency changes still require CAB notification via Flow — no ML override. PI suggests risk category; rule blocks auto-approval for production CIs. GenAI drafts implementation plan. Each layer stays in its lane.",
      },
    }),
    buildGuideSection({
      id: "predictive-automation",
      number: "3.2",
      title: "Predictive automation",
      subtitle:
        "Where ML classification and routing add probabilistic decision-making — and how to govern confidence thresholds",
      takeaway:
        "Predictive automation recommends or auto-acts when model confidence exceeds thresholds — blending ML with rules in Flow branches.",
      why: "This is the middle layer most ServiceNow AI projects should master before agents.",
      paragraphs: [
        [
          s("PI outputs feed "),
          x("conditional automation", "If confidence > 0.8, assign group; else route to triage queue."),
          s(" — humans see recommendations below threshold."),
        ],
        [
          s("Monitor "),
          x("precision and recall", "False auto-routes hurt more than false manual queues — tune thresholds accordingly."),
          s(" monthly after process or org changes."),
        ],
        [
          s("Predictive without feedback loops drifts — retrain triggers should be operational, not annual."),
        ],
      ],
      workflowSteps: [
        "Set auto-action threshold on PDI PI solution.",
        "Log overrides when agents change PI suggestion — label for retrain.",
        "Review override rate weekly in POC.",
      ],
      example: {
        title: "Auto-assignment with safety valve",
        body: "PI confidence ≥0.82 auto-assigns; 0.65–0.82 shows suggestion; below 0.65 triage pool. Override rate 11% first month → retrain with overrides as negative labels. Override rate 6% month three.",
      },
    }),
    buildGuideSection({
      id: "generative-intelligence",
      number: "3.3",
      title: "Generative intelligence",
      subtitle:
        "What large language models add that neither rules nor classical ML replicate",
      takeaway:
        "LLMs handle language, synthesis, ambiguous instructions, and multi-step reasoning over retrieved context — not tabular classification alone.",
      why: "GenAI is the wrong tool for 'if category=X'; it is the right tool for 'explain impact to executive in three bullets.'",
      paragraphs: [
        [
          s("GenAI strengths: summarise 50 work notes, draft customer comms in brand tone, translate policy to steps, propose resolution from similar cases."),
        ],
        [
          s("GenAI weaknesses: "),
          x("hallucination", "Plausible false statements — especially on missing knowledge."),
          s(", non-determinism, higher unit cost, slower than PI scoring."),
        ],
        [
          s("Ground GenAI in AI Search retrieval and record fields — ungrounded prompts are interview failures and production incidents."),
        ],
      ],
      workflowSteps: [
        "List outputs that are language vs labels — only language goes to GenAI.",
        "Require citations to KB or record fields in agent prompts/skills.",
        "Human approve external-facing GenAI text in POC.",
      ],
      example: {
        title: "Executive briefing from incident thread",
        body: "Major incident: 47 work notes, 12 stakeholders. Now Assist produces three-bullet exec summary with links to KB and timeline fields — task that took 20 minutes manually. PI still owns severity; rules own notifications; GenAI owns narrative.",
      },
    }),
    buildGuideSection({
      id: "ceiling-of-each",
      number: "3.4",
      title: "Knowing the ceiling of each",
      subtitle:
        "Failure modes when you use the wrong capability for the task",
      takeaway:
        "Rules break on judgment-heavy edge cases. PI fails without labels and on novel intents. GenAI fails on strict deterministic policy and numeric precision. Match tool to ceiling.",
      why: "Architecture reviews expose wrong-layer choices quickly — this section prevents public mistakes.",
      paragraphs: [
        [
          s("Anti-pattern: thousand-line Virtual Agent topics for ever-changing policy — use GenAI + KB instead."),
        ],
        [
          s("Anti-pattern: GenAI to classify tickets when 50k labelled incidents exist — PI is cheaper and measurable."),
        ],
        [
          s("Anti-pattern: business rules with nested ifs mimicking language understanding — unmaintainable."),
        ],
      ],
      workflowSteps: [
        "Red-team your design: where would this fail?",
        "Assign fallback: human queue, rule default, or 'I don't know' response.",
        "Document failure mode in runbook before go-live.",
      ],
      example: {
        title: "GenAI for SLA calculation — wrong ceiling",
        body: "Team prompted Now Assist to compute SLA breach times from complex holiday calendars. Inconsistent results. Fix: Flow + SLA conditions (rules) for breach; GenAI only explains breach reason to caller. Ceiling respected.",
      },
    }),
    buildGuideSection({
      id: "combining-all-three",
      number: "3.5",
      title: "Combining all three",
      subtitle:
        "Architecture that uses rules where determinism matters and AI where judgment matters",
      takeaway:
        "Layered architecture: rules enforce policy, PI optimize routing, GenAI handle language, agents orchestrate when mature — single record, single audit trail.",
      why: "This is the reference architecture slide for ServiceNow AI — memorize the layering order.",
      paragraphs: [
        [
          s("Entry: Flow trigger or conversation. "),
          x("Retrieve", "AI Search + record context."),
          s(" → "),
          x("Classify", "PI or agent tool."),
          s(" → "),
          x("Articulate", "Now Assist / GenAI."),
          s(" → "),
          x("Enforce", "Rules on writes."),
          s(" → log."),
        ],
        [
          s("Each layer exposes confidence and rationale fields on the record for downstream analytics."),
        ],
        [
          s("POC success criteria should name which layer improved which metric."),
        ],
      ],
      workflowSteps: [
        "Draw layered architecture for one workflow — label each step's layer.",
        "Implement on PDI bottom-up: rules first, PI second, GenAI third.",
        "Measure incremental value per layer — avoid skipping to top.",
      ],
      example: {
        title: "Layered incident intake — reference stack",
        body: "Portal intake (Flow) → duplicate detection (PI similarity) → merge rule (automation) → summary for agent (GenAI) → assignment (PI) → SLA (rules). Removing GenAI still works; removing rules breaks compliance.",
      },
    }),
    buildGuideSection({
      id: "incident-management-case",
      number: "3.6",
      title: "Real case: incident management with all three layers",
      subtitle:
        "Before and after architecture — metrics, governance, and lessons",
      takeaway:
        "Mature incident management combines deflection (VA + search), routing (PI), agent assist (Now Assist), and policy (Flow/rules) — not a single AI toggle.",
      why: "Case studies win interviews and POC funding. Use this pattern as your template.",
      paragraphs: [
        [
          s("Before: keyword KB, manual assignment, agents writing notes from scratch, inconsistent priority."),
        ],
        [
          s("After: Virtual Agent + AI Search deflect 35% L1; PI routes 80% within 12s; Now Assist drafts resolution templates; Flow enforces P1 escalation; major incident agent proposes comms."),
        ],
        [
          s("Metrics: MTTR −22%, reopen rate −8%, agent satisfaction +15 points — attributed per layer in monthly review."),
        ],
      ],
      workflowSteps: [
        "Baseline MTTR, reopen rate, containment for 30 days.",
        "Roll out layers in sequence over 12 weeks — one metric owner per layer.",
        "Publish before/after architecture diagram to stakeholders.",
      ],
      example: {
        title: "Regional IT — 12-week layered rollout",
        body: "Weeks 1–4: search + knowledge cleanup. Weeks 5–6: PI routing. Weeks 7–9: Now Assist on work notes. Weeks 10–12: Virtual Agent L1 intents. No agentic writes until month 6. Steering committee saw metric attribution each phase — sustained funding.",
      },
    }),
    buildGuideSection({
      id: "explain-to-stakeholders",
      number: "3.7",
      title: "How to explain the distinction to a business stakeholder",
      subtitle:
        "Non-technical framing that lands in steering committees and budget meetings",
      takeaway:
        "Use three metaphors: traffic laws (rules), GPS ETA (prediction), executive assistant draft (generation). Business cares about risk, cost, and speed — not model names.",
      why: "Senior architects spend half their time translating — this script saves meetings.",
      paragraphs: [
        [
          s("'Rules are company policy in software — same answer every time. Prediction is your best dispatcher learning from history. Generation is a skilled writer who drafts but does not send without your approval.'"),
        ],
        [
          s("Cost framing: prediction is pennies per ticket at scale; generation is dollars per thousand interactions — budget accordingly."),
        ],
        [
          s("Risk framing: we automate sends only above confidence with audit — never 'the AI decided' without a record."),
        ],
      ],
      workflowSteps: [
        "Prepare one-slide metaphor diagram for your sponsor.",
        "Tie each layer to a KPI they already track.",
        "Propose phased spend aligned to proof per layer.",
      ],
      example: {
        title: "CFO question — 'Why three AI things?'",
        body: "CIO answered: 'Search finds the answer, ML picks the team, GenAI writes the email — like hiring three specialists vs one generalist who does none well.' Approved phased POC spend with clear kill criteria per phase.",
      },
    }),
    buildGuideSection({
      id: "maturity-model",
      number: "3.8",
      title: "The maturity model",
      subtitle:
        "How organisations progress from automation to prediction to generation — and where agentic fits",
      takeaway:
        "Maturity stages: (1) digital workflow, (2) predictive operations, (3) generative assist, (4) governed agents. Skipping stages creates fragile programs.",
      why: "Use this model in roadmaps, interviews, and transformation proposals — it shows you think in enterprise time horizons.",
      paragraphs: [
        [
          s("Stage 1 — "),
          x("workflow digitised", "Records, SLAs, Flow — no ML required."),
          s(". Stage 2 — "),
          x("predictive", "PI routing, similarity, forecasting."),
          s(". Stage 3 — "),
          x("generative assist", "Now Assist, grounded VA dialog."),
          s(". Stage 4 — "),
          x("agentic", "Multi-step autonomous actions with policy."),
        ],
        [
          s("Assess honestly: many enterprises claim stage 4 while at stage 1 data hygiene."),
        ],
        [
          s("Agentic maturity requires stages 1–3 instrumentation — logging, labels, knowledge, approvals."),
        ],
      ],
      workflowSteps: [
        "Rate your org 1–4 per domain (IT, HR, CSM).",
        "Define exit criteria to advance one stage — measurable.",
        "Align ServiceNow roadmap to next stage only — resist skip.",
      ],
      example: {
        title: "HR shared services — staged over 18 months",
        body: "Months 0–6: case workflows + knowledge cleanup (stage 1). Months 6–12: PI case routing (stage 2). Months 12–15: Now Assist for case notes (stage 3). Months 15–18: read-only HR policy agent (stage 4 entry). Skipping stage 1 failed a prior vendor chatbot — lesson learned.",
      },
    }),
  ],
};
