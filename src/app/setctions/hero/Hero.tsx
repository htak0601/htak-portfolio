import { Mail, Phone, User } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center">
      <div className="w-full px-5 lg:px-40">
        {/* badge */}
        <p className="text-lg font-semibold tracking-[0.6em] text-zinc-500 uppercase md:text-xl md:tracking-[1em]">
          PORTFOLIO
        </p>

        {/* title */}
        <h2 className="mt-2 text-4xl leading-snug font-bold tracking-tight text-zinc-900 sm:text-6xl md:text-7xl">
          디자인에서 개발로,
          <br />
          <span className="flex items-center gap-4">
            새로운 도전을 이어가는
            <span className="relative hidden h-1.5 flex-1 bg-zinc-900 sm:block" />
          </span>
          프론트엔드 개발자
        </h2>

        {/* profile + contact */}
        <div className="mt-10 flex flex-col gap-6">
          {/* profile */}
          <div className="relative h-32 w-32 md:h-36 md:w-36">
            <Image
              src="/icons/tak_profile.png"
              alt="이형탁 프로필 이미지"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* contact */}
          <address className="flex flex-col gap-1 text-lg font-semibold not-italic sm:text-xl">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>이형탁</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>010.5777.4375</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>taklee2@naver.com</span>
            </div>
          </address>
        </div>
      </div>
    </section>
  )
}
