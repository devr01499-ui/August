'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface ServiceDetailProps {
  service: {
    id: string
    title: string
    description: string
    problem: string
    solution: string
    features: string[]
    process: {
      step: number
      title: string
      description: string
    }[]
    useCase: {
      title: string
      description: string
      results: string[]
    }
    icon: React.ComponentType<{ className?: string }>
    color: string
    bgColor: string
  }
  onBookAppointment: () => void
}

export default function ServiceDetail({ service, onBookAppointment }: ServiceDetailProps) {
  const [activeProcessStep, setActiveProcessStep] = useState(0)

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-deep">
      <div className="max-w-7xl mx-auto">
        {/* Service Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className={`p-4 rounded-2xl ${service.bgColor}`}>
              <service.icon className={`w-12 h-12 ${service.color}`} />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-soft-50">
              {service.title}
            </h1>
          </div>
          
          <p className="text-xl text-soft-300 max-w-4xl mx-auto leading-relaxed">
            {service.description}
          </p>
        </motion.div>

        {/* Problem & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8"
          >
            <h3 className="text-2xl font-heading font-bold text-red-400 mb-4">The Problem</h3>
            <p className="text-soft-300 leading-relaxed text-lg">
              {service.problem}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8"
          >
            <h3 className="text-2xl font-heading font-bold text-electric-400 mb-4">Our Solution</h3>
            <p className="text-soft-300 leading-relaxed text-lg">
              {service.solution}
            </p>
          </motion.div>
        </div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-heading font-bold text-soft-50 text-center mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-gradient-electric rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <p className="text-soft-200 font-medium">{feature}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How It Works Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-heading font-bold text-soft-50 text-center mb-12">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`glass rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 ${
                  activeProcessStep === index ? 'ring-2 ring-electric-500' : ''
                }`}
                onClick={() => setActiveProcessStep(index)}
              >
                <div className="w-16 h-16 bg-gradient-electric rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-soft-50 mb-4">
                  {step.title}
                </h3>
                <p className="text-soft-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Use Case */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="glass rounded-3xl p-12">
            <h2 className="text-3xl font-heading font-bold text-soft-50 text-center mb-8">
              {service.useCase.title}
            </h2>
            <p className="text-xl text-soft-300 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
              {service.useCase.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.useCase.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-soft-200 font-medium">{result}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass rounded-3xl p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-soft-50 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-soft-300 mb-8">
              Let's discuss how {service.title} can transform your business operations
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBookAppointment}
              className="btn-primary px-8 py-4 text-lg"
            >
              Book Appointment
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
