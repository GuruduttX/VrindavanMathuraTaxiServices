import CabCTASection from "@/components/Home/CabCTASection"
import FiltersPanel from "@/components/ProductArchive/FiltersPanel"
import ProductClient from "@/components/ProductArchive/ProductClient"
import ProductsList from "@/components/ProductArchive/ProductList"
import RatingSection from "@/components/ProductArchive/RatingSection"
import { supabase } from "@/lib/supabase/SupabaseConfig"
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

                <ProductClient/>
                <CabCTASection />
                <RatingSection />
            </section>

            <Footer />

        </>
    )
}
