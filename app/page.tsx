"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import {
  ArrowDown,
  Brain,
  Cpu,
  GitBranch,
  Server,
  Smartphone,
  Database,
  Mic,
  Eye,
  LayoutDashboard,
  FlaskConical,
  Network,
  ShoppingCart,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Sparkles,
  Terminal,
  Bot,
  Workflow,
  MessageSquare,
  ScanSearch,
} from "lucide-react"


import { ButtonCta } from "@/components/ui/button-shiny"
import { ContactPage } from "@/components/ui/contact-page"
import { Timeline } from "@/components/ui/timeline"
import { TerminalTypewriter } from "@/components/ui/terminal-typewriter"
import { BentoCard, SkillBar, AIBadge } from "@/components/ui/bento-grid"
import { lazy, Suspense } from "react"

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
)

/* ─── HELPERS ────────────────────────────────────────────────────── */

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-zinc-400 font-mono font-medium">
      {children}
    </span>
  )
}

function ProjectCard({
  icon: Icon,
  title,
  description,
  tags,
  glow = "violet",
}: {
  icon: React.ElementType
  title: string
  description: string
  tags: string[]
  glow?: "violet" | "blue" | "emerald" | "amber" | "rose" | "cyan"
}) {
  const glowStyles: Record<string, string> = {
    violet: "shadow-[0_0_30px_rgba(139,92,246,0.08)] border-violet-500/20",
    blue: "shadow-[0_0_30px_rgba(59,130,246,0.08)] border-blue-500/20",
    emerald: "shadow-[0_0_30px_rgba(52,211,153,0.08)] border-emerald-500/20",
    amber: "shadow-[0_0_30px_rgba(251,191,36,0.08)] border-amber-500/20",
    rose: "shadow-[0_0_30px_rgba(244,63,94,0.08)] border-rose-500/20",
    cyan: "shadow-[0_0_30px_rgba(34,211,238,0.08)] border-cyan-500/20",
  }
  const iconColor: Record<string, string> = {
    violet: "text-violet-400",
    blue: "text-blue-400",
    emerald: "text-emerald-400",
    amber: "text-amber-400",
    rose: "text-rose-400",
    cyan: "text-cyan-400",
  }
  return (
    <div className={`rounded-xl border bg-black/40 p-5 flex flex-col gap-3 ${glowStyles[glow]} hover:border-opacity-50 transition-all duration-300`}>
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-white/5 border border-white/8 shrink-0">
          <Icon className={`h-4 w-4 ${iconColor[glow]}`} />
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm leading-tight">{title}</h4>
          <p className="text-zinc-400 text-xs leading-relaxed mt-1">{description}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5 pt-1 border-t border-white/5">
        {tags.map((t) => <Tag key={t}>{t}</Tag>)}
      </div>
    </div>
  )
}

/* ─── TIMELINE DATA ──────────────────────────────────────────────── */

