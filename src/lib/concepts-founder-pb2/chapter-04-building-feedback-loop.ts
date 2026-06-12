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

const section41 = insertDiagram(
  buildSection({
    number: "4.1",
    title: "What a feedback loop is in an AI product",
    subtitle: "Usage generates data, data improves the model, better model generates more usage — the cycle",
    take: "A feedback loop is a closed system: the product generates predictions, users react, reactions become labelled data, data improves the model, and the improved model increases product value — driving more usage. Open any link and you have a static feature with an inference bill.",
    why: "This is the mechanism investors price differently from SaaS. Compounding improvement without linear engineering is the AI economic thesis — but only if the loop is real and measured.",
    paragraphs: [
      [
        s("The loop has four stages: predict, react, label, improve. "),
        x(
          "Predict: model produces output in core workflow. React: user accepts, edits, rejects, or outcome occurs.",
          "Label: reaction stored as ground truth linked to inference. Improve: model or prompt updates ship with measurable delta.",
        ),
        s(" Each stage needs an owner and a metric."),
      ],
      [
        s("Loops differ by product — implicit vs explicit feedback, online vs batch learning. "),
        x(
          "Consumer products favor implicit signals at scale. Enterprise favors explicit review with audit trails.",
          "Batch retrain weekly may beat fragile online learning for small datasets.",
        ),
        s(" Choose loop design for your risk tier and signal volume."),
      ],
      [
        s("The business test: does gross margin improve as usage grows because model efficiency improves? "),
        x(
          "If COGS scales linearly with no quality gain, you have inference scaling — not a loop.",
          "Loop velocity — time from signal to improvement — is a competitive metric.",
        ),
        s(" Report loop health in board decks alongside MRR."),
      ],
    ],
    examples: [
      {
        title: "Netflix thumbnails — implicit loop",
        body: "Which artwork you click trains personalization. Loop is invisible to users but drives retention. Founders should identify high-volume implicit signals.",
      },
      {
        title: "Copilot Tab — explicit implicit hybrid",
        body: "Tab is explicit acceptance; ignored suggestions are implicit negative. Billions of labels. Gold standard for dev-tool loop design.",
      },
      {
        title: "Open-loop chatbot — no improve stage",
        body: "Startup logged chats but never retrained — improve stage missing. Product static for 18 months while competitors compounded. Loop diagram lied.",
      },
    ],
  }),
  {
      kind: "diagram",
    id: "ch4-feedback-cycle",
    type: "flow",
    title: "What a feedback loop is in an AI product",
    caption:
        "A feedback loop is a closed system: the product generates predictions, users react, reactions become labelled data, data improves the model, and the…",
    },
);

