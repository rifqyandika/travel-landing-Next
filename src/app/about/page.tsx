"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Globe2, Headphones } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Trusted Team",
    desc: "Our dedicated and professional team ensures every trip runs smoothly and safely.",
  },
  {
    icon: Globe2,
    title: "Global Experience",
    desc: "With years of experience, we connect you to destinations all around the world.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "We are always here to assist you whenever you need help during your journey.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-bold text-gray-900">
            About <span className="text-blue-600">SioTravel</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover who we are and why thousands of travelers trust us with their journeys.
          </p>
        </motion.div>

        {/* About Us Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed">
              At <span className="text-blue-600 font-semibold">SioTravel</span>, we believe 
              that travel is more than just moving from one place to another — it&apos;s about 
              creating unforgettable experiences. Since our founding, we have been committed 
              to offering affordable, high-quality travel services for adventurers, families, 
              and business travelers alike.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              With a wide network of partners worldwide, we make sure your journey is not only 
              smooth but also filled with memories worth cherishing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-80 md:h-96"
          >
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="About SioTravel"
              fill
              className="object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Our <span className="text-blue-600">Values</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            The principles that guide everything we do.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((val, i) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <Icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-blue-600">{val.title}</h3>
                <p className="mt-3 text-gray-600">{val.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
