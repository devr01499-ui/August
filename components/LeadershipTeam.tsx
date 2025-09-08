'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  quote: string
  image: string
  linkedin?: string
  twitter?: string
}

interface LeadershipTeamProps {
  members: TeamMember[]
}

export default function LeadershipTeam({ members }: LeadershipTeamProps) {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null)

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
            Meet Our <span className="text-gradient-electric">Leadership</span>
          </h2>
          <p className="text-xl text-soft-300 max-w-3xl mx-auto leading-relaxed">
            Visionary leaders driving innovation and excellence across all our operations
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredMember(member.id)}
              onHoverEnd={() => setHoveredMember(null)}
              className="group relative"
            >
              <div className="service-card h-full">
                {/* Member Image */}
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <div className="w-full h-64 bg-gradient-electric flex items-center justify-center relative">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full" />
                      <div className="absolute top-8 right-8 w-4 h-4 border-2 border-white rounded-full" />
                      <div className="absolute bottom-8 left-8 w-6 h-6 border-2 border-white rounded-full" />
                      <div className="absolute bottom-4 right-4 w-3 h-3 border-2 border-white rounded-full" />
                    </div>
                    
                    {/* Placeholder for member photo */}
                    <div className="text-center text-white">
                      <div className="text-6xl mb-2">👤</div>
                      <p className="text-sm opacity-80">Photo Coming Soon</p>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredMember === member.id ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-electric opacity-20"
                  />
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold text-soft-50 mb-2 group-hover:text-gradient-electric transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  <p className="text-electric-400 font-semibold mb-4">
                    {member.role}
                  </p>
                  
                  <p className="text-soft-300 mb-6 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Quote */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: hoveredMember === member.id ? 1 : 0,
                      height: hoveredMember === member.id ? 'auto' : 0
                    }}
                    className="overflow-hidden"
                  >
                    <blockquote className="text-soft-400 italic border-l-4 border-electric-500 pl-4">
                      "{member.quote}"
                    </blockquote>
                  </motion.div>

                  {/* Social Links */}
                  <div className="flex gap-4 mt-6">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-soft-400 hover:text-electric-400 transition-colors duration-200"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-soft-400 hover:text-electric-400 transition-colors duration-200"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
