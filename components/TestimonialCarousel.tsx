'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Testimonial {
  quote: string
  author: string
  company: string
  role: string
  avatar?: string
}

interface TestimonialCarouselProps {
  title: string
  subtitle?: string
  testimonials: Testimonial[]
  className?: string
}

export default function TestimonialCarousel({
  title,
  subtitle,
  testimonials,
  className = ""
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length, isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-light-50">
            {title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="gradient-text">
              {title.split(' ').slice(-1)[0]}
            </span>
          </h2>
          {subtitle && (
            <p className="text-xl text-light-200 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Testimonial Display */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="glass p-8 md:p-12 rounded-2xl text-center hover:shadow-xl transition-all duration-300"
          >
            <div className="mb-8">
              <svg
                className="w-12 h-12 mx-auto text-teal-400 mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>
            
            <blockquote className="text-xl md:text-2xl text-light-200 mb-8 italic leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            
            <div className="flex items-center justify-center gap-4">
              {testimonials[currentIndex].avatar ? (
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].author}
                  className="w-16 h-16 rounded-full object-cover"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-400 to-lime-400 flex items-center justify-center text-2xl font-bold text-white">
                  {testimonials[currentIndex].author.charAt(0)}
                </div>
              )}
              <div className="text-left">
                <p className="font-semibold text-light-50 text-lg">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-teal-400">
                  {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-navy-800 border border-teal-400/30 flex items-center justify-center text-teal-400 hover:bg-teal-400 hover:text-white transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-teal-400 scale-125'
                      : 'bg-navy-600 hover:bg-navy-500'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-navy-800 border border-teal-400/30 flex items-center justify-center text-teal-400 hover:bg-teal-400 hover:text-white transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
