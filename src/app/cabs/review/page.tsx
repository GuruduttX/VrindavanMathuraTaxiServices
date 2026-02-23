
import ReviewClient from "@/components/CabReview/ReviewClient"
import { Suspense } from "react"
import { redirect } from "next/navigation"


type ReviewQueryParams = {
  from?: string;
  to?: string;
  departure?: string;
  return?: string;
  pickup?: string;
  drop?: string;
  type?: "oneway" | "roundway" | "hourly" | "airport";
  carname?: string;
  cabtype?: string;
  fueltype?: string;
  carseat?: string;
  carprice?: string;
  carId?: string;
};

export default async function review({searchParams} : { searchParams : Promise<ReviewQueryParams>}) {
     const {
    from, to, departure, return: returnDate, pickup, drop, type, carname, cabtype, fueltype, carseat, carprice, carId,
  } =  await searchParams ?? {};

     if (
        !from ||
        !to ||
        !departure ||
        !returnDate ||
        !pickup ||
        !drop ||
        !carId ||
        !carname
  ) {
    redirect("/");
  }
    return (
        <Suspense fallback={<div className="p-10 text-center">Loading packages...</div>}>
            <ReviewClient/>
        </Suspense>
    )
}
