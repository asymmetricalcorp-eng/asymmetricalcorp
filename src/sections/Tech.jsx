import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Tech.css'

const techItems = [
  { label: 'Cloud Native', icon: '\u2601' },
  { label: 'Microservices', icon: '\u2744' },
  { label: 'CI/CD', icon: '\u2699' },
  { label: 'Security First', icon: '\uD83D\uDD12' },
  { label: 'Real-time', icon: '\u26A1' },
  { label: 'GPU Accelerated', icon: '\uD83D\uDE80' },
]

const metrics = [
  { value: '99.9%', label: 'Disponibilidad' },
  { value: '<50ms', label: 'Latencia' },
  { value: '140+', label: 'Tests' },
  { value: '512-bit', label: 'Encriptacion' },
]

export default function Tech() {
  const { ref, inView } = useScrollAnimation()

  return (
    <section id="tech" className="section">
      <div className="container" ref={ref}>
        <div className="section-header">
          <span className="section-tag">// TECHNOLOGY</span>
          <h2 className="section-title">Stack <span className="gradient-text">Tecnologico</span></h2>
        </div>

        <div className="tech__grid">
          {techItems.map((t, i) => (
            <motion.div
              key={t.label}
              className="tech__item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <span className="tech__icon">{t.icon}</span>
              <span className="tech__label">{t.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="tech__metrics">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              className="tech__metric"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
            >
              <div className="tech__metric-value">{m.value}</div>
              <div className="tech__metric-label">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
