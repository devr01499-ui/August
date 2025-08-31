'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '@/lib/emailjs-config'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    appointmentDate: '',
    appointmentTime: '',
    allowStorage: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
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

  // Get maximum date (3 months from today)
  const getMaxDate = () => {
    const maxDate = new Date()
    maxDate.setMonth(maxDate.getMonth() + 3)
    return maxDate.toISOString().split('T')[0]
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.allowStorage) {
      alert('Please allow us to store your submission to respond to your inquiry.')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // EmailJS configuration
      const templateParams = {
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        message: formData.message,
        appointment_date: formData.appointmentDate,
        appointment_time: formData.appointmentTime,
        reply_to: formData.email
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      if (result.status === 200) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
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
      }
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            We're here to assist you!
          </h2>
          <p className="text-xl text-gray-600">
            Get in touch with us to discuss your business needs and discover how we can help you succeed.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            {/* Appointment Date and Time Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Appointment Date *
                </label>
                <input
                  type="date"
                  id="appointmentDate"
                  name="appointmentDate"
                  value={formData.appointmentDate}
                  onChange={handleInputChange}
                  min={getMinDate()}
                  max={getMaxDate()}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                />
                <p className="text-xs text-gray-500 mt-1">Working days: Monday to Saturday</p>
              </div>
              <div>
                <label htmlFor="appointmentTime" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time Slot *
                </label>
                <select
                  id="appointmentTime"
                  name="appointmentTime"
                  value={formData.appointmentTime}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                >
                  <option value="">Select a time slot</option>
                  {generateTimeSlots().map((time) => (
                    <option key={time} value={time}>
                      {time} IST
                    </option>
                  ))}
                </select>
                <p className="text-xs text-gray-500 mt-1">Working hours: 10:00 AM - 6:00 PM IST</p>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
                placeholder="Tell us about your business needs and how we can help..."
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="allowStorage"
                name="allowStorage"
                checked={formData.allowStorage}
                onChange={handleInputChange}
                required
                className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="allowStorage" className="text-sm text-gray-600">
                I allow this website to store my submission so they can respond to my inquiry.
              </label>
            </div>

            {/* Submit Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg"
              >
                Thank you! Your appointment request has been sent successfully. We'll confirm your appointment at {formData.appointmentDate} at {formData.appointmentTime} IST and get back to you soon.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg"
              >
                Sorry, there was an error sending your message. Please try again or contact us directly.
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-center"
        >
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="text-3xl mb-4">🌐</div>
            <h3 className="font-semibold text-gray-900 mb-2">Website</h3>
            <p className="text-gray-600">www.admirerx.com</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="text-3xl mb-4">⏰</div>
            <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
            <p className="text-gray-600">Mon-Sat: 10:00 AM - 6:00 PM IST</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
