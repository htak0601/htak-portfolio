import About from "./setctions/About";
import Contact from "./setctions/Contact";
import Experience from "./setctions/Experience";
import Hero from "./setctions/Hero";
import Projects from "./setctions/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
