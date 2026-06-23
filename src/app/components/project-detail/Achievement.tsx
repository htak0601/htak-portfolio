interface AchievementProps {
  achievements: readonly string[]
}

export default function Achievement({ achievements }: AchievementProps) {
  return (
    <section>
      <h2>성과</h2>

      <ul>
        {achievements.map((achievement) => (
          <li key={achievement}>{achievement}</li>
        ))}
      </ul>
    </section>
  )
}
