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
    <section>
      <div>
        <Image src={project.image} alt={project.title} width={1200} height={800} />
      </div>

      <div>
        {/* TITLE */}
        <div>
          <h1>{project.title}</h1>
          <div>
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub />
                Github 바로가기
              </a>
            )}

            {project.deployUrl && (
              <a href={project.deployUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink />
                홈페이지 바로가기
              </a>
            )}
          </div>
        </div>

        <p>{description}</p>
      </div>
    </section>
  )
}
