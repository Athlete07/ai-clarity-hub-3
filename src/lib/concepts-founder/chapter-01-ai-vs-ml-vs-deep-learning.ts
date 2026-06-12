import type { ConceptBodyBlock } from "../concepts";
import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

function insertDiagram(
  blocks: ConceptBodyBlock[],
  diagram: Extract<ConceptBodyBlock, { kind: "diagram" }>,
): ConceptBodyBlock[] {
  const exIdx = blocks.findIndex((b) => b.kind === "ex");
  const idx = exIdx === -1 ? blocks.length : exIdx;
  return [...blocks.slice(0, idx), diagram, ...blocks.slice(idx)];
}

const section13 = insertDiagram(
  buildSection({
    number: "1.3",
    title: "What is Deep Learning",
    subtitle: "The capability unlock that made the current wave possible — and what it costs",
    take: "Deep learning is the subset of ML that cracked language, vision, and speech — and it is also the most expensive, least explainable, and most API-dependent category on your roadmap. Founders who know when they need it avoid burning runway on GPUs they should never have bought.",
    why: "When your CTO says 'we need a deep learning model', they are telling you about a capital allocation decision — not a technology preference. The answer shapes your hiring plan, your fundraise narrative, and whether you are building a product or renting one.",
    paragraphs: [
      [
        s("Before 2012, teaching software to recognise images or speech required teams of PhDs hand-engineering features. "),
        x(
          "Deep learning collapsed that: neural networks with many stacked layers learn features directly from raw pixels, audio, or text.",
          "The 'deep' means many layers. Early layers detect edges; later layers detect faces. Nobody designed that hierarchy — it emerged from data.",
        ),
        s(" That breakthrough is why ChatGPT, Midjourney, and Tesla FSD exist. It is also why they cost what they cost."),
      ],
      [
        s("For founders, deep learning unlocks product categories that were impossible five years ago — but shifts where value lives. "),
        x(
          "Capabilities that required bespoke research teams are now API calls. The defensibility moved from 'can we build the model' to 'do we have the data, distribution, and workflow'.",
          "Every startup pitching 'we have proprietary deep learning' in 2026 is competing with OpenAI, Google, and Meta's R&D budgets. The honest question is whether deep learning is your product or your infrastructure.",
        ),
        s(" If it is infrastructure, you buy it. If it is the product, you need a data moat that justifies the compute bill."),
      ],
      [
        s("The trade-off founders underestimate is explainability. "),
        x(
          "Deep models distribute decisions across billions of weights. You cannot point to the rule that declined a loan or flagged a transaction.",
          "Regulators, enterprise buyers, and your own sales team will ask 'why did the AI do that?' The honest answer is often 'we measure aggregate performance, not per-decision logic'.",
        ),
        s(" Plan for evaluation, human review, and legal guardrails — not explanations you cannot deliver."),
      ],
    ],
    examples: [
      {
        title: "GitHub Copilot — deep learning as rented infrastructure",
        body: "Copilot is a fine-tuned LLM wrapped in IDE distribution. Microsoft does not market proprietary architecture — they market developer workflow. Founders building code assistants learned: the model is a commodity input; the moat is editor integration and enterprise trust.",
      },
      {
        title: "Adobe Firefly — deep learning with indemnification as moat",
        body: "Firefly trains on licensed Adobe Stock, not scraped web images. Enterprise customers buy partly because Adobe can indemnify outputs. The deep model matters less than the data provenance story in the sales cycle.",
      },
      {
        title: "Tesla Autopilot — when deep learning is the product bet",
        body: "Tesla's driving stack is end-to-end neural networks on camera input. When the car makes a surprising choice, engineers cannot cite a rule — they cite more data and shadow-mode testing. Founders choosing this path accept regulatory opacity as a strategic cost.",
      },
    ],
  }),
  {
      kind: "diagram",
    id: "ch1-dl-flow",
    type: "flow",
    title: "What is Deep Learning",
    caption:
        "Deep learning is the subset of ML that cracked language, vision, and speech — and it is also the most expensive, least explainable, and most API-dependent…",
    },
);

