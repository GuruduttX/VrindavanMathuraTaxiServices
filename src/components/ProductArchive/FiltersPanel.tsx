"use client"

import { Filter, ChevronDown } from "lucide-react"
import { useState } from "react"

const cabTypes = ["Hatchback", "Sedan", "SUV", "Minibus", "Tempo"]
const fuelTypes = ["Petrol", "Diesel", "CNG"]

type Props = {
  selectedCabTypes: string[]
  selectedFuelTypes: string[]
  onCabToggle: (label: string) => void
  onFuelToggle: (label: string) => void
  onClear: () => void
}

export default function FiltersPanel({
  selectedCabTypes,
  selectedFuelTypes,
  onCabToggle,
  onFuelToggle,
  onClear,
}: Props) {

  const [open, setOpen] = useState(false)

  return (
    <div className="w-full md:max-w-sm">

      {/* 📱 Mobile Toggle Button */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setOpen(!open)}
          className="
            w-full flex items-center justify-between
            px-5 py-3 rounded-2xl
            bg-sky-600 text-white font-semibold
            shadow-lg
          "
        >
          <span className="flex items-center gap-2">
            <Filter size={18} />
            Filters
          </span>

          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* 🔥 Filter Container */}
      <div
        className={`
          rounded-3xl
          border border-sky-200/70
          bg-white/80 backdrop-blur-xl
          shadow-[0_20px_45px_rgba(14,165,233,0.25)]
          p-6 relative overflow-hidden
          transition-all duration-300
          ${open ? "block" : "hidden"}
          md:block
        `}
      >
        {/* Glow */}
        <div className="absolute -top-20 -right-20 h-40 w-40 bg-sky-300/30 blur-3xl rounded-full pointer-events-none"/>

        {/* Header */}
        <div className="relative flex items-center justify-between mb-7">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-sky-100 text-sky-600">
              <Filter size={18} />
            </div>
            <h3 className="text-lg font-bold text-sky-900 tracking-wide">
              Filters
            </h3>
          </div>

          <button
            onClick={onClear}
            className="
              text-xs font-semibold
              px-3 py-1.5 rounded-full
              bg-sky-50 text-sky-600
              hover:bg-sky-100 hover:text-sky-800
              transition-all duration-200
            "
          >
            Clear All
          </button>
        </div>

        {/* Cab Type */}
        <FilterSection title="Cab Type">
          {cabTypes.map((type) => (
            <Checkbox
              key={type}
              label={type}
              checked={selectedCabTypes.includes(type)}
              onChange={() => onCabToggle(type)}
            />
          ))}
        </FilterSection>

        <div className="my-6 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />

        {/* Fuel Type */}
        <FilterSection title="Fuel Type">
          {fuelTypes.map((type) => (
            <Checkbox
              key={type}
              label={type}
              checked={selectedFuelTypes.includes(type)}
              onChange={() => onFuelToggle(type)}
            />
          ))}
        </FilterSection>
      </div>
    </div>
  )
}

/* -------------------- */
/* Filter Section */
/* -------------------- */

function FilterSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="mb-6">

      <h4 className="mb-4 text-sm font-semibold text-sky-800 tracking-wide">
        {title}
      </h4>

      {/* 
        📱 Mobile → Horizontal scroll
        💻 md+ → Vertical column
      */}
      <div
        className="
          flex gap-3
          overflow-x-auto
          pb-2
          md:flex-col md:overflow-visible
        "
      >
        {children}
      </div>
    </div>
  )
}

/* -------------------- */
/* Checkbox */
/* -------------------- */

function Checkbox({
  label,
  checked,
  onChange,
}: {
  label: string
  checked: boolean
  onChange: () => void
}) {
  return (
    <label
      className={`
        group flex items-center justify-between
        min-w-[160px] md:min-w-0
        px-4 py-3 rounded-xl
        border border-sky-100
        bg-sky-50/60
        cursor-pointer
        transition-all duration-200
        hover:bg-sky-100 hover:border-sky-300
        ${checked ? "bg-sky-100 border-sky-400 shadow-sm" : ""}
      `}
    >
      <span className="text-sm font-medium text-sky-900 whitespace-nowrap">
        {label}
      </span>

      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="peer sr-only"
        />

        <div
          className="
            h-5 w-5 rounded-md
            border-2 border-sky-300
            flex items-center justify-center
            transition-all duration-200
            peer-checked:bg-sky-500 peer-checked:border-sky-500
          "
        >
          <svg
            className="h-3 w-3 text-white scale-0 peer-checked:scale-100 transition-transform duration-200"
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