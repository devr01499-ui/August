'use client'

export default function StatsRow() {
  const stats = [
    { value: '500+', label: 'Happy Clients' },
    { value: '24/7', label: 'Support Available' },
    { value: '99.9%', label: 'Uptime Guarantee' },
    { value: '15+', label: 'Years Experience' },
  ]

  return (
    <section className="bg-deep py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item) => (
            <div
              key={item.label}
              className="glass inner-glow rounded-2xl p-4 sm:p-6 text-center"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-white">{item.value}</div>
              <div className="mt-1 text-sm sm:text-base text-[#c8d2e6]">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


