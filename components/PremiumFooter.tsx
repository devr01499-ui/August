'use client'

import Link from 'next/link'

export default function PremiumFooter() {
  return (
    <footer className="bg-navy-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-electric-500 to-coral-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-white">AdmirerX</h3>
                <p className="text-sm text-white/70">We Admire Your Dreams</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Premium BPO solutions delivering efficiency, security, and excellence. 
              We empower businesses through innovative outsourcing services.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-electric-400 font-semibold text-sm">ISO</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-coral-400 font-semibold text-sm">24/7</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-electric-400 font-semibold text-sm">DAM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/70 hover:text-electric-400 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-electric-400 transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white/70 hover:text-electric-400 transition-colors duration-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/partner" className="text-white/70 hover:text-electric-400 transition-colors duration-300">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-electric-400 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services#hr-recruitment" className="text-white/70 hover:text-electric-400 transition-colors duration-300">
                  HR & Recruitment
                </Link>
              </li>
              <li>
                <Link href="/services#customer-support" className="text-white/70 hover:text-electric-400 transition-colors duration-300">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link href="/services#lead-generation" className="text-white/70 hover:text-electric-400 transition-colors duration-300">
                  Lead Generation
                </Link>
              </li>
              <li>
                <Link href="/services#tech-helpdesk" className="text-white/70 hover:text-electric-400 transition-colors duration-300">
                  Technical Helpdesk
                </Link>
              </li>
              <li>
                <Link href="/services#data-processing" className="text-white/70 hover:text-electric-400 transition-colors duration-300">
                  Data Processing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 AdmirerX Private Limited. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-white/60 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-white/60 hover:text-white transition-colors duration-300">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}