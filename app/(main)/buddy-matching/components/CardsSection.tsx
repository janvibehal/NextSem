import MatchCard from "./MatchCard"

export default function CardsSection({ refs }: any) {
  return (
    <div className="mt-12 space-y-6">

      {/* Section Heading */}
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-wider text-zinc-500">
            Choose your path
          </p>
          <h2 className="text-xl font-semibold text-black">
            Start with what you need
          </h2>
        </div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* Study Buddy */}
        <div className="group relative">
          
          {/* subtle glow */}
          <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-transparent via-zinc-200 to-transparent opacity-0 group-hover:opacity-100 blur-md transition duration-500" />

          <div className="relative">
            <MatchCard
              title="Study Buddy"
              desc="Find someone to study with, someone with your subjects, your pace, your vibe."
              image="/card11.png"
              href="/buddy-matching/peer-help/buddy"
              refProp={refs.card1Ref}
            />
          </div>
        </div>

        {/* Project Partner */}
        <div className="group relative">

          {/* subtle glow */}
          <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-transparent via-zinc-200 to-transparent opacity-0 group-hover:opacity-100 blur-md transition duration-500" />

          <div className="relative">
            <MatchCard
              title="Project Partner"
              desc="Build projects together, we'll suggest you the project ideas too !"
              image="/card22.png"
              href="/buddy-matching/peer-help/project-partner"
              refProp={refs.card2Ref}
            />
          </div>
        </div>

      </div>
    </div>
  )
}