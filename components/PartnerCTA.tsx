'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface PartnerCTAProps {
  onPartnerClick: () => void
}

export default function PartnerCTA({ onPartnerClick }: PartnerCTAProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-electric relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-8 left-8 w-16 h-16 border-2 border-white rounded-full animate-pulse" />
        <div className="absolute top-12 right-12 w-12 h-12 border-2 border-white rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-12 left-1/4 w-20 h-20 border-2 border-white rounded-full animate-pulse delay-2000" />
        <div className="absolute bottom-8 right-1/4 w-8 h-8 border-2 border-white rounded-full animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Partner With <span className="text-soft-50">Us</span>
            </h2>
            
            <p className="text-lg text-soft-100 mb-8 leading-relaxed">
              Join our ecosystem of innovative partners and unlock new growth opportunities together
            </p>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={onPartnerClick}
              className="bg-white text-electric-600 px-6 py-3 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Become a Partner
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/hero.jpg"
                alt="Partnership Opportunities"
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}