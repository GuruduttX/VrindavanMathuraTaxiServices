"use client"

import { supabase } from "@/lib/supabase/SupabaseConfig";
import { X, Filter } from "lucide-react"
import { useEffect, useState } from "react";

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

const cabTypes = ["Hatchback", "Sedan", "SUV", "Minibus", "TempoTravellers"]
const fuelTypes = ["Petrol", "Diesel", "CNG"]

export default function FiltersPanel() {

  const [cars, setCars] = useState<Car[]>();

  const getCars = async () => {
    const { data, error } = await supabase.from("Cars").select("*");


    if (error) {
      console.log("The error I have got is : ");
    }

    setCars(data ?? []);

  }

  useEffect(() => {
    getCars()
  }, [])

  
  return (
    <div className="
      w-full max-w-sm
      bg-white/80 backdrop-blur-xl
      border border-sky-200
      rounded-2xl
      shadow-[0_10px_30px_rgba(3,164,251,0.15)]
      p-5
    ">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-sky-100 text-sky-600">
            <Filter size={18} />
          </div>
          <h3 className="text-lg font-semibold text-sky-900">
            Filters
          </h3>
        </div>

        <button className="
          text-sm font-medium
          text-sky-500
          hover:text-sky-700
          transition
        ">
          Clear All
        </button>
      </div>

      {/* Filter Sections */}
      <div className="space-y-6">

        {/* Cab Type */}
        <FilterSection title="Cab Type">
          {cabTypes.map(type => (
            <FilterCheckbox key={type} label={type} />
          ))}
        </FilterSection>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />

        {/* Fuel Type */}
        <FilterSection title="Fuel Type">
          {fuelTypes.map(fuel => (
            <FilterCheckbox key={fuel} label={fuel} />
          ))}
        </FilterSection>

      </div>
    </div>
  )
}

/* ---------------------------------- */
/* Reusable Components */
/* ---------------------------------- */

function FilterSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-semibold text-sky-800 tracking-wide">
        {title}
      </h4>
      <div className="space-y-2">
        {children}
      </div>
    </div>
  )
}

function FilterCheckbox({ label }: { label: string }) {
  return (
    <label className="
      group flex items-center justify-between
      p-3 rounded-xl
      bg-sky-50/70
      border border-sky-100
      cursor-pointer
      hover:bg-sky-100
      hover:border-sky-300
      transition-all duration-200
    ">
      <span className="text-sm font-medium text-sky-800">
        {label}
      </span>

      <div className="relative">
        <input
          type="checkbox"
          className="peer sr-only"
        />

        {/* Custom Checkbox */}
        <div className="
          h-5 w-5
          rounded-md
          border-2 border-sky-300
          flex items-center justify-center
          peer-checked:bg-sky-500
          peer-checked:border-sky-500
          transition
        ">
          <svg
            className="h-3 w-3 text-white scale-0 peer-checked:scale-100 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
    </label>
  )
}
