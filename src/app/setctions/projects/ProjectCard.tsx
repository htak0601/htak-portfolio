import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"

import { Project } from "./types"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col">
      {/* Thumbnail */}
      <div className="group relative cursor-pointer overflow-hidden duration-300 md:rounded-3xl">
        <div className="relative aspect-square w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-all duration-300 group-hover:bg-black/50">
          <div className="text-center text-white">
            <p className="text-base tracking-widest uppercase">Project Overview</p>

            <span className="relative mt-2 inline-block pb-1 text-2xl font-semibold">
              View Details
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-500 group-hover:w-full" />
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mt-5">
        <div className="flex items-center justify-between px-5 md:px-0">
          <span className="text-sm font-semibold text-zinc-500">{project.category}</span>

          <div className="flex gap-3">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub size={18} />
              </a>
            )}

            {project.deployUrl && (
              <a href={project.deployUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <h3 className="mt-1 px-5 text-2xl font-bold md:px-0">{project.title}</h3>

        <div className="mt-5 border-t border-zinc-500 px-5 pt-5 md:px-0">
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <p className="text-sm font-semibold">제작 기간</p>
              <p className="text-sm text-zinc-500">{project.period}</p>
            </div>

            <div className="flex gap-2">
              <p className="text-sm font-semibold">제작 인원</p>
              <p className="text-sm text-zinc-500">{project.members}</p>
            </div>
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <span key={skill} className="rounded-full border border-zinc-300 px-3 py-1 text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
