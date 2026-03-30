"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";           // ← added import
import main from "../images/main.png";
import spotify from "../images/spotify.png";
import Walmart from "../images/Walmart_logo_(2008).svg 2.png";
import Mobile from "../images/T-Mobile_logo.svg 3.png";
import pngimg from "../images/pngimg.com - google_PNG19644 2.png";
import amazon from "../images/amazon-logo-black-transparent 2.png";
import OpenAI from "../images/OpenAI_Logo.svg 3.png";

const Hero = () => {
  const logos = [amazon, pngimg, Walmart, spotify, OpenAI, Mobile];

  // Animation variants (can be tweaked)
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

  return (
    <div className="relative min-h-[95vh] py-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden bg-white">

      {/* ── Background gradient blobs (unchanged, static) ── */}
      <div aria-hidden className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full"
          style={{
            top: "-8%", left: "-18%", width: "62%", height: "78%",
            background: "radial-gradient(ellipse at 40% 40%, rgba(216,180,254,0.55) 0%, rgba(192,132,252,0.28) 42%, transparent 68%)",
            filter: "blur(52px)",
          }}
        />
        <div className="absolute rounded-full"
          style={{
            top: "2%", right: "-14%", width: "58%", height: "72%",
            background: "radial-gradient(ellipse at 60% 35%, rgba(249,168,212,0.38) 0%, rgba(216,180,254,0.22) 38%, transparent 66%)",
            filter: "blur(56px)",
          }}
        />
        <div className="absolute"
          style={{
            top: "12%", left: "50%", transform: "translateX(-50%)",
            width: "48%", height: "38%",
            background: "radial-gradient(ellipse at center, rgba(233,213,255,0.32) 0%, transparent 62%)",
            filter: "blur(36px)",
          }}
        />
      </div>

      {/* ── Main content with staggered animation ── */}
      <motion.div
        className="relative z-10 mx-auto max-w-7xl"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Top pill link */}
        <motion.div variants={fadeUp} className="mb-4">
          <a className="inline-flex items-center gap-1.5 text-xs font-medium text-purple-700 bg-purple-50 border border-purple-200 rounded-full px-3 py-1 no-underline hover:bg-purple-100 transition-colors" href="#">
            For new update, you can check it out here
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        {/* 50k+ */}
        <motion.p variants={fadeUp} className="mb-3 text-sm font-medium text-gray-900">
          <strong className="font-bold">50k+</strong> Active users worldwide
        </motion.p>

        {/* Headline */}
        <motion.h1 variants={fadeUp} className="text-4xl md:text-4xl lg:text-[4.4rem] tracking-tight max-w-[55rem] mx-auto mb-5">
          Collect <span className="text-gray-950 text-[65px] leading-[1.05] font-bold "> Form Data and Survey Feedback </span>  in One Place
        </motion.h1>

        {/* Subtext */}
        <motion.p variants={fadeUp} className="mt-3 max-w-[45rem] mx-auto text-lg text-gray-500 leading-relaxed">
          Use FormServer to connect your forms with instant endpoints, run surveys, and view every response from your dashboard.
        </motion.p>

        {/* CTA */}
        <motion.div variants={fadeUp} className="mt-8">
          <button
            className="px-10 py-3.5 text-base font-semibold text-white rounded-full border-none cursor-pointer transition-transform duration-150 hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #9333ea 0%, #7c3aed 100%)",
              boxShadow: "0 8px 28px -6px rgba(124,58,237,0.55)",
            }}
          >
            Get Started
          </button>
        </motion.div>

        {/* Dashboard image with a subtle scale + fade */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
          }}
          className="max-w-4xl mx-auto mt-14 md:mt-20"
        >
          <div
            className="overflow-hidden transition-shadow duration-300 border rounded-2xl hover:shadow-purple-300"
            style={{
              borderColor: "rgba(167,139,250,0.2)",
              boxShadow: "0 0 0 1px rgba(167,139,250,0.18), 0 20px 60px -12px rgba(124,58,237,0.22), 0 40px 80px -24px rgba(167,139,250,0.14)",
            }}
          >
            <Image
              src={main}
              alt="FormServer Dashboard Screenshot"
              width={1200}
              height={750}
              className="block w-full h-auto"
              priority
            />
          </div>
        </motion.div>
      </motion.div>

      {/* ── Logos (static, but each fades up with delay) ── */}
      <motion.div
        className="relative z-10 mt-20"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.4 }
          }
        }}
      >
        <div className="flex flex-wrap items-center justify-center gap-10">
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex items-center justify-center w-[110px] h-[44px]"
            >
              <Image
                src={logo}
                alt="Brand Logo"
                width={110}
                height={44}
                className="object-contain transition-opacity duration-200 opacity-50 hover:opacity-80"
                style={{ maxHeight: "34px", width: "auto" }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  );
};

export default Hero;