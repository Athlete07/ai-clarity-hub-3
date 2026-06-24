import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter01MktAiMarketersMentalModel = buildChapter({
  slug: "mkt-ai-marketers-mental-model",
  number: 1,
  shortTitle: "AI Marketer's Mental Model",
  title: "What AI Actually Is — The Marketer's Mental Model",
  readingMinutes: 24,
  summary:
    "Marketers who treat AI as a magic content button burn budget and erode brand. Those who understand AI as a nested set of capabilities — rules, machine learning, and generative models — make sharper vendor choices, set realistic campaign expectations, and deploy AI where it actually compounds pipeline.",
  keyTakeaway:
    "AI ⊃ ML ⊃ Generative AI. Generative tools predict plausible marketing copy — they do not search your CRM, understand your buyer, or guarantee truth. Your edge is judgment, brand, and distribution — AI multiplies execution when you know what layer you are buying.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "1.1",
      title: "AI vs Machine Learning vs Generative AI",
      subtitle: "Three nested categories — and why confusing them costs you in vendor meetings and campaign reviews",
      take: "Artificial intelligence is the umbrella: any software that automates judgment marketers would otherwise make by hand. Machine learning learns patterns from campaign and customer data. Generative AI predicts the next useful word, image, or clip. Every tool in your stack sits in one of these layers — and the layer determines price, risk, and what you can realistically expect.",
      why: "Vendors market everything as 'AI'. Meta calls ad optimisation AI. Jasper calls copywriting AI. Mailchimp calls send-time prediction AI. They are not the same technology, cost structure, or failure mode. Marketers who can place a tool in the right layer negotiate better, avoid duplicate spend, and explain AI investments to leadership without sounding like they bought a chatbot because everyone else did.",
      paragraphs: [
        [
          s("Picture three nested circles — the same hierarchy your CFO sees, reframed for marketing. "),
          x(
            "The outer ring is AI: any system that automates marketing judgment — from a Mailchimp rule that tags inactive subscribers to a HubSpot workflow that scores leads. Inside sits machine learning: systems that improve from data — Meta's lookalike audiences, Google Smart Bidding, Klaviyo's predicted CLV. Innermost is generative AI: models that produce new copy, images, and video from prompts — ChatGPT, Jasper, Midjourney, Sora-class tools.",
            "Each ring implies different inputs, outputs, and governance. Conflating them means applying the wrong success metric — measuring a generative draft tool on ROAS, or a bidding algorithm on brand voice.",
          ),
          s(" Before your next martech renewal, label every AI feature in your stack with its layer. The exercise takes twenty minutes and often reveals duplicate spend."),
        ],
        [
          s("The commercial gradient runs inward — and vendors exploit it. "),
          x(
            "A simple if-then email trigger becomes 'AI-powered personalisation'. A regression model on open rates becomes 'machine learning'. A ChatGPT wrapper becomes 'proprietary generative engine'. Each upgrade justifies a higher price and creates the illusion of sophistication.",
            "Marketers who cannot decode the hierarchy pay the gradient premium. Those who ask 'is there a trained model, labelled data, and evaluation metrics — or is this rules-based?' negotiate from strength.",
          ),
          s(" Run that question in every AI vendor demo. Evasion is your answer."),
        ],
        [
          s("Your mental model should also map to campaign workflow, not just taxonomy. "),
          x(
            "Rules and workflows automate repeatable decisions: segment assignment, approval routing, basic lead scoring. ML optimises within historical patterns: bid adjustments, churn risk, product recommendations. Generative AI accelerates asset creation: headlines, blog drafts, ad variants, social clips.",
            "Most high-performing marketing teams in 2026 use all three — but assign each to the job it actually does. Generative AI drafts; ML optimises delivery; rules enforce governance.",
          ),
          s(" Misassignment — using generative AI for targeting decisions, or ML for brand voice — is where expensive marketing AI projects fail quietly."),
        ],
      ],
      examples: [
        {
          title: "HubSpot — three AI layers in one platform",
          body: "HubSpot bundles rules-based workflows (lifecycle stage triggers), ML features (predictive lead scoring, content strategy recommendations), and generative AI (Breeze content assistant, email draft generation). Teams that treat 'HubSpot AI' as a monolith miss the ability to enable generative drafting while keeping human approval on scoring thresholds. Mapping layers inside one vendor prevents governance gaps.",
        },
        {
          title: "Jasper vs Meta Advantage+ — same label, different mechanism",
          body: "Jasper is generative AI: it predicts marketing copy from prompts. Meta Advantage+ shopping campaigns use ML on conversion data to allocate budget across placements and creatives. Both appear as 'AI' in procurement. A performance marketer who expects Jasper to optimise bids, or Advantage+ to preserve brand voice without human review, will be disappointed — and may blame 'AI' instead of misaligned expectations.",
        },
        {
          title: "Canva Magic Write — generative inside a design workflow",
          body: "Canva's Magic Write is generative AI embedded in a design tool — useful for social captions and presentation bullets, not for audience segmentation or attribution modelling. Marketing ops teams that license Canva Pro for 'AI marketing' without separating creation from distribution often duplicate spend on Jasper or ChatGPT Team. Layer labelling clarifies what each tool actually replaces.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-ch1-ai-hierarchy",
      type: "nested",
      title: "AI vs Machine Learning vs Generative AI",
      caption:
        "Three nested categories — rules and heuristics at the outer ring, learned optimisation in the middle, generative production at the core. Know which layer before you buy.",
    }),
    buildSection({
      number: "1.2",
      title: "What Generative AI Actually Does",
      subtitle: "Pattern completion for marketers — not understanding, not strategy, not guaranteed truth",
      take: "Generative AI models are trained to predict the most plausible next token, pixel, or frame given your prompt and their training data. For marketers, that means fast drafts of copy, images, and scripts — not market research, not buyer psychology, and not verified facts. Treating generation as comprehension is the root cause of most brand incidents involving AI content.",
      why: "Your team is already using generative tools for emails, ads, and social posts. The question is not whether to use them but whether everyone shares the same mental model of what 'generate' means — because misunderstanding produces confident wrong outputs that look publish-ready.",
      paragraphs: [
        [
          s("Generative models do not retrieve your brand guidelines from memory — they statistically approximate language that resembles similar text in training. "),
          x(
            "When Jasper drafts a product email, it is completing patterns from millions of marketing emails — not reading your positioning doc unless you paste it in the prompt. When Midjourney renders a 'SaaS hero image', it blends visual tropes from its training corpus.",
            "The output can be excellent, generic, or subtly wrong — often all three in the same draft. Fluency is not accuracy.",
          ),
          s(" Every generative output is a hypothesis to review, not a finished asset."),
        ],
        [
          s("The marketing value of generative AI concentrates in velocity and variation, not originality of insight. "),
          x(
            "Teams use it to produce ten headline variants for Meta A/B tests, repurpose a webinar into six LinkedIn posts, localise landing page copy for three regions, or storyboard a product video from a brief. The ROI case is hours saved and test volume increased — not 'AI strategy'.",
            "Leaders who frame generative AI as strategic advantage without human curation confuse throughput with differentiation.",
          ),
          s(" Measure generative tools on time-to-first-draft and variant count — then measure human-edited assets on CTR, conversion, and brand sentiment."),
        ],
        [
          s("Generative AI also changes the shape of marketing work — it shifts effort from blank-page drafting to editing, fact-checking, and selection. "),
          x(
            "A content marketer who once wrote two blog posts a week may now curate eight AI drafts, edit three to publishable quality, and spend more time on distribution and promotion. The job becomes editorial direction, not typing speed.",
            "Managers who set the same output quotas without adjusting for review time create burnout and quality drift.",
          ),
          s(" Rescope roles and KPIs when generative tools enter the workflow — editorial judgment is the bottleneck, not generation."),
        ],
      ],
      examples: [
        {
          title: "Notion AI — internal draft acceleration",
          body: "A B2B SaaS marketing team uses Notion AI to summarise customer interview notes and draft campaign briefs from bullet points. Time from interview to brief dropped from four hours to ninety minutes. Published campaigns still require strategist review for positioning accuracy. The win is speed to structured thinking — not autonomous campaign planning.",
        },
        {
          title: "Shopify Magic — product description at scale",
          body: "Shopify merchants use Magic to generate product descriptions from specs and keywords. Conversion lift appears only when merchants edit for brand voice and verify claims. Merchants who publish raw output see higher return rates from mismatched expectations. Generative AI scales description volume; merchant judgment scales trust.",
        },
        {
          title: "LinkedIn — generative for social, ML for feed",
          body: "LinkedIn's generative writing suggestions help users draft posts — pattern completion on professional tone. LinkedIn's feed ranking uses ML on engagement signals — a completely different system. Marketers who conflate 'LinkedIn AI' features may over-trust post suggestions while under-investing in content that actually earns distribution. Separate creation tools from platform optimisation.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "1.3",
      title: "Generative AI Is Not a Search Engine",
      subtitle: "Retrieval finds what exists; generation invents what sounds right — marketers need both, and must not confuse them",
      take: "Search and RAG systems retrieve existing documents and cite sources. Generative models predict new text that may include fabricated statistics, fake case studies, and invented product features. Marketers who use ChatGPT like Google — or who buy 'AI research' tools without verifying retrieval architecture — publish errors at scale.",
      why: "Campaign briefs, competitive analyses, and thought leadership all depend on factual claims. Confusing retrieval with generation is how teams ship blog posts citing non-existent studies, ad copy with wrong pricing, and sales enablement decks with hallucinated customer logos.",
      paragraphs: [
        [
          s("A search engine or knowledge-base retrieval tool answers: 'What do we already know?' "),
          x(
            "Perplexity, Google Search, HubSpot's knowledge base search, and enterprise RAG over your CRM notes return or summarise existing content. They can fail when the answer is not documented — but they do not invent a plausible answer from nothing.",
            "Generative AI answers: 'What would a convincing answer look like?' It will fill gaps with fluent fabrication unless you constrain it with retrieved context and verification habits.",
          ),
          s(" Use retrieval for facts; use generation for phrasing and format — never the reverse without a fact-check step."),
        ],
        [
          s("Marketing workflows that mix both deliberately outperform teams that use one tool for everything. "),
          x(
            "Strong pattern: retrieve competitor pricing from saved battlecards and win-loss notes → paste into prompt as context → generate positioning angles → human verifies every claim before publish. Weak pattern: ask ChatGPT 'what are our competitors' weaknesses' and paste the output into a sales deck.",
            "The second pattern feels faster until legal, sales, or a prospect exposes a hallucinated claim on a live call.",
          ),
          s(" Document which steps in your content pipeline are retrieval-backed and which are generative-only."),
        ],
        [
          s("Vendor demos blur the line intentionally. "),
          x(
            "'AI-powered market research' may be generative summarisation of public web snippets — not proprietary data. 'Brand-aware AI' may mean you uploaded a PDF once, not continuous retrieval from your DAM and CRM.",
            "Ask vendors: does this feature retrieve from a specified corpus with citations, or generate from the model's weights? Can I see the source for every factual claim?",
          ),
          s(" No citation path means no publish path for external-facing claims."),
        ],
      ],
      examples: [
        {
          title: "Perplexity vs ChatGPT for competitive intel",
          body: "A fintech marketing team compared Perplexity (retrieval with citations) and ChatGPT (generative) for a competitor feature matrix. Perplexity surfaced dated but citable press releases. ChatGPT invented a feature integration that did not exist — confidently written. The team now uses retrieval for fact gathering and ChatGPT only for reframing verified bullets into executive summary prose.",
        },
        {
          title: "Mailchimp content suggestions — context limits",
          body: "Mailchimp's generative email suggestions draw on campaign history inside the account — a narrow form of retrieval plus generation. Marketers who expect the tool to know company-wide positioning without uploading brand context get generic SaaS tone. Treating it like a search across all marketing assets leads to disappointment. Feed it context explicitly.",
        },
        {
          title: "Air Canada chatbot — generative customer comms risk",
          body: "Air Canada's customer-facing chatbot generated incorrect bereavement fare policy language — retrieval was not wired to authoritative policy docs. Marketing and CX leaders learned: customer-facing generative tools need grounded knowledge bases and escalation paths. The same lesson applies to AI chat on your pricing page: generate from verified source material only.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-ch1-retrieval-vs-generation",
      type: "comparison",
      title: "Generative AI Is Not a Search Engine",
      caption:
        "Retrieval finds existing documents and cites sources. Generation predicts plausible text — including inventions. Marketers need both, separately.",
    }),
    buildSection({
      number: "1.4",
      title: "What AI Cannot Do for Marketers",
      subtitle: "The limits vendor keynotes omit — and why they matter for brand, compliance, and pipeline",
      take: "AI cannot understand your buyer's unstated motivations, guarantee factual accuracy, own brand risk, replace distribution, or absolve you of regulatory responsibility. Marketers who internalise these limits design human review into every external touchpoint and avoid the most common failure mode: publishing fluent nonsense at brand scale.",
      why: "Most AI-related marketing incidents are not technology failures — they are expectation failures. Teams assumed the tool 'knew' the product, 'understood' the audience, or 'checked' the claims. Knowing limits is the cheapest risk management in your martech stack.",
      paragraphs: [
        [
          s("AI does not understand your customer — it approximates language patterns associated with customer segments in training data. "),
          x(
            "A generative tool can mimic 'enterprise CFO tone' or 'Gen Z casual' without knowing whether your actual buyer cares about compliance, speed, or status. Persona documents in prompts help — but they are instructions to a pattern engine, not empathy.",
            "Qualitative research, sales call listening, and customer interviews remain irreplaceable for positioning. AI accelerates articulation of insights you already have; it does not replace discovering them.",
          ),
          s(" Never skip voice-of-customer work because 'the AI knows audiences'."),
        ],
        [
          s("AI cannot guarantee accuracy — and confident tone is not evidence of correctness. "),
          x(
            "Hallucinated statistics in thought leadership, wrong pricing in ad copy, fabricated testimonials in case study drafts — all arrive with the same polished prose as correct content. Models do not flag uncertainty on factual claims unless prompted to — and even then, unreliably.",
            "Regulated claims (health, finance, earnings) and competitive comparisons require human expert sign-off. Marketing compliance is not a feature you can outsource to the model.",
          ),
          s(" Build a fact-check gate for every external asset where AI touched the first draft."),
        ],
        [
          s("AI cannot take brand or legal responsibility — your organisation publishes, your CMO owns the outcome. "),
          x(
            "When an AI-generated ad uses a competitor's trademark incorrectly, invents a customer result, or produces biased imagery, liability and reputational damage land on the brand — not OpenAI, Jasper, or Meta.",
            "This means named approvers, audit trails, and acceptable-use policies are not bureaucracy — they are the minimum viable governance for AI-assisted marketing.",
          ),
          s(" Map every customer-facing AI output to a human approver by name before it ships."),
        ],
      ],
      examples: [
        {
          title: "Levi Strauss — generative imagery backlash",
          body: "Levi's piloted AI-generated diverse models for e-commerce and faced public criticism over authenticity and labour implications. The technology worked; the brand judgment failed. Marketing leaders need stakeholder review on public-facing generative creative — not just creative director sign-off, but PR and DEI lens on what 'AI-generated diversity' signals.",
        },
        {
          title: "Samsung — confidentiality and public models",
          body: "Samsung employees pasted proprietary campaign and product data into public ChatGPT for copy help. Confidential positioning entered a third-party training pipeline. Marketing ops responded with approved tools, DLP policies, and training. The lesson: AI cannot protect your secrets — your toolchain and policy must.",
        },
        {
          title: "Legal hallucination in B2B content",
          body: "A SaaS marketing team published a blog citing a industry report that did not exist — drafted by ChatGPT, missed in editorial review. Sales referenced the stat on calls until a prospect challenged it. The fix was not 'better AI' but mandatory citation verification and banning unsourced statistics from AI-first drafts.",
        },
      ],
    }),
    buildSection({
      number: "1.5",
      title: "The Content Factory Trap",
      subtitle: "Why more AI-generated posts rarely equals more pipeline — and how teams escape the volume treadmill",
      take: "The content factory trap is treating generative AI as a way to multiply publish volume without multiplying distribution, differentiation, or conversion quality. Teams ship thirty blog posts a month that sound identical, rank for nothing, and burn creator morale — while competitors publish less but win on insight and channel fit.",
      why: "Leadership often pressures marketing to 'do more with AI' by counting assets. Without guardrails, that metric optimises for noise. Understanding the trap helps you push back with a better scorecard — and deploy AI where volume actually helps (testing, personalisation at scale) versus where it hurts (undifferentiated thought leadership).",
      paragraphs: [
        [
          s("Generative AI lowers the cost of producing mediocre marketing content to near zero — which floods every channel with sameness. "),
          x(
            "The same training data produces the same rhetorical moves: 'In today's fast-paced digital landscape…', unlock, leverage, game-changer. Buyers and algorithms recognise template tone. SEO and social algorithms reward specificity and engagement — not word count.",
            "Publishing more generic content does not compound; it dilutes crawl budget, email reputation, and brand distinctiveness.",
          ),
          s(" Ask whether each AI-assisted piece adds a claim, story, or data point your competitors cannot easily replicate."),
        ],
        [
          s("The trap intensifies when AI output skips editorial strategy. "),
          x(
            "A calendar packed with AI blogs without pillar topic design, internal linking, or sales alignment creates activity theatre. Pipeline metrics flatline while content costs drop on paper.",
            "Healthy use: AI generates variants for tested angles, repackages proven winners into new formats, and drafts from strategist-written briefs — not autonomous topic selection from keyword lists alone.",
          ),
          s(" Brief quality gates AI output quality. No brief, no publish."),
        ],
        [
          s("Escape the trap by pairing generative velocity with curation and distribution investment. "),
          x(
            "Cap publish volume; raise the bar for originality. Invest saved hours in promotion, community, partnerships, and sales enablement. Measure assisted pipeline and engagement depth — not posts per week.",
            "Teams that win with AI in 2026 produce fewer, sharper assets and use AI for personalisation layers (email variants, ad creative tests) where volume is an optimisation input, not a brand statement.",
          ),
          s(" Propose leadership a 'quality floor' policy: every AI draft must pass a differentiation checklist before scheduling."),
        ],
      ],
      examples: [
        {
          title: "HubSpot's own content evolution",
          body: "HubSpot pioneered inbound volume — then shifted toward depth, video, and tool-led content as AI flooded generic marketing blogs. Teams that copied the 2015 volume playbook with 2025 AI tools saw diminishing SEO returns. The lesson from market leaders: AI-era content strategy competes on utility and voice, not article count.",
        },
        {
          title: "DTC brand email frequency test",
          body: "A DTC skincare brand used Jasper to quadruple email variants, sending four times weekly instead of one. Unsubscribe rate doubled; revenue per send fell 30%. They reverted to one weekly send with AI-generated subject line tests only — revenue recovered. Volume without relevance damaged list health.",
        },
        {
          title: "Agency pitch — AI content retainer reframed",
          body: "An agency sold a '30 AI blogs per month' retainer to a mid-market client. After six months, organic traffic was flat. The client renegotiated to eight strategist-led pieces with AI assist on repurposing into social and sales snippets. Traffic and demo requests rose. The AI value was repurposing proven content — not factory output.",
        },
      ],
    }),
    buildSection({
      number: "1.6",
      title: "Competitive Parity vs Competitive Advantage",
      subtitle: "Everyone has the same models — differentiation moves to brand, data, and workflow",
      take: "Generative AI is a commodity capability: your competitors use the same GPT-class models, the same Jasper templates, the same Midjourney styles. AI does not create moats by itself — it creates parity. Advantage comes from proprietary customer insight, distinctive brand voice, first-party data in ML systems, and workflows competitors cannot copy quickly.",
      why: "Marketing leaders face pressure to adopt AI for fear of falling behind. Understanding parity versus advantage prevents wasteful 'me too' tooling and focuses budget on compounding assets — CRM data, community, creative systems — rather than another writing subscription.",
      paragraphs: [
        [
          s("When every brand can generate polished copy in seconds, polish stops being differentiating. "),
          x(
            "Buyers compare substance: specific customer outcomes, unique methodology, proof points from your installed base. AI gets everyone to 'professional minimum' faster — it does not get anyone to remembered.",
            "Competitive advantage in AI-assisted marketing looks like: proprietary research, named customer stories you own, a voice so distinct that edited AI drafts still read as you, and ML trained on your conversion data — not public internet patterns.",
          ),
          s(" Audit your last ten AI-assisted assets: could a competitor with the same tool produce 80% of this in an hour? If yes, it is parity content."),
        ],
        [
          s("ML-driven marketing features can create advantage — when fed your first-party data. "),
          x(
            "Meta Advantage+ and Google Performance Max improve with conversion volume from your pixel. Klaviyo send-time optimisation learns your list behaviour. HubSpot lead scoring improves with your funnel outcomes. The model architecture is commodity; your event data is not.",
            "Generative tools without private fine-tuning or rich prompt systems do not learn your wins — each session starts cold unless you engineer context.",
          ),
          s(" Invest in data capture and hygiene before buying another generative seat — data compounds, generic prompts do not."),
        ],
        [
          s("Workflow integration is the hidden advantage layer. "),
          x(
            "Two teams use ChatGPT Team. Team A pastes briefs ad hoc. Team B runs a prompt library tied to campaign templates, brand voice docs, and approval in Asana. Team B ships faster with consistent quality — not because of a better model, but because of system.",
            "Documented prompts, voice guides, and review rituals are intellectual property. They are harder to copy than a software login.",
          ),
          s(" Build the system around the model — that is where marketing AI maturity actually lives."),
        ],
      ],
      examples: [
        {
          title: "Spotify Wrapped — data story, not generative fluff",
          body: "Spotify Wrapped dominates social each December — not because Spotify used AI to write copy, but because personalised listening data is proprietary and emotionally resonant. Marketers should ask: what first-party data story can we tell that a competitor cannot generate from public prompts? AI helps package the narrative; the data asset is the advantage.",
        },
        {
          title: "Patagonia voice — AI cannot fake mission",
          body: "Patagonia's marketing advantage is decades of mission consistency and activism credibility. An AI draft of a 'sustainability campaign' without that history reads hollow. Brands with weak positioning find AI exposes the gap — everything sounds like everyone else. Strengthen positioning before scaling generation.",
        },
        {
          title: "Meta lookalikes — parity at small scale",
          body: "A startup and an enterprise both use Meta lookalike audiences from pixel data. At low conversion volume, both get similar mediocre performance — ML needs data scale. The enterprise's advantage emerges at thousands of conversions monthly. Marketers should match ML feature investment to data maturity, not competitor press releases.",
        },
      ],
    }),
    buildSection({
      number: "1.7",
      title: "AI as Leverage Multiplier",
      subtitle: "Where AI compounds marketer output — and where it subtracts if misapplied",
      take: "AI multiplies marketing leverage when it accelerates bottlenecks you already understand: variant testing, repurposing, personalisation, briefing, and reporting — while humans retain strategy, taste, and accountability. It subtracts when it automates judgment you have not codified — producing scale without direction.",
      why: "Budget conversations go better when you frame AI as leverage on existing strengths rather than a replacement for marketing thinking. This section gives you language for leadership: where to invest AI hours for compound returns.",
      paragraphs: [
        [
          s("High-leverage AI use cases share a pattern: clear input, reviewable output, measurable downstream metric. "),
          x(
            "Meta dynamic creative tests: AI generates combinations; marketer sets constraints; ROAS measures winners. Webinar to social repurposing: transcript in, six draft posts out; editor picks three; engagement measures fit. Sales enablement: AI drafts battlecard updates from release notes; product marketing verifies facts.",
            "Low-leverage use cases: 'write our strategy', 'find our positioning', 'replace the agency' — undefined inputs, unmeasurable outputs, high brand risk.",
          ),
          s(" Score every proposed AI workflow on input clarity and success metric before piloting."),
        ],
        [
          s("Leverage also means cross-functional multiplication — AI drafts that sales, success, and partnerships can reuse. "),
          x(
            "A single strategist brief processed through a repurposing workflow yields email copy, LinkedIn posts, FAQ updates, and talk track bullets — each human-edited once, distributed many times. Without the workflow, generative AI saves one writer an hour.",
            "Marketing ops that document repurposing chains capture multiples of individual tool savings.",
          ),
          s(" Design workflows end-to-end before buying point solutions for each format."),
        ],
        [
          s("The multiplier fails when teams skip the human compression step — editing, choosing, killing bad drafts. "),
          x(
            "AI expands the option space; marketers compress it to what ships. Compression is taste, strategy, and risk tolerance — uniquely human and currently non-delegable.",
            "Leaders who cut headcount assuming AI replaces compression learn expensive lessons in brand damage and conversion collapse.",
          ),
          s(" Protect editorial headcount as the compression layer — AI expands supply; people create demand-worthy supply."),
        ],
      ],
      examples: [
        {
          title: "Zapier — internal AI repurposing chain",
          body: "Zapier's marketing team chains transcription → summarisation → draft social threads → Asana task for editor review. One long-form piece fuels two weeks of distribution assets. AI multiplier is in the chain, not any single prompt. Teams without automation revert to one-off ChatGPT sessions and lose the compound effect.",
        },
        {
          title: "Cruise line personalisation at scale",
          body: "A travel marketer uses ML send-time optimisation and generative subject line variants in Mailchimp for segmented lists — 40 variants tested monthly. Open rates rose 12% with same send volume. Leverage came from testing bandwidth AI enabled, not from sending more emails.",
        },
        {
          title: "Failed 'AI replaces agency' pilot",
          body: "A Series B company cancelled their creative agency and relied on Midjourney plus ChatGPT for all campaign creative. Paid social CTR dropped 45% in one quarter — assets looked synthetic and messaging lacked category insight. They rehired strategic creative and kept AI for variant production only. Multiplier works on a foundation; it does not replace it.",
        },
      ],
    }),
    buildSection({
      number: "1.8",
      title: "The Marketer Decision Lens — Mental Model Audit",
      subtitle: "Five questions to run on every AI tool, campaign workflow, and vendor renewal this quarter",
      take: "Before the next AI purchase or campaign scale-up, run five checks: (1) Which layer — rules, ML, or generative? (2) Retrieval or generation for facts? (3) Does this create parity or compound our data/voice advantage? (4) Where is human review before external publish? (5) What metric proves leverage — not volume? Marketers who audit consistently avoid factory traps and spend on compound workflows.",
      why: "You do not need to understand model weights — you need a repeatable lens for standups, budget requests, and vendor demos. This audit fits on one slide and prevents the most common marketing AI mistakes.",
      paragraphs: [
        [
          s("Question one: what layer is this, and is that the layer this problem needs? "),
          x(
            "Generative for draft copy; ML for bid and send optimisation; rules for approval and compliance routing. Mismatch — generative for audience selection, ML for brand voice — wastes budget and creates silent quality decay.",
            "Write the layer on every line item in your martech AI inventory.",
          ),
          s(" Layer mismatch is the fastest path to 'AI does not work for us' — when the tool was never matched to the job."),
        ],
        [
          s("Questions two and three: facts and differentiation. "),
          x(
            "For any claim-bearing asset: what is the retrieval source? For any differentiating asset: would a competitor's team with the same tool produce equivalent output? If yes, add proprietary insight, customer proof, or voice constraints before scaling.",
            "Parity content is fine for internal drafts and low-stakes tests — not for flagship campaigns.",
          ),
          s(" Flag parity risk in campaign briefs the same way you flag legal review."),
        ],
        [
          s("Questions four and five: governance and measurement. "),
          x(
            "Name the approver for customer-facing AI output. Define the metric: time saved, test variants run, conversion lift, cost per asset — not 'pieces published'. Review quarterly; kill workflows that hit volume but miss pipeline.",
            "Vendors who cannot align to your metric are selling novelty. Your lens filters them out.",
          ),
          s(" Bring this audit to your next marketing leadership meeting — twenty minutes, entire AI portfolio classified."),
        ],
      ],
      examples: [
        {
          title: "CMO quarterly martech audit",
          body: "A B2B CMO ran the five-question audit on twelve AI features across HubSpot, Jasper, and Meta. Result: three generative tools duplicated copywriting; ML bidding was underfed from weak pixel events; no named approver on AI blog drafts. They consolidated to one writing stack, fixed tracking, and assigned content ops as publish gate. Pipeline metrics unchanged; risk and spend improved.",
        },
        {
          title: "Agency vendor demo scorecard",
          body: "A growth lead required vendors to complete the mental model audit worksheet before POC approval. One 'AI personalisation' vendor failed layer one — it was mail-merge rules, not ML. Another passed but failed differentiation — generic GPT prompts only. Only the vendor with CRM-connected retrieval plus generative templates advanced. The lens shortened evaluation from six weeks to two.",
        },
        {
          title: "Team onboarding — shared vocabulary",
          body: "A marketing team added the AI hierarchy and retrieval-vs-generation slide to new hire onboarding. Within a quarter, Slack questions shifted from 'which AI is best?' to 'which layer for this task?' Campaign rework from factual errors dropped measurably. Shared mental models reduce coordination cost more than another tool subscription.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Your performance lead says Jasper will 'optimise our Meta ad spend with AI.' Using the marketer mental model, what is the correct response?",
      options: [
        "Great — one AI tool for copy and bidding.",
        "Clarify layers: Jasper is generative (copy drafts); Meta Advantage+ is ML (budget allocation). Different tools, different jobs — do not expect one to do the other's work.",
        "Skip Jasper — only use Meta's native AI.",
        "Assume both use the same GPT model so they are interchangeable.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Generative AI produces assets; ML optimises delivery from conversion data. Conflating them sets wrong expectations. Re-read sections 1.1 and 1.2.",
      wrongFeedback:
        "Jasper and Meta ad optimisation sit in different layers with different inputs and metrics. Re-read sections 1.1 and 1.2.",
    },
    {
      kind: "order",
      q: "Order the marketer mental model audit questions from first to last.",
      prompt: "Drag to arrange from first question (top) to last (bottom).",
      items: [
        "What layer — rules, ML, or generative — does this problem need?",
        "For facts: retrieval source or generation-only?",
        "Parity or advantage — would a competitor produce the same output?",
        "Who approves customer-facing AI output?",
        "What metric proves leverage — not just volume?",
      ],
      correctFeedback:
        "Right. Layer → facts → differentiation → governance → measurement. Re-read section 1.8.",
      wrongFeedback:
        "Start with layer — it determines which tool class fits the job. Re-read section 1.8.",
    },
    {
      kind: "categorize",
      q: "Sort each marketing capability into the correct AI layer.",
      categories: ["Rules / workflow", "Machine learning", "Generative AI"],
      items: [
        { text: "HubSpot workflow that moves leads to MQL when form score exceeds 80.", category: 0 },
        { text: "Klaviyo predicted send time based on individual open history.", category: 1 },
        { text: "ChatGPT drafting three email subject lines from a campaign brief.", category: 2 },
        { text: "Mailchimp tag automation when a subscriber clicks a pricing link.", category: 0 },
        { text: "Google Performance Max allocating budget across asset groups from conversion data.", category: 1 },
        { text: "Midjourney generating ad background images from a text prompt.", category: 2 },
      ],
      correctFeedback:
        "Right. Rules: explicit if-then logic. ML: learns from your campaign/customer data. Generative: produces new copy or creative from prompts. Re-read sections 1.1–1.3.",
      wrongFeedback:
        "Ask: is logic hand-written (rules), learned from outcomes (ML), or producing new content (generative)? Re-read sections 1.1–1.3.",
    },
    {
      q: "A content lead proposes publishing 40 AI-generated blogs per month to 'win SEO with AI volume.' What is the strongest marketing pushback?",
      options: [
        "Approve — more content always helps SEO.",
        "Flag the content factory trap: volume without differentiation and distribution compounds noise, not pipeline; cap quality and measure conversion and engagement depth.",
        "Reject all AI content permanently.",
        "Switch to video only — blogs are dead.",
      ],
      correct: 1,
      correctFeedback:
        "Right. AI lowers cost of mediocre content; without strategy it dilutes brand and SEO. Re-read section 1.5.",
      wrongFeedback:
        "Volume without differentiation is the content factory trap. Measure pipeline impact, not post count. Re-read section 1.5.",
    },
    {
      q: "A strategist asks ChatGPT for competitor pricing without pasted sources and publishes the answer in a sales deck. What mental model failure occurred?",
      options: [
        "Used generative AI where retrieval and verification were required — generation invents plausible facts.",
        "Should have used a smaller model.",
        "ChatGPT cannot write about competitors.",
        "No failure — AI research is standard practice.",
      ],
      correct: 0,
      correctFeedback:
        "Right. Generative models predict plausible text; they do not retrieve verified facts. Use retrieval plus human verification for claims. Re-read section 1.3.",
      wrongFeedback:
        "Confusing generation with search produces confident errors. Retrieve and verify before publish. Re-read section 1.3.",
    },
    {
      kind: "categorize",
      q: "Classify each scenario as competitive parity or potential competitive advantage.",
      categories: ["Parity (commodity AI use)", "Advantage (compounds your assets)"],
      items: [
        { text: "Generic LinkedIn post drafted with default ChatGPT and no brand voice doc.", category: 0 },
        { text: "Email variants tested on your Klaviyo list with six months of behavioural data.", category: 1 },
        { text: "Stock-style Midjourney hero image using popular SaaS prompt templates.", category: 0 },
        { text: "Case study repurposing workflow fed with your exclusive customer interview transcripts.", category: 1 },
        { text: "Blog on 'digital transformation' with no original data — AI first draft only.", category: 0 },
        { text: "Meta lookalike campaign seeded from high-LTV purchaser pixel events at scale.", category: 1 },
      ],
      correctFeedback:
        "Right. Advantage pairs AI with proprietary data, voice systems, or conversion learning — parity is what any competitor can do with the same public tools. Re-read section 1.6.",
      wrongFeedback:
        "Ask: does this use first-party data, distinct voice, or workflows others cannot copy quickly? If not, it is parity. Re-read section 1.6.",
    },
  ],
});
