interface ProjectFeaturesProps {
  features: readonly string[]
}

export default function ProjectFeatures({ features }: ProjectFeaturesProps) {
  return (
    <section>
      <h2>주요 기능 개발</h2>

      <ul>
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </section>
  )
}
