"use client";

export default function BlogCTASection() {
  return (
    <section className="w-full py-24 bg-gray-100">
      <div className="px-6 lg:px-16">

        {/* Rounded Blue Container */}
        <div className="relative overflow-hidden rounded-3xl 
        bg-gradient-to-r from-sky-700 to-blue-600 
        px-8 py-10 lg:px-20 lg:py-14">

          <div className="flex flex-col lg:flex-row items-center gap-10">

            {/* LEFT IMAGE */}
            <div className="relative w-full lg:w-[420px] flex justify-center lg:justify-start">

              <img
                src="/images/Blogs/Mathura taxi services reviews on display.webp"
                alt="Mathura Taxi Reviews"
                className="w-[300px] lg:w-[420px] object-contain drop-shadow-2xl"
              />

            </div>

            {/* RIGHT CONTENT */}
            <div className="text-white max-w-2xl">

              <span className="inline-block bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-sm mb-6 tracking-wide">
                Mathura Travel Guide
              </span>

              <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight">
                Planning a Trip to Mathura?
              </h2>

              <p className="mt-6 text-lg text-sky-100 leading-relaxed">
                Book a reliable taxi service and explore Mathura, Vrindavan
                and nearby destinations with comfort and peace of mind.
              </p>

              <button
                className="mt-10 px-8 py-4 rounded-xl 
                bg-yellow-400 text-gray-900 font-semibold 
                shadow-lg transition-all duration-300
                hover:scale-105 hover:shadow-2xl"
              >
                Enquire Now →
              </button>

            </div>

          </div>

          {/* Decorative Glow */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-sky-400 rounded-full blur-3xl opacity-30"></div>

        </div>

      </div>
    </section>
  );
}
