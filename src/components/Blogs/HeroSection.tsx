"use client";

import Link from "next/link";
import { useState } from "react";

export default function BlogHero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative w-full px-6 py-12 lg:px-16 ">

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-100 via-blue-50 to-white" />

      {/* ================= Breadcrumbs ================= */}
      <nav className="text-sm text-blue-500 mb-6 flex flex-wrap ml-18 mt-16 ">
        <Link href="/" className="hover:text-blue-700 transition">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/blogs" className="hover:text-blue-700 transition cursor-pointer">
          Blog
        </Link>
        <span className="mx-2">/</span>
        <span className="font-medium text-blue-700">
          Mathura Taxi Travel Guide
        </span>
      </nav>

      {/* ================= Hero Image ================= */}
      <div className="mx-auto max-w-7xl">

        <div className="relative w-full h-[300px] md:h-[420px] rounded-3xl overflow-hidden group cursor-pointer">

          {/* Image */}
          <img
            src="/images/Blogs/blog-hreo-section.webp"
            alt="Mathura Taxi Blog"
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />

          {/* Blue Overlay */}

          {/* Floating Badge */}
          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold text-blue-600 shadow">
            ✍️ Travel Blog
          </div>

        </div>

      </div>

      {/* ================= Bottom Content ================= */}
      <div className="mx-auto max-w-7xl mt-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">

        {/* Left: Blog Title */}
        <div className="flex-1 min-w-0">
          <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight ">
            Mathura Taxi Service – Complete Travel Guide
          </h1>

          <p className="mt-4 text-gray-600 max-w-xl">
            Discover the best taxi services, local travel tips, and must-visit
            destinations in Mathura for a comfortable and memorable journey.
          </p>
        </div>

        {/* Right: Let’s Connect Section */}
        <div
          className="shrink-0 bg-white/70 backdrop-blur-md border border-blue-100 shadow-xl rounded-2xl 
          px-6 py-5 
          flex flex-col md:flex-row 
          items-center gap-6 
          text-center md:text-left"
        >
          {/* Text */}
          <div className="md:text-right">
            <p className="text-xs uppercase tracking-wide text-gray-500">
              Have Questions?
            </p>

            <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">
              Let’s Connect
            </div>

            <span className="inline-block mt-2 text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-medium">
              Free Consultation
            </span>
          </div>

          {/* Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="w-full md:w-auto 
            whitespace-nowrap cursor-pointer 
            px-6 sm:px-8 py-3 sm:py-4 
            rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 
            text-white font-semibold 
            shadow-md hover:shadow-xl hover:scale-105 
            transition-all duration-300"
          >
            Enquire Now →
          </button>

        </div>

      </div>
    </section>
  );
}