const timelineData = [
  {
    title: "Agents & LLMs",
    content: (
      <div className="space-y-4">
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
          Autonomous AI systems — sequential pipelines, voice agents, and RAG architectures that go far beyond simple API wrappers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProjectCard
            icon={Brain}
            title="AI Stock Screening Agent"
            description="Sequential 4-phase autonomous agent: macroeconomic context → fundamental screening → technical triggers → catalyst validation. Delivers ranked shortlist with rationale."
            tags={["LangGraph", "Kimi K2", "Python", "OpenClaw", "WhatsApp"]}
            glow="violet"
          />
          <ProjectCard
            icon={Mic}
            title="Voice AI Invoice Generator"
            description="Voice AI assistant for generating invoices through natural language. Real-time turn detection, STT, TTS pipeline with LiveKit."
            tags={["LiveKit Agents", "OpenAI", "Deepgram", "Cartesia", "Docker"]}
            glow="blue"
          />
          <ProjectCard
            icon={MessageSquare}
            title="DesertVoice: Arabic RAG Agent"
            description="Voice-enabled customer support in Saudi dialect Arabic. Combines RAG with real-time audio using Gemini embeddings and Annoy ANNS."
            tags={["Python", "LiveKit", "Gemini", "Annoy", "Arabic NLP"]}
            glow="amber"
          />
        </div>
      </div>
    ),
  },
  {
    title: "End-to-End AI Products",
    content: (
      <div className="space-y-4">
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
          Production-ready systems where AI is deeply wired into the product's core logic. From geometric computer vision pipelines to multi-modal content generation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProjectCard
            icon={LayoutDashboard}
            title="FloorPlan Pro 3D"
            description="Full-stack 2D→3D floor plan converter. AI detects walls, doors, windows via Roboflow. Three.js interactive 3D editor."
            tags={["FastAPI", "React", "Three.js", "Roboflow", "PostgreSQL"]}
            glow="cyan"
          />
          <ProjectCard
            icon={FlaskConical}
            title="AI Exam Management System"
            description="Mistral AI integration for intelligent question generation from OCR'd PDF/Word docs. Multi-mode: AI, Question Bank, Manual. Arabic RTL support."
            tags={["Node.js", "Express", "Mistral AI", "OCR", "PostgreSQL"]}
            glow="emerald"
          />
          <ProjectCard
            icon={Bot}
            title="AI Medical Competency Manager"
            description="Manages medical staff competencies with Mistral AI analysis. Full-stack with Drizzle ORM and comprehensive database tracking."
            tags={["Express.js", "React", "Mistral AI", "Drizzle ORM", "Tailwind"]}
            glow="rose"
          />
          <ProjectCard
            icon={Network}
            title="Neuro-Canvas: Visual NN Architect"
            description="AI-powered visual code generator for neural networks. Drag-and-drop model building with PyTorch/TensorFlow code export."
            tags={["React Flow", "Vite", "Gemini", "OpenAI", "Node.js"]}
            glow="violet"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Computer Vision",
    content: (
      <div className="space-y-4">
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
          Building systems that see and understand — from semantic image search to real-time object detection in production pipelines.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProjectCard
            icon={Eye}
            title="VisualVoyager: Visual Search Engine"
            description="Sophisticated image search combining CLIP semantic embeddings + SuperPoint local features for precise visual similarity. RANSAC verification."
            tags={["Python", "FastAPI", "CLIP", "SuperPoint", "RANSAC"]}
            glow="cyan"
          />
        </div>
        {/* Skills within CV section */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <BentoCard glowColor="rgba(34,211,238,0.12)">
            <p className="text-zinc-500 text-xs mb-3 uppercase tracking-widest font-semibold">CV Stack Proficiency</p>
            <div className="space-y-3">
              <SkillBar label="CLIP / Semantic Embeddings" level={88} color="bg-cyan-500" />
              <SkillBar label="Object Detection (YOLO/Roboflow)" level={85} color="bg-blue-500" />
              <SkillBar label="Feature Matching (SuperPoint/RANSAC)" level={78} color="bg-violet-500" />
              <SkillBar label="OCR Pipelines" level={82} color="bg-emerald-500" />
            </div>
          </BentoCard>
          <BentoCard glowColor="rgba(139,92,246,0.12)">
            <p className="text-zinc-500 text-xs mb-3 uppercase tracking-widest font-semibold">AI/ML Stack Proficiency</p>
            <div className="space-y-3">
              <SkillBar label="LangGraph / Agentic Pipelines" level={90} color="bg-violet-500" />
              <SkillBar label="LLM Integration (OpenAI/Mistral/Gemini)" level={92} color="bg-blue-500" />
              <SkillBar label="RAG Architectures" level={86} color="bg-emerald-500" />
              <SkillBar label="Voice AI (LiveKit/Deepgram)" level={80} color="bg-amber-500" />
            </div>
          </BentoCard>
        </div>
      </div>
    ),
  },
  {
    title: "Systems & APIs",
    content: (
      <div className="space-y-4">
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
          From robust data pipelines to real-time dashboards and scalable distribution layers — the engineering backbone that keeps AI products running flawlessly.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProjectCard
            icon={LayoutDashboard}
            title="ResponsePlus Medical Dashboard"
            description="Interactive dashboard for visualizing employee data, locations, and project assignments across regions for a medical services company."
            tags={["Python", "Dash", "Plotly", "Pandas", "Gunicorn"]}
            glow="blue"
          />
          <ProjectCard
            icon={ShoppingCart}
            title="Pharmacy Management System"
            description="Core pharmacy platform: RESTful API, inventory management database, and mobile integration support."
            tags={["Node.js", "Express", "Drizzle ORM", "React", "PostgreSQL"]}
            glow="emerald"
          />
          <ProjectCard
            icon={Smartphone}
            title="Radaar El Dawa: Mobile App"
            description="Mobile app for searching drug availability, placing orders, and real-time pharmacy communication."
            tags={["React Native", "Expo", "NativeWind", "TanStack Query"]}
            glow="rose"
          />
        </div>
      </div>
    ),
  },
]

/* ─── HERO SECTION ───────────────────────────────────────────────── */

function Hero({ workRef }: { workRef: React.RefObject<HTMLElement | null> }) {
  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden min-h-screen">

      {/* ── Dithering card fills the full viewport ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full"
      >
        <div className="flex flex-col items-center justify-center min-h-[90vh] md:min-h-screen pt-16 px-6">
          <div className="flex flex-col items-center gap-7 text-center w-full max-w-3xl mx-auto">

            {/* Role badge */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-400" />
              </span>
              <Bot className="h-3.5 w-3.5 text-violet-400" />
              <span className="text-violet-300 text-xs font-semibold tracking-widest uppercase">AI &amp; ML Engineer</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl lg:text-[clamp(3rem,9vw,6.5rem)] font-extrabold tracking-tighter text-white leading-[0.92]"
            >
              Building{" "}
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Intelligent
              </span>
              <br />Systems
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="text-zinc-400 text-sm md:text-lg max-w-xl leading-relaxed"
            >
              Autonomous agents, voice AI, computer vision, and scalable machine learning infrastructure —<br className="hidden md:block" />
              turning cutting-edge models into high-performance products.
            </motion.p>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex items-center gap-2"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-emerald-400 text-xs font-medium tracking-wide">Available for new projects</span>
            </motion.div>

            {/* Terminal typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="w-full"
            >
              <TerminalTypewriter />
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.75 }}
            >
              <ButtonCta
                label="View My Work"
                onClick={() => workRef.current?.scrollIntoView({ behavior: "smooth" })}
              >
                <ArrowDown className="mr-2 h-4 w-4 animate-bounce" />
              </ButtonCta>
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* Scroll hint below card */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="relative z-10 mt-8 flex flex-col items-center gap-1 text-white/20"
      >
        <span className="text-[9px] tracking-[0.35em] uppercase font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"
        />
      </motion.div>
    </section>
  )
}

/* ─── SKILLS BENTO ───────────────────────────────────────────────── */

function SkillsBento() {
  const programming = [
    { label: "Python", variant: "blue" as const },
    { label: "SQL", variant: "cyan" as const },
    { label: "TypeScript", variant: "blue" as const },
  ]

  const frameworks = [
    { label: "TensorFlow", variant: "rose" as const },
    { label: "PyTorch", variant: "rose" as const },
    { label: "Keras", variant: "rose" as const },
    { label: "Scikit-learn", variant: "amber" as const },
    { label: "Hugging Face", variant: "violet" as const },
  ]

  const computerVisionList = [
    { label: "OpenCV", variant: "cyan" as const },
    { label: "YOLO", variant: "cyan" as const },
    { label: "MediaPipe", variant: "cyan" as const },
    { label: "Detectron2", variant: "violet" as const },
    { label: "CLIP", variant: "violet" as const },
    { label: "ORB", variant: "emerald" as const },
    { label: "SIFT", variant: "emerald" as const },
    { label: "RANSAC", variant: "emerald" as const },
  ]

  const nlpList = [
    { label: "Spacy", variant: "blue" as const },
    { label: "NLTK", variant: "blue" as const },
    { label: "Transformers", variant: "violet" as const },
    { label: "Sentence-BERT", variant: "violet" as const },
    { label: "Attention Mechanisms", variant: "amber" as const },
  ]

  const dataScienceList = [
    { label: "Pandas", variant: "blue" as const },
    { label: "NumPy / SciPy", variant: "blue" as const },
    { label: "Matplotlib / Seaborn", variant: "rose" as const },
    { label: "Plotly", variant: "cyan" as const },
    { label: "Data Scraping", variant: "emerald" as const },
  ]

  const mlopsList = [
    { label: "Docker", variant: "blue" as const },
    { label: "Kubernetes", variant: "blue" as const },
    { label: "MLflow", variant: "cyan" as const },
    { label: "TensorBoard", variant: "amber" as const },
    { label: "FastAPI", variant: "emerald" as const },
  ]

  const cloudList = [
    { label: "AWS (EC2, S3, Lambda, SageMaker)", variant: "amber" as const },
    { label: "Google Cloud", variant: "blue" as const },
    { label: "Azure ML", variant: "cyan" as const },
  ]

  const vectorDBsList = [
    { label: "Pinecone", variant: "emerald" as const },
    { label: "FAISS", variant: "blue" as const },
    { label: "Qdrant", variant: "rose" as const },
    { label: "Elasticsearch", variant: "cyan" as const },
    { label: "Redis", variant: "rose" as const },
  ]

  const llmEcosystemList = [
    { label: "LangChain", variant: "violet" as const },
    { label: "LlamaIndex", variant: "violet" as const },
    { label: "Semantic Kernel", variant: "blue" as const },
    { label: "RAG", variant: "emerald" as const },
    { label: "OpenAI / Mistral / Gemini", variant: "cyan" as const },
    { label: "LiveKit", variant: "rose" as const },
  ]

  return (
    <section id="skills" className="relative z-10 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-zinc-500 mb-4">
            <Cpu className="h-3 w-3" />
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white">
            Stack &amp; Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {/* Core skill bars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="md:col-span-1"
          >
            <BentoCard glowColor="rgba(139,92,246,0.15)" className="h-full">
              <div className="flex items-center gap-2 mb-4">
                <Workflow className="h-4 w-4 text-violet-400" />
                <span className="text-white text-sm font-semibold">AI / ML</span>
              </div>
              <div className="space-y-3">
                <SkillBar label="Agentic Systems" level={92} color="bg-violet-500" />
                <SkillBar label="LLM Integration" level={94} color="bg-blue-500" />
                <SkillBar label="RAG Pipelines" level={87} color="bg-cyan-500" />
                <SkillBar label="Voice AI" level={82} color="bg-emerald-500" />
                <SkillBar label="Computer Vision" level={80} color="bg-amber-500" />
              </div>
            </BentoCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="md:col-span-1"
          >
            <BentoCard glowColor="rgba(59,130,246,0.15)" className="h-full">
              <div className="flex items-center gap-2 mb-4">
                <Server className="h-4 w-4 text-blue-400" />
                <span className="text-white text-sm font-semibold">MLOps &amp; Infra</span>
              </div>
              <div className="space-y-3">
                <SkillBar label="Model Deployment (FastAPI)" level={90} color="bg-blue-500" />
                <SkillBar label="Data Pipelines" level={88} color="bg-emerald-500" />
                <SkillBar label="Vector Databases" level={85} color="bg-cyan-500" />
                <SkillBar label="Docker & Cloud Architecture" level={80} color="bg-violet-500" />
                <SkillBar label="PostgreSQL & Redis" level={87} color="bg-amber-500" />
              </div>
            </BentoCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="md:col-span-1"
          >
            <BentoCard glowColor="rgba(34,211,238,0.15)" className="h-full">
              <div className="flex items-center gap-2 mb-4">
                <LayoutDashboard className="h-4 w-4 text-cyan-400" />
                <span className="text-white text-sm font-semibold">Interfaces</span>
              </div>
              <div className="space-y-3">
                <SkillBar label="React / Web Interfaces" level={91} color="bg-cyan-500" />
                <SkillBar label="Dashboard & Analytics" level={89} color="bg-blue-500" />
                <SkillBar label="Three.js / 3D Visualization" level={78} color="bg-violet-500" />
                <SkillBar label="State & Data Management" level={82} color="bg-emerald-500" />
                <SkillBar label="Interactive Animations" level={84} color="bg-rose-500" />
              </div>
            </BentoCard>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <BentoCard glowColor="rgba(59,130,246,0.08)">
            <p className="text-zinc-500 text-xs mb-4 uppercase tracking-widest font-semibold">Programming</p>
            <div className="flex flex-wrap gap-2">
              {programming.map((t) => <AIBadge key={t.label} label={t.label} variant={t.variant} />)}
            </div>
          </BentoCard>

          <BentoCard glowColor="rgba(244,63,94,0.08)">
            <p className="text-zinc-500 text-xs mb-4 uppercase tracking-widest font-semibold">ML/DL Frameworks</p>
            <div className="flex flex-wrap gap-2">
              {frameworks.map((t) => <AIBadge key={t.label} label={t.label} variant={t.variant} />)}
            </div>
          </BentoCard>

          <BentoCard glowColor="rgba(139,92,246,0.08)">
            <p className="text-zinc-500 text-xs mb-4 uppercase tracking-widest font-semibold">LLM Ecosystem</p>
            <div className="flex flex-wrap gap-2">
              {llmEcosystemList.map((t) => <AIBadge key={t.label} label={t.label} variant={t.variant} />)}
            </div>
          </BentoCard>

          <BentoCard glowColor="rgba(34,211,238,0.08)">
            <p className="text-zinc-500 text-xs mb-4 uppercase tracking-widest font-semibold">Computer Vision</p>
            <div className="flex flex-wrap gap-2">
              {computerVisionList.map((t) => <AIBadge key={t.label} label={t.label} variant={t.variant} />)}
            </div>
          </BentoCard>

          <BentoCard glowColor="rgba(59,130,246,0.08)">
            <p className="text-zinc-500 text-xs mb-4 uppercase tracking-widest font-semibold">NLP</p>
            <div className="flex flex-wrap gap-2">
              {nlpList.map((t) => <AIBadge key={t.label} label={t.label} variant={t.variant} />)}
            </div>
          </BentoCard>

          <BentoCard glowColor="rgba(52,211,153,0.08)">
            <p className="text-zinc-500 text-xs mb-4 uppercase tracking-widest font-semibold">Vector DBs</p>
            <div className="flex flex-wrap gap-2">
              {vectorDBsList.map((t) => <AIBadge key={t.label} label={t.label} variant={t.variant} />)}
            </div>
          </BentoCard>

          <BentoCard glowColor="rgba(16,185,129,0.08)">
            <p className="text-zinc-500 text-xs mb-4 uppercase tracking-widest font-semibold">MLOps</p>
            <div className="flex flex-wrap gap-2">
              {mlopsList.map((t) => <AIBadge key={t.label} label={t.label} variant={t.variant} />)}
            </div>
          </BentoCard>

          <BentoCard glowColor="rgba(251,191,36,0.08)">
            <p className="text-zinc-500 text-xs mb-4 uppercase tracking-widest font-semibold">Data Science</p>
            <div className="flex flex-wrap gap-2">
              {dataScienceList.map((t) => <AIBadge key={t.label} label={t.label} variant={t.variant} />)}
            </div>
          </BentoCard>

          <BentoCard glowColor="rgba(251,191,36,0.08)">
            <p className="text-zinc-500 text-xs mb-4 uppercase tracking-widest font-semibold">Cloud</p>
            <div className="flex flex-wrap gap-2">
              {cloudList.map((t) => <AIBadge key={t.label} label={t.label} variant={t.variant} />)}
            </div>
          </BentoCard>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── TIMELINE SECTION ───────────────────────────────────────────── */

function ProjectsTimeline({ sectionRef }: { sectionRef: React.RefObject<HTMLElement | null> }) {
  return (
    <section
      id="projects"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative z-10"
    >

      <div className="max-w-7xl mx-auto pt-16 px-4 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-zinc-500 mb-4">
            <Terminal className="h-3 w-3" />
            Selected Work
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-3">
            Project Log
          </h2>
          <p className="text-zinc-500 text-sm md:text-base max-w-lg">
            A timestamped record of autonomous agents, end-to-end AI products, computer vision architectures, and robust data systems.
          </p>
        </motion.div>
      </div>

      <Timeline data={timelineData} />

      {/* GitHub Call to Action */}
      <div className="flex justify-center pb-24 mt-4 relative z-10 w-full">
        <a
          href="https://github.com/AliMostafaRadwan"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-violet-500/30 transition-all duration-300 backdrop-blur-sm"
        >
          <Github className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
          <span className="text-zinc-300 font-medium group-hover:text-white transition-colors">See more on my GitHub</span>
          <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-violet-400 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
        </a>
      </div>
    </section>
  )
}

/* ─── ABOUT SECTION ──────────────────────────────────────────────── */

function About() {
  return (
    <section id="about" className="relative z-10 py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Top Header & Profile */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mb-20 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="shrink-0 relative"
          >
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(139,92,246,0.15)] relative z-10 bg-zinc-900 flex items-center justify-center">
              <img src="/profile.jpg" alt="Ali Radwan" className="w-full h-full object-cover object-[center_30%]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center md:text-left flex-1"
          >
            <div className="text-[10px] font-mono text-zinc-500 mb-2 uppercase tracking-[0.2em] pl-1">
              About
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 flex items-center justify-center md:justify-start gap-2 md:gap-3">
              <span className="text-zinc-400">About</span>
              <span className="text-zinc-600 font-light text-2xl md:text-4xl">&gt;</span>
              <span className="text-white">Who am I?</span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-lg leading-relaxed max-w-2xl">
              I engineer AI systems that work in the real world. My background spans autonomous agents, voice pipelines,
              computer vision, and scalable ML infrastructures. I care obsessively about the gap between a fragile notebook demo and a
              resilient deployed product — and I close it.
            </p>
          </motion.div>
        </div>

        {/* Skills Area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-24">
          {[
            { icon: Bot, label: "AI Agents", desc: "LangGraph, ReAct, multi-step autonomous pipelines", color: "text-blue-400" },
            { icon: Mic, label: "Voice AI", desc: "LiveKit, Deepgram STT, Cartesia TTS, real-time pipelines", color: "text-cyan-400" },
            { icon: Eye, label: "Computer Vision", desc: "CLIP, YOLO, SuperPoint, semantic + geometric search", color: "text-violet-400" },
            { icon: Database, label: "Data & RAG", desc: "Vector stores, embeddings, retrieval-augmented generation", color: "text-amber-400" },
            { icon: Server, label: "MLOps & Infra", desc: "Model deployment, FastAPI, Docker, cloud architecture", color: "text-emerald-400" },
            { icon: LayoutDashboard, label: "Interfaces", desc: "React, Next.js, Dashboards, visual data interactions", color: "text-rose-400" },
          ].map(({ icon: Icon, label, desc, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col gap-3 p-6 rounded-2xl border border-white/5 bg-black/40 hover:bg-black/60 hover:border-white/10 transition-all duration-300 group"
            >
              <div className={`${color} mb-1 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-white font-semibold text-sm">{label}</span>
              <span className="text-zinc-500 text-xs leading-relaxed">{desc}</span>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
}

/* ─── CONTACT SECTION ────────────────────────────────────────────── */

function Contact() {
  return (
    <section id="contact" className="relative z-10 overflow-hidden">
      <ContactPage />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative mt-24 pt-8 border-t border-white/6 text-center"
      >
        <p className="text-zinc-700 text-xs font-mono tracking-wide">
          © {new Date().getFullYear()} · Built with Next.js, Three.js, LangGraph vibes &amp; Framer Motion
        </p>
      </motion.div>
    </section>
  )
}

/* ─── NAVIGATION ─────────────────────────────────────────────────── */

function Nav() {
  const links = [
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-1 px-3 py-2 rounded-full border border-white/10 bg-black/70 shadow-lg">
        <div className="flex items-center gap-1.5 mr-2 pr-3 border-r border-white/10">
          <div className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_6px_rgba(139,92,246,0.8)]" />
          <span className="text-white text-xs font-bold tracking-wider">AI.dev</span>
        </div>
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="px-3 py-1.5 rounded-full text-xs text-zinc-400 hover:text-white hover:bg-white/8 transition-all duration-200 font-medium"
          >
            {l.label}
          </a>
        ))}
      </div>
    </motion.nav>
  )
}

/* ─── ROOT PAGE ──────────────────────────────────────────────────── */

export default function HomePage() {
  const projectsRef = useRef<HTMLElement>(null)

  return (
    <>
      <Nav />

      {/* GLOBAL DITHERING THEME BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-zinc-950 flex flex-col items-center justify-center overflow-hidden">
        <Suspense fallback={<div className="absolute inset-0 bg-violet-950/20" />}>
          <div className="absolute inset-0 z-0 opacity-50 dark:opacity-40 mix-blend-screen w-full h-full">
            <Dithering
              colorBack="#00000000"
              colorFront="#7c3aed"
              shape="warp"
              type="4x4"
              speed={0.25}
              className="size-full"
              minPixelRatio={1}
            />
          </div>
        </Suspense>
        {/* Glows from the hero section, expanded globally */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-violet-600/10 blur-[150px] rounded-[100%]" />
      </div>

      <main className="relative z-10 w-full overflow-x-hidden pt-12">
        <Hero workRef={projectsRef} />
        <SkillsBento />
        <ProjectsTimeline sectionRef={projectsRef} />
        <About />
        <Contact />
      </main>
    </>
  )
}
