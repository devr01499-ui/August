'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ServicesGrid() {
  const services = [
    {
      title: 'HR & Recruitment',
      description: 'Full-cycle recruitment services from talent sourcing to onboarding, powered by advanced assessment tools and industry expertise.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['End-to-end recruitment process', 'Advanced candidate screening', 'Compliance & legal expertise', 'Onboarding excellence'],
      id: 'hr-recruitment'
    },
    {
      title: 'Customer Support',
      description: '24/7 omnichannel customer support with multilingual capabilities, ensuring exceptional customer experiences across all touchpoints.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Multi-channel support (voice, email, chat)', 'Brand-aligned communication', 'Custom SLA management', 'Quality monitoring & reporting'],
      id: 'customer-support'
    },
    {
      title: 'Lead Generation',
      description: 'Strategic lead generation and inside sales services that deliver qualified prospects through compliant, data-driven outreach campaigns.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Smart lead qualification', 'Compliance-first approach', 'Advanced analytics & reporting', 'Scalable campaign management'],
      id: 'lead-generation'
    },
    {
      title: 'Technical Helpdesk',
      description: 'Expert technical support and helpdesk services with rapid response times and comprehensive issue resolution capabilities.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Multi-tier technical support', 'SLA-driven resolution times', 'Remote diagnostics & troubleshooting', 'Knowledge base management'],
      id: 'tech-helpdesk'
    },
    {
      title: 'Data Processing & Back Office',
      description: 'Comprehensive data processing and back-office operations that ensure accuracy, efficiency, and actionable business insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Data entry & validation', 'Advanced analytics & reporting', 'Process automation', 'Insight generation & visualization'],
      id: 'data-processing'
    },
    {
      title: 'Custom BPO Solutions',
      description: 'Tailored BPO solutions designed specifically for your business needs, with flexible workflows and scalable team structures.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Bespoke workflow design', 'Scalable team allocation', 'Custom system integrations', 'Performance optimization'],
      id: 'custom-solutions'
    }
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-deep">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Comprehensive BPO solutions designed to help your business scale efficiently while maintaining the highest standards of quality and security.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="service-card bg-secondary rounded-2xl p-6 hover:scale-105 transition-transform duration-300 border border-gray-600"
            >
              {/* Image */}
              <div className="w-full h-48 rounded-xl overflow-hidden mb-4">
                <Image 
                  src={service.image} 
                  alt={`${service.title} service`} 
                  width={400} 
                  height={200} 
                  className="object-cover w-full h-full" 
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">{service.description}</p>
              
              {/* Features */}
              <ul className="mb-6 space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="text-sm text-gray-400 flex items-center">
                    <svg className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="w-full btn-primary text-white py-3 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                Book Appointment
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


