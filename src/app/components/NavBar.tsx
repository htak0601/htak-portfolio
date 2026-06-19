"use client"

import Image from "next/image"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-5 right-0 left-0 z-50">
      <div
        className={`mx-5 overflow-hidden bg-white/90 backdrop-blur md:mx-10 ${
          isOpen ? "rounded-2xl shadow-md" : "border-y"
        }`}
      >
        <div className="flex h-14 items-center justify-between px-4 md:h-20">
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

          {/* PC 메뉴 */}
          <nav className="hidden md:block">
            <ul className="text-md flex items-center gap-8 font-medium">
              <li>
                <Link href="#about" className="transition-opacity hover:opacity-60">
                  ABOUT
                </Link>
              </li>

              <li>
                <Link href="#projects" className="transition-opacity hover:opacity-60">
                  PROJECTS
                </Link>
              </li>

              <li>
                <Link href="#experience" className="transition-opacity hover:opacity-60">
                  EXPERIENCE
                </Link>
              </li>

              <li>
                <Link href="#contact" className="transition-opacity hover:opacity-60">
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <button
            aria-label="toggle menu"
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer md:hidden"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isOpen && (
          <nav className="p-5 pt-10 md:hidden">
            <ul className="flex flex-col gap-6 pb-3">
              <li>
                <Link
                  href="#about"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 text-lg font-medium transition-opacity hover:opacity-60"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-black" />
                  ABOUT
                </Link>
              </li>

              <li>
                <Link
                  href="#projects"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 text-lg font-medium transition-opacity hover:opacity-60"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-black" />
                  PROJECTS
                </Link>
              </li>

              <li>
                <Link
                  href="#experience"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 text-lg font-medium transition-opacity hover:opacity-60"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-black" />
                  EXPERIENCE
                </Link>
              </li>

              <li>
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 text-lg font-medium transition-opacity hover:opacity-60"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-black" />
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
