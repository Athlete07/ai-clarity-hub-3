import { describe, expect, it } from "vitest";
import { GA4_MEASUREMENT_ID, isGa4Configured } from "./analytics";

describe("GA4 configuration", () => {
  it("reports whether measurement ID is configured", () => {
    expect(typeof isGa4Configured()).toBe("boolean");
  });

  it("accepts standard G- measurement ID format", () => {
    expect("G-ABC123XYZ").toMatch(/^G-[A-Z0-9]+$/i);
    expect(isGa4Configured()).toBe(/^G-[A-Z0-9]+$/i.test(GA4_MEASUREMENT_ID));
  });
});
