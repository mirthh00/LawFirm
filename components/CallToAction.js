'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  User, Mail, Phone, PhoneCall, MessageCircle,
  FileText, MapPin, Clock, Send, CheckCircle,
  AlertCircle, Shield,
} from 'lucide-react'

/* ── Contact info items ──────────────────────────────────── */
const INFO = [
  {
    Icon: PhoneCall,
    label: 'Call us directly',
    text: '079 470 6439',
    href: 'tel:0794706439',
  },
  {
    Icon: Mail,
    label: 'Send an email',
    text: 'info@masattorneys.co.za',
    href: 'mailto:info@masattorneys.co.za',
  },
  {
    Icon: MapPin,
    label: 'Visit our offices',
    text: '366 Kent Avenue Street\n Kent Gardens \n Ferndale \n Randburg (Johannesburg), 2001',
    href: '#',
  },
  {
    Icon: Clock,
    label: 'Office hours',
    text: 'Mon – Fri: 8:00 – 17:00\nSat: 9:00 – 12:00',
    href: null,
  },
]

/* ── Preferred contact methods ───────────────────────────── */
const METHODS = [
  { value: 'phone',    label: 'Phone Call', Icon: PhoneCall },
  { value: 'email',    label: 'Email',      Icon: Mail },
  { value: 'whatsapp', label: 'WhatsApp',   Icon: MessageCircle },
]

/* ── Reusable text input ─────────────────────────────────── */
function Field({ label, icon: Icon, error, required, children }) {
  return (
    <div>
      <label className="flex items-center gap-1 font-inter text-[11px] font-semibold text-gray-600 tracking-[0.13em] uppercase mb-2">
        {label}
        {required && <span className="text-light-orange">*</span>}
      </label>

      <div
        className={`flex items-center border rounded-sm transition-all duration-200 ${
          error
            ? 'border-red-400 bg-red-50/70'
            : 'border-gray-200 bg-[#F7F8FA] focus-within:border-deep-blue focus-within:bg-white focus-within:shadow-[0_0_0_3px_rgba(23,59,108,0.07)]'
        }`}
      >
        {/* Icon slot */}
        <span
          className={`pl-4 pr-3.5 self-stretch flex items-center shrink-0 border-r ${
            error ? 'border-red-300' : 'border-gray-200'
          }`}
        >
          <Icon
            size={15}
            className={error ? 'text-red-400' : 'text-deep-blue/40'}
            strokeWidth={1.8}
          />
        </span>

        {children}
      </div>

      {error && (
        <p className="flex items-center gap-1 font-inter text-xs text-red-500 mt-1.5">
          <AlertCircle size={11} />
          {error}
        </p>
      )}
    </div>
  )
}

