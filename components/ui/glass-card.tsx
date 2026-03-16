"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  hoverLift?: boolean
}

export function GlassCard({ children, className, hoverLift = true, ...props }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hoverLift ? { y: -8, scale: 1.02 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "relative overflow-hidden rounded-xl",
        "border border-white/10",
        "bg-white/5 backdrop-blur-md",
        "shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]",
        "cursor-pointer",
        className
      )}
      {...(props as React.ComponentProps<typeof motion.div>)}
    >
      {/* Top highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      {/* Bottom shadow line */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/40 to-transparent" />
      {children}
    </motion.div>
  )
}
