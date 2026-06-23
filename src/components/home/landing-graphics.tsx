/** Decorative SVG layers for the landing hero — beam motif + ambient field. */

export function LandingGrain() {
  return (
    <div
      className="landing-grain pointer-events-none absolute inset-0 z-[1] opacity-[0.35] mix-blend-overlay"
      aria-hidden
    />
  );
}

export function LandingGrid() {
  return (
    <svg
      className="landing-grid pointer-events-none absolute inset-0 z-0 h-full w-full"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="landing-grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path
            d="M 48 0 L 0 0 0 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-white/[0.06]"
          />
        </pattern>
        <radialGradient id="landing-grid-fade" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="landing-grid-mask">
          <rect width="100%" height="100%" fill="url(#landing-grid-fade)" />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#landing-grid)" mask="url(#landing-grid-mask)" />
    </svg>
  );
}

export function LandingBeamOrb() {
  return (
    <div className="landing-beam-orb pointer-events-none absolute left-1/2 top-[38%] z-[2] -translate-x-1/2 -translate-y-1/2" aria-hidden>
      <svg
        viewBox="0 0 600 600"
        className="h-[min(90vw,520px)] w-[min(90vw,520px)]"
        fill="none"
      >
        <defs>
          <radialGradient id="orb-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.9" />
            <stop offset="45%" stopColor="#534AB7" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#534AB7" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="beam-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#534AB7" stopOpacity="0" />
            <stop offset="50%" stopColor="#C4B5FD" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#534AB7" stopOpacity="0" />
          </linearGradient>
          <filter id="orb-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="landing-orb-spin-slow" style={{ transformOrigin: "300px 300px" }}>
          <circle cx="300" cy="300" r="180" stroke="white" strokeOpacity="0.06" strokeWidth="1" />
          <circle cx="300" cy="300" r="140" stroke="white" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="4 12" />
          <circle cx="300" cy="300" r="100" stroke="#A78BFA" strokeOpacity="0.2" strokeWidth="1" />
        </g>

        <g filter="url(#orb-glow)">
          <ellipse cx="300" cy="300" rx="90" ry="90" fill="url(#orb-core)" className="landing-orb-pulse" />
        </g>

        <g className="landing-beam-sweep">
          <path
            d="M 300 300 L 300 40"
            stroke="url(#beam-grad)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M 300 300 L 520 420"
            stroke="url(#beam-grad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.45"
          />
          <path
            d="M 300 300 L 80 420"
            stroke="url(#beam-grad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.45"
          />
        </g>

        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <circle
            key={deg}
            cx={300 + 160 * Math.cos((deg * Math.PI) / 180)}
            cy={300 + 160 * Math.sin((deg * Math.PI) / 180)}
            r="3"
            fill="#C4B5FD"
            opacity="0.5"
            className="landing-node-pulse"
            style={{ animationDelay: `${deg * 8}ms` }}
          />
        ))}
      </svg>
    </div>
  );
}

export function LandingAurora() {
  return (
    <>
      <div className="landing-aurora landing-aurora-1" aria-hidden />
      <div className="landing-aurora landing-aurora-2" aria-hidden />
      <div className="landing-aurora landing-aurora-3" aria-hidden />
    </>
  );
}
