"use client";

import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="w-full bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Our Mission
          </h2>
          <div className="mb-4 h-1 w-34 -mt-3 bg-linear-to-r from-sky-500 via-indigo-500 to-transparent rounded-full"></div>



          <p className="text-gray-600 leading-relaxed">
            Our mission is to provide safe, reliable, and affordable
            long-term taxi services for individuals and businesses.
            We believe transportation should be comfortable, punctual,
            and stress-free.
          </p>

          <p className="text-gray-600 leading-relaxed mt-4">
            By combining verified drivers, clean vehicles, and
            customer-first service, we aim to build long-term trust
            with every ride we offer.
          </p>
        </div>

        <div className="relative w-[480px] h-[430px]">

        {/* Background blob */}
        <div className="absolute -bottom-6 -left-6 w-full h-full bg-gray-200 
            rounded-[60%_40%_55%_45%/55%_45%_60%_40%]"></div>

        {/* Image blob */}
        <div className="relative w-full h-full overflow-hidden shadow-xl
            rounded-[60%_40%_55%_45%/55%_45%_60%_40%]">
            <img
            src="\images\About\MissionImage.webp"
            alt="Our Mission"
            
            className="object-cover w-full h-full"
            />
        </div>

        </div>


      </div>
    </section>
  );
}
