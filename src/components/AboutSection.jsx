import React from "react"
import { motion } from "framer-motion"
import logo from "../assets/logo.png"
import {
  Code2,
  Database,
  BrainCircuit,
  Cloud,
  Zap,
  Workflow,
  Bot,
  Globe,
  FileCode,
  Braces,
  Palette,
  Binary,
  Leaf,
  Sparkles,
  Star,
  CloudLightning,
  Search,
} from "lucide-react"

// Core development stack — inner ring
const coreStack = [
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Globe },
  { name: "Node.js", icon: Zap },
  { name: "JavaScript", icon: FileCode },
  { name: "TypeScript", icon: Braces },
  { name: "HTML5", icon: Code2 },
  { name: "CSS3", icon: Palette },
  { name: "Tailwind CSS", icon: Code2 },
]

// Data & AI stack — outer ring
const aiStack = [
  { name: "Python", icon: Binary },
  { name: "MongoDB", icon: Leaf },
  { name: "PostgreSQL", icon: Database },
  { name: "Supabase", icon: CloudLightning },
  { name: "OpenAI", icon: Sparkles },
  { name: "Claude", icon: Bot },
  { name: "Gemini", icon: Star },
  { name: "Google", icon: Search },
]

const differentiators = [
  {
    icon: BrainCircuit,
    title: "AI-native thinking",
    desc: "We design for intelligence from day one, not bolted on after the fact.",
  },
  {
    icon: Workflow,
    title: "End-to-end delivery",
    desc: "From architecture to deployment, one team owns the entire outcome.",
  },
  {
    icon: Cloud,
    title: "Built to scale",
    desc: "Cloud-native systems that grow with your business, without rewrites.",
  },
]

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-black px-6 py-32 text-white"
    >
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#31E387]/5 blur-[140px]" />

      {/* Large Background Logo Watermark */}
      <motion.div
        className="pointer-events-none absolute -right-20 top-1/4 z-0 h-[600px] w-[600px] opacity-[0.07] lg:opacity-[0.12]"
        initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
        whileInView={{ opacity: 0.12, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src={logo}
          alt=""
          className="h-full w-full object-contain filter grayscale brightness-200"
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#31E387]" />
            <span className="text-sm font-medium uppercase tracking-[0.3em] text-[#31E387]">
              About Ibex AI
            </span>
          </div>

          <h2 className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            Intelligence
            <br />
            <span className="bg-gradient-to-r from-white via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
              built to work.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-400 sm:text-xl">
            Ibex AI combines intelligent automation, modern software, and AI
            agents to help businesses eliminate repetitive work and turn ideas
            into scalable systems.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-500 sm:text-lg">
            We don't ship prototypes dressed up as products. Every system we
            build is engineered for production from the first commit — tested,
            documented, and designed to keep working long after launch day.
          </p>
        </motion.div>

        {/* Differentiators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {differentiators.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 backdrop-blur-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#31E387]/10">
                  <Icon size={18} className="text-[#31E387]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {item.title}
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </motion.div>

        {/* Tech Stack Interactive Area */}
        <div className="relative mt-28 flex min-h-[620px] items-center justify-center">
          {/* Orbit rings */}
          <div className="absolute h-[280px] w-[280px] rounded-full border border-white/[0.06] sm:h-[380px] sm:w-[380px]" />
          <div className="absolute h-[420px] w-[420px] rounded-full border border-white/[0.04] sm:h-[560px] sm:w-[560px]" />

          {/* Center Brand Node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full border border-[#31E387]/20 bg-black/80 shadow-[0_0_80px_rgba(49,227,135,0.12)] backdrop-blur-xl sm:h-40 sm:w-40"
          >
            <div className="flex flex-col items-center justify-center p-4">
              <img
                src={logo}
                alt="Ibex AI"
                className="h-10 w-10 object-contain sm:h-12 sm:w-12"
              />
              <div className="mt-1 text-center">
                <span className="text-sm font-bold tracking-tight text-white">
                  Ibex
                </span>{" "}
                <span className="text-sm font-bold text-[#31E387]">AI</span>
              </div>
            </div>
          </motion.div>

          {/* Inner orbit — core dev stack */}
          <motion.div
            className="absolute h-[280px] w-[280px] sm:h-[380px] sm:w-[380px]"
            animate={{ rotate: 360 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {coreStack.map((tech, index) => {
              const Icon = tech.icon
              const angle = (index / coreStack.length) * 360

              return (
                <div
                  key={tech.name}
                  className="absolute left-1/2 top-1/2 -ml-8 -mt-8 h-16 w-16 sm:-ml-10 sm:-mt-10 sm:h-20 sm:w-20"
                  style={{
                    transform: `rotate(${angle}deg) translateY(-140px) rotate(-${angle}deg)`,
                  }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="flex h-full w-full flex-col items-center justify-center gap-1 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all hover:border-[#31E387]/30 hover:bg-[#31E387]/10"
                  >
                    <Icon size={22} className="text-[#31E387]" />
                    <span className="text-[9px] font-medium text-neutral-400 sm:text-[10px]">
                      {tech.name}
                    </span>
                  </motion.div>
                </div>
              )
            })}
          </motion.div>

          {/* Outer orbit — data & AI stack, counter-rotating */}
          <motion.div
            className="absolute h-[420px] w-[420px] sm:h-[560px] sm:w-[560px]"
            animate={{ rotate: -360 }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {aiStack.map((tech, index) => {
              const Icon = tech.icon
              const angle = (index / aiStack.length) * 360

              return (
                <div
                  key={tech.name}
                  className="absolute left-1/2 top-1/2 -ml-8 -mt-8 h-16 w-16 sm:-ml-10 sm:-mt-10 sm:h-20 sm:w-20"
                  style={{
                    transform: `rotate(${angle}deg) translateY(-210px) rotate(-${angle}deg)`,
                  }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 45,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="flex h-full w-full flex-col items-center justify-center gap-1 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all hover:border-[#31E387]/30 hover:bg-[#31E387]/10"
                  >
                    <Icon size={20} className="text-[#31E387]" />
                    <span className="text-[9px] font-medium text-neutral-400 sm:text-[10px]">
                      {tech.name}
                    </span>
                  </motion.div>
                </div>
              )
            })}
          </motion.div>

          {/* Ambient center glow */}
          <div className="pointer-events-none absolute h-40 w-40 rounded-full bg-[#31E387]/10 blur-[80px]" />
        </div>

        {/* Bottom Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
            <div className="text-3xl font-bold text-white">AI</div>
            <p className="mt-2 text-sm text-neutral-500">
              Intelligent systems that adapt to your workflow.
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
            <div className="text-3xl font-bold text-white">Automation</div>
            <p className="mt-2 text-sm text-neutral-500">
              Repetitive processes transformed into autonomous workflows.
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
            <div className="text-3xl font-bold text-white">Scale</div>
            <p className="mt-2 text-sm text-neutral-500">
              Systems designed to grow alongside your business.
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
            <div className="text-3xl font-bold text-white">Speed</div>
            <p className="mt-2 text-sm text-neutral-500">
              Ship fast, without cutting corners on quality.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection