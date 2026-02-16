import {
    Car,
    MapPin,
    Clock,
    Headphones,
} from "lucide-react"

export default function RatingSection() {
    return (
        <section className="relative py-20 bg-gradient-to-b from-sky-50 to-white overflow-hidden">

            {/* Floating Glow Orbs */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl" />
            <div className="absolute top-40 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-6">

                {/* Section Heading */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl font-bold text-sky-900">
                        Vrindavan–Mathura Taxi Services
                    </h2>

                    <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 animate-pulse" />

                    <p className="mt-6 max-w-2xl mx-auto text-sky-700 text-lg">
                        Experience peaceful, reliable, and spiritually mindful taxi services
                        crafted specially for your Mathura–Vrindavan journey.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

                    <ServiceCard
                        icon={<Car size={30} />}
                        title="Comfortable AC Cabs"
                        desc="Clean, well-maintained vehicles ensuring a calm and relaxing yatra experience."
                    />

                    <ServiceCard
                        icon={<MapPin size={30} />}
                        title="Local Braj Experts"
                        desc="Drivers with deep knowledge of Vrindavan, Mathura & sacred Braj routes."
                    />

                    <ServiceCard
                        icon={<Clock size={30} />}
                        title="On-Time Pickups"
                        desc="We respect your darshan timings with punctual and reliable service."
                    />

                    <ServiceCard
                        icon={<Headphones size={30} />}
                        title="24×7 Support"
                        desc="Dedicated support before, during, and after your spiritual journey."
                    />

                </div>
            </div>
        </section>
    )
}

/* ---------------------------------- */
/* Service Card */
/* ---------------------------------- */

function ServiceCard({
    icon,
    title,
    desc,
}: {
    icon: React.ReactNode
    title: string
    desc: string
}) {
    return (
        <div
            className="
        group cursor-pointer
        relative
        bg-white
        rounded-3xl
        border border-sky-200
        p-8
        text-center
        shadow-[0_10px_30px_rgba(2,132,199,0.15)]
        transition-all duration-300
        hover:-translate-y-3
        hover:shadow-[0_0_50px_rgba(56,189,248,0.55)]
      "
        >
            {/* Glow Border */}
            <div
                className="
          pointer-events-none
          absolute inset-0
          rounded-3xl
          opacity-0
          group-hover:opacity-100
          transition
          bg-gradient-to-br
          from-sky-400/20
          to-blue-600/20
        "
            />

            {/* Icon */}
            <div
                className="
          mx-auto mb-6
          w-16 h-16
          flex items-center justify-center
          rounded-full
          bg-sky-100
          text-sky-600
          shadow-inner
          transition
          group-hover:scale-110
          group-hover:bg-sky-200
        "
            >
                {icon}
            </div>

            <h3 className="text-lg font-semibold text-sky-900 mb-3">
                {title}
            </h3>

            <p className="text-sky-700 leading-relaxed">
                {desc}
            </p>
        </div>
    )
}
