export default function Ticker() {
  const items = [
    "500+ matches made this week",
    "200+ active students",
    "Top projects forming daily",
    "New connections every hour",
  ]

  return (
    <div className="mt-12 relative overflow-hidden">

      {/* fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

      {/* track */}
      <div className="flex gap-6 animate-marquee w-max">

        {[...items, ...items].map((text, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-zinc-200 bg-white shadow-sm text-sm text-zinc-700 whitespace-nowrap hover:shadow-md transition"
          >
            <span className="w-1.5 h-1.5 bg-black rounded-full" />
            {text}
          </div>
        ))}

      </div>
    </div>
  )
}