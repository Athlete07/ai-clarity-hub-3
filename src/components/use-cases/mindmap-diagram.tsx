import { GitBranch } from "lucide-react";
import type { MindmapDef } from "@/lib/use-cases/types";

export function MindmapDiagram({ mindmap }: { mindmap: MindmapDef }) {
  return (
    <div className="my-10 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <div className="border-b border-border bg-muted/20 px-5 py-3">
        <h4 className="flex items-center gap-2 text-[14px] font-semibold text-foreground">
          <GitBranch size={15} className="text-muted-foreground" />
          Implementation paths
        </h4>
        <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground">
          {mindmap.caption}
        </p>
      </div>
      <div className="overflow-x-auto p-6">
        <svg
          viewBox="0 0 720 320"
          className="mx-auto w-full max-w-[720px]"
          role="img"
          aria-label={`Mindmap: ${mindmap.center}`}
        >
          {/* Center node */}
          <rect
            x="280"
            y="130"
            width="160"
            height="60"
            rx="12"
            className="fill-purple-light stroke-purple"
            strokeWidth="1.5"
          />
          <text
            x="360"
            y="165"
            textAnchor="middle"
            className="fill-purple-dark text-[13px] font-semibold"
          >
            {mindmap.center}
          </text>

          {mindmap.branches.map((branch, bi) => {
            const isLeft = bi === 0;
            const branchX = isLeft ? 40 : 520;
            const lineX1 = isLeft ? 280 : 440;
            const lineX2 = isLeft ? 200 : 520;
            const childBaseY = isLeft ? 40 : 200;

            return (
              <g key={branch.id}>
                <line
                  x1={lineX1}
                  y1="160"
                  x2={lineX2}
                  y2={childBaseY + 30}
                  className="stroke-border"
                  strokeWidth="1.5"
                />
                <rect
                  x={branchX}
                  y={childBaseY}
                  width="180"
                  height="56"
                  rx="10"
                  className="fill-card stroke-border"
                  strokeWidth="1"
                />
                <text
                  x={branchX + 90}
                  y={childBaseY + 22}
                  textAnchor="middle"
                  className="fill-foreground text-[12px] font-semibold"
                >
                  {branch.label}
                </text>
                <text
                  x={branchX + 90}
                  y={childBaseY + 40}
                  textAnchor="middle"
                  className="fill-muted-foreground text-[10px]"
                >
                  {branch.description}
                </text>

                {branch.children?.map((child, ci) => {
                  const childY = childBaseY + 80 + ci * 58;
                  const childX = isLeft ? 20 : 540;
                  const midX = isLeft ? 130 : 590;
                  return (
                    <g key={ci}>
                      <line
                        x1={branchX + 90}
                        y1={childBaseY + 56}
                        x2={midX}
                        y2={childY + 20}
                        className="stroke-muted"
                        strokeWidth="1"
                        strokeDasharray="4 3"
                      />
                      <rect
                        x={childX}
                        y={childY}
                        width="200"
                        height="44"
                        rx="8"
                        className="fill-muted/30 stroke-border"
                        strokeWidth="0.75"
                      />
                      <text
                        x={childX + 100}
                        y={childY + 18}
                        textAnchor="middle"
                        className="fill-foreground text-[11px] font-medium"
                      >
                        {child.label}
                      </text>
                      <text
                        x={childX + 100}
                        y={childY + 34}
                        textAnchor="middle"
                        className="fill-muted-foreground text-[9px]"
                      >
                        {child.description}
                      </text>
                    </g>
                  );
                })}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
