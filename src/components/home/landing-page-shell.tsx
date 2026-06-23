import type { ReactNode } from "react";
import { Nav, Footer } from "@/components/site-nav";

type LandingPageShellProps = {
  children: ReactNode;
  /** Transparent nav over aurora hero (home, catalog, marketing pages). */
  overlayNav?: boolean;
  /** Compact nav for long-form readers. */
  slimNav?: boolean;
};

export function LandingPageShell({
  children,
  overlayNav = true,
  slimNav = false,
}: LandingPageShellProps) {
  return (
    <>
      <Nav overlay={overlayNav && !slimNav} slim={slimNav} />
      <main className="landing-page overflow-x-hidden">{children}</main>
      <Footer />
    </>
  );
}
