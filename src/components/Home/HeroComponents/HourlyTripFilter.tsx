import { ArrowLeftRight, ChevronDown } from 'lucide-react'
import React from 'react'

const HourlyTripFilter = () => {
  return (
    <div className="w-full bg-white rounded-2xl overflow-hidden shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-13 items-center px-3">

        {/* ================= FROM ================= */}
        <div className="col-span-2">

          {/* MOBILE */}
          <div className="lg:hidden flex items-center justify-between bg-sky-50 border border-sky-200 rounded-xl px-4 py-3 mb-2">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-wide text-slate-500">From</span>
              <span className="text-base font-semibold">Mumbai</span>
            </div>
            <span className="text-sky-500 text-sm font-medium">Change</span>
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:block p-7 bg-sky-50 rounded-2xl border-l-2 border-sky-200">
            <p className="text-sm text-slate-500">From</p>
            <h2 className="text-2xl font-bold text-slate-900">Mumbai</h2>
          </div>
        </div>

        {/* ================= SWAP ================= */}
        <div className="col-span-1 flex justify-center my-3 lg:my-0">
          <button className="w-10 h-10 rounded-full bg-white border border-sky-200 flex items-center justify-center shadow hover:bg-sky-50 transition">
            <ArrowLeftRight className="w-5 h-5 text-sky-600" />
          </button>
        </div>

        {/* ================= TO ================= */}
        <div className="col-span-2">

          {/* MOBILE */}
          <div className="lg:hidden flex items-center justify-between bg-sky-50 border border-sky-200 rounded-xl px-4 py-3 mb-2">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-wide text-slate-500">To</span>
              <span className="text-base font-semibold">Bangalore</span>
            </div>
            <span className="text-sky-500 text-sm font-medium">Change</span>
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:block p-7 bg-sky-50 rounded-2xl border-l-2 border-sky-200">
            <p className="text-sm text-slate-500">To</p>
            <h2 className="text-2xl font-bold text-slate-900">Bangalore</h2>
          </div>
        </div>

        <div className='sm:hidden py-2 w-full'/>


        {/* ================= DEPARTURE ================= */}
        <div className="col-span-2">

          {/* MOBILE */}
          <div className="lg:hidden flex items-center justify-between bg-sky-50 border border-sky-200 rounded-xl px-4 py-3 mb-2">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-wide text-slate-500">Departure</span>
              <span className="text-base font-semibold">14 Feb’26</span>
              <span className="text-xs text-slate-500">Saturday</span>
            </div>
            <ChevronDown className="w-4 h-4 text-sky-500" />
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:block p-5 bg-sky-50 rounded-2xl border-l-2 border-sky-200 ml-3 m-2">
            <div className="flex items-center gap-1 text-sm text-slate-500">
              Departure <ChevronDown className="w-4 h-4" />
            </div>
            <h2 className="text-2xl font-bold">
              14 <span className="text-base font-medium">Feb’26</span>
            </h2>
            <p className="text-sm text-slate-500">Saturday</p>
          </div>
        </div>

        <div className='sm:hidden py-2 w-full'/>


        {/* ================= RETURN ================= */}
        <div className="col-span-2">

          {/* MOBILE */}
          <div className="lg:hidden flex items-center justify-between bg-sky-50 border border-sky-200 rounded-xl px-4 py-3 mb-2">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-wide text-slate-500">Return</span>
              <span className="text-base font-semibold">14 Feb’26</span>
              <span className="text-xs text-slate-500">Saturday</span>
            </div>
            <ChevronDown className="w-4 h-4 text-sky-500" />
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:block p-5 bg-sky-50 rounded-2xl border-l-2 border-sky-200 m-2">
            <div className="flex items-center gap-1 text-sm text-slate-500">
              Return <ChevronDown className="w-4 h-4" />
            </div>
            <h2 className="text-2xl font-bold">
              14 <span className="text-base font-medium">Feb’26</span>
            </h2>
            <p className="text-sm text-slate-500">Saturday</p>
          </div>
        </div>

        <div className='sm:hidden py-2 w-full'/>


        {/* ================= PICKUP ================= */}
        <div className="col-span-2">

          {/* MOBILE */}
          <div className="lg:hidden flex items-center justify-between bg-sky-50 border border-sky-200 rounded-xl px-4 py-3 mb-2">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-wide text-slate-500">Pickup</span>
              <span className="text-base font-semibold">10:00 AM</span>
            </div>
            <ChevronDown className="w-4 h-4 text-sky-500" />
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:block p-7 bg-sky-50 rounded-2xl border-l-2 border-sky-200 m-2">
            <div className="flex items-center gap-1 text-sm text-slate-500">
              Pickup-Time <ChevronDown className="w-4 h-4" />
            </div>
            <h2 className="text-xl font-bold">10:00</h2>
            <p className="text-sm text-slate-500">AM</p>
          </div>
        </div>

        <div className='sm:hidden py-2 w-full'/>


        {/* ================= DROP ================= */}
        <div className="col-span-2">

          {/* MOBILE */}
          <div className="lg:hidden flex items-center justify-between bg-sky-50 border border-sky-200 rounded-xl px-4 py-3 mb-2">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-wide text-slate-500">Drop</span>
              <span className="text-base font-semibold">09:45 PM</span>
            </div>
            <ChevronDown className="w-4 h-4 text-sky-500" />
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:block p-7 bg-sky-50 rounded-2xl border-l-2 border-sky-200 m-2">
            <div className="flex items-center gap-1 text-sm text-slate-500">
              Drop Time <ChevronDown className="w-4 h-4" />
            </div>
            <h2 className="text-xl font-bold">09:45</h2>
            <p className="text-sm text-slate-500">PM</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HourlyTripFilter
