import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Products from './sections/Products'
import ACIA from './sections/ACIA'
import AISuite from './sections/AISuite'
import Clients from './sections/Clients'
import Tech from './sections/Tech'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import CursorGlow from './components/CursorGlow'

export default function App() {
  return (
    <>
      <ParticleBackground />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <ACIA />
        <AISuite />
        <Clients />
        <Tech />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
