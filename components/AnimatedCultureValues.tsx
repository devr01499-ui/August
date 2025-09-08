'use client'

import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import OptimizedMotion from './OptimizedMotion'

interface CultureValue {
  title: string
  description: string
  image: string
  icon: React.ComponentType<{ className?: string }>
}

interface AnimatedCultureValuesProps {
  title: string
  subtitle: string
  values: CultureValue[]
}

// Floating Particles for Background
const FloatingParticles = () => {
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
      for (let i = 0; i < 20; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.4 + 0.1,
          life: Math.random() * 300 + 200
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
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.4 + 0.1,
            life: Math.random() * 300 + 200
          }
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `#0066FF${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`
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
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-20"
    />
  )
}

export default function AnimatedCultureValues({ 
  title, 
  subtitle, 
  values 
}: AnimatedCultureValuesProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-900 relative overflow-hidden">
      {/* Background Animation */}
      <FloatingParticles />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <OptimizedMotion animation="slideUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-soft-50 mb-6">
            Our <span className="text-gradient-electric">Culture & Values</span>
          </h2>
          <p className="text-xl text-soft-300 max-w-3xl mx-auto leading-relaxed">
            The core principles that drive our team and define our commitment to excellence.
          </p>
        </OptimizedMotion>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <OptimizedMotion key={value.title} animation="slideUp" delay={index * 100}>
              <motion.div
                className="glass p-8 rounded-3xl text-center h-full flex flex-col justify-between group relative overflow-hidden"
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 25px 50px rgba(0, 102, 255, 0.2)",
                  y: -8
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <Image
                    src={value.image}
                    alt={value.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-3xl"
                  />
                </div>

                {/* Floating Icon Animation */}
                <motion.div
                  className="relative w-20 h-20 mx-auto mb-6 glass rounded-full flex items-center justify-center"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 360
                  }}
                >
                  <value.icon className="w-10 h-10 text-electric-500" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-heading font-bold text-soft-50 mb-4 group-hover:text-gradient-electric transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-soft-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-electric-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-transparent"
                  animate={{
                    borderColor: [
                      "transparent",
                      "#0066FF",
                      "transparent"
                    ]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                />
              </motion.div>
            </OptimizedMotion>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-heading font-bold text-soft-50 mb-4">
            Ready to Join Our Team?
          </h3>
          <p className="text-xl text-soft-300 mb-8">
            Explore career opportunities and become a part of our innovative culture.
          </p>
          <Link href="/contact" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary py-3 px-8 text-lg relative overflow-hidden group"
            >
              <span className="relative z-10">Meet Our Team</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-electric-500 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
