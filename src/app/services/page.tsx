import Footer from "@/utils/Footer";
import Navbar from "@/utils/Navbar";
import ServiceSection from "@/components/Services/ServiceSection";
import EnquiryPopup from "@/utils/EnquiryPopUp";
import ServicesCTA from "@/components/Services/ServicesCTA";
import Testimonials from "@/components/Services/Testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Taxi Services in Mathura & Vrindavan | Local Sightseeing, Outstation & Airport Transfer",
  description:
    "Explore our professional taxi services in Mathura and Vrindavan. We offer local sightseeing, Govardhan & Barsana tours, outstation trips and airport transfers with safe and comfortable rides.",
  keywords: [
    "Mathura taxi services",
    "Vrindavan taxi service",
    "Govardhan taxi booking",
    "Barsana tour taxi",
    "Mathura airport transfer",
    "Vrindavan car rental",
    "Outstation taxi Mathura",
  ],
  alternates: {
    canonical:
      "https://www.vrindavanmathurataxiservice.com/services",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      "Taxi Services in Mathura & Vrindavan | Safe & Reliable Car Rental",
    description:
      "Book trusted taxi services for local sightseeing, temple visits, outstation travel and airport pickup in Mathura & Vrindavan.",
    url: "https://www.vrindavanmathurataxiservice.com/services",
    siteName: "Vrindavan Mathura Taxi Service",
    images: [
      {
        url: "https://www.vrindavanmathurataxiservice.com/og-services.jpg",
        width: 1600,
        height: 900,
        alt: "Taxi Services in Mathura and Vrindavan",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Taxi Services in Mathura & Vrindavan",
    description:
      "Reliable taxi service for temple visits, Govardhan tour, Barsana trip and airport transfers.",
    images: [
      "https://www.vrindavanmathurataxiservice.com/og-services.jpg",
    ],
  },
};



export default function Page() {

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Vrindavan Mathura Taxi Service",
    "url": "https://www.vrindavanmathurataxiservice.com/",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Vrindavan Mathura Taxi Service",
    "url": "https://www.vrindavanmathurataxiservice.com/",
    "logo":
      "https://www.vrindavanmathurataxiservice.com/logo.png",
    "description":
      "Reliable taxi and car rental services for Mathura, Vrindavan, Govardhan and Barsana including local sightseeing, outstation trips and airport transfers.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress":
        "Anandam Square, Omaxe Eternity, 1/08, near Reliance Fresh Signature",
      "addressLocality": "Vrindavan",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "281121",
      "addressCountry": "IN",
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+917302265809",
      "contactType": "customer service",
    },
    "areaServed": [
      { "@type": "City", "name": "Mathura" },
      { "@type": "City", "name": "Vrindavan" },
      { "@type": "City", "name": "Govardhan" },
      { "@type": "City", "name": "Barsana" },
    ],
  };

  const serviceCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Taxi and Car Rental Services",
    "provider": {
      "@type": "TaxiService",
      "name": "Vrindavan Mathura Taxi Service",
    },
    "areaServed": {
      "@type": "State",
      "name": "Uttar Pradesh",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Taxi Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Local Sightseeing Taxi Service",
            "description":
              "Temple visits and local sightseeing in Mathura and Vrindavan.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Govardhan & Barsana Tour Taxi",
            "description":
              "Comfortable taxi service for Govardhan Parikrama and Barsana temple visits.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Outstation Taxi Service",
            "description":
              "Outstation trips from Mathura and Vrindavan to Delhi, Agra and nearby cities.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Airport Transfer Service",
            "description":
              "Airport pickup and drop service from Delhi and nearby airports.",
          },
        },
      ],
    },
  };

  const processSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Book Taxi Service",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Book Your Ride",
        "text":
          "Choose your preferred taxi service and confirm your booking easily.",
      },
      {
        "@type": "HowToStep",
        "name": "Get Confirmation",
        "text":
          "Receive booking confirmation with driver and vehicle details.",
      },
      {
        "@type": "HowToStep",
        "name": "Enjoy Your Trip",
        "text":
          "Travel comfortably and enjoy a safe and smooth journey.",
      },
    ],
  };

  return (
    <>
     
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            websiteSchema,
            organizationSchema,
            serviceCatalogSchema,
            processSchema,
            
          ]),
        }}
      />

      
      <Navbar />
      <div className="bg-gradient-to-br from-blue-50 to-sky-100">

        {/* ================= HERO SECTION ================= */}
        <section className="py-24 text-center px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-3 sm:mb-4 md:mb-6">
            Our Services
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
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

        <ServiceSection />






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
        <ServicesCTA />

        <Testimonials />


      </div>
      <Footer />
    </>
  );
}
