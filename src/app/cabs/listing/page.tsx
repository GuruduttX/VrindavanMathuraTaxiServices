"use client"

import CabCTASection from "@/components/Home/CabCTASection"
import FiltersPanel from "@/components/ProductArchive/FiltersPanel"
import ProductsList from "@/components/ProductArchive/ProductList"
import RatingSection from "@/components/ProductArchive/RatingSection"
import Footer from "@/utils/Footer"
import Navbar from "@/utils/Navbar"
import NormalNavbar from "@/utils/NormalNavbar"
import TaxiCTASection from "@/utils/TaxiCTASection"

export default function ProductsPage() {
    return (
        <>
            <NormalNavbar />
            <section className="bg-sky-50">
                <TaxiCTASection />
                {/* Header spacing if navbar exists */}
                <div className="h-20" />

                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-12 gap-6">

                        {/* LEFT FILTERS */}
                        <aside className="col-span-3 pb-8 pt-5">
                            <div className="sticky top-24">
                                <FiltersPanel />
                            </div>
                        </aside>

                        {/* RIGHT PRODUCTS */}
                        <main className="col-span-9 pb-10">
                            {/* Floating Gradient Glow */}
                            <div className="absolute -top-20 -left-20 h-72 w-72 bg-sky-400/20 blur-3xl rounded-full pointer-events-none" />

                            <ProductsList />
                        </main>

                    </div>
                </div>
                <CabCTASection />
                <RatingSection />
            </section>

            <Footer />

        </>
    )
}
