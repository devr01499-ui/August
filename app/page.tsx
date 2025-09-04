'use client'

import TopBar from '@/components/TopBar'
import Hero from '@/components/Hero'
import ServicesGrid from '@/components/ServicesGrid'
import WhyChoose from '@/components/WhyChoose'
import Footer from '@/components/Footer'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-deep">
      <TopBar />
      <Hero />
      <div id="services">
        <ServicesGrid />
      </div>
      <div id="about">
        <WhyChoose />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
