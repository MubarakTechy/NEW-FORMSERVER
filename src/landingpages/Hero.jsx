"use client";
import React from "react";
import Image from "next/image";
import main from "../images/main.png";
import spotify from "../images/spotify.png";
import Walmart from "../images/Walmart_logo_(2008).svg 2.png";
import Mobile from "../images/T-Mobile_logo.svg 3.png";
import pngimg from "../images/pngimg.com - google_PNG19644 2.png";
import amazon from "../images/amazon-logo-black-transparent 2.png";
import OpenAI from "../images/OpenAI_Logo.svg 3.png";
const Hero = () => {
const logos = [Walmart, spotify, Mobile, pngimg, OpenAI, amazon];

return (
  <div
    className="relative min-h-[90vh] py-16 px-4 sm:px-6 lg:px-8 
    text-center overflow-hidden bg-white dark:bg-[#faedf7]"
  >
    <div className="max-w-7xl mx-auto">
      {/* Top Info Link */}
      <div className="mb-4">
        <a
          href="#"
          className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-500"
        >
          For new update, you can check it out here
          <svg
            className="ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </a>
      </div>

      {/* User Count */}
      <p className="text-black mb-2 text-sm font-medium">
        <strong>50k+</strong> Active users worldwide
      </p>

      {/* Main Headline */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-4 leading-tight">
        Collect Form Data and Survey Feedback in One Place
      </h1>

      {/* Subtext */}
      <p className="mt-3 max-w-2xl mx-auto text-xl text-black sm:mt-5">
        Use FormServer to connect your forms with instant endpoints, run
        surveys, and view every response from your dashboard.
      </p>

      {/* CTA Button */}
      <div className="mt-8">
        <button className="px-10 py-3 text-lg font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 shadow-xl transition duration-150 ease-in-out transform hover:scale-105">
          Get Started
        </button>
      </div>

      {/* Dashboard Image */}
      <div className="mt-12 md:mt-16 relative mx-auto max-w-4xl">
        <div className="relative rounded-lg shadow-2xl transition duration-300 hover:shadow-purple-500/50">
          <Image
            src={main}
            alt="FormServer Dashboard Screenshot"
            width={1200}
            height={750}
            className="rounded-lg border border-gray-100 dark:border-gray-800"
            priority
          />
        </div>
      </div>
    </div>

    {/* Scrolling Logos Section */}
    <div className="mt-16 overflow-hidden">
      <div className="flex gap-12 animate-scroll-x w-[200%]">
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex-shrink-0 w-32 sm:w-40 md:w-48">
            <Image
              src={logo}
              alt="Brand Logo"
              width={200}
              height={100}
              className="object-contain opacity-80 hover:opacity-100 transition"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default Hero;
