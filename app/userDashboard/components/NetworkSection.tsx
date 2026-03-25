"use client"

import React from "react"

const NetworkSection = () => {
  return (
    <div className="bg-[#0A0A0A] border border-zinc-900 rounded-2xl p-6 space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium text-white">
          Your Network
        </h2>
        <button className="text-sm text-zinc-500 hover:text-white">
          View all
        </button>
      </div>

      {/* Matched Senior */}
      <div className="bg-[#0F0F0F] border border-zinc-900 rounded-xl p-4 flex items-center justify-between">
        
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-zinc-800" />

          <div>
            <p className="text-sm text-white">Rahul Mehta</p>
            <p className="text-xs text-zinc-500">
              4th Year · CSE · Placed at Amazon
            </p>
          </div>
        </div>

        <button className="text-xs px-3 py-1.5 rounded-md bg-zinc-800 text-zinc-300 hover:bg-zinc-700 transition">
          Message
        </button>
      </div>

      {/* Suggested Seniors */}
      <div className="space-y-3">
        <p className="text-sm text-zinc-500">Suggested Seniors</p>

        {[1, 2].map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between px-3 py-3 rounded-lg hover:bg-zinc-900 transition"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-zinc-800" />

              <div>
                <p className="text-sm text-white">Ankit Sharma</p>
                <p className="text-xs text-zinc-500">
                  3rd Year · Web Dev
                </p>
              </div>
            </div>

            <button className="text-xs text-zinc-400 hover:text-white">
              Connect
            </button>
          </div>
        ))}
      </div>

      {/* Recent Chats */}
      <div className="space-y-3">
        <p className="text-sm text-zinc-500">Recent Conversations</p>

        {[1, 2].map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between px-3 py-3 rounded-lg hover:bg-zinc-900 transition"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-zinc-800" />

              <div>
                <p className="text-sm text-white">Priya Singh</p>
                <p className="text-xs text-zinc-500 truncate w-40">
                  Thanks for the guidance on internships...
                </p>
              </div>
            </div>

            <span className="text-xs text-zinc-600">2h</span>
          </div>
        ))}
      </div>

      {/* Empty / Hint State */}
      <div className="border border-dashed border-zinc-800 rounded-xl p-4 text-center">
        <p className="text-sm text-zinc-500">
          Start connecting with seniors to build your network
        </p>
      </div>

    </div>
  )
}

export default NetworkSection