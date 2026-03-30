"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

// Animation variants
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

const FaqItem = ({ question, answer, isOpen, toggleFaq, variants }) => {
  return (
    <motion.div
      variants={variants}                    // ← entrance animation from parent stagger
      className="border-b border-gray-700 last:border-b-0"
    >
      <button
        className="flex items-center justify-between w-full py-6 text-left"
        onClick={toggleFaq}
      >
        <span className="text-lg font-medium text-black transition-colors hover:text-purple-400">
          {question}
        </span>
        <motion.span
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 0 : 180 }}
          transition={{ duration: 0.3 }}
          className="text-xl text-black"
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
            <p className="pb-4 text-base text-gray-400">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      className="bg-gradient-to-b from-[#fff8fd] via-[#fdf8ff] to-[#f7f3ff] transition-colors duration-500 py-20 md:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Header with staggered entrance */}
        <motion.div variants={fadeUp} className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-extrabold text-black md:text-5xl opacity-90">
            Frequently Asked Questions
          </h2>
          <p className="max-w-2xl mx-auto text-black">
            Find answers to your questions right here, and don’t hesitate to{" "}
            <a
              href="#"
              className="text-purple-400 underline transition-colors hover:text-purple-300"
            >
              contact us
            </a>{" "}
            if you couldn’t find what you’re looking for.
          </p>
        </motion.div>

        {/* FAQ list with staggered items */}
        <motion.div
          variants={staggerContainer}
          className="divide-y divide-gray-700"
        >
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              toggleFaq={() => toggleFaq(index)}
              variants={fadeUp}               // ← each item uses the fadeUp variant
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Faq;
