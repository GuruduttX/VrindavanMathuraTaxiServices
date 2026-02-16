"use client";

import { useEffect, useState } from "react";
import { X, MapPin, ArrowRight, Phone } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function EnquiryPopup({ open, onClose }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    if (open) requestAnimationFrame(() => setVisible(true));
    else setVisible(false);
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-end md:items-center justify-center">
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-sky-950/70 backdrop-blur-md"
      />

      {/* MODAL WRAPPER */}
      <div
        className={`
          relative w-full max-w-full md:max-w-6xl
          h-[95vh] md:h-auto
          transition-all duration-500
          ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
        `}
      >
        <div
          className="
            relative bg-white
            rounded-t-[28px] md:rounded-[28px]
            shadow-2xl
            overflow-hidden
            grid md:grid-cols-2
            h-full md:h-auto
          "
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 bg-white p-2 rounded-full shadow hover:rotate-90 transition"
          >
            <X size={18} />
          </button>

          {/* LEFT PANEL – DESKTOP ONLY */}
          <div className="hidden md:flex bg-gradient-to-br from-sky-400 to-blue-600 p-10 text-white flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold leading-tight">
                Your Journey,
                <br /> Planned by Experts
              </h2>

              <p className="mt-4 text-white/90 max-w-sm">
                Reliable drivers, transparent pricing, and 24×7 support for your
                travel needs.
              </p>

              {/* ROUTE */}
              <div className="mt-8 flex items-center gap-4">
                <RoutePoint label="Pickup" />
                <div className="flex-1 h-[2px] bg-white/40" />
                <RoutePoint label="Drop" />
              </div>
            </div>

            {/* TRUST STATS */}
            <div className="grid grid-cols-3 gap-4 text-xs mt-10">
              <MicroStat title="5,000+" desc="Happy Riders" />
              <MicroStat title="2 min" desc="Callback" />
              <MicroStat title="24×7" desc="Support" />
            </div>
          </div>

          {/* RIGHT PANEL – FORM (SCROLLABLE ON MOBILE) */}
          <form
            className="
              w-full
              px-4 sm:px-6 md:px-8
              py-5 md:py-6
              grid grid-cols-1 gap-4
              overflow-y-auto
              h-full md:h-auto
            "
          >
            <Input label="Pickup Location" icon={<MapPin size={16} />} />
            <Input label="Drop Location" icon={<MapPin size={16} />} />
            <Input label="Travel Date" type="date" />
            <Input label="Passengers" />

            <textarea
              className="
                w-full
                min-h-[120px] md:min-h-[96px]
                rounded-2xl
                border border-gray-200
                px-4 py-3
                text-sm
                focus:ring-2 focus:ring-sky-400
                outline-none
                resize-none
              "
              placeholder="Special needs, night travel, senior citizens, etc."
            />

            {/* CTA */}
            <div className="flex flex-col gap-3 pt-3">
              <button
                type="submit"
                className="
                  w-full
                  h-[52px]
                  rounded-full
                  bg-gradient-to-r from-sky-500 to-blue-600
                  text-white
                  font-semibold
                  flex items-center justify-center gap-2
                  shadow-lg
                  transition
                  active:scale-[0.97]
                "
              >
                Start My Journey <ArrowRight />
              </button>

              <a
                href="https://wa.me/7302265809"
                target="_blank"
                className="
                  w-full
                  h-[52px]
                  rounded-full
                  border border-green-500
                  text-green-600
                  font-semibold
                  flex items-center justify-center gap-2
                  hover:bg-green-50
                  transition
                "
              >
                <Phone size={18} /> WhatsApp
              </a>
            </div>

            <p className="text-center text-[11px] text-gray-500 pt-2 leading-relaxed">
              By continuing, you agree to be contacted via call or WhatsApp.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

/* ---------------- SMALL COMPONENTS ---------------- */

function RoutePoint({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="w-3 h-3 rounded-full bg-white" />
      <span className="text-xs">{label}</span>
    </div>
  );
}

function MicroStat({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white/15 rounded-xl p-3 text-center backdrop-blur">
      <p className="font-bold">{title}</p>
      <p className="opacity-80">{desc}</p>
    </div>
  );
}

function Input({
  label,
  type = "text",
  icon,
}: {
  label: string;
  type?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="relative">
      {icon && (
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </span>
      )}
      <input
        type={type}
        placeholder={label}
        className={`
          w-full
          h-[52px] md:h-[48px]
          rounded-2xl
          border border-gray-200
          px-4 ${icon ? "pl-11" : ""}
          text-sm
          focus:ring-2 focus:ring-sky-400
          focus:border-sky-400
          outline-none
          transition
        `}
      />
    </div>
  );
}
