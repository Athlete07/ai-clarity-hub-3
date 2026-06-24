import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { ArrowLeft, Check } from "lucide-react";
import { HighlightExplainer } from "@/components/highlight-explainer";
import { Nav, Footer } from "@/components/site-nav";
import {
  GuidePlaybookOverview,
  guideOverviewHead,
} from "@/components/use-cases/guide-playbook-overview";
import { ArchitectureDiagram } from "@/components/use-cases/architecture-diagram";
import { ArtifactBlock } from "@/components/use-cases/artifact-block";
import { CommentsSection } from "@/components/use-cases/comments-section";
import { ExplainParagraph } from "@/components/use-cases/explain-text";
import { MindmapDiagram } from "@/components/use-cases/mindmap-diagram";
import { PLAYBOOK_REPOSITORY, brandOgMeta } from "@/lib/brand";
import { useUseCaseProgress } from "@/lib/use-case-storage";
import {
  hasGuideChapters,
  totalGuideReadingMinutes,
} from "@/lib/use-cases/guide-helpers";
import { PLAYBOOK_KIND_LABELS, REPOSITORY_CATEGORY_MAP } from "@/lib/playbook-repository/taxonomy";
import { useCaseBySlug } from "@/lib/use-cases/registry";
import type { UseCasePlaybook } from "@/lib/use-cases/types";

const WORKFLOW_TOC = [
  { id: "context", label: "Business context" },
  { id: "decision", label: "Decision framework" },
  { id: "architecture", label: "Architecture" },
  { id: "implementation", label: "Implementation" },
  { id: "artifacts", label: "Artifacts" },
  { id: "results", label: "Results" },
  { id: "pitfalls", label: "Common pitfalls" },
  { id: "discussion", label: "Discussion" },
] as const;

