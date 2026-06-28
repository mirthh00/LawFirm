'use client'

import { motion } from 'framer-motion'
import { BookOpen, Receipt, Bell, UserCheck, Target } from 'lucide-react'

const FEATURES = [
  {
    Icon: BookOpen,
    title: 'Plain Language',
    description:
      'We translate complex legal concepts into clear, understandable advice — no jargon, no confusion, ever.',
  },
  {
    Icon: Receipt,
    title: 'Transparent Fees',
    description:
      "You know what you'll pay before we begin. No hidden costs, no unexpected invoices at the end.",
  },
  {
    Icon: Bell,
    title: 'Responsive Communication',
    description:
      "We return calls and emails promptly. You're never left wondering what's happening with your matter.",
  },
  {
    Icon: UserCheck,
    title: 'Personal Attention',
    description:
      'Your matter is handled by your attorney — not passed between assistants or junior staff.',
  },
  {
    Icon: Target,
    title: 'Practical Solutions',
    description:
      'We focus on outcomes, not process. Our advice is always grounded in what will actually work for you.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <motion.div
          className="max-w-2xl mx-auto text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block font-inter text-light-orange text-xs font-semibold tracking-[0.28em] uppercase mb-5">
            Why Makwarela A.S
          </span>
          <h2 className="font-cormorant text-4xl sm:text-5xl text-deep-blue font-light leading-tight">
            The difference you'll notice from day one
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {FEATURES.map(({ Icon, title, description }, i) => (
            <motion.div
              key={title}
              className="group flex flex-col p-7 bg-soft-gray hover:bg-deep-blue rounded-sm transition-colors duration-400 cursor-default"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: i * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded bg-white group-hover:bg-white/10 flex items-center justify-center mb-5 transition-colors duration-300 shrink-0">
                <Icon
                  className="text-[#c8af24] group-hover:text-[#c8af24] transition-colors duration-300"
                  size={22}
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="font-cormorant text-[22px] text-deep-blue  font-semibold mb-2.5 transition-colors duration-300 leading-snug">
                {title}
              </h3>
              <p className="font-inter text-gray-500 group-hover:text-deep-blue/65 text-sm leading-relaxed transition-colors duration-300">
                {description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}