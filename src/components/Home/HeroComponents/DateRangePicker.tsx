"use client"

import { useEffect, useRef, useState } from "react"
import { DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css"

interface DateRangePickerProps {
  open: boolean
  onChange: (type: string, value: string) => void
  onClose: () => void
  triggerRef: React.RefObject<HTMLElement | null>
  type : string
}

const DateRangePicker = ({
  open,
  onChange,
  onClose,
  triggerRef,
  type
}: DateRangePickerProps) => {
  const [selected, setSelected] = useState<Date | undefined>()
  console.log("THE SELECETED DAT IS : ");
  console.log(selected);

  const pickerRef = useRef<HTMLDivElement>(null)

  // 🔒 Close on outside click
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
      document.addEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [open, onClose, triggerRef])


  if (!open) return null

  return (
    <div
      ref={pickerRef}
      className="absolute top-full left-0 z-50 mt-3 bg-white rounded-2xl shadow-xl border border-slate-200 p-4"
    >
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={(date) => {
          if (!date) return

          const formatted = date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })

          setSelected(date)
          onChange(type , formatted) 
        }}
        classNames={{
          months: "flex gap-6",
          caption: "flex justify-between items-center text-lg font-semibold",
          nav_button: "hover:bg-sky-100 rounded-lg p-1",
          day_selected: "bg-sky-600 text-white",
          day_today: "border border-sky-500",
        }}
      />
    </div>
  )
}

export default DateRangePicker
