"use client";

import { FloatingInput } from "@/utils/FloatingInput";
import { FloatingTextarea } from "@/utils/FloatingTextarea";
import { useState } from "react";
import toast from "react-hot-toast";
import emailjs from '@emailjs/browser'

export default function SideForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    picup_location: "",
    drop_location : "",
    travellers: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          form_type: "Blog Enquiry Form",

          name: form.name,
          email: form.email,
          phone: form.phone,
          pickup_location: form.picup_location,
          drop_location: form.drop_location,
          message : form.message,
          passengers : form.travellers,

          from: "N/A",
          to: "N/A",
          departure_date: "N/A",
          return_date: "N/A",
          pickup_time: "N/A",
          drop_time: "N/A",
          trip_type: "N/A",
          car_name: "N/A",
          cab_type: "N/A",
          fuel_type: "N/A",
          car_seat: "N/A",
          car_price: "N/A",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log("Hello")


      toast.success("Enquiry Sent Successfully ");
      setForm({
        name: "",
        email: "",
        phone: "",
        picup_location: "",
        drop_location : "",
        travellers: "",
        message: "",
      })


    } catch (error) {
      toast.error("Failed to sent mail");
      console.log("Email Error:", error);
    }
  };


  return (
    <div className="w-full max-w-sm z-10">
      {/* SKY THEME CARD */}
      <div className="bg-gradient-to-br from-sky-50 via-white to-blue-50 
      rounded-2xl border border-blue-200 p-6 shadow-xl">

        <h3 className="font-semibold text-blue-900 mb-4 text-lg">
          Let’s Plan Your Trip ✈️
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
            <div className="w-20 border border-blue-200 rounded-xl flex items-center justify-center text-sm bg-white">
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
         <div className="flex gap-2">
          <div>
             
             <FloatingInput
                label="Picup Location"
                name="picup_location"
                value={form.picup_location}
                onChange={handleChange}
                required
              />

          </div>

          <div>

             <FloatingInput
                label="Drop Location"
                name="drop_location"
                value={form.drop_location}
                onChange={handleChange}
                required
              />

          </div>
             
             
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
            className="w-full bg-gradient-to-r from-sky-500 to-blue-600 
            hover:from-sky-600 hover:to-blue-700
            cursor-pointer text-white font-semibold py-3 rounded-xl 
            shadow-md hover:shadow-lg transition-all duration-300
            disabled:opacity-60"
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
