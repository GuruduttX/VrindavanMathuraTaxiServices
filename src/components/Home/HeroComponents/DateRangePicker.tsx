"use client"

import { useEffect, useRef } from "react"
import { DayPicker, DateRange } from "react-day-picker"
import "react-day-picker/dist/style.css"

interface DateRangePickerProps {
  open: boolean
  value: DateRange | undefined
  onChange: (range: DateRange | undefined) => void
  onClose: () => void
  triggerRef: React.RefObject<HTMLElement | null>
}

const DateRangePicker = ({
  open,
  value,
  onChange,
  onClose,
  triggerRef,
}: DateRangePickerProps) => {
  const pickerRef = useRef<HTMLDivElement>(null)

  // 🔒 Close on outside click (excluding trigger)
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(e.target as Node) &&
        !triggerRef.current?.contains(e.target as Node)
      ) {
        onClose()
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open, onClose, triggerRef])

  if (!open) return null

  return (
    <div
      ref={pickerRef}
      className="absolute top-full left-0 z-50 mt-3 bg-white rounded-2xl shadow-xl border border-slate-200 p-4"
    >
      <DayPicker
        mode="range"
        selected={value}
        onSelect={onChange}
        numberOfMonths={2}
        pagedNavigation
        classNames={{
          months: "flex gap-6",
          caption: "flex justify-between items-center text-lg font-semibold",
          nav_button: "hover:bg-sky-100 rounded-lg p-1",
          day_selected: "bg-sky-600 text-white",
          day_range_middle: "bg-sky-100",
          day_today: "border border-sky-500",
        }}
      />
    </div>
  )
}

export default DateRangePicker
