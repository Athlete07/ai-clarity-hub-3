import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/site-nav";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — FactorBeam" },
      {
        name: "description",
        content:
          "FactorBeam is an open playbook for people who think in products, not models. We translate mathematical complexity into product strategy.",
      },
      { property: "og:title", content: "About — FactorBeam" },
      {
        property: "og:description",
        content:
          "An open playbook for people who think in products, not models.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <Nav />
      <main className="overflow-x-hidden">
        {/* ── Hero Hook ───────────────────────────────────────────── */}
        <section className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="mesh-glow-1 absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-light/50 blur-[100px] dark:bg-purple-light/10" />
          </div>

          <div className="mx-auto max-w-[800px] px-5 pt-16 pb-16 text-center sm:px-6 sm:pt-28 sm:pb-24">
            <h1 className="text-[36px] font-medium leading-[1.08] tracking-[-0.025em] sm:text-[60px] sm:leading-[1.02]">
              We don't need more models.<br />
              We need more <span className="text-purple">clarity</span>.
            </h1>
          </div>
        </section>

        {/* ── The Manifesto ───────────────────────────────────────── */}
        <section className="mx-auto max-w-[650px] px-5 pb-24 sm:px-6 sm:pb-32 text-[18px] sm:text-[22px] font-medium leading-[1.65] text-foreground/90 space-y-8 text-center">
          <p>
            Every resource on AI is either impossibly technical or dangerously vague.
          </p>
          <p>
            As a product manager, I was tired of pretending to understand academic whitepapers just to do my job.
          </p>
          <p className="text-foreground">
            FactorBeam was built to be the antidote. We translate mathematical complexity into product strategy.
          </p>
        </section>

        {/* ── The Pillars (Bento Grid) ────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-6 sm:pb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Card 1 */}
            <div className="hairline bg-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between sm:col-span-2 transition-all hover:-translate-y-0.5 hover:border-purple/40 hover:shadow-[0_12px_40px_-12px_rgba(83,74,183,0.18)]">
              <div className="section-label mb-8">01 // The Audience</div>
              <div>
                <h3 className="text-[20px] sm:text-[24px] font-medium tracking-tight mb-2">Think in products, not tensors.</h3>
                <p className="text-[14px] sm:text-[15px] text-muted-foreground leading-relaxed max-w-[600px]">
                  Designed specifically for builders, PMs, and designers who need to ship, not research. We skip the calculus and focus on the unit economics, latency tradeoffs, and user experience.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="hairline bg-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all hover:-translate-y-0.5 hover:border-purple/40 hover:shadow-[0_12px_40px_-12px_rgba(83,74,183,0.18)]">
              <div className="section-label mb-8">02 // The Feature</div>
              <div>
                <h3 className="text-[18px] sm:text-[20px] font-medium tracking-tight mb-2">Radical clarity.</h3>
                <p className="text-[14px] sm:text-[15px] text-muted-foreground leading-relaxed">
                  Highlight any sentence. If it's not perfectly clear, we've failed. No more getting stuck on single jargon words.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="hairline bg-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all hover:-translate-y-0.5 hover:border-purple/40 hover:shadow-[0_12px_40px_-12px_rgba(83,74,183,0.18)]">
              <div className="section-label mb-8">03 // The Promise</div>
              <div>
                <h3 className="text-[18px] sm:text-[20px] font-medium tracking-tight mb-2">Always public.</h3>
                <p className="text-[14px] sm:text-[15px] text-muted-foreground leading-relaxed">
                  This is an open playbook. We learn in public, you build in public. Free and accessible to everyone.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ── Footer CTA ──────────────────────────────────────────── */}
        <section className="mx-auto max-w-[680px] px-5 pb-32 sm:px-6">
          <div className="text-center hairline bg-card p-10 sm:p-14 rounded-2xl flex flex-col items-center">
            <h2 className="text-[26px] sm:text-[32px] font-medium tracking-tight mb-3">The playbook is open.</h2>
            <p className="text-[14.5px] sm:text-[15.5px] text-muted-foreground mb-8">Currently building Module 1: AI Foundations.</p>
            <Link
              to="/playbooks"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-purple px-6 py-3 text-[14px] font-medium text-white transition-colors hover:bg-purple-dark"
            >
              Let's get to work
              <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
