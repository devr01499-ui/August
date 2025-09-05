'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { sendContactForm } from '@/lib/emailjs'

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
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Partner With Us?</h3>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business operations and drive growth together.
            </p>
            <button
              onClick={() => {
                window.location.href = '/partner'
              }}
              className="btn-primary text-white py-4 px-8 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              Discuss Partnership
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
