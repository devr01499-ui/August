'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { sendContactForm } from '@/lib/emailjs'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Customer Support',
    message: '',
    appointmentDate: '',
    appointmentTime: '',
    allowStorage: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState<string>('')
  const formRef = useRef<HTMLFormElement>(null)

  // Generate time slots for working hours (10:00 AM - 6:00 PM IST)
  const generateTimeSlots = () => {
    const slots = []
    for (let hour = 10; hour <= 18; hour++) {
      const time = `${hour.toString().padStart(2, '0')}:00`
      slots.push(time)
      if (hour < 18) {
        slots.push(`${hour.toString().padStart(2, '0')}:30`)
      }
    }
    return slots
  }

  // Check if selected date is a working day (Monday to Saturday)
  const isWorkingDay = (dateString: string) => {
    const date = new Date(dateString)
    const day = date.getDay()
    return day >= 1 && day <= 6 // Monday = 1, Saturday = 6
  }

  // Get minimum date (today)
  const getMinDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  // Keep max date extended per spec
  const getMaxDate = () => '2090-12-31'

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      const result = await sendContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
      })

      if (result.success) {
        setSubmitStatus('success')
        setSubmitMessage('✅ Message sent successfully!')
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'Customer Support Solutions',
          message: '',
          appointmentDate: '',
          appointmentTime: '',
          allowStorage: false
        })
        if (formRef.current) {
          formRef.current.reset()
        }
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
    <section id="contact" className="py-20 bg-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to transform your business operations? Get in touch with our team of experts. We're here to answer your questions and help you find the perfect BPO solution.
          </p>
        </motion.div>

        {/* Contact Form and Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-secondary rounded-2xl p-8"
          >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-deep text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email *
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

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-deep text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                placeholder="+91 98765 43210"
              />
            </div>

            {/* Service Interest */}
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                Service Interest
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-deep text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
              >
                <option value="Customer Support Solutions">Customer Support Solutions</option>
                <option value="Data Processing & Back Office">Data Processing & Back Office</option>
                <option value="Lead Generation & Inside Sales">Lead Generation & Inside Sales</option>
                <option value="Technical Support / Helpdesk">Technical Support / Helpdesk</option>
                <option value="HR & Recruitment Process Outsourcing">HR & Recruitment Process Outsourcing</option>
                <option value="Custom BPO Solutions">Custom BPO Solutions</option>
              </select>
            </div>


            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-deep text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                placeholder="Tell us about your business needs and how we can help..."
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

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-primary disabled:opacity-50 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Send Message'}
            </motion.button>
          </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Office Address */}
            <div className="bg-secondary rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Office Address</h3>
              <p className="text-gray-400">
                123 Business District<br />
                Metropolitan City, State 12345<br />
                Country
              </p>
            </div>

            {/* Phone Numbers */}
            <div className="bg-secondary rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Phone Numbers</h3>
              <div className="space-y-2 text-gray-400">
                <p>+1 (555) 123-4567</p>
                <p>+1 (555) 123-4568</p>
                <p>Toll-free: 1-800-BPO-HELP</p>
              </div>
            </div>

            {/* Email Addresses */}
            <div className="bg-secondary rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Email Addresses</h3>
              <div className="space-y-2 text-gray-400">
                <p>info@admirerx.com</p>
                <p>sales@admirerx.com</p>
                <p>support@admirerx.com</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-secondary rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-400">
                <p>Monday–Friday: 8:00 AM – 8:00 PM</p>
                <p>Saturday: 9:00 AM – 5:00 PM</p>
                <p>Sunday: Emergency Support Only</p>
              </div>
            </div>

            {/* Our Location */}
            <div className="bg-secondary rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Our Location</h3>
              <div className="w-full h-48 bg-gray-700 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Google Maps Integration</p>
              </div>
            </div>

            {/* Follow Us */}
            <div className="bg-secondary rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/admirerx-private-limited-2b9491382?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center text-white hover:bg-blue-900 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
