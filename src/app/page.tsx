import VideoComponent from "../components/VideoComponent";

export default function HomePage() {
  return (
    <div>
      <section className="relative h-lvh flex items-center justify-center">
        <VideoComponent />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-28">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
            <div className="text-center md:text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                Your Journey, <span className="text-orange-600">Our Passion</span>
              </h1>
              <p className="mt-4 text-lg text-gray-200 outline-black">
                Explore the world with <span className="font-bold text-orange-500">ZangTravel</span>. We make every trip simple, safe,
                and unforgettable.
              </p>
            </div>
            <div className="text-center">
              <a href={'https://wa.me/085648445978'} className="bg-slate-900 px-5 py-3 rounded-lg text-white text-xl font-semibold hover:bg-orange-500 shadow-lg">Get Booking Now</a>
            </div>
            {/* <CardBooking /> */}
          </div>
        </div>
      </section>
    </div>
  );
}
