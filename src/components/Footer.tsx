import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { links } from "@/constants";
import Link from "next/link";
import { copyRightNotice } from "@/lib/copyRightYear";

type FooterLinkProps = {
  title: string;
  items: { name: string; href: string }[];
};

function FooterLink({ title, items }: FooterLinkProps) {
  return (
    <div>
      <h4 className="text-base font-semibold mb-4">{title}</h4>
      <ul>
        {items.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block mb-4 text-sm hover:text-black transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <>
      <div className="px-4 sm:px-8 lg:px-16 bg-[#FEE6CE] pt-16 lg:pt-20 pb-16 lg:pb-20">
        {/* Subscribe To newsletter */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-0">
          <div className="w-full lg:w-auto text-center lg:text-left">
            <span className="text-lg font-semibold block">
              Subscribe to updates
            </span>
            <p className="text-base mt-2">
              Stay informed about our latest projects and offers.
            </p>
          </div>

          {/* Input */}
          <div className="w-full lg:w-auto">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Input
                className="rounded-xl px-6 py-3 bg-[#0D0701]/5 border-none shadow-md w-full sm:w-[255px] h-10
             focus:ring-1 focus:ring-[#0D0701]/10 focus:outline-none"
                placeholder="Your Email here"
              />

              <Button className="px-6 py-3 rounded-xl border border-[#0D0701]/15 text-base font-medium w-full sm:w-[129px] h-[44px]">
                Subscribe
              </Button>
            </div>

            <p className="text-xs mt-2 text-center sm:text-left">
              By subscribing you agree to our Privacy Policy.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border border-[#0D0701]/15 w-full mt-12 lg:mt-20 mb-12 lg:mb-20" />

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10">
          {Object.entries(links).map(([section, items]) => (
            <FooterLink
              key={section}
              title={section
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
              items={items}
            />
          ))}
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-12 lg:mt-20 pt-8 border-t border-[#0D0701]/15 gap-4">
          {/* logo */}
          <div className="text-xl font-bold">TerraVertex Builders</div>

          <div className="text-center sm:text-right">
            <p className="text-sm">
              {copyRightNotice()} TerraVertex Builders. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
