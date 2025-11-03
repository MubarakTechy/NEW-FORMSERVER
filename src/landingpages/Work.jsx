"use client";
import React from "react";
import Image from "next/image";

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
      description:
        "All form and survey submissions appear in your dashboard.",
      image: step4,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#fff8fd] via-[#fdf8ff] to-[#f7f3ff] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          How It Works
        </h2>
        <p className="text-gray-600 text-lg mb-16">
          Just three steps: build, connect, and view submissions in your
          dashboard.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm border border-[#f2e9fb] rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-8 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image Section */}
              <div className="mb-6">
                <Image
                  src={step.image}
                  alt={step.title}
                  className="rounded-xl w-full h-48 object-contain"
                />
              </div>

              {/* Text Section */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
