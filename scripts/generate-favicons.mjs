/**
 * Build centered transparent favicons and logo marks from the icon-only source.
 * Source: public/factorbeam-icon-source.png (mark only — no wordmark).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const ICON_SOURCE = path.join(publicDir, "factorbeam-icon-source.png");

function removeWhiteBg(data) {
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

/** Slightly lift dark facets so the mark reads on dark UI chrome. */
function toDarkModeVariant(data) {
  const out = Buffer.from(data);
  for (let i = 0; i < out.length; i += 4) {
    if (out[i + 3] < 8) continue;
    const r = out[i];
    const g = out[i + 1];
    const b = out[i + 2];
    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    if (lum < 120) {
      const t = Math.min(1, (120 - lum) / 120) * 0.35;
      out[i] = Math.round(r + (255 - r) * t);
      out[i + 1] = Math.round(g + (255 - g) * t);
      out[i + 2] = Math.round(b + (255 - b) * t);
    }
  }
  return out;
}

async function writePngIco(outPath, pngBuffers) {
  const items = await Promise.all(
    pngBuffers.map(async (png, index) => ({ png, m: await sharp(png).metadata(), index })),
  );
  const headerSize = 6 + items.length * 16;
  const buf = Buffer.alloc(headerSize);
  buf.writeUInt16LE(0, 0);
  buf.writeUInt16LE(1, 2);
  buf.writeUInt16LE(items.length, 4);

  let dataOffset = headerSize;
  const chunks = [buf];
  for (const { png, m, index } of items) {
    const entryOffset = 6 + index * 16;
    const w = m.width ?? 256;
    const h = m.height ?? 256;
    buf.writeUInt8(w >= 256 ? 0 : w, entryOffset);
    buf.writeUInt8(h >= 256 ? 0 : h, entryOffset + 1);
    buf.writeUInt8(0, entryOffset + 2);
    buf.writeUInt8(0, entryOffset + 3);
    buf.writeUInt16LE(1, entryOffset + 4);
    buf.writeUInt16LE(32, entryOffset + 6);
    buf.writeUInt32LE(png.length, entryOffset + 8);
    buf.writeUInt32LE(dataOffset, entryOffset + 12);
    chunks.push(png);
    dataOffset += png.length;
  }
  fs.writeFileSync(outPath, Buffer.concat(chunks));
}

async function loadTransparentIcon() {
  if (!fs.existsSync(ICON_SOURCE)) {
    throw new Error(`Missing icon source: ${ICON_SOURCE}`);
  }
  const { data, info } = await sharp(ICON_SOURCE)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const transparent = removeWhiteBg(Buffer.from(data));
  const trimmed = await sharp(transparent, { raw: info })
    .trim({ threshold: 12 })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  return { data: trimmed.data, info: trimmed.info };
}

async function renderSquarePng({ data, info }, size, paddingRatio) {
  const pad = Math.round(size * paddingRatio);
  const inner = size - pad * 2;
  const resized = await sharp(data, { raw: info })
    .resize(inner, inner, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();
  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: resized, gravity: "center" }])
    .png()
    .toBuffer();
}

async function writeMasterTransparentPng({ data, info }) {
  const maxEdge = 1024;
  const scale = maxEdge / Math.max(info.width, info.height);
  const w = Math.round(info.width * scale);
  const h = Math.round(info.height * scale);
  await sharp(data, { raw: info })
    .resize(w, h, {
      fit: "inside",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toFile(path.join(publicDir, "factorbeam-icon-transparent-1024.png"));
}

async function writeSquareOutputs(trimmed, darkTrimmed) {
  const outputs = [
    { file: "favicon-16x16.png", size: 16, padding: 0.08, light: trimmed },
    { file: "favicon-32x32.png", size: 32, padding: 0.08, light: trimmed },
    { file: "favicon-48x48.png", size: 48, padding: 0.08, light: trimmed },
    { file: "favicon.png", size: 32, padding: 0.08, light: trimmed },
    { file: "apple-touch-icon.png", size: 180, padding: 0.1, light: trimmed },
    { file: "icon-192.png", size: 192, padding: 0.1, light: trimmed },
    { file: "icon-512.png", size: 512, padding: 0.1, light: trimmed },
    { file: "icon-512-maskable.png", size: 512, padding: 0.16, light: trimmed },
    { file: "logo-mark.png", size: 256, padding: 0.08, light: trimmed },
    { file: "logo-mark-dark.png", size: 256, padding: 0.08, light: darkTrimmed },
  ];

  const pngByFile = new Map();
  for (const { file, size, padding, light } of outputs) {
    const buf = await renderSquarePng(light, size, padding);
    await sharp(buf).png().toFile(path.join(publicDir, file));
    pngByFile.set(file, buf);
  }

  await writePngIco(path.join(publicDir, "favicon.ico"), [
    pngByFile.get("favicon-16x16.png"),
    pngByFile.get("favicon-32x32.png"),
    pngByFile.get("favicon-48x48.png"),
  ]);

  return outputs.map((o) => o.file).concat("favicon.ico", "factorbeam-icon-transparent-1024.png");
}

export async function generateFavicons() {
  const trimmed = await loadTransparentIcon();
  const darkData = toDarkModeVariant(trimmed.data);
  const darkTrimmed = { data: darkData, info: trimmed.info };
  await writeMasterTransparentPng(trimmed);
  const written = await writeSquareOutputs(trimmed, darkTrimmed);
  return written;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  generateFavicons()
    .then((files) => console.log("[generate-favicons] Wrote:", files.join(", ")))
    .catch((err) => {
      console.error("[generate-favicons]", err);
      process.exit(1);
    });
}
