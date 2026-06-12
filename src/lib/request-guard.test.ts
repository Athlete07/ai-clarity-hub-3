import { describe, expect, it } from "vitest";
import { guardRequest } from "./request-guard";

describe("guardRequest", () => {
  it("blocks disallowed methods", () => {
    const res = guardRequest(new Request("https://example.com/", { method: "DELETE" }));
    expect(res?.status).toBe(405);
  });

  it("blocks common probe paths", () => {
    const res = guardRequest(new Request("https://example.com/wp-admin"));
    expect(res?.status).toBe(404);
  });

  it("blocks POST to non-API routes", () => {
    const res = guardRequest(
      new Request("https://example.com/contact", { method: "POST", body: "{}" }),
    );
    expect(res?.status).toBe(405);
  });

  it("allows GET to pages", () => {
    expect(guardRequest(new Request("https://example.com/executive-kb"))).toBeNull();
  });

  it("allows POST to AO API", () => {
    expect(
      guardRequest(
        new Request("https://example.com/api/ao/sync", {
          method: "POST",
          body: "{}",
          headers: { "content-length": "2" },
        }),
      ),
    ).toBeNull();
  });
});
