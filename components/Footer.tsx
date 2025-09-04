'use client'

// LinkedIn Icon Component
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

export default function Footer() {
  return (
    <footer id="contact" className="bg-deep text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="text-2xl font-extrabold">
              <span className="gradient-text">ADMIRERX</span>
            </div>
            <p className="mt-3 text-[#c8d2e6]">
              Your trusted partner for premium BPO services, delivering efficiency and excellence across industries.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-3 space-y-2 text-[#c8d2e6]">
              <li><a href="#customer-support" className="hover:text-white">Customer Support</a></li>
              <li><a href="#data-processing" className="hover:text-white">Data Processing</a></li>
              <li><a href="#lead-generation" className="hover:text-white">Lead Generation</a></li>
              <li><a href="#tech-support" className="hover:text-white">Tech Support</a></li>
              <li><a href="#hr-consultancy" className="hover:text-white">HR Consultancy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="mt-3 flex items-center gap-3">
              <a href="https://www.linkedin.com/in/admirerx-private-limited-2b9491382?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/15 transition-colors duration-200">
                <LinkedInIcon className="h-6 w-6 hover:opacity-80" />
              </a>
              <button aria-label="Facebook" disabled className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-white/40 flex items-center justify-center cursor-not-allowed">f</button>
              <button aria-label="Instagram" disabled className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-white/40 flex items-center justify-center cursor-not-allowed">ig</button>
              <button aria-label="Twitter" disabled className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-white/40 flex items-center justify-center cursor-not-allowed">X</button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-4 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0 sm:justify-between">
          <p className="text-[#c8d2e6] text-sm">© 2025 ADMIRERX. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <button aria-label="Facebook" disabled className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-white/40 flex items-center justify-center cursor-not-allowed">f</button>
            <button aria-label="Instagram" disabled className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-white/40 flex items-center justify-center cursor-not-allowed">ig</button>
            <button aria-label="Twitter" disabled className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-white/40 flex items-center justify-center cursor-not-allowed">X</button>
            <a 
              href="https://www.linkedin.com/in/admirerx-private-limited-2b9491382?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/15 transition-colors duration-200"
            >
              <LinkedInIcon className="h-6 w-6 hover:opacity-80" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
