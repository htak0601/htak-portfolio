interface ProjectFeaturesProps {
  features: readonly string[]
}

export default function ProjectFeatures({ features }: ProjectFeaturesProps) {
  return (
    <section className="mt-9">
      <h2 className="text-2xl font-bold">주요 기능 개발</h2>

      <ul className="mt-6 list-disc space-y-3 pl-5">
        {features.map((feature) => (
          <li key={feature} className="leading-relaxed text-zinc-700">
            {feature}
          </li>
        ))}
      </ul>
    </section>
  )
}
