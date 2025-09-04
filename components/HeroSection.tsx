'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-24 relative overflow-hidden bg-deep">
      <div className="absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-white">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-heading mb-6 leading-tight"
        >
          Unlock Efficiency with ADMIRERX
        </motion.h1>
        
        <motion.p 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-subheading mb-8 leading-relaxed"
        >
          Empowering businesses with customer support, IT, and data solutions.
        </motion.p>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-wrap gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-gradient px-8 py-4 rounded-lg font-semibold text-lg"
            >
              View Services
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="btn-outline px-8 py-4 rounded-lg font-semibold text-lg"
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-500/20 rounded-3xl blur-3xl" />
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop" alt="Professional team collaboration" className="relative w-full h-64 sm:h-80 object-cover rounded-2xl shadow-2xl" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}
