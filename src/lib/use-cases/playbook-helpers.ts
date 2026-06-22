import type { ExplainSpan } from "@/lib/concepts";
import type { GuideSection } from "./guide-types";

export const s = (text: string): string => text;
export const x = (text: string, explain: string): ExplainSpan => ({ text, explain });

export type GuideSectionInput = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  takeaway: string;
  why: string;
  paragraphs: (string | ExplainSpan)[][];
  workflowSteps?: string[];
  example?: { title: string; body: string };
  artifact?: GuideSection["artifact"];
};

export function buildGuideSection(input: GuideSectionInput): GuideSection {
  return { ...input };
}
