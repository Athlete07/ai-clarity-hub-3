import { useState } from "react";
import { Check, Copy } from "lucide-react";
import type { CopyArtifact } from "@/lib/use-cases/types";

function CopyButton({ content }: { content: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = content;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-3.5 py-2 text-[12px] font-medium text-background transition-opacity hover:opacity-90"
    >
      {copied ? (
        <>
          <Check size={14} />
          Copied
        </>
      ) : (
        <>
          <Copy size={14} />
          Copy
        </>
      )}
    </button>
  );
}

export function ArtifactBlock({ artifacts }: { artifacts: CopyArtifact[] }) {
  return (
    <section id="artifacts" className="scroll-mt-28">
      <h2 className="text-[22px] font-medium tracking-[-0.02em] text-foreground sm:text-[26px]">
        Ready-to-use artifacts
      </h2>
      <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
        Complete templates — paste directly into your AI tool or automation
        workflow.
      </p>
      <div className="mt-8 space-y-4">
        {artifacts.map((artifact) => (
          <div
            key={artifact.id}
            className="overflow-hidden rounded-xl border border-border bg-card"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
              <div>
                <h3 className="text-[15px] font-medium text-foreground">
                  {artifact.title}
                </h3>
                {artifact.description && (
                  <p className="mt-1 text-[13px] text-muted-foreground">
                    {artifact.description}
                  </p>
                )}
              </div>
              <CopyButton content={artifact.content} />
            </div>
            <pre className="overflow-x-auto bg-muted/20 px-5 py-5 text-[13px] leading-[1.65] whitespace-pre-wrap font-mono text-foreground/85 sm:px-6">
              {artifact.content}
            </pre>
          </div>
        ))}
      </div>
    </section>
  );
}
