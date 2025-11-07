"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import max from "@/images/snap.png";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState(""); // Removed error state
  const router = useRouter();
  const year = new Date().getFullYear();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation and error setting removed
    
    console.log("✅ Logged In (Simulated):", { email, password });
    router.push("/dashboard"); // Navigate immediately
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen flex flex-col items-center justify-center bg-white font-sans p-4 overflow-hidden"
    >
      {/* ===== TOP SECTION ===== */}
      <div className="flex flex-col items-center mb-6 mt-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Image
            src={max}
            alt="FORM Server Logo"
            width={80}
            height={60}
            className="object-contain"
            priority
          />
        </motion.div>

        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 font-serif text-center mt-2">
          Welcome Back to Form Server
        </h1>

        {/* Stepper */}
        <div className="flex items-center justify-center flex-wrap gap-0 relative mt-3 scale-90 sm:scale-100">
          {/* Step 1 */}
          <div className="flex flex-col items-center cursor-pointer z-10">
            <p className="bg-gradient-to-r mt-2 from-purple-600 to-purple-500 text-white rounded-full text-sm sm:text-base w-8 h-8 flex items-center justify-center font-semibold shadow-md">
              1
            </p>
            <h2 className="mt-1 text-xs font-medium text-gray-700">Create Account</h2>
          </div>

          <div className="w-20 sm:w-32 md:w-44 h-[2px] bg-slate-200 mx-[-10px] z-0"></div>

          {/* Step 2 */}
          <div className="flex flex-col items-center cursor-pointer z-10">
            <div className="bg-gradient-to-r mt-2 from-purple-600 to-purple-500 text-white rounded-full text-sm sm:text-base w-8 h-8 flex items-center justify-center font-semibold shadow-md">
              2
            </div>
            <h2 className="mt-1 text-xs font-medium text-gray-700">Purpose</h2>
          </div>

          <div className="w-20 sm:w-32 md:w-44 h-[2px] bg-slate-200 mx-[-10px] z-0"></div>

          {/* Step 3 */}
          <div className="flex flex-col items-center cursor-pointer z-10">
            <div className="bg-gradient-to-r mt-2 from-purple-600 to-purple-500 text-white rounded-full text-sm sm:text-base w-8 h-8 flex items-center justify-center font-semibold shadow-md">
              3
            </div>
            <h2 className="mt-1 text-xs font-medium text-gray-700">Sign In</h2>
          </div>
        </div>
      </div>

      {/* ===== LOGIN FORM ===== */}
      <motion.div
        // Removed error shaking animation
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md bg-white border border-gray-100 rounded-2xl shadow-sm p-8"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter your email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                // setError(""); // Error removal adjustment
              }}
              placeholder="xyz@gmail.com"
              // Removed conditional error border class
              className={`w-full px-5 py-3 rounded-full text-base border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none transition`}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Account Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  // setError(""); // Error removal adjustment
                }}
                placeholder="Enter Password"
                // Removed conditional error border class
                className={`w-full px-5 py-3 rounded-full text-base border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none pr-10 transition`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <p className="text-right mt-2">
              <a
                href="/forget"
                className="text-sm text-purple-600 hover:underline font-medium"
              >
                Forgot Password? Get a new one
              </a>
            </p>
          </div>

          {/* Error Message removed */}

          {/* Button - Updated to pure purple gradient */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full text-base font-semibold hover:opacity-90 transition"
          >
            Sign In
          </motion.button>
        </form>

        {/* Signup */}
        <p className="text-center text-sm text-gray-600 mt-5">
          Don’t have an account yet?{" "}
          <a href="/signup" className="text-purple-600 font-medium hover:underline">
            Create one
          </a>
        </p>

        {/* Footer */}
        <footer className="text-xs text-gray-400 mt-12 text-center">
          © {year} FormServer — Designed by Tosh Consult Inc.
        </footer>
      </motion.div>
    </motion.div>
  );
}