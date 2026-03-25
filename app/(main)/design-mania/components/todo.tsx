"use client";

import React from "react";

export default function TodoPage() {
  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center px-6">

      <div className="text-center space-y-6">

        {/* LABEL */}
        <div className="px-4 py-1.5 rounded-full border border-zinc-200 bg-[#FAFAFA] text-xs text-zinc-500 tracking-wide inline-block">
          COMING SOON
        </div>

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          To-do Lists
        </h1>

        {/* DESC */}
        <p className="text-sm text-zinc-500 max-w-sm mx-auto">
          We're working on something clean and powerful to help you stay organized.
        </p>

        {/* SUB TEXT */}
        <p className="text-xs text-zinc-400">
          Stay tuned ✨
        </p>

      </div>
    </div>
  );
}