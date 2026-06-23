import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5">
      <div className="text-center">
        <p className="text-sm font-medium tracking-[0.3em] text-zinc-500 uppercase">
          Project Not Found
        </p>

        <h1 className="mt-4 text-6xl font-bold">404</h1>

        <p className="mt-4 text-zinc-500">존재하지 않는 프로젝트입니다.</p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center border border-zinc-300 px-6 py-3 text-sm font-medium transition-colors hover:bg-zinc-100"
        >
          목록으로 돌아가기
        </Link>
      </div>
    </main>
  )
}
