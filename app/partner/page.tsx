'use client'

import TopBar from '@/components/TopBar'
import ReliableImage from '@/components/ReliableImage'
import PremiumFooter from '@/components/PremiumFooter'

// Icons for partnership features
const HandshakeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
  </svg>
)

const GrowthIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
)

const SupportIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 1 0 0 19.5 9.75 9.75 0 0 0 0-19.5Z" />
  </svg>
)

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)

const RocketIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const NetworkIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
)

export default function PartnerPage() {
  const handlePartnerWithUs = () => {
    window.location.href = '/contact?focus=partnership'
  }

  const handleLearnMore = () => {
    window.location.href = '/about'
  }

  const valuePillars = [
    {
      title: 'Seamless Integration',
      description: 'Our advanced technology stack integrates seamlessly with your existing systems, ensuring minimal disruption and maximum efficiency.',
      icon: HandshakeIcon,
      color: 'text-electric'
    },
    {
      title: 'Shared Growth Revenue',
      description: 'We believe in mutual success. Our revenue-sharing model ensures that as you grow, we grow together, creating a true partnership.',
      icon: GrowthIcon,
      color: 'text-purple'
    },
    {
      title: 'Dedicated Support',
      description: 'Every partner gets a dedicated account manager and 24/7 support to ensure your success and quick resolution of any issues.',
      icon: SupportIcon,
      color: 'text-electric'
    }
  ]

  const partnerPrograms = [
    {
      title: 'Reseller Partner',
      summary: 'Sell our BPO services to your clients and earn competitive commissions.',
      benefits: [
        'Competitive commission structure',
        'Marketing support and materials',
        'Dedicated partner portal',
        'Training and certification',
        'Technical support'
      ],
      cta: 'Become a Reseller'
    },
    {
      title: 'Technology Alliance',
      summary: 'Integrate our solutions with your technology stack and create innovative offerings.',
      benefits: [
        'API access and documentation',
        'Co-development opportunities',
        'Joint go-to-market strategies',
        'Technical integration support',
        'Revenue sharing opportunities'
      ],
      cta: 'Join Alliance'
    },
    {
      title: 'Strategic Consultant',
      summary: 'Provide consulting services and refer clients to our BPO solutions.',
      benefits: [
        'Referral commissions',
        'Consulting opportunities',
        'Access to our expertise',
        'Client co-management',
        'Thought leadership platform'
      ],
      cta: 'Start Consulting'
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'We discuss your business goals, requirements, and how our partnership can drive mutual success.',
      icon: HandshakeIcon,
      color: 'text-electric'
    },
    {
      step: 2,
      title: 'Partnership Agreement',
      description: 'We create a customized partnership agreement that aligns with your business model and objectives.',
      icon: ShieldIcon,
      color: 'text-purple'
    },
    {
      step: 3,
      title: 'Onboarding & Training',
      description: 'Comprehensive training and onboarding to ensure you have everything needed for success.',
      icon: RocketIcon,
      color: 'text-electric'
    },
    {
      step: 4,
      title: 'Launch & Support',
      description: 'We launch your partnership with ongoing support and regular check-ins to ensure success.',
      icon: NetworkIcon,
      color: 'text-purple'
    }
  ]

  return (
    <main className="min-h-screen bg-navy-900">
      <TopBar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-navy via-navy-800 to-electric-900 pt-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-electric/20 to-purple/20 animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-electric/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight">
                Partner With Us
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Strategic Partnerships
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Join our exclusive partner program and unlock new opportunities for mutual growth and success 
                in the BPO industry. Together, we can deliver exceptional value to clients worldwide.
              </p>
            </div>

            <div className="relative">
              <ReliableImage
                src="/images/hero.jpg"
                alt="Partner With Us"
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

      {/* Value Pillars Section */}
      <section className="py-24 bg-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              Our partnership program is designed to create mutual value and long-term success for all parties involved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valuePillars.map((pillar, index) => (
              <div key={pillar.title} className="bg-white rounded-2xl shadow-lg p-8 group hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-electric to-purple rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-navy mb-4">{pillar.title}</h3>
                <p className="text-navy-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Program Tiers Section */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Partner Program Tiers
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Choose the partnership model that best fits your business goals and capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerPrograms.map((program, index) => (
              <div key={program.title} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 group hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-heading font-bold text-white mb-4">{program.title}</h3>
                <p className="text-white/80 mb-6">{program.summary}</p>
                
                <ul className="space-y-3 mb-8">
                  {program.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-white/70 text-sm">
                      <div className="w-2 h-2 bg-gradient-to-r from-electric to-purple rounded-full mr-3 flex-shrink-0"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={handlePartnerWithUs}
                  className="w-full py-3 bg-gradient-to-r from-electric-500 to-coral-500 text-white font-semibold rounded-xl hover:from-electric-600 hover:to-coral-600 transition-all duration-300"
                >
                  {program.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process Section */}
      <section className="py-24 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-6">
              Partnership Process
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our proven 4-step process ensures seamless integration and maximum value delivery for our partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-electric-500 to-coral-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-sm font-bold text-navy-900">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-bold text-navy-900 mb-4">{step.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Join our network of successful partners who have transformed their businesses with our solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="text-4xl font-bold text-electric-400 mb-4">500+</div>
              <div className="text-white/80 text-lg font-semibold mb-2">Active Partners</div>
              <div className="text-white/60">Growing our network worldwide</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="text-4xl font-bold text-coral-400 mb-4">$50M+</div>
              <div className="text-white/80 text-lg font-semibold mb-2">Partner Revenue</div>
              <div className="text-white/60">Generated through partnerships</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="text-4xl font-bold text-electric-400 mb-4">98%</div>
              <div className="text-white/80 text-lg font-semibold mb-2">Partner Satisfaction</div>
              <div className="text-white/60">Based on annual surveys</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-electric-500 to-coral-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Ready to Become Our Partner?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
            Join hundreds of successful partners who trust AdmirerX for their BPO needs. 
            Let's discuss how we can help you achieve your goals together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handlePartnerWithUs}
              className="px-8 py-4 bg-white text-navy-900 font-semibold rounded-xl hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
            >
              Apply to Partner Program
            </button>
            <button
              onClick={handleLearnMore}
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      <PremiumFooter />
    </main>
  )
}