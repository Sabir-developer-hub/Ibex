import React, { useState } from "react"
import { motion } from "framer-motion"

const team = [
  {
    id: "mgmt",
    name: "M. Nadeem Anjum",
    role: "Management",
    x: 50,
    y: 12,
    parent: null,
    tier: "root",
  },
  {
    id: "pm",
    name: "Zahid Imran",
    role: "Project Manager",
    x: 50,
    y: 40,
    parent: "mgmt",
    tier: "lead",
  },
  {
    id: "dev",
    name: "Sabir Ali",
    role: "Lead Developer",
    x: 20,
    y: 60,
    parent: "pm",
    tier: "member",
  },
  {
    id: "qa",
    name: "Asif Ali",
    role: "QA & Testing",
    x: 50,
    y: 65,
    parent: "pm",
    tier: "member",
  },
  {
    id: "design",
    name: "Open Position",
    role: "UI / UX Designer",
    x: 80,
    y: 60,
    parent: "pm",
    tier: "member",
  },
  {
    id: "ai",
    name: "Open Position",
    role: "AI / ML Engineer",
    x: 25,
    y: 90,
    parent: "dev",
    tier: "member",
  },
  {
    id: "devops",
    name: "Open Position",
    role: "DevOps Engineer",
    x: 60,
    y: 90,
    parent: "qa",
    tier: "member",
  },
  {
    id: "cybersecurity",
    name: "Zain",
    role: "Cybersecurity Engineer",
    x: 40,
    y: 90,
    parent: "qa",
    tier: "member",
  },
]

const initials = (name) =>
  name === "Open Position"
    ? "+"
    : name
        .split(" ")
        .map((w) => w[0])
        .slice(0, 2)
        .join("")

const TeamSection = () => {
  const [hoveredNode, setHoveredNode] = useState(null)

  const nodeById = Object.fromEntries(
    team.map((n) => [n.id, n])
  )

  const connections = team.filter((n) => n.parent)

  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-black px-6 py-32">
      {/* Ambient Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#31E387]/5
          blur-[160px]
        "
      />

      <div className="relative mx-auto max-w-6xl">

        {/* =========================
            Heading
        ========================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mx-auto mb-20 max-w-2xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#31E387]" />

            <span className="text-sm font-medium uppercase tracking-[0.3em] text-[#31E387]">
              The Team
            </span>

            <span className="h-px w-10 bg-[#31E387]" />
          </div>

          <h2 className="text-5xl font-bold tracking-[-0.03em] text-white sm:text-6xl">
            People behind{" "}
            <span className="bg-gradient-to-r from-white via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
              Ibex AI.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-neutral-400">
            A small, senior team — every person owns their part end to end.
          </p>
        </motion.div>

        {/* =========================
            Organization Tree
        ========================= */}
        <div className="relative h-[780px] w-full sm:h-[700px]">

          {/* =========================
              SVG Connections
          ========================= */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="
              pointer-events-none
              absolute
              inset-0
              z-0
              h-full
              w-full
            "
          >
            {connections.map((node) => {
              const parent = nodeById[node.parent]

              const isHighlighted =
                hoveredNode === node.id ||
                hoveredNode === parent.id

              const controlY1 =
                parent.y + (node.y - parent.y) * 0.5

              const controlY2 =
                parent.y + (node.y - parent.y) * 0.5

              const d = `
                M ${parent.x} ${parent.y}
                C ${parent.x} ${controlY1},
                  ${node.x} ${controlY2},
                  ${node.x} ${node.y}
              `

              return (
                <motion.path
                  key={`${parent.id}-${node.id}`}
                  d={d}
                  fill="none"
                  stroke="#31E387"
                  strokeWidth={
                    isHighlighted ? "0.6" : "0.25"
                  }
                  strokeOpacity={
                    isHighlighted ? "0.9" : "0.35"
                  }
                  strokeDasharray={
                    node.name === "Open Position"
                      ? "0.8 0.8"
                      : "none"
                  }
                  initial={{
                    pathLength: 0,
                    opacity: 0,
                  }}
                  whileInView={{
                    pathLength: 1,
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    delay: 0.2,
                    ease: "easeInOut",
                  }}
                />
              )
            })}
          </svg>

          {/* =========================
              Team Nodes
          ========================= */}
          {team.map((node, i) => (
            <motion.div
              key={node.id}
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay:
                  node.tier === "root"
                    ? 0
                    : node.tier === "lead"
                    ? 0.3
                    : 0.5 + i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                absolute
                z-10
                -translate-x-1/2
                -translate-y-1/2
              "
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
              }}
              onMouseEnter={() =>
                setHoveredNode(node.id)
              }
              onMouseLeave={() =>
                setHoveredNode(null)
              }
            >
              {/* Node + Label */}
              <div className="flex flex-col items-center gap-3">

                {/* =========================
                    Avatar Circle
                ========================= */}
                <motion.div
                  whileHover={{
                    scale: 1.1,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className={`
                    group
                    flex
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-full
                    border
                    backdrop-blur-xl
                    transition-all
                    duration-300

                    ${
                      node.tier === "root"
                        ? `
                          h-24
                          w-24
                          border-[#31E387]/40
                          bg-[#31E387]/10
                          shadow-[0_0_60px_rgba(49,227,135,0.2)]
                          sm:h-28
                          sm:w-28
                        `
                        : node.tier === "lead"
                        ? `
                          h-20
                          w-20
                          border-[#31E387]/25
                          bg-white/[0.04]
                          hover:border-[#31E387]/60
                          sm:h-24
                          sm:w-24
                        `
                        : node.name === "Open Position"
                        ? `
                          h-16
                          w-16
                          border-dashed
                          border-white/15
                          bg-white/[0.01]
                          hover:border-[#31E387]/40
                          sm:h-20
                          sm:w-20
                        `
                        : `
                          h-16
                          w-16
                          border-white/10
                          bg-white/[0.04]
                          hover:border-[#31E387]/60
                          sm:h-20
                          sm:w-20
                        `
                    }
                  `}
                >
                  <span
                    className={`
                      font-bold

                      ${
                        node.tier === "root"
                          ? "text-xl text-[#31E387]"
                          : node.name === "Open Position"
                          ? "text-lg text-neutral-600"
                          : "text-lg text-white"
                      }
                    `}
                  >
                    {initials(node.name)}
                  </span>
                </motion.div>

                {/* =========================
                    Name + Role
                ========================= */}
                <div className="text-center">

                  <div
                    className={`
                      whitespace-nowrap
                      text-xs
                      font-semibold
                      sm:text-sm

                      ${
                        node.name === "Open Position"
                          ? "text-neutral-500"
                          : "text-white"
                      }
                    `}
                  >
                    {node.name}
                  </div>

                  <div
                    className="
                      mt-0.5
                      whitespace-nowrap
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-wider
                      text-[#31E387]/80
                      sm:text-xs
                    "
                  >
                    {node.role}
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection