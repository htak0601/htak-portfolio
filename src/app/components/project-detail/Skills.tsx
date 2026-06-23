interface SkillsProps {
  skills: readonly string[]
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section>
      <div>
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  )
}
