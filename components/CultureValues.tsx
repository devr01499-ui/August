'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface ValueItem {
  title: string
  description: string
  image: string
  icon: React.ComponentType<{ className?: string }>
}

interface CultureValuesProps {
  values: ValueItem[]
}

export default function CultureValues({ values }: CultureValuesProps) {
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-soft-50 mb-6">
            Our <span className="text-gradient-electric">Culture</span> & <span className="text-gradient-purple">Values</span>
          </h2>
          <p className="text-lg text-soft-300 max-w-3xl mx-auto leading-relaxed">
            The principles that guide everything we do and shape our commitment to excellence
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="service-card h-full flex flex-col">
                {/* Value Image */}
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <Image
                    src={value.image}
                    alt={value.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4">
                    <div className="p-3 rounded-full bg-electric-500/20 backdrop-blur-sm">
                      <value.icon className="w-6 h-6 text-electric-400" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col p-6">
                  <h3 className="text-xl font-heading font-bold text-soft-50 mb-4 group-hover:text-gradient-electric transition-colors duration-300">
                    {value.title}
                  </h3>
                  
                  <p className="text-soft-300 leading-relaxed flex-1">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Meet Our Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-soft-50 mb-6">
              Ready to Join Our Team?
            </h3>
            <p className="text-lg text-soft-300 mb-8 leading-relaxed">
              Discover opportunities to be part of our mission and grow your career with AdmirerX
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-block"
            >
              Meet Our Team
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}