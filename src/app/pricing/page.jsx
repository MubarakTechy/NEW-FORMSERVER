"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer";
import spotify from "../../images/spotify.png";
import Walmart from "../../images/Walmart_logo_(2008).svg 2.png";
import Mobile from "../../images/T-Mobile_logo.svg 3.png";
import pngimg from "../../images/pngimg.com - google_PNG19644 2.png";
import amazon from "../../images/amazon-logo-black-transparent 2.png";
import OpenAI from "../../images/OpenAI_Logo.svg 3.png";
import Faq from "../../Component/Faq";



const Page = () => {
  const [plan, setPlan] = useState("monthly");
  const logos = [Walmart, spotify, Mobile, pngimg, OpenAI, amazon];
  

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col items-center py-16 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-900">
          We’ve got a plan that’s perfect for you
        </h2>
        <p className="text-gray-500 mt-2">
          Select from best plans, ensuring a perfect match. Need more or less?
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex bg-white shadow-sm rounded-full mb-12 overflow-hidden">
        <button
          onClick={() => setPlan("monthly")}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            plan === "monthly"
              ? "bg-purple-600 text-white shadow-md"
              : "text-gray-700"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setPlan("yearly")}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            plan === "yearly"
              ? "bg-purple-600 text-white shadow-md"
              : "text-gray-700"
          }`}
        >
          Yearly (save 10%)
        </button>
      </div>

      {/* Plans */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Free Plan */}
        <div className="bg-white rounded-2xl shadow-md p-8 text-center border border-gray-100">
          <h3 className="text-xl font-semibold mb-4">Free</h3>
          <p className="text-4xl font-bold mb-6">₦0<span className="text-lg font-normal">/month</span></p>
          <ul className="text-gray-600 space-y-3 mb-8">
            <li>✓ 20 submission/ Months</li>
            <li>✓ Can not upload file</li>
            <li>✓ Maximum of 3 projects</li>
            <li>✓ Data Analysis = Null</li>
          </ul>
          <button className="w-full py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition">
            Start For Free
          </button>
        </div>

        {/* Silver Plan */}
        <div className="bg-white rounded-2xl shadow-md p-8 text-center border border-gray-100">
          <h3 className="text-xl font-semibold mb-4">Silver</h3>
          <p className="text-4xl font-bold mb-6">₦10,000<span className="text-lg font-normal">/month</span></p>
          <ul className="text-gray-600 space-y-3 mb-8">
            <li>✓ 100 submission/ Months</li>
            <li>✓ 70 upload/ month</li>
            <li>✓ Maximum of 5 projects</li>
            <li>✓ Data Analysis = Null</li>
          </ul>
          <button className="w-full py-3 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition">
            Upgrade to Silver
          </button>
        </div>

        {/* Premium Gold Plan */}
        <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-2xl shadow-md p-8 text-center border border-yellow-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-0 h-0 border-l-[150px] border-l-transparent border-b-[150px] border-b-yellow-300 opacity-30"></div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Premium Gold</h3>
          <p className="text-4xl font-bold mb-6 text-gray-900">
            ₦30,000<span className="text-lg font-normal">/month</span>
          </p>
          <ul className="text-gray-700 space-y-3 mb-8">
            <li>✓ Unlimited submission/ Months</li>
            <li>✓ Unlimited file upload/ month</li>
            <li>✓ Unlimited projects</li>
            <li>✓ Data Analysis</li>
          </ul>
          <button className="w-full py-3 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition">
            Go Premium
          </button>
        </div>
      </div>
    </div>
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
     <Faq />
    <Footer />
    </>
  );
};

export default Page;
