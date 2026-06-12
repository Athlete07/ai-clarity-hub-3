import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter01MktAiVsMlVsDlMarketerLens = buildChapter({
  slug: "mkt-ai-vs-ml-vs-dl-marketer-lens",
  number: 1,
  shortTitle: "AI vs ML vs DL — Marketer Lens",
  title: "AI vs ML vs Deep Learning — The Marketer's Version",
  readingMinutes: 24,
  summary:
    "Most martech AI claims sound similar, but the economics and outcomes are not. This chapter gives marketers the vocabulary to separate automation theater from real learning systems, so you can protect budget and scale what actually improves pipeline.",
  keyTakeaway:
    "AI is the umbrella, ML is pattern learning from campaign data, and deep learning powers generative and multimodal workflows. Your marketing edge comes from asking precise vendor questions before signing contracts.",
  pmCallout: MKT_CALLOUT,
  sections: [
    buildSection({
      number: "1.1",
      title: "What AI Actually Is — Cutting Through Martech Marketing",
      subtitle: "Why smart-sounding labels are not a strategy",
      take: "In marketing, AI is a behavior label: software that makes judgment calls at scale. It can be rules, ML, or deep learning, and those are not interchangeable from a budget or performance perspective.",
      why: "Teams overpay when they buy AI labels instead of specific capabilities. A crisp definition helps you scope use cases, set realistic KPIs, and challenge inflated platform pricing.",
      paragraphs: [
[
          s("A lead scoring workflow that auto-routes high-intent contacts can be called AI even when the logic is fixed and human-written. "),
          x(
            "Vendors frequently package rule automation as AI because the market rewards the label.",
            "As a marketer, your goal is not to reject this automation. It is to classify it correctly so you can price and govern it correctly.",
          ),
          s(" If no learning happens from campaign outcomes, you are not buying machine learning no matter how polished the dashboard looks."),
        ],
[
          s("True AI value in marketing appears when a system adapts to changing audience behavior without rewriting rules every week. "),
          x(
            "That adaptation usually requires data pipelines, retraining logic, and measurable lift against a baseline.",
            "If a vendor cannot explain where learning happens and how performance is tracked over time, treat the product as workflow software with AI branding.",
          ),
          s(" This simple distinction saves months of false experimentation."),
        ],

        [

          s("Operationally, this section should become a procurement control: classify every so-called AI feature as rules, ML, or deep learning before budget approval. "),

          x(

            "Tie that classification to expected business outcomes, ownership, and acceptable error impact so teams stop paying premium AI pricing for deterministic automation.",

            "When vendors cannot document where learning happens, route the module to standard automation governance rather than model-governance workflows.",

          ),

          s("This discipline protects budget and keeps experimentation focused on capabilities that can actually improve over time."),

        ],

      ],
      examples: [
        {
          title: "HubSpot 'AI assistant' vs scoring workflows",
          body: "HubSpot bundles true generative features (content drafting) with deterministic workflows (if form submitted then assign owner). Marketing teams that classify each feature correctly avoid paying generative AI premiums for standard automation.",
        },
        {
          title: "Meta Ads automated rules",
          body: "Meta Ads lets teams set rules like 'pause ad set if CPA > threshold'. It is useful automation but not model learning. Treat it as control logic, not as adaptive intelligence.",
        },
        {
          title: "Salesforce Marketing Cloud Einstein",
          body: "Einstein includes both fixed logic modules and learning models. Enterprise teams that request per-module methodology documentation negotiate better licensing and clearer performance commitments.",
        },
      ],
    }),
    buildSection({
      number: "1.2",
      title: "What ML Means for Campaigns",
      subtitle: "From rules to pattern learning in real demand generation",
      take: "Machine learning finds patterns in historical marketing data and updates decisions statistically. It is strongest when audience behavior is noisy, high-volume, and changes faster than humans can codify.",
      why: "ML changes how you run campaign ops: data quality, retraining cadence, and attribution design become growth levers, not just analytics concerns.",
      paragraphs: [
[
          s("In a rules system, you decide criteria first and the tool executes. In ML, the model learns which signals predict conversion, churn, or upsell probability. "),
          x(
            "That learning depends on the quality and coverage of your CRM and ad-platform feedback loops.",
            "If lifecycle stages are inconsistent or offline conversion sync is broken, model output quality collapses even when the algorithm is strong.",
          ),
          s(" Marketing ops hygiene is therefore part of model performance, not a separate workstream."),
        ],
[
          s("ML systems can outperform manual optimization in bidding, budget pacing, and creative rotation. "),
          x(
            "But they also drift when product mix, seasonality, or channel mix changes.",
            "Your team needs explicit retraining and monitoring policies, otherwise a once-good model silently degrades and wastes spend for weeks.",
          ),
          s(" Ask for performance-over-time charts, not only launch-week case studies."),
        ],

        [

          s("In practice, ML for campaigns needs a formal operating cadence: data QA checks, drift review, and threshold tuning tied to revenue stages. "),

          x(

            "Define who owns feature hygiene, how often retraining is evaluated, and which metrics trigger intervention before spend inefficiency compounds.",

            "Treat model outputs as operational inputs for routing and pacing decisions, with clear rollback criteria when segment performance decays.",

          ),

          s("That governance turns ML from a dashboard metric into a repeatable campaign advantage."),

        ],

      ],
      examples: [
        {
          title: "Meta Advantage+ Shopping",
          body: "Advantage+ uses behavioral patterns to optimize delivery across audiences and placements. Brands with clean conversion signals often see better CPA stability than manual audience slicing.",
        },
        {
          title: "Google Ads Smart Bidding",
          body: "Smart Bidding learns auction-time signals but depends on accurate conversion imports. Teams that delay offline conversion uploads reduce model learning quality and bid efficiency.",
        },
        {
          title: "Braze churn propensity models",
          body: "Lifecycle teams use ML propensity scores for retention journeys. Results improve when event taxonomies are standardized and retraining cadence aligns with product release cycles.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "1.3",
      title: "What DL Powers in Marketing",
      subtitle: "Generative and multimodal capability with real cost trade-offs",
      take: "Deep learning powers modern copy generation, creative variation, image synthesis, and conversational assistants. It unlocks speed, but introduces token costs, hallucination risk, and brand-governance overhead.",
      why: "Marketers use DL outputs daily through tools like Jasper, ChatGPT, and Adobe Firefly. You need to understand when this tier is justified and when deterministic tools are enough.",
      paragraphs: [
[
          s("Deep learning models learn layered representations from massive data, which is why they can draft landing-page copy, summarize sales calls, and generate visual concepts. "),
          x(
            "This capability is hard to reproduce with classic ML and impossible with simple rules.",
            "It is also expensive per interaction at scale, so your content pipeline should reserve frontier models for high-leverage tasks.",
          ),
          s(" Not every email variant requires a premium model pass."),
        ],
[
          s("DL tools are probabilistic generators, not truth engines. "),
          x(
            "They can produce fluent but wrong claims, outdated product details, or off-brand language if prompts and grounding are weak.",
            "High-performing teams pair model prompts with approved messaging libraries, compliance checklists, and human review checkpoints for external content.",
          ),
          s(" Speed without governance creates brand risk faster than manual processes ever could."),
        ],

        [

          s("For deep learning workflows, marketers should separate low-risk draft acceleration from high-risk external messaging and fund each tier differently. "),

          x(

            "Set explicit budgets for token-intensive use cases, require source grounding for factual claims, and assign human approvers for regulated or brand-critical assets.",

            "This approach preserves speed on ideation while preventing high-cost model usage and hallucination exposure in customer-facing channels.",

          ),

          s("Deep learning becomes commercially useful when teams govern where it is allowed to decide and where it must only assist."),

        ],

      ],
      examples: [
        {
          title: "Jasper brand voice controls",
          body: "Marketing teams use Jasper to accelerate first drafts while constraining tone and vocabulary via brand-voice settings. Output quality improves when these controls are linked to current messaging docs.",
        },
        {
          title: "Adobe Firefly creative iteration",
          body: "Design teams generate concept variants quickly for campaign ideation, then move shortlisted concepts into human-led design production for legal and brand validation.",
        },
        {
          title: "Salesforce Einstein Copilot summaries",
          body: "B2B marketers use call and opportunity summaries to improve nurture timing. Teams still verify claims before sending customer-facing communications.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-ch1-dl-stack",
      type: "nested",
      title: "Deep Learning Inside Marketing AI",
      caption: "Deep learning powers generative and multimodal outputs, but sits inside broader AI and ML decision stacks.",
    }),
    buildSection({
      number: "1.4",
      title: "Rule-Based vs Genuine AI",
      subtitle: "Knowing what is scripted versus what actually learns",
      take: "Rule-based systems are deterministic and auditable; genuine learning systems adapt from data. Both are useful, but they require different expectations, SLAs, and pricing logic.",
      why: "This distinction is the fastest way to avoid AI-washing and to decide whether your team needs data-science support or simply better automation design.",
      paragraphs: [
[
          s("If outcomes never improve when more campaign data arrives, the tool is likely rule-based. "),
          x(
            "That is not a flaw; many core workflows should remain deterministic for governance and predictability.",
            "Problems begin when deterministic systems are sold as continuously learning products with premium AI pricing.",
          ),
          s(" Your contract should reflect mechanism, not marketing language."),
        ],
[
          s("Genuine ML systems should expose learning evidence: retraining events, holdout performance, and lift versus baseline. "),
          x(
            "Without these, claims of self-optimization are hard to verify.",
            "Marketers should require quarterly performance readouts tied to business outcomes such as CAC, MQL-to-SQL conversion, and revenue per send.",
          ),
          s(" 'AI-powered' with no metric transparency is an operational risk."),
        ],

        [

          s("Use this distinction to write different SLAs and review policies: deterministic automations need reliability checks, while learning systems need performance and drift checks. "),

          x(

            "Procurement and legal should require vendors to disclose mechanism per module so contracts can tie pricing and accountability to actual behavior.",

            "When teams mix these categories under one generic AI policy, they either over-govern simple automations or under-govern adaptive models.",

          ),

          s("Mechanism-specific governance keeps marketing operations efficient and reduces AI-washing risk during renewal cycles."),

        ],

      ],
      examples: [
        {
          title: "Klaviyo flow automation",
          body: "Many high-performing lifecycle journeys are rule-driven and transparent. Teams gain reliability and testing discipline without pretending they are ML systems.",
        },
        {
          title: "LinkedIn Campaign Manager recommendations",
          body: "Recommendation modules can be true learning systems when they adapt from outcome history. Buyers should ask which recommendations are model-generated versus heuristic defaults.",
        },
        {
          title: "Marketo lead scoring migration",
          body: "A team moved from static scorecards to adaptive propensity models and reduced manual rule maintenance, but only after fixing incomplete CRM stage data.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "1.5",
      title: "AI in Martech Honest Spectrum",
      subtitle: "From simple automation to adaptive intelligence",
      take: "Most martech products sit on a spectrum: rule automation, heuristic optimization, ML prediction, then deep learning generation. Honest classification helps marketers build the right operating model around each tier.",
      why: "When teams map tools to this spectrum, they assign budget, governance, and talent correctly instead of using one generic AI policy for everything.",
      paragraphs: [
[
          s("Rule automation handles deterministic logic like routing, sequencing, and suppression. Heuristics apply static scoring formulas. "),
          x(
            "ML prediction adds adaptive pattern learning for outcomes like conversion or churn.",
            "Deep learning adds generative and high-dimensional understanding, useful for copy, visual concepts, and conversational retrieval.",
          ),
          s(" Each step up the spectrum increases upside and operational complexity."),
        ],
[
          s("Marketers should evaluate platform claims by module, not by headline brand. "),
          x(
            "The same suite may include all four tiers, each requiring different QA and legal oversight.",
            "A modular map prevents blanket approvals and allows precise enablement by use case and risk tolerance.",
          ),
          s(" This is especially important for regulated verticals and global teams."),
        ],

        [

          s("Translate the spectrum into a portfolio map that assigns each module a control level, expected ROI horizon, and owner before expansion. "),

          x(

            "Rule and heuristic modules should be measured for operational efficiency, while predictive and generative modules should be measured for incremental lift and risk-adjusted value.",

            "This prevents blanket policies that slow low-risk automation and exposes high-risk modules that need tighter review standards.",

          ),

          s("A spectrum-driven operating model makes stack decisions faster and keeps governance proportional to actual risk."),

        ],

      ],
      examples: [
        {
          title: "HubSpot mixed-capability stack",
          body: "A single HubSpot deployment often combines deterministic workflows, heuristic lead scores, predictive forecasts, and generative content helpers. Teams that separate governance by module move faster safely.",
        },
        {
          title: "Salesforce + Einstein deployment maps",
          body: "Enterprise RevOps teams map Einstein features by tier before rollout. This avoids applying heavy review to low-risk deterministic automation while tightening controls on generative outputs.",
        },
        {
          title: "Retail DTC martech audit",
          body: "A DTC brand reclassified 18 'AI features' into four tiers, cut two overpriced vendors, and reallocated budget to one ML module that showed measurable CAC improvement.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-ch1-honest-spectrum",
      type: "comparison",
      title: "Martech AI Honest Spectrum",
      caption: "Map each module from rules to deep learning before pricing, governance, and KPI commitments.",
    }),
    buildSection({
      number: "1.6",
      title: "Marketer Decision Lens: AI Vendor Interrogation (Five Questions)",
      subtitle: "A practical script for every demo and procurement review",
      take: "Five questions reveal whether an AI claim is real, affordable, and safe for your marketing workflow. Ask them before pilot approval, not after rollout problems appear.",
      why: "A tight interrogation framework protects budget, brand, and team bandwidth while increasing your odds of measurable performance lift.",
      paragraphs: [
[
          s("Ask in order: what mechanism powers this module, what data it learns from, how performance is measured, how costs scale, and who owns failure when outputs are wrong. "),
          x(
            "Vague answers to any one question are leading indicators of future execution pain.",
            "Strong vendors answer with specifics: metrics, retraining cadence, token economics, and escalation pathways.",
          ),
          s(" Precision now prevents escalations later."),
        ],
[
          s("Turn the five questions into a standard procurement template used by marketing, RevOps, legal, and finance. "),
          x(
            "This creates consistent diligence across point solutions and platform add-ons.",
            "It also makes pilot outcomes comparable across vendors so budget allocation becomes evidence-led instead of personality-led.",
          ),
          s(" Marketers who standardize diligence usually ship fewer pilots and stronger wins."),
        ],

        [

          s("Operationalize the five questions as a go/no-go gate in procurement so every vendor is scored with the same evidence standard. "),

          x(

            "Require documented answers on mechanism, learning data, measurement, scaling cost, and failure ownership before pilots receive budget and engineering support.",

            "Then revisit the same scorecard at pilot close to decide expansion based on observed lift and governance performance, not demo confidence.",

          ),

          s("This creates repeatable vendor discipline and reduces expensive post-contract surprises."),

        ],

      ],
      examples: [
        {
          title: "B2B SaaS vendor bake-off",
          body: "A growth team used a five-question scorecard across three AI copy tools. One vendor showed superior governance and lower scaling costs, winning despite a weaker demo experience.",
        },
        {
          title: "Financial services campaign review",
          body: "A regulated team required evidence for data lineage and human approval steps before enabling generative ad copy. The process delayed launch by two weeks but avoided compliance rework.",
        },
        {
          title: "Retail media agency procurement",
          body: "An agency added the five-question script to all martech evaluations and reduced failed pilot rate within two quarters by filtering weak vendors earlier.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A martech vendor says their platform is 'AI-native' but cannot explain retraining cadence or model metrics. What should you infer first?",
      options: [
        "It is likely state-of-the-art deep learning with proprietary safeguards.",
        "It is likely a mix of automation and heuristics marketed as AI, and should be evaluated module-by-module before premium pricing.",
        "It is definitely unusable for marketing.",
        "It should be purchased quickly before competitors do.",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Lack of learning transparency is a strong signal to classify by module and avoid blanket AI assumptions.",
      wrongFeedback:
        "The right move is classification and verification, not hype-driven acceptance or blanket rejection.",
    },
    {
      kind: "order",
      q: "Order the five vendor interrogation questions for a marketing AI review.",
      prompt: "Arrange from first to last.",
      items: [
        "What mechanism powers this module (rules, ML, or deep learning)?",
        "What data does it learn from, and how fresh is it?",
        "How is performance measured against business KPIs?",
        "How do costs scale from pilot volume to full rollout?",
        "Who is accountable when outputs are wrong or harmful?",
      ],
      correctFeedback:
        "Correct. Mechanism first, then data, performance, economics, and accountability.",
      wrongFeedback:
        "Start with mechanism. Every other diligence question depends on that classification.",
    },
    {
      kind: "categorize",
      q: "Categorize each martech capability by maturity tier.",
      categories: ["Rule Automation", "Machine Learning", "Deep Learning"],
      items: [
        { text: "If CPA exceeds threshold for 3 days, pause ad set", category: 0 },
        { text: "Lead propensity score updates from outcome history", category: 1 },
        { text: "Generates campaign copy from product brief and tone guide", category: 2 },
        { text: "Deterministic email suppression by compliance list", category: 0 },
        { text: "Predicts churn risk from in-app event patterns", category: 1 },
        { text: "Creates image concepts from text prompts", category: 2 },
      ],
      correctFeedback:
        "Correct. Rules are deterministic, ML learns predictive patterns, and DL powers generative/multimodal behavior.",
      wrongFeedback:
        "Use one test: hand-written logic means rules; adaptive prediction is ML; generation and multimodal understanding usually indicates DL.",
    },
  ],
});
