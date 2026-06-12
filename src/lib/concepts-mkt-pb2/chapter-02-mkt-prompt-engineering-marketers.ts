import { buildChapter, buildSection, s, x, MKT_CALLOUT, sectionWithDiagram } from "../concepts-mkt-helpers";

export const chapter02MktPromptEngineeringMarketers = buildChapter({
  slug: "mkt-prompt-engineering-marketers",
  number: 2,
  shortTitle: "Prompt Engineering",
  title: "Prompt Engineering for Marketers",
  readingMinutes: 22,
  summary:
    "A practical system for designing prompts that consistently produce useful marketing drafts, audience variants, and testable campaign assets.",
  keyTakeaway:
    "Good prompts are structured briefs in miniature: role, objective, audience, constraints, references, and output format. Prompt quality determines content quality.",
  pmCallout: MKT_CALLOUT,
  sections: [
    buildSection({
      number: "2.1",
      title: "Prompt Anatomy for Marketers",
      subtitle: "The input discipline behind reliable AI copy",
      take: "Prompt engineering is less about tricks and more about disciplined context design. The model performs to the quality of strategic input it receives.",
      why: "Teams blaming AI quality often have weak prompts with missing audience, positioning, or channel constraints.",
      paragraphs: [
[
          s("A prompt is a compressed brief, not a magic sentence. "),
          x(
            "When marketers specify business goal, persona context, offer framing, and required format, output quality becomes predictable and reusable across campaigns.",
            "Loose prompts create fluent but generic copy that underperforms in competitive categories.",
          ),
          s(" Prompt skill is now a core marketing execution competency."),
        ],

        [

          s("The operational implication is to treat prompt anatomy as pre-production quality control, not copy cleanup after generation. "),

          x(

            "Require operators to lock role, goal, audience tension, and output format before first run so every draft starts from strategy instead of guesswork.",

            "When anatomy fields are complete up front, output variance drops and teams spend less time repairing avoidable briefing gaps.",

          ),

          s("Prompt discipline upstream creates stronger copy with fewer revision cycles."),

        ],

        [

          s("The operational implication is to enforce an intake gate that blocks generation when strategic fields are incomplete. "),

          x(

            "If audience problem, offer angle, and objection context are missing, the prompt should return for revision instead of producing another generic draft.",

            "A hard gate makes prompt quality auditable and gives editors cleaner evidence about whether performance issues come from inputs or model behavior.",

          ),

          s("Gated intake converts prompting from artful improvisation into reliable execution."),

        ],

      ],
      examples: [
        { title: "Webinar campaign uplift", body: "Adding ICP pain points and desired objection handling to prompts improved webinar registration rate because copy addressed real buyer concerns." },
        { title: "Newsletter quality stabilises", body: "A team moved from ad hoc prompts to templates including voice constraints and CTA logic; open and click variance reduced across sends." },
        { title: "Agency handoff improves", body: "Prompt structure became part of client documentation, allowing junior staff to produce stronger first drafts with less senior rework." },
      ],
    }),
    buildSection({
      number: "2.2",
      title: "Six Prompt Components",
      subtitle: "Role, goal, audience, context, constraints, format",
      take: "A high-performing marketing prompt includes six components: role, objective, target audience, context assets, hard constraints, and output structure.",
      why: "Without a shared anatomy, teams cannot audit or improve prompt performance over time.",
      paragraphs: [
[
          s("Prompt anatomy creates repeatability. "),
          x(
            "The same campaign can produce dozens of assets; standard components ensure each output reflects strategy rather than random model behavior.",
            "Constraint fields are especially valuable because they prevent overclaiming, brand drift, and format mismatch.",
          ),
          s(" Consistency in anatomy is what makes prompts scalable team assets."),
        ],

        [

          s("The operational implication is to score each of the six components before prompts are approved for production use. "),

          x(

            "A missing role or vague constraint should reduce the score and trigger correction because those gaps predict weak drafts and expensive rewrites.",

            "Component scoring gives teams a common language for improving prompt quality over time instead of relying on personal intuition.",

          ),

          s("Scored anatomy turns prompt improvement into an evidence-based practice."),

        ],

        [

          s("Six Prompt Components become actionable when each component has a clear pass/fail check before use. "),

          x(

            "For example, objective must map to one measurable outcome, audience must include awareness stage, and constraints must define prohibited claims and tone boundaries.",

            "These checks reduce prompt variance across contributors and make post-campaign prompt reviews far more useful.",

          ),

          s("Consistent component quality leads directly to stronger first drafts."),

        ],

      ],
      examples: [
        { title: "LinkedIn ad template", body: "Adding a fixed output schema (hook, proof, CTA) increased testing speed because every variant arrived in media-buyer-ready format." },
        { title: "Product launch sequence", body: "Role plus audience context generated better prelaunch emails than generic prompts, reducing rewrite time for PMM and lifecycle teams." },
        { title: "SEO brief assist", body: "Prompts that included SERP intent and competing angle produced richer outlines and fewer keyword-stuffed sections." },
      ],
    }),
    sectionWithDiagram(
      {
        number: "2.3",
        title: "Brand Voice Prompting",
        subtitle: "From one-off prompts to reusable systems",
        take: "Marketers should build prompt libraries by use case and channel, each with versioning, owner, and expected output examples.",
        why: "Prompt libraries reduce reinvention and make campaign execution less dependent on individual operators.",
        paragraphs: [
[
            s("Templates convert individual skill into team capability. "),
            x(
              "Instead of writing fresh prompts each time, teams maintain tested blocks for launch emails, paid ads, nurture sequences, blog outlines, and sales enablement content.",
              "Versioning lets teams learn what prompt changes correlate with better campaign outcomes.",
            ),
            s(" A library approach turns prompting into an optimisation program."),
          ],

          [

            s("The operational implication is to store voice instructions as versioned modules that can be inserted consistently into every prompt template. "),

            x(

              "Reusable voice modules should include preferred vocabulary, disallowed phrasing, and sample lines so channel teams can adapt format without losing identity.",

              "Version history then shows which voice settings improve acceptance rates and which ones increase editorial churn.",

            ),

            s("Modular voice controls keep brand character stable while teams scale output."),

          ],

          [

            s("Brand Voice Prompting scales when voice controls are embedded as reusable prompt blocks rather than optional notes. "),

            x(

              "Each template should include approved vocabulary, banned phrasing, and two or three exemplar lines so models can reproduce tone consistently across channels.",

              "Versioning those blocks lets teams test voice adjustments without rewriting complete prompts for every campaign.",

            ),

            s("This protects brand identity while keeping production flow fast."),

          ],

        ],
        examples: [
          { title: "Growth team prompt repo", body: "A startup stored prompts by funnel stage with expected KPI targets. New hires shipped campaigns faster with fewer quality errors." },
          { title: "Regional localisation stack", body: "A global team kept localised prompt versions per market, preserving global message while adapting language nuance." },
          { title: "Agency account continuity", body: "When team members changed, prompt library ownership preserved campaign quality and reduced client-side volatility." },
        ],
      },
      {
        kind: "diagram",
        id: "mkt-pb2-ch2-library",
        type: "flow",
        title: "Prompt Library Lifecycle",
        caption: "Create, test, version, and retire prompts like campaign assets.",
      },
    ),
    buildSection({
      number: "2.4",
      title: "Few-Shot Prompting",
      subtitle: "One offer, many buyer realities",
      take: "Strong prompts encode segment-specific language, goals, objections, and desired outcomes so one core message can be adapted without losing strategy.",
      why: "Generic copy fails because it speaks to everyone and convinces no one.",
      paragraphs: [
[
          s("Segmentation inputs should be explicit in prompts, not implied. "),
          x(
            "Specify job role, urgency level, buying context, and proof type expected by each segment. This produces variants that feel purpose-built instead of lightly reworded.",
            "The more concrete the segment context, the higher the persuasive quality of generated copy.",
          ),
          s(" Segment-aware prompting improves both relevance and conversion quality."),
        ],

        [

          s("The operational implication is to curate few-shot examples by buying context, not by superficial tone variation. "),

          x(

            "Examples should demonstrate real tradeoff differences across segments, such as budget sensitivity versus implementation risk, so the model learns persuasive contrast.",

            "Context-rich few-shot sets produce variants that feel strategically targeted rather than lightly paraphrased for personalization theater.",

          ),

          s("Well-chosen examples are what make segmented prompting commercially useful."),

        ],

        [

          s("Few-Shot Prompting performs best when examples represent real segment differences, not cosmetic rewrites. "),

          x(

            "Include contrastive examples for personas with different priorities, such as cost control versus speed to value, so output reflects true buying context.",

            "When examples are strategic, models produce variants that feel genuinely targeted instead of mechanically personalized.",

          ),

          s("That improves relevance without fragmenting the core offer narrative."),

        ],

      ],
      examples: [
        { title: "CFO vs RevOps messaging", body: "A pipeline platform generated separate ad sets for financial control and sales productivity. Segment-specific framing improved qualified demo conversion." },
        { title: "SMB vs enterprise nurture", body: "Prompts reflected buying cycle differences, producing faster-call-to-action copy for SMB and deeper risk-oriented messaging for enterprise." },
        { title: "Persona-level webinar invites", body: "Tailored prompts for practitioner and leader audiences increased registration quality and reduced no-show rates." },
      ],
    }),
    sectionWithDiagram(
      {
        number: "2.5",
        title: "Prompt Templates for Repeatability",
        subtitle: "Guardrails that prevent risky output",
        take: "Constraint-based prompts define prohibited claims, tone boundaries, legal disclaimers, and source requirements so generated content stays safe and publishable.",
        why: "Unchecked AI drafts can introduce legal risk and brand inconsistency at scale.",
        paragraphs: [
[
            s("Constraints should be treated as mandatory system rules. "),
            x(
              "Include explicit do-not-say statements, approved terminology, and requirements for evidence-backed claims. The model then operates within acceptable business boundaries.",
              "This is especially important in finance, health, and regulated B2B categories where wording precision matters.",
            ),
            s(" Constraint prompting reduces downstream legal and editorial correction costs."),
          ],

          [

            s("Prompt Templates for Repeatability should feed directly into your incident playbook, escalation matrix, and legal-review triggers. "),

            x(

              "Constraint-based prompts define prohibited claims, tone boundaries, legal disclaimers, and source requirements so generated content stays safe and publishable.",

              "Unchecked AI drafts can introduce legal risk and brand inconsistency at scale.",

            ),

            s("Treating this as operating policy, not editorial preference, is what protects long-term brand equity."),

          ],

          [

          s("Prompt Templates for Repeatability should include a hard safety block that runs before any draft is approved. "),

            x(

            "That block should require source-backed facts, approved legal disclaimers, and explicit rejection of unsupported superlatives or guarantee language.",

            "By standardizing these checks inside the template, teams prevent avoidable compliance escalations while still moving quickly.",

            ),

          s("Safety-by-default templates reduce both risk and rework."),

          ],

        ],
        examples: [
          { title: "Fintech legal escalation drops", body: "Adding prohibited-claim constraints reduced legal rewrites on campaign copy and sped compliance approvals." },
          { title: "Healthcare content safer first drafts", body: "Prompt rules requiring uncertainty language and source references prevented overconfident treatment claims." },
          { title: "Enterprise SaaS tone consistency", body: "Brand do/don't constraints kept messaging aligned across product, lifecycle, and paid channels." },
        ],
      },
      {
        kind: "diagram",
        id: "mkt-pb2-ch2-constraints",
        type: "comparison",
        title: "Open Prompt vs Constrained Prompt",
        caption: "Constraints trade minor creative range for major quality and risk control.",
      },
    ),
    buildSection({
      number: "2.6",
      title: "Iterative Prompting Loops",
      subtitle: "How to get from acceptable to high-performing copy",
      take: "High-performing prompts are improved through iterative cycles: generate, critique, refine constraints, regenerate, and compare against campaign outcomes.",
      why: "Single-shot prompting rarely produces strategic-grade output for competitive markets.",
      paragraphs: [
[
          s("Prompting should behave like creative testing, not one-and-done drafting. "),
          x(
            "Teams can ask models to self-critique for clarity, objection handling, and CTA strength before final human review. This lifts draft quality before editor time is used.",
            "Over time, refinement patterns become reusable and shorten the path to publish-ready content.",
          ),
          s(" Iteration is where prompt engineering produces compound returns."),
        ],

        [

          s("The operational implication is to run prompt loops with one optimization target per cycle and record the resulting lift. "),

          x(

            "Separate passes for clarity, objection handling, and CTA force make it easier to see which adjustment created measurable improvement.",

            "Logged loop outcomes help teams reuse winning refinements instead of restarting from scratch on every campaign.",

          ),

          s("Focused iteration compounds prompt performance and shortens time to publish-ready copy."),

        ],

        [

          s("Iterative Prompting Loops generate the most value when each revision round has a specific optimization objective. "),

          x(

            "One round can target clarity, another objection handling, and another CTA strength, with each change logged so teams learn which edits improved outcomes.",

            "This keeps iteration focused on business impact rather than endless stylistic tinkering.",

          ),

          s("Deliberate loop design compounds prompt quality over time."),

        ],

      ],
      examples: [
        { title: "Email CTR improvement loop", body: "A lifecycle team ran two refinement cycles per campaign and saw stronger subject-line and CTA performance over six weeks." },
        { title: "Landing page objection handling", body: "Prompt critique mode identified missing proof points; revised drafts addressed trust concerns and improved form conversion." },
        { title: "Agency QA speed gain", body: "Self-critique prompts reduced senior editor intervention time because structural weaknesses were fixed earlier." },
      ],
    }),
    buildSection({
      number: "2.7",
      title: "Prompt Library System",
      subtitle: "Evaluating prompts as marketing assets",
      take: "Prompt performance should be measured by first-pass acceptance, edit intensity, output quality score, and downstream campaign outcomes tied to each template version.",
      why: "Without measurement, prompt libraries become cluttered and teams repeat ineffective patterns.",
      paragraphs: [
[
          s("Treat prompts like reusable growth assets with owners and KPIs. "),
          x(
            "Track which prompt versions produce the strongest conversion outcomes by channel and audience. Archive low performers and document why improvements worked.",
            "This transforms prompting from tactical experimentation into an institutional capability.",
          ),
          s(" A measured prompt system becomes a durable execution advantage."),
        ],

        [

          s("The operational implication is to govern the library with entry, review, and retirement rules tied to performance thresholds. "),

          x(

            "A template should only stay active when it meets acceptance-rate and outcome benchmarks for its intended use case.",

            "Governance keeps the library compact, trustworthy, and easier for new operators to use without inheriting low-performing legacy prompts.",

          ),

          s("A governed library transforms prompting from scattered tactics into durable team infrastructure."),

        ],

        [

          s("Prompt Library System maturity depends on governance rules for adding, versioning, and retiring templates. "),

          x(

            "Require every template to have an owner, a target use case, and a measurable success threshold so low-performing prompts are identified quickly.",

            "A governed library stays concise, trusted, and easier for new contributors to use effectively.",

          ),

          s("Governance is what turns a prompt collection into a strategic asset."),

        ],

      ],
      examples: [
        { title: "Template retirement policy", body: "A team retired prompt versions that repeatedly required heavy rewrites, improving average draft quality and production speed." },
        { title: "Prompt-to-pipeline dashboard", body: "Campaign analytics were tagged by prompt template, revealing which structures drove the best SQL yield." },
        { title: "Cross-team benchmark sharing", body: "Product marketing and demand gen compared prompt metrics quarterly and adopted each other's best-performing frameworks." },
      ],
    }),
  ],
  quiz: [
    {
      q: "Which prompt component most directly prevents risky claims in regulated categories?",
      options: ["Longer outputs", "Constraint rules and prohibited language", "More adjectives", "Fewer audience details"],
      correct: 1,
      correctFeedback: "Correct. Explicit constraints are the main control layer for safety and compliance.",
      wrongFeedback: "Regulated use cases need clear constraints and prohibited-claim guidance inside prompts.",
    },
    {
      q: "Why maintain a versioned prompt library?",
      options: [
        "To store unused experiments only",
        "To avoid all human editing",
        "To scale repeatable quality and learn from prompt-performance data",
        "To generate longer copy automatically",
      ],
      correct: 2,
      correctFeedback: "Right. Versioned libraries turn one-off prompting into a measurable team capability.",
      wrongFeedback: "Library versioning helps teams reuse what works and improve with evidence.",
    },
    {
      q: "What is the most reliable path to stronger AI drafts?",
      options: [
        "Single-shot prompting",
        "Iterative generation and refinement with review",
        "Removing audience context",
        "Using one universal prompt for every channel",
      ],
      correct: 1,
      correctFeedback: "Exactly. Iterative prompting consistently outperforms single-shot workflows.",
      wrongFeedback: "Iterative loops usually produce stronger, more campaign-ready outputs.",
    },
  ],
});
