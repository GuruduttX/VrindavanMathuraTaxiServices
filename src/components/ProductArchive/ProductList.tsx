"use client"

import { supabase } from "@/lib/supabase/SupabaseConfig"
import ProductCard from "./ProductCard"
import { ShieldCheck, Sparkles, Clock } from "lucide-react"
import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

type Car = {
  id : string,
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

export default function ProductsList({cars} : {cars : Car[]}) {

  const router = useRouter();
  const searchParams  = useSearchParams();

  useEffect(()=>{
    if(!searchParams.get('from') || !searchParams.get('to') || !searchParams.get('departure') ||
     !searchParams.get('return') || !searchParams.get('pickup') ||
      !searchParams.get('drop')){
         router.push('/');
         return;
      }

  },[router, searchParams]);



  const handleSelect = ( id : string, name : string , cabtype : string, fueltype: string , seat : string , price : string ) => {

    router.push(`/cabs/review?from=${searchParams.get("from")}&to=${searchParams.get("to")}&departure=${searchParams.get("departure")}&return=${searchParams.get("return")}&pickup=${searchParams.get("pickup")}&drop=${searchParams.get("drop")}&type=${searchParams.get("type")}&carname=${name}&cabtype=${cabtype}&fueltype=${fueltype}&carseat=${seat}&carprice=${price}&carId=${id}`)
  }



  return (
    <div
      className="
        relative
        h-[calc(100vh-6rem)]
        overflow-y-auto
        pr-3
        space-y-6
        custom-scrollbar
      "
    >

      {/* Info Strip */}
      <div className="
        sticky top-0 z-10
        bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500
        text-white
        rounded-2xl
        px-6 py-4
        shadow-[0_12px_30px_rgba(0,0,0,0.15)]
        backdrop-blur-xl
      ">
        <div className="flex items-center justify-between text-sm font-medium">
          <InfoItem icon={<ShieldCheck size={18} />} label="Trusted Drivers" />
          <InfoItem icon={<Sparkles size={18} />} label="Clean Cabs" />
          <InfoItem icon={<Clock size={18} />} label="On-Time Pickup" />
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-5">
        {cars?.map((car : Car) => (
          <ProductCard key={car.id} car={car} onClick={handleSelect}/>
        ))}
      </div>
    </div>
  )
}

/* ----------------------------- */
/* Small Reusable UI */
/* ----------------------------- */

function InfoItem({
  icon,
  label,
}: {
  icon: React.ReactNode
  label: string
}) {
  return (
    <div className="flex items-center gap-2 opacity-95 hover:opacity-100 transition">
      <span className="text-white/90">{icon}</span>
      <span>{label}</span>
    </div>
  )
}
