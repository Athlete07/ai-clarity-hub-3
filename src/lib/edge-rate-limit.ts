/**
 * Per-isolate request rate limiting at the Worker edge.
 * Complements Cloudflare WAF / dashboard rate limits for DDoS mitigation.
 */

const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 240;
const MAX_PROBE_REQUESTS_PER_WINDOW = 30;

type Bucket = { count: number; resetAt: number };

const generalBuckets = new Map<string, Bucket>();
const probeBuckets = new Map<string, Bucket>();

function clientIp(request: Request): string {
  return (
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown"
  );
}

function checkBucket(
  buckets: Map<string, Bucket>,
  key: string,
  max: number,
): boolean {
  const now = Date.now();
  let bucket = buckets.get(key);
  if (!bucket || now > bucket.resetAt) {
    bucket = { count: 0, resetAt: now + WINDOW_MS };
    buckets.set(key, bucket);
  }
  bucket.count += 1;
  return bucket.count <= max;
}

function pruneIfNeeded(buckets: Map<string, Bucket>): void {
  if (buckets.size <= 5000) return;
  const now = Date.now();
  for (const [key, bucket] of buckets) {
    if (now > bucket.resetAt) buckets.delete(key);
  }
}

function tooManyRequests(): Response {
  return new Response("Too Many Requests", {
    status: 429,
    headers: { "Retry-After": "60" },
  });
}

/** Returns a 429 Response when the client exceeds rate limits, else null. */
export function rateLimitRequest(request: Request, isProbe = false): Response | null {
  const ip = clientIp(request);
  const buckets = isProbe ? probeBuckets : generalBuckets;
  const max = isProbe ? MAX_PROBE_REQUESTS_PER_WINDOW : MAX_REQUESTS_PER_WINDOW;

  if (!checkBucket(buckets, ip, max)) {
    return tooManyRequests();
  }

  pruneIfNeeded(buckets);
  return null;
}
