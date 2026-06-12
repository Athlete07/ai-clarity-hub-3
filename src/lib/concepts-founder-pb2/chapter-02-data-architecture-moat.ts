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

const section25 = insertDiagram(
  buildSection({
    number: "2.5",
    title: "The data flywheel — real vs imagined",
    subtitle: "The virtuous cycle every investor asks about and the honest test for whether yours actually exists",
    take: "A real data flywheel closes the loop automatically: usage generates labels, labels improve the model, the model improves the product, usage grows. Imagined flywheels appear on pitch decks as circular arrows backed by quarterly manual exports. Investors distinguish them by metrics, not graphics.",
    why: "Every AI pitch includes a flywheel slide. The founders who can report signal volume, retrain cadence, and measurable model delta after each cycle earn premium multiples. Those who cannot are selling a static tool.",
    paragraphs: [
      [
        s("The flywheel test is operational, not aspirational. "),
        x(
          "Can you name the user action that generates a label today? What is median time from that action to a model update? What metric improved last cycle?",
          "If any answer requires 'we're building that', the flywheel is imagined.",
        ),
        s(" Board slides should show flywheel health in numbers, not clipart."),
      ],
      [
        s("Broken links stall compounding — especially signal-to-ship latency. "),
        x(
          "Quarterly retrain is a slow flywheel; weekly with automated eval gates is competitive.",
          "Flywheels built on non-consented data are liability flywheels — fines and forced deletion destroy the asset.",
        ),
        s(" Consent and pipeline reliability are part of flywheel architecture, not legal overhead."),
      ],
      [
        s("Competitors can copy your UI in weeks; they cannot copy your label history. "),
        x(
          "Static models degrade as the world shifts; flywheels pull away at accelerating rates.",
          "The business consequence: investors fund loop velocity, not starting model quality.",
        ),
        s(" Ask honestly whether you have a flywheel or a feature before claiming a moat."),
      ],
    ],
    examples: [
      {
        title: "Google Search — click as native label",
        body: "Skipped results and clicks pipe back as ranking signal continuously. Usage trains the product without manual intervention. Founders should identify their click-equivalent before launch.",
      },
      {
        title: "Github Copilot — Tab as binary label",
        body: "Acceptance requires explicit Tab — clean positive signal. Ignored suggestions are negatives. Billions of labels compounded. Founders need a low-friction label capture mechanism in core UX.",
      },
      {
        title: "Fake flywheel — spreadsheet retrain",
        body: "Series A candidate showed flywheel slide but retrained manually from CSV exports quarterly. Lead passed: no compounding. Instrument capture before the deck claims the loop.",
      },
    ],
  }),
  {
      kind: "diagram",
    id: "ch2-data-flywheel",
    type: "flow",
    title: "The data flywheel — real vs imagined",
    caption:
        "A real data flywheel closes the loop automatically: usage generates labels, labels improve the model, the model improves the product, usage grows. Imagined…",
    },
);

