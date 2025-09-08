'use client'

import { motion } from 'framer-motion'

interface ValuePillar {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  color: string
}

interface ValuePillarsProps {
  title: string
  subtitle?: string
  pillars: ValuePillar[]
  className?: string
}

export default function ValuePillars({
  title,
  subtitle,
  pillars,
  className = ""
}: ValuePillarsProps) {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass p-8 rounded-2xl text-center group hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${pillar.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <pillar.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-light-50">{pillar.title}</h3>
              <p className="text-light-200 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