export const Route = createFileRoute("/use-cases/$slug/")({
  loader: ({ params }) => {
    const playbook = useCaseBySlug(params.slug);
    if (!playbook) throw notFound();
    return { playbook };
  },
  head: ({ loaderData }) => {
    const playbook = loaderData?.playbook;
    if (!playbook) return {};
    if (hasGuideChapters(playbook)) return guideOverviewHead(playbook);
    const url = `${PLAYBOOK_REPOSITORY.href}/${playbook.slug}`;
    return {
      meta: [
        { title: `${playbook.title} | FactorBeam` },
        { name: "description", content: playbook.summary },
        { property: "og:title", content: playbook.title },
        { property: "og:description", content: playbook.summary },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        ...brandOgMeta(),
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: UseCasePlaybookIndexPage,
});

function MetaGrid({ playbook }: { playbook: UseCasePlaybook }) {
  const isGuide = hasGuideChapters(playbook);
  const totalMinutes = totalGuideReadingMinutes(playbook);
  const cells = [
    {
      label: isGuide ? "Series length" : "Timeline",
      value: isGuide
        ? totalMinutes
          ? `~${totalMinutes} min · ${playbook.guide!.chapters.length} chapters`
          : `${playbook.guide!.chapters.length} chapters`
        : playbook.timeToImplement,
    },
    { label: "Cost", value: playbook.costEstimate },
    {
      label: isGuide ? "Format" : "Audience",
      value: isGuide ? "Multi-chapter guide" : playbook.tags.slice(0, 2).join(", "),
    },
    { label: "Stack", value: playbook.tools.slice(0, 3).join(", ") },
  ];

  return (
    <div className="playbook-meta-grid">
      {cells.map((cell) => (
        <div key={cell.label} className="playbook-meta-cell">
          <p className="playbook-meta-label">{cell.label}</p>
          <p className="playbook-meta-value">{cell.value}</p>
        </div>
      ))}
    </div>
  );
}

function PlaybookToc({
  items,
}: {
  items: { id: string; label: string; depth?: number }[];
}) {
  return (
    <nav className="playbook-toc hidden lg:block" aria-label="On this page">
      <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
        On this page
      </p>
      <ul className="mt-3 space-y-0.5">
        {items.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className="playbook-toc-link block">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function WorkflowPlaybookBody({ playbook }: { playbook: UseCasePlaybook }) {
  return (
    <>
      <section id="context" className="scroll-mt-28">
        <h2 className="text-[22px] font-medium tracking-[-0.02em] sm:text-[26px]">
          The problem
        </h2>
        <ExplainParagraph
          parts={playbook.businessContext}
          className="mt-5 text-[16px] leading-[1.75] sm:text-[17px]"
        />
      </section>

      <hr className="my-14 border-border" />

      <section id="decision" className="scroll-mt-28">
        <h2 className="text-[22px] font-medium tracking-[-0.02em] sm:text-[26px]">
          Should you do this?
        </h2>
        <div className="mt-8 divide-y divide-border rounded-xl border border-border">
          {playbook.decisionCriteria.map((c, i) => (
            <div key={i} className="px-5 py-5 sm:px-6">
              <p className="text-[15px] font-medium leading-snug text-foreground">
                {c.question}
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                {c.yesMeans}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className="my-14 border-border" />

      <section id="architecture" className="scroll-mt-28">
        <h2 className="text-[22px] font-medium tracking-[-0.02em] sm:text-[26px]">
          System architecture
        </h2>
        <div className="mt-8">
          <ArchitectureDiagram
            title={playbook.architecture.title}
            caption={playbook.architecture.caption}
            steps={playbook.architecture.steps}
          />
        </div>
      </section>

      <hr className="my-14 border-border" />

      <section id="implementation" className="scroll-mt-28">
        <h2 className="text-[22px] font-medium tracking-[-0.02em] sm:text-[26px]">
          Implementation
        </h2>
        <div className="mt-10">
          {playbook.phases.map((phase, pi) => (
            <div key={pi} className="playbook-phase-line">
              <span className="playbook-phase-num">{pi + 1}</span>
              <h3 className="text-[17px] font-medium leading-snug text-foreground sm:text-[18px]">
                {phase.title}
              </h3>
              <div className="mt-3 space-y-3">
                {phase.intro.map((part, i) =>
                  typeof part === "string" ? (
                    <p key={i} className="text-[15px] leading-relaxed text-foreground/90">
                      {part}
                    </p>
                  ) : (
                    <ExplainParagraph key={i} parts={[part]} />
                  ),
                )}
              </div>
              <ol className="mt-5 space-y-3">
                {phase.steps.map((step, si) => (
                  <li
                    key={si}
                    className="flex gap-3 text-[15px] leading-relaxed text-foreground/90"
                  >
                    <span className="mt-0.5 shrink-0 font-mono text-[12px] text-muted-foreground">
                      {String(si + 1).padStart(2, "0")}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-6 rounded-lg border border-border bg-muted/30 px-5 py-4">
                <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  Checkpoint
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-foreground/90">
                  {phase.checkpoint}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="my-14 border-border" />

      <ArtifactBlock artifacts={playbook.artifacts} />

      {playbook.mindmap && (
        <>
          <hr className="my-14 border-border" />
          <section className="scroll-mt-28">
            <h2 className="text-[22px] font-medium tracking-[-0.02em] sm:text-[26px]">
              Implementation paths
            </h2>
            <MindmapDiagram mindmap={playbook.mindmap} />
          </section>
        </>
      )}

      <hr className="my-14 border-border" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-[22px] font-medium tracking-[-0.02em] sm:text-[26px]">
          {playbook.caseStudy.title}
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
          {playbook.caseStudy.scenario}
        </p>
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          <div className="bg-card p-6 sm:p-8">
            <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              Before
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-foreground/90">
              {playbook.caseStudy.before}
            </p>
          </div>
          <div className="bg-card p-6 sm:p-8">
            <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              After
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-foreground/90">
              {playbook.caseStudy.after}
            </p>
          </div>
        </div>
      </section>

      <hr className="my-14 border-border" />
    </>
  );
}

function UseCasePlaybookIndexPage() {
  const { playbook } = Route.useLoaderData();
  const { progress } = useUseCaseProgress();

  if (hasGuideChapters(playbook)) {
    return <GuidePlaybookOverview playbook={playbook} progress={progress} />;
  }

  return <WorkflowPlaybookIndexPage playbook={playbook} />;
}

function WorkflowPlaybookIndexPage({ playbook }: { playbook: UseCasePlaybook }) {
  const articleRef = useRef<HTMLElement>(null);
  const { progress, markDone, markInProgress } = useUseCaseProgress();
  const isDone = progress[playbook.slug] === "done";
  const tocItems = WORKFLOW_TOC.map((s) => ({ id: s.id, label: s.label }));

  useEffect(() => {
    markInProgress(playbook.slug);
  }, [playbook.slug, markInProgress]);

  return (
    <>
      <Nav overlay />

      <main className="landing-page overflow-x-hidden">
      <header className="playbook-detail-hero relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 pb-12 pt-28 sm:px-8 sm:pb-14 sm:pt-32 lg:px-12">
          <Link
            to="/use-cases"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={14} />
            {PLAYBOOK_REPOSITORY.backShort}
          </Link>

          <p className="mt-6 text-[13px] font-medium text-muted-foreground">
            {PLAYBOOK_KIND_LABELS[playbook.kind]}
            <span aria-hidden> · </span>
            {REPOSITORY_CATEGORY_MAP[playbook.categoryId].label}
          </p>

          <h1 className="mt-3 max-w-4xl text-[32px] font-medium leading-[1.12] tracking-[-0.03em] sm:text-[40px] lg:text-[44px]">
            {playbook.title}
          </h1>

          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-muted-foreground">
            {playbook.summary}
          </p>

          <div className="mt-8 max-w-3xl">
            <MetaGrid playbook={playbook} />
          </div>

          {isDone && (
            <p className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-success">
              <Check size={14} />
              Marked as implemented
            </p>
          )}
        </div>
      </header>

      <div className="catalog-body">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[220px_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <PlaybookToc items={tocItems} />
          </aside>

          <article ref={articleRef} className="chapter-article relative min-w-0">
            <HighlightExplainer containerRef={articleRef} />
            <WorkflowPlaybookBody playbook={playbook} />

            <section id="pitfalls" className="scroll-mt-28">
              <h2 className="text-[22px] font-medium tracking-[-0.02em] sm:text-[26px]">
                What goes wrong
              </h2>
              <div className="mt-8 space-y-0 divide-y divide-border landing-surface-card overflow-hidden rounded-xl">
                {playbook.failurePoints.map((fp, i) => (
                  <div key={i} className="px-5 py-5 sm:px-6">
                    <p className="text-[15px] font-medium text-foreground">{fp.problem}</p>
                    <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                      {fp.fix}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <div className="mt-12">
              <button
                type="button"
                onClick={() => markDone(playbook.slug)}
                disabled={isDone}
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-[14px] font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {isDone ? (
                  <>
                    <Check size={16} />
                    Implemented
                  </>
                ) : (
                  "Mark as implemented"
                )}
              </button>
            </div>

            <hr className="my-14 border-border" />

            <div id="discussion" className="scroll-mt-28">
              <CommentsSection playbookSlug={playbook.slug} />
            </div>
          </article>
        </div>
        </div>
      </div>
      </main>

      <Footer />
    </>
  );
}
