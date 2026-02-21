"use client"

import Link from "next/link"
import Image from "next/image"
import EnquiryPopUp from "./EnquiryPopUp"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropDown, setOpenDropDown] = useState(false)

  return (
    <>
      <EnquiryPopUp open={isOpen} onClose={() => setIsOpen(false)} />

      <header className="fixed top-3 md:top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-7xl">
        <nav className="relative flex items-center justify-between px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg border border-sky-100 bg-white">

          {/* ================= LOGO ================= */}
          <Link href="/" className="flex items-center">
            <div className="h-12 w-[140px] md:w-[180px] rounded-full bg-gradient-to-br from-sky-50 to-cyan-100 flex items-center justify-center px-4">
              <Image
                src="/Experience_my_India.webp"
                height={50}
                width={150}
                alt="Mathura Vrindavan Taxi Services Logo"
                className="w-full h-auto object-contain"
              />
            </div>
          </Link>

          {/* ================= DESKTOP LINKS ================= */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="/" className="text-sky-600 font-semibold">Home</Link>
            <Link href="/about" className="hover:text-sky-600 transition">About</Link>
            <Link href="/services" className="hover:text-sky-600 transition">Services</Link>
            <Link href="/routes" className="hover:text-sky-600 transition">Routes</Link>
            <Link href="/contact" className="hover:text-sky-600 transition">Contact</Link>
          </div>

          {/* ================= CTA BUTTON ================= */}
          <button
            className="hidden md:block px-5 py-2 rounded-full text-sm font-semibold text-white 
            bg-gradient-to-r from-sky-500 to-cyan-400 hover:opacity-90 transition shadow-md"
            onClick={() => setIsOpen(true)}
          >
            Book Cab
          </button>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            className="md:hidden"
            onClick={() => setOpenDropDown(prev => !prev)}
          >
            {openDropDown ? (
              <X className="h-6 w-6 text-sky-600" />
            ) : (
              <Menu className="h-6 w-6 text-sky-600" />
            )}
          </button>

          {/*  MOBILE DROPDOWN  */}
          {openDropDown && (
            <div className="absolute top-full left-0 w-full mt-4 bg-white rounded-2xl shadow-xl border border-sky-100 md:hidden overflow-hidden">
              <div className="flex flex-col text-sm font-medium text-slate-600">

                <Link
                  href="/"
                  className="px-6 py-4 hover:bg-sky-50 text-sky-600 font-semibold"
                  onClick={() => setOpenDropDown(false)}
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className="px-6 py-4 bg-gray-200 hover:bg-sky-50"
                  onClick={() => setOpenDropDown(false)}
                >
                  About
                </Link>

                <Link
                  href="/services"
                  className="px-6 py-4  hover:bg-sky-50"
                  onClick={() => setOpenDropDown(false)}
                >
                  Services
                </Link>

                <Link
                  href="/routes"
                  className="px-6 py-4 bg-gray-200 hover:bg-sky-50"
                  onClick={() => setOpenDropDown(false)}
                >
                  Routes
                </Link>

                <Link
                  href="/contact"
                  className="px-6 py-4 hover:bg-sky-50"
                  onClick={() => setOpenDropDown(false)}
                >
                  Contact
                </Link>

                {/* Mobile CTA */}
                <button
                  onClick={() => {
                    setOpenDropDown(false)
                    setIsOpen(true)
                  }}
                  className="m-4 px-5 py-3 rounded-full text-sm font-semibold text-white 
                  bg-gradient-to-r from-sky-500 to-cyan-400 shadow-md"
                >
                  Book Cab
                </button>

              </div>
            </div>
          )}

        </nav>
      </header>
    </>
  )
}