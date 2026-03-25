"use client";

import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RoadmapPage() {
  const roadmaps = [
  {
    title: "Machine Learning",
    img: "/Ml.png",
    desc: "From raw data to intelligent insights...",
    link: "https://roadmap.sh/machine-learning",
  },
  {
    title: "Web Development",
    img: "/Web d.png",
    desc: "Build modern web apps...",
    link: "https://roadmap.sh/frontend",
  },
  {
    title: "Data Science",
    img: "/Data Science.png",
    desc: "Transform raw data...",
    link: "https://roadmap.sh/ai-data-scientist",
  },
  {
    title: "DevOps",
    img: "/Devops.png",
    desc: "Automate and scale systems...",
    link: "https://roadmap.sh/devops",
  },
  {
    title: "Cyber Security",
    img: "/Cyber.png",
    desc: "Protect systems...",
    link: "https://roadmap.sh/cyber-security",
  },
  {
    title: "App Development",
    img: "/App d.png",
    desc: "Build mobile apps...",
    link: "https://roadmap.sh/android",
  },
];

  return (
    <div className="min-h-screen bg-white text-black px-6 md:px-10 py-12 space-y-14">
      {/* HERO */}
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10 border border-zinc-200 rounded-[30px] p-6 md:p-8 bg-[#FAFAFA]">
        {/* TEXT */}
        <div className="max-w-xl">
          <h1
            className={`${poppins.className} text-4xl md:text-5xl font-bold tracking-tight`}
          >
            Roadmaps<span className="text-zinc-400">.</span>
          </h1>

          <p className="text-zinc-600 mt-4 text-sm md:text-base leading-relaxed">
            Structured paths to guide your learning. Pick a direction, follow
            the steps, and build real-world skills.
          </p>
        </div>

        {/* IMAGE */}
        <div className="w-full max-w-[240px] opacity-90">
          <img src="/road.png" className="w-full object-contain" />
        </div>
      </div>

      {/* SECTION HEADER */}
      <div className="max-w-6xl mx-auto w-full space-y-2">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Explore Roadmaps
        </h2>
        <p className="text-zinc-500 text-sm">
          Choose your path and start building
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roadmaps.map((card, index) => (
          <a
            key={index}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-zinc-200 rounded-[22px] overflow-hidden hover:shadow-md hover:border-zinc-300 transition-all cursor-pointer"
          >
            {/* IMAGE */}
            <div className="h-44 bg-[#F5F5F5] flex items-center justify-center overflow-hidden">
              <img
                src={card.img}
                alt={card.title}
                className="w-[80%] object-contain group-hover:scale-105 transition"
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

              <span className="mt-2 text-sm text-zinc-400 group-hover:text-black transition">
                View Roadmap →
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* MORE COMING */}
<div className="max-w-6xl mx-auto w-full mt-16 flex flex-col items-center justify-center text-center space-y-3">

  <div className="px-5 py-2 rounded-full border border-zinc-200 bg-[#FAFAFA] text-xs text-zinc-500 tracking-wide">
    MORE COMING
  </div>

  <h4 className="text-lg md:text-xl font-semibold tracking-tight">
    More roadmaps are on the way
  </h4>

  <p className="text-sm text-zinc-500 max-w-md">
    We're continuously adding new paths to help you explore more domains and grow faster.
  </p>

</div>
    </div>
  );
}
