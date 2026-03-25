import Image from "next/image"
import Link from "next/link"

export default function MatchCard({
  title,
  desc,
  image,
  href,
  refProp,
}: any) {
  return (
    <Link href={href}>
      <div
        ref={refProp}
        className="group relative bg-white border-2 border-black rounded-[32px] p-6 h-[380px] flex flex-col justify-between overflow-hidden shadow-[6px_6px_0px_#000] hover:shadow-[10px_10px_0px_#000] transition-all duration-300 cursor-pointer"
      >
        {/* Top Content */}
        <div>
          <h2 className="text-2xl font-black text-black leading-tight">
            {title}
          </h2>

          <p className="text-sm text-zinc-600 mt-1 max-w-xs">
            {desc}
          </p>
        </div>

        {/* Image */}
        <div className="relative h-44 mt-4 flex items-center justify-center">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2"
          />
        </div>

        {/* Bottom CTA */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm font-semibold text-black">
            Explore
          </span>

          <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black group-hover:translate-x-1 transition">
            →
          </div>
        </div>

        {/* Hover overlay (subtle) */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition duration-300" />
      </div>
    </Link>
  )
}