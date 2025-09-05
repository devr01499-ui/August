'use client'

import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ServicesPage() {
  const services = [
    {
      title: 'HR & Recruitment',
      description: 'Full-cycle recruitment services from talent sourcing to onboarding, powered by advanced assessment tools and industry expertise.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['End-to-end recruitment process', 'Advanced candidate screening', 'Compliance & legal expertise', 'Onboarding excellence'],
      benefits: ['Reduced time-to-hire by 40%', 'Improved candidate quality', 'Compliance assurance', 'Scalable recruitment processes']
    },
    {
      title: 'Customer Support',
      description: '24/7 omnichannel customer support with multilingual capabilities, ensuring exceptional customer experiences across all touchpoints.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Multi-channel support (voice, email, chat)', 'Brand-aligned communication', 'Custom SLA management', 'Quality monitoring & reporting'],
      benefits: ['99.5% customer satisfaction', '24/7 availability', 'Multilingual support', 'Real-time analytics']
    },
    {
      title: 'Lead Generation',
      description: 'Strategic lead generation and inside sales services that deliver qualified prospects through compliant, data-driven outreach campaigns.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Smart lead qualification', 'Compliance-first approach', 'Advanced analytics & reporting', 'Scalable campaign management'],
      benefits: ['3x higher conversion rates', 'Compliant outreach', 'Data-driven insights', 'Scalable campaigns']
    },
    {
      title: 'Technical Helpdesk',
      description: 'Expert technical support and helpdesk services with rapid response times and comprehensive issue resolution capabilities.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Multi-tier technical support', 'SLA-driven resolution times', 'Remote diagnostics & troubleshooting', 'Knowledge base management'],
      benefits: ['90% first-call resolution', 'Rapid response times', 'Expert technicians', 'Comprehensive documentation']
    },
    {
      title: 'Data Processing & Back Office',
      description: 'Comprehensive data processing and back-office operations that ensure accuracy, efficiency, and actionable business insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Data entry & validation', 'Advanced analytics & reporting', 'Process automation', 'Insight generation & visualization'],
      benefits: ['99.9% accuracy rate', 'Automated workflows', 'Real-time insights', 'Cost reduction up to 60%']
    },
    {
      title: 'Custom BPO Solutions',
      description: 'Tailored BPO solutions designed specifically for your business needs, with flexible workflows and scalable team structures.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Bespoke workflow design', 'Scalable team allocation', 'Custom system integrations', 'Performance optimization'],
      benefits: ['Customized solutions', 'Flexible scaling', 'Seamless integration', 'Optimized performance']
    }
  ]

  return (
    <main className="min-h-screen bg-deep">
      <TopBar />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-deep">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive BPO solutions designed to help your business scale efficiently while maintaining the highest standards of quality and security.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-deep">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{service.title}</h2>
                  <p className="text-lg text-gray-400 mb-8">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="text-gray-400 flex items-center">
                            <svg className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Key Benefits</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="text-gray-400 flex items-center">
                            <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="btn-primary text-white py-3 px-8 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105"
                  >
                    Book Appointment
                  </button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="rounded-2xl object-cover w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
