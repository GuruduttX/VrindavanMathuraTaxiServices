"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import EnquiryPopup from "@/utils/EnquiryPopUp"
import { useState } from "react"

export default function CabBookingSection() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <EnquiryPopup open={isOpen} onClose={() => setIsOpen(false)} />

      <section className="bg-[#e9f9ff] py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Get Reliable Cabs,
              <br />
              <span className="text-sky-600">At Best Prices</span>
            </h2>

            <div className="h-1 w-14 bg-sky-400 rounded-full mt-4 mb-6" />

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              We provide safe, comfortable and affordable cab services for
              local sightseeing, airport transfers and outstation journeys.
              Fixed pricing, verified drivers and well-maintained vehicles —
              perfect for families and tourists.
            </p>

            <button
              onClick={() => {
                setIsOpen(true)
              }}
              className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 
            rounded-full bg-slate-900 text-white font-semibold 
            hover:bg-sky-600 transition cursor-pointer"
            >
              Book a Cab
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Image Grid */}
          <div className="grid grid-cols-2 gap-6">
            <ImageCard src="/images/Home/Cab-first.jpg" />
            <ImageCard src="/images/Home/Cab-second.webp" />
            <ImageCard src="/images/Home/Cab-third.jpg" />
            <ImageCard src="/images/Home/Cab-fourth.jpg" />
          </div>
        </div>
      </section>

    </>
  )
}

/* ---------------- Image Card ---------------- */

function ImageCard({ src }: { src: string }) {
  return (
    <div className="rounded-3xl overflow-hidden bg-white shadow-md">
      <Image
        src={src}
        alt="Cab Booking Service"
        width={500}
        height={500}
        className="w-full h-full object-cover hover:scale-105 transition duration-500"
      />
    </div>
  )
}
