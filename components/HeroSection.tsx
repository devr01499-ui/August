'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface HeroSectionProps {
  title: string
  subtitle?: string
  description: string
  primaryButtonText: string
  secondaryButtonText?: string
  onPrimaryClick: () => void
  onSecondaryClick?: () => void
  backgroundImage?: string
  showDataFlow?: boolean
}

// Data Flow Animation Component
const DataFlowAnimation = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-30 animate-pulse"></div>
    <div className="absolute top-1/2 right-0 w-full h-px bg-gradient-to-l from-transparent via-lime-400 to-transparent opacity-30 animate-pulse delay-1000"></div>
    <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-30 animate-pulse delay-2000"></div>
    
    {/* Floating nodes */}
    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-400 rounded-full animate-bounce delay-500"></div>
    <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-lime-400 rounded-full animate-bounce delay-1500"></div>
    <div className="absolute top-3/4 left-1/3 w-2 h-2 bg-teal-400 rounded-full animate-bounce delay-2500"></div>
  </div>
)

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  backgroundImage,
  showDataFlow = false
}: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsVisible(scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative pt-20 pb-16 overflow-hidden min-h-screen flex items-center">
      {showDataFlow && <DataFlowAnimation />}
      
      {/* Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-navy-900/80"></div>
        </div>
      )}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-teal-400 mb-4 font-medium"
            >
              {subtitle}
            </motion.p>
          )}
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="block text-light-50"
            >
              {title.split(' ').slice(0, -1).join(' ')}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="block gradient-text"
            >
              {title.split(' ').slice(-1)[0]}
            </motion.span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl text-light-100 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onPrimaryClick}
              className="btn-gradient px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {primaryButtonText}
            </motion.button>
            
            {secondaryButtonText && onSecondaryClick && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onSecondaryClick}
                className="btn-outline px-8 py-4 text-lg font-semibold rounded-lg border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white transition-all duration-300"
              >
                {secondaryButtonText}
              </motion.button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
