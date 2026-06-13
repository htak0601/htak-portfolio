import Image from "next/image"

import ProjectCard from "./ProjectCard"
import { PROJECTS } from "./ProjectData"

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 bg-white md:px-5">
      <div className="mx-auto max-w-[1600px] py-28">
        {/* Title */}
        <header className="flex flex-col items-center">
          <Image src="/icons/ic_black_quote.svg" alt="projects icon" width={45} height={45} />

          <h2 className="mt-2 text-lg font-bold">PROJECTS</h2>
        </header>

        {/* Content */}
        <div className="mt-12 grid grid-cols-1 gap-20 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
