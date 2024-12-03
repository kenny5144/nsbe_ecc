"use client";

import { useState } from "react";
import Link from "next/link";
import { HomeIcon, TagIcon, ArchiveBoxIcon, HeartIcon, UserIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion"; // Import Framer Motion

export default function FloatingNavbar() {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", icon: <HomeIcon className="h-6 text-black w-6" />, label: "Home", href: "/" },
    { id: "About", icon: <TagIcon className="h-6 text-black w-6" />, label: "About", href: "/About" },
    { id: "Support", icon: <ArchiveBoxIcon className="h-6 text-black w-6" />, label: "Support", href: "/Support" },
    { id: "favorites", icon: <HeartIcon className="h-6 text-black w-6" />, label: "Favorites", href: "/favorites" },
    ,
  ];

  return (
    <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500  rounded-full shadow-lg py-3 px-4 z-50 w-[80%]">
      <div className="flex justify-around items-center gap-6">
        {navItems.map((item) => (
          <Link href={item.href} key={item.id}>
            <div
              onClick={() => setActive(item.id)}
              className={`flex flex-col items-center gap-1 cursor-pointer ${
                active === item.id ? "text-orange-100" : "text-gray-400"
              }`}
            >
              <motion.div
                className={`p-2 rounded-full ${
                  active === item.id
                    ? "bg-orange-500 text-black shadow-xl scale-110"
                    : " hover:shadow-lg hover:scale-105"
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  scale: { type: "spring", stiffness: 300, damping: 30 },
                }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              >
                {item.icon}
              </motion.div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
