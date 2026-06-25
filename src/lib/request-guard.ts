/**
 * Lightweight request filtering at the Worker — blocks common probes,
 * limits methods/body size, and applies per-IP rate limits.
 * Full DDoS mitigation also relies on Cloudflare WAF / dashboard rate limits.
 */

import { rateLimitRequest } from "./edge-rate-limit";

const ALLOWED_METHODS = new Set(["GET", "HEAD", "OPTIONS"]);

const MAX_URL_LENGTH = 2048;
const MAX_POST_BODY_BYTES = 8192;

const PROBE_PATTERNS = [
  /^\/\.env/i,
  /^\/\.git/i,
  /^\/wp-admin/i,
  /^\/wp-login/i,
  /^\/wp-content/i,
  /^\/wp-includes/i,
  /^\/xmlrpc\.php/i,
  /^\/phpmyadmin/i,
  /^\/administrator/i,
  /^\/cgi-bin\//i,
  /^\/shell/i,
  /^\/vendor\/phpunit/i,
  /^\/\.aws\//i,
  /^\/\.well-known\/acme-challenge\/.+\.(php|asp|exe)$/i,
  /\/actuator\//i,
  /\/eval-stdin\.php/i,
  /\/server-status/i,
  /\/manager\/html/i,
  /\/HNAP1/i,
  /\/solr\//i,
  /\/telescope/i,
  /\/_all_dbs/i,
  /\/backup/i,
  /\/config\.php/i,
  /\/setup\.php/i,
  /\.(php|asp|aspx|jsp|cgi)$/i,
];

function isProbePath(path: string): boolean {
  return PROBE_PATTERNS.some((re) => re.test(path));
}

/**
 * Returns a blocking Response for suspicious requests, or null to continue.
 */
export function guardRequest(request: Request): Response | null {
  const method = request.method.toUpperCase();

  if (!ALLOWED_METHODS.has(method)) {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const raw = request.url;
  if (raw.length > MAX_URL_LENGTH) {
    return new Response("URI Too Long", { status: 414 });
  }

  const url = new URL(request.url);
  const path = url.pathname;

  if (
    path.includes("..") ||
    path.includes("\\") ||
    /%2e%2e/i.test(path) ||
    /%2e%2e/i.test(raw)
  ) {
    return new Response("Bad Request", { status: 400 });
  }

  const probe = isProbePath(path);
  const rateLimited = rateLimitRequest(request, probe);
  if (rateLimited) return rateLimited;

  if (probe) {
    return new Response("Not Found", { status: 404 });
  }

  if (method === "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const contentLength = request.headers.get("content-length");
  if (contentLength && Number.parseInt(contentLength, 10) > MAX_POST_BODY_BYTES) {
    return new Response("Payload Too Large", { status: 413 });
  }

  return null;
}
