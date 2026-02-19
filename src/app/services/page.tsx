"use client";

import Footer from "@/utils/Footer";
import Navbar from "@/utils/Navbar";
import ServiceSection from "@/components/Services/ServiceSection";



export default function Page() {
 
  return (
    <>
     <Navbar/>
      <div className="bg-gradient-to-br from-blue-50 to-sky-100">

        {/* ================= HERO SECTION ================= */}
        <section className="py-24 text-center px-6">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">
            Our Services
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We provide reliable, safe and comfortable transportation services
            tailored to your needs.
          </p>
        </section>

        {/* ===== Spark Line Divider ===== */}
        <div className="relative flex items-center justify-center -mt-20">
          
          {/* Left Line */}
          <div className="h-px w-1/3 bg-gradient-to-r from-transparent via-sky-400 to-blue-500"></div>

          {/* Spark */}
          <span className="relative mx-4 flex items-center justify-center">
            
            <span className="absolute w-6 h-6 bg-sky-400 rounded-full blur-md opacity-70 animate-pulse"></span>
            
            <span className="relative w-3 h-3 bg-sky-300 rounded-full shadow-lg shadow-sky-400/70"></span>

          </span>

          {/* Right Line */}
          <div className="h-px w-1/3 bg-gradient-to-l from-transparent via-sky-400 to-blue-500"></div>

        </div>

        <ServiceSection/>




        

      {/* ================= MODERN PROCESS SECTION ================= */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 py-24 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-16">
            How It Works
          </h2>

          <div className="relative grid md:grid-cols-3 gap-12 items-center">

            {/* Step 1 */}
            <div className="relative group bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-sky-400 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-sky-400 text-blue-900 text-xl font-bold mb-6 group-hover:scale-110 transition">
                01
              </div>
              <h4 className="text-xl font-semibold mb-3">
                Book Your Ride
              </h4>
              <p className="text-blue-200 text-sm leading-relaxed">
                Choose your service and confirm your booking in minutes.
              </p>
            </div>

            {/* Arrow 1 */}
            <div className="hidden md:block absolute left-[32%] top-1/2 -translate-y-1/2 text-sky-400 text-4xl">
              →
            </div>

            {/* Step 2 */}
            <div className="relative group bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-sky-400 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-sky-400 text-blue-900 text-xl font-bold mb-6 group-hover:scale-110 transition">
                02
              </div>
              <h4 className="text-xl font-semibold mb-3">
                Get Confirmation
              </h4>
              <p className="text-blue-200 text-sm leading-relaxed">
                Receive instant confirmation with driver details.
              </p>
            </div>

            {/* Arrow 2 */}
            <div className="hidden md:block absolute right-[32%] top-1/2 -translate-y-1/2 text-sky-400 text-4xl">
              →
            </div>

            {/* Step 3 */}
            <div className="relative group bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-sky-400 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-sky-400 text-blue-900 text-xl font-bold mb-6 group-hover:scale-110 transition">
                03
              </div>
              <h4 className="text-xl font-semibold mb-3">
                Enjoy Your Trip
              </h4>
              <p className="text-blue-200 text-sm leading-relaxed">
                Sit back, relax and enjoy a smooth journey.
              </p>
            </div>

          </div>
        </div>
      </section>


        {/* ================= CTA SECTION ================= */}
        <section className="py-20 text-center px-6">
          <div className="bg-gradient-to-r from-blue-700 to-sky-500 rounded-3xl p-12 shadow-2xl text-white max-w-4xl mx-auto transition-all duration-500 hover:shadow-blue-400/40 hover:-translate-y-2 cursor-pointer">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Book Your Ride?
            </h2>
            <p className="mb-6 text-blue-100">
              Experience premium comfort and reliable service today.
            </p>
            <button className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-xl hover:bg-blue-100 transition">
              Book Now
            </button>
          </div>
        </section>

      </div>
    <Footer/>
    </>
  );
}
