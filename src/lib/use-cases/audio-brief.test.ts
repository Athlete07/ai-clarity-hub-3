import { describe, expect, it } from "vitest";
import {
  buildEditorialChapterSynopsis,
  EDITORIAL_CHAPTER_WORDS_MIN,
  estimateAudioDurationSeconds,
  formatAudioDuration,
  resolveChapterAudioBrief,
  resolvePlaybookOverviewAudioBrief,
  wordCount,
} from "./audio-brief";
import { sanitizeForSpeech } from "./audio-brief-narrative";
import { CHAPTER_01_MENTAL_MODEL } from "./playbooks/servicenow-ai/chapter-01";
import { CHAPTER_02_NOW_ASSIST } from "./playbooks/servicenow-ai/chapter-02";
import { CHAPTER_03_INTERFACE_POWER_USER } from "./playbooks/claude-full-stack/chapter-03";
import { CLAUDE_FULL_STACK } from "./playbooks/claude-full-stack";
import { SERVICENOW_AI } from "./playbooks/servicenow-ai";

describe("audio-brief-editorial", () => {
  it("builds an 8-paragraph editorial brief for every chapter shape", () => {
    const transcript = buildEditorialChapterSynopsis(
      SERVICENOW_AI.title,
      CHAPTER_02_NOW_ASSIST,
    );
    const paragraphs = transcript.split(/\n\n+/);
    expect(paragraphs.length).toBeGreaterThanOrEqual(7);
    expect(wordCount(transcript)).toBeGreaterThanOrEqual(EDITORIAL_CHAPTER_WORDS_MIN);
    expect(transcript).toContain("central argument");
    expect(transcript).toContain("Listen here for the story");
    expect(transcript).not.toMatch(/Concept \d+/i);
    expect(transcript).not.toMatch(/Digging deeper/i);
    expect(transcript).not.toMatch(/This brief tells the story of/i);
  });

  it("uses the same editorial format for Claude chapters beyond chapter one", () => {
    const transcript = buildEditorialChapterSynopsis(
      CLAUDE_FULL_STACK.title,
      CHAPTER_03_INTERFACE_POWER_USER,
    );
    expect(transcript).toContain("central argument");
    expect(transcript).toContain("Listen here for the story");
    expect(transcript.split(/\n\n+/).length).toBeGreaterThanOrEqual(7);
    expect(transcript).not.toMatch(/Concept \d+/i);
  });

  it("sanitizes syllabus references for spoken delivery", () => {
    expect(sanitizeForSpeech("Start Concept 3 and read §1.8")).toBe("Start and read");
  });

  it("estimates duration from word count at neural TTS pace", () => {
    const seconds = estimateAudioDurationSeconds("word ".repeat(125).trim());
    expect(seconds).toBeGreaterThanOrEqual(55);
    expect(seconds).toBeLessThanOrEqual(65);
  });
});

describe("audio-brief", () => {
  it("uses editorial tier for all chapters including chapter two", () => {
    const brief = resolveChapterAudioBrief(
      "servicenow-ai",
      SERVICENOW_AI.title,
      CHAPTER_02_NOW_ASSIST,
    );
    expect(brief.tier).toBe("editorial");
    expect(brief.paragraphs.length).toBeGreaterThanOrEqual(7);
    expect(brief.transcript).toContain("Listen here for the story");
  });

  it("uses editorial premium synopsis for ServiceNow chapter 1", () => {
    const brief = resolveChapterAudioBrief(
      "servicenow-ai",
      SERVICENOW_AI.title,
      CHAPTER_01_MENTAL_MODEL,
    );
    expect(brief.tier).toBe("editorial");
    expect(brief.paragraphs.length).toBeGreaterThan(3);
    expect(brief.transcript).toContain("fabric, not a plugin");
    expect(brief.transcript).not.toMatch(/Concept \d+/);
  });

  it("formats duration for display", () => {
    expect(formatAudioDuration(65)).toBe("1:05");
    expect(formatAudioDuration(120)).toBe("2 min");
  });

  it("resolves editorial playbook overview", () => {
    const brief = resolvePlaybookOverviewAudioBrief(SERVICENOW_AI);
    expect(brief?.tier).toBe("editorial");
    expect(brief?.transcript).toContain("ServiceNow");
    expect(brief?.paragraphs.length).toBeGreaterThan(2);
  });
});