export const chapter02DataArchitectureMoat = buildChapter({
  slug: "founder-data-architecture-moat",
  number: 2,
  shortTitle: "Data Architecture Moat",
  title: "Data Architecture — Building Your Moat Before You Know You Need It",
  readingMinutes: 28,
  summary:
    "The data decisions most founders get wrong because they focus on product, not asset. Proprietary signal, flywheel architecture, labelling economics, synthetic data traps, and liability from day one — before your first ML hire.",
  keyTakeaway:
    "Models and compute commoditize; proprietary labelled data does not. Design your schema, consent, and feedback capture in month one — or spend year three rebuilding what competitors are already compounding.",
  pmCallout:
    "As a founder: ask your eng lead on day one — does every user interaction generate labelled signal we can learn from? If the schema was built for CRUD, your AI ceiling is lower than your pitch claims.",
  sections: [
    buildSection({
      number: "2.1",
      title: "Why data is the only durable moat in AI",
      subtitle: "Models commoditise. Compute commoditises. Proprietary, domain-specific data does not.",
      take: "Foundation models and GPU access are rented by everyone. The asset investors cannot price into a competitor's cap table is proprietary data — behavioural signal, domain corrections, and longitudinal outcomes your product alone generates. Algorithms are commodities; your database is the moat.",
      why: "When a Series A investor asks what your competitive advantage is, 'we use GPT-4' is not an answer. Point to data competitors cannot buy, scrape, or license on equal terms.",
      paragraphs: [
        [
          s("Two startups call the same API. Six months later one is clearly superior. "),
          x(
            "The difference is diet — proprietary training signal from real usage, not model brand.",
            "Switching providers is painful but possible. Rebuilding three years of correction history is not.",
          ),
          s(" Undifferentiated data produces undifferentiated products."),
        ],
        [
          s("Domain expertise lives in data, not rented weights. "),
          x(
            "Public corpora produce generic output. Five years of workflow corrections produce something no API can replicate.",
            "If your corpus is scrapeable, your product is cloneable over a weekend.",
          ),
          s(" Treat data acquisition as a primary product feature from incorporation."),
        ],
        [
          s("IP location shifted in the AI era. "),
          x(
            "Moats were source code; now they are feedback loops enriching your database.",
            "Pitch decks leading with model choice signal commodity thinking. Decks leading with proprietary data signal defensibility.",
          ),
          s(" Budget data infrastructure before you budget a second ML hire."),
        ],
      ],
      examples: [
        {
          title: "Bloomberg — forty-year data moat",
          body: "BloombergGPT did not win on algorithm — it won on exclusive financial terminal data accumulated over decades. Fintech AI founders should ask: what is our Bloomberg-equivalent signal?",
        },
        {
          title: "Waymo — miles as physical IP",
          body: "Self-driving moats are miles driven and edge cases captured. New entrants cannot buy that history. Physical-world AI requires data collection as capex from day one.",
        },
        {
          title: "Reddit — UGC as balance-sheet asset",
          body: "Reddit licensed conversational data for LLM training — community content became a licensable asset. Founders with UGC must clarify training rights early in terms and fundraising narrative.",
        },
      ],
    }),
    buildSection({
      number: "2.2",
      title: "The four properties of valuable data",
      subtitle: "Proprietary, labelled, current, and domain-specific — why all four matter and how to score yours",
      take: "Strategic data scores 4/4: proprietary (competitors cannot access it), labelled (ground truth attached), current (reflects today's distribution), and domain-specific (encodes expertise public corpora lack). Missing any property weakens the moat — volume alone is storage cost.",
      why: "When engineering says 'we have a million rows,' ask which properties they satisfy. Investors use this scorecard in diligence; founders should use it in roadmap planning.",
      paragraphs: [
        [
          s("Proprietary data only your product generates or holds under exclusive terms. "),
          x(
            "Scraped web text and brokered datasets are not proprietary — everyone has them.",
            "Proprietary means a competitor needs your users, partnerships, or years of operation to replicate.",
          ),
          s(" Timing advantage without exclusivity is not a moat."),
        ],
        [
          s("Labelled and current data teaches today's patterns. "),
          x(
            "Unlabelled logs are archives. Stale labels teach yesterday's world — concept drift breaks static models.",
            "Domain-specific vocabulary and edge cases never appear in general corpora.",
          ),
          s(" Ten thousand recent expert corrections beat a billion public tokens for your use case."),
        ],
        [
          s("Score every data asset 4/4 before claiming it in a deck. "),
          x(
            "Brokered data may be labelled but not proprietary or consented.",
            "Product feedback can be proprietary and current but useless without a labelling pipeline.",
          ),
          s(" Show investors which cells you fill each quarter."),
        ],
      ],
      examples: [
        {
          title: "Stripe Radar — four-for-four loop",
          body: "Chargeback outcomes are proprietary, labelled, current, and payments-specific. Map your equivalent: which user action produces data scoring 4/4?",
        },
        {
          title: "Common Crawl — volume without moat",
          body: "Petabytes of web text — zero proprietary value. Every LLM trains on it. 'We scraped the web' describes commodity input, not strategy.",
        },
        {
          title: "Healthcare AI — stale labels repriced the round",
          body: "Diagnostic startup trained on 2019 imaging; accuracy cratered on 2024 scanners. Labelled and domain-specific but not current. Diligence flagged drift; round repriced. Budget continuous refresh.",
        },
      ],
    }),
    buildSection({
      number: "2.3",
      title: "Training data vs behavioural data vs feedback data",
      subtitle: "Three types your company generates — only one creates compounding competitive value",
      take: "Training data sets initial weights — expensive, slow to refresh, depreciates without updates. Behavioural data captures what users do in product — valuable for analytics and segmentation. Feedback data attaches outcomes to specific inferences — the only stream that compounds proprietary advantage.",
      why: "Logging everything without distinguishing streams creates storage bills masquerading as strategy. Investors fund feedback architecture, not prompt archives.",
      paragraphs: [
        [
          s("Training data is historical corpus for fine-tuning — CapEx that freezes until the next run. "),
          x(
            "Founders renting foundation models start with someone else's training data.",
            "Moat must come from what you add — not what you bought once.",
          ),
          s(" Without ongoing feedback, training data depreciates as the world shifts."),
        ],
        [
          s("Behavioural data tracks clicks, sessions, and funnels — essential for product, insufficient alone for learning. "),
          x(
            "Behaviour without attachment to model outputs cannot supervise retraining.",
            "Privacy rules often limit using behavioural logs as training corpora without explicit consent.",
          ),
          s(" Do not confuse analytics richness with training signal."),
        ],
        [
          s("Feedback data links inference to outcome — accept, edit, rejection, downstream result. "),
          x(
            "Only feedback converts usage into proprietary labels competitors cannot replicate.",
            "Design products so feedback capture is the default path — not buried 'rate this response'.",
          ),
          s(" Lead data strategy with feedback architecture; training and behaviour support it."),
        ],
      ],
      examples: [
        {
          title: "Gmail Spam — feedback as free labels",
          body: "Inference: incoming email. Feedback: Report Spam or Not Spam. Retraining uses feedback, not raw inbox storage. Founders need a spam-button equivalent.",
        },
        {
          title: "Legal AI — edit distance as feedback",
          body: "Lawyer edits to AI drafts are feedback diffs, not just final documents. Retraining on edit distance compounds domain expertise. Professional tools should measure diffs, not thumbs.",
        },
        {
          title: "Chatbot trap — prompts without outcomes",
          body: "Startup logged millions of prompts but never whether users acted on answers. Series A found inference archives with zero labels — no flywheel. Storage cost, not moat.",
        },
      ],
    }),
    buildSection({
      number: "2.4",
      title: "Designing your product to capture training signal",
      subtitle: "The one architectural decision most founders miss in the first six months",
      take: "The highest-leverage data decision is designing UX so the user's natural workflow generates labels — Tab to accept, inline edit, mandatory review step — not optional surveys after the fact. If capturing signal requires extra user effort, you will not get enough volume to train.",
      why: "Retrofitting label capture after users learned a frictionless workflow causes revolt or sparse signal. The first six months set capture rates for years.",
      paragraphs: [
        [
          s("Native labels emerge from workflow, not from asking users to train your model. "),
          x(
            "Copilot's Tab acceptance is a label disguised as productivity.",
            "Post-hoc rating dialogs generate 100x less signal than inline corrections.",
          ),
          s(" Map every primary workflow step to the label it should produce."),
        ],
        [
          s("Human-in-the-loop steps are data infrastructure, not product delays. "),
          x(
            "Lawyer review of AI drafts generates edit labels while managing risk.",
            "Skipping review for speed sacrifices both safety and the moat.",
          ),
          s(" Price review steps into unit economics as labelling cost with strategic return."),
        ],
        [
          s("Schema and APIs must store episodes, not just entities. "),
          x(
            "Each record needs inference context, output, user reaction, model version — reconstructable as a training example.",
            "CRUD tables without reaction fields cannot backfill labels later.",
          ),
          s(" Ship logging fields that feel premature at 100 users — they are cheap insurance at 100,000."),
        ],
      ],
      examples: [
        {
          title: "Duolingo — every answer is a label",
          body: "Learner responses are correctness labels by design. The product cannot function without generating signal. Founders should ask: can our product work without producing labels?",
        },
        {
          title: "Figma AI — accept/reject in canvas",
          body: "Design suggestions accepted or dismissed in context generate clean preference signal. Signal capture lives where work happens — not in email surveys.",
        },
        {
          title: "Support AI — escalation as label",
          body: "When agents override AI suggestions, override reason codes become training data. Founders should instrument overrides with structured categories, not free-text only.",
        },
      ],
    }),
    section25,
    buildSection({
      number: "2.6",
      title: "Data network effects vs traditional network effects",
      subtitle: "Why more users making your model smarter is fundamentally different from Metcalfe's Law",
      take: "Traditional network effects: each user adds value for other users directly — messaging, marketplaces. Data network effects: each user adds training signal that improves the model for all users. The mechanism is indirect, slower to start, and requires a working feedback pipeline — but can be stronger and harder to clone once spinning.",
      why: "Investors conflate 'more users = better product' with Metcalfe's Law. Founders must explain the specific mechanism — what signal each user adds and how fast it improves outcomes — or lose credibility in diligence.",
      paragraphs: [
        [
          s("Metcalfe effects are immediate: more users on WhatsApp means more people to message. "),
          x(
            "Data effects are delayed: user 10,000 helps user 10,001 only after signal flows through retraining.",
            "Without pipeline, more users just mean more inference cost.",
          ),
          s(" Data network effects require architecture; social network effects require connectivity."),
        ],
        [
          s("Data effects can be stronger because they compound silently. "),
          x(
            "Competitors match feature parity but lag label history by months or years.",
            "Cold-start segments may never benefit until enough domain signal accumulates.",
          ),
          s(" Set customer expectations by segment when data density varies."),
        ],
        [
          s("Not every product generates data network effects. "),
          x(
            "Low-frequency workflows produce sparse signal — fraud once a year does not train weekly.",
            "Horizontal tools with diverse use cases dilute signal unless segmented models exist.",
          ),
          s(" Honest assessment prevents pitching Metcalfe when you have a static feature."),
        ],
      ],
      examples: [
        {
          title: "Waze — hybrid network and data effect",
          body: "Users improve maps for each other in near-real-time (network) while driving patterns train routing (data). Founders should identify which effect they actually have.",
        },
        {
          title: "Shopify Fraud Protect — segment density",
          body: "Fraud ML improves with merchant volume in similar segments. Low-volume verticals see weaker models — a honest sales conversation, not a bug.",
        },
        {
          title: "B2B tool with monthly usage — no data effect",
          body: "Enterprise configurator used twice a month per user generates insufficient signal for compounding. Founder reframed moat as workflow integration, not data network effects — diligence appreciated honesty.",
        },
      ],
    }),
    buildSection({
      number: "2.7",
      title: "Data labelling strategy",
      subtitle: "Human annotation, weak supervision, programmatic labelling — the cost and quality tradeoffs",
      take: "Labels come from humans (high quality, high cost), weak supervision (heuristics and rules generating noisy labels at scale), or programmatic pipelines (user actions and outcomes as automatic labels). Seed-stage founders should maximize programmatic and weak supervision; reserve human annotation for high-stakes edge cases and eval sets.",
      why: "Labelling often exceeds training compute cost. Investors ask about label economics. Founders who under-budget annotation discover margin collapse at scale.",
      paragraphs: [
        [
          s("Human annotation is the quality ceiling and the cost floor killer. "),
          x(
            "Expert legal, medical, or financial labels cost dollars per example — viable for eval, not for millions of training rows.",
            "Scale AI built a business on this cost structure — know when you are buying labels vs generating them.",
          ),
          s(" Use humans for gold sets and ambiguous cases; not for every training row."),
        ],
        [
          s("Weak supervision uses rules, heuristics, and model consensus to label at scale with noise. "),
          x(
            "Noisy labels work when volume overwhelms error rate and eval gates catch regressions.",
            "Snorkel-style pipelines suit founders with domain rules but limited label budget.",
          ),
          s(" Document noise tolerance in eval — not every use case survives weak labels."),
        ],
        [
          s("Programmatic labelling from product actions is the AI-native path. "),
          x(
            "Accept/reject, edit distance, downstream conversion — labels generated as side effect of usage.",
            "Programmatic fails if UX was not designed for capture — see section 2.4.",
          ),
          s(" Your labelling strategy should start programmatic and add human where error cost is high."),
        ],
      ],
      examples: [
        {
          title: "Scale AI — human labels as business",
          body: "Scale sells human annotation at enterprise scale — proof that label cost is real. Application founders should minimize purchased labels via programmatic capture.",
        },
        {
          title: "Spotify — implicit preference labels",
          body: "Skip, listen duration, and playlist adds are weak programmatic labels at billions of events. Human playlist curation validates subsets. Hybrid strategy matches consumer scale.",
        },
        {
          title: "Medical imaging — human gold set required",
          body: "Startup used weak labels for training but maintained radiologist-labelled eval set. FDA-facing path required human quality on measurement. Match label strategy to regulatory tier.",
        },
      ],
    }),
    buildSection({
      number: "2.8",
      title: "Synthetic data",
      subtitle: "The legitimate uses of synthetic data and the ways founders use it to paper over real gaps",
      take: "Synthetic data helps bootstrap cold start, augment rare classes, and stress-test edge cases — when grounded in real distribution and validated against human eval. It cheats when used to inflate dataset size for investors, simulate diversity you do not have, or replace consent-backed user signal entirely.",
      why: "Diligence teams increasingly probe synthetic-to-real ratios. Founders who over-rely on synthetic discover models that collapse on production distribution shift.",
      paragraphs: [
        [
          s("Legitimate synthetic data solves specific gaps — not narrative gaps. "),
          x(
            "Generate rare fraud scenarios, augment underrepresented classes, or simulate privacy-safe variants of real records.",
            "Validate synthetic samples against real eval sets — synthetic-only training fails silently.",
          ),
          s(" Synthetic is a supplement to proprietary real signal, not a substitute."),
        ],
        [
          s("The cheat patterns investors recognize. "),
          x(
            "'10M training examples' that are GPT-generated paraphrases of public text.",
            "Synthetic diversity masking absence of real user segments — model fails on first enterprise pilot.",
          ),
          s(" If synthetic exceeds real in your deck, prepare for distribution shift questions."),
        ],
        [
          s("Cost and liability differ from real data. "),
          x(
            "Synthetic generation has compute cost and quality review cost.",
            "Some regulators treat synthetic derived from PII as still sensitive — not a GDPR escape hatch.",
          ),
          s(" Document provenance: what was synthetic, from what seed, validated how."),
        ],
      ],
      examples: [
        {
          title: "Waymo — simulation for edge cases",
          body: "Synthetic miles augment rare real-world scenarios — pedestrian jaywalking, construction zones. Grounded in real sensor physics, validated against on-road eval. Legitimate bootstrap for safety-critical gaps.",
        },
        {
          title: "Startup deck inflation — synthetic paraphrase corpus",
          body: "Founder claimed 5M proprietary examples; diligence found GPT paraphrases of public FAQs. Model failed on customer phrasing in pilot. Round stalled — synthetic masked absence of real feedback.",
        },
        {
          title: "Financial fraud — synthetic minority class",
          body: "Fraud examples are rare; team generated synthetic transaction patterns from real feature distributions, validated by risk analysts. Augmentation, not replacement, of real chargeback labels.",
        },
      ],
    }),
    buildSection({
      number: "2.9",
      title: "Data liability from day one",
      subtitle: "Copyright, PII, GDPR, consent — the data risks that surface in Series B due diligence",
      take: "Every training corpus carries legal surface area: copyright in scraped content, PII in user logs, GDPR deletion rights, consent for model training, and cross-border transfer rules. Liability designed in at day one is a moat enabler; liability discovered in diligence is a deal killer.",
      why: "Series B legal review asks where data came from, who can delete it, and what happens if a source disappears. Founders who treated data as free fuel learn expensive lessons.",
      paragraphs: [
        [
          s("Copyright and licensing determine whether your corpus is an asset or a lawsuit. "),
          x(
            "Scraped content, customer uploads, and partner feeds each have different rights.",
            "Enterprise buyers ask indemnification questions — Adobe Firefly's licensed stock story wins deals.",
          ),
          s(" Map provenance for every data source before training, not after fundraising."),
        ],
        [
          s("PII and GDPR require architectural deletion, not policy promises. "),
          x(
            "Right to erasure means removing user data from training stores and retraining or unlearning where required.",
            "Logging prompts with identifiers without separation creates compliance debt.",
          ),
          s(" Design PII-minimized training pipelines from first user."),
        ],
        [
          s("Consent for training must be explicit where regulations require it. "),
          x(
            "Terms updated silently to 'we may train on your data' generate churn and regulatory attention.",
            "Opt-in training pools produce smaller but defensible corpora — often enough for vertical moats.",
          ),
          s(" Legal and product should co-design consent UX, not sequential handoffs."),
        ],
      ],
      examples: [
        {
          title: "Adobe Firefly — licensed training as sales asset",
          body: "Training on licensed Adobe Stock enables enterprise indemnification narrative. Founders in creative AI should compare licensed vs scraped provenance in sales cycles.",
        },
        {
          title: "Clearview AI — liability destroying the business",
          body: "Scraped facial images without consent created regulatory and legal destruction of business value. Extreme case — but proves data sourcing is strategy, not footnote.",
        },
        {
          title: "Enterprise SaaS — customer data training clause",
          body: "Fortune 500 pilot stalled on 'will you train on our data?' Startup added contractual opt-out and separate tenant stores — closed deal. Data liability negotiated as product feature.",
        },
      ],
    }),
    buildSection({
      number: "2.10",
      title: "Founder decision lens",
      subtitle: "What to write down about your data architecture before you hire your first ML engineer",
      take: "Write a one-page data strategy document: data sources and provenance, 4/4 property scorecard, feedback capture design, flywheel metrics and cadence, labelling approach, synthetic policy, consent and deletion architecture, and first ML hire prerequisites. ML engineers build pipelines; founders must define what pipelines should exist.",
      why: "Hiring ML talent before data architecture clarity produces expensive experiments on unlabelled logs. The document aligns eng, legal, and investors before headcount.",
      paragraphs: [
        [
          s("Section one: inventory sources with provenance and rights. "),
          x(
            "Public, partner, user-generated, synthetic — each with owner and deletion path.",
            "Gaps in provenance become diligence blockers.",
          ),
          s(" No source enters training without a row in this table."),
        ],
        [
          s("Section two: feedback loop specification. "),
          x(
            "User action → label type → storage schema → retrain trigger → success metric.",
            "If any arrow is TBD, the flywheel is not designed.",
          ),
          s(" Include target loop velocity — e.g. median 7 days signal to eval."),
        ],
        [
          s("Section three: liability and ML hire gates. "),
          x(
            "Consent flows, PII separation, eval gold set plan.",
            "First ML hire criteria: programmatic labels flowing, eval harness stub exists, legal reviewed training terms.",
          ),
          s(" Share document with first ML candidate — serious ones will ask these questions anyway."),
        ],
      ],
      examples: [
        {
          title: "Seed founder — data doc before ML hire",
          body: "CEO wrote one-page data strategy with eng and counsel before posting ML role. First hire shipped retrain pipeline in week six because schema existed. Founders who skip the doc wait six months for architecture debates.",
        },
        {
          title: "Series A — diligence matched internal doc",
          body: "Investor data diligence mapped 1:1 to founder's pre-written data strategy. No surprises — accelerated close. Document doubles as diligence prep.",
        },
        {
          title: "ML hire without doc — churn in 8 months",
          body: "First ML engineer left after finding no labels, no eval, no legal clarity on training rights. Founder rewrote data strategy and hired second candidate with doc as onboarding artifact. Architecture before headcount.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Two startups use the same foundation model API. One pulls ahead after six months. What most likely explains the gap?",
      options: [
        "Better prompt engineering only.",
        "Proprietary feedback data compounding through a working retrain pipeline.",
        "Higher AWS spend on compute.",
        "More ML PhDs on staff.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Models commoditize; proprietary labelled feedback compounds. Re-read sections 2.1 and 2.5.",
      wrongFeedback:
        "API access equalizes model capability. Moat is data and loop velocity. Re-read section 2.1.",
    },
    {
      kind: "categorize",
      q: "Sort each data type by whether it typically compounds proprietary moat without a feedback pipeline.",
      categories: ["Compounds with pipeline", "Does not compound alone"],
      items: [
        { text: "User edit diffs attached to specific AI draft outputs.", category: 0 },
        { text: "One-time fine-tuning corpus assembled at launch, never refreshed.", category: 1 },
        { text: "Chargeback outcomes linked to fraud score inferences.", category: 0 },
        { text: "Raw prompt logs without user outcome labels.", category: 1 },
        { text: "Tab-accept signals on code completion suggestions.", category: 0 },
        { text: "Public Common Crawl text used for initial prototype.", category: 1 },
      ],
      correctFeedback:
        "Right. Feedback data linked to inferences compounds through retraining. Static training data and unlabelled logs do not.",
      wrongFeedback:
        "Only feedback linked to inferences compounds. Re-read section 2.3.",
    },
    {
      q: "A founder claims 5M training examples for diligence. Investigation reveals GPT paraphrases of public FAQs. What is the primary risk?",
      options: [
        "Higher API bill during generation.",
        "Model fails on real user distribution — synthetic masked absence of proprietary signal.",
        "Copyright on paraphrases is unclear but manageable.",
        "Investors prefer synthetic data.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Synthetic paraphrase inflation hides missing real feedback — production distribution shift kills the product story.",
      wrongFeedback:
        "Synthetic without real validation papers over gaps. Re-read section 2.8.",
    },
    {
      kind: "order",
      q: "Order the four properties of valuable data from foundational exclusivity to domain fit.",
      prompt: "Drag to arrange — all four are required; order reflects typical diligence conversation flow.",
      items: [
        "Proprietary — competitors cannot access the same corpus on equal terms.",
        "Labelled — ground truth or outcome attached to examples.",
        "Current — reflects today's distribution, not stale history.",
        "Domain-specific — encodes expertise public corpora lack.",
      ],
      correctFeedback:
        "Right. All four matter together — missing any weakens the moat. Re-read section 2.2.",
      wrongFeedback:
        "Valuable training data needs all four properties. Re-read section 2.2.",
    },
    {
      q: "When should a seed-stage founder prioritize human annotation budget?",
      options: [
        "For every training row to maximize quality.",
        "For gold eval sets and high-stakes edge cases — programmatic labels for scale.",
        "Never — human labels are always wasteful.",
        "Only after Series C.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Humans for eval and ambiguity; programmatic and weak supervision for volume. Re-read section 2.7.",
      wrongFeedback:
        "Human annotation is expensive — reserve for quality gates. Re-read section 2.7.",
    },
    {
      kind: "order",
      q: "Order the sections of a one-page data strategy document before first ML hire.",
      prompt: "Drag to arrange (top = first).",
      items: [
        "Inventory data sources with provenance and rights.",
        "Feedback loop specification: action → label → schema → retrain → metric.",
        "Liability: consent, PII separation, deletion architecture.",
        "ML hire gates: labels flowing, eval stub, legal review complete.",
      ],
      correctFeedback:
        "Right. Sources → loop design → liability → hire gates. Re-read section 2.10.",
      wrongFeedback:
        "Start with what data you have and may use, then loop design, then compliance, then hire readiness. Re-read section 2.10.",
    },
  ],
});
