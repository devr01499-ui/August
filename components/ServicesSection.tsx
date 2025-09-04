'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    id: 1,
    title: 'Customer Support Solutions',
    description: 'Professional customer service representatives available 24/7 to handle inquiries, resolve issues, and provide exceptional support to your customers.',
    image: '/images/customer-support.jpg',
    icon: '🎧',
    features: ['24/7 Availability', 'Multi-language Support', 'Omnichannel Solutions']
  },
  {
    id: 2,
    title: 'Tech Support',
    description: 'Expert technical support for IT infrastructure, software issues, and system maintenance with rapid response times.',
    image: '/images/tech-support.jpg',
    icon: '💻',
    features: ['Expert technicians', 'Rapid response', 'Infrastructure support']
  },
  {
    id: 3,
    title: 'Data Processing',
    description: 'Accurate and efficient data processing, document digitization, and database management services to keep your business organized.',
    image: '/images/data-processing.jpg',
    icon: '📊',
    features: ['High Accuracy', 'Fast Turnaround', 'Secure Processing']
  },
  {
    id: 4,
    title: 'HR Consultancy',
    description: 'Professional HR consulting for talent management, compliance, and organizational development strategies.',
    image: '/images/hr-consultancy.jpg',
    icon: '👥',
    features: ['Recruitment Support', 'Payroll Assistance', 'Policy Compliance']
  }
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 section-title">Our Comprehensive Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Tailored BPO solutions designed to meet your unique business requirements</p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <Image 
                src={service.image} 
                alt={service.title} 
                width={400} 
                height={192} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="mt-6 w-full btn-gradient text-white font-semibold py-3 px-6 rounded-lg"
                >
                  Schedule Appointment
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