export const chapter04BuildingFeedbackLoop = buildChapter({
  slug: "founder-building-feedback-loop",
  number: 4,
  shortTitle: "Building Feedback Loop",
  title: "Building the Feedback Loop — Your Only Sustainable Advantage",
  readingMinutes: 24,
  summary:
    "The mechanism separating AI companies that compound from those that plateau. Implicit vs explicit feedback, startup-scale RLHF, loop velocity, and designing the loop before your first line of product code.",
  keyTakeaway:
    "Collecting data is not a feedback loop. Loop velocity — signal to measurable improvement — beats starting model quality. Design capture into UX before you design the demo.",
  pmCallout:
    "As a founder: ask 'what user action makes our model smarter?' If the team cannot answer with a metric and a cadence, you are building a feature — not an AI company.",
  sections: [
    section41,
    buildSection({
      number: "4.2",
      title: "Why most AI startups don't actually have a feedback loop",
      subtitle: "The difference between collecting data and using it to improve your product",
      take: "Most startups conflate logging with learning. They store prompts, analytics events, and thumbs-up counts — but lack pipelines from signal to eval to deployed improvement. Data lakes without retrain gates are archives, not loops.",
      why: "Investors ask loop velocity in Series A. Founders who discover at diligence that 'we're planning retrain Q3' lose premium narrative.",
      paragraphs: [
        [
          s("The collection trap: eng ships logging, data science gets quarterly export requests. "),
          x(
            "No automated eval, no promotion criteria, no rollback — manual heroics each update.",
            "Founders celebrate 'millions of interactions stored' while model unchanged since launch.",
          ),
          s(" Storage growth without quality metrics is not a moat."),
        ],
        [
          s("Organizational breaks: product owns UX, eng owns logs, nobody owns loop closure. "),
          x(
            "Loop ownership must be a named role with OKRs — task completion delta, override rate, time-to-retrain.",
            "Without owner, loop becomes everyone's background task — meaning nobody's.",
          ),
          s(" Hire or assign loop owner before second AI feature."),
        ],
        [
          s("The honest test: when did the model last measurably improve from user signal? "),
          x(
            "If answer is 'never' or 'we changed the prompt manually', loop does not exist.",
            "Benchmark: native companies improve on weekly or monthly cadence with published internal metrics.",
          ),
          s(" Run the test monthly in leadership meeting."),
        ],
      ],
      examples: [
        {
          title: "Thumbs up database — zero retrains",
          body: "Consumer app stored 2M thumbs ratings; no pipeline to fine-tune or RL. Data science proposed retrain — blocked by eng priority. Investor passed on 'static model with logs'.",
        },
        {
          title: "Loop owner at Series A",
          body: "Company hired 'Head of ML Product' owning override rate and retrain cadence. Loop velocity went from never to 14-day median. Metric became Series B narrative.",
        },
        {
          title: "Manual prompt edits masquerading as loop",
          body: "Founder changed prompts weekly from support tickets — improvement without versioning or eval. Regression shipped silently. Real loop requires automated gates.",
        },
      ],
    }),
    buildSection({
      number: "4.3",
      title: "Implicit feedback vs explicit feedback",
      subtitle: "Clicks, dwell time, and corrections vs ratings and reviews — which one scales",
      take: "Implicit feedback inferrs preference from behaviour — clicks, dwell, edits, conversions — at high volume with noise. Explicit feedback asks users to rate — higher signal per event, lower volume. AI-native products maximize implicit capture in core UX; use explicit for eval gold sets and ambiguous cases.",
      why: "Explicit-only loops starve for data. Implicit-only loops need noise tolerance and eval discipline. Founders must design for the signal volume their use case allows.",
      paragraphs: [
        [
          s("Implicit scales where users take natural actions that reveal preference. "),
          x(
            "Search click, Copilot Tab, skip track — no extra user effort.",
            "Low-frequency B2B workflows may generate too few implicit events — explicit review required.",
          ),
          s(" Match implicit design to interaction frequency."),
        ],
        [
          s("Explicit feedback supplements, rarely sustains, training at scale. "),
          x(
            "Star ratings suffer selection bias — angry users over-represent.",
            "Use explicit for calibrating implicit models and labelling edge cases.",
          ),
          s(" Buried feedback widgets are loop theatre."),
        ],
        [
          s("Hybrid design: implicit for volume, explicit for quality anchor. "),
          x(
            "Spotify skips at scale; human curators label subset for genre boundaries.",
            "Enterprise: AI draft plus mandatory lawyer edit — implicit diff plus explicit approval.",
          ),
          s(" Document signal type per workflow step in product spec."),
        ],
      ],
      examples: [
        {
          title: "YouTube — dwell and click implicit",
          body: "Watch time and click-through train recommendations without user rating videos. Founders in content products should measure engagement signals, not surveys.",
        },
        {
          title: "Enterprise legal — edit as implicit gold",
          body: "Lawyer edit distance on contracts is high-quality implicit signal with audit trail. Better than optional star rating on draft.",
        },
        {
          title: "Post-chat survey — 2% response rate",
          body: "Startup relied on post-conversation CSAT — 2% response, biased negative. Switched to implicit task completion and escalation signals. Loop velocity 50x.",
        },
      ],
    }),
    buildSection({
      number: "4.4",
      title: "RLHF at the startup level",
      subtitle: "How to use human feedback to improve your model without a $10M annotation budget",
      take: "RLHF at startup scale means: capture preference pairs from real usage, curate small high-quality human review sets, fine-tune or prompt-optimize on that signal, and eval before promote — not hiring 500 annotators to replicate OpenAI. Your users and reviewers are the preference engine.",
      why: "Founders hear RLHF and assume unaffordable. Startup RLHF is preference learning from product signal — scaled down, domain-specific, and tied to your workflow.",
      paragraphs: [
        [
          s("Preference data comes from product: chosen vs rejected outputs, edit A vs edit B, winner in side-by-side. "),
          x(
            "DPO and fine-tune methods work on thousands of pairs — not billions.",
            "Quality of preferences beats quantity for vertical domains.",
          ),
          s(" Start with 500–5000 gold preference pairs from real users."),
        ],
        [
          s("Human review team can be customers, domain experts, or internal — not a call center army. "),
          x(
            "Legal reviewers comparing draft quality generate RLHF data as side effect.",
            "Budget reviewer time as labelling COGS with strategic return.",
          ),
          s(" Align reviewer incentives with label quality — not speed alone."),
        ],
        [
          s("Eval gate every RLHF iteration — preference overfit is real. "),
          x(
            "Holdout task set representing production distribution.",
            "Rollback if task completion drops despite preference score rising.",
          ),
          s(" Startup RLHF is iterative fine-tune, not foundation training."),
        ],
      ],
      examples: [
        {
          title: "Customer support — agent preference labels",
          body: "Agents pick better of two AI replies before sending — preference pair for fine-tune. 3K pairs improved containment 12%. Startup RLHF from existing workflow.",
        },
        {
          title: "Code assistant — accept/reject pairs",
          body: "Accepted vs edited completions become preference data for periodic fine-tune. No external annotators — users supply preferences at scale.",
        },
        {
          title: "Overfit RLHF — preference up, CSAT down",
          body: "Fine-tune on narrow reviewer preferences improved internal score but hurt broader user CSAT. Holdout eval caught regression — rollback and rebalance preference sample.",
        },
      ],
    }),
    buildSection({
      number: "4.5",
      title: "Closing the loop",
      subtitle: "The operational pipeline most startups never build until it's too late",
      take: "Closing the loop requires production pipeline: signal ingestion, label validation, dataset versioning, train/fine-tune job, offline eval, shadow or canary deploy, promotion or rollback — automated enough to run weekly. Manual 'export CSV to data scientist' is not closed.",
      why: "The loop breaks at handoffs. Founders who assign loop closure to 'later eng sprint' discover competitors compound while they manually tweak prompts.",
      paragraphs: [
        [
          s("Pipeline stages need SLAs like any production system. "),
          x(
            "Signal lag, train duration, eval duration, deploy duration — measure each.",
            "Median signal-to-ship under 14 days is competitive for batch; under 24 hours for high-volume consumer.",
          ),
          s(" Bottleneck identification is CEO-level when loop is strategic."),
        ],
        [
          s("Dataset versioning links training data to model version to product release. "),
          x(
            "Reproducibility: which labels produced model v2.3?",
            "Compliance: which user data in this train run — deletion must propagate.",
          ),
          s(" Without versioning, debugging regression is guesswork."),
        ],
        [
          s("Start minimal: weekly script from label table to fine-tune to eval to flag deploy. "),
          x(
            "Automate incrementally — perfect pipeline never shipped beats manual loop never run.",
            "Second automation priority: rollback on eval regression.",
          ),
          s(" First closed loop matters more than elegant MLOps platform."),
        ],
      ],
      examples: [
        {
          title: "Weekly cron retrain — first closed loop",
          body: "Seed team shipped bash cron: export labels, fine-tune LoRA, run 100-case eval, Slack approve, deploy. Ugly but closed loop in week eight. Refactored to proper pipeline at Series A.",
        },
        {
          title: "Handoff hell — six-month stall",
          body: "Product logged labels; data science waited for eng API; eng prioritized features. Loop open six months. CEO assigned single DRI — pipeline shipped in three weeks.",
        },
        {
          title: "Canary deploy — regression caught",
          body: "New model passed offline eval but failed canary on live traffic — auto-rollback. Closed loop includes safe promotion, not just training.",
        },
      ],
    }),
    buildSection({
      number: "4.6",
      title: "Measuring loop velocity",
      subtitle: "How fast is your model improving — and how do you know",
      take: "Loop velocity metrics: median time signal-to-ship, labels per week ingested for training, model quality delta after each cycle (task completion, override rate, precision on holdout), and percentage of production traffic on latest improved model. Velocity beats starting accuracy.",
      why: "Investors fund speed of compounding. A mediocre model improving 2% weekly beats a strong static model — and beats competitors with better starting weights but slower loops.",
      paragraphs: [
        [
          s("Time signal-to-ship is the headline velocity metric. "),
          x(
            "Measure from user action timestamp to model version serving improved metric.",
            "Include queue time — organizational latency kills loops as often as technical.",
          ),
          s(" Set target and track trend quarterly."),
        ],
        [
          s("Quality delta must be causal-ish — holdout eval plus online A/B where possible. "),
          x(
            "Offline metric improvement without online confirmation may be overfit.",
            "Task completion and override rate are founder-friendly online metrics.",
          ),
          s(" Report delta in board slides, not just 'we retrained'."),
        ],
        [
          s("Adoption of improved model completes the velocity story. "),
          x(
            "Trained model sitting undeployed is zero velocity.",
            "100% traffic on latest within 48 hours of promotion is mature ops.",
          ),
          s(" Velocity = improve times deploy, not improve alone."),
        ],
      ],
      examples: [
        {
          title: "14-day median signal-to-ship — Series A metric",
          body: "Company reported 14-day median in data room — investor compared to competitor's 'quarterly retrain'. Velocity narrative supported premium.",
        },
        {
          title: "Labels up, quality flat — pipeline debug",
          body: "Label volume doubled but override rate flat — discovered duplicate noisy labels from bot traffic. Velocity requires quality gates on ingested signal.",
        },
        {
          title: "A/B proved loop value",
          body: "Model v47 beat v46 on task completion +4% in A/B — first proof loop drives user value. CEO cited in all hands — team prioritized pipeline over new features.",
        },
      ],
    }),
    buildSection({
      number: "4.7",
      title: "Competitive moat through loop velocity",
      subtitle: "Why a company with a faster feedback loop beats a company with a better starting model",
      take: "Starting model quality is copyable via API updates. Loop velocity is history-dependent — competitors must match your label volume and pipeline speed, not your GitHub. Faster loops widen quality gaps exponentially as cycles compound.",
      why: "When a well-funded competitor launches with a better demo, loop velocity is your response — not a fundraising panic for custom training.",
      paragraphs: [
        [
          s("Compounding math favours velocity over starting point. "),
          x(
            "1% improvement weekly compounds to 67% annual gain; static model degrades via drift.",
            "Competitor copying UI gets today's feature, not your label history.",
          ),
          s(" Invest in loop when competitor raises — not only in marketing."),
        ],
        [
          s("Segment-specific loops create local monopolies. "),
          x(
            "Dense signal in vertical beats general model in that vertical after N cycles.",
            "Sparse segments need honest timeline — moat builds slowly.",
          ),
          s(" Sales should set expectations by segment data density."),
        ],
        [
          s("Loop velocity is hard diligence — prove with metrics, not narrative. "),
          x(
            "Export median signal-to-ship and last three quality deltas for data room.",
            "Founders who cannot prove velocity are vulnerable to 'OpenAI will catch up'.",
          ),
          s(" Velocity is the answer to the wrapper question."),
        ],
      ],
      examples: [
        {
          title: "Stripe Radar vs new entrant",
          body: "New fraud tools launch with modern models but lack years of chargeback labels. Stripe's loop velocity in payments data beats starting accuracy. History as moat.",
        },
        {
          title: "Competitor demo win, loop win retention",
          body: "Rival shipped flashier demo; incumbent's override rate improved 20% over two quarters from loop. Retention held — customers felt improving product.",
        },
        {
          title: "Slow loop lost wedge",
          body: "First mover in HR AI had 18-month head start but quarterly retrain. Fast-follower with weekly loop surpassed quality in 9 months. Velocity beat first-mover static model.",
        },
      ],
    }),
    buildSection({
      number: "4.8",
      title: "Founder decision lens",
      subtitle: "Designing your feedback loop before you write your first line of product code",
      take: "Before code: document (1) primary user workflow, (2) implicit and explicit signal per step, (3) label schema and storage, (4) retrain cadence target, (5) success metric for improvement, (6) loop owner. Build logging and schema in sprint one — not sprint twenty.",
      why: "Retrofitting loops costs quarters and alienates users. The highest-ROI founder document is the loop spec — it drives schema, hiring, and investor narrative simultaneously.",
      paragraphs: [
        [
          s("Loop spec is a one-pager shared by product, eng, and data. "),
          x(
            "Every feature PRD must state: what label does this generate?",
            "Features without signal require justification — may be non-AI work.",
          ),
          s(" Reject features that do not strengthen the loop unless strategic for distribution."),
        ],
        [
          s("Schema first: episode table with inference_id, signal, timestamp, model_version. "),
          x(
            "Ship empty pipeline with logging before ship smart pipeline.",
            "First retrain can be manual; first log must be automatic.",
          ),
          s(" Demo to investors shows loop architecture, not just output quality."),
        ],
        [
          s("Assign loop DRI before launch — OKR tied to velocity metric. "),
          x(
            "CEO reviews velocity monthly in seed; weekly at Series A.",
            "Loop neglect is strategic neglect — treat as core product, not research.",
          ),
          s(" If you cannot write the spec pre-code, delay AI feature until you can."),
        ],
      ],
      examples: [
        {
          title: "Loop spec before MVP — seed discipline",
          body: "Founders wrote loop spec in Notion before React app. Schema matched spec day one. First retrain week ten with 2K labels. Competitors still logging-only at month twelve.",
        },
        {
          title: "Feature without signal — killed in PRD review",
          body: "PM proposed AI summary export with no feedback capture. CEO killed — added inline edit requirement generating diff labels. Loop discipline over feature count.",
        },
        {
          title: "Loop DRI — first hire profile",
          body: "First 'AI product engineer' hired against loop spec ownership — shipped pipeline in 90 days. Job description listed velocity OKR explicitly.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A startup stores 3M user prompts and 50K thumbs-up ratings but has never run a retrain or automated eval. Do they have a feedback loop?",
      options: [
        "Yes — lots of data means a loop.",
        "No — collecting data without signal-to-improvement pipeline is logging, not a loop.",
        "Yes — thumbs-up are sufficient for RLHF automatically.",
        "Only if they use GPT-4.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Loops require closed path from signal to deployed improvement. Re-read sections 4.1 and 4.2.",
      wrongFeedback:
        "Storage without retrain pipeline is not a loop. Re-read section 4.2.",
    },
    {
      kind: "categorize",
      q: "Sort each signal as primarily implicit or explicit feedback.",
      categories: ["Implicit", "Explicit"],
      items: [
        { text: "User presses Tab to accept code completion.", category: 0 },
        { text: "User selects preferred of two AI-generated email drafts.", category: 1 },
        { text: "User skips song within 10 seconds.", category: 0 },
        { text: "Lawyer edit diff on AI contract draft.", category: 0 },
        { text: "Optional 1–5 star rating after chat.", category: 1 },
        { text: "Click on third search result.", category: 0 },
      ],
      correctFeedback:
        "Right. Implicit infers preference from behaviour; explicit asks for judgment. Both valuable — implicit scales. Re-read section 4.3.",
      wrongFeedback:
        "Implicit = behaviour reveals preference; explicit = user asked to judge. Re-read section 4.3.",
    },
    {
      q: "What is startup-scale RLHF most accurately described as?",
      options: [
        "Hiring 10,000 annotators to replicate OpenAI.",
        "Learning from preference pairs captured in product workflow with small curated sets and eval gates.",
        "Using larger context windows.",
        "Removing all human review.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Startup RLHF uses real user and reviewer preferences at thousands of pairs scale — not billion-dollar annotation farms. Re-read section 4.4.",
      wrongFeedback:
        "RLHF at startup scale leverages product signal and domain experts — affordably. Re-read section 4.4.",
    },
    {
      kind: "order",
      q: "Order the closed-loop pipeline stages correctly.",
      prompt: "Drag to arrange (top = first).",
      items: [
        "Signal ingestion from user reactions in production.",
        "Label validation and dataset versioning.",
        "Train or fine-tune with offline eval on holdout set.",
        "Canary or shadow deploy, then promotion or rollback.",
      ],
      correctFeedback:
        "Right. Ingest → validate → train → safe deploy. Re-read section 4.5.",
      wrongFeedback:
        "Closing the loop requires automated path from signal to promoted model. Re-read section 4.5.",
    },
    {
      q: "Why can faster loop velocity beat a competitor with a better starting model?",
      options: [
        "Starting model quality never matters.",
        "Weekly compounding improvements accumulate; competitors cannot copy your label history and pipeline speed.",
        "APIs prevent model improvement.",
        "Investors ignore velocity.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Velocity compounds; starting weights commoditize. Re-read section 4.7.",
      wrongFeedback:
        "Loop velocity is history-dependent and compounds. Re-read section 4.7.",
    },
    {
      kind: "order",
      q: "Order what to document before writing product code for an AI feature.",
      prompt: "Drag to arrange (top = first).",
      items: [
        "Primary user workflow where inference is load-bearing.",
        "Implicit and explicit signal captured per workflow step.",
        "Label schema, storage, and retrain cadence target.",
        "Success metric, loop owner, and minimum viable pipeline plan.",
      ],
      correctFeedback:
        "Right. Workflow → signals → schema → ownership. Re-read section 4.8.",
      wrongFeedback:
        "Design loop before code — workflow, signals, schema, owner. Re-read section 4.8.",
    },
  ],
});
