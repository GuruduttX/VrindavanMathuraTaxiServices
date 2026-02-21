"use client";

import NormalNavbar from "@/utils/NormalNavbar";
import LeftCabReview from "./LeftCabReview";
import RightCabSection from "./RightCabSection";
import Footer from "@/utils/Footer";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function ReviewClient() {
  const searchParams = useSearchParams();

  useEffect(() => {

    const sendMail = async () => {
      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          {
            form_type: "Search Bar Query", 
            name: "N/A",
            email :  "N/A",
            phone :   "N/A",
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

        console.log("Email Sent Successfully ");
      } catch (error) {
        console.log("Email Failed ", error);
      }
    };

    sendMail();

  }, [searchParams]);

  return (
    <>
      <NormalNavbar />

      <section className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <LeftCabReview />
          <RightCabSection />
        </div>
      </section>

      <Footer />
    </>
  );
}
