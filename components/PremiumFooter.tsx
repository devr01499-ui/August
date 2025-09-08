'use client'

import { motion } from 'framer-motion'

export default function PremiumFooter() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about#team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Partners', href: '/partner' },
    ],
    services: [
      { name: 'Customer Support', href: '/services#customer-support' },
      { name: 'Data Processing', href: '/services#data-processing' },
      { name: 'Lead Generation', href: '/services#lead-generation' },
      { name: 'Tech Support', href: '/services#tech-support' },
      { name: 'HR Consultancy', href: '/services#hr-consultancy' },
    ],
    resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api-docs' },
      { name: 'Support Center', href: '/support' },
      { name: 'Contact Us', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ]
  }

  return (
    <footer className="bg-navy-900 text-soft-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-heading font-bold text-gradient-electric mb-4">
                AdmirerX
              </h3>
              <p className="text-soft-400 mb-6 leading-relaxed">
                Engineering digital growth with precision and vision. We deliver innovative 
                BPO solutions that transform businesses and empower talent worldwide.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2">
                <p className="text-soft-400">
                  <span className="text-soft-300 font-medium">Email:</span> Management@admirerx.net
                </p>
                <p className="text-soft-400">
                  <span className="text-soft-300 font-medium">Location:</span> Global Operations
                </p>
              </div>
            </motion.div>
          </div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-soft-50 mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-soft-400 hover:text-electric-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-soft-50 mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-soft-400 hover:text-electric-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources & Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-soft-50 mb-4">Resources</h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-soft-400 hover:text-electric-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold text-soft-50 mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-soft-400 hover:text-electric-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-soft-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-soft-400 text-sm">
              © {currentYear} AdmirerX Private Limited. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <span className="text-soft-500 text-sm">Powered by innovation</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-electric-500 rounded-full animate-pulse" />
                <span className="text-soft-500 text-sm">Online</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
