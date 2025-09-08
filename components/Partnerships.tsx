'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import TopBar from './TopBar'
import Footer from './Footer'

// Custom Icons
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

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

// Data Flow Animation Component
const DataFlowAnimation = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30 animate-pulse"></div>
    <div className="absolute top-1/2 right-0 w-full h-px bg-gradient-to-l from-transparent via-lime-400 to-transparent opacity-30 animate-pulse delay-1000"></div>
    <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30 animate-pulse delay-2000"></div>
    
    {/* Floating nodes */}
    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-500"></div>
    <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-lime-400 rounded-full animate-bounce delay-1500"></div>
    <div className="absolute top-3/4 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-2500"></div>
  </div>
)

export default function Partnerships() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Scroll animations
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsVisible(scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handlePartnerApplication = async (programType: string) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Partnership Inquiry',
          email: 'partnership@admirerx.com',
          service: `${programType} Partnership Program`,
          message: `Interested in joining the ${programType} Partnership Program. Please contact me with more information.`,
        }),
      })

      const result = await response.json()
      
      if (result.success) {
        setSubmitStatus('success')
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting partnership application:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const valuePillars = [
    {
      icon: PlugIcon,
      title: "Seamless Integration",
      description: "Plug into our technology stack effortlessly with our API-first architecture and comprehensive documentation.",
      color: "from-cyan-400 to-cyan-600"
    },
    {
      icon: GrowthIcon,
      title: "Shared Growth Revenue",
      description: "Earn higher margins with transparent revenue-sharing models designed for mutual success and long-term growth.",
      color: "from-lime-400 to-lime-600"
    },
    {
      icon: SupportIcon,
      title: "Dedicated Partner Success",
      description: "Access 24/7 support, co-marketing opportunities, and dedicated account management for your success.",
      color: "from-blue-400 to-blue-600"
    }
  ]

  const partnerPrograms = [
    {
      title: "Reseller Partner",
      summary: "Sell AdmirerX solutions and grow your revenue with our comprehensive partner program.",
      benefits: [
        "High commission margins up to 30%",
        "Dedicated account manager",
        "Co-branded marketing assets",
        "Sales training and certification",
        "Priority technical support"
      ],
      cta: "Apply as Reseller",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10"
    },
    {
      title: "Technology Alliance",
      summary: "Integrate our technology with your platform and create powerful joint solutions.",
      benefits: [
        "API-first architecture access",
        "Joint product roadmap planning",
        "Shared PR and marketing events",
        "Technical integration support",
        "Co-innovation opportunities"
      ],
      cta: "Join Alliance",
      color: "from-cyan-500 to-teal-500",
      bgColor: "bg-cyan-500/10"
    },
    {
      title: "Strategic Consultant",
      summary: "Advise clients with AdmirerX tools and become a trusted solution provider.",
      benefits: [
        "Exclusive training programs",
        "Early product access",
        "Referral incentives",
        "Consultant certification",
        "Marketing co-op funds"
      ],
      cta: "Become a Consultant",
      color: "from-lime-500 to-green-500",
      bgColor: "bg-lime-500/10"
    }
  ]

  const timelineSteps = [
    {
      step: "01",
      title: "Submit Application",
      description: "Complete our partnership application form with your business details and goals.",
      icon: "📝"
    },
    {
      step: "02", 
      title: "Review & Approval",
      description: "Our team reviews your application and conducts a brief qualification call.",
      icon: "✅"
    },
    {
      step: "03",
      title: "Onboarding & Training",
      description: "Get access to training materials, tools, and your dedicated partner manager.",
      icon: "🎓"
    },
    {
      step: "04",
      title: "Launch & Grow Together",
      description: "Start selling, integrating, or consulting with full support from our team.",
      icon: "🚀"
    }
  ]

  const testimonials = [
    {
      quote: "Partnering with AdmirerX has transformed our business. The integration was seamless and the support is outstanding.",
      author: "Sarah Johnson",
      company: "TechFlow Solutions",
      role: "CEO"
    },
    {
      quote: "The revenue sharing model is transparent and fair. We've seen 40% growth in our BPO services since joining.",
      author: "Michael Chen",
      company: "Global Partners Inc",
      role: "Business Development Director"
    },
    {
      quote: "The training and support we received helped us become experts in AdmirerX solutions quickly.",
      author: "Emily Rodriguez",
      company: "Consulting Partners",
      role: "Senior Consultant"
    }
  ]

  const partnerLogos = [
    "TechFlow Solutions", "Global Partners Inc", "Consulting Partners", 
    "Digital Solutions Co", "Enterprise Partners", "Innovation Labs"
  ]

  return (
    <div className="min-h-screen bg-deep text-white">
      <TopBar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <DataFlowAnimation />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
              <span className="block">Scale Smarter.</span>
              <span className="block">Grow Faster.</span>
              <span className="block gradient-text">Partner with AdmirerX.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Join our ecosystem of innovators and unlock new revenue streams, seamless integrations, and dedicated support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePartnerApplication("General")}
                disabled={isSubmitting}
                className="btn-gradient px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isSubmitting ? "Submitting..." : "Become a Partner"}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline px-8 py-4 text-lg font-semibold rounded-lg border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Learn About Programs
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Partner with <span className="gradient-text">AdmirerX</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide everything you need to succeed in the BPO industry with our comprehensive partner ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valuePillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass p-8 rounded-2xl text-center group hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${pillar.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-gray-300 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Program Tiers */}
      <section id="programs" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your <span className="gradient-text">Partnership Path</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the partnership program that aligns with your business model and growth objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnerPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className={`${program.bgColor} p-8 rounded-2xl border border-white/10 group hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{program.summary}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {program.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-3">
                        <CheckIcon className="w-5 h-5 text-lime-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handlePartnerApplication(program.title)}
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg font-semibold bg-gradient-to-r ${program.color} text-white hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
                  >
                    {isSubmitting ? "Processing..." : program.cta}
                    <ArrowRightIcon className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your <span className="gradient-text">Partnership Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From application to success, we guide you through every step of the partnership process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-cyan-400 to-lime-400 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-deep rounded-full flex items-center justify-center text-sm font-bold text-cyan-400">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials & Social Proof */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by <span className="gradient-text">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our partners say about working with AdmirerX.
            </p>
          </motion.div>

          {/* Testimonials Carousel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass p-8 rounded-2xl hover:shadow-xl transition-all duration-300"
              >
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-cyan-400">{testimonial.role}, {testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Partner Logos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-8">Our Partner Network</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {partnerLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
                  className="text-gray-500 hover:text-white transition-all duration-300 filter grayscale hover:grayscale-0"
                >
                  <div className="h-16 flex items-center justify-center border border-gray-600 rounded-lg hover:border-cyan-400 transition-colors duration-300">
                    <span className="font-semibold text-sm">{logo}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-lime-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something <span className="gradient-text">Big Together</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Partnering with AdmirerX means more than a contract — it's a journey of innovation and mutual growth.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handlePartnerApplication("Strategic")}
              disabled={isSubmitting}
              className="btn-gradient px-12 py-4 text-xl font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isSubmitting ? "Processing..." : "Start Your Partnership Journey"}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
        >
          Partnership application submitted successfully!
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
        >
          Error submitting application. Please try again.
        </motion.div>
      )}

      <Footer />
    </div>
  )
}
