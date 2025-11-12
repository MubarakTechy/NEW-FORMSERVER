"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import max from "@/images/snap.png"; // Assuming this path is correct

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  // const [loading, setLoading] = useState(false); // Removed

  const year = new Date().getFullYear();

  // ✅ Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // setLoading(true); // Removed
    setTimeout(() => {
      console.log("✅ Password reset successful!");
      // setLoading(false); // Removed
      router.push("/login");
    }, 2000); // 2000ms delay still applies before routing
  };

  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-white font-sans px-4 py-10">
      {/* Center Content - Retained animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center justify-center flex-grow w-full"
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

        {/* Text */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
            Reset your password
          </h1>
          <p className="text-gray-500 text-sm sm:text-base max-w-sm">
            Secure your account by resetting your password.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 w-full max-w-md"
        >
          {/* Password Field */}
          <div className="relative">
            <label className="text-sm text-gray-700 font-medium mb-1 block">
              Enter New Password
            </label>
            <input
              type={showPass ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className={`w-full border border-gray-300 rounded-full py-3 px-4 pr-10 focus:ring-2 focus:ring-purple-500 focus:outline-none`}
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-4 top-[42px] text-gray-500"
            >
              {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <label className="text-sm text-gray-700 font-medium mb-1 block">
              Confirm New Password
            </label>
            <input
              type={showConfirm ? "text" : "password"}
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="Confirm Password"
              className={`w-full border border-gray-300 rounded-full py-3 px-4 pr-10 focus:ring-2 focus:ring-purple-500 focus:outline-none`}
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-[42px] text-gray-500"
            >
              {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Continue Button - Retained purple styling and animation */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            // disabled={loading} // Removed
            // Removed conditional loading classes, keeping only hover
            className={`w-full py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full text-base font-semibold transition hover:opacity-90`}
          >
            Continue {/* Display text simplified */}
          </motion.button>
        </form>
      </motion.div>

      {/* Footer */}
      <footer className="text-xs text-gray-400 text-center mt-10">
        © {year} FormServer — Designed by Tosh Consult Inc.
      </footer>
    </div>
  );
}