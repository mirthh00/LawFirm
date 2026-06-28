'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Scale, Phone, Mail, MapPin, Clock,
  ArrowUpRight, Heart,
} from 'lucide-react'

/* ── Data ─────────────────────────────────────────────────── */
const PRACTICE_AREAS = [
  'Debt Review',
  'Road Accident Fund Claims',
  'Divorce Matters',
  'Wills & Deceased Estates',
  'Debt Collection',
  'Family Law',
  'Third Party Claims',
  'Commercial & General Litigation',
]

const RESOURCES = [
  'Articles & Guides',
  'Legal FAQ',
  'Know Your Rights',
  'Legal News',
  'Client Portal',
]

const CONTACT = [
  { Icon: Phone,  text: '+27 11 000 0000',           href: 'tel:+27110000000' },
  { Icon: Mail,   text: 'info@meridianlaw.co.za',    href: 'mailto:info@meridianlaw.co.za' },
  { Icon: MapPin, text: '123 Commissioner Street\nJohannesburg, 2001', href: '#' },
]

const HOURS = [
  { day: 'Mon – Fri', time: '8:00 – 17:00', active: true },
  { day: 'Saturday',  time: '9:00 – 12:00', active: true },
  { day: 'Sunday',    time: 'Closed',        active: false },
]

/* ── Column heading ───────────────────────────────────────── */
function ColHead({ children }) {
  return (
    <h4 className="font-inter text-[10px] font-semibold text-white/35 tracking-[0.22em] uppercase mb-5">
      {children}
    </h4>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0A1E38] text-white">

      {/* ── Top accent strip ─────────────────────────────── */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-light-orange/60 to-transparent" />

      {/* ── Main grid ────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr] gap-10 lg:gap-8">

          {/* ── Col 1 — Brand ─────────────────────────────── */}
          <div>
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5 group">
              <div className="w-9 h-9 rounded-sm bg-white/6 border border-white/10 flex items-center justify-center group-hover:border-light-orange/40 transition-colors">
                <Scale size={16} className="text-light-orange" strokeWidth={1.6} />
              </div>
              <div className="leading-none">
                <p className="font-cormorant text-[19px] font-bold tracking-[0.2em] text-white">
                  MAKWARELA A.S
                </p>
                <p className="font-inter text-[8.5px] tracking-[0.3em] uppercase text-white/35 mt-0.5">
                  ATTORNEYS
                </p>
              </div>
            </Link>

            <p className="font-inter text-sm text-white/50 leading-relaxed max-w-[240px] mb-7">
              Expert legal counsel in Johannesburg. We listen, advise clearly,
              and help you move forward with confidence.
            </p>


            {/* Law Society note */}
            <div className="mt-7 flex items-center gap-2 bg-white/4 border border-white/8 rounded-sm px-3.5 py-2.5 w-fit">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
              <span className="font-inter text-[10px] text-white/40 leading-snug">
                Member · Law Society of South Africa
              </span>
            </div>
          </div>

          {/* ── Col 2 — Practice Areas ────────────────────── */}
          <div>
            <ColHead>Practice Areas</ColHead>
            <ul className="space-y-2.5">
              {PRACTICE_AREAS.map(area => (
                <li key={area}>
                  <a
                    href="#practice-areas"
                    className="group inline-flex items-center gap-1.5 font-inter text-sm text-white/55 hover:text-light-orange transition-colors duration-200"
                  >
                    <span className="w-3.5 h-px bg-white/20 group-hover:bg-light-orange group-hover:w-5 transition-all duration-200 shrink-0" />
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3 — Resources ─────────────────────────── */}
          <div>
            <ColHead>Resources</ColHead>
            <ul className="space-y-2.5">
              {RESOURCES.map(r => (
                <li key={r}>
                  <a
                    href={r === 'Legal FAQ' ? '#faq' : '#resources'}
                    className="group inline-flex items-center gap-1.5 font-inter text-sm text-white/55 hover:text-light-orange transition-colors duration-200"
                  >
                    <span className="w-3.5 h-px bg-white/20 group-hover:bg-light-orange group-hover:w-5 transition-all duration-200 shrink-0" />
                    {r}
                  </a>
                </li>
              ))}
            </ul>

            {/* Quick links */}
            <div className="mt-7 pt-7 border-t border-white/8">
              <ColHead>Quick links</ColHead>
              <ul className="space-y-2">
                {['Home', 'About Us', 'Contact', 'Privacy Policy'].map(l => (
                  <li key={l}>
                    <a href="#" className="font-inter text-sm text-white/40 hover:text-white/70 transition-colors duration-200">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Col 4 — Contact + Hours ───────────────────── */}
          <div>
            <ColHead>Contact us</ColHead>
            <ul className="space-y-4 mb-7">
              {CONTACT.map(({ Icon, text, href }) => (
                <li key={text}>
                  <a
                    href={href}
                    className="group flex items-start gap-3 hover:opacity-90 transition-opacity"
                  >
                    <div className="w-7 h-7 rounded-sm bg-white/6 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-light-orange/35 group-hover:bg-light-orange/8 transition-colors duration-200">
                      <Icon size={12} className="text-light-orange" strokeWidth={1.7} />
                    </div>
                    <div>
                      {text.split('\n').map((line, i) => (
                        <p key={i} className="font-inter text-sm text-white/55 group-hover:text-white/75 transition-colors leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            {/* Office Hours */}
            <div className="border-t border-white/8 pt-6">
              <ColHead>Office hours</ColHead>
              <ul className="space-y-2">
                {HOURS.map(({ day, time, active }) => (
                  <li key={day} className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${active ? 'bg-green-400' : 'bg-white/20'}`} />
                      <span className={`font-inter text-xs ${active ? 'text-white/55' : 'text-white/25'}`}>
                        {day}
                      </span>
                    </div>
                    <span className={`font-inter text-xs tabular-nums ${active ? 'text-white/55' : 'text-white/25'}`}>
                      {time}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Book button */}
              <a
                href="#contact"
                className="mt-6 flex items-center justify-center gap-2 w-full bg-light-orange/12 border border-light-orange/30 text-light-orange font-inter text-xs font-semibold py-3 rounded-sm hover:bg-light-orange/20 transition-colors duration-200"
              >
                Book a Consultation
                <ArrowUpRight size={12} strokeWidth={2} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────────── */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-xs text-white/28 flex items-center gap-1.5">
            © {year} Makwarela A.S Attorneys (Pty) Ltd. Made with
            <Heart size={10} className="text-light-orange/60 fill-light-orange/60" />
            in Johannesburg.
          </p>
          <div className="flex items-center gap-5">
  {[
    { name: "Privacy Policy", href: "/legal/privacy-policy" },
    { name: "Terms of Use", href: "/legal/terms-of-use" },
    { name: "POPIA Notice", href: "/legal/popia-notice" },
  ].map((item, i) => (
    <span key={item.name} className="flex items-center gap-5">
      {i > 0 && <span className="w-px h-3 bg-white/12" />}
      <Link
        href={item.href}
        className="font-inter text-xs text-white/28 hover:text-white/55 transition-colors duration-200"
      >
        {item.name}
      </Link>
    </span>
  ))}
</div>
        </div>
      </div>

    </footer>
  )
}