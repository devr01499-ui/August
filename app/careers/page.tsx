'use client'

import TopBar from '@/components/TopBar'
import ReliableImage from '@/components/ReliableImage'
import PremiumFooter from '@/components/PremiumFooter'

// Icons for the components
const GrowthIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h.01M17 12h.01M17 16h.01" />
  </svg>
)

const TrainingIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
)

const CultureIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
)

const RewardsIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
  </svg>
)

const AchievementIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
)

const NetworkIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
)

export default function CareersPage() {
  const handleApplyNow = () => {
    window.location.href = '/contact?focus=careers'
  }

  const handleLearnMore = () => {
    window.location.href = '/about'
  }

  const achievements = [
    {
      title: 'Professional Growth',
      description: 'Access to world-class training programs, certifications, and mentorship opportunities that accelerate your career development.',
      icon: GrowthIcon,
      color: 'text-electric-500'
    },
    {
      title: 'Industry Exposure',
      description: 'Work with diverse clients across various industries, gaining valuable experience and expanding your professional network.',
      icon: NetworkIcon,
      color: 'text-coral-500'
    },
    {
      title: 'Skill Development',
      description: 'Continuous learning opportunities with cutting-edge technologies and methodologies that keep you ahead of the curve.',
      icon: TrainingIcon,
      color: 'text-electric-500'
    },
    {
      title: 'Career Advancement',
      description: 'Clear career progression paths with regular performance reviews and opportunities for promotion and leadership roles.',
      icon: AchievementIcon,
      color: 'text-coral-500'
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible working arrangements, comprehensive benefits, and a supportive culture that values your personal well-being.',
      icon: CultureIcon,
      color: 'text-electric-500'
    },
    {
      title: 'Competitive Rewards',
      description: 'Attractive compensation packages, performance bonuses, and recognition programs that reward your contributions.',
      icon: RewardsIcon,
      color: 'text-coral-500'
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
                Join Our Growing Team
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                We Admire Your Dreams
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                At AdmirerX, you're not just an employee—you're part of our mission to raise the bar in outsourcing. 
                We invest in our people, provide structured training, and create clear paths for advancement.
              </p>
            </div>

            <div className="relative">
              <ReliableImage
                src="/images/hero.jpg"
                alt="Join Our Team"
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

      {/* Join Our Team Section */}
      <section className="py-24 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto">
              Be part of a dynamic team that's shaping the future of business process outsourcing. 
              Discover exciting career opportunities and grow with us.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-heading font-bold text-navy-900 mb-6">
                World-Class Training & Development
              </h3>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                At AdmirerX, we believe in investing in our people. Our comprehensive training programs 
                cover everything from technical skills to soft skills, ensuring you're equipped to excel 
                in your role and advance in your career.
              </p>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                We provide access to industry certifications, mentorship programs, and continuous learning 
                opportunities that keep you ahead of the curve in the rapidly evolving BPO landscape.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-electric-500/10 px-4 py-3 rounded-lg">
                  <span className="text-electric-700 font-semibold">Certification Programs</span>
                </div>
                <div className="bg-coral-500/10 px-4 py-3 rounded-lg">
                  <span className="text-coral-700 font-semibold">Mentorship</span>
                </div>
                <div className="bg-electric-500/10 px-4 py-3 rounded-lg">
                  <span className="text-electric-700 font-semibold">Skill Development</span>
                </div>
                <div className="bg-coral-500/10 px-4 py-3 rounded-lg">
                  <span className="text-coral-700 font-semibold">Career Growth</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <ReliableImage
                src="/images/hero.jpg"
                alt="Training & Development"
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

      {/* What You'll Achieve Section */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              What You'll Achieve
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Discover the growth, exposure, and opportunities that await you at AdmirerX.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={achievement.title} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 group hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-electric-500 to-coral-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-white mb-4">{achievement.title}</h3>
                <p className="text-white/80 leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career CTA Section */}
      <section className="py-24 bg-gradient-to-r from-electric-500 to-coral-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Ready to Start Your Career Journey?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
            Join hundreds of successful professionals who trust AdmirerX for their career growth. 
            Let's discuss how we can help you achieve your professional goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleApplyNow}
              className="px-8 py-4 bg-white text-navy-900 font-semibold rounded-xl hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
            >
              Apply Now
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