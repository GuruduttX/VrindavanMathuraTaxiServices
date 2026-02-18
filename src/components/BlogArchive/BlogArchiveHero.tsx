export default function BlogArchiveHero() {
  return (
    <section className="relative w-full h-[70vh] min-h-[450px] flex items-center justify-center text-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/Blogs/BlogArchivePageHero.webp"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/40 to-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-white">

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Travel Stories <span className="text-sky-500">&</span> Guides
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/90">
          Explore expert tips, destination insights, and spiritual journeys
          through Mathura, Vrindavan, and beyond.
        </p>

      </div>
    </section>
  );
}
