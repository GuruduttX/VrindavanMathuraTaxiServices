import Footer from "@/utils/Footer";
import Navbar from "@/utils/Navbar";
import SideForm from "@/components/Blogs/SideForm";
import { notFound } from "next/navigation";
import HeroSection from "@/components/Blogs/HeroSection";
import BlogContentSection from "@/components/Blogs/BlogContentSection";
import BlogFAQSection from "@/components/Blogs/BlogFAQSection";
import BlogCTASection from "@/components/Blogs/BlogCTASection";
import { supabase } from "@/lib/supabase/SupabaseConfig";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data } = await supabase
    .from("Blog")
    .select("*")
    .eq("slug", slug)
    .single();

  const baseUrl = "https://www.vrindavanmathurataxiservice.com";
  const url = `${baseUrl}/blogs/${slug}`;

  return {
    title:
      data?.meta?.title ??
      `${data?.title} | Mathura Vrindavan Travel Guide`,
    description:
      data?.meta?.description ??
      data?.excerpt ??
      "Read our detailed Mathura and Vrindavan travel guide with temple tips and taxi information.",

    keywords: data?.tags ?? [
      "Mathura travel guide",
      "Vrindavan temple guide",
      "Govardhan parikrama",
      "Barsana tour",
      "Mathura taxi service",
    ],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: data?.meta?.title ?? data?.title,
      description:
        data?.meta?.description ?? data?.excerpt,
      url,
      type: "article",
      siteName: "Vrindavan Mathura Taxi Service",

    },

    twitter: {
      card: "summary_large_image",
      title: data?.title,
      description: data?.meta?.description,

    },

    robots: {
      index: true,
      follow: true,
    },
  };
}


async function getBlog(slug: string) {
  const { data, error } = await supabase
    .from("Blog")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Error fetching blog:", error.message);
    return null;
  }

  return data;
}




const page = async ({ params }: { params: Promise<{ slug: string }> }) => {

  const { slug } = await params;

  const { data, error } = await supabase
    .from("Blog")
    .select("id, slug")
    .eq("slug", slug)
    .maybeSingle();


  if (!data || error) {

    notFound();

  }

  const blog = await getBlog(slug);

  const baseUrl = "https://www.vrindavanmathurataxiservice.com";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${baseUrl}/blog/${blog.slug}#article`,
    "headline": blog.schema?.title || blog.title,
    "description": blog.schema?.description || blog.excerpt,
    "image": blog.image,
    "author": {
      "@type": "Organization",
      "name": "Vrindavan Mathura Taxi Service",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Vrindavan Mathura Taxi Service",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`,
      },
    },
    "datePublished": blog.created_at,
    "dateModified": blog.updated_at || blog.created_at,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/blogs/${blog.slug}`,
    },
    "articleSection": blog.category || "Travel Guide",
    "keywords": blog.tags?.join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${baseUrl}/`,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${baseUrl}/blog`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": blog.title,
        "item": `${baseUrl}/blog/${blog.slug}`,
      },
    ],
  };

  const faqSchema =
    blog.faqs?.length > 0
      ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": blog.faqs.map((faq: any) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      }
      : null;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Vrindavan Mathura Taxi Service",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "description":
      "Reliable taxi and car rental services for Mathura, Vrindavan, Govardhan and Barsana.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vrindavan",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN",
    },
  };


  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [
              organizationSchema,
              articleSchema,
              breadcrumbSchema,
              faqSchema,
            ].filter(Boolean)
          ),
        }}
      />


      <Navbar />

      <HeroSection blog={blog} />


      {/* MAIN CONTENT + SIDEBAR */}
      <section className="w-full min-h-screen bg-white">

        {/* Full width background wrapper */}
        <div className="w-full py-12">

          {/* Centered Container */}
          <div className="px-6 lg:px-30">

            {/* GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16">

              {/* LEFT CONTENT */}
              <main className="space-y-12">
                <BlogContentSection content={blog.content} />
              </main>

              {/* RIGHT SIDEBAR */}
              <aside className="hidden md:block">
                <div className="sticky top-28">
                  <SideForm />
                </div>
              </aside>

            </div>

          </div>

        </div>
      </section>

      <BlogCTASection />

      <BlogFAQSection faqs={blog.faqs} />


      {/* BELOW CONTENT */}

      <Footer />
    </>
  );
};

export default page;
