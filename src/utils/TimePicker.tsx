"use client"

import { useEffect, useRef, useState } from "react"

interface TimePickerProps {
  open: boolean
  onApply: (time: string) => void
  onClose: () => void
  triggerRef: React.RefObject<HTMLElement | null>
}

export default function TimePicker({
  open,
  onApply,
  onClose,
  triggerRef,
}: TimePickerProps) {
  const [hour, setHour] = useState(10)
  const [minute, setMinute] = useState(0)
  const [period, setPeriod] = useState<"AM" | "PM">("AM")

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
      className="absolute top-full left-0 z-50 mt-3 bg-white rounded-2xl shadow-xl border border-sky-200 p-4 w-[280px]"
    >
      <div className="grid grid-cols-3 gap-2 text-center">

        {/* Hours */}
        <div className="h-40 overflow-y-auto">
          {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
            <div
              key={h}
              onClick={() => setHour(h)}
              className={`py-2 rounded-lg ${
                hour === h ? "bg-sky-500 text-white" : "hover:bg-sky-100"
              }`}
            >
              {String(h).padStart(2, "0")} Hr
            </div>
          ))}
        </div>

        {/* Minutes */}
        <div className="h-40 overflow-y-auto">
          {[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55].map((m) => (
            <div
              key={m}
              onClick={() => setMinute(m)}
              className={`py-2 rounded-lg ${
                minute === m ? "bg-sky-500 text-white" : "hover:bg-sky-100"
              }`}
            >
              {String(m).padStart(2, "0")} min
            </div>
          ))}
        </div>

        {/* AM / PM */}
        <div className="h-40 flex flex-col justify-center gap-2">
          {["AM", "PM"].map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p as "AM" | "PM")}
              className={`py-2 rounded-lg font-medium ${
                period === p ? "bg-sky-500 text-white" : "bg-sky-100"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={() => {
          onApply(
            `${String(hour).padStart(2, "0")}:${String(minute).padStart(
              2,
              "0"
            )} ${period}`
          )
          onClose()
        }}
        className="w-full mt-4 py-2 rounded-xl bg-sky-500 text-white font-medium"
      >
        APPLY
      </button>
    </div>
  )
}
