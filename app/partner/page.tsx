'use client'

import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { sendContactForm } from '@/lib/emailjs'

export default function PartnerPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    serviceInterest: '',
    needs: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState<string>('')

  const whyPartnerCards = [
    {
      title: 'Dedicated Managers',
      description: 'Assigned account managers who understand your business and provide personalized support.'
    },
    {
      title: 'Flexible Models',
      description: 'Onshore, offshore, and hybrid engagement models tailored to your specific needs.'
    },
    {
      title: 'Transparent Pricing',
      description: 'Clear, competitive pricing with no hidden costs and flexible payment terms.'
    },
    {
      title: 'SLA Commitment',
      description: 'Guaranteed service levels with performance metrics and continuous improvement.'
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes and real-time performance monitoring.'
    },
    {
      title: 'True Partnership',
      description: 'Collaborative approach focused on your long-term growth and success.'
    }
  ]

  const howWeWorkSteps = [
    { step: '1', title: 'Understand', description: 'We analyze your business needs and challenges' },
    { step: '2', title: 'Co-Design', description: 'Collaborate to create tailored solutions' },
    { step: '3', title: 'Deploy', description: 'Implement with minimal disruption to your operations' },
    { step: '4', title: 'Improve', description: 'Continuously optimize and scale your success' }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      const result = await sendContactForm({
        name: formData.fullName,
        email: formData.email,
        company: formData.companyName,
        service: formData.serviceInterest,
        message: formData.needs,
      })

      if (result.success) {
        setSubmitStatus('success')
        setSubmitMessage('✅ Partnership inquiry submitted successfully!')
        setFormData({
          fullName: '',
          email: '',
          companyName: '',
          serviceInterest: '',
          needs: ''
        })
      } else {
        setSubmitStatus('error')
        setSubmitMessage('❌ Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setSubmitMessage('❌ Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-deep">
      <TopBar />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-deep">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let's Build <span className="text-gradient">Success Together</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              We believe the best business outcomes come from strong partnerships. As your outsourcing partner, we bring transparency, reliability, and innovation to every engagement—helping you scale operations without scaling headaches.
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-deep">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Partner With Us</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Discover the advantages of partnering with AdmirerX for your business process outsourcing needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyPartnerCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary rounded-2xl p-6 hover:scale-105 transition-transform duration-300 border border-gray-600"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
                <p className="text-gray-400">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-deep">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">How We Work</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Our proven methodology ensures seamless integration and maximum value delivery for your business operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howWeWorkSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-deep">
        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary rounded-2xl p-8 border border-gray-600">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Discuss Partnership</h2>
              <p className="text-lg text-gray-400">
                Ready to transform your business operations? Let's discuss how we can help you achieve your goals.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-deep text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-deep text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-white mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-deep text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="serviceInterest" className="block text-sm font-medium text-white mb-2">
                  Service Interest
                </label>
                <select
                  id="serviceInterest"
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-deep text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                >
                  <option value="">Select a service</option>
                  <option value="HR & Recruitment">HR & Recruitment</option>
                  <option value="Customer Support">Customer Support</option>
                  <option value="Lead Generation">Lead Generation</option>
                  <option value="Technical Helpdesk">Technical Helpdesk</option>
                  <option value="Data Processing & Back Office">Data Processing & Back Office</option>
                  <option value="Custom BPO Solutions">Custom BPO Solutions</option>
                </select>
              </div>

              <div>
                <label htmlFor="needs" className="block text-sm font-medium text-white mb-2">
                  Tell us about your needs *
                </label>
                <textarea
                  id="needs"
                  name="needs"
                  value={formData.needs}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-deep text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Describe your business needs and how we can help..."
                />
              </div>

              {/* Submit Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="toast-success"
                >
                  {submitMessage}
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="toast-error"
                >
                  {submitMessage}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary disabled:opacity-50 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Send Partnership Inquiry'}
              </motion.button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
