import MissionSection from "@/components/About/MissionSection";
import StorySection from "@/components/About/StorySection";
import WhyChooseUs from "@/components/About/WhyChooseUs";
import Navbar from "@/utils/Navbar";
import React from "react";
import Footer from "@/utils/Footer";
import BlogCTASection from "@/components/Blogs/BlogCTASection";
import type { Metadata } from "next";

export const metadata : Metadata = {
  title: "About Vrindavan Mathura Taxi Service | Trusted Car Rental & Taxi Provider",
  description:
    "Learn about Vrindavan Mathura Taxi Service – a trusted taxi and car rental provider offering local sightseeing, Govardhan & Barsana tours, outstation trips and airport transfers.",
  keywords: [
    "About Vrindavan Mathura Taxi Service",
    "Mathura taxi company",
    "Vrindavan car rental service",
    "Trusted taxi in Mathura",
    "Local taxi provider Vrindavan",
  ],
  alternates: {
    canonical: "https://www.vrindavanmathurataxiservice.com/about",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      "About Vrindavan Mathura Taxi Service | Reliable Taxi Provider",
    description:
      "Discover our story, mission and commitment to providing safe and affordable taxi services in Mathura & Vrindavan.",
    url: "https://www.vrindavanmathurataxiservice.com/about",
    siteName: "Vrindavan Mathura Taxi Service",
    images: [
      {
        url: "https://www.vrindavanmathurataxiservice.com/og-about.jpg",
        width: 1600,
        height: 900,
        alt: "About Vrindavan Mathura Taxi Service",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Vrindavan Mathura Taxi Service",
    description:
      "Trusted taxi and car rental service in Mathura & Vrindavan for local and outstation travel.",
    images: [
      "https://www.vrindavanmathurataxiservice.com/og-about.jpg",
    ],
  },
};

export default function AboutPage() {

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Vrindavan Mathura Taxi Service",
    "url": "https://www.vrindavanmathurataxiservice.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target":
        "https://www.vrindavanmathurataxiservice.com/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Vrindavan Mathura Taxi Service",
    "url": "https://www.vrindavanmathurataxiservice.com/",
    "logo":
      "https://www.vrindavanmathurataxiservice.com/logo.png",
    "description":
      "Vrindavan Mathura Taxi Service is a trusted local taxi and car rental company offering reliable transportation for temple visits, sightseeing, outstation travel and airport transfers.",
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

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Vrindavan Mathura Taxi Service",
    "description":
      "About Vrindavan Mathura Taxi Service – providing safe, affordable and reliable taxi services in Mathura, Vrindavan, Govardhan and Barsana.",
    "url": "https://www.vrindavanmathurataxiservice.com/about",
    "mainEntity": {
      "@type": "TaxiService",
      "name": "Vrindavan Mathura Taxi Service",
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
            aboutPageSchema,
          ]),
        }}
      />

      <main className="w-full bg-white text-gray-800">

        {/* Hero Section */}
        <Navbar />

        <MissionSection />
        <StorySection />


        <WhyChooseUs />

        <BlogCTASection />

        <Footer />

      </main>
    </>
  );
}
