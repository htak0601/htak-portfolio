import Image from "next/image"
import DesignSkills from "./DesignSkills"
import FrontendSkills from "./FrontendSkills"

export default function Skills() {
  return (
    <div className="mt-28 flex w-full flex-col items-center">
      {/* TITLE */}
      <header className="flex flex-col items-center">
        <Image src="/icons/ic_quote.svg" alt="about icon" width={45} height={45} />
        <h2 className="mt-2 text-base font-bold md:text-lg">SKILLS</h2>
      </header>

      <div className="mt-12 w-full rounded-2xl border border-zinc-700 bg-zinc-800 p-5 md:mt-16">
        <div className="flex flex-col gap-8">
          <DesignSkills />
          <FrontendSkills />
        </div>
      </div>
    </div>
  )
}
