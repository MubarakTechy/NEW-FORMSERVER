"use client";
import React from "react";
import { motion } from "framer-motion";

// --- Icon Components ---
// Shield with check – better represents spam protection
const ShieldCheckIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

// Envelope – email notifications (unchanged)
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

// Cloud with check – auto‑save submissions (like saving to cloud)
const CloudCheckIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8 16l2 2 4-4m6-4a5 5 0 00-4.546-2.916A5.986 5.986 0 0010 4a6 6 0 00-6 6c0 2.501 1.5 4.5 3 5.5M19 13v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-5"
    />
  </svg>
);

// Users with plus – team collaboration
const UsersPlusIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
    />
  </svg>
);

// Search – insightful surveys (unchanged)
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

// Link – connect tools (unchanged)
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
    className="flex flex-col items-center p-8 text-center transition-all duration-300 bg-gray-900 border shadow-lg border-gray-700/50 rounded-2xl hover:shadow-purple-500/10 hover:-translate-y-1"
  >
    <div className="flex items-center justify-center mb-4">
      {React.cloneElement(icon, { className: "w-12 h-12 text-purple-400" })}
    </div>
    <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

// --- Main Section ---
const Feature = () => {
  const featuresData = [
    {
      icon: <ShieldCheckIcon />,          // ← updated
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
      icon: <CloudCheckIcon />,           // ← updated
      title: "Auto-Save Submissions",
      description: "All submissions are safely stored in your dashboard.",
    },
    {
      icon: <UsersPlusIcon />,            // ← updated
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
    <section className="py-20 bg-black md:py-32">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold text-white md:text-5xl">
            Features
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-gray-400">
            Build, connect, and manage forms & surveys without backend hassle.
          </p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
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