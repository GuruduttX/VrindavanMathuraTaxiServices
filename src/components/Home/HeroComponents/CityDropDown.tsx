"use client"

import { Search, MapPin } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const RECENT_CITIES = ["Pune", "Bangalore"]

const POPULAR_CITIES = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Pune",
  "Chennai",
  "Hyderabad",
  "Ahmedabad",
  "Jaipur",
]

interface CityDropdownProps {
  open: boolean
  onClose: () => void
  onSelect: (type: string, city: string) => void
  filter: string
}

const CityDropdown = ({
  open,
  onClose,
  onSelect,
  filter,
}: CityDropdownProps) => {
  const [query, setQuery] = useState("")
  const dropdownRef = useRef<HTMLDivElement>(null)

  // 🔥 CLOSE ON OUTSIDE CLICK
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        onClose()
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open, onClose])

  if (!open) return null

  const filteredCities = POPULAR_CITIES.filter(city =>
    city.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div
      ref={dropdownRef}
      className="absolute top-full left-6 z-50 mt-1 w-[320px] bg-white rounded-2xl shadow-2xl border border-sky-100"
    >
      {/* Search */}
      <div className="flex items-center gap-2 px-4 py-3 border-b">
        <Search size={18} className="text-sky-500" />
        <input
          autoFocus
          placeholder="Search city"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full outline-none text-sm"
        />
      </div>

      {/* List */}
      <div className="max-h-72 overflow-y-auto p-2">
        {query === "" && (
          <>
            <p className="px-3 py-1 text-xs font-semibold text-gray-400 uppercase">
              Recent Searches
            </p>

            {RECENT_CITIES.map(city => (
              <CityItem
                key={city}
                city={city}
                onClick={() => {
                  onSelect(filter, city)
                  onClose()
                }}
              />
            ))}

            <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase">
              Popular Cities
            </p>
          </>
        )}

        {(query ? filteredCities : POPULAR_CITIES).map(city => (
          <CityItem
            key={city}
            city={city}
            onClick={() => {
              onSelect(filter, city)
              onClose()
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default CityDropdown

// ======================
// City Item Component
// ======================

const CityItem = ({
  city,
  onClick,
}: {
  city: string
  onClick: () => void
}) => (
  <div
    onClick={onClick}
    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-sky-50 cursor-pointer transition"
  >
    <div className="bg-sky-100 text-sky-600 p-2 rounded-lg">
      <MapPin size={16} />
    </div>
    <p className="text-sm font-medium text-gray-800">{city}</p>
  </div>
)
