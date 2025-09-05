'use client'

import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-deep">
      <TopBar />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-deep">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              About <span className="text-gradient">AdmirerX</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We are a leading BPO company dedicated to transforming business operations through innovative solutions and exceptional service delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-deep">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-lg text-gray-400 mb-6">
                Founded with a vision to revolutionize business process outsourcing, AdmirerX has grown from a startup to a trusted partner for enterprises worldwide. Our journey began with a simple belief: that exceptional service delivery can transform businesses.
              </p>
              <p className="text-lg text-gray-400 mb-6">
                Today, we serve clients across multiple industries, delivering scalable BPO solutions that drive growth, efficiency, and innovation. Our commitment to excellence and continuous improvement has made us a preferred choice for businesses seeking reliable outsourcing partners.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="AdmirerX team"
                width={600}
                height={400}
                className="rounded-2xl object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-deep">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-2xl p-8 border border-gray-600"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-400">
                To empower businesses with world-class BPO solutions that drive operational excellence, enhance customer experiences, and accelerate growth through innovative technology and dedicated expertise.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-2xl p-8 border border-gray-600"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-400">
                To be the global leader in business process outsourcing, recognized for our innovation, reliability, and commitment to delivering exceptional value to our clients and partners worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-deep">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Meet the experienced leaders driving AdmirerX's success and innovation in the BPO industry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((leader, index) => (
              <motion.div
                key={leader}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary rounded-2xl p-6 text-center border border-gray-600"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={`https://images.unsplash.com/photo-${1500000000000 + leader}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                    alt={`Leader ${leader}`}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Leadership Member {leader}</h3>
                <p className="text-blue-400 mb-2">Position Title</p>
                <p className="text-gray-400 text-sm">
                  Experienced professional with expertise in business operations and strategic leadership.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
