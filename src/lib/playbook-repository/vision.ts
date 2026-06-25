import type { PlaybookKind } from "./taxonomy";

export type LibraryLaneStatus = "live" | "growing" | "coming-soon";

export type LibraryLaneId = "tools";

export type LibraryLane = {
  id: LibraryLaneId;
  title: string;
  tagline: string;
  description: string;
  status: LibraryLaneStatus;
  /** Filter native catalog entries by kind. */
  kinds: PlaybookKind[];
};

export const LIBRARY_LANE_STATUS_LABELS: Record<LibraryLaneStatus, string> = {
  live: "Live",
  growing: "Growing",
  "coming-soon": "Coming soon",
};

/** Browse paths — all tool guides live under Tools today. */
export const LIBRARY_LANES: LibraryLane[] = [
  {
    id: "tools",
    title: "Tools",
    tagline: "Claude · Cowork · ServiceNow",
    description:
      "Complete playbooks for the AI tools practitioners ship with — Claude, Cowork, and ServiceNow AI from mental model through production.",
    status: "live",
    kinds: ["tool-guide"],
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
