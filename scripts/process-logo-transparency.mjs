import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { generateFavicons } from "./generate-favicons.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const src = path.join(publicDir, "factorbeam-logo-source.png");

function removeWhiteBg(data, width, height) {
  const threshold = 238;
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r >= threshold && g >= threshold && b >= threshold) {
      data[i + 3] = 0;
      continue;
    }
    const min = Math.min(r, g, b);
    if (min >= 220 && r >= 220 && g >= 220 && b >= 220) {
      data[i + 3] = Math.max(0, 255 - (min - 215) * 18);
    }
  }
  return data;
}

function toDarkMode(data) {
  const out = Buffer.from(data);
  for (let i = 0; i < out.length; i += 4) {
    if (out[i + 3] < 8) continue;
    const r = out[i];
    const g = out[i + 1];
    const b = out[i + 2];
    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    if (lum < 95) {
      const t = Math.min(1, (95 - lum) / 95);
      out[i] = Math.round(r + (242 - r) * t);
      out[i + 1] = Math.round(g + (242 - g) * t);
      out[i + 2] = Math.round(b + (247 - b) * t);
    }
  }
  return out;
}

async function loadRaw(file) {
  const { data, info } = await sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  return { data: Buffer.from(data), info };
}

async function saveRaw(data, info, file) {
  await sharp(data, { raw: info }).png().toFile(file);
}

async function buildOg(transparentPath) {
  const meta = await sharp(transparentPath).metadata();
  const scale = Math.min((1200 * 0.72) / meta.width, (630 * 0.45) / meta.height);
  const w = Math.round(meta.width * scale);
  const h = Math.round(meta.height * scale);
  const logo = await sharp(transparentPath).resize(w, h).toBuffer();
  await sharp({
    create: { width: 1200, height: 630, channels: 4, background: { r: 238, g: 237, b: 254, alpha: 1 } },
  })
    .composite([{ input: logo, left: Math.round((1200 - w) / 2), top: Math.round((630 - h) / 2) }])
    .png()
    .toFile(path.join(publicDir, "og.png"));
}

const { data, info } = await loadRaw(src);
const light = removeWhiteBg(data, info.width, info.height);
const dark = toDarkMode(light);

const lightPath = path.join(publicDir, "factorbeam-logo-light.png");
const darkPath = path.join(publicDir, "factorbeam-logo-dark.png");

await saveRaw(light, info, lightPath);
await saveRaw(dark, info, darkPath);
await buildOg(lightPath);
await generateFavicons();

console.log("Transparent logos written:", { lightPath, darkPath });
