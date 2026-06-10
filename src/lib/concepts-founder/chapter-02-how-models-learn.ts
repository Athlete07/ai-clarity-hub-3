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

const section23 = buildSection({
  number: "2.3",
  title: "What training actually costs",
  subtitle: "Compute, data, and time — the three resources that drain your runway",
  take: "Training consumes three scarce resources: GPU compute (dollars per hour), labelled data (weeks of human effort), and calendar time (months before you know if it worked). Every ML roadmap request is a capital allocation decision disguised as an engineering ticket.",
  why: "When your ML lead says 'we need another training run,' they are asking for a budget line item, not a code change. Founders who cannot translate training requests into dollars and weeks will approve work that burns runway without moving product-market fit.",
  paragraphs: [
    [
      s("Training is not a one-time software build — it is a recurring R&D experiment. "),
      x(
        "Each training run rents clusters of GPUs for days or weeks, consumes electricity at data-center scale, and requires engineers to babysit loss curves in case the run collapses halfway through.",
        "A failed run at week three of a six-week schedule does not refund your GPU bill. You restart from scratch or from a checkpoint, and the calendar keeps moving.",
      ),
      s(" For a seed-stage startup, a single serious fine-tuning project can cost $20K–$100K in compute alone — before you count the salaries of the people running it."),
    ],
    [
      s("Data is often the hidden majority of training cost. "),
      x(
        "Labelling 50,000 support tickets, annotating medical images, or curating legal clause pairs requires domain experts, QA reviewers, and versioning infrastructure.",
        "Annotation vendors charge per label; internal labelling pulls your best operators off revenue work. Dirty labels mean expensive retraining, not incremental fixes.",
      ),
      s(" Founders who budget compute but not labelling discover mid-project that 'we have the GPUs' was never the bottleneck — 'we don't have ground truth' was."),
    ],
    [
      s("Time is the resource investors feel most acutely. "),
      x(
        "Training runs cannot be parallelised across your sales calendar. A model that needs six weeks of training plus two weeks of evaluation pushes your launch date whether or not you closed another pilot.",
        "Epochs — full passes through the dataset — multiply cost linearly. Ten more epochs means ten more full compute cycles, often for diminishing accuracy gains.",
      ),
      s(" Your board does not care that the loss curve 'looks promising at epoch 12.' They care when the feature ships and what it costs per user when it does."),
    ],
  ],
  examples: [
    {
      title: "Scale AI — when labelling is the business",
      body: "Scale AI built a multi-billion-dollar company on the insight that frontier models are worthless without labelled data. Their revenue comes from annotation, not GPUs. Founders who treat data as an afterthought are outsourcing their moat to whoever can afford better labels.",
    },
    {
      title: "Stability AI's training burn",
      body: "Stability AI reportedly spent enormous sums training image models while revenue lagged. The gap between training CapEx and inference revenue is a cautionary tale: training creates capability, but only product distribution and unit economics turn capability into a company.",
    },
    {
      title: "Canva's background remover — stopping epochs on purpose",
      body: "When Canva trained its background removal model, the team halted training when edge accuracy plateaued — even though more epochs might have squeezed out marginal gains. The founder-level decision was to stop burning GPU weeks for improvements users would not notice, and ship.",
    },
  ],
});

