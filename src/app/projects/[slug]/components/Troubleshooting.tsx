import { TroubleshootingItem } from "@/app/types/project"
import Image from "next/image"

interface TroubleshootingProps {
  items: readonly TroubleshootingItem[]
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

                {/* BeforeImage */}
                {item.beforeImage && (
                  <div className="mt-5 flex flex-col items-center">
                    <Image
                      src={item.beforeImage}
                      alt={`${item.title} Before`}
                      width={800}
                      height={500}
                      className="rounded-xl border border-zinc-200"
                    />
                    <p className="mt-2 text-center text-base font-medium text-zinc-500">
                      {item.beforeCaption}
                    </p>
                  </div>
                )}

                {/* AfterImage */}
                {item.afterImage && (
                  <div className="mt-8 flex flex-col items-center">
                    <Image
                      src={item.afterImage}
                      alt={`${item.title} After`}
                      width={800}
                      height={500}
                      className="rounded-xl border border-zinc-200"
                    />
                    <p className="mt-2 text-center text-base font-medium text-zinc-500">
                      {item.afterCaption}
                    </p>
                  </div>
                )}
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
