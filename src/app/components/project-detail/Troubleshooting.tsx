interface TroubleshootingProps {
  items: readonly {
    title: string
    problem: string
    solution: string
    result: string
  }[]
}

export default function Troubleshooting({ items }: TroubleshootingProps) {
  return (
    <section>
      <h2>트러블 슈팅</h2>

      {items.map((item) => (
        <article key={item.title}>
          <h3>{item.title}</h3>

          <div>
            <h4>문제</h4>
            <p>{item.problem}</p>
          </div>

          <div>
            <h4>해결</h4>
            <p>{item.solution}</p>
          </div>

          <div>
            <h4>결과</h4>
            <p>{item.result}</p>
          </div>
        </article>
      ))}
    </section>
  )
}
