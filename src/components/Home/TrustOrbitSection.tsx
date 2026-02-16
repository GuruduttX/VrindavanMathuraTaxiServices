"use client"

import {
  ShieldCheck,
  Clock,
  MapPin,
  Users,
  Headphones
} from "lucide-react"

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Verified Drivers",
    desc: "Background-checked and professionally trained"
  },
  {
    icon: Clock,
    title: "On-Time Guarantee",
    desc: "Always punctual for temples & stations"
  },
  {
    icon: MapPin,
    title: "Local Route Experts",
    desc: "Deep knowledge of Vrindavan & Mathura"
  },
  {
    icon: Users,
    title: "10,000+ Happy Customers",
    desc: "Families, tourists & pilgrims trust us"
  },
  {
    icon: Headphones,
    title: "24×7 Support",
    desc: "Human help whenever you need it"
  }
]

export default function TrustGlowRailSection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-sky-50 to-white overflow-hidden">

      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-sky-800">
          Trust That Shines Through Every Journey
        </h2>
        <p className="text-sky-600 mt-4 max-w-xl mx-auto">
          Premium service built on safety, reliability, and care
        </p>
      </div>

      {/* Rail Container */}
      <div className="relative max-w-7xl mx-auto px-6">

        {/* Glowing Rail */}
        <div className="
          relative glow-rail
          rounded-3xl
          border border-sky-200
          bg-white/70 backdrop-blur-xl
          px-10 py-12
        ">

          {/* Trust Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">

            {trustItems.map((item, index) => (
              <div
                key={index}
                className="
      rounded-2xl bg-white
      px-6 py-7 text-center
      trust-glow
      trust-move
      trust-active-glow
    "
                style={{
                  animationDelay: `${index * 0.6}s`
                }}
              >
                <item.icon className="w-9 h-9 text-sky-600 mx-auto mb-4" />
                <h3 className="font-semibold text-sky-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-sky-600">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}
