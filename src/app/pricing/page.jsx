"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer";
import spotify from "../../images/spotify.png";
import Walmart from "../../images/Walmart_logo_(2008).svg 2.png";
import Mobile from "../../images/T-Mobile_logo.svg 3.png";
import pngimg from "../../images/pngimg.com - google_PNG19644 2.png";
import amazon from "../../images/amazon-logo-black-transparent 2.png";
import OpenAI from "../../images/OpenAI_Logo.svg 3.png";
import Faq from "../../Component/Faq";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const Page = () => {
  const [plan, setPlan] = useState("monthly");
  const logos = [Walmart, spotify, Mobile, pngimg, OpenAI, amazon];
  

  return (
    <>
      <Navbar />
      {/* Main container – clean background, no decorative blobs */}
      <div className="min-h-screen overflow-hidden bg-gray-50">
        <motion.div
          className="relative z-10 flex flex-col items-center px-4 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-12 text-center">
            <h2 className="text-3xl font-semibold text-gray-900">
              We’ve got a plan that’s perfect for you
            </h2>
            <p className="mt-2 text-gray-500">
              Select from best plans, ensuring a perfect match. Need more or less?
            </p>
          </motion.div>

          {/* Toggle Buttons */}
          <motion.div variants={fadeUp} className="flex mb-12 overflow-hidden bg-white rounded-full shadow-sm">
            <button
              onClick={() => setPlan("monthly")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                plan === "monthly"
                  ? "bg-purple-600 text-white shadow-md"
                  : "text-gray-700"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setPlan("yearly")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                plan === "yearly"
                  ? "bg-purple-600 text-white shadow-md"
                  : "text-gray-700"
              }`}
            >
              Yearly (save 10%)
            </button>
          </motion.div>

          {/* Plans */}
          <motion.div
            className="grid w-full max-w-6xl gap-8 md:grid-cols-3"
            variants={staggerContainer}
          >
            {/* Free Plan */}
            <motion.div variants={fadeUp} className="p-8 text-center bg-white border border-gray-100 shadow-md rounded-2xl">
              <h3 className="mb-4 text-xl font-semibold">Free</h3>
              <p className="mb-6 text-4xl font-bold">₦0<span className="text-lg font-normal">/month</span></p>
              <ul className="mb-8 space-y-3 text-gray-600">
                   <li>✓ 1 form  </li>
                <li>✓ 100 submission/ Months</li>
                <li>✓ 10 file upload/ Months</li>
                <li>✓ Data Analysis = Null</li>
              </ul>
              <button className="w-full py-3 font-medium text-gray-700 transition border border-gray-300 rounded-xl hover:bg-gray-50">
                Start For Free
              </button>
            </motion.div>

            {/* Silver Plan */}
            <motion.div variants={fadeUp} className="p-8 text-center bg-white border border-gray-100 shadow-md rounded-2xl">
              <h3 className="mb-4 text-xl font-semibold">Silver</h3>
              <p className="mb-6 text-4xl font-bold">₦3,000<span className="text-lg font-normal">/month</span></p>
              <ul className="mb-8 space-y-3 text-gray-600">
                <li>✓ 10 Forms </li>
                <li>✓ 500 submission/ Months</li>
                <li>✓ 100 file  upload/ month</li>
                <li>✓ Data Analysis = Null</li>
              </ul>
              <button className="w-full py-3 font-medium text-white transition bg-purple-600 rounded-xl hover:bg-purple-700">
                Upgrade to Silver
              </button>
            </motion.div>

            {/* Premium Gold Plan */}
            <motion.div variants={fadeUp} className="relative p-8 overflow-hidden text-center border border-yellow-200 shadow-md bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-2xl">
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[150px] border-l-transparent border-b-[150px] border-b-yellow-300 opacity-30"></div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Premium Gold</h3>
              <p className="mb-6 text-4xl font-bold text-gray-900">
                ₦15,000<span className="text-lg font-normal">/month</span>
              </p>
              <ul className="mb-8 space-y-3 text-gray-700">
                <li>✓ Unlimited submission/ Months</li>
                <li>✓ Unlimited file upload/ months</li>
                <li>✓ web hooks</li>
                <li>✓ API access</li>
              </ul>
              <button className="w-full py-3 font-medium text-white transition bg-purple-600 rounded-xl hover:bg-purple-700">
                Go Premium
              </button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Logo marquee with entrance animation */}
        <motion.div
          className="relative z-10 mt-16 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex gap-12 animate-scroll-x w-[200%]">
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex-shrink-0 w-32 sm:w-40 md:w-48">
                <Image
                  src={logo}
                  alt="Brand Logo"
                  width={200}
                  height={100}
                  className="object-contain transition opacity-80 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <Faq />
      <Footer />
    </>
  );
};

export default Page;