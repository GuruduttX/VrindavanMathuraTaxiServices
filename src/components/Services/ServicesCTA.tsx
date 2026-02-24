"use client"

import EnquiryPopup from "@/utils/EnquiryPopUp";
import { useState } from "react"

export default function ServicesCTA() {
  const [isFromOpen, setIsFromOpen] = useState(false);

  return (
    <>
    <EnquiryPopup open={isFromOpen} onClose={()=>setIsFromOpen(false)}/>
    <section className="px-6 py-16 lg:py-24">
      <div className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl">

        <div className="flex flex-col lg:flex-row  bg-gradient-to-br 
            from-sky-600 
            via-blue-600 
            to-sky-500 ">

          {/* LEFT SIDE */}
          <div className="
            relative 
            w-full 
            lg:w-1/2 
           
            text-white
            p-8 sm:p-12 lg:p-16
            z-10
          ">
            <span className="inline-block mb-6 px-4 py-2 text-sm font-medium bg-white/20 backdrop-blur-md rounded-full">
              ✨ Limited Time Offer
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Ready to Book Your Ride?
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-sky-100 mb-8 max-w-xl">
              Experience premium comfort and reliable service today.
            </p>

            <button
              onClick={() => setIsFromOpen(true)}
              className="bg-white text-sky-700 font-semibold px-6 py-3 rounded-xl hover:bg-sky-100 transition-all duration-300 hover:scale-105"
            >
              Book Now
            </button>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="hidden lg:block relative w-full lg:w-1/2 h-[260px] sm:h-[320px] md:h-[400px] lg:h-auto">

            {/* Mobile → normal image */}
            

            {/* Desktop → polygon cut */}
            <div
              className="hidden lg:block absolute inset-0 "
              style={{
                clipPath: "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            >
              <img
                src="/images/About/About-Hero.webp"
                alt="CTA"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-black/10 to-transparent" />
            </div>

          </div>

        </div>
      </div>
    </section>
    </>
   
  )
}
