import Image from "next/image"
import { FaGithub } from "react-icons/fa"
import { ExternalLink } from "lucide-react"

import { Project } from "@/app/types/project"

interface ProjectHeroProps {
  project: Project
  description: string
}

export default function ProjectHero({ project, description }: ProjectHeroProps) {
  return (
    <section className="mt-8">
      {/* Project Image */}
      <div className="relative aspect-[1.92/1] overflow-hidden rounded-3xl">
        <Image src={project.image} alt={project.title} fill className="object-cover" />
      </div>

      {/* Project Info */}
      <div className="mt-10">
        <div className="flex justify-between gap-5 md:flex-row md:items-center md:justify-between">
          <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>

          <div className="flex gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-base transition hover:bg-zinc-100"
              >
                <FaGithub size={24} />
                <span className="hidden md:block">Github</span>
              </a>
            )}

            {project.deployUrl && (
              <a
                href={project.deployUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-base transition hover:bg-zinc-100"
              >
                <ExternalLink size={24} />
                <span className="hidden md:block">홈페이지</span>
              </a>
            )}
          </div>
        </div>

        <p className="mt-4 text-lg leading-relaxed text-zinc-600">{description}</p>
      </div>
    </section>
  )
}
