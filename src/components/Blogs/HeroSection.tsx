"use client";

import Link from "next/link";
import { useState } from "react";
import EnquiryPopup from "@/utils/EnquiryPopUp";

type TypeBlog = {

  title: string;
  category: string,
  slug: string,
  author: string,
  metaTitle: string,
  metaDescription: string,
  image: string,
  alt: string,
  subContent: string
  content: string
  schemaTitle: string,
  schemaDescription: string
  created_at : string;
}

type FAQ = {

  id: string,
  question: string,
  answer: string

}
export default function BlogHero({blog}: {blog : TypeBlog}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <EnquiryPopup open={isOpen} onClose={()=>setIsOpen(false)}/>
       <section className="relative w-full px-6 py-12 lg:px-16">

      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-100 via-blue-50 to-white" />

      {/* ================= Breadcrumbs ================= */}
      <nav className="text-sm text-blue-500 mb-6 flex flex-wrap mt-16 ml-18">
        <Link href="/" className="hover:text-blue-700 transition">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link
          href="/blogs"
          className="hover:text-blue-700 transition cursor-pointer"
        >
          Blog
        </Link>
        <span className="mx-2">/</span>
        <span className="font-medium text-blue-700">
         {blog.title}
        </span>
      </nav>

      {/* ================= Hero Image ================= */}
      <div className="mx-auto max-w-7xl">
        <div className="relative w-full h-[300px] md:h-[420px] rounded-3xl overflow-hidden group cursor-pointer">

          <img
            src={blog.image}
            alt={blog.alt}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />

          {/* Floating Badge */}
          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold text-blue-600 shadow">
            ✍️ {blog.category} Blog
          </div>
        </div>
      </div>

      {/* ================= Bottom Content ================= */}
      <div className="mx-auto max-w-7xl mt-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

        {/* Left Side */}
        <div className="flex-1 min-w-0">

          {/* Title */}
          <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight">
            {blog.title}
          </h1>

          {/* Author + Date */}
          <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-600">

            {/* Author */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                {blog?.author[0]}
              </div>
              <span>
                By <span className="font-semibold text-gray-800">{blog?.author}</span>
              </span>
            </div>

            <span className="hidden sm:inline">•</span>

            {/* Date */}
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-blue-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>Published on {blog?.created_at && (
                        <> · {new Date(blog.created_at).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                        })}</>
                    )}</span>
            </div>

          </div>
        </div>

        {/* Right Side – Let's Connect Card */}
        <div
          className="
            w-full lg:w-auto
            bg-white/80 backdrop-blur-md 
            border border-blue-100 
            shadow-xl rounded-2xl
            p-6 sm:p-8
            flex flex-col sm:flex-row
            items-center sm:items-start
            justify-between
            gap-6
            text-center sm:text-left
          "
        >
          {/* Text Section */}
          <div className="flex-1">
            <p className="text-xs uppercase tracking-wide text-gray-500">
              Have Questions?
            </p>

            <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-blue-600">
              Let’s Connect
            </h3>

            <span className="inline-block mt-3 text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-medium">
              Free Consultation
            </span>
          </div>

          {/* Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="
              w-full sm:w-auto
              px-6 sm:px-8 py-3 sm:py-4
              rounded-xl
              bg-gradient-to-r from-blue-600 to-blue-700
              text-white font-semibold
              shadow-md
              hover:shadow-xl hover:scale-105
              transition-all duration-300 cursor-pointer
            "
          >
            Enquire Now →
          </button>
        </div>

      </div>
    </section>
    </>
   
  );
}
