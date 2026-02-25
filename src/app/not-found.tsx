"use client";
import Link from "next/link";
import { Home, MapPin, Search, CarFront } from "lucide-react";
import Navbar from "@/utils/Navbar";
import Footer from "@/utils/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <section className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-sky-50 via-white to-sky-100 px-6 overflow-hidden">
        
        {/* Decorative Floating Circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-sky-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"></div>

        <div className="max-w-3xl text-center relative z-10">

          {/* Taxi Icon Circle */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 flex items-center justify-center shadow-xl">
              <CarFront size={40} className="text-white" />
            </div>
          </div>

          {/* 404 */}
          <h1 className="text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
            404
          </h1>

          {/* Heading */}
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-800">
            Oops! This Route Doesn't Exist
          </h2>

          {/* Description */}
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            The page you're trying to visit is not available.
            Maybe the route changed — but don’t worry,
            <span className="font-semibold text-sky-600">
              {" "}Mathura Vrindavan Taxi will guide you safely.
            </span>
          </p>

          {/* Sky Blue Divider */}
          <div className="mt-6 flex justify-center">
            <span className="h-1 w-24 rounded-full bg-gradient-to-r from-sky-400 to-blue-500"></span>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              <Home size={18} />
              Back to Home
            </Link>

            <Link
              href="/tour-packages"
              className="inline-flex items-center gap-2 rounded-full border border-sky-400 px-6 py-3 text-sky-600 font-semibold hover:bg-sky-50 transition"
            >
              <MapPin size={18} />
              View Tour Packages
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-gray-700 font-semibold hover:bg-white transition"
            >
              <Search size={18} />
              Contact Support
            </Link>

          </div>

          {/* Bottom Line */}
          <p className="mt-12 text-sm text-gray-500 italic">
            "Every journey begins with the right direction."
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
}