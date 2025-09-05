'use client'

import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'
import CareersSection from '@/components/CareersSection'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-deep">
      <TopBar />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-deep">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-gradient">Growing Team</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              At AdmirerX, you're not just an employee—you're part of our mission to raise the bar in outsourcing. We invest in our people, provide structured training, and create clear paths for advancement.
            </p>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-deep">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Our Culture</h2>
              <p className="text-lg text-gray-400 mb-6">
                At AdmirerX, we believe that our people are our greatest asset. We foster an inclusive, collaborative environment where innovation thrives and every team member has the opportunity to grow and excel.
              </p>
              <p className="text-lg text-gray-400 mb-6">
                Our culture is built on the pillars of excellence, integrity, and continuous learning. We provide comprehensive training programs, mentorship opportunities, and clear career advancement paths to help our team members achieve their professional goals.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary rounded-lg p-4 border border-gray-600">
                  <h3 className="text-lg font-semibold text-white mb-2">Work-Life Balance</h3>
                  <p className="text-gray-400 text-sm">Flexible schedules and remote work options</p>
                </div>
                <div className="bg-secondary rounded-lg p-4 border border-gray-600">
                  <h3 className="text-lg font-semibold text-white mb-2">Growth Opportunities</h3>
                  <p className="text-gray-400 text-sm">Clear advancement paths and skill development</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="AdmirerX team culture"
                width={600}
                height={400}
                className="rounded-2xl object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-deep">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Work With Us</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Discover the benefits and opportunities that make AdmirerX an exceptional place to build your career.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Career Growth',
                description: 'Clear advancement paths and opportunities for professional development'
              },
              {
                title: 'Training & Development',
                description: 'Comprehensive training programs and skill enhancement opportunities'
              },
              {
                title: 'Inclusive Culture',
                description: 'Diverse, inclusive workplace that values every team member'
              },
              {
                title: 'Performance Rewards',
                description: 'Competitive compensation and performance-based incentives'
              },
              {
                title: 'Comprehensive Benefits',
                description: 'Health insurance, retirement plans, and other employee benefits'
              },
              {
                title: 'Work-Life Balance',
                description: 'Flexible schedules and policies that support work-life balance'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary rounded-2xl p-6 hover:scale-105 transition-transform duration-300 border border-gray-600"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section Component */}
      <CareersSection />

      <Footer />
    </main>
  )
}
