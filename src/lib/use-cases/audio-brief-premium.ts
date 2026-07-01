/** Editorial-grade synopsis scripts — Option B flagship chapters and playbook overviews. */

export type PremiumSynopsis = {
  transcript: string;
  tier: "editorial";
};

function paragraphs(...parts: string[]): string {
  return parts.map((p) => p.trim()).filter(Boolean).join("\n\n");
}

/** Key: `playbookSlug/chapterSlug` */
export const PREMIUM_CHAPTER_SYNOPSES: Record<string, PremiumSynopsis> = {
  "servicenow-ai/ch01-mental-model": {
    tier: "editorial",
    transcript: paragraphs(
      `Most ServiceNow teams still treat AI like a feature checkbox: turn on Now Assist, demo Virtual Agent, report deflection, and wonder why nothing sticks. Chapter one of ServiceNow AI Decoded exists to break that habit. It is not a product tour. It is the mental model that separates people who configure toggles from people who architect systems that survive production, audits, and executive scrutiny.`,
      `The chapter's central argument is that ServiceNow AI is a fabric, not a plugin. Rules enforce policy. Predictive Intelligence routes and classifies work. AI Search retrieves grounded knowledge. Now Assist drafts and articulates language. Flow Designer orchestrates hand-offs. Agents act within guardrails on real records. When you internalize how those layers depend on each other, every later chapter — Now Assist deep dives, agent design, PDI labs, governance — stops feeling like unrelated product launches and starts feeling like deliberate choices.`,
      `You begin by reframing what ServiceNow AI actually is: intelligence woven through the same system of record your organisation already runs on, not a chatbot bolted onto ITSM. That distinction matters in interviews and in architecture reviews. Feature thinking asks what you enabled. Platform thinking asks where work enters, what data the model sees, who approves actions, and how you measure outcomes without breaking trust.`,
      `The chapter then maps the ecosystem so you stop picking capabilities from press releases. Need to classify and route? Predictive Intelligence plus Flow. Need language and judgment on a record? Now Assist with grounded retrieval. Need conversational deflection? Virtual Agent with AI Search behind it. Need autonomous multi-step execution? Agents — but only after data and process planes are sound. Most production stacks use three or four layers, not one magic SKU.`,
      `A second thread clarifies AI versus traditional automation — when deterministic rules are the right tool, when machine learning earns its place, and why generative AI changed the cost curve of language-heavy work without removing the need for workflow discipline. The GenAI shift is not replace ML; it is add articulation and reasoning on top of structured process, with ACLs and audit trails intact.`,
      `You will see this illustrated through architecture drawings in the full article — the AI fabric across data, process, and intelligence planes, and the ecosystem map that architects sketch from memory in stakeholder meetings. The case material shows what happens when teams enable a single feature versus embed AI in the path of work: one side gets a side-panel demo, the other gets measurable handle-time reduction because AI reads platform data and logs evidence on the record.`,
      `If you are preparing for a ServiceNow AI role, a production rollout, or your first governed POC on PDI, this chapter is the benchmark. If you already configure skills but cannot explain why hallucinations spike when CMDB quality drops, you are who this was written for.`,
      `Listen here for the story and the through-line. Open the full chapter — about ninety-five minutes with diagrams, workflows, and artifacts — when you are ready to implement and copy the reference models into your instance.`,
    ),
  },

  "claude-full-stack/ch01-mental-model": {
    tier: "editorial",
    transcript: paragraphs(
      `Chapter one of Claude in Production is the chapter most people skip because the interface looks obvious. That is the mistake. Before prompts, MCP, or Claude Code, you need a precise mental model of what Claude is, what it is not, and where it sits in Anthropic's product line. Without that, you over-trust outputs, pick the wrong surface for the job, and build fragile workflows that break the moment context fills or policy shifts.`,
      `Claude is a stateless, probabilistic reasoning engine with a finite context window, living inside a growing ecosystem of products. Stateless means it does not remember Tuesday unless you engineer memory. Probabilistic means the same prompt can yield different valid answers. Finite context means everything you include competes for space — instructions, files, history, tool results. Ecosystem means Claude dot ai, the API, Claude Code, connectors, and enterprise controls are related but not interchangeable.`,
      `The chapter walks you through how an answer is actually produced — not lookup, but prediction. Your prompt is assembled with system instructions, history, and tools; the model samples plausible continuations until the response completes. That single mechanism explains refusals, variability, and why just adding more instructions eventually fails. Power users design context, they do not merely type harder.`,
      `You then map the Claude stack the way a technical lead would draw it on a whiteboard: browser chat for exploration and drafting, API for products you ship, Claude Code for software delivery in the terminal, office integrations for document workflows, and MCP when Claude must reach systems of record. Picking surface by job — not by habit — is the difference between a demo and an operating model.`,
      `Platform capabilities come next: models and tiers, projects and artifacts, extended thinking where appropriate, file and image input, and the policy layer that shapes what can run in your organisation. The chapter stresses that features are useless without architecture literacy — knowing what persists, what is ephemeral, and what you must log for compliance.`,
      `Practitioners leave this chapter able to explain why a workflow belongs in the API versus chat, why context design beats prompt hacks, and why the same question can succeed in Claude Code and fail in a bare chat window. The full article adds diagrams of the reasoning loop and ecosystem map, plus artifacts you can reuse in team onboarding.`,
      `If you are building with Claude in production, leading adoption, or tired of mystery refusals and the AI forgot, start here. Listen for the mental model; read the chapter — about seventy-five minutes — when you want the visuals and copy-paste templates that make the model stick for your team.`,
    ),
  },

  "cowork-coo/ch01-understanding-cowork": {
    tier: "editorial",
    transcript: paragraphs(
      `Cowork Beyond Chat opens with a distinction operators feel in their calendar but rarely name: Claude dot ai is where you think; Cowork is where repeatable work runs. Chapter one makes that distinction operational — not marketing — so everything later in the playbook (Skills, schedules, MCP connectors, production gates) lands in the right mental slot.`,
      `Cowork is Claude wired to your filesystem, your calendar, and your standard operating procedures. It can execute file-and-task pipelines while you are offline, but only if you did the hard work of defining what done looks like. If you cannot write the SOP, Cowork cannot run it reliably. That COO mental model — automation manager executing checklists, not chatbot you persuade — is the spine of the chapter.`,
      `You learn where Cowork sits relative to Claude dot ai, Claude Code, and the API. Chat explores and drafts. Code ships software. The API embeds Claude in your product. Cowork moves files, applies templates, follows schedules, and leaves an audit trail across desktop operations. Choosing by who acts and what persists prevents the common failure mode of forcing chat-shaped workflows onto batch work.`,
      `The interface map is the second pillar: dashboard for visibility, builder for workflow design, Skills for packaged expertise, schedules for autonomous runs, history for forensic review, billing for token reality. Operators who master those surfaces stop re-running Sunday night folder chores manually; they promote a workflow once and let the schedule carry it.`,
      `The chapter also frames trust and scope — what Cowork should touch, how to bound filesystem access, and why almost automated workflows erode confidence faster than manual work. You see stack diagrams in the full article that teams use in onboarding: where Cowork fits, which layers handle triggers, transforms, and outputs.`,
      `This is the chapter for chiefs of staff, founders, and operators who already know their Monday morning by heart and want that morning to run without them at the keyboard. If you need ideation and narrative drafting, stay in Claude dot ai. If you need the same file pipeline every week with evidence it completed, Cowork is the surface.`,
      `Listen here for the operating model. Open the full chapter — about one hundred minutes with walkthroughs and setup artifacts — when you are ready to document your first workflow and promote it from sandbox to schedule.`,
    ),
  },
};

