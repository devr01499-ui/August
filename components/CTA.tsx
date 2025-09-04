'use client'

export default function CTA() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-10 sm:p-14 bg-gradient-to-r from-[#0c1424] via-[#162750] to-[#2d6cf6] border border-white/10">
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-white">Ready to Transform Your Business?</h2>
          <p className="mt-4 text-center text-[#c8d2e6] max-w-2xl mx-auto">
            Accelerate growth with premium outsourcing solutions tailored to your needs. From customer support to data processing, we’ve got you covered.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="#contact" className="btn-primary px-6 py-3 rounded-lg font-semibold">Get Started Today</a>
            <a href="#services" className="btn-outline-light px-6 py-3 rounded-lg font-semibold">Schedule Demo</a>
          </div>
        </div>
      </div>
    </section>
  )
}


