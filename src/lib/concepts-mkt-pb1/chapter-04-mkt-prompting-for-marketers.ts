import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter04MktPromptingForMarketers = buildChapter({
  slug: "mkt-prompting-for-marketers",
  number: 4,
  shortTitle: "Prompting for Marketers",
  title: "Prompting for Marketers",
  readingMinutes: 24,
  summary:
    "A prompt is a marketing brief the model can execute — audience, offer, channel, constraints, and examples in one package. Marketers who treat prompting as brief discipline, not magic phrases, ship on-brand copy faster, run better tests, and build reusable libraries that compound team output.",
  keyTakeaway:
    "Brief beats vibes. Specific audience + offer + format + voice examples + forbidden phrases beats 'write engaging copy.' Iterate with structured feedback. Your prompt library is marketing IP — version it like brand guidelines.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "4.1",
      title: "What a Prompt Actually Is",
      subtitle: "Instructions, context, examples, and format — the four parts of every effective marketing request",
      take: "A prompt is not a casual question — it is a structured brief: what to produce (instructions), for whom and why (context), what good looks like (examples), and how it should be shaped (format and constraints). Models respond to the completeness of your brief, not your eloquence. Thin prompts produce thin marketing.",
      why: "Teams blame the model when output misses the mark — often the prompt omitted ICP, CTA, channel, or word limit. Shared vocabulary for prompt components lets strategists, writers, and agencies hand off without quality collapse.",
      paragraphs: [
        [
          s("Instructions state the task in marketer language: 'Write three LinkedIn posts', 'Generate subject line variants', 'Summarise this webinar for sales'. "),
          x(
            "Vague instructions — 'help with marketing' — force the model to guess channel, length, and goal. The guess regresses to generic SaaS median.",
            "Strong instructions name deliverable count, channel, and success intent: drive demo clicks, nurture existing users, announce feature.",
          ),
          s(" Lead every prompt with a one-sentence job statement before any background."),
        ],
        [
          s("Context supplies audience, offer, positioning, and situational facts the model cannot infer. "),
          x(
            "Paste ICP, pain point, product differentiation, promo dates, and competitive angle. Context is not fluff — it is the difference between 'everyone' and 'Series B ops leaders evaluating ERP migration'.",
            "For product claims, paste approved messaging doc excerpts — not 'be accurate' hope.",
          ),
          s(" Use a standard context block in your library: Audience / Offer / Proof / Constraints."),
        ],
        [
          s("Examples and format close the loop — show don't tell. "),
          x(
            "One on-brand sample paragraph beats ten adjectives. Format specs — word count, emoji policy, bullet vs prose, CTA placement — reduce edit cycles.",
            "Negative constraints matter: 'never use synergy, revolutionary, or game-changer' removes common failure modes from training data.",
          ),
          s(" Prompt components are reusable modules — swap context per campaign, keep format and voice modules stable."),
        ],
      ],
      examples: [
        {
          title: "Weak vs strong launch prompt",
          body: "Weak: 'Write an email about our new analytics feature.' Strong: 'Write one lifecycle email for HubSpot — audience: existing Pro customers who use reports weekly; offer: new natural-language query in beta; tone: helpful product educator not salesy; 150 words max; CTA: activate beta; include one customer quote from pasted release notes; no discount language.' Edit time dropped from 25 to 8 minutes in team trial.",
        },
        {
          title: "Agency handoff template",
          body: "A brand team ships freelancers a prompt template with locked voice examples and variable campaign context sections. Freelancer outputs require 40% less revision than free-form briefs. Prompt structure functioned as creative brief API.",
        },
        {
          title: "ChatGPT custom GPT anatomy",
          body: "A marketing ops lead built a custom GPT with instructions (always ask for channel if missing), uploaded voice PDF, and format rules. Team prompts shortened to campaign-specific context only — components lived in the GPT. Demonstrates prompt architecture as product.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-ch4-prompt-components",
      type: "flow",
      title: "What a Prompt Actually Is",
      caption:
        "Instructions, context, examples, format — then iterate until publishable. Brief beats vibes.",
    }),
    buildSection({
      number: "4.2",
      title: "The Campaign Brief as Prompt",
      subtitle: "You already write briefs — translate them into model-ready structure without reinventing strategy",
      take: "Your campaign brief already contains objective, audience, insight, proposition, proof, mandatories, and deliverables. A model-ready prompt extracts those fields into labelled blocks the model weights consistently. Strategists do not learn prompting from scratch — they learn brief export.",
      why: "Reinventing strategy inside chat windows wastes senior time. Mapping brief sections to prompt blocks preserves strategic rigour while accelerating execution tiers.",
      paragraphs: [
        [
          s("Map classic brief headers directly to prompt sections: Objective → instruction; Audience → context; Insight → context; Proposition → context; RTBs → proof paste; Deliverables → format. "),
          x(
            "A brief written for humans often buries constraints in prose — models need labels. 'Mandatories: legal disclaimer X' as its own line prevents omission better than paragraph three mention.",
            "Single source of truth: brief in Notion → export blocks to prompt — avoids strategy drift between doc and chat.",
          ),
          s(" Ban strategy-free prompting for external campaigns — brief link or paste required in Asana task."),
        ],
        [
          s("Channel-specific brief fields prevent one-size-fits-all disasters. "),
          x(
            "LinkedIn needs hook-first structure and character awareness; email needs subject/preheader discipline; landing page needs headline hierarchy and objection handling order.",
            "One brief generating all channels in one prompt often yields mediocre everywhere — sequence prompts per channel from same brief core.",
          ),
          s(" Brief-to-prompt workflow: master brief once → channel prompt templates consume shared core."),
        ],
        [
          s("Stakeholder sign-off on brief before prompt execution protects brand and legal. "),
          x(
            "AI accelerates draft from approved brief — not substitute for brief approval. Performance teams skipping brief for 'fast tests' accumulate off-brand learnings.",
            "Paid social tests still need offer truth and claim compliance in the brief layer.",
          ),
          s(" Workflow: strategist approves brief → executor runs prompt library template → editor publishes."),
        ],
      ],
      examples: [
        {
          title: "Notion brief → Jasper campaign",
          body: "Team maintains campaign brief template in Notion with required fields. Account managers copy sections into Jasper campaign inputs. Campaign rework dropped because AI never ran without completed brief checklist — governance via process not hope.",
        },
        {
          title: "ABM one-pager to prompt core",
          body: "ABM squad builds one-page account brief per target: pain, initiative, our angle, proof point. SDR and marketing prompts both pull from same core — outbound email and LinkedIn ad variants stay aligned. Brief as shared prompt kernel.",
        },
        {
          title: "Skipped brief paid social fail",
          body: "Performance marketer prompted Meta ad copy without brief — invented discount not approved. Ad ran four hours before compliance pull. New rule: brief ID in ad naming convention; no prompt without ticket link.",
        },
      ],
    }),
    buildSection({
      number: "4.3",
      title: "Specificity — Audience, Offer, Channel, Constraint",
      subtitle: "The four specificity levers that separate usable drafts from generic sludge",
      take: "Specificity means naming who you talk to, what you offer, where it runs, and what you forbid — in concrete terms, not adjectives. 'Marketing managers at 200–1000 employee SaaS firms evaluating marketing attribution, offer: 14-day free trial of multi-touch dashboard, channel: Meta feed ad, max 125 characters primary text, no competitor names' beats 'engaging ad for our product'.",
      why: "Specificity is the highest-leverage prompting skill for marketers — no new tools required. It also makes outputs testable: vague prompts produce vague results you cannot diagnose.",
      paragraphs: [
        [
          s("Audience specificity uses firmographics, role, awareness stage, and objection — not persona name alone. "),
          x(
            "'Sarah the marketer' without stage is hollow. 'Director of Demand Gen, aware of problem, sceptical of attribution vendors, needs proof of Salesforce integration' directs word choice and proof selection.",
            "Paste real customer quote snippets for voice-of-customer specificity.",
          ),
          s(" If you cannot name awareness stage, finish brief before prompting."),
        ],
        [
          s("Offer specificity includes SKU, promo terms, deadline, and CTA — models invent plausible false offers if vague. "),
          x(
            "Hallucinated discounts and fake trial lengths are prompt failures — specify exact offer language from approved sheet.",
            "Channel specificity covers format, length, policy (Meta special ad categories), and placement (feed vs story).",
          ),
          s(" Copy approved offer language verbatim into prompt constraints block."),
        ],
        [
          s("Constraint specificity: word counts, reading level, banned terms, required legal lines, competitor mention rules. "),
          x(
            "Constraints feel tedious — they save legal and brand review cycles. Models comply imperfectly but directionally when constraints are explicit lists.",
            "Numbered output structure — 'return exactly three subject lines, numbered, no preamble' — reduces parsing friction.",
          ),
          s(" Maintain channel constraint cheat sheets in prompt library footer."),
        ],
      ],
      examples: [
        {
          title: "Meta character discipline",
          body: "Team added primary text 125-char and headline 40-char limits to all Meta prompts. Previously verbose AI copy truncated awkwardly in preview. CTR stable; preview approval faster. Specificity matched platform physics.",
        },
        {
          title: "Enterprise vs SMB tone split",
          body: "Same product prompted for SMB (casual, ROI in weeks, self-serve) versus enterprise (governance, SSO, procurement cycle). Side-by-side outputs unusable if audience unspecified — one sounded flip to CIO, other too shallow for VP Ops. Audience specificity split templates.",
        },
        {
          title: "Invented free trial length",
          body: "AI draft promised 30-day trial; product was 14-day. Support tickets followed. Prompt now includes: 'Trial length: 14 days exactly — do not state other durations.' Constraint as liability control.",
        },
      ],
    }),
    buildSection({
      number: "4.4",
      title: "Voice and Tone in Prompts",
      subtitle: "Translating brand guidelines into instructions models follow — mostly",
      take: "Voice prompts combine tone adjectives with positive examples, negative examples, and forbidden phrases. 'Professional yet conversational' alone fails; three sample paragraphs plus 'never sound like McKinsey deck' succeeds more often. Voice is enforced through pattern mimicry, not abstract labels.",
      why: "Brand teams invest in voice guides that sit in PDF while chat prompts ignore them. Connecting voice docs to prompt architecture is how AI stays on-brand at scale.",
      paragraphs: [
        [
          s("Structure voice prompts in three layers: principles (short), exemplars (paste), anti-patterns (list). "),
          x(
            "Principles: 'direct, witty, no jargon'. Exemplars: two approved emails or social posts. Anti-patterns: 'avoid passive voice openings, avoid trillion-dollar market size openers'.",
            "Custom GPTs and Jasper Brand Voice institutionalise layers — ad hoc chat needs manual paste each time.",
          ),
          s(" Refresh exemplars quarterly — stale examples drift voice as brand evolves."),
        ],
        [
          s("Tone varies by channel while voice stays constant — prompt both. "),
          x(
            "Voice: who we always are. Tone: adjustment for context — celebratory launch vs empathetic churn save email.",
            "Specify tone per prompt: 'tone for this piece: urgent but not alarmist — product outage follow-up'.",
          ),
          s(" Channel voice card: LinkedIn vs support email tone deltas documented in library."),
        ],
        [
          s("Post-generation voice check: read aloud test and forbidden phrase scan. "),
          x(
            "Models slip into training median despite good prompts — editors run find-replace on banned list and read aloud for rhythm.",
            "Some teams use second-pass prompt: 'edit draft below to match exemplar rhythm; remove banned terms list'.",
          ),
          s(" Two-pass prompting — generate then voice-polish — often beats one giant prompt."),
        ],
      ],
      examples: [
        {
          title: "Mailchimp-inspired voice card",
          body: "A fintech adapted Mailchimp-style plain language rules into prompt footer: short sentences, contractions allowed, no 'leverage' or 'synergy'. Banned list enforced in second-pass prompt. Brand survey 'sounds like us' rose 22 points over six months on AI-assisted channels.",
        },
        {
          title: "CEO ghostwriting exemplars",
          body: "Comms team stores six CEO LinkedIn posts as untouchable exemplars in custom GPT. New drafts prompt with topic only — model mimics cadence. Human adds one personal anecdote per post. Voice consistency without CEO writing from scratch.",
        },
        {
          title: "Anti-pattern save",
          body: "Draft used 'In today's rapidly evolving landscape' — on anti-pattern list. Automated second pass removed opening cliché cluster. Editors report cliché frequency drop after anti-pattern enforcement in library.",
        },
      ],
    }),
    buildSection({
      number: "4.5",
      title: "Few-Shot Examples — Show the Model Your Best Work",
      subtitle: "One great sample beats a paragraph of adjectives — how marketers use few-shot prompting",
      take: "Few-shot prompting embeds one to three examples of input→output pairs before your actual request. The model mimics structure, length, rhythm, and formatting of examples more reliably than it follows abstract tone words. Your best performing email, ad, or post is training data for the session.",
      why: "Marketing teams have libraries of winners — few-shot connects historical performance creative to new drafts. It is the fastest path to on-brand output without fine-tuning.",
      paragraphs: [
        [
          s("Curate few-shot examples from proven assets — highest CTR email, best LinkedIn engagement post, sales-loved battlecard bullet. "),
          x(
            "Label clearly: 'Example 1 input brief / Example 1 output'. Then 'Now produce for: [new brief]'.",
            "Three examples optimal for most tasks — more adds window bloat; one often enough for format mimicry.",
          ),
          s(" Rotate examples when brand refreshes — old shots teach old design."),
        ],
        [
          s("Few-shot works across formats: subject lines, FAQ answers, product naming, RFP responses. "),
          x(
            "Match example channel to target channel — Instagram few-shot for Instagram, not email winner for TikTok script.",
            "Include negative example optionally: 'Below is off-brand — do not imitate: [bad sample]'.",
          ),
          s(" Build few-shot packs per channel in prompt library — 'LinkedIn pack', ' nurture email pack'."),
        ],
        [
          s("Agency and freelancer onboarding accelerates with few-shot packs — they see what good looks like immediately. "),
          x(
            "Legal may need to approve example corpus if customer names or claims included — redact as needed.",
            "Few-shot does not replace fact verification — examples model form not truth of new claims.",
          ),
          s(" Version few-shot packs when compliance updates mandatory language."),
        ],
      ],
      examples: [
        {
          title: "Winner email few-shot",
          body: "Lifecycle marketer pastes brief + two historical emails with highest click rates as examples. New onboarding sequence drafts required 50% less structural editing. Model copied hook→value→proof→CTA rhythm automatically.",
        },
        {
          title: "Ad variant few-shot for Meta",
          body: "Performance lead keeps spreadsheet of top ten ad pairs (primary + headline). New prompts include three pairs as few-shot before product brief. Variant generation quality sufficient for direct A/B entry without rewrite — testing velocity doubled.",
        },
        {
          title: "Negative few-shot for compliance",
          body: "Health marketing includes one rejected draft marked 'do not imitate — impermissible claims' plus two compliant examples. Hallucinated benefit language dropped in pilot tracking. Negative shots steer away from failure patterns.",
        },
      ],
    }),
    buildSection({
      number: "4.6",
      title: "Iteration — Critique, Refine, and Second-Pass Prompts",
      subtitle: "First draft is raw material — structured iteration is where marketers add value",
      take: "Iteration treats AI output as draft v1. Effective loops: critique pass ('list weak claims and clichés'), refine pass ('rewrite fixing issues 1–3'), channel adapt pass ('shorten for mobile feed'). Random 'try again' produces random results — structured feedback in prompts produces predictable improvement.",
      why: "Marketers who stop at first output get mediocre results and blame tools. Those who run two-pass workflows match or beat solo human speed with higher quality ceiling.",
      paragraphs: [
        [
          s("Critique-before-rewrite pattern: ask model to evaluate draft against brief rubric before rewriting. "),
          x(
            "'Score this draft 1–5 on clarity, specificity, brand voice; list three fixes; then rewrite applying fixes.' Separates diagnosis from generation — often better than single rewrite ask.",
            "Human can edit critique list before rewrite step — hybrid iteration.",
          ),
          s(" Standardise rubric aligned to brand scorecard — same criteria human editors use."),
        ],
        [
          s("Parameter iteration: temperature, length, and angle variants as separate deliberate runs — not frustration clicks. "),
          x(
            "Run A: pain-led hook. Run B: proof-led hook. Run C: question hook. Compare in editor meeting — iteration as test design.",
            "Log what changed between versions in prompt library changelog — team learns collectively.",
          ),
          s(" Never publish version two because you forgot version one was better — keep version log in task."),
        ],
        [
          s("Know when to stop iterating in chat and edit manually — last mile human edit often faster than prompt five. "),
          x(
            "Diminishing returns after two structured passes for short copy. Long-form may need outline pass, section passes, then human unify.",
            "Senior editor time is bottleneck — allocate to final 10% polish and claim verification.",
          ),
          s(" Define 'good enough to edit' standard — reduces infinite chat loops."),
        ],
      ],
      examples: [
        {
          title: "Three-pass blog workflow",
          body: "Pass 1: outline from brief. Pass 2: expand sections. Pass 3: critique for jargon and add customer quote slots. Human adds quotes and verifies stats. Total time 40% below human-from-scratch; quality matches prior human-only bar in editor blind test.",
        },
        {
          title: "Structured subject line iteration",
          body: "Marketer generates ten lines, prompts 'remove clichés and add urgency without fake scarcity', selects three, tests in Mailchimp. Iteration prompt explicit about forbidden urgency tactics — ethical constraint in loop.",
        },
        {
          title: "When iteration failed",
          body: "Junior marketer ran seven 'make it better' loops on landing page — drifted off brief. Senior reset from brief template pass 1. Lesson: unstructured iteration diverges; brief-anchored passes converge.",
        },
      ],
    }),
    buildSection({
      number: "4.7",
      title: "The Prompt Trap Catalogue",
      subtitle: "Twelve ways marketers waste time and risk brand — and the fix for each",
      take: "Common traps: vibe prompts, missing audience, no examples, mega-paste context soup, wrong model for task, no fact check, publish-first-read-later, unversioned prompts, ignoring channel limits, duplicate tool prompts, secret solo prompting outside brand system, and treating first output as final. Catalogue awareness prevents repeat incidents.",
      why: "Ops and enablement need shared language for failure modes — 'that was a trap #3' speeds coaching faster than vague 'prompt better'.",
      paragraphs: [
        [
          s("Trap 1–4: vibes only; no audience; no offer truth; context dump without labels — fixes are brief discipline and labelled blocks from section 4.2–4.3. "),
          x(
            "Trap 5–6: no few-shot examples; banned phrases not listed — voice drift guaranteed.",
            "Trap 7–8: one-shot publish without critique pass; no human fact check on stats and names.",
          ),
          s(" Pre-publish checklist catches traps 7–8 — mandatory for external."),
        ],
        [
          s("Trap 9–10: channel limits ignored; wrong model/temperature for stakes — use routing table from chapter 2. "),
          x(
            "Trap 11: shadow prompting — employees use personal ChatGPT without voice card; outputs bypass review.",
            "Trap 12: unversioned library — 'the prompt we used last quarter' no longer exists when results need replication.",
          ),
          s(" Enablement: publish trap poster in Slack; monthly review incident log against catalogue."),
        ],
        [
          s("Cultural fix: celebrate trap catches in review, not only failures shipped. "),
          x(
            "Editor flags 'trap #8 caught — fake stat' in comment → team learns. Blame culture hides traps.",
            "Quarterly trap audit on random sample of shipped AI-assisted assets — measure trap frequency trend.",
          ),
          s(" Goal: trap incidents down quarter over quarter — leading indicator of AI maturity."),
        ],
      ],
      examples: [
        {
          title: "Context soup trap",
          body: "Marketer pasted 40-page PDF without summary — model ignored discount code on page 31. Fix: one-page brief summary plus labelled mandatory fields. Trap #4 incident added to onboarding deck.",
        },
        {
          title: "Shadow prompting",
          body: "Sales rep used personal AI for outbound — competitor name misspelled, tone off-brand. Marketing issued approved custom GPT link and banned personal tools for customer-facing copy. Trap #11 governance.",
        },
        {
          title: "Unversioned winner",
          body: "Team could not replicate Q2 best campaign email — prompt lived in departed employee's chat history. Library now requires prompt version ID in campaign record. Trap #12 drove CMS field addition.",
        },
      ],
    }),
    buildSection({
      number: "4.8",
      title: "The Marketer Decision Lens — Prompt Library",
      subtitle: "Building and governing reusable prompts as marketing IP — ownership, versioning, and adoption",
      take: "A prompt library stores templates with metadata: channel, task, model version, temperature, few-shot pack, owner, last tested date, and example output link. It turns individual prompting skill into organisational capability. Lens questions: Is this prompt library-owned or ad hoc? Versioned? Mapped to brief workflow? Measured for edit time and performance?",
      why: "Without a library, AI scale equals headcount scale — every new hire relearns from zero. With a library, AI compounds like brand guidelines did for design systems.",
      paragraphs: [
        [
          s("Library structure: folders by channel and task — Email/Nurture, Paid/Social, Product/Launch, Sales/Enablement. "),
          x(
            "Each entry: template text with {{variables}}, required brief fields, model routing note, approver tier.",
            "Notion, Confluence, or dedicated tools — pick where marketers already work; adoption beats perfect tooling.",
          ),
          s(" Assign library owner in marketing ops — not 'everyone maintains' chaos."),
        ],
        [
          s("Versioning ties prompts to model releases and brand refreshes — v2.3 Jasper-GPT4o-2026Q2 in title. "),
          x(
            "Changelog note when editing: what improved, what campaign proved it.",
            "Retire prompts with 'do not use' banner when compliance or voice changes — don't delete history.",
          ),
          s(" Link winning campaign assets back to prompt version — close learning loop."),
        ],
        [
          s("Adoption metrics: weekly active users of library, median edit minutes vs ad hoc, trap incident rate, template reuse count. "),
          x(
            "Train new hires: library tour in week one; first three tasks must use templates.",
            "Executives see library as IP — budget for curation time, not only tool licences.",
          ),
          s(" Quarterly library day: prune zombies, promote winners, update few-shot packs from best campaigns."),
        ],
      ],
      examples: [
        {
          title: "Notion prompt library at scale",
          body: "50-person marketing org maintains 120 prompt templates in Notion with model tags and brief links. Median email edit time fell 35% year one. New hire time-to-first-publishable email dropped from 10 days to 4. Library ownership rotated quarterly among senior writers.",
        },
        {
          title: "Version ID in HubSpot campaigns",
          body: "Campaign custom field 'Prompt version' required for AI-assisted emails. Analytics correlated v3.1 onboarding sequence with higher CTR than v2.4 — data justified voice tweak in library. Measurement closed loop.",
        },
        {
          title: "Zombie template prune",
          body: "Annual audit found 40% templates unused 12+ months — archived. Active set shrank to 72 high-use templates; adoption rose because search noise fell. Library hygiene as ops discipline.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A junior marketer prompts: 'Write engaging social copy for our product.' What is the highest-leverage fix?",
      options: [
        "Switch to a more expensive model.",
        "Add specificity: audience, offer, channel, format constraints, and one few-shot example — brief discipline not magic words.",
        "Click regenerate until lucky.",
        "Remove all constraints for creativity.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Specificity and examples beat vibes. Re-read sections 4.1 and 4.3.",
      wrongFeedback:
        "Thin prompts produce generic output — add audience, offer, channel, and examples. Re-read sections 4.1 and 4.3.",
    },
    {
      kind: "order",
      q: "Order the four core prompt components from foundation to final polish workflow.",
      prompt: "Drag to arrange from first building block (top) to iterative step (bottom).",
      items: [
        "Instructions — what to produce",
        "Context — audience, offer, facts",
        "Examples and format constraints",
        "Iterate with structured critique and refine passes",
      ],
      correctFeedback:
        "Right. Instructions → context → examples/format → iteration. Re-read sections 4.1 and 4.6.",
      wrongFeedback:
        "Build the brief structure before iterating — components first, refinement last. Re-read sections 4.1 and 4.6.",
    },
    {
      kind: "categorize",
      q: "Classify each scenario as a prompt trap or best practice.",
      categories: ["Trap", "Best practice"],
      items: [
        { text: "Publishing first AI output without fact-checking statistics.", category: 0 },
        { text: "Including two winner emails as few-shot examples before drafting.", category: 1 },
        { text: "Pasting 40-page PDF with no labelled summary or mandatories.", category: 0 },
        { text: "Second-pass prompt to remove banned clichés from draft.", category: 1 },
        { text: "Using personal ChatGPT without brand voice for customer emails.", category: 0 },
        { text: "Storing templates with version ID and model tag in prompt library.", category: 1 },
      ],
      correctFeedback:
        "Right. Traps: no review, context soup, shadow tools. Best practices: few-shot, iteration, versioned library. Re-read sections 4.5–4.8.",
      wrongFeedback:
        "External publish needs review; library and few-shot compound quality. Re-read sections 4.5–4.8.",
    },
    {
      q: "Voice guide says 'professional yet friendly' but outputs still sound generic. Next step?",
      options: [
        "Add three on-brand exemplar paragraphs and a forbidden phrase list — show don't tell.",
        "Repeat 'professional yet friendly' in all caps.",
        "Abandon AI for voice-critical content entirely.",
        "Increase temperature to maximum.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Exemplars and anti-patterns enforce voice better than adjectives alone. Re-read section 4.4.",
      wrongFeedback:
        "Models mimic patterns in examples — paste exemplars and banned terms. Re-read section 4.4.",
    },
    {
      kind: "order",
      q: "Order the campaign brief-to-publish workflow for AI-assisted marketing.",
      prompt: "Drag to arrange from first step (top) to last (bottom).",
      items: [
        "Strategist approves campaign brief",
        "Executor runs channel prompt template with brief blocks",
        "Structured iteration and voice polish passes",
        "Human fact-check and brand review",
        "Publish with prompt version recorded",
      ],
      correctFeedback:
        "Right. Brief → prompt → iterate → review → publish with version. Re-read sections 4.2 and 4.8.",
      wrongFeedback:
        "Brief approval precedes prompting; version logging closes the loop. Re-read sections 4.2 and 4.8.",
    },
    {
      q: "Why is a versioned prompt library marketing IP?",
      options: [
        "It replaces the need for human editors.",
        "It compounds team output — captures what worked, routes models, and reduces replicate failure across hires and campaigns.",
        "It is required by law.",
        "Models cannot run without a library file.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Libraries institutionalise prompting skill and link to performance learning. Re-read section 4.8.",
      wrongFeedback:
        "Libraries scale brief discipline and preserve winners — organisational capability not legal formality. Re-read section 4.8.",
    },
  ],
});
