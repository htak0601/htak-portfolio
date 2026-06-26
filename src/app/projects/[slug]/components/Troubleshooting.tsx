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
    <section className="mt-9 border-t border-zinc-300">
      <h2 className="mt-9 text-2xl font-bold">트러블 슈팅</h2>

      {items.map((item, index) => (
        <article key={item.title} className="mt-2 flex flex-col">
          <div className="mb-8 flex flex-col border-b border-zinc-300 pb-8">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">0{index + 1}.</span>

              <h3 className="text-xl font-bold">{item.title}</h3>
            </div>

            <div className="mt-4 flex flex-col gap-6">
              <div>
                <h4 className="text-base font-semibold">[ 문제 ]</h4>
                <p className="mt-1 leading-7 text-zinc-700">{item.problem}</p>
              </div>

              <div>
                <h4 className="text-base font-semibold">[ 해결 ]</h4>
                <p className="mt-1 leading-7 text-zinc-700">{item.solution}</p>
              </div>

              <div>
                <h4 className="text-base font-semibold">[ 결과 ]</h4>
                <p className="mt-1 leading-7 text-zinc-700">{item.result}</p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}
