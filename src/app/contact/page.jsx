"use client";
import React from "react";
import { motion } from "framer-motion";
import Footer from "@/Component/Footer";
import Navbar from "@/Component/Navbar";
import Faq from "@/landingpages/Faq";

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

const ContactPage = () => {
  return (
    <>
      <Navbar />
      {/* Main container – clean white background, no decorative blobs */}
      <div className="overflow-hidden bg-white">
        <motion.section
          className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-black"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="w-full max-w-2xl text-center">
            {/* Header */}
            <motion.h2 variants={fadeUp} className="mb-2 text-3xl font-semibold md:text-4xl">
              Contact Us
            </motion.h2>
            <motion.p variants={fadeUp} className="mb-10 text-black">
              Get in touch with us. We’re here to assist you.
            </motion.p>

            {/* Contact Form */}
            <motion.form variants={staggerContainer} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <motion.input
                  variants={fadeUp}
                  type="text"
                  placeholder="Full Name"
                  className="w-full py-3 text-sm font-bold text-black transition-colors bg-transparent border-b border-black outline-none focus:border-purple-500"
                />
                <motion.input
                  variants={fadeUp}
                  type="email"
                  placeholder="Email Address"
                  className="w-full py-3 text-sm font-bold text-black transition-colors bg-transparent border-b border-black outline-none focus:border-purple-500"
                />
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <motion.input
                  variants={fadeUp}
                  type="text"
                  placeholder="Phone Number"
                  className="w-full py-3 text-sm font-bold text-black transition-colors bg-transparent border-b border-black outline-none focus:border-purple-500"
                />
                <motion.input
                  variants={fadeUp}
                  type="text"
                  placeholder="Subject"
                  className="w-full py-3 text-sm font-bold text-black transition-colors bg-transparent border-b border-black outline-none focus:border-purple-500"
                />
              </div>

              <motion.div variants={fadeUp}>
                <textarea
                  rows="5"
                  placeholder="Message"
                  className="w-full py-3 text-sm font-bold text-black transition-colors bg-transparent border-b border-black outline-none resize-none focus:border-purple-500"
                ></textarea>
              </motion.div>

              <motion.div variants={fadeUp} className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 font-medium text-white transition-all bg-purple-600 rounded-md hover:bg-purple-700"
                >
                  Leave a message
                </button>
              </motion.div>
            </motion.form>
          </div>
        </motion.section>
      </div>

      <Faq />
      <Footer />
    </>
  );
};

export default ContactPage;