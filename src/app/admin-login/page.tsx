"use client";

import { useState } from "react";
import { Lock, Mail, Eye, EyeOff, ShieldCheck, Loader } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase/SupabaseConfig";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    setErrorMessage("");
    setLoading(true);

    const { data, error: signInError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    // Invalid credentials
    if (signInError) {
      setErrorMessage("Invalid admin credentials");
      setLoading(false);
      return;
    }

    // Safety check
    if (!data.user) {
      setErrorMessage("Something went wrong. Try again.");
      setLoading(false);
      return;
    }



    if (data.user.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
        await supabase.auth.signOut();
        setErrorMessage("Unauthorized access");
        setLoading(false);
        return;
    }


    setLoading(false);
    router.push("/admin-x9AqP7mK2");
  };

  return (
    <section className="min-h-screen flex bg-gradient-to-br from-sky-50 via-white to-blue-100">

      {/* LEFT SIDE BRAND PANEL */}
      <div className="hidden lg:flex w-1/2 relative items-center justify-center bg-gradient-to-br from-sky-600 to-blue-700 text-white p-12 overflow-hidden">

        <div className="absolute top-20 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-52 h-52 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-md">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck size={32} />
            <h1 className="text-3xl font-bold">Admin Control Panel</h1>
          </div>

          <p className="text-sky-100 leading-relaxed">
            Secure access to manage bookings, drivers, routes,
            and customer journeys across Mathura & Vrindavan.
          </p>

          <div className="mt-8 text-sm text-sky-200 italic">
            "Control every journey from one dashboard."
          </div>
        </div>
      </div>

      {/* RIGHT SIDE LOGIN FORM */}
      <div className="flex w-full lg:w-1/2 items-center justify-center px-6 py-12">

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white/70 backdrop-blur-xl border border-sky-100 shadow-2xl rounded-3xl p-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Admin Login
          </h2>

          <p className="text-center text-gray-500 text-sm mt-2">
            Authorized personnel only
          </p>

          {/* Error Message */}
          {errorMessage && (
            <div className="mt-6 text-sm text-red-600 text-center font-medium">
              {errorMessage}
            </div>
          )}

          {/* Email */}
          <div className="mt-6">
            <label className="text-sm font-medium text-gray-600">
              Email Address
            </label>
            <div className="mt-2 flex items-center border border-gray-300 rounded-xl px-3 py-3 focus-within:border-sky-500 transition">
              <Mail size={18} className="text-gray-400 mr-2" />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="admin@mathuravrindavantaxi.com"
                className="w-full bg-transparent outline-none text-gray-700"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="mt-6">
            <label className="text-sm font-medium text-gray-600">
              Password
            </label>
            <div className="mt-2 flex items-center border border-gray-300 rounded-xl px-3 py-3 focus-within:border-sky-500 transition">
              <Lock size={18} className="text-gray-400 mr-2" />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full bg-transparent outline-none text-gray-700"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="ml-2 text-gray-400 hover:text-sky-600 transition"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 bg-gradient-to-r from-sky-500 to-blue-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:scale-[1.02] transition-transform disabled:opacity-60 cursor-pointer flex items-center justify-center"
          >
            {loading ? (
              <Loader className="animate-spin" size={20} />
            ) : (
              "Secure Login"
            )}
          </button>

          {/* Back Home */}
          <div className="text-center mt-6 text-sm text-gray-500">
            ←{" "}
            <Link href="/" className="hover:text-sky-600">
              Back to Website
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}