export default function CallToAction() {
  const [form, setForm] = useState({
    name:    '',
    email:   '',
    phone:   '',
    method:  'phone',
    message: '',
  })
  const [errors,    setErrors]    = useState({})
  const [submitted, setSubmitted] = useState(false)

  const set = (key, val) => {
    setForm(f => ({ ...f, [key]: val }))
    if (errors[key]) setErrors(e => ({ ...e, [key]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Full name is required.'
    if (!form.email.trim())   e.email   = 'Email address is required.'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Please enter a valid email address.'
    if (!form.phone.trim())   e.phone   = 'Phone number is required.'
    if (!form.message.trim()) e.message = 'Please briefly describe your legal matter.'
    return e
  }

  const handleSubmit = e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-deep-blue py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_1.45fr] gap-14 lg:gap-20 items-start">

          {/* ══ Left column — headline + contact details ══ */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-28"
          >
            <span className="inline-block font-inter text-[#d4bb2a] text-xs font-semibold tracking-[0.28em] uppercase mb-6">
              Get in touch
            </span>

            <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-[54px] text-deep-blue font-light leading-[1.08] mb-5">
              Every legal matter
              <br />
              starts with{' '}
              <em className="italic text-[#d4bb2a]">a conversation</em>
            </h2>

            <div className="w-9 h-0.5 bg-[#d4bb2a]/50 mb-7" />

            <p className="font-inter text-deep-blue/60 text-base leading-relaxed mb-10 max-w-sm">
              Whether you need immediate assistance or simply want to understand
              your options, we're here. Complete the form and we'll be in touch
              promptly — no obligation, no legal jargon.
            </p>

            {/* Contact info cards */}
            <div className="space-y-4">
              {INFO.map(({ Icon, label, text, href }) => {
                const content = (
                  <div className="flex items-start gap-4 group/item">
                    <div className="w-10 h-10 rounded-sm bg-white/8 border border-white/12 flex items-center justify-center shrink-0 group-hover/item:bg-light-orange/15 group-hover/item:border-light-orange/30 transition-colors duration-200">
                      <Icon size={16} className="text-[#d4bb2a]" strokeWidth={1.6} />
                    </div>
                    <div className="pt-0.5">
                      <p className="font-inter text-[11px] text-deep-blue/40 tracking-[0.15em] uppercase mb-0.5">
                        {label}
                      </p>
                      {text.split('\n').map((line, i) => (
                        <p key={i} className="font-inter text-sm text-deep-blue/75 leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                )
                return href
                  ? <a key={label} href={href} className="block hover:opacity-90 transition-opacity">{content}</a>
                  : <div key={label}>{content}</div>
              })}
            </div>

            {/* Trust badge */}
            <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-2.5">
              <Shield size={14} className="text-[#d4bb2a]/70" strokeWidth={1.5} />
              <p className="font-inter text-xs text-deep-blue/35 leading-snug">
                Your information is strictly confidential and protected by attorney-client privilege.
              </p>
            </div>
          </motion.div>

          {/* ══ Right column — contact form card ══ */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          >
            <div className="bg-white rounded-sm shadow-2xl shadow-black/35 overflow-hidden">

              {/* Card header strip */}
              <div className="bg-[#0F2845] px-8 sm:px-10 py-6 flex items-center gap-3 border-b border-white/8">
                <div className="w-8 h-8 rounded-sm bg-[#d4bb2a]/15 flex items-center justify-center">
                  <Send size={14} className="text-[#d4bb2a]" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="font-cormorant text-lg font-semibold text-white leading-none">
                    Send us your enquiry
                  </p>
                  <p className="font-inter text-[11px] text-white/40 mt-0.5">
                    We respond within 24 hours
                  </p>
                </div>
              </div>

              {/* Form body */}
              <div className="px-8 sm:px-10 py-9">
                <AnimatePresence mode="wait">

                  {/* ── Success state ── */}
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      className="py-8 text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-5">
                        <CheckCircle size={30} className="text-green-500" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-cormorant text-3xl text-deep-blue font-semibold mb-3">
                        Thank you, {form.name.split(' ')[0]}
                      </h3>
                      <p className="font-inter text-gray-500 text-sm leading-relaxed max-w-xs mx-auto mb-6">
                        We've received your enquiry and will review it promptly.
                        Expect to hear from us via{' '}
                        <span className="font-semibold text-deep-blue capitalize">{form.method}</span>{' '}
                        within 24 business hours.
                      </p>
                      <div className="bg-soft-gray rounded-sm px-5 py-3.5 inline-flex items-center gap-2 text-deep-blue/60 font-inter text-xs">
                        <Shield size={12} strokeWidth={1.5} />
                        Your matter is treated with complete confidentiality.
                      </div>
                    </motion.div>

                  ) : (

                  /* ── Form ── */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    noValidate
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-5"
                  >
                    {/* Row 1 – Name */}
                    <Field label="Full Name" icon={User} error={errors.name} required>
                      <input
                        type="text"
                        placeholder="John Smith"
                        value={form.name}
                        onChange={e => set('name', e.target.value)}
                        className="flex-1 px-4 py-3.5 bg-transparent outline-none font-inter text-base md:text-sm text-gray-800 placeholder:text-gray-400"
                        autoComplete="name"
                      />
                    </Field>

                    {/* Row 2 – Email */}
                    <Field label="Email Address" icon={Mail} error={errors.email} required>
                      <input
                        type="email"
                        placeholder="john@gmail.com"
                        value={form.email}
                        onChange={e => set('email', e.target.value)}
                     className="flex-1 px-4 py-3.5 bg-transparent outline-none font-inter text-base md:text-sm text-gray-800 placeholder:text-gray-400"
                        autoComplete="email"
                      />
                    </Field>

                    {/* Row 3 – Phone */}
                    <Field label="Phone Number" icon={Phone} error={errors.phone} required>
                      <input
                        type="tel"
                        placeholder="082 123 4567"
                        value={form.phone}
                        onChange={e => set('phone', e.target.value)}
                        className="flex-1 px-4 py-3.5 bg-transparent outline-none font-inter text-base md:text-sm text-gray-800 placeholder:text-gray-400"
                        autoComplete="tel"
                      />
                    </Field>

                    {/* Row 4 – Preferred contact method */}
                    <div>
                      <label className="block font-inter text-[11px] font-semibold text-gray-600 tracking-[0.13em] uppercase mb-2.5">
                        Preferred Contact Method
                      </label>
                      <div className="grid grid-cols-3 gap-2.5">
                        {METHODS.map(({ value, label, Icon }) => {
                          const active = form.method === value
                          return (
                            <button
                              key={value}
                              type="button"
                              onClick={() => set('method', value)}
                              className={`flex flex-col items-center gap-2 px-3 py-3.5 rounded-sm border text-center transition-all duration-200 cursor-pointer ${
                                active
                                  ? 'bg-[#0A1E38] border-deep-blue shadow-md shadow-deep-blue/20'
                                  : 'bg-[#F7F8FA] border-gray-200 hover:border-deep-blue/40 hover:bg-white'
                              }`}
                            >
                              <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                                active ? 'bg-white/12' : 'bg-gray-200/70'
                              }`}>
                                <Icon
                                  size={13}
                                  className={active ? 'text-[#d4bb2a]' : 'text-gray-500'}
                                  strokeWidth={1.8}
                                />
                              </div>
                              <span className={`font-inter text-[11px] font-semibold leading-tight transition-colors ${
                                active ? 'text-white' : 'text-gray-600'
                              }`}>
                                {label}
                              </span>
                              {/* selection ring */}
                              {active && (
                                <span className="w-1.5 h-1.5 rounded-full bg-[#d4bb2a] mt-0.5" />
                              )}
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Row 5 – Message */}
                    <div>
                      <label className="flex items-center gap-1 font-inter text-[11px] font-semibold text-gray-600 tracking-[0.13em] uppercase mb-2">
                        Briefly tell us about your legal matter
                        <span className="text-[#d4bb2a]">*</span>
                      </label>
                      <div
                        className={`border rounded-sm transition-all duration-200 ${
                          errors.message
                            ? 'border-red-400 bg-red-50/70'
                            : 'border-gray-200 bg-[#F7F8FA] focus-within:border-deep-blue focus-within:bg-white focus-within:shadow-[0_0_0_3px_rgba(23,59,108,0.07)]'
                        }`}
                      >
                        <div className="flex items-start gap-3.5 p-4">
                          <FileText
                            size={15}
                            className={`mt-0.5 shrink-0 ${errors.message ? 'text-red-400' : 'text-deep-blue/40'}`}
                            strokeWidth={1.8}
                          />
                          <textarea
                            rows={5}
                            value={form.message}
                            onChange={e => set('message', e.target.value)}
                            placeholder="Please describe what happened and how we can help. Don't worry about choosing a legal category — our team will review your enquiry and direct it to the appropriate attorney."
                            className="flex-1 bg-transparent outline-none font-inter text-base md:text-sm text-gray-800 placeholder:text-gray-400 resize-none leading-relaxed"
                          />
                        </div>
                      </div>
                      {errors.message && (
                        <p className="flex items-center gap-1 font-inter text-xs text-red-500 mt-1.5">
                          <AlertCircle size={11} />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2.5 bg-[#d4bb2a] text-white font-inter font-semibold text-sm py-4 rounded-sm hover:opacity-92 active:scale-[0.985] transition-all duration-200 mt-2 shadow-md shadow-orange-300/25"
                    >
                      Send Enquiry
                      <Send size={15} strokeWidth={2} />
                    </button>

                    {/* Privacy note */}
                    <p className="flex items-start justify-center gap-1.5 font-inter text-[11px] text-gray-400 text-center leading-snug pt-1">
                      <Shield size={11} className="mt-px shrink-0 text-gray-400" strokeWidth={1.5} />
                      Your enquiry is completely confidential. We do not share your information with third parties.
                    </p>
                  </motion.form>
                  )}

                </AnimatePresence>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}