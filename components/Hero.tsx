'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Transform Your Business with{' '}
                <span className="text-gradient">Premium BPO Solutions</span>
              </h1>
              <p className="mt-6 text-xl text-[#c8d2e6] leading-relaxed">
                Streamline operations, enhance customer experience, and drive growth with our comprehensive BPO services. 
                From customer support to data processing, we deliver excellence in every interaction.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-white font-medium">24/7 Professional Support</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-white font-medium">99.9% Uptime Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="glass rounded-3xl p-2 sm:p-3 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
              <Image
                src="/images/hero.jpg"
                alt="ADMIRERX Team"
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


