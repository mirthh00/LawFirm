'use client'

import { motion } from 'framer-motion'
import {
  CreditCard, Car, HeartCrack, ScrollText,
  Receipt, Users, Handshake, Scale,
} from 'lucide-react'
import Link from 'next/link'

const AREAS = [
  {
    Icon: CreditCard,
    title: 'Debt Review',
    description:
      'Formal debt rehabilitation under the National Credit Act — protecting your assets and restructuring repayments so you can regain financial control.',
    href: '/areas/debt-review'
  },
  {
    Icon: Car,
    title: 'Road Accident Fund Claims',
    description:
      'Comprehensive RAF claims for drivers, passengers, and pedestrians injured through the negligence of another — general damages, loss of earnings, and medical costs.',
        href: '/areas/road-accident-fund'
  },
  {
    Icon: HeartCrack,
    title: 'Divorce Matters',
    description:
      'Contested and uncontested divorces, division of assets, spousal maintenance, and parenting plans handled with clarity and sensitivity.',
        href: '/areas/divorce-matters'
  },
  {
    Icon: ScrollText,
    title: 'Wills & Deceased Estates',
    description:
      'Drafting valid wills, appointing executors, and guiding families through the full winding-up of deceased estates — efficiently and compassionately.',
        href: '/areas/wills-estates'
  },
  {
    Icon: Receipt,
    title: 'Debt Collection',
    description:
      'Demand letters, summons, judgment, and execution — we recover what is owed to you through the appropriate court, swiftly and cost-effectively.',
        href: '/areas/debt-collection'
  },
  {
    Icon: Users,
    title: 'Family Law',
    description:
      'Protection orders, child maintenance, parenting plans, and guardianship matters — always with your family\'s best interests as the guiding principle.',
        href: '/areas/family-law'
  },
  {
    Icon: Handshake,
    title: 'Third Party Claims',
    description:
      'Claims against third-party insurers for loss or injury caused by another\'s negligence — we build your case and negotiate the best possible settlement.',
        href: '/areas/third-party-claims'
  },
  {
    Icon: Scale,
    title: 'Commercial & General Litigation',
    description:
      'Breach of contract, business disputes, shareholder conflicts, and professional negligence claims in Magistrate Court, High Court, and arbitration.',
        href: '/areas/commercial-litigation'
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const card = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="bg-soft-gray">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <motion.div
          className="max-w-2xl mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block font-inter text-[#d4bb2a] text-xs font-semibold tracking-[0.28em] uppercase mb-5">
            Our Practice Areas
          </span>
          <h2 className="font-cormorant text-4xl sm:text-5xl text-deep-blue font-light leading-tight">
            Legal expertise across the areas that matter most
          </h2>
        </motion.div>

        {/* Grid — 4 cols on xl, 2 on sm, 1 on mobile */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.06 }}
        >
          {AREAS.map(({ Icon, title, description,href }) => (
            <motion.div
              key={title}
              variants={card}
              className="group bg-white border border-gray-100 hover:border-[#c8af24]/35 rounded-sm p-7 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Icon box */}
              <div className="w-11 h-11 rounded-sm bg-deep-blue/5 group-hover:bg-deep-blue flex items-center justify-center mb-5 transition-colors duration-300 shrink-0">
                <Icon
                  className="text-[#c8af24] group-hover:text-[#c8af24] transition-colors duration-300"
                  size={24}
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="font-cormorant text-[22px] text-deep-blue font-semibold leading-snug mb-3">
                {title}
              </h3>
              <p className="font-inter text-gray-500 text-sm leading-relaxed flex-1">
                {description}
              </p>

               {/* Learn more */}
             <Link
  href={href}
  className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-1.5 font-inter text-xs font-semibold text-[#d4bb2a] hover:gap-3 transition-all duration-200"
>
  <span>Learn more</span>
  <span aria-hidden="true">→</span>
</Link>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}