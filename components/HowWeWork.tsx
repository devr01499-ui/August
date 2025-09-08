'use client'

import { motion } from 'framer-motion'

export default function HowWeWork() {
  const steps = [
    {
      step: '1',
      title: 'Assess',
      description: 'We analyze your business needs, challenges, and opportunities to understand your unique requirements.',
      icon: '🔍',
      color: 'from-blue-500 to-blue-600'
    },
    {
      step: '2',
      title: 'Onboard',
      description: 'Seamless integration with your existing systems and processes, ensuring minimal disruption.',
      icon: '🚀',
      color: 'from-green-500 to-green-600'
    },
    {
      step: '3',
      title: 'Scale',
      description: 'Rapidly scale your operations with our proven methodologies and dedicated support teams.',
      icon: '📈',
      color: 'from-purple-500 to-purple-600'
    },
    {
      step: '4',
      title: 'Optimize',
      description: 'Continuous improvement and optimization to maximize efficiency and drive sustainable growth.',
      icon: '⚡',
      color: 'from-orange-500 to-orange-600'
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

        {/* Animated Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 via-purple-500 to-orange-500 transform -translate-y-1/2 rounded-full"></div>
          
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative text-center group"
              >
                {/* Step Circle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg`}
                >
                  <span className="text-3xl">{step.icon}</span>
                </motion.div>
                
                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-gray-800">
                  {step.step}
                </div>
                
                {/* Step Content */}
                <div className="bg-secondary rounded-2xl p-6 border border-gray-600 group-hover:border-blue-500 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
                
                {/* Animated Pulse Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
