import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter03MktLongFormContentProduction = buildChapter({
  slug: "mkt-long-form-content-production",
  number: 3,
  shortTitle: "Long-Form Production",
  title: "Long-Form Content Production",
  readingMinutes: 24,
  summary:
    "Long-form content — pillars, reports, case studies, whitepapers — still carries disproportionate authority and conversion weight. AI compresses research synthesis, outline iteration, and first-draft speed — but quality long-form demands brief discipline, expert insertion, human editing, and fact verification. Marketers who treat AI as the final author ship liability; those who treat it as a structured production line ship assets sales and search reward.",
  keyTakeaway:
    "Brief → research → outline → draft → expert layer → edit → verify. AI accelerates the middle steps on a brief humans own. Skip a step and long-form becomes long noise — fluent, forgettable, and sometimes legally hazardous.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "3.1",
      title: "The Brief as Foundation",
      subtitle: "Every quality long-form asset starts here — AI cannot substitute a weak brief",
      take: "A production brief specifies audience, funnel stage, angle, key messages, proof points, sources to use, tone constraints, CTA, success metric, and named approvers. AI output quality ceiling is set by brief quality — comprehensive briefs yield drafts needing editorial polish; vague prompts yield generic essays requiring rewrite. Long-form without brief is gambling with brand and legal exposure.",
      why: "Teams rush to Jasper or ChatGPT to 'save time' by skipping briefs — then spend more time fixing directionless drafts. Brief discipline is the highest-leverage habit in AI-assisted long-form production.",
      paragraphs: [
        [
          s("Standardise brief templates in Notion, Asana, or HubSpot campaigns. "),
          x(
            "Required fields: persona, pain point, angle, differentiation claim, mandatory proof (customer quotes, data), forbidden claims, word count range, internal links, SME interview needed Y/N.",
            "AI brief assistants can expand bullet stubs into full briefs — but strategist approves before draft generation.",
          ),
          s(" No brief sign-off, no AI draft trigger — enforce in workflow automation."),
        ],
        [
          s("Briefs should include competitive and SERP context for SEO long-form. "),
          x(
            "Target keyword, intent, top three SERP formats to beat, and 'what we add that they lack'. Paste SERP summaries into brief for AI outline step.",
            "Without SERP context, AI defaults to generic structure search already rewards elsewhere.",
          ),
          s(" Attach Ahrefs or Semrush export snippet to every SEO brief."),
        ],
        [
          s("Briefs allocate human time explicitly — AI does not remove review. "),
          x(
            "Estimate: SME interview 60 min, editor 3 hours, legal 30 min for regulated claims. Brief documents these so capacity planning is honest.",
            "Leadership sees AI as draft accelerator, not headcount elimination for long-form.",
          ),
          s(" Brief approval is the contract between strategy and production."),
        ],
      ],
      examples: [
        {
          title: "Notion brief template — B2B SaaS",
          body: "A SaaS team locked long-form briefs in Notion with required proof-point fields. Jasper pulls via Zapier only after strategist checkbox. Revision cycles dropped from 4.2 to 1.8 average. Brief quality predicted outcome better than model choice.",
        },
        {
          title: "Weak brief failure — AI whitepaper",
          body: "Prompt: 'write whitepaper on AI in marketing'. Output was unsalvageable generic thought leadership. Re-briefed with customer data, CFO persona, and ROI angle — second draft 70% publishable. Same tool; different brief.",
        },
        {
          title: "HubSpot campaign brief — gated asset",
          body: "HubSpot campaign objects hold brief metadata synced to content tasks. Reporting tied brief completeness to conversion on gated PDFs — incomplete briefs correlated with lower download-to-demo rate.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-cs-ch3-long-form-workflow",
      type: "flow",
      title: "Long-Form Production Workflow",
      caption:
        "Brief → research → outline → draft + expert layer → edit + verify. AI accelerates middle steps; humans own gates at each end.",
    }),
    buildSection({
      number: "3.2",
      title: "Research and Source Gathering",
      subtitle: "Retrieval before generation — building the fact layer AI will phrase",
      take: "Long-form research gathers citable facts, statistics, customer quotes, product details, and competitive context from authoritative sources — CRM exports, analyst reports, interviews, help docs, and retrieval tools. AI summarises and structures research packets for prompts — but marketers must verify every claim before it enters drafts. Generation without retrieval produces confident hallucinations at scale.",
      why: "Long-form assets carry more reputational weight than tweets. One false statistic in a whitepaper echoes through sales decks and press outreach for years.",
      paragraphs: [
        [
          s("Build a research packet per brief — source list with URLs and access dates. "),
          x(
            "Perplexity, enterprise search, or RAG over internal wiki for external facts. Paste customer interview transcripts and product release notes for proprietary claims.",
            "Prompt AI: 'summarise these sources into bullet facts with citation tags — do not add facts not in sources'.",
          ),
          s(" Research packet is a living doc until fact-check gate clears."),
        ],
        [
          s("Separate public research from confidential inputs. "),
          x(
            "Use approved ChatGPT Team or Jasper with data controls for customer names and metrics. Never paste unreleased financials into public models.",
            "Marketing ops maintains approved tool list for research workflows.",
          ),
          s(" DLP policy is part of research design — not IT surprise."),
        ],
        [
          s("SME interviews remain irreplaceable for differentiated long-form. "),
          x(
            "AI transcribes Zoom via Otter or Fireflies; summarises themes; drafts pull quotes with attribution placeholders. SME verifies quotes before publish.",
            "Interview long-form beats AI-only research for backlinks and sales credibility.",
          ),
          s(" Schedule SME time in brief — not as post-draft emergency."),
        ],
      ],
      examples: [
        {
          title: "Perplexity + manual packet — industry report",
          body: "Team used Perplexity for citable industry stats, pasted into research packet, added proprietary survey from Typeform. ChatGPT drafted only from packet. Zero hallucination flags at legal review — first time in four reports.",
        },
        {
          title: "Gong transcript mining — case study research",
          body: "Customer success calls supplied outcome quotes for case study. AI extracted candidate quotes; CSM approved three. Draft authenticity beat pure AI invention — prospect trust rose in sales feedback.",
        },
        {
          title: "Hallucinated stat disaster — avoided",
          body: "Draft cited '73% of enterprises…' with no source — classic AI fabrication. Fact-check gate caught it. Replaced with verified Gartner footnote. Gate paid for itself one incident.",
        },
      ],
    }),
    buildSection({
      number: "3.3",
      title: "Outline Stress-Testing",
      subtitle: "Structure before prose — AI iterates outlines cheaply",
      take: "Outlines define H2/H3 logic, argument flow, proof placement, and CTA positions before full draft investment. AI generates multiple outline variants from brief and research packet in minutes — strategists and SMEs stress-test for gaps, redundancy, and journey fit. Fixing structure in outline saves hours of editing fluent wrong drafts.",
      why: "Marketers who prompt 'write 2,000 words' without outline approval discover structural problems at draft stage — when sunk cost bias pushes weak structure to publish.",
      paragraphs: [
        [
          s("Run outline prompts requesting structure only — no prose. "),
          x(
            "'Given brief and research packet, produce three outline options with H2/H3, proof placement notes, and word count estimates — no body copy'.",
            "Compare options in 15-minute review; select one; optionally merge sections from runners-up.",
          ),
          s(" SME approves outline before draft prompt runs — hard gate."),
        ],
        [
          s("Stress-test outlines against SERP and sales objections. "),
          x(
            "Checklist: Does outline answer top People Also Ask? Missing comparison section competitors have? Objection handler present for known deal-blocker?",
            "AI can audit outline against competitor URL pasted in prompt — 'what sections do they cover we do not?'",
          ),
          s(" Add missing sections to outline — not as post-publish patches."),
        ],
        [
          s("Outline includes internal link and visual placeholders. "),
          x(
            "Note cluster URLs to link, diagram needs, data viz sources. Production designers receive outline with asset list early.",
            "AI draft step references outline anchors — reduces rework when visuals arrive late.",
          ),
          s(" Outline is the shared contract between writer, editor, design, and SEO."),
        ],
      ],
      examples: [
        {
          title: "Three-outline method — Jasper",
          body: "Content lead requests three outlines per pillar brief. Team votes async in Notion comments. Winning outline fed to draft prompt. Structural disputes resolved in 30 minutes — previously emerged after full draft.",
        },
        {
          title: "SME outline veto — regulated fintech",
          body: "Compliance SME rejected outline missing 'limitations and risks' section. Added before draft — legal review clean first pass. Outline stress-test prevented regulatory rewrite.",
        },
        {
          title: "SERP gap caught early",
          body: "AI outline audit vs top Ahrefs SERP result flagged missing 'implementation timeline' section. Added to outline; draft ranked faster post-publish — matched searcher expectation.",
        },
      ],
    }),
    buildSection({
      number: "3.4",
      title: "AI-Assisted First Draft",
      subtitle: "Section-by-section generation from approved outline — not one-shot essays",
      take: "First drafts should be generated section-by-section from outline and research packet — controlling length, tone, and citation discipline per H2. One-shot 'write the whole whitepaper' prompts produce uneven quality and drift from brief. AI first draft is raw material marked DRAFT — never customer-facing without expert layer and edit passes.",
      why: "Drafting is where AI saves the most hours — if constrained. Unconstrained drafts create editing debt that erases time savings.",
      paragraphs: [
        [
          s("Use chained prompts per outline section. "),
          x(
            "For each H2: paste brief excerpt, research bullets, voice guide, word target, 'write section — cite only provided facts'. Assemble in doc.",
            "Section chaining prevents mid-essay angle drift common in long one-shot outputs.",
          ),
          s(" Label document AI-FIRST-DRAFT watermark until edit gate clears."),
        ],
        [
          s("Constrain voice with examples, not adjectives. "),
          x(
            "Paste two paragraphs of approved brand copy in prompt — 'match this rhythm and sentence length'. 'Professional but warm' alone is too vague.",
            "Jasper Brand Voice and custom GPTs help when fed enough approved samples.",
          ),
          s(" Voice mismatch at draft stage means prompt fix — not editor heroics alone."),
        ],
        [
          s("Draft metrics: time saved vs edit hours required. "),
          x(
            "Track first-draft time and editor hours per asset. If edit hours exceed manual write baseline, adjust prompts or brief quality.",
            "Honest scorecard prevents 'we use AI' theatre when net productivity is negative.",
          ),
          s(" Review draft metrics quarterly — prompt library improves from data."),
        ],
      ],
      examples: [
        {
          title: "Section chaining — 2,500-word pillar",
          body: "Writer generated eight H2 sections individually in ChatGPT Team with research packet chunks. Total generation 40 minutes; assembly 15 minutes. Full one-shot attempt needed 6 hours edit — section method won.",
        },
        {
          title: "Jasper campaign — voice-trained draft",
          body: "Brand Voice trained on 20 approved blogs. First draft required 30% edit vs 60% pre-training. Training data investment compounded across long-form pipeline.",
        },
        {
          title: "One-shot regret — agency deliverable",
          body: "Agency one-shot generated whitepaper drifted from brief angle by section four. Client rejected. Re-ran section-chained internally — accepted second version. Method mattered more than model.",
        },
      ],
    }),
    buildSection({
      number: "3.5",
      title: "Expert Insertion Layer",
      subtitle: "Where proprietary insight replaces AI commodity prose",
      take: "Expert insertion adds SME quotes, original analysis, customer stories, product-specific guidance, and contrarian takes AI cannot invent credibly. Schedule expert input after AI scaffold draft — experts react to structure faster than blank pages. Long-form without expert layer is indistinguishable from competitor AI content.",
      why: "This is the differentiation step Playbook 1 called competitive advantage. Expert layer transforms AI draft from parity to authority.",
      paragraphs: [
        [
          s("Send experts outline plus draft with highlighted 'INSERT EXPERT' blocks. "),
          x(
            "Ask specific questions: 'validate this claim', 'add war story', 'correct technical step 3'. 30-minute SME sessions beat async novellas.",
            "AI can draft SME question lists from outline gaps — human sends to expert.",
          ),
          s(" Record expert sessions; AI transcribes for quote extraction with approval."),
        ],
        [
          s("Product marketing owns factual product claims insertion. "),
          x(
            "AI drafts generic feature descriptions; PMM replaces with accurate positioning, limits, and roadmap boundaries.",
            "Launch long-form without PMM review ships wrong capabilities — sales pays the price.",
          ),
          s(" PMM sign-off block on brief for any product-tied long-form."),
        ],
        [
          s("Original analysis beats more AI paragraphs. "),
          x(
            "One proprietary chart or benchmark table elevates entire piece. Data team or analyst supplies; AI captions and explains — does not fabricate numbers.",
            "Expert layer includes data viz, not only quotes.",
          ),
          s(" If expert layer is thin, pause publish — do not ship parity."),
        ],
      ],
      examples: [
        {
          title: "CTO commentary blocks — infrastructure SaaS",
          body: "Pillar draft had INSERT CTO blocks on architecture tradeoffs. CTO 20-minute Loom filled blocks. Final piece earned Hacker News discussion — expert voice drove links, not AI body.",
        },
        {
          title: "Customer quote verification",
          body: "AI invented plausible customer quote in draft — flagged at expert layer. Replaced with verified G2 excerpt and permission. Expert layer caught what edit might have missed.",
        },
        {
          title: "PMM roadmap boundary fix",
          body: "Draft implied feature GA; PMM corrected to beta with date. Prevented sales over-promise on one blog. Expert layer is risk control.",
        },
      ],
    }),
    buildSection({
      number: "3.6",
      title: "Human Editing for Voice and Clarity",
      subtitle: "Compression, taste, and narrative — the non-delegable marketer job",
      take: "Human editing reshapes AI drafts for brand voice, narrative momentum, redundancy removal, and reader experience. Editors kill AI rhetorical tics — 'in today's landscape', hollow transitions, listicle bloat. They compress word count while preserving proof. Editing is not proofreading alone — it is creative direction on existing material.",
      why: "Readers forgive minor errors; they do not forgive boring or synthetic tone. Editing is where long-form earns trust or loses it.",
      paragraphs: [
        [
          s("Edit in passes: structure, voice, line, proof. "),
          x(
            "Pass one: section order and argument flow. Pass two: voice and sentence rhythm vs brand guide. Pass three: line clarity and cut 15% words. Pass four: verify proof still aligns after cuts.",
            "AI lint tools flag cliché phrases — editors still judge narrative.",
          ),
          s(" Named editor on every long-form asset — accountability, not crowd edit."),
        ],
        [
          s("Kill AI patterns aggressively. "),
          x(
            "Banned phrase list in style guide: leverage, delve, robust, game-changer, unlock. Editors search-replace known AI tells.",
            "Readable and Hemingway apps help junior editors; senior editors own story arc.",
          ),
          s(" Read aloud test — AI prose often fails ear test before eye test."),
        ],
        [
          s("Editing time is budgeted, not squeezed. "),
          x(
            "Rule of thumb: AI first draft still needs 2–4 editor hours per 2,000 words for flagship tier. Under-budgeting editing publishes AI smell.",
            "Track edit hours in project tool for capacity honesty.",
          ),
          s(" Protect editor FTE when AI drafting expands — compression layer scales demand."),
        ],
      ],
      examples: [
        {
          title: "Style guide + search — AI tic purge",
          body: "Editor ran AI cliché list across draft — 47 instances removed. Engagement time on page rose 18% vs prior AI-published post with light edit. Readers sense polish.",
        },
        {
          title: "Narrative restructure — case study",
          body: "AI case study listed features chronologically. Editor rewrote as problem-journey-outcome story. Sales adoption of asset doubled — structure edit beat fact edit.",
        },
        {
          title: "Under-edited publish backlash",
          body: "Rushed AI report published with minimal edit. LinkedIn comments called out 'ChatGPT vibes'. Pulled, re-edited, republished. Brand lesson: editing is reputation insurance.",
        },
      ],
    }),
    buildSection({
      number: "3.7",
      title: "Fact-Checking and Compliance",
      subtitle: "Verify every claim before external publish — especially post-AI",
      take: "Fact-checking validates statistics, product claims, competitor references, customer permissions, and regulatory language against research packet and authoritative sources. AI increases fact-check burden because fluency outruns accuracy. Build mandatory checklists: every number has footnote, every quote has approval, every competitor claim has legal OK.",
      why: "Long-form errors scale through sales, PR, and partner channels. Fact-check is cheaper than retractions and angry prospects.",
      paragraphs: [
        [
          s("Fact-check gate is separate from editorial gate — different skills. "),
          x(
            "Fact-checker (or editor wearing hat) works from research packet with highlighter on every claim in draft. Unsourced claims get source or cut.",
            "AI assist: 'list every factual claim in this doc' — human verifies each.",
          ),
          s(" No publish without named fact-check sign-off on regulated or competitive content."),
        ],
        [
          s("Legal and compliance review triggers by content type. "),
          x(
            "Healthcare, finance, earnings-adjacent, comparative advertising — legal review non-optional. AI does not know your jurisdiction's rules.",
            "Pre-approved claim library reduces legal cycle — AI drafts pull from library blocks only.",
          ),
          s(" Maintain claim library in Notion — single source of truth for AI prompts."),
        ],
        [
          s("Customer and logo permissions are facts too. "),
          x(
            "Case studies need written approval; AI inventing 'Acme Corp saw 40% lift' is lawsuit material.",
            "Permission docs linked in CMS before publish button enables.",
          ),
          s(" CRM note or Docusign link on every customer reference."),
        ],
      ],
      examples: [
        {
          title: "Claim library — pharma marketing",
          body: "Pharma team maintains FDA-approved claim snippets. AI drafts assemble only from library for long-form. Legal review time cut 70%. Off-label AI invention structurally impossible.",
        },
        {
          title: "Competitor comparison legal scrub",
          body: "Comparison guide named three rivals. Legal redlined two claims; replaced with sourced feature matrix from public docs. Fact-check plus legal prevented defamation exposure.",
        },
        {
          title: "Statistic footnote audit",
          body: "Fact-checker found four unsourced stats in AI draft — all removed or replaced with cited Ahrefs and Gartner links. Published piece survived prospect scrutiny on sales calls.",
        },
      ],
    }),
    buildSection({
      number: "3.8",
      title: "The Marketer Decision Lens — Quality Threshold",
      subtitle: "Five gates before long-form ships — AI speed does not lower the bar",
      take: "Before publishing long-form, confirm: (1) Brief approved with proof requirements. (2) Research packet sourced — no generative-only facts. (3) Outline and expert layer complete. (4) Editor sign-off on voice and narrative. (5) Fact-check and legal if triggered. AI compresses timeline between gates — it does not remove them. Quality threshold is brand policy, not optional for 'AI-assisted' labels.",
      why: "Teams celebrate draft speed and skip gates under deadline pressure — the most common long-form failure mode in AI-era marketing.",
      paragraphs: [
        [
          s("Gate one and two: brief and research integrity. "),
          x(
            "If brief lacks proof requirements or research packet has generative-only stats, stop — fix upstream.",
            "Shortcuts here multiply edit and legal cost downstream.",
          ),
          s(" Workflow tools should block publish status without brief link."),
        ],
        [
          s("Gate three and four: expertise and editing. "),
          x(
            "Expert layer thin? Delay publish or downgrade to short-form tier. Edit hours below threshold? Flag quality risk.",
            "Tier 1 long-form has non-negotiable SME and editor names on ticket.",
          ),
          s(" Quality threshold scales by tier — but every tier has minimum gates."),
        ],
        [
          s("Gate five: verification and accountability. "),
          x(
            "Fact-check sign-off, legal if required, named publisher accountable post-ship.",
            "Retrospective on incidents updates gate checklist — living policy.",
          ),
          s(" Run gate audit on random sample monthly — compliance decays without inspection."),
        ],
      ],
      examples: [
        {
          title: "Asana publish checklist — gate enforcement",
          body: "Custom Asana fields require brief URL, editor, fact-checker before status 'Ready to publish'. Team bypass attempts dropped. Incident rate on factual errors fell to zero over two quarters.",
        },
        {
          title: "Tiered quality policy — content ops doc",
          body: "Tier 1 pillar: all five gates. Tier 2 cluster: brief, edit, fact-check. Tier 3 internal doc: brief only. Clarity prevented one-size-fits-all bureaucracy while protecting external brand.",
        },
        {
          title: "Missed gate retrospective",
          body: "Wrong pricing in AI draft reached blog — brief had no PMM gate. Added PMM to gate five for pricing mentions. Process fix, not model swap.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What sets the quality ceiling for an AI long-form first draft?",
      options: [
        "The AI model version only.",
        "Brief quality — audience, angle, proof, and constraints defined before generation.",
        "Word count target.",
        "Number of Jasper seats.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Brief quality determines draft usefulness — AI amplifies brief strength or weakness. Re-read sections 3.1 and 3.4.",
      wrongFeedback:
        "Without a strong brief, AI drafts drift generic. Brief is the foundation. Re-read sections 3.1 and 3.4.",
    },
    {
      kind: "order",
      q: "Order the long-form production workflow from first to last.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Approved brief with proof requirements",
        "Research packet from authoritative sources",
        "Outline stress-test and SME approval",
        "AI-assisted section-by-section first draft",
        "Expert insertion and human editing",
        "Fact-check and compliance sign-off",
      ],
      correctFeedback:
        "Right. Brief → research → outline → draft → expert/edit → verify. Re-read section 3.1 diagram.",
      wrongFeedback:
        "Drafting comes after outline approval; fact-check comes last. Re-read section 3.1.",
    },
    {
      kind: "categorize",
      q: "Sort each task into AI-appropriate vs human-required.",
      categories: ["AI-appropriate", "Human-required"],
      items: [
        { text: "Summarising interview transcripts into themes.", category: 0 },
        { text: "Approving outline structure for funnel fit.", category: 1 },
        { text: "Generating H2 section draft from research packet.", category: 0 },
        { text: "Verifying customer quote permission.", category: 1 },
        { text: "Listing factual claims for checker's review.", category: 0 },
        { text: "Named fact-check sign-off before publish.", category: 1 },
      ],
      correctFeedback:
        "Right. AI accelerates synthesis and drafting; humans own judgment, permissions, and sign-offs. Re-read sections 3.2–3.7.",
      wrongFeedback:
        "Accountability and verification stay human even when AI assists. Re-read sections 3.2–3.7.",
    },
    {
      q: "Why generate long-form section-by-section instead of one-shot?",
      options: [
        "Models cannot write more than 500 words.",
        "Section chaining controls drift, length, and citation discipline per outline block.",
        "SEO requires separate URLs per section.",
        "One-shot is always illegal.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Section-by-section drafting matches approved outline and reduces edit debt. Re-read section 3.4.",
      wrongFeedback:
        "One-shot long prompts often drift from brief and need heavy restructure. Re-read section 3.4.",
    },
    {
      q: "AI draft includes '73% of enterprises report…' with no source in research packet. Correct action?",
      options: [
        "Publish — sounds credible.",
        "Remove or replace with verified sourced stat at fact-check gate.",
        "Add footnote 'AI estimate'.",
        "Only fix if legal complains.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Unsourced stats are classic AI hallucinations — verify or cut. Re-read section 3.7.",
      wrongFeedback:
        "Fluent unsourced claims are liability. Fact-check gate requires sources. Re-read section 3.7.",
    },
    {
      kind: "categorize",
      q: "Classify each practice as quality gate vs risky shortcut.",
      categories: ["Quality gate", "Risky shortcut"],
      items: [
        { text: "SME approves outline before draft prompt.", category: 0 },
        { text: "Skip brief for urgent whitepaper.", category: 1 },
        { text: "Named editor pass for voice and cuts.", category: 0 },
        { text: "Publish AI first draft with light skim.", category: 1 },
        { text: "Claim library for regulated copy.", category: 0 },
        { text: "Invent customer quote for narrative flow.", category: 1 },
      ],
      correctFeedback:
        "Right. Gates protect brand; shortcuts recreate AI long-form failures. Re-read section 3.8.",
      wrongFeedback:
        "Brief, outline, edit, and fact-check gates are non-negotiable for external long-form. Re-read section 3.8.",
    },
  ],
});