const section24 = buildSection({
  number: "2.4",
  title: "Loss functions and model improvement",
  subtitle: "The feedback loop that turns usage data into compounding advantage",
  take: "A loss function is the mathematical definition of 'mistake' your model optimises against. Whatever you measure is exactly what the model will chase — including behaviours that destroy trust, margin, or regulatory standing.",
  why: "Companies with more usage generate more labelled outcomes, which enables better loss signals, which produces better models, which attract more usage. Founders who do not design their product to capture that signal are leaving the compounding loop on the table for competitors.",
  paragraphs: [
    [
      s("Every training cycle follows the same loop: predict, measure error, assign blame, adjust weights. "),
      x(
        "The loss function scores how wrong the prediction was. Backpropagation traces that error back through billions of parameters. Gradient descent nudges each weight to reduce the score next time.",
        "This loop runs millions of times across millions of examples. It is slow, expensive, and offline — but it is the only mechanism by which the model actually improves.",
      ),
      s(" There is no shortcut where a thumbs-down instantly rewires the model. Feedback becomes training data; training data becomes the next run."),
    ],
    [
      s("The loss function encodes your company's priorities in arithmetic. "),
      x(
        "A fraud model that treats false positives and false negatives equally will block good customers as readily as it catches bad ones.",
        "A support bot optimised purely for resolution speed will close tickets without solving problems. The model is not misbehaving — it is optimising exactly what you told it to optimise.",
      ),
      s(" Founders must participate in defining which errors are expensive, because engineering will otherwise default to academic metrics that ignore your commercial reality."),
    ],
    [
      s("The strategic payoff is the data flywheel — if you architect for it. "),
      x(
        "Every user correction, human override, and logged outcome is a labelled example for the next training cycle.",
        "Stripe sees fraud labels on every transaction. Netflix sees watch behaviour on every recommendation. The product is also a data collection instrument — but only if you instrument it deliberately.",
      ),
      s(" Founders who treat feedback UI as cosmetic miss the highest-leverage investment on the balance sheet: proprietary training signal competitors cannot buy on Hugging Face."),
    ],
  ],
  examples: [
    {
      title: "YouTube's metric migration",
      body: "YouTube's recommendation model originally optimised for clicks, which rewarded clickbait. They rewrote the loss function toward watch time, then satisfaction signals. Each shift was a board-level product decision expressed as math — not a UI tweak. Founders who ignore loss design inherit whatever behaviour maximises the default metric.",
    },
    {
      title: "Uber ETA asymmetry",
      body: "Uber's ETA models penalise underestimating trip duration more than overestimating it, because late arrivals destroy trust faster than early ones. That asymmetry is a business judgment baked into the loss function. The founder lesson: your risk tolerance must be explicit before training starts, not debated after launch.",
    },
    {
      title: "Tesla shadow mode",
      body: "Tesla logs every divergence between autopilot prediction and human driver behaviour across the fleet. Those discrepancies become training signal for the next offline run. The product generates labels at scale while users drive. Founders should ask: does our product produce labels, or just logs nobody will ever label?",
    },
  ],
});

const section25 = buildSection({
  number: "2.5",
  title: "Overfitting — the startup analogy",
  subtitle: "Building so perfectly for your first ten customers that you fail the next thousand",
  take: "Overfitting is when a model memorises your training data — including noise, outliers, and quirks — instead of learning patterns that generalise. It is the ML equivalent of building a product so tailored to your design-partner accounts that it cannot scale to your actual market.",
  why: "Overfitted models score 99% in demos and collapse in production. Founders who accept vendor metrics without asking what data they were measured on are signing up for the most expensive kind of wrong: one that looks like success until customers churn.",
  paragraphs: [
    [
      s("Picture a student who memorises answer keys instead of learning the subject. "),
      x(
        "On the practice test, they score perfectly. On the real exam with slightly different questions, they fail.",
        "An overfitted model does the same: it learns the specific examples in your training set, including random noise, rather than the underlying structure of the problem.",
      ),
      s(" In a startup context, this is the pilot that works flawlessly in your office with your data and dies at the first enterprise customer with different document formats, edge cases, and user behaviour."),
    ],
    [
      s("Overfitting is seductive because it flatters your metrics. "),
      x(
        "Training accuracy climbs to 99% while validation accuracy — measured on data the model has never seen — stalls at 70%.",
        "Vendors demo training-set performance. Internal teams demo on curated eval sets. Neither tells you what happens when a Minnesota snowbank meets a California-trained vision model.",
      ),
      s(" The gap between training and validation performance is the number your board should care about, not the headline accuracy on slides."),
    ],
    [
      s("The fix is rarely 'better architecture.' It is better data discipline and honest evaluation. "),
      x(
        "Hold out a validation set the model never sees during training. Test on data that resembles production messiness — not lab cleanliness.",
        "Stop training when validation improvement plateaus, even if training accuracy could climb higher. More epochs on a memorising model just deepens the trap.",
      ),
      s(" Founders who fund '50 more epochs' without checking the validation curve are often paying to make the problem worse."),
    ],
  ],
  examples: [
    {
      title: "Zillow Offers — overfitting to a stable market",
      body: "Zillow's home-price algorithm performed brilliantly on historical data from a stable housing market. When pandemic dynamics shifted, the model could not generalise. Zillow shut down its iBuying division after hundreds of millions in losses. The model did not fail technically — it failed to generalise to a world not in its training set.",
    },
    {
      title: "Netflix Prize — the hidden test set lesson",
      body: "Many Netflix Prize teams built models that perfectly predicted ratings in the training data but failed on Netflix's withheld test set. The winners were the team whose model generalised to unseen users — not the team that memorised quirks of the training population. Investors asking about your eval methodology are asking whether you would have won or lost that competition.",
    },
    {
      title: "Early Siri — studio-accent overfitting",
      body: "Early voice assistants trained on clean studio recordings with standard accents failed on regional dialects, background noise, and mumbled speech. The models overfit to training conditions that did not match real users. Apple's years-long investment in diverse training data was the generalisation fix — not a bigger neural network.",
    },
  ],
});

