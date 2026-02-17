"use client";

export default function BlogContentSection() {
  return (
    <section className="w-full bg-white">
      <div className="flex items-center gap-4 pb-6 border-b border-gray-200 mb-3">

        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-sky-300 shadow-sm ">
          <img
            src="/images/author.jpg"
            alt="Rohit Juyal"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-900">
            Rohit Juyal
          </p>

          <p className="text-xs text-gray-500">
            March 18, 2025 • Travel Guide • 5 min read
          </p>
        </div>

        </div>

      <article className="space-y-8 text-gray-700 leading-relaxed">

        {/* INTRO */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Introduction
          </h2>
          <p>
            Mathura, the birthplace of Lord Krishna, is one of the most sacred
            cities in India. Every year thousands of devotees and travelers
            visit this spiritual destination to experience its divine energy,
            temples, ghats and cultural heritage.
          </p>
          <p>
            Whether you are planning a pilgrimage trip, family vacation or a
            weekend getaway, choosing the right transportation is essential.
            A reliable taxi service ensures your journey remains smooth,
            comfortable and time-efficient.
          </p>
        </div>

        {/* WHY TAXI */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Why Choose a Taxi Service in Mathura?
          </h2>

          <p>
            Public transportation can often be crowded and unpredictable,
            especially during festive seasons like Janmashtami or Holi.
            A private taxi offers flexibility and comfort.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Comfortable air-conditioned travel</li>
            <li>Professional and local experienced drivers</li>
            <li>Flexible sightseeing schedule</li>
            <li>Pickup and drop from railway station or hotel</li>
            <li>Safe & secure journey for families</li>
          </ul>

          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
            "Travel is not just about reaching a destination — it’s about
            experiencing every moment comfortably."
          </blockquote>
        </div>

        {/* PLACES */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Top Places to Visit in Mathura & Vrindavan
          </h2>

          <h3 className="text-xl font-semibold text-gray-800">
            1. Shri Krishna Janmabhoomi
          </h3>
          <p>
            This sacred temple complex is believed to be the birthplace of
            Lord Krishna. It is one of the most important pilgrimage sites
            for Hindus.
          </p>

          <h3 className="text-xl font-semibold text-gray-800">
            2. Dwarkadhish Temple
          </h3>
          <p>
            Famous for its beautiful architecture and devotional atmosphere,
            this temple attracts thousands of devotees every day.
          </p>

          <h3 className="text-xl font-semibold text-gray-800">
            3. Prem Mandir
          </h3>
          <p>
            Located in Vrindavan, Prem Mandir is known for its stunning white
            marble structure and evening light show.
          </p>

          <h3 className="text-xl font-semibold text-gray-800">
            4. Banke Bihari Temple
          </h3>
          <p>
            A must-visit spiritual place where devotees gather to seek
            blessings of Lord Krishna.
          </p>
        </div>

        {/* BEST TIME */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Best Time to Visit Mathura
          </h2>

          <p>
            The ideal time to visit Mathura is from October to March when
            the weather remains pleasant. Festivals like Janmashtami and
            Holi are celebrated grandly here, attracting large crowds.
          </p>

          <p>
            If you prefer a peaceful experience, avoid peak festival dates
            and weekends.
          </p>
        </div>

        {/* PRICING INFO */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Taxi Pricing & Packages
          </h2>

          <p>
            Taxi services in Mathura offer various packages including
            local sightseeing, one-day tours, and multi-day Vrindavan
            exploration packages.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Local sightseeing (4-6 hours)</li>
            <li>Full-day Mathura & Vrindavan tour</li>
            <li>Agra & Taj Mahal add-on trip</li>
            <li>Customized spiritual tour packages</li>
          </ul>
        </div>

        {/* FAQ SECTION */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <div>
            <h3 className="font-semibold text-gray-800">
              Is taxi service available 24/7?
            </h3>
            <p>
              Yes, most taxi providers in Mathura offer round-the-clock
              service including early morning temple visits.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">
              Are drivers familiar with local temples?
            </h3>
            <p>
              Local drivers are well-experienced and aware of temple timings,
              traffic conditions and best visiting hours.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">
              Can I book taxi online?
            </h3>
            <p>
              Yes, you can easily enquire and book your taxi online
              through our contact form or WhatsApp support.
            </p>
          </div>
        </div>

        {/* CONCLUSION */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Conclusion
          </h2>
          <p>
            Mathura is not just a travel destination; it is a spiritual
            experience. Booking a reliable taxi service ensures that your
            journey remains peaceful, organized and memorable.
          </p>
          <p>
            Plan your visit wisely, choose comfort over stress, and explore
            Mathura with confidence.
          </p>
        </div>

      </article>
    </section>
  );
}
