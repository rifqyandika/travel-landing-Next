"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Car } from "lucide-react";
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname()
    const isHome = pathname === "/"

    return (
        <nav className="bg-slate-900 fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center text-2xl font-bold text-white text-shadow-lg hover:text-orange-500">
                            <Car size={38} className="mr-2" /><h1>ZangTravel.</h1>
                        </Link>
                    </div>

                    {/* Menu desktop */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="/" className="text-white font-semibold hover:text-orange-600">
                            Home
                        </Link>
                        <Link href="/service" className="text-white font-semibold hover:text-orange-600">
                            Services
                        </Link>
                        <Link href="/about" className="text-white font-semibold hover:text-orange-600">
                            About
                        </Link>
                        <Link href="/contact" className="text-white font-semibold hover:text-orange-600">
                            Contact
                        </Link>
                        <Link href="/login" className="border-2 border-white py-[5px] px-4 rounded-lg text-white font-semibold hover:text-slate-900 hover:bg-white">
                            Login
                        </Link>
                    </div>

                    {/* Hamburger (mobile) */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-orange-600 focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden transition-all duration-300 ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                    } bg-slate shadow-lg`}
            >
                <div className="px-2 pt-2 pb-3 space-y-2">
                    <Link
                        href="/"
                        className="block px-3 py-2 rounded-md text-white hover:bg-blue-50 hover:text-blue-600"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className="block px-3 py-2 rounded-md text-white hover:bg-blue-50 hover:text-blue-600"
                    >
                        About
                    </Link>
                    <Link
                        href="/services"
                        className="block px-3 py-2 rounded-md text-white hover:bg-blue-50 hover:text-blue-600"
                    >
                        Services
                    </Link>
                    <Link
                        href="/contact"
                        className="block px-3 py-2 rounded-md text-white hover:bg-blue-50 hover:text-blue-600"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
