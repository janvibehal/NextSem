"use client";

import { useState } from "react";
import { Bell } from "lucide-react";

import StatCard from "./components/StatCard";
import QuickActions from "./components/QuickActions";
import AcademicOverview from "./components/AcademicOverview";
import Header from "./components/Header";

export default function DashboardPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden ">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        {/* Header */}
       <Header/>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6">
          <StatCard
            title="CGPA"
            value="8.2"
            sub="8.2/10"
            extra="SGPA 8.6"
            progress={82}
          />
          <StatCard
            title="Attendance"
            value="83%"
            sub="You're safe"
            progress={83}
          />
          <StatCard
            title="Upcoming deadlines"
            value="2"
            sub="Due in next 7 days"
            progress={40}
          />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left */}
          <div className="col-span-2 space-y-6">
            <AcademicOverview />
          </div>

          {/* Right */}
          <div className="space-y-6">
            <QuickActions />
          </div>
        </div>
      </div>
    </div>
  );
}
