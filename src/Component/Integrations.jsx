"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import max from "../images/pop.png";

const Integrations = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf7ff] to-[#f4effc] flex items-center justify-center p-4 md:p-8 overflow-hidden">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-10 md:mb-20">
          <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-2 md:mb-4">
            Integrations
          </h1>
          <p className="text-base md:text-xl text-gray-600">
            Connect FormServer with your favorite tools in one click.
          </p>
        </div>

        {/* Integration Hub */}
        <div className="relative flex items-center justify-center h-[600px] md:h-[500px]">
          {/* Animated Background Circles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="absolute w-48 h-48 md:w-64 md:h-64 bg-purple-200 rounded-full opacity-30"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-60 h-60 md:w-80 md:h-80 bg-purple-200 rounded-full opacity-20"
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.div
              className="absolute w-72 h-72 md:w-96 md:h-96 bg-purple-200 rounded-full opacity-10"
              animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
            />
            <motion.div
              className="absolute w-80 h-80 md:w-[28rem] md:h-[28rem] bg-purple-100 rounded-full opacity-5"
              animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.15, 0.05] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1.5 }}
            />
          </div>

          {/* Center Icon with Pop Animation */}
          <motion.div
            className="relative z-10 w-20 h-20 md:w-24 md:h-24 bg-white rounded-full shadow-2xl flex items-center justify-center"
            animate={{ 
              scale: [1, 1.15, 1],
              boxShadow: [
                "0 20px 60px rgba(168, 85, 247, 0.4)",
                "0 25px 80px rgba(168, 85, 247, 0.6)",
                "0 20px 60px rgba(168, 85, 247, 0.4)"
              ]
            }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src={max}
                alt="FormServer Logo"
                width={400}
                height={400}
                className=" object-cover h-[30vh] "
                priority
              />
            </div>
          </motion.div>

          {/* GitBook - Top Left */}
          <div className="absolute" style={{ top: '10%', left: '0%' }}>
            <div className="relative">
              <svg className="absolute top-4 left-full w-16 md:w-32 lg:w-48 h-2">
                <line x1="0" y1="1" x2="100%" y2="1" stroke="#9CA3AF" strokeWidth="2" />
                <circle cx="0" cy="1" r="4" fill="#374151" />
              </svg>
              <div className="bg-white rounded-xl md:rounded-2xl shadow-xl px-3 py-2 md:px-6 md:py-4 flex items-center gap-2 md:gap-3 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-900 rounded flex items-center justify-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"/>
                  </svg>
                </div>
                <span className="text-sm md:text-xl font-bold text-gray-900">GITBOOK</span>
              </div>
            </div>
          </div>

          {/* Gatsby - Middle Left */}
          <div className="absolute" style={{ top: '42%', left: '0%' }}>
            <div className="relative">
              <svg className="absolute top-4 left-full w-20 md:w-36 lg:w-52 h-2">
                <line x1="0" y1="1" x2="100%" y2="1" stroke="#9B87C7" strokeWidth="2" />
                <circle cx="0" cy="1" r="4" fill="#9B87C7" />
              </svg>
              <div className="bg-white rounded-xl md:rounded-2xl shadow-xl px-3 py-2 md:px-6 md:py-4 flex items-center gap-2 md:gap-3 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs md:text-sm">G</span>
                </div>
                <span className="text-sm md:text-xl font-bold text-gray-900">Gatsby</span>
              </div>
            </div>
          </div>

          {/* Jekyll - Bottom Left */}
          <div className="absolute" style={{ bottom: '10%', left: '0%' }}>
            <div className="relative">
              <svg className="absolute top-4 left-full w-16 md:w-32 lg:w-44 h-2">
                <line x1="0" y1="1" x2="100%" y2="1" stroke="#FCA5A5" strokeWidth="2" />
                <circle cx="0" cy="1" r="4" fill="#DC2626" />
              </svg>
              <div className="bg-white rounded-xl md:rounded-2xl shadow-xl px-3 py-2 md:px-6 md:py-4 flex items-center gap-2 md:gap-3 hover:shadow-2xl transition-all duration-300 hover:scale-105" style={{ boxShadow: '0 10px 40px rgba(220, 38, 38, 0.15)' }}>
                <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                  </svg>
                </div>
                <span className="text-sm md:text-xl font-bold text-gray-400 italic">Jekyll</span>
              </div>
            </div>
          </div>

          {/* Shopify - Top Right */}
          <div className="absolute" style={{ top: '10%', right: '0%' }}>
            <div className="relative">
              <svg className="absolute top-4 right-full w-16 md:w-32 lg:w-48 h-2">
                <line x1="0" y1="1" x2="100%" y2="1" stroke="#86EFAC" strokeWidth="2" />
                <circle cx="100%" cy="1" r="4" fill="#22C55E" />
              </svg>
              <div className="bg-white rounded-xl md:rounded-2xl shadow-xl px-3 py-2 md:px-6 md:py-4 flex items-center gap-2 md:gap-3 hover:shadow-2xl transition-all duration-300 hover:scale-105" style={{ boxShadow: '0 10px 40px rgba(34, 197, 94, 0.15)' }}>
                <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="#95BF47">
                  <path d="M16.9 11.5c-.2-.1-1.1-.3-2.5-.3-1.8 0-2.3.6-2.3 1.1 0 .6.8.9 2.2 1.4 2.1.7 3.5 1.5 3.5 3.4 0 2.3-1.8 3.7-4.8 3.7-2.3 0-4.3-.9-4.3-.9l.8-2.6s2.1 1 3.6 1c1.1 0 1.6-.5 1.6-1.1 0-.8-.7-1-2.2-1.6-1.8-.6-3.4-1.5-3.4-3.3 0-2.3 2-3.8 5.2-3.8 2 0 2.9.4 2.9.4l-.9 2.6zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
                </svg>
                <span className="text-sm md:text-xl font-bold text-gray-900">shopify</span>
              </div>
            </div>
          </div>

          {/* 11ty - Middle Right */}
          <div className="absolute" style={{ top: '42%', right: '0%' }}>
            <div className="relative">
              <svg className="absolute top-4 right-full w-20 md:w-36 lg:w-52 h-2">
                <line x1="0" y1="1" x2="100%" y2="1" stroke="#6B7280" strokeWidth="2" />
                <circle cx="100%" cy="1" r="4" fill="#111827" />
              </svg>
              <div className="bg-white rounded-xl md:rounded-2xl shadow-xl px-3 py-2 md:px-6 md:py-4 flex items-center gap-2 md:gap-3 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <span className="text-lg md:text-2xl font-bold text-gray-900">11ty</span>
              </div>
            </div>
          </div>

          {/* Next.js - Bottom Right */}
          <div className="absolute" style={{ bottom: '10%', right: '0%' }}>
            <div className="relative">
              <svg className="absolute top-4 right-full w-16 md:w-32 lg:w-44 h-2">
                <line x1="0" y1="1" x2="100%" y2="1" stroke="#6B7280" strokeWidth="2" />
                <circle cx="100%" cy="1" r="4" fill="#111827" />
              </svg>
              <div className="bg-white rounded-xl md:rounded-2xl shadow-xl px-3 py-2 md:px-6 md:py-4 flex items-center gap-2 md:gap-3 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <svg className="w-6 h-6 md:w-10 md:h-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.049-.106.005-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
                </svg>
                <span className="text-sm md:text-xl font-bold text-gray-900">.JS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;