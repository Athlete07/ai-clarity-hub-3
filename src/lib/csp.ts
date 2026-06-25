/**
 * Single source of truth for Content-Security-Policy.
 * Keep public/_headers and scripts/package-static-deploy.mjs in sync when editing.
 */

export const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "upgrade-insecure-requests",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://pagead2.googlesyndication.com https://www.google-analytics.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob: https:",
  "connect-src 'self' https://*.supabase.co wss://*.supabase.co https://www.google-analytics.com https://analytics.google.com https://*.google-analytics.com https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net https://www.google.com",
  "frame-src https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://www.google.com",
].join("; ");
