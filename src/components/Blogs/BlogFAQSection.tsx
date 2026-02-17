"use client";

import { useState } from "react";

export default function BlogFAQSection() {
  const faqs = [
    {
      question: "Is taxi service available 24/7 in Mathura?",
      answer:
        "Yes, most professional taxi services in Mathura operate 24/7 including early morning temple visits and late-night drop-offs.",
    },
    {
      question: "How much does a local sightseeing taxi cost?",
      answer:
        "Pricing depends on duration and vehicle type. Half-day and full-day packages are available with flexible options.",
    },
    {
      question: "Can I book taxi online before arriving?",
      answer:
        "Yes, you can enquire and pre-book your taxi online for a hassle-free experience once you arrive in Mathura.",
    },
    {
      question: "Are drivers familiar with temple timings?",
      answer:
        "Local drivers are experienced and well aware of temple schedules, traffic patterns, and peak visiting hours.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full py-20 bg-gradient-to-br from-sky-50 via-white to-blue-50 px-6 lg:px-16">
      <div className="px-6 lg:px-16">

        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-3">
            Everything you need to know before booking your Mathura trip.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10">

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
              {faqs[activeIndex].answer}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
