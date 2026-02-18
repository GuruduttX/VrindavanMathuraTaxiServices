import { ArrowLeftRight, ChevronDown } from 'lucide-react'
import React, { useRef, useState } from 'react'
import CityDropdown from './CityDropDown';
import DateRangePicker from './DateRangePicker';
import { DateRange } from "react-day-picker"
import TimePicker from '@/utils/TimePicker';

const OneWayTripFilter = ({ filter, onChange }: any) => {

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
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-13 items-center px-3">

        {/* FROM */}
        <div className="col-span-2 relative">
          {/* TRIGGER */}
          <div
            className="p-7 bg-sky-50 rounded-2xl border-l-2 border-sky-200 cursor-pointer"
            onClick={() => setIsFromOpen(true)}
          >
            <p className="text-sm text-slate-500">From</p>
            <h2 className="text-2xl font-bold text-slate-900">{filter.from}</h2>
          </div>

          {/* DROPDOWN (separate) */}

          <CityDropdown
            open={isFromOpen}
            onClose={() => setIsFromOpen(false)}
            onSelect={onChange}
            filter="from"
          />

        </div>

        {/* SWAP */}
        <div className="col-span-1 flex justify-center">
          <button className="w-10 h-10 rounded-full bg-white border border-sky-200 flex items-center justify-center shadow hover:bg-sky-50 transition cursor-pointer" onClick={handleSwap}>
            <ArrowLeftRight className="w-5 h-5 text-sky-600" />
          </button>
        </div>

        {/* TO */}

        <div className="col-span-2 relative">
          <div
            className="p-7 bg-sky-50 rounded-2xl border-l-2 border-sky-200 cursor-pointer"
            onClick={() => setIsToOpen(true)}
          >
            <p className="text-sm text-slate-500">From</p>
            <h2 className="text-2xl font-bold text-slate-900">{filter.to}</h2>
          </div>

          {/* DROPDOWN (separate) */}

          <CityDropdown
            open={isToOpen}
            onClose={() => setIsToOpen(false)}
            onSelect={onChange}
            filter="to"
          />
        </div>

        {/* DEPARTURE */}
        <div className="col-span-2 relative cursor-pointer">

          {/* CLICK WRAPPER (invisible) */}
          <div
            ref={departureRef}
            onClick={() => setDepartureOpen(true)}
          >
            <div className="p-5 bg-sky-50 rounded-2xl  border-l-2 border-sky-200 m-2">
              <div className="flex items-center gap-1 text-sm text-slate-500">
                Departure <ChevronDown className="w-4 h-4" />
              </div>
              <h2 className="text-3xl font-bold">
                <span className="text-xl font-bold">{filter.departure}</span>
              </h2>
              
            </div>
          </div>

          {/* DATE RANGE PICKER */}
          <DateRangePicker
            open={departureOpen}
            onChange={onChange}
            onClose={() => setDepartureOpen(false)}
            triggerRef={departureRef}
            type="departure"
          />
        </div>

        {/* RETURN */}
        <div className="col-span-2 relative cursor-pointer">

          {/* CLICK WRAPPER (invisible) */}
          <div
            ref={returnRef}
            onClick={() => setReturnOpen(true)}
          >
            <div className="p-5 bg-sky-50 rounded-2xl  border-l-2 border-sky-200 m-2">
              <div className="flex items-center gap-1 text-sm text-slate-500">
                Return <ChevronDown className="w-4 h-4" />
              </div>
              <h2 className="text-2xl font-bold">
                <span className="text-xl font-bold">{filter.return}</span>
              </h2>
              
            </div>
          </div>

          {/* DATE RANGE PICKER */}
          <DateRangePicker
            open={returnOpen}
            onChange={onChange}
            onClose={() => setReturnOpen(false)}
            triggerRef={returnRef}
            type="return"
          />
        </div>


        {/* PICKUP */}
        <div className="col-span-2 relative">
          <div
            ref={pickupRef}
            onClick={() => setPickupOpen((prev) => !prev)}
          >
            <div className="p-7 bg-sky-50 rounded-2xl border-l-2 border-sky-200 m-2">
              <div className="flex items-center gap-1 text-sm text-slate-500">
                Pickup-Time <ChevronDown className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold">{filter.pickup}</h2>
              
            </div>
          </div>

          <TimePicker
            open={pickupOpen}
            triggerRef={pickupRef}
            onApply={(time) => onChange("pickup", time)}
            onClose={() => setPickupOpen(false)}
          />
        </div>


        {/* DROP */}
        <div className="col-span-2 p-7 bg-sky-50 rounded-2xl  border-l-2 border-sky-200 m-2">
          <div className="flex items-center gap-1 text-sm text-slate-500">
            Drop Time <ChevronDown className="w-4 h-4" />
          </div>
          <h2 className="text-xl font-bold">09:45 PM</h2>
          
        </div>

      </div>
    </div>
  )
}

export default OneWayTripFilter