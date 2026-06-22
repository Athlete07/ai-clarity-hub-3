import type { UseCaseRole } from "@/lib/use-cases/types";
import { USE_CASE_ROLE_LABELS } from "@/lib/use-cases/types";

/** Content kinds — mirrors how Stripe Docs, Notion, and Intercom segment guides. */
export type PlaybookKind = "workflow" | "implementation" | "concept" | "tool-guide";

export const PLAYBOOK_KIND_LABELS: Record<PlaybookKind, string> = {
  workflow: "Workflow",
  implementation: "Implementation",
  concept: "Concept",
  "tool-guide": "Tool guide",
};

export const PLAYBOOK_KIND_DESCRIPTIONS: Record<PlaybookKind, string> = {
  workflow: "End-to-end systems you can build and ship",
  implementation: "Step-by-step setup with artifacts and checkpoints",
  concept: "Foundational knowledge for a role or domain",
  "tool-guide": "How to use a specific tool in production",
};

/** Top-level browse categories — designed to hold 700–1,000 entries. */
export type RepositoryCategoryId =
  | "customer-ops"
  | "sales-growth"
  | "product-engineering"
  | "data-analytics"
  | "automation"
  | "leadership"
  | "ai-fundamentals";

export type RepositoryCategory = {
  id: RepositoryCategoryId;
  label: string;
  description: string;
};

export const REPOSITORY_CATEGORIES: RepositoryCategory[] = [
  {
    id: "customer-ops",
    label: "Customer operations",
    description: "Support, success, triage, and service automation",
  },
  {
    id: "sales-growth",
    label: "Sales & growth",
    description: "Pipeline, outreach, qualification, and conversion",
  },
  {
    id: "product-engineering",
    label: "Product & engineering",
    description: "Build, ship, evaluate, and operate AI features",
  },
  {
    id: "data-analytics",
    label: "Data & analytics",
    description: "Measurement, forecasting, and decision intelligence",
  },
  {
    id: "automation",
    label: "Operations & automation",
    description: "Workflows, integrations, and internal tooling",
  },
  {
    id: "leadership",
    label: "Strategy & leadership",
    description: "Roadmaps, governance, vendor decisions, and change",
  },
  {
    id: "ai-fundamentals",
    label: "AI fundamentals",
    description: "Core concepts by role — migrating from AI Literacy",
  },
];

export const REPOSITORY_CATEGORY_MAP = Object.fromEntries(
  REPOSITORY_CATEGORIES.map((c) => [c.id, c]),
) as Record<RepositoryCategoryId, RepositoryCategory>;

export const REPOSITORY_ROLES: UseCaseRole[] = [
  "pm",
  "founder",
  "business-leader",
  "marketer",
  "sme-owner",
];

export { USE_CASE_ROLE_LABELS as REPOSITORY_ROLE_LABELS };

export type RepositorySort = "recommended" | "title-asc" | "title-desc" | "newest";

export const REPOSITORY_SORT_LABELS: Record<RepositorySort, string> = {
  recommended: "Recommended",
  "title-asc": "Title A–Z",
  "title-desc": "Title Z–A",
  newest: "Newest",
};

/** Client-side page size — swap for server cursor pagination at scale. */
export const REPOSITORY_PAGE_SIZE = 25;
