import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Clients.css'

const clients = [
  {
    name: 'Mogaco',
    industry: 'Productos Quimicos & Limpieza',
    website: 'mogaco.com.mx',
    services: ['ERP + CRM Integral', 'Chatbot IA con 1,035+ productos', 'Sistema de cotizaciones automatico', 'Web app con recomendaciones AI', 'Pagina web mogaco.com.mx'],
    quote: 'Un ecosistema completo que transformo nuestra operacion: desde la gestion de inventarios hasta un chatbot inteligente que atiende a nuestros clientes 24/7.',
  },
]

export default function Clients() {
  const { ref, inView } = useScrollAnimation()

  return (
    <section id="clients" className="section">
      <div className="container" ref={ref}>
        <div className="section-header">
          <span className="section-tag">// CLIENTES</span>
          <h2 className="section-title">Quienes <span className="gradient-text">Confian</span> en Nosotros</h2>
          <p className="section-desc">
            Empresas que eligieron la ventaja asimetrica para transformar su operacion.
          </p>
        </div>

        <div className="clients__grid">
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              className="clients__card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className="clients__card-header">
                <div>
                  <h3 className="clients__name">{c.name}</h3>
                  <p className="clients__industry">{c.industry}</p>
                  <a
                    className="clients__website"
                    href={`https://${c.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {c.website}
                  </a>
                </div>
                <div className="clients__logo-mogaco">
                  <svg width="52" height="52" viewBox="0 0 38 38" fill="none">
                    <circle cx="19" cy="19" r="3.5" fill="#60A5FA" />
                    <ellipse cx="19" cy="19" rx="17" ry="6" stroke="#0A7CFF" strokeWidth="1.5" fill="none" />
                    <ellipse cx="19" cy="19" rx="17" ry="6" stroke="#38BDF8" strokeWidth="1.4" fill="none" transform="rotate(60 19 19)" />
                    <ellipse cx="19" cy="19" rx="17" ry="6" stroke="#818CF8" strokeWidth="1.4" fill="none" transform="rotate(-60 19 19)" />
                    <circle cx="36" cy="19" r="2" fill="#60A5FA" />
                    <circle cx="7.5" cy="10" r="2" fill="#38BDF8" />
                    <circle cx="7.5" cy="28" r="2" fill="#818CF8" />
                  </svg>
                </div>
              </div>

              <div className="clients__services">
                <h4>Soluciones implementadas:</h4>
                <ul>
                  {c.services.map((s, j) => (
                    <li key={j}>
                      <span className="clients__check">&#10003;</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <blockquote className="clients__quote">
                "{c.quote}"
              </blockquote>
            </motion.div>
          ))}

          <motion.div
            className="clients__cta"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="clients__cta-content">
              <h3>Tu empresa aqui</h3>
              <p>Unete a las empresas que ya operan con ventaja asimetrica.</p>
              <a href="#contact" className="btn btn-primary">
                Empezar ahora
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
