'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface SolutionTab {
  id: string
  title: string
  description: string
  features: string[]
  icon: React.ComponentType<{ className?: string }>
  color: string
  image: string
}

interface SolutionTabsProps {
  tabs: SolutionTab[]
}

export default function SolutionTabs({ tabs }: SolutionTabsProps) {
  const [activeTab, setActiveTab] = useState(0)

  const tabVariants = {
    inactive: {
      scale: 0.95,
      opacity: 0.7,
      y: 0,
    },
    active: {
      scale: 1,
      opacity: 1,
      y: -5,
    }
  }

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  }

  const ActiveIcon = tabs[activeTab].icon

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-900">
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
            Comprehensive <span className="text-gradient-electric">Solutions</span>
          </h2>
          <p className="text-lg text-soft-300 max-w-3xl mx-auto leading-relaxed">
            Discover how our integrated approach transforms your business operations
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.id}
              variants={tabVariants}
              initial="inactive"
              animate={activeTab === index ? "active" : "inactive"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-gradient-electric text-white shadow-lg'
                  : 'bg-soft-800 text-soft-300 hover:bg-soft-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <tab.icon className="w-5 h-5" />
                <span>{tab.title}</span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="glass rounded-3xl p-8 md:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-2xl ${tabs[activeTab].color}`}>
                      <ActiveIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-soft-50">
                      {tabs[activeTab].title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-soft-300 mb-8 leading-relaxed">
                    {tabs[activeTab].description}
                  </p>

                  <ul className="space-y-3">
                    {tabs[activeTab].features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-gradient-electric rounded-full flex-shrink-0" />
                        <span className="text-soft-200">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Visual Element with Stock Image */}
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative rounded-2xl overflow-hidden"
                  >
                    <Image
                      src={tabs[activeTab].image}
                      alt={tabs[activeTab].title}
                      width={500}
                      height={300}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent"></div>
                    
                    {/* Overlay icon */}
                    <div className="absolute top-4 right-4">
                      <div className={`p-3 rounded-full ${tabs[activeTab].color} backdrop-blur-sm`}>
                        <ActiveIcon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}