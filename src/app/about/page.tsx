"use client";

import MissionSection from "@/components/About/MissionSection";
import StorySection from "@/components/About/StorySection";
import WhyChooseUs from "@/components/About/WhyChooseUs";
import Navbar from "@/utils/Navbar";
import React from "react";
import Footer from "@/utils/Footer";
import BlogCTASection from "@/components/Blogs/BlogCTASection";
export default function AboutPage() {
  return (
    <main className="w-full bg-white text-gray-800">

      {/* Hero Section */}
      <Navbar/>

      <MissionSection/>
      <StorySection/>
      

      <WhyChooseUs/>
      
      <BlogCTASection/>

      <Footer/>

    </main>
  );
}
