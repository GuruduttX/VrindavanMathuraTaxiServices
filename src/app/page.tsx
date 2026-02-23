import CabBookingSection from '@/components/Home/CabBookingSection'
import CabCtaCardSection from '@/components/Home/CabCtaCardSection'
import CabCTASection from '@/components/Home/CabCTASection'
import ControlledCabCarousel from '@/components/Home/ControlledCabCrauosel'
import HomeHero from '@/components/Home/HomeHero'
import InfiniteCabCarousel from '@/components/Home/InfiniteCabCrauosel'
import TrustBuildCTA from '@/components/Home/TrustBuildCTA'
import TrustHighlights from '@/components/Home/TrustHighLights'
import TrustConveyorSection from '@/components/Home/TrustOrbitSection'
import TrustGlowRailSection from '@/components/Home/TrustOrbitSection'
import TrustElevatorSection from '@/components/Home/TrustOrbitSection'
import RatingSection from '@/components/ProductArchive/RatingSection'
import Footer from '@/utils/Footer'
import Navbar from '@/utils/Navbar'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vrindavan Mathura Taxi Service | Car Rental, Local Sightseeing & Airport Transfer",
  description:
    "Book reliable taxi service in Vrindavan & Mathura. We provide local sightseeing, Govardhan & Barsana tours, outstation trips and airport transfers at affordable prices.",
  keywords: [
    "Vrindavan taxi service",
    "Mathura taxi service",
    "Mathura Vrindavan car rental",
    "Govardhan taxi",
    "Barsana taxi service",
    "Mathura airport transfer",
    "Vrindavan local sightseeing taxi",
  ],
  alternates: {
    canonical: "https://www.vrindavanmathurataxiservice.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      "Vrindavan Mathura Taxi Service | Local & Outstation Car Rental",
    description:
      "Affordable and trusted taxi service in Mathura & Vrindavan for temple visits, Govardhan, Barsana tours and airport transfers.",
    url: "https://www.vrindavanmathurataxiservice.com/",
    siteName: "Vrindavan Mathura Taxi Service",
    images: [
      {
        url: "https://www.vrindavanmathurataxiservice.com/og-image.jpg",
        width: 1600,
        height: 900,
        alt: "Vrindavan Mathura Taxi Service",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vrindavan Mathura Taxi Service",
    description:
      "Book Mathura & Vrindavan taxi services for local sightseeing, Govardhan, Barsana and airport pickup.",
    images: [
      "https://www.vrindavanmathurataxiservice.com/og-image.jpg",
    ],
  },
};


const page = () => {

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
      "Reliable taxi and car rental services in Mathura, Vrindavan, Govardhan and Barsana. We provide local sightseeing, outstation trips and airport transfers.",
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
      {
        "@type": "City",
        "name": "Mathura",
      },
      {
        "@type": "City",
        "name": "Vrindavan",
      },
      {
        "@type": "City",
        "name": "Govardhan",
      },
      {
        "@type": "City",
        "name": "Barsana",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Taxi & Car Rental Service",
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
            "name": "Local Sightseeing Taxi",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Govardhan & Barsana Tour Taxi",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Outstation Taxi Service",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Airport Transfer Service",
          },
        },
      ],
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            websiteSchema,
            organizationSchema,
            serviceSchema,
          ]),
        }}
      />
      <Navbar />
      <HomeHero />
      <TrustGlowRailSection />
      <TrustHighlights />
      <CabBookingSection />
      <InfiniteCabCarousel />
      <CabCTASection />
      <CabCtaCardSection />
      <ControlledCabCarousel />
      <TrustBuildCTA />
      <RatingSection />
      <Footer />
    </>
  )
}

export default page