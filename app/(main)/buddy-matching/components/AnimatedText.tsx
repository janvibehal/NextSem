"use client"

import { useState, useEffect } from "react"

export default function AnimatedText() {
  const textLines = [
    "Do you feel you lack the right connections for projects or studies?",
    "Struggling to find teammates who are equally motivated as you?",
    "Tired of doing projects alone while others work in groups?",
    "Don't know whom to approach for hackathons or semester projects?",
    "Wish you had a study buddy who actually studies with you?",
    "Confused about how others build amazing projects together?",
    "Looking for people with the same skills and interests as yours?",
    "Feel stuck because you don't have the right peer group?",
    "Want a partner who matches your learning speed and goals?",
    "Stop guessing. Start matching with the right people.",
  ]

  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<"idle" | "exit" | "enter">("idle")

  useEffect(() => {
    const t = setTimeout(() => setPhase("exit"), 3200)
    return () => clearTimeout(t)
  }, [index])

  useEffect(() => {
    if (phase === "exit") {
      const t = setTimeout(() => {
        setIndex((p) => (p + 1) % textLines.length)
        setPhase("enter")
      }, 480)
      return () => clearTimeout(t)
    }

    if (phase === "enter") {
      const t = setTimeout(() => setPhase("idle"), 500)
      return () => clearTimeout(t)
    }
  }, [phase])

  return (
    <div className="h-24 flex items-center justify-center mb-6 px-4 overflow-hidden relative">

      <p
        key={index}
        className="text-2xl md:text-3xl font-black text-center leading-tight max-w-5xl"
        style={{
          background: "linear-gradient(90deg,#000,#3f3f46,#71717a,#000)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation:
            phase === "enter"
              ? "textEnter 0.48s cubic-bezier(0.22,1,0.36,1) forwards"
              : phase === "exit"
              ? "textExit 0.45s cubic-bezier(0.55,0,1,0.45) forwards"
              : "textIdle 0.1s linear forwards",
        }}
      >
        {textLines[index]}
      </p>
    </div>
  )
}