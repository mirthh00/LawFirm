'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const STATS = [
  { value: '1,200+', label: 'Cases Resolved' },
  { value: '98%',    label: 'Client Satisfaction' },
  { value: '25+',    label: 'Years of Practice' },
]

export default function Welcome() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Image column ── */}
          <motion.div
            className="relative h-80 sm:h-[500px] rounded-sm overflow-hidden order-2 lg:order-1"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80"
              alt="Attorney in client consultation"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Accent frame */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ boxShadow: 'inset 0 0 0 1px rgba(244,162,97,0.25)' }}
            />

            {/* Floating stat card */}
      
          </motion.div>

          {/* ── Text column ── */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block font-inter text-[#d4bb2a] text-xs font-semibold tracking-[0.28em] uppercase mb-5">
              Welcome to Makwarela A.S Attorneys
            </span>

            <h2 className="font-cormorant text-4xl sm:text-5xl text-deep-blue font-light leading-tight mb-6">
              Every legal matter begins
              <br />
              with{' '}
              <em className="italic">understanding yours</em>
            </h2>

            {/* Accent rule */}
            <div className="w-10 h-0.5 bg-light-orange mb-8" />

            <div className="space-y-5 font-inter text-gray-600 text-base leading-relaxed">
              <p>
                At Makwarela A.S Attorneys, we believe that good legal counsel starts with genuinely
                understanding your situation. Before we offer any advice, we listen — we ask the
                right questions and make sure we have a full picture of what you're facing.
              </p>
              <p>
                Legal matters can feel overwhelming, especially when the language is complex and
                the stakes are high. That's why we take the time to explain your options in plain
                terms, not legal jargon, so you can make informed decisions with confidence.
              </p>
              <p>
                Whether you're navigating a family dispute, a business matter, or a workplace
                issue, our approach is always the same: practical advice, honest communication,
                and a genuine commitment to your best interests.
              </p>
            </div>

            {/* Stats row */}
        
          </motion.div>

        </div>
      </div>
    </section>
  )
}