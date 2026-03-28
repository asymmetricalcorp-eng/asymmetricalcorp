import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import './Hero.css'

function AnimatedCounter({ target, suffix = '' }) {
  const ref = useRef()

  useEffect(() => {
    let start = 0
    const duration = 2000
    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      if (ref.current) {
        ref.current.textContent = Math.floor(eased * target) + suffix
      }
      if (progress < 1) requestAnimationFrame(step)
    }
    const timer = setTimeout(() => requestAnimationFrame(step), 800)
    return () => clearTimeout(timer)
  }, [target, suffix])

  return <span ref={ref}>0{suffix}</span>
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <motion.div
          className="hero__badge"
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <span className="hero__badge-dot" />
          Technology & Innovation
        </motion.div>

        <motion.h1
          className="hero__title"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <span className="hero__title-line">Donde la</span>
          <span className="hero__title-line gradient-text">Asimetria</span>
          <span className="hero__title-line">es Ventaja</span>
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          No seguimos las reglas del juego convencional. Creamos ventajas asimetricas
          con tecnologia: ERP + CRM potenciados con IA, generacion automatizada de
          contenido, y soluciones que transforman la forma en que operas.
        </motion.p>

        <motion.div
          className="hero__buttons"
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <a href="#products" className="btn btn-primary">
            <span>Explorar Soluciones</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contact" className="btn btn-outline">
            <span>Contactar</span>
          </a>
        </motion.div>

        <motion.div
          className="hero__stats"
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <div className="hero__stat">
            <span className="hero__stat-number"><AnimatedCounter target={5} suffix="+" /></span>
            <span className="hero__stat-label">AI Models</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number"><AnimatedCounter target={99} suffix="%" /></span>
            <span className="hero__stat-label">Uptime</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">24/7</span>
            <span className="hero__stat-label">Soporte AI</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </motion.div>
    </section>
  )
}
