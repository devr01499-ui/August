'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState, useMemo } from 'react'
import OptimizedImage from './OptimizedImage'
import OptimizedMotion from './OptimizedMotion'

interface PremiumHeroProps {
  title: string
  subtitle: string
  description: string
  image: string
}

// Optimized 3D Abstract Background Component
const Abstract3DBackground = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])
  const y3 = useTransform(scrollY, [0, 300], [0, -150])

  // Memoize particles to prevent re-renders
  const particles = useMemo(() => 
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }))
  , [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Optimized floating geometric shapes */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-electric opacity-10 rounded-full blur-xl gpu-accelerated"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        style={{ y: y2 }}
        className="absolute top-40 right-20 w-24 h-24 bg-gradient-purple opacity-15 rounded-lg blur-lg gpu-accelerated"
        animate={{
          scale: [1, 0.8, 1],
          rotate: [0, -90, -180],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-navy opacity-10 rounded-full blur-2xl gpu-accelerated"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Optimized floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-electric-500 rounded-full opacity-40 gpu-accelerated"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  )
}

export default function PremiumHero({
  title,
  subtitle,
  description,
  image
}: PremiumHeroProps) {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-900"
    >
      <Abstract3DBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-electric-400 mb-6 font-medium tracking-wide uppercase"
            >
              {subtitle}
            </motion.p>
            
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-tight"
            >
              <span className="block text-soft-50 mb-2">
                {title.split(' ').slice(0, -2).join(' ')}
              </span>
              <span className="block text-gradient-electric">
                {title.split(' ').slice(-2).join(' ')}
              </span>
            </motion.h1>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-soft-300 mb-8 leading-relaxed font-light"
            >
              {description}
            </motion.p>
          </motion.div>

          {/* Right Side - Image */}
          <OptimizedMotion
            animation="slideUp"
            delay={400}
            duration={0.8}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <OptimizedImage
                src={image}
                alt="AdmirerX Business Solutions"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent"></div>
            </div>
            
            {/* Floating elements around image */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 glass p-4 rounded-2xl gpu-accelerated"
            >
              <div className="text-2xl font-bold text-electric-400">500+</div>
              <div className="text-soft-200 text-sm">Happy Clients</div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -bottom-6 -right-6 glass p-4 rounded-2xl gpu-accelerated"
            >
              <div className="text-2xl font-bold text-purple-400">24/7</div>
              <div className="text-soft-200 text-sm">Support</div>
            </motion.div>
          </OptimizedMotion>
        </div>
      </div>
    </section>
  )
}