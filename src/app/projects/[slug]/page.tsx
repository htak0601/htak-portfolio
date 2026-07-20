import { notFound } from "next/navigation"
import { PROJECTS } from "@/app/data/ProjectData"
import { PROJECT_DETAILS } from "@/app/data/ProjectDetailData"

import Link from "next/link"
import ProjectHero from "./components/ProjectHero"
import Skills from "./components/Skills"
import ProjectFeatures from "./components/ProjectFeatures"
import Troubleshooting from "./components/Troubleshooting"
import Achievement from "./components/Achievement"

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params

  const project = PROJECTS.find((project) => project.slug === slug)

  if (!project) {
    notFound()
  }

  const detail = PROJECT_DETAILS[project.slug]

  if (!detail) {
    notFound()
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <Link
        href="/#projects"
        className="rounded-3xl border border-zinc-300 px-3 py-4 text-sm text-zinc-500 transition hover:text-zinc-900"
      >
        ← 프로젝트 목록으로
      </Link>

      <ProjectHero project={project} description={detail.description} />

      <Skills skills={project.skills} />

      <ProjectFeatures features={detail.features} />

      <Troubleshooting items={detail.troubleshooting} />

      <Achievement achievements={detail.achievements} />
    </main>
  )
}
