import { createFileRoute, notFound } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Check, Clock } from "lucide-react";
import { ShareMenu } from "@/components/share-menu";
import { ContentAttribution } from "@/components/creator-attribution";
import { CommentsSection } from "@/components/use-cases/comments-section";
import { ExplainParagraph } from "@/components/use-cases/explain-text";
import { GuideChapterPager } from "@/components/use-cases/guide-chapter-nav";
import {
  GuideChapterJumpLinks,
  GuideChapterSeriesBanner,
  guideChapterHead,
} from "@/components/use-cases/guide-chapter-article";
import { GuidePlaybookShell } from "@/components/use-cases/guide-playbook-shell";
import {
  buildGuideChapterToc,
  GuideChapterView,
} from "@/components/use-cases/guide-playbook-view";
import { useUseCaseProgress } from "@/lib/use-case-storage";
import {
  guideChapterPath,
  guideProgressKey,
  nextGuideChapter,
  prevGuideChapter,
} from "@/lib/use-cases/guide-helpers";
import { PLAYBOOK_KIND_LABELS } from "@/lib/playbook-repository/taxonomy";
import { attributionFromPlaybook } from "@/lib/content-attribution";
import { loadGuideChapter } from "@/lib/use-cases/registry";

export const Route = createFileRoute("/library/$slug/$chapterSlug")({
  loader: ({ params }) => {
    const loaded = loadGuideChapter(params.slug, params.chapterSlug);
    if (!loaded) throw notFound();
    return loaded;
  },
  head: ({ loaderData }) => {
    const data = loaderData;
    if (!data) return {};
    const { playbook, chapter } = data;
    return guideChapterHead(playbook, chapter);
  },
  component: GuideChapterPage,
});

function GuideChapterPage() {
  const { playbook, chapter } = Route.useLoaderData();
  const articleRef = useRef<HTMLElement>(null);
  const { progress, markDone, markInProgress } = useUseCaseProgress();
  const progressKey = guideProgressKey(playbook.slug, chapter.slug);
  const isDone = progress[progressKey] === "done";
  const tocItems = buildGuideChapterToc(chapter);
  const prev = prevGuideChapter(playbook, chapter.slug);
  const next = nextGuideChapter(playbook, chapter.slug);

  useEffect(() => {
    markInProgress(progressKey);
  }, [progressKey, markInProgress]);

  const hero = (
    <header className="chapter-hero landing-surface-card rounded-2xl p-6 sm:p-8">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-purple-light/80 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-purple-dark dark:bg-purple-light/15 dark:text-purple">
          {PLAYBOOK_KIND_LABELS[playbook.kind]}
        </span>
        <span className="text-[12px] text-muted-foreground">
          Chapter {chapter.number} of {playbook.guide!.chapters.length}
        </span>
      </div>

      <h1 className="mt-4 text-[30px] font-medium leading-[1.1] tracking-[-0.03em] text-foreground sm:text-[38px]">
        {chapter.title}
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] text-muted-foreground">
        {chapter.readingMinutes && (
          <span className="inline-flex items-center gap-1.5">
            <Clock size={14} className="opacity-70" />
            ~{chapter.readingMinutes} min read
          </span>
        )}
        {isDone && (
          <>
            <span className="opacity-40">·</span>
            <span className="inline-flex items-center gap-1 text-success">
              <Check size={13} />
              Complete
            </span>
          </>
        )}
        <span className="ml-auto">
          <ShareMenu
            title={chapter.title}
            summary={chapter.subtitle}
            path={guideChapterPath(playbook.slug, chapter.slug)}
          />
        </span>
      </div>

      <p className="mt-5 border-t border-border/60 pt-5 text-[16px] leading-relaxed text-muted-foreground">
        {chapter.subtitle}
      </p>
    </header>
  );

  return (
    <GuidePlaybookShell
      playbook={playbook}
      chapter={chapter}
      tocItems={tocItems}
      progress={progress}
      articleRef={articleRef}
      hero={
        <>
          <GuideChapterSeriesBanner playbook={playbook} chapter={chapter} className="mb-6" />
          {hero}
        </>
      }
    >
      <section id="context" className="scroll-mt-28">
        <h2 className="text-[22px] font-medium tracking-[-0.02em] sm:text-[26px]">
          Chapter context
        </h2>
        <ExplainParagraph
          parts={chapter.businessContext}
          className="mt-5 text-[16px] leading-[1.75] sm:text-[17px]"
        />
      </section>

      <hr className="my-12 border-border" />

      {chapter.decisionCriteria.length > 0 && (
        <>
          <section id="decision" className="scroll-mt-28">
            <h2 className="text-[22px] font-medium tracking-[-0.02em] sm:text-[26px]">
              Is this chapter for you?
            </h2>
            <div className="mt-6 divide-y divide-border rounded-xl border border-border">
              {chapter.decisionCriteria.map((c, i) => (
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
          <hr className="my-12 border-border" />
        </>
      )}

      <GuideChapterView chapter={chapter} />

      <div className="mt-10">
        <GuideChapterJumpLinks playbook={playbook} currentChapter={chapter} />
      </div>

      <hr className="my-12 border-border" />

      <section id="pitfalls" className="scroll-mt-28">
        <h2 className="text-[22px] font-medium tracking-[-0.02em] sm:text-[26px]">
          What goes wrong
        </h2>
        <div className="mt-6 space-y-0 divide-y divide-border rounded-xl border border-border">
          {chapter.failurePoints.map((fp, i) => (
            <div key={i} className="px-5 py-5 sm:px-6">
              <p className="text-[15px] font-medium text-foreground">{fp.problem}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                {fp.fix}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className="my-12 border-border" />

      <GuideChapterPager
        playbookSlug={playbook.slug}
        playbookTitle={playbook.title}
        prev={prev}
        next={next}
        isDone={isDone}
      />

      <div className="mt-10">
        <button
          type="button"
          onClick={() => markDone(progressKey)}
          disabled={isDone}
          className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-[14px] font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {isDone ? (
            <>
              <Check size={16} />
              Chapter complete
            </>
          ) : (
            "Mark chapter complete"
          )}
        </button>
      </div>

      <div className="mt-10">
        <ContentAttribution override={attributionFromPlaybook(playbook)} />
      </div>

      <hr className="my-12 border-border" />

      <div id="discussion" className="scroll-mt-28">
        <CommentsSection playbookSlug={progressKey} />
      </div>
    </GuidePlaybookShell>
  );
}
