'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import OptimizedImage from './OptimizedImage'
import OptimizedMotion from './OptimizedMotion'
import ErrorBoundary from './ErrorBoundary'

interface GenpactHeroProps {
  title: string
  subtitle: string
  description: string
  image?: string
  animationType?: 'data-flow' | 'molecular' | 'grid-network' | 'particles' | 'geometric'
  theme?: 'navy-electric' | 'purple-gradient' | 'teal-cyan' | 'blue-indigo'
  videoBackground?: string
}

// Abstract 3D Data Flow Animation with Genpact-style complexity
const DataFlow3DAnimation = ({ theme = 'navy-electric' }: { theme?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Array<{
    x: number
    y: number
    z: number
    vx: number
    vy: number
    vz: number
    size: number
    opacity: number
    life: number
    connections: number[]
  }>>([])

  const themeColors = {
    'navy-electric': { primary: '#0A1B3C', secondary: '#0066FF', accent: '#4B2CE1', glow: '#00D4FF' },
    'purple-gradient': { primary: '#4B2CE1', secondary: '#0066FF', accent: '#0A1B3C', glow: '#8B5CF6' },
    'teal-cyan': { primary: '#0A1B3C', secondary: '#14B8A6', accent: '#06B6D4', glow: '#10B981' },
    'blue-indigo': { primary: '#1E3A8A', secondary: '#3B82F6', accent: '#6366F1', glow: '#8B5CF6' }
  }

  const colors = themeColors[theme as keyof typeof themeColors] || themeColors['navy-electric']

  useEffect(() => {
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

    // Initialize 3D particles
    const initParticles = () => {
      particlesRef.current = []
      for (let i = 0; i < 80; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          z: Math.random() * 200 - 100,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          vz: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 4 + 2,
          opacity: Math.random() * 0.8 + 0.2,
          life: Math.random() * 200 + 100,
          connections: []
        })
      }
    }

    initParticles()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      // Update and draw particles with 3D perspective
      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.z += particle.vz
        particle.life -= 1

        // 3D perspective calculation
        const scale = 1 / (1 + particle.z / 200)
        const x = particle.x + (particle.x - canvas.offsetWidth / 2) * scale
        const y = particle.y + (particle.y - canvas.offsetHeight / 2) * scale
        const size = particle.size * scale

        if (particle.life <= 0 || x < -50 || x > canvas.offsetWidth + 50 || 
            y < -50 || y > canvas.offsetHeight + 50) {
          particlesRef.current[index] = {
            x: Math.random() * canvas.offsetWidth,
            y: Math.random() * canvas.offsetHeight,
            z: Math.random() * 200 - 100,
            vx: (Math.random() - 0.5) * 1.5,
            vy: (Math.random() - 0.5) * 1.5,
            vz: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 4 + 2,
            opacity: Math.random() * 0.8 + 0.2,
            life: Math.random() * 200 + 100,
            connections: []
          }
        }

        // Draw particle with glow effect
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        
        // Outer glow
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 3)
        gradient.addColorStop(0, `${colors.glow}${Math.floor(particle.opacity * 100).toString(16).padStart(2, '0')}`)
        gradient.addColorStop(0.5, `${colors.secondary}${Math.floor(particle.opacity * 200).toString(16).padStart(2, '0')}`)
        gradient.addColorStop(1, 'transparent')
        ctx.fillStyle = gradient
        ctx.fill()

        // Core particle
        ctx.beginPath()
        ctx.arc(x, y, size * 0.6, 0, Math.PI * 2)
        ctx.fillStyle = `${colors.secondary}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`
        ctx.fill()

        // Draw 3D connections
        particlesRef.current.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const otherScale = 1 / (1 + otherParticle.z / 200)
            const otherX = otherParticle.x + (otherParticle.x - canvas.offsetWidth / 2) * otherScale
            const otherY = otherParticle.y + (otherParticle.y - canvas.offsetHeight / 2) * otherScale
            
            const dx = x - otherX
            const dy = y - otherY
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 120) {
              const connectionStrength = (1 - distance / 120) * particle.opacity * otherParticle.opacity
              
              ctx.beginPath()
              ctx.moveTo(x, y)
              ctx.lineTo(otherX, otherY)
              ctx.strokeStyle = `${colors.accent}${Math.floor(connectionStrength * 80).toString(16).padStart(2, '0')}`
              ctx.lineWidth = connectionStrength * 2
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
      className="absolute inset-0 w-full h-full opacity-40"
      style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)` }}
    />
  )
}

// Molecular Structure Animation
const MolecularAnimation = ({ theme = 'navy-electric' }: { theme?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const timeRef = useRef(0)

  const themeColors = {
    'navy-electric': { primary: '#0A1B3C', secondary: '#0066FF', accent: '#4B2CE1', glow: '#00D4FF' },
    'purple-gradient': { primary: '#4B2CE1', secondary: '#0066FF', accent: '#0A1B3C', glow: '#8B5CF6' },
    'teal-cyan': { primary: '#0A1B3C', secondary: '#14B8A6', accent: '#06B6D4', glow: '#10B981' },
    'blue-indigo': { primary: '#1E3A8A', secondary: '#3B82F6', accent: '#6366F1', glow: '#8B5CF6' }
  }

  const colors = themeColors[theme as keyof typeof themeColors] || themeColors['navy-electric']

  useEffect(() => {
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

      const centerX = canvas.offsetWidth / 2
      const centerY = canvas.offsetHeight / 2
      const radius = Math.min(canvas.offsetWidth, canvas.offsetHeight) * 0.3

      // Draw molecular structure
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2 + timeRef.current * 0.5
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius * 0.6
        const z = Math.sin(angle + timeRef.current) * 50

        // Draw atom with 3D effect
        const scale = 1 / (1 + z / 200)
        const atomX = x + (x - centerX) * scale * 0.3
        const atomY = y + (y - centerY) * scale * 0.3
        const atomSize = (8 + Math.sin(timeRef.current + i) * 3) * scale

        // Glow effect
        const gradient = ctx.createRadialGradient(atomX, atomY, 0, atomX, atomY, atomSize * 4)
        gradient.addColorStop(0, `${colors.glow}80`)
        gradient.addColorStop(0.5, `${colors.secondary}40`)
        gradient.addColorStop(1, 'transparent')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(atomX, atomY, atomSize * 4, 0, Math.PI * 2)
        ctx.fill()

        // Atom core
        ctx.beginPath()
        ctx.arc(atomX, atomY, atomSize, 0, Math.PI * 2)
        ctx.fillStyle = colors.secondary
        ctx.fill()

        // Draw bonds
        for (let j = i + 1; j < 8; j++) {
          const nextAngle = (j / 8) * Math.PI * 2 + timeRef.current * 0.5
          const nextX = centerX + Math.cos(nextAngle) * radius
          const nextY = centerY + Math.sin(nextAngle) * radius * 0.6
          const nextZ = Math.sin(nextAngle + timeRef.current) * 50

          const nextScale = 1 / (1 + nextZ / 200)
          const nextAtomX = nextX + (nextX - centerX) * nextScale * 0.3
          const nextAtomY = nextY + (nextY - centerY) * nextScale * 0.3

          ctx.beginPath()
          ctx.moveTo(atomX, atomY)
          ctx.lineTo(nextAtomX, nextAtomY)
          ctx.strokeStyle = `${colors.accent}60`
          ctx.lineWidth = 2
          ctx.stroke()
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
      className="absolute inset-0 w-full h-full opacity-30"
      style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)` }}
    />
  )
}

