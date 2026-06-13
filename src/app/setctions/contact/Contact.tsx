import Image from "next/image"
import { Mail } from "lucide-react"
import { FaGithub } from "react-icons/fa"

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 border-t border-zinc-200 bg-gray-50 px-5 pt-24 pb-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <header className="flex flex-col items-center">
          <Image src="/icons/ic_black_quote.svg" alt="contact icon" width={45} height={45} />

          <h2 className="mt-2 text-base font-semibold tracking-wide">CONTACT</h2>
        </header>

        {/* Content */}
        <div className="mt-16 flex flex-col items-center">
          <h3 className="text-center text-4xl font-bold text-zinc-900 md:text-5xl">
            Let&apos;s Work Together
          </h3>

          <p className="mt-5 max-w-2xl text-center leading-relaxed text-zinc-600">
            디자인 경험을 바탕으로 사용자 경험을 고민하며 프론트엔드 개발자로 성장하고 있습니다.
            <br />
            새로운 기회와 협업 제안은 언제든 환영합니다.
          </p>

          {/* Contact Links */}
          <div className="mt-10 flex items-center gap-4">
            <a
              href="mailto:your-email@example.com"
              aria-label="Email"
              className="rounded-full border border-zinc-200 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-100"
            >
              <Mail size={24} />
            </a>

            <a
              href="https://github.com/htak0601"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-zinc-200 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-100"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-6">
          <p className="text-center text-xs tracking-wider text-zinc-500 uppercase">
            Copyright © H.TAK All Rights Reserved
          </p>
        </footer>
      </div>
    </section>
  )
}
