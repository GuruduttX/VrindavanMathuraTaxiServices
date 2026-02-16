import { ArrowLeftRight, ChevronDown } from 'lucide-react'
import React from 'react'

const AirportTripFilter = () => {
  return (
    <div className="w-full bg-white rounded-2xl overflow-hidden shadow-sm">
      <div className="grid grid-cols-13 items-center px-3">

        {/* FROM */}
        <div className="col-span-2 p-7 bg-sky-50 rounded-2xl border-l-2 border-sky-200">
          <p className="text-sm text-slate-500">From</p>
          <h2 className="text-2xl font-bold text-slate-900">Mumbai</h2>
        </div>

        {/* SWAP */}
        <div className="col-span-1 flex justify-center">
          <button className="w-10 h-10 rounded-full bg-white border border-sky-200 flex items-center justify-center shadow hover:bg-sky-50 transition">
            <ArrowLeftRight className="w-5 h-5 text-sky-600" />
          </button>
        </div>

        {/* TO */}
        <div className="col-span-2 p-7 bg-sky-50 rounded-2xl  border-l-2 border-sky-200">
          <p className="text-sm text-slate-500">To</p>
          <h2 className="text-2xl font-bold text-slate-900">Bangalore</h2>
        </div>

        {/* DEPARTURE */}
        <div className="col-span-2 p-5 bg-sky-50 rounded-2xl border-l-2 border-sky-200 ml-3 m-2">
          <div className="flex items-center gap-1 text-sm text-slate-500">
            Departure <ChevronDown className="w-4 h-4" />
          </div>
          <h2 className="text-2xl font-bold">
            14 <span className="text-base font-medium">Feb’26</span>
          </h2>
          <p className="text-sm text-slate-500">Saturday</p>
        </div>

        {/* RETURN */}
        <div className="col-span-2 p-5 bg-sky-50 rounded-2xl  border-l-2 border-sky-200 m-2">
          <div className="flex items-center gap-1 text-sm text-slate-500">
            Return <ChevronDown className="w-4 h-4" />
          </div>
          <h2 className="text-2xl font-bold">
            14 <span className="text-base font-medium">Feb’26</span>
          </h2>
          <p className="text-sm text-slate-500">Saturday</p>
        </div>

        {/* PICKUP */}
        <div className="col-span-2 p-7 bg-sky-50 rounded-2xl  border-l-2 border-sky-200 m-2">
          <div className="flex items-center gap-1 text-sm text-slate-500">
            Pickup-Time <ChevronDown className="w-4 h-4" />
          </div>
          <h2 className="text-xl font-bold">10:00</h2>
          <p className="text-sm text-slate-500">AM</p>
        </div>

        {/* DROP */}
        <div className="col-span-2 p-7 bg-sky-50 rounded-2xl  border-l-2 border-sky-200 m-2">
          <div className="flex items-center gap-1 text-sm text-slate-500">
            Drop Time <ChevronDown className="w-4 h-4" />
          </div>
          <h2 className="text-xl font-bold">09:45</h2>
          <p className="text-sm text-slate-500">PM</p>
        </div>

      </div>
    </div>
  )
}

export default AirportTripFilter