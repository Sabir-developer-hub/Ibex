import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.png'

const headlines = [
  { first: 'No Limits.', second: 'Just Intelligence.' },
  { first: 'Work Smarter.', second: 'Move Faster.' },
  { first: 'Built for Humans.', second: 'Powered by AI.' },
  { first: 'Think Bigger.', second: 'Automate More.' },
  { first: 'Your Work.', second: 'Reimagined.' },
  { first: 'Intelligence', second: 'That Gets Things Done.' },
  { first: 'Less Busywork.', second: 'More Impact.' },
  { first: 'Humans Lead.', second: 'AI Accelerates.' },
  { first: 'Automate the Routine.', second: 'Elevate the Important.' },
  { first: 'AI That Works.', second: 'Not Just Talks.' },
]

const HeroSection = () => {
  // Initialize with a random index directly
  const [headlineIndex, setHeadlineIndex] = useState(() => 
    Math.floor(Math.random() * headlines.length)
  )
  const [progress, setProgress] = useState(0)

  // Combined smooth 10s rotation timer
  useEffect(() => {
    const ROTATION_TIME_MS = 10000
    const UPDATE_INTERVAL_MS = 50

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setHeadlineIndex((prevIndex) => (prevIndex + 1) % headlines.length)
          return 0
        }
        return prev + (UPDATE_INTERVAL_MS / ROTATION_TIME_MS) * 100
      })
    }, UPDATE_INTERVAL_MS)

    return () => clearInterval(progressTimer)
  }, [])

  const headline = headlines[headlineIndex]

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center">
      
      {/* GPU-Accelerated Gradient Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background: "radial-gradient(circle at 25% 35%, #093F23 0%, #062e19 30%, #04200f 55%, #000000 80%)"
        }}
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Full Canvas Background Logo */}
      <motion.div
        className="absolute inset-y-0 right-0 w-full md:w-2/3 h-full pointer-events-none flex items-center justify-end z-0 opacity-30 md:opacity-80 translate-x-[25%]"
        initial={{
          opacity: 0,
          x: 120,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
          y: [0, -15, 0],
          rotate: [0, 1.5, 0, -1.5, 0],
        }}
        transition={{
          opacity: { duration: 1.2, ease: "easeOut" },
          x: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
          scale: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
          rotate: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
        }}
      >
        <img
          src={logo}
          alt="Company Brand Logo"
          className="h-full w-full object-contain object-right"
        />
      </motion.div>

      {/* Hero Content Layer */}
      <div className="relative z-10 w-full pl-4 sm:pl-8 lg:pl-12 pr-6">
        <div className="max-w-6xl">
          
          {/* Eyebrow Tag */}
          <motion.div
            className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.3em] text-[#31E387]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="h-px w-10 bg-[#31E387]" />
            Human + AI
          </motion.div>

          {/* Rotating Headline */}
          <AnimatePresence mode="wait">
            <motion.div
              key={headlineIndex}
              className="flex flex-col"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <span className="font-bold leading-[1] tracking-[-0.04em] bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent text-[clamp(3.5rem,9vw,8rem)]">
                {headline.first}
              </span>
              <span className="font-bold leading-[1] tracking-[-0.04em] bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent text-[clamp(4.5rem,12vw,9rem)]">
                {headline.second}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Body Copy */}
          <motion.p
            className="mt-8 max-w-xl text-lg sm:text-xl leading-relaxed text-neutral-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Intelligent automation that works alongside your team, turning repetitive work into meaningful progress.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <button className="rounded-full bg-[#31E387] px-8 py-4 font-semibold text-black transition hover:bg-[#45ef98] hover:scale-[1.02] active:scale-[0.98]">
              Get Started
            </button>
            <button className="rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 hover:border-white/25 active:scale-[0.98]">
              Explore Automation
            </button>
          </motion.div>

          {/* Rotator Progress Bar */}
          <div className="mt-12 h-1 w-48 overflow-hidden rounded-full bg-white/10">
            <div 
              className="h-full bg-[#31E387] transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection