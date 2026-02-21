"use client"

import React, { useEffect, useMemo, useState } from "react"
import FiltersPanel from "./FiltersPanel"
import ProductsList from "./ProductList"
import { supabase } from "@/lib/supabase/SupabaseConfig"

export type Car = {
  id: string
  name: string
  seat: string
  baseprice: string
  cabtype: string
  fueltype: string
  inclusion: {
    id: string
    description: string
  }[]
  exclusion: {
    id: string
    description: string
  }[]
  image: string
}

const ProductClient = () => {
  const [cars, setCars] = useState<Car[]>([])
  const [selectedCabTypes, setSelectedCabTypes] = useState<string[]>([])
  const [selectedFuelTypes, setSelectedFuelTypes] = useState<string[]>([])

  // Fetch cars
  const getCars = async () => {
    const { data, error } = await supabase.from("Cars").select("*")

    if (error) {
      console.error(error)
      setCars([])
      return
    }

    setCars(data ?? [])
  }

  useEffect(() => {
    getCars()
  }, [])

  // 🔥 Derived filtered cars (CORRECT way)
  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      const cabMatch =
        selectedCabTypes.length === 0 ||
        selectedCabTypes.includes(car.cabtype)

      const fuelMatch =
        selectedFuelTypes.length === 0 ||
        selectedFuelTypes.includes(car.fueltype)

      return cabMatch && fuelMatch
    })
  }, [cars, selectedCabTypes, selectedFuelTypes])

  // Toggle helpers
  const toggleCabType = (label: string) => {
    setSelectedCabTypes(prev =>
      prev.includes(label)
        ? prev.filter(v => v !== label)
        : [...prev, label]
    )
  }

  const toggleFuelType = (label: string) => {
    setSelectedFuelTypes(prev =>
      prev.includes(label)
        ? prev.filter(v => v !== label)
        : [...prev, label]
    )
  }

  const clearAllFilters = () => {
    setSelectedCabTypes([])
    setSelectedFuelTypes([])
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-12 gap-6">

        {/* LEFT FILTERS */}
        <aside className="col-span-3 pb-8 pt-5">
          <FiltersPanel
            selectedCabTypes={selectedCabTypes}
            selectedFuelTypes={selectedFuelTypes}
            onCabToggle={toggleCabType}
            onFuelToggle={toggleFuelType}
            onClear={clearAllFilters}
          />
        </aside>

        {/* RIGHT PRODUCTS */}
        <main className="col-span-9 pb-10">
          <ProductsList cars={filteredCars} />
        </main>

      </div>
    </div>
  )
}

export default ProductClient
