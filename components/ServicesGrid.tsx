'use client'

import Image from 'next/image'

export default function ServicesGrid() {
  const services = [
    {
      title: 'Customer Support',
      description: '24/7 multilingual support with trained professionals to handle all customer inquiries and provide exceptional service.',
      icon: '/images/customer-support.jpg',
      features: ['24/7 availability', 'Multilingual support', 'Trained professionals'],
      id: 'customer-support'
    },
    {
      title: 'Data Processing',
      description: 'Accurate and efficient data entry with quality assurance protocols and advanced validation systems.',
      icon: '/images/data-processing.jpg',
      features: ['Quality assurance', 'Advanced validation', 'Efficient processing'],
      id: 'data-processing'
    },
    {
      title: 'Lead Generation',
      description: 'Targeted lead generation strategies to grow your sales pipeline and increase conversion rates effectively.',
      icon: '/images/lead-generation.jpg',
      features: ['Targeted strategies', 'Sales pipeline growth', 'Conversion optimization'],
      id: 'lead-generation'
    },
    {
      title: 'Tech Support',
      description: 'Expert technical support for IT infrastructure, software issues, and system maintenance with rapid response times.',
      icon: '/images/tech-support.jpg',
      features: ['Expert technicians', 'Rapid response', 'Infrastructure support'],
      id: 'tech-support'
    },
    {
      title: 'HR Consultancy',
      description: 'Professional HR consulting services for talent management, compliance, and organizational development strategies.',
      icon: '/images/hr-consultancy.jpg',
      features: ['Talent management', 'Compliance expertise', 'Organizational development'],
      id: 'hr-consultancy'
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-lg text-[#c8d2e6] max-w-2xl mx-auto">
            Tailored BPO solutions designed to meet your unique business requirements
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.id} id={s.id} className="service-card glass rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center overflow-hidden mb-4">
                <Image 
                  src={s.icon} 
                  alt={`${s.title} icon`} 
                  width={48} 
                  height={48} 
                  className="object-cover rounded-full" 
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
              <p className="text-[#c8d2e6] mb-4">{s.description}</p>
              
              {/* Features */}
              <ul className="mb-6 list-disc list-inside text-[#c8d2e6] space-y-1">
                {s.features.map((feature) => (
                  <li key={feature} className="text-sm">{feature}</li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="w-full btn-primary text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-[#2557c4] transition-colors duration-200"
              >
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


