import type { Metadata } from "next"
import { pretendard } from "./fonts"
import "./globals.css"
import ScrollTopButton from "./components/ScrollTopButton"
import Navbar from "./components/NavBar"

export const metadata: Metadata = {
  title: "이형탁 | Frontend Developer",
  description: "사용자 경험과 문제 해결을 고민하는 프론트엔드 개발자 이형탁의 포트폴리오",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className="min-h-screen">
        <Navbar />

        <main className="pt-24 md:pt-28">{children}</main>

        <ScrollTopButton />
      </body>
    </html>
  )
}
