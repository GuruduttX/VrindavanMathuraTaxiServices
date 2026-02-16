"use client"

import ProductCard from "./ProductCard"
import { ShieldCheck, Sparkles, Clock } from "lucide-react"

export default function ProductsList() {
  return (
    <div
      className="
        relative
        h-[calc(100vh-6rem)]
        overflow-y-auto
        pr-3
        space-y-6
        custom-scrollbar
      "
    >
    
      {/* Info Strip */}
      <div className="
        sticky top-0 z-10
        bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500
        text-white
        rounded-2xl
        px-6 py-4
        shadow-[0_12px_30px_rgba(0,0,0,0.15)]
        backdrop-blur-xl
      ">
        <div className="flex items-center justify-between text-sm font-medium">
          <InfoItem icon={<ShieldCheck size={18} />} label="Trusted Drivers" />
          <InfoItem icon={<Sparkles size={18} />} label="Clean Cabs" />
          <InfoItem icon={<Clock size={18} />} label="On-Time Pickup" />
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-5">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCard key={i} />
        ))}
      </div>
    </div>
  )
}

/* ----------------------------- */
/* Small Reusable UI */
/* ----------------------------- */

function InfoItem({
  icon,
  label,
}: {
  icon: React.ReactNode
  label: string
}) {
  return (
    <div className="flex items-center gap-2 opacity-95 hover:opacity-100 transition">
      <span className="text-white/90">{icon}</span>
      <span>{label}</span>
    </div>
  )
}
