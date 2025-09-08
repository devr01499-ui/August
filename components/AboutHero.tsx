'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutHero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-soft-50 mb-8">
              We Admire <span className="text-gradient-electric">Your Dreams</span>
            </h1>
            
            <p className="text-xl text-electric-400 mb-8 font-medium italic">
              Be empowered. Be supported. Be AdmirerX.
            </p>
            
            <div className="space-y-6 text-lg text-soft-300 leading-relaxed">
              <p>
                At AdmirerX, we are driven by a big vision: to redefine how outsourcing empowers businesses.
                Founded with the belief that exceptional service can create real business impact, we set out to deliver smarter, faster, and more reliable solutions for our clients.
              </p>
              
              <p>
                Our team brings together deep industry expertise, modern technology, and a passion for innovation. We partner with businesses of all sizes to provide scalable, secure, and customer-focused BPO services that fuel growth and efficiency.
              </p>
              
              <p>
                Guided by transparency, reliability, and continuous improvement, we are building AdmirerX into a trusted partner for companies that want to scale without the usual outsourcing headaches.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="/images/hero.jpg"
                alt="AdmirerX Team"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent"></div>
            </div>
            
            {/* Floating stats */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl"
            >
              <div className="text-3xl font-bold text-electric-400">500+</div>
              <div className="text-soft-200 text-sm">Happy Clients</div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -top-6 -right-6 glass p-6 rounded-2xl"
            >
              <div className="text-3xl font-bold text-purple-400">24/7</div>
              <div className="text-soft-200 text-sm">Support</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
