import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { securityHeadersInit } from "@/lib/security-headers";
import { getWorkerBindings } from "@/lib/worker-env";

const telemetryEventSchema = z.object({
  type: z.string().max(64),
  at: z.string().max(64).optional(),
  wave: z.number().int().optional(),
  detail: z.record(z.unknown()).optional(),
});

const telemetryBodySchema = z.array(telemetryEventSchema).max(200);

export const Route = createFileRoute("/api/ao/telemetry")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const contentType = request.headers.get("content-type") ?? "";
        if (!contentType.includes("application/json")) {
          return new Response("Unsupported Media Type", securityHeadersInit({ status: 415 }));
        }

        const raw = await request.text();
        if (raw.length > 8192) {
          return new Response("Payload Too Large", securityHeadersInit({ status: 413 }));
        }

        let json: unknown;
        try {
          json = JSON.parse(raw);
        } catch {
          return new Response("Bad Request", securityHeadersInit({ status: 400 }));
        }

        const parsed = telemetryBodySchema.safeParse(json);
        if (!parsed.success) {
          return new Response("Bad Request", securityHeadersInit({ status: 400 }));
        }

        const { HRIS_ENDPOINT, HRIS_TOKEN } = getWorkerBindings();
        if (!HRIS_ENDPOINT) {
          return new Response(null, securityHeadersInit({ status: 204 }));
        }

        try {
          const upstream = await fetch(HRIS_ENDPOINT, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              ...(HRIS_TOKEN ? { Authorization: `Bearer ${HRIS_TOKEN}` } : {}),
            },
            body: JSON.stringify(parsed.data),
          });
          if (!upstream.ok) {
            return new Response("Bad Gateway", securityHeadersInit({ status: 502 }));
          }
        } catch {
          return new Response("Bad Gateway", securityHeadersInit({ status: 502 }));
        }

        return new Response(null, securityHeadersInit({ status: 204 }));
      },
    },
  },
});
