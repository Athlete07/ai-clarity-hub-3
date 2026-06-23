import type { ReactNode, RefObject } from "react";
import { useState } from "react";
import { HighlightExplainer } from "@/components/highlight-explainer";
import { Footer } from "@/components/site-nav";
import {
  GuideChapterSidebar,
  GuidePlaybookSubheader,
} from "@/components/use-cases/guide-chapter-sidebar";
import {
  GuideChapterToc,
  GuideChapterTocMobile,
  type GuideTocItem,
} from "@/components/use-cases/guide-chapter-toc";
import { guideProgressKey } from "@/lib/use-cases/guide-helpers";
import type { GuideChapter } from "@/lib/use-cases/guide-types";
import type { UseCasePlaybook } from "@/lib/use-cases/types";
import type { UseCaseProgress } from "@/lib/use-case-storage";

type GuidePlaybookShellProps = {
  playbook: UseCasePlaybook;
  chapter?: GuideChapter;
  tocItems: GuideTocItem[];
  progress: UseCaseProgress;
  articleRef: RefObject<HTMLElement | null>;
  hero: ReactNode;
  children: ReactNode;
};

/**
 * Three-column reader — mirrors AI Literacy (PM playbook):
 * left = chapter list, center = article, right = on-this-page TOC.
 */
export function GuidePlaybookShell({
  playbook,
  chapter,
  tocItems,
  progress,
  articleRef,
  hero,
  children,
}: GuidePlaybookShellProps) {
  const guide = playbook.guide!;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const doneCount = guide.chapters.filter(
    (c) => progress[guideProgressKey(playbook.slug, c.slug)] === "done",
  ).length;
  const donePct = guide.chapters.length
    ? Math.round((doneCount / guide.chapters.length) * 100)
    : 0;

  return (
    <div className="min-h-screen catalog-body">
      <GuidePlaybookSubheader
        playbookTitle={playbook.title}
        playbookSlug={playbook.slug}
        firstChapterSlug={guide.chapters[0]!.slug}
        chapter={chapter}
        chapterCount={guide.chapters.length}
        donePct={donePct}
        onOpenMenu={() => setSidebarOpen(true)}
      />

      <div className="mx-auto flex max-w-[1400px]">
        <GuideChapterSidebar
          playbookSlug={playbook.slug}
          series={guide.series}
          chapters={guide.chapters}
          currentChapterSlug={chapter?.slug}
          progress={progress}
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="min-w-0 flex-1 px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
          <article
            ref={articleRef}
            className="chapter-article relative mx-auto max-w-[680px]"
          >
            <HighlightExplainer containerRef={articleRef} />
            {hero}
            <GuideChapterTocMobile items={tocItems} />
            <div className="mt-8">{children}</div>
          </article>
        </main>

        <GuideChapterToc items={tocItems} />
      </div>

      <Footer />
    </div>
  );
}
