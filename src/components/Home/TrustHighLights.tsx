import Image from "next/image"
import { CheckCircle2, Clock, IndianRupee } from "lucide-react"

const highlights = [
  {
    title: "Book Now",
    subtitle: "at zero cost",
    icon: CheckCircle2,
    image: "/images/Home/NewImage.jpg",
    gradient: "from-blue-500/20 to-cyan-400/20",
  },
  {
    title: "Book up to 1 hour",
    subtitle: "before your trip starts",
    icon: Clock,
    image: "/images/Home/NewImage.jpg",
    gradient: "from-slate-900/60 to-slate-900/90",
    dark: true,
  },
  {
    title: "Free Cancellations",
    subtitle: "up to 1 hour before your trip",
    icon: IndianRupee,
    image: "/images/Home/NewImage.jpg",
    gradient: "from-emerald-400/20 to-cyan-300/20",
  },
]

export default function TrustHighlights() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {highlights.map((item, i) => (
          <div
            key={i}
            className="relative group rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer h-[30vh]"
          >
            {/* Background Image */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />

            {/* Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${item.gradient}`}
            />

            {/* Content */}
            <div className="relative z-10 h-full p-6 flex flex-col justify-between">
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center ${
                  item.dark ? "bg-white/10" : "bg-white"
                }`}
              >
                <item.icon
                  className={`h-7 w-7 ${
                    item.dark ? "text-cyan-400" : "text-blue-600"
                  }`}
                />
              </div>

              <div>
                <h3
                  className={`text-2xl font-bold ${
                    item.dark ? "text-white" : "text-slate-900"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`mt-1 text-sm ${
                    item.dark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {item.subtitle}
                </p>
              </div>
            </div>

            {/* Glass Effect Border */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
          </div>
        ))}
      </div>
    </section>
  )
}
