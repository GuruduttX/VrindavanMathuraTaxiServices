
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
import { SearchParams } from "next/dist/server/request/search-params";
import { redirect } from "next/navigation"




 type searchParams = {
    from?: string;
    to?: string;
    departure?: string;
    return?: string;
    pickup?: string;
    drop?: string;
  };



export default async function ProductsPage({searchParams} : {searchParams : Promise<SearchParams>}) {

    
  const { from, to, departure, return: returnDate, pickup, drop, type } = await searchParams;

  console.log(from, to, departure, returnDate, pickup, drop );
   
  if (!from || !to || !departure || !returnDate || !pickup || !drop || !type) {
      redirect("/")
  }
  

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
