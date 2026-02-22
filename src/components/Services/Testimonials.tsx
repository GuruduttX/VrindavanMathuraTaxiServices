"use client"

import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ramesh Sharma",
      location: "Delhi",
      text: "Our Mathura & Vrindavan trip was perfectly managed. The cab was clean, driver was punctual and very polite. Highly recommend for family travel.",
    },
    {
      name: "Anjali Verma",
      location: "Noida",
      text: "Very smooth experience from pickup to drop. The team handled darshan timing well and suggested great local spots. Professional service!",
    },
    {
      name: "Vikram Singh",
      location: "Uttarakhand",
      text: "Booked for a senior citizens group. Extremely comfortable ride and flexible itinerary. Felt safe and well taken care of throughout.",
    },
  ]

  return (
    <section className="px-6 py-16 lg:py-24 bg-sky-50">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          What Our Travelers Say
        </h2>

        <p className="text-sky-700 max-w-2xl mx-auto mb-12 text-sm sm:text-base">
          Real experiences from families and groups who trusted our taxi services for their Mathura & Vrindavan Yatra.
        </p>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                group 
                bg-white 
                rounded-2xl 
                p-8 
                shadow-md 
                hover:shadow-xl 
                transition-all 
                duration-500 
                hover:-translate-y-2 
                cursor-pointer
                border border-sky-100
              "
            >
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                “{item.text}”
              </p>

              {/* User Info */}
              <div className="mt-auto">
                <h4 className="font-semibold text-blue-900">
                  {item.name}
                </h4>
                <span className="text-sm text-sky-600">
                  {item.location}
                </span>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-sky-100/40 to-transparent pointer-events-none"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
