interface SkillsProps {
  skills: readonly string[]
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section className="mt-8 flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600"
        >
          {skill}
        </span>
      ))}
    </section>
  )
}
