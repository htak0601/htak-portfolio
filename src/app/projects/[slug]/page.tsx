import { notFound } from "next/navigation"

import { PROJECTS } from "@/app/data/ProjectData"
import { PROJECT_DETAILS } from "@/app/data/ProjectDetailData"

import ProjectHero from "@/app/components/project-detail/ProjectHero"
import Skills from "@/app/components/project-detail/Skills"
import ProjectFeatures from "@/app/components/project-detail/ProjectFeatures"
import Troubleshooting from "@/app/components/project-detail/Troubleshooting"
import Achievement from "@/app/components/project-detail/Achievement"
import Link from "next/link"

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params

  const project = PROJECTS.find((project) => project.slug === slug)

  const detail = PROJECT_DETAILS[slug as keyof typeof PROJECT_DETAILS]

  if (!project || !detail) {
    notFound()
  }

  return (
    <main>
      <Link href="/#projects">← 목록으로</Link>

      <ProjectHero project={project} description={detail.description} />

      <Skills skills={project.skills} />

      <ProjectFeatures features={detail.features} />

      <Troubleshooting items={detail.troubleshooting} />

      <Achievement achievements={detail.achievements} />
    </main>
  )
}
