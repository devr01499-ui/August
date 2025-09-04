'use client'

import { motion } from 'framer-motion'

export default function CtaSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-10 bg-purple-gradient text-white text-center shadow-xl">
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Ready to streamline your operations?
          </motion.h3>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg mb-8 opacity-95"
          >
            Let’s discuss how AdmireX can help your business grow.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gradient"
          >
            Book an Appointment
          </motion.button>
        </div>
      </div>
    </section>
  )
}


