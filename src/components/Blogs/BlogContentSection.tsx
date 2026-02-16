"use client";

import Link from "next/link";

export default function BlogContentSection() {
  return (
    <section className="w-full px-6 py-16 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* ================= LEFT CONTENT ================= */}
        <article className="lg:col-span-2 prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700">

          <h2>Introduction</h2>
          <p>
            Mathura is one of the most sacred cities in India and attracts
            thousands of visitors every year. If you are planning a trip,
            choosing the right taxi service can make your journey smooth
            and comfortable.
          </p>

          <h2>Why Choose a Taxi in Mathura?</h2>
          <p>
            Public transportation can be crowded and unpredictable. A private
            taxi gives you flexibility, comfort, and time efficiency.
          </p>

          <ul>
            <li>Comfortable travel</li>
            <li>Local experienced drivers</li>
            <li>Flexible sightseeing schedule</li>
            <li>Safe & secure journey</li>
          </ul>

          <h2>Top Places to Visit</h2>
          <p>
            Here are some must-visit attractions in Mathura and nearby areas:
          </p>

          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
            "Mathura is not just a destination, it's a spiritual experience."
          </blockquote>

          <h3>1. Shri Krishna Janmabhoomi</h3>
          <p>
            The birthplace of Lord Krishna and a major pilgrimage site for
            devotees.
          </p>

          <h3>2. Dwarkadhish Temple</h3>
          <p>
            Famous for its beautiful architecture and devotional atmosphere.
          </p>

          <h2>Conclusion</h2>
          <p>
            Booking a reliable taxi service ensures that your journey remains
            peaceful and hassle-free. Plan wisely and explore Mathura with
            comfort.
          </p>

        </article>

      
      </div>
    </section>
  );
}
