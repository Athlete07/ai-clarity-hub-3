import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ExplainParagraph } from "@/components/use-cases/explain-text";
import { ArchitectureDiagram } from "@/components/use-cases/architecture-diagram";
import {
  firstGuideChapter,
  guideChapterPath,
  hasGuideChapters,
  totalGuideReadingMinutes,
} from "@/lib/use-cases/guide-helpers";
import type { UseCasePlaybook } from "@/lib/use-cases/types";

export function GuidePlaybookOverview({ playbook }: { playbook: UseCasePlaybook }) {
  if (!hasGuideChapters(playbook)) return null;

  const { guide } = playbook;
  const first = firstGuideChapter(playbook)!;
  const totalMinutes = totalGuideReadingMinutes(playbook);

  return (
    <>
      <section id="overview" className="scroll-mt-28">
        <ExplainParagraph
          parts={playbook.businessContext}
          className="text-[16px] leading-[1.75] sm:text-[17px]"
        />

        <div className="mt-10">
          <ArchitectureDiagram
            title={playbook.architecture.title}
            caption={playbook.architecture.caption}
            steps={playbook.architecture.steps}
          />
        </div>
      </section>

      <hr className="my-12 border-border" />

      <section id="chapters" className="scroll-mt-28">
        <h2 className="text-[22px] font-medium tracking-[-0.02em] sm:text-[26px]">
          What&apos;s in this playbook
        </h2>
        <p className="mt-3 text-[15px] text-muted-foreground">
          {guide.chapters.length} chapters
          {totalMinutes ? ` · ~${totalMinutes} min total` : ""}. Pick a chapter from the
          list on the left, or start from the beginning.
        </p>

        <ol className="mt-6 space-y-2">
          {guide.chapters.map((chapter) => (
            <li key={chapter.slug}>
              <Link
                to="/use-cases/$slug/$chapterSlug"
                params={{ slug: playbook.slug, chapterSlug: chapter.slug }}
                className="group flex items-baseline gap-3 rounded-lg border border-border px-4 py-3 transition-colors hover:border-purple/25 hover:bg-muted/30"
              >
                <span className="font-mono text-[12px] text-muted-foreground">
                  {String(chapter.number).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[15px] font-medium text-foreground group-hover:text-purple-dark dark:group-hover:text-purple">
                    {chapter.title}
                  </span>
                  {chapter.readingMinutes && (
                    <span className="mt-0.5 block text-[12px] text-muted-foreground">
                      {chapter.readingMinutes} min
                    </span>
                  )}
                </span>
                <ArrowRight
                  size={14}
                  className="shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                />
              </Link>
            </li>
          ))}
        </ol>

        <Link
          to="/use-cases/$slug/$chapterSlug"
          params={{ slug: playbook.slug, chapterSlug: first.slug }}
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-[14px] font-medium text-background transition-opacity hover:opacity-90"
        >
          Start Chapter {first.number}
          <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}

export function buildGuideOverviewToc(playbook: UseCasePlaybook) {
  if (!hasGuideChapters(playbook)) return [];
  return [
    { id: "overview", label: "Overview" },
    { id: "chapters", label: "Chapter list" },
    { id: "discussion", label: "Discussion" },
  ];
}

export function guideOverviewHref(playbook: UseCasePlaybook): string {
  return `/use-cases/${playbook.slug}`;
}

export { guideChapterPath };