export const chapter02HowModelsLearn = buildChapter({
  slug: "founder-how-models-learn",
  number: 2,
  shortTitle: "How Models Learn",
  title: "How Models Learn — What It Means for Your Company",
  readingMinutes: 22,
  summary:
    "Parameters, training costs, feedback loops, overfitting, and generalisation — explained for founders allocating capital, runway, and hiring.",
  keyTakeaway:
    "Models learn by adjusting billions of numerical weights through expensive offline training cycles. Every 'the model needs more data' request is a runway and roadmap decision — not a technical footnote.",
  pmCallout:
    "As a founder: when your ML team asks for another training run, translate it into dollars, weeks, and board-level risk before you say yes. Learning is never free, instant, or guaranteed to generalise.",
  sections: [
    buildSection({
      number: "2.1",
      title: "What a model actually is",
      subtitle: "A very expensive function that gets better with data — and what 'better' costs",
      take: "A trained model is not a database of facts or a rulebook. It is a frozen mathematical function — billions of numeric weights — that maps inputs to outputs. 'Better' means those weights were adjusted on more (and better) data, which always costs compute, time, and labelling.",
      why: "Investors, customers, and your own team will talk about 'the model' as if it were software you can patch like a bug. Founders who understand what a model actually is make build-vs-buy decisions, set honest timelines, and stop promising instant learning from a single user complaint.",
      paragraphs: [
        [
          s("Strip away the marketing and a model is a very large calculator with adjustable internal knobs. "),
          x(
            "Input data flows through layers of weighted connections and emerges as a prediction — a classification, a score, a generated sentence.",
            "Those weights are not rules written by engineers. They are numbers discovered during training through trial and error on examples.",
          ),
          s(" The entire 'intelligence' of the system is the configuration of those numbers at the moment training stopped."),
        ],
        [
          s("This is why models behave differently from traditional software. "),
          x(
            "You cannot read the logic. You cannot grep the codebase for why it blocked a transaction. Behaviour is smeared across billions of parameters.",
            "Updating behaviour requires retraining or fine-tuning — rerunning the expensive learning process — not pushing a hotfix on Friday afternoon.",
          ),
          s(" Founders who sell AI as 'software that learns instantly' are either misinformed or overselling. Real learning is batched, offline, and budgeted."),
        ],
        [
          s("'Better' has a price tag attached to every dimension. "),
          x(
            "Better on your domain means more proprietary labelled examples. Better at reasoning often means a larger model with more parameters. Better at speed means a smaller model with fewer parameters.",
            "You cannot maximise all three without trade-offs. Every roadmap conversation about model quality is secretly a conversation about which budget line absorbs the cost.",
          ),
          s(" Treat the model as a capital asset that depreciates as the world changes — not a static feature you ship once."),
        ],
      ],
      examples: [
        {
          title: "OpenAI's GPT-4 — capability as frozen weights",
          body: "GPT-4 is not 'looking things up' when you ask a question. It is running your prompt through a fixed weight matrix produced by a training run that cost nine figures and months of calendar time. OpenAI sells access to that frozen artifact via API. Founders buying API access are renting someone else's training CapEx — not avoiding the economics of learning.",
        },
        {
          title: "Spotify recommendations — opaque weights, clear outcomes",
          body: "Spotify's recommendation engine encodes taste in millions of parameters no product manager can manually tune. When recommendations improve, it is because new training cycles incorporated new listening data — not because someone edited a rule. The founder lesson: your product quality ceiling is tied to your data and retraining cadence.",
        },
        {
          title: "Grammarly tone detection — data-driven, not rule-driven",
          body: "When Grammarly improves sarcasm detection, engineers update weights through new training data — they do not write sarcasm rules. The improvement is a data investment. Founders who hire only engineers but not data operations are buying half the capability.",
        },
      ],
    }),
    buildSection({
      number: "2.2",
      title: "Parameters and weights",
      subtitle: "Why model size matters to your budget, your latency, and your build-vs-buy call",
      take: "Parameters — also called weights — are the individual numbers inside a model that control how input signals are amplified or suppressed. More parameters generally mean more capability, more training cost, and more inference cost. Model size is a budget line, not a vanity metric.",
      why: "When a vendor quotes fine-tuning on a '70 billion parameter model,' they are describing the scale of the asset you are renting or adapting. Founders who do not understand parameter count cannot negotiate infrastructure contracts, evaluate vendor proposals, or explain to the board why GPT-4 costs more per token than GPT-4o-mini.",
      paragraphs: [
        [
          s("Think of parameters as volume knobs on an impossibly large mixing board. "),
          x(
            "Each knob controls how much one signal influences the next layer. The model's behaviour is the combined effect of billions of these settings.",
            "When Meta releases 'Llama 3 70B,' the 70B means 70 billion adjustable weights — 70 billion knobs that were set during training.",
          ),
          s(" Parameter count is the single biggest driver of both training bill and inference bill."),
        ],
        [
          s("Larger models can learn more complex patterns — but they demand proportionally larger infrastructure. "),
          x(
            "Training a 70B model requires GPU clusters, high-bandwidth networking, and fault-tolerant orchestration that a 7B model does not.",
            "Serving a 70B model at interactive latency requires multiple GPUs per request or aggressive distillation. A seed startup rarely needs this scale to validate product-market fit.",
          ),
          s(" Founders who default to the biggest available model are optimising for demo impressiveness, not unit economics."),
        ],
        [
          s("Fine-tuning adjusts a subset of these weights on your data — it does not rewrite the model from scratch. "),
          x(
            "Fine-tuning a 70B model still means renting infrastructure sized for 70B parameters. The training cost is smaller than pre-training, but inference cost remains tied to model size.",
            "Choosing between 8B and 70B is a founder decision about capability vs margin — not a decision you should delegate entirely to engineering taste.",
          ),
          s(" Ask for the cost-per-query estimate at each model tier before you commit to a size."),
        ],
      ],
      examples: [
        {
          title: "Meta Llama 3 — 8B vs 70B as a product choice",
          body: "Meta ships Llama 3 in 8B and 70B variants from the same family. Startups use 8B for fast, cheap tasks — classification, routing, on-device features. They reach for 70B only when reasoning quality justifies the hosting bill. The founder decision is tier selection, not 'use the biggest model.'",
        },
        {
          title: "Mistral — small models as a margin strategy",
          body: "Mistral built market share partly by offering capable smaller models that cost fractions of frontier APIs to serve. Companies routing simple queries to Mistral 7B and hard queries to larger models are making parameter-count decisions at the P&L level. Model size is a margin lever.",
        },
        {
          title: "Apple on-device models — parameters constrained by silicon",
          body: "Apple Intelligence runs compressed models on the Neural Engine because parameters directly map to memory, battery, and latency on a phone. Apple chose model size ceilings before choosing features. Founders on cloud APIs face the same trade-off — just with dollars instead of milliwatts.",
        },
      ],
    }),
    insertDiagram(section23, {
      kind: "diagram",
      id: "ch2-epochs-nested",
      type: "nested",
      title: "The Data Hierarchy",
      caption: "An epoch contains multiple batches; processing one batch is one iteration. Each cycle burns compute budget.",
    }),
    insertDiagram(section24, {
      kind: "diagram",
      id: "ch2-training-loop",
      type: "flow",
      title: "The Training Loop",
      caption: "Forward pass → loss → backpropagation → weight update. This loop is where training spend converts into model improvement.",
    }),
    insertDiagram(section25, {
      kind: "diagram",
      id: "ch2-fitting-comparison",
      type: "comparison",
      title: "The Fitting Spectrum",
      caption: "Underfitting learns nothing. Overfitting memorises everything. Optimal fit learns the underlying pattern.",
    }),
    buildSection({
      number: "2.6",
      title: "Generalisation",
      subtitle: "Why a model that wins your demo can still lose product-market fit",
      take: "Generalisation is the model's ability to perform on data it has never seen — new users, new geographies, new document formats, new fraud patterns. A model that only works in your demo environment is negative ROI with good marketing.",
      why: "Product-market fit is generalisation under commercial pressure. Founders who conflate pilot success with market readiness discover at Series A that the model works for three design partners and fails for the segment you need to grow into.",
      paragraphs: [
        [
          s("Training teaches patterns; generalisation proves you learned the right ones. "),
          x(
            "A churn model trained on US SaaS customers may fail in EU markets with different payment behaviour. A document parser trained on clean PDFs may fail on phone photos of contracts.",
            "The model did not 'break.' It was never shown the production world during training.",
          ),
          s(" Every new segment, geography, or use case is a generalisation test — not a configuration change."),
        ],
        [
          s("Generalisation failures are almost always data failures, not architecture failures. "),
          x(
            "The fix is sourcing representative examples, labelling them correctly, and retraining — not rewriting the neural network from scratch.",
            "This takes weeks and money, which is why ML teams ask for 'more data' when founders want a 'quick fix.'",
          ),
          s(" Your roadmap must include data acquisition for each market expansion, not just sales hires."),
        ],
        [
          s("The founder's job is to define what 'good enough to ship' means on real data. "),
          x(
            "Set minimum validation performance on held-out sets that mirror production. Run shadow mode — model predicts, humans decide — before full automation.",
            "Measure generalisation by segment from day one. Aggregate accuracy hides the fact that you are failing your highest-value customers.",
          ),
          s(" Board updates should include generalisation metrics by segment, not a single accuracy number from a curated demo."),
        ],
      ],
      examples: [
        {
          title: "Amazon hiring tool — generalisation and liability",
          body: "Amazon scrapped a recruiting model that generalised poorly across genders because training data reflected historical hiring bias. The model learned the past, not the job requirements. Founders in regulated or reputational-sensitive domains must test generalisation across protected segments before launch — not after a journalist calls.",
        },
        {
          title: "Waymo — geographic generalisation as capital strategy",
          body: "Waymo expands city by city because autonomous driving models do not generalise across urban layouts, weather, and traffic cultures for free. Each city requires mapped data, simulation miles, and retraining investment. Founders in physical-world AI should budget generalisation per market the way Waymo budgets per city — not assume one model works everywhere.",
        },
        {
          title: "Stripe Radar — continuous generalisation as fraud evolves",
          body: "Fraud patterns shift weekly. Stripe retrains Radar on fresh transaction labels so the model generalises to new attack vectors — not yesterday's scams. The product's value is generalisation speed. Founders building risk or security AI must plan retraining cadence as opex, not treat the model as ship-once software.",
        },
      ],
    }),
    buildSection({
      number: "2.7",
      title: "Transfer learning",
      subtitle: "Why you do not train from scratch — and what you actually pay for with an API",
      take: "Transfer learning starts from a model that already learned language, vision, or audio from massive public datasets, then adapts it to your domain with far less data and compute. APIs sell you the output of someone else's transfer learning — you pay per use, not per training run.",
      why: "Training GPT-4 from scratch is a multi-hundred-million-dollar bet. Fine-tuning Llama on your support transcripts is a five-figure project. Using OpenAI's API is a per-token line item. Founders who understand transfer learning choose the right tier instead of accidentally funding frontier pre-training.",
      paragraphs: [
        [
          s("Pre-training teaches general capability; adaptation teaches your context. "),
          x(
            "A base model already understands English grammar, code syntax, or image edges. Fine-tuning nudges weights toward your tone, format, or task — not toward learning language from zero.",
            "This is why 500 labelled examples can shift behaviour where 5 million would have been needed from scratch.",
          ),
          s(" Transfer learning is the startup cost advantage — if you use it instead of reinventing it."),
        ],
        [
          s("API pricing is transfer learning amortised across millions of customers. "),
          x(
            "OpenAI, Anthropic, and Google spread their training CapEx across API fees. You get frontier capability without frontier capital requirements.",
            "The trade-off is dependency, margin, and data residency — not capability access on day one.",
          ),
          s(" You are renting intelligence, not owning it. That is usually correct at seed; it may not be correct at Series B scale."),
        ],
        [
          s("Open-source base models shift where transfer learning happens, not whether it happens. "),
          x(
            "Downloading Llama weights is free; adapting them on your GPUs is not. You still pay for fine-tuning compute and ML engineering — you just avoid vendor per-token markup at scale.",
            "The founder calculus: at what query volume does self-hosted transfer learning beat API retail pricing?",
          ),
          s(" Hire for adaptation skills (fine-tuning, RAG, eval) before you hire for pre-training skills you will never use."),
        ],
      ],
      examples: [
        {
          title: "OpenAI InstructGPT — transfer learning as product pivot",
          body: "Raw GPT-3 completed text; it did not follow instructions. OpenAI fine-tuned on human feedback to align behaviour — transfer learning turned an autocomplete engine into a chat product. Founders using base models without adaptation wonder why the API 'does not understand our format.' The fix is adaptation, not a new foundation model.",
        },
        {
          title: "Harvey — legal transfer learning on base models",
          body: "Harvey builds on foundation models fine-tuned and RAG-augmented for legal workflows. They did not train law from scratch. They transferred general reasoning and layered domain data. Their moat is legal data and workflow — not owning the base weights.",
        },
        {
          title: "Jasper's early API bet",
          body: "Jasper scaled to significant revenue on OpenAI APIs without training a proprietary foundation model. They transferred capability from OpenAI and competed on brand, UX, and GTM. The founder lesson: transfer learning via API is a valid Series A strategy when your wedge is distribution, not base-model ownership.",
        },
      ],
    }),
    buildSection({
      number: "2.8",
      title: "Founder decision lens",
      subtitle: "What 'the model needs more data' means for your roadmap and runway",
      take: "'We need more data' is never a throwaway engineering comment. It is a request for labelling budget, calendar time, hiring, and a delayed launch — with no guarantee the next training run generalises better. Translate it before you approve it.",
      why: "Boards approve headcount and burn based on milestones. ML teams approve training runs based on data readiness. Founders who bridge those languages avoid the worst outcome: burning a quarter retraining a model that still fails the enterprise pilot.",
      paragraphs: [
        [
          s("When engineering asks for more data, ask four questions before approving budget. "),
          x(
            "How many labelled examples, by when, at what cost per label? What validation metric must improve to justify the run? What happens if the run fails? What is the opportunity cost versus shipping with current performance plus human review?",
            "These questions turn a vague ML request into a board-defensible project plan with success criteria.",
          ),
          s(" If the team cannot answer them, the problem is scoping — not GPU shortage."),
        ],
        [
          s("Map data requests to roadmap milestones, not open-ended R&D. "),
          x(
            "'More data' for generalisation to EU customers should tie to EU launch revenue. 'More data' for 2% accuracy lift on an internal metric with no revenue link is a science project.",
            "Set kill criteria: if validation accuracy does not cross threshold X after dataset Y and run Z, pivot to human-in-the-loop or vendor model.",
          ),
          s(" Runway is spent on milestones that unlock revenue, not on chasing leaderboard numbers."),
        ],
        [
          s("Build the data acquisition plan into your fundraising narrative. "),
          x(
            "Investors fund data moats, not model architectures. Show how product design captures proprietary labels, how partnerships supply domain data, and how each training cycle widens the gap versus wrappers.",
            "A founder who says 'we need $2M to label 200K examples that unlock enterprise vertical X' sounds like a strategist. One who says 'we need more GPUs' sounds like they do not know where the bottleneck is.",
          ),
          s(" Your seed deck should explain the data flywheel; your Series A deck should prove it is spinning."),
        ],
      ],
      examples: [
        {
          title: "Scale AI's pivot to data infrastructure",
          body: "Scale recognised that most AI companies' bottleneck was labelled data, not model architecture. Founders who internalise that insight budget for annotation pipelines and QA — not just ML engineers — in their first AI hire plan.",
        },
        {
          title: "Duolingo — data requests tied to retention",
          body: "When Duolingo's spaced-repetition model underperforms, the fix is more labelled learner outcomes — not a new foundation model. Leadership ties retraining cycles to retention metrics users feel. Founders should demand the same linkage between data investment and the KPI that matters commercially.",
        },
        {
          title: "Series A surprise — the 90-day retraining trap",
          body: "A B2B startup promised enterprise launch in Q2. ML team requested 90 days and $80K for labelling to fix generalisation gaps discovered in pilot. Sales had already sold the date. The founder-level failure was not approving the request — it was never translating 'model needs more data' into a gating milestone before enterprise contracts were signed.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: 'Your ML lead says they are "fine-tuning a 70B parameter model on your support transcripts." What are they actually doing?',
      options: [
        "Writing 70 billion business rules for customer support.",
        "Adjusting billions of numerical weights so the model statistically favours patterns in your transcripts.",
        "Storing exact copies of transcripts in a database the model queries at runtime.",
        "Upgrading cloud hardware to handle 70 billion concurrent users.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Fine-tuning adjusts learned weights on your data. It changes statistical behaviour — it does not store transcripts or write rules.",
      wrongFeedback:
        "Parameters are numerical weights, not rules, databases, or hardware configs. Re-read sections 2.1 and 2.2.",
    },
    {
      q: "A vendor demos 99.9% accuracy on their fraud model. On your live data it misses 40% of fraud. What is the most likely diagnosis?",
      options: [
        "Underfitting — the model is too simple to learn anything.",
        "Overfitting — the model memorised lab data and failed to generalise to your transactions.",
        "The learning rate was set too high during training.",
        "Inference latency is too slow.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Strong lab performance with weak production performance is the hallmark of overfitting or non-representative training data.",
      wrongFeedback:
        "Underfitting would show poor lab performance too. The lab-to-production gap signals overfitting or data mismatch. Re-read sections 2.5 and 2.6.",
    },
    {
      q: "Your CTO proposes training a foundation model from scratch on your proprietary codebase. Why should you push back?",
      options: [
        "Open-source models cannot read code.",
        "Pre-training from scratch is a nine-figure CapEx bet; transfer learning via API or fine-tuning solves the same problem at startup scale.",
        "Inference will be too expensive regardless of approach.",
        "Backpropagation only works on image data.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Transfer learning exists precisely so startups do not fund frontier pre-training. Adapt a base model or rent via API.",
      wrongFeedback:
        "The issue is capital intensity of pre-training, not code literacy. Re-read section 2.7.",
    },
    {
      kind: "categorize",
      q: "Sort each training symptom into the correct diagnosis.",
      categories: ["Underfitting", "Overfitting", "Healthy fit"],
      items: [
        { text: "Training accuracy 58%, validation accuracy 57%.", category: 0 },
        { text: "Training accuracy 99%, validation accuracy 68%.", category: 1 },
        { text: "Training accuracy 91%, validation accuracy 88%.", category: 2 },
        { text: "Perfect on design-partner data; fails first enterprise customer.", category: 1 },
        { text: "Both losses flatlined high after many epochs.", category: 0 },
        { text: "Validation tracks training closely throughout.", category: 2 },
      ],
      correctFeedback:
        "Right. Big train-validation gap = overfitting. Both poor = underfitting. Both strong and close = ship candidate.",
      wrongFeedback:
        "Watch the gap between training and validation, not absolute numbers alone. Re-read sections 2.5 and 2.6.",
    },
    {
      kind: "order",
      q: "Put the four steps of a single training iteration in the order they execute.",
      prompt: "Drag to arrange — first (top) to last (bottom).",
      items: [
        "Forward pass — run inputs through current weights to produce predictions.",
        "Loss calculation — score how wrong predictions are versus labels.",
        "Backpropagation — assign error contribution to each parameter.",
        "Weight update — nudge parameters to reduce loss next iteration.",
      ],
      correctFeedback:
        "Exactly. Predict → score → assign blame → update. Every training dollar traces to this loop.",
      wrongFeedback:
        "You must predict before scoring, and score before updating weights. Re-read section 2.4.",
    },
    {
      q: 'Engineering says "we need 90 more days and $60K for labelling before enterprise launch." What is the founder-level response?',
      options: [
        "Approve immediately — ML teams know best.",
        "Demand a plan with label count, validation target, kill criteria, and revenue milestone linkage before approving burn.",
        "Switch to a rules engine to avoid all ML costs.",
        "Promise customers the model will learn instantly from their feedback without retraining.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Translate data requests into scoped investments with success criteria tied to commercial milestones.",
      wrongFeedback:
        "Founders must translate ML requests into runway decisions with clear gates — not blindly approve or pretend instant learning exists. Re-read section 2.8.",
    },
  ],
});
