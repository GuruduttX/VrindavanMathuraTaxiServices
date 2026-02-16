import Link from "next/link"
import { CarTaxiFront, MapPin, ShieldCheck } from "lucide-react"

export default function CabCTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-sky-300 via-sky-500 to-cyan-500 py-14">

      {/* Soft Decorative Glow */}
      <div className="absolute -top-32 -left-32 h-96 w-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 bg-white/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Ready to Book Your Cab?
        </h2>

        <p className="mt-4 text-lg md:text-xl text-sky-100 max-w-3xl mx-auto leading-relaxed">
          Safe, comfortable and affordable cab services for local travel,
          outstation journeys and airport transfers.
          <span className="font-semibold"> No surge pricing. No confusion.</span>
        </p>

        {/* Trust Points */}
        <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm md:text-base">

          <TrustItem
            icon={<ShieldCheck className="h-5 w-5" />}
            text="Verified Drivers"
          />

          <TrustItem
            icon={<CarTaxiFront className="h-5 w-5" />}
            text="Clean & Comfortable Cabs"
          />

          <TrustItem
            icon={<MapPin className="h-5 w-5" />}
            text="Local & Outstation Trips"
          />
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">

          <Link
            href="/book"
            className="inline-flex items-center justify-center gap-2 
            rounded-full bg-white px-8 py-4 text-slate-900 
            font-semibold hover:bg-sky-100 transition shadow-lg"
          >
            Book a Cab Now
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 
            rounded-full border border-white/70 px-8 py-4 
            font-semibold text-white hover:bg-white/10 transition"
          >
            Get Fare Details
          </Link>
        </div>
      </div>
    </section>
  )
}

/* -------- Trust Item -------- */

function TrustItem({
  icon,
  text,
}: {
  icon: React.ReactNode
  text: string
}) {
  return (
    <div className="flex items-center gap-2 text-sky-50">
      <div className="text-white">{icon}</div>
      <span>{text}</span>
    </div>
  )
}
