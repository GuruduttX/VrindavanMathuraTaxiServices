
import Footer from "@/utils/Footer";
import Navbar from "@/utils/Navbar";
import SideForm from "@/components/Blogs/SideForm";
import { notFound } from "next/navigation";
import HeroSection from "@/components/Blogs/HeroSection";
import BlogContentSection from "@/components/Blogs/BlogContentSection";
import BlogFAQSection from "@/components/Blogs/BlogFAQSection";
import BlogCTASection from "@/components/Blogs/BlogCTASection";
import { supabase } from "@/lib/supabase/SupabaseConfig";


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


  return (
    <>
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
