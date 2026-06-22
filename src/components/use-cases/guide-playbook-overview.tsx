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
import { USE_CASE_ROLE_LABELS, type UseCasePlaybook } from "@/lib/use-cases/types";

export function GuidePlaybookOverview({ playbook }: { playbook: UseCasePlaybook }) {
  if (!hasGuideChapters(playbook)) return null;

  const { guide } = playbook;
  const first = firstGuideChapter(playbook)!;
  const totalMinutes = totalGuideReadingMinutes(playbook);
  const hasDecision = playbook.decisionCriteria.length > 0;
  const hasPitfalls = playbook.failurePoints.length > 0;

  return (
    <>
      <section id="overview" className="scroll-mt-28">
        <h2 className="text-[22px] font-medium tracking-[-0.02em] sm:text-[26px]">
          Why this playbook exists
        </h2>
        <ExplainParagraph
          parts={playbook.businessContext}
          className="mt-5 text-[16px] leading-[1.75] sm:text-[17px]"
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

      <section id="audience" className="scroll-mt-28">
        <h2 className="text-[22px] font-medium tracking-[-0.02em] sm:text-[26px]">
          Who this is for
        </h2>
        <p className="mt-3 text-[15px] text-muted-foreground">
          Built for people who need Claude to produce reliable work — not just impressive demos.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {playbook.roles.map((role) => (
            <span
              key={role}
              className="rounded-full border border-border bg-muted/40 px-3 py-1 text-[13px] font-medium text-foreground/90"
            >
              {USE_CASE_ROLE_LABELS[role]}
            </span>
          ))}
        </div>
        <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
          {playbook.tools.join(" · ")} — {playbook.costEstimate}
        </p>
      </section>

      {hasDecision && (
        <>
          <hr className="my-12 border-border" />

          <section id="fit" className="scroll-mt-28">
            <h2 className="text-[22px] font-medium tracking-[-0.02em] sm:text-[26px]">
              Is this for you?
            </h2>
            <p className="mt-3 text-[15px] text-muted-foreground">
              Four questions teams ask before they commit to a long guide.
            </p>
            <div className="mt-6 divide-y divide-border rounded-xl border border-border">
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
        </>
      )}

      <hr className="my-12 border-border" />

      <section id="outcomes" className="scroll-mt-28">
        <h2 className="text-[22px] font-medium tracking-[-0.02em] sm:text-[26px]">
          {playbook.caseStudy.title}
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
          {playbook.caseStudy.scenario}
        </p>
        <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
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
        {playbook.caseStudy.metrics.length > 0 && (
          <ul className="mt-6 space-y-2">
            {playbook.caseStudy.metrics.map((metric) => (
              <li
                key={metric}
                className="flex gap-2 text-[14px] leading-relaxed text-foreground/90"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-dark dark:bg-purple" />
                {metric}
              </li>
            ))}
          </ul>
        )}
      </section>

      <hr className="my-12 border-border" />

      <section id="chapters" className="scroll-mt-28">
        <h2 className="text-[22px] font-medium tracking-[-0.02em] sm:text-[26px]">
          What&apos;s in this playbook
        </h2>
        <p className="mt-3 text-[15px] text-muted-foreground">
          {guide.chapters.length} chapters
          {totalMinutes ? ` · ~${totalMinutes} min total` : ""}. Pick a chapter from the list on
          the left, or start from the beginning.
        </p>

        <ol className="mt-6 space-y-2">
          {guide.chapters.map((chapter) => (
            <li key={chapter.slug}>
              <Link
                to="/use-cases/$slug/$chapterSlug"
                params={{ slug: playbook.slug, chapterSlug: chapter.slug }}
                className="group flex items-start gap-3 rounded-lg border border-border px-4 py-3 transition-colors hover:border-purple/25 hover:bg-muted/30"
              >
                <span className="mt-0.5 font-mono text-[12px] text-muted-foreground">
                  {String(chapter.number).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[15px] font-medium text-foreground group-hover:text-purple-dark dark:group-hover:text-purple">
                    {chapter.title}
                  </span>
                  {chapter.subtitle && (
                    <span className="mt-1 block text-[13px] leading-snug text-muted-foreground line-clamp-2">
                      {chapter.subtitle}
                    </span>
                  )}
                  {chapter.readingMinutes && (
                    <span className="mt-1 block text-[12px] text-muted-foreground/80">
                      {chapter.readingMinutes} min
                    </span>
                  )}
                </span>
                <ArrowRight
                  size={14}
                  className="mt-1 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
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

      {hasPitfalls && (
        <>
          <hr className="my-12 border-border" />

          <section id="pitfalls" className="scroll-mt-28">
            <h2 className="text-[22px] font-medium tracking-[-0.02em] sm:text-[26px]">
              What goes wrong without this
            </h2>
            <p className="mt-3 text-[15px] text-muted-foreground">
              Common failure modes — and which chapter fixes each one.
            </p>
            <div className="mt-6 space-y-0 divide-y divide-border rounded-xl border border-border">
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
        </>
      )}
    </>
  );
}

export function buildGuideOverviewToc(playbook: UseCasePlaybook) {
  if (!hasGuideChapters(playbook)) return [];
  const items = [
    { id: "overview", label: "Why this exists" },
    { id: "audience", label: "Who it's for" },
  ];
  if (playbook.decisionCriteria.length > 0) {
    items.push({ id: "fit", label: "Is this for you?" });
  }
  items.push(
    { id: "outcomes", label: "What you'll gain" },
    { id: "chapters", label: "Chapter list" },
  );
  if (playbook.failurePoints.length > 0) {
    items.push({ id: "pitfalls", label: "Common pitfalls" });
  }
  items.push({ id: "discussion", label: "Discussion" });
  return items;
}

export function guideOverviewHref(playbook: UseCasePlaybook): string {
  return `/use-cases/${playbook.slug}`;
}

export { guideChapterPath };
