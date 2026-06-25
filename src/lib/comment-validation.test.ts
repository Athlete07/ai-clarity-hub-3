import { describe, expect, it } from "vitest";
import {
  validateCommentText,
  validateDisplayName,
  validatePlaybookSlug,
} from "./comment-validation";

describe("comment validation", () => {
  it("accepts valid playbook slugs", () => {
    expect(validatePlaybookSlug("servicenow-ai")).toBe(true);
    expect(validatePlaybookSlug("claude-full-stack")).toBe(true);
  });

  it("rejects invalid playbook slugs", () => {
    expect(validatePlaybookSlug("../etc/passwd")).toBe(false);
    expect(validatePlaybookSlug("")).toBe(false);
  });

  it("strips control characters from names and comments", () => {
    expect(validateDisplayName("Ada\x00Bot")).toBe("AdaBot");
    expect(validateCommentText("Hello\x1Fworld")).toBe("Helloworld");
  });
});
