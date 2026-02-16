
import Footer from "@/utils/Footer";
import Navbar from "@/utils/Navbar";
import SideForm from "@/components/Blogs/SideForm";

import Script from "next/script";
import { notFound } from "next/navigation";
import Link from "next/link";
import HeroSection from "@/components/Blogs/HeroSection";
import BlogContentSection from "@/components/Blogs/BlogContentSection";


const page = async ({ params }: { params: Promise<{ slug: string , duration : string}> }) => {

  

return (
  <>
   
      <Navbar />

     

      {/* HERO */}
      <HeroSection/>
      

      {/* MAIN CONTENT + SIDEBAR */}
      <section className="w-full min-h-screen bg-red-600  ">
        <div className="  py-12 ">
          <h1 className="text-red-600 text-4xl">lasf</h1>

          {/* GRID */}
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10  ">


            {/* LEFT CONTENT */}
            <main className="space-y-12">

              
             
              <BlogContentSection/>

            </main>

            {/* RIGHT SIDEBAR */}

            <aside className="hidden md:block ">
              <div className="sticky top-28">
                <SideForm />
              </div>
            </aside>



          </div>
        </div>
      </section>

      {/* BELOW CONTENT */}
    
      <Footer />
    </>
  );
};

export default page;