const section14 = insertDiagram(
  buildSection({
    number: "1.4",
    title: "The nested hierarchy",
    subtitle: "Why your investors will ask about this — and how to answer without embarrassing yourself",
    take: "AI ⊃ ML ⊃ Deep Learning. Every deep learning system is machine learning; every ML system is AI. The reverse is never true. Founders who hold this precisely earn credibility in board rooms; founders who conflate terms signal they are building on hype, not understanding.",
    why: "In diligence, investors test whether you know what you are actually building. Conflating 'AI' with 'GPT wrapper' or 'ML' with 'deep learning' tells them your technical narrative is marketing, not strategy.",
    paragraphs: [
      [
        s("Picture three nested circles. "),
        x(
          "The outer circle is AI: any system that behaves intelligently. Inside it sits ML: systems that learn from data. Inside ML sits deep learning: large neural networks.",
          "Plenty of AI is not ML (rules engines). Plenty of ML is not deep learning (classical statistical models). Precision here is not pedantry — it is capital allocation.",
        ),
        s(" Each term commits you to a different cost profile, hiring plan, and risk surface."),
      ],
      [
        s("Investors use the hierarchy to test founder fluency, not to quiz you on papers. "),
        x(
          "When you say 'we use AI', you commit to almost nothing. 'We use ML' commits to data pipelines and retraining. 'We use deep learning' commits to GPU costs, API dependency, and explainability limits.",
          "Vendors exploit the gradient: they say 'AI' when they mean rules, and 'ML' when they mean a prompt. Your job is to force specificity before money moves.",
        ),
        s(" The founder who upgrades terminology in investor meetings is signalling operational seriousness."),
      ],
      [
        s("The business damage of conflation is misallocated resources. "),
        x(
          "A CEO who thinks 'AI' and 'GPT' are interchangeable will ask you to ship generative features where a rules engine would ship in a week at 1/100th the cost.",
          "Conversely, pitching classical ML as 'cutting-edge AI' sets expectations you cannot meet in demos. Both mistakes burn quarters.",
        ),
        s(" Use the most specific accurate term in every deck, every hiring plan, and every vendor contract."),
      ],
    ],
    examples: [
      {
        title: "Salesforce Einstein — one brand, three architectures",
        body: "Einstein spans rule-based workflows, classical ML lead scoring, and LLM features — all under one marketing umbrella. Founders evaluating incumbents must decode which Einstein they are buying. Diligence teams that cannot answer this overpay for capabilities they do not need.",
      },
      {
        title: "Duolingo — deliberate movement down the hierarchy",
        body: "Duolingo started with rules, added classical ML (Birdbrain), then deep learning for speech and conversation. The company is public about which layer each feature uses because unit economics in freemium demand it. Founders should treat the hierarchy as a roadmap tool, not vocabulary trivia.",
      },
      {
        title: "Seed pitch correction — 'AI company' reframed",
        body: "A founder pitched as 'AI-native legal research'. Diligence revealed: retrieval over firm documents + GPT-4 API + human review. Accurate framing: 'ML-assisted workflow with rented deep learning for synthesis'. The reframe did not kill the deal — it made the cap table conversation honest about margins and defensibility.",
      },
    ],
  }),
  {
      kind: "diagram",
    id: "ch1-ai-hierarchy",
    type: "nested",
    title: "The nested hierarchy",
    caption:
        "AI ⊃ ML ⊃ Deep Learning. Every deep learning system is machine learning; every ML system is AI. The reverse is never true. Founders who hold this precisely…",
    },
);

