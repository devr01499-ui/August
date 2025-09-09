'use client'

import { lazy, Suspense } from 'react'
import TopBar from '@/components/TopBar'
import ReliableImage from '@/components/ReliableImage'
import PremiumFooter from '@/components/PremiumFooter'
import PerformanceMonitor from '@/components/PerformanceMonitor'

// Lazy load non-critical components
const PartnerCTA = lazy(() => import('@/components/PartnerCTA'))

// Icons for the components
const PlugIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
  </svg>
)

const GrowthIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h.01M17 12h.01M17 16h.01" />
  </svg>
)

const SupportIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 1 0 0 19.5 9.75 9.75 0 0 0 0-19.5Z" />
  </svg>
)

const HRIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
)

const CustomerSupportIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
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

const DataProcessingIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
)

const CustomIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

export default function Home() {
  const handlePartnerWithUs = () => {
    window.location.href = '/contact'
  }

  const handleBookAppointment = () => {
    window.location.href = '/contact?focus=appointment'
  }

  // Solution process steps
  const solutionSteps = [
    {
      step: 1,
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs, current processes, and identify optimization opportunities to design the perfect BPO solution.',
      icon: PlugIcon,
      color: 'text-electric'
    },
    {
      step: 2,
      title: 'Implementation & Integration',
      description: 'Our expert team implements the solution with seamless integration, ensuring minimal disruption to your operations.',
      icon: GrowthIcon,
      color: 'text-purple'
    },
    {
      step: 3,
      title: 'Ongoing Support & Optimization',
      description: 'We provide continuous monitoring, support, and optimization to ensure your BPO solution delivers maximum value.',
      icon: SupportIcon,
      color: 'text-electric'
    }
  ]

  // Services data with reliable images
  const services = [
    {
      id: 'hr-recruitment',
      title: 'HR & Recruitment',
      description: 'Full-cycle recruitment services from talent sourcing to onboarding, powered by advanced assessment tools and industry expertise.',
      icon: HRIcon,
      features: [
        'End-to-end recruitment process',
        'Advanced candidate screening',
        'Compliance & legal expertise',
        'Onboarding excellence',
        'Talent management'
      ],
      image: '/images/optimized/hr-consultancy.jpg',
      color: 'text-electric',
      bgColor: 'bg-electric/10'
    },
    {
      id: 'customer-support',
      title: 'Customer Support',
      description: 'Deliver exceptional customer experiences with our multilingual support team and advanced CRM integration.',
      icon: CustomerSupportIcon,
      features: [
        '24/7 multilingual support',
        'Advanced CRM integration',
        'Real-time analytics dashboard',
        'Custom escalation workflows',
        'Quality assurance monitoring'
      ],
      image: '/images/optimized/customer-support.jpg',
      color: 'text-purple',
      bgColor: 'bg-purple/10'
    },
    {
      id: 'lead-generation',
      title: 'Lead Generation',
      description: 'Generate high-quality leads with our targeted campaigns and advanced analytics platform.',
      icon: LeadGenerationIcon,
      features: [
        'Targeted lead campaigns',
        'Advanced analytics platform',
        'CRM integration',
        'Lead scoring algorithms',
        'Conversion tracking'
      ],
      image: '/images/optimized/lead-generation.jpg',
      color: 'text-electric',
      bgColor: 'bg-electric/10'
    },
    {
      id: 'tech-helpdesk',
      title: 'Technical Helpdesk',
      description: 'Provide comprehensive technical assistance with our expert team and cutting-edge tools.',
      icon: TechSupportIcon,
      features: [
        'Expert technical team',
        'Multi-channel support',
        'Remote assistance tools',
        'Knowledge base management',
        'Performance monitoring'
      ],
      image: '/images/optimized/tech-support.jpg',
      color: 'text-purple',
      bgColor: 'bg-purple/10'
    },
    {
      id: 'data-processing',
      title: 'Data Processing & Back Office',
      description: 'Transform raw data into actionable insights with our automated processing and validation systems.',
      icon: DataProcessingIcon,
      features: [
        'Automated data validation',
        'Real-time processing',
        'Data quality assurance',
        'Custom reporting tools',
        'Secure data handling'
      ],
      image: '/images/optimized/data-processing.jpg',
      color: 'text-electric',
      bgColor: 'bg-electric/10'
    },
    {
      id: 'custom-bpo',
      title: 'Custom BPO Solution',
      description: 'Tailored BPO solutions designed specifically for your business needs, with flexible workflows and scalable team structures.',
      icon: CustomIcon,
      features: [
        'Bespoke workflow design',
        'Scalable team allocation',
        'Custom system integrations',
        'Performance optimization',
        'Dedicated support'
      ],
      image: '/images/optimized/it-solutions.jpg',
      color: 'text-purple',
      bgColor: 'bg-purple/10'
    }
  ]

  return (
    <main className="min-h-screen bg-navy-900">
      <PerformanceMonitor />
      <TopBar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-navy via-navy-800 to-electric-900">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-electric/20 to-purple/20 animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-electric/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight">
                Engineering Digital Growth with Precision <span className="text-gradient-electric">& Vision</span>
              </h1>
              
              {/* Professional copy in bordered box */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-8">
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                  Innovative solutions, seamless partnerships, and transformative experiences for clients and talent.
                </p>
              </div>

              {/* Updated stats */}
              <div className="flex flex-wrap gap-8 justify-center lg:justify-start mb-10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-electric mb-2">Dedicated Account Manager</div>
                  <div className="text-white/70 text-sm">Personalized Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple mb-2">ISO 27001</div>
                  <div className="text-white/70 text-sm">Security Certified</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-electric mb-2">24/7</div>
                  <div className="text-white/70 text-sm">Support</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={handleBookAppointment}
                  className="px-8 py-4 bg-gradient-to-r from-electric to-purple text-white font-semibold rounded-xl hover:from-electric-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Book Appointment
                </button>
                <button
                  onClick={() => window.location.href = '/about'}
                  className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <ReliableImage
                src="/images/hero.jpg"
                alt="AdmirerX Business Solutions"
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

      {/* How We Work Section */}
      <section className="py-24 bg-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
              How We Work
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              Our proven 3-step process ensures seamless integration and maximum value delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutionSteps.map((step, index) => (
              <div key={step.step} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-electric to-purple rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-sm font-bold text-navy-900">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-bold text-navy mb-4">{step.title}</h3>
                <p className="text-navy-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Our Services
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              Smart, scalable BPO solutions that power your growth delivering efficiency, security, and excellence at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 group hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="relative mb-6">
                  <ReliableImage
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/80 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center text-white/70 text-sm">
                      <div className="w-2 h-2 bg-gradient-to-r from-electric to-purple rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={handleBookAppointment}
                  className="w-full py-3 bg-gradient-to-r from-electric to-purple text-white font-semibold rounded-xl hover:from-electric-600 hover:to-purple-600 transition-all duration-300"
                >
                  Book Appointment
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner CTA Section */}
      <section className="py-24 bg-gradient-to-r from-electric to-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Partner With Us
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
            Join our network of trusted partners and unlock new opportunities for growth. We provide comprehensive support, 
            security certifications, and dedicated account management to ensure your success.
          </p>
          <button
            onClick={handlePartnerWithUs}
            className="px-8 py-4 bg-white text-navy font-semibold rounded-xl hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
          >
            Get Started Today
          </button>
        </div>
      </section>

      <PremiumFooter />
    </main>
  )
}