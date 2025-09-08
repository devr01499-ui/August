'use client'

import { motion } from 'framer-motion'

interface ServiceCard {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  features: string[]
  color: string
  bgColor: string
  cta: string
  onCtaClick: () => void
}

interface ServiceCardsProps {
  title: string
  subtitle?: string
  services: ServiceCard[]
  className?: string
}

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

export default function ServiceCards({
  title,
  subtitle,
  services,
  className = ""
}: ServiceCardsProps) {
  return (
    <section className={`py-20 ${className}`}>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className={`${service.bgColor} p-8 rounded-2xl border border-white/10 group hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-light-50">{service.title}</h3>
                <p className="text-light-200 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-lime-400 mt-0.5 flex-shrink-0" />
                      <span className="text-light-200">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={service.onCtaClick}
                  className={`w-full py-3 px-6 rounded-lg font-semibold bg-gradient-to-r ${service.color} text-white hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
                >
                  {service.cta}
                  <ArrowRightIcon className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
