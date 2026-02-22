import { ArrowRight, PhoneCall } from "lucide-react"

export default function TaxiCTASection() {
  return (
    <section className="relative overflow-hidden py-5 px-6">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600" />

      {/* Floating Glow Effects */}
      <div className="absolute -top-24 -left-24 h-96 w-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 bg-white/10 rounded-full blur-3xl animate-pulse" />

      {/* CTA Card */}
      <div className="
        relative
        max-w-7xl mx-auto
        rounded-3xl
        bg-white/10
        backdrop-blur-xl
        border border-white/20
        p-5 md:p-8
        shadow-[0_20px_60px_rgba(0,0,0,0.25)]
        transition-all duration-300
        hover:shadow-[0_0_80px_rgba(255,255,255,0.35)]
      ">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

          {/* Left Content */}
          <div className="max-w-2xl">
            <h2 className="text-xl md:text-4xl font-bold text-white leading-tight">
              Book Trusted Taxi Services in
              <span className="block text-sky-100">
                Mathura & Vrindavan
              </span>
            </h2>

            <p className="mt-4 text-sky-100 text-md md:text-lg lg:text-lg">
              Professional drivers, clean AC cabs, transparent pricing and
              24×7 availability for local & outstation journeys.
            </p>

            {/* Trust Points */}
            <div className="mt-6 flex flex-wrap gap-4 text-xs md:text-sm text-sky-100">
              <span className="px-3 py-1 rounded-full bg-white/10">
                ✔ Local Braj Drivers
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10">
                ✔ On-Time Pickup
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10">
                ✔ No Hidden Charges
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            
            {/* Primary CTA */}
            <button
              className="
                group
                inline-flex items-center justify-center gap-2
                px-4 py-2 md:px-8 lg:px-8 md:py-4 lg:py-4
                rounded-xl
                bg-white text-sky-700
                font-light md:font-semibold lg:font-semibold
                cursor-pointer
                shadow-lg
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_0_40px_rgba(255,255,255,0.6)]
              "
            >
              Book a Taxi
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </button>

            {/* Secondary CTA */}
            <button
              className="
                inline-flex items-center justify-center gap-2
                px-4 py-2 md:px-8 lg:px-8 md:py-4 lg:py-4
                rounded-xl
                border border-white/40
                text-white
                font-medium
                cursor-pointer
                transition-all duration-300
                hover:bg-white/10
                hover:-translate-y-1
              "
            >
              <PhoneCall size={18} />
              Call Now
            </button>

          </div>
        </div>
      </div>
    </section>
  )
}
