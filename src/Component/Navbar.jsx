"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import max from "../images/snap.png"; // Your logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="relative bg-white border-b border-gray-100 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar Container */}
        <div className="flex justify-between items-center h-20">
          {/* 1. Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={max}
                alt="FORM Server Logo"
                width={100}
                height={50}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>

          {/* 2. Desktop Navigation Links */}
          <div className="hidden md:flex md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-purple-700 px-3 py-2 text-base font-medium transition duration-150 ease-in-out"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* 3. Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="px-5 py-2 text-purple-600 border border-purple-600 rounded-lg text-base font-medium hover:bg-purple-50 transition duration-150 ease-in-out"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="px-5 py-2 text-white bg-purple-600 rounded-lg text-base font-medium hover:bg-purple-700 transition duration-150 ease-in-out shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* 4. Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-purple-600 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Toggle main menu</span>
              {isOpen ? (
                <HiOutlineX className="h-6 w-6" />
              ) : (
                <HiOutlineMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 5. Mobile Menu Panel */}
      <div
        className={`overflow-hidden md:hidden transition-[max-height] duration-300 ease-in-out bg-white shadow-lg ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* Mobile Links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:bg-purple-50 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out"
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}

          <hr className="my-2 border-gray-100" />

          {/* ✅ Mobile Buttons (Clickable Links) */}
          <div className="pt-2 pb-3 space-y-4 px-3">
            <Link
              href="/login"
              onClick={toggleMenu}
              className="block text-center w-full px-5 py-2 text-purple-600 border border-purple-600 rounded-lg text-base font-medium hover:bg-purple-50 transition duration-150 ease-in-out"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              onClick={toggleMenu}
              className="block text-center w-full px-5 py-2 text-white bg-purple-600 rounded-lg text-base font-medium hover:bg-purple-700 transition duration-150 ease-in-out shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
