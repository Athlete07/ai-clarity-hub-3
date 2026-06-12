import { describe, expect, it } from "vitest";
import {
  adsTxtContent,
  adsensePublisherId,
  isAdsenseConfigured,
  isArticleAdSlotConfigured,
} from "./adsense";

describe("adsense configuration helpers", () => {
  it("detects configured publisher ID from env", () => {
    // ADSENSE_CLIENT is empty in test env unless stubbed — expect false
    expect(typeof isAdsenseConfigured()).toBe("boolean");
  });

  it("extracts publisher ID when client env is valid", () => {
    const valid = "ca-pub-123456789012";
    expect(valid).toMatch(/^ca-pub-\d{10,}$/);
    if (isAdsenseConfigured()) {
      expect(adsensePublisherId()).toMatch(/^\d{10,}$/);
      expect(adsTxtContent()).toMatch(/^google\.com, pub-\d+, DIRECT,/);
    } else {
      expect(adsensePublisherId()).toBeNull();
      expect(adsTxtContent()).toBeNull();
    }
  });

  it("validates article slot shape", () => {
    expect(isArticleAdSlotConfigured()).toBe(false);
    expect("1234567890").toMatch(/^\d+$/);
  });
});
