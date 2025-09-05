'use client'

import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'
import ContactSection from '@/components/ContactSection'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-deep">
      <TopBar />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-deep">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to transform your business operations? Get in touch with our team of experts. We're here to answer your questions and help you find the perfect BPO solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-deep">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Why Choose AdmirerX?</h2>
              <p className="text-lg text-gray-400 mb-6">
                With years of experience in business process outsourcing, we understand the unique challenges your business faces. Our team of experts is dedicated to providing solutions that drive growth and efficiency.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Whether you need customer support, data processing, lead generation, or custom BPO solutions, we have the expertise and resources to help you succeed.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary rounded-lg p-4 border border-gray-600">
                  <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                  <p className="text-gray-400 text-sm">Round-the-clock assistance</p>
                </div>
                <div className="bg-secondary rounded-lg p-4 border border-gray-600">
                  <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
                  <p className="text-gray-400 text-sm">Certified professionals</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="AdmirerX contact team"
                width={600}
                height={400}
                className="rounded-2xl object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section Component */}
      <ContactSection />

      <Footer />
    </main>
  )
}
