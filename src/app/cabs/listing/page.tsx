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

let currentCars : Car[];

const getCars = async () => {
    const { data, error } = await supabase.from("Cars").select("*");

    if (error) {
        console.log("THE ERROR WE HAVE GOT IS THE : ");
        console.log(error);
    }

    currentCars = data ?? [];

    return data ?? [];
}

export default async function ProductsPage() {

    const CarData = await getCars();

    const handleCurrentCars = (cars : Car[]) => {
        currentCars = cars
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
