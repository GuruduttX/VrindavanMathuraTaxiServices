'use client'

import { useState } from 'react';
import HeroCTA from './HeroComponents/HeroCTA'
import HeroSearchSection from './HeroComponents/HeroSearchSection'
import { useRouter } from 'next/navigation';



export default function HomeHero() {

    const router = useRouter();

    const Currentdate =  new Date(Date.now()).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })

    const [search, setSearch] = useState({
        from: "Mumbai",
        to: "Pune",
        departure: Currentdate,
        return: Currentdate,
        pickup: "10:00 AM",
        drop: "9:45 PM",
        type: "oneway"
    });

    const updateSearch = (field: string, value: string) => {
        setSearch((prev) => {
            return { ...prev, [field]: value }
        })
    }


    const handleSearch = () => {
        router.push(`/cabs/listing?from=${search.from}&to=${search.to}&departure=${search.departure}&return=${search.return}&pickup=${search.pickup}&drop=${search.drop}&type=${search.type}`)
    }

    return (

        <section className="relative w-full bg-gradient-to-b from-sky-500 to-sky-600 pt-25">

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">

                <HeroCTA />

                <HeroSearchSection filter={search} onChange={updateSearch} />


               <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full px-6 flex justify-center">
                        <button
                            onClick={handleSearch}
                            className="
                            w-full sm:w-auto
                            max-w-xs sm:max-w-none
                            bg-blue-700 hover:bg-blue-900
                            text-white
                            px-10 sm:px-16 lg:px-20
                            py-3 sm:py-4
                            rounded-full
                            text-base sm:text-lg
                            font-semibold
                            shadow-xl
                            transition-all duration-300
                            hover:scale-105
                            cursor-pointer
                            "
                        >
                            SEARCH
                        </button>
                    </div>


            </div>

        </section>

    )
}

/* ------------------ Sub Component ------------------ */

function InputBox({
    title,
    value,
    subtitle,
    children,
}: {
    title: string
    value: string
    subtitle?: string
    children?: React.ReactNode
}) {
    return (
        <div className="border rounded-xl px-4 py-3 hover:shadow-md transition">
            <p className="text-xs text-gray-500">{title}</p>
            <p className="text-xl font-semibold text-gray-900">{value}</p>
            {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
            {children}
        </div>
    )
}
