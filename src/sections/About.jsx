import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './About.css'

const cards = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Ventaja Asimetrica',
    desc: 'No competimos en igualdad de condiciones. Creamos asimetrias tecnologicas que convierten las limitaciones del mercado en oportunidades desproporcionadas para nuestros clientes.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: 'IA que Aprende',
    desc: 'Nuestras inteligencias artificiales no son genericas. Se adaptan a tu negocio, aprenden de tus datos y automatizan procesos generando insights en tiempo real.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0022 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: 'Ecosistema Unificado',
    desc: 'ERP, CRM, generacion de contenido con IA y analytics — todo integrado en un solo ecosistema. Sin fragmentacion, sin fricciones, maxima eficiencia.',
  },
]

export default function About() {
  const { ref, inView } = useScrollAnimation()

  return (
    <section id="about" className="section">
      <div className="container" ref={ref}>
        <div className="section-header">
          <span className="section-tag">// NOSOTROS</span>
          <h2 className="section-title">
            La Asimetria como <span className="gradient-text">Filosofia</span>
          </h2>
          <p className="section-desc">
            En un mercado donde todos juegan con las mismas reglas, nosotros cambiamos el tablero.
            Asymmetricalcorp nace de la idea de que la verdadera ventaja competitiva
            no es ser mejor en lo mismo — es hacer lo diferente.
          </p>
        </div>

        <div className="about__grid">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="about__card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className="about__card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
