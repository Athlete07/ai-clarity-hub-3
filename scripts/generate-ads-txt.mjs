/**
 * Writes public/ads.txt from VITE_ADSENSE_CLIENT when set.
 * Run before build so AdSense can verify domain ownership.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const envPath = resolve(root, ".env");
const outPath = resolve(root, "public", "ads.txt");

function loadEnvFile(path) {
  if (!existsSync(path)) return {};
  const vars = {};
  for (const line of readFileSync(path, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    vars[key] = value;
  }
  return vars;
}

const fileEnv = loadEnvFile(envPath);
const client =
  process.env.VITE_ADSENSE_CLIENT ?? fileEnv.VITE_ADSENSE_CLIENT ?? "";
const match = /^ca-pub-(\d{10,})$/.exec(client);

if (match) {
  const content = `google.com, pub-${match[1]}, DIRECT, f08c47fec0942fa0\n`;
  writeFileSync(outPath, content, "utf8");
  console.log("[ads.txt] written for pub-" + match[1]);
} else {
  const placeholder = `# AdSense ads.txt — set VITE_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX in .env and rebuild.
# google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
`;
  writeFileSync(outPath, placeholder, "utf8");
  console.log("[ads.txt] placeholder written (VITE_ADSENSE_CLIENT not set)");
}
