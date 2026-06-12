/**
 * Lightweight request filtering at the Worker — blocks common probes and
 * limits methods. Full DDoS mitigation relies on Cloudflare edge (WAF / rate limits).
 */

const ALLOWED_METHODS = new Set(["GET", "HEAD", "POST", "OPTIONS"]);

/** POST is only permitted on these path prefixes (server API routes). */
const POST_ALLOWED_PREFIXES = ["/api/ao/"];

const PROBE_PATTERNS = [
  /^\/\.env/i,
  /^\/\.git/i,
  /^\/wp-admin/i,
  /^\/wp-login/i,
  /^\/wp-content/i,
  /^\/phpmyadmin/i,
  /^\/administrator/i,
  /^\/\.well-known\/acme-challenge\/.+\.(php|asp|exe)$/i,
  /\/actuator\//i,
  /\/\.aws\//i,
];

function isPostAllowed(pathname: string): boolean {
  return POST_ALLOWED_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

/**
 * Returns a blocking Response for suspicious requests, or null to continue.
 */
export function guardRequest(request: Request): Response | null {
  const method = request.method.toUpperCase();

  if (!ALLOWED_METHODS.has(method)) {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const url = new URL(request.url);
  const path = url.pathname;
  const raw = request.url;

  if (
    path.includes("..") ||
    path.includes("\\") ||
    /%2e%2e/i.test(path) ||
    /%2e%2e/i.test(raw)
  ) {
    return new Response("Bad Request", { status: 400 });
  }

  if (PROBE_PATTERNS.some((re) => re.test(path))) {
    return new Response("Not Found", { status: 404 });
  }

  if (method === "POST" && !isPostAllowed(path)) {
    return new Response("Method Not Allowed", { status: 405 });
  }

  // Reject oversized bodies early (HRIS sync max 8 KB)
  if (method === "POST") {
    const len = request.headers.get("content-length");
    if (len && Number.parseInt(len, 10) > 8192) {
      return new Response("Payload Too Large", { status: 413 });
    }
  }

  return null;
}
