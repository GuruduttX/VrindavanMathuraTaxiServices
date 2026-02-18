export default function BlogNewsletter() {
  return (
    <section className="
        relative z-50
        w-full 
        bg-linear-to-br from-sky-700 via-sky-600 to-sky-500
        py-4 px-6 lg:px-16 
        max-w-7xl mx-auto 
        rounded-2xl 
        -mt-23
      ">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* LEFT SIDE */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-white max-w-xl text-center sm:text-left">
          
          {/* Avatar */}
          <img
            src="https://img.freepik.com/premium-vector/stylish-default-user-profile-photo-avatar-vector-illustration_664995-353.jpg" // change this
            alt="Author"
            className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
          />

          {/* Text */}
          <p className="text-sm leading-relaxed text-white/90">
            Hey there, I'm Rohit. Welcome to our travel journal where I share
            insider destination guides, temple insights, and travel tips for
            exploring Mathura & Vrindavan. Join our weekly newsletter!
          </p>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="w-full max-w-md">
          <form className="space-y-3">

            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-3 rounded-md bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-300"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-300"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-md bg-black text-white cursor-pointer font-semibold  transition-all duration-300"
            >
              SUBSCRIBE
            </button>

            <p className="text-xs text-white/80 mt-2">
              No spam, just travel insights. Read our{" "}
              <span className="underline cursor-pointer">
                Privacy Policy
              </span>.
            </p>

          </form>
        </div>

      </div>
    </section>
  );
}
