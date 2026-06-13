import Image from "next/image"
import Skills from "./Skills"

export default function About() {
  return (
    <section
      id="about"
      className="flex min-h-screen scroll-mt-28 items-center justify-center rounded-2xl bg-[#111111] px-5 text-white md:mx-5"
    >
      <div className="flex max-w-xl flex-col items-center py-28 md:max-w-4xl">
        {/* TITLE */}
        <header className="flex flex-col items-center">
          <Image src="/icons/ic_quote.svg" alt="about icon" width={45} height={45} />
          <h2 className="mt-2 text-lg font-bold">ABOUT</h2>
        </header>

        {/* INTRO */}
        <p className="mt-12 text-center text-xl leading-relaxed font-bold text-zinc-100 md:mt-16 md:text-2xl">
          사용자 경험과 코드 구조를 함께 설계하는 <br className="md:hidden" />
          프론트엔드 개발자 이형탁입니다.
        </p>

        <div className="mt-6 h-px w-12 bg-zinc-700" />

        {/* CONTENT */}
        <div className="mt-6 max-w-xl">
          <ul className="space-y-4 text-base leading-relaxed text-zinc-300 md:text-lg">
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
              <span>
                <span className="font-semibold text-white">React와 Next.js</span> 기반 프로젝트에서
                컴포넌트 구조와 데이터 흐름을 중심으로 개발하며,
                <span className="font-semibold text-white"> 유지보수성과 확장성</span>을 고려한
                설계를 중요하게 생각합니다.
              </span>
            </li>

            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
              <span>
                동작하는 코드보다
                <span className="font-semibold text-white"> 이해하고 협업할 수 있는 코드</span>를
                지향합니다.
              </span>
            </li>
          </ul>
        </div>

        {/* SKILL */}
        <Skills />
      </div>
    </section>
  )
}
