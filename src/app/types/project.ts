export interface Project {
  id: number
  slug: string

  title: string
  category: string

  period: string
  members: string

  skills: string[]

  image: string

  githubUrl?: string
  deployUrl?: string
}
