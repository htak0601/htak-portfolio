interface AchievementProps {
  achievements: readonly string[]
}

export default function Achievement({ achievements }: AchievementProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold">배운 점</h2>

      <ul className="mt-6 list-disc space-y-3 pl-5">
        {achievements.map((achievement) => (
          <li key={achievement} className="leading-7 text-zinc-700">
            {achievement}
          </li>
        ))}
      </ul>
    </section>
  )
}
