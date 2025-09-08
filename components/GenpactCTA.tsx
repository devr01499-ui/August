'use client'

import { motion } from 'framer-motion'
import React from 'react'
import OptimizedMotion from './OptimizedMotion'

interface GenpactCTAProps {
  title: string
  subtitle: string
  description: string
  primaryButtonText: string
  secondaryButtonText: string
  onPrimaryClick: () => void
  onSecondaryClick: () => void
  theme?: 'navy-electric' | 'purple-gradient' | 'teal-cyan' | 'blue-indigo'
  animationType?: 'particles' | 'waves' | 'geometric' | 'data-flow'
}

export default function GenpactCTA({
  title,
  subtitle,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  theme = 'navy-electric',
  animationType = 'particles'
}: GenpactCTAProps) {
  const [isHovered, setIsHovered] = React.useState(false)

  const themeColors = {
    'navy-electric': { 
      primary: '#0A1B3C', 
      secondary: '#0066FF', 
      accent: '#4B2CE1', 
      glow: '#00D4FF',
      gradient: 'from-electric-500/20 via-purple-500/10 to-cyan-500/20'
    },
    'purple-gradient': { 
      primary: '#4B2CE1', 
      secondary: '#0066FF', 
      accent: '#0A1B3C', 
      glow: '#8B5CF6',
      gradient: 'from-purple-500/20 via-electric-500/10 to-pink-500/20'
    },
    'teal-cyan': { 
      primary: '#0A1B3C', 
      secondary: '#14B8A6', 
      accent: '#06B6D4', 
      glow: '#10B981',
      gradient: 'from-teal-500/20 via-cyan-500/10 to-emerald-500/20'
    },
    'blue-indigo': { 
      primary: '#1E3A8A', 
      secondary: '#3B82F6', 
      accent: '#6366F1', 
      glow: '#8B5CF6',
      gradient: 'from-blue-500/20 via-indigo-500/10 to-purple-500/20'
    }
  }

  const colors = themeColors[theme as keyof typeof themeColors] || themeColors['navy-electric']

  // Animated Background Component
  const AnimatedBackground = () => {
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
        for (let i = 0; i < 60; i++) {
          particlesRef.current.push({
            x: Math.random() * canvas.offsetWidth,
            y: Math.random() * canvas.offsetHeight,
            vx: (Math.random() - 0.5) * 1,
            vy: (Math.random() - 0.5) * 1,
            size: Math.random() * 3 + 1,
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
              size: Math.random() * 3 + 1,
              opacity: Math.random() * 0.6 + 0.2,
              life: Math.random() * 200 + 100
            }
          }

          // Draw particle with glow
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 3)
          gradient.addColorStop(0, `${colors.glow}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`)
          gradient.addColorStop(1, 'transparent')
          ctx.fillStyle = gradient
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
        style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)` }}
      />
    )
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-900 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient}`} />

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 border border-electric-500/20 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + i * 8}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center">
          {/* Enhanced Header */}
          <OptimizedMotion animation="slideUp" delay={0}>
            <motion.p 
              className="text-lg md:text-xl text-electric-400 mb-6 font-medium tracking-widest uppercase"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {subtitle}
            </motion.p>
          </OptimizedMotion>

          <OptimizedMotion animation="slideUp" delay={200}>
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-soft-50 mb-8 leading-tight"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="block mb-3">{title.split(' ').slice(0, -2).join(' ')}</span>
              <span className="block text-gradient-electric">{title.split(' ').slice(-2).join(' ')}</span>
            </motion.h2>
          </OptimizedMotion>

          <OptimizedMotion animation="slideUp" delay={400}>
            <motion.p 
              className="text-xl md:text-2xl text-soft-300 mb-12 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {description}
            </motion.p>
          </OptimizedMotion>

          {/* Enhanced Button Group */}
          <OptimizedMotion animation="slideUp" delay={600}>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Primary Button */}
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  boxShadow: "0 20px 40px rgba(0, 102, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={onPrimaryClick}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                className="relative px-10 py-4 bg-gradient-to-r from-electric-500 to-purple-500 text-white font-semibold text-lg rounded-2xl overflow-hidden group"
              >
                <span className="relative z-10">{primaryButtonText}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  animate={isHovered ? {
                    x: ['-100%', '100%']
                  } : {}}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>

              {/* Secondary Button */}
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  borderColor: "#0066FF",
                  boxShadow: "0 10px 30px rgba(0, 102, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={onSecondaryClick}
                className="px-10 py-4 border-2 border-soft-300 text-soft-300 font-semibold text-lg rounded-2xl hover:border-electric-500 hover:text-electric-500 transition-all duration-300"
              >
                {secondaryButtonText}
              </motion.button>
            </motion.div>
          </OptimizedMotion>

          {/* Enhanced Stats */}
          <OptimizedMotion animation="slideUp" delay={800}>
            <motion.div 
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                { number: '500+', label: 'Happy Clients', color: 'text-electric-400' },
                { number: '24/7', label: 'Support', color: 'text-purple-400' },
                { number: '99.9%', label: 'Uptime', color: 'text-cyan-400' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center glass p-6 rounded-2xl border border-electric-500/20"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 15px 35px rgba(0, 102, 255, 0.2)"
                  }}
                  animate={{
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-soft-200 text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </OptimizedMotion>
        </div>
      </div>
    </section>
  )
}
