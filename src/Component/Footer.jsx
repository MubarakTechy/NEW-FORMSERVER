"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../images/logo.png";

// Import your social media icons
import X from "../images/Frame 1 (1).png";
import LinkedInIcon from "../images/linked.png";
import robot from "../images/Frame 1 (3).png";

const Footer = () => {
  const companyLinks = [
    { name: "About Us", href: "#" },
    { name: "Referral", href: "#" },
  ];

  const resourcesLinks = [
    { name: "Blog", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "API Documentation", href: "#" },
    { name: "What's New", href: "#" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ];

  return (
    <footer className="bg-[#1D2128] text-gray-400 py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo + Tagline + Social */}
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={logo}
                alt="FORM Server Logo"
                width={160}
                height={80}
                priority
              />
            </Link>

            <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-xs">
              Powerful Forms & Surveys Without the Backend
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-5">
              <Link href="#" className="hover:scale-110 transition duration-200">
                <Image
                  src={X}
                  alt="X Logo"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </Link>
              <Link href="#" className="hover:scale-110 transition duration-200">
                <Image
                  src={LinkedInIcon}
                  alt="LinkedIn Logo"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </Link>
              <Link href="#" className="hover:scale-110 transition duration-200">
                <Image
                  src={robot}
                  alt="Robot Icon"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </Link>
            </div>
          </div>

          {/* Links Section */}
          <div className="md:col-span-3 grid grid-cols-2 gap-8 sm:grid-cols-3">
            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-purple-400 transition duration-150 ease-in-out text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                {resourcesLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-purple-400 transition duration-150 ease-in-out text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-purple-400 transition duration-150 ease-in-out text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center md:text-left">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Formserver. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
