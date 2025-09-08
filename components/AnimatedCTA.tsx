'use client'

import { motion } from 'framer-motion'
import React from 'react'
import OptimizedMotion from './OptimizedMotion'

interface AnimatedCTAProps {
  title: string
  subtitle: string
  description: string
  primaryButtonText: string
  secondaryButtonText?: string
  onPrimaryClick: () => void
  onSecondaryClick?: () => void
  backgroundImage?: string
  theme?: 'navy-electric' | 'purple-gradient' | 'teal-cyan' | 'blue-indigo'
  animationType?: 'pulse' | 'wave' | 'particles' | 'gradient'
}

// Floating Particles Animation
const FloatingParticles = ({ theme = 'navy-electric' }: { theme?: string }) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const animationRef = React.useRef<number>()
  const particlesRef = React.useRef<Array<{
    x: number
    y: number
    vx: number
    vy: number
    size: number
    opacity: number
    life: number
  }>>([])

  const themeColors = {
    'navy-electric': { primary: '#0A1B3C', secondary: '#0066FF', accent: '#4B2CE1' },
    'purple-gradient': { primary: '#4B2CE1', secondary: '#0066FF', accent: '#0A1B3C' },
    'teal-cyan': { primary: '#0A1B3C', secondary: '#14B8A6', accent: '#06B6D4' },
    'blue-indigo': { primary: '#1E3A8A', secondary: '#3B82F6', accent: '#6366F1' }
  }

  const colors = themeColors[theme as keyof typeof themeColors] || themeColors['navy-electric']

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = []
      for (let i = 0; i < 30; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          vx: (Math.random() - 0.5) * 1,
          vy: (Math.random() - 0.5) * 1,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.6 + 0.2,
          life: Math.random() * 200 + 100
        })
      }
    }

    initParticles()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life -= 1

        if (particle.life <= 0 || particle.x < 0 || particle.x > canvas.offsetWidth || 
            particle.y < 0 || particle.y > canvas.offsetHeight) {
          particlesRef.current[index] = {
            x: Math.random() * canvas.offsetWidth,
            y: Math.random() * canvas.offsetHeight,
            vx: (Math.random() - 0.5) * 1,
            vy: (Math.random() - 0.5) * 1,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.6 + 0.2,
            life: Math.random() * 200 + 100
          }
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `${colors.secondary}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [colors])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30"
    />
  )
}

// Wave Animation
const WaveAnimation = ({ theme = 'navy-electric' }: { theme?: string }) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const animationRef = React.useRef<number>()
  const timeRef = React.useRef(0)

  const themeColors = {
    'navy-electric': { primary: '#0A1B3C', secondary: '#0066FF', accent: '#4B2CE1' },
    'purple-gradient': { primary: '#4B2CE1', secondary: '#0066FF', accent: '#0A1B3C' },
    'teal-cyan': { primary: '#0A1B3C', secondary: '#14B8A6', accent: '#06B6D4' },
    'blue-indigo': { primary: '#1E3A8A', secondary: '#3B82F6', accent: '#6366F1' }
  }

  const colors = themeColors[theme as keyof typeof themeColors] || themeColors['navy-electric']

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const animate = () => {
      timeRef.current += 0.02
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      // Draw multiple wave layers
      for (let layer = 0; layer < 3; layer++) {
        ctx.beginPath()
        ctx.moveTo(0, canvas.offsetHeight / 2)

        for (let x = 0; x < canvas.offsetWidth; x += 2) {
          const y = canvas.offsetHeight / 2 + 
            Math.sin((x * 0.01) + (timeRef.current * 0.5) + (layer * Math.PI / 3)) * 
            (20 + layer * 10) * 
            Math.sin(timeRef.current * 0.3 + layer)
          
          ctx.lineTo(x, y)
        }

        ctx.strokeStyle = `${colors.secondary}${Math.floor(30 + layer * 20).toString(16).padStart(2, '0')}`
        ctx.lineWidth = 2 + layer
        ctx.stroke()
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [colors])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-20"
    />
  )
}

export default function AnimatedCTA({
  title,
  subtitle,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  backgroundImage,
  theme = 'navy-electric',
  animationType = 'pulse'
}: AnimatedCTAProps) {
  const themeColors = {
    'navy-electric': { primary: '#0A1B3C', secondary: '#0066FF', accent: '#4B2CE1' },
    'purple-gradient': { primary: '#4B2CE1', secondary: '#0066FF', accent: '#0A1B3C' },
    'teal-cyan': { primary: '#0A1B3C', secondary: '#14B8A6', accent: '#06B6D4' },
    'blue-indigo': { primary: '#1E3A8A', secondary: '#3B82F6', accent: '#6366F1' }
  }

  const colors = themeColors[theme]

  const renderAnimation = () => {
    switch (animationType) {
      case 'particles':
        return <FloatingParticles theme={theme} />
      case 'wave':
        return <WaveAnimation theme={theme} />
      case 'gradient':
        return (
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `linear-gradient(45deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.accent} 100%)`
            }}
          />
        )
      default:
        return (
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(circle at center, ${colors.secondary} 0%, ${colors.primary} 100%)`
            }}
          />
        )
    }
  }

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-900">
        {backgroundImage ? (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        ) : null}
        {renderAnimation()}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 via-navy-900/60 to-electric-500/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <OptimizedMotion animation="slideUp" delay={0}>
          <motion.p 
            className="text-lg md:text-xl text-electric-400 mb-6 font-medium tracking-wide uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        </OptimizedMotion>

        <OptimizedMotion animation="slideUp" delay={200}>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-soft-50 mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {title}
          </motion.h2>
        </OptimizedMotion>

        <OptimizedMotion animation="slideUp" delay={400}>
          <motion.p 
            className="text-lg md:text-xl text-soft-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {description}
          </motion.p>
        </OptimizedMotion>

        {/* Animated Buttons */}
        <OptimizedMotion animation="slideUp" delay={600}>
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* Primary Button */}
            <motion.button
              onClick={onPrimaryClick}
              className="relative px-8 py-4 bg-gradient-to-r from-electric-500 to-purple-500 text-white font-semibold rounded-2xl overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: [
                  `0 0 0 0 ${colors.secondary}40`,
                  `0 0 0 10px ${colors.secondary}00`,
                  `0 0 0 0 ${colors.secondary}00`
                ]
              }}
              transition={{ 
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeOut" }
              }}
            >
              <span className="relative z-10">{primaryButtonText}</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-electric-500 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            {/* Secondary Button */}
            {secondaryButtonText && onSecondaryClick && (
              <motion.button
                onClick={onSecondaryClick}
                className="px-8 py-4 glass text-soft-300 font-semibold rounded-2xl hover:text-soft-50 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {secondaryButtonText}
              </motion.button>
            )}
          </motion.div>
        </OptimizedMotion>

        {/* Floating Elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 glass p-4 rounded-2xl"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="text-2xl font-bold text-electric-400">500+</div>
          <div className="text-soft-200 text-sm">Happy Clients</div>
        </motion.div>

        <motion.div 
          className="absolute top-1/3 right-1/4 glass p-4 rounded-2xl"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, -5, 5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <div className="text-2xl font-bold text-purple-400">24/7</div>
          <div className="text-soft-200 text-sm">Support</div>
        </motion.div>
      </div>
    </section>
  )
}
