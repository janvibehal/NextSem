"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Calendar,
  MessageCircle,
  Folder,
  User,
  HelpCircle,
  Settings,
  LogOut,
  Home,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/userDashboard" },
    { name: "Planner", icon: Calendar, href: "/userDashboard/planner" },
    {
      name: "Messaging",
      icon: MessageCircle,
      href: "/userDashboard/messaging",
      badge: 3,
    },
    { name: "Resources", icon: Folder, href: "/userDashboard/resources" },
    { name: "Profile", icon: User, href: "/userDashboard/profile" },
  ];

  return (
    <aside className="relative w-64 h-screen bg-black border-r border-zinc-900 flex flex-col justify-between px-4 py-6 overflow-hidden">
      {/* ✨ Animated Light Streaks */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[200%] h-[200%] bg-linear-to-r from-transparent via-white/10 to-transparent blur-3xl animate-[moveLight_8s_linear_infinite]" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Top Section */}
        <div>
          {/* Website Button */}
          <Link
            href="/"
            className="flex items-center gap-2 mb-6 px-3 py-2 rounded-lg text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white transition"
          >
            <Home size={18} />
            Website Homepage
          </Link>

          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 rounded-xl flex items-center justify-center">
              {/* Replace with your image */}
              <img
                src="/LOGO_PNG_IMAGE.png"
                alt="NextSem Logo"
                className="w-full h-full rounded-xl object-contain"
              />
            </div>
          </div>

          {/* Menu */}
          <nav className="space-y-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg transition ${
                    isActive
                      ? "bg-zinc-900 text-white"
                      : "text-zinc-500 hover:bg-zinc-900 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} />
                    <span className="text-sm">{item.name}</span>
                  </div>

                  {item.badge && (
                    <span className="text-xs bg-zinc-800 px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="space-y-4">
          {/* User Card */}
          <div className="flex items-center gap-3 bg-zinc-900 p-3 rounded-xl">
            <div className="w-10 h-10 rounded-full bg-zinc-700" />
            <div>
              <p className="text-sm font-medium text-white">Anjali Sharma</p>
              <p className="text-xs text-zinc-500">AN_123589</p>
            </div>
          </div>

          {/* Extra Links */}
          <div className="space-y-2">
            <button className="flex items-center gap-3 w-full px-3 py-2 text-zinc-500 hover:text-white hover:bg-zinc-900 rounded-lg">
              <HelpCircle size={18} />
              <span className="text-sm">Help Center</span>
            </button>

            <button className="flex items-center gap-3 w-full px-3 py-2 text-zinc-500 hover:text-white hover:bg-zinc-900 rounded-lg">
              <Settings size={18} />
              <span className="text-sm">Settings</span>
            </button>

            <button className="flex items-center gap-3 w-full px-3 py-2 text-red-400 hover:bg-red-500/10 rounded-lg">
              <LogOut size={18} />
              <span className="text-sm">Sign Out</span>
            </button>
          </div>
        </div>
      </div>

      {/* ✨ Keyframes */}
      <style jsx global>{`
        @keyframes moveLight {
          0% {
            transform: translateX(-50%) translateY(-50%) rotate(0deg);
          }
          100% {
            transform: translateX(50%) translateY(50%) rotate(360deg);
          }
        }
      `}</style>
    </aside>
  );
}
