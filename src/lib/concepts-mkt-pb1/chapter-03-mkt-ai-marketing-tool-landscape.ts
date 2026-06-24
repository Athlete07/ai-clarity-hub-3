import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter03MktAiMarketingToolLandscape = buildChapter({
  slug: "mkt-ai-marketing-tool-landscape",
  number: 3,
  shortTitle: "AI Marketing Tool Landscape",
  title: "The AI Marketing Tool Landscape",
  readingMinutes: 24,
  summary:
    "The marketing AI market stacks in layers: foundation models, packaged writing and creative tools, embedded platform features, and automation glue. Marketers who map the landscape avoid paying three times for the same capability, place each tool in the right workflow, and build a stack that compounds rather than sprawls.",
  keyTakeaway:
    "Foundation models are engines; Jasper and HubSpot AI are dashboards; Zapier chains the workflow. Buy for job-to-be-done and integration — not feature checklists. One clear layer per problem beats six overlapping subscriptions.",
  pmCallout: MKT_CALLOUT,
  sections: [
    buildSection({
      number: "3.1",
      title: "Foundation Models — The Engines Under Everything",
      subtitle: "GPT, Claude, Gemini — what marketers get from going direct versus using wrappers",
      take: "Foundation models from OpenAI, Anthropic, Google, and Meta are general-purpose reasoning and generation engines accessed via chat, API, or enterprise agreements. Going direct offers maximum flexibility and newest capabilities; wrappers add templates, guardrails, and team workflow. Most marketing teams need one direct access path plus specialised surface tools — not five foundation subscriptions.",
      why: "Procurement often duplicates spend: ChatGPT Team, Jasper (built on foundation APIs), Copilot, and embedded HubSpot AI — all touching the same underlying model class. Understanding the engine layer clarifies what you are actually paying for and where switching costs live.",
      paragraphs: [
        [
          s("Foundation models are commodities at the capability layer — differentiation is interface, integration, and governance. "),
          x(
            "ChatGPT Team, Claude Enterprise, and Gemini Workspace provide chat, file upload, custom instructions, and admin controls. APIs add programmatic scale for variant generation and internal tools.",
            "Jasper, Copy.ai, and Writer.com wrap similar engines with marketing templates, brand voice, and collaboration — you pay margin for UX and workflow, not a different physics of language.",
          ),
          s(" Audit: count how many paid surfaces access the same model family — consolidate where wrappers do not add distinct workflow."),
        ],
        [
          s("Direct foundation access wins for exploratory work, custom GPTs, and non-standard briefs. "),
          x(
            "Wrappers win for distributed teams needing guardrailed templates, approval flows, and marketers who will not prompt-engineer. Neither replaces CRM-native AI for record-aware tasks.",
            "Enterprise agreements add data isolation, SSO, and audit — non-negotiable for regulated or confidentiality-sensitive marketing.",
          ),
          s(" Pick one primary foundation vendor for general marketing use; justify second only with clear routing table from chapter 2."),
        ],
        [
          s("Model churn is real — marketing ops should track release notes, not treat tools as static. "),
          x(
            "GPT-4 to GPT-4o, Claude 3 to 3.5, Gemini multimodal updates — behaviour, window size, and pricing shift. Prompt libraries need version tags tied to model IDs.",
            "Vendors downstream of foundations inherit changes — Jasper quality jumps when they upgrade base model; may break when they do.",
          ),
          s(" Quarterly review: re-run bake-off on flagship prompts when foundation providers ship major updates."),
        ],
      ],
      examples: [
        {
          title: "ChatGPT Team as marketing backplane",
          body: "A 40-person marketing org standardised on ChatGPT Team for custom GPTs: one for brand voice, one for SEO brief expansion, one for exec ghostwriting drafts. Jasper was dropped for redundant copy tasks. Savings funded Claude seats for long-document analysis. Foundation direct access plus discipline replaced wrapper sprawl.",
        },
        {
          title: "API headline factory",
          body: "A performance agency pipes product feeds into OpenAI API via internal script — thousands of SKU-specific ad descriptions monthly. Wrapper tools could not match ERP integration. Foundation API layer enabled unit economics impossible in chat UI alone — right tool tier for scale task.",
        },
        {
          title: "Duplicate Copilot + ChatGPT spend",
          body: "An enterprise had Microsoft Copilot bundled with M365 and separate ChatGPT Enterprise for marketing. Audit showed 70% overlap on email and presentation drafting. They routed Microsoft-native users to Copilot, kept ChatGPT for custom GPTs and API — documented in onboarding. Reduced confusion and licence waste.",
        },
      ],
    }),
    buildSection({
      number: "3.2",
      title: "AI Writing Tools — Jasper, Copy.ai, and the Packaged Copy Layer",
      subtitle: "When marketing-specific wrappers earn their subscription — and when they do not",
      take: "AI writing tools package foundation models with campaign templates, brand voice, team spaces, and sometimes workflow approval. They accelerate distributed copy production — ad variants, email drafts, social calendars — for teams without prompt engineering culture. They lose value when you already maintain strong custom GPTs or when output quality equals raw chat with extra steps.",
      why: "Writing tools are the most common duplicate purchase in marketing AI. Evaluating them against your prompt library and team skill prevents paying for templates you could maintain in Notion plus ChatGPT.",
      paragraphs: [
        [
          s("Writing tools optimise for marketer UX: campaign types, channel presets, tone sliders, collaboration. "),
          x(
            "Jasper campaigns, Copy.ai workflows, and Writer style guides reduce blank-page friction for junior marketers and agencies shipping high variant volume.",
            "Power users with mature prompt libraries often outpace wrappers on nuanced work — wrappers still help onboarding and consistency across large teams.",
          ),
          s(" Trial with your hardest brief, not your easiest — differentiation stress-tests the tool."),
        ],
        [
          s("Brand voice features vary: some ingest docs; some learn from edits; few truly fine-tune. "),
          x(
            "Validate with side-by-side: same brief in wrapper versus custom GPT with your voice card. Measure edit minutes to publishable.",
            "Agency multi-client setups benefit from workspace separation; single-brand in-house may not need wrapper margin.",
          ),
          s(" Negotiate seat count to actual weekly active copywriters — not entire company rollouts by default."),
        ],
        [
          s("Integration matters: pushing drafts to HubSpot, WordPress, or Asana beats copy-paste factories. "),
          x(
            "Check native connectors and API before buying. Tools that end in clipboard export recreate friction AI was meant to remove.",
            "Marketing ops should map writing tool output destinations in the stack diagram — one hop to CMS or MAP preferred.",
          ),
          s(" If integration is weak, foundation chat plus Zapier may beat standalone writing SaaS."),
        ],
      ],
      examples: [
        {
          title: "Agency Jasper standardisation",
          body: "A digital agency runs Jasper across 12 retail clients with separate brand voices and campaign templates. Onboarding new account execs dropped from two weeks to three days on client tone. Wrapper value = multi-tenant governance, not model magic.",
        },
        {
          title: "In-house team drops Copy.ai",
          body: "A SaaS team with two senior content marketers maintained superior results from Claude projects with embedded style guides. Copy.ai sat unused six months — cancelled. Lesson: small skilled teams may not need wrapper tax.",
        },
        {
          title: "Mailchimp native vs Jasper for email",
          body: "A lifecycle marketer generates most email copy inside Mailchimp's AI — context-aware of past campaigns. Jasper duplicate for email only was retired. Tool embedded where send happens beat general writing tool.",
        },
      ],
    }),
    buildSection({
      number: "3.3",
      title: "AI Image Tools — Midjourney, DALL·E, Canva, and Creative Production",
      subtitle: "Stock replacement, concept exploration, and the limits of synthetic brand assets",
      take: "Image generators produce concept art, ad backgrounds, social visuals, and rapid storyboards from text prompts. They compress mood-board and variant production — they do not replace brand photography, product accuracy, or legal clearance on likeness and trademark. Marketing use splits: internal exploration (high tolerance) versus paid social and packaging (high scrutiny).",
      why: "Creative teams face pressure to 'use AI for visuals'. Without landscape clarity, you either ban useful exploration or publish synthetic assets that trigger uncanny valley, IP disputes, and brand trust issues.",
      paragraphs: [
        [
          s("Tool classes differ: Discord-based Midjourney for aesthetic exploration; DALL·E integrated in ChatGPT for quick comps; Canva Magic for template-bound social; Adobe Firefly for commercially indemnified enterprise creative. "),
          x(
            "Each trades off control, style consistency, and legal posture. Enterprise brands often start Firefly or Getty partnerships for indemnification; startups explore Midjourney internally only.",
            "Product marketing requiring accurate device renders or packaging still needs traditional CGI and photography — generators hallucinate details.",
          ),
          s(" Tag every image asset with source tool and approval tier in your DAM metadata."),
        ],
        [
          s("Performance creative workflows use AI for volume of test assets, not single hero brand campaigns. "),
          x(
            "Meta advertisers generate dozens of background and lifestyle variants for dynamic creative testing — winners get human polish or reshoot. AI losers die in auction without brand damage.",
            "Flagship homepage hero imagery still overwhelmingly human-produced for trust in B2B and luxury.",
          ),
          s(" Match image AI to funnel: test variants at bottom, brand standards at top."),
        ],
        [
          s("Legal and platform policy evolve — synthetic people, logos, and competitor visual cues create risk. "),
          x(
            "Meta and Google ad policies restrict misleading imagery; trademark and publicity rights apply to synthetic likenesses. Marketing legal should publish allowed/forbidden image AI use cases.",
            "Document human review for any customer-facing synthetic face or branded product depiction.",
          ),
          s(" When in doubt, use AI for backgrounds and layouts — not faces, logos, or product form factor."),
        ],
      ],
      examples: [
        {
          title: "DTC Meta creative testing",
          body: "A home goods brand generates 40 background variants weekly in Canva AI for Advantage+ tests. Hero product shot remains studio photography composited in. CPA improved 18% from creative volume AI enabled — without synthetic product inaccuracy.",
        },
        {
          title: "B2B SaaS — banned synthetic humans",
          body: "An enterprise software CMO banned AI-generated people in marketing after LinkedIn ads received 'stock photo uncanny' comments. AI limited to abstract illustrations and UI mock backgrounds. Brand trust recovered; engagement normalised.",
        },
        {
          title: "Agency pitch decks — internal only",
          body: "An agency uses Midjourney for pitch mood boards never shown to clients without 'concept render' labels. Client-facing decks use licensed stock. Clear internal/external boundary prevents mistaken client expectation of final art direction.",
        },
      ],
    }),
    buildSection({
      number: "3.4",
      title: "AI Video and Motion — Sora-Class Tools and Production Reality",
      subtitle: "From six-second social clips to the gap between demo hype and publishable brand video",
      take: "AI video tools generate b-roll, short social clips, avatars, and rough storyboards from text or image prompts. In 2026 they compress pre-production and UGC-style social — they rarely replace brand films, testimonial documentaries, or product demos requiring accuracy. Marketers should budget human edit, sound design, and legal review on every customer-facing clip.",
      why: "Video AI demos look effortless; delivery teams hit limits on consistency, lip-sync, hands, brand marks, and runtime. Landscape literacy sets realistic timelines for social teams asked to 'just AI the video'.",
      paragraphs: [
        [
          s("Categories: text-to-video (Runway, emerging Sora access), avatar presenters (Synthesia, HeyGen), automated editing (Opus Clip, Descript), and platform-native (CapCut, Meta tools). "),
          x(
            "Each solves different jobs — avatar for training and explainers, clipping for repurposing long webinars, text-to-video for abstract social motion.",
            "Confusing them produces wrong expectations — avatars are not cinematic brand films.",
          ),
          s(" Map tool to content type in your video playbook before procurement."),
        ],
        [
          s("Repurposing long content remains the highest-ROI video AI pattern for marketing. "),
          x(
            "Podcast and webinar clipping tools identify highlight moments, add captions, format for vertical — human picks top three. Distribution volume rises without new shoot days.",
            "Pure generative video without source footage still struggles with narrative coherence beyond a few seconds.",
          ),
          s(" Invest in clipping and caption automation before text-to-video for most B2B teams."),
        ],
        [
          s("Disclosure and authenticity expectations are rising. "),
          x(
            "Synthetic spokespersons require clear labelling in some jurisdictions and categories. Fake testimonial video is ethical and legal landmine.",
            "Marketing policy should require disclosure when AI generates recognizable presenter or implies real customer footage.",
          ),
          s(" Legal review on avatar and synthetic customer story video — always."),
        ],
      ],
      examples: [
        {
          title: "HeyGen product explainers",
          body: "A HR software company produces 20 localised feature explainers with HeyGen avatars from single script — human reviews pronunciation and compliance. Shoot cost avoided for low-stakes education; flagship customer stories remain real video.",
        },
        {
          title: "Opus Clip webinar funnel",
          body: "A marketing team clips monthly webinars into 12 LinkedIn shorts via Opus — editor approves four. Pipeline influenced meetings rose without additional production crew. Video AI as scissors, not camera replacement.",
        },
        {
          title: "Synthetic testimonial backlash",
          body: "A startup used AI avatar resembling a customer persona in a case study video — viewers assumed real customer. Trust damage required public clarification. Policy now: real customers on camera or clearly labelled illustrative avatar only.",
        },
      ],
    }),
    buildSection({
      number: "3.5",
      title: "AI Audio — Voice, Podcasts, and Sonic Brand",
      subtitle: "Voiceovers, cloning, and the compliance line on synthetic speech",
      take: "AI audio tools generate voiceovers, clone approved voices, transcribe and summarise podcasts, and produce hold music and sonic logos. Marketing applications include ad voiceover variants, localisation, and audio content repurposing — with strict governance on voice rights, disclosure, and brand sonic identity.",
      why: "Audio AI is less visible than copy and image in martech stacks but growing in performance ads and content marketing. Missteps on voice cloning create legal exposure and talent relationship damage.",
      paragraphs: [
        [
          s("Text-to-speech quality crossed usability threshold for short-form ads and internal training — not always for emotional brand anthem work. "),
          x(
            "ElevenLabs, Play.ht, and platform-native voices enable rapid multilingual variants. Premium brands still use human talent for signature campaigns.",
            "Clone only voices you have contractual rights to — executive, employee, or paid talent with explicit AI addendum.",
          ),
          s(" Voice rights belong in talent contracts and employee handbooks before marketing deploys clones."),
        ],
        [
          s("Podcast and audio content workflows gain from transcription and summarisation AI — feeding written marketing. "),
          x(
            "Descript and Otter transcripts power blog repurposing, quote cards, and SEO — connecting audio strategy to written funnel.",
            "Show notes generated without human listen miss nuance and occasionally misattribute quotes.",
          ),
          s(" Human listens to any customer-facing quote pulled from transcript AI."),
        ],
        [
          s("Platform ad policies increasingly scrutinise synthetic voice in political and sensitive categories — expect expansion. "),
          x(
            "Meta and Google require disclosure in some synthetic media cases. Marketing compliance should track platform AI media policies quarterly.",
            "Sonic branding AI — jingles and stingers — useful for tests; trademark search still required before scale.",
          ),
          s(" Maintain allowed voice list: approved synthetic, approved human, forbidden use cases."),
        ],
      ],
      examples: [
        {
          title: "Multilingual Meta ads — TTS variants",
          body: "An e-commerce advertiser generates French and Spanish voiceovers from approved English scripts via ElevenLabs — native speaker review before launch. CPM in EU markets improved versus subtitle-only. Audio AI as localisation accelerator with human QA.",
        },
        {
          title: "Podcast-to-blog pipeline",
          body: "A martech podcast uses Descript transcript → ChatGPT summary → human editor blog. Organic traffic from audio repurposing rose 25% year over year. Audio tool sat upstream of writing stack — integration point mattered.",
        },
        {
          title: "Unauthorized voice clone incident",
          body: "A competitor used AI voice resembling a celebrity in a spoof ad — pulled after legal threat. Internal policy: no celebrity likeness or voice in any AI asset, even parody, without counsel. Marketing audio governance tightened company-wide.",
        },
      ],
    }),
    buildSection({
      number: "3.6",
      title: "Embedded Platform AI — HubSpot, Salesforce, Mailchimp, Meta",
      subtitle: "AI inside the tools where data and execution already live",
      take: "Embedded platform AI features — HubSpot Breeze, Salesforce Einstein GPT, Mailchimp AI, Meta Advantage+, Google Performance Max — combine your first-party data with model capabilities inside execution environments. They often deliver more marketing ROI than standalone chat because they sit on CRM events, lists, and ad accounts — context wrappers cannot easily replicate.",
      why: "Teams buy Jasper while ignoring HubSpot AI in their existing MAP — duplicate spend and weaker context. Prioritising embedded AI where your data already lives is the fastest landscape win.",
      paragraphs: [
        [
          s("Embedded AI's advantage is record-aware generation and optimisation — emails that reference lifecycle stage, ads that optimise on your pixel, scores that use your funnel history. "),
          x(
            "Standalone chat knows only what you paste. HubSpot draft email may pull contact properties; Mailchimp may reference past campaign performance.",
            "Activation often requires tier upgrade — finance should compare incremental platform AI cost versus new vendor.",
          ),
          s(" Before new SaaS, list AI features already included in CRM, MAP, and ad platforms — run enablement on those first."),
        ],
        [
          s("Black-box optimisation in Meta and Google trades control for performance — marketers set constraints, machines allocate. "),
          x(
            "Advantage+ and PMax need creative volume, conversion data, and patience through learning phase. Embedded ML is not generative copy — it is budget and placement intelligence.",
            "Underinvesting creative while overexpecting algorithm magic produces 'AI ads do not work' folklore.",
          ),
          s(" Feed embedded optimisers clean events, catalog data, and creative variants — governance is data hygiene."),
        ],
        [
          s("Sales and marketing alignment improves when both use CRM-embedded AI on shared records. "),
          x(
            "Einstein lead summaries, HubSpot prospecting agents, and shared scoring reduce contradictory messaging between SDR AI drafts and marketing nurture.",
            "Fragmented tools without CRM sync recreate silos AI was supposed to collapse.",
          ),
          s(" Stack design principle: prefer AI that reads your system of record."),
        ],
      ],
      examples: [
        {
          title: "HubSpot Breeze adoption push",
          body: "A mid-market team paid for Jasper while HubSpot Enterprise included content AI tied to CRM context. Migration to Breeze for lifecycle emails reduced tool count and improved personalisation tokens accuracy. Embedded won on integration.",
        },
        {
          title: "Meta Advantage+ learning phase",
          body: "A fashion brand blamed Advantage+ for poor ROAS in week two. Audit: pixel missing add-to-cart, only three creatives, daily budget below learning threshold. Fixed data and creative volume — performance converged week six. Embedded ML needs marketing inputs.",
        },
        {
          title: "Salesforce Einstein for ABM",
          body: "An ABM team uses Einstein account insights plus Marketing Cloud generative email for target accounts — single data model. Standalone writing tool could not see opportunity stage; embedded drafts referenced deal context. Landscape choice enabled message-market fit.",
        },
      ],
    }),
    buildSection({
      number: "3.7",
      title: "Automation Glue — Zapier, Make, n8n, and AI Chains",
      subtitle: "Connecting models to CMS, Slack, ads, and analytics — where stack value compounds",
      take: "Automation platforms chain triggers and actions: new blog post → summarise → draft social → Asana task; form fill → enrich → personalised email draft; ad winner → Notion log. AI in isolation saves minutes; AI in automated workflow saves hours weekly and enforces process. This layer turns tool collection into marketing system.",
      why: "Most landscape failures are not wrong model — they are no plumbing. Marketers who cannot articulate their Zapier equivalents leave value on the table and revert to manual copy-paste after initial AI enthusiasm fades.",
      paragraphs: [
        [
          s("Automation connects foundation or writing tool outputs to destinations — WordPress, HubSpot, Buffer, Google Sheets — without engineering. "),
          x(
            "Zapier AI actions and Make OpenAI modules call models mid-workflow. n8n appeals to technical marketing ops wanting self-host and complex branching.",
            "Chains should include human approval steps — Slack button before auto-publish — not unattended customer-facing posts.",
          ),
          s(" Document every production AI chain in a runbook: trigger, model step, human gate, output."),
        ],
        [
          s("High-value chains for marketing: repurposing, lead routing enrichment, competitive alert summarisation, report narrative drafts from analytics exports. "),
          x(
            "Low-value: fully automated blog publish without editorial — content factory trap at systems level.",
            "Measure chain reliability: failure alerts when API limits or model errors block pipeline.",
          ),
          s(" Start one repurposing chain before buying fourth writing tool — often higher ROI."),
        ],
        [
          s("Security review for automation: tokens in zaps access CRM and social accounts — governance required. "),
          x(
            "Use service accounts, least privilege, and audit logs. Marketing ops owns zap inventory as seriously as seat licences.",
            "When employee leaves, zap ownership transfers — orphan zaps are silent failure mode.",
          ),
          s(" Quarterly zap audit: owner, data touched, human approval present, still used."),
        ],
      ],
      examples: [
        {
          title: "Webinar repurpose zap",
          body: "Zoom recording uploads → Make transcribes → GPT summarises → drafts five LinkedIn posts in Google Doc → Slack notifies editor. Built once, runs monthly. Team cites this chain as primary AI ROI — not any single tool.",
        },
        {
          title: "Lead enrichment draft",
          body: "HubSpot form submit → Clearbit enrich → GPT personalises first-line email draft for SDR review in Slack. SDR acceptance rate of drafts 62% versus generic templates. Automation put AI at moment of intent.",
        },
        {
          title: "Orphan zap outage",
          body: "A product launch zap still pointed to deprecated OpenAI model endpoint — failed silently for two weeks. New runbook: zap owner, error Slack channel, model version in zap name. Operations maturity equals tool maturity.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "3.8",
      title: "The Marketer Decision Lens — Stack Design",
      subtitle: "Architecting a minimal, compounding AI marketing stack — audit worksheet for your next ops review",
      take: "Stack design lens: (1) one foundation access path, (2) embedded platform AI enabled before new vendors, (3) one writing surface if needed — not three, (4) creative AI tiered by internal vs external use, (5) automation connecting outputs to system of record, (6) quarterly duplicate and zombie licence audit. Minimal stack that compounds beats maximal stack that confuses.",
      why: "CFOs and CMOs alike want AI strategy slides — you deliver architecture, not logo soup. This lens turns landscape knowledge into a one-page stack map finance and IT can support.",
      paragraphs: [
        [
          s("Draw four layers on one slide: foundation, packaged tools, embedded platforms, automation/analytics. "),
          x(
            "Place every paid AI line item in a layer. Duplicates in same layer trigger consolidation conversation. Gaps — e.g. no automation — trigger build before buy.",
            "Analytics closure: AI-assisted campaigns still need attribution in GA4, HubSpot, or Mixpanel — stack incomplete without measurement loop.",
          ),
          s(" Present stack map in QBR — shows deliberate architecture versus accidental accumulation."),
        ],
        [
          s("Buy sequence for immature stacks: fix data and embedded AI → add foundation access → add one writing/creative specialist → automate chains → expand creative AI for testing volume. "),
          x(
            "Reverse sequence — five creative tools before pixel hygiene — produces expensive noise.",
            "Match stack maturity to team size: five-person team needs foundation + embedded + one zap; fifty-person needs governance portal and routing table.",
          ),
          s(" Resist vendor land-grab — they sell full stack; you own integration burden."),
        ],
        [
          s("Success metrics for stack design: active weekly users per tool, edit time to publish, variant test velocity, cost per approved asset, duplicate spend eliminated. "),
          x(
            "Kill licences with low WAU for two quarters. Double down on chains with documented hours saved.",
            "Stack design is iterative — model updates and platform AI features shift optimal shape yearly.",
          ),
          s(" Schedule annual stack rearchitecture half-day — not reactive churn per sales cold email."),
        ],
      ],
      examples: [
        {
          title: "Stack consolidation savings",
          body: "CMO audit found ChatGPT Team, Jasper, Copy.ai, and Writesonic — four writing layers. Kept Team + Jasper for agency seats; cancelled others. Saved $38K annually; routed all staff to routing table. No quality drop in quarterly brand survey.",
        },
        {
          title: "Embedded-first roadmap",
          body: "A Salesforce-centric enterprise deferred new AI vendors 12 months — activated Einstein, Marketing Cloud generative, and Tableau narrative instead. Achieved 80% of use cases on existing contracts. Foundation API only for custom ABM scripts.",
        },
        {
          title: "Automation before expansion",
          body: "Team wanted Sora access for social video. Ops built Opus clipping chain first — 3× short-form output from existing webinars. Deferred generative video spend six months; pipeline goals met without new category tool.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-ch3-stack-layers",
      type: "nested",
      title: "The Marketer Decision Lens — Stack Design",
      caption:
        "Four layers — foundation, packaged tools, embedded platforms, automation — with one clear owner per job.",
    }),
  ],
  quiz: [
    {
      q: "Your team pays for ChatGPT Team, Jasper, and HubSpot Content AI — all for email drafting. Best landscape move?",
      options: [
        "Add Copy.ai for more templates.",
        "Map duplicates: prefer HubSpot for lifecycle emails with CRM context; keep one general writing path; cancel redundant seats per routing table.",
        "Cancel all AI and write manually.",
        "Only use the most expensive tool for everything.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Embedded platform AI plus one foundation/writing path beats overlapping subscriptions. Re-read sections 3.1, 3.2, and 3.6.",
      wrongFeedback:
        "Landscape discipline consolidates duplicate writing layers — embedded often wins on context. Re-read sections 3.1, 3.2, and 3.6.",
    },
    {
      kind: "categorize",
      q: "Place each tool in the correct stack layer.",
      categories: ["Foundation model", "Packaged writing/creative", "Embedded platform AI", "Automation glue"],
      items: [
        { text: "Claude Enterprise chat for custom marketing GPTs.", category: 0 },
        { text: "Jasper campaign templates for ad copy variants.", category: 1 },
        { text: "Meta Advantage+ budget allocation across placements.", category: 2 },
        { text: "Zapier chain: blog publish → social draft → Slack approval.", category: 3 },
        { text: "Midjourney for internal mood boards.", category: 1 },
        { text: "Mailchimp AI send-time optimisation on your list.", category: 2 },
      ],
      correctFeedback:
        "Right. Foundation = engines; packaged = wrappers; embedded = CRM/MAP/ad platform; automation = chains. Re-read sections 3.1–3.7.",
      wrongFeedback:
        "Ask: is it raw model access, marketing wrapper, inside your system of record, or connecting tools? Re-read sections 3.1–3.7.",
    },
    {
      q: "Highest-ROI first video AI investment for a B2B team with monthly webinars?",
      options: [
        "Text-to-video for brand anthem films.",
        "Clipping and repurposing automation (e.g. Opus-style) with human approval — scales distribution from existing content.",
        "AI celebrity spokesperson.",
        "Skip video AI entirely.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Repurposing long content beats generative video for most B2B funnels today. Re-read section 3.4.",
      wrongFeedback:
        "Webinar clipping delivers volume without new shoots — generative brand film is still immature for most teams. Re-read section 3.4.",
    },
    {
      kind: "order",
      q: "Order the recommended buy sequence for an immature marketing AI stack.",
      prompt: "Drag to arrange from first priority (top) to last (bottom).",
      items: [
        "Fix data hygiene and enable embedded platform AI",
        "Add one foundation access path with governance",
        "Add one writing/creative specialist tool if gaps remain",
        "Build automation chains to system of record",
        "Expand creative AI volume for testing",
      ],
      correctFeedback:
        "Right. Data and embedded first; foundation next; specialise; automate; then scale creative testing. Re-read section 3.8.",
      wrongFeedback:
        "Start with data and tools you already pay for — embedded AI — before stacking new vendors. Re-read section 3.8.",
    },
    {
      q: "An agency wants Midjourney for client social feeds without disclosure. Your landscape governance response?",
      options: [
        "Approve — everyone does it.",
        "Tier use: internal exploration OK; customer-facing synthetic people and undisclosed AI imagery need legal/policy review and likely restrictions.",
        "Ban all image AI.",
        "Only use stock photos forever.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Image AI tiers by external risk — disclosure, likeness, and brand trust matter. Re-read section 3.3.",
      wrongFeedback:
        "Marketing image AI needs internal vs external tiers and legal guardrails. Re-read section 3.3.",
    },
    {
      q: "Why does automation glue often outperform adding a fourth writing subscription?",
      options: [
        "Zapier is cheaper than Jasper.",
        "Chains compound value by connecting model outputs to CMS, MAP, and approval workflows — process beats another point solution.",
        "Automation replaces human review.",
        "Models do not work without Zapier.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Workflow integration multiplies AI ROI; isolated tools stall at copy-paste. Re-read section 3.7.",
      wrongFeedback:
        "Stack value compounds in automated workflows with human gates — not in duplicate writers. Re-read section 3.7.",
    },
  ],
});
