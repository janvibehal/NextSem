"use client"

export default function Header() {
  return (
    <div className="relative w-full mb-10">

      {/* Cover */}
      <div className="relative h-40 rounded-2xl overflow-hidden border border-zinc-900">

        {/* Image */}
        <img
          src="/banner.png"
          alt="cover"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-between px-6">

          {/* Left */}
          <div>
            <h1 className="text-2xl font-semibold text-white">
              Hi Anjali
            </h1>
            <p className="text-sm text-zinc-300">
              3rd Year · Computer Science
            </p>
          </div>

        </div>
      </div>

      {/* Avatar */}
      <div className="absolute -bottom-6 left-6 w-16 h-16 rounded-full bg-zinc-800 border border-zinc-900 z-10" />
    </div>
  )
}