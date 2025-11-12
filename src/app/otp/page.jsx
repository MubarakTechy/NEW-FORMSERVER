"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import max from "@/images/snap.png"; // Assuming this path is correct

export default function OTPPage() {
  const [otp, setOtp] = useState(Array(6).fill(""));
  // const [error, setError] = useState(""); // Removed
  const year = new Date().getFullYear();
  const router = useRouter();

  // Handle OTP input
  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return; // only digits allowed

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Clear error when typing (Removed: if (error) setError("");)

    // Auto focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  // Watch OTP and auto-continue when complete
  useEffect(() => {
    const otpCode = otp.join("");
    if (otpCode.length === 6 && !otp.includes("")) {
      console.log("✅ OTP Verified (Auto):", otpCode);
      setTimeout(() => router.push("/reset"), 600); // slight delay for animation
    }
  }, [otp, router]);

  // Manual Continue (still optional)
  const handleContinue = () => {
    const otpCode = otp.join("");
    // setError(""); // Removed

    // Validation check removed, simply push to next page
    if (otpCode.length === 6) {
      console.log("✅ OTP Verified (Manual):", otpCode);
      router.push("/reset");
    } else {
      console.log("⚠️ OTP not complete. Not routing.");
      // In a real scenario, you might add a minimal visual cue here if no error is shown.
    }
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-between bg-white font-sans px-4 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* ===== Center Section ===== */}
      <motion.div
        className="flex flex-col items-center justify-center flex-grow"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {/* Logo */}
        <motion.div
          className="flex flex-col items-center mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
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

        {/* Texts */}
        <motion.div
          className="text-center mb-8"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
            We just sent you an OTP
          </h1>
          <p className="text-gray-500 text-sm sm:text-base max-w-sm">
            Enter the security code we sent to{" "}
            <span className="font-medium text-gray-700">xyz@gmail.com</span>
          </p>
        </motion.div>

        {/* OTP Inputs */}
        <motion.div
          className="flex justify-center space-x-2 sm:space-x-3 mb-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          {otp.map((digit, index) => (
            <motion.input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              className="w-10 h-12 sm:w-12 sm:h-14 text-center border border-gray-300 rounded-md text-lg font-semibold focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-150"
              whileFocus={{ scale: 1.1, borderColor: "#a855f7" }}
            />
          ))}
        </motion.div>

        {/* Error Message (Removed) */}
        {/* {error && ( ... )} */}

        {/* Continue Button (fallback) - Retained purple styling */}
        <motion.button
          onClick={handleContinue}
          className="w-full max-w-md py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full text-base font-semibold hover:opacity-90 transition mt-2"
          whileTap={{ scale: 0.97 }}
        >
          Continue
        </motion.button>

        {/* Resend Link */}
        <motion.p
          className="text-sm text-gray-600 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Didn’t receive the code?{" "}
          <button
            onClick={() => console.log("Resend OTP")}
            className="text-purple-600 font-medium hover:underline"
          >
            Resend
          </button>
        </motion.p>
      </motion.div>

      {/* Footer */}
      <motion.footer
        className="text-xs text-gray-400 text-center mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        © {year} FormServer — Designed by Tosh Consult Inc.
      </motion.footer>
    </motion.div>
  );
}