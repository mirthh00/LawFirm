'use client'

import { useState, useId } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CreditCard, Car, HeartCrack, ScrollText,
  Receipt, Users, Handshake, Scale,
  ChevronDown, Search, HelpCircle,
} from 'lucide-react'

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */
const CATEGORIES = [
  { id: 'all',         label: 'All Questions',                Icon: HelpCircle  },
  { id: 'debt-review', label: 'Debt Review',                  Icon: CreditCard  },
  { id: 'raf',         label: 'Road Accident Fund',           Icon: Car         },
  { id: 'divorce',     label: 'Divorce Matters',              Icon: HeartCrack  },
  { id: 'wills',       label: 'Wills & Deceased Estates',     Icon: ScrollText  },
  { id: 'debt-col',    label: 'Debt Collection',              Icon: Receipt     },
  { id: 'family',      label: 'Family Law',                   Icon: Users       },
  { id: 'third-party', label: 'Third Party Claims',           Icon: Handshake   },
  { id: 'commercial',  label: 'Commercial & General Litigation', Icon: Scale    },
]

const FAQS = [
  /* ── DEBT REVIEW ── */
  {
    cat: 'debt-review',
    q: 'What is debt review and who qualifies?',
    a: `Debt review (also called debt counselling) is a formal debt rehabilitation process introduced by the National Credit Act. It is designed for South Africans who are over-indebted — meaning their monthly income is insufficient to cover all their obligations. A registered debt counsellor assesses your finances, negotiates reduced payments with creditors, and applies to court for a restructured repayment plan.`,
  },
  {
    cat: 'debt-review',
    q: 'Will I lose my assets while under debt review?',
    a: `No. A core protection of debt review is that creditors are legally prevented from repossessing your assets — such as your home or vehicle — while you remain compliant with your restructured payment plan. This protection applies from the moment your application is submitted and accepted.`,
  },
  {
    cat: 'debt-review',
    q: 'How long does the debt review process take?',
    a: `The duration depends on the total amount of debt and your restructured monthly instalment. Most clients complete the process within three to five years. Once all debts are fully settled, you receive a clearance certificate and your name is removed from the debt review register, restoring your credit access.`,
  },

  /* ── RAF ── */
  {
    cat: 'raf',
    q: 'What is the Road Accident Fund and am I entitled to claim?',
    a: `The Road Accident Fund (RAF) is a state-funded insurer that compensates victims of road accidents caused by the negligent driving of another person. If you were injured in a motor vehicle accident — whether as a driver, passenger, or pedestrian — you may be entitled to claim, provided the accident was not solely your own fault.`,
  },
  {
    cat: 'raf',
    q: 'How long do I have to submit a RAF claim?',
    a: `The general prescription period for RAF claims is three years from the date of the accident. If the claim involves a minor child, the three-year period only begins running when the child turns 18. It is important to act well before the deadline, as gathering medical evidence and preparing the claim takes considerable time.`,
  },
  {
    cat: 'raf',
    q: 'What types of compensation can I claim from the RAF?',
    a: `You can claim for general damages (pain, suffering, and loss of amenities of life), loss of earnings or earning capacity if your injury affects your ability to work, and future medical expenses directly arising from the accident. Since 2008, general damages are only payable for injuries that meet a "serious injury" threshold, so a medical assessment is an essential first step.`,
  },

  /* ── DIVORCE ── */
  {
    cat: 'divorce',
    q: 'What is the difference between a contested and uncontested divorce?',
    a: `An uncontested divorce is one where both parties agree on all issues — division of assets, maintenance, and care of children — before approaching the court. These matters are typically resolved in a single court appearance. A contested divorce involves unresolved disputes on one or more issues, requiring the court to adjudicate. Contested matters can take substantially longer and involve greater legal cost.`,
  },
  {
    cat: 'divorce',
    q: 'How is property divided in a South African divorce?',
    a: `It depends on your marital regime. Married in community of property: the joint estate is divided equally. Married out of community of property with accrual: each spouse shares in the growth of the other's estate during the marriage. Married out of community of property without accrual: each spouse retains their own assets entirely. Your marriage certificate and antenuptial contract determine which regime applies.`,
  },
  {
    cat: 'divorce',
    q: 'What arrangements can be made for children during a divorce?',
    a: `The court's primary consideration is always the best interests of the child. Parenting plans address primary residence, contact rights, decision-making authority, and maintenance contributions. We work with both parents to reach child-focused arrangements through negotiation wherever possible, and only proceed to litigation when necessary.`,
  },

  /* ── WILLS ── */
  {
    cat: 'wills',
    q: 'What happens if a person dies without a valid will?',
    a: `Dying without a valid will is called dying intestate. The Intestate Succession Act then determines how your estate is distributed — typically to your spouse and children in defined proportions, or to other relatives in a prescribed order. If no qualifying heirs exist, your estate may devolve to the state. Intestacy frequently leads to delays, family disputes, and outcomes that do not reflect your wishes.`,
  },
  {
    cat: 'wills',
    q: 'Who is responsible for winding up a deceased estate?',
    a: `The executor of the estate — named in the will, or appointed by the Master of the High Court if there is no will — is responsible. The executor lodges the estate with the Master, advertises for creditors, pays all debts and taxes, and distributes the balance to the heirs. We assist executors with every step of this process.`,
  },
  {
    cat: 'wills',
    q: 'How long does it take to wind up a deceased estate?',
    a: `A straightforward estate typically takes between six and twelve months from the date of death. Complex estates — those involving immovable property, business interests, disputes among heirs, or offshore assets — can take considerably longer. Acting promptly to appoint an executor and gather documents minimises unnecessary delay.`,
  },

  /* ── DEBT COLLECTION ── */
  {
    cat: 'debt-col',
    q: 'What steps are involved in the debt collection process?',
    a: `We begin with a formal letter of demand giving the debtor a final opportunity to settle. If no response is received, we issue summons through the appropriate court — Magistrate Court for claims up to R400,000 and High Court for larger claims. Once judgment is obtained, we can proceed to execution against assets or apply for an emoluments attachment order (garnishee order) against salary.`,
  },
  {
    cat: 'debt-col',
    q: 'Can a debtor be arrested for failing to repay a debt?',
    a: `In South Africa, imprisonment for civil debt is generally not permitted. However, if a court order is in place and the debtor wilfully refuses to comply — for example, by defying a garnishee order — they can be held in contempt of court, which may carry a custodial sanction. Debt review does not shield a debtor from all creditors; secured creditors and certain classes of debt are treated differently.`,
  },
  {
    cat: 'debt-col',
    q: 'What is prescription and how does it affect my debt?',
    a: `Most debts prescribe (become legally unenforceable) after three years if no acknowledgment of the debt or legal proceedings have interrupted prescription. Prescription does not apply automatically — a debtor must raise it as a defence. If you are owed money, acting promptly is essential to avoid losing your right to collect.`,
  },

  /* ── FAMILY LAW ── */
  {
    cat: 'family',
    q: 'How do I obtain a protection order against an abuser?',
    a: `You can apply for an interim protection order at any Magistrate Court under the Domestic Violence Act. No legal representative is required, but assistance significantly improves the quality of your application. The interim order is granted without the respondent being present and served on them. A return date is then set for a final order hearing.`,
  },
  {
    cat: 'family',
    q: 'What are my rights regarding child maintenance?',
    a: `Both parents are legally obligated to contribute to a child's maintenance in proportion to their respective means. If a parent fails to pay, you can apply to the Maintenance Court for an order. Non-compliance with a maintenance order is a criminal offence. We assist in calculating a fair contribution, preparing applications, and enforcing orders that are not being met.`,
  },
  {
    cat: 'family',
    q: 'Is a parenting plan legally binding?',
    a: `Yes, if it is made an order of court — either by consent or through mediation. A parenting plan sets out the day-to-day arrangements for children, covering residence, contact, schooling, medical decisions, and travel. Once incorporated into a court order, it is fully enforceable. We recommend formalising all parenting arrangements to avoid future uncertainty.`,
  },

  /* ── THIRD PARTY ── */
  {
    cat: 'third-party',
    q: 'What is a third party claim and when does it arise?',
    a: `A third party claim arises when you suffer loss or injury due to another person's negligence, and that person is insured. Rather than suing the negligent party directly, you may be able to claim against their insurer. Common examples include injuries caused by insured drivers, slip-and-fall incidents on insured premises, and damage caused by subcontractors with public liability cover.`,
  },
  {
    cat: 'third-party',
    q: "How do I claim against someone else's insurer?",
    a: `You must first establish that the insured party was negligent and that their negligence caused your loss. We assist with collecting evidence, commissioning expert reports where needed, and engaging the insurer directly. Insurers often attempt to minimise or reject claims; experienced legal representation at the negotiation stage makes a meaningful difference to the outcome.`,
  },
  {
    cat: 'third-party',
    q: 'Is there a time limit for bringing a third party claim?',
    a: `Yes. Prescription generally runs for three years from the date you became aware of both the identity of the responsible party and the facts giving rise to your claim. Certain insurers also require written notice within specified timeframes as a condition of cover. We recommend consulting us promptly after any incident to preserve your rights.`,
  },

  /* ── COMMERCIAL ── */
  {
    cat: 'commercial',
    q: 'What types of disputes fall under commercial litigation?',
    a: `Commercial litigation covers disputes arising from business relationships and contracts. This includes breach of contract, shareholder and partnership disputes, business debt recovery, enforcement of restraint of trade agreements, insurance disputes, franchise disagreements, and claims arising from professional negligence. We represent both claimants and defendants in Magistrate Court, High Court, and specialist tribunals.`,
  },
  {
    cat: 'commercial',
    q: 'How long does litigation typically take in South Africa?',
    a: `The timeline depends on the court, the complexity of the matter, and whether it is contested. An uncontested debt claim can be resolved within weeks. A fully contested High Court trial may take two to four years from summons to judgment, given court roll pressures. We always explore settlement and alternative dispute resolution first to achieve a faster, more predictable outcome.`,
  },
  {
    cat: 'commercial',
    q: 'Can commercial disputes be resolved without going to court?',
    a: `Absolutely. Many commercial disputes are resolved through negotiation, mediation, or arbitration — all of which are faster, less expensive, and more private than court proceedings. Arbitration awards are legally binding and enforceable as court orders. We advise on the most appropriate dispute resolution mechanism before committing to costly litigation.`,
  },
]

