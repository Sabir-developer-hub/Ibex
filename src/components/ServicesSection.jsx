import React from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'AI Agents & Automation',
    desc: 'Custom autonomous agents that handle repetitive workflows, freeing your team to focus on decisions that actually need a human.',
    icon: (
      <path d="M32 8 L32 16 M32 48 L32 56 M8 32 L16 32 M48 32 L56 32 M32 20 A12 12 0 1 1 31.99 20 M20 44 L26 38 M44 44 L38 38" />
    ),
  },
  {
    title: 'Custom AI Integrations',
    desc: 'We embed intelligence directly into your existing stack — CRMs, internal tools, customer platforms — no rip-and-replace required.',
    icon: (
      <path d="M20 20 L44 20 L44 44 L20 44 Z M20 20 L8 8 M44 20 L56 8 M20 44 L8 56 M44 44 L56 56 M28 28 L36 36 M36 28 L28 36" />
    ),
  },
  {
    title: 'AI-Powered Analytics',
    desc: 'Turn raw operational data into predictive insight — dashboards that tell you what’s coming, not just what already happened.',
    icon: (
      <path d="M10 50 L10 10 M10 50 L54 50 M18 42 L18 30 M30 42 L30 20 M42 42 L42 26" />
    ),
  },
  {
    title: 'AI Strategy & Consulting',
    desc: 'Not sure where AI fits in your business yet? We map the highest-leverage use cases and build the roadmap to ship them.',
    icon: (
      <path d="M32 6 L38 22 L55 22 L41 32 L47 50 L32 39 L17 50 L23 32 L9 22 L26 22 Z" />
    ),
  },
]

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-black
        px-3
        pt-0
        pb-3
        sm:px-5
        sm:pb-5
      "
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-[2rem]
          bg-white
          px-6
          pt-12
          pb-20
          text-black
          sm:rounded-[3rem]
          sm:px-10
          sm:pt-16
          sm:pb-28
          lg:px-16
          lg:pt-20
          lg:pb-32
        "
      >
        {/* Ambient Green Glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-40
            -top-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#31E387]/10
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-60
            -left-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#31E387]/5
            blur-3xl
          "
        />

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mx-auto mb-16 max-w-4xl text-center sm:mb-20"
          >
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#31E387]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#159447] sm:text-sm">
                What We Do
              </span>

              <span className="h-px w-8 bg-[#31E387]" />
            </div>

            <h2
              className="
                text-5xl
                font-bold
                leading-[0.95]
                tracking-[-0.05em]
                text-black
                sm:text-6xl
                lg:text-8xl
              "
            >
              Services
              <br />
              <span
                className="
                  bg-gradient-to-r
                  from-black
                  via-neutral-700
                  to-neutral-400
                  bg-clip-text
                  text-transparent
                "
              >
                built for scale.
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-8
                max-w-2xl
                text-base
                leading-relaxed
                text-neutral-500
                sm:text-lg
              "
            >
              We combine artificial intelligence, automation, and modern
              software engineering to build systems that actually move your
              business forward.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.75rem]
                  border
                  border-black/[0.07]
                  bg-black/[0.025]
                  p-8
                  transition-shadow
                  duration-500
                  hover:border-[#31E387]/30
                  hover:bg-[#31E387]/[0.035]
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                  sm:p-10
                "
              >
                {/* Hover Glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-[#31E387]/10
                    blur-3xl
                  "
                />

                <div className="relative z-10">

                  {/* Icon */}
                  <div
                    className="
                      mb-8
                      inline-flex
                      rounded-2xl
                      border
                      border-black/[0.08]
                      bg-white
                      p-4
                      shadow-sm
                      transition-all
                      duration-300
                      group-hover:border-[#31E387]/30
                      group-hover:shadow-md
                    "
                  >
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 64 64"
                      fill="none"
                      stroke="#159447"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="
                        transition-transform
                        duration-500
                        group-hover:scale-110
                      "
                    >
                      {service.icon}
                    </svg>
                  </div>

                  {/* Number */}
                  <div
                    className="
                      absolute
                      right-0
                      top-0
                      text-sm
                      font-medium
                      tracking-[0.2em]
                      text-neutral-300
                    "
                  >
                    0{i + 1}
                  </div>

                  {/* Content */}
                  <h3
                    className="
                      mb-4
                      text-2xl
                      font-semibold
                      tracking-tight
                      text-black
                      sm:text-3xl
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      max-w-xl
                      text-base
                      leading-relaxed
                      text-neutral-500
                      sm:text-lg
                    "
                  >
                    {service.desc}
                  </p>

                  {/* Bottom Accent */}
                  <div className="mt-8 flex items-center gap-3">
                    <span
                      className="
                        h-px
                        w-8
                        bg-[#31E387]
                        transition-all
                        duration-500
                        group-hover:w-14
                      "
                    />

                    <span
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-neutral-400
                        transition-colors
                        duration-300
                        group-hover:text-[#159447]
                      "
                    >
                      Explore
                    </span>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Statement */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mx-auto mt-20 max-w-3xl text-center sm:mt-24"
          >
            <p
              className="
                text-2xl
                font-medium
                leading-tight
                tracking-tight
                text-neutral-800
                sm:text-3xl
              "
            >
              From the first idea to production,
              <span className="text-[#159447]">
                {' '}we build intelligence that works.
              </span>
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default ServicesSection