/** Key: `playbookSlug` */
export const PREMIUM_PLAYBOOK_OVERVIEWS: Record<string, PremiumSynopsis> = {
  "servicenow-ai": {
    tier: "editorial",
    transcript: paragraphs(
      `ServiceNow AI Decoded is a practitioner playbook for people who must make Now Assist, agents, search, and enterprise architecture hold up beyond a demo. It is built for admins, developers, architects, and candidates who are tired of feature scatter — enabling SKUs without a fabric story, or shipping POCs that cannot pass security review.`,
      `The arc moves from mental model to flagship capabilities — Now Assist, AI Search, Predictive Intelligence, agents, Virtual Agent, process automation, LLM integration — then into architecture, security, deployment, and career mastery. Ten chapters, each a standalone article, roughly eighteen hours if you read cover to cover. You do not have to. Jump to the chapter that matches your phase: learning, configuring, architecting, or interviewing.`,
      `Chapter one is non-negotiable if ServiceNow AI still feels like a bag of unrelated launches. Mid-playbook chapters serve builders activating skills and designing workflows. Later chapters serve leads writing governance, sizing performance, and presenting to stakeholders who will ask about data residency and rollback.`,
      `Every chapter includes an audio synopsis like this one — the story and through-line before you commit to a long read — plus diagrams, workflows, and copy-paste artifacts in the article. Start with chapter one if you are new. Start with architecture if you are deploying to production. Use audio to orient; use the text to implement.`,
    ),
  },

  "claude-full-stack": {
    tier: "editorial",
    transcript: paragraphs(
      `Claude in Production is for builders and operators who want Claude beyond a chat window — MCP connections, Claude Code, Agent Skills, memory design, and workflows that survive Tuesday. Ten chapters trace one arc from mental model to shipping, rather than scattered blog posts that never connect API choices to desktop habits.`,
      `You will move from how Claude actually reasons, through plans and interfaces, prompting and context, projects, MCP, Claude Code, production patterns, and power-user discipline. Each chapter stands alone, but the sequence mirrors how teams adopt: understand the engine, then wire it into systems, then harden for production.`,
      `About fifteen hours of reading if you go end to end. Most readers jump to the bottleneck — MCP if integrations stall, Claude Code if engineering velocity is the goal, production workflows if governance is the blocker. Chapter one remains the foundation if variability, refusals, or wrong surface for the job still cost you time.`,
      `Use chapter audio synopses to hear the argument before the deep read. Use the articles for diagrams, artifacts, and step-by-step implementation. This playbook assumes you will ship, not merely experiment.`,
    ),
  },

  "cowork-coo": {
    tier: "editorial",
    transcript: paragraphs(
      `Cowork Beyond Chat teaches scheduled, filesystem-aware automation for operators — chiefs of staff, founders, and teams who repeat the same weekly file and task pipelines. Seven chapters move from the COO mental model through Skills and the TAR framework, scheduling, MCP-connected automation, production operations, workflow blueprints, and power-user surfaces.`,
      `The promise is not smarter chat. It is Monday morning running without you at the keyboard — with schedules, audit history, and gates that make autonomous runs trustworthy. Twenty-four workflow blueprints in the playbook give concrete patterns; the chapters teach how to adapt them without breaking scope or billing discipline.`,
      `Read chapter one if Cowork still feels like Claude with folders. Jump to scheduling or MCP when you have a workflow sketched but cannot make it reliable overnight. Jump to production operations when sandbox success needs promotion criteria your team can defend.`,
      `Each chapter offers an audio synopsis for orientation and a long-form article for builder walkthroughs. Listen to choose your entry point; read to document SOPs and promote workflows from experiment to schedule.`,
    ),
  },
};

export function getPremiumChapterSynopsis(
  playbookSlug: string,
  chapterSlug: string,
): PremiumSynopsis | undefined {
  return PREMIUM_CHAPTER_SYNOPSES[`${playbookSlug}/${chapterSlug}`];
}

export function getPremiumPlaybookOverview(playbookSlug: string): PremiumSynopsis | undefined {
  return PREMIUM_PLAYBOOK_OVERVIEWS[playbookSlug];
}

export function splitSynopsisParagraphs(transcript: string): string[] {
  return transcript
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
}
