'use client'

import { useState } from 'react'
import TopBar from '@/components/TopBar'
import ReliableImage from '@/components/ReliableImage'
import PremiumFooter from '@/components/PremiumFooter'

// Icons for the services
const CustomerSupportIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
)

const DataProcessingIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
)

const LeadGenerationIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
)

const TechSupportIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const HRIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
)

const CustomIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const handleBookAppointment = () => {
    window.location.href = '/contact?focus=appointment'
  }

  const services = [
    {
      id: 'hr-recruitment',
      title: 'HR & Recruitment',
      description: 'Full-cycle recruitment services from talent sourcing to onboarding, powered by advanced assessment tools and industry expertise.',
      icon: HRIcon,
      features: [
        'End-to-end recruitment process management',
        'Advanced candidate screening and assessment',
        'Compliance & legal expertise in hiring practices',
        'Onboarding excellence and new hire integration',
        'Talent management and retention strategies',
        'Background verification and reference checks',
        'Job posting optimization across multiple platforms',
        'Interview scheduling and coordination',
        'Salary benchmarking and negotiation support',
        'Employee documentation and record keeping'
      ],
      image: '/images/hr-consultancy.jpg',
      color: 'text-electric-500',
      bgColor: 'bg-electric-500/10',
      onCtaClick: () => setSelectedService('hr-recruitment')
    },
    {
      id: 'customer-support',
      title: 'Customer Support',
      description: 'Deliver exceptional customer experiences with our multilingual support team and advanced CRM integration.',
      icon: CustomerSupportIcon,
      features: [
        '24/7 multilingual support across all channels',
        'Advanced CRM integration and management',
        'Real-time analytics dashboard and reporting',
        'Custom escalation workflows and procedures',
        'Quality assurance monitoring and improvement',
        'Live chat, email, and phone support',
        'Knowledge base creation and maintenance',
        'Customer satisfaction surveys and feedback',
        'Ticket management and resolution tracking',
        'Social media customer service support'
      ],
      image: '/images/customer-support.jpg',
      color: 'text-coral-500',
      bgColor: 'bg-coral-500/10',
      onCtaClick: () => setSelectedService('customer-support')
    },
    {
      id: 'lead-generation',
      title: 'Lead Generation',
      description: 'Generate high-quality leads with our targeted campaigns and advanced analytics platform.',
      icon: LeadGenerationIcon,
      features: [
        'Targeted lead campaigns across multiple channels',
        'Advanced analytics platform and reporting',
        'CRM integration and lead management',
        'Lead scoring algorithms and qualification',
        'Conversion tracking and optimization',
        'Email marketing and automation',
        'Social media lead generation',
        'Content marketing and SEO optimization',
        'Cold calling and outreach programs',
        'Lead nurturing and follow-up sequences'
      ],
      image: '/images/lead-generation.jpg',
      color: 'text-electric-500',
      bgColor: 'bg-electric-500/10',
      onCtaClick: () => setSelectedService('lead-generation')
    },
    {
      id: 'tech-helpdesk',
      title: 'Technical Helpdesk',
      description: 'Provide comprehensive technical assistance with our expert team and cutting-edge tools.',
      icon: TechSupportIcon,
      features: [
        'Expert technical team with industry certifications',
        'Multi-channel support (phone, email, chat, remote)',
        'Remote assistance tools and screen sharing',
        'Knowledge base management and documentation',
        'Performance monitoring and system optimization',
        'Hardware and software troubleshooting',
        'Network configuration and security setup',
        'Software installation and updates',
        'Data backup and recovery services',
        'IT infrastructure monitoring and maintenance'
      ],
      image: '/images/tech-support.jpg',
      color: 'text-coral-500',
      bgColor: 'bg-coral-500/10',
      onCtaClick: () => setSelectedService('tech-helpdesk')
    },
    {
      id: 'data-processing',
      title: 'Data Processing & Back Office',
      description: 'Transform raw data into actionable insights with our automated processing and validation systems.',
      icon: DataProcessingIcon,
      features: [
        'Automated data validation and cleansing',
        'Real-time processing and analysis',
        'Data quality assurance and monitoring',
        'Custom reporting tools and dashboards',
        'Secure data handling and compliance',
        'OCR and document digitization',
        'Database management and migration',
        'Data entry and transcription services',
        'Financial data processing and reconciliation',
        'Inventory management and tracking'
      ],
      image: '/images/data-processing.jpg',
      color: 'text-electric-500',
      bgColor: 'bg-electric-500/10',
      onCtaClick: () => setSelectedService('data-processing')
    },
    {
      id: 'custom-bpo',
      title: 'Custom BPO Solution',
      description: 'Tailored BPO solutions designed specifically for your business needs, with flexible workflows and scalable team structures.',
      icon: CustomIcon,
      features: [
        'Bespoke workflow design and implementation',
        'Scalable team allocation and management',
        'Custom system integrations and APIs',
        'Performance optimization and monitoring',
        'Dedicated support and account management',
        'Flexible pricing models and contracts',
        'Industry-specific expertise and knowledge',
        'Compliance and regulatory support',
        'Technology stack customization',
        'Ongoing process improvement and innovation'
      ],
      image: '/images/it-solutions.jpg',
      color: 'text-coral-500',
      bgColor: 'bg-coral-500/10',
      onCtaClick: () => setSelectedService('custom-bpo')
    }
  ]

  // Show the services grid
  return (
    <main className="min-h-screen bg-navy-900">
      <TopBar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-electric-900 pt-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-electric-500/20 to-coral-500/20 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Smart, scalable BPO solutions that power your growth delivering efficiency, security, and excellence at every step.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Discover our comprehensive range of Business Process Outsourcing services designed to streamline 
                your operations, enhance productivity, and drive sustainable growth for your business.
              </p>
            </div>

            <div className="relative">
              <ReliableImage
                src="/images/hero.jpg"
                alt="Our Services"
                width={600}
                height={400}
                className="w-full h-auto rounded-3xl shadow-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-lg p-8 group hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="relative mb-6">
                  <ReliableImage
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-navy-900 mb-4">{service.title}</h3>
                <p className="text-neutral-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {service.features.slice(0, 5).map((feature, index) => (
                    <li key={index} className="flex items-start text-neutral-600 text-sm">
                      <div className="w-2 h-2 bg-gradient-to-r from-electric-500 to-coral-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={handleBookAppointment}
                  className="w-full py-3 bg-gradient-to-r from-electric-500 to-coral-500 text-white font-semibold rounded-xl hover:from-electric-600 hover:to-coral-600 transition-all duration-300"
                >
                  Book Appointment
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AdmirerX Unique Approach Section */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
            Why Choose AdmirerX?
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto mb-12">
            Our unique approach combines cutting-edge technology with human expertise to deliver BPO solutions 
            that not only meet your current needs but also scale with your business growth. We don't just 
            provide services – we become an extension of your team, understanding your culture, values, and 
            long-term objectives.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Technology-Driven</h3>
              <p className="text-white/80">We leverage the latest technologies and automation tools to deliver efficient, accurate, and scalable solutions.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Security-First</h3>
              <p className="text-white/80">ISO 27001 certified with robust security measures to protect your data and ensure compliance with industry standards.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Dedicated Support</h3>
              <p className="text-white/80">Every client gets a dedicated account manager and 24/7 support to ensure seamless operations and quick issue resolution.</p>
            </div>
          </div>
          <button
            onClick={handleBookAppointment}
            className="px-8 py-4 bg-gradient-to-r from-electric-500 to-coral-500 text-white font-semibold rounded-xl hover:from-electric-600 hover:to-coral-600 transition-all duration-300 transform hover:scale-105"
          >
            Book Your Consultation
          </button>
        </div>
      </section>

      <PremiumFooter />
    </main>
  )
}