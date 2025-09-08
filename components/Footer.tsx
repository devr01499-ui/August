'use client'

import { motion } from 'framer-motion'

// LinkedIn Icon Component
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

// Email Icon Component
const EmailIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

// Phone Icon Component
const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-deep text-light-50 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="text-3xl font-extrabold mb-4">
              <span className="gradient-text">AdmirerX</span>
            </div>
            <p className="text-light-200 mb-6 max-w-md leading-relaxed">
              Your trusted partner for premium BPO services, delivering efficiency and excellence across industries with cutting-edge technology and dedicated support.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <EmailIcon className="w-5 h-5 text-teal-400" />
                <span className="text-light-200">devr01499@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-teal-400" />
                <span className="text-light-200">+1 (555) 123-4567</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-light-50 mb-4">Services</h3>
            <ul className="space-y-3 text-light-200">
              <li><a href="/services#customer-support" className="hover:text-teal-400 transition-colors duration-300">Customer Support</a></li>
              <li><a href="/services#data-processing" className="hover:text-teal-400 transition-colors duration-300">Data Processing</a></li>
              <li><a href="/services#lead-generation" className="hover:text-teal-400 transition-colors duration-300">Lead Generation</a></li>
              <li><a href="/services#tech-support" className="hover:text-teal-400 transition-colors duration-300">Tech Support</a></li>
              <li><a href="/services#hr-consultancy" className="hover:text-teal-400 transition-colors duration-300">HR Consultancy</a></li>
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-light-50 mb-4">Connect</h3>
            <div className="flex items-center gap-3 mb-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/admirerx-private-limited-2b9491382"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent-500 border border-teal-400/30 flex items-center justify-center hover:bg-teal-400 hover:border-teal-400 transition-all duration-300"
              >
                <LinkedInIcon className="h-5 w-5 text-light-50" />
              </motion.a>
            </div>
            
            <div className="space-y-2">
              <a href="/about" className="block text-light-200 hover:text-teal-400 transition-colors duration-300">About Us</a>
              <a href="/careers" className="block text-light-200 hover:text-teal-400 transition-colors duration-300">Careers</a>
              <a href="/contact" className="block text-light-200 hover:text-teal-400 transition-colors duration-300">Contact</a>
              <a href="/partner" className="block text-light-200 hover:text-teal-400 transition-colors duration-300">Partnership</a>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-accent-500/30 mt-12 pt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0 sm:justify-between"
        >
          <p className="text-light-300 text-sm">© 2025 AdmirerX. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-light-300 hover:text-teal-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-light-300 hover:text-teal-400 transition-colors duration-300">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
