import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import logo from "../assets/logo.png"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("#home")

  // Handle header background styling on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Observe sections to highlight active nav link dynamically
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`)
        }
      })
    }

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when section occupies main viewport space
      threshold: 0,
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    navLinks.forEach((link) => {
      const sectionId = link.href.replace("#", "")
      const element = document.getElementById(sectionId)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setActiveSection(href)
    setMobileMenuOpen(false)

    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    } else if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0, x: "-50%" }}
        animate={{
          y: 0,
          opacity: 1,
          x: "-50%",
          top: scrolled ? 16 : 24,
          borderRadius: scrolled ? 9999 : 16,
          backgroundColor: scrolled
            ? "rgba(0, 0, 0, 0.65)"
            : "rgba(0, 0, 0, 0)",
          borderColor: scrolled
            ? "rgba(255, 255, 255, 0.12)"
            : "rgba(255, 255, 255, 0)",
          boxShadow: scrolled
            ? "0 12px 40px rgba(0, 0, 0, 0.5)"
            : "0 0 0 rgba(0, 0, 0, 0)",
        }}
        transition={{
          y: { type: "spring", stiffness: 120, damping: 20 },
          opacity: { duration: 0.6 },
          top: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
          borderRadius: { duration: 0.3 },
          backgroundColor: { duration: 0.3 },
          borderColor: { duration: 0.3 },
        }}
        className="
          fixed
          left-1/2
          z-50
          w-[calc(100%-2rem)]
          max-w-6xl
          h-20
          border
          overflow-hidden
          backdrop-blur-xl
        "
      >
        {/* Liquid Glowing Background */}
        <motion.div
          animate={{ opacity: scrolled ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          <motion.div
            animate={{
              x: ["-10%", "70%", "-10%"],
              y: ["-20%", "20%", "-20%"],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-48 h-24 rounded-full bg-[#31E387]/15 blur-3xl"
          />
          <motion.div
            animate={{
              x: ["70%", "-10%", "70%"],
              y: ["20%", "-20%", "20%"],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-0 w-40 h-24 rounded-full bg-emerald-500/15 blur-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] to-transparent" />
        </motion.div>

        {/* Navbar Inner Content */}
        <div className="relative flex h-full items-center justify-between px-6">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-1 shrink-0 z-10"
          >
            <img src={logo} alt="Ibex AI" className="h-15 w-15 object-contain" />
            <span className="text-xl font-bold tracking-tight text-white">
              Ibex.<span className="text-[#31E387]">AI</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`
                    relative
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    font-medium
                    transition-colors
                    duration-200
                    ${isActive ? "text-white" : "text-neutral-400 hover:text-white"}
                  `}
                >
                  {link.name}

                  {/* Animated Green Underline Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-1 left-3 right-3 h-[2px] rounded-full bg-[#31E387] shadow-[0_0_10px_#31E387]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0 z-10">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="
                hidden
                sm:inline-flex
                rounded-full
                bg-[#31E387]
                px-5
                py-2.5
                text-sm
                font-semibold
                text-black
                transition-all
                duration-200
                hover:bg-[#45ef98]
                hover:scale-[1.03]
                active:scale-[0.97]
              "
            >
              Get Started
            </a>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-white/10"
              aria-label="Toggle Navigation Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-28 left-4 right-4 z-40 p-5 rounded-2xl bg-neutral-900/90 border border-white/10 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`
                      relative flex items-center justify-between px-4 py-2.5 text-base font-medium rounded-xl transition-colors
                      ${
                        isActive
                          ? "bg-[#31E387]/10 text-[#31E387]"
                          : "text-neutral-200 hover:text-white hover:bg-white/5"
                      }
                    `}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeMobileIndicator"
                        className="h-2 w-2 rounded-full bg-[#31E387] shadow-[0_0_8px_#31E387]"
                      />
                    )}
                  </a>
                )
              })}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="mt-2 w-full text-center rounded-xl bg-[#31E387] py-3 text-sm font-semibold text-black"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar