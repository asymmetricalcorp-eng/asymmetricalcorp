import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './AISuite.css'

const agents = [
  {
    name: 'JarVik',
    role: 'Asistente AI General',
    desc: 'Tu asistente virtual inteligente. Gestiona tareas, responde consultas, analiza datos y automatiza procesos empresariales con lenguaje natural.',
    tags: ['NLP', 'Automation', 'Analytics', 'Multi-language'],
    featured: true,
  },
  {
    name: 'Sales-AI',
    role: 'Motor de Ventas',
    desc: 'Optimiza tu pipeline con predicciones, scoring de leads y recomendaciones para cerrar mas deals.',
    tags: ['Lead Scoring', 'Forecasting', 'Pipeline'],
    featured: false,
  },
  {
    name: 'Support-AI',
    role: 'Soporte 24/7',
    desc: 'Atencion al cliente automatizada con resolucion inteligente de tickets y escalamiento automatico.',
    tags: ['Chatbot', 'Tickets', '24/7'],
    featured: false,
  },
  {
    name: 'Analytics-AI',
    role: 'Business Intelligence',
    desc: 'Analisis predictivo, deteccion de patrones y reportes automaticos con visualizaciones interactivas.',
    tags: ['Predictive', 'Reports', 'Insights'],
    featured: false,
  },
]

export default function AISuite() {
  const { ref, inView } = useScrollAnimation()

  return (
    <section id="ai" className="section">
      <div className="container" ref={ref}>
        <div className="section-header">
          <span className="section-tag">// AI SUITE</span>
          <h2 className="section-title">Inteligencias <span className="gradient-text">Artificiales</span></h2>
          <p className="section-desc">
            Ecosistema de IAs especializadas para potenciar cada area de tu negocio.
          </p>
        </div>

        <div className="ai__grid">
          {agents.map((a, i) => (
            <motion.div
              key={a.name}
              className={`ai__card ${a.featured ? 'ai__card--featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              <div className="ai__card-glow" />
              <div className="ai__status">
                <span className="ai__status-dot" />
                <span>Online</span>
              </div>
              <h3 className="ai__name">{a.name}</h3>
              <p className="ai__role">{a.role}</p>
              <p className="ai__desc">{a.desc}</p>
              <div className="ai__tags">
                {a.tags.map((t) => (
                  <span key={t} className="ai__tag">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
