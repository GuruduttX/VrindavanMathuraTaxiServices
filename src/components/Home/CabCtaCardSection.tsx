"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function CabCtaCardSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Cab Services Tailored for Every Journey
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Choose from our range of reliable cab services designed for
            comfort, safety and transparent pricing — perfect for local,
            outstation and family travel.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <CabCard
            title="Local City Rides"
            desc="Quick and comfortable cabs for Mathura & Vrindavan city travel."
            image="https://images.unsplash.com/photo-1542362567-b07e54358753"
          />

          <CabCard
            title="Outstation Cabs"
            desc="Fixed-price outstation trips to Delhi, Agra, Jaipur & more."
            image="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2"
          />

          <CabCard
            title="Airport Transfers"
            desc="On-time airport pickup & drop with spacious sedans and SUVs."
            image="https://images.unsplash.com/photo-1603274737274-95a9fba4f5f5"
          />

          <CabCard
            title="Family & Tour Cabs"
            desc="Safe, clean and reliable cabs for family trips and sightseeing."
            image="https://images.unsplash.com/photo-1616788494707-ec28f08fd05c"
          />
        </div>
      </div>
    </section>
  )
}

/* ---------------- Card Component ---------------- */

function CabCard({
  title,
  desc,
  image,
}: {
  title: string
  desc: string
  image: string
}) {
  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden 
      border border-sky-100 shadow-md hover:shadow-xl transition">

      {/* Image */}
      <div className="relative h-44">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t 
          from-sky-900/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-slate-900">
          {title}
        </h3>

        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          {desc}
        </p>

        {/* CTA */}
        <button
          onClick={() => alert("Open Booking Popup")}
          className="mt-6 inline-flex items-center gap-2 
          text-sky-600 font-semibold hover:text-sky-700 transition"
        >
          Book Now
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Decorative Accent */}
      <div className="absolute top-4 right-4 h-8 w-8 rounded-full 
        bg-sky-100 blur-lg" />
    </div>
  )
}
