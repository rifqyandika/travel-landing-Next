import Link from "next/link";

// app/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:flex md:justify-between md:items-start">
        {/* Logo / Brand */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold">Siotravel</h2>
          <p className="mt-2 text-gray-200 max-w-xs">
            Explore the world with us. We provide the best travel experiences and consultation.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-8 md:flex md:gap-12">
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-200">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-200">
              <li><Link href="#" className="hover:text-white transition">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white transition">Help Center</Link></li>
              <li><Link href="#" className="hover:text-white transition">Terms</Link></li>
              <li><Link href="#" className="hover:text-white transition">Privacy</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-blue-700 text-gray-300 text-center py-4 mt-4">
        © {new Date().getFullYear()} Siotravel. All rights reserved.
      </div>
    </footer>
  );
}
