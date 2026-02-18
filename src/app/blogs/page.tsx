import BlogArchiveHero from "@/components/BlogArchive/BlogArchiveHero";
import BlogCards from "@/components/BlogArchive/BlogCards";
import BlogNewsletter from "@/components/BlogArchive/BlogNewsletter";
import BlogCTASection from "@/components/Blogs/BlogCTASection";
import Footer from "@/utils/Footer";
import Navbar from "@/utils/Navbar";

export default function page(){
    return (
        <>
         <Navbar/>
         <BlogArchiveHero/>
         <BlogNewsletter/>
         <BlogCards/>
         <BlogCTASection/>
         <Footer/>
        </>
    )
}