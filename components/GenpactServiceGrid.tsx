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

interface GenpactServiceGridProps {
  title: string
  subtitle: string
  services: Service[]
  onServiceClick?: (id: string) => void
}

// Enhanced Animated Service Card with Genpact-style effects
const GenpactServiceCard = ({ 
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
    <OptimizedMotion animation="slideUp" delay={index * 150} className="h-full">
      <motion.div
        className="service-card h-full flex flex-col group cursor-pointer relative overflow-hidden"
        whileHover="hover"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={() => onServiceClick && onServiceClick(service.id)}
        variants={{
          hover: {
            scale: 1.02,
            y: -12,
            boxShadow: "0 30px 60px rgba(0, 102, 255, 0.25)",
            borderColor: "#0066FF",
          },
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-electric-500/5 via-purple-500/5 to-cyan-500/5 opacity-0"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Image Container with Enhanced Effects */}
        <div className="relative w-full h-56 rounded-t-3xl overflow-hidden mb-8">
          <OptimizedImage
            src={service.image}
            alt={service.title}
            width={500}
            height={300}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Multi-layer Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent"></div>
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-electric-500/20 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Floating Icon with Enhanced Animation */}
          <motion.div
            className="absolute top-6 right-6 w-16 h-16 glass rounded-2xl flex items-center justify-center border border-electric-500/30"
            animate={isHovered ? { 
              scale: [1, 1.2, 1.1],
              rotate: [0, 10, -5, 0],
              boxShadow: "0 10px 30px rgba(0, 102, 255, 0.3)"
            } : {
              scale: 1,
              rotate: 0,
              boxShadow: "0 5px 15px rgba(0, 102, 255, 0.1)"
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <service.icon className={`w-8 h-8 ${service.color}`} />
          </motion.div>

          {/* Animated Border */}
          <motion.div
            className="absolute inset-0 rounded-t-3xl border-2 border-transparent"
            animate={isHovered ? {
              borderColor: "#0066FF",
              boxShadow: "inset 0 0 20px rgba(0, 102, 255, 0.2)"
            } : {}}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Content with Enhanced Typography */}
        <div className="p-8 flex-1 flex flex-col relative z-10">
          {/* Icon and Title with Better Spacing */}
          <div className="flex items-center mb-6">
            <motion.div
              className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center mr-5 border border-electric-500/20`}
              animate={isHovered ? { 
                scale: [1, 1.1, 1.05],
                rotate: [0, 5, -3, 0],
                boxShadow: "0 10px 25px rgba(0, 102, 255, 0.2)"
              } : {
                scale: 1,
                rotate: 0,
                boxShadow: "0 5px 15px rgba(0, 102, 255, 0.1)"
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <service.icon className={`w-7 h-7 ${service.color}`} />
            </motion.div>
            <h3 className="text-2xl font-heading font-bold text-soft-50 group-hover:text-gradient-electric transition-all duration-300">
              {service.title}
            </h3>
          </div>

          {/* Enhanced Description */}
          <p className="text-soft-300 mb-8 leading-relaxed flex-1 text-lg">
            {service.description}
          </p>

          {/* Features List with Staggered Animation */}
          <motion.ul className="space-y-3 mb-8">
            {service.features.slice(0, 4).map((feature, i) => (
              <motion.li 
                key={i} 
                className="flex items-center gap-3 text-soft-400 group-hover:text-soft-300 transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <motion.div
                  className="w-2 h-2 bg-gradient-to-r from-electric-500 to-purple-500 rounded-full flex-shrink-0"
                  animate={isHovered ? { 
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7]
                  } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                />
                <span className="text-sm font-medium">{feature}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Enhanced CTA with Micro-animations */}
          <motion.div
            className="flex items-center text-electric-400 text-sm font-semibold group-hover:text-electric-300 transition-colors duration-300"
            animate={isHovered ? { x: [0, 8, 0] } : {}}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <span>Explore Service</span>
            <motion.svg 
              className="w-5 h-5 ml-3"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              animate={isHovered ? { x: [0, 5, 0] } : {}}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.div>
        </div>

        {/* Animated Corner Accent */}
        <motion.div
          className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-electric-500/20 to-transparent rounded-bl-3xl"
          animate={isHovered ? {
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.1, 1]
          } : {
            opacity: 0.3,
            scale: 1
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </OptimizedMotion>
  )
}

export default function GenpactServiceGrid({ 
  title, 
  subtitle, 
  services, 
  onServiceClick 
}: GenpactServiceGridProps) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #0066FF 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #4B2CE1 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-heading font-bold text-soft-50 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {title.split(' ').slice(0, -1).join(' ')} <span className="text-gradient-electric">{title.split(' ').slice(-1)[0]}</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-soft-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <GenpactServiceCard
              key={service.id}
              service={service}
              index={index}
              onServiceClick={onServiceClick}
            />
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-4xl font-heading font-bold text-soft-50 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Discover Our Complete Solution Suite
          </motion.h3>
          <motion.p 
            className="text-xl text-soft-300 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Transform your business with our comprehensive BPO services designed for the digital age.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/services'}
            className="btn-primary py-4 px-10 text-lg relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="relative z-10">Explore All Services</span>
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
