"use client";

import { useState } from "react";

type FAQSType = {
  question: string;
  answer: string;
};

export default function BlogFAQSection({ faqs }: { faqs: FAQSType[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-20 bg-gradient-to-br from-sky-50 via-white to-blue-50 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-3">
            Everything you need to know before booking your Mathura trip.
          </p>
        </div>

        {/* ================= MOBILE ACCORDION ================= */}
        <div className="lg:hidden space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden
                ${
                  isActive
                    ? "bg-sky-50 border-sky-400 shadow-md"
                    : "bg-white border-sky-100 hover:border-sky-300"
                }`}
              >
                {/* Question Button */}
                <button
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className="w-full text-left px-5 py-4 flex justify-between items-center"
                >
                  <span
                    className={`font-semibold transition-colors duration-300 ${
                      isActive ? "text-sky-700" : "text-gray-800"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Arrow */}
                  <span
                    className={`ml-4 transition-transform duration-500 ease-in-out text-sky-600 ${
                      isActive ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {/* Animated Answer */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-gray-700 leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>


        {/* ================= DESKTOP SPLIT LAYOUT ================= */}
        <div className="hidden lg:grid grid-cols-[1fr_1.5fr] gap-10">

          {/* LEFT QUESTION LIST */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer rounded-xl p-4 border transition-all duration-300 
                ${
                  activeIndex === index
                    ? "bg-white border-sky-400 shadow-md"
                    : "bg-white/70 border-gray-200 hover:border-sky-300 hover:shadow-sm"
                }`}
              >
                <h4
                  className={`font-medium ${
                    activeIndex === index
                      ? "text-sky-600"
                      : "text-gray-700"
                  }`}
                >
                  {faq.question}
                </h4>
              </div>
            ))}
          </div>

          {/* RIGHT ANSWER PANEL */}
          <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-sky-100 min-h-[200px]">
            <div className="absolute -top-5 left-8 bg-sky-600 text-white px-4 py-1 text-xs rounded-full shadow">
              Answer
            </div>

            <p className="text-gray-700 leading-relaxed mt-4">
              {faqs[activeIndex ?? 0]?.answer}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
