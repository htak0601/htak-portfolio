export type ProjectSlug = "trun" | "experia" | "portfolio"

export interface Project {
  id: number
  slug: ProjectSlug

  title: string
  category: string

  period: string
  members: string

  skills: string[]

  image: string

  githubUrl?: string
  deployUrl?: string
}

export interface TroubleshootingItem {
  title: string
  problem: string
  solution: string
  result: string

  beforeImage?: string
  beforeCaption?: string

  afterImage?: string
  afterCaption?: string
}

export interface ProjectDetail {
  description: string
  features: readonly string[]
  troubleshooting: readonly TroubleshootingItem[]
  achievements: readonly string[]
}
