import Navbar from "../components/NavBar"

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />

      <main className="pt-24 md:pt-28">{children}</main>
    </>
  )
}
