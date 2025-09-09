'use client'

import TopBar from '@/components/TopBar'
import ReliableImage from '@/components/ReliableImage'
import PremiumFooter from '@/components/PremiumFooter'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

// Icons for contact info
const EmailIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    focus: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const focus = urlParams.get('focus')
    if (focus) {
      setFormData(prev => ({ ...prev, focus }))
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', message: '', focus: '' })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <main className="min-h-screen bg-navy-900">
      <TopBar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-electric-900 pt-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-electric-500/20 to-coral-500/20 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight">
                Contact AdmirerX
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                We Admire Your Dreams
              </p>
              
              {/* Professional content in bordered box */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-8">
                <p className="text-lg text-white/90 leading-relaxed">
                  Ready to transform your business? Get in touch with our team to discuss how we can help you 
                  achieve your goals with our comprehensive BPO solutions. We're here to answer your questions 
                  and provide the solutions you need.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-gradient-to-r from-electric to-purple text-white font-semibold rounded-xl hover:from-electric-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Book Appointment
                </button>
                <button
                  onClick={() => window.location.href = '/about'}
                  className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>

            <div className="relative">
              <ReliableImage
                src="/images/hero.jpg"
                alt="Contact AdmirerX"
                width={600}
                height={400}
                className="w-full h-auto rounded-3xl shadow-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-24 bg-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-heading font-bold text-navy mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-electric to-purple rounded-xl flex items-center justify-center flex-shrink-0">
                    <EmailIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-navy mb-2">Email Us</h3>
                    <p className="text-navy-600 mb-1">Management@admirerx.net</p>
                    <p className="text-sm text-navy-500">We typically respond within 2-4 hours during business hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-electric to-purple rounded-xl flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-navy mb-2">Call Us</h3>
                    <p className="text-navy-600 mb-1">+91 98765 43210</p>
                    <p className="text-sm text-navy-500">Mon-Fri 9AM-6PM IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-electric to-purple rounded-xl flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-navy mb-2">Business Hours</h3>
                    <p className="text-navy-600 mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-sm text-navy-500">Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gradient-to-r from-electric-500/10 to-coral-500/10 rounded-2xl">
                <h3 className="text-xl font-heading font-bold text-navy mb-4">Why Choose AdmirerX?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-navy-600">
                    <CheckIcon className="w-5 h-5 text-electric mr-3 flex-shrink-0" />
                    ISO 27001 Security Certified
                  </li>
                  <li className="flex items-center text-navy-600">
                    <CheckIcon className="w-5 h-5 text-electric mr-3 flex-shrink-0" />
                    Dedicated Account Manager
                  </li>
                  <li className="flex items-center text-navy-600">
                    <CheckIcon className="w-5 h-5 text-electric mr-3 flex-shrink-0" />
                    24/7 Support Available
                  </li>
                  <li className="flex items-center text-navy-600">
                    <CheckIcon className="w-5 h-5 text-electric mr-3 flex-shrink-0" />
                    Customized Solutions
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-heading font-bold text-navy mb-6">Book Appointment</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckIcon className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-navy mb-2">Thank You!</h4>
                  <p className="text-navy-600">We'll get back to you within 2-4 hours during business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-electric-500 focus:border-electric-500 transition-colors duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-electric-500 focus:border-electric-500 transition-colors duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="focus" className="block text-sm font-medium text-navy mb-2">
                      I'm interested in
                    </label>
                    <select
                      id="focus"
                      name="focus"
                      value={formData.focus}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-electric-500 focus:border-electric-500 transition-colors duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="hr-recruitment">HR & Recruitment</option>
                      <option value="customer-support">Customer Support</option>
                      <option value="lead-generation">Lead Generation</option>
                      <option value="tech-helpdesk">Technical Helpdesk</option>
                      <option value="data-processing">Data Processing & Back Office</option>
                      <option value="custom-bpo">Custom BPO Solution</option>
                      <option value="partnership">Partnership</option>
                      <option value="careers">Careers</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-electric-500 focus:border-electric-500 transition-colors duration-300"
                      placeholder="Tell us about your requirements and how we can help you"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-electric to-purple text-white font-semibold rounded-xl hover:from-electric-600 hover:to-coral-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? 'Sending...' : 'Book Appointment'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <PremiumFooter />
    </main>
  )
}