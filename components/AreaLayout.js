'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar          from './Navbar'
import Footer          from './Footer'
//import MobileBottomCTA from './MobileBottomCTA'

/* ── Typography helpers — import these in each area page ── */
export const H2 = ({ children }) => (
  <h2 className="font-cormorant text-3xl text-deep-blue font-semibold mt-12 mb-4 leading-tight">
    {children}
  </h2>
)

export const H3 = ({ children }) => (
  <h3 className="font-cormorant text-2xl text-deep-blue font-semibold mt-8 mb-3">
    {children}
  </h3>
)

export const P = ({ children, lead = false }) => (
  <p className={`font-inter text-gray-700 leading-[1.88] mb-5 ${lead ? 'text-[17px] text-gray-600' : 'text-[15px]'}`}>
    {children}
  </p>
)

export const UL = ({ children }) => (
  <ul className="space-y-3 mb-8 mt-1">{children}</ul>
)

export const LI = ({ children }) => (
  <li className="flex items-start gap-3 font-inter text-[15px] text-gray-700 leading-relaxed">
    <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#d4bb2a] shrink-0" aria-hidden="true" />
    <span>{children}</span>
  </li>
)

export const Note = ({ children }) => (
  <div className="bg-[#EFF4FB] border-l-[3px] border-deep-blue rounded-r-sm px-5 py-4 my-7
                  font-inter text-[14px] text-deep-blue/80 leading-relaxed">
    {children}
  </div>
)

export const Rule = () => (
  <div className="w-8 h-0.5 bg-[#d4bb2a]/60 my-10" />
)

/* ── Main layout ── */
export default function AreaLayout({ icon: Icon, title, children }) {
  return (
    <>
      <Navbar />
      <main className="page-content bg-white">

        {/* Header */}
        <div className="bg-deep-blue pt-32 pb-14">
          <motion.div
            className="max-w-3xl mx-auto px-5 sm:px-8"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="flex items-center gap-1.5 font-inter text-[11px] text-deep-blue/38 mb-7">
              <Link href="/" className="text-deep-blue transition-colors">Home</Link>
              <span className='text-deep-blue'>/</span>
              <Link href="/#practice-areas" className="text-deep-blue transition-colors">Practice Areas</Link>
              <span className='text-deep-blue'>/</span>
              <span className="text-[#d4bb2a]">{title}</span>
            </nav>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-11 h-11 rounded-sm bg-[#d4bb2a]/8 border border-white/12
                              flex items-center justify-center shrink-0">
                <Icon size={20} className="text-[#d4bb2a]" strokeWidth={1.5} />
              </div>
              <span className="font-inter text-[10px] font-semibold text-[#d4bb2a]
                               tracking-[0.28em] uppercase">
                Practice Area
              </span>
            </div>
            <h1 className="font-cormorant text-4xl sm:text-5xl text-deep-blue font-light leading-tight">
              {title}
            </h1>
          </motion.div>
        </div>

        {/* Body */}
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          {children}
        </div>

        {/* Footer CTA strip */}
        <div className="border-t border-gray-100 bg-[#F7F8FA] py-12">
          <div className="max-w-3xl mx-auto px-5 sm:px-8
                          flex flex-col sm:flex-row items-start sm:items-center
                          justify-between gap-6">
            <div>
              <p className="font-cormorant text-2xl text-deep-blue font-light leading-snug">
                Ready to discuss your matter?
              </p>
              <p className="font-inter text-sm text-gray-500 mt-1">
                Speak to a Meridian attorney — no obligation, no jargon.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <a href="/#contact"
                 className="bg-[#d4bb2a] text-white font-inter font-semibold text-sm
                            px-6 py-3.5 rounded-sm hover:opacity-90 active:scale-[0.97] transition-all">
                Book a Consultation
              </a>
              <a href="tel:+27110000000"
                 className="border border-gray-300 text-deep-blue font-inter text-sm
                            px-6 py-3.5 rounded-sm hover:bg-white transition-all hidden sm:flex">
                Call Us
              </a>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}