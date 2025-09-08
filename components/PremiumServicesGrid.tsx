'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

interface Service {
  id: string
  title: string
  description: string
  features: string[]
  icon: React.ComponentType<{ className?: string }>
  image: string
  color: string
  bgColor: string
}

interface PremiumServicesGridProps {
  title: string
  subtitle: string
  services: Service[]
}

export default function PremiumServicesGrid({ title, subtitle, services }: PremiumServicesGridProps) {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-soft-50 mb-6">
            {title}
          </h2>
          <p className="text-lg text-soft-300 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setHoveredService(index)}
              onHoverEnd={() => setHoveredService(null)}
              className="group relative"
            >
              <div className="service-card h-full flex flex-col">
                {/* Service Image */}
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredService === index ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-electric opacity-20"
                  />
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4">
                    <div className={`p-3 rounded-full ${service.bgColor} backdrop-blur-sm`}>
                      <service.icon className={`w-6 h-6 ${service.color}`} />
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="flex-1 flex flex-col p-6">
                  <h3 className="text-xl font-heading font-bold text-soft-50 mb-4 group-hover:text-gradient-electric transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-soft-300 mb-6 leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                        className="flex items-center gap-2 text-sm text-soft-400"
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-electric rounded-full flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}