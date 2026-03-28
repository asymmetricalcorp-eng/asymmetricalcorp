import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#hero" className="footer__logo">
              <span className="footer__bracket">[</span>
              <span className="footer__logo-text">ASYMMETRICAL CORP</span>
              <span className="footer__bracket">]</span>
            </a>
            <p className="footer__tagline">Technology & Innovation</p>
            <p className="footer__philosophy">
              Donde la asimetria no es un defecto — es la estrategia.
            </p>
          </div>

          <div className="footer__links">
            <h4>Productos</h4>
            <a href="#products">Sistema Integral ERP+CRM</a>
            <a href="#acia">ACIA - Generador de Anuncios</a>
            <a href="#ai">JarVik AI</a>
            <a href="#ai">Sales-AI</a>
          </div>

          <div className="footer__links">
            <h4>Empresa</h4>
            <a href="#about">Nosotros</a>
            <a href="#clients">Clientes</a>
            <a href="#tech">Tecnologia</a>
            <a href="#contact">Contacto</a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; 2026 Asymmetrical Corp. All rights reserved.</p>
          <p className="footer__powered">Powered by AI</p>
        </div>
      </div>
    </footer>
  )
}
