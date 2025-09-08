'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState, useMemo } from 'react'
import OptimizedImage from './OptimizedImage'
import OptimizedMotion from './OptimizedMotion'
import ErrorBoundary from './ErrorBoundary'

interface AnimatedHeroProps {
  title: string
  subtitle: string
  description: string
  image?: string
  animationType?: 'data-flow' | 'network' | 'molecules' | 'grid' | 'particles'
  theme?: 'navy-electric' | 'purple-gradient' | 'teal-cyan' | 'blue-indigo'
}

// Abstract 3D Data Flow Animation Component
const DataFlowAnimation = ({ theme = 'navy-electric' }: { theme?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Array<{
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

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) {
      console.warn('Canvas context not available')
      return
    }

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
      for (let i = 0; i < 50; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          life: Math.random() * 100 + 50
        })
      }
    }

    initParticles()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life -= 1

        if (particle.life <= 0 || particle.x < 0 || particle.x > canvas.offsetWidth || 
            particle.y < 0 || particle.y > canvas.offsetHeight) {
          particlesRef.current[index] = {
            x: Math.random() * canvas.offsetWidth,
            y: Math.random() * canvas.offsetHeight,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.8 + 0.2,
            life: Math.random() * 100 + 50
          }
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `${colors.secondary}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`
        ctx.fill()

        // Draw connections
        particlesRef.current.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 100) {
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.strokeStyle = `${colors.accent}${Math.floor((1 - distance / 100) * 50).toString(16).padStart(2, '0')}`
              ctx.lineWidth = 0.5
              ctx.stroke()
            }
          }
        })
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

// Network Grid Animation
const NetworkGridAnimation = ({ theme = 'navy-electric' }: { theme?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const timeRef = useRef(0)

  const themeColors = {
    'navy-electric': { primary: '#0A1B3C', secondary: '#0066FF', accent: '#4B2CE1' },
    'purple-gradient': { primary: '#4B2CE1', secondary: '#0066FF', accent: '#0A1B3C' },
    'teal-cyan': { primary: '#0A1B3C', secondary: '#14B8A6', accent: '#06B6D4' },
    'blue-indigo': { primary: '#1E3A8A', secondary: '#3B82F6', accent: '#6366F1' }
  }

  const colors = themeColors[theme as keyof typeof themeColors] || themeColors['navy-electric']

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) {
      console.warn('Canvas context not available')
      return
    }

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const animate = () => {
      timeRef.current += 0.01
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      const gridSize = 50
      const cols = Math.ceil(canvas.offsetWidth / gridSize)
      const rows = Math.ceil(canvas.offsetHeight / gridSize)

      // Draw grid points
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize
          const y = j * gridSize
          const wave = Math.sin(timeRef.current + i * 0.1 + j * 0.1) * 0.5 + 0.5
          
          ctx.beginPath()
          ctx.arc(x, y, wave * 3 + 1, 0, Math.PI * 2)
          ctx.fillStyle = `${colors.secondary}${Math.floor(wave * 255).toString(16).padStart(2, '0')}`
          ctx.fill()

          // Draw connections
          if (i < cols - 1) {
            const nextX = (i + 1) * gridSize
            const nextY = j * gridSize
            const nextWave = Math.sin(timeRef.current + (i + 1) * 0.1 + j * 0.1) * 0.5 + 0.5
            
            if (wave > 0.3 || nextWave > 0.3) {
              ctx.beginPath()
              ctx.moveTo(x, y)
              ctx.lineTo(nextX, nextY)
              ctx.strokeStyle = `${colors.accent}${Math.floor(Math.min(wave, nextWave) * 100).toString(16).padStart(2, '0')}`
              ctx.lineWidth = 0.5
              ctx.stroke()
            }
          }

          if (j < rows - 1) {
            const nextX = i * gridSize
            const nextY = (j + 1) * gridSize
            const nextWave = Math.sin(timeRef.current + i * 0.1 + (j + 1) * 0.1) * 0.5 + 0.5
            
            if (wave > 0.3 || nextWave > 0.3) {
              ctx.beginPath()
              ctx.moveTo(x, y)
              ctx.lineTo(nextX, nextY)
              ctx.strokeStyle = `${colors.accent}${Math.floor(Math.min(wave, nextWave) * 100).toString(16).padStart(2, '0')}`
              ctx.lineWidth = 0.5
              ctx.stroke()
            }
          }
        }
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
      style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)` }}
    />
  )
}

export default function AnimatedHero({ 
  title, 
  subtitle, 
  description, 
  image, 
  animationType = 'data-flow',
  theme = 'navy-electric'
}: AnimatedHeroProps) {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const renderAnimation = () => {
    switch (animationType) {
      case 'data-flow':
        return <DataFlowAnimation theme={theme} />
      case 'network':
        return <NetworkGridAnimation theme={theme} />
      case 'molecules':
        return <DataFlowAnimation theme={theme} />
      case 'grid':
        return <NetworkGridAnimation theme={theme} />
      case 'particles':
        return <DataFlowAnimation theme={theme} />
      default:
        return <DataFlowAnimation theme={theme} />
    }
  }

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-900"
    >
      {/* Abstract 3D Background Animation */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <ErrorBoundary>
          {renderAnimation()}
        </ErrorBoundary>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 via-navy-900/60 to-electric-500/20 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <OptimizedMotion animation="slideUp" delay={0} className="text-center lg:text-left">
            <motion.p 
              className="text-lg md:text-xl text-electric-400 mb-6 font-medium tracking-wide uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="block text-soft-50 mb-2">
                {title.split(' ').slice(0, -2).join(' ')}
              </span>
              <span className="block text-gradient-electric">
                {title.split(' ').slice(-2).join(' ')}
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-soft-300 mb-8 leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {description}
            </motion.p>

            {/* Floating Stats */}
            <motion.div 
              className="flex flex-wrap gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div 
                className="glass p-4 rounded-2xl gpu-accelerated"
                whileHover={{ scale: 1.05 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-2xl font-bold text-electric-400">500+</div>
                <div className="text-soft-200 text-sm">Happy Clients</div>
              </motion.div>
              
              <motion.div 
                className="glass p-4 rounded-2xl gpu-accelerated"
                whileHover={{ scale: 1.05 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="text-2xl font-bold text-purple-400">24/7</div>
                <div className="text-soft-200 text-sm">Support</div>
              </motion.div>
            </motion.div>
          </OptimizedMotion>

          {/* Image/Visual */}
          <OptimizedMotion animation="slideUp" delay={400} className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              {image ? (
                <OptimizedImage
                  src={image}
                  alt="AdmirerX Business Solutions"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              ) : (
                <div className="w-full h-96 bg-gradient-to-br from-electric-500/20 to-purple-500/20 rounded-3xl flex items-center justify-center">
                  <div className="text-6xl text-electric-400 opacity-50">🚀</div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent"></div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-6 -left-6 glass p-4 rounded-2xl gpu-accelerated"
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-2xl font-bold text-electric-400">500+</div>
              <div className="text-soft-200 text-sm">Happy Clients</div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-6 -right-6 glass p-4 rounded-2xl gpu-accelerated"
              animate={{ 
                rotate: [0, -5, 5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
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
