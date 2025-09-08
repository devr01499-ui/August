'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
// Removed EmailJS import - using our backend instead

export default function CareersSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    coverLetter: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState<string>('')

  const joinOurTeam = [
    {
      title: 'Career Growth',
      description: 'Clear advancement paths and opportunities for professional development',
      image: '/images/hero.jpg'
    },
    {
      title: 'Training & Development',
      description: 'Comprehensive training programs and skill enhancement opportunities',
      image: '/images/hero.jpg'
    },
    {
      title: 'Inclusive Culture',
      description: 'Diverse, inclusive workplace that values every team member',
      image: '/images/hero.jpg'
    },
    {
      title: 'Performance Rewards',
      description: 'Competitive compensation and performance-based incentives',
      image: '/images/hero.jpg'
    },
    {
      title: 'Comprehensive Benefits',
      description: 'Health insurance, retirement plans, and other employee benefits',
      image: '/images/hero.jpg'
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible schedules and policies that support work-life balance',
      image: '/images/hero.jpg'
    }
  ]

  const openPositions = [
    {
      title: 'Customer Support Representative',
      department: 'Customer Service',
      type: 'Full-time',
      location: 'Remote'
    },
    {
      title: 'Data Entry Specialist',
      department: 'Data Processing',
      type: 'Full-time',
      location: 'Remote'
    },
    {
      title: 'Technical Support Engineer',
      department: 'Technical Support',
      type: 'Full-time',
      location: 'Remote'
    },
    {
      title: 'Quality Assurance Analyst',
      department: 'Quality Assurance',
      type: 'Full-time',
      location: 'Remote'
    },
    {
      title: 'Team Lead – Operations',
      department: 'Operations',
      type: 'Full-time',
      location: 'Remote'
    },
    {
      title: 'Business Development Associate',
      department: 'Business Development',
      type: 'Full-time',
      location: 'Remote'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle file upload logic here
    console.log('File uploaded:', e.target.files?.[0])
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      // Create FormData for file upload
      const formDataToSend = new FormData()
      formDataToSend.append('fullName', formData.fullName)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('role', formData.role)
      formDataToSend.append('coverLetter', formData.coverLetter)
      
      // Add CV file if selected
      const cvFileInput = document.getElementById('cvFile') as HTMLInputElement
      if (cvFileInput?.files?.[0]) {
        formDataToSend.append('cvFile', cvFileInput.files[0])
      }

      const response = await fetch('/api/careers', {
        method: 'POST',
        body: formDataToSend
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setSubmitMessage(`✅ Application submitted successfully! Resume ID: ${result.resumeId}. We'll review your application and get back to you soon.`)
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          role: '',
          coverLetter: ''
        })
        // Reset file input
        if (cvFileInput) {
          cvFileInput.value = ''
        }
      } else {
        setSubmitStatus('error')
        setSubmitMessage('❌ ' + (result.error || 'Something went wrong. Please try again.'))
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
    <section id="careers" className="py-20 px-4 sm:px-6 lg:px-8 bg-deep">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Join Our Growing Team
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            At AdmirerX, you're not just an employee—you're part of our mission to raise the bar in outsourcing. We invest in our people, provide structured training, and create clear paths for advancement.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Join Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {joinOurTeam.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary rounded-2xl p-6 hover:scale-105 transition-transform duration-300 border border-gray-600"
              >
                <h4 className="text-xl font-semibold text-white mb-3">{benefit.title}</h4>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Open Positions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary rounded-2xl p-6 hover:scale-105 transition-transform duration-300 border border-gray-600"
              >
                <h4 className="text-xl font-semibold text-white mb-2">{position.title}</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <p><span className="text-white">Department:</span> {position.department}</p>
                  <p><span className="text-white">Type:</span> {position.type}</p>
                  <p><span className="text-white">Location:</span> {position.location}</p>
                </div>
                <button
                  onClick={() => {
                    document.getElementById('career-form')?.scrollIntoView({ behavior: 'smooth' })
                    setFormData(prev => ({ ...prev, role: position.title }))
                  }}
                  className="w-full mt-4 btn-primary text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Apply for a Position Form */}
        <div id="career-form" className="bg-secondary rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Apply for a Position</h3>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
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
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-deep text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-white mb-2">
                  Role Applying For *
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-deep text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                >
                  <option value="">Select a position</option>
                  {openPositions.map((position) => (
                    <option key={position.title} value={position.title}>
                      {position.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="cvFile" className="block text-sm font-medium text-white mb-2">
                Upload CV *
              </label>
              <input
                type="file"
                id="cvFile"
                name="cvFile"
                onChange={handleFileUpload}
                accept=".pdf,.doc,.docx"
                required
                className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-deep text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              <p className="text-xs text-gray-400 mt-1">Accepted formats: PDF, DOC, DOCX (Max 10MB)</p>
            </div>

            <div>
              <label htmlFor="coverLetter" className="block text-sm font-medium text-white mb-2">
                Cover Letter/Message *
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-deep text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                placeholder="Tell us why you're interested in this position and what you can bring to our team..."
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
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  )
}
