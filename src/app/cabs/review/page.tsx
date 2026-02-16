"use client"

import LeftCabReview from "@/components/CabReview/LeftCabReview"
import RightCabSection from "@/components/CabReview/RightCabSection"
import Footer from "@/utils/Footer"
import NormalNavbar from "@/utils/NormalNavbar"
import { CheckCircle, Clock, MapPin } from "lucide-react"

export default function review() {
    return (
        <>
            <NormalNavbar />
            <section className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100">

                <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">

                    <LeftCabReview />
                    <RightCabSection />

                </div>

            </section>
            <Footer />
        </>
    )
}
