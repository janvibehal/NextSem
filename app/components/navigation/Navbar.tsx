"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Palette,
  Calculator,
  CheckSquare,
  Folder,
  UserCheck,
  BookOpen,
  AlertCircle,
  Users,
  MessageSquare,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  let lastScrollY = 0;

  // 🔥 Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const featureIcons: any = {
    "Semester Planner": Calendar,
    "Design Mania": Palette,
    "CGPA Calculator": Calculator,
    "Attendance Calculator": CheckSquare,
    "Resource Vault": Folder,
    "Senior Connect": UserCheck,
    "College Process Explainer": BookOpen,
    "Do’s & Don’ts": AlertCircle,
    "Buddy Matcher": Users,
    "Response Forum": MessageSquare,
  };

  const featureUrlMap: Record<string, string> = {
    "Semester Planner": "/semester-planner",
    "Design Mania": "/design-mania",
    "CGPA Calculator": "/cgpa-calculator",
    "Attendance Calculator": "/attendance-calculator",
    "Resource Vault": "/resource-vault",
    "Senior Connect": "/senior-connect",
    "College Process Explainer": "/college-process-explainer",
    "Do’s & Don’ts": "/dos-and-donts",
    "Buddy Matcher": "/buddy-matcher",
    "Response Forum": "/response-forum",
  };

  const renderItem = (item: string) => {
    const Icon = featureIcons[item];
    const href = featureUrlMap[item] ?? "#";

    return (
      <Link href={href} key={item} className="block">
        <motion.li
          whileHover={{ scale: 1.03, x: 4 }}
          className="flex items-center gap-2 rounded-md px-2 py-1 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
        >
          <Icon size={16} />
          <span>{item}</span>
        </motion.li>
      </Link>
    );
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 z-50 w-full border-b border-zinc-200 bg-white px-4 py-3 shadow-sm"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between font-medium text-zinc-900">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/LOGO.png" alt="NextSem Logo" width={70} height={70} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center">
          <Link href="/">Home</Link>

          <div
            className="relative"
            onMouseEnter={() => setFeaturesOpen(true)}
            onMouseLeave={() => setFeaturesOpen(false)}
          >
            <button className="flex items-center gap-1">
              Features ▾
            </button>

            <AnimatePresence>
              {featuresOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-1/2 z-50 w-[580px] -translate-x-1/2 mt-4 rounded-xl border bg-white p-5 shadow-lg"
                >
                  <div className="grid grid-cols-3 gap-6 text-sm">
                    <div>
                      <p className="mb-3 font-semibold">Tools</p>
                      <ul className="space-y-2">
                        {[
                          "Semester Planner",
                          "Design Mania",
                          "CGPA Calculator",
                          "Attendance Calculator",
                          "Resource Vault",
                        ].map(renderItem)}
                      </ul>
                    </div>

                    <div>
                      <p className="mb-3 font-semibold">Guidance</p>
                      <ul className="space-y-2">
                        {[
                          "Senior Connect",
                          "College Process Explainer",
                          "Do’s & Don’ts",
                        ].map(renderItem)}
                      </ul>
                    </div>

                    <div>
                      <p className="mb-3 font-semibold">Peer Help</p>
                      <ul className="space-y-2">
                        {["Buddy Matcher", "Response Forum"].map(renderItem)}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/contact">Contact</Link>
          <Link href="/about">About Us</Link>
        </div>

        {/* Sign In */}
        <Link href="/Authentication/Login" className="hidden md:block">
          <button className="rounded-full border px-4 py-1.5 text-sm">
            Sign In
          </button>
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
    </motion.nav>
  );
}