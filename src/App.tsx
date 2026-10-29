import Nav from './components/Nav'
import ScrollProgress from './components/ScrollProgress'
import KeywordStrip from './components/KeywordStrip'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <ScrollProgress />
      <Nav />
      <Hero />
      <KeywordStrip />

      <div className="relative">
        <div
          className="pointer-events-none absolute inset-0 bg-grid-light opacity-70"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.10),transparent_70%)]"
          aria-hidden
        />

        <main className="relative mx-auto w-full max-w-[1080px] px-6 md:px-10">
          <About />
          <Experience />
          <Projects />
          <Skills />
        </main>
      </div>

      <Contact />
    </div>
  )
}
