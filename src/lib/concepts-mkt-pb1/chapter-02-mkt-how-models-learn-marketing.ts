import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter02MktHowModelsLearnMarketing = buildChapter({
  slug: "mkt-how-models-learn-marketing",
  number: 2,
  shortTitle: "How Models Learn — Marketing",
  title: "How Models Learn — What It Means for Marketing",
  readingMinutes: 24,
  summary:
    "Every AI draft, bid adjustment, and send-time recommendation traces back to training data, model weights, and inference settings. Marketers who understand how models learn — and where that learning stops — write better prompts, choose appropriate tools, and stop blaming 'bad AI' when the real issue is data, cutoffs, or wrong model for the job.",
  keyTakeaway:
    "Models learn patterns from past examples — they do not know your launch from last Tuesday unless you tell them. Training data shapes voice; fine-tuning and context shape fit; temperature and window size shape risk. Your job is matching model behaviour to campaign stakes.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "2.1",
      title: "Training Data — What the Model Has Already Seen",
      subtitle: "The invisible ingredient behind every headline, image style, and optimisation signal",
      take: "Foundation models are trained on vast public corpora — web text, books, forums, marketing pages, support threads. That training bakes in dominant patterns: how SaaS landing pages sound, what stock ad imagery looks like, which claims appear often. Your outputs inherit that statistical past unless you override with context, examples, or fine-tuning.",
      why: "When a draft 'sounds like everyone else', that is not a bug — it is the model doing its job. When a tool recommends messaging that feels off-brand, training bias may be the cause. Marketers who understand training data can diagnose generic output, set realistic fine-tuning expectations, and ask vendors sharper data questions.",
      paragraphs: [
        [
          s("Training data is the model's only experience of the world before your prompt arrives. "),
          x(
            "GPT-class models absorbed billions of marketing pages — hence the clichés, the rhythmic bullet lists, the 'revolutionise your workflow' phrasing. Image models absorbed Pinterest, stock sites, and ad galleries — hence the same lighting, poses, and composition tropes.",
            "The model is not copying one competitor; it is blending thousands of statistically similar examples.",
          ),
          s(" Generic output signals you have not supplied enough counter-pattern in your prompt or examples."),
        ],
        [
          s("Marketing ML features — Meta bidding, Klaviyo CLV, HubSpot scoring — train on behavioural data, not blog posts. "),
          x(
            "Their training or retraining uses conversion events, opens, clicks, purchases, and churn signals from accounts like yours. Cold start problems are real: new pixels, new lists, and new products produce weak predictions until volume accumulates.",
            "This is different from generative training but the same principle: the model only knows what it has seen.",
          ),
          s(" Before trusting ML recommendations, ask: how much of my data has this system actually learned from?"),
        ],
        [
          s("Data rights and contamination matter for marketers using public tools. "),
          x(
            "Pasting unreleased campaign copy, pricing, or customer lists into public models may feed vendor improvement pipelines — and may leak confidential positioning. Enterprise tiers with data isolation exist precisely because training exposure is a business risk.",
            "Your proprietary win-loss notes are marketing gold for prompts — and a liability if pasted into the wrong tool.",
          ),
          s(" Classify data before every paste: public, internal, confidential — and match tool tier accordingly."),
        ],
      ],
      examples: [
        {
          title: "Jasper default tone — training echo",
          body: "A cybersecurity startup ran Jasper with minimal brand context. Output read like generic martech — 'streamline', 'empower teams', 'cutting-edge'. After adding three edited customer quotes and a banned-word list to the brand voice doc, drafts improved materially. The model did not change; the counter-training in the prompt did.",
        },
        {
          title: "Meta pixel cold start",
          body: "A new e-commerce brand launched Advantage+ shopping with under 200 monthly conversions. CPA swung wildly for six weeks. Meta's ML needed event volume to stabilise. Marketing paused scale-up, focused on event quality and catalog hygiene, and performance converged after crossing roughly 1,000 monthly purchases. Training on their data required data.",
        },
        {
          title: "HubSpot scoring — sparse CRM history",
          body: "A professional services firm enabled predictive lead scoring with only eight months of CRM data and inconsistent stage definitions. Scores correlated weakly with closed-won. They cleaned stage hygiene, backfilled outcomes, and waited two quarters before trusting automated routing. ML scoring quality tracks training label quality — garbage in, confident garbage out.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-ch2-training-to-output",
      type: "flow",
      title: "Training Data — What the Model Has Already Seen",
      caption:
        "Training data shapes weights; your prompt and review shape what ships. The model predicts — marketers curate.",
    }),
    buildSection({
      number: "2.2",
      title: "Why AI Output Sounds Like Everyone Else",
      subtitle: "Regression to the mean in language — and how marketers break out of template tone",
      take: "Generative models optimise for statistically common phrasing in their training distribution. In marketing, that mean is professional, inoffensive, and forgettable — the voice of a thousand SaaS homepages. Breaking out requires deliberate constraints: voice docs, negative examples, specific customer language, and human editing as the differentiator.",
      why: "Brand teams worry AI will homogenise voice. They are right — unless the workflow engineers distinctiveness. Understanding mean-regression helps you design prompts and review steps that preserve edge, humour, or technical authority your category lacks.",
      paragraphs: [
        [
          s("Models default to the centre of the distribution because that minimises surprising wrong tokens during training. "),
          x(
            "Bold opinions, niche jargon, and polarising hooks appear less often in training than safe corporate prose. Ask for 'a blog intro' and you get landscape-and-leverage. Ask for 'an intro that sounds like our CEO's earnings call — direct, numbers-first, sceptical of buzzwords' and you move off-centre.",
            "Specificity in persona and reference material beats adjectives like 'engaging' or 'modern'.",
          ),
          s(" Replace vague tone requests with exemplars — paste two paragraphs you wish you had written."),
        ],
        [
          s("Category language creates invisible clustering — every fintech sounds like every fintech, every DTC skincare sounds alike. "),
          x(
            "Training data over-represents category boilerplate: 'bank-grade security', 'clinically inspired', 'AI-powered insights'. Buyers develop banner blindness to these clusters.",
            "Marketers who mine sales call transcripts and support tickets for unusual customer phrases inject language models rarely combine on their own.",
          ),
          s(" Build a 'phrases we sound like / phrases we never use' appendix to your brand guide — enforce in prompts."),
        ],
        [
          s("Human editing remains the anti-sameness layer — not optional polish. "),
          x(
            "AI expands drafts; editors inject rhythm, surprise, and proof. Teams that measure 'time to publish' without 'distinctiveness review' drift toward category noise.",
            "Some brands intentionally use AI for internal variants only — external flagship content stays human-first for voice integrity.",
          ),
          s(" Define which tiers of content allow AI-first drafting versus human-first drafting in your governance doc."),
        ],
      ],
      examples: [
        {
          title: "Mailchimp voice — human brand as AI counterweight",
          body: "Mailchimp's distinctive voice predates generative AI — quirky, plain-language, anti-jargon. Teams using Mailchimp's generative suggestions still run copy through voice guidelines. External recognition came from years of human consistency; AI assists only where guidelines are explicit.",
        },
        {
          title: "B2B rebrand with transcript mining",
          body: "An analytics vendor fed six months of Gong call transcripts (redacted) into few-shot prompts for case study drafts. Output used customer verbs — 'pipe debug', 'quota attainment' — that generic SaaS AI never produced. Sameness broke when input data was proprietary, not public.",
        },
        {
          title: "DTC brand A/B on AI vs human headlines",
          body: "A supplements brand tested Meta ads: pure AI headlines versus AI draft plus human rewrite. Human-refined variants won on CTR 70% of tests over eight weeks. They kept AI for volume of first drafts, not final copy. Data proved sameness had a measurable cost.",
        },
      ],
    }),
    buildSection({
      number: "2.3",
      title: "Fine-Tuning and Custom Models for Brand",
      subtitle: "When prompts are not enough — and when fine-tuning is not worth the cost",
      take: "Fine-tuning adapts a base model to your patterns — support tone, product nomenclature, compliance language — by additional training on your curated examples. For most marketing teams, robust prompt systems plus RAG over brand assets achieve 80% of the benefit at 5% of the cost. Fine-tuning pays when volume, consistency, and compliance demands are extreme.",
      why: "Vendors sell 'custom AI' aggressively. Marketers need to know when custom means a prompt template, a RAG knowledge base, or actual weight updates — because price and maintenance differ by orders of magnitude.",
      paragraphs: [
        [
          s("Three levels of 'custom' appear in martech sales decks — distinguish them before budget approval. "),
          x(
            "Level one: system prompts and saved templates (Jasper Brand Voice, ChatGPT custom GPTs). Level two: retrieval over your docs (HubSpot knowledge, enterprise RAG). Level three: fine-tuned weights on your labelled examples — rare for mid-market marketing, common at enterprise with legal/compliance needs.",
            "Most teams stall at level one or two indefinitely with good results.",
          ),
          s(" Ask vendors which level they sell — and what ongoing curation they require when your product or voice changes."),
        ],
        [
          s("Fine-tuning requires curated, labelled example datasets — marketing must supply quality pairs. "),
          x(
            "Input: brief or product spec. Output: approved final copy. Hundreds to thousands of high-quality pairs for meaningful fine-tune gains. Poor examples teach poor habits — approving mediocre pairs to hit dataset size backfires.",
            "Fine-tuning a weak brand voice doc amplifies weakness.",
          ),
          s(" Invest in exemplar quality before fine-tune budget — often prompts catch up first."),
        ],
        [
          s("Maintenance is the hidden cost — every repositioning, product rename, or compliance change may require retraining. "),
          x(
            "Prompt and RAG updates take hours. Fine-tune cycles take weeks and vendor fees. For fast-moving product marketing, agility often beats perfect statistical fit.",
            "Regulated industries (finance, health) may mandate fine-tuned compliance filters — marketing in those sectors should partner with legal on architecture early.",
          ),
          s(" Default to prompt + RAG; escalate to fine-tune only with documented failure of lighter methods at scale."),
        ],
      ],
      examples: [
        {
          title: "Jasper Brand Voice — prompt-level custom",
          body: "Jasper's Brand Voice ingests style guides and example content to bias generation — not full weight fine-tune on most plans. A retail marketing team uploaded tone docs and three campaign PDFs; consistency improved across 20 users without ML engineering. Right level for distributed copy needs.",
        },
        {
          title: "Bank marketing — compliance fine-tune",
          body: "A regional bank explored fine-tuning for disclosure language in email and social copy — mandatory phrases, forbidden superlatives. Legal required statistically enforced patterns beyond prompt honouring. They built a labelled set of 2,000 approved messages and fine-tuned an enterprise model. Cost justified by regulatory exposure, not convenience.",
        },
        {
          title: "Startup GPT custom — premature fine-tune",
          body: "A Series A martech startup paid for custom model training before product-market fit stabilised. Positioning pivoted quarterly; model outputs lagged messaging. They reverted to GPT with dynamic prompts updated in Notion. Fine-tune fit frozen past strategy — agility won.",
        },
      ],
    }),
    buildSection({
      number: "2.4",
      title: "Knowledge Cutoffs and Stale Context",
      subtitle: "Why your AI draft missed yesterday's launch — and how marketers work around temporal blind spots",
      take: "Foundation models have knowledge cutoff dates — the latest events in training data. They do not know your product release last week, today's competitor pricing, or this morning's industry news unless you supply that context in the prompt or connect retrieval. Stale context produces confident outdated claims — a silent risk in fast-moving campaigns.",
      why: "Product marketing, PR, and performance teams operate on weekly freshness. Assuming the model 'knows' current state causes launch emails with old feature names, battlecards missing new entrants, and social posts referencing deprecated offerings.",
      paragraphs: [
        [
          s("Knowledge cutoff is a hard boundary on training — not a setting you toggle in ChatGPT's consumer UI. "),
          x(
            "Models may have browsed or retrieval plugins that extend freshness — but default chat completion does not include live web unless explicitly connected. Enterprise marketing teams should document which tools have live retrieval versus static weights.",
            "Cutoff ignorance causes the most errors in competitive and product copy.",
          ),
          s(" Paste release notes, pricing tables, and date-stamped context into prompts for anything time-sensitive."),
        ],
        [
          s("Embedded platform AI inherits cutoff limits of the underlying model — plus sync lag from your CRM. "),
          x(
            "HubSpot Breeze, Salesforce Einstein, and similar features may summarise records accurately while generative suggestions on market trends reflect model cutoff, not your data warehouse.",
            "Sync delays add second-order staleness: new SKU in PIM, not yet in HubSpot, AI drafts wrong product specs.",
          ),
          s(" For launches, freeze a 'source of truth' doc in the prompt — do not rely on toolchain sync alone during the first 72 hours."),
        ],
        [
          s("Marketing calendars should flag 'cutoff risk' on campaigns tied to news, regulation, or fast competitor moves. "),
          x(
            "Earnings reactions, regulatory changes, viral moments — AI first drafts without news retrieval are dangerous. Human writers with alerts outperform isolated models here.",
            "Build habit: date-stamp every pasted context block; reject drafts referencing events without cited sources.",
          ),
          s(" Add 'freshness verified by [name] on [date]' to launch checklist for AI-assisted assets."),
        ],
      ],
      examples: [
        {
          title: "Product launch email — wrong feature name",
          body: "A project management SaaS renamed a flagship feature on launch day. Marketer used ChatGPT with no pasted release notes; draft used the old name throughout. Email scheduled in HubSpot was caught in QA. Fix: mandatory release-note attachment in campaign brief template for all AI drafts.",
        },
        {
          title: "Competitive battlecard drift",
          body: "A sales enablement team regenerated battlecards quarterly with AI from memory prompts. One competitor had acquired a key capability six months prior — absent from drafts. Sales lost a deal citing outdated intel. They moved to RAG over a living Notion battlecard with retrieval dates in the header.",
        },
        {
          title: "Perplexity for newsjacking — bounded freshness",
          body: "A fintech social team uses Perplexity with citations for regulatory news summaries, then human opinion layer for LinkedIn. Pure ChatGPT drafts missed a same-week SEC announcement. Tool choice became part of channel playbook — retrieval for news, generation for tone.",
        },
      ],
    }),
    buildSection({
      number: "2.5",
      title: "Hallucination — Plausible Marketing Lies",
      subtitle: "Fabricated stats, fake testimonials, and invented integrations — and the review habits that catch them",
      take: "Hallucination is when models generate confident falsehoods — citations that do not exist, customer logos never signed, integration partners never built. It is structural to generative architecture, not a bug vendors will fully fix. Marketing's defence is verification workflow, not better hoping.",
      why: "Trust is the marketing asset hallucination destroys fastest. One fake case study stat in a flagship PDF can survive months in sales decks. Legal and sales discovery of AI errors erodes credibility beyond the single asset.",
      paragraphs: [
        [
          s("Hallucination differs from typos — it is invented content that reads true. "),
          x(
            "Models optimise fluency, not factuality. A wrong percentage in a bullet looks identical to a right one. Fake 'According to Gartner…' lines appear with plausible years and report titles.",
            "Unlike human writers who hedge uncertainty, models rarely say 'I do not know' unless trained or prompted to — and even then inconsistently.",
          ),
          s(" Treat every number, name, quote, and third-party reference as guilty until verified."),
        ],
        [
          s("High-risk marketing surfaces for hallucination: thought leadership stats, customer quotes, competitive matrices, product comparison tables, legal-adjacent claims. "),
          x(
            "Lower risk: structural outlines, headline variants for testing, internal brainstorming — where human selection catches errors before exposure.",
            "Tier your review rigour by external visibility and regulatory sensitivity — same as traditional compliance tiers.",
          ),
          s(" Red-team AI drafts: assign a reviewer to disprove three factual claims per piece."),
        ],
        [
          s("Team culture must reward catching hallucinations, not punishing AI use. "),
          x(
            "If editors fear reporting errors, drafts slip through. Build shared hallucination logs — 'model invented integration X' — to improve prompts and briefs over time.",
            "Vendor claims of 'grounded' or 'hallucination-free' marketing require demonstration on your actual product and competitor set — not demo slides.",
          ),
          s(" No external publish without named fact-checker on claim-bearing content — AI-assisted or not."),
        ],
      ],
      examples: [
        {
          title: "Fake case study metrics",
          body: "An HR tech marketer published a customer ROI figure AI generated — no customer approved it. Customer success flagged it; post pulled within 48 hours. New rule: every metric requires CRM or signed case study link in the draft footer before CMS upload.",
        },
        {
          title: "Invented analyst citation",
          body: "A cybersecurity blog cited a Forrester wave position the company never held — hallucinated from pattern association. Competitor sales used it in competitive deals. Legal review now blocks unsourced analyst references; only approved PDFs from analyst relations enter prompts.",
        },
        {
          title: "Shopify app integration claim",
          body: "AI draft listed Zapier, Segment, and a non-existent 'Shopify AI Sync Pro' integration. Product marketing caught the fake app in technical review. Integration lists now pull from API docs via RAG — never from model memory.",
        },
      ],
    }),
    buildSection({
      number: "2.6",
      title: "Temperature and Creativity Settings",
      subtitle: "The dial between safe sameness and risky novelty — tuned differently for ads, email, and compliance copy",
      take: "Temperature controls randomness in token selection. Low temperature produces predictable, on-brief, repetitive output — good for compliance snippets and product specs. High temperature yields diverse hooks and creative angles — good for brainstorms and ad variant exploration, bad for factual claims without heavy editing.",
      why: "Marketers who never touch temperature wonder why all variants feel identical — or why one wild run invented a promotion. Matching temperature to task reduces rework and speeds testing workflows.",
      paragraphs: [
        [
          s("Low temperature (roughly 0.2–0.5) keeps the model on the highest-probability paths — corporate safe, sometimes dull. "),
          x(
            "Use for: FAQ answers, product description templates, legal-reviewed email footers, metadata generation where consistency beats surprise.",
            "Multiple runs at low temperature produce near-duplicates — fine when you want one correct answer, poor for A/B diversity.",
          ),
          s(" Document default low-temp settings in your prompt library for regulated or product-accurate tasks."),
        ],
        [
          s("Higher temperature (roughly 0.7–1.0) samples less likely tokens — more creative hooks, more hallucination risk. "),
          x(
            "Use for: headline brainstorms, social hook exploration, naming workshops, mood board copy — always with human curation before spend.",
            "Performance marketers generate 20 high-temp headlines, shortlist five, test three — never run high-temp body copy on landing pages without fact review.",
          ),
          s(" Pair high temperature with low stakes — internal brainstorm or paid test budget, not single flagship launch asset."),
        ],
        [
          s("Some tools expose temperature; others hide it behind 'creative / balanced / precise' modes — map equivalents in your stack. "),
          x(
            "Jasper modes, ChatGPT model choices, and API parameters differ. Marketing ops should standardise: which mode for which template in the shared library.",
            "Inconsistent team settings explain inconsistent brand output more often than model quality differences.",
          ),
          s(" Add temperature/mode to prompt library metadata next to each template name."),
        ],
      ],
      examples: [
        {
          title: "Meta ad headline brainstorm",
          body: "A growth team runs GPT-4 at high temperature to produce 30 headline variants from a fixed value prop, then filters in a spreadsheet. Media buyer tests six in Advantage+ creative testing. Low-temp runs produced fifteen near-identical lines — useless for testing. Temperature matched to funnel stage: explore wide, then narrow.",
        },
        {
          title: "Healthcare email — low temp mandate",
          body: "A health supplement brand requires 'precise' mode in Jasper for benefit claims — marketing compliance mapped it to low temperature internally. High-temp runs introduced impermissible disease claims twice in pilot. Mode policy is now enforced via shared workspace settings.",
        },
        {
          title: "Naming workshop divergence",
          body: "An agency used high temperature for a product naming sprint — generated unconventional portmanteaus and risky double meanings. Human team selected three for trademark screening; two failed legal, one proceeded. High temp appropriate for divergent ideation with downstream filters.",
        },
      ],
    }),
    buildSection({
      number: "2.7",
      title: "Context Windows and Long Briefs",
      subtitle: "How much your model can hold in working memory — and how marketers structure inputs that fit",
      take: "Context window is the maximum text the model processes in one request — prompt, examples, attachments, and output combined. Exceed it and the model truncates or forgets early instructions. Long campaign briefs, brand bibles, and transcript dumps need chunking, summarisation, or RAG — not one mega-paste.",
      why: "Marketers love comprehensive briefs. Models do not absorb 80-page PDFs reliably in one shot. Understanding windows prevents 'it ignored our voice guide' complaints when the guide was technically present but truncated.",
      paragraphs: [
        [
          s("Context limits are measured in tokens — roughly three-quarters of a word per token in English. "),
          x(
            "A 128k-token window holds a long brief plus examples — but not your entire brand wiki plus ten case studies plus full competitor analysis. Early sections may fall out of attention as the window fills.",
            "Models do not equally weight all tokens — instructions at the beginning and end often dominate; middle content gets lost ('lost in the middle' effect).",
          ),
          s(" Put non-negotiable constraints and voice rules at the top and bottom of prompts; put reference material in the middle or attach via retrieval."),
        ],
        [
          s("Structure beats volume: executive summary first, appendices retrieved on demand. "),
          x(
            "Strong workflow: strategist writes one-page brief → AI expands outline → human selects sections → RAG pulls product specs per section. Weak workflow: dump entire drive folder into ChatGPT and hope.",
            "Chunking long webinars: summarise transcript in pass one; generate social posts from summary in pass two — each within window limits.",
          ),
          s(" Build a standard brief template under 2,000 words for AI handoff — link to deeper docs for human editors."),
        ],
        [
          s("Tool selection should consider window size for your heaviest use case. "),
          x(
            "Repurposing long video transcripts, analysing multi-quarter campaign reports, or ingesting full RFPs may need large-window models or dedicated summarisation steps.",
            "Smaller windows cost less per call at API scale — marketing ops should route tasks to appropriate tier, not default to largest for every email.",
          ),
          s(" Audit your three longest AI inputs monthly — if they routinely exceed limits, fix workflow before upgrading spend."),
        ],
      ],
      examples: [
        {
          title: "Webinar repurposing — two-pass workflow",
          body: "A B2B team pasted 90-minute webinar transcripts into ChatGPT; social posts ignored speaker nuance from the first third. They switched to pass-one summary (key quotes only) and pass-two post generation. Quality rose; posts referenced actual speaker phrases. Window discipline beat bigger prompts.",
        },
        {
          title: "Brand bible truncation",
          body: "A 40-page brand PDF pasted wholesale produced generic output — voice section on page 28 effectively ignored. Creative ops extracted a two-page 'AI voice card' with must/must-not lists. Consistency improved without model change. Compression is a marketing skill.",
        },
        {
          title: "Enterprise RFP response",
          body: "An agency responding to 200-page RFPs uses RAG over chunked answers library rather than single-shot generation. Each question retrieves three prior winning paragraphs, generates draft, human merges. Context window limits made single-shot approach fail compliance on section cross-references.",
        },
      ],
    }),
    buildSection({
      number: "2.8",
      title: "The Marketer Decision Lens — Model Selection",
      subtitle: "Choosing the right model and settings for the campaign job — not the shiniest default",
      take: "Model selection for marketers is task-fit, not leaderboard rank: fast cheap models for high-volume variants; larger models for nuanced positioning; retrieval-connected tools for fact-heavy work; ML platforms for optimisation when pixel data supports them. Pair model, temperature, context strategy, and review tier to campaign stakes — document the choice in your prompt library.",
      why: "Teams default to one ChatGPT plan for everything — then overpay for simple tasks or underpower complex briefs. A selection lens saves budget, improves quality, and gives defensible answers when finance asks why you need enterprise tier.",
      paragraphs: [
        [
          s("Segment tasks into four buckets before picking a model: draft volume, strategic nuance, factual grounding, and automated optimisation. "),
          x(
            "Draft volume: smaller/faster models, moderate temp, heavy human filter. Strategic nuance: frontier model, low temp, senior editor. Factual grounding: retrieval tool or RAG, mandatory citations. Optimisation: platform ML with event data — not generative at all.",
            "Misassignment — frontier model for metadata tags — wastes margin; small model for investor-facing narrative — wastes credibility.",
          ),
          s(" Maintain a one-page model routing table in marketing ops — task type to tool, mode, and approver."),
        ],
        [
          s("Evaluate models on your briefs, not vendor benchmarks. "),
          x(
            "Run five real campaign briefs through two models; score edit time, factual errors, and brand fit. Marketing-specific quality beats MMLU scores.",
            "Re-evaluate when models update — behaviour shifts without announcement.",
          ),
          s(" Quarterly bake-off: same brief, blind editor scoring, update library defaults from results."),
        ],
        [
          s("Governance ties to selection: higher-stakes tasks require higher-capability models plus stricter human review — not the reverse. "),
          x(
            "Launch campaigns, investor PR, regulated claims: frontier + legal + named approver. Internal brainstorms: any model, no external risk.",
            "Finance questions 'why two AI subscriptions' — answer: routing table optimises unit economics and risk by task tier.",
          ),
          s(" Export your routing table to leadership — turns tool sprawl into deliberate architecture."),
        ],
      ],
      examples: [
        {
          title: "Dual-subscription routing",
          body: "A mid-market SaaS team keeps ChatGPT Team for daily drafts and Claude Enterprise for long brief analysis and compliance-sensitive PR — routed by Asana task label. Spend rose modestly; edit hours on flagship content dropped 35%. Selection discipline beat single-tool frustration.",
        },
        {
          title: "API cost control on variants",
          body: "A performance agency generates thousands of ad variants monthly via API. They route short headline generation to a small fast model and reserve large model for landing page long copy only. API bill fell 40% with no CTR change — model fit, not model downgrade.",
        },
        {
          title: "Wrong model for video scripts",
          body: "A team used a lightweight model for CEO keynote script drafting — output lacked narrative arc. Switched to frontier model with outline-first prompt; one-pass usability improved. Leadership saw quality jump; approved expanded AI budget tied to routing policy.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Your team's AI drafts 'sound like every other SaaS blog.' What is the most likely root cause?",
      options: [
        "The model is broken and needs replacement.",
        "The model regresses to common patterns in training data — fix with voice exemplars, customer language, and human editing, not just 'write better' prompts.",
        "You need fine-tuning immediately.",
        "Temperature is too low — always max it.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Generic tone reflects training distribution; counter with proprietary examples and editorial compression. Re-read sections 2.1 and 2.2.",
      wrongFeedback:
        "Sameness is expected without distinctive inputs — training data drives default voice. Re-read sections 2.1 and 2.2.",
    },
    {
      kind: "order",
      q: "Order the training-to-publish flow for responsible AI-assisted marketing.",
      prompt: "Drag to arrange from first step (top) to last (bottom).",
      items: [
        "Training data and weights shape model defaults",
        "Marketer supplies prompt, context, and examples",
        "Model generates draft output",
        "Human reviews facts, voice, and claims",
        "Publish only after approval",
      ],
      correctFeedback:
        "Right. Model predicts; marketers curate before publish. Re-read section 2.1 and diagram flow.",
      wrongFeedback:
        "Generation is not publication — human review is mandatory for external marketing. Re-read section 2.1.",
    },
    {
      kind: "categorize",
      q: "Match each marketing task to the best model/settings approach.",
      categories: ["Low temperature / precise", "High temperature / creative", "Retrieval required"],
      items: [
        { text: "FDA-sensitive supplement benefit language for email footer.", category: 0 },
        { text: "Brainstorm 25 Meta ad headlines for creative testing.", category: 1 },
        { text: "Competitive pricing table for sales battlecard.", category: 2 },
        { text: "Product SKU specifications from official release notes.", category: 0 },
        { text: "Social hook ideation for internal team vote only.", category: 1 },
        { text: "Thought leadership citing industry report statistics.", category: 2 },
      ],
      correctFeedback:
        "Right. Precise for compliance and specs; high temp for divergent ideation; retrieval for facts you must verify. Re-read sections 2.4–2.6.",
      wrongFeedback:
        "Match stakes to settings: facts need retrieval; compliance needs precision; brainstorms can use higher creativity. Re-read sections 2.4–2.6.",
    },
    {
      q: "A vendor offers 'custom AI trained on your brand' for 3× your current Jasper spend. What should you ask first?",
      options: [
        "Sign immediately — custom always beats prompts.",
        "Clarify whether custom means prompts/RAG or actual fine-tuning; whether you have enough quality labelled examples; and maintenance cost when positioning changes.",
        "Assume it is the same as Brand Voice.",
        "Decline all custom — fine-tuning never works.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Most teams succeed with prompts and RAG first; fine-tune needs dataset quality and maintenance planning. Re-read section 2.3.",
      wrongFeedback:
        "Distinguish prompt-level, RAG, and fine-tune before paying premium. Re-read section 2.3.",
    },
    {
      q: "Launch-day email draft uses a deprecated product name. Most likely cause?",
      options: [
        "Model hallucination only.",
        "Knowledge cutoff and missing pasted release notes — model did not know the rename unless you supplied current context.",
        "Temperature too high.",
        "Context window too large.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Stale training plus missing fresh context causes outdated product copy — paste release notes. Re-read section 2.4.",
      wrongFeedback:
        "Models do not know your latest launch without current context. Re-read section 2.4.",
    },
    {
      kind: "order",
      q: "Order model selection steps for a new campaign workflow.",
      prompt: "Drag to arrange from first step (top) to last (bottom).",
      items: [
        "Classify task: volume draft, strategic nuance, facts, or ML optimisation",
        "Choose model tier and temperature/mode for that bucket",
        "Run bake-off on real briefs if stakes are high",
        "Assign human review tier matching external risk",
        "Document routing in prompt library for team reuse",
      ],
      correctFeedback:
        "Right. Task classification drives tool, settings, review, and documentation. Re-read section 2.8.",
      wrongFeedback:
        "Start with task type — not the shiniest default model. Re-read section 2.8.",
    },
  ],
});
