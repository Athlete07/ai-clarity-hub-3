/**
 * Post-build checks for static deploy — audio briefs and hero play-button CSS.
 */
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const audioDir = path.join(distDir, "audio", "briefs");
const assetsDir = path.join(distDir, "assets");

async function countMp3(dir) {
  let count = 0;
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) count += await countMp3(full);
    else if (entry.name.endsWith(".mp3")) count += 1;
  }
  return count;
}

async function main() {
  const mp3Count = await countMp3(audioDir);
  if (mp3Count < 30) {
    console.error(
      `[verify-deploy] Expected 30 audio brief MP3s in dist/audio/briefs, found ${mp3Count}. Run: npm run audio:briefs`,
    );
    process.exit(1);
  }

  const assetFiles = await readdir(assetsDir);
  const cssFiles = assetFiles.filter((f) => f.startsWith("styles-") && f.endsWith(".css"));
  let heroPlayCss = false;
  for (const file of cssFiles) {
    const css = await readFile(path.join(assetsDir, file), "utf8");
    if (css.includes("guide-audio-brief-play")) {
      heroPlayCss = true;
      break;
    }
  }

  if (!heroPlayCss) {
    console.error("[verify-deploy] Missing .guide-audio-brief-play styles in dist/assets CSS.");
    process.exit(1);
  }

  console.log(
    `[verify-deploy] OK — ${mp3Count} audio briefs, hero play-button CSS present (${cssFiles.length} stylesheet(s)).`,
  );
}

main().catch((error) => {
  console.error("[verify-deploy]", error);
  process.exit(1);
});
