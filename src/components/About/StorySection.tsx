"use client";

import Image from "next/image";

export default function StorySection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12">
          Our Story
        </h2>
        <div className="-mt-8 h-1 w-44 mx-auto mb-8 bg-linear-to-r from-sky-500 via-indigo-500 to-transparent rounded-full"></div>

        

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <div className="relative w-full h-[350px]">
            <img
              src="/images/About/About-Hero.webp"  
              alt="Our Story"
              
              className="object-cover rounded-3xl shadow-lg h-full w-full"
            />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-gray-600 leading-relaxed">
              We started our journey with a simple goal — to make
              long-term taxi services more reliable and transparent.
              Many people struggle with daily commute issues, hidden
              charges, and unreliable drivers.
            </p>

            <p className="text-gray-600 leading-relaxed mt-4">
              That’s why we built a service focused on consistency,
              safety, and affordability. Today, we proudly serve
              hundreds of happy customers who trust us for their
              monthly and corporate travel needs.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
