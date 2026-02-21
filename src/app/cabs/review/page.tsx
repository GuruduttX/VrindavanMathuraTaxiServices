
import ReviewClient from "@/components/CabReview/ReviewClient"
import { Suspense } from "react"

export default function review() {
    return (
        <Suspense fallback={<div className="p-10 text-center">Loading packages...</div>}>
            <ReviewClient/>
        </Suspense>
    )
}
