import {
  buildChapter,
  buildSection,
  s,
  x,
  MKT_CALLOUT,
  sectionWithDiagram,
} from "../concepts-mkt-helpers";

export const chapter01MktAiRestructuringSearch = buildChapter({
  slug: "mkt-ai-restructuring-search",
  number: 1,
  shortTitle: "AI Restructuring Search",
  title: "How AI Is Restructuring Search Behavior and Marketing Strategy",
  readingMinutes: 21,
  summary:
    "Search is moving from link lists to answer surfaces. This chapter helps marketers understand how AI search changes user journeys, content economics, and channel strategy.",
  keyTakeaway:
    "AI search compresses discovery and decision stages. Winning teams optimize for answer inclusion, source trust, and conversion pathways beyond traditional blue-link clicks.",
  pmCallout: MKT_CALLOUT,
  sections: [
    buildSection({
      number: "1.1",
      title: "AI Overviews and the New SERP Reality",
      subtitle: "Why answer-first discovery now dominates informational intent",
      take: "AI Overviews move value from pure rankings to answer inclusion, because users now consume synthesized guidance before they choose which source to open.",
      why: "If teams only track rank and clicks, they miss where perception and shortlist formation are increasingly happening.",
      paragraphs: [
        [
          s(
            "AI Overviews change the default user behavior from link exploration to answer validation. ",
          ),
          x(
            "Instead of opening five results to build context, users now receive a pre-assembled summary that narrows their next action to one or two sources.",
            "That means visibility is no longer a single-position problem; it is a source-selection and trust problem inside the answer layer.",
          ),
          s(" Marketers need to optimize for inclusion quality, not only blue-link prominence."),
        ],
        [
          s(
            "Overview-heavy results especially affect broad, early-stage, and comparative queries. ",
          ),
          x(
            "These are the same query classes where brands historically built awareness through high-volume informational traffic.",
            "As AI systems compress those clicks, content strategy must shift toward authoritative passages that can be cited and reused in synthesis.",
          ),
          s(" The new win condition is becoming the source AI trusts to answer first."),
        ],
        [
          s("The operational implication is a KPI redesign, not a panic response. "),
          x(
            "Track citation presence, answer-surface share, and post-click intent quality alongside traditional ranking data.",
            "Teams that update measurement early can defend budget and move faster than competitors still interpreting lower clicks as simple SEO decline.",
          ),
          s(" AI Overviews reward teams that adapt their definition of visibility quickly."),
        ],
      ],
      examples: [
        {
          title: "SaaS shortlist forms before first click",
          body: "A B2B buyer used AI Overviews to narrow six vendors to two before opening any site. The cited brands entered evaluation earlier even when one ranked below position three organically.",
        },
        {
          title: "Healthcare publisher preserves influence",
          body: "A health publisher saw stable rankings but falling informational sessions. After adding clearer evidence blocks and source transparency, citation frequency improved and branded follow-up searches recovered.",
        },
        {
          title: "Retail brand tracks overview share",
          body: "An ecommerce team added overview citation monitoring by category and discovered that answer presence predicted assisted conversions better than rank changes on head terms.",
        },
      ],
    }),
    buildSection({
      number: "1.2",
      title: "CTR Impact in AI-First Results",
      subtitle: "How answer layers reduce exploratory clicks and reshape traffic quality",
      take: "AI-generated result modules often reduce click-through rate on informational queries, but remaining visits can carry higher commercial intent.",
      why: "Without intent-tier reporting, teams may cut effective programs because top-line CTR declines look like pure performance loss.",
      paragraphs: [
        [
          s(
            "CTR decline is a structural effect of answer-first interfaces, not always a content quality failure. ",
          ),
          x(
            "When users get direct summaries for definitional or basic research queries, fewer people need to click through just to understand fundamentals.",
            "The traffic that remains is often further down the decision path, which changes how landing pages and conversion flows should be designed.",
          ),
          s(" Session volume becomes less meaningful than value per qualified visit."),
        ],
        [
          s(
            "Teams should segment CTR and traffic by query intent before reacting to trend lines. ",
          ),
          x(
            "Informational CTR can drop sharply while comparative and commercial query performance stays stable or improves.",
            "This separation prevents over-correcting content portfolios that still create meaningful assisted revenue through influence and qualified discovery.",
          ),
          s(" Intent segmentation turns volatility into actionable diagnosis."),
        ],
        [
          s("Executive reporting should connect CTR movement to downstream outcomes. "),
          x(
            "Pair click metrics with demo starts, qualified leads, revenue per visit, and branded demand growth.",
            "This framing helps leadership understand why lower clicks can coexist with healthier pipeline economics in an AI-shaped search environment.",
          ),
          s(" CTR is now a context metric, not a standalone success metric."),
        ],
      ],
      examples: [
        {
          title: "B2B traffic drops, pipeline quality rises",
          body: "A SaaS team lost 18% blog CTR on informational clusters but improved demo-to-opportunity conversion because visitors arrived with clearer product-fit intent.",
        },
        {
          title: "DTC comparison pages outperform",
          body: "A retail brand saw lower informational clicks but stronger conversion on comparison pages, indicating AI summaries pre-filtered low-intent users.",
        },
        {
          title: "Agency introduces intent-tier CTR lens",
          body: "An agency split CTR by query class and prevented unnecessary content cuts by proving that commercial-intent clusters were still improving.",
        },
      ],
    }),
    sectionWithDiagram(
      {
        number: "1.3",
        title: "LLM Query Behaviour and Prompt-Led Discovery",
        subtitle: "How conversational queries change keyword assumptions",
        take: "Users now ask longer, context-rich prompts, so optimization must account for full problem framing rather than isolated head terms.",
        why: "Keyword lists built only on short queries underrepresent how buyers increasingly ask questions in AI interfaces.",
        paragraphs: [
          [
            s(
              "LLM-assisted search encourages users to express intent in natural language, constraints, and decision context. ",
            ),
            x(
              "Instead of searching 'crm pricing', users ask for the best CRM for specific team size, budget range, migration complexity, and reporting needs.",
              "This shift rewards pages that answer clustered intent deeply, with explicit tradeoffs and scenario-level clarity.",
            ),
            s(" Query behavior is becoming narrative, not just lexical."),
          ],
          [
            s("Prompt chaining also changes how discovery unfolds across sessions. "),
            x(
              "Users refine with follow-up questions, compare options, and request summarized recommendations before any website visit.",
              "Brands must therefore provide passage-level content that can survive being quoted out of page context while preserving accuracy and trust.",
            ),
            s(" Retrieval quality now depends on modular answer design."),
          ],
          [
            s("Research workflows should combine keyword data with prompt-pattern observation. "),
            x(
              "Capture recurring conversational intents from Search Console, on-site search, sales calls, and support logs.",
              "Then map those intents into content structures that mirror how people now ask AI systems to narrow decisions.",
            ),
            s(" The best query model reflects how humans ask, not how tools bucket terms."),
          ],
        ],
        examples: [
          {
            title: "SaaS team rewrites for prompt patterns",
            body: "A software company rebuilt pages around long-form buyer prompts and saw improved coverage across multi-clause queries despite flat head-term positions.",
          },
          {
            title: "Publisher maps follow-up question chains",
            body: "An editorial team analyzed recurring second-step questions in AI tools and added dedicated sections, increasing assistant retrieval consistency.",
          },
          {
            title: "B2B content adds scenario-based headings",
            body: "A demand team introduced role-specific and budget-specific subheadings that aligned with conversational prompts and improved qualified session quality.",
          },
        ],
      },
      {
        kind: "diagram",
        id: "mkt-pb3-ch1-visibility-surfaces",
        type: "comparison",
        title: "Classic SEO vs AI Search Visibility",
        caption: "Visibility now spans rankings, citations, snippets, and assistant retrieval.",
      },
    ),
    buildSection({
      number: "1.4",
      title: "The New Search Journey from Prompt to Purchase",
      subtitle: "How AI compresses discovery and accelerates evaluation",
      take: "AI interfaces compress early discovery, so users enter websites later with sharper intent and higher expectations for proof and decision support.",
      why: "Journey maps built for legacy search behavior miss where influence now happens before the first site visit.",
      paragraphs: [
        [
          s(
            "The classic search journey was linear: query, scan links, click several pages, then form an opinion. ",
          ),
          x(
            "The AI-era journey is compressed: ask, receive synthesis, refine quickly, and click only when the user needs validation, pricing, or implementation detail.",
            "This shift reduces low-intent exploration and increases pressure on mid-funnel pages to close clarity gaps fast.",
          ),
          s(" Your site increasingly serves as the decision environment, not the first classroom."),
        ],
        [
          s("Because journeys are shorter, handoff quality matters more than raw reach. "),
          x(
            "Landing pages must acknowledge what users likely already learned from AI summaries and move directly into tradeoffs, proof, and next-step guidance.",
            "Teams that repeat basic definitions lose momentum and fail to convert high-intent traffic efficiently.",
          ),
          s(" Journey-aware content design now outperforms template funnel assumptions."),
        ],
        [
          s(
            "Cross-channel analytics should capture pre-click influence and post-click progression together. ",
          ),
          x(
            "Use attribution notes, assisted conversion views, and qualitative sales feedback to identify where AI-prequalified visitors behave differently.",
            "These signals help refine content architecture and conversion pathways for the new decision rhythm.",
          ),
          s(" The journey changed; measurement and page strategy must change with it."),
        ],
      ],
      examples: [
        {
          title: "SaaS pricing pages absorb pre-informed traffic",
          body: "A B2B team moved implementation FAQs and buyer objections above the fold and increased qualified demo starts from AI-assisted journeys.",
        },
        {
          title: "Retail category journey redesign",
          body: "An ecommerce brand rebuilt category pages to focus on comparison logic instead of basic education and saw better add-to-cart rates from organic users.",
        },
        {
          title: "Agency maps AI-to-site handoff friction",
          body: "A growth agency used call transcripts to identify what AI summaries omitted and updated landing pages to close those gaps, lifting conversion quality.",
        },
      ],
    }),
    sectionWithDiagram(
      {
        number: "1.5",
        title: "AI Search vs Traditional Search Operating Model",
        subtitle: "What changes in measurement, content, and conversion design",
        take: "Traditional SEO optimizes ranking and clicks; AI-era SEO must optimize citation trust, answer fitness, and high-intent conversion pathways.",
        why: "Teams that use old operating assumptions in new interfaces create blind spots in planning and budgeting.",
        paragraphs: [
          [
            s(
              "Traditional search rewarded breadth and incremental page expansion across many keyword variants. ",
            ),
            x(
              "AI search rewards answer-ready depth, source credibility, and modular passages that can be cited with confidence.",
              "The change is not cosmetic: content economics, reporting logic, and cross-functional collaboration all need updating.",
            ),
            s(" Legacy playbooks still matter, but they are no longer sufficient alone."),
          ],
          [
            s("Measurement differences are especially important for leadership decisions. "),
            x(
              "Classic dashboards center rank, clicks, and sessions; AI-adapted dashboards add citation share, answer-surface presence, and qualified outcome signals.",
              "Without these added metrics, strong adaptation work can look like decline during transition periods.",
            ),
            s(" Better measurement prevents false negative strategy calls."),
          ],
          [
            s("Execution differences require tighter SEO, PMM, and CRO alignment. "),
            x(
              "SEO identifies exposed intent clusters, PMM shapes evidence-rich positioning, and CRO designs pages for decisive action after AI-assisted research.",
              "This integrated model turns visibility shifts into commercial gains rather than isolated channel volatility.",
            ),
            s(" AI-era search performance is a system outcome, not a single-team output."),
          ],
        ],
        examples: [
          {
            title: "B2B team adds citation plus pipeline review",
            body: "A SaaS org added monthly AI-surface visibility metrics to its SEO board pack and made faster portfolio decisions during ranking volatility.",
          },
          {
            title: "Retail team rebalances content mix",
            body: "An ecommerce brand cut low-differentiation informational output and shifted effort to category comparison assets, improving assisted revenue quality.",
          },
          {
            title: "Agency replaces rank-only reporting",
            body: "An agency introduced AI vs traditional search dashboards and reduced stakeholder panic by showing influence gains beyond click totals.",
          },
        ],
      },
      {
        kind: "diagram",
        id: "mkt-pb3-ch1-adaptation-model",
        type: "flow",
        title: "AI Search Adaptation Model",
        caption: "Diagnose visibility shifts, rebalance content, and reinforce conversion paths.",
      },
    ),
    buildSection({
      number: "1.6",
      title: "Decision Lens Audit for AI Search Readiness",
      subtitle: "A practical framework to diagnose exposure and prioritize action",
      take: "A decision-lens audit helps teams score each query cluster by AI exposure, citation readiness, intent value, and conversion readiness.",
      why: "Without structured diagnosis, teams either overreact to noise or underinvest in high-impact adaptation priorities.",
      paragraphs: [
        [
          s("A useful audit begins with cluster-level exposure analysis. "),
          x(
            "Identify which topics are heavily answered in AI modules, which still drive blue-link behavior, and where your brand appears as a trusted source.",
            "This reveals where performance risk is structural and where optimization can still materially improve traditional click capture.",
          ),
          s(" Exposure mapping prevents unfocused rewrite programs."),
        ],
        [
          s("The second layer scores content readiness and trust depth. "),
          x(
            "Evaluate whether key pages contain citation-friendly passages, explicit evidence, clear ownership, and decision-stage completeness.",
            "Then prioritize updates by business value and influence potential instead of by simple traffic decline.",
          ),
          s(" Readiness scoring links editorial effort to expected strategic return."),
        ],
        [
          s("The final layer audits conversion pathways for AI-prequalified visitors. "),
          x(
            "Confirm that high-intent landing pages answer advanced objections, provide proof, and guide next actions without forcing users back to generic education.",
            "A complete decision lens closes the loop from answer-surface influence to measurable pipeline and revenue impact.",
          ),
          s(" Audit discipline turns AI search disruption into a repeatable growth playbook."),
        ],
      ],
      examples: [
        {
          title: "CMO prioritizes exposed intent clusters",
          body: "A CMO used exposure scoring to focus resources on six clusters with high AI answer penetration and stabilized qualified demand within one quarter.",
        },
        {
          title: "SEO team ranks pages by citation readiness",
          body: "A search team ran a content readiness audit and rewrote top commercial guides for passage clarity, leading to stronger answer-surface inclusion.",
        },
        {
          title: "Agency adds conversion-path audit",
          body: "An agency found that AI-prequalified users were landing on weak legacy templates and redesigned those pages to improve qualified lead conversion.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is the biggest strategic shift in AI-powered search environments?",
      options: [
        "Ranking position no longer matters at all",
        "Users always click more pages than before",
        "Visibility now includes answer inclusion and citations, not just blue-link rank",
        "SEO should only focus on paid search support",
      ],
      correct: 2,
      correctFeedback:
        "Correct. Search visibility now spans rankings plus AI answer and citation surfaces.",
      wrongFeedback: "AI search expands visibility surfaces beyond traditional ranking positions.",
    },
    {
      q: "Why can lower top-of-funnel traffic still coincide with better SEO business outcomes?",
      options: [
        "Because traffic data is always inaccurate",
        "Because AI search can pre-qualify users, raising intent of remaining visits",
        "Because conversion rate is unrelated to traffic quality",
        "Because all informational content has no value",
      ],
      correct: 1,
      correctFeedback:
        "Right. AI interfaces often reduce low-intent clicks and increase intent quality of visits that do happen.",
      wrongFeedback:
        "Traffic volume can fall while intent quality and conversion efficiency improve.",
    },
    {
      q: "Which content type tends to gain value in the AI search era?",
      options: [
        "Generic listicles with no unique insight",
        "Thin content targeting only exact-match keywords",
        "Proprietary, evidence-rich, differentiated content",
        "Duplicated category pages at scale",
      ],
      correct: 2,
      correctFeedback:
        "Exactly. Distinctive, trustworthy, and proprietary content is harder for AI interfaces to commoditize.",
      wrongFeedback:
        "Differentiated content with original insight is the strongest long-term asset in AI search.",
    },
  ],
});
