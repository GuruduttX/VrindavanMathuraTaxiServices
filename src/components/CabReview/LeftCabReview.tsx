import { CheckCircle, Clock, MapPin } from "lucide-react"
import React from "react"

const LeftCabReview = () => {
  return (
    <div className="lg:col-span-8 space-y-6 animate-fade-in">

      {/* Trip Summary */}
      <section className="review-card">
        <h2 className="text-xl font-semibold text-sky-900 mb-2">
          Review Your Booking
        </h2>

        <div className="flex items-center gap-3 text-sky-700">
          <MapPin size={18} />
          <span>Vrindavan → Mathura</span>
          <span className="text-sm text-sky-500">
            • 14 Feb, 10:00 AM
          </span>
        </div>
      </section>

      {/* Cab Details */}
      <section className="review-card">
        <h3 className="font-semibold text-sky-900 mb-4">
          Selected Cab
        </h3>

        <div className="flex justify-between items-center gap-4">
          <div>
            <p className="font-medium">Sedan / Ertiga</p>
            <p className="text-sm text-sky-600">
              4 Seats • AC • Spacious
            </p>
          </div>

          <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-sm font-medium">
            Best Seller
          </span>
        </div>
      </section>

      {/* Inclusions */}
      <section className="review-card">
        <h3 className="font-semibold text-sky-900 mb-4">
          Inclusions
        </h3>

        <ul className="space-y-3">
          {[
            "Fuel & Driver Charges Included",
            "No Toll / Parking Surprise",
            "Free Waiting up to 45 Minutes",
            "Transparent Pricing",
          ].map((item, i) => (
            <li
              key={i}
              className="
                flex items-center gap-3
                text-sky-700
                transition
                hover:translate-x-1
              "
            >
              <CheckCircle size={18} className="text-sky-500" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Cancellation Policy */}
      <section className="
        bg-sky-50
        rounded-3xl
        border border-sky-200
        p-6
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_0_35px_rgba(56,189,248,0.35)]
      ">
        <div className="flex items-center gap-3 text-sky-800">
          <Clock size={18} />
          <p>
            <span className="font-medium">Free Cancellation</span> up to
            <span className="font-semibold"> 1 hour before pickup</span>
          </p>
        </div>
      </section>

      {/* Traveller Details */}
      <section className="review-card">
        <h3 className="font-semibold text-sky-900 mb-4">
          Traveller Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input placeholder="Full Name" className="input-sky" />
          <input placeholder="Mobile Number" className="input-sky" />
          <input
            placeholder="Email Address"
            className="input-sky md:col-span-2"
          />
        </div>
      </section>

    </div>
  )
}

export default LeftCabReview
