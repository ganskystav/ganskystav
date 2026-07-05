export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="container hero-content">

        <span className="hero-subtitle">
          GANSKY STAV s.r.o. • České Budějovice
        </span>

        <h1>
          Rekonstrukce,
          <br />
          stavební práce
          <br />
          a realizace projektů
        </h1>

        <p className="hero-text">
          Profesionální stavební společnost z Českých Budějovic.
          Realizujeme rekonstrukce, novostavby a kompletní stavební práce.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="hero-btn">
            Nezávazná poptávka
          </a>

          <a href="#gallery" className="hero-btn-outline">
            Naše realizace
          </a>
        </div>

      </div>
    </section>
  );
}