export default function GenpactHero({ 
  title, 
  subtitle, 
  description, 
  image, 
  animationType = 'data-flow',
  theme = 'navy-electric',
  videoBackground
}: GenpactHeroProps) {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const renderAnimation = () => {
    switch (animationType) {
      case 'data-flow':
        return <DataFlow3DAnimation theme={theme} />
      case 'molecular':
        return <MolecularAnimation theme={theme} />
      case 'grid-network':
        return <DataFlow3DAnimation theme={theme} />
      case 'particles':
        return <DataFlow3DAnimation theme={theme} />
      case 'geometric':
        return <MolecularAnimation theme={theme} />
      default:
        return <DataFlow3DAnimation theme={theme} />
    }
  }

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-900"
    >
      {/* Video Background (if provided) */}
      {videoBackground && (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src={videoBackground} type="video/mp4" />
          </video>
        </div>
      )}

      {/* Abstract 3D Background Animation */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="absolute inset-0 z-0"
      >
        <ErrorBoundary>
          {renderAnimation()}
        </ErrorBoundary>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 via-navy-900/70 to-electric-500/30 z-10" />

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 z-5 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-electric-500/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <OptimizedMotion animation="slideUp" delay={0} className="text-center lg:text-left">
            <motion.p 
              className="text-lg md:text-xl text-electric-400 mb-6 font-medium tracking-widest uppercase"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="block text-soft-50 mb-3">
                {title.split(' ').slice(0, -2).join(' ')}
              </span>
              <span className="block text-gradient-electric">
                {title.split(' ').slice(-2).join(' ')}
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-soft-300 mb-10 leading-relaxed font-light max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {description}
            </motion.p>

            {/* Enhanced Floating Stats */}
            <motion.div 
              className="flex flex-wrap gap-8 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div 
                className="glass p-6 rounded-3xl gpu-accelerated border border-electric-500/20"
                whileHover={{ scale: 1.05, y: -5 }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-3xl font-bold text-electric-400 mb-2">500+</div>
                <div className="text-soft-200 text-sm font-medium">Happy Clients</div>
              </motion.div>
              
              <motion.div 
                className="glass p-6 rounded-3xl gpu-accelerated border border-purple-500/20"
                whileHover={{ scale: 1.05, y: -5 }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              >
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-soft-200 text-sm font-medium">Support</div>
              </motion.div>

              <motion.div 
                className="glass p-6 rounded-3xl gpu-accelerated border border-cyan-500/20"
                whileHover={{ scale: 1.05, y: -5 }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
              >
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-soft-200 text-sm font-medium">Uptime</div>
              </motion.div>
            </motion.div>
          </OptimizedMotion>

          {/* Enhanced Image/Visual */}
          <OptimizedMotion animation="slideUp" delay={600} className="relative">
            <div className="relative rounded-3xl overflow-hidden group">
              {image ? (
                <OptimizedImage
                  src={image}
                  alt="AdmirerX Business Solutions"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                />
              ) : (
                <div className="w-full h-96 bg-gradient-to-br from-electric-500/20 to-purple-500/20 rounded-3xl flex items-center justify-center">
                  <div className="text-8xl text-electric-400 opacity-50">🚀</div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent"></div>
              
              {/* Enhanced floating elements */}
              <motion.div 
                className="absolute -top-8 -left-8 glass p-6 rounded-3xl gpu-accelerated border border-electric-500/30"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                  y: [0, -10, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-3xl font-bold text-electric-400 mb-1">500+</div>
                <div className="text-soft-200 text-sm font-medium">Projects</div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-8 -right-8 glass p-6 rounded-3xl gpu-accelerated border border-purple-500/30"
                animate={{ 
                  rotate: [0, -5, 5, 0],
                  scale: [1, 1.05, 1],
                  y: [0, -10, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <div className="text-3xl font-bold text-purple-400 mb-1">24/7</div>
                <div className="text-soft-200 text-sm font-medium">Support</div>
              </motion.div>
            </div>
          </OptimizedMotion>
        </div>
      </div>
    </section>
  )
}
