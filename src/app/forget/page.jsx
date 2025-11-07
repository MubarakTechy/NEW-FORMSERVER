"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import max from "@/images/snap.png"; // Assuming this path is correct

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // Retained for button disabling
  const router = useRouter();
  const year = new Date().getFullYear();

  const handleReset = () => {
    // Validation removed as per previous instructions

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log("Reset link initiated for:", email);
      
      // Route to OTP page after delay
      setTimeout(() => {
        router.push("/otp");
      }, 1200);
    }, 1800);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-white font-sans px-4 py-10">
      {/* ===== Center Section - Retained animation ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center justify-center flex-grow"
      >
        {/* Logo - Retained animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-8"
        >
          <Image
            src={max}
            alt="FormServer Logo"
            width={80}
            height={80}
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
            Forgot Password?
          </h1>
          <p className="text-gray-500 text-sm sm:text-base max-w-sm">
            Lost access to your account? No problem — let’s reset your password.
          </p>
        </motion.div>

        {/* Input + Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-md bg-white border border-gray-100 rounded-2xl shadow-sm px-6 py-8"
        >
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter your email address
          </label>

          <input
            type="email"
            placeholder="xyz@gmail.com"
            value={email}
            onChange={handleEmailChange}
            className={`w-full px-5 py-3 border border-gray-300 rounded-full text-base focus:ring-2 focus:ring-purple-500 focus:outline-none mb-4 transition-all duration-200`}
          />

          {/* Reset Button - Loading text removed */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={loading}
            onClick={handleReset}
            className={`w-full py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full text-base font-semibold transition ${
              loading ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"
            }`}
          >
            Reset Password {/* Static text retained */}
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <footer className="text-xs text-gray-400 text-center mt-10">
        © {year} FormServer — Designed by Tosh Consult Inc.
      </footer>
    </div>
  );
}