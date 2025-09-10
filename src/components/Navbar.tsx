"use client";

import React from "react";
import Navlink from "./Navlink";
import { Button } from "./ui/button";

const links = [
  { url: "/", title: "Home" },
  { url: "/about_us", title: "About Us" },
  { url: "/our_services", title: "Our Services" },
];

export default function Navbar() {
  return (
    <>
      <nav className="h-[72px] flex items-center justify-between px-16 ">
        {/* logo */}
        <div>logo</div>

        {/* menu */}
        <div className="flex items-center gap-8">
          {links.map((link) => (
            <Navlink navLink={link} key={link.title} />
          ))}

          <div className="space-x-3">
            <Button className="w-22 h-10 rounded-xl border border-neutral-300">
              Learn
            </Button>
            <Button className="w-18 h-10 rounded-xl border border-neutral-300 bg-gradient-to-r from-[#FB840C] via-pink-700 to-[#5617F9] to-90% text-white ">
              Join
            </Button>
          </div>
        </div>

        {/* mobile menu */}
        <div className="md:hidden"></div>
      </nav>
    </>
  );
}
