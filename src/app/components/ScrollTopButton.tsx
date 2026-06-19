"use client"

import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

export default function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (!isVisible) return null

  return (
    <button
      aria-label="scroll to top"
      onClick={handleScrollTop}
      className="fixed right-5 bottom-5 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white shadow-md"
    >
      <ArrowUp size={20} />
    </button>
  )
}
