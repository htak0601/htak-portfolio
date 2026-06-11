import Image from "next/image"

const DESIGN_SKILLS = [
  { name: "Illustrator", filename: "ic_illustrator" },
  { name: "Photoshop", filename: "ic_photoshop" },
  { name: "Figma", filename: "ic_figma" },
]

export default function DesignSkills() {
  return (
    <div className="w-full text-left">
      <div className="flex flex-col gap-2">
        {/* 소제목 */}
        <h4 className="text-base font-semibold text-zinc-300">Design</h4>

        {/* 아이콘 */}
        <div className="flex flex-wrap gap-4 rounded-2xl border border-zinc-800 bg-[#121212] p-6 md:p-8">
          {DESIGN_SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="flex h-16 w-16 items-center justify-center rounded-xl border border-dashed border-zinc-700 bg-[#1e1e1e] p-2 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-500 hover:shadow-2xl md:h-20 md:w-20"
              title={skill.name}
              aria-label={skill.name}
            >
              <Image
                src={`/icons/${skill.filename}.svg`}
                alt={`${skill.name} 아이콘`}
                width={55}
                height={55}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