const section15 = insertDiagram(
  buildSection({
    number: "1.5",
    title: "Rule-based systems vs learned systems",
    subtitle: "One scales with engineering hours. The other scales with data. Know which one you're building.",
    take: "If you could write the behaviour as a list of if-statements, it is not machine learning — regardless of the slide deck. Rules scale with engineering headcount; learned systems scale with data acquisition. Founders who pick wrong pay twice: once in build cost, once in operational surprise.",
    why: "This is the question that separates a $12K rules contract from an $80K 'AI platform' that turns out to be regex. Ask it in the first ten minutes of every vendor call and every architecture review.",
    paragraphs: [
      [
        s("A rule-based system encodes every behaviour a human wrote down. "),
        x(
          "If credit_score > 700 AND income > 50k → approve. Same input, same output, every time. Auditable line by line.",
          "A learned system has implicit rules in weights. Same input can shift after retraining. The logic is statistical, not readable.",
        ),
        s(" Both are legitimate. They are different businesses with different margin structures."),
      ],
      [
        s("Rules win when patterns are stable, codifiable, and regulation demands explainability. "),
        x(
          "Tax software, compliance workflows, scheduling logic, eligibility checks — rules ship in days, run for fractions of a cent, and survive audits.",
          "ML wins when patterns are too subtle, high-dimensional, or dynamic for humans to specify — fraud, recommendations, language, vision.",
        ),
        s(" Choosing ML for a stable rules problem is an expensive vanity project. Choosing rules for a dynamic pattern is a brittle product."),
      ],
      [
        s("The founder diagnostic is one sentence: could we, in principle, write this as if-statements? "),
        x(
          "If yes — even a long list — evaluate as a rules engine on rules metrics: latency, auditability, maintenance cost.",
          "If no — budget for data, labelling, retraining, and the operational team to keep the model honest as the world shifts.",
        ),
        s(" Vendors who cannot answer crisply are selling marketing, not ML."),
      ],
    ],
    examples: [
      {
        title: "TurboTax — rules as the correct choice",
        body: "TurboTax encodes tax code as decision trees with essentially zero ML in the calculation path. Intuit does not market it as AI — and that honesty is trust. Founders in codified domains should be equally unembarrassed about rules.",
      },
      {
        title: "Klarna support AI — layered honesty",
        body: "Klarna's public AI customer-service overhaul kept refund logic and escalation as rules while the conversational layer used LLMs. They were explicit about the split — which made the '700 agents replaced' headline credible to operators instead of marketing fiction.",
      },
      {
        title: "The $80K regex — procurement saved",
        body: "A SaaS company evaluated an 'AI intent classifier' for $80K/year. Three questions in, the vendor admitted 400 hand-maintained regex patterns. The buyer renegotiated to $12K and funded a real ML classifier the following quarter. The diagnostic paid for itself in one call.",
      },
    ],
  }),
  {
      kind: "diagram",
    id: "founder-ch01-1-5-rule-based-systems-vs-learned-systems",
    type: "comparison",
    title: "Rule-based systems vs learned systems",
    caption:
        "If you could write the behaviour as a list of if-statements, it is not machine learning — regardless of the slide deck. Rules scale with engineering…",
    },
);

