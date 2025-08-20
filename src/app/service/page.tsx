"use client";
import { motion } from "framer-motion";
import { Plane, Hotel, Map, FileText, Car, Shield } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Flight Booking",
    desc: "Book domestic and international flights at the best prices with hassle-free service.",
  },
  {
    icon: Hotel,
    title: "Hotel Reservation",
    desc: "Choose from a wide range of hotels and accommodations tailored to your budget.",
  },
  {
    icon: Map,
    title: "Tour Packages",
    desc: "Explore exclusive tour packages designed for families, couples, and adventurers.",
  },
  {
    icon: FileText,
    title: "Visa Assistance",
    desc: "Get professional help with your visa applications for multiple destinations.",
  },
  {
    icon: Car,
    title: "Car Rentals",
    desc: "Rent a car for your trips with flexible options and affordable rates.",
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    desc: "Secure your journey with comprehensive travel insurance packages.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} // 👈 animasi hanya sekali
        >
          <h1 className="text-4xl font-bold text-gray-900">
            Our <span className="text-blue-600">Services</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We provide the best travel services to make your journey memorable.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }} // 👈 hanya jalan sekali
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-block"
                >
                  <Icon className="w-10 h-10 text-blue-600 mb-4" />
                </motion.div>
                <h3 className="text-xl font-semibold text-blue-600">{service.title}</h3>
                <p className="mt-3 text-gray-600">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
