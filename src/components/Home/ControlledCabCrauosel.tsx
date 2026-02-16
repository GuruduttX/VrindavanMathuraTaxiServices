"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, MapPin, Car, ShieldCheck } from "lucide-react"

export default function ControlledCabCarousel() {
  const slides = [
    {
      icon: <MapPin />,
      title: "Local City Travel",
      desc: "Comfortable and reliable cabs for Mathura & Vrindavan city rides.",
    },
    {
      icon: <Car />,
      title: "Outstation Journeys",
      desc: "Fixed-price cab services for Delhi, Agra, Jaipur & nearby cities.",
    },
    {
      icon: <ShieldCheck />,
      title: "Safe & Verified Drivers",
      desc: "Background-verified drivers ensuring a peaceful journey.",
    },
    {
      icon: <Car />,
      title: "Airport Transfers",
      desc: "On-time airport pickup & drop with spacious sedans and SUVs.",
    },
  ]

  const [index, setIndex] = useState(0)

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="bg-[#F6FAFF] py-14">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Cab Services Designed for Every Journey
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Simple • Reliable • Transparent
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative overflow-hidden">

          {/* Slides */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="min-w-full px-4"
              >
                <div className="relative bg-white rounded-3xl 
                  shadow-lg border border-sky-100 p-10 text-center">

                  {/* Icon Bubble */}
                  <div className="mx-auto mb-6 h-16 w-16 rounded-full 
                    bg-sky-100 flex items-center justify-center text-sky-600">
                    {slide.icon}
                  </div>

                  <h3 className="text-2xl font-semibold text-slate-900">
                    {slide.title}
                  </h3>

                  <p className="mt-4 text-slate-600 text-lg max-w-xl mx-auto">
                    {slide.desc}
                  </p>

                  {/* Decorative Line */}
                  <div className="mt-8 h-1 w-20 bg-sky-400 rounded-full mx-auto" />
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="mt-10 flex justify-center gap-4">
            <button
              onClick={prevSlide}
              className="h-12 w-12 rounded-full bg-white 
              border border-sky-200 shadow 
              flex items-center justify-center text-sky-600
              hover:bg-sky-50 transition"
            >
              <ArrowLeft />
            </button>

            <button
              onClick={nextSlide}
              className="h-12 w-12 rounded-full bg-sky-600 
              text-white shadow 
              flex items-center justify-center
              hover:bg-sky-700 transition"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
