"use client"

import Link from "next/link"
import { CarTaxiFront } from "lucide-react"
import Image from "next/image"

export default function NormalNavbar() {
  return (
    <header className="top-5 left-1/2 z-50 w-full">
      <nav className="flex items-center justify-between px-6 py-3 
     shadow-lg border border-sky-100 bg-white">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-12 w-35 md:w-45 lg:w-45 rounded-full bg-gradient-to-br from-sky-50 to-cyan-100 flex items-center justify-center p-5">
          <Image
          src="/Experience_my_India.webp"
          height={50}
          width={150}
          alt="Mathura Vrindavan Taxi Servives Logo"
          />
          </div>
          
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="/" className="text-sky-600 font-semibold">
            Home
          </Link>
          <Link href="/about" className="hover:text-sky-600 transition">
            About
          </Link>
          <Link href="/services" className="hover:text-sky-600 transition">
            Services
          </Link>
         
        </div>

        {/* CTA */}
        <Link
          href="/book"
          className="px-5 py-2 rounded-full text-sm font-semibold text-white 
          bg-gradient-to-r from-sky-500 to-cyan-400 hover:opacity-90 transition shadow-md"
        >
          Book Cab
        </Link>
      </nav>
    </header>
  )
}
