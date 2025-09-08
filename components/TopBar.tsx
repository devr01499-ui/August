'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function TopBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/', current: pathname === '/' },
    { name: 'About Us', href: '/about', current: pathname === '/about' },
    { name: 'Services', href: '/services', current: pathname === '/services' },
    { name: 'Careers', href: '/careers', current: pathname === '/careers' },
    { name: 'Partner With Us', href: '/partner', current: pathname === '/partner' },
    { name: 'Contact', href: '/contact', current: pathname === '/contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-navy-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with clickable heading */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-electric-500 to-coral-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div>
              <h1 className="text-2xl font-heading font-bold text-white group-hover:text-electric-400 transition-colors duration-300">
                AdmirerX
              </h1>
              <p className="text-xs text-white/70 font-medium">We Admire Your Dreams</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  item.current
                    ? 'text-electric-400'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.name}
                {item.current && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-500 to-coral-500 rounded-full"></div>
                )}
              </Link>
            ))}
            <button
              onClick={() => window.location.href = '/contact'}
              className="px-6 py-2 bg-gradient-to-r from-electric-500 to-coral-500 text-white font-semibold rounded-xl hover:from-electric-600 hover:to-coral-600 transition-all duration-300 transform hover:scale-105"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white/80 hover:text-white transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-navy-900/95 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                    item.current
                      ? 'bg-electric-500/20 text-electric-400 border border-electric-500/30'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  window.location.href = '/contact'
                  setIsMobileMenuOpen(false)
                }}
                className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-electric-500 to-coral-500 text-white font-semibold rounded-xl hover:from-electric-600 hover:to-coral-600 transition-all duration-300"
              >
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}