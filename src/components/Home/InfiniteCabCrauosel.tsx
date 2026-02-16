"use client"

export default function InfiniteCabCarousel() {
  const carouselData = [
    {
      tag: "Local Travel",
      title: "Mathura & Vrindavan City Rides",
      description:
        "Comfortable local cab services for temples, markets and daily travel.",
    },
    {
      tag: "Outstation",
      title: "Delhi • Agra • Jaipur Trips",
      description:
        "Fixed-price outstation cabs with professional drivers and clean vehicles.",
    },
    {
      tag: "Airport",
      title: "Airport Transfers",
      description:
        "On-time pickups and drops with luggage-friendly sedans & SUVs.",
    },
    {
      tag: "Tourism",
      title: "Govardhan & Braj Darshan",
      description:
        "Specially designed sightseeing cab packages for families & groups.",
    },
    {
      tag: "Safety",
      title: "Verified Drivers",
      description:
        "Background-checked drivers for a safe and peaceful journey.",
    },
  ]

  return (
    <section className="relative bg-[#F6FAFF] py-20 overflow-hidden">
      

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Trusted Cab Services for Every Journey
        </h2>
        <p className="mt-3 text-lg text-slate-600">
          Local • Outstation • Airport • Tourism
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full">
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {[...carouselData, ...carouselData].map((item, index) => (
            <div
              key={index}
              className="min-w-[280px] md:min-w-[320px] 
              rounded-2xl bg-white/70 backdrop-blur-lg 
              border border-sky-100 shadow-md px-6 py-6"
            >
              <span
                className="inline-block mb-3 rounded-full bg-sky-100 
                text-sky-700 text-xs font-semibold px-3 py-1"
              >
                {item.tag}
              </span>

              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-slate-600 leading-relaxed text-wrap">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
