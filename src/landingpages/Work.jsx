"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";                // ← added import

// Import your step images
import step1 from "../images/step1.png";
import step2 from "../images/step2.png";
import step3 from "../images/step3.png";
import step4 from "../images/step4.png";

const Work = () => {
  const steps = [
    {
      title: "Step 1: Create Form",
      description: "Log in and create a new form in Form Server.",
      image: step1,
    },
    {
      title: "Step 2: Copy Your Endpoint Link",
      description: "Each form generates a unique endpoint URL.",
      image: step2,
    },
    {
      title: "Step 3: Paste on Your Website",
      description: "Add your endpoint URL in your form’s action attribute.",
      image: step3,
    },
    {
      title: "Step 4: View Submissions in Your Dashboard",
      description: "All form and survey submissions appear in your dashboard.",
      image: step4,
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
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.section
      className="py-20 bg-gradient-to-b from-[#fff8fd] via-[#fdf8ff] to-[#f7f3ff] transition-colors duration-500"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="px-6 mx-auto text-center max-w-7xl">
        {/* Section Header with staggered children */}
        <motion.div variants={fadeUp}>
          <h2 className="mb-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            How It Works
          </h2>
        </motion.div>
        <motion.div variants={fadeUp}>
          <p className="mb-16 text-lg text-gray-600">
            Just three steps: build, connect, and view submissions in your
            dashboard.
          </p>
        </motion.div>

        {/* Steps Grid with staggered cards */}
        <motion.div
          className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-12"
          variants={staggerContainer}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-white/90 backdrop-blur-sm border border-[#f2e9fb] rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-8 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image Section */}
              <div className="mb-6">
                <Image
                  src={step.image}
                  alt={step.title}
                  className="object-contain w-full h-48 rounded-xl"
                />
              </div>

              {/* Text Section */}
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Work;