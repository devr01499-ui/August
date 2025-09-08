'use client'

import { motion } from 'framer-motion'
import React from 'react'
import OptimizedMotion from './OptimizedMotion'

interface TimelineStep {
  step: number
  title: string
  description: string
  icon?: React.ComponentType<{ className?: string }>
  color?: string
}

interface AnimatedTimelineProps {
  title: string
  subtitle: string
  steps: TimelineStep[]
  orientation?: 'horizontal' | 'vertical'
  theme?: 'navy-electric' | 'purple-gradient' | 'teal-cyan'
}

// Default step icons
const DefaultStepIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const ProcessIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const ConnectIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
)

export default function AnimatedTimeline({ 
  title, 
  subtitle, 
  steps, 
  orientation = 'horizontal',
  theme = 'navy-electric'
}: AnimatedTimelineProps) {
  const themeColors = {
    'navy-electric': { primary: '#0A1B3C', secondary: '#0066FF', accent: '#4B2CE1' },
    'purple-gradient': { primary: '#4B2CE1', secondary: '#0066FF', accent: '#0A1B3C' },
    'teal-cyan': { primary: '#0A1B3C', secondary: '#14B8A6', accent: '#06B6D4' }
  }

  const colors = themeColors[theme]

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1: return ProcessIcon
      case 2: return ConnectIcon
      case 3: return DefaultStepIcon
      default: return DefaultStepIcon
    }
  }

  if (orientation === 'vertical') {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-900">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-soft-50 mb-6">
              {title}
            </h2>
            <p className="text-xl text-soft-300 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </motion.div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-500 to-purple-500"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            />

            {/* Steps */}
            {steps.map((step, index) => {
              const StepIcon = step.icon || getStepIcon(step.step)
              const isEven = index % 2 === 0

              return (
                <OptimizedMotion 
                  key={step.step} 
                  animation="slideUp" 
                  delay={index * 200}
                  className="relative mb-12 last:mb-0"
                >
                  <div className={`flex items-start ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Timeline Node */}
                    <motion.div
                      className="relative z-10 flex-shrink-0 w-16 h-16 glass rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      animate={{ 
                        boxShadow: [
                          `0 0 0 0 ${colors.secondary}40`,
                          `0 0 0 10px ${colors.secondary}00`,
                          `0 0 0 0 ${colors.secondary}00`
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      <StepIcon className={`w-8 h-8 ${step.color || 'text-electric-500'}`} />
                    </motion.div>

                    {/* Content */}
                    <motion.div 
                      className={`flex-1 ${isEven ? 'ml-8' : 'mr-8'} text-${isEven ? 'left' : 'right'}`}
                      whileHover={{ x: isEven ? 10 : -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="glass p-6 rounded-2xl">
                        <div className="flex items-center mb-4">
                          <span className="text-2xl font-bold text-electric-500 mr-3">
                            {step.step.toString().padStart(2, '0')}
                          </span>
                          <h3 className="text-2xl font-heading font-bold text-soft-50">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-soft-300 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </OptimizedMotion>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  // Horizontal Timeline
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-soft-50 mb-6">
            {title}
          </h2>
          <p className="text-xl text-soft-300 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-500 via-purple-500 to-electric-500"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const StepIcon = step.icon || getStepIcon(step.step)

              return (
                <OptimizedMotion 
                  key={step.step} 
                  animation="slideUp" 
                  delay={index * 200}
                  className="relative"
                >
                  {/* Timeline Node */}
                  <motion.div
                    className="relative z-10 w-32 h-32 mx-auto mb-6 glass rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    animate={{ 
                      y: [0, -10, 0],
                      boxShadow: [
                        `0 0 0 0 ${colors.secondary}40`,
                        `0 0 0 15px ${colors.secondary}00`,
                        `0 0 0 0 ${colors.secondary}00`
                      ]
                    }}
                    transition={{ 
                      y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 },
                      boxShadow: { duration: 2, repeat: Infinity, delay: index * 0.5 }
                    }}
                  >
                    <StepIcon className={`w-12 h-12 ${step.color || 'text-electric-500'}`} />
                  </motion.div>

                  {/* Content */}
                  <motion.div 
                    className="text-center"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="glass p-6 rounded-2xl h-full">
                      <div className="flex items-center justify-center mb-4">
                        <span className="text-3xl font-bold text-electric-500 mr-3">
                          {step.step.toString().padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="text-xl font-heading font-bold text-soft-50 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-soft-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Connection Arrow (except last item) */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute top-16 -right-4 z-20"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                      viewport={{ once: true }}
                    >
                      <svg className="w-8 h-8 text-electric-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  )}
                </OptimizedMotion>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
