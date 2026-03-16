"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface BentoCardProps {
  className?: string
  children: React.ReactNode
  glowColor?: string
}

export function BentoCard({ className, children, glowColor = "rgba(139,92,246,0.15)" }: BentoCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10",
        "bg-black/50 hover:bg-black/40 transition-colors duration-300",
        "p-5",
        className
      )}
      style={{
        boxShadow: `0 0 0 1px rgba(255,255,255,0.04), 0 4px 24px rgba(0,0,0,0.4)`,
      }}
    >
      {/* Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at 50% 0%, ${glowColor}, transparent 70%)` }}
      />
      {/* Top highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      {children}
    </motion.div>
  )
}

interface SkillBarProps {
  label: string
  level: number
  color?: string
}

export function SkillBar({ label, level, color = "bg-violet-500" }: SkillBarProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-xs">
        <span className="text-zinc-300 font-medium">{label}</span>
        <span className="text-zinc-500">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className={cn("h-full rounded-full", color)}
        />
      </div>
    </div>
  )
}

interface AIBadgeProps {
  label: string
  icon?: React.ReactNode
  variant?: "violet" | "blue" | "emerald" | "amber" | "rose" | "cyan"
}

const variantMap: Record<NonNullable<AIBadgeProps["variant"]>, string> = {
  violet:  "border-violet-500/30 bg-violet-500/10 text-violet-300 shadow-[0_0_12px_rgba(139,92,246,0.15)]",
  blue:    "border-blue-500/30 bg-blue-500/10 text-blue-300 shadow-[0_0_12px_rgba(59,130,246,0.15)]",
  emerald: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.15)]",
  amber:   "border-amber-500/30 bg-amber-500/10 text-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.15)]",
  rose:    "border-rose-500/30 bg-rose-500/10 text-rose-300 shadow-[0_0_12px_rgba(244,63,94,0.15)]",
  cyan:    "border-cyan-500/30 bg-cyan-500/10 text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.15)]",
}

export function AIBadge({ label, icon, variant = "violet" }: AIBadgeProps) {
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold tracking-wide transition-all duration-200 hover:scale-105",
      variantMap[variant]
    )}>
      {icon && <span className="text-[10px]">{icon}</span>}
      {label}
    </span>
  )
}
