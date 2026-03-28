import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Contact.css'

export default function Contact() {
  const { ref, inView } = useScrollAnimation()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="section">
      <div className="container" ref={ref}>
        <div className="section-header">
          <span className="section-tag">// CONTACTO</span>
          <h2 className="section-title">Hablemos del <span className="gradient-text">Futuro</span></h2>
          <p className="section-desc">
            Agenda una demo personalizada y descubre como Asymmetricalcorp puede transformar tu empresa.
          </p>
        </div>

        <div className="contact__grid">
          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className="contact__field">
              <input type="text" placeholder="Nombre completo" required />
              <div className="contact__field-line" />
            </div>
            <div className="contact__field">
              <input type="email" placeholder="Email corporativo" required />
              <div className="contact__field-line" />
            </div>
            <div className="contact__field">
              <input type="text" placeholder="Empresa" />
              <div className="contact__field-line" />
            </div>
            <div className="contact__field">
              <textarea placeholder="Cuentanos sobre tu proyecto..." rows="4" />
              <div className="contact__field-line" />
            </div>
            <button type="submit" className="btn btn-primary contact__submit">
              {submitted ? 'Enviado!' : 'Enviar Mensaje'}
              {!submitted && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              )}
            </button>
          </motion.form>

          <motion.div
            className="contact__info"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            <div className="contact__info-card">
              <div className="contact__info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <p className="contact__info-label">Email</p>
                <p className="contact__info-value">contacto@asymmetrical.tech</p>
              </div>
            </div>

            <div className="contact__info-card">
              <div className="contact__info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="contact__info-label">Ubicacion</p>
                <p className="contact__info-value">Innovacion sin fronteras</p>
              </div>
            </div>

            <div className="contact__info-card">
              <div className="contact__info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <p className="contact__info-label">Disponibilidad</p>
                <p className="contact__info-value">24/7 con soporte AI</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
