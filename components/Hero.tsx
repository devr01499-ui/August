'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-deep">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Transform Your Business with{' '}
                <span className="text-gradient">Premium BPO Solutions</span>
              </h1>
              <p className="mt-6 text-xl text-gray-400 leading-relaxed">
                Streamline operations, enhance customer experience, and drive growth with our comprehensive BPO services. From customer support to data processing, we deliver excellence in every interaction.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-primary text-white py-3 px-8 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105"
              >
                Explore Services
              </button>
              <button
                onClick={() => {
                  document.getElementById('partner')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-outline text-white py-3 px-8 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105"
              >
                Partner With Us
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="bg-secondary rounded-2xl p-2 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Diverse business professionals working together"
                width={600}
                height={400}
                className="rounded-2xl object-cover w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


