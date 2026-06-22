import { ArchitectureDiagram } from "@/components/use-cases/architecture-diagram";
import { ArtifactBlock } from "@/components/use-cases/artifact-block";
import { ExplainParagraph, ExplainText } from "@/components/use-cases/explain-text";
import { MindmapDiagram } from "@/components/use-cases/mindmap-diagram";
import type { GuideChapter, GuideConcept, GuidePlaybook, GuideSection } from "@/lib/use-cases/guide-types";

function GuideSectionBlock({ section }: { section: GuideSection }) {
  const artifactFromSection = section.artifact;

  return (
    <section id={section.id} className="scroll-mt-28">
      <p className="font-mono text-[12px] text-muted-foreground">{section.number}</p>
      <h3 className="mt-1 text-[20px] font-medium leading-snug tracking-[-0.02em] sm:text-[22px]">
        {section.title}
      </h3>
      <p className="mt-2 text-[14px] text-muted-foreground">{section.subtitle}</p>

      <div className="mt-5 rounded-lg border border-purple/15 bg-purple-light/25 px-5 py-4 dark:bg-purple-light/5">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-purple-dark dark:text-purple">
          Key takeaway
        </p>
        <p className="mt-1.5 text-[15px] leading-relaxed text-foreground/90">
          {section.takeaway}
        </p>
      </div>

      <div className="mt-4 rounded-lg border border-border bg-muted/20 px-5 py-4">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Why this matters
        </p>
        <p className="mt-1.5 text-[14px] leading-relaxed text-foreground/85">
          {section.why}
        </p>
      </div>

      <div className="mt-6 space-y-4">
        {section.paragraphs.map((parts, i) => (
          <ExplainParagraph key={i} parts={parts} className="text-[15px] leading-[1.75]" />
        ))}
      </div>

      {section.workflowSteps && section.workflowSteps.length > 0 && (
        <div className="mt-6 rounded-xl border border-border bg-card p-5 sm:p-6">
          <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            Workflow — do this next
          </p>
          <ol className="mt-3 space-y-2">
            {section.workflowSteps.map((step, i) => (
              <li
                key={i}
                className="flex gap-3 text-[14px] leading-relaxed text-foreground/90"
              >
                <span className="shrink-0 font-mono text-[12px] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      )}

      {section.example && (
        <div className="mt-6 border-l-2 border-foreground/15 pl-5">
          <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            Real example
          </p>
          <p className="mt-2 text-[14px] font-medium text-foreground">
            {section.example.title}
          </p>
          <p className="mt-2 text-[14px] leading-relaxed text-foreground/85">
            {section.example.body}
          </p>
        </div>
      )}

      {artifactFromSection && (
        <div className="mt-6">
          <ArtifactBlock artifacts={[artifactFromSection]} />
        </div>
      )}
    </section>
  );
}

function GuideConceptBlock({ concept }: { concept: GuideConcept }) {
  return (
    <div id={`concept-${concept.number}`} className="mt-16 scroll-mt-28 first:mt-0">
      <p className="text-[12px] font-medium uppercase tracking-wider text-purple-dark dark:text-purple">
        Concept {concept.number}
      </p>
      <h2 className="mt-2 text-[24px] font-medium tracking-[-0.02em] sm:text-[28px]">
        {concept.title}
      </h2>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
        {concept.subtitle}
      </p>
      <div className="mt-10 space-y-14">
        {concept.sections.map((section) => (
          <GuideSectionBlock key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}

type GuideChapterViewProps = {
  chapter: GuideChapter;
  /** @deprecated series label now lives in shell sidebar */
  series?: GuidePlaybook["series"];
};

export function GuideChapterView({ chapter }: GuideChapterViewProps) {
  const sectionArtifacts = chapter.concepts
    .flatMap((c) => c.sections)
    .map((s) => s.artifact)
    .filter(Boolean);
  const allArtifacts = [
    ...chapter.artifacts,
    ...sectionArtifacts.filter(
      (a) => a && !chapter.artifacts.some((p) => p.id === a!.id),
    ),
  ];

  return (
    <>
      <section id="intro" className="scroll-mt-28">
        <ExplainParagraph
          parts={chapter.intro}
          className="text-[16px] leading-[1.75] sm:text-[17px]"
        />
        <div className="chapter-insight mt-6 rounded-lg border border-foreground/10 px-5 py-4 sm:px-6">
          <p className="chapter-insight-label text-[10px] font-semibold uppercase tracking-wider">
            Chapter insight
          </p>
          <p className="mt-2 text-[15px] leading-relaxed">{chapter.keyInsight}</p>
        </div>
      </section>

      <hr className="my-14 border-border" />

      <section id="diagrams" className="scroll-mt-28 space-y-8">
        <h2 className="text-[22px] font-medium tracking-[-0.02em] sm:text-[26px]">
          Reference diagrams
        </h2>
        {chapter.diagrams.map((d) => (
          <ArchitectureDiagram
            key={d.id}
            title={d.title}
            caption={d.caption}
            steps={d.steps}
          />
        ))}
        {chapter.mindmap && <MindmapDiagram mindmap={chapter.mindmap} />}
      </section>

      <hr className="my-14 border-border" />

      <section id="concepts" className="scroll-mt-28">
        {chapter.concepts.map((concept) => (
          <GuideConceptBlock key={concept.number} concept={concept} />
        ))}
      </section>

      <hr className="my-14 border-border" />

      {allArtifacts.length > 0 && (
        <>
          <div id="artifacts" className="scroll-mt-28">
            <ArtifactBlock artifacts={allArtifacts} />
          </div>
          <hr className="my-14 border-border" />
        </>
      )}

      <section id="results" className="scroll-mt-28">
        <h2 className="text-[22px] font-medium tracking-[-0.02em] sm:text-[26px]">
          {chapter.caseStudy.title}
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
          {chapter.caseStudy.scenario}
        </p>
        <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          <div className="bg-card p-6">
            <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              Before
            </p>
            <p className="mt-3 text-[14px] leading-relaxed">{chapter.caseStudy.before}</p>
          </div>
          <div className="bg-card p-6">
            <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              After
            </p>
            <p className="mt-3 text-[14px] leading-relaxed">{chapter.caseStudy.after}</p>
          </div>
        </div>
        <ul className="mt-8 space-y-3">
          {chapter.caseStudy.metrics.map((m, i) => (
            <li key={i} className="text-[14px] text-foreground/90">
              <ExplainText parts={[m]} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export function buildGuideChapterToc(chapter: GuideChapter) {
  const items: { id: string; label: string; depth?: number }[] = [
    { id: "context", label: "Chapter context" },
  ];

  if (chapter.decisionCriteria.length > 0) {
    items.push({ id: "decision", label: "Is this for you?" });
  }

  items.push(
    { id: "intro", label: "Introduction" },
    { id: "diagrams", label: "Diagrams" },
    { id: "concepts", label: "Concepts" },
  );

  for (const concept of chapter.concepts) {
    items.push({
      id: `concept-${concept.number}`,
      label: `Concept ${concept.number}`,
      depth: 1,
    });
    for (const section of concept.sections) {
      items.push({
        id: section.id,
        label: `${section.number} ${section.title}`,
        depth: 2,
      });
    }
  }

  items.push({ id: "artifacts", label: "Artifacts" });
  items.push({ id: "results", label: "Case study" });
  items.push({ id: "pitfalls", label: "Common pitfalls" });
  items.push({ id: "discussion", label: "Discussion" });

  return items;
}

/** @deprecated use GuideChapterView */
export const GuidePlaybookView = GuideChapterView;

/** @deprecated use buildGuideChapterToc */
export function buildGuideToc(_playbook: unknown, chapter?: GuideChapter) {
  if (!chapter) return [];
  return buildGuideChapterToc(chapter);
}
