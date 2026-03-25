"use client"

import { useState } from "react"
import { Edit, Save } from "lucide-react"

export default function ProfilePage() {
  const [edit, setEdit] = useState(false)

  const [user, setUser] = useState({
    name: "Anjali Sharma",
    email: "anjali@email.com",
    branch: "Computer Science",
    year: "3rd Year",
  })

  return (
    <div className="h-full overflow-y-auto px-6 py-6 space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-zinc-500">Profile</p>
          <h2 className="text-lg text-white">{user.name}</h2>
        </div>

        <button
          onClick={() => setEdit(!edit)}
          className="flex items-center gap-2 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm hover:bg-zinc-800"
        >
          {edit ? <Save size={14} /> : <Edit size={14} />}
          {edit ? "Save" : "Edit"}
        </button>
      </div>

      {/* Profile Card */}
      <div className="bg-[#0A0A0A] border border-zinc-900 rounded-2xl p-6 flex items-center gap-6">

        {/* Avatar */}
        <div className="w-20 h-20 rounded-full bg-zinc-800" />

        {/* Info */}
        <div className="space-y-1">
          <p className="text-white text-lg">{user.name}</p>
          <p className="text-sm text-zinc-500">{user.email}</p>
        </div>
      </div>

      {/* Details */}
      <div className="bg-[#0A0A0A] border border-zinc-900 rounded-2xl p-6 space-y-4">

        <p className="text-sm text-zinc-500">Academic Details</p>

        {/* Fields */}
        {[
          { label: "Full Name", key: "name" },
          { label: "Email", key: "email" },
          { label: "Branch", key: "branch" },
          { label: "Year", key: "year" },
        ].map((field, i) => (
          <div key={i} className="flex flex-col gap-1">
            <label className="text-xs text-zinc-500">
              {field.label}
            </label>

            {edit ? (
              <input
                value={(user as any)[field.key]}
                onChange={(e) =>
                  setUser({
                    ...user,
                    [field.key]: e.target.value,
                  })
                }
                className="bg-[#0F0F0F] border border-zinc-900 rounded-lg px-3 py-2 text-sm text-white outline-none"
              />
            ) : (
              <p className="text-sm text-white">
                {(user as any)[field.key]}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Activity / Stats */}
      <div className="grid grid-cols-3 gap-4">

        <div className="bg-[#0A0A0A] border border-zinc-900 rounded-xl p-4">
          <p className="text-xs text-zinc-500">Resources Uploaded</p>
          <p className="text-white text-lg">12</p>
        </div>

        <div className="bg-[#0A0A0A] border border-zinc-900 rounded-xl p-4">
          <p className="text-xs text-zinc-500">Connections</p>
          <p className="text-white text-lg">8</p>
        </div>

        <div className="bg-[#0A0A0A] border border-zinc-900 rounded-xl p-4">
          <p className="text-xs text-zinc-500">Messages</p>
          <p className="text-white text-lg">34</p>
        </div>

      </div>

    </div>
  )
}