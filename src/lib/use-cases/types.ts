import type { ExplainSpan } from "@/lib/concepts";
import type { PlaybookKind, RepositoryCategoryId } from "@/lib/playbook-repository/taxonomy";
import type { GuidePlaybook } from "./guide-types";

export type UseCaseRole =
  | "pm"
  | "founder"
  | "business-leader"
  | "marketer"
  | "sme-owner";

export type UseCaseTopicType = "implementation" | "tool" | "use-case";

export type DecisionCriterion = {
  question: string;
  yesMeans: string;
};

export type ArchitectureStep = {
  label: string;
  desc: string;
  tool?: string;
};

export type ImplementationPhase = {
  title: string;
  intro: (string | ExplainSpan)[];
  steps: string[];
  checkpoint: string;
  screenshotPlaceholder?: string;
};

export type CopyArtifact = {
  id: string;
  title: string;
  description?: string;
  content: string;
};

export type FailurePoint = {
  problem: string;
  fix: string;
};

export type MindmapBranch = {
  id: string;
  label: string;
  description: string;
  children?: { label: string; description: string }[];
};

export type MindmapDef = {
  center: string;
  caption: string;
  branches: MindmapBranch[];
};

export type UseCasePlaybook = {
  slug: string;
  title: string;
  /** One-line description for catalog rows and search. */
  summary: string;
  /** Optional hook lines on the playbook landing hero (guide playbooks). */
  heroBullets?: string[];
  kind: PlaybookKind;
  categoryId: RepositoryCategoryId;
  /** Display chips — role, industry, team size, etc. */
  tags: string[];
  roles: UseCaseRole[];
  timeToImplement: string;
  tools: string[];
  costEstimate: string;
  readingMinutes?: number;
  /** ISO date for sort-by-newest in the repository. */
  updatedAt: string;
  searchKeywords: string[];
  /** Multi-chapter guide. Chapters live at /use-cases/{slug}/{chapterSlug}. */
  guide?: GuidePlaybook;
  businessContext: (string | ExplainSpan)[];
  decisionCriteria: DecisionCriterion[];
  architecture: {
    title: string;
    caption: string;
    steps: ArchitectureStep[];
  };
  phases: ImplementationPhase[];
  artifacts: CopyArtifact[];
  mindmap?: MindmapDef;
  caseStudy: {
    title: string;
    scenario: string;
    before: string;
    after: string;
    metrics: string[];
  };
  failurePoints: FailurePoint[];
  nextPlaybook?: {
    slug: string;
    title: string;
    description: string;
  };
};

export const USE_CASE_ROLE_LABELS: Record<UseCaseRole, string> = {
  pm: "PM",
  founder: "Founder",
  "business-leader": "Business Leader",
  marketer: "Marketer",
  "sme-owner": "SME Owner",
};
