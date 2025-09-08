'use client'

import { motion } from 'framer-motion'
import React from 'react'
import OptimizedMotion from './OptimizedMotion'

interface TimelineStep {
  step: number
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

interface GenpactTimelineProps {
  title: string
  subtitle: string
  steps: TimelineStep[]
  orientation?: 'horizontal' | 'vertical'
  theme?: 'navy-electric' | 'purple-gradient' | 'teal-cyan' | 'blue-indigo'
}

// Enhanced Timeline Step Component
const GenpactTimelineStep = ({ 
  step, 
  index, 
  isLast 
}: { 
  step: TimelineStep
  index: number
  isLast: boolean
}) => {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <OptimizedMotion animation="slideUp" delay={index * 200} className="relative">
      <motion.div
        className="flex flex-col items-center group cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        {/* Step Number with Enhanced Animation */}
        <motion.div
          className="relative z-10 w-20 h-20 rounded-full glass flex items-center justify-center mb-8 border-2 border-electric-500/30"
          animate={isHovered ? {
            scale: [1, 1.1, 1.05],
            boxShadow: "0 20px 40px rgba(0, 102, 255, 0.3)",
            borderColor: "#0066FF"
          } : {
            scale: 1,
            boxShadow: "0 10px 25px rgba(0, 102, 255, 0.1)",
            borderColor: "rgba(0, 102, 255, 0.3)"
          }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="w-16 h-16 rounded-full bg-gradient-to-br from-electric-500 to-purple-500 flex items-center justify-center"
            animate={isHovered ? {
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            } : {
              rotate: 0,
              scale: 1
            }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-2xl font-bold text-white">{step.step}</span>
          </motion.div>
          
          {/* Floating Icon */}
          <motion.div
            className="absolute -top-2 -right-2 w-8 h-8 glass rounded-full flex items-center justify-center"
            animate={isHovered ? {
              scale: [1, 1.3, 1],
              rotate: [0, 10, -10, 0]
            } : {
              scale: 1,
              rotate: 0
            }}
            transition={{ duration: 0.5 }}
          >
            <step.icon className={`w-5 h-5 ${step.color}`} />
          </motion.div>
        </motion.div>

        {/* Content Card */}
        <motion.div
          className="text-center max-w-sm"
          animate={isHovered ? {
            y: -5,
            scale: 1.02
          } : {
            y: 0,
            scale: 1
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.h3 
            className="text-2xl font-heading font-bold text-soft-50 mb-4 group-hover:text-gradient-electric transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {step.title}
          </motion.h3>
          
          <motion.p 
            className="text-soft-300 leading-relaxed text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
            viewport={{ once: true }}
          >
            {step.description}
          </motion.p>
        </motion.div>

        {/* Animated Connection Line (for horizontal layout) */}
        {!isLast && (
          <motion.div
            className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-electric-500/50 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: index * 0.3 + 0.5 }}
            viewport={{ once: true }}
            style={{ transform: 'translateX(50%)' }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-electric-500 to-purple-500"
              animate={isHovered ? {
                scaleX: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        )}

        {/* Floating Particles */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={isHovered ? {
            opacity: [0, 1, 0]
          } : {
            opacity: 0
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-electric-500 rounded-full"
              style={{
                left: `${30 + i * 20}%`,
                top: `${20 + i * 15}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </OptimizedMotion>
  )
}

export default function GenpactTimeline({ 
  title, 
  subtitle, 
  steps, 
  orientation = 'horizontal',
  theme = 'navy-electric'
}: GenpactTimelineProps) {
  const themeColors = {
    'navy-electric': { primary: '#0A1B3C', secondary: '#0066FF', accent: '#4B2CE1' },
    'purple-gradient': { primary: '#4B2CE1', secondary: '#0066FF', accent: '#0A1B3C' },
    'teal-cyan': { primary: '#0A1B3C', secondary: '#14B8A6', accent: '#06B6D4' },
    'blue-indigo': { primary: '#1E3A8A', secondary: '#3B82F6', accent: '#6366F1' }
  }

  const colors = themeColors[theme as keyof typeof themeColors] || themeColors['navy-electric']

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, transparent 49%, ${colors.secondary} 50%, transparent 51%),
                           linear-gradient(-45deg, transparent 49%, ${colors.accent} 50%, transparent 51%)`,
          backgroundSize: '40px 40px'
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

        {/* Timeline Container */}
        <div className={`${orientation === 'horizontal' ? 'lg:flex lg:items-center lg:justify-between' : 'space-y-16'}`}>
          {steps.map((step, index) => (
            <GenpactTimelineStep
              key={step.step}
              step={step}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* Enhanced Progress Indicator */}
        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex space-x-4">
            {steps.map((_, index) => (
              <motion.div
                key={index}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-electric-500 to-purple-500"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2 + 0.8,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
