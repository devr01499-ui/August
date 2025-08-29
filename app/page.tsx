'use client'

import { useEffect } from 'react'
import TopBar from '@/components/TopBar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import { EMAILJS_CONFIG } from '@/lib/emailjs-config'

export default function Home() {
  useEffect(() => {
    // Initialize EmailJS
    const initEmailJS = async () => {
      const emailjs = await import('@emailjs/browser')
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
    }
    initEmailJS()
  }, [])

  return (
    <main className="min-h-screen bg-white">
      <TopBar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
