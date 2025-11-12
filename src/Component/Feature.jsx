"use client";
import React from "react";
import { motion } from "framer-motion";

// --- Icon Components ---
const ShieldIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 12l2 2 4-4m5.617-4.27a8.98 8.98 0 00-4.27-4.27 9.001 9.001 0 00-6.69 0 9.001 9.001 0 00-4.27 4.27A8.98 8.98 0 003 12c0 2.404.974 4.673 2.723 6.368L12 21l6.277-2.632C20.026 16.673 21 14.404 21 12c0-2.404-.974-4.673-2.383-6.368z"
    />
  </svg>
);
const MailIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-1 12H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2z"
    />
  </svg>
);
const RefreshIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m2.28 4h10.436l-2-2m2 2l2 2m-2-2a8.001 8.001 0 01-14.8-2.6l-2.2-2.2"
    />
  </svg>
);
const UsersIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17 20h-4a2 2 0 01-2-2v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2a2 2 0 01-2 2h-4m14-12a4 4 0 11-8 0 4 4 0 018 0zm-8 0a4 4 0 10-8 0 4 4 0 008 0z"
    />
  </svg>
);
const SearchIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);
const LinkIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);

// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// --- Feature Card Component ---
const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    variants={cardVariants}
    className="p-8 bg-gray-900 border border-gray-700/50 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300"
  >
    <div className="mb-4 flex justify-center items-center">
      {React.cloneElement(icon, { className: "w-12 h-12 text-purple-400" })}
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

// --- Main Section ---
const Feature = () => {
  const featuresData = [
    {
      icon: <ShieldIcon />,
      title: "Spam Filtering",
      description:
        "We validate your data server-side and use machine learning to protect you from spam.",
    },
    {
      icon: <MailIcon />,
      title: "Email Notifications",
      description:
        "You receive instant email notifications and automated responses.",
    },
    {
      icon: <RefreshIcon />,
      title: "Auto-Save Submissions",
      description: "All submissions are safely stored in your dashboard.",
    },
    {
      icon: <UsersIcon />,
      title: "Work With Your Team",
      description:
        "Easily invite teammates to collaborate and manage form data.",
    },
    {
      icon: <SearchIcon />,
      title: "Insightful Surveys",
      description:
        "Collect valuable feedback and insights directly into your dashboard.",
    },
    {
      icon: <LinkIcon />,
      title: "Connect Your Tools",
      description:
        "Integrate seamlessly with GitBook, Shopify, Next.js, Jekyll, and more.",
    },
  ];

  return (
    <section className="bg-black py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Features
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Build, connect, and manage forms & surveys without backend hassle.
          </p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Feature;
