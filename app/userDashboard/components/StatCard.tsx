"use client"

import React from "react"

interface StatCardProps {
  title: string
  value: string
  sub?: string
  extra?: string
}

const StatCard = ({ title, value, sub, extra }: StatCardProps) => {
  return (
    <div className="bg-[#0A0A0A] border border-zinc-900 rounded-2xl p-5 space-y-4">

      {/* Title */}
      <p className="text-sm text-zinc-500">
        {title}
      </p>

      {/* Main Value */}
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-semibold text-white tracking-tight">
          {value}
        </h2>

        {sub && (
          <span className="text-xs text-zinc-500">
            {sub}
          </span>
        )}
      </div>

      {/* Progress Bar (subtle, no bright colors) */}
      <div className="w-full h-[2px] bg-zinc-900 rounded-full overflow-hidden">
        <div
          className="h-full bg-zinc-600 rounded-full"
          style={{
            width:
              title === "CGPA"
                ? `${parseFloat(value) * 10}%`
                : title === "Attendance"
                ? value
                : "40%",
          }}
        />
      </div>

      {/* Extra Info */}
      {extra && (
        <p className="text-xs text-zinc-600">
          {extra}
        </p>
      )}

    </div>
  )
}

export default StatCard