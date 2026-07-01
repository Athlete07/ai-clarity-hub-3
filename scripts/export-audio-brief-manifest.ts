/**
 * Exports audio brief transcripts for MP3 generation.
 * Run: npm run audio:manifest
 */
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildAudioBriefManifest } from "../src/lib/use-cases/audio-brief";
import { USE_CASE_PLAYBOOKS } from "../src/lib/use-cases/registry";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "public", "audio", "briefs");
const manifestPath = path.join(outDir, "manifest.json");

const manifest = buildAudioBriefManifest(USE_CASE_PLAYBOOKS);

await mkdir(outDir, { recursive: true });
await writeFile(manifestPath, `${JSON.stringify({ generatedAt: new Date().toISOString(), entries: manifest }, null, 2)}\n`, "utf8");

console.log(`Wrote ${manifest.length} audio brief entries to ${manifestPath}`);
