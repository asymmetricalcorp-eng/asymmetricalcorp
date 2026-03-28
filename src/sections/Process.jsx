import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Process.css'

const steps = [
  {
    num: '01',
    title: 'Diagnostico',
    desc: 'Analizamos tu operacion actual, identificamos cuellos de botella y mapeamos oportunidades de automatizacion.',
    accent: 'var(--accent-purple)',
  },
  {
    num: '02',
    title: 'Arquitectura',
    desc: 'Disenamos la solucion a medida: que modulos necesitas, que IAs se integran, como fluyen los datos.',
    accent: 'var(--accent-cyan)',
  },
  {
    num: '03',
    title: 'Implementacion',
    desc: 'Desarrollo agil con sprints cortos. Cada entrega es funcional, testeable y lista para produccion.',
    accent: 'var(--accent-magenta)',
  },
  {
    num: '04',
    title: 'Evolucion',
    desc: 'Tu sistema crece contigo. Nuevos modulos, nuevas IAs, nuevas integraciones — sin reescribir nada.',
    accent: 'var(--accent-blue)',
  },
]

export default function Process() {
  const { ref, inView } = useScrollAnimation()

  return (
    <section id="process" className="section">
      <div className="container" ref={ref}>
        <div className="section-header">
          <span className="section-tag">// PROCESO</span>
          <h2 className="section-title">Como <span className="gradient-text">Trabajamos</span></h2>
          <p className="section-desc">
            Un proceso probado que transforma tu vision en software funcionando.
          </p>
        </div>

        <div className="process__timeline">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              className="process__step"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className="process__step-num" style={{ background: s.accent }}>{s.num}</div>
              <div className="process__step-line" />
              <div className="process__step-content">
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
