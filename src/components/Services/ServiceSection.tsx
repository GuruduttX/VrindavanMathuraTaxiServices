import {
  Car,
  MapPinned,
  
  CalendarClock,
  Briefcase,
  Headphones,
} from "lucide-react";

export default function(){
   const services = [
        {
            icon: Car,
            title: "Local Car Rental",
            desc: "Comfortable cars for city travel and daily commutes.",
            image:
            "/images/About/RentalService.webp",
        },
        {
            icon: MapPinned,
            title: "Outstation Trips",
            desc: "Smooth long-distance travel with professional drivers.",
            image:
            "/images/About/OutStation.webp",
        },
        {
            icon: Briefcase,
            title: "Airport Transfers",
            desc: "On-time pickup and drop services available 24/7.",
            image:
            "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200",
        },
        {
            icon: CalendarClock,
            title: "Hourly Rentals",
            desc: "Flexible rental packages based on your time needs.",
            image:
            "/images/About/Rental.webp",
        },
   ];

    

  return  ( <section className="max-w-7xl mx-auto px-6 py-24 space-y-28">

            {services.map((service, index) => {
                const Icon = service.icon;
                const isEven = index % 2 === 0;

                return (
                <div
                    key={index}
                    className={`grid md:grid-cols-2 gap-12 items-center ${
                    !isEven ? "md:[&>*:first-child]:order-2" : ""
                    }`}
                >
                    {/* TEXT SIDE */}
                    <div className="group cursor-pointer">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-700 to-sky-500 text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                        <Icon size={28} />
                        </div>

                        <h3 className="text-3xl font-bold text-blue-900 group-hover:text-blue-600 transition">
                        {service.title}
                        </h3>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                        {service.desc}
                    </p>

                    <button className="px-6 py-3 rounded-xl cursor-pointer bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-all duration-300 hover:scale-105">
                        Explore Service →
                    </button>
                    </div>

                    {/* IMAGE SIDE */}
                    <div className="relative overflow-hidden rounded-3xl shadow-xl group cursor-pointer">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                    </div>
                </div>
                );
            })}

    </section>)
}
