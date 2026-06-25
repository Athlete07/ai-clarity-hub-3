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

  it("blocks POST to all routes", () => {
    const res = guardRequest(
      new Request("https://example.com/contact", { method: "POST", body: "{}" }),
    );
    expect(res?.status).toBe(405);
  });

  it("blocks oversized URLs", () => {
    const longPath = "/library/" + "a".repeat(3000);
    const res = guardRequest(new Request(`https://example.com${longPath}`));
    expect(res?.status).toBe(414);
  });

  it("allows GET to pages", () => {
    expect(guardRequest(new Request("https://example.com/ai-literacy"))).toBeNull();
  });
});
