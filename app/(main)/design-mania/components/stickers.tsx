"use client";

import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function StickersPage() {
  const stickers = [
    {
      title: "Developer Pack",
      img: "https://picsum.photos/400/300?1",
      desc: "Minimal dev-themed stickers for your workflow",
    },
    {
      title: "College Life",
      img: "https://picsum.photos/400/300?2",
      desc: "Relatable student life stickers",
    },
    {
      title: "Emotions",
      img: "https://picsum.photos/400/300?3",
      desc: "Express moods with clean aesthetics",
    },
    {
      title: "Food & Drinks",
      img: "https://picsum.photos/400/300?4",
      desc: "Fun and casual lifestyle stickers",
    },
    {
      title: "Study Tools",
      img: "https://picsum.photos/400/300?5",
      desc: "Organize your notes visually",
    },
    {
      title: "Travel",
      img: "https://picsum.photos/400/300?6",
      desc: "Capture journeys in aesthetic style",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black px-6 md:px-10 py-12 space-y-14">

      {/* HERO */}
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10 border border-zinc-200 rounded-[30px] p-6 md:p-8 bg-[#FAFAFA]">

        <div className="max-w-xl">
          <h1 className={`${poppins.className} text-4xl md:text-5xl font-bold tracking-tight`}>
            Stickers<span className="text-zinc-400">.</span>
          </h1>

          <p className="text-zinc-600 mt-4 text-sm md:text-base leading-relaxed">
            Add personality to your notes, planners, and workspace with clean aesthetic stickers.
          </p>
        </div>

        <div className="w-full max-w-[220px] opacity-90">
          <img src="/sticker.png" className="w-full object-contain" />
        </div>
      </div>

      {/* SECTION HEADER */}
      <div className="max-w-6xl mx-auto w-full space-y-2">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Explore Stickers
        </h2>
        <p className="text-zinc-500 text-sm">
          Choose your style and download
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {stickers.map((card, index) => (
          <div
            key={index}
            className="group bg-white border border-zinc-200 rounded-[22px] overflow-hidden hover:shadow-md hover:border-zinc-300 transition-all cursor-pointer"
          >

            {/* IMAGE */}
            <div className="h-44 bg-[#F5F5F5] flex items-center justify-center overflow-hidden">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5 flex flex-col gap-3">

              <h3 className="text-lg font-semibold tracking-tight">
                {card.title}
              </h3>

              <p className="text-sm text-zinc-500 leading-relaxed">
                {card.desc}
              </p>

              <button className="mt-3 w-full py-2.5 rounded-xl border border-zinc-300 text-sm font-medium hover:bg-black hover:text-white transition-all">
                View Pack
              </button>

            </div>
          </div>
        ))}

      </div>

      {/* MORE COMING */}
      <div className="max-w-6xl mx-auto w-full mt-16 flex flex-col items-center text-center space-y-3">

        <div className="px-5 py-2 rounded-full border border-zinc-200 bg-[#FAFAFA] text-xs text-zinc-500 tracking-wide">
          MORE COMING
        </div>

        <h4 className="text-lg font-semibold tracking-tight">
          More sticker packs on the way
        </h4>

        <p className="text-sm text-zinc-500 max-w-md">
          We're constantly adding new aesthetic packs to match your vibe.
        </p>

      </div>

    </div>
  );
}