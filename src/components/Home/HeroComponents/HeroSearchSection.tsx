"use client"

import React, { useState } from "react"
import OneWayTripFilter from "./OneWayTripFilter"
import RoundWayTripFilter from "./RoundWayTripFilter"
import AirportTripFilter from "./AirportTripFilter"
import HourlyTripFilter from "./HourlyTripFilter"

const tripTypes = [
    { id: "oneway", label: "Outstation One-Way" },
    { id: "round", label: "Outstation Round-Trip" },
    { id: "airport", label: "Airport Transfers" },
    { id: "hourly", label: "Hourly Rentals", badge: "NEW" },
]


export default function HeroSearchSection({ filter, onChange }: any) {

    const [tripType, setTripType] = useState("oneway")
    const [open, setOpen] = useState(false);


    return (

        <div className="bg-white rounded-3xl shadow-2xl border border-sky-200 px-3 md:px-8 lg:px-8 pt-5 md:pt-20 lg:pt-20 pb-8">


            <div className="mt-6 flex gap-6 text-sm pb-4 md:pb-3 lg:mb-3 no-scrollbar overflow-x-auto shrink-0 whitespace-nowrap">

                {tripTypes.map((type) => (

                    <label className="flex items-center gap-3 cursor-pointer" key={type.id}>
                        <input
                            type="radio"
                            name="tripType"
                            value={type.id}
                            checked={tripType === type.id}
                            onChange={() => {
                                setTripType(type.id)
                                onChange("type", type.id)
                            }
                            }
                            className="hidden"
                        />

                        {/* Custom Radio */}
                        <span className="w-5 h-5 rounded-full border-2 border-sky-500 flex items-center justify-center">

                            {tripType === type.id && (

                                <span className="w-3 h-3 rounded-full bg-sky-600" />

                            )}

                        </span>

                        <span className="text-gray-800">{type.label}</span>

                        {type.badge && (

                            <span className="text-[10px] bg-pink-500 text-white px-3 py-0.5 rounded-full">

                                {type.badge}

                            </span>

                        )}

                    </label>

                ))}

            </div>


            {tripType === "oneway" && <OneWayTripFilter filter={filter} onChange={onChange} />}
            {tripType === "round" && <RoundWayTripFilter filter={filter} onChange={onChange} />}
            {tripType === "airport" && <AirportTripFilter filter={filter} onChange={onChange}/>}
            {tripType === "hourly" && <HourlyTripFilter />}


            <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-gray-600 gap-3">
                <span>
                    Your round trip plan: <strong>1 day</strong> •
                    <strong className="ml-1">
                        Mumbai → Bengaluru → Pune → Bengaluru → Mumbai
                    </strong>
                </span>
                <button className="text-sky-600 font-medium hover:underline">
                    Edit Route
                </button>
            </div>
        </div>
    )
}
