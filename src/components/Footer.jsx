import React from "react"
import { motion } from "framer-motion"
// React Icons imports
import { FaGithub, FaLinkedinIn, FaXTwitter, FaDiscord } from "react-icons/fa6"
import { HiEnvelope, HiPhone, HiMapPin } from "react-icons/hi2"
import FingerprintLogo from "../assets/logo.png"

const links = {
  Company: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ],
  Services: [
    { label: "AI Agents & Automation", href: "#services" },
    { label: "Custom AI Integrations", href: "#services" },
    { label: "AI-Powered Analytics", href: "#services" },
    { label: "AI Strategy & Consulting", href: "#services" },
  ],
}

const socials = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaXTwitter, href: "https://x.com", label: "Twitter" },
  { icon: FaDiscord, href: "https://discord.com", label: "Discord" },
]

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 bg-black overflow-hidden">
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#31E387]/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-24">
        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <img
                src={FingerprintLogo}
                alt="Ibex AI"
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-bold tracking-tight text-white">
                Ibex AI
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-neutral-500">
              We design and ship AI systems built for production agents,
              integrations, and analytics that hold up at scale.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-neutral-500 transition-all hover:border-[#31E387]/40 hover:bg-[#31E387]/10 hover:text-[#31E387]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link Columns */}
          {Object.entries(links).map(([heading, items], i) => (
            <motion.div
              key={heading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
            >
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31E387]">
                {heading}
              </div>
              <ul className="mt-5 space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="group flex items-center text-sm text-neutral-500 transition-colors hover:text-white"
                    >
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                        {item.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31E387]">
              Get in Touch
            </div>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-sm text-neutral-500">
                <HiEnvelope className="mt-0.5 h-4 w-4 shrink-0 text-[#31E387]/70" />
                <a
                  href="mailto:hello@ibexai.com"
                  className="transition-colors hover:text-white"
                >
                  hello@ibexai.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-neutral-500">
                <HiPhone className="mt-0.5 h-4 w-4 shrink-0 text-[#31E387]/70" />
                <span>+92 300 0000000</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-neutral-500">
                <HiMapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#31E387]/70" />
                <span>Islamabad, Pakistan</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider Line */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row"
        >
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} Ibex AI. All rights reserved.
          </p>
          <p className="text-xs text-neutral-600">
            Built with intelligence, by Ibex AI.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer