import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "motion/react";

interface NavlinkProps {
  navLink: {
    url: string;
    title: string;
  };
}

export default function Navlink({ navLink }: NavlinkProps) {
  const pathName = usePathname() ?? "/";

  const isActive =
    pathName === navLink.url ||
    (navLink.url !== "/" && pathName.startsWith(navLink.url));

  return (
    <>
      <Link href={navLink.url} className="relative">
        <motion.span
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`block rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 ${
            isActive
              ? "bg-black text-white shadow-md"
              : "text-gray-700 hover:bg-gray-100 hover:text-black"
          }`}
        >
          {navLink.title}
        </motion.span>

        {/* Active indicator line */}
        {isActive && (
          <motion.div
            layoutId="activeTab"
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black rounded-full"
            initial={false}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
      </Link>
    </>
  );
}