/* ─────────────────────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────────────────────── */

function AccordionItem({ q, a, isOpen, onToggle, catLabel, id }) {
  return (
    <div
      className={`border rounded-sm transition-colors duration-200 ${
        isOpen
          ? 'border-deep-blue/25 bg-white shadow-md shadow-deep-blue/5'
          : 'border-gray-200 bg-white hover:border-gray-300'
      }`}
    >
      <button
        id={`faq-btn-${id}`}
        aria-expanded={isOpen}
        aria-controls={`faq-body-${id}`}
        onClick={onToggle}
        className="w-full text-left flex items-start gap-4 px-6 py-5 group"
      >
        {/* Marker line */}
        <span
          className={`mt-1.5 shrink-0 w-0.5 h-4 rounded-full transition-colors duration-200 ${
            isOpen ? 'bg-light-orange' : 'bg-gray-300 group-hover:bg-deep-blue/30'
          }`}
          aria-hidden="true"
        />

        <span
          className={`flex-1 font-cormorant text-xl font-semibold leading-snug transition-colors duration-200 ${
            isOpen ? 'text-deep-blue' : 'text-gray-800 group-hover:text-deep-blue'
          }`}
        >
          {q}
        </span>

        <ChevronDown
          className={`shrink-0 mt-1 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-light-orange' : 'text-gray-400 group-hover:text-deep-blue'
          }`}
          size={18}
          strokeWidth={1.8}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-body-${id}`}
            role="region"
            aria-labelledby={`faq-btn-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-6 pb-6 pl-12">
              {/* Category badge */}
              <span className="inline-block font-inter text-[10px] font-semibold text-deep-blue/50 tracking-[0.18em] uppercase bg-deep-blue/5 px-2.5 py-1 rounded-sm mb-3">
                {catLabel}
              </span>
              <p className="font-inter text-gray-600 text-sm leading-[1.8]">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────── */
export default function LegalFAQ() {
  const uid         = useId()
  const [active,  setActive]  = useState('all')
  const [openIdx, setOpenIdx] = useState(null)
  const [query,   setQuery]   = useState('')

  /* Filter logic */
  const lcQuery   = query.toLowerCase()
  const filtered  = FAQS.filter(item => {
    const matchCat   = active === 'all' || item.cat === active
    const matchQuery = !lcQuery || item.q.toLowerCase().includes(lcQuery) || item.a.toLowerCase().includes(lcQuery)
    return matchCat && matchQuery
  })

  /* Count per category */
  const countFor = catId =>
    catId === 'all'
      ? FAQS.length
      : FAQS.filter(f => f.cat === catId).length

  /* Category label lookup */
  const catLabel = catId => CATEGORIES.find(c => c.id === catId)?.label ?? catId

  const toggle = idx => setOpenIdx(prev => (prev === idx ? null : idx))

  /* Reset open item when category or query changes */
  const changeCategory = id => { setActive(id); setOpenIdx(null) }
  const changeQuery    = v  => { setQuery(v);   setOpenIdx(null) }

  return (
    <section id="faq" className="bg-white" aria-labelledby="faq-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* ── Header ── */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="inline-block font-inter text-[#d4bb2a] text-xs font-semibold tracking-[0.28em] uppercase mb-5">
              Legal FAQ
            </span>
            <h2
              id="faq-heading"
              className="font-cormorant text-4xl sm:text-5xl text-deep-blue font-light leading-tight"
            >
              Answers to common legal questions
            </h2>
          </div>

          {/* Search */}
          <div className="relative sm:w-64 shrink-0">
            <Search
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              size={15}
              strokeWidth={1.8}
            />
            <input
              type="search"
              placeholder="Search questions…"
              value={query}
              onChange={e => changeQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-sm bg-soft-gray font-inter text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-deep-blue focus:bg-white focus:shadow-[0_0_0_3px_rgba(23,59,108,0.07)] transition-all duration-200"
            />
          </div>
        </motion.div>

        {/* ── Body: sidebar + accordion ── */}
        <div className="lg:grid lg:grid-cols-[256px_1fr] lg:gap-10 xl:gap-14">

          {/* ── Category list – desktop sidebar ── */}
          <motion.aside
            aria-label="FAQ categories"
            className="hidden lg:flex flex-col gap-1 self-start sticky top-28"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {CATEGORIES.map(({ id, label, Icon }) => {
              const isActive = active === id
              return (
                <button
                  key={id}
                  onClick={() => changeCategory(id)}
                  className={`group flex items-center justify-between gap-3 px-4 py-3 rounded-sm text-left transition-all duration-200 ${
                    isActive
                      ? 'bg-[#d4bb2a] text-white shadow-sm'
                      : 'text-gray-600 hover:bg-soft-gray hover:text-deep-blue'
                  }`}
                >
                  <span className="flex items-center gap-2.5 min-w-0">
                    <Icon
                      size={15}
                      strokeWidth={1.6}
                      className={`shrink-0 transition-colors ${
                        isActive ? 'text-[#d4bb2a]' : 'text-gray-400 group-hover:text-deep-blue'
                      }`}
                    />
                    <span className="font-inter text-sm font-medium leading-snug truncate">
                      {label}
                    </span>
                  </span>
                  <span
                    className={`shrink-0 font-inter text-[11px] font-semibold px-2 py-0.5 rounded-full transition-colors ${
                      isActive
                        ? 'bg-[#d4bb2a]/15 text-white/80'
                        : 'bg-gray-100 text-gray-400 group-hover:bg-deep-blue/8 group-hover:text-deep-blue'
                    }`}
                  >
                    {countFor(id)}
                  </span>
                </button>
              )
            })}
          </motion.aside>

          {/* ── Category pills – mobile ── */}
          <div
            className="lg:hidden flex gap-2 overflow-x-auto pb-4 mb-8 -mx-5 px-5 scrollbar-none"
            role="tablist"
            aria-label="FAQ categories"
          >
            {CATEGORIES.map(({ id, label, Icon }) => {
              const isActive = active === id
              return (
                <button
                  key={id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => changeCategory(id)}
                  className={`shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-full border font-inter text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-deep-blue border-deep-blue text-white'
                      : 'bg-white border-gray-200 text-gray-600 hover:border-deep-blue/40'
                  }`}
                >
                  <Icon size={12} strokeWidth={1.8} className={isActive ? 'text-[#d4bb2a]' : 'text-gray-400'} />
                  {label}
                  <span className={`ml-0.5 ${isActive ? 'text-white/60' : 'text-gray-400'}`}>
                    {countFor(id)}
                  </span>
                </button>
              )
            })}
          </div>

          {/* ── Accordion ── */}
          <div>
            <AnimatePresence mode="wait">
              {filtered.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="py-16 text-center"
                >
                  <HelpCircle className="mx-auto mb-4 text-gray-300" size={40} strokeWidth={1.2} />
                  <p className="font-cormorant text-2xl text-gray-400 font-light">
                    No questions match your search
                  </p>
                  <button
                    onClick={() => { changeQuery(''); changeCategory('all') }}
                    className="mt-4 font-inter text-sm text-[#d4bb2a] hover:underline"
                  >
                    Clear filters
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key={active + query}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col gap-2.5"
                >
                  {/* Result count when filtering */}
                  {(active !== 'all' || query) && (
                    <p className="font-inter text-xs text-gray-400 mb-1 pl-1">
                      {filtered.length} question{filtered.length !== 1 ? 's' : ''}{' '}
                      {active !== 'all' && `in ${catLabel(active)}`}
                      {query && ` matching "${query}"`}
                    </p>
                  )}

                  {filtered.map((item, idx) => (
                    <AccordionItem
                      key={`${item.cat}-${idx}`}
                      id={`${uid}-${idx}`}
                      q={item.q}
                      a={item.a}
                      catLabel={catLabel(item.cat)}
                      isOpen={openIdx === idx}
                      onToggle={() => toggle(idx)}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom CTA */}
            <motion.div
              className="mt-10 p-7 bg-soft-gray rounded-sm border border-gray-100 flex flex-col sm:flex-row sm:items-center gap-5 justify-between"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div>
                <p className="font-cormorant text-xl text-deep-blue font-semibold mb-1">
                  Can't find what you're looking for?
                </p>
                <p className="font-inter text-sm text-gray-500">
                  Speak directly with an attorney — no obligation, no jargon.
                </p>
              </div>
              <a
                href="#contact"
                className="shrink-0 inline-flex items-center justify-center gap-2 bg-deep-blue text-white font-inter font-semibold text-sm px-6 py-3.5 rounded-sm hover:opacity-90 active:scale-[0.97] transition-all"
              >
                Ask us directly →
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}