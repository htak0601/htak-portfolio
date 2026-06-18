import TimelineItem from "@/app/components/TimelineItem"
import Image from "next/image"

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 bg-gray-50 px-5 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <header className="flex flex-col items-center">
          <Image src="/icons/ic_black_quote.svg" alt="experience icon" width={45} height={45} />

          <h2 className="mt-2 text-base font-semibold tracking-wide">EXPERIENCE</h2>
        </header>

        {/* Content */}
        <div className="mt-12 grid gap-16 md:mt-16 lg:grid-cols-[1.4fr_0.8fr] lg:gap-20">
          {/* Left */}
          <div className="space-y-16">
            {/* Career */}
            <TimelineItem title="CAREER">
              <div className="rounded-2xl border border-blue-100 bg-white p-8 shadow-md">
                {/* Header */}
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600">
                      2년 6개월
                    </span>

                    <span className="text-sm text-zinc-500">2022.02 ~ 2024.08</span>
                  </div>

                  <h4 className="mt-5 text-2xl font-bold text-zinc-900">(주)게임인스</h4>

                  <p className="mt-1 text-zinc-500">웹디자이너</p>

                  <p className="mt-5 leading-relaxed text-zinc-700">
                    게임 커뮤니티 서비스 운영 및 웹디자인 업무를 담당하며 UI/UX 설계, 콘텐츠 디자인,
                    서비스 운영 전반을 경험했습니다.
                  </p>
                </div>

                {/* Key Impact */}
                <div className="mt-8 rounded-xl bg-zinc-50 p-5">
                  <h5 className="font-semibold text-zinc-900">Key Impact</h5>

                  <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                    <li>• 커뮤니티 UI 개선으로 사용자 경험 향상</li>
                    <li>• 이벤트 디자인 시스템 정리</li>
                    <li>• 콘텐츠 템플릿 구축으로 제작 효율 개선</li>
                  </ul>
                </div>

                {/* Details */}
                <div className="mt-8 grid gap-8 md:grid-cols-2">
                  <div>
                    <h5 className="mb-3 font-semibold text-zinc-900">주요 업무</h5>

                    <ul className="space-y-2 text-sm text-zinc-700">
                      <li>• FC 온라인 커뮤니티 운영 및 디자인</li>
                      <li>• 이벤트 및 프로모션 콘텐츠 제작</li>
                      <li>• UI/UX 개선</li>
                      <li>• 배너 및 마케팅 콘텐츠 제작</li>
                      <li>• 자사 홈페이지 구축 및 유지보수</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="mb-3 font-semibold text-zinc-900">주요 프로젝트</h5>

                    <ul className="space-y-2 text-sm text-zinc-700">
                      <li>• 자사 홈페이지 리뉴얼</li>
                      <li>• TNT STUDIO 공간 대여 서비스 구축</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TimelineItem>
          </div>

          {/* Right */}
          <div className="space-y-16">
            {/* Education */}
            <TimelineItem title="EDUCATION">
              <div className="space-y-10">
                <div>
                  <h4 className="text-lg font-semibold">코드잇 프론트엔드 개발자 심화 과정</h4>

                  <p className="mt-1 text-sm text-zinc-500">2025.11 ~ 2026.01</p>

                  <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                    Next.js 기반 팀 프로젝트 수행 · 상태 관리 · API 연동 · 인증 구현
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold">코드잇 프론트엔드 개발자 과정</h4>

                  <p className="mt-1 text-sm text-zinc-500">2025.03 ~ 2025.09</p>

                  <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                    React · TypeScript · Next.js 학습
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold">양정인력개발센터 UI/UX 과정</h4>

                  <p className="mt-1 text-sm text-zinc-500">2020.02 ~ 2020.06</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold">신라대학교 시각디자인학과</h4>

                  <p className="mt-1 text-sm text-zinc-500">2014.03 ~ 2020.02</p>
                </div>
              </div>
            </TimelineItem>

            {/* Certifications */}
            <TimelineItem title="CERTIFICATIONS">
              <div className="space-y-8">
                <div>
                  <h4 className="font-semibold">웹디자인기능사</h4>

                  <p className="mt-1 text-sm text-zinc-500">2021.09</p>
                </div>

                <div>
                  <h4 className="font-semibold">GTQ 포토샵 1급</h4>

                  <p className="mt-1 text-sm text-zinc-500">2017.07</p>
                </div>
              </div>
            </TimelineItem>

            {/* Award */}
            <TimelineItem title="AWARD">
              <div>
                <h4 className="text-lg font-semibold">부산국제디자인어워드 아이디어상</h4>

                <p className="mt-1 text-sm text-zinc-500">2019</p>

                <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                  친환경 브랜드 ZERO BAG 프로젝트를 기획하고 인포그래픽 디자인을 제작했습니다. 졸업
                  작품을 공모전에 출품하여 창의적인 콘셉트와 디자인 완성도를 인정받아 아이디어상을
                  수상했습니다.
                </p>
              </div>
            </TimelineItem>
          </div>
        </div>
      </div>
    </section>
  )
}
