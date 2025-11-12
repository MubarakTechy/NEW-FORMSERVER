"use client";
import React from "react";
import Footer from "@/Component/Footer";
import Navbar from "@/Component/Navbar";
import Faq from "@/landingpages/Faq"



const ContactPage = () => {
  return (
    <>
    <Navbar/>
    <section className="min-h-screen   dark:bg-[#fcfcfc] flex flex-col items-center justify-center px-4 text-black">
      <div className="max-w-2xl w-full text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">Contact Us</h2>
        <p className="text-black mb-10">
          Get in touch with us. We’re here to assist you.
        </p>

        {/* Contact Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-transparent border-b border-black focus:border-purple-500 outline-none py-3 text-sm w-full"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent border-b border-black focus:border-purple-500 outline-none py-3 text-sm w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-transparent border-b border-black focus:border-purple-500 outline-none py-3 text-sm w-full"
            />
            <input
              type="text"
              placeholder="Subject"
              className="bg-transparent border-b border-black focus:border-purple-500 outline-none py-3 text-sm w-full"
            />
          </div>

          <div>
            <textarea
              rows="5"
              placeholder="Message"
              className="bg-transparent border-b border-black focus:border-purple-500 outline-none py-3 text-sm w-full resize-none"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 transition-all text-white font-medium py-3 px-6 rounded-md"
            >
              Leave a message
            </button>
          </div>
        </form>
      </div>
    </section>
    <Faq/>
    <Footer/>
    </>
  );
};

export default ContactPage;
