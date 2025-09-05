'use client'

import { motion } from 'framer-motion'

export default function HowWeWork() {
  const steps = [
    {
      step: '1',
      title: 'Understand',
      description: 'We analyze your business needs and challenges',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      step: '2',
      title: 'Co-Design',
      description: 'Collaborate to create tailored solutions',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      step: '3',
      title: 'Deploy',
      description: 'Implement with minimal disruption to your operations',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      step: '4',
      title: 'Improve',
      description: 'Continuously optimize and scale your success',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-deep">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How We Work
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Our proven methodology ensures seamless integration and maximum value delivery for your business operations.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              {/* Step Image */}
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <div className="w-32 h-32 mx-auto bg-secondary rounded-2xl overflow-hidden border border-gray-600">
                  <img
                    src={step.image}
                    alt={`Step ${step.step}: ${step.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Step Content */}
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