export const chapter01AiVsMlVsDeepLearning = buildChapter({
  slug: "founder-ai-vs-ml-vs-deep-learning",
  number: 1,
  shortTitle: "AI vs ML vs Deep Learning",
  title: "AI vs ML vs Deep Learning — The Founder's Version",
  readingMinutes: 22,
  summary:
    "Not a technical distinction — a capital allocation distinction. The hierarchy every founder must explain to investors, hires, and customers before making a single AI bet.",
  keyTakeaway:
    "AI ⊃ ML ⊃ Deep Learning. Rules scale with engineers; learned systems scale with data. Honest placement on the AI-native / AI-powered / AI-washed spectrum determines your hiring plan, data strategy, and fundraising narrative.",
  pmCallout:
    "As a founder: the version of you that conflates these terms raises on hype and hires wrong. The version that separates them cleanly allocates capital, earns investor trust, and knows whether you are building a moat or renting a feature.",
  sections: [
    buildSection({
      number: "1.1",
      title: "What is Artificial Intelligence",
      subtitle: "The founder's definition — why every software company is now an AI company whether they chose it or not",
      take: "AI is a behaviour label, not a technique. The moment your product makes judgement calls instead of executing fixed instructions, you are in the AI conversation — even when nothing modern sits under the hood.",
      why: "Your board will ask why competitors market 'AI' and you do not — or why you do. You need a one-sentence answer that is strategically honest, not technically performative.",
      paragraphs: [
        [
          s("In 2026, 'AI company' is as much a capital markets category as a technical one. "),
          x(
            "Artificial intelligence describes any software that does something we'd call intelligent if a human did it — from a thermostat with three rules to GPT-5.",
            "The label tracks behaviour, not mechanism. A chess engine with hand-coded heuristics is AI. A model trained on every game is also AI.",
          ),
          s(" Investors bucket you by this label whether you chose it or not."),
        ],
        [
          s("The AI effect means yesterday's AI becomes today's 'just software'. "),
          x(
            "Spell-check, route planning, and OCR were AI until they worked — then they became infrastructure.",
            "Today's frontier is reasoning and generation. In five years it will be something else. Anchoring strategy to the label alone is unstable.",
          ),
          s(" Founders must anchor to mechanism and moat, not novelty."),
        ],
        [
          s("Every product decision now has an AI dimension — including 'we are not using AI here'. "),
          x(
            "Saying no to ML for a feature is a deliberate capital allocation choice you must justify to investors who expect an 'AI story'.",
            "Saying yes without knowing rules vs learned vs deep learning is how seed rounds become bridge rounds.",
          ),
          s(" Treat 'AI' as a question ('what kind?'), not an answer."),
        ],
      ],
      examples: [
        {
          title: "Stripe Radar — hybrid AI as product architecture",
          body: "Radar combines merchant-editable rules with ML risk scores, exposing both in the dashboard. Founders building fraud or trust products should study this: mature AI products are hybrids, and transparency about layers builds enterprise trust faster than black-box claims.",
        },
        {
          title: "Notion AI — distribution over model",
          body: "Notion AI launched as a thin LLM wrapper with no proprietary model. The bet was workspace distribution, not research. Competing founders learned: you are not fighting Notion's model — you are fighting their channel. Capital allocation followed distribution, not GPUs.",
        },
        {
          title: "Calendly — refusing the AI label",
          body: "Calendly's core scheduling is rules on calendar availability. The company historically resisted 'AI scheduling' branding — part of why enterprise buyers trust it. When competitors wrapped the same logic in generative UI, customers noticed. Honest taxonomy is a commercial advantage.",
        },
      ],
    }),
    buildSection({
      number: "1.2",
      title: "What is Machine Learning",
      subtitle: "What it means for your business — when your product gets smarter with usage, and when it doesn't",
      take: "Machine learning is when behaviour emerges from data instead of code. Your dataset — not your engineering team — becomes the primary product surface. That shifts cost from CapEx (features) to OpEx (data, labelling, retraining) permanently.",
      why: "When engineering says 'the model needs retraining', they are asking for runway, headcount, and data infrastructure — not a two-week sprint. Founders who hear 'ML' and think 'ship once' discover concept drift in their churn metrics six months later.",
      paragraphs: [
        [
          s("Rules are written by engineers. ML is taught by examples. "),
          x(
            "You provide inputs and labels; an algorithm derives patterns. Nobody hand-wrote 'if subject contains lottery → spam'. The model inferred it from millions of labelled emails.",
            "The shift from programming to teaching changes who you hire, what you budget, and what 'done' means.",
          ),
          s(" 'Done' for ML is 'good enough this week on our evaluation set' — not shipped and forgotten."),
        ],
        [
          s("ML systems drift as the world changes. "),
          x(
            "Concept drift: fraud patterns evolve, user behaviour shifts, markets move — accuracy drops with zero code changes.",
            "This is why serious ML companies have retraining cadence, monitoring, and someone accountable for model performance over time.",
          ),
          s(" Shipping ML without a monitoring plan is planting a crop and never checking the weather."),
        ],
        [
          s("The founder cost shift: data preparation and labelling often exceed training compute. "),
          x(
            "Teams under-budget the data pipeline by an order of magnitude because the model is the photogenic part.",
            "Investors who have seen three AI startups know to ask about labelling cost and data rights before they ask about model architecture.",
          ),
          s(" Your fundraise narrative should lead with data, not model brand."),
        ],
      ],
      examples: [
        {
          title: "Zillow Zestimate — drift as balance-sheet risk",
          body: "Zillow's home-price ML trained on historical sales. When markets shifted in 2021–22, Zestimate-derived buying decisions stopped matching reality — a $500M+ writedown. The model did not break; the world moved faster than retraining. Founders treat ML monitoring as finance, not engineering.",
        },
        {
          title: "Shopify Fraud Protect — segment data inequality",
          body: "Fraud ML works better for high-volume merchants because the training distribution has more fraud examples. 'We need more data from your vertical' is a real answer, not stalling. Founders must set customer expectations by segment before enterprise sales.",
        },
        {
          title: "Gmail Smart Reply — learning without editable rules",
          body: "Smart Reply suggests responses from billions of reply pairs. You cannot 'fix' a bad suggestion by editing rules — you retrain or post-filter. Founders choosing ML accept loss of per-decision control in exchange for scale.",
        },
      ],
    }),
    section13,
    section14,
    section15,
    buildSection({
      number: "1.6",
      title: "AI-native vs AI-powered vs AI-washed",
      subtitle: "The three tiers every founder needs to honestly place themselves in",
      take: "AI-native: remove the model and the company does not exist. AI-powered: AI materially improves a product that could survive without it. AI-washed: marketing claims without architectural commitment. Investors price these tiers differently — and diligence exposes the gap within one meeting.",
      why: "Misplacing yourself on this spectrum is how seed rounds become down rounds. 'AI-native' commands premium multiples only when the model, data flywheel, and unit economics are real — not when ChatGPT powers a settings page.",
      paragraphs: [
        [
          s("AI-native companies have the model at the centre of value creation. "),
          x(
            "Remove inference and there is no product — Harvey without legal synthesis, Midjourney without image generation, Scale AI without labelling infrastructure.",
            "These companies budget inference as COGS, data as moat, and model quality as core roadmap — not a feature team.",
          ),
          s(" They raise on AI multiples because the business cannot be described without AI."),
        ],
        [
          s("AI-powered companies use AI to improve a product with independent value. "),
          x(
            "Notion, Salesforce, HubSpot — AI features matter, but the CRM, docs, or workflow exists without them.",
            "The strategic question is margin: does AI improve retention enough to justify inference cost? Often yes — but it is a feature ROI calculation, not a category bet.",
          ),
          s(" Honest placement here protects you from 'why aren't you AI-native?' pressure that would misallocate capital."),
        ],
        [
          s("AI-washed is rules, integrations, or thin prompts marketed as intelligence. "),
          x(
            "The tell: no training data story, no evaluation metrics, no retraining plan, no proprietary signal — just an API key and a landing page.",
            "Diligence kills these in one call. Customers churn when the wrapper adds latency without value. Employees leave when the 'AI mission' is theatre.",
          ),
          s(" Founders must self-assess before investors do it publicly."),
        ],
      ],
      examples: [
        {
          title: "Jasper — from AI-native hype to repositioning",
          body: "Jasper rode 'AI-native marketing' at peak GPT excitement, then faced margin compression when ChatGPT shipped native writing. The lesson: AI-native without data moat or workflow lock-in is a feature on someone else's platform. Jasper pivoted toward brand workflow — honest tier migration.",
        },
        {
          title: "Intercom Fin — AI-powered with retrieval depth",
          body: "Fin is AI-powered support on Intercom's existing platform — not a standalone company. Intercom can articulate exactly what breaks if you remove Fin: faster resolution, not product existence. Founders should envy this clarity of tier placement.",
        },
        {
          title: "The 'AI startup' that was Zapier — diligence in 20 minutes",
          body: "A seed deck claimed 'proprietary AI orchestration'. Diligence found: Zapier triggers + OpenAI API + Notion export. Accurate tier: AI-washed automation. The round repriced. Founders who self-assess tier before the meeting keep control of the narrative.",
        },
      ],
    }),
    buildSection({
      number: "1.7",
      title: "Founder decision lens",
      subtitle: "What type of AI are you actually building — the self-assessment that determines hiring, data strategy, and fundraising",
      take: "Four questions before your next hire, fundraise, or vendor contract: (1) rules, ML, or deep learning? (2) AI-native, powered, or washed? (3) what data moat exists today? (4) what happens when the model is wrong? Honest answers determine whether you are building a company or a demo.",
      why: "This self-assessment is the difference between a data scientist hire in month three and month eighteen, between a $2M seed on 'AI platform' and a honest wedge story, between API dependency you planned and dependency you stumbled into.",
      paragraphs: [
        [
          s("Question one: what mechanism — rules, classical ML, or deep learning? "),
          x(
            "Each path implies different headcount, infrastructure, and timeline. Rules: full-stack engineers. ML: data engineers + ML engineer + labelling ops. Deep learning at scale: platform team + GPU budget or API margin model.",
            "Founders who skip this hire ML engineers to solve rules problems — burning $200K/year on the wrong skill set.",
          ),
          s(" Write the answer in your internal strategy doc before the job posting."),
        ],
        [
          s("Question two: what tier — native, powered, or washed? "),
          x(
            "Native requires inference in unit economics from day one and a data flywheel story for Series A.",
            "Powered requires feature ROI math. Washed requires stopping — or pivoting before investors discover it.",
          ),
          s(" Your pitch deck tier and your architecture tier must match."),
        ],
        [
          s("Question three: what proprietary signal do you capture per user action? "),
          x(
            "If the answer is 'none — we call OpenAI', you are building on rented intelligence with no compounding advantage.",
            "The architectural decision to log corrections, preferences, and outcomes is often the difference between fundable and cloneable.",
          ),
          s(" Design the product to generate training signal before you design the demo."),
        ],
        [
          s("Question four: what is your failure mode and who owns it? "),
          x(
            "Rules fail loudly and audibly. ML fails quietly in metrics. Deep learning fails in headlines (hallucination, bias).",
            "Founders who cannot answer 'what happens when wrong' should not ship — and should not close enterprise customers until they can.",
          ),
          s(" This four-question audit belongs in your board deck before your first AI launch."),
        ],
      ],
      examples: [
        {
          title: "Harvey — native tier with vertical data",
          body: "Harvey is AI-native legal synthesis with firm-specific retrieval and human review paths. Mechanism: deep learning via API + proprietary legal workflow data. Tier: native. Signal: attorney edits and matter outcomes. Failure mode: human review + citations. The self-assessment is coherent — which is why the fundraise narrative holds.",
        },
        {
          title: "A founder's honest reframe — from native to powered",
          body: "A HR tech founder pitched AI-native screening. Self-assessment revealed: GPT API + ATS integration, no proprietary labels, no retraining. Reframed as AI-powered ranking assist with human final decision. Hired customer success instead of second ML engineer. Series A story improved because honesty reduced diligence risk.",
        },
        {
          title: "Scale AI — native infrastructure, not application",
          body: "Scale is AI-native but not an application wrapper — it sells the data pipeline others need to train. Mechanism: labelling ops + tooling. Moat: workforce network and enterprise contracts. Founders should study Scale when their self-assessment says 'our product is actually data infrastructure'.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "An investor asks whether your company is 'really AI'. You use GPT-4 via API to summarise customer support tickets, with no proprietary training data and no feedback loop into model improvement. Which self-assessment is most honest?",
      options: [
        "AI-native — we use a frontier model.",
        "AI-powered — AI improves an existing support workflow, but remove it and the product survives; there is no data moat yet.",
        "AI-washed — we should not claim AI at all.",
        "Deep learning company — GPT-4 is deep learning therefore we are a DL company.",
      ],
      correct: 1,
      correctFeedback:
        "Right. API summarisation on an existing product is AI-powered at best — valuable, but not native without proprietary signal and unit economics designed around inference. Honest tier placement earns trust in diligence.",
      wrongFeedback:
        "Native requires the model to be central to value creation plus a defensible data story. API-only features without feedback loops are powered or washed — not native. Re-read sections 1.6 and 1.7.",
    },
    {
      q: "Your CTO proposes training a foundation model from scratch to 'own our AI'. You have $4M seed and 14 months runway. What is the founder-correct response?",
      options: [
        "Approve — owning the model is the only real moat.",
        "Reject — foundation training is nine-figure CapEx; rent intelligence via API or fine-tune on proprietary data instead.",
        "Approve a smaller model — surely a small foundation model is cheap.",
        "Defer to the CTO — technical decisions are not the founder's job.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Foundation training is a capital expenditure game for a handful of companies. Seed founders rent intelligence and invest runway in data moats and distribution — not GPU farms.",
      wrongFeedback:
        "Training frontier models costs tens to hundreds of millions. Founders protect runway by buying inference, not building foundations. Re-read sections 1.3 and 1.5.",
    },
    {
      kind: "order",
      q: "Order the three terms from broadest scope to narrowest.",
      prompt: "Drag to arrange from broadest (top) to narrowest (bottom).",
      items: [
        "Artificial Intelligence — any system that behaves intelligently, including rules engines.",
        "Machine Learning — systems that learn patterns from data instead of hand-coded rules.",
        "Deep Learning — ML using large multi-layer neural networks.",
      ],
      correctFeedback:
        "Exactly. AI ⊃ ML ⊃ DL. Investors hear this precision as fluency. Re-read section 1.4.",
      wrongFeedback:
        "The relationship is strict containment. Re-read section 1.4.",
    },
    {
      kind: "categorize",
      q: "Sort each company claim into the correct AI tier.",
      categories: ["AI-native", "AI-powered", "AI-washed"],
      items: [
        { text: "Midjourney — image generation is the entire product; remove the model and nothing remains.", category: 0 },
        { text: "Salesforce Einstein GPT — AI features on an existing CRM that functions without them.", category: 1 },
        { text: "A startup whose 'AI' is 200 Zapier rules and a ChatGPT API key with no evaluation or data moat.", category: 2 },
        { text: "Harvey — legal synthesis where the core value is model output in a vertical workflow.", category: 0 },
        { text: "Notion AI — writing assist on a docs product that existed for years before AI.", category: 1 },
        { text: "An 'AI fraud detector' that is a weighted sum of three hand-picked signals with no training pipeline.", category: 2 },
      ],
      correctFeedback:
        "Right. Native = no model, no company. Powered = AI improves existing product. Washed = marketing without architecture. Tier honesty drives valuation and diligence outcomes.",
      wrongFeedback:
        "Ask: if you remove inference, does the company exist? Is there proprietary training signal? Re-read section 1.6.",
    },
    {
      q: "A vendor pitches an 'AI-powered lead scorer' for $120K/year. You ask whether there is a trained model. They say: 'Our proprietary intelligence layer uses advanced algorithms.' What do you do next?",
      options: [
        "Sign — 'proprietary' sounds defensible.",
        "Ask directly: is there a trained model with labelled data and evaluation metrics, or is this rules-based? Treat evasiveness as a red flag.",
        "Assume it is deep learning because they said advanced.",
        "Skip the question — procurement will handle it.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Evasive answers to the model-vs-rules question are the cheapest diligence signal available. Crisp answers earn trust; vagueness earns a pass.",
      wrongFeedback:
        "Founders must ask the rules-vs-learned question in the first ten minutes. Re-read section 1.5.",
    },
    {
      kind: "order",
      q: "You are doing the founder self-assessment before a seed fundraise. Order these questions from first to last.",
      prompt: "Drag to arrange the sequence a founder should answer (top = first).",
      items: [
        "What mechanism are we building — rules, ML, or deep learning?",
        "What tier are we — AI-native, AI-powered, or at risk of AI-washed?",
        "What proprietary training signal do we capture per user action?",
        "What happens when the model is wrong — and who owns that failure?",
      ],
      correctFeedback:
        "Right. Mechanism → tier → data moat → failure ownership. That sequence drives hiring, deck narrative, and architecture before you spend runway.",
      wrongFeedback:
        "Start with mechanism (it determines cost), then tier (it determines valuation story), then data and failure modes. Re-read section 1.7.",
    },
  ],
});
