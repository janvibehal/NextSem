export default function ProTip() {
  return (
    <div className="mb-10 flex justify-center">

      <div className="group relative w-full max-w-3xl">

        {/* subtle glow */}
        <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-transparent via-zinc-200 to-transparent opacity-0 group-hover:opacity-100 blur-md transition duration-500" />

        {/* main */}
        <div className="relative flex items-center gap-4 bg-white/90 backdrop-blur border border-zinc-200 rounded-full px-5 py-3 shadow-sm hover:shadow-md transition-all duration-300">

          {/* icon */}
          <div className="h-10 w-10 flex items-center justify-center rounded-full bg-black text-white text-sm font-semibold transition-transform duration-300 group-hover:scale-105">
            💡
          </div>

          {/* text */}
          <p className="text-sm text-zinc-700 font-medium leading-snug">
            <span className="font-semibold text-black">Pro tip:</span>{" "}
            Keep your{" "}
            <span className="underline underline-offset-4 decoration-zinc-400 hover:decoration-black cursor-pointer transition">
              profile updated
            </span>{" "}
            to get better matches.
          </p>

          {/* arrow */}
          <div className="ml-auto text-zinc-400 group-hover:text-black transition-transform duration-300 group-hover:translate-x-1">
            →
          </div>

        </div>
      </div>
    </div>
  )
}