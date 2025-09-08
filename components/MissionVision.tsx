'use client'

import { motion } from 'framer-motion'

export default function MissionVision() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-soft-50 mb-8">
              Driven by <span className="text-gradient-electric">Innovation</span>,<br />
              Grounded in <span className="text-gradient-electric">Integrity</span>
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-heading font-semibold text-electric-400 mb-4">Our Mission</h3>
                <p className="text-xl text-soft-300 leading-relaxed">
                  To empower businesses and people through technology that scales impact. We believe in creating 
                  solutions that not only solve today's challenges but anticipate tomorrow's opportunities.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-heading font-semibold text-purple-400 mb-4">Our Vision</h3>
                <p className="text-xl text-soft-300 leading-relaxed">
                  To be the global leader in digital transformation services, recognized for our innovation, 
                  reliability, and commitment to sustainable growth for our clients and partners.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 h-96 flex items-center justify-center relative overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-20">
                <motion.div
                  className="absolute top-8 left-8 w-16 h-16 border-2 border-electric-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute top-16 right-12 w-12 h-12 border-2 border-purple-500 rounded-lg"
                  animate={{ scale: [1, 0.8, 1], rotate: [0, -90, -180] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute bottom-12 left-12 w-20 h-20 border-2 border-electric-500 rounded-full"
                  animate={{ scale: [1, 1.3, 1], rotate: [0, 90, 180, 270, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute bottom-8 right-8 w-8 h-8 border-2 border-purple-500 rounded-full"
                  animate={{ scale: [1, 1.1, 1], rotate: [0, -180, -360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
              </div>
              
              {/* Central icon */}
              <motion.div
                className="relative z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg className="w-32 h-32 text-electric-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
