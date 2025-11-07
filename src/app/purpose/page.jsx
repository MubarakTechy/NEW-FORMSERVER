"use client";

import React, { useState } from "react";
import Image from "next/image";
import max from "@/images/snap.png";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const PurposePage = () => {
  const [selected, setSelected] = useState("");
  // const [error, setError] = useState(""); // Error state removed
  const router = useRouter();
  const year = new Date().getFullYear();

  const handleProceed = () => {
    // Validation check removed
    router.push("/login");
  };

  const handleSelect = (id) => {
    setSelected(id);
    // Error clearing removed
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-[#FBFBFD] py-8 px-4 overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Outer container - Error shake class removed */}
      <motion.div
        className={`bg-white rounded-2xl shadow-sm border border-gray-100 w-full max-w-4xl p-6 sm:p-10 text-center overflow-hidden`}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* ===== Logo & Header ===== */}
        <motion.div
          className="flex flex-col items-center mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={max}
            alt="FORM Server Logo"
            width={80}
            height={60}
            priority
            className="drop-shadow-sm"
          />
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 font-serif text-center mt-2 px-2">
            What do you plan on using Form Server For?
          </h1>

          {/* Stepper */}
          <div className="flex items-center justify-center flex-wrap gap-0 relative mt-3 scale-90 sm:scale-100">
            {/* Step 1 */}
            <div className="flex flex-col items-center z-10 cursor-pointer">
              <p className="bg-gradient-to-r mt-2 from-purple-600 to-purple-500 text-white rounded-full text-sm sm:text-base w-8 h-8 flex items-center justify-center font-semibold shadow-md">
                1
              </p>
              <h2 className="mt-1 text-xs font-medium text-gray-700">
                Create Account
              </h2>
            </div>

            <div className="w-20 sm:w-32 md:w-44 h-[2px] bg-slate-200 mx-[-10px] z-0"></div>

            {/* Step 2 */}
            <div className="flex flex-col items-center z-10 cursor-pointer">
              <div className="bg-gradient-to-r mt-2 from-purple-600 to-purple-500 text-white rounded-full text-sm sm:text-base w-8 h-8 flex items-center justify-center font-semibold shadow-md">
                2
              </div>
              <h2 className="mt-1 text-xs font-medium text-gray-700">Purpose</h2>
            </div>

            <div className="w-20 sm:w-32 md:w-44 h-[2px] bg-slate-200 mx-[-10px] z-0"></div>

            {/* Step 3 */}
            <div className="flex flex-col items-center z-10 cursor-pointer">
              <div className="bg-white mt-2 text-purple-600 border-purple-600 border-[2px] rounded-full text-sm sm:text-base w-8 h-8 flex items-center justify-center font-semibold shadow-md">
                3
              </div>
              <h2 className="mt-1 text-xs font-medium text-gray-700">Sign In</h2>
            </div>
          </div>
        </motion.div>

        {/* ===== Purpose Options ===== */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mb-8 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          {[
            {
              id: "forms",
              title: "Forms",
              desc: "I want to collect form submissions easily.",
            },
            {
              id: "surveys",
              title: "Surveys",
              desc: "I want to create surveys and gather responses.",
            },
            {
              id: "both",
              title: "Both",
              desc: "I want to use FormServer for both forms and surveys.",
            },
          ].map((opt) => (
            <motion.div
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`relative border rounded-2xl p-6 sm:p-8 cursor-pointer transition-all duration-200 flex flex-col justify-center items-center text-center ${
                selected === opt.id
                  ? "border-purple-500 bg-purple-50 shadow-[0_0_10px_rgba(168,85,247,0.2)]"
                  : "border-gray-200 bg-white hover:border-purple-300"
              }`}
            >
              {/* Selection Circle */}
              <div
                className={`absolute top-4 right-4 w-6 h-6 rounded-full border-[2.5px] transition-all duration-200 flex items-center justify-center ${
                  selected === opt.id
                    ? "border-purple-500 shadow-[0_0_5px_rgba(168,85,247,0.4)]"
                    : "border-gray-300"
                }`}
              >
                <div
                  // Retaining original pink gradient for the selection dot
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-200 ${
                    selected === opt.id
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 scale-100"
                      : "bg-transparent scale-75"
                  }`}
                ></div>
              </div>

              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
                {opt.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {opt.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Error message animation removed */}

        {/* ===== Proceed Button - Changed gradient to pure purple ===== */}
        <motion.button
          onClick={handleProceed}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full py-3 px-10 text-base sm:text-lg font-semibold hover:opacity-90 transition"
        >
          Proceed to Sign In
        </motion.button>

        <p className="text-xs sm:text-sm text-gray-500 mt-8">
          © {year} FormServer — Designed by Tosh Consult Inc.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default PurposePage;