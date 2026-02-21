"use client"

import { supabase } from "@/lib/supabase/SupabaseConfig"
import { CheckCircle, ChevronDown, Clock, MapPin } from "lucide-react"
import { useSearchParams } from "next/navigation"
import React, { useEffect, useState } from "react"

type Car = {
  id: string,
  name: string,
  seat: string,
  baseprice: string,
  cabtype: string,
  fueltype: string,
  inclusion: {
    id: string,
    description: string
  }[],
  exclusion: {
    id: string,
    description: string
  }[],
  image: string
}

const LeftCabReview = () => {
  const searchParams = useSearchParams();
  const [carData, setCarData] = useState<Car | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const itinerary = [
    {
      title: "Pickup & Journey Start",
      points: [
        `Pickup from ${searchParams.get("pickup") || searchParams.get("from")} at your selected time`,
        "Driver will arrive 10 minutes early",
        "Trip details shared with driver in advance",
      ],
    },
    {
      title: "Cab & Comfort Details",
      points: [
        `${searchParams.get("carname") || "Premium"} ${searchParams.get("cabtype") || "Cab"} allocated`,
        `${searchParams.get("seat") || "Comfortable"} seating with ample luggage space`,
        `${searchParams.get("fueltype") || "Efficient"} fuel vehicle with AC`,
      ],
    },
    {
      title: "Route & Travel Plan",
      points: [
        `Travel from ${searchParams.get("from")} to ${searchParams.get("to")} via best available route`,
        "Safe highway driving with experienced driver",
        "Short breaks on request",
      ],
    },
    {
      title: "Inclusions During Trip",
      points: [
        "Fuel charges included",
        "Driver allowance included",
        "Toll, state tax & parking covered",
      ],
    },
    {
      title: "Sightseeing & Stops",
      points: [
        "Sightseeing stops allowed on request",
        "Local guidance by experienced driver",
        "Time managed as per itinerary",
      ],
    },
    {
      title: "Drop & Completion",
      points: [
        `Drop at ${searchParams.get("drop") || searchParams.get("to")}`,
        "Smooth completion of journey",
        "Trip summary shared after drop",
      ],
    },
    {
      title: "Trip Type & Validity",
      points: [
        `This is a ${searchParams.get("type") === "round" ? "Round Trip" : "One Way"} booking`,
        "Route deviation may affect fare",
        "Extra hours/km billed separately",
      ],
    },
    {
      title: "Cancellation & Support",
      points: [
        "Free cancellation up to 1 hour before pickup",
        "24x7 customer support available",
        "Instant assistance in case of delays",
      ],
    },
  ]

  const carId = searchParams.get("carId");
  console.log("THE ID OF THE CAR IS : ");
  console.log(carId);

  const getCarData = async () => {

    const { data, error } = await supabase.from("Cars").select("*").eq("id", carId).single();

    if (error) {
      console.log("THE ISSUE ARISES IN THE CABREVIEW : ");
      console.log(error);
    }

    setCarData(data);

  }

  useEffect(() => {
    getCarData();
  }, [])
  return (
    <div className="lg:col-span-8 space-y-6 animate-fade-in">

      {/* Trip Summary */}
      <section className="review-card">
        <h2 className="text-xl font-semibold text-sky-900 mb-2">
          Review Your Booking
        </h2>

        <div className="flex items-center gap-3 text-sky-700">
          <MapPin size={18} />
          <span>{searchParams.get("from")} → {searchParams.get("to")}</span>
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
            <p className="font-medium">{searchParams.get("carname")} / {searchParams.get("cabtype")}</p>
            <p className="text-sm text-sky-600">
              4 Seats • {searchParams.get("fueltype")} • AC • Spacious
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
          {carData?.inclusion.map((item) => (
            <li
              key={item.id}
              className="
                flex items-center gap-3
                text-sky-700
                transition
                hover:translate-x-1
              "
            >
              <CheckCircle size={18} className="text-sky-500" />
              {item.description}
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

      <div className="space-y-4 cursor-pointer">

        <h3 className="text-lg font-semibold text-sky-900 mb-3">
          Trip Itinerary
        </h3>
        {itinerary.map((item, index) => {
          const open = openIndex === index

          return (
            <div
              key={index}
              className="
                rounded-2xl
                border border-sky-200
                bg-white/80 backdrop-blur
                transition-all duration-300 cursor-pointer
              "
            >
              {/* Header */}
              <button
                onClick={() =>
                  setOpenIndex(open ? null : index)
                }
                className="
                  w-full flex items-center justify-between
                  px-5 py-4
                  text-left
                  hover:bg-sky-50
                  rounded-2xl cursor-pointer
                "
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-sky-100 text-sky-600">
                    <MapPin size={16} />
                  </div>
                  <span className="font-medium text-sky-900">
                    {item.title}
                  </span>
                </div>

                <ChevronDown
                  size={18}
                  className={`text-sky-600 transition-transform ${open ? "rotate-180" : ""
                    }`}
                />
              </button>

              {/* Content */}
              {open && (
                <div className="px-6 pb-5 pt-1 animate-fade-in">
                  <ul className="space-y-2 list-disc pl-5 text-sky-700 text-sm">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )
        })}
      </div>

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
