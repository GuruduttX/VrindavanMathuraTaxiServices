import React from 'react'

const RightCabSection = () => {
    return (

        <div className="lg:col-span-4">
            <div className="sticky top-24">

                <div className="bg-white rounded-3xl border border-sky-300 p-6 shadow-xl">

                    <h3 className="font-semibold text-sky-900 mb-4">
                        Fare Summary
                    </h3>

                    <div className="space-y-3 text-sky-700 text-sm">
                        <div className="flex justify-between">
                            <span>Base Fare</span>
                            <span>₹3,800</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Taxes</span>
                            <span>₹274</span>
                        </div>
                    </div>

                    <div className="border-t border-sky-200 my-4" />

                    <div className="flex justify-between text-lg font-semibold text-sky-900">
                        <span>Total</span>
                        <span>₹4,074</span>
                    </div>

                    <button className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 text-white font-medium hover:opacity-90 transition">
                        Pay & Confirm Booking
                    </button>

                    <p className="text-xs text-sky-500 text-center mt-3">
                        Safe & Secure Payments
                    </p>
                </div>

            </div>
        </div>

    )
}

export default RightCabSection