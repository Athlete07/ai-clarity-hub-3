import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter02MktBrandIdentityExpression = buildChapter({
  slug: "mkt-brand-identity-expression",
  number: 2,
  shortTitle: "Brand Identity & Expression",
  title: "Brand Identity & Expression",
  readingMinutes: 24,
  summary:
    "Brand identity is the system that makes recognition instant and trust cumulative — logo, colour, type, voice, motion, and templates working as one. AI scales production across channels, but unconstrained generation erodes distinctiveness. This chapter covers identity systems as AI briefs, voice guides that influence models, image prompting for consistency, template guardrails, video expression, format adaptation, compliance monitoring, and governance when volume multiplies.",
  keyTakeaway:
    "Identity systems are constraints that make AI output recognisably yours. Document visual and verbal standards in model-influencing formats — voice guides with examples, style references for imagery, templates that bound layout. AI produces volume; governance preserves distinctiveness.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "2.1",
      title: "The Brand Identity System",
      subtitle: "Logo, colour, typography, imagery style, and motion — the visual standards and how they translate into AI creative briefs",
      take: "A brand identity system defines non-negotiable visual elements: logo usage and clear space, primary and secondary palettes with hex codes, typography hierarchy, photography and illustration style, iconography, and motion principles. For AI production, each element becomes brief input — colour tokens in prompts, style reference images, negative prompts for off-brand aesthetics. Frontify, Bynder, and Figma libraries are source of truth; AI tools are production endpoints.",
      why: "Without system-to-brief translation, every AI image request reinvents the brand. Identity docs that AI cannot consume become shelfware while off-brand content ships daily.",
      paragraphs: [
        [
          s("Translate identity guidelines into AI-readable creative briefs. "),
          x(
            "Extract: colour hex list, typography descriptors, imagery dos and don'ts, composition rules. Build prompt snippets per asset type — social, presentation, ad — that teams paste into Midjourney, DALL·E, or Canva AI.",
            "A one-page 'AI creative brief' appendix to the brand book beats a 60-page PDF no one prompts with.",
          ),
          s(" Version briefs when identity updates — stale prompts produce legacy visuals."),
        ],
        [
          s("Logo and mark usage rules need human enforcement, not AI generation. "),
          x(
            "AI image tools distort logos and misuse clear space. Policy: logos composited from approved assets only — never AI-generated logomarks.",
            "Template systems in Figma or Canva lock logo placement; AI fills approved zones only.",
          ),
          s(" Audit AI outputs weekly for logo integrity in high-visibility channels."),
        ],
        [
          s("Motion and video identity extends static systems. "),
          x(
            "Document transition timing, easing curves, lower-third templates, and soundtrack tone. Video AI tools (Runway, Pika) need style references and duration constraints in briefs.",
            "Motion inconsistency across channels signals amateur brand management faster than static colour drift.",
          ),
          s(" Link motion spec from brand portal — agencies and internal video teams share one source."),
        ],
      ],
      examples: [
        {
          title: "AI brief appendix — SaaS rebrand",
          body: "A SaaS company added 'AI Production Brief' to Frontify: hex codes, illustration style references, banned visual clichés (glowing brains, handshake stock). Teams using Midjourney with brief snippets hit brand review pass rate 78% first round versus 34% before appendix. Creative director time on fixes dropped 40%.",
        },
        {
          title: "Logo policy save — retail campaign",
          body: "A retailer nearly published AI-generated lifestyle images with warped logomarks. Policy enforced: logo overlay from DAM only. Sprout Social publishing workflow blocked non-DAM assets. Zero logo distortion incidents in six months of AI-assisted social production.",
        },
        {
          title: "Typography tokens — global B2B",
          body: "A B2B firm encoded typography hierarchy as Canva brand kit plus prompt descriptors ('clean geometric sans, ample whitespace'). AI-generated presentation backgrounds aligned with PowerPoint master templates. Sales enablement brand compliance score rose from 62% to 89% in quarterly audit.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-brand-ch2-identity-system",
      type: "nested",
      title: "Brand Identity System for AI",
      caption:
        "Visual identity, voice guide, templates, and compliance audit layers constrain AI production while enabling scale.",
    }),
    buildSection({
      number: "2.2",
      title: "Writing the Brand Voice Guide for AI",
      subtitle: "The document that makes AI output sound like your brand — tone descriptors, vocabulary, forbidden phrases, and example sentences that actually influence model output",
      take: "A voice guide for AI is not a generic tone wheel — it is a model-influencing document: voice principles with do/don't examples, vocabulary lists (preferred and forbidden), sentence rhythm notes, and channel-specific registers. Paste relevant sections into every generative prompt or custom GPT context. Jasper Brand Voice, Writer.com, and Claude Projects each consume guides differently — structure for copy-paste and retrieval.",
      why: "Generic 'professional yet friendly' instructions produce interchangeable copy. Example-rich guides steer models toward recognisable patterns — the difference between on-brand and on-category.",
      paragraphs: [
        [
          s("Structure voice guides for machine retrieval, not just human reading. "),
          x(
            "Sections: principles (3–5 max), vocabulary, forbidden phrases, channel registers, 10+ gold-standard example sentences per channel.",
            "Few-shot examples outperform adjective stacks — models mimic patterns more reliably than abstract tone labels.",
          ),
          s(" Update examples when campaigns ship strong copy — living guide beats annual PDF."),
        ],
        [
          s("Define forbidden phrases explicitly — AI defaults to category clichés. "),
          x(
            "List banned terms: 'innovative solutions', 'best-in-class', 'leverage synergies'. Provide replacement patterns.",
            "Brandwatch social listening on your own posts catches cliché regression after guide drift.",
          ),
          s(" Legal and compliance add mandatory disclaimers per channel in guide appendix."),
        ],
        [
          s("Channel registers prevent one-voice-fits-all failures. "),
          x(
            "LinkedIn thought leadership ≠ support chat ≠ press release. Guide defines formality, humour tolerance, and proof density per channel.",
            "Custom GPTs or Jasper voices per register reduce prompt friction for distributed teams.",
          ),
          s(" Quarterly voice audit: sample 20 AI-assisted posts against guide — score pass rate."),
        ],
      ],
      examples: [
        {
          title: "Few-shot voice guide — fintech",
          body: "A fintech rebuilt voice guide with 40 example sentences across email, app, and support. Claude Projects loaded guide as context. AI draft pass rate in compliance review rose from 45% to 82%. Support team reported fewer customer 'this sounds like a bot' tickets after register-specific examples added for chat.",
        },
        {
          title: "Forbidden phrase purge — consulting",
          body: "A consultancy listed 28 forbidden phrases from competitive listening — every rival used them. AI prompts included negative instruction block. Unprompted brand tracker association with 'distinctive expertise' rose 7 points over generic 'trusted partner' era.",
        },
        {
          title: "Jasper Brand Voice — distributed marketing",
          body: "A franchise brand uploaded voice guide to Jasper Brand Voice for 200 location marketers. Central team audited monthly Sprout queue. Off-brand post rate fell 55% versus pre-guide ChatGPT free prompting. Franchisee satisfaction with marketing support rose — they kept local flavour within guardrails.",
        },
      ],
    }),
    buildSection({
      number: "2.3",
      title: "AI Image Prompting for Brand Consistency",
      subtitle: "The style reference technique, the negative prompt, and the iterative refinement workflow that produces consistent on-brand imagery",
      take: "Consistent AI imagery uses style reference images from the identity system, structured prompts with colour and composition tokens, negative prompts excluding off-brand aesthetics, and iterative refinement with locked seeds where platforms support it. Midjourney --sref, DALL·E style references, and Adobe Firefly brand kits each implement differently — document workflows per tool. Human art direction selects finals; AI produces variants.",
      why: "Unprompted AI imagery converges on generic stock aesthetics. Style references and negative prompts are the technical layer that connects identity system to pixels.",
      paragraphs: [
        [
          s("Build a style reference library from approved brand photography and illustration. "),
          x(
            "10–20 gold-standard images per category: product hero, lifestyle, abstract background. Tag with prompt descriptors that produced or match them.",
            "Reference images beat text-only colour descriptions for consistency across generators.",
          ),
          s(" Store references in DAM with prompt metadata — searchable for producers."),
        ],
        [
          s("Negative prompts are as important as positive ones. "),
          x(
            "Category-specific bans: neon gradients, clip art, distorted hands, competitor colour palettes, culturally inappropriate symbols.",
            "Maintain negative prompt block as paste-in snippet updated from brand review failures.",
          ),
          s(" Review AI imagery for subtle drift quarterly — models update and defaults shift."),
        ],
        [
          s("Iterative refinement workflow: generate batch → art director shortlist → retouch if needed. "),
          x(
            "Never publish first generation. Three-round refinement with locked composition on round two is standard for campaign hero assets.",
            "Firefly Generative Fill and Photoshop fix AI artifacts without full reshoot economics.",
          ),
          s(" Document winning prompts per asset type — institutional memory reduces rework."),
        ],
      ],
      examples: [
        {
          title: "Midjourney sref library — wellness DTC",
          body: "A wellness brand built sref library from brand shoot selects. Prompts included palette tokens and negative block banning clinical sterility. Social creative production cycle dropped from 5 days to 1.5 days. Engagement rate held within 5% of photographer-led creative — cost per asset down 70%.",
        },
        {
          title: "Negative prompt block — tech enterprise",
          body: "Enterprise tech brand's AI images kept generating glowing circuit brains. Negative prompt block banned 'brain, circuit, hologram, handshake'. Shifted to human workflow photography style. Brand tracker 'innovative but approachable' association improved — visual cliché removal mattered as much as copy.",
        },
        {
          title: "Firefly brand kit — retail seasonal",
          body: "A retailer configured Adobe Firefly with brand colours and style references for seasonal campaign. 200 variants generated; art director selected 12. Time-to-shelf for digital screens cut 60%. In-store consistency audit passed 96% versus 71% prior year with stock imagery.",
        },
      ],
    }),
    buildSection({
      number: "2.4",
      title: "Brand Templates and AI Production",
      subtitle: "Building template systems that constrain AI production within brand standards — the design guardrail system",
      take: "Templates constrain layout, typography, logo placement, and colour application while AI fills copy and imagery zones. Canva Brand Templates, Figma libraries, and Marq enterprise systems lock structure; Jasper or native AI fills content slots. Guardrails beat post-hoc review — prevention at template level scales better than fixing hundreds of off-brand exports.",
      why: "Distributed teams and agencies produce thousands of assets. Templates are the scalable identity enforcement layer when creative directors cannot review every resize.",
      paragraphs: [
        [
          s("Design templates for every high-volume asset class. "),
          x(
            "Social sizes, presentation decks, one-pagers, email headers, event banners. Lock grids; label editable zones for AI copy and imagery.",
            "Template count should match production volume — ten social templates beat one generic master.",
          ),
          s(" Version templates when identity updates — deprecate old versions in DAM with redirect notices."),
        ],
        [
          s("Integrate AI copy generation inside template workflows. "),
          x(
            "Canva Magic Write and Marq AI populate text zones with voice guide snippets pre-loaded. Reduces copy-paste between tools.",
            "Character limits in templates prevent AI verbosity breaking layouts.",
          ),
          s(" Lock fonts and colours as non-editable for franchise and field marketer tiers."),
        ],
        [
          s("Measure template adoption and override attempts. "),
          x(
            "Platforms report custom uploads versus template usage. High override rates signal template friction or missing formats.",
            "Quarterly template retrospective with top producers — iterate on missing sizes and channels.",
          ),
          s(" Agency contracts require template use for production tiers below custom campaign work."),
        ],
      ],
      examples: [
        {
          title: "Canva Enterprise — nonprofit network",
          body: "A nonprofit federation deployed 45 locked Canva templates for chapters worldwide. AI copy inside templates with voice guide. Brand compliance audit rose to 91%. Central team reviewed Sprout queue samples monthly — violations down 68%.",
        },
        {
          title: "Figma + AI copy — product marketing",
          body: "A software company's product marketing built Figma templates with AI copy plugin for feature launch kits. Launch asset production time 3 days to 4 hours. Sales feedback on deck quality improved — consistent hierarchy aided comprehension.",
        },
        {
          title: "Marq franchise guardrails — QSR",
          body: "A QSR franchise mandated Marq templates for local social; AI imagery only via approved prompt library. Corporate Sprout listening showed local store post brand consistency score 84% versus 52% pre-mandate. Local engagement rose — recognisable brand system built trust.",
        },
      ],
    }),
    buildSection({
      number: "2.5",
      title: "Video and Motion Brand Expression",
      subtitle: "How to brief AI video tools on brand motion guidelines — the emerging challenge of maintaining brand identity in AI-generated video",
      take: "AI video — Runway, Pika, Sora-class tools — introduces motion inconsistency: wrong pacing, off-brand transitions, and uncanny subjects. Motion guidelines specify intro/outro length, logo animation, lower-third style, colour grading LUTs, and soundtrack mood. Brief video AI with reference clips, not text alone. Hybrid workflows: AI generates B-roll; human editors apply brand packages in Premiere or DaVinci.",
      why: "Video consumption dominates social algorithms. Off-brand motion signals cheap production and erodes premium positioning faster than static off-brand posts.",
      paragraphs: [
        [
          s("Document motion principles alongside static identity. "),
          x(
            "Pacing: snappy cuts vs cinematic holds. Transition types approved and banned. Text animation style. Subtitle placement and font.",
            "Reference reels of 30–60 seconds beat paragraph descriptions for AI video tools.",
          ),
          s(" Motion spec lives in brand portal with downloadable Premiere and After Effects packages."),
        ],
        [
          s("Use AI video for appropriate tiers — B-roll and variants, not flagship brand films. "),
          x(
            "Hero brand films remain human-directed. AI generates social cutdowns, localized variants, and background loops within motion package.",
            "Tiering prevents brand team bottleneck while protecting flagship quality bar.",
          ),
          s(" Legal review AI video for likeness, trademark, and music rights — generators create risk."),
        ],
        [
          s("Colour grade and audio unify AI clips with brand feel. "),
          x(
            "Apply brand LUT in post. Standardise on royalty-free music stems from approved library.",
            "Audio brand — sonic logo, music mood — increasingly part of identity system.",
          ),
          s(" Test AI video on small audiences before paid amplification — motion uncanny valley triggers negative comments."),
        ],
      ],
      examples: [
        {
          title: "Hybrid B-roll — travel brand",
          body: "A travel brand used Runway for destination B-roll; editors applied brand LUT and sonic sting. 40 social videos monthly versus 8 pre-AI. Watch-through rate within 8% of agency-produced benchmark. Production cost per video down 65%.",
        },
        {
          title: "Motion package — fintech app",
          body: "A fintech documented 2-second logo sting and lower-third templates. AI-generated explainer backgrounds only; text and logo composited in AE template. App store preview videos consistent across 12 markets. User trust survey 'professional appearance' score rose 11 points.",
        },
        {
          title: "Tiering policy — luxury goods",
          body: "Luxury house restricted AI video to employee social and regional events — never flagship campaigns. Policy prevented off-brand uncanny clips on premium channels. Employee advocacy reach grew without diluting haute couture motion standards on main brand account.",
        },
      ],
    }),
    buildSection({
      number: "2.6",
      title: "Brand Expression Across Formats",
      subtitle: "How brand voice adapts from a formal white paper to an Instagram caption to a customer service response — the register guidance that AI needs to navigate this",
      take: "Brand voice is one identity with multiple registers: formal thought leadership, conversational social, empathetic support, urgent crisis comms, and terse product UI. AI needs explicit register maps — formality scale, humour rules, proof density, CTA style — per format. A white paper register on Instagram fails; casual social copy in regulatory filings fails. Guides define adaptation rules, not separate brands.",
      why: "Marketers produce more formats than ever. Register mistakes — too casual in B2B sales decks, too stiff on TikTok — damage trust with specific audiences without violating core identity.",
      paragraphs: [
        [
          s("Build a register matrix crossing channel and audience. "),
          x(
            "Axes: formality (1–5), technical depth, humour tolerance, proof type. Plot white paper, LinkedIn, Instagram, support, press release on matrix.",
            "AI prompts include register coordinates: 'formality 4, technical depth high, no humour'.",
          ),
          s(" Sales and support contribute real examples per register — not marketing imagination alone."),
        ],
        [
          s("Adapt messaging hierarchy per register without changing core promise. "),
          x(
            "Brand promise stable; proof points and vocabulary adapt. AI drafts register variants from single brief.",
            "Human review catches register bleed — support scripts sounding like ads.",
          ),
          s(" Include counter-examples: 'do not write support like this' from failed tickets."),
        ],
        [
          s("Localisation adds register complexity. "),
          x(
            "Formality norms differ by market. AI translation plus register guide beats translation alone.",
            "In-market reviewers validate register, not just grammar.",
          ),
          s(" Global brand portal hosts market-specific register addenda."),
        ],
      ],
      examples: [
        {
          title: "Register matrix — B2B data platform",
          body: "A data platform mapped five registers with AI prompt snippets. White papers formal; LinkedIn conversational expert; support empathetic technical. Support CSAT rose 6 points after AI-drafted macros human-edited per register guide. Marketing and support NPS verbatims stopped citing 'tone mismatch'.",
        },
        {
          title: "Instagram vs earnings — public company",
          body: "A public company's social team used casual registers on Instagram while IR demanded formality 5 for statements. AI briefs tagged by channel prevented accidental casual language in SEC-facing drafts. Zero register incidents in eight quarters post-matrix.",
        },
        {
          title: "Localisation register — APAC expansion",
          body: "A US brand expanded APAC with register addenda for Japan and Australia — formality and humour rules differed. AI translation workflow included register tags. Local review pass rate 88% first round versus 54% without register layer.",
        },
      ],
    }),
    buildSection({
      number: "2.7",
      title: "Brand Compliance Monitoring",
      subtitle: "Using AI to audit content across channels for brand standard adherence — the quality monitoring system at scale",
      take: "Brand compliance monitoring uses AI to scan published and draft content across web, social, email, ads, and sales collateral for voice violations, off-palette colours, missing disclaimers, and off-brand imagery. Sprout Smart Inbox rules, Writer.com governance, and custom GPT auditors flag issues before or after publish. Scale requires sampling strategy — 100% scan on regulated claims, risk-based sample on social.",
      why: "Distributed AI production makes manual brand review a bottleneck. Automated monitoring catches drift early — especially when agencies, franchises, and employees publish at volume.",
      paragraphs: [
        [
          s("Define compliance rules machine-checkable vs human-judgment. "),
          x(
            "Machine: forbidden phrases, required disclaimers, colour hex in image metadata, logo presence. Human: subtle tone, cultural nuance, creative quality.",
            "Start with 10–15 high-risk rules — expand from audit failures.",
          ),
          s(" Integrate monitoring into publish workflows — Sprout approval queues, CMS plugins."),
        ],
        [
          s("Run post-publish audits on representative samples. "),
          x(
            "Weekly AI scan of 50 random social posts, all new web pages, and sales deck uploads in DAM.",
            "Brandwatch on owned channels supplements rule-based scans with sentiment and theme drift.",
          ),
          s(" Report compliance rate trending — leadership sees system health, not incident anecdotes."),
        ],
        [
          s("Close the loop with producer feedback, not just violations. "),
          x(
            "Monthly clinic: common failures, guide updates, template fixes. Violations without education repeat.",
            "Top offenders often lack template access — fix system before blaming individuals.",
          ),
          s(" Tie compliance to agency scorecards and franchise renewal criteria."),
        ],
      ],
      examples: [
        {
          title: "Writer governance — pharma marketing",
          body: "A pharma marketer used Writer.com to scan MLR-bound content for forbidden claims and missing ISI references. AI pre-scan before human MLR cut review cycles 35%. Compliance incidents in field sales uploads dropped to near zero with DAM integration.",
        },
        {
          title: "Sprout queue audit — consumer electronics",
          body: "A electronics brand sampled 100 weekly Sprout scheduled posts with custom GPT voice auditor. Forbidden superlative violations flagged before publish. Off-brand rate 4% versus 19% pre-monitoring. Social team received weekly top failure themes — guide updated quarterly.",
        },
        {
          title: "Franchise compliance — services network",
          body: "A services franchise ran AI image compliance on local Facebook ads — off-palette and stock cliché detection. Non-compliant ads paused automatically pending regional marketer fix. Corporate brand tracker consistency across markets rose 23 points in annual survey.",
        },
      ],
    }),
    buildSection({
      number: "2.8",
      title: "Marketer Decision Lens: Brand Governance in an AI Production Environment",
      subtitle: "The approval process, the compliance monitoring, and the exception management that maintains brand standards when AI is producing content at volume",
      take: "AI production governance tiers assets by risk: tier 1 auto-publish within templates; tier 2 AI draft with human review; tier 3 human-only for crisis, legal, and flagship campaigns. Exception management documents approved deviations with expiry. Governance scales identity without killing velocity — clear tiers prevent everything requiring CMO approval or nothing being reviewed.",
      why: "Teams oscillate between reckless volume and approval paralysis. A tiered governance model matches oversight to reputational and legal risk while enabling AI speed where safe.",
      paragraphs: [
        [
          s("Publish a tiered approval matrix by asset type and channel. "),
          x(
            "Tier 1: templated social, internal slack. Tier 2: blog, email, paid social. Tier 3: press release, executive statement, regulated industries.",
            "AI usage allowed in all tiers; human approval requirements differ.",
          ),
          s(" Review matrix when entering new markets or regulated categories."),
        ],
        [
          s("Exception process with time limits. "),
          x(
            "Campaign-specific colour or voice deviation requires written exception, approver, and expiry date.",
            "Exceptions without expiry become new undocumented standards — brand erodes by accretion.",
          ),
          s(" Quarterly exception audit — renew or retire each deviation."),
        ],
        [
          s("Invest in templates and monitoring before adding AI seats. "),
          x(
            "More AI users without guardrails multiply off-brand output faster than productive output.",
            "Governance ROI: compliance rate, review time, incident count — not tokens generated.",
          ),
          s(" Executive sponsors see governance as enabler of scale, not blocker of innovation."),
        ],
      ],
      examples: [
        {
          title: "Tier matrix — mid-market SaaS",
          body: "A SaaS company implemented three-tier governance. Tier 1 templated LinkedIn from SDRs with AI copy rose 3x volume; incidents zero. Tier 3 press required comms director sign-off. Board concern about AI brand risk addressed without banning AI — velocity and safety both improved.",
        },
        {
          title: "Exception expiry — retail promotion",
          body: "A retailer approved neon accent for Pride campaign via 60-day exception. Auto-expired post-campaign; DAM reverted to standard palette. Prevented Pride palette bleeding into unrelated promos — common failure without expiry discipline.",
        },
        {
          title: "Governance before scale — agency network",
          body: "A global brand added 15 agency teams to AI production only after templates and Writer governance live. Onboarding included certification quiz on voice guide. First-quarter compliance 86% versus 45% on pilot team that scaled AI before governance.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Best approach to logo usage in AI-generated imagery?",
      options: [
        "Let AI generate stylised logo variants for freshness.",
        "Composite approved logo assets from DAM only — never AI-generate logomarks.",
        "Skip logos in AI images entirely.",
        "Use competitor logos for composition reference.",
      ],
      correct: 1,
      correctFeedback:
        "Right. AI distorts logos; approved asset compositing protects identity. Re-read section 2.1.",
      wrongFeedback:
        "Logomarks require human-controlled assets, not generative distortion. Re-read section 2.1.",
    },
    {
      kind: "order",
      q: "Order the AI brand production stack from foundation to scale.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Document identity system and AI creative brief appendix",
        "Build voice guide with examples and forbidden phrases",
        "Create templates locking layout and brand elements",
        "Establish style references and prompt libraries for imagery",
        "Deploy compliance monitoring on published content",
        "Implement tiered governance and exception management",
      ],
      correctFeedback:
        "Right. Identity and voice before templates; monitoring and governance enable safe scale. Re-read sections 2.1 and 2.8.",
      wrongFeedback:
        "Guardrails and identity docs precede volume production. Re-read sections 2.1 and 2.8.",
    },
    {
      kind: "categorize",
      q: "Sort practices into effective voice guide design vs weak guidance.",
      categories: ["Effective for AI", "Weak guidance"],
      items: [
        { text: "Ten gold-standard example sentences per channel.", category: 0 },
        { text: "Tone described only as 'professional yet friendly'.", category: 1 },
        { text: "Explicit forbidden phrase list with replacements.", category: 0 },
        { text: "Single voice setting for all formats and channels.", category: 1 },
        { text: "Register matrix for social vs support vs white papers.", category: 0 },
        { text: "Annual PDF never updated or pasted into prompts.", category: 1 },
      ],
      correctFeedback:
        "Right. Examples, forbidden phrases, and registers steer models; vague adjectives do not. Re-read section 2.2.",
      wrongFeedback:
        "Models need examples and explicit constraints, not abstract tone wheels alone. Re-read section 2.2.",
    },
    {
      q: "AI video for a luxury flagship campaign. Recommended tiering?",
      options: [
        "Full AI generation for all video to maximise volume.",
        "AI for B-roll and variants; flagship films human-directed with brand motion package.",
        "Ban all AI video permanently.",
        "Publish first-generation AI video without post-production.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Tier AI video by brand risk; protect flagship quality. Re-read section 2.5.",
      wrongFeedback:
        "Hybrid workflows protect premium motion standards while scaling lower tiers. Re-read section 2.5.",
    },
    {
      q: "Franchise marketers producing off-brand social at scale. First fix?",
      options: [
        "Add more AI seats for faster production.",
        "Deploy locked templates and voice-guided AI inside template workflows.",
        "Eliminate all local marketing autonomy.",
        "Rely on post-publish apologies only.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Templates constrain layout; voice guides constrain copy — prevention at scale. Re-read sections 2.4 and 2.7.",
      wrongFeedback:
        "Volume without guardrails multiplies off-brand output. Templates and monitoring first. Re-read sections 2.4 and 2.7.",
    },
    {
      kind: "categorize",
      q: "Match governance tier to appropriate oversight level.",
      categories: ["Tier 1 — light review", "Tier 3 — senior approval"],
      items: [
        { text: "Templated social post from approved Canva layout.", category: 0 },
        { text: "Executive crisis statement for media.", category: 1 },
        { text: "Internal Slack announcement from template.", category: 0 },
        { text: "Regulated product claim in pharma email.", category: 1 },
        { text: "AI-filled local event flyer within brand kit.", category: 0 },
        { text: "Press release announcing earnings restatement.", category: 1 },
      ],
      correctFeedback:
        "Right. Low-risk templated content moves fast; crisis and regulated comms need senior sign-off. Re-read section 2.8.",
      wrongFeedback:
        "Match oversight to reputational and legal risk — not one-size approval. Re-read section 2.8.",
    },
  ],
});
