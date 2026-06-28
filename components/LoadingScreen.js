'use client'

import { motion } from 'framer-motion'
import { Scale } from 'lucide-react'

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.65, ease: 'easeInOut' }}
    >
      {/* Logo mark */}
    <motion.div
  className="flex justify-center mb-14"
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  <Image
    src="/images/logo.png"
    alt="Meridian Attorneys"
    width={500}
    height={150}
    priority
    className="w-56 sm:w-64 md:w-72 h-auto object-contain"
  />
</motion.div>

      {/* Progress track */}
      <motion.div
        className="relative w-56 h-px bg-gray-100 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        <motion.div
          className="absolute inset-y-0 left-0 bg-deep-blue"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            delay: 0.55,
            duration: 2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{ transformOrigin: 'left center' }}
        />
      </motion.div>

      {/* Label */}
      <motion.p
        className="font-inter text-[11px] text-gray-400 mt-6 tracking-[0.22em] uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65, duration: 0.5 }}
      >
        Preparing your experience…
      </motion.p>
    </motion.div>
  )
}