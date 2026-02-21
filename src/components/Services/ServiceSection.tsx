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

                        {/* Header */}
                        <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">

                            {/* Icon */}
                            <div className="
                            w-10 h-10 
                            sm:w-12 sm:h-12 
                            md:w-14 md:h-14
                            flex items-center justify-center 
                            rounded-xl 
                            bg-gradient-to-br from-blue-700 to-sky-500 
                            text-white 
                            transition-all duration-500 
                            group-hover:scale-110 group-hover:rotate-6 
                            shadow-lg
                            ">
                            <Icon size={20} className="sm:hidden" />
                            <Icon size={24} className="hidden sm:block md:hidden" />
                            <Icon size={28} className="hidden md:block" />
                            </div>

                            {/* Title */}
                            <h3 className="
                            text-lg 
                            sm:text-xl 
                            md:text-2xl 
                            lg:text-3xl 
                            font-bold 
                            text-blue-900 
                            group-hover:text-blue-600 
                            transition
                            leading-snug
                            ">
                            {service.title}
                            </h3>

                        </div>

                        {/* Description */}
                        <p className="
                            text-sm 
                            sm:text-base 
                            md:text-lg 
                            text-gray-600 
                            leading-relaxed 
                            mb-4 sm:mb-6
                        ">
                            {service.desc}
                        </p>

                        {/* Button */}
                        <button className="
                            px-4 py-2 
                            sm:px-5 sm:py-2.5 
                            md:px-6 md:py-3
                            text-sm 
                            sm:text-base 
                            rounded-xl 
                            cursor-pointer 
                            bg-blue-700 
                            text-white 
                            font-semibold 
                            hover:bg-blue-800 
                            transition-all duration-300 
                            hover:scale-105
                        ">
                            Explore Service →
                        </button>

                    </div>

                    {/* IMAGE SIDE */}
                   <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl group cursor-pointer">

                    <img
                        src={service.image}
                        alt={service.title}
                        className="
                        w-full 
                        h-[220px] 
                        sm:h-[280px] 
                        md:h-[320px] 
                        lg:h-[350px] 
                        xl:h-[400px]
                        object-cover 
                        transition-transform duration-700 
                        group-hover:scale-105 sm:group-hover:scale-110
                        "
                    />

                    {/* Overlay */}
                    <div className="
                        absolute inset-0 
                        bg-gradient-to-t 
                        from-blue-900/60 
                        via-blue-900/20 
                        to-transparent
                        opacity-70 sm:opacity-0 
                        sm:group-hover:opacity-100 
                        transition duration-500
                    "></div>

                </div>

                </div>
                );
            })}

    </section>)
}
