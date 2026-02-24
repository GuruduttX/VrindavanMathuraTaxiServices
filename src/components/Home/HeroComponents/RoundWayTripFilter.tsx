import { ArrowLeftRight, ChevronDown } from 'lucide-react'
import React, { useRef, useState } from 'react'
import CityDropdown from './CityDropDown';
import DateRangePicker from './DateRangePicker';
import { DateRange } from "react-day-picker"
import TimePicker from '@/utils/TimePicker';

const RoundWayTripFilter = ({ filter, onChange }: any) => {

  const [isFromOpen, setIsFromOpen] = useState(false)
  const [isToOpen, setIsToOpen] = useState(false)
  const [returnOpen, setReturnOpen] = useState(false)
  const [departureOpen, setDepartureOpen] = useState(false);
  const [pickupOpen, setPickupOpen] = useState(false);
  const pickupRef = useRef<HTMLDivElement>(null)
  const returnRef = useRef<HTMLDivElement>(null);
  const departureRef = useRef<HTMLDivElement>(null);


  const handleSwap = () => {
    const temp = filter.from;
    onChange("from", filter.to);
    onChange("to", temp);

  }


  return (

     <div className="w-full bg-white rounded-2xl overflow-visible shadow-sm relative">
        <div className="grid grid-cols-1 lg:grid-cols-13 items-center px-3">

          {/* ================= FROM ================= */}
          <div className="col-span-2 relative">

            {/* MOBILE */}
            <div
              className="lg:hidden flex items-center justify-between bg-sky-50 border border-sky-200 rounded-xl px-4 py-3 cursor-pointer active:scale-[0.98] transition"
              onClick={() => setIsFromOpen(true)}
            >
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 uppercase tracking-wide">From</span>
                <span className="text-base font-semibold text-slate-900 truncate">
                  {filter.from}
                </span>
              </div>
              <span className="text-sky-500 text-sm font-medium">Change</span>
            </div>

            {/* DESKTOP */}
            <div
              className="hidden lg:block p-7 bg-sky-50 rounded-2xl border-l-2 border-sky-200 cursor-pointer hover:bg-sky-100 transition"
              onClick={() => setIsFromOpen(true)}
            >
              <p className="text-sm text-slate-500">From</p>
              <h2 className="text-2xl font-bold text-slate-900 truncate">
                {filter.from}
              </h2>
            </div>

            <CityDropdown
              open={isFromOpen}
              onClose={() => setIsFromOpen(false)}
              onSelect={onChange}
              filter="from"
            />
          </div>

          {/* ================= SWAP ================= */}
          <div className="col-span-1 flex justify-center my-1 lg:my-0">
            <button
              className="w-10 h-10 rounded-full bg-white border border-sky-200 flex items-center justify-center shadow hover:bg-sky-50 transition"
              onClick={handleSwap}
            >
              <ArrowLeftRight className="w-5 h-5 text-sky-600" />
            </button>
          </div>



          {/* ================= TO ================= */}
          <div className="col-span-2 relative">

            {/* MOBILE */}
            <div
              className="lg:hidden flex items-center justify-between bg-sky-50 border border-sky-200 rounded-xl px-4 py-3 cursor-pointer active:scale-[0.98] transition"
              onClick={() => setIsToOpen(true)}
            >
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 uppercase tracking-wide">To</span>
                <span className="text-base font-semibold text-slate-900 truncate">
                  {filter.to}
                </span>
              </div>
              <span className="text-sky-500 text-sm font-medium">Change</span>
            </div>

            {/* DESKTOP */}
            <div
              className="hidden lg:block p-7 bg-sky-50 rounded-2xl border-l-2 border-sky-200 cursor-pointer hover:bg-sky-100 transition"
              onClick={() => setIsToOpen(true)}
            >
              <p className="text-sm text-slate-500">To</p>
              <h2 className="text-2xl font-bold text-slate-900 truncate">
                {filter.to}
              </h2>
            </div>

            <CityDropdown
              open={isToOpen}
              onClose={() => setIsToOpen(false)}
              onSelect={onChange}
              filter="to"
            />
          </div>

          <div className='sm:hidden py-2 w-full'/>


          {/* ================= DEPARTURE ================= */}
          <div className="col-span-2 relative">

            {/* MOBILE */}
            <div
              ref={departureRef}
              onClick={() => setDepartureOpen(true)}
              className="lg:hidden flex items-center justify-between bg-sky-50 border border-sky-200 rounded-xl px-4 py-3 cursor-pointer transition"
            >
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 uppercase tracking-wide">Departure</span>
                <span className="text-base font-semibold">{filter.departure}</span>
              </div>
              <ChevronDown className="w-4 h-4 text-sky-500" />
            </div>

            {/* DESKTOP */}
            <div
              ref={departureRef}
              onClick={() => setDepartureOpen(true)}
              className="hidden lg:block p-5 bg-sky-50 rounded-2xl border-l-2 border-sky-200 m-2 cursor-pointer hover:bg-sky-100 transition"
            >
              <div className="flex items-center gap-1 text-sm text-slate-500">
                Departure <ChevronDown className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold">{filter.departure}</h2>
            </div>

            <DateRangePicker
              open={departureOpen}
              onChange={onChange}
              onClose={() => setDepartureOpen(false)}
              triggerRef={departureRef}
              type="departure"
            />
          </div>

          <div className='sm:hidden py-2 w-full'/>


          {/* ================= RETURN ================= */}
          <div className="col-span-2 relative">

            {/* MOBILE */}
            <div
              ref={returnRef}
              onClick={() => setReturnOpen(true)}
              className="lg:hidden flex items-center justify-between bg-sky-50 border border-sky-200 rounded-xl px-4 py-3 cursor-pointer transition"
            >
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 uppercase tracking-wide">Return</span>
                <span className="text-base font-semibold">{filter.return}</span>
              </div>
              <ChevronDown className="w-4 h-4 text-sky-500" />
            </div>

            {/* DESKTOP */}
            <div
              ref={returnRef}
              onClick={() => setReturnOpen(true)}
              className="hidden lg:block p-5 bg-sky-50 rounded-2xl border-l-2 border-sky-200 m-2 cursor-pointer hover:bg-sky-100 transition"
            >
              <div className="flex items-center gap-1 text-sm text-slate-500">
                Return <ChevronDown className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold">{filter.return}</h2>
            </div>

            <DateRangePicker
              open={returnOpen}
              onChange={onChange}
              onClose={() => setReturnOpen(false)}
              triggerRef={returnRef}
              type="return"
            />
          </div>
          <div className='sm:hidden py-2 w-full'/>

          {/* ================= PICKUP ================= */}
          <div className="col-span-2 relative">

            {/* MOBILE */}
            <div
              ref={pickupRef}
              onClick={() => setPickupOpen((prev) => !prev)}
              className="lg:hidden flex items-center justify-between bg-sky-50 border border-sky-200 rounded-xl px-4 py-3 cursor-pointer transition"
            >
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wide text-slate-500">Pickup</span>
                <span className="text-base font-semibold">{filter.pickup}</span>
              </div>
              <ChevronDown className="w-4 h-4 text-sky-500" />
            </div>

            {/* DESKTOP */}
            <div
              ref={pickupRef}
              onClick={() => setPickupOpen((prev) => !prev)}
              className="hidden lg:block p-7 bg-sky-50 rounded-2xl border-l-2 border-sky-200 m-2 cursor-pointer hover:bg-sky-100 transition"
            >
              <div className="flex items-center gap-1 text-sm text-slate-500">
                Pickup-Time <ChevronDown className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold">{filter.pickup}</h2>
            </div>

            <TimePicker
              open={pickupOpen}
              triggerRef={pickupRef}
              onApply={(time) => onChange("pickup", time)}
              onClose={() => setPickupOpen(false)}
            />
          </div>

          {/* ================= DROP ================= */}
          <div className="col-span-2 relative py-3 md:py-0">

            {/* MOBILE */}
            <div className="lg:hidden flex items-center justify-between bg-sky-50 border border-sky-200 rounded-xl px-4 py-3">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wide text-slate-500">Drop</span>
                <span className="text-base font-semibold">{filter.drop || "09:45 PM"}</span>
              </div>
              <ChevronDown className="w-4 h-4 text-sky-500" />
            </div>

            {/* DESKTOP */}
            <div className="hidden lg:block p-7 bg-sky-50 rounded-2xl border-l-2 border-sky-200 m-2 cursor-pointer hover:bg-sky-100 transition">
              <div className="flex items-center gap-1 text-sm text-slate-500">
                Drop Time <ChevronDown className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold">{filter.drop || "09:45 PM"}</h2>
            </div>

          </div>

        </div>
      </div>

  )
}

export default RoundWayTripFilter