'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote: 'AdmireX transformed our support operations, boosting both efficiency and customer satisfaction.',
    author: 'A. Sharma',
    role: 'Head of Operations, FinTech Co.',
  },
  {
    quote: 'Their IT team delivered fast and reliable solutions. Highly recommended.',
    author: 'M. Khan',
    role: 'CTO, SaaS Startup',
  },
  {
    quote: 'Data entry accuracy improved dramatically. AdmireX is a great partner.',
    author: 'S. Patel',
    role: 'COO, Retail Group',
  },
]

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 4500)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4 section-title"
          >
            What Our Clients Say
          </motion.h2>
          <p className="text-xl text-gray-300">Trusted by businesses worldwide for exceptional BPO services</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="glass p-8 rounded-2xl border-l-4 border-blue-500">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-xl italic text-gray-200 mb-4">
                  “{testimonials[index].quote}”
                </p>
                <div className="text-white font-semibold">{testimonials[index].author}</div>
                <div className="text-gray-400 text-sm">{testimonials[index].role}</div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${i === index ? 'bg-purple-gradient w-5' : 'bg-gray-500'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


