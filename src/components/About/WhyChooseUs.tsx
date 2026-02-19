"use client";

import { ShieldCheck, DollarSign, Headphones, BadgePercent, Sparkles } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Verified Drivers",
      desc: "All our drivers are professionally trained and background verified for your safety.",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      desc: "No hidden charges. What you see is what you pay — simple and honest pricing.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "Our support team is available round the clock to assist you anytime.",
    },
    {
      icon: BadgePercent,
      title: "Rental Discounts",
      desc: "Enjoy special offers and long-term rental benefits with better savings.",
    },
    {
      icon: Sparkles,
      title: "Clean Vehicles",
      desc: "Well-maintained, sanitized and comfortable cars for every journey.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sky-50 to-sky-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-sky-800 mb-3">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            We don’t just offer rides — we deliver comfort, trust and reliability.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-sky-300/40 cursor-pointer border border-transparent hover:border-sky-200"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-sky-600 to-sky-500 text-white mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-sky-800 mb-3 group-hover:text-sky-600 transition">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Bottom hover line */}
                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-sky-600 to-sky-500 rounded-full transition-all duration-500 group-hover:w-full"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
