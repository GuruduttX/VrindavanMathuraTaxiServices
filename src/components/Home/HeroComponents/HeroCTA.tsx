import { IndianRupee, MessageCircle, Phone } from 'lucide-react'

const HeroCTA = () => {
  return (
    <div className="absolute left-10 md:left-40 top-4 md:top-7 bg-white flex md:flex-row items-stretch justify-center md:justify-between lg:justify-between gap-1 md:gap-0 md:px-7 py-2 rounded-3xl border border-sky-400 shadow shadow-[#03a4fb] w-[80%] md:w-[75%]">

      {/* WHATSAPP */}
      <div className="px-6 md:px-10">
        <a
          href="https://wa.me/7302265809"
          target="_blank"
          className="group flex flex-col items-center justify-center text-xs font-medium text-green-600 hover:text-green-700 transition"
        >
          <span className="p-3 rounded-full bg-green-50 group-hover:bg-green-100 transition">
            <MessageCircle className="h-3 md:h-5 lg:h-8 w-auto" />
          </span>
          <span className="mt-1">WhatsApp</span>
          <span className="text-[10px] text-gray-400 group-hover:text-green-600">
            Fast Reply
          </span>
        </a>
      </div>

      {/* DIVIDER */}
      <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-sky-300 to-transparent" />

      {/* CALL */}
      <div className="px-6 md:px-10">
        <button
          onClick={() => (window.location.href = "tel:+917302265809")}
          className="group flex flex-col items-center justify-center text-xs font-medium text-sky-600 hover:text-sky-700 transition cursor-pointer"
        >
          <span className="p-3 rounded-full bg-sky-50 group-hover:bg-sky-100 transition">
            <Phone className="h-3 md:h-5 lg:h-8 w-auto" />
          </span>
          <span className="mt-1">Call Now</span>
          <span className="text-[10px] text-gray-400 group-hover:text-sky-600 whitespace-nowrap">
            24×7 Support
          </span>
        </button>
      </div>

      {/* DIVIDER */}
      <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-sky-300 to-transparent" />

      {/* GET FARE */}
      <div className="px-6 md:px-10">
        <button className="group flex flex-col items-center justify-center text-xs font-medium text-blue-600 hover:text-blue-700 transition cursor-pointer">
          <span className="p-3 rounded-full bg-blue-50 group-hover:bg-blue-100 transition">
            <IndianRupee className="h-3 md:h-5 lg:h-8 w-auto" />
          </span>
          <span className="mt-1">Get Fare</span>
          <span className="text-[10px] text-gray-400 group-hover:text-blue-600 whitespace-nowrap">
            Instant Quote
          </span>
        </button>
      </div>

    </div>
  )
}

export default HeroCTA
