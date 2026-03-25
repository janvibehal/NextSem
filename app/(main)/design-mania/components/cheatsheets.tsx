"use client";

import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ExploreCard = ({ title, desc, iconPath }: any) => (
  <div className="group bg-white border border-zinc-200 rounded-[20px] p-5 flex items-center gap-5 transition-all hover:shadow-md hover:border-zinc-300 cursor-pointer">

    {/* ICON */}
    <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-zinc-100 border border-zinc-200">
      <img
        src={iconPath}
        alt={title}
        className="w-8 h-8 object-contain opacity-80 group-hover:opacity-100 transition"
      />
    </div>

    {/* TEXT */}
    <div className="flex-1">
      <h4 className="text-black font-semibold text-base tracking-tight">
        {title}
      </h4>
      <p className="text-zinc-500 text-xs mt-1 leading-snug">
        {desc}
      </p>
    </div>

    {/* ARROW */}
    <div className="text-zinc-400 group-hover:text-black transition">
      →
    </div>
  </div>
);

const CheatSheetCentral = () => {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-12 space-y-14">

      {/* HERO */}
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8 border border-zinc-200 rounded-[30px] p-6 md:p-8 bg-[#F8F8F8]">

        {/* TEXT */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Cheat Sheets<span className="text-zinc-400">.</span>
          </h1>
          <p className="text-zinc-600 mt-3 text-sm md:text-base leading-relaxed">
            Fast-track your prep with structured cheat sheets. Revise quicker,
            practice smarter, and stay ahead.
          </p>
        </div>

        {/* IMAGE */}
        <div className="w-full max-w-[220px] opacity-90">
          <img src="/books.png" className="w-full object-contain" />
        </div>
      </div>

      {/* CODED INFO SECTION */}
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-6">

        {/* LEFT CARD */}
        <div className="rounded-[24px] border border-zinc-200 bg-white p-6 md:p-7 space-y-6 shadow-sm">

          <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
            How to make most out of it?
          </h3>

          <div className="space-y-5 text-sm text-zinc-600">

            <div className="flex gap-4 items-start">
              <span className="text-lg">🔍</span>
              <p>
                <span className="text-black font-medium">Find your topic</span> : Browse by subject or search for a specific concept.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-lg">📖</span>
              <p>
                <span className="text-black font-medium">Quick Review</span> : Use for last minute revision and memory joggers.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-lg">⚙️</span>
              <p>
                <span className="text-black font-medium">Apply knowledge</span> : Solve problems using patterns and formulas.
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="rounded-[24px] border border-zinc-200 bg-white p-6 md:p-7 space-y-6 shadow-sm">

          <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
            Key Topics Inside :
          </h3>

          <div className="grid grid-cols-2 gap-3 text-sm">

            {[
              "OS Concepts",
              "Algorithms",
              "Data Structure",
              "Networking",
              "System Design",
              "Interview Patterns",
              "DBMS",
              "Syntax Guide",
            ].map((topic, i) => (
              <div
                key={i}
                className="border border-zinc-200 rounded-xl px-4 py-3 text-zinc-600 hover:border-zinc-400 hover:text-black transition cursor-pointer bg-[#FAFAFA]"
              >
                {topic}
              </div>
            ))}

          </div>
        </div>

      </div>

      {/* EXPLORE */}
      <div className="max-w-6xl mx-auto w-full space-y-6">
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
          Explore
        </h3>

        <div className="grid md:grid-cols-2 gap-5">

          <ExploreCard
            title="DSA Patterns"
            desc="Algorithms, data structures, and problem patterns"
            iconPath="/image 15.png"
          />

          <ExploreCard
            title="CS Fundamentals"
            desc="OS, DBMS, Networks core concepts"
            iconPath="/image 16.png"
          />

          <ExploreCard
            title="Interview Prep"
            desc="Behavioral + technical preparation"
            iconPath="/image 17.png"
          />

          <ExploreCard
            title="Quick Reference"
            desc="Languages, tools, and resources"
            iconPath="/image 18.png"
          />

        </div>
      </div>
    </div>
  );
};

export default CheatSheetCentral;