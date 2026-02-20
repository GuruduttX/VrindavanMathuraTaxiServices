"use client";

import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="w-full bg-gray-100 py-14 md:py-20 mt-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/*  LEFT CONTENT */}
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Our Mission
          </h2>

          <div className="mb-6 h-1 w-28 sm:w-36 bg-gradient-to-r from-sky-500 via-indigo-500 to-transparent rounded-full"></div>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Our mission is to provide safe, reliable, and affordable
            long-term taxi services for individuals and businesses.
            We believe transportation should be comfortable, punctual,
            and stress-free.
          </p>

          <p className="text-gray-600 leading-relaxed mt-4 text-sm sm:text-base">
            By combining verified drivers, clean vehicles, and
            customer-first service, we aim to build long-term trust
            with every ride we offer.
          </p>
        </div>

        {/* RIGHT IMAGE  */}
        <div className="relative w-full max-w-[480px] mx-auto md:mx-0 aspect-[480/430]">

          {/* Background blob */}
          <div className="absolute -bottom-4 -left-4 w-full h-full bg-gray-200 
            rounded-[60%_40%_55%_45%/55%_45%_60%_40%]"></div>

          {/* Image blob */}
          <div className="relative w-full h-full overflow-hidden shadow-xl
            rounded-[60%_40%_55%_45%/55%_45%_60%_40%]">
            
            <Image
              src="/images/About/MissionImage.webp"
              alt="Our Mission"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 480px"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}