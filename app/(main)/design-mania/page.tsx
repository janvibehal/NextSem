"use client"

import { useState } from "react"
import { Poppins } from "next/font/google"
import Header from "./components/Header"

// 👉 import your components
import CheatSheetCentral from "./components/cheatsheets"
import Todo from "./components/todo"
import Stickers from "./components/stickers"
import Roadmaps from "./components/roadmaps"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
})

const cards = [
  {
    key: "cheatsheet",
    title: "Cheat Sheet",
    desc: "Quick references for DSA, CS fundamentals, and more.",
    img: "/books.png",
  },
  {
    key: "todo",
    title: "To-do Lists",
    desc: "Organize your tasks and stay on track every day.",
    img: "/list.png",
  },
  {
    key: "stickers",
    title: "Stickers",
    desc: "Download and use aesthetic study stickers.",
    img: "/sticker.png",
  },
  {
    key: "roadmaps",
    title: "Roadmaps",
    desc: "Structured paths for SDE, ML, and more.",
    img: "/road.png",
  },
]

export default function DesignMania() {
  const [active, setActive] = useState<string | null>(null)

  const renderComponent = () => {
    switch (active) {
      case "cheatsheet":
        return <CheatSheetCentral />
      case "todo":
        return <Todo />
      case "stickers":
        return <Stickers />
      case "roadmaps":
        return <Roadmaps />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-white text-black px-6 py-10 space-y-12">

      {/* HEADER */}
      <Header />

      {/* IF COMPONENT SELECTED */}
      {active ? (
        <div className="space-y-6">

          {/* BACK BUTTON */}
          <button
            onClick={() => setActive(null)}
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition"
          >
            ← Back
          </button>

          {/* RENDER SELECTED COMPONENT */}
          <div className="w-full">
            {renderComponent()}
          </div>
        </div>
      ) : (
        <>
          {/* TITLE */}
          <div className="space-y-1">
            <p className="text-sm text-zinc-500">Start building your system</p>
            <h2 className="text-xl font-semibold">
              Choose a tool to begin
            </h2>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, i) => (
              <div
                key={i}
                onClick={() => setActive(card.key)}
                className="group relative bg-[#0A0A0A] border border-zinc-800 rounded-[24px] p-5 h-52 flex flex-col justify-between hover:shadow-lg hover:border-zinc-700 transition cursor-pointer"
              >
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {card.title}
                  </h3>

                  <p className="text-xs text-zinc-400 mt-1 max-w-xs">
                    {card.desc}
                  </p>
                </div>

                <div className="flex justify-end">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-20 opacity-80 group-hover:opacity-100 transition"
                  />
                </div>

                <div className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition pointer-events-none bg-white/5" />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}