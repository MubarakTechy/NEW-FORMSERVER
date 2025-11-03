"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Replace these with your real logo images
import powersurge from "../images/Logomark (2).png";
import stackedlab from "../images/Logomark (1).png";
import goodwell from "../images/Logomark (3).png";

const testimonials = [
  {
    logo: powersurge,
    name: "Nikolas Gibbons",
    role: "Product Designer, Powersurge",
    company: "Powersurge",
    text: "Brandwise has been a lifesaver for our team—everything we need is right at our fingertips, and it helps us jump right into new design projects.",
  },
  {
    logo: stackedlab,
    name: "Mathilde Lewis",
    role: "Project Lead, Stack3d Lab",
    company: "Stack3d Lab",
    text: "Our workflow has improved dramatically since we started using Brandwise and it’s become an integral part of our workflow. It's easy to use, and the resources are top-notch. I recommend it to everyone!",
  },
  {
    logo: goodwell,
    name: "Ammar Foley",
    role: "UX Designer, Goodwell",
    company: "Goodwell",
    text: "Brandwise is our secret weapon for staying ahead of deadlines. It gives us everything we need to get started quickly.",
  },
];

const Trust = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#f9f6ff] via-[#f6f2fe] to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Trusted by hundreds of global brands
          </h2>
          <p className="text-gray-500 text-lg">
           what they have to say about FormServer
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-left"
            >
              {/* Logo + Company */}
              <div className="flex items-center mb-4">
                <Image
                  src={t.logo}
                  alt={t.company}
                  width={28}
                  height={28}
                  className="mr-2"
                />
                <span className="font-semibold text-gray-900 text-lg">
                  {t.company}
                </span>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6 leading-relaxed">{t.text}</p>

              {/* Person Info */}
              <div>
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
