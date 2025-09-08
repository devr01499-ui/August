'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactRibbon() {
  const [isVisible, setIsVisible] = useState(true)

  const handleContactClick = () => {
    // Scroll to contact form or open contact modal
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '/contact'
    }
  }

  const handleBookAppointment = () => {
    // Navigate to contact page with appointment focus
    window.location.href = '/contact?focus=appointment'
  }

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-40 bg-accent-500/95 backdrop-blur-md border-t border-teal-400/30 px-4 py-4"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBookAppointment}
            className="btn-gradient py-2 px-6 rounded-lg text-sm font-semibold transition-all duration-300"
          >
            Book Appointment
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContactClick}
            className="btn-outline py-2 px-6 rounded-lg text-sm font-semibold border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white transition-all duration-300"
          >
            Contact Us
          </motion.button>
        </div>
        
        <div className="flex items-center gap-4">
          <a
            href="mailto:devr01499@gmail.com"
            className="text-light-200 hover:text-teal-400 transition-colors duration-300 text-sm font-medium flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            devr01499@gmail.com
          </a>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsVisible(false)}
            className="text-light-300 hover:text-light-50 transition-colors duration-300"
            aria-label="Close ribbon"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
