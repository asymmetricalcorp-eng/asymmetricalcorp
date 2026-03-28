import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

const links = [
  { href: '#about', label: 'Nosotros' },
  { href: '#products', label: 'Productos' },
  { href: '#acia', label: 'ACIA' },
  { href: '#ai', label: 'AI Suite' },
  { href: '#clients', label: 'Clientes' },
  { href: '#contact', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <a href="#hero" className="navbar__logo">
          <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Asymmetricalcorp" className="navbar__logo-icon" />
          <span className="navbar__logo-text">ASYMMETRICALCORP</span>
        </a>

        <div className="navbar__links">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="navbar__link">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary btn-nav">Iniciar Proyecto</a>
        </div>

        <button
          className={`navbar__toggle ${mobileOpen ? 'active' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="navbar__mobile-link"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="navbar__mobile-link navbar__mobile-cta">
              Iniciar Proyecto
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
