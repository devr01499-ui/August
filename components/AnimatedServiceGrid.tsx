'use client'

import { motion } from 'framer-motion'
import React from 'react'
import OptimizedMotion from './OptimizedMotion'
import OptimizedImage from './OptimizedImage'

interface Service {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  features: string[]
  image: string
  color: string
  bgColor: string
}

interface AnimatedServiceGridProps {
  title: string
  subtitle: string
  services: Service[]
  onServiceClick?: (id: string) => void
}

// Individual Animated Service Card
const AnimatedServiceCard = ({ 
  service, 
  index, 
  onServiceClick 
}: { 
  service: Service
  index: number
  onServiceClick?: (id: string) => void 
}) => {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <OptimizedMotion animation="slideUp" delay={index * 100} className="h-full">
      <motion.div
        className="service-card h-full flex flex-col group cursor-pointer"
        whileHover="hover"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={() => onServiceClick && onServiceClick(service.id)}
        variants={{
          hover: {
            scale: 1.03,
            boxShadow: "0 25px 50px rgba(0, 102, 255, 0.2)",
            borderColor: "#0066FF",
            y: -8
          },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Image Container with Hover Effect */}
        <div className="relative w-full h-48 rounded-t-2xl overflow-hidden mb-6">
          <OptimizedImage
            src={service.image}
            alt={service.title}
            width={400}
            height={200}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent"></div>
          
          {/* Floating Icon Animation */}
          <motion.div
            className="absolute top-4 right-4 w-12 h-12 glass rounded-full flex items-center justify-center"
            animate={isHovered ? { 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            } : {}}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <service.icon className={`w-6 h-6 ${service.color}`} />
          </motion.div>

          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-electric-500/20 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Icon and Title */}
          <div className="flex items-center mb-4">
            <motion.div
              className={`w-10 h-10 ${service.bgColor} rounded-lg flex items-center justify-center mr-4`}
              animate={isHovered ? { 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              } : {}}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <service.icon className={`w-6 h-6 ${service.color}`} />
            </motion.div>
            <h3 className="text-2xl font-heading font-bold text-soft-50 group-hover:text-gradient-electric transition-colors duration-300">
              {service.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-soft-300 mb-6 leading-relaxed flex-1">
            {service.description}
          </p>

          {/* Features List with Staggered Animation */}
          <motion.ul className="space-y-2 mb-6">
            {service.features.slice(0, 3).map((feature, i) => (
              <motion.li 
                key={i} 
                className="flex items-center gap-2 text-sm text-soft-400"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <motion.svg 
                  className="w-4 h-4 text-electric-500 flex-shrink-0"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  animate={isHovered ? { 
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, 0]
                  } : {}}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </motion.svg>
                <span className="group-hover:text-soft-300 transition-colors duration-300">
                  {feature}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Hover Indicator */}
          <motion.div
            className="flex items-center text-electric-400 text-sm font-medium"
            animate={isHovered ? { x: [0, 5, 0] } : {}}
            transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <span>Learn More</span>
            <motion.svg 
              className="w-4 h-4 ml-2"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              animate={isHovered ? { x: [0, 3, 0] } : {}}
              transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.div>
        </div>

        {/* Animated Border */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-transparent"
          animate={isHovered ? {
            borderColor: "#0066FF",
            boxShadow: "0 0 20px rgba(0, 102, 255, 0.3)"
          } : {}}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </OptimizedMotion>
  )
}

export default function AnimatedServiceGrid({ 
  title, 
  subtitle, 
  services, 
  onServiceClick 
}: AnimatedServiceGridProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-soft-50 mb-6">
            {title.split(' ').slice(0, -1).join(' ')} <span className="text-gradient-electric">{title.split(' ').slice(-1)[0]}</span>
          </h2>
          <p className="text-xl text-soft-300 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedServiceCard
              key={service.id}
              service={service}
              index={index}
              onServiceClick={onServiceClick}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-heading font-bold text-soft-50 mb-4">
            Explore All Our Solutions
          </h3>
          <p className="text-xl text-soft-300 mb-8">
            Dive deeper into our comprehensive suite of BPO services designed to elevate your business.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/services'}
            className="btn-primary py-3 px-8 relative overflow-hidden group"
          >
            <span className="relative z-10">View All Services</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-electric-500 to-purple-500 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
