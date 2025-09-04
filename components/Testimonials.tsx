'use client'

type Testimonial = {
  name: string
  role: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: 'John Smith',
    role: 'CEO, TechCorp',
    quote:
      'AdmirerX transformed our customer service operations. Their team is professional and the results speak for themselves.',
  },
  {
    name: 'Sarah Davis',
    role: 'Marketing Director',
    quote:
      'The lead generation services from AdmirerX have been game-changing for our sales team. Highly recommended!',
  },
  {
    name: 'Michael Johnson',
    role: 'Operations Manager',
    quote:
      'Outstanding data processing services with incredible accuracy. They’ve become an invaluable partner for our business.',
  },
]

function AvatarInitials({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
  return (
    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center">
      {initials}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-deep py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <div className="section-underline mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What Our Clients Say</h2>
          <p className="mt-3 text-[#c8d2e6]">Trusted by businesses worldwide for exceptional BPO services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass rounded-2xl p-6 border-l-4 border-blue-400">
              <div className="flex items-center gap-3">
                <AvatarInitials name={t.name} />
                <div>
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-sm text-[#c8d2e6]">{t.role}</div>
                </div>
              </div>
              <p className="mt-4 text-[#c8d2e6]">“{t.quote}”</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button className="btn-outline-light px-6 py-3 rounded-lg font-semibold">Next Testimonial</button>
        </div>
      </div>
    </section>
  )
}


