'use client'

import { motion } from 'framer-motion'

interface TimelineStep {
  step: string
  title: string
  description: string
  icon: string
}

interface TimelineStepsProps {
  title: string
  subtitle?: string
  steps: TimelineStep[]
  className?: string
}

export default function TimelineSteps({
  title,
  subtitle,
  steps,
  className = ""
}: TimelineStepsProps) {
  return (
    <section className={`py-20 bg-secondary ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-light-50">
            {title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="gradient-text">
              {title.split(' ').slice(-1)[0]}
            </span>
          </h2>
          {subtitle && (
            <p className="text-xl text-light-200 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-teal-400 to-lime-400 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-navy-900 rounded-full flex items-center justify-center text-sm font-bold text-teal-400">
                  {step.step}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-light-50">{step.title}</h3>
              <p className="text-light-200 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
