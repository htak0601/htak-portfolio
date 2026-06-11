import Image from "next/image"
import { Menu } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="fixed top-5 right-0 left-0 z-50">
      <div className="mx-5 flex h-14 items-center justify-between border-y bg-white/60 backdrop-blur md:mx-10 md:h-20">
        <h1>
          <Link href="/" className="block w-20 md:w-24">
            <Image
              src="/icons/logo.svg"
              alt="h.tak logo"
              width={100}
              height={100}
              className="h-auto w-full"
            />
          </Link>
        </h1>

        {/* PC 메뉴 버튼 */}
        <nav className="hidden md:block">
          <ul className="text-md flex items-center gap-8 font-medium">
            <li>
              <Link href="#about">ABOUT</Link>
            </li>

            <li>
              <Link href="#projects">PROJECTS</Link>
            </li>

            <li>
              <Link href="#experience">EXPERIENCE</Link>
            </li>

            <li>
              <Link href="#contact">CONTACT</Link>
            </li>
          </ul>
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <button aria-label="open menu" className="flex items-center justify-center md:hidden">
          <Menu size={30} />
        </button>
      </div>
    </header>
  )
}
