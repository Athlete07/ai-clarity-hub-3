/**
 * Flattens dist/client into a single deployable dist/ folder for cPanel / static hosting.
 * Run after `vite build` with prerender enabled.
 */
import { cp, mkdir, readdir, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const clientDir = path.join(distDir, "client");
const serverDir = path.join(distDir, "server");
const stagingDir = path.join(distDir, ".static-staging");

const HTACCESS = `# FactorBeam static deploy — Apache (cPanel) SPA fallback
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Legacy URL → AI Literacy
  RewriteRule ^executive-kb/?$ /ai-literacy [R=301,L]
  RewriteRule ^executive-kb/(.*)$ /ai-literacy/$1 [R=301,L]

  # Client-side routes: fall back to index.html when no static file exists
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ index.html [L]
</IfModule>

# Security headers (when mod_headers is available)
<IfModule mod_headers.c>
  # Baseline hardening (works on most shared hosts)
  Header set Content-Security-Policy "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self'; upgrade-insecure-requests; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://pagead2.googlesyndication.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob: https:; connect-src 'self' https://*.supabase.co wss://*.supabase.co https://www.google-analytics.com https://analytics.google.com https://*.google-analytics.com https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net https://www.google.com; frame-src https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://www.google.com"
  Header set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
  Header set X-Frame-Options "DENY"
  Header set X-Content-Type-Options "nosniff"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  Header set Permissions-Policy "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()"
  Header set Cross-Origin-Opener-Policy "same-origin"
  Header set Cross-Origin-Resource-Policy "same-site"
  Header set X-DNS-Prefetch-Control "off"
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/png "access plus 1 week"
  ExpiresByType image/svg+xml "access plus 1 week"
  ExpiresByType image/webp "access plus 1 week"
</IfModule>
`;

async function exists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}

async function copyDir(src, dest) {
  await mkdir(dest, { recursive: true });
  const entries = await readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDir(from, to);
    } else {
      await cp(from, to);
    }
  }
}

async function main() {
  if (!(await exists(clientDir))) {
    console.error(
      "[package-static-deploy] dist/client not found. Run `npm run build:deploy` first.",
    );
    process.exit(1);
  }

  console.log("[package-static-deploy] Staging client assets…");
  await rm(stagingDir, { recursive: true, force: true });
  await copyDir(clientDir, stagingDir);

  if (!(await exists(path.join(stagingDir, "index.html")))) {
    const shellCandidates = ["_shell/index.html", "index.html"];
    let shellFound = false;
    for (const candidate of shellCandidates) {
      if (await exists(path.join(stagingDir, candidate))) {
        shellFound = true;
        break;
      }
    }
    if (!shellFound) {
      console.warn(
        "[package-static-deploy] No index.html found. Enable prerender in vite.config.ts.",
      );
    }
  }

  await writeFile(path.join(stagingDir, ".htaccess"), HTACCESS, "utf8");

  console.log("[package-static-deploy] Replacing dist/ with flat static output…");
  await rm(clientDir, { recursive: true, force: true });
  await rm(serverDir, { recursive: true, force: true });

  const stagingEntries = await readdir(stagingDir, { withFileTypes: true });
  for (const entry of stagingEntries) {
    await cp(path.join(stagingDir, entry.name), path.join(distDir, entry.name), {
      recursive: true,
    });
  }

  await rm(stagingDir, { recursive: true, force: true });

  const topLevel = await readdir(distDir);
  console.log(
    `[package-static-deploy] Done. Zip the dist/ folder (${topLevel.length} items) and upload to your file manager.`,
  );
}

main().catch((error) => {
  console.error("[package-static-deploy]", error);
  process.exit(1);
});
