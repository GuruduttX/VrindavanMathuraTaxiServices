'use client'

import { useState } from 'react';
import HeroCTA from './HeroComponents/HeroCTA'
import HeroSearchSection from './HeroComponents/HeroSearchSection'



export default function HomeHero() {

    const [search, setSearch] = useState({
        from: "",
        to: "",
        departure: "",
        return: "",
        pickup: "",
        drop: "",
        type: ""
    });

    const updateSearch = (type : string , value : string) => {
        setSearch((prev) => {
            return {...prev , [type] : value}
        })
    }

    return (

        <section className="relative w-full bg-gradient-to-b from-sky-500 to-sky-600 pt-25">

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">

                <HeroCTA />

                <HeroSearchSection filter = {search} onChange = {updateSearch}/>


                <div className="absolute bottom-10 left-12 md:left-130 lg:left-130 flex justify-center mt-8">
                    <button className="bg-blue-700 hover:bg-blue-900 text-white px-24 py-4 rounded-full text-lg font-semibold shadow-xl cursor-pointer">
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
