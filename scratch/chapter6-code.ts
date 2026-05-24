export const chapter6 = {
  slug: "pm-model-evaluation",
  number: 6,
  shortTitle: "Model Evaluation",
  title: "Model Evaluation — Why \"accuracy\" alone will mislead you every time",
  readingMinutes: 20,
  summary:
    "Accuracy is a deceptive metric that masks models failing to catch rare events. A PM must choose evaluation metrics (Precision, Recall, F1, AUC) based on the specific business cost of false positives versus false negatives, while ensuring data science teams maintain pristine test sets to prevent overfitting.",
  keyTakeaway:
    "The evaluation metric is a product decision. If you leave it to engineering, they will optimize for mathematical elegance instead of commercial viability.",
  pmCallout:
    "As a PM: You must translate your business strategy into a mathematical target. You cannot evaluate an AI without explicitly documenting the financial cost of a false positive versus a false negative.",
  body: [
    {
      kind: "h",
      number: "6.1",
      title: "Why accuracy is almost always the wrong metric",
      subtitle: "The cancer screening model that gets 99% accuracy and is completely useless",
    },
    {
      kind: "take",
      text: "Accuracy is a deceptive metric in highly imbalanced datasets, often masking models that do absolutely nothing useful.",
    },
    {
      kind: "why",
      text: "When a vendor or internal team boasts about a 99% accurate model, your immediate reflex must be to ask what the baseline distribution of the data is. If 99% of the dataset belongs to one category, the model isn't smart; it's just guessing the majority class.",
    },
    {
      kind: "p",
      parts: [
        s("Your data science team bursts into your office to celebrate. They just built a cancer screening model that achieves 99% accuracy on historical patient data. You deploy it to a pilot hospital, only to discover that the model simply outputs \"No Cancer\" for every single patient it sees. Because only 1% of the patients in the historical dataset actually had cancer, the model mathematically achieved 99% accuracy by literally doing nothing. "),
        x("The metric looked flawless on a dashboard, but the product was functionally useless and actively dangerous.", "An accuracy metric without context is a vanity metric."),
        s(" You have just learned why accuracy is a trap."),
      ],
    },
    {
      kind: "p",
      parts: [
        s("Mechanically, accuracy is calculated simply as the total number of correct predictions divided by the total number of predictions made. In a perfectly balanced dataset—where there are exactly 50 pictures of cats and 50 pictures of dogs—accuracy is a highly reliable metric. "),
        x("However, most real-world business problems involve finding a rare needle in a massive haystack.", "The events you care about most are usually the events that happen the least."),
        s(" Fraudulent transactions, manufacturing defects, and server crashes are inherently rare events, meaning the dataset is heavily imbalanced toward the negative class."),
      ],
    },
    {
      kind: "p",
      parts: [
        s("The business consequence of optimizing for accuracy is that the model will inherently ignore the rare events you are actually trying to find. "),
        x("If a model is incentivized purely to maximize its total correct guesses, its safest mathematical strategy is to completely ignore the 1% edge case.", "The model takes the path of least resistance to a high score."),
        s(" This leads to situations where millions of dollars in compute are spent training a sophisticated neural network to simply output \"False\" a million times a row."),
      ],
    },
    {
      kind: "p",
      parts: [
        s("You must strip the word \"accuracy\" out of your vocabulary when dealing with imbalanced problems. "),
        x("Never accept a top-line accuracy metric without first demanding to see the baseline distribution of the dataset.", "The baseline dictates what a 'good' score actually is."),
        s(" If you are building a system to catch credit card fraud, a 99.9% accuracy rate is the baseline expectation, not a success metric. "),
        x("Your job is to force the team to measure how well the model predicts the rare event, not how well it coasts on the common one.", "Focus entirely on the model's performance on the minority class."),
      ],
    },
    {
      kind: "ex",
      title: "Medical Diagnosis Trap",
      body: "A startup pitched a 99.9% accurate model for detecting a rare genetic disorder. Hospital buyers quickly realized the disorder only occurs in 1 in 10,000 people. A simple hardcoded script that prints \"Healthy\" achieves 99.99% accuracy, proving the startup's metric was completely meaningless for clinical use.",
    },
    {
      kind: "ex",
      title: "Click-Through Prediction",
      body: "Ad networks train models to predict if a user will click an ad. The average click-through rate is 0.1%. If a model predicts that no one will ever click any ad, it is 99.9% accurate. Ad networks entirely ignore accuracy, focusing instead on whether the model can specifically rank the rare clicks higher than the non-clicks.",
    },
    {
      kind: "ex",
      title: "Manufacturing QA",
      body: "A car manufacturer built an AI to detect microscopic cracks in engine blocks. Because 98% of engines are flawless, the model achieved 98% accuracy by never flagging a single defect. The manufacturer had to scrap the accuracy metric entirely to force the model to actually look for cracks.",
    },
    {
      kind: "trans",
      text: "To properly evaluate a model finding needles in a haystack, you have to split its mistakes into two distinct, fundamentally different categories.",
    },
    {
      kind: "h",
      number: "6.2",
      title: "False positives vs false negatives",
      subtitle: "The two ways a model can be wrong — and why they have different costs",
    },
    {
      kind: "take",
      text: "A model makes two distinct types of errors—crying wolf (false positive) and missing the wolf (false negative)—and their business costs are almost never equal.",
    },
    {
      kind: "why",
      text: "When defining the success criteria for a model, you must map out the financial and UX cost of a false positive versus a false negative. If you leave this to engineering, they will assume both errors cost the company the same amount of money.",
    },
    {
      kind: "p",
      parts: [
        s("You are designing the AI logic for an autonomous vehicle's emergency braking system. If the model sees a shadow and mistakenly thinks it's a pedestrian, it slams the brakes for no reason. If the model sees an actual pedestrian and mistakenly thinks it's a shadow, it fails to brake at all. "),
        x("These are both 'errors' in the model's loss function, but in the real world, one causes a minor annoyance and the other causes a catastrophic fatality.", "Models don't understand real-world severity; they just see math."),
        s(" The cost of the mistakes is massively asymmetrical."),
      ],
    },
    {
      kind: "p",
      parts: [
        s("Mechanically, every prediction a binary classification model makes falls into one of four buckets: True Positives (correctly flagging the event), True Negatives (correctly ignoring the non-event), False Positives (flagging an event that wasn't there), and False Negatives (missing an event that was there). "),
        x("A false positive is a false alarm; the model incorrectly claimed the rare event happened.", "The model cried wolf."),
        s(" Conversely, a false negative is a missed detection; the model failed to notice the rare event when it actually occurred. "),
        x("Every time you adjust a model to reduce false positives, it mathematically increases the number of false negatives.", "You are constantly trading one type of error for the other."),
      ],
    },
    {
      kind: "p",
      parts: [
        s("The business consequence is that the financial viability of an AI product is determined entirely by the cost asymmetry between these two errors. If a spam filter aggressively sends legitimate emails to the spam folder (false positives), users will churn immediately. If it lets a few spam emails into the inbox (false negatives), users will just delete them. "),
        x("In spam filtering, a false positive is a hundred times more expensive to the business than a false negative.", "The unit economics of the errors drive the product strategy."),
        s(" "),
      ],
    },
    {
      kind: "p",
      parts: [
        s("You must write the cost asymmetry explicitly into the product requirements document. "),
        x("Do not let the data science team optimize the model without telling them exactly how much a false positive costs the business compared to a false negative.", "Translating business cost to a mathematical penalty is your job."),
        s(" If you are building a tool to review legal contracts, missing a liability clause (false negative) might cost $10 million in a lawsuit, while flagging a harmless paragraph (false positive) just costs a lawyer five minutes of review time. "),
        x("Your primary job is to tell engineering which mistake they are allowed to make.", "You are picking your poison."),
      ],
    },
    {
      kind: "ex",
      title: "TSA Airport Security",
      body: "Airport scanners are heavily biased toward false positives. If the scanner flags a belt buckle as a weapon (false positive), the cost is a 30-second manual pat-down. If it misses an actual weapon (false negative), the cost is catastrophic. The entire system is engineered to accept massive amounts of false positives to guarantee zero false negatives.",
    },
    {
      kind: "ex",
      title: "Bank Fraud Blocks",
      body: "When your bank blocks your credit card while you are traveling because it suspects fraud, that is a false positive. Banks constantly tune their models because blocking a legitimate purchase severely damages the user experience, often prompting the user to permanently switch to a different card in their wallet.",
    },
    {
      kind: "ex",
      title: "YouTube Copyright Claims",
      body: "YouTube's automated Content ID system aggressively flags user videos for copyright infringement. Because the legal cost of a false negative (missing a copyrighted song) is massive due to lawsuits, the model is tuned to generate high volumes of false positives, infuriating creators whose original content is mistakenly demonetized.",
    },
    {
      kind: "trans",
      text: "When the cost of a false positive is incredibly high, you need a metric specifically designed to measure how often the model cries wolf.",
    },
    {
      kind: "h",
      number: "6.3",
      title: "Precision explained",
      subtitle: "Of everything the model flagged, how much was actually correct",
    },
    {
      kind: "take",
      text: "Precision measures the trustworthiness of the model's alerts; it answers the question, \"Of everything the model flagged, how much was actually correct?\"",
    },
    {
      kind: "why",
      text: "When user attention or operational time is highly expensive, you must optimize for precision. If a model generates too many false alarms, users will simply turn it off or learn to ignore it completely.",
    },
    {
      kind: "p",
      parts: [
        s("Your operations team asks for an AI tool to automatically flag customer accounts for manual review when they look like money laundering. You deploy a model, and the next day the operations team is furious. The model flagged 10,000 accounts for review, but only 10 of them were actually money launderers. "),
        x("The team wasted thousands of hours reviewing 9,990 legitimate accounts, completely destroying the operational efficiency the AI was supposed to create.", "High volume without high accuracy ruins the operational ROI."),
        s(" The model caught the bad guys, but its precision was so abysmal that the tool was useless."),
      ],
    },
    {
      kind: "p",
      parts: [
        s("Mechanically, precision is calculated as True Positives divided by the total number of items the model flagged (True Positives + False Positives). "),
        x("It strictly measures the quality of the model's positive predictions, completely ignoring the rare events that the model missed.", "Precision only looks at what the model said, not what it stayed silent on."),
        s(" If a model only flags one single transaction out of a million, and that transaction is indeed fraudulent, the model has 100% precision. "),
        x("A high-precision model is incredibly conservative; it will only raise an alarm if it is absolutely, mathematically certain.", "It prefers silence to being wrong."),
      ],
    },
    {
      kind: "p",
      parts: [
        s("The business consequence of optimizing for precision is the preservation of user trust and operational bandwidth. If a code-completion AI constantly suggests incorrect syntax, developers will stop hitting the 'Tab' key and uninstall the plugin. "),
        x("When an AI acts as a co-pilot or assistant, its precision must be exceptionally high, because the user's cost of reviewing and fixing the AI's mistakes quickly outweighs the benefit of using the tool.", "A tool that generates work for the user is quickly abandoned."),
        s(" "),
      ],
    },
    {
      kind: "p",
      parts: [
        s("You must define the minimum acceptable precision threshold before the project begins. "),
        x("If an alert requires a human to spend 15 minutes investigating, you must calculate exactly what percentage of those alerts must be genuine to keep the operations team's ROI positive.", "Do the math on the cost of human verification."),
        s(" Tell engineering: \"We cannot deploy this feature unless the precision is above 85%; we would rather the model stay quiet than generate false alarms that waste the users' time.\" "),
        x("Precision is the metric of trust.", "If the model speaks, the user must believe it."),
      ],
    },
    {
      kind: "ex",
      title: "Github Copilot",
      body: "Code assistants optimize aggressively for precision. A developer's flow is ruined if they have to constantly delete bad code generated by the AI. Copilot is tuned to only offer a suggestion when it is highly confident, preferring to stay completely silent rather than offer a low-confidence, low-precision guess.",
    },
    {
      kind: "ex",
      title: "Slack Notifications",
      body: "If an AI feature promises to \"notify you only of important messages,\" its precision must be flawless. If it pings the user five times a day for trivial updates, it acts as a distraction engine. Users will disable the feature entirely to stop the false positives, neutralizing the product.",
    },
    {
      kind: "ex",
      title: "Automated Trading",
      body: "Quantitative hedge funds use AI models to trigger buy orders. The precision of the model must be near-perfect, because every false positive results in the fund executing a losing trade. The fund would much rather miss a profitable opportunity than execute a bad one.",
    },
    {
      kind: "trans",
      text: "Conversely, when missing an event is completely unacceptable, precision must take a backseat to an entirely different metric.",
    },
    {
      kind: "h",
      number: "6.4",
      title: "Recall explained",
      subtitle: "Of everything that should have been caught, how much did the model actually catch",
    },
    {
      kind: "take",
      text: "Recall measures the model's ability to sweep the board; it answers the question, \"Of everything that should have been caught, how much did the model actually catch?\"",
    },
    {
      kind: "why",
      text: "When the business cost of missing a rare event is catastrophic or legally fatal, you must optimize for recall. You are actively choosing to tolerate false alarms to ensure nothing slips through the cracks.",
    },
    {
      kind: "p",
      parts: [
        s("Your company builds an AI system that scans x-rays to detect early-stage lung tumors. During testing, the model achieves 95% precision—meaning that when it flags a tumor, it is almost always right. However, doctors soon realize that the model is missing 40% of the actual tumors in the dataset. "),
        x("The model is incredibly trustworthy when it speaks, but its silence is deadly because it fails to catch nearly half of the patients who need treatment.", "A model can be perfectly precise while failing to do its core job."),
        s(" The model's recall is unacceptably low."),
      ],
    },
    {
      kind: "p",
      parts: [
        s("Mechanically, recall is calculated as True Positives divided by the total number of actual positive events in reality (True Positives + False Negatives). "),
        x("It strictly measures the model's ability to find every single target, completely ignoring how many false alarms it generates in the process.", "Recall doesn't care about noise; it only cares about signal."),
        s(" If a model simply flags every single x-ray as \"tumor,\" it will successfully catch 100% of the real tumors, achieving a perfect recall score of 100%. "),
        x("A high-recall model is incredibly paranoid; it will flag anything that looks remotely suspicious.", "It prefers a false alarm over a missed detection."),
      ],
    },
    {
      kind: "p",
      parts: [
        s("The business consequence of optimizing for recall is a massive increase in operational overhead to deal with the resulting false alarms. If a cybersecurity AI is tuned for high recall, it will catch every single genuine hack, but it will also flag thousands of employees simply logging in from a new laptop. "),
        x("You optimize for recall when a false negative is an existential threat to the business, and you are willing to pay human analysts to sort through the noise.", "Recall is an active decision to increase operational costs in exchange for safety."),
        s(" "),
      ],
    },
    {
      kind: "p",
      parts: [
        s("You must pair high-recall requirements with a secondary human review system. "),
        x("If you tell engineering to maximize recall, you must simultaneously budget for the operational headcount required to process the resulting avalanche of false positives.", "High recall breaks organizations that aren't prepared to handle the noise."),
        s(" You are using the AI as a massive, sweeping net to catch everything, and relying on human experts to throw the bycatch back into the ocean. "),
        x("Recall is the metric of safety.", "You use it when missing something is the ultimate failure."),
      ],
    },
    {
      kind: "ex",
      title: "Content Moderation for CSAM",
      body: "Social networks tune their models to detect Child Sexual Abuse Material (CSAM) with maximum possible recall. The legal and moral cost of a false negative is so devastating that platforms gladly accept thousands of false positives, routing massive volumes of flagged images to human review teams to ensure zero true cases slip through.",
    },
    {
      kind: "ex",
      title: "Churn Prediction",
      body: "A SaaS company uses an AI model to predict which enterprise customers are about to cancel their $100k/year contract. Because the cost of saving an account is just a 15-minute phone call from a Customer Success manager, the company optimizes for recall, wanting the model to flag anyone remotely at risk of churning.",
    },
    {
      kind: "ex",
      title: "Self-Driving Pedestrian Detection",
      body: "Autonomous vehicles optimize their vision models for extreme recall when detecting humans. The software is designed to brake for cardboard cutouts, shadows, and plastic bags (false positives) because the alternative—failing to brake for a real child (false negative)—is an unacceptable system failure.",
    },
    {
      kind: "trans",
      text: "You cannot have a model that perfectly trusts its own alerts while also catching every single edge case; you must dictate where the model lives on the sliding scale between them.",
    },
    {
      kind: "h",
      number: "6.5",
      title: "The precision-recall tradeoff",
      subtitle: "Why you can't maximise both — and how to choose",
    },
    {
      kind: "take",
      text: "Precision and recall are a zero-sum game; increasing the model's sensitivity catches more targets (recall) but inevitably generates more false alarms (precision).",
    },
    {
      kind: "why",
      text: "Engineering cannot maximize both metrics simultaneously. Your primary strategic job during model evaluation is to look at the business unit economics and explicitly choose the exact point on the tradeoff curve where the model will operate.",
    },
    {
      kind: "p",
      parts: [
        s("The engineering lead shows you a chart with a curve on it. She asks, \"Do you want us to catch 90% of the fraud with a 50% false alarm rate, or do you want us to catch 60% of the fraud with a 5% false alarm rate?\" She is asking you to make a product decision about the precision-recall tradeoff. "),
        x("The model's underlying intelligence is fixed; what you are deciding is the mathematical threshold at which the model is allowed to pull the trigger.", "You are not changing the brain; you are changing the rules of engagement."),
        s(" "),
      ],
    },
    {
      kind: "p",
      parts: [
        s("Mechanically, a classification model doesn't actually output a binary \"Yes\" or \"No\". It outputs a probability score between 0 and 1. If the model outputs 0.82, it is 82% confident the transaction is fraud. "),
        x("The threshold is the line in the sand you draw; if you set the threshold at 0.50, the model acts aggressively, flagging many transactions (high recall, low precision).", "A low threshold casts a wide, noisy net."),
        s(" If you move the threshold to 0.95, the model becomes deeply conservative, only flagging the most obvious cases (high precision, low recall). "),
        x("Adjusting this threshold is a purely mathematical slider that shifts the balance of errors.", "You cannot gain precision without sacrificing recall, and vice versa."),
      ],
    },
    {
      kind: "p",
      parts: [
        s("The business consequence is that the threshold defines the user experience. A spam filter with the threshold set too low (high recall) results in users missing vital emails because they were swept into the spam folder. A spam filter with the threshold set too high (high precision) results in a cluttered inbox full of junk. "),
        x("The exact same underlying algorithm will feel like two completely different products depending entirely on where you set that threshold line.", "The threshold is the actual product."),
        s(" "),
      ],
    },
    {
      kind: "p",
      parts: [
        s("You must own the threshold decision. "),
        x("Never let an engineer set the probability threshold based on what 'looks balanced' on a graph; the threshold must be calculated using the actual dollar cost of the errors.", "Balanced graphs often represent bankrupt businesses."),
        s(" If a false positive costs $5 in support time, and a false negative costs $500 in lost revenue, you do the math and set the threshold low to catch the expensive misses. "),
        x("The tradeoff curve is where data science ends and business strategy begins.", "The PM's primary role is navigating this exact curve."),
      ],
    },
    {
      kind: "ex",
      title: "Credit Card Fraud Thresholds",
      body: "Banks dynamically adjust their precision-recall threshold based on the transaction amount. For a $5 coffee purchase, the threshold is incredibly high (optimizing for precision) because blocking a coffee angers the user over pennies. For a $5,000 electronics purchase abroad, the threshold drops significantly (optimizing for recall) because the financial risk justifies the friction of a false positive.",
    },
    {
      kind: "ex",
      title: "Hiring AI Filters",
      body: "A company using an AI resume screener must choose a threshold. If they receive 10,000 applications for one role, they set a high threshold (precision) to only see the top 50 candidates, accepting that they will miss great people (low recall) because their interview bandwidth is highly constrained.",
    },
    {
      kind: "ex",
      title: "Factory Defect Sorting",
      body: "A manufacturer uses AI to sort imperfect apples. If the apples are destined for a premium grocery store, the threshold is set for extreme recall—flagging every minor blemish to ensure no bad apples get through. If they are destined for a juice factory, the threshold is shifted to extreme precision, only flagging totally rotten fruit.",
    },
    {
      kind: "trans",
      text: "Sometimes, you need a quick way to gauge the overall health of a model before diving into the specific threshold economics.",
    },
    {
      kind: "h",
      number: "6.6",
      title: "F1 score",
      subtitle: "When to use it, when it hides the truth",
    },
    {
      kind: "take",
      text: "The F1 score is a single, blended metric that balances precision and recall, useful for high-level model comparisons but dangerous when business costs are asymmetrical.",
    },
    {
      kind: "why",
      text: "When data scientists report that a new model is \"better\" because its F1 score increased, you must unpack the metric. F1 assumes a false positive and a false negative are equally bad, which is almost never true in a real product.",
    },
    {
      kind: "p",
      parts: [
        s("Your data science team proposes replacing the current production model. The old model has 90% precision and 40% recall. The new model has 65% precision and 65% recall. They argue the new model is mathematically superior because its F1 score is higher. "),
        x("If you blindly accept the F1 score, you might deploy a model that drastically increases the number of false alarms your users experience, destroying trust.", "An average score hides the specific pain points you are introducing."),
        s(" You must look past the blended average to see how the errors actually shifted."),
      ],
    },
    {
      kind: "p",
      parts: [
        s("Mechanically, the F1 score is the harmonic mean of precision and recall. It is designed to punish extreme imbalances. "),
        x("A model with 100% recall and 1% precision will have a terrible F1 score, preventing teams from gaming the system by simply flagging everything.", "The harmonic mean forces the model to actually balance the two."),
        s(" It provides a single number between 0 and 1 that summarizes the model's overall effectiveness at finding the needle in the haystack without generating too much noise. "),
        x("It is the default metric engineers use during training to ensure the model is learning a balanced representation of the problem.", "F1 is a great training compass, but a bad business compass."),
      ],
    },
    {
      kind: "p",
      parts: [
        s("The business consequence of relying entirely on F1 is that it completely ignores unit economics. The formula inherently weights precision and recall equally. "),
        x("If your product is a medical diagnostic tool where missing a tumor is a thousand times worse than a false alarm, a metric that treats both errors equally is actively dangerous.", "You cannot manage asymmetrical risk with a perfectly symmetrical metric."),
        s(" F1 is a great metric for technical model iteration, but a terrible metric for final business evaluation."),
      ],
    },
    {
      kind: "p",
      parts: [
        s("You should use F1 during the research phase to track general progress, but discard it when making the final deployment decision. "),
        x("When reviewing sprint progress, it is perfectly fine to celebrate an increase in the F1 score as proof the architecture is improving.", "Use it to confirm the team is moving in the right general direction."),
        s(" However, before the launch gate, force the team to break the F1 score back apart into precision and recall. "),
        x("Always evaluate the final deployment candidate against the specific asymmetrical business costs, not the blended mathematical average.", "Unpack the F1 score into dollars and cents."),
      ],
    },
    {
      kind: "ex",
      title: "Kaggle Competitions",
      body: "In machine learning competitions, the F1 score is frequently used as the ultimate leaderboard metric because the competition hosts need a single, objective number to rank thousands of different models, regardless of the real-world application.",
    },
    {
      kind: "ex",
      title: "Search Engine Optimization",
      body: "When building an internal document search engine, F1 is often a useful proxy metric. Users want the search to return the correct document (recall) without returning hundreds of irrelevant documents (precision). Because both errors cause similar levels of minor annoyance, the blended F1 score accurately reflects the user experience.",
    },
    {
      kind: "ex",
      title: "The F1 Trap in Lending",
      body: "An AI lending model might show an improved F1 score because it aggressively approved more loans (increasing recall of good borrowers) while slightly increasing defaults (lowering precision). The bank lost money despite the higher F1 score because the financial penalty of a defaulted loan far outweighed the profit of a good one.",
    },
    {
      kind: "trans",
      text: "While F1 looks at a single specific threshold, evaluating a model's true underlying capability requires a metric that looks at every possible threshold simultaneously.",
    },
    {
      kind: "h",
      number: "6.7",
      title: "AUC-ROC",
      subtitle: "The model comparison metric — what it tells you and what it doesn't",
    },
    {
      kind: "take",
      text: "AUC-ROC evaluates a model's fundamental ability to separate the good from the bad across all possible thresholds, making it the ultimate metric for comparing different algorithms.",
    },
    {
      kind: "why",
      text: "When you are deciding whether to upgrade from a simple linear model to a massive deep learning model, AUC is the metric that proves whether the new architecture actually possesses more underlying intelligence.",
    },
    {
      kind: "p",
      parts: [
        s("The engineering team wants to spend $50,000 in compute to upgrade your fraud system from a simple decision tree to a deep neural network. You ask for proof that it's worth it. They don't show you precision or recall—because those depend on where the threshold is set. Instead, they show you that the Area Under the Curve (AUC) jumped from 0.75 to 0.92. "),
        x("This metric proves that regardless of how you configure the final product, the new neural network is fundamentally better at separating the fraudulent transactions from the legitimate ones.", "AUC proves the engine is actually stronger, regardless of how you drive the car."),
        s(" "),
      ],
    },
    {
      kind: "p",
      parts: [
        s("Mechanically, the Receiver Operating Characteristic (ROC) curve plots the model's performance across every single possible threshold, from 0.00 to 1.00. The Area Under the Curve (AUC) is simply the measurement of the space underneath that line. "),
        x("An AUC of 0.50 means the model is guessing randomly; an AUC of 1.00 means the model perfectly ranks every single positive example higher than every negative example.", "The higher the AUC, the better the model is at separating the two classes."),
        s(" If a model has an AUC of 0.90, it means there is a 90% chance that it will score a random fraud transaction higher than a random legitimate one. "),
        x("AUC measures the model's intrinsic ranking ability, independent of any business rules.", "It evaluates the model before you apply any specific threshold."),
      ],
    },
    {
      kind: "p",
      parts: [
        s("The business consequence is that AUC is the gold standard for architectural procurement and A/B testing models offline. It tells you the absolute ceiling of the model's capability. "),
        x("However, AUC tells you absolutely nothing about the user experience or the unit economics of the product.", "You cannot calculate business value from an AUC score."),
        s(" A model with a brilliant AUC can still bankrupt the company if the PM sets the final operational threshold at the wrong point on the curve."),
      ],
    },
    {
      kind: "p",
      parts: [
        s("You use AUC to approve the technical architecture, and precision/recall to approve the product launch. "),
        x("When a vendor pitches an AI engine, demand their AUC score to verify their underlying technology isn't just a random number generator.", "AUC is your baseline lie-detector for vendor pitches."),
        s(" Once the architecture is purchased and integrated, you stop looking at AUC entirely. "),
        x("You then shift your focus to setting the threshold that optimizes the precision and recall for your specific business case.", "Move from assessing the algorithm to assessing the business impact."),
      ],
    },
    {
      kind: "ex",
      title: "Advertising Bids",
      body: "Ad networks use AUC to evaluate their core ranking algorithms. They need to know if Model B is fundamentally better at ranking high-value users above low-value users than Model A. Once they prove Model B has a higher AUC, they deploy it and adjust the actual bidding thresholds dynamically based on real-time budgets.",
    },
    {
      kind: "ex",
      title: "Medical Device FDA Approval",
      body: "When AI startups submit diagnostic models to the FDA, they heavily rely on AUC to prove clinical validity. The AUC demonstrates the model's fundamental capability to detect disease across a broad population, leaving the specific operational thresholds to the individual hospital's risk tolerance.",
    },
    {
      kind: "ex",
      title: "Upgrading AWS Instances",
      body: "If engineering requests a larger, more expensive cloud instance to run a heavier model, the PM should demand to see the AUC comparison. If the heavier model only increases the AUC by 0.01, the fundamental intelligence gain does not justify the massive increase in hosting costs.",
    },
    {
      kind: "trans",
      text: "Knowing how to read these metrics is useless if the metrics themselves are lying to you, which happens the moment data leaks from the real world into the training environment.",
    },
    {
      kind: "h",
      number: "6.8",
      title: "Train set, validation set, test set",
      subtitle: "Why you need three buckets of data and what each one is for",
    },
    {
      kind: "take",
      text: "A dataset must be strictly partitioned into three isolated buckets—learning, tuning, and the final exam—to ensure the model is actually generalizing rather than just memorizing the answers.",
    },
    {
      kind: "why",
      text: "If an engineer reports a 99% accuracy metric without explicitly confirming it was run on a quarantined \"test set,\" you must assume the metric is entirely fraudulent. A model tested on its own training data is taking an open-book exam.",
    },
    {
      kind: "p",
      parts: [
        s("Your team is building an AI to predict stock market movements. They train the model on data from 2018 to 2022. They test the model on data from 2021, and the metrics are staggering—it predicts market crashes perfectly. You deploy the model, and it immediately loses millions of dollars. "),
        x("The model didn't learn the underlying mechanics of the stock market; it simply memorized the historical timeline.", "Models are lazy; if they can memorize instead of learn, they will."),
        s(" Because the test data was included in the training data, the model had already seen the answers before taking the test."),
      ],
    },
    {
      kind: "p",
      parts: [
        s("Mechanically, data scientists must brutally divide their dataset before a project begins. The \"Train Set\" (usually 70-80% of the data) is the textbook the model reads millions of times to adjust its weights. The \"Validation Set\" (10-15%) is the practice quiz used to tweak high-level architecture decisions and tune the model. "),
        x("The 'Test Set' (10-15%) is the final exam; it is locked in a digital vault and the model is never allowed to see it until the very end of the project.", "The integrity of the test set is the most sacred rule in data science."),
        s(" "),
      ],
    },
    {
      kind: "p",
      parts: [
        s("The business consequence of \"data leakage\"—when test data accidentally bleeds into the training set—is catastrophic failure upon deployment. The offline metrics will look incredibly promising, convincing executives to greenlight a massive launch. "),
        x("The moment the overfitted model encounters genuinely novel data in the real world, its predictions will collapse.", "A model that memorized its training data is worse than useless in production."),
        s(" The integrity of the test set is the only mathematical guarantee you have that the model will actually work in production."),
      ],
    },
    {
      kind: "p",
      parts: [
        s("You must act as the auditor of the test set. "),
        x("Ask engineering explicitly: 'How is our test set quarantined, and is there any temporal or logical overlap with the training data?'", "Data leakage often happens through subtle logical connections, not just duplicated rows."),
        s(" If you are predicting future events, mandate a strict chronological split (e.g., train on 2022, test on 2023) rather than a random split. "),
        x("Treat the test set metrics as a sacred, single-use measurement; if you repeatedly tweak the model to get a higher test set score, you have turned the test set into a validation set.", "Once you optimize for the test set, it is no longer a valid test."),
      ],
    },
    {
      kind: "ex",
      title: "The Kaggle Public vs Private Leaderboard",
      body: "Kaggle competitions maintain two test sets. The public leaderboard evaluates models on one set during the competition, but the final prize money is awarded based on a completely secret, heavily quarantined private test set. This ensures competitors win by building models that generalize, not models that overfit the public data.",
    },
    {
      kind: "ex",
      title: "Patient Overlap in Healthcare",
      body: "A hospital trained a diagnostic model with a random 80/20 data split. The model failed in production because the random split placed different x-rays from the exact same patient in both the train and test sets. The model memorized the patient's specific bone structure rather than learning to identify the disease.",
    },
    {
      kind: "ex",
      title: "Time-Series Forecasting",
      body: "When Uber trains models to predict ride demand, they never use a random data split. They always use a chronological split (train on January-October, test on November-December) to ensure the model proves it can predict the unknown future, rather than interpolating the known past.",
    },
    {
      kind: "trans",
      text: "But even a perfectly quarantined test set is just a static snapshot of the past; the ultimate evaluation happens the moment the model hits live traffic.",
    },
    {
      kind: "h",
      number: "6.9",
      title: "Evaluation in production vs offline",
      subtitle: "Why a model that aced the test set fails in the real world",
    },
    {
      kind: "take",
      text: "Offline metrics prove a model works mathematically; online metrics prove the model works commercially. A model that aces the test set can still fail the business.",
    },
    {
      kind: "why",
      text: "You must never launch an AI feature based solely on offline F1 or AUC scores. You must define the online, product-level tracking metrics (conversion rate, churn, latency) that will determine if the feature stays in production.",
    },
    {
      kind: "p",
      parts: [
        s("The offline metrics for the new AI search ranking algorithm are spectacular. The test set proves the model is returning highly relevant results with pristine precision and recall. You push the model to 10% of live users via an A/B test. Three days later, the analytics team reports that revenue in the test cohort has dropped by 8%. "),
        x("The offline metrics were mathematically perfect, but the model took 200 milliseconds longer to generate the results, and that latency caused users to abandon their carts.", "Offline metrics completely ignore operational constraints like speed and user friction."),
        s(" The offline test set completely missed the UX impact."),
      ],
    },
    {
      kind: "p",
      parts: [
        s("Mechanically, offline evaluation relies on historical, static data. It asks: \"If the model had been running yesterday, would it have guessed correctly?\" "),
        x("Online evaluation relies on live telemetry. It asks: 'Now that the model is running today, how are the humans actually reacting to it?'", "Online metrics capture the messy reality of human behavior."),
        s(" Offline evaluation looks at precision, recall, and AUC. Online evaluation looks at click-through rates, task completion times, API latency, and customer support ticket volumes. "),
        x("Offline evaluation is a simulation; online evaluation is reality.", "Never confuse the map for the territory."),
      ],
    },
    {
      kind: "p",
      parts: [
        s("The business consequence is that a massive gap frequently exists between statistical performance and user value. A generative AI model might draft a perfectly accurate email (offline success), but if the user finds the tone slightly robotic and deletes it anyway, the feature has failed (online failure). "),
        x("The graveyard of enterprise AI is filled with mathematically brilliant models that degraded the core user experience or cannibalized revenue.", "A model can technically succeed while the product strategically fails."),
        s(" "),
      ],
    },
    {
      kind: "p",
      parts: [
        s("You must define the online success criteria before the offline training even begins. "),
        x("Tell engineering: 'You are responsible for hitting an 85% offline precision on the test set, but I will roll back the feature if the online A/B test shows a drop in conversion rate.'", "Align the engineering goals with the actual product goals."),
        s(" You must also budget sprint capacity for immediate iteration after launch. "),
        x("An AI launch is not the end of the project; it is simply the transition from offline simulation to live telemetry optimization.", "The real work begins the moment the model hits live traffic."),
      ],
    },
    {
      kind: "ex",
      title: "Amazon's Recommendation Engine",
      body: "Amazon tests new recommendation models offline using historical purchase data. But no model goes to 100% of traffic without passing a rigorous online A/B test proving that it actually lifts real-world gross merchandise value (GMV) and doesn't increase page load latency beyond acceptable thresholds.",
    },
    {
      kind: "ex",
      title: "Zillow's iBuyer Failure",
      body: "Zillow's models for predicting house prices were technically sound on offline historical data. However, in production, the online reality shifted. Their automated buying behavior changed the market dynamics, and adverse selection meant users only accepted offers when the model overpaid. The offline metrics couldn't predict the online market reaction.",
    },
    {
      kind: "ex",
      title: "Netflix's Latency Tradeoff",
      body: "Netflix frequently researches massive, complex recommendation algorithms that achieve stunning offline accuracy. They routinely discard them because the models are too heavy to run in real-time. Netflix knowingly deploys models with lower offline accuracy because their online metrics prove that fast loading times retain more users than marginally better recommendations.",
    },
    {
      kind: "trans",
      text: "Balancing these offline mathematical metrics and online business realities is the core responsibility of the AI product manager.",
    },
    {
      kind: "h",
      number: "6.10",
      title: "PM decision lens: choosing your metric from the business problem, not the model",
      subtitle: "The cost asymmetry question that determines everything",
    },
    {
      kind: "take",
      text: "The PM dictates the metric based on the cost asymmetry of the business problem; the engineers optimize the architecture to hit that metric.",
    },
    {
      kind: "why",
      text: "If you ask engineering to \"build the best model,\" they will default to optimizing accuracy or F1. If that default metric misaligns with your unit economics, you will launch a product that technically works but destroys business value.",
    },
    {
      kind: "p",
      parts: [
        s("You are kicking off a project to build an automated content moderation system for a new social network. The engineering lead asks you what the target metric is. If you say, \"Make it as accurate as possible,\" you have failed. "),
        x("You must translate the business strategy into a mathematical target.", "You cannot manage an AI product without explicitly defining the cost of errors."),
        s(" You realize that letting a violent video slip through (false negative) will cause a PR disaster, while accidentally taking down a safe video (false positive) just requires a quick human review. You tell engineering: \"Optimize for 99% recall; we will eat the cost of the false positives.\""),
      ],
    },
    {
      kind: "p",
      parts: [
        s("Mechanically, the choice of evaluation metric fundamentally alters how the model trains. During the training loop, the loss function calculates a penalty. "),
        x("If you tell the team to optimize for precision, the loss function is mathematically heavily penalized for false positives, forcing the model to become deeply conservative.", "The metric you choose shapes the model's fundamental personality."),
        s(" If you tell them to optimize for recall, the math changes, and the model becomes aggressive. "),
        x("The metric you choose literally rewires the internal parameters of the neural network.", "You are programming the model through the loss function."),
      ],
    },
    {
      kind: "p",
      parts: [
        s("The business consequence is that the PM holds the steering wheel. Data scientists possess the technical skills to build the engine, but they do not know the company's PR risk tolerance, the customer support budget, or the lifetime value of a user. "),
        x("If the PM fails to define the metric, engineering will optimize for mathematical elegance rather than business viability.", "Without PM guidance, engineering targets the easiest path to a high score."),
        s(" The product will drift into a state where it is statistically sound but commercially disastrous."),
      ],
    },
    {
      kind: "p",
      parts: [
        s("You must write the evaluation metric directly into the Product Requirements Document. "),
        x("Before a single line of code is written, document the exact cost of a false positive versus a false negative, and state explicitly which offline metric (Precision, Recall, F1) the model must hit to pass the launch gate.", "The PRD must contain math, not just features."),
        s(" You must also define the online guardrail metrics that will trigger an automatic rollback. "),
        x("When you control the evaluation metric, you control the AI.", "The metric is the ultimate specification."),
      ],
    },
    {
      kind: "ex",
      title: "Autonomous Braking PRD",
      body: "The PM for an autonomous braking system writes a PRD that mandates 99.999% recall for pedestrian detection. The PRD explicitly states that a massive increase in false positives (braking for shadows) is an acceptable UX degradation required to ensure zero false negatives (fatalities). The engineers optimize the loss function accordingly.",
    },
    {
      kind: "ex",
      title: "E-commerce Fraud PRD",
      body: "The PM for a checkout flow realizes that a false positive (blocking a good customer) costs $150 in lost lifetime value, while a false negative (accepting a stolen card) only costs $50 in chargeback fees. The PRD mandates optimizing for extreme precision, instructing the model to let suspicious transactions through rather than risk insulting a genuine buyer.",
    },
    {
      kind: "ex",
      title: "Support Chatbot PRD",
      body: "The PM for a customer support bot mandates a high-precision threshold for automated refunds. If the bot is not 95% confident the user deserves a refund, the PRD dictates the bot must fail gracefully and hand the ticket to a human. The engineers tune the model to act conservatively, protecting the company's margins.",
    }
  ],
  quiz: [
    {
      q: "Your team builds a model to detect a rare manufacturing defect that occurs in 0.1% of products. The model achieves 99.9% accuracy. Why should you be highly skeptical?",
      options: [
        "Because 99.9% is too low for manufacturing standards.",
        "Because in a highly imbalanced dataset, a model can achieve 99.9% accuracy by simply guessing 'No Defect' every single time, rendering it completely useless.",
        "Because the model is clearly overfitting the validation data.",
        "Because accuracy metrics cannot be calculated on physical products.",
      ],
      correct: 1,
      correctFeedback: "Exactly. When the target event is rare, accuracy is a deceptive metric that masks models that do absolutely nothing.",
      wrongFeedback: "Re-read section 6.1. In an imbalanced dataset where 99.9% of the items are normal, a model that blindly guesses \"normal\" is mathematically 99.9% accurate but practically worthless.",
    },
    {
      q: "A spam filter sends a crucial client contract to the junk folder. In the language of model evaluation, what kind of error is this?",
      options: [
        "A True Negative.",
        "A False Positive; the model incorrectly flagged a safe item as a threat (crying wolf).",
        "A False Negative.",
        "A True Positive.",
      ],
      correct: 1,
      correctFeedback: "Right. The model raised a false alarm, flagging an event (spam) that wasn't actually there.",
      wrongFeedback: "Re-read section 6.2. The model positively identified the email as spam, but it was wrong. Therefore, it is a false positive.",
    },
    {
      q: "You are building an AI assistant that suggests replies to customer emails. Why is it critical to optimize this model for high Precision?",
      options: [
        "Because generating replies requires deep learning.",
        "Because if the model frequently suggests incorrect or nonsensical replies (false positives), the user's cost of reviewing and deleting them destroys the efficiency of the tool.",
        "Because precision ensures the model generates a reply for every single email.",
        "Because precision reduces the cloud compute cost.",
      ],
      correct: 1,
      correctFeedback: "Exactly. When user attention is expensive, the AI must only speak when it is highly confident to preserve trust.",
      wrongFeedback: "Re-read section 6.3. Precision measures trustworthiness. If an assistant constantly generates bad suggestions, users will simply turn it off.",
    },
    {
      q: "An AI system scans crowds to detect known terrorists at a major event. Why must this system be optimized for extreme Recall?",
      options: [
        "Because facial recognition models naturally have high precision.",
        "Because the cost of a false negative (missing a terrorist) is catastrophic, justifying the operational burden of dealing with many false positives.",
        "Because recall prevents the model from being racially biased.",
        "Because optimizing for recall lowers the latency of the cameras.",
      ],
      correct: 1,
      correctFeedback: "Right. When the cost of missing the target is an existential threat, you must cast the widest net possible, even if it generates false alarms.",
      wrongFeedback: "Re-read section 6.4. Recall measures how many of the actual targets the model catches. For security, missing a target is unacceptable, so recall is paramount.",
    },
    {
      q: "Engineering tells you they can catch 15% more fraudulent transactions if you let them adjust the model's threshold. What is the inevitable consequence of this change?",
      options: [
        "The model will run significantly slower.",
        "The model's precision will drop, meaning a higher percentage of the flagged transactions will be false alarms affecting legitimate users.",
        "The model will require a complete retraining run.",
        "The model will become unsupervised.",
      ],
      correct: 1,
      correctFeedback: "Exactly. Precision and recall are a zero-sum tradeoff. Increasing sensitivity to catch more targets mathematically guarantees more false alarms.",
      wrongFeedback: "Re-read section 6.5. Catching more fraud means lowering the probability threshold, which inevitably sweeps more legitimate transactions into the net.",
    },
    {
      q: "A data scientist argues that Model B is better than Model A because its F1 score is higher. Why should a Product Manager be cautious about making a business decision based solely on the F1 score?",
      options: [
        "F1 scores are only used for natural language processing models.",
        "The F1 score mathematically treats false positives and false negatives as equally costly, which is almost never true in real-world business economics.",
        "F1 scores do not account for the total volume of data.",
        "F1 scores are too difficult for stakeholders to understand.",
      ],
      correct: 1,
      correctFeedback: "Right. F1 is a blended average. If your business is destroyed by false negatives but unharmed by false positives, a blended metric is highly dangerous.",
      wrongFeedback: "Re-read section 6.6. The F1 score is a harmonic mean of precision and recall. It is great for technical iteration but ignores asymmetrical business costs.",
    },
    {
      q: "You are comparing a cheap linear model against an expensive deep learning model. The deep learning model has an AUC of 0.94 compared to 0.81. What does this tell you?",
      options: [
        "The deep learning model will have faster API latency.",
        "The deep learning model is fundamentally more capable of separating the target class from the noise across all possible thresholds, justifying the architectural upgrade.",
        "The deep learning model will generate fewer false positives in production.",
        "The deep learning model is overfitting the training data.",
      ],
      correct: 1,
      correctFeedback: "Exactly. AUC measures the intrinsic ranking intelligence of the architecture, independent of where you eventually set the business threshold.",
      wrongFeedback: "Re-read section 6.7. AUC proves the absolute ceiling of the model's capability, making it the perfect metric for evaluating an architectural upgrade.",
    },
    {
      q: "Why must the 'Test Set' be locked away and never used during the model tuning phase?",
      options: [
        "To save on cloud storage costs.",
        "To prevent data leakage; if the model is tuned using the test data, the final evaluation is an open-book exam that guarantees failure when encountering genuinely new data in production.",
        "To ensure the data science team works faster.",
        "To comply with GDPR data privacy regulations.",
      ],
      correct: 1,
      correctFeedback: "Right. The test set is the only mathematical guarantee of real-world generalization. If it leaks into training, the evaluation is fraudulent.",
      wrongFeedback: "Re-read section 6.8. If you tweak a model to get a better test score, you have turned it into a validation set, destroying its ability to measure true generalization.",
    },
    {
      q: "A model achieves a pristine F1 score on the offline test set, but when deployed to a 5% live audience, the conversion rate drops. What is the most likely reason?",
      options: [
        "The offline test set was too large.",
        "Offline metrics evaluate historical statistical fit, but completely ignore online UX realities like API latency, user trust, and behavioral shifts.",
        "The model was underfitting the training data.",
        "The engineering team used the wrong programming language.",
      ],
      correct: 1,
      correctFeedback: "Exactly. Offline evaluation is a simulation; online evaluation is reality. A statistically perfect model can still ruin the product experience.",
      wrongFeedback: "Re-read section 6.9. A model that generates perfect answers too slowly, or in a tone users dislike, will succeed offline but fail online.",
    },
    {
      q: "Who is ultimately responsible for determining whether a model should optimize for Precision or Recall?",
      options: [
        "The Lead Data Scientist, because it is a mathematical decision.",
        "The Product Manager, because the choice dictates the unit economics, user experience, and risk profile of the business.",
        "The DevOps Engineer, because it affects server load.",
        "The algorithm itself determines it during backpropagation.",
      ],
      correct: 1,
      correctFeedback: "Right. The PM must translate the business cost asymmetry into the target metric. If you leave this to engineering, they will guess your strategy.",
      wrongFeedback: "Re-read section 6.10. The choice between precision and recall fundamentally alters the product experience. It is a pure product strategy decision.",
    }
  ]
};
