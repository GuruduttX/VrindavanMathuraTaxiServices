"use client"

import EnquiryPopup from "@/utils/EnquiryPopUp";
import { ShieldCheck, Clock, Car, Users } from "lucide-react"
import { useState } from "react";

export default function TrustBuildCTASection() {
  const [isOpen, setIsOpen] = useState(false);

  const cards = [
    {
      icon: <ShieldCheck />,
      title: "Verified Professional Drivers",
      desc: "Every driver is background-checked, trained and experienced for long-distance and family travel.",
    },
    {
      icon: <Car />,
      title: "Premium & Clean Vehicles",
      desc: "Sedans, SUVs and tempo travellers maintained for comfort, cleanliness and safety.",
    },
    {
      icon: <Clock />,
      title: "Punctual Pickups",
      desc: "Timely pickups for airport, outstation and local rides with smooth coordination.",
    },
    {
      icon: <Users />,
      title: "Family & Tourist Friendly",
      desc: "Transparent pricing, no surge charges and complete peace of mind.",
    },
  ]

  return (
    <>
      <EnquiryPopup open={isOpen} onClose={() => setIsOpen(false)} />

      <section className="relative bg-[#F6FAFF] py-32 overflow-hidden">
        {/* Ambient background light */}
        <div className="absolute -top-48 -left-48 h-[500px] w-[500px] bg-sky-300/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-48 -right-48 h-[500px] w-[500px] bg-cyan-300/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Built on Trust. Designed for Comfort.
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Every journey is backed by safety, transparency and comfort —
              so you can travel confidently with us.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
            {cards.map((card, i) => (
              <ArchitectCard key={i} {...card} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-24 text-center">
            <button
              onClick={() => { setIsOpen(true) }}

              className="relative inline-flex items-center justify-center
            px-12 py-5 rounded-full font-semibold text-white
            bg-gradient-to-r from-sky-600 to-cyan-500
            shadow-[0_20px_60px_-15px_rgba(14,165,233,0.6)]
            hover:scale-[1.03] transition cursor-pointer"
            >
              Book Your Cab with Confidence
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

/* ---------------- Ultra Innovative Card ---------------- */

function ArchitectCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <div className="relative group">
      {/* Animated Conic Border */}
      <div className="absolute -inset-[1.5px] rounded-[30px]
        bg-[conic-gradient(from_0deg,theme(colors.sky.400),theme(colors.cyan.400),theme(colors.sky.600),theme(colors.sky.400))]
        animate-spin-slow opacity-80" />

      {/* Cut-Corner Mask */}
      <div className="relative rounded-[30px] bg-white/80 backdrop-blur-xl 
        border border-sky-200 p-7 shadow-xl
        clip-path-card">

        {/* Floating Nodes */}
        <div className="absolute -top-2 -left-2 h-3 w-3 rounded-full bg-sky-400" />
        <div className="absolute -bottom-2 -right-2 h-3 w-3 rounded-full bg-cyan-400" />

        {/* Inner Engraved Frame */}
        <div className="absolute inset-3 rounded-[20px] border border-sky-100 pointer-events-none" />

        {/* Content */}
        <div className="relative">
          <div className="mb-5 flex h-12 w-12 items-center justify-center 
            rounded-full bg-sky-100 text-sky-600">
            {icon}
          </div>

          <h3 className="text-lg font-semibold text-slate-900">
            {title}
          </h3>

          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            {desc}
          </p>

          <div className="mt-6 h-px w-20 
            bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full" />
        </div>
      </div>

      {/* Glow */}
      <div className="absolute inset-0 rounded-[30px] bg-sky-400/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />

      {/* Styles */}
      <style>{`
        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        .clip-path-card {
          clip-path: polygon(
            0% 10%,
            10% 0%,
            90% 0%,
            100% 10%,
            100% 90%,
            90% 100%,
            10% 100%,
            0% 90%
          );
        }
      `}</style>
    </div>
  )
}
