"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PlannerPage() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const days: (number | null)[] = [];

  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  return (
    <div className="h-full overflow-y-auto px-6 py-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-zinc-500">Schedule</p>
          <p className="text-white text-sm">
            {currentDate.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={prevMonth}
            className="p-2 rounded-md bg-[#0F0F0F] border border-zinc-900 hover:bg-zinc-900"
          >
            <ChevronLeft size={16} />
          </button>

          <span className="text-sm text-zinc-400 px-2">
            {currentDate.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </span>

          <button
            onClick={nextMonth}
            className="p-2 rounded-md bg-[#0F0F0F] border border-zinc-900 hover:bg-zinc-900"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Calendar Container */}
      <div className="bg-[#0A0A0A] border border-zinc-900 rounded-2xl p-5">
        {/* Days */}
        <div className="grid grid-cols-7 text-xs text-zinc-500 mb-4">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d} className="text-center">
              {d}
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-7 gap-2">
          {days.map((day, index) => {
            const isToday =
              day === new Date().getDate() &&
              month === new Date().getMonth() &&
              year === new Date().getFullYear();

            return (
              <div
                key={index}
                className={`h-24 rounded-lg border border-zinc-900 p-2 flex flex-col justify-between ${
                  day
                    ? "bg-[#0F0F0F] hover:bg-zinc-900 cursor-pointer"
                    : "bg-transparent border-none"
                }`}
              >
                {day && (
                  <span
                    className={`text-xs ${
                      isToday ? "text-white" : "text-zinc-500"
                    }`}
                  >
                    {day}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
