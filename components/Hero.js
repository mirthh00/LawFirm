'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MessageCircle, BadgeDollarSign, UserCheck, Lightbulb } from 'lucide-react'

const TRUST = [
  { Icon: MessageCircle, label: 'Clear Communication' },
  { Icon: BadgeDollarSign, label: 'Transparent Fees' },
  { Icon: UserCheck,      label: 'Personal Attention' },
  { Icon: Lightbulb,      label: 'Practical Legal Solutions' },
]

const rise = (delay) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.75, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/hero2.jpg"
        alt="High Court of South Africa"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
{/* Main blue tint */}
<div className="absolute inset-0 bg-[#173B6C]/65 z-10" />

{/* Bottom fade for depth */}
<div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#173B6C] via-[#173B6C]/60 to-transparent z-20" />
      {/* Dark blue tinted overlay */}

      {/* Slight blur layer for legibility */}
      <div className="absolute inset-0 backdrop-blur-[2px]" />
      {/* Subtle bottom vignette */}
    

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center py-36">

        {/* Eyebrow */}
        <motion.span
          className="inline-block font-inter text-[#d4bb2a] text-xs font-semibold tracking-[0.28em] uppercase mb-7"
          {...rise(0.25)}
        >
          Johannesburg's trusted legal counsel
        </motion.span>

        {/* Headline */}
        <motion.h1
          className="font-cormorant text-5xl sm:text-6xl lg:text-[76px] text-white font-light leading-[1.08] mb-6"
          {...rise(0.42)}
        >
          Legal guidance when{' '}
          <br className="hidden sm:block" />
          <em className="italic" style={{ color: '#d4bb2a' }}>you need it most</em>
        </motion.h1>

        {/* Divider */}
        <motion.div
          className="w-10 h-px bg-[#d4bb2a]/60 mb-7"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
        />

        {/* Sub-text */}
        <motion.p
          className="font-inter text-white/72 text-base sm:text-lg max-w-xl leading-relaxed mb-10"
          {...rise(0.58)}
        >
          We listen carefully, explain your legal position in plain language,
          and help you move forward with confidence - whatever your situation.
        </motion.p>

        {/* CTA row */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-16"
          {...rise(0.72)}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#d4bb2a] text-white font-inter font-semibold text-sm sm:text-base px-8 py-4 rounded hover:opacity-90 active:scale-[0.98] transition-all"
          >
            Tell us what happened
          </a>
         <motion.a
  href="#contact"
  whileHover={{ y: -3, scale: 1.03 }}
  whileTap={{ scale: 0.96 }}
  transition={{ duration: 0.2 }}
  className="inline-flex items-center justify-center rounded bg-[#d4bb2a] px-8 py-4 font-inter text-sm font-semibold text-white shadow-md hover:bg-[#c8af24]"
>
  Book a Consultation
</motion.a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 w-full max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          {TRUST.map(({ Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-3">
              <div className="w-11 h-11 rounded-full border border-white/22 flex items-center justify-center">
                <Icon className="text-[#c8af24]" size={17} />
              </div>
              <span className="font-inter text-white/70 text-xs sm:text-sm text-center leading-snug">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Animated scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.7 }}
      >
        <span className="font-inter text-[9px] text-white/35 tracking-[0.25em] uppercase">
          Scroll
        </span>
        <motion.span
          className="block w-px h-7 bg-white/25"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          style={{ originY: 0 }}
        />
      </motion.div>
    </section>
  )
}