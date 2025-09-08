'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
// Removed EmailJS import - using our backend instead

export default function PartnerSection() {
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

  const partnershipBenefits = [
    { number: '40%', label: 'Average cost reduction' },
    { number: '99.5%', label: 'Service uptime guarantee' },
    { number: '24/7', label: 'Support availability' },
    { number: '30+', label: 'Days to full deployment' }
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: '', // Partner form doesn't have phone
          message: `Company: ${formData.companyName}\nService Interest: ${formData.serviceInterest}\nNeeds: ${formData.needs}`,
          service: 'Partnership Inquiry',
          source: 'partnership'
        })
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setSubmitMessage('✅ Partnership inquiry submitted successfully! We\'ll get back to you soon.')
        setFormData({
          fullName: '',
          email: '',
          companyName: '',
          serviceInterest: '',
          needs: ''
        })
      } else {
        setSubmitStatus('error')
        setSubmitMessage('❌ ' + (result.message || 'Something went wrong. Please try again.'))
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setSubmitMessage('❌ Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="partner" className="py-20 px-4 sm:px-6 lg:px-8 bg-deep">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let's Build Success Together
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            We believe the best business outcomes come from strong partnerships. As your outsourcing partner, we bring transparency, reliability, and innovation to every engagement—helping you scale operations without scaling headaches.
          </p>
        </div>

        {/* Why Partner With Us */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Why Partner With Us</h3>
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
                <h4 className="text-xl font-semibold text-white mb-3">{card.title}</h4>
                <p className="text-gray-400">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* How We Work */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">How We Work</h3>
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
                <h4 className="text-xl font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Discuss Partnership CTA */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-secondary rounded-2xl p-12 border border-gray-600"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Discuss Partnership</h3>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Build trust and growth-readiness with our strategic partnership approach. We offer:
            </p>
            
            {/* Benefits List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Scale</h4>
                <p className="text-gray-400 text-sm">Leverage our infrastructure to scale your operations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Co-invest</h4>
                <p className="text-gray-400 text-sm">Shared investment in growth initiatives</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Growth Partnership</h4>
                <p className="text-gray-400 text-sm">Long-term strategic partnership for mutual success</p>
              </div>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-lg text-gray-300 italic mb-8 max-w-3xl mx-auto">
              "Partnering with AdmirerX has been transformative for our business. Their expertise and dedication have helped us scale our operations while maintaining the highest quality standards."
            </blockquote>
            <p className="text-white font-semibold mb-2">Sarah Johnson</p>
            <p className="text-gray-400 text-sm mb-8">CEO, TechCorp Solutions</p>

            <a
              href="/partner"
              className="btn-primary text-white py-4 px-8 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105 inline-block"
            >
              Enquire Now
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
