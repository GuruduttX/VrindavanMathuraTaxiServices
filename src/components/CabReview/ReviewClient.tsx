"use client";

import NormalNavbar from "@/utils/NormalNavbar";
import LeftCabReview from "./LeftCabReview";
import RightCabSection from "./RightCabSection";
import Footer from "@/utils/Footer";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ReviewClient() {
  const searchParams = useSearchParams();
  const [message, setMessage] = useState("");
  

  const [form , setForm] = useState({
    fullName : "",
    phone : "",
    email : ""
  });

  const updateForm = (field: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value
    }))
  }
  
  const WHATSAPP = "7302265809"; 

  const handleSendMail = async () => {

   const missingFields = [];

    if (!form.fullName?.trim()) missingFields.push("Full Name");
    if (!form.phone?.trim()) missingFields.push("Phone");
    if (!form.email?.trim()) missingFields.push("Email");

    if (missingFields.length > 0) {
      setMessage(`Please fill: ${missingFields.join(", ")} before booking.`);
      return;
    }
      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          {
            form_type: "Search Bar Query", 
            name: form.fullName,
            email :  form.email,
            phone :   form.phone,
            pickup_location :"N/A",
            drop_location :"N/A",
            passengers : 'N/A',
            message : 'N/A',

            from: searchParams.get("from") || "",
            to: searchParams.get("to") || "",
            departure_date: searchParams.get("departure") || "",
            return_date: searchParams.get("return") || "",
            pickup_time: searchParams.get("pickup") || "",
            drop_time: searchParams.get("drop") || "",
            trip_type: searchParams.get("type") || "",
            car_name: searchParams.get("carname") || "",
            cab_type: searchParams.get("cabtype") || "",
            fuel_type: searchParams.get("fueltype") || "",
            car_seat: searchParams.get("carseat") || "",
            car_price: searchParams.get("carprice") || "",
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );


          const whatsappMessage = encodeURIComponent(
        `New Quick Enquiry \n\nName: ${name}\nPhone: ${form.phone}\n\nPlease contact as soon as possible.`
      );

      setTimeout(() => {
        window.open(
          `https://wa.me/${WHATSAPP}?text=${whatsappMessage}`,
          "_blank"
        );
      }, 600); 
        

        console.log("Email Sent Successfully ");
      } catch (error) {
        console.log("Email Failed ", error);
      }
      finally{
         setMessage("");
      }
    };

  return (
    <>
      <NormalNavbar />

      <section className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">

            <LeftCabReview onChange={updateForm}/>
            <RightCabSection send={handleSendMail} price={searchParams.get("carprice")} message={message}/>

         
        </div>
      </section>

      <Footer />
    </>
  );
}
