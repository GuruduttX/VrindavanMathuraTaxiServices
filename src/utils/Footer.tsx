"use client"
import Link from "next/link"
import {
  Phone,
  Mail,
  MapPin,
  CarTaxiFront,
  ShieldCheck,
  Clock,
  ArrowUpRight,
} from "lucide-react"
import { useState } from "react"
import EnquiryPopup from "./EnquiryPopUp"

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <EnquiryPopup open={isOpen} onClose={() => setIsOpen(false)} />

      <footer className="relative bg-[#0E1A2F] text-slate-300 overflow-hidden">
        {/* Soft Gradient Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-sky-500 via-transparent to-sky-400 pointer-events-none" />

        {/* Top CTA */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-14">
          <div className="rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-400 p-[1px]">
            <div className="rounded-2xl bg-[#03a8e4] px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  Book Trusted Taxi Services in Mathura & Vrindavan
                </h2>
                <p className="text-white mt-2 max-w-xl text-sm leading-relaxed">
                  Professional drivers, clean vehicles, transparent pricing and
                  24×7 availability for local & outstation journeys.
                </p>
              </div>

              <button
                onClick={() => {
                  setIsOpen(true)
                }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-cyan-400 text-white px-7 py-3.5 rounded-xl font-medium hover:opacity-90 transition shadow-2xl hover:shadow-3xl shadow-white"
              >
                Book a Taxi
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <CarTaxiFront className="h-8 w-8 text-sky-400" />
              <span className="text-xl font-semibold text-white">
                MV Taxi Services
              </span>
            </div>

            <p className="text-sm leading-relaxed text-white">
              Premium taxi services for Mathura, Vrindavan, Govardhan & Agra.
              Designed for comfort, safety and peace of mind.
            </p>
          </div>

          {/* Services */}
          <FooterCard title="Services">
            <FooterItem text="Local & Darshan Taxi" />
            <FooterItem text="Govardhan Parikrama Cabs" />
            <FooterItem text="Outstation & One-Way Trips" />
            <FooterItem text="Airport & Railway Transfers" />
          </FooterCard>

          {/* Routes */}
          <FooterCard title="Popular Routes">
            <FooterItem text="Delhi → Mathura" />
            <FooterItem text="Agra → Vrindavan" />
            <FooterItem text="Noida → Vrindavan" />
            <FooterItem text="Jaipur → Mathura" />
          </FooterCard>

          {/* Contact */}
          <FooterCard title="Get in Touch">
            <ContactItem Icon={Phone} text="+91 9XXXXXXXXX" />
            <ContactItem Icon={Mail} text="support@mvtaxiservices.com" />
            <ContactItem Icon={MapPin} text="Serving Mathura & Vrindavan, UP" />
            <ContactItem Icon={Clock} text="Available 24×7" />
            <ContactItem Icon={ShieldCheck} text="Verified Drivers" />
          </FooterCard>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white">
            <p className="text-white">
              © {new Date().getFullYear()} MV Taxi Services. All rights reserved.
            </p>

            <div className="flex gap-6">
              <FooterLink href="/privacy-policy" text="Privacy Policy" />
              <FooterLink href="/terms" text="Terms" />
              <FooterLink href="/refund-policy" text="Cancellation" />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

/* ---------------- Sub Components ---------------- */

function FooterCard({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <h3 className="text-white font-medium mb-5 text-sm tracking-wide">
        {title}
      </h3>
      <div className="space-y-3">{children}</div>
    </div>
  )
}

function FooterItem({ text }: { text: string }) {
  return (
    <p className="text-sm text-white hover:text-sky-300 transition cursor-default">
      {text}
    </p>
  )
}

function ContactItem({
  Icon,
  text,
}: {
  Icon: any
  text: string
}) {
  return (
    <div className="flex items-center gap-3 text-sm text-white">
      <Icon size={16} className="text-sky-400" />
      <span>{text}</span>
    </div>
  )
}

function FooterLink({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="hover:text-sky-300 transition"
    >
      {text}
    </Link>
  )
}
