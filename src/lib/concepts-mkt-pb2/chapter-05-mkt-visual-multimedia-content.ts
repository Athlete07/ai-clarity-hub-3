import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter05MktVisualMultimediaContent = buildChapter({
  slug: "mkt-visual-multimedia-content",
  number: 5,
  shortTitle: "Visual & Multimedia Content",
  title: "Visual & Multimedia Content — Scaling Creative Production Without Losing Brand Integrity",
  readingMinutes: 24,
  summary:
    "AI image, video, and audio tools have collapsed the cost of visual production — but they have not collapsed the need for brand consistency, rights clearance, or audience trust. Marketers who treat visual AI as a governance problem, not just a creative shortcut, produce more assets faster while avoiding the stock-photo sameness and legal exposure that plague rushed rollouts.",
  keyTakeaway:
    "Visual AI is a pipeline: brief with brand constraints, generate with style references and negatives, iterate with human curation, clear rights, then approve through a visual governance gate. The brands that win are not those with the best model — they are those with the best visual system.",
  pmCallout: MKT_CALLOUT,
  sections: [
    buildSection({
      number: "5.1",
      title: "AI Image Generation for Marketing",
      subtitle: "From Midjourney mood boards to production-ready campaign assets — what marketers need to know",
      take: "AI image generators — Midjourney, DALL·E, Adobe Firefly, Ideogram, Leonardo — produce marketing visuals in seconds from text prompts. They excel at concept exploration, social variants, and background generation. They struggle with precise brand assets, readable text in images, and consistent character or product representation without a structured workflow.",
      why: "Visual content drives higher engagement than text-only posts across every major social platform. Marketers who ignore image AI lose speed; marketers who use it without governance lose brand recognition and sometimes legal standing.",
      paragraphs: [
        [
          s("Image AI fits three marketing use cases with different risk profiles. "),
          x(
            "Exploration: mood boards, campaign concepting, A/B test variants before committing to a photoshoot. Production support: backgrounds, textures, illustrations for blog headers and paid social. Full asset creation: hero images, ad creatives, product lifestyle scenes.",
            "Risk increases as you move right on that spectrum. Exploration tolerates inconsistency. Full asset creation demands style locks, human review, and rights documentation.",
          ),
          s(" Match your governance intensity to the use case — not every image needs a legal review, but every published image needs a rights check."),
        ],
        [
          s("Model choice matters for brand work more than marketers expect. "),
          x(
            "Midjourney v6 produces distinctive aesthetic output favoured by DTC brands. Adobe Firefly integrates with Creative Cloud and offers IP indemnification for enterprise licences. DALL·E via ChatGPT handles conversational iteration well. Ideogram leads on text-in-image for simple headline overlays.",
            "No single model is 'best'. Mature teams maintain a model roster: Firefly for brand-safe enterprise work, Midjourney for social experimentation, specialised tools for product photography enhancement.",
          ),
          s(" Document which models are approved for which asset types in your visual AI policy — not which model your creative director personally prefers."),
        ],
        [
          s("The hidden cost of image AI is iteration without a brief. "),
          x(
            "Teams that prompt without a visual brief generate hundreds of images, pick one that 'feels right', and cannot reproduce the result for the next campaign. Structured prompts — style reference, composition rules, colour palette, negative prompts — make output repeatable.",
            "Repeatability is the difference between a toy and a production system. If you cannot get a similar result next Tuesday, you do not have a workflow — you have a slot machine.",
          ),
          s(" Require a one-paragraph visual brief before any AI image session, even for internal concepting."),
        ],
      ],
      examples: [
        {
          title: "Glossier — AI for social variant testing",
          body: "Glossier's social team uses AI image tools to generate background and lifestyle variants around approved product photography — not to replace product shots. Workflow: locked product PNG from studio shoot → AI generates five scene variants → social lead selects two for A/B testing on Instagram. Engagement data informs which aesthetic direction warrants a full photoshoot. AI accelerates learning, not replaces brand photography.",
        },
        {
          title: "B2B SaaS blog header pipeline",
          body: "A project management SaaS company built a blog header workflow in Canva with Firefly integration: writer submits article theme → designer applies brand colour palette and illustration style prompt template → three variants generated → editor picks one. Time per header dropped from 45 minutes (stock photo search + edit) to 12 minutes. Brand consistency improved because every header uses the same style-lock prompt stored in the team's Canva brand kit.",
        },
        {
          title: "Product accuracy failure — furniture retailer",
          body: "A furniture e-commerce brand used AI to generate room scenes featuring their sofas. Published images showed sofas with impossible proportions and fabrics not in their catalogue. Customer complaints and return rates spiked on those SKUs. Root cause: no rule that AI lifestyle images must composite actual product photography, not generate products from text. Fix: mandatory product asset overlay and merchandising sign-off before publish.",
        },
      ],
    }),
    buildSection({
      number: "5.2",
      title: "On-Brand Visual Prompts",
      subtitle: "Style references, negative prompts, and brand kits that make AI output recognisably yours",
      take: "On-brand visual prompting is the practice of encoding your visual identity — colour palette, composition style, photography treatment, illustration style — into reusable prompt templates and reference images. A brand visual prompt library produces consistent output across team members and tools, the same way a voice guide does for copy.",
      why: "Without visual prompt standards, every marketer produces a different aesthetic from the same tool. Your Instagram feed starts looking like five different brands. Competitors cannot copy your product — but they can copy your prompting approach if you publish generic prompts publicly.",
      paragraphs: [
        [
          s("A production visual prompt has five components. "),
          x(
            "Subject: what is in the frame. Style: photography vs illustration, lighting, era reference. Brand palette: hex codes or colour names tied to your guide. Composition: aspect ratio, negative space for text overlay, focal point placement. Negatives: what to exclude — wrong colours, clip art aesthetic, watermarks, extra fingers, text gibberish.",
            "Store prompts as templates with variable slots: [PRODUCT], [CAMPAIGN_THEME], [ASPECT_RATIO]. Marketers fill slots; brand consistency lives in the template.",
          ),
          s(" Test templates monthly: same prompt, two different team members, compare output. Variance above threshold means the template needs tightening."),
        ],
        [
          s("Style reference images outperform adjective lists. "),
          x(
            "Uploading 2–3 approved brand images as style references (--sref in Midjourney, style match in Firefly) anchors aesthetic better than 'minimal, modern, clean'. References should span your visual range: one product shot, one lifestyle, one illustration.",
            "Curate the reference bank like you curate voice examples — best-in-class approved assets only, not everything ever published.",
          ),
          s(" Version the reference bank when you rebrand. Outdated references produce outdated visuals confidently."),
        ],
        [
          s("Negative prompts are brand protection. "),
          x(
            "Maintain a shared negative prompt block appended to every generation: competitor colour schemes, off-brand illustration styles, clichéd stock photo poses, AI artefacts (blurry hands, melted text). Update quarterly from rejected outputs.",
            "Forbidden visual language is as operational as forbidden copy phrases. 'No lens flare, no handshake stock poses, no gradient purple backgrounds' reduces off-brand output faster than 'be distinctive'.",
          ),
          s(" Include negative prompts in agency briefs and freelancer onboarding — external creators use AI too."),
        ],
      ],
      examples: [
        {
          title: "Patagonia — visual prompt ethics layer",
          body: "Patagonia's creative team includes environmental context in visual prompts: real landscapes, worn gear, diverse athletes in authentic conditions. Negative prompts explicitly exclude pristine CGI nature scenes that contradict their environmental stance. AI-generated campaign concepts that look 'too perfect' get rejected in curation — the prompt system encodes brand values, not just aesthetics.",
        },
        {
          title: "Canva Brand Kit + Magic Media",
          body: "A regional bank marketing team configured Canva Brand Kit with locked fonts, colours, and logo placement rules, then built five Magic Media prompt templates for social tiles: community event, product highlight, financial tip, team spotlight, seasonal greeting. Branch marketers with no design training produce on-brand tiles because the template constrains generation. Adoption reached 90% across 40 branches in one quarter.",
        },
        {
          title: "Style reference drift — tech startup rebrand",
          body: "A SaaS startup rebranded from corporate blue to warm coral and sage. The social team continued using pre-rebrand style references in Midjourney for six weeks because nobody updated the shared prompt library. Feed analytics showed a visible aesthetic cliff — followers noticed before leadership did. Fix: rebrand triggers mandatory prompt library version bump, same as logo file updates.",
        },
      ],
    }),
    buildSection({
      number: "5.3",
      title: "Graphic Design AI",
      subtitle: "Canva, Adobe Express, and Figma AI — democratised design with enterprise governance needs",
      take: "Graphic design AI tools embed generation into layouts marketers already use: Canva Magic Design, Adobe Express generative fill, Figma AI for wireframe-to-mockup. They accelerate resize, localisation, and template population. They do not replace brand design systems — they require them to function well at scale.",
      why: "When every team member can 'design' with AI, the bottleneck shifts from production capacity to brand enforcement. Marketing ops must treat design AI as an extension of the brand system, not a bypass around it.",
      paragraphs: [
        [
          s("Design AI works best inside locked templates, not blank canvases. "),
          x(
            "Template-first workflow: brand team builds approved layouts with locked logo zones, typography, and colour slots → marketers use AI to populate copy and imagery within constraints → AI suggests variants but cannot move brand elements.",
            "Blank-canvas AI design produces the visual equivalent of generic copy — structurally fine, brand-invisible.",
          ),
          s(" Invest template-build time upfront. One locked template used 500 times beats 500 freeform AI designs."),
        ],
        [
          s("Resize and localisation are the highest-ROI design AI use cases. "),
          x(
            "Adapting a 1080×1080 social post to Stories (9:16), LinkedIn (1200×627), and display (300×250) manually takes 20–40 minutes per asset. Canva Magic Resize and similar tools do it in seconds with AI-aware crop suggestions.",
            "Pair resize automation with a safe-zone overlay in templates so AI crops do not cut faces or product labels.",
          ),
          s(" Measure design AI ROI in hours saved on adaptation, not on replacing your brand designer's strategic work."),
        ],
        [
          s("Figma AI changes the marketing-design handoff. "),
          x(
            "Marketing teams increasingly prototype landing pages and email layouts in Figma with AI assistance before formal design requests. This speeds iteration but risks designs that ignore component libraries and dev constraints.",
            "Policy: AI-assisted Figma mockups are exploration only until a designer maps them to the design system. Publish-ready assets come from approved components.",
          ),
          s(" Clarify in your creative workflow which roles can produce publish-ready assets versus draft concepts."),
        ],
      ],
      examples: [
        {
          title: "HubSpot — template-governed social production",
          body: "HubSpot's social team maintains 30 locked Canva templates aligned to their design system. AI populates headline suggestions and background variations within template bounds. New hires produce on-brand LinkedIn carousels on day one. Creative director reviews template updates quarterly; daily output does not require creative review because constraints are in the template layer.",
        },
        {
          title: "Retail multi-language campaign",
          body: "A European fashion retailer used Adobe Express to localise 200 campaign assets into eight languages. AI-assisted text replacement within locked layouts reduced localisation agency cost by 60%. Human native-speaking reviewers checked copy and cultural fit — AI handled mechanical adaptation. Time to market for seasonal campaigns dropped from six weeks to two.",
        },
        {
          title: "Design system bypass — enterprise software",
          body: "A sales team started using Figma AI to build custom one-pagers outside the official template library. Deals closed faster short-term, but brand consistency fractured — six different one-pager layouts in one quarter. CMO mandated: all customer-facing PDFs export from approved Figma components only. AI assists within the library; it does not replace it.",
        },
      ],
    }),
    buildSection({
      number: "5.4",
      title: "Video Generation AI",
      subtitle: "Runway, Sora, Pika, and HeyGen — when generated video earns a place in your content mix",
      take: "AI video generation is maturing fast: text-to-video for B-roll and abstract visuals, image-to-video for product animation, avatar tools like HeyGen and Synthesia for presenter-style explainers. Marketing applications are real but narrow — short-form social clips, internal training, localised video messages — not replacement for brand hero films without heavy human post-production.",
      why: "Video commands premium attention in feeds and ad auctions. Marketers who master low-risk video AI use cases ship more video without proportionally scaling production budget. Marketers who publish raw AI video without disclosure or quality gates risk brand embarrassment and platform policy violations.",
      paragraphs: [
        [
          s("Match video AI tool to output type. "),
          x(
            "Runway Gen-3 and Pika: short B-roll, transitions, abstract motion graphics for social. HeyGen and Synthesia: avatar presenter videos for product explainers, onboarding, sales enablement in multiple languages. Kling and emerging models: longer narrative clips — still inconsistent for brand-critical work.",
            "Maintain a tool roster with approved use cases, same as image models. 'HeyGen for internal L&D and sales enablement only' is a valid policy.",
          ),
          s(" Hero brand films and TVC-quality work still require traditional production — AI supplements, not replaces, at the top of the quality ladder."),
        ],
        [
          s("The uncanny valley is a brand risk, not a technical footnote. "),
          x(
            "Avatar videos with imperfect lip sync, unnatural blinking, or stiff gestures erode trust in financial services, healthcare, and premium B2B. Audiences forgive rough AI video in meme contexts; they do not forgive it in a CEO product announcement.",
            "Set a quality bar: avatar videos must pass a 'would I send this to a enterprise prospect?' test before external use.",
          ),
          s(" When in doubt, use AI video for internal and social experimentation; keep customer-facing premium video human-produced."),
        ],
        [
          s("Platform policies on AI video are evolving — track them. "),
          x(
            "Meta, TikTok, YouTube, and LinkedIn have labelling requirements or restrictions on synthetic media in ads and political content. Some require disclosure; some restrict realistic synthetic faces in certain categories.",
            "Your video AI policy must include platform compliance, not just brand aesthetics. Legal should review annually.",
          ),
          s(" Label AI-generated or AI-assisted video when policy or ethics require it — proactive disclosure beats reactive apology."),
        ],
      ],
      examples: [
        {
          title: "Duolingo — AI-assisted social video",
          body: "Duolingo's social team uses AI video tools for rapid meme-format content featuring their owl mascot — short loops, reactive trend participation. Hero brand campaigns still use traditional animation studios. The split is intentional: AI for speed and volume in owned social; craft production for brand-defining moments. Engagement on AI-assisted trend videos rivals hand-animated shorts when concept is strong.",
        },
        {
          title: "HeyGen for sales enablement localisation",
          body: "A cybersecurity vendor used HeyGen to produce personalised video outreach in six languages from one English presenter recording. Sales reps trigger videos with prospect name and company via CRM integration. Reply rates on video emails increased 22% versus text-only. Governance: legal approved script template; no AI ad-libbing of product claims; human review of first batch per language.",
        },
        {
          title: "Uncanny CEO avatar — startup backlash",
          body: "A fintech startup published an AI avatar 'CEO update' video with noticeable lip-sync issues and flat delivery. Twitter/X and LinkedIn comments focused on 'creepy AI CEO' rather than the product news. The company pulled the video within 48 hours and issued a human-recorded replacement. Lesson: avatar video quality bar for external CEO communication must match or exceed webcam quality.",
        },
      ],
    }),
    buildSection({
      number: "5.5",
      title: "Video Editing & Repurposing",
      subtitle: "Opus Clip, Descript, and CapCut — turning long-form into channel-native clips at scale",
      take: "AI video editing tools solve the repurposing bottleneck: automatically clipping webinar highlights, adding captions, reframing for vertical, removing filler words from talking-head footage. For marketers sitting on webinars, podcasts, and conference talks, repurposing AI often delivers higher ROI than generation AI — because the source content is already on-brand and factually grounded.",
      why: "One 45-minute webinar contains 15–20 potential social clips, three blog post angles, and an email nurture sequence — but manual clipping takes a video editor days. Repurposing AI unlocks latent content inventory without new production shoots.",
      paragraphs: [
        [
          s("Build a repurposing pipeline from long-form source to channel outputs. "),
          x(
            "Stage one: ingest source (webinar recording, podcast episode, conference talk). Stage two: AI identifies highlight moments via transcript analysis and engagement prediction. Stage three: human curator selects clips and approves cuts. Stage four: AI adds captions, branding overlay, aspect ratio variants. Stage five: schedule across channels with UTM tracking.",
            "Human curation on clip selection is non-negotiable — AI picks structurally punchy moments that may be contextually wrong or off-message.",
          ),
          s(" Log source-to-clip lineage so you can update or pull clips if the source content ages out."),
        ],
        [
          s("Captions are not optional — they are the product. "),
          x(
            "85% of social video is watched without sound. AI caption tools (Descript, CapCut auto-captions, Opus Clip) produce readable, styled captions that increase watch time. Brand caption style — font, colour, word-highlight animation — should be template-locked.",
            "Poor auto-captions with wrong proper nouns or product names damage credibility. Always review captions for brand terms and technical vocabulary.",
          ),
          s(" Maintain a glossary file for caption AI: product names, executive names, technical terms — fed into custom vocabulary where tools support it."),
        ],
        [
          s("Repurposing extends content shelf life and SEO surface area. "),
          x(
            "A single pillar webinar becomes: five LinkedIn clips, three TikTok cuts, one blog summary (AI transcript → edited article), one email 'key takeaways', and quote cards for Instagram. Each piece links back to the full recording.",
            "Measure repurposing ROI by attributable traffic and pipeline from derivative assets, not just clip view counts.",
          ),
          s(" Schedule repurposing in the campaign plan at shoot time — not as an afterthought three months later."),
        ],
      ],
      examples: [
        {
          title: "Opus Clip for B2B webinar programme",
          body: "A marketing automation SaaS runs monthly webinars averaging 800 live attendees. Post-webinar workflow: recording uploaded to Opus Clip → AI suggests 12 clip candidates → content manager selects six → branded caption template applied → scheduled to LinkedIn and YouTube Shorts over two weeks. Webinar-attributed pipeline increased 35% year-over-year because social clips drove registrations to the next session. Editor time per webinar dropped from 8 hours to 90 minutes.",
        },
        {
          title: "Descript for podcast-to-blog",
          body: "A HR tech company's podcast feeds Descript for filler-word removal and transcript export. Writers use the cleaned transcript as a first draft for long-form blog posts, editing for voice and structure. One 40-minute episode produces a 2,000-word article in roughly two hours versus six hours from scratch. Factual accuracy is high because source is expert conversation, not AI invention.",
        },
        {
          title: "Clip context failure — compliance webinar",
          body: "AI clipping tool extracted a 30-second segment from a compliance webinar where the speaker said 'you don't need to worry about regulation X' as setup for a joke clarifying that you absolutely do. Out-of-context clip posted to LinkedIn generated legal team escalation and a public correction post. Fix: mandatory curator review with full sentence context; banned auto-publish for regulated-industry content.",
        },
      ],
    }),
    buildSection({
      number: "5.6",
      title: "Voice & Podcast AI",
      subtitle: "ElevenLabs, Descript overdub, and AI audio — narration, localisation, and synthetic voice governance",
      take: "AI voice tools enable text-to-speech narration for video, podcast intro/outro generation, audio ad variants, and voice localisation without re-recording. They also create deepfake risk and authenticity questions. Marketing use of synthetic voice requires explicit policy: approved voices, disclosure rules, and prohibition on cloning real people without consent.",
      why: "Audio content — podcasts, audio ads, video narration — is growing in B2B and consumer marketing. AI audio reduces production cost for variants but introduces trust and rights considerations text-only channels avoid.",
      paragraphs: [
        [
          s("Approved use cases for marketing voice AI. "),
          x(
            "Internal training narration with licensed synthetic voice. Multilingual versions of approved scripts using consistent synthetic narrator. Podcast show notes read-aloud for accessibility. A/B testing audio ad scripts before human voice talent records the winner.",
            "Prohibited or high-risk: cloning executive voices without explicit consent and legal review, customer-facing support voices without disclosure, emotional manipulation in vulnerable categories.",
          ),
          s(" Document approved and prohibited voice AI use cases in your AI marketing policy — same as image and copy."),
        ],
        [
          s("Voice brand is emerging — pick a consistent synthetic narrator or protect human voice. "),
          x(
            "If you use synthetic voice regularly, select one licensed voice profile and use it across product videos, onboarding, and ads — consistency builds recognition. If your brand is tied to a human host (podcast, founder voice), protect that asset and do not dilute with generic TTS.",
            "ElevenLabs voice library and custom voice cloning require clear licence terms for commercial use and broadcast.",
          ),
          s(" Legal review for voice cloning agreements before any executive or influencer voice model is created."),
        ],
        [
          s("Podcast production AI handles mechanics, not strategy. "),
          x(
            "Descript, Riverside, and Adobe Podcast clean audio, remove filler, and generate transcripts. AI show note generators summarise episodes. None replace guest booking, angle selection, or host performance — the elements that determine podcast success.",
            "Use AI to reduce post-production friction so producers spend time on distribution and guest pipeline, not noise removal.",
          ),
          s(" Feed podcast transcripts into your content archive — they are training assets for future repurposing and RAG systems."),
        ],
      ],
      examples: [
        {
          title: "The Economist — AI narration experiment",
          body: "The Economist tested AI narration for article audio versions with clear disclosure and a distinct non-human voice profile. Reader feedback was mixed: accessibility praised, but some subscribers preferred human narration for long-form analysis. They maintained hybrid approach: AI for select formats, human voice for flagship audio journalism. Transparency in labelling was critical to maintaining trust.",
        },
        {
          title: "ElevenLabs for multilingual product demos",
          body: "A dev tools company produced English product demo narration once, then generated German, French, and Japanese versions with ElevenLabs using the same synthetic voice profile. Launch timeline for localised video demos shortened from eight weeks (voice talent booking per market) to five days. Quality review by native speakers caught two technical term mispronunciations before publish.",
        },
        {
          title: "Unauthorized voice clone — agency scandal",
          body: "A marketing agency cloned a celebrity athlete's voice from public interview footage for a regional ad without consent. Athlete's team issued cease-and-desist; campaign pulled; agency relationship terminated. The brand's AI policy now explicitly prohibits voice cloning of any real person without written consent and legal approval — including 'in the style of' prompts.",
        },
      ],
    }),
    buildSection({
      number: "5.7",
      title: "Legal & Ethical Layer for Visual AI",
      subtitle: "Copyright, likeness rights, disclosure, and the compliance questions marketers must escalate",
      take: "Visual AI raises legal questions copy AI does not: training data copyright disputes, likeness and personality rights, synthetic media disclosure requirements, and platform ad policies on AI-generated content. Marketers are not lawyers — but they are the first line who chooses what publishes. A visual AI compliance checklist prevents escalation to legal after damage is done.",
      why: "A single published image with uncleared rights, an undisclosed synthetic spokesperson, or a deepfake-style asset can trigger takedowns, ad account suspension, or reputational crisis. Prevention is cheaper than remediation.",
      paragraphs: [
        [
          s("Copyright and licence status varies by tool and jurisdiction. "),
          x(
            "Adobe Firefly offers IP indemnification for enterprise customers on generated assets. Midjourney and Stable Diffusion terms differ; commercial use is permitted under their licences but indemnification is limited. Getty and Shutterstock lawsuits against AI companies continue — monitor outcomes if your category is risk-sensitive.",
            "Maintain a tool approval matrix: which generators are cleared for commercial publish, which are internal-only, which require legal sign-off per asset.",
          ),
          s(" When legal cannot give a clear answer, default to human-created or licensed stock until clarity exists."),
        ],
        [
          s("Likeness and personality rights are the highest-risk zone. "),
          x(
            "Generating images or video that resemble real people — celebrities, executives, customers — without consent is prohibited in most marketing contexts. 'Inspired by' is not a safe harbour when the output is recognisable.",
            "Product photography of real people from AI without model release is equally risky. Use AI backgrounds with real licensed photography composited in.",
          ),
          s(" Escalate to legal any asset featuring a recognisable face that was not shot in a session with signed releases."),
        ],
        [
          s("Disclosure and labelling build trust and satisfy emerging regulation. "),
          x(
            "EU AI Act and platform policies increasingly require marking synthetic content. Marketing best practice: label AI-generated or AI-assisted visuals in campaign documentation internally; disclose in consumer-facing contexts when material or when platform requires.",
            "Undisclosed AI that audiences discover themselves erodes trust more than disclosed AI that performs well.",
          ),
          s(" Partner with legal on a disclosure template for social posts, video descriptions, and ad footnotes."),
        ],
      ],
      examples: [
        {
          title: "Enterprise Firefly indemnification decision",
          body: "A global insurance company's legal team approved Adobe Firefly for customer-facing marketing assets specifically because of IP indemnification in their enterprise agreement. Midjourney was restricted to internal concepting only. The policy decision was commercial risk management, not creative preference. Marketing ops documented the matrix in the creative brief template so freelancers see it before generating.",
        },
        {
          title: "Meta ad policy — AI disclosure",
          body: "A DTC beauty brand running Meta ads with AI-generated before/after style imagery received ad rejections until they added required synthetic media labels and substantiation for claims. Compliance fix took two weeks and paused a campaign. Now their ad ops checklist includes platform-specific AI disclosure before upload — not after rejection.",
        },
        {
          title: "Stock composite best practice — B2B annual report",
          body: "A consulting firm's annual report used AI-generated abstract illustrations composited with licensed photography of real consultants. No AI-generated faces. Legal cleared the approach because human photography had model releases and AI elements were non-representational. Documented asset lineage in the DAM for audit trail.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "5.8",
      title: "The Marketer Decision Lens — Visual Governance",
      subtitle: "A five-check framework before you scale AI visuals to another channel or campaign",
      take: "Before scaling visual AI to a new channel, campaign type, or team: (1) do you have visual prompt templates with style references and negatives? (2) are design AI tools constrained by locked brand templates? (3) is human curation assigned for clip selection and final approval? (4) does your rights and disclosure checklist cover this asset type? (5) is the tool approved for commercial publish in your matrix? Five yes answers → scale. Any no → fix governance before adding volume.",
      why: "Visual AI failures are public and fast — off-brand imagery and rights issues spread on social before internal review catches them. This lens is a 30-minute gate for campaign planning and vendor onboarding.",
      paragraphs: [
        [
          s("Check one: visual prompt library readiness. "),
          x(
            "Can a new team member generate an on-brand social tile using your prompt templates and reference bank in two attempts? If not, templates need work before rollout.",
            "Test with someone outside the creative team — designers assume knowledge others lack.",
          ),
          s(" Prompt library readiness is the go/no-go gate for decentralised visual AI access."),
        ],
        [
          s("Checks two and three: template constraints and curation ownership. "),
          x(
            "Design AI outputs come from locked templates, not blank canvases, for customer-facing work. Named visual curators approve clip selections, caption accuracy, and final publish assets — with time budgeted in campaign plans.",
            "Decentralised generation without centralised curation produces a fragmented visual brand within one quarter.",
          ),
          s(" If leadership demands 3x visual output with the same headcount, negotiate better templates and repurposing automation — not skipped approval."),
        ],
        [
          s("Checks four and five: rights matrix and tool approval. "),
          x(
            "Every published asset type has a rights and disclosure checklist completed. AI tools used are on the approved commercial-publish matrix with licence terms documented. Agency partners receive the same visual AI policy as internal teams.",
            "Governance in a shared Notion page nobody reads fails. Governance in brief templates, DAM metadata, and upload checklists scales.",
          ),
          s(" Run this five-check lens before seasonal campaign planning and before granting new tools to field teams."),
        ],
      ],
      examples: [
        {
          title: "CMO visual governance gate — retail expansion",
          body: "A retail CMO required five-check sign-off before 200 store managers got Canva AI access for local social posts. Two weeks were invested in template library build-out. First month post-launch: brand compliance audit showed 94% of store posts within template bounds versus 61% in a pilot without governance. One store manager who bypassed templates with freeform AI received coaching, not punishment — the system failed to make the right path easiest.",
        },
        {
          title: "Agency visual AI onboarding workshop",
          body: "A pharmaceutical marketing team runs a half-day visual AI workshop for agencies: approved tools matrix, prompt templates, rights checklist walkthrough, prohibited use cases (no AI faces in patient-facing materials). Agencies sign visual AI compliance acknowledgment. First-campaign audit time dropped 40% because assets arrived pre-compliant.",
        },
        {
          title: "Five-check failure — viral AI product image",
          body: "A consumer electronics brand published an AI-generated product hero image that showed a device with non-existent ports. Image went viral on Reddit for the wrong reasons. Retrofit took three weeks: mandatory product composite rule, merchandising sign-off gate, tool restriction to background-only AI. Five-check upfront would have cost one brief review meeting.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-cs-ch5-visual-pipeline",
      type: "flow",
      title: "Visual AI Production Pipeline",
      caption:
        "Brief with brand constraints → generate or design → iterate with style references → rights and disclosure check → visual governance approval before publish.",
    }),
  ],
  quiz: [
    {
      q: "Your team wants to use Midjourney for customer-facing Instagram ads. Legal has not approved any image AI tools yet. What is the correct first step?",
      options: [
        "Start publishing — Midjourney terms allow commercial use.",
        "Establish a tool approval matrix with legal covering commercial publish rights, indemnification, and disclosure requirements before scaling customer-facing use.",
        "Use Midjourney internally but tell the social team to not mention it.",
        "Switch to screenshots of competitors' AI images.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Tool approval and rights clearance precede scale. Re-read sections 5.1 and 5.7.",
      wrongFeedback:
        "Commercial use terms are not the same as enterprise risk clearance. Legal and policy first. Re-read sections 5.1 and 5.7.",
    },
    {
      q: "A marketer generates blog headers on a blank Canva canvas with Magic Design. Output looks generic and off-brand. What is the best fix?",
      options: [
        "Switch to a different AI model.",
        "Build locked brand templates with constrained slots and prompt templates — generate within the template system, not on blank canvases.",
        "Hire more designers to fix every image manually.",
        "Stop using visuals entirely.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Template-first design AI enforces brand constraints. Re-read sections 5.2 and 5.3.",
      wrongFeedback:
        "Blank-canvas AI produces generic output. Locked templates and visual prompt libraries are the fix. Re-read sections 5.2 and 5.3.",
    },
    {
      kind: "order",
      q: "Order the visual AI production pipeline from first step to last.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Brief with brand constraints, style references, and negative prompts",
        "Generate or design within approved templates and tools",
        "Iterate and curate — human selects and refines output",
        "Rights, disclosure, and governance approval before publish",
      ],
      correctFeedback:
        "Right. Brief → generate → curate → approve. Skipping rights check or curation creates brand and legal risk. Re-read sections 5.1–5.8.",
      wrongFeedback:
        "Start with the brief — generation depends on it. Rights and approval come last before publish. Re-read sections 5.1–5.8.",
    },
    {
      kind: "categorize",
      q: "Sort each practice into the correct visual AI governance layer.",
      categories: ["Visual prompt library", "Template system", "Human curation", "Rights & compliance"],
      items: [
        { text: "Maintaining a shared negative prompt block updated quarterly.", category: 0 },
        { text: "Locked Canva layouts with fixed logo zones and colour slots.", category: 1 },
        { text: "Reviewer checks AI clip context before LinkedIn publish.", category: 2 },
        { text: "Tool approval matrix distinguishing commercial vs internal-only AI.", category: 3 },
        { text: "Style reference bank of three approved brand images per aesthetic.", category: 0 },
        { text: "Platform-specific AI disclosure checklist before ad upload.", category: 3 },
      ],
      correctFeedback:
        "Right. Prompts = generation input. Templates = layout constraints. Curation = human judgment. Rights = legal and platform compliance. Re-read sections 5.2–5.7.",
      wrongFeedback:
        "Match each practice to where it operates: prompts (generation), templates (design), curation (pre-publish), rights (compliance). Re-read sections 5.2–5.7.",
    },
    {
      q: "An AI clipping tool extracts a punchy 30-second segment from a webinar, but the speaker's point is misleading out of context. What failed?",
      options: [
        "The clipping tool model quality.",
        "Human curation — AI selects structurally strong moments; marketers must verify contextual accuracy before publish.",
        "The webinar content was bad.",
        "Captions were missing.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Repurposing AI requires human curation on context and message alignment. Re-read section 5.5.",
      wrongFeedback:
        "Clip selection is a curation responsibility, not fully automatable. Re-read section 5.5.",
    },
    {
      q: "Leadership wants AI avatar videos from the CEO for weekly product updates. What should marketing recommend?",
      options: [
        "Publish immediately — avatar video is innovative.",
        "Assess quality bar, disclosure requirements, and consent; pilot internal-only first; compare trust impact versus human-recorded webcam updates before external scale.",
        "Clone the CEO's voice from podcast footage without asking.",
        "Use avatar only for competitors' brands.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Avatar video for executive communication carries uncanny valley and authenticity risk — pilot and govern. Re-read sections 5.4 and 5.6.",
      wrongFeedback:
        "Executive avatar video requires quality, consent, and disclosure assessment before external use. Re-read sections 5.4 and 5.6.",
    },
  ],
});
