export default function ProductCard() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-sky-100 p-5 flex justify-between items-center hover:shadow-md transition">

      {/* LEFT */}
      <div className="flex gap-4">
        <div className="w-20 h-16 bg-sky-100 rounded-md flex items-center justify-center text-sky-600 font-bold">
          CAB
        </div>

        <div>
          <h3 className="font-semibold text-sky-900">
            WagonR, Swift <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded ml-2">NEW</span>
          </h3>
          <p className="text-sm text-sky-600">4 Seats • AC • 3650 kms included</p>
          <p className="text-xs text-sky-500 mt-1">CNG / Diesel</p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="text-right">
        <p className="text-sm line-through text-gray-400">₹49,045</p>
        <p className="text-xl font-bold text-sky-600">₹42,171</p>
        <button className="mt-3 bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-lg text-sm">
          Select Cab
        </button>
      </div>

    </div>
  )
}
