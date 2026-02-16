"use client"

import Link from "next/link"
import Image from "next/image"
import EnquiryPopUp from "./EnquiryPopUp"
import { useState } from "react"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <EnquiryPopUp open={isOpen} onClose={() => setIsOpen(false)} />

      <header className="fixed top-3 md:top-5 lg:top-5 left-1/2 -translate-x-1/2 z-50 w-[80vw] md:w-[92%] lg:w-[92%] max-w-8xl">
        <nav className="flex items-center justify-between px-3 md:px-6 lg:px-6 py-1 md:py-3 lg:py-3 rounded-full 
          shadow-lg border border-sky-100 bg-white">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-12 w-[30vw] max-w-[180px] md:w-[15vw] md:max-w-[220px] rounded-full bg-gradient-to-br from-sky-50 to-cyan-100 flex items-center justify-center p-5">
              <Image
                src="/Experience_my_India.webp"
                height={50}
                width={150}
                alt="Mathura Vrindavan Taxi Servives Logo"
                className="w-full h-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="/" className="text-sky-600 font-semibold">Home</Link>
            <Link href="/about" className="hover:text-sky-600 transition">About</Link>
            <Link href="/services" className="hover:text-sky-600 transition">Services</Link>
            <Link href="/routes" className="hover:text-sky-600 transition">Routes</Link>
            <Link href="/contact" className="hover:text-sky-600 transition">Contact</Link>
          </div>

          {/* Mobile Menu Placeholder */}
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-sky-600" />
          </div>

          {/* CTA */}
          <button
            className="px-5 py-2 rounded-full text-xs md:text-sm font-semibold text-white 
              bg-gradient-to-r from-sky-500 to-cyan-400 hover:opacity-90 transition shadow-md cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            Book Cab
          </button>
        </nav>
      </header>
    </>
  )
}
