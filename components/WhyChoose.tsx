'use client'

import { motion } from 'framer-motion'

export default function WhyChoose() {
  const badges = [
    {
      title: 'Expert Teams',
      description: 'Certified professionals with deep industry knowledge and proven track records in delivering exceptional BPO services across diverse sectors.'
    },
    {
      title: 'Secure Operations',
      description: 'Bank-level security protocols, GDPR compliance, and enterprise-grade data protection ensuring your business operations remain secure and confidential.'
    },
    {
      title: 'Scalable Solutions',
      description: 'Flexible, modular services that seamlessly adapt to your business growth, from startup to enterprise scale, with no operational disruption.'
    }
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-deep">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Choose AdmirerX Services?
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We combine cutting-edge technology with industry expertise to deliver enterprise-grade BPO solutions that drive measurable business outcomes and operational excellence.
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300 border border-gray-600"
            >
              <h3 className="text-xl font-bold text-white mb-3">{badge.title}</h3>
              <p className="text-gray-400">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


