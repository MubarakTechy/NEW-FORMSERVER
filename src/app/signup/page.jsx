"use client";

import React from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import max from "@/images/snap.png"; // Assuming this path is correct

export default function SignupPage() {
  // --- STATE AND FUNCTIONS REMOVED ---

  // Placeholder values and controls for rendering purposes only
  const showPassword = false;
  const showConfirm = false;
  const form = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    news: false,
  };
  
  // Placeholder handlers to prevent runtime errors on form elements
  const handleClick = () => console.log("Button clicked (No logic)");
  const handleToggle = () => console.log("Eye icon clicked (No logic)");

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-start bg-[#FBFBFD] py-6 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* ===== Logo + Stepper ===== */}
      <motion.div
        className="flex flex-col items-center mb-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image src={max} alt="FORM Server Logo" width={80} height={60} priority />
        <h1 className="text-3xl font-semibold text-gray-800 font-serif text-center mt-2">
          Create Account
        </h1>

        {/* Stepper */}
        <div className="flex items-center justify-center gap-0 relative mt-1 scale-90">
          {/* Step 1 */}
          <div className="flex flex-col items-center z-10">
            <p className="bg-gradient-to-r mt-2 from-purple-600 to-purple-500 text-white rounded-full text-base w-8 h-8 flex items-center justify-center font-semibold shadow-md">
              1
            </p>
            <h2 className="mt-1 text-xs font-medium text-gray-700">Create Account</h2>
          </div>

          <div className="w-24 sm:w-32 md:w-52 h-[2px] bg-slate-200 -ml-[25px] -mr-[15px]" />

          {/* Step 2 */}
          <div className="flex flex-col items-center z-10">
            <div className="bg-white mt-2 text-purple-600 border-purple-600 border-[2px] rounded-full text-base w-8 h-8 flex items-center justify-center font-semibold shadow-md">
              2
            </div>
            <h2 className="mt-1 text-xs font-medium text-gray-700">Purpose</h2>
          </div>

          <div className="w-24 sm:w-32 md:w-52 h-[2px] bg-slate-200 -ml-[25px] -mr-[10px]" />

          {/* Step 3 */}
          <div className="flex flex-col items-center z-10">
            <div className="bg-white mt-2 text-purple-600 border-purple-600 border-[2px] rounded-full text-base w-8 h-8 flex items-center justify-center font-semibold shadow-md">
              3
            </div>
            <h2 className="mt-1 text-xs font-medium text-gray-700">Sign In</h2>
          </div>
        </div>
      </motion.div>

      {/* ===== FORM SECTION (Design Only) ===== */}
      <motion.div
        className="w-[90vw] max-w-md bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-5"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {/* Full Name */}
        <div>
          <label className="text-base text-gray-800 font-medium">
            Enter your full name
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            // onChange={handleChange} // Removed
            className="mt-2 w-full rounded-full border border-gray-300 px-5 py-3 text-base focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-base text-gray-800 font-medium">
            Enter your email address
          </label>
          <input
            type="email"
            name="email"
            placeholder="xyz@gmail.com"
            value={form.email}
            // onChange={handleChange} // Removed
            className="mt-2 w-full rounded-full border border-gray-300 px-5 py-3 text-base focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <label className="text-base text-gray-800 font-medium">
            Account Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter Password"
            value={form.password}
            // onChange={handleChange} // Removed
            className="mt-2 w-full rounded-full border border-gray-300 px-5 py-3 pr-10 text-base focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <button
            type="button"
            onClick={handleToggle} 
            className="absolute right-4 top-9 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <label className="text-base text-gray-800 font-medium">
            Confirm Password
          </label>
          <input
            type={showConfirm ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            className="mt-2 w-full rounded-full border border-gray-300 px-5 py-3 pr-10 text-base focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <button
            type="button"
            onClick={handleToggle} // Changed to placeholder function
            className="absolute right-4 top-9 text-gray-400 hover:text-gray-600"
          >
            {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Checkbox */}
        <div className="flex items-center space-x-3 pt-2">
          <input
            type="checkbox"
            name="news"
            checked={form.news}
            className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
            readOnly 
          />
          <label className="text-sm text-gray-700">
            Please send me occasional FormServer news updates
          </label>
        </div>

        <p className="text-sm text-red-500 font-medium text-center h-5"></p>
        

        {/* Create Account Button */}
        <motion.button
          type="button"
          onClick={handleClick} // Changed to placeholder function
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
          className="w-full bg-gradient-to-r from-purple-500 to-purple-800 text-white rounded-full py-3 text-base font-semibold hover:opacity-90 transition"
        >
          Create Account
        </motion.button>

        {/* Divider */}
        <div className="flex items-center my-3">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="px-3 text-sm text-gray-500">Or sign up with</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Social Buttons */}
        <motion.div
          className="grid grid-cols-2 gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <button onClick={handleClick} className="flex items-center justify-center gap-2 border border-gray-300 rounded-full py-2 text-sm hover:bg-gray-50">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-4 h-4"
            />
            Google
          </button>
          <button onClick={handleClick} className="flex items-center justify-center gap-2 border border-gray-300 rounded-full py-2 text-sm hover:bg-gray-50">
            <img
              src="https://www.svgrepo.com/show/448224/facebook.svg"
              alt="Facebook"
              className="w-4 h-4"
            />
            Facebook
          </button>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <p className="text-center text-[15px] text-gray-600 mt-3">
        Already have an account?{" "}
        <Link href="/login" className="text-purple-600 font-medium hover:underline">
          Sign in
        </Link>
      </p>
    </motion.div>
  );
}