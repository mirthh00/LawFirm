'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const ARTICLES = [
  {
    category: 'Family Law',
    title:    'Understanding Your Rights During Divorce Proceedings',
    excerpt:
      'Divorce is one of the most difficult processes anyone can face. Knowing your rights from the outset can make a significant difference to the outcome — and to your peace of mind.',
    image:    'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80',
    href:     '/articles/divorce-rights',
  },
  {
    category: 'Labour Law',
    title:    'What to Do If You Face Unfair Dismissal',
    excerpt:
      'Being dismissed from your job is distressing and financially damaging. Here is what South African labour law says about your rights and the immediate steps you should take.',
    image:    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    href:     '/articles/unfair-dismissal',
  },
  {
    category: 'Business Law',
    title:    'Key Clauses to Review Before Signing a Commercial Lease',
    excerpt:
      'Commercial leases are complex documents with long-term consequences. These are the clauses every business owner must scrutinise carefully before putting pen to paper.',
    image:    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    href:     '/articles/commercial-lease',
  },
]

export default function Resources() {
  return (
    <section id="resources" className="bg-soft-gray">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block font-inter text-light-orange text-xs font-semibold tracking-[0.28em] uppercase mb-4">
              Legal Resources
            </span>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-deep-blue font-light leading-tight">
              Articles &amp; guides
            </h2>
          </motion.div>

          <a
            href="#"
            className="shrink-0 inline-flex items-center gap-1.5 font-inter text-sm font-medium text-deep-blue hover:text-light-orange transition-colors"
          >
            View all articles
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Article cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {ARTICLES.map(({ category, title, excerpt, image, href }, i) => (
            <motion.article
              key={title}
              className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-350"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: i * 0.11, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Card image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Category badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block bg-deep-blue text-white font-inter text-[10px] font-semibold tracking-[0.18em] uppercase px-3 py-1">
                    {category}
                  </span>
                </div>
                {/* Gradient footer for readability */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Card body */}
              <div className="p-7">
                <h3 className="font-cormorant text-2xl text-deep-blue font-semibold leading-snug mb-3">
                  {title}
                </h3>
                <p className="font-inter text-gray-500 text-sm leading-relaxed mb-6">
                  {excerpt}
                </p>
                <a
                  href={href}
                  className="inline-flex items-center gap-1.5 font-inter text-sm font-medium text-light-orange hover:gap-3 transition-all duration-200"
                  aria-label={`Read more about ${title}`}
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}