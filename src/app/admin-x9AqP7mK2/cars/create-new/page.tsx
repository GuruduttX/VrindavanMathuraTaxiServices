"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase/SupabaseConfig"
import toast from "react-hot-toast"
import CMSHeader from "@/components/Admin/CMS/CMSHeader"
import Inclusion from "@/components/Admin/CarEditor/Inclusion"
import Exclusion from "@/components/Admin/CarEditor/Exclusion"
import CMSMediaSection from "@/components/Admin/CMS/CMSMediaSection"
import CarDetailsSection from "@/components/Admin/CarEditor/CarDetails"

type CarForm = {
  name: string
  category: string
  price: string
  duration: string
  image: string
  alt: string
  seat : string,
  cabtype : string,
  fueltype : string
}

type Inclusions = {
  id: string
  description: string
}

type Exclusions = {
  id: string
  description: string
}

export default function CreateNewPackage() {

  const [form, setForm] = useState<CarForm>({
    name: "",
    category: "",
    price: "",
    duration: "",
    image: "",
    alt: "",
    seat : "",
    cabtype : "",
    fueltype : "",
  })

  const [inclusions, setInclusions] = useState<Inclusions[]>([
    { id: crypto.randomUUID(), description: "" }
  ])

  const [exclusions, setExclusions] = useState<Exclusions[]>([
    { id: crypto.randomUUID(), description: "" }
  ])

  const updateForm = (field: keyof CarForm, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity()
      return
    }

    if (!form.image) {
      toast.error("Car image is missing")
      return
    }

    if (!form.cabtype) {
      toast.error("Car cabcategory is missing")
      return
    }

    const payload = {
      name: form.name,
      seat: form.seat,
      cabtype: form.cabtype,
      fueltype: form.fueltype,
      baseprice: form.price,
      image: form.image,
      alt: form.alt,
      inclusion: inclusions,
      exclusion: exclusions
    }

    const { error } = await supabase
      .from("Cars")
      .insert([payload])   // ✅ must be array

    if (error) {
      toast.error(error.message)
      return
    }

    toast.success("Car Published Successfully")

    // Optional: reset form
    setForm({
      name: "",
      category: "",
      price: "",
      duration: "",
      image: "",
      alt: "",
      seat : "",
      cabtype :"",
      fueltype : ""

    })
  }

  return (
    <div className="max-w-6xl mx-auto p-8 rounded-2xl
      bg-gradient-to-br from-[#0b1220]/80 via-[#0e1a2f]/80 to-[#0a1020]/80
      backdrop-blur-xl border border-white/10
      shadow-[0_0_60px_-15px_rgba(56,189,248,0.25)]">

      <form className="space-y-6" onSubmit={handleSave}>

        <CMSHeader editorType="Car" />

        <CarDetailsSection name={form.name} seat={form.seat} price={form.price} cabtype={form.cabtype} fueltype={form.fueltype} onChange={updateForm} editorType="Car"/>

        <Inclusion
          inclusions={inclusions}
          setInclusions={setInclusions}
          editorType="Car"
        />

        <Exclusion
          exclusions={exclusions}
          setExclusions={setExclusions}
          editorType="Car"
        />

        <CMSMediaSection
          image={form.image}
          alt={form.alt}
          onChange={updateForm}
          editorType="Car"
        />

        <button
          type="submit"
          className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-xl transition"
        >
          Save Package
        </button>
      </form>
    </div>
  )
}