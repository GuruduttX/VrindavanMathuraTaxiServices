"use client"

import CabCTASection from "@/components/Home/CabCTASection"
import FiltersPanel from "@/components/ProductArchive/FiltersPanel"
import ProductsList from "@/components/ProductArchive/ProductList"
import RatingSection from "@/components/ProductArchive/RatingSection"
import { supabase } from "@/lib/supabase/SupabaseConfig"
import Footer from "@/utils/Footer"
import Navbar from "@/utils/Navbar"
import NormalNavbar from "@/utils/NormalNavbar"
import TaxiCTASection from "@/utils/TaxiCTASection"

type Car = {
  id: string,
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

let currentCars;

const getCars = async () => {
    const { data, error } = await supabase.from("Cars").select("*");

    if (error) {
        console.log("THE ERROR WE HAVE GOT IS THE : ");
        console.log(error);
    }

    currentCars = data;

    return data;
}

export default async function ProductsPage() {

    const CarData = await getCars();

    const handleCurrentCars = (car : Car[]) => {
        currentCars = car
    }

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
                                <FiltersPanel cars={CarData} filteredCars={handleCurrentCars}/>
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
