import type { ExplainSpan } from "@/lib/concepts";
import type {
  ArchitectureStep,
  CopyArtifact,
  DecisionCriterion,
  FailurePoint,
  MindmapDef,
} from "./types";

export type PlaybookSeries = {
  id: string;
  title: string;
  subtitle?: string;
};

export type GuideSection = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  takeaway: string;
  why: string;
  paragraphs: (string | ExplainSpan)[][];
  workflowSteps?: string[];
  example?: { title: string; body: string };
  artifact?: CopyArtifact;
};

export type GuideConcept = {
  number: number;
  title: string;
  subtitle: string;
  sections: GuideSection[];
};

export type GuideDiagram = {
  id: string;
  title: string;
  caption: string;
  steps: ArchitectureStep[];
};

/** One chapter inside a multi-chapter guide playbook. */
export type GuideChapter = {
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  intro: (string | ExplainSpan)[];
  keyInsight: string;
  concepts: GuideConcept[];
  diagrams: GuideDiagram[];
  mindmap?: MindmapDef;
  readingMinutes?: number;
  businessContext: (string | ExplainSpan)[];
  decisionCriteria: DecisionCriterion[];
  architecture: {
    title: string;
    caption: string;
    steps: ArchitectureStep[];
  };
  artifacts: CopyArtifact[];
  caseStudy: {
    title: string;
    scenario: string;
    before: string;
    after: string;
    metrics: string[];
  };
  failurePoints: FailurePoint[];
};

/** Multi-chapter guide — one catalog entry, many chapter routes. */
export type GuidePlaybook = {
  series: PlaybookSeries;
  chapters: GuideChapter[];
};
