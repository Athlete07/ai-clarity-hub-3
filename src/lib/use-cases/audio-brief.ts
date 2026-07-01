import {
  buildNarrativePlaybookOverviewSynopsis,
  estimateAudioDurationSeconds,
  TTS_WORDS_PER_MINUTE,
  wordCount,
} from "./audio-brief-narrative";
import { buildEditorialChapterSynopsis } from "./audio-brief-editorial";
import {
  getPremiumChapterSynopsis,
  getPremiumPlaybookOverview,
  splitSynopsisParagraphs,
} from "./audio-brief-premium";
import audioBriefDurations from "./audio-brief-durations.json";
import type { GuideChapter } from "./guide-types";
import type { UseCasePlaybook } from "./types";
import { hasGuideChapters } from "./guide-helpers";

export type AudioBriefTier = "editorial" | "synopsis";

export type GuideAudioBrief = {
  transcript: string;
  paragraphs: string[];
  src: string;
  durationSeconds: number;
  label: string;
  tier: AudioBriefTier;
};

export {
  buildEditorialChapterSynopsis,
  editorialChapterParagraphs,
  EDITORIAL_CHAPTER_WORDS_MIN,
} from "./audio-brief-editorial";

export {
  estimateAudioDurationSeconds,
  TTS_WORDS_PER_MINUTE,
  wordCount,
} from "./audio-brief-narrative";

export { buildNarrativePlaybookOverviewSynopsis } from "./audio-brief-narrative";

/** @deprecated Use buildEditorialChapterSynopsis */
export const buildNarrativeChapterSynopsis = buildEditorialChapterSynopsis;

/** @deprecated Use buildEditorialChapterSynopsis */
export const buildChapterAudioBriefTranscript = buildEditorialChapterSynopsis;

/** @deprecated Use buildNarrativePlaybookOverviewSynopsis */
export const buildPlaybookOverviewAudioBriefTranscript = buildNarrativePlaybookOverviewSynopsis;

export function formatAudioDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.round(seconds % 60);
  if (m === 0) return `${s} sec`;
  if (s === 0) return `${m} min`;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function chapterBriefKey(playbookSlug: string, chapterSlug: string): string {
  return `${playbookSlug}/${chapterSlug}`;
}

export function chapterAudioBriefSrc(playbookSlug: string, chapterSlug: string): string {
  return `/audio/briefs/${playbookSlug}/${chapterSlug}.mp3`;
}

export function playbookOverviewAudioBriefSrc(playbookSlug: string): string {
  return `/audio/briefs/${playbookSlug}/_overview.mp3`;
}

function measuredDuration(id: string, transcript: string): number {
  const fromFile = (audioBriefDurations as Record<string, number>)[id];
  if (typeof fromFile === "number" && fromFile > 0) return fromFile;
  return estimateAudioDurationSeconds(transcript);
}

function resolveTranscript(
  custom: string | undefined,
  premium: { transcript: string; tier: AudioBriefTier } | undefined,
  generated: string,
): { transcript: string; tier: AudioBriefTier } {
  if (custom) {
    return { transcript: custom, tier: "editorial" };
  }
  if (premium) {
    return { transcript: premium.transcript, tier: premium.tier };
  }
  return { transcript: generated, tier: "editorial" };
}

export function resolveChapterAudioBrief(
  playbookSlug: string,
  playbookTitle: string,
  chapter: GuideChapter,
): GuideAudioBrief {
  const id = chapterBriefKey(playbookSlug, chapter.slug);
  const premium = getPremiumChapterSynopsis(playbookSlug, chapter.slug);
  const generated = buildEditorialChapterSynopsis(playbookTitle, chapter);
  const { transcript, tier } = resolveTranscript(
    chapter.audioBrief?.transcript,
    premium,
    generated,
  );

  const durationSeconds =
    chapter.audioBrief?.durationSeconds ?? measuredDuration(id, transcript);

  return {
    transcript,
    paragraphs: splitSynopsisParagraphs(transcript),
    src: chapter.audioBrief?.src ?? chapterAudioBriefSrc(playbookSlug, chapter.slug),
    durationSeconds,
    label: formatAudioDuration(durationSeconds),
    tier,
  };
}

export function resolvePlaybookOverviewAudioBrief(
  playbook: UseCasePlaybook,
): GuideAudioBrief | undefined {
  if (!hasGuideChapters(playbook)) return undefined;

  const premium = getPremiumPlaybookOverview(playbook.slug);
  const generated = buildNarrativePlaybookOverviewSynopsis(playbook);
  const { transcript, tier } = resolveTranscript(undefined, premium, generated);

  const id = `${playbook.slug}/_overview`;
  const durationSeconds = measuredDuration(id, transcript);

  return {
    transcript,
    paragraphs: splitSynopsisParagraphs(transcript),
    src: playbookOverviewAudioBriefSrc(playbook.slug),
    durationSeconds,
    label: formatAudioDuration(durationSeconds),
    tier,
  };
}

export type AudioBriefManifestEntry = {
  id: string;
  playbookSlug: string;
  chapterSlug?: string;
  kind: "chapter" | "overview";
  tier: AudioBriefTier;
  transcript: string;
  src: string;
  wordCount: number;
  durationSeconds: number;
};

export function buildAudioBriefManifest(
  playbooks: UseCasePlaybook[],
): AudioBriefManifestEntry[] {
  const entries: AudioBriefManifestEntry[] = [];

  for (const playbook of playbooks) {
    if (!hasGuideChapters(playbook)) continue;

    const overview = resolvePlaybookOverviewAudioBrief(playbook);
    if (overview) {
      entries.push({
        id: `${playbook.slug}/_overview`,
        playbookSlug: playbook.slug,
        kind: "overview",
        tier: overview.tier,
        transcript: overview.transcript,
        src: overview.src,
        wordCount: wordCount(overview.transcript),
        durationSeconds: overview.durationSeconds,
      });
    }

    for (const chapter of playbook.guide.chapters) {
      const brief = resolveChapterAudioBrief(playbook.slug, playbook.title, chapter);
      entries.push({
        id: `${playbook.slug}/${chapter.slug}`,
        playbookSlug: playbook.slug,
        chapterSlug: chapter.slug,
        kind: "chapter",
        tier: brief.tier,
        transcript: brief.transcript,
        src: brief.src,
        wordCount: wordCount(brief.transcript),
        durationSeconds: brief.durationSeconds,
      });
    }
  }

  return entries;
}
