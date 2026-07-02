'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import LoadingScreen  from '@/components/LoadingScreen'
import Navbar         from '@/components/Navbar'
import Hero           from '@/components/Hero'
import Welcome        from '@/components/Welcome'
import PracticeAreas  from '@/components/PracticeAreas'
import WhyChooseUs    from '@/components/WhyChooseUs'
import Resources      from '@/components/Resources'
import LegalFAQ       from '@/components/LegalFAQ'
import CallToAction   from '@/components/CallToAction'
import Footer         from '@/components/Footer'
//import MobileBottomCTA from '@/components/MobileBottomCTA'


export const metadata = {
  title: 'Home | Makwarela A.S Attorneys',
  description:
    'Makwarela A.S Attorneys (Pty) Ltd provides professional legal services in family law, labour law, commercial law, civil litigation and more. Contact our experienced legal team today.',
  keywords: ['attorneys', 'law firm', 'Johannesburg', 'legal advice', 'family law', 'business law','Makwarela','Makwarela A.S','Makwarela A.S Attorneys'],
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <Navbar />
        <main className="page-content">
          <Hero />
          <Welcome />
          <PracticeAreas />
          <WhyChooseUs />
          <Resources />
        
          <CallToAction />
            <LegalFAQ />
        </main>
        <Footer />
     
      </motion.div>
    </>
  )
}
