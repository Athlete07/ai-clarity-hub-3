export const chapter3 = {
  slug: "pm-training-vs-inference",
  number: 3,
  shortTitle: "Training vs Inference",
  title: "Training vs Inference — Two completely different operations with very different costs",
  readingMinutes: 15,
  summary:
    "The most expensive mistake PMs make in AI is conflating the cost of building a model with the cost of running one. Training is a massive, upfront capital expenditure. Inference is a variable, ongoing operational expense. If you don't design your product around this distinction, your viral success will bankrupt your margins.",
  keyTakeaway:
    "Training is a massive fixed R&D cost; inference is an ongoing variable cost. You rent intelligence during inference to avoid the capital expenditure of training.",
  pmCallout:
    "As a PM: When your CEO asks why you aren't training your own model, you must explain that you are buying variable inference to avoid fixed capital expenditure. You only migrate to self-hosted models when your volume justifies the fixed infrastructure cost.",
  body: [
    {
      kind: "h",
      number: "3.1",
      title: "What is training",
      subtitle: "The learning phase — slow, expensive, done offline",
    },
    {
      kind: "take",
      text: "Training is the massive, offline, upfront capital expenditure where the model learns; it is an R&D investment you make once per version.",
    },
    {
      kind: "why",
      text: "When your CEO asks why the new open-source model isn't running on your servers yet, you need to explain that serving the model is easy, but if you want to teach it your proprietary data from scratch, you are asking for a multi-million dollar GPU budget and a six-month timeline.",
    },
    {
      kind: "p",
      parts: [
        s(
          "Walk into a server farm running a large language model and you will see racks of specialized hardware pulling enough electricity to power a small town, running for months without a single user query. You are not looking at a product serving customers. You are looking at the brute-force computational effort required to compress the internet into a statistical artifact. ",
        ),
        x(
          "This massive initial computation is what creates the model's intelligence.",
          "During this phase, the model is exposed to trillions of words, building the statistical relationships that allow it to generate coherent text later.",
        ),
        s(
          " Training is the phase where the model is actually learning, and it happens entirely behind closed doors long before the first user logs in.",
        ),
      ],
    },
    {
      kind: "p",
      parts: [
        s(
          "The mechanics of this phase are fundamentally about making mistakes and correcting them billions of times. The system reads a sequence of words, guesses the next one, calculates how wrong its guess was using a loss function, and then uses backpropagation to update billions of internal parameters simultaneously. ",
        ),
        x(
          "Backpropagation requires saving the state of the entire network to calculate the updates, which demands massive memory.",
          "This is why training requires clusters of high-end GPUs; a regular computer simply doesn't have the memory bandwidth to hold the entire network state during an update.",
        ),
        s(
          " This requires specialized chips, known as GPUs, communicating across high-speed networks to constantly shuffle these parameter updates back and forth. ",
        ),
        x(
          "The hardware is expensive, but the electricity and cooling required to run it 24/7 is equally punishing.",
          "A single training run for a frontier model can consume enough power to run thousands of homes for a year.",
        ),
      ],
    },
    {
      kind: "p",
      parts: [
        s(
          "The business consequence of this architecture is that creating a frontier model is a capital expenditure game that only a few companies on Earth can play. You are paying for the compute upfront, gambling that the resulting model will be capable enough to earn back its cost. ",
        ),
        x(
          "If the training run fails due to a hardware glitch or a data error halfway through, you have burned millions of dollars with nothing to show for it.",
          "Unlike traditional software bugs, a training failure often means restarting the entire months-long compute process from scratch.",
        ),
        s(
          " The model you get at the end is a static, frozen snapshot of the weights at the moment training finished. It will not learn anything new unless you start the massive operation all over again.",
        ),
      ],
    },
    {
      kind: "p",
      parts: [
        s(
          "Your job is to understand that you are almost certainly never going to train a foundation model from scratch. ",
        ),
        x(
          "You will rent intelligence from the companies that can afford to build the server farms.",
          "By using APIs, you shift the massive fixed capital expenditure of training onto the vendor, paying only for what you use.",
        ),
        s(
          ' When your engineering team talks about "training," they usually mean fine-tuning, which is a fraction of the cost, or they are confused about what it actually takes to build a model. ',
        ),
        x(
          "Knowing the difference prevents you from accidentally committing to an R&D project when you only needed an API integration.",
          "As a PM, you must ruthlessly protect your budget from unnecessary training runs when renting a pre-trained model solves the user's problem.",
        ),
      ],
    },
    {
      kind: "ex",
      title: "Meta's Llama 3 — The open-source subsidy",
      body: "Meta spent billions of dollars purchasing NVIDIA H100 GPUs solely to train their Llama 3 models over several months. They absorbed this massive upfront capital expenditure so the open-source community wouldn't have to. The model they released is just the frozen weights produced by that multi-billion dollar run.",
    },
    {
      kind: "ex",
      title: "OpenAI's GPT-4 — The massive upfront bet",
      body: "The training run for GPT-4 took over six months and cost an estimated $100M+ in pure compute. During this time, the model answered zero user queries. The entire cost was an R&D bet placed before a single API token was ever sold to a customer.",
    },
    {
      kind: "ex",
      title: "BloombergGPT — The cost of full ownership",
      body: "Bloomberg decided they needed a model trained specifically on financial data from scratch, rather than renting one. They had to provision millions of hours of GPU time and build a dedicated engineering team just for the training phase, making it a massive capital investment rather than a simple feature launch.",
    },
    {
      kind: "trans",
      text: "Once that massive upfront investment is finished and the weights are frozen, the model is finally ready to answer your users.",
    },
    {
      kind: "h",
      number: "3.2",
      title: "What is inference",
      subtitle: "The usage phase — fast, cheap per call, expensive at scale",
    },
    {
      kind: "take",
      text: "Inference is the operational, per-query variable cost of using the frozen model to generate answers for your users.",
    },
    {
      kind: "why",
      text: "In your next sprint planning, when the team debates the cost of the new AI feature, you must focus the conversation entirely on inference volume. Every time a user clicks the button, you incur a small compute cost that will eat your margins if not capped.",
    },
    {
      kind: "p",
      parts: [
        s(
          'A user pastes a rough draft into your text box, clicks "Polish", and waits two seconds for a beautifully rewritten paragraph to appear. The model did not learn anything about the user, it did not update its internal parameters, and it did not get smarter for the next person. It simply pushed the user\'s text through its frozen web of parameters to calculate the most statistically likely response. ',
        ),
        x(
          "This process of generating an output from a frozen model is called inference.",
          "Inference is the act of using the model, fundamentally distinct from training which is the act of building the model.",
        ),
        s(
          " It is the operational phase of AI, and it is the only phase your users will ever experience.",
        ),
      ],
    },
    {
      kind: "p",
      parts: [
        s(
          "Mechanically, inference is a unidirectional forward pass through the neural network. The user's input is converted into numbers, multiplied across the billions of weights that were finalized during training, and transformed into an output prediction. ",
        ),
        x(
          "Because the model isn't updating its weights, it doesn't need to hold the entire network's state in memory.",
          "This removes the massive memory overhead required by backpropagation, making the computation drastically lighter.",
        ),
        s(" This means inference requires significantly less computational power than training. "),
        x(
          "You don't need thousands of connected GPUs; a single powerful server can run inference for a reasonably sized model.",
          "While still computationally heavy compared to a normal database query, inference can be run on a single machine or even locally on a high-end laptop.",
        ),
      ],
    },
    {
      kind: "p",
      parts: [
        s(
          "The business consequence is that inference is a variable operational expense (OpEx) that scales directly with user engagement. You pay for the compute required to process the input and generate the output, usually measured in fractions of a cent per token. ",
        ),
        x(
          "While training is a massive fixed cost, inference is the ongoing cost of goods sold (COGS) for your AI feature.",
          "If you don't calculate your inference costs accurately, you cannot price your software correctly, leading to negative margins on heavy users.",
        ),
        s(
          " If your feature goes viral, your inference costs will spike proportionally, fundamentally altering the unit economics of your product.",
        ),
      ],
    },
    {
      kind: "p",
      parts: [
        s("You must design your product around this variable cost from day one. "),
        x(
          "You cannot offer an unlimited generative AI feature on a flat $10/month subscription without risking negative margins.",
          "If a user generates $15 worth of API tokens in a month, you are losing $5 on that customer. Generative AI requires usage caps to stay profitable.",
        ),
        s(
          " You will need to implement usage caps, rate limits, or token-based pricing to protect the business. ",
        ),
        x(
          "The PM who ignores inference costs during the design phase is the PM who has to explain a massive AWS bill to the CFO a week after launch.",
          "Cost modeling is now a mandatory part of the product specification process for any generative AI feature.",
        ),
      ],
    },
    {
      kind: "ex",
      title: "GitHub Copilot — Absorbing the variable cost",
      body: "Every time a developer pauses typing, Copilot runs an inference pass to predict the next lines of code. Microsoft absorbs this variable cost for a flat monthly fee, reportedly losing money on heavy users because the constant inference volume outpaces the subscription revenue.",
    },
    {
      kind: "ex",
      title: "ChatGPT — Managing the massive inference bill",
      body: "When millions of users ask ChatGPT questions simultaneously, OpenAI is running millions of independent inference passes. They pay for the massive server fleet required to generate those answers in real-time, which is why they introduced the Plus subscription to offset the staggering daily inference bill.",
    },
    {
      kind: "ex",
      title: "Apple Intelligence — Shifting inference to the edge",
      body: "Apple runs inference for smaller tasks directly on the iPhone's processor, rather than in the cloud. By pushing the compute cost of inference onto the user's hardware, Apple completely eliminates the variable server costs that plague other AI products.",
    },
    {
      kind: "trans",
      text: "Knowing that inference is a variable cost inevitably leads to the most important architectural decision you will make: deciding whose servers will actually run the math.",
    },
    {
      kind: "h",
      number: "3.3",
      title: "Who pays for what",
      subtitle: "Why using GPT-4 via API is fundamentally different from building your own model",
    },
    {
      kind: "take",
      text: "Using a vendor API means paying a retail markup on variable inference costs, while hosting an open-source model means absorbing fixed infrastructure costs to get wholesale inference.",
    },
    {
      kind: "why",
      text: "When you choose between OpenAI and hosting Llama 3, you are not making a technology choice; you are making a gross margin choice. You must project your user volume to determine which cost structure fits your business model.",
    },
    {
      kind: "p",
      parts: [
        s(
          "Your engineering lead presents two options for the new summarization feature: call the Anthropic API, or download an open-source model and host it on your own AWS instances. Both will achieve the exact same user experience. The difference lies entirely in how the money moves. ",
        ),
        x(
          "You are choosing between paying a premium per usage, or paying a flat rate to keep servers running even when no one is using them.",
          "APIs are purely variable; self-hosting introduces a fixed infrastructure baseline. The right choice depends entirely on your expected utilization.",
        ),
        s(
          " This is the classic build-versus-buy dilemma, weaponized by the sheer cost of AI compute.",
        ),
      ],
    },
    {
      kind: "p",
      parts: [
        s(
          "When you use a proprietary API like OpenAI or Anthropic, you are buying inference at retail prices. The vendor paid the massive upfront training cost, and they manage the complex infrastructure required to serve the model. ",
        ),
        x(
          "They charge you per token, baking in their infrastructure costs, the amortization of their training run, and their profit margin.",
          "You pay a premium for the convenience of zero infrastructure overhead and instant scalability.",
        ),
        s(
          " When you self-host an open-source model, you get the model weights for free, but you must provision and pay for the cloud GPUs to run inference yourself. ",
        ),
        x(
          "You pay the cloud provider by the hour, regardless of whether you process one summary or ten thousand.",
          "If your servers sit idle overnight, you are still paying the hourly GPU rate, wasting money.",
        ),
      ],
    },
    {
      kind: "p",
      parts: [
        s(
          "The business consequence hinges on utilization. If your feature is used sporadically, paying the vendor's per-token retail price is drastically cheaper than keeping a GPU server running idle 24/7. ",
        ),
        x(
          "However, if your feature is constantly heavily utilized, the vendor's profit margin will quickly outpace the cost of renting your own hardware.",
          "At maximum utilization, paying for raw AWS compute is significantly cheaper than paying a vendor's retail API price.",
        ),
        s(
          " At high scale, owning the infrastructure becomes a competitive advantage because it radically lowers your variable cost per query.",
        ),
      ],
    },
    {
      kind: "p",
      parts: [
        s("You must model the break-even point before committing to an architecture. "),
        x(
          "Start with the vendor API to validate the feature's value and user demand with zero infrastructure risk.",
          "APIs allow you to ship the feature in days and measure real user engagement without committing to a dedicated server fleet.",
        ),
        s(
          " Once the feature proves successful and volume crosses the threshold where the API bill exceeds the cost of a dedicated GPU instance, you pivot to self-hosting. ",
        ),
        x(
          "Your job is to dictate this migration timeline based on financial modeling, not engineering preference.",
          "Engineers often want to self-host early for control, but you must hold them off until the math justifies the operational overhead.",
        ),
      ],
    },
    {
      kind: "ex",
      title: "Jasper AI — The API-first approach",
      body: "In its early days, Jasper built a massive copywriting business entirely on top of OpenAI's API. They paid retail inference costs, but it allowed them to go to market instantly without hiring a specialized infrastructure team to manage GPUs.",
    },
    {
      kind: "ex",
      title: "Harvey — The migration to self-hosting",
      body: "The legal AI startup Harvey initially relied heavily on proprietary APIs, but as their enterprise volume grew, the API costs became a liability to their gross margins. They strategically shifted toward hosting their own custom models to reclaim those margins at scale.",
    },
    {
      kind: "ex",
      title: "LocalStack — The zero-variable-cost model",
      body: "Some developer tools avoid cloud inference costs entirely by downloading open-source models directly to the user's laptop. By forcing the user's machine to run the inference, the company pays zero variable costs, making a one-time purchase business model viable.",
    },
    {
      kind: "trans",
      text: "If you stay on the vendor API path and your product succeeds, you will quickly discover how brutally fast variable costs can multiply.",
    },
    {
      kind: "h",
      number: "3.4",
      title: "Inference cost at scale",
      subtitle: "How 10x users becomes 10x your AWS bill",
    },
    {
      kind: "take",
      text: "Generative AI breaks traditional software economics because processing 10x more users requires exactly 10x more compute, offering zero economies of scale.",
    },
    {
      kind: "why",
      text: "When your marketing team celebrates a viral spike in usage, you need to be the one checking the dashboard. If you mispriced your feature, that viral spike will bankrupt the product line before the end of the quarter.",
    },
    {
      kind: "p",
      parts: [
        s(
          "A viral tweet sends thousands of new users to your SaaS platform overnight. In traditional software, this is pure profit. Serving a web page to ten thousand users costs virtually the same as serving it to ten users; the database queries are cheap and the infrastructure scales effortlessly. Generative AI destroys this paradigm. ",
        ),
        x(
          "Generating text or images requires heavy, dedicated compute for every single request.",
          "You cannot simply route more traffic to the same database; each generation locks up compute resources that must be paid for.",
        ),
        s(" You do not get a discount for volume. "),
      ],
    },
    {
      kind: "p",
      parts: [
        s(
          "The mechanics of auto-regressive generation guarantee this linear cost scaling. To generate a 500-word response, the model must run a full forward pass 500 consecutive times, calculating the next word based on all previous words. ",
        ),
        x(
          "You cannot cache the result or share the compute across users, because every user's prompt is slightly different.",
          "In traditional SaaS, caching the homepage saves 99% of compute. In AI, almost every query requires a completely fresh, expensive generation pass.",
        ),
        s(
          " If one user costs you two cents in API fees, ten thousand users will cost you two hundred dollars, instantly and unavoidably. ",
        ),
        x(
          "There are no economies of scale in the forward pass.",
          "Double the user base means exactly double the inference cost, fundamentally altering your margin structure.",
        ),
      ],
    },
    {
      kind: "p",
      parts: [
        s(
          "The business consequence is that your gross margins are constantly under threat. Traditional SaaS companies enjoy 80%+ gross margins because their marginal cost of serving a new user is near zero. AI features drag those margins down to Earth. ",
        ),
        x(
          "If you charge a flat $5 monthly fee for a feature, but a power user generates enough text to cost you $15 in API calls, you are subsidizing their usage.",
          "This is the unit economics death spiral: your most engaged users become your least profitable customers.",
        ),
        s(
          " A small percentage of heavy users can obliterate the profits generated by the rest of your customer base.",
        ),
      ],
    },
    {
      kind: "p",
      parts: [
        s("You must design product friction to protect your margins. "),
        x(
          "You cannot offer unbounded text generation; you must implement credit systems, hard usage caps, or UI friction that prevents mindless generation.",
          'Every "Generate" button should be treated as a transaction that spends the company\'s money. Add enough friction so users only click it when they truly need it.',
        ),
        s(
          " When you spec the feature, you must also define the degradation path: what happens when a user hits their limit? ",
        ),
        x(
          "Do they pay more, do they fall back to a cheaper, dumber model, or does the feature lock entirely?",
          "Defining this fallback is a core PM responsibility, because it directly dictates the financial safety net of the feature.",
        ),
      ],
    },
    {
      kind: "ex",
      title: "Midjourney — Killing the unlimited tier",
      body: 'Generating images requires massive inference compute. Midjourney completely abandoned the "unlimited" tier model because power users were running bots to generate thousands of images a day, costing the company far more than the subscription price. They enforce strict fast-hour compute quotas.',
    },
    {
      kind: "ex",
      title: "Arc Browser — Adding manual friction",
      body: 'Arc\'s "Max" AI features summarize web pages automatically. Because summarizing every page a user visits would incur catastrophic API costs, Arc designed the UI so the user must explicitly pinch the screen to request the summary, adding just enough friction to prevent passive margin drain.',
    },
    {
      kind: "ex",
      title: "ChatGPT Plus — Hard limits for paying users",
      body: "OpenAI caps GPT-4 usage to a specific number of messages per three hours, even for paying subscribers. They know exactly how much inference a $20 subscription can cover, and they hard-gate the product to prevent heavy users from breaking the unit economics.",
    },
    {
      kind: "trans",
      text: "While pure inference costs scale linearly, sometimes you need the model to behave differently than the baseline, which requires a small investment back into the learning phase.",
    },
    {
      kind: "h",
      number: "3.5",
      title: "Fine-tuning as a middle path",
      subtitle: "Starting from a trained model and adapting it — cost and tradeoff explained",
    },
    {
      kind: "take",
      text: "Fine-tuning is a lightweight training run that alters the model's tone and format, acting as a bridge between the massive cost of pre-training and the constraints of inference.",
    },
    {
      kind: "why",
      text: "When marketing complains that the AI writes like a robot, your engineers will suggest fine-tuning. You must ensure they are doing it to teach the model how to speak, not what facts to know, otherwise you will waste time on the wrong solution.",
    },
    {
      kind: "p",
      parts: [
        s(
          "Your customer support bot is technically accurate, but it sounds like a generic corporate manual. You want it to speak in your brand's specific, empathetic tone. You cannot fix this with a better prompt without consuming half your context window, and you certainly aren't going to train a new model from scratch. You need the model to fundamentally adopt your style. ",
        ),
        x(
          "This is where you take a fully trained model and run a much smaller, cheaper training pass over your specific data.",
          "You use the massive pre-trained intelligence as a foundation, and just tweak the final layers to match your specific requirements.",
        ),
        s(" You are not teaching it English; you are just teaching it your accent."),
      ],
    },
    {
      kind: "p",
      parts: [
        s(
          "Mechanically, fine-tuning re-opens the model's frozen weights just a crack. You provide a few hundred or thousand examples of perfect inputs and outputs (e.g., a customer complaint mapped to a perfectly branded response). ",
        ),
        x(
          "The backpropagation algorithm runs again, but only for a short time and often only updating a small subset of the parameters.",
          "Because you are only making minor adjustments, the memory overhead and compute requirements are a tiny fraction of pre-training.",
        ),
        s(
          " Because the model already understands language, it requires drastically less compute. ",
        ),
        x(
          "What took six months and $100M for pre-training might take one afternoon and $50 for fine-tuning.",
          "This makes fine-tuning accessible to almost any startup or enterprise team.",
        ),
      ],
    },
    {
      kind: "p",
      parts: [
        s(
          "The business consequence is a highly specialized model that requires far less prompting at inference time. By baking the formatting rules and tone directly into the weights, your daily API prompts become much shorter, saving you variable inference costs on every single query. ",
        ),
        x(
          "You trade a small, one-time fixed cost for a permanent reduction in your ongoing variable costs.",
          "Instead of paying to send a 500-word style guide in every prompt, the model natively knows the style, saving you tokens forever.",
        ),
        s(
          " However, fine-tuning is terrible at memorizing new knowledge; if you try to fine-tune a model on your new pricing page, it will still hallucinate the numbers.",
        ),
      ],
    },
    {
      kind: "p",
      parts: [
        s("You must act as the gatekeeper for when to fine-tune. "),
        x(
          "Force the team to exhaust all prompt engineering options first, because managing custom fine-tuned models adds severe operational overhead.",
          "Every time the base model updates (e.g., from GPT-4 to GPT-5), you have to re-run your fine-tuning pipeline, adding permanent maintenance debt.",
        ),
        s(
          " When you do fine-tune, ensure the dataset is focused strictly on style, tone, and JSON formatting. ",
        ),
        x(
          "If the team is trying to fine-tune the model to teach it factual information about your company, stop the project and demand a Retrieval-Augmented Generation (RAG) architecture instead.",
          "RAG is for facts; fine-tuning is for format. Mixing them up guarantees hallucinated product specs.",
        ),
      ],
    },
    {
      kind: "ex",
      title: "Intercom — Fine-tuning for empathy",
      body: "When building their Fin AI bot, Intercom found that base models were too verbose. They fine-tuned models on their own high-quality support transcripts to teach the model the exact conversational, concise cadence that works best for customer service resolutions.",
    },
    {
      kind: "ex",
      title: "Harvey — Fine-tuning for legal structure",
      body: "Legal AI requires highly specific formatting for contracts and briefs. Harvey fine-tunes base models on thousands of expertly drafted legal documents so the model natively outputs text structured perfectly for lawyers, rather than relying on massive, fragile prompts.",
    },
    {
      kind: "ex",
      title: "OpenAI's InstructGPT — The ultimate fine-tune",
      body: "The original GPT-3 was a wild text-completion engine that would just continue a sentence rather than answering a question. OpenAI fine-tuned it on human feedback to follow instructions, transforming a raw autocomplete engine into the helpful chatbot paradigm we use today.",
    },
    {
      kind: "trans",
      text: "Even if you perfectly optimize your costs and tone, the mechanical reality of generating text one word at a time creates a severe user experience bottleneck.",
    },
    {
      kind: "h",
      number: "3.6",
      title: "The latency problem",
      subtitle: "Why inference speed is a product problem, not just an engineering problem",
    },
    {
      kind: "take",
      text: "Because models generate text sequentially, high intelligence inherently means high latency, forcing you to design UI paradigms that mask the waiting time.",
    },
    {
      kind: "why",
      text: "When your CEO asks why the new AI feature feels sluggish compared to the rest of the app, you need to explain that you cannot simply optimize the database. You must manage the user's perception of time while the model thinks.",
    },
    {
      kind: "p",
      parts: [
        s(
          'A user clicks "Generate Report" and stares at a loading spinner. Three seconds pass. Five seconds. They assume the app has crashed and click refresh, abandoning the process entirely. The model hasn\'t crashed; it is performing flawlessly. It is simply grinding through billions of parameters to calculate the very first word of the report. ',
        ),
        x(
          "In traditional software, latency is an engineering bug; in generative AI, latency is a law of physics.",
          "You cannot cache or index your way around the heavy compute required to generate novel text.",
        ),
        s(" You cannot buy your way out of it, so you must design your way around it."),
      ],
    },
    {
      kind: "p",
      parts: [
        s(
          "The mechanics of generation dictate this delay. The model receives your prompt and runs a massive forward pass just to output the first token. It then takes your prompt plus that new token, and runs the entire forward pass again to predict the second token. ",
        ),
        x(
          "It cannot parallelize this process because the third word depends entirely on what the second word was.",
          "This is why generation feels like someone typing. The model is trapped in a sequential loop, passing the data through its network for every single word.",
        ),
        s(
          " This sequential bottleneck is measured as Time to First Token (TTFT) and Tokens Per Second (TPS). ",
        ),
        x(
          "The smarter and larger the model, the worse both of these metrics become.",
          "A massive model has more parameters to multiply, directly increasing the time it takes to execute each forward pass.",
        ),
      ],
    },
    {
      kind: "p",
      parts: [
        s(
          "The business consequence is that AI features cannot be seamlessly injected into real-time workflows without extreme care. If an autocomplete feature takes two seconds to suggest a word, the user has already typed past it. ",
        ),
        x(
          "You will constantly face the brutal trade-off between speed and quality.",
          "If the task requires near-instant responses, you must downgrade to a smaller, less intelligent model. If the task requires deep reasoning, the user must wait.",
        ),
        s(
          " Using a massive model guarantees an excellent answer that arrives too late to be useful, while using a tiny, fast model guarantees an instant answer that might be wrong.",
        ),
      ],
    },
    {
      kind: "p",
      parts: [
        s("Your job is to design UI interventions that accommodate the model's speed limit. "),
        x(
          "You must demand that engineering streams the output token-by-token, exactly like ChatGPT, because users will tolerate a 10-second generation if they can read the text as it flows.",
          "Watching the text appear masks the latency; staring at a loading spinner magnifies it.",
        ),
        s(
          " For background tasks, remove the user from the waiting room entirely by moving the generation to an asynchronous job that emails them when finished. ",
        ),
        x(
          "Never put a massive LLM in the critical path of a synchronous user interaction unless you are streaming the output.",
          "If the user is waiting blindly for the entire payload to finish generating, they will assume the product is broken.",
        ),
      ],
    },
    {
      kind: "ex",
      title: "ChatGPT — Streaming to mask latency",
      body: "OpenAI mitigates the latency of their massive models by streaming the response word-by-word. This exploits human reading speed; the model only needs to generate words slightly faster than the user can read them, completely masking the total 15-second generation time.",
    },
    {
      kind: "ex",
      title: "Github Copilot — Speed over reasoning",
      body: "Because Copilot provides inline code completions while developers are actively typing, latency must be near zero. They sacrifice some intelligence by using smaller, highly optimized models rather than full-sized GPT-4, because a brilliant suggestion that arrives a second too late is useless.",
    },
    {
      kind: "ex",
      title: "Notion AI — The ghost writer UI",
      body: "When you ask Notion to write a blog post, it immediately starts typing onto the page block by block. They don't use a loading spinner because staring at a spinner for ten seconds feels broken, but watching an invisible ghost write a draft is magical.",
    },
    {
      kind: "trans",
      text: "Managing latency keeps the user happy, but keeping the business viable requires mastering the math behind all these generation costs.",
    },
    {
      kind: "h",
      number: "3.7",
      title: "PM decision lens: unit economics",
      subtitle: "The cost-per-query calculation every AI PM must own",
    },
    {
      kind: "take",
      text: "You must calculate the cost-per-query and multiply it by expected user volume before a single line of code is written, or your feature will accidentally burn your runway.",
    },
    {
      kind: "why",
      text: "In the roadmap review, when stakeholders push to add AI to every surface area of the product, your financial model is your only defense against shipping features that lose money on every click.",
    },
    {
      kind: "p",
      parts: [
        s(
          "The design team pitches a feature that proactively reads every inbound email and generates a suggested reply, storing it as a draft so the user sees it instantly when they open the app. The UX is flawless. The engineering is trivial. But the unit economics are catastrophic. ",
        ),
        x(
          "You are proposing running expensive inference on 100% of emails, even though users only open and reply to 20% of them.",
          "You are paying the vendor for generations that the user never requested and will never see.",
        ),
        s(" You have designed a feature that burns money in the background for zero user value."),
      ],
    },
    {
      kind: "p",
      parts: [
        s(
          "Mechanically, the math of an AI feature relies on three variables: input tokens, output tokens, and the cost per token of your chosen model. You take the average length of the user's data (the input), add the size of your system prompt, and multiply that by the input price. ",
        ),
        x(
          "Then you estimate the average length of the generated response and multiply that by the output price, which is usually three times more expensive.",
          "Output tokens cost more because the model must execute the sequential auto-regressive loop to generate them, whereas input tokens can be processed in parallel.",
        ),
        s(" Add those together, and you have your cost-per-query. "),
        x(
          "You must run this calculation against the dumbest, most aggressive power user you can imagine.",
          "Average usage hides the catastrophic tail-end costs. You need to know exactly how much your 99th percentile user will cost you.",
        ),
      ],
    },
    {
      kind: "p",
      parts: [
        s(
          "The business consequence is that AI features demand a return on investment at the transaction level. In a traditional SaaS model, a user paying $50 a month is profitable no matter how many times they click a button. In an AI-heavy product, a user clicking a button 500 times a day might cost you $75 in API fees. ",
        ),
        x(
          "If your cost-per-query is two cents, and a user runs it 100 times, you just lost $2 of your margin.",
          "This linear math means you can no longer rely on power users as your best evangelists; they might actively be harming your bottom line.",
        ),
        s(
          " You must ensure the value the user gets justifies either a higher subscription tier or a strict usage limit.",
        ),
      ],
    },
    {
      kind: "p",
      parts: [
        s("You must own this spreadsheet. "),
        x(
          "Before kickoff, build a simple model that shows the expected API cost per user per month.",
          "If you cannot produce this number, you do not understand the feature you are building well enough to ship it.",
        ),
        s(
          " If the number threatens your gross margin, you have three levers to pull: switch to a cheaper, smaller model; aggressively shorten your system prompts to save input tokens; or redesign the UX so the feature only triggers upon explicit user intent rather than running in the background. ",
        ),
        x(
          "Do not let engineering dictate the model size without forcing them to look at the financial consequences of that choice.",
          "Engineers love using the smartest, most capable model available; it is the PM's job to force the team to use the cheapest model that gets the job done.",
        ),
      ],
    },
    {
      kind: "ex",
      title: "Zapier — Metered execution",
      body: "Zapier's AI steps run automatically in the background every time a trigger fires. Because this can easily scale to thousands of executions a day per user, Zapier strictly meters AI usage, deducting specific AI credits per run. The product is designed entirely around the reality of variable inference costs.",
    },
    {
      kind: "ex",
      title: "Google Docs — The click-to-trigger model",
      body: 'Google requires a manual click to trigger their "Help me write" generative text feature. They do not proactively draft paragraphs while you pause typing, because the wasted inference on discarded suggestions would cost them millions of dollars a day at their scale.',
    },
    {
      kind: "ex",
      title: "Anthropic's Claude — Dynamic rate limiting",
      body: "Anthropic explicitly calculates unit economics for its heavy users and imposes dynamic message limits. If the system is under heavy load or you are attaching massive documents (which burn massive input tokens), the UI warns you that your limit will decrease, directly protecting their margins from your compute usage.",
    },
  ],
  quiz: [
    {
      q: 'Your startup wants a model that deeply understands your highly technical proprietary codebase. An engineer says, "We should train a new open-source model on it." Why should you push back?',
      options: [
        "Because open-source models cannot read code.",
        "Because training a model from scratch is a massive, multi-million dollar capital expenditure that requires specialized infrastructure.",
        "Because the inference costs will be too high.",
        "Because backpropagation is too fast.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Training from scratch is an astronomical R&D bet. You likely want to use a pre-trained model and fine-tune it or use RAG.",
      wrongFeedback:
        "Re-read section 3.1. The issue is the staggering fixed cost and complexity of the initial learning phase, not the model's capability or the later inference costs.",
    },
    {
      q: "You launch a generative AI feature and it becomes wildly popular overnight, with 100x the expected usage. What happens to your infrastructure costs?",
      options: [
        "They remain flat because the model is already trained.",
        "They spike linearly because every single generation requires an independent, computationally expensive forward pass.",
        "They drop because economies of scale make inference cheaper at high volumes.",
        "They trigger a new training run automatically.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Inference is a variable operational expense (OpEx). 100x the usage means 100x the compute cost.",
      wrongFeedback:
        "Re-read section 3.2. Unlike traditional software, generative AI has no economies of scale during the usage phase.",
    },
    {
      q: "At what point does it make sense to transition from paying a vendor API (like OpenAI) to hosting your own open-source model?",
      options: [
        "When you want the model to answer questions faster.",
        "When your query volume becomes so high that the vendor's profit margin on your API calls exceeds the fixed cost of renting your own 24/7 cloud GPUs.",
        "When the vendor API starts hallucinating.",
        "Immediately, to save money on day one.",
      ],
      correct: 1,
      correctFeedback:
        "Right. It's a pure financial crossover point. APIs are cheaper at low volumes, but self-hosting wins at massive scale.",
      wrongFeedback:
        "Re-read section 3.3. Self-hosting requires paying for idle servers, so it only saves money once your volume is high enough to offset that fixed cost.",
    },
    {
      q: 'A user complains that they hit a "daily message limit" on your AI tool. Why did you design the product to include this friction?',
      options: [
        "To force the user to read the documentation.",
        "To give the model time to rest and update its parameters.",
        "To prevent heavy power users from generating so much text that their variable inference costs exceed their monthly subscription fee.",
        "To encourage them to use shorter prompts.",
      ],
      correct: 2,
      correctFeedback:
        "Exactly. Generative AI has linear variable costs. Without caps, power users will generate negative gross margins for your business.",
      wrongFeedback:
        "Re-read section 3.4. Models don't need rest. The limit exists purely to protect unit economics from unbounded compute costs.",
    },
    {
      q: "Marketing wants the AI chatbot to sound exactly like a 1920s detective. Prompt engineering is taking up too much of the context window. What is the correct mechanical solution?",
      options: [
        "Train a new foundation model entirely on 1920s novels.",
        "Increase the inference speed.",
        "Fine-tune a pre-trained model on a few hundred examples of detective dialogue to bake the tone into the weights.",
        "Cache the responses.",
      ],
      correct: 2,
      correctFeedback:
        "Right. Fine-tuning is the perfect middle path for teaching a model format, style, and tone without the massive cost of pre-training.",
      wrongFeedback:
        "Re-read section 3.5. Training from scratch is overkill, and inference speed won't change the tone. Fine-tuning solves formatting and style cheaply.",
    },
    {
      q: "Your AI feature takes 8 seconds to generate a response. Engineering says they cannot parallelize the computation. Why?",
      options: [
        "Because the API vendor is throttling your account.",
        "Because auto-regressive generation is strictly sequential; the model cannot predict the third word until it has calculated the second word.",
        "Because the training phase isn't completely finished yet.",
        "Because the loss function is stuck.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. This is the law of physics for LLMs. Generation is sequential, which is why streaming the output to the UI is mandatory.",
      wrongFeedback:
        "Re-read section 3.6. It is a mechanical limitation of the forward pass, not a bug, throttling, or training issue.",
    },
    {
      q: "You are designing an AI feature that automatically summarizes every unread Slack message in the background. Why is this a dangerous product decision?",
      options: [
        "Slack's API blocks AI agents.",
        "You are incurring inference costs on 100% of messages, even though the user will only read a fraction of them, destroying your unit economics.",
        "The model will run out of context window.",
        "Users don't like summaries.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Background AI features burn variable costs regardless of user engagement. You must tie inference costs to explicit user intent.",
      wrongFeedback:
        "Re-read section 3.7. The danger is entirely financial. Running inference on data the user never sees is the fastest way to bankrupt an AI product.",
    },
  ],
  examples: [],
};
