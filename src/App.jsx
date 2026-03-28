import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Products from './sections/Products'
import ACIA from './sections/ACIA'
import AISuite from './sections/AISuite'
import Clients from './sections/Clients'
import Tech from './sections/Tech'
import Process from './sections/Process'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import CursorGlow from './components/CursorGlow'
import Divider from './components/Divider'

export default function App() {
  return (
    <>
      <ParticleBackground />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Products />
        <Divider />
        <ACIA />
        <Divider />
        <AISuite />
        <Divider />
        <Clients />
        <Divider />
        <Tech />
        <Divider />
        <Process />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
