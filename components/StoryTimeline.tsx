'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface TimelineEvent {
  year: string
  title: string
  description: string
  image: string
  milestone: string
}

interface StoryTimelineProps {
  events: TimelineEvent[]
}

export default function StoryTimeline({ events }: StoryTimelineProps) {
  const [activeEvent, setActiveEvent] = useState(0)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-deep">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-soft-50 mb-6">
            Our <span className="text-gradient-electric">Journey</span>
          </h2>
          <p className="text-xl text-soft-300 max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to industry leadership, discover the milestones that shaped our story
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-electric opacity-30" />

          {/* Events */}
          <div className="space-y-16">
            {events.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass rounded-2xl p-6 cursor-pointer"
                    onClick={() => setActiveEvent(index)}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-2xl font-heading font-bold text-gradient-electric">
                        {event.year}
                      </span>
                      <span className="text-sm font-medium text-electric-400 bg-electric-500/10 px-3 py-1 rounded-full">
                        {event.milestone}
                      </span>
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-soft-50 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-soft-300 leading-relaxed">
                      {event.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-6 h-6 rounded-full border-4 ${
                      activeEvent === index
                        ? 'bg-gradient-electric border-electric-500'
                        : 'bg-navy-900 border-electric-500'
                    }`}
                    onClick={() => setActiveEvent(index)}
                  />
                </div>

                {/* Image Placeholder */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="glass rounded-2xl p-8 h-64 flex items-center justify-center relative overflow-hidden"
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 left-4 w-8 h-8 border-2 border-current rounded-full" />
                      <div className="absolute top-8 right-8 w-4 h-4 border-2 border-current rounded-full" />
                      <div className="absolute bottom-8 left-8 w-6 h-6 border-2 border-current rounded-full" />
                      <div className="absolute bottom-4 right-4 w-3 h-3 border-2 border-current rounded-full" />
                    </div>
                    
                    <div className="text-center">
                      <div className="text-6xl mb-4">🚀</div>
                      <p className="text-soft-400 text-sm">Milestone {index + 1}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
