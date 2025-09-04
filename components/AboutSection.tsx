'use client'

import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white section-title"
            >
              Why Choose ADMIRERX?
            </motion.h2>
            <div className="section-underline mt-3" />
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-subheading mb-8 leading-relaxed"
            >
              ADMIRERX is dedicated to delivering premium BPO services with a combination of AI, skilled professionals, and a global approach. Our mission is to empower businesses with cost-effective and efficient outsourcing solutions.
            </motion.p>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-subheading mb-8 leading-relaxed"
            >
              With years of industry experience and a dedicated team of professionals, we provide scalable, cost-effective solutions that help businesses focus on their core competencies while we handle their operational needs with precision and excellence.
            </motion.p>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center p-4 glass-effect rounded-lg">
                <div className="w-8 h-8 bg-blue-900/30 rounded-full flex items-center justify-center mr-4 text-blue-400">✓</div>
                <span className="text-white font-medium">Dedicated Account Management</span>
              </div>
              <div className="flex items-center p-4 glass-effect rounded-lg">
                <div className="w-8 h-8 bg-blue-900/30 rounded-full flex items-center justify-center mr-4 text-blue-400">✓</div>
                <span className="text-white font-medium">Enterprise Security Standards</span>
              </div>
              <div className="flex items-center p-4 glass-effect rounded-lg">
                <div className="w-8 h-8 bg-blue-900/30 rounded-full flex items-center justify-center mr-4 text-blue-400">✓</div>
                <span className="text-white font-medium">Customizable Service Packages</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex justify-center items-center"
          >
            <img 
              src="/about-image.jpg" 
              alt="Why Choose ADMIRERX" 
              className="rounded-2xl shadow-lg object-cover w-full h-full max-h-[350px]" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
