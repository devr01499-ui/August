'use client'

import TopBar from '@/components/TopBar'
import ReliableImage from '@/components/ReliableImage'
import PremiumFooter from '@/components/PremiumFooter'

// Icons for culture values
const InnovationIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const ExcellenceIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const IntegrityIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
)

const CollaborationIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
)

const GrowthIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
)

const ClientFocusIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
)

export default function About() {
  const cultureValues = [
    {
      title: 'Innovation',
      description: 'We continuously explore new technologies and methodologies to deliver cutting-edge solutions that give our clients a competitive advantage.',
      image: '/images/hero.jpg',
      icon: InnovationIcon
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from service delivery to client communication, ensuring consistent quality and reliability.',
      image: '/images/hero.jpg',
      icon: ExcellenceIcon
    },
    {
      title: 'Integrity',
      description: 'We conduct business with complete transparency, honesty, and ethical practices, building trust through our actions and decisions.',
      image: '/images/hero.jpg',
      icon: IntegrityIcon
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnership, both internally and with our clients, to achieve shared success.',
      image: '/images/hero.jpg',
      icon: CollaborationIcon
    },
    {
      title: 'Growth',
      description: 'We are committed to continuous learning and development, both for our team and our clients, fostering an environment of growth and progress.',
      image: '/images/hero.jpg',
      icon: GrowthIcon
    },
    {
      title: 'Client Focus',
      description: 'Our clients success is our success. We tailor our services to meet their unique needs and exceed their expectations.',
      image: '/images/hero.jpg',
      icon: ClientFocusIcon
    }
  ]

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
                We Admire Your Dreams
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Be empowered. Be supported. Be AdmirerX.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                At AdmirerX, we are driven by a big vision: to redefine how outsourcing empowers businesses. 
                Founded with the belief that exceptional service can create real business impact, we set out 
                to deliver smarter, faster, and more reliable solutions for our clients.
              </p>
            </div>

            <div className="relative">
              <ReliableImage
                src="/images/hero.jpg"
                alt="About AdmirerX"
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

      {/* Our Story Section */}
      <section className="py-24 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-6">
              Our Story
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From vision to reality, discover how AdmirerX became a trusted partner for businesses worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-heading font-bold text-navy-900 mb-6">
                Founded on Excellence
              </h3>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                AdmirerX was founded with a clear mission: to transform the BPO industry through exceptional service 
                and innovative solutions. We recognized that businesses needed more than just outsourcing – they 
                needed a true partner who understood their goals and challenges.
              </p>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                Our journey began with a small team of dedicated professionals who shared a common vision: to 
                create a company that would not just meet expectations, but exceed them at every turn. Today, 
                we're proud to serve clients across various industries, helping them achieve their business 
                objectives through our comprehensive BPO solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-electric-500/10 px-4 py-2 rounded-lg">
                  <span className="text-electric-700 font-semibold">ISO 27001 Certified</span>
                </div>
                <div className="bg-coral-500/10 px-4 py-2 rounded-lg">
                  <span className="text-coral-700 font-semibold">24/7 Support</span>
                </div>
                <div className="bg-electric-500/10 px-4 py-2 rounded-lg">
                  <span className="text-electric-700 font-semibold">Dedicated Account Manager</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <ReliableImage
                src="/images/hero.jpg"
                alt="Our Story"
                width={600}
                height={400}
                className="w-full h-auto rounded-3xl shadow-xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Values Section */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Our Culture & Values
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              The core principles that drive our team and define our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cultureValues.map((value, index) => (
              <div key={value.title} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 group hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="relative mb-6">
                  <ReliableImage
                    src={value.image}
                    alt={value.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-electric-400" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-white mb-4">{value.title}</h3>
                <p className="text-white/80 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Build Success Together Section */}
      <section className="py-24 bg-gradient-to-r from-electric-500 to-coral-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Let's Build Success Together
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto mb-10">
            Great results start with great partnerships. At AdmirerX, we believe in building long-term 
            relationships based on trust, transparency, and mutual success. Our team is committed to 
            understanding your unique business needs and delivering solutions that drive real value.
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-10">
            Whether you're looking to streamline operations, improve customer service, or scale your 
            business, we have the expertise and resources to help you achieve your goals. Let's work 
            together to turn your vision into reality.
          </p>
          <button
            onClick={() => window.location.href = '/contact'}
            className="px-8 py-4 bg-white text-navy-900 font-semibold rounded-xl hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
          >
            Start Your Journey
          </button>
        </div>
      </section>

      <PremiumFooter />
    </main>
  )
}