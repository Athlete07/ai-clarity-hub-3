/**
 * Security headers applied to every HTTP response at the Worker edge.
 * Complements Cloudflare DDoS/WAF (configure WAF + rate limiting in the dashboard).
 */

import { CONTENT_SECURITY_POLICY } from "./csp";

const SECURITY_HEADERS: Record<string, string> = {
  "Content-Security-Policy": CONTENT_SECURITY_POLICY,
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy":
    "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()",
  "Cross-Origin-Opener-Policy": "same-origin",
  "Cross-Origin-Resource-Policy": "same-site",
  "X-DNS-Prefetch-Control": "off",
};

/** Attach security headers to a Response (immutable-safe clone). */
export function withSecurityHeaders(response: Response): Response {
  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    if (!headers.has(key)) headers.set(key, value);
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export function securityHeadersInit(
  init?: ResponseInit,
): ResponseInit & { headers: Headers } {
  const headers = new Headers(init?.headers);
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    if (!headers.has(key)) headers.set(key, value);
  }
  return { ...init, headers };
}
