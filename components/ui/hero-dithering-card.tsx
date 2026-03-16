"use client"

import { useState, Suspense, lazy } from "react"

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
)

interface HeroDitheringCardProps {
  children: React.ReactNode
  /** Accent colour for the dithering effect (hex). Defaults to a violet hue matching the AI theme. */
  accentColor?: string
  className?: string
  /** When true, the card fills edge-to-edge with no rounded corners — used for full-viewport hero. */
  fullScreen?: boolean
}

export function HeroDitheringCard({
  children,
  accentColor = "#7c3aed",
  className = "",
  fullScreen = false,
}: HeroDitheringCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`w-full relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={[
        "relative overflow-hidden bg-zinc-900/80 backdrop-blur-xl flex flex-col items-center justify-center duration-500",
        fullScreen
          ? "min-h-screen w-full"
          : "rounded-[48px] border border-white/10 shadow-[0_0_80px_rgba(124,58,237,0.15),0_0_0_1px_rgba(255,255,255,0.05)] min-h-[600px] md:min-h-[680px]",
      ].join(" ")}>

        {/* Dithering shader background */}
        <Suspense fallback={<div className="absolute inset-0 bg-violet-950/20" />}>
          <div className="absolute inset-0 z-0 pointer-events-none opacity-50 dark:opacity-40 mix-blend-screen">
            <Dithering
              colorBack="#00000000"
              colorFront={accentColor}
              shape="warp"
              type="4x4"
              speed={isHovered ? 0.7 : 0.2}
              className="size-full"
              minPixelRatio={1}
            />
          </div>
        </Suspense>

        {/* Subtle inner glow rings */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
          {/* Corner glows */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-40 bg-violet-600/10 blur-3xl rounded-full" />
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-600/8 blur-3xl rounded-full" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center px-6 py-16">
          {children}
        </div>
      </div>
    </div>
  )
}
