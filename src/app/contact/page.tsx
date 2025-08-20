// app/contact/page.jsx
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-44 flex items-center justify-center">
        <h1 className="text-2xl md:text-5xl font-bold text-">Contact Us</h1>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-3xl mx-auto ">
        <p className="text-center text-gray-700 mb-8">
          Have questions or need travel consultation? Fill out the form below, and we will get back to you shortly.
        </p>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold py-3 rounded-xl hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center text-gray-600 space-y-2">
          <p>Email: info@siotravel.com</p>
          <p>Phone: +62 812 3456 7890</p>
          <p>Address: Jl. Wisata No.123, Jakarta, Indonesia</p>
        </div>
      </div>
    </div>
  );
}
