'use client'

import Image from 'next/image'

export default function WhyChoose() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div>
            <div className="glass rounded-3xl p-2 sm:p-3">
              <Image
                src="/images/why.jpg"
                alt="ADMIRERX team collaborating"
                width={600}
                height={400}
                className="rounded-2xl object-cover w-full h-auto"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Why Choose <span className="text-gradient">ADMIRERX</span>?
              </h2>
              <p className="text-lg text-[#c8d2e6] leading-relaxed">
                We combine innovative technology with highly skilled professionals to deliver exceptional BPO services that drive tangible business results and operational excellence.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#2d6cf6] flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Dedicated Account Management</h3>
                  <p className="text-[#c8d2e6] mt-1">Personalized service with dedicated account managers for seamless communication and project oversight.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#2d6cf6] flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Enterprise Security Standards</h3>
                  <p className="text-[#c8d2e6] mt-1">Bank-level security protocols and compliance with international data protection standards.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#2d6cf6] flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Customizable Service Packages</h3>
                  <p className="text-[#c8d2e6] mt-1">Tailored solutions that adapt to your specific business needs and growth objectives.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


