import { AI_LITERACY } from "@/lib/brand";
import type { PlaybookKind } from "./taxonomy";

export type LibraryLaneStatus = "live" | "growing" | "coming-soon";

export type LibraryLaneId = "understand" | "tools" | "solve";

export type LibraryLane = {
  id: LibraryLaneId;
  title: string;
  tagline: string;
  description: string;
  status: LibraryLaneStatus;
  /** Filter native catalog entries by kind — empty means no catalog filter. */
  kinds: PlaybookKind[];
  /** External entry (e.g. AI Literacy) instead of catalog filter. */
  href?: string;
};

export const LIBRARY_LANE_STATUS_LABELS: Record<LibraryLaneStatus, string> = {
  live: "Live",
  growing: "Growing",
  "coming-soon": "Coming soon",
};

/** Four paths the library is built around — mirrors FactorBeam's product arc. */
export const LIBRARY_LANES: LibraryLane[] = [
  {
    id: "understand",
    title: "Understand AI",
    tagline: "Role-based literacy",
    description:
      "Sequenced chapters for PMs, founders, leaders, and marketers — plain English, real examples, no engineering degree required.",
    status: "live",
    kinds: ["concept"],
    href: AI_LITERACY.href,
  },
  {
    id: "tools",
    title: "Master the tools",
    tagline: "Claude · Code · Cowork",
    description:
      "Deep playbooks on the AI stack — mental models, pricing, MCP, Agent Skills, and when to use each surface in production.",
    status: "growing",
    kinds: ["tool-guide"],
  },
  {
    id: "solve",
    title: "Solve real problems",
    tagline: "Workflows for SMEs & teams",
    description:
      "Implementation guides and workflows you can copy — support triage, ops automation, and practical fixes for non-technical businesses.",
    status: "growing",
    kinds: ["workflow", "implementation"],
  },
];

export const LIBRARY_HERO = {
  title: "Playbook Library",
  lead: "Tool guides and workflows you can use today — built for teams that need outcomes, not hype.",
} as const;

export function laneMatchesKinds(
  lane: LibraryLane,
  kinds: PlaybookKind[],
): boolean {
  if (lane.kinds.length === 0) return false;
  if (kinds.length === 0) return false;
  if (kinds.length !== lane.kinds.length) return false;
  return lane.kinds.every((k) => kinds.includes(k));
}

export function kindsForLane(laneId: LibraryLaneId): PlaybookKind[] {
  return LIBRARY_LANES.find((l) => l.id === laneId)?.kinds ?? [];
}
