import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter06MktAiEthicsResponsibleMarketing = buildChapter({
  slug: "mkt-ai-ethics-responsible-marketing",
  number: 6,
  shortTitle: "AI Ethics & Responsible Marketing",
  title: "AI Ethics & Responsible Marketing — The Governance Layer Marketers Must Own",
  readingMinutes: 24,
  summary:
    "AI accelerates every marketing workflow — including the workflows that create legal liability, reputational damage, and consumer harm. Responsible AI marketing is not a compliance checkbox for the legal team; it is an operational discipline marketers own: transparency, rights management, fact verification, bias awareness, privacy protection, and synthetic media governance.",
  keyTakeaway:
    "Every AI-assisted marketing asset passes through the same question: would we be comfortable defending this to a customer, regulator, journalist, or court? Marketers who build a responsible review workflow before scaling AI output avoid the incidents that become case studies in what not to do.",
  pmCallout: MKT_CALLOUT,
  sections: [
    buildSection({
      number: "6.1",
      title: "Transparency in AI-Assisted Marketing",
      subtitle: "When and how to disclose AI involvement — and when silence is a liability",
      take: "Transparency means audiences and stakeholders understand when AI materially shaped the content, creative, or targeting they encounter. In 2026, disclosure expectations are rising from voluntary best practice toward regulatory requirement in multiple jurisdictions — and consumer backlash arrives faster than legislation.",
      why: "Marketers who treat AI disclosure as a legal-only question miss the brand dimension. Audiences feel deceived when AI-generated content is presented as purely human — even when no law was broken. Transparency is a trust investment, not a confession.",
      paragraphs: [
        [
          s("Transparency operates on a spectrum, not a binary switch. "),
          x(
            "Low disclosure need: AI used for internal brainstorming, grammar checking, or research summarisation that does not reach the audience. Medium: AI drafted copy that a human substantially edited and approved. High: AI-generated images, synthetic spokespersons, personalised copy at scale, or automated chatbot interactions presented as human.",
            "Each tier warrants different disclosure language. 'Written with AI assistance' differs from 'This image was AI-generated' differs from 'You are chatting with an AI assistant'.",
          ),
          s(" Map your AI use cases to disclosure tiers before a crisis forces the conversation."),
        ],
        [
          s("Regulatory direction is clear even where law is still forming. "),
          x(
            "The EU AI Act requires transparency for AI-generated content in certain contexts. US FTC guidance treats deceptive use of AI in advertising as within existing false advertising authority. ASA (UK) and similar bodies have ruled on undisclosed AI imagery in ads.",
            "The practical standard emerging: if a reasonable consumer would care whether AI was involved, disclose. Beauty brands using AI-generated models, financial services using AI-written advice, political advertising using synthetic media — all high scrutiny.",
          ),
          s(" Build disclosure language into your content templates now — retrofitting during a PR crisis produces worse copy under time pressure."),
        ],
        [
          s("Internal transparency matters as much as external. "),
          x(
            "Marketing teams must know which assets are AI-assisted for audit, rights management, and incident response. A content CMS tag — 'AI draft, human approved' — enables traceability when a claim is challenged six months post-publish.",
            "Silos where social uses AI openly but PR claims 'all human-written' create organisational liability when the truth surfaces.",
          ),
          s(" Marketing ops should require AI usage metadata on every published asset — channel, tool, human approver, date."),
        ],
      ],
      examples: [
        {
          title: "Levi Strauss AI model disclosure reversal",
          body: "Levi's announced plans to supplement human models with AI-generated diverse models for e-commerce — then paused after public criticism about authenticity, labour implications, and insufficient disclosure. The lesson for marketers: synthetic media in brand storytelling requires proactive transparency and stakeholder analysis before launch, not reactive apology after.",
        },
        {
          title: "Microsoft Copilot marketing disclosure",
          body: "Microsoft's marketing for Copilot products includes explicit framing about AI capabilities and limitations — modelling how B2B marketers can discuss AI-assisted features without overclaiming. Their approach: name what AI does, name what humans review, avoid implying full autonomy. B2B marketers selling AI-enhanced products should mirror this clarity in their own collateral.",
        },
        {
          title: "Undisclosed AI blog incident",
          body: "A B2B software company's blog published an AI-generated post containing a fabricated customer statistic. When challenged, the company could not identify which posts were AI-assisted because no internal tagging existed. They paused the entire blog for six weeks to audit. Cost: SEO momentum and sales trust. A metadata discipline costing zero dollars would have limited the pause to one post.",
        },
      ],
    }),
    buildSection({
      number: "6.2",
      title: "Copyright and Training Data Risk",
      subtitle: "Who owns AI-generated marketing assets — and what your tools were trained on",
      take: "Copyright in AI marketing spans three risks: infringing others' work through generated content, losing ownership of your own outputs through vendor terms, and unlawfully using protected material as prompt input. Marketers are often the first to paste competitor copy, stock phrases, or client materials into AI tools — making this a front-line issue.",
      why: "Legal teams review contracts slowly. Marketers use tools daily. The gap between 'legal hasn't approved this tool' and 'the team has been using it for months' is where copyright incidents live.",
      paragraphs: [
        [
          s("AI-generated content occupies uncertain copyright territory in most jurisdictions. "),
          x(
            "US Copyright Office guidance: purely AI-generated works without meaningful human authorship may not be registrable. UK and EU positions are evolving similarly. For marketers, the practical implication is that campaign assets need documented human creative contribution if IP protection matters.",
            "High-investment assets — campaign hero films, brand characters, trademarked slogans — need human authorship trails. Low-stakes social posts may not warrant registration but still need originality review.",
          ),
          s(" Document human editorial contribution for any asset you may need to defend as proprietary IP."),
        ],
        [
          s("Prompt input can be a copyright violation independent of output. "),
          x(
            "Pasting a competitor's white paper, a Getty image, or a licensed agency brief into an AI tool may violate terms of service and copyright law — even if the output looks different. Training-data lawsuits against major AI vendors establish that rights holders are litigious.",
            "Marketer rule: only paste content you own, have licensed, or is explicitly permitted in your AI vendor's terms. When in doubt, summarise in your own words rather than paste.",
          ),
          s(" Include prompt hygiene in AI training for every marketer and agency partner."),
        ],
        [
          s("Vendor terms determine who owns what you create. "),
          x(
            "Some AI tools grant you output rights. Others reserve rights, claim licence to use your prompts for training, or prohibit commercial use on free tiers. Adobe Firefly's commercial indemnity model differs from a free image generator's 'use at your own risk' terms.",
            "Before enterprise rollout, legal should review: output ownership, indemnification for infringement claims, training data provenance, and whether your prompts are stored or used for model improvement.",
          ),
          s(" Maintain an approved AI tool list with rights status — marketers should not freestyle tool selection for commercial work."),
        ],
      ],
      examples: [
        {
          title: "Getty Images v. Stability AI",
          body: "Getty sued Stability AI alleging training on millions of copyrighted images without licence. For marketers, the case reinforced that image AI tools carry infringement risk when outputs resemble protected works. Brands using AI image tools for commercial campaigns should prefer tools with licensed training data (Adobe Firefly, Canva's licensed models) or custom models — and run similarity review before publish.",
        },
        {
          title: "Agency prompt contamination",
          body: "A travel brand's agency pasted licensed stock photography descriptions and competitor brochure text into Midjourney prompts to 'match the style'. Outputs triggered a similarity complaint from a competitor. The brand terminated the agency contract but absorbed reputational damage. Agency AI policies now explicitly prohibit third-party content in prompts without rights clearance.",
        },
        {
          title: "Enterprise AI tool approval workflow",
          body: "A Fortune 500 CPG company maintains a three-tier AI tool list: green (legal approved, commercial indemnity), amber (approved for internal use only), red (prohibited). Marketers request amber-to-green promotion through legal with standardised questionnaire. Adoption increased because the list removed guesswork — marketers want speed, not piracy risk.",
        },
      ],
    }),
    buildSection({
      number: "6.3",
      title: "Hallucination Risk in Marketing Copy",
      subtitle: "When confident AI prose invents facts, stats, testimonials, and product capabilities",
      take: "Hallucination — AI generating plausible but false information — is a structural property of generative models, not a bug marketers can prompt away. In marketing, hallucinations become false product claims, fabricated statistics, imaginary customer quotes, and incorrect competitive comparisons. Every consequential claim in AI-assisted copy requires verification.",
      why: "Marketing is a claims business. Advertising standards, consumer protection law, and SEC rules (for public companies) hold you accountable for what you publish — regardless of whether a human or AI wrote the first draft.",
      paragraphs: [
        [
          s("Marketing hallucinations cluster in predictable categories. "),
          x(
            "Invented statistics ('studies show 73% improvement'). Fabricated testimonials or paraphrased quotes attributed to real people. Non-existent product features or integrations. Wrong pricing, dates, or regulatory status. False competitive claims ('only provider with X').",
            "Models generate these confidently because fluent plausibility is what they optimise for — not truth. The more specific the claim, the higher the hallucination risk.",
          ),
          s(" Maintain an approved claims bank: every statistic, comparison, and product capability AI may reference must come from a verified source document."),
        ],
        [
          s("Verification workflow is non-negotiable for external-facing content. "),
          x(
            "Tier one claims (product capabilities, pricing, performance data): verify against product management or official spec sheet. Tier two (market statistics, industry trends): verify against cited source or remove citation. Tier three (thought leadership, opinion): human author owns the argument — AI may draft but not invent evidence.",
            "Never publish AI-generated citations without opening the source. Hallucinated footnotes are a documented phenomenon — including fake court cases in legal marketing.",
          ),
          s(" Assign named fact-checkers by content type — product marketing for product claims, PR for spokesperson quotes, legal for regulated claims."),
        ],
        [
          s("Chatbots and conversational marketing multiply hallucination exposure. "),
          x(
            "Customer-facing AI chatbots that answer product questions invent answers when retrieval fails. Air Canada's chatbot liability case established that incorrect AI-generated customer promises bind the company.",
            "Conversational marketing tools need retrieval from approved knowledge bases, confidence thresholds that trigger human handoff, and logging for audit — not open-ended generation.",
          ),
          s(" Treat customer-facing AI as a publishing system with the same claim verification as your website — because legally, it is."),
        ],
      ],
      examples: [
        {
          title: "Air Canada chatbot bereavement fare",
          body: "Air Canada's customer service chatbot incorrectly promised a bereavement fare discount the airline did not offer. The company argued the chatbot was a separate legal entity; the tribunal held Air Canada liable. Marketers deploying conversational AI must ensure retrieval-grounded answers, human escalation paths, and regular auditing of high-risk query categories.",
        },
        {
          title: "B2B SaaS integration claim error",
          body: "A project management SaaS marketer used AI to draft a comparison landing page. The draft claimed integration with a major ERP system that was not on the product roadmap — hallucinated from category pattern matching. A prospect forwarded the page to the ERP vendor's partnership team. Result: embarrassing correction, delayed partnership talks, and a mandatory product-marketing review gate for all AI drafts.",
        },
        {
          title: "Approved claims bank implementation",
          body: "A fintech marketing team built a Notion 'claims bank' — 120 verified statistics, regulatory statements, and product claims with source links and expiry dates. AI prompts include instruction: 'only use claims from this document'. Hallucinated stat rate in drafts dropped from roughly 15% to under 2% in spot checks. Maintenance: product marketing owns monthly refresh.",
        },
      ],
    }),
    buildSection({
      number: "6.4",
      title: "Bias in AI Marketing",
      subtitle: "How training data and targeting logic embed inequality — and what marketers can audit",
      take: "AI bias in marketing manifests as stereotypical creative, exclusionary audience targeting, inaccessible content, and performance models that systematically under-serve or misrepresent demographic groups. Marketers own the brief, the audience definition, and the creative — making bias auditing a marketing responsibility, not only a data science one.",
      why: "Biased marketing is not just unethical — it is commercially stupid. Excluding audiences through biased targeting leaves revenue on the table. Stereotypical creative alienates the audiences you claim to serve. Regulators are increasing scrutiny of algorithmic advertising practices.",
      paragraphs: [
        [
          s("Bias enters marketing AI at three injection points. "),
          x(
            "Training data bias: image and copy models reproduce stereotypical representations learned from historical advertising. Prompt bias: marketers request 'professional-looking person' and receive demographic skew. Targeting bias: lookalike models and bid optimisation amplify historical exclusion — if past customers were predominantly one demographic, the model finds more of the same and misses others.",
            "Each injection point has a different audit method. Training bias: review creative outputs across demographic scenarios. Prompt bias: standardise inclusive prompting. Targeting bias: analyse audience reach and conversion by segment.",
          ),
          s(" Run creative bias reviews before campaign launch — not after social backlash."),
        ],
        [
          s("Representation in AI-generated creative requires active direction. "),
          x(
            "Default image model outputs skew toward historical advertising norms unless prompts explicitly specify diverse, non-stereotypical representation. 'Doctor' yields male. 'Nurse' yields female. 'Executive' yields particular demographics. Marketers must counter-bias in prompts and review outputs.",
            "Inclusive prompting is not political — it is accuracy. Your customer base is diverse; your creative should reflect that by design.",
          ),
          s(" Build inclusive prompt templates into your creative library — tested outputs, not good intentions."),
        ],
        [
          s("Algorithmic targeting deserves fairness scrutiny. "),
          x(
            "Meta, Google, and programmatic platforms use ML for audience optimisation. Advertisers who blindly accept 'advantage+' or automated targeting may systematically exclude protected or underserved groups — sometimes violating fair housing, credit, or employment advertising rules.",
            "Marketers in regulated categories must understand platform targeting restrictions and audit delivery reports for demographic skew. 'The algorithm decided' is not a defence in housing or credit advertising enforcement.",
          ),
          s(" Quarterly targeting audit: who saw this campaign, who converted, who was excluded — by demographic segment where data exists."),
        ],
      ],
      examples: [
        {
          title: "Meta housing ad discrimination settlement",
          body: "Meta settled with US regulators over allegations that its ad targeting tools enabled discriminatory housing advertising. Marketers in housing, credit, and employment categories face special restrictions on audience targeting — AI-optimised or not. Lesson: automated targeting in regulated categories requires compliance review, not just performance optimisation.",
        },
        {
          title: "Inclusive stock and AI imagery audit",
          body: "A healthcare system audited AI-generated patient imagery across their website refresh. Initial prompts produced predominantly young, able-bodied subjects. Revised prompts specified age, disability, and ethnic diversity requirements with review rubric. Patient trust scores for website 'people like me' representation improved measurably in post-launch survey.",
        },
        {
          title: "Lookalike audience exclusion discovery",
          body: "A DTC brand's lookalike campaign delivered 85% of impressions to one gender despite a gender-neutral product. Investigation: historical purchaser data skewed because early influencer partnerships skewed. The model optimised the skew. Fix: seed audience broadening, explicit targeting balance, and quarterly delivery audits. Recovered an estimated 12% addressable audience.",
        },
      ],
    }),
    buildSection({
      number: "6.5",
      title: "Privacy and Data in AI Marketing",
      subtitle: "What you must never paste into a model — and what your martech stack feeds automatically",
      take: "Privacy in AI marketing means protecting customer PII, respecting consent boundaries, and understanding what data flows into AI tools through integrations. A marketer pasting a customer list into ChatGPT for personalisation ideas can cause a GDPR breach as surely as an engineer misconfiguring a database.",
      why: "Marketing sits on customer data — CRM records, email engagement, survey responses, behavioural segments. AI tools create a new exfiltration path for data that was previously contained in approved systems. One paste operation can bypass months of privacy engineering.",
      paragraphs: [
        [
          s("Classify data before it enters any AI tool. "),
          x(
            "Green: anonymised aggregate data, public information, generic campaign concepts. Amber: internal strategy documents, unpublished campaign plans, anonymised but small-sample data. Red: customer PII, payment data, health information, employee data, unreleased financial results, confidential contracts.",
            "Red data never enters public AI tools. Amber requires enterprise AI with data processing agreements. Green still needs brand and accuracy review.",
          ),
          s(" Post the classification chart above every marketer's desk — literally. Samsung's chip-design leak via ChatGPT started with a paste."),
        ],
        [
          s("Enterprise AI contracts must match martech privacy standards. "),
          x(
            "When HubSpot, Salesforce, or Adobe embed AI, data processing terms inherit from your existing agreement — but feature activation may change data flows. New standalone AI tools need DPIA (data protection impact assessment) before processing customer data.",
            "Marketing ops should maintain a data flow map: which AI tools touch which data categories, under which legal basis, with which retention period.",
          ),
          s(" Privacy team sign-off is a prerequisite for any AI tool that connects to CRM, CDP, or email platforms."),
        ],
        [
          s("AI personalisation intensifies consent questions. "),
          x(
            "Using AI to generate personalised email copy based on behavioural data may require consent beyond your original email signup — depending on jurisdiction. Generating synthetic customer personas from real data blurs the line between insight and surveillance.",
            "Marketers should document the legal basis for AI-driven personalisation and honour opt-out across AI features — not just email sends.",
          ),
          s(" When in doubt, generate personalisation from segment attributes ('enterprise buyer, healthcare') not individual records ('John Smith, 47, diabetes')."),
        ],
      ],
      examples: [
        {
          title: "Samsung ChatGPT confidentiality breach",
          body: "Samsung engineers pasted proprietary source code and meeting notes into ChatGPT. The data entered vendor training pipelines. Samsung banned public generative AI tools. Marketing parallel: a CRM manager pasted customer complaint logs with names into a public AI tool to 'draft response templates'. Same risk class. Enterprise AI with zero-retention policies or local processing is the mitigation.",
        },
        {
          title: "GDPR and AI personalisation review",
          body: "A European e-commerce brand's legal team blocked an AI personalisation feature that used individual browsing history to generate dynamic product descriptions until DPIA was completed. Marketing redesigned to segment-level personalisation (category affinity, not individual history) — achieving 80% of the personalisation benefit within consent boundaries.",
        },
        {
          title: "Zero-retention enterprise AI rollout",
          body: "A US financial services marketing team negotiated zero-retention, no-training clauses with their enterprise AI vendor before processing any customer insights. Internal audit confirmed prompts and outputs were not stored. This contractual foundation enabled AI use cases that would otherwise be prohibited — proving privacy enablement, not just privacy restriction.",
        },
      ],
    }),
    buildSection({
      number: "6.6",
      title: "Deepfakes and Synthetic Media",
      subtitle: "Voice clones, AI avatars, and fabricated footage in brand marketing",
      take: "Synthetic media — AI-generated images, video, audio, and avatars realistic enough to be mistaken for authentic — is now a marketing production tool and a brand risk simultaneously. Responsible use requires consent, disclosure, provenance metadata, and clear policies on what your brand will and will not synthesise.",
      why: "The same technology that lets you localise video without reshooting lets bad actors impersonate your CEO. Marketers experimenting with synthetic media inherit authenticity, labour, and fraud concerns that did not exist in the stock-photo era.",
      paragraphs: [
        [
          s("Map synthetic media use cases by risk tier. "),
          x(
            "Lower risk: AI background extension, product photo variation, voice-over localisation with actor consent, internal training avatars. Higher risk: synthetic spokesperson replacing human talent, AI-generated 'customer' testimonials, deepfake-style video of real executives, synthetic user-generated content presented as authentic.",
            "Higher risk is not prohibited — it requires disclosure, consent from depicted persons, legal review, and stakeholder communication plan.",
          ),
          s(" Publish an internal synthetic media policy before your creative team experiments — not after a viral mistake."),
        ],
        [
          s("Consent and likeness rights are non-negotiable for depicted individuals. "),
          x(
            "Using AI to extend a spokesperson contract digitally, clone a CEO's voice, or generate imagery resembling a real person requires explicit likeness agreements covering synthetic use. Standard talent contracts from 2020 may not cover AI reproduction.",
            "SAG-AFTRA and similar bodies have won protections for voice and likeness AI use. Brands face strike, lawsuit, or boycott risk when bypassing consent.",
          ),
          s(" Legal review of every synthetic media asset depicting a recognisable person — real or intended to resemble real."),
        ],
        [
          s("Provenance and detection are emerging brand protection tools. "),
          x(
            "Content credentials (C2PA) embed metadata showing AI generation or editing history. Watermarking from major AI platforms helps platforms identify synthetic content. Brands should both adopt provenance on their own synthetic assets and monitor for unauthorised deepfakes of executives and products.",
            "Marketing security is now part of the job: impersonation scams using CEO voice clones target customers via social and email.",
          ),
          s(" Coordinate with corporate security on executive deepfake monitoring — marketing is often where impersonation is first spotted."),
        ],
      ],
      examples: [
        {
          title: "Synthesia enterprise video localisation",
          body: "Synthesia and similar platforms enable video localisation with AI avatars — valuable for global B2B marketing. Responsible users: obtain presenter consent for avatar creation, disclose AI generation where required, restrict avatar use to approved scripts, and never imply live human presence when content is synthetic. Brands skipping consent steps face talent relationship and legal exposure.",
        },
        {
          title: "CEO voice clone fraud alert",
          body: "A fintech company's customers received voicemails appearing to be the CEO promoting a crypto scheme — entirely synthetic. Marketing detected the scam first via social mentions. Response required coordinated comms, customer alert, and platform takedown requests. Now part of their crisis playbook: synthetic impersonation monitoring and rapid disclosure template.",
        },
        {
          title: "AI UGC policy",
          body: "A beauty brand prohibited presenting AI-generated 'customer transformation' imagery as real user results — a practice competitors used and regulators flagged. Their policy: synthetic results must be labelled; real customer content requires documented consent. Short-term content volume decreased; complaint rate and regulatory risk dropped to zero.",
        },
      ],
    }),
    buildSection({
      number: "6.7",
      title: "Environmental Cost of AI Marketing",
      subtitle: "Energy, compute, and the sustainability story your brand may need to tell",
      take: "AI marketing workloads — image generation, video synthesis, large-scale personalisation, always-on chatbots — consume compute energy with measurable carbon footprint. For sustainability-positioned brands and ESG-reporting enterprises, AI usage is becoming a procurement and communications consideration, not an invisible backend cost.",
      why: "You do not need to be an environmental scientist to make responsible choices. Marketers influence tool selection, generation volume, and whether AI replaces or supplements physical production — all of which affect environmental impact.",
      paragraphs: [
        [
          s("Not all AI marketing tasks have equal environmental cost. "),
          x(
            "Text generation via API: relatively low per-query energy. High-resolution image generation: moderate. Video synthesis and model fine-tuning: high. Generating 500 banner variants when five curated variants would suffice: wasteful regardless of per-unit cost.",
            "Efficiency is an environmental and budget discipline. Generate with purpose — brief-constrained prompts, variant limits, reuse across channels.",
          ),
          s(" Include 'generation budget' in campaign planning: how many AI compute cycles does this campaign actually need?"),
        ],
        [
          s("Vendor selection increasingly includes sustainability reporting. "),
          x(
            "Major cloud and AI providers publish emissions data and renewable energy commitments. Enterprise procurement teams add carbon considerations to vendor scorecards. Marketing's AI tool requests may face sustainability review alongside legal and security.",
            "Prefer vendors with published environmental commitments and efficient models for your use case. Smaller models for simpler tasks reduce compute waste.",
          ),
          s(" When sustainability is a brand pillar, your AI production choices must align — or you invite greenwashing accusations."),
        ],
        [
          s("AI can reduce environmental impact in some marketing workflows. "),
          x(
            "Virtual photoshoots replacing physical production with flights and sets. Localisation without flying crews. Digital prototypes replacing physical samples. Right-sized AI use reduces impact; indiscriminate generation increases it.",
            "Honest sustainability narrative: name where AI helps (fewer physical shoots) and where it costs (compute-heavy video generation). Stakeholders respect nuance.",
          ),
          s(" Net environmental assessment beats ignoring the question — especially for brands with public sustainability commitments."),
        ],
      ],
      examples: [
        {
          title: "Patagonia compute-conscious creative",
          body: "Patagonia's marketing team reportedly limits high-compute AI image generation for campaigns where authentic photography aligns with brand values — using AI for adaptation and localisation rather than replacing location shoots that are part of their storytelling. Whether or not formal policy exists publicly, the principle applies: environmental brand values should inform AI production choices.",
        },
        {
          title: "Enterprise green procurement",
          body: "A European telecom's procurement added sustainability questionnaire to AI vendor evaluation: renewable energy %, emissions per inference, data centre location. Marketing's preferred creative AI vendor scored lower than an alternative; switch saved modestly on cost and materially on reported scope 3 emissions. Marketing learned sustainability is a selection criterion, not a PR afterthought.",
        },
        {
          title: "Variant bloat audit",
          body: "An e-commerce team generated 200 AI product image backgrounds per SKU for personalisation testing. Analysis showed top 5 variants captured 90% of performance lift. Remaining 195 were environmental and budget waste. New policy: maximum 10 variants per test, human selection before scaling. Same learning, fraction of compute.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "6.8",
      title: "The Marketer Decision Lens — Responsible Practice",
      subtitle: "A five-gate review before any AI-assisted asset reaches your audience",
      take: "Before publish: (1) transparency — is disclosure required and present? (2) rights — do we own this output and were prompts clean? (3) facts — is every claim verified against approved sources? (4) fairness — does creative and targeting pass bias review? (5) privacy — was customer data handled within classification policy? Five passes → publish. Any fail → hold, fix, or escalate to legal.",
      why: "Responsible marketing is not a philosophy lecture — it is a checklist marketers can run in fifteen minutes per asset. Building the habit before an incident is cheaper than building it during one.",
      paragraphs: [
        [
          s("Gate one and two: transparency and rights on every external asset. "),
          x(
            "Disclosure tier identified and met. Output ownership confirmed for commercial use. No third-party copyrighted material in prompts. Synthetic media consent obtained where applicable.",
            "These gates take five minutes with a standardised form — mostly checkbox, not essay.",
          ),
          s(" CMS metadata captures gate completion — audit trail for every published asset."),
        ],
        [
          s("Gate three: fact verification against the claims bank. "),
          x(
            "Every statistic, product claim, comparison, and quote traced to approved source or flagged for removal. Citations opened and confirmed — not just present.",
            "Product marketing owns the claims bank; channel marketers own verification at publish time.",
          ),
          s(" Chatbot and conversational assets require the same gate — a chatbot answer is a published claim."),
        ],
        [
          s("Gates four and five: fairness and privacy before targeting goes live. "),
          x(
            "Creative reviewed for stereotypical representation. Targeting settings checked against platform restrictions for your category. Customer data classification confirmed — no red-tier data in unapproved tools.",
            "Regulated categories (finance, housing, health, employment): legal sign-off on gate four mandatory.",
          ),
          s(" Run this five-gate lens in campaign kickoff meetings — assign gate owners by name, not by department."),
        ],
      ],
      examples: [
        {
          title: "Responsible review in campaign workflow",
          body: "A health tech company embedded the five-gate checklist in Asana campaign templates. Each asset task includes gate fields; cannot mark 'ready to publish' until complete. First quarter: 23 assets held at fact-check gate — 7 had hallucinated stats caught pre-publish. Zero post-publish claim corrections versus three the prior quarter.",
        },
        {
          title: "Agency gate compliance",
          body: "A consumer goods brand requires agencies to submit AI usage declaration with every deliverable: tools used, data pasted, human edit degree, disclosure recommendation. Brand manager runs five-gate review before approval. One agency deliverable rejected for unlicensed AI image tool — re-shot with approved platform. Policy enforced without drama because expectations were set at engagement start.",
        },
        {
          title: "Crisis-prevention ROI",
          body: "Marketing leadership at a B2B firm calculated responsible review cost: ~20 minutes per asset, ~400 assets/quarter = roughly 133 hours. Compared to one hallucinated stat incident that consumed 200+ hours of legal, PR, and sales remediation. Five-gate review is cheaper than one incident — and that math convinces sceptical executives.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-ch6-responsible-review",
      type: "flow",
      title: "Responsible Marketing Review",
      caption:
        "Draft → fact-check → rights and disclosure → bias scan → named approver signs off before anything reaches your audience.",
    }),
  ],
  quiz: [
    {
      q: "A marketer pastes 500 customer support tickets (with names) into ChatGPT to draft FAQ improvements. What is the primary issue?",
      options: [
        "The FAQ might not be SEO-optimised.",
        "Customer PII in a public AI tool is a privacy breach — red-tier data requires enterprise AI with appropriate data processing terms or anonymisation first.",
        "ChatGPT cannot process 500 tickets at once.",
        "FAQs should always be written by support staff, not marketers.",
      ],
      correct: 1,
      correctFeedback:
        "Right. PII never enters public AI tools. Classify data before paste. Re-read section 6.5.",
      wrongFeedback:
        "Customer names and support content are red-tier data. Public AI tools create exfiltration risk regardless of output quality. Re-read section 6.5.",
    },
    {
      q: "An AI draft includes 'According to a 2024 industry study, 84% of teams see 3x ROI.' No study is cited in the prompt. What do you do?",
      options: [
        "Publish — specific stats increase credibility.",
        "Remove or replace with a verified claim from the approved claims bank — AI invented statistics are hallucinations and create advertising liability.",
        "Add a generic footnote saying 'industry research'.",
        "Ask the AI to generate a citation.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Unverified statistics are high-risk hallucinations. Use the claims bank or delete. Re-read sections 6.3 and 6.8.",
      wrongFeedback:
        "AI-generated statistics without sources are hallucinations — confident, plausible, and potentially illegal if published. Re-read sections 6.3 and 6.8.",
    },
    {
      kind: "order",
      q: "Order the five responsible marketing gates from first check to last before publish.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Transparency — disclosure tier identified and met",
        "Rights — output ownership and clean prompt inputs confirmed",
        "Facts — every claim verified against approved sources",
        "Fairness — creative and targeting pass bias review",
        "Privacy — customer data handled within classification policy",
      ],
      correctFeedback:
        "Right. Transparency and rights first, then facts, fairness, and privacy. Re-read section 6.8.",
      wrongFeedback:
        "Start with transparency and rights — then facts, fairness, privacy. Re-read section 6.8.",
    },
    {
      kind: "categorize",
      q: "Sort each scenario into the primary ethical risk category.",
      categories: ["Hallucination", "Copyright", "Bias", "Privacy"],
      items: [
        { text: "AI-generated blog cites a research paper that does not exist.", category: 0 },
        { text: "Agency pastes competitor brochure text into an image AI prompt.", category: 1 },
        { text: "Lookalike audience delivers 90% impressions to one gender for a gender-neutral product.", category: 2 },
        { text: "CRM export pasted into a public chatbot for email personalisation ideas.", category: 3 },
        { text: "Product page claims integration with software the company does not offer.", category: 0 },
        { text: "AI image prompts consistently produce stereotypical 'executive' depictions.", category: 2 },
      ],
      correctFeedback:
        "Right. Hallucination = false claims. Copyright = rights violations in inputs/outputs. Bias = unfair representation or targeting. Privacy = improper data handling. Re-read sections 6.2–6.6.",
      wrongFeedback:
        "Match each scenario to its primary risk: invented facts, rights issues, representation/targeting skew, or data mishandling. Re-read sections 6.2–6.6.",
    },
    {
      q: "Your brand uses AI-generated models in e-commerce imagery. What is responsible practice?",
      options: [
        "Never disclose — customers do not care.",
        "Proactive disclosure where a reasonable consumer would care, stakeholder analysis before launch, and policy on synthetic vs authentic imagery aligned with brand values.",
        "Use AI models only for internal presentations.",
        "Wait until regulators mandate disclosure.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Synthetic media requires disclosure, stakeholder analysis, and clear policy. Re-read sections 6.1 and 6.6.",
      wrongFeedback:
        "Transparency and proactive governance for synthetic media protect trust and reduce regulatory exposure. Re-read sections 6.1 and 6.6.",
    },
    {
      q: "Which AI marketing practice best balances environmental responsibility with creative needs?",
      options: [
        "Generate unlimited variants and let performance data sort them out.",
        "Set generation budgets per campaign, prefer efficient models for simple tasks, and use high-compute synthesis only where it replaces more carbon-intensive physical production.",
        "Ban AI entirely for sustainability brands.",
        "Environmental impact of marketing AI is negligible — ignore it.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Purposeful generation and right-sized compute align environmental and creative goals. Re-read section 6.7.",
      wrongFeedback:
        "Variant bloat and indiscriminate high-compute generation waste energy. Right-sized use can reduce impact. Re-read section 6.7.",
    },
  ],
});
