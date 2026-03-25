"use client"

import React from "react"

const subjects = [
  { name: "DBMS", attendance: 78 },
  { name: "Operating Systems", attendance: 85 },
  { name: "Computer Networks", attendance: 72 },
  { name: "AI", attendance: 90 },
]

const AcademicOverview = () => {
  return (
    <div className="bg-[#0b0b0b] border border-white/5 rounded-2xl p-6 space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-sm text-white/90 tracking-wide">
          Academic Overview
        </h2>
        <button className="text-xs text-white/40 hover:text-white/70 transition">
          View Details
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-5">

        {/* CGPA */}
        <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4 space-y-3">
          <p className="text-[11px] text-white/40 uppercase tracking-wider">
            CGPA
          </p>
          <h3 className="text-xl text-white/90 font-medium">8.2</h3>

          <div className="h-[2px] bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-white/40"
              style={{ width: "82%" }}
            />
          </div>

          <p className="text-[11px] text-white/30">SGPA: 8.6</p>
        </div>

        {/* Attendance */}
        <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4 space-y-3">
          <p className="text-[11px] text-white/40 uppercase tracking-wider">
            Attendance
          </p>
          <h3 className="text-xl text-white/90 font-medium">83%</h3>

          <div className="h-[2px] bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-white/40"
              style={{ width: "83%" }}
            />
          </div>

          <p className="text-[11px] text-white/30">
            Within safe range
          </p>
        </div>
      </div>

      {/* Subjects */}
      <div className="space-y-4">
        <h3 className="text-[11px] text-white/40 uppercase tracking-wider">
          Subjects
        </h3>

        {subjects.map((sub, index) => (
          <div key={index} className="space-y-2">
            
            <div className="flex justify-between text-xs">
              <span className="text-white/70">{sub.name}</span>
              <span className="text-white/40">{sub.attendance}%</span>
            </div>

            <div className="h-[2px] bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-white/30"
                style={{ width: `${sub.attendance}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Insight */}
      <div className="border border-white/[0.05] rounded-xl p-4 bg-white/[0.02]">
        <p className="text-xs text-white/60 leading-relaxed">
          Attendance in <span className="text-white/90">Computer Networks</span> is below threshold. Maintain consistency in upcoming classes.
        </p>
      </div>

    </div>
  )
}

export default AcademicOverview