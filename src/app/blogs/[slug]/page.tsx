
import Footer from "@/utils/Footer";
import Navbar from "@/utils/Navbar";
import SideForm from "@/components/Blogs/SideForm";

import Script from "next/script";
import { notFound } from "next/navigation";
import Link from "next/link";
import HeroSection from "@/components/Blogs/HeroSection";
import BlogContentSection from "@/components/Blogs/BlogContentSection";
import BlogFAQSection from "@/components/Blogs/BlogFAQSection";
import BlogCTASection from "@/components/Blogs/BlogCTASection";


const page = async ({ params }: { params: Promise<{ slug: string , duration : string}> }) => {

  

return (
  <>

  <Navbar/>

      <HeroSection/>
      

     {/* MAIN CONTENT + SIDEBAR */}
      <section className="w-full min-h-screen bg-white">

        {/* Full width background wrapper */}
        <div className="w-full py-12">

          {/* Centered Container */}
         <div className="px-6 lg:px-30">

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16">

            {/* LEFT CONTENT */}
            <main className="space-y-12">
              <BlogContentSection />
            </main>

            {/* RIGHT SIDEBAR */}
            <aside className="hidden md:block">
              <div className="sticky top-28">
                <SideForm />
              </div>
            </aside>

          </div>

        </div>

        </div>
      </section>

      <BlogCTASection/>

      <BlogFAQSection/>


      {/* BELOW CONTENT */}
    
      <Footer />
    </>
  );
};

export default page;
