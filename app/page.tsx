'use client'

import TopBar from '@/components/TopBar'
import Hero from '@/components/Hero'
import FeatureTiles from '@/components/FeatureTiles'
import WhyChoose from '@/components/WhyChoose'
import ServicesGrid from '@/components/ServicesGrid'
import HowWeWork from '@/components/HowWeWork'
import PartnerSection from '@/components/PartnerSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-deep">
      <TopBar />
      <Hero />
      <FeatureTiles />
      <WhyChoose />
      <ServicesGrid />
      <HowWeWork />
      <PartnerSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
