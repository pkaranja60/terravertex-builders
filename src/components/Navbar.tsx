"use client";

import React, { useState } from "react";
import Navlink from "./Navlink";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import Image from "next/image";

const links = [
  { url: "/", title: "Home" },
  { url: "/about_us", title: "About Us" },
  { url: "/our_services", title: "Our Services" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="w-full h-[72px] fixed top-0 z-50 flex items-center justify-between px-4 sm:px-8 lg:px-16 bg-white shadow-sm">
        {/* logo */}
        <div className="flex items-center gap-4">
          <Image
            src="/logo2.png"
            alt="logo"
            width={1024}
            height={1024}
            className="w-[72px] h-[72px] object-contain rounded-full hidden md:block"
          />
          <h1 className="text-3xl font-medium line-clamp-2 ">TerraVertex</h1>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Navlink navLink={link} key={link.title} />
          ))}

          <div className="flex items-center gap-3">
            <Button className="w-20 h-10 rounded-xl border border-neutral-300 text-sm">
              Learn
            </Button>
            <Button className="w-16 h-10 rounded-xl border border-neutral-300 bg-gradient-to-r from-[#FB840C] via-pink-700 to-[#5617F9] to-90% text-white text-sm">
              Join
            </Button>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <IoCloseOutline size={24} />
          ) : (
            <IoMenuOutline size={24} />
          )}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-white shadow-lg border-t border-[#0D0701]/15 lg:hidden"
          >
            <div className="px-4 py-6">
              {/* Mobile navigation links */}
              <div className="space-y-4 mb-6">
                {links.map((link) => (
                  <div
                    key={link.title}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Navlink navLink={link} />
                  </div>
                ))}
              </div>

              {/* Mobile buttons */}
              <div className="flex flex-col gap-3">
                <Button className="w-full h-12 rounded-xl border border-neutral-300">
                  Learn More
                </Button>
                <Button className="w-full h-12 rounded-xl bg-gradient-to-r from-[#FB840C] via-pink-700 to-[#5617F9] to-90% text-white">
                  Join Us
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 bg-opacity-25 z-30 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
