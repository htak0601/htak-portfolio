import { PROJECTS } from "../ProjectData"
import { notFound } from "next/navigation"

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

  return (
    <main>
      <h1>{project.title}</h1>
    </main>
  )
}
