import { z } from "zod";
import type { RoleId } from "@/lib/role-themes";

export const ROLE_STORAGE_KEY = "factorbeam_selected_role";
export const TRACK_BANNER_DISMISSED_KEY = "factorbeam_track_banner_dismissed";

const ROLE_IDS = ["pm", "founder", "business-leader", "marketer"] as const satisfies readonly RoleId[];

/** URL path aliases → canonical role id (e.g. /executive-kb/leader). */
const TRACK_PATH_ALIASES: Record<string, RoleId> = {
  pm: "pm",
  founder: "founder",
  "business-leader": "business-leader",
  leader: "business-leader",
  marketer: "marketer",
  marketing: "marketer",
};

export const executiveKbSearchSchema = z.object({
  track: z.enum(ROLE_IDS).optional(),
});

export type ExecutiveKbSearch = z.infer<typeof executiveKbSearchSchema>;

/** Parse `?track=` or path segment into a role id. */
export function parseRoleTrack(value: unknown): RoleId | undefined {
  if (typeof value !== "string") return undefined;
  const normalized = value.trim().toLowerCase();
  return TRACK_PATH_ALIASES[normalized];
}

export function isRoleTrackPathSegment(segment: string): boolean {
  return parseRoleTrack(segment) !== undefined;
}

export function executiveKbTrackSearch(track: RoleId): ExecutiveKbSearch {
  return { track };
}

/** Short marketing path — redirects to canonical `?track=` on the index route. */
export function executiveKbTrackPath(track: RoleId): `/executive-kb/${RoleId}` {
  return `/executive-kb/${track}`;
}

export function readStoredRole(): RoleId | null {
  if (typeof window === "undefined") return null;
  try {
    const saved = window.localStorage.getItem(ROLE_STORAGE_KEY) as RoleId | null;
    return saved && ROLE_IDS.includes(saved) ? saved : null;
  } catch {
    return null;
  }
}

export function writeStoredRole(track: RoleId | null) {
  if (typeof window === "undefined") return;
  try {
    if (track) {
      window.localStorage.setItem(ROLE_STORAGE_KEY, track);
    } else {
      window.localStorage.removeItem(ROLE_STORAGE_KEY);
    }
  } catch {
    // ignore
  }
}

export function isTrackBannerDismissed(): boolean {
  if (typeof window === "undefined") return true;
  try {
    return window.localStorage.getItem(TRACK_BANNER_DISMISSED_KEY) === "1";
  } catch {
    return true;
  }
}

export function dismissTrackBanner() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(TRACK_BANNER_DISMISSED_KEY, "1");
  } catch {
    // ignore
  }
}
