import type { ExecutiveKb } from "@/lib/executive-kb";
import type { RoleId } from "@/lib/role-themes";

export const PLAYBOOK_PILLARS = [
  {
    step: "01",
    title: "Sequenced like a curriculum",
    body: "Each track is ordered PB 01 → PB n. Read forward; later playbooks assume earlier ones.",
  },
  {
    step: "02",
    title: "Framed for your role",
    body: "Same AI concepts — different examples. PM specs, founder strategy, leader ROI, marketer campaigns.",
  },
  {
    step: "03",
    title: "Explain anything in place",
    body: "Highlight a sentence you don't trust. Get a plain-English gloss without leaving the chapter.",
  },
] as const;

export function trackStats(kbs: ExecutiveKb[]) {
  const chapters = kbs.reduce((n, kb) => n + kb.sequence.length, 0);
  const minutes = kbs.reduce((n, kb) => n + kb.readingMinutes, 0);
  return {
    playbooks: kbs.length,
    chapters,
    minutes,
    hoursLabel: minutes >= 60 ? `${(minutes / 60).toFixed(1)}h` : `${minutes}m`,
  };
}

export function trackProgress(
  kbs: ExecutiveKb[],
  progress: Record<string, "in-progress" | "done" | undefined>,
) {
  const slugs = kbs.flatMap((kb) => kb.sequence.map((s) => s.slug));
  const done = slugs.filter((s) => progress[s] === "done").length;
  return {
    done,
    total: slugs.length,
    pct: slugs.length ? Math.round((done / slugs.length) * 100) : 0,
  };
}

export function firstPlaybookStart(kb: ExecutiveKb) {
  return kb.sequence[0]?.slug;
}

export const SPINE_HEIGHTS: Record<RoleId, number[]> = {
  pm: [92, 78, 86, 72, 88, 76, 84, 70, 82],
  founder: [88, 80, 76, 84, 72, 78, 86, 74],
  "business-leader": [86, 78, 82, 74, 80, 76, 84, 72],
  marketer: [84, 76, 80, 74, 78, 72, 86, 70],
};
