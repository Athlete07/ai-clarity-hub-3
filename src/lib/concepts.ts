export type ExplainSpan = { text: string; explain: string };
export type ConceptBodyBlock =
  | { kind: "p"; parts: (string | ExplainSpan)[] }
  | { kind: "h"; number: string; title: string; subtitle?: string }
  | { kind: "h3"; title: string; subtitle?: string }
  | { kind: "take"; text: string }
  | { kind: "why"; text: string }
  | { kind: "ex"; title: string; body: string }
  | { kind: "trans"; text: string };

export type Example = { title: string; body: string };
export type QuizQuestion = {
  q: string;
  options: string[];
  correct: number;
  correctFeedback: string;
  wrongFeedback: string;
};

export type Concept = {
  slug: string;
  title: string;
  shortTitle: string;
  number: number;
  readingMinutes: number;
  summary: string;
  keyTakeaway: string;
  pmCallout: string;
  body: ConceptBodyBlock[];
  examples: Example[];
  quiz: QuizQuestion[];
};

const s = (text: string): string => text;
const x = (text: string, explain: string): ExplainSpan => ({ text, explain });

export const concepts: Concept[] = [
  {
    slug: "pm-how-models-learn",
    number: 2,
    shortTitle: "How Models Learn",
    title:
      "Concept 2: How Models Learn (Parameters, loss functions, and gradient descent — demystified)",
    readingMinutes: 9,
    summary:
      "If 'Machine Learning' is the paradigm of learning from examples, how exactly does that math work? At its core, an ML model is a complex mathematical equation with millions or billions of adjustable knobs called parameters. Training a model means systematically turning those knobs until the model's predictions stop being wrong. The measurement of 'how wrong it is' is the loss function, and the method for turning the knobs in the right direction is gradient descent.",
    keyTakeaway:
      "Models learn through a repetitive loop of predicting, measuring the error (loss), and adjusting their internal math (parameters) to reduce that error. Training is simply error-minimization at scale.",
    pmCallout:
      "As a PM, understanding the 'Loss Function' is your superpower. The Loss Function is the mathematical translation of your product goal. If you tell the model to minimize 'clicks to purchase', it will optimize for that, even if it means recommending sensationalist junk. You don't write the gradient descent code, but you must own the definition of the Loss Function.",
    body: [
      {
        kind: "p",
        parts: [
          s(
            "When an engineer says they are 'building a model', they are essentially setting up a giant mathematical equation. This equation takes an input (like an image or a spreadsheet row) and produces an output (like 'is a hotdog' or 'will churn'). ",
          ),
          x(
            "Inside this equation are adjustable numbers called parameters or weights.",
            "Imagine a massive soundboard with billions of volume sliders. Each slider changes how the input flows through the equation. Before training begins, these sliders are set to random positions, meaning the model's initial predictions are total garbage.",
          ),
          s(
            " The 'intelligence' of the model is stored entirely in the final positions of these sliders. When you hear about GPT-4 having a trillion parameters, it just means the equation has a trillion adjustable sliders.",
          ),
        ],
      },
      {
        kind: "p",
        parts: [
          s(
            "If the model starts with random parameters, how does it get smarter? It needs a way to know exactly how wrong its current predictions are. This is the job of the Loss Function. ",
          ),
          x(
            "The Loss Function compares the model's prediction to the actual correct answer (the label), and outputs a single number: the 'Loss'.",
            "If the model predicts a user will churn with 99% confidence, and the user actually stays, the Loss is huge. If the model predicts 10% churn and they stay, the Loss is small.",
          ),
          s(
            " This is where product management intersects with deep math. The model blindly tries to drive the Loss number to zero. If you define your Loss Function to penalize false positives and false negatives equally, the model will treat them equally—even if a false positive costs your business $10 and a false negative costs $10,000. You must align the math with your business reality.",
          ),
        ],
      },
      {
        kind: "p",
        parts: [
          s(
            "Now the model knows it is wrong. How does it know which of its billions of parameters to adjust, and in what direction? ",
          ),
          x(
            "It uses calculus to perform a process called Gradient Descent. The algorithm calculates the 'gradient' (the slope) of the error with respect to every single parameter.",
            "Think of the model as a blindfolded hiker trying to find the bottom of a valley. They feel the ground with their feet to figure out which way is downhill, take a step in that direction, and repeat. Each 'step' is a tiny adjustment to the parameters.",
          ),
          s(
            " This is why training takes massive amounts of compute and GPUs. For every piece of training data, the model predicts, calculates the loss, and computes the slope for billions of parameters to take one tiny step downhill. It repeats this millions of times until it reaches the bottom of the valley (minimum error).",
          ),
        ],
      },
      {
        kind: "p",
        parts: [
          s(
            "The training process (gradient descent) is incredibly expensive and slow. But once the model hits the bottom of the valley, training is over. The parameters are locked in place. ",
          ),
          x(
            "Using the locked model to make new predictions in the real world is called 'Inference'.",
            "During inference, there is no backpropagation, no gradient descent, and no learning. The data just flows through the fixed equation. This is why using ChatGPT (inference) takes seconds, but building ChatGPT (training) took months and millions of dollars.",
          ),
          s(
            " As a PM, remember that models in production do not 'learn' on the fly from user interactions unless you explicitly design a feedback loop that saves that data for a future re-training run.",
          ),
        ],
      },
    ],
    examples: [
      {
        title: "The 'Clickbait' Loss Function Problem",
        body: "Scenario: A PM at a video platform wants a recommendation model to show users videos they like. They tell the data science team to optimize for 'watch time'.\n\nResult: The Loss Function penalizes the model when a user stops watching. The model quickly learns through gradient descent that conspiracy theories and outrage content maximize watch time. The model successfully minimized its loss, but destroyed the product experience. The PM should have defined the Loss Function to include user satisfaction metrics.",
      },
      {
        title: "Gradient Descent in House Pricing",
        body: "Scenario: Predicting the price of a house. The parameters are the multipliers for square footage, number of bathrooms, and age.\n\nResult: On day one, the model randomly guesses a multiplier of $10 per sq ft. It predicts a 2,000 sq ft house is $20,000. The real price is $200,000. The Loss is huge. Gradient descent calculates the slope, realizes it needs to increase the multiplier, and nudges it to $20. It repeats this against historical data until it settles on the optimal $100 per sq ft.",
      },
      {
        title: "Training vs Inference Costs",
        body: "Scenario: A startup wants to build a custom language model.\n\nResult: Training the model requires renting 1,000 GPUs for a month to perform the quadrillions of gradient descent calculations required to adjust the parameters. This costs $2 million. However, once deployed for *inference*, the parameters are frozen. It only requires 1 GPU to run the math forward and serve predictions to users in real-time, costing just a few dollars an hour.",
      },
    ],
    quiz: [
      {
        q: "What is a 'parameter' or 'weight' in a Machine Learning model?",
        options: [
          "The historical data used to train the model.",
          "An adjustable numerical value inside the model's equation that gets tuned during training.",
          "The code written by engineers to define business rules.",
          "The final output prediction of the model.",
        ],
        correct: 1,
        correctFeedback:
          "Correct! The intelligence of a trained model is physically stored as the final, tuned values of these parameters.",
        wrongFeedback:
          "Look for the answer that describes a 'tunable' piece of the model's internal math.",
      },
      {
        q: "Why should a Product Manager care deeply about the Loss Function?",
        options: [
          "Because the PM needs to write the calculus code for gradient descent.",
          "Because it determines how fast the model runs in production.",
          "Because the Loss Function is the mathematical translation of the product's goal—if it misaligns with business value, the model will confidently optimize for the wrong thing.",
          "Because it determines whether to use ML or Deep Learning.",
        ],
        correct: 2,
        correctFeedback:
          "Exactly. The model blindly minimizes the Loss Function. Defining what constitutes an error is fundamentally a product and business decision.",
        wrongFeedback:
          "Think about how the Loss Function dictates what the model *cares* about optimizing.",
      },
      {
        q: "Once an ML model is deployed to production and users are interacting with it (Inference), is it constantly updating its parameters in real-time using Gradient Descent?",
        options: [
          "Yes, models learn continuously from every interaction.",
          "No, inference just passes data through locked parameters. Learning only happens during dedicated training runs.",
          "Yes, but only for Deep Learning models.",
          "No, but it updates its parameters once a day automatically.",
        ],
        correct: 1,
        correctFeedback:
          "Spot on. Inference is just running the math forward. To make the model smarter, you have to collect new data and do a whole new training run.",
        wrongFeedback:
          "Remember that updating parameters is incredibly expensive and is called 'training'.",
      },
    ],
  },
  {
    slug: "ai-vs-ml-vs-deep-learning",
    number: 8,
    shortTitle: "AI vs ML vs Deep Learning",
    title: "AI vs ML vs Deep Learning",
    readingMinutes: 18,
    summary:
      "The hierarchy you'll explain 100 times in your career. Three terms that get used interchangeably in every roadmap, every vendor pitch, and every all-hands — and three nested ideas that, once you can separate them cleanly, change how you scope work and how seriously your engineers take you.",
    keyTakeaway:
      "AI is the umbrella, machine learning is one approach to AI, and deep learning is one approach to ML. Every deep learning system is ML; every ML system is AI; the reverse is never true.",
    pmCallout:
      "As a PM: the version of you that conflates these terms gets handed feature requests. The version that separates them cleanly gets handed strategy.",
    body: [
      {
        kind: "h",
        number: "1.1",
        title: "What is Artificial Intelligence",
        subtitle: "More than robots — why every software decision is now an AI decision",
      },
      {
        kind: "take",
        text: "AI is a behaviour label, not a technique. The moment software starts making judgement calls instead of executing instructions, you're inside the AI conversation — even when nothing modern is happening under the hood.",
      },
      {
        kind: "why",
        text: "The next time a vendor opens a procurement call with 'we're an AI-first platform', you'll know that sentence describes their marketing posture, not their architecture. Your follow-up question — which judgement calls is your software actually making? — sets the tone for the rest of the meeting.",
      },
      {
        kind: "p",
        parts: [
          s(
            "Walk into any product review in 2026 and someone will say their feature is 'AI-powered' before they've described what it does. The phrase is doing a lot of work — and most of it is rhetorical. ",
          ),
          x(
            "Artificial intelligence is the umbrella term for any software system that does something we'd call intelligent if a human did it, which is so broad that it captures everything from a thermostat with three temperature rules to GPT-5.",
            "'Intelligent' here is a behavioural test, not a technical one. If a human would have made the decision and now software does, the software gets the AI label — regardless of whether it learned anything.",
          ),
          s(
            " What that means in practice is that 'AI' describes the behaviour, not the mechanism. A chess engine that brute-forces every move with hand-coded heuristics is AI. A model trained on every game ever played is also AI. The label tells you nothing about how the thing was built.",
          ),
        ],
      },
      {
        kind: "p",
        parts: [
          s("This breadth is why AI has been a moving target since the 1950s. "),
          x(
            "Researchers call this the 'AI effect': the moment a problem gets solved, people stop calling the solution AI and rebrand it as ordinary engineering.",
            "Spell-check, route planning, OCR, chess engines — all were considered AI when they were unsolved. Once they worked, they became 'just software'. The label tracks novelty more than technique.",
          ),
          s(
            " Today the frontier is reasoning, agency, and open-ended generation; in five years it'll be something we don't yet know to ask about. The category line keeps moving, which is exactly why anchoring decisions to it is unstable.",
          ),
        ],
      },
      {
        kind: "p",
        parts: [
          s(
            "For product work, the practical consequence is that 'AI' on its own is not a category you can scope, price, or ship against — it's a positioning choice. ",
          ),
          x(
            "Every software feature that involves a recommendation, a ranking, a prediction, a generated output, or an automated decision now sits inside the AI conversation whether or not it uses any modern technique.",
            "That's why a sort order, a search relevance tweak, and a generative draft tool end up on the same roadmap slide. The grouping is rhetorical, not technical, and it forces conversations that don't actually belong together.",
          ),
          s(
            " Your CEO is suddenly asking the support team why their macros aren't 'AI-powered' and roadmap reviews drag onto tangents about LLMs that don't apply to half the features in the deck. The word has eaten the discourse. ",
          ),
          x(
            "The job is no longer 'ship the AI feature' — it's to decide, for each piece of behaviour in the product, whether intelligence belongs there at all.",
            "Some workflows benefit from a learned model. Some get worse with one. PMs who can tell the difference upfront save quarters of rework.",
          ),
        ],
      },
      {
        kind: "p",
        parts: [
          s("The mental shift you need is smaller and more useful than the hype around it. "),
          x(
            "Every product decision now has an AI dimension — even saying 'we're not using AI here' is a deliberate position you have to justify, not a default.",
            "You don't have to ship AI everywhere. You do have to be able to say, in one sentence, why you didn't — and that sentence needs to land with both engineering and the exec team.",
          ),
          s(
            " Treat 'AI' as a category, not an answer. Whenever you hear it, your next question should be: what kind? ",
          ),
          x(
            "Doing this reliably — even in stand-ups, even on Slack — is the first habit that separates PMs who can run an AI roadmap from PMs who can only narrate one.",
            "It also slowly trains the team around you. Engineers stop dressing rules up as models, and execs stop asking for 'AI' when they mean 'a better filter'.",
          ),
        ],
      },
      {
        kind: "ex",
        title: "Stripe Radar — AI as a hybrid product, not a single technique",
        body: "Stripe Radar markets itself as AI for fraud detection, and it genuinely is — but it sits on top of an explicit rules engine that merchants can edit themselves. The dashboard separates 'rule blocks' from 'model risk score' and shows both for every transaction. That separation is not an implementation detail; it's the product. Merchants tune each layer independently, which builds more trust than hiding the seams ever would. The wider lesson: mature AI products are almost always hybrids, and exposing the layers is a feature.",
      },
      {
        kind: "ex",
        title: "Spotify autoplay — one user-facing 'AI', many internal levers",
        body: "Spotify's autoplay queue isn't one model; it's a thicket of recommenders, popularity counters, recency rules and editorial overrides that together choose the next track. From the listener's perspective it's just 'Spotify's AI'. From the engineering side, calling the whole thing AI obscures which lever you'd pull when a user complains the queue feels repetitive. PMs who can name the layers can diagnose feedback; PMs who can't end up filing every complaint as a generic model problem and waiting for ML to fix it.",
      },
      {
        kind: "ex",
        title: "Notion AI — wrapping someone else's intelligence",
        body: "Notion AI shipped as a thin wrapper over a third-party large language model, with no proprietary model and no proprietary training data on day one. Notion still ships it as 'Notion AI', which is fine — but it tells you exactly what's inside the box: a vendor relationship, a prompt library, and a pricing margin. For a competing product team, knowing this changes the build-versus-buy conversation completely. You're not competing with a model, you're competing with a distribution channel.",
      },
      {
        kind: "trans",
        text: "That umbrella shrinks the moment you go one layer deeper, into the specific approach that powers most modern AI: machine learning.",
      },

      {
        kind: "h",
        number: "1.2",
        title: "What is Machine Learning",
        subtitle: "When systems learn from data instead of following rules",
      },
      {
        kind: "take",
        text: "Machine learning is the moment you stop writing rules and start curating data. The system's behaviour becomes a function of what you trained it on — which means your dataset, not your code, is the product surface area.",
      },
      {
        kind: "why",
        text: "In your next sprint review, when an engineer says 'the model is underperforming on enterprise accounts', the right reflex isn't to ask what's broken in the code. It's to ask what enterprise data was in the training set. ML bugs almost always live in the data first.",
      },
      {
        kind: "p",
        parts: [
          s(
            "Picture two ways to build a spam filter. The first is a senior engineer writing 200 lines of if-statements: block this sender, flag that keyword, score these patterns. The second is showing a system a hundred million emails labelled spam or not-spam and letting it work out the pattern itself. ",
          ),
          x(
            "Machine learning is the second approach: instead of programming behaviour directly, you give the system examples and let an algorithm derive the rules from them.",
            "There is no person sitting down writing 'if X then Y'. There is a person preparing X and Y and pressing 'train', and the rules fall out as a side-effect.",
          ),
          s(
            " The first approach is engineering. The second is closer to teaching, with all the messiness that implies.",
          ),
        ],
      },
      {
        kind: "p",
        parts: [
          s("Mechanically, ML systems are statistical pattern-fitters. "),
          x(
            "A learning algorithm starts with a randomly-initialised model, makes predictions, sees how wrong each one was, nudges the model toward less-wrong, and repeats — often millions of times — until predictions stabilise.",
            "Nothing 'understands' email or fraud or churn in any human sense. The model is finding which features (words, timestamps, account ages) correlate with the labels you provided.",
          ),
          s(
            " The result is a model that maps inputs to outputs reasonably well on the kind of data it was trained on — and behaves unpredictably on the kind it wasn't.",
          ),
        ],
      },
      {
        kind: "p",
        parts: [
          s(
            "The business consequence is that ML systems behave more like agricultural products than mechanical ones. ",
          ),
          x(
            "They drift. The world shifts, user behaviour changes, fraud patterns evolve, and yesterday's accurate model quietly becomes today's inaccurate one — without any code change at all.",
            "This is called concept drift. It's the slow, invisible bug class that has no stack trace and shows up in your quarterly metrics rather than in your error logs.",
          ),
          s(
            " Every serious ML system has a retraining cadence, a held-out evaluation set, and someone whose job is to watch performance over time. Shipping an ML feature once and walking away is not shipping — it's planting. ",
          ),
          x(
            "The cost structure also shifts: most of the bill is data preparation, labelling, and ongoing evaluation, not the brief moments of training compute everyone fixates on.",
            "Vendors and internal teams alike tend to under-budget the data side by an order of magnitude. The model is the photogenic part; the data pipeline is where projects actually live or die.",
          ),
        ],
      },
      {
        kind: "p",
        parts: [
          s(
            "What you do differently as a PM is treat ML features as ongoing systems, not as launches. ",
          ),
          x(
            "Your acceptance criteria stop being 'ships by Friday' and start being 'achieves precision X at recall Y on this evaluation set, with a plan for what we do when it drops'.",
            "You'll write specs that include evaluation metrics, retraining triggers, fallback behaviours, and human-review thresholds. None of those existed in your old PRDs.",
          ),
          s(
            " You'll also stop asking 'is the model done?' and start asking 'is the model good enough this week?' That single reframing changes how your team plans, staffs, and resources every ML investment for the rest of your career. ",
          ),
          x(
            "Critically, you'll learn to distinguish a real ML system from a hand-coded one wearing an ML t-shirt — because the operational reality is wildly different.",
            "Rules don't drift, don't need labelled data, and don't retrain. If the team isn't doing any of those things, you don't have an ML system — you have a rules engine with good branding.",
          ),
        ],
      },
      {
        kind: "ex",
        title: "Gmail Smart Reply — the canonical supervised-learning product",
        body: "Gmail's Smart Reply suggests three short responses based on the email you're reading. It's trained on billions of real reply pairs, which is why its suggestions feel idiomatic rather than templated. The model wasn't told 'when someone asks about lunch, suggest a time'; it inferred that pattern from the data. The product implication is that the team can't easily 'fix' an off suggestion by editing rules — they have to retrain or post-filter, which is a fundamentally different control surface from a rule-based reply system.",
      },
      {
        kind: "ex",
        title: "Shopify Fraud Protect — the cost of getting data wrong",
        body: "Shopify's fraud protection is an ML system trained on merchant transaction history across the platform. Its accuracy depends on having enough fraud examples in the training data, which is why it works better for high-volume merchants and underperforms on niche verticals. That isn't a bug; it's a direct consequence of the data distribution. PMs working on similar products learn quickly that 'the model needs more data from your segment' is a real and frequent answer, not a stalling tactic.",
      },
      {
        kind: "ex",
        title: "Zillow's Zestimate — what happens when drift wins",
        body: "Zillow's home-price estimates are an ML system trained on historical sales data. When the housing market shifted suddenly in 2021–2022, Zillow's home-buying arm relied on Zestimate-derived predictions that quietly stopped matching reality, and the company took a $500M+ writedown before shutting the program. The model didn't break; the world changed faster than the retraining cadence could keep up. It's the most expensive case study in concept drift PMs have, and the lesson is operational: an ML system without monitoring is a balance-sheet risk.",
      },
      {
        kind: "trans",
        text: "ML is the family of techniques. The branch of that family that powers nearly every breakthrough you've heard about in the last decade is deep learning.",
      },

      {
        kind: "h",
        number: "1.3",
        title: "What is Deep Learning",
        subtitle: "Why neural networks changed everything",
      },
      {
        kind: "take",
        text: "Deep learning is the kind of ML that learns its own features. That single capability is what cracked vision, speech, translation and language — and why the last decade of AI progress looks like a wall, not a slope.",
      },
      {
        kind: "why",
        text: "When an engineer tells you a feature 'needs a deep learning model', they are telling you three things: it needs a lot of data, it needs a lot of compute, and you will not be able to explain individual decisions to a customer or regulator. Plan for all three before you commit on the roadmap.",
      },
      {
        kind: "p",
        parts: [
          s(
            "For decades, getting an ML system to do anything useful with images, speech or text required a small army of domain experts to hand-design the inputs. ",
          ),
          x(
            "You couldn't just hand a model raw pixels — you'd hand it carefully engineered features like edge counts, colour histograms, or speech spectrograms, and the model learned from those.",
            "This is called feature engineering. It was slow, fragile, and almost as much craft as science. Different teams produced wildly different results on the same raw data.",
          ),
          s(
            " Deep learning collapsed all of that. A deep neural network takes raw inputs — pixels, audio waveforms, characters — and learns the useful features for itself, layer by layer.",
          ),
        ],
      },
      {
        kind: "p",
        parts: [
          s(
            "The 'deep' in deep learning is literal: it refers to networks with many layers of artificial neurons stacked on top of each other, each transforming the output of the layer below. ",
          ),
          x(
            "Early layers learn primitive patterns like edges or phonemes; middle layers compose those into shapes or syllables; later layers compose those into faces or words.",
            "Nobody designs that hierarchy. It emerges from the data during training. That self-organising property is the actual breakthrough.",
          ),
          s(
            " Modern models — the ones behind ChatGPT, image generators, speech transcription — have hundreds of layers and billions of weighted connections, but the underlying mechanism is the same.",
          ),
        ],
      },
      {
        kind: "p",
        parts: [
          s("The business consequence is a fundamental change in what is buildable. "),
          x(
            "Whole categories of product — usable voice assistants, real-time translation, conversational agents, image generation, code completion — were essentially impossible before deep learning and are essentially commodities after it.",
            "The 2012 ImageNet result (when a deep network crushed traditional computer vision overnight) and the 2022 ChatGPT launch are not separate events; they're the same arc compounding for ten years.",
          ),
          s(
            " That has reshaped competitive moats: features that were defensible because they were hard to build are now table stakes, and the new moats are data access, distribution, and product surfaces. ",
          ),
          x(
            "The trade-off is that deep models are essentially uninterpretable — even the people who built them can't tell you why a specific input got a specific output.",
            "Their 'knowledge' is smeared across billions of weights with no clean mapping back to human concepts. You can probe behaviour, but you cannot read the rules.",
          ),
        ],
      },
      {
        kind: "p",
        parts: [
          s(
            "What you do differently as a PM is treat deep learning as a different cost class entirely. ",
          ),
          x(
            "Training a serious deep model costs anywhere from thousands to hundreds of millions of dollars in compute, and inference at scale has a per-request cost you have to design around.",
            "This is why almost no product team trains their own large model. They fine-tune existing ones, or call hosted APIs, and design unit economics around tokens per request.",
          ),
          s(
            " You'll also stop promising explainability you can't deliver. 'Why did the model say this?' is rarely answerable in the way executives or regulators want, and the honest answer needs to become a conversation about evaluation, guardrails, and human review rather than about inspection. ",
          ),
          x(
            "You'll learn to distinguish deep learning from classical ML in roadmap conversations, because the staffing, infrastructure, and timeline implications are completely different.",
            "Classical ML can ship in a sprint with a single engineer and a CSV. Deep learning, at any scale that matters, is a platform decision involving GPUs, MLOps, and ongoing eval infrastructure.",
          ),
        ],
      },
      {
        kind: "ex",
        title: "GitHub Copilot — deep learning as the entire product",
        body: "Copilot is a fine-tuned large language model wrapped in an IDE integration. There are essentially zero hand-written rules about what good code looks like; the model learned that from billions of lines of public code. That's why Copilot improves dramatically every time the underlying model changes, and why GitHub's product roadmap is more about prompts, context windows and editor surfaces than about the model itself. The deep model is the engine; the product is the chassis.",
      },
      {
        kind: "ex",
        title: "Adobe Firefly — deep learning as a defensibility play",
        body: "Adobe trained Firefly's image generation model on its own Stock library, deliberately avoiding scraped web content. That's a deep learning system with a non-technical moat: the data provenance is the differentiator, not the architecture. Enterprise customers buy Firefly partly because Adobe can indemnify outputs in a way competitors can't. It's a case study in how the relevant PM levers around deep learning often have nothing to do with the model itself.",
      },
      {
        kind: "ex",
        title: "Tesla Autopilot — what 'we can't explain decisions' means in practice",
        body: "Tesla's driving system is a deep neural network that takes raw camera input and outputs driving actions. When the car makes a surprising choice, even Tesla's engineers can't point to a specific reason — the decision is distributed across billions of weights. Regulators have repeatedly run into this opacity when investigating incidents, and Tesla's response is operational: more data, more evaluation, more shadow-mode testing, not better explanations. That's the deep-learning trade-off at industrial scale.",
      },
      {
        kind: "trans",
        text: "Three terms, three layers, and a precise relationship between them — which is the next thing you need to be able to draw on a whiteboard from memory.",
      },

      {
        kind: "h",
        number: "1.4",
        title: "The nested hierarchy explained",
        subtitle: "How AI, ML and DL relate — and why conflating them costs you credibility",
      },
      {
        kind: "take",
        text: "AI ⊃ ML ⊃ Deep Learning. Three nested circles, in that order, no exceptions. Holding the hierarchy in your head with that level of precision is the cheapest credibility upgrade available to a non-technical PM.",
      },
      {
        kind: "why",
        text: "In your next architecture review, when a staff engineer says 'this is ML but it's not deep learning', the look on their face will tell you whether you reacted in a way that earned the next ten minutes of their attention. The hierarchy is the price of admission to those conversations.",
      },
      {
        kind: "p",
        parts: [
          s("The cleanest way to hold these three terms in your head is as three nested circles. "),
          x(
            "AI is the outer circle: any system that behaves intelligently. Machine learning sits inside it: AI systems that learn from data. Deep learning sits inside ML: the subset that uses large neural networks.",
            "Every deep learning system is also ML and also AI. Every ML system is also AI. But plenty of AI is not ML (rule-based systems), and plenty of ML is not deep learning (classical statistical models).",
          ),
          s(
            " That asymmetry matters. The terms are not synonyms with different vibes — they describe progressively smaller and more specific commitments about how a system is built.",
          ),
        ],
      },
      {
        kind: "p",
        parts: [
          s(
            "Because of the nesting, the terms carry different information densities when used precisely. ",
          ),
          x(
            "Saying 'we use AI' commits to almost nothing. Saying 'we use ML' commits to data-driven learning. Saying 'we use deep learning' commits to a specific architecture, a specific cost profile, and a specific set of operational realities.",
            "The more specific the term, the more you've told your listener — and the more they can press you on the next question. Vagueness travels the other direction.",
          ),
          s(
            " Vendors and marketers exploit this gradient relentlessly: they use the broadest accurate term to signal modernity while preserving deniability about what's actually inside.",
          ),
        ],
      },
      {
        kind: "p",
        parts: [
          s(
            "The business consequence is that conflating these terms quietly misallocates resources and shapes wrong expectations across an organisation. ",
          ),
          x(
            "If your CEO walks out of an industry conference convinced that 'AI' and 'GPT' are interchangeable, they will ask your team to ship things that don't make sense for the underlying tech, and dismiss things that genuinely do.",
            "The cost shows up as months of misaligned roadmap, vendor contracts that don't deliver, and engineering hires for problems you don't have. None of it is recoverable cheaply.",
          ),
          s(
            " The same applies inside engineering: a product spec that asks for 'AI-powered search' is functionally three different specs depending on whether the team interprets it as a rules tweak, a learned ranker, or a generative answer layer. Each path takes a different quarter to build. ",
          ),
          x(
            "Using the most specific accurate term is a small habit that prevents a remarkable amount of organisational damage over time.",
            "It is also the single most reliable signal of an AI-literate operator. Engineers calibrate trust within the first few minutes of a meeting based on how you use these words.",
          ),
        ],
      },
      {
        kind: "p",
        parts: [
          s(
            "What you do differently as a PM is treat the hierarchy as an active vocabulary, not a piece of trivia. ",
          ),
          x(
            "In every document, every meeting, every Slack thread, use the most specific accurate term you have evidence for — and ask for evidence when someone uses one looser than they should.",
            "If a vendor says 'AI' and you suspect they mean rules, ask what's being learned. If they say 'ML' and you suspect they mean a neural network, ask about model size and inference cost. The precision compounds.",
          ),
          s(
            " You'll start hearing it from the other side: engineers who upgrade their term-of-art when talking to you are signalling that they trust you with the detail. That bidirectional precision is what real AI literacy looks like in practice. ",
          ),
          x(
            "The PMs who get listened to on AI strategy are not the ones who know the most papers — they're the ones who never use 'AI' when they mean 'ML', and never use 'ML' when they mean 'deep learning'.",
            "It is a small, public, repeatable habit. And it produces outsized credibility precisely because so few people in product roles bother with it.",
          ),
        ],
      },
      {
        kind: "ex",
        title: "Figma — three layers in one product surface",
        body: "Figma's product spans all three layers cleanly. Auto-layout is rule-based AI (no learning). Smart selection and search ranking use classical ML trained on user behaviour. The newer generative features (text-to-design, AI-assisted edits) are deep learning via large models. A PM at Figma who calls all three 'our AI features' is not wrong, but is also not useful in any planning conversation. Calling them by their actual layers is what unlocks meaningful trade-off discussions about cost, latency, and quality.",
      },
      {
        kind: "ex",
        title: "Salesforce Einstein — the marketing layer hiding the hierarchy",
        body: "Salesforce brands almost every intelligent feature in its platform as 'Einstein', from lead scoring (classical ML) to Einstein GPT (deep learning LLMs) to rule-based workflow automations marketed alongside them. From the outside it looks like one capability; internally it's three radically different systems with different teams, costs and reliability profiles. PMs evaluating Salesforce for an enterprise deal who can't decode which Einstein is which end up over-paying for capabilities they don't need and under-scoping the ones they do.",
      },
      {
        kind: "ex",
        title: "Duolingo — moving down the hierarchy deliberately",
        body: "Duolingo's lesson sequencing started as rules, moved to classical ML (a model called Birdbrain that predicts which exercises a learner needs next), and selectively added deep learning for things like speech evaluation and conversational practice. The company is unusually public about which layer each feature uses, partly because that clarity is what lets them control unit economics in a freemium product. It's a working example of using the hierarchy as a roadmap tool, not just a vocabulary one.",
      },
      {
        kind: "trans",
        text: "Once you can name the layers, the next skill is recognising when the layer being claimed isn't the layer being shipped — which usually starts with one specific question.",
      },

      {
        kind: "h",
        number: "1.5",
        title: "Rule-based systems vs learned systems",
        subtitle: "The question that exposes fake AI in vendor pitches",
      },
      {
        kind: "take",
        text: "If you could write the system as a list of if-statements, it's not machine learning — no matter what the slide says. The distinction is binary, auditable, and the single most useful diagnostic question in your AI vocabulary.",
      },
      {
        kind: "why",
        text: "In every vendor procurement call you'll run for the rest of your career, this is the question that saves you from buying a rules engine at AI prices. Ask it in the first ten minutes; the answer changes everything that comes after.",
      },
      {
        kind: "p",
        parts: [
          s("A rule-based system is software where every behaviour was written down by a human. "),
          x(
            "If income > $50k AND credit_score > 700 → approve loan. If subject_line contains 'lottery' → flag email. If user hasn't logged in for 14 days → send re-engagement email.",
            "These are deterministic. Same input, same output, every time. The logic is right there in the code and a human reviewer can audit it line by line.",
          ),
          s(
            " A learned system has no explicit rules. It has a trained model — a pile of weights — that maps inputs to outputs. The 'rules' are implicit and statistical, and they shift every time the model is retrained.",
          ),
        ],
      },
      {
        kind: "p",
        parts: [
          s(
            "Both are legitimate. They are just different products with different cost structures and different failure modes. ",
          ),
          x(
            "Rule-based systems are cheap to build, fast to run, easy to audit, and behave predictably under regulation. That's exactly why tax software, postcode lookups, business workflows, and most compliance logic live there.",
            "If the pattern is stable and writable, rules win on every operational dimension that matters. The only reason to leave them is that the pattern isn't stable or writable.",
          ),
          s(
            " Learned systems earn their keep when the pattern is too subtle, too high-dimensional, or too dynamic for a human to capture by hand. Recommendation, fraud, language, vision — all impossible to spec out as rules at any reasonable accuracy.",
          ),
        ],
      },
      {
        kind: "p",
        parts: [
          s(
            "The business consequence is that the cost gap between the two is roughly an order of magnitude, in both directions. ",
          ),
          x(
            "Rules-based features ship in days, run for fractions of a cent, and almost never surprise anyone. Learned systems take months to ship properly, cost real money to run, and surprise everyone occasionally.",
            "Choosing the wrong one for the problem is expensive: rules where you needed learning produce a brittle product; learning where you needed rules produces a slow, opaque, expensive feature that does what an if-statement could have done.",
          ),
          s(
            " The asymmetry that vendors exploit is that 'learned' sounds more sophisticated, so rules systems frequently get dressed up as ML in sales material. The dress-up doesn't cost the vendor anything — it costs you in misaligned expectations after the deal closes. ",
          ),
          x(
            "The honest diagnostic is one sentence long: could you, in principle, have written this as a list of if-statements?",
            "If the answer is yes — even a long list — it's a rule-based system. The 'AI' label is decoration, and the product should be evaluated as a rules engine on rules-engine metrics.",
          ),
        ],
      },
      {
        kind: "p",
        parts: [
          s(
            "What you do differently as a PM is ask the rules-versus-learning question early and out loud, on every AI feature and every vendor evaluation. ",
          ),
          x(
            "Ask the engineer building it. Ask the vendor selling it. Ask the analyst writing about it. The answer is either crisp or evasive, and either tells you what you need to know.",
            "Crisp answers ('it's a gradient-boosted classifier on these features') are a green flag, even if you don't fully understand the technique. Evasive answers ('our proprietary intelligence layer') are a red flag, always.",
          ),
          s(
            " You'll also stop being embarrassed about shipping rules. A rule-based feature shipped fast and explained honestly almost always outperforms a learned feature shipped late and explained badly. ",
          ),
          x(
            "'We considered ML and chose rules because the pattern is stable' is one of the most senior-sounding sentences a PM can say in a roadmap review, and almost nobody says it.",
            "It signals that you understand the trade-off and made a deliberate choice, which is exactly the disposition the AI hype cycle is currently selecting against.",
          ),
        ],
      },
      {
        kind: "ex",
        title: "TurboTax — the rules engine no one is embarrassed about",
        body: "TurboTax encodes the U.S. tax code as a vast decision tree of rules. It is one of the most successful pieces of consumer software ever built, and it contains essentially zero machine learning in the parts that calculate your taxes. Intuit doesn't market it as AI, and that honesty is part of the trust. The product lesson is that rules are not a downgrade — for codified domains, they are the correct choice, and pretending otherwise would actively hurt the product.",
      },
      {
        kind: "ex",
        title: "Calendly — 'AI scheduling' that's really a calendar",
        body: "Calendly's core scheduling is a rules engine: it finds open slots in two calendars and applies user preferences for working hours, buffer time, and meeting length. The company has historically resisted calling this AI, which is part of why enterprise buyers trust it. When competitors launched 'AI scheduling assistants' that turned out to be the same rules logic with a generative wrapper, customers noticed quickly and the category narrative correctly settled back to 'scheduling automation'. The market punished the dishonest framing.",
      },
      {
        kind: "ex",
        title: "Klarna's customer service overhaul — the inverse case",
        body: "Klarna publicly replaced large portions of its customer-service workflow with an LLM-based agent, reporting work equivalent to 700 full-time agents in the first month. The interesting detail is that they were explicit about what was learned (the conversational layer) versus what stayed as rules (refund logic, eligibility, escalation paths). That layered honesty is what made the announcement credible to operators rather than a marketing claim. Just as you shouldn't dress rules up as ML, you also shouldn't hide the rules that hold a real ML system together.",
      },
      {
        kind: "trans",
        text: "Knowing the diagnostic is half the work. Having a reusable script for applying it in every vendor conversation is the other half — and it fits on a sticky note.",
      },

      {
        kind: "h",
        number: "1.6",
        title: "PM decision lens: spotting real AI vs marketing AI",
        subtitle: "The 3 questions to ask before trusting any 'AI-powered' claim",
      },
      {
        kind: "take",
        text: "Three questions, asked in order, separate real AI work from marketing veneer in under twenty minutes. The questions are free to ask and expensive to skip — they are the closest thing the field has to a universal due-diligence script.",
      },
      {
        kind: "why",
        text: "Next time you sit through a vendor demo or an internal pitch with 'AI-powered' in the deck, ask these three questions in order and watch the room. The PMs who consistently ask them get put on AI strategy committees; the ones who don't get handed the rollout.",
      },
      {
        kind: "p",
        parts: [
          s("Question one: is there a trained model, or are these hand-written rules? "),
          x(
            "This is the rules-versus-learning diagnostic from the previous section, applied as the opening move. If the answer is 'no model, just rules', the conversation is no longer about AI — it's about software, with all the normal evaluation criteria.",
            "If the answer is vague — 'it's our proprietary intelligence layer' — treat that as a 'no' until proven otherwise. Real ML teams answer this question crisply because they're proud of the answer.",
          ),
          s(
            " A useful follow-up: 'what kind of model, and what does it predict?' One sentence of specificity here separates a serious team from a marketing one. You don't need to understand the technique; you need to hear that they do.",
          ),
        ],
      },
      {
        kind: "p",
        parts: [
          s("Question two: what was it trained on, and how do you measure when it's wrong? "),
          x(
            "Every real ML system has a training dataset, a held-out evaluation set, and at least one quantitative quality metric (accuracy, precision, recall, F1, AUC, BLEU — the specific metric matters less than that there is one).",
            "If the vendor can't tell you the dataset or the metric, the model either doesn't exist or hasn't been evaluated. Both are disqualifying for any use case that matters.",
          ),
          s(
            " 'It just works really well' is not an evaluation metric. Neither is a customer logo wall. Push politely until you get a number with a denominator — precision on what set, measured how, refreshed when. ",
          ),
          x(
            "Bonus follow-up: 'what does it look like when it's wrong?' Mature teams have a vivid, specific answer; immature ones produce a hedge.",
            "Knowing the failure modes is how you scope the human-in-the-loop layer, the guardrails, and the support load. Without that answer, you cannot price the product into your stack honestly.",
          ),
        ],
      },
      {
        kind: "p",
        parts: [
          s("Question three: what happens when it's wrong, and how do you retrain? "),
          x(
            "A mature ML system has a feedback loop: errors get captured, labelled, folded into the next training run, and the resulting model is re-evaluated before it ships. The retraining cadence is on a roadmap somewhere.",
            "If there is no answer here, the model is frozen — and quietly getting worse as the world shifts around it. A frozen model in a dynamic domain is a slow-motion outage you've signed a multi-year contract for.",
          ),
          s(
            " The retraining story is as important as the launch story. Anyone can ship a model once; the operational discipline is in keeping it accurate as reality changes underneath it. ",
          ),
          x(
            "The third question is also where most vendor pitches collapse, because most vendor pitches are optimised for the demo and not for the second year of the contract.",
            "Asking it early is a kindness: it tells the serious vendors that you're worth talking to, and it tells the unserious ones that you're not the buyer they were hoping for.",
          ),
        ],
      },
      {
        kind: "p",
        parts: [
          s(
            "What you do differently as a PM is internalise these three questions until they're automatic. ",
          ),
          x(
            "Memorise them. Write them on a sticky note. Bring them to every demo, every vendor call, every architecture review, every roadmap meeting where someone says 'AI-powered' without immediately defining the term.",
            "They cost nothing to ask, take under twenty minutes to work through, and reliably separate the AI work that's worth your team's quarter from the AI work that isn't.",
          ),
          s(
            " You'll also use them inward. The next time your own team proposes an 'AI-powered' feature, the three questions tell you whether the proposal is ready for a PRD or still needs a discovery sprint. ",
          ),
          x(
            "That symmetry — applying the same rigour to your own roadmap that you apply to vendor pitches — is what makes a PM trusted on AI strategy across an organisation.",
            "The trust compounds. Within a year of consistently asking these three questions, you'll be the person engineering teams loop in early on AI decisions, and the person execs ask before they sign anything that says 'AI' on the order form.",
          ),
        ],
      },
      {
        kind: "ex",
        title: "The 'AI assistant' that was a regex — a real procurement story",
        body: "A mid-market SaaS company evaluated an 'AI-powered customer intent classifier' for $80K/year. Three questions in, the vendor admitted the system was a list of 400 regex patterns hand-maintained by their support team — no model, no training data, no evaluation metric. The buyer renegotiated to a $12K/year rules-engine contract and used the savings to build a real ML classifier internally the following quarter. The three questions paid for themselves several times over in a single call.",
      },
      {
        kind: "ex",
        title: "Intercom Fin — a vendor that passes the three questions",
        body: "Intercom's Fin support agent is explicit on all three fronts: it's an LLM-based system with retrieval over your help centre, evaluation metrics are published per customer (resolution rate, escalation rate), and the retrieval index updates continuously as content changes. None of that is in the marketing copy; all of it is one click into the docs. The signal isn't that they have the answers — it's that they expose them without being pushed, which is what you want to see in a serious AI vendor.",
      },
      {
        kind: "ex",
        title: "Internal AI features — applying the lens to your own team",
        body: "A PM at a fintech proposed an 'AI-powered transaction categorisation' feature in a quarterly planning session. Applying the three questions to her own proposal: there was no model yet (rules), no labelled dataset (the data team hadn't started), and no retraining plan (no one had thought about it). The proposal was rebadged as a rules-based v1 with an ML upgrade path scoped for the following quarter, and shipped on time as rules. The same lens that protects you from vendor hype protects you from your own.",
      },
      {
        kind: "trans",
        text: "Six sections in, you have the vocabulary, the hierarchy, the diagnostic, and the script. The chapter quiz is where you find out whether you have the instincts.",
      },
    ],
    examples: [],
    quiz: [
      {
        q: "A roadmap deck has a slide titled 'AI-powered onboarding'. The feature is a series of if-statements that show different welcome screens based on the user's role, plan, and signup source. Which of these is the most credibility-preserving thing to say in the review?",
        options: [
          "'Great — let's make sure we benchmark it against deep learning approaches.'",
          "'This is a rule-based system that may be marketed as AI, but it isn't ML — let's evaluate it as a rules engine.'",
          "'We should add a neural network so it counts as real AI.'",
          "'AI and rules are the same thing at this scale — the distinction doesn't matter.'",
        ],
        correct: 1,
        correctFeedback:
          "Exactly. Rules-based logic can carry an AI label loosely, but the operational reality is a rules engine and that's how it should be scoped, priced, and reviewed. Calling it out doesn't kill the feature — it lets the team plan honestly.",
        wrongFeedback:
          "The chapter opens on this exact mistake: treating 'AI' as a quality bar rather than a behaviour label. The question isn't 'how do we make it more AI?' — it's 'what kind of AI is this, and is that the right choice for this problem?' Re-read section 1.1.",
      },
      {
        q: "An engineer says the recommendation model 'works great in the test set but performance dropped 8% on enterprise accounts last quarter, and we think it's drift'. What is the underlying issue she's describing?",
        options: [
          "A bug in the recommendation code that needs to be patched.",
          "The model was trained on data that no longer reflects current enterprise behaviour, so its predictions are degrading even though nothing changed in the code.",
          "The test set is the wrong size and needs to be expanded.",
          "The model needs to be replaced with a deep learning version.",
        ],
        correct: 1,
        correctFeedback:
          "Right. Concept drift is the silent bug class of ML systems: no stack trace, no code change, just quietly worsening metrics as the world shifts. The fix is operational — retraining cadence, fresh evaluation data — not a code patch.",
        wrongFeedback:
          "Drift isn't a bug in the traditional sense; nothing about the code is broken. The model is a snapshot of past data and the world has moved on. Re-read section 1.2 on why ML features behave more like agricultural products than mechanical ones.",
      },
      {
        q: "A founder asks why your team can't 'just explain' why the deep-learning fraud model declined a specific transaction, the way the old rules engine could. Which response best reflects what's actually going on?",
        options: [
          "'We can — we just need to ask the engineers to log the rules the model used.'",
          "'Deep models distribute their behaviour across billions of weights, so per-decision explanations aren't directly available — what we can do is publish evaluation metrics, build a human-review path, and use simpler models where regulation requires explanation.'",
          "'Deep learning is just ML, and ML is fully explainable.'",
          "'We should remove the AI entirely until we can explain every decision.'",
        ],
        correct: 1,
        correctFeedback:
          "Right. The honest answer is operational: real evaluation, review paths, and a deliberate choice about where deep learning is and isn't appropriate. That framing turns an unanswerable question into a manageable one.",
        wrongFeedback:
          "Deep models genuinely don't have readable rules — their 'knowledge' lives in weight matrices that don't map to human concepts. The PM job is to convert 'why did it decide this?' into a conversation about evaluation, guardrails, and human review. Re-read section 1.3.",
      },
      {
        q: "Which statement most accurately describes the relationship between AI, machine learning, and deep learning?",
        options: [
          "They're three names for substantially the same set of techniques.",
          "Deep learning is a kind of machine learning, which is one approach to AI; all deep learning is ML and all ML is AI, but not the reverse.",
          "AI is a kind of machine learning, which is a kind of deep learning.",
          "Machine learning and deep learning are separate fields that occasionally overlap.",
        ],
        correct: 1,
        correctFeedback:
          "Exactly. Nested circles, in that order, no exceptions. Holding this precisely is the cheapest credibility upgrade in your AI vocabulary.",
        wrongFeedback:
          "The relationship is strict containment: deep learning ⊂ machine learning ⊂ artificial intelligence. Every DL system is ML and AI; not all AI is ML, and not all ML is DL. Re-read section 1.4.",
      },
      {
        q: "A vendor pitches an 'AI-powered customer health score'. In the demo, they admit there's no trained model — the score is a weighted sum of nine product-usage signals chosen by their consulting team. Which framing is most accurate?",
        options: [
          "It's machine learning, because it produces a score from data.",
          "It's deep learning, because the score combines multiple signals.",
          "It's a rule-based system that has been marketed as AI; it may still be useful, but it should be evaluated on rules-engine criteria rather than on ML metrics.",
          "It's not software at all.",
        ],
        correct: 2,
        correctFeedback:
          "Right. A hand-tuned weighted sum is a rules engine, not ML. That doesn't make it bad — it makes it a different product, with different operational properties, and you should evaluate it accordingly.",
        wrongFeedback:
          "Combining signals or producing a score isn't what makes something ML. ML requires that the system learned the combination from labelled data, not that a consultant chose the weights. Re-read section 1.5.",
      },
      {
        q: "You have twenty minutes with an 'AI-powered' vendor in a procurement call. Which set of three questions, asked in order, most reliably separates real AI work from marketing veneer?",
        options: [
          "'How fast is it?', 'What language is it written in?', 'Does it run on the cloud?'",
          "'Is there a trained model or is this rules?', 'What was it trained on and how is performance measured?', 'What happens when it's wrong and how do you retrain?'",
          "'Which LLM do you use?', 'Are you GPT-4 or Claude?', 'Do you have a chatbot?'",
          "'Who are your biggest customers?', 'When was the company founded?', 'What's your pricing?'",
        ],
        correct: 1,
        correctFeedback:
          "Exactly. Model vs. rules, training data and evaluation, retraining and failure handling — those three, in order, expose almost every gap between an AI pitch and an AI product. The questions are free to ask and expensive to skip.",
        wrongFeedback:
          "The diagnostic isn't about speed, cloud, or which LLM is under the hood — it's about whether anything is being learned, whether anyone is measuring it, and whether it stays accurate as the world changes. Re-read section 1.6.",
      },
    ],
  },
];

export const conceptBySlug = (slug: string): Concept | undefined =>
  concepts.find((c) => c.slug === slug);

export const nextConcept = (slug: string): Concept | undefined => {
  const i = concepts.findIndex((c) => c.slug === slug);
  return i >= 0 && i < concepts.length - 1 ? concepts[i + 1] : undefined;
};

export const prevConcept = (slug: string): Concept | undefined => {
  const i = concepts.findIndex((c) => c.slug === slug);
  return i > 0 ? concepts[i - 1] : undefined;
};
