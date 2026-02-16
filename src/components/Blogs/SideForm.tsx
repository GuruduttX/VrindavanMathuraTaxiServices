"use client";

import { Star } from "lucide-react";
import { FloatingInput } from "@/utils/FloatingInput";
import { FloatingTextarea } from "@/utils/FloatingTextarea";
import { useState } from "react";

export default function SideForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);


  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    travelDate: "",
    travellers: "",
    message: "",
  });

  const WHATSAPP = "7302265809";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.travelDate || !form.travellers) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

   
  };

  return (
    <div className="w-full max-w-sm z-10">
      {/* FORM CARD */}
      <div className="bg-white rounded-2xl border border-gray-400 p-6 shadow-lg">
        <h3 className="font-semibold text-gray-900 mb-4">
          Enquire About This Package
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <FloatingInput
            label="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <FloatingInput
            label="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          {/* Phone */}
          <div className="flex gap-2">
            <div className="w-20 border rounded-xl flex items-center justify-center text-sm">
              +91
            </div>
            <div className="flex-1">
              <FloatingInput
                label="Phone Number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Travel Date */}
          <div className="relative">
            <input
              type="date"
              name="travelDate"
              value={form.travelDate}
              onChange={handleChange}
              required
              className="peer w-full rounded-xl border border-gray-300 px-4 pt-5 pb-2
              text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-200"
            />
            <label
              className="absolute left-3 top-1 text-xs text-gray-500
              peer-focus:text-orange-600"
            >
              Travel Date *
            </label>
          </div>

          <FloatingInput
            label="Traveller Count"
            name="travellers"
            value={form.travellers}
            onChange={handleChange}
            required
          />

          <FloatingTextarea
            label="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 cursor-pointer
            text-white font-semibold py-3 rounded-xl transition disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Enquiry"}
          </button>
        </form>
        {success && (
            <p className="mt-3 text-xs text-green-700 text-center">
              Enquiry sent successfully ✔ Redirecting to WhatsApp…
            </p>
          )}
      </div>
    </div>
  );
}
