import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter07MktBiasHallucinationMarketingLiability = buildChapter({
  slug: "mkt-bias-hallucination-marketing-liability",
  number: 7,
  shortTitle: "Bias and Hallucination Liability",
  title: "Bias, Hallucination, and Liability in Marketing AI",
  readingMinutes: 25,
  summary:
    "Marketing AI can amplify bias and generate confident false content at scale. This chapter equips marketers with governance patterns that reduce legal, reputational, and performance risk.",
  keyTakeaway:
    "Bias and hallucination are manageable only with explicit controls: data audits, review checkpoints, red-team testing, and accountable escalation paths.",
  pmCallout: MKT_CALLOUT,
  sections: [
    buildSection({
      number: "7.1",
      title: "Bias in Marketing AI Systems",
      subtitle: "How historical patterns become future inequality",
      take: "Bias enters through data, objective design, and deployment context, then scales through automation.",
      why: "Unchecked bias can cause discrimination risk, brand damage, and poor commercial decisions.",
      paragraphs: [
[
          s("Bias is not only a social issue; it is also an accuracy and market-reach issue. "),
          x(
            "If model training data overrepresents one segment, recommendations can systematically under-serve others.",
            "This reduces campaign efficiency while increasing fairness and compliance risk.",
          ),
          s(" Better representation improves both ethics and performance."),
        ],
[
          s("Marketers should examine outcomes by protected and business-critical dimensions where legally and operationally appropriate. "),
          x(
            "Segment disparity checks reveal whether automation is unevenly allocating opportunity or exposure.",
            "Bias audits should be recurring, not one-time launch artifacts.",
          ),
          s(" Ongoing monitoring is required for safe scaling."),
        ],

        [

          s("Operationally, bias management requires recurring disparity reviews tied to campaign decisions, not one-time ethics statements. "),

          x(

            "Define protected and business-critical segment checks, assign owners, and set escalation triggers when exposure or conversion gaps exceed policy bounds.",

            "Use remediation playbooks such as objective adjustment, feature constraints, and audience-balance interventions before expanding automation.",

          ),

          s("Bias controls are strongest when they are embedded into regular optimization rituals."),

        ],

      ],
      examples: [
        {
          title: "Audience under-delivery by demographic proxy",
          body: "A campaign optimizer reduced delivery to a high-value group due to proxy features in historical data, requiring objective and feature review.",
        },
        {
          title: "Job-ad distribution disparity",
          body: "An employer-brand campaign showed uneven ad exposure across regions and demographics until targeting constraints were redesigned.",
        },
        {
          title: "Financial product message skew",
          body: "A propensity model favored low-risk profiles and under-targeted segments with legitimate demand, reducing both equity and growth potential.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "7.2",
      title: "Hallucination in Generative Marketing Workflows",
      subtitle: "Fluent language, false facts",
      take: "Generative models can produce believable but incorrect claims, citations, or product details.",
      why: "Hallucinated outputs in ads, landing pages, or sales assets create legal and trust liabilities.",
      paragraphs: [
[
          s("Hallucination happens because language models optimize plausibility, not truth verification. "),
          x(
            "Without grounding to approved sources, generated copy can include invented facts or outdated claims.",
            "The risk compounds when teams publish quickly at scale.",
          ),
          s(" Speed must be paired with validation checkpoints."),
        ],
[
          s("Use grounded generation with approved knowledge sources and mandatory review for external-facing assets. "),
          x(
            "Templates, source citations, and claim-check workflows significantly reduce false-output risk.",
            "High-risk verticals should require legal or compliance sign-off for sensitive claim categories.",
          ),
          s(" Human review remains a core control."),
        ],

        [

          s("Treat hallucination risk as a publishing-governance problem by enforcing source grounding and claim validation before customer-facing release. "),

          x(

            "Define high-risk claim categories that always require citation evidence and human review, especially in regulated or high-sensitivity campaigns.",

            "Track false-output incidents and resolution time so teams can improve prompts, retrieval sources, and review depth over time.",

          ),

          s("This creates a repeatable quality system that preserves speed without normalizing factual risk."),

        ],

      ],
      examples: [
        {
          title: "Product spec hallucination in launch copy",
          body: "A generated page referenced unsupported product features, forcing emergency edits and trust repair with early customers.",
        },
        {
          title: "Financial compliance disclaimer miss",
          body: "Generated ad text omitted required caveats until a structured pre-publish compliance checklist was introduced.",
        },
        {
          title: "B2B case-study fabrication",
          body: "A draft included invented customer metrics; citation-required workflows were added to prevent recurrence.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-ch7-hallucination-controls",
      type: "flow",
      title: "Hallucination Control Pipeline",
      caption: "Grounded prompt -> constrained output -> human/legal review -> publish.",
    }),
    buildSection({
      number: "7.3",
      title: "Brand and Reputation Risk Amplification",
      subtitle: "Automation makes mistakes travel faster",
      take: "AI errors scale quickly across channels, making small governance gaps reputationally expensive.",
      why: "One flawed template or rule can replicate thousands of times before manual detection.",
      paragraphs: [
[
          s("AI systems increase message throughput, which multiplies both upside and downside. "),
          x(
            "A single misaligned prompt pattern can generate off-brand assets across campaigns within hours.",
            "Without approval gates, rollback and cleanup effort can exceed initial production savings.",
          ),
          s(" Throughput requires proportional quality controls."),
        ],
[
          s("Create tiered publishing controls by risk level. "),
          x(
            "Low-risk internal drafts can be fast-tracked; external or regulated content needs stricter review.",
            "This preserves speed where safe while protecting brand integrity where exposure is highest.",
          ),
          s(" Not all assets need the same control depth."),
        ],

        [

          s("Brand resilience depends on tiered control policies that match review depth to audience exposure and message sensitivity. "),

          x(

            "Set stricter approvals for public and paid channels, while allowing faster cycles for internal drafts and low-exposure experiments.",

            "Pair this with fast pause-and-correction protocols so off-brand patterns are contained before they spread across campaigns.",

          ),

          s("Proportional controls protect reputation while preserving operational velocity."),

        ],

      ],
      examples: [
        {
          title: "Brand tone drift in multi-market launch",
          body: "Localized AI copy drifted from core positioning; centralized guardrails and approved phrase banks restored consistency.",
        },
        {
          title: "Social response escalation",
          body: "An automated response workflow produced insensitive phrasing during a sensitive event, prompting new escalation and pause triggers.",
        },
        {
          title: "Agency prompt library governance",
          body: "A global agency reduced off-brand output by formalizing prompt libraries with version control and owner approval.",
        },
      ],
    }),
    buildSection({
      number: "7.4",
      title: "Legal and Regulatory Exposure",
      subtitle: "Claims, disclosures, and accountability",
      take: "Marketing AI outputs are still your organization's responsibility regardless of model source.",
      why: "Teams need clear ownership for claims accuracy, disclosure compliance, and escalation.",
      paragraphs: [
[
          s("Using an external AI vendor does not transfer legal responsibility for published content. "),
          x(
            "If claims are inaccurate or disclosures missing, your brand bears the consequence.",
            "Contract terms should support accountability, but they do not replace internal controls.",
          ),
          s(" Ownership must be explicit before launch."),
        ],
[
          s("Define policy for high-risk content classes such as financial claims, health statements, and comparative competitor messaging. "),
          x(
            "These categories require stricter sourcing and sign-off standards.",
            "Documented workflows reduce ambiguity during audits or disputes.",
          ),
          s(" Policy clarity reduces incident severity."),
        ],

        [

          s("Legal safety requires explicit ownership for claims, disclosures, and regional compliance at each stage of the content workflow. "),

          x(

            "Create policy matrices that map content type and jurisdiction to required evidence, approvers, and publication constraints.",

            "This turns compliance from reactive cleanup into a predictable pre-publish operating system for high-risk campaigns.",

          ),

          s("Clear accountability paths reduce incident severity and speed up defensible decision-making."),

        ],

      ],
      examples: [
        {
          title: "Disclosure omission incident",
          body: "Automated ad copy missed required disclosure language in a regulated campaign, resulting in takedown and remediation costs.",
        },
        {
          title: "Comparative claim challenge",
          body: "A generated comparison statement was contested publicly; citation and legal review controls were tightened afterward.",
        },
        {
          title: "Cross-border compliance mismatch",
          body: "A campaign reused AI-generated claims across regions with different rules, prompting a region-specific compliance matrix.",
        },
      ],
    }),
    buildSection({
      number: "7.5",
      title: "Operational Controls and Incident Response",
      subtitle: "Prepare before failure, not after",
      take: "Strong teams implement pre-publish controls and post-publish incident playbooks for AI outputs.",
      why: "When incidents happen, response speed determines damage containment.",
      paragraphs: [
[
          s("Controls include policy prompts, content filters, review queues, and deployment guardrails. "),
          x(
            "These controls reduce error rate but cannot eliminate all failures.",
            "A mature setup assumes occasional failure and focuses on fast detection and containment.",
          ),
          s(" Resilience is built through layered safeguards."),
        ],
[
          s("Incident playbooks should define detection triggers, owner roles, rollback actions, and communication protocols. "),
          x(
            "Run simulation drills for high-risk workflows so teams can respond quickly under pressure.",
            "Post-incident retrospectives should feed control improvements into the next cycle.",
          ),
          s(" Prepared teams recover faster and learn faster."),
        ],

        [

          s("Operational maturity means combining preventive controls with a tested incident-response playbook that can be executed under pressure. "),

          x(

            "Define detection signals, incident severity classes, and response SLAs so teams know when to pause automation, notify stakeholders, and rollback assets.",

            "Run simulations and post-incident reviews to strengthen controls continuously rather than treating incidents as isolated failures.",

          ),

          s("Prepared response systems materially reduce reputational and regulatory fallout when failures occur."),

        ],

      ],
      examples: [
        {
          title: "Rapid rollback for flawed email wave",
          body: "A triggered pause and rollback process limited the impact of a faulty AI-generated sequence to a small cohort.",
        },
        {
          title: "Incident simulation exercise",
          body: "A marketing org ran quarterly simulation drills and reduced mean time to containment for content incidents.",
        },
        {
          title: "Red-team testing for prompt abuse",
          body: "Prompt injection tests uncovered unsafe output paths, leading to stronger filters and review checkpoints.",
        },
      ],
    }),
    buildSection({
      number: "7.6",
      title: "Decision Lens: Safe Scale for Marketing AI",
      subtitle: "Governance that protects growth",
      take: "Safe scale requires explicit risk tiers, control depth by use case, and named accountability at every stage.",
      why: "A clear decision lens lets teams move fast on low-risk automation and stay disciplined on high-risk outputs.",
      paragraphs: [
[
          s("Classify workflows by risk: internal draft, customer-facing low-risk, and regulated/high-stakes content. "),
          x(
            "Define minimum controls per tier and enforce them consistently.",
            "This avoids both over-control in low-risk contexts and under-control in high-risk contexts.",
          ),
          s(" Tiering creates proportional governance."),
        ],
[
          s("Tie governance KPIs to business KPIs. "),
          x(
            "Track incident rate, review turnaround, false-output escapes, and remediation cost alongside campaign outcomes.",
            "This keeps safety visible as a performance enabler, not a blocker.",
          ),
          s(" Responsible scale is a measurable capability."),
        ],

        [

          s("Use safe-scale governance as a deployment gate: each workflow must meet risk-tier controls, owner accountability, and monitoring standards before expansion. "),

          x(

            "Score modules on incident history, control compliance, and commercial value so leadership can prioritize scale decisions with full risk context.",

            "This enables fast rollout for low-risk wins while forcing deeper diligence where legal, brand, or fairness impact is materially higher.",

          ),

          s("Safe scaling works when governance quality is measured with the same rigor as growth outcomes."),

        ],

      ],
      examples: [
        {
          title: "Risk-tier publishing matrix",
          body: "A team implemented tiered controls and cut incident frequency while preserving rapid internal content production.",
        },
        {
          title: "Governance KPI dashboard",
          body: "Monthly dashboarding connected quality incidents to commercial impact, helping leadership prioritize control investments.",
        },
        {
          title: "Accountability map rollout",
          body: "Named owners across generation, review, and publication reduced approval ambiguity and sped incident resolution.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is the most accurate statement about hallucination risk in marketing AI?",
      options: [
        "Hallucinations are rare enough to ignore in production.",
        "Fluent output can still be false, so grounded sources and review controls are required.",
        "Hallucinations only happen with image models.",
        "Using a premium model removes hallucination risk completely.",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Plausible language is not proof of factual correctness; controls are essential.",
      wrongFeedback:
        "Generative fluency can mask factual errors, so grounding and review are necessary safeguards.",
    },
    {
      kind: "order",
      q: "Order the recommended high-risk publishing flow.",
      prompt: "Arrange from first to last.",
      items: [
        "Generate with constrained prompt and approved sources.",
        "Run compliance and claim checks.",
        "Complete human/legal review.",
        "Publish with monitoring and rollback readiness.",
      ],
      correctFeedback:
        "Correct. Controlled generation first, then checks, then sign-off, then monitored publication.",
      wrongFeedback:
        "High-risk content needs a staged control flow from constrained generation to monitored release.",
    },
    {
      kind: "categorize",
      q: "Categorize each risk.",
      categories: ["Bias Risk", "Hallucination Risk", "Operational Governance Gap"],
      items: [
        { text: "Uneven delivery across important audience groups", category: 0 },
        { text: "Invented product capability in generated copy", category: 1 },
        { text: "No defined rollback owner for content incidents", category: 2 },
        { text: "Historical data underrepresents key segments", category: 0 },
        { text: "Generated citation references non-existent source", category: 1 },
        { text: "No risk-tier approval policy for external assets", category: 2 },
      ],
      correctFeedback:
        "Correct. Bias stems from data/objective imbalance, hallucination from probabilistic generation, and governance gaps from missing controls and ownership.",
      wrongFeedback:
        "Distinguish statistical fairness issues from factual-generation errors and from process/control failures.",
    },
  ],
});
