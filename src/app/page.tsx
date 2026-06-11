import About from "./setctions/about/About"
import Contact from "./setctions/contact/Contact"
import Experience from "./setctions/experience/Experience"
import Hero from "./setctions/hero/Hero"
import Projects from "./setctions/projects/Projects"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}
