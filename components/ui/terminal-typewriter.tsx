"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface TerminalLine {
  type: "command" | "output" | "success" | "error" | "comment"
  text: string
  delay?: number
}

const lines: TerminalLine[] = [
  { type: "comment",  text: "# AI Engineer | Building Intelligent Systems" },
  { type: "command",  text: "python agent.py --mode autonomous" },
  { type: "output",   text: "→ Initializing LangGraph agent pipeline..." },
  { type: "output",   text: "→ Loading Kimi K2 model weights... [████████████] 100%" },
  { type: "success",  text: "✓ Agent ready. 4 tools registered." },
  { type: "command",  text: "docker compose up --build voice-invoice-agent" },
  { type: "output",   text: "→ LiveKit session established" },
  { type: "output",   text: "→ Deepgram STT | Cartesia TTS active" },
  { type: "success",  text: "✓ Voice AI online. Say 'Create invoice for...' " },
  { type: "command",  text: "curl -X POST /api/floor-plan --data @plan.jpg" },
  { type: "output",   text: "→ Roboflow detection: 12 walls, 4 doors, 6 windows" },
  { type: "output",   text: "→ Generating Three.js 3D scene..." },
  { type: "success",  text: "✓ Floor plan converted. Serving at /editor" },
  { type: "command",  text: "node index.js --model mistral --mode exam" },
  { type: "output",   text: "→ OCR processing 48-page PDF..." },
  { type: "output",   text: "→ Generating 20 AI questions in Arabic..." },
  { type: "success",  text: "✓ Exam ready. Multi-mode: AI | QBank | Manual" },
]

const typeColors: Record<TerminalLine["type"], string> = {
  command: "text-violet-300",
  output:  "text-zinc-400",
  success: "text-emerald-400",
  error:   "text-red-400",
  comment: "text-blue-400/70",
}

const typePrefix: Record<TerminalLine["type"], string> = {
  command: "❯ ",
  output:  "  ",
  success: "  ",
  error:   "  ",
  comment: "",
}

export function TerminalTypewriter() {
  const [visibleCount, setVisibleCount] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (visibleCount >= lines.length) {
      // restart loop
      const timer = setTimeout(() => {
        setVisibleCount(0)
        setCurrentText("")
        setIsTyping(true)
      }, 3000)
      return () => clearTimeout(timer)
    }

    const line = lines[visibleCount]
    const fullText = typePrefix[line.type] + line.text
    let charIndex = currentText.length

    if (charIndex >= fullText.length) {
      // line done, pause then move on
      const pause = line.type === "command" ? 400 : line.type === "success" ? 600 : 180
      const timer = setTimeout(() => {
        setVisibleCount((c) => c + 1)
        setCurrentText("")
      }, pause)
      return () => clearTimeout(timer)
    }

    const speed = line.type === "command" ? 28 : line.type === "comment" ? 20 : 12
    const timer = setTimeout(() => {
      setCurrentText(fullText.slice(0, charIndex + 1))
    }, speed)
    return () => clearTimeout(timer)
  }, [visibleCount, currentText])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [visibleCount, currentText])

  return (
    <div className="relative w-full rounded-xl overflow-hidden border border-white/8 bg-zinc-950/90 shadow-[0_0_60px_rgba(139,92,246,0.08)]">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-black/40">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/70" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <div className="h-3 w-3 rounded-full bg-green-500/70" />
        </div>
        <span className="text-zinc-500 text-xs font-mono ml-2">ai-engineer — zsh</span>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400/70 text-[10px] font-mono">LIVE</span>
        </div>
      </div>

      {/* Terminal body */}
      <div
        ref={scrollRef}
        className="p-4 h-72 overflow-hidden font-mono text-xs md:text-sm leading-relaxed space-y-0.5"
      >
        {lines.slice(0, visibleCount).map((line, i) => (
          <div key={i} className={typeColors[line.type]}>
            {typePrefix[line.type]}{line.text}
          </div>
        ))}
        {visibleCount < lines.length && (
          <div className={typeColors[lines[visibleCount].type]}>
            {currentText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.6 }}
              className="inline-block w-2 h-4 bg-violet-400 ml-0.5 align-middle"
            />
          </div>
        )}
      </div>
    </div>
  )
}
