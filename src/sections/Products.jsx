import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Products.css'

const features = [
  { num: '01', title: 'ERP Inteligente', desc: 'Inventarios, compras, ventas, finanzas y contabilidad con predicciones AI que anticipan la demanda.' },
  { num: '02', title: 'CRM Predictivo', desc: 'Pipeline de ventas con scoring automatico, seguimiento de clientes y machine learning para conversion.' },
  { num: '03', title: 'Analytics en Tiempo Real', desc: 'Dashboards interactivos con KPIs, reportes automaticos y alertas inteligentes cuando algo importa.' },
  { num: '04', title: 'Automatizacion Total', desc: 'Workflows que corren solos, integracion con APIs externas y procesos sin intervencion humana.' },
]

export default function Products() {
  const { ref, inView } = useScrollAnimation()

  return (
    <section id="products" className="section">
      <div className="container" ref={ref}>
        <div className="section-header">
          <span className="section-tag">// PRODUCTOS</span>
          <h2 className="section-title">Sistema <span className="gradient-text">Integral</span></h2>
          <p className="section-desc">
            La plataforma ERP + CRM mas avanzada, potenciada con inteligencia artificial para empresas que no se conforman.
          </p>
        </div>

        <div className="products__showcase">
          <motion.div
            className="products__terminal"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="terminal__header">
              <div className="terminal__dots">
                <span /><span /><span />
              </div>
              <span className="terminal__title">sistema-integral v4.0</span>
            </div>
            <div className="terminal__body">
              <div className="code-line">
                <span className="kw">import</span> {'{ ERP, CRM, AI }'} <span className="kw">from</span> <span className="str">'@asymmetrical/integral'</span>;
              </div>
              <div className="code-line" />
              <div className="code-line">
                <span className="kw">const</span> sistema = <span className="kw">new</span> <span className="fn">SistemaIntegral</span>({'{'}
              </div>
              <div className="code-line">  modules: [ERP, CRM],</div>
              <div className="code-line">  ai: <span className="kw">true</span>,</div>
              <div className="code-line">  analytics: <span className="str">'realtime'</span>,</div>
              <div className="code-line">  automation: <span className="str">'full'</span></div>
              <div className="code-line">{'}'});</div>
              <div className="code-line" />
              <div className="code-line"><span className="cmt">// AI-powered business intelligence</span></div>
              <div className="code-line">sistema.<span className="fn">activate</span>();</div>
              <div className="code-line typing">
                <span className="cursor-blink">|</span>
              </div>
            </div>
          </motion.div>

          <div className="products__features">
            {features.map((f, i) => (
              <motion.div
                key={f.num}
                className="products__feature"
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6 }}
              >
                <div className="products__feature-num">{f.num}</div>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
