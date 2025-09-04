'use client'

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
              <a aria-label="LinkedIn" href="https://www.linkedin.com/in/admirerx-private-limited-2b9491382?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/15">in</a>
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
              aria-label="LinkedIn" 
              href="https://www.linkedin.com/in/admirerx-private-limited-2b9491382?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/15 transition-colors duration-200"
            >
              in
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
