import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './ACIA.css'

const capabilities = [
  { icon: '🖼', title: 'Generacion de Imagenes', desc: 'Stable Diffusion local con txt2img e img2img. Crea visuales unicos para campanas.' },
  { icon: '🎬', title: 'Generacion de Video', desc: 'Wan 2.1 para texto-a-video e imagen-a-video. Contenido animado profesional automatizado.' },
  { icon: '🤖', title: 'Agente IA con 18 Tools', desc: 'LLM local que crea, publica, agenda y optimiza contenido con lenguaje natural.' },
  { icon: '🎙', title: 'Narrador con IA', desc: 'Genera narraciones profesionales con voces sinteticas realistas para tus anuncios y contenido multimedia.' },
  { icon: '📝', title: 'Generador de Guiones con IA', desc: 'Crea guiones persuasivos y estructurados automaticamente, adaptados al tono de tu marca y plataforma.' },
  { icon: '🎛', title: 'Modulador de Voz con IA', desc: 'Ajusta tono, velocidad, emocion y estilo de las voces generadas para cada tipo de contenido.' },
  { icon: '✂', title: 'Generador de Clips con IA', desc: 'Extrae y genera clips optimizados para redes sociales a partir de videos largos, automaticamente.' },
  { icon: '📊', title: 'Tendencias & Hashtags', desc: 'Analisis de tendencias de TikTok, Instagram y Facebook con recomendaciones automaticas.' },
  { icon: '📅', title: 'Publicacion Automatica', desc: 'Calendario de contenido inteligente con horarios optimos por plataforma.' },
  { icon: '🎨', title: 'Editor de Fotos y Video Profesional', desc: 'Suite de edicion integrada con seleccion lazo, recorte, zoom, timeline de video y herramientas profesionales.' },
]

export default function ACIA() {
  const { ref, inView } = useScrollAnimation()

  return (
    <section id="acia" className="section">
      <div className="container" ref={ref}>
        <div className="section-header">
          <span className="section-tag">// ACIA</span>
          <h2 className="section-title">
            Generador de <span className="gradient-text">Anuncios con IA</span>
          </h2>
          <p className="section-desc">
            Automatiza todo el ciclo de vida del contenido publicitario: desde la ideacion hasta la publicacion,
            con IA local que corre en tu infraestructura.
          </p>
        </div>

        <div className="acia__grid">
          {capabilities.map((c, i) => (
            <motion.div
              key={i}
              className="acia__card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <span className="acia__card-icon">{c.icon}</span>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="acia__highlight"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="acia__highlight-badge">100% Local</div>
          <p>
            ACIA corre completamente en tu infraestructura. Sin enviar datos a la nube, sin depender de APIs externas.
            Tus datos, tus modelos, tu control total.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
