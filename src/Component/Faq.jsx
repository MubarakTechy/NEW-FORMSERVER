"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import bgImage from "../images/background.png";
import manImage from "../images/man.png";

const faqData = [
  {
    question: "Does FormServer offer surveys?",
    answer: "Yes, you can easily conduct surveys with FormServer too.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Absolutely! You can upgrade, downgrade, or cancel your plan at any time directly from your dashboard settings.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time. You will retain access to your paid features until the end of your current billing cycle.",
  },
  {
    question: "How does billing work?",
    answer:
      "Billing is handled securely through Stripe. Depending on your plan, you will be billed monthly or annually, starting from the day you subscribe.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "You can change your email in your 'Account Settings' page within the FormServer dashboard. For security, you may be asked to confirm the change via both the old and new email addresses.",
  },
];

const FaqItem = ({ question, answer, isOpen, toggleFaq }) => {
  return (
    
    <div className="border-b border-gray-700 last:border-b-0">
      <button
        className="w-full py-6 flex justify-between items-center text-left"
        onClick={toggleFaq}
      >
        <span className="text-lg text-black font-medium hover:text-purple-400 transition-colors">
          {question}
        </span>
        <motion.span
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 0 : 180 }}
          transition={{ duration: 0.3 }}
          className="text-xl text-gray-400"
        >
          {isOpen ? "—" : "+"}
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="text-gray-400 text-base pb-4">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
     <>
    <section className=" bg-gradient-to-b from-[#fff8fd] via-[#fdf8ff] to-[#f7f3ff] transition-colors duration-500  py-20 md:py-32"> {/* same as Work.jsx */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4 opacity-90">
            Frequently Asked Questions
          </h2>
          <p className="text-black max-w-2xl mx-auto">
            Find answers to your questions right here, and don’t hesitate to{" "}
            <a
              href="#"
              className="text-purple-400 hover:text-purple-300 transition-colors underline"
            >
              contact us
            </a>{" "}
            if you couldn’t find what you’re looking for.
          </p>
        </div>

        <div className="divide-y divide-gray-700">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              toggleFaq={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>

      <section className="relative w-full rounded-[24px] overflow-hidden bg-[#FCEFFF] py-16 px-6 md:px-16 mt-16">
      {/* Background image placeholder */}
      <div className="absolute inset-0 w-full h-full">
        {/* Uncomment when background is ready */}
        <Image
          src={bgImage}
          alt="Background pattern"
          fill
          className="object-cover object-center opacity-90"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        {/* Text Section */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            <span className="text-black">Refer and Earn</span>
          </h2>

          <p className="text-2xl text-purple-700 font-medium mb-3">
            Invite your friends and get rewarded!
          </p>

          <p className="text-gray-700 mb-8 text-lg">
            Enjoy your rewards with your friends through our rewards point
            system
          </p>

          <button className="bg-white border border-gray-300 px-8 py-3 rounded-xl text-black font-medium hover:bg-gray-100 transition">
            Refer Now!
          </button>

          <p className="text-sm text-purple-500 mt-4">
            Terms and condition apply
          </p>
        </div>

        {/* Right Side Image Placeholder */}
        <div className="relative w-[300px] md:w-[400px] lg:w-[450px] mt-12 md:mt-0">
          {/* Uncomment when man image is ready */}
          <Image
            src={manImage}
            alt="Man using phone"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </section>
    </section>
     
   </>
  );
};

export default Faq;
