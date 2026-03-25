"use client"

import { useState } from "react"

const users = [
  { name: "Rahul Mehta", last: "Hey, did you check that?", time: "2m" },
  { name: "Ankit Sharma", last: "I'll send the notes", time: "10m" },
  { name: "Priya Singh", last: "Thanks!", time: "1h" },
]

const messages = [
  { from: "Rahul Mehta", text: "Hey, did you complete DBMS assignment?" },
  { from: "me", text: "Not yet, working on it tonight." },
  { from: "Rahul Mehta", text: "Same here, deadline is close." },
]

export default function MessagingPage() {
  const [activeUser, setActiveUser] = useState(users[0])

  return (
    <div className="h-full ">

      {/* Container */}
      <div className="flex h-full bg-[#0A0A0A] border border-zinc-900  overflow-hidden">

        {/* LEFT: Conversations */}
        <div className="w-72 border-r border-zinc-900 flex flex-col">

          {/* Header */}
          <div className="px-4 py-3 text-sm text-zinc-400 border-b border-zinc-900">
            Conversations
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto">
            {users.map((user, i) => (
              <div
                key={i}
                onClick={() => setActiveUser(user)}
                className={`px-4 py-3 cursor-pointer transition ${
                  activeUser.name === user.name
                    ? "bg-zinc-900"
                    : "hover:bg-zinc-900"
                }`}
              >
                <p className="text-sm text-white">{user.name}</p>
                <p className="text-xs text-zinc-500 truncate">
                  {user.last}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Chat */}
        <div className="flex-1 flex flex-col">

          {/* Chat Header */}
          <div className="px-5 py-3 border-b border-zinc-900 text-sm text-white">
            {activeUser.name}
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.from === "me" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    msg.from === "me"
                      ? "bg-zinc-800 text-white"
                      : "bg-zinc-900 text-zinc-300"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t border-zinc-900">
            <input
              type="text"
              placeholder="Message..."
              className="w-full bg-[#0F0F0F] border border-zinc-900 rounded-lg px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none"
            />
          </div>
        </div>

      </div>
    </div>
  )
}