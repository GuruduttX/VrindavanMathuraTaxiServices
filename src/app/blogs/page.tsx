import BlogArchiveHero from "@/components/BlogArchive/BlogArchiveHero";
import BlogCards from "@/components/BlogArchive/BlogCards";
import BlogNewsletter from "@/components/BlogArchive/BlogNewsletter";
import BlogCTASection from "@/components/Blogs/BlogCTASection";
import Footer from "@/utils/Footer";
import Navbar from "@/utils/Navbar";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title:
        "Mathura Vrindavan Travel Blog | Temple Guides, Taxi Tips & Tour Information",
    description:
        "Read our latest blogs about Mathura and Vrindavan travel, temple guides, Govardhan Parikrama, Barsana tours, taxi booking tips and spiritual journey insights.",
    keywords: [
        "Mathura travel blog",
        "Vrindavan travel guide",
        "Govardhan parikrama guide",
        "Barsana temple guide",
        "Mathura Vrindavan taxi tips",
        "Temple darshan guide",
        "Vrindavan yatra blog",
    ],
    alternates: {
        canonical:
            "https://www.vrindavanmathurataxiservice.com/blog",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title:
            "Mathura Vrindavan Travel Blog | Guides & Taxi Information",
        description:
            "Explore temple guides, yatra tips and taxi travel information for Mathura & Vrindavan.",
        url: "https://www.vrindavanmathurataxiservice.com/blog",
        siteName: "Vrindavan Mathura Taxi Service",
        images: [
            {
                url: "https://www.vrindavanmathurataxiservice.com/og-blog.jpg",
                width: 1600,
                height: 900,
                alt: "Mathura Vrindavan Travel Blog",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title:
            "Mathura Vrindavan Travel Blog",
        description:
            "Temple guides, travel tips and taxi information for Mathura & Vrindavan yatra.",
        images: [
            "https://www.vrindavanmathurataxiservice.com/og-blog.jpg",
        ],
    },
};

export default function page() {

    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Mathura Vrindavan Travel Blog",
        "description":
            "Travel guides, temple information and taxi booking tips for Mathura, Vrindavan, Govardhan and Barsana.",
        "url":
            "https://www.vrindavanmathurataxiservice.com/blogs",
        "publisher": {
            "@type": "Organization",
            "name": "Vrindavan Mathura Taxi Service",
            "logo": {
                "@type": "ImageObject",
                "url":
                    "https://www.vrindavanmathurataxiservice.com/logo.png",
            },
        },
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item":
                    "https://www.vrindavanmathurataxiservice.com/",
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item":
                    "https://www.vrindavanmathurataxiservice.com/blogs",
            },
        ],
    };
    return (
        <>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        
                        blogSchema,
                        breadcrumbSchema,
                        
                    ]),
                }}
            />
            <Navbar />
            <BlogArchiveHero />
            <BlogNewsletter />
            <BlogCards />
            <BlogCTASection />
            <Footer />
        </>
    )
}