import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter07MktContentOperationsWorkflow = buildChapter({
  slug: "mkt-content-operations-workflow",
  number: 7,
  shortTitle: "Content Operations & Workflow",
  title: "Content Operations & Workflow — Running the AI-Augmented Content Engine",
  readingMinutes: 24,
  summary:
    "AI multiplies content output — but multiplication without operations produces chaos: inconsistent quality, duplicated effort, assets nobody can find, and performance learning that never feeds back. Content operations is the system that connects planning, briefing, production, review, distribution, and archival into a repeatable workflow marketers can scale without hiring proportionally.",
  keyTakeaway:
    "Content ops is not bureaucracy — it is the infrastructure that makes AI productivity real. Standardised briefs, named review stages, quality rubrics, and archived high-performers as training assets turn individual prompting tricks into organisational capability.",
  pmCallout: MKT_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "7.1",
      title: "The Content Operations Model",
      subtitle: "Plan → brief → produce → score → approve → distribute → review — the loop AI accelerates",
      take: "Content operations is the end-to-end system for moving ideas to published assets to performance insights. In the AI era, the model gains speed at the produce stage but loses integrity if brief, score, and review stages are skipped. Mature ops treats AI as one production method within a governed pipeline — not a bypass around the pipeline.",
      why: "Teams that adopt AI tools without ops redesign publish more drafts nobody approves, more assets nobody retrieves, and more campaigns nobody learns from. Ops is the difference between content volume and content capability.",
      paragraphs: [
        [
          s("The content ops loop has seven stages — each with an owner. "),
          x(
            "Plan: editorial calendar aligned to business goals, campaigns, and capacity. Brief: standardised input specifying audience, message, channel, claims, and AI constraints. Produce: human, AI-assisted, or hybrid creation. Score: quality rubric before approval. Approve: tiered review by risk level. Distribute: channel scheduling with tracking. Review: performance analysis feeding next plan cycle.",
            "Skipping brief and score because 'AI is fast' produces fast garbage. The loop is sequential for a reason.",
          ),
          s(" Document the loop in a one-page diagram every new hire sees on day one."),
        ],
        [
          s("Content ops sits between strategy and execution. "),
          x(
            "Strategy says what themes and audiences matter. Ops says how work flows, who approves, where assets live, and how tools connect. Execution — writers, designers, AI — fills the pipeline.",
            "Without ops, strategy becomes slide decks; execution becomes heroics. Ops translates strategy into weekly cadence.",
          ),
          s(" Assign a content ops owner — often a senior content manager or marketing ops lead — even in small teams."),
        ],
        [
          s("Tool stack serves the ops model, not the reverse. "),
          x(
            "Common stack: Notion or Asana for calendar and briefs, Google Docs or Notion for drafts, Bynder or SharePoint for DAM, HubSpot or Contentful for publish, GA4 and platform analytics for review.",
            "AI tools plug into produce stage — ChatGPT, Jasper, Canva, Descript. Integration matters: brief links in task, approved asset lands in DAM with metadata, publish syncs to calendar status.",
          ),
          s(" Audit quarterly: does each tool map to a ops stage, or did you accumulate orphan subscriptions?"),
        ],
      ],
      examples: [
        {
          title: "CoSchedule — editorial calendar as ops hub",
          body: "A mid-size B2B company runs editorial calendar in CoSchedule with mandatory fields: brief link, owner, review stage, DAM asset ID, distribution channels. AI-assisted drafts cannot move to 'ready for review' without brief attached. Campaign retrospectives pull from calendar metadata — which assets were AI-assisted, which reviewer approved. Ops visibility reduced 'where is that blog post?' Slack messages by 70%.",
        },
        {
          title: "Intercom — content ops at product-marketing scale",
          body: "Intercom's content team documents ops in a public handbook: brief template, style guide linkage, three-stage review for product announcements, SLA per content type. AI drafting adopted into stage two — writer edits AI first draft, not blank page. New marketers onboard to ops before tools. Result: consistent ship cadence across product lines without central bottleneck on one editor.",
        },
        {
          title: "Ops bypass — AI free-for-all",
          body: "A 15-person marketing team gave everyone ChatGPT Plus with no brief or review workflow. Output volume tripled; brand voice fractured; legal found unsubstantiated claims in three published assets in one month. Retrofit: mandatory brief in Asana, two-stage review for customer-facing content, AI usage logged in task notes. Volume dropped 40% temporarily; quality incidents went to zero in following quarter.",
        },
      ],
    }, {
      kind: "diagram",
      id: "mkt-cs-ch7-content-ops",
      type: "flow",
      title: "Content Operations Loop",
      caption:
        "Plan on editorial calendar → standardised brief → AI-assisted produce → quality score → approve → distribute → performance review feeding next cycle.",
    }),
    buildSection({
      number: "7.2",
      title: "AI-Era Content Roles",
      subtitle: "Curators, prompt librarians, and strategists — how job shapes shift when AI handles first drafts",
      take: "AI shifts content team roles from pure production to orchestration: strategists define themes and briefs; producers generate and curate AI output; editors enforce voice and claims; ops managers maintain systems and metadata; prompt librarians curate reusable AI inputs. Headcount may not grow, but skill mix changes — hiring and development must reflect this.",
      why: "Teams that hire 'AI prompt writers' without editorial judgment or strategic context recreate volume problems with better tools. Roles must align to the ops pipeline, not to tool features.",
      paragraphs: [
        [
          s("The content strategist role gains importance relative to pure writer capacity. "),
          x(
            "Strategists own pillar themes, audience prioritisation, message hierarchy, and campaign architecture. AI executes variants; strategists ensure variants serve a coherent plan.",
            "In AI-augmented teams, one strategist directing three curators often outperforms five writers without strategy layer.",
          ),
          s(" Evaluate team structure: is someone explicitly accountable for what content exists and why — not just that content ships?"),
        ],
        [
          s("Curator-editor hybrid becomes the default production role. "),
          x(
            "Curators generate AI variants, select best base, edit for voice and accuracy, score against rubric. Editors handle high-risk assets, final compliance pass, and voice calibration across curators.",
            "Job descriptions should say 'curate and refine AI-assisted drafts' — not pretend AI does not exist.",
          ),
          s(" Compensation and career paths for curation work must match its strategic value — or you lose your best editors to burnout."),
        ],
        [
          s("Emerging specialist: prompt librarian or AI ops coordinator. "),
          x(
            "Maintains prompt library, voice and visual prompt templates, tool configurations, and training on approved workflows. Not necessarily full-time at small scale — a 20% role on content ops lead.",
            "Centralised prompt memory prevents knowledge walking out when one power user leaves.",
          ),
          s(" At enterprise scale, marketing ops may own tool administration; content ops owns prompt and brief quality."),
        ],
      ],
      examples: [
        {
          title: "Shopify — content design and systems thinking",
          body: "Shopify's content organisation emphasises systems: reusable content components, documented workflows, and clear ownership. AI tools fit into component population and localisation — not ad hoc doc generation. Role clarity: content designers own structure and patterns; writers curate AI copy within components. Scaling across product surfaces requires systems mindset AI alone does not provide.",
        },
        {
          title: "Prompt librarian pilot — B2B SaaS",
          body: "A 30-person marketing org designated one senior content manager as prompt librarian (15% time). Responsibilities: maintain Notion prompt library, run monthly 'prompt that worked' share, update forbidden phrase lists from audit data, onboard freelancers to approved prompts. Edit time per AI draft dropped 35% in two quarters because prompts improved faster than individual trial-and-error.",
        },
        {
          title: "Role confusion — agency vs in-house",
          body: "A company assumed agency would 'handle AI' while in-house team focused on strategy. Agency used their own tools and prompts without brand voice system. Deliverables required full rewrite. Clarified RACI: in-house owns brief, prompt library, and final approval; agency produces within in-house system. Agency cost per usable asset dropped 50%.",
        },
      ],
    }),
    buildSection({
      number: "7.3",
      title: "The Brief System",
      subtitle: "Standardised inputs that make AI and humans produce on-strategy assets the first time",
      take: "A content brief is the contract between strategy and production: audience, objective, key message, proof points, tone, format, channel, claims boundaries, SEO targets, and AI usage notes. Standardised brief templates in Notion, Asana, or Monday reduce revision cycles because producers — human or AI — start with complete context.",
      why: "Garbage briefs produce garbage drafts regardless of model quality. Brief discipline is the highest-leverage ops investment for AI-augmented teams.",
      paragraphs: [
        [
          s("Every brief answers seven questions before production starts. "),
          x(
            "Who is the audience and what do they believe now? What should they believe or do after? What is the one key message? What proof supports it? What tone and channel constraints apply? What claims are off-limits? What does success look like — metric and format?",
            "AI prompts built from brief fields produce dramatically better first drafts than 'write a blog about X'.",
          ),
          s(" Gate production tasks in project tool — no brief link, no assignment."),
        ],
        [
          s("Brief templates vary by asset type, not one generic form. "),
          x(
            "Blog brief includes SEO keyword, search intent, outline, internal links. Email brief includes segment, subject line angle, CTA, personalisation layer. Social brief includes platform, hook format, character limits, visual requirements.",
            "Attach voice guide excerpt and relevant matrix coordinates for personalised assets.",
          ),
          s(" Store completed briefs with published asset — audit trail for what strategy intended versus what shipped."),
        ],
        [
          s("Brief quality review is a manager function. "),
          x(
            "Weak brief: 'Write thought leadership on AI for CFOs.' Strong brief: 'CFO audience, sceptical of AI hype, key message = ROI measurement framework, proof = customer case study X, 1,200 words, no unsubstantiated ROI multiples, CTA = download ROI calculator.'",
            "Managers who approve briefs in five minutes save hours of revision later. Brief review is not bureaucracy — it is strategy enforcement.",
          ),
          s(" Rejected briefs go back to requester with specific gaps — train the organisation to brief well."),
        ],
      ],
      examples: [
        {
          title: "Atlassian — team playbook briefs",
          body: "Atlassian's marketing team uses playbook-style briefs for major content types: product launch, customer story, technical blog. Each playbook lists required inputs, example briefs, and AI prompt mapping. New writers complete one brief with manager review before solo assignments. Brief quality scores (manager rubric) predict revision rounds with 0.7 correlation — ops invested in brief training, not just writing training.",
        },
        {
          title: "AI prompt auto-fill from brief",
          body: "A content ops team built a Zapier flow: Asana brief fields populate a ChatGPT custom GPT prompt template. Writer clicks generate, receives first draft in brief doc, edits in place. Brief completeness enforced by required fields before Zap fires. First-draft usability rate increased from 40% to 72% because prompts always had full context.",
        },
        {
          title: "Brief-free disaster — press release",
          body: "PR agency received verbal brief 'announce partnership' without claims boundaries. AI-drafted release included partnership revenue projections never approved. Stock-sensitive partner complained. Now all external comms require written brief with legal-approved claims list — AI or human, same gate.",
        },
      ],
    }),
    buildSection({
      number: "7.4",
      title: "Review Workflows",
      subtitle: "Tiered approval, SLAs, and risk-based review that does not bottleneck every tweet",
      take: "Review workflows assign approval stages by content risk: low-risk social post — curator self-publish after rubric; medium-risk blog — editor review; high-risk regulated claim or executive byline — legal and leadership sign-off. AI-generated content does not reduce review requirements — if anything, it increases spot-check discipline because volume rises.",
      why: "One-size review — everything through legal — bottlenecks AI productivity gains. No review — brand and compliance incidents. Tiered workflows match scrutiny to stakes.",
      paragraphs: [
        [
          s("Define three review tiers with clear criteria. "),
          x(
            "Tier one — self-approve after rubric: curated social posts, internal newsletters, minor email variants within approved template. Tier two — peer or editor review: blogs, landing pages, nurture emails with new claims. Tier three — legal/compliance/executive: regulated industries, financial claims, CEO bylines, crisis comms.",
            "Document tier criteria in ops handbook. When in doubt, escalate — but track escalations to refine criteria.",
          ),
          s(" AI-assisted assets follow same tiers as human-written — source does not change risk profile."),
        ],
        [
          s("SLAs per tier keep pipeline moving. "),
          x(
            "Tier one: same-day. Tier two: 48-hour editor turnaround. Tier three: 5 business days legal unless expedite process. Missed SLAs trigger ops escalation — not silent queue death.",
            "Calendar planning accounts for review time. Launch dates set backward from review SLA, not from draft completion.",
          ),
          s(" Track review turnaround and revision rounds — chronic bottlenecks indicate brief quality or tier misclassification."),
        ],
        [
          s("Review tools: comments, track changes, approval status in DAM or CMS. "),
          x(
            "Single source of truth for draft — Google Docs comment mode, Notion review status, Bynder approval workflow, CMS workflow plugin. Avoid review via Slack screenshots — no audit trail.",
            "Version history matters for AI drafts: preserve original AI output and edit diff for prompt improvement.",
          ),
          s(" Published asset metadata: reviewer names, approval date, tier level — for audit and incident investigation."),
        ],
      ],
      examples: [
        {
          title: "Pharma tier-three workflow",
          body: "A pharmaceutical marketing team classifies all patient-facing content as tier three by default. AI drafts MLR submission packages from brief with pre-approved claim library only — free generation prohibited. Review cycle 10–15 business days. AI still saves medical writer time on first draft assembly; ops rigour unchanged. Attempt to 'fast track' AI content without MLR resulted in warning letter — governance non-negotiable.",
        },
        {
          title: "Tiered social — DTC brand",
          body: "DTC skincare brand: tier one for Instagram stories using approved template and curator rubric score ≥4/5; tier two for feed posts with new product claims; tier three for anything mentioning clinical results. 80% of social volume flows tier one. Editor focuses on tier two/three. Publishing cadence increased 2x without adding editors because tier one absorbed volume AI made possible.",
        },
        {
          title: "Slack approval failure",
          body: "Team approved email via Slack emoji reactions without documented reviewer. Unsubstantiated competitor comparison shipped. Post-incident: all tier two+ approvals in Asana with named approver checkbox. Slack for discussion, not approval record.",
        },
      ],
    }),
    buildSection({
      number: "7.5",
      title: "Quality Scoring",
      subtitle: "Rubrics that make 'good enough to publish' objective — for humans and AI output alike",
      take: "A content quality rubric scores assets on defined dimensions before publish: voice match, message clarity, proof strength, CTA effectiveness, factual accuracy, SEO basics, accessibility. Scoring is not optional for tier-one self-approve — it is how organisations trust curators with speed. AI output often scores lower on voice and proof without editing.",
      why: "Without rubrics, review is subjective taste debate. With rubrics, patterns emerge: AI drafts consistently weak on proof → fix brief proof requirements. Rubrics turn quality into ops data.",
      paragraphs: [
        [
          s("Build rubrics with 5–7 dimensions weighted by content type. "),
          x(
            "Blog: strategic alignment 20%, voice 20%, proof 25%, SEO 15%, readability 10%, accuracy 10%. Social: hook 30%, voice 25%, visual 20%, CTA 15%, accuracy 10%.",
            "Each dimension has 1–5 scale with behavioural anchors — what does a 3 vs 5 look like?",
          ),
          s(" Publish rubric in ops handbook with scored examples — calibration session for new reviewers."),
        ],
        [
          s("Minimum publish threshold by tier. "),
          x(
            "Tier one self-approve: no dimension below 3, average ≥4. Tier two editor: average ≥4, no accuracy below 5. Below threshold → revise or regenerate with annotated feedback.",
            "Thresholds are negotiable in ops review quarterly based on incident data and capacity.",
          ),
          s(" Log scores in task or DAM metadata — aggregate monthly for ops dashboard."),
        ],
        [
          s("AI-assisted scoring is triage, not final judgment. "),
          x(
            "Tools can pre-score grammar, readability, SEO basics, brand voice similarity. Flag outliers for human review. Cannot replace human judgment on strategy, cultural nuance, or claim accuracy.",
            "Use AI scoring to route workload — low-risk high-scoring assets fast-track; low scores get senior editor.",
          ),
          s(" If AI pre-score correlates poorly with human rubric, fix the model or stop trusting pre-score."),
        ],
      ],
      examples: [
        {
          title: "Rubric calibration workshop",
          body: "A B2B content team ran 90-minute rubric calibration: six marketers scored same five assets independently, then discussed gaps. Inter-rater reliability improved from 0.55 to 0.82. AI draft average scores documented: voice 3.2, proof 3.8 — informed prompt library investment in voice examples. Quarterly recalibration when new hires join.",
        },
        {
          title: "Clearscope + human rubric — SEO dimension",
          body: "Blog workflow combines Clearscope SEO score (automated dimension) with human rubric for voice and proof. Publish requires Clearscope ≥65 and human average ≥4. AI drafts often hit Clearscope with keyword stuffing — human rubric catches voice failure automated SEO score misses.",
        },
        {
          title: "Rubric bypass — engagement collapse",
          body: "Social team skipped rubric during product launch crunch. Volume target met; average engagement rate dropped 40% versus prior quarter. Post-mortem: hooks weak, CTAs missing on 30% of posts. Rubric reinstated as mandatory gate even during crunch — with realistic volume targets negotiated upfront.",
        },
      ],
    }),
    buildSection({
      number: "7.6",
      title: "Performance Review",
      subtitle: "Closing the loop — what shipped, what worked, and what feeds the next plan cycle",
      take: "Performance review is the ops stage most often skipped: analysing published content against goals, attributing results where possible, and documenting learnings for the next planning cycle. AI multiplies assets — without performance review, you multiply noise without knowing which variants to retire or replicate.",
      why: "Editorial calendars that only plan forward without reviewing backward repeat mistakes and orphan underperforming content types. Performance review is how ops becomes learning system.",
      paragraphs: [
        [
          s("Cadence: weekly pulse, monthly review, quarterly strategic retro. "),
          x(
            "Weekly: top and bottom performers by channel, anomalies flagged. Monthly: campaign-level metrics versus goals, content type performance, AI-assisted vs human-only comparison if tagged. Quarterly: pillar theme ROI, segment performance, ops bottleneck analysis.",
            "Keep reviews action-oriented: three keep, three fix, three kill decisions — not data theatre.",
          ),
          s(" Calendarise reviews with owners — ops lead facilitates, channel owners bring data."),
        ],
        [
          s("Tag assets at publish for analysis granularity. "),
          x(
            "Metadata: content type, pillar theme, segment, AI-assisted (y/n), prompt template ID, reviewer. Enables queries: 'Do AI-assisted blogs underperform on time-on-page?' 'Which segment emails over-index on conversion?'",
            "Tagging discipline at publish is tedious once, invaluable forever.",
          ),
          s(" DAM and CMS metadata fields should mirror analytics dimensions — reduce manual spreadsheet work."),
        ],
        [
          s("Feed learnings into brief templates and prompt library. "),
          x(
            "High-performing blog structures become outline templates. Winning subject line patterns inform AI prompt modifiers. Failed formats retired from calendar defaults.",
            "Performance review without system updates is a meeting that changes nothing.",
          ),
          s(" Document learnings in ops wiki — searchable, not trapped in retro slide deck."),
        ],
      ],
      examples: [
        {
          title: "Monthly content retro — HubSpot style",
          body: "A marketing team runs last-Friday monthly retro: 60 minutes, dashboard pre-circulated. Review top five assets by pipeline influence and bottom five by bounce or unsubscribe. Decision log: retire 'listicle' format for enterprise segment (three months underperformance), double down on customer interview videos (2x conversion vs written case studies). Next month's calendar adjusted before it locks.",
        },
        {
          title: "AI-assisted content performance tag",
          body: "Team tagged 180 assets over two quarters: AI-assisted vs human-primary. Finding: AI-assisted social matched human on engagement; AI-assisted long-form underperformed on average time-on-page until brief required stronger outline section. Prompt and brief update lifted AI blog performance to parity. Without tagging, team might have blamed 'AI' generically.",
        },
        {
          title: "No review loop — repeated failure",
          body: "Company published weekly 'industry news roundup' for a year with declining opens. Nobody reviewed because calendar auto-repeated. Finally audited: format fatigued, no unique POV. Killed format, freed 20% calendar capacity for pillar content. Auto-recurring calendar entries need performance sunset rules.",
        },
      ],
    }),
    buildSection({
      number: "7.7",
      title: "Archive as Training Asset",
      subtitle: "High-performers in your DAM become few-shot examples and RAG corpus for future AI production",
      take: "Your published content archive is a strategic asset: top-performing emails, blogs, ads, and visuals become few-shot examples for prompts, retrieval context for RAG systems, and onboarding material for new team members. Ops must curate the archive — not dump everything ever published into AI context.",
      why: "AI trained or prompted on mediocre historical content reproduces mediocrity. Curated archive of winners encodes organisational quality standards in machine-usable form.",
      paragraphs: [
        [
          s("Curate archive tiers: gold, silver, reference, retired. "),
          x(
            "Gold: top 10% performers by defined metrics — prompt examples, case studies for onboarding. Silver: solid on-brand exemplars by content type. Reference: factual or structural templates. Retired: off-brand, outdated, or low-performer — exclude from AI ingestion.",
            "Quarterly archive review promotes and demotes assets based on performance and brand relevance.",
          ),
          s(" Gold tier requires metadata: why it worked, segment, channel, prompt used if AI-assisted."),
        ],
        [
          s("RAG over content library accelerates on-brand drafting. "),
          x(
            "Connect vector search to DAM or CMS: writer queries 'enterprise cybersecurity case study intro' → retrieves gold-tier examples into AI context. Notion AI, custom GPTs with file upload, or enterprise RAG platforms.",
            "Chunking and tagging determine retrieval quality — ops owns metadata schema.",
          ),
          s(" Legal review RAG corpus for claims currency — retired assets must leave the index."),
        ],
        [
          s("Archive feeds competitive and voice drift audits. "),
          x(
            "Compare new AI drafts against gold tier voice similarity. Declining similarity signals prompt drift or guide outdatedness.",
            "Archive is also compliance evidence: what was published when, with what approvals.",
          ),
          s(" Treat archive curation as ongoing ops duty — not a one-time migration project."),
        ],
      ],
      examples: [
        {
          title: "Gold tier email corpus",
          body: "B2B SaaS team tagged 40 gold-tier emails in HubSpot by segment and campaign type. Custom GPT loads gold examples by segment for nurture drafting. New marketer produced onboarding sequence matching historical top-quartile open rates on first campaign. Maintenance: gold tier reviewed quarterly; two emails demoted after product positioning shift.",
        },
        {
          title: "Bynder + AI retrieval pilot",
          body: "Consumer brand piloted Bynder AI search for visual and copy assets: designers query 'summer campaign lifestyle 2024 high performer' → retrieves approved assets with usage rights metadata. Reduced duplicate photoshoot briefs by 25% because existing gold assets surfaced instead of lost in folder chaos.",
        },
        {
          title: "Garbage corpus lesson",
          body: "Team uploaded entire blog archive (800 posts, varying quality since 2016) into RAG system. AI drafts echoed outdated positioning and weak posts from early years. Rebuilt corpus with 120 curated gold and silver posts only. Draft quality scores improved average 0.8 points on rubric. Curation beats volume for training data.",
        },
      ],
    }),
    buildSection({
      number: "7.8",
      title: "The Marketer Decision Lens — Ops Investment",
      subtitle: "Five checks before you add AI tools, headcount, or channels without ops capacity",
      take: "Before scaling content output: (1) is the seven-stage ops loop documented with owners? (2) are brief templates enforced in project tool? (3) do tiered review SLAs match your risk profile? (4) is quality rubric calibrated and used? (5) does performance review feed archive and prompt updates? Five yes → add volume or tools. Any no → invest in ops before acceleration.",
      why: "AI vendors sell speed; ops delivers sustainable speed. This lens helps marketers justify ops investment to leadership in ROI terms — fewer incidents, faster effective publish time, compounding quality.",
      paragraphs: [
        [
          s("Check one: ops loop visibility. "),
          x(
            "Can you diagram plan-through-review with named owners in 10 minutes? Can a new hire find it? If the loop lives in one person's head, scale will break.",
            "Ops documentation is insurance against key person dependency.",
          ),
          s(" Loop documentation is prerequisite to tool rollout — not follow-up documentation."),
        ],
        [
          s("Checks two and three: brief gate and review tiers. "),
          x(
            "Production tasks require brief link. Review tiers and SLAs are published; team knows which tier applies. Legal and leadership bought into tier criteria for regulated content.",
            "Adding AI without brief gate multiplies unstructured output.",
          ),
          s(" If review is the bottleneck, fix brief quality and tier classification before hiring more reviewers."),
        ],
        [
          s("Checks four and five: rubric discipline and learning loop. "),
          x(
            "Rubric used on sampled assets monthly — scores tracked. Performance review calendarised; last retro produced documented changes to briefs, prompts, or calendar.",
            "Ops without learning loop is process theatre.",
          ),
          s(" Present ops health metrics quarterly to leadership: revision rounds, review SLA hit rate, rubric averages, gold archive growth."),
        ],
      ],
      examples: [
        {
          title: "Ops investment business case",
          body: "Content ops lead built business case: mandatory briefs reduced average revision rounds from 2.8 to 1.4; tiered review cut average publish time 3 days despite 50% more assets. Hired half-time ops coordinator funded from avoided agency rework costs. Leadership approved because metrics were operational, not ideological.",
        },
        {
          title: "Tool moratorium until ops ready",
          body: "CMO paused new AI tool purchases for one quarter while team implemented brief gates, rubric, and DAM tagging. Existing ChatGPT and Canva usage continued within new workflow. Post-quarter: safe to add Jasper for variant production because outputs had somewhere to go — brief, review, DAM — not into Slack chaos.",
        },
        {
          title: "Five-check failure — international expansion",
          body: "Brand launched localised content in four markets without ops loop extension. Translations piled in shared drive; no local reviewers; AI translation without glossary produced off-brand and occasionally offensive copy in one market. Retrofit: locale brief templates, native reviewer tiers, gold archive per market. Five-check upfront would have delayed launch two weeks, saved two months remediation.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Your team adopts ChatGPT for drafting. Publishing volume triples but brand voice fractures. What is the most likely missing ops element?",
      options: [
        "A more expensive AI model.",
        "Standardised briefs, tiered review, and quality rubrics governing AI output through the same pipeline as human content.",
        "More writers to fix AI copy.",
        "Banning AI entirely.",
      ],
      correct: 1,
      correctFeedback:
        "Right. AI accelerates produce stage; brief, score, and review stages prevent chaos. Re-read sections 7.1 and 7.4.",
      wrongFeedback:
        "Volume without ops governance produces inconsistency. Briefs, review tiers, and rubrics are the fix. Re-read sections 7.1 and 7.4.",
    },
    {
      q: "Which content should typically be tier-one self-approve after rubric scoring?",
      options: [
        "CEO byline on earnings implications.",
        "Curated social post using approved template with rubric average ≥4 and no new product claims.",
        "Patient-facing medical content.",
        "First blog post from a new freelancer.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Low-risk templated social within rubric threshold fits tier one. Re-read section 7.4.",
      wrongFeedback:
        "Tier one is low-risk, templated content with rubric gate — not executive bylines or regulated claims. Re-read section 7.4.",
    },
    {
      kind: "order",
      q: "Order the content operations loop from first stage to last.",
      prompt: "Drag to arrange from first (top) to last (bottom).",
      items: [
        "Plan on editorial calendar aligned to goals",
        "Brief with standardised template and complete context",
        "Produce with AI-assisted or human creation",
        "Score, approve, distribute, and performance review",
      ],
      correctFeedback:
        "Right. Plan → brief → produce → score/approve/distribute/review. Skipping brief or review breaks the loop. Re-read sections 7.1–7.6.",
      wrongFeedback:
        "Start with plan and brief before production. Score, approve, distribute, and review close the loop. Re-read sections 7.1–7.6.",
    },
    {
      kind: "categorize",
      q: "Sort each practice into the correct content ops component.",
      categories: ["Brief system", "Review workflow", "Quality scoring", "Archive & learning"],
      items: [
        { text: "Required Asana fields before draft assignment fires.", category: 0 },
        { text: "48-hour SLA for tier-two editor review.", category: 1 },
        { text: "Voice dimension weighted 20% on blog rubric.", category: 2 },
        { text: "Gold-tier emails tagged for few-shot prompt examples.", category: 3 },
        { text: "Asset type-specific brief templates for email vs blog.", category: 0 },
        { text: "Monthly retro promoting top performers to gold archive.", category: 3 },
      ],
      correctFeedback:
        "Right. Briefs input production; review gates publish; rubrics objectify quality; archive compounds learning. Re-read sections 7.3–7.7.",
      wrongFeedback:
        "Match each practice: brief (input), review (approval), scoring (quality), archive (learning). Re-read sections 7.3–7.7.",
    },
    {
      q: "Team uploaded entire 800-post blog archive into RAG. AI drafts echo outdated positioning. Best fix?",
      options: [
        "Add more posts to the corpus.",
        "Curate gold and silver tier archive with performance metadata; exclude retired and off-brand content from RAG ingestion.",
        "Stop using RAG entirely.",
        "Only use AI for social media.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Curated archive beats volume for AI training and retrieval. Re-read section 7.7.",
      wrongFeedback:
        "RAG quality depends on curated corpus — not everything ever published. Re-read section 7.7.",
    },
    {
      q: "Leadership wants 2x content output with same team. Best ops negotiation?",
      options: [
        "Skip rubrics and review to hit volume.",
        "Invest in brief templates, tier-one rubric self-approve for templated assets, and AI drafting from complete briefs — measure time-to-publishable, not raw drafts.",
        "Hire freelancers without brief access.",
        "Add three more AI tools.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Ops efficiency — better briefs, tiered review, rubric-gated self-approve — unlocks sustainable 2x. Re-read sections 7.3 and 7.8.",
      wrongFeedback:
        "Sustainable scale needs brief discipline and tiered governance — not skipped review. Re-read sections 7.3 and 7.8.",
    },
  ],
});
