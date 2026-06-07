import Image from "next/image"
import { Menu } from "lucide-react"

export default function Navbar() {
  return (
    <header className="fixed top-5 right-10 left-10 z-50">
      <div className="flex h-20 items-center justify-between border-y backdrop-blur-md">
        <h1>
          <Image
            src="./icons/logo.svg"
            alt="h.tak logo"
            width={100}
            height={100}
            className="h-auto w-24"
          />
        </h1>

        {/* PC 메뉴 버튼 */}
        <nav className="hidden md:block">
          <ul className="text-md flex items-center gap-8 font-medium">
            <li>
              <button>ABOUT</button>
            </li>

            <li>
              <button>PROJECTS</button>
            </li>

            <li>
              <button>EXPERIENCE</button>
            </li>
          </ul>
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <button aria-label="open menu" className="flex items-center justify-center md:hidden">
          <Menu size={36} />
        </button>
      </div>
    </header>
  )
}
