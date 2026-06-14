import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root = path.resolve(import.meta.dirname, "..");
const dist = path.join(root, "dist");
const pub = path.join(root, "public");

function hash(file) {
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex").slice(0, 12);
}

function read(file) {
  return fs.readFileSync(path.join(dist, file), "utf8");
}

function has(file, needle) {
  return read(file).includes(needle);
}

const iconFiles = [
  "favicon.ico",
  "favicon-16x16.png",
  "favicon-32x32.png",
  "apple-touch-icon.png",
  "icon-192.png",
  "icon-512.png",
  "logo-mark.png",
  "site.webmanifest",
  "ads.txt",
  ".htaccess",
];

console.log("=== Static assets (dist vs public) ===");
for (const f of iconFiles) {
  const d = path.join(dist, f);
  const p = path.join(pub, f);
  const ok = fs.existsSync(d);
  const match = ok && fs.existsSync(p) ? hash(d) === hash(p) : null;
  console.log(`${ok ? "OK" : "MISSING"} ${f}${match === true ? " (match)" : match === false ? " (MISMATCH)" : ""}`);
}

console.log("\n=== Flat deploy structure ===");
console.log("dist/client exists:", fs.existsSync(path.join(dist, "client")));
console.log("dist/server exists:", fs.existsSync(path.join(dist, "server")));
console.log("dist/.htaccess exists:", fs.existsSync(path.join(dist, ".htaccess")));

console.log("\n=== Favicon in HTML ===");
const home = read("index.html");
for (const href of ["/favicon.ico", "/favicon-32x32.png", "/apple-touch-icon.png", "/site.webmanifest"]) {
  console.log(`${href}:`, home.includes(href) ? "yes" : "NO");
}

console.log("\n=== Feature checks in JS bundles ===");
const assetsDir = path.join(dist, "assets");
const js = fs.readdirSync(assetsDir).filter((f) => f.endsWith(".js"));
const allJs = js.map((f) => fs.readFileSync(path.join(assetsDir, f), "utf8")).join("\n");

const checks = [
  ["AdSense loader in chapter bundle", js.some((f) => f.includes("chapterSlug")) && js.filter((f) => f.includes("chapterSlug")).some((f) => fs.readFileSync(path.join(assetsDir, f), "utf8").includes("pagead2"))],
  ["Games page: Learn by playing", has("simulations/index.html", "Learn by playing") || allJs.includes("Learn by playing")],
  ["Games page: Agent Overseer", has("simulations/index.html", "Agent Overseer")],
  ["Footer email removed from site-nav", !fs.readFileSync(path.join(assetsDir, js.find((f) => f.startsWith("site-nav"))), "utf8").includes("mailto:contact")],
  ["AO: no AUTO_DISPATCH", !allJs.includes("AUTO_DISPATCH")],
  ["AO: no trackReadyNodes auto", !allJs.includes("trackReadyNodes")],
  ["Compact logo context", fs.readFileSync(path.join(assetsDir, js.find((f) => f.startsWith("site-nav"))), "utf8").includes("compact")],
  ["Manifest icon-192", read("site.webmanifest").includes("icon-192.png")],
];

for (const [label, pass] of checks) {
  console.log(`${pass ? "OK" : "FAIL"} ${label}`);
}
