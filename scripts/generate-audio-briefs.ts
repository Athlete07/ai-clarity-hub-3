/**
 * Generates MP3 files from public/audio/briefs/manifest.json using Microsoft Edge TTS.
 * Run: npm run audio:generate
 * Force regenerate: npm run audio:generate -- --force
 */
import { readFile, writeFile, mkdir, unlink, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { EdgeTTS } from "edge-tts-universal";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const manifestPath = path.join(root, "public", "audio", "briefs", "manifest.json");
const durationsPath = path.join(root, "src", "lib", "use-cases", "audio-brief-durations.json");
const pauseAssetPath = path.join(__dirname, "assets", "brief-paragraph-pause.mp3");
const publicDir = path.join(root, "public");

/** ServiceNow reference: editorial story voice for flagship briefs; synopsis uses Andrew. */
const VOICES = {
  editorial: "en-US-AriaNeural",
  synopsis: "en-US-AndrewMultilingualNeural",
} as const;

/** Shared pacing across tiers — slower delivery for story synopses. */
const RATES = {
  editorial: "-12%",
  synopsis: "-10%",
} as const;

/** Pause between spoken paragraphs (podcast-style beats). */
const PARAGRAPH_PAUSE_SECONDS = 0.55;

const force = process.argv.includes("--force");
const onlyArg = process.argv.find((arg) => arg.startsWith("--only="));
const onlyPrefix = onlyArg?.slice("--only=".length);

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

type WordBoundary = {
  offset: number;
  duration: number;
  text: string;
};

type ManifestFile = {
  generatedAt?: string;
  entries: Array<{
    id: string;
    tier?: "editorial" | "synopsis";
    transcript: string;
    src: string;
    wordCount?: number;
    durationSeconds: number;
  }>;
};

function durationFromBoundaries(boundaries: WordBoundary[]): number {
  if (boundaries.length === 0) return 0;
  const last = boundaries[boundaries.length - 1];
  return Math.ceil((last.offset + last.duration) / 10_000_000);
}

async function synthesizeParagraph(
  paragraph: string,
  tier: "editorial" | "synopsis",
  attempt = 1,
): Promise<{ audio: Buffer; durationSeconds: number }> {
  const voice = VOICES[tier];
  const rate = RATES[tier];
  try {
    const tts = new EdgeTTS(paragraph, voice, { rate });
    const result = await tts.synthesize();
    return {
      audio: Buffer.from(await result.audio.arrayBuffer()),
      durationSeconds: durationFromBoundaries(result.subtitle),
    };
  } catch (error) {
    if (attempt >= 5) throw error;
    const wait = attempt * 2000;
    console.warn(`  retry paragraph (${attempt}/5) after ${wait}ms…`);
    await new Promise((resolve) => setTimeout(resolve, wait));
    return synthesizeParagraph(paragraph, tier, attempt + 1);
  }
}

async function loadParagraphPauseBuffer(): Promise<Buffer> {
  try {
    await access(pauseAssetPath);
    return readFile(pauseAssetPath);
  } catch {
    await mkdir(path.dirname(pauseAssetPath), { recursive: true });
    const tts = new EdgeTTS(" ", VOICES.editorial, { rate: "-50%" });
    const result = await tts.synthesize();
    const buffer = Buffer.from(await result.audio.arrayBuffer());
    await writeFile(pauseAssetPath, buffer);
    return buffer;
  }
}

async function synthesizeParagraphs(
  transcript: string,
  tier: "editorial" | "synopsis",
): Promise<{ audio: Buffer; durationSeconds: number }> {
  const paragraphs = transcript
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  const pauseBuffer = await loadParagraphPauseBuffer();
  const audioChunks: Buffer[] = [];
  let totalDuration = 0;

  for (let i = 0; i < paragraphs.length; i += 1) {
    const { audio, durationSeconds } = await synthesizeParagraph(paragraphs[i], tier);
    audioChunks.push(audio);
    totalDuration += durationSeconds;

    if (i < paragraphs.length - 1) {
      audioChunks.push(pauseBuffer);
      totalDuration += PARAGRAPH_PAUSE_SECONDS;
    }

    await new Promise((resolve) => setTimeout(resolve, 350));
  }

  return {
    audio: Buffer.concat(audioChunks),
    durationSeconds: totalDuration,
  };
}

const raw = await readFile(manifestPath, "utf8");
const manifest = JSON.parse(raw) as ManifestFile;
const measuredDurations: Record<string, number> = {};

let created = 0;
let skipped = 0;

for (const entry of manifest.entries) {
  if (onlyPrefix && !entry.id.startsWith(onlyPrefix)) {
    if (entry.durationSeconds > 0) measuredDurations[entry.id] = entry.durationSeconds;
    continue;
  }

  const outPath = path.join(publicDir, entry.src.replace(/^\//, ""));
  await mkdir(path.dirname(outPath), { recursive: true });
  const tier = entry.tier ?? "synopsis";

  if (!force) {
    try {
      await readFile(outPath);
      skipped += 1;
      console.log(`skip ${entry.id} (exists — use --force to regenerate)`);
      if (entry.durationSeconds > 0) measuredDurations[entry.id] = entry.durationSeconds;
      continue;
    } catch {
      // generate
    }
  } else {
    try {
      await unlink(outPath);
    } catch {
      // missing file is fine
    }
  }

  console.log(`generate ${entry.id} [${tier}] (${entry.wordCount ?? "?"} words)…`);
  const { audio, durationSeconds } = await synthesizeParagraphs(entry.transcript, tier);
  await writeFile(outPath, audio);

  measuredDurations[entry.id] = Math.round(durationSeconds);
  entry.durationSeconds = Math.round(durationSeconds);
  created += 1;

  console.log(
    `  → ${formatDuration(Math.round(durationSeconds))}`,
  );

  await new Promise((resolve) => setTimeout(resolve, 400));
}

manifest.generatedAt = new Date().toISOString();
for (const entry of manifest.entries) {
  if (measuredDurations[entry.id]) {
    entry.durationSeconds = measuredDurations[entry.id];
  }
}

await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
await writeFile(durationsPath, `${JSON.stringify(measuredDurations, null, 2)}\n`, "utf8");

console.log(`Done. Created ${created}, skipped ${skipped}. Durations written to audio-brief-durations.json`);
