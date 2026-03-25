"use client"

import React from "react"
import {
  Plus,
  Calculator,
  MessageCircle,
  Users,
} from "lucide-react"

const actions = [
  {
    title: "Add Attendance",
    icon: Plus,
  },
  {
    title: "Calculate CGPA",
    icon: Calculator,
  },
  {
    title: "Ask a Question",
    icon: MessageCircle,
  },
  {
    title: "Find a Buddy",
    icon: Users,
  },
]

const QuickActions = () => {
  return (
    <div className="bg-[#0A0A0A] border border-zinc-900 rounded-2xl p-5 space-y-5">

      {/* Header */}
      <h2 className="text-sm text-zinc-400">
        Quick Actions
      </h2>

      {/* Actions Grid */}
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => {
          const Icon = action.icon

          return (
            <button
              key={index}
              className="group flex flex-col items-start justify-between p-4 rounded-xl bg-[#0F0F0F] border border-zinc-900 hover:bg-zinc-900 transition"
            >
              {/* Icon */}
              <div className="w-8 h-8 flex items-center justify-center rounded-md bg-zinc-900 group-hover:bg-zinc-800 transition">
                <Icon size={16} className="text-zinc-400 group-hover:text-white" />
              </div>

              {/* Text */}
              <p className="text-sm text-zinc-300 group-hover:text-white transition">
                {action.title}
              </p>
            </button>
          )
        })}
      </div>

      {/* Divider */}
      <div className="border-t border-zinc-900 pt-4">

        {/* Secondary Action */}
        <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-zinc-900 transition">
          <span className="text-sm text-zinc-400 hover:text-white">
            View all tools
          </span>
        </button>

      </div>
    </div>
  )
}

export default QuickActions