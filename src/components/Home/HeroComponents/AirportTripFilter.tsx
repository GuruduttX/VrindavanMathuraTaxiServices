import { ArrowLeftRight, ChevronDown } from 'lucide-react'
import React, { useRef, useState } from 'react'
import CityDropdown from './CityDropDown'
import DateRangePicker from './DateRangePicker'
import TimePicker from '@/utils/TimePicker'

const AirportTripFilter = ({ filter, onChange }: any) => {
  const [isFromOpen, setIsFromOpen] = useState(false)
  const [isToOpen, setIsToOpen] = useState(false)
  const [pickupOpen, setPickupOpen] = useState(false)
  const [departureOpen, setDepartureOpen] = useState(false)

  const departureRef = useRef<HTMLDivElement>(null)
  const pickupRef = useRef<HTMLDivElement>(null)

  const handleSwap = () => {
    const temp = filter.from
    onChange('from', filter.to)
    onChange('to', temp)
  }

  return (
    <div className="w-full bg-white rounded-2xl overflow-visible shadow-sm relative p-2 ">
      <div className="grid grid-cols-1 lg:grid-cols-13 items-center px-1 gap-3">

        {/* FROM */}
        <div className="col-span-1 lg:col-span-4 relative">
          <div
            className="p-7 bg-sky-50 rounded-2xl border-l-2 border-sky-200 cursor-pointer"
            onClick={() => setIsFromOpen(true)}
          >
            <p className="text-sm text-slate-500">From</p>
            <h2 className="font-bold text-slate-900 text-2xl sm:text-3xl lg:text-4xl break-words ">
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

        {/* SWAP */}
        <div className="col-span-1 lg:col-span-1 flex justify-center">
          <button
            className="w-10 h-10 rounded-full bg-white border border-sky-200 flex items-center justify-center shadow hover:bg-sky-50 transition cursor-pointer"
            onClick={handleSwap}
          >
            <ArrowLeftRight className="w-5 h-5 text-sky-600" />
          </button>
        </div>

        {/* TO */}
        <div className="col-span-1 lg:col-span-3 relative">
          <div
            className="p-7 bg-sky-50 rounded-2xl border-l-2 border-sky-200 cursor-pointer"
            onClick={() => setIsToOpen(true)}
          >
            <p className="text-sm text-slate-500">To</p>
            <h2 className="font-bold text-slate-900 text-2xl sm:text-3xl lg:text-4xl break-words">
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

        {/* DEPARTURE */}
        <div className="col-span-1 lg:col-span-3 relative cursor-pointer">
          <div ref={departureRef} onClick={() => setDepartureOpen(true)}>
            <div className="p-5 bg-sky-50 rounded-2xl border-l-2 border-sky-200 m-2">
              <div className="flex items-center gap-1 text-sm text-slate-500">
                Departure <ChevronDown className="w-4 h-4" />
              </div>
              <h2 className="text-xl lg:text-2xl font-bold whitespace-nowrap">
                {filter.departure}
              </h2>
            </div>
          </div>

          <DateRangePicker
            open={departureOpen}
            onChange={onChange}
            onClose={() => setDepartureOpen(false)}
            triggerRef={departureRef}
            type="departure"
          />
        </div>

        {/* PICKUP */}
        <div className="col-span-1 lg:col-span-2 relative">
          <div
            ref={pickupRef}
            onClick={() => setPickupOpen(prev => !prev)}
          >
            <div className="p-7 bg-sky-50 rounded-2xl border-l-2 border-sky-200 m-2">
              <div className="flex items-center gap-1 text-xs text-slate-500">
                Pickup-Time <ChevronDown className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold">{filter.pickup}</h2>
            </div>
          </div>

          <TimePicker
            open={pickupOpen}
            triggerRef={pickupRef}
            onApply={(time) => onChange('pickup', time)}
            onClose={() => setPickupOpen(false)}
          />
        </div>

      </div>
    </div>
  )
}

export default AirportTripFilter
