import { Project } from "./types"

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "갈이달림 Trun",
    category: "팀 프로젝트",
    period: "2025.12 ~ 2026.01",
    members: "3인",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Tanstack Query", "Zod"],
    image: "/images/img_trun.webp",
    githubUrl: "https://github.com/codeit-fesi12-4/trun",
    deployUrl: "https://trun-project.vercel.app/",
  },
  {
    id: 2,
    title: "Experia",
    category: "팀 프로젝트",
    period: "2025.06 ~ 2025.08",
    members: "5인",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Tanstack Query", "Zod"],
    image: "/images/img_experia.webp",
    githubUrl: "https://github.com/ExplorerTheArea/Experia",
  },
  {
    id: 3,
    title: "티키앤타카",
    category: "웹 디자인",
    period: "2022. 06 ~ 2023.08",
    members: "1인",
    skills: ["Figma", "Illustrator", "Photoshop"],
    image: "/images/img_tikintaka.webp",
  },
]
