"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase/SupabaseConfig"
import { useParams } from "next/navigation"
import toast from "react-hot-toast"

import CMSHeader from "@/components/Admin/CMS/CMSHeader"
import CMSMediaSection from "@/components/Admin/CMS/CMSMediaSection"
import CMSLoading from "@/components/Admin/CMS/CMSLoading"
import CMSActions from "@/components/Admin/CMS/CMSActions"

import CarDetailsSection from "@/components/Admin/CarEditor/CarDetails"
import Inclusion from "@/components/Admin/CarEditor/Inclusion"
import Exclusion from "@/components/Admin/CarEditor/Exclusion"


/* ================= TYPES ================= */

type CarForm = {
  name: string
  category: string
  price: string
  duration: string
  image: string
  alt: string
  seat: string
  cabtype: string
  fueltype: string
}

type Inclusions = {
  id: string
  description: string
}

type Exclusions = {
  id: string
  description: string
}

/* ================= COMPONENT ================= */

export default function CarEditor() {

  const { id } = useParams()

  const [form, setForm] = useState<CarForm>({
    name: "",
    category: "",
    price: "",
    duration: "",
    image: "",
    alt: "",
    seat: "",
    cabtype: "",
    fueltype: ""
  })

  const [inclusions, setInclusions] = useState<Inclusions[]>([])
  const [exclusions, setExclusions] = useState<Exclusions[]>([])
  const [loading, setLoading] = useState(true)


  /* ================= FETCH EXISTING CAR ================= */

  useEffect(() => {

    const getCar = async () => {

      const { data, error } = await supabase
        .from("Cars")
        .select("*")
        .eq("id", id)
        .single()

      if (error) {
        toast.error(error.message)
        return
      }

      setForm({
        name: data.name ?? "",
        category: data.category ?? "",
        price: data.baseprice ?? "",
        duration: data.duration ?? "",
        image: data.image ?? "",
        alt: data.alt ?? "",
        seat: data.seat ?? "",
        cabtype: data.cabtype ?? "",
        fueltype: data.fueltype ?? ""
      })

      setInclusions(data.inclusion ?? [])
      setExclusions(data.exclusion ?? [])

      setLoading(false)
    }

    if (id) getCar()

  }, [id])


  /* ================= UPDATE HANDLER ================= */

  const updateForm = (field: keyof CarForm, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value
    }))
  }


  /* ================= SAVE UPDATE ================= */

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.image) {
      toast.error("Car image is missing")
      return
    }

    if (!form.cabtype) {
      toast.error("Cab category is required")
      return
    }

    const { error } = await supabase
      .from("Cars")
      .update({
        name: form.name,
        seat: form.seat,
        cabtype: form.cabtype,
        fueltype: form.fueltype,
        baseprice: form.price,
        image: form.image,
        alt: form.alt,
        inclusion: inclusions,
        exclusion: exclusions
      })
      .eq("id", id)

    if (error) {
      toast.error(error.message)
      return
    }

    toast.success("Car Updated Successfully")
  }


  const handlePreview = () => {}

  const handlePublish = async () => {}


  if (loading) return <CMSLoading />


  return (
    <div className="max-w-6xl mx-auto p-8 rounded-2xl
      bg-gradient-to-br from-[#0b1220]/80 via-[#0e1a2f]/80 to-[#0a1020]/80
      backdrop-blur-xl border border-white/10
      shadow-[0_0_60px_-15px_rgba(56,189,248,0.25)]">

      <form className="space-y-6" onSubmit={handleSave}>

        <CMSHeader editorType="Car" />

        <CarDetailsSection
          name={form.name}
          seat={form.seat}
          price={form.price}
          cabtype={form.cabtype}
          fueltype={form.fueltype}
          onChange={updateForm}
          editorType="Car"
        />

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

        <CMSActions
          actionType="update"
          editorType="Car"
          onPreview={handlePreview}
          onPublish={handlePublish}
        />

      </form>
    </div>
  )
}