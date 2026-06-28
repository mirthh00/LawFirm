'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X, Scale } from 'lucide-react'
import Link from 'next/link'
import Image from "next/image";

const NAV_LINKS = [
  { label: 'Home',           href: '#home' },
  { label: 'About',          href: '#about' },
  { label: 'Practice Areas', href: '#practice-areas' },
  { label: 'Resources',      href: '#resources' },
  { label: 'Contact',        href: '#contact' },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const textColor    = scrolled ? 'text-deep-blue'  : 'text-white'
  const subTextColor = scrolled ? 'text-deep-blue/50' : 'text-white/55'
  const linkColor    = scrolled ? 'text-gray-700'   : 'text-white/85'

  return (
    <>
      {/* ── Main bar ── */}
      <motion.nav
        aria-label="Primary navigation"
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/96 backdrop-blur-sm shadow-[0_1px_12px_rgba(0,0,0,0.08)] py-2'
            : 'bg-transparent py-2'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-6">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
 <Image
  src="/images/logo4.png"
  alt="Makwarela AS Attorneys"
  width={500}
  height={100}
  priority
  className="w-56 md:w-72 lg:w-80 h-24 object-cover"
/>
</Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className={`font-inter text-sm font-medium transition-colors duration-200 hover:text-[#d4bb2a] ${linkColor}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-5 shrink-0">
            <a
              href="tel:+27110000000"
              className={`flex items-center gap-2 font-inter text-sm font-medium transition-colors hover:text-[#d4bb2a] ${textColor}`}
            >
              <Phone className="w-3.5 h-3.5" />
              +27 11 000 0000
            </a>
            <a
              href="#contact"
              className="bg-[#d4bb2a] text-white font-inter text-sm font-semibold px-5 py-2.5 rounded hover:opacity-90 active:scale-[0.97] transition-all"
            >
              Book Consultation
            </a>
          </div>

          {/* Hamburger */}
          <button
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className={`lg:hidden p-2 -mr-2 transition-colors ${textColor}`}
            onClick={() => setMobileOpen(o => !o)}
          >
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
         <>
  <motion.div
    className="fixed inset-0 z-30 bg-[#071426]/70 backdrop-blur-sm"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={() => setMobileOpen(false)}
  />

  <motion.div
    className="fixed inset-0 z-40 bg-[#0B1F3A]/95 backdrop-blur-xl flex flex-col px-8 pt-24 pb-10 overflow-y-auto"
    initial={{ x: "100%" }}
    animate={{ x: 0 }}
    exit={{ x: "100%" }}
    transition={{ duration: 0.3 }}
  >
            {/* Nav links */}
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col">
                {NAV_LINKS.map(({ label, href }, i) => (
                  <motion.li
                    key={label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i + 0.1 }}
                  >
                    <a
                      href={href}
                      className="flex items-center justify-between text-[26px] md:text-[28px] font-medium text-white hover:text-[#d4bb2a] transition-all py-4 border-b border-white/10"
                      onClick={() => setMobileOpen(false)}
                    >
                      {label}
                      <span className="text-white/30 text-lg">›</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Bottom actions */}
            <motion.div
              className="mt-auto pt-8 space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.42 }}
            >
              <a
                href="tel:+27110000000"
              className="flex items-center gap-3 text-white/80 text-sm"
              >
                <Phone className="w-4 h-4 text-[#d4bb2a]" />
                +27 11 000 0000
              </a>
              <a
                href="#contact"
              className="block w-full bg-[#d4bb2a] text-white font-semibold py-4 rounded-lg text-center hover:opacity-90 transition"
                onClick={() => setMobileOpen(false)}
              >
                Book a Consultation
              </a>
            </motion.